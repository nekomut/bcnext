// Stage 25022 Data
import type { StageData } from '../../app/stage/types';

export const e25022Data: StageData = {
  eventId: 25022,
  eventName: "蒼き本能の頂",
  typeId: 25,
  typeName: "発掘ステージ",
  prefix: "H",
  mapId: 22,
  stages: [
    {
      stageId: 0,
      stageName: "頂の祠 超極ムズ",
      baseHp: 800000,
      width: 3800,
      enemyLimit: 10,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "30045",
          treasureName: "ユニット20045への進化権",
          probability: "3775",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "30050",
          treasureName: "ユニット20050への進化権",
          probability: "3775",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30046",
          treasureName: "ユニット20046への進化権",
          probability: "850",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30051",
          treasureName: "ユニット20051への進化権",
          probability: "850",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30047",
          treasureName: "ユニット20047への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30052",
          treasureName: "ユニット20052への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30125",
          treasureName: "ユニット20125への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30130",
          treasureName: "ユニット20130への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30135",
          treasureName: "ユニット20135への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "363",
          enemyName: "ハハパオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgIEBAQEBAQFBQUFBQUFBQUGBgcGBwcICgsJDAwNERETHBsVHBsXICEZISAYIyIcJiUfMC4iMzEiNTMoPDotQ0AuRkMxRkQ1REMxSEdcTwM8W1ZEWVdZYzRFZmJJb2xPb2hQeHR3dCNagXxcjIaahgxhlo5nn5iRkpO+ogdwrqZ6vLOByL64uLjpxgeI0smM2M2Q39P70gmT5dmX7N/V1dWc9Oef+uyh/u7x8fH+/v7///9pxp3BAAAAQHRSTlMABQwXJy84QEqE28VZZXKIp+yZs//D16fvvOj+3czf/ub//+P//f////7+///9/v///f////////////////8Ab/kakwAABFdJREFUWIXtV2t3ojoUVfBVq2ixWr3qgEBKStqEFlJoknb+/7+6CSDiA53hfr17LRcuydk573Ns/f6PaP1P8Lt1Ex3D6Nw+VY/eFgXzrtZYXpsSwdG90Zihu0mFiHe/+k0JRj5LE/TyNu129HYD+fYEB7vn54/Pl1+/pnoDAn1F8e7tU+Lj2WiiQc9lnOw+JMGb2ciP40AI5rx9ShuMJvLaUyhEunt73r00I+hsUs4TyyMxfLxr4oIR5EJwmnJBl4MG8ioNC3C/iQYDW95dIFr0/lq+MysVkCqg2V8WZbs/Q/xAIBic9//Yiram6eMNqcpLBmIbf5TNWs8wV6v5A6RcHFHwJFgNNEmuXdNEHz25OKRJTAIfJeIYPHKn09XqyajtMNJwELH9hRjzU4YUWiSJsWv2LmrRHiwQE1fBiRMKzshmfEmJ/oKc3nmBASjLInt8rkNnflteMgSBOkXtk+TWuqNK4HnxuYTEi9UjWlUzq92b2kvnkLkijdJaHRDKyPHk4Ib2YEtiKyyPMOSAqJYg9BQ5T+1DefS2kcB+GQAGnZDVuoOnVk5OJns/6rJsGNgrwAV2aHmah2ee5QDlRNvCC+0xYCJySqNTp1KGdP0YnhAI5POMNBgVCqykWzE81L5X8WayfjzzRujlBkZmZoNmBJxzH5fvcVBR+oIJgubaShv0zABXXsi88h4O8anECVInzk+6XUnQ3YbSosQpS495Z0YfgzOnOIFGavwhVbaxx5T/ecZPr8qrMCgvy2uJoQZ4rKqDAKmFtDalgnr1SVgQZEZKR0Zmq20ECZA+wFCSQOVAGYT6JCoQwJAJEolk1dLnCDksy+/sE6AySFeAPT8WBIl02+rdT02bycEBaQJwZh3xbhY18QIiIp8zt6XpWlfOcIEsy1kDTCxMsX+TIHQQ4rGDg4VKpK4r/clT2Ucx9CzLWqM6uUOuWsAC9r1pDAqCwxGWxFF6QQP5Ah+CEz8O70bd/daUaVCL7BUj0AfrQ4nRtW32yymT+aDe3FD1B+/968s/ZDu1vt7tcuvq2NdaOQUyYP73z8/PlwX2B+laEpSNvbO9mnkERPD9R+F1HRZ+pOtNZbTo29MRduwE4qxzgu9XUFQJXQwqc0VbXS8eHgHv/TtnKLohnVfntPZU34D3Snj+q4TnBEneimZVArnP3iCQJR4GPsTOftpi82iuyTjeZFDlXzZuDsZHU+2GFw+GgLwVinh7vC9p5o0elonFaD+sUnC6eBv78rmSkdhDST5yGTRPd6V+Vg2cJMcUvPLk/r4SUjg527X0Lc1tJJVC5FR9ZzRhGTskGREL3Qt/oIpA8hhakMQ0SRIah1g1ep4gzwI+DAJHDRMWgdnFbbFfBDLdmEvgSTjr2WSWs4aLu6UPYQAAwe5sfHlV1FdhqhBvRwsSxXEUuUbPsKn6DU8Hi1g+qb+Y9Os2Tf1u8Y/Ecjm8Hz4sFR6Gw/Lb/XApX24W0/H5uvwv+8U5kstTgwAAAAAASUVORK5CYII=",
          traits: ["エ"],
          baseStats: {
            hp: 10000,
            ap: 1147,
            dps: 184.01,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3441,
            actualDps: 552.03,
            magnification: "300%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "366",
          enemyName: "スペースマンボルグ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgMDAwMFBQUFBQUFBgYGBgYHCAUKDg8NDgoLDxATFREgHgYYIyIYJSQZKCYgKR8dKysyKwEeLy0iNDJCNgEpQD4pQD0qQj8sRUMzT0w0UlBkUwFpWQE9X1tBZmJGcGtJc25paWmIcQJQf3hajYaghgFckotqp6BsqqOGo5/JpwJ1uK56wLeur7CAyb+G0sj1zQKN3dSS5tyW7uOb9eqg/fAVCHTEAAAAQHRSTlMAAwgTobXF1uXwDi4mUH0cPVtHNyhrX0uqgIuTc2ikoYORc52+tuCjzuG9/9TL1ent6vP/+fb7//z+//7/////Q827SgAAAuxJREFUWIXtl1t7ojAQhjn0tJEWFIXCagWhy2GrAi4UGkj+/7/agIoH2ELwdr879Zn3+TKTmYwM0yZWlgSebf2pn9gXz7N14QbCc4SKZAmGAwQPIRwpZ6eQRSoAsAuMC/cUBN7eRI7rD2CNDGMcz48WuMn2z/v7jCKvaozPLIzetl9fX9tJ/3hGDvGZBVH7IIAPmrKIGxKPCvtggZ1tP95/PVMAgI9KC9HRtfRzyks0DjinKAGZecgbS1GBfYCVlwDk0pX/DGBWAByNuWE9wRqwAkDXMpSJQAvhWNbcAzDKsyRyFboU8LrCKiFC+KgimNM0FmdESwE4OT4JRSZFNtVgo9vKBuFzpVZvAvAjYwODDF8qdfoS1NC3IG4qNfvlgbOIgZZ40lqrHtXkGKDbWozaAChUO+N5fTEFomz6YVGHnQC5LzIdJkZBbMpzmReP94jEw6TOZ2Isxt8D1DhdGHHoG3Z9C+Duc3ckoCixvwcsslgljYxgUjtPPn9/7upjFN73gFUWqv5lBksHaf0pee0AwFC+AuBsl56+gR1HIA4mPmotYnWAwOuYi4s0UZ3iX/E40eSOvlZjuFqRnCPYRkHrzrE63RQOgcRrK8DNg6RG510GfrGRlqYqgpZ+Qt6oK55h5p4tAI6XDfcagHDSp5lEmeemsh5kzRxAu+dAEG1XS3EjBYUn9Ysnj1KkrUk4vEAUgdJ7tqvhWotxakcX8fP+kx04sWMGlrBMD9nDOPdmNC/DdB2bY5F/TfaAPIvcMd3LonoWAHpUJSElC9+Y9m1jyU5WLWpE0QwMe16rRY0ooNmMLlyY+0EW9C1/Q0pcAfo0QLukYN9Bg1dmwatukM0PBfBuWQa4pF2vanFVGRJtaPxhUQtotssrQLmoDd/zSgAZStnwFOwBN5yAYZcQ58OLWAFoxlBT3KtnazcYYLixdNN/R6Zrm/mvbrGAF4WRNHmuNJFGgshTjdfRy939w+PTj4OeHh/u716anfUXhE7M2E2ExCAAAAAASUVORK5CYII=",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 30000,
            ap: 1234,
            dps: 124.23,
            speed: 6,
            range: 840,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2222,
            freq: 298,
            foreswing: 59,
            backswing: 62,
            tba: 120
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3702,
            actualDps: 372.69,
            magnification: "300%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "360",
          enemyName: "エリートエイリワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMDAwMEBAQEBAQEBAQFBQUGBgYGBgYHCAgHCAgICAkJCgsKDQ4LEBAQFxcTHBsWICAYIyMdJyQVMx4fLi0kNjUlODQoOjgvPDM0SkhNShk4VFA/XFdFZ2JfY2N/bAVPdnJzdHVVg35fkYuDg4NonphvqqLCowN3tq5/v7jivgOEzMKT0cuT2dP90wOb3diX593T09Kh7uef+Oqh/u6n/PHu7e7///9k0IHSAAAAQHRSTlMABw0UGyM7TkV+LF1r24qil/fsvq/S38rU6/0L3fcx7P/+//P//f///////v///v//////////////////////03sm3QAABSdJREFUWIWdVwt3ojwQLb5QUVDBFyufiSQ1TQpCAyUlsvv//9UXqFpd33uPx8c53puZyeROeHl5CFqtq+tN7bE/n6PWaHWc8dgy/klCa7R61mzpEzS3jdrz9KY+UGzG0zhAVvfZCLSmYS0UW0iZhsHSeHb5um4tcJhKud3mUUSd7pPLdzszHAnFVkiDyO88l0Ct7SyD9Ju+lTwOZ/pzfGOK43y7Qx5z4jSf5JP98mUGEYfWM3uo+PSIv00498wnBDR9SrMjfs5Tvug9UcOWg9MDWwmJOA1m+uMCjYEf/yyv2iDjKZ22tPqDSdSMRfATv4zjPOOCTLvdjv6Qwq/2lIiDgIgQEZwLbBuDmVl/KAHL44flEwoB5FEs4GRG8KDxAF8zJjQ/NCCGQahekYAuS5n1iEBjcAhA8VEsBaZKAMG0CB5qxtb0EECq+EWRUxREgsBEBNMHzqPWW+63MGdQ8YsigDRU3xkljwg0LSx2/cMhSUqEABEeAuCCmV6/202tMftOQGbUhagEdF0XIddduSPbbN1R0PR5WAnkEQaQBDswRuFqswLUt+90tGaUJZBbEULAkqqaUgoeMgzWnxuAiWe3bgrUestyEwUDSNlJ8V3MAILVav3x+bFeqTQ6N9ux1vN5SQEoKX5Og1p+8/H5+fnxsQbQvrkVSiBRDAj5ga8UUlYGoLBZBcHiZg5VCoKA6IivFAQFmzKCNcriRftWGZVALCPI8u2JgAzA5mOz+Vjj/L5A2bb8JABVFAJUAVfrNUqj2yloxjyMATkJQBaFJC6kPEAuTO4IvOhzxkB4GoBI84jxXA1IxvidIr60JgSrk3vMV4cykrv+jhCY3Bbo2hAgccwvIne4z0my4bB/W6DpeC4+KUHBIdibbKE6/E4ETct1D46y7yOeV+NhW+RZcq8GpcC+C5SZHES2uRA5Z4SRea994a5U7/73a1eDg4DM0mN7V4cavb69weFkZp27gu441Q1K0yfA/c64yCjCLCuEqJpZeTsF4dfXO6DB8nxA9Dw87TXrDd2GZN8GIqKEJHmc7KuZYPT6Ckkmg/PbTm/JyMK2nLFLf/ooT2Kex5jvfKHYJsqawkwW0bm7GhMSUOh5LkmCg0CMSaisgRc/kHn5zs4j0McsLL1P3YqOBFicbSNAeZalB2RZllyYcV2HCnUNKRs+ODkKpRV8m/MB2J+eO2vN9HcD7S8BpRCqAfu+x5tnm+aFMa9GaigvCqjiCfL2e48vv9O4OF2ajp9W7XpJAL///rPDl29cNiTNmLGqY5RAIE8FUvi+5/9Jltfumw1zHpSdmzP33wReuoM5DqKIATf8SyBDPzVIlldSKO/2nfHc8+b90WkNVFIueN0Dudb1wVJvdyyr05moFE46gSB6hOXg+mzT6o1GvW2TvDjGVjnBEcLp7RGvNc1lnN1AMG13u9eDaBqGMYaEEIwxIdVn9Y52vxBeOKYyj6vr9/oze46VtbvKOBSwC5n6gCOv+knhfLLwqW9dFTA9ysKEQUTi0loFGZZ3JsnmcxKps5knURglgl4XMBZhLjNMk8oOZbgc+6UjpXjuQsh28yX1zes1GGCuBNROyvJq4TvVrqpHDsYC+D1xZEpvPD9pbduPUqouOFJmEeqbPRvGVTB55HlBmos0xLPejVZoDfoexi4gjGF3OOr3R0MYiVzmHI1GLiLqEdjRb1yTtFZvYPdHo+ExPEQogcPhaKQE7cGdRqo3um2jY5oDBauCY9vj8dS2zE7P0FvdxjH/f2+UbkUyrPizAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 500,
            dps: 405.41,
            speed: 12,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 21000,
            actualAp: 1500,
            actualDps: 1216.23,
            magnification: "300%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "362",
          enemyName: "グレゴリー将軍",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 15000,
            ap: 567,
            dps: 1063.12,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 5,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 567,
            actualDps: 1063.12,
            magnification: "100%",
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "363",
          enemyName: "ハハパオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgIEBAQEBAQFBQUFBQUFBQUGBgcGBwcICgsJDAwNERETHBsVHBsXICEZISAYIyIcJiUfMC4iMzEiNTMoPDotQ0AuRkMxRkQ1REMxSEdcTwM8W1ZEWVdZYzRFZmJJb2xPb2hQeHR3dCNagXxcjIaahgxhlo5nn5iRkpO+ogdwrqZ6vLOByL64uLjpxgeI0smM2M2Q39P70gmT5dmX7N/V1dWc9Oef+uyh/u7x8fH+/v7///9pxp3BAAAAQHRSTlMABQwXJy84QEqE28VZZXKIp+yZs//D16fvvOj+3czf/ub//+P//f////7+///9/v///f////////////////8Ab/kakwAABFdJREFUWIXtV2t3ojoUVfBVq2ixWr3qgEBKStqEFlJoknb+/7+6CSDiA53hfr17LRcuydk573Ns/f6PaP1P8Lt1Ex3D6Nw+VY/eFgXzrtZYXpsSwdG90Zihu0mFiHe/+k0JRj5LE/TyNu129HYD+fYEB7vn54/Pl1+/pnoDAn1F8e7tU+Lj2WiiQc9lnOw+JMGb2ciP40AI5rx9ShuMJvLaUyhEunt73r00I+hsUs4TyyMxfLxr4oIR5EJwmnJBl4MG8ioNC3C/iQYDW95dIFr0/lq+MysVkCqg2V8WZbs/Q/xAIBic9//Yiram6eMNqcpLBmIbf5TNWs8wV6v5A6RcHFHwJFgNNEmuXdNEHz25OKRJTAIfJeIYPHKn09XqyajtMNJwELH9hRjzU4YUWiSJsWv2LmrRHiwQE1fBiRMKzshmfEmJ/oKc3nmBASjLInt8rkNnflteMgSBOkXtk+TWuqNK4HnxuYTEi9UjWlUzq92b2kvnkLkijdJaHRDKyPHk4Ib2YEtiKyyPMOSAqJYg9BQ5T+1DefS2kcB+GQAGnZDVuoOnVk5OJns/6rJsGNgrwAV2aHmah2ee5QDlRNvCC+0xYCJySqNTp1KGdP0YnhAI5POMNBgVCqykWzE81L5X8WayfjzzRujlBkZmZoNmBJxzH5fvcVBR+oIJgubaShv0zABXXsi88h4O8anECVInzk+6XUnQ3YbSosQpS495Z0YfgzOnOIFGavwhVbaxx5T/ecZPr8qrMCgvy2uJoQZ4rKqDAKmFtDalgnr1SVgQZEZKR0Zmq20ECZA+wFCSQOVAGYT6JCoQwJAJEolk1dLnCDksy+/sE6AySFeAPT8WBIl02+rdT02bycEBaQJwZh3xbhY18QIiIp8zt6XpWlfOcIEsy1kDTCxMsX+TIHQQ4rGDg4VKpK4r/clT2Ucx9CzLWqM6uUOuWsAC9r1pDAqCwxGWxFF6QQP5Ah+CEz8O70bd/daUaVCL7BUj0AfrQ4nRtW32yymT+aDe3FD1B+/968s/ZDu1vt7tcuvq2NdaOQUyYP73z8/PlwX2B+laEpSNvbO9mnkERPD9R+F1HRZ+pOtNZbTo29MRduwE4qxzgu9XUFQJXQwqc0VbXS8eHgHv/TtnKLohnVfntPZU34D3Snj+q4TnBEneimZVArnP3iCQJR4GPsTOftpi82iuyTjeZFDlXzZuDsZHU+2GFw+GgLwVinh7vC9p5o0elonFaD+sUnC6eBv78rmSkdhDST5yGTRPd6V+Vg2cJMcUvPLk/r4SUjg527X0Lc1tJJVC5FR9ZzRhGTskGREL3Qt/oIpA8hhakMQ0SRIah1g1ep4gzwI+DAJHDRMWgdnFbbFfBDLdmEvgSTjr2WSWs4aLu6UPYQAAwe5sfHlV1FdhqhBvRwsSxXEUuUbPsKn6DU8Hi1g+qb+Y9Os2Tf1u8Y/Ecjm8Hz4sFR6Gw/Lb/XApX24W0/H5uvwv+8U5kstTgwAAAAAASUVORK5CYII=",
          traits: ["エ"],
          baseStats: {
            hp: 10000,
            ap: 1147,
            dps: 184.01,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3441,
            actualDps: 552.03,
            magnification: "300%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "360",
          enemyName: "エリートエイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 500,
            dps: 405.41,
            speed: 12,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 21000,
            actualAp: 1500,
            actualDps: 1216.23,
            magnification: "300%",
            count: "5",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "362",
          enemyName: "グレゴリー将軍",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 15000,
            ap: 567,
            dps: 1063.12,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 5,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 567,
            actualDps: 1063.12,
            magnification: "100%",
            count: "3",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e25022Data;

