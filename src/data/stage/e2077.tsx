// Stage 2077 Data
import type { StageData } from '../../app/stage/types';

export const e2077Data: StageData = {
  eventId: 2077,
  eventName: "開眼のぐでたまにゃんこ襲来！",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 77,
  stages: [
    {
      stageId: 0,
      stageName: "ぐでたまにゃんこ進化の道 超上級",
      baseHp: 150000,
      width: 5000,
      enemyLimit: 10,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10348",
          treasureName: "ぐでベネにゃんこへの進化権(ぐでたまにゃんこの第3形態)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 4000,
            actualAp: 400,
            actualDps: 292.72,
            magnification: "800%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "5.0-8.3s",
            delayFrames: "150-250f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "033",
          enemyName: "フルぼっこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 1497,
            dps: 1952.61,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1497,
            actualDps: 1952.61,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "033",
          enemyName: "フルぼっこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 1497,
            dps: 1952.61,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1497,
            actualDps: 1952.61,
            magnification: "100%",
            count: "2",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "033",
          enemyName: "フルぼっこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 1497,
            dps: 1952.61,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1497,
            actualDps: 1952.61,
            magnification: "100%",
            count: "4",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "033",
          enemyName: "フルぼっこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 1497,
            dps: 1952.61,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1497,
            actualDps: 1952.61,
            magnification: "100%",
            count: "5",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "410",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 130000,
            ap: 8000,
            dps: 3529.41,
            speed: 7,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 68,
            foreswing: 26,
            backswing: 42,
            tba: 0
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 8000,
            actualDps: 3529.41,
            magnification: "100%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "ぐでたまにゃんこ進化の道 超激ムズ",
      baseHp: 350000,
      width: 3800,
      enemyLimit: 10,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10348",
          treasureName: "ぐでベネにゃんこへの進化権(ぐでたまにゃんこの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 7990,
            actualDps: 4062.7,
            magnification: "1000%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "352",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQEFBQUGBQUGBgYICAgKCgoLCwsNDAsODg4QDQ0UFBQYFRQXFxYnIiEvLy83Liw2Lyw0NDQ4ODhLSklOTEtNTUx9OyxSUlJdXFtwWkFeXl1jYmFpaGZsaWhvb2/LTT+Waj54cm2BfXfqVkSLgXSNjY2VjYWXkYWtkXemnoqmn5i3rJ7LvJjBvr3FxMLdzKDPz8/W0Mvr2Kfc3N3c3Nz14rDl5eb+567s7Oz+7sf4+Pj+/v7///9M3lsQAAAAQHRSTlMAFAjE0h53LYo8Z0pWtp32fJG31mb87P6U/6zC/9T7h6ji////zP//cJ3/5/7T//9r/v//rP/k//+I////U/8A+pC1SgAABBJJREFUWIXtltt2okgUhqUiIAeRgyJRQEmg6ZSVQiA0NCTO+7/V7CqgPcxas8bkblb+CyiV/dU+1cbJX1/U5BvwDfgGfAP+R4BBgoImXxLSVPlrhIkofZ0gfJGgaPymaZ9Nh6jCBclzR/k0AIlLL4qx86lsiKY9NZIsw3mdbsX77QX76fHxMca0O3U49+5Pg/7048cTfaanEwC6w/1BmABgiB5A9bsBKgc85gAocYdnd2dBdlgM6/J0qlOS+s/OnT4g3YEcPvp+mq7XPi6z5+l9aRCd50EpJpRi34+tuyohuyPAZ4pJ0UR3NSQy/MGcZEXVtG3TZvc1g7bwuX3BbEFN1UR3ZAGJuuv7vX3bFrRqszUhkiIL/8ELJOsSyKX+Oub2TbguqiIrCltXJUlV/n1MIAUeEdFEDN6rgjvftllG0pi0TSBOkAB49RYhCMzp3jld6ntOjN7f21FFjEnWtqk67DETrvfc2IJgBn2rzfoxNJEPI4C50XBfMkfl24jzq3RqSR1pFs2X/JM013midDo6kJGiGTBhmlgKkmfzy5MhB92JzPEpN3uct7NMVZOtvDevsopCM7JsVgXxMXEsbze7qIVshBjHqxSnts6+Fqzj7+PPneekKcaYEAxdSCiJCcZpnDqb7e74sdPO8ZtRXne9amz2Lrz9+v3xkdRtVRVFxkWhHQv4WL1+gH6a6GxPutMfdVuWXKTufgEhKd8HEVLwO2tGBjha5xRqh9OlEl4dILz9ejukVW/fguc4a8C8aooX2N+xtbGKyK7Hzfk16H9ALAqaN2DdZFlTkDCOYwohZIfjcWdaQbQ1+3aUo3HvkrDhG4xkWdqSnEAGYXdQHPthHIZh8rKzNAQviw0wLE1AOh0d6PLy1NE/ADgP0iZ5fT2clQRhGDgzGfU/LzdRFHhGPgBwzK/Tyw4VFNXy9vsXrv3OswwTjLae1ve8IJn7yB0BNV/kwc0hgZMjhRTawJUUEfpz2HizVASE5qYgcg86nsCupCmJrH+MXmHfjfUdYlt6W+bI0o5MZPKpT+uSPQTTG+fRLWDiQaFq69ovZekFURi71hyX0IC0xryaXd2dDtchIEHsARDA1ShCorJ0WGWgwHGY9ne2tM+PgK/7fZJEzDs3SZK9t5SvIHpAwpTCGYFTsgKtQee/Ekhy4ZDA5jE7UHHNclVG0pWDsukMVYAu4CLG+ZRITpiSvKzLMs/hVucUx655M1LNsYwDJ7ooAlJX65XjhoNcd71aqbcjWUvrS+WXLy9kh+HacCA204bgDANWs9sSITMMV6FtWZbNF5eTjgNm89VqoRtsZTLArQdIiVzH1WVZ1txg7o5zRtBUaWZMF6vFdLpYLB746gFWc2MGM/9MUSRjCnpgmj7MH2ZQg78B44r37B/0lLYAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1250,
            dps: 412.09,
            speed: 6,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 91,
            foreswing: 10,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 250000,
            actualAp: 12500,
            actualDps: 4120.9,
            magnification: "1000%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "353",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 4999,
            dps: 1785.36,
            speed: 24,
            range: 330,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 84,
            foreswing: 53,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 14997,
            actualDps: 5356.08,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "66.7-66.7s",
            delayFrames: "2,000-2,000f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 7990,
            actualDps: 4062.7,
            magnification: "1000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "410",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 130000,
            ap: 8000,
            dps: 3529.41,
            speed: 7,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 68,
            foreswing: 26,
            backswing: 42,
            tba: 0
          },
          stageStats: {
            actualHp: 260000,
            actualAp: 16000,
            actualDps: 7058.82,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 79,
            actualDps: 40.63,
            magnification: "10%",
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
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e2077Data;

