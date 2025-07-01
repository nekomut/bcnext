// Stage 1221 Data
import type { StageData } from '../../app/stage/types';

export const e1221Data: StageData = {
  eventId: 1221,
  eventName: "ことよろにゃ！(ΦωΦ)",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 221,
  stages: [
    {
      stageId: 0,
      stageName: "初日の出！",
      baseHp: 2020,
      width: 4000,
      enemyLimit: 16,
      requiredCost: 2,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "2020",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "9000",
          treasureName: "キャラクタードロップ(9000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "8000",
          treasureName: "キャラクタードロップ(8000)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3000",
          treasureName: "キャラクタードロップ(3000)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2000",
          treasureName: "キャラクタードロップ(2000)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1000",
          treasureName: "10式戦車(54)",
          probability: "2020",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "2020",
          amount: "12",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "494",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEQEBAfHx8pKSkuLi08PDxISEhWVlZkZGR0dHSDg4OUlJSenp6rq6uysrK8vLzIyMjOzs7W1tbl5eXx8fH///////+YVTd2AAAAIHRSTlMAOllrkBuy0e3///8A//////////////////////8A/yYQNN0AAAUBSURBVFiFrZeLkqsoEEDj24YLgihPXf7/L7fRGDGjU7dqt6dqUgb7pN/A65//KK//AfD6lqKq27Yufnz/epW40Nbl++kBUHZA+TAwaL8RRQdcCMFJX/4CqIEr61AUhfKyUsKgvXPeaQn1I6AF5Z1FgvWWQ25DASIkMK4GBdUDoAIVtLNKygl/i/fZUseQLBljypsgobkH9CJorwhhBLgJhtSZAXMwFIQcyIAW0voWUIK2TqGtcdWEmEXA6Rv3jtAlxhiAeT/2t4CaO6tBxbiuMQJbpjMKnVwHiHFZlrjA6GdcuQG0wnvG4rqk9yyaQ6uPc+NCxqSPK4IGTco7QCe9RQOW/T0mAssAgeo3QFH/BBDekOkAiCEDtHL5AEYanlxgzh2GLnFAnbooK5SiqNkq5LayRs5XeR/ECnM10HcMFj4LACAUhUCPZUwChjdGBdaR6hbQgFgsiLi9xwmBQc0myaww/0iblugETHFIJfZQiesEfMZCHgA41r41RiMhlfAkKQClg13llt6HXphWwwjjqD57qzMx1rsJv5+wSbbY3ndjC9Kty0ywWNxH16YmNMhwXqNl3V5eD/OgAvScwBTMoe7cLAc+2g1o1xna128AHAgYLe1PdZwMgAElk0emG8RM618AOBCCGaeP+X6mQJWPUTMYnA0jAFOkeATUaSAYd0TP+BGIjrtMQLGJphWoeJxIJciQBz4IkPEjAbAysCOBdQ+ABoYzdtponDwqZrICpA8JT4CO2Dz1Xl31UZbdlwdAiRM107cmGbyJsZkZ63vO/AT0LNM32lM4lMRpyoKl2N+nsYIze6kAFOjPz0rgm/XRAyw6zeQbQM9zB7QnNHNeA9k+UxjVPaD4xYCUw/0J/6/mHlBTa3IDKDmiNtA5iyGh4h7QD5cU6E/cJgA4ARKfbgEFqIsHI4S3isUxkgcDhltA2pVyD9ippNWSBcO6+xhcQ2D20XgvFu7qoOO5Bxbb7k4XmxrYAHV12Z3LZovhBaA+IXgLTiWc70ClTAMH8o2l3FzqxSWGklpCKMceWHeSnqZpBsB5HyksnkHzAXSwdbL0FwAJOAiZwbxljRS24QZYFg6qA9BsQxIBFwvEkXpNckcWhePVpXqC+gCU0P7588MCQVYjCdgoIN6JPy2oxTam+y8AxfphI+7l94ARigPQ0q29u+EaRFjcVj4rzvO9MtLhzb8lbQ4fwMzTgGn5VxrdYSyBL0lfdM0JkAKfmi6vRHMpJDuBNHqe52kT3NyqMqtEPBhR2lF+6QVj8nm+gM/cV3DdmUo5Bo2FDyKP4jkOUhVC3k3vZnxlhbSGEV8iTp9OeJnV8jUT+7aSAZqWDkDa+jLUMQjyAfDeW/NuLIoCreqoyxoaq/3vAcdMyjfG3ASz9dAh8tuFj9Sgs1oIw6cUNB6NKGOcD0LIke0nnLu9safuTKXBnWkPvsMWTEe9U7rmHlAQHk6CtWTPf7AfD9Z0hsQLR3sPSNeadDQz2x/ePOiP7fkdx+4B8KoIt94c4rwApn/qB/JkQbKBqrd68iJMFJsaG0ChTHgVklIMnDwfNDEO/X5AJkDJFvvvXkwxLB+ysHsB40hJTzFSZVXuUuEVasID9xxoVzTNUx0cyXSRlQ2b8jtbSaLtXu0c3430CGiKsuyYgLoG6NtM8CLXVS2QviieAXjr/Svp2wdAg7eTuq7bruv6O+nS1buuqzI7bP8Ldb0MGpsXhkMAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 40,
            actualDps: 25.53,
            magnification: "100%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "494",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEQEBAfHx8pKSkuLi08PDxISEhWVlZkZGR0dHSDg4OUlJSenp6rq6uysrK8vLzIyMjOzs7W1tbl5eXx8fH///////+YVTd2AAAAIHRSTlMAOllrkBuy0e3///8A//////////////////////8A/yYQNN0AAAUBSURBVFiFrZeLkqsoEEDj24YLgihPXf7/L7fRGDGjU7dqt6dqUgb7pN/A65//KK//AfD6lqKq27Yufnz/epW40Nbl++kBUHZA+TAwaL8RRQdcCMFJX/4CqIEr61AUhfKyUsKgvXPeaQn1I6AF5Z1FgvWWQ25DASIkMK4GBdUDoAIVtLNKygl/i/fZUseQLBljypsgobkH9CJorwhhBLgJhtSZAXMwFIQcyIAW0voWUIK2TqGtcdWEmEXA6Rv3jtAlxhiAeT/2t4CaO6tBxbiuMQJbpjMKnVwHiHFZlrjA6GdcuQG0wnvG4rqk9yyaQ6uPc+NCxqSPK4IGTco7QCe9RQOW/T0mAssAgeo3QFH/BBDekOkAiCEDtHL5AEYanlxgzh2GLnFAnbooK5SiqNkq5LayRs5XeR/ECnM10HcMFj4LACAUhUCPZUwChjdGBdaR6hbQgFgsiLi9xwmBQc0myaww/0iblugETHFIJfZQiesEfMZCHgA41r41RiMhlfAkKQClg13llt6HXphWwwjjqD57qzMx1rsJv5+wSbbY3ndjC9Kty0ywWNxH16YmNMhwXqNl3V5eD/OgAvScwBTMoe7cLAc+2g1o1xna128AHAgYLe1PdZwMgAElk0emG8RM618AOBCCGaeP+X6mQJWPUTMYnA0jAFOkeATUaSAYd0TP+BGIjrtMQLGJphWoeJxIJciQBz4IkPEjAbAysCOBdQ+ABoYzdtponDwqZrICpA8JT4CO2Dz1Xl31UZbdlwdAiRM107cmGbyJsZkZ63vO/AT0LNM32lM4lMRpyoKl2N+nsYIze6kAFOjPz0rgm/XRAyw6zeQbQM9zB7QnNHNeA9k+UxjVPaD4xYCUw/0J/6/mHlBTa3IDKDmiNtA5iyGh4h7QD5cU6E/cJgA4ARKfbgEFqIsHI4S3isUxkgcDhltA2pVyD9ippNWSBcO6+xhcQ2D20XgvFu7qoOO5Bxbb7k4XmxrYAHV12Z3LZovhBaA+IXgLTiWc70ClTAMH8o2l3FzqxSWGklpCKMceWHeSnqZpBsB5HyksnkHzAXSwdbL0FwAJOAiZwbxljRS24QZYFg6qA9BsQxIBFwvEkXpNckcWhePVpXqC+gCU0P7588MCQVYjCdgoIN6JPy2oxTam+y8AxfphI+7l94ARigPQ0q29u+EaRFjcVj4rzvO9MtLhzb8lbQ4fwMzTgGn5VxrdYSyBL0lfdM0JkAKfmi6vRHMpJDuBNHqe52kT3NyqMqtEPBhR2lF+6QVj8nm+gM/cV3DdmUo5Bo2FDyKP4jkOUhVC3k3vZnxlhbSGEV8iTp9OeJnV8jUT+7aSAZqWDkDa+jLUMQjyAfDeW/NuLIoCreqoyxoaq/3vAcdMyjfG3ASz9dAh8tuFj9Sgs1oIw6cUNB6NKGOcD0LIke0nnLu9safuTKXBnWkPvsMWTEe9U7rmHlAQHk6CtWTPf7AfD9Z0hsQLR3sPSNeadDQz2x/ePOiP7fkdx+4B8KoIt94c4rwApn/qB/JkQbKBqrd68iJMFJsaG0ChTHgVklIMnDwfNDEO/X5AJkDJFvvvXkwxLB+ysHsB40hJTzFSZVXuUuEVasID9xxoVzTNUx0cyXSRlQ2b8jtbSaLtXu0c3430CGiKsuyYgLoG6NtM8CLXVS2QviieAXjr/Svp2wdAg7eTuq7bruv6O+nS1buuqzI7bP8Ldb0MGpsXhkMAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 40,
            actualDps: 25.53,
            magnification: "100%",
            count: "10",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "494",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 40,
            actualDps: 25.53,
            magnification: "100%",
            count: "10",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "4.7-9.3s",
            delayFrames: "140-280f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "494",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 40,
            actualDps: 25.53,
            magnification: "100%",
            count: "10",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e1221Data;

