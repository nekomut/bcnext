// Stage 11016 Data
import type { StageData } from '../../app/stage/types';

export const e11016Data: StageData = {
  eventId: 11016,
  eventName: "ランキングの間（みくみく歌謡祭）",
  typeId: 11,
  typeName: "ランキング道場",
  prefix: "R",
  mapId: 16,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "みくみく歌謡祭",
      baseHp: 9999999,
      width: 4200,
      enemyLimit: 30,
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
          enemyId: "503",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAQEBAQEBAQEBAQEBAQADAAACAQEDAQIEAgMNDQ4NDQ4WFRYcHB0lJSYtLS81NDUoOj07PUAvR0FBQkVGSEtoPlpNTlBWVVSBQWRdXFylQHdsZ1/CQYZ4eHjcQZLtQZqEhIT9QaaOjo6YmJi7nlSfn5+np6ezs7PCwsLKysr9zlvW1tbd3d3/7V3l5eXs7Ozx8fH29vb7+/v///+QVKxqAAAAQHRSTlMAmrC94e0WI2N7x/YApNT/jQBCCTAA////////////////////////////////////////////////////////6TrfLQAABcZJREFUWIWVlwmXojgQgFHx4GgKUcMlQsdhbO/1alwv/v+/2kpADDbOOtXv+YhNvtSVqlLSRek+S19pF896x2j8eKEr/QnQ/wBi3hcdGQB6fwVQAAJbzRd1IOuJ1voLQLsB3i4NmtmXKtBTuoD++4C+BtM0TSdgsVWDLxbZ4i1AS4MNbkm30OHGxGyxAeltgAE7tiU9Qh1pYPPFntPeAihcZSaB3O1+5LTD2wC9SfL96IReF/zsOQHlTYCVOSBTu23BIV+A+SagDnE8HtPA930PDBnwIQjCKAS59qxDFUAxMOeAQCYEBQQxrP8BWAZucPE0WB3P5/PlcsHP8+l0Oh6PSZJMoezJHwAFiAv+mIKbpJVyIKV8fAaY4G9sl0bgXKv3M7carwE1iNIIKCVwerU/TamY0QLAMhUFKB4QUB9Wr/enOzGaD8AH9/E0IQQNsP+wHxOyVgFoFYEL4gAWfwLsKzXogEsDBxnECZ0i9ZgkMBG3T7dHqD0MLwAN8KNhEPrIwD9v+gjiCcP6WFGYXqsAPQ3CcEKDKAi9zJTt49AJ5NcxvWKI0koNLNQ8+v439gIvioYuU2OT3u6ELUCmQ8zMOVQBTPCoN/4nHH//Ew5Ho9AnpVQ4ri6ctl/jx7kKYEAQAbH9+Pt79Pn1OaQBZL7bTjapKJcx3dkiACPBgojR9wEDQexg+LVc/h5SlyfDDr2xFgF4ycD+EMKYATrgjdHwCCEOnc3my19DfPPA/QehCOAOfgJ0WRoGlBB7jEEc/lrOZ8uvILJZIPZQRCBPA8xW5yegSagH4KEb3NFvBMxnYeTwSCaL/VMeJheuwcMHHatrETdGQMQhM5Q5auCUj34IJlJXcGIbZKzbTkhDD7WG4ed8PpuhF6N77EvHT+l4tYN6u/UAmKB1O2ipE1Aa2M7oazmfL+fRyAci7LwctqvFKniUxnrrDsAKaulWTcMEdiOsxL9mqAImgpO1s0zplW/zbZPD7boPMVIuGDmgjUlrokl1wiLs+OEo+vwMR8ynR+axjJAkWF1vcdYuJsy7Y1AyQAd2lNW4hp0ep4QzhqMwdIHVhGNwFj1wIlnR8G8snzMVJBOwa+Mc0yDXW3rdRIWRrDmGftmHp4VHSMAz80rkDKDaWdNtkAt/57iO8XSbsujfBDc8S6FBM8D3jAeA7bvkit/w8t9eAA5QzwBaxKpMWwQ8xH1d3Sl0HoAdtm0RcF0s1ts9PwYmKybr9Xqz2QoyATkPY9NnqsrdugA4cS+yyryGCuElr9nPAYZ9Y5Htm6IJyW6zXvHKfN6uXVisV6vFYjHNhAKoktQb6PqAAWpo5u0CDVGDsuMcKFu/YS1eHwwGRSKl/JYLUcBzJ/a9LF/hKRlYjQHN7HMFdKkFAfvWhmcfhIf7gv7wv9VgZSm/TB88wbHyCHkQTQ/FKnnOpkjr6Xq/joSarLYkNlIyIzyoyINKQGjwcoSTNPGIIbGRjDXzAM5/AxgMTHDD2Oeza7+JBr8ElH2AAaIaAnoGdqKI2iovqi02G5AXgJT4x/0hSY6n0/mCNxYjJukDhbhYwRxo59Nzv9Z8BdgLKUiyPNQUXXFYCSWWXozf9ReAI9ieF4U4cbquY3MEVje1pbk2GH1dBFRG4XbZP13o2/V68KDTl2WTJWMBaLwKY5XsoKGzqyACOsWA/xaAV5OSBl25NBhVyxXn3uNht3EhGwsG+XyQBQIgppTGOKdH41iU8dh3fT+iIYH73K3qhQZ5h2J9tlQzmoVoRRlhgw/IsmyY+fkCgBGazuWS8IIeQrv3kDq7bjGwXrliv1mKxipqwBAm9qKJ1ja9A76mC/8wHPZjpY9kX9O7IqEE0Nva9ABq28SzFKlzF0myajCN0W0qmfAuWBIG6FmSUmuohsGs1arKKK9BWpP9Xml8KB2rXQb0jVebXojcKQNwSOujyor5oaqoh4F+ztyPh3JhjjdUtVGvKUpHslo9wYT/AGzNChFQx2HLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 4500,
            actualDps: 7500.0,
            magnification: "300%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "2780000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 216000,
            actualAp: 9600,
            actualDps: 18000.0,
            magnification: "300%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "2780000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 26000,
            actualDps: 6093.76,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "2780000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "501",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 150000,
            ap: 20000,
            dps: 2631.58,
            speed: 5,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 228,
            foreswing: 89,
            backswing: 50,
            tba: 70
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 60000,
            actualDps: 7894.74,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "2780000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 100,
                duration_s: 3.33
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
          enemyId: "504",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 216000,
            actualAp: 9600,
            actualDps: 18000.0,
            magnification: "300%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "2005000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 300,
            actualAp: 150,
            actualDps: 250.0,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "2005000%",
            isBoss: true
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "505",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIEBAUEBAQREREXGxUbGhshISMjIyQuKCo1MTU5ODs+NzAbTFI/P0NJQThISU1ZWVpCbHJhYWIbg4toaWptcnWYcCc9ipJ5gIKFg4NckqR2j5M9qbOKj5G4iT1aqL5StcN2qK6bmppkuMWop6LIrWZL1+KNvrawsLBl0t+7uLa5zaFq6/fpyHPKyclt9//U1NTj4uLs7Ozz8/P6+vr///////9/rSohAAAAQHRSTlMAeMcAC1/oKD78o43btP/QAP///7H//+b//v///////////////////////////////////////////////wD/TaT8wwAABCpJREFUWIWd12t7ojoQAGCucpNYyDYGWahhlaop26W0paKe/P9/dRKotiuisPOpPDavmZkkROm/r1C/hWFKXw/yNHC1759+GyRdBpyIBvLpIWescgcBcsYYI+bn04Q/sNQYAtRDdrpqmqau60ohuOFAMpqmNMuLIi3YNpTVIYAuUshLdopSUQcBqp1+DWYHWjBqDAPkLU/BzxuAWhZj9jBgysd5Fqq/n5U+ZizQhgAm5SO3tElg10zDHAI4lRizp3HgewDFCa/pVh4CiAyyIEyK1LKsdEtjXDB3AGAkfOHApos44lVghVfGAwA9ZxSzrK6A5/N0gvJAYqk/oOwY3DIcZJTgPMdxHO73MZF7A0bMi84FmiR0L9pRlCkqtqPegL0/CCERrajKnNIkIhXbArMvgJv2J5GIMCa0LmcVuT0BvThtgt3ucNoRFQ2lfsCEXYrDLs3lXoBYBBcjria9gGYZX4iIEakPMO0Yz6JdJfcAzLQTKNmkByDXGRyK/eEciAuWGTcBrelBjlvjBVAq2i3A8bA4R8iFVpBt4VnGLWAMrHtCK5K1gRgtl5Z5CwCWtXqez/hWakX48yUA9g3ABADA2dPzfXlhBve+j0c3AAdhhDwPg9c2EFgIYWDe8egGxnw8D2gVFwDAAehcmcHdnQEaAFt5G8BAfDK+moLuH4ELXUA1AKRrM3A86DcAbQPQQ7yKSL8GTKIAN0B7R+w9H+GIUPdKChouFmkEBUBaQAV8RNL4PbgCmI/vcRpDyIG4BWwBhPHiV/FgdAP64+tqE/piBmELKAHyg83Tn0e5G3B+/3naBD7PAeAWkFvYx5un1W+3G3DfN0cAtoDUwhCRzep12g38EAAWgOcdzg8EYmEEo836lRehC5i+rwTA++iD3fkM+EqGxyJ0ANJDA/AZQNDaz74H0bEIHYDx8L7cLHimPFq7qQLC5UVY8yJ0AKboIgfgpbVcWML1o41YCR1AvQzI51o+PxR5E5AowoLQWO8A5N8ZIeRzO0bnNRQAgnhBYt/pABxCFylBTQrnKwmJLgraB3jSAdgwDKMAQuh7/FQ7b8KIA/UH64/7LgBB/g8+hJgfq95fC+HAXIVPAM9+vXysZ10pgI+PFxFvH8/Le7z/awI7x317eXt7fl4vUrurjfZsPl+u5z/ns0Xqn53rpW4vV/P5gljTXO8+UPQ48Wih2Dm/TYhhNMiypD5bMsNIAmdSRYZqalfeC/gHvyHpqgybZTAxTN1UxF+JaiBTlca3Xm38tLGBdrwllPWFQvx2YKEqffvJ0Q2IEOe2UQPNb4T67j9Vv8d14HRP2TdvUi0QyfwLEHxO2uXrwP0HoDxeqXgRKmcgYPDeeaeHhL3qAwE1/LoUirtrrg0BNEkywkoxzGPIaWAaPCStH2A4tjIeja1TjOpQFEdvA/8D/HaSvkb4TT0AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 15000,
            dps: 6923.08,
            speed: 8,
            range: 360,
            rangeType: "単体",
            kbLevel: 4,
            money: 600,
            freq: 65,
            foreswing: 6,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 275000,
            actualAp: 41250,
            actualDps: 19038.47,
            magnification: "275%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "1525000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 8250,
            actualAp: 4125,
            actualDps: 6875.0,
            magnification: "275%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "1525000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 375000,
            actualAp: 24375,
            actualDps: 5712.9,
            magnification: "375%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "1525000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "502",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIFBQUIBwYLCQgMCQgVFx0fGxckHhUjIBsuJRVKJgMvLy8/PCQ+OzlmNQQ9P0BaRCBqQgljTghOUFJlUCB0WQ5+WxJjYFtsYVWJZBaEZSR8bURzcnOXdR2Bf3eRiEeVhmSgilyQjY24kTmjnpi6ple6pILJqE7itS3EtJzvs1/5unDRwrjuy1L/wGj/1Gng08j+3En72HT/8Ff/7W3/7nf/8HD/8XH/9mz/9Hru6ef//IX+/v3///+UrNX1AAAAQHRSTlPNABikOlp8/NOgBWwD+gB5AP+pSAH+/ADj/rFmB/7+vv8Cxv/++/UB//7//6cG/P5jxP3+AeU1AbFr89b/AP8A1wFKBwAABe1JREFUWIXNl+t2qroWgA0CUTAqaNSoUJSLCBUsiqiF7Pd/qzODtqurh+pa+9eew8ooZH6Z92Drnw9BNxkLmWqoNx0OeyDjaQ81yKda6yfAeIx625H2LwHjl8WwN8quABj+LWAopLfdmvPomi4WC2HN3wOGIz9O0zRK/dG036T/yIXpFFww/SjN0/TwgqaapPwVAPSn45Ef+tdoG6XX9bKH4mAg/TmgVxsQxGkU+v4h9RdDlHGeSGgwnw/+BFCL5vn+JMySrT8cayjgnM8H4usxoEM+DZXCLKABZ95sCS6YWVnagiI/BujuTP5ADKwYFDJ7NJ1qozTYbrdBlnzxoNmFbhyYnytmWclDuTft9dIygngetrOnQZSCOLinTOl2koTKqDfujWI32qZgQ6jN10+CaIcpg4usThj2uI27MtKGi8CP/G2Shekg4OZjgB64146uOyW3WWljw/UU1HuJDxEJeLI9LCQjnD8EIIx91tZZyZ0wwZOg5JneE/UUlCX1oxHyPEt6BFCoTZhNiBGUNgF1XibsJY38CDIS+wukhpk1eAQgWYlZGRuYcjeE8gMM6SxeZpM4i92ZhhTfNSbyoxi4zKAs8RSdu7B/xsAMHSkTFlhkthgjhbmu9QiAFIsZEP/BoKytVlVWBgrLXGZ7XdQDgO3pj3uha2A3sMsgSgHAVJ1gOsl44liuY8pIsj36OAuK61jbkAaZn5UuwyygeGLxMubJxE3DwGSe8hggm6ZpbWPDC+J4YlnUwJ1uwK0tz9KX9JDFzocBj9q5a22ZE0ASMgv0EeKxbGVRDjNOlXX5DwDINAgNgtgleNKC/yAPcnKIsiScfZnPDwCQS8egjudBDYA93gRu8SyEUlgsh88BUtewLMs1iOORycwktt1F48V6nZRlgLSnFkgDnxKMMYULdS3CAlv0NEzmwGEOQU8BinU1sGHAn2v51sQyqN252zVhtq0+twBHB+glo92mDlAsy2ZynVxCHZvZrCM9AaAWTg8G6SKVEKHjumC2buqQW8aoYcfdJwA5pthxIe5WmrpemMQTKP2OqZszaDLDiHmpPwbovOy0wE49giKCEASDOrKmrtI4M7vQH6XyOAZr7osVbYxhsODOr1NxzvkaDeL6jPoBsKp9CF0iwtYmnFu49SvqcilU5TXnzk+AYiMeQArqA0qGg+y3EzXgpWgEk98mcwNgVxO6UAV16tfcRVot9wrnvB6HQFB+AOyKJUQBTDDECjUJyVeAFNdnqwrBgEwsGwG7I7RbBwAiDIphUPWrD3MeI6nD0gT0N8cGwH6/O+7AeWECUZAMAPINIBPmhB2hv2sAvB32u2J1M8HA9ZV+eblRs5LCoeExCa2O+30D4JKfj7uij7qUGASLcJIvJigOTBjKPFtBy2KXHhoApzzf748bMZgxaddBMHD7A0A9h5F6uoP+Kb801UGev6VvR001YtaCEtAgGBjfnVA924Zm8qikHfevb9dTE+Ccn/O82IzX92KDIBDcuQHAdmYwx+ksd8e3Q543AiAI5+tl0+eH1W7Xv9UUwdLdAIdSRu3t/lhcxT5NgFP+LgBaeLgcK6gplWIi0iHmjG07nY7jTfLLbg+Ayw+A8/n9/Pb6ej0XFeSzTT1KahdUDDGUFZ68vL+9wpr3ZkBxvgpAfn7Piwr6QmU8a8l9KGVMbMeWdJ68vufv72DnqRlwATZ8zuf8VFR9UXsZEqNcwYZje4rkrN/E9iDFTwCh/i5CWQMSHtQp6GLCKINxuLmpg4vNgNNV+AAfEYQpdPT91VKlRpBhRTterrDF+XIpfgAUl7PY4SpsrI5iqnzUcbeEXl5Wl8vpVNykGVBUADmdLyJK1epLJ2rzEqbApqru6kXVAPh4Ki6wT1X99lNHNzVtWX0sqDYNgKUgfG7xHSBkWt0eVJDkBgD4eBfBqX5z4Sb3BcVx9cO58EkQq/5fH/V3m81q2a8tawQgra9p/f54ulytGn/rfZFmwF/Ifxkg/ZKGO09fMBS13W59SLutwuvt91vfTuf/AZXfAaImYU9yAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 180000,
            ap: 8000,
            dps: 1090.91,
            speed: 16,
            range: 390,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 220,
            foreswing: 71,
            backswing: 30,
            tba: 75
          },
          stageStats: {
            actualHp: 495000,
            actualAp: 22000,
            actualDps: 3000.0,
            magnification: "275%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "1525000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 390,
                ld_range: [390, 640]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 3750,
            actualDps: 6250.0,
            magnification: "250%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "1080000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgEDAwMEBAQEBAQTDQ8LExMTExQcGRkRJScWKCoXMjZCIDJiEDMWPD0zMjM8Ozo7PEAjS1BFRURuNE0gW15QUFAxbHNfW1oye4NpaGinRnc9hYx4c3I2kppFmKCEg4NKqbNNs72Zl5dWw82tqqpg0t5i1eBk3Odo4u7Av79r6fXKychw9f/T09N2/v/e3Nzm5eXv7u349/b///////9HEw6sAAAAQHRSTlMAKU1wg5epE1/T8v7mPbr/38v+nPrQ///+/v8A///////+/////////////////////////////////////wD/SfdDDwAABfxJREFUWIXtVmuTqjgQxbcQFYfLvQMsCogX5A3hEaOy+f//ajuIOrMz42zVftvaVE0NKuek+3SfToQ//+US/if4n+A/QvD5Gk5W0/FAEAYrcdl/NZsv//ji7Q9rubCCOPa06VjXf/0aXL8Uf62AcPBP8FMtpZQQSiOkrLfbHvPy+2X+0zGl0XfwweJASV4URV5QrEy22/GPn+ufP0bib8UFXuxMv8GjlGKO5xQ0l7ZbzQ08J440WXZIndfUeRrDbJHSHt4xHF5frSgnkUeJFThaCQy1MntCIEY9HuclheUipyY4r3FaFnGqqnWZU2/8NX4V0H7vghaec7CQRUv+uSSkxHmEHJqXtfplCGOnxxeYBookole9LnIIgKSuV2ACSqQQwuGrEEbmdTuInwaSLG9/v3pxDB9i1Ux2UYk96jikwOUXIYxNULkXL54u0fZV18ygzkmK9i0LDzRGODIhpC9UGJv0hq+xPBNWhnFwLFKUWM0YY35Ena2XWyUuQIVPOnJyx+OCWnNhaLPGCXJI2fIB3+5rx2e7g1PyAIPJB/zUuuHh9wjafn1mJweqVkcbwLPKO9gQhuaSriba8m940bv3X9HVaZQAah+BAhZ/YiHicSQINIAtSLx6B5+JwQPfaTRQO5RFcQwbn1mr+y1rWaJ5EWeAJIdv8YvoVn8QoCyhV6WGE7R6RF2fnUJ2ObEMKM6OdSCdzPniUcqBFN/weR1HPIBFh2csU6mTsGzPnxO9YhddDcg1zGD62P/uH4xzF5fK6OXI+hVaTsZsOzNkpOg6UlTkkL5VrZsr7/7h4ngH6kk2eywfNSwLdwgZoIGdhKpb4+7dulavMozde/4FTh1cyz57u8Ium6pJbJCgCk2Cb5thmbfTQCUl9P41BuJ6YKKWfbYaHbWh0mxSnOO+WqnIDeSBQdMUXz3spNTcfQaHQrTJ5dgw2yVx37CYuuCJaUqK9FB0BHXkEaxVD9jldI0GrMTt0MBPvkkj3goYp3nNbbmGxguC+pqBF9DAuMMTY2Nv7K4gZ96NrQ/lTDQaH7iO9cEj1B0JalnWHli962E3ptY9g5Pun9hph/je7QX+Mn8H7aSR1MtBhjI1ueuBAOfeVQKoQUG05EZwvnT/Ks7QtqxRZEVRLolGsMvfh7EC8r0Ia1ymbm+iyCVYfSNBnwmUJTk1wHNkoQKHQ+1GfHAR1aF4LaxSGptXWevAheF1/lCB3YbtkXxsdcVgvmRR4nSaEdXkBCOXpmrMv8Cc4KDecdWlf2hVqF7CfCWzK3uk1cQFAgwdp9F0BU6oCR/WPIXYpa5yJ9jc1fDvvb2fQNlIl0KdSxqvgjDSqIkwPw0xdrD3IHjAzvqp+98Y4MB1UTjQNjA1pg5dc09PnWChdfMMYosfBM1DDttuL01mS3N4fU0P3JBl/XPoeVdDTlURJirEgLEVac1DvHtPJci2d3Y3xWZmbuaQAfXmM/WlN/RwMR9rBQRBYkf12d1M6s2XRwN6uu1enztORODcjERhjt4MJWGEzBjuFIUmn9iN4ozCWw5c0B2fxGsrpjWlnjgThu8m80D3VdV04QRGR3bpGSqlL2Voc0PBYSGaJcVpoH28ZQwg4Wy/0c2NnLBK75XY9CGcDRC0mQorpFmaIk4+OZhmfQddN8+U7Fr3/S0H/gDmnQ0Ggy8O9/W7QZSh0zuCSuedMf8cel3T9y7yuxru7vPRABmzjyfimzXfvyNgenZT/9oKEEK7fkYgiO9D2O3ZKZOzB2HSF/LLtZRP7yJQNpsdeoz4EA7p6mkOwvJllzza34AjNZuubp5mpw08Ps9BWErG3k84pFHgIGL7qTC/WzLjqurProjCkLdPCKmebWimNkRzYQ4HYp+YGn5XhmshM92Ag3QXbhBYdbiBi0WnYwvjjB2lpwEIQyWsKtZWVWXssyRcwTUlu2w6EU4KqOkvvr3sz0ZT49KFwZsP/K83/EA4+gguCerTGsJazofL4UhU9rosy75tGNJk9GKEvo4QknUkTZbD+dMQxquFhNBiId0XIG+Pi4UoSuLqoxn+AsC3We/eG16JAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 8000,
            actualDps: 15000.0,
            magnification: "250%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "1080000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 22750,
            actualDps: 5332.04,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "1080000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "501",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 150000,
            ap: 20000,
            dps: 2631.58,
            speed: 5,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 228,
            foreswing: 89,
            backswing: 50,
            tba: 70
          },
          stageStats: {
            actualHp: 375000,
            actualAp: 50000,
            actualDps: 6578.95,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "1080000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 100,
                duration_s: 3.33
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
          enemyId: "504",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 162000,
            actualAp: 7200,
            actualDps: 13500.0,
            magnification: "225%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "755000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 300,
            actualAp: 150,
            actualDps: 250.0,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "755000%",
            isBoss: true
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "505",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIEBAUEBAQREREXGxUbGhshISMjIyQuKCo1MTU5ODs+NzAbTFI/P0NJQThISU1ZWVpCbHJhYWIbg4toaWptcnWYcCc9ipJ5gIKFg4NckqR2j5M9qbOKj5G4iT1aqL5StcN2qK6bmppkuMWop6LIrWZL1+KNvrawsLBl0t+7uLa5zaFq6/fpyHPKyclt9//U1NTj4uLs7Ozz8/P6+vr///////9/rSohAAAAQHRSTlMAeMcAC1/oKD78o43btP/QAP///7H//+b//v///////////////////////////////////////////////wD/TaT8wwAABCpJREFUWIWd12t7ojoQAGCucpNYyDYGWahhlaop26W0paKe/P9/dRKotiuisPOpPDavmZkkROm/r1C/hWFKXw/yNHC1759+GyRdBpyIBvLpIWescgcBcsYYI+bn04Q/sNQYAtRDdrpqmqau60ohuOFAMpqmNMuLIi3YNpTVIYAuUshLdopSUQcBqp1+DWYHWjBqDAPkLU/BzxuAWhZj9jBgysd5Fqq/n5U+ZizQhgAm5SO3tElg10zDHAI4lRizp3HgewDFCa/pVh4CiAyyIEyK1LKsdEtjXDB3AGAkfOHApos44lVghVfGAwA9ZxSzrK6A5/N0gvJAYqk/oOwY3DIcZJTgPMdxHO73MZF7A0bMi84FmiR0L9pRlCkqtqPegL0/CCERrajKnNIkIhXbArMvgJv2J5GIMCa0LmcVuT0BvThtgt3ucNoRFQ2lfsCEXYrDLs3lXoBYBBcjria9gGYZX4iIEakPMO0Yz6JdJfcAzLQTKNmkByDXGRyK/eEciAuWGTcBrelBjlvjBVAq2i3A8bA4R8iFVpBt4VnGLWAMrHtCK5K1gRgtl5Z5CwCWtXqez/hWakX48yUA9g3ABADA2dPzfXlhBve+j0c3AAdhhDwPg9c2EFgIYWDe8egGxnw8D2gVFwDAAehcmcHdnQEaAFt5G8BAfDK+moLuH4ELXUA1AKRrM3A86DcAbQPQQ7yKSL8GTKIAN0B7R+w9H+GIUPdKChouFmkEBUBaQAV8RNL4PbgCmI/vcRpDyIG4BWwBhPHiV/FgdAP64+tqE/piBmELKAHyg83Tn0e5G3B+/3naBD7PAeAWkFvYx5un1W+3G3DfN0cAtoDUwhCRzep12g38EAAWgOcdzg8EYmEEo836lRehC5i+rwTA++iD3fkM+EqGxyJ0ANJDA/AZQNDaz74H0bEIHYDx8L7cLHimPFq7qQLC5UVY8yJ0AKboIgfgpbVcWML1o41YCR1AvQzI51o+PxR5E5AowoLQWO8A5N8ZIeRzO0bnNRQAgnhBYt/pABxCFylBTQrnKwmJLgraB3jSAdgwDKMAQuh7/FQ7b8KIA/UH64/7LgBB/g8+hJgfq95fC+HAXIVPAM9+vXysZ10pgI+PFxFvH8/Le7z/awI7x317eXt7fl4vUrurjfZsPl+u5z/ns0Xqn53rpW4vV/P5gljTXO8+UPQ48Wih2Dm/TYhhNMiypD5bMsNIAmdSRYZqalfeC/gHvyHpqgybZTAxTN1UxF+JaiBTlca3Xm38tLGBdrwllPWFQvx2YKEqffvJ0Q2IEOe2UQPNb4T67j9Vv8d14HRP2TdvUi0QyfwLEHxO2uXrwP0HoDxeqXgRKmcgYPDeeaeHhL3qAwE1/LoUirtrrg0BNEkywkoxzGPIaWAaPCStH2A4tjIeja1TjOpQFEdvA/8D/HaSvkb4TT0AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 15000,
            dps: 6923.08,
            speed: 8,
            range: 360,
            rangeType: "単体",
            kbLevel: 4,
            money: 600,
            freq: 65,
            foreswing: 6,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 30000,
            actualDps: 13846.16,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "525000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 3000,
            actualDps: 5000.0,
            magnification: "200%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "525000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEEBAQODA4OEBITDhEhHB8XISgeJSgwHiU1JCspLzgkNTg2NTcqQEowQUVFQEMuT1QyUFs1UVU3WGRbSlI4XWk/W2NAXWQ+anZJZmpIa3BFeoVSeH5ncnV3aH1Th49Lkp1NmaN9kJtQp7Ctf6VTsLnfd8dYvMeAsryqpKZeydTdj8Dmj9Jg0tzKq7ln2OOpvsX6lOXxn9D6ouX1qdWQ2+LfueP6qu35r+H6sen5suTB1df9xO3i3+P////ArWCEAAAAQHRSTlOvABxJAXqsAGTH9AGf9QD/+80B/wH8SZn8ZwD8nMb7A/3H+Pf8AP78/v/6/wCQ//z//dYDrQD//+EDsUv/yf8AgCEBhgAABglJREFUWIW9lml3okoQhkPTIFvLqqAgQSDIYhA0alzC/f//6la3ZnJnBpnMl1vm5CQH6um31vbpn0/jmCGeQybC7G/sWPDbmlvc7/bD7ekXgBbxZmxyjwF4EICRr9sesbVHAMlEHP8YgJHpKyScKB7qBSAp9CUzQo8VuK2nJFEysfk+AJ9EumL7njQE8JXSDsNY6gO4V18JE4OYjwFaW0RemZCN2wdICm+S+MkAAEttsVEMgySLHgAqi8IDgK49VsC3RWvrum776HeA1LYlDaEYyAEq2wi8PZ0C8C8AF+LTdTJp+YFGSlqf+AoA6Evqz4BFC01i6348UEY4JdL90NM9CXPYcizo7C9A4euebdvmUCtLSQSvQBIkDo8cZ6op0nw+5gXawGHi2aFte9oQAIWJDc1s+xrPjaxZlRthni11BUYMhZAe7x7dY4DpU5WETGRu5KSVN8mrpql9njcmhucxcWgAIE4MWQEzDAFha9pEStzUWVUXGhYUokAOQdvANGJekCcGAIghQA2WjUvyvGizolmOOWVCHwB7IARe4wSQQGQBZFpOXmtG5YdFmeexg3mZipvIoqChXgBvSqZHk4UIT/fGOGhySYzba5fEeTWzQJ8hisA2PU3SegASzR5rYerOa2rWxJbjll23MdMmcMYcElidaDHMHoAG7aPfpojjJbSYNnWgYhSWC00CMZajskfawYeD+hSEBVWwvFXTdRdplblCUralyY+Cqp45DluHWgTV9Jc9AL+1ga197q7jJgwJKbu2iEM0zZulRScDyzJtpiToy4HvAVtUaBZ4t9yUoU9kbXNt22wxzppq6jgjeCIrdBxQD0CQia4rssAWt+QTRdFFmKDyei0KKa6oBBoEEhUiyv0AKDRtADweq24MABFxqmq2IEFb5kwCnUtB5AWxDwBwTka0ARxnBiX0fGsMKFilXeV5+U0CBIGGZoE+A/9p3DR5vnRuDklXpHoMEgLrXomBaWT+1rJuqiybMX8KuOaRHddNBkE4Q1cbZmvMsRZ1XedZ7EDzwWW16LquzeuY5XE8HrH3cA9AHY0w8w/qpgYBAT0N8SS5dt01yuvQr5oAU2c8Vp0eAMizxnf/Ok/TKQQgmaZN7OJ60OFC8MMsY30Gu+4BgDKCQ8MysKQ1IzzvRbCjfEIMTzf8JLHAnAEAnH84NFWepTMAYMH3fbNsW+hxuFf1pDik1u2gBwALpqZumIB734FtrqWWtBtbj5pDw7rhIcCaQb/UFfhns1vXsPnTdSHpujiF5VjXrBseKoipgCpPs5T+N74BeNiQMMSLPKUbumLd0A+w3LzO6wZaIL8JvTUNUgxBILKbxxnou0voB6RVCq/8ChBAgWCIMwDksOTr+BEAMphmrAmj7AuARGLoCJb1Mo0yqi+taH56FUDsOSvBLIAqUgAQRMNQBE6AGsyCLIMMpWnaD7CClAKgi9OpNQumt1kUDANmnEOEiCoAKD/NZ/2AZcAANQBuzTKGWSCGyPa8aCg4gMfdNU1jSGNfCMtpynLwCaBVFJk/HlEJ/BKq0LVpOlv2AwJrySQcDgHrd7gHeOY/on/LREur7nosYEqC/iRC5HGaVvWhK1kNYJhkgtgXDSAIk7A6dMcjCHD6c0BfCxagoToemQQLelC475hp4K6SvD0eN4tgaJicqRtn2fF4bRfufIwUQpf0yIERniar5HA8HpPp4DTSs2aLcrs5vj6vn58MkW259QvY62r1/v72vp7/AQAI53ULn93pnBg0Ak7d7Xf7/dtqe/74+Djtdy8PZ+HmP1/vtm/b7W7/upr8AOz276v3DwY47YZDeF7vdluw88fbKnyCb4ucegK7bJPXy+Vy2oPNBzaSM9+Bvb2zzzbhMcaq9UzNIPwLgMB/NwAAAfSIy/uZIbZrsN3zbasQhF++AzjdAfBzfqdy9gyA6FWN998E7M/nMwNcfgDYtcmt/wSwbgBI9elyebuc374At4vzuwpOd6P1W6tfAPWvAdA2I+5nwO77AOi/FxVz3F8ouOcAzn1ZP6t49N/T/yaE05rrt/8ZgHjh6dMEgX8A+BdXZhSSW341RgAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 19500,
            actualDps: 4570.32,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "525000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "502",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 180000,
            ap: 8000,
            dps: 1090.91,
            speed: 16,
            range: 390,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 220,
            foreswing: 71,
            backswing: 30,
            tba: 75
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 16000,
            actualDps: 2181.82,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "525000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 390,
                ld_range: [390, 640]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 5250,
            actualAp: 2625,
            actualDps: 4375.0,
            magnification: "175%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "360000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 126000,
            actualAp: 5600,
            actualDps: 10500.0,
            magnification: "175%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "360000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 275000,
            actualAp: 17875,
            actualDps: 4189.46,
            magnification: "275%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "360000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "501",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 150000,
            ap: 20000,
            dps: 2631.58,
            speed: 5,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 228,
            foreswing: 89,
            backswing: 50,
            tba: 70
          },
          stageStats: {
            actualHp: 262500,
            actualAp: 35000,
            actualDps: 4605.27,
            magnification: "175%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "360000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 100,
                duration_s: 3.33
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
          enemyId: "504",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 108000,
            actualAp: 4800,
            actualDps: 9000.0,
            magnification: "150%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "255000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 300,
            actualAp: 150,
            actualDps: 250.0,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "255000%",
            isBoss: true
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "505",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIEBAUEBAQREREXGxUbGhshISMjIyQuKCo1MTU5ODs+NzAbTFI/P0NJQThISU1ZWVpCbHJhYWIbg4toaWptcnWYcCc9ipJ5gIKFg4NckqR2j5M9qbOKj5G4iT1aqL5StcN2qK6bmppkuMWop6LIrWZL1+KNvrawsLBl0t+7uLa5zaFq6/fpyHPKyclt9//U1NTj4uLs7Ozz8/P6+vr///////9/rSohAAAAQHRSTlMAeMcAC1/oKD78o43btP/QAP///7H//+b//v///////////////////////////////////////////////wD/TaT8wwAABCpJREFUWIWd12t7ojoQAGCucpNYyDYGWahhlaop26W0paKe/P9/dRKotiuisPOpPDavmZkkROm/r1C/hWFKXw/yNHC1759+GyRdBpyIBvLpIWescgcBcsYYI+bn04Q/sNQYAtRDdrpqmqau60ohuOFAMpqmNMuLIi3YNpTVIYAuUshLdopSUQcBqp1+DWYHWjBqDAPkLU/BzxuAWhZj9jBgysd5Fqq/n5U+ZizQhgAm5SO3tElg10zDHAI4lRizp3HgewDFCa/pVh4CiAyyIEyK1LKsdEtjXDB3AGAkfOHApos44lVghVfGAwA9ZxSzrK6A5/N0gvJAYqk/oOwY3DIcZJTgPMdxHO73MZF7A0bMi84FmiR0L9pRlCkqtqPegL0/CCERrajKnNIkIhXbArMvgJv2J5GIMCa0LmcVuT0BvThtgt3ucNoRFQ2lfsCEXYrDLs3lXoBYBBcjria9gGYZX4iIEakPMO0Yz6JdJfcAzLQTKNmkByDXGRyK/eEciAuWGTcBrelBjlvjBVAq2i3A8bA4R8iFVpBt4VnGLWAMrHtCK5K1gRgtl5Z5CwCWtXqez/hWakX48yUA9g3ABADA2dPzfXlhBve+j0c3AAdhhDwPg9c2EFgIYWDe8egGxnw8D2gVFwDAAehcmcHdnQEaAFt5G8BAfDK+moLuH4ELXUA1AKRrM3A86DcAbQPQQ7yKSL8GTKIAN0B7R+w9H+GIUPdKChouFmkEBUBaQAV8RNL4PbgCmI/vcRpDyIG4BWwBhPHiV/FgdAP64+tqE/piBmELKAHyg83Tn0e5G3B+/3naBD7PAeAWkFvYx5un1W+3G3DfN0cAtoDUwhCRzep12g38EAAWgOcdzg8EYmEEo836lRehC5i+rwTA++iD3fkM+EqGxyJ0ANJDA/AZQNDaz74H0bEIHYDx8L7cLHimPFq7qQLC5UVY8yJ0AKboIgfgpbVcWML1o41YCR1AvQzI51o+PxR5E5AowoLQWO8A5N8ZIeRzO0bnNRQAgnhBYt/pABxCFylBTQrnKwmJLgraB3jSAdgwDKMAQuh7/FQ7b8KIA/UH64/7LgBB/g8+hJgfq95fC+HAXIVPAM9+vXysZ10pgI+PFxFvH8/Le7z/awI7x317eXt7fl4vUrurjfZsPl+u5z/ns0Xqn53rpW4vV/P5gljTXO8+UPQ48Wih2Dm/TYhhNMiypD5bMsNIAmdSRYZqalfeC/gHvyHpqgybZTAxTN1UxF+JaiBTlca3Xm38tLGBdrwllPWFQvx2YKEqffvJ0Q2IEOe2UQPNb4T67j9Vv8d14HRP2TdvUi0QyfwLEHxO2uXrwP0HoDxeqXgRKmcgYPDeeaeHhL3qAwE1/LoUirtrrg0BNEkywkoxzGPIaWAaPCStH2A4tjIeja1TjOpQFEdvA/8D/HaSvkb4TT0AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 15000,
            dps: 6923.08,
            speed: 8,
            range: 360,
            rangeType: "単体",
            kbLevel: 4,
            money: 600,
            freq: 65,
            foreswing: 6,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 125000,
            actualAp: 18750,
            actualDps: 8653.85,
            magnification: "125%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "165000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 3750,
            actualAp: 1875,
            actualDps: 3125.0,
            magnification: "125%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "165000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 14625,
            actualDps: 3427.74,
            magnification: "225%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "165000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "502",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 180000,
            ap: 8000,
            dps: 1090.91,
            speed: 16,
            range: 390,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 220,
            foreswing: 71,
            backswing: 30,
            tba: 75
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 10000,
            actualDps: 1363.64,
            magnification: "125%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "165000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 390,
                ld_range: [390, 640]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 1500,
            actualDps: 2500.0,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "110000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 3200,
            actualDps: 6000.0,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "110000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 13000,
            actualDps: 3046.88,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "110000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "501",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 150000,
            ap: 20000,
            dps: 2631.58,
            speed: 5,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 228,
            foreswing: 89,
            backswing: 50,
            tba: 70
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 20000,
            actualDps: 2631.58,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "110000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 100,
                duration_s: 3.33
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
          enemyId: "504",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 2400,
            actualDps: 4500.0,
            magnification: "75%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "95000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 300,
            actualAp: 150,
            actualDps: 250.0,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "95000%",
            isBoss: true
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "505",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIEBAUEBAQREREXGxUbGhshISMjIyQuKCo1MTU5ODs+NzAbTFI/P0NJQThISU1ZWVpCbHJhYWIbg4toaWptcnWYcCc9ipJ5gIKFg4NckqR2j5M9qbOKj5G4iT1aqL5StcN2qK6bmppkuMWop6LIrWZL1+KNvrawsLBl0t+7uLa5zaFq6/fpyHPKyclt9//U1NTj4uLs7Ozz8/P6+vr///////9/rSohAAAAQHRSTlMAeMcAC1/oKD78o43btP/QAP///7H//+b//v///////////////////////////////////////////////wD/TaT8wwAABCpJREFUWIWd12t7ojoQAGCucpNYyDYGWahhlaop26W0paKe/P9/dRKotiuisPOpPDavmZkkROm/r1C/hWFKXw/yNHC1759+GyRdBpyIBvLpIWescgcBcsYYI+bn04Q/sNQYAtRDdrpqmqau60ohuOFAMpqmNMuLIi3YNpTVIYAuUshLdopSUQcBqp1+DWYHWjBqDAPkLU/BzxuAWhZj9jBgysd5Fqq/n5U+ZizQhgAm5SO3tElg10zDHAI4lRizp3HgewDFCa/pVh4CiAyyIEyK1LKsdEtjXDB3AGAkfOHApos44lVghVfGAwA9ZxSzrK6A5/N0gvJAYqk/oOwY3DIcZJTgPMdxHO73MZF7A0bMi84FmiR0L9pRlCkqtqPegL0/CCERrajKnNIkIhXbArMvgJv2J5GIMCa0LmcVuT0BvThtgt3ucNoRFQ2lfsCEXYrDLs3lXoBYBBcjria9gGYZX4iIEakPMO0Yz6JdJfcAzLQTKNmkByDXGRyK/eEciAuWGTcBrelBjlvjBVAq2i3A8bA4R8iFVpBt4VnGLWAMrHtCK5K1gRgtl5Z5CwCWtXqez/hWakX48yUA9g3ABADA2dPzfXlhBve+j0c3AAdhhDwPg9c2EFgIYWDe8egGxnw8D2gVFwDAAehcmcHdnQEaAFt5G8BAfDK+moLuH4ELXUA1AKRrM3A86DcAbQPQQ7yKSL8GTKIAN0B7R+w9H+GIUPdKChouFmkEBUBaQAV8RNL4PbgCmI/vcRpDyIG4BWwBhPHiV/FgdAP64+tqE/piBmELKAHyg83Tn0e5G3B+/3naBD7PAeAWkFvYx5un1W+3G3DfN0cAtoDUwhCRzep12g38EAAWgOcdzg8EYmEEo836lRehC5i+rwTA++iD3fkM+EqGxyJ0ANJDA/AZQNDaz74H0bEIHYDx8L7cLHimPFq7qQLC5UVY8yJ0AKboIgfgpbVcWML1o41YCR1AvQzI51o+PxR5E5AowoLQWO8A5N8ZIeRzO0bnNRQAgnhBYt/pABxCFylBTQrnKwmJLgraB3jSAdgwDKMAQuh7/FQ7b8KIA/UH64/7LgBB/g8+hJgfq95fC+HAXIVPAM9+vXysZ10pgI+PFxFvH8/Le7z/awI7x317eXt7fl4vUrurjfZsPl+u5z/ns0Xqn53rpW4vV/P5gljTXO8+UPQ48Wih2Dm/TYhhNMiypD5bMsNIAmdSRYZqalfeC/gHvyHpqgybZTAxTN1UxF+JaiBTlca3Xm38tLGBdrwllPWFQvx2YKEqffvJ0Q2IEOe2UQPNb4T67j9Vv8d14HRP2TdvUi0QyfwLEHxO2uXrwP0HoDxeqXgRKmcgYPDeeaeHhL3qAwE1/LoUirtrrg0BNEkywkoxzGPIaWAaPCStH2A4tjIeja1TjOpQFEdvA/8D/HaSvkb4TT0AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 15000,
            dps: 6923.08,
            speed: 8,
            range: 360,
            rangeType: "単体",
            kbLevel: 4,
            money: 600,
            freq: 65,
            foreswing: 6,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 7500,
            actualDps: 3461.54,
            magnification: "50%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "55000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAQEBAQEBAQEBAQEBAQADAAACAQEDAQIEAgMNDQ4NDQ4WFRYcHB0lJSYtLS81NDUoOj07PUAvR0FBQkVGSEtoPlpNTlBWVVSBQWRdXFylQHdsZ1/CQYZ4eHjcQZLtQZqEhIT9QaaOjo6YmJi7nlSfn5+np6ezs7PCwsLKysr9zlvW1tbd3d3/7V3l5eXs7Ozx8fH29vb7+/v///+QVKxqAAAAQHRSTlMAmrC94e0WI2N7x/YApNT/jQBCCTAA////////////////////////////////////////////////////////6TrfLQAABcZJREFUWIWVlwmXojgQgFHx4GgKUcMlQsdhbO/1alwv/v+/2kpADDbOOtXv+YhNvtSVqlLSRek+S19pF896x2j8eKEr/QnQ/wBi3hcdGQB6fwVQAAJbzRd1IOuJ1voLQLsB3i4NmtmXKtBTuoD++4C+BtM0TSdgsVWDLxbZ4i1AS4MNbkm30OHGxGyxAeltgAE7tiU9Qh1pYPPFntPeAihcZSaB3O1+5LTD2wC9SfL96IReF/zsOQHlTYCVOSBTu23BIV+A+SagDnE8HtPA930PDBnwIQjCKAS59qxDFUAxMOeAQCYEBQQxrP8BWAZucPE0WB3P5/PlcsHP8+l0Oh6PSZJMoezJHwAFiAv+mIKbpJVyIKV8fAaY4G9sl0bgXKv3M7carwE1iNIIKCVwerU/TamY0QLAMhUFKB4QUB9Wr/enOzGaD8AH9/E0IQQNsP+wHxOyVgFoFYEL4gAWfwLsKzXogEsDBxnECZ0i9ZgkMBG3T7dHqD0MLwAN8KNhEPrIwD9v+gjiCcP6WFGYXqsAPQ3CcEKDKAi9zJTt49AJ5NcxvWKI0koNLNQ8+v439gIvioYuU2OT3u6ELUCmQ8zMOVQBTPCoN/4nHH//Ew5Ho9AnpVQ4ri6ctl/jx7kKYEAQAbH9+Pt79Pn1OaQBZL7bTjapKJcx3dkiACPBgojR9wEDQexg+LVc/h5SlyfDDr2xFgF4ycD+EMKYATrgjdHwCCEOnc3my19DfPPA/QehCOAOfgJ0WRoGlBB7jEEc/lrOZ8uvILJZIPZQRCBPA8xW5yegSagH4KEb3NFvBMxnYeTwSCaL/VMeJheuwcMHHatrETdGQMQhM5Q5auCUj34IJlJXcGIbZKzbTkhDD7WG4ed8PpuhF6N77EvHT+l4tYN6u/UAmKB1O2ipE1Aa2M7oazmfL+fRyAci7LwctqvFKniUxnrrDsAKaulWTcMEdiOsxL9mqAImgpO1s0zplW/zbZPD7boPMVIuGDmgjUlrokl1wiLs+OEo+vwMR8ynR+axjJAkWF1vcdYuJsy7Y1AyQAd2lNW4hp0ep4QzhqMwdIHVhGNwFj1wIlnR8G8snzMVJBOwa+Mc0yDXW3rdRIWRrDmGftmHp4VHSMAz80rkDKDaWdNtkAt/57iO8XSbsujfBDc8S6FBM8D3jAeA7bvkit/w8t9eAA5QzwBaxKpMWwQ8xH1d3Sl0HoAdtm0RcF0s1ts9PwYmKybr9Xqz2QoyATkPY9NnqsrdugA4cS+yyryGCuElr9nPAYZ9Y5Htm6IJyW6zXvHKfN6uXVisV6vFYjHNhAKoktQb6PqAAWpo5u0CDVGDsuMcKFu/YS1eHwwGRSKl/JYLUcBzJ/a9LF/hKRlYjQHN7HMFdKkFAfvWhmcfhIf7gv7wv9VgZSm/TB88wbHyCHkQTQ/FKnnOpkjr6Xq/joSarLYkNlIyIzyoyINKQGjwcoSTNPGIIbGRjDXzAM5/AxgMTHDD2Oeza7+JBr8ElH2AAaIaAnoGdqKI2iovqi02G5AXgJT4x/0hSY6n0/mCNxYjJukDhbhYwRxo59Nzv9Z8BdgLKUiyPNQUXXFYCSWWXozf9ReAI9ieF4U4cbquY3MEVje1pbk2GH1dBFRG4XbZP13o2/V68KDTl2WTJWMBaLwKY5XsoKGzqyACOsWA/xaAV5OSBl25NBhVyxXn3uNht3EhGwsG+XyQBQIgppTGOKdH41iU8dh3fT+iIYH73K3qhQZ5h2J9tlQzmoVoRRlhgw/IsmyY+fkCgBGazuWS8IIeQrv3kDq7bjGwXrliv1mKxipqwBAm9qKJ1ja9A76mC/8wHPZjpY9kX9O7IqEE0Nva9ABq28SzFKlzF0myajCN0W0qmfAuWBIG6FmSUmuohsGs1arKKK9BWpP9Xml8KB2rXQb0jVebXojcKQNwSOujyor5oaqoh4F+ztyPh3JhjjdUtVGvKUpHslo9wYT/AGzNChFQx2HLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 750,
            actualDps: 1250.0,
            magnification: "50%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "55000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6500,
            actualDps: 1523.44,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "55000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "502",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 180000,
            ap: 8000,
            dps: 1090.91,
            speed: 16,
            range: 390,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 220,
            foreswing: 71,
            backswing: 30,
            tba: 75
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 4000,
            actualDps: 545.46,
            magnification: "50%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "55000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 390,
                ld_range: [390, 640]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgEDAwMEBAQEBAQTDQ8LExMTExQcGRkRJScWKCoXMjZCIDJiEDMWPD0zMjM8Ozo7PEAjS1BFRURuNE0gW15QUFAxbHNfW1oye4NpaGinRnc9hYx4c3I2kppFmKCEg4NKqbNNs72Zl5dWw82tqqpg0t5i1eBk3Odo4u7Av79r6fXKychw9f/T09N2/v/e3Nzm5eXv7u349/b///////9HEw6sAAAAQHRSTlMAKU1wg5epE1/T8v7mPbr/38v+nPrQ///+/v8A///////+/////////////////////////////////////wD/SfdDDwAABfxJREFUWIXtVmuTqjgQxbcQFYfLvQMsCogX5A3hEaOy+f//ajuIOrMz42zVftvaVE0NKuek+3SfToQ//+US/if4n+A/QvD5Gk5W0/FAEAYrcdl/NZsv//ji7Q9rubCCOPa06VjXf/0aXL8Uf62AcPBP8FMtpZQQSiOkrLfbHvPy+2X+0zGl0XfwweJASV4URV5QrEy22/GPn+ufP0bib8UFXuxMv8GjlGKO5xQ0l7ZbzQ08J440WXZIndfUeRrDbJHSHt4xHF5frSgnkUeJFThaCQy1MntCIEY9HuclheUipyY4r3FaFnGqqnWZU2/8NX4V0H7vghaec7CQRUv+uSSkxHmEHJqXtfplCGOnxxeYBookole9LnIIgKSuV2ACSqQQwuGrEEbmdTuInwaSLG9/v3pxDB9i1Ux2UYk96jikwOUXIYxNULkXL54u0fZV18ygzkmK9i0LDzRGODIhpC9UGJv0hq+xPBNWhnFwLFKUWM0YY35Ena2XWyUuQIVPOnJyx+OCWnNhaLPGCXJI2fIB3+5rx2e7g1PyAIPJB/zUuuHh9wjafn1mJweqVkcbwLPKO9gQhuaSriba8m940bv3X9HVaZQAah+BAhZ/YiHicSQINIAtSLx6B5+JwQPfaTRQO5RFcQwbn1mr+y1rWaJ5EWeAJIdv8YvoVn8QoCyhV6WGE7R6RF2fnUJ2ObEMKM6OdSCdzPniUcqBFN/weR1HPIBFh2csU6mTsGzPnxO9YhddDcg1zGD62P/uH4xzF5fK6OXI+hVaTsZsOzNkpOg6UlTkkL5VrZsr7/7h4ngH6kk2eywfNSwLdwgZoIGdhKpb4+7dulavMozde/4FTh1cyz57u8Ium6pJbJCgCk2Cb5thmbfTQCUl9P41BuJ6YKKWfbYaHbWh0mxSnOO+WqnIDeSBQdMUXz3spNTcfQaHQrTJ5dgw2yVx37CYuuCJaUqK9FB0BHXkEaxVD9jldI0GrMTt0MBPvkkj3goYp3nNbbmGxguC+pqBF9DAuMMTY2Nv7K4gZ96NrQ/lTDQaH7iO9cEj1B0JalnWHli962E3ptY9g5Pun9hph/je7QX+Mn8H7aSR1MtBhjI1ueuBAOfeVQKoQUG05EZwvnT/Ks7QtqxRZEVRLolGsMvfh7EC8r0Ia1ymbm+iyCVYfSNBnwmUJTk1wHNkoQKHQ+1GfHAR1aF4LaxSGptXWevAheF1/lCB3YbtkXxsdcVgvmRR4nSaEdXkBCOXpmrMv8Cc4KDecdWlf2hVqF7CfCWzK3uk1cQFAgwdp9F0BU6oCR/WPIXYpa5yJ9jc1fDvvb2fQNlIl0KdSxqvgjDSqIkwPw0xdrD3IHjAzvqp+98Y4MB1UTjQNjA1pg5dc09PnWChdfMMYosfBM1DDttuL01mS3N4fU0P3JBl/XPoeVdDTlURJirEgLEVac1DvHtPJci2d3Y3xWZmbuaQAfXmM/WlN/RwMR9rBQRBYkf12d1M6s2XRwN6uu1enztORODcjERhjt4MJWGEzBjuFIUmn9iN4ozCWw5c0B2fxGsrpjWlnjgThu8m80D3VdV04QRGR3bpGSqlL2Voc0PBYSGaJcVpoH28ZQwg4Wy/0c2NnLBK75XY9CGcDRC0mQorpFmaIk4+OZhmfQddN8+U7Fr3/S0H/gDmnQ0Ggy8O9/W7QZSh0zuCSuedMf8cel3T9y7yuxru7vPRABmzjyfimzXfvyNgenZT/9oKEEK7fkYgiO9D2O3ZKZOzB2HSF/LLtZRP7yJQNpsdeoz4EA7p6mkOwvJllzza34AjNZuubp5mpw08Ps9BWErG3k84pFHgIGL7qTC/WzLjqurProjCkLdPCKmebWimNkRzYQ4HYp+YGn5XhmshM92Ag3QXbhBYdbiBi0WnYwvjjB2lpwEIQyWsKtZWVWXssyRcwTUlu2w6EU4KqOkvvr3sz0ZT49KFwZsP/K83/EA4+gguCerTGsJazofL4UhU9rosy75tGNJk9GKEvo4QknUkTZbD+dMQxquFhNBiId0XIG+Pi4UoSuLqoxn+AsC3We/eG16JAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 21600,
            actualAp: 960,
            actualDps: 1800.0,
            magnification: "30%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "16000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "501",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 150000,
            ap: 20000,
            dps: 2631.58,
            speed: 5,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 228,
            foreswing: 89,
            backswing: 50,
            tba: 70
          },
          stageStats: {
            actualHp: 45000,
            actualAp: 6000,
            actualDps: 789.47,
            magnification: "30%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "16000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 800]
            },
            "freeze": {
                chance: 100,
                duration_f: 100,
                duration_s: 3.33
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
          enemyId: "505",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIEBAUEBAQREREXGxUbGhshISMjIyQuKCo1MTU5ODs+NzAbTFI/P0NJQThISU1ZWVpCbHJhYWIbg4toaWptcnWYcCc9ipJ5gIKFg4NckqR2j5M9qbOKj5G4iT1aqL5StcN2qK6bmppkuMWop6LIrWZL1+KNvrawsLBl0t+7uLa5zaFq6/fpyHPKyclt9//U1NTj4uLs7Ozz8/P6+vr///////9/rSohAAAAQHRSTlMAeMcAC1/oKD78o43btP/QAP///7H//+b//v///////////////////////////////////////////////wD/TaT8wwAABCpJREFUWIWd12t7ojoQAGCucpNYyDYGWahhlaop26W0paKe/P9/dRKotiuisPOpPDavmZkkROm/r1C/hWFKXw/yNHC1759+GyRdBpyIBvLpIWescgcBcsYYI+bn04Q/sNQYAtRDdrpqmqau60ohuOFAMpqmNMuLIi3YNpTVIYAuUshLdopSUQcBqp1+DWYHWjBqDAPkLU/BzxuAWhZj9jBgysd5Fqq/n5U+ZizQhgAm5SO3tElg10zDHAI4lRizp3HgewDFCa/pVh4CiAyyIEyK1LKsdEtjXDB3AGAkfOHApos44lVghVfGAwA9ZxSzrK6A5/N0gvJAYqk/oOwY3DIcZJTgPMdxHO73MZF7A0bMi84FmiR0L9pRlCkqtqPegL0/CCERrajKnNIkIhXbArMvgJv2J5GIMCa0LmcVuT0BvThtgt3ucNoRFQ2lfsCEXYrDLs3lXoBYBBcjria9gGYZX4iIEakPMO0Yz6JdJfcAzLQTKNmkByDXGRyK/eEciAuWGTcBrelBjlvjBVAq2i3A8bA4R8iFVpBt4VnGLWAMrHtCK5K1gRgtl5Z5CwCWtXqez/hWakX48yUA9g3ABADA2dPzfXlhBve+j0c3AAdhhDwPg9c2EFgIYWDe8egGxnw8D2gVFwDAAehcmcHdnQEaAFt5G8BAfDK+moLuH4ELXUA1AKRrM3A86DcAbQPQQ7yKSL8GTKIAN0B7R+w9H+GIUPdKChouFmkEBUBaQAV8RNL4PbgCmI/vcRpDyIG4BWwBhPHiV/FgdAP64+tqE/piBmELKAHyg83Tn0e5G3B+/3naBD7PAeAWkFvYx5un1W+3G3DfN0cAtoDUwhCRzep12g38EAAWgOcdzg8EYmEEo836lRehC5i+rwTA++iD3fkM+EqGxyJ0ANJDA/AZQNDaz74H0bEIHYDx8L7cLHimPFq7qQLC5UVY8yJ0AKboIgfgpbVcWML1o41YCR1AvQzI51o+PxR5E5AowoLQWO8A5N8ZIeRzO0bnNRQAgnhBYt/pABxCFylBTQrnKwmJLgraB3jSAdgwDKMAQuh7/FQ7b8KIA/UH64/7LgBB/g8+hJgfq95fC+HAXIVPAM9+vXysZ10pgI+PFxFvH8/Le7z/awI7x317eXt7fl4vUrurjfZsPl+u5z/ns0Xqn53rpW4vV/P5gljTXO8+UPQ48Wih2Dm/TYhhNMiypD5bMsNIAmdSRYZqalfeC/gHvyHpqgybZTAxTN1UxF+JaiBTlca3Xm38tLGBdrwllPWFQvx2YKEqffvJ0Q2IEOe2UQPNb4T67j9Vv8d14HRP2TdvUi0QyfwLEHxO2uXrwP0HoDxeqXgRKmcgYPDeeaeHhL3qAwE1/LoUirtrrg0BNEkywkoxzGPIaWAaPCStH2A4tjIeja1TjOpQFEdvA/8D/HaSvkb4TT0AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 15000,
            dps: 6923.08,
            speed: 8,
            range: 360,
            rangeType: "単体",
            kbLevel: 4,
            money: 600,
            freq: 65,
            foreswing: 6,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 2250,
            actualDps: 1038.46,
            magnification: "15%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "7000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 450,
            actualAp: 225,
            actualDps: 375.0,
            magnification: "15%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "7000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 975,
            actualDps: 228.52,
            magnification: "15%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "7000%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1440,
            actualAp: 64,
            actualDps: 120.0,
            magnification: "2%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "1000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "2%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "1000%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "2%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "1000%",
            isBoss: true
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 15,
            actualDps: 25.0,
            magnification: "1%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 15,
            actualDps: 25.0,
            magnification: "1%",
            count: "0",
            spawnTime: "1.7s",
            spawnTimeFrames: "50f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e11016Data;

