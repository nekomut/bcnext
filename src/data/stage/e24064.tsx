// Stage 24064 Data
import type { StageData } from '../../app/stage/types';

export const e24064Data: StageData = {
  eventId: 24064,
  eventName: "ネコたちの大逆襲",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 64,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "殺意 Lv.1",
      baseHp: 10,
      width: 5000,
      enemyLimit: 2,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1030",
          treasureName: "殺意のネコ(319)",
          probability: "10",
          amount: "1",
          times: "-2",
          limitText: "-2"
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
          enemyId: "312",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgICAgIGBQQMCgMODAgQDwsYFRMcFxMbGREZGRofGhAeHBUhHRkrIhIuLSw7MydBMypKMhxHOwM8QUZKRCFUQChZTQFjTwuTORBiSzhQUVRKVmJQVlx4VTRnXVRcaHWLYUOGcQJscXiLczt2dXN7en2ghgZ3hJG0eE2Qh322mwe+jFaQl5/FqBOOpr6+nXOkoqGyrqvcrn/nwgL9pWm7u7vLycj/uoza19X62sTr6ej18vD6+fj///8nrnx5AAAAQHRSTlMACxv/SCw7Vb6EZf9zpOOO/+zP/5b8uf561f//zOH////8/+7S///o/vv///3///////////7/////////////MNekwwAABEBJREFUWIWdl213ojwQhgVbUcH6QjGPYgmJSyoEsCFdgwjh//+rDX3Z0/b5kux80nOcK3cmk3viaKQV94//3ev98mtYk9njozex1Kft+ffONk13tsfz+ZwftxPL3p1/n+4MAfPjOSlEI4r8uHw87rZLyyzf3v1OiOj7vvT34LSbGKaPRs7pzOu672W835/gwjh/NM+TppddK8l+v/ePpgUYjbw8afsmTmjiK8Bp+w9byFtZgfyUwxhSejRug/vduZEc5DkknezrfG4KsB5z1jYI5pB2fd+ePVOAkpDTtqaYiE7K5h8A1iLMX5umrhtZNyx3jAGTdQTyMxNCNDQ5G98EJYCks8UxH67DKdmZC3CicmtbzmJ3PB53S/O7bG/SZ29pjyx7cjdR8u07w06aoXIxxcvPr3ebnZmIybo8LP3sI8vyHnBiVIWhgt4G+th7z19DHxq1orNOtw7EK7iZLZez2Tr0zQD2NIgcD2IXxPyVFRkEbohNAJN1EM2XYVw1Xd9dL5dLXQFg4ghKAVk80LbvG9Z2NxUZiY1qcLdGankpe7pXrqY4gDRPJhKsWcDJ2zVuZN9xgqI4Wj0sHP1mctIyJt2weN+RqBR1FZCURtrWbi1qingtVBH7MhJ1LaI0cFcE6bqCvVFGIBtR8b5V6wuRomA8dl2y0Qco8crUu14o7S8vERqrWAVIGyCUeFGWTV9FCClA9A4gmgBrymqpJCgZVYDIX8BKE2BZM8zrtpOtlCIoX17Kty24uluYbKdTkKnSVaSqeaBKgKKPIh60AIuAEI4SLkhMigIGaRpFAVHHiDSPcRkESjeCBcYwyzIQIISiAKUkmuk1kkee5ssnFA3ZQ2AAgOu6QeBpNuIcPdmje+/Bx9knwn9YLNJnXVt00MEa2c7GD+MhQuCvVmtvnv7SHS4O2t57h7SKiRiiCsOQkPWUaAPmaLNJhOBxWFac8wqrBwKPQbzRBXgoyrig0PcTQkgcqk1gEgP8rGtKXpRyXmfQD9nrKwv9BADKGMNX3SrOIqoeBSozLFgRwlUYgxVkLLk1j1r51rZSJtS0ZQiKAidJGLogzBijUv7SagRrK2iUtp0YAFkBoTse8hWg1TsHBahi1rUi9iHGOIQQ4CTLKBWZ3jlYW15kl+utFhWriKsucYD4EBnWBbCsuFyuXXe7EHfwEfpu8Yk2oHgDyF6y8Vu4JS2Hb4mRgptaM3gHjNWYaW430eieAmfselOGKD7yx25F6eWVt9rHKOruzVA/AWNakeutMQGowSpl+RUwDMmDNkBN5o4x8hUwzAl9gJqGNcbgG0Byog8QhNbJD0Bfx7oATnBI2qam32rQvma6ANX/YTX8YfsCiG/qsbTTBMAQ4voHADAF0FRwUAqy9gcgbAwAnFZqrH4HENndNBvJPgydeFXN/KORej1Hups+xDEiEEIS/QWsVitE0nTz/6feH79nv6M7wszRAAAAAElFTkSuQmCC",
          traits: [],
          baseStats: {
            hp: 3000,
            ap: 100,
            dps: 3.99,
            speed: 0,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 751,
            foreswing: 2,
            backswing: 19,
            tba: 375
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 100,
            actualDps: 3.99,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 20
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 120,
            actualDps: 97.3,
            magnification: "50%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "殺意 Lv.2",
      baseHp: 10,
      width: 4000,
      enemyLimit: 6,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1063",
          treasureName: "殺意のタンクネコ(695)",
          probability: "10",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "0",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "312",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgICAgIGBQQMCgMODAgQDwsYFRMcFxMbGREZGRofGhAeHBUhHRkrIhIuLSw7MydBMypKMhxHOwM8QUZKRCFUQChZTQFjTwuTORBiSzhQUVRKVmJQVlx4VTRnXVRcaHWLYUOGcQJscXiLczt2dXN7en2ghgZ3hJG0eE2Qh322mwe+jFaQl5/FqBOOpr6+nXOkoqGyrqvcrn/nwgL9pWm7u7vLycj/uoza19X62sTr6ej18vD6+fj///8nrnx5AAAAQHRSTlMACxv/SCw7Vb6EZf9zpOOO/+zP/5b8uf561f//zOH////8/+7S///o/vv///3///////////7/////////////MNekwwAABEBJREFUWIWdl213ojwQhgVbUcH6QjGPYgmJSyoEsCFdgwjh//+rDX3Z0/b5kux80nOcK3cmk3viaKQV94//3ev98mtYk9njozex1Kft+ffONk13tsfz+ZwftxPL3p1/n+4MAfPjOSlEI4r8uHw87rZLyyzf3v1OiOj7vvT34LSbGKaPRs7pzOu672W835/gwjh/NM+TppddK8l+v/ePpgUYjbw8afsmTmjiK8Bp+w9byFtZgfyUwxhSejRug/vduZEc5DkknezrfG4KsB5z1jYI5pB2fd+ePVOAkpDTtqaYiE7K5h8A1iLMX5umrhtZNyx3jAGTdQTyMxNCNDQ5G98EJYCks8UxH67DKdmZC3CicmtbzmJ3PB53S/O7bG/SZ29pjyx7cjdR8u07w06aoXIxxcvPr3ebnZmIybo8LP3sI8vyHnBiVIWhgt4G+th7z19DHxq1orNOtw7EK7iZLZez2Tr0zQD2NIgcD2IXxPyVFRkEbohNAJN1EM2XYVw1Xd9dL5dLXQFg4ghKAVk80LbvG9Z2NxUZiY1qcLdGankpe7pXrqY4gDRPJhKsWcDJ2zVuZN9xgqI4Wj0sHP1mctIyJt2weN+RqBR1FZCURtrWbi1qingtVBH7MhJ1LaI0cFcE6bqCvVFGIBtR8b5V6wuRomA8dl2y0Qco8crUu14o7S8vERqrWAVIGyCUeFGWTV9FCClA9A4gmgBrymqpJCgZVYDIX8BKE2BZM8zrtpOtlCIoX17Kty24uluYbKdTkKnSVaSqeaBKgKKPIh60AIuAEI4SLkhMigIGaRpFAVHHiDSPcRkESjeCBcYwyzIQIISiAKUkmuk1kkee5ssnFA3ZQ2AAgOu6QeBpNuIcPdmje+/Bx9knwn9YLNJnXVt00MEa2c7GD+MhQuCvVmtvnv7SHS4O2t57h7SKiRiiCsOQkPWUaAPmaLNJhOBxWFac8wqrBwKPQbzRBXgoyrig0PcTQkgcqk1gEgP8rGtKXpRyXmfQD9nrKwv9BADKGMNX3SrOIqoeBSozLFgRwlUYgxVkLLk1j1r51rZSJtS0ZQiKAidJGLogzBijUv7SagRrK2iUtp0YAFkBoTse8hWg1TsHBahi1rUi9iHGOIQQ4CTLKBWZ3jlYW15kl+utFhWriKsucYD4EBnWBbCsuFyuXXe7EHfwEfpu8Yk2oHgDyF6y8Vu4JS2Hb4mRgptaM3gHjNWYaW430eieAmfselOGKD7yx25F6eWVt9rHKOruzVA/AWNakeutMQGowSpl+RUwDMmDNkBN5o4x8hUwzAl9gJqGNcbgG0Byog8QhNbJD0Bfx7oATnBI2qam32rQvma6ANX/YTX8YfsCiG/qsbTTBMAQ4voHADAF0FRwUAqy9gcgbAwAnFZqrH4HENndNBvJPgydeFXN/KORej1Hups+xDEiEEIS/QWsVitE0nTz/6feH79nv6M7wszRAAAAAElFTkSuQmCC",
          traits: [],
          baseStats: {
            hp: 3000,
            ap: 100,
            dps: 3.99,
            speed: 0,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 751,
            foreswing: 2,
            backswing: 19,
            tba: 375
          },
          stageStats: {
            actualHp: 21000,
            actualAp: 700,
            actualDps: 27.93,
            magnification: "700%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 20
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 14400,
            actualAp: 384,
            actualDps: 171.94,
            magnification: "160%",
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 5760,
            actualAp: 384,
            actualDps: 311.34,
            magnification: "160%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 14400,
            actualAp: 384,
            actualDps: 171.94,
            magnification: "160%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 5760,
            actualAp: 384,
            actualDps: 311.34,
            magnification: "160%",
            count: "1",
            spawnTime: "64.0s",
            spawnTimeFrames: "1,920f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 14400,
            actualAp: 384,
            actualDps: 171.94,
            magnification: "160%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 14400,
            actualAp: 384,
            actualDps: 171.94,
            magnification: "160%",
            count: "2",
            spawnTime: "68.0s",
            spawnTimeFrames: "2,040f",
            delay: "12.0-12.0s",
            delayFrames: "360-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 5760,
            actualAp: 384,
            actualDps: 311.34,
            magnification: "160%",
            count: "3",
            spawnTime: "72.0s",
            spawnTimeFrames: "2,160f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "殺意 Lv.3",
      baseHp: 10,
      width: 4000,
      enemyLimit: 6,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1030",
          treasureName: "殺意のネコ(319)",
          probability: "30",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "312",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgICAgIGBQQMCgMODAgQDwsYFRMcFxMbGREZGRofGhAeHBUhHRkrIhIuLSw7MydBMypKMhxHOwM8QUZKRCFUQChZTQFjTwuTORBiSzhQUVRKVmJQVlx4VTRnXVRcaHWLYUOGcQJscXiLczt2dXN7en2ghgZ3hJG0eE2Qh322mwe+jFaQl5/FqBOOpr6+nXOkoqGyrqvcrn/nwgL9pWm7u7vLycj/uoza19X62sTr6ej18vD6+fj///8nrnx5AAAAQHRSTlMACxv/SCw7Vb6EZf9zpOOO/+zP/5b8uf561f//zOH////8/+7S///o/vv///3///////////7/////////////MNekwwAABEBJREFUWIWdl213ojwQhgVbUcH6QjGPYgmJSyoEsCFdgwjh//+rDX3Z0/b5kux80nOcK3cmk3viaKQV94//3ev98mtYk9njozex1Kft+ffONk13tsfz+ZwftxPL3p1/n+4MAfPjOSlEI4r8uHw87rZLyyzf3v1OiOj7vvT34LSbGKaPRs7pzOu672W835/gwjh/NM+TppddK8l+v/ePpgUYjbw8afsmTmjiK8Bp+w9byFtZgfyUwxhSejRug/vduZEc5DkknezrfG4KsB5z1jYI5pB2fd+ePVOAkpDTtqaYiE7K5h8A1iLMX5umrhtZNyx3jAGTdQTyMxNCNDQ5G98EJYCks8UxH67DKdmZC3CicmtbzmJ3PB53S/O7bG/SZ29pjyx7cjdR8u07w06aoXIxxcvPr3ebnZmIybo8LP3sI8vyHnBiVIWhgt4G+th7z19DHxq1orNOtw7EK7iZLZez2Tr0zQD2NIgcD2IXxPyVFRkEbohNAJN1EM2XYVw1Xd9dL5dLXQFg4ghKAVk80LbvG9Z2NxUZiY1qcLdGankpe7pXrqY4gDRPJhKsWcDJ2zVuZN9xgqI4Wj0sHP1mctIyJt2weN+RqBR1FZCURtrWbi1qingtVBH7MhJ1LaI0cFcE6bqCvVFGIBtR8b5V6wuRomA8dl2y0Qco8crUu14o7S8vERqrWAVIGyCUeFGWTV9FCClA9A4gmgBrymqpJCgZVYDIX8BKE2BZM8zrtpOtlCIoX17Kty24uluYbKdTkKnSVaSqeaBKgKKPIh60AIuAEI4SLkhMigIGaRpFAVHHiDSPcRkESjeCBcYwyzIQIISiAKUkmuk1kkee5ssnFA3ZQ2AAgOu6QeBpNuIcPdmje+/Bx9knwn9YLNJnXVt00MEa2c7GD+MhQuCvVmtvnv7SHS4O2t57h7SKiRiiCsOQkPWUaAPmaLNJhOBxWFac8wqrBwKPQbzRBXgoyrig0PcTQkgcqk1gEgP8rGtKXpRyXmfQD9nrKwv9BADKGMNX3SrOIqoeBSozLFgRwlUYgxVkLLk1j1r51rZSJtS0ZQiKAidJGLogzBijUv7SagRrK2iUtp0YAFkBoTse8hWg1TsHBahi1rUi9iHGOIQQ4CTLKBWZ3jlYW15kl+utFhWriKsucYD4EBnWBbCsuFyuXXe7EHfwEfpu8Yk2oHgDyF6y8Vu4JS2Hb4mRgptaM3gHjNWYaW430eieAmfselOGKD7yx25F6eWVt9rHKOruzVA/AWNakeutMQGowSpl+RUwDMmDNkBN5o4x8hUwzAl9gJqGNcbgG0Byog8QhNbJD0Bfx7oATnBI2qam32rQvma6ANX/YTX8YfsCiG/qsbTTBMAQ4voHADAF0FRwUAqy9gcgbAwAnFZqrH4HENndNBvJPgydeFXN/KORej1Hups+xDEiEEIS/QWsVitE0nTz/6feH79nv6M7wszRAAAAAElFTkSuQmCC",
          traits: [],
          baseStats: {
            hp: 3000,
            ap: 100,
            dps: 3.99,
            speed: 0,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 751,
            foreswing: 2,
            backswing: 19,
            tba: 375
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 79.8,
            magnification: "2000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 20
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 43200,
            actualAp: 2880,
            actualDps: 2335.08,
            magnification: "1200%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 43200,
            actualAp: 2880,
            actualDps: 2335.08,
            magnification: "1200%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 43200,
            actualAp: 2880,
            actualDps: 2335.08,
            magnification: "1200%",
            count: "1",
            spawnTime: "63.3s",
            spawnTimeFrames: "1,900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 43200,
            actualAp: 2880,
            actualDps: 2335.08,
            magnification: "1200%",
            count: "1",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 43200,
            actualAp: 2880,
            actualDps: 2335.08,
            magnification: "1200%",
            count: "1",
            spawnTime: "77.3s",
            spawnTimeFrames: "2,320f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 43200,
            actualAp: 2880,
            actualDps: 2335.08,
            magnification: "1200%",
            count: "1",
            spawnTime: "78.0s",
            spawnTimeFrames: "2,340f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "殺意 Lv.4",
      baseHp: 10,
      width: 4000,
      enemyLimit: 6,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1063",
          treasureName: "殺意のタンクネコ(695)",
          probability: "50",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "55",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "312",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgICAgIGBQQMCgMODAgQDwsYFRMcFxMbGREZGRofGhAeHBUhHRkrIhIuLSw7MydBMypKMhxHOwM8QUZKRCFUQChZTQFjTwuTORBiSzhQUVRKVmJQVlx4VTRnXVRcaHWLYUOGcQJscXiLczt2dXN7en2ghgZ3hJG0eE2Qh322mwe+jFaQl5/FqBOOpr6+nXOkoqGyrqvcrn/nwgL9pWm7u7vLycj/uoza19X62sTr6ej18vD6+fj///8nrnx5AAAAQHRSTlMACxv/SCw7Vb6EZf9zpOOO/+zP/5b8uf561f//zOH////8/+7S///o/vv///3///////////7/////////////MNekwwAABEBJREFUWIWdl213ojwQhgVbUcH6QjGPYgmJSyoEsCFdgwjh//+rDX3Z0/b5kux80nOcK3cmk3viaKQV94//3ev98mtYk9njozex1Kft+ffONk13tsfz+ZwftxPL3p1/n+4MAfPjOSlEI4r8uHw87rZLyyzf3v1OiOj7vvT34LSbGKaPRs7pzOu672W835/gwjh/NM+TppddK8l+v/ePpgUYjbw8afsmTmjiK8Bp+w9byFtZgfyUwxhSejRug/vduZEc5DkknezrfG4KsB5z1jYI5pB2fd+ePVOAkpDTtqaYiE7K5h8A1iLMX5umrhtZNyx3jAGTdQTyMxNCNDQ5G98EJYCks8UxH67DKdmZC3CicmtbzmJ3PB53S/O7bG/SZ29pjyx7cjdR8u07w06aoXIxxcvPr3ebnZmIybo8LP3sI8vyHnBiVIWhgt4G+th7z19DHxq1orNOtw7EK7iZLZez2Tr0zQD2NIgcD2IXxPyVFRkEbohNAJN1EM2XYVw1Xd9dL5dLXQFg4ghKAVk80LbvG9Z2NxUZiY1qcLdGankpe7pXrqY4gDRPJhKsWcDJ2zVuZN9xgqI4Wj0sHP1mctIyJt2weN+RqBR1FZCURtrWbi1qingtVBH7MhJ1LaI0cFcE6bqCvVFGIBtR8b5V6wuRomA8dl2y0Qco8crUu14o7S8vERqrWAVIGyCUeFGWTV9FCClA9A4gmgBrymqpJCgZVYDIX8BKE2BZM8zrtpOtlCIoX17Kty24uluYbKdTkKnSVaSqeaBKgKKPIh60AIuAEI4SLkhMigIGaRpFAVHHiDSPcRkESjeCBcYwyzIQIISiAKUkmuk1kkee5ssnFA3ZQ2AAgOu6QeBpNuIcPdmje+/Bx9knwn9YLNJnXVt00MEa2c7GD+MhQuCvVmtvnv7SHS4O2t57h7SKiRiiCsOQkPWUaAPmaLNJhOBxWFac8wqrBwKPQbzRBXgoyrig0PcTQkgcqk1gEgP8rGtKXpRyXmfQD9nrKwv9BADKGMNX3SrOIqoeBSozLFgRwlUYgxVkLLk1j1r51rZSJtS0ZQiKAidJGLogzBijUv7SagRrK2iUtp0YAFkBoTse8hWg1TsHBahi1rUi9iHGOIQQ4CTLKBWZ3jlYW15kl+utFhWriKsucYD4EBnWBbCsuFyuXXe7EHfwEfpu8Yk2oHgDyF6y8Vu4JS2Hb4mRgptaM3gHjNWYaW430eieAmfselOGKD7yx25F6eWVt9rHKOruzVA/AWNakeutMQGowSpl+RUwDMmDNkBN5o4x8hUwzAl9gJqGNcbgG0Byog8QhNbJD0Bfx7oATnBI2qam32rQvma6ANX/YTX8YfsCiG/qsbTTBMAQ4voHADAF0FRwUAqy9gcgbAwAnFZqrH4HENndNBvJPgydeFXN/KORej1Hups+xDEiEEIS/QWsVitE0nTz/6feH79nv6M7wszRAAAAAElFTkSuQmCC",
          traits: [],
          baseStats: {
            hp: 3000,
            ap: 100,
            dps: 3.99,
            speed: 0,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 751,
            foreswing: 2,
            backswing: 19,
            tba: 375
          },
          stageStats: {
            actualHp: 168000,
            actualAp: 5600,
            actualDps: 223.44,
            magnification: "5600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 20
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 150750,
            actualAp: 4020,
            actualDps: 1799.95,
            magnification: "1675%",
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 60300,
            actualAp: 4020,
            actualDps: 3259.38,
            magnification: "1675%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 150750,
            actualAp: 4020,
            actualDps: 1799.95,
            magnification: "1675%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 60300,
            actualAp: 4020,
            actualDps: 3259.38,
            magnification: "1675%",
            count: "1",
            spawnTime: "64.0s",
            spawnTimeFrames: "1,920f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 150750,
            actualAp: 4020,
            actualDps: 1799.95,
            magnification: "1675%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 150750,
            actualAp: 4020,
            actualDps: 1799.95,
            magnification: "1675%",
            count: "2",
            spawnTime: "68.0s",
            spawnTimeFrames: "2,040f",
            delay: "12.0-12.0s",
            delayFrames: "360-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 60300,
            actualAp: 4020,
            actualDps: 3259.38,
            magnification: "1675%",
            count: "3",
            spawnTime: "72.0s",
            spawnTimeFrames: "2,160f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "殺意 Lv.5",
      baseHp: 10,
      width: 4000,
      enemyLimit: 6,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1030",
          treasureName: "殺意のネコ(319)",
          probability: "50",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "12",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "312",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgICAgIGBQQMCgMODAgQDwsYFRMcFxMbGREZGRofGhAeHBUhHRkrIhIuLSw7MydBMypKMhxHOwM8QUZKRCFUQChZTQFjTwuTORBiSzhQUVRKVmJQVlx4VTRnXVRcaHWLYUOGcQJscXiLczt2dXN7en2ghgZ3hJG0eE2Qh322mwe+jFaQl5/FqBOOpr6+nXOkoqGyrqvcrn/nwgL9pWm7u7vLycj/uoza19X62sTr6ej18vD6+fj///8nrnx5AAAAQHRSTlMACxv/SCw7Vb6EZf9zpOOO/+zP/5b8uf561f//zOH////8/+7S///o/vv///3///////////7/////////////MNekwwAABEBJREFUWIWdl213ojwQhgVbUcH6QjGPYgmJSyoEsCFdgwjh//+rDX3Z0/b5kux80nOcK3cmk3viaKQV94//3ev98mtYk9njozex1Kft+ffONk13tsfz+ZwftxPL3p1/n+4MAfPjOSlEI4r8uHw87rZLyyzf3v1OiOj7vvT34LSbGKaPRs7pzOu672W835/gwjh/NM+TppddK8l+v/ePpgUYjbw8afsmTmjiK8Bp+w9byFtZgfyUwxhSejRug/vduZEc5DkknezrfG4KsB5z1jYI5pB2fd+ePVOAkpDTtqaYiE7K5h8A1iLMX5umrhtZNyx3jAGTdQTyMxNCNDQ5G98EJYCks8UxH67DKdmZC3CicmtbzmJ3PB53S/O7bG/SZ29pjyx7cjdR8u07w06aoXIxxcvPr3ebnZmIybo8LP3sI8vyHnBiVIWhgt4G+th7z19DHxq1orNOtw7EK7iZLZez2Tr0zQD2NIgcD2IXxPyVFRkEbohNAJN1EM2XYVw1Xd9dL5dLXQFg4ghKAVk80LbvG9Z2NxUZiY1qcLdGankpe7pXrqY4gDRPJhKsWcDJ2zVuZN9xgqI4Wj0sHP1mctIyJt2weN+RqBR1FZCURtrWbi1qingtVBH7MhJ1LaI0cFcE6bqCvVFGIBtR8b5V6wuRomA8dl2y0Qco8crUu14o7S8vERqrWAVIGyCUeFGWTV9FCClA9A4gmgBrymqpJCgZVYDIX8BKE2BZM8zrtpOtlCIoX17Kty24uluYbKdTkKnSVaSqeaBKgKKPIh60AIuAEI4SLkhMigIGaRpFAVHHiDSPcRkESjeCBcYwyzIQIISiAKUkmuk1kkee5ssnFA3ZQ2AAgOu6QeBpNuIcPdmje+/Bx9knwn9YLNJnXVt00MEa2c7GD+MhQuCvVmtvnv7SHS4O2t57h7SKiRiiCsOQkPWUaAPmaLNJhOBxWFac8wqrBwKPQbzRBXgoyrig0PcTQkgcqk1gEgP8rGtKXpRyXmfQD9nrKwv9BADKGMNX3SrOIqoeBSozLFgRwlUYgxVkLLk1j1r51rZSJtS0ZQiKAidJGLogzBijUv7SagRrK2iUtp0YAFkBoTse8hWg1TsHBahi1rUi9iHGOIQQ4CTLKBWZ3jlYW15kl+utFhWriKsucYD4EBnWBbCsuFyuXXe7EHfwEfpu8Yk2oHgDyF6y8Vu4JS2Hb4mRgptaM3gHjNWYaW430eieAmfselOGKD7yx25F6eWVt9rHKOruzVA/AWNakeutMQGowSpl+RUwDMmDNkBN5o4x8hUwzAl9gJqGNcbgG0Byog8QhNbJD0Bfx7oATnBI2qam32rQvma6ANX/YTX8YfsCiG/qsbTTBMAQ4voHADAF0FRwUAqy9gcgbAwAnFZqrH4HENndNBvJPgydeFXN/KORej1Hups+xDEiEEIS/QWsVitE0nTz/6feH79nv6M7wszRAAAAAElFTkSuQmCC",
          traits: [],
          baseStats: {
            hp: 3000,
            ap: 100,
            dps: 3.99,
            speed: 0,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 751,
            foreswing: 2,
            backswing: 19,
            tba: 375
          },
          stageStats: {
            actualHp: 276000,
            actualAp: 9200,
            actualDps: 367.08,
            magnification: "9200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 20
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 141120,
            actualAp: 9408,
            actualDps: 7627.93,
            magnification: "3920%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 141120,
            actualAp: 9408,
            actualDps: 7627.93,
            magnification: "3920%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 141120,
            actualAp: 9408,
            actualDps: 7627.93,
            magnification: "3920%",
            count: "1",
            spawnTime: "63.3s",
            spawnTimeFrames: "1,900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 141120,
            actualAp: 9408,
            actualDps: 7627.93,
            magnification: "3920%",
            count: "1",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 141120,
            actualAp: 9408,
            actualDps: 7627.93,
            magnification: "3920%",
            count: "1",
            spawnTime: "77.3s",
            spawnTimeFrames: "2,320f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 141120,
            actualAp: 9408,
            actualDps: 7627.93,
            magnification: "3920%",
            count: "1",
            spawnTime: "78.0s",
            spawnTimeFrames: "2,340f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 5,
      stageName: "殺意 Lv.6",
      baseHp: 10,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1070",
          treasureName: "殺意のキモネコ(785)",
          probability: "10",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "678",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 30000,
            ap: 1500,
            dps: 80.5,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 559,
            foreswing: 42,
            backswing: 24,
            tba: 256
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 15000,
            actualDps: 805.0,
            magnification: "1000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [500, 500, 500],
                timings: [42, 45, 48]
            },
            "omni-strike": {
                standing_range: 500,
                omni_range: [0, 500]
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 106200,
            actualAp: 7080,
            actualDps: 5740.4,
            magnification: "2950%",
            count: "1",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 265500,
            actualAp: 7080,
            actualDps: 3170.07,
            magnification: "2950%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 118000,
            actualAp: 7080,
            actualDps: 992.38,
            magnification: "2950%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 3600,
            actualAp: 240,
            actualDps: 194.59,
            magnification: "100%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 106200,
            actualAp: 7080,
            actualDps: 5740.4,
            magnification: "2950%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 106200,
            actualAp: 7080,
            actualDps: 5740.4,
            magnification: "2950%",
            count: "7",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 265500,
            actualAp: 7080,
            actualDps: 3170.07,
            magnification: "2950%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-12.0s",
            delayFrames: "300-360f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 106200,
            actualAp: 7080,
            actualDps: 5740.4,
            magnification: "2950%",
            count: "6",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 265500,
            actualAp: 7080,
            actualDps: 3170.07,
            magnification: "2950%",
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 6,
      stageName: "殺意 Lv.7",
      baseHp: 10,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 110,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1030",
          treasureName: "殺意のネコ(319)",
          probability: "100",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "56",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "678",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQEBAQECAQEDAQICAgICAgIDAwMJAwMPCwo5AAAVFRUYFhNnAAAlJSUqKCJKKgwVQUI5OTpLOSfLAQBvNR5ERUZZSCOyICFuRCv2BgdRUFBhWFCQSx1/VzxsaGWZajx2eXy8cj+bfWGMjIyzi1HUhE6amZrAlmCxpJrUnl7/lky0tLX8pmbetZa+v8D9sW/4voTJysrdxrfP0tPY2Nj91Kzi5Ob/47vv7+//89z///+q7KoMAAAAQHRSTlMAPGMWKfL/ruNNmXvH//vn//3+0P//////////////////////////////////////////////////////////ceWPpAAABKZJREFUWIWllgt3ojoUhcVHRDE1TZ0wQBHkISgP8YUgYv7/v5pEasfOtUDX3V3LVmF/7HOSHNvptFO/z14mw37L2/+rCeh0BEwm7R2C8CUAAENJVEm3ejuUmgHjweefo3FHAgAQgsAN0Bu+tkgyRp9PEcWeyACGCk2xL0gT8DJ/aQFQ0UfHxngyBjyBSggEN81fmwFDg3WsL/RZ67Ao3gAGuOt3GwDmAmg6RXDQE0RkYvXuf2mRQEKEGKxqiBCEUOh02W8TfQBeG3vQnzI3+SXLVc0ISp0xwQR9JmhYBQExO5GVd6UCsNfxxJgOxXuC3+Naf29qsIYTMp//4u75K3uBmAw7I3BfBKEWMFRvfuVdnzEna3kVY8SutAogYIP7ZUX9BTBvYvVYkV3qVi0Ue7WAscoSsB8Vs/YRAmCFGDBXb8Dsc1hfQGeCCEdgCDACqgpUXGUY8Wvz+e+XpjM9Zc+sFgwT/D438Efr+NmYvIqNB7HHds59yyF9Ppfvb/hJlLpN9lsJn3se4vk7fgS00hjBv4R7A5haj7PRA+BBw7Z+XsMzQsPaPaoPnxDqN19zET8ogEsY/J/ncw2/+n/wdfChyaf3lkX8qb+PABuk3b4kdQURTAAUfrAGXGN5NsX47SaC39jpmL3VH+FH9aSpac78IuXK8siyLM02tLZ97I2xn9E9svMbIM2tma4rXqFqb63K6EInL/Is0bQkS7Msz0ueQA9oKmt2i80gzda7NA0sc4awymW6tmHYtusGKrJPuOlASeR0SvfJYjHD8iparbzQg3JoQ9UzbdOEK0rqCSNS0MAvTwsHa1p4Ph4vOwwiD2H5fInOV3txKeq3lJgUrp1Qas2QJjtxuHWALAOyWgGkkd3FXFyoXzdWBIO62E5Lmjuypjlx7Kn2QSY7bGlAC+Oz6VFa1jWy6xauabg+u82VZWe7Ur2tQwIEoOWFcXg2A0rpWx3ALyLDNjJa5i4r4Rh68UF2+VD14jiMLyZDU1KfYO8iHiDzEZIdx1mGFmuFpq24zmZCPa8uwcgtTstFfLyWSWIapqG6NoIYQ2j6pqZpBkpCZTGtBeTLZXzYbIssLcvdiSZsJEPVt5FLaVEW+clynFqAv1su19vt5shqPa/PfjUR1CKFBuU66Q0AN+YJttvtldLr1fkcKnuK1BvBaSohrhIc+M3Z34mGspL3ln3mhfXLeCths7nwm+2HmWhSH9PzOQ/Kpn0QLtebw5X7y8fJjvaFutpuYjdvAqTR6WandP9lLAfUsI+bS5Q1APL9Pq/8NPoHoNr0QsuibAIk2fcA/qnbCLgl2Dmnp4DETRoBBU1prigL/QmgDJoB6d63i53iOPKzBHvVbliFLM8MNpMsZaE9AxRqQw/KwPZsw6bF6hQ8AVyPVj0giGYzZUayb1bhutkc4lqAaym6pZhPl9F4KS6b7eFQB5BMXdethfcUYEPvzADburkuubrCvgd3TwEmPF037KTWAiLWA333zU5klR03x0ttCUEZ+bVb+Vo/1qWoLIqSXg7H87+AhJ3GCvw9QJqI7j4Kkny9Xi9j6n8BmAE2ijTPigKNvgWAQbPEyeCff/f/AG1uyf1en/YJAAAAAElFTkSuQmCC",
          traits: [],
          baseStats: {
            hp: 30000,
            ap: 1500,
            dps: 80.5,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 559,
            foreswing: 42,
            backswing: 24,
            tba: 256
          },
          stageStats: {
            actualHp: 375000,
            actualAp: 18750,
            actualDps: 1006.25,
            magnification: "1250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [500, 500, 500],
                timings: [42, 45, 48]
            },
            "omni-strike": {
                standing_range: 500,
                omni_range: [0, 500]
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 132768,
            actualAp: 8851,
            actualDps: 7176.48,
            magnification: "3688%",
            count: "1",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 331920,
            actualAp: 8851,
            actualDps: 3963.12,
            magnification: "3688%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 147520,
            actualAp: 8851,
            actualDps: 1240.64,
            magnification: "3688%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 3600,
            actualAp: 240,
            actualDps: 194.59,
            magnification: "100%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 132768,
            actualAp: 8851,
            actualDps: 7176.48,
            magnification: "3688%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 132768,
            actualAp: 8851,
            actualDps: 7176.48,
            magnification: "3688%",
            count: "7",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 331920,
            actualAp: 8851,
            actualDps: 3963.12,
            magnification: "3688%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-12.0s",
            delayFrames: "300-360f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 132768,
            actualAp: 8851,
            actualDps: 7176.48,
            magnification: "3688%",
            count: "6",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 331920,
            actualAp: 8851,
            actualDps: 3963.12,
            magnification: "3688%",
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 7,
      stageName: "殺意 Lv.8",
      baseHp: 10,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1070",
          treasureName: "殺意のキモネコ(785)",
          probability: "50",
          amount: "1",
          times: "-2",
          limitText: "-2"
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
          enemyId: "678",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 30000,
            ap: 1500,
            dps: 80.5,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 559,
            foreswing: 42,
            backswing: 24,
            tba: 256
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 22500,
            actualDps: 1207.5,
            magnification: "1500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [500, 500, 500],
                timings: [42, 45, 48]
            },
            "omni-strike": {
                standing_range: 500,
                omni_range: [0, 500]
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgIDAwMEBAQFBQUFBQUICAgeAAAMDAwNDQ0PDw80AAAQEBATExNJAAAYGBgcHBwgICBsAAAmJiYrKyuRAAA2NDSzAABAQEBTODjWAABzMjGVJyjGFhbtBgeFz7OYAAAAQHRSTlMABQsRFRslLDQ8Q01UXGJnd/1ug4ycrLLBzOnv/5Skucb0+d/Y0uT//+7o9f//+v///P//////////////////6VIQUgAABNNJREFUWIWVl4l2qjAQhgvihhsoIILsSFwaGyiU1m7v/1Z34lJAgnrnnC4i8+WfJWR4eqoZ1+m1ufrlx40fSSLP/op7CNxWdIkpgWv3Og8QuI5qOAOWBGGsTlsPALq2H1nd+lK8aAdW+wFAT/N3i3HtTq6rBJ79QAx8f75Hm3ktiPZktfc1hrIaYODsCTKUq1v5wXyD0bzfUJ+StcZujJHvToSqLmsLl9nZvQJMF/sEL01bbHFno6WRQrgq68P7ZRCkVQwAOVT63V4frNcReGHk7FOCZHf0AGAWEgAsvZWlWKptq5YijSfalqRAXYzvA9pKQBVg7O8utgmCzR4TBICpcM8fGjHCGOEkSdIkPVkSxzHGoGq5ku4AuFZ36nqYpNQ5ASeEMCYkSQgYfApntzuJ64wsd0OXTujty7MhKokiyMYZ3SLwfcnZpmkGa/85FwZSMBCkXlMeOUG0wl2aZQTXvU9KEMG70IIGYQKEgRbFaZYgxuoFAu8je8AicMJQ28YZdEvp/nXl3/UJAQSRUYvWwN5C9EXw6+eXlzIAPp0JeAsa6vlTYf2kFP3z2/vbS+H/+v5+5iHsb63eVRBcZxaCf1n+y/vv5+tFwvrlrfQJ+aF0VU1hpMdpWsn+89vnexHD+u3z8/X570vPqe4qrmdvk/SqeuUcoPXz62spI7KhVoJoj8O4mv8/T2hmtKRduV6Xr8uL8gOH66ubNGG2D0rgOkrIdXOAhNIzjx+t9mwBS0zylJA8A0r1e98tSgklgA3Ean9KyHIwApEQUpEQzrpFD9t71gbAdFFE8g8QgJbkqskNbXABdKd6nNUjQIRuSoSyjw8aAcmrWfIW0wugr6zirB4BSnK6Js4PB8hDkuWVPlv6gXIB0F3ESAHCOfQ2yQ7f31/AyK/WgDpcABP6EGIUEafglR++f35/vg5X6wPA1C6A6WLHLgIE8UH9f3+/D9f+kAStpCBmKaBRQAC/FJDXk1wAGnJwJJAj4OervoBs2BeAaK0aATj/+mFHUKpCV9Khk1n+NA2QhO9DVo/QW0h/e3Gg7Rq2Am3lA5SAoc+YD//2Et0LTc9yRLKc0abLZVDshSd+HO5Jw2aiG5LFlt3SqMCJ2oZ5GDWbbNrlGag9uSWBZX71oIfRbktw04nGEgDPxMq0JEzcfeORyBKgj6uHE50i/4NAH0dXJwvMsVvc1AuMAPq147U1mm/ixwiyMa+fjTDLUwK+XwoZ/IfMSQkIW3xrODj5+5E2FNgTRntoR+gewQ/VJn86Izj+PQGR1W+YcJ6OZ6x3B+C5wxvjNi/O7ynwF4NbY95QLwDy0c5/4J9LCoa3AKMCIJuRYXo+mGcakSkfkfATjG+FcATIvg8Le7qiqLYGZquK5QLBN+CXHE1uzOstCpD9IPBlGR44nU4PXhh69K8SQP84uiHL0ZRZRI5vtTu9gRLStcPQk2Vzodna/GSatjDhiqsDxrQnQxHeQVp8mcOLU8XWHD2kIn3TBAUQiH9OnXwKCq57PjTiytUdTVUm/VIsrYkWmkePsl21UGFwp7FSy6+WvChZ9txxF2EQRZEB6fcKAce0QjGgGkYUBeFqoTtzW5mK5WzyAqRAHI6n0gxelFQNonccXXdPpuuOM6flgPenmTQd0yS0z0n4B+TIPq46g8keAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 159336,
            actualAp: 10622,
            actualDps: 8612.55,
            magnification: "4426%",
            count: "1",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 398340,
            actualAp: 10622,
            actualDps: 4756.18,
            magnification: "4426%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 177040,
            actualAp: 10622,
            actualDps: 1488.91,
            magnification: "4426%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgIDAwMEBAQFBQUFBQUICAgeAAAMDAwNDQ0PDw80AAAQEBATExNJAAAYGBgcHBwgICBsAAAmJiYrKyuRAAA2NDSzAABAQEBTODjWAABzMjGVJyjGFhbtBgeFz7OYAAAAQHRSTlMABQsRFRslLDQ8Q01UXGJnd/1ug4ycrLLBzOnv/5Skucb0+d/Y0uT//+7o9f//+v///P//////////////////6VIQUgAABNNJREFUWIWVl4l2qjAQhgvihhsoIILsSFwaGyiU1m7v/1Z34lJAgnrnnC4i8+WfJWR4eqoZ1+m1ufrlx40fSSLP/op7CNxWdIkpgWv3Og8QuI5qOAOWBGGsTlsPALq2H1nd+lK8aAdW+wFAT/N3i3HtTq6rBJ79QAx8f75Hm3ktiPZktfc1hrIaYODsCTKUq1v5wXyD0bzfUJ+StcZujJHvToSqLmsLl9nZvQJMF/sEL01bbHFno6WRQrgq68P7ZRCkVQwAOVT63V4frNcReGHk7FOCZHf0AGAWEgAsvZWlWKptq5YijSfalqRAXYzvA9pKQBVg7O8utgmCzR4TBICpcM8fGjHCGOEkSdIkPVkSxzHGoGq5ku4AuFZ36nqYpNQ5ASeEMCYkSQgYfApntzuJ64wsd0OXTujty7MhKokiyMYZ3SLwfcnZpmkGa/85FwZSMBCkXlMeOUG0wl2aZQTXvU9KEMG70IIGYQKEgRbFaZYgxuoFAu8je8AicMJQ28YZdEvp/nXl3/UJAQSRUYvWwN5C9EXw6+eXlzIAPp0JeAsa6vlTYf2kFP3z2/vbS+H/+v5+5iHsb63eVRBcZxaCf1n+y/vv5+tFwvrlrfQJ+aF0VU1hpMdpWsn+89vnexHD+u3z8/X570vPqe4qrmdvk/SqeuUcoPXz62spI7KhVoJoj8O4mv8/T2hmtKRduV6Xr8uL8gOH66ubNGG2D0rgOkrIdXOAhNIzjx+t9mwBS0zylJA8A0r1e98tSgklgA3Ean9KyHIwApEQUpEQzrpFD9t71gbAdFFE8g8QgJbkqskNbXABdKd6nNUjQIRuSoSyjw8aAcmrWfIW0wugr6zirB4BSnK6Js4PB8hDkuWVPlv6gXIB0F3ESAHCOfQ2yQ7f31/AyK/WgDpcABP6EGIUEafglR++f35/vg5X6wPA1C6A6WLHLgIE8UH9f3+/D9f+kAStpCBmKaBRQAC/FJDXk1wAGnJwJJAj4OervoBs2BeAaK0aATj/+mFHUKpCV9Khk1n+NA2QhO9DVo/QW0h/e3Gg7Rq2Am3lA5SAoc+YD//2Et0LTc9yRLKc0abLZVDshSd+HO5Jw2aiG5LFlt3SqMCJ2oZ5GDWbbNrlGag9uSWBZX71oIfRbktw04nGEgDPxMq0JEzcfeORyBKgj6uHE50i/4NAH0dXJwvMsVvc1AuMAPq147U1mm/ixwiyMa+fjTDLUwK+XwoZ/IfMSQkIW3xrODj5+5E2FNgTRntoR+gewQ/VJn86Izj+PQGR1W+YcJ6OZ6x3B+C5wxvjNi/O7ynwF4NbY95QLwDy0c5/4J9LCoa3AKMCIJuRYXo+mGcakSkfkfATjG+FcATIvg8Le7qiqLYGZquK5QLBN+CXHE1uzOstCpD9IPBlGR44nU4PXhh69K8SQP84uiHL0ZRZRI5vtTu9gRLStcPQk2Vzodna/GSatjDhiqsDxrQnQxHeQVp8mcOLU8XWHD2kIn3TBAUQiH9OnXwKCq57PjTiytUdTVUm/VIsrYkWmkePsl21UGFwp7FSy6+WvChZ9txxF2EQRZEB6fcKAce0QjGgGkYUBeFqoTtzW5mK5WzyAqRAHI6n0gxelFQNonccXXdPpuuOM6flgPenmTQd0yS0z0n4B+TIPq46g8keAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 3600,
            actualAp: 240,
            actualDps: 194.59,
            magnification: "100%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 159336,
            actualAp: 10622,
            actualDps: 8612.55,
            magnification: "4426%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 159336,
            actualAp: 10622,
            actualDps: 8612.55,
            magnification: "4426%",
            count: "7",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 398340,
            actualAp: 10622,
            actualDps: 4756.18,
            magnification: "4426%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-12.0s",
            delayFrames: "300-360f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 159336,
            actualAp: 10622,
            actualDps: 8612.55,
            magnification: "4426%",
            count: "6",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 398340,
            actualAp: 10622,
            actualDps: 4756.18,
            magnification: "4426%",
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 8,
      stageName: "殺意 Lv.9",
      baseHp: 10,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 130,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1063",
          treasureName: "殺意のタンクネコ(695)",
          probability: "100",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "4",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "678",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 30000,
            ap: 1500,
            dps: 80.5,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 559,
            foreswing: 42,
            backswing: 24,
            tba: 256
          },
          stageStats: {
            actualHp: 525000,
            actualAp: 26250,
            actualDps: 1408.75,
            magnification: "1750%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [500, 500, 500],
                timings: [42, 45, 48]
            },
            "omni-strike": {
                standing_range: 500,
                omni_range: [0, 500]
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgIDAwMEBAQFBQUFBQUICAgeAAAMDAwNDQ0PDw80AAAQEBATExNJAAAYGBgcHBwgICBsAAAmJiYrKyuRAAA2NDSzAABAQEBTODjWAABzMjGVJyjGFhbtBgeFz7OYAAAAQHRSTlMABQsRFRslLDQ8Q01UXGJnd/1ug4ycrLLBzOnv/5Skucb0+d/Y0uT//+7o9f//+v///P//////////////////6VIQUgAABNNJREFUWIWVl4l2qjAQhgvihhsoIILsSFwaGyiU1m7v/1Z34lJAgnrnnC4i8+WfJWR4eqoZ1+m1ufrlx40fSSLP/op7CNxWdIkpgWv3Og8QuI5qOAOWBGGsTlsPALq2H1nd+lK8aAdW+wFAT/N3i3HtTq6rBJ79QAx8f75Hm3ktiPZktfc1hrIaYODsCTKUq1v5wXyD0bzfUJ+StcZujJHvToSqLmsLl9nZvQJMF/sEL01bbHFno6WRQrgq68P7ZRCkVQwAOVT63V4frNcReGHk7FOCZHf0AGAWEgAsvZWlWKptq5YijSfalqRAXYzvA9pKQBVg7O8utgmCzR4TBICpcM8fGjHCGOEkSdIkPVkSxzHGoGq5ku4AuFZ36nqYpNQ5ASeEMCYkSQgYfApntzuJ64wsd0OXTujty7MhKokiyMYZ3SLwfcnZpmkGa/85FwZSMBCkXlMeOUG0wl2aZQTXvU9KEMG70IIGYQKEgRbFaZYgxuoFAu8je8AicMJQ28YZdEvp/nXl3/UJAQSRUYvWwN5C9EXw6+eXlzIAPp0JeAsa6vlTYf2kFP3z2/vbS+H/+v5+5iHsb63eVRBcZxaCf1n+y/vv5+tFwvrlrfQJ+aF0VU1hpMdpWsn+89vnexHD+u3z8/X570vPqe4qrmdvk/SqeuUcoPXz62spI7KhVoJoj8O4mv8/T2hmtKRduV6Xr8uL8gOH66ubNGG2D0rgOkrIdXOAhNIzjx+t9mwBS0zylJA8A0r1e98tSgklgA3Ean9KyHIwApEQUpEQzrpFD9t71gbAdFFE8g8QgJbkqskNbXABdKd6nNUjQIRuSoSyjw8aAcmrWfIW0wugr6zirB4BSnK6Js4PB8hDkuWVPlv6gXIB0F3ESAHCOfQ2yQ7f31/AyK/WgDpcABP6EGIUEafglR++f35/vg5X6wPA1C6A6WLHLgIE8UH9f3+/D9f+kAStpCBmKaBRQAC/FJDXk1wAGnJwJJAj4OervoBs2BeAaK0aATj/+mFHUKpCV9Khk1n+NA2QhO9DVo/QW0h/e3Gg7Rq2Am3lA5SAoc+YD//2Et0LTc9yRLKc0abLZVDshSd+HO5Jw2aiG5LFlt3SqMCJ2oZ5GDWbbNrlGag9uSWBZX71oIfRbktw04nGEgDPxMq0JEzcfeORyBKgj6uHE50i/4NAH0dXJwvMsVvc1AuMAPq147U1mm/ixwiyMa+fjTDLUwK+XwoZ/IfMSQkIW3xrODj5+5E2FNgTRntoR+gewQ/VJn86Izj+PQGR1W+YcJ6OZ6x3B+C5wxvjNi/O7ynwF4NbY95QLwDy0c5/4J9LCoa3AKMCIJuRYXo+mGcakSkfkfATjG+FcATIvg8Le7qiqLYGZquK5QLBN+CXHE1uzOstCpD9IPBlGR44nU4PXhh69K8SQP84uiHL0ZRZRI5vtTu9gRLStcPQk2Vzodna/GSatjDhiqsDxrQnQxHeQVp8mcOLU8XWHD2kIn3TBAUQiH9OnXwKCq57PjTiytUdTVUm/VIsrYkWmkePsl21UGFwp7FSy6+WvChZ9txxF2EQRZEB6fcKAce0QjGgGkYUBeFqoTtzW5mK5WzyAqRAHI6n0gxelFQNonccXXdPpuuOM6flgPenmTQd0yS0z0n4B+TIPq46g8keAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 185904,
            actualAp: 12393,
            actualDps: 10048.63,
            magnification: "5164%",
            count: "1",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 464760,
            actualAp: 12393,
            actualDps: 5549.23,
            magnification: "5164%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 206560,
            actualAp: 12393,
            actualDps: 1737.17,
            magnification: "5164%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 3600,
            actualAp: 240,
            actualDps: 194.59,
            magnification: "100%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 185904,
            actualAp: 12393,
            actualDps: 10048.63,
            magnification: "5164%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 185904,
            actualAp: 12393,
            actualDps: 10048.63,
            magnification: "5164%",
            count: "7",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 464760,
            actualAp: 12393,
            actualDps: 5549.23,
            magnification: "5164%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-12.0s",
            delayFrames: "300-360f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 185904,
            actualAp: 12393,
            actualDps: 10048.63,
            magnification: "5164%",
            count: "6",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 464760,
            actualAp: 12393,
            actualDps: 5549.23,
            magnification: "5164%",
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 9,
      stageName: "殺意 Lv.10",
      baseHp: 10,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 140,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1070",
          treasureName: "殺意のキモネコ(785)",
          probability: "100",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "57",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "678",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 30000,
            ap: 1500,
            dps: 80.5,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 559,
            foreswing: 42,
            backswing: 24,
            tba: 256
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 30000,
            actualDps: 1610.0,
            magnification: "2000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [500, 500, 500],
                timings: [42, 45, 48]
            },
            "omni-strike": {
                standing_range: 500,
                omni_range: [0, 500]
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 212400,
            actualAp: 14160,
            actualDps: 11480.81,
            magnification: "5900%",
            count: "1",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 531000,
            actualAp: 14160,
            actualDps: 6340.14,
            magnification: "5900%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 236000,
            actualAp: 14160,
            actualDps: 1984.76,
            magnification: "5900%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 3600,
            actualAp: 240,
            actualDps: 194.59,
            magnification: "100%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 212400,
            actualAp: 14160,
            actualDps: 11480.81,
            magnification: "5900%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 212400,
            actualAp: 14160,
            actualDps: 11480.81,
            magnification: "5900%",
            count: "7",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 531000,
            actualAp: 14160,
            actualDps: 6340.14,
            magnification: "5900%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-12.0s",
            delayFrames: "300-360f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 212400,
            actualAp: 14160,
            actualDps: 11480.81,
            magnification: "5900%",
            count: "6",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 531000,
            actualAp: 14160,
            actualDps: 6340.14,
            magnification: "5900%",
            count: "7",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 10,
      stageName: "殺意 Lv.11",
      baseHp: 10,
      width: 3600,
      enemyLimit: 50,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
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
          enemyId: "678",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 30000,
            ap: 1500,
            dps: 80.5,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 559,
            foreswing: 42,
            backswing: 24,
            tba: 256
          },
          stageStats: {
            actualHp: 675000,
            actualAp: 33750,
            actualDps: 1811.25,
            magnification: "2250%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [500, 500, 500],
                timings: [42, 45, 48]
            },
            "omni-strike": {
                standing_range: 500,
                omni_range: [0, 500]
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 19200,
            actualDps: 15567.2,
            magnification: "8000%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
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
            count: "12",
            spawnTime: "11.3s",
            spawnTimeFrames: "340f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 720000,
            actualAp: 19200,
            actualDps: 8596.8,
            magnification: "8000%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 19200,
            actualDps: 2691.2,
            magnification: "8000%",
            count: "6",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
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
            actualHp: 40000,
            actualAp: 16000,
            actualDps: 11707.28,
            magnification: "800%",
            count: "30",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 720000,
            actualAp: 19200,
            actualDps: 8596.8,
            magnification: "8000%",
            count: "6",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 19200,
            actualDps: 2691.2,
            magnification: "8000%",
            count: "4",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 19200,
            actualDps: 15567.2,
            magnification: "8000%",
            count: "10",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 19200,
            actualDps: 15567.2,
            magnification: "8000%",
            count: "5",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 720000,
            actualAp: 19200,
            actualDps: 8596.8,
            magnification: "8000%",
            count: "3",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 11,
      stageName: "殺意 Lv.12",
      baseHp: 10,
      width: 3600,
      enemyLimit: 50,
      requiredCost: 160,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
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
          enemyId: "678",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 30000,
            ap: 1500,
            dps: 80.5,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 559,
            foreswing: 42,
            backswing: 24,
            tba: 256
          },
          stageStats: {
            actualHp: 701400,
            actualAp: 35070,
            actualDps: 1882.09,
            magnification: "2338%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [500, 500, 500],
                timings: [42, 45, 48]
            },
            "omni-strike": {
                standing_range: 500,
                omni_range: [0, 500]
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 324000,
            actualAp: 21600,
            actualDps: 17513.1,
            magnification: "9000%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
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
            actualHp: 45000,
            actualAp: 18000,
            actualDps: 13170.69,
            magnification: "900%",
            count: "12",
            spawnTime: "11.3s",
            spawnTimeFrames: "340f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 810000,
            actualAp: 21600,
            actualDps: 9671.4,
            magnification: "9000%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 21600,
            actualDps: 3027.6,
            magnification: "9000%",
            count: "6",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgEDAwMEBAQFBQUUAQEICAgMDAsPDw8zAAE0AAATExMWFhZHAgJdAQEdHR1yAAAkJCSRAAAsLCwsLCyiAAAxMTG0AAE3NzfdAAD9AABSUFBmZmaAgIC5ubnfrlfyAAAAQHRSTlMABQoTFx8lLDM7QkpUXmhudn6IjpagrbS+w8/4/f/dqMfv9dbp4v//+///3ff/////////3P/////////+////dWjEkAAABUhJREFUWIWdVwl3qjoQLiAVBVSQTRYRCFB8gCl9iNjl/v9/9SZYN6DFd8dzWpKT+TL7TJ6eBoiiqeuCZuih821iuAlzYWeF2fT/IVAjXlEnJxEoZiobG4kZYLm/fiLpKBAbHoqdaaHlqyw1xHWlkaCuLRstn+Gb5qSNZzuW9jwIAKLy3HhEUyNBR7bj+AboQHEyYDmOrY+HAZ5lXV0u+LGow5XAsxZoil2syTcAcMMqMHPT80JDMbwTD5oxjLixnGZhTAbdQNFTN81wivyG33G85VRwCVgMABvhVzdQNMOOOV5BWVlm8YnfeQl0IyT8SRwn4XL6IwJFjzhhoejGZp0mRV0VCbkzybI0Te04djJc4iwNtR9koBhOlLVVgNKMUFHVFQgRO0lRViVwwldJ9gpP5/vMQHNzdYNSXMD5CjjgLPwrMFxbnhgzXNVAFUbycw//ZBkAd1k3VBGUGtirkvxwVjQYFSYYRWp0RQD+8MRNbq4LnGQYF0mCAQj4wHi4qMAoSQF6JUjpBAO7CF7AbABQEIkbD8TkF2NQAhN/AEQSn/7awbxtR3ZuoBTsBhoSX2XJ2YXfMN+fTuNLiG61LQLNThd6mJYgP0FwLvz9ZG3ErhVYHswIalRF9jt3kx6zHk/SkHDEEEU2cD8BmHcBKJZXQgCoy78CAHYJjADOKiGC/wKAnmqIRA/GyTB/rwSc6zXiP8Deb4PR3MQQ/UU8aIAfAKixioq66rNgFEXtdY8KFFStl7LPidHudXeLsH3d7/5pAVDsmBWU4AWUKNthFO0Ox8Pudn08HtoA7EwS5MBKsrIuccuM29fj+/FGhAjWbQCK11fzuQkpDDrglhkbCfK79eG1BcDM12uZ19JTMWp7Mspf8+hunbeNyCmep02kADeVCA8mU2SvF6Pbrs/rlm2KopFCJUqK35OpkcVGqsiPr0IIG8v2zVWYFlBufo+kKNrm+TaKUGCq/KUsiSb0LTtNoQLiIenz/WG/J04BKaZngNmp7zStIPk9lKP8bb9/a4wKhjgDLEgXh75R18PJcFKh+UTKBaBpwzGuSSt4JJlO5Kn3AESEB8rZDYByrwKIQHrHwwh2KF2MeJo+iBL9BbGzRzagtl/iYEXGD2gZ4Ic+JRIoc3clAY4mViCNL6Gs+uQYtHRopF0dss+vD0ys/03bqP6sPWNxDUVmFliNCZrW1hEAf/35xLv94Uz77cfXhyHezHsUp4AZ44R0tj4Nvr7q3eH9QsddVf8rje7ymdcIAmnmPV0hLsv8cLwBeN36bmtmZnjF9Gzo3VlvIEEZe7+VwN/M7gR4OjVGG0pSfyBF2/0V4bjPA6k78D7DaAcS9AoQx1n+drwK8GJ2u/vTs+uBCereXEqKj4/8LMPxbVuGi7YGUJjlEFobxEEfQPn5kZE8JvSW4zrVesYsYQNxUBW9yZCURRxtvymKcRzKHSNQYISCpPND3dVa9cw44iotHxlPCMErhG0DwDMhfCkfGE8aAE/pAMCwSUacxyqSFSx6Jm4YV9f2hd/2vQudXw7NvgUbwbL34UJDi2oeObYNQq5c9Zvc1WWbXK6pypzrf7fQIslrGyHLsczZhDuTqHkEcg0ZZ4cKz3Gjnx5OU92Hgy6c99wxdaGRaFjwepMgZ8mbh+plp+C5M5qqHtwhL0MbucL0SqLr254qSIHt6xPoq10EeK/w4mwuGyAB0g1k+4F+SyYAGIq2hr/STOS7OtDjhWpszGCNwMYIeb5/44TGEb6PwhB5aG1uDHfRMSI1mohzSV4qYHONXGms7sgge5rrqspSlubi5CrBfzndboB89/JYAAAAAElFTkSuQmCC",
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
            actualHp: 45000,
            actualAp: 18000,
            actualDps: 13170.69,
            magnification: "900%",
            count: "30",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 810000,
            actualAp: 21600,
            actualDps: 9671.4,
            magnification: "9000%",
            count: "6",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 21600,
            actualDps: 3027.6,
            magnification: "9000%",
            count: "4",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 324000,
            actualAp: 21600,
            actualDps: 17513.1,
            magnification: "9000%",
            count: "10",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 324000,
            actualAp: 21600,
            actualDps: 17513.1,
            magnification: "9000%",
            count: "5",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 810000,
            actualAp: 21600,
            actualDps: 9671.4,
            magnification: "9000%",
            count: "3",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 12,
      stageName: "殺意 Lv.13",
      baseHp: 10,
      width: 3600,
      enemyLimit: 50,
      requiredCost: 170,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "105",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "678",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 30000,
            ap: 1500,
            dps: 80.5,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 559,
            foreswing: 42,
            backswing: 24,
            tba: 256
          },
          stageStats: {
            actualHp: 727500,
            actualAp: 36375,
            actualDps: 1952.12,
            magnification: "2425%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [500, 500, 500],
                timings: [42, 45, 48]
            },
            "omni-strike": {
                standing_range: 500,
                omni_range: [0, 500]
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 24000,
            actualDps: 19459.0,
            magnification: "10000%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
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
            actualHp: 50000,
            actualAp: 20000,
            actualDps: 14634.1,
            magnification: "1000%",
            count: "12",
            spawnTime: "11.3s",
            spawnTimeFrames: "340f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 24000,
            actualDps: 10746.0,
            magnification: "10000%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 24000,
            actualDps: 3364.0,
            magnification: "10000%",
            count: "6",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
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
            actualHp: 50000,
            actualAp: 20000,
            actualDps: 14634.1,
            magnification: "1000%",
            count: "30",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 24000,
            actualDps: 10746.0,
            magnification: "10000%",
            count: "6",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 24000,
            actualDps: 3364.0,
            magnification: "10000%",
            count: "4",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 24000,
            actualDps: 19459.0,
            magnification: "10000%",
            count: "10",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 24000,
            actualDps: 19459.0,
            magnification: "10000%",
            count: "5",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 24000,
            actualDps: 10746.0,
            magnification: "10000%",
            count: "3",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 13,
      stageName: "殺意 Lv.14",
      baseHp: 10,
      width: 3600,
      enemyLimit: 50,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
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
          enemyId: "678",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 30000,
            ap: 1500,
            dps: 80.5,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 559,
            foreswing: 42,
            backswing: 24,
            tba: 256
          },
          stageStats: {
            actualHp: 753900,
            actualAp: 37695,
            actualDps: 2022.96,
            magnification: "2513%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [500, 500, 500],
                timings: [42, 45, 48]
            },
            "omni-strike": {
                standing_range: 500,
                omni_range: [0, 500]
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 396000,
            actualAp: 26400,
            actualDps: 21404.9,
            magnification: "11000%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
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
            actualHp: 55000,
            actualAp: 22000,
            actualDps: 16097.51,
            magnification: "1100%",
            count: "12",
            spawnTime: "11.3s",
            spawnTimeFrames: "340f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 990000,
            actualAp: 26400,
            actualDps: 11820.6,
            magnification: "11000%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 440000,
            actualAp: 26400,
            actualDps: 3700.4,
            magnification: "11000%",
            count: "6",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
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
            actualHp: 55000,
            actualAp: 22000,
            actualDps: 16097.51,
            magnification: "1100%",
            count: "30",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 990000,
            actualAp: 26400,
            actualDps: 11820.6,
            magnification: "11000%",
            count: "6",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 440000,
            actualAp: 26400,
            actualDps: 3700.4,
            magnification: "11000%",
            count: "4",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 396000,
            actualAp: 26400,
            actualDps: 21404.9,
            magnification: "11000%",
            count: "10",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgIDAwMEBAQFBQUFBQUICAgeAAAMDAwNDQ0PDw80AAAQEBATExNJAAAYGBgcHBwgICBsAAAmJiYrKyuRAAA2NDSzAABAQEBTODjWAABzMjGVJyjGFhbtBgeFz7OYAAAAQHRSTlMABQsRFRslLDQ8Q01UXGJnd/1ug4ycrLLBzOnv/5Skucb0+d/Y0uT//+7o9f//+v///P//////////////////6VIQUgAABNNJREFUWIWVl4l2qjAQhgvihhsoIILsSFwaGyiU1m7v/1Z34lJAgnrnnC4i8+WfJWR4eqoZ1+m1ufrlx40fSSLP/op7CNxWdIkpgWv3Og8QuI5qOAOWBGGsTlsPALq2H1nd+lK8aAdW+wFAT/N3i3HtTq6rBJ79QAx8f75Hm3ktiPZktfc1hrIaYODsCTKUq1v5wXyD0bzfUJ+StcZujJHvToSqLmsLl9nZvQJMF/sEL01bbHFno6WRQrgq68P7ZRCkVQwAOVT63V4frNcReGHk7FOCZHf0AGAWEgAsvZWlWKptq5YijSfalqRAXYzvA9pKQBVg7O8utgmCzR4TBICpcM8fGjHCGOEkSdIkPVkSxzHGoGq5ku4AuFZ36nqYpNQ5ASeEMCYkSQgYfApntzuJ64wsd0OXTujty7MhKokiyMYZ3SLwfcnZpmkGa/85FwZSMBCkXlMeOUG0wl2aZQTXvU9KEMG70IIGYQKEgRbFaZYgxuoFAu8je8AicMJQ28YZdEvp/nXl3/UJAQSRUYvWwN5C9EXw6+eXlzIAPp0JeAsa6vlTYf2kFP3z2/vbS+H/+v5+5iHsb63eVRBcZxaCf1n+y/vv5+tFwvrlrfQJ+aF0VU1hpMdpWsn+89vnexHD+u3z8/X570vPqe4qrmdvk/SqeuUcoPXz62spI7KhVoJoj8O4mv8/T2hmtKRduV6Xr8uL8gOH66ubNGG2D0rgOkrIdXOAhNIzjx+t9mwBS0zylJA8A0r1e98tSgklgA3Ean9KyHIwApEQUpEQzrpFD9t71gbAdFFE8g8QgJbkqskNbXABdKd6nNUjQIRuSoSyjw8aAcmrWfIW0wugr6zirB4BSnK6Js4PB8hDkuWVPlv6gXIB0F3ESAHCOfQ2yQ7f31/AyK/WgDpcABP6EGIUEafglR++f35/vg5X6wPA1C6A6WLHLgIE8UH9f3+/D9f+kAStpCBmKaBRQAC/FJDXk1wAGnJwJJAj4OervoBs2BeAaK0aATj/+mFHUKpCV9Khk1n+NA2QhO9DVo/QW0h/e3Gg7Rq2Am3lA5SAoc+YD//2Et0LTc9yRLKc0abLZVDshSd+HO5Jw2aiG5LFlt3SqMCJ2oZ5GDWbbNrlGag9uSWBZX71oIfRbktw04nGEgDPxMq0JEzcfeORyBKgj6uHE50i/4NAH0dXJwvMsVvc1AuMAPq147U1mm/ixwiyMa+fjTDLUwK+XwoZ/IfMSQkIW3xrODj5+5E2FNgTRntoR+gewQ/VJn86Izj+PQGR1W+YcJ6OZ6x3B+C5wxvjNi/O7ynwF4NbY95QLwDy0c5/4J9LCoa3AKMCIJuRYXo+mGcakSkfkfATjG+FcATIvg8Le7qiqLYGZquK5QLBN+CXHE1uzOstCpD9IPBlGR44nU4PXhh69K8SQP84uiHL0ZRZRI5vtTu9gRLStcPQk2Vzodna/GSatjDhiqsDxrQnQxHeQVp8mcOLU8XWHD2kIn3TBAUQiH9OnXwKCq57PjTiytUdTVUm/VIsrYkWmkePsl21UGFwp7FSy6+WvChZ9txxF2EQRZEB6fcKAce0QjGgGkYUBeFqoTtzW5mK5WzyAqRAHI6n0gxelFQNonccXXdPpuuOM6flgPenmTQd0yS0z0n4B+TIPq46g8keAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 396000,
            actualAp: 26400,
            actualDps: 21404.9,
            magnification: "11000%",
            count: "5",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 990000,
            actualAp: 26400,
            actualDps: 11820.6,
            magnification: "11000%",
            count: "3",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 14,
      stageName: "殺意 Lv.MAX",
      baseHp: 10,
      width: 3600,
      enemyLimit: 50,
      requiredCost: 190,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
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
          enemyId: "678",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 30000,
            ap: 1500,
            dps: 80.5,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 559,
            foreswing: 42,
            backswing: 24,
            tba: 256
          },
          stageStats: {
            actualHp: 780000,
            actualAp: 39000,
            actualDps: 2093.0,
            magnification: "2600%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [500, 500, 500],
                timings: [42, 45, 48]
            },
            "omni-strike": {
                standing_range: 500,
                omni_range: [0, 500]
            },
            "immune-waves": {
                enabled: true
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
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgIDAwMEBAQFBQUFBQUICAgeAAAMDAwNDQ0PDw80AAAQEBATExNJAAAYGBgcHBwgICBsAAAmJiYrKyuRAAA2NDSzAABAQEBTODjWAABzMjGVJyjGFhbtBgeFz7OYAAAAQHRSTlMABQsRFRslLDQ8Q01UXGJnd/1ug4ycrLLBzOnv/5Skucb0+d/Y0uT//+7o9f//+v///P//////////////////6VIQUgAABNNJREFUWIWVl4l2qjAQhgvihhsoIILsSFwaGyiU1m7v/1Z34lJAgnrnnC4i8+WfJWR4eqoZ1+m1ufrlx40fSSLP/op7CNxWdIkpgWv3Og8QuI5qOAOWBGGsTlsPALq2H1nd+lK8aAdW+wFAT/N3i3HtTq6rBJ79QAx8f75Hm3ktiPZktfc1hrIaYODsCTKUq1v5wXyD0bzfUJ+StcZujJHvToSqLmsLl9nZvQJMF/sEL01bbHFno6WRQrgq68P7ZRCkVQwAOVT63V4frNcReGHk7FOCZHf0AGAWEgAsvZWlWKptq5YijSfalqRAXYzvA9pKQBVg7O8utgmCzR4TBICpcM8fGjHCGOEkSdIkPVkSxzHGoGq5ku4AuFZ36nqYpNQ5ASeEMCYkSQgYfApntzuJ64wsd0OXTujty7MhKokiyMYZ3SLwfcnZpmkGa/85FwZSMBCkXlMeOUG0wl2aZQTXvU9KEMG70IIGYQKEgRbFaZYgxuoFAu8je8AicMJQ28YZdEvp/nXl3/UJAQSRUYvWwN5C9EXw6+eXlzIAPp0JeAsa6vlTYf2kFP3z2/vbS+H/+v5+5iHsb63eVRBcZxaCf1n+y/vv5+tFwvrlrfQJ+aF0VU1hpMdpWsn+89vnexHD+u3z8/X570vPqe4qrmdvk/SqeuUcoPXz62spI7KhVoJoj8O4mv8/T2hmtKRduV6Xr8uL8gOH66ubNGG2D0rgOkrIdXOAhNIzjx+t9mwBS0zylJA8A0r1e98tSgklgA3Ean9KyHIwApEQUpEQzrpFD9t71gbAdFFE8g8QgJbkqskNbXABdKd6nNUjQIRuSoSyjw8aAcmrWfIW0wugr6zirB4BSnK6Js4PB8hDkuWVPlv6gXIB0F3ESAHCOfQ2yQ7f31/AyK/WgDpcABP6EGIUEafglR++f35/vg5X6wPA1C6A6WLHLgIE8UH9f3+/D9f+kAStpCBmKaBRQAC/FJDXk1wAGnJwJJAj4OervoBs2BeAaK0aATj/+mFHUKpCV9Khk1n+NA2QhO9DVo/QW0h/e3Gg7Rq2Am3lA5SAoc+YD//2Et0LTc9yRLKc0abLZVDshSd+HO5Jw2aiG5LFlt3SqMCJ2oZ5GDWbbNrlGag9uSWBZX71oIfRbktw04nGEgDPxMq0JEzcfeORyBKgj6uHE50i/4NAH0dXJwvMsVvc1AuMAPq147U1mm/ixwiyMa+fjTDLUwK+XwoZ/IfMSQkIW3xrODj5+5E2FNgTRntoR+gewQ/VJn86Izj+PQGR1W+YcJ6OZ6x3B+C5wxvjNi/O7ynwF4NbY95QLwDy0c5/4J9LCoa3AKMCIJuRYXo+mGcakSkfkfATjG+FcATIvg8Le7qiqLYGZquK5QLBN+CXHE1uzOstCpD9IPBlGR44nU4PXhh69K8SQP84uiHL0ZRZRI5vtTu9gRLStcPQk2Vzodna/GSatjDhiqsDxrQnQxHeQVp8mcOLU8XWHD2kIn3TBAUQiH9OnXwKCq57PjTiytUdTVUm/VIsrYkWmkePsl21UGFwp7FSy6+WvChZ9txxF2EQRZEB6fcKAce0QjGgGkYUBeFqoTtzW5mK5WzyAqRAHI6n0gxelFQNonccXXdPpuuOM6flgPenmTQd0yS0z0n4B+TIPq46g8keAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 432000,
            actualAp: 28800,
            actualDps: 23350.8,
            magnification: "12000%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "12",
            spawnTime: "11.3s",
            spawnTimeFrames: "340f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1080000,
            actualAp: 28800,
            actualDps: 12895.2,
            magnification: "12000%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 28800,
            actualDps: 4036.8,
            magnification: "12000%",
            count: "6",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "30",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1080000,
            actualAp: 28800,
            actualDps: 12895.2,
            magnification: "12000%",
            count: "6",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "719",
          enemyName: "殺意のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcHBwcHBwcICAgICAgJCQkKCgoMDAwQEBAQEBAsBQUSEhJHAAAXFxcUJyaIJyfsItHlAAAAIHRSTlMACCt5/xOHImab0DZFVLHfxvH+kLymd//o///S/////6UZ9Z4AAAJBSURBVFiFnZfNlqQwCIWxTPyNRolKY7dd7/+WTdQzs5qe42VhbYovEbiARL9bM9gj1P/51y+W1BcDFzhgPWRWwQGL7Lvb9+hB/6S8f7mvnSfM3ys75u9vdu4FAXp1zh3vtwEa7AZsru6927OHANSKu6zD/Ol1CJ8ALAQWhENnCyPPoD+FQyvfqEYUMKhW5A9FQ0CDaGvVcIB1ZFpUWYk+jgUH8Ej0eYwoYBNeMqBFAZVkGS2SUEAStgSsXKGAVvgjY0oUMEq0ItwY0yLlt5+snW06oIAuruItFzAgTklqA8CvMI/bCYCDyOsgvWUBTiOnoBmAVmLBVS/BqgHVgtettgysjKrRa+MNMDLaUGodCqvCBQa8rAR5o0U/QECvgbikT53B8RysCDRRpwxuGIO8yLpqFAEHy2ZK0pVmEXA0jmJyWEk6VI6zTaQ41pzQjmLvT3EJPFguEatzH5iWjWuwq+Yk0DKt83kVwBLbY53jRKAcp7wW2Ghoacam66lim24NRWhBKDi3Qpuv4brLY8vNKO8YJoSVEUAjecENYlJMggCuY/u84m3Qun1Frs8rRgPpmc/qOaswMKBnfyno/Ok5PAfcp9Z5z64doOfS3Zzmz22e2XgVT6PZ1wHjNV7jqNLs64A16+4B6znbrbE9NX8HfnLV3+s8scDXl9p83n56PtzuJLxml5vJ+FzP43XmELvcTNrneo5X2NrY5sPL54D7Q68sT9/GPQa0NRXerGhdUdDwHGCnpnHqui7GMQ31PwfDD2vOH0p1KPuEAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 4000,
            ap: 240,
            dps: 33.64,
            speed: 10,
            range: 700,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 214,
            foreswing: 15,
            backswing: 22,
            tba: 100
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 28800,
            actualDps: 4036.8,
            magnification: "12000%",
            count: "4",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 432000,
            actualAp: 28800,
            actualDps: 23350.8,
            magnification: "12000%",
            count: "10",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "311",
          enemyName: "殺意のネコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 3600,
            ap: 240,
            dps: 194.59,
            speed: 15,
            range: 140,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 432000,
            actualAp: 28800,
            actualDps: 23350.8,
            magnification: "12000%",
            count: "5",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "633",
          enemyName: "殺意のタンクネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIBBgcFBQUGBgYZAAAJCQkJCQkMDAwQEBA7AAAUFBRFAAAWFhYBIyNUAAAaGhoLIyMeHh5vAAAiIiInJiaBAAAENjcqKiosLCyWAAAuLi4cOTkyMjKoAAAfQEE3NzczOTslQUIWSUk1Pj8+Pj7PAAAkSks5REQsS0tEQkLeAABETE5MS0v/AADaEBBNUFCWMTG5IiLnDw/TGhqIOzrJHx9sSknIKChPXF6yODhgjhvVAAAAgHRSTlMAAwULDRAVGR0iJCcsLzQ4PUBESUtQVVxiaGxvdHeBhYmNkZWYnJ+jpqiqr7O2ub2/wsTJzNDT2Nzg4+jr7fb4/v/a5fL87///9v/7/////////////////////////////////////////////////////////////////////wUuzswAAAMTSURBVFiFldcJU9pAFADg4NGieIBgPaporYonKBQPQHQFMdokRSylQZNuU6gt1WpND7HV/vUmHFMSzL7lzchsMrzPPd+wDGMVS8EO05v+2S7LbzeHbY9POA1vRhE/0gLQxeURGm548ZzFwmQLgJOTEUJj7Y+7HN12bTA+oZRDSy0Abr6oASj1kud5LhkKIJzn0HoLQB9iuTxWFCxJMsZYFgWNi5vnlRA+ViwqYkZg9X5w6ZwsS2mEOqnz/ZmSzCFDZJU8ctPmz2cuM6gpRPGAcid4uMt0pe/osPaHkP7M87t0wKYi1//rydXbWuv1lxPtc5Qm38WX2Dqgqle11gdV1dfVRgFMS1J9Ag+P3r2qYuzhyZHecsH5tpiSNk2fpC1CrTkJAw6uyJqA0uePl7WmHwaGsop5Ad/c39c7FYaB6bxkyj/99v3XJxbpuxltwEAQZxuS2ZL8/s+Nqv48v8b6cxQGNoxzKF78ULUon4uVmdkC8zsOisZTcHxbAQrVpyQI9AimOTy90wH19pgS8GSwESjc3ZTLv8t/v1ICI1kTgK8vzs4KhYt8ZWQpEPCKshFA+/sNDzEQmGraBoaIgMCsJJIAeCMtyA8Uo/+xBgLLho3YFCEQWMXmw2yIAAiEsUAC5kFgl9yDKSjfliAD4xDQnlI4c0FqjCEI6DxoqoiGAIuqnVM4EtADAd2cQhrB3iMI6CUD8FHo5zEhHwVBYEAgAnMgMGiuJ8aYAIHhHBF4CgJjZADcR8ykZK5ohhgAAZ+c5wmAAwT8OEfIT7WBQAhnCFsZrkfMGiaVxAUYWCcCz2gA0mmGV5EJyyTADgMBiQDAZ1H/gUNYBbgkazebbNYa8FAAds56FeLwNmL0y5ElAJ9lPdqiVvnblBcWlxUAn8RqOB9O3xmkzGd8FgBY0OuxazGCfsr8zj207dUmcsc/u+RfDQYWk1o7rgF9lIAD7Xht+jC8Pc4Bt9vV+wKhlSeaQHHhGl4MR5L6cJu6r/dgezM000sGPBNzK+H1UDgSi0ZjW8l4NWKJzUgiHPSvLs+MN5XEf+3y2+FYZfcCAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 9000,
            ap: 240,
            dps: 107.46,
            speed: 10,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1080000,
            actualAp: 28800,
            actualDps: 12895.2,
            magnification: "12000%",
            count: "3",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "12.0-13.3s",
            delayFrames: "360-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e24064Data;

