// Stage 11031 Data
import type { StageData } from '../../app/stage/types';

export const e11031Data: StageData = {
  eventId: 11031,
  eventName: "ランキングの間（史上最強生物決定戦ッッ！）",
  typeId: 11,
  typeName: "ランキング道場",
  prefix: "R",
  mapId: 31,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "史上最強生物決定戦ッッ！",
      baseHp: 9999999,
      width: 4200,
      enemyLimit: 12,
      requiredCost: 30,
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
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 2380000,
            actualAp: 170000,
            actualDps: 12846.9,
            magnification: "17000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "3020000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 850000,
            actualAp: 85000,
            actualDps: 12814.6,
            magnification: "17000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "3020000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 680000,
            actualAp: 64600,
            actualDps: 30761.5,
            magnification: "17000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "3020000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 630000,
            actualAp: 90000,
            actualDps: 19148.4,
            magnification: "18000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2920000%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 36900,
            actualDps: 11777.4,
            magnification: "18000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2920000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 2240000,
            actualAp: 160000,
            actualDps: 12091.2,
            magnification: "16000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2820000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 80000,
            actualDps: 12060.8,
            magnification: "16000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2820000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 640000,
            actualAp: 60800,
            actualDps: 28952.0,
            magnification: "16000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2820000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 595000,
            actualAp: 85000,
            actualDps: 18084.6,
            magnification: "17000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2720000%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 850000,
            actualAp: 34850,
            actualDps: 11123.1,
            magnification: "17000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2720000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 2100000,
            actualAp: 150000,
            actualDps: 11335.5,
            magnification: "15000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2620000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 75000,
            actualDps: 11307.0,
            magnification: "15000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2620000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 57000,
            actualDps: 27142.5,
            magnification: "15000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2620000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 560000,
            actualAp: 80000,
            actualDps: 17020.8,
            magnification: "16000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2520000%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 32800,
            actualDps: 10468.8,
            magnification: "16000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2520000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 1960000,
            actualAp: 140000,
            actualDps: 10579.8,
            magnification: "14000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2420000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 70000,
            actualDps: 10553.2,
            magnification: "14000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2420000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 560000,
            actualAp: 53200,
            actualDps: 25333.0,
            magnification: "14000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2420000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 525000,
            actualAp: 75000,
            actualDps: 15957.0,
            magnification: "15000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2320000%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 30750,
            actualDps: 9814.5,
            magnification: "15000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2320000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 1820000,
            actualAp: 130000,
            actualDps: 9824.1,
            magnification: "13000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2220000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 650000,
            actualAp: 65000,
            actualDps: 9799.4,
            magnification: "13000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2220000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 520000,
            actualAp: 49400,
            actualDps: 23523.5,
            magnification: "13000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2220000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 490000,
            actualAp: 70000,
            actualDps: 14893.2,
            magnification: "14000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2120000%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 28700,
            actualDps: 9160.2,
            magnification: "14000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2120000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 1680000,
            actualAp: 120000,
            actualDps: 9068.4,
            magnification: "12000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2020000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 60000,
            actualDps: 9045.6,
            magnification: "12000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2020000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 45600,
            actualDps: 21714.0,
            magnification: "12000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2020000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 455000,
            actualAp: 65000,
            actualDps: 13829.4,
            magnification: "13000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1920000%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 650000,
            actualAp: 26650,
            actualDps: 8505.9,
            magnification: "13000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1920000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 1540000,
            actualAp: 110000,
            actualDps: 8312.7,
            magnification: "11000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1820000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 550000,
            actualAp: 55000,
            actualDps: 8291.8,
            magnification: "11000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1820000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 440000,
            actualAp: 41800,
            actualDps: 19904.5,
            magnification: "11000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1820000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 60000,
            actualDps: 12765.6,
            magnification: "12000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1720000%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 24600,
            actualDps: 7851.6,
            magnification: "12000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1720000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 1400000,
            actualAp: 100000,
            actualDps: 7557.0,
            magnification: "10000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1620000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 50000,
            actualDps: 7538.0,
            magnification: "10000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1620000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 38000,
            actualDps: 18095.0,
            magnification: "10000%",
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
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 385000,
            actualAp: 55000,
            actualDps: 11701.8,
            magnification: "11000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1520000%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 550000,
            actualAp: 22550,
            actualDps: 7197.3,
            magnification: "11000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1520000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 1260000,
            actualAp: 90000,
            actualDps: 6801.3,
            magnification: "9000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1420000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 45000,
            actualDps: 6784.2,
            magnification: "9000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1420000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 34200,
            actualDps: 16285.5,
            magnification: "9000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1420000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 50000,
            actualDps: 10638.0,
            magnification: "10000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1320000%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 20500,
            actualDps: 6543.0,
            magnification: "10000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1320000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 1120000,
            actualAp: 80000,
            actualDps: 6045.6,
            magnification: "8000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1220000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 40000,
            actualDps: 6030.4,
            magnification: "8000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1220000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 30400,
            actualDps: 14476.0,
            magnification: "8000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1220000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 315000,
            actualAp: 45000,
            actualDps: 9574.2,
            magnification: "9000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1120000%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 18450,
            actualDps: 5888.7,
            magnification: "9000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1120000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 980000,
            actualAp: 70000,
            actualDps: 5289.9,
            magnification: "7000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1020000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 35000,
            actualDps: 5276.6,
            magnification: "7000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1020000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 280000,
            actualAp: 26600,
            actualDps: 12666.5,
            magnification: "7000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1020000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 280000,
            actualAp: 40000,
            actualDps: 8510.4,
            magnification: "8000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "920000%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 16400,
            actualDps: 5234.4,
            magnification: "8000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "920000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 840000,
            actualAp: 60000,
            actualDps: 4534.2,
            magnification: "6000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "820000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEBAQECAQECAQECAgICAgIDAwIHBgQJBwUKBwYPCggcEQwYFxUjGBMhGhcrHBUyHhdEGRMqJiI3KiNtGhQ3NC9EMiU5OTlQNihAPTebHhhhQjVeSzqKPTJxTz9pV0x8VkN9YEqGYU2WaFKQdWWacVuhd1+ud1yhgWmwgGaliXetiG+2i3PBjG67lH3LlXbCm4PUn4DNo4rZpIbSq5PfqozgsJTlt5rnv6bxvJ70wqX3yKr9zbD+1Lf/3L+oKac8AAAAQHRSTlMAESIw2UL0wU99q2WL/nhgp8r//pL//8sv4////Mb//bP/6P//4f////7/6P////3/////////////////////7ZqnnQAABN1JREFUWIWdV2t7ojoQrthurVqri1uPW1jKxXCRQELAhNz8///qBKvn2bXnQbbzQeUyb2bevDMZ7+56beIG7kP/K702C9M0D8ZfB9jEAud0/WX/BwenmJXulwEWgOaeD96/DuBnihLx8jXv0cv7Lo8kLsunLzhbdy97LqHywroEOLBGo79yX+/KIGUoC0XuAMByvgv2+/VgjFGgtD62IE4RghGISZSJmh/14M1YayUOTKflQQgK/ZRSJnBWazJUUDutlBQKM/OtdcOFUqqNIOEDd8OC2vgx3TDjKBilUkmpc4TbgYq0Is4PoFHQrCy5qKnJiIu0qLLFMIBZCLIkKvyYcxMCiyJDhaj8LE4HArjILI+9OARxAbPQ88IoyzwPZLocxOIYIGQYzCqzhRGGBGOKzfIhLOrjIBIWCTrwYxlUqAgPJaV5XjUNw1FSVOp9SABegaq6Xc+Kqsg4EaplqqHUDZKkqqPbOTz4h9hPPEPXEhZI5LhKc5bKnbWIEgRxeVPPm4PGiJ1yXTgFTQ+8wZLkE9MdDa3syG/QYAWiLfXx/ZwNi4kpZwods+7IRRRrubd6ASYZL6E67k4Xo20GBMclw6BrzO5BYahlv54nOSIVUx8vjb//cBrFjCZ/zbuUCiowa/oBrAgZh+DE1Ojx+4+3t19R9OvtbdXlsK0EY9m8nwS3ErX7wfSTbdsdxNvbD/u162rjbQFFdaMrbJE4C3b8bL/+fDUY323zwz4dT+uCybSfxW11bjzjb8/2z9fXV/v52XxeENyDJpM+/1FQgY8kZ05o210ExjoEe3qC9bhY9gGsESXlqWoXlUo9+xSB/Wp7eej80y3gKk36Dlu3VvpDBS6rkSKOWd8gAGUEOT5FqFvdJ8Z1cahVJ7ZxZrqZUnlkP9shKUXLTgqaQEjOOv1/W0K0cYl59aUQgmtImffNqyQlmolu4XXo5zroAZgDtJqAdSc7KSBujmQ19RHXLSayA5hsPY/1pWBtibeamGznSDGHKhFYd/OcKh1h1XG7CR2/7RXzDJRet9GzBIHQHAcvHXEF10VadOSvfT/d9beE2R52IT44eZMq+d7deknqAy1Xp8eL1L11vIysboVZiBQIzn18EUVUrc9Pb7ifQeZekmPnopix7WdsM8jz7L/KkiqJ/AvAMgNJ5fzFhDCLq0iIoj7vl+VwSHTeW0R/2hKhWLa12l0udZ0fyfBZzbQeDiVp9ceGjQLGlRlThodgurGCspH83BkiJRRpMBo8bz4AxXKBhfjwsEKpzLBHyvfBAInEhCHdzj4yckyNk5zFgwGskBFmChCeRePWVMBC4cEsjjzaiJqpS85zJHiOVDOYg9G2prLmu4tqrS3TqJDNwAGl2zfEBAWz/26MtzVKBJn1+FwBVIKT308ga5sllA4G6For/7PqZ1GB2r8AOPAr1YzcOqPDOXCYiq+GmTnO1eBt7I6f65cfQHGprds2Afpz591AXg7rRuZcr/TnUegJMDGQBMs7KPkJYBILXQ77C7ooiNSf8p1XWraDQrACylq9v+6Ay0yqtnm/3RhHLuWyVtur2+Mwo2Z0Z/ubFTXLG1xC7V3pYFFXqBaC5P0HizWZrHyQA0y9x+njbza99yPHh1kMQ8/pmdMenqbT5Wqzce/vv13ZfWcGafr09Gdw/wJGTsmRgvuwqgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 30000,
            actualDps: 4522.8,
            magnification: "6000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "820000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 22800,
            actualDps: 10857.0,
            magnification: "6000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "820000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 245000,
            actualAp: 35000,
            actualDps: 7446.6,
            magnification: "7000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "720000%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 14350,
            actualDps: 4580.1,
            magnification: "7000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "720000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 50000,
            actualDps: 3778.5,
            magnification: "5000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "620000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 250000,
            actualAp: 25000,
            actualDps: 3769.0,
            magnification: "5000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "620000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 19000,
            actualDps: 9047.5,
            magnification: "5000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "620000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 210000,
            actualAp: 30000,
            actualDps: 6382.8,
            magnification: "6000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "520000%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 12300,
            actualDps: 3925.8,
            magnification: "6000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "520000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 560000,
            actualAp: 40000,
            actualDps: 3022.8,
            magnification: "4000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "420000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 20000,
            actualDps: 3015.2,
            magnification: "4000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "420000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 15200,
            actualDps: 7238.0,
            magnification: "4000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "420000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 175000,
            actualAp: 25000,
            actualDps: 5319.0,
            magnification: "5000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "320000%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 250000,
            actualAp: 10250,
            actualDps: 3271.5,
            magnification: "5000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "320000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 15000,
            actualDps: 2261.4,
            magnification: "3000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "240000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 11400,
            actualDps: 5428.5,
            magnification: "3000%",
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
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        },
        {
          enemyId: "726",
          enemyName: "花山薫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgMCAgICAgIDAwQEBAQGBQYHBwgJCAgKCQoMCwwODg8QEBESERESERISEhIUExgWExIVFBgYFhoZFxocGx4cGx4gHh4hICQhISEiISQlJSkmJSYqKS0uLTAyMDYzMThFMSg8Oz89PEE/Pz9CQEdCQkNFQF5ISEhJSExgRjVNSmhPT1BQUFBkUEVXVFVXU19aWVpYUoFeWl9fX2h4WUtkY2NmYIhoaGlqaW2HZk9wb3NwaqV2c3iIcGB6eH+XdGB9fYGAfoOGhIubgXCJh42Mi4+ygmePjJmTkpanjnqZl562knucmqKgnqekoqrEm4Cnpa+qqK2tq7DKpIuvrrKzsba2tLfUrJK5uLy9vL3ds5bBwMLiup7Fw8fHx8jKycvMzM3PztDR0dLV1db1zq/Z2drc29zf3t/j4+P/3rvl5eXn5+fp6enr6+vt7e3v7+/x8fH09PT////QEdEPAAAAgHRSTlMACA8aJzev0Nzn/5/AcUNOYox+9gD/uqdsgFMA5cT/uKSN/+7UAKm2/+T/yNj7/t8t/63/wP3+//8A/97/xP/+/P/+/+T//////v//+eX////z////////////////////////////////////////////////////////////ACE9Eq8AAAXwSURBVFiFnZdrc5tGFIZlXZq0vkh2iROnSWM7rq0ojlTXdaz6JlmJoqpKwVFFMWCQEYFgCQkMbNldQP3rRW47k+ZDtPXRzI6GmX14z+6e9yyJP/8TiU8ivbj8aDlLffzoz09mfBaQeVrM5/OFReqWAOrxTuHg94ODfO6WgNTX+be/n1+dH8zeFvD04MPZL/Fv5ZaA5OHby6vL88vL7O0AVGL1zW+XV28v3qZuBaASC49O31x8uHx/nPj/gGQynd3aqx4dvHxz8cujpYXkBEgOePjj63fvFE/p7lZPDk5f7Dbbvx7/8JAckOuOgR9irIyZ/Z/36dYJP7SikF+gCAEzpRAh4CGsDI3d/d1Ot7hvScDoHZMqSDcdBJHpBDKnqLuvirVXJ6LUtTj9pigIAA9o2UXIMceaEEWdk5NOd18MBcgGP5IpSB4yvI2AO9DqR93Ib5xw8ISFUsQBNkUESL3r8S6CDs+rBq+PnaPGuMV6ypizxDQRINu0NOgjQ3SCIFKVyKoMOM3QQq7PrhIBVnsjI1bA0COMB7Iuek6r7nKCzKn2MQkgeRgiU4uMYtMIApMNXEW3WoziO61hxGeo6YAMG0FfsRtHnGQ4OEI4GCo6bUdqyw6dB998Mw1APTADNBC5jSoviZI6Ar4zVAWW1+h6u2WtTVeQLAGEbK6aed4RJFEUOTEepU6lwewxUn9t+hpkaAxRYDZTuUZHiKfWmnI8ykyZqapheDwdkJMCCCE+TCZLTIcXRI4XBEGSGEGs9/E4PglTANRKD8eA4PVMYoOJ50q6ofUMoOim1rBQqC1MBawKHogBrXRiixZGZh/HlRkAFStS2cQRl5kKeELbCMKolc4UG+wwAIrpYV+1YYPn2+PodXI6oGUHGI9b6U2WEVTdqRmBJdvhqKWwFR4+n76NT5oADEfjXxfKkq5wgwA4Zs+FYVf1nB4trEzfhS26tb+7Wy7Nt7reyINe3wQYwYC1cCjz9e9/+mkaYLVQOD07P11eZXXs+b4PEYwHwPjQG/FPqOlHObn45vr6+o+zgjCa7OdNeIHeDiEAe1mSalw4e//+8vryqDt5+U04IGp3Qxj2nxE50srF1Yer67OXVS8KY/kYDF3sF+Ux8mkyT8y8/O384uq0WK23ZQvG3oqisVitDSOaLc2QWdrjFy8Olsu8qHbqzXql2e4NKl2TbvC9QzJA3Bgy6fmGqHiO4xh8Z32n3LFct2/KhLZ+05lX2/rIViGUBkKhwamxRwTGcJOwsUy627YwQqMekHWb3qurSs+DwLHvkwPSFdkLBrrtYqG2R3PA6PvAGd0nTyFL6ygUdAcL3E6Ra5uB47imPksMoFbYAQYdB3dFYXtbFLo+8h1DWyVXsCnYcRVjVbe0tS3JMIcIubq9Sa5gUwaBYVi2j/mFNbHvWwACy14jB2z1IB44CCFcSjzgTOjHADBaIQbMPFMRsP3Y2sT5xALdn1SV56o5YkCmruH4pRCB7WQitWdMAL4ZWzIpYIUbYeBBGOpzk15lTpwBqTq5gueSjfueD8POYnwmmBtrwRp5CulK1+3HSSC3HqteE4YwXg5siFlSQLaqI90EANqH8Q11SzTi5fCh/i5NClgqu6E6jC9ak3Ye56MB5GmOOaERAahZJgKiieCkkyUS25LiB0bXiTs2ISD1zIj6InLcaOIgMyWphyCneZZCmsJSazDiNFVDYHL4kyVJhWLH8QYqIYB60pE5lu9awF65USDIMmMEmC/NUBSRgvsMX2c0NPRvNp7aZiW2DYBcfPjdd2SA+VqDsWGgq89n/s6o09CHvM4+pMgsjVo6qsg9ritv/P2plNo+EnodxW3myL4XqNT9YrFAA7u9+E9tbzACx7b2KpvpdHrqBSO+Za3nd+q1YtmuZ/6pjFylQ5eLDZqpVytP01MBy/l8sdnmG4WNzL/xbGe9UK41GrW9wuPU5wHZ2bmvv12/t15u7dz76qP49t69fH49fjSb/Twgk1tanP1ibu7Onbt37375b8T/79yZm/tidnE+l/kE8BeC1Ig0YAtK+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 1000,
            dps: 75.57,
            speed: 7,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 397,
            foreswing: 118,
            backswing: 71,
            tba: 140
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 30000,
            actualDps: 2267.1,
            magnification: "3000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "160000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-50, 350]
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
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "728",
          enemyName: "ジャック・ハンマー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEBAQECAQECAQECAgICAgIDAwIHBgQJBwUKBwYPCggcEQwYFxUjGBMhGhcrHBUyHhdEGRMqJiI3KiNtGhQ3NC9EMiU5OTlQNihAPTebHhhhQjVeSzqKPTJxTz9pV0x8VkN9YEqGYU2WaFKQdWWacVuhd1+ud1yhgWmwgGaliXetiG+2i3PBjG67lH3LlXbCm4PUn4DNo4rZpIbSq5PfqozgsJTlt5rnv6bxvJ70wqX3yKr9zbD+1Lf/3L+oKac8AAAAQHRSTlMAESIw2UL0wU99q2WL/nhgp8r//pL//8sv4////Mb//bP/6P//4f////7/6P////3/////////////////////7ZqnnQAABN1JREFUWIWdV2t7ojoQrthurVqri1uPW1jKxXCRQELAhNz8///qBKvn2bXnQbbzQeUyb2bevDMZ7+56beIG7kP/K702C9M0D8ZfB9jEAud0/WX/BwenmJXulwEWgOaeD96/DuBnihLx8jXv0cv7Lo8kLsunLzhbdy97LqHywroEOLBGo79yX+/KIGUoC0XuAMByvgv2+/VgjFGgtD62IE4RghGISZSJmh/14M1YayUOTKflQQgK/ZRSJnBWazJUUDutlBQKM/OtdcOFUqqNIOEDd8OC2vgx3TDjKBilUkmpc4TbgYq0Is4PoFHQrCy5qKnJiIu0qLLFMIBZCLIkKvyYcxMCiyJDhaj8LE4HArjILI+9OARxAbPQ88IoyzwPZLocxOIYIGQYzCqzhRGGBGOKzfIhLOrjIBIWCTrwYxlUqAgPJaV5XjUNw1FSVOp9SABegaq6Xc+Kqsg4EaplqqHUDZKkqqPbOTz4h9hPPEPXEhZI5LhKc5bKnbWIEgRxeVPPm4PGiJ1yXTgFTQ+8wZLkE9MdDa3syG/QYAWiLfXx/ZwNi4kpZwods+7IRRRrubd6ASYZL6E67k4Xo20GBMclw6BrzO5BYahlv54nOSIVUx8vjb//cBrFjCZ/zbuUCiowa/oBrAgZh+DE1Ojx+4+3t19R9OvtbdXlsK0EY9m8nwS3ErX7wfSTbdsdxNvbD/u162rjbQFFdaMrbJE4C3b8bL/+fDUY323zwz4dT+uCybSfxW11bjzjb8/2z9fXV/v52XxeENyDJpM+/1FQgY8kZ05o210ExjoEe3qC9bhY9gGsESXlqWoXlUo9+xSB/Wp7eej80y3gKk36Dlu3VvpDBS6rkSKOWd8gAGUEOT5FqFvdJ8Z1cahVJ7ZxZrqZUnlkP9shKUXLTgqaQEjOOv1/W0K0cYl59aUQgmtImffNqyQlmolu4XXo5zroAZgDtJqAdSc7KSBujmQ19RHXLSayA5hsPY/1pWBtibeamGznSDGHKhFYd/OcKh1h1XG7CR2/7RXzDJRet9GzBIHQHAcvHXEF10VadOSvfT/d9beE2R52IT44eZMq+d7deknqAy1Xp8eL1L11vIysboVZiBQIzn18EUVUrc9Pb7ifQeZekmPnopix7WdsM8jz7L/KkiqJ/AvAMgNJ5fzFhDCLq0iIoj7vl+VwSHTeW0R/2hKhWLa12l0udZ0fyfBZzbQeDiVp9ceGjQLGlRlThodgurGCspH83BkiJRRpMBo8bz4AxXKBhfjwsEKpzLBHyvfBAInEhCHdzj4yckyNk5zFgwGskBFmChCeRePWVMBC4cEsjjzaiJqpS85zJHiOVDOYg9G2prLmu4tqrS3TqJDNwAGl2zfEBAWz/26MtzVKBJn1+FwBVIKT308ga5sllA4G6For/7PqZ1GB2r8AOPAr1YzcOqPDOXCYiq+GmTnO1eBt7I6f65cfQHGprds2Afpz591AXg7rRuZcr/TnUegJMDGQBMs7KPkJYBILXQ77C7ooiNSf8p1XWraDQrACylq9v+6Ay0yqtnm/3RhHLuWyVtur2+Mwo2Z0Z/ubFTXLG1xC7V3pYFFXqBaC5P0HizWZrHyQA0y9x+njbza99yPHh1kMQ8/pmdMenqbT5Wqzce/vv13ZfWcGafr09Gdw/wJGTsmRgvuwqgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 500,
            dps: 75.38,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 199,
            foreswing: 40,
            backswing: 46,
            tba: 80
          },
          stageStats: {
            actualHp: 135000,
            actualAp: 13500,
            actualDps: 2035.26,
            magnification: "2700%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "727",
          enemyName: "愚地克巳",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAADAwMDAwMGBQQHBgUHBgYKCgkUEhEkISEmIR4+NS8/NjBdVE53a2JxcG5/cmqEgoCie2CUkY+9knWgnZyqqaexsa3Zp4a1s7HAv73Kx8b4wJvW1NHk4d7s6eb18u/l7uv9AAAAIHRSTlMAIj7jXf+qev+vwv/z/yrO////////DP///////////2VY0EMAAAQFSURBVFiFnVfZlqs4DAy0wWCsG6/jBS///5cjm3TfOfPQMdHhoTmNy5KqtOTx+NXouq7k909+s2ndmq3TpwDzsnE4jmP+GGA73Omc/jiI+ZCa40M/BZi4dhLt8xAOfWII7lOA6ZBwnto9PzxOuToRwWl+P4mUP5kqXjlEkCDEkzF6QwwTy7WWUqzV2mmptcL3zP8MA+y5HS8leSPbeal8LqU+/xl1QFznS/EBWcDHK1C2xtFUUPMNEK1vSjyNNV6kMqinCXzOPy5YhzxaCwChwpgLxKRccgqx+eGjbSkIMYpQKhsC2D0ezElBaj7Y4Lmx1hiRS7UjVE5cNBKyECagK8ilCjZbsEilH9E0wetSqQl8QIsxCW9iKsbGYM1IDDTUqGzizAeMIZfofUCPAJRPVQ2IiUqbamLTDA2hJh8wJzWuPORi4T2TEz81KIPBMosIyQaLqaxqosikPvnbNBIs4FPuzRUTMGxrMJEpISLD8+f51oUO4FqyVh+9CdannGLN9MG0HAGYoUmvefCHG1BCpZxzMsf02LWU50B/Zfp0skX6hy0LDoWDc35s24zZcdK59wAUAbqfuxUcZ8K2oEHGtjZzLM33UiL67A5M3BhvPGwb8AVqmDu2fC9m6k5oXzEBxqOgNhHDcaTKW526IQ+c3KfHjPnDIqqw+Ry3I7c6mLl075VEGllyRt145U0Nm6hq4bXEveX3fF8NVDtE2LEohYg2BzysNp4MkD5mRgD0CfCkJkWhsKMvPIllMymtXzA0ZKiUOErYjg2opIjt9FDGqFIz20AeAzRgpqQEwmNvijUbHmufEk96IAsDjZXs+zrPIl1tNQH3V4s1E/5neMhhCkpvjR7bceh/hlszmvoGkGM0XITemvLwXOm2x9zuz158CR97DHcBrtEUOQEfmzc13QGYeLsUG0GkD25zR7sFQMxrtmFd7SrmNuvynVWL+hcAa03OluZPq8dhW+0lI0VaOLbzeAdg4qHnzTavZ247p4OjtRt5yUg0AKJM5xFnwzDAHq68+3bpbm1/Gxutrwg686iC/QLob3Vcy0TEzlsK5ALINwFWm35U0Orq5cF4COwSf8ns8sfczMEEqUuvBHq9Gn8vBGJeS5q5TjDfkpDrsJaxEnFNw0dcxFMbsLBxxo9KsQGkhvE6MEMoKXhfRgGowf6FLnxrt22eLYSuigHDQsAb43cOW046jzkPapmYqExOl457CK0cEzLzfkG6vhcxBh+D+GGNYTVERFBjPWnmIPC69Pfz3diAy16EdRAAJ5OK9j/lj7sGLhtcazbiA8PfeQ74QeYf23HIAm9T+y0EWb/wp6p0vK9Gfw2XpeUA3NNg+R1hJpTuO2Nf37b057IVjZL/VcS/HLVwcyr36rEAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 205,
            dps: 65.43,
            speed: 9,
            range: 450,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1000,
            freq: 94,
            foreswing: 5,
            backswing: 31,
            tba: 45
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 3280,
            actualDps: 1046.88,
            magnification: "1600%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "40000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "725",
          enemyName: "烈海王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMEAwMEBAQEBAMFBQQGBQMIBAMHBwcHBwcHBwYIBwUICQkNCAUNCAQLCQgLCgkMCQkMCgkLCwsLCwsMDAwMDAwMDAwMDAsRCwgRCwgNDQ0NDg4ODg4VDAgRDgsUDQgPDxAPDxAPDw8QDw0REREREREREhIeCxETExQTExMTExMVExIVExEbEgwUFRUaEw4VFRYVFhYWFxcXFxcXGBgeFhAeFhAYGBggFg8iFQwiFg4lEhgZGhodGRkkFw4eGRcbGxsbGxsqExwbHBwbHR4kGRoxEhsdHR0lGxQnGhIeHh4eHx8nHBUoHBQfHx8pHBMqHRMgICErHRM7Ex4qHxUgIiMiIyMoIh0jJCUyIBUlJSVHFCYlJiczIhcmJyg5IhMnKCgoKSopKSkvKCNIGilMGCkpKis4JhkqKyw1KCA7JCs5KBs8JxkrLC0vKyhGICUsLS88KRs0LilCKRsvMDA4LiM/MCRGLh9dHjU0NDU0NDI9MitLLhs2NzY5OThZKjFONCJRMx9INihoIzw8PDtSNiNRNyVRNyZLPTFAQUBYPChVPi1bPSl0K0NRQTNcPyphPidgPy1cRDBiQixKSkpmRC1kRS9hSThqRy5sSTFxSCxrTDVnTjpvSzOFOlNxTTJsTzl0TTJ2UTV4UTZ6Ujd9UTR5VTp9VTl/VTmBVzuEWTt4XkmHWz6IXj6JXj6NXz+QYECSY0KNZkiUZUJwcHCYZ0WTaUybaUeca0eebEigb0qXclaccU+jcEqfck+nckuqdE2ld1Wtd06weVCyelC0fFKvfli2flO6gFS8glW7hVvAhVfDhli+iF7FiFrGilvJilvLjV3Nj17LkWTRkF7Tk2DRlWbVlWDXlmHYl2PamGPammjdmWTfm2binWbdn2/jnmfhoWywsK/pomntpWy/v77z8/P////xGwwwAAABAHRSTlMABA8fyNbh/wAYMDpIUOxgJ0BXeKq2bISXAKONAExcyP9816+aelYAQagS1HPn/70AcfXtkboAh6b/4NJM/+///wCv1P3M/5Hc//8A/wBk8fTMsv///90AG5mr/////wAvAOv/kcm280X///8A//////+3///V//7//wD+////AP//8uL//////8T+///1/tH/AP///////+v//////gDY///quv///8/////9AP/r//8A/+fO//8A///vAP///gD//v3//+//////6f8A/////////+7//////v//////////////////////////////////////////AP//AAAAPW8KywAABzxJREFUWIWNlw9YE+cdx1+CuiRIF6CizNiS0hJA5I+6YobhOf/s7MXYzXrdv8Rtkqo76+XJHrMst66322baTFnddHXaltoq6+iYjnVlLVt0wmISyjJINksawMRCIWGwkHhQ1G7dm0tw2OeBu2+eJ7l73/t97vf+3t/7/vKCj+/S38CsxJxKSrdsKS3ZtGP7ph2pz5dv3W3wMZjHPgXIqn/qmROv/LBYKZ/9yB/+zwKAOfYQAL82nzjR9cqJ1/ZmzOn47QIA8AmAaM0zb7NRd/iKaE7H9wQCkoSy/W1DzsDtoQ4ZvJcrU+3b/ysEULytWC4GGT/2j//jNd9f/yCB9jseVnJxKbglBFBz5KfQ7az9bb4xX+e/zsGWqoMHqzgAUN6aF1CVllIpWX1ko1L2wMXm7sGwf7AYQLODB1MewMt5Ab/n9NZbLwMgK9pa+0XXeGt7oM/dVg0yRGDPLEAM5gX8OaW/vJzzk3feea4Nhm+gtdHZ5bjy0K//ee6be2YB4nkBP0jrW53sNPthePC6f7jnYrNjZKjDG4r6NgJeQDqCojPT8VgsMRpyOt0+p9vj7e7pjY5OuaWzIZ4XkH5Btj8xHouxwWAoOhH1nXaNjMffC00lok9U8QHkKWU7e+PxySmvdyY+eeNDV5SNxW+4gpF3HytIi2cIks83N3r9MbatPxGLxW52d0xMxhK+xqB/7560eADbPF2B0b/7XE3sZAyaOt2QEx87fP32+zWCYiA66w1Ozbx7+NvnxxLxeGKqvQv+TA2e9kZvd0p4AFyv1OEMxme8rT0tlweGR0K+w43XI9GBVocnwL6fIwSw6nJrP5to8vh6ms47HB0en6vzckvT/m5Pz/hEdRU/QP5g8xs9kZbcU10XHSP9gXi8a/imv9NZc8HT6h0+K+IHZHzJ1d72nSywtNXjiQy4WTY4zvq6dyprzjeHxi5J+Kcx8/WR6zffhHtYbkvfaLDVHzgfCHT8KRNkHPOMz7wn5Qfc540Oz/RnwausM5E+z2RsIBYPHoP5faXXO/PBKv4hVPcFr97mAPJt4VDL4KA73NVZAtPrylA3ey2HH/Bpb69j8oIIrjz5Z52XXdFIeOzfjdBOeSzCJi6I+Fdj5tmrI25Fck8t2fXs0c5JNsgOtXwNduR7p8dqBOSB/DH/tFOaLCrrdh069Ozrrq7WX/7xRwo5kF2cGSkWkkg1vunO5Daep1U9/uTTTx762Yu/+rrRmglEjYmwsEx0RIbOPQpArRoxG3btPvD09wnEasmT1rRMDFcLAeQ4+tmPrkmX43gFTppIPWJkCIaoO9U7NBNQCFiNoLr7amw0fEFvpUy4nqDtpN1k0uP69oHYtEsmZE+s8XaFJhyXCIamrYSBtOj1JKkzkAeaYzcuSXgAnAcPtbc39fUdIBmrmdBrtZgG05ssDKM7MHztDN+GkiqLR39x+ujhrQTTQOn0SGFFIWKhaJpijrzR8gQQ4IE4Q7GzUrGMNFsYu53C1YUVemhP0/bd390p4asL6coF8/YRO7RhGIMKq0AxDWGCN+q8O/8S+AG5RiYJIDA1okYJLW6CBGLDz2fFDyjivDaROLLuc7jOSpjhna3+K99Ia+EgQpV9wQYtLGaDWrOyRIsRJhME2shsoaUNrCcggDIZUbIuExRptIZkUjBUvjIlviCKJfeQ0IAyE7QR5m7mOi1OWCDAVL4pLZ4hiItVOoZmaCtt2yISAxEEGKwUbcMrgbBpFG/QYRRjNDOMuRTySnSoQQ9nhdKvk/DFIFV7ZXUm0mI1UAyFlRcUgKy1KEaSZsZswYsFBRGU4pZkzBhauxaWAbFYgSBochpoS5GgVM5CTNZkFjC4pjYZEbFUhSF4EmDDy8QCFlMlauHS0Ggwb05V2wqNRsNNpHU5/xDAfQg3Apqy0A3ruX/MOSoUw3Um2Gh7pIx3Q5Gs0Wg4AHyhuRyOANYqBME0ZiOVbMkDfDFQIBieBth0qagrMBRFSa7NXi/hi8FnUAwzpwCUeSU3BEUFJOi5NsauADxDyEc06YdpG1XKOSxdg2Kolkq5sJ4PkLlWg2EmWzIPjKszuZMPyFcjGIpTDMPY6zP5YgBWYBimMVFwT68rUyrlyYkv1yEY9AGuaiyXPw9k0AUU02pRVcl2qILkzNRqoFsoihXmCdmVi2AYoSruv3PSkpetKERgq0ohJJXBSjWcNfX9uf8/qcHTkkKFINo1qaYFzgtcfymCqrSruRRKC1Jztj6uRu8FfAD4pFi5crcKfUoxFwAKCkQt/U7/mxv5AWIgOTXgCwVWgbmCJwBHIMJ+9MFehUzJAyh54MilyXCTAtytDbrnXvjN2787+XzDZtmCgLw6c4PtOG2pzMpZujT7jpbWGg2kXk8/f/Kll+rL5gdkFxmON5x89VWy4lOfUCFhNOgI0sgcb9Auy50XIM0t/+q+ffsqFy1evGTJknvmCN4uXrxo0bJ7VyzPz5XOtfkfiYEd+sVBmbAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3500,
            ap: 500,
            dps: 106.38,
            speed: 12,
            range: 470,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 141,
            foreswing: 30,
            backswing: 111,
            tba: 0
          },
          stageStats: {
            actualHp: 28000,
            actualAp: 4000,
            actualDps: 851.04,
            magnification: "800%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "10000%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "724",
          enemyName: "範馬刃牙",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQADAgEDAgEEAgMEAwEFAgIFAwMGBAMJBgQKBwUKBwYNCAUMCQcSBgcPCQcOCwkZBQgOCwoQCwgSCwcRDQoWDAkWDAoQDw8XDgsmBwsXEAsZEAsYEg0bEA0dEA0UFBQXExAsCQ0kEA47DBIjGRIiGhQoFxIqFhFKBhElGRIkHBglHBcxGRRGDhUoHhcoHxlODRY0HBctIBksIRtUDxldCxg2IxoyJR4+IBo5JRwzKSRhEx1CJB5vDx5FJChIJR49KyBrFCA7LiVCKyJDLSBpGSRMKSJxFiJCLyNaJyR6FyV+FSRUKi9BNS9LMiZlJSaHEyaDGSiJFih/HChNNihNNihVMyp3IiqOGitOOzJMPTSSGyxqLjdpMS2YGS1WPC1cPTCOJTZgQS9ZRThZRjthRjVwPTqeKDhfSTt7PTlmSjlpSjmONkOaNEJZU1CkM0JwUDuCRj90Uj5qV0xwWk16V0NfYF1uXVJ5XUt2X0+DW0N7YU+NWE2DYEloaWiKYEeBY1B8Z1uOZFGIaFKJaVeVZ0yPa1aYa1GKcWGdbFF7eHSScV2ZcFefbFuicliedlyWeWWmd12peVuqe1+Tg3atfWKrgGW0gWKnhXOvhGiNj4y5hGO2hmquiXK0iG6dkoi/h2Wpj362jHG8imzEiWq8jnDAjW64knq/kHLBkXbGkHG8ln6xmorElHfJknKrnpLEl3vNlHO/moTLl3e0oZLSmHXQmnvIn4TOnn/VnHmxqJ7Co47Qn4LUoH7Znnizq6PMpIisr6vXoYHZo4LPqI7Vpobdo4DbqYjgp4TfqYe3t7LTrpbarZDkqobjrIzcsJLorIjlrozmsI3qrovctJzpsY3vro7mtJTitpruso/ttZHmuJrWvq3wuZT2t5PpvKDzupb1upbIycX1vZnxv5v5vJf1wZ77v5r9wJr9w535xaT/xJ7/xqD/yKL/yqX/zKj/zqz/067/2LH////hBkJXAAABAHRSTlMABw0V0ODt/z4eKjZNZLC/dYecQltmAIAyss8A4ktbcwCl8Gj/38CZff/himb/9/yLcP/r/6M/AP//gKj//5cA//+y0//+kv/+/97/t/8A/+n////J////1LP////////L4P7//+Wp/+7//9X9//0c//7//7r/4f///9T/8f//4//99b8A2v8A//7///nd/5Pc//3/+////f////74/////P////3/9P//9//9//r+///////////+////+f/////////////////////+/////////////////////////////////////////wD///8A//////////////////8AWRE7ewAABbtJREFUWIWd13tYU2UcB/BzNi12hgoOjugceEsGkYKJiXhX0OJSimmSoNjUEspmOMoInQW6UJNNZI7LdEOZpOjGLUhaTCgh4zKGOgQW0FZgEwdb2w5qbcvEJ5+n5z37/bVnz9ln33fv5fcO+uu/BT1VpHEek319EHj0nWcf/z8Anr5wdUTE2pddUecAou/a7esj1q6PDXNzDqDMmBcbtjps9fak6QSnAGTGnIVhS2LnzYvwpzkDkKbMmhXGTkphvr5kKupUgnH+fsyDB4vTPvRzd3IWlmbk3+4bupPnT3YOIMzeXoTpy7E8xNl14BrGadJevR2KOgMgBIhI55Swr7buIEMkGC9AST564PMdFQaTlMctSd6Qkx6AD6DkWzvMj1qkIsk1TXddWc7go9JQXECivl9rtHT0NFdVVhZX3blV2Gr4NQgHQGDLsYHGy3KL2YoNtRgN2NBxjWknHoBVpReyUzotZpN5WK7Um435Qtl0HICHqEfbXhhbO2yxDvfKdZhZI2grPUYEBFAUDVbKTZZSdoawSa9RC2Q6JY9t6GslAycgsYTKkf6jF8UCQZagoECQncnOUOtELiggQPUQZtfrE0NrLgoE8qbuOvn1XF6SWKoIB01AZip5adu8CKza7OaOroG+Nr0k0TU1a2AnIEBMqDUrttnWLpIq6xeVVVecLSsLglMz9bfoYIBHlhrTptueRYNV2nK5oq6hSURzyeaZHxwjAAEB2Uqr5oR993iKtT0V9Yqq6mKEfPqs1nrJCxAot3YkO840pkkhqSuXynNJMKuZaywJQEEAWppsiOfjALiDJd2PrCZM6IF6i/mqqzSgBGRepyLSsf/dI97bd+R0vuDI3tcIKL1Ca19KAAAiNFyn2dcMcWrIihUr5s9fvHzdxz4onNirBxsCifvjJZLjQAuJi2fExawJidr66Vsw5JP3ezhQAsKhm+ftI0Anr4ljMOLj4qJiYhif+FBJh+6dJ4EA8P6b3y6yCS5zNzF27WJsjImK2bjxo3dh0sGWrxGgBCyd5TdviPjClt0MW22Kilocsobxvmug7OEFoAQktsEwkkdC5ux7Z+um+N27lr+0+NUtW9+cuCpj5AYZaClnKtp6SslQgqZNUrB3XfzyuW/v+0wsnM1kGq7RQAAKU9YlTYVc+CMdDfXVoswlaRLLHYlu8xsF56oWgW3nSA7HDZrUhN0Vtfbojn4gvtL7IG/wmFsSO9kL8Ewk2zbuSiXWJzJhl3wT8i/qrTeGCwkIgqe1wSyloVtpeXgAjjyebzIPWisRfL0RZukGChQWbDM0KVtsxNrVxTgBKLKzLE1pvUyBiAkCnVlSe4KAE/BOK73V3B1pb5SxMmFrIR1veyczrXc5K227EqX6ZnCwFhe8gBu3sSHHdgCg06b58qU1XAQnQDteVCPnOr6WxJaWKLkBVFwAnKi6rFRa6PaDJbD5wS/tt3fiS0DmdVXlqjBHM0rUWP7s0hyAcQGeZ3uu8zUj4ag9TCM22G/gknABdLG6vcjY5+1IUKHtbtDm4QMChZ3t1Q9P2q8E1OArnU3FGha+IdCzO87VdvtCKESleqU1VkhVwfh+RM8sHb9mg23m9tz/4/5XBbKmCjecAE/bkG4fdfThLw7vSVWpyj0g29UFqC88/hE1bd7Qv7VBbes10xwFCgSqBtKfXG/R4CLsmhfVUaBA5IA+/EkAaJG497sF0dHLoqOjAQGYpVUEjN7Rg2SdlQuW2esVQIB86ns+5cnn0YAz3/xEQ3HMAvrivZ9P0UaHMPPUzXtBuKZxVcuZL0cBdOah8z/sx7GUUTLfMrSDOJqALrnRozs5EzxBpFxrynvqD/M24whmHbywmQIGwEsL6ps1F1wQhPxPuWaajWq1FRvMCaUAAK6z2fzc3IaU50fLLyV2ll+KhM3h+AMALm7uE8dPmDJm7Nixzz0u28sxYyaMn+juiTzz+N9dKdGq1+m0HQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 380,
            dps: 180.95,
            speed: 12,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4500,
            freq: 63,
            foreswing: 7,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 1140,
            actualDps: 542.85,
            magnification: "300%",
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
                standing_range: 450,
                omni_range: [-50, 450]
            },
            "knockback": {
                chance: 75
            },
            "critical": {
                chance: 5
            },
            "immune-slow": {
                enabled: true
            }
          }
        }]
    }
  ]
} as const;

export default e11031Data;

