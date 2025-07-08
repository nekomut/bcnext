// Stage 1352 Data
import type { StageData } from '../../app/stage/types';

export const e1352Data: StageData = {
  eventId: 1352,
  eventName: "極悪のバトル降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 352,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "ハイパーバーサーカー 超極ムズ",
      baseHp: 2500000,
      width: 5200,
      enemyLimit: 7,
      requiredCost: 200,
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
          treasureId: "10646",
          treasureName: "洗脳されし暗黒ネコへの進化権(洗脳されしバトルネコの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "553",
          enemyName: "インフェルにょろ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 8200,
            ap: 2800,
            dps: 2270.27,
            speed: 12,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 120,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 49200,
            actualAp: 16800,
            actualDps: 13621.62,
            magnification: "600%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 50,
                distance_start: 350,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "636",
          enemyName: "デヴィル夫人",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 9500,
            ap: 8000,
            dps: 5853.66,
            speed: 18,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 850,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 57000,
            actualAp: 48000,
            actualDps: 35121.96,
            magnification: "600%",
            count: "5",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "43.3-46.7s",
            delayFrames: "1,300-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 100,
                distance_start: 200,
                distance_end: 800,
                level: 1
            }
          }
        },
        {
          enemyId: "555",
          enemyName: "ギルティ・ペン",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 32250,
            ap: 4200,
            dps: 3230.77,
            speed: 10,
            range: 280,
            rangeType: "範囲",
            kbLevel: 3,
            money: 420,
            freq: 39,
            foreswing: 16,
            backswing: 10,
            tba: 12
          },
          stageStats: {
            actualHp: 129000,
            actualAp: 16800,
            actualDps: 12923.08,
            magnification: "400%",
            count: "0",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "death-surge": {
                chance: 100,
                distance_start: 450,
                distance_end: 950,
                level: 3
            }
          }
        },
        {
          enemyId: "559",
          enemyName: "魔我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgIGCAoKEBUKERYLERYNFRoRGiMRHCMRHCQRHSQVIywZKTQeMT8eMkAkPU4rR1suTmQyVW03XXc6Y35BbYtFdJRIe55LgKNQh61UjrZYlb9bm8ZeoMxeoc9gpNJhptVjqNdlrN1oseNrtedtuu5wv/V0xfx80P+C3/////9iEVczAAAAQHRSTlMABxAXITxJVG16qbbi8P8wlqHGztpii/+v0P+d3u//xv/82P////////////////////////////////////8A9DRMLgAABCpJREFUWIXtltl24jgQhg1hh4gdp0ni4HiXV9nybjrv/1YtA15BjM/Mmbuui5zI+P9cUv0qifn5+WGKGG8Xb/sXphbTxe7QeNCIn1xcA0wBAEeOf1+Wb8wBYNnPfUdAricCThTfhqU+ZwrvnQAjUAQviW95FrPbmBW++v8MeAG1EBRx1Z/Uxh8PF6IB2JL3Xpf7m+IoqTxgwWz4esvh8xGhDsiVC/LSuEj7pCrs7Po8H4qPCAWgtx0wub7fXAoZfo8ZZnEjSB89KmAJ5geS/+D6dFwSBF1eMcvbgFM2VMBFsig/MC0JHNQ2vdwLlzkpKxrgothMZ7cUyvKRUPWPOTHX6Uj+F6UxBbC+vrwtl2lXESTzxEqSrGo8ofEvjwFXw02qH2qeYAVTIFM4irrCAvXrMSC3wG5Z/6UqBfGlLlzWQ9OFEzd6CCCVaq/PvEoBaObpWkhdkz7HjwDgddTST18rwInn2GI6iip9De8B4/ZWmQJasDzZq3eAlrz0TlN6+8Ny1d6kAbaP1Pm3Be4yOv16Dhg++L4AUZQkSeSoXI5bPwXM7vVGmoYYI9vBWWrkrhw+AbzcyVknw67req5jG9BwsQTA7Alg35YDO0PuJTAOHEM2EwjAkg64q6GauVXgCDtOZnBbOuDQ0h9x4NYDh3GUeHBCBcxbADlCNbnnubasxEn2TQW0XQBdx68APjJMhRWtTO3TAJt2CW29moNvQ8MJbUmMZWoGbYAeSbbvFQDLCoLYsJD33TkDmMlGWKYQhX50hvzZ4pZdAWqqO2UFHMu2IBSOGdxRp7BrAaTELvSBrUHk6KruBO4HDdB7bepZPiIrgPGF4CDs4SiOQpQp1DVoZ3D0Atd3UHBB4MIOkX3oaiRgxXnuQc0MeWRi180ElJTsAE2Ow9KRfkieoDWtH7RSYLkIYy805MKQ2EeW76IU7ru2NDIH18skJSnmL6lRFLlnqWtTlfL9HJpqhG9d4ajHUEvibxrgrpIecaKHzKICIdSQImvvAxrgfkdfW0qxiCgO/TQT+9S2zkxaAOBG9Y7ih7ZjQMiPqIDe4tEqFBF6pi6fBIEbUgHMoJ2CnVzzDzCKkSzKigqNzz4dwCybObBcku9oD5NuYomqjs7n8+/4/QmA6a2bBDEjNsKBaoeiBCG5sSjQ/XoGIEk0EWoWkAIaVhgg3SC3FZbcSZ4DyCHZsKSW5bsSIlKEIPUifUU/natYtXJAvm16uR+DfDN2ADSPKTmNUUBaAymIl4q9ToCmp3g3CwLTzAsS2fNugGZ7YLUo9UxEmnzwWx10AzCjuiVYTo+TmJxsLiS3zm4ApjfZNhCKbpnKEXSqQhGD0Wi8n65mm6rj5leM7oAqJvPLjBaXi/G/ATCD8XS1PlwvrAXgP8VfwP8KWE7X8812sVjUTgky2m02s8Oweu0P2DCaI0KNx9YAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 452000,
            ap: 10200,
            dps: 1900.62,
            speed: 2,
            range: 460,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2300,
            freq: 161,
            foreswing: 32,
            backswing: 11,
            tba: 65
          },
          stageStats: {
            actualHp: 904000,
            actualAp: 20400,
            actualDps: 3801.24,
            magnification: "200%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "100.0-106.7s",
            delayFrames: "3,000-3,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 60,
                duration_s: 2.0
            },
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "shield": {
                hp: 322000
            }
          }
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 255000,
            actualAp: 20604,
            actualDps: 38632.5,
            magnification: "300%",
            count: "3",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "savage-blow": {
                chance: 100,
                power: 1.1
            }
          }
        },
        {
          enemyId: "662",
          enemyName: "極悪な暗黒ネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAABAAEBAAEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQADAwMFBgcKDRAMExgUGBsRGiMcGxsWIywXKjYnJyceMT8xNTckPE0+PTsrRVgrUGlGTFIxWXQ6YX1aWVg8Z4Y0cJldZm5EbopFdZZqcHVHfKBPhqx8f4BnhZpVk71bmsV8kqNen8xhpdOQnqhnrt+Pqbuwq6eiw9nEvLfPzcu32O/a1dLk5OPr8PP///+btd57AAAAQHRSTlMAJXK6DlPJG2XWNUF9j53/quj////T////////////////////////////////////////////////////////ixzs2gAABkFJREFUWIWdV4l2okoQxX0jFnT3NDSLbBJRERU0xmz8/1+9ajATnadOMnWOB/BQt2u5taAoP5BB/3TTb/xE7UsYaVfXFgz/Sb83O2h4aXQXwb9Z0JiVxoPa1Ffl9J8A2q1FeQSU4BD0/kG/o8OuLGcSAcjPYjAaDRtKH/WOZbmqAGDwIxPAMKgu1ZyZAyfRx61f+uibAE2nLA04F2u6OnysBu3vmtB9e7/Qh0NZlm/6t/WVhmFdAkzL8kX/SSAfTorkE+H4QcY/0Fd6QGqB4LiqcBi0vqssPR3ioVTqW+i8g2gIMrino57FpzmWFqASoxQCBDjgPaWke+9U6H/dd6CNFhxfCGWMsOP72w4opYxC5x6A9nU/hPHQeS/LKXDOKXoCTApM4XZF9fivr4cG4WT68vYxAxOFM8alEAMTeZMIKqVn6LpJBioYQgBwYdYiYHI4WvpND+C85YyR+UoDTL5acS6EzYCYXG+h3IqjZopz7B7I5w4YSD8qbG4cVnCXxh0g9IJmXc5grPQlAHNt+lG+63erWVZu//yPpiRvT5mUO4xCVUk3na9fx2w9XJhETEEelMkMghlxFjArZ/cKSbeFyS5yrBHTtvURqK2nd2f7YY2n0/5NdaWBHJEd54tnHVmDhKpDpZu9Otmz0R7BnVKUDuOBgml1w+powG0b/1TRuO2rlT2bI6Vxp60/AHU9wRke21ROnYB5PpVx1XcI8GrdKwLUoDavegeSvqk0CePSJdOlHaVNracJenErAMOKHCqV7cJ1XUEBRgOC7HXRA0qHSg/7SZC9Bs0bAOOqRYzwcNtFvgI/NTCTuy5DNiPDwHSy19mtXtSEsSQYEGGimhsmZqVP41BW/7CtIsOYtX3NbtEID4BuU1EJEM8Fdxl7tQVeKrit96vRQhEguJLDDuYIC05Ka6RzM0ooeMmyQqBJAnzpntyZbJ/plRw2ZZZxb6htZqgcMuDuXKr5eOvF8xphEWyfrnnQcXi77r1SDMuLoliGHk0gqOnFUQ3gvDrb3bV2rM4CyY7T/Fg4ZhIn8+gUAxItI19yUe9OX63d9loSWsmsSm6NkAXIXteL0qh6jJKaWjBoTT+c56cKoD1unvWUHqxnVQGPKgeirHqf2Ym0QUS0epwcJ+AsSDCtALrkvK2PeRGolSV2wnYL9nSapdRDXVPyibnkIPsJMSl0kS0aY9qXBT0SZobE69tF4eLwSxfgn8yWwsM0L/wpjiSwhfA5PGjcI2cR0OwkI83GqA/2fE5XU4h2xuN+6c89CWIuw8d9nq+tcoGd/fnAI8/kPj+vKPDC7YIYjud5juUQ8PztRGyCIC2KNFzu18HELfLcPRibOTxnNJkniX1BBsC077IkicIwSrI4jN2niRCHo53nBWp6L2+Q4wXCfQpCuHh+BBdNs2XOQ198ekzcMHuCcG1Yy7ySpWVFeEmjIl9jfunDA/Mud922biYm+9w+BA13Bi/yNEWlDf6K9Tr/FMwKnk3YH3Ru6CGN8pP+XgQTKOr3Q55HtCh+66+JyzFd3fPpXechJCHaJ2s33/M6aJUIStM8TU5PxRxiE8M/GvzZFjWfY8RSTDmewiLHl697GIMNsKLwyCdADKF5tSOqngfmuhCAOgDLKmi5TYrctyzbQ7Nq2fsQXQfoCKwb2TUSFxeQzEjl6xsQLnyUBOaV+9ICii5cbeo9FtNqDZSpcBe8CsF+YwKuNpPHOv5hUchTYHDVhG5k/94lswBtL3J3XizlVjdZ5umyWGN6qihPjKv7XUfEBLs58TnlW0KKtQd2XoQTCRDmG0L5bhZ7mo5dlarXABSIXOJ5EbbjzA4WSEuKLrsLBFiIoogJvL0AUXqDP1aHMxMYjgGkKPZTkIUP63xTeHQymRhsvtwLwK1CdmPt5mDURCIjaGdASlzuzf1a5Jvk0Q8f5ym4wii3d1dTGUc75uAmhqbTAIESZstc2EjKPY4oYnX/9qXW7ooo9mmzwaN6Koo0jXFEMowOlsD10P3hBbNxonfs/Z6Zv6tbNkRi7/1bI/lC+mMsc9UtlhDvTbXVxV1y3GyFe0Ly6JvfF73haGwXdEB9Mj5Jy3YHuGa1hn//Wh2q44GuQ71l/U/0gab+5TOp0VHHWku/qq23tLHauWLEf97D2vR0+M2WAAAAAElFTkSuQmCC",
          traits: ["悪"],
          baseStats: {
            hp: 2100000,
            ap: 8750,
            dps: 16406.25,
            speed: 7,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 2100000,
            actualAp: 8750,
            actualDps: 16406.25,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "strengthen": {
                trigger_hp: 34,
                power: 100
            },
            "shield": {
                hp: 700000
            },
            "counter-surge": {
                enabled: true
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        }]
    }
  ]
} as const;

export default e1352Data;

