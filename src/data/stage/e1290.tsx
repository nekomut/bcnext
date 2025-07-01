// Stage 1290 Data
import type { StageData } from '../../app/stage/types';

export const e1290Data: StageData = {
  eventId: 1290,
  eventName: "後輩からの本命チョコ",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 290,
  stages: [
    {
      stageId: 0,
      stageName: "これ、私の気持ちです",
      baseHp: 10000,
      width: 4200,
      enemyLimit: 2,
      requiredCost: 60,
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
          enemyId: "457",
          enemyName: "グミネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 1,
            dps: 0.04,
            speed: 12,
            range: 140,
            rangeType: "単体",
            kbLevel: 100000,
            money: 100,
            freq: 707,
            foreswing: 8,
            backswing: 10,
            tba: 350
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 1,
            actualDps: 0.04,
            magnification: "100%",
            count: "1",
            spawnTime: "8.7s",
            spawnTimeFrames: "260f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 2600,
            actualAp: 160,
            actualDps: 200.0,
            magnification: "200%",
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
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 2600,
            actualAp: 160,
            actualDps: 200.0,
            magnification: "200%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUGBgYHBwcICAgJCQkMDAwPDw8PDw8VFRUZGRkdHR0eHh4oKCgpKSkqKiosLCw0NDQ6Ojo9PT1BQUFFRUVMTExUVFRdXV1paWlycnJ8fHyFhYWMjIySkpKZmZmgoKCnp6etra2ysrK5ubnBwcHLy8vT09Pd3d3k5OTr6+vy8vL39/f8/Pz///+gTjTCAAAAQHRSTlMAAgcMFR0nMKFAOFRdSrXPhKvBb3pmmI3Y8aKx6rriyP/21/He/un//v/+/v///v//////////////////////VZxXkgAABRJJREFUWIWdl2djqkoQhqUIiiXGgho12ICt1KWIiP//X91FYzTnCp6c+WDDfXbmncLSaNSZoGpi7R9emTRuKeWb/A8YQZaFhjSYdcWG0B40fw8QJwNFkMbLhdKQ9aHyD4DRTFekkWWNpN7sXwCC9rbU1THAq/bHZqU0hF8TZN22pjr0rf4nXChK+5cyiKo6+cS7JWJkg/BwMOyrv/NBGvU/ZoCaMHSgjze75Vj6nQeCNtyZpkdpGPjMJXil/m45d2Gyd5yAlcYZ1pcDgvhXgUia3BCUhY1IWAIotIdXBQStI7/cvKk11fdRUxsN1zYNLw4Q861XeiAorVbzlQtiZ9gazGa6YSH3GgFHeNDo8q3lwXLYab/yQe1vNhu4gbfVFwvwdqBwWcBy1npVEPLY8mhIgM9+EBzrY2L4ngP6vXqC2O3vojw/oJ8uMObtPp3jMQbzYacWII3nID6diwSg8KcPNjoUxxAY4/rOErtLEwZZcWKAPBJCBJJTSrdTTarNg6AukIdtHOe5Z7v35YyC8ODbi578Io3S2PJZ6ELbSQ+PQrq2E2F7p7+sI2WBLwETGwYx/BbSh5AC4DpG+4UDYmfvXX32kY0dG19lCOHatEnAQutVU0pTeFOujMNcUx5+yMh6DS9gvHhRRs0V+U6b5xNzbZZCeqZJnUtfeNv6GIT21rsBsOkxH5mlJD71Q2SWVwJrUnuLEDr7b+EJ8Mo28n1KCP/RQX5YVsO0VgRxDL6LJwwuHz1gQ9t2SiWuItQmUv7AP8o3ZD6AcZaQMgUXBFnVApS7hl8dBEFcFKfMswEuQ2COUdsJmuH+cIDaKD4VxbnIIgfamEvhbuum66OGpfjYpocijw/nY5jlqQsADerzKI6s4C6iA2B4LIpjkORZdMiPWcTrm+x7NQCJJ+EGCLBN4kPCAt91XYenkhBMeEV/duoBlH5VPzJJ4CAAIEIYE+o4rlsWJnwB2JiP7YPcKD1k2THPT8XpGGMTe96+HjC/NXDIGwEwLsHFTseUj1nIy8mvBww2D2l0StXDMIpYQBGvR1qyvdoQZB0+jEF+RwL21QAi3vWKtxnXdJOyog9lEF1qOYqiOIrjOPoqzfV7dS0Lvb33CEgOXL6LBMUpz5LoCnjTKgG8jsL79vHhVJzvxhsi5r+76xoRpCm6+R6xJH9cXtop4xeouaseKfJ1IrOIbxUfz/+z4hAxntxppQi3gZhEQZT9uX9pecywjT4q56piOOX6OEZ+cnoGKFKGEFlUNvQXgPdtmD1ZzgEZg9RZtasA6mWcxAkkcf4UwOcC8DyjVwXQDI/XTUqBn54qAIHNgm3l+aAEsCS2KUufKVCq6Nox23ZrQgijlICgGkDXrB4Qpczk/VAFOOI5CqoBPAtJijYXwHNCBt8NVA1ormjqrN75zel5GZzPqTWZfM4qRZQ/iGP0eluHpc8BRWRozWm/Mo3SeGd0JFlHYcKPaef/M07Ooimoo8pKFLvvXYlPha1TtlKeHO+IIj/ybxkciQ1Rrr4/y0p5TZ5awaE4HzBhSZqmScLHEZ+KXl5EL44XX8ZPepjHkLtLY29Z+/12a6xWSxwXOa1uxD9C2XtZkeGp1u6125qmqYr6gdIitbp/+QTbnII4Z4YmfD/sCZwQu4u/fXwUtBWK4EAW7yaprd1nt/6U+7282e725+Z8qOt662a63p/P9FG3p75+euOZnraGb2/DIX+5Gf8y7L+39EH3j4n4H2iBW0BUMHPwAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 2600,
            actualAp: 160,
            actualDps: 200.0,
            magnification: "200%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "ずっと前から見てました",
      baseHp: 16000,
      width: 4200,
      enemyLimit: 6,
      requiredCost: 60,
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
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "11.7s",
            spawnTimeFrames: "350f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 5200,
            actualAp: 320,
            actualDps: 400.0,
            magnification: "400%",
            count: "1",
            spawnTime: "10.7s",
            spawnTimeFrames: "320f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 5200,
            actualAp: 320,
            actualDps: 400.0,
            magnification: "400%",
            count: "1",
            spawnTime: "27.7s",
            spawnTimeFrames: "830f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "44.0s",
            spawnTimeFrames: "1,320f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 5200,
            actualAp: 320,
            actualDps: 400.0,
            magnification: "400%",
            count: "1",
            spawnTime: "43.7s",
            spawnTimeFrames: "1,310f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "57.3s",
            spawnTimeFrames: "1,720f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 5200,
            actualAp: 320,
            actualDps: 400.0,
            magnification: "400%",
            count: "1",
            spawnTime: "57.7s",
            spawnTimeFrames: "1,730f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 5200,
            actualAp: 320,
            actualDps: 400.0,
            magnification: "400%",
            count: "1",
            spawnTime: "67.7s",
            spawnTimeFrames: "2,030f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 5200,
            actualAp: 320,
            actualDps: 400.0,
            magnification: "400%",
            count: "1",
            spawnTime: "74.0s",
            spawnTimeFrames: "2,220f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "78.7s",
            spawnTimeFrames: "2,360f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 5200,
            actualAp: 320,
            actualDps: 400.0,
            magnification: "400%",
            count: "1",
            spawnTime: "79.3s",
            spawnTimeFrames: "2,380f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "お返事、待ってます",
      baseHp: 38000,
      width: 3500,
      enemyLimit: 2,
      requiredCost: 60,
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
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 214000,
            actualAp: 1420,
            actualDps: 635.82,
            magnification: "100%",
            count: "1",
            spawnTime: "14.7s",
            spawnTimeFrames: "440f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 7800,
            actualAp: 480,
            actualDps: 600.0,
            magnification: "600%",
            count: "5",
            spawnTime: "21.3s",
            spawnTimeFrames: "640f",
            delay: "17.3-17.3s",
            delayFrames: "520-520f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1290Data;

