// Stage 11027 Data
import type { StageData } from '../../app/stage/types';

export const e11027Data: StageData = {
  eventId: 11027,
  eventName: "ランキングの間（明治剣客浪漫大会）",
  typeId: 11,
  typeName: "ランキング道場",
  prefix: "R",
  mapId: 27,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "明治剣客浪漫大会",
      baseHp: 9999999,
      width: 4200,
      enemyLimit: 12,
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
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 18738,
            actualDps: 35133.72,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "3000000%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 54000,
            actualAp: 26400,
            actualDps: 21405.36,
            magnification: "1200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "3000000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgICAgICAgICAgICAgEDAgMDAgMDAwMDAwMDAwMDBAYEBAQEBAQEBAMFBQYFBQYGBQYGBggGBgsHBwgICAoJCAcLCAYICQsJCQoJCQkKCQwKCQwGCRkJCg0KCgsKCg0KCw0LCwoLCw8LCw4IDBUQCwcLDQ8MDBENDQ4NDQ4QDAkODg8NDhMODhMODhMCEC0PDxUPDxMQDxQNERgQEBUREBERERYSERMUEQ8UERAPEiIUExQTExoSFBwUFBcYFBIWFRgbFQ8WFh0XFxgaFhQWFx4XFxwYGBgZGRkbGBoXGSIWGScZGSAaGR4ZGiIeGR0ZGyQaGyIaGyQbGyMkHREcHSYeHyYgHyEiHxwfICghICMfICkfICkfICkcITAnIRwgIi0mISApIRsiIy0kJCUiJC4jJDAmJCcjJS8eJjskJjAkJjEnJyUuJiEqJywmKDQvKCMtKSYuKSomKUAoKjY3KB0qLDgtLDE0LhwrLTkuLi4yLi4qLkMvLzM3LiguLzwvMD4uMzs3MS8wMkA9MSUzMzcxM0JANRE5NSw1NjcxNUouNVY0NkQ2Nj05NzZBNS00N0c3OTpHNiE1OEg5Oj06OUA3OUlCODRFOSo2Ok9DOTM4O0wyPVg6PU5DPDtDPi87Pk5KPDM/QEFAQEI8P1FNQRtDQUQ+QVNIQTw/QlRARFZERkxCRVlRRDlHSElLR0RER1tJSk1HSl5KTExOTk5QUVVaUktmWCtWV15YWVtdYWZgZGZuYFdiZGZtZkxnaG16bjx9a16GaVdvcW+Bb2GJblx3en+RdmR8f4KTfWx/goqFiI6JjI+kiXepinOPkpWkjXqPkpqtjnmYm6O2mYKio6O8noS/pI/Rp4SwsLLIq5HYs5i/xsXjvZ/qw6Tn0K/w2bjf5uj/68b+//////8Lu7VZAAABAHRSTlMAAgcRNjpHc5WivsjW5ev/IHoADBpMZfK5UBUqL15uJY6ogtHdfUFZ/wCHtpf/c7Ac/57EN4Wr9dR63KdRuADApPa1vf+2nf8A1f/wlKmw5P96o0yR////0rJox1Pgvfj/qv8/1+j/y/v2/wDZ/8L//+TqAP//0/D4/4j/ov//cPwA/+P/9P+K7v//Nr3//////////2b///+2///x/////////3X/////////zLf/tP//////7v////////9fkf////8A//////92AP///+rI/////6T/2f++////////////4ub+///H/9jn/////////////////////v////8AL8LRDgAABMxJREFUWIWd13tUFFUcB/ArkJwkRV5r8pIQlEFByLfJnFKPpOlpU2CljrRpWD7Q1RbS0M1Ix8OkrcPZiGZyDlOdrjo2OYW3sSWnplmwsITMKMvSQqIys3xkL20k0D/sj/3x/Wfu2XPnc+797T333kFXbgi6noSHVq8pGYmie3Nj5yvoxp+udY+mSmuXrFtXGXUNBAIoIf+9jra2Hesf601wwPUZDI3suPTrH11bPny/J9ARJLf/0v5V1zeT4vs6hREdJ3776eeugrjQvgBW/9AHj1+68M8PsXEJIKCns0X0j+y6eOHPZ6jEkL4ANIVCq9qP//Ut6hcCWwe9AI2yvbNPnHNOp1CfgPj7KrzcpvaLjVnZvTWETIHK3KwQwgqzO84Vso+PDwEDQxke+zWReZ60+STVqKChwHhTYjRV4XnFL3gV4o2HAnN04hGIKmH5EMNoeCEFBOj1pszzhGBJ2smxfqUYWgNqZTPvk4iqYsy6pYAvEwrQFS0+hldlQjTRg03PfCgQs7lZclYSCRONMFJgbTwUCGMDSr5TUDEvYA4HKnOgQJJgKmkOXlaxxLJEX9sPCqTKupaaIvhl2a/xnIBHQoHbVVNM6udQdSxgYYlizoMCo9Vm72CUV6mbpKZ2F+vsD13KKXJASEQ2Byv63Bve3RC5dTEQSMcmjkOj7UUz7Bm5L9UUth4GAlGiqdqoafYiu7OsTlL5uq9zKAhAWX+j/HBOsWuGr0GTntWZypPPQUYQ82QJa4jbpt1rt6uGLvGKT2zaQgOAnCZfIXm1MCPXzmpE4yVJNIWpoBqkl7/d9sXuLMavEdXvtvamFmYcrIhpB7/85OVaLaATouZzLQJTGgoDxk3c9Bazq4zxyc2+DCfjklbQwC3t498vn121l610uRz5LKd/VEHBgNizl8+3bqs3dcwMucfQceAR6Ag+PZvlOVTdoJo4PY/IUmAldFdGdx07umo/VgPumDEYYxMOTN7zWdOyBmIUo1GihI25YAChgk6Pt1kaiuayPNHn9AG4tfWkw9gYgkaX8QYZDweoBcuOHXVaJ0qmSzSUbDhAl3LbO4+EU8jmJrqcDgdyXNL2/af3haIRHlNTMuFAGKPU1754usI6I0xN7gMwkmvY0Wh758zkm9wGkWxwIF3Sat9MRJ+fGrDU8HNhcOAOotc0zqfQd8ccsu4KBQP0QkP3ND5hFfPHI/n6CgQGYlym5tr9gtUqPt3KTYADCWXEKCzfZ52qETvPd0bBgaQyxRx150HrljyrsOnv7xFwQ0FUigtrycMO3k9HTxLWHbm8BzCCu60sp4sZjMNQ41aEpsjNEw+fKQ4eeOpqlj/Nyb54es0bCC01AhvRB51zgwaoqxnMEm01ograF6ONLQaXgA6cmgeqgU306ysplPPaVCpPNLQURB84+ToEWODm1f+2MXqKFFg6zHq+cmo9BGC9+szuVrZqcJsTu5vjggdGlLo4Ie9qK7rEUEX4HWmOe9EiR1z3S2M83vKyscA7Ej22qnrZrJ4lWeSqqn70gcmDaRT0J09CSXV1XflwW3K4lZvt1VVVdfX1NTODBVIHFu2trynPiuxJVlFGRlbuovLciMTggLjUlAnTxw5PGzhoSHcGDUy7JWLAbSnhybH/A/wLPQQyrzxY9jwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 1320000,
            actualAp: 48000,
            actualDps: 10992.36,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "3000000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAQECAgICAgIDAwIEAwIEBAUEBAQFBQYFBQUCBRQGBgYIBwcICAkNDBALECEQEBYZEAYSEhMTExMTExMWFBsWFh8eFQ8XFiEcGR8WGiwcGxsdHSAmGxQgHSIeHS4iIiImIho4HgMkIiglIyYxIhwoJislJjksKTEuKicvKycrLjgzLiowLjdJLBM1MytILRgwL0w2Mzs9ODJANzA7OEI9PDtQNyZAPjtBPjxPOTBHQjNMQyhCPlxePjFOSUNwQRNMTExpRzhVUEtUUlBuTkCFTQ5eW1WAUyFZXF5iX1mUVQ56WkhnY1+OWyGHYT1va2Nvb22jZSFxcW13dXGEc2Cxahl5d3GAfHS1cyeBgX+Fg4DJdxiNhHWhhFiPi4KUkYqVkYiYlY+/kFyhnJSioqGopJywrae3tbC+vLjHxcHhwavNysTV0cvW19Tc2tby2sXi4d375M7r6eXw7ujy8ev6+PL//ff///7FtqW6AAAAgHRSTlMArb/xDCw3av8heuXWihdeSv89nsn//56SeS1Y/+L/wf//Zabb//FHgv//0P////+n4F3//8SH////t///oP3v/+XKsf///v+I///h/////5rw////////vf//5///////8P///fr/pP/////Q/////////////////////////yM8W0wAAAV/SURBVFiFnVf/V9pWFI8tKn4BRA1OTTFos2nk+bRkUmy01BUUrFhrLC0isYymxCwJDMgyILn/+p7d7M7ZzqHEew4/hJPP59373ud+7gtFDYhgYOXHJ+O+Qa8Mjk3hOYmVB+NDr59vcZGt16sPJVjY2uKYF/j52kMJVtiIP97Oh+ceSjCPubzWTkQCDyUIYNVx/1SnRx+Env3h56d+A/5wyg+qYDl7c/0xmdB/d9Tk6dnemFf8fr12/vlm44VZLiePbm5VddcbfjW/7Auu3R6FhRe0/+h217ctrXsi8FG+499qpYtoTEiEN8r7FLW07C2F3S44evksyuMXW/SZXpn0BqeOwemZudPrZAynhcjpu7LurYLtDtjQen96mYmgNIodvLvsWCEPeN+Vlm2CXbn5mIzxiI8lb963YN9LBus1VTZAzV1fsnwiEcldv3GMCU81PO03C7aROf0Yj+Fo7OC0XF30hKf2wNJLmnz5Lh7BW1vxm3LW2ymOmtCyJalz8etBhBVjyduseeyJYNvpN+WEDsrlUYwXwhtnqulNylfgOJ92XOhcJMM8TaRo1j3pwHfudo1mNmtqlZyfpcPJcqL9wVMGo/m+2+/u7BQr+aiA+ZSUda0ZTwyhOujKpxOlno4KgsBLhaY3IVHUh2a2AVq9kY6yLOcvGXLrytt4WczKXbNrGwLNsqy/3pVqeW9SpObqsg0NlecRRjxuq4aKvDH45opgNRWaNBNK+SVXN0yP3hyS1EYrz/KY5QU2pVvWlTf8mFQrlPUsizBDkhB11ep4mZDBD8Viud5pIhaxDIcQ0nW6BcOLaabVamhFgDrNYYbGvMAXQHr0Bd4Oid9zSkUwdHBLNEmB53mMxW5nivrSmx0Kv374jIw0wwI7zSA6LzIcTnE6FGfGWsOlsPtLaMO2GwAmz3G0LNIcEukSNHOh/eH07Dv5bDpG13WrLKa5ejaMsMBIfZCGFcKeTRYnCdhZBtNpNe9HSODzFpjDNeToOQBYmtMHE5MSJKXgxxijrOl2hzrGyQa0e6C2iCdVWIFO16pFFiGM83WwjCGGy7bj6F0wNOj9XUFBUQoMJg1VkJ22dRX8Hn4PbNKEzVqfVKBjzKBaRcmHeYQ4qWQ7rebId/CLYEkWWHIHem4/z6bovCJVZYYlmyFJDdDt0vhgglWj0IZurQk9soXECRhiiorMkRq4UkEFs9mOLQ0kGE1Y4NR06Pcct0ineFY+31GqiMGYrxSrrl13pc2BBIEOuErJcfo9sBCNOVQ/XFOUFGloVClVe6DYWmmgmhf6oBHF9Pt9qBL5sClte1KRCRwJcrHUBV3vlqxngxgO21mT4HvQ4WmMmKy2OkP2gLiiKJekDjQUe/K36iBvDCXUu/UdqNIcjxlJGZ2tKkRHXLpaIbOhWz+klvSXAwhGJXDuEmgWBKI/XpGoWVlNMwKflpWiASCTdnimDbi8zyrkdtVznGoxzWImrR9Sy7KaZwSUrpVeGi7od+kfawNuG3et1IPW9hrZOUbS1glBXaIFQdycGCMEza8N+VYb4K++QxfcKyrIpBDWqjPUsmIU/QinZqgJHdr/JP/TQIPeg84yNc6Jwtz+Sx+1WjhZ8fNYXKSCujrkhD48IZ8avIiXKWJBE2PUBM1icY1a2hx2tvmC1CyDRO7eggkBEjfvLtDDxwIniOz9gqN3tow9jdYxBgnik/unWSJKQfRy1aVCNBLx/P2T7wnp7NSCFwIqwPLcN+8IxpPxRHx+0Pv/Dd+rTPLgW85j8Tc5Eq+Gnc7BieD2+8yb3Eho8muMB6KZzEEmd3FxMMRoDDz2kyBLZuL+fyMavftFyV/T3+OYCQTmRh7Nzz+dnpp6fB9TU1PT0/OPRgKBwOT/T/Mv7sGBFyKctwwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 21000,
            actualDps: 2592.6,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "3000000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 85800,
            actualAp: 5280,
            actualDps: 6600.0,
            magnification: "6600%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "2850000%",
            isBoss: false
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
            actualHp: 33000,
            actualAp: 3300,
            actualDps: 2414.94,
            magnification: "6600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "2850000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQECAQECAgIEBAQHBwgJCQgLCQkNCQkNCgoUExQWFRMhFxMhGxsgIiMiIiMnJClBHBkjKTMtKypVIhwsNEE3ODc3Oj5ENjI2PkJkMC0+R0dCR0lDTk5kRT1LVFVSWFpaWVdTXF90VklcZmhubm5ncnJweXuYbVV2g4N/i4ufiHqVlpq9kXSio6TGooetrrHer465ur3ouZjHyMjuxqvP0NLZ2tr/1bTj5OTs7e7x8vP5+vv///85z0iDAAAAQHRSTlMD1w/qHi1DoVFixHiet/7m0Hf9/+mV3vylu//+///M////5b7///7R/v/////0///+/////v/+//////////8ATbfs5AAABAdJREFUWIXtln13ojoQxikFBN9QKjcqRaxvmIJIIU0TScL3/1YbcNvqdrvCvffPHY8ejzA/n2cymaCU/zGUv4C/gP8FoJtjdzpbLFaL6djU1fYAC+xgFMuI4ijarxZuz1DbyFJKfeQHwWYPZXoUSVQEdwvXaqxF/pnSA4FfQaSUKKreMYRwNZOOLqQoqqn9Dlrfog9kfuDLV62khkgtcC8phnammAPb7mnfAGQlbC+oGN6HkqgGvRvSzNFQRu87QFmqZn/iVSqCX+xUH/u971T5Q9v6FlAxjJpRW/ElZbPbQ7hbPj4ud/FueI6vEq5XTDJGXpVcC5GGnuZzP3iae5WAh4fh0LgBqH7Qe4PJuxPJeNrJ8IfOcL7cLrtfq/jbnpEFGVXlrDnech7MHx7mx9f85auAb/dCLaSuyOPc8xznvvv8djr0qjVVlCaAdyHg8VHqAE6n85wf5TKM+tb64F422B8AMnT7n4Ht+Q5YOce3l629Hg2cQ/7S1z7ybgBM2XyqMUIMA5i/5tuUjc3l89Zx7L51bvQbgPPlUHAaBKfTKfcINsrp0dV6A/sMabJzdSS4iMCrJGz2JDXXp1l5LrPtdJsALMoLnjnHPH99DlIaHA6jn2mKYd6yUF2fFjglBGzzt7dnAAvP8Wa/mvwuDNeVDjCjCa8A+esRBAhGZN0QoB7yla6YWVHskgxsX8jb0elME0HchgA9Px3n9gpR0nEiACklGeiXbrJu2kjK9OV4nAMsQs2LQUSLAvsTrbyalzeKqE2XACA6NuMdgCnG6e6ygA0ApTZxRq5lHCgIkjiRE8afXI/Wm32g6aUxRQKCJNk/eUH65FxPpduNpLgZF5mz54TQFMuOnOjtAD0sBAYAc0QISlkWgNll0m2AiRjbgFiuQFGQtCjgMBi3ApRrkTqbrMCEcYoKcbDA5UI0AOjhxg4RQ5RzTJkI1Um/HaBUOt2YFohxBikXodK5rGKzk3ycyTXgIt1jzhNNbVfEKqaUk4ITmCHO0NUqNgMoIWfS/XqBECuI2R6gp4IxgYxxJgF0fHWtEUDONM7ZrDRTLK1M2wMWjMkK6qUWYY5Z2BqgQiEFLOSXFeGIpVcnbBOAkckSIGldDQlDPGu5mWQXFIzjWKYpK0KxQK0Ba8GLLFQqCwih9gA1ETyrHEgLafovFBhYUFxnKWGWUYHbAmQJCn4+ShY4I4JcPac0mQdc8PV5kuohIoJe9XKDmRhS/HGSqIuUZC0BpRXHn6KtLLYaPyP9jHERft6lI3r9qNYAELKL/aceira70SSX/6lBkY1bTSQlFPKxSFEVtYrS9GGSrazP4+3PANXqdQH07+/uP2M4dObO/cdK3AJ0OoNu9zL/7q7b7XR6H65+AEjUZYFbVXVIAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 36000,
            actualDps: 5625.0,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2850000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAABAAABAQEBAQEBAQECAQEDAgEGAAEEAgMFAgEFAwMFBAMHBQUKBwYfCAkeCQoiCQgaDw0eDgwkDw4aFxYoEg5FBQgoFA4uEhEcHBw3EQ4WIBwdHR08FRYjIh41HBQ7GBgpJCFIGRszJCI6Ih5JGxdhExVFIx5EJyE0LzBYISNcIiF7GRw3Nzc8NzdqJSdgLCZMNzF2KCtoMChVOTVqMi2NIiVFRUV+LS82UVeVKSx2OTZxPy+KMzVOTk5STU2SNTZSUlKBQUGnMDOaOTxsUU5SXGCORjmkPD6EUk+bSzetQUFnYl9lZWW7Q0VpamqGX12lVT9ecopvcHC4W0PTTlF7eXnDZkmBgYGheGXPaUyLi4unhXHhcFLbeViTk5PseliZmZmfoKHQkXWkpKSpqam+ppWxsrK3t7fNs5+7u7vBwcHExcbjwqvKysrax7PPz8/V1dXvzrjb29v23MPj4+Po6Oj/5Mvr6+vv7+//7Nb19fX6+ff///8YXU45AAAAgHRSTlMAxe0NKZj/HUimNdtguIBxxf/pWoO0/5f+/8am2sSB/9Z4qP//kf/l/sbwtf/w//7d//+V/9///v/+/////8D/y///o////////v///v//1//////////////////////////////////////////p/////////////////////7w+pywAAAUdSURBVFiFnVZrU9paFMUGkaKiaGvVPvBB0VaqBVGEK0VyMWI0VKTQGI0aQxODCTcmxsTEk/PXb6jT3pn7oXPC/kAmM6yV/Vhn7RMI/DGwsdnJF9E//+dPEVnaPztrHS4N9YkPVy6uLi4vrloLfRLMNi5Pzi4vT64az/vCR5InZ61G6/Kk1XrRF0G44uEb+63G/tmX/jKonLTiyeJhsnKy31cbI5nWYe3bcaO6R20E+yHARkunj493N8YePt8PPPpq5FPl9vHOvUlk/CeAzW8cnh3GFs9vHv75POxfi5MfW5cXrXS8dvfj9C3mGx4Ivzy8OiumEllav/+RX/FdABb8ctXIJHB8a5+/vr05Xv0U9skwf7JfTJAUXtjeu7m7b1eOSv4YsI3MYSZLkURhu8I9PN4frx55x2n9b/QEPnxpxAmCKOH49l7n4eE8TS4ForyEnMar+VY8ReEEQeIlvHnrCund6TkujzzMyMh6bhincJzEicJWhX3oZJerzBz6ccCwjeg4RZAEUSjh6d1j6TRZrb5GhnsxtBBOH5FEOpHCjwrZ7c38t3Lcl6UEwyMEReDpVGx6azeer1U3l/EJPwRY4JU3Q5zazdTPi7G/mNhWiUj5k+OsR0CQy9fwRqqHQvli9nvBn5R+Emxvnm7Gms2961t6eTnuyxaDMZwkyFW2ukiXp/bub4/X/jrwZe1vUmmKJIvt5BSr0punB1O0UFz2YYvRQjpLkrsH5dDaGsNPxZp8s54kJtEJPuCpLElQmVCMFoV6U27WeD2/5aOGl6VCliCpmVhpmm5XoVsNcTC/vIFOEEl4B5EgEwVqta00oVymqzST89WEElGiSilq9UCBUrnG8rV8txyPoBMMpanSUTq1W5BVqNOCUtfFLnfuQ0qRFEXurhVXpa5pSQJQypCXpOt19ARyycL32bd7vKZDXeFZvi6uiRqDTIBt5KILqfBXUbeAo6oaK3Ac3TZr71EJPhSfB4awSYk3gAVlGbiW7iqsgUzwvjjee+woouNYgNdMW++aBmfUEKcwWZzo7bIgK0nABjILDUcRHNDWv6LhI8X4T+t4J3OKVwEvQhVKbWBJGo+2IzdST+PeUVnNsR1GNxTIsVBXFRFJiQu5J/cPcx3edFyFgZoCGQZ2jY6I1IOJgafnisqJXgUsD7vdn7+2wCMpMfiU5xCtsx1oO3QXdjXAdlzVltp+7jljosKrrtulbVcxDFYHmqlJ6FL2WqgJguVAgXUdyVJpE+iG3kXfzoEIp3EycFxOhIYIZdoCum6qiELoxXtFbJuOYzKaq0lQ8jIwVKDSyJclrKlzMrTcLmM73Q6UWAOYMtAY5OXUa6HekyEDHKkDRVYDTsfWOGRf3lEFwVMhpHlgtzueEFUAOobWRh1DkPUqcC3HpFVH51XQ7BFIXUNAHsNXvVeBqzQtR2VNs8x2AZA7jog8hndSx7a9FtSBrbCOXuY8ArXjvaMa+1DNdS0LMjQwFRaoeVYGQBMgU0f25REJQuDU2rapc1AcbMsutBjI5NE3Q3BHhmbZcnSGt9cDOzo06nNO9Zmfa3ckT4cYpz72+p1X0ko58SaaHxvxgQ9gE9Pj2OtfkPHVuN/79lh2e+m/jN9ks598fT+AfT4oVd79flsqEWTl8woqx1AkMpirJIsfR0cHejE6EC+kN/OV/cwgCjz4LORFMreZmwn9iqnFqcWZmZlkKIRAgYVHooPPR9/OzQ0/+x3DwwOjo4PRsZH/H+l/AQoofSqglHFcAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 540000,
            actualAp: 36000,
            actualDps: 8181.84,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2850000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 220000,
            actualAp: 17176,
            actualDps: 32205.91,
            magnification: "550%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "2700000%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 49500,
            actualAp: 24200,
            actualDps: 19621.58,
            magnification: "1100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "2700000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgICAgICAgICAgICAgEDAgMDAgMDAwMDAwMDAwMDBAYEBAQEBAQEBAMFBQYFBQYGBQYGBggGBgsHBwgICAoJCAcLCAYICQsJCQoJCQkKCQwKCQwGCRkJCg0KCgsKCg0KCw0LCwoLCw8LCw4IDBUQCwcLDQ8MDBENDQ4NDQ4QDAkODg8NDhMODhMODhMCEC0PDxUPDxMQDxQNERgQEBUREBERERYSERMUEQ8UERAPEiIUExQTExoSFBwUFBcYFBIWFRgbFQ8WFh0XFxgaFhQWFx4XFxwYGBgZGRkbGBoXGSIWGScZGSAaGR4ZGiIeGR0ZGyQaGyIaGyQbGyMkHREcHSYeHyYgHyEiHxwfICghICMfICkfICkfICkcITAnIRwgIi0mISApIRsiIy0kJCUiJC4jJDAmJCcjJS8eJjskJjAkJjEnJyUuJiEqJywmKDQvKCMtKSYuKSomKUAoKjY3KB0qLDgtLDE0LhwrLTkuLi4yLi4qLkMvLzM3LiguLzwvMD4uMzs3MS8wMkA9MSUzMzcxM0JANRE5NSw1NjcxNUouNVY0NkQ2Nj05NzZBNS00N0c3OTpHNiE1OEg5Oj06OUA3OUlCODRFOSo2Ok9DOTM4O0wyPVg6PU5DPDtDPi87Pk5KPDM/QEFAQEI8P1FNQRtDQUQ+QVNIQTw/QlRARFZERkxCRVlRRDlHSElLR0RER1tJSk1HSl5KTExOTk5QUVVaUktmWCtWV15YWVtdYWZgZGZuYFdiZGZtZkxnaG16bjx9a16GaVdvcW+Bb2GJblx3en+RdmR8f4KTfWx/goqFiI6JjI+kiXepinOPkpWkjXqPkpqtjnmYm6O2mYKio6O8noS/pI/Rp4SwsLLIq5HYs5i/xsXjvZ/qw6Tn0K/w2bjf5uj/68b+//////8Lu7VZAAABAHRSTlMAAgcRNjpHc5WivsjW5ev/IHoADBpMZfK5UBUqL15uJY6ogtHdfUFZ/wCHtpf/c7Ac/57EN4Wr9dR63KdRuADApPa1vf+2nf8A1f/wlKmw5P96o0yR////0rJox1Pgvfj/qv8/1+j/y/v2/wDZ/8L//+TqAP//0/D4/4j/ov//cPwA/+P/9P+K7v//Nr3//////////2b///+2///x/////////3X/////////zLf/tP//////7v////////9fkf////8A//////92AP///+rI/////6T/2f++////////////4ub+///H/9jn/////////////////////v////8AL8LRDgAABMxJREFUWIWd13tUFFUcB/ArkJwkRV5r8pIQlEFByLfJnFKPpOlpU2CljrRpWD7Q1RbS0M1Ix8OkrcPZiGZyDlOdrjo2OYW3sSWnplmwsITMKMvSQqIys3xkL20k0D/sj/3x/Wfu2XPnc+797T333kFXbgi6noSHVq8pGYmie3Nj5yvoxp+udY+mSmuXrFtXGXUNBAIoIf+9jra2Hesf601wwPUZDI3suPTrH11bPny/J9ARJLf/0v5V1zeT4vs6hREdJ3776eeugrjQvgBW/9AHj1+68M8PsXEJIKCns0X0j+y6eOHPZ6jEkL4ANIVCq9qP//Ut6hcCWwe9AI2yvbNPnHNOp1CfgPj7KrzcpvaLjVnZvTWETIHK3KwQwgqzO84Vso+PDwEDQxke+zWReZ60+STVqKChwHhTYjRV4XnFL3gV4o2HAnN04hGIKmH5EMNoeCEFBOj1pszzhGBJ2smxfqUYWgNqZTPvk4iqYsy6pYAvEwrQFS0+hldlQjTRg03PfCgQs7lZclYSCRONMFJgbTwUCGMDSr5TUDEvYA4HKnOgQJJgKmkOXlaxxLJEX9sPCqTKupaaIvhl2a/xnIBHQoHbVVNM6udQdSxgYYlizoMCo9Vm72CUV6mbpKZ2F+vsD13KKXJASEQ2Byv63Bve3RC5dTEQSMcmjkOj7UUz7Bm5L9UUth4GAlGiqdqoafYiu7OsTlL5uq9zKAhAWX+j/HBOsWuGr0GTntWZypPPQUYQ82QJa4jbpt1rt6uGLvGKT2zaQgOAnCZfIXm1MCPXzmpE4yVJNIWpoBqkl7/d9sXuLMavEdXvtvamFmYcrIhpB7/85OVaLaATouZzLQJTGgoDxk3c9Bazq4zxyc2+DCfjklbQwC3t498vn121l610uRz5LKd/VEHBgNizl8+3bqs3dcwMucfQceAR6Ag+PZvlOVTdoJo4PY/IUmAldFdGdx07umo/VgPumDEYYxMOTN7zWdOyBmIUo1GihI25YAChgk6Pt1kaiuayPNHn9AG4tfWkw9gYgkaX8QYZDweoBcuOHXVaJ0qmSzSUbDhAl3LbO4+EU8jmJrqcDgdyXNL2/af3haIRHlNTMuFAGKPU1754usI6I0xN7gMwkmvY0Wh758zkm9wGkWxwIF3Sat9MRJ+fGrDU8HNhcOAOotc0zqfQd8ccsu4KBQP0QkP3ND5hFfPHI/n6CgQGYlym5tr9gtUqPt3KTYADCWXEKCzfZ52qETvPd0bBgaQyxRx150HrljyrsOnv7xFwQ0FUigtrycMO3k9HTxLWHbm8BzCCu60sp4sZjMNQ41aEpsjNEw+fKQ4eeOpqlj/Nyb54es0bCC01AhvRB51zgwaoqxnMEm01ograF6ONLQaXgA6cmgeqgU306ysplPPaVCpPNLQURB84+ToEWODm1f+2MXqKFFg6zHq+cmo9BGC9+szuVrZqcJsTu5vjggdGlLo4Ie9qK7rEUEX4HWmOe9EiR1z3S2M83vKyscA7Ej22qnrZrJ4lWeSqqn70gcmDaRT0J09CSXV1XflwW3K4lZvt1VVVdfX1NTODBVIHFu2trynPiuxJVlFGRlbuovLciMTggLjUlAnTxw5PGzhoSHcGDUy7JWLAbSnhybH/A/wLPQQyrzxY9jwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 1210000,
            actualAp: 44000,
            actualDps: 10076.33,
            magnification: "550%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2700000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAQECAgICAgIDAwIEAwIEBAUEBAQFBQYFBQUCBRQGBgYIBwcICAkNDBALECEQEBYZEAYSEhMTExMTExMWFBsWFh8eFQ8XFiEcGR8WGiwcGxsdHSAmGxQgHSIeHS4iIiImIho4HgMkIiglIyYxIhwoJislJjksKTEuKicvKycrLjgzLiowLjdJLBM1MytILRgwL0w2Mzs9ODJANzA7OEI9PDtQNyZAPjtBPjxPOTBHQjNMQyhCPlxePjFOSUNwQRNMTExpRzhVUEtUUlBuTkCFTQ5eW1WAUyFZXF5iX1mUVQ56WkhnY1+OWyGHYT1va2Nvb22jZSFxcW13dXGEc2Cxahl5d3GAfHS1cyeBgX+Fg4DJdxiNhHWhhFiPi4KUkYqVkYiYlY+/kFyhnJSioqGopJywrae3tbC+vLjHxcHhwavNysTV0cvW19Tc2tby2sXi4d375M7r6eXw7ujy8ev6+PL//ff///7FtqW6AAAAgHRSTlMArb/xDCw3av8heuXWihdeSv89nsn//56SeS1Y/+L/wf//Zabb//FHgv//0P////+n4F3//8SH////t///oP3v/+XKsf///v+I///h/////5rw////////vf//5///////8P///fr/pP/////Q/////////////////////////yM8W0wAAAV/SURBVFiFnVf/V9pWFI8tKn4BRA1OTTFos2nk+bRkUmy01BUUrFhrLC0isYymxCwJDMgyILn/+p7d7M7ZzqHEew4/hJPP59373ud+7gtFDYhgYOXHJ+O+Qa8Mjk3hOYmVB+NDr59vcZGt16sPJVjY2uKYF/j52kMJVtiIP97Oh+ceSjCPubzWTkQCDyUIYNVx/1SnRx+Env3h56d+A/5wyg+qYDl7c/0xmdB/d9Tk6dnemFf8fr12/vlm44VZLiePbm5VddcbfjW/7Auu3R6FhRe0/+h217ctrXsi8FG+499qpYtoTEiEN8r7FLW07C2F3S44evksyuMXW/SZXpn0BqeOwemZudPrZAynhcjpu7LurYLtDtjQen96mYmgNIodvLvsWCEPeN+Vlm2CXbn5mIzxiI8lb963YN9LBus1VTZAzV1fsnwiEcldv3GMCU81PO03C7aROf0Yj+Fo7OC0XF30hKf2wNJLmnz5Lh7BW1vxm3LW2ymOmtCyJalz8etBhBVjyduseeyJYNvpN+WEDsrlUYwXwhtnqulNylfgOJ92XOhcJMM8TaRo1j3pwHfudo1mNmtqlZyfpcPJcqL9wVMGo/m+2+/u7BQr+aiA+ZSUda0ZTwyhOujKpxOlno4KgsBLhaY3IVHUh2a2AVq9kY6yLOcvGXLrytt4WczKXbNrGwLNsqy/3pVqeW9SpObqsg0NlecRRjxuq4aKvDH45opgNRWaNBNK+SVXN0yP3hyS1EYrz/KY5QU2pVvWlTf8mFQrlPUsizBDkhB11ep4mZDBD8Viud5pIhaxDIcQ0nW6BcOLaabVamhFgDrNYYbGvMAXQHr0Bd4Oid9zSkUwdHBLNEmB53mMxW5nivrSmx0Kv374jIw0wwI7zSA6LzIcTnE6FGfGWsOlsPtLaMO2GwAmz3G0LNIcEukSNHOh/eH07Dv5bDpG13WrLKa5ejaMsMBIfZCGFcKeTRYnCdhZBtNpNe9HSODzFpjDNeToOQBYmtMHE5MSJKXgxxijrOl2hzrGyQa0e6C2iCdVWIFO16pFFiGM83WwjCGGy7bj6F0wNOj9XUFBUQoMJg1VkJ22dRX8Hn4PbNKEzVqfVKBjzKBaRcmHeYQ4qWQ7rebId/CLYEkWWHIHem4/z6bovCJVZYYlmyFJDdDt0vhgglWj0IZurQk9soXECRhiiorMkRq4UkEFs9mOLQ0kGE1Y4NR06Pcct0ineFY+31GqiMGYrxSrrl13pc2BBIEOuErJcfo9sBCNOVQ/XFOUFGloVClVe6DYWmmgmhf6oBHF9Pt9qBL5sClte1KRCRwJcrHUBV3vlqxngxgO21mT4HvQ4WmMmKy2OkP2gLiiKJekDjQUe/K36iBvDCXUu/UdqNIcjxlJGZ2tKkRHXLpaIbOhWz+klvSXAwhGJXDuEmgWBKI/XpGoWVlNMwKflpWiASCTdnimDbi8zyrkdtVznGoxzWImrR9Sy7KaZwSUrpVeGi7od+kfawNuG3et1IPW9hrZOUbS1glBXaIFQdycGCMEza8N+VYb4K++QxfcKyrIpBDWqjPUsmIU/QinZqgJHdr/JP/TQIPeg84yNc6Jwtz+Sx+1WjhZ8fNYXKSCujrkhD48IZ8avIiXKWJBE2PUBM1icY1a2hx2tvmC1CyDRO7eggkBEjfvLtDDxwIniOz9gqN3tow9jdYxBgnik/unWSJKQfRy1aVCNBLx/P2T7wnp7NSCFwIqwPLcN+8IxpPxRHx+0Pv/Dd+rTPLgW85j8Tc5Eq+Gnc7BieD2+8yb3Eho8muMB6KZzEEmd3FxMMRoDDz2kyBLZuL+fyMavftFyV/T3+OYCQTmRh7Nzz+dnpp6fB9TU1PT0/OPRgKBwOT/T/Mv7sGBFyKctwwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 825000,
            actualAp: 19250,
            actualDps: 2376.55,
            magnification: "550%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2700000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 78000,
            actualAp: 4800,
            actualDps: 6000.0,
            magnification: "6000%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "2550000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEDAAADAAADAQAEAQEEAQAEAQAEAQAFAQEFAQEHAgEHAwAJAwAKAwAKAwEKAwEMBAEPBQAPBgERBQAVBgAXBwAhCwAnDQApDAApDQArDgEsDwAuDwA6EwA9FAA/FQBHGABJGABKGAFPGgBSHQBXHQBhIABhIQBiIQBuJQBvJQB4KQCDLACOMACRMQGZMwCiNwCzPAG+QADMRQDZSQDkTQDuUAD3UwH/VADUXjutAAAAQHRSTlMABQocKxcRJDlAzzFPVuNFX2hx2IF5pP6StIjDqrrSZczw/tyr1fvo/8Hhlf/w0f//+P/+/ub+/v7/////////IzJmTQAABOZJREFUWIWdl+l6okoQhoOKS9Qoifs2BCZCciA0y0Dv3P9dTTUaI44oJ/0jT0T7pbrqq6UfHu6tRqvb0e7+6sb+wWa9GDV+DujM/NRfD9s/BvS3mWShaeg/tmCTSsHi3bRZe0ujMxqMWl+nbi9Ckec8sSd1CY3B7O3jbWN024XvG5OQy1yK1H6ueYr+NsQMx852NdABoU19nue55MluWCsW2tAh6o009c3VSNe08QfL1eLhrFMLMPqk6vdS8sw3J/324K34nOeZ2a11hOZ/5LAhlyx1tuMRxLH4SD9GtRSp/fojjoRc0NBerENxBAzqSXr0yb4A4LvUefJ48T+rC+j8xlKeECK1rIMTmDOulxKNszOADSKy0oLH/WnNjOi/k/zbhJy4SEhFClc1Afoi5CUTPAZAKeNZs54TtJGZnh0iJ14igMNjc9zTayHaz3bK5bcJsYtZhpC3t9eLXq1jNKc7PyX0CJE0cD0XZYSSxF8btYzQh4ut+REmmMlCT0lMeOFIGr9N66VEuzUyFkswpEB8C4Pjj0nNvNYaemsw2frkTFaKldXM66Mh3dUHy0sAHm5atQGA6L4flPxtBnGM/1HmdaOoByAkzkRBEWRfr7Q8aLCa05d9YQHPAi/hKhCZO3/s1dgNxXk47Bl24BUWYGs+tzLwJ93P50/ju9v13nRj2vZ6FxIPKwVkAJirrCLW3Ho17uxv9xamE2OM05iwIBZKjR4AXAgIc63gHkA3TD/japsUkIyBiqMkgevGXNVajO8AmlM7YWdRK86gosAPOSqJc9MHbeMtO68HPI5YXhIjtoe39o/N7LwaQCqhhOe1AY2hmYjS+yCEQXKSsxSCp/agGtDahOXXFQQP0SOUxihwX0bVBhgOlpeAXCjC0YHICmK72omdTXg8gDzPH0ECIByKC5zHn1Tt1wZvx84IEhBnDEGj6HAKESW8GtBe+QcPcBxFUUK+S2vOEpQxNaxEiHxWRqGzPHQhmXlBhDwvIqeIQpsMggSTdP/6/quyqPVMfPQVZkIwSOEzTQgSBwFC++WourSfponjW1nknndakDNjybKqomlt/dkpF8CcIY+Wn+R4WzGp6IMVDBOXKiJeelGV8bZ/ff/zzvetSJT3S4EiXn4Qb65WxPZ4l3BVPC50KGPES4+YM7nqw9YsZDlHdwEyXfeuNsfuOlLV5/IIBaBkgF8xZvSX4D8A8H8sCE4A+EokZvd6d9YnDvnndbmSfvHooE/OYGSuUJHWXYaEIvcy6jxIZM6oGnFgyAis6yFQC+42tmO/kgsAcUHcGWIqi1wU7xfVvb3RH44NMyv7QMQB2ITVHwgRF8ns1rVB0/SFX9KyxK5KT4awUlAqZLq83Ve1sY3Ief6hmBWeBIzMYg4j+3UdnwAD24vYV8hovHcTTLnAe6VnCjBiX5fR14KKRFkhRsFxCs3Mg4WQs4YxBa49RN4bmPtflwMAZCkmlFGcRdbL828QiSQJE/H2lglwvznpAPqqLKYzaKfOavVHqrtbzEiVlIvVmJwFodhMqeSYxRvjk1HOMi+Ko+2NEUuDvkahajFVujCMptCHKAlw9j5+z4IsQZ5loV3lvUNrdoez18JvQeC5MNLsPddCyPK8l9nL3nL3czXnPE16reunaHSfV7Pl+vHx8UWtp/IqnsF36+ViOvzW81+i5pL/7tImxQAAAABJRU5ErkJggg==",
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
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 2195.4,
            magnification: "6000%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "2550000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQECAQECAgIEBAQHBwgJCQgLCQkNCQkNCgoUExQWFRMhFxMhGxsgIiMiIiMnJClBHBkjKTMtKypVIhwsNEE3ODc3Oj5ENjI2PkJkMC0+R0dCR0lDTk5kRT1LVFVSWFpaWVdTXF90VklcZmhubm5ncnJweXuYbVV2g4N/i4ufiHqVlpq9kXSio6TGooetrrHer465ur3ouZjHyMjuxqvP0NLZ2tr/1bTj5OTs7e7x8vP5+vv///85z0iDAAAAQHRSTlMD1w/qHi1DoVFixHiet/7m0Hf9/+mV3vylu//+///M////5b7///7R/v/////0///+/////v/+//////////8ATbfs5AAABAdJREFUWIXtln13ojoQxikFBN9QKjcqRaxvmIJIIU0TScL3/1YbcNvqdrvCvffPHY8ejzA/n2cymaCU/zGUv4C/gP8FoJtjdzpbLFaL6djU1fYAC+xgFMuI4ijarxZuz1DbyFJKfeQHwWYPZXoUSVQEdwvXaqxF/pnSA4FfQaSUKKreMYRwNZOOLqQoqqn9Dlrfog9kfuDLV62khkgtcC8phnammAPb7mnfAGQlbC+oGN6HkqgGvRvSzNFQRu87QFmqZn/iVSqCX+xUH/u971T5Q9v6FlAxjJpRW/ElZbPbQ7hbPj4ud/FueI6vEq5XTDJGXpVcC5GGnuZzP3iae5WAh4fh0LgBqH7Qe4PJuxPJeNrJ8IfOcL7cLrtfq/jbnpEFGVXlrDnech7MHx7mx9f85auAb/dCLaSuyOPc8xznvvv8djr0qjVVlCaAdyHg8VHqAE6n85wf5TKM+tb64F422B8AMnT7n4Ht+Q5YOce3l629Hg2cQ/7S1z7ybgBM2XyqMUIMA5i/5tuUjc3l89Zx7L51bvQbgPPlUHAaBKfTKfcINsrp0dV6A/sMabJzdSS4iMCrJGz2JDXXp1l5LrPtdJsALMoLnjnHPH99DlIaHA6jn2mKYd6yUF2fFjglBGzzt7dnAAvP8Wa/mvwuDNeVDjCjCa8A+esRBAhGZN0QoB7yla6YWVHskgxsX8jb0elME0HchgA9Px3n9gpR0nEiACklGeiXbrJu2kjK9OV4nAMsQs2LQUSLAvsTrbyalzeKqE2XACA6NuMdgCnG6e6ygA0ApTZxRq5lHCgIkjiRE8afXI/Wm32g6aUxRQKCJNk/eUH65FxPpduNpLgZF5mz54TQFMuOnOjtAD0sBAYAc0QISlkWgNll0m2AiRjbgFiuQFGQtCjgMBi3ApRrkTqbrMCEcYoKcbDA5UI0AOjhxg4RQ5RzTJkI1Um/HaBUOt2YFohxBikXodK5rGKzk3ycyTXgIt1jzhNNbVfEKqaUk4ITmCHO0NUqNgMoIWfS/XqBECuI2R6gp4IxgYxxJgF0fHWtEUDONM7ZrDRTLK1M2wMWjMkK6qUWYY5Z2BqgQiEFLOSXFeGIpVcnbBOAkckSIGldDQlDPGu5mWQXFIzjWKYpK0KxQK0Ba8GLLFQqCwih9gA1ETyrHEgLafovFBhYUFxnKWGWUYHbAmQJCn4+ShY4I4JcPac0mQdc8PV5kuohIoJe9XKDmRhS/HGSqIuUZC0BpRXHn6KtLLYaPyP9jHERft6lI3r9qNYAELKL/aceira70SSX/6lBkY1bTSQlFPKxSFEVtYrS9GGSrazP4+3PANXqdQH07+/uP2M4dObO/cdK3AJ0OoNu9zL/7q7b7XR6H65+AEjUZYFbVXVIAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 1100000,
            actualAp: 33000,
            actualDps: 5156.25,
            magnification: "550%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2550000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAABAAABAQEBAQEBAQECAQEDAgEGAAEEAgMFAgEFAwMFBAMHBQUKBwYfCAkeCQoiCQgaDw0eDgwkDw4aFxYoEg5FBQgoFA4uEhEcHBw3EQ4WIBwdHR08FRYjIh41HBQ7GBgpJCFIGRszJCI6Ih5JGxdhExVFIx5EJyE0LzBYISNcIiF7GRw3Nzc8NzdqJSdgLCZMNzF2KCtoMChVOTVqMi2NIiVFRUV+LS82UVeVKSx2OTZxPy+KMzVOTk5STU2SNTZSUlKBQUGnMDOaOTxsUU5SXGCORjmkPD6EUk+bSzetQUFnYl9lZWW7Q0VpamqGX12lVT9ecopvcHC4W0PTTlF7eXnDZkmBgYGheGXPaUyLi4unhXHhcFLbeViTk5PseliZmZmfoKHQkXWkpKSpqam+ppWxsrK3t7fNs5+7u7vBwcHExcbjwqvKysrax7PPz8/V1dXvzrjb29v23MPj4+Po6Oj/5Mvr6+vv7+//7Nb19fX6+ff///8YXU45AAAAgHRSTlMAxe0NKZj/HUimNdtguIBxxf/pWoO0/5f+/8am2sSB/9Z4qP//kf/l/sbwtf/w//7d//+V/9///v/+/////8D/y///o////////v///v//1//////////////////////////////////////////p/////////////////////7w+pywAAAUdSURBVFiFnVZrU9paFMUGkaKiaGvVPvBB0VaqBVGEK0VyMWI0VKTQGI0aQxODCTcmxsTEk/PXb6jT3pn7oXPC/kAmM6yV/Vhn7RMI/DGwsdnJF9E//+dPEVnaPztrHS4N9YkPVy6uLi4vrloLfRLMNi5Pzi4vT64az/vCR5InZ61G6/Kk1XrRF0G44uEb+63G/tmX/jKonLTiyeJhsnKy31cbI5nWYe3bcaO6R20E+yHARkunj493N8YePt8PPPpq5FPl9vHOvUlk/CeAzW8cnh3GFs9vHv75POxfi5MfW5cXrXS8dvfj9C3mGx4Ivzy8OiumEllav/+RX/FdABb8ctXIJHB8a5+/vr05Xv0U9skwf7JfTJAUXtjeu7m7b1eOSv4YsI3MYSZLkURhu8I9PN4frx55x2n9b/QEPnxpxAmCKOH49l7n4eE8TS4ForyEnMar+VY8ReEEQeIlvHnrCund6TkujzzMyMh6bhincJzEicJWhX3oZJerzBz6ccCwjeg4RZAEUSjh6d1j6TRZrb5GhnsxtBBOH5FEOpHCjwrZ7c38t3Lcl6UEwyMEReDpVGx6azeer1U3l/EJPwRY4JU3Q5zazdTPi7G/mNhWiUj5k+OsR0CQy9fwRqqHQvli9nvBn5R+Emxvnm7Gms2961t6eTnuyxaDMZwkyFW2ukiXp/bub4/X/jrwZe1vUmmKJIvt5BSr0punB1O0UFz2YYvRQjpLkrsH5dDaGsNPxZp8s54kJtEJPuCpLElQmVCMFoV6U27WeD2/5aOGl6VCliCpmVhpmm5XoVsNcTC/vIFOEEl4B5EgEwVqta00oVymqzST89WEElGiSilq9UCBUrnG8rV8txyPoBMMpanSUTq1W5BVqNOCUtfFLnfuQ0qRFEXurhVXpa5pSQJQypCXpOt19ARyycL32bd7vKZDXeFZvi6uiRqDTIBt5KILqfBXUbeAo6oaK3Ac3TZr71EJPhSfB4awSYk3gAVlGbiW7iqsgUzwvjjee+woouNYgNdMW++aBmfUEKcwWZzo7bIgK0nABjILDUcRHNDWv6LhI8X4T+t4J3OKVwEvQhVKbWBJGo+2IzdST+PeUVnNsR1GNxTIsVBXFRFJiQu5J/cPcx3edFyFgZoCGQZ2jY6I1IOJgafnisqJXgUsD7vdn7+2wCMpMfiU5xCtsx1oO3QXdjXAdlzVltp+7jljosKrrtulbVcxDFYHmqlJ6FL2WqgJguVAgXUdyVJpE+iG3kXfzoEIp3EycFxOhIYIZdoCum6qiELoxXtFbJuOYzKaq0lQ8jIwVKDSyJclrKlzMrTcLmM73Q6UWAOYMtAY5OXUa6HekyEDHKkDRVYDTsfWOGRf3lEFwVMhpHlgtzueEFUAOobWRh1DkPUqcC3HpFVH51XQ7BFIXUNAHsNXvVeBqzQtR2VNs8x2AZA7jog8hndSx7a9FtSBrbCOXuY8ArXjvaMa+1DNdS0LMjQwFRaoeVYGQBMgU0f25REJQuDU2rapc1AcbMsutBjI5NE3Q3BHhmbZcnSGt9cDOzo06nNO9Zmfa3ckT4cYpz72+p1X0ko58SaaHxvxgQ9gE9Pj2OtfkPHVuN/79lh2e+m/jN9ks598fT+AfT4oVd79flsqEWTl8woqx1AkMpirJIsfR0cHejE6EC+kN/OV/cwgCjz4LORFMreZmwn9iqnFqcWZmZlkKIRAgYVHooPPR9/OzQ0/+x3DwwOjo4PRsZH/H+l/AQoofSqglHFcAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 495000,
            actualAp: 33000,
            actualDps: 7500.02,
            magnification: "550%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2550000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 15615,
            actualDps: 29278.1,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "2400000%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 45000,
            actualAp: 22000,
            actualDps: 17837.8,
            magnification: "1000%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "2400000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgICAgICAgICAgICAgEDAgMDAgMDAwMDAwMDAwMDBAYEBAQEBAQEBAMFBQYFBQYGBQYGBggGBgsHBwgICAoJCAcLCAYICQsJCQoJCQkKCQwKCQwGCRkJCg0KCgsKCg0KCw0LCwoLCw8LCw4IDBUQCwcLDQ8MDBENDQ4NDQ4QDAkODg8NDhMODhMODhMCEC0PDxUPDxMQDxQNERgQEBUREBERERYSERMUEQ8UERAPEiIUExQTExoSFBwUFBcYFBIWFRgbFQ8WFh0XFxgaFhQWFx4XFxwYGBgZGRkbGBoXGSIWGScZGSAaGR4ZGiIeGR0ZGyQaGyIaGyQbGyMkHREcHSYeHyYgHyEiHxwfICghICMfICkfICkfICkcITAnIRwgIi0mISApIRsiIy0kJCUiJC4jJDAmJCcjJS8eJjskJjAkJjEnJyUuJiEqJywmKDQvKCMtKSYuKSomKUAoKjY3KB0qLDgtLDE0LhwrLTkuLi4yLi4qLkMvLzM3LiguLzwvMD4uMzs3MS8wMkA9MSUzMzcxM0JANRE5NSw1NjcxNUouNVY0NkQ2Nj05NzZBNS00N0c3OTpHNiE1OEg5Oj06OUA3OUlCODRFOSo2Ok9DOTM4O0wyPVg6PU5DPDtDPi87Pk5KPDM/QEFAQEI8P1FNQRtDQUQ+QVNIQTw/QlRARFZERkxCRVlRRDlHSElLR0RER1tJSk1HSl5KTExOTk5QUVVaUktmWCtWV15YWVtdYWZgZGZuYFdiZGZtZkxnaG16bjx9a16GaVdvcW+Bb2GJblx3en+RdmR8f4KTfWx/goqFiI6JjI+kiXepinOPkpWkjXqPkpqtjnmYm6O2mYKio6O8noS/pI/Rp4SwsLLIq5HYs5i/xsXjvZ/qw6Tn0K/w2bjf5uj/68b+//////8Lu7VZAAABAHRSTlMAAgcRNjpHc5WivsjW5ev/IHoADBpMZfK5UBUqL15uJY6ogtHdfUFZ/wCHtpf/c7Ac/57EN4Wr9dR63KdRuADApPa1vf+2nf8A1f/wlKmw5P96o0yR////0rJox1Pgvfj/qv8/1+j/y/v2/wDZ/8L//+TqAP//0/D4/4j/ov//cPwA/+P/9P+K7v//Nr3//////////2b///+2///x/////////3X/////////zLf/tP//////7v////////9fkf////8A//////92AP///+rI/////6T/2f++////////////4ub+///H/9jn/////////////////////v////8AL8LRDgAABMxJREFUWIWd13tUFFUcB/ArkJwkRV5r8pIQlEFByLfJnFKPpOlpU2CljrRpWD7Q1RbS0M1Ix8OkrcPZiGZyDlOdrjo2OYW3sSWnplmwsITMKMvSQqIys3xkL20k0D/sj/3x/Wfu2XPnc+797T333kFXbgi6noSHVq8pGYmie3Nj5yvoxp+udY+mSmuXrFtXGXUNBAIoIf+9jra2Hesf601wwPUZDI3suPTrH11bPny/J9ARJLf/0v5V1zeT4vs6hREdJ3776eeugrjQvgBW/9AHj1+68M8PsXEJIKCns0X0j+y6eOHPZ6jEkL4ANIVCq9qP//Ut6hcCWwe9AI2yvbNPnHNOp1CfgPj7KrzcpvaLjVnZvTWETIHK3KwQwgqzO84Vso+PDwEDQxke+zWReZ60+STVqKChwHhTYjRV4XnFL3gV4o2HAnN04hGIKmH5EMNoeCEFBOj1pszzhGBJ2smxfqUYWgNqZTPvk4iqYsy6pYAvEwrQFS0+hldlQjTRg03PfCgQs7lZclYSCRONMFJgbTwUCGMDSr5TUDEvYA4HKnOgQJJgKmkOXlaxxLJEX9sPCqTKupaaIvhl2a/xnIBHQoHbVVNM6udQdSxgYYlizoMCo9Vm72CUV6mbpKZ2F+vsD13KKXJASEQ2Byv63Bve3RC5dTEQSMcmjkOj7UUz7Bm5L9UUth4GAlGiqdqoafYiu7OsTlL5uq9zKAhAWX+j/HBOsWuGr0GTntWZypPPQUYQ82QJa4jbpt1rt6uGLvGKT2zaQgOAnCZfIXm1MCPXzmpE4yVJNIWpoBqkl7/d9sXuLMavEdXvtvamFmYcrIhpB7/85OVaLaATouZzLQJTGgoDxk3c9Bazq4zxyc2+DCfjklbQwC3t498vn121l610uRz5LKd/VEHBgNizl8+3bqs3dcwMucfQceAR6Ag+PZvlOVTdoJo4PY/IUmAldFdGdx07umo/VgPumDEYYxMOTN7zWdOyBmIUo1GihI25YAChgk6Pt1kaiuayPNHn9AG4tfWkw9gYgkaX8QYZDweoBcuOHXVaJ0qmSzSUbDhAl3LbO4+EU8jmJrqcDgdyXNL2/af3haIRHlNTMuFAGKPU1754usI6I0xN7gMwkmvY0Wh758zkm9wGkWxwIF3Sat9MRJ+fGrDU8HNhcOAOotc0zqfQd8ccsu4KBQP0QkP3ND5hFfPHI/n6CgQGYlym5tr9gtUqPt3KTYADCWXEKCzfZ52qETvPd0bBgaQyxRx150HrljyrsOnv7xFwQ0FUigtrycMO3k9HTxLWHbm8BzCCu60sp4sZjMNQ41aEpsjNEw+fKQ4eeOpqlj/Nyb54es0bCC01AhvRB51zgwaoqxnMEm01ograF6ONLQaXgA6cmgeqgU306ysplPPaVCpPNLQURB84+ToEWODm1f+2MXqKFFg6zHq+cmo9BGC9+szuVrZqcJsTu5vjggdGlLo4Ie9qK7rEUEX4HWmOe9EiR1z3S2M83vKyscA7Ej22qnrZrJ4lWeSqqn70gcmDaRT0J09CSXV1XflwW3K4lZvt1VVVdfX1NTODBVIHFu2trynPiuxJVlFGRlbuovLciMTggLjUlAnTxw5PGzhoSHcGDUy7JWLAbSnhybH/A/wLPQQyrzxY9jwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 1100000,
            actualAp: 40000,
            actualDps: 9160.3,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2400000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAQECAgICAgIDAwIEAwIEBAUEBAQFBQYFBQUCBRQGBgYIBwcICAkNDBALECEQEBYZEAYSEhMTExMTExMWFBsWFh8eFQ8XFiEcGR8WGiwcGxsdHSAmGxQgHSIeHS4iIiImIho4HgMkIiglIyYxIhwoJislJjksKTEuKicvKycrLjgzLiowLjdJLBM1MytILRgwL0w2Mzs9ODJANzA7OEI9PDtQNyZAPjtBPjxPOTBHQjNMQyhCPlxePjFOSUNwQRNMTExpRzhVUEtUUlBuTkCFTQ5eW1WAUyFZXF5iX1mUVQ56WkhnY1+OWyGHYT1va2Nvb22jZSFxcW13dXGEc2Cxahl5d3GAfHS1cyeBgX+Fg4DJdxiNhHWhhFiPi4KUkYqVkYiYlY+/kFyhnJSioqGopJywrae3tbC+vLjHxcHhwavNysTV0cvW19Tc2tby2sXi4d375M7r6eXw7ujy8ev6+PL//ff///7FtqW6AAAAgHRSTlMArb/xDCw3av8heuXWihdeSv89nsn//56SeS1Y/+L/wf//Zabb//FHgv//0P////+n4F3//8SH////t///oP3v/+XKsf///v+I///h/////5rw////////vf//5///////8P///fr/pP/////Q/////////////////////////yM8W0wAAAV/SURBVFiFnVf/V9pWFI8tKn4BRA1OTTFos2nk+bRkUmy01BUUrFhrLC0isYymxCwJDMgyILn/+p7d7M7ZzqHEew4/hJPP59373ud+7gtFDYhgYOXHJ+O+Qa8Mjk3hOYmVB+NDr59vcZGt16sPJVjY2uKYF/j52kMJVtiIP97Oh+ceSjCPubzWTkQCDyUIYNVx/1SnRx+Env3h56d+A/5wyg+qYDl7c/0xmdB/d9Tk6dnemFf8fr12/vlm44VZLiePbm5VddcbfjW/7Auu3R6FhRe0/+h217ctrXsi8FG+499qpYtoTEiEN8r7FLW07C2F3S44evksyuMXW/SZXpn0BqeOwemZudPrZAynhcjpu7LurYLtDtjQen96mYmgNIodvLvsWCEPeN+Vlm2CXbn5mIzxiI8lb963YN9LBus1VTZAzV1fsnwiEcldv3GMCU81PO03C7aROf0Yj+Fo7OC0XF30hKf2wNJLmnz5Lh7BW1vxm3LW2ymOmtCyJalz8etBhBVjyduseeyJYNvpN+WEDsrlUYwXwhtnqulNylfgOJ92XOhcJMM8TaRo1j3pwHfudo1mNmtqlZyfpcPJcqL9wVMGo/m+2+/u7BQr+aiA+ZSUda0ZTwyhOujKpxOlno4KgsBLhaY3IVHUh2a2AVq9kY6yLOcvGXLrytt4WczKXbNrGwLNsqy/3pVqeW9SpObqsg0NlecRRjxuq4aKvDH45opgNRWaNBNK+SVXN0yP3hyS1EYrz/KY5QU2pVvWlTf8mFQrlPUsizBDkhB11ep4mZDBD8Viud5pIhaxDIcQ0nW6BcOLaabVamhFgDrNYYbGvMAXQHr0Bd4Oid9zSkUwdHBLNEmB53mMxW5nivrSmx0Kv374jIw0wwI7zSA6LzIcTnE6FGfGWsOlsPtLaMO2GwAmz3G0LNIcEukSNHOh/eH07Dv5bDpG13WrLKa5ejaMsMBIfZCGFcKeTRYnCdhZBtNpNe9HSODzFpjDNeToOQBYmtMHE5MSJKXgxxijrOl2hzrGyQa0e6C2iCdVWIFO16pFFiGM83WwjCGGy7bj6F0wNOj9XUFBUQoMJg1VkJ22dRX8Hn4PbNKEzVqfVKBjzKBaRcmHeYQ4qWQ7rebId/CLYEkWWHIHem4/z6bovCJVZYYlmyFJDdDt0vhgglWj0IZurQk9soXECRhiiorMkRq4UkEFs9mOLQ0kGE1Y4NR06Pcct0ineFY+31GqiMGYrxSrrl13pc2BBIEOuErJcfo9sBCNOVQ/XFOUFGloVClVe6DYWmmgmhf6oBHF9Pt9qBL5sClte1KRCRwJcrHUBV3vlqxngxgO21mT4HvQ4WmMmKy2OkP2gLiiKJekDjQUe/K36iBvDCXUu/UdqNIcjxlJGZ2tKkRHXLpaIbOhWz+klvSXAwhGJXDuEmgWBKI/XpGoWVlNMwKflpWiASCTdnimDbi8zyrkdtVznGoxzWImrR9Sy7KaZwSUrpVeGi7od+kfawNuG3et1IPW9hrZOUbS1glBXaIFQdycGCMEza8N+VYb4K++QxfcKyrIpBDWqjPUsmIU/QinZqgJHdr/JP/TQIPeg84yNc6Jwtz+Sx+1WjhZ8fNYXKSCujrkhD48IZ8avIiXKWJBE2PUBM1icY1a2hx2tvmC1CyDRO7eggkBEjfvLtDDxwIniOz9gqN3tow9jdYxBgnik/unWSJKQfRy1aVCNBLx/P2T7wnp7NSCFwIqwPLcN+8IxpPxRHx+0Pv/Dd+rTPLgW85j8Tc5Eq+Gnc7BieD2+8yb3Eho8muMB6KZzEEmd3FxMMRoDDz2kyBLZuL+fyMavftFyV/T3+OYCQTmRh7Nzz+dnpp6fB9TU1PT0/OPRgKBwOT/T/Mv7sGBFyKctwwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 17500,
            actualDps: 2160.5,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2400000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 70200,
            actualAp: 4320,
            actualDps: 5400.0,
            magnification: "5400%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "2250000%",
            isBoss: false
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
            actualHp: 27000,
            actualAp: 2700,
            actualDps: 1975.86,
            magnification: "5400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "2250000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQECAQECAgIEBAQHBwgJCQgLCQkNCQkNCgoUExQWFRMhFxMhGxsgIiMiIiMnJClBHBkjKTMtKypVIhwsNEE3ODc3Oj5ENjI2PkJkMC0+R0dCR0lDTk5kRT1LVFVSWFpaWVdTXF90VklcZmhubm5ncnJweXuYbVV2g4N/i4ufiHqVlpq9kXSio6TGooetrrHer465ur3ouZjHyMjuxqvP0NLZ2tr/1bTj5OTs7e7x8vP5+vv///85z0iDAAAAQHRSTlMD1w/qHi1DoVFixHiet/7m0Hf9/+mV3vylu//+///M////5b7///7R/v/////0///+/////v/+//////////8ATbfs5AAABAdJREFUWIXtln13ojoQxikFBN9QKjcqRaxvmIJIIU0TScL3/1YbcNvqdrvCvffPHY8ejzA/n2cymaCU/zGUv4C/gP8FoJtjdzpbLFaL6djU1fYAC+xgFMuI4ijarxZuz1DbyFJKfeQHwWYPZXoUSVQEdwvXaqxF/pnSA4FfQaSUKKreMYRwNZOOLqQoqqn9Dlrfog9kfuDLV62khkgtcC8phnammAPb7mnfAGQlbC+oGN6HkqgGvRvSzNFQRu87QFmqZn/iVSqCX+xUH/u971T5Q9v6FlAxjJpRW/ElZbPbQ7hbPj4ud/FueI6vEq5XTDJGXpVcC5GGnuZzP3iae5WAh4fh0LgBqH7Qe4PJuxPJeNrJ8IfOcL7cLrtfq/jbnpEFGVXlrDnech7MHx7mx9f85auAb/dCLaSuyOPc8xznvvv8djr0qjVVlCaAdyHg8VHqAE6n85wf5TKM+tb64F422B8AMnT7n4Ht+Q5YOce3l629Hg2cQ/7S1z7ybgBM2XyqMUIMA5i/5tuUjc3l89Zx7L51bvQbgPPlUHAaBKfTKfcINsrp0dV6A/sMabJzdSS4iMCrJGz2JDXXp1l5LrPtdJsALMoLnjnHPH99DlIaHA6jn2mKYd6yUF2fFjglBGzzt7dnAAvP8Wa/mvwuDNeVDjCjCa8A+esRBAhGZN0QoB7yla6YWVHskgxsX8jb0elME0HchgA9Px3n9gpR0nEiACklGeiXbrJu2kjK9OV4nAMsQs2LQUSLAvsTrbyalzeKqE2XACA6NuMdgCnG6e6ygA0ApTZxRq5lHCgIkjiRE8afXI/Wm32g6aUxRQKCJNk/eUH65FxPpduNpLgZF5mz54TQFMuOnOjtAD0sBAYAc0QISlkWgNll0m2AiRjbgFiuQFGQtCjgMBi3ApRrkTqbrMCEcYoKcbDA5UI0AOjhxg4RQ5RzTJkI1Um/HaBUOt2YFohxBikXodK5rGKzk3ycyTXgIt1jzhNNbVfEKqaUk4ITmCHO0NUqNgMoIWfS/XqBECuI2R6gp4IxgYxxJgF0fHWtEUDONM7ZrDRTLK1M2wMWjMkK6qUWYY5Z2BqgQiEFLOSXFeGIpVcnbBOAkckSIGldDQlDPGu5mWQXFIzjWKYpK0KxQK0Ba8GLLFQqCwih9gA1ETyrHEgLafovFBhYUFxnKWGWUYHbAmQJCn4+ShY4I4JcPac0mQdc8PV5kuohIoJe9XKDmRhS/HGSqIuUZC0BpRXHn6KtLLYaPyP9jHERft6lI3r9qNYAELKL/aceira70SSX/6lBkY1bTSQlFPKxSFEVtYrS9GGSrazP4+3PANXqdQH07+/uP2M4dObO/cdK3AJ0OoNu9zL/7q7b7XR6H65+AEjUZYFbVXVIAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 30000,
            actualDps: 4687.5,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2250000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAABAAABAQEBAQEBAQECAQEDAgEGAAEEAgMFAgEFAwMFBAMHBQUKBwYfCAkeCQoiCQgaDw0eDgwkDw4aFxYoEg5FBQgoFA4uEhEcHBw3EQ4WIBwdHR08FRYjIh41HBQ7GBgpJCFIGRszJCI6Ih5JGxdhExVFIx5EJyE0LzBYISNcIiF7GRw3Nzc8NzdqJSdgLCZMNzF2KCtoMChVOTVqMi2NIiVFRUV+LS82UVeVKSx2OTZxPy+KMzVOTk5STU2SNTZSUlKBQUGnMDOaOTxsUU5SXGCORjmkPD6EUk+bSzetQUFnYl9lZWW7Q0VpamqGX12lVT9ecopvcHC4W0PTTlF7eXnDZkmBgYGheGXPaUyLi4unhXHhcFLbeViTk5PseliZmZmfoKHQkXWkpKSpqam+ppWxsrK3t7fNs5+7u7vBwcHExcbjwqvKysrax7PPz8/V1dXvzrjb29v23MPj4+Po6Oj/5Mvr6+vv7+//7Nb19fX6+ff///8YXU45AAAAgHRSTlMAxe0NKZj/HUimNdtguIBxxf/pWoO0/5f+/8am2sSB/9Z4qP//kf/l/sbwtf/w//7d//+V/9///v/+/////8D/y///o////////v///v//1//////////////////////////////////////////p/////////////////////7w+pywAAAUdSURBVFiFnVZrU9paFMUGkaKiaGvVPvBB0VaqBVGEK0VyMWI0VKTQGI0aQxODCTcmxsTEk/PXb6jT3pn7oXPC/kAmM6yV/Vhn7RMI/DGwsdnJF9E//+dPEVnaPztrHS4N9YkPVy6uLi4vrloLfRLMNi5Pzi4vT64az/vCR5InZ61G6/Kk1XrRF0G44uEb+63G/tmX/jKonLTiyeJhsnKy31cbI5nWYe3bcaO6R20E+yHARkunj493N8YePt8PPPpq5FPl9vHOvUlk/CeAzW8cnh3GFs9vHv75POxfi5MfW5cXrXS8dvfj9C3mGx4Ivzy8OiumEllav/+RX/FdABb8ctXIJHB8a5+/vr05Xv0U9skwf7JfTJAUXtjeu7m7b1eOSv4YsI3MYSZLkURhu8I9PN4frx55x2n9b/QEPnxpxAmCKOH49l7n4eE8TS4ForyEnMar+VY8ReEEQeIlvHnrCund6TkujzzMyMh6bhincJzEicJWhX3oZJerzBz6ccCwjeg4RZAEUSjh6d1j6TRZrb5GhnsxtBBOH5FEOpHCjwrZ7c38t3Lcl6UEwyMEReDpVGx6azeer1U3l/EJPwRY4JU3Q5zazdTPi7G/mNhWiUj5k+OsR0CQy9fwRqqHQvli9nvBn5R+Emxvnm7Gms2961t6eTnuyxaDMZwkyFW2ukiXp/bub4/X/jrwZe1vUmmKJIvt5BSr0punB1O0UFz2YYvRQjpLkrsH5dDaGsNPxZp8s54kJtEJPuCpLElQmVCMFoV6U27WeD2/5aOGl6VCliCpmVhpmm5XoVsNcTC/vIFOEEl4B5EgEwVqta00oVymqzST89WEElGiSilq9UCBUrnG8rV8txyPoBMMpanSUTq1W5BVqNOCUtfFLnfuQ0qRFEXurhVXpa5pSQJQypCXpOt19ARyycL32bd7vKZDXeFZvi6uiRqDTIBt5KILqfBXUbeAo6oaK3Ac3TZr71EJPhSfB4awSYk3gAVlGbiW7iqsgUzwvjjee+woouNYgNdMW++aBmfUEKcwWZzo7bIgK0nABjILDUcRHNDWv6LhI8X4T+t4J3OKVwEvQhVKbWBJGo+2IzdST+PeUVnNsR1GNxTIsVBXFRFJiQu5J/cPcx3edFyFgZoCGQZ2jY6I1IOJgafnisqJXgUsD7vdn7+2wCMpMfiU5xCtsx1oO3QXdjXAdlzVltp+7jljosKrrtulbVcxDFYHmqlJ6FL2WqgJguVAgXUdyVJpE+iG3kXfzoEIp3EycFxOhIYIZdoCum6qiELoxXtFbJuOYzKaq0lQ8jIwVKDSyJclrKlzMrTcLmM73Q6UWAOYMtAY5OXUa6HekyEDHKkDRVYDTsfWOGRf3lEFwVMhpHlgtzueEFUAOobWRh1DkPUqcC3HpFVH51XQ7BFIXUNAHsNXvVeBqzQtR2VNs8x2AZA7jog8hndSx7a9FtSBrbCOXuY8ArXjvaMa+1DNdS0LMjQwFRaoeVYGQBMgU0f25REJQuDU2rapc1AcbMsutBjI5NE3Q3BHhmbZcnSGt9cDOzo06nNO9Zmfa3ckT4cYpz72+p1X0ko58SaaHxvxgQ9gE9Pj2OtfkPHVuN/79lh2e+m/jN9ks598fT+AfT4oVd79flsqEWTl8woqx1AkMpirJIsfR0cHejE6EC+kN/OV/cwgCjz4LORFMreZmwn9iqnFqcWZmZlkKIRAgYVHooPPR9/OzQ0/+x3DwwOjo4PRsZH/H+l/AQoofSqglHFcAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 30000,
            actualDps: 6818.2,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2250000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQEBAQFBQUFBQUGBgYGBgYGBgYGBgYICAgLCwsODg4ODg4PDw8RERERERESEhITEhITExMXFxcYGBgaGhoaGhocHBwvFRUeHh4gICAhISElJSUmJiYpKSktLS1cGxsxMTFsJiayEhKkRxZDAAAAQHRSTlMAAgQJDxQYHyYsNOc8/0ZOW2TV4VNscniAjpSZoMz6vv+nrbXz/8XW/87m+OD/2v/p7v/0///6///8////////8keQagAABOBJREFUWIWVV4tW4jAQXSnIQ4qwAoLyiGBkZBkCqSElkfX//2qntDzaBmXjOYjAXCZ37twZf/264hSKlfp9s9muV4o313w+c7xKuz99Xy4Wy+G0Vy/+b/hNuTVZBMbs6Jjt+q1b/r8kvFp/sbE7o6WUKrS77fyp8j8IXmOyDq0Gxnw6DKS160GtcHV8oT4NrMF9tB9DhDYYVK/OoTIIbMj988O1XfWuZfK2t7I6He/7YMxb/boUiq2lCbPxvi9268erUig03jYGcvE+N5tp5RqAyktgHfE+02Z5zR2K3dU5/2cHzbz9cyUL9bdt6EqA7hCuu96PALf9wEVAXMng+UcWvfbMKOcF6MjtW+0HEm6qL9kEeFxQDvQjX5/K3wOU+ysr0gkAxjUQAnzm33W+ZaH0ODc6cwFUQF/PmNCSMTYafJdCqTVTWQmClIzDh1KhCT8+P0bPtxfDvUp3lpcgD5U0f7/+7kKpPr8+L2dQIAdabQ1mmWcqDHd/vz4lMYCfH3xYvxBffSYHcrSQzziH8IOMifkckd21nCwWaoO1sdIRH4MwYa3iXBocDVwkFOoTchC4JKBIBRhaAaHi/rDm+v5JzoHS8cipFJwhfeauk4u/qQ6C3XfxIPftyXj0+PqUA7jtr/MOlgbYvwuI9DiaZuOLnUU2ngPle1QEQ4jvIfdtNszGt96zBsBASKXFEXTPLgNSI0AOoNB4z8uPRE/FT8FyZayxWrDROEPAc2CF++ZUtKSVfQAVCqWEMuK1n4r3msuLBgJJZ4LgYBSwiBilZvcpgOrUaeHxEWafG1qlVZSDIQ5GL6luKvXWNmvB/EReKGCfyc4AVzYMDbCH5nkvEIPGZBXAT5LG/ZuMRwqkBxLj63MqAbLgXW4G8FP90OAZPOd8NK4X0gnYPANMHl/iRnKEWFLAEP+M26lm9h7XO8xzJ4+vca1BakV+CigE3k0aaTMoDbY5BqLE5eFWDKnHgQSgFAYP48dqZrLV3ozLQ0Dj4RIiUuNel+uXZjW37FENZD6eSAgPl8BEzkzPXVbWmLlVzMPDcDkChKuWYzDfL61w+sAhjqSEB4COA6C9tOiKP8bRE0h+r10AzcWFPuAaD6nET0A7V4P2MgsA8Sg9AoA5AAQ9B0D9PTuJQO/98+wKsZZBb1xDsTLdqmwKypD3iwOJPEHiajtxbGjFpyCnRIa0IquDx3CdKE1ux46B4nVWFvII6lhFSj1ZF9C8O6ZqobG0Ml8HkEcAdtgXwCwbjvWoPNk4uolFIzA5IqkTmJVrRyRLtSJvCGcAmADQjuic67dEY54FLVgOgITg2hFvyJOyeyngqRtPdcTNc8kBQLa8MlR5dsqCKxAnfTGV1BE2U+d2dFPpLzfWSESBGNkxrTHI9WnWYCI10DP3ql4oN19mqwBpCaItghGOIDR9vJZInopw0biwqnvlRmf8h1ZJml0oUUQeevQ0TJLhejOuuuMjIjrLKFEeXYKRAwuVfC1ncVfQlqxn7vVsz0P9fbM34ngNoEUCePL/olCUCwNUwe+uswjEgeeVmvOzUtIkoe2EUok2EohuJRTcTVvVUrHoeVkevWq71e1NXs+tEXhUEIwmMiFJJQUfPUwHT/3eY6fZKKeZLN73BpPpePibzsP5Wczn87M/fw+Hw/F4+vLUrSVM/ANKmgjaouIsOAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 14053,
            actualDps: 26350.29,
            magnification: "450%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "2100000%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 40500,
            actualAp: 19800,
            actualDps: 16054.02,
            magnification: "900%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "2100000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgICAgICAgICAgICAgEDAgMDAgMDAwMDAwMDAwMDBAYEBAQEBAQEBAMFBQYFBQYGBQYGBggGBgsHBwgICAoJCAcLCAYICQsJCQoJCQkKCQwKCQwGCRkJCg0KCgsKCg0KCw0LCwoLCw8LCw4IDBUQCwcLDQ8MDBENDQ4NDQ4QDAkODg8NDhMODhMODhMCEC0PDxUPDxMQDxQNERgQEBUREBERERYSERMUEQ8UERAPEiIUExQTExoSFBwUFBcYFBIWFRgbFQ8WFh0XFxgaFhQWFx4XFxwYGBgZGRkbGBoXGSIWGScZGSAaGR4ZGiIeGR0ZGyQaGyIaGyQbGyMkHREcHSYeHyYgHyEiHxwfICghICMfICkfICkfICkcITAnIRwgIi0mISApIRsiIy0kJCUiJC4jJDAmJCcjJS8eJjskJjAkJjEnJyUuJiEqJywmKDQvKCMtKSYuKSomKUAoKjY3KB0qLDgtLDE0LhwrLTkuLi4yLi4qLkMvLzM3LiguLzwvMD4uMzs3MS8wMkA9MSUzMzcxM0JANRE5NSw1NjcxNUouNVY0NkQ2Nj05NzZBNS00N0c3OTpHNiE1OEg5Oj06OUA3OUlCODRFOSo2Ok9DOTM4O0wyPVg6PU5DPDtDPi87Pk5KPDM/QEFAQEI8P1FNQRtDQUQ+QVNIQTw/QlRARFZERkxCRVlRRDlHSElLR0RER1tJSk1HSl5KTExOTk5QUVVaUktmWCtWV15YWVtdYWZgZGZuYFdiZGZtZkxnaG16bjx9a16GaVdvcW+Bb2GJblx3en+RdmR8f4KTfWx/goqFiI6JjI+kiXepinOPkpWkjXqPkpqtjnmYm6O2mYKio6O8noS/pI/Rp4SwsLLIq5HYs5i/xsXjvZ/qw6Tn0K/w2bjf5uj/68b+//////8Lu7VZAAABAHRSTlMAAgcRNjpHc5WivsjW5ev/IHoADBpMZfK5UBUqL15uJY6ogtHdfUFZ/wCHtpf/c7Ac/57EN4Wr9dR63KdRuADApPa1vf+2nf8A1f/wlKmw5P96o0yR////0rJox1Pgvfj/qv8/1+j/y/v2/wDZ/8L//+TqAP//0/D4/4j/ov//cPwA/+P/9P+K7v//Nr3//////////2b///+2///x/////////3X/////////zLf/tP//////7v////////9fkf////8A//////92AP///+rI/////6T/2f++////////////4ub+///H/9jn/////////////////////v////8AL8LRDgAABMxJREFUWIWd13tUFFUcB/ArkJwkRV5r8pIQlEFByLfJnFKPpOlpU2CljrRpWD7Q1RbS0M1Ix8OkrcPZiGZyDlOdrjo2OYW3sSWnplmwsITMKMvSQqIys3xkL20k0D/sj/3x/Wfu2XPnc+797T333kFXbgi6noSHVq8pGYmie3Nj5yvoxp+udY+mSmuXrFtXGXUNBAIoIf+9jra2Hesf601wwPUZDI3suPTrH11bPny/J9ARJLf/0v5V1zeT4vs6hREdJ3776eeugrjQvgBW/9AHj1+68M8PsXEJIKCns0X0j+y6eOHPZ6jEkL4ANIVCq9qP//Ut6hcCWwe9AI2yvbNPnHNOp1CfgPj7KrzcpvaLjVnZvTWETIHK3KwQwgqzO84Vso+PDwEDQxke+zWReZ60+STVqKChwHhTYjRV4XnFL3gV4o2HAnN04hGIKmH5EMNoeCEFBOj1pszzhGBJ2smxfqUYWgNqZTPvk4iqYsy6pYAvEwrQFS0+hldlQjTRg03PfCgQs7lZclYSCRONMFJgbTwUCGMDSr5TUDEvYA4HKnOgQJJgKmkOXlaxxLJEX9sPCqTKupaaIvhl2a/xnIBHQoHbVVNM6udQdSxgYYlizoMCo9Vm72CUV6mbpKZ2F+vsD13KKXJASEQ2Byv63Bve3RC5dTEQSMcmjkOj7UUz7Bm5L9UUth4GAlGiqdqoafYiu7OsTlL5uq9zKAhAWX+j/HBOsWuGr0GTntWZypPPQUYQ82QJa4jbpt1rt6uGLvGKT2zaQgOAnCZfIXm1MCPXzmpE4yVJNIWpoBqkl7/d9sXuLMavEdXvtvamFmYcrIhpB7/85OVaLaATouZzLQJTGgoDxk3c9Bazq4zxyc2+DCfjklbQwC3t498vn121l610uRz5LKd/VEHBgNizl8+3bqs3dcwMucfQceAR6Ag+PZvlOVTdoJo4PY/IUmAldFdGdx07umo/VgPumDEYYxMOTN7zWdOyBmIUo1GihI25YAChgk6Pt1kaiuayPNHn9AG4tfWkw9gYgkaX8QYZDweoBcuOHXVaJ0qmSzSUbDhAl3LbO4+EU8jmJrqcDgdyXNL2/af3haIRHlNTMuFAGKPU1754usI6I0xN7gMwkmvY0Wh758zkm9wGkWxwIF3Sat9MRJ+fGrDU8HNhcOAOotc0zqfQd8ccsu4KBQP0QkP3ND5hFfPHI/n6CgQGYlym5tr9gtUqPt3KTYADCWXEKCzfZ52qETvPd0bBgaQyxRx150HrljyrsOnv7xFwQ0FUigtrycMO3k9HTxLWHbm8BzCCu60sp4sZjMNQ41aEpsjNEw+fKQ4eeOpqlj/Nyb54es0bCC01AhvRB51zgwaoqxnMEm01ograF6ONLQaXgA6cmgeqgU306ysplPPaVCpPNLQURB84+ToEWODm1f+2MXqKFFg6zHq+cmo9BGC9+szuVrZqcJsTu5vjggdGlLo4Ie9qK7rEUEX4HWmOe9EiR1z3S2M83vKyscA7Ej22qnrZrJ4lWeSqqn70gcmDaRT0J09CSXV1XflwW3K4lZvt1VVVdfX1NTODBVIHFu2trynPiuxJVlFGRlbuovLciMTggLjUlAnTxw5PGzhoSHcGDUy7JWLAbSnhybH/A/wLPQQyrzxY9jwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 990000,
            actualAp: 36000,
            actualDps: 8244.27,
            magnification: "450%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2100000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAQECAgICAgIDAwIEAwIEBAUEBAQFBQYFBQUCBRQGBgYIBwcICAkNDBALECEQEBYZEAYSEhMTExMTExMWFBsWFh8eFQ8XFiEcGR8WGiwcGxsdHSAmGxQgHSIeHS4iIiImIho4HgMkIiglIyYxIhwoJislJjksKTEuKicvKycrLjgzLiowLjdJLBM1MytILRgwL0w2Mzs9ODJANzA7OEI9PDtQNyZAPjtBPjxPOTBHQjNMQyhCPlxePjFOSUNwQRNMTExpRzhVUEtUUlBuTkCFTQ5eW1WAUyFZXF5iX1mUVQ56WkhnY1+OWyGHYT1va2Nvb22jZSFxcW13dXGEc2Cxahl5d3GAfHS1cyeBgX+Fg4DJdxiNhHWhhFiPi4KUkYqVkYiYlY+/kFyhnJSioqGopJywrae3tbC+vLjHxcHhwavNysTV0cvW19Tc2tby2sXi4d375M7r6eXw7ujy8ev6+PL//ff///7FtqW6AAAAgHRSTlMArb/xDCw3av8heuXWihdeSv89nsn//56SeS1Y/+L/wf//Zabb//FHgv//0P////+n4F3//8SH////t///oP3v/+XKsf///v+I///h/////5rw////////vf//5///////8P///fr/pP/////Q/////////////////////////yM8W0wAAAV/SURBVFiFnVf/V9pWFI8tKn4BRA1OTTFos2nk+bRkUmy01BUUrFhrLC0isYymxCwJDMgyILn/+p7d7M7ZzqHEew4/hJPP59373ud+7gtFDYhgYOXHJ+O+Qa8Mjk3hOYmVB+NDr59vcZGt16sPJVjY2uKYF/j52kMJVtiIP97Oh+ceSjCPubzWTkQCDyUIYNVx/1SnRx+Env3h56d+A/5wyg+qYDl7c/0xmdB/d9Tk6dnemFf8fr12/vlm44VZLiePbm5VddcbfjW/7Auu3R6FhRe0/+h217ctrXsi8FG+499qpYtoTEiEN8r7FLW07C2F3S44evksyuMXW/SZXpn0BqeOwemZudPrZAynhcjpu7LurYLtDtjQen96mYmgNIodvLvsWCEPeN+Vlm2CXbn5mIzxiI8lb963YN9LBus1VTZAzV1fsnwiEcldv3GMCU81PO03C7aROf0Yj+Fo7OC0XF30hKf2wNJLmnz5Lh7BW1vxm3LW2ymOmtCyJalz8etBhBVjyduseeyJYNvpN+WEDsrlUYwXwhtnqulNylfgOJ92XOhcJMM8TaRo1j3pwHfudo1mNmtqlZyfpcPJcqL9wVMGo/m+2+/u7BQr+aiA+ZSUda0ZTwyhOujKpxOlno4KgsBLhaY3IVHUh2a2AVq9kY6yLOcvGXLrytt4WczKXbNrGwLNsqy/3pVqeW9SpObqsg0NlecRRjxuq4aKvDH45opgNRWaNBNK+SVXN0yP3hyS1EYrz/KY5QU2pVvWlTf8mFQrlPUsizBDkhB11ep4mZDBD8Viud5pIhaxDIcQ0nW6BcOLaabVamhFgDrNYYbGvMAXQHr0Bd4Oid9zSkUwdHBLNEmB53mMxW5nivrSmx0Kv374jIw0wwI7zSA6LzIcTnE6FGfGWsOlsPtLaMO2GwAmz3G0LNIcEukSNHOh/eH07Dv5bDpG13WrLKa5ejaMsMBIfZCGFcKeTRYnCdhZBtNpNe9HSODzFpjDNeToOQBYmtMHE5MSJKXgxxijrOl2hzrGyQa0e6C2iCdVWIFO16pFFiGM83WwjCGGy7bj6F0wNOj9XUFBUQoMJg1VkJ22dRX8Hn4PbNKEzVqfVKBjzKBaRcmHeYQ4qWQ7rebId/CLYEkWWHIHem4/z6bovCJVZYYlmyFJDdDt0vhgglWj0IZurQk9soXECRhiiorMkRq4UkEFs9mOLQ0kGE1Y4NR06Pcct0ineFY+31GqiMGYrxSrrl13pc2BBIEOuErJcfo9sBCNOVQ/XFOUFGloVClVe6DYWmmgmhf6oBHF9Pt9qBL5sClte1KRCRwJcrHUBV3vlqxngxgO21mT4HvQ4WmMmKy2OkP2gLiiKJekDjQUe/K36iBvDCXUu/UdqNIcjxlJGZ2tKkRHXLpaIbOhWz+klvSXAwhGJXDuEmgWBKI/XpGoWVlNMwKflpWiASCTdnimDbi8zyrkdtVznGoxzWImrR9Sy7KaZwSUrpVeGi7od+kfawNuG3et1IPW9hrZOUbS1glBXaIFQdycGCMEza8N+VYb4K++QxfcKyrIpBDWqjPUsmIU/QinZqgJHdr/JP/TQIPeg84yNc6Jwtz+Sx+1WjhZ8fNYXKSCujrkhD48IZ8avIiXKWJBE2PUBM1icY1a2hx2tvmC1CyDRO7eggkBEjfvLtDDxwIniOz9gqN3tow9jdYxBgnik/unWSJKQfRy1aVCNBLx/P2T7wnp7NSCFwIqwPLcN+8IxpPxRHx+0Pv/Dd+rTPLgW85j8Tc5Eq+Gnc7BieD2+8yb3Eho8muMB6KZzEEmd3FxMMRoDDz2kyBLZuL+fyMavftFyV/T3+OYCQTmRh7Nzz+dnpp6fB9TU1PT0/OPRgKBwOT/T/Mv7sGBFyKctwwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 675000,
            actualAp: 15750,
            actualDps: 1944.45,
            magnification: "450%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "2100000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 62400,
            actualAp: 3840,
            actualDps: 4800.0,
            magnification: "4800%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1950000%",
            isBoss: false
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
            actualHp: 24000,
            actualAp: 2400,
            actualDps: 1756.32,
            magnification: "4800%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1950000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQECAQECAgIEBAQHBwgJCQgLCQkNCQkNCgoUExQWFRMhFxMhGxsgIiMiIiMnJClBHBkjKTMtKypVIhwsNEE3ODc3Oj5ENjI2PkJkMC0+R0dCR0lDTk5kRT1LVFVSWFpaWVdTXF90VklcZmhubm5ncnJweXuYbVV2g4N/i4ufiHqVlpq9kXSio6TGooetrrHer465ur3ouZjHyMjuxqvP0NLZ2tr/1bTj5OTs7e7x8vP5+vv///85z0iDAAAAQHRSTlMD1w/qHi1DoVFixHiet/7m0Hf9/+mV3vylu//+///M////5b7///7R/v/////0///+/////v/+//////////8ATbfs5AAABAdJREFUWIXtln13ojoQxikFBN9QKjcqRaxvmIJIIU0TScL3/1YbcNvqdrvCvffPHY8ejzA/n2cymaCU/zGUv4C/gP8FoJtjdzpbLFaL6djU1fYAC+xgFMuI4ijarxZuz1DbyFJKfeQHwWYPZXoUSVQEdwvXaqxF/pnSA4FfQaSUKKreMYRwNZOOLqQoqqn9Dlrfog9kfuDLV62khkgtcC8phnammAPb7mnfAGQlbC+oGN6HkqgGvRvSzNFQRu87QFmqZn/iVSqCX+xUH/u971T5Q9v6FlAxjJpRW/ElZbPbQ7hbPj4ud/FueI6vEq5XTDJGXpVcC5GGnuZzP3iae5WAh4fh0LgBqH7Qe4PJuxPJeNrJ8IfOcL7cLrtfq/jbnpEFGVXlrDnech7MHx7mx9f85auAb/dCLaSuyOPc8xznvvv8djr0qjVVlCaAdyHg8VHqAE6n85wf5TKM+tb64F422B8AMnT7n4Ht+Q5YOce3l629Hg2cQ/7S1z7ybgBM2XyqMUIMA5i/5tuUjc3l89Zx7L51bvQbgPPlUHAaBKfTKfcINsrp0dV6A/sMabJzdSS4iMCrJGz2JDXXp1l5LrPtdJsALMoLnjnHPH99DlIaHA6jn2mKYd6yUF2fFjglBGzzt7dnAAvP8Wa/mvwuDNeVDjCjCa8A+esRBAhGZN0QoB7yla6YWVHskgxsX8jb0elME0HchgA9Px3n9gpR0nEiACklGeiXbrJu2kjK9OV4nAMsQs2LQUSLAvsTrbyalzeKqE2XACA6NuMdgCnG6e6ygA0ApTZxRq5lHCgIkjiRE8afXI/Wm32g6aUxRQKCJNk/eUH65FxPpduNpLgZF5mz54TQFMuOnOjtAD0sBAYAc0QISlkWgNll0m2AiRjbgFiuQFGQtCjgMBi3ApRrkTqbrMCEcYoKcbDA5UI0AOjhxg4RQ5RzTJkI1Um/HaBUOt2YFohxBikXodK5rGKzk3ycyTXgIt1jzhNNbVfEKqaUk4ITmCHO0NUqNgMoIWfS/XqBECuI2R6gp4IxgYxxJgF0fHWtEUDONM7ZrDRTLK1M2wMWjMkK6qUWYY5Z2BqgQiEFLOSXFeGIpVcnbBOAkckSIGldDQlDPGu5mWQXFIzjWKYpK0KxQK0Ba8GLLFQqCwih9gA1ETyrHEgLafovFBhYUFxnKWGWUYHbAmQJCn4+ShY4I4JcPac0mQdc8PV5kuohIoJe9XKDmRhS/HGSqIuUZC0BpRXHn6KtLLYaPyP9jHERft6lI3r9qNYAELKL/aceira70SSX/6lBkY1bTSQlFPKxSFEVtYrS9GGSrazP4+3PANXqdQH07+/uP2M4dObO/cdK3AJ0OoNu9zL/7q7b7XR6H65+AEjUZYFbVXVIAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 27000,
            actualDps: 4218.75,
            magnification: "450%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1950000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAABAAABAQEBAQEBAQECAQEDAgEGAAEEAgMFAgEFAwMFBAMHBQUKBwYfCAkeCQoiCQgaDw0eDgwkDw4aFxYoEg5FBQgoFA4uEhEcHBw3EQ4WIBwdHR08FRYjIh41HBQ7GBgpJCFIGRszJCI6Ih5JGxdhExVFIx5EJyE0LzBYISNcIiF7GRw3Nzc8NzdqJSdgLCZMNzF2KCtoMChVOTVqMi2NIiVFRUV+LS82UVeVKSx2OTZxPy+KMzVOTk5STU2SNTZSUlKBQUGnMDOaOTxsUU5SXGCORjmkPD6EUk+bSzetQUFnYl9lZWW7Q0VpamqGX12lVT9ecopvcHC4W0PTTlF7eXnDZkmBgYGheGXPaUyLi4unhXHhcFLbeViTk5PseliZmZmfoKHQkXWkpKSpqam+ppWxsrK3t7fNs5+7u7vBwcHExcbjwqvKysrax7PPz8/V1dXvzrjb29v23MPj4+Po6Oj/5Mvr6+vv7+//7Nb19fX6+ff///8YXU45AAAAgHRSTlMAxe0NKZj/HUimNdtguIBxxf/pWoO0/5f+/8am2sSB/9Z4qP//kf/l/sbwtf/w//7d//+V/9///v/+/////8D/y///o////////v///v//1//////////////////////////////////////////p/////////////////////7w+pywAAAUdSURBVFiFnVZrU9paFMUGkaKiaGvVPvBB0VaqBVGEK0VyMWI0VKTQGI0aQxODCTcmxsTEk/PXb6jT3pn7oXPC/kAmM6yV/Vhn7RMI/DGwsdnJF9E//+dPEVnaPztrHS4N9YkPVy6uLi4vrloLfRLMNi5Pzi4vT64az/vCR5InZ61G6/Kk1XrRF0G44uEb+63G/tmX/jKonLTiyeJhsnKy31cbI5nWYe3bcaO6R20E+yHARkunj493N8YePt8PPPpq5FPl9vHOvUlk/CeAzW8cnh3GFs9vHv75POxfi5MfW5cXrXS8dvfj9C3mGx4Ivzy8OiumEllav/+RX/FdABb8ctXIJHB8a5+/vr05Xv0U9skwf7JfTJAUXtjeu7m7b1eOSv4YsI3MYSZLkURhu8I9PN4frx55x2n9b/QEPnxpxAmCKOH49l7n4eE8TS4ForyEnMar+VY8ReEEQeIlvHnrCund6TkujzzMyMh6bhincJzEicJWhX3oZJerzBz6ccCwjeg4RZAEUSjh6d1j6TRZrb5GhnsxtBBOH5FEOpHCjwrZ7c38t3Lcl6UEwyMEReDpVGx6azeer1U3l/EJPwRY4JU3Q5zazdTPi7G/mNhWiUj5k+OsR0CQy9fwRqqHQvli9nvBn5R+Emxvnm7Gms2961t6eTnuyxaDMZwkyFW2ukiXp/bub4/X/jrwZe1vUmmKJIvt5BSr0punB1O0UFz2YYvRQjpLkrsH5dDaGsNPxZp8s54kJtEJPuCpLElQmVCMFoV6U27WeD2/5aOGl6VCliCpmVhpmm5XoVsNcTC/vIFOEEl4B5EgEwVqta00oVymqzST89WEElGiSilq9UCBUrnG8rV8txyPoBMMpanSUTq1W5BVqNOCUtfFLnfuQ0qRFEXurhVXpa5pSQJQypCXpOt19ARyycL32bd7vKZDXeFZvi6uiRqDTIBt5KILqfBXUbeAo6oaK3Ac3TZr71EJPhSfB4awSYk3gAVlGbiW7iqsgUzwvjjee+woouNYgNdMW++aBmfUEKcwWZzo7bIgK0nABjILDUcRHNDWv6LhI8X4T+t4J3OKVwEvQhVKbWBJGo+2IzdST+PeUVnNsR1GNxTIsVBXFRFJiQu5J/cPcx3edFyFgZoCGQZ2jY6I1IOJgafnisqJXgUsD7vdn7+2wCMpMfiU5xCtsx1oO3QXdjXAdlzVltp+7jljosKrrtulbVcxDFYHmqlJ6FL2WqgJguVAgXUdyVJpE+iG3kXfzoEIp3EycFxOhIYIZdoCum6qiELoxXtFbJuOYzKaq0lQ8jIwVKDSyJclrKlzMrTcLmM73Q6UWAOYMtAY5OXUa6HekyEDHKkDRVYDTsfWOGRf3lEFwVMhpHlgtzueEFUAOobWRh1DkPUqcC3HpFVH51XQ7BFIXUNAHsNXvVeBqzQtR2VNs8x2AZA7jog8hndSx7a9FtSBrbCOXuY8ArXjvaMa+1DNdS0LMjQwFRaoeVYGQBMgU0f25REJQuDU2rapc1AcbMsutBjI5NE3Q3BHhmbZcnSGt9cDOzo06nNO9Zmfa3ckT4cYpz72+p1X0ko58SaaHxvxgQ9gE9Pj2OtfkPHVuN/79lh2e+m/jN9ks598fT+AfT4oVd79flsqEWTl8woqx1AkMpirJIsfR0cHejE6EC+kN/OV/cwgCjz4LORFMreZmwn9iqnFqcWZmZlkKIRAgYVHooPPR9/OzQ0/+x3DwwOjo4PRsZH/H+l/AQoofSqglHFcAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 405000,
            actualAp: 27000,
            actualDps: 6136.38,
            magnification: "450%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1950000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 12492,
            actualDps: 23422.48,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1800000%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 36000,
            actualAp: 17600,
            actualDps: 14270.24,
            magnification: "800%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1800000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgICAgICAgICAgICAgEDAgMDAgMDAwMDAwMDAwMDBAYEBAQEBAQEBAMFBQYFBQYGBQYGBggGBgsHBwgICAoJCAcLCAYICQsJCQoJCQkKCQwKCQwGCRkJCg0KCgsKCg0KCw0LCwoLCw8LCw4IDBUQCwcLDQ8MDBENDQ4NDQ4QDAkODg8NDhMODhMODhMCEC0PDxUPDxMQDxQNERgQEBUREBERERYSERMUEQ8UERAPEiIUExQTExoSFBwUFBcYFBIWFRgbFQ8WFh0XFxgaFhQWFx4XFxwYGBgZGRkbGBoXGSIWGScZGSAaGR4ZGiIeGR0ZGyQaGyIaGyQbGyMkHREcHSYeHyYgHyEiHxwfICghICMfICkfICkfICkcITAnIRwgIi0mISApIRsiIy0kJCUiJC4jJDAmJCcjJS8eJjskJjAkJjEnJyUuJiEqJywmKDQvKCMtKSYuKSomKUAoKjY3KB0qLDgtLDE0LhwrLTkuLi4yLi4qLkMvLzM3LiguLzwvMD4uMzs3MS8wMkA9MSUzMzcxM0JANRE5NSw1NjcxNUouNVY0NkQ2Nj05NzZBNS00N0c3OTpHNiE1OEg5Oj06OUA3OUlCODRFOSo2Ok9DOTM4O0wyPVg6PU5DPDtDPi87Pk5KPDM/QEFAQEI8P1FNQRtDQUQ+QVNIQTw/QlRARFZERkxCRVlRRDlHSElLR0RER1tJSk1HSl5KTExOTk5QUVVaUktmWCtWV15YWVtdYWZgZGZuYFdiZGZtZkxnaG16bjx9a16GaVdvcW+Bb2GJblx3en+RdmR8f4KTfWx/goqFiI6JjI+kiXepinOPkpWkjXqPkpqtjnmYm6O2mYKio6O8noS/pI/Rp4SwsLLIq5HYs5i/xsXjvZ/qw6Tn0K/w2bjf5uj/68b+//////8Lu7VZAAABAHRSTlMAAgcRNjpHc5WivsjW5ev/IHoADBpMZfK5UBUqL15uJY6ogtHdfUFZ/wCHtpf/c7Ac/57EN4Wr9dR63KdRuADApPa1vf+2nf8A1f/wlKmw5P96o0yR////0rJox1Pgvfj/qv8/1+j/y/v2/wDZ/8L//+TqAP//0/D4/4j/ov//cPwA/+P/9P+K7v//Nr3//////////2b///+2///x/////////3X/////////zLf/tP//////7v////////9fkf////8A//////92AP///+rI/////6T/2f++////////////4ub+///H/9jn/////////////////////v////8AL8LRDgAABMxJREFUWIWd13tUFFUcB/ArkJwkRV5r8pIQlEFByLfJnFKPpOlpU2CljrRpWD7Q1RbS0M1Ix8OkrcPZiGZyDlOdrjo2OYW3sSWnplmwsITMKMvSQqIys3xkL20k0D/sj/3x/Wfu2XPnc+797T333kFXbgi6noSHVq8pGYmie3Nj5yvoxp+udY+mSmuXrFtXGXUNBAIoIf+9jra2Hesf601wwPUZDI3suPTrH11bPny/J9ARJLf/0v5V1zeT4vs6hREdJ3776eeugrjQvgBW/9AHj1+68M8PsXEJIKCns0X0j+y6eOHPZ6jEkL4ANIVCq9qP//Ut6hcCWwe9AI2yvbNPnHNOp1CfgPj7KrzcpvaLjVnZvTWETIHK3KwQwgqzO84Vso+PDwEDQxke+zWReZ60+STVqKChwHhTYjRV4XnFL3gV4o2HAnN04hGIKmH5EMNoeCEFBOj1pszzhGBJ2smxfqUYWgNqZTPvk4iqYsy6pYAvEwrQFS0+hldlQjTRg03PfCgQs7lZclYSCRONMFJgbTwUCGMDSr5TUDEvYA4HKnOgQJJgKmkOXlaxxLJEX9sPCqTKupaaIvhl2a/xnIBHQoHbVVNM6udQdSxgYYlizoMCo9Vm72CUV6mbpKZ2F+vsD13KKXJASEQ2Byv63Bve3RC5dTEQSMcmjkOj7UUz7Bm5L9UUth4GAlGiqdqoafYiu7OsTlL5uq9zKAhAWX+j/HBOsWuGr0GTntWZypPPQUYQ82QJa4jbpt1rt6uGLvGKT2zaQgOAnCZfIXm1MCPXzmpE4yVJNIWpoBqkl7/d9sXuLMavEdXvtvamFmYcrIhpB7/85OVaLaATouZzLQJTGgoDxk3c9Bazq4zxyc2+DCfjklbQwC3t498vn121l610uRz5LKd/VEHBgNizl8+3bqs3dcwMucfQceAR6Ag+PZvlOVTdoJo4PY/IUmAldFdGdx07umo/VgPumDEYYxMOTN7zWdOyBmIUo1GihI25YAChgk6Pt1kaiuayPNHn9AG4tfWkw9gYgkaX8QYZDweoBcuOHXVaJ0qmSzSUbDhAl3LbO4+EU8jmJrqcDgdyXNL2/af3haIRHlNTMuFAGKPU1754usI6I0xN7gMwkmvY0Wh758zkm9wGkWxwIF3Sat9MRJ+fGrDU8HNhcOAOotc0zqfQd8ccsu4KBQP0QkP3ND5hFfPHI/n6CgQGYlym5tr9gtUqPt3KTYADCWXEKCzfZ52qETvPd0bBgaQyxRx150HrljyrsOnv7xFwQ0FUigtrycMO3k9HTxLWHbm8BzCCu60sp4sZjMNQ41aEpsjNEw+fKQ4eeOpqlj/Nyb54es0bCC01AhvRB51zgwaoqxnMEm01ograF6ONLQaXgA6cmgeqgU306ysplPPaVCpPNLQURB84+ToEWODm1f+2MXqKFFg6zHq+cmo9BGC9+szuVrZqcJsTu5vjggdGlLo4Ie9qK7rEUEX4HWmOe9EiR1z3S2M83vKyscA7Ej22qnrZrJ4lWeSqqn70gcmDaRT0J09CSXV1XflwW3K4lZvt1VVVdfX1NTODBVIHFu2trynPiuxJVlFGRlbuovLciMTggLjUlAnTxw5PGzhoSHcGDUy7JWLAbSnhybH/A/wLPQQyrzxY9jwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 880000,
            actualAp: 32000,
            actualDps: 7328.24,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1800000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAQECAgICAgIDAwIEAwIEBAUEBAQFBQYFBQUCBRQGBgYIBwcICAkNDBALECEQEBYZEAYSEhMTExMTExMWFBsWFh8eFQ8XFiEcGR8WGiwcGxsdHSAmGxQgHSIeHS4iIiImIho4HgMkIiglIyYxIhwoJislJjksKTEuKicvKycrLjgzLiowLjdJLBM1MytILRgwL0w2Mzs9ODJANzA7OEI9PDtQNyZAPjtBPjxPOTBHQjNMQyhCPlxePjFOSUNwQRNMTExpRzhVUEtUUlBuTkCFTQ5eW1WAUyFZXF5iX1mUVQ56WkhnY1+OWyGHYT1va2Nvb22jZSFxcW13dXGEc2Cxahl5d3GAfHS1cyeBgX+Fg4DJdxiNhHWhhFiPi4KUkYqVkYiYlY+/kFyhnJSioqGopJywrae3tbC+vLjHxcHhwavNysTV0cvW19Tc2tby2sXi4d375M7r6eXw7ujy8ev6+PL//ff///7FtqW6AAAAgHRSTlMArb/xDCw3av8heuXWihdeSv89nsn//56SeS1Y/+L/wf//Zabb//FHgv//0P////+n4F3//8SH////t///oP3v/+XKsf///v+I///h/////5rw////////vf//5///////8P///fr/pP/////Q/////////////////////////yM8W0wAAAV/SURBVFiFnVf/V9pWFI8tKn4BRA1OTTFos2nk+bRkUmy01BUUrFhrLC0isYymxCwJDMgyILn/+p7d7M7ZzqHEew4/hJPP59373ud+7gtFDYhgYOXHJ+O+Qa8Mjk3hOYmVB+NDr59vcZGt16sPJVjY2uKYF/j52kMJVtiIP97Oh+ceSjCPubzWTkQCDyUIYNVx/1SnRx+Env3h56d+A/5wyg+qYDl7c/0xmdB/d9Tk6dnemFf8fr12/vlm44VZLiePbm5VddcbfjW/7Auu3R6FhRe0/+h217ctrXsi8FG+499qpYtoTEiEN8r7FLW07C2F3S44evksyuMXW/SZXpn0BqeOwemZudPrZAynhcjpu7LurYLtDtjQen96mYmgNIodvLvsWCEPeN+Vlm2CXbn5mIzxiI8lb963YN9LBus1VTZAzV1fsnwiEcldv3GMCU81PO03C7aROf0Yj+Fo7OC0XF30hKf2wNJLmnz5Lh7BW1vxm3LW2ymOmtCyJalz8etBhBVjyduseeyJYNvpN+WEDsrlUYwXwhtnqulNylfgOJ92XOhcJMM8TaRo1j3pwHfudo1mNmtqlZyfpcPJcqL9wVMGo/m+2+/u7BQr+aiA+ZSUda0ZTwyhOujKpxOlno4KgsBLhaY3IVHUh2a2AVq9kY6yLOcvGXLrytt4WczKXbNrGwLNsqy/3pVqeW9SpObqsg0NlecRRjxuq4aKvDH45opgNRWaNBNK+SVXN0yP3hyS1EYrz/KY5QU2pVvWlTf8mFQrlPUsizBDkhB11ep4mZDBD8Viud5pIhaxDIcQ0nW6BcOLaabVamhFgDrNYYbGvMAXQHr0Bd4Oid9zSkUwdHBLNEmB53mMxW5nivrSmx0Kv374jIw0wwI7zSA6LzIcTnE6FGfGWsOlsPtLaMO2GwAmz3G0LNIcEukSNHOh/eH07Dv5bDpG13WrLKa5ejaMsMBIfZCGFcKeTRYnCdhZBtNpNe9HSODzFpjDNeToOQBYmtMHE5MSJKXgxxijrOl2hzrGyQa0e6C2iCdVWIFO16pFFiGM83WwjCGGy7bj6F0wNOj9XUFBUQoMJg1VkJ22dRX8Hn4PbNKEzVqfVKBjzKBaRcmHeYQ4qWQ7rebId/CLYEkWWHIHem4/z6bovCJVZYYlmyFJDdDt0vhgglWj0IZurQk9soXECRhiiorMkRq4UkEFs9mOLQ0kGE1Y4NR06Pcct0ineFY+31GqiMGYrxSrrl13pc2BBIEOuErJcfo9sBCNOVQ/XFOUFGloVClVe6DYWmmgmhf6oBHF9Pt9qBL5sClte1KRCRwJcrHUBV3vlqxngxgO21mT4HvQ4WmMmKy2OkP2gLiiKJekDjQUe/K36iBvDCXUu/UdqNIcjxlJGZ2tKkRHXLpaIbOhWz+klvSXAwhGJXDuEmgWBKI/XpGoWVlNMwKflpWiASCTdnimDbi8zyrkdtVznGoxzWImrR9Sy7KaZwSUrpVeGi7od+kfawNuG3et1IPW9hrZOUbS1glBXaIFQdycGCMEza8N+VYb4K++QxfcKyrIpBDWqjPUsmIU/QinZqgJHdr/JP/TQIPeg84yNc6Jwtz+Sx+1WjhZ8fNYXKSCujrkhD48IZ8avIiXKWJBE2PUBM1icY1a2hx2tvmC1CyDRO7eggkBEjfvLtDDxwIniOz9gqN3tow9jdYxBgnik/unWSJKQfRy1aVCNBLx/P2T7wnp7NSCFwIqwPLcN+8IxpPxRHx+0Pv/Dd+rTPLgW85j8Tc5Eq+Gnc7BieD2+8yb3Eho8muMB6KZzEEmd3FxMMRoDDz2kyBLZuL+fyMavftFyV/T3+OYCQTmRh7Nzz+dnpp6fB9TU1PT0/OPRgKBwOT/T/Mv7sGBFyKctwwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 14000,
            actualDps: 1728.4,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1800000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 54600,
            actualAp: 3360,
            actualDps: 4200.0,
            magnification: "4200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1650000%",
            isBoss: false
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
            actualHp: 21000,
            actualAp: 2100,
            actualDps: 1536.78,
            magnification: "4200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1650000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQECAQECAgIEBAQHBwgJCQgLCQkNCQkNCgoUExQWFRMhFxMhGxsgIiMiIiMnJClBHBkjKTMtKypVIhwsNEE3ODc3Oj5ENjI2PkJkMC0+R0dCR0lDTk5kRT1LVFVSWFpaWVdTXF90VklcZmhubm5ncnJweXuYbVV2g4N/i4ufiHqVlpq9kXSio6TGooetrrHer465ur3ouZjHyMjuxqvP0NLZ2tr/1bTj5OTs7e7x8vP5+vv///85z0iDAAAAQHRSTlMD1w/qHi1DoVFixHiet/7m0Hf9/+mV3vylu//+///M////5b7///7R/v/////0///+/////v/+//////////8ATbfs5AAABAdJREFUWIXtln13ojoQxikFBN9QKjcqRaxvmIJIIU0TScL3/1YbcNvqdrvCvffPHY8ejzA/n2cymaCU/zGUv4C/gP8FoJtjdzpbLFaL6djU1fYAC+xgFMuI4ijarxZuz1DbyFJKfeQHwWYPZXoUSVQEdwvXaqxF/pnSA4FfQaSUKKreMYRwNZOOLqQoqqn9Dlrfog9kfuDLV62khkgtcC8phnammAPb7mnfAGQlbC+oGN6HkqgGvRvSzNFQRu87QFmqZn/iVSqCX+xUH/u971T5Q9v6FlAxjJpRW/ElZbPbQ7hbPj4ud/FueI6vEq5XTDJGXpVcC5GGnuZzP3iae5WAh4fh0LgBqH7Qe4PJuxPJeNrJ8IfOcL7cLrtfq/jbnpEFGVXlrDnech7MHx7mx9f85auAb/dCLaSuyOPc8xznvvv8djr0qjVVlCaAdyHg8VHqAE6n85wf5TKM+tb64F422B8AMnT7n4Ht+Q5YOce3l629Hg2cQ/7S1z7ybgBM2XyqMUIMA5i/5tuUjc3l89Zx7L51bvQbgPPlUHAaBKfTKfcINsrp0dV6A/sMabJzdSS4iMCrJGz2JDXXp1l5LrPtdJsALMoLnjnHPH99DlIaHA6jn2mKYd6yUF2fFjglBGzzt7dnAAvP8Wa/mvwuDNeVDjCjCa8A+esRBAhGZN0QoB7yla6YWVHskgxsX8jb0elME0HchgA9Px3n9gpR0nEiACklGeiXbrJu2kjK9OV4nAMsQs2LQUSLAvsTrbyalzeKqE2XACA6NuMdgCnG6e6ygA0ApTZxRq5lHCgIkjiRE8afXI/Wm32g6aUxRQKCJNk/eUH65FxPpduNpLgZF5mz54TQFMuOnOjtAD0sBAYAc0QISlkWgNll0m2AiRjbgFiuQFGQtCjgMBi3ApRrkTqbrMCEcYoKcbDA5UI0AOjhxg4RQ5RzTJkI1Um/HaBUOt2YFohxBikXodK5rGKzk3ycyTXgIt1jzhNNbVfEKqaUk4ITmCHO0NUqNgMoIWfS/XqBECuI2R6gp4IxgYxxJgF0fHWtEUDONM7ZrDRTLK1M2wMWjMkK6qUWYY5Z2BqgQiEFLOSXFeGIpVcnbBOAkckSIGldDQlDPGu5mWQXFIzjWKYpK0KxQK0Ba8GLLFQqCwih9gA1ETyrHEgLafovFBhYUFxnKWGWUYHbAmQJCn4+ShY4I4JcPac0mQdc8PV5kuohIoJe9XKDmRhS/HGSqIuUZC0BpRXHn6KtLLYaPyP9jHERft6lI3r9qNYAELKL/aceira70SSX/6lBkY1bTSQlFPKxSFEVtYrS9GGSrazP4+3PANXqdQH07+/uP2M4dObO/cdK3AJ0OoNu9zL/7q7b7XR6H65+AEjUZYFbVXVIAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 24000,
            actualDps: 3750.0,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1650000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAABAAABAQEBAQEBAQECAQEDAgEGAAEEAgMFAgEFAwMFBAMHBQUKBwYfCAkeCQoiCQgaDw0eDgwkDw4aFxYoEg5FBQgoFA4uEhEcHBw3EQ4WIBwdHR08FRYjIh41HBQ7GBgpJCFIGRszJCI6Ih5JGxdhExVFIx5EJyE0LzBYISNcIiF7GRw3Nzc8NzdqJSdgLCZMNzF2KCtoMChVOTVqMi2NIiVFRUV+LS82UVeVKSx2OTZxPy+KMzVOTk5STU2SNTZSUlKBQUGnMDOaOTxsUU5SXGCORjmkPD6EUk+bSzetQUFnYl9lZWW7Q0VpamqGX12lVT9ecopvcHC4W0PTTlF7eXnDZkmBgYGheGXPaUyLi4unhXHhcFLbeViTk5PseliZmZmfoKHQkXWkpKSpqam+ppWxsrK3t7fNs5+7u7vBwcHExcbjwqvKysrax7PPz8/V1dXvzrjb29v23MPj4+Po6Oj/5Mvr6+vv7+//7Nb19fX6+ff///8YXU45AAAAgHRSTlMAxe0NKZj/HUimNdtguIBxxf/pWoO0/5f+/8am2sSB/9Z4qP//kf/l/sbwtf/w//7d//+V/9///v/+/////8D/y///o////////v///v//1//////////////////////////////////////////p/////////////////////7w+pywAAAUdSURBVFiFnVZrU9paFMUGkaKiaGvVPvBB0VaqBVGEK0VyMWI0VKTQGI0aQxODCTcmxsTEk/PXb6jT3pn7oXPC/kAmM6yV/Vhn7RMI/DGwsdnJF9E//+dPEVnaPztrHS4N9YkPVy6uLi4vrloLfRLMNi5Pzi4vT64az/vCR5InZ61G6/Kk1XrRF0G44uEb+63G/tmX/jKonLTiyeJhsnKy31cbI5nWYe3bcaO6R20E+yHARkunj493N8YePt8PPPpq5FPl9vHOvUlk/CeAzW8cnh3GFs9vHv75POxfi5MfW5cXrXS8dvfj9C3mGx4Ivzy8OiumEllav/+RX/FdABb8ctXIJHB8a5+/vr05Xv0U9skwf7JfTJAUXtjeu7m7b1eOSv4YsI3MYSZLkURhu8I9PN4frx55x2n9b/QEPnxpxAmCKOH49l7n4eE8TS4ForyEnMar+VY8ReEEQeIlvHnrCund6TkujzzMyMh6bhincJzEicJWhX3oZJerzBz6ccCwjeg4RZAEUSjh6d1j6TRZrb5GhnsxtBBOH5FEOpHCjwrZ7c38t3Lcl6UEwyMEReDpVGx6azeer1U3l/EJPwRY4JU3Q5zazdTPi7G/mNhWiUj5k+OsR0CQy9fwRqqHQvli9nvBn5R+Emxvnm7Gms2961t6eTnuyxaDMZwkyFW2ukiXp/bub4/X/jrwZe1vUmmKJIvt5BSr0punB1O0UFz2YYvRQjpLkrsH5dDaGsNPxZp8s54kJtEJPuCpLElQmVCMFoV6U27WeD2/5aOGl6VCliCpmVhpmm5XoVsNcTC/vIFOEEl4B5EgEwVqta00oVymqzST89WEElGiSilq9UCBUrnG8rV8txyPoBMMpanSUTq1W5BVqNOCUtfFLnfuQ0qRFEXurhVXpa5pSQJQypCXpOt19ARyycL32bd7vKZDXeFZvi6uiRqDTIBt5KILqfBXUbeAo6oaK3Ac3TZr71EJPhSfB4awSYk3gAVlGbiW7iqsgUzwvjjee+woouNYgNdMW++aBmfUEKcwWZzo7bIgK0nABjILDUcRHNDWv6LhI8X4T+t4J3OKVwEvQhVKbWBJGo+2IzdST+PeUVnNsR1GNxTIsVBXFRFJiQu5J/cPcx3edFyFgZoCGQZ2jY6I1IOJgafnisqJXgUsD7vdn7+2wCMpMfiU5xCtsx1oO3QXdjXAdlzVltp+7jljosKrrtulbVcxDFYHmqlJ6FL2WqgJguVAgXUdyVJpE+iG3kXfzoEIp3EycFxOhIYIZdoCum6qiELoxXtFbJuOYzKaq0lQ8jIwVKDSyJclrKlzMrTcLmM73Q6UWAOYMtAY5OXUa6HekyEDHKkDRVYDTsfWOGRf3lEFwVMhpHlgtzueEFUAOobWRh1DkPUqcC3HpFVH51XQ7BFIXUNAHsNXvVeBqzQtR2VNs8x2AZA7jog8hndSx7a9FtSBrbCOXuY8ArXjvaMa+1DNdS0LMjQwFRaoeVYGQBMgU0f25REJQuDU2rapc1AcbMsutBjI5NE3Q3BHhmbZcnSGt9cDOzo06nNO9Zmfa3ckT4cYpz72+p1X0ko58SaaHxvxgQ9gE9Pj2OtfkPHVuN/79lh2e+m/jN9ks598fT+AfT4oVd79flsqEWTl8woqx1AkMpirJIsfR0cHejE6EC+kN/OV/cwgCjz4LORFMreZmwn9iqnFqcWZmZlkKIRAgYVHooPPR9/OzQ0/+x3DwwOjo4PRsZH/H+l/AQoofSqglHFcAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 24000,
            actualDps: 5454.56,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1650000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQEBAQFBQUFBQUGBgYGBgYGBgYGBgYICAgLCwsODg4ODg4PDw8RERERERESEhITEhITExMXFxcYGBgaGhoaGhocHBwvFRUeHh4gICAhISElJSUmJiYpKSktLS1cGxsxMTFsJiayEhKkRxZDAAAAQHRSTlMAAgQJDxQYHyYsNOc8/0ZOW2TV4VNscniAjpSZoMz6vv+nrbXz/8XW/87m+OD/2v/p7v/0///6///8////////8keQagAABOBJREFUWIWVV4tW4jAQXSnIQ4qwAoLyiGBkZBkCqSElkfX//2qntDzaBmXjOYjAXCZ37twZf/264hSKlfp9s9muV4o313w+c7xKuz99Xy4Wy+G0Vy/+b/hNuTVZBMbs6Jjt+q1b/r8kvFp/sbE7o6WUKrS77fyp8j8IXmOyDq0Gxnw6DKS160GtcHV8oT4NrMF9tB9DhDYYVK/OoTIIbMj988O1XfWuZfK2t7I6He/7YMxb/boUiq2lCbPxvi9268erUig03jYGcvE+N5tp5RqAyktgHfE+02Z5zR2K3dU5/2cHzbz9cyUL9bdt6EqA7hCuu96PALf9wEVAXMng+UcWvfbMKOcF6MjtW+0HEm6qL9kEeFxQDvQjX5/K3wOU+ysr0gkAxjUQAnzm33W+ZaH0ODc6cwFUQF/PmNCSMTYafJdCqTVTWQmClIzDh1KhCT8+P0bPtxfDvUp3lpcgD5U0f7/+7kKpPr8+L2dQIAdabQ1mmWcqDHd/vz4lMYCfH3xYvxBffSYHcrSQzziH8IOMifkckd21nCwWaoO1sdIRH4MwYa3iXBocDVwkFOoTchC4JKBIBRhaAaHi/rDm+v5JzoHS8cipFJwhfeauk4u/qQ6C3XfxIPftyXj0+PqUA7jtr/MOlgbYvwuI9DiaZuOLnUU2ngPle1QEQ4jvIfdtNszGt96zBsBASKXFEXTPLgNSI0AOoNB4z8uPRE/FT8FyZayxWrDROEPAc2CF++ZUtKSVfQAVCqWEMuK1n4r3msuLBgJJZ4LgYBSwiBilZvcpgOrUaeHxEWafG1qlVZSDIQ5GL6luKvXWNmvB/EReKGCfyc4AVzYMDbCH5nkvEIPGZBXAT5LG/ZuMRwqkBxLj63MqAbLgXW4G8FP90OAZPOd8NK4X0gnYPANMHl/iRnKEWFLAEP+M26lm9h7XO8xzJ4+vca1BakV+CigE3k0aaTMoDbY5BqLE5eFWDKnHgQSgFAYP48dqZrLV3ozLQ0Dj4RIiUuNel+uXZjW37FENZD6eSAgPl8BEzkzPXVbWmLlVzMPDcDkChKuWYzDfL61w+sAhjqSEB4COA6C9tOiKP8bRE0h+r10AzcWFPuAaD6nET0A7V4P2MgsA8Sg9AoA5AAQ9B0D9PTuJQO/98+wKsZZBb1xDsTLdqmwKypD3iwOJPEHiajtxbGjFpyCnRIa0IquDx3CdKE1ux46B4nVWFvII6lhFSj1ZF9C8O6ZqobG0Ml8HkEcAdtgXwCwbjvWoPNk4uolFIzA5IqkTmJVrRyRLtSJvCGcAmADQjuic67dEY54FLVgOgITg2hFvyJOyeyngqRtPdcTNc8kBQLa8MlR5dsqCKxAnfTGV1BE2U+d2dFPpLzfWSESBGNkxrTHI9WnWYCI10DP3ql4oN19mqwBpCaItghGOIDR9vJZInopw0biwqnvlRmf8h1ZJml0oUUQeevQ0TJLhejOuuuMjIjrLKFEeXYKRAwuVfC1ncVfQlqxn7vVsz0P9fbM34ngNoEUCePL/olCUCwNUwe+uswjEgeeVmvOzUtIkoe2EUok2EohuJRTcTVvVUrHoeVkevWq71e1NXs+tEXhUEIwmMiFJJQUfPUwHT/3eY6fZKKeZLN73BpPpePibzsP5Wczn87M/fw+Hw/F4+vLUrSVM/ANKmgjaouIsOAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 10930,
            actualDps: 20494.67,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1500000%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 31500,
            actualAp: 15400,
            actualDps: 12486.46,
            magnification: "700%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1500000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgICAgICAgICAgICAgEDAgMDAgMDAwMDAwMDAwMDBAYEBAQEBAQEBAMFBQYFBQYGBQYGBggGBgsHBwgICAoJCAcLCAYICQsJCQoJCQkKCQwKCQwGCRkJCg0KCgsKCg0KCw0LCwoLCw8LCw4IDBUQCwcLDQ8MDBENDQ4NDQ4QDAkODg8NDhMODhMODhMCEC0PDxUPDxMQDxQNERgQEBUREBERERYSERMUEQ8UERAPEiIUExQTExoSFBwUFBcYFBIWFRgbFQ8WFh0XFxgaFhQWFx4XFxwYGBgZGRkbGBoXGSIWGScZGSAaGR4ZGiIeGR0ZGyQaGyIaGyQbGyMkHREcHSYeHyYgHyEiHxwfICghICMfICkfICkfICkcITAnIRwgIi0mISApIRsiIy0kJCUiJC4jJDAmJCcjJS8eJjskJjAkJjEnJyUuJiEqJywmKDQvKCMtKSYuKSomKUAoKjY3KB0qLDgtLDE0LhwrLTkuLi4yLi4qLkMvLzM3LiguLzwvMD4uMzs3MS8wMkA9MSUzMzcxM0JANRE5NSw1NjcxNUouNVY0NkQ2Nj05NzZBNS00N0c3OTpHNiE1OEg5Oj06OUA3OUlCODRFOSo2Ok9DOTM4O0wyPVg6PU5DPDtDPi87Pk5KPDM/QEFAQEI8P1FNQRtDQUQ+QVNIQTw/QlRARFZERkxCRVlRRDlHSElLR0RER1tJSk1HSl5KTExOTk5QUVVaUktmWCtWV15YWVtdYWZgZGZuYFdiZGZtZkxnaG16bjx9a16GaVdvcW+Bb2GJblx3en+RdmR8f4KTfWx/goqFiI6JjI+kiXepinOPkpWkjXqPkpqtjnmYm6O2mYKio6O8noS/pI/Rp4SwsLLIq5HYs5i/xsXjvZ/qw6Tn0K/w2bjf5uj/68b+//////8Lu7VZAAABAHRSTlMAAgcRNjpHc5WivsjW5ev/IHoADBpMZfK5UBUqL15uJY6ogtHdfUFZ/wCHtpf/c7Ac/57EN4Wr9dR63KdRuADApPa1vf+2nf8A1f/wlKmw5P96o0yR////0rJox1Pgvfj/qv8/1+j/y/v2/wDZ/8L//+TqAP//0/D4/4j/ov//cPwA/+P/9P+K7v//Nr3//////////2b///+2///x/////////3X/////////zLf/tP//////7v////////9fkf////8A//////92AP///+rI/////6T/2f++////////////4ub+///H/9jn/////////////////////v////8AL8LRDgAABMxJREFUWIWd13tUFFUcB/ArkJwkRV5r8pIQlEFByLfJnFKPpOlpU2CljrRpWD7Q1RbS0M1Ix8OkrcPZiGZyDlOdrjo2OYW3sSWnplmwsITMKMvSQqIys3xkL20k0D/sj/3x/Wfu2XPnc+797T333kFXbgi6noSHVq8pGYmie3Nj5yvoxp+udY+mSmuXrFtXGXUNBAIoIf+9jra2Hesf601wwPUZDI3suPTrH11bPny/J9ARJLf/0v5V1zeT4vs6hREdJ3776eeugrjQvgBW/9AHj1+68M8PsXEJIKCns0X0j+y6eOHPZ6jEkL4ANIVCq9qP//Ut6hcCWwe9AI2yvbNPnHNOp1CfgPj7KrzcpvaLjVnZvTWETIHK3KwQwgqzO84Vso+PDwEDQxke+zWReZ60+STVqKChwHhTYjRV4XnFL3gV4o2HAnN04hGIKmH5EMNoeCEFBOj1pszzhGBJ2smxfqUYWgNqZTPvk4iqYsy6pYAvEwrQFS0+hldlQjTRg03PfCgQs7lZclYSCRONMFJgbTwUCGMDSr5TUDEvYA4HKnOgQJJgKmkOXlaxxLJEX9sPCqTKupaaIvhl2a/xnIBHQoHbVVNM6udQdSxgYYlizoMCo9Vm72CUV6mbpKZ2F+vsD13KKXJASEQ2Byv63Bve3RC5dTEQSMcmjkOj7UUz7Bm5L9UUth4GAlGiqdqoafYiu7OsTlL5uq9zKAhAWX+j/HBOsWuGr0GTntWZypPPQUYQ82QJa4jbpt1rt6uGLvGKT2zaQgOAnCZfIXm1MCPXzmpE4yVJNIWpoBqkl7/d9sXuLMavEdXvtvamFmYcrIhpB7/85OVaLaATouZzLQJTGgoDxk3c9Bazq4zxyc2+DCfjklbQwC3t498vn121l610uRz5LKd/VEHBgNizl8+3bqs3dcwMucfQceAR6Ag+PZvlOVTdoJo4PY/IUmAldFdGdx07umo/VgPumDEYYxMOTN7zWdOyBmIUo1GihI25YAChgk6Pt1kaiuayPNHn9AG4tfWkw9gYgkaX8QYZDweoBcuOHXVaJ0qmSzSUbDhAl3LbO4+EU8jmJrqcDgdyXNL2/af3haIRHlNTMuFAGKPU1754usI6I0xN7gMwkmvY0Wh758zkm9wGkWxwIF3Sat9MRJ+fGrDU8HNhcOAOotc0zqfQd8ccsu4KBQP0QkP3ND5hFfPHI/n6CgQGYlym5tr9gtUqPt3KTYADCWXEKCzfZ52qETvPd0bBgaQyxRx150HrljyrsOnv7xFwQ0FUigtrycMO3k9HTxLWHbm8BzCCu60sp4sZjMNQ41aEpsjNEw+fKQ4eeOpqlj/Nyb54es0bCC01AhvRB51zgwaoqxnMEm01ograF6ONLQaXgA6cmgeqgU306ysplPPaVCpPNLQURB84+ToEWODm1f+2MXqKFFg6zHq+cmo9BGC9+szuVrZqcJsTu5vjggdGlLo4Ie9qK7rEUEX4HWmOe9EiR1z3S2M83vKyscA7Ej22qnrZrJ4lWeSqqn70gcmDaRT0J09CSXV1XflwW3K4lZvt1VVVdfX1NTODBVIHFu2trynPiuxJVlFGRlbuovLciMTggLjUlAnTxw5PGzhoSHcGDUy7JWLAbSnhybH/A/wLPQQyrzxY9jwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 770000,
            actualAp: 28000,
            actualDps: 6412.21,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1500000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAQECAgICAgIDAwIEAwIEBAUEBAQFBQYFBQUCBRQGBgYIBwcICAkNDBALECEQEBYZEAYSEhMTExMTExMWFBsWFh8eFQ8XFiEcGR8WGiwcGxsdHSAmGxQgHSIeHS4iIiImIho4HgMkIiglIyYxIhwoJislJjksKTEuKicvKycrLjgzLiowLjdJLBM1MytILRgwL0w2Mzs9ODJANzA7OEI9PDtQNyZAPjtBPjxPOTBHQjNMQyhCPlxePjFOSUNwQRNMTExpRzhVUEtUUlBuTkCFTQ5eW1WAUyFZXF5iX1mUVQ56WkhnY1+OWyGHYT1va2Nvb22jZSFxcW13dXGEc2Cxahl5d3GAfHS1cyeBgX+Fg4DJdxiNhHWhhFiPi4KUkYqVkYiYlY+/kFyhnJSioqGopJywrae3tbC+vLjHxcHhwavNysTV0cvW19Tc2tby2sXi4d375M7r6eXw7ujy8ev6+PL//ff///7FtqW6AAAAgHRSTlMArb/xDCw3av8heuXWihdeSv89nsn//56SeS1Y/+L/wf//Zabb//FHgv//0P////+n4F3//8SH////t///oP3v/+XKsf///v+I///h/////5rw////////vf//5///////8P///fr/pP/////Q/////////////////////////yM8W0wAAAV/SURBVFiFnVf/V9pWFI8tKn4BRA1OTTFos2nk+bRkUmy01BUUrFhrLC0isYymxCwJDMgyILn/+p7d7M7ZzqHEew4/hJPP59373ud+7gtFDYhgYOXHJ+O+Qa8Mjk3hOYmVB+NDr59vcZGt16sPJVjY2uKYF/j52kMJVtiIP97Oh+ceSjCPubzWTkQCDyUIYNVx/1SnRx+Env3h56d+A/5wyg+qYDl7c/0xmdB/d9Tk6dnemFf8fr12/vlm44VZLiePbm5VddcbfjW/7Auu3R6FhRe0/+h217ctrXsi8FG+499qpYtoTEiEN8r7FLW07C2F3S44evksyuMXW/SZXpn0BqeOwemZudPrZAynhcjpu7LurYLtDtjQen96mYmgNIodvLvsWCEPeN+Vlm2CXbn5mIzxiI8lb963YN9LBus1VTZAzV1fsnwiEcldv3GMCU81PO03C7aROf0Yj+Fo7OC0XF30hKf2wNJLmnz5Lh7BW1vxm3LW2ymOmtCyJalz8etBhBVjyduseeyJYNvpN+WEDsrlUYwXwhtnqulNylfgOJ92XOhcJMM8TaRo1j3pwHfudo1mNmtqlZyfpcPJcqL9wVMGo/m+2+/u7BQr+aiA+ZSUda0ZTwyhOujKpxOlno4KgsBLhaY3IVHUh2a2AVq9kY6yLOcvGXLrytt4WczKXbNrGwLNsqy/3pVqeW9SpObqsg0NlecRRjxuq4aKvDH45opgNRWaNBNK+SVXN0yP3hyS1EYrz/KY5QU2pVvWlTf8mFQrlPUsizBDkhB11ep4mZDBD8Viud5pIhaxDIcQ0nW6BcOLaabVamhFgDrNYYbGvMAXQHr0Bd4Oid9zSkUwdHBLNEmB53mMxW5nivrSmx0Kv374jIw0wwI7zSA6LzIcTnE6FGfGWsOlsPtLaMO2GwAmz3G0LNIcEukSNHOh/eH07Dv5bDpG13WrLKa5ejaMsMBIfZCGFcKeTRYnCdhZBtNpNe9HSODzFpjDNeToOQBYmtMHE5MSJKXgxxijrOl2hzrGyQa0e6C2iCdVWIFO16pFFiGM83WwjCGGy7bj6F0wNOj9XUFBUQoMJg1VkJ22dRX8Hn4PbNKEzVqfVKBjzKBaRcmHeYQ4qWQ7rebId/CLYEkWWHIHem4/z6bovCJVZYYlmyFJDdDt0vhgglWj0IZurQk9soXECRhiiorMkRq4UkEFs9mOLQ0kGE1Y4NR06Pcct0ineFY+31GqiMGYrxSrrl13pc2BBIEOuErJcfo9sBCNOVQ/XFOUFGloVClVe6DYWmmgmhf6oBHF9Pt9qBL5sClte1KRCRwJcrHUBV3vlqxngxgO21mT4HvQ4WmMmKy2OkP2gLiiKJekDjQUe/K36iBvDCXUu/UdqNIcjxlJGZ2tKkRHXLpaIbOhWz+klvSXAwhGJXDuEmgWBKI/XpGoWVlNMwKflpWiASCTdnimDbi8zyrkdtVznGoxzWImrR9Sy7KaZwSUrpVeGi7od+kfawNuG3et1IPW9hrZOUbS1glBXaIFQdycGCMEza8N+VYb4K++QxfcKyrIpBDWqjPUsmIU/QinZqgJHdr/JP/TQIPeg84yNc6Jwtz+Sx+1WjhZ8fNYXKSCujrkhD48IZ8avIiXKWJBE2PUBM1icY1a2hx2tvmC1CyDRO7eggkBEjfvLtDDxwIniOz9gqN3tow9jdYxBgnik/unWSJKQfRy1aVCNBLx/P2T7wnp7NSCFwIqwPLcN+8IxpPxRHx+0Pv/Dd+rTPLgW85j8Tc5Eq+Gnc7BieD2+8yb3Eho8muMB6KZzEEmd3FxMMRoDDz2kyBLZuL+fyMavftFyV/T3+OYCQTmRh7Nzz+dnpp6fB9TU1PT0/OPRgKBwOT/T/Mv7sGBFyKctwwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 525000,
            actualAp: 12250,
            actualDps: 1512.35,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1500000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 46800,
            actualAp: 2880,
            actualDps: 3600.0,
            magnification: "3600%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1350000%",
            isBoss: false
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
            actualHp: 18000,
            actualAp: 1800,
            actualDps: 1317.24,
            magnification: "3600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1350000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQECAQECAgIEBAQHBwgJCQgLCQkNCQkNCgoUExQWFRMhFxMhGxsgIiMiIiMnJClBHBkjKTMtKypVIhwsNEE3ODc3Oj5ENjI2PkJkMC0+R0dCR0lDTk5kRT1LVFVSWFpaWVdTXF90VklcZmhubm5ncnJweXuYbVV2g4N/i4ufiHqVlpq9kXSio6TGooetrrHer465ur3ouZjHyMjuxqvP0NLZ2tr/1bTj5OTs7e7x8vP5+vv///85z0iDAAAAQHRSTlMD1w/qHi1DoVFixHiet/7m0Hf9/+mV3vylu//+///M////5b7///7R/v/////0///+/////v/+//////////8ATbfs5AAABAdJREFUWIXtln13ojoQxikFBN9QKjcqRaxvmIJIIU0TScL3/1YbcNvqdrvCvffPHY8ejzA/n2cymaCU/zGUv4C/gP8FoJtjdzpbLFaL6djU1fYAC+xgFMuI4ijarxZuz1DbyFJKfeQHwWYPZXoUSVQEdwvXaqxF/pnSA4FfQaSUKKreMYRwNZOOLqQoqqn9Dlrfog9kfuDLV62khkgtcC8phnammAPb7mnfAGQlbC+oGN6HkqgGvRvSzNFQRu87QFmqZn/iVSqCX+xUH/u971T5Q9v6FlAxjJpRW/ElZbPbQ7hbPj4ud/FueI6vEq5XTDJGXpVcC5GGnuZzP3iae5WAh4fh0LgBqH7Qe4PJuxPJeNrJ8IfOcL7cLrtfq/jbnpEFGVXlrDnech7MHx7mx9f85auAb/dCLaSuyOPc8xznvvv8djr0qjVVlCaAdyHg8VHqAE6n85wf5TKM+tb64F422B8AMnT7n4Ht+Q5YOce3l629Hg2cQ/7S1z7ybgBM2XyqMUIMA5i/5tuUjc3l89Zx7L51bvQbgPPlUHAaBKfTKfcINsrp0dV6A/sMabJzdSS4iMCrJGz2JDXXp1l5LrPtdJsALMoLnjnHPH99DlIaHA6jn2mKYd6yUF2fFjglBGzzt7dnAAvP8Wa/mvwuDNeVDjCjCa8A+esRBAhGZN0QoB7yla6YWVHskgxsX8jb0elME0HchgA9Px3n9gpR0nEiACklGeiXbrJu2kjK9OV4nAMsQs2LQUSLAvsTrbyalzeKqE2XACA6NuMdgCnG6e6ygA0ApTZxRq5lHCgIkjiRE8afXI/Wm32g6aUxRQKCJNk/eUH65FxPpduNpLgZF5mz54TQFMuOnOjtAD0sBAYAc0QISlkWgNll0m2AiRjbgFiuQFGQtCjgMBi3ApRrkTqbrMCEcYoKcbDA5UI0AOjhxg4RQ5RzTJkI1Um/HaBUOt2YFohxBikXodK5rGKzk3ycyTXgIt1jzhNNbVfEKqaUk4ITmCHO0NUqNgMoIWfS/XqBECuI2R6gp4IxgYxxJgF0fHWtEUDONM7ZrDRTLK1M2wMWjMkK6qUWYY5Z2BqgQiEFLOSXFeGIpVcnbBOAkckSIGldDQlDPGu5mWQXFIzjWKYpK0KxQK0Ba8GLLFQqCwih9gA1ETyrHEgLafovFBhYUFxnKWGWUYHbAmQJCn4+ShY4I4JcPac0mQdc8PV5kuohIoJe9XKDmRhS/HGSqIuUZC0BpRXHn6KtLLYaPyP9jHERft6lI3r9qNYAELKL/aceira70SSX/6lBkY1bTSQlFPKxSFEVtYrS9GGSrazP4+3PANXqdQH07+/uP2M4dObO/cdK3AJ0OoNu9zL/7q7b7XR6H65+AEjUZYFbVXVIAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 700000,
            actualAp: 21000,
            actualDps: 3281.25,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1350000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAABAAABAQEBAQEBAQECAQEDAgEGAAEEAgMFAgEFAwMFBAMHBQUKBwYfCAkeCQoiCQgaDw0eDgwkDw4aFxYoEg5FBQgoFA4uEhEcHBw3EQ4WIBwdHR08FRYjIh41HBQ7GBgpJCFIGRszJCI6Ih5JGxdhExVFIx5EJyE0LzBYISNcIiF7GRw3Nzc8NzdqJSdgLCZMNzF2KCtoMChVOTVqMi2NIiVFRUV+LS82UVeVKSx2OTZxPy+KMzVOTk5STU2SNTZSUlKBQUGnMDOaOTxsUU5SXGCORjmkPD6EUk+bSzetQUFnYl9lZWW7Q0VpamqGX12lVT9ecopvcHC4W0PTTlF7eXnDZkmBgYGheGXPaUyLi4unhXHhcFLbeViTk5PseliZmZmfoKHQkXWkpKSpqam+ppWxsrK3t7fNs5+7u7vBwcHExcbjwqvKysrax7PPz8/V1dXvzrjb29v23MPj4+Po6Oj/5Mvr6+vv7+//7Nb19fX6+ff///8YXU45AAAAgHRSTlMAxe0NKZj/HUimNdtguIBxxf/pWoO0/5f+/8am2sSB/9Z4qP//kf/l/sbwtf/w//7d//+V/9///v/+/////8D/y///o////////v///v//1//////////////////////////////////////////p/////////////////////7w+pywAAAUdSURBVFiFnVZrU9paFMUGkaKiaGvVPvBB0VaqBVGEK0VyMWI0VKTQGI0aQxODCTcmxsTEk/PXb6jT3pn7oXPC/kAmM6yV/Vhn7RMI/DGwsdnJF9E//+dPEVnaPztrHS4N9YkPVy6uLi4vrloLfRLMNi5Pzi4vT64az/vCR5InZ61G6/Kk1XrRF0G44uEb+63G/tmX/jKonLTiyeJhsnKy31cbI5nWYe3bcaO6R20E+yHARkunj493N8YePt8PPPpq5FPl9vHOvUlk/CeAzW8cnh3GFs9vHv75POxfi5MfW5cXrXS8dvfj9C3mGx4Ivzy8OiumEllav/+RX/FdABb8ctXIJHB8a5+/vr05Xv0U9skwf7JfTJAUXtjeu7m7b1eOSv4YsI3MYSZLkURhu8I9PN4frx55x2n9b/QEPnxpxAmCKOH49l7n4eE8TS4ForyEnMar+VY8ReEEQeIlvHnrCund6TkujzzMyMh6bhincJzEicJWhX3oZJerzBz6ccCwjeg4RZAEUSjh6d1j6TRZrb5GhnsxtBBOH5FEOpHCjwrZ7c38t3Lcl6UEwyMEReDpVGx6azeer1U3l/EJPwRY4JU3Q5zazdTPi7G/mNhWiUj5k+OsR0CQy9fwRqqHQvli9nvBn5R+Emxvnm7Gms2961t6eTnuyxaDMZwkyFW2ukiXp/bub4/X/jrwZe1vUmmKJIvt5BSr0punB1O0UFz2YYvRQjpLkrsH5dDaGsNPxZp8s54kJtEJPuCpLElQmVCMFoV6U27WeD2/5aOGl6VCliCpmVhpmm5XoVsNcTC/vIFOEEl4B5EgEwVqta00oVymqzST89WEElGiSilq9UCBUrnG8rV8txyPoBMMpanSUTq1W5BVqNOCUtfFLnfuQ0qRFEXurhVXpa5pSQJQypCXpOt19ARyycL32bd7vKZDXeFZvi6uiRqDTIBt5KILqfBXUbeAo6oaK3Ac3TZr71EJPhSfB4awSYk3gAVlGbiW7iqsgUzwvjjee+woouNYgNdMW++aBmfUEKcwWZzo7bIgK0nABjILDUcRHNDWv6LhI8X4T+t4J3OKVwEvQhVKbWBJGo+2IzdST+PeUVnNsR1GNxTIsVBXFRFJiQu5J/cPcx3edFyFgZoCGQZ2jY6I1IOJgafnisqJXgUsD7vdn7+2wCMpMfiU5xCtsx1oO3QXdjXAdlzVltp+7jljosKrrtulbVcxDFYHmqlJ6FL2WqgJguVAgXUdyVJpE+iG3kXfzoEIp3EycFxOhIYIZdoCum6qiELoxXtFbJuOYzKaq0lQ8jIwVKDSyJclrKlzMrTcLmM73Q6UWAOYMtAY5OXUa6HekyEDHKkDRVYDTsfWOGRf3lEFwVMhpHlgtzueEFUAOobWRh1DkPUqcC3HpFVH51XQ7BFIXUNAHsNXvVeBqzQtR2VNs8x2AZA7jog8hndSx7a9FtSBrbCOXuY8ArXjvaMa+1DNdS0LMjQwFRaoeVYGQBMgU0f25REJQuDU2rapc1AcbMsutBjI5NE3Q3BHhmbZcnSGt9cDOzo06nNO9Zmfa3ckT4cYpz72+p1X0ko58SaaHxvxgQ9gE9Pj2OtfkPHVuN/79lh2e+m/jN9ks598fT+AfT4oVd79flsqEWTl8woqx1AkMpirJIsfR0cHejE6EC+kN/OV/cwgCjz4LORFMreZmwn9iqnFqcWZmZlkKIRAgYVHooPPR9/OzQ0/+x3DwwOjo4PRsZH/H+l/AQoofSqglHFcAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 315000,
            actualAp: 21000,
            actualDps: 4772.74,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1350000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 9369,
            actualDps: 17566.86,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1200000%",
            isBoss: false
          },
          abilities: {}
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
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1200000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgICAgICAgICAgICAgEDAgMDAgMDAwMDAwMDAwMDBAYEBAQEBAQEBAMFBQYFBQYGBQYGBggGBgsHBwgICAoJCAcLCAYICQsJCQoJCQkKCQwKCQwGCRkJCg0KCgsKCg0KCw0LCwoLCw8LCw4IDBUQCwcLDQ8MDBENDQ4NDQ4QDAkODg8NDhMODhMODhMCEC0PDxUPDxMQDxQNERgQEBUREBERERYSERMUEQ8UERAPEiIUExQTExoSFBwUFBcYFBIWFRgbFQ8WFh0XFxgaFhQWFx4XFxwYGBgZGRkbGBoXGSIWGScZGSAaGR4ZGiIeGR0ZGyQaGyIaGyQbGyMkHREcHSYeHyYgHyEiHxwfICghICMfICkfICkfICkcITAnIRwgIi0mISApIRsiIy0kJCUiJC4jJDAmJCcjJS8eJjskJjAkJjEnJyUuJiEqJywmKDQvKCMtKSYuKSomKUAoKjY3KB0qLDgtLDE0LhwrLTkuLi4yLi4qLkMvLzM3LiguLzwvMD4uMzs3MS8wMkA9MSUzMzcxM0JANRE5NSw1NjcxNUouNVY0NkQ2Nj05NzZBNS00N0c3OTpHNiE1OEg5Oj06OUA3OUlCODRFOSo2Ok9DOTM4O0wyPVg6PU5DPDtDPi87Pk5KPDM/QEFAQEI8P1FNQRtDQUQ+QVNIQTw/QlRARFZERkxCRVlRRDlHSElLR0RER1tJSk1HSl5KTExOTk5QUVVaUktmWCtWV15YWVtdYWZgZGZuYFdiZGZtZkxnaG16bjx9a16GaVdvcW+Bb2GJblx3en+RdmR8f4KTfWx/goqFiI6JjI+kiXepinOPkpWkjXqPkpqtjnmYm6O2mYKio6O8noS/pI/Rp4SwsLLIq5HYs5i/xsXjvZ/qw6Tn0K/w2bjf5uj/68b+//////8Lu7VZAAABAHRSTlMAAgcRNjpHc5WivsjW5ev/IHoADBpMZfK5UBUqL15uJY6ogtHdfUFZ/wCHtpf/c7Ac/57EN4Wr9dR63KdRuADApPa1vf+2nf8A1f/wlKmw5P96o0yR////0rJox1Pgvfj/qv8/1+j/y/v2/wDZ/8L//+TqAP//0/D4/4j/ov//cPwA/+P/9P+K7v//Nr3//////////2b///+2///x/////////3X/////////zLf/tP//////7v////////9fkf////8A//////92AP///+rI/////6T/2f++////////////4ub+///H/9jn/////////////////////v////8AL8LRDgAABMxJREFUWIWd13tUFFUcB/ArkJwkRV5r8pIQlEFByLfJnFKPpOlpU2CljrRpWD7Q1RbS0M1Ix8OkrcPZiGZyDlOdrjo2OYW3sSWnplmwsITMKMvSQqIys3xkL20k0D/sj/3x/Wfu2XPnc+797T333kFXbgi6noSHVq8pGYmie3Nj5yvoxp+udY+mSmuXrFtXGXUNBAIoIf+9jra2Hesf601wwPUZDI3suPTrH11bPny/J9ARJLf/0v5V1zeT4vs6hREdJ3776eeugrjQvgBW/9AHj1+68M8PsXEJIKCns0X0j+y6eOHPZ6jEkL4ANIVCq9qP//Ut6hcCWwe9AI2yvbNPnHNOp1CfgPj7KrzcpvaLjVnZvTWETIHK3KwQwgqzO84Vso+PDwEDQxke+zWReZ60+STVqKChwHhTYjRV4XnFL3gV4o2HAnN04hGIKmH5EMNoeCEFBOj1pszzhGBJ2smxfqUYWgNqZTPvk4iqYsy6pYAvEwrQFS0+hldlQjTRg03PfCgQs7lZclYSCRONMFJgbTwUCGMDSr5TUDEvYA4HKnOgQJJgKmkOXlaxxLJEX9sPCqTKupaaIvhl2a/xnIBHQoHbVVNM6udQdSxgYYlizoMCo9Vm72CUV6mbpKZ2F+vsD13KKXJASEQ2Byv63Bve3RC5dTEQSMcmjkOj7UUz7Bm5L9UUth4GAlGiqdqoafYiu7OsTlL5uq9zKAhAWX+j/HBOsWuGr0GTntWZypPPQUYQ82QJa4jbpt1rt6uGLvGKT2zaQgOAnCZfIXm1MCPXzmpE4yVJNIWpoBqkl7/d9sXuLMavEdXvtvamFmYcrIhpB7/85OVaLaATouZzLQJTGgoDxk3c9Bazq4zxyc2+DCfjklbQwC3t498vn121l610uRz5LKd/VEHBgNizl8+3bqs3dcwMucfQceAR6Ag+PZvlOVTdoJo4PY/IUmAldFdGdx07umo/VgPumDEYYxMOTN7zWdOyBmIUo1GihI25YAChgk6Pt1kaiuayPNHn9AG4tfWkw9gYgkaX8QYZDweoBcuOHXVaJ0qmSzSUbDhAl3LbO4+EU8jmJrqcDgdyXNL2/af3haIRHlNTMuFAGKPU1754usI6I0xN7gMwkmvY0Wh758zkm9wGkWxwIF3Sat9MRJ+fGrDU8HNhcOAOotc0zqfQd8ccsu4KBQP0QkP3ND5hFfPHI/n6CgQGYlym5tr9gtUqPt3KTYADCWXEKCzfZ52qETvPd0bBgaQyxRx150HrljyrsOnv7xFwQ0FUigtrycMO3k9HTxLWHbm8BzCCu60sp4sZjMNQ41aEpsjNEw+fKQ4eeOpqlj/Nyb54es0bCC01AhvRB51zgwaoqxnMEm01ograF6ONLQaXgA6cmgeqgU306ysplPPaVCpPNLQURB84+ToEWODm1f+2MXqKFFg6zHq+cmo9BGC9+szuVrZqcJsTu5vjggdGlLo4Ie9qK7rEUEX4HWmOe9EiR1z3S2M83vKyscA7Ej22qnrZrJ4lWeSqqn70gcmDaRT0J09CSXV1XflwW3K4lZvt1VVVdfX1NTODBVIHFu2trynPiuxJVlFGRlbuovLciMTggLjUlAnTxw5PGzhoSHcGDUy7JWLAbSnhybH/A/wLPQQyrzxY9jwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 660000,
            actualAp: 24000,
            actualDps: 5496.18,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1200000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAQECAgICAgIDAwIEAwIEBAUEBAQFBQYFBQUCBRQGBgYIBwcICAkNDBALECEQEBYZEAYSEhMTExMTExMWFBsWFh8eFQ8XFiEcGR8WGiwcGxsdHSAmGxQgHSIeHS4iIiImIho4HgMkIiglIyYxIhwoJislJjksKTEuKicvKycrLjgzLiowLjdJLBM1MytILRgwL0w2Mzs9ODJANzA7OEI9PDtQNyZAPjtBPjxPOTBHQjNMQyhCPlxePjFOSUNwQRNMTExpRzhVUEtUUlBuTkCFTQ5eW1WAUyFZXF5iX1mUVQ56WkhnY1+OWyGHYT1va2Nvb22jZSFxcW13dXGEc2Cxahl5d3GAfHS1cyeBgX+Fg4DJdxiNhHWhhFiPi4KUkYqVkYiYlY+/kFyhnJSioqGopJywrae3tbC+vLjHxcHhwavNysTV0cvW19Tc2tby2sXi4d375M7r6eXw7ujy8ev6+PL//ff///7FtqW6AAAAgHRSTlMArb/xDCw3av8heuXWihdeSv89nsn//56SeS1Y/+L/wf//Zabb//FHgv//0P////+n4F3//8SH////t///oP3v/+XKsf///v+I///h/////5rw////////vf//5///////8P///fr/pP/////Q/////////////////////////yM8W0wAAAV/SURBVFiFnVf/V9pWFI8tKn4BRA1OTTFos2nk+bRkUmy01BUUrFhrLC0isYymxCwJDMgyILn/+p7d7M7ZzqHEew4/hJPP59373ud+7gtFDYhgYOXHJ+O+Qa8Mjk3hOYmVB+NDr59vcZGt16sPJVjY2uKYF/j52kMJVtiIP97Oh+ceSjCPubzWTkQCDyUIYNVx/1SnRx+Env3h56d+A/5wyg+qYDl7c/0xmdB/d9Tk6dnemFf8fr12/vlm44VZLiePbm5VddcbfjW/7Auu3R6FhRe0/+h217ctrXsi8FG+499qpYtoTEiEN8r7FLW07C2F3S44evksyuMXW/SZXpn0BqeOwemZudPrZAynhcjpu7LurYLtDtjQen96mYmgNIodvLvsWCEPeN+Vlm2CXbn5mIzxiI8lb963YN9LBus1VTZAzV1fsnwiEcldv3GMCU81PO03C7aROf0Yj+Fo7OC0XF30hKf2wNJLmnz5Lh7BW1vxm3LW2ymOmtCyJalz8etBhBVjyduseeyJYNvpN+WEDsrlUYwXwhtnqulNylfgOJ92XOhcJMM8TaRo1j3pwHfudo1mNmtqlZyfpcPJcqL9wVMGo/m+2+/u7BQr+aiA+ZSUda0ZTwyhOujKpxOlno4KgsBLhaY3IVHUh2a2AVq9kY6yLOcvGXLrytt4WczKXbNrGwLNsqy/3pVqeW9SpObqsg0NlecRRjxuq4aKvDH45opgNRWaNBNK+SVXN0yP3hyS1EYrz/KY5QU2pVvWlTf8mFQrlPUsizBDkhB11ep4mZDBD8Viud5pIhaxDIcQ0nW6BcOLaabVamhFgDrNYYbGvMAXQHr0Bd4Oid9zSkUwdHBLNEmB53mMxW5nivrSmx0Kv374jIw0wwI7zSA6LzIcTnE6FGfGWsOlsPtLaMO2GwAmz3G0LNIcEukSNHOh/eH07Dv5bDpG13WrLKa5ejaMsMBIfZCGFcKeTRYnCdhZBtNpNe9HSODzFpjDNeToOQBYmtMHE5MSJKXgxxijrOl2hzrGyQa0e6C2iCdVWIFO16pFFiGM83WwjCGGy7bj6F0wNOj9XUFBUQoMJg1VkJ22dRX8Hn4PbNKEzVqfVKBjzKBaRcmHeYQ4qWQ7rebId/CLYEkWWHIHem4/z6bovCJVZYYlmyFJDdDt0vhgglWj0IZurQk9soXECRhiiorMkRq4UkEFs9mOLQ0kGE1Y4NR06Pcct0ineFY+31GqiMGYrxSrrl13pc2BBIEOuErJcfo9sBCNOVQ/XFOUFGloVClVe6DYWmmgmhf6oBHF9Pt9qBL5sClte1KRCRwJcrHUBV3vlqxngxgO21mT4HvQ4WmMmKy2OkP2gLiiKJekDjQUe/K36iBvDCXUu/UdqNIcjxlJGZ2tKkRHXLpaIbOhWz+klvSXAwhGJXDuEmgWBKI/XpGoWVlNMwKflpWiASCTdnimDbi8zyrkdtVznGoxzWImrR9Sy7KaZwSUrpVeGi7od+kfawNuG3et1IPW9hrZOUbS1glBXaIFQdycGCMEza8N+VYb4K++QxfcKyrIpBDWqjPUsmIU/QinZqgJHdr/JP/TQIPeg84yNc6Jwtz+Sx+1WjhZ8fNYXKSCujrkhD48IZ8avIiXKWJBE2PUBM1icY1a2hx2tvmC1CyDRO7eggkBEjfvLtDDxwIniOz9gqN3tow9jdYxBgnik/unWSJKQfRy1aVCNBLx/P2T7wnp7NSCFwIqwPLcN+8IxpPxRHx+0Pv/Dd+rTPLgW85j8Tc5Eq+Gnc7BieD2+8yb3Eho8muMB6KZzEEmd3FxMMRoDDz2kyBLZuL+fyMavftFyV/T3+OYCQTmRh7Nzz+dnpp6fB9TU1PT0/OPRgKBwOT/T/Mv7sGBFyKctwwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 10500,
            actualDps: 1296.3,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1200000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 39000,
            actualAp: 2400,
            actualDps: 3000.0,
            magnification: "3000%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1050000%",
            isBoss: false
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
            actualHp: 15000,
            actualAp: 1500,
            actualDps: 1097.7,
            magnification: "3000%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1050000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQECAQECAgIEBAQHBwgJCQgLCQkNCQkNCgoUExQWFRMhFxMhGxsgIiMiIiMnJClBHBkjKTMtKypVIhwsNEE3ODc3Oj5ENjI2PkJkMC0+R0dCR0lDTk5kRT1LVFVSWFpaWVdTXF90VklcZmhubm5ncnJweXuYbVV2g4N/i4ufiHqVlpq9kXSio6TGooetrrHer465ur3ouZjHyMjuxqvP0NLZ2tr/1bTj5OTs7e7x8vP5+vv///85z0iDAAAAQHRSTlMD1w/qHi1DoVFixHiet/7m0Hf9/+mV3vylu//+///M////5b7///7R/v/////0///+/////v/+//////////8ATbfs5AAABAdJREFUWIXtln13ojoQxikFBN9QKjcqRaxvmIJIIU0TScL3/1YbcNvqdrvCvffPHY8ejzA/n2cymaCU/zGUv4C/gP8FoJtjdzpbLFaL6djU1fYAC+xgFMuI4ijarxZuz1DbyFJKfeQHwWYPZXoUSVQEdwvXaqxF/pnSA4FfQaSUKKreMYRwNZOOLqQoqqn9Dlrfog9kfuDLV62khkgtcC8phnammAPb7mnfAGQlbC+oGN6HkqgGvRvSzNFQRu87QFmqZn/iVSqCX+xUH/u971T5Q9v6FlAxjJpRW/ElZbPbQ7hbPj4ud/FueI6vEq5XTDJGXpVcC5GGnuZzP3iae5WAh4fh0LgBqH7Qe4PJuxPJeNrJ8IfOcL7cLrtfq/jbnpEFGVXlrDnech7MHx7mx9f85auAb/dCLaSuyOPc8xznvvv8djr0qjVVlCaAdyHg8VHqAE6n85wf5TKM+tb64F422B8AMnT7n4Ht+Q5YOce3l629Hg2cQ/7S1z7ybgBM2XyqMUIMA5i/5tuUjc3l89Zx7L51bvQbgPPlUHAaBKfTKfcINsrp0dV6A/sMabJzdSS4iMCrJGz2JDXXp1l5LrPtdJsALMoLnjnHPH99DlIaHA6jn2mKYd6yUF2fFjglBGzzt7dnAAvP8Wa/mvwuDNeVDjCjCa8A+esRBAhGZN0QoB7yla6YWVHskgxsX8jb0elME0HchgA9Px3n9gpR0nEiACklGeiXbrJu2kjK9OV4nAMsQs2LQUSLAvsTrbyalzeKqE2XACA6NuMdgCnG6e6ygA0ApTZxRq5lHCgIkjiRE8afXI/Wm32g6aUxRQKCJNk/eUH65FxPpduNpLgZF5mz54TQFMuOnOjtAD0sBAYAc0QISlkWgNll0m2AiRjbgFiuQFGQtCjgMBi3ApRrkTqbrMCEcYoKcbDA5UI0AOjhxg4RQ5RzTJkI1Um/HaBUOt2YFohxBikXodK5rGKzk3ycyTXgIt1jzhNNbVfEKqaUk4ITmCHO0NUqNgMoIWfS/XqBECuI2R6gp4IxgYxxJgF0fHWtEUDONM7ZrDRTLK1M2wMWjMkK6qUWYY5Z2BqgQiEFLOSXFeGIpVcnbBOAkckSIGldDQlDPGu5mWQXFIzjWKYpK0KxQK0Ba8GLLFQqCwih9gA1ETyrHEgLafovFBhYUFxnKWGWUYHbAmQJCn4+ShY4I4JcPac0mQdc8PV5kuohIoJe9XKDmRhS/HGSqIuUZC0BpRXHn6KtLLYaPyP9jHERft6lI3r9qNYAELKL/aceira70SSX/6lBkY1bTSQlFPKxSFEVtYrS9GGSrazP4+3PANXqdQH07+/uP2M4dObO/cdK3AJ0OoNu9zL/7q7b7XR6H65+AEjUZYFbVXVIAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 18000,
            actualDps: 2812.5,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1050000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAABAAABAQEBAQEBAQECAQEDAgEGAAEEAgMFAgEFAwMFBAMHBQUKBwYfCAkeCQoiCQgaDw0eDgwkDw4aFxYoEg5FBQgoFA4uEhEcHBw3EQ4WIBwdHR08FRYjIh41HBQ7GBgpJCFIGRszJCI6Ih5JGxdhExVFIx5EJyE0LzBYISNcIiF7GRw3Nzc8NzdqJSdgLCZMNzF2KCtoMChVOTVqMi2NIiVFRUV+LS82UVeVKSx2OTZxPy+KMzVOTk5STU2SNTZSUlKBQUGnMDOaOTxsUU5SXGCORjmkPD6EUk+bSzetQUFnYl9lZWW7Q0VpamqGX12lVT9ecopvcHC4W0PTTlF7eXnDZkmBgYGheGXPaUyLi4unhXHhcFLbeViTk5PseliZmZmfoKHQkXWkpKSpqam+ppWxsrK3t7fNs5+7u7vBwcHExcbjwqvKysrax7PPz8/V1dXvzrjb29v23MPj4+Po6Oj/5Mvr6+vv7+//7Nb19fX6+ff///8YXU45AAAAgHRSTlMAxe0NKZj/HUimNdtguIBxxf/pWoO0/5f+/8am2sSB/9Z4qP//kf/l/sbwtf/w//7d//+V/9///v/+/////8D/y///o////////v///v//1//////////////////////////////////////////p/////////////////////7w+pywAAAUdSURBVFiFnVZrU9paFMUGkaKiaGvVPvBB0VaqBVGEK0VyMWI0VKTQGI0aQxODCTcmxsTEk/PXb6jT3pn7oXPC/kAmM6yV/Vhn7RMI/DGwsdnJF9E//+dPEVnaPztrHS4N9YkPVy6uLi4vrloLfRLMNi5Pzi4vT64az/vCR5InZ61G6/Kk1XrRF0G44uEb+63G/tmX/jKonLTiyeJhsnKy31cbI5nWYe3bcaO6R20E+yHARkunj493N8YePt8PPPpq5FPl9vHOvUlk/CeAzW8cnh3GFs9vHv75POxfi5MfW5cXrXS8dvfj9C3mGx4Ivzy8OiumEllav/+RX/FdABb8ctXIJHB8a5+/vr05Xv0U9skwf7JfTJAUXtjeu7m7b1eOSv4YsI3MYSZLkURhu8I9PN4frx55x2n9b/QEPnxpxAmCKOH49l7n4eE8TS4ForyEnMar+VY8ReEEQeIlvHnrCund6TkujzzMyMh6bhincJzEicJWhX3oZJerzBz6ccCwjeg4RZAEUSjh6d1j6TRZrb5GhnsxtBBOH5FEOpHCjwrZ7c38t3Lcl6UEwyMEReDpVGx6azeer1U3l/EJPwRY4JU3Q5zazdTPi7G/mNhWiUj5k+OsR0CQy9fwRqqHQvli9nvBn5R+Emxvnm7Gms2961t6eTnuyxaDMZwkyFW2ukiXp/bub4/X/jrwZe1vUmmKJIvt5BSr0punB1O0UFz2YYvRQjpLkrsH5dDaGsNPxZp8s54kJtEJPuCpLElQmVCMFoV6U27WeD2/5aOGl6VCliCpmVhpmm5XoVsNcTC/vIFOEEl4B5EgEwVqta00oVymqzST89WEElGiSilq9UCBUrnG8rV8txyPoBMMpanSUTq1W5BVqNOCUtfFLnfuQ0qRFEXurhVXpa5pSQJQypCXpOt19ARyycL32bd7vKZDXeFZvi6uiRqDTIBt5KILqfBXUbeAo6oaK3Ac3TZr71EJPhSfB4awSYk3gAVlGbiW7iqsgUzwvjjee+woouNYgNdMW++aBmfUEKcwWZzo7bIgK0nABjILDUcRHNDWv6LhI8X4T+t4J3OKVwEvQhVKbWBJGo+2IzdST+PeUVnNsR1GNxTIsVBXFRFJiQu5J/cPcx3edFyFgZoCGQZ2jY6I1IOJgafnisqJXgUsD7vdn7+2wCMpMfiU5xCtsx1oO3QXdjXAdlzVltp+7jljosKrrtulbVcxDFYHmqlJ6FL2WqgJguVAgXUdyVJpE+iG3kXfzoEIp3EycFxOhIYIZdoCum6qiELoxXtFbJuOYzKaq0lQ8jIwVKDSyJclrKlzMrTcLmM73Q6UWAOYMtAY5OXUa6HekyEDHKkDRVYDTsfWOGRf3lEFwVMhpHlgtzueEFUAOobWRh1DkPUqcC3HpFVH51XQ7BFIXUNAHsNXvVeBqzQtR2VNs8x2AZA7jog8hndSx7a9FtSBrbCOXuY8ArXjvaMa+1DNdS0LMjQwFRaoeVYGQBMgU0f25REJQuDU2rapc1AcbMsutBjI5NE3Q3BHhmbZcnSGt9cDOzo06nNO9Zmfa3ckT4cYpz72+p1X0ko58SaaHxvxgQ9gE9Pj2OtfkPHVuN/79lh2e+m/jN9ks598fT+AfT4oVd79flsqEWTl8woqx1AkMpirJIsfR0cHejE6EC+kN/OV/cwgCjz4LORFMreZmwn9iqnFqcWZmZlkKIRAgYVHooPPR9/OzQ0/+x3DwwOjo4PRsZH/H+l/AQoofSqglHFcAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 18000,
            actualDps: 4090.92,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1050000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 7807,
            actualDps: 14639.05,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "900000%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 22500,
            actualAp: 11000,
            actualDps: 8918.9,
            magnification: "500%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "900000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgICAgICAgICAgICAgEDAgMDAgMDAwMDAwMDAwMDBAYEBAQEBAQEBAMFBQYFBQYGBQYGBggGBgsHBwgICAoJCAcLCAYICQsJCQoJCQkKCQwKCQwGCRkJCg0KCgsKCg0KCw0LCwoLCw8LCw4IDBUQCwcLDQ8MDBENDQ4NDQ4QDAkODg8NDhMODhMODhMCEC0PDxUPDxMQDxQNERgQEBUREBERERYSERMUEQ8UERAPEiIUExQTExoSFBwUFBcYFBIWFRgbFQ8WFh0XFxgaFhQWFx4XFxwYGBgZGRkbGBoXGSIWGScZGSAaGR4ZGiIeGR0ZGyQaGyIaGyQbGyMkHREcHSYeHyYgHyEiHxwfICghICMfICkfICkfICkcITAnIRwgIi0mISApIRsiIy0kJCUiJC4jJDAmJCcjJS8eJjskJjAkJjEnJyUuJiEqJywmKDQvKCMtKSYuKSomKUAoKjY3KB0qLDgtLDE0LhwrLTkuLi4yLi4qLkMvLzM3LiguLzwvMD4uMzs3MS8wMkA9MSUzMzcxM0JANRE5NSw1NjcxNUouNVY0NkQ2Nj05NzZBNS00N0c3OTpHNiE1OEg5Oj06OUA3OUlCODRFOSo2Ok9DOTM4O0wyPVg6PU5DPDtDPi87Pk5KPDM/QEFAQEI8P1FNQRtDQUQ+QVNIQTw/QlRARFZERkxCRVlRRDlHSElLR0RER1tJSk1HSl5KTExOTk5QUVVaUktmWCtWV15YWVtdYWZgZGZuYFdiZGZtZkxnaG16bjx9a16GaVdvcW+Bb2GJblx3en+RdmR8f4KTfWx/goqFiI6JjI+kiXepinOPkpWkjXqPkpqtjnmYm6O2mYKio6O8noS/pI/Rp4SwsLLIq5HYs5i/xsXjvZ/qw6Tn0K/w2bjf5uj/68b+//////8Lu7VZAAABAHRSTlMAAgcRNjpHc5WivsjW5ev/IHoADBpMZfK5UBUqL15uJY6ogtHdfUFZ/wCHtpf/c7Ac/57EN4Wr9dR63KdRuADApPa1vf+2nf8A1f/wlKmw5P96o0yR////0rJox1Pgvfj/qv8/1+j/y/v2/wDZ/8L//+TqAP//0/D4/4j/ov//cPwA/+P/9P+K7v//Nr3//////////2b///+2///x/////////3X/////////zLf/tP//////7v////////9fkf////8A//////92AP///+rI/////6T/2f++////////////4ub+///H/9jn/////////////////////v////8AL8LRDgAABMxJREFUWIWd13tUFFUcB/ArkJwkRV5r8pIQlEFByLfJnFKPpOlpU2CljrRpWD7Q1RbS0M1Ix8OkrcPZiGZyDlOdrjo2OYW3sSWnplmwsITMKMvSQqIys3xkL20k0D/sj/3x/Wfu2XPnc+797T333kFXbgi6noSHVq8pGYmie3Nj5yvoxp+udY+mSmuXrFtXGXUNBAIoIf+9jra2Hesf601wwPUZDI3suPTrH11bPny/J9ARJLf/0v5V1zeT4vs6hREdJ3776eeugrjQvgBW/9AHj1+68M8PsXEJIKCns0X0j+y6eOHPZ6jEkL4ANIVCq9qP//Ut6hcCWwe9AI2yvbNPnHNOp1CfgPj7KrzcpvaLjVnZvTWETIHK3KwQwgqzO84Vso+PDwEDQxke+zWReZ60+STVqKChwHhTYjRV4XnFL3gV4o2HAnN04hGIKmH5EMNoeCEFBOj1pszzhGBJ2smxfqUYWgNqZTPvk4iqYsy6pYAvEwrQFS0+hldlQjTRg03PfCgQs7lZclYSCRONMFJgbTwUCGMDSr5TUDEvYA4HKnOgQJJgKmkOXlaxxLJEX9sPCqTKupaaIvhl2a/xnIBHQoHbVVNM6udQdSxgYYlizoMCo9Vm72CUV6mbpKZ2F+vsD13KKXJASEQ2Byv63Bve3RC5dTEQSMcmjkOj7UUz7Bm5L9UUth4GAlGiqdqoafYiu7OsTlL5uq9zKAhAWX+j/HBOsWuGr0GTntWZypPPQUYQ82QJa4jbpt1rt6uGLvGKT2zaQgOAnCZfIXm1MCPXzmpE4yVJNIWpoBqkl7/d9sXuLMavEdXvtvamFmYcrIhpB7/85OVaLaATouZzLQJTGgoDxk3c9Bazq4zxyc2+DCfjklbQwC3t498vn121l610uRz5LKd/VEHBgNizl8+3bqs3dcwMucfQceAR6Ag+PZvlOVTdoJo4PY/IUmAldFdGdx07umo/VgPumDEYYxMOTN7zWdOyBmIUo1GihI25YAChgk6Pt1kaiuayPNHn9AG4tfWkw9gYgkaX8QYZDweoBcuOHXVaJ0qmSzSUbDhAl3LbO4+EU8jmJrqcDgdyXNL2/af3haIRHlNTMuFAGKPU1754usI6I0xN7gMwkmvY0Wh758zkm9wGkWxwIF3Sat9MRJ+fGrDU8HNhcOAOotc0zqfQd8ccsu4KBQP0QkP3ND5hFfPHI/n6CgQGYlym5tr9gtUqPt3KTYADCWXEKCzfZ52qETvPd0bBgaQyxRx150HrljyrsOnv7xFwQ0FUigtrycMO3k9HTxLWHbm8BzCCu60sp4sZjMNQ41aEpsjNEw+fKQ4eeOpqlj/Nyb54es0bCC01AhvRB51zgwaoqxnMEm01ograF6ONLQaXgA6cmgeqgU306ysplPPaVCpPNLQURB84+ToEWODm1f+2MXqKFFg6zHq+cmo9BGC9+szuVrZqcJsTu5vjggdGlLo4Ie9qK7rEUEX4HWmOe9EiR1z3S2M83vKyscA7Ej22qnrZrJ4lWeSqqn70gcmDaRT0J09CSXV1XflwW3K4lZvt1VVVdfX1NTODBVIHFu2trynPiuxJVlFGRlbuovLciMTggLjUlAnTxw5PGzhoSHcGDUy7JWLAbSnhybH/A/wLPQQyrzxY9jwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 550000,
            actualAp: 20000,
            actualDps: 4580.15,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "900000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAQECAgICAgIDAwIEAwIEBAUEBAQFBQYFBQUCBRQGBgYIBwcICAkNDBALECEQEBYZEAYSEhMTExMTExMWFBsWFh8eFQ8XFiEcGR8WGiwcGxsdHSAmGxQgHSIeHS4iIiImIho4HgMkIiglIyYxIhwoJislJjksKTEuKicvKycrLjgzLiowLjdJLBM1MytILRgwL0w2Mzs9ODJANzA7OEI9PDtQNyZAPjtBPjxPOTBHQjNMQyhCPlxePjFOSUNwQRNMTExpRzhVUEtUUlBuTkCFTQ5eW1WAUyFZXF5iX1mUVQ56WkhnY1+OWyGHYT1va2Nvb22jZSFxcW13dXGEc2Cxahl5d3GAfHS1cyeBgX+Fg4DJdxiNhHWhhFiPi4KUkYqVkYiYlY+/kFyhnJSioqGopJywrae3tbC+vLjHxcHhwavNysTV0cvW19Tc2tby2sXi4d375M7r6eXw7ujy8ev6+PL//ff///7FtqW6AAAAgHRSTlMArb/xDCw3av8heuXWihdeSv89nsn//56SeS1Y/+L/wf//Zabb//FHgv//0P////+n4F3//8SH////t///oP3v/+XKsf///v+I///h/////5rw////////vf//5///////8P///fr/pP/////Q/////////////////////////yM8W0wAAAV/SURBVFiFnVf/V9pWFI8tKn4BRA1OTTFos2nk+bRkUmy01BUUrFhrLC0isYymxCwJDMgyILn/+p7d7M7ZzqHEew4/hJPP59373ud+7gtFDYhgYOXHJ+O+Qa8Mjk3hOYmVB+NDr59vcZGt16sPJVjY2uKYF/j52kMJVtiIP97Oh+ceSjCPubzWTkQCDyUIYNVx/1SnRx+Env3h56d+A/5wyg+qYDl7c/0xmdB/d9Tk6dnemFf8fr12/vlm44VZLiePbm5VddcbfjW/7Auu3R6FhRe0/+h217ctrXsi8FG+499qpYtoTEiEN8r7FLW07C2F3S44evksyuMXW/SZXpn0BqeOwemZudPrZAynhcjpu7LurYLtDtjQen96mYmgNIodvLvsWCEPeN+Vlm2CXbn5mIzxiI8lb963YN9LBus1VTZAzV1fsnwiEcldv3GMCU81PO03C7aROf0Yj+Fo7OC0XF30hKf2wNJLmnz5Lh7BW1vxm3LW2ymOmtCyJalz8etBhBVjyduseeyJYNvpN+WEDsrlUYwXwhtnqulNylfgOJ92XOhcJMM8TaRo1j3pwHfudo1mNmtqlZyfpcPJcqL9wVMGo/m+2+/u7BQr+aiA+ZSUda0ZTwyhOujKpxOlno4KgsBLhaY3IVHUh2a2AVq9kY6yLOcvGXLrytt4WczKXbNrGwLNsqy/3pVqeW9SpObqsg0NlecRRjxuq4aKvDH45opgNRWaNBNK+SVXN0yP3hyS1EYrz/KY5QU2pVvWlTf8mFQrlPUsizBDkhB11ep4mZDBD8Viud5pIhaxDIcQ0nW6BcOLaabVamhFgDrNYYbGvMAXQHr0Bd4Oid9zSkUwdHBLNEmB53mMxW5nivrSmx0Kv374jIw0wwI7zSA6LzIcTnE6FGfGWsOlsPtLaMO2GwAmz3G0LNIcEukSNHOh/eH07Dv5bDpG13WrLKa5ejaMsMBIfZCGFcKeTRYnCdhZBtNpNe9HSODzFpjDNeToOQBYmtMHE5MSJKXgxxijrOl2hzrGyQa0e6C2iCdVWIFO16pFFiGM83WwjCGGy7bj6F0wNOj9XUFBUQoMJg1VkJ22dRX8Hn4PbNKEzVqfVKBjzKBaRcmHeYQ4qWQ7rebId/CLYEkWWHIHem4/z6bovCJVZYYlmyFJDdDt0vhgglWj0IZurQk9soXECRhiiorMkRq4UkEFs9mOLQ0kGE1Y4NR06Pcct0ineFY+31GqiMGYrxSrrl13pc2BBIEOuErJcfo9sBCNOVQ/XFOUFGloVClVe6DYWmmgmhf6oBHF9Pt9qBL5sClte1KRCRwJcrHUBV3vlqxngxgO21mT4HvQ4WmMmKy2OkP2gLiiKJekDjQUe/K36iBvDCXUu/UdqNIcjxlJGZ2tKkRHXLpaIbOhWz+klvSXAwhGJXDuEmgWBKI/XpGoWVlNMwKflpWiASCTdnimDbi8zyrkdtVznGoxzWImrR9Sy7KaZwSUrpVeGi7od+kfawNuG3et1IPW9hrZOUbS1glBXaIFQdycGCMEza8N+VYb4K++QxfcKyrIpBDWqjPUsmIU/QinZqgJHdr/JP/TQIPeg84yNc6Jwtz+Sx+1WjhZ8fNYXKSCujrkhD48IZ8avIiXKWJBE2PUBM1icY1a2hx2tvmC1CyDRO7eggkBEjfvLtDDxwIniOz9gqN3tow9jdYxBgnik/unWSJKQfRy1aVCNBLx/P2T7wnp7NSCFwIqwPLcN+8IxpPxRHx+0Pv/Dd+rTPLgW85j8Tc5Eq+Gnc7BieD2+8yb3Eho8muMB6KZzEEmd3FxMMRoDDz2kyBLZuL+fyMavftFyV/T3+OYCQTmRh7Nzz+dnpp6fB9TU1PT0/OPRgKBwOT/T/Mv7sGBFyKctwwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 375000,
            actualAp: 8750,
            actualDps: 1080.25,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "900000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 31200,
            actualAp: 1920,
            actualDps: 2400.0,
            magnification: "2400%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "750000%",
            isBoss: false
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
            actualHp: 12000,
            actualAp: 1200,
            actualDps: 878.16,
            magnification: "2400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "750000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQECAQECAgIEBAQHBwgJCQgLCQkNCQkNCgoUExQWFRMhFxMhGxsgIiMiIiMnJClBHBkjKTMtKypVIhwsNEE3ODc3Oj5ENjI2PkJkMC0+R0dCR0lDTk5kRT1LVFVSWFpaWVdTXF90VklcZmhubm5ncnJweXuYbVV2g4N/i4ufiHqVlpq9kXSio6TGooetrrHer465ur3ouZjHyMjuxqvP0NLZ2tr/1bTj5OTs7e7x8vP5+vv///85z0iDAAAAQHRSTlMD1w/qHi1DoVFixHiet/7m0Hf9/+mV3vylu//+///M////5b7///7R/v/////0///+/////v/+//////////8ATbfs5AAABAdJREFUWIXtln13ojoQxikFBN9QKjcqRaxvmIJIIU0TScL3/1YbcNvqdrvCvffPHY8ejzA/n2cymaCU/zGUv4C/gP8FoJtjdzpbLFaL6djU1fYAC+xgFMuI4ijarxZuz1DbyFJKfeQHwWYPZXoUSVQEdwvXaqxF/pnSA4FfQaSUKKreMYRwNZOOLqQoqqn9Dlrfog9kfuDLV62khkgtcC8phnammAPb7mnfAGQlbC+oGN6HkqgGvRvSzNFQRu87QFmqZn/iVSqCX+xUH/u971T5Q9v6FlAxjJpRW/ElZbPbQ7hbPj4ud/FueI6vEq5XTDJGXpVcC5GGnuZzP3iae5WAh4fh0LgBqH7Qe4PJuxPJeNrJ8IfOcL7cLrtfq/jbnpEFGVXlrDnech7MHx7mx9f85auAb/dCLaSuyOPc8xznvvv8djr0qjVVlCaAdyHg8VHqAE6n85wf5TKM+tb64F422B8AMnT7n4Ht+Q5YOce3l629Hg2cQ/7S1z7ybgBM2XyqMUIMA5i/5tuUjc3l89Zx7L51bvQbgPPlUHAaBKfTKfcINsrp0dV6A/sMabJzdSS4iMCrJGz2JDXXp1l5LrPtdJsALMoLnjnHPH99DlIaHA6jn2mKYd6yUF2fFjglBGzzt7dnAAvP8Wa/mvwuDNeVDjCjCa8A+esRBAhGZN0QoB7yla6YWVHskgxsX8jb0elME0HchgA9Px3n9gpR0nEiACklGeiXbrJu2kjK9OV4nAMsQs2LQUSLAvsTrbyalzeKqE2XACA6NuMdgCnG6e6ygA0ApTZxRq5lHCgIkjiRE8afXI/Wm32g6aUxRQKCJNk/eUH65FxPpduNpLgZF5mz54TQFMuOnOjtAD0sBAYAc0QISlkWgNll0m2AiRjbgFiuQFGQtCjgMBi3ApRrkTqbrMCEcYoKcbDA5UI0AOjhxg4RQ5RzTJkI1Um/HaBUOt2YFohxBikXodK5rGKzk3ycyTXgIt1jzhNNbVfEKqaUk4ITmCHO0NUqNgMoIWfS/XqBECuI2R6gp4IxgYxxJgF0fHWtEUDONM7ZrDRTLK1M2wMWjMkK6qUWYY5Z2BqgQiEFLOSXFeGIpVcnbBOAkckSIGldDQlDPGu5mWQXFIzjWKYpK0KxQK0Ba8GLLFQqCwih9gA1ETyrHEgLafovFBhYUFxnKWGWUYHbAmQJCn4+ShY4I4JcPac0mQdc8PV5kuohIoJe9XKDmRhS/HGSqIuUZC0BpRXHn6KtLLYaPyP9jHERft6lI3r9qNYAELKL/aceira70SSX/6lBkY1bTSQlFPKxSFEVtYrS9GGSrazP4+3PANXqdQH07+/uP2M4dObO/cdK3AJ0OoNu9zL/7q7b7XR6H65+AEjUZYFbVXVIAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 15000,
            actualDps: 2343.75,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "750000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAABAAABAQEBAQEBAQECAQEDAgEGAAEEAgMFAgEFAwMFBAMHBQUKBwYfCAkeCQoiCQgaDw0eDgwkDw4aFxYoEg5FBQgoFA4uEhEcHBw3EQ4WIBwdHR08FRYjIh41HBQ7GBgpJCFIGRszJCI6Ih5JGxdhExVFIx5EJyE0LzBYISNcIiF7GRw3Nzc8NzdqJSdgLCZMNzF2KCtoMChVOTVqMi2NIiVFRUV+LS82UVeVKSx2OTZxPy+KMzVOTk5STU2SNTZSUlKBQUGnMDOaOTxsUU5SXGCORjmkPD6EUk+bSzetQUFnYl9lZWW7Q0VpamqGX12lVT9ecopvcHC4W0PTTlF7eXnDZkmBgYGheGXPaUyLi4unhXHhcFLbeViTk5PseliZmZmfoKHQkXWkpKSpqam+ppWxsrK3t7fNs5+7u7vBwcHExcbjwqvKysrax7PPz8/V1dXvzrjb29v23MPj4+Po6Oj/5Mvr6+vv7+//7Nb19fX6+ff///8YXU45AAAAgHRSTlMAxe0NKZj/HUimNdtguIBxxf/pWoO0/5f+/8am2sSB/9Z4qP//kf/l/sbwtf/w//7d//+V/9///v/+/////8D/y///o////////v///v//1//////////////////////////////////////////p/////////////////////7w+pywAAAUdSURBVFiFnVZrU9paFMUGkaKiaGvVPvBB0VaqBVGEK0VyMWI0VKTQGI0aQxODCTcmxsTEk/PXb6jT3pn7oXPC/kAmM6yV/Vhn7RMI/DGwsdnJF9E//+dPEVnaPztrHS4N9YkPVy6uLi4vrloLfRLMNi5Pzi4vT64az/vCR5InZ61G6/Kk1XrRF0G44uEb+63G/tmX/jKonLTiyeJhsnKy31cbI5nWYe3bcaO6R20E+yHARkunj493N8YePt8PPPpq5FPl9vHOvUlk/CeAzW8cnh3GFs9vHv75POxfi5MfW5cXrXS8dvfj9C3mGx4Ivzy8OiumEllav/+RX/FdABb8ctXIJHB8a5+/vr05Xv0U9skwf7JfTJAUXtjeu7m7b1eOSv4YsI3MYSZLkURhu8I9PN4frx55x2n9b/QEPnxpxAmCKOH49l7n4eE8TS4ForyEnMar+VY8ReEEQeIlvHnrCund6TkujzzMyMh6bhincJzEicJWhX3oZJerzBz6ccCwjeg4RZAEUSjh6d1j6TRZrb5GhnsxtBBOH5FEOpHCjwrZ7c38t3Lcl6UEwyMEReDpVGx6azeer1U3l/EJPwRY4JU3Q5zazdTPi7G/mNhWiUj5k+OsR0CQy9fwRqqHQvli9nvBn5R+Emxvnm7Gms2961t6eTnuyxaDMZwkyFW2ukiXp/bub4/X/jrwZe1vUmmKJIvt5BSr0punB1O0UFz2YYvRQjpLkrsH5dDaGsNPxZp8s54kJtEJPuCpLElQmVCMFoV6U27WeD2/5aOGl6VCliCpmVhpmm5XoVsNcTC/vIFOEEl4B5EgEwVqta00oVymqzST89WEElGiSilq9UCBUrnG8rV8txyPoBMMpanSUTq1W5BVqNOCUtfFLnfuQ0qRFEXurhVXpa5pSQJQypCXpOt19ARyycL32bd7vKZDXeFZvi6uiRqDTIBt5KILqfBXUbeAo6oaK3Ac3TZr71EJPhSfB4awSYk3gAVlGbiW7iqsgUzwvjjee+woouNYgNdMW++aBmfUEKcwWZzo7bIgK0nABjILDUcRHNDWv6LhI8X4T+t4J3OKVwEvQhVKbWBJGo+2IzdST+PeUVnNsR1GNxTIsVBXFRFJiQu5J/cPcx3edFyFgZoCGQZ2jY6I1IOJgafnisqJXgUsD7vdn7+2wCMpMfiU5xCtsx1oO3QXdjXAdlzVltp+7jljosKrrtulbVcxDFYHmqlJ6FL2WqgJguVAgXUdyVJpE+iG3kXfzoEIp3EycFxOhIYIZdoCum6qiELoxXtFbJuOYzKaq0lQ8jIwVKDSyJclrKlzMrTcLmM73Q6UWAOYMtAY5OXUa6HekyEDHKkDRVYDTsfWOGRf3lEFwVMhpHlgtzueEFUAOobWRh1DkPUqcC3HpFVH51XQ7BFIXUNAHsNXvVeBqzQtR2VNs8x2AZA7jog8hndSx7a9FtSBrbCOXuY8ArXjvaMa+1DNdS0LMjQwFRaoeVYGQBMgU0f25REJQuDU2rapc1AcbMsutBjI5NE3Q3BHhmbZcnSGt9cDOzo06nNO9Zmfa3ckT4cYpz72+p1X0ko58SaaHxvxgQ9gE9Pj2OtfkPHVuN/79lh2e+m/jN9ks598fT+AfT4oVd79flsqEWTl8woqx1AkMpirJIsfR0cHejE6EC+kN/OV/cwgCjz4LORFMreZmwn9iqnFqcWZmZlkKIRAgYVHooPPR9/OzQ0/+x3DwwOjo4PRsZH/H+l/AQoofSqglHFcAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 15000,
            actualDps: 3409.1,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "750000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "600000%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 18000,
            actualAp: 8800,
            actualDps: 7135.12,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "600000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgICAgICAgICAgICAgEDAgMDAgMDAwMDAwMDAwMDBAYEBAQEBAQEBAMFBQYFBQYGBQYGBggGBgsHBwgICAoJCAcLCAYICQsJCQoJCQkKCQwKCQwGCRkJCg0KCgsKCg0KCw0LCwoLCw8LCw4IDBUQCwcLDQ8MDBENDQ4NDQ4QDAkODg8NDhMODhMODhMCEC0PDxUPDxMQDxQNERgQEBUREBERERYSERMUEQ8UERAPEiIUExQTExoSFBwUFBcYFBIWFRgbFQ8WFh0XFxgaFhQWFx4XFxwYGBgZGRkbGBoXGSIWGScZGSAaGR4ZGiIeGR0ZGyQaGyIaGyQbGyMkHREcHSYeHyYgHyEiHxwfICghICMfICkfICkfICkcITAnIRwgIi0mISApIRsiIy0kJCUiJC4jJDAmJCcjJS8eJjskJjAkJjEnJyUuJiEqJywmKDQvKCMtKSYuKSomKUAoKjY3KB0qLDgtLDE0LhwrLTkuLi4yLi4qLkMvLzM3LiguLzwvMD4uMzs3MS8wMkA9MSUzMzcxM0JANRE5NSw1NjcxNUouNVY0NkQ2Nj05NzZBNS00N0c3OTpHNiE1OEg5Oj06OUA3OUlCODRFOSo2Ok9DOTM4O0wyPVg6PU5DPDtDPi87Pk5KPDM/QEFAQEI8P1FNQRtDQUQ+QVNIQTw/QlRARFZERkxCRVlRRDlHSElLR0RER1tJSk1HSl5KTExOTk5QUVVaUktmWCtWV15YWVtdYWZgZGZuYFdiZGZtZkxnaG16bjx9a16GaVdvcW+Bb2GJblx3en+RdmR8f4KTfWx/goqFiI6JjI+kiXepinOPkpWkjXqPkpqtjnmYm6O2mYKio6O8noS/pI/Rp4SwsLLIq5HYs5i/xsXjvZ/qw6Tn0K/w2bjf5uj/68b+//////8Lu7VZAAABAHRSTlMAAgcRNjpHc5WivsjW5ev/IHoADBpMZfK5UBUqL15uJY6ogtHdfUFZ/wCHtpf/c7Ac/57EN4Wr9dR63KdRuADApPa1vf+2nf8A1f/wlKmw5P96o0yR////0rJox1Pgvfj/qv8/1+j/y/v2/wDZ/8L//+TqAP//0/D4/4j/ov//cPwA/+P/9P+K7v//Nr3//////////2b///+2///x/////////3X/////////zLf/tP//////7v////////9fkf////8A//////92AP///+rI/////6T/2f++////////////4ub+///H/9jn/////////////////////v////8AL8LRDgAABMxJREFUWIWd13tUFFUcB/ArkJwkRV5r8pIQlEFByLfJnFKPpOlpU2CljrRpWD7Q1RbS0M1Ix8OkrcPZiGZyDlOdrjo2OYW3sSWnplmwsITMKMvSQqIys3xkL20k0D/sj/3x/Wfu2XPnc+797T333kFXbgi6noSHVq8pGYmie3Nj5yvoxp+udY+mSmuXrFtXGXUNBAIoIf+9jra2Hesf601wwPUZDI3suPTrH11bPny/J9ARJLf/0v5V1zeT4vs6hREdJ3776eeugrjQvgBW/9AHj1+68M8PsXEJIKCns0X0j+y6eOHPZ6jEkL4ANIVCq9qP//Ut6hcCWwe9AI2yvbNPnHNOp1CfgPj7KrzcpvaLjVnZvTWETIHK3KwQwgqzO84Vso+PDwEDQxke+zWReZ60+STVqKChwHhTYjRV4XnFL3gV4o2HAnN04hGIKmH5EMNoeCEFBOj1pszzhGBJ2smxfqUYWgNqZTPvk4iqYsy6pYAvEwrQFS0+hldlQjTRg03PfCgQs7lZclYSCRONMFJgbTwUCGMDSr5TUDEvYA4HKnOgQJJgKmkOXlaxxLJEX9sPCqTKupaaIvhl2a/xnIBHQoHbVVNM6udQdSxgYYlizoMCo9Vm72CUV6mbpKZ2F+vsD13KKXJASEQ2Byv63Bve3RC5dTEQSMcmjkOj7UUz7Bm5L9UUth4GAlGiqdqoafYiu7OsTlL5uq9zKAhAWX+j/HBOsWuGr0GTntWZypPPQUYQ82QJa4jbpt1rt6uGLvGKT2zaQgOAnCZfIXm1MCPXzmpE4yVJNIWpoBqkl7/d9sXuLMavEdXvtvamFmYcrIhpB7/85OVaLaATouZzLQJTGgoDxk3c9Bazq4zxyc2+DCfjklbQwC3t498vn121l610uRz5LKd/VEHBgNizl8+3bqs3dcwMucfQceAR6Ag+PZvlOVTdoJo4PY/IUmAldFdGdx07umo/VgPumDEYYxMOTN7zWdOyBmIUo1GihI25YAChgk6Pt1kaiuayPNHn9AG4tfWkw9gYgkaX8QYZDweoBcuOHXVaJ0qmSzSUbDhAl3LbO4+EU8jmJrqcDgdyXNL2/af3haIRHlNTMuFAGKPU1754usI6I0xN7gMwkmvY0Wh758zkm9wGkWxwIF3Sat9MRJ+fGrDU8HNhcOAOotc0zqfQd8ccsu4KBQP0QkP3ND5hFfPHI/n6CgQGYlym5tr9gtUqPt3KTYADCWXEKCzfZ52qETvPd0bBgaQyxRx150HrljyrsOnv7xFwQ0FUigtrycMO3k9HTxLWHbm8BzCCu60sp4sZjMNQ41aEpsjNEw+fKQ4eeOpqlj/Nyb54es0bCC01AhvRB51zgwaoqxnMEm01ograF6ONLQaXgA6cmgeqgU306ysplPPaVCpPNLQURB84+ToEWODm1f+2MXqKFFg6zHq+cmo9BGC9+szuVrZqcJsTu5vjggdGlLo4Ie9qK7rEUEX4HWmOe9EiR1z3S2M83vKyscA7Ej22qnrZrJ4lWeSqqn70gcmDaRT0J09CSXV1XflwW3K4lZvt1VVVdfX1NTODBVIHFu2trynPiuxJVlFGRlbuovLciMTggLjUlAnTxw5PGzhoSHcGDUy7JWLAbSnhybH/A/wLPQQyrzxY9jwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 440000,
            actualAp: 16000,
            actualDps: 3664.12,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "600000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAQECAgICAgIDAwIEAwIEBAUEBAQFBQYFBQUCBRQGBgYIBwcICAkNDBALECEQEBYZEAYSEhMTExMTExMWFBsWFh8eFQ8XFiEcGR8WGiwcGxsdHSAmGxQgHSIeHS4iIiImIho4HgMkIiglIyYxIhwoJislJjksKTEuKicvKycrLjgzLiowLjdJLBM1MytILRgwL0w2Mzs9ODJANzA7OEI9PDtQNyZAPjtBPjxPOTBHQjNMQyhCPlxePjFOSUNwQRNMTExpRzhVUEtUUlBuTkCFTQ5eW1WAUyFZXF5iX1mUVQ56WkhnY1+OWyGHYT1va2Nvb22jZSFxcW13dXGEc2Cxahl5d3GAfHS1cyeBgX+Fg4DJdxiNhHWhhFiPi4KUkYqVkYiYlY+/kFyhnJSioqGopJywrae3tbC+vLjHxcHhwavNysTV0cvW19Tc2tby2sXi4d375M7r6eXw7ujy8ev6+PL//ff///7FtqW6AAAAgHRSTlMArb/xDCw3av8heuXWihdeSv89nsn//56SeS1Y/+L/wf//Zabb//FHgv//0P////+n4F3//8SH////t///oP3v/+XKsf///v+I///h/////5rw////////vf//5///////8P///fr/pP/////Q/////////////////////////yM8W0wAAAV/SURBVFiFnVf/V9pWFI8tKn4BRA1OTTFos2nk+bRkUmy01BUUrFhrLC0isYymxCwJDMgyILn/+p7d7M7ZzqHEew4/hJPP59373ud+7gtFDYhgYOXHJ+O+Qa8Mjk3hOYmVB+NDr59vcZGt16sPJVjY2uKYF/j52kMJVtiIP97Oh+ceSjCPubzWTkQCDyUIYNVx/1SnRx+Env3h56d+A/5wyg+qYDl7c/0xmdB/d9Tk6dnemFf8fr12/vlm44VZLiePbm5VddcbfjW/7Auu3R6FhRe0/+h217ctrXsi8FG+499qpYtoTEiEN8r7FLW07C2F3S44evksyuMXW/SZXpn0BqeOwemZudPrZAynhcjpu7LurYLtDtjQen96mYmgNIodvLvsWCEPeN+Vlm2CXbn5mIzxiI8lb963YN9LBus1VTZAzV1fsnwiEcldv3GMCU81PO03C7aROf0Yj+Fo7OC0XF30hKf2wNJLmnz5Lh7BW1vxm3LW2ymOmtCyJalz8etBhBVjyduseeyJYNvpN+WEDsrlUYwXwhtnqulNylfgOJ92XOhcJMM8TaRo1j3pwHfudo1mNmtqlZyfpcPJcqL9wVMGo/m+2+/u7BQr+aiA+ZSUda0ZTwyhOujKpxOlno4KgsBLhaY3IVHUh2a2AVq9kY6yLOcvGXLrytt4WczKXbNrGwLNsqy/3pVqeW9SpObqsg0NlecRRjxuq4aKvDH45opgNRWaNBNK+SVXN0yP3hyS1EYrz/KY5QU2pVvWlTf8mFQrlPUsizBDkhB11ep4mZDBD8Viud5pIhaxDIcQ0nW6BcOLaabVamhFgDrNYYbGvMAXQHr0Bd4Oid9zSkUwdHBLNEmB53mMxW5nivrSmx0Kv374jIw0wwI7zSA6LzIcTnE6FGfGWsOlsPtLaMO2GwAmz3G0LNIcEukSNHOh/eH07Dv5bDpG13WrLKa5ejaMsMBIfZCGFcKeTRYnCdhZBtNpNe9HSODzFpjDNeToOQBYmtMHE5MSJKXgxxijrOl2hzrGyQa0e6C2iCdVWIFO16pFFiGM83WwjCGGy7bj6F0wNOj9XUFBUQoMJg1VkJ22dRX8Hn4PbNKEzVqfVKBjzKBaRcmHeYQ4qWQ7rebId/CLYEkWWHIHem4/z6bovCJVZYYlmyFJDdDt0vhgglWj0IZurQk9soXECRhiiorMkRq4UkEFs9mOLQ0kGE1Y4NR06Pcct0ineFY+31GqiMGYrxSrrl13pc2BBIEOuErJcfo9sBCNOVQ/XFOUFGloVClVe6DYWmmgmhf6oBHF9Pt9qBL5sClte1KRCRwJcrHUBV3vlqxngxgO21mT4HvQ4WmMmKy2OkP2gLiiKJekDjQUe/K36iBvDCXUu/UdqNIcjxlJGZ2tKkRHXLpaIbOhWz+klvSXAwhGJXDuEmgWBKI/XpGoWVlNMwKflpWiASCTdnimDbi8zyrkdtVznGoxzWImrR9Sy7KaZwSUrpVeGi7od+kfawNuG3et1IPW9hrZOUbS1glBXaIFQdycGCMEza8N+VYb4K++QxfcKyrIpBDWqjPUsmIU/QinZqgJHdr/JP/TQIPeg84yNc6Jwtz+Sx+1WjhZ8fNYXKSCujrkhD48IZ8avIiXKWJBE2PUBM1icY1a2hx2tvmC1CyDRO7eggkBEjfvLtDDxwIniOz9gqN3tow9jdYxBgnik/unWSJKQfRy1aVCNBLx/P2T7wnp7NSCFwIqwPLcN+8IxpPxRHx+0Pv/Dd+rTPLgW85j8Tc5Eq+Gnc7BieD2+8yb3Eho8muMB6KZzEEmd3FxMMRoDDz2kyBLZuL+fyMavftFyV/T3+OYCQTmRh7Nzz+dnpp6fB9TU1PT0/OPRgKBwOT/T/Mv7sGBFyKctwwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 7000,
            actualDps: 864.2,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "600000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 23400,
            actualAp: 1440,
            actualDps: 1800.0,
            magnification: "1800%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "450000%",
            isBoss: false
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
            actualHp: 9000,
            actualAp: 900,
            actualDps: 658.62,
            magnification: "1800%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "450000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQECAQECAgIEBAQHBwgJCQgLCQkNCQkNCgoUExQWFRMhFxMhGxsgIiMiIiMnJClBHBkjKTMtKypVIhwsNEE3ODc3Oj5ENjI2PkJkMC0+R0dCR0lDTk5kRT1LVFVSWFpaWVdTXF90VklcZmhubm5ncnJweXuYbVV2g4N/i4ufiHqVlpq9kXSio6TGooetrrHer465ur3ouZjHyMjuxqvP0NLZ2tr/1bTj5OTs7e7x8vP5+vv///85z0iDAAAAQHRSTlMD1w/qHi1DoVFixHiet/7m0Hf9/+mV3vylu//+///M////5b7///7R/v/////0///+/////v/+//////////8ATbfs5AAABAdJREFUWIXtln13ojoQxikFBN9QKjcqRaxvmIJIIU0TScL3/1YbcNvqdrvCvffPHY8ejzA/n2cymaCU/zGUv4C/gP8FoJtjdzpbLFaL6djU1fYAC+xgFMuI4ijarxZuz1DbyFJKfeQHwWYPZXoUSVQEdwvXaqxF/pnSA4FfQaSUKKreMYRwNZOOLqQoqqn9Dlrfog9kfuDLV62khkgtcC8phnammAPb7mnfAGQlbC+oGN6HkqgGvRvSzNFQRu87QFmqZn/iVSqCX+xUH/u971T5Q9v6FlAxjJpRW/ElZbPbQ7hbPj4ud/FueI6vEq5XTDJGXpVcC5GGnuZzP3iae5WAh4fh0LgBqH7Qe4PJuxPJeNrJ8IfOcL7cLrtfq/jbnpEFGVXlrDnech7MHx7mx9f85auAb/dCLaSuyOPc8xznvvv8djr0qjVVlCaAdyHg8VHqAE6n85wf5TKM+tb64F422B8AMnT7n4Ht+Q5YOce3l629Hg2cQ/7S1z7ybgBM2XyqMUIMA5i/5tuUjc3l89Zx7L51bvQbgPPlUHAaBKfTKfcINsrp0dV6A/sMabJzdSS4iMCrJGz2JDXXp1l5LrPtdJsALMoLnjnHPH99DlIaHA6jn2mKYd6yUF2fFjglBGzzt7dnAAvP8Wa/mvwuDNeVDjCjCa8A+esRBAhGZN0QoB7yla6YWVHskgxsX8jb0elME0HchgA9Px3n9gpR0nEiACklGeiXbrJu2kjK9OV4nAMsQs2LQUSLAvsTrbyalzeKqE2XACA6NuMdgCnG6e6ygA0ApTZxRq5lHCgIkjiRE8afXI/Wm32g6aUxRQKCJNk/eUH65FxPpduNpLgZF5mz54TQFMuOnOjtAD0sBAYAc0QISlkWgNll0m2AiRjbgFiuQFGQtCjgMBi3ApRrkTqbrMCEcYoKcbDA5UI0AOjhxg4RQ5RzTJkI1Um/HaBUOt2YFohxBikXodK5rGKzk3ycyTXgIt1jzhNNbVfEKqaUk4ITmCHO0NUqNgMoIWfS/XqBECuI2R6gp4IxgYxxJgF0fHWtEUDONM7ZrDRTLK1M2wMWjMkK6qUWYY5Z2BqgQiEFLOSXFeGIpVcnbBOAkckSIGldDQlDPGu5mWQXFIzjWKYpK0KxQK0Ba8GLLFQqCwih9gA1ETyrHEgLafovFBhYUFxnKWGWUYHbAmQJCn4+ShY4I4JcPac0mQdc8PV5kuohIoJe9XKDmRhS/HGSqIuUZC0BpRXHn6KtLLYaPyP9jHERft6lI3r9qNYAELKL/aceira70SSX/6lBkY1bTSQlFPKxSFEVtYrS9GGSrazP4+3PANXqdQH07+/uP2M4dObO/cdK3AJ0OoNu9zL/7q7b7XR6H65+AEjUZYFbVXVIAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 12000,
            actualDps: 1875.0,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "450000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAABAAABAQEBAQEBAQECAQEDAgEGAAEEAgMFAgEFAwMFBAMHBQUKBwYfCAkeCQoiCQgaDw0eDgwkDw4aFxYoEg5FBQgoFA4uEhEcHBw3EQ4WIBwdHR08FRYjIh41HBQ7GBgpJCFIGRszJCI6Ih5JGxdhExVFIx5EJyE0LzBYISNcIiF7GRw3Nzc8NzdqJSdgLCZMNzF2KCtoMChVOTVqMi2NIiVFRUV+LS82UVeVKSx2OTZxPy+KMzVOTk5STU2SNTZSUlKBQUGnMDOaOTxsUU5SXGCORjmkPD6EUk+bSzetQUFnYl9lZWW7Q0VpamqGX12lVT9ecopvcHC4W0PTTlF7eXnDZkmBgYGheGXPaUyLi4unhXHhcFLbeViTk5PseliZmZmfoKHQkXWkpKSpqam+ppWxsrK3t7fNs5+7u7vBwcHExcbjwqvKysrax7PPz8/V1dXvzrjb29v23MPj4+Po6Oj/5Mvr6+vv7+//7Nb19fX6+ff///8YXU45AAAAgHRSTlMAxe0NKZj/HUimNdtguIBxxf/pWoO0/5f+/8am2sSB/9Z4qP//kf/l/sbwtf/w//7d//+V/9///v/+/////8D/y///o////////v///v//1//////////////////////////////////////////p/////////////////////7w+pywAAAUdSURBVFiFnVZrU9paFMUGkaKiaGvVPvBB0VaqBVGEK0VyMWI0VKTQGI0aQxODCTcmxsTEk/PXb6jT3pn7oXPC/kAmM6yV/Vhn7RMI/DGwsdnJF9E//+dPEVnaPztrHS4N9YkPVy6uLi4vrloLfRLMNi5Pzi4vT64az/vCR5InZ61G6/Kk1XrRF0G44uEb+63G/tmX/jKonLTiyeJhsnKy31cbI5nWYe3bcaO6R20E+yHARkunj493N8YePt8PPPpq5FPl9vHOvUlk/CeAzW8cnh3GFs9vHv75POxfi5MfW5cXrXS8dvfj9C3mGx4Ivzy8OiumEllav/+RX/FdABb8ctXIJHB8a5+/vr05Xv0U9skwf7JfTJAUXtjeu7m7b1eOSv4YsI3MYSZLkURhu8I9PN4frx55x2n9b/QEPnxpxAmCKOH49l7n4eE8TS4ForyEnMar+VY8ReEEQeIlvHnrCund6TkujzzMyMh6bhincJzEicJWhX3oZJerzBz6ccCwjeg4RZAEUSjh6d1j6TRZrb5GhnsxtBBOH5FEOpHCjwrZ7c38t3Lcl6UEwyMEReDpVGx6azeer1U3l/EJPwRY4JU3Q5zazdTPi7G/mNhWiUj5k+OsR0CQy9fwRqqHQvli9nvBn5R+Emxvnm7Gms2961t6eTnuyxaDMZwkyFW2ukiXp/bub4/X/jrwZe1vUmmKJIvt5BSr0punB1O0UFz2YYvRQjpLkrsH5dDaGsNPxZp8s54kJtEJPuCpLElQmVCMFoV6U27WeD2/5aOGl6VCliCpmVhpmm5XoVsNcTC/vIFOEEl4B5EgEwVqta00oVymqzST89WEElGiSilq9UCBUrnG8rV8txyPoBMMpanSUTq1W5BVqNOCUtfFLnfuQ0qRFEXurhVXpa5pSQJQypCXpOt19ARyycL32bd7vKZDXeFZvi6uiRqDTIBt5KILqfBXUbeAo6oaK3Ac3TZr71EJPhSfB4awSYk3gAVlGbiW7iqsgUzwvjjee+woouNYgNdMW++aBmfUEKcwWZzo7bIgK0nABjILDUcRHNDWv6LhI8X4T+t4J3OKVwEvQhVKbWBJGo+2IzdST+PeUVnNsR1GNxTIsVBXFRFJiQu5J/cPcx3edFyFgZoCGQZ2jY6I1IOJgafnisqJXgUsD7vdn7+2wCMpMfiU5xCtsx1oO3QXdjXAdlzVltp+7jljosKrrtulbVcxDFYHmqlJ6FL2WqgJguVAgXUdyVJpE+iG3kXfzoEIp3EycFxOhIYIZdoCum6qiELoxXtFbJuOYzKaq0lQ8jIwVKDSyJclrKlzMrTcLmM73Q6UWAOYMtAY5OXUa6HekyEDHKkDRVYDTsfWOGRf3lEFwVMhpHlgtzueEFUAOobWRh1DkPUqcC3HpFVH51XQ7BFIXUNAHsNXvVeBqzQtR2VNs8x2AZA7jog8hndSx7a9FtSBrbCOXuY8ArXjvaMa+1DNdS0LMjQwFRaoeVYGQBMgU0f25REJQuDU2rapc1AcbMsutBjI5NE3Q3BHhmbZcnSGt9cDOzo06nNO9Zmfa3ckT4cYpz72+p1X0ko58SaaHxvxgQ9gE9Pj2OtfkPHVuN/79lh2e+m/jN9ks598fT+AfT4oVd79flsqEWTl8woqx1AkMpirJIsfR0cHejE6EC+kN/OV/cwgCjz4LORFMreZmwn9iqnFqcWZmZlkKIRAgYVHooPPR9/OzQ0/+x3DwwOjo4PRsZH/H+l/AQoofSqglHFcAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 12000,
            actualDps: 2727.28,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "450000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgICAgICAgICAgICAgEDAgMDAgMDAwMDAwMDAwMDBAYEBAQEBAQEBAMFBQYFBQYGBQYGBggGBgsHBwgICAoJCAcLCAYICQsJCQoJCQkKCQwKCQwGCRkJCg0KCgsKCg0KCw0LCwoLCw8LCw4IDBUQCwcLDQ8MDBENDQ4NDQ4QDAkODg8NDhMODhMODhMCEC0PDxUPDxMQDxQNERgQEBUREBERERYSERMUEQ8UERAPEiIUExQTExoSFBwUFBcYFBIWFRgbFQ8WFh0XFxgaFhQWFx4XFxwYGBgZGRkbGBoXGSIWGScZGSAaGR4ZGiIeGR0ZGyQaGyIaGyQbGyMkHREcHSYeHyYgHyEiHxwfICghICMfICkfICkfICkcITAnIRwgIi0mISApIRsiIy0kJCUiJC4jJDAmJCcjJS8eJjskJjAkJjEnJyUuJiEqJywmKDQvKCMtKSYuKSomKUAoKjY3KB0qLDgtLDE0LhwrLTkuLi4yLi4qLkMvLzM3LiguLzwvMD4uMzs3MS8wMkA9MSUzMzcxM0JANRE5NSw1NjcxNUouNVY0NkQ2Nj05NzZBNS00N0c3OTpHNiE1OEg5Oj06OUA3OUlCODRFOSo2Ok9DOTM4O0wyPVg6PU5DPDtDPi87Pk5KPDM/QEFAQEI8P1FNQRtDQUQ+QVNIQTw/QlRARFZERkxCRVlRRDlHSElLR0RER1tJSk1HSl5KTExOTk5QUVVaUktmWCtWV15YWVtdYWZgZGZuYFdiZGZtZkxnaG16bjx9a16GaVdvcW+Bb2GJblx3en+RdmR8f4KTfWx/goqFiI6JjI+kiXepinOPkpWkjXqPkpqtjnmYm6O2mYKio6O8noS/pI/Rp4SwsLLIq5HYs5i/xsXjvZ/qw6Tn0K/w2bjf5uj/68b+//////8Lu7VZAAABAHRSTlMAAgcRNjpHc5WivsjW5ev/IHoADBpMZfK5UBUqL15uJY6ogtHdfUFZ/wCHtpf/c7Ac/57EN4Wr9dR63KdRuADApPa1vf+2nf8A1f/wlKmw5P96o0yR////0rJox1Pgvfj/qv8/1+j/y/v2/wDZ/8L//+TqAP//0/D4/4j/ov//cPwA/+P/9P+K7v//Nr3//////////2b///+2///x/////////3X/////////zLf/tP//////7v////////9fkf////8A//////92AP///+rI/////6T/2f++////////////4ub+///H/9jn/////////////////////v////8AL8LRDgAABMxJREFUWIWd13tUFFUcB/ArkJwkRV5r8pIQlEFByLfJnFKPpOlpU2CljrRpWD7Q1RbS0M1Ix8OkrcPZiGZyDlOdrjo2OYW3sSWnplmwsITMKMvSQqIys3xkL20k0D/sj/3x/Wfu2XPnc+797T333kFXbgi6noSHVq8pGYmie3Nj5yvoxp+udY+mSmuXrFtXGXUNBAIoIf+9jra2Hesf601wwPUZDI3suPTrH11bPny/J9ARJLf/0v5V1zeT4vs6hREdJ3776eeugrjQvgBW/9AHj1+68M8PsXEJIKCns0X0j+y6eOHPZ6jEkL4ANIVCq9qP//Ut6hcCWwe9AI2yvbNPnHNOp1CfgPj7KrzcpvaLjVnZvTWETIHK3KwQwgqzO84Vso+PDwEDQxke+zWReZ60+STVqKChwHhTYjRV4XnFL3gV4o2HAnN04hGIKmH5EMNoeCEFBOj1pszzhGBJ2smxfqUYWgNqZTPvk4iqYsy6pYAvEwrQFS0+hldlQjTRg03PfCgQs7lZclYSCRONMFJgbTwUCGMDSr5TUDEvYA4HKnOgQJJgKmkOXlaxxLJEX9sPCqTKupaaIvhl2a/xnIBHQoHbVVNM6udQdSxgYYlizoMCo9Vm72CUV6mbpKZ2F+vsD13KKXJASEQ2Byv63Bve3RC5dTEQSMcmjkOj7UUz7Bm5L9UUth4GAlGiqdqoafYiu7OsTlL5uq9zKAhAWX+j/HBOsWuGr0GTntWZypPPQUYQ82QJa4jbpt1rt6uGLvGKT2zaQgOAnCZfIXm1MCPXzmpE4yVJNIWpoBqkl7/d9sXuLMavEdXvtvamFmYcrIhpB7/85OVaLaATouZzLQJTGgoDxk3c9Bazq4zxyc2+DCfjklbQwC3t498vn121l610uRz5LKd/VEHBgNizl8+3bqs3dcwMucfQceAR6Ag+PZvlOVTdoJo4PY/IUmAldFdGdx07umo/VgPumDEYYxMOTN7zWdOyBmIUo1GihI25YAChgk6Pt1kaiuayPNHn9AG4tfWkw9gYgkaX8QYZDweoBcuOHXVaJ0qmSzSUbDhAl3LbO4+EU8jmJrqcDgdyXNL2/af3haIRHlNTMuFAGKPU1754usI6I0xN7gMwkmvY0Wh758zkm9wGkWxwIF3Sat9MRJ+fGrDU8HNhcOAOotc0zqfQd8ccsu4KBQP0QkP3ND5hFfPHI/n6CgQGYlym5tr9gtUqPt3KTYADCWXEKCzfZ52qETvPd0bBgaQyxRx150HrljyrsOnv7xFwQ0FUigtrycMO3k9HTxLWHbm8BzCCu60sp4sZjMNQ41aEpsjNEw+fKQ4eeOpqlj/Nyb54es0bCC01AhvRB51zgwaoqxnMEm01ograF6ONLQaXgA6cmgeqgU306ysplPPaVCpPNLQURB84+ToEWODm1f+2MXqKFFg6zHq+cmo9BGC9+szuVrZqcJsTu5vjggdGlLo4Ie9qK7rEUEX4HWmOe9EiR1z3S2M83vKyscA7Ej22qnrZrJ4lWeSqqn70gcmDaRT0J09CSXV1XflwW3K4lZvt1VVVdfX1NTODBVIHFu2trynPiuxJVlFGRlbuovLciMTggLjUlAnTxw5PGzhoSHcGDUy7JWLAbSnhybH/A/wLPQQyrzxY9jwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 330000,
            actualAp: 12000,
            actualDps: 2748.09,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "300000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAQECAgICAgIDAwIEAwIEBAUEBAQFBQYFBQUCBRQGBgYIBwcICAkNDBALECEQEBYZEAYSEhMTExMTExMWFBsWFh8eFQ8XFiEcGR8WGiwcGxsdHSAmGxQgHSIeHS4iIiImIho4HgMkIiglIyYxIhwoJislJjksKTEuKicvKycrLjgzLiowLjdJLBM1MytILRgwL0w2Mzs9ODJANzA7OEI9PDtQNyZAPjtBPjxPOTBHQjNMQyhCPlxePjFOSUNwQRNMTExpRzhVUEtUUlBuTkCFTQ5eW1WAUyFZXF5iX1mUVQ56WkhnY1+OWyGHYT1va2Nvb22jZSFxcW13dXGEc2Cxahl5d3GAfHS1cyeBgX+Fg4DJdxiNhHWhhFiPi4KUkYqVkYiYlY+/kFyhnJSioqGopJywrae3tbC+vLjHxcHhwavNysTV0cvW19Tc2tby2sXi4d375M7r6eXw7ujy8ev6+PL//ff///7FtqW6AAAAgHRSTlMArb/xDCw3av8heuXWihdeSv89nsn//56SeS1Y/+L/wf//Zabb//FHgv//0P////+n4F3//8SH////t///oP3v/+XKsf///v+I///h/////5rw////////vf//5///////8P///fr/pP/////Q/////////////////////////yM8W0wAAAV/SURBVFiFnVf/V9pWFI8tKn4BRA1OTTFos2nk+bRkUmy01BUUrFhrLC0isYymxCwJDMgyILn/+p7d7M7ZzqHEew4/hJPP59373ud+7gtFDYhgYOXHJ+O+Qa8Mjk3hOYmVB+NDr59vcZGt16sPJVjY2uKYF/j52kMJVtiIP97Oh+ceSjCPubzWTkQCDyUIYNVx/1SnRx+Env3h56d+A/5wyg+qYDl7c/0xmdB/d9Tk6dnemFf8fr12/vlm44VZLiePbm5VddcbfjW/7Auu3R6FhRe0/+h217ctrXsi8FG+499qpYtoTEiEN8r7FLW07C2F3S44evksyuMXW/SZXpn0BqeOwemZudPrZAynhcjpu7LurYLtDtjQen96mYmgNIodvLvsWCEPeN+Vlm2CXbn5mIzxiI8lb963YN9LBus1VTZAzV1fsnwiEcldv3GMCU81PO03C7aROf0Yj+Fo7OC0XF30hKf2wNJLmnz5Lh7BW1vxm3LW2ymOmtCyJalz8etBhBVjyduseeyJYNvpN+WEDsrlUYwXwhtnqulNylfgOJ92XOhcJMM8TaRo1j3pwHfudo1mNmtqlZyfpcPJcqL9wVMGo/m+2+/u7BQr+aiA+ZSUda0ZTwyhOujKpxOlno4KgsBLhaY3IVHUh2a2AVq9kY6yLOcvGXLrytt4WczKXbNrGwLNsqy/3pVqeW9SpObqsg0NlecRRjxuq4aKvDH45opgNRWaNBNK+SVXN0yP3hyS1EYrz/KY5QU2pVvWlTf8mFQrlPUsizBDkhB11ep4mZDBD8Viud5pIhaxDIcQ0nW6BcOLaabVamhFgDrNYYbGvMAXQHr0Bd4Oid9zSkUwdHBLNEmB53mMxW5nivrSmx0Kv374jIw0wwI7zSA6LzIcTnE6FGfGWsOlsPtLaMO2GwAmz3G0LNIcEukSNHOh/eH07Dv5bDpG13WrLKa5ejaMsMBIfZCGFcKeTRYnCdhZBtNpNe9HSODzFpjDNeToOQBYmtMHE5MSJKXgxxijrOl2hzrGyQa0e6C2iCdVWIFO16pFFiGM83WwjCGGy7bj6F0wNOj9XUFBUQoMJg1VkJ22dRX8Hn4PbNKEzVqfVKBjzKBaRcmHeYQ4qWQ7rebId/CLYEkWWHIHem4/z6bovCJVZYYlmyFJDdDt0vhgglWj0IZurQk9soXECRhiiorMkRq4UkEFs9mOLQ0kGE1Y4NR06Pcct0ineFY+31GqiMGYrxSrrl13pc2BBIEOuErJcfo9sBCNOVQ/XFOUFGloVClVe6DYWmmgmhf6oBHF9Pt9qBL5sClte1KRCRwJcrHUBV3vlqxngxgO21mT4HvQ4WmMmKy2OkP2gLiiKJekDjQUe/K36iBvDCXUu/UdqNIcjxlJGZ2tKkRHXLpaIbOhWz+klvSXAwhGJXDuEmgWBKI/XpGoWVlNMwKflpWiASCTdnimDbi8zyrkdtVznGoxzWImrR9Sy7KaZwSUrpVeGi7od+kfawNuG3et1IPW9hrZOUbS1glBXaIFQdycGCMEza8N+VYb4K++QxfcKyrIpBDWqjPUsmIU/QinZqgJHdr/JP/TQIPeg84yNc6Jwtz+Sx+1WjhZ8fNYXKSCujrkhD48IZ8avIiXKWJBE2PUBM1icY1a2hx2tvmC1CyDRO7eggkBEjfvLtDDxwIniOz9gqN3tow9jdYxBgnik/unWSJKQfRy1aVCNBLx/P2T7wnp7NSCFwIqwPLcN+8IxpPxRHx+0Pv/Dd+rTPLgW85j8Tc5Eq+Gnc7BieD2+8yb3Eho8muMB6KZzEEmd3FxMMRoDDz2kyBLZuL+fyMavftFyV/T3+OYCQTmRh7Nzz+dnpp6fB9TU1PT0/OPRgKBwOT/T/Mv7sGBFyKctwwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 5250,
            actualDps: 648.15,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "300000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQECAQECAgIEBAQHBwgJCQgLCQkNCQkNCgoUExQWFRMhFxMhGxsgIiMiIiMnJClBHBkjKTMtKypVIhwsNEE3ODc3Oj5ENjI2PkJkMC0+R0dCR0lDTk5kRT1LVFVSWFpaWVdTXF90VklcZmhubm5ncnJweXuYbVV2g4N/i4ufiHqVlpq9kXSio6TGooetrrHer465ur3ouZjHyMjuxqvP0NLZ2tr/1bTj5OTs7e7x8vP5+vv///85z0iDAAAAQHRSTlMD1w/qHi1DoVFixHiet/7m0Hf9/+mV3vylu//+///M////5b7///7R/v/////0///+/////v/+//////////8ATbfs5AAABAdJREFUWIXtln13ojoQxikFBN9QKjcqRaxvmIJIIU0TScL3/1YbcNvqdrvCvffPHY8ejzA/n2cymaCU/zGUv4C/gP8FoJtjdzpbLFaL6djU1fYAC+xgFMuI4ijarxZuz1DbyFJKfeQHwWYPZXoUSVQEdwvXaqxF/pnSA4FfQaSUKKreMYRwNZOOLqQoqqn9Dlrfog9kfuDLV62khkgtcC8phnammAPb7mnfAGQlbC+oGN6HkqgGvRvSzNFQRu87QFmqZn/iVSqCX+xUH/u971T5Q9v6FlAxjJpRW/ElZbPbQ7hbPj4ud/FueI6vEq5XTDJGXpVcC5GGnuZzP3iae5WAh4fh0LgBqH7Qe4PJuxPJeNrJ8IfOcL7cLrtfq/jbnpEFGVXlrDnech7MHx7mx9f85auAb/dCLaSuyOPc8xznvvv8djr0qjVVlCaAdyHg8VHqAE6n85wf5TKM+tb64F422B8AMnT7n4Ht+Q5YOce3l629Hg2cQ/7S1z7ybgBM2XyqMUIMA5i/5tuUjc3l89Zx7L51bvQbgPPlUHAaBKfTKfcINsrp0dV6A/sMabJzdSS4iMCrJGz2JDXXp1l5LrPtdJsALMoLnjnHPH99DlIaHA6jn2mKYd6yUF2fFjglBGzzt7dnAAvP8Wa/mvwuDNeVDjCjCa8A+esRBAhGZN0QoB7yla6YWVHskgxsX8jb0elME0HchgA9Px3n9gpR0nEiACklGeiXbrJu2kjK9OV4nAMsQs2LQUSLAvsTrbyalzeKqE2XACA6NuMdgCnG6e6ygA0ApTZxRq5lHCgIkjiRE8afXI/Wm32g6aUxRQKCJNk/eUH65FxPpduNpLgZF5mz54TQFMuOnOjtAD0sBAYAc0QISlkWgNll0m2AiRjbgFiuQFGQtCjgMBi3ApRrkTqbrMCEcYoKcbDA5UI0AOjhxg4RQ5RzTJkI1Um/HaBUOt2YFohxBikXodK5rGKzk3ycyTXgIt1jzhNNbVfEKqaUk4ITmCHO0NUqNgMoIWfS/XqBECuI2R6gp4IxgYxxJgF0fHWtEUDONM7ZrDRTLK1M2wMWjMkK6qUWYY5Z2BqgQiEFLOSXFeGIpVcnbBOAkckSIGldDQlDPGu5mWQXFIzjWKYpK0KxQK0Ba8GLLFQqCwih9gA1ETyrHEgLafovFBhYUFxnKWGWUYHbAmQJCn4+ShY4I4JcPac0mQdc8PV5kuohIoJe9XKDmRhS/HGSqIuUZC0BpRXHn6KtLLYaPyP9jHERft6lI3r9qNYAELKL/aceira70SSX/6lBkY1bTSQlFPKxSFEVtYrS9GGSrazP4+3PANXqdQH07+/uP2M4dObO/cdK3AJ0OoNu9zL/7q7b7XR6H65+AEjUZYFbVXVIAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 6000,
            actualDps: 937.5,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "150000%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAABAAABAQEBAQEBAQECAQEDAgEGAAEEAgMFAgEFAwMFBAMHBQUKBwYfCAkeCQoiCQgaDw0eDgwkDw4aFxYoEg5FBQgoFA4uEhEcHBw3EQ4WIBwdHR08FRYjIh41HBQ7GBgpJCFIGRszJCI6Ih5JGxdhExVFIx5EJyE0LzBYISNcIiF7GRw3Nzc8NzdqJSdgLCZMNzF2KCtoMChVOTVqMi2NIiVFRUV+LS82UVeVKSx2OTZxPy+KMzVOTk5STU2SNTZSUlKBQUGnMDOaOTxsUU5SXGCORjmkPD6EUk+bSzetQUFnYl9lZWW7Q0VpamqGX12lVT9ecopvcHC4W0PTTlF7eXnDZkmBgYGheGXPaUyLi4unhXHhcFLbeViTk5PseliZmZmfoKHQkXWkpKSpqam+ppWxsrK3t7fNs5+7u7vBwcHExcbjwqvKysrax7PPz8/V1dXvzrjb29v23MPj4+Po6Oj/5Mvr6+vv7+//7Nb19fX6+ff///8YXU45AAAAgHRSTlMAxe0NKZj/HUimNdtguIBxxf/pWoO0/5f+/8am2sSB/9Z4qP//kf/l/sbwtf/w//7d//+V/9///v/+/////8D/y///o////////v///v//1//////////////////////////////////////////p/////////////////////7w+pywAAAUdSURBVFiFnVZrU9paFMUGkaKiaGvVPvBB0VaqBVGEK0VyMWI0VKTQGI0aQxODCTcmxsTEk/PXb6jT3pn7oXPC/kAmM6yV/Vhn7RMI/DGwsdnJF9E//+dPEVnaPztrHS4N9YkPVy6uLi4vrloLfRLMNi5Pzi4vT64az/vCR5InZ61G6/Kk1XrRF0G44uEb+63G/tmX/jKonLTiyeJhsnKy31cbI5nWYe3bcaO6R20E+yHARkunj493N8YePt8PPPpq5FPl9vHOvUlk/CeAzW8cnh3GFs9vHv75POxfi5MfW5cXrXS8dvfj9C3mGx4Ivzy8OiumEllav/+RX/FdABb8ctXIJHB8a5+/vr05Xv0U9skwf7JfTJAUXtjeu7m7b1eOSv4YsI3MYSZLkURhu8I9PN4frx55x2n9b/QEPnxpxAmCKOH49l7n4eE8TS4ForyEnMar+VY8ReEEQeIlvHnrCund6TkujzzMyMh6bhincJzEicJWhX3oZJerzBz6ccCwjeg4RZAEUSjh6d1j6TRZrb5GhnsxtBBOH5FEOpHCjwrZ7c38t3Lcl6UEwyMEReDpVGx6azeer1U3l/EJPwRY4JU3Q5zazdTPi7G/mNhWiUj5k+OsR0CQy9fwRqqHQvli9nvBn5R+Emxvnm7Gms2961t6eTnuyxaDMZwkyFW2ukiXp/bub4/X/jrwZe1vUmmKJIvt5BSr0punB1O0UFz2YYvRQjpLkrsH5dDaGsNPxZp8s54kJtEJPuCpLElQmVCMFoV6U27WeD2/5aOGl6VCliCpmVhpmm5XoVsNcTC/vIFOEEl4B5EgEwVqta00oVymqzST89WEElGiSilq9UCBUrnG8rV8txyPoBMMpanSUTq1W5BVqNOCUtfFLnfuQ0qRFEXurhVXpa5pSQJQypCXpOt19ARyycL32bd7vKZDXeFZvi6uiRqDTIBt5KILqfBXUbeAo6oaK3Ac3TZr71EJPhSfB4awSYk3gAVlGbiW7iqsgUzwvjjee+woouNYgNdMW++aBmfUEKcwWZzo7bIgK0nABjILDUcRHNDWv6LhI8X4T+t4J3OKVwEvQhVKbWBJGo+2IzdST+PeUVnNsR1GNxTIsVBXFRFJiQu5J/cPcx3edFyFgZoCGQZ2jY6I1IOJgafnisqJXgUsD7vdn7+2wCMpMfiU5xCtsx1oO3QXdjXAdlzVltp+7jljosKrrtulbVcxDFYHmqlJ6FL2WqgJguVAgXUdyVJpE+iG3kXfzoEIp3EycFxOhIYIZdoCum6qiELoxXtFbJuOYzKaq0lQ8jIwVKDSyJclrKlzMrTcLmM73Q6UWAOYMtAY5OXUa6HekyEDHKkDRVYDTsfWOGRf3lEFwVMhpHlgtzueEFUAOobWRh1DkPUqcC3HpFVH51XQ7BFIXUNAHsNXvVeBqzQtR2VNs8x2AZA7jog8hndSx7a9FtSBrbCOXuY8ArXjvaMa+1DNdS0LMjQwFRaoeVYGQBMgU0f25REJQuDU2rapc1AcbMsutBjI5NE3Q3BHhmbZcnSGt9cDOzo06nNO9Zmfa3ckT4cYpz72+p1X0ko58SaaHxvxgQ9gE9Pj2OtfkPHVuN/79lh2e+m/jN9ks598fT+AfT4oVd79flsqEWTl8woqx1AkMpirJIsfR0cHejE6EC+kN/OV/cwgCjz4LORFMreZmwn9iqnFqcWZmZlkKIRAgYVHooPPR9/OzQ0/+x3DwwOjo4PRsZH/H+l/AQoofSqglHFcAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 6000,
            actualDps: 1363.64,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "150000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 3123,
            actualDps: 5855.62,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "75000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "691",
          enemyName: "斎藤一",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAEBAQEBAQEBAQEBAQEBAQEBAQECAQICAgMCAgICAgICAgICAgICAgICAgEDAgMDAgMDAwMDAwMDAwMDBAYEBAQEBAQEBAMFBQYFBQYGBQYGBggGBgsHBwgICAoJCAcLCAYICQsJCQoJCQkKCQwKCQwGCRkJCg0KCgsKCg0KCw0LCwoLCw8LCw4IDBUQCwcLDQ8MDBENDQ4NDQ4QDAkODg8NDhMODhMODhMCEC0PDxUPDxMQDxQNERgQEBUREBERERYSERMUEQ8UERAPEiIUExQTExoSFBwUFBcYFBIWFRgbFQ8WFh0XFxgaFhQWFx4XFxwYGBgZGRkbGBoXGSIWGScZGSAaGR4ZGiIeGR0ZGyQaGyIaGyQbGyMkHREcHSYeHyYgHyEiHxwfICghICMfICkfICkfICkcITAnIRwgIi0mISApIRsiIy0kJCUiJC4jJDAmJCcjJS8eJjskJjAkJjEnJyUuJiEqJywmKDQvKCMtKSYuKSomKUAoKjY3KB0qLDgtLDE0LhwrLTkuLi4yLi4qLkMvLzM3LiguLzwvMD4uMzs3MS8wMkA9MSUzMzcxM0JANRE5NSw1NjcxNUouNVY0NkQ2Nj05NzZBNS00N0c3OTpHNiE1OEg5Oj06OUA3OUlCODRFOSo2Ok9DOTM4O0wyPVg6PU5DPDtDPi87Pk5KPDM/QEFAQEI8P1FNQRtDQUQ+QVNIQTw/QlRARFZERkxCRVlRRDlHSElLR0RER1tJSk1HSl5KTExOTk5QUVVaUktmWCtWV15YWVtdYWZgZGZuYFdiZGZtZkxnaG16bjx9a16GaVdvcW+Bb2GJblx3en+RdmR8f4KTfWx/goqFiI6JjI+kiXepinOPkpWkjXqPkpqtjnmYm6O2mYKio6O8noS/pI/Rp4SwsLLIq5HYs5i/xsXjvZ/qw6Tn0K/w2bjf5uj/68b+//////8Lu7VZAAABAHRSTlMAAgcRNjpHc5WivsjW5ev/IHoADBpMZfK5UBUqL15uJY6ogtHdfUFZ/wCHtpf/c7Ac/57EN4Wr9dR63KdRuADApPa1vf+2nf8A1f/wlKmw5P96o0yR////0rJox1Pgvfj/qv8/1+j/y/v2/wDZ/8L//+TqAP//0/D4/4j/ov//cPwA/+P/9P+K7v//Nr3//////////2b///+2///x/////////3X/////////zLf/tP//////7v////////9fkf////8A//////92AP///+rI/////6T/2f++////////////4ub+///H/9jn/////////////////////v////8AL8LRDgAABMxJREFUWIWd13tUFFUcB/ArkJwkRV5r8pIQlEFByLfJnFKPpOlpU2CljrRpWD7Q1RbS0M1Ix8OkrcPZiGZyDlOdrjo2OYW3sSWnplmwsITMKMvSQqIys3xkL20k0D/sj/3x/Wfu2XPnc+797T333kFXbgi6noSHVq8pGYmie3Nj5yvoxp+udY+mSmuXrFtXGXUNBAIoIf+9jra2Hesf601wwPUZDI3suPTrH11bPny/J9ARJLf/0v5V1zeT4vs6hREdJ3776eeugrjQvgBW/9AHj1+68M8PsXEJIKCns0X0j+y6eOHPZ6jEkL4ANIVCq9qP//Ut6hcCWwe9AI2yvbNPnHNOp1CfgPj7KrzcpvaLjVnZvTWETIHK3KwQwgqzO84Vso+PDwEDQxke+zWReZ60+STVqKChwHhTYjRV4XnFL3gV4o2HAnN04hGIKmH5EMNoeCEFBOj1pszzhGBJ2smxfqUYWgNqZTPvk4iqYsy6pYAvEwrQFS0+hldlQjTRg03PfCgQs7lZclYSCRONMFJgbTwUCGMDSr5TUDEvYA4HKnOgQJJgKmkOXlaxxLJEX9sPCqTKupaaIvhl2a/xnIBHQoHbVVNM6udQdSxgYYlizoMCo9Vm72CUV6mbpKZ2F+vsD13KKXJASEQ2Byv63Bve3RC5dTEQSMcmjkOj7UUz7Bm5L9UUth4GAlGiqdqoafYiu7OsTlL5uq9zKAhAWX+j/HBOsWuGr0GTntWZypPPQUYQ82QJa4jbpt1rt6uGLvGKT2zaQgOAnCZfIXm1MCPXzmpE4yVJNIWpoBqkl7/d9sXuLMavEdXvtvamFmYcrIhpB7/85OVaLaATouZzLQJTGgoDxk3c9Bazq4zxyc2+DCfjklbQwC3t498vn121l610uRz5LKd/VEHBgNizl8+3bqs3dcwMucfQceAR6Ag+PZvlOVTdoJo4PY/IUmAldFdGdx07umo/VgPumDEYYxMOTN7zWdOyBmIUo1GihI25YAChgk6Pt1kaiuayPNHn9AG4tfWkw9gYgkaX8QYZDweoBcuOHXVaJ0qmSzSUbDhAl3LbO4+EU8jmJrqcDgdyXNL2/af3haIRHlNTMuFAGKPU1754usI6I0xN7gMwkmvY0Wh758zkm9wGkWxwIF3Sat9MRJ+fGrDU8HNhcOAOotc0zqfQd8ccsu4KBQP0QkP3ND5hFfPHI/n6CgQGYlym5tr9gtUqPt3KTYADCWXEKCzfZ52qETvPd0bBgaQyxRx150HrljyrsOnv7xFwQ0FUigtrycMO3k9HTxLWHbm8BzCCu60sp4sZjMNQ41aEpsjNEw+fKQ4eeOpqlj/Nyb54es0bCC01AhvRB51zgwaoqxnMEm01ograF6ONLQaXgA6cmgeqgU306ysplPPaVCpPNLQURB84+ToEWODm1f+2MXqKFFg6zHq+cmo9BGC9+szuVrZqcJsTu5vjggdGlLo4Ie9qK7rEUEX4HWmOe9EiR1z3S2M83vKyscA7Ej22qnrZrJ4lWeSqqn70gcmDaRT0J09CSXV1XflwW3K4lZvt1VVVdfX1NTODBVIHFu2trynPiuxJVlFGRlbuovLciMTggLjUlAnTxw5PGzhoSHcGDUy7JWLAbSnhybH/A/wLPQQyrzxY9jwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 220000,
            ap: 8000,
            dps: 1832.06,
            speed: 55,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1500,
            freq: 131,
            foreswing: 3,
            backswing: 128,
            tba: 0
          },
          stageStats: {
            actualHp: 165000,
            actualAp: 6000,
            actualDps: 1374.05,
            magnification: "75%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "75000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 400,
                omni_range: [-200, 400]
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
            actualHp: 4500,
            actualAp: 2200,
            actualDps: 1783.78,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "30000%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "690",
          enemyName: "四乃森蒼紫",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAQECAgICAgIDAwIEAwIEBAUEBAQFBQYFBQUCBRQGBgYIBwcICAkNDBALECEQEBYZEAYSEhMTExMTExMWFBsWFh8eFQ8XFiEcGR8WGiwcGxsdHSAmGxQgHSIeHS4iIiImIho4HgMkIiglIyYxIhwoJislJjksKTEuKicvKycrLjgzLiowLjdJLBM1MytILRgwL0w2Mzs9ODJANzA7OEI9PDtQNyZAPjtBPjxPOTBHQjNMQyhCPlxePjFOSUNwQRNMTExpRzhVUEtUUlBuTkCFTQ5eW1WAUyFZXF5iX1mUVQ56WkhnY1+OWyGHYT1va2Nvb22jZSFxcW13dXGEc2Cxahl5d3GAfHS1cyeBgX+Fg4DJdxiNhHWhhFiPi4KUkYqVkYiYlY+/kFyhnJSioqGopJywrae3tbC+vLjHxcHhwavNysTV0cvW19Tc2tby2sXi4d375M7r6eXw7ujy8ev6+PL//ff///7FtqW6AAAAgHRSTlMArb/xDCw3av8heuXWihdeSv89nsn//56SeS1Y/+L/wf//Zabb//FHgv//0P////+n4F3//8SH////t///oP3v/+XKsf///v+I///h/////5rw////////vf//5///////8P///fr/pP/////Q/////////////////////////yM8W0wAAAV/SURBVFiFnVf/V9pWFI8tKn4BRA1OTTFos2nk+bRkUmy01BUUrFhrLC0isYymxCwJDMgyILn/+p7d7M7ZzqHEew4/hJPP59373ud+7gtFDYhgYOXHJ+O+Qa8Mjk3hOYmVB+NDr59vcZGt16sPJVjY2uKYF/j52kMJVtiIP97Oh+ceSjCPubzWTkQCDyUIYNVx/1SnRx+Env3h56d+A/5wyg+qYDl7c/0xmdB/d9Tk6dnemFf8fr12/vlm44VZLiePbm5VddcbfjW/7Auu3R6FhRe0/+h217ctrXsi8FG+499qpYtoTEiEN8r7FLW07C2F3S44evksyuMXW/SZXpn0BqeOwemZudPrZAynhcjpu7LurYLtDtjQen96mYmgNIodvLvsWCEPeN+Vlm2CXbn5mIzxiI8lb963YN9LBus1VTZAzV1fsnwiEcldv3GMCU81PO03C7aROf0Yj+Fo7OC0XF30hKf2wNJLmnz5Lh7BW1vxm3LW2ymOmtCyJalz8etBhBVjyduseeyJYNvpN+WEDsrlUYwXwhtnqulNylfgOJ92XOhcJMM8TaRo1j3pwHfudo1mNmtqlZyfpcPJcqL9wVMGo/m+2+/u7BQr+aiA+ZSUda0ZTwyhOujKpxOlno4KgsBLhaY3IVHUh2a2AVq9kY6yLOcvGXLrytt4WczKXbNrGwLNsqy/3pVqeW9SpObqsg0NlecRRjxuq4aKvDH45opgNRWaNBNK+SVXN0yP3hyS1EYrz/KY5QU2pVvWlTf8mFQrlPUsizBDkhB11ep4mZDBD8Viud5pIhaxDIcQ0nW6BcOLaabVamhFgDrNYYbGvMAXQHr0Bd4Oid9zSkUwdHBLNEmB53mMxW5nivrSmx0Kv374jIw0wwI7zSA6LzIcTnE6FGfGWsOlsPtLaMO2GwAmz3G0LNIcEukSNHOh/eH07Dv5bDpG13WrLKa5ejaMsMBIfZCGFcKeTRYnCdhZBtNpNe9HSODzFpjDNeToOQBYmtMHE5MSJKXgxxijrOl2hzrGyQa0e6C2iCdVWIFO16pFFiGM83WwjCGGy7bj6F0wNOj9XUFBUQoMJg1VkJ22dRX8Hn4PbNKEzVqfVKBjzKBaRcmHeYQ4qWQ7rebId/CLYEkWWHIHem4/z6bovCJVZYYlmyFJDdDt0vhgglWj0IZurQk9soXECRhiiorMkRq4UkEFs9mOLQ0kGE1Y4NR06Pcct0ineFY+31GqiMGYrxSrrl13pc2BBIEOuErJcfo9sBCNOVQ/XFOUFGloVClVe6DYWmmgmhf6oBHF9Pt9qBL5sClte1KRCRwJcrHUBV3vlqxngxgO21mT4HvQ4WmMmKy2OkP2gLiiKJekDjQUe/K36iBvDCXUu/UdqNIcjxlJGZ2tKkRHXLpaIbOhWz+klvSXAwhGJXDuEmgWBKI/XpGoWVlNMwKflpWiASCTdnimDbi8zyrkdtVznGoxzWImrR9Sy7KaZwSUrpVeGi7od+kfawNuG3et1IPW9hrZOUbS1glBXaIFQdycGCMEza8N+VYb4K++QxfcKyrIpBDWqjPUsmIU/QinZqgJHdr/JP/TQIPeg84yNc6Jwtz+Sx+1WjhZ8fNYXKSCujrkhD48IZ8avIiXKWJBE2PUBM1icY1a2hx2tvmC1CyDRO7eggkBEjfvLtDDxwIniOz9gqN3tow9jdYxBgnik/unWSJKQfRy1aVCNBLx/P2T7wnp7NSCFwIqwPLcN+8IxpPxRHx+0Pv/Dd+rTPLgW85j8Tc5Eq+Gnc7BieD2+8yb3Eho8muMB6KZzEEmd3FxMMRoDDz2kyBLZuL+fyMavftFyV/T3+OYCQTmRh7Nzz+dnpp6fB9TU1PT0/OPRgKBwOT/T/Mv7sGBFyKctwwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3500,
            dps: 432.1,
            speed: 15,
            range: 400,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 243,
            foreswing: 60,
            backswing: 61,
            tba: 92
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 3500,
            actualDps: 432.1,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "30000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUGBgYHBwcICAgJCQkMDAwPDw8PDw8VFRUZGRkdHR0eHh4oKCgpKSkqKiosLCw0NDQ6Ojo9PT1BQUFFRUVMTExUVFRdXV1paWlycnJ8fHyFhYWMjIySkpKZmZmgoKCnp6etra2ysrK5ubnBwcHLy8vT09Pd3d3k5OTr6+vy8vL39/f8/Pz///+gTjTCAAAAQHRSTlMAAgcMFR0nMKFAOFRdSrXPhKvBb3pmmI3Y8aKx6rriyP/21/He/un//v/+/v///v//////////////////////VZxXkgAABRJJREFUWIWdl2djqkoQhqUIiiXGgho12ICt1KWIiP//X91FYzTnCp6c+WDDfXbmncLSaNSZoGpi7R9emTRuKeWb/A8YQZaFhjSYdcWG0B40fw8QJwNFkMbLhdKQ9aHyD4DRTFekkWWNpN7sXwCC9rbU1THAq/bHZqU0hF8TZN22pjr0rf4nXChK+5cyiKo6+cS7JWJkg/BwMOyrv/NBGvU/ZoCaMHSgjze75Vj6nQeCNtyZpkdpGPjMJXil/m45d2Gyd5yAlcYZ1pcDgvhXgUia3BCUhY1IWAIotIdXBQStI7/cvKk11fdRUxsN1zYNLw4Q861XeiAorVbzlQtiZ9gazGa6YSH3GgFHeNDo8q3lwXLYab/yQe1vNhu4gbfVFwvwdqBwWcBy1npVEPLY8mhIgM9+EBzrY2L4ngP6vXqC2O3vojw/oJ8uMObtPp3jMQbzYacWII3nID6diwSg8KcPNjoUxxAY4/rOErtLEwZZcWKAPBJCBJJTSrdTTarNg6AukIdtHOe5Z7v35YyC8ODbi578Io3S2PJZ6ELbSQ+PQrq2E2F7p7+sI2WBLwETGwYx/BbSh5AC4DpG+4UDYmfvXX32kY0dG19lCOHatEnAQutVU0pTeFOujMNcUx5+yMh6DS9gvHhRRs0V+U6b5xNzbZZCeqZJnUtfeNv6GIT21rsBsOkxH5mlJD71Q2SWVwJrUnuLEDr7b+EJ8Mo28n1KCP/RQX5YVsO0VgRxDL6LJwwuHz1gQ9t2SiWuItQmUv7AP8o3ZD6AcZaQMgUXBFnVApS7hl8dBEFcFKfMswEuQ2COUdsJmuH+cIDaKD4VxbnIIgfamEvhbuum66OGpfjYpocijw/nY5jlqQsADerzKI6s4C6iA2B4LIpjkORZdMiPWcTrm+x7NQCJJ+EGCLBN4kPCAt91XYenkhBMeEV/duoBlH5VPzJJ4CAAIEIYE+o4rlsWJnwB2JiP7YPcKD1k2THPT8XpGGMTe96+HjC/NXDIGwEwLsHFTseUj1nIy8mvBww2D2l0StXDMIpYQBGvR1qyvdoQZB0+jEF+RwL21QAi3vWKtxnXdJOyog9lEF1qOYqiOIrjOPoqzfV7dS0Lvb33CEgOXL6LBMUpz5LoCnjTKgG8jsL79vHhVJzvxhsi5r+76xoRpCm6+R6xJH9cXtop4xeouaseKfJ1IrOIbxUfz/+z4hAxntxppQi3gZhEQZT9uX9pecywjT4q56piOOX6OEZ+cnoGKFKGEFlUNvQXgPdtmD1ZzgEZg9RZtasA6mWcxAkkcf4UwOcC8DyjVwXQDI/XTUqBn54qAIHNgm3l+aAEsCS2KUufKVCq6Nox23ZrQgijlICgGkDXrB4Qpczk/VAFOOI5CqoBPAtJijYXwHNCBt8NVA1ormjqrN75zel5GZzPqTWZfM4qRZQ/iGP0eluHpc8BRWRozWm/Mo3SeGd0JFlHYcKPaef/M07Ooimoo8pKFLvvXYlPha1TtlKeHO+IIj/ybxkciQ1Rrr4/y0p5TZ5awaE4HzBhSZqmScLHEZ+KXl5EL44XX8ZPepjHkLtLY29Z+/12a6xWSxwXOa1uxD9C2XtZkeGp1u6125qmqYr6gdIitbp/+QTbnII4Z4YmfD/sCZwQu4u/fXwUtBWK4EAW7yaprd1nt/6U+7282e725+Z8qOt662a63p/P9FG3p75+euOZnraGb2/DIX+5Gf8y7L+39EH3j4n4H2iBW0BUMHPwAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 5200,
            actualAp: 320,
            actualDps: 400.0,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "10000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "689",
          enemyName: "相楽左之助",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQECAQECAgIEBAQHBwgJCQgLCQkNCQkNCgoUExQWFRMhFxMhGxsgIiMiIiMnJClBHBkjKTMtKypVIhwsNEE3ODc3Oj5ENjI2PkJkMC0+R0dCR0lDTk5kRT1LVFVSWFpaWVdTXF90VklcZmhubm5ncnJweXuYbVV2g4N/i4ufiHqVlpq9kXSio6TGooetrrHer465ur3ouZjHyMjuxqvP0NLZ2tr/1bTj5OTs7e7x8vP5+vv///85z0iDAAAAQHRSTlMD1w/qHi1DoVFixHiet/7m0Hf9/+mV3vylu//+///M////5b7///7R/v/////0///+/////v/+//////////8ATbfs5AAABAdJREFUWIXtln13ojoQxikFBN9QKjcqRaxvmIJIIU0TScL3/1YbcNvqdrvCvffPHY8ejzA/n2cymaCU/zGUv4C/gP8FoJtjdzpbLFaL6djU1fYAC+xgFMuI4ijarxZuz1DbyFJKfeQHwWYPZXoUSVQEdwvXaqxF/pnSA4FfQaSUKKreMYRwNZOOLqQoqqn9Dlrfog9kfuDLV62khkgtcC8phnammAPb7mnfAGQlbC+oGN6HkqgGvRvSzNFQRu87QFmqZn/iVSqCX+xUH/u971T5Q9v6FlAxjJpRW/ElZbPbQ7hbPj4ud/FueI6vEq5XTDJGXpVcC5GGnuZzP3iae5WAh4fh0LgBqH7Qe4PJuxPJeNrJ8IfOcL7cLrtfq/jbnpEFGVXlrDnech7MHx7mx9f85auAb/dCLaSuyOPc8xznvvv8djr0qjVVlCaAdyHg8VHqAE6n85wf5TKM+tb64F422B8AMnT7n4Ht+Q5YOce3l629Hg2cQ/7S1z7ybgBM2XyqMUIMA5i/5tuUjc3l89Zx7L51bvQbgPPlUHAaBKfTKfcINsrp0dV6A/sMabJzdSS4iMCrJGz2JDXXp1l5LrPtdJsALMoLnjnHPH99DlIaHA6jn2mKYd6yUF2fFjglBGzzt7dnAAvP8Wa/mvwuDNeVDjCjCa8A+esRBAhGZN0QoB7yla6YWVHskgxsX8jb0elME0HchgA9Px3n9gpR0nEiACklGeiXbrJu2kjK9OV4nAMsQs2LQUSLAvsTrbyalzeKqE2XACA6NuMdgCnG6e6ygA0ApTZxRq5lHCgIkjiRE8afXI/Wm32g6aUxRQKCJNk/eUH65FxPpduNpLgZF5mz54TQFMuOnOjtAD0sBAYAc0QISlkWgNll0m2AiRjbgFiuQFGQtCjgMBi3ApRrkTqbrMCEcYoKcbDA5UI0AOjhxg4RQ5RzTJkI1Um/HaBUOt2YFohxBikXodK5rGKzk3ycyTXgIt1jzhNNbVfEKqaUk4ITmCHO0NUqNgMoIWfS/XqBECuI2R6gp4IxgYxxJgF0fHWtEUDONM7ZrDRTLK1M2wMWjMkK6qUWYY5Z2BqgQiEFLOSXFeGIpVcnbBOAkckSIGldDQlDPGu5mWQXFIzjWKYpK0KxQK0Ba8GLLFQqCwih9gA1ETyrHEgLafovFBhYUFxnKWGWUYHbAmQJCn4+ShY4I4JcPac0mQdc8PV5kuohIoJe9XKDmRhS/HGSqIuUZC0BpRXHn6KtLLYaPyP9jHERft6lI3r9qNYAELKL/aceira70SSX/6lBkY1bTSQlFPKxSFEVtYrS9GGSrazP4+3PANXqdQH07+/uP2M4dObO/cdK3AJ0OoNu9zL/7q7b7XR6H65+AEjUZYFbVXVIAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 937.5,
            speed: 10,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 192,
            foreswing: 73,
            backswing: 68,
            tba: 60
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 2400,
            actualDps: 375.0,
            magnification: "40%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "10000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-200, 440]
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEDAAADAAADAQAEAQEEAQAEAQAEAQAFAQEFAQEHAgEHAwAJAwAKAwAKAwEKAwEMBAEPBQAPBgERBQAVBgAXBwAhCwAnDQApDAApDQArDgEsDwAuDwA6EwA9FAA/FQBHGABJGABKGAFPGgBSHQBXHQBhIABhIQBiIQBuJQBvJQB4KQCDLACOMACRMQGZMwCiNwCzPAG+QADMRQDZSQDkTQDuUAD3UwH/VADUXjutAAAAQHRSTlMABQocKxcRJDlAzzFPVuNFX2hx2IF5pP6StIjDqrrSZczw/tyr1fvo/8Hhlf/w0f//+P/+/ub+/v7/////////IzJmTQAABOZJREFUWIWdl+l6okoQhoOKS9Qoifs2BCZCciA0y0Dv3P9dTTUaI44oJ/0jT0T7pbrqq6UfHu6tRqvb0e7+6sb+wWa9GDV+DujM/NRfD9s/BvS3mWShaeg/tmCTSsHi3bRZe0ujMxqMWl+nbi9Ckec8sSd1CY3B7O3jbWN024XvG5OQy1yK1H6ueYr+NsQMx852NdABoU19nue55MluWCsW2tAh6o009c3VSNe08QfL1eLhrFMLMPqk6vdS8sw3J/324K34nOeZ2a11hOZ/5LAhlyx1tuMRxLH4SD9GtRSp/fojjoRc0NBerENxBAzqSXr0yb4A4LvUefJ48T+rC+j8xlKeECK1rIMTmDOulxKNszOADSKy0oLH/WnNjOi/k/zbhJy4SEhFClc1Afoi5CUTPAZAKeNZs54TtJGZnh0iJ14igMNjc9zTayHaz3bK5bcJsYtZhpC3t9eLXq1jNKc7PyX0CJE0cD0XZYSSxF8btYzQh4ut+REmmMlCT0lMeOFIGr9N66VEuzUyFkswpEB8C4Pjj0nNvNYaemsw2frkTFaKldXM66Mh3dUHy0sAHm5atQGA6L4flPxtBnGM/1HmdaOoByAkzkRBEWRfr7Q8aLCa05d9YQHPAi/hKhCZO3/s1dgNxXk47Bl24BUWYGs+tzLwJ93P50/ju9v13nRj2vZ6FxIPKwVkAJirrCLW3Ho17uxv9xamE2OM05iwIBZKjR4AXAgIc63gHkA3TD/japsUkIyBiqMkgevGXNVajO8AmlM7YWdRK86gosAPOSqJc9MHbeMtO68HPI5YXhIjtoe39o/N7LwaQCqhhOe1AY2hmYjS+yCEQXKSsxSCp/agGtDahOXXFQQP0SOUxihwX0bVBhgOlpeAXCjC0YHICmK72omdTXg8gDzPH0ECIByKC5zHn1Tt1wZvx84IEhBnDEGj6HAKESW8GtBe+QcPcBxFUUK+S2vOEpQxNaxEiHxWRqGzPHQhmXlBhDwvIqeIQpsMggSTdP/6/quyqPVMfPQVZkIwSOEzTQgSBwFC++WourSfponjW1nknndakDNjybKqomlt/dkpF8CcIY+Wn+R4WzGp6IMVDBOXKiJeelGV8bZ/ff/zzvetSJT3S4EiXn4Qb65WxPZ4l3BVPC50KGPES4+YM7nqw9YsZDlHdwEyXfeuNsfuOlLV5/IIBaBkgF8xZvSX4D8A8H8sCE4A+EokZvd6d9YnDvnndbmSfvHooE/OYGSuUJHWXYaEIvcy6jxIZM6oGnFgyAis6yFQC+42tmO/kgsAcUHcGWIqi1wU7xfVvb3RH44NMyv7QMQB2ITVHwgRF8ns1rVB0/SFX9KyxK5KT4awUlAqZLq83Ve1sY3Ief6hmBWeBIzMYg4j+3UdnwAD24vYV8hovHcTTLnAe6VnCjBiX5fR14KKRFkhRsFxCs3Mg4WQs4YxBa49RN4bmPtflwMAZCkmlFGcRdbL828QiSQJE/H2lglwvznpAPqqLKYzaKfOavVHqrtbzEiVlIvVmJwFodhMqeSYxRvjk1HOMi+Ko+2NEUuDvkahajFVujCMptCHKAlw9j5+z4IsQZ5loV3lvUNrdoez18JvQeC5MNLsPddCyPK8l9nL3nL3czXnPE16reunaHSfV7Pl+vHx8UWtp/IqnsF36+ViOvzW81+i5pL/7tImxQAAAABJRU5ErkJggg==",
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
            actualHp: 1000,
            actualAp: 100,
            actualDps: 73.18,
            magnification: "200%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "1000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "688",
          enemyName: "緋村剣心",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAABAAABAQEBAQEBAQECAQEDAgEGAAEEAgMFAgEFAwMFBAMHBQUKBwYfCAkeCQoiCQgaDw0eDgwkDw4aFxYoEg5FBQgoFA4uEhEcHBw3EQ4WIBwdHR08FRYjIh41HBQ7GBgpJCFIGRszJCI6Ih5JGxdhExVFIx5EJyE0LzBYISNcIiF7GRw3Nzc8NzdqJSdgLCZMNzF2KCtoMChVOTVqMi2NIiVFRUV+LS82UVeVKSx2OTZxPy+KMzVOTk5STU2SNTZSUlKBQUGnMDOaOTxsUU5SXGCORjmkPD6EUk+bSzetQUFnYl9lZWW7Q0VpamqGX12lVT9ecopvcHC4W0PTTlF7eXnDZkmBgYGheGXPaUyLi4unhXHhcFLbeViTk5PseliZmZmfoKHQkXWkpKSpqam+ppWxsrK3t7fNs5+7u7vBwcHExcbjwqvKysrax7PPz8/V1dXvzrjb29v23MPj4+Po6Oj/5Mvr6+vv7+//7Nb19fX6+ff///8YXU45AAAAgHRSTlMAxe0NKZj/HUimNdtguIBxxf/pWoO0/5f+/8am2sSB/9Z4qP//kf/l/sbwtf/w//7d//+V/9///v/+/////8D/y///o////////v///v//1//////////////////////////////////////////p/////////////////////7w+pywAAAUdSURBVFiFnVZrU9paFMUGkaKiaGvVPvBB0VaqBVGEK0VyMWI0VKTQGI0aQxODCTcmxsTEk/PXb6jT3pn7oXPC/kAmM6yV/Vhn7RMI/DGwsdnJF9E//+dPEVnaPztrHS4N9YkPVy6uLi4vrloLfRLMNi5Pzi4vT64az/vCR5InZ61G6/Kk1XrRF0G44uEb+63G/tmX/jKonLTiyeJhsnKy31cbI5nWYe3bcaO6R20E+yHARkunj493N8YePt8PPPpq5FPl9vHOvUlk/CeAzW8cnh3GFs9vHv75POxfi5MfW5cXrXS8dvfj9C3mGx4Ivzy8OiumEllav/+RX/FdABb8ctXIJHB8a5+/vr05Xv0U9skwf7JfTJAUXtjeu7m7b1eOSv4YsI3MYSZLkURhu8I9PN4frx55x2n9b/QEPnxpxAmCKOH49l7n4eE8TS4ForyEnMar+VY8ReEEQeIlvHnrCund6TkujzzMyMh6bhincJzEicJWhX3oZJerzBz6ccCwjeg4RZAEUSjh6d1j6TRZrb5GhnsxtBBOH5FEOpHCjwrZ7c38t3Lcl6UEwyMEReDpVGx6azeer1U3l/EJPwRY4JU3Q5zazdTPi7G/mNhWiUj5k+OsR0CQy9fwRqqHQvli9nvBn5R+Emxvnm7Gms2961t6eTnuyxaDMZwkyFW2ukiXp/bub4/X/jrwZe1vUmmKJIvt5BSr0punB1O0UFz2YYvRQjpLkrsH5dDaGsNPxZp8s54kJtEJPuCpLElQmVCMFoV6U27WeD2/5aOGl6VCliCpmVhpmm5XoVsNcTC/vIFOEEl4B5EgEwVqta00oVymqzST89WEElGiSilq9UCBUrnG8rV8txyPoBMMpanSUTq1W5BVqNOCUtfFLnfuQ0qRFEXurhVXpa5pSQJQypCXpOt19ARyycL32bd7vKZDXeFZvi6uiRqDTIBt5KILqfBXUbeAo6oaK3Ac3TZr71EJPhSfB4awSYk3gAVlGbiW7iqsgUzwvjjee+woouNYgNdMW++aBmfUEKcwWZzo7bIgK0nABjILDUcRHNDWv6LhI8X4T+t4J3OKVwEvQhVKbWBJGo+2IzdST+PeUVnNsR1GNxTIsVBXFRFJiQu5J/cPcx3edFyFgZoCGQZ2jY6I1IOJgafnisqJXgUsD7vdn7+2wCMpMfiU5xCtsx1oO3QXdjXAdlzVltp+7jljosKrrtulbVcxDFYHmqlJ6FL2WqgJguVAgXUdyVJpE+iG3kXfzoEIp3EycFxOhIYIZdoCum6qiELoxXtFbJuOYzKaq0lQ8jIwVKDSyJclrKlzMrTcLmM73Q6UWAOYMtAY5OXUa6HekyEDHKkDRVYDTsfWOGRf3lEFwVMhpHlgtzueEFUAOobWRh1DkPUqcC3HpFVH51XQ7BFIXUNAHsNXvVeBqzQtR2VNs8x2AZA7jog8hndSx7a9FtSBrbCOXuY8ArXjvaMa+1DNdS0LMjQwFRaoeVYGQBMgU0f25REJQuDU2rapc1AcbMsutBjI5NE3Q3BHhmbZcnSGt9cDOzo06nNO9Zmfa3ckT4cYpz72+p1X0ko58SaaHxvxgQ9gE9Pj2OtfkPHVuN/79lh2e+m/jN9ks598fT+AfT4oVd79flsqEWTl8woqx1AkMpirJIsfR0cHejE6EC+kN/OV/cwgCjz4LORFMreZmwn9iqnFqcWZmZlkKIRAgYVHooPPR9/OzQ0/+x3DwwOjo4PRsZH/H+l/AQoofSqglHFcAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 6000,
            dps: 1363.64,
            speed: 9,
            range: 435,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 132,
            foreswing: 27,
            backswing: 71,
            tba: 53
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 900,
            actualDps: 204.55,
            magnification: "15%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1000%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
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
            actualHp: 400,
            actualAp: 40,
            actualDps: 40.0,
            magnification: "200%",
            count: "0",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "19.3-20.0s",
            delayFrames: "580-600f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
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
            actualHp: 400,
            actualAp: 40,
            actualDps: 40.0,
            magnification: "200%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "19.3-20.0s",
            delayFrames: "580-600f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
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
            actualHp: 400,
            actualAp: 40,
            actualDps: 40.0,
            magnification: "200%",
            count: "0",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "6.7-20.0s",
            delayFrames: "200-600f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e11027Data;

