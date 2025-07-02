// Stage 34000 Data
import type { StageData } from '../../app/stage/types';

export const e34000Data: StageData = {
  eventId: 34000,
  eventName: "ゼロフィールド",
  typeId: 34,
  typeName: "レジェンドストーリー0",
  prefix: "ND",
  mapId: 0,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "はじまりの世界",
      baseHp: 2000000,
      width: 6200,
      enemyLimit: 3,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "10000000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMKAAAEBAQFBQUHBwccAAALCwsMDAwPDw87AAASEhIXFxdUAAAbGxsfHx9nAAAiIiIlJSWAAAEoKChoEBArKyuTAAAuLi4xMTGmAAA0NDQ3NzdKNDM7OzvQAACZHR2sHBz4AADlDAz////fzfTUAAAAQHRSTlMACA4VHSQuOUNRXGZweIKOmaSq/7K6wMrR2N7w5///+f////H///////////////////////////////////8ALrmR+gAABSJJREFUWIWdl4t24ygMQPN+t3FC3kkJJRQKC2VZXDyZmZ3+/18tttPGxs5Mu5zTNMHWRRKSEI23t7fGn0Z/Me7Uzb+lwp8BdI54Px91mu3m/wQ0IpoYut/td+tp/8uA9jhaboE6G2etkRTMu18EjABVxuizoJQy5Zw8jL5owpSeORdKgXRAnmh49yVAd6MNAtcBtUOTLwDaW6NBeQh37H8a0F5rFcgDZNTq04CIGxwCAIpR7zMA/9KIu6o8AIbdfQLQ3o/a+5jWyAOuN58AjPBhzWoM8IPZfef3gO6801hqDWJSJw+oQ/3fA3pgd7ePna3swMWLDg//AKCWUIOTegW8F0V0E9BfjlqNLj4nZ4ECB8D808+yeN+7BegheoimKKYKBcteeFAwBBBYt24AmjtnNaUxrOhNpCd4KuMZaXjLBzMVG5fUABT38oQSrTjxSoxv+WCjLIAo1N+rHjNufvz6llhlf/7iYFAL6M2JSc610QOV1uefv7752IR//8D1GjSjHWKJqqp/GcxwzP1T7CnrWg1aEYn5LfFsmLPGAFuBjt0aQG9Dk4TfCp90YMwSB5n1q4xrAJMtIC4pZyAiBL+7FBMOICEApVrOagCDDXPy6gEMqPDFXGnrVc5gOnuYh9S6AmjfH7UrLk+9IElFIDaZXiKThFSk/3YhYLzjSSn/fUY9XDfgTHxRz42iKnXTvgzoLJhzrGw9AE9XgrDZjP+jXNIqYIWUq8Tvw8v1O0xyPLGJjh2pmNAdAyvDTXt8TSkXLbSAXgMVM6YYcxwsCoCOLzBRqmMI+P788vJ8AXjFCVA2jxIW40kBMAGDQbX+PICXf//95/HdDVRTo2IPipOYYFqKxEgd96ZiQCr/fP2FNXIJ9ttheOyPy6iYC8vESVfJ4KfXx+9/XX8SAyC8RBEE+3YRsLLyLMrSEOMnr8NrQYP4+pXCUakmzizGwRbC7FB+fL0GApAXIxnnx3GjABjMlppVDMiC8uH5qaCCI15WGonX2fn+AegxIapFQGQ2PRQAgBrCKYEIR40SoLlNkrhSxvwhHk5hTXPrTp0SoHHPNauWMWkqU8Tmmsj7IqA1XPPaOmp0SMU6MxWbQ6sAmCFzTkRNIUXG8WA6VwFLOigAOuPlSSS1pZzHYYdis5Rkclryge8FgjDC73I6aFF4FgvIrkqAHj8Hu4B0nvxY0PIDbDOj7KldBNwJboOVsM0FeaDaxQbNBkVAtFlJFrxI8+Si4V6mR6z3YtqnXQHtZp/FwYsgry/QBuHEVa5YVG4wWgcXNnTYZXuuQidkSUbFPOhQJtyFkeC1RwizoFXOs5TKWdjiLFWorPejsSLcSGhgBpiGgPZCBnGXXhGgj4hysUdZmnM+qTRZzelJ+5Ps402WZ6NEzBbVojKd1mRY06VF/sxRgqYLYiDS0EJQyu1OFZMqswgFgZT3Fgus83qZLq/9IY19HRWr1sinxEeukSwuGK9pNCOWBR/ChAgtKUL+DJWn+2b/wDTXl4qFs5AnBveqgG0epNCfGb7AYsYIPUX+jreSlkGeByTN2n8ck7r7wuJal0m2HYitu+m1IYZIm9S5SMYE+TM+pvNGDaA1WR4+diC7qFF9GvqCaZBIdSPCqZRtFZ426wDpTg7n+5yQrQiE3PZ6EVEEUW5j354wqflx9X79LQGao+l8tV5vylGXG4WFUSxvbtKP7Wo1nw6bIaA/mtxPo9l8sVyloM12u919DP9js1mvV6vlYhZF0/vJqH8B/AcN7X7oOyh/ZgAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 481851,
            actualAp: 16851,
            actualDps: 31595.62,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "50%",
            isBoss: true
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 481851,
            actualAp: 16851,
            actualDps: 31595.62,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "25%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "630",
          enemyName: "メタフィリバスター",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 3000000,
            ap: 3000000,
            dps: 66617.32,
            speed: 30,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 200,
            money: 6000,
            freq: 1351,
            foreswing: 1200,
            backswing: 151,
            tba: 0
          },
          stageStats: {
            actualHp: 3000000,
            actualAp: 3000000,
            actualDps: 66617.32,
            magnification: "100%",
            count: "1",
            spawnTime: "1.7s",
            spawnTimeFrames: "50f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 4300]
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
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 321234,
            actualAp: 11234,
            actualDps: 21063.75,
            magnification: "100%",
            count: "0",
            spawnTime: "103.3s",
            spawnTimeFrames: "3,100f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "627",
          enemyName: "超古獣マガモジョー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQEBAQEDAwMEBAQFBAQFBQUICAgICAgWGxAdIhcmJyMiLhYxPCU5SilHUzlNYTdYbz1kekh3hGWJiYmenZ2pqaq5uLnIyMnV1dXi4uPt7e729vb////////2fAR/AAAAIHRSTlMALBVCV/XecJW7/t/A/////f////////////////8A/8yQS7sAAAQ1SURBVFiFnZaLdqsqEIZFRRDDdUBQ4+b93/IMmjYnl9bUWV2puuRzbvxD9W+36sBqVj8++Pe18EMAE+QcoN0/XAvLzgF62Tfln4XLOQCzzrRVq8Cpxxg+BTTKgaq50dY9xvBxEgdQ7tIbCWcANWaQGzBGGuX1iRAayauqA2u1PpnEATTvBXilnO3qEwBuvAej0AVj+zMeVC1XFpzRxun2BKBmLeuUsVIoda6VewfWOakMTemMBxXpB6UVTdmmbPiZHLBOK6GnnJec5+EEoAOpluu65nWc88j/Dqh5Z3KxqMdZa94Q0rSs7PEPARjEMBfANSatvFWYUGuNbP+gSHzZXBiNxopYC+AgeEH+ANjXU13WWvw8FhYMfwa0PwOuBRCoVtIUggM01z8DuubHJExbDooiSGlcaWyl/fAMkMNPADJuMeREbTASDVurG14Al2fVvZvdAdAyBYDaBlY01UsOelBV+55x2RuBlc7GXSUpL8rwDOC44bv3YbCtjrDpSU2aZheWZwDTFlsE2+wV0G5ZtE9PnwFNAQAf/q98t281KeNGcAezkShAgrR21w3eVhfwe05IzGnJ/khQOmwwXZzYvA6XCnK+NGXVXsd0NBtx+GiUb9CE1bXLqeUhe1UiatEDTMORrLfaKVRvsJ03nVqzlymOOaJD/Zpj+irDz4CaGmswBCHWbM2cp7is8zXHvsfFeUVBOhptHDPgtNDSlPfHdE1b/a/lFyUpZ3cAIMriftGgFC6ZfJzysuabpfDiwisANVwrnGKyKFCYc5zyt02bNw+t8AaARwFpQZuy/zF/ebrmR5va3wHogrOo4iWE5O6r0ft1v7scAIjESnqQEd+d9++XX/wbQ37eD+8AFZcU31zn5evjMRRUXlLcHoX6AFB1NG2lCyGMYxi9xHXjcosDL8kRoJXal4RrKpWUQmAqE9yzGA4B9WCpnea8SInyvSUju3s5PTsC4LlS+NJ3aTTCaZvQ8/DtwhouhwDml2ku8eIgs07oUoTvisYYyRGgKZ9bolfCemfVlkCINwDMCzsCVP1YxljRb4NtRQsv+JsDZrna+gjQ0FjmmMCDpQaQcp5TcpsLK0BaoqkPABWh87YVpm1fhMlMsLh121+jwh3GjgBV3ZW+jVQ7OYYlyewhYCp8Fy88R3UMwH5Elz1YmRaXg81R0CkbUlHeJNt9AmjNHKetdyMN0cvRirKMtRUdCPkAgFEIHBJjnBMFQ0X/Pfr5/Zj1K6AU09Z10za9WXx/7566/hSw3MSDjdk/zbSPAMN12Z3l8XmgfASo1XqrN0+nAATLtwMu17l/t/wAwHyeMISmuJLx1EHIHwF8jIvppOxbbP/QDUq8nuF+9yBMMYUISrhpTGMMSvMPAIQxzvvNBKCsBqNwUBZ9xa7SHT7maIz8DMDVHd2s6zp6uyx32/12hZDmEfAfCi7Y9HEdpckAAAAASUVORK5CYII=",
          traits: ["古"],
          baseStats: {
            hp: 2200000,
            ap: 35000,
            dps: 15909.09,
            speed: 13,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2100,
            freq: 66,
            foreswing: 10,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 2200000,
            actualAp: 35000,
            actualDps: 15909.09,
            magnification: "100%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [10000, 10000, 15000],
                timings: [10, 21, 32]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 251]
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "curse": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "surge": {
                chance: 50,
                distance_start: 150,
                distance_end: 750,
                level: 2
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "613",
          enemyName: "超天獣ラジャコング",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQECAgIDAwMDAwMEBAQFBQUICAgMDAwQEBAbGxsxMTFUVFRvb2+NjY2urq7dvRHdvRDfvg3evhPgwRvjwyHlxifpyzvHx8fsz0bz2Wbb29vr6un4+Pj///+5+EjUAAAAIHRSTlMAPiQMbo5Sp/7rz7j5/P///zAaCExnhqCy/8vs/////0jcmkMAAARqSURBVFiF7VZrc+o6DCRv4tiSoZRi8OP//8uzchJOkkLa8/HOXM205KW1tFpLPhz+t/+QfXycz6fJzuePf/Q+X65fo12ni+vn6R9ALvfH/Xq5YOVsp9Pl8+vx+Dr/GuAawv1TAp/sfLpcH+Fx+X0G1/sDdr/fbl+32+2e726fP+dQNuUMgaiR/S2bMHD5FQWVoq5Y3M8p/OhXzVcFeRraau/jV1aoWkKv6oEMp0CqXrzr2p8BKuV4aOquNxxiSsmbYeKiHFhVyxDfhaB9Co6N5pCykcoIZW8DommHHwCKgWz2Czz+AqGRFw0Sag41m32AomefZseQJInk1KGoDgrPTasTlbsAtbZxBrA2SRYx9FWtaoXrAF7dMHJV18Urf3q6Y2XjrBMEM7QcOF+CWJa6VIMPXG/dy0HSDi757BgoWcdEpL3pkc6MbcrqUNvkh21RS5XdPDM7HgEQs/coibXWhWdqvVbGB71ls+hBU8R3zqVIEi/FuSIGqoIu/JRacsHbZuPfov4p2PAkELk7rUc5sHcILTHnd8cQXaINh7XGh272B5Ik66OmI15E6x3klbwWBItaeKeqb/4By45M+eQ5AyRjozVCPqgVTKmFPHFmzWBjkDrBL0fgPcLHlbHewIsJxfM21zFLK2jqV/5Vg/IHkGRHluRT+UP4huFB2jpjZmXD9HqXF8pm+hz848RglK0AJU2UEnH46w8lrNPHuo4tQ8TjV55dTIS1w9IrpzYWyi8YLDtRryOGUtwolhDzb4xpY6M+sVCkJwVtL6lZrGaDhbxS9NHFGLa+mT9j0Sa0wZ+ecxD2IVlOkZ2zcI7MhAuo2X5HgP/xCH7AyBRBpxEuaRettlYjRMe9UhpXNoRvGYw0kBNdqYm/Qamm6El1R2oG27Pui0PVNsavvFAfO1UYFGiHXM1SyCUSQndAh+jKnFtVm0VfCAyGEX1+hPL4ILtiu5XWVinzBIgzGwy+vFzLP6feuVZV2XbmBYOyicb6MtB9/6a3Fj0Ggn/lLp65zYB1tKPju95am5caGNkAuc6gyRm27yKQxsJvIQgtRrZsNLp7z2DZv5aA5KC1DZAi5LIzHeqXDI4Ast8gJKf3pqxaru/DGmB8uOtf0MplVREr7zyrVzPpTQZ2dRcNMRl6J6LRutWafhUPyo/unGj3nKHWRSRe3WaNerU34jcAMbfVpzktd3qPhCWAkylAehmEztNhby8qt1jeYlZAPgsANgI87JG4StpB/isiveTg9+pQL9cThBjM8oFGhGGPxap3KwRM+FWHkzqEXSW0elUHjCda5iByDnscTCeFReGw/8MawO13REyrvy1BWBypXwBsDxffeeim015g8bfdok+hsLscihXGBYy36BlnETSyupKT9yhIkTZ9O99tbJBvISL0H8uEWVM7NNR89BZ/u9PORmsHM2ZgTcC5ezg0mAg5IfK/8cdwKBpFGLCsDc6ZfTeQkyMMjmxMuinLH0/8TadUDzsuTMs/PFOqa+Z+8AdP2cnTRr9lyAAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 1855200,
            ap: 12500,
            dps: 23437.5,
            speed: 36,
            range: 200,
            rangeType: "範囲",
            kbLevel: 24,
            money: 4500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1855200,
            actualAp: 12500,
            actualDps: 23437.5,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 250,
                omni_range: [-50, 250]
            },
            "wave-attack": {
                chance: 10,
                level: 2
            },
            "immune-waves": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 321234,
            actualAp: 11234,
            actualDps: 21063.75,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "624",
          enemyName: "超翼獣ピヨルーツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1770000,
            ap: 20000,
            dps: 6741.57,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1500,
            freq: 89,
            foreswing: 22,
            backswing: 23,
            tba: 34
          },
          stageStats: {
            actualHp: 1770000,
            actualAp: 20000,
            actualDps: 6741.57,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "strengthen": {
                trigger_hp: 33,
                power: 150
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 321234,
            actualAp: 11234,
            actualDps: 21063.75,
            magnification: "100%",
            count: "1",
            spawnTime: "11.3s",
            spawnTimeFrames: "340f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "604",
          enemyName: "超鳥獣アヒルジョー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 1200000,
            ap: 19500,
            dps: 8863.64,
            speed: 15,
            range: 250,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 66,
            foreswing: 10,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 19500,
            actualDps: 8863.64,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [6500, 6500, 6500],
                timings: [10, 21, 32]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 251]
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "savage-blow": {
                chance: 100,
                power: 1.05
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 321234,
            actualAp: 11234,
            actualDps: 21063.75,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        }]
    }
  ]
} as const;

export default e34000Data;

