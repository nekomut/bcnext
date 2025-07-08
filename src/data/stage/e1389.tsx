// Stage 1389 Data
import type { StageData } from '../../app/stage/types';

export const e1389Data: StageData = {
  eventId: 1389,
  eventName: "決戦！反逆の戦国魔王",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 389,
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
      stageName: "覇王の野望 中級",
      baseHp: 50000,
      width: 4500,
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
          treasureId: "8400",
          treasureName: "キャラクタードロップ(8400)",
          probability: "1",
          amount: "55",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5350",
          treasureName: "キャラクタードロップ(5350)",
          probability: "1",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2300",
          treasureName: "キャラクタードロップ(2300)",
          probability: "1000",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1400",
          treasureName: "キャラクタードロップ(1400)",
          probability: "1",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "2000",
          amount: "5",
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
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
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
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "5",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "707",
          enemyName: "反逆の戦国魔王・織田信長",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 54000,
            ap: 870,
            dps: 123.7,
            speed: 7,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4350,
            freq: 211,
            foreswing: 82,
            backswing: 20,
            tba: 65
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 870,
            actualDps: 123.7,
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
            "omni-strike": {
                standing_range: 510,
                omni_range: [-300, 510]
            },
            "freeze": {
                chance: 100,
                duration_f: 180,
                duration_s: 6.0
            },
            "immune-knockback": {
                enabled: true
            },
            "counter-surge": {
                enabled: true
            }
          }
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
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "25",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "覇王の野望 激ムズ",
      baseHp: 250000,
      width: 4700,
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
          treasureId: "8000",
          treasureName: "キャラクタードロップ(8000)",
          probability: "1",
          amount: "56",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5350",
          treasureName: "キャラクタードロップ(5350)",
          probability: "1",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2300",
          treasureName: "キャラクタードロップ(2300)",
          probability: "1250",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1400",
          treasureName: "キャラクタードロップ(1400)",
          probability: "1",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "2500",
          amount: "4",
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
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "106.7-106.7s",
            delayFrames: "3,200-3,200f",
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
            actualHp: 98000,
            actualAp: 5567,
            actualDps: 10438.12,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            count: "1",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "707",
          enemyName: "反逆の戦国魔王・織田信長",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 54000,
            ap: 870,
            dps: 123.7,
            speed: 7,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4350,
            freq: 211,
            foreswing: 82,
            backswing: 20,
            tba: 65
          },
          stageStats: {
            actualHp: 432000,
            actualAp: 6960,
            actualDps: 989.6,
            magnification: "800%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 510,
                omni_range: [-300, 510]
            },
            "freeze": {
                chance: 100,
                duration_f: 180,
                duration_s: 6.0
            },
            "immune-knockback": {
                enabled: true
            },
            "counter-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "覇王の野望 極ムズ",
      baseHp: 700000,
      width: 4300,
      enemyLimit: 50,
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
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "1",
          amount: "57",
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
          treasureId: "3600",
          treasureName: "キャラクタードロップ(3600)",
          probability: "1500",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2050",
          treasureName: "キャラクタードロップ(2050)",
          probability: "1",
          amount: "207",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "3000",
          amount: "0",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "53",
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
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            spawnTime: "63.3s",
            spawnTimeFrames: "1,900f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
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
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "6",
            spawnTime: "22.0s",
            spawnTimeFrames: "660f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
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
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "6",
            spawnTime: "62.0s",
            spawnTimeFrames: "1,860f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
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
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "6",
            spawnTime: "115.3s",
            spawnTimeFrames: "3,460f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            count: "3",
            spawnTime: "64.0s",
            spawnTimeFrames: "1,920f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            count: "6",
            spawnTime: "117.3s",
            spawnTimeFrames: "3,520f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 52000,
            actualAp: 6200,
            actualDps: 4536.6,
            magnification: "400%",
            count: "2",
            spawnTime: "66.0s",
            spawnTimeFrames: "1,980f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 52000,
            actualAp: 6200,
            actualDps: 4536.6,
            magnification: "400%",
            count: "4",
            spawnTime: "119.3s",
            spawnTimeFrames: "3,580f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 40000,
            actualAp: 16000,
            actualDps: 11707.28,
            magnification: "800%",
            count: "2",
            spawnTime: "61.3s",
            spawnTimeFrames: "1,840f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 40000,
            actualAp: 16000,
            actualDps: 11707.28,
            magnification: "800%",
            count: "4",
            spawnTime: "114.7s",
            spawnTimeFrames: "3,440f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 19000,
            actualAp: 15000,
            actualDps: 3284.67,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 19000,
            actualAp: 15000,
            actualDps: 3284.67,
            magnification: "100%",
            count: "4",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "707",
          enemyName: "反逆の戦国魔王・織田信長",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEEBAQICAgJCQkKCAoREREYGBgiIiIqHyowJjAuLi4vLi86KTs8Ljw+Mj89PT1FOUVMPUxSOlFJR0lMS0thQGFPTU9mR2VVVVVrRmxtTG1mU2ZeXl5yUHJsVmtsYGxmZWaEWYV9YX1xcXGHZIeDaIN1c3WLZYuQYY+QY5CDd4J+fn6Vb5WabJqGgYaRepGheKGtcq6ucq6MjIyuda6XiJevd6+VjpWdipy2eLaUlJSikqK+fr6+fr7EgcTGg8ahoaHSi9LTi9KxprHWjdatra3Zj9iurq7aj9ndkt20sLPglODglODnmee6urrqmuntnO3wnvDCwMPxn/HCwsL0ofT0ofTLy8z+p/7/p///p///p///p///p///p///qP//qP//qP//qP//qP//qP//qP//qP//qP//qP//qP//qP//qP//qP//qP//qP//qP//qP//qP//qP/V1NXX1tfj4+Pt7e339/f///8qMSLiAAAAgHRSTlMAhpu03A1O/iRgOhdw/0bwxf9aJTas/+lqS3n+x4s6/xPgnv9p9Y3/Qer/z76i2WqS9//qsLHM2WY0/5r1zcPdB//pcbRag/871PKX0kz/vqzgZ80Z/zxU6e56/73X/bEza3mClssBBQsRFRwiJy04P0VMU1tjcoyiv/H+/P///+xVnNQAAAb2SURBVFiFnZf7Q9rYEsft3rVWWdxGu7El2lyJkBIhani5R9QbH41FG3VttkUk8lSR90vQJORf30mQbbuXwNr5Nef7OTMnc+bMjI1Z2lXfrJcMs6ur6+vrG7Dr6x9iXBnqvGnA+DcE2/MX/5TfFgqFYrFQuM1/hxgfH0yY+s1h++q+IS8WS2XDioVbI5C+ftICMGZzxhZsPT1sD5uXyslKFaxSLt7m+wSbc8o6DIcWc4wbAdzcPspr9UajUa8mS2YYhv7IMewgZjT9aOYbfb3RbKVSrWatUiqYBNvp0TC9Sej6ZvN/61t36UwmneoTxo/06eGAMUdX12Ovv+oD8/OBdgYISSB8CupbI/RjYz5d1zW3GT/oM4GJiV/3gNAwCG5dnxmZEbZTIOjBA9A3U5nsya8TE6FOO90CwpKmP8yOyqmr6xkIQo85ap8brXS7cxki2ItONnPXanwE9NbNqMSGX7AFAF+tvg4BZDv3Z2tn95cmwQlkd/6blBoMuMm/gYVb9YZ713Dg/oPoYTcvO+3M+S6QlwojCEYOfDqNhWL7TfcqOAAAgRH84MPh4V3w4WGpNIJwdZ0vlBZW6t7tP7xew4Gcn+MFV+7+8iSQCa3urxhZfTMMAElY3v+4fqrH1GXDgZyH53kqkbu/YANqyL3+3b0YHEEp+dHJy76wHgL9mV8UGYH0AGFHC0V3Pj+mpBXBiKBcqf9xGsu0d0Kwf1gQOZ7DSH8iF452wsFWo5ocEoThQDG532i9V5Y7y5v3uZxf4TmRZpj4WuKMPYlt3DXrlXIh//81yjY143D7gsGgz3Gw7z5vh7rs8UUu4ZF0VRAYxIgi+MB298xbUfw0+2rmtcPtdkwaVWx8yhE8VfW+LVQb7+cP97rRs1wuwfCioggUgyjOCEJjs+epdTcsh1RRtxamX0D1mPplwekLbh09dHuA2EozHYgsK0o4l0i4BFGkcF7WRNqVSER0Ze/w3GcuO3W8+Ef8tumFI834JIcCYV3QNMnjpxmaF5Gk6gKS6bWIokcXsxkj0x8c/x1wjFf/mw6q+vZKSI9HJXBRjosURwOC42gKUYzcVTj2JATRbr0d+B+MUvzmyNnwyScXmxHYR2FojkEkx1AMD3+C9n9QFHl7I7b1Z/HWClA4WFrxaOHNsCsSjVCgoqS4IDII0okhXIJ/c2e7vfq5Urod+NiYaVBZWfVGVSXy5csXF82IPEWQBM5QIiJImnOFo9HAXaMKRdoSkKy1Mp2wzIs8IdKKRNnt2ASBMIxCPEcifvukfdesli09gEyuNTOde1YQlbjAiQJi7Ha7IGO4QDAMhy1CZQBAqWABuDYB6c6xSxQEUeA4zK5wdgJxpMxgdjtBRTd7gIGHaDyJPUCWlWRR0SREYxN4XOJIDvGYgCOc1+N7bfMMBl+nvwGLvMIjVVEIbAKpIinEeRzjecQjRWcBUBkF8K4hcEHtqgwO/msCI3EMxvGSIjKip50yAQPvcx8QUSVF0xVe5hmBs1MajoskTjKcoBDwygCgOAIQWI4rkqBI4AEvUbRgxxDDkBRJSWixYwLygysK/MdCuQpnAIBuXJIVRBAoTmIMwiGreSTEkcx6vV7nm+GAO68iy6IQlzUah8MTIJ1xjECMJGtwil3Zu/S7BcAoyqVqI+VVpbgiq2pXokg7E2dkCcdICXOJaoRll1frSasQwIXbUqXeej+/zHoYoxjQBG7HaDhJnIhLcDcil9lMq54sWAPycBngVT7c3Im4EEfDRcIpQeExguJkRaTYTjbdrJULlm+LeQiN3Y0NKXxxFiYYjsAw8EMgMNSNo7XI2tBE7B1C8cD9EDqXt8P+XMIlSgSG03YSQ7wquPyKxqZbdcs0MACzb9wxXe/uhLZ1eBc+iF1Fwoz72HV5PJvHRjnbhQgGHcE4lGcfFOdezd1N+ZbhZbv38AJCUBCEtUTu4vgkCt9U3zuLCGzTjuBR7EHVNNVZ23Wa7ckcDkaQkA6s0WYcBrZOHzQ55BjSbNpmX7199/uf+41Uup314iRNUTRJUgTba1MatYN3b1+9slkDjKIAT3zF7NEO5yiEYH+KW+zpHxvG4U2O2amWkkaXlt7AGNqo6HPH0OQY+xv9wbAGo4cwamMpWa03W+/nBJqiaXru5An6bwjw0BMEFPa5w3Y69ai3ymIrgnMO9t9IQ/j1nv7merT+8YkwCc15UXSmUk2z6YfJ418E8JVQTlZr+y8J8rfP9RqMHU/Rm0EYPlSq6y9f7lerSUM+oLUZQSiUoO9//bpcLhVN+RP0fQJMXsX+5PYk+Vhv9svnb8HM2fGp8rHe8Hpz05tef0DeR5jiHx2gHyfwH9SOTz2ffPbsJ8OePftlcuqF1cRqZZM/T3xn/3k+aNVfDRjx7ifwwjIAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 54000,
            ap: 870,
            dps: 123.7,
            speed: 7,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4350,
            freq: 211,
            foreswing: 82,
            backswing: 20,
            tba: 65
          },
          stageStats: {
            actualHp: 1620000,
            actualAp: 26100,
            actualDps: 3711.0,
            magnification: "3000%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 510,
                omni_range: [-300, 510]
            },
            "freeze": {
                chance: 100,
                duration_f: 180,
                duration_s: 6.0
            },
            "immune-knockback": {
                enabled: true
            },
            "counter-surge": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "覇王の野望 超極ムズ",
      baseHp: 900000,
      width: 4700,
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
          amount: "1250",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6100",
          treasureName: "キャラクタードロップ(6100)",
          probability: "1",
          amount: "105",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4400",
          treasureName: "キャラクタードロップ(4400)",
          probability: "1",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "54",
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
            actualHp: 3600,
            actualAp: 320,
            actualDps: 204.4,
            magnification: "4000%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "554",
          enemyName: "ケルベローズ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 2500,
            ap: 2500,
            dps: 1442.31,
            speed: 10,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 66,
            freq: 52,
            foreswing: 13,
            backswing: 16,
            tba: 20
          },
          stageStats: {
            actualHp: 12500,
            actualAp: 12500,
            actualDps: 7211.55,
            magnification: "500%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 8800,
            actualDps: 7135.12,
            magnification: "400%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "407",
          enemyName: "古代わんこ",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 75000,
            ap: 12000,
            dps: 8571.43,
            speed: 20,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 42,
            foreswing: 4,
            backswing: 38,
            tba: 15
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 12000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 35,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 170000,
            actualAp: 13736,
            actualDps: 25755.0,
            magnification: "200%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "savage-blow": {
                chance: 100,
                power: 1.1
            }
          }
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 8800,
            actualDps: 7135.12,
            magnification: "400%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "407",
          enemyName: "古代わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgICAgIDAwMEBAQFBQUFBQUGBgYGBgYICAgICAgICAgJCQkKCgoKCgoLCwsODg0ODw4ODw0SExETFBAXGRUYGhYaHBgmKyEqMSMrMyUyOys9Qjg7RjE8RTU9RjQrVTVFTD1FVjZNXEAuckRUa0BeYllZdENrbGhwcXBve2s9n2OGiISWmJROwnygo59H5IWwsK9k6Ji6urrExMTPz8+n7MPZ2dni4uLq6ury8vL39/f8/Pz///////+IW3BRAAAAQHRSTlMABREbPUgm7GaxMVb5pnB9lMTendGJ/bbt/tHq/63c//D///3///////7d///+/////////////////////wD/1bEgRQAABxlJREFUWIXFV9uWokoSPeAdFEURRbNNhCyQpqBoCmiu4///1ewEbS0tZ85Z8zDxwKIocxOXHTuCv/71P9pf/3+Av2OCINz9IQqvf/ni/LA/vB4SegNlIP6z42J/PRuLl3tprmoL6Z+cFyVlshytet3r5dnBMzf9/x6E0BO7uMXBamd6tsrPCMO5aoap9zcAxMF6rQwkURAHs72f5OEOMeC8xuKi8AEgisJ/AunJm/1+t1nN5fHMDPKmiQ/rntBTNJZU59LfDcSBIksvq4FINyZ7c2xzr2lbF2ea1J4MRXljx1VzLoOdLK2W2kLuvUAQBxvTaY1RYlh+nFeZp/aHCzMqmxZgrOxse7+RX5RTlFXTOXUQjk0JILJAk2XVRzBNA4AFfwPbr4avQlBU7gJzGOvcsIJgv1gtgyyHpf5e27PTyTFnLwDaJOxt54/ZhBjT5WhKLItSixq6bjscYP09AErUk8bqFYHZNmMW0ae6YeBoeyXMwdODMvwui2J/rCjzlbYldpcIixCL2ZZhWAQAxvFIDQJIau/mSv85jYK03h0OB9OkhOL0qc3j8XhkR4qSGLb/8f5GDDyhpqZqa+nJB0HewWWePNvm508tBhAogZ3i/Pfnx/vRMCgj272pjZ9cEOcHxjoE508tgXY8EoM4cVn+/vz8BQSLEcK85zwKwxUL/M680w0AuSTkGGS/f3/++vX58UZsRmw/OCi9R4D+jyCOkyRNkziOwiDwPe/U+sIQRsiPtwBHILqB/+MpB6K8c/0gitMsL6uqLPI0SSKfR8SOb28dwGcH4Abh4ZnMwmC1RK2I5YVJXpRVXdV1mfiWZdkAeP/s7OPtzXGD+Od3TBL7M04ZHWn2gigFxPlcZSGjzHkDwq/2/LsfIc7gOYA2CROdWIR6QYgMBGGcVU1TFymCSgJ2fP/4eH9/85OySPzdNYAvoi0qmkHhXlYUecZTmaRFjR6s66bKQ56I49GNy3MRoBkv53ryHSPFxQgSwF+LM0hBmecF9wEA56aIA3DKj0v4FO7nlxKKg8nsTzaF4QwZDMrzueleixtcyySM8xq3eRJFQAeSdwUQpMV2u7nOCqG/MSzLRw352as1qWtYYcHvmgqqVsfM0JcXgJ6ypNZ+dkGAGhk2tVFD+H0DiMlU9/I/D+qITKdXAGmBzoc8dXkQxxoBa1mI1H31gAbFFaCpY5eQOw9sLnCLdlpwAMehFgCqOwDkIETof/4ukjg8XHPQn+1BdXvX9rY4X0ItbA9KfJeDc1OVPKTmApdnWRYd1sNuMojjpXXiCHPUtcer6IZpeRfAHU5doUHy0LVt191OLsNFkGatyHIEjIQtj/9LDXhF2ysImURx6EFZIa3T0VKbyL0ubrjQIsgrk5OwrL8UEUzo4sh5kwfgCVrdM4jv7SeDlgkr7gJHmB0CHC/r5sv5Ku8qiEyURZky6qNPXBJkmb9XuuK3LgBhS6LiK4d44GmU3h41VeSiu6kVZHWdmPOOv4vWhZNDSfgQP0966Gf3rKpQ06Cjduaur/yjfNZgjPltCrrfX6pW+G52H1LbJm1irx60LrQiDhcsKEHbw0hk6wsAGPrvO6vCg3JVMmwE7RiCFhmEWm5clLwYrcshdSPI7LPFripfZWC861wgEDNMAC8BQNE1VJ36fKZitN4bpSYWkPlVFdtSdgDUodTnIXBBaLr6Q5h1A+y7mW0sN5PV+DZescBY3AWiE4diFerIdyFUUxWJhf0qv1lkzvrD4f2aNFy3hKbcAzeDmnPe3xiVsTs9OPO1a/4wlPhmhVJyAMsK+WhCS9zok0Km7kpZRbuHuSoM1tAi50QNemKkHQpZVd/emFK/uGNXGTwMZmG43u1RQBuzH3EYBrsICKdNS+cngK9jDWJq810ISwhxGDHcqCvDub4oc2rdJK3lxqMHkEaUkREdCxAFDTBaQSOuRHXHBXAru7Ng+ZBEcbDYmW0ZDd5oJQfAcd4X/HweYDHybjTwrO3kYVMVpTFfH+ECDTGXoYF1kaUXaSxjZrF7HrnMetpU8S2yOiCJugUAPtWzOAjSqm3KKuMbwxdLw/3icbqL2NDQTMTFVC9yDGPiZpxKoFT9pBJ16m6evlyE4XgzmhoQqzyNPGx1LCvyqk5D9OajFdGzB20Yi+VUJ0EcWHwtpXGclrmPdeHZzO+3dUGaa1O+BeK4Pt2aXpSFB3Uy2Wgjvubq7bKrj9TNZvFi20dj63y5xm5tjDaLHz9/HlbjwWAwnoygFPpopOM6wRPp1cefqGypbWgzzSCqPJRkBRsxlhisEVtKlqvVCFelJ7z4ZsIPe+MlIaOZMtF1Ve5LfZjEDdnR9Yk81vjz77+5hJ40kMfjFdI4VWdLrACT2c0m6mg6VRcrDdf5WB5IT59M+M5YTFRVW446m06noy/GHyz5f5eaqs7m3Ubxb7uN34zBeJ31AAAAAElFTkSuQmCC",
          traits: ["古"],
          baseStats: {
            hp: 75000,
            ap: 12000,
            dps: 8571.43,
            speed: 20,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 42,
            foreswing: 4,
            backswing: 38,
            tba: 15
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 12000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 35,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 170000,
            actualAp: 13736,
            actualDps: 25755.0,
            magnification: "200%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "savage-blow": {
                chance: 100,
                power: 1.1
            }
          }
        },
        {
          enemyId: "707",
          enemyName: "反逆の戦国魔王・織田信長",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 54000,
            ap: 870,
            dps: 123.7,
            speed: 7,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4350,
            freq: 211,
            foreswing: 82,
            backswing: 20,
            tba: 65
          },
          stageStats: {
            actualHp: 2700000,
            actualAp: 43500,
            actualDps: 6185.0,
            magnification: "5000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 510,
                omni_range: [-300, 510]
            },
            "freeze": {
                chance: 100,
                duration_f: 180,
                duration_s: 6.0
            },
            "immune-knockback": {
                enabled: true
            },
            "counter-surge": {
                enabled: true
            }
          }
        }]
    }
  ]
} as const;

export default e1389Data;

