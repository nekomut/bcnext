// Stage 1301 Data
import type { StageData } from '../../app/stage/types';

export const e1301Data: StageData = {
  eventId: 1301,
  eventName: "Weekend～告白～",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 301,
  stages: [
    {
      stageId: 0,
      stageName: "勇気を出して呼び出し",
      baseHp: 10,
      width: 6000,
      enemyLimit: 10,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "213",
          treasureName: "伝説のラブレター",
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
          enemyId: "602",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAABAQECAgIGBQUICQgMDAsTEQ0YGBIoMh42LSA3RjBYQy1MUldBYzNqUzVTckt9YT9ZikeRcUp+fX1lnVGlflNWndpurFmmpaTouzXR0dH663jv7u3///8IZVZlAAAAIHRSTlMAEyQ9Vv94lK3C3//////+/////////////////////983GOsAAARySURBVFiFtZcLj6M6DIWnQIDGeWDC40Ip+f//co9DO9pb6RJmpBuNmFW3/uLY5zjM19f/vspWt1Vd3X4ZXjR+WZZpmu7F77b303KsietfxLe0vOOXxZc/jr9p4oXDtKQ0pvZHdbg1WmvyjB/Pryz0DwiVlggkIJszpzP84BCFniQg0HtvnqYwTaa5CrhLECLegAXNCN57XZeXTlGmuMDB2iVVcDJhYuMNcQAkD6jS0RHqifGcApMh418ZhQsElODoHJFxjtPC71dNuMoCGuycCF4p/ue9SNlDlzobH8LxTSkcudcyRC9dm1w726N3wRvvJ973mH7Md085184qoAXMhiwBEDd2ZozxBUB5pgsAVJ7JWkvB76siNSKDIHUJZNDKDKBOJgxGCB4AY8htO9roQUVjOAMo2KOIgb0AjN935Rwhg2nBR3Isn1FCNaF6AR0gI4fYd1HBHp0XpBFARggNbAPh+ZQBAHHlLcbog+xviVmfj7fkBE4AycBEKSJFZJCqCktlDJWaGFACn6ro4qjWUe3RyP7wk8kkgEG24Lv+DRjfADoSAOKeSeE+edujW+nIAKzkyMR4VEQ+D20mA3SBOpvCBRC3bY9xN7Y/AFPGTQUfGhgQDcyK8ikksNPQHQCmjJnaQ0U098PQCWBXjIcdutRdZp+tothYchiGGYBNGZhpwwmwO/4jp2QZyixfpL7vZwvAGlc8qRcRSAbZ4YwqyCwxdgAARdzH1W2rPQDs88O9OmaRIQA6JE9KuW3suw7qMPWFwV5ouInTGYaeYQUFM4xoC2mdH6iybmXD4RswOmLosZst/eAloZWJhCoCACVBSGM/2Gz5/15121okIIAV8wSATgC3+srVdKwKgE66EEc8GAAqagw2c/WWLkUIAoAKDoAufLror97SGikIwGGgJUCNYYWXhSu3Y1rNG6DUFh2sVOuF5Zb1V/Iv4Al4AVKOZkQGDmZu71An5c1Q1nVt7b3th+SFVw0GMbeIwYf7aXh1Nw4bDf1hpnFdsT8Ac2+7ecaw86duujWKHHwzzB0NkgFmiOmYLc3zMMv+zGcTrdTGcRrn8B7iMRJ6UQMqOMyDzDSj9YkMCu2MG3EXyhXWAZAQsrXUQ/yYee2uEKuUYYcnIUYigUA+wklaPK0fRnrH6+gcKjdKDbE5ppoCzdqjIKeAW1s30rFVrsIVQzTtK/FKYUJjxJ4DCv0YxDpxFApagRAEqWOlptize7H0z8dzls1FOjLCesmAXgBKKZxJqH0+H4/nCMK+bWqFdFMG6hsg4joT8U0/5/n5lCnMbpXLzX4AUNHTq73sH/PjKcLfeWMjQvgAwJynXaiQwPMhdVzdjteppKJ/AeZzwFezxXVM1gEDM1Vux48MMmO9TR18AZIKPgB99h1zfAPGZMb5ows2O81qhv03qPlIoJ//BmAkZP90qzfjIFuSgWC7rvvIAJ/p+8kxirIxd3kZVP1LgvQNEIeLKfD7v/VY1k3TpnXXbVNXxfcqi6Kqy+Of5bUb9tr6AzUefbwDzcqlAAAAAElFTkSuQmCC",
          traits: [],
          baseStats: {
            hp: 10,
            ap: 1,
            dps: 0.03,
            speed: 0,
            range: 50,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 1000,
            foreswing: 1,
            backswing: 0,
            tba: 500
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 100,
            actualDps: 3.0,
            magnification: "10000%",
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
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 15,
            actualDps: 34.62,
            magnification: "10%",
            count: "1",
            spawnTime: "11.7s",
            spawnTimeFrames: "350f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "告白の結果やいかに",
      baseHp: 10,
      width: 6000,
      enemyLimit: 15,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "213",
          treasureName: "伝説のラブレター",
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
          enemyId: "602",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAABAQECAgIGBQUICQgMDAsTEQ0YGBIoMh42LSA3RjBYQy1MUldBYzNqUzVTckt9YT9ZikeRcUp+fX1lnVGlflNWndpurFmmpaTouzXR0dH663jv7u3///8IZVZlAAAAIHRSTlMAEyQ9Vv94lK3C3//////+/////////////////////983GOsAAARySURBVFiFtZcLj6M6DIWnQIDGeWDC40Ip+f//co9DO9pb6RJmpBuNmFW3/uLY5zjM19f/vspWt1Vd3X4ZXjR+WZZpmu7F77b303KsietfxLe0vOOXxZc/jr9p4oXDtKQ0pvZHdbg1WmvyjB/Pryz0DwiVlggkIJszpzP84BCFniQg0HtvnqYwTaa5CrhLECLegAXNCN57XZeXTlGmuMDB2iVVcDJhYuMNcQAkD6jS0RHqifGcApMh418ZhQsElODoHJFxjtPC71dNuMoCGuycCF4p/ue9SNlDlzobH8LxTSkcudcyRC9dm1w726N3wRvvJ973mH7Md085184qoAXMhiwBEDd2ZozxBUB5pgsAVJ7JWkvB76siNSKDIHUJZNDKDKBOJgxGCB4AY8htO9roQUVjOAMo2KOIgb0AjN935Rwhg2nBR3Isn1FCNaF6AR0gI4fYd1HBHp0XpBFARggNbAPh+ZQBAHHlLcbog+xviVmfj7fkBE4AycBEKSJFZJCqCktlDJWaGFACn6ro4qjWUe3RyP7wk8kkgEG24Lv+DRjfADoSAOKeSeE+edujW+nIAKzkyMR4VEQ+D20mA3SBOpvCBRC3bY9xN7Y/AFPGTQUfGhgQDcyK8ikksNPQHQCmjJnaQ0U098PQCWBXjIcdutRdZp+tothYchiGGYBNGZhpwwmwO/4jp2QZyixfpL7vZwvAGlc8qRcRSAbZ4YwqyCwxdgAARdzH1W2rPQDs88O9OmaRIQA6JE9KuW3suw7qMPWFwV5ouInTGYaeYQUFM4xoC2mdH6iybmXD4RswOmLosZst/eAloZWJhCoCACVBSGM/2Gz5/15121okIIAV8wSATgC3+srVdKwKgE66EEc8GAAqagw2c/WWLkUIAoAKDoAufLror97SGikIwGGgJUCNYYWXhSu3Y1rNG6DUFh2sVOuF5Zb1V/Iv4Al4AVKOZkQGDmZu71An5c1Q1nVt7b3th+SFVw0GMbeIwYf7aXh1Nw4bDf1hpnFdsT8Ac2+7ecaw86duujWKHHwzzB0NkgFmiOmYLc3zMMv+zGcTrdTGcRrn8B7iMRJ6UQMqOMyDzDSj9YkMCu2MG3EXyhXWAZAQsrXUQ/yYee2uEKuUYYcnIUYigUA+wklaPK0fRnrH6+gcKjdKDbE5ppoCzdqjIKeAW1s30rFVrsIVQzTtK/FKYUJjxJ4DCv0YxDpxFApagRAEqWOlptize7H0z8dzls1FOjLCesmAXgBKKZxJqH0+H4/nCMK+bWqFdFMG6hsg4joT8U0/5/n5lCnMbpXLzX4AUNHTq73sH/PjKcLfeWMjQvgAwJynXaiQwPMhdVzdjteppKJ/AeZzwFezxXVM1gEDM1Vux48MMmO9TR18AZIKPgB99h1zfAPGZMb5ows2O81qhv03qPlIoJ//BmAkZP90qzfjIFuSgWC7rvvIAJ/p+8kxirIxd3kZVP1LgvQNEIeLKfD7v/VY1k3TpnXXbVNXxfcqi6Kqy+Of5bUb9tr6AzUefbwDzcqlAAAAAElFTkSuQmCC",
          traits: [],
          baseStats: {
            hp: 10,
            ap: 1,
            dps: 0.03,
            speed: 0,
            range: 50,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 1000,
            foreswing: 1,
            backswing: 0,
            tba: 500
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 750,
            actualDps: 22.5,
            magnification: "75000%",
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
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 3750,
            actualAp: 112,
            actualDps: 259.61,
            magnification: "75%",
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
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 3750,
            actualAp: 112,
            actualDps: 259.61,
            magnification: "75%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 3750,
            actualAp: 112,
            actualDps: 259.61,
            magnification: "75%",
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
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 3750,
            actualAp: 112,
            actualDps: 259.61,
            magnification: "75%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "4.0-4.0s",
            delayFrames: "120-120f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 50,
            actualAp: 1,
            actualDps: 3.46,
            magnification: "1%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "「恥ずかしいからちょっと…」",
      baseHp: 10,
      width: 6000,
      enemyLimit: 20,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "602",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAABAQECAgIGBQUICQgMDAsTEQ0YGBIoMh42LSA3RjBYQy1MUldBYzNqUzVTckt9YT9ZikeRcUp+fX1lnVGlflNWndpurFmmpaTouzXR0dH663jv7u3///8IZVZlAAAAIHRSTlMAEyQ9Vv94lK3C3//////+/////////////////////983GOsAAARySURBVFiFtZcLj6M6DIWnQIDGeWDC40Ip+f//co9DO9pb6RJmpBuNmFW3/uLY5zjM19f/vspWt1Vd3X4ZXjR+WZZpmu7F77b303KsietfxLe0vOOXxZc/jr9p4oXDtKQ0pvZHdbg1WmvyjB/Pryz0DwiVlggkIJszpzP84BCFniQg0HtvnqYwTaa5CrhLECLegAXNCN57XZeXTlGmuMDB2iVVcDJhYuMNcQAkD6jS0RHqifGcApMh418ZhQsElODoHJFxjtPC71dNuMoCGuycCF4p/ue9SNlDlzobH8LxTSkcudcyRC9dm1w726N3wRvvJ973mH7Md085184qoAXMhiwBEDd2ZozxBUB5pgsAVJ7JWkvB76siNSKDIHUJZNDKDKBOJgxGCB4AY8htO9roQUVjOAMo2KOIgb0AjN935Rwhg2nBR3Isn1FCNaF6AR0gI4fYd1HBHp0XpBFARggNbAPh+ZQBAHHlLcbog+xviVmfj7fkBE4AycBEKSJFZJCqCktlDJWaGFACn6ro4qjWUe3RyP7wk8kkgEG24Lv+DRjfADoSAOKeSeE+edujW+nIAKzkyMR4VEQ+D20mA3SBOpvCBRC3bY9xN7Y/AFPGTQUfGhgQDcyK8ikksNPQHQCmjJnaQ0U098PQCWBXjIcdutRdZp+tothYchiGGYBNGZhpwwmwO/4jp2QZyixfpL7vZwvAGlc8qRcRSAbZ4YwqyCwxdgAARdzH1W2rPQDs88O9OmaRIQA6JE9KuW3suw7qMPWFwV5ouInTGYaeYQUFM4xoC2mdH6iybmXD4RswOmLosZst/eAloZWJhCoCACVBSGM/2Gz5/15121okIIAV8wSATgC3+srVdKwKgE66EEc8GAAqagw2c/WWLkUIAoAKDoAufLror97SGikIwGGgJUCNYYWXhSu3Y1rNG6DUFh2sVOuF5Zb1V/Iv4Al4AVKOZkQGDmZu71An5c1Q1nVt7b3th+SFVw0GMbeIwYf7aXh1Nw4bDf1hpnFdsT8Ac2+7ecaw86duujWKHHwzzB0NkgFmiOmYLc3zMMv+zGcTrdTGcRrn8B7iMRJ6UQMqOMyDzDSj9YkMCu2MG3EXyhXWAZAQsrXUQ/yYee2uEKuUYYcnIUYigUA+wklaPK0fRnrH6+gcKjdKDbE5ppoCzdqjIKeAW1s30rFVrsIVQzTtK/FKYUJjxJ4DCv0YxDpxFApagRAEqWOlptize7H0z8dzls1FOjLCesmAXgBKKZxJqH0+H4/nCMK+bWqFdFMG6hsg4joT8U0/5/n5lCnMbpXLzX4AUNHTq73sH/PjKcLfeWMjQvgAwJynXaiQwPMhdVzdjteppKJ/AeZzwFezxXVM1gEDM1Vux48MMmO9TR18AZIKPgB99h1zfAPGZMb5ows2O81qhv03qPlIoJ//BmAkZP90qzfjIFuSgWC7rvvIAJ/p+8kxirIxd3kZVP1LgvQNEIeLKfD7v/VY1k3TpnXXbVNXxfcqi6Kqy+Of5bUb9tr6AzUefbwDzcqlAAAAAElFTkSuQmCC",
          traits: [],
          baseStats: {
            hp: 10,
            ap: 1,
            dps: 0.03,
            speed: 0,
            range: 50,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 1000,
            foreswing: 1,
            backswing: 0,
            tba: 500
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 1500,
            actualDps: 45.0,
            magnification: "150000%",
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
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 300,
            actualDps: 692.3,
            magnification: "200%",
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
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 300,
            actualDps: 692.3,
            magnification: "200%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 300,
            actualDps: 692.3,
            magnification: "200%",
            count: "1",
            spawnTime: "28.0s",
            spawnTimeFrames: "840f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 300,
            actualDps: 692.3,
            magnification: "200%",
            count: "1",
            spawnTime: "48.0s",
            spawnTimeFrames: "1,440f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 300,
            actualDps: 692.3,
            magnification: "200%",
            count: "1",
            spawnTime: "74.0s",
            spawnTimeFrames: "2,220f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 300,
            actualDps: 692.3,
            magnification: "200%",
            count: "1",
            spawnTime: "75.3s",
            spawnTimeFrames: "2,260f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 300,
            actualDps: 692.3,
            magnification: "200%",
            count: "1",
            spawnTime: "98.7s",
            spawnTimeFrames: "2,960f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 300,
            actualDps: 692.3,
            magnification: "200%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 300,
            actualDps: 692.3,
            magnification: "200%",
            count: "1",
            spawnTime: "102.7s",
            spawnTimeFrames: "3,080f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 300,
            actualDps: 692.3,
            magnification: "200%",
            count: "1",
            spawnTime: "104.0s",
            spawnTimeFrames: "3,120f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 300,
            actualDps: 692.3,
            magnification: "200%",
            count: "1",
            spawnTime: "117.3s",
            spawnTimeFrames: "3,520f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 300,
            actualDps: 692.3,
            magnification: "200%",
            count: "1",
            spawnTime: "130.7s",
            spawnTimeFrames: "3,920f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1301Data;

