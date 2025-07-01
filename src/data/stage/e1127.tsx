// Stage 1127 Data
import type { StageData } from '../../app/stage/types';

export const e1127Data: StageData = {
  eventId: 1127,
  eventName: "２２２ ～猫の日～(旧)",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 127,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "蘇る野生の血",
      baseHp: 3000,
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
          probability: "5",
          amount: "1",
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
          }
        }]
    },
    {
      stageId: 1,
      stageName: "血に染まった爪",
      baseHp: 60000,
      width: 4000,
      enemyLimit: 6,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1030",
          treasureName: "殺意のネコ(319)",
          probability: "20",
          amount: "1",
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
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
            spawnTime: "63.3s",
            spawnTimeFrames: "1,900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
            spawnTime: "78.0s",
            spawnTimeFrames: "2,340f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "222事件",
      baseHp: 600000,
      width: 3000,
      enemyLimit: 40,
      requiredCost: 150,
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
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "120.0-120.0s",
            delayFrames: "3,600-3,600f",
            baseHpRatio: "100%",
            isBoss: false
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
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.3-8.0s",
            delayFrames: "160-240f",
            baseHpRatio: "99%",
            isBoss: false
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
            count: "45",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "1.3-2.0s",
            delayFrames: "40-60f",
            baseHpRatio: "99%",
            isBoss: false
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
            count: "30",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "2.7-4.0s",
            delayFrames: "80-120f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1127Data;

