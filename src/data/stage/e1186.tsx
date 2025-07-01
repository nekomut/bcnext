// Stage 1186 Data
import type { StageData } from '../../app/stage/types';

export const e1186Data: StageData = {
  eventId: 1186,
  eventName: "さらに召喚された福！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 186,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "幸せを丸かぶり",
      baseHp: 150000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "437",
          enemyName: "幸福の犬",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgIHBwcHBwcICAgICAgJCQkKCQkKCgoLCwsLCwsLCwsNDAwNDQ0NDQ0ODg4ODg4RERESEhISEhITExMSFA8VFRUaGhogICAgJRhnBggnJSIpPAgyMTE2NjUzQwxJORM/Pz41WgRCYAZGYgZ4RhZYV1dccgdVeQhmbVZdgwVlhwVzc3K3ZhyBlQy9hyiUpzHqiS6upp24rKC8t7LeuGvwyFrJz6TXzb/Z0L3l0LTk287t5dfr7/7FAAAAQHRSTlMAC/8a7iqEMzrC/1FjoPr1Q5az4XXP/+ip8P//Uv//ZP8tg//9C1Gf/P79MdSdw/3//v/9/88o+v///3AN/5z/U9RNtwAAAq1JREFUWIWtl113ojAQhhWQjxEBQUJNullasFXbrYp21bau//9f7SSKvdnT04yb46Xz5J03k5nQ6Xy5Pj5+vz943a//9CXgz+tsXKQJOf59OwPLgrxv01Q8vZZgwQ8AJx+GCYExqhnujxpwRZlnHN/LoQ3HldrmAgTuzwA3z/JgYC5AAQABED++PFBcnDyihRgPcrX+NTGP70xe5lIKmDbNbr+6Jyi4W62m02XV7Pf73frZ3MJOslg3m02zQcDb23PPHODX28Nus9nt94fjtiAAvKJcHw6H4/GwXcgsuTMG9DJezmaLxWwmGcTpba9naCQCZCk5Y3iUVpQHWXFjCmCyFhxrSSAFf1AQAKjAYpKrgsRLaQwQNaaPCtADB+IsNwVwgQJwZwFW6sZZYlhMvsOkBliMw8AO+6bVnMS8rLnKHbvBgHAX+jETpVaAbYEEiIBLdgJYI/P4ThhxIc6AKKQBuDgLiPokAOP6FBEQUwAjTIHzkwIKoDtAD9sUSID0dIM0wCGMRwTwC6AgTAUE4FU4eWhlhI6mFLSFSAbw/wBgGpATxoKdM1XKQAaohiT5dQBdSPpxEBBuswK0dQApCYAWtCkQAeWlIdEA2FPZdQo+PaC0RG1i68HQPB6nOxZS6wEF4I8/eypJAQKkOHc0kgKvUICzApcG0JdJK6DMFQW4ajB5hbicImkw+YXQp0AHjBHAr5hsyVhc2gEJ0FcAzq6YrbGU8ooUJiEX+pGnyoAyGh8ehahLnQLA+KfxB4d9v5qXdYnHwCyQc6Mvlm7X9kfBuFrNq0o9lWU1f3kyiO+5aV5EEDk399PlciqXTZPfJuH3Z1vXC4c36cDt214mpxWrqiounNg1aWpdP3SHaRA46N/pmQ1R4Ib+txm2G2SOE0d6qegodpwscP8x3/4Chk1Gt4eei7QAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 100000,
            ap: 24000,
            dps: 14400.0,
            speed: 14,
            range: 380,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 24000,
            actualDps: 14400.0,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 60000,
            actualAp: 4684,
            actualDps: 8783.43,
            magnification: "150%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 60000,
            actualAp: 4684,
            actualDps: 8783.43,
            magnification: "150%",
            count: "2",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "437",
          enemyName: "幸福の犬",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgIHBwcHBwcICAgICAgJCQkKCQkKCgoLCwsLCwsLCwsNDAwNDQ0NDQ0ODg4ODg4RERESEhISEhITExMSFA8VFRUaGhogICAgJRhnBggnJSIpPAgyMTE2NjUzQwxJORM/Pz41WgRCYAZGYgZ4RhZYV1dccgdVeQhmbVZdgwVlhwVzc3K3ZhyBlQy9hyiUpzHqiS6upp24rKC8t7LeuGvwyFrJz6TXzb/Z0L3l0LTk287t5dfr7/7FAAAAQHRSTlMAC/8a7iqEMzrC/1FjoPr1Q5az4XXP/+ip8P//Uv//ZP8tg//9C1Gf/P79MdSdw/3//v/9/88o+v///3AN/5z/U9RNtwAAAq1JREFUWIWtl113ojAQhhWQjxEBQUJNullasFXbrYp21bau//9f7SSKvdnT04yb46Xz5J03k5nQ6Xy5Pj5+vz943a//9CXgz+tsXKQJOf59OwPLgrxv01Q8vZZgwQ8AJx+GCYExqhnujxpwRZlnHN/LoQ3HldrmAgTuzwA3z/JgYC5AAQABED++PFBcnDyihRgPcrX+NTGP70xe5lIKmDbNbr+6Jyi4W62m02XV7Pf73frZ3MJOslg3m02zQcDb23PPHODX28Nus9nt94fjtiAAvKJcHw6H4/GwXcgsuTMG9DJezmaLxWwmGcTpba9naCQCZCk5Y3iUVpQHWXFjCmCyFhxrSSAFf1AQAKjAYpKrgsRLaQwQNaaPCtADB+IsNwVwgQJwZwFW6sZZYlhMvsOkBliMw8AO+6bVnMS8rLnKHbvBgHAX+jETpVaAbYEEiIBLdgJYI/P4ThhxIc6AKKQBuDgLiPokAOP6FBEQUwAjTIHzkwIKoDtAD9sUSID0dIM0wCGMRwTwC6AgTAUE4FU4eWhlhI6mFLSFSAbw/wBgGpATxoKdM1XKQAaohiT5dQBdSPpxEBBuswK0dQApCYAWtCkQAeWlIdEA2FPZdQo+PaC0RG1i68HQPB6nOxZS6wEF4I8/eypJAQKkOHc0kgKvUICzApcG0JdJK6DMFQW4ajB5hbicImkw+YXQp0AHjBHAr5hsyVhc2gEJ0FcAzq6YrbGU8ooUJiEX+pGnyoAyGh8ehahLnQLA+KfxB4d9v5qXdYnHwCyQc6Mvlm7X9kfBuFrNq0o9lWU1f3kyiO+5aV5EEDk399PlciqXTZPfJuH3Z1vXC4c36cDt214mpxWrqiounNg1aWpdP3SHaRA46N/pmQ1R4Ib+txm2G2SOE0d6qegodpwscP8x3/4Chk1Gt4eei7QAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 100000,
            ap: 24000,
            dps: 14400.0,
            speed: 14,
            range: 380,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 24000,
            actualDps: 14400.0,
            magnification: "100%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "437",
          enemyName: "幸福の犬",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgIHBwcHBwcICAgICAgJCQkKCQkKCgoLCwsLCwsLCwsNDAwNDQ0NDQ0ODg4ODg4RERESEhISEhITExMSFA8VFRUaGhogICAgJRhnBggnJSIpPAgyMTE2NjUzQwxJORM/Pz41WgRCYAZGYgZ4RhZYV1dccgdVeQhmbVZdgwVlhwVzc3K3ZhyBlQy9hyiUpzHqiS6upp24rKC8t7LeuGvwyFrJz6TXzb/Z0L3l0LTk287t5dfr7/7FAAAAQHRSTlMAC/8a7iqEMzrC/1FjoPr1Q5az4XXP/+ip8P//Uv//ZP8tg//9C1Gf/P79MdSdw/3//v/9/88o+v///3AN/5z/U9RNtwAAAq1JREFUWIWtl113ojAQhhWQjxEBQUJNullasFXbrYp21bau//9f7SSKvdnT04yb46Xz5J03k5nQ6Xy5Pj5+vz943a//9CXgz+tsXKQJOf59OwPLgrxv01Q8vZZgwQ8AJx+GCYExqhnujxpwRZlnHN/LoQ3HldrmAgTuzwA3z/JgYC5AAQABED++PFBcnDyihRgPcrX+NTGP70xe5lIKmDbNbr+6Jyi4W62m02XV7Pf73frZ3MJOslg3m02zQcDb23PPHODX28Nus9nt94fjtiAAvKJcHw6H4/GwXcgsuTMG9DJezmaLxWwmGcTpba9naCQCZCk5Y3iUVpQHWXFjCmCyFhxrSSAFf1AQAKjAYpKrgsRLaQwQNaaPCtADB+IsNwVwgQJwZwFW6sZZYlhMvsOkBliMw8AO+6bVnMS8rLnKHbvBgHAX+jETpVaAbYEEiIBLdgJYI/P4ThhxIc6AKKQBuDgLiPokAOP6FBEQUwAjTIHzkwIKoDtAD9sUSID0dIM0wCGMRwTwC6AgTAUE4FU4eWhlhI6mFLSFSAbw/wBgGpATxoKdM1XKQAaohiT5dQBdSPpxEBBuswK0dQApCYAWtCkQAeWlIdEA2FPZdQo+PaC0RG1i68HQPB6nOxZS6wEF4I8/eypJAQKkOHc0kgKvUICzApcG0JdJK6DMFQW4ajB5hbicImkw+YXQp0AHjBHAr5hsyVhc2gEJ0FcAzq6YrbGU8ooUJiEX+pGnyoAyGh8ehahLnQLA+KfxB4d9v5qXdYnHwCyQc6Mvlm7X9kfBuFrNq0o9lWU1f3kyiO+5aV5EEDk399PlciqXTZPfJuH3Z1vXC4c36cDt214mpxWrqiounNg1aWpdP3SHaRA46N/pmQ1R4Ib+txm2G2SOE0d6qegodpwscP8x3/4Chk1Gt4eei7QAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 100000,
            ap: 24000,
            dps: 14400.0,
            speed: 14,
            range: 380,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 24000,
            actualDps: 14400.0,
            magnification: "100%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "437",
          enemyName: "幸福の犬",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgIHBwcHBwcICAgICAgJCQkKCQkKCgoLCwsLCwsLCwsNDAwNDQ0NDQ0ODg4ODg4RERESEhISEhITExMSFA8VFRUaGhogICAgJRhnBggnJSIpPAgyMTE2NjUzQwxJORM/Pz41WgRCYAZGYgZ4RhZYV1dccgdVeQhmbVZdgwVlhwVzc3K3ZhyBlQy9hyiUpzHqiS6upp24rKC8t7LeuGvwyFrJz6TXzb/Z0L3l0LTk287t5dfr7/7FAAAAQHRSTlMAC/8a7iqEMzrC/1FjoPr1Q5az4XXP/+ip8P//Uv//ZP8tg//9C1Gf/P79MdSdw/3//v/9/88o+v///3AN/5z/U9RNtwAAAq1JREFUWIWtl113ojAQhhWQjxEBQUJNullasFXbrYp21bau//9f7SSKvdnT04yb46Xz5J03k5nQ6Xy5Pj5+vz943a//9CXgz+tsXKQJOf59OwPLgrxv01Q8vZZgwQ8AJx+GCYExqhnujxpwRZlnHN/LoQ3HldrmAgTuzwA3z/JgYC5AAQABED++PFBcnDyihRgPcrX+NTGP70xe5lIKmDbNbr+6Jyi4W62m02XV7Pf73frZ3MJOslg3m02zQcDb23PPHODX28Nus9nt94fjtiAAvKJcHw6H4/GwXcgsuTMG9DJezmaLxWwmGcTpba9naCQCZCk5Y3iUVpQHWXFjCmCyFhxrSSAFf1AQAKjAYpKrgsRLaQwQNaaPCtADB+IsNwVwgQJwZwFW6sZZYlhMvsOkBliMw8AO+6bVnMS8rLnKHbvBgHAX+jETpVaAbYEEiIBLdgJYI/P4ThhxIc6AKKQBuDgLiPokAOP6FBEQUwAjTIHzkwIKoDtAD9sUSID0dIM0wCGMRwTwC6AgTAUE4FU4eWhlhI6mFLSFSAbw/wBgGpATxoKdM1XKQAaohiT5dQBdSPpxEBBuswK0dQApCYAWtCkQAeWlIdEA2FPZdQo+PaC0RG1i68HQPB6nOxZS6wEF4I8/eypJAQKkOHc0kgKvUICzApcG0JdJK6DMFQW4ajB5hbicImkw+YXQp0AHjBHAr5hsyVhc2gEJ0FcAzq6YrbGU8ooUJiEX+pGnyoAyGh8ehahLnQLA+KfxB4d9v5qXdYnHwCyQc6Mvlm7X9kfBuFrNq0o9lWU1f3kyiO+5aV5EEDk399PlciqXTZPfJuH3Z1vXC4c36cDt214mpxWrqiounNg1aWpdP3SHaRA46N/pmQ1R4Ib+txm2G2SOE0d6qegodpwscP8x3/4Chk1Gt4eei7QAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 100000,
            ap: 24000,
            dps: 14400.0,
            speed: 14,
            range: 380,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 24000,
            actualDps: 14400.0,
            magnification: "100%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "家族たちの沈黙",
      baseHp: 250000,
      width: 3800,
      enemyLimit: 15,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "45",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 16000,
            actualDps: 6315.78,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
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
            actualHp: 180000,
            actualAp: 9000,
            actualDps: 5400.0,
            magnification: "300%",
            count: "1",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 180000,
            actualAp: 9000,
            actualDps: 5400.0,
            magnification: "300%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 180000,
            actualAp: 9000,
            actualDps: 5400.0,
            magnification: "300%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 180000,
            actualAp: 9000,
            actualDps: 5400.0,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "437",
          enemyName: "幸福の犬",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgIHBwcHBwcICAgICAgJCQkKCQkKCgoLCwsLCwsLCwsNDAwNDQ0NDQ0ODg4ODg4RERESEhISEhITExMSFA8VFRUaGhogICAgJRhnBggnJSIpPAgyMTE2NjUzQwxJORM/Pz41WgRCYAZGYgZ4RhZYV1dccgdVeQhmbVZdgwVlhwVzc3K3ZhyBlQy9hyiUpzHqiS6upp24rKC8t7LeuGvwyFrJz6TXzb/Z0L3l0LTk287t5dfr7/7FAAAAQHRSTlMAC/8a7iqEMzrC/1FjoPr1Q5az4XXP/+ip8P//Uv//ZP8tg//9C1Gf/P79MdSdw/3//v/9/88o+v///3AN/5z/U9RNtwAAAq1JREFUWIWtl113ojAQhhWQjxEBQUJNullasFXbrYp21bau//9f7SSKvdnT04yb46Xz5J03k5nQ6Xy5Pj5+vz943a//9CXgz+tsXKQJOf59OwPLgrxv01Q8vZZgwQ8AJx+GCYExqhnujxpwRZlnHN/LoQ3HldrmAgTuzwA3z/JgYC5AAQABED++PFBcnDyihRgPcrX+NTGP70xe5lIKmDbNbr+6Jyi4W62m02XV7Pf73frZ3MJOslg3m02zQcDb23PPHODX28Nus9nt94fjtiAAvKJcHw6H4/GwXcgsuTMG9DJezmaLxWwmGcTpba9naCQCZCk5Y3iUVpQHWXFjCmCyFhxrSSAFf1AQAKjAYpKrgsRLaQwQNaaPCtADB+IsNwVwgQJwZwFW6sZZYlhMvsOkBliMw8AO+6bVnMS8rLnKHbvBgHAX+jETpVaAbYEEiIBLdgJYI/P4ThhxIc6AKKQBuDgLiPokAOP6FBEQUwAjTIHzkwIKoDtAD9sUSID0dIM0wCGMRwTwC6AgTAUE4FU4eWhlhI6mFLSFSAbw/wBgGpATxoKdM1XKQAaohiT5dQBdSPpxEBBuswK0dQApCYAWtCkQAeWlIdEA2FPZdQo+PaC0RG1i68HQPB6nOxZS6wEF4I8/eypJAQKkOHc0kgKvUICzApcG0JdJK6DMFQW4ajB5hbicImkw+YXQp0AHjBHAr5hsyVhc2gEJ0FcAzq6YrbGU8ooUJiEX+pGnyoAyGh8ehahLnQLA+KfxB4d9v5qXdYnHwCyQc6Mvlm7X9kfBuFrNq0o9lWU1f3kyiO+5aV5EEDk399PlciqXTZPfJuH3Z1vXC4c36cDt214mpxWrqiounNg1aWpdP3SHaRA46N/pmQ1R4Ib+txm2G2SOE0d6qegodpwscP8x3/4Chk1Gt4eei7QAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 100000,
            ap: 24000,
            dps: 14400.0,
            speed: 14,
            range: 380,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 36000,
            actualDps: 21600.0,
            magnification: "150%",
            count: "3",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "99%",
            isBoss: false
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
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "Eat Happy Osushi",
      baseHp: 350000,
      width: 5500,
      enemyLimit: 10,
      requiredCost: 210,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "5",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "60",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "437",
          enemyName: "幸福の犬",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgIHBwcHBwcICAgICAgJCQkKCQkKCgoLCwsLCwsLCwsNDAwNDQ0NDQ0ODg4ODg4RERESEhISEhITExMSFA8VFRUaGhogICAgJRhnBggnJSIpPAgyMTE2NjUzQwxJORM/Pz41WgRCYAZGYgZ4RhZYV1dccgdVeQhmbVZdgwVlhwVzc3K3ZhyBlQy9hyiUpzHqiS6upp24rKC8t7LeuGvwyFrJz6TXzb/Z0L3l0LTk287t5dfr7/7FAAAAQHRSTlMAC/8a7iqEMzrC/1FjoPr1Q5az4XXP/+ip8P//Uv//ZP8tg//9C1Gf/P79MdSdw/3//v/9/88o+v///3AN/5z/U9RNtwAAAq1JREFUWIWtl113ojAQhhWQjxEBQUJNullasFXbrYp21bau//9f7SSKvdnT04yb46Xz5J03k5nQ6Xy5Pj5+vz943a//9CXgz+tsXKQJOf59OwPLgrxv01Q8vZZgwQ8AJx+GCYExqhnujxpwRZlnHN/LoQ3HldrmAgTuzwA3z/JgYC5AAQABED++PFBcnDyihRgPcrX+NTGP70xe5lIKmDbNbr+6Jyi4W62m02XV7Pf73frZ3MJOslg3m02zQcDb23PPHODX28Nus9nt94fjtiAAvKJcHw6H4/GwXcgsuTMG9DJezmaLxWwmGcTpba9naCQCZCk5Y3iUVpQHWXFjCmCyFhxrSSAFf1AQAKjAYpKrgsRLaQwQNaaPCtADB+IsNwVwgQJwZwFW6sZZYlhMvsOkBliMw8AO+6bVnMS8rLnKHbvBgHAX+jETpVaAbYEEiIBLdgJYI/P4ThhxIc6AKKQBuDgLiPokAOP6FBEQUwAjTIHzkwIKoDtAD9sUSID0dIM0wCGMRwTwC6AgTAUE4FU4eWhlhI6mFLSFSAbw/wBgGpATxoKdM1XKQAaohiT5dQBdSPpxEBBuswK0dQApCYAWtCkQAeWlIdEA2FPZdQo+PaC0RG1i68HQPB6nOxZS6wEF4I8/eypJAQKkOHc0kgKvUICzApcG0JdJK6DMFQW4ajB5hbicImkw+YXQp0AHjBHAr5hsyVhc2gEJ0FcAzq6YrbGU8ooUJiEX+pGnyoAyGh8ehahLnQLA+KfxB4d9v5qXdYnHwCyQc6Mvlm7X9kfBuFrNq0o9lWU1f3kyiO+5aV5EEDk399PlciqXTZPfJuH3Z1vXC4c36cDt214mpxWrqiounNg1aWpdP3SHaRA46N/pmQ1R4Ib+txm2G2SOE0d6qegodpwscP8x3/4Chk1Gt4eei7QAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 100000,
            ap: 24000,
            dps: 14400.0,
            speed: 14,
            range: 380,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 48000,
            actualDps: 28800.0,
            magnification: "200%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "056",
          enemyName: "メタルサイボーグ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 800,
            ap: 3200,
            dps: 16000.0,
            speed: 4,
            range: 80,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 6,
            foreswing: 3,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 800,
            actualAp: 3200,
            actualDps: 16000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 120000,
            actualAp: 2200,
            actualDps: 4125.0,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "437",
          enemyName: "幸福の犬",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgIHBwcHBwcICAgICAgJCQkKCQkKCgoLCwsLCwsLCwsNDAwNDQ0NDQ0ODg4ODg4RERESEhISEhITExMSFA8VFRUaGhogICAgJRhnBggnJSIpPAgyMTE2NjUzQwxJORM/Pz41WgRCYAZGYgZ4RhZYV1dccgdVeQhmbVZdgwVlhwVzc3K3ZhyBlQy9hyiUpzHqiS6upp24rKC8t7LeuGvwyFrJz6TXzb/Z0L3l0LTk287t5dfr7/7FAAAAQHRSTlMAC/8a7iqEMzrC/1FjoPr1Q5az4XXP/+ip8P//Uv//ZP8tg//9C1Gf/P79MdSdw/3//v/9/88o+v///3AN/5z/U9RNtwAAAq1JREFUWIWtl113ojAQhhWQjxEBQUJNullasFXbrYp21bau//9f7SSKvdnT04yb46Xz5J03k5nQ6Xy5Pj5+vz943a//9CXgz+tsXKQJOf59OwPLgrxv01Q8vZZgwQ8AJx+GCYExqhnujxpwRZlnHN/LoQ3HldrmAgTuzwA3z/JgYC5AAQABED++PFBcnDyihRgPcrX+NTGP70xe5lIKmDbNbr+6Jyi4W62m02XV7Pf73frZ3MJOslg3m02zQcDb23PPHODX28Nus9nt94fjtiAAvKJcHw6H4/GwXcgsuTMG9DJezmaLxWwmGcTpba9naCQCZCk5Y3iUVpQHWXFjCmCyFhxrSSAFf1AQAKjAYpKrgsRLaQwQNaaPCtADB+IsNwVwgQJwZwFW6sZZYlhMvsOkBliMw8AO+6bVnMS8rLnKHbvBgHAX+jETpVaAbYEEiIBLdgJYI/P4ThhxIc6AKKQBuDgLiPokAOP6FBEQUwAjTIHzkwIKoDtAD9sUSID0dIM0wCGMRwTwC6AgTAUE4FU4eWhlhI6mFLSFSAbw/wBgGpATxoKdM1XKQAaohiT5dQBdSPpxEBBuswK0dQApCYAWtCkQAeWlIdEA2FPZdQo+PaC0RG1i68HQPB6nOxZS6wEF4I8/eypJAQKkOHc0kgKvUICzApcG0JdJK6DMFQW4ajB5hbicImkw+YXQp0AHjBHAr5hsyVhc2gEJ0FcAzq6YrbGU8ooUJiEX+pGnyoAyGh8ehahLnQLA+KfxB4d9v5qXdYnHwCyQc6Mvlm7X9kfBuFrNq0o9lWU1f3kyiO+5aV5EEDk399PlciqXTZPfJuH3Z1vXC4c36cDt214mpxWrqiounNg1aWpdP3SHaRA46N/pmQ1R4Ib+txm2G2SOE0d6qegodpwscP8x3/4Chk1Gt4eei7QAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 100000,
            ap: 24000,
            dps: 14400.0,
            speed: 14,
            range: 380,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 48000,
            actualDps: 28800.0,
            magnification: "200%",
            count: "4",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "15.0-15.0s",
            delayFrames: "450-450f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 3,
      stageName: "幸福の賞味期限",
      baseHp: 400000,
      width: 4600,
      enemyLimit: 12,
      requiredCost: 250,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "10",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "75",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "053",
          enemyName: "クロサワ監督",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAABAAEBAQEBAQEBAQEEAgIDAwMEBAQFBAQFBAQFBQUFBQUHBAQGBgYIBQUIBgYHBwcJCQkJCQkJCQkNCAgKCgoKCgonAQEsAQEPDw8eFhYaGhlMBgdZAQEcHBwdHR0hHR0fHx4gICAhICAiIiIjIyMjIyMkJCQkJCQkJCQlJSUlJSUmJiYnJyeUAAAwMDAxMTE2NjY2NjY6OjpJSUlhYWFtbW18fHx3iniDj4OZspq/v7/39/f////eEQSUAAAAQHRSTlMABtCZt9j/N/EeUPoWfFoPwv/nKkFn34qs/u3/Tv4o/x3NvvQN2Z4xWrHr/2d0Q4r//cXV5KYaRLiZ47L+6/8Avt53EQAAA/BJREFUWIXtVmtz4joMzYOEJE5InHcwvkDD2zxqoGW7d9v9///qyg4Q2AHCzP22U33opIl0LB0fSSi//6cp3wDfAN8A3wB/EUBlaqQqNy1aj25/uLbRannjrT+brXvbzRMIo80+VlR/MB24F4kMNmVZLspy1hivgudaXW53+/1241evovVgQ3G/jwsyuVNdbes9JvPemBKCcbcn3kTZuBwvsIkLjJHXmEHCTUwXDPdf+2bx4ivuakzgcIpNMJxGjQA9juEwsH5h4nA6feMEF6+vBREIOHAbAfwJNeVpwsJsRwVeUVAiXyyaSVTsyUIEVYbo8amKR0daG3Jw9OERAtNzMqbIJG0/EQ+m2tmiqgPXAJAEJslzAJBFTirWLhEAYPMsgOrNhxa+BMAiJTJ/hoMjRDsVxBFCjgwIKDIePA2gqBmCWMJIJYsKoIxrh/fD4f0hghsI4pnQNMZE1oJZzeL75+fnx+PmnJWiBtAVOcUTWrN4+Pr6+nwM4G5BBoSZMlzWQGndjYfPX7/+bRgPKy6yPlYAfxijw1k0iJMezKzR4efPg/34VqI9JE8Fi6RiAgylhoVQmmdZvt/l3uPm8ucgaXrBYt0jCMEX6t1PwJfzbMOEG5Y5VMJEYZC3tJbnJK38JXTuH25nk+V6umFCCbSWJBm3XdV3xcG+//Fj8Kj+FxiiCwYdRAXCsTtJ4J6rHnx8TB8REM0piACKp5RIDkQaZDHPRG2QxUhVHw9YNR5yTjlcvtBSxSMhtOwo6nT1tt29TJa9+whqNHvbcXEHDK5BSAFi4ToIG67Xmz0TT5TtV/cQ3GzHoXxInXAogIlKoK0Eo7Bd5JgUiHx1P4HlZAie4kwuqRBiIIyDMX4EgP0xeESBG/WWeSkRgASQMcSKNCQAIFBiNE9IdwJbAlwppZyTaswyLpVpYi3Pm+dTe0+rPmbkNFoZNWV/Ii+z4kYAf87NaxNrpl/04Sm1rF5jCWrC8VW87KwCF7Ix8sZFF7mio6/iKTn/gxq3hNqOnW5RXCLwI56gMZCr+p6gfdtvt9uZbl5tFspP8TBiMlU62bcB7ETvprGjXe5GE7PTssRWgDRbibNuKoeC+weO72hdhC1H7YSneFEKyOlEidXJkafGqWTCj1rd4J+69MgLUuFk2LDjri6B8lMKKIvDMOlYZth2O7mBTNQ5AyR5boFHYASgtGsAws+XYkQ5tkKEDCfXDXCvhe3rTmAi3dM1zfanxrWOyPkXA/I8uArLMLJER2aQZEKWfhQ7iRe0kGm1cg1ZQfBHvHlxKZYo07IsI7BMlCeeHkeK2/H0vBUEmmGkIZglDN02+Q180tQwtCBo5brn/AfXnaqT0JicDAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 200000,
            ap: 18763,
            dps: 1432.29,
            speed: 2,
            range: 700,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 393,
            foreswing: 104,
            backswing: 29,
            tba: 145
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 37526,
            actualDps: 2864.58,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "437",
          enemyName: "幸福の犬",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgIHBwcHBwcICAgICAgJCQkKCQkKCgoLCwsLCwsLCwsNDAwNDQ0NDQ0ODg4ODg4RERESEhISEhITExMSFA8VFRUaGhogICAgJRhnBggnJSIpPAgyMTE2NjUzQwxJORM/Pz41WgRCYAZGYgZ4RhZYV1dccgdVeQhmbVZdgwVlhwVzc3K3ZhyBlQy9hyiUpzHqiS6upp24rKC8t7LeuGvwyFrJz6TXzb/Z0L3l0LTk287t5dfr7/7FAAAAQHRSTlMAC/8a7iqEMzrC/1FjoPr1Q5az4XXP/+ip8P//Uv//ZP8tg//9C1Gf/P79MdSdw/3//v/9/88o+v///3AN/5z/U9RNtwAAAq1JREFUWIWtl113ojAQhhWQjxEBQUJNullasFXbrYp21bau//9f7SSKvdnT04yb46Xz5J03k5nQ6Xy5Pj5+vz943a//9CXgz+tsXKQJOf59OwPLgrxv01Q8vZZgwQ8AJx+GCYExqhnujxpwRZlnHN/LoQ3HldrmAgTuzwA3z/JgYC5AAQABED++PFBcnDyihRgPcrX+NTGP70xe5lIKmDbNbr+6Jyi4W62m02XV7Pf73frZ3MJOslg3m02zQcDb23PPHODX28Nus9nt94fjtiAAvKJcHw6H4/GwXcgsuTMG9DJezmaLxWwmGcTpba9naCQCZCk5Y3iUVpQHWXFjCmCyFhxrSSAFf1AQAKjAYpKrgsRLaQwQNaaPCtADB+IsNwVwgQJwZwFW6sZZYlhMvsOkBliMw8AO+6bVnMS8rLnKHbvBgHAX+jETpVaAbYEEiIBLdgJYI/P4ThhxIc6AKKQBuDgLiPokAOP6FBEQUwAjTIHzkwIKoDtAD9sUSID0dIM0wCGMRwTwC6AgTAUE4FU4eWhlhI6mFLSFSAbw/wBgGpATxoKdM1XKQAaohiT5dQBdSPpxEBBuswK0dQApCYAWtCkQAeWlIdEA2FPZdQo+PaC0RG1i68HQPB6nOxZS6wEF4I8/eypJAQKkOHc0kgKvUICzApcG0JdJK6DMFQW4ajB5hbicImkw+YXQp0AHjBHAr5hsyVhc2gEJ0FcAzq6YrbGU8ooUJiEX+pGnyoAyGh8ehahLnQLA+KfxB4d9v5qXdYnHwCyQc6Mvlm7X9kfBuFrNq0o9lWU1f3kyiO+5aV5EEDk399PlciqXTZPfJuH3Z1vXC4c36cDt214mpxWrqiounNg1aWpdP3SHaRA46N/pmQ1R4Ib+txm2G2SOE0d6qegodpwscP8x3/4Chk1Gt4eei7QAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 100000,
            ap: 24000,
            dps: 14400.0,
            speed: 14,
            range: 380,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 250000,
            actualAp: 60000,
            actualDps: 36000.0,
            magnification: "250%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 4,
      stageName: "転禍為福",
      baseHp: 450000,
      width: 5800,
      enemyLimit: 12,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "30",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 24000,
            actualDps: 9473.67,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
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
            actualHp: 262500,
            actualAp: 9745,
            actualDps: 12711.52,
            magnification: "150%",
            count: "4",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "36.7-36.7s",
            delayFrames: "1,100-1,100f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "437",
          enemyName: "幸福の犬",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgIHBwcHBwcICAgICAgJCQkKCQkKCgoLCwsLCwsLCwsNDAwNDQ0NDQ0ODg4ODg4RERESEhISEhITExMSFA8VFRUaGhogICAgJRhnBggnJSIpPAgyMTE2NjUzQwxJORM/Pz41WgRCYAZGYgZ4RhZYV1dccgdVeQhmbVZdgwVlhwVzc3K3ZhyBlQy9hyiUpzHqiS6upp24rKC8t7LeuGvwyFrJz6TXzb/Z0L3l0LTk287t5dfr7/7FAAAAQHRSTlMAC/8a7iqEMzrC/1FjoPr1Q5az4XXP/+ip8P//Uv//ZP8tg//9C1Gf/P79MdSdw/3//v/9/88o+v///3AN/5z/U9RNtwAAAq1JREFUWIWtl113ojAQhhWQjxEBQUJNullasFXbrYp21bau//9f7SSKvdnT04yb46Xz5J03k5nQ6Xy5Pj5+vz943a//9CXgz+tsXKQJOf59OwPLgrxv01Q8vZZgwQ8AJx+GCYExqhnujxpwRZlnHN/LoQ3HldrmAgTuzwA3z/JgYC5AAQABED++PFBcnDyihRgPcrX+NTGP70xe5lIKmDbNbr+6Jyi4W62m02XV7Pf73frZ3MJOslg3m02zQcDb23PPHODX28Nus9nt94fjtiAAvKJcHw6H4/GwXcgsuTMG9DJezmaLxWwmGcTpba9naCQCZCk5Y3iUVpQHWXFjCmCyFhxrSSAFf1AQAKjAYpKrgsRLaQwQNaaPCtADB+IsNwVwgQJwZwFW6sZZYlhMvsOkBliMw8AO+6bVnMS8rLnKHbvBgHAX+jETpVaAbYEEiIBLdgJYI/P4ThhxIc6AKKQBuDgLiPokAOP6FBEQUwAjTIHzkwIKoDtAD9sUSID0dIM0wCGMRwTwC6AgTAUE4FU4eWhlhI6mFLSFSAbw/wBgGpATxoKdM1XKQAaohiT5dQBdSPpxEBBuswK0dQApCYAWtCkQAeWlIdEA2FPZdQo+PaC0RG1i68HQPB6nOxZS6wEF4I8/eypJAQKkOHc0kgKvUICzApcG0JdJK6DMFQW4ajB5hbicImkw+YXQp0AHjBHAr5hsyVhc2gEJ0FcAzq6YrbGU8ooUJiEX+pGnyoAyGh8ehahLnQLA+KfxB4d9v5qXdYnHwCyQc6Mvlm7X9kfBuFrNq0o9lWU1f3kyiO+5aV5EEDk399PlciqXTZPfJuH3Z1vXC4c36cDt214mpxWrqiounNg1aWpdP3SHaRA46N/pmQ1R4Ib+txm2G2SOE0d6qegodpwscP8x3/4Chk1Gt4eei7QAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 100000,
            ap: 24000,
            dps: 14400.0,
            speed: 14,
            range: 380,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 72000,
            actualDps: 43200.0,
            magnification: "300%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 200,
            actualAp: 500,
            actualDps: 833.33,
            magnification: "250%",
            count: "4",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "437",
          enemyName: "幸福の犬",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgIHBwcHBwcICAgICAgJCQkKCQkKCgoLCwsLCwsLCwsNDAwNDQ0NDQ0ODg4ODg4RERESEhISEhITExMSFA8VFRUaGhogICAgJRhnBggnJSIpPAgyMTE2NjUzQwxJORM/Pz41WgRCYAZGYgZ4RhZYV1dccgdVeQhmbVZdgwVlhwVzc3K3ZhyBlQy9hyiUpzHqiS6upp24rKC8t7LeuGvwyFrJz6TXzb/Z0L3l0LTk287t5dfr7/7FAAAAQHRSTlMAC/8a7iqEMzrC/1FjoPr1Q5az4XXP/+ip8P//Uv//ZP8tg//9C1Gf/P79MdSdw/3//v/9/88o+v///3AN/5z/U9RNtwAAAq1JREFUWIWtl113ojAQhhWQjxEBQUJNullasFXbrYp21bau//9f7SSKvdnT04yb46Xz5J03k5nQ6Xy5Pj5+vz943a//9CXgz+tsXKQJOf59OwPLgrxv01Q8vZZgwQ8AJx+GCYExqhnujxpwRZlnHN/LoQ3HldrmAgTuzwA3z/JgYC5AAQABED++PFBcnDyihRgPcrX+NTGP70xe5lIKmDbNbr+6Jyi4W62m02XV7Pf73frZ3MJOslg3m02zQcDb23PPHODX28Nus9nt94fjtiAAvKJcHw6H4/GwXcgsuTMG9DJezmaLxWwmGcTpba9naCQCZCk5Y3iUVpQHWXFjCmCyFhxrSSAFf1AQAKjAYpKrgsRLaQwQNaaPCtADB+IsNwVwgQJwZwFW6sZZYlhMvsOkBliMw8AO+6bVnMS8rLnKHbvBgHAX+jETpVaAbYEEiIBLdgJYI/P4ThhxIc6AKKQBuDgLiPokAOP6FBEQUwAjTIHzkwIKoDtAD9sUSID0dIM0wCGMRwTwC6AgTAUE4FU4eWhlhI6mFLSFSAbw/wBgGpATxoKdM1XKQAaohiT5dQBdSPpxEBBuswK0dQApCYAWtCkQAeWlIdEA2FPZdQo+PaC0RG1i68HQPB6nOxZS6wEF4I8/eypJAQKkOHc0kgKvUICzApcG0JdJK6DMFQW4ajB5hbicImkw+YXQp0AHjBHAr5hsyVhc2gEJ0FcAzq6YrbGU8ooUJiEX+pGnyoAyGh8ehahLnQLA+KfxB4d9v5qXdYnHwCyQc6Mvlm7X9kfBuFrNq0o9lWU1f3kyiO+5aV5EEDk399PlciqXTZPfJuH3Z1vXC4c36cDt214mpxWrqiounNg1aWpdP3SHaRA46N/pmQ1R4Ib+txm2G2SOE0d6qegodpwscP8x3/4Chk1Gt4eei7QAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 100000,
            ap: 24000,
            dps: 14400.0,
            speed: 14,
            range: 380,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 72000,
            actualDps: 43200.0,
            magnification: "300%",
            count: "4",
            spawnTime: "75.0s",
            spawnTimeFrames: "2,250f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1186Data;

