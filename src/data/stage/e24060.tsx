// Stage 24060 Data
import type { StageData } from '../../app/stage/types';

export const e24060Data: StageData = {
  eventId: 24060,
  eventName: "タンクネコたちの逆襲(旧)",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 60,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "盾の殺意 Lv.1",
      baseHp: 3000,
      width: 4000,
      enemyLimit: 2,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1063",
          treasureName: "殺意のタンクネコ(695)",
          probability: "5",
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
            actualHp: 2700,
            actualAp: 72,
            actualDps: 32.24,
            magnification: "30%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
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
      stageName: "盾の殺意 Lv.2",
      baseHp: 21000,
      width: 4000,
      enemyLimit: 6,
      requiredCost: 70,
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
      stageName: "盾の殺意 Lv.3",
      baseHp: 60000,
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
          probability: "20",
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
            actualHp: 36000,
            actualAp: 960,
            actualDps: 429.84,
            magnification: "400%",
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
            actualHp: 14400,
            actualAp: 960,
            actualDps: 778.36,
            magnification: "400%",
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
            actualHp: 36000,
            actualAp: 960,
            actualDps: 429.84,
            magnification: "400%",
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
            actualHp: 14400,
            actualAp: 960,
            actualDps: 778.36,
            magnification: "400%",
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
            actualHp: 36000,
            actualAp: 960,
            actualDps: 429.84,
            magnification: "400%",
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
            actualHp: 36000,
            actualAp: 960,
            actualDps: 429.84,
            magnification: "400%",
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
            actualHp: 14400,
            actualAp: 960,
            actualDps: 778.36,
            magnification: "400%",
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
      stageId: 3,
      stageName: "盾の殺意 Lv.4",
      baseHp: 168000,
      width: 4000,
      enemyLimit: 6,
      requiredCost: 90,
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
          amount: "4",
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
      stageName: "盾の殺意 Lv.5",
      baseHp: 276000,
      width: 4000,
      enemyLimit: 6,
      requiredCost: 100,
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
          amount: "5",
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
            actualHp: 106200,
            actualAp: 7080,
            actualDps: 5740.4,
            magnification: "2950%",
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
            actualHp: 265500,
            actualAp: 7080,
            actualDps: 3170.07,
            magnification: "2950%",
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
            actualHp: 106200,
            actualAp: 7080,
            actualDps: 5740.4,
            magnification: "2950%",
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
            actualHp: 265500,
            actualAp: 7080,
            actualDps: 3170.07,
            magnification: "2950%",
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
            actualHp: 265500,
            actualAp: 7080,
            actualDps: 3170.07,
            magnification: "2950%",
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
            actualHp: 106200,
            actualAp: 7080,
            actualDps: 5740.4,
            magnification: "2950%",
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
      stageId: 5,
      stageName: "盾の殺意 Lv.6",
      baseHp: 384000,
      width: 4000,
      enemyLimit: 6,
      requiredCost: 110,
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
            actualHp: 384000,
            actualAp: 12800,
            actualDps: 510.72,
            magnification: "12800%",
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
            actualHp: 380250,
            actualAp: 10140,
            actualDps: 4540.19,
            magnification: "4225%",
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
            actualHp: 152100,
            actualAp: 10140,
            actualDps: 8221.43,
            magnification: "4225%",
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
            actualHp: 380250,
            actualAp: 10140,
            actualDps: 4540.19,
            magnification: "4225%",
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
            actualHp: 152100,
            actualAp: 10140,
            actualDps: 8221.43,
            magnification: "4225%",
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
            actualHp: 380250,
            actualAp: 10140,
            actualDps: 4540.19,
            magnification: "4225%",
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
            actualHp: 380250,
            actualAp: 10140,
            actualDps: 4540.19,
            magnification: "4225%",
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
            actualHp: 152100,
            actualAp: 10140,
            actualDps: 8221.43,
            magnification: "4225%",
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
      stageId: 6,
      stageName: "盾の殺意 Lv.7",
      baseHp: 492000,
      width: 4000,
      enemyLimit: 6,
      requiredCost: 120,
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
            actualHp: 492000,
            actualAp: 16400,
            actualDps: 654.36,
            magnification: "16400%",
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
            actualHp: 495000,
            actualAp: 13200,
            actualDps: 5910.3,
            magnification: "5500%",
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
            actualHp: 198000,
            actualAp: 13200,
            actualDps: 10702.45,
            magnification: "5500%",
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
            actualHp: 495000,
            actualAp: 13200,
            actualDps: 5910.3,
            magnification: "5500%",
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
            actualHp: 198000,
            actualAp: 13200,
            actualDps: 10702.45,
            magnification: "5500%",
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
            actualHp: 495000,
            actualAp: 13200,
            actualDps: 5910.3,
            magnification: "5500%",
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
            actualHp: 495000,
            actualAp: 13200,
            actualDps: 5910.3,
            magnification: "5500%",
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
            actualHp: 198000,
            actualAp: 13200,
            actualDps: 10702.45,
            magnification: "5500%",
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
      stageId: 7,
      stageName: "盾の殺意 Lv.8",
      baseHp: 600000,
      width: 3000,
      enemyLimit: 40,
      requiredCost: 140,
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
          amount: "56",
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
            actualHp: 600000,
            actualAp: 20000,
            actualDps: 798.0,
            magnification: "20000%",
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
            actualHp: 720000,
            actualAp: 19200,
            actualDps: 8596.8,
            magnification: "8000%",
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
            actualHp: 288000,
            actualAp: 19200,
            actualDps: 15567.2,
            magnification: "8000%",
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
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-4.0s",
            delayFrames: "100-120f",
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
            actualHp: 288000,
            actualAp: 19200,
            actualDps: 15567.2,
            magnification: "8000%",
            count: "30",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
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
            actualHp: 720000,
            actualAp: 19200,
            actualDps: 8596.8,
            magnification: "8000%",
            count: "25",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.7-4.0s",
            delayFrames: "80-120f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 8,
      stageName: "盾の殺意 Lv.9",
      baseHp: 900000,
      width: 3000,
      enemyLimit: 40,
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
          amount: "57",
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
            actualHp: 900000,
            actualAp: 30000,
            actualDps: 1197.0,
            magnification: "30000%",
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
            actualHp: 1080000,
            actualAp: 28800,
            actualDps: 12895.2,
            magnification: "12000%",
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
            actualHp: 432000,
            actualAp: 28800,
            actualDps: 23350.8,
            magnification: "12000%",
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
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-4.0s",
            delayFrames: "100-120f",
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
            actualHp: 432000,
            actualAp: 28800,
            actualDps: 23350.8,
            magnification: "12000%",
            count: "30",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
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
            actualHp: 1080000,
            actualAp: 28800,
            actualDps: 12895.2,
            magnification: "12000%",
            count: "25",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.7-4.0s",
            delayFrames: "80-120f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 9,
      stageName: "盾の殺意 Lv.MAX",
      baseHp: 1200000,
      width: 3000,
      enemyLimit: 40,
      requiredCost: 200,
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
            actualHp: 1200000,
            actualAp: 40000,
            actualDps: 1596.0,
            magnification: "40000%",
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
            actualHp: 1440000,
            actualAp: 38400,
            actualDps: 17193.6,
            magnification: "16000%",
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
            actualHp: 576000,
            actualAp: 38400,
            actualDps: 31134.4,
            magnification: "16000%",
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
            actualHp: 1440000,
            actualAp: 38400,
            actualDps: 17193.6,
            magnification: "16000%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-4.0s",
            delayFrames: "100-120f",
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
            actualHp: 576000,
            actualAp: 38400,
            actualDps: 31134.4,
            magnification: "16000%",
            count: "30",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
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
            actualHp: 1440000,
            actualAp: 38400,
            actualDps: 17193.6,
            magnification: "16000%",
            count: "25",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.7-4.0s",
            delayFrames: "80-120f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e24060Data;

