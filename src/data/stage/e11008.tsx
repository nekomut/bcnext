// Stage 11008 Data
import type { StageData } from '../../app/stage/types';

export const e11008Data: StageData = {
  eventId: 11008,
  eventName: "ランキングの間（襲来！ケリ姫軍団）",
  typeId: 11,
  typeName: "ランキング道場",
  prefix: "R",
  mapId: 8,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "襲来！ケリ姫軍団",
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
          enemyId: "030",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgICAgIEBAQJCQkMDAwPDw8SEhISEhITExMgICAgICAiIiIjIyMoKCgsLCwwMDAwMDAxMTEyMjI1NTU3Nzc4ODg+Pj5BQUFHR0dHR0dJSUlNTU1NTU1PT09RUVFYWFhZWVldXV1iYmJiYmJkZGRpaWlqamptbW1ycnJ3d3d3d3d+fn6GhoaHh4ePj4+QkJCYmJienp6np6eysrK8vLzFxcXQ0NDY2Njg4ODo6Ojy8vL7+/s8la7SAAAAQHRSTlMAB4nGDTvkGlwnMKxIeu8+Zt+VVoew89Khbf7LgZj/vvXl/7T/8uL/1uv/9v/f////2/7v/v/+/////v//////W5yotAAABFBJREFUWIWdV2tz2joQxbduDQ4EwsvEYAULgUAISSi2JBsD//9f3SVJO3emza3IzsAHhnN0drUvtVp/syj661/+Dxy2h+Og82WO3nY43R8HL92vEsRbjpRab7+sIBhizDiaf5EgaLXGVHMlJmEQBPeC48E4izvjZcG5HPcmD7P+XRRRL8eEJseqKpW2TiJC8sEdDOEsRTjFxDYfZqggT7E/QZwjRCjHvwiaklCc+UtoT1PCJaf1L4KaST7zJ+ilhEjJ2TvB6QQfweAyvAm+55JIQWRdV82psaWraobF2BvfCnoYU0ylElQwkEIZBOSl40/Qaq/TlFeVcAXcYnO2IOJwxyW0ogc41TRNYUgqm+uFc14d7xEwWiMEJzfgwqO8XC+YEPd6h4JwZVVKlKtkqVF5vV6E4nh6R033X53iCGGM66Y6A8GpKQvz7C9gqKy02laVMW/o5nrWdb3wJhgtMRPuFgPHdHXLJMvK2mbeAlZGYWwU0QXjFHNOefqICZr4ZnLn4BxDGDGwFFGG4Es66w6+UeyurRUFVe50qnEhCWFGCHBEvfjVQjhhjAtdFuXpVGEDapjlqTYl8ySID2r5kHOjIXsYiBeECI5RipFnMXVzVeyWWEkuhWbgR+VOjTKmxBOv5hwM6XKec5pKLLTAzRUy4XLWoAD7uRBMlNzksqAYXMCprqwrywK84Unfy4NOMp1vl2T5lMNMSR+fMMPQX6ePCCV+4yXeiO0kkfttjiRD6x3kASTCOuF86JdI4ShbzR7Q5rBRekp226UkLCXr+R21EIThhCaTeVMlKJkvBRHQYp/M9dj1HpHB83aZquuxt9lBADBPEVmuz8XU04kbQzQjxmVh3FtLwTAUg0iZLvwLutV6ZgpPwuhFSik4QUyQ8mL87vHdFq7eDcKFADz01xRqGp3qZ38X4uPldQQjmlAGWJoSybGCnzwZouz1fFq0+jsOAmC2UAyTUurr1be19+31YvvB4qb/VlOMMxiV1NYrz+nY2VbFNu7mnAEBICUHHZKmedsPD/k8G8bRCyw3N4MYlFoxKvcD//EMO9Xo7XQpGbXCOaWgt2b+BBDIl5/HM1U4axRndOnXUt4lzAi0AwrtzEjrwIyigm/8B2yQcaoQLYlQb3jnbKmpfzG0opVWnEB3/oC/c6z8CRbGuv9i381/R+gcfwO/BWLkiQ8W5o8E1regPxHgrO+u+fxnAc55RjH6RABE0S+TPhXgeQ39w2d49+rR1aAl8/L3FPAn6My5ZEJIVZTmZvZnKhslOPUY8WF3sjsYqW+rCeyHUMVSKgVljUtt1eTvBHAJ3+NsmB3yveWunK9PVleVdo7YQ5b51nMQhHFnVrwunju9VTbWhZKrwWJ039styM63a4cXX2eji2YV3fvyixL28eIMxlQanYz9h2sYRVFnsJd59/ubtdcJLFv7maeIsP3Pw8O3bz/W++mPD3v88ZhvNsk/7d/a6r91G+vCPx1ewQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6000,
            ap: 4200,
            dps: 893.62,
            speed: 35,
            range: 1300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 141,
            foreswing: 4,
            backswing: 137,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 25200,
            actualDps: 5361.72,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1910000%",
            isBoss: true
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
            actualHp: 39000,
            actualAp: 4650,
            actualDps: 3402.45,
            magnification: "300%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1910000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "463",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEVtl20CAgMEAx8FCQMBDAASBQMEEQECFQEKDg4BFgEGHAMkDAYBIAECIAEYFAoCKAEVHgQBLAEBLAEBLgElGg4FLQQPKQYPLQceIioBOQA5HBAINw0CPwEeKiUsKA0LPwEvKyM7KBMDSQEpKzsCTQExNgsSQxwlQggqOilKLxQaSwUPUwNDOggwOzhVMwM6OTg3NmNDQwtUORcrUQs+PkA+Tg9LQyc1TjBIRj5QThVmQxw7XRBLVBVNRnNoSxheUCZDXTpVVVF6UB9jYRNbYyJnXTlZYGV+WiZ2Zx+PXB5paHl1cEGTZia9TlWgbCuIfD14doh8fGCUfyCqdi2xfC+FgJOYikuWlii5gjKrjzHDhjSSiK6clVPJizOvnDKjnG7OkTifmKuzpEjVljnJpTiko7qxsW7lpDvGsk/doWfLvUzXwB+2sMzmt0zJv3XAvMXdyVDSy3HLzJ7b1XXSydfx3yrp22f650zm1uf173f//hX/9k7866z//nj//8H//PYr8/CoAAAAgHRSTlMA///faP/KmP4xt/8aZP6S2iU/D/5qqdX9Lv+CDNroSv7/Kv8O24Wxwf9fN//f////4v+F/7//wf/8/5Pc/v/+zv7//tn/6/////76///////////////////////////////////////////////9//////b//////////////4ZUJ3cAAAZESURBVFiFpVb5U+JaFs4FQiBAEAyI4EKE7hYbpU2jLKOJhGYNE2gIGMIiIijdIuq4tMuj+dfnolVvXle9wdsz3w+pSlLnu+d8Z7kHw/4Ga8uOv/uMjg9XR57/x96YHYxEo3H+fybQZdV/Jl3dHfPrqyVxsPhb9p7ibkEOiuPvouWV7vEb+Tv2xuK4xpw7d1J0t3vw3hPp9lbI1d8h+NLlvxCpCKazOWJSvVbmrIiG86+ivb/Y1mGWato4/WRx6j/tI4q5tJ6wms32g17cDuP25dMHlqmItk/7NjSC9aurelEs9lgdhpH92+PG7UMCerHhdH5AI/gQJPeSXEwPjyUfbpdxwlGalIzY9sbHbT9aCDDU9X14PKYbXhp1bidm3pxE7Ht+LLaB5gJEZH9aMZFbjzn7s09gxupwZQfDdvZQ7T+uzH2EddA4NnouxpOEGVu/5OHpG8k1RIKdzxsfpgRV487d07hmxKy3CZiCJf4zmr0/9tEfW8OM+YZu5+LuuWvBnLebL8Rf0Ag+w1j34GGbfcJZrpd5B5a/femG1SBaHvh/QJIY7L7+MWGzw24mJ3li473H46EdGEI/rkL3MX8Sqrb8cOkxm42Rhyp19u3ix+Rn0rhEvyPeKunXbO3B5/z6ZSOd7w+rh0Hu5O75j5oTW1pRcgyxNMt+LbjxGi/0wxg7Tezve3tXHqNzYYGcVpe+cNYSKPsMAgf9/gUhODyW9q7ukpraM2P+8zfBttQT2WT57wTzK71vF8+TySExfdHelfcTwb+0EeGWFbmjzmJwsK2LH38cLby8rL4j8rCVMJuFIPV6PUlo6Yoqyx0Zn5EOO7lAkro/hTqozi9SrJArSJKUizNUoKLI8klOP0OGX7FeXZ03SScdFaLV6chcBhLIncAsIX+BtRrBHKac/AJFVlrK1IWWpLej1eV0LsLZwhQUaCxLsqJMPVE7LcaHeEvYSiUbtggyqqxUWD7Dc1ycyxSErWEVcUhi6SoMV1tQ5Q4bfex2R6e1dpb2Vh+iOkSCSMODLVEwcJU5fRTH1//6+SNWeuj3Re/Mkv4PrI0IZmMqsiLt3qfAWPw6aQ4n6WH16xGiC5YGVHEFeiDxN7v4wEU3v/Y/NSYGuoZ4VdpLeRs2J6lyix3d1MaJYi8K7RPJVIpAI5ifqkhDD1pCqDt4rn8f841JNDm+985oiF8QaTgwQw6mscUBr4sujNulPN9u8zjq+uI8/myj5Wn5VSiXy4sLP2LeqEZDqduIabAcp+EYmLYQZwj1ntqAE/nzts/VERBjsDfyIKMolY5E+UJ3T3chjeb86SmlESRUFfNVUyYDu4hxhX3Z86wv7Cs/nYc1uLyC2E8HfcBAhgCIhkI+ly8EnyFfmAIcagzrw2UtE+cCwBCOhkOviIYBoOKIY8XaT9u0NBNncYPBFQqFw2HoCAC0G0fcm+z96jzpjgeF+BbnBpTBQNEUwGk3hboJL37at/j1gAmKR1xOYDmB4xicYWYN1l9B8Cnv6mKqd340KoMtrqJILKhdd5tORHtr6uq6uakdPF7LsRhTE90Blt/tfq8PIogE5Kg5+Ao1TxVjePD+8eaUpm6OcJZ2o3rgkU+7TUMopDEAUH+8GY0H3XFaCzQuF6IIi1u9etKXCLk03l13plwbPPfqos7bHBW1iJVodbNRKhwGePeaTw3atWyhntIke1IWdXv3W5YvvUAD2jf3R/hus5ktendHsBLQrzdMf5nYCrD3V4/iVrRWPhyJ+Kh5LeoR5wEcKaZ+NZfJjEejbCZQvGpe8/S9ePgzgdjOGCkESn23O3t/dMipAl4oMqbko2jaRUyjX29itxJDnBbb2aAkM+1s4DDDtb/zqONEi7MVNdz3umOcWzpRAsXz82JOjpVppM3XRoCA1DmTqH4C0KzUUVmBzZYFuGFo37b3rzm0VLzS6ZxINOiXQCZTUQO0orBCRVBlKMBbSVgDONxM4FYSBwZQ7bs5SsjE1ValclJg5bMtvetNER2UIHc6BYYgVm3pIcMCmsnIJwXpTKAFLipKb88Tv26OZcnpbru0ees1lVMhNxWMSxUa0InaWRKpjuxwyVtbgH0YpUBFbYpgCkaoi7mcwYDaz2seKzldE+e23y3rp5h7t6Kd01utf7kc/w0XP1ku6+uzuQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 13000,
            dps: 2119.57,
            speed: 10,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 500,
            freq: 184,
            foreswing: 57,
            backswing: 46,
            tba: 51
          },
          stageStats: {
            actualHp: 540000,
            actualAp: 39000,
            actualDps: 6358.71,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1790000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [6500, 6500],
                timings: [57, 83]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "061",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 50000,
            ap: 2400,
            dps: 2482.76,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 29,
            foreswing: 17,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 9600,
            actualDps: 9931.04,
            magnification: "400%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "1790000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 800,
            actualAp: 8000,
            actualDps: 4285.68,
            magnification: "800%",
            count: "8",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1790000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "462",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEULVQsCAgENAQ4HBhcCAz0EEAMMCwwOByoEGgUZDRkSExYTDjcCJAACJgIYGBgNHxcaClUfFicRHiYBLwEcHBwCLwECMAEZGDwEMQMtHBAjGjkqGishISEdGkwPLhMXKR0COgEFOgUjIjEhFmUlHkMEPQMJOggnJScgKioCRAEoIU4WNxYrKSwDRgMHRQUCSgEfNR4KRQgqJVgXPRgoMycwLy8vLT8EUgILTgoePS0XRRkzKFsSSwslODozMzM6I3AJVQYyLWY4NTlSMgU0Kn0sQitFOR04MGg5Nk87OzsUWBE1QEw6NXFCPkQSYg8jViVBNYFERERCPHA1VTVLSUtIP4JKWBRXNpdkTBhkQmdRUVFIRZdSRolWVVZHQ7ZZWVhXSp1dXV1ZU6BcY1piX2FqSLh0ZiZlZWVjWqZpaWi2WQFtbW2PbxtxcXFvZ7d1dXV7e3t6cMWCgoKGhoaKioq+hR+KfduRkZGWlpabm5uhoaGrqqrlqC26urrm1GL//odZtnhfAAAAgHRSTlMA/////vL//8b//v9qn/7L///iD/9hRf+F//////+nxzpf////S3j/5ir/t/8aQAjLWP+Z7P//CTKdd/9awP7/HP/////M///+/0bf//8Vc////qP+/7H////////////////j///5/////////////////////////////////3NxlO4AAAdlSURBVFiF3Vf7V9paGiVYg4aSik0LlYCVohE8Wg0NPrBR0vqIkpbQQ9uJpDG9uY2ZNCRNuA1g7fzrc9TeuXdminQ6a80PsxdrhXDY+3ueky+RyP8Ua9v/pcBs7meZ6YWrSzn14icFErGVy8va1OxPKaxHivGp9OW36anF7cc/YX8lkph6NJ2ej6Rjj7KpO8tIc2P9x/lzsWJkfWLqUTabWkzFss+fF25H1u78vro0P1JgJT6NFMZj8Wy2ccLG6+9Pd3J3ppEXV07kdp4uj1JIx+LTuek4Qrb1rs6enJ21p+KRXeoqsZGnb1qbxREK98amHrGP2FqNZWunp2z70yc2vnDpxCWW841fT58+HCGRGEMB1E5OWrXqWefg9HOz1Y7lInM55MT64ky+9evp8dxN/PklAhtLVWvN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",
          traits: ["浮"],
          baseStats: {
            hp: 220000,
            ap: 17000,
            dps: 7083.33,
            speed: 18,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 750,
            freq: 72,
            foreswing: 33,
            backswing: 35,
            tba: 20
          },
          stageStats: {
            actualHp: 660000,
            actualAp: 51000,
            actualDps: 21249.99,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1640000%",
            isBoss: true
          },
          abilities: {}
        },
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
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1640000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "030",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgICAgIEBAQJCQkMDAwPDw8SEhISEhITExMgICAgICAiIiIjIyMoKCgsLCwwMDAwMDAxMTEyMjI1NTU3Nzc4ODg+Pj5BQUFHR0dHR0dJSUlNTU1NTU1PT09RUVFYWFhZWVldXV1iYmJiYmJkZGRpaWlqamptbW1ycnJ3d3d3d3d+fn6GhoaHh4ePj4+QkJCYmJienp6np6eysrK8vLzFxcXQ0NDY2Njg4ODo6Ojy8vL7+/s8la7SAAAAQHRSTlMAB4nGDTvkGlwnMKxIeu8+Zt+VVoew89Khbf7LgZj/vvXl/7T/8uL/1uv/9v/f////2/7v/v/+/////v//////W5yotAAABFBJREFUWIWdV2tz2joQxbduDQ4EwsvEYAULgUAISSi2JBsD//9f3SVJO3emza3IzsAHhnN0drUvtVp/syj661/+Dxy2h+Og82WO3nY43R8HL92vEsRbjpRab7+sIBhizDiaf5EgaLXGVHMlJmEQBPeC48E4izvjZcG5HPcmD7P+XRRRL8eEJseqKpW2TiJC8sEdDOEsRTjFxDYfZqggT7E/QZwjRCjHvwiaklCc+UtoT1PCJaf1L4KaST7zJ+ilhEjJ2TvB6QQfweAyvAm+55JIQWRdV82psaWraobF2BvfCnoYU0ylElQwkEIZBOSl40/Qaq/TlFeVcAXcYnO2IOJwxyW0ogc41TRNYUgqm+uFc14d7xEwWiMEJzfgwqO8XC+YEPd6h4JwZVVKlKtkqVF5vV6E4nh6R033X53iCGGM66Y6A8GpKQvz7C9gqKy02laVMW/o5nrWdb3wJhgtMRPuFgPHdHXLJMvK2mbeAlZGYWwU0QXjFHNOefqICZr4ZnLn4BxDGDGwFFGG4Es66w6+UeyurRUFVe50qnEhCWFGCHBEvfjVQjhhjAtdFuXpVGEDapjlqTYl8ySID2r5kHOjIXsYiBeECI5RipFnMXVzVeyWWEkuhWbgR+VOjTKmxBOv5hwM6XKec5pKLLTAzRUy4XLWoAD7uRBMlNzksqAYXMCprqwrywK84Unfy4NOMp1vl2T5lMNMSR+fMMPQX6ePCCV+4yXeiO0kkfttjiRD6x3kASTCOuF86JdI4ShbzR7Q5rBRekp226UkLCXr+R21EIThhCaTeVMlKJkvBRHQYp/M9dj1HpHB83aZquuxt9lBADBPEVmuz8XU04kbQzQjxmVh3FtLwTAUg0iZLvwLutV6ZgpPwuhFSik4QUyQ8mL87vHdFq7eDcKFADz01xRqGp3qZ38X4uPldQQjmlAGWJoSybGCnzwZouz1fFq0+jsOAmC2UAyTUurr1be19+31YvvB4qb/VlOMMxiV1NYrz+nY2VbFNu7mnAEBICUHHZKmedsPD/k8G8bRCyw3N4MYlFoxKvcD//EMO9Xo7XQpGbXCOaWgt2b+BBDIl5/HM1U4axRndOnXUt4lzAi0AwrtzEjrwIyigm/8B2yQcaoQLYlQb3jnbKmpfzG0opVWnEB3/oC/c6z8CRbGuv9i381/R+gcfwO/BWLkiQ8W5o8E1regPxHgrO+u+fxnAc55RjH6RABE0S+TPhXgeQ39w2d49+rR1aAl8/L3FPAn6My5ZEJIVZTmZvZnKhslOPUY8WF3sjsYqW+rCeyHUMVSKgVljUtt1eTvBHAJ3+NsmB3yveWunK9PVleVdo7YQ5b51nMQhHFnVrwunju9VTbWhZKrwWJ039styM63a4cXX2eji2YV3fvyixL28eIMxlQanYz9h2sYRVFnsJd59/ubtdcJLFv7maeIsP3Pw8O3bz/W++mPD3v88ZhvNsk/7d/a6r91G+vCPx1ewQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6000,
            ap: 4200,
            dps: 893.62,
            speed: 35,
            range: 1300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 141,
            foreswing: 4,
            backswing: 137,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 21000,
            actualDps: 4468.1,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1490000%",
            isBoss: true
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
            actualHp: 32500,
            actualAp: 3875,
            actualDps: 2835.38,
            magnification: "250%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1490000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "463",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEVtl20CAgMEAx8FCQMBDAASBQMEEQECFQEKDg4BFgEGHAMkDAYBIAECIAEYFAoCKAEVHgQBLAEBLAEBLgElGg4FLQQPKQYPLQceIioBOQA5HBAINw0CPwEeKiUsKA0LPwEvKyM7KBMDSQEpKzsCTQExNgsSQxwlQggqOilKLxQaSwUPUwNDOggwOzhVMwM6OTg3NmNDQwtUORcrUQs+PkA+Tg9LQyc1TjBIRj5QThVmQxw7XRBLVBVNRnNoSxheUCZDXTpVVVF6UB9jYRNbYyJnXTlZYGV+WiZ2Zx+PXB5paHl1cEGTZia9TlWgbCuIfD14doh8fGCUfyCqdi2xfC+FgJOYikuWlii5gjKrjzHDhjSSiK6clVPJizOvnDKjnG7OkTifmKuzpEjVljnJpTiko7qxsW7lpDvGsk/doWfLvUzXwB+2sMzmt0zJv3XAvMXdyVDSy3HLzJ7b1XXSydfx3yrp22f650zm1uf173f//hX/9k7866z//nj//8H//PYr8/CoAAAAgHRSTlMA///faP/KmP4xt/8aZP6S2iU/D/5qqdX9Lv+CDNroSv7/Kv8O24Wxwf9fN//f////4v+F/7//wf/8/5Pc/v/+zv7//tn/6/////76///////////////////////////////////////////////9//////b//////////////4ZUJ3cAAAZESURBVFiFpVb5U+JaFs4FQiBAEAyI4EKE7hYbpU2jLKOJhGYNE2gIGMIiIijdIuq4tMuj+dfnolVvXle9wdsz3w+pSlLnu+d8Z7kHw/4Ga8uOv/uMjg9XR57/x96YHYxEo3H+fybQZdV/Jl3dHfPrqyVxsPhb9p7ibkEOiuPvouWV7vEb+Tv2xuK4xpw7d1J0t3vw3hPp9lbI1d8h+NLlvxCpCKazOWJSvVbmrIiG86+ivb/Y1mGWato4/WRx6j/tI4q5tJ6wms32g17cDuP25dMHlqmItk/7NjSC9aurelEs9lgdhpH92+PG7UMCerHhdH5AI/gQJPeSXEwPjyUfbpdxwlGalIzY9sbHbT9aCDDU9X14PKYbXhp1bidm3pxE7Ht+LLaB5gJEZH9aMZFbjzn7s09gxupwZQfDdvZQ7T+uzH2EddA4NnouxpOEGVu/5OHpG8k1RIKdzxsfpgRV487d07hmxKy3CZiCJf4zmr0/9tEfW8OM+YZu5+LuuWvBnLebL8Rf0Ag+w1j34GGbfcJZrpd5B5a/femG1SBaHvh/QJIY7L7+MWGzw24mJ3li473H46EdGEI/rkL3MX8Sqrb8cOkxm42Rhyp19u3ix+Rn0rhEvyPeKunXbO3B5/z6ZSOd7w+rh0Hu5O75j5oTW1pRcgyxNMt+LbjxGi/0wxg7Tezve3tXHqNzYYGcVpe+cNYSKPsMAgf9/gUhODyW9q7ukpraM2P+8zfBttQT2WT57wTzK71vF8+TySExfdHelfcTwb+0EeGWFbmjzmJwsK2LH38cLby8rL4j8rCVMJuFIPV6PUlo6Yoqyx0Zn5EOO7lAkro/hTqozi9SrJArSJKUizNUoKLI8klOP0OGX7FeXZ03SScdFaLV6chcBhLIncAsIX+BtRrBHKac/AJFVlrK1IWWpLej1eV0LsLZwhQUaCxLsqJMPVE7LcaHeEvYSiUbtggyqqxUWD7Dc1ycyxSErWEVcUhi6SoMV1tQ5Q4bfex2R6e1dpb2Vh+iOkSCSMODLVEwcJU5fRTH1//6+SNWeuj3Re/Mkv4PrI0IZmMqsiLt3qfAWPw6aQ4n6WH16xGiC5YGVHEFeiDxN7v4wEU3v/Y/NSYGuoZ4VdpLeRs2J6lyix3d1MaJYi8K7RPJVIpAI5ifqkhDD1pCqDt4rn8f841JNDm+985oiF8QaTgwQw6mscUBr4sujNulPN9u8zjq+uI8/myj5Wn5VSiXy4sLP2LeqEZDqduIabAcp+EYmLYQZwj1ntqAE/nzts/VERBjsDfyIKMolY5E+UJ3T3chjeb86SmlESRUFfNVUyYDu4hxhX3Z86wv7Cs/nYc1uLyC2E8HfcBAhgCIhkI+ly8EnyFfmAIcagzrw2UtE+cCwBCOhkOviIYBoOKIY8XaT9u0NBNncYPBFQqFw2HoCAC0G0fcm+z96jzpjgeF+BbnBpTBQNEUwGk3hboJL37at/j1gAmKR1xOYDmB4xicYWYN1l9B8Cnv6mKqd340KoMtrqJILKhdd5tORHtr6uq6uakdPF7LsRhTE90Blt/tfq8PIogE5Kg5+Ao1TxVjePD+8eaUpm6OcJZ2o3rgkU+7TUMopDEAUH+8GY0H3XFaCzQuF6IIi1u9etKXCLk03l13plwbPPfqos7bHBW1iJVodbNRKhwGePeaTw3atWyhntIke1IWdXv3W5YvvUAD2jf3R/hus5ktendHsBLQrzdMf5nYCrD3V4/iVrRWPhyJ+Kh5LeoR5wEcKaZ+NZfJjEejbCZQvGpe8/S9ePgzgdjOGCkESn23O3t/dMipAl4oMqbko2jaRUyjX29itxJDnBbb2aAkM+1s4DDDtb/zqONEi7MVNdz3umOcWzpRAsXz82JOjpVppM3XRoCA1DmTqH4C0KzUUVmBzZYFuGFo37b3rzm0VLzS6ZxINOiXQCZTUQO0orBCRVBlKMBbSVgDONxM4FYSBwZQ7bs5SsjE1ValclJg5bMtvetNER2UIHc6BYYgVm3pIcMCmsnIJwXpTKAFLipKb88Tv26OZcnpbru0ees1lVMhNxWMSxUa0InaWRKpjuxwyVtbgH0YpUBFbYpgCkaoi7mcwYDaz2seKzldE+e23y3rp5h7t6Kd01utf7kc/w0XP1ku6+uzuQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 13000,
            dps: 2119.57,
            speed: 10,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 500,
            freq: 184,
            foreswing: 57,
            backswing: 46,
            tba: 51
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 32500,
            actualDps: 5298.93,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1370000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [6500, 6500],
                timings: [57, 83]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "061",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 50000,
            ap: 2400,
            dps: 2482.76,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 29,
            foreswing: 17,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 175000,
            actualAp: 8400,
            actualDps: 8689.66,
            magnification: "350%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "1370000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 750,
            actualAp: 7500,
            actualDps: 4017.82,
            magnification: "750%",
            count: "8",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1370000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "462",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEULVQsCAgENAQ4HBhcCAz0EEAMMCwwOByoEGgUZDRkSExYTDjcCJAACJgIYGBgNHxcaClUfFicRHiYBLwEcHBwCLwECMAEZGDwEMQMtHBAjGjkqGishISEdGkwPLhMXKR0COgEFOgUjIjEhFmUlHkMEPQMJOggnJScgKioCRAEoIU4WNxYrKSwDRgMHRQUCSgEfNR4KRQgqJVgXPRgoMycwLy8vLT8EUgILTgoePS0XRRkzKFsSSwslODozMzM6I3AJVQYyLWY4NTlSMgU0Kn0sQitFOR04MGg5Nk87OzsUWBE1QEw6NXFCPkQSYg8jViVBNYFERERCPHA1VTVLSUtIP4JKWBRXNpdkTBhkQmdRUVFIRZdSRolWVVZHQ7ZZWVhXSp1dXV1ZU6BcY1piX2FqSLh0ZiZlZWVjWqZpaWi2WQFtbW2PbxtxcXFvZ7d1dXV7e3t6cMWCgoKGhoaKioq+hR+KfduRkZGWlpabm5uhoaGrqqrlqC26urrm1GL//odZtnhfAAAAgHRSTlMA/////vL//8b//v9qn/7L///iD/9hRf+F//////+nxzpf////S3j/5ir/t/8aQAjLWP+Z7P//CTKdd/9awP7/HP/////M///+/0bf//8Vc////qP+/7H////////////////j///5/////////////////////////////////3NxlO4AAAdlSURBVFiF3Vf7V9paGiVYg4aSik0LlYCVohE8Wg0NPrBR0vqIkpbQQ9uJpDG9uY2ZNCRNuA1g7fzrc9TeuXdminQ6a80PsxdrhXDY+3ueky+RyP8Ua9v/pcBs7meZ6YWrSzn14icFErGVy8va1OxPKaxHivGp9OW36anF7cc/YX8lkph6NJ2ej6Rjj7KpO8tIc2P9x/lzsWJkfWLqUTabWkzFss+fF25H1u78vro0P1JgJT6NFMZj8Wy2ccLG6+9Pd3J3ppEXV07kdp4uj1JIx+LTuek4Qrb1rs6enJ21p+KRXeoqsZGnb1qbxREK98amHrGP2FqNZWunp2z70yc2vnDpxCWW841fT58+HCGRGEMB1E5OWrXqWefg9HOz1Y7lInM55MT64ky+9evp8dxN/PklAhtLVWvN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",
          traits: ["浮"],
          baseStats: {
            hp: 220000,
            ap: 17000,
            dps: 7083.33,
            speed: 18,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 750,
            freq: 72,
            foreswing: 33,
            backswing: 35,
            tba: 20
          },
          stageStats: {
            actualHp: 550000,
            actualAp: 42500,
            actualDps: 17708.33,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1220000%",
            isBoss: true
          },
          abilities: {}
        },
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
            actualHp: 3750,
            actualAp: 375,
            actualDps: 274.43,
            magnification: "750%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1220000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "030",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgICAgIEBAQJCQkMDAwPDw8SEhISEhITExMgICAgICAiIiIjIyMoKCgsLCwwMDAwMDAxMTEyMjI1NTU3Nzc4ODg+Pj5BQUFHR0dHR0dJSUlNTU1NTU1PT09RUVFYWFhZWVldXV1iYmJiYmJkZGRpaWlqamptbW1ycnJ3d3d3d3d+fn6GhoaHh4ePj4+QkJCYmJienp6np6eysrK8vLzFxcXQ0NDY2Njg4ODo6Ojy8vL7+/s8la7SAAAAQHRSTlMAB4nGDTvkGlwnMKxIeu8+Zt+VVoew89Khbf7LgZj/vvXl/7T/8uL/1uv/9v/f////2/7v/v/+/////v//////W5yotAAABFBJREFUWIWdV2tz2joQxbduDQ4EwsvEYAULgUAISSi2JBsD//9f3SVJO3emza3IzsAHhnN0drUvtVp/syj661/+Dxy2h+Og82WO3nY43R8HL92vEsRbjpRab7+sIBhizDiaf5EgaLXGVHMlJmEQBPeC48E4izvjZcG5HPcmD7P+XRRRL8eEJseqKpW2TiJC8sEdDOEsRTjFxDYfZqggT7E/QZwjRCjHvwiaklCc+UtoT1PCJaf1L4KaST7zJ+ilhEjJ2TvB6QQfweAyvAm+55JIQWRdV82psaWraobF2BvfCnoYU0ylElQwkEIZBOSl40/Qaq/TlFeVcAXcYnO2IOJwxyW0ogc41TRNYUgqm+uFc14d7xEwWiMEJzfgwqO8XC+YEPd6h4JwZVVKlKtkqVF5vV6E4nh6R033X53iCGGM66Y6A8GpKQvz7C9gqKy02laVMW/o5nrWdb3wJhgtMRPuFgPHdHXLJMvK2mbeAlZGYWwU0QXjFHNOefqICZr4ZnLn4BxDGDGwFFGG4Es66w6+UeyurRUFVe50qnEhCWFGCHBEvfjVQjhhjAtdFuXpVGEDapjlqTYl8ySID2r5kHOjIXsYiBeECI5RipFnMXVzVeyWWEkuhWbgR+VOjTKmxBOv5hwM6XKec5pKLLTAzRUy4XLWoAD7uRBMlNzksqAYXMCprqwrywK84Unfy4NOMp1vl2T5lMNMSR+fMMPQX6ePCCV+4yXeiO0kkfttjiRD6x3kASTCOuF86JdI4ShbzR7Q5rBRekp226UkLCXr+R21EIThhCaTeVMlKJkvBRHQYp/M9dj1HpHB83aZquuxt9lBADBPEVmuz8XU04kbQzQjxmVh3FtLwTAUg0iZLvwLutV6ZgpPwuhFSik4QUyQ8mL87vHdFq7eDcKFADz01xRqGp3qZ38X4uPldQQjmlAGWJoSybGCnzwZouz1fFq0+jsOAmC2UAyTUurr1be19+31YvvB4qb/VlOMMxiV1NYrz+nY2VbFNu7mnAEBICUHHZKmedsPD/k8G8bRCyw3N4MYlFoxKvcD//EMO9Xo7XQpGbXCOaWgt2b+BBDIl5/HM1U4axRndOnXUt4lzAi0AwrtzEjrwIyigm/8B2yQcaoQLYlQb3jnbKmpfzG0opVWnEB3/oC/c6z8CRbGuv9i381/R+gcfwO/BWLkiQ8W5o8E1regPxHgrO+u+fxnAc55RjH6RABE0S+TPhXgeQ39w2d49+rR1aAl8/L3FPAn6My5ZEJIVZTmZvZnKhslOPUY8WF3sjsYqW+rCeyHUMVSKgVljUtt1eTvBHAJ3+NsmB3yveWunK9PVleVdo7YQ5b51nMQhHFnVrwunju9VTbWhZKrwWJ039styM63a4cXX2eji2YV3fvyixL28eIMxlQanYz9h2sYRVFnsJd59/ubtdcJLFv7maeIsP3Pw8O3bz/W++mPD3v88ZhvNsk/7d/a6r91G+vCPx1ewQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6000,
            ap: 4200,
            dps: 893.62,
            speed: 35,
            range: 1300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 141,
            foreswing: 4,
            backswing: 137,
            tba: 0
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 16800,
            actualDps: 3574.48,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1070000%",
            isBoss: true
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
            actualHp: 26000,
            actualAp: 3100,
            actualDps: 2268.3,
            magnification: "200%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1070000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "463",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEVtl20CAgMEAx8FCQMBDAASBQMEEQECFQEKDg4BFgEGHAMkDAYBIAECIAEYFAoCKAEVHgQBLAEBLAEBLgElGg4FLQQPKQYPLQceIioBOQA5HBAINw0CPwEeKiUsKA0LPwEvKyM7KBMDSQEpKzsCTQExNgsSQxwlQggqOilKLxQaSwUPUwNDOggwOzhVMwM6OTg3NmNDQwtUORcrUQs+PkA+Tg9LQyc1TjBIRj5QThVmQxw7XRBLVBVNRnNoSxheUCZDXTpVVVF6UB9jYRNbYyJnXTlZYGV+WiZ2Zx+PXB5paHl1cEGTZia9TlWgbCuIfD14doh8fGCUfyCqdi2xfC+FgJOYikuWlii5gjKrjzHDhjSSiK6clVPJizOvnDKjnG7OkTifmKuzpEjVljnJpTiko7qxsW7lpDvGsk/doWfLvUzXwB+2sMzmt0zJv3XAvMXdyVDSy3HLzJ7b1XXSydfx3yrp22f650zm1uf173f//hX/9k7866z//nj//8H//PYr8/CoAAAAgHRSTlMA///faP/KmP4xt/8aZP6S2iU/D/5qqdX9Lv+CDNroSv7/Kv8O24Wxwf9fN//f////4v+F/7//wf/8/5Pc/v/+zv7//tn/6/////76///////////////////////////////////////////////9//////b//////////////4ZUJ3cAAAZESURBVFiFpVb5U+JaFs4FQiBAEAyI4EKE7hYbpU2jLKOJhGYNE2gIGMIiIijdIuq4tMuj+dfnolVvXle9wdsz3w+pSlLnu+d8Z7kHw/4Ga8uOv/uMjg9XR57/x96YHYxEo3H+fybQZdV/Jl3dHfPrqyVxsPhb9p7ibkEOiuPvouWV7vEb+Tv2xuK4xpw7d1J0t3vw3hPp9lbI1d8h+NLlvxCpCKazOWJSvVbmrIiG86+ivb/Y1mGWato4/WRx6j/tI4q5tJ6wms32g17cDuP25dMHlqmItk/7NjSC9aurelEs9lgdhpH92+PG7UMCerHhdH5AI/gQJPeSXEwPjyUfbpdxwlGalIzY9sbHbT9aCDDU9X14PKYbXhp1bidm3pxE7Ht+LLaB5gJEZH9aMZFbjzn7s09gxupwZQfDdvZQ7T+uzH2EddA4NnouxpOEGVu/5OHpG8k1RIKdzxsfpgRV487d07hmxKy3CZiCJf4zmr0/9tEfW8OM+YZu5+LuuWvBnLebL8Rf0Ag+w1j34GGbfcJZrpd5B5a/femG1SBaHvh/QJIY7L7+MWGzw24mJ3li473H46EdGEI/rkL3MX8Sqrb8cOkxm42Rhyp19u3ix+Rn0rhEvyPeKunXbO3B5/z6ZSOd7w+rh0Hu5O75j5oTW1pRcgyxNMt+LbjxGi/0wxg7Tezve3tXHqNzYYGcVpe+cNYSKPsMAgf9/gUhODyW9q7ukpraM2P+8zfBttQT2WT57wTzK71vF8+TySExfdHelfcTwb+0EeGWFbmjzmJwsK2LH38cLby8rL4j8rCVMJuFIPV6PUlo6Yoqyx0Zn5EOO7lAkro/hTqozi9SrJArSJKUizNUoKLI8klOP0OGX7FeXZ03SScdFaLV6chcBhLIncAsIX+BtRrBHKac/AJFVlrK1IWWpLej1eV0LsLZwhQUaCxLsqJMPVE7LcaHeEvYSiUbtggyqqxUWD7Dc1ycyxSErWEVcUhi6SoMV1tQ5Q4bfex2R6e1dpb2Vh+iOkSCSMODLVEwcJU5fRTH1//6+SNWeuj3Re/Mkv4PrI0IZmMqsiLt3qfAWPw6aQ4n6WH16xGiC5YGVHEFeiDxN7v4wEU3v/Y/NSYGuoZ4VdpLeRs2J6lyix3d1MaJYi8K7RPJVIpAI5ifqkhDD1pCqDt4rn8f841JNDm+985oiF8QaTgwQw6mscUBr4sujNulPN9u8zjq+uI8/myj5Wn5VSiXy4sLP2LeqEZDqduIabAcp+EYmLYQZwj1ntqAE/nzts/VERBjsDfyIKMolY5E+UJ3T3chjeb86SmlESRUFfNVUyYDu4hxhX3Z86wv7Cs/nYc1uLyC2E8HfcBAhgCIhkI+ly8EnyFfmAIcagzrw2UtE+cCwBCOhkOviIYBoOKIY8XaT9u0NBNncYPBFQqFw2HoCAC0G0fcm+z96jzpjgeF+BbnBpTBQNEUwGk3hboJL37at/j1gAmKR1xOYDmB4xicYWYN1l9B8Cnv6mKqd340KoMtrqJILKhdd5tORHtr6uq6uakdPF7LsRhTE90Blt/tfq8PIogE5Kg5+Ao1TxVjePD+8eaUpm6OcJZ2o3rgkU+7TUMopDEAUH+8GY0H3XFaCzQuF6IIi1u9etKXCLk03l13plwbPPfqos7bHBW1iJVodbNRKhwGePeaTw3atWyhntIke1IWdXv3W5YvvUAD2jf3R/hus5ktendHsBLQrzdMf5nYCrD3V4/iVrRWPhyJ+Kh5LeoR5wEcKaZ+NZfJjEejbCZQvGpe8/S9ePgzgdjOGCkESn23O3t/dMipAl4oMqbko2jaRUyjX29itxJDnBbb2aAkM+1s4DDDtb/zqONEi7MVNdz3umOcWzpRAsXz82JOjpVppM3XRoCA1DmTqH4C0KzUUVmBzZYFuGFo37b3rzm0VLzS6ZxINOiXQCZTUQO0orBCRVBlKMBbSVgDONxM4FYSBwZQ7bs5SsjE1ValclJg5bMtvetNER2UIHc6BYYgVm3pIcMCmsnIJwXpTKAFLipKb88Tv26OZcnpbru0ees1lVMhNxWMSxUa0InaWRKpjuxwyVtbgH0YpUBFbYpgCkaoi7mcwYDaz2seKzldE+e23y3rp5h7t6Kd01utf7kc/w0XP1ku6+uzuQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 13000,
            dps: 2119.57,
            speed: 10,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 500,
            freq: 184,
            foreswing: 57,
            backswing: 46,
            tba: 51
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 26000,
            actualDps: 4239.14,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "950000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [6500, 6500],
                timings: [57, 83]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "061",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 50000,
            ap: 2400,
            dps: 2482.76,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 29,
            foreswing: 17,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 7200,
            actualDps: 7448.28,
            magnification: "300%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "950000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcICAgICAgICAgJCQkJCQkNDQ0ODg4TExMWFhYZGRkfHx8hISElJSUlJSUmJiYnJyc1NTU3Nzc3NzdDQ0NLS0tLS0tNTU1VVVVeXl5lZWVnZ2dvb293d3eAgICJiYmTk5OdnZ2kpKSsrKy1tbW9vb3GxsbQ0NDZ2dnh4eHo6Oju7u709PT6+vr////////wM4yQAAAAQHRSTlMABw4dFSXhc5hK+S4+fVTY6V2GvW3KqWZ3ipWf/bDM6rzI2P//4f/u///s///+/////v///////////////wD/L3PmKQAABiBJREFUWIXtV9l24jgQjVk6YQwEAoFAIAG8YFm7Zcmrxv//V1OmO93Z4Zx5mYepF7zdK9V2VVz9/S/t6n+C/wLByZzp4Oq9OZ2u67rOh+efWmcx67+57w+Xq+0+CA7jSwnC1e+1nO50cYhpovMyF4+XbcFZi+CXE477sI+lSpVKlM3Y+kIfHkS667YX/bsDMzpJ0qwwaZ2g5Vlo/xSncVzRkXPVmT7R1GhTVk3TmDznB/cswfXtCijcoMyDYX99ZDIt6sZWZVmoUtILPBgc2WHe62zTRu12hMnc1nkKLqQmVyIYnve+8yhM/OguSV2TiKdVpZPUGIihVgLddS+IobtTldyPnrImD0VpYG2OEaYUed5kt5t3zjMMD5k18YRam6BESYy4LoqURiFNjIlH3zI47VtneiyakvuqrjBGJC1tmaBIZmWVV00Rz7/2ojMcXZ9+R6RqrEa8zDxeN5UClgISqQitmjwYf87gdMePwfPodN17FLZpCoa1IKXBWNfWZoVVKcqgHA6fpaLjznexMi9p6u8UMNQK8RBFSQXXTZGUpRJl09h01/8AH672TFc2fXyJ0PBgAGSFF3qobK8MI/xEBFT+zbtAdleBzGtYMZ7+duguzMpCR4xzzG1ja8F9lDYnBo2fp2/w/XWstYQ9Z/s/exv5oe97lJuEo6KxVjEiZGPLAj4T4az3Cu8+xhQzTGor/2jA1ZISz/eErFMRgXNNlZWpsBmNFORHvO4p95EQnleS2TJ+Fd5hzLwQCSGFIV7EVF5ZI2xbzuBQdfzzpbulGGJrObzdvtpYdy82vkRaZ1USydBHiEluc05OEYlfJNMZAl5CjRikK/q6xpyVIKHmiHGCTIal0jLyRJZp+BgIxi/4HcEJxB++KMX2TXrnsmayNoJDKWfIsNLm/sbDCqLYWPozDc5gT5A64UUpd2/EprtNayoz2yYOlCzjKRCECJGIQkzZ8g0+J6JUu+GbEh8cCwllnJ8yXzCkqNRMFWWJgEbRlsAZHwhK7QlfqP1bPLQD8qVkhOqWopJRkjABdHU0OTxvnsdt0x4wat8WlBfpezzI6mSDQRCZJ8vMFCUnhmJVNaW/cAej6x7oLeANuFgyXuj94EOLugsQVGUwgoL0IpCVECtCtPYWp2R3lgHG0JsgHKwwn+DBicH8bv208UPOw43PfCJ5rhDy49b/zjzAJG+dEzQ3X0kEkCx8pAVThnHIqTJW+thsnavewxHTFl8LkmfB9EuRGh+xkapMKYpCVpRF6vkmebjq/MbLFr/8Et9ZEGpElfAsF6Hnhf7zLJCHoTt8ilhxKpAT/muZ7T5hJrSmICm1DkPJD8vRYvqwf5r42QmPsyx++EameztGmSa6LaaM5LU2xx+zu8Akm7DVNoVN/i0edIlBr4UEGsCCnGS6MNSbPKe1ilRZJGfxoApH7aOI+YgqpJs0U5XV3sRTtUbQFjqPV2cOKvdZ+B7ikm02G21VllorEdRWUpko4vIs/qo3n002HmFCUIh7CmpQQP2UzEuqDP24mffO4NuGOYY+E2mepSikDGFQlbqAg1ZW6dP5s96ZBqmBtcIwoiTyNhvOQoIEI8F6y87Fr7VhYGA8gV6ORFnqdAPHDBU4RMGq564uOOg7j9KAhGoe0bSyVRaGG2hMhA9TwDoXjBrdJ5HBoSZRAgQN1ADd+Jjgw/iCIeMXAYPZUiGVY5VVBg43gSNy+Lp33ltvxrVOCautICYV2IfzHW8Wl67fzqvgM4wZIBscJYIxipRB33T/BxttIo+e+s6QEOcFzIxMyu3FW+jvmIDEV0Ua7w6xyGpbS5/xC+dtyOJKJEZTnwbrYcedrnaxFGFIjufH5V8G426mlDdZDE57drqDu3ucZ/EF0+pPWwpbMO9++adjnGFcWfr9pPjKgzVV8ezuzZ+czpoX6pKB+aodnGIh9v13AetvqWbr3gVhdK6PRvN99/1zGOaj4/bB7X948wrr9Pru4F4ogZ9H8+vr69GLtdfPnPpIxvsbt9f5fCOd8c3s/vbHXz4W/l+fWNjOGWgzuZ/dTD8Np+OO56Obxez+/vb29sfJJr/sdANP7+9ni5vRfPzZv8h/AFe9mOihrLs0AAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 700,
            actualAp: 7000,
            actualDps: 3749.97,
            magnification: "700%",
            count: "8",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "950000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "462",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEULVQsCAgENAQ4HBhcCAz0EEAMMCwwOByoEGgUZDRkSExYTDjcCJAACJgIYGBgNHxcaClUfFicRHiYBLwEcHBwCLwECMAEZGDwEMQMtHBAjGjkqGishISEdGkwPLhMXKR0COgEFOgUjIjEhFmUlHkMEPQMJOggnJScgKioCRAEoIU4WNxYrKSwDRgMHRQUCSgEfNR4KRQgqJVgXPRgoMycwLy8vLT8EUgILTgoePS0XRRkzKFsSSwslODozMzM6I3AJVQYyLWY4NTlSMgU0Kn0sQitFOR04MGg5Nk87OzsUWBE1QEw6NXFCPkQSYg8jViVBNYFERERCPHA1VTVLSUtIP4JKWBRXNpdkTBhkQmdRUVFIRZdSRolWVVZHQ7ZZWVhXSp1dXV1ZU6BcY1piX2FqSLh0ZiZlZWVjWqZpaWi2WQFtbW2PbxtxcXFvZ7d1dXV7e3t6cMWCgoKGhoaKioq+hR+KfduRkZGWlpabm5uhoaGrqqrlqC26urrm1GL//odZtnhfAAAAgHRSTlMA/////vL//8b//v9qn/7L///iD/9hRf+F//////+nxzpf////S3j/5ir/t/8aQAjLWP+Z7P//CTKdd/9awP7/HP/////M///+/0bf//8Vc////qP+/7H////////////////j///5/////////////////////////////////3NxlO4AAAdlSURBVFiF3Vf7V9paGiVYg4aSik0LlYCVohE8Wg0NPrBR0vqIkpbQQ9uJpDG9uY2ZNCRNuA1g7fzrc9TeuXdminQ6a80PsxdrhXDY+3ueky+RyP8Ua9v/pcBs7meZ6YWrSzn14icFErGVy8va1OxPKaxHivGp9OW36anF7cc/YX8lkph6NJ2ej6Rjj7KpO8tIc2P9x/lzsWJkfWLqUTabWkzFss+fF25H1u78vro0P1JgJT6NFMZj8Wy2ccLG6+9Pd3J3ppEXV07kdp4uj1JIx+LTuek4Qrb1rs6enJ21p+KRXeoqsZGnb1qbxREK98amHrGP2FqNZWunp2z70yc2vnDpxCWW841fT58+HCGRGEMB1E5OWrXqWefg9HOz1Y7lInM55MT64ky+9evp8dxN/PklAhtLVWvN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",
          traits: ["浮"],
          baseStats: {
            hp: 220000,
            ap: 17000,
            dps: 7083.33,
            speed: 18,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 750,
            freq: 72,
            foreswing: 33,
            backswing: 35,
            tba: 20
          },
          stageStats: {
            actualHp: 440000,
            actualAp: 34000,
            actualDps: 14166.66,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "800000%",
            isBoss: true
          },
          abilities: {}
        },
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
            actualHp: 3500,
            actualAp: 350,
            actualDps: 256.13,
            magnification: "700%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "800000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "030",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgICAgIEBAQJCQkMDAwPDw8SEhISEhITExMgICAgICAiIiIjIyMoKCgsLCwwMDAwMDAxMTEyMjI1NTU3Nzc4ODg+Pj5BQUFHR0dHR0dJSUlNTU1NTU1PT09RUVFYWFhZWVldXV1iYmJiYmJkZGRpaWlqamptbW1ycnJ3d3d3d3d+fn6GhoaHh4ePj4+QkJCYmJienp6np6eysrK8vLzFxcXQ0NDY2Njg4ODo6Ojy8vL7+/s8la7SAAAAQHRSTlMAB4nGDTvkGlwnMKxIeu8+Zt+VVoew89Khbf7LgZj/vvXl/7T/8uL/1uv/9v/f////2/7v/v/+/////v//////W5yotAAABFBJREFUWIWdV2tz2joQxbduDQ4EwsvEYAULgUAISSi2JBsD//9f3SVJO3emza3IzsAHhnN0drUvtVp/syj661/+Dxy2h+Og82WO3nY43R8HL92vEsRbjpRab7+sIBhizDiaf5EgaLXGVHMlJmEQBPeC48E4izvjZcG5HPcmD7P+XRRRL8eEJseqKpW2TiJC8sEdDOEsRTjFxDYfZqggT7E/QZwjRCjHvwiaklCc+UtoT1PCJaf1L4KaST7zJ+ilhEjJ2TvB6QQfweAyvAm+55JIQWRdV82psaWraobF2BvfCnoYU0ylElQwkEIZBOSl40/Qaq/TlFeVcAXcYnO2IOJwxyW0ogc41TRNYUgqm+uFc14d7xEwWiMEJzfgwqO8XC+YEPd6h4JwZVVKlKtkqVF5vV6E4nh6R033X53iCGGM66Y6A8GpKQvz7C9gqKy02laVMW/o5nrWdb3wJhgtMRPuFgPHdHXLJMvK2mbeAlZGYWwU0QXjFHNOefqICZr4ZnLn4BxDGDGwFFGG4Es66w6+UeyurRUFVe50qnEhCWFGCHBEvfjVQjhhjAtdFuXpVGEDapjlqTYl8ySID2r5kHOjIXsYiBeECI5RipFnMXVzVeyWWEkuhWbgR+VOjTKmxBOv5hwM6XKec5pKLLTAzRUy4XLWoAD7uRBMlNzksqAYXMCprqwrywK84Unfy4NOMp1vl2T5lMNMSR+fMMPQX6ePCCV+4yXeiO0kkfttjiRD6x3kASTCOuF86JdI4ShbzR7Q5rBRekp226UkLCXr+R21EIThhCaTeVMlKJkvBRHQYp/M9dj1HpHB83aZquuxt9lBADBPEVmuz8XU04kbQzQjxmVh3FtLwTAUg0iZLvwLutV6ZgpPwuhFSik4QUyQ8mL87vHdFq7eDcKFADz01xRqGp3qZ38X4uPldQQjmlAGWJoSybGCnzwZouz1fFq0+jsOAmC2UAyTUurr1be19+31YvvB4qb/VlOMMxiV1NYrz+nY2VbFNu7mnAEBICUHHZKmedsPD/k8G8bRCyw3N4MYlFoxKvcD//EMO9Xo7XQpGbXCOaWgt2b+BBDIl5/HM1U4axRndOnXUt4lzAi0AwrtzEjrwIyigm/8B2yQcaoQLYlQb3jnbKmpfzG0opVWnEB3/oC/c6z8CRbGuv9i381/R+gcfwO/BWLkiQ8W5o8E1regPxHgrO+u+fxnAc55RjH6RABE0S+TPhXgeQ39w2d49+rR1aAl8/L3FPAn6My5ZEJIVZTmZvZnKhslOPUY8WF3sjsYqW+rCeyHUMVSKgVljUtt1eTvBHAJ3+NsmB3yveWunK9PVleVdo7YQ5b51nMQhHFnVrwunju9VTbWhZKrwWJ039styM63a4cXX2eji2YV3fvyixL28eIMxlQanYz9h2sYRVFnsJd59/ubtdcJLFv7maeIsP3Pw8O3bz/W++mPD3v88ZhvNsk/7d/a6r91G+vCPx1ewQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6000,
            ap: 4200,
            dps: 893.62,
            speed: 35,
            range: 1300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 141,
            foreswing: 4,
            backswing: 137,
            tba: 0
          },
          stageStats: {
            actualHp: 21000,
            actualAp: 14700,
            actualDps: 3127.67,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "650000%",
            isBoss: true
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
            actualHp: 19500,
            actualAp: 2325,
            actualDps: 1701.22,
            magnification: "150%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "650000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "463",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEVtl20CAgMEAx8FCQMBDAASBQMEEQECFQEKDg4BFgEGHAMkDAYBIAECIAEYFAoCKAEVHgQBLAEBLAEBLgElGg4FLQQPKQYPLQceIioBOQA5HBAINw0CPwEeKiUsKA0LPwEvKyM7KBMDSQEpKzsCTQExNgsSQxwlQggqOilKLxQaSwUPUwNDOggwOzhVMwM6OTg3NmNDQwtUORcrUQs+PkA+Tg9LQyc1TjBIRj5QThVmQxw7XRBLVBVNRnNoSxheUCZDXTpVVVF6UB9jYRNbYyJnXTlZYGV+WiZ2Zx+PXB5paHl1cEGTZia9TlWgbCuIfD14doh8fGCUfyCqdi2xfC+FgJOYikuWlii5gjKrjzHDhjSSiK6clVPJizOvnDKjnG7OkTifmKuzpEjVljnJpTiko7qxsW7lpDvGsk/doWfLvUzXwB+2sMzmt0zJv3XAvMXdyVDSy3HLzJ7b1XXSydfx3yrp22f650zm1uf173f//hX/9k7866z//nj//8H//PYr8/CoAAAAgHRSTlMA///faP/KmP4xt/8aZP6S2iU/D/5qqdX9Lv+CDNroSv7/Kv8O24Wxwf9fN//f////4v+F/7//wf/8/5Pc/v/+zv7//tn/6/////76///////////////////////////////////////////////9//////b//////////////4ZUJ3cAAAZESURBVFiFpVb5U+JaFs4FQiBAEAyI4EKE7hYbpU2jLKOJhGYNE2gIGMIiIijdIuq4tMuj+dfnolVvXle9wdsz3w+pSlLnu+d8Z7kHw/4Ga8uOv/uMjg9XR57/x96YHYxEo3H+fybQZdV/Jl3dHfPrqyVxsPhb9p7ibkEOiuPvouWV7vEb+Tv2xuK4xpw7d1J0t3vw3hPp9lbI1d8h+NLlvxCpCKazOWJSvVbmrIiG86+ivb/Y1mGWato4/WRx6j/tI4q5tJ6wms32g17cDuP25dMHlqmItk/7NjSC9aurelEs9lgdhpH92+PG7UMCerHhdH5AI/gQJPeSXEwPjyUfbpdxwlGalIzY9sbHbT9aCDDU9X14PKYbXhp1bidm3pxE7Ht+LLaB5gJEZH9aMZFbjzn7s09gxupwZQfDdvZQ7T+uzH2EddA4NnouxpOEGVu/5OHpG8k1RIKdzxsfpgRV487d07hmxKy3CZiCJf4zmr0/9tEfW8OM+YZu5+LuuWvBnLebL8Rf0Ag+w1j34GGbfcJZrpd5B5a/femG1SBaHvh/QJIY7L7+MWGzw24mJ3li473H46EdGEI/rkL3MX8Sqrb8cOkxm42Rhyp19u3ix+Rn0rhEvyPeKunXbO3B5/z6ZSOd7w+rh0Hu5O75j5oTW1pRcgyxNMt+LbjxGi/0wxg7Tezve3tXHqNzYYGcVpe+cNYSKPsMAgf9/gUhODyW9q7ukpraM2P+8zfBttQT2WT57wTzK71vF8+TySExfdHelfcTwb+0EeGWFbmjzmJwsK2LH38cLby8rL4j8rCVMJuFIPV6PUlo6Yoqyx0Zn5EOO7lAkro/hTqozi9SrJArSJKUizNUoKLI8klOP0OGX7FeXZ03SScdFaLV6chcBhLIncAsIX+BtRrBHKac/AJFVlrK1IWWpLej1eV0LsLZwhQUaCxLsqJMPVE7LcaHeEvYSiUbtggyqqxUWD7Dc1ycyxSErWEVcUhi6SoMV1tQ5Q4bfex2R6e1dpb2Vh+iOkSCSMODLVEwcJU5fRTH1//6+SNWeuj3Re/Mkv4PrI0IZmMqsiLt3qfAWPw6aQ4n6WH16xGiC5YGVHEFeiDxN7v4wEU3v/Y/NSYGuoZ4VdpLeRs2J6lyix3d1MaJYi8K7RPJVIpAI5ifqkhDD1pCqDt4rn8f841JNDm+985oiF8QaTgwQw6mscUBr4sujNulPN9u8zjq+uI8/myj5Wn5VSiXy4sLP2LeqEZDqduIabAcp+EYmLYQZwj1ntqAE/nzts/VERBjsDfyIKMolY5E+UJ3T3chjeb86SmlESRUFfNVUyYDu4hxhX3Z86wv7Cs/nYc1uLyC2E8HfcBAhgCIhkI+ly8EnyFfmAIcagzrw2UtE+cCwBCOhkOviIYBoOKIY8XaT9u0NBNncYPBFQqFw2HoCAC0G0fcm+z96jzpjgeF+BbnBpTBQNEUwGk3hboJL37at/j1gAmKR1xOYDmB4xicYWYN1l9B8Cnv6mKqd340KoMtrqJILKhdd5tORHtr6uq6uakdPF7LsRhTE90Blt/tfq8PIogE5Kg5+Ao1TxVjePD+8eaUpm6OcJZ2o3rgkU+7TUMopDEAUH+8GY0H3XFaCzQuF6IIi1u9etKXCLk03l13plwbPPfqos7bHBW1iJVodbNRKhwGePeaTw3atWyhntIke1IWdXv3W5YvvUAD2jf3R/hus5ktendHsBLQrzdMf5nYCrD3V4/iVrRWPhyJ+Kh5LeoR5wEcKaZ+NZfJjEejbCZQvGpe8/S9ePgzgdjOGCkESn23O3t/dMipAl4oMqbko2jaRUyjX29itxJDnBbb2aAkM+1s4DDDtb/zqONEi7MVNdz3umOcWzpRAsXz82JOjpVppM3XRoCA1DmTqH4C0KzUUVmBzZYFuGFo37b3rzm0VLzS6ZxINOiXQCZTUQO0orBCRVBlKMBbSVgDONxM4FYSBwZQ7bs5SsjE1ValclJg5bMtvetNER2UIHc6BYYgVm3pIcMCmsnIJwXpTKAFLipKb88Tv26OZcnpbru0ees1lVMhNxWMSxUa0InaWRKpjuxwyVtbgH0YpUBFbYpgCkaoi7mcwYDaz2seKzldE+e23y3rp5h7t6Kd01utf7kc/w0XP1ku6+uzuQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 13000,
            dps: 2119.57,
            speed: 10,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 500,
            freq: 184,
            foreswing: 57,
            backswing: 46,
            tba: 51
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 19500,
            actualDps: 3179.36,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "530000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [6500, 6500],
                timings: [57, 83]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "061",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAwMIBgcIBgQJBwUPCwgTEQ0VEA0YFAwhHBQpJBhLFBtAHRgsKBs3MyM6NRw+NyBKMhl9GixOOiyyGTRUSzCLLD1YTjVuSTRjXjV+VCtcX1bDNFKFYTN/byd5ckN5cVSUcSncRGWBgG2hgDDEYnmhiS2YkF+TkHeTkI+0kTW2nzqloYvIrDqpqKSvsKvisDbGvnvTwkf0tzO+vbzwy0HWzofR0ND041rh4OD/8Vj+8oDu7ez/+L34+Pf///96NA5rAAAAQHRSTlMACncZXjgnRa+NbP7JWoKhueX+/v/L/+3/tP7///7jz/////////L/4f///f797P///v///v/+////////////c7B3nwAABXpJREFUWIWll2lzqkoQhkNQiRsuuLCELTORbVhFAUX8///q9oAmJ7lo4jn9wapU0c+8vUxP5+npvrG9Hz74yQZT9p/8WZ0M/gkwNvd6LaHLPejZe6bBMxO8T0ECM14+KoRd6gMGInD3pcQ+je3gUQVPfBzwTE9z9+dgzOql/XAue/YpGHOeG1f7CR+XEvMogJGKXO/7rpEdNe2Y8Y/6QwHiozvzXdk5WtYp/ItickbuCqb5TjwDFcZfKOAUyzVV+T0zLOKQx3PwxDlIxJbsF068V7LHq/A0dojixupbjPYlCvXHAb2lYvgRfiUoPzmIfzgEluuvrV3kyQ45nFJhwj0koffcn6qqiHwXq4LlWsiKA53v/lYF0xnN58Lq9U0Vset5vp/s8sPhuLcnv0Rws+FwOF+t5nMRH/6wY6zxvxlQ3AjcF6v5SlTfjeQL4ZRK3I8i2NHrcD4crkRBfHt7t/Lak9oJ7Jjbg58I3HxFI3gVRMjC23sMrg3gIiP4icDNwYYQ/9ucAr5koTZ7fJ/QnS3AfbhaLCjgVc2/+ee53f0hBwuaRPBfLF5fF+bhGyHx9pO7EgAAEqCGFLJYeYfkKyERY/vugBybq+bwmqDmuZs3yi+AnWHF9ySwUoSFFT18AQR5d8jd5mCc57vE9zzLQet7gIG33Zq1+sVKFj042qLnJ5aBEAnTLM3KKhjf9u/p2+0WmzCKZBFHbgy+pu9ZFgmLojpXZUaMrCzuDDje324jDJCI/rp7qsAIwZdaVWRZRlBYSLczQAX4EAX8XgDHA8nOjX+VASlL0ztDfgwCtl4ErthQ/S0twOkYXwCNpaQKbyaRmYDvzoXjjaxIEcZfAFVZFlnqGBXq3wJ0X2Rvm0AEOEzDrCRGDdg3gCpLizKDQlThrRDYqSjLpgthmKmiGCh1GkB6zcFVya1Xgtt4piwK7jayUkQKJAiq6xECVTh/tVuPPa1h4ouCio00dIpSGYoqmEjSb4SiXQIrQQl2iQA9JKAM8qUoMSEkJE5x7YQ6AiqhtRd7GwDknuthjGWnDB3FgC4+nXKnKsmHhoymtLJbU6BBEXOaw10eCSglCF0B0D7X81FGsxm0ATozGfs5pq2Q77CihKHVAFB5Lj8AkBCHBG3NzEoqXCFVbgBWRgSE8iugKj9SUFZlKrU9dNwm8jCU0W8UQL8IQxW7hJjoM4NgZRGSddvGwteeiSqqJuRRhaylimGCqX8CoBcJMpT+//2ZuoiHLY0CCqmA5izO93EKDp+AInSQE6ZOSzP3tBoQYR8K6XkGVUBvc1VXoTn8XDhO3RJtZWSXcI3z3HdpM+Rb1S6qkALOFFATivQMchyEkOHoLSEMZipOEvcC0DpSQOirfj7mlxCqjA61MkOG8NJyGbgZxuvpZOpdAD3YsP0cQjjurzkosqqZbMu2V56HEo74cX8TXQCUaWLkWCj86IGGVLRNJEaKtpEPg19dqybeaBNolYHpYcVJs8+bVNZXotJbFDATGbv+LvFkGcsvHW7cYRiJWAg5DkEfQ7FqWG1TlR2J4nA04fszVV1PJX2zZBmJJrEsc/I5VcvbgKXnYk1fLs0oiqCVfQBMTYy9wNbWTgqWFdf7ULW9ruxIVk0vgfXc9VzX0ycdhh0ZqvDSf+6/dMYDvj+Zrp06grJ1SenOZPi4zw9eRFEY9eHzLruM4zgMgsumzTDdZ8kOArt90epqvrvRRhzTh+uzgeVQ67KwbKq2beufey7D9nq99pHMTnRNk0DbQMV4s9GnA7Y3M0TQ0mF/t15SOP2Sm8lDiIWjD+U+jsmy8yv3T+PW2Nxsll16OyRJ4n/eLL/HsoRcTJpFjGEe/0cF0jnmbuTpQSUc16H2/GH1n9y3jf0/VZU9UzeNmxoAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 50000,
            ap: 2400,
            dps: 2482.76,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 29,
            foreswing: 17,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 125000,
            actualAp: 6000,
            actualDps: 6206.9,
            magnification: "250%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "530000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 650,
            actualAp: 6500,
            actualDps: 3482.11,
            magnification: "650%",
            count: "8",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "53000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "462",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEULVQsCAgENAQ4HBhcCAz0EEAMMCwwOByoEGgUZDRkSExYTDjcCJAACJgIYGBgNHxcaClUfFicRHiYBLwEcHBwCLwECMAEZGDwEMQMtHBAjGjkqGishISEdGkwPLhMXKR0COgEFOgUjIjEhFmUlHkMEPQMJOggnJScgKioCRAEoIU4WNxYrKSwDRgMHRQUCSgEfNR4KRQgqJVgXPRgoMycwLy8vLT8EUgILTgoePS0XRRkzKFsSSwslODozMzM6I3AJVQYyLWY4NTlSMgU0Kn0sQitFOR04MGg5Nk87OzsUWBE1QEw6NXFCPkQSYg8jViVBNYFERERCPHA1VTVLSUtIP4JKWBRXNpdkTBhkQmdRUVFIRZdSRolWVVZHQ7ZZWVhXSp1dXV1ZU6BcY1piX2FqSLh0ZiZlZWVjWqZpaWi2WQFtbW2PbxtxcXFvZ7d1dXV7e3t6cMWCgoKGhoaKioq+hR+KfduRkZGWlpabm5uhoaGrqqrlqC26urrm1GL//odZtnhfAAAAgHRSTlMA/////vL//8b//v9qn/7L///iD/9hRf+F//////+nxzpf////S3j/5ir/t/8aQAjLWP+Z7P//CTKdd/9awP7/HP/////M///+/0bf//8Vc////qP+/7H////////////////j///5/////////////////////////////////3NxlO4AAAdlSURBVFiF3Vf7V9paGiVYg4aSik0LlYCVohE8Wg0NPrBR0vqIkpbQQ9uJpDG9uY2ZNCRNuA1g7fzrc9TeuXdminQ6a80PsxdrhXDY+3ueky+RyP8Ua9v/pcBs7meZ6YWrSzn14icFErGVy8va1OxPKaxHivGp9OW36anF7cc/YX8lkph6NJ2ej6Rjj7KpO8tIc2P9x/lzsWJkfWLqUTabWkzFss+fF25H1u78vro0P1JgJT6NFMZj8Wy2ccLG6+9Pd3J3ppEXV07kdp4uj1JIx+LTuek4Qrb1rs6enJ21p+KRXeoqsZGnb1qbxREK98amHrGP2FqNZWunp2z70yc2vnDpxCWW841fT58+HCGRGEMB1E5OWrXqWefg9HOz1Y7lInM55MT64ky+9evp8dxN/PklAhtLVWvN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",
          traits: ["浮"],
          baseStats: {
            hp: 220000,
            ap: 17000,
            dps: 7083.33,
            speed: 18,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 750,
            freq: 72,
            foreswing: 33,
            backswing: 35,
            tba: 20
          },
          stageStats: {
            actualHp: 330000,
            actualAp: 25500,
            actualDps: 10625.0,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "380000%",
            isBoss: true
          },
          abilities: {}
        },
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
            actualHp: 3250,
            actualAp: 325,
            actualDps: 237.84,
            magnification: "650%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "380000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "030",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgICAgIEBAQJCQkMDAwPDw8SEhISEhITExMgICAgICAiIiIjIyMoKCgsLCwwMDAwMDAxMTEyMjI1NTU3Nzc4ODg+Pj5BQUFHR0dHR0dJSUlNTU1NTU1PT09RUVFYWFhZWVldXV1iYmJiYmJkZGRpaWlqamptbW1ycnJ3d3d3d3d+fn6GhoaHh4ePj4+QkJCYmJienp6np6eysrK8vLzFxcXQ0NDY2Njg4ODo6Ojy8vL7+/s8la7SAAAAQHRSTlMAB4nGDTvkGlwnMKxIeu8+Zt+VVoew89Khbf7LgZj/vvXl/7T/8uL/1uv/9v/f////2/7v/v/+/////v//////W5yotAAABFBJREFUWIWdV2tz2joQxbduDQ4EwsvEYAULgUAISSi2JBsD//9f3SVJO3emza3IzsAHhnN0drUvtVp/syj661/+Dxy2h+Og82WO3nY43R8HL92vEsRbjpRab7+sIBhizDiaf5EgaLXGVHMlJmEQBPeC48E4izvjZcG5HPcmD7P+XRRRL8eEJseqKpW2TiJC8sEdDOEsRTjFxDYfZqggT7E/QZwjRCjHvwiaklCc+UtoT1PCJaf1L4KaST7zJ+ilhEjJ2TvB6QQfweAyvAm+55JIQWRdV82psaWraobF2BvfCnoYU0ylElQwkEIZBOSl40/Qaq/TlFeVcAXcYnO2IOJwxyW0ogc41TRNYUgqm+uFc14d7xEwWiMEJzfgwqO8XC+YEPd6h4JwZVVKlKtkqVF5vV6E4nh6R033X53iCGGM66Y6A8GpKQvz7C9gqKy02laVMW/o5nrWdb3wJhgtMRPuFgPHdHXLJMvK2mbeAlZGYWwU0QXjFHNOefqICZr4ZnLn4BxDGDGwFFGG4Es66w6+UeyurRUFVe50qnEhCWFGCHBEvfjVQjhhjAtdFuXpVGEDapjlqTYl8ySID2r5kHOjIXsYiBeECI5RipFnMXVzVeyWWEkuhWbgR+VOjTKmxBOv5hwM6XKec5pKLLTAzRUy4XLWoAD7uRBMlNzksqAYXMCprqwrywK84Unfy4NOMp1vl2T5lMNMSR+fMMPQX6ePCCV+4yXeiO0kkfttjiRD6x3kASTCOuF86JdI4ShbzR7Q5rBRekp226UkLCXr+R21EIThhCaTeVMlKJkvBRHQYp/M9dj1HpHB83aZquuxt9lBADBPEVmuz8XU04kbQzQjxmVh3FtLwTAUg0iZLvwLutV6ZgpPwuhFSik4QUyQ8mL87vHdFq7eDcKFADz01xRqGp3qZ38X4uPldQQjmlAGWJoSybGCnzwZouz1fFq0+jsOAmC2UAyTUurr1be19+31YvvB4qb/VlOMMxiV1NYrz+nY2VbFNu7mnAEBICUHHZKmedsPD/k8G8bRCyw3N4MYlFoxKvcD//EMO9Xo7XQpGbXCOaWgt2b+BBDIl5/HM1U4axRndOnXUt4lzAi0AwrtzEjrwIyigm/8B2yQcaoQLYlQb3jnbKmpfzG0opVWnEB3/oC/c6z8CRbGuv9i381/R+gcfwO/BWLkiQ8W5o8E1regPxHgrO+u+fxnAc55RjH6RABE0S+TPhXgeQ39w2d49+rR1aAl8/L3FPAn6My5ZEJIVZTmZvZnKhslOPUY8WF3sjsYqW+rCeyHUMVSKgVljUtt1eTvBHAJ3+NsmB3yveWunK9PVleVdo7YQ5b51nMQhHFnVrwunju9VTbWhZKrwWJ039styM63a4cXX2eji2YV3fvyixL28eIMxlQanYz9h2sYRVFnsJd59/ubtdcJLFv7maeIsP3Pw8O3bz/W++mPD3v88ZhvNsk/7d/a6r91G+vCPx1ewQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6000,
            ap: 4200,
            dps: 893.62,
            speed: 35,
            range: 1300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 141,
            foreswing: 4,
            backswing: 137,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 12600,
            actualDps: 2680.86,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "230000%",
            isBoss: true
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
            actualHp: 19500,
            actualAp: 2325,
            actualDps: 1701.22,
            magnification: "150%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "230000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "463",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEVtl20CAgMEAx8FCQMBDAASBQMEEQECFQEKDg4BFgEGHAMkDAYBIAECIAEYFAoCKAEVHgQBLAEBLAEBLgElGg4FLQQPKQYPLQceIioBOQA5HBAINw0CPwEeKiUsKA0LPwEvKyM7KBMDSQEpKzsCTQExNgsSQxwlQggqOilKLxQaSwUPUwNDOggwOzhVMwM6OTg3NmNDQwtUORcrUQs+PkA+Tg9LQyc1TjBIRj5QThVmQxw7XRBLVBVNRnNoSxheUCZDXTpVVVF6UB9jYRNbYyJnXTlZYGV+WiZ2Zx+PXB5paHl1cEGTZia9TlWgbCuIfD14doh8fGCUfyCqdi2xfC+FgJOYikuWlii5gjKrjzHDhjSSiK6clVPJizOvnDKjnG7OkTifmKuzpEjVljnJpTiko7qxsW7lpDvGsk/doWfLvUzXwB+2sMzmt0zJv3XAvMXdyVDSy3HLzJ7b1XXSydfx3yrp22f650zm1uf173f//hX/9k7866z//nj//8H//PYr8/CoAAAAgHRSTlMA///faP/KmP4xt/8aZP6S2iU/D/5qqdX9Lv+CDNroSv7/Kv8O24Wxwf9fN//f////4v+F/7//wf/8/5Pc/v/+zv7//tn/6/////76///////////////////////////////////////////////9//////b//////////////4ZUJ3cAAAZESURBVFiFpVb5U+JaFs4FQiBAEAyI4EKE7hYbpU2jLKOJhGYNE2gIGMIiIijdIuq4tMuj+dfnolVvXle9wdsz3w+pSlLnu+d8Z7kHw/4Ga8uOv/uMjg9XR57/x96YHYxEo3H+fybQZdV/Jl3dHfPrqyVxsPhb9p7ibkEOiuPvouWV7vEb+Tv2xuK4xpw7d1J0t3vw3hPp9lbI1d8h+NLlvxCpCKazOWJSvVbmrIiG86+ivb/Y1mGWato4/WRx6j/tI4q5tJ6wms32g17cDuP25dMHlqmItk/7NjSC9aurelEs9lgdhpH92+PG7UMCerHhdH5AI/gQJPeSXEwPjyUfbpdxwlGalIzY9sbHbT9aCDDU9X14PKYbXhp1bidm3pxE7Ht+LLaB5gJEZH9aMZFbjzn7s09gxupwZQfDdvZQ7T+uzH2EddA4NnouxpOEGVu/5OHpG8k1RIKdzxsfpgRV487d07hmxKy3CZiCJf4zmr0/9tEfW8OM+YZu5+LuuWvBnLebL8Rf0Ag+w1j34GGbfcJZrpd5B5a/femG1SBaHvh/QJIY7L7+MWGzw24mJ3li473H46EdGEI/rkL3MX8Sqrb8cOkxm42Rhyp19u3ix+Rn0rhEvyPeKunXbO3B5/z6ZSOd7w+rh0Hu5O75j5oTW1pRcgyxNMt+LbjxGi/0wxg7Tezve3tXHqNzYYGcVpe+cNYSKPsMAgf9/gUhODyW9q7ukpraM2P+8zfBttQT2WT57wTzK71vF8+TySExfdHelfcTwb+0EeGWFbmjzmJwsK2LH38cLby8rL4j8rCVMJuFIPV6PUlo6Yoqyx0Zn5EOO7lAkro/hTqozi9SrJArSJKUizNUoKLI8klOP0OGX7FeXZ03SScdFaLV6chcBhLIncAsIX+BtRrBHKac/AJFVlrK1IWWpLej1eV0LsLZwhQUaCxLsqJMPVE7LcaHeEvYSiUbtggyqqxUWD7Dc1ycyxSErWEVcUhi6SoMV1tQ5Q4bfex2R6e1dpb2Vh+iOkSCSMODLVEwcJU5fRTH1//6+SNWeuj3Re/Mkv4PrI0IZmMqsiLt3qfAWPw6aQ4n6WH16xGiC5YGVHEFeiDxN7v4wEU3v/Y/NSYGuoZ4VdpLeRs2J6lyix3d1MaJYi8K7RPJVIpAI5ifqkhDD1pCqDt4rn8f841JNDm+985oiF8QaTgwQw6mscUBr4sujNulPN9u8zjq+uI8/myj5Wn5VSiXy4sLP2LeqEZDqduIabAcp+EYmLYQZwj1ntqAE/nzts/VERBjsDfyIKMolY5E+UJ3T3chjeb86SmlESRUFfNVUyYDu4hxhX3Z86wv7Cs/nYc1uLyC2E8HfcBAhgCIhkI+ly8EnyFfmAIcagzrw2UtE+cCwBCOhkOviIYBoOKIY8XaT9u0NBNncYPBFQqFw2HoCAC0G0fcm+z96jzpjgeF+BbnBpTBQNEUwGk3hboJL37at/j1gAmKR1xOYDmB4xicYWYN1l9B8Cnv6mKqd340KoMtrqJILKhdd5tORHtr6uq6uakdPF7LsRhTE90Blt/tfq8PIogE5Kg5+Ao1TxVjePD+8eaUpm6OcJZ2o3rgkU+7TUMopDEAUH+8GY0H3XFaCzQuF6IIi1u9etKXCLk03l13plwbPPfqos7bHBW1iJVodbNRKhwGePeaTw3atWyhntIke1IWdXv3W5YvvUAD2jf3R/hus5ktendHsBLQrzdMf5nYCrD3V4/iVrRWPhyJ+Kh5LeoR5wEcKaZ+NZfJjEejbCZQvGpe8/S9ePgzgdjOGCkESn23O3t/dMipAl4oMqbko2jaRUyjX29itxJDnBbb2aAkM+1s4DDDtb/zqONEi7MVNdz3umOcWzpRAsXz82JOjpVppM3XRoCA1DmTqH4C0KzUUVmBzZYFuGFo37b3rzm0VLzS6ZxINOiXQCZTUQO0orBCRVBlKMBbSVgDONxM4FYSBwZQ7bs5SsjE1ValclJg5bMtvetNER2UIHc6BYYgVm3pIcMCmsnIJwXpTKAFLipKb88Tv26OZcnpbru0ees1lVMhNxWMSxUa0InaWRKpjuxwyVtbgH0YpUBFbYpgCkaoi7mcwYDaz2seKzldE+e23y3rp5h7t6Kd01utf7kc/w0XP1ku6+uzuQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 13000,
            dps: 2119.57,
            speed: 10,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 500,
            freq: 184,
            foreswing: 57,
            backswing: 46,
            tba: 51
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 13000,
            actualDps: 2119.57,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "130000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [6500, 6500],
                timings: [57, 83]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "061",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 50000,
            ap: 2400,
            dps: 2482.76,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 29,
            foreswing: 17,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 4800,
            actualDps: 4965.52,
            magnification: "200%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "130000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 600,
            actualAp: 6000,
            actualDps: 3214.26,
            magnification: "600%",
            count: "8",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "130000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "462",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEULVQsCAgENAQ4HBhcCAz0EEAMMCwwOByoEGgUZDRkSExYTDjcCJAACJgIYGBgNHxcaClUfFicRHiYBLwEcHBwCLwECMAEZGDwEMQMtHBAjGjkqGishISEdGkwPLhMXKR0COgEFOgUjIjEhFmUlHkMEPQMJOggnJScgKioCRAEoIU4WNxYrKSwDRgMHRQUCSgEfNR4KRQgqJVgXPRgoMycwLy8vLT8EUgILTgoePS0XRRkzKFsSSwslODozMzM6I3AJVQYyLWY4NTlSMgU0Kn0sQitFOR04MGg5Nk87OzsUWBE1QEw6NXFCPkQSYg8jViVBNYFERERCPHA1VTVLSUtIP4JKWBRXNpdkTBhkQmdRUVFIRZdSRolWVVZHQ7ZZWVhXSp1dXV1ZU6BcY1piX2FqSLh0ZiZlZWVjWqZpaWi2WQFtbW2PbxtxcXFvZ7d1dXV7e3t6cMWCgoKGhoaKioq+hR+KfduRkZGWlpabm5uhoaGrqqrlqC26urrm1GL//odZtnhfAAAAgHRSTlMA/////vL//8b//v9qn/7L///iD/9hRf+F//////+nxzpf////S3j/5ir/t/8aQAjLWP+Z7P//CTKdd/9awP7/HP/////M///+/0bf//8Vc////qP+/7H////////////////j///5/////////////////////////////////3NxlO4AAAdlSURBVFiF3Vf7V9paGiVYg4aSik0LlYCVohE8Wg0NPrBR0vqIkpbQQ9uJpDG9uY2ZNCRNuA1g7fzrc9TeuXdminQ6a80PsxdrhXDY+3ueky+RyP8Ua9v/pcBs7meZ6YWrSzn14icFErGVy8va1OxPKaxHivGp9OW36anF7cc/YX8lkph6NJ2ej6Rjj7KpO8tIc2P9x/lzsWJkfWLqUTabWkzFss+fF25H1u78vro0P1JgJT6NFMZj8Wy2ccLG6+9Pd3J3ppEXV07kdp4uj1JIx+LTuek4Qrb1rs6enJ21p+KRXeoqsZGnb1qbxREK98amHrGP2FqNZWunp2z70yc2vnDpxCWW841fT58+HCGRGEMB1E5OWrXqWefg9HOz1Y7lInM55MT64ky+9evp8dxN/PklAhtLVWvN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",
          traits: ["浮"],
          baseStats: {
            hp: 220000,
            ap: 17000,
            dps: 7083.33,
            speed: 18,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 750,
            freq: 72,
            foreswing: 33,
            backswing: 35,
            tba: 20
          },
          stageStats: {
            actualHp: 154000,
            actualAp: 11900,
            actualDps: 4958.33,
            magnification: "70%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "60000%",
            isBoss: true
          },
          abilities: {}
        },
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
            actualHp: 3000,
            actualAp: 300,
            actualDps: 219.54,
            magnification: "600%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "60000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "030",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgICAgIEBAQJCQkMDAwPDw8SEhISEhITExMgICAgICAiIiIjIyMoKCgsLCwwMDAwMDAxMTEyMjI1NTU3Nzc4ODg+Pj5BQUFHR0dHR0dJSUlNTU1NTU1PT09RUVFYWFhZWVldXV1iYmJiYmJkZGRpaWlqamptbW1ycnJ3d3d3d3d+fn6GhoaHh4ePj4+QkJCYmJienp6np6eysrK8vLzFxcXQ0NDY2Njg4ODo6Ojy8vL7+/s8la7SAAAAQHRSTlMAB4nGDTvkGlwnMKxIeu8+Zt+VVoew89Khbf7LgZj/vvXl/7T/8uL/1uv/9v/f////2/7v/v/+/////v//////W5yotAAABFBJREFUWIWdV2tz2joQxbduDQ4EwsvEYAULgUAISSi2JBsD//9f3SVJO3emza3IzsAHhnN0drUvtVp/syj661/+Dxy2h+Og82WO3nY43R8HL92vEsRbjpRab7+sIBhizDiaf5EgaLXGVHMlJmEQBPeC48E4izvjZcG5HPcmD7P+XRRRL8eEJseqKpW2TiJC8sEdDOEsRTjFxDYfZqggT7E/QZwjRCjHvwiaklCc+UtoT1PCJaf1L4KaST7zJ+ilhEjJ2TvB6QQfweAyvAm+55JIQWRdV82psaWraobF2BvfCnoYU0ylElQwkEIZBOSl40/Qaq/TlFeVcAXcYnO2IOJwxyW0ogc41TRNYUgqm+uFc14d7xEwWiMEJzfgwqO8XC+YEPd6h4JwZVVKlKtkqVF5vV6E4nh6R033X53iCGGM66Y6A8GpKQvz7C9gqKy02laVMW/o5nrWdb3wJhgtMRPuFgPHdHXLJMvK2mbeAlZGYWwU0QXjFHNOefqICZr4ZnLn4BxDGDGwFFGG4Es66w6+UeyurRUFVe50qnEhCWFGCHBEvfjVQjhhjAtdFuXpVGEDapjlqTYl8ySID2r5kHOjIXsYiBeECI5RipFnMXVzVeyWWEkuhWbgR+VOjTKmxBOv5hwM6XKec5pKLLTAzRUy4XLWoAD7uRBMlNzksqAYXMCprqwrywK84Unfy4NOMp1vl2T5lMNMSR+fMMPQX6ePCCV+4yXeiO0kkfttjiRD6x3kASTCOuF86JdI4ShbzR7Q5rBRekp226UkLCXr+R21EIThhCaTeVMlKJkvBRHQYp/M9dj1HpHB83aZquuxt9lBADBPEVmuz8XU04kbQzQjxmVh3FtLwTAUg0iZLvwLutV6ZgpPwuhFSik4QUyQ8mL87vHdFq7eDcKFADz01xRqGp3qZ38X4uPldQQjmlAGWJoSybGCnzwZouz1fFq0+jsOAmC2UAyTUurr1be19+31YvvB4qb/VlOMMxiV1NYrz+nY2VbFNu7mnAEBICUHHZKmedsPD/k8G8bRCyw3N4MYlFoxKvcD//EMO9Xo7XQpGbXCOaWgt2b+BBDIl5/HM1U4axRndOnXUt4lzAi0AwrtzEjrwIyigm/8B2yQcaoQLYlQb3jnbKmpfzG0opVWnEB3/oC/c6z8CRbGuv9i381/R+gcfwO/BWLkiQ8W5o8E1regPxHgrO+u+fxnAc55RjH6RABE0S+TPhXgeQ39w2d49+rR1aAl8/L3FPAn6My5ZEJIVZTmZvZnKhslOPUY8WF3sjsYqW+rCeyHUMVSKgVljUtt1eTvBHAJ3+NsmB3yveWunK9PVleVdo7YQ5b51nMQhHFnVrwunju9VTbWhZKrwWJ039styM63a4cXX2eji2YV3fvyixL28eIMxlQanYz9h2sYRVFnsJd59/ubtdcJLFv7maeIsP3Pw8O3bz/W++mPD3v88ZhvNsk/7d/a6r91G+vCPx1ewQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6000,
            ap: 4200,
            dps: 893.62,
            speed: 35,
            range: 1300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 141,
            foreswing: 4,
            backswing: 137,
            tba: 0
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 4200,
            actualDps: 893.62,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "14000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "061",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAwMIBgcIBgQJBwUPCwgTEQ0VEA0YFAwhHBQpJBhLFBtAHRgsKBs3MyM6NRw+NyBKMhl9GixOOiyyGTRUSzCLLD1YTjVuSTRjXjV+VCtcX1bDNFKFYTN/byd5ckN5cVSUcSncRGWBgG2hgDDEYnmhiS2YkF+TkHeTkI+0kTW2nzqloYvIrDqpqKSvsKvisDbGvnvTwkf0tzO+vbzwy0HWzofR0ND041rh4OD/8Vj+8oDu7ez/+L34+Pf///96NA5rAAAAQHRSTlMACncZXjgnRa+NbP7JWoKhueX+/v/L/+3/tP7///7jz/////////L/4f///f797P///v///v/+////////////c7B3nwAABXpJREFUWIWll2lzqkoQhkNQiRsuuLCELTORbVhFAUX8///q9oAmJ7lo4jn9wapU0c+8vUxP5+npvrG9Hz74yQZT9p/8WZ0M/gkwNvd6LaHLPejZe6bBMxO8T0ECM14+KoRd6gMGInD3pcQ+je3gUQVPfBzwTE9z9+dgzOql/XAue/YpGHOeG1f7CR+XEvMogJGKXO/7rpEdNe2Y8Y/6QwHiozvzXdk5WtYp/ItickbuCqb5TjwDFcZfKOAUyzVV+T0zLOKQx3PwxDlIxJbsF068V7LHq/A0dojixupbjPYlCvXHAb2lYvgRfiUoPzmIfzgEluuvrV3kyQ45nFJhwj0koffcn6qqiHwXq4LlWsiKA53v/lYF0xnN58Lq9U0Vset5vp/s8sPhuLcnv0Rws+FwOF+t5nMRH/6wY6zxvxlQ3AjcF6v5SlTfjeQL4ZRK3I8i2NHrcD4crkRBfHt7t/Lak9oJ7Jjbg58I3HxFI3gVRMjC23sMrg3gIiP4icDNwYYQ/9ucAr5koTZ7fJ/QnS3AfbhaLCjgVc2/+ee53f0hBwuaRPBfLF5fF+bhGyHx9pO7EgAAEqCGFLJYeYfkKyERY/vugBybq+bwmqDmuZs3yi+AnWHF9ySwUoSFFT18AQR5d8jd5mCc57vE9zzLQet7gIG33Zq1+sVKFj042qLnJ5aBEAnTLM3KKhjf9u/p2+0WmzCKZBFHbgy+pu9ZFgmLojpXZUaMrCzuDDje324jDJCI/rp7qsAIwZdaVWRZRlBYSLczQAX4EAX8XgDHA8nOjX+VASlL0ztDfgwCtl4ErthQ/S0twOkYXwCNpaQKbyaRmYDvzoXjjaxIEcZfAFVZFlnqGBXq3wJ0X2Rvm0AEOEzDrCRGDdg3gCpLizKDQlThrRDYqSjLpgthmKmiGCh1GkB6zcFVya1Xgtt4piwK7jayUkQKJAiq6xECVTh/tVuPPa1h4ouCio00dIpSGYoqmEjSb4SiXQIrQQl2iQA9JKAM8qUoMSEkJE5x7YQ6AiqhtRd7GwDknuthjGWnDB3FgC4+nXKnKsmHhoymtLJbU6BBEXOaw10eCSglCF0B0D7X81FGsxm0ATozGfs5pq2Q77CihKHVAFB5Lj8AkBCHBG3NzEoqXCFVbgBWRgSE8iugKj9SUFZlKrU9dNwm8jCU0W8UQL8IQxW7hJjoM4NgZRGSddvGwteeiSqqJuRRhaylimGCqX8CoBcJMpT+//2ZuoiHLY0CCqmA5izO93EKDp+AInSQE6ZOSzP3tBoQYR8K6XkGVUBvc1VXoTn8XDhO3RJtZWSXcI3z3HdpM+Rb1S6qkALOFFATivQMchyEkOHoLSEMZipOEvcC0DpSQOirfj7mlxCqjA61MkOG8NJyGbgZxuvpZOpdAD3YsP0cQjjurzkosqqZbMu2V56HEo74cX8TXQCUaWLkWCj86IGGVLRNJEaKtpEPg19dqybeaBNolYHpYcVJs8+bVNZXotJbFDATGbv+LvFkGcsvHW7cYRiJWAg5DkEfQ7FqWG1TlR2J4nA04fszVV1PJX2zZBmJJrEsc/I5VcvbgKXnYk1fLs0oiqCVfQBMTYy9wNbWTgqWFdf7ULW9ruxIVk0vgfXc9VzX0ycdhh0ZqvDSf+6/dMYDvj+Zrp06grJ1SenOZPi4zw9eRFEY9eHzLruM4zgMgsumzTDdZ8kOArt90epqvrvRRhzTh+uzgeVQ67KwbKq2beufey7D9nq99pHMTnRNk0DbQMV4s9GnA7Y3M0TQ0mF/t15SOP2Sm8lDiIWjD+U+jsmy8yv3T+PW2Nxsll16OyRJ4n/eLL/HsoRcTJpFjGEe/0cF0jnmbuTpQSUc16H2/GH1n9y3jf0/VZU9UzeNmxoAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 50000,
            ap: 2400,
            dps: 2482.76,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 29,
            foreswing: 17,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 2400,
            actualDps: 2482.76,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "14000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "029",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80000,
            ap: 3000,
            dps: 803.57,
            speed: 6,
            range: 130,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1200,
            freq: 112,
            foreswing: 56,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 64000,
            actualAp: 2400,
            actualDps: 642.86,
            magnification: "80%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "5000%",
            isBoss: true
          },
          abilities: {}
        },
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
            actualHp: 2000,
            actualAp: 200,
            actualDps: 146.36,
            magnification: "400%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "5000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcICAgICAgICAgJCQkJCQkNDQ0ODg4TExMWFhYZGRkfHx8hISElJSUlJSUmJiYnJyc1NTU3Nzc3NzdDQ0NLS0tLS0tNTU1VVVVeXl5lZWVnZ2dvb293d3eAgICJiYmTk5OdnZ2kpKSsrKy1tbW9vb3GxsbQ0NDZ2dnh4eHo6Oju7u709PT6+vr////////wM4yQAAAAQHRSTlMABw4dFSXhc5hK+S4+fVTY6V2GvW3KqWZ3ipWf/bDM6rzI2P//4f/u///s///+/////v///////////////wD/L3PmKQAABiBJREFUWIXtV9l24jgQjVk6YQwEAoFAIAG8YFm7Zcmrxv//V1OmO93Z4Zx5mYepF7zdK9V2VVz9/S/t6n+C/wLByZzp4Oq9OZ2u67rOh+efWmcx67+57w+Xq+0+CA7jSwnC1e+1nO50cYhpovMyF4+XbcFZi+CXE477sI+lSpVKlM3Y+kIfHkS667YX/bsDMzpJ0qwwaZ2g5Vlo/xSncVzRkXPVmT7R1GhTVk3TmDznB/cswfXtCijcoMyDYX99ZDIt6sZWZVmoUtILPBgc2WHe62zTRu12hMnc1nkKLqQmVyIYnve+8yhM/OguSV2TiKdVpZPUGIihVgLddS+IobtTldyPnrImD0VpYG2OEaYUed5kt5t3zjMMD5k18YRam6BESYy4LoqURiFNjIlH3zI47VtneiyakvuqrjBGJC1tmaBIZmWVV00Rz7/2ojMcXZ9+R6RqrEa8zDxeN5UClgISqQitmjwYf87gdMePwfPodN17FLZpCoa1IKXBWNfWZoVVKcqgHA6fpaLjznexMi9p6u8UMNQK8RBFSQXXTZGUpRJl09h01/8AH672TFc2fXyJ0PBgAGSFF3qobK8MI/xEBFT+zbtAdleBzGtYMZ7+duguzMpCR4xzzG1ja8F9lDYnBo2fp2/w/XWstYQ9Z/s/exv5oe97lJuEo6KxVjEiZGPLAj4T4az3Cu8+xhQzTGor/2jA1ZISz/eErFMRgXNNlZWpsBmNFORHvO4p95EQnleS2TJ+Fd5hzLwQCSGFIV7EVF5ZI2xbzuBQdfzzpbulGGJrObzdvtpYdy82vkRaZ1USydBHiEluc05OEYlfJNMZAl5CjRikK/q6xpyVIKHmiHGCTIal0jLyRJZp+BgIxi/4HcEJxB++KMX2TXrnsmayNoJDKWfIsNLm/sbDCqLYWPozDc5gT5A64UUpd2/EprtNayoz2yYOlCzjKRCECJGIQkzZ8g0+J6JUu+GbEh8cCwllnJ8yXzCkqNRMFWWJgEbRlsAZHwhK7QlfqP1bPLQD8qVkhOqWopJRkjABdHU0OTxvnsdt0x4wat8WlBfpezzI6mSDQRCZJ8vMFCUnhmJVNaW/cAej6x7oLeANuFgyXuj94EOLugsQVGUwgoL0IpCVECtCtPYWp2R3lgHG0JsgHKwwn+DBicH8bv208UPOw43PfCJ5rhDy49b/zjzAJG+dEzQ3X0kEkCx8pAVThnHIqTJW+thsnavewxHTFl8LkmfB9EuRGh+xkapMKYpCVpRF6vkmebjq/MbLFr/8Et9ZEGpElfAsF6Hnhf7zLJCHoTt8ilhxKpAT/muZ7T5hJrSmICm1DkPJD8vRYvqwf5r42QmPsyx++EameztGmSa6LaaM5LU2xx+zu8Akm7DVNoVN/i0edIlBr4UEGsCCnGS6MNSbPKe1ilRZJGfxoApH7aOI+YgqpJs0U5XV3sRTtUbQFjqPV2cOKvdZ+B7ikm02G21VllorEdRWUpko4vIs/qo3n002HmFCUIh7CmpQQP2UzEuqDP24mffO4NuGOYY+E2mepSikDGFQlbqAg1ZW6dP5s96ZBqmBtcIwoiTyNhvOQoIEI8F6y87Fr7VhYGA8gV6ORFnqdAPHDBU4RMGq564uOOg7j9KAhGoe0bSyVRaGG2hMhA9TwDoXjBrdJ5HBoSZRAgQN1ADd+Jjgw/iCIeMXAYPZUiGVY5VVBg43gSNy+Lp33ltvxrVOCautICYV2IfzHW8Wl67fzqvgM4wZIBscJYIxipRB33T/BxttIo+e+s6QEOcFzIxMyu3FW+jvmIDEV0Ua7w6xyGpbS5/xC+dtyOJKJEZTnwbrYcedrnaxFGFIjufH5V8G426mlDdZDE57drqDu3ucZ/EF0+pPWwpbMO9++adjnGFcWfr9pPjKgzVV8ezuzZ+czpoX6pKB+aodnGIh9v13AetvqWbr3gVhdK6PRvN99/1zGOaj4/bB7X948wrr9Pru4F4ogZ9H8+vr69GLtdfPnPpIxvsbt9f5fCOd8c3s/vbHXz4W/l+fWNjOGWgzuZ/dTD8Np+OO56Obxez+/vb29sfJJr/sdANP7+9ni5vRfPzZv8h/AFe9mOihrLs0AAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 400,
            actualAp: 4000,
            actualDps: 2142.84,
            magnification: "400%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "5000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "060",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 180,
            dps: 79.41,
            speed: 6,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 68,
            foreswing: 33,
            backswing: 35,
            tba: 1
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 270,
            actualDps: 119.11,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 150,
            actualAp: 1500,
            actualDps: 803.57,
            magnification: "150%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 100,
            actualAp: 1000,
            actualDps: 535.71,
            magnification: "100%",
            count: "2",
            spawnTime: "1.7s",
            spawnTimeFrames: "50f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcICAgICAgICAgJCQkJCQkNDQ0ODg4TExMWFhYZGRkfHx8hISElJSUlJSUmJiYnJyc1NTU3Nzc3NzdDQ0NLS0tLS0tNTU1VVVVeXl5lZWVnZ2dvb293d3eAgICJiYmTk5OdnZ2kpKSsrKy1tbW9vb3GxsbQ0NDZ2dnh4eHo6Oju7u709PT6+vr////////wM4yQAAAAQHRSTlMABw4dFSXhc5hK+S4+fVTY6V2GvW3KqWZ3ipWf/bDM6rzI2P//4f/u///s///+/////v///////////////wD/L3PmKQAABiBJREFUWIXtV9l24jgQjVk6YQwEAoFAIAG8YFm7Zcmrxv//V1OmO93Z4Zx5mYepF7zdK9V2VVz9/S/t6n+C/wLByZzp4Oq9OZ2u67rOh+efWmcx67+57w+Xq+0+CA7jSwnC1e+1nO50cYhpovMyF4+XbcFZi+CXE477sI+lSpVKlM3Y+kIfHkS667YX/bsDMzpJ0qwwaZ2g5Vlo/xSncVzRkXPVmT7R1GhTVk3TmDznB/cswfXtCijcoMyDYX99ZDIt6sZWZVmoUtILPBgc2WHe62zTRu12hMnc1nkKLqQmVyIYnve+8yhM/OguSV2TiKdVpZPUGIihVgLddS+IobtTldyPnrImD0VpYG2OEaYUed5kt5t3zjMMD5k18YRam6BESYy4LoqURiFNjIlH3zI47VtneiyakvuqrjBGJC1tmaBIZmWVV00Rz7/2ojMcXZ9+R6RqrEa8zDxeN5UClgISqQitmjwYf87gdMePwfPodN17FLZpCoa1IKXBWNfWZoVVKcqgHA6fpaLjznexMi9p6u8UMNQK8RBFSQXXTZGUpRJl09h01/8AH672TFc2fXyJ0PBgAGSFF3qobK8MI/xEBFT+zbtAdleBzGtYMZ7+duguzMpCR4xzzG1ja8F9lDYnBo2fp2/w/XWstYQ9Z/s/exv5oe97lJuEo6KxVjEiZGPLAj4T4az3Cu8+xhQzTGor/2jA1ZISz/eErFMRgXNNlZWpsBmNFORHvO4p95EQnleS2TJ+Fd5hzLwQCSGFIV7EVF5ZI2xbzuBQdfzzpbulGGJrObzdvtpYdy82vkRaZ1USydBHiEluc05OEYlfJNMZAl5CjRikK/q6xpyVIKHmiHGCTIal0jLyRJZp+BgIxi/4HcEJxB++KMX2TXrnsmayNoJDKWfIsNLm/sbDCqLYWPozDc5gT5A64UUpd2/EprtNayoz2yYOlCzjKRCECJGIQkzZ8g0+J6JUu+GbEh8cCwllnJ8yXzCkqNRMFWWJgEbRlsAZHwhK7QlfqP1bPLQD8qVkhOqWopJRkjABdHU0OTxvnsdt0x4wat8WlBfpezzI6mSDQRCZJ8vMFCUnhmJVNaW/cAej6x7oLeANuFgyXuj94EOLugsQVGUwgoL0IpCVECtCtPYWp2R3lgHG0JsgHKwwn+DBicH8bv208UPOw43PfCJ5rhDy49b/zjzAJG+dEzQ3X0kEkCx8pAVThnHIqTJW+thsnavewxHTFl8LkmfB9EuRGh+xkapMKYpCVpRF6vkmebjq/MbLFr/8Et9ZEGpElfAsF6Hnhf7zLJCHoTt8ilhxKpAT/muZ7T5hJrSmICm1DkPJD8vRYvqwf5r42QmPsyx++EameztGmSa6LaaM5LU2xx+zu8Akm7DVNoVN/i0edIlBr4UEGsCCnGS6MNSbPKe1ilRZJGfxoApH7aOI+YgqpJs0U5XV3sRTtUbQFjqPV2cOKvdZ+B7ikm02G21VllorEdRWUpko4vIs/qo3n002HmFCUIh7CmpQQP2UzEuqDP24mffO4NuGOYY+E2mepSikDGFQlbqAg1ZW6dP5s96ZBqmBtcIwoiTyNhvOQoIEI8F6y87Fr7VhYGA8gV6ORFnqdAPHDBU4RMGq564uOOg7j9KAhGoe0bSyVRaGG2hMhA9TwDoXjBrdJ5HBoSZRAgQN1ADd+Jjgw/iCIeMXAYPZUiGVY5VVBg43gSNy+Lp33ltvxrVOCautICYV2IfzHW8Wl67fzqvgM4wZIBscJYIxipRB33T/BxttIo+e+s6QEOcFzIxMyu3FW+jvmIDEV0Ua7w6xyGpbS5/xC+dtyOJKJEZTnwbrYcedrnaxFGFIjufH5V8G426mlDdZDE57drqDu3ucZ/EF0+pPWwpbMO9++adjnGFcWfr9pPjKgzVV8ezuzZ+czpoX6pKB+aodnGIh9v13AetvqWbr3gVhdK6PRvN99/1zGOaj4/bB7X948wrr9Pru4F4ogZ9H8+vr69GLtdfPnPpIxvsbt9f5fCOd8c3s/vbHXz4W/l+fWNjOGWgzuZ/dTD8Np+OO56Obxez+/vb29sfJJr/sdANP7+9ni5vRfPzZv8h/AFe9mOihrLs0AAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 100,
            actualAp: 1000,
            actualDps: 535.71,
            magnification: "100%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e11008Data;

