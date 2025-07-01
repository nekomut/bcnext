// Stage 1069 Data
import type { StageData } from '../../app/stage/types';

export const e1069Data: StageData = {
  eventId: 1069,
  eventName: "極ムズカーニバル！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 69,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "暴風カーニバル 極ムズ",
      baseHp: 596200,
      width: 5800,
      enemyLimit: 15,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
            actualHp: 2160,
            actualAp: 192,
            actualDps: 122.64,
            magnification: "2400%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 26000,
            actualAp: 3100,
            actualDps: 2268.3,
            magnification: "200%",
            count: "0",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "18.0-24.0s",
            delayFrames: "540-720f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "112",
          enemyName: "エンジェルサイクロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEFBQUPDw8ZGRkdHR0tLS03Nzc8PT1AQEBBQUJKSUWLNwD/AABbSTtTU1OVSgdeX19fXl5uW0icVRItg2aCaU9xcnFycnGuZR51dXWPdlS0fAW5diuagluEhoXBgzCNjY2sjlXKjBOOlpWem5XJpgq5nWXPnDqfoaHToB+prrDaqUnbrDizs7OyurzhvmPnwlbAw8TE0tPO3t7y25X//wHk5eT67rry8/P9/PupObTSAAAAQHRSTlMACX628RrTnFUUKz5XmHnJKQkB/2UdwIT+QP///aVi2f8OiP/+qsT/P//kE/+1/lf/zn7s/uu3/f//8AH//f//Y4/eNwAABoRJREFUWIWVVwtb2zgQxHBc4kcSqE0sahm7WMSVmwpRCyRRRf7//+rGoVBegdzCF5zgXa9mZh85ONhpv398e25fdt/51k5Pz84vLi4vrx7t8vLi4vzs7HS/KKfnlz9vbke7ubn5CcOfh7dXF2enn/ufXd1uNvd3v67Pz/8e4Pv3619395v7m8tPI5xe3g/D5u76x4+T8uT3w2e/f/+AXd9ths3t+acZnK/uceP93d3P25/X37d2ff3r193d+PHt1dnnEJxdXN3c3m+2dv9gD9dbEPbB8csDCVed2WzWNzdbKK+6W/DwKQDB8yinuTC+z89G+zalJtvj2dMkehYj6qwf+jwcr+fMlcEut78WV12ZZ3EU4l74zaX3AhFwmUvXR58HCOaddVb3qzKLczgupeba5PnJQW6c3ecMwYQqO3ihTF+x1fyIKU5NT/NgZga/CveIEOa98d4I6ZySfUU5E8KJLp4Jb7p4jwAHYbLstHeSw09JRrWXRqlywRA0f7glmn8cKUwq8OetE4hAuXdOGkG5FPaBh2hZfQDnSZbn8wWVSnvFhDRGeSm4Mlwz6roEKEwXOt9JaIADUKSt8ESntDLWWIDBpeXGCdcvTw6iSuyiI4iycgVfTvFsZa3zDqlLxrkwlotBasWSIFdGvwtBGOedElpLSSmDC/K2ijVNWrct4QZnUVqI2QzqfKuoMIrzVe8GryRngF4IsMeYIHXb1E1Tk6IRiIxkZkz44a0eomUHoQF5563H2RGJrYu6IXXRrNcFIc26IUIIKRbQ2XtFEc0XROD4Ai9MIRhfw1ocIG0agRzqOgUVkCWU9SiHl3YcZ1mSzComuVLW0LZg8K8L0jZGI5mGFMxaoa1mcmdNBHHZW6BngF4rZNvWyKJtnOMEGQAHRZ3nZmdVnuSdENYAfStorddtDT9CuHWGkCJNcSlRJTtrKswqEAj1WMUZHNNiJJAZBzM8JWmaymGQTC13HCHMO5Annd9CRVKxHqG3Rkko2gnkUDM/ILnqBKc9jpL4tb+WFCwMjjdUmBb8tSnXAF1plKahhJBaatRnPgp+0XXzlwBmPfD1xngL+Y3esBoJOyeYcJpDVXVBjeFVBKyF7bOXakh6FK/1DLfQYl3ItgCAnEOd7OvXr8xrTus0pcaK5awyxplXFRl3kCGkRrnRrMWtaVpTQu0w2K8cP3YQFIcAJIxum0X+kopo5b1HDQsFEYDDmqzbgqQA7SmAHnlUimkNUmz50j8sUQmq6qkaW4hMi7Zo1xAfNcPjEQYBYokSygMP9qolhaXRoptHK6nQipxhzbpo2qYllCHCCKIfwEJNmPN4S3n1ksHjWVctZnEQLjhnuAdCXtctqZu0QC9yA8xrwYoi5ShTMFslrxQQx9ExMM2oRAsa65o2hJGiJsJZSECMTdFaSVIKkRr32v8pzrxyYhwI1nJQXkAN6MfoRVqjuoR1IEFx/O4KcBD3jguJoh2LsSEEeKAkCvQnURcp4YxaaFKusl0DKjNSKUo1iOCsQCso0gJy+vNaUNSlElW+cyYEJUjS6ME4ppU1ICi2VVxDEXVTNFxr9OfFYTLPsunxexisBLCmTI71IMlYzzgI5NM0bQt/BQYkww0IRJbzt4lEPVpPutBGmpH1UXhgAhlAUmMCUOVgqZLeYdbobvYmiRiVTBcLTjk6s2RkGwBAoCZSNAjjBgexSwSyfZlF0ZvWnGG1WMQY6IBynGkCxcRpKlBF6AnGop9KwaTsV9lb59Fyp/okLNXYQwSGmXFSWzlOKbs1LYyi3SqPd7AYlI6hxvIKWrCYT1ZjNtpxw/GDBzN2DDbb5b0lQR4B2XgupHQaTxUIAOFYNY48xumynJX5B0tO8gfXqNcKLVQrbBWcMGkBCEam4os4+GjPC+Z/FAo5KMcWjMNNo8VYCQgZKkRU73D/PMLjRY4+2iUrFDJGCqcM2jQaCw4XbJnssWuiprDmJVlFMKScpkezjnZAkGP2MjLdI0BYeqOSg2S2Ao9O5mFczrG6dOOyo6t9Nr0MIkoOwhAtTngLF6y6QRglY5R+uceyiR2bbh8UrbBqmGcNOIji2R4pBKVZPFRKVBqvuhcN6EMqn84gH8ceBqbjk318Xlj8t+1jZJrZ/w4QTf+6BElXvdd+/oclyz2+aHxkwXSfrwmvnYLg+Lnh/X5ABNF0enh4OJkcHR39+8yOjiaTCf4xnb7fjJ7s+HAyOv7zro2BJq8b+n+yykesEJnfrgAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 1399999,
            ap: 76000,
            dps: 456000.0,
            speed: 6,
            range: 70,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 1399999,
            actualAp: 76000,
            actualDps: 456000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "069",
          enemyName: "ホワイトサイクロン",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 999999,
            ap: 89000,
            dps: 534000.0,
            speed: 7,
            range: 70,
            rangeType: "範囲",
            kbLevel: 5,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 89000,
            actualDps: 534000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "070",
          enemyName: "ブラックサイクロン",
          icon: "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",
          traits: ["浮", "黒"],
          baseStats: {
            hp: 1200000,
            ap: 4000,
            dps: 24000.0,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 10,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 4000,
            actualDps: 24000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "064",
          enemyName: "レッドサイクロン",
          icon: "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",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 999999,
            ap: 92000,
            dps: 552000.0,
            speed: 6,
            range: 90,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 92000,
            actualDps: 552000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "開眼カーニバル 極ムズ",
      baseHp: 596200,
      width: 4600,
      enemyLimit: 6,
      requiredCost: 100,
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "10",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.7-3.3s",
            delayFrames: "20-100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "131",
          enemyName: "暗黒嬢",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 1248000,
            ap: 7880,
            dps: 19700.0,
            speed: 3,
            range: 244,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1920,
            freq: 12,
            foreswing: 6,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 1248000,
            actualAp: 7880,
            actualDps: 19700.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.7s",
            spawnTimeFrames: "20f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        },
        {
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "136",
          enemyName: "ネコボーン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 18000,
            dps: 17419.35,
            speed: 4,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 31,
            foreswing: 16,
            backswing: 15,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 18000,
            actualDps: 17419.35,
            magnification: "100%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "129",
          enemyName: "Hyper Mr.",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEBAQEBAQEBAQACAQECAgICAgICAgIDAgIDAwMFBAMHBQQGBgYHBwcICAkNDg8XEgwVExMhExAYGhw5DQk6DwkhHBAjHRMkIRwpIxQtKBosKCAuKhpaFg8sLCMvNThCOSJHNyl4JRtGPyg+QUGFRTy+LyFaXl1kYWHgOCZrbWqBbD6pWlP2PCmDg37rZViKj4qTmZOfpp/ujYOtr6y7u7vg4OD////////LjisUAAAAQHRSTlMACxQaISuFpbTScWM1lMRDek9a5e7b/Wq7x+bcuY6h9ay6/dTm4/7O//3d//3+/e/////9/////////////wD/EN3tAAAAAxVJREFUWIXtldlyozgUQJGE2IUQSxycNltibNaA28S4O578/1+NwHjJVNe0O/MyDz5VctmAju+9ki7CX/8R4S64C+6Cu+AuuAvugrvg/yf4BMC2pVEkfBFAZS9Mk7mpfU0BLKf+eTgc3rtQMb40P+wPHyPvhSn+uYA6/ceJQ0rAHwcgF4ez4GPvXCcBEBiHAOF0RdSJRc+3hw9se+37hX1I6MBRM1vNBHtlCTiO0Pg887OyzNkkkzDXB2ndXlPXrwO5DjlBGYBFGQF9nWMwC2b2U7WtsrVvD6slKkVsaOY8KX5FGvr+I3lOIjFOYjEKl9Qu32p3mF9+//4a8wjpvK6Xbv3zM/v95Xs3z+N8No5FvvjWNEm2bapmu/1x6GMsCPay4IJd3e45/cRu1/fD731b73bhiuXPw8hpsHzZlms+eeDtx1u34DWJU0mu26TY9/t2faEYDUXSdg8ExkkEoySGszDjgu2ZtxUXPKYaqdu06Lu+21wodqMgbbtEFlebWIw3KzRbZ02ZXQle/yG4iiC9CAIUbyIUbXgEvxCIfkqUMYWpBruJnud0TCEY1yA+pfBZgEhahA91V7f9pYJDDY907a4LpzWIcxY9v2yrUxGPNbDnRWg6SfovONMasFU0LGOVXEIoF/wQehaSPM9zXffhjOtdIfvrgK9BBINkaWhZk4XVNL/y8dBGgACxwVTH4/MUhbeUtJAMDuaIHBRs+FbeRMAucgMFL980P6uapqky/3SgAADUU1VPx0BPiySZUwAR5FePt1nEBBrZAlosIP8zKIiW+fT0pGjnrgEhgNSQPAqBlaYhsRFECPGrVwd2HOcugXiAp7M9nHcIRGxorilRkhRzKiJxjP7yyG+aCc/ToAZzHI8n8kgon4x5M8Doxr4EMEbY4HU0bUtVGR7rZ2vMEG8UQINSW9clh1CRmrJBbUaZrjNm3BoBsyxCZE+1dIo1R5KIpGmaznR2owBZsqwonitbkqTZpsoFhHCJpN8owDLfA86Dow6YnmuqwwZUTZPc+IpCGhlCMCe4xDQVRSaS/fsI/gbQ6K2zMlFGUgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 478000,
            ap: 4837,
            dps: 9069.38,
            speed: 14,
            range: 162,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1100,
            freq: 16,
            foreswing: 2,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 478000,
            actualAp: 4837,
            actualDps: 9069.38,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "135",
          enemyName: "ムササビネコ忍者",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMDAwMEBAQJCggTFRMVGRQWGRUWHBUfIh4iJyEjJyMlKyUvMy8sOSs0NzNBQkE8SztBR0BJU0lXXFVXX1ZOaU5UdlRubm5giWFxf3F5eXlnkGeEhIRumG6NjY12n3eAqICYmJienp6Hr4eNtI2lpaWotKi3t7e+vr7Ozs7f39/p6enz8/P+/v7RSx9NAAAAQHRSTlMABQo3Q1+RprfX4+8QUIAXIHHG/SxnPVhLo/5t3H77tpb+1q3/yv/n/f//7v/+///////+5f////7/////////yHCKrQAABHRJREFUWIWdlwuPqjoUhQV8zchTUGf0iIJYoZZXObwZ/f//6uziSW5ycifQaQwQ4/q69uqmyGTy7RBk6+NwPB52W138/lffy63Dyb2HOA39m3v+kHn1+tENw7QoaFWEYYxvlw8uF8L05NOiSIGRxmFO8zS9HTUO/c6N07xKcZqGGMd5XKRp4X/qHHqQxnkY52mOMaY0DtM8x+exHj5cjMMUgwwQIU3DmFKKQ3o/jstBv0J4RYzjgtI8pnlBYfoUh3l+3wkj9OLRZwWkYL2K4VAAIgYfMZi4jonBuhZhHoMIpwDwfR/5CBH4imLsH0ZY2PhgOKU0DOGEbDtrSlImiEAmKT0N5yhe0jxm6wdL4Du2aaIGoa5rI4RzSu/b4QpcWHpYe4jRR2RvmqZteh2MzIM8wsMg4OOGYX4cMn2ZgAMYTssICQop/RyOAEOC0EMFRnXbOzDNfVIDoEVhQa+DgGNaQO9CJ/hB3VWoB5h2xiyUfkFvwwCcs86LKUIBSdDedJDpVEwPFmLqDgIOPrQNi5GQsiTEc1C0D7rXCHw8DNj4VZ7H0D5ZkjV1gkqUoKx9AZIwHQZsb6xrkefVWdI0dYYcgsqu/f0byshQeB4E6C4sAHb2TluROgogiQCR5LLdHn8DwN8MAoSjT1FgA6AJkjIqIzgE6GyJ2rlM/Js1CJhsXeiAwLGjjAQN3APtswsc5J4uruehy4gdQT75XtNmQRCUgUdIktU1gRFVVeDddsN61sw+pEaqqibN4/FoYSmCtosiAIy4GZmFMwoYoEnK5/P5iJpHE1VNBGHao3YkWIiTV2XQBKQDwLOBI9xIpLTtxdhddfvLtsumih7MwaPtvqI6cxxzLY3UC8Z+72RNRb4AULZJ0LRfX55tq+MKgE3J+Jz/iqCEBgA11F61zy/Pcz5HPyAFWVTcCvZCVn7UBnBuneXneABjHO51nZDu0ZGo7J6P7GTJ+tgS+qGdoYMyAh3RQTM0aMyG/i/hXjdlRLK6aTJyGf1k/W/IhyuYqLIkSqLrltcA+71gHa/3rCyzO/y94Ab0BFnfHc/n486SBU6AILAp4SDKsq6J2g8AsswAE1HWdF3+EUBjFl4AURZ5ARNB03uAIDKAKAq8KfYAKIEFqYH+ZwBZ7i2wArgB4PyVAwB6wo8AmgZCAABB/AFAfAFkGQgaL4CFL0P1E7aOsJKsCj4Am1fWWTP1AJ3lyQUAlaZbbBcWe4DGCRA1UdYlBYIUepKl8wKg/3VlY7EAdUuSLF3jBFiaNVUUqdcDAAi8AH06myozC/RTSYKPxffeJFoWAIy5IvXq6Wxm8YUgS5Y0nW5UBmAM1ZD4Xrs0mFZRZpspJKhALao65QPoirJRDWMGHGlmKLO5qnC8czHAzJjP1Y2hQCHGXFVVY8P3YNCM+WK5UOcG1AEXwFLHPtv/OlCX67f1YrEA5RrOc3XOB5AWb6v3t2XvYrlcrpfzBRdAmK5X5goQb2+gfu+vFJ4+EJR38+9YrVavs8HTioKyMv8d6v8D/gA2yrPEzinpsQAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 1000000,
            ap: 7220,
            dps: 12033.33,
            speed: 4,
            range: 240,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1980,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 7220,
            actualDps: 12033.33,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgEDAwMDAwMEBAMFBAQHBgYIBwYJBgYJBgUJCQgNCgoPCggrFg4kGhYqHBYhISEoIR8vJSEsKissLCwyMjIyMjI6NjU6NzdBQUFQTk9PT09YUU5YV1dnZGRxcXF2dHR7e3qBgYCKiYmQh4u5cJeak5acm5vLhKukoaPHnLOsrKvkkL+6ubrjpsrnt9PJycjc29vq6ur19fX8/Pz////gpuQ5AAAAQHRSTlMAAwdefooUr7vf6g5yzB0pSlY+Z/mbML19pV3p0EEiDW38t5W5B/7h/Nis//HO////q/////z//v///f//////sDKZigAABGpJREFUWIWdl4uyojgQhgUVjxMMt/HumVVxEQeMLBijSQjv/1bTwbNbW7tVg7G1UJB8dLr/7sRe7wWzQ+f5BXnWK/f/z/B8YbegaIreA5xOoWX1rPB0cN4CeCd+2G63qz17D4BWec0Z55Twk/fGeBznQqmmaZSqaWweRnxgNYyuhdIHfpgZjkcx009veCabhmWSx4Zh8PO6BdRCCjCl6MrQAd48rZZZynndiIMRYHZ6OqDqimdJAfOoTybjrS37ckCxNGMpTEHlJgDnIP4GKFZUlc6EkQfe1wz0HESmE9FIoxiEuXoCJCsKQiCGDduaAPwWoJQg5eNxu1W0rs9GagYVtCkkl/vjeilFRfnBqKIhBhog0sutfNwv10daxbYJwDnouDXscr0D4Ha5kdw1qia7FaKi5fVxKcv79V6kgcn4nrVgX4Bbebncr4/iaFiNK6rTyC/3snzcyrIs9obFOMs1QGalKMvrtSTV0CiGup20URQZKW/3ayFysxBAOe/bYlBklxYFk/UxNAQ8o9iIJCG6KuTxhyGg91loLRcpIVrUYm8MwCepHaiqFsCWf5gC7Fg0qkoEJQqKqlj8aQrQSpBpoaieSp1/Go+HepI0EU3bjeTBOAR6Diwl9RPAY/MZwBzSBCqK6iDS7TsAb5PpTgYHVZgtKl8WrsF7VUEQzXWoDU3XhZQirYSksbEKwGabNZecZ5SztxywF/OjVFIWVND9Ww7MF21jZVVdvZMDcCBsAZy8JUPY4UXPniKIeFmG/+rbVjSfObHuKZKwV3Ng2dY/HDx3HbSiDWggy0FFVueiADdYjtXeqDnBfIYQbDJgcc72GC6/ArCRpQdrR5zlAiHkwOoC+wrXspDdRYBH2Ah78IFCWET9eWgj2wmgt6si7NmO3eWBHo8+D5/68KM32y8dy7aRf5RQDH7Pxq8AHPSZn37+dc63KEh/Ohrpr6E105X+rRMAz4OtsZB1LWi8TM8eXHBWKdQyW7wGsOzPs1RU1EwUu+rsIcdxFnkmNADhVwCtbgQnTJJdHmOEHbynGQMA+IK6VkbbtsOz7p4kLXiS7T3HwTg8wg5LsYXjoBcAaNWuZZxwksDGGoMFOSdZzRYYAF0bJAs5W+igkHZBMyJi7GEvXDKRpTWbehhE1SUkB2+5BOVzXmUcALNZ2D9KCR7wpYchoF1TwN6WwoZYML0Y8C0Ow757hIRQJQ4z8Ad3eIC80M2FkKADLuuz7/lhEGwKDgB5CsJg1gVw4In7gnJRQxukceDDK5hXEBDJ84Ef+R1/mSzs+313Ax1c8OIYR1HfjQbuMhNsxzlZRlEQdniA++5wMIW0JSQZuW4/mg6n02lC2S4j2WYQ9f0OIXjD6cfoI003x3wzHQ7dAZyNRuusWK/TIpkO3H6HB+FoMpmMk/Ek3UxHHzAaTicf410ymezS3WQ0GvzeAyuajMffvn3Xb/gc6xNt3/UVfRiPfr/Zt/As9P2g3w+0+X7o9/uROxgOB625UeT/V8u/AEpOzBt2ji2eAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 777,
            actualDps: 932.4,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgEDAwMDAwMEBAMFBAQHBgYIBwYJBgYJBgUJCQgNCgoPCggrFg4kGhYqHBYhISEoIR8vJSEsKissLCwyMjIyMjI6NjU6NzdBQUFQTk9PT09YUU5YV1dnZGRxcXF2dHR7e3qBgYCKiYmQh4u5cJeak5acm5vLhKukoaPHnLOsrKvkkL+6ubrjpsrnt9PJycjc29vq6ur19fX8/Pz////gpuQ5AAAAQHRSTlMAAwdefooUr7vf6g5yzB0pSlY+Z/mbML19pV3p0EEiDW38t5W5B/7h/Nis//HO////q/////z//v///f//////sDKZigAABGpJREFUWIWdl4uyojgQhgUVjxMMt/HumVVxEQeMLBijSQjv/1bTwbNbW7tVg7G1UJB8dLr/7sRe7wWzQ+f5BXnWK/f/z/B8YbegaIreA5xOoWX1rPB0cN4CeCd+2G63qz17D4BWec0Z55Twk/fGeBznQqmmaZSqaWweRnxgNYyuhdIHfpgZjkcx009veCabhmWSx4Zh8PO6BdRCCjCl6MrQAd48rZZZynndiIMRYHZ6OqDqimdJAfOoTybjrS37ckCxNGMpTEHlJgDnIP4GKFZUlc6EkQfe1wz0HESmE9FIoxiEuXoCJCsKQiCGDduaAPwWoJQg5eNxu1W0rs9GagYVtCkkl/vjeilFRfnBqKIhBhog0sutfNwv10daxbYJwDnouDXscr0D4Ha5kdw1qia7FaKi5fVxKcv79V6kgcn4nrVgX4Bbebncr4/iaFiNK6rTyC/3snzcyrIs9obFOMs1QGalKMvrtSTV0CiGup20URQZKW/3ayFysxBAOe/bYlBklxYFk/UxNAQ8o9iIJCG6KuTxhyGg91loLRcpIVrUYm8MwCepHaiqFsCWf5gC7Fg0qkoEJQqKqlj8aQrQSpBpoaieSp1/Go+HepI0EU3bjeTBOAR6Diwl9RPAY/MZwBzSBCqK6iDS7TsAb5PpTgYHVZgtKl8WrsF7VUEQzXWoDU3XhZQirYSksbEKwGabNZecZ5SztxywF/OjVFIWVND9Ww7MF21jZVVdvZMDcCBsAZy8JUPY4UXPniKIeFmG/+rbVjSfObHuKZKwV3Ng2dY/HDx3HbSiDWggy0FFVueiADdYjtXeqDnBfIYQbDJgcc72GC6/ArCRpQdrR5zlAiHkwOoC+wrXspDdRYBH2Ah78IFCWET9eWgj2wmgt6si7NmO3eWBHo8+D5/68KM32y8dy7aRf5RQDH7Pxq8AHPSZn37+dc63KEh/Ohrpr6E105X+rRMAz4OtsZB1LWi8TM8eXHBWKdQyW7wGsOzPs1RU1EwUu+rsIcdxFnkmNADhVwCtbgQnTJJdHmOEHbynGQMA+IK6VkbbtsOz7p4kLXiS7T3HwTg8wg5LsYXjoBcAaNWuZZxwksDGGoMFOSdZzRYYAF0bJAs5W+igkHZBMyJi7GEvXDKRpTWbehhE1SUkB2+5BOVzXmUcALNZ2D9KCR7wpYchoF1TwN6WwoZYML0Y8C0Ow757hIRQJQ4z8Ad3eIC80M2FkKADLuuz7/lhEGwKDgB5CsJg1gVw4In7gnJRQxukceDDK5hXEBDJ84Ef+R1/mSzs+313Ax1c8OIYR1HfjQbuMhNsxzlZRlEQdniA++5wMIW0JSQZuW4/mg6n02lC2S4j2WYQ9f0OIXjD6cfoI003x3wzHQ7dAZyNRuusWK/TIpkO3H6HB+FoMpmMk/Ek3UxHHzAaTicf410ymezS3WQ0GvzeAyuajMffvn3Xb/gc6xNt3/UVfRiPfr/Zt/As9P2g3w+0+X7o9/uROxgOB625UeT/V8u/AEpOzBt2ji2eAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 777,
            actualDps: 932.4,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "133",
          enemyName: "ネコぺろきゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgEDAwMDAwMEBAMFBAQHBgYIBwYJBgYJBgUJCQgNCgoPCggrFg4kGhYqHBYhISEoIR8vJSEsKissLCwyMjIyMjI6NjU6NzdBQUFQTk9PT09YUU5YV1dnZGRxcXF2dHR7e3qBgYCKiYmQh4u5cJeak5acm5vLhKukoaPHnLOsrKvkkL+6ubrjpsrnt9PJycjc29vq6ur19fX8/Pz////gpuQ5AAAAQHRSTlMAAwdefooUr7vf6g5yzB0pSlY+Z/mbML19pV3p0EEiDW38t5W5B/7h/Nis//HO////q/////z//v///f//////sDKZigAABGpJREFUWIWdl4uyojgQhgUVjxMMt/HumVVxEQeMLBijSQjv/1bTwbNbW7tVg7G1UJB8dLr/7sRe7wWzQ+f5BXnWK/f/z/B8YbegaIreA5xOoWX1rPB0cN4CeCd+2G63qz17D4BWec0Z55Twk/fGeBznQqmmaZSqaWweRnxgNYyuhdIHfpgZjkcx009veCabhmWSx4Zh8PO6BdRCCjCl6MrQAd48rZZZynndiIMRYHZ6OqDqimdJAfOoTybjrS37ckCxNGMpTEHlJgDnIP4GKFZUlc6EkQfe1wz0HESmE9FIoxiEuXoCJCsKQiCGDduaAPwWoJQg5eNxu1W0rs9GagYVtCkkl/vjeilFRfnBqKIhBhog0sutfNwv10daxbYJwDnouDXscr0D4Ha5kdw1qia7FaKi5fVxKcv79V6kgcn4nrVgX4Bbebncr4/iaFiNK6rTyC/3snzcyrIs9obFOMs1QGalKMvrtSTV0CiGup20URQZKW/3ayFysxBAOe/bYlBklxYFk/UxNAQ8o9iIJCG6KuTxhyGg91loLRcpIVrUYm8MwCepHaiqFsCWf5gC7Fg0qkoEJQqKqlj8aQrQSpBpoaieSp1/Go+HepI0EU3bjeTBOAR6Diwl9RPAY/MZwBzSBCqK6iDS7TsAb5PpTgYHVZgtKl8WrsF7VUEQzXWoDU3XhZQirYSksbEKwGabNZecZ5SztxywF/OjVFIWVND9Ww7MF21jZVVdvZMDcCBsAZy8JUPY4UXPniKIeFmG/+rbVjSfObHuKZKwV3Ng2dY/HDx3HbSiDWggy0FFVueiADdYjtXeqDnBfIYQbDJgcc72GC6/ArCRpQdrR5zlAiHkwOoC+wrXspDdRYBH2Ah78IFCWET9eWgj2wmgt6si7NmO3eWBHo8+D5/68KM32y8dy7aRf5RQDH7Pxq8AHPSZn37+dc63KEh/Ohrpr6E105X+rRMAz4OtsZB1LWi8TM8eXHBWKdQyW7wGsOzPs1RU1EwUu+rsIcdxFnkmNADhVwCtbgQnTJJdHmOEHbynGQMA+IK6VkbbtsOz7p4kLXiS7T3HwTg8wg5LsYXjoBcAaNWuZZxwksDGGoMFOSdZzRYYAF0bJAs5W+igkHZBMyJi7GEvXDKRpTWbehhE1SUkB2+5BOVzXmUcALNZ2D9KCR7wpYchoF1TwN6WwoZYML0Y8C0Ow757hIRQJQ4z8Ad3eIC80M2FkKADLuuz7/lhEGwKDgB5CsJg1gVw4In7gnJRQxukceDDK5hXEBDJ84Ef+R1/mSzs+313Ax1c8OIYR1HfjQbuMhNsxzlZRlEQdniA++5wMIW0JSQZuW4/mg6n02lC2S4j2WYQ9f0OIXjD6cfoI003x3wzHQ7dAZyNRuusWK/TIpkO3H6HB+FoMpmMk/Ek3UxHHzAaTicf410ymezS3WQ0GvzeAyuajMffvn3Xb/gc6xNt3/UVfRiPfr/Zt/As9P2g3w+0+X7o9/uROxgOB625UeT/V8u/AEpOzBt2ji2eAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 777,
            dps: 932.4,
            speed: 7,
            range: 500,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1666,
            freq: 25,
            foreswing: 6,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 777,
            actualDps: 932.4,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMEBAQFBQUFBQUGBgYVFRUWFhYWFhYWFhYgICAhISEhISEqKioqKiotLS0uLi41NTVFRUVISEhMTExOTk5QUFBcXFxjY2Nubm5xcXF7e3uGhoaGhoaTk5Obm5ufn5+pqam1tbW/v7/Nzc3Pz8/b29vk5OTt7e329vb7+/v///////+Zqh1dAAAAQHRSTlMAAgUJDREiTFZtvBU1XoeuQXqRyysb2+xlRg85e5Na8gbJdISk4UePrdP7wd3//eL//f/r/v3+/+3//////wD/pHXpBAAAA+9JREFUWIWtlm13sjgQhiWBoAUVFbqi1m5tXV9BiJBsSLL8/3/1TNA9+2U/EHfntFU5zsU99wyTDv76jzH4/wGDf8IJk8cb7D6vWALwfIPNK1qOnZcA7vG6Nq/r0zd6CRBc+DFN1+tjfXgJ4MQnye73+y1nR/wCAKWXWmkTsrlusTUAbW+NalsltW6VuO+wLSC9yRaC57LVlMr71rEDeEdh8lvJZdNwrptLYgdIbyDdhBJ5LoTW960VIPihqgWCVhXPzmWpW25moT8g3ReV8UDrOitoJlrNflYWAPRNi7xkUulWV5TWWvP8lFgA8LERVZ6XOeWNyAtW0+y8sykBH2WrOGRVDATQitfnU2xjIijoDDxzrRopdSvKA7YC/HDjoKKPYWhbkW2tJhF9s0cLGvkE7FO7Ud7eTZquxRPAP2M7QNQNIgDEYx7ZF7EDxFfVKWi46gDV1LUDBBf5BHQ1aLpBdgB8EMbEqhFdH3SZWi4UZ9e1oWokN17o+x+2G8kvzTKrhOIPM6wBnYsA0MYE3f5pDfC6Ya5EK2GlvQIwJphJ7AZSaXuA2WmmjWaOlJT2HgwSmARYJhUTgtHrAbaJY3kumOep4UVW16z8WDnWgEF6B/M0Ne0st7+/ADA1gAsFbOdbipFjAXj8M4C6YQSAltcQA6E3wHGcZx+UVgWVih+TlQUA8pF59JxlLgXPKs6v25VrBwDBUMJHrQQvKKNfCbIBAAG7yGxmOI9kRUX5vUIYgy4LgIf/Xu2slNADKMr89AWgB+Bg9qEoxIVAtjOwB+zgSGybgh1WCFkCXANAMIpgQlHuoIfItAbZAOCOsXmcZH5auy6GvhgZ/QAIAwDKDr45nG7Z3MMuBoYNoPs+dtdwuuibD7d3Pc9o6DlICCMXCK5HTk2r76lrJHlQRk8TzRyCBC8J4q8azqQtpHpeAMi+ALe7JQnJeg/Pcr2DbAjP6w3wPOQGSRyS9JpxXe8gO0mSIHD7AgLPTeKYkHhT5JWqNiQJCPwmXl8TQS4JQxL7X5QWsgMkBIgB7tdGBPdKYpKE4xMrs6baQH5CoihOegJwQjzQTOLllZdnAQqggNj3Q4J7leBg8/0wCqMf1tBzU3+EYUxCAMRuPw8wGBD5fhQdhapKyY9+ZC7AH68fAIHc4Xg8BAWqoo24zpZjv4MkPU0Mx+PRbDYaftCmzrjI56PxcAiKfNKzhGg0m0xGo+XmJti5EnQ6Hi6NiGFPgDuE/PlkMpvtOdvngn3N4MJsNBqFPQHLydzEZHKq2X7P+H7+/Bz18yCYTadvXbyfi8/3nGcL82E6nfv9AGQ2fVss3t/ff+vi8/wJ7xeLt+kk/BfAL/Wt1YeAQKGLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 1600,
            actualDps: 1066.67,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "138",
          enemyName: "ネコにぎり",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEAwMFAwMHAwMFBQUGBQUHBQUICAgKCgoMCQkVEhESHAceHh4iIB8dJw4zHR0nJyciNw0uLi48Lh8xMTF8ExIzMzN/FxY6PDelGhtERERORTxSUlLRIiJaWVh4WzVmZmZvbm2ScTx8e3uGhoWOjo6RkI+amprOl1elpaWwsLDqrl25ubnEw8POzs7W1tbh4eHq6urx8fH6+vr////////fk2rmAAAAQHRSTlMAChAYuwXbzOUv/yI7eK5KY1fzlaT/bur+x4T/Nf/Y5pj+/v27/+H+///O/////+3////////+/////////wD/y0SghwAABW5JREFUWIXtl2tfozoQhwuIihShrW2xbr0gdGlTAhiWXDl8/291JtCqrdXfrufNebF/e4HCPJnMTCYy+Oc/avAX8Bfw/wB8KTcIPG9of33TFzInDw/Pz7f+N80N17n9+fz88+e1NTDMbwDcm5uHDvAwNL3RN+ZhxugJ7J+fHoLF/egbHhiPeAnjPz89Xaar4TcA9izJwIWnpyTD9843AOYEC4RwQXnTkNk3YuCvRCOkaNq2kTx2/8S0G816rNu2ZUi0rUB1/gcu2LYBN9tBpmBwUUupRCVYbP0+wDANqIKYgQNNxSXGRFKe+xr9WwDDtAzbnuUwftvWSJCIFCmnj/Djp4D3F2zDskzbjUXbwJ9IIRFpipTaDL8CvLtim06wWDwSHYCSM5RlPKOZaOuFYfwGAMxncV7XlQL/RVaWpIBSUBVvxcb/8eMzQg+wDdefPW5KrlPPGXxyLnlRl0JmFcQzzzez07noJmcOwTgnTHXBa4guAH0gtSp90jQin5wkaIAx2xAum94IXqqWnY0sMcZM7GnIOzULDbA2O2ttvDuAKBJCyrLAGdUw+IXe7FuLfURwu7zzGlRmYk+iFRAqyvSK6OYmY7O//zCnGrBRkipy/7iY3USI6Ro4VENrnVkA6Fq3B8cAM2Yc1TJfWM7tcpkW4si8qbOsA1i2AbVuH05DO+TnomKtymeTJFmuk5S+BrSTRGnBVKs2rmGCDgHdjKB/dMWzmm/XyXq7XZMulqqfTNMwXBDeNvkQSh1q/X0M4Biq1HZuK50/vNz+2iYvv162JUSFICL6KSiCOSBz39QA4yNgYA/vtdtVCID1GghrnKEMZxlVghZZhpD25gTA3gEG9mgFPUBmCZj3hJJz8AJsMYHloR2UqzeAfQiAUyNYcZg1rQsEYXh5eYG1RFDBhehqQL/raNYDjAOA0VcGBFIHv1ElSiGK6yTCJFuvqZK7BQIRKmKnBxjvAEYPMAw3RinErCkhkL/WyyhM0miZpGmS4kooBalAIg9OAQxwAlrZLJcI63LJ1pCFbRKG0/Bupwj6EkZVQx/BBdM8BmiZTsxbltZKEIQgBpCM8NVeK7yDOKrVSAPMt/5k7wimNcqbpilTghHkLNlqF+4OFHHdKRZ6Bkcu6Oo0rUWtVyBGoAzqeXl3ZA8AxRoeW3q+71wY7AAuzEBXPU4jiN1yOZ3efQDQDPqz1Q95AIBpWU4su1auGKUVio6H7wCsbmA96Yy/rqhBvxWAhivoYpKwfvWlJwHQlvSC7Id818st1+0ATVuluKsalX6010FUvFp5o6H1EeAEk3lW1DWh3QI+DWCsgL0Co9WNb7lvAMN0ndH1PMXQQWEr5epTACVUL8lGktXoPcByg3vMu0uKYVQLdQoQ6hjsWxyLnVeAbbrDW6IapZQUQnAGqEYkO6MDD8Rri4PN9g1guf4KFj5YQgKFpnBW3UEZHyci0WniMI5UcjO0jP2WaDkjADAuOOdgz2ldkWw6nYadekfgKwwBoApU1TWTNB66PQBS6g7921JWFfxLJaQUjDFao6srjeggd/oDjqYAkAXuthrkAWBfho7ve/OyKvW2RLU5ozi56jTVL+BoXV2lQnJobRWl2fXI30fRNhw/8G4u06IoygKhotaVPL06IVQV0BVqBvZeEPjWLoqGE3iTyfX5OILmkyZRohWesJ9Ca4I6KrPVRD9IBO4e4HuT67Ozs4vzy3EYRQCI0rIIL8dH9iFwYYRofjHxYMSJtweYwfXZRa/z88tOYYrmZ/psdw7fU2iR4/EYDi8uzjpN9s8ylge37tTfrh0Znx/o8iqMpuOOtdPFtd+nAZ6MbvRo+8E6zS+PBaPPx/uTzt4bAuBftwHY/DOyJwMAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 133300,
            ap: 4440,
            dps: 3917.65,
            speed: 18,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 34,
            foreswing: 12,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 133300,
            actualAp: 4440,
            actualDps: 3917.65,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "136",
          enemyName: "ネコボーン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 18000,
            dps: 17419.35,
            speed: 4,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 31,
            foreswing: 16,
            backswing: 15,
            tba: 0
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 3600,
            actualDps: 3483.87,
            magnification: "20%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e1069Data;

