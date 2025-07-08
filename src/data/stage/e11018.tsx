// Stage 11018 Data
import type { StageData } from '../../app/stage/types';

export const e11018Data: StageData = {
  eventId: 11018,
  eventName: "ランキングの間（俺より強いやつに会いに行く）",
  typeId: 11,
  typeName: "ランキング道場",
  prefix: "R",
  mapId: 18,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "俺より強いやつに会いに行く",
      baseHp: 9999999,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 30,
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
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "283",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgEDAwIHBAIGBQQGBgUJBgULCAcNCQcNCggOCwkRCQgQDAoWDggZFA4fFxEfFxEnGwcvGw00GREmHxkzJhs+KBU1LSE7LCJWJg1TKw9BMSZkLBBHOCxZNRNKPTJZRTV9PxdhSjJnTTlPVViGSB5sVkJwXEqOVyxKaoKUXjN+Zk1Vd5N1dXWKcVWReVqDg4OagWKgh2anjW2Wk5GslXOjn524nnDCpHKrqqm4uLfQ0NDf3t6OV77VAAAAQHRSTlMABwwU/xwr8D5KYm1Yd8SzpJN/06rx/m3H5LH+/+XY/+7/////7v/////9////////////////////////////6AFxRAAAA1JJREFUWIXFlg1v4jgQhoGQlPLVAksKNdeCDSY2xRs7DgkJof//X+04sHfS7l5KjHT3CgkRMY/eGc940mj8u5pupzsY9Lodt+JPFXLHkyXlgrPlrG8F6CIqpD7oWIlR0wbQI1QoAGgAWDnoEXZxoC0Bg6uDuwDgINbSsgZXgFb2AMalKgHPdgBMmTAOhPhmd4wIctCmBJaALiJEaBVLZgnogwOupR2g6TpOd4oJU0JLxoadmgT35fV5OPF9hBlljCB/2PduDG31x+Pxy3iOMcKUUrT9+Pj+/QNP5yPPBTmtrwC9JRwe55wSwWWaCQgHbTHx52+g2etjdTLOWyqZ1jDChAuV5Yfj57n4PMuYYibhPIXcVN8NHZmnHABKQf1klqfHItxGZ5ULwWMdx7HWs0rAi84MQCnFpQTAIYm22xAAWlEZl9p8AUhTpgxA0NJBkmDMAZBqGG1jIeaVgK7M0kuymIg4hxoUUZlCJoh5zBhfVgK8t0xRzuAACWFpnsfHc5GcPwHAsHkKqq5Bc7yBUEKgDYjIDOAYlTXIML7EL7uVgEar9wQaTh4QgRLk+hSFUZnCdDKbGA2+bKWW0eNwatoAAEceJgA4TDzHtKJ741A0O3MZZ3mmT+ciKs4yV4Oa4+TMhM6yLD4Wx21YqHxz6zD9bWEkjIM4OYUIapDNnJqARp/LCyAxfaDHdeMb3kam+UEnRRIlRbjp1Aa0XuEYUpF8Rh9JwV+/PLzf9QLzDIATJtsCD+rHN/pThDCOTgglhV/3EEHexEeEkejEeXjyLXab84y4ojg5n8LkRCZ12wCKOIJ5QCgsQOENE/AHC+6IUNivcK0PPavN1AAAg8tJcLvtDgC42w9KSm633a8A2O53ACgApN0LStPxHp8wQnC5Yfz06Dn1GG7veTZfkWC32+33ux3dvM1G/RoD3RwtFu/v6wCiIRwg8Ak2o9t7oflt9W4Awf4aDV9B8Nft3WgAi/f1ugzeX22s6wEWVwcrhFbUeAhqAoyDYEf9drvtLxbr/b42wDhYm/iSENQGlClc4ktC/RQAsG7/A1jbOFj9BLShLe4FrO4ErOoBWr8CVjUBxsHiN8D8jhRsAFD3ex3834BfUlj8twDn6WFq9PBT5a8/78cfbX6rhYGXt9IAAAAASUVORK5CYII=",
          traits: [],
          baseStats: {
            hp: 100,
            ap: 999999,
            dps: 49261.03,
            speed: 0,
            range: 300,
            rangeType: "範囲",
            kbLevel: 0,
            money: 0,
            freq: 609,
            foreswing: 10,
            backswing: 27,
            tba: 300
          },
          stageStats: {
            actualHp: 100,
            actualAp: 999999,
            actualDps: 49261.03,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "0%",
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
            }
          }
        },
        {
          enemyId: "532",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQEBAQECAgIGBAQFBQYFBQUJBAQGBwcSCQocEA8xERAgICFNEhI0KytmFhUqMjZHKiF6HByNISFIQz6gKipNUlavMTHENzdkZmd1eX2ndlqMjpLLkXGdpKryvJX///9LEK44AAAAIHRSTlMAHDxjwd6l/oT//v//vP/////////+///+////////AOA5anQAAANzSURBVFiFpZeLkqo4EIYhXEIuJuQeZPS8/1vuH3Sc49TuErCpoizL/tL3tM2fd2neZbxMkI4Q0n5/9Vvh/wGD9z5Gb42X5wAd5cYXgJrOAS43wRmXRg3NOcB6zyEHynpyDtAuS75+3TP9MaAGMF2654GD+7ri+bqORwBTcDj4cpnIxGnRXu9fXddNl3BpqwBOCx3yeludiooKIG4MyHW93VxbASDOaaakWG5ZGmsYvd4jF25d1yWIGkCrgzbRSKGN4dqB4GYlqc6L7upiQC7CKO+lTSnOAeHIwV2veWakOo2TjMnHFGNS+gZZwv2e52cx1gBa6S1aIEWvxLIuWbOQ3Rz9VF1Io5JoIe+NEnlxSErJiU+yGkCkQgLwUiK4WWxJ1Db5rrqUJykl51JxQbnT2gX4oWKc6nuhg7aSnHJkkBeC5kbxukp82qAsQlBeGAkoCiHN0B7qxlHBhA1AEY4e3XCwnTsDAwpEMLwOtfMzE1wyJoTQbnYzbY8DmoFSUcS54OiZiTQwhkxKOXMh+Xgc0KGODIqnRFElSY4CWuTdKp/wMDYnPx4FTAoGqNJSAPCYDl8sxQCD6oVwDoDvjgG2drLxAWAc02E8BigePPUjOgIAdQzQIwL+oV9i4FMy5Ahgy+EDgCByZtNzHlUCoP/yIHkqUQgp8XrApKR8eZAsNQDEbx8qAJ0y/CcESVHLeBnRfSWgU55L+8pB4tRKWj6YuoFCVJTc2m8DYkQSDbXFhKEGQGQy3PzoIwQwh24++IqhCv3I1V/nJ4Op4DT1CGNS+5frYJP6KwAASCq0zqKYsDmxA+hnL98MiLQM9SAeUcDNsOeCeHOgeKBDuGVO2WaCITuApqfmDcChnx0Wvc0EOLEHaBH0EgHvnznIOS+obLUlInq6B2go5eUsYx4GCCwYHHccHahBImS/CyADZbYA0mZAWEPfD/1Emh5N7eluDCAjFTizLBmJwYDvWdYxa8VuFh7zbOpxq8AXCQMurzGJth4PjPV2BELn/FrTcVXVLxjb7xlDDeSfO4mQI2Md+pRit7mFtnmTagCBB3kJaz4LQNTRhUKE6SwA/3cYWpmeB6CmsB6w/jygGcuCwT4AFAv0+AmAYRp9BKDYsz4BdKUjyAeApu3Irzo6CPgX2QW009gPw0C3hn4Jvhn6fuwOAH7LfwD+AbJSMKbrcf7pAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 6000,
            dps: 865.38,
            speed: 8,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 208,
            foreswing: 27,
            backswing: 78,
            tba: 84
          },
          stageStats: {
            actualHp: 608000,
            actualAp: 11400,
            actualDps: 1644.22,
            magnification: "190%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1740000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [2000, 2000, 2000],
                timings: [27, 34, 41]
            },
            "omni-strike": {
                standing_range: 425,
                omni_range: [-700, 425]
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
            "toxic": {
                chance: 100,
                damage: 20
            }
          }
        },
        {
          enemyId: "531",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQECAgICAgICAwUDAwMDAwMDAwMDAwMDAwIDBAQEAwMEAwMBBRYGBgYKDA0MDAwMDAsHEBcNDg8KEBYTDw0YDg8NExYYEg0aEQkVFhUVFhQdFQkjEwkFGy8PGSIRGSMYGRYcGBMZGhcrFgsSHiohHx0qHBQ4FwoHJ0EjIRcVJDIkJiIYKTkxJB0wKB0pKyUpKyQqKiU1JhwdLj9OIQw9KR4ZM04xMCkjNEZILhwlOEs7Myk9MyczNy5LMSMpPVE6OzJwKQdWMx9KOi0sQlc8QDdCPTpAQzlaPSuEMQNGRztlPylITD9MT0NkRzGmLwBqRS9cSz1QVUdxSjBYUk2cPgpVWUt0TzZyUzlYXU97UjerRQZlW1dcYVKWUB1fZVaEWDyAWz2kVxNlaluMYURqcF+bYS+3XQ+WZkZwdmSvah+jbUnMZRd5gGusdU/OdxS2f1TnfiHFiV3MkWLXmGbjpnX///9n9eH2AAAAgHRSTlMABizd8RohEOf/WYfQaJKkwzezR3j/mt+2le3B/Hv/0opf/5hGrv//7OPP/ur//v///1b/////oP/w1ob////////u//+6////////////mP////////+p//////+N////1v///6b/////6///////////////////////////AJ/uZzwAAAWcSURBVFiFndfhW9pGGADwSAdUFEFBBRHsYtegMaE2CY02xWBoQgTT0JhsGGZocBhmoLWiDJ3tv75D1+lkmrD3E9zzvL+7e+9yuUDfbgMaijcff//4Zrj5292kh4Fn71Z7Xy//vPro/x9AYAzy05JUaPV7vavXIwP+MByAYqqm8nDr6vKqMnbd+iriGpin0Q0ortm2zpbK9VbuJrNSTboD/Anjiyy+C26Ypp7J4Xj13U37TL29GXEBJDcMq/NFVHhUNFS01j/p/ezxREHnM5VWtZx0BMKkafKk3pRNWDbJSr9/0l5dYuUNyLstCNV2wgkIwHChYiqyTNNSU03tdfvVXMHunG9CyQpKs+yyI4DDWQFhdTmFmzZN5/ZOuoJ83rTNyHOeZ2neEViGUXp/r4yjoqlLuKzmXlbKumVqdhJapmmajDgA0zC8uHd1KaCsaDRJ2ZC0Aik2m01DWvJ7SJFfcVqFGE6ONy4r2QIviiKp2LpqGKZlNk2Jj0RFWd90AKIoisKFWqPbzaI8Tat6x9I0W9dNk6Yjq7woxxyAOA6jeLbVb7e7tXGeFXVT63QUBYwgu5agWVpZdgAiOBByrUa9+7WXgmletHmalyzLtNgay4uSFnAAkjgKw6lqvdtvtXJCjietJquC/A5f2SM1mVecgARJjrOS0Ou3cyWhV5JktmPZltHswC9LZUkRxZXHt7JvZgWNbX6t1xpCLpOtV5QOKnWalmXLQq7SLtCstPL4RvJD3mnI/35fyOZy1VZNoDsGKVv2Fw2ttiv1T+XGtrvz4HVb2Gu0uu1ahj+3DbujhjzB7WqjUa8H3QFeoSrUWu1qq5GFVasj2r+BQ+JZqVEKuT2RApVKtVZrNC7/rAoFZen9r4PGyPaq6yMNSgrZMsuC06x3IqwE/m4cg9wD0PyL2ZtAM7Mz0P1wBoKpndP+2eFBt/H2tFaaHh2I7vxycPTp6ODwaOf484fk6IBvDUFmZ4l1ajbz9mVq8v6ryRnwLGAURxFFjnmR2nn7Ysk/KpDYAgBDMcU8Ufqws86lg6MCDEUwDJMHcXx4vL5VZIIjAf40BvI5gilu8WfHn7by3C4TGAUIIBSWB/1jzLp48flU3uK4XWp6BGCJANkMRhDIbOHi9I/9dQaMIe1+J/owKp/n8sx3oLUOJsEVE66BIAJ6HBSQWZgDwOcjAOS5Yj7qFohjDDeIPBODXl8cHx6sX//bpTwugQRxPQKOwyLQq4uzDzsEQVBgVXaXXALzxBYH0vPFNLjXnJ7VUtl1AgNlLeYDbgEwhUENJiDoeelt/WmKwMC2BnVccgekicEicLuYF4J+XJv4yTe1sIgRg5a0K2AaLAIAiszgCIxEwFkNeRcRhMpTXMwVEEcIMAOuuHC7c7yLg61BIK5qMJYmBjXYZSb+yYcmEALsbQxzBYRAxajdPHVnAD4EA8tIMfkFrzMQXUQIBGOQxTsPcAAhcI7BifS808sVxByMYhggYrf5kG9qbS+7mMniPhdTCGZwhKDyzDJ0NxKiqCmm7gZIkqkslaGIp967QJRVTctSPG5GQPMkXcZjvn8BXlSWdYN2A8QlleWlxP2TPCZqekdxM4W4rPAK6buXD3lwUXEJaLqhTdzPh6AVUATJDTCvmiY5NgzMSbpOuqhBgNdUZW44H5oDt0Yj7gj4UcO0pcBw/hjM69a55AiEJIU3RM8wMCfyYGyszwEI0IquqhvDJfDwHRnnWTP+OOAHdypbUzeHB+DJahIrNW3p8e+FkFjdV1Rp5T9q6JtboUVJN/HAI8CY0AKXs7p4+yCPDeL7n+lVXq1ctqIPA1FwO62edFOhmXB4cvLJkydPbwL8mpwMhybCKAo+wtqrnoeAGTQjCHVh/NFIVdC5B6fgiwSjU9f9X3f/w/e4GUQ4PBOaigYjPv9d4C9ruzCH8lGnzAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 480000,
            ap: 2200,
            dps: 795.18,
            speed: 17,
            range: 175,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 83,
            foreswing: 4,
            backswing: 47,
            tba: 40
          },
          stageStats: {
            actualHp: 912000,
            actualAp: 4180,
            actualDps: 1510.84,
            magnification: "190%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1740000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 300,
                omni_range: [-300, 300]
            },
            "wave": {
                chance: 100,
                level: 3
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "530",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5000,
            dps: 857.14,
            speed: 25,
            range: 450,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 175,
            foreswing: 48,
            backswing: 58,
            tba: 64
          },
          stageStats: {
            actualHp: 684000,
            actualAp: 9500,
            actualDps: 1628.57,
            magnification: "190%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1740000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "529",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 560000,
            ap: 28000,
            dps: 11200.0,
            speed: 20,
            range: 250,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 75,
            foreswing: 16,
            backswing: 40,
            tba: 30
          },
          stageStats: {
            actualHp: 1008000,
            actualAp: 50400,
            actualDps: 20160.0,
            magnification: "180%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1620000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-400, 400]
            }
          }
        },
        {
          enemyId: "483",
          enemyName: "ダミー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 750000,
            ap: 8000,
            dps: 6000.0,
            speed: 7,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 40,
            foreswing: 3,
            backswing: 22,
            tba: 0
          },
          stageStats: {
            actualHp: 1350000,
            actualAp: 14400,
            actualDps: 10800.0,
            magnification: "180%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1620000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4000, 4000],
                timings: [3, 18]
            },
            "omni-strike": {
                standing_range: 260,
                omni_range: [-780, 260]
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
          enemyId: "486",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUBAQEBAQEBAQEDAQEDAgIDAgIFAwIEBAMIBAMHBgUKBAQNBQUOBgUREA8YDQsXFBQoDg0vEREeHB0mHRUoIA1CExM6GRQwIxBMFRUsJB8nJydBIiI6KhcyMjJlHBxCNC86OTl5ISJYMTBXOithQCWPKChTSEJnRjSgLS1iTyhrUSyuMTFZWVl7WESGaCCBbjOMZVCec1yZfzGwdlawhWuwkzfEkXPCpT3ToYTWu0jbrpTovaPs0Vb4yqz/2sD///+TVetIAAAAQHRSTlMAJDBaCf9NPWoYnreCAMr/6f//AYv22Kj/cP//vP///gH//zT//wDj/83//wD//9z+//0A//////////////8AGMgg5AAABQhJREFUWIWllw13qjgQhvEbEA3EryyR0LCkRVgscBGRivv//9VO0Lbes3sF7449HusxT2bemUkG5e//acr953tbzOBt+b5bKv+2LoDZAt6Mw+mcqf3+8DcA0oNJdjr4YZZl70vttzzYns5heJZ2XI+fBQy13vJwzvzj6Xw6HQ+nw+RZgDrfHw9hmB2P5+wAkLfx7DkNJm/ZYb8/HLJ9fDgfs3i/ec4DbZ1lO/d4PmdheMrCqtovnwRslwMQ4XyM00OWJ3mVPenBcLDNpPwZANK6SJL97knADuQ/Hg77OPbLy+Xy/hxgrM/9feiHpyTM46T++Kh2/jMh6MjzKaZof6ZxmaR1XS37m153gArrXc+jVnhyvSJP0kux+akf2gBz7LmO47ieewzjIi9cNzya86nR7wywPMd1qePT0IuTNAzTJPMtz/OMboAJsizqubbnOTbyXRv7SRz6GFyiRieATr04BREdG8zxHZvmKbWpjAr3ugCmaVoVeUyx7SDY1rZpAgRMqePYg4eAWWPKpixyyFzp2eC+g7Ft57nrAYe62HgIeG3sZVfUl6qqSw+DIYRtL0+kFBCQZfYfARaNaXGep+lHVfr4Zm4IkiJQ0Sbp9hHg5Wpv9Uf1UV/qxILdbRkC9TAaIeolZR5rrRoM36B3LnVVJLhJg2NDHiyEvLi41GmybPfgj6QsiiJ15f6O/HPADWSaaR7n1Uep/hrw19Ve+qqx2SKEbttDGDamg7GbxmlZl2utFSB10hCViQeCTaUQU00xwjy08ktltIUg7yRlMILKsWClQ6nn4fmu3JpoBB1alHqXE8lgnAkCKmBEOCVE/+M9dXFSUpS89RatgKHBhAia/UG+IBBc6IoOZZ0maP3njx9tAHXNgyAgCEHyAEAiEQS8NzTm2MW69toG6E1ZINdThAixbJuQQARCzOFIGquTmdIG6JuMi0gQgrHFOAcRGYl4JFjTR4tWwNgkIgoYERR8h42x4wWEB4BcdwL0V1yItQUQcECALwjTSFhAEKt+F4DBmakZhDCCESyLAoStCAgsEnx9PZgXr6+PAIys1BXnHGoAWQQ8QBZguEUCzr5GhAeA3ooxi4koCii2OIFUAodJjwhjRgeAdMGC9dLADWJZFpSiACfYdD1vAzTHwcbiUSDXg88ECJwz3vxrmiutBdCcaENTNOshBeABxAOV3HxBiDnsEIIyYfL3svikGgxCD24RWdMuGig6vy0QjHAZBYfGAGLAzU53o7aKbsZXsBYI/BpCwL80fAgYs9t6sZr0B6pqTFc3j4IvCR4CVPEZwGfWjU8k0Z8ACDb/3G84/awLonYATOR+kDnyVXYwMl6D4MLUOohoNqpz9i2ZojeZhJZm4y4AJpuQ89X3hK8SSYBciA4DBnTTNevkezyXXgkOBR1M2wF9whrNgjuAokJZNy1KHs8HjYiEX3tndf+QMmcyMDhUrt+2AZoYzPvBcALHhDxqAzZo1wDilXqt7iZTZQYuQFfDqymPdkD0k4hgU3bTkYxbAAPymcZ7D6AUpEF96G0eyFuRN134kwcDuGxBBTYat2lgyGAbhH63ftaH040wP/YfaiAfy/rr2LMQXOhkegd4GfYneljV9Ueqzma/vN5hwFJ3ZV2XMBSmb/ca/IChYwwzFjx6bJUHAG3th3l1uYQjnLqb6bdtdF2fJlVRFWU6WfwSYMzhJgypS0f/aRSefuKYjubGPeAfBh5AcMIIX2oAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 600000,
            ap: 36000,
            dps: 9230.77,
            speed: 16,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 117,
            foreswing: 6,
            backswing: 45,
            tba: 53
          },
          stageStats: {
            actualHp: 1080000,
            actualAp: 64800,
            actualDps: 16615.39,
            magnification: "180%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1620000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [12000, 12000, 12000],
                timings: [6, 10, 12]
            },
            "omni-strike": {
                standing_range: 330,
                omni_range: [-330, 330]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "480",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4000,
            dps: 1558.44,
            speed: 14,
            range: 380,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 77,
            foreswing: 16,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 340000,
            actualAp: 6800,
            actualDps: 2649.35,
            magnification: "170%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1500000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-400, 600]
            }
          }
        },
        {
          enemyId: "481",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5100,
            dps: 3923.08,
            speed: 25,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 39,
            foreswing: 8,
            backswing: 15,
            tba: 0
          },
          stageStats: {
            actualHp: 612000,
            actualAp: 8670,
            actualDps: 6669.24,
            magnification: "170%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1500000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [1700, 1700, 1700],
                timings: [8, 16, 24]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "528",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAABAQEBAQEBAQECAgEDAgEEAQEFAgEFAwIGAwIFBQYFBQUKCAcTDwwGFi4aFBIcFAoeFQ0fFxEZGRkhGxMoHhEgISIILDg6Hw0wKB4COEkqKDg4LSVCLhRLLAk/LiNjHxYUPks2NUpENSsFTGEYSVM2QFJgOgZfOSALWGdIQT8dVV6ZJBtVRTVrRgoSYXEoXWFHSmthSThRUVGMQQd1UQwZbHt5SjdsV0d/Wgw2bHFUW4BdX110XEGKVDyIXwoqgIhFZLOXVz6SZwt6Z1ZZboiNYUZxaXKYbg7CWQmrX0GDcFyWak14c32fdhCOdlxufpe1aUuofgpCmJqjdFaUfmSGgIK+c1K8hw6tgWKOjZDMelilj3q6iGfPhWHLmxCimJe2l3e4l3nUjWbNmneopaXfl23jqRzloHXNqYe0r7Pnp33WtpHCurv0roH9xhTNw7/uu5H+tofxwpj1xZr4yZ71zaX90KL61a/+2av/2rDn49X/4bP/6Ln/88D//9cBWvlkAAAAgHRSTlNDABEeL1uqlch9/+EAAP//mHK2AOTK///9mv//ANz//////cT////////+///V//////7//////+b///////////////7/////////////AP//////////////////////AP//////////////////////////////AP///////5IyRWUAAAknSURBVFiFnZeJV9rYF8dZXTAF61RBqVBxIWBFDYWUlqUDCAxEKkwgstYhGIOhqdnzSxP41+fRTjudSv319AYO54TcD9+7vPcuJvNPm23tif3+XdPPOUNmyLriDaxDvwiwra2tO1wuh8Pyi4AVl3fD5dpwrfyqgiXXxobLG456F+8RfgYALQP/DYfDEY66rL8AsK/MnP1cF+TAZYO+s58ALAUc/rDDw0+FfGVof/QbuL6xBwBWs8X+eHNzecXpQFMO3N+YGtOPS9Aj808psKymGi/zY1XVhwPEgbQIHnWcD4dhuxl6++gnAPaUMpkYE0nSFH06RFNj9g8Kdjx7BpL46K/fIOj/hWBvTTVBFLUxRik6m6Vb2T71x/Nnwuh5+Ojx26ePIHD985oLsKYmkghMNcY9nCLSDNV/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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 5555,
            dps: 1831.32,
            speed: 50,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 91,
            foreswing: 3,
            backswing: 88,
            tba: 0
          },
          stageStats: {
            actualHp: 850000,
            actualAp: 9443,
            actualDps: 3113.24,
            magnification: "170%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1500000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 300,
                omni_range: [-300, 300]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "532",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQEBAQECAgIGBAQFBQYFBQUJBAQGBwcSCQocEA8xERAgICFNEhI0KytmFhUqMjZHKiF6HByNISFIQz6gKipNUlavMTHENzdkZmd1eX2ndlqMjpLLkXGdpKryvJX///9LEK44AAAAIHRSTlMAHDxjwd6l/oT//v//vP/////////+///+////////AOA5anQAAANzSURBVFiFpZeLkqo4EIYhXEIuJuQeZPS8/1vuH3Sc49TuErCpoizL/tL3tM2fd2neZbxMkI4Q0n5/9Vvh/wGD9z5Gb42X5wAd5cYXgJrOAS43wRmXRg3NOcB6zyEHynpyDtAuS75+3TP9MaAGMF2654GD+7ri+bqORwBTcDj4cpnIxGnRXu9fXddNl3BpqwBOCx3yeludiooKIG4MyHW93VxbASDOaaakWG5ZGmsYvd4jF25d1yWIGkCrgzbRSKGN4dqB4GYlqc6L7upiQC7CKO+lTSnOAeHIwV2veWakOo2TjMnHFGNS+gZZwv2e52cx1gBa6S1aIEWvxLIuWbOQ3Rz9VF1Io5JoIe+NEnlxSErJiU+yGkCkQgLwUiK4WWxJ1Db5rrqUJykl51JxQbnT2gX4oWKc6nuhg7aSnHJkkBeC5kbxukp82qAsQlBeGAkoCiHN0B7qxlHBhA1AEY4e3XCwnTsDAwpEMLwOtfMzE1wyJoTQbnYzbY8DmoFSUcS54OiZiTQwhkxKOXMh+Xgc0KGODIqnRFElSY4CWuTdKp/wMDYnPx4FTAoGqNJSAPCYDl8sxQCD6oVwDoDvjgG2drLxAWAc02E8BigePPUjOgIAdQzQIwL+oV9i4FMy5Ahgy+EDgCByZtNzHlUCoP/yIHkqUQgp8XrApKR8eZAsNQDEbx8qAJ0y/CcESVHLeBnRfSWgU55L+8pB4tRKWj6YuoFCVJTc2m8DYkQSDbXFhKEGQGQy3PzoIwQwh24++IqhCv3I1V/nJ4Op4DT1CGNS+5frYJP6KwAASCq0zqKYsDmxA+hnL98MiLQM9SAeUcDNsOeCeHOgeKBDuGVO2WaCITuApqfmDcChnx0Wvc0EOLEHaBH0EgHvnznIOS+obLUlInq6B2go5eUsYx4GCCwYHHccHahBImS/CyADZbYA0mZAWEPfD/1Emh5N7eluDCAjFTizLBmJwYDvWdYxa8VuFh7zbOpxq8AXCQMurzGJth4PjPV2BELn/FrTcVXVLxjb7xlDDeSfO4mQI2Md+pRit7mFtnmTagCBB3kJaz4LQNTRhUKE6SwA/3cYWpmeB6CmsB6w/jygGcuCwT4AFAv0+AmAYRp9BKDYsz4BdKUjyAeApu3Irzo6CPgX2QW009gPw0C3hn4Jvhn6fuwOAH7LfwD+AbJSMKbrcf7pAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 6000,
            dps: 865.38,
            speed: 8,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 208,
            foreswing: 27,
            backswing: 78,
            tba: 84
          },
          stageStats: {
            actualHp: 512000,
            actualAp: 9600,
            actualDps: 1384.61,
            magnification: "160%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1380000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [2000, 2000, 2000],
                timings: [27, 34, 41]
            },
            "omni-strike": {
                standing_range: 425,
                omni_range: [-700, 425]
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
            "toxic": {
                chance: 100,
                damage: 20
            }
          }
        },
        {
          enemyId: "531",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQECAgICAgICAwUDAwMDAwMDAwMDAwMDAwIDBAQEAwMEAwMBBRYGBgYKDA0MDAwMDAsHEBcNDg8KEBYTDw0YDg8NExYYEg0aEQkVFhUVFhQdFQkjEwkFGy8PGSIRGSMYGRYcGBMZGhcrFgsSHiohHx0qHBQ4FwoHJ0EjIRcVJDIkJiIYKTkxJB0wKB0pKyUpKyQqKiU1JhwdLj9OIQw9KR4ZM04xMCkjNEZILhwlOEs7Myk9MyczNy5LMSMpPVE6OzJwKQdWMx9KOi0sQlc8QDdCPTpAQzlaPSuEMQNGRztlPylITD9MT0NkRzGmLwBqRS9cSz1QVUdxSjBYUk2cPgpVWUt0TzZyUzlYXU97UjerRQZlW1dcYVKWUB1fZVaEWDyAWz2kVxNlaluMYURqcF+bYS+3XQ+WZkZwdmSvah+jbUnMZRd5gGusdU/OdxS2f1TnfiHFiV3MkWLXmGbjpnX///9n9eH2AAAAgHRSTlMABizd8RohEOf/WYfQaJKkwzezR3j/mt+2le3B/Hv/0opf/5hGrv//7OPP/ur//v///1b/////oP/w1ob////////u//+6////////////mP////////+p//////+N////1v///6b/////6///////////////////////////AJ/uZzwAAAWcSURBVFiFndfhW9pGGADwSAdUFEFBBRHsYtegMaE2CY02xWBoQgTT0JhsGGZocBhmoLWiDJ3tv75D1+lkmrD3E9zzvL+7e+9yuUDfbgMaijcff//4Zrj5292kh4Fn71Z7Xy//vPro/x9AYAzy05JUaPV7vavXIwP+MByAYqqm8nDr6vKqMnbd+iriGpin0Q0ortm2zpbK9VbuJrNSTboD/Anjiyy+C26Ypp7J4Xj13U37TL29GXEBJDcMq/NFVHhUNFS01j/p/ezxREHnM5VWtZx0BMKkafKk3pRNWDbJSr9/0l5dYuUNyLstCNV2wgkIwHChYiqyTNNSU03tdfvVXMHunG9CyQpKs+yyI4DDWQFhdTmFmzZN5/ZOuoJ83rTNyHOeZ2neEViGUXp/r4yjoqlLuKzmXlbKumVqdhJapmmajDgA0zC8uHd1KaCsaDRJ2ZC0Aik2m01DWvJ7SJFfcVqFGE6ONy4r2QIviiKp2LpqGKZlNk2Jj0RFWd90AKIoisKFWqPbzaI8Tat6x9I0W9dNk6Yjq7woxxyAOA6jeLbVb7e7tXGeFXVT63QUBYwgu5agWVpZdgAiOBByrUa9+7WXgmletHmalyzLtNgay4uSFnAAkjgKw6lqvdtvtXJCjietJquC/A5f2SM1mVecgARJjrOS0Ou3cyWhV5JktmPZltHswC9LZUkRxZXHt7JvZgWNbX6t1xpCLpOtV5QOKnWalmXLQq7SLtCstPL4RvJD3mnI/35fyOZy1VZNoDsGKVv2Fw2ttiv1T+XGtrvz4HVb2Gu0uu1ahj+3DbujhjzB7WqjUa8H3QFeoSrUWu1qq5GFVasj2r+BQ+JZqVEKuT2RApVKtVZrNC7/rAoFZen9r4PGyPaq6yMNSgrZMsuC06x3IqwE/m4cg9wD0PyL2ZtAM7Mz0P1wBoKpndP+2eFBt/H2tFaaHh2I7vxycPTp6ODwaOf484fk6IBvDUFmZ4l1ajbz9mVq8v6ryRnwLGAURxFFjnmR2nn7Ysk/KpDYAgBDMcU8Ufqws86lg6MCDEUwDJMHcXx4vL5VZIIjAf40BvI5gilu8WfHn7by3C4TGAUIIBSWB/1jzLp48flU3uK4XWp6BGCJANkMRhDIbOHi9I/9dQaMIe1+J/owKp/n8sx3oLUOJsEVE66BIAJ6HBSQWZgDwOcjAOS5Yj7qFohjDDeIPBODXl8cHx6sX//bpTwugQRxPQKOwyLQq4uzDzsEQVBgVXaXXALzxBYH0vPFNLjXnJ7VUtl1AgNlLeYDbgEwhUENJiDoeelt/WmKwMC2BnVccgekicEicLuYF4J+XJv4yTe1sIgRg5a0K2AaLAIAiszgCIxEwFkNeRcRhMpTXMwVEEcIMAOuuHC7c7yLg61BIK5qMJYmBjXYZSb+yYcmEALsbQxzBYRAxajdPHVnAD4EA8tIMfkFrzMQXUQIBGOQxTsPcAAhcI7BifS808sVxByMYhggYrf5kG9qbS+7mMniPhdTCGZwhKDyzDJ0NxKiqCmm7gZIkqkslaGIp967QJRVTctSPG5GQPMkXcZjvn8BXlSWdYN2A8QlleWlxP2TPCZqekdxM4W4rPAK6buXD3lwUXEJaLqhTdzPh6AVUATJDTCvmiY5NgzMSbpOuqhBgNdUZW44H5oDt0Yj7gj4UcO0pcBw/hjM69a55AiEJIU3RM8wMCfyYGyszwEI0IquqhvDJfDwHRnnWTP+OOAHdypbUzeHB+DJahIrNW3p8e+FkFjdV1Rp5T9q6JtboUVJN/HAI8CY0AKXs7p4+yCPDeL7n+lVXq1ctqIPA1FwO62edFOhmXB4cvLJkydPbwL8mpwMhybCKAo+wtqrnoeAGTQjCHVh/NFIVdC5B6fgiwSjU9f9X3f/w/e4GUQ4PBOaigYjPv9d4C9ruzCH8lGnzAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 480000,
            ap: 2200,
            dps: 795.18,
            speed: 17,
            range: 175,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 83,
            foreswing: 4,
            backswing: 47,
            tba: 40
          },
          stageStats: {
            actualHp: 768000,
            actualAp: 3520,
            actualDps: 1272.29,
            magnification: "160%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1380000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 300,
                omni_range: [-300, 300]
            },
            "wave": {
                chance: 100,
                level: 3
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "530",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5000,
            dps: 857.14,
            speed: 25,
            range: 450,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 175,
            foreswing: 48,
            backswing: 58,
            tba: 64
          },
          stageStats: {
            actualHp: 576000,
            actualAp: 8000,
            actualDps: 1371.42,
            magnification: "160%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1380000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "529",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 560000,
            ap: 28000,
            dps: 11200.0,
            speed: 20,
            range: 250,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 75,
            foreswing: 16,
            backswing: 40,
            tba: 30
          },
          stageStats: {
            actualHp: 840000,
            actualAp: 42000,
            actualDps: 16800.0,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1270000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-400, 400]
            }
          }
        },
        {
          enemyId: "483",
          enemyName: "ダミー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 750000,
            ap: 8000,
            dps: 6000.0,
            speed: 7,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 40,
            foreswing: 3,
            backswing: 22,
            tba: 0
          },
          stageStats: {
            actualHp: 1125000,
            actualAp: 12000,
            actualDps: 9000.0,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1270000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4000, 4000],
                timings: [3, 18]
            },
            "omni-strike": {
                standing_range: 260,
                omni_range: [-780, 260]
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
          enemyId: "486",
          enemyName: "ダミー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 600000,
            ap: 36000,
            dps: 9230.77,
            speed: 16,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 117,
            foreswing: 6,
            backswing: 45,
            tba: 53
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 54000,
            actualDps: 13846.16,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1270000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [12000, 12000, 12000],
                timings: [6, 10, 12]
            },
            "omni-strike": {
                standing_range: 330,
                omni_range: [-330, 330]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "480",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4000,
            dps: 1558.44,
            speed: 14,
            range: 380,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 77,
            foreswing: 16,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 280000,
            actualAp: 5600,
            actualDps: 2181.82,
            magnification: "140%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1160000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-400, 600]
            }
          }
        },
        {
          enemyId: "481",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5100,
            dps: 3923.08,
            speed: 25,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 39,
            foreswing: 8,
            backswing: 15,
            tba: 0
          },
          stageStats: {
            actualHp: 504000,
            actualAp: 7140,
            actualDps: 5492.31,
            magnification: "140%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1160000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [1700, 1700, 1700],
                timings: [8, 16, 24]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "528",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAABAQEBAQEBAQECAgEDAgEEAQEFAgEFAwIGAwIFBQYFBQUKCAcTDwwGFi4aFBIcFAoeFQ0fFxEZGRkhGxMoHhEgISIILDg6Hw0wKB4COEkqKDg4LSVCLhRLLAk/LiNjHxYUPks2NUpENSsFTGEYSVM2QFJgOgZfOSALWGdIQT8dVV6ZJBtVRTVrRgoSYXEoXWFHSmthSThRUVGMQQd1UQwZbHt5SjdsV0d/Wgw2bHFUW4BdX110XEGKVDyIXwoqgIhFZLOXVz6SZwt6Z1ZZboiNYUZxaXKYbg7CWQmrX0GDcFyWak14c32fdhCOdlxufpe1aUuofgpCmJqjdFaUfmSGgIK+c1K8hw6tgWKOjZDMelilj3q6iGfPhWHLmxCimJe2l3e4l3nUjWbNmneopaXfl23jqRzloHXNqYe0r7Pnp33WtpHCurv0roH9xhTNw7/uu5H+tofxwpj1xZr4yZ71zaX90KL61a/+2av/2rDn49X/4bP/6Ln/88D//9cBWvlkAAAAgHRSTlNDABEeL1uqlch9/+EAAP//mHK2AOTK///9mv//ANz//////cT////////+///V//////7//////+b///////////////7/////////////AP//////////////////////AP//////////////////////////////AP///////5IyRWUAAAknSURBVFiFnZeJV9rYF8dZXTAF61RBqVBxIWBFDYWUlqUDCAxEKkwgstYhGIOhqdnzSxP41+fRTjudSv319AYO54TcD9+7vPcuJvNPm23tif3+XdPPOUNmyLriDaxDvwiwra2tO1wuh8Pyi4AVl3fD5dpwrfyqgiXXxobLG456F+8RfgYALQP/DYfDEY66rL8AsK/MnP1cF+TAZYO+s58ALAUc/rDDw0+FfGVof/QbuL6xBwBWs8X+eHNzecXpQFMO3N+YGtOPS9Aj808psKymGi/zY1XVhwPEgbQIHnWcD4dhuxl6++gnAPaUMpkYE0nSFH06RFNj9g8Kdjx7BpL46K/fIOj/hWBvTTVBFLUxRik6m6Vb2T71x/Nnwuh5+Ojx26ePIHD985oLsKYmkghMNcY9nCLSDNV/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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 5555,
            dps: 1831.32,
            speed: 50,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 91,
            foreswing: 3,
            backswing: 88,
            tba: 0
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 7777,
            actualDps: 2563.85,
            magnification: "140%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1160000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 300,
                omni_range: [-300, 300]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "532",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQEBAQECAgIGBAQFBQYFBQUJBAQGBwcSCQocEA8xERAgICFNEhI0KytmFhUqMjZHKiF6HByNISFIQz6gKipNUlavMTHENzdkZmd1eX2ndlqMjpLLkXGdpKryvJX///9LEK44AAAAIHRSTlMAHDxjwd6l/oT//v//vP/////////+///+////////AOA5anQAAANzSURBVFiFpZeLkqo4EIYhXEIuJuQeZPS8/1vuH3Sc49TuErCpoizL/tL3tM2fd2neZbxMkI4Q0n5/9Vvh/wGD9z5Gb42X5wAd5cYXgJrOAS43wRmXRg3NOcB6zyEHynpyDtAuS75+3TP9MaAGMF2654GD+7ri+bqORwBTcDj4cpnIxGnRXu9fXddNl3BpqwBOCx3yeludiooKIG4MyHW93VxbASDOaaakWG5ZGmsYvd4jF25d1yWIGkCrgzbRSKGN4dqB4GYlqc6L7upiQC7CKO+lTSnOAeHIwV2veWakOo2TjMnHFGNS+gZZwv2e52cx1gBa6S1aIEWvxLIuWbOQ3Rz9VF1Io5JoIe+NEnlxSErJiU+yGkCkQgLwUiK4WWxJ1Db5rrqUJykl51JxQbnT2gX4oWKc6nuhg7aSnHJkkBeC5kbxukp82qAsQlBeGAkoCiHN0B7qxlHBhA1AEY4e3XCwnTsDAwpEMLwOtfMzE1wyJoTQbnYzbY8DmoFSUcS54OiZiTQwhkxKOXMh+Xgc0KGODIqnRFElSY4CWuTdKp/wMDYnPx4FTAoGqNJSAPCYDl8sxQCD6oVwDoDvjgG2drLxAWAc02E8BigePPUjOgIAdQzQIwL+oV9i4FMy5Ahgy+EDgCByZtNzHlUCoP/yIHkqUQgp8XrApKR8eZAsNQDEbx8qAJ0y/CcESVHLeBnRfSWgU55L+8pB4tRKWj6YuoFCVJTc2m8DYkQSDbXFhKEGQGQy3PzoIwQwh24++IqhCv3I1V/nJ4Op4DT1CGNS+5frYJP6KwAASCq0zqKYsDmxA+hnL98MiLQM9SAeUcDNsOeCeHOgeKBDuGVO2WaCITuApqfmDcChnx0Wvc0EOLEHaBH0EgHvnznIOS+obLUlInq6B2go5eUsYx4GCCwYHHccHahBImS/CyADZbYA0mZAWEPfD/1Emh5N7eluDCAjFTizLBmJwYDvWdYxa8VuFh7zbOpxq8AXCQMurzGJth4PjPV2BELn/FrTcVXVLxjb7xlDDeSfO4mQI2Md+pRit7mFtnmTagCBB3kJaz4LQNTRhUKE6SwA/3cYWpmeB6CmsB6w/jygGcuCwT4AFAv0+AmAYRp9BKDYsz4BdKUjyAeApu3Irzo6CPgX2QW009gPw0C3hn4Jvhn6fuwOAH7LfwD+AbJSMKbrcf7pAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 6000,
            dps: 865.38,
            speed: 8,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 208,
            foreswing: 27,
            backswing: 78,
            tba: 84
          },
          stageStats: {
            actualHp: 416000,
            actualAp: 7800,
            actualDps: 1124.99,
            magnification: "130%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1050000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [2000, 2000, 2000],
                timings: [27, 34, 41]
            },
            "omni-strike": {
                standing_range: 425,
                omni_range: [-700, 425]
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
            "toxic": {
                chance: 100,
                damage: 20
            }
          }
        },
        {
          enemyId: "531",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQECAgICAgICAwUDAwMDAwMDAwMDAwMDAwIDBAQEAwMEAwMBBRYGBgYKDA0MDAwMDAsHEBcNDg8KEBYTDw0YDg8NExYYEg0aEQkVFhUVFhQdFQkjEwkFGy8PGSIRGSMYGRYcGBMZGhcrFgsSHiohHx0qHBQ4FwoHJ0EjIRcVJDIkJiIYKTkxJB0wKB0pKyUpKyQqKiU1JhwdLj9OIQw9KR4ZM04xMCkjNEZILhwlOEs7Myk9MyczNy5LMSMpPVE6OzJwKQdWMx9KOi0sQlc8QDdCPTpAQzlaPSuEMQNGRztlPylITD9MT0NkRzGmLwBqRS9cSz1QVUdxSjBYUk2cPgpVWUt0TzZyUzlYXU97UjerRQZlW1dcYVKWUB1fZVaEWDyAWz2kVxNlaluMYURqcF+bYS+3XQ+WZkZwdmSvah+jbUnMZRd5gGusdU/OdxS2f1TnfiHFiV3MkWLXmGbjpnX///9n9eH2AAAAgHRSTlMABizd8RohEOf/WYfQaJKkwzezR3j/mt+2le3B/Hv/0opf/5hGrv//7OPP/ur//v///1b/////oP/w1ob////////u//+6////////////mP////////+p//////+N////1v///6b/////6///////////////////////////AJ/uZzwAAAWcSURBVFiFndfhW9pGGADwSAdUFEFBBRHsYtegMaE2CY02xWBoQgTT0JhsGGZocBhmoLWiDJ3tv75D1+lkmrD3E9zzvL+7e+9yuUDfbgMaijcff//4Zrj5292kh4Fn71Z7Xy//vPro/x9AYAzy05JUaPV7vavXIwP+MByAYqqm8nDr6vKqMnbd+iriGpin0Q0ortm2zpbK9VbuJrNSTboD/Anjiyy+C26Ypp7J4Xj13U37TL29GXEBJDcMq/NFVHhUNFS01j/p/ezxREHnM5VWtZx0BMKkafKk3pRNWDbJSr9/0l5dYuUNyLstCNV2wgkIwHChYiqyTNNSU03tdfvVXMHunG9CyQpKs+yyI4DDWQFhdTmFmzZN5/ZOuoJ83rTNyHOeZ2neEViGUXp/r4yjoqlLuKzmXlbKumVqdhJapmmajDgA0zC8uHd1KaCsaDRJ2ZC0Aik2m01DWvJ7SJFfcVqFGE6ONy4r2QIviiKp2LpqGKZlNk2Jj0RFWd90AKIoisKFWqPbzaI8Tat6x9I0W9dNk6Yjq7woxxyAOA6jeLbVb7e7tXGeFXVT63QUBYwgu5agWVpZdgAiOBByrUa9+7WXgmletHmalyzLtNgay4uSFnAAkjgKw6lqvdtvtXJCjietJquC/A5f2SM1mVecgARJjrOS0Ou3cyWhV5JktmPZltHswC9LZUkRxZXHt7JvZgWNbX6t1xpCLpOtV5QOKnWalmXLQq7SLtCstPL4RvJD3mnI/35fyOZy1VZNoDsGKVv2Fw2ttiv1T+XGtrvz4HVb2Gu0uu1ahj+3DbujhjzB7WqjUa8H3QFeoSrUWu1qq5GFVasj2r+BQ+JZqVEKuT2RApVKtVZrNC7/rAoFZen9r4PGyPaq6yMNSgrZMsuC06x3IqwE/m4cg9wD0PyL2ZtAM7Mz0P1wBoKpndP+2eFBt/H2tFaaHh2I7vxycPTp6ODwaOf484fk6IBvDUFmZ4l1ajbz9mVq8v6ryRnwLGAURxFFjnmR2nn7Ysk/KpDYAgBDMcU8Ufqws86lg6MCDEUwDJMHcXx4vL5VZIIjAf40BvI5gilu8WfHn7by3C4TGAUIIBSWB/1jzLp48flU3uK4XWp6BGCJANkMRhDIbOHi9I/9dQaMIe1+J/owKp/n8sx3oLUOJsEVE66BIAJ6HBSQWZgDwOcjAOS5Yj7qFohjDDeIPBODXl8cHx6sX//bpTwugQRxPQKOwyLQq4uzDzsEQVBgVXaXXALzxBYH0vPFNLjXnJ7VUtl1AgNlLeYDbgEwhUENJiDoeelt/WmKwMC2BnVccgekicEicLuYF4J+XJv4yTe1sIgRg5a0K2AaLAIAiszgCIxEwFkNeRcRhMpTXMwVEEcIMAOuuHC7c7yLg61BIK5qMJYmBjXYZSb+yYcmEALsbQxzBYRAxajdPHVnAD4EA8tIMfkFrzMQXUQIBGOQxTsPcAAhcI7BifS808sVxByMYhggYrf5kG9qbS+7mMniPhdTCGZwhKDyzDJ0NxKiqCmm7gZIkqkslaGIp967QJRVTctSPG5GQPMkXcZjvn8BXlSWdYN2A8QlleWlxP2TPCZqekdxM4W4rPAK6buXD3lwUXEJaLqhTdzPh6AVUATJDTCvmiY5NgzMSbpOuqhBgNdUZW44H5oDt0Yj7gj4UcO0pcBw/hjM69a55AiEJIU3RM8wMCfyYGyszwEI0IquqhvDJfDwHRnnWTP+OOAHdypbUzeHB+DJahIrNW3p8e+FkFjdV1Rp5T9q6JtboUVJN/HAI8CY0AKXs7p4+yCPDeL7n+lVXq1ctqIPA1FwO62edFOhmXB4cvLJkydPbwL8mpwMhybCKAo+wtqrnoeAGTQjCHVh/NFIVdC5B6fgiwSjU9f9X3f/w/e4GUQ4PBOaigYjPv9d4C9ruzCH8lGnzAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 480000,
            ap: 2200,
            dps: 795.18,
            speed: 17,
            range: 175,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 83,
            foreswing: 4,
            backswing: 47,
            tba: 40
          },
          stageStats: {
            actualHp: 624000,
            actualAp: 2860,
            actualDps: 1033.73,
            magnification: "130%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1050000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 300,
                omni_range: [-300, 300]
            },
            "wave": {
                chance: 100,
                level: 3
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "530",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5000,
            dps: 857.14,
            speed: 25,
            range: 450,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 175,
            foreswing: 48,
            backswing: 58,
            tba: 64
          },
          stageStats: {
            actualHp: 468000,
            actualAp: 6500,
            actualDps: 1114.28,
            magnification: "130%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1050000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "529",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQEDAgMHBAMFBQgJBQYICRERCgseHh88EhEZKUc1KSGMBwwTMG1iKSBCPDIQRa/JEBhtSDoeW9GEYU31LjMibO9QeLGlaFU8iPHCgGZZpPiMrLfdsmLg1JTx/MT///97tpyRAAAAIHRSTlMAIttOtIT+//zE/v/4//7///7//////////v//////AFPDFOIAAAV9SURBVFiFnZeJkqs4DEXD4gXjBWMMGAPv//9yrpzueT3dhHSNqlIJqdKxLMnX4vGH7PHOWKfZ9//+PF1/A2Aub+va/V9A1cXziOu2fYvht4BGx/3Icdu22PwawP4uVumYj+OIsM39DlA1j1Z1DasKSoxjPhDCSpjuV4AHMl4rrVmF3MNc3vf9PNM0pdT8CvCQinOu3YjExXF0WPs8psEYM/TvAdWjYS3n3lrvx3Vd8ckn/HuOP/hbABOi6wTnKS1LMi7GdXYRgDRIH4xRsqnuARUT1gq+pJBSCmt0W3AxnftgfArGSqm7R1XdboHVnJvkF8QwbpvLs8vIX29DMEHJcWya7i4CdADruF8CdrDoMY7zHLC+5Mp7b6XSRurmFtAIJbBdv4BguYtjTqnv+6FXNiguh2ma+vstVHUtjPcUQli8jkeQPXXAoDyXU7H6vg8awaUxACAMq7fVDMMAwDQI3hf/NDW3AMZ5MBJZVI4M/t5T5JP8AODXbRUEipAMkiZFHJ0ehuU8AxG87j8I/V0Sa8Y8SiilNMJpbSaPRj4N3BbfDyWUydwAKMMG+QveGD0n0U/+BCGR54oioCDTxG5z8HjUKGPynMt9F2bqj3M/Mxb3m5a9RE2G6g2A4dyhkFZZpSiH53n6oQA4tcS7MiKCYNSSdo/e8djDgHDgb3LkBv7DwN4AKuPhv2AT2L4QcKFOlOkUwXI8mXcAZnH0qI+EWAKURVJFVL/PHOeUS267N4BOSzSiN1iPC4sTgYR4ORx4DIcSS3oTAWQYvYwqeiO4SHvAw2L7hG/uD6sO+7gHNPOqDBmKyYX3+MaPyTO1QCqVEO09oJpzVBQ0YpA4EkEYqsXCHvg2IMjqHtAdEDJppBA29DPaAajZDPNYKUIa/+/d8KKV120cIw7BOB9TyjakPYVjSFk31F/B19U9oIM/CPjkvT8PCMsRQu5TyrlrWu+/XLDXgHkdi815H7ifLV92payQPe6m+YumvwI0ZXH4j8cuORl6R8Agh/txsOodgK0FMJcAVPEs/gUx7cdcvQF0698AhBVfjfrY71+u1ytA5Z6AvB0D2lh9BSgucg4p3FahiQUwr+dOjaBoByUR9AO6kC0fwl0jMbrOx5hXCkD89adU5vNAa3Le311t3ebGiDv92D9y91kIzqGLuB7p4U4PUMR1WykDORCCyw9/AVWD2nucJ/z58mJpHE1zWzyTwUyhyvKy7OA4rSSN2RNpSvsSQOuvOR8995gq7NOf0/6DVLhwTShq/fJmamn/KwJAyr0/c1lcUv4XuRhFKvMUueoaUIm4RgSw49RiqRTgLWUpgLIGFyaOcyiA5hrAHE1V854kpQtiKKRSFIGFvkNKfEjQKQKwawANdus85gmXI60P9ZFSyWceCQB9MiWx7SWAjdQEcz5I1X146rmk3impDF4iMUHxzyz+AOjR0Uw071BhQ4r8eQwLwZJKlhHuM4vfAQigAJBDhVEKs8VTWpzT1FCBxNHbD15zAdCjBmCkCIxyZTs0oscPhqD4PWVTQzEvAAhAjyv8111aXwJwugzbyC1anAuFkqgQ8L9z7BpAgkhbCKxqYM9zW1UMiKilxW1vvaWAXPsTUGELM+VgzL5+/Ncw92MTBMC87TrWtldJbLAD52YqY/X4aVVL84YN/LUiNfOGjc/zsVz4w+oCUI+XAIoBg92W7VUEzykYhPY1gHFNVYvu0h8AIgTLXgEapAkxxFVfAxiVkQppW3bVSJWw6HShdffjJfdpLamsokqA1PwEQMWpUKq9di9JFIWgFFfsZyMJnH8ORod3jvbKhKcDBQrNLd8iaOrynoZe9x9XwZXRWUArYuRZBK/ZVwA6l1mL96TQtfWdtTVCoRjR6E/AP+UMy1ZTTq2tAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 560000,
            ap: 28000,
            dps: 11200.0,
            speed: 20,
            range: 250,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 75,
            foreswing: 16,
            backswing: 40,
            tba: 30
          },
          stageStats: {
            actualHp: 672000,
            actualAp: 33600,
            actualDps: 13440.0,
            magnification: "120%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "950000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-400, 400]
            }
          }
        },
        {
          enemyId: "483",
          enemyName: "ダミー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 750000,
            ap: 8000,
            dps: 6000.0,
            speed: 7,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 40,
            foreswing: 3,
            backswing: 22,
            tba: 0
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 9600,
            actualDps: 7200.0,
            magnification: "120%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "950000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4000, 4000],
                timings: [3, 18]
            },
            "omni-strike": {
                standing_range: 260,
                omni_range: [-780, 260]
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
          enemyId: "486",
          enemyName: "ダミー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 600000,
            ap: 36000,
            dps: 9230.77,
            speed: 16,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 117,
            foreswing: 6,
            backswing: 45,
            tba: 53
          },
          stageStats: {
            actualHp: 720000,
            actualAp: 43200,
            actualDps: 11076.92,
            magnification: "120%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "950000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [12000, 12000, 12000],
                timings: [6, 10, 12]
            },
            "omni-strike": {
                standing_range: 330,
                omni_range: [-330, 330]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "480",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4000,
            dps: 1558.44,
            speed: 14,
            range: 380,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 77,
            foreswing: 16,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 220000,
            actualAp: 4400,
            actualDps: 1714.28,
            magnification: "110%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "850000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-400, 600]
            }
          }
        },
        {
          enemyId: "481",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5100,
            dps: 3923.08,
            speed: 25,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 39,
            foreswing: 8,
            backswing: 15,
            tba: 0
          },
          stageStats: {
            actualHp: 396000,
            actualAp: 5610,
            actualDps: 4315.39,
            magnification: "110%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "850000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [1700, 1700, 1700],
                timings: [8, 16, 24]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "528",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAABAQEBAQEBAQECAgEDAgEEAQEFAgEFAwIGAwIFBQYFBQUKCAcTDwwGFi4aFBIcFAoeFQ0fFxEZGRkhGxMoHhEgISIILDg6Hw0wKB4COEkqKDg4LSVCLhRLLAk/LiNjHxYUPks2NUpENSsFTGEYSVM2QFJgOgZfOSALWGdIQT8dVV6ZJBtVRTVrRgoSYXEoXWFHSmthSThRUVGMQQd1UQwZbHt5SjdsV0d/Wgw2bHFUW4BdX110XEGKVDyIXwoqgIhFZLOXVz6SZwt6Z1ZZboiNYUZxaXKYbg7CWQmrX0GDcFyWak14c32fdhCOdlxufpe1aUuofgpCmJqjdFaUfmSGgIK+c1K8hw6tgWKOjZDMelilj3q6iGfPhWHLmxCimJe2l3e4l3nUjWbNmneopaXfl23jqRzloHXNqYe0r7Pnp33WtpHCurv0roH9xhTNw7/uu5H+tofxwpj1xZr4yZ71zaX90KL61a/+2av/2rDn49X/4bP/6Ln/88D//9cBWvlkAAAAgHRSTlNDABEeL1uqlch9/+EAAP//mHK2AOTK///9mv//ANz//////cT////////+///V//////7//////+b///////////////7/////////////AP//////////////////////AP//////////////////////////////AP///////5IyRWUAAAknSURBVFiFnZeJV9rYF8dZXTAF61RBqVBxIWBFDYWUlqUDCAxEKkwgstYhGIOhqdnzSxP41+fRTjudSv319AYO54TcD9+7vPcuJvNPm23tif3+XdPPOUNmyLriDaxDvwiwra2tO1wuh8Pyi4AVl3fD5dpwrfyqgiXXxobLG456F+8RfgYALQP/DYfDEY66rL8AsK/MnP1cF+TAZYO+s58ALAUc/rDDw0+FfGVof/QbuL6xBwBWs8X+eHNzecXpQFMO3N+YGtOPS9Aj808psKymGi/zY1XVhwPEgbQIHnWcD4dhuxl6++gnAPaUMpkYE0nSFH06RFNj9g8Kdjx7BpL46K/fIOj/hWBvTTVBFLUxRik6m6Vb2T71x/Nnwuh5+Ojx26ePIHD985oLsKYmkghMNcY9nCLSDNV/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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 5555,
            dps: 1831.32,
            speed: 50,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 91,
            foreswing: 3,
            backswing: 88,
            tba: 0
          },
          stageStats: {
            actualHp: 550000,
            actualAp: 6110,
            actualDps: 2014.45,
            magnification: "110%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "850000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 300,
                omni_range: [-300, 300]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "532",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQEBAQECAgIGBAQFBQYFBQUJBAQGBwcSCQocEA8xERAgICFNEhI0KytmFhUqMjZHKiF6HByNISFIQz6gKipNUlavMTHENzdkZmd1eX2ndlqMjpLLkXGdpKryvJX///9LEK44AAAAIHRSTlMAHDxjwd6l/oT//v//vP/////////+///+////////AOA5anQAAANzSURBVFiFpZeLkqo4EIYhXEIuJuQeZPS8/1vuH3Sc49TuErCpoizL/tL3tM2fd2neZbxMkI4Q0n5/9Vvh/wGD9z5Gb42X5wAd5cYXgJrOAS43wRmXRg3NOcB6zyEHynpyDtAuS75+3TP9MaAGMF2654GD+7ri+bqORwBTcDj4cpnIxGnRXu9fXddNl3BpqwBOCx3yeludiooKIG4MyHW93VxbASDOaaakWG5ZGmsYvd4jF25d1yWIGkCrgzbRSKGN4dqB4GYlqc6L7upiQC7CKO+lTSnOAeHIwV2veWakOo2TjMnHFGNS+gZZwv2e52cx1gBa6S1aIEWvxLIuWbOQ3Rz9VF1Io5JoIe+NEnlxSErJiU+yGkCkQgLwUiK4WWxJ1Db5rrqUJykl51JxQbnT2gX4oWKc6nuhg7aSnHJkkBeC5kbxukp82qAsQlBeGAkoCiHN0B7qxlHBhA1AEY4e3XCwnTsDAwpEMLwOtfMzE1wyJoTQbnYzbY8DmoFSUcS54OiZiTQwhkxKOXMh+Xgc0KGODIqnRFElSY4CWuTdKp/wMDYnPx4FTAoGqNJSAPCYDl8sxQCD6oVwDoDvjgG2drLxAWAc02E8BigePPUjOgIAdQzQIwL+oV9i4FMy5Ahgy+EDgCByZtNzHlUCoP/yIHkqUQgp8XrApKR8eZAsNQDEbx8qAJ0y/CcESVHLeBnRfSWgU55L+8pB4tRKWj6YuoFCVJTc2m8DYkQSDbXFhKEGQGQy3PzoIwQwh24++IqhCv3I1V/nJ4Op4DT1CGNS+5frYJP6KwAASCq0zqKYsDmxA+hnL98MiLQM9SAeUcDNsOeCeHOgeKBDuGVO2WaCITuApqfmDcChnx0Wvc0EOLEHaBH0EgHvnznIOS+obLUlInq6B2go5eUsYx4GCCwYHHccHahBImS/CyADZbYA0mZAWEPfD/1Emh5N7eluDCAjFTizLBmJwYDvWdYxa8VuFh7zbOpxq8AXCQMurzGJth4PjPV2BELn/FrTcVXVLxjb7xlDDeSfO4mQI2Md+pRit7mFtnmTagCBB3kJaz4LQNTRhUKE6SwA/3cYWpmeB6CmsB6w/jygGcuCwT4AFAv0+AmAYRp9BKDYsz4BdKUjyAeApu3Irzo6CPgX2QW009gPw0C3hn4Jvhn6fuwOAH7LfwD+AbJSMKbrcf7pAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 6000,
            dps: 865.38,
            speed: 8,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 208,
            foreswing: 27,
            backswing: 78,
            tba: 84
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 6000,
            actualDps: 865.38,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "750000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [2000, 2000, 2000],
                timings: [27, 34, 41]
            },
            "omni-strike": {
                standing_range: 425,
                omni_range: [-700, 425]
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
            "toxic": {
                chance: 100,
                damage: 20
            }
          }
        },
        {
          enemyId: "531",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQECAgICAgICAwUDAwMDAwMDAwMDAwMDAwIDBAQEAwMEAwMBBRYGBgYKDA0MDAwMDAsHEBcNDg8KEBYTDw0YDg8NExYYEg0aEQkVFhUVFhQdFQkjEwkFGy8PGSIRGSMYGRYcGBMZGhcrFgsSHiohHx0qHBQ4FwoHJ0EjIRcVJDIkJiIYKTkxJB0wKB0pKyUpKyQqKiU1JhwdLj9OIQw9KR4ZM04xMCkjNEZILhwlOEs7Myk9MyczNy5LMSMpPVE6OzJwKQdWMx9KOi0sQlc8QDdCPTpAQzlaPSuEMQNGRztlPylITD9MT0NkRzGmLwBqRS9cSz1QVUdxSjBYUk2cPgpVWUt0TzZyUzlYXU97UjerRQZlW1dcYVKWUB1fZVaEWDyAWz2kVxNlaluMYURqcF+bYS+3XQ+WZkZwdmSvah+jbUnMZRd5gGusdU/OdxS2f1TnfiHFiV3MkWLXmGbjpnX///9n9eH2AAAAgHRSTlMABizd8RohEOf/WYfQaJKkwzezR3j/mt+2le3B/Hv/0opf/5hGrv//7OPP/ur//v///1b/////oP/w1ob////////u//+6////////////mP////////+p//////+N////1v///6b/////6///////////////////////////AJ/uZzwAAAWcSURBVFiFndfhW9pGGADwSAdUFEFBBRHsYtegMaE2CY02xWBoQgTT0JhsGGZocBhmoLWiDJ3tv75D1+lkmrD3E9zzvL+7e+9yuUDfbgMaijcff//4Zrj5292kh4Fn71Z7Xy//vPro/x9AYAzy05JUaPV7vavXIwP+MByAYqqm8nDr6vKqMnbd+iriGpin0Q0ortm2zpbK9VbuJrNSTboD/Anjiyy+C26Ypp7J4Xj13U37TL29GXEBJDcMq/NFVHhUNFS01j/p/ezxREHnM5VWtZx0BMKkafKk3pRNWDbJSr9/0l5dYuUNyLstCNV2wgkIwHChYiqyTNNSU03tdfvVXMHunG9CyQpKs+yyI4DDWQFhdTmFmzZN5/ZOuoJ83rTNyHOeZ2neEViGUXp/r4yjoqlLuKzmXlbKumVqdhJapmmajDgA0zC8uHd1KaCsaDRJ2ZC0Aik2m01DWvJ7SJFfcVqFGE6ONy4r2QIviiKp2LpqGKZlNk2Jj0RFWd90AKIoisKFWqPbzaI8Tat6x9I0W9dNk6Yjq7woxxyAOA6jeLbVb7e7tXGeFXVT63QUBYwgu5agWVpZdgAiOBByrUa9+7WXgmletHmalyzLtNgay4uSFnAAkjgKw6lqvdtvtXJCjietJquC/A5f2SM1mVecgARJjrOS0Ou3cyWhV5JktmPZltHswC9LZUkRxZXHt7JvZgWNbX6t1xpCLpOtV5QOKnWalmXLQq7SLtCstPL4RvJD3mnI/35fyOZy1VZNoDsGKVv2Fw2ttiv1T+XGtrvz4HVb2Gu0uu1ahj+3DbujhjzB7WqjUa8H3QFeoSrUWu1qq5GFVasj2r+BQ+JZqVEKuT2RApVKtVZrNC7/rAoFZen9r4PGyPaq6yMNSgrZMsuC06x3IqwE/m4cg9wD0PyL2ZtAM7Mz0P1wBoKpndP+2eFBt/H2tFaaHh2I7vxycPTp6ODwaOf484fk6IBvDUFmZ4l1ajbz9mVq8v6ryRnwLGAURxFFjnmR2nn7Ysk/KpDYAgBDMcU8Ufqws86lg6MCDEUwDJMHcXx4vL5VZIIjAf40BvI5gilu8WfHn7by3C4TGAUIIBSWB/1jzLp48flU3uK4XWp6BGCJANkMRhDIbOHi9I/9dQaMIe1+J/owKp/n8sx3oLUOJsEVE66BIAJ6HBSQWZgDwOcjAOS5Yj7qFohjDDeIPBODXl8cHx6sX//bpTwugQRxPQKOwyLQq4uzDzsEQVBgVXaXXALzxBYH0vPFNLjXnJ7VUtl1AgNlLeYDbgEwhUENJiDoeelt/WmKwMC2BnVccgekicEicLuYF4J+XJv4yTe1sIgRg5a0K2AaLAIAiszgCIxEwFkNeRcRhMpTXMwVEEcIMAOuuHC7c7yLg61BIK5qMJYmBjXYZSb+yYcmEALsbQxzBYRAxajdPHVnAD4EA8tIMfkFrzMQXUQIBGOQxTsPcAAhcI7BifS808sVxByMYhggYrf5kG9qbS+7mMniPhdTCGZwhKDyzDJ0NxKiqCmm7gZIkqkslaGIp967QJRVTctSPG5GQPMkXcZjvn8BXlSWdYN2A8QlleWlxP2TPCZqekdxM4W4rPAK6buXD3lwUXEJaLqhTdzPh6AVUATJDTCvmiY5NgzMSbpOuqhBgNdUZW44H5oDt0Yj7gj4UcO0pcBw/hjM69a55AiEJIU3RM8wMCfyYGyszwEI0IquqhvDJfDwHRnnWTP+OOAHdypbUzeHB+DJahIrNW3p8e+FkFjdV1Rp5T9q6JtboUVJN/HAI8CY0AKXs7p4+yCPDeL7n+lVXq1ctqIPA1FwO62edFOhmXB4cvLJkydPbwL8mpwMhybCKAo+wtqrnoeAGTQjCHVh/NFIVdC5B6fgiwSjU9f9X3f/w/e4GUQ4PBOaigYjPv9d4C9ruzCH8lGnzAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 480000,
            ap: 2200,
            dps: 795.18,
            speed: 17,
            range: 175,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 83,
            foreswing: 4,
            backswing: 47,
            tba: 40
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 2200,
            actualDps: 795.18,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "750000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 300,
                omni_range: [-300, 300]
            },
            "wave": {
                chance: 100,
                level: 3
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "530",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5000,
            dps: 857.14,
            speed: 25,
            range: 450,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 175,
            foreswing: 48,
            backswing: 58,
            tba: 64
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 5000,
            actualDps: 857.14,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "750000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "529",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 560000,
            ap: 28000,
            dps: 11200.0,
            speed: 20,
            range: 250,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 75,
            foreswing: 16,
            backswing: 40,
            tba: 30
          },
          stageStats: {
            actualHp: 504000,
            actualAp: 25200,
            actualDps: 10080.0,
            magnification: "90%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "660000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-400, 400]
            }
          }
        },
        {
          enemyId: "483",
          enemyName: "ダミー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 750000,
            ap: 8000,
            dps: 6000.0,
            speed: 7,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 40,
            foreswing: 3,
            backswing: 22,
            tba: 0
          },
          stageStats: {
            actualHp: 675000,
            actualAp: 7200,
            actualDps: 5400.0,
            magnification: "90%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "660000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4000, 4000],
                timings: [3, 18]
            },
            "omni-strike": {
                standing_range: 260,
                omni_range: [-780, 260]
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
          enemyId: "486",
          enemyName: "ダミー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 600000,
            ap: 36000,
            dps: 9230.77,
            speed: 16,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 117,
            foreswing: 6,
            backswing: 45,
            tba: 53
          },
          stageStats: {
            actualHp: 540000,
            actualAp: 32400,
            actualDps: 8307.69,
            magnification: "90%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "660000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [12000, 12000, 12000],
                timings: [6, 10, 12]
            },
            "omni-strike": {
                standing_range: 330,
                omni_range: [-330, 330]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "480",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4000,
            dps: 1558.44,
            speed: 14,
            range: 380,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 77,
            foreswing: 16,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 3200,
            actualDps: 1246.75,
            magnification: "80%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "570000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-400, 600]
            }
          }
        },
        {
          enemyId: "481",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUCAgICAgEDAwIEBAQFBAMFBQUGBQQIBgUMCw8PDQwIDhsRDw0WEw8VFRQcGxkcGx8LHUowKBcfK0UxKh0PKmsPLHI0LSgwLzA0MjRWLxpCOSYnPGcTOZVKOzRuNSJUQypERkYpR4oXRa9hSipIU2BVUVFXU0ZZUU2JQiwdUctLYo5uYlObUDpvamdtbXGoXkeKc1OyZk58fYSMg36KjJWshm2gnKLFoW6rq7a9vcrlwajS093717776dr8+vn///+dhGQzAAAAQHRSTlMA4Ar/GMExJKZE1VluhwD+/9/tu//BmwD//dT//x//7/7/////AZDe//////+8/f/9///o///8//7///////8AGS6y6wAABLJJREFUWIWllwt3ojoQxykiAsJGC6WgLIbHFpGXRkQe4v3+3+pO0PZ2u1Vw73j0nKjzyz8zk0lg/vmfxvw26Ix7KxJZT9445pbdB7DJ+Xwu0jRX2b8D8CUAysgwjLn4VwCRVFVOPAAgJHy/jLsAsSRpFBkIXqBCeBgAEaxS8EbIqGuEnr+VcAcwhflzPBp5ET7VGCHp20DeBvBlkpaBMBodDse2jiKZf/f5MQwgl0WTyyIa4bJu22p/oxRuAtgkSaqE38/RtgBAW3/k8Spgoov3FbBKlXDim76tDxSw/1II4vYg9wRRfqNRU6Lj8XA6H2V5yv6ngFeSY8D2AHjl5UXhBMs/bIO9LlnOp3rWg8NW7AmiqLmbI3k2NmEUSYqkWRvyQhPBTlhmuj3Uel8WhDQ/kk2kORvfWzrGDHhhV0vJfrw4te9ZuZ2FxZYcN6Fjadj3w3CJNNd1KYBdFBg39bQvjdzKd/1tqFlL7IRh6FqaZiwlEcIgIChQvbcO+KVvWdibzVxwd0L4nPnbaM7zcoJxgaRJHwBiCJPOPLwE6b7vwGgZHYugbs+1MUqJ2AdgBc2C6TdbPNM0b+lRWH06QUmd9tMxLn7+utjtLEAdSJ7j1wfD8AwNe+Ycb4FQH5OfDMeL3I+L3QFAuRqrw6k91UUE8yOEAwHqWv/xC3567d+NYJwiwqRte27rHBpCXqjRaso8AKBb4VCDbrr2CGGj3EMtPggg6aGzo4d8Q6XJewjAz9OiaZumyaEzFqRrSo8AxGdIwKZs2raQnpBx3Y6vgwH8s2diCyrIcVxtHMmfuuowgGqv17YP+8CFt7WSuQcBU8+O47VJCWBuFK/1CfPV7gFUcx1nWWxvQliG60bZLrOVr4fDHQA7tylgF3uOplmh68Fol309pwcAdmvvCljDKBMeAJgXQAa5dDtAJ0geDjCoBxDiT4BsZ/IDAdxqZl9cMrMDQFJhEVmmDgdcJGS79QVgX4KyVoYCtJnZTZnFtCVTgG13BGEoQEN2JyE2oC9jZHYa4njnicMA0FXRRUIHMGTBpAD4Sh4CmHi0LXeLoAos3xAZXoAxhHIQgPcsKsEGwtqA/eAb9DSaonVs2+pwAJWwswHg+pjOOzHpFvX6TyboJtAKrCtACy0AKBdAHBXNvvdkggvGkgIg9FB8kMbQ6Q7ECdQ3AEq5H6BTALJtM46RZrkOXqrQD38tom1RkVztBygAWNLU26bhOD5eWgt6vwnK6pwTovcD2IVlbS7lN1+Bu7XqymeaV21JhiyB4VdaHpm2aXuqalnOxZ/h1KgoynyAAgijkZaE5CTXFw5W3+POLpqmKJMhAEYx8pyUORGDxfuVhi6CNFURsEMAbAD3/TRVGf63TqiXVfleCPcBzKIkUbr6ek1mA3gOkQcB9OJTxj5LKIqAGwKYAiDiv/rzedmUV24PgCeEBH88aMhVWVVl+vMVrAcgQhaCP1YwTQlIKKYDAHz+nQJGXORNUyoDliDnBSHfPDLyftlcdmQPQMgh5X9mAQ5ekNBUei9AIdeZ2A+7SggooeTv3FQ5firLQl5V8D9JevowSZLG47EwRjhKsXgbID+NqCECefBHt+xJ+ezzL7JhORbLE1LTAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5100,
            dps: 3923.08,
            speed: 25,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 39,
            foreswing: 8,
            backswing: 15,
            tba: 0
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 4080,
            actualDps: 3138.46,
            magnification: "80%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "570000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [1700, 1700, 1700],
                timings: [8, 16, 24]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "528",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAABAQEBAQEBAQECAgEDAgEEAQEFAgEFAwIGAwIFBQYFBQUKCAcTDwwGFi4aFBIcFAoeFQ0fFxEZGRkhGxMoHhEgISIILDg6Hw0wKB4COEkqKDg4LSVCLhRLLAk/LiNjHxYUPks2NUpENSsFTGEYSVM2QFJgOgZfOSALWGdIQT8dVV6ZJBtVRTVrRgoSYXEoXWFHSmthSThRUVGMQQd1UQwZbHt5SjdsV0d/Wgw2bHFUW4BdX110XEGKVDyIXwoqgIhFZLOXVz6SZwt6Z1ZZboiNYUZxaXKYbg7CWQmrX0GDcFyWak14c32fdhCOdlxufpe1aUuofgpCmJqjdFaUfmSGgIK+c1K8hw6tgWKOjZDMelilj3q6iGfPhWHLmxCimJe2l3e4l3nUjWbNmneopaXfl23jqRzloHXNqYe0r7Pnp33WtpHCurv0roH9xhTNw7/uu5H+tofxwpj1xZr4yZ71zaX90KL61a/+2av/2rDn49X/4bP/6Ln/88D//9cBWvlkAAAAgHRSTlNDABEeL1uqlch9/+EAAP//mHK2AOTK///9mv//ANz//////cT////////+///V//////7//////+b///////////////7/////////////AP//////////////////////AP//////////////////////////////AP///////5IyRWUAAAknSURBVFiFnZeJV9rYF8dZXTAF61RBqVBxIWBFDYWUlqUDCAxEKkwgstYhGIOhqdnzSxP41+fRTjudSv319AYO54TcD9+7vPcuJvNPm23tif3+XdPPOUNmyLriDaxDvwiwra2tO1wuh8Pyi4AVl3fD5dpwrfyqgiXXxobLG456F+8RfgYALQP/DYfDEY66rL8AsK/MnP1cF+TAZYO+s58ALAUc/rDDw0+FfGVof/QbuL6xBwBWs8X+eHNzecXpQFMO3N+YGtOPS9Aj808psKymGi/zY1XVhwPEgbQIHnWcD4dhuxl6++gnAPaUMpkYE0nSFH06RFNj9g8Kdjx7BpL46K/fIOj/hWBvTTVBFLUxRik6m6Vb2T71x/Nnwuh5+Ojx26ePIHD985oLsKYmkghMNcY9nCLSDNV//jzbuh6h8GTC7c4a++trHgBaZjTgLsuqKnKNcqfA11L08+6YqcA9TZoKq98+PFfBriQBBZKqyhKndYl+n4ZTQ4oftjAO3J9em6CHAJB5CeVUUZIFUZEV8AYaSDINF1oYXAFIUTJ2H1awzRdwRVU4RuBYWhBVOZ/uFCgK9jwrCJoiScIkb3kIYO+rY4xhGYpi2CymyoKqVdAsxWfRnqBznKzIRt76EGCXF4wRQZIkRUUQVQcERWukyU56qKnKqMZynIQ8pMBaECVFqRHMACu48lMVZFIQjVY2O9aBGDlFUDS7+VAOTAVeVSlKklVZLFcMAAAJ1ZjyWAN11SZJD8kTCw9VYa3HMBStyaIq8oWuJs0kiJLEgOxLqmw0PKkOFn0gB2uCJnAUY2iaSNHoSBNnLSnJSo9RwKdgNDi9cpV8YoN+ALC1JrKsaCTG0iSPFXhembWUqCooo0uyrI/gYff2Nvnx6EcKFoY6CF6RCj6Sb3kQhudFRdF0HfcxigSaA462339MXk/ef03DfwE2T48HnSNyShfFYAK0H94bkngBRYks3u8RnvBV8zzcvDtvhq1zAaYUKJIqiUJPC6foGtnPptMoiqYjnX42m8Ywz3nSFW22r0Zy1zQXYC2wFAOSruBqw1GjCMZQREHSdAkv8JKm0WGn713lAmcMXV+bn4NdssYKIG0tJeV2Y2x5AOLXVE3Hh/J4hBGwM16HURIDtxumuQA7WeuLIAcM7T4OuQtkDcdaPXLYypaxQgEtR4+PT7sknOd0ZdKanbTQvT44YglOkTk664yfHG+lWHYIVgVJ9xhQDTLrjj/ZzSPjicFJ+gSkYc6makM6jCbLg7DDfXgS3wvTk4muGzw2UmWsg7gPwfNHU5EkOz1p0rA8ffr0XivbfTxoP7Bx5N3Hh/G9faxG9vByGi1kay/c8aWZyEneU36W0g2wLcxRsI6C7hMFZToNO08O90Nbbg+cLRN0n+idxHdau2bbQNhIFZOjCb09L4mNSSXLKaLKsYbqd+/v7+wfH54ko9Fk9DD0xo1MJ0eLlZdLqevbHq0MbN8DIFNjYnR9tCJpNRcxHTn3dvZ3dvZDodBx6Dh+GHIPFc1IL5sXESSM5Edr0PcAy8spo3b9pKYRLudGXy1uAQUAASCHh/sne0kd1JfFbGuor9jOI6bvQ4BW9UGZb/n7hp53BZwwHt4Cfl/sMO72qZpEEtS2aTufd23a7jfSdqsxEnE/KhkNf1obOLa+uIPPk7g7GOwaqkKTrVXLZmDOWoBMCGfoWiFNovm768Yk7HRvAdedGQG0hLtYeFHRZE0kef3IMndD2Z1ogiQNESK70W4HPO5XL/xut3uWha0td7h7V8yVxqBADCFM524o9pEhKCpHjxutlDcc84WwP14cuLecDqdzw+/v3l6dV+sDQ9a4DqmNbHMAR4YkawrVlyYaDXtuUnt5ANjbC1QCW6CrQ8n2e6yOixxLEqQ0Nt0HWNOKLAtsv9YnyrV07iYc2jtJ7u25W7fd/VD81Vnz6q5SL5EUSdZIemi/DzBhPMMw/WynUyvTWK5+eBxtNk/2mldX7/PxN8nK9fv3xXqmJ7I8mSZb90OAFse6oLAozrJUbYhclo7fvKqMms5KMdosekMnIAcfu5cxF97DssTnZfCdgm0aHL1ogWfYArK8fpOKv3kTenVwGjg9OCg229cX8b32Rb2OgD2y3Ons3gdYEZJnyyjN03gWse1+AvwZCpwfBF4nb++uTuN/ti92qu9wqtMhap3V+wBTE8uWyxRVg5HBkS3zAQDOTrynr18HTs+LgVOv9/rq7i4Xw6larUPh/7hB3wBs57fJVCWfTDav7x5bIjf4+at2IBn1np4eBLzF4vmB86x94UngZJlg+JdfvN6+/QqwRK/a159t27yZCSbb4AwpBs6T3kAgkAxc373+/feDaj3Vr4HBY/OLgL/+928VtoFHuwnSFbCYt99V4dOzs+uLi9uLs4uz16c7IJZkrprxtIg+w9LLn30efQswr4HfvG5f3RVBidcjkXopk0Kis70oWamkUrFcKZOLJDC6TNH84LMX9EXBp5UFLZy3gYJ2YEY/uokEI4lSqZor5XK5Uj2XKMUiidhlHe0QNMUP7F8W4zcAK9Jots+jCAIEWGMf6plSwg9HIj44GIS9wQzshC8ziUwQUxlWFLZt/1UAzabTodrDMZysgWN3NRGL5G5uwt7LD4gz8y7sTN/kNjYikeqlq2WAEVZXe0dgbP8mB+CEeqmpBjh96PVZU37IgQgSfmcOAAofYJc/kUjk6tVE0AXTHDh8NUNvIMuWf6tgezmaqtp4pCoSKDG0FkuULkHSYrEMCL1UrVdz1Wom6PPFSv4xOGsVQdbGrYp/zTIDQObH6xV10h2PODBSSWCdQY+DnmAwkinl6jmQxwygBH3gylSr1VjD4Fkw8siGMcpX8puzcX+3Mhjk841CcqzMpqOVpaUniVgm6PH4gNdni8QADbiXqqVICoazrKYPMW6QKiyYTcsrHrxSwVWsBqYAsuf4ZIlECeivlkAYpUwmB2KYOV/WMxHfp+9dMOxweMC/uJVlk8VqMdkX116uo2TrycLSzFZWYiDuWOyyBKxaz1XfVUuJTCIWfPLp64WFhcXF5WW73WSzAuevnWgzmb6OwIueSCaTeFefASKgg3zrnxzMc+xH/9qs9tXV9e3t9bVV0+ynfvAUsL8BKR3NCp/o6jkAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 5555,
            dps: 1831.32,
            speed: 50,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 91,
            foreswing: 3,
            backswing: 88,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 4444,
            actualDps: 1465.06,
            magnification: "80%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "570000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 300,
                omni_range: [-300, 300]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "532",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQEBAQECAgIGBAQFBQYFBQUJBAQGBwcSCQocEA8xERAgICFNEhI0KytmFhUqMjZHKiF6HByNISFIQz6gKipNUlavMTHENzdkZmd1eX2ndlqMjpLLkXGdpKryvJX///9LEK44AAAAIHRSTlMAHDxjwd6l/oT//v//vP/////////+///+////////AOA5anQAAANzSURBVFiFpZeLkqo4EIYhXEIuJuQeZPS8/1vuH3Sc49TuErCpoizL/tL3tM2fd2neZbxMkI4Q0n5/9Vvh/wGD9z5Gb42X5wAd5cYXgJrOAS43wRmXRg3NOcB6zyEHynpyDtAuS75+3TP9MaAGMF2654GD+7ri+bqORwBTcDj4cpnIxGnRXu9fXddNl3BpqwBOCx3yeludiooKIG4MyHW93VxbASDOaaakWG5ZGmsYvd4jF25d1yWIGkCrgzbRSKGN4dqB4GYlqc6L7upiQC7CKO+lTSnOAeHIwV2veWakOo2TjMnHFGNS+gZZwv2e52cx1gBa6S1aIEWvxLIuWbOQ3Rz9VF1Io5JoIe+NEnlxSErJiU+yGkCkQgLwUiK4WWxJ1Db5rrqUJykl51JxQbnT2gX4oWKc6nuhg7aSnHJkkBeC5kbxukp82qAsQlBeGAkoCiHN0B7qxlHBhA1AEY4e3XCwnTsDAwpEMLwOtfMzE1wyJoTQbnYzbY8DmoFSUcS54OiZiTQwhkxKOXMh+Xgc0KGODIqnRFElSY4CWuTdKp/wMDYnPx4FTAoGqNJSAPCYDl8sxQCD6oVwDoDvjgG2drLxAWAc02E8BigePPUjOgIAdQzQIwL+oV9i4FMy5Ahgy+EDgCByZtNzHlUCoP/yIHkqUQgp8XrApKR8eZAsNQDEbx8qAJ0y/CcESVHLeBnRfSWgU55L+8pB4tRKWj6YuoFCVJTc2m8DYkQSDbXFhKEGQGQy3PzoIwQwh24++IqhCv3I1V/nJ4Op4DT1CGNS+5frYJP6KwAASCq0zqKYsDmxA+hnL98MiLQM9SAeUcDNsOeCeHOgeKBDuGVO2WaCITuApqfmDcChnx0Wvc0EOLEHaBH0EgHvnznIOS+obLUlInq6B2go5eUsYx4GCCwYHHccHahBImS/CyADZbYA0mZAWEPfD/1Emh5N7eluDCAjFTizLBmJwYDvWdYxa8VuFh7zbOpxq8AXCQMurzGJth4PjPV2BELn/FrTcVXVLxjb7xlDDeSfO4mQI2Md+pRit7mFtnmTagCBB3kJaz4LQNTRhUKE6SwA/3cYWpmeB6CmsB6w/jygGcuCwT4AFAv0+AmAYRp9BKDYsz4BdKUjyAeApu3Irzo6CPgX2QW009gPw0C3hn4Jvhn6fuwOAH7LfwD+AbJSMKbrcf7pAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 6000,
            dps: 865.38,
            speed: 8,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 208,
            foreswing: 27,
            backswing: 78,
            tba: 84
          },
          stageStats: {
            actualHp: 224000,
            actualAp: 4200,
            actualDps: 605.77,
            magnification: "70%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "480000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [2000, 2000, 2000],
                timings: [27, 34, 41]
            },
            "omni-strike": {
                standing_range: 425,
                omni_range: [-700, 425]
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
            "toxic": {
                chance: 100,
                damage: 20
            }
          }
        },
        {
          enemyId: "531",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQECAgICAgICAwUDAwMDAwMDAwMDAwMDAwIDBAQEAwMEAwMBBRYGBgYKDA0MDAwMDAsHEBcNDg8KEBYTDw0YDg8NExYYEg0aEQkVFhUVFhQdFQkjEwkFGy8PGSIRGSMYGRYcGBMZGhcrFgsSHiohHx0qHBQ4FwoHJ0EjIRcVJDIkJiIYKTkxJB0wKB0pKyUpKyQqKiU1JhwdLj9OIQw9KR4ZM04xMCkjNEZILhwlOEs7Myk9MyczNy5LMSMpPVE6OzJwKQdWMx9KOi0sQlc8QDdCPTpAQzlaPSuEMQNGRztlPylITD9MT0NkRzGmLwBqRS9cSz1QVUdxSjBYUk2cPgpVWUt0TzZyUzlYXU97UjerRQZlW1dcYVKWUB1fZVaEWDyAWz2kVxNlaluMYURqcF+bYS+3XQ+WZkZwdmSvah+jbUnMZRd5gGusdU/OdxS2f1TnfiHFiV3MkWLXmGbjpnX///9n9eH2AAAAgHRSTlMABizd8RohEOf/WYfQaJKkwzezR3j/mt+2le3B/Hv/0opf/5hGrv//7OPP/ur//v///1b/////oP/w1ob////////u//+6////////////mP////////+p//////+N////1v///6b/////6///////////////////////////AJ/uZzwAAAWcSURBVFiFndfhW9pGGADwSAdUFEFBBRHsYtegMaE2CY02xWBoQgTT0JhsGGZocBhmoLWiDJ3tv75D1+lkmrD3E9zzvL+7e+9yuUDfbgMaijcff//4Zrj5292kh4Fn71Z7Xy//vPro/x9AYAzy05JUaPV7vavXIwP+MByAYqqm8nDr6vKqMnbd+iriGpin0Q0ortm2zpbK9VbuJrNSTboD/Anjiyy+C26Ypp7J4Xj13U37TL29GXEBJDcMq/NFVHhUNFS01j/p/ezxREHnM5VWtZx0BMKkafKk3pRNWDbJSr9/0l5dYuUNyLstCNV2wgkIwHChYiqyTNNSU03tdfvVXMHunG9CyQpKs+yyI4DDWQFhdTmFmzZN5/ZOuoJ83rTNyHOeZ2neEViGUXp/r4yjoqlLuKzmXlbKumVqdhJapmmajDgA0zC8uHd1KaCsaDRJ2ZC0Aik2m01DWvJ7SJFfcVqFGE6ONy4r2QIviiKp2LpqGKZlNk2Jj0RFWd90AKIoisKFWqPbzaI8Tat6x9I0W9dNk6Yjq7woxxyAOA6jeLbVb7e7tXGeFXVT63QUBYwgu5agWVpZdgAiOBByrUa9+7WXgmletHmalyzLtNgay4uSFnAAkjgKw6lqvdtvtXJCjietJquC/A5f2SM1mVecgARJjrOS0Ou3cyWhV5JktmPZltHswC9LZUkRxZXHt7JvZgWNbX6t1xpCLpOtV5QOKnWalmXLQq7SLtCstPL4RvJD3mnI/35fyOZy1VZNoDsGKVv2Fw2ttiv1T+XGtrvz4HVb2Gu0uu1ahj+3DbujhjzB7WqjUa8H3QFeoSrUWu1qq5GFVasj2r+BQ+JZqVEKuT2RApVKtVZrNC7/rAoFZen9r4PGyPaq6yMNSgrZMsuC06x3IqwE/m4cg9wD0PyL2ZtAM7Mz0P1wBoKpndP+2eFBt/H2tFaaHh2I7vxycPTp6ODwaOf484fk6IBvDUFmZ4l1ajbz9mVq8v6ryRnwLGAURxFFjnmR2nn7Ysk/KpDYAgBDMcU8Ufqws86lg6MCDEUwDJMHcXx4vL5VZIIjAf40BvI5gilu8WfHn7by3C4TGAUIIBSWB/1jzLp48flU3uK4XWp6BGCJANkMRhDIbOHi9I/9dQaMIe1+J/owKp/n8sx3oLUOJsEVE66BIAJ6HBSQWZgDwOcjAOS5Yj7qFohjDDeIPBODXl8cHx6sX//bpTwugQRxPQKOwyLQq4uzDzsEQVBgVXaXXALzxBYH0vPFNLjXnJ7VUtl1AgNlLeYDbgEwhUENJiDoeelt/WmKwMC2BnVccgekicEicLuYF4J+XJv4yTe1sIgRg5a0K2AaLAIAiszgCIxEwFkNeRcRhMpTXMwVEEcIMAOuuHC7c7yLg61BIK5qMJYmBjXYZSb+yYcmEALsbQxzBYRAxajdPHVnAD4EA8tIMfkFrzMQXUQIBGOQxTsPcAAhcI7BifS808sVxByMYhggYrf5kG9qbS+7mMniPhdTCGZwhKDyzDJ0NxKiqCmm7gZIkqkslaGIp967QJRVTctSPG5GQPMkXcZjvn8BXlSWdYN2A8QlleWlxP2TPCZqekdxM4W4rPAK6buXD3lwUXEJaLqhTdzPh6AVUATJDTCvmiY5NgzMSbpOuqhBgNdUZW44H5oDt0Yj7gj4UcO0pcBw/hjM69a55AiEJIU3RM8wMCfyYGyszwEI0IquqhvDJfDwHRnnWTP+OOAHdypbUzeHB+DJahIrNW3p8e+FkFjdV1Rp5T9q6JtboUVJN/HAI8CY0AKXs7p4+yCPDeL7n+lVXq1ctqIPA1FwO62edFOhmXB4cvLJkydPbwL8mpwMhybCKAo+wtqrnoeAGTQjCHVh/NFIVdC5B6fgiwSjU9f9X3f/w/e4GUQ4PBOaigYjPv9d4C9ruzCH8lGnzAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 480000,
            ap: 2200,
            dps: 795.18,
            speed: 17,
            range: 175,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 83,
            foreswing: 4,
            backswing: 47,
            tba: 40
          },
          stageStats: {
            actualHp: 336000,
            actualAp: 1540,
            actualDps: 556.63,
            magnification: "70%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "480000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 300,
                omni_range: [-300, 300]
            },
            "wave": {
                chance: 100,
                level: 3
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "530",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUBAQEBAQEBAQECAgEEBAQIBgUJBgQJBgQRCgcQCw0UExMeFxIcGR0jIB8nIBozIBMcJ0swLCkxMTE0NDRwHgs2O0kpPXBBQDdSPSJKQTurHB9KSUo2SHxRUE05UZBUVFNoUDWxMihJYaRnY199YTJmZmVoZ2VUbrbTTSqDb1F5d3WXdjJkfcScgFWIhIKJiYmqjFmVlJK+l3WnpqbQqXq1tbXnuajGxsbW1tb72KXg4ODo6Oj/7cPz8/P///////92ORKqAAAAQHRSTlMAGe9LNM+G/7JkAD/fAJn+/W4Au/v//wL/3/+i/7//AP////3+ANj////+/////wD//v///////////////wD/YBGBTgAABWZJREFUWIWdl4t2sjgUhUEoCFXBC0pHoFQoDigMEGIQzOT932oO9NdqxUtnt8vVAvmys3NCIvcviOM4Oxi9TUWuQ+rFf5PPd/V0pW3bfog2KcNN6r4FINteLpdjuC+KV+1vAcZlpPlxbHoJKIqiJPGWyiZNfUl6fQbAR0jW8njjRThbLsHBeGkHYbEv8mIf9y8Ai05AUJealqaugTM7C4Bgj8eeuyk2+SF3/fFjBwiTTJY1Wfbz0WjM8eLYnmpu7PtFGnob+7EDu0oQdmXd1wY+39wRR6GpeZqfh4yFwmMHNiMeQghHZWRIcGNUHPaxGTep1MzjHzsQSoYRxlnNGMMjXtoUeZ6a4c51vah+Oz6u3plGIWMlyhChVc0qSjwz9MxNM6mUoeMsqG3Dbgcw6IhkFcGsJoRVdY09OTz4Bhhi2cnAPQeqKroEV5hSAJSIZrFf7FMTM1aJx97vOlCHquihCoIgFSEocvO0KMJNSFkkHHv/dsB1Aj4XA0QSCAJVZZ7nYVgUxcZMSmQIR8B9B+8LdYRQlGWE4f1ul2tu6vumCzODJe40Am4Bz3Gvy1e+AzBRRwRlBNfFYVfkZpim4ITUjNJIPIXIKd403aWx1MzqD8BQ5aYIU4IKCnUU7kA5oRkFBhmJ0CU/SgIlKDNWmG/jV9A5gANrwJQyRpL4cDjEKdvv93mdlTUuS0brYBQgyhhKarwv9oc8TvPRGWAx+fxcTIYTLmBl5vp5mqc7dtiVGWYIEcilFa1YmVQQ0WEXxoV9XkjQtpW6pBRH+b7YFf4mhras9DAiUKYlYzVldRlhlO73RRpPLyrxpDGpaoz2LC0PfkQqKOWIlGAE3EM6sFiyDHlvynjMc90AEdWEllm+2RW4ZmXNMkIIbrqvSEkIrb1pZIlXdXAmWNqEUhS7ScVoyeqp7SWkrqoKlgmFZT+ecKf13QlQMCMlpaWXfOWmcLwwjeCFk3m2HUyFxfv3s50AHtO6hp4h/xpFKPgzMkURoGMolceADMOLHZIKQ382O72SodSgFieTxwBOMWeN/gJ9fMyUP+2h1J4F8Frb9OMPgT86eBrA9T++9Ddo1vu9gy8ANP5wXcuYnTL4BWBuWYY+1+dzZ72aCb8H6KvVerVyQKv12jim+Pws8LoDhPXWma+267Ujfd951sHAAgOr7dbR4Y/1+eY8fDIDGENDWDs6IOZnO9uTDpQ2vdV6u3Jka2ud763PAQRjPl+tnYYw17fOxeY8VBeLrn3hZwhzGL3jQJKWdQm4PDLdAiiG1QyimUZIsvPodh/A9a1mEDAKmNAe39X0AYAbQAzQP/w4+v8CcC+WMbfaudSF67s3AWcJ9cFDk+V2JXU17QY0C+YoQdcBAVlu9aHa2boTcPYoLEdZb7K0bsd4x4Hwoq8sqOS2ILRbhNsAfmrBmnQ0w7GgJge/HQI/RSG8UQCgOSvLSNCtibjlIIDjqekZjqPNDMNFjNm/A9iwIVUoNBtAAvsLHApuhNANGJFmJw61uWPp/aBu9nVyYz10ApaswlVZbWBBDUQ4whIYQqU8DRDbLZVSlmmG1rzNhAjD8WT5HIBTBuAX9tQsmCq8ILXhiy6cE26E8BPwIjd2o5HAnxcv/4YbC5MhaKLeA4iahlllX3XGw5eGcvlPq+E9AK9pcOpv8zp1BCfb98USlVAK1wauhtCXk+ZEcqEhHHGF5EYp/AQIssdYx/IX4DIdPQHgNTNOO5aeaMC8eh3FdDWNA9M0w+nVc7wGXx3cl+v3yhVA0jTT1AReFEXhW6IIV03fvLZwARD7L71eT+6WaboufC+Ve72+cBMgSX3QC6j3Jbn9bdVchVv9viSJPwD/AZPdWUO2yF6BAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5000,
            dps: 857.14,
            speed: 25,
            range: 450,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 175,
            foreswing: 48,
            backswing: 58,
            tba: 64
          },
          stageStats: {
            actualHp: 252000,
            actualAp: 3500,
            actualDps: 600.0,
            magnification: "70%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "480000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "529",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQEDAgMHBAMFBQgJBQYICRERCgseHh88EhEZKUc1KSGMBwwTMG1iKSBCPDIQRa/JEBhtSDoeW9GEYU31LjMibO9QeLGlaFU8iPHCgGZZpPiMrLfdsmLg1JTx/MT///97tpyRAAAAIHRSTlMAIttOtIT+//zE/v/4//7///7//////////v//////AFPDFOIAAAV9SURBVFiFnZeJkqs4DEXD4gXjBWMMGAPv//9yrpzueT3dhHSNqlIJqdKxLMnX4vGH7PHOWKfZ9//+PF1/A2Aub+va/V9A1cXziOu2fYvht4BGx/3Icdu22PwawP4uVumYj+OIsM39DlA1j1Z1DasKSoxjPhDCSpjuV4AHMl4rrVmF3MNc3vf9PNM0pdT8CvCQinOu3YjExXF0WPs8psEYM/TvAdWjYS3n3lrvx3Vd8ckn/HuOP/hbABOi6wTnKS1LMi7GdXYRgDRIH4xRsqnuARUT1gq+pJBSCmt0W3AxnftgfArGSqm7R1XdboHVnJvkF8QwbpvLs8vIX29DMEHJcWya7i4CdADruF8CdrDoMY7zHLC+5Mp7b6XSRurmFtAIJbBdv4BguYtjTqnv+6FXNiguh2ma+vstVHUtjPcUQli8jkeQPXXAoDyXU7H6vg8awaUxACAMq7fVDMMAwDQI3hf/NDW3AMZ5MBJZVI4M/t5T5JP8AODXbRUEipAMkiZFHJ0ehuU8AxG87j8I/V0Sa8Y8SiilNMJpbSaPRj4N3BbfDyWUydwAKMMG+QveGD0n0U/+BCGR54oioCDTxG5z8HjUKGPynMt9F2bqj3M/Mxb3m5a9RE2G6g2A4dyhkFZZpSiH53n6oQA4tcS7MiKCYNSSdo/e8djDgHDgb3LkBv7DwN4AKuPhv2AT2L4QcKFOlOkUwXI8mXcAZnH0qI+EWAKURVJFVL/PHOeUS267N4BOSzSiN1iPC4sTgYR4ORx4DIcSS3oTAWQYvYwqeiO4SHvAw2L7hG/uD6sO+7gHNPOqDBmKyYX3+MaPyTO1QCqVEO09oJpzVBQ0YpA4EkEYqsXCHvg2IMjqHtAdEDJppBA29DPaAajZDPNYKUIa/+/d8KKV120cIw7BOB9TyjakPYVjSFk31F/B19U9oIM/CPjkvT8PCMsRQu5TyrlrWu+/XLDXgHkdi815H7ifLV92payQPe6m+YumvwI0ZXH4j8cuORl6R8Agh/txsOodgK0FMJcAVPEs/gUx7cdcvQF0698AhBVfjfrY71+u1ytA5Z6AvB0D2lh9BSgucg4p3FahiQUwr+dOjaBoByUR9AO6kC0fwl0jMbrOx5hXCkD89adU5vNAa3Le311t3ebGiDv92D9y91kIzqGLuB7p4U4PUMR1WykDORCCyw9/AVWD2nucJ/z58mJpHE1zWzyTwUyhyvKy7OA4rSSN2RNpSvsSQOuvOR8995gq7NOf0/6DVLhwTShq/fJmamn/KwJAyr0/c1lcUv4XuRhFKvMUueoaUIm4RgSw49RiqRTgLWUpgLIGFyaOcyiA5hrAHE1V854kpQtiKKRSFIGFvkNKfEjQKQKwawANdus85gmXI60P9ZFSyWceCQB9MiWx7SWAjdQEcz5I1X146rmk3impDF4iMUHxzyz+AOjR0Uw071BhQ4r8eQwLwZJKlhHuM4vfAQigAJBDhVEKs8VTWpzT1FCBxNHbD15zAdCjBmCkCIxyZTs0oscPhqD4PWVTQzEvAAhAjyv8111aXwJwugzbyC1anAuFkqgQ8L9z7BpAgkhbCKxqYM9zW1UMiKilxW1vvaWAXPsTUGELM+VgzL5+/Ncw92MTBMC87TrWtldJbLAD52YqY/X4aVVL84YN/LUiNfOGjc/zsVz4w+oCUI+XAIoBg92W7VUEzykYhPY1gHFNVYvu0h8AIgTLXgEapAkxxFVfAxiVkQppW3bVSJWw6HShdffjJfdpLamsokqA1PwEQMWpUKq9di9JFIWgFFfsZyMJnH8ORod3jvbKhKcDBQrNLd8iaOrynoZe9x9XwZXRWUArYuRZBK/ZVwA6l1mL96TQtfWdtTVCoRjR6E/AP+UMy1ZTTq2tAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 560000,
            ap: 28000,
            dps: 11200.0,
            speed: 20,
            range: 250,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 75,
            foreswing: 16,
            backswing: 40,
            tba: 30
          },
          stageStats: {
            actualHp: 336000,
            actualAp: 16800,
            actualDps: 6720.0,
            magnification: "60%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "400000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-400, 400]
            }
          }
        },
        {
          enemyId: "483",
          enemyName: "ダミー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 750000,
            ap: 8000,
            dps: 6000.0,
            speed: 7,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 40,
            foreswing: 3,
            backswing: 22,
            tba: 0
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 4800,
            actualDps: 3600.0,
            magnification: "60%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "400000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4000, 4000],
                timings: [3, 18]
            },
            "omni-strike": {
                standing_range: 260,
                omni_range: [-780, 260]
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
          enemyId: "486",
          enemyName: "ダミー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 600000,
            ap: 36000,
            dps: 9230.77,
            speed: 16,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 117,
            foreswing: 6,
            backswing: 45,
            tba: 53
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 21600,
            actualDps: 5538.46,
            magnification: "60%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "400000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [12000, 12000, 12000],
                timings: [6, 10, 12]
            },
            "omni-strike": {
                standing_range: 330,
                omni_range: [-330, 330]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "480",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4000,
            dps: 1558.44,
            speed: 14,
            range: 380,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 77,
            foreswing: 16,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 2200,
            actualDps: 857.14,
            magnification: "55%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "320000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-400, 600]
            }
          }
        },
        {
          enemyId: "481",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5100,
            dps: 3923.08,
            speed: 25,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 39,
            foreswing: 8,
            backswing: 15,
            tba: 0
          },
          stageStats: {
            actualHp: 198000,
            actualAp: 2805,
            actualDps: 2157.69,
            magnification: "55%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "320000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [1700, 1700, 1700],
                timings: [8, 16, 24]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "528",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAABAQEBAQEBAQECAgEDAgEEAQEFAgEFAwIGAwIFBQYFBQUKCAcTDwwGFi4aFBIcFAoeFQ0fFxEZGRkhGxMoHhEgISIILDg6Hw0wKB4COEkqKDg4LSVCLhRLLAk/LiNjHxYUPks2NUpENSsFTGEYSVM2QFJgOgZfOSALWGdIQT8dVV6ZJBtVRTVrRgoSYXEoXWFHSmthSThRUVGMQQd1UQwZbHt5SjdsV0d/Wgw2bHFUW4BdX110XEGKVDyIXwoqgIhFZLOXVz6SZwt6Z1ZZboiNYUZxaXKYbg7CWQmrX0GDcFyWak14c32fdhCOdlxufpe1aUuofgpCmJqjdFaUfmSGgIK+c1K8hw6tgWKOjZDMelilj3q6iGfPhWHLmxCimJe2l3e4l3nUjWbNmneopaXfl23jqRzloHXNqYe0r7Pnp33WtpHCurv0roH9xhTNw7/uu5H+tofxwpj1xZr4yZ71zaX90KL61a/+2av/2rDn49X/4bP/6Ln/88D//9cBWvlkAAAAgHRSTlNDABEeL1uqlch9/+EAAP//mHK2AOTK///9mv//ANz//////cT////////+///V//////7//////+b///////////////7/////////////AP//////////////////////AP//////////////////////////////AP///////5IyRWUAAAknSURBVFiFnZeJV9rYF8dZXTAF61RBqVBxIWBFDYWUlqUDCAxEKkwgstYhGIOhqdnzSxP41+fRTjudSv319AYO54TcD9+7vPcuJvNPm23tif3+XdPPOUNmyLriDaxDvwiwra2tO1wuh8Pyi4AVl3fD5dpwrfyqgiXXxobLG456F+8RfgYALQP/DYfDEY66rL8AsK/MnP1cF+TAZYO+s58ALAUc/rDDw0+FfGVof/QbuL6xBwBWs8X+eHNzecXpQFMO3N+YGtOPS9Aj808psKymGi/zY1XVhwPEgbQIHnWcD4dhuxl6++gnAPaUMpkYE0nSFH06RFNj9g8Kdjx7BpL46K/fIOj/hWBvTTVBFLUxRik6m6Vb2T71x/Nnwuh5+Ojx26ePIHD985oLsKYmkghMNcY9nCLSDNV/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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 5555,
            dps: 1831.32,
            speed: 50,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 91,
            foreswing: 3,
            backswing: 88,
            tba: 0
          },
          stageStats: {
            actualHp: 275000,
            actualAp: 3055,
            actualDps: 1007.23,
            magnification: "55%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "320000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 300,
                omni_range: [-300, 300]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "532",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQEBAQECAgIGBAQFBQYFBQUJBAQGBwcSCQocEA8xERAgICFNEhI0KytmFhUqMjZHKiF6HByNISFIQz6gKipNUlavMTHENzdkZmd1eX2ndlqMjpLLkXGdpKryvJX///9LEK44AAAAIHRSTlMAHDxjwd6l/oT//v//vP/////////+///+////////AOA5anQAAANzSURBVFiFpZeLkqo4EIYhXEIuJuQeZPS8/1vuH3Sc49TuErCpoizL/tL3tM2fd2neZbxMkI4Q0n5/9Vvh/wGD9z5Gb42X5wAd5cYXgJrOAS43wRmXRg3NOcB6zyEHynpyDtAuS75+3TP9MaAGMF2654GD+7ri+bqORwBTcDj4cpnIxGnRXu9fXddNl3BpqwBOCx3yeludiooKIG4MyHW93VxbASDOaaakWG5ZGmsYvd4jF25d1yWIGkCrgzbRSKGN4dqB4GYlqc6L7upiQC7CKO+lTSnOAeHIwV2veWakOo2TjMnHFGNS+gZZwv2e52cx1gBa6S1aIEWvxLIuWbOQ3Rz9VF1Io5JoIe+NEnlxSErJiU+yGkCkQgLwUiK4WWxJ1Db5rrqUJykl51JxQbnT2gX4oWKc6nuhg7aSnHJkkBeC5kbxukp82qAsQlBeGAkoCiHN0B7qxlHBhA1AEY4e3XCwnTsDAwpEMLwOtfMzE1wyJoTQbnYzbY8DmoFSUcS54OiZiTQwhkxKOXMh+Xgc0KGODIqnRFElSY4CWuTdKp/wMDYnPx4FTAoGqNJSAPCYDl8sxQCD6oVwDoDvjgG2drLxAWAc02E8BigePPUjOgIAdQzQIwL+oV9i4FMy5Ahgy+EDgCByZtNzHlUCoP/yIHkqUQgp8XrApKR8eZAsNQDEbx8qAJ0y/CcESVHLeBnRfSWgU55L+8pB4tRKWj6YuoFCVJTc2m8DYkQSDbXFhKEGQGQy3PzoIwQwh24++IqhCv3I1V/nJ4Op4DT1CGNS+5frYJP6KwAASCq0zqKYsDmxA+hnL98MiLQM9SAeUcDNsOeCeHOgeKBDuGVO2WaCITuApqfmDcChnx0Wvc0EOLEHaBH0EgHvnznIOS+obLUlInq6B2go5eUsYx4GCCwYHHccHahBImS/CyADZbYA0mZAWEPfD/1Emh5N7eluDCAjFTizLBmJwYDvWdYxa8VuFh7zbOpxq8AXCQMurzGJth4PjPV2BELn/FrTcVXVLxjb7xlDDeSfO4mQI2Md+pRit7mFtnmTagCBB3kJaz4LQNTRhUKE6SwA/3cYWpmeB6CmsB6w/jygGcuCwT4AFAv0+AmAYRp9BKDYsz4BdKUjyAeApu3Irzo6CPgX2QW009gPw0C3hn4Jvhn6fuwOAH7LfwD+AbJSMKbrcf7pAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 320000,
            ap: 6000,
            dps: 865.38,
            speed: 8,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 208,
            foreswing: 27,
            backswing: 78,
            tba: 84
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 3000,
            actualDps: 432.69,
            magnification: "50%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "240000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [2000, 2000, 2000],
                timings: [27, 34, 41]
            },
            "omni-strike": {
                standing_range: 425,
                omni_range: [-700, 425]
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
            "toxic": {
                chance: 100,
                damage: 20
            }
          }
        },
        {
          enemyId: "531",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQECAgICAgICAwUDAwMDAwMDAwMDAwMDAwIDBAQEAwMEAwMBBRYGBgYKDA0MDAwMDAsHEBcNDg8KEBYTDw0YDg8NExYYEg0aEQkVFhUVFhQdFQkjEwkFGy8PGSIRGSMYGRYcGBMZGhcrFgsSHiohHx0qHBQ4FwoHJ0EjIRcVJDIkJiIYKTkxJB0wKB0pKyUpKyQqKiU1JhwdLj9OIQw9KR4ZM04xMCkjNEZILhwlOEs7Myk9MyczNy5LMSMpPVE6OzJwKQdWMx9KOi0sQlc8QDdCPTpAQzlaPSuEMQNGRztlPylITD9MT0NkRzGmLwBqRS9cSz1QVUdxSjBYUk2cPgpVWUt0TzZyUzlYXU97UjerRQZlW1dcYVKWUB1fZVaEWDyAWz2kVxNlaluMYURqcF+bYS+3XQ+WZkZwdmSvah+jbUnMZRd5gGusdU/OdxS2f1TnfiHFiV3MkWLXmGbjpnX///9n9eH2AAAAgHRSTlMABizd8RohEOf/WYfQaJKkwzezR3j/mt+2le3B/Hv/0opf/5hGrv//7OPP/ur//v///1b/////oP/w1ob////////u//+6////////////mP////////+p//////+N////1v///6b/////6///////////////////////////AJ/uZzwAAAWcSURBVFiFndfhW9pGGADwSAdUFEFBBRHsYtegMaE2CY02xWBoQgTT0JhsGGZocBhmoLWiDJ3tv75D1+lkmrD3E9zzvL+7e+9yuUDfbgMaijcff//4Zrj5292kh4Fn71Z7Xy//vPro/x9AYAzy05JUaPV7vavXIwP+MByAYqqm8nDr6vKqMnbd+iriGpin0Q0ortm2zpbK9VbuJrNSTboD/Anjiyy+C26Ypp7J4Xj13U37TL29GXEBJDcMq/NFVHhUNFS01j/p/ezxREHnM5VWtZx0BMKkafKk3pRNWDbJSr9/0l5dYuUNyLstCNV2wgkIwHChYiqyTNNSU03tdfvVXMHunG9CyQpKs+yyI4DDWQFhdTmFmzZN5/ZOuoJ83rTNyHOeZ2neEViGUXp/r4yjoqlLuKzmXlbKumVqdhJapmmajDgA0zC8uHd1KaCsaDRJ2ZC0Aik2m01DWvJ7SJFfcVqFGE6ONy4r2QIviiKp2LpqGKZlNk2Jj0RFWd90AKIoisKFWqPbzaI8Tat6x9I0W9dNk6Yjq7woxxyAOA6jeLbVb7e7tXGeFXVT63QUBYwgu5agWVpZdgAiOBByrUa9+7WXgmletHmalyzLtNgay4uSFnAAkjgKw6lqvdtvtXJCjietJquC/A5f2SM1mVecgARJjrOS0Ou3cyWhV5JktmPZltHswC9LZUkRxZXHt7JvZgWNbX6t1xpCLpOtV5QOKnWalmXLQq7SLtCstPL4RvJD3mnI/35fyOZy1VZNoDsGKVv2Fw2ttiv1T+XGtrvz4HVb2Gu0uu1ahj+3DbujhjzB7WqjUa8H3QFeoSrUWu1qq5GFVasj2r+BQ+JZqVEKuT2RApVKtVZrNC7/rAoFZen9r4PGyPaq6yMNSgrZMsuC06x3IqwE/m4cg9wD0PyL2ZtAM7Mz0P1wBoKpndP+2eFBt/H2tFaaHh2I7vxycPTp6ODwaOf484fk6IBvDUFmZ4l1ajbz9mVq8v6ryRnwLGAURxFFjnmR2nn7Ysk/KpDYAgBDMcU8Ufqws86lg6MCDEUwDJMHcXx4vL5VZIIjAf40BvI5gilu8WfHn7by3C4TGAUIIBSWB/1jzLp48flU3uK4XWp6BGCJANkMRhDIbOHi9I/9dQaMIe1+J/owKp/n8sx3oLUOJsEVE66BIAJ6HBSQWZgDwOcjAOS5Yj7qFohjDDeIPBODXl8cHx6sX//bpTwugQRxPQKOwyLQq4uzDzsEQVBgVXaXXALzxBYH0vPFNLjXnJ7VUtl1AgNlLeYDbgEwhUENJiDoeelt/WmKwMC2BnVccgekicEicLuYF4J+XJv4yTe1sIgRg5a0K2AaLAIAiszgCIxEwFkNeRcRhMpTXMwVEEcIMAOuuHC7c7yLg61BIK5qMJYmBjXYZSb+yYcmEALsbQxzBYRAxajdPHVnAD4EA8tIMfkFrzMQXUQIBGOQxTsPcAAhcI7BifS808sVxByMYhggYrf5kG9qbS+7mMniPhdTCGZwhKDyzDJ0NxKiqCmm7gZIkqkslaGIp967QJRVTctSPG5GQPMkXcZjvn8BXlSWdYN2A8QlleWlxP2TPCZqekdxM4W4rPAK6buXD3lwUXEJaLqhTdzPh6AVUATJDTCvmiY5NgzMSbpOuqhBgNdUZW44H5oDt0Yj7gj4UcO0pcBw/hjM69a55AiEJIU3RM8wMCfyYGyszwEI0IquqhvDJfDwHRnnWTP+OOAHdypbUzeHB+DJahIrNW3p8e+FkFjdV1Rp5T9q6JtboUVJN/HAI8CY0AKXs7p4+yCPDeL7n+lVXq1ctqIPA1FwO62edFOhmXB4cvLJkydPbwL8mpwMhybCKAo+wtqrnoeAGTQjCHVh/NFIVdC5B6fgiwSjU9f9X3f/w/e4GUQ4PBOaigYjPv9d4C9ruzCH8lGnzAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 480000,
            ap: 2200,
            dps: 795.18,
            speed: 17,
            range: 175,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 83,
            foreswing: 4,
            backswing: 47,
            tba: 40
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 1100,
            actualDps: 397.59,
            magnification: "50%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "240000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 300,
                omni_range: [-300, 300]
            },
            "wave": {
                chance: 100,
                level: 3
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "529",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 560000,
            ap: 28000,
            dps: 11200.0,
            speed: 20,
            range: 250,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 75,
            foreswing: 16,
            backswing: 40,
            tba: 30
          },
          stageStats: {
            actualHp: 196000,
            actualAp: 9800,
            actualDps: 3920.0,
            magnification: "35%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "150000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-400, 400]
            }
          }
        },
        {
          enemyId: "530",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5000,
            dps: 857.14,
            speed: 25,
            range: 450,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 175,
            foreswing: 48,
            backswing: 58,
            tba: 64
          },
          stageStats: {
            actualHp: 126000,
            actualAp: 1750,
            actualDps: 300.0,
            magnification: "35%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "150000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "483",
          enemyName: "ダミー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 750000,
            ap: 8000,
            dps: 6000.0,
            speed: 7,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 40,
            foreswing: 3,
            backswing: 22,
            tba: 0
          },
          stageStats: {
            actualHp: 187500,
            actualAp: 2000,
            actualDps: 1500.0,
            magnification: "25%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [4000, 4000],
                timings: [3, 18]
            },
            "omni-strike": {
                standing_range: 260,
                omni_range: [-780, 260]
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
          enemyId: "481",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5100,
            dps: 3923.08,
            speed: 25,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 39,
            foreswing: 8,
            backswing: 15,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 1275,
            actualDps: 980.77,
            magnification: "25%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [1700, 1700, 1700],
                timings: [8, 16, 24]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "528",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAABAQEBAQEBAQECAgEDAgEEAQEFAgEFAwIGAwIFBQYFBQUKCAcTDwwGFi4aFBIcFAoeFQ0fFxEZGRkhGxMoHhEgISIILDg6Hw0wKB4COEkqKDg4LSVCLhRLLAk/LiNjHxYUPks2NUpENSsFTGEYSVM2QFJgOgZfOSALWGdIQT8dVV6ZJBtVRTVrRgoSYXEoXWFHSmthSThRUVGMQQd1UQwZbHt5SjdsV0d/Wgw2bHFUW4BdX110XEGKVDyIXwoqgIhFZLOXVz6SZwt6Z1ZZboiNYUZxaXKYbg7CWQmrX0GDcFyWak14c32fdhCOdlxufpe1aUuofgpCmJqjdFaUfmSGgIK+c1K8hw6tgWKOjZDMelilj3q6iGfPhWHLmxCimJe2l3e4l3nUjWbNmneopaXfl23jqRzloHXNqYe0r7Pnp33WtpHCurv0roH9xhTNw7/uu5H+tofxwpj1xZr4yZ71zaX90KL61a/+2av/2rDn49X/4bP/6Ln/88D//9cBWvlkAAAAgHRSTlNDABEeL1uqlch9/+EAAP//mHK2AOTK///9mv//ANz//////cT////////+///V//////7//////+b///////////////7/////////////AP//////////////////////AP//////////////////////////////AP///////5IyRWUAAAknSURBVFiFnZeJV9rYF8dZXTAF61RBqVBxIWBFDYWUlqUDCAxEKkwgstYhGIOhqdnzSxP41+fRTjudSv319AYO54TcD9+7vPcuJvNPm23tif3+XdPPOUNmyLriDaxDvwiwra2tO1wuh8Pyi4AVl3fD5dpwrfyqgiXXxobLG456F+8RfgYALQP/DYfDEY66rL8AsK/MnP1cF+TAZYO+s58ALAUc/rDDw0+FfGVof/QbuL6xBwBWs8X+eHNzecXpQFMO3N+YGtOPS9Aj808psKymGi/zY1XVhwPEgbQIHnWcD4dhuxl6++gnAPaUMpkYE0nSFH06RFNj9g8Kdjx7BpL46K/fIOj/hWBvTTVBFLUxRik6m6Vb2T71x/Nnwuh5+Ojx26ePIHD985oLsKYmkghMNcY9nCLSDNV/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",
          traits: ["無"],
          baseStats: {
            hp: 500000,
            ap: 5555,
            dps: 1831.32,
            speed: 50,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 91,
            foreswing: 3,
            backswing: 88,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 1111,
            actualDps: 366.26,
            magnification: "20%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "40000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 300,
                omni_range: [-300, 300]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "486",
          enemyName: "ダミー",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 600000,
            ap: 36000,
            dps: 9230.77,
            speed: 16,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 117,
            foreswing: 6,
            backswing: 45,
            tba: 53
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1800,
            actualDps: 461.54,
            magnification: "5%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "10000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [12000, 12000, 12000],
                timings: [6, 10, 12]
            },
            "omni-strike": {
                standing_range: 330,
                omni_range: [-330, 330]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "480",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4000,
            dps: 1558.44,
            speed: 14,
            range: 380,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 77,
            foreswing: 16,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 240,
            actualDps: 93.51,
            magnification: "6%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "500%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-400, 600]
            }
          }
        }]
    }
  ]
} as const;

export default e11018Data;

