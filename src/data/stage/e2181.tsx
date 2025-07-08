// Stage 2181 Data
import type { StageData } from '../../app/stage/types';

export const e2181Data: StageData = {
  eventId: 2181,
  eventName: "天皇賞（秋）（ＧⅠ）",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 181,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "古馬最高の栄誉",
      baseHp: 10,
      width: 5000,
      enemyLimit: 10,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 1,
        magnifications: [100],
        baseDifficulty: 1
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
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "1",
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
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
        }]
    },
    {
      stageId: 1,
      stageName: "伝統と歴史ある競走",
      baseHp: 10,
      width: 5000,
      enemyLimit: 15,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 1,
        magnifications: [100],
        baseDifficulty: 1
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
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
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
            actualHp: 10000,
            actualAp: 200,
            actualDps: 461.54,
            magnification: "200%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
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
            actualHp: 10000,
            actualAp: 200,
            actualDps: 461.54,
            magnification: "200%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
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
            actualHp: 10000,
            actualAp: 200,
            actualDps: 461.54,
            magnification: "200%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
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
            actualHp: 10000,
            actualAp: 200,
            actualDps: 461.54,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "11.7-13.3s",
            delayFrames: "350-400f",
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
            actualHp: 10000,
            actualAp: 200,
            actualDps: 461.54,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
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
        }]
    },
    {
      stageId: 2,
      stageName: "目指すは秋の盾",
      baseHp: 10,
      width: 5000,
      enemyLimit: 15,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 1,
        magnifications: [100],
        baseDifficulty: 1
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
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "4",
          times: "-1",
          limitText: "-1"
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
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
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
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
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
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
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
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
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
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
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "11.7-13.3s",
            delayFrames: "350-400f",
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
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "4",
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
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
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
        }]
    }
  ]
} as const;

export default e2181Data;

