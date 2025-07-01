// Stage 2046 Data
import type { StageData } from '../../app/stage/types';

export const e2046Data: StageData = {
  eventId: 2046,
  eventName: "開眼のメルク襲来！",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 46,
  stages: [
    {
      stageId: 0,
      stageName: "メルク進化への道 超上級",
      baseHp: 200000,
      width: 3600,
      enemyLimit: 5,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10122",
          treasureName: "にゃんことメルクCCへの進化権(メルクの第3形態)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "091",
          enemyName: "ノルン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEQDQ41ABQgHCIfHy8mIiIjJlIvKDoxKz0qLE82LzAzLzwxMlE9OTUwN2lKM0FLOCtLPUg4RIFURz08R39aTENaTURYUEVpR0xkTEM7UKBiVktuUz94WVBZYYZ3ZWB4Z1iBZVWGZU6WZ1N+cWeLcFhsdpSDdGqUcGGfd1OHfneod1aOh3SPioa0gFZ9ibeUlJSvkn6qmY2tra3BtKDBuKbFxcTXzsna1tPi2dTp5uXx8fH6+vr////AcgXSAAAAQHRSTlMABssWBilPC/5mweYxgqAU/85E/vx8y8BfJf3g/5qv/v7SfZPs/0O8/vyl42P+/uz//562/rb8zf/+5v/9/v//3nFsMwAAA81JREFUWIWdVgu7sUoYzbHJJUIuSUwuQ6GQkRlT+f//6rzT5uztO3xMq55KWmvWrHmnSVH+hLrchm+xHf6Pd8cwvCRpehX77XDfxH6/TM5b/TlfD5P0muF2uv9Iv++k978uy+cCyzh7Ioa2kuR6TeKExSlYguvv9hMex5na6blAmDVDCWUp5SlcRBGHA2PXlPH4yjkPKM0auTzlF06ZY8YZi0kUw4lxUKKMplcGxIRyknIunomfC4SpsEcjkrEYpUmS0JgmlCUxFWIAwl4LKFthL00oZbFgxlwwGb9yBjkICyncikWO5xejcEof83+FePtcQBme4j8G8BnSS/iiDsDDNjz9QpQVQHI+PSBcqq/4Islf0M6CH4d64QF/YT8LNX5Vt+8hMr1e8vOV5QXy2v6tv28AU+v8YtZ8hOE5ycm/dXrLT6/fHK9QUIfLrZZdqmEox9c105zNV5vNWP/KfptS8avmarPP4K/W8052Syb/gnmjZxKTjlrsjNez0ucSncX+Fza9UnWEMJ7OP5UYrvzfAvtVb4QQwr43Hc8+SVJfP/L3vmW1GyOPBEFEjx+YGG4e+XtstTX9GBBvsInOHwxGRxjwAbcTtoxqwSTr8VTTVtEH1djBQPXh4As+RpaFe6UpsCemau4+EbAEE4N1H+M9CGDfNHfjglLqlYufpKiNMBjYE4IxwpFvYLwwVztRTVBM6td7AXWCRNNR5FuIUGL5eNHbTYvviT8C2IemOY+QTzkLMJpMyUTi3af2iI+QZ6GAEBZ4HkLzwaghIaAMj+CAOC7hnLkuCEzaVblX2XK+8KPDgcFyRoiHFu2aRAIZVHMRwRLOYafT0aBdleTDfGiYIXwJsMt5Vm40pQ0AisWm4zvjpa4USjV5A9CJRrfrOX0TwivXSvL8r2rdtl1i94uK2pQawhvK9YptB8Tpq0onjwG1Wal0wQEI5DOg1SuVlu247m62HmnyfMitLizYLiPsLL8gQYbFUi0TIF6US0B0ogUhBo6BVvm+CBqtrkMi4hj+MZeAOnHcQxB4Vn2eb00v11uOC5tRr+YYxKwOWrZtd1uVVj9HGWWFCGNg2y3D6DZzfBaJQrQzBwYo5OgEFGLrR6AvXYqFXrfrZPxuFxRc6clQHDjOAeC0HAcEDOn3iVquGVAGrusenGbdMExZAaU0QGjUyKDVcggMVwgtzO+Oq23DGEsOpDr3LOtO0kaGMZKcj4V5gNDdtjaw0FhyOunHaDf+r9HOwpvJ8ZXOjsx+eq0PkKRAYRysSsUfNNFMLsRSbfHPA6xao/xRLf4LiibQ4z3PLcYAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3200,
            ap: 430,
            dps: 314.63,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 41,
            foreswing: 30,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 19200,
            actualAp: 2580,
            actualDps: 1887.78,
            magnification: "600%",
            count: "1",
            spawnTime: "6.0s",
            spawnTimeFrames: "180f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "093",
          enemyName: "セラム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAATDxEnJiY1Mzo5ND08OTo4O0s7PD5LQEk+SWhPSEpNSWZUUGJTVF5dWVNPWHxsVFlZWnRlW1xeWXxbXm9sX2FqZF94ZWB/Zkt1cnV/cWdxc4qQdGeBe3eDfIqNfIKBgJiGhZKnimaSj4eWj3uRi6CYip6TjqiqjnWVlJShl7ienK6eoLqjo6S7ooqnp6ivqsWsrcfMs4m6scatvfTFvNXFxcbJx8PWyJzQzdTf2dPv6uf19fX9/f39X3q1AAAAQHRSTlMAY5AtDBo2SVsLd7so/6M9D+P/8nX+yl6J/uw9sP78XHzZ/pjMbYG34v79U/7P5Yb+mf7O/e7//7jY9////f7/PlJYdwAABANJREFUWIWlVouSqjoQ9NwFBUVREDEiUYKKwagYRVZ5+P9/dSbuo7z3nHXD3S5FqaJ7ZnqSCY3GE3jLwxfYb/rPiO/YXKrq9ndU1av3Ld+7wJNlWVbwuVWCBN9bVd5/brfXbwWW4rEiKwpK84JnZZFXRV6WPL+VuZD+VuAgcs2zIiM0y/OiAL1SKOZlVUgJiAyqLCtyysRVaMAHLrICwoPq7kF19wB+xF95D0QXvmgCqEl0QayD/SdES6rL563UOvijHqmoXwAcrQ51oz6g/3orf8JvbMpyr/+Arx+K5U/4DSPa/IjfMEzJB1XTmy2Xqw8sl7OZ55mGqsgGOl7vOL3j7e56uRwk182sKIvrKcYITUbjO6bTCY7jpCgPUh4YixPstlMSJ8niPaQbY7g9FVtVrobhdLGYiKCfAgmOMQ4WgSElAPCGrdYwaLvvvvWH7bbWaobrlqyRm/QYzi//Wna6Nk/ZWFagf8gyXl6ggr5hmk2g6fMgzdhQtoSGu8tggi77++0u5bvIVJZpxtnalRbQ3SDl2XGb8bPAbrzjnAVuna1ohtGUvfPPZz6ar8eGrANvUNUe++Cfz1tjJt3DT4URZx98fp7VpTcarUkS0zubg8ChXv4CmhUjh0ISjJ3Z+Vh/lmkOJY6D+ZnFnPwfgZbtEwcnhF1PBPOj3EZ6hGk7ThdZ6FQmFmKSO/ERbQeAES7KBCMa1TZRHQkBGCRlmSfY79UW0Jy7QA4Dqjj53YHsSP2A0nE6ttN1KD8l0IwOCWum0BzY2mhgE0qQyKS3q+viS2egDQeEMd+ykDNq78K6p4rSbKoRo5RYFrHbLbd+G2EcRZyRGFkEyU+SRxirlFOGQcAPvHorWfE2s9VqQRnnMfIR88mu3sGsuFuYaAkGAWT5DifIT6OZ15dOQ9+8lmVWJJxiq+s7MUI4ybJd9NyKl+Fy5hmGrutqeIF3ShjDGRjQdaCNKEl4ls6fl6GY4Ta9XF4BO0YJ55RSRBxQcHwfE0Z5uvpmrirGeJuKxQ/RKQcwy8JwTPsxIYT6PqHbw341B7gvX2mo5jw6goFvIFYXJJADVMiJiK6A6joam0+KUYz59o3OGeoCLNQlvs8EaBBNx27zaR1qeEzv7Ow4xRZsI3s0HUAKhFJQCIbfng6qOw/DcJulB69t2wNyClW9NXAccIEE6/U6kpoLrcPe0+GtoNW6FsuG0sZ4BFngqQmQ2lSKWHPia16vm0ZzEk8Ns2fH8bj2lvSuV8/o4QDyVoaB7U+f2f83QAZec4LvLxa6oXXswbjeGevGiavZvQ+SAhIjrc5wNIK12Ww/VK5qncG4RhlKb/Rf31StVycH1fgznKK8fLkVZPFzBZkgv/55wK+nIX8Da6+/1oLNKD0AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 36800,
            actualAp: 2400,
            actualDps: 1469.4,
            magnification: "400%",
            count: "1",
            spawnTime: "24.0s",
            spawnTimeFrames: "720f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "094",
          enemyName: "フウ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 30000,
            ap: 1942,
            dps: 924.76,
            speed: 4,
            range: 200,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 63,
            foreswing: 31,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 7768,
            actualDps: 3699.04,
            magnification: "400%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "165",
          enemyName: "アロイス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAgMaHCMdHCAbJTQnJzAdKkIdMDAkKjsmKzYhMEYlMTwbNlAyMDgaNl8qN0k8P0IeRXBAP0wjSXVaOjpBRUcnVlBKUUdMUVxUT1RVTlRgTUhaVmA5aF5xXE1vXFRwX2CAZlp8apBzdHWCc3CEdntuhHt2hISOgaGUgY+Og6mWkK2fm5itj82VsqGxpbCisKuWt6ijta+Xz7S7u7vBusOF4rWozr6L4bnR0NDW1tbi4OLi4uLx8fH+/v7///9DynRUAAAAQHRSTlMApRNcOSGJCOOp0U9z/f7C6OX///+guHkH/0lkHf2yl/7Shij+4w5Yy/+s5P//Pf9pUYmkmf/gwPf/zv/m/P8ASSfn0AAAAsdJREFUWIXtlet2ojAUhR0FuVQupliJlzGUWIqCWBQtRjrv/1ZzAq2t7SqGzr9Z7oUsBPaXnZMTbf35R7WugCvgCrgC/iNAjSZP6bZW6dqv8/vb4uWCisPqe7+bgr9grGAFnLkKBjcqKJxZebWvmcABnmdRlCc5y6KEX+WMJRlj4M1YkeQ5vHCsmcErgGXgj5KcA0BZnhcsywtgZDxKzRT28DzPsoK7Mv5hEIEDYC6ckmf1CVrB8VINIUBaA1CC/fGjSsPZneNhPakBwCz8D9rwwKl/pnr7uXhNj2u3geOT1sXLIVB+7oc1OQRNPe6HwMFxX9v3XzW5XyzuT0VS0m1D/+gxBj2+EdygScFBcumP48VPyz4OK8Cy4cAnzWIKiCSej37mb3scAPuNji++O/Efvt6UPZ4ftl+8uNg7bpA+fUGM5mUFsux9Hb7Xw2qz+YRoa+S1iPFSpAgP6/05QrIRphWCDtoCBHe12W1W74iugQimYA+xo8sCAAjxtD8hJiMLcQChFCOk3ggBAJHuOML3lZk3KBNgQrFh6JpYhLKYz7vt/SIY/wYAjO0QQhw0uBGNwIu5e57Pl95IHmCMMHEcB+OhsL3Fe+KRUgIAC4eUhthwKNZEVuEkf7Gk1Jt1TQQVjELHCbHZa/Q75gdz7/ecEIoICSN+YOFl4FLG45ncsRDEp0CBadAQWZJ4BnfmDXuqaUIFaRglESUYm6baFV1JmMLQMkvhCMYnGBmIf7Mk0Snc9G9Lv4GhCQj0kVERdMFCSP1bAMABRkxszSjF7whuCalf+XWVG7V2R30DWILt0Ov3eQjLhlY2Oq1Wp4rQ17tifiiCBGW4xVx8UIlHQLgrN+hHpafdTacY27xubc1Ahj0QXYQ3xHA6nVYrJ+uGaY+a/ikrkGDaKy8lyzb0huNDbku9G7wufLurdhrtx3JYW//1rgsB/gKKw8NmDIcLKQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 450,
            dps: 250.0,
            speed: 12,
            range: 270,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 54,
            foreswing: 28,
            backswing: 26,
            tba: 10
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 1800,
            actualDps: 1000.0,
            magnification: "400%",
            count: "1",
            spawnTime: "36.0s",
            spawnTimeFrames: "1,080f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "164",
          enemyName: "コーネリア",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAPCxEdFSAnFicAAP4/JF8+KFU/LVQ/MFJELlpEM1ZSMXJoHaVYLYNPOmRbMYNnLKFeO31qLKlpMZxsLahWSGNdR29lRH1bUF9aVFVdW0B5Ob1gXGVqVHdqVnttV32fQY9wZVf/AP94Zod7ZoZ/c1Z8enuAeomMdoaDfYmFfI+7apSSjHSQiY6Ujo6ilJebm5uopJSmpaWrpLG7soXEt2S/u8PIyMnS0M7m4+Hz8/L+/v7///96mzPFAAAAQHRSTlMAFGTMnzMNAVHF/hbnNqIJhP5sO9kcuFJG/+yUJA8GWsv/pf5xAbj8Ij7R/6WJ+F7+5/1qwpf+3vz7wv/7/v8A27MrCgAABK9JREFUWIXtVmF3ojgUZWZbRgkiAUQIUgzjGhFaMEIQgc7//1f7iLVnZkfs7O63PXMPFQi5N/e9vJdT5dt/hPJb4JtyG2Fe/QrycIS/O/evV9x6eh85Jzf5qJKfu4HR98MlZ0vIga6DPzl4vm1AfuyaFn6E6JqmBUrXiFbAW9t2gvOuay+Tbgok8lsvQAA4bQOT4Wr7V8FF17e9KHj32kpf/R0HbTvwRNO2/fDQw70RUqABB337Ou4grN6ifv0uAfL1euv6S0r7n3KwQvK36vq/47tEvqM7777jqiqsfbzsC0qOA7KqPL6hHBTOxx+R/FAHUQQCJQjMZ1YQBx5SwufkukR4Hvi3d/2KvNwpSZ0rKCA+Swu2na3KpNy8b0z/g98biJpzkjc5cn3GOU9ZcXiuk6qULCitvrrNV6P8kjglEd05a7KACl6w1PcpL3j03Erbu3NXjdS9mpR1+Zwnq9WsbPuDOBBRpJQxn9K0KLJzBwJqeGxLb9Q6ysumaeo6y6B0GlZwxrA/ABR42+TQmOUhS2bqePTI22xrIQ4chFKI3r8I+D5j4rAXTfnszSbx/RR+WkXxmlCWgm/qY8oGB3Cx9XaTIGUVBIf8rgBgMtUx1jADvkZTH6cUjGDdgk+rzSo4fSSgBrAoluYhf9CxnA0KvmNBhCHafyQwM4CuaTJ82IKm71JGNRgAiSAMI37KF/adPM4cmKlpeLAABVDAEcILENSGd+Llm9MpzzbjfCi/wQD2BwKBzYBubBsYAAtQFPtsf6rjrY1G+RaRBnwHYsDmvoYTrGuZhomDcVoIwU9lbsXPtwXUhW0QKgWIOfV1Yq29gLIsJppuEJ3CQVgUzLCRvRhb3iApkwIumhmPhudVB/b1JTamzsZyICPiJKg5H0/AwmWNFNDtLypSLJR0DWOMBsEmnJs6S0V7Kog9yp9b0L7D9muG9KiiTBwKyigJQmVu69DdglNmjFpYOCm7CEwuc2bOetMUKdN1K1RmOuxjIRhxRjKgKEtKmBiSqM8uSTX1SdLy9GBNdU9FOjRGKgp3PAaTuFxA+V4FPGKgoBBdVwXTqWGCQMoEN90xgS+m4QoBk94EVMPZZCSFo4GnW82xdM3nQjBzOR7C0i2gdyjkAN7CmJhlioEFBwN3PORcHpfz0SQ+zYMU1qAYS4GqDhj0EXQFTl9iBU0xhi29s4uDB8gSCEgHShgF65f05SvghUzV+RRDfoizvCewcEgBIUgHqrdZRXv2AuDx2jAn4MCnrnlXwHYNll5CAH6YHEsO/wtQut6iiaFrlNLYvhvCwrQYBQVzjqIoVNAqKxh0hgbn6KNJoA4c6+npnsDcth04gX1ngQIvCrL4VJu6pumPCgjAGUmWd+kDnpbuUEpmsD+cAHWirjXtQR3KkvruvU58N7F0HB8bu2NV1nVdhY9EGlDmLnatu/G/K1imgx1bQbtdFFto4uOHYdh2fWvxYQASC9siZDDr7bexPaHSAAi4oyX8k4eFS6wFbKTnZWgCNSRl3eWfvyowzDalW4SUGTHefP2a/6uCdZ2uTj/L+5d/QleGxro+PX76h9Tf+I3/Hz6941+xPz88/PGGh4fPH2r8BVVpNRCal1hrAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 900,
            dps: 177.63,
            speed: 13,
            range: 430,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 152,
            foreswing: 53,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 99999,
            actualAp: 900,
            actualDps: 177.63,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "096",
          enemyName: "レイ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAjICgwIys4LjsvM0oyNT42NDc1OVVKOj9ARVRCRVFCSGJTRExOUlpWUFZLU2VJVm5pT2NSWm1RW3FVW2tEXodbXWxZY3ZbZXh9XnppbHhtbIBmcIVpepN6d4p5eId5fJKIgYaSfI2Igo2YipiXjJuSkpKjl6KioaGnp6e4oam3qbG6rbXMu27At7zEucHJvsfFxcbWx8zg0tXi4+z53c/q6ury8vL6+vr////7y0vVAAAAQHRSTlMAFkp8l7HMFf//rS0J//94S///LhLW//+/7pn/U/+F/3Da/cL/o+0v/4f/0lH/f5j/s////9L/t/7////y/v//f7G2wQAAA7FJREFUWIXNVdFy4jgQ5HY3B97YTmQcmQS0Aq0IwolAKMKRDIb//6sbObndVG1VSkoe7prYxUO6Nd0zGgaD91A+brZ/4LF8l/MWq+fj6XQ+n/3j3/5zPnXPq0B+uvXMruvOLwLd6fXLc2gBR//fttGd6+CvNfZ06os4RgicOmtNp5tWuk7bzjlfRhdVQaN129jWOGftq4fQCvoMTmC9f+Dozsd4Cs9gMPZd6PES3guOwV3o56DH3tP3L983EXPwL/o0I879A5vu3G3jz/2F8vl8/AwfHBw3n+Gn2+MHcnuDcveYfoY/KMefov9XKMt0OPxAci9hpavNbr+bL+NHb7Wdj9NBud4711hrN9ECG6cXd9dba50zjXMP40EaZaPctRoj1vjVYYzVdr9ez2MEVnvHsIDjYQ1Ka7WyZheVw6MzREH9Vhmln540r+9nMfzBppVMSjheGWOenlwtxEPUFG5bifNaSaWkderJaS3FchjOT3etwbmU3rs7HA7QCq0eItpQPreOFEI3xjYGBKxrlI3x4AU4FZAgr0hzcFQYVat5jEAjay5qZeFlD5ChNpwvroMFIAPNuQCy0t5Co6Tkk8UyeJukW2egc5QroRxE2NSUirvrH+ExbhojRVUVVY4Il7ygWcbvl9fh+2yuIbWqypMRVYSLCqGMML4I78NMm5oURT5KlBWEYJRlCDP+I1jgB6SO8jwfIVFTPEVZklWc8J+hHlYPRhMMFSRFUZDpFI1GSQWZ3Id6WBtwQDBkACYQnmIvUCUVC72SIAAFM0ohxQxNp9NslAhaUToPFNiAADNNLcAEFNB7KCitWGiKj34MjJNU0EJbAQJZRSvM2PdAgfHeaaGsrASVhwOHEpitKeNZqEC6dk76daCq+nBgIIA5yhBH30OXylg6C9dR8Bz2EkHZFGcAwoIFymXdWFlLXY+SZDTKpihJsizBk+C1NrtnNVxlZ4sRAEEfR1lW5DfBAuWSEYBsJRRQTTG8c0SL2/CdMrv3AqRxMI6ck8qPYlHgSfCNLpe9gHCyyAtS9U7yKqaE8QT4mKhW+bUASHLYL8GzCBhe3YACs62VsBqKPPcP/xnx8zK4vLrBmDdt63RNC3+zEbu9jBDwVSx0LW0LGo3iQjKEw0PoMZM19LM2cLs454wgEikwXk5ubm/JL6BIC3CvhsPL6wl75WMUPsxvUc4XrxLo6iN8LzG7m9wSxm5iHfxGmo5n83XEj9P/BH+9RSz3y9dvFxd//8bFxbevX95j/AMP2q2mG4NKvAAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2123,
            dps: 1010.95,
            speed: 18,
            range: 130,
            rangeType: "範囲",
            kbLevel: 3,
            money: 900,
            freq: 63,
            foreswing: 24,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 8492,
            actualDps: 4043.8,
            magnification: "400%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "098",
          enemyName: "癒術士",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAwIFBAMHBAQSEBgaERcYEh4kHSYyJD8zKTo1KD4zImEzLzI3LTo6LEg6MT9CLkk+MkJCNEg+Oz1RPkeDJjxeOUtPOotcRGJZVFaZNktfUlhdRJ1mU2JmU2ZvV1VpW3FrU5uBZld3aXB4cm14dXOCdoiLeH2Me3GJgX2Ph4OXh4xDvbmmlpWemKWenZ2opaKzqaW5raW/rKW/tazCwsHKxMDOzs3VzMbe2tnf2tbv5t/+8tz29vb+/v7yJHIqAAAAQHRSTlMAOebJhGMOnCXnQnP+DK2H1r/1/hxd/+j//RH/hf/jPv6r/v7ZPV3A6/6gdP7/0P6cgv+03/7/y9v/6P/9//7/+NVJxgAAA9hJREFUWIWll4t6ojoUhe204g0ECVbBC1C8gDAiIEgk4vu/1dmBY2tnhkJ0fVoEXX92sncubbW+SVi7hxq5a6FVKS0459ca5edAq/ILQa2dirhVgPWZtoDjhORZluA4xBncZzghJMM5PLleM9pEWgXYEPg28z0PvCEOPSfGBTDL/TDBmZ/k14QCSBXALb4NHS/DJKHXEF8hGAIQjJMYGGUElYA1Kbvgw+9xnoQ+eACRZPCQwH1MSsC5CqBF5TiTPM/pBa4FEv4U93lxveZRFaC1ThukIT/plYDW+nBKv4kUlvsnp+AHP5SCoNyryEse6XePfqjDf+AOtNtRZeXVSkshZ4fH/bQwSKA87hei69l9on2YG+cN05j9qSB9zq/s1s/YIQdPDN+TLW/6mvZ45zl9uzK3Zr/LPQgYrwyEVLnXGw4U9hpQNvMl4gGwWHx8fGx/nHf/BhR+MC8KmawhUD9afGnJGAInjibTW+tT+jIZkyHK/HT62T58WrHVEjfk+eniXjZbH4TRX4AxE6Ar8d8I04XDCOjxlFAgplMELLXNBOjz90KqitQ5E2AALkTfqmoYlhcaqrpjKiWR5y0VIcOHjd3zY+yoxpYFwEESPlRVtTwvhgNB6Bnqcs5SCHQMIXrVwRmhwivVZJrUfRlSMBqpZohJBqeT/XzClsUBzaE4ngyWMICeY7ndEVsllwBlNB7NLM+y7LUiss2ldo8CBHE4eX+fzWaTMddl8re4Qacj9oW5gWazd9By8NDKOrYNY1ZIlR7ZGDiRVmEJkEXGPlD1e0iWSoCB5CHz2t4dISQNoQ8WBSB5cBdbE5jQl6FZqRgEYyUhdBdCk6rWgpMhi0NUDKOxGoj2/vOAITTZq/U0M9tdEwDGzLCssbCLjzeAcmxwWNKCSG/pNnipnJ2g77e6cAOcG4SgaS0lwo4BM8FxLFvnlPnRLfuupCSoB4DcDM7pied4juOtXE0/4kiH06cgRJdDozwcCIlDsrN9DxYWP1pHhKT7Uxq5AYkaAcDgx+l4RQF+mJ3c9HIhmFzIPmkUgZ6SLMb77tz2PAog0REWqMvlkvz+vWsCgCHAMT5wgunHnu/D2gQBlAA/ajK5tF2S4RMkbAyj6NgZvtwEC+WmAYAz4zCh/xkq8zmk4fgFAJ3qS4kTZWuvl7+DrVLaktJKYviQNdjtudHXDKR7rf2/H3sUsK0HwHSWbqsI1/7FG6QMgW4TmET1a1xbRp3PZHFDJCdRlJbbTBJHtZOB49pyr/3yqbdeb9l569i2JEkTZ9iuW+Fe3jqvvV9/6PW1Q/X2Nmi3X/72/AdYH9iQGP2IGQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 299999,
            ap: 3250,
            dps: 2119.57,
            speed: 23,
            range: 310,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1400,
            freq: 46,
            foreswing: 20,
            backswing: 26,
            tba: 0
          },
          stageStats: {
            actualHp: 299999,
            actualAp: 3250,
            actualDps: 2119.57,
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
          enemyId: "096",
          enemyName: "レイ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAjICgwIys4LjsvM0oyNT42NDc1OVVKOj9ARVRCRVFCSGJTRExOUlpWUFZLU2VJVm5pT2NSWm1RW3FVW2tEXodbXWxZY3ZbZXh9XnppbHhtbIBmcIVpepN6d4p5eId5fJKIgYaSfI2Igo2YipiXjJuSkpKjl6KioaGnp6e4oam3qbG6rbXMu27At7zEucHJvsfFxcbWx8zg0tXi4+z53c/q6ury8vL6+vr////7y0vVAAAAQHRSTlMAFkp8l7HMFf//rS0J//94S///LhLW//+/7pn/U/+F/3Da/cL/o+0v/4f/0lH/f5j/s////9L/t/7////y/v//f7G2wQAAA7FJREFUWIXNVdFy4jgQ5HY3B97YTmQcmQS0Aq0IwolAKMKRDIb//6sbObndVG1VSkoe7prYxUO6Nd0zGgaD91A+brZ/4LF8l/MWq+fj6XQ+n/3j3/5zPnXPq0B+uvXMruvOLwLd6fXLc2gBR//fttGd6+CvNfZ06os4RgicOmtNp5tWuk7bzjlfRhdVQaN129jWOGftq4fQCvoMTmC9f+Dozsd4Cs9gMPZd6PES3guOwV3o56DH3tP3L983EXPwL/o0I879A5vu3G3jz/2F8vl8/AwfHBw3n+Gn2+MHcnuDcveYfoY/KMefov9XKMt0OPxAci9hpavNbr+bL+NHb7Wdj9NBud4711hrN9ECG6cXd9dba50zjXMP40EaZaPctRoj1vjVYYzVdr9ez2MEVnvHsIDjYQ1Ka7WyZheVw6MzREH9Vhmln540r+9nMfzBppVMSjheGWOenlwtxEPUFG5bifNaSaWkderJaS3FchjOT3etwbmU3rs7HA7QCq0eItpQPreOFEI3xjYGBKxrlI3x4AU4FZAgr0hzcFQYVat5jEAjay5qZeFlD5ChNpwvroMFIAPNuQCy0t5Co6Tkk8UyeJukW2egc5QroRxE2NSUirvrH+ExbhojRVUVVY4Il7ygWcbvl9fh+2yuIbWqypMRVYSLCqGMML4I78NMm5oURT5KlBWEYJRlCDP+I1jgB6SO8jwfIVFTPEVZklWc8J+hHlYPRhMMFSRFUZDpFI1GSQWZ3Id6WBtwQDBkACYQnmIvUCUVC72SIAAFM0ohxQxNp9NslAhaUToPFNiAADNNLcAEFNB7KCitWGiKj34MjJNU0EJbAQJZRSvM2PdAgfHeaaGsrASVhwOHEpitKeNZqEC6dk76daCq+nBgIIA5yhBH30OXylg6C9dR8Bz2EkHZFGcAwoIFymXdWFlLXY+SZDTKpihJsizBk+C1NrtnNVxlZ4sRAEEfR1lW5DfBAuWSEYBsJRRQTTG8c0SL2/CdMrv3AqRxMI6ck8qPYlHgSfCNLpe9gHCyyAtS9U7yKqaE8QT4mKhW+bUASHLYL8GzCBhe3YACs62VsBqKPPcP/xnx8zK4vLrBmDdt63RNC3+zEbu9jBDwVSx0LW0LGo3iQjKEw0PoMZM19LM2cLs454wgEikwXk5ubm/JL6BIC3CvhsPL6wl75WMUPsxvUc4XrxLo6iN8LzG7m9wSxm5iHfxGmo5n83XEj9P/BH+9RSz3y9dvFxd//8bFxbevX95j/AMP2q2mG4NKvAAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 40000,
            ap: 2123,
            dps: 1010.95,
            speed: 18,
            range: 130,
            rangeType: "範囲",
            kbLevel: 3,
            money: 900,
            freq: 63,
            foreswing: 24,
            backswing: 39,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 8492,
            actualDps: 4043.8,
            magnification: "400%",
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
          enemyId: "093",
          enemyName: "セラム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAATDxEnJiY1Mzo5ND08OTo4O0s7PD5LQEk+SWhPSEpNSWZUUGJTVF5dWVNPWHxsVFlZWnRlW1xeWXxbXm9sX2FqZF94ZWB/Zkt1cnV/cWdxc4qQdGeBe3eDfIqNfIKBgJiGhZKnimaSj4eWj3uRi6CYip6TjqiqjnWVlJShl7ienK6eoLqjo6S7ooqnp6ivqsWsrcfMs4m6scatvfTFvNXFxcbJx8PWyJzQzdTf2dPv6uf19fX9/f39X3q1AAAAQHRSTlMAY5AtDBo2SVsLd7so/6M9D+P/8nX+yl6J/uw9sP78XHzZ/pjMbYG34v79U/7P5Yb+mf7O/e7//7jY9////f7/PlJYdwAABANJREFUWIWlVouSqjoQ9NwFBUVREDEiUYKKwagYRVZ5+P9/dSbuo7z3nHXD3S5FqaJ7ZnqSCY3GE3jLwxfYb/rPiO/YXKrq9ndU1av3Ld+7wJNlWVbwuVWCBN9bVd5/brfXbwWW4rEiKwpK84JnZZFXRV6WPL+VuZD+VuAgcs2zIiM0y/OiAL1SKOZlVUgJiAyqLCtyysRVaMAHLrICwoPq7kF19wB+xF95D0QXvmgCqEl0QayD/SdES6rL563UOvijHqmoXwAcrQ51oz6g/3orf8JvbMpyr/+Arx+K5U/4DSPa/IjfMEzJB1XTmy2Xqw8sl7OZ55mGqsgGOl7vOL3j7e56uRwk182sKIvrKcYITUbjO6bTCY7jpCgPUh4YixPstlMSJ8niPaQbY7g9FVtVrobhdLGYiKCfAgmOMQ4WgSElAPCGrdYwaLvvvvWH7bbWaobrlqyRm/QYzi//Wna6Nk/ZWFagf8gyXl6ggr5hmk2g6fMgzdhQtoSGu8tggi77++0u5bvIVJZpxtnalRbQ3SDl2XGb8bPAbrzjnAVuna1ohtGUvfPPZz6ar8eGrANvUNUe++Cfz1tjJt3DT4URZx98fp7VpTcarUkS0zubg8ChXv4CmhUjh0ISjJ3Z+Vh/lmkOJY6D+ZnFnPwfgZbtEwcnhF1PBPOj3EZ6hGk7ThdZ6FQmFmKSO/ERbQeAES7KBCMa1TZRHQkBGCRlmSfY79UW0Jy7QA4Dqjj53YHsSP2A0nE6ttN1KD8l0IwOCWum0BzY2mhgE0qQyKS3q+viS2egDQeEMd+ykDNq78K6p4rSbKoRo5RYFrHbLbd+G2EcRZyRGFkEyU+SRxirlFOGQcAPvHorWfE2s9VqQRnnMfIR88mu3sGsuFuYaAkGAWT5DifIT6OZ15dOQ9+8lmVWJJxiq+s7MUI4ybJd9NyKl+Fy5hmGrutqeIF3ShjDGRjQdaCNKEl4ls6fl6GY4Ta9XF4BO0YJ55RSRBxQcHwfE0Z5uvpmrirGeJuKxQ/RKQcwy8JwTPsxIYT6PqHbw341B7gvX2mo5jw6goFvIFYXJJADVMiJiK6A6joam0+KUYz59o3OGeoCLNQlvs8EaBBNx27zaR1qeEzv7Ow4xRZsI3s0HUAKhFJQCIbfng6qOw/DcJulB69t2wNyClW9NXAccIEE6/U6kpoLrcPe0+GtoNW6FsuG0sZ4BFngqQmQ2lSKWHPia16vm0ZzEk8Ns2fH8bj2lvSuV8/o4QDyVoaB7U+f2f83QAZec4LvLxa6oXXswbjeGevGiavZvQ+SAhIjrc5wNIK12Ww/VK5qncG4RhlKb/Rf31StVycH1fgznKK8fLkVZPFzBZkgv/55wK+nIX8Da6+/1oLNKD0AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 36800,
            actualAp: 2400,
            actualDps: 1469.4,
            magnification: "400%",
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
          enemyId: "093",
          enemyName: "セラム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAATDxEnJiY1Mzo5ND08OTo4O0s7PD5LQEk+SWhPSEpNSWZUUGJTVF5dWVNPWHxsVFlZWnRlW1xeWXxbXm9sX2FqZF94ZWB/Zkt1cnV/cWdxc4qQdGeBe3eDfIqNfIKBgJiGhZKnimaSj4eWj3uRi6CYip6TjqiqjnWVlJShl7ienK6eoLqjo6S7ooqnp6ivqsWsrcfMs4m6scatvfTFvNXFxcbJx8PWyJzQzdTf2dPv6uf19fX9/f39X3q1AAAAQHRSTlMAY5AtDBo2SVsLd7so/6M9D+P/8nX+yl6J/uw9sP78XHzZ/pjMbYG34v79U/7P5Yb+mf7O/e7//7jY9////f7/PlJYdwAABANJREFUWIWlVouSqjoQ9NwFBUVREDEiUYKKwagYRVZ5+P9/dSbuo7z3nHXD3S5FqaJ7ZnqSCY3GE3jLwxfYb/rPiO/YXKrq9ndU1av3Ld+7wJNlWVbwuVWCBN9bVd5/brfXbwWW4rEiKwpK84JnZZFXRV6WPL+VuZD+VuAgcs2zIiM0y/OiAL1SKOZlVUgJiAyqLCtyysRVaMAHLrICwoPq7kF19wB+xF95D0QXvmgCqEl0QayD/SdES6rL563UOvijHqmoXwAcrQ51oz6g/3orf8JvbMpyr/+Arx+K5U/4DSPa/IjfMEzJB1XTmy2Xqw8sl7OZ55mGqsgGOl7vOL3j7e56uRwk182sKIvrKcYITUbjO6bTCY7jpCgPUh4YixPstlMSJ8niPaQbY7g9FVtVrobhdLGYiKCfAgmOMQ4WgSElAPCGrdYwaLvvvvWH7bbWaobrlqyRm/QYzi//Wna6Nk/ZWFagf8gyXl6ggr5hmk2g6fMgzdhQtoSGu8tggi77++0u5bvIVJZpxtnalRbQ3SDl2XGb8bPAbrzjnAVuna1ohtGUvfPPZz6ar8eGrANvUNUe++Cfz1tjJt3DT4URZx98fp7VpTcarUkS0zubg8ChXv4CmhUjh0ISjJ3Z+Vh/lmkOJY6D+ZnFnPwfgZbtEwcnhF1PBPOj3EZ6hGk7ThdZ6FQmFmKSO/ERbQeAES7KBCMa1TZRHQkBGCRlmSfY79UW0Jy7QA4Dqjj53YHsSP2A0nE6ttN1KD8l0IwOCWum0BzY2mhgE0qQyKS3q+viS2egDQeEMd+ykDNq78K6p4rSbKoRo5RYFrHbLbd+G2EcRZyRGFkEyU+SRxirlFOGQcAPvHorWfE2s9VqQRnnMfIR88mu3sGsuFuYaAkGAWT5DifIT6OZ15dOQ9+8lmVWJJxiq+s7MUI4ybJd9NyKl+Fy5hmGrutqeIF3ShjDGRjQdaCNKEl4ls6fl6GY4Ta9XF4BO0YJ55RSRBxQcHwfE0Z5uvpmrirGeJuKxQ/RKQcwy8JwTPsxIYT6PqHbw341B7gvX2mo5jw6goFvIFYXJJADVMiJiK6A6joam0+KUYz59o3OGeoCLNQlvs8EaBBNx27zaR1qeEzv7Ow4xRZsI3s0HUAKhFJQCIbfng6qOw/DcJulB69t2wNyClW9NXAccIEE6/U6kpoLrcPe0+GtoNW6FsuG0sZ4BFngqQmQ2lSKWHPia16vm0ZzEk8Ns2fH8bj2lvSuV8/o4QDyVoaB7U+f2f83QAZec4LvLxa6oXXswbjeGevGiavZvQ+SAhIjrc5wNIK12Ww/VK5qncG4RhlKb/Rf31StVycH1fgznKK8fLkVZPFzBZkgv/55wK+nIX8Da6+/1oLNKD0AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 36800,
            actualAp: 2400,
            actualDps: 1469.4,
            magnification: "400%",
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
          enemyId: "093",
          enemyName: "セラム",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAATDxEnJiY1Mzo5ND08OTo4O0s7PD5LQEk+SWhPSEpNSWZUUGJTVF5dWVNPWHxsVFlZWnRlW1xeWXxbXm9sX2FqZF94ZWB/Zkt1cnV/cWdxc4qQdGeBe3eDfIqNfIKBgJiGhZKnimaSj4eWj3uRi6CYip6TjqiqjnWVlJShl7ienK6eoLqjo6S7ooqnp6ivqsWsrcfMs4m6scatvfTFvNXFxcbJx8PWyJzQzdTf2dPv6uf19fX9/f39X3q1AAAAQHRSTlMAY5AtDBo2SVsLd7so/6M9D+P/8nX+yl6J/uw9sP78XHzZ/pjMbYG34v79U/7P5Yb+mf7O/e7//7jY9////f7/PlJYdwAABANJREFUWIWlVouSqjoQ9NwFBUVREDEiUYKKwagYRVZ5+P9/dSbuo7z3nHXD3S5FqaJ7ZnqSCY3GE3jLwxfYb/rPiO/YXKrq9ndU1av3Ld+7wJNlWVbwuVWCBN9bVd5/brfXbwWW4rEiKwpK84JnZZFXRV6WPL+VuZD+VuAgcs2zIiM0y/OiAL1SKOZlVUgJiAyqLCtyysRVaMAHLrICwoPq7kF19wB+xF95D0QXvmgCqEl0QayD/SdES6rL563UOvijHqmoXwAcrQ51oz6g/3orf8JvbMpyr/+Arx+K5U/4DSPa/IjfMEzJB1XTmy2Xqw8sl7OZ55mGqsgGOl7vOL3j7e56uRwk182sKIvrKcYITUbjO6bTCY7jpCgPUh4YixPstlMSJ8niPaQbY7g9FVtVrobhdLGYiKCfAgmOMQ4WgSElAPCGrdYwaLvvvvWH7bbWaobrlqyRm/QYzi//Wna6Nk/ZWFagf8gyXl6ggr5hmk2g6fMgzdhQtoSGu8tggi77++0u5bvIVJZpxtnalRbQ3SDl2XGb8bPAbrzjnAVuna1ohtGUvfPPZz6ar8eGrANvUNUe++Cfz1tjJt3DT4URZx98fp7VpTcarUkS0zubg8ChXv4CmhUjh0ISjJ3Z+Vh/lmkOJY6D+ZnFnPwfgZbtEwcnhF1PBPOj3EZ6hGk7ThdZ6FQmFmKSO/ERbQeAES7KBCMa1TZRHQkBGCRlmSfY79UW0Jy7QA4Dqjj53YHsSP2A0nE6ttN1KD8l0IwOCWum0BzY2mhgE0qQyKS3q+viS2egDQeEMd+ykDNq78K6p4rSbKoRo5RYFrHbLbd+G2EcRZyRGFkEyU+SRxirlFOGQcAPvHorWfE2s9VqQRnnMfIR88mu3sGsuFuYaAkGAWT5DifIT6OZ15dOQ9+8lmVWJJxiq+s7MUI4ybJd9NyKl+Fy5hmGrutqeIF3ShjDGRjQdaCNKEl4ls6fl6GY4Ta9XF4BO0YJ55RSRBxQcHwfE0Z5uvpmrirGeJuKxQ/RKQcwy8JwTPsxIYT6PqHbw341B7gvX2mo5jw6goFvIFYXJJADVMiJiK6A6joam0+KUYz59o3OGeoCLNQlvs8EaBBNx27zaR1qeEzv7Ow4xRZsI3s0HUAKhFJQCIbfng6qOw/DcJulB69t2wNyClW9NXAccIEE6/U6kpoLrcPe0+GtoNW6FsuG0sZ4BFngqQmQ2lSKWHPia16vm0ZzEk8Ns2fH8bj2lvSuV8/o4QDyVoaB7U+f2f83QAZec4LvLxa6oXXswbjeGevGiavZvQ+SAhIjrc5wNIK12Ww/VK5qncG4RhlKb/Rf31StVycH1fgznKK8fLkVZPFzBZkgv/55wK+nIX8Da6+/1oLNKD0AAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 9200,
            ap: 600,
            dps: 367.35,
            speed: 30,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 720,
            freq: 49,
            foreswing: 17,
            backswing: 32,
            tba: 0
          },
          stageStats: {
            actualHp: 36800,
            actualAp: 2400,
            actualDps: 1469.4,
            magnification: "400%",
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
          enemyId: "346",
          enemyName: "にゃんことメルク",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIFBgcGBwgICAkICQkSGCAqKCoDAuIrOkw9OD1LSmhKVFpSUmZoSX1OWHJZU3tHZ31hY2tbaYBVcJNgcYtncoZzc3Jce6RleqVcgbtwfqJqhLV1h5N8hpiIf5lrjMd0jsN9lqx6ksh2mbl+l7eGmrd1mtiQlrV9m8+qop2JptyynrWuqaaesdyysb6zs7PJrpy6tr2wvenExMTKxMfJyMfKysvT0NHe2d3k5OTm4+jy8vL9/f3///+G6Z6YAAAAQHRSTlMAHHvo1EWz+w0B/Sf+CSzbVb/+nBJEcfwgyIT94KYTVv//wD7sao+u///Wzv7/bv/qk////6H/vuH//9///v8A9fMWBwAAAydJREFUWIXtlOFyojAUhW1rW1rEVkSwopWISmKDUaJgYsK+/1vtBbXtzm7HOPvXMyOjwvly7r0JjV//qcYVcAVcAVfAFXAFfAf8IC9eG2gZOydD2/nTv9WlifbLo8FKEtuyrU/AUpdSKC1EdVWlyJXKldYqF1pIlXOZ51qqUpb7+nFnvN3JXfIx/gRsS7CVYOFc8OpxkXMhVA7XHKBSca65LKXW9fLLfRVHy6J/AqzLanV4FqxgEOCG71oKDj+0EjqXkotSlRWg3c2VqCvS61MR8f6vcv/dlALW7wrFI17f358iOHGxr1X/+7O2lWGudRqlql5l9tkFp19pDdwi7v+oenZbCaWpQ8y55Xne10S9otTbz8b8IKtQB3cuSz0cjfzea+/91Aqt1945/4AfmwQAhdA0ie1ZcnA52/3ynL9hJ6tjQ2ESAlFGpyN/dojQL5bOGXsVwf8aEMMYCAu/fbjVGxv4IUNx8ktEKWMpS/yD0cheLbSCLmqlJcGECZmldNSr7Kb+Rvtjt9vBpk8x5bBz05RMYxjhfPZ+3lvLatt2b75inKeyEiejd8fz/IUp4EDxQ8RknsIJ4tNXrz2YJ3Pv6RLCOESYwbHLUhINJ8kCh5OBf3YXfFNvimGIcO6jiMA0MIL9MLgA4CQZBQLjeUrkCoHeep6x/8lz/CwjGIUUUXh9KQaA6fi88aQ47n9kGaUI+kCZlEpuGKWJbep/nyTzLEsRlACNhEHCK3SzoZuudd5bazwar7IsiqoIeAPe+sPoi2mEWbzMMwIAHAKAMYYRohuGgldDQDwvcghQlYAJHEfghJRGUTi6MQM441VKCAkXCcX0CEAkwmhoWkOcR24QdCcLGkABsIkiyAOBkG8K+AharU5nOBx2wQvdqP2U4YnhHDzvtfPy8tL1/W4Q1G7wE0LxtGcYAfpg222rYdmdEOMgBACJAujpwBhwkh8ehFAQVAfCcA5fuh+6YdByIUdVR/BmvJ2PurnvwDxcN6QMOhG63UsT3Nw/PLfcVsvFxAV1bu8vBdw+3D0+g9wALs3bywHgr9Vynx8f75rN24sBzebdl84DfgMT0Dyzo0todwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 99000,
            ap: 15000,
            dps: 2830.19,
            speed: 34,
            range: 155,
            rangeType: "範囲",
            kbLevel: 2,
            money: 190,
            freq: 159,
            foreswing: 1,
            backswing: 158,
            tba: 0
          },
          stageStats: {
            actualHp: 495000,
            actualAp: 75000,
            actualDps: 14150.95,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "メルク進化への道 超激ムズ",
      baseHp: 800000,
      width: 5000,
      enemyLimit: 15,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10122",
          treasureName: "にゃんことメルクCCへの進化権(メルクの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "346",
          enemyName: "にゃんことメルク",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIFBgcGBwgICAkICQkSGCAqKCoDAuIrOkw9OD1LSmhKVFpSUmZoSX1OWHJZU3tHZ31hY2tbaYBVcJNgcYtncoZzc3Jce6RleqVcgbtwfqJqhLV1h5N8hpiIf5lrjMd0jsN9lqx6ksh2mbl+l7eGmrd1mtiQlrV9m8+qop2JptyynrWuqaaesdyysb6zs7PJrpy6tr2wvenExMTKxMfJyMfKysvT0NHe2d3k5OTm4+jy8vL9/f3///+G6Z6YAAAAQHRSTlMAHHvo1EWz+w0B/Sf+CSzbVb/+nBJEcfwgyIT94KYTVv//wD7sao+u///Wzv7/bv/qk////6H/vuH//9///v8A9fMWBwAAAydJREFUWIXtlOFyojAUhW1rW1rEVkSwopWISmKDUaJgYsK+/1vtBbXtzm7HOPvXMyOjwvly7r0JjV//qcYVcAVcAVfAFXAFfAf8IC9eG2gZOydD2/nTv9WlifbLo8FKEtuyrU/AUpdSKC1EdVWlyJXKldYqF1pIlXOZ51qqUpb7+nFnvN3JXfIx/gRsS7CVYOFc8OpxkXMhVA7XHKBSca65LKXW9fLLfRVHy6J/AqzLanV4FqxgEOCG71oKDj+0EjqXkotSlRWg3c2VqCvS61MR8f6vcv/dlALW7wrFI17f358iOHGxr1X/+7O2lWGudRqlql5l9tkFp19pDdwi7v+oenZbCaWpQ8y55Xne10S9otTbz8b8IKtQB3cuSz0cjfzea+/91Aqt1945/4AfmwQAhdA0ie1ZcnA52/3ynL9hJ6tjQ2ESAlFGpyN/dojQL5bOGXsVwf8aEMMYCAu/fbjVGxv4IUNx8ktEKWMpS/yD0cheLbSCLmqlJcGECZmldNSr7Kb+Rvtjt9vBpk8x5bBz05RMYxjhfPZ+3lvLatt2b75inKeyEiejd8fz/IUp4EDxQ8RknsIJ4tNXrz2YJ3Pv6RLCOESYwbHLUhINJ8kCh5OBf3YXfFNvimGIcO6jiMA0MIL9MLgA4CQZBQLjeUrkCoHeep6x/8lz/CwjGIUUUXh9KQaA6fi88aQ47n9kGaUI+kCZlEpuGKWJbep/nyTzLEsRlACNhEHCK3SzoZuudd5bazwar7IsiqoIeAPe+sPoi2mEWbzMMwIAHAKAMYYRohuGgldDQDwvcghQlYAJHEfghJRGUTi6MQM441VKCAkXCcX0CEAkwmhoWkOcR24QdCcLGkABsIkiyAOBkG8K+AharU5nOBx2wQvdqP2U4YnhHDzvtfPy8tL1/W4Q1G7wE0LxtGcYAfpg222rYdmdEOMgBACJAujpwBhwkh8ehFAQVAfCcA5fuh+6YdByIUdVR/BmvJ2PurnvwDxcN6QMOhG63UsT3Nw/PLfcVsvFxAV1bu8vBdw+3D0+g9wALs3bywHgr9Vynx8f75rN24sBzebdl84DfgMT0Dyzo0todwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 99000,
            ap: 15000,
            dps: 2830.19,
            speed: 34,
            range: 155,
            rangeType: "範囲",
            kbLevel: 2,
            money: 190,
            freq: 159,
            foreswing: 1,
            backswing: 158,
            tba: 0
          },
          stageStats: {
            actualHp: 99000,
            actualAp: 15000,
            actualDps: 2830.19,
            magnification: "100%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "346",
          enemyName: "にゃんことメルク",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIFBgcGBwgICAkICQkSGCAqKCoDAuIrOkw9OD1LSmhKVFpSUmZoSX1OWHJZU3tHZ31hY2tbaYBVcJNgcYtncoZzc3Jce6RleqVcgbtwfqJqhLV1h5N8hpiIf5lrjMd0jsN9lqx6ksh2mbl+l7eGmrd1mtiQlrV9m8+qop2JptyynrWuqaaesdyysb6zs7PJrpy6tr2wvenExMTKxMfJyMfKysvT0NHe2d3k5OTm4+jy8vL9/f3///+G6Z6YAAAAQHRSTlMAHHvo1EWz+w0B/Sf+CSzbVb/+nBJEcfwgyIT94KYTVv//wD7sao+u///Wzv7/bv/qk////6H/vuH//9///v8A9fMWBwAAAydJREFUWIXtlOFyojAUhW1rW1rEVkSwopWISmKDUaJgYsK+/1vtBbXtzm7HOPvXMyOjwvly7r0JjV//qcYVcAVcAVfAFXAFfAf8IC9eG2gZOydD2/nTv9WlifbLo8FKEtuyrU/AUpdSKC1EdVWlyJXKldYqF1pIlXOZ51qqUpb7+nFnvN3JXfIx/gRsS7CVYOFc8OpxkXMhVA7XHKBSca65LKXW9fLLfRVHy6J/AqzLanV4FqxgEOCG71oKDj+0EjqXkotSlRWg3c2VqCvS61MR8f6vcv/dlALW7wrFI17f358iOHGxr1X/+7O2lWGudRqlql5l9tkFp19pDdwi7v+oenZbCaWpQ8y55Xne10S9otTbz8b8IKtQB3cuSz0cjfzea+/91Aqt1945/4AfmwQAhdA0ie1ZcnA52/3ynL9hJ6tjQ2ESAlFGpyN/dojQL5bOGXsVwf8aEMMYCAu/fbjVGxv4IUNx8ktEKWMpS/yD0cheLbSCLmqlJcGECZmldNSr7Kb+Rvtjt9vBpk8x5bBz05RMYxjhfPZ+3lvLatt2b75inKeyEiejd8fz/IUp4EDxQ8RknsIJ4tNXrz2YJ3Pv6RLCOESYwbHLUhINJ8kCh5OBf3YXfFNvimGIcO6jiMA0MIL9MLgA4CQZBQLjeUrkCoHeep6x/8lz/CwjGIUUUXh9KQaA6fi88aQ47n9kGaUI+kCZlEpuGKWJbep/nyTzLEsRlACNhEHCK3SzoZuudd5bazwar7IsiqoIeAPe+sPoi2mEWbzMMwIAHAKAMYYRohuGgldDQDwvcghQlYAJHEfghJRGUTi6MQM441VKCAkXCcX0CEAkwmhoWkOcR24QdCcLGkABsIkiyAOBkG8K+AharU5nOBx2wQvdqP2U4YnhHDzvtfPy8tL1/W4Q1G7wE0LxtGcYAfpg222rYdmdEOMgBACJAujpwBhwkh8ehFAQVAfCcA5fuh+6YdByIUdVR/BmvJ2PurnvwDxcN6QMOhG63UsT3Nw/PLfcVsvFxAV1bu8vBdw+3D0+g9wALs3bywHgr9Vynx8f75rN24sBzebdl84DfgMT0Dyzo0todwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 99000,
            ap: 15000,
            dps: 2830.19,
            speed: 34,
            range: 155,
            rangeType: "範囲",
            kbLevel: 2,
            money: 190,
            freq: 159,
            foreswing: 1,
            backswing: 158,
            tba: 0
          },
          stageStats: {
            actualHp: 99000,
            actualAp: 15000,
            actualDps: 2830.19,
            magnification: "100%",
            count: "10",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "1.3-1.3s",
            delayFrames: "40-40f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "346",
          enemyName: "にゃんことメルク",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIFBgcGBwgICAkICQkSGCAqKCoDAuIrOkw9OD1LSmhKVFpSUmZoSX1OWHJZU3tHZ31hY2tbaYBVcJNgcYtncoZzc3Jce6RleqVcgbtwfqJqhLV1h5N8hpiIf5lrjMd0jsN9lqx6ksh2mbl+l7eGmrd1mtiQlrV9m8+qop2JptyynrWuqaaesdyysb6zs7PJrpy6tr2wvenExMTKxMfJyMfKysvT0NHe2d3k5OTm4+jy8vL9/f3///+G6Z6YAAAAQHRSTlMAHHvo1EWz+w0B/Sf+CSzbVb/+nBJEcfwgyIT94KYTVv//wD7sao+u///Wzv7/bv/qk////6H/vuH//9///v8A9fMWBwAAAydJREFUWIXtlOFyojAUhW1rW1rEVkSwopWISmKDUaJgYsK+/1vtBbXtzm7HOPvXMyOjwvly7r0JjV//qcYVcAVcAVfAFXAFfAf8IC9eG2gZOydD2/nTv9WlifbLo8FKEtuyrU/AUpdSKC1EdVWlyJXKldYqF1pIlXOZ51qqUpb7+nFnvN3JXfIx/gRsS7CVYOFc8OpxkXMhVA7XHKBSca65LKXW9fLLfRVHy6J/AqzLanV4FqxgEOCG71oKDj+0EjqXkotSlRWg3c2VqCvS61MR8f6vcv/dlALW7wrFI17f358iOHGxr1X/+7O2lWGudRqlql5l9tkFp19pDdwi7v+oenZbCaWpQ8y55Xne10S9otTbz8b8IKtQB3cuSz0cjfzea+/91Aqt1945/4AfmwQAhdA0ie1ZcnA52/3ynL9hJ6tjQ2ESAlFGpyN/dojQL5bOGXsVwf8aEMMYCAu/fbjVGxv4IUNx8ktEKWMpS/yD0cheLbSCLmqlJcGECZmldNSr7Kb+Rvtjt9vBpk8x5bBz05RMYxjhfPZ+3lvLatt2b75inKeyEiejd8fz/IUp4EDxQ8RknsIJ4tNXrz2YJ3Pv6RLCOESYwbHLUhINJ8kCh5OBf3YXfFNvimGIcO6jiMA0MIL9MLgA4CQZBQLjeUrkCoHeep6x/8lz/CwjGIUUUXh9KQaA6fi88aQ47n9kGaUI+kCZlEpuGKWJbep/nyTzLEsRlACNhEHCK3SzoZuudd5bazwar7IsiqoIeAPe+sPoi2mEWbzMMwIAHAKAMYYRohuGgldDQDwvcghQlYAJHEfghJRGUTi6MQM441VKCAkXCcX0CEAkwmhoWkOcR24QdCcLGkABsIkiyAOBkG8K+AharU5nOBx2wQvdqP2U4YnhHDzvtfPy8tL1/W4Q1G7wE0LxtGcYAfpg222rYdmdEOMgBACJAujpwBhwkh8ehFAQVAfCcA5fuh+6YdByIUdVR/BmvJ2PurnvwDxcN6QMOhG63UsT3Nw/PLfcVsvFxAV1bu8vBdw+3D0+g9wALs3bywHgr9Vynx8f75rN24sBzebdl84DfgMT0Dyzo0todwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 99000,
            ap: 15000,
            dps: 2830.19,
            speed: 34,
            range: 155,
            rangeType: "範囲",
            kbLevel: 2,
            money: 190,
            freq: 159,
            foreswing: 1,
            backswing: 158,
            tba: 0
          },
          stageStats: {
            actualHp: 99000,
            actualAp: 15000,
            actualDps: 2830.19,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-10.0s",
            delayFrames: "120-300f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "346",
          enemyName: "にゃんことメルク",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIFBgcGBwgICAkICQkSGCAqKCoDAuIrOkw9OD1LSmhKVFpSUmZoSX1OWHJZU3tHZ31hY2tbaYBVcJNgcYtncoZzc3Jce6RleqVcgbtwfqJqhLV1h5N8hpiIf5lrjMd0jsN9lqx6ksh2mbl+l7eGmrd1mtiQlrV9m8+qop2JptyynrWuqaaesdyysb6zs7PJrpy6tr2wvenExMTKxMfJyMfKysvT0NHe2d3k5OTm4+jy8vL9/f3///+G6Z6YAAAAQHRSTlMAHHvo1EWz+w0B/Sf+CSzbVb/+nBJEcfwgyIT94KYTVv//wD7sao+u///Wzv7/bv/qk////6H/vuH//9///v8A9fMWBwAAAydJREFUWIXtlOFyojAUhW1rW1rEVkSwopWISmKDUaJgYsK+/1vtBbXtzm7HOPvXMyOjwvly7r0JjV//qcYVcAVcAVfAFXAFfAf8IC9eG2gZOydD2/nTv9WlifbLo8FKEtuyrU/AUpdSKC1EdVWlyJXKldYqF1pIlXOZ51qqUpb7+nFnvN3JXfIx/gRsS7CVYOFc8OpxkXMhVA7XHKBSca65LKXW9fLLfRVHy6J/AqzLanV4FqxgEOCG71oKDj+0EjqXkotSlRWg3c2VqCvS61MR8f6vcv/dlALW7wrFI17f358iOHGxr1X/+7O2lWGudRqlql5l9tkFp19pDdwi7v+oenZbCaWpQ8y55Xne10S9otTbz8b8IKtQB3cuSz0cjfzea+/91Aqt1945/4AfmwQAhdA0ie1ZcnA52/3ynL9hJ6tjQ2ESAlFGpyN/dojQL5bOGXsVwf8aEMMYCAu/fbjVGxv4IUNx8ktEKWMpS/yD0cheLbSCLmqlJcGECZmldNSr7Kb+Rvtjt9vBpk8x5bBz05RMYxjhfPZ+3lvLatt2b75inKeyEiejd8fz/IUp4EDxQ8RknsIJ4tNXrz2YJ3Pv6RLCOESYwbHLUhINJ8kCh5OBf3YXfFNvimGIcO6jiMA0MIL9MLgA4CQZBQLjeUrkCoHeep6x/8lz/CwjGIUUUXh9KQaA6fi88aQ47n9kGaUI+kCZlEpuGKWJbep/nyTzLEsRlACNhEHCK3SzoZuudd5bazwar7IsiqoIeAPe+sPoi2mEWbzMMwIAHAKAMYYRohuGgldDQDwvcghQlYAJHEfghJRGUTi6MQM441VKCAkXCcX0CEAkwmhoWkOcR24QdCcLGkABsIkiyAOBkG8K+AharU5nOBx2wQvdqP2U4YnhHDzvtfPy8tL1/W4Q1G7wE0LxtGcYAfpg222rYdmdEOMgBACJAujpwBhwkh8ehFAQVAfCcA5fuh+6YdByIUdVR/BmvJ2PurnvwDxcN6QMOhG63UsT3Nw/PLfcVsvFxAV1bu8vBdw+3D0+g9wALs3bywHgr9Vynx8f75rN24sBzebdl84DfgMT0Dyzo0todwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 99000,
            ap: 15000,
            dps: 2830.19,
            speed: 34,
            range: 155,
            rangeType: "範囲",
            kbLevel: 2,
            money: 190,
            freq: 159,
            foreswing: 1,
            backswing: 158,
            tba: 0
          },
          stageStats: {
            actualHp: 99000,
            actualAp: 15000,
            actualDps: 2830.19,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-5.0s",
            delayFrames: "60-150f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "346",
          enemyName: "にゃんことメルク",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIFBgcGBwgICAkICQkSGCAqKCoDAuIrOkw9OD1LSmhKVFpSUmZoSX1OWHJZU3tHZ31hY2tbaYBVcJNgcYtncoZzc3Jce6RleqVcgbtwfqJqhLV1h5N8hpiIf5lrjMd0jsN9lqx6ksh2mbl+l7eGmrd1mtiQlrV9m8+qop2JptyynrWuqaaesdyysb6zs7PJrpy6tr2wvenExMTKxMfJyMfKysvT0NHe2d3k5OTm4+jy8vL9/f3///+G6Z6YAAAAQHRSTlMAHHvo1EWz+w0B/Sf+CSzbVb/+nBJEcfwgyIT94KYTVv//wD7sao+u///Wzv7/bv/qk////6H/vuH//9///v8A9fMWBwAAAydJREFUWIXtlOFyojAUhW1rW1rEVkSwopWISmKDUaJgYsK+/1vtBbXtzm7HOPvXMyOjwvly7r0JjV//qcYVcAVcAVfAFXAFfAf8IC9eG2gZOydD2/nTv9WlifbLo8FKEtuyrU/AUpdSKC1EdVWlyJXKldYqF1pIlXOZ51qqUpb7+nFnvN3JXfIx/gRsS7CVYOFc8OpxkXMhVA7XHKBSca65LKXW9fLLfRVHy6J/AqzLanV4FqxgEOCG71oKDj+0EjqXkotSlRWg3c2VqCvS61MR8f6vcv/dlALW7wrFI17f358iOHGxr1X/+7O2lWGudRqlql5l9tkFp19pDdwi7v+oenZbCaWpQ8y55Xne10S9otTbz8b8IKtQB3cuSz0cjfzea+/91Aqt1945/4AfmwQAhdA0ie1ZcnA52/3ynL9hJ6tjQ2ESAlFGpyN/dojQL5bOGXsVwf8aEMMYCAu/fbjVGxv4IUNx8ktEKWMpS/yD0cheLbSCLmqlJcGECZmldNSr7Kb+Rvtjt9vBpk8x5bBz05RMYxjhfPZ+3lvLatt2b75inKeyEiejd8fz/IUp4EDxQ8RknsIJ4tNXrz2YJ3Pv6RLCOESYwbHLUhINJ8kCh5OBf3YXfFNvimGIcO6jiMA0MIL9MLgA4CQZBQLjeUrkCoHeep6x/8lz/CwjGIUUUXh9KQaA6fi88aQ47n9kGaUI+kCZlEpuGKWJbep/nyTzLEsRlACNhEHCK3SzoZuudd5bazwar7IsiqoIeAPe+sPoi2mEWbzMMwIAHAKAMYYRohuGgldDQDwvcghQlYAJHEfghJRGUTi6MQM441VKCAkXCcX0CEAkwmhoWkOcR24QdCcLGkABsIkiyAOBkG8K+AharU5nOBx2wQvdqP2U4YnhHDzvtfPy8tL1/W4Q1G7wE0LxtGcYAfpg222rYdmdEOMgBACJAujpwBhwkh8ehFAQVAfCcA5fuh+6YdByIUdVR/BmvJ2PurnvwDxcN6QMOhG63UsT3Nw/PLfcVsvFxAV1bu8vBdw+3D0+g9wALs3bywHgr9Vynx8f75rN24sBzebdl84DfgMT0Dyzo0todwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 99000,
            ap: 15000,
            dps: 2830.19,
            speed: 34,
            range: 155,
            rangeType: "範囲",
            kbLevel: 2,
            money: 190,
            freq: 159,
            foreswing: 1,
            backswing: 158,
            tba: 0
          },
          stageStats: {
            actualHp: 99000,
            actualAp: 15000,
            actualDps: 2830.19,
            magnification: "100%",
            count: "30",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "346",
          enemyName: "にゃんことメルク",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIFBgcGBwgICAkICQkSGCAqKCoDAuIrOkw9OD1LSmhKVFpSUmZoSX1OWHJZU3tHZ31hY2tbaYBVcJNgcYtncoZzc3Jce6RleqVcgbtwfqJqhLV1h5N8hpiIf5lrjMd0jsN9lqx6ksh2mbl+l7eGmrd1mtiQlrV9m8+qop2JptyynrWuqaaesdyysb6zs7PJrpy6tr2wvenExMTKxMfJyMfKysvT0NHe2d3k5OTm4+jy8vL9/f3///+G6Z6YAAAAQHRSTlMAHHvo1EWz+w0B/Sf+CSzbVb/+nBJEcfwgyIT94KYTVv//wD7sao+u///Wzv7/bv/qk////6H/vuH//9///v8A9fMWBwAAAydJREFUWIXtlOFyojAUhW1rW1rEVkSwopWISmKDUaJgYsK+/1vtBbXtzm7HOPvXMyOjwvly7r0JjV//qcYVcAVcAVfAFXAFfAf8IC9eG2gZOydD2/nTv9WlifbLo8FKEtuyrU/AUpdSKC1EdVWlyJXKldYqF1pIlXOZ51qqUpb7+nFnvN3JXfIx/gRsS7CVYOFc8OpxkXMhVA7XHKBSca65LKXW9fLLfRVHy6J/AqzLanV4FqxgEOCG71oKDj+0EjqXkotSlRWg3c2VqCvS61MR8f6vcv/dlALW7wrFI17f358iOHGxr1X/+7O2lWGudRqlql5l9tkFp19pDdwi7v+oenZbCaWpQ8y55Xne10S9otTbz8b8IKtQB3cuSz0cjfzea+/91Aqt1945/4AfmwQAhdA0ie1ZcnA52/3ynL9hJ6tjQ2ESAlFGpyN/dojQL5bOGXsVwf8aEMMYCAu/fbjVGxv4IUNx8ktEKWMpS/yD0cheLbSCLmqlJcGECZmldNSr7Kb+Rvtjt9vBpk8x5bBz05RMYxjhfPZ+3lvLatt2b75inKeyEiejd8fz/IUp4EDxQ8RknsIJ4tNXrz2YJ3Pv6RLCOESYwbHLUhINJ8kCh5OBf3YXfFNvimGIcO6jiMA0MIL9MLgA4CQZBQLjeUrkCoHeep6x/8lz/CwjGIUUUXh9KQaA6fi88aQ47n9kGaUI+kCZlEpuGKWJbep/nyTzLEsRlACNhEHCK3SzoZuudd5bazwar7IsiqoIeAPe+sPoi2mEWbzMMwIAHAKAMYYRohuGgldDQDwvcghQlYAJHEfghJRGUTi6MQM441VKCAkXCcX0CEAkwmhoWkOcR24QdCcLGkABsIkiyAOBkG8K+AharU5nOBx2wQvdqP2U4YnhHDzvtfPy8tL1/W4Q1G7wE0LxtGcYAfpg222rYdmdEOMgBACJAujpwBhwkh8ehFAQVAfCcA5fuh+6YdByIUdVR/BmvJ2PurnvwDxcN6QMOhG63UsT3Nw/PLfcVsvFxAV1bu8vBdw+3D0+g9wALs3bywHgr9Vynx8f75rN24sBzebdl84DfgMT0Dyzo0todwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 99000,
            ap: 15000,
            dps: 2830.19,
            speed: 34,
            range: 155,
            rangeType: "範囲",
            kbLevel: 2,
            money: 190,
            freq: 159,
            foreswing: 1,
            backswing: 158,
            tba: 0
          },
          stageStats: {
            actualHp: 99000,
            actualAp: 15000,
            actualDps: 2830.19,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "346",
          enemyName: "にゃんことメルク",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIFBgcGBwgICAkICQkSGCAqKCoDAuIrOkw9OD1LSmhKVFpSUmZoSX1OWHJZU3tHZ31hY2tbaYBVcJNgcYtncoZzc3Jce6RleqVcgbtwfqJqhLV1h5N8hpiIf5lrjMd0jsN9lqx6ksh2mbl+l7eGmrd1mtiQlrV9m8+qop2JptyynrWuqaaesdyysb6zs7PJrpy6tr2wvenExMTKxMfJyMfKysvT0NHe2d3k5OTm4+jy8vL9/f3///+G6Z6YAAAAQHRSTlMAHHvo1EWz+w0B/Sf+CSzbVb/+nBJEcfwgyIT94KYTVv//wD7sao+u///Wzv7/bv/qk////6H/vuH//9///v8A9fMWBwAAAydJREFUWIXtlOFyojAUhW1rW1rEVkSwopWISmKDUaJgYsK+/1vtBbXtzm7HOPvXMyOjwvly7r0JjV//qcYVcAVcAVfAFXAFfAf8IC9eG2gZOydD2/nTv9WlifbLo8FKEtuyrU/AUpdSKC1EdVWlyJXKldYqF1pIlXOZ51qqUpb7+nFnvN3JXfIx/gRsS7CVYOFc8OpxkXMhVA7XHKBSca65LKXW9fLLfRVHy6J/AqzLanV4FqxgEOCG71oKDj+0EjqXkotSlRWg3c2VqCvS61MR8f6vcv/dlALW7wrFI17f358iOHGxr1X/+7O2lWGudRqlql5l9tkFp19pDdwi7v+oenZbCaWpQ8y55Xne10S9otTbz8b8IKtQB3cuSz0cjfzea+/91Aqt1945/4AfmwQAhdA0ie1ZcnA52/3ynL9hJ6tjQ2ESAlFGpyN/dojQL5bOGXsVwf8aEMMYCAu/fbjVGxv4IUNx8ktEKWMpS/yD0cheLbSCLmqlJcGECZmldNSr7Kb+Rvtjt9vBpk8x5bBz05RMYxjhfPZ+3lvLatt2b75inKeyEiejd8fz/IUp4EDxQ8RknsIJ4tNXrz2YJ3Pv6RLCOESYwbHLUhINJ8kCh5OBf3YXfFNvimGIcO6jiMA0MIL9MLgA4CQZBQLjeUrkCoHeep6x/8lz/CwjGIUUUXh9KQaA6fi88aQ47n9kGaUI+kCZlEpuGKWJbep/nyTzLEsRlACNhEHCK3SzoZuudd5bazwar7IsiqoIeAPe+sPoi2mEWbzMMwIAHAKAMYYRohuGgldDQDwvcghQlYAJHEfghJRGUTi6MQM441VKCAkXCcX0CEAkwmhoWkOcR24QdCcLGkABsIkiyAOBkG8K+AharU5nOBx2wQvdqP2U4YnhHDzvtfPy8tL1/W4Q1G7wE0LxtGcYAfpg222rYdmdEOMgBACJAujpwBhwkh8ehFAQVAfCcA5fuh+6YdByIUdVR/BmvJ2PurnvwDxcN6QMOhG63UsT3Nw/PLfcVsvFxAV1bu8vBdw+3D0+g9wALs3bywHgr9Vynx8f75rN24sBzebdl84DfgMT0Dyzo0todwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 99000,
            ap: 15000,
            dps: 2830.19,
            speed: 34,
            range: 155,
            rangeType: "範囲",
            kbLevel: 2,
            money: 190,
            freq: 159,
            foreswing: 1,
            backswing: 158,
            tba: 0
          },
          stageStats: {
            actualHp: 9900,
            actualAp: 1500,
            actualDps: 283.02,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e2046Data;

