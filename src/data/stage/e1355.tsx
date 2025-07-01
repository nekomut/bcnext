// Stage 1355 Data
import type { StageData } from '../../app/stage/types';

export const e1355Data: StageData = {
  eventId: 1355,
  eventName: "極悪のトリ降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 355,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "アポカリプス 超極ムズ",
      baseHp: 2500000,
      width: 5800,
      enemyLimit: 10,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10668",
          treasureName: "洗脳されし天空のネコへの進化権(洗脳されしネコノトリの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "665",
          enemyName: "極悪な天空のネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgIDAgMQDxYQFRoXGR8XIiwYJTEgIygdJi4eMUEpMjokPVApR1w6QktETVU3VWpJVV5RW2M8ZoNWY2xCcZJcanZicn9IfJ9Kg6ppeodugI10hJFTjrZbl8F7j5+MjI1ensiBlaVgpNJkq9yLpLXJzM3////yB0MbAAAAQHRSTlMACRohRFJ0fY6cr8XL0tzk7/n/ESs5XmmGpb11/6TUA7T8/9v9//3///7/////////////////////////////K2NawwAAAtFJREFUWIXtl2tzmkAUhhe5L7DA4U40DQRRECEiapDY/v9/1bVm2kw7zbDkq8/4xXHe13PzHEToM3wr/PTzTxEixIMB8WQDR1MwQREgJGJvgh5jW/aJoElItXVgdYhIAJaEEGj0jWpwjIlwph0DYFEjpqiaEhJiEJkMsOVjRQOKhrwYaC1FxLMYgBRg4gNxBFvzQUIYNANkbryBRdzI9sBzFFmHwDEgiIkMs/EGPCFUDb5nYNpDmomKkIJZckAzhxYfdFOj+eu8CAJymPQ3VIAQyeAKHqbd9A2NwcSJCC/YtgmRBbqh87SSBjGs8QY41iyfBMY1f0ybqIIqiBjGBwCCp/B6pNB5ihEnYGSCqYM/PgIfbMOKpRDpQAvIW5rFiQaDHiFPlunkeFeDgP6yFYFFfOPX4LkAhF16I0o95BFaAzqB8ZSt8rCbP2+X62WyWWibxwkGcnp8649vQ38cXpIJBm527Ie8GoZDcux3j99Y9X6SHY9b+uWb3dD3wyaWmJqIULJ+Wc63/bCFTd9vICvKBZPeLVdJstz2m3W37vusSaqG7UC42bmrYdvvXn8c+i1c2mbusui5vM6rat4Ph9fvL4cMmnxePrHo4/a8qtrV+rBNs2W+T4t8dcmD8QZ+lZfdvm3rsmqauq679nTKi3z8PgnquqiavKmLfVO1ZVvkbbNqV+M3u5+fOurRVHVFA6CvsqnOp2R8BA6ui66r6nNzabrT/lJUl7oopNF6ihc+PefFfnWtZdnl+fMiYDpNN0xI02WWzgnDTfoDH0UgPzym6SIEX2K4Su9wlkXPMgqBDqBkg8UcRHxd4Rwi7wuN/UEH0x2uyQLQiyhjNAOGm/LbwYaQt+lOViEGfcJpVHXJQa4NjhOBOaGH7+gwqYcfDJSv6Wd4ynPBBwL5a3okMO7if3DYZ/jOnTt3/oL3xCBU1CuhHAge82qULfiI8f9/rj8B811G5DmjmH0AAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 1820000,
            ap: 53000,
            dps: 9408.28,
            speed: 2,
            range: 640,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1999,
            freq: 169,
            foreswing: 20,
            backswing: 6,
            tba: 75
          },
          stageStats: {
            actualHp: 1820000,
            actualAp: 53000,
            actualDps: 9408.28,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
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
            actualHp: 300000,
            actualAp: 23000,
            actualDps: 16829.27,
            magnification: "100%",
            count: "5",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "96.7-103.3s",
            delayFrames: "2,900-3,100f",
            baseHpRatio: "100%",
            isBoss: false
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
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "171",
          enemyName: "レディ・ガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIFBgYHCAkLDg8MGxAVIB4WHx8VISAXISEYJSQcKCkcKycfKywfLy0fLy0hLiwgMS8BQDsiNDMjNjQlOTUmOzgnPTopPTsqQT4tQj4vRj4vR0QvS0YxSkYwTEczT0s1Uk42Uk45WlRLWVk/YVxAYl5BY18Bf39DfkNLdG5MdnBPfHVSgHpSgnlVhX1Zi4Njl49imI9oo5lqp51vraN2uK1+xbqF0cWK2c2Q4tSX7N6c9Oag/OxUEvQ8AAAAQHRSTlMASYT/cWD/CVL/rSWHLzwXR1z/CwSheiTLajKv/guRguzen8z+sQTo/8ECBP/U8P/N4///7P7z//3/////////BlNmiwAAA/ZJREFUWIXtVmtT6joUxVuMVgFpqyBYHkrQcE5KDgmhO0nb/P9/dXfRGWfueA/Bz67hA9POXt2PlbXT6XyBq+skGY6zX1+9C0LW2x72xXr0fZLBrvGNg33xMunPvhF/15+Db5QylYNiMf54+jp7DYz/PVmNVrZhUUyhaWAzaB9m/cnL5CqM4HUO+yW1PIqiWNTebW47ndtFAWZ1F0Ywm1tfadMSRITX3rxkgw24Bkb3gQQL6xFIQPCnvN8na6O5K8anY9+RQEsgolipNMor754lI9wsslCCwa4lkBFrvIkJsqmcRPIwDI3vDJcVEgDJqwYJSu9NytJyPw2Nzx54W0PNCGVpRAAlxRR1xW0wwYtt2hps3nYxtqUsWcrdn8AhIibHJtaVoThIFATVnKnyDIL+rs0AjK84Nk/nseSMQ3gJWINrp4B51DIuGSGCkdTs+sEEneu99w2D2rlGmzyKOMde7oKncGyjr/PSSu19lUYROxIECxHFPAIkEJaLytqYRLkkBM5o4nEODaM2z41AKZFUE6L+nGMt/aLxMkUh4AixhBjw31kEV3PjXV5i6YRiEwnwiBXhJWS3w9G28aUoSXQEKWU4wewueSn2qCLflEcptpCa0ECCWbLavx8FRAPxOwEzcSDBLHlz/hONjqOYETwQKduMQwwl2bVWUIOSnHNZ2kqjIbAoh5Rveten4/tF3X7XlqVuyycklzKVJuU8lS9PTydtPcPpeacY5U6lpHWDiFApa15Cvp2sd4NTBO1Kgxy/C+I4QMrRDFNoFHhYDtawOJFC1i4EpUuwKo1TPANEVyhEBhS9/TBfn3S1WxRw5XxtcS26ygJP0dMhThkVuGwPSwOTvxP0V/vdSjS1/Zhk44S0UkilJG440MJs/p7C/Xg67T9tlUYc9rutNiXlUEswzLk8ZYptJ6e3290wGfV6o2TYv76hVFY1trASrkwNF4w/Bhnj6+9XvApkkxVVVnGjS68EpEYxbpYBYvpANjpYipbcCtKDrmWeC+F0L3BDdzrjojacacZZqdCdhVbKosPdhCewLRnNmVYVKJwuU1oK0diHwPj7yRujlCotSqMpCtzgNKFqYBF4URoXQjrLK2+wD1yjQVQGBN8+ha6nhHKUr7K+keiOWD7qym0fhqG++DqXVjjfVo+d87Viuq4Oi3Bb/TUpdqvN/rCUxkqmDR4LwR7O2SzZdDq+mw4GD5wJBsBKDrvwK84nZmsjagVAgeeP5yTwSWCFVcvlDX18W3/n1nyfvNF8+fA8eps/nvCC/0GWPD89j3qDXn8afEv8D0N32BtcdQKv2V/hqpMFH8Af/OAHX+Dq4uKy2+3+06Lbvby8+NrQ/wUXS7r9c8boxAAAAABJRU5ErkJggg==",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 17777,
            ap: 777,
            dps: 264.89,
            speed: 15,
            range: 370,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1555,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 426648,
            actualAp: 18648,
            actualDps: 6357.36,
            magnification: "2400%",
            count: "0",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "233.3-233.3s",
            delayFrames: "7,000-7,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "649",
          enemyName: "聖天ゴクラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQIBAQEBAQEBAQEDAwMDAwMHBwcmEAEYFgwbGx8fHh0tLCo6OjtKSklbWlqWYxRrammdYw96dGq7bBd/f37Bfx+UkovJjifQmS2ko5zWoS3erjLcvBDcvA/WsV+1s7LhwBThwBrjwhvnvjjmxiXlxy7iwWnoyjfExMTuzDnrzkPny2zv0k/RzMfu12f/4Q703j7z3mzc2tn67Wjm5ub87pbv7+/+/cv5+fn///+QzGd4AAAAQHRSTlMAFTtPaYH+J6/nl87BLZr85P76/v8////+////////////ECf//z5qpf+6gP+n//3B/+D//Q3//v//////////F3dISgAABHRJREFUWIXNlmt7qjoQhfECKrA3QnIQMRKoUGtrUYtbQJH8/391JmDr5bglfjvrsZZC581kkcxEkv6ul9nstdJs9vLg3+5r9vH5/v7+Vguu3j8/Zs+Er9PV25yPXAkymb+t0rU4Yn5g2/ll3i+z+dfxMBeJbfVa8P26TtPtdvv1tQZ9fcFlmq7nf5rDe5ppWZr6S5L+vM4/Pj/XtT4/Pl6r/Lv6UGs/AugxAxFD79172lHcgmX6I4BMWaXE6N95aO75oztPLlMgNYGRwW0SMub3S/PhFCBNw6FxnMFInNBqtytTQV2IT6htNMRL7YFiIsuFsWJN1pDt2GioAqpnMla42PxPYjfq2uxHGJ0uEqy35Pj0h/WYIFeAgrvFMlx+swqkwK2MQ3DncQryECNk1lZiek6HGAWLTcMcyg0eSK2BRYs6yMVnAMMm27NIawqv3S4RYWXCKLoAMMtGMaNNLwHeoxXZilUyB7PEvgQkmCh2kwNc7a6GWImVq2gu27V6zQmAegayTbzPyhtAZP4WCYflXMR2dhNcAq0ctoTiO+5t7iCHLwEkBuhfj+5WPMpv2mIOoOuxDePbQ0UM0CXXgP3+dEGwGKB/699ZYh4M74VS7CaseFjMvtW6tKBMIhDMgSoKZW5XBNB2zuHUpTF1HW6CZbG90hWZQufsYVmUbB9BhSMZRSQ25Y4sQOjS8wwi5nJcQRS8R6beknpPAlCcmThKCqgmhiG4D64AtsNKgrDt2gYRc/AGQOuKlEWWzVy511CPT6pM3J8Wk2kRN4mzMCS2QyhuLIcVoGoJVg1wLUYcgB3zFegQDQXWcq9KG53KEUL0cOTxvh94QX5oaAqVqsEzI6kAseLv0mO+WwVACBZ5KrCa9aqmU6XehLa5yw95uvT95cJfrXLS/DLkqJq9YVZGlsYoP2xXm02+CzfwyVHjJNp8+pHJiFIRiLnb5ctFvtvAOWcZ5NvHxwOuIdRP7PJZcB8KY7RawYEJPpvQDxZHu3E585KEcbkHAiyqxDRGi2Waw/B+GHp+GjW2lha8h0KB3gbNBbsmGkFc6C8DbqM39cPmTaFCCY+MrEicwFAwHq2ScOp74SYIfX+7OFiNgKouRxbKLLqzRqPJ1IPUIYkw9NPjMRbYlmp92MO2tfHG3mTiex4sI9+bBDkr7eZ4qWV+VxR7NR6PJ543DRb+eAKMA/1HAPBzUkoGJJiAptMAfsOPTwXrSh+zfcLigaRujhsAAAKSmI7TZgfrDIyIOdDSkCw5bAMu+tyGyXhHBM4XIJm/BsqnQfq/EMzchwS8ibdwVLHx7VMx4Ri1N5xOKx98H4nVxXZ1pmZIqfY1FFP190liRVHSSJTBNtLVCGpjQrFQS76QTGhGaJHJPbeEnhTR4bMAM4spjcDvYUIiUtjPAmAnuAkpIEyF3kyzSKiYXwFoFsexygv0nkKHfhYgtTXoBRavO/2YuNbT8aCOOqxXnK4LHQn+T2rLsqr2+7qu/UjX+31VlWWx5dTpawPljgZa/2/b8F+/vQXDW/SPpwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 400000,
            ap: 4497,
            dps: 5865.65,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 400,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 11242,
            actualDps: 14664.12,
            magnification: "250%",
            count: "1",
            spawnTime: "300.0s",
            spawnTimeFrames: "9,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1355Data;

