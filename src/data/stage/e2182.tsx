// Stage 2182 Data
import type { StageData } from '../../app/stage/types';

export const e2182Data: StageData = {
  eventId: 2182,
  eventName: "有馬記念（ＧⅠ）",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 182,
  stages: [
    {
      stageId: 0,
      stageName: "ファン投票で出走馬を決める",
      baseHp: 10,
      width: 5500,
      enemyLimit: 3,
      requiredCost: 50,
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
          treasureId: "9000",
          treasureName: "キャラクタードロップ(9000)",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "15000",
          amount: "0",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
          }
        }]
    },
    {
      stageId: 1,
      stageName: "年末の大一番グランプリ",
      baseHp: 10,
      width: 5500,
      enemyLimit: 9,
      requiredCost: 60,
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
          treasureId: "8500",
          treasureName: "キャラクタードロップ(8500)",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "30000",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            spawnTime: "72.7s",
            spawnTimeFrames: "2,180f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
          }
        }]
    },
    {
      stageId: 2,
      stageName: "賞金は国内最高3億円",
      baseHp: 10,
      width: 5500,
      enemyLimit: 9,
      requiredCost: 70,
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
          treasureId: "8500",
          treasureName: "キャラクタードロップ(8500)",
          probability: "1",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "50000",
          amount: "0",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
          }
        }]
    },
    {
      stageId: 3,
      stageName: "芝2500mの攻防",
      baseHp: 10,
      width: 5500,
      enemyLimit: 9,
      requiredCost: 85,
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
          treasureId: "9000",
          treasureName: "キャラクタードロップ(9000)",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "75000",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 4500,
            actualAp: 135,
            actualDps: 311.53,
            magnification: "90%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
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
            actualHp: 4500,
            actualAp: 135,
            actualDps: 311.53,
            magnification: "90%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
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
            actualHp: 4500,
            actualAp: 135,
            actualDps: 311.53,
            magnification: "90%",
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
            actualHp: 4500,
            actualAp: 135,
            actualDps: 311.53,
            magnification: "90%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
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
            actualHp: 4500,
            actualAp: 135,
            actualDps: 311.53,
            magnification: "90%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
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
            actualHp: 4500,
            actualAp: 135,
            actualDps: 311.53,
            magnification: "90%",
            count: "1",
            spawnTime: "55.0s",
            spawnTimeFrames: "1,650f",
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
            actualHp: 4500,
            actualAp: 135,
            actualDps: 311.53,
            magnification: "90%",
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
            actualHp: 4500,
            actualAp: 135,
            actualDps: 311.53,
            magnification: "90%",
            count: "1",
            spawnTime: "58.3s",
            spawnTimeFrames: "1,750f",
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
            actualHp: 4500,
            actualAp: 135,
            actualDps: 311.53,
            magnification: "90%",
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
      stageId: 4,
      stageName: "2分30秒の決着",
      baseHp: 10,
      width: 5500,
      enemyLimit: 12,
      requiredCost: 100,
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
          treasureId: "8000",
          treasureName: "キャラクタードロップ(8000)",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "100000",
          amount: "0",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
          }
        }]
    },
    {
      stageId: 5,
      stageName: "中長距離の精鋭たち",
      baseHp: 10,
      width: 5500,
      enemyLimit: 12,
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
          treasureId: "8000",
          treasureName: "キャラクタードロップ(8000)",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "125000",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
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
          }
        }]
    },
    {
      stageId: 6,
      stageName: "名前の由来はレース創設者",
      baseHp: 10,
      width: 5500,
      enemyLimit: 15,
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
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "1",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "150000",
          amount: "0",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
          }
        }]
    },
    {
      stageId: 7,
      stageName: "ラストランを飾れ！",
      baseHp: 10,
      width: 5500,
      enemyLimit: 15,
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
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "200000",
          amount: "12",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
          }
        }]
    }
  ]
} as const;

export default e2182Data;

