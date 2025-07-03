// Stage 36013 Data
import type { StageData } from '../../app/stage/types';

export const e36013Data: StageData = {
  eventId: 36013,
  eventName: "異次元コロシアム",
  typeId: 36,
  typeName: "異次元コロシアム",
  prefix: "SR",
  mapId: 13,
  specialRule: {
    name: "限定超特売 超激レア",
    explanation: "【限定超特売 超激レア】 レア度：超激レアの味方キャラクターは1体ずつしか生産できませんが 生産コストが95%OFF、生産スピードが倍になります",
    ruleTypes: {
      "3": {
        "Parameters": [0, 0, 0, 0, 1, 0]
      },
      "5": {
        "Parameters": [100, 100, 100, 100, 5, 100]
      },
      "6": {
        "Parameters": [100, 100, 100, 100, 50, 100]
      }
    },
    contentsType: 0
  },
  stages: [
    {
      stageId: 0,
      stageName: "Round 1",
      baseHp: 1200000,
      width: 5600,
      enemyLimit: 30,
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
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 27000,
            actualAp: 3200,
            actualDps: 3428.58,
            magnification: "200%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "8.0-12.0s",
            delayFrames: "240-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "607",
          enemyName: "オオウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgEFAgEFAgEHAwEIAwEIAwELBAEQBwMTCgUZCAAUCgYbCQAfCgAgCwAiCwEkDAAlDAErDwAuDwAyEAAzEQA2EgAbGxs3EgE3EgA/FQBFFgBFFwBJGAFLGQBPGgBQGwApKSlUHABgIAFjIQE1NTVyJQCELACQMACdNQBPT0+vOgC8PwDQRQHiSwBwcHDuTwD/VAD/WQCPj4+ysrLh4eH///9ZrAVxAAAAQHRSTlMACBYoPVhp/3XFkOLrSIDY9Ln/o67K4JiG/2V4VCj1btg6/13/SgvUMCHp/v8M////////////////////////n5rMEAAABDpJREFUWIWll+1W6yoQhqu1Yr9MQz9srHZrRE8VFEJJKLDd+/7v6gCJSXt+JHSd+aGSlXkyzLwzYK/Xboto1/FGu+0AWL3/H8ADBHBxxvvvy7u3kwf3ACTgVzjgBYDo8RSQEjAJ38QrAGD2cPTgAUAG0nkw4H1mCWDdPHgGAGMKXoMJSwABAvM6Ee8zCLlEy89QwMa6IwriH8JbBHBhFLoPBexmWABGQfSTtxgQow0dB4cQA1kkBQXjSoB3ACqtFd2EAl5AIrEwAk6e/foXSAttCavQED7HEHOmTF6V8zmxOK0NC1bTHSp4UWiTY/Bil28rklmAlk+hIewAV1I7E8Dlfs6EWxgSrIUFIN7fhu264IWVi/wuFPDq817GgDa9HTb+b7V66/YtLQa5qQgar3vLckMGPYeHQGuAJpsN9ytDH7pdK5snsgZovCAlgAXLubfbHgF0WqbkHEBvQ44AEnohGPoSDvgcZk0WDEv8r+yMCGxTyoagEi/mfN3t19jrtiGYDBmjcjpZPwRLwRJmXBtTQRBjKclyQVfhpew93q0QFdIzFGFS27miJQqeC9beHqfrJWpUWcrijEPCQ55jegJQ27PPyjU7jsHk55x03u5LTVQZNWZ75mE7mHiAYinzAaRJeCUu+leXV5i6LRhsTyzXlunJwdVq0/kqRduJFK4bDbUAN1oSkISdlFdLmrsulEYin33kAYbisCze4KLOO/ETRRV52dZFSAS3VFJZFy49FkLQdL0mmuWqdqFHI84CRu3Olzfx0yzDVKnGCTcEk7P2Klx/7L8gSFhRHAE0QaqUUZZi1rqF0X5v60VPG8g7lgSNuV61fX//Za8oSU5d+zpTDaFwcjAZM9uW/X/8/v6G9lbEtdI5xTTXP7EYkfgJw3CxbAng8OfvHwhB6pKFMpEh+90qCCMJoozAybKlnxeH3982B7QSkXHfFU0BCm7HWtyWwqeDrUAD8E5JcSwCI6N2wN4BiH3vZygbjk5KIlsyUANSjiGsP4xOQhCtnbA4HA7uqmpLCaCQZfPQ7BhABm2AwWH//efL+dtmSrLShR3NRFMsL9oAF08HaKWUpIDV5/NJBAa3BmDHyJetIkxN3nSCIcLoap7qrHOYTD/2VkiFqT+qXBKlv2tyko4vuwC9/sLmIOF1BFaR7s5oXDfwYtsNsNMs4Vxw/qNgzN2RWCbT4H4A4DLitmmkj8E1j9sNdldXqy86DQD0YkxUJdwiTexoMzq1YSg7VNh1gH9/WzWgFAwjghGi/9y4fxrsdBYd89DbiFcl8LuwM0XS4eVKuemsdJcOrF1E9eXGFdPq2UU+yl0diMyH3YChKKeZ0YWySaSGcTm8ZUIIjlDWXcj+dbRFGBNCEISIklQQlIEZTBFKE5jMBu2E6RB02k3HFvrTwe1oEQ+HUTQejyeTif05jqJhHM9HN4Or/0rpX1/xIFyDOfulAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 65000,
            ap: 9000,
            dps: 6279.07,
            speed: 22,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 43,
            foreswing: 12,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 18000,
            actualDps: 12558.14,
            magnification: "200%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [4500, 4500],
                timings: [12, 14]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 151]
            },
            "knockback": {
                chance: 30
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 27000,
            actualAp: 3200,
            actualDps: 3428.58,
            magnification: "200%",
            count: "4",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "261",
          enemyName: "イノエンジェル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 1440000,
            ap: 17700,
            dps: 48272.73,
            speed: 24,
            range: 155,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2000,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 1440000,
            actualAp: 17700,
            actualDps: 48272.73,
            magnification: "100%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "185",
          enemyName: "教授",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 320000,
            ap: 6800,
            dps: 8500.0,
            speed: 4,
            range: 501,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 10200,
            actualDps: 12750.0,
            magnification: "150%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 795000,
            actualAp: 78000,
            actualDps: 44150.94,
            magnification: "150%",
            count: "2",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 15
            }
          }
        },
        {
          enemyId: "607",
          enemyName: "オオウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgEFAgEFAgEHAwEIAwEIAwELBAEQBwMTCgUZCAAUCgYbCQAfCgAgCwAiCwEkDAAlDAErDwAuDwAyEAAzEQA2EgAbGxs3EgE3EgA/FQBFFgBFFwBJGAFLGQBPGgBQGwApKSlUHABgIAFjIQE1NTVyJQCELACQMACdNQBPT0+vOgC8PwDQRQHiSwBwcHDuTwD/VAD/WQCPj4+ysrLh4eH///9ZrAVxAAAAQHRSTlMACBYoPVhp/3XFkOLrSIDY9Ln/o67K4JiG/2V4VCj1btg6/13/SgvUMCHp/v8M////////////////////////n5rMEAAABDpJREFUWIWll+1W6yoQhqu1Yr9MQz9srHZrRE8VFEJJKLDd+/7v6gCJSXt+JHSd+aGSlXkyzLwzYK/Xboto1/FGu+0AWL3/H8ADBHBxxvvvy7u3kwf3ACTgVzjgBYDo8RSQEjAJ38QrAGD2cPTgAUAG0nkw4H1mCWDdPHgGAGMKXoMJSwABAvM6Ee8zCLlEy89QwMa6IwriH8JbBHBhFLoPBexmWABGQfSTtxgQow0dB4cQA1kkBQXjSoB3ACqtFd2EAl5AIrEwAk6e/foXSAttCavQED7HEHOmTF6V8zmxOK0NC1bTHSp4UWiTY/Bil28rklmAlk+hIewAV1I7E8Dlfs6EWxgSrIUFIN7fhu264IWVi/wuFPDq817GgDa9HTb+b7V66/YtLQa5qQgar3vLckMGPYeHQGuAJpsN9ytDH7pdK5snsgZovCAlgAXLubfbHgF0WqbkHEBvQ44AEnohGPoSDvgcZk0WDEv8r+yMCGxTyoagEi/mfN3t19jrtiGYDBmjcjpZPwRLwRJmXBtTQRBjKclyQVfhpew93q0QFdIzFGFS27miJQqeC9beHqfrJWpUWcrijEPCQ55jegJQ27PPyjU7jsHk55x03u5LTVQZNWZ75mE7mHiAYinzAaRJeCUu+leXV5i6LRhsTyzXlunJwdVq0/kqRduJFK4bDbUAN1oSkISdlFdLmrsulEYin33kAYbisCze4KLOO/ETRRV52dZFSAS3VFJZFy49FkLQdL0mmuWqdqFHI84CRu3Olzfx0yzDVKnGCTcEk7P2Klx/7L8gSFhRHAE0QaqUUZZi1rqF0X5v60VPG8g7lgSNuV61fX//Za8oSU5d+zpTDaFwcjAZM9uW/X/8/v6G9lbEtdI5xTTXP7EYkfgJw3CxbAng8OfvHwhB6pKFMpEh+90qCCMJoozAybKlnxeH3982B7QSkXHfFU0BCm7HWtyWwqeDrUAD8E5JcSwCI6N2wN4BiH3vZygbjk5KIlsyUANSjiGsP4xOQhCtnbA4HA7uqmpLCaCQZfPQ7BhABm2AwWH//efL+dtmSrLShR3NRFMsL9oAF08HaKWUpIDV5/NJBAa3BmDHyJetIkxN3nSCIcLoap7qrHOYTD/2VkiFqT+qXBKlv2tyko4vuwC9/sLmIOF1BFaR7s5oXDfwYtsNsNMs4Vxw/qNgzN2RWCbT4H4A4DLitmmkj8E1j9sNdldXqy86DQD0YkxUJdwiTexoMzq1YSg7VNh1gH9/WzWgFAwjghGi/9y4fxrsdBYd89DbiFcl8LuwM0XS4eVKuemsdJcOrF1E9eXGFdPq2UU+yl0diMyH3YChKKeZ0YWySaSGcTm8ZUIIjlDWXcj+dbRFGBNCEISIklQQlIEZTBFKE5jMBu2E6RB02k3HFvrTwe1oEQ+HUTQejyeTif05jqJhHM9HN4Or/0rpX1/xIFyDOfulAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 65000,
            ap: 9000,
            dps: 6279.07,
            speed: 22,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 43,
            foreswing: 12,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 18000,
            actualDps: 12558.14,
            magnification: "200%",
            count: "3",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [4500, 4500],
                timings: [12, 14]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 151]
            },
            "knockback": {
                chance: 30
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "043",
          enemyName: "ハイ・エナジー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6101,
            dps: 3050.5,
            speed: 14,
            range: 344,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1101,
            freq: 60,
            foreswing: 30,
            backswing: 30,
            tba: 15
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 12202,
            actualDps: 6101.0,
            magnification: "200%",
            count: "2",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "012",
          enemyName: "クマ先生",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAgECAgIDAwMFBQMHBwUKCQgKCgkNDAYODw0REQ0TExEVFhMXGRMYGBUcHRgfIBwiJB0pKSctLSkwMC02NjU3ODU7PDc/QD1CQkBDQ0JKSkhTU1FVVVNXWFVgYF9lZWRra2lvbm50dHJ4eHh6eXmFhYSHh4aRkJCbm5qdnJynp6apqamvrq60tLS7u7vEw8PKysnR0dDY2Njg4N/l5eXq6uru7u709PT4+Pj8/Pz///9+qm8/AAAAQHRSTlMAAwmGwBA4qWkbJOAULJo5RoD/UmTOaXif84ngrp2Cx6z4u8X34NDr/9n/4v/v//70//z+/v/+/v//////////OKBV3AAABAFJREFUWIWVl+t6ojAQhoVd2sJqtepKZXXV0nqIAZRjAiG5/7vaBGjdynn+4cO8Zma+fAmDQWVIQ1X+ehjO/v6dydUv1oSqv5mGVjwohhWE55nUI182LJx4q2H+NPpIGENvwx6A0Ykwmp7HsqqqmjYRALLX2vNugHPKWAqe1+Z+fzqd3iMWXwylB0A1Mf9P6ESER5oSSu2V2iN/IC0OgkAZZSJIlCCzF2CgbRBLXSfJ8ilcgvTSawqDyZmyaDl1RTpvxvSYRus+QpB0n7HkuAt5Pk1p7KOeUxhusSgdhd7VBkfoRXyq1qQHYMzHSJEDoL2bTqfQBsAjnt69CdLCZcQF14jQECyPmJIQwqBHE+R1RK8wDMUQ0c6ljFyxDXtoWTNjDHAEUIJ9CIDjX4/86WPcuYK5RTEIiAMAgD5BV9v2A96Il641DLeI0QBcEcYJF3KCAkeA7N9dBylUxNJYDMG2Ia8BinYybznrli8bQa7gOPQ9PwxRQrMtEbx3nMNoT1hVhKCbGKXFhVYCELTmXbQkWlgZuKOWhIwrIwZo38EUJN3L3y/VEYO4y4YqKkiT0goSEPtGexO4IfP/pq5XBYjbjY3PIFsADKoA1GrVkpJXkABcBWCB0TaH0SkV3cOg3IOY/9ZqbMJKRISwPEsBoJcWLXEryV4O7LIaBYC1mbNqJvUAyFdA9qNGwPicJ3pOGYAh32RtNUysAnAt5fPNJHZp2FiDNM97WAmIoBhQ0qil7ESqAwRQrI6em7xVXof1AC9v7GXeAFC2uB7gOvlCmjbUsJgin0IZcM37g5sOGO3TDv2yDqiTbVBKTg1K4HejPLEsJH7LKcy6yVU+dSQ6fk8gICp6sagHTD4BCJSsnTtaATfqAbNCiLe3bxGBojy8rQfML1/rLXm7D4qqErMdQMuWRp33oiqy77AC6twpiVKwKzRCzx0AzLvvIvnYFCqlVheAvwu/A2JzhdoBX1Pgt8y7JqDtSuiANgPGn0pk6P1uDNE6t0sSpQ2AYi8I3zjeHQyeboR8jtTdWId6QOGpfBnFwXDT82Wm+67LTXWs/64HcD+IQkosl18wxRFJXD8K/ezGfB7rzp9NwC1ReaoHyGv/40DClYnz/RxtjPX6Nft8OY303cvYPPCt2OCqkn4w3tBlPj/bTjawuSTLWV3cS2fPmjR5afnweXgeLaz9SFn88bLZa4PitMJbReFOJLWdrdJQGuoLeaC8BryBXmZ/2XnZ53tD4lnyK+9ccsodXNyautxN/g8BoBc9/1fVjBttqBoQsOitOIP41bXD1eR78LsauX0tz6xGK67Kl+eW+6qpRTxsvM1IURS5Yx/kh6cfj7vlz1v8Wv76+fj4/OPpoYz4ByXseuoTKbpdAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1000,
            dps: 280.37,
            speed: 4,
            range: 350,
            rangeType: "範囲",
            kbLevel: 10,
            money: 2000,
            freq: 107,
            foreswing: 8,
            backswing: 8,
            tba: 50
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 40000,
            actualDps: 11214.8,
            magnification: "4000%",
            count: "2",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "Round 2",
      baseHp: 1400000,
      width: 5800,
      enemyLimit: 30,
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
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 50000,
            actualAp: 20000,
            actualDps: 14634.1,
            magnification: "1000%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 21600,
            actualDps: 20903.28,
            magnification: "2400%",
            count: "0",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 256000,
            actualAp: 18000,
            actualDps: 4462.8,
            magnification: "200%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "133.3-136.7s",
            delayFrames: "4,000-4,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "611",
          enemyName: "超闇獣ダックジョー",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 2000000,
            ap: 27900,
            dps: 12681.82,
            speed: 20,
            range: 250,
            rangeType: "範囲",
            kbLevel: 11,
            money: 1800,
            freq: 66,
            foreswing: 10,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 2000000,
            actualAp: 27900,
            actualDps: 12681.82,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [9300, 9300, 9300],
                timings: [10, 21, 32]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 251]
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "toxic": {
                chance: 5,
                damage: 50
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 256000,
            actualAp: 18000,
            actualDps: 4462.8,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
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
            actualHp: 50000,
            actualAp: 20000,
            actualDps: 14634.1,
            magnification: "1000%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "586",
          enemyName: "ミッドナイトナカイ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 300000,
            ap: 23000,
            dps: 16829.27,
            speed: 25,
            range: 300,
            rangeType: "範囲",
            kbLevel: 20,
            money: 800,
            freq: 41,
            foreswing: 20,
            backswing: 21,
            tba: 0
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 34500,
            actualDps: 25243.9,
            magnification: "150%",
            count: "1",
            spawnTime: "63.3s",
            spawnTimeFrames: "1,900f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 80000
            }
          }
        },
        {
          enemyId: "558",
          enemyName: "アックマ閣下",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 75000,
            ap: 15000,
            dps: 6521.74,
            speed: 8,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1200,
            freq: 69,
            foreswing: 6,
            backswing: 10,
            tba: 32
          },
          stageStats: {
            actualHp: 112500,
            actualAp: 22500,
            actualDps: 9782.61,
            magnification: "150%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 250000
            },
            "death-surge": {
                chance: 100,
                distance_start: 450,
                distance_end: 1050,
                level: 1
            }
          }
        },
        {
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 21600,
            actualDps: 20903.28,
            magnification: "2400%",
            count: "5",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "182",
          enemyName: "ハサミーマン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 24000,
            ap: 2800,
            dps: 1647.06,
            speed: 24,
            range: 199,
            rangeType: "範囲",
            kbLevel: 3,
            money: 700,
            freq: 51,
            foreswing: 12,
            backswing: 39,
            tba: 1
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 33600,
            actualDps: 19764.72,
            magnification: "1200%",
            count: "2",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 20
            }
          }
        },
        {
          enemyId: "443",
          enemyName: "ミニスターサイクロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAEAwYEBAUEBAQDBQYGBwkGBwkGCAoHCAkFCg8HCgsHCgsPDBoMEBQeCTcQFxwhHT05B34WLCwjKS04Em49E2tBFXIcNjcAAP5NGYI3NTYkQkUgRURnAdgkR0lZGaNlBN5lDdBgGrFlFcRHNn4sTldJRUQtWVw2Z29YWWU6en3/AP+XYzZCh4RkdolEipBImpx5i5VQq6jEhzJ4o6hbu7dpxce+rapp1M72sxVx4dvvtKl58ObYz83t5+b8+/pSlyYhAAAAQHRSTlMA/14VJYfAPdULmKxQdf3/6Cyi//7NudQBnv/AiQf+eBUmW0H/7f/////+Af/m//////7///7////+////////w6WVsgAAB3FJREFUWIWVV4l2m0gQjAS6xRENtmK8nvgAZphIzIAAEVmy//+vthokx46lTbZfXuzw0kX1Vd18+XLJJvYIZtvW5O3RjzuyHxddPprVH/rr9fp24Yys9sG3u/uHp8enh/u7b3+HMJkPuWl2lYkXfYv8Hx5vrq6ubh4f7v6Sw5fRkOt6v99V68VoAv8rNwg99/r/IIy5rnaAKJb9r+QfbULXvX76I8DEstvsTfq+0AUQ9nU8uPHDdPVzlYT+9/v/zsJkPpjd3t4uFv2RPWXKEId9E1+5yebnz5+bJLj5QwyTkTOMdVUV6+Vi4HNtkIf9vopcNwFAEgRXXy8DgPxo3u/3p77Ei3dF7IJC0QBglwFgs9mkQRQ5kwvu1siZLZdxHC+XvsfpzY1iqijaRJahmyQsWQWRWY4uUJ8uhama3W7X1IXigiqwM7oQqm6aps4Cr9dz3SBrzPQcBctZqprydbSmgG9TG6PTTBdKahMFQYBSFrtdfIaCvZDVO/c98ai0EtzI8pApwTwepVkeubLa789QsBf6vXuDV+KdijNp0uyw5UrQy7NaMgWA5lMWrIVpX4tQayShVqzX63mMeUyrJMkPCZfc87yw1OhN/D/p/JY/Zw3XqrXCGCPJH+Z6ohBhkm5TxumZlxWqbQs9+xjDfEmlW/o+F1JpffR3XTfUhoVhmKUhE0gDy4zGhO73xdD+EMBggLa1bbQBeIs0csnfcxmnoAEQJiFjSoRBKJRBevf18iOAPTk1ApcqS1t/QElTSARO/kAQYOZ5XDcNZfEDwLEQg6VGI+zq1CUEL1SFDr2WAGGkaaook4I6Gwysz4U0bcPVqDUQvAgt+OZOCOU2FUBgVO9qOHesL/ZHf10YRZYGAABVw73wvWWHQyYkcgEAMx7OLHv6vpADzBAqjTJEaBkX8b/zZy2TdAsEwSTqqDy+sAfjd/6j6WA69gSaL2IYmEAWnB19GcVPZQiTbJtKgTTWXKjpNI5P7nd391/ng7GomkoylyZOmK58jMHpQLbNE0CkWSIYN1pW3OdmffK/f3r8fu1jFmvVTqwbaUWsGUvLw0tnry/bMgGJkHOPq8qgqvX6zf/GR9RRXhvWNiDLypD8w/zw8grPPMsyIL0eUnrKmacrSVp5Ani6cYM07LlRJrsW5nlG9JPN8yv8y6yE5dkWv2eMkuJJzAvJwpHAd98NNisUL4q6EZAlR9LS7ZYAyqzK8zzLy+zwShwIADXGTDXLDuDhOlxBsDcrDHwLEOUqTFmyfXkh2lkNBnmZ4w/gtkkL0M5ksThGcOWuOsEPIq8FAIGUlQifPOBYKq7wd0ZPctYOBImfco4A1y4DgxUUL2IdA54myaH1f6W3G+XJAkAEcAgBQLKGeRgdQ7hxw81qBYBIkhIAQKRJ2hF4JQJoijeAlwSyYEjn5aATlR9IYoitSxGoSnMCyIjBy/MBSWhD0AgBuUAzPG/AgJoZ43DSxbt5HJ0UfwcB6QVZjhysts/Pz5TEBvmjQJCDl8PzCkkkAsZ/20/f5nGZRWHgigbLTHg9Ny2TJAy3XRClblDErKypEV5fIG4MLWD8gf0mi/P1rpD+0C8w560cR9RILO3S+ELOdV12/jkLPTSi8gf9wegdgPYdJ4bUGdkVMkcfoxM6BKQBEbRwJXWBJ4Q3Ho5/6epoXSwdyzG7ptBdMwdZdpyF15O1FcjR4Z7XAwr2xOAtBHsZO5PJoiqNFjSObRA0NyBRniAOYNI+gz9Jv3q3nKzZzPpi3TaN5pjzbp6yshUUDHVWbls5ACSjDdFDHxZVFb8/EvoAA0AlPLPT7VLxQiPYezk7/ki2qeepateoxXtFnUwIoNaeV+0bzSgKTwqPtDwJP1qZeLz43b8DWRgxZiT5Cq0AntIjFc3TEwaEkYQVglYX8fTMXnHkcoBKopSEgA3HwhJCiJvgaBmWIw2iFqjZZ39clYM+AVSGFhoosHa9C845baWEY+tJIWTi9ab2uRNnMpiPCKCAWNUKbrzNBeNHY5BR3Dv4wfwhLeNPCLZlL2kaTEEoVaF51xM9j6xHW7GuTZqiB6SIh+cuNWtWAUDLBnFgMI04InRGt/uuzjO0kdHL/tkoHA0Axcy+xiGzqwvaxsdVz4Sp4Z9FUcAidTs/f2siCTvME0dTYoW2syEQPM4KpTQuSNyKtAB6/qVz2VoUUIThTNaGk+zhc0PhUsNhhdPTSJmy4wK4ePLP46bgzmgRGy7p7EMYGjXFvdvmJDgtAJz85wFwrhVxn44V7K/uYqy0GA9m41gqhRPntAAuAeDOUACgdT/0TXt67iqoDd3wjvP9ynWPC+AiABD8dl9Ydn+ojwhqOW/pYQEwLIANPhkeLwKA/nHSJ0hF1SHItm2+3T9esW4B/OdHi/XWpFb/dt0e8JVsx/fuAUFAbfzrxz98Nv2iM/9nvUYHFxJffqdvx+vvT/d//eWHT+C58w9s0LePX69PTw93f+//u31rv5///NqJBbN/Gf1zculT65NZc2cwnQ2H4182HM6mA6d/TojOvX/UAbxB0K8EMPoM8C8Dd3heIPJ4HwAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 44444,
            ap: 666,
            dps: 3996.0,
            speed: 14,
            range: 50,
            rangeType: "範囲",
            kbLevel: 2,
            money: 333,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 399996,
            actualAp: 5994,
            actualDps: 35964.0,
            magnification: "900%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 100,
                distance: 150,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "Round 3",
      baseHp: 1600000,
      width: 5800,
      enemyLimit: 30,
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
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "291",
          enemyName: "スカルボクサー",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 100000,
            ap: 7997,
            dps: 8272.76,
            speed: 18,
            range: 175,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 29,
            foreswing: 1,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 23991,
            actualDps: 24818.28,
            magnification: "300%",
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [6800, 400, 797],
                timings: [1, 8, 16]
            },
            "burrow": {
                times: 1,
                distance: 1125
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwMEBAQEBAQFBQUFBQUGBgYGBgYGBgYHBwcICAgICAgICAgICAgTExMVFRUWFhYZGRkcHBwiIiImJiYuLi4vLy8wMDAxMTE/Pz9BQUFJSUlNTU1VVVVgYGBqamp4eHiDg4ONjY2WlpadnZ2mpqaxsbG8vLzGxsbQ0NDf39/p6enx8fH4+Pj///////95SC4fAAAAQHRSTlMABQoOFRoiKS41PUZQW2RqeHF+iJCarMnW9qS0vOXF++zU4P7o3PP+6P/x//b+/f7+/v///v///////////wD/21g2+QAABspJREFUWIXtVtmWosoSPSCijA6MAqIgMpPJlExat///r05gVVlWd9/Va9372vmkZMbOHZERO+Kf//yf65+/AH8B/gL8BfgE+MOimBUviKLAs4s/Hf3topfCTtNtW1dljqH+B/v1TveuaZ6nV1cVl39GoGiGYRbPcwtu68RF1RLSlLmnPRAo6r/CUPRyzYuSKKw/yNLrrRvi7naHNbaFb4mr1WrNrZb07+0ZTlZt13VtRWTnIxQr23HZ395+wLpPbe5biqJqliqtHgg/UaGWouqAu0WeevqOg5gzghWg4f6wB4QenY7e9RoHpr5hwZZmlosXCIoVLT/FDelIjWJ3z9HUaufl5PZh/za1RZSgsqpwGtgSSzO8JIvrJwTFiLqftyP4e5uGKjS2LCNoPh4/7H/M9kU7TrdpJGhG4FXDtPfcZ3bQvOIVZHqbz7/dhzLUZVExzni4fzjQoQR102N7IshXpb0bZoGzYT8d2Llp86R77wtPt9zTJaun9y9jGRWf7rxNXe5a9hU3halw7wAQr7gcPukC4To9HkMErMcHqVudJPXTHYCLzWNaD/gJsNy4eXf7Arh1xemESJlkDx/eJhyh/v613WaHA0QMANbvAOzeQ+OX/Y/7gE+XcqgBYGbwNhZR9bJ/n/ELMiBzv3oHWCkenr7s3+4jPkX1UEXZfC/8LaL6ZX/OiUvZd7nxGUQWAMYfLydGfMnIgC9ROfvwC4MeXZK2r0JbZD4Adm4x3L9dccF9X5zPYdmN09QXF/wS4xvJorInmaesP8oC0ihtXzhOTRY1Q5sathFANTZVAoRuTw/HKslIhwPrkwDUneKjr2e49zhBfYeuc76coiRJossFd888IFmCGxw78pdCMJIeIDK9fd3QdGWsy8LeOEUFwiVOEvzYf7tPHY4SjGJnt/4qJmolO0HRDhOssa+zpOyq1N3LeyfIKtL1Y1dcLkXdj+PQNSi6JHlg71YvukAtuJ1zAmLgbwllVzZ16mlbzYsxGXpCpj47HSC1McqS5HI5nXxL/m6/ElXjAO5mcCCDuFW5Z2u6l9fd0JaoHrvocDhcIthNsuh0MFSRfRGDBSvsLDd4mGcFKknX5L6jg1PNODTFJan75gLwCKMCVVUWGHv+ReUpht/aXpyXbd/33TC7WaWeAy8I9LsyPB+SlkBOoabvalz3dW7svpRkZi+pbozqDsxJQ6aJVCj1bN2ISzIQFBvuManhEcquJ2VRNEMZW/yL+/P1fl52EKoaF0U19ij0bEV1AgzuI19XNDMqkqTqe3DmlDQ99hT2RUx51QtQOwwEtM4/h9VIQleVRNVHZIBIWJKgmqdLUoEzqX+EGuxzd7N8Adi4aQXPXOaBo+7tuBpbyNC1aIXtSApfE1neOp4iuB8HruWcoARS/ZnB89pec9K34Kq2EQQtrgFA4VjZSbsenBUZVoLnLTrw3N7v9LAZmlDj6O8MSpz6zpZjGAFKaqyD/ZrduGFdzslO8yoQwF2bujtOtlMylNf9tyYJMYihc0rwMEvZyeFe/yHpxzA0oTswABVBQ8g9hVtt3RxUxNt86/RLYavsZR5AqVmXhg75G4ZmJc3WFZ5ZcFqAS5RE0BiZlXrFA0ld6VtvpBZLdrmggdRCsFPIWeTvWIpactBkFw+5h2zAkblfL3g9bcY2dOSfZ413j6j11oPeMZRnFfJ0bvQ0RfN6jIdxpqXxK9nI+4nk/lOHvq+FpMfNOE5zuD4KhWI3Zk6Gth0b+ChpfjneoO/Z8vI39hQ7i9IAxYshVd9J0oJ2LiGdEYQ20DU3b6YRMjWw+N8MTCCLIRQdiAao9QcFeIK0HXAE2tzl/vEM5VDVAynM7fqXMYVa7b2i60DN27EMLGG+gl6rAah/dj6DxFfRKSGgVdBPqtiWfpm44AkgjZsEGgZMM95jhFhKkDh9HbrueRbxCxpA2CLcd9hXOPpnAvMTDGVgHvNuqANNoB+kEDyrp+xdUKYigTqJjsd01ntnx36nsBCtuQxyVwUiA4GCW8DMYKX11MS6KKhXVGezH2ddn0ONY11gvhFYzgRGfFVFuI1AzBWWXkpu0Y2lt1+vZDcqorlTmFtZn28ovO3qOd1QNM1wGnzugBknWmd4jFAXWW7vgb+FIa9Y0T5AZ+mb3JD4rQny/4jz+5hGL1ccJ2zsEFc4NJTNVj8XVRmZ2lZxzqjB86+tAiV9yioUmspGNUNUw5i0gYFxVkZIenm31ZxjnMZH09Z14xim6eFoGsbxEObh4xf8PBzCNDiajm6bxyCNTVuRRW6u6yUv7bZ7mB8t/XPZzm+X/bFtWZZtacp2I/HwFP8Cz8xZkCdF/WsAAAAASUVORK5CYII=",
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
            actualHp: 8000,
            actualAp: 800,
            actualDps: 800.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-5.3s",
            delayFrames: "100-160f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "527",
          enemyName: "テバムラサキホネツバメ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIKBw8MCg4MDAwQChYNDQ0QChoQEBAdBS8VFRUZGBogEiwbGxsfHx8pFTkhISEhISElJSUjKhspKSk1HkgqKioqKiorKytFGW8wMDAzMzM/Jlw1NTU6OjlLLmdAQEBWKYA/QzxHR0dXNnlKSkpKTUhqNYpjPYlRUk9xOpRWVlZcXFx3Q6B9Q6WBR61oaGiHTrhubm6OT711dXWVVciZWNB7e3ucXdakX9+Dg4OpY+mIiIirZu2xavGSkpK1b/m4cP67c/6ZmZm9dP7Bdv7DeP+jo6PMff/Sgf+qqqrXhP/bhv+urq7giv+ysrLkjf/skv+8vLzzlf/FxcXQ0NDX19be3t7o6Ojw8PD6+vr///////9UGhjoAAAAgHRSTlMABgsQFyAnLzhASE1SV1xlbJWmt8HS6oSLna+8ytfk9f9zfN3w6v+Ak53/1v/i///y6v2k/8/99f/E/9v//9j//v//6//////y///////////////////9//////////////////////////////////////////////////8A/04vFnsAAAQ2SURBVFiF7Vf5V9pYFA6yBpF9Xx+LmRlUsA5tGTsdlBmgVqAIwYpQ2RIIS6EBURad96/PQ0851TKePvrDnDOnH7+8JNwvN9/97s0L8fd3gvjvCe4gVMjEIsH9Wk0S+BA6AQi8eW7VqKSEmZKuwECQ1kBudDM+jz3XRcMbqzAQApUjdwNhO7RHA7NgJQqCNBzNYtups8ye3+4Rr0Sx/uzIT2dPC/RpgrLJV2FYc0Y71WzmpNBt0WGjew03XuINV6rdVpFOparDXiUKNEI8ApX9Z5MhOuwxlbNSk+kMm4lVBLVFur1mq8lUM1nush5x4VfVEmT7DMOypZNUqcdnKT22FCbqgkcMrXqxwHKdStSHbU4VKCIGptniEE9nmHVJcBnk4HT+FOiHwF5ltLgEhAxUeky9ztXniVxldNgEhCnS71RPCigJpCNYocdFvuPLfvWiy/P09ua9BDIliWMKGRUtVS6KmeCLmHt+rPbFc0nK9PhvNuC0/eJRyZc0n9jkoAI+k2HcUKAjXRo1O4TvDY9MIde5QOgwnc/9uaUzqxXSxWWVXUpYridm4gCmZQShyUM4icensPa1nqJ186v0eft6Oh19iL/c0mvNKgnpTe8SxC4cu5U1GJMS0tcQjgCgwAgmFUslU1p23rXnSd5OBo3z+OsJ3FGa43DidU7huXXdWoYwEIIwTsGBy2Zxk8vmjUCmcVEN+BnT9scZ4rtFy/F1sgYhtQ/hEUAXBuX0QWhTp1GT4gdVEco1rkB7QTCqNaYQDgbz5ac4Ot8AoX1QW/A3ciEKLAQRq7TPcoP53WbjQTkX2x/fOkhPDI4N3inMa2Va9AiwDQBKcDb6+CH/7s0fv/36k1p112WiDcurdPnTeDZp5+O7Dr3FrZTIdpI7D0TcX2SW1KqVcskid1RGankZbRJCM74xfVHGOzwuox4ZybLcSIRA8yLpWNOOa18YKf/YSE9ASyX++j2x5zzM31t5c6mV/x26PZbv9/udSgRY78/gNZPSz/Y5NJCaXf4irMcfzQIvPeSYUn0+knp8BHsiCexRnitmaHZOUL86xZ1IIm+CZ7Nv7+MZnvUr8eKlruNh5yxT4jhEwA2Lfg9evBxk+SZTZ1poILL93jHAfDcpQXHYbCL9mSbX6RWCdoytAqmQSjz++iVbqaDkW61KNuzDur2SCmcS1W6BTp1xLb71Nuhy42VPiDYLPfROTRX7PEcHnWpcAwncL6lU9qTU6RSifh3+HkftKh9s06cX9LHf4cHcm6CJ5vGdQ1gOhLuRLRX+Ho20HjZu4azx3pg4tmJHC6xoq5srHzn1JqEniNHynyGyat2qDVI0X1vM+PEPgK3dD/zA/xUCoVgqI+XrCsXGHArFupyUScXCb5luUiv6hH0CRp3saQKxSavT2w0Or9dpNPp8rjv4jEan0+sw2PU6rfmr74Z/AIuEfg1TjOOTAAAAAElFTkSuQmCC",
          traits: ["浮", "ゾ"],
          baseStats: {
            hp: 4500,
            ap: 10000,
            dps: 2189.78,
            speed: 55,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 50,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 4500,
            actualAp: 10000,
            actualDps: 2189.78,
            magnification: "100%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 222,
                omni_range: [-200, 222]
            },
            "revive": {
                times: 1,
                duration_f: 200,
                duration_s: 6.67,
                hp_ratio: 100
            },
            "toxic": {
                chance: 100,
                damage: 80
            }
          }
        },
        {
          enemyId: "293",
          enemyName: "墓手太郎",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 750000,
            ap: 15000,
            dps: 7500.0,
            speed: 4,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2500,
            freq: 60,
            foreswing: 22,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 1500000,
            actualAp: 30000,
            actualDps: 15000.0,
            magnification: "200%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "revive": {
                times: 1,
                duration_f: 120,
                duration_s: 4.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "498",
          enemyName: "タッキー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 329000,
            ap: 5000,
            dps: 1648.35,
            speed: 8,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 91,
            foreswing: 52,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 329000,
            actualAp: 5000,
            actualDps: 1648.35,
            magnification: "100%",
            count: "2",
            spawnTime: "103.3s",
            spawnTimeFrames: "3,100f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 420,
                omni_range: [-320, 420]
            },
            "toxic": {
                chance: 100,
                damage: 35
            }
          }
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1999980,
            actualAp: 45000,
            actualDps: 43548.4,
            magnification: "2000%",
            count: "1",
            spawnTime: "103.3s",
            spawnTimeFrames: "3,100f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "032",
          enemyName: "ダチョウ同好会",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQECAgICAgIGBgYGBgYJCQkKCgoLCwsNDQ0WFhYdHR0dHR0gICAhISEkJCQkJCQlJSUlJSUmJiYmJiYyMjI2NjY4ODg5OTk7Ozs/Pz8/Pz9FRUVSUlJUVFRaWlpgYGBjY2NnZ2dsbGxtbW13d3d7e3t+fn5/f3+CgoKJiYmKioqMjIyXl5ednZ2jo6Onp6evr6++vr7CwsLLy8vT09Pc3Nzj4+Ps7Oz19fX5+fn///+Xho0TAAAAQHRSTlMAB3YVvtqMoB/zXyk2Qw9RZHOOMMna9aCyvYVX7nWdy/+0/5b/88rg///Z//D//+LE//L/3fn98fz+////////oApklgAAA8RJREFUWIWlV22TmjwUNcu+UIGKu1t17cpLRAgi2MAmhRCS//+vnov26XSmUxX2zugnz8m5Lzk3TiYDAtnGkJ//FZazWptoPN64S0oWe645Eo+mPu8Eb1hojSOw3riSeFFrHn5/+fp1OIHpSy2DL0zV/OfHj+0Igr3SitO2aTrBDt5wAuuoIZSqanrYb8eksO96go7mPtRgOH6C1hzwWtXJbAT6JCHkSksWz0bPkhlKzZYjp6APtAUCdzx+YoCCcvoJAuiDOjqfILCPWu0/UYKJy7QMP+EIaN1o4d3eQ4QM2/nzPCOWut7cADx9mdPn1du397e59ftI+6h0eXkKTTAse4oAPvd3JMvSNNv5U+P/DLjuLtcQPftz2/Mtw/V3aX4Oslg8midVFmRwpQTIq1lSlnfL3/Asy3Bx8GzXOd+li3No2rYnZNuxd5L12P4T4AhXqvaT0JwduytT4Cb7Q9tyQcgJnfUMOOccjIzxwyputW7DSxm4XHW6q1I4P8tTHOAUqhgJrUVe0IIC/spNco5Ktori/ngSRNCBXkKlFeWd6t3sWg8svwGteZTnaRRE2bmIuNaykGe8rteXMrBWB+gzi6KcQOUCcqpjRJVu6C98t7cvCTCXJZimJDjFOcYn/TkhkHlTnfGKbS7fA+u1UrKhmAQ0Ss9DgDm4aP2LgHtXrNjyoQ1tQ1LI4JRABlpoIRp6LkB4bakiJyx5Xe8wZgVO+2nI4RtXbSFBP9/dYOaG42427luQU5iCEwEUhKuqEqIqbiE4x3QRQBbnacARaTtJCWH58lYrQvYqiEiQ5hkhNMI4yqRqW1XebKbG47cIUxpFpBItzGPaz1JVl/NbCSaOT6Kma0WrlEyhEiSVbLle327nyFlhoTrZwdUgKcz1gib2ZNA+dBKppAIC2o/Ebrl6HrZO0ZypPgSNCsYOa8McuAtsMD+luzqvWsljd+gyh4Gs4ebVRVELFq+twfjNse5ElRWcHcL5YDhcKdjAZfjKusZzjDFPEWsvZWy4Zcu/j0BP+kcEE1v0chQ/RxKgsJVA8KHHE8hPEmxlu0XWUX28jCUQ8AaA19DYtwxaCzabmDG0YixBDd5hxOLiGrwUmxrEG/HlLXSRgIN4I2a3O9BfBOGJYPSTdsOAwBxPgDwO5bOPownMuAEFc8aXI4toJfLgolnZJoOt6BzIa3jiOomgibeZjfiTijzBs8MxTYuU14eVhdAAIchypnevlUjzmsJajNJgcf/09PT4eDd1btKCpk/3Dw+L9/fF4suf8fBw/+T8S8h/jtWr7rL2CkwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 340000,
            ap: 7200,
            dps: 12705.88,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 680000,
            actualAp: 14400,
            actualDps: 25411.76,
            magnification: "200%",
            count: "1",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 78000,
            actualDps: 29620.26,
            magnification: "200%",
            count: "4",
            spawnTime: "173.3s",
            spawnTimeFrames: "5,200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "Round 4",
      baseHp: 1800000,
      width: 6000,
      enemyLimit: 30,
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
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 6000,
            actualDps: 4390.4,
            magnification: "4000%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 240,
            actualAp: 600,
            actualDps: 999.99,
            magnification: "300%",
            count: "1",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 52000,
            actualAp: 6200,
            actualDps: 4536.6,
            magnification: "400%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 294000,
            actualAp: 16701,
            actualDps: 31314.36,
            magnification: "300%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 6000,
            actualDps: 4390.4,
            magnification: "4000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
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
          enemyId: "615",
          enemyName: "大天使チビネル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIDAwMDAwMDAwMDAwMEBAQFBQUFBQUNDA0ZGBkZGRkiIiIoKCgoKCgpKSkzMzM3NzdKSkpOTk5WVlZ0dHSCgoKWlpaoqKjcvBDcvA/cvRHdvQ/dvQ7evhDevxPgwBq4uLjhwh7jwxzjwx7jwyTlxB/mxy/nyDPoyzbu0U7Ly8vv01Dz12H12mnc3Nz54YHl5eX96Jvv7+/19fX7+/v///9ZamMEAAAAQHRSTlMABxMtOEVod9ZZiyGAmer/pPe3xf+t0P+64///2vf+/v//ByEVQDdLXW7/fZmPhqG3qsjS/+Pr9f/6////////a1ZfFAAAAudJREFUWIXtV9l2qjAUdcIBpXFAEWLCIE44tFZqcyOQ//+rGxCs1nY18b7ch26XrsTF3tk55+RES6Vv4Hm+Pz3D933P++65r8nTxWq33TxzbNLPzXa7Xs6moiLefHN4e31er5aLxWw+my0Wy9V2z79aT8UE/JfT6WXh36znTZevp9NWzIO3O57+HPY77mA255hxB7v94c/puBLchD9b7w/H9/f34/GN45gND/v1XCKS3nTO112tM6y4l7lwCP9PKP2BWpHktJX2ZVxFNHa7cvwGwqZymQSMMSRloYYYiwbFrOVwAbMsI1DnayajYlYeJRGqy/BLCmYsvghUECOaFL9UViFhgZpPOi4jqpwA92Az5iilal3rmzB+QKA0SSM/wG5IEx6PaNKRLYRxwmkRJ+dwP9IqBpWwG/BEtGT4yuRq9VwCVsX5bfOOzxjpiwv0yR2dA9eEN4Dvl+fFGQqXk1YYiMJiJxAQFg9+pp4xYheak48cyKNiCvIrkw8B93ofwgKoYNAwS2DxHv3MzVA2P0WQulEWSOG21L3KYuJgB7t26sAWrsXrNNKABmlVJYyOxLuSFtyXUYQkSrncv1Mgcsex3MHh1WlIiDOUawiVVtPAeShJWkZP9VpNOAStwXDi0ihOMg/EiFmSRIFjCXtouYX7OAgptuw4m4zF/U/OlceBgaUb0LYpY4HE1VBDNK9epAMAHGy5LBrJRLE6tEnCYhamfOAi2wlN4W6SS3TGOAqtTAAAjLT2z5xPqNjUAgbQLUMHqClN5x4cRrkDC/IXEu5F1wI2v050oOsWBFDy90WGtK0QgwcAQmDI342lrDMSC0DDsIAudSsV6AQMQ2jzROg9+RxwVMyYsgjrABJT9m4+Q0FpOYYgZI8kIUUL8WZKUSJzK96iNnZiRmP6sEDaG3AYMyR5EG5dNIaTUeMfBH7xi8dRrtSUer2jalq329U0tVFvKVWZPy1VddB86vVAgV7vqdn/qi39BRfSoyqQRkI0AAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 4500,
            dps: 849.06,
            speed: 7,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 650,
            freq: 159,
            foreswing: 40,
            backswing: 40,
            tba: 60
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 4500,
            actualDps: 849.06,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 600]
            },
            "slow": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 294000,
            actualAp: 16701,
            actualDps: 31314.36,
            magnification: "300%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "43.3-46.7s",
            delayFrames: "1,300-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 52000,
            actualAp: 6200,
            actualDps: 4536.6,
            magnification: "400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "445",
          enemyName: "ルーパールーパー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAwMDBQUFBQYFBgUFBgYHCQoJDAwIDQ4KEhELFBMNExINGBYOFxcOGRkPIB0SHh4UJSMVKSUZKSYWKycXMCwBPj8eNDEdNTIgNzUdPzohQDwhQj0hQz0iQz4kTUUnT0kmVE01U1EzW1YuYFYtYVc0amE8bWg8bmczdmlHcGtJcG03gXNUfnVRgn1YiIFclpBcmJCMkjRpoZSvpBpurqd1v7jbwAl50ciJ1suR4NWW6N2d9Omi/u/////3JkHNAAAAQHRSTlMABPgOJY6mM8UatUrePnNZZTKDzk6XrARjiHbdnvjMt+r/3orO//n+ouj//7z//tz/6f7////9/v////7///8AIKrvyQAAAnhJREFUWIXtk9lymzAUQK3KiUPwvlAbzBpLKsIQQhQUkCD//1cVEC/TaTKZ9K3D9YO1nXN174jB2z/GoBf0gl7QC3pBL+gFvaAX9IL/VPDlgNvF+2CtfZ26Cu2wh80/0J3td3igh0F7BWh4e/ANwcTxA12BYGFgZ/QVAo40AC9TzSXYUcVD1yLe5P1Ww+En7Rg57tJdQzBZd6XPAnpY/FQVYGxoXQLduXc/uYFBbRKaQyc0ARxCuHGI5S4GcIrxaqj2Z8FuQ2zrYwFYetinwXJFAnNjGfrSI9gawfnKpu5I1zQjdkNKPhIAbbF+ONgojonvU8IICh8tO8bHo2UjT1+G5hxjj3ru/O/0+uH4xGVJkPrFNEbIpzQhrJSVTJI0NA1iOBRRtBqCP8jRbGpOd8dcVHVdVzzPEIopiVVQwtVSyV5eX5IcI0wpwd4OXsOT7f4QZixLeUN3wQghTXpCaNasSvb8+sIqESFqb2b6hQeL3eEp50XBMyYvfF0kWZGSmMSIsHahyp5ZKmuBrdUcXOEPjwouGv4qfQvUtShFmaKItRuV6oMayMz2jPMj0sx3vOC5OGGnEJUo0iTyados5nm3xVPf2nUvbAAmx7xlWZZkrV5172wouYyIrxqBslYn60oKIaVkCHvTpgg4b9LzlPFSqOpFoRRVcRYwUWfI95EflQqtK8G5OiZLzoPNrv0kZmGTPjnllGkua8nPBlYoXeaTshCVzHPW1ViJp/0CdE3Uf6lwxziKklTVGqlM6kBKokQ9mTSNimZaqGGEMsZy3paKne3lMwQq4Eif3tze343HY08dyXP84xR20qi6udpe3d3f3kz1ywv8DSQONTXmc2eKAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 50000,
            ap: 40000,
            dps: 150.36,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 7981,
            foreswing: 111,
            backswing: 7870,
            tba: 0
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 400000,
            actualDps: 1503.6,
            magnification: "1000%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 10
            },
            "barrier": {
                hp: 10000
            }
          }
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 240,
            actualAp: 600,
            actualDps: 999.99,
            magnification: "300%",
            count: "2",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "66.7-70.0s",
            delayFrames: "2,000-2,100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "059",
          enemyName: "メタルゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgICAgIDAwMEBAQEBAQHBwcHBwcICAgJCQkKCgkLCwsNDQ0PDw8REhEVFRUaGhoaGhofHx8gICAnJycoKCguLi4vLy8BWwA4ODg5OTk8PDxIS0dLS0sscisKlwldXV1gYGBpaWlzc3N0dHQEzgN7e3t9fX2FhYWJiYmRkZGdnZ2mpqawsLCzs7O6urrDw8PIyMjOzs7W1tbg4ODr6+vz8/P4+Pj9/f3///////9x5rvBAAAAQHRSTlMABg0c2hMly4s+5/P9MapXb0livX2L0e/+oMOtS9v+4L3+1P/+/+n///H//tf/6f7////q/////////////wD/KAcdYAAAA4ZJREFUWIXtVlt7qjgULeKl1OLdDuqMCjYEy4kJOQmXkAz//19NwOqxPVLpzMs8uJ78wLWy985KFg9//0c83AXuAneBu8Bd4P8k0BhGp2uPx2PbbBnNSRf07mTl/TgcfG85H3a/L2FOtnuWCSEyTsLNdNj65vLWwqeZyNIkSSiju9e/Rp1vCVjLgMUaFCFKENy97TYz8xt8expyTec8eH11QUDQDsX7hdW4DePRLdfnUbR7e9txwYHLlSDevKmEOcUxp5yGAOx2kRTQWSeFihHejJopjDdRzHAIEM+SJFcyoS5KBQky5lmNOpi5YQgh1tziCAFLMCnxqIkhOgMXhDST7/Q8z2mgNzSThaKLJj2YWy5O7EKTQgS5ev/dSMD2suICKcKpPPJVNG8iYPnn5iuaPJWj5GHSgG9M9rK4DuGPb9O7kymqE8i87g16y55t926kagSS1ddHyhzPPZJwkNTwC/blDDvDlR9lSlGc/xsBw14cuNC1KyHqOiji+haM8ZaktcRfQ6w7C62hh0CYF7Ju/hWUxDU9GEOPQSeSGWFfV5F6dg2f51EkmOvU7uAR+f6qFe0lldqw6dpB9QM8NoFn1wYwR7nSxDQgN/iFIrMrF8LYSwWNlZK5vMVXUSVgdDoXaWUuohyvqeQ4+5quIQ+jkjFarRY6ro470hr5QnKWJ+t1fFNA+NoInbnPYkb8KvIMc+QnunSlmPvZwr/1o4p4q+PF3tAkzbIkCv3lbLbaJwmKtH/y9GwilTHKsyueknimy+4uISaRTh7OMFhHIkcuuZyeKlIIIAD4d2unlZWN8QvQr8voY2Ggr/0s/Vh7jgHhBEPAPhShChEOqsNkezpwWRl+EcRXCo0h45xxgsBHY0viLisnd5cBDKvwZQH5LKCKHJE0KaOxrO/yDQMUryxDZ/+LGxK9BsUBgJ9mpfk0qPjvDf5anwOiI8ab6AJCpufnbzYv08HUJ2k1wdM/MwLZUYCTcwtKXzORi4V2K/f00SFk7y0mltXtdExr7u0xO9chQkjTiq6zOTo9VYICx4GE/fz5Y/HQmqxWM+t8N7XGvednF1Xe0F9EQYgQRggFEMVCx2L5kUQJeK7wMvvT7lRH4fJI2YN2v//sOM567QIQllwIQ4xxGAQBAO7acSp2v98eWNfC2TCt4ehxMO312u3209MfJ/T7/acS+mmvNx08joaWWfL/AY7epcqagI8LAAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 22000,
            ap: 6699,
            dps: 11165.0,
            speed: 10,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1155,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 5
          },
          stageStats: {
            actualHp: 66000,
            actualAp: 20097,
            actualDps: 33495.0,
            magnification: "300%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIEBAQFBQUGBgYKCgoLCwsLCwsLCwsODg4QEBARERESEhISEhIYGBgZGRkbGxsbGxsjIyMlJSUsLCw0NDQ2NjY7Ozs9PT1AQEBISEhPT09QUFAQjg9Abj9dXV1gYGBnZ2dubm51dXV2dnYC2AGAgICIiIiJiYmQkJCZmZmhoaGoqKiwsLC4uLi+vr7ExMTIyMjMzMzV1dXd3d3j4+Pp6enw8PD5+fn////////s/FvEAAAAQHRSTlMABxAZ2v8jLjnpSVxnmLFy/4DA4c2L7J7/sP7p18P+8P/Z////7v//8f/////z//7//v///////////////wD/U81WoAAABONJREFUWIXtlmt3ojoUho8yXopa1NHxCsJMCHASEwgECJDj//9XJ+Cl1NrLWvO1b/sBNfvZb5KdHf757y/1zzfgG/AN+AZcAe+r2/3gxy9IM0Z/RegYrmO8Jmi6Mfw6oG8m3Bl1WsThynGXXzelu7mIzZeMHd2kRbz6MqBjHPNM0JVWP9fqb6JKhl930FnSPM1yf6YN9PFsNjNmrihTd6IPta8BukuSpWnGnMncPVJKj67tAej5vrPSO+8FdbraYDjoa1q32+1PIE+V6NZKRFGUpWCBBXlVFXRvjEbDB1PpDIyVud/vzc1mtVo97yycKACnXlyDsjzloW2nJyljd7fbL1Wmgd7mdEemz7I8z7M0iePIpgQAFPKUJ7yxUiu0wtPplEIA7INjLha7/ey2Il3DSSp5uqqAIWcY0XNswhoXKYcKUCEkitBTOUieuuOr/5GTnVoqIKLXvGkE//xhKpwxwBUgiEWYsChOylzQyQUwMGPZBpSQxFfnPPj972+kfODAK08nmeTRektElXlbFD5fDMyOVTteVh6+GUiRApCUpxFgTRaZWdNtXMLpmvqzq4FXE1BjiHdbupTBP4HakRjiyypVWeRhAbwoNAdnA8ZrA0oJiCi7EpK4jvcC8ZKgFFVeCnd8Lqqhye/iZRkE9LYKKaMJBV5+N+hU+WdAfxPeGzidOFDbwJs/lR0DGwl5N0RKuuw0ZX9kbwEyBKoKEqLMJ2FgB4lgUSaKqlYp8lzNK8QHowboLkXVPV35CwFEBFPkAYDTSiAYABsGCCEPQmhbXoAOy7oQtQ17CDjJXAV7QUBiZb6uv4qBRCkGKMuZzcvy2NSh7hYEPYhvGFVZyeY35qktSAEXQuQBLUr0y6e0mUFnRkqM5TuE23y8UEopAugpAZSyzUi1mXG/3sK57x/ec3BTZmFBcFaq/HnOcOaOmj7X1MDMGE3QZw7C6RZNp7Bs5kWiaPXS2GrQ+PjZDGBvDaa9bVNKwuOXArpp7H/iINv2trDXm8b1hzjInNcXjDoKH8fLcNqzgQKE9biQso32BvAhoaqzTy8ASaOjcdeYP3MgrF6jdVofABy6+l1DHvmPKvFF6XraAEB5UjWJQ2dwB9Ddt4epLXaOXzNVTLKi1OnfAYZO8VG8pGr66n+NsDpKmCWOrqnbp7UOffNNr3gFwCragsS2MaXE8gRZmKa5adVCd3PpSI9XQpLpluZFDrG6eFJgkdgOkxi3rvrOkjUDq+oxIgcwJAG0Aaw7gW3ZWxt49nOrnFVTrfKYBujxWkhBAxylomlErGkxAMBDqxp0B6svPWjfN9cbQrWFJgWsL0ZQn2nbalkYLCxEECOAvlcPVUZVCjugEYtxyDknGM9fdlPboDhhnCM7vquIy02SIBuQKKZxpsTTpqf6rfcdtQhFpt5ImL1FWduEZM0GZ6qbEp6qrly/ayip2bjz9pEcOgpa3yDe1kKMi2ZUoYZZuOZVVK2aasM0pIRg5Puus5kN2idKW7HifIuFu+efzXap5dr+nM/dslnDPHie7ALVpDEh9vNIH2ivD2Rn5BfZ+TI/jJck57Xig9EfmplsdJwN93l9q8jqvh9dqlmha+HdZHmIWK1otxyN5wA1OkzGC3h+3Bl97Q2ia8wXi59KT08/fjz9Oks9/ni66vqovnuejG8l8D+CC6kUQXn5ugAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 240,
            actualAp: 600,
            actualDps: 999.99,
            magnification: "300%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgICAgICAgICAgIFBQUFBQUFBQUGBgYHBwcICAgLCwsMDAwODg4cHBwiIiIjIyMoKCg3Nzc7OztFRUX/AABTU1NXV1dcXFxnZ2d/fgN1dXWBgYGRkZG0pQD/fwGgoKDMsgXXthHZtxKvr6/YuBPcuhjZvgjbuxnevx//tALixCS/v7/ozSzp0Dfp0TfJycns1Tv22zDX19f25zn36V3h4eH//wL89nru7u7++536+vn///+63Ak7AAAAQHRSTlMADBQhMkFR7maevtOOdYKw/evE/dn+7P4B/u3//wL///8EAv8JJhn/NUkLXXMEjf+fxLL/0uD/9ev/Afz//v//QCpS6AAABixJREFUWIWtVm13orwWHRQUFEXFkCcmQ+JEi7Uv2KaTMTbF//+v7olga2fUzqx19wdXQLJzzj5v+fbtLHa73ffdbjFfP6zX6/l88fADHnfnv/1j73yxWN8sl6vV7QlWq+Xy5maxmH+/vvu/h/XN6vb+cfP89PLy8wQvL0/Pm8f729VysbhiyW6xvH9+2W5/OdTbAAeqw6vt9uX5frW+bMXi9nn79vb66+X58f7O2Q2GO2fAm7v7R6B+fXvbPt1dtuFm81pVb7+e71bLm8UaFFzsHh4eFvPFGmS5Wd1tfrn/n5bziwSPr28VWPC0uQcL6vNrG2oTfsLf1esVgvVqA98AXl+324NwNZ5efm63r/U/2+crLnxb39zeb55+wsfn4DR8vFuuf1zcD3GcLyCOYO5mAwdDAA54AlM2EEWnzZUYHDm+PzjJbmr9ayxdGq3Xi4e/zMaaaPdjN68BifzfP+z8/8LzjqtW27v24Xm0gkHHa1bDKPjn0/1Bbxy13bIdTrJx+I8meEE0ZmwSuFU85TIbtP5hMyBIMmGKLPS8TpJJo7L4bwlafjiM42EyK2ylSdQJe0jCCie+9zdOgFy9aYazMZbGGkW7/X4qbGU17ibDztehaA8mGS+UylEuOKMUpwQhqUsp0CjNplFw3Q/PjzOhbFUpkiKMKRey0CXDBGOMcC7FbBJeZfAj5/i+0hxTUShjD1AM8VIppY3VfHotmof9+6oyUhRloWBpykLKQpBcgRNCFNrwiX9xf2uQSbvf763WWklZWlPkhOY5zzGilHGeE65VNrhkghdMuNsPJlRGKWvLnORSuVgISoW21ggITV4n5zkD4pmq9jWqam8LSqSp6ietD9SaciOSSwT+BOK9P6IqCC1tzfUOmzMtJxcIvM60PNlfElI2x3+8tJyqixZ44cx8nGUYKurzy8I0FCAuJ2V+kWBwQlBJxE2zAukPDCCKAIJZdCGVvOEJgWb46I+RhIG41UEUQYrZ8GsC+BjVEXVrWzAJBFbmpXUEnTN54AWd1sGFo7ccFbWCCvIJfK+cgrqQjBbZudbWjnqdVpipqpFcM6Jr+/O0WbnAoDSlcnoulf1eN/IDyANrDxQK57UHmoyQes+MdDSi4mwtBBM0HvjxzBh10EFhXueUFZS/K6M4w4yfzSOoAtILOllppGoIamfAcciCZmlUCaV1Ng38iZRZHE6lFfLgAhFOto8MtK4yoSIxIclZDRJh+DQZAwE3oKSmDKqwOgbSlFJyhBk0uBSN4zMmtONZIVB3xCQjsihKaImECrO3B5LKaKUEYkUpEJFne1JrOEYQoxQ5QPfjHNEcMliVjRRgFEOEYSytJknwe3OG0YFpLmQDAX0IC6Wt4fJdB6slzzkUmKXjSRJ+dsNPWFm77HLeGi0JovBxreWplPBoMMrZZzdacVa6HKya4slFwRAWGuZSru3vKFBKRX4aCy+YQuUYVecepI7ggmMCxWAFePY78CiFCZGFJyEYOgOKun+4tqdlziEIrqtLhlNMaAOCUpAaYbBxNjxJwwRrOKxw/gMRlpCynDKIoksBAYPNNNA5lgxBReZ8Fn8QdHrE7LVwHdkaaEUCMj5nuTB1Q8LlR5+DngocvMjzPwiUKN1IK8ECkVPJGOV1SxRYvRNomhuOSlMylp244EfQCBwBzFQXOl6WEkNG1kPmMwG3EkkjCJ2eiNgKpwKGjtNASWtzIgSBoin3RwuqI8ACqxmFOYU/lVQ7zmTJealhhpWmAK1hmItjVJEoj5CYKi1h7NPx5wHpR9Msg3ARAvlO4SYBdwHdtDFyeN8AqGezbJxNh59T2fM7wziKoqSfEgrfUdYMRSDgoviAZGkyGAzCzh8V7bVa7XbbH2aFdjD2vYZcl/yAwnHbu3zX+t6ZCn0VxRe3xXY8rp0FR2YN4IE2EoD/0eX7SS1nArWajhBNe/GwRjImUEAjzFA/Hob+F/c8GE+lHPcxB1O9GkGPFLTXmxUz5/4X2z0Pkor2ozHuD/wGAbg1HYRTOoXxd5WgHYSDYdJFo26vO+r2e0f04SlJ4CeC+F1zwR9EvX6/exH9fi+JgysEXjvodMLBAG7asUurd7jnIaRP2An834L4P3Yyew77MYJbAAAAAElFTkSuQmCC",
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
            actualHp: 52000,
            actualAp: 6200,
            actualDps: 4536.6,
            magnification: "400%",
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "Round 5",
      baseHp: 2000000,
      width: 6000,
      enemyLimit: 30,
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
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMDAwMEBAQEBAQEBAQFBQUGBgYGBgYGBgYGBgYICAgJCQkKCgoNDQ0PDw8YGBgaGhodHR0dHR0eHh4hISElJSUpKSksLCwvLy8wMDAzMzM1NTU7Ozs9PT1ERERFRUVJSUlOTk5PT09YWFhZWVlbW1toaGhwcHB3d3eCgoKFhYWRkZGWlpabm5unp6e0tLTFxcXU1NTd3d3n5+fy8vL6+vr////hNFWuAAAAQHRSTlMABgwS8qXX+yOXshkqwOcxO0VqjHZcT4Kp3nr3a4yX7P61wabU8f3dzP/0rv3o0v7q/vL///T+/f7/////////tVrXHAAABXJJREFUWIWdV4t2qjoQLXDaYwteRBQf+EQUsWB4SRIg8f//6k6wPedqkdo7y7VQZHbmsbMzPD09aJI2nM4sTZUedbj1N9bR6RQdN0Ptf7l3LAczzquSRGPt50FI1jo8VfwMxstw3PsxQs/JS177A0KRLJQf+sujhF2WB3dSUqfzQ4DOmHwsX1GMUOYa9W3p0UzUkVd8hI9RjIM0GYrbSn/0mL80dD8D4IwGGYprAKX/8vIgwCiq6vzFh6WBH3j9nmHNPfvtMQAZACpSY/BzGaxW/tZ1vfCU743HAJRxzvJdTAilhKZBhmlZFGVVRDP5QYC3vPBXq9UuyHyU5nFWiXaWyfRRNkh9L7bBH2KPiwIhCu6MRFP1QX9o43C8hAjswCdnRgvOSxy5/Z+wUeqMtnmKMiQqeWYkdAa9B/P/k0XEWJmmgtAMuwOtwV1qI6ayyPm5QFS0krjDJnd9Nh/c3+e6SwWNRQbUGzRFr68THG2MO4kpo4gBBzNBpHDeVH1pllS8yvdWUwyyPoAAzhUiUIBs3Kho2lqkx/LFV3S5N3KWonrUh2cKr3GNp6HYLvxMnKF+k4U03J/SQOxmssoYz7vNkgoA9U7rmq+DztUS+p4UCDzPPF/5pEKTYWME2joijOWOofSen/v632ckK6yICIDzNEAp9VfdpiZCF0fuKXEBXTGXy791UqzNgWYX/qCVH2RLG90RRNmam5YClAsJjcwPnkuzIykqABBqiFaxv1tO/EljCPCwLEPkmkM4p96HUqgboWUkIEwA+D5sx60duL1GgIsNo7pem0s71UVccuhugKsKBxgFCCEAaBEiaYqFfJZhXevObB/D4pxh8AxyuOx2O9ueWPcB5DmpxTd3dCjsIiqYqB/IR5riCvZxgCANe3AfQN3Qy/mRjA3jHVfnT7uca5ygnY8mLSmoNaWBk2XieqJ0N8ZKGu+eW7SoBuBivQrF1Rf/+mjB6zaAOgWGSVmitOJNCOfq2DJhXIpYBiiOUdHoDvBRCw+kqRCNAhUYtt4dgCr8hkigWjGjNgDwc1MS7dOB4UHpaMqIs8eUNJWRJWabomsOqCfJGJ5aCy9jXyPgdN+WgThIOc9zlliSdfxaRmhv1G89UqRRzFiMy2OvPgq+AFRZg2xeAQzDskKUrjXjWH5x50XaxuPadLcooYtzdXr6HGs+r+JUjL8d0NQFiGiZDJUF+fRiH/6sJPG28Vi6ymF2oqiIDHlRKwNMVbmoJYPhJI/juE1MPsyKQMKOOjSBFAXFMcphIClPWz/GtKqS2bezob4/HfC+8yQbi/d3Z5vSsqSn49xc1pMJ2Xw7l/SOWXDaiB2rqKq+8MLQW097su7GCAQC+vuNvzJNEDr+Ub2OYVmGGCe0YxFv84qdZq3usmG6qe/ekk3tqFaIvcE6KVtzkDoz117t7Bt/yRg778fdzlS0eYSX5vAuFeClJkhJvr0B6IxjqD85jKQndbr1Ubi4g6C8ohTDJJLvrxF6Hkx20IC1CiwBpS+jebOoqeOgFlKGr/nacephXQiJ/i4O6iJq3lHywE6FDMEYc/W/uhak5KeFLJv1mwvH6+YkOm9xBQjYMa7opmwovK1V2VyWx0IpOT3c2RFSfxljxpL+DV2tMEO7EKYHaRCSgrN42TymiCd3O5y7+g2u5aKg2xczYGfkRAVFaN4cgTzHSfdwGN38qzk5/hwAZX1x9A73aqCuyamb4I0mgyl/zPBIOFPhi7gtq5p1pMfmYU9ZJHgSFNHYNF9fn8HeusJeDqndFT9fX01z0B/2J2l+U+cPM95s37bTfPX72uy/N36B/fPLDpavTSes1jdhzcnyH2G//mO/Lxdx++Wl2317Nvt/X5//BUlcOtC5guMJAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 50000,
            actualDps: 36585.4,
            magnification: "1000%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "30.0-36.7s",
            delayFrames: "900-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "284",
          enemyName: "ゾンビワン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 5400,
            actualDps: 3446.82,
            magnification: "300%",
            count: "2",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 27000,
            actualAp: 13200,
            actualDps: 10702.68,
            magnification: "600%",
            count: "2",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 132000,
            actualAp: 39600,
            actualDps: 25276.58,
            magnification: "240%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "50.0-53.3s",
            delayFrames: "1,500-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
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
          enemyId: "634",
          enemyName: "超舌獣ラングマスター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwQDAwQDAwMHCw4JDRAKERYMExgMExgOGB4RGyIVIisXJS8ZKjUdMD0hNkUuNygjO0wnQVMqRlktTGEvUGYxUmkzVWw0WHA1WnM2XHY5YHtoYQ48ZYE/a4hCcI9GdpZIe55MgaVngWJRiK5UjrZWk7xZlsBcnMdeoMxfoc5go9Fip9ZkqtpnsOHKrQHlwyq3AAAAQHRSTlMAChYiLzxOZG999onU4pKdqcX/utv/8uj/2P//8///////////////////////////////////////////////vOSQoAAABm1JREFUWIWdV4l24rgSDUtYshAwAdxWJD1tliWNjfFgjDfm///qSaY7050A6ek6SSDnuK6qbtUtle/ubtp00ru7n9x+5qY9sm+jIZ79OcCQVXgeb8d/jvCtahhs3gZ/HAFvq5aw7M+SmLwsX8WhqiuoN73/7j6YeHFiMDnVp8wPFi/j/n/zXr5RxpQScJtvBY+NYm/z+98HmMJdYjSXkUSA81DJSMeJwovfLEdvNPOplJGKFGKZUdHZVGzQ4jei6E+/ES4x0p0XoyKKtI6E4CJSJgSzL7jojTdhYpTS+AygBAtDDBD931+IcqUNfrrdFKNVYkmzh+JIudiVZFIyLA5//5MeJGFc0uebaQyePESsoybciDBSnEiLYmIRpmXd7LP8cEzXo+v+4w1BHtMudIigiRSTxoWiEoPSuqzruqra/CpCb06MNoB16SuDhbYIWNpCchImeVWercnXw8vhL2Rig0fUnPnjOHF/haSRyY6NC+A7QvZ0qRaD1ziRjj6SKKVc6sTVUEVyl59OjbVi3zRdGG2y+KyO3iJx/jZowAVnofv6vYViHabZLqGvTzirO4hWzT/nn2Th2UVQigMZ/TAVqjpZT6fj+97daI7SykJUDZ1+TGAltltt2816KB0B/Y4QSnYs1j+eu58DfWxtMeBHYYyePQDwdycNbfkcDbaCAeSshv/yPnzcyEPTHDYfk+g/Q+B/P1cxFHKbEaJaeh7lW/1zxP3pRtbbxacqrCNJ8Nborg2YSyZaeVwFHo6x/vXxwQxsPmniEWsVAcEpJqoL3grB87CRgEYg+zhYh596qfd6Dh0hDM71s/kTj2irTGZBbwjgbGPkGlBprQ0iVgAyErYcXCgpAUDB6uUrgGWkfxReBFoKYaMRWkmODUtWuX6+3P/v1n/bvldeEcxdDWmAJQOAkDqr2uT2HLgbhant3q6PrAZ1x4IhniJm56VWSGW7ux3DbLezc9g2kpbY/ird5eIhmNVpWVZWiG1yUYM/bAECf+V5ccxW3sokIUDGwgSebMqmqorUToM2ukXk/fzZWwU+ISA2IgABARStgM8qJ77qIGKbRQ1u0tCbouZIourUnvKkaHPI90kg29LNkSrf17nO00/t+4tNWLHPsl223+eFdSuLok5RUx3TfX3YF/VBpg282U4vLE13WbbPcwtgQ8/tEAFFXcikSYTMmsOh3X6aIz/bcn9qymNxyB3C8WiZb1q8a8ricNQyTO2/9XF9qxCvgvJ4mzrb7Q+HOrfRkMiSUJWJFGmdZmWDb9A4fFgBCBFxV8ghjSi080VqWNepKep8m5VapC27TkJvQUKtBCUwAAgCiClnKAi8rNmGBzvK66MK44ZeBxjjuBsD2qIIeyFr5b4LQNpjXu9Ucqh3Ir6VwlypdzG9f7Mzwc+a2vpaDqpdWgdXI+h9S/6d5D+ZxrCq6iwU3dWY+2+PVwD6yMlZ/griItF+aAuxN5lTZAxicgVhgK2cDZfuPnBqdh9ndQt/15bdrWgvA6JSeJmGwVsWawKgiY1RKBD2g5GwY5X6+7aynVm3/OF1jc1lTQ58TjCLGMacIsYx54i6scrtXoNWSdm2bU6CzWAwBU+XOVg8E80ojyRlroCcCN1xuJKaex6gmvnQADuUJssrNI4xQowJeS6iOq9IGnpAKeRT5M02UewA7q7IYTT3AyTsUkk79/NmwDXwfDvifc284Rhur2tpeL+0J4WEKsWoG44k1oyHSIcroFUYMN+f9Nbm8kDp9Xr9hdUAsWfaDY9jgaG9i7AlEVAjuHYkELS8ewGXd93p8+s6sMeyLmmJOLRx6JDbGlDf7qd2W/UhhJu78dPltb+/hKGR7lLTWtIgsH3kfro2BFABggjOZcqG/atL6uQVYEoJhsHKw9ZZh5h2e5amkJK2ALutyOJbr2+90fTlZTYdj9YMUDsLAGE0lK4dfHSsq6JOxD778nq1do9PMQarFZJdDpKTlV9YGZZ5cixuz/SzzWO7Dh4ND7x1YG+q1cPT7BE3Vb1Ljtvs7eu3nsHaHbePazgZDO/vh0PH2jJu6zQ8Jnv69dvGTLgZXBTs53QdapGWx0Z8/cYzY26XtdfwL/UeE3u9ltXJfNwtP1tvDndlU64/1HuZnpq22cMvXsP7o8l09uAFEDwsF0/vtlgsnkG208h7Gt/ecgaT2XzpXJ8fPpqFWc5fHqefWfw/0MI54r7xKW4AAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 950000,
            ap: 28000,
            dps: 17142.86,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 49,
            foreswing: 14,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 950000,
            actualAp: 28000,
            actualDps: 17142.86,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [22000, 6000],
                timings: [14, 15]
            },
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "aku-shield": {
                hp: 400000
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 27000,
            actualAp: 13200,
            actualDps: 10702.68,
            magnification: "600%",
            count: "0",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "43.3-46.7s",
            delayFrames: "1,300-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "612",
          enemyName: "ハニワンワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgIDAwMDAwMHBwUKCQkLDAcMCwsODwoSEwwVFBQVGA0aHREeIRUhJxUkJCMlKxcqKSYpLxotMxsvMSYxOBwzOh42PSA7Oi05QCM8QyY/Pjw9RiZARytDSylETitJTTRLTyZHUC1JUy5NVCxQTktMVy9OWTNRWzBQXTJSXTFTXjNUXT1UXzNUYTRbWFZUYzVVZTVYYj9XZzdYaDhcZ0Raazlfa0ZcbjtmY2Fib0podVFzcG57eXWHhICQjImWk4+empejn5ysp6Kzr6y9t7LBvLbHwbvKxsPSy8bV0c7d19Li3djr5eHy6+P17+n69vD++fH//vr///85iHy9AAAAgHRSTlMABBQfJS05RkpQWmRobXJ8g4aRlpqgo6ituL7F0NXjGTM/VWCzy9jd5uz6/wrxD/f/6f/7///7/////////////////////////////////////////////////////////////////////////////////////////////////xoZ4X4AAAe+SURBVFiFlVcNW5TaFrZPKyu/0tLyq5vWhCYRc/lwhAEEZxgDhQGC2II4Y6OWpmVqR8e/ftdm9Dl6LprndR7GPQ/rZe213rXWpq3tKtwZ7P97cbPj8Y0r7/4/3Oie5l5Pni5Get7QuZv/yn5kgDaCD3dai5fDTMWavvVv7Edfs1YtYh6miy5SRpF9xnYtjOUKSRInUh9e9FA6CjyHunt9+7s5oRbHcaKMw6KDrCDPC4L8vWvb3xoWkggQm7mRttu5chIAAWIeXJvgGRtFCMMh77b1F2oRJoi5R9e1f0kFtSAMwjBK8vfvkF4Sh17gJXz3Ne1vjHO6YblA4ZTpoQkyT+dpiqbz1Pj10tA+SPKq4eJdB5Zp6Gq5JEuKIgkFhhi4hhS6ScFKkggFgR8ilEAgYsgnII5Di30x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",
          traits: ["古"],
          baseStats: {
            hp: 300000,
            ap: 20000,
            dps: 8333.33,
            speed: 4,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 72,
            foreswing: 25,
            backswing: 14,
            tba: 24
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 20000,
            actualDps: 8333.33,
            magnification: "100%",
            count: "2",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 20
            },
            "freeze": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
            },
            "slow": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
            },
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "weaken": {
                chance: 20,
                power: 60,
                duration_f: 50,
                duration_s: 1.67
            },
            "curse": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "412",
          enemyName: "イングリッス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAQEBAQFBQUFBQUGBgYGBgYGBgYICAgICQgKCgoKCgkKCgkMDQwMDgsODw0OEA0OEA0SFBAXGhMYHBMcHhgeHh0cIRceIxgfJBojKyEmLB8pLiYoMCArMiQuNiQ0Pys6SC9ARztATjNGWDdOYD1RZj5YbENiZF9eckZna2JyeWqDh36cn5iusKzAwrzP0c3c3Nvo6Ojw8PD5+fn///////8xO3/1AAAAQHRSTlMAAwgOFR0pN1FZR2JAbHaRpoOvnMHd9ea4ydP+2/S/MaLs/wj30v7v+f7/5v7+///////v/v3+/////////wD/W5HwAgAABRpJREFUWIXtVmuTqjgQvchTUd4ooHgHLyKJJAEdQBDX//+vttG5M+LMrdra/bIfpqsmThXpk0736dP58dd/tB/fAN8A3wDfAN8A/yeAT8aNBHkiC6PPX/6RcRw/0Z3AtxWB+zfugjxV9MUmQXFgyv8iCF513NUqTAilWWRN+K9P6cMUxc8BcrwkqU6ICcloznIaO8onhF8j2CTIqmlon76NJO3l5cVbbHCeU0LzA02dydMtfk1mpmUr+vZIPOHZf2pHaQaGEAMElLEDiz15GKhk7I/lUTePTbWVhp+4ibUIwzBGEP7hkOcMI3KgkS4Odgng2tZr7djW2+kQYKSYpqmZtuWvdhgw8jzD9JCt1MEluOm6Ojd7a3+qt0/BcbxwM1Ee684CUYiCQSJSSxqGoBdtV+12RRHIf+BJT0TNizIIgmWMPIXAm6S5tHVZJIvZ10W+RyObQcoOOcny1B5kQbTL7nq9nNua+cqvr915SZZ7QsTsQDHN/MkgU9v6cu3qqr2cYuvnlwj82Fo7hj5TvZjlGWHR7P2u0CbesbleG5rUlyYL7Z/PaQAuyhN9FaY4Xll6kOYEs1Tn3y82Wx+by/V6LosTJKJ4LvIPTpxZ67UfQC/kNHUdyCSi2Lrt4oSJ6e3LFvyvl667dM2pfn3iwkjSVwg6gWSYAJlI6MYMmOlLvbui+7vXuuv9b3Zu6vIJYCQbixSjm/OBZSQn4RwCyAIZoE0/K0/nd3cIoj0ddqbAPeRR1HzH8xzfjRBgUIQZWS4pxquxMPZ2ZfNx+g2hrfa6xHEPIUACJUkEJpqWm5IDw5jiJcI40mYBqc8D92sLCTCl0a9PZeC4EXT82HbTvoY02SAUWW7RdNeh/+vWHg8lBTRGkqdjTdNUZSrLICyEQTpB3KIFPg2Pv3bVVhWHUsHLmu0Fq+hmK8fWVCsikMkkQfO46p4Amr35JCf82Ac1ge4DY4zgNHIMLyIEo02yLNrrk9XbydB/pPibDHSoVxJAgF+Go8CNCU42y011P//y9gdLvZaH/lMvpaDDGcYIIVihBQ4MhfO0B8Dt3etyhkpcWijn5QmAk17i/lDw7H0pJT0Gy8lmmaDNsjjfqVe/vlan0ytUtCmHAIK2SBCm7K6F9A4ABCBZsgSA1+6eeFoUQGyc4KrKnwGccIMZSBiOw3kYLpfLDViySRL4d1l29wDqtj2VOFnOs1cyAOAE1c8Yy1Ion+W48zCBe0AQcHhvYdndO/DSK1GFfCNiJFAeWCBqQUpxHBiaohpu3FeDMMgoITeIsHxg4aUrPWVN8tj40NqR6qZ455iKJCp3LaUZgjxQxigGhHnxSONLvVfMPci98s5j0YjRSp8I3EhxQEihGDCU+nykcZyi5C0Hl98cOO2UyRbvvA8lkPxwrUJfvJHhQBBEQWLXMWzbCqJNcYLCgwzD0oEiNMeZONNn8oemT53bGOckewdilDMYjQytbEUUeF6catuqAQ0+V0XddU1Rtu3RFHhh9NCIsnkbwcLMTTOc011I8tT/3WucoO1hSpZVhlh1grU4vkyfJjZ/38srdhAisrV2B+R/vAs4yQozgt+kkpFNoIr81y+XkTgxnUB7IXT1OLT4WQRTGh4cIDAZQ0vX0DVV+hoCHkjKxEsT63HyQwhpr7I51JVS6LU0DhfP8+Bj90icea55v5M8UVRVnWnGIunbLAFyI7hNkm7mxp8A+pvIs3uJBWVm6rpuG4bnB4F7twDMd4xHIv8NFslSlC+8JtoAAAAASUVORK5CYII=",
          traits: ["古"],
          baseStats: {
            hp: 50000,
            ap: 12500,
            dps: 28846.15,
            speed: 40,
            range: 110,
            rangeType: "単体",
            kbLevel: 5,
            money: 50,
            freq: 13,
            foreswing: 6,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 18750,
            actualDps: 43269.22,
            magnification: "150%",
            count: "5",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "284",
          enemyName: "ゾンビワン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 5400,
            actualDps: 3446.82,
            magnification: "300%",
            count: "6",
            spawnTime: "140.0s",
            spawnTimeFrames: "4,200f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "605",
          enemyName: "超竜獣オウルハズク",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIEBAQEBAQFBQUFBQUFBQUGBgYGBgYICAgMDAwMDAwNDQ0NDQ0QEBARERETExMaGhofHx8jIyMpKSksLCwzMzM5OTk+Pj5FRUVLS0tSUlJdXV1jY2NtbW10dHR7e3uBgYGIiIiPj4+VlZWdnZ2lpaWwsLC2tra8vLzBwcHFxcXKysrOzs7S0tLX19fb29vi4uLn5+fs7Ozx8fH4+Pj///////9KfNODAAAAQHRSTlNKABevy/AMnLz/KGR51uM7jAAA/xNQ8q///+3/3v///v///////////////////////////////////////wD/7PggvgAAByFJREFUWIWNl+mWojoQgEVtNSIK0gsZmj0J+74j3rz/W92g09Nzzogz9QMDVj4qlapKsfjvS86/ZHU6P5SD+Gv4a9Z/iz8BvM5Lj+Zzn9ryXwDcZyFyDwEoO0jSPwAQXT8ELAndfpn2GPA6/fW6QtTcPJgv8TE9Hm7D1xnA2wdTO+kO9XjpTy9wu6HXDWbb68cc4FUWGSBLu0bg/gBIe0jj3OUkSTjO+uBD4c/7gHbUEb8IXyBpKUTXnn5K5y1kmzQDWFj6ibMpHVt/99MNX2tZ/Ej7K72sONHUN3MWSNwPT9l/XLumugbraTbHCduJIe2V8lLVNF8sDHclzW+jiPzjurhmZXVFh/Nywa98R+RP3FmIx6JMqbuCsXGajwPpVQ5dYNC2KLryfWe4fuL7oY8/d+alLMqxA0roCtKzQBLNFAMzv/Tlxbbo9dJDREfawaivhiGFShDD09NIlABJPCjbcXct7CSjnmHnjWvj66UJDKAHib2WngN4xY9DBGWNjD4wHbsKoCWDurk9imIMln/LBVEhYRS6hqwaAHvOmOippRiKYvtRFDjgTfobQOIFxQkmZdm02iJL+lg3IQ6jyDPk3VeleAaQ1paqWm4YB8S2hrIrdYzjOMQm1LXD82y8A7aYtho0TIcEie4PA7ITHzuGCZyxV//Bgr3a1V5AEVBUxTCcsbAsDWoAxCNKuvT4BCDdZRtXOekQkGFOoA7iEGgw8mQAqsStGmfB3bTmARs1b+skBbIMSJ1SE4CAhi27A3Ie9Vm6fQrgJO7EHJZlMWCiZXll2Tru84RNByCNUi9fc9yk9wjA3YR3Y7fx+wmQNJrixLGqop4ZAlDtFqT+vKs9AZCmoHbG9iGkBiDEd30LhNSBDkUxTXpt81dAXtJGyyjtzcCxQ9eN1IDgK6XIon3c/pCeACYf7FnyUNrYhNgxTYHnh6ZCKbaJgyhtk2J303oIuHn3zL1nPWXSVNMVgdgDORsM5fQ0T2JRmt2FexyKIBjoL7kCrNrft2lBjpvnkbgnrjlcv6eEQO6/74rUCXbnZxWJE4oOxnTE04pvAsz7L/PBQHvsUHvxzIKFc7lgPVKdAv60PMqmlVAsF0iNUjW/ZEduHsAJaddVQEnGvgTNt+l0AOkwJhoIx+LiLOYBe5PVTmR2fVH2kHy74hooXVX0nYX7qo93c+eCJIn+pfNQz6p6NWj2UA39SGnXt52t9nVRNgMmbd2osycTJ2RDSLqmLMtssAw6XscrK+3sYumXLC/LqneDZkCLOcBS64qorplilbQR+I6HK/D6hGHLqomyMRDnDteT0+dlNSm2YXIFLh27r2gY0qAtb5K36W4OwGtFc5tfNolNXUCj9A5Q2PZHd0DVpL7AzZQ03m6qO6DNgDVa5s9oSuGIQNLdLahq8jJTkc4fQdbcllAN2HBtB1hTRg21ZpjIci63f8omD+Drw2w8L5XgkmR5URXFRUNXAKFpl5SamgIh9dWebW6Z5ckQKvvHPuDWTYbzsMrrOFOTMkji1HYujqmgOB5TNU3KvApzEvfHxz44L1EJ/CwowiH09KK5BG6KoUkotkjS1bobDlEWJRHIyYwFB1XXszgqcO8ZTlN1gZYFWnxpGmTldefo7ojTJMoNXRMfA05bDSde2uiVD7S+7H2rLbuuKPoQtdVgAbfT89JNiMGa8cdxsIHEUWkCsgCRtK+zoq6boqqZ7/Kq9Wy/ZOWZHbvqfjYXPm3gDJoSemFKoqRlTs9axqmazPdC1w8VtcfA1uaT6RNhBA3HQHGik6Ku6pSwLquZIhNhj5i2BRHCn9wcYCOTxFRjC8AiRu2UlI2LnMmSsktQqgM90YzYk5dzgJPssq4u+CHIqjdM88sustxbdBdtbQPhB+v5fA/OpvPBCDwvIMKJP8DuNq+qtICVJzZsS0Hc73DgeqG5natIR9fHfmAdWYu7Tjv21qHtkrzrJ2v6kPXfayPwiee9zKQzDwydaagTYJVc69bz06Jr8gT7Q0191h+tIXu/aoLDQ8CrLK94NSIAvErc1smbQV0f3yF8Wa/tscot9hHyAnCsHbayvH8EOAj8+RVGFpBPEicC2ULantvslxuOfcSwBmEh7WVgRCyM3tbiQwtYXT8BVTnKH2dpsQOOKu9/HvnAsF+2e0mUj+8qeGN6r493YdpIcJD47dQDwEjb3psJbrmyQoGd/iLPvcnyfLMtTYB3abEVF/sND1nMcz+FfWW8LzanxWG1X8lv55mDhTUOZ17eL1Wiycq7gj34sru1I0vhRfMd+V2RDbI+KeL5SYuzOnDvmo2R4xAvwthaH3j+cHQQiTzsOBgZ+sdhJc0BNovDcSsAoAQhcQl2cIjkqVuDLL4c7LokJgoEO0Hk948ByzW4i6IAGfwhMoBfw8PcEpYsC8TtarcWhOPx+PKbsFthvd6ttiLPPPz7Ev4Hv+2D6ULTWHgAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 1850000,
            ap: 36600,
            dps: 6905.66,
            speed: 8,
            range: 480,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2500,
            freq: 159,
            foreswing: 50,
            backswing: 56,
            tba: 55
          },
          stageStats: {
            actualHp: 1850000,
            actualAp: 36600,
            actualDps: 6905.66,
            magnification: "100%",
            count: "1",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 330,
                ld_range: [330, 1060]
            },
            "immune-surge": {
                enabled: true
            },
            "surge": {
                chance: 20,
                distance_start: 400,
                distance_end: 1200,
                level: 1
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "600",
          enemyName: "トロリンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQMCAgMCAgMDAgQDAgQFAwcFBAcHBQkIBAoJBgwVDBsWDB0YDiEjFC8lFTMmFzMmFzMpGTcvGkA/I1M9JVNGKV9JLGNSMG5cNn1tPZF4RKCARqqESbCHSrSJTbeNUL6RU8OWVsqaWtGgXtemYuGrZumwavG2bvm5cf66cv68dP/Adv7EeP8iGKcaAAAAQHRSTlMACg8YICsyOEJOWWZseIGMlfD23Z//w+qo5L2x0/T+3fn/ze/i///i//P/////////////////////////////i0f0MgAAA9hJREFUWIXtVmtX4jAQLaIiKAiKgMCCyBZrSvPoO2ke//9f7aRFkZUF9Nue4/0gHMy9ydyZzMRxfvCDH/zgB/8LJvMW/L0ajy++x7/0BOo49V8pm9a+JXDlGxN0mm6eut2rq/rZl1UavpGavXoI+T5Cry+/B7et+hf49ZFnikK/wWiRUbQcd5pnp/FrAz+URQlZfUqljUgDb969PEWg7xtd8rQupN5IwTdjOF0Nro8ZUmu5qiKpwF0sPC6Kdygj82De2XuM2vnVzW13NH5+8TNVLdfUnS18XuxAmdx/GjR3yWeNzmT+tEL+GuPUGPW2WCsBe+4KFDKhOHBHWz9rzcnvdRJjyihjlIQ7BPk3vSgEI4SFi/bb5u25nxdGZ6QCztQnyi6fwyqGVqOK35oHEtIsBS3ZmKXiML+QglEaeLgSuEXc5FEq4VcM/CgXR/YHqBTjdZBMLL+NjM4xDu3BIkojrj6HvOcMeZzk6hn4F080sXqJqtza49j+MwD0CwhM1pSInMSiJJ5Kr2AFGm5oTefFl5gbmFdwcM0Ijk8Ke69AbQ6pswZ+T+DFaaxCEEiO520v9LNzgyCCSHyKQChpbT4cmpDPTp9QqLvPy1QWJWkcpUIdKEqVdZ1nwcWebVQOFQ2xEZodUDBBy1lKoMMJ/tJQMT7hXhnv0llaqsxY+lEBQo/eBf6dIZ0PHGdqL46KMNv6IGSabk9ACP+HkcJ411BHxBRKUEy3kaoMM5mRrcB+E4TBY7gJN9AueUjJhxOoHEeKkyMhSMOGdmQ2FwwKAUqh/LHyS+YcWhbd8N/aqVCb/5auGelPy5F79hhQW8ypvcx8UxFgIsRBrA1QCFWWhco4rBFacjsp/GV301DbbtmGcutlElQ5E3HEZYihEjKl8rR0UbP7JcjrZDldsHTVOX9vx1MU4irbKoEPKaU1gHIeJ1leCMGCMjz1VO/GMKqeGk5zcH/7YRw0hqAAF7oUiJSIchDAJIKLUAjrKLEZUpDzFox71i933RkojUd7oTIN5UtIaJsDpNWaLzkHPVxmSMddp/64Xs/3zffz+4ASN842voMAD1kOXZ6RiBHGUKTLsnfOb9r73wddxNhi4QcMhhK2CbEpsZ2bYEZhBiKjDDr0Tmq5LPQmj7OVB3ORZpv2rDLKAuTOBs4k5GxygO9czEjoNUcIzebTO9fX0K/Bb71euTPX9/tOvT/uH3zbnA1x7HbGfuINYLQ/rnmO4Hlklv2+G8erziEqvIQur29Hw4U36909uA9bxIY83PVmaPUw6Lab50cEBvfDXg8UPmC2eACBXm84nRwS+APRJZVyP9ZC2gAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 390000,
            ap: 38000,
            dps: 34545.45,
            speed: 15,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 550,
            freq: 33,
            foreswing: 14,
            backswing: 17,
            tba: 10
          },
          stageStats: {
            actualHp: 585000,
            actualAp: 57000,
            actualDps: 51818.18,
            magnification: "150%",
            count: "1",
            spawnTime: "173.3s",
            spawnTimeFrames: "5,200f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-waves": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "revive": {
                times: 1,
                duration_f: 200,
                duration_s: 6.67,
                hp_ratio: 50
            },
            "warp": {
                chance: 15,
                distance: 1000,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "412",
          enemyName: "イングリッス",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 50000,
            ap: 12500,
            dps: 28846.15,
            speed: 40,
            range: 110,
            rangeType: "単体",
            kbLevel: 5,
            money: 50,
            freq: 13,
            foreswing: 6,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 18750,
            actualDps: 43269.22,
            magnification: "150%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.3-3.3s",
            delayFrames: "40-100f",
            baseHpRatio: "75%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "477",
          enemyName: "フグ太くん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgIDAwMDAwMEBQUNDgsYHxkaHxUiKRwpMh8VPSQxPSY6SypCQkEjWTRCUy9MTEtIWjMscD9YWFhQZThWazpZbz1jY2Nccj9ed0MtjlFvb3BahUl8fHxNnlqJiYlHuGmVlZVG0nihoKGvr7BK64e9vb7IyMjZ2dnl5eXt7e309PT6+vr///////9vm+hTAAAAQHRSTlMAChUfJi8/TFdha3eEkJqx/6S+5PDS/vP////+/////v///////////////////////////////////////wD/wwU9/wAABa9JREFUWIXtVml3qjoUbW2dhzpgBAwUo4BJkZkKCi///1+9E5RWsLe9d71vb93zodW1PDtn2HsnD//8x3j4C/AX4H8C8E20J8vFfPDYHQ9anV77u19+HT1piqZTvJA1eaFiNHv8w/ynlS8jebdRGMUmY0dn8ocAAz9P9rs9sphmMjPmxap1Rf69/Me5IiOkIJWZGrXYueC7+bj39NCZrzq/kd4aLmXVsChTDUZMaoac853u69JcP6eDn/P7C4XYjFKbKoQZAHAEgDjlPHMUJxn9lP70ggyRbdv0AmBZGa8ihX38kN9ZqDYTAQUwrB1ghvQTgBfuovttflfSGLM0VdUsQDBlLCuGcuQ3EaPed/lTjVFDnkLIBgMETdadMC9uEY7o1zW0JWif6CJ/utuY1Gbaht9FLA0Hve7zF/mtJWa2pSclwDGBL1RziuLz/CJP/Y3D3elmt1t9QamJDH2TPY91vEu4q1FKjd35pv5iv4lTzLm+43xzL7AugokTVc3LHyeKbQOR97fFF8mRxw4QAoXH5Z28Hpcas7BGND1M03iHCHAB63EN4HTOsFiqq+r3lO4imxqEUlgiklWiQQdEbw7wtA8LMQv5C3XONZggnEpsAxQMG7SoueFFAyG77NS9B2gjQR3o27IwER9BTWRzbgAU58uEMqnVBBgpzLJKBRhYoNglEzP+i9D7TYClQUwBYFMVBmFesFT9Vge3AH5TVE+SZphlvqnC/kswysgmK0sufCc81yq4W2MXEUuMEDowYBOQL/6q5RaLPIvTUK21c0YNJg4Uu2ygHJ4YJYXzkXo5tihynik1gEJpSGqkwuBEqi1WQWGhBiZpUm0hDfW0MUVpXKtholp2OQMRlq1hakwdnlcFJ2HOGwCOu7p1hhcFbEwUIUpgGjaoaeAmi+oARba4AZipQL5rvs2wGASVk+8A3OPm1mDHmBFNQEAdzFChG++AnW8A8GpW09NQZRopvZjZmvJ2sO3ocK+lz7jbQl+x1MsAVeXVCzwPlGXh2uTO53OWV3Q6NcXQRgSXAObUCwIA8OiW4hr70uTk+tVck+Ul77Ha5eMCa0JBponXwXsUeJG3PeDTbdH7FC7cCqDS82T8sUcZA/uoZkIJ7+9BEEXb6PUWgPsuT9zqi3rhQHu6qDTRR1goGLxEQ1vPgyq2Ub2FXE/TCiBdXEYw3r5WsmzBnQYswKbNiIyU9dsWySWTig8dZ/rVIgu+v1Y+9yL0ch3DWDZNMERTKNI2FWWfnIUSwMI+bClzc6Es2AG63ivLdRCtF8PWZQ9gZQBgXdzkOsDUPxXHug4Az6nqXgZvb9GbvBiKScyQIfywlATQwS8HEDsZD2uzBHN3pepie/Heo+g9MOVlR5gSMAHsRMjalP2yAR67PN7dOsEJKkpXFcBw7UWRFxyoIQFCH6ZgggwpuLISXn4fh7Fes+ZTlp0LZ3gFeF5t3wJ2iA6MLEtNW6ZhmaZlUBvHZVqqbGq7LI4uNJR+WOpkitavZhRYBPU64wVSTUIsQglh9sWCihsjKhGLjexm2Qd9elugbSCuAFVRsUEUhUAJws+wXzT9JBfb8KU+HLSopNRabYN37+BZTBgpUAArQGZMXGd/us0/n7jonefOAq711vOnFJfe2/bAGMbwnqNi/+ClSnpMGscDF7J9Bq+0efNdMVuuD+yA5zNVM4jYv2Vg2cnPaTX6y78sz4td7ErDh2YMXt+9yAZijGWoHc5XlSRLNvElNQNfLxFCn3NnOvvi2T96DaJt+e6Cd7CG/fQoWJOCbGBb+fGUlSUUqezy3Zevs9HaexVvx8fWU2csIdUNj6c8P2X7KcJ7N8x1P/QdXYFXl47Gw0G/23mue9l8LY1bD63JUpp+hKwoqPyA8GbaDGk+vL1W28tRSevWc7vT6w9H4/FkMpu9QMw/4mU2mYxHo2G/1+20n2rn/wt76VH5PhglNAAAAABJRU5ErkJggg==",
          traits: ["古"],
          baseStats: {
            hp: 400000,
            ap: 30000,
            dps: 2990.03,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 400,
            money: 900,
            freq: 301,
            foreswing: 4,
            backswing: 297,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 30000,
            actualDps: 2990.03,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-43.3s",
            delayFrames: "200-1,300f",
            baseHpRatio: "75%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
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

export default e36013Data;

