// Stage 1303 Data
import type { StageData } from '../../app/stage/types';

export const e1303Data: StageData = {
  eventId: 1303,
  eventName: "Season4～卒業の日～",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 303,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "告白スポットにて待つ",
      baseHp: 10,
      width: 5500,
      enemyLimit: 4,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "0",
          treasureName: "スピードアップ",
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
          },
          abilities: {
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
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 10,
            actualDps: 23.08,
            magnification: "10%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAlBQpCCRNnBhlnBhloBxpoBxprChxsCh1sCx5vDiB0FCR4GCh5Gil7GSt/Hy9/Hy+BIzGGJzWSM0CTNUGUNUGZPEeWPkijRk+pTlarTlauVVuwVFuzVVu3WmK/ZGq/ZGrAZmvDZWnGbXHKb3HOb3HUe33be3zXfn/dhYXjhIPeiIjijYvrjIvxl5X0nJj4n5v4oJv+p6H/p6P9rKf/r6n+sKn/sKr/sKr///+43yhGAAAAQHRSTlMAL1d6kMbyAAAAChs3XgBIAHJSk944sgCLuGfRngnH3UwBtPaTLMfi/AFn/QD+JZT+4gL//0H/AP8BmyhDAf8AlZ9UIAAABN5JREFUWIXtlmF7okgMx+21e3UYGECriIKIWMAiK8oUscrc9/9WlwyeRVtt3X1zLzYPtT4y+U0m+SfQ+uc3rfUH8H8AbLe7XeUTo2mLagu2sZjxtbU2vjXZz38DsF1bZPhCWHPxTYBdtbGIM6W/DHh+rTYucaJe4xQ3AUhvWW19MkyH5Lj+JsB8/rLcVXPSSUOVGOxXAPPZal8tDDWSQbBbAYyR3jh921pEGaRhD8rBbgPAH6PjrJyAqz7Opiq5GQDLFKcQYQdcTS9xeuS2KhCoHzE6mSgBQVhnHE1fbwEsFj4DCFFDIYqwoxCDDmf73XYLAvuGP0i5quau7899ZZAJwaOBCmGswX1u4emYvK4CYC8MGAs5LSCKdGxSZrnSj+mmqalfA3zLstzdxlXMpBQQRmybqgKBUDvlRR6P9K8ALpRQ6Sx3C4sOEFGWPI3GzqDPRVmUogyuEA4AA8MN99UcEHEBbnAYUSb4Lc9F8XT5FDiR9hIAenLe9hvfoKaXFUWe5TxL4CNNhRgpVyPYLXuyjRgxk7cdpF/RB17KOc+zJM25EIl5/Qib/erQy0wdF2+7NVRAUU3HwwDyLB5d8a9zsOitwjoIQsxYvPVQnQyqoOqapn+jjAtCQ+5QaER3sXDtTIRDUOR1AZ0CIGSnWEE3Weu1+zz0SrFydPItxgEgE1iEOjFc0psMBlEJqnZ0OWo/QOqpc/j3HwATaHPuyLHWse1RDILKA1ujdYlPAFTXQOK6vNXabDbbRU0kZlRmEkEHXhDEUMAShNyFlcx4x+j9AIrLeQrlUYyWhYY3me8SlOEREYMIUMg8DUZ9U6eKnJhMC1DsHPUh8pEKM5Ed9p9Xc4PQblJktg7NAYJMOfjDhYJOgrHdhcC1J/wNA0jgVvHUej9Z71V2FTWjPMOWNhTNjjPZW9BSJX4pUFcpdizsHiO7ATBYZ4mT1WCK7kRpDGEQQrW+l+QHXzDOC57EcDgwHB6e1gTAWJvVSSdKx4lib6D70J662R/HmI7yQMlA4QW2fNBXjSOAMcufu2E+U6V+GMzG3uQVHpwWZgkoXXvkBbA5WBwH3qjf1VAm7wACc/Gn70gtyMQy4laVnDaHHZhCqVqbLEmtxCNA8RcGffk5jAQfdxQmY1pv4PWhIcBPRux7DugEnvPKcDlxchzOuoLLQSJHB0a1btc8781GEtUZvizp4dLxYJSlXlevW/LgQaUA8xgSdwHAOtF+6xvKIJyOUMY88fqmKmUMFx1xWX5Rjk7eZlpNmp68PVvYVXES1yrME0w3NI6KE5pn+GuqXQQwNShmFAe0Hcu6o4qh+FmaJAFHRYL8RGpeBECebL4agpiY2vVQamUpdQyRF0kmdSxEcJLHVvs0qTATy5WDCFBxkMrHA4z4DIII4iSD7Mbd0ySeEyADqcgcWQGqd0dBIg8jm0mOB5OdAc4JmIGkhIHWofB4JFTVzIE9RrOhn/XzR0zrE4JBIANZwdPpsEddfH9gtZGPM5a1PiVgS5u2FyXR9GVXra3L05m0TgmNhbivoih+VR376aO1WwdrH4ydD2DiV4end3Pbx9qO7g17bJOTQIiMoAll7cdP/D6BvAPWVvtoXzo3KLVZvvt9pz+Gdnf3F9i9tIdTk7/h3bu7u8v+9w8/wP6+aHj3x8N9g/AvOTOlPrxcY/EAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 10,
            actualDps: 23.08,
            magnification: "10%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
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
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
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
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "上がり続ける心拍数",
      baseHp: 10,
      width: 5500,
      enemyLimit: 10,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "3",
          treasureName: "ニャンピュータ",
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
            actualHp: 5000,
            actualAp: 500,
            actualDps: 15.0,
            magnification: "50000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1250,
            actualAp: 25,
            actualDps: 57.69,
            magnification: "25%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1250,
            actualAp: 25,
            actualDps: 57.69,
            magnification: "25%",
            count: "1",
            spawnTime: "22.7s",
            spawnTimeFrames: "680f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1250,
            actualAp: 25,
            actualDps: 57.69,
            magnification: "25%",
            count: "1",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1250,
            actualAp: 25,
            actualDps: 57.69,
            magnification: "25%",
            count: "1",
            spawnTime: "48.7s",
            spawnTimeFrames: "1,460f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1250,
            actualAp: 25,
            actualDps: 57.69,
            magnification: "25%",
            count: "1",
            spawnTime: "58.7s",
            spawnTimeFrames: "1,760f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1250,
            actualAp: 25,
            actualDps: 57.69,
            magnification: "25%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEJGSYOJzsIM1cJNFgLNloLNloNOFwQOVwWP2EXP2EcQ2UiSWoiSWomTGonTW0sUXA5W3Y5XHg6XXlAYn1ObYdPb4lQb4hYcYVdepFogphrhJpyip9/lKaCmKqHnK2NoLGUp7adrruhsb+isb+oucevvcizxta5xM7BzNW+ztzI1+PS2N3T3ujc4ebe5u7l6/Hp7O7t8vb29/f5+vv9/f3+/v7////////////t8zxSAAAAQHRSTlNCY3+c0fQAAAABJRI/WwAAaUl2wACTNQCLs2K1lNIBtc9H6wLImfMy980C/XD8AC3/+gL/hf//AP8A/5k7ABf/YSCGvAAABNhJREFUWIXtlm13sjgQhum+tIZAFIoKypuAFEUsSEGkYP7/v9oJ0Cq1rfV5vuzZs3NabUNyZTK5Zwau/k3j/gf8OwDHql4jMjyzbfPoMO0NfmHcwZ0uqt8B1DtlsNj0p94EONb7KdI9fD75JsBTVR/Mgb6aoF8EDCYv9cFFs0g/EW4CrNeblyNcgxSteDQkvwJYL5Oq3g4FP56hXwAQgiZ2/HqcIqxHTSTIbQD4JdhO6AIRInixN0E3AgiBacQq6AoOgGQvtCbo1iPAF5oltFxJgJCsYPl8C2C7dQkC4z1KC0/GCOHZsqoYQPmZlOt6bbru2kVqQmnuqwJCZAf6XE+7Kd9jTukMF+kVlJaRNeKHU1NpYiOM5JHwLaEBuMpUWVR7E8lhSSnNgrksYLgVrEVZngaGcA1gwmQ0ezlup7zaIGge+bauajl4BD+OeB0AFyGtoLIovBoUtCwYpozY6iyjxePXp2gqUgMYEt56qQ6uwsteUhRZlhdplOZ5ElNq4G89qDZdLkMMXo+HtYIk1YvzIs/SOEnhGKF85QhVordpRHg7fz3u4Q8iyHMvjFNgBMboWhC3k7gtKAqIOaCvLCtB4gTzkihK/DfL3wAIrzIdwxJ3u11YCeQFRtcU1APAZlYewcbT3W7xNPNKGusSc+PnAPA9LDwJKSaaLFTVBzmtdAmzo1wu6saarw4A/yDeyjJLgLJGZpZhBKCB1NdGPLqAEAwKB4nzJ8BQUUD9aOSXiQ7DBKuO4wRwgcAwxmIDGZKOI2gO00ca+8YIt4DDfn+o652JMMgwnjMvABGEUcqkmMPMMeyHWoLol6DvIofEo4kh9JrrWiH8uEVAWGUnyprEAANR+vZclUei+MhEXrQKpeXjGQCqiAl787KfxrbM4idqftIhyrJdl8Zh0o7kEYyVxrkH1euiiRiS9CAO5hILrKg5YdYuzlh6gEVhFCdJzNCFI/aO8LxatnWdYEn3fUeX3LWCBVmz/SgtWhcAk6YZZCuLjSYMe4C96aXLrj/B7pPFS3XcT5moeWE01izbD4IQLPAdx9Dgdsh5SasPa/fZ1UELoMHmwpDZFos39SBIDl5gxvPv3fwEOIIc8OZ55tPMbiUIwt4fdqfiTs4+T1J23+0ZjoBnmydIpqY4M/Eo09NUwovj8UWJZZ2pNTSBLu0iydvorDrH9ljAjQC7mfzYiSGAgdZPb+5sBymBijbE6sqzmYzzyNFGACFN2vBG1gnC6L3NcOc0KXx9UmCveRAGEcuEMg1ZuEeiIDzmcIlpwnzrFageAN4RiqXC+sk8aO693TJLojD0GZBmIQN86QHEaZ6lOlQjIsCJ31TcfjYZGIGOnV6f4Qb9oEJNZCnN8hFUHDVuQAakaRKDgll2BuN+EO8/EAivxTSxpKa1iWOjE3HnTHpRorn7jwRIwnlY5qygsY6HBVFW55YNZs1BBh9bDAAuCG0EijzyZhNssveHVijos/rIAJcElo7QWOA2vc2x3n3zqoIawIlwPpMlD8buW/P91Ab3LeD+obUB+ZAsBLlnCfm+bTf9AVZ2gJMNSM+RFtCDDnrzLwDMncFpAQHATnkYdNZsehXQHapdorjmxaIfAX5q/z0Ax93d3f3B7M9LY8PwmOO4LwEcrPuL2d+fG3sEoLuzJf8A+oG/j4JK714AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1250,
            actualAp: 25,
            actualDps: 57.69,
            magnification: "25%",
            count: "1",
            spawnTime: "72.7s",
            spawnTimeFrames: "2,180f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1250,
            actualAp: 25,
            actualDps: 57.69,
            magnification: "25%",
            count: "1",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1250,
            actualAp: 25,
            actualDps: 57.69,
            magnification: "25%",
            count: "1",
            spawnTime: "78.7s",
            spawnTimeFrames: "2,360f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-16.7s",
            delayFrames: "200-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "時間通りに来る彼女",
      baseHp: 10,
      width: 5500,
      enemyLimit: 10,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "2",
          treasureName: "ネコボン",
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
            actualHp: 10000,
            actualAp: 1000,
            actualDps: 30.0,
            magnification: "100000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 3750,
            actualAp: 75,
            actualDps: 173.08,
            magnification: "75%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 3750,
            actualAp: 75,
            actualDps: 173.08,
            magnification: "75%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 3750,
            actualAp: 75,
            actualDps: 173.08,
            magnification: "75%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 3750,
            actualAp: 75,
            actualDps: 173.08,
            magnification: "75%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 3750,
            actualAp: 75,
            actualDps: 173.08,
            magnification: "75%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 50,
            actualAp: 1,
            actualDps: 2.31,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "3",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "5.0-15.0s",
            delayFrames: "150-450f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "勇気と共に踏み出す一歩",
      baseHp: 10,
      width: 5500,
      enemyLimit: 30,
      requiredCost: 85,
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
          },
          abilities: {
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
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
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
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
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
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
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
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
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
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
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
            spawnTime: "55.0s",
            spawnTimeFrames: "1,650f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
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
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
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
            spawnTime: "58.3s",
            spawnTimeFrames: "1,750f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
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
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQFBQUGBgYGBgYGBgYGBgYHBwcJCQkJCQkODg4TExMWFhYWFhYaGhobGxsiIiIrKystLS0xMTE4ODg4ODhAQEBDQ0NLS0tMTExUVFRcXFxlZWVycnKAgICOjo6bm5unp6ezs7O/v7/ExMTKysrS0tLc3Nzi4uLo6Oju7u709PT7+/v///9zib0wAAAAQHRSTlMABgwSGiQ4LEFK0VVf8W14gMPekbmIl6Cxqej71su+4fX+6dn/9uv/9P//9P/8///9////////////////////kGjFlQAABYtJREFUWIWVV4mWojoQbRAFGhrcQVBbBGVfAig7/v9fvcJxQcUZ39WjJFA3taVSfH39AzhBtAaDAfH+0U70aJ7Br+IkMxdo7P+Ig8hiPO9fuKiZuv/l8b+LPC5PTVa73ZpqFsUIVtwjZMx6/0OeEbdeFKgcLIr1+ZWB0siYfe4Egl3vw7SI7DnIEPzSivIyNib9j9dn10aYV3XiiiTWY0d2VNZVbMz7H3oRZxr5+nTK/DXVoxZGWJ7q6mgL5GcE2EDYhwXIn0q0YkleDbL6VNeJtRh8RkAM1aBZ/3SqI3VIL+xDM6gT50MCnJru0OHY4ID24mzpROfrUJ+yHzgB65H8WNGu2Ei/m+tIkUY8+a9cwklOWG506woX4FyvPVtd0H9PJpyer7ZeGB8uOCaA4+26MelvDFifFbcWSqqzBztQ5+FeeO9JjOBGOz8u3ok3yCC73yY0pNwOZW+X/6NDYr8NJkaJO5T/VRxQ+CummwAj59sgfZWvH6dKpLLdBLDnvKR6Fa8+JMAG013UYX8ZJ+V9tirydwQE9+unHTZnvhteHFOfqjgIg26CxoNxVwAKZFpX15Sxo6M3BD3u1+lSABhCx/STxpX10dX84xsCcrJFxYtw/Wddz0KNd+vI8ZO8mwAsMA6vITiVaVrW5TGMz/cy2A9H/5kAw2GMMSs3e1UfFvfi4lQX5R/CApTRl48EGElDlcAhBh0WJJ6iuC3XZL4iy08E5FCA84sYboPyleDgyLKZ3MfpKwFGj7554qs/24UvLjjVGTLNoGVaHrmu+UhA8JIEB2B/YnRlQZVFUXqdbwKZHw9PThwIcAAOMFLoJIDToDVbJnEUxx4UhN6dgl57vsr0aNGIryZ0KFLmWZankatpuqVLAsdRt7rGqCja8316etMA9l+eF0XV7OPLTHYIAxT6uqabuqbIP9vf6a0ysio6esJgINjH68pl7DpeEENQLvrX+SEKw9BSPCi2kaW4ob8V6QsBtw+zUGXJmZ1cK0cZmYqm+2ldJUn5xxFFlmVpoFsBQr5uRnni//IXAh5OwcSeU0MguLseIRRlVYLiVmjrNDA1XdMc2N1VvJ3fCcrCX/OTOwE4ocySrCqRE7YjU6VhAICqXdfHfZugivYL8W7CqTqEKIirwtMekwuYAc1joMGkRVBn7vK7pUHuW65/JkCv6X1Gjm4+4FR4qAw2P9aNAMIQZ0VVV0h3ozTN0keAP7PIXjH3RMpOdWzJ1t2EujybDltHN03LsUz4u30tB45bY8Vf2yVybkMGFYHS0qDlNU9XIKRtaMpytBK5W6PQY9Um4rHlvBJAAUlDUwviFiJvM2doirhvBiiGQVqlnnOsuzZT4urxOacvnyz4ZfGHgoJTi60fxQ1Bl7+Pln5ojzN/RX89Aoeedu/qXSYADvojQequnwm+8D4zX0mtKPyDgHomaCjYqf2xBh0EzdH+jsDU46qFxF11vjX0J3anCXWsKx5qIdDHXFeX1Z90agDJqD0n0mbKdjRJQNCVB/XB8/xHBL6x7uhxiKERdZwLdd7UhQdUOdoPX43AWeivO3z43OAAqs43F6wpy9lHSP3ze9CLDdwS9irsVuv8Y99xnoGp8w0YG+qs670DI2eSYlq6IivwsxSFxQXiWNYsR5dlxXT0zXKxELjujh2jRkYYe5vxDgXbCTW4gh4urTDypPEmiH11RlED4k2jSgp2fHSnExXaKAbHrsDJ2R6F9mK2BoI1BTc6pTH8/CCszY4MY80N7qC4lW4uOWqyd/eTPt4lj/cHNMOwgmRq0mKylOXx3QVg82IMM3NekGRJYBh60H92AUYOp9+A8Q9Akn5kWf55BExIYwlujr+/R9PhcxAwguFnk7kgLERxOmrw/Yjz3FQUF4Iwn8x45pZG/wHoT/cGi/0BoAAAAABJRU5ErkJggg==",
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
            actualHp: 180,
            actualAp: 16,
            actualDps: 10.22,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-16.7s",
            delayFrames: "200-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUGBgYGBgYHBwcICAgICAgJCQkLCwsUFBQXFxcYGBgaGhodHR0nJycoKCgpKSkuLi4yMjI+Pj4/Pz8/Pz9MTExOTk5bW1tubm59fX2Ojo6cnJypqamvr6+zs7O5ubm/v7/GxsbNzc3X19fd3d3i4uLn5+fu7u7z8/P5+fn8/Pz///////+/QMgwAAAAQHRSTlMABw8XHycuNTtHUVjmacrUYXb/goy9nLD0puC3/8Tu1f/N3+3+5PL/8v/7/f3+/////////////////////wD/Fa4qEgAABctJREFUWIXtV9l2qkgUDThrSDQMikYwoCBFFUMV89D+/1/1gWjiTS7GrH7trS+6PJsz7DP48M9/xMP/BP883AGuN5zMFyJAmE3HfY67x+jKejwXlc3bwQIYb1tVEiYD/hfmk4X6Zh5d4vkAj2BkGRtpPrqTgh8vNibCXpQVZYsij33iHnVlNrgnEH6iGkcS52Vdn86oq7LIKLZ06Q4n+OnSxEnxYXyq2zeQ5CFaq5OfGOD5Fkmr0yfqqqpbilMZYXP5AwM3VEySXj++yuMoq96dKBNiKqObeegtdHxlfzpVMXYcHJ9dqhJsiINbDoyWR3ZtX6d49/Kyu5DWVezq8xtB8DOdZFf2p8Lfv768vOyD8vxFGVq3guiLRlBee5Dhxv5lR4qLSznWhW4XhooVXTtwysmuIdj7Fw9OZWAp3VkYbVDyB0GVuPvX1537mdg6QctJJ8F4i9M/CE5l4rkIR9UHQVXg7fwXBGCQJll1lZeSGIsbBO5Xgm+ovIN4fw6aoE91+758vOnBQLHY1W+bV5FDAco0Li40kINZJ0FP0L38KtwszzzCqjohLiuBJilBm2jTXQVuvEHR2YO6SCghnv3qJpm3e8UJtIUbVxVz1GEnQSNFkrcMdR0TZ7ez9zub+Gi/c2hGdnuSl5DDXjcBuGCB6ur3vtmBhjBxbOQQd088Z287LHG301sNzc+3iLUM0DfYdRwaoVebxGS/t5Hv2a5rSrf6+YHrL3SItGUACUVRkeO9GxfMfrW9PEY7bTm5PVm5oWR8DJBTG0oQV3WGHS+D6aDJsxsZOKdBMdzoqqnrZiZWMcuq3D9uhZ/sm7EkbpHfDNarDqgBmQf2/R/tAf35xsI0qy6CfJdFRCz5jue34Cey5nhxVrRqrpq9EvvIUH+M/wM94dnGfhBDQfOYUt/DyNgs7l2OD00tVBTEIStOFXXtvWnoG3HS+82K70kHvyyKqlkMtiYLk1H/dxcCL+gwiZvFlMbEUoc/WXMcD+A+7xB+2g6nKoto7Dub8Q/qg4NkIUqiMB1d4oQdheK6SlkQUB/dWgUP7UWx1A1T0/SNIk7PsfakY1gVURCEIcWmcks/sNE1y8XYBRw1WRy3T+MXBimzsLFnvrO9sc7A3kReyFjI0ozh/VqdNnLhprKbpQ1ByEJXn3bGwI0UzaURDcOA5VWVefZKngMDN1BQlLQEFAjmnRrkhWfHZzQMglZ30DEOlB0SwS8Ofhq2oNhYdCahr5iYwY8CnzULqEqYj62tOOJ5wSApDVoXiCF2EXAT2fEa/wOawl1Wl1FIKbEgEf35G26qGNwm4OGmgfyFNHrv3hIKxyhxtKUg6m6ehn5L0D0Iodx+niZpVrx3f5WEvh8yKP3Tk0mKMqaBHwTk0HkT9FUEEw8AogtpnFdFwmiUlqmHmtuqhqXGWOx3HhXccOMm7Qxn+Hg4IBIVZQ7e1HURM5hqMEyKLC/YsSsEbizDBQanLEO6KkobA9Gi9QeGUAk00I1JnObhoSuJ0HQ4g4dEriGOev2xqCMKaiizJEmatMAkDAPKiPF1GEL3cu85XJMchhZ+v0C5ITCwEr5oqgeFKSGnAQ3QVylzo8V8AM3PDWXLL+Dn6LzwuIEESyEOGmE00ihiYGqa6ctA4GfykzIHn4W1m0DPepYyvGQVGAJKGwWDIhohNDL42s789GllvqmStD2GZZGEWPtIEjdWNReEEDbyDJNmJgfo7etAgaNcc7BrmUcvg0QHzvqz2/jpxnR9xii4EUQFbIS/nej87Mn2It8L4Zqoc09Tr2LszZYGIhAGkERFXdKj/H0acH1pbROWNkXPIYWzQf8Tg6n6uEfNX66AJkmI/rZQuf5Mfnl1PJbEkeesZEFYfEKYS88ruLBtB7nYtVfK+NtK4QaC8vT4+KiZR8vUVqvH9frxE/BhdYamaY/PS/FbCFx/Cn9KJUlRVHW5XMryE+D5guaDLMP3qqookiguhPEXgn8Bp56rfE5s2DUAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 200,
            actualAp: 30,
            actualDps: 24.32,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-16.7s",
            delayFrames: "200-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 400,
            actualAp: 40,
            actualDps: 40.0,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-16.7s",
            delayFrames: "200-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "背中を押す桜吹雪",
      baseHp: 10,
      width: 5500,
      enemyLimit: 14,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "5",
          treasureName: "スニャイパー",
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
            actualHp: 22500,
            actualAp: 2250,
            actualDps: 67.5,
            magnification: "225000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 150,
            actualDps: 346.15,
            magnification: "150%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 150,
            actualDps: 346.15,
            magnification: "150%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
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
            actualHp: 7500,
            actualAp: 225,
            actualDps: 519.23,
            magnification: "150%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 150,
            actualDps: 346.15,
            magnification: "150%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 150,
            actualDps: 346.15,
            magnification: "150%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
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
            actualHp: 7500,
            actualAp: 225,
            actualDps: 519.23,
            magnification: "150%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 150,
            actualDps: 346.15,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 140,
            actualAp: 60,
            actualDps: 100.0,
            magnification: "200%",
            count: "0",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 140,
            actualAp: 60,
            actualDps: 100.0,
            magnification: "200%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 5,
      stageName: "影から見守る友人たち",
      baseHp: 10,
      width: 5500,
      enemyLimit: 26,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "4",
          treasureName: "おかめはちもく",
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
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 90.0,
            magnification: "300000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 300,
            actualDps: 692.31,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEJGSYOJzsIM1cJNFgLNloLNloNOFwQOVwWP2EXP2EcQ2UiSWoiSWomTGonTW0sUXA5W3Y5XHg6XXlAYn1ObYdPb4lQb4hYcYVdepFogphrhJpyip9/lKaCmKqHnK2NoLGUp7adrruhsb+isb+oucevvcizxta5xM7BzNW+ztzI1+PS2N3T3ujc4ebe5u7l6/Hp7O7t8vb29/f5+vv9/f3+/v7////////////t8zxSAAAAQHRSTlNCY3+c0fQAAAABJRI/WwAAaUl2wACTNQCLs2K1lNIBtc9H6wLImfMy980C/XD8AC3/+gL/hf//AP8A/5k7ABf/YSCGvAAABNhJREFUWIXtlm13sjgQhum+tIZAFIoKypuAFEUsSEGkYP7/v9oJ0Cq1rfV5vuzZs3NabUNyZTK5Zwau/k3j/gf8OwDHql4jMjyzbfPoMO0NfmHcwZ0uqt8B1DtlsNj0p94EONb7KdI9fD75JsBTVR/Mgb6aoF8EDCYv9cFFs0g/EW4CrNeblyNcgxSteDQkvwJYL5Oq3g4FP56hXwAQgiZ2/HqcIqxHTSTIbQD4JdhO6AIRInixN0E3AgiBacQq6AoOgGQvtCbo1iPAF5oltFxJgJCsYPl8C2C7dQkC4z1KC0/GCOHZsqoYQPmZlOt6bbru2kVqQmnuqwJCZAf6XE+7Kd9jTukMF+kVlJaRNeKHU1NpYiOM5JHwLaEBuMpUWVR7E8lhSSnNgrksYLgVrEVZngaGcA1gwmQ0ezlup7zaIGge+bauajl4BD+OeB0AFyGtoLIovBoUtCwYpozY6iyjxePXp2gqUgMYEt56qQ6uwsteUhRZlhdplOZ5ElNq4G89qDZdLkMMXo+HtYIk1YvzIs/SOEnhGKF85QhVordpRHg7fz3u4Q8iyHMvjFNgBMboWhC3k7gtKAqIOaCvLCtB4gTzkihK/DfL3wAIrzIdwxJ3u11YCeQFRtcU1APAZlYewcbT3W7xNPNKGusSc+PnAPA9LDwJKSaaLFTVBzmtdAmzo1wu6saarw4A/yDeyjJLgLJGZpZhBKCB1NdGPLqAEAwKB4nzJ8BQUUD9aOSXiQ7DBKuO4wRwgcAwxmIDGZKOI2gO00ca+8YIt4DDfn+o652JMMgwnjMvABGEUcqkmMPMMeyHWoLol6DvIofEo4kh9JrrWiH8uEVAWGUnyprEAANR+vZclUei+MhEXrQKpeXjGQCqiAl787KfxrbM4idqftIhyrJdl8Zh0o7kEYyVxrkH1euiiRiS9CAO5hILrKg5YdYuzlh6gEVhFCdJzNCFI/aO8LxatnWdYEn3fUeX3LWCBVmz/SgtWhcAk6YZZCuLjSYMe4C96aXLrj/B7pPFS3XcT5moeWE01izbD4IQLPAdx9Dgdsh5SasPa/fZ1UELoMHmwpDZFos39SBIDl5gxvPv3fwEOIIc8OZ55tPMbiUIwt4fdqfiTs4+T1J23+0ZjoBnmydIpqY4M/Eo09NUwovj8UWJZZ2pNTSBLu0iydvorDrH9ljAjQC7mfzYiSGAgdZPb+5sBymBijbE6sqzmYzzyNFGACFN2vBG1gnC6L3NcOc0KXx9UmCveRAGEcuEMg1ZuEeiIDzmcIlpwnzrFageAN4RiqXC+sk8aO693TJLojD0GZBmIQN86QHEaZ6lOlQjIsCJ31TcfjYZGIGOnV6f4Qb9oEJNZCnN8hFUHDVuQAakaRKDgll2BuN+EO8/EAivxTSxpKa1iWOjE3HnTHpRorn7jwRIwnlY5qygsY6HBVFW55YNZs1BBh9bDAAuCG0EijzyZhNssveHVijos/rIAJcElo7QWOA2vc2x3n3zqoIawIlwPpMlD8buW/P91Ab3LeD+obUB+ZAsBLlnCfm+bTf9AVZ2gJMNSM+RFtCDDnrzLwDMncFpAQHATnkYdNZsehXQHapdorjmxaIfAX5q/z0Ax93d3f3B7M9LY8PwmOO4LwEcrPuL2d+fG3sEoLuzJf8A+oG/j4JK714AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 300,
            actualDps: 692.31,
            magnification: "300%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 300,
            actualDps: 692.31,
            magnification: "300%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 300,
            actualDps: 692.31,
            magnification: "300%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 300,
            actualDps: 692.31,
            magnification: "300%",
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAlBQpCCRNnBhlnBhloBxpoBxprChxsCh1sCx5vDiB0FCR4GCh5Gil7GSt/Hy9/Hy+BIzGGJzWSM0CTNUGUNUGZPEeWPkijRk+pTlarTlauVVuwVFuzVVu3WmK/ZGq/ZGrAZmvDZWnGbXHKb3HOb3HUe33be3zXfn/dhYXjhIPeiIjijYvrjIvxl5X0nJj4n5v4oJv+p6H/p6P9rKf/r6n+sKn/sKr/sKr///+43yhGAAAAQHRSTlMAL1d6kMbyAAAAChs3XgBIAHJSk944sgCLuGfRngnH3UwBtPaTLMfi/AFn/QD+JZT+4gL//0H/AP8BmyhDAf8AlZ9UIAAABN5JREFUWIXtlmF7okgMx+21e3UYGECriIKIWMAiK8oUscrc9/9WlwyeRVtt3X1zLzYPtT4y+U0m+SfQ+uc3rfUH8H8AbLe7XeUTo2mLagu2sZjxtbU2vjXZz38DsF1bZPhCWHPxTYBdtbGIM6W/DHh+rTYucaJe4xQ3AUhvWW19MkyH5Lj+JsB8/rLcVXPSSUOVGOxXAPPZal8tDDWSQbBbAYyR3jh921pEGaRhD8rBbgPAH6PjrJyAqz7Opiq5GQDLFKcQYQdcTS9xeuS2KhCoHzE6mSgBQVhnHE1fbwEsFj4DCFFDIYqwoxCDDmf73XYLAvuGP0i5quau7899ZZAJwaOBCmGswX1u4emYvK4CYC8MGAs5LSCKdGxSZrnSj+mmqalfA3zLstzdxlXMpBQQRmybqgKBUDvlRR6P9K8ALpRQ6Sx3C4sOEFGWPI3GzqDPRVmUogyuEA4AA8MN99UcEHEBbnAYUSb4Lc9F8XT5FDiR9hIAenLe9hvfoKaXFUWe5TxL4CNNhRgpVyPYLXuyjRgxk7cdpF/RB17KOc+zJM25EIl5/Qib/erQy0wdF2+7NVRAUU3HwwDyLB5d8a9zsOitwjoIQsxYvPVQnQyqoOqapn+jjAtCQ+5QaER3sXDtTIRDUOR1AZ0CIGSnWEE3Weu1+zz0SrFydPItxgEgE1iEOjFc0psMBlEJqnZ0OWo/QOqpc/j3HwATaHPuyLHWse1RDILKA1ujdYlPAFTXQOK6vNXabDbbRU0kZlRmEkEHXhDEUMAShNyFlcx4x+j9AIrLeQrlUYyWhYY3me8SlOEREYMIUMg8DUZ9U6eKnJhMC1DsHPUh8pEKM5Ed9p9Xc4PQblJktg7NAYJMOfjDhYJOgrHdhcC1J/wNA0jgVvHUej9Z71V2FTWjPMOWNhTNjjPZW9BSJX4pUFcpdizsHiO7ATBYZ4mT1WCK7kRpDGEQQrW+l+QHXzDOC57EcDgwHB6e1gTAWJvVSSdKx4lib6D70J662R/HmI7yQMlA4QW2fNBXjSOAMcufu2E+U6V+GMzG3uQVHpwWZgkoXXvkBbA5WBwH3qjf1VAm7wACc/Gn70gtyMQy4laVnDaHHZhCqVqbLEmtxCNA8RcGffk5jAQfdxQmY1pv4PWhIcBPRux7DugEnvPKcDlxchzOuoLLQSJHB0a1btc8781GEtUZvizp4dLxYJSlXlevW/LgQaUA8xgSdwHAOtF+6xvKIJyOUMY88fqmKmUMFx1xWX5Rjk7eZlpNmp68PVvYVXES1yrME0w3NI6KE5pn+GuqXQQwNShmFAe0Hcu6o4qh+FmaJAFHRYL8RGpeBECebL4agpiY2vVQamUpdQyRF0kmdSxEcJLHVvs0qTATy5WDCFBxkMrHA4z4DIII4iSD7Mbd0ySeEyADqcgcWQGqd0dBIg8jm0mOB5OdAc4JmIGkhIHWofB4JFTVzIE9RrOhn/XzR0zrE4JBIANZwdPpsEddfH9gtZGPM5a1PiVgS5u2FyXR9GVXra3L05m0TgmNhbivoih+VR376aO1WwdrH4ydD2DiV4end3Pbx9qO7g17bJOTQIiMoAll7cdP/D6BvAPWVvtoXzo3KLVZvvt9pz+Gdnf3F9i9tIdTk7/h3bu7u8v+9w8/wP6+aHj3x8N9g/AvOTOlPrxcY/EAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 300,
            actualDps: 692.31,
            magnification: "300%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 300,
            actualDps: 692.31,
            magnification: "300%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 300,
            actualDps: 692.31,
            magnification: "300%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 50,
            actualAp: 1,
            actualDps: 2.31,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkRERERERETExMWFhYXFxcZGRkZGRkaGhoiIiIlJSUnJycpKSkuLi41NTU2NjZGRkZLS0tQUFBZWVllZWV0dHSAgICNjY2goKCwsLC9vb3GxsbOzs7W1tbf39/l5eXr6+vy8vL29vb7+/v///////+owrlPAAAAQHRSTlMABQkPFx4kLDw0RllgjlFsdobIf6Swls+duNr0/6zjws7Wjf7n9tzA7v70/eX+/f3+//7//////////////wD/w/k4QwAABRJJREFUWIXtVtmWqkoMbUAGERXbEVHUdjgCQlFVIGNd//+vbnBqRPquddZ97bw4kGx2UjtJffzzP+3jF+AX4BfgF+AB8HfGSYrMl5+CwP1l6C1e1pdfvRYvqv2O2IDA8YLA/xdyq792TsuepBlzoyPUo1uy0tP6HbUt8j/E88rSp+Q06xuOexi0XsMFWZsYU8varEa62kSvJDA8kCxCh9UOYWckvzi1erOpuXf9IEDObqVLjQjS0glZRn3Hdl3bUKpEeXVsmR6J4iSJQ+ysu+16hiXL9grFjGVxRLFvz4fVtwjqaG56tLiAFSn1rIn6jtDSIAPGLqzIkgg7n/1KFfj2YGraJL9cLQOE0TuCPDnSgl2KODxnLMF749uFk/rGzg1CePxEmLRf68CJ/bUfgUOCPRSxgm6tmfJwgWdOEKaP+Mslp95GF6vxQltfOTSFZ7G/tWlRhJ5tdRXhntzKIWlxqVhGHUN9UoBD7nU3Lk3LN6TYR2eoZYjd3aR9je8Y9fgLS4KDfk+RF9vaZH1EYXZlyLKk5MqKFCTRL8n1xkecvMbDY+rMrucEwteXm51Hzvkzw+uXIkvDk17qc7QL4lo8+ESeofJAXhkam6OHw6zuklKQtVbqc+6fWT0eckCrjsDL/bHlIHpO6+EMyuQfv2SQ13iP87d4OAi87ku9yfSIaFzUX1CWICHHGXAUtKkXvhMoAQ4D3YDcG8PzmAanr1JJrYEVJA0AkIL1OX2W/tWKM0HOatgu20kcmThrIFBE3sLcB3HeGI+Oq0nn1kzSeB+cG96SEXuxRee30wFuoJHjqCfdp6I0Nm0/ZKzuFPuLhRs2vR907izV5+iTDHPhRW9+RegubNKUP3RTcKh0stidm3785phDBg1/X9mdPUP57lRemVn4/U0Ztm3yfn7sCnBatqtzZnDAb56XLLC/9XnrIQgvewj62asB7PB3rdnN+5Ii+6HPUjZZVpYzD6MMfsb+K8DwUJEyy29gie9SdqedRQRjEsZ5ihHNLm8A+gY9lFSO3Nv3BPkPgefUd2GMu9AT1PPDog4g9KfoqeX8TJNbCkFwLwFLCMKUYs92A+JuYbDXAbTP7/NKKYnvp0DSRz3jOC1g/GBgsTcdUtQAeNXwnoqL4cW3KBI+CnNXaZFRdzsfr1EW+yu1MrFhINjo0bNJ4Ee3XMJz/WxZRo5Gf+YnSbAbyBUAaWZu3ejmnhH3tp5Y+i4uFnurjn6KstBba5XFKGjj+R2AFZHbOB3u1cAHrfcHJ1Gw0yt7ixN7I+ehugR51/3XaDk5aPLXCaPTSqsuPk4cHkl6i8qJ69GSPWtAKRm01NmfZbfzsrU+eM1y6a3o0GrbEoGl8fucStG6xwuy2m7VLkIcrAYvKso2YFmwNV2SpATRGgcYMs4S+phruEa11AFs3rzspILYc1hjBLnkFYCBpg+vC7dCQZD1tU+zoihXmqHDJtzbuLYti8hfqgLHNd+fOHm4caHlcgAYKXJPH1lByqr8sxDtl321Lf9wiePl4XQP4zXBx4HI8WLPcEpJPeYDSNO37cOf5XLW7bQaScAtZfRpedhddfjy1gj3EVgqpeVpEidpiMGQ79nmWGnmwAlwDZjv5wOZhxurqHQtj4SlERyggNAwCkmAA3c77bR+uNBCLYfjrtKS1Y6mD2afpn217QJsa7u+t11s4cd8onVUqeEeWFZCVCRB0rqj8dgwPqevtr5/fhrj0eC+2D7+Ba82oiuDymP5AAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 320,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "400%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 320,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "400%",
            count: "0",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 320,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "400%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 320,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 6,
      stageName: "風の音でかき消される告白",
      baseHp: 10,
      width: 5500,
      enemyLimit: 24,
      requiredCost: 150,
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
            actualHp: 37500,
            actualAp: 3750,
            actualDps: 112.5,
            magnification: "375000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            actualHp: 20000,
            actualAp: 600,
            actualDps: 1384.6,
            magnification: "400%",
            count: "1",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 400,
            actualDps: 923.08,
            magnification: "400%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
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
            actualHp: 20000,
            actualAp: 600,
            actualDps: 1384.6,
            magnification: "400%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 400,
            actualDps: 923.08,
            magnification: "400%",
            count: "1",
            spawnTime: "25.0s",
            spawnTimeFrames: "750f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
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
            actualHp: 20000,
            actualAp: 600,
            actualDps: 1384.6,
            magnification: "400%",
            count: "1",
            spawnTime: "35.0s",
            spawnTimeFrames: "1,050f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
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
            actualHp: 20000,
            actualAp: 600,
            actualDps: 1384.6,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 400,
            actualDps: 923.08,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
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
            actualHp: 20000,
            actualAp: 600,
            actualDps: 1384.6,
            magnification: "400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.3-10.0s",
            delayFrames: "250-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 400,
            actualDps: 923.08,
            magnification: "400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.3-10.0s",
            delayFrames: "250-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
          }
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
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "32.7-33.3s",
            delayFrames: "980-1,000f",
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
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "32.7-33.3s",
            delayFrames: "980-1,000f",
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
            count: "0",
            spawnTime: "21.7s",
            spawnTimeFrames: "650f",
            delay: "32.7-33.3s",
            delayFrames: "980-1,000f",
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
            count: "0",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "32.7-33.3s",
            delayFrames: "980-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 7,
      stageName: "片思い卒業証書 授与",
      baseHp: 10,
      width: 5500,
      enemyLimit: 32,
      requiredCost: 200,
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
            actualHp: 45000,
            actualAp: 4500,
            actualDps: 135.0,
            magnification: "450000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
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
            actualHp: 25000,
            actualAp: 750,
            actualDps: 1730.75,
            magnification: "500%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
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
            },
            "immune-surge": {
                enabled: true
            }
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
            actualHp: 25000,
            actualAp: 750,
            actualDps: 1730.75,
            magnification: "500%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 420,
            actualAp: 180,
            actualDps: 300.0,
            magnification: "600%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-15.0s",
            delayFrames: "150-450f",
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
            actualHp: 3000,
            actualAp: 300,
            actualDps: 219.54,
            magnification: "600%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-15.0s",
            delayFrames: "150-450f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 480,
            actualAp: 180,
            actualDps: 337.5,
            magnification: "600%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-15.0s",
            delayFrames: "150-450f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1303Data;

