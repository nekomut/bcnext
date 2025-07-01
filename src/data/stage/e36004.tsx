// Stage 36004 Data
import type { StageData } from '../../app/stage/types';

export const e36004Data: StageData = {
  eventId: 36004,
  eventName: "異次元コロシアム",
  typeId: 36,
  typeName: "異次元コロシアム",
  prefix: "SR",
  mapId: 4,
  specialRule: {
    name: "特売セール　激レア",
    explanation: "【特売セール　激レア】  レア度：激レアの味方キャラクターの生産コストが 半分になり生産スピードが倍になります",
    ruleTypes: {
      "5": {
        "Parameters": [100, 100, 100, 50, 100, 100]
      },
      "6": {
        "Parameters": [100, 100, 100, 50, 100, 100]
      }
    },
    contentsType: 0
  },
  stages: [
    {
      stageId: 0,
      stageName: "Round 1",
      baseHp: 1200000,
      width: 4800,
      enemyLimit: 20,
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
            count: "1",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 18750,
            actualDps: 23437.5,
            magnification: "2500%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "210",
          enemyName: "ヨキカナ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIEBAQEBAQEBAQFBQUFBQUICAgJCQoJCQkKCgsPDw8dICAfIiIkJCQnJyckLicrKywxMTE3Pj09PT0/Pz89RkVFRUVERkVETUxRUlJSUlNPWVhgYWFTdXJqbW1rfn1mgn95fHxdjIdxi4ltl5ONjo+VlZWWlpZyqKOam5t0sKqhoaJ4ta+pqamurq6Bxr6ytba8vLyL182/v7/FxcXNzc3Y2Njg4ODn5+fv7+/4+Pj////////nMmKVAAAAQHRSTlMAov6SZHrPDPQ54rQYKO78PWUMUnT4YC+sgZZzUNr7rf+LwuP++q3//6rZ//+88v7/5////v/x//z+/////wD/ZWyBkQAAAqxJREFUWIXtlGtzojAUhm21KgoVRW3VFRSDpJAVJFFyXf7/v9qAWtmddqad/bIfeJ3ROOY85z0XbP36R7UaQANoAA2gATSABtAAGkAD+D8BX1fPsuerxWI1d6zeN8JuMh0vOlKmRc+RN/0uo2d7Z6mKmySNlvbXEfZisYx48YcUjxbml5xbxnSnfct6tNRS6rz43INpO3PHtkxr6q8PgOakll8xopUiSA7OJ+HWwj+e6fkYRdFBSIE5Su/lFxQwRjBOwzj1PyzCHPv0YlgpglXBGM9FDcAggvEpDsMsO4w/CHe8g3ivNdfW6T36clAiTpIsyU5J7P3dBXPu16elPRSkZl9plhKSh3GYnE6nLNz9qEf3rDL8PZH+0PcluvdPSkYPhDEcJMEmcJMsDKKXGsAYguqyyiuCLBThIk3fvSsMd0tn7B1wmAAIN7oJu+Nby7ZvBpz1JZLjKh8RKqcM5uXgLl2Rmyddc28ahRlgAsRZ5r+dWz/81cuk3NVldG0ehRWHMCkohrIQ+k1VHXCn1iVTEmIG3DBYbWnr5Uij/Xa7P7KLT6Y4qk45zhUDtOApp1U8wwi/GuXojddYjzEOluYyak1eU70s5aiU3k+WYqVQXlUCU5mjyzf9kxSQKLHZ+SuzNLHd/9zrk6GX0V7jMoHklBAMIUoJgVzPTwGQI6EL4jRFWgDoajZxlnhW1bLJ5NZ924vOerlTFIYhYJxhCACiSoGZS4oCa6TeJSWRCyByB4PZrG0YlmXWdqhnjIfPeqxZllTlK85116T7OMr1LNV1LdIgDkaPlfqDQbc7bHeM3n0F+u5s9DgabbjIdRHaB0P69shFOBeCcSEVdjdheCVUlH63fX+YzKdO56n9MOyu14PB4LlU/6rRrHzNXFefn6vc3eHwof3UMaq/td/n8z8pCRhl9AAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 360000,
            ap: 12500,
            dps: 997.34,
            speed: 12,
            range: 500,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 376,
            foreswing: 27,
            backswing: 49,
            tba: 175
          },
          stageStats: {
            actualHp: 1080000,
            actualAp: 37500,
            actualDps: 2992.02,
            magnification: "300%",
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "178",
          enemyName: "エリザベス56世",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 60000,
            ap: 250,
            dps: 131.58,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 57,
            foreswing: 12,
            backswing: 10,
            tba: 23
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 3750,
            actualDps: 1973.7,
            magnification: "1500%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "175",
          enemyName: "クマンチュー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEFBwUCCQkHCQkICQsJCgoICwkJDgwLDg8LDgwNEhASGxgSHRYbGxsXIR8ZJSMaJiMYKCQfMC4kNjMpQDsrQT4uREEvS0YxS0k4VVI5WFQ6YFtBZmBGaWZFamZKcGpLd3FRfnhVgXtcf3p+g4Rmk45jlpGOj5Bqopxxr6igoaF4trB3wrexsbKEycKK08u9vb2Q3NPJycmV49uY6eDW1tac8eag9uuh/u7i4uLs7Oz8/Py55zTmAAAAQHRSTlMAB5eiY4MQqyAXKXA+SzVYwf+Ho2aWeInjrvykgb/Sr9+C/9L/8dz///7t//7///v+//7+////////////////6PS1ZAAABBNJREFUWIWVmGt3ojoUhstUrVLRXigqjNpBbsEgKRGJSWz//7+aRKBzjlAu+4usLvZD9pt9SXp394Mpk9G/56lhTJWf3qw3dbFezUd3ijIaKcpsh9D7vBdhvIoz7OqqYW23lv4Sc55uR+1u/2weMs7x0zpKEIrcJeQ86wfQxTd5YgKCkSDYCc9cvVcIU49wToAdSX8HMp5u1D7+d6M3sWqKoeP4jhNhH9Jw3g9gYc6ACUmapoRHz2aWLHqFMPMYY86zI6QUhm1AyXrSB5CLCDCjJMsyQhln3qyHv7JIBIDhGPqmadoAxCIOvQdgss44S0DwcTqYz8/7y2nvx71EEBIQGBw/v76+znYgfs7HAPQRYQ55tL8cLgJwsv3T5yU4nf337iJMVgnzj1+H/cfHPjgegyAQUfjuY9cYxm+m0Cy4fB4PBxnG5/l03PtJ9NSxIMcrYMecRf7heL5czqePQ+ADRHnivE+7+CsGSIFIZJYhCITBCGEiEyp1wEuXJYw3CEmANJGO/NsyG666lPTMQ8iPeMUYcWCnnZy6CNppDYA69munFSxtO676CwIAqy4rmC2jlNUDcKeC0mGddw6IjfZtkK1EGE0qqxCAtIOKoo7k2wjUAZjXnkpFBLC6kQLAo9YYlAXOX05qAel63AKYbMl1z/1qJkgAc7VuEhA/qwEIKGrrS3qeQ8QntQBGds0x5N1UAmjFnwK5qrA5htE2KwGVbaTXsFp662SdO2agCriGxVoGjLrL/dJqHvHMl32lZcAUm1ALSHNdYOOU1UJeAioEnEObRSh2sXYFCcgjaTyqGOh/y60D0F3DUaOohPpMjItG0ZQJipX+DIBFeHHDmFaswq+umMoCTRYNgCIROfPxrT8t/5RZPwNG66KGavpBVtQXo7smQJnB1Y6EnWJjWCcAArcAZJa6hl0AuJIIcIn7AIh9oyJzV50ApYjEvpkvdPdW6gobANuykzHnRkWyXXQAfGeiSISbAZtaeZ1QRJoAxVeEEADlv7KspS5oocfyOV557s+AohoZLTMpI0ycduVTrM9hLBqdN50/NQD0OIsojxySFwNzN563c+WOhtrc3bxCbI2Upr6sheESU9uM8waYrlRVnYlzr2yF8+XL2HpvuTaoG8uIsBn50BcHdH69ZVyFobvxbKjeqY8t83001NS171DsyFQm+SgVB1/xOFFkK2s9YCiKMl+KL8YyDeLf1/dlq047nfDyRRjyyicBWdH95LjCnQ/7E11e2CiIOAuLm54UARnd3JXpqys0J+FTyBOrFEwLWbdL22j2sokpy+KdoXnZ7nuGjdep1+XaqBibEOHY2y4G2uAdPA2+7cFePg4GmjZtORxov//8+a3PJupgOLx/vf+PPTzc//o1HD5W/wnwFytlbIPNt5I/AAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 30000,
            ap: 1000,
            dps: 447.76,
            speed: 8,
            range: 350,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1500,
            freq: 67,
            foreswing: 4,
            backswing: 5,
            tba: 32
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 16000,
            actualDps: 7164.16,
            magnification: "1600%",
            count: "2",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "66.7-70.0s",
            delayFrames: "2,000-2,100f",
            baseHpRatio: "100%",
            isBoss: false
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
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "70.0-73.3s",
            delayFrames: "2,100-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "043",
          enemyName: "ハイ・エナジー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgICAgICAgIDAwMDAwMDAwMDAwMEBAQFBQUFBQUFBQUFBQUFBQUGBgYGBgYHBwcHBwcICAgJCQkJCQkLCwsNDQ0YGBgaGhobGxsdHR0gICAhISEpKSkrKyssLCwtLS0wMDA4ODg6Ojo+Pj5AQEBCQkJMTExTU1NZWVlkZGRsbGxxcXF+fn6Ojo6fn5+pqam3t7fDw8POzs7X19fh4eHt7e3z8/P5+fn///////8iM/brAAAAQHRSTlMABg8XHSYwOfdCX9/tfklQlafWc4xpnv6zy71Z5vWk1f+Gmu/9uOD+9uz/xf7b/v//7P/+//7+/////////wD/Ye/M/wAABXJJREFUWIXtVm17qjgQJSBarYhviCgqKhaNIYm8g7D8/3+1E/G21r33Pu3ut33ufGhswjkzcyaZRPrrP5r0h+APwR+CPwT/I4KvWNtoy0hBX/r2J4Zamm2NtJGut/4FB2q19bmNCXbd8eusJ38b352PbY8yzjkjeGUtlW/B5e50sfIovxuj7lj/VhaD15UL3hnFGBMRBV3NW9/Aq1MXg3uCWZRE1MNAQexJ58sxIN3C4BSz5FrVdR5xQUHs4ddl6G4IIyS6VoCvQpLGxPWO8/aX8ag333ssq8o4zOsyCALCQ7LREfrIoTX4XV3l7ppFBQTvmmFVX2MeOFEeHvSBjuT2jQRNxoPfwLd+dK3BCurFdX0NksTEeRr6o6HS0RQVfHfHq8kv4Iq+82PQriqAo8jLuk6Da+qYEcRBxwNDm0zbqLMw6fanyavL3eUmfRV6vBRRwK+oylyTX1NK3Tf/zVrKA8s0g58QKIPp+RIXN1RJTSzSyOKcp3XJTScKWZjmRR6dp4DH0TMBUo1530sCHJSNX4dCJCV3I5rXdeKYDs+r20rGTdMMk4YAKZ1BR1Vkub09XzwnhFiD8hqnAE0BBzXkMS3q6spMM6rLLElLoarjZslNxJYxf+3b/mG49qO8zNKyCEH/FJzXdyvLnGUiFc+MigBzFkEYGcF5uAT3nXnfNF/2YYCjoqrfLSNNGo2GZRCLv8yMuMuLjOeQnkszH/YlFMM0XzVj9xZ+AASm+PRvwkHXkjmRhzPIKQEC6tGtLKlzwPcNWWodsjtShFHVT3YNgrQoKA0cJ4QI0rqKXdMeqlIHqvEyhG3V9u8pJ0GSl1Wj9Y2vyNIUwCGhcZwGnuMQFpVVTDzX6WuSPDLNcQekHFzuXkMe8CCMEgA1vi97HMAUc0hSVVkaURqDxoRgiN2SlLn5MhVnahk2BCVPyiKNw4BuLs1ZOE/59Zon4XFzSaq6CClUIaWEU8fsDyU0NF+70jtBBepnt8BzXz+kt3LsOn4hSnDR9XN2DSgNQ+ZBr+FkY7QkpL0sWh8EEPBb1owT2bhNpTtll4jQLm209FMOnYkEIcH4tOmJU63O57cmBRrA52W4Wwu/ZbRTQFehQrJFS6HP1Vcl2fBDTOFIRgkZ99SmK3S1W1vp+FD3Kj6o26QZoSfcPMN+V895QyCh5fkYpDSgofPRoJsW1b2IU3/uiP1QwSjmdDEXbyFP0ZN8gUDtaZCcd4fTfPDYnpGsbGF/Z/5U1wCU+c2qIjYXEEB41yaCW67JVm4NPl8QnekMtMt9Y2Sv2DXzlw07moBnQdA6xGVxJ+he4i1qa+onguXec+LMN9QFxV74Ay9JxjHJRNdpWV5A7aajq+dwiwzb+NRHtCNU9mTIbZsxz568Z7fsY+IOkSTPPELtmy4gLTXQZD/5JMEQc7qHDTl4Y2yvfTR73aaMzJCkWoTzt27z8fa0RN1R9zGC1oLy41QRIcP4cFlM9ozTmSzJQ4/z0+AHgS49PViAgKyFrIMTOTyq095QTtcy5OgyDrh3gieT12RzS7B3fPu02Ib7lcJORUub8lPvlwTtzXEqHkDy2rO0x/tOnrmMLRRxCbnsaNwV/wcBMvb7xRxq19m4q6M4Yu8EmkXYRkVIGUCWQ6UrLsWJ/XwjKnN3hclmomorx2XEXn88AWSoy77Xm3YU40TGs81C60hq7/mJ0LVdBzN3pS0wgbPqjB90lGdH99Xej0edheM5xFlpz/lLonjwfiLuamYRCu850zKMybvNVhh72LEnFmYecV1NRk+PHLU3Wnme6UBzfjFv9vJopkOw40L3enEcsWbNppPu47sCtY3paGFZ4/ErWL+xTxT3OVgdjy1rMZpOHgr1N1UAO+fKiBvSAAAAAElFTkSuQmCC",
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
            count: "1",
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "76.7-80.0s",
            delayFrames: "2,300-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 28500,
            actualAp: 22500,
            actualDps: 4927.01,
            magnification: "150%",
            count: "10",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "18.0-21.3s",
            delayFrames: "540-640f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgIDAwMEBAQFBQUFBQUFBQUFBgcGBgcGBgcGBwcHBwgJCwsPFhYXISAXIyIXIyIYJSUaKCcdLiwhMzAnPzwqREEuRkMtSkcyUk41WlZVVyQ+aGNCZ2JxbCBJfXdXjYFcmZCnkA5lp51ssafNrgptv7Vuyb99w7h8zsPkvwp118x628+J2cuC4tb60QmP4dSL6dyU7+KZ9Oad+eqh/u64owfNAAAAQHRSTlMAAwoSFyYeML7UPsdWS2R5gfKOtm2eqZeyytXA3v/vytn1/+r////v//39///9//////7//////v//////////6/EoKAAABNZJREFUWIWlVolim0oMLGCblGDjgu8rNhAwu4VwxEDZg///q2rBSdy8voRQ5TKONauRRlp9+/ahSSNdkz/+yMemmDtL/ReA4QN2jH8IQRr7Rbgd9geQDURzR5d6AyiriBE0V3oDqA8Fp+m6dxqliUM5rZxJXw6yGbCaUrTsy2FkYV5T1p+Duklrzijpy0HSj0XNOeN9OciGT8Gf8rgnB2Ue8LrmtO5bh5GFOFCgnAVmr37QNnEtIuB11KsfpMmh4MCBsrro1Q+yeQqjmAIAT0/m1+sgafd7L8xYzSCCYKN/NQuKvnWjChjURQpyDI/G6Ev+o+kON+41R24BvzNnOfxCHkbmIWKNe115jwj0BAjz7ggD8xQ3x9ecRI9PZxRFmUDoykI2nLQNP8Po/PPX0/n8iEQtOs5XSduE1/PDx5/Pv8Cezhk8RZtxJxKDRUBbgLrC5ycBcBaIIOn5oEsA+i6rr8YpPj8/Pz2fo+Yx3WgdABTTawPgQsjp48/z4/mMRQSc+tMOWRhuXzIgcGLbizLsYppWQhPWx4WQJEmWxy8MCg8CLzB0FCuqzBaw6W4sy/LfMykpQ1WfGVPTOlU3AOCdRVFKSShgq5O1XE4n2nDwDkWS1cl8e3R8YZhdKVTiBcWu59pBwRtS3j5AgX9cL6a6+pYO2AKWD36YFkKyTepeq1AzbOM4wbaXCmlz7BKIqUoj5GxnL/7yeOWHBbvxezOCXHwBiwI3EBChTRpcTgu0fE373K9a9/cYvAi88BLHlwTHkeeigke2SBBnpEwc/S2ChzAvCYHRw/9AYbEXRJcLxlkMNGLseVFoFzV455cMLd9UKU+OoYgzBxgqYmlxKuwi8AtRAOa5rmvbe8/OSA4fzdBKvamDMmsRGhQAaYKgnh0EjZvtuh5guHs7QHYkPpSgrfZHHQEBJZdXDCK4VO5+b3sojJMEvpMY2V7BYluclATv/IGFvvWj7AWhFCVjRWh7wh2cIwwUMBQgtaEokb967w9aUM2jHyYtxrWbeQoUPDDXdoN2wgJAgp2l+jc1K+P5xgnC5BpAg8CyEOMwSrNrnet47zrr2eD/ukEzrJ2DEnqrRWjikry+ke6/Lz/aXeWRZqzDP7TMSQmVodfneKcrn4w1eeazm/NpmeeEwA9v1BFtPl0VJM2p3gBAdCUVyhV/BMD683t6uE5ftSyOZ7QsKYMgRG7DDgCDBW47mrPyUhImpAswkAqgEd5/frnIU7dNGad5TiGIqzjJBYSE7z4f7JJ+KF4YXAiANNoSkcC8wVaHm0Fdhy8pBE2Rtj0oy0vQRKfNu93OmoYEDjRvu0MEAHO9y8UgTfxrITlkETZVIoZNCUWACDotfOruWkiRRkIbawKomT/u4P9WSJHGvGy+8ly0E3G6XI7fJNhxX6V0tYoIgOqh29KrHZvbrUgZvxojKYL3sm23JaXlADM8SIsKrEixd4B5zMNlxx1l4oj7Iz3cbw4nsMNuNTXWmDLf6LhnDbfiYvbnqqpPZrPZRBvBrb1FmfPfWfh3g6FAMl9shuLCb29iSVudVp1SAFuCpG6D00IbDAajxuCFoijjO0OG/312+HA8mRnm/Y8f95Z1d3ff2N2dZS0Wc2tuzCZj9eNEDnTDNOcLS/h9vzEBYy3mpjnVb3n8BrALOVaaqX1/AAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 18750,
            actualDps: 23437.5,
            magnification: "2500%",
            count: "6",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgIDAwMEBAQFBQUFBQUFBQUFBgcGBgcGBgcGBwcHBwgJCwsPFhYXISAXIyIXIyIYJSUaKCcdLiwhMzAnPzwqREEuRkMtSkcyUk41WlZVVyQ+aGNCZ2JxbCBJfXdXjYFcmZCnkA5lp51ssafNrgptv7Vuyb99w7h8zsPkvwp118x628+J2cuC4tb60QmP4dSL6dyU7+KZ9Oad+eqh/u64owfNAAAAQHRSTlMAAwoSFyYeML7UPsdWS2R5gfKOtm2eqZeyytXA3v/vytn1/+r////v//39///9//////7//////v//////////6/EoKAAABNZJREFUWIWlVolim0oMLGCblGDjgu8rNhAwu4VwxEDZg///q2rBSdy8voRQ5TKONauRRlp9+/ahSSNdkz/+yMemmDtL/ReA4QN2jH8IQRr7Rbgd9geQDURzR5d6AyiriBE0V3oDqA8Fp+m6dxqliUM5rZxJXw6yGbCaUrTsy2FkYV5T1p+Duklrzijpy0HSj0XNOeN9OciGT8Gf8rgnB2Ue8LrmtO5bh5GFOFCgnAVmr37QNnEtIuB11KsfpMmh4MCBsrro1Q+yeQqjmAIAT0/m1+sgafd7L8xYzSCCYKN/NQuKvnWjChjURQpyDI/G6Ev+o+kON+41R24BvzNnOfxCHkbmIWKNe115jwj0BAjz7ggD8xQ3x9ecRI9PZxRFmUDoykI2nLQNP8Po/PPX0/n8iEQtOs5XSduE1/PDx5/Pv8Cezhk8RZtxJxKDRUBbgLrC5ycBcBaIIOn5oEsA+i6rr8YpPj8/Pz2fo+Yx3WgdABTTawPgQsjp48/z4/mMRQSc+tMOWRhuXzIgcGLbizLsYppWQhPWx4WQJEmWxy8MCg8CLzB0FCuqzBaw6W4sy/LfMykpQ1WfGVPTOlU3AOCdRVFKSShgq5O1XE4n2nDwDkWS1cl8e3R8YZhdKVTiBcWu59pBwRtS3j5AgX9cL6a6+pYO2AKWD36YFkKyTepeq1AzbOM4wbaXCmlz7BKIqUoj5GxnL/7yeOWHBbvxezOCXHwBiwI3EBChTRpcTgu0fE373K9a9/cYvAi88BLHlwTHkeeigke2SBBnpEwc/S2ChzAvCYHRw/9AYbEXRJcLxlkMNGLseVFoFzV455cMLd9UKU+OoYgzBxgqYmlxKuwi8AtRAOa5rmvbe8/OSA4fzdBKvamDMmsRGhQAaYKgnh0EjZvtuh5guHs7QHYkPpSgrfZHHQEBJZdXDCK4VO5+b3sojJMEvpMY2V7BYluclATv/IGFvvWj7AWhFCVjRWh7wh2cIwwUMBQgtaEokb967w9aUM2jHyYtxrWbeQoUPDDXdoN2wgJAgp2l+jc1K+P5xgnC5BpAg8CyEOMwSrNrnet47zrr2eD/ukEzrJ2DEnqrRWjikry+ke6/Lz/aXeWRZqzDP7TMSQmVodfneKcrn4w1eeazm/NpmeeEwA9v1BFtPl0VJM2p3gBAdCUVyhV/BMD683t6uE5ftSyOZ7QsKYMgRG7DDgCDBW47mrPyUhImpAswkAqgEd5/frnIU7dNGad5TiGIqzjJBYSE7z4f7JJ+KF4YXAiANNoSkcC8wVaHm0Fdhy8pBE2Rtj0oy0vQRKfNu93OmoYEDjRvu0MEAHO9y8UgTfxrITlkETZVIoZNCUWACDotfOruWkiRRkIbawKomT/u4P9WSJHGvGy+8ly0E3G6XI7fJNhxX6V0tYoIgOqh29KrHZvbrUgZvxojKYL3sm23JaXlADM8SIsKrEixd4B5zMNlxx1l4oj7Iz3cbw4nsMNuNTXWmDLf6LhnDbfiYvbnqqpPZrPZRBvBrb1FmfPfWfh3g6FAMl9shuLCb29iSVudVp1SAFuCpG6D00IbDAajxuCFoijjO0OG/312+HA8mRnm/Y8f95Z1d3ff2N2dZS0Wc2tuzCZj9eNEDnTDNOcLS/h9vzEBYy3mpjnVb3n8BrALOVaaqX1/AAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 18750,
            actualDps: 23437.5,
            magnification: "2500%",
            count: "0",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "50.0-53.3s",
            delayFrames: "1,500-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "Round 2",
      baseHp: 1400000,
      width: 4400,
      enemyLimit: 20,
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
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "500%",
            count: "10",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 100000,
            actualAp: 7807,
            actualDps: 14639.05,
            magnification: "250%",
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
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 12994,
            actualDps: 16948.7,
            magnification: "200%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "407",
          enemyName: "古代わんこ",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 75000,
            ap: 12000,
            dps: 8571.43,
            speed: 20,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 42,
            foreswing: 4,
            backswing: 38,
            tba: 15
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 12000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "8",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "038",
          enemyName: "イノシャシ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 400000,
            ap: 4837,
            dps: 13191.82,
            speed: 14,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2100,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 14511,
            actualDps: 39575.46,
            magnification: "300%",
            count: "1",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "500%",
            count: "0",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "387",
          enemyName: "ヒウマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAAADAQEIAwEKBAIOBQEKBwUOBwIRBgERBgEWCAIWCQIoAAAYCQEdCwEbDQQfCwEhCwAuEAEzEAA5EwFBFgFFFwE9HgM3JAdNHgNaHgBdIAFmIQBENAl2KgB5KQF7KQGBKwCDMgGUMQB0TQGkNwCtOgDBQADKRACTZAXTRgGxXAOkbALjTADvUAD4UwD+VQC6fwH/YAHLiAb8cgL/eQL7iALdmAH5ogL/pwH8vgP9zQX+5gT//AP//wHBq71CAAAAQHRSTlMABw7KLSFLFT5XuWSECXafk63s2jC90vkORsju3v6O6vT+3Mb9B/X//fPd/v6P/////0v//v8D/xz/Df////8Bcd5yRwAABHhJREFUWIWdV393ojoQFcpPQZBaoBUoxGZN2vQl4anrurbu9/9WbxJ19+3ZlZrO6R+eU+7lZubOTBiNPgrb/vCR4XCcz+Gs8w/XsYaeuwR3Q/8PKhN8kGbuJ3Dn8KO8zc8KLN9AgmWrh92kpjQ/K/Cj4P5qAtvzrJGd1Eyy+d2ZNJ76g6DfCJJx6Ds5lT1vk8nIghhNkvnD9QRxWSTJnPe9JEUYeFEUesHjy+P9l6/XEUziji6K+hkIBK7rBURdt+uXx4ev1zHcx1iI56XoITgTsl+J19f127p7/Pb9xGC5dwM5tZIOwFL/qVhtNoA/vK+f/v1+ZFAO8S7X1Yo6eG0vlASp8Nvt7v1wOOxf/zlJcLK2ywa6I6oggT3BhPEjgcYf3nYvIOGHKlPLWZVcJvAKBgS0LBuEWb/abt8U/v1tvz5KcOaslzi9TOBkGOSzEhGMEFttd5oAGEDCty+TSdTCv2l+CW47YVZSKTlCQnBCfhIc3vavjw8PUZxjyBGdXcKH46LuQIIkDZxEgILt/kyw7p6eFm2rBVYXCdJiySF7ApeIciGgiqcj7PcbzIXkdJAATBLNieylxGUDhRCr1UZXAfC7jSoLnIsPEYCIqbYhawhnXCgjrXeA3u22q5XyhlQ2GSKwkoWQ6gyIUAq/gAHMtN1uTnjt0CECMAKFJgAJJWaUMrlSFBvAa7BQAi5XQYWbVgTOKRhqGkS0HXv1drFsl0z315AP1BmcdFYS9TJK2KmllPjnPEnndad8OuhEPdDTlv+vI3WwOrJtN8oVNe/iIQIlIuv4b3DJ2lTNWNVKKgXeMAH0/LhjeqgcdQhapcf1FMxpL7r0wyFreVmNKQfrAV7QrohP682fdowUAwPl1ymirKgaBI0lSDmbBvZZW17NkqumvOV6SXqrfM1IN8si9/hWO8ySq3ee5Wad1PZ9bos0ODE4128ZmJAVNIR24HM9NEovhlNAU0lNAQymFw3Lt920YUIwMAUnpem+t5w49mJIgiSEEYSQkQLLCcK4aOdjZUmq2wq2rcFty45ndbvktNIjFkMipKR5YKAgbsGHXCBFIHQWpWhjAwnenEugQA0cQeq+gHWdG2TBTZdCEZSqjKotKEGlSRqtcK7mOmowFbzRgerQxEpwUesYa+C6IGE2Eco4X0QGeKVh1lUV/TmapFxERma2gmmaVmqKHoe5McFo4jtpBQ4S9Dhc5SI0wisNBWOwoWDPKwa+MDCSDnvaKQ9xuCooK1ITG+hwxw0DPIMyAAXrTHrhTAA9hNVYg26uTFrhRJCDlzjCXC22PPaMP30CuPJKNQooW2bBJwZa2DLBYUeXt9Wn8KOoRBgjthxHSTR0vb1M0BEC2a8iN8nz67fBrwgXaibQwotqjOvYYB+c4i5nAi46VZwuMaFz4yqO/HRJwAmkyNqyYa1ZM6uAhi4xDKQun90iuGEYE4z8ZNzCbmPLDlFIhTnByA6yCsFk45y1Bp9uZ7Truk44vsWYQDlzzze0shXE2fjm5mZ2q+MmTf7+Ef4f3iDEz+RFBwMAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 248000,
            ap: 54000,
            dps: 5294.12,
            speed: 6,
            range: 800,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 306,
            foreswing: 39,
            backswing: 27,
            tba: 134
          },
          stageStats: {
            actualHp: 248000,
            actualAp: 54000,
            actualDps: 5294.12,
            magnification: "100%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 100000,
            actualAp: 7807,
            actualDps: 14639.05,
            magnification: "250%",
            count: "4",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAQIBAQEBAQEBAQECAgICAgICAgIEBAUEBAQEBAQGAwIHBwcHBwcHBwcICAgICAgKBwgaAQEODg4REBAREBASEBEWFRUaFhgdGxwfHh5FDxBnAQFqBAUkJCRDFxh+AACEAAApKCiMAACPAgKTBAMwMDBlGhubCgmQFhXEAQKkEBBAPz+nFRT/AAC1IyJUVFTKKSndMzOpTk7rOTr7QECCe3unlJS3tbbV1dXs6+v8/PwNQSlAAAAAQHRSTlMABg8YIzkuSP9bbXiYhvSPpLrDzv+v///e6Nf+8f/586D///8HLv8YUn7//7z+/9n/7AH///7/////////////a3T8VAAABNdJREFUWIWVVw13okgQXAElIKjA4IDDkHO8nd3DJUtOMX77///VdQ/qxSjg9nt5IYQpqmu6q5lv35qjoxm9LkSvp3daHn243DDdMJhE0STwHLur/SFGx7BGkyQVKtI09l3zj2joVhinUnBKCaGECSmTidPVnn59z41gOSUvl6BcyMS39GfXO/HNcgzCZDrpP4dgOInkwP3lNqiQkf1MFrobS86lYPQLAhEiMDWjjYVmR5ITlkn5FQA4pJ4btuTRMQMhQHrJ2dccXuBumiRucxq9MBVUPcu+rofgwKHbIkBSUafiLgO8K1sIdKxInqnTRwCEp6NGCTCBu9RvVBBBUwqaHd9rf11c5RBZTQQ8wRveTrAWkn59U2l2ck9gfF2P4lDGnHoRjDC937vxdDoeX3MYN6nYMaMHCozf3qbX6/E0F/UAmps82Hxk8D/AWy5CoyGDegkvaHNez6AbSNpQBNU28nRYW4rWIwmuy2EXwSKoiO26bdT6DyQguFJdYYPzFybrK1F3Uk5uXwoNwSBUBdGsKDgRaX0ZGCNxUwVELb4AAPlMUi5jt1eXguHdWgDFlUCBC0QghGcMLMnv270agJ5/uwkEq59yymE6MMqEyGDGRH3TMusAgs9Wjq1DOENnBSlYtixYti1ip6vrdSJ0JzebwIE4EeCMFDdC7pa02Bau0eBHCPCZAToL4YKr+Sa2S1EUfm0VP2BAKzhMXkL+RSYYGzXO11sGAHDxdchAZAzqkLcCsLP8lQjKHaGaxkiDYlLNAOddgK2vMoHJIHC8jCEEJ08A+FUhXbiDgMVuv53neT6d4X+YCBtnghFWK2EhOTuw2O4+Fqv1uszRVFjLTMBmOg8lfvFwPi/Xm81mvV4ARJMVYGjuZaiwc1NQIWarzWYFP+vVYjpLaq1ARceKL4XAZMUBKOTrzWqhWCzySV0XnMOcXOcihyu85HK2gKXlGmKV19tpFYZ31p8ul7CBiABJzIFCuSgBI//r72YAbZhUIiwPB4WgPhNmJSqASZS/fjQD4GyHUqJ8dzrulxI5QBeJOWgIGCBmGwCUkvqyyg7Hw+GwlRLrFxpaIaxKAPjeAqB8mRC5PxxOp8MWHYhLykBHYAAAv3/+24IAowVkpMv9EQD2u4yjo84WKgcoyN8/W1TEYhToZNvj6Xg4Hj9m0FgcVVRRtqZQfSLBNhSowun4kc/4fD6vGGAGbQSqLwTc/uV2dzzttx95jjVUKhXf/2nbBEUhPvc0dDKgLBT9NXTU+qn11Yiv3IAJlhVzZIDdiAI0J9Axumj5Onwpn7+ysaT46/v7OzjCqmwVwHCieDIJgiBm+JWMwwR2gCWvr6/gSb9/tSWgWREcSqTMoAcEFAPMMjjxoJ/DTZkMv/9orqGO6TOZySyTDIYpzEM4ccBvBrYKdwULrJYTFzRipkISHMRgKEIZAhHV7RY3BACHIV94H7QgTIF0wNSQoJlUBz8WtgEMU8wW6cL7eeI7XgKjDAhIdbudAaYAL4OHOU8jx9S77iSBk5PEm0+kAE2Ap0sUYRCFVk/TNDy6DlACwOBxv/mYoRumT5ECG8RwUh5W4XhBPKBIgAdWz2g4+hr2yI8HylAHX0NV9csg8Ed2vSfrpmX3h84o9Dzf94NPAX96Xjhy3L5tmXcy/Ac0sMakf3lgZAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 12994,
            actualDps: 16948.7,
            magnification: "200%",
            count: "2",
            spawnTime: "65.3s",
            spawnTimeFrames: "1,960f",
            delay: "73.3-76.7s",
            delayFrames: "2,200-2,300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "038",
          enemyName: "イノシャシ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 400000,
            ap: 4837,
            dps: 13191.82,
            speed: 14,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2100,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 14511,
            actualDps: 39575.46,
            magnification: "300%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "Round 3",
      baseHp: 1600000,
      width: 5200,
      enemyLimit: 20,
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
          enemyId: "304",
          enemyName: "オオさん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAADAQUFAwcGAwgHBAkHBQoHBQkJBQsKBg0KBg0LBg4NBxESCxkTCxkUDBsdECYeDykbESoiEy8jEi8nFjVVAFUuGz0vGkAxHEMyHUUyH0M2HEg3H0s3IEs6IE48I1A9KFNIKmJJK2NKK2VLK2VQL2tQL2xdOHtgOIJgOYBsQY5yQ5t2R515RqJ7TaJ/SqiGT7OQVMGZW86RarKhYdenZeKtaum0bfS5cfyyfd+9f/TCiPfMmfz///+DVDkpAAAAQHRSTlMACReKKPKsQfrcXM++M5vrb7UqFEFbfwP2q91SaBjnL8uLCPi779v/59n+7P/+6P/z//7///////////////8Aq7ghawAAAjVJREFUWIXtk1tTGkEQhRdDNIJyESSCkYuIg7MzjnNhumfYJf//X6UbTKVSqTIPqbzteditvZyvTx+W4vs/qmgADaABNIAG0AAaQANoAA2gATSA/wb4WK3WWfuatFjc8Om63b4YTEiDzvXZX6xkfhgPesPl87bclK+vZflabrfbWfnmrNX6rRx2PkS02rerp9K53b6KEVNGrOvoo4f6UFU5AyS3GV60/jR+HY047Hj18gawP5AqiClDgJwxYT4c6lxldC4m1LPOb4TH0c34djJdPs/n83JfV5nm5ZxSTjlTCjqElPgyJnD0KHkz/0V4vLlfLWebUmurhfCAmBOEmNF7TJwg0MiIgZzgGES5EMOy/W5frJallspYrejkUzjaaDz4cOSEECAx0xMlENE7wBDl4GSfzKTV1lhrlZQuIK1LKwO9mDBRd1DXeFzluFIGpyliisGuz9l/uxRSG6msNVpayDSKqkKvXeS6EzpfZe/ZmoFBoAy3EyKE56J4mMw5uxJCSKUpGL1g6McLoH3kmRkkVYYIzmE63cJg3cnxUjxM1+Lot7vdfh+BykkoHDekML0D+F4wItBalDxaIXTEnVVKvxSDNbWmpIA9peKteYDG4/EUIAfJl1EY6pQ+qUi7UUsBdxTqqehMWcNZKYUkKU2SHICeSmO4WCkifwCglaGKvbfKOmeNXK830wX/X1jti87gU+/8qtu9vOz3+5s71pefuluz7j6T6OFlt3s17PUm3+7Ho+IHroiW29SCEBIAAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 300000,
            ap: 60000,
            dps: 11920.53,
            speed: 3,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 151,
            foreswing: 111,
            backswing: 40,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 120000,
            actualDps: 23841.06,
            magnification: "200%",
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
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgEDAwMEBAQFBQUUAQEICAgMDAsPDw8zAAE0AAATExMWFhZHAgJdAQEdHR1yAAAkJCSRAAAsLCwsLCyiAAAxMTG0AAE3NzfdAAD9AABSUFBmZmaAgIC5ubnfrlfyAAAAQHRSTlMABQoTFx8lLDM7QkpUXmhudn6IjpagrbS+w8/4/f/dqMfv9dbp4v//+///3ff/////////3P/////////+////dWjEkAAABUhJREFUWIWdVwl3qjoQLiAVBVSQTRYRCFB8gCl9iNjl/v9/9SZYN6DFd8dzWpKT+TL7TJ6eBoiiqeuCZuih821iuAlzYWeF2fT/IVAjXlEnJxEoZiobG4kZYLm/fiLpKBAbHoqdaaHlqyw1xHWlkaCuLRstn+Gb5qSNZzuW9jwIAKLy3HhEUyNBR7bj+AboQHEyYDmOrY+HAZ5lXV0u+LGow5XAsxZoil2syTcAcMMqMHPT80JDMbwTD5oxjLixnGZhTAbdQNFTN81wivyG33G85VRwCVgMABvhVzdQNMOOOV5BWVlm8YnfeQl0IyT8SRwn4XL6IwJFjzhhoejGZp0mRV0VCbkzybI0Te04djJc4iwNtR9koBhOlLVVgNKMUFHVFQgRO0lRViVwwldJ9gpP5/vMQHNzdYNSXMD5CjjgLPwrMFxbnhgzXNVAFUbycw//ZBkAd1k3VBGUGtirkvxwVjQYFSYYRWp0RQD+8MRNbq4LnGQYF0mCAQj4wHi4qMAoSQF6JUjpBAO7CF7AbABQEIkbD8TkF2NQAhN/AEQSn/7awbxtR3ZuoBTsBhoSX2XJ2YXfMN+fTuNLiG61LQLNThd6mJYgP0FwLvz9ZG3ErhVYHswIalRF9jt3kx6zHk/SkHDEEEU2cD8BmHcBKJZXQgCoy78CAHYJjADOKiGC/wKAnmqIRA/GyTB/rwSc6zXiP8Deb4PR3MQQ/UU8aIAfAKixioq66rNgFEXtdY8KFFStl7LPidHudXeLsH3d7/5pAVDsmBWU4AWUKNthFO0Ox8Pudn08HtoA7EwS5MBKsrIuccuM29fj+/FGhAjWbQCK11fzuQkpDDrglhkbCfK79eG1BcDM12uZ19JTMWp7Mspf8+hunbeNyCmep02kADeVCA8mU2SvF6Pbrs/rlm2KopFCJUqK35OpkcVGqsiPr0IIG8v2zVWYFlBufo+kKNrm+TaKUGCq/KUsiSb0LTtNoQLiIenz/WG/J04BKaZngNmp7zStIPk9lKP8bb9/a4wKhjgDLEgXh75R18PJcFKh+UTKBaBpwzGuSSt4JJlO5Kn3AESEB8rZDYByrwKIQHrHwwh2KF2MeJo+iBL9BbGzRzagtl/iYEXGD2gZ4Ic+JRIoc3clAY4mViCNL6Gs+uQYtHRopF0dss+vD0ys/03bqP6sPWNxDUVmFliNCZrW1hEAf/35xLv94Uz77cfXhyHezHsUp4AZ44R0tj4Nvr7q3eH9QsddVf8rje7ymdcIAmnmPV0hLsv8cLwBeN36bmtmZnjF9Gzo3VlvIEEZe7+VwN/M7gR4OjVGG0pSfyBF2/0V4bjPA6k78D7DaAcS9AoQx1n+drwK8GJ2u/vTs+uBCereXEqKj4/8LMPxbVuGi7YGUJjlEFobxEEfQPn5kZE8JvSW4zrVesYsYQNxUBW9yZCURRxtvymKcRzKHSNQYISCpPND3dVa9cw44iotHxlPCMErhG0DwDMhfCkfGE8aAE/pAMCwSUacxyqSFSx6Jm4YV9f2hd/2vQudXw7NvgUbwbL34UJDi2oeObYNQq5c9Zvc1WWbXK6pypzrf7fQIslrGyHLsczZhDuTqHkEcg0ZZ4cKz3Gjnx5OU92Hgy6c99wxdaGRaFjwepMgZ8mbh+plp+C5M5qqHtwhL0MbucL0SqLr254qSIHt6xPoq10EeK/w4mwuGyAB0g1k+4F+SyYAGIq2hr/STOS7OtDjhWpszGCNwMYIeb5/44TGEb6PwhB5aG1uDHfRMSI1mohzSV4qYHONXGms7sgge5rrqspSlubi5CrBfzndboB89/JYAAAAAElFTkSuQmCC",
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 170000,
            actualAp: 13736,
            actualDps: 25755.0,
            magnification: "200%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "310",
          enemyName: "キャベロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgMDAwQDAwQFAQYLCA0OBw4MCQ8TDhYXEB0XEhwBAH8dEyUgFikgFyooFzcoHDMsHjgtHTwxGkEvHT4vHT5hAGEvIzo0IUM2JkM9JlEzMkZCK1ZEK1pFLFxHLF1NMGdQM2tSMnBRNmlYNnRcOXxdO3xnQopsRJJqToN3SZ97S6Z+TqqDTLCJU7iLVr2UWceYX82JfZCiY9yMfpapaOaybfSVlZW5cf6rqqu+vb/T09Pj4uPw8PD8/PxTikoxAAAAQHRSTlMAqsNNngh4ExwsPmECSM4bJpF0NA5YvwNEpmiGBdzwzJqpw7b/5M3z/9y+//Xr///0//7f/vv///7//v3/////dysCMgAABHZJREFUWIWdl2tX6joQhtlHuVSOchOl1JZb6cW0SRNiYorA//9XZ9IWwb3O0tl7vkBZ5Mnc8mbaaqGsN+/c97pt3J//z/pZEkevq7Hzt4C7lCRc6yK6/0tAuxMyaTRlT3/gQ282630CXGE0I0lIFuPed4uubPC637+e93NSoyULQ4ijcJGE+f748TZqEn9fGEk1TaQxphij1rdX5fv7/rX7CdCcUqEBoCIUwNl9HMsy6n0CjFYiYQDgMQowLY+n02nXJOEuN1obHce6KBQK0F6WZfnxcQY4uVEAiHy6dSMXAxjujh+Qg92kfuylhnEjFy55cx1MFdrj93J/OB3LWf3c3WgZkrhzt3sLUEXo7Q7H03H//jY9R6Q0Y4ues9uNUd083x8+yvK9fD9v51GuTTroenPUkey+ljaC0+nw2vzfI0yYfNJCLe85/fxtfzgcLnVsu4QKU6C8bzur1OdSCMHK/b5cOu37fre7hjY0Yo5yf1RoQm3PCthVxL4b5Z7jUyqN9DCAm63SSgJAS9hUE0WJTjsZZdqoJSYF/cwm3JqG5mPMqJBnW8mBqVYIwCOkiyrTmIbzp5ME3FdcGjFCAO4DasO9NkYbdzBJHDyFAFA2BZ8AxZov+d3PgGkAEdgcSPUZhWxYavHzMXpcJYxXugMVqI1Tpmp3pPdzCobbUNX7EfupQEUYpUziI4iDGgD1t+mT1gNKqiSoTffH9S9e7J8B9gNERCsAUJBUGfR/duDZixdV8jQAgMCZbUjOiST+6uZnB0AH4idZN2GiqgRWwcswDPqY5TYHblEDQkKK3M8amsxnqPWtydbN65oTnU8nTmQDAYDOkNfycOumDcDkjpVC0wCmOMDjehHpak0FaE0L82cevCy3VR3PACdvAJgmqjzwgkBdQmh119YfCZKCHCyGfkjqylGT2qPj2ZMkqI6QQwGc5roTGZMrW/lpBnLOmd4gJ7T2qGp7zZNsVTntbEEMmcCpob0Sc62lFiRYzOvOgwuBaSolbirpeYU2klOyvUxSIxhLiCpQbTDcgIxD/mk6vTg85gbdBrZrwH2yvrsK2AM5ShTuSrmHo8MTsb4uedXMTCoUYLCRBlIWDa5/nNvbSea4ozBZKBaq4ov6Dzai8PnmEQX4d5rp5Peum6T5KEMCQNWlCKX4It+Pm8xL0yEOANupJFZfTs6zR90IKwet53khg4y41y5Mi2jNvRckAYLIArK97ptZni/E19J8Z7NcBTF5usrjMBWBKObPWBeWkgc0G1+CGKZVabBpBBd0Agp0kXGISiZK/EEWlAyVvMrjLNUEkBOsC3Cm4DZNLyr64gkVSrlENlNrEFkZvtagYaRhVMNeTrChtNdyfhEF+AXuSrnElnJegIZQkS7PumCRlPBsjXzlA12AqSDkzG8a+MW+NfIkETHula9+w0pCQfy7dmUjOzCJEAjfj0lt5+am3+ncZvZOVkkiw4dfYLe3D9XExUNK/JvvCG1Yfnv769fTOsphOHhYPPzT2CJKi6Lwn9zO73PKfzR06Nvi8RLiAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 120000,
            ap: 5937,
            dps: 1979.0,
            speed: 6,
            range: 550,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 90,
            foreswing: 11,
            backswing: 36,
            tba: 40
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 14842,
            actualDps: 4947.5,
            magnification: "250%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "288",
          enemyName: "ジャッキー・ペンZ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 42000,
            ap: 8000,
            dps: 8888.89,
            speed: 9,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 27,
            foreswing: 16,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 84000,
            actualAp: 16000,
            actualDps: 17777.78,
            magnification: "200%",
            count: "5",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
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
            actualHp: 200000,
            actualAp: 15994,
            actualDps: 16545.52,
            magnification: "200%",
            count: "2",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "90.0-93.3s",
            delayFrames: "2,700-2,800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "304",
          enemyName: "オオさん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAADAQUFAwcGAwgHBAkHBQoHBQkJBQsKBg0KBg0LBg4NBxESCxkTCxkUDBsdECYeDykbESoiEy8jEi8nFjVVAFUuGz0vGkAxHEMyHUUyH0M2HEg3H0s3IEs6IE48I1A9KFNIKmJJK2NKK2VLK2VQL2tQL2xdOHtgOIJgOYBsQY5yQ5t2R515RqJ7TaJ/SqiGT7OQVMGZW86RarKhYdenZeKtaum0bfS5cfyyfd+9f/TCiPfMmfz///+DVDkpAAAAQHRSTlMACReKKPKsQfrcXM++M5vrb7UqFEFbfwP2q91SaBjnL8uLCPi779v/59n+7P/+6P/z//7///////////////8Aq7ghawAAAjVJREFUWIXtk1tTGkEQhRdDNIJyESSCkYuIg7MzjnNhumfYJf//X6UbTKVSqTIPqbzteditvZyvTx+W4vs/qmgADaABNIAG0AAaQANoAA2gATSA/wb4WK3WWfuatFjc8Om63b4YTEiDzvXZX6xkfhgPesPl87bclK+vZflabrfbWfnmrNX6rRx2PkS02rerp9K53b6KEVNGrOvoo4f6UFU5AyS3GV60/jR+HY047Hj18gawP5AqiClDgJwxYT4c6lxldC4m1LPOb4TH0c34djJdPs/n83JfV5nm5ZxSTjlTCjqElPgyJnD0KHkz/0V4vLlfLWebUmurhfCAmBOEmNF7TJwg0MiIgZzgGES5EMOy/W5frJallspYrejkUzjaaDz4cOSEECAx0xMlENE7wBDl4GSfzKTV1lhrlZQuIK1LKwO9mDBRd1DXeFzluFIGpyliisGuz9l/uxRSG6msNVpayDSKqkKvXeS6EzpfZe/ZmoFBoAy3EyKE56J4mMw5uxJCSKUpGL1g6McLoH3kmRkkVYYIzmE63cJg3cnxUjxM1+Lot7vdfh+BykkoHDekML0D+F4wItBalDxaIXTEnVVKvxSDNbWmpIA9peKteYDG4/EUIAfJl1EY6pQ+qUi7UUsBdxTqqehMWcNZKYUkKU2SHICeSmO4WCkifwCglaGKvbfKOmeNXK830wX/X1jti87gU+/8qtu9vOz3+5s71pefuluz7j6T6OFlt3s17PUm3+7Ho+IHroiW29SCEBIAAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 300000,
            ap: 60000,
            dps: 11920.53,
            speed: 3,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 151,
            foreswing: 111,
            backswing: 40,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 120000,
            actualDps: 23841.06,
            magnification: "200%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 170000,
            actualAp: 13736,
            actualDps: 25755.0,
            magnification: "200%",
            count: "5",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "0",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 3,
      stageName: "Round 4",
      baseHp: 1800000,
      width: 3800,
      enemyLimit: 20,
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
          enemyId: "113",
          enemyName: "天使カバちゃん",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 220000,
            actualAp: 7200,
            actualDps: 8000.0,
            magnification: "400%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "272",
          enemyName: "ちびぶんぶん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgICAgIEBAQFBQUHBwcKCgoLCwsQEBAQEBAcHBwoKCg1NTU5OTlFRUVRUVFSUU9TVFZVVVVdXV1iYmJkZGRsbGxtbW1wcHB5e3iBgYGJiYmSkpKXl5eXl5eampqhoaGtrK2xsbGysrK8vLu/u7+9vb3AwMDDw8PFxcXQ0NDS0tLY19jb29vf397g4ODi4uPi4uLr6+vr6+vv7Ovu7e3z8vPz8/P09PT09PT4+Pj4+Pj5+fn7+/v////BAIMGAAAAQHRSTlMACy3DPhxwUYqy3Mj2n9v+tzAH/4br/2A2/xL+s/9XgSP/pP9Lixdq/ze3Uf/TfTD/ZJLB/xtON6J6/1/TjrL/h4EUBQAABwNJREFUWIWtVw1X4rAS3QL9otCgoVlDjBJDJUCEgKVAEfr//9WblA8R0X3vnDdn91hK53Zy595J+PPnfw3H/dcTruv8lu/5v6ff37ue1/gRwvHqjd/Se/f3vV6jHgUXEPf23umDHzdrv729d9cf9e+CFomD43OQbP8d8WodHv0MAA/ePczn/Ts/pDIJfae6d3c3GPXu/dphAUz9AtDr9R4G6+3g71M3lkbEngu3HoJ2Orq7C0Kb53bULwD3vf5otNlv03TYDbEpVNJu9J9G7Vbc/fsQoDa0z0+ynwFe+w+DVb7eb9abNG23ZFkaFnUn+SPhcfvBY4nnOAEvdfwDQO+1/zRZbd7Xu936ffwY06IsM9aZb8aJlnEQMNWpOW1VmvgHHbzOBsN8u3tfbHYfH+O3R2TKspTxdP8Sq0LGEc+Y73Z0mSXezfzl62w432726/l2v9+/79NYAYBJxounWJaFaPFCtmsdUxY0uKmy19fRfLPZ7Kej7Xq3/9i9JwIACv44HMZwlVGaQfFJBrfCmwC9fr7dzHfr4WAxXe93uyJhQEKpkseXDocLjWXBAgAoZXTTTb3+bLuZ7HZpms53m9X+o2sfLjOedGILVTBqeJPDlY5vmqE3muUTSB2Pn+e77fZj84wti2WhOcYa/gokONIWE/p5i8TZajUBEt5euvP1dr3eQvfKKgrDeVYqihBqUZlBBTf7uFyt8tluu1k8P6WL9TrfHNpwhMiKzBitOEFU8/AWB0sLsNqstsPB9GWxn04WKXTvHOZYTaYI/qEAAFjl+TKf5It0t5hO0zTmnwCSZ8crjes3pfwKHCzz1XK7XW3mi+liPUwr8k9plKojhLhtJgCYzfLVbJOv8udO5/GxmzJ0JqHMCCFUVYAG3ZTycjWbTeaj0TTvdZstTGmSJE2szxxgoRmGdRSFat3uIgBMp4PJy8CLmbakC0T58aWlkYRqiZAotKZR4893hN5ytVytF0/TcTcWh6RCggmJzLQsMsYVxZhJKjmDLrj+t0ZCD5b5x/hpPT7lW4iyUJRRYiQUb6TMCokxIq0w+NYI28Tl9iMdvicX1AMCDCXEGBFcac50oYSQAqEkuXbDcpVv891HungDz33mK2teqjAxAkP1wAkjFLewYtdaWubTRbp+W7ydaasAuAYWeMZFmQkNTFDFJRegiO8VTNLxy2I8ZtxcroAB59ARddJxVgAt8N90rjhYvg7Tl+fnl0diyoswYBw7AIryKlT7qgu9/iB9/vu3e2kfeKHgUMB1cqXmaz/e90aDB9h8kuwiXQHtkn17e6WQ65l0D3vCXa0RMaXB+UcCGTSei4u0rOLALs18G8xwJvCDsIUwxpRXtoP1K2moKqtJYjKjOKWEcqHgyoim59cuMZxGGCfMqgSkiogsCmBPKU2VzaMUgxeFUpQIECbCUrZacdj4kk+ElArCFJohxCWwp5REhDCpDeiImWpZRWEEY5i2kCQXTNaCRDBCuJTSlJoRKAJGAQBQaXVRGEbsujJScVpk3E5XGn/auhFxBq7BtgotAakStOY6s49ryTm8VmrehFNDZqA3lEhg5LMEvyMoUxwL+MOhFNhDbCOhEUowy1tRQFdJK6gjeA9j4G4D3ERnFvwYVgBFCGAJguGDIg18ZmCCYxt1EjYRoQDAoVAtAPC0Bj/CzH5BMEBrKQWRZ/VfCIjXm8wuB6iSwA/7LMFtVxLAQKOB8SUk47cUKKO6VUcVHNbKWqfx6vhNWDc9dMHAN4yZGwAqCmJpAYTg8CylKDj3MbIaEgcAyjklt0wkIz/EFTwTQC/lJDwDdECCDEQjNQDYjt4AgOOB60eE27fbANIuAWAB0EcJJMLgYrcA7K7shtQcWQDF0AsAToQSQCIHRwhJ8XcONIE9zQmQ1icAOImeANw21A9aEAJbJTDUEtmXbLAAxk2/Eu2pBI7C82RzvAQEiMFDWFnVwVmCqfN4LMDBGG7YTdHx4koHFWeXdgoRaFZQZE1gDFxjBKOhepZTbPGKDFv3NJq4UjMI/PK0BYZuwa6D7LakYf7zwkjUrEcQYdg8mPJwtKlFjFGw+PVxzfGaBAxlzcsRRgIOVbAHurVaza2FlbAzVlXshhjDa4zKCvZltjbq1BxGHnQDSc2aJ7v7sbamZgfluxGBkSUZgyb4X6aaFx+PMYWhUEN4+tYJEiAx6Rx/wThBC1Ucszj4OtzdoAmbVmFPBkTQzw79aYQM5td5htaCqEUwSSLveo93fTtZGUuQ0Mnl7gkTT17cgAEO1N76Yee4vhcEgRfR5Gt1rpfgy53AcWs//bR0bNS86xOI49dvn/H/63Bq//y9+38LuwbXrSR0GfaW/epf6bWKxjAM6xDNc9hPcNMy/P2A9iXchu95FqF+HVW+d7Wn2vgPIrJ/Rw0dE5oAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 29997,
            ap: 1125,
            dps: 1088.71,
            speed: 38,
            range: 150,
            rangeType: "範囲",
            kbLevel: 5,
            money: 300,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 449955,
            actualAp: 16875,
            actualDps: 16330.65,
            magnification: "1500%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "2",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
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
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "050",
          enemyName: "ブラックブンブン",
          icon: "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",
          traits: ["浮", "黒"],
          baseStats: {
            hp: 777777,
            ap: 5997,
            dps: 5803.55,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 3000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 3111108,
            actualAp: 23988,
            actualDps: 23214.2,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "272",
          enemyName: "ちびぶんぶん",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 29997,
            ap: 1125,
            dps: 1088.71,
            speed: 38,
            range: 150,
            rangeType: "範囲",
            kbLevel: 5,
            money: 300,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 449955,
            actualAp: 16875,
            actualDps: 16330.65,
            magnification: "1500%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 750000,
            actualAp: 30850,
            actualDps: 3105.75,
            magnification: "2500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: true
          }
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgIFBQUHBwcHBwcJCQkKCgoMDAwPDw8QEBAREREYGBgZGRkbGxsmJiZ/AAExMTE3Nzc9PT09PT1AQECIOgL/AACRQgVXV1dbW1tbW1tmZmahYQOnYRNycnKuZhataw+uahZ2dnaubgy3cBx/f3+6exzCeiO5hBS9hQS9gxGMjIzCiCfJljKbm5vMlTjTpUepqanlsDy5ubnlu2HpyWTJycnc3Nz146Dp6en78cPz8/P6+fn///////+0jcskAAAAQHRSTlMACh0sOf9SaNnkd7SbxIr+ArPV6f3DDQEe/tPo/wo9/oUnU+oXofxovxwHQf94jf6euP/v/s3p///4//7//wD/SEHX2QAABVxJREFUWIXtV213sjgQFUHogwirQm0ES5U2fbabmppNTYyk/v9/tRPAqrULPWe/7m175MW5mZncmUl7H/8Rvf8JPnrtmN0a3NUwl4s/OixOWCwWy/vV6uHp6el3g6enh+fV/XJxezvrsv5YLJ/Xm/ftdvv3JeDJ++bt9f7utn315fp9t99V331eAe4Bq9Xz86th3e12283qri2Y5Wan9fZttXxcLF4WH7PZrDebfSwWHy+Lx+Vf6+3+sN8+tPlw/64Ph93mFQKuKF4gIYsX+HwB++fNtoS3v+/aQniGCPR+VwXxtl6/Vliv3zbvEMFe6/32931rFiCHbybYfY1dhc+b7Wa96shir/diNvEV1oRFT9hs3tYQ2N1tpxwsg1sT+uPj458NHiEhIKYfaMlywiAIfc/pW91f/g79EeGcMZImodvNYVl923EN7L5Vf9ueCH3QWitB07Hfbze3/WA8n6fpdDodDQPfMRxWmMtSMAUkihdhK4M7yqiQSikpJac4nQSebfXsICUIEXUAyMK3mrVc+5rAR1IfKsCHcZoVY9eyvF8RERktzQsxcarEeEkaXCfEnRChKhx5FJu4/TFGQouMmYcae8Y+KIQYX0djucPJfD5HCMtDA83GdjBFEi4yUd2HFqSlUJp/Q9Cz+o7tQsii1EcGlXp2gCCFJcFKCZ4HnutNRClx4Njf7arlF7LKwMmFvluY+GWOc4QBRRpjnKF0noTONYUVYikFJ/zIIOeOlyqTVoFirkARpRI4Rhw2iySuc+WHEyTzSQRpazwoi2ESU5NWLXLRsJYcIQHvWDqZJL7d7/ftEw9o0ZsKraU0cegS54JnIBDw4nN7gAwbH2WOEJom4+HwZuSdPLGDmHKCcGlSoSkHMkaYOpxDl0bgJBOCZIzEmLO5++lCUJAMoZiVirLy0CzbrK2EPCW4xEwxwShjSioSHNPowS4rKRAC/5g+XC5MouzkiuaCRzGVkM6Y0COBnYg6SoKJ+GJfE5we6lLEg4grPIgIDj8dKI8F8dXchMDlxb0WFISLEGWJ02RgLK7N2gBFBz8ybXYBlKi+WbgTqvCaepr/yIGr3GgaVh44CZPfWlwYQ4cydV8CTPcR0DRpWrUaK6CYd7tLEOgkyw2yLEMxXMdBVd1uKrLOEEqaCcUh74xRlIEUEJdNCqyQyW4CWEMfJFgBMFGKTHNKU6/RUDeBJriEholRZtyHSks8Pwx9u9LQlBSoi0ChHGoLdl4AGBaFV82+eg8D3590EYgoIvEAVRWhKb3ojUDUKURNBoMsggIwNzLjxL/sSJ0ECg2ifDAYUKMlyGfqXHa0ftJBIKJBnAEBNs2Gkavu3k9alQiSBeMI/ojpd4w2Cv65B8qsbjhYxUYL99K+Z3XkQMY1QSxNTRA6d74SBO21IKKagJYaSonS+dchbYW0tR3wmiDKiQHjqQtD4eLk4hHdxsCM+xnJoIlSKCVJJ0mSjM9mQs89tsR/IYgiLKCIciNkoIGqhNFwflZw5qqNQOYZpTBaG8QogmaAhmdisLv2kWHChGwgoBfRYzv62TZUQ+3iHvRwrkfLp1UWS9mai0uI5CyGJosqJ/JytDS7o0+Xx9mjyLmgj6ONxoidjwjNeTXvhVDQkapTjEFZSl6Mz/VopGTsoG/GiHJxzBZFVRPRcFjIMSGQOlASHHiK+di/lKOb1hupFRkO46wCin+NhtPaNUlGwTSHwxIQoGF1Kr5UM/SUJloeQJ+vgUO7H7CyAgvsMa8Gi8L+Nyc1y89YjXzk3+D6Mht63jCuZgnoxh+h+nIafvdvgBOMRqMbwC/4PaK6P103T26Ggfe5g/8Ak5xPzbXLdjMAAAAASUVORK5CYII=",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 220000,
            actualAp: 7200,
            actualDps: 8000.0,
            magnification: "400%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
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
            count: "4",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 907500,
            actualAp: 5617,
            actualDps: 11235.0,
            magnification: "250%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "66.7-70.0s",
            delayFrames: "2,000-2,100f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 4,
      stageName: "Round 5",
      baseHp: 2000000,
      width: 4900,
      enemyLimit: 20,
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
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "8.0-11.3s",
            delayFrames: "240-340f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "424",
          enemyName: "オールドリー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAEBAQHCAcKCgoMCwsIDgoNDQwQEQ0QEg0SFg0YGBcYGxIdHR0dIRgWKBkkJCQpKSknLR8pKyopMiAyPSQ4ODgyPyUyRSk0RSg9PT0/Pz9CQkIxTy9EUjRCVjFOTk5JXDhTU1NWVlZPYjxVaT9ab0ZlbGhqbmVubm5qd2pzc3N5gHiAgICPj4+Pj4+bnJmioqKjo6NN3IekrqixsbG3t7fDw8POzs6Y8bzb29vl5eXv7+/5+fn///98lDUNAAAAQHRSTlMAB7f5nhEf1j1c504tcxiC+kFiklKuz3C//vE0BITc/u9o/saT////1f+175n/0N77/tfo/vzy/vv+//7/////zgtcqQAABGNJREFUWIWlV2t3okgQtTNCMFGJijomazAtzStRIETo3n79/3811Ti7m50zGGHKc+QL93q7qrpuORhcH7aDBqjD+78EcoJ4vt6uZ1Y/vOXFeZ5TSst03Ov3X7JaSMVwoXg6Rt1PMjsyoZQuvvmSF1n69tKVwNnGhdSabQ4ClLDTviPemhwrBgQKwJTlcdA5D+O3mktg0LouDovxtCt+MJgG2bE2BJJns+5wCMsJGBNai3Lds5vQ+CUWmqde/260Uimp1xveEPDq6Q8IpkfOyj8hGGeCZe0dgJ6e4KJZVnuOZqUSR7tV38t7GUzRKAj+u7D2/f/u7vykRNp2m6dBRRl7s+2UltufL42XO9dC/yLQgmoRtAi0Ako54yy1t1SVptWQNV5u8M6dDP8RbR+lZusWAeNFXAnFOQ3mVFVPyB4tvq8efUIe/d39z3e8Sp+5fxvInqdMSVUtK1l67mrnY0xCCOwvvZndiBSXcmgkbkshZX7ir7cPG0xISMIoDAk+5a+TQVMDydpS8FOFd2Sc57nvAxzQECHxCWeVZ9oQLkI1v4ifTr24pslmswH95ptEeVGEXNItQmvIwMU2sufB8f09SwBPjHA4vr+JGK9zpmX5ss6kFrT9BNZ8X3GllKSABOm+f87ggQvGpVa0ggcr26+iHXMhIEn1IQrNZxOZb3zICw6l0YrDKGR1axuaJoEXyvj1FGKTed8/p5ArYWaploLXdZ63ddHA3FRWpfOUcwKnT4rEN1UIE1pzZQahVvUBh/sLTTDdH9fTNfTQM6g/naKNb3rAJ0UzibWmUXHaTdrxA8ud/WWlXKTLMKxzH/JnTpLU59/XPPoQf8eXzMDcObTOWDAh4SExjRRGOKFgZ6Ixg/Dj4yP40peRl26d54icmhSAgprxohFRRx8f8TV2YI8tFyeihj6EMxDIJmFQRM3J4fViF38KZ0UKfsBNFTHGByhjLVjOyivtELmPflQUuMki1CGvBU+4oEX7JPiFYAElwCeoeuibjo5yVhAm6D690lDRZAc/LkUCNeQsjAgGlqLK3PuvseewR+4qgbQVHIy0SURS72EmdXBE5GRN/yhNQUFy4llXP5yVZ7xIopwKduzqxyjgTf+KopaKl53XGeSVsI9pWRdMsiyYdV0HrDn4h5Y0P4H47bjzNoHcHAymShcgI+sON5MF/Cv1bDuu+b7PWgzjX+Wz5inSPtsQWhY8tpt1Rl2YoRcIAq4yIEBvPQkGL1wb/0GBkL2OYAjezwSty8QXBKw5wgA2jgs2cCE8Jpuzb6PXfjullxeNdJfsnF4E9zvfNU83fO7158gQmPmLFuHq0jrTHqPdbgQPa0l6Ekzwoxl/9qqnAuTiR5M8Zxftrp6jn8P6HjYKpuCy350efxDtVUQAaKpA8PNy4XSlQBOYxCt34kzAEEiEnz1k4kq05YwmQx+cBONnWDY3m4dvD7c3N8Ph0J2MnCuswRne3N7dPfqAfHj49inu7m5vhqPf3e4fmOi93AicnjYAAAAASUVORK5CYII=",
          traits: ["古"],
          baseStats: {
            hp: 1360000,
            ap: 9000,
            dps: 15882.35,
            speed: 32,
            range: 310,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 1360000,
            actualAp: 9000,
            actualDps: 15882.35,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "80.0-83.3s",
            delayFrames: "2,400-2,500f",
            baseHpRatio: "99%",
            isBoss: true
          }
        },
        {
          enemyId: "609",
          enemyName: "古兵器マンボロス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMDAwMEAwMFBQUHBwYQEQ0QFQ0VFAcUFBQWGhAXHBAaIBMaIhIiISQnLRomLhouNR8vOCIxPyMvTRo7RytBUytJSkJOTk5IWjFNYzgudz9SaDlbY1RZbz5gdkNqbGY0jk9lfEdqhEtufmlukFKCgoI2u2eampqsrK23t7d73qBY+J3CwsLMys7U1NWc/t/d3d3j4uPp6enw8PH4+Pj///////+wk4nHAAAAQHRSTlMAEB+77jJGjF5q+dt6o4u//1Wp88//Z/7q/+H+///9/7P//////////P///////f///////////////////wD/aHoOjgAAAvlJREFUWIXll2GTmjAQhgEPUATlFA5jDBgagYJYpIccopf//68KvdrOHTiT4MfuFx3HfWb3zWZ5Ed47oSvC/ej8u/vLO1w9CMCx+hhgnrr3m2ABCKsU6OIDAFVBaWg9ooGukiRQJ/OhABgYVhwjiKSBAAWHUxD6Pu6TkgUg6DHR3AATtUdJJoBgJNgkIcGzoQBpmjiOi7A+FGCtbAw1x+4RgRGQ+sDN9uZ4cAsWMb23V9QzTWwAYaxB+P0bWIqyJQ8BiA7BtglsaAOajQdVANe2jQKygUdabif8AEEcwc3GR5HjnCmtdhNOgLTdRvv9Dnjl6XS+UkpPa5kLoFRNEr1eq5Le4jDhAchRdrzQz1HMeDRQgekdjsUnSL3gAEzCxLW1Xd70f/1LKCfsAAMHfpRVlzb7XN4YO3bAPNx4f7JOxyKvPr5Wqv7MBlDWgQ/LS91oUFWRXRUfgGt03rIBrDBMQFS0h1gW+aEsbjIcZUZAEMSBmV3b5psG8vMNcBmzAWbQRSH2PK+oWhFv6af8qLABBNkAQew73r9JbMNTJObLtAqDgOzqdgqut1OsDPZjVFDsEydqZ6DIavoxTp7IcZ2NJUTIy7IM7Jo2qpZxVDhGWdTXpDmIZjV7zSwUx6aAWue4TDM3TsLfKp5oTU+HugEsuNZ6ErrItUFGzzk97bKqvm75Foq1mIzAoek7p7mJHFhnIhegEeGlSc9tfNmbGxfll2fepSof6NnTbNvZhImzp3vurSzMIqBBYMLUX45fohd+gGAA//UHAvYXk8BegWu6bz9t46vNYQWMgwQgzwMdh8AKWLg2AqbjdlwvK0BWIdEIwVAeCBBmKXCCAHccK3MFxNd8jPHXApgBVvrkNPehaxUZAUqwGpEQTZ2OS2IErIlqJbEliB2ryQgA8zFJ0WCr2zxcFStd9Zg8jkmM/f63FlbAKl325jMvVUh6G2CvQL1TAPso972tcAHuxX8FEEVJkm8hSbwPFkkfTadPT09aG83ndDpSpV7AL0Xckt9jWg0EAAAAAElFTkSuQmCC",
          traits: ["浮", "古"],
          baseStats: {
            hp: 1800000,
            ap: 31850,
            dps: 3437.05,
            speed: 3,
            range: 650,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3333,
            freq: 278,
            foreswing: 59,
            backswing: 42,
            tba: 105
          },
          stageStats: {
            actualHp: 1800000,
            actualAp: 31850,
            actualDps: 3437.05,
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
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "66.7-70.0s",
            delayFrames: "2,000-2,100f",
            baseHpRatio: "99%",
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
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "86.7-90.0s",
            delayFrames: "2,600-2,700f",
            baseHpRatio: "99%",
            isBoss: false
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
            count: "8",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "424",
          enemyName: "オールドリー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAEBAQHCAcKCgoMCwsIDgoNDQwQEQ0QEg0SFg0YGBcYGxIdHR0dIRgWKBkkJCQpKSknLR8pKyopMiAyPSQ4ODgyPyUyRSk0RSg9PT0/Pz9CQkIxTy9EUjRCVjFOTk5JXDhTU1NWVlZPYjxVaT9ab0ZlbGhqbmVubm5qd2pzc3N5gHiAgICPj4+Pj4+bnJmioqKjo6NN3IekrqixsbG3t7fDw8POzs6Y8bzb29vl5eXv7+/5+fn///98lDUNAAAAQHRSTlMAB7f5nhEf1j1c504tcxiC+kFiklKuz3C//vE0BITc/u9o/saT////1f+175n/0N77/tfo/vzy/vv+//7/////zgtcqQAABGNJREFUWIWlV2t3okgQtTNCMFGJijomazAtzStRIETo3n79/3811Ti7m50zGGHKc+QL93q7qrpuORhcH7aDBqjD+78EcoJ4vt6uZ1Y/vOXFeZ5TSst03Ov3X7JaSMVwoXg6Rt1PMjsyoZQuvvmSF1n69tKVwNnGhdSabQ4ClLDTviPemhwrBgQKwJTlcdA5D+O3mktg0LouDovxtCt+MJgG2bE2BJJns+5wCMsJGBNai3Lds5vQ+CUWmqde/260Uimp1xveEPDq6Q8IpkfOyj8hGGeCZe0dgJ6e4KJZVnuOZqUSR7tV38t7GUzRKAj+u7D2/f/u7vykRNp2m6dBRRl7s+2UltufL42XO9dC/yLQgmoRtAi0Ako54yy1t1SVptWQNV5u8M6dDP8RbR+lZusWAeNFXAnFOQ3mVFVPyB4tvq8efUIe/d39z3e8Sp+5fxvInqdMSVUtK1l67mrnY0xCCOwvvZndiBSXcmgkbkshZX7ir7cPG0xISMIoDAk+5a+TQVMDydpS8FOFd2Sc57nvAxzQECHxCWeVZ9oQLkI1v4ifTr24pslmswH95ptEeVGEXNItQmvIwMU2sufB8f09SwBPjHA4vr+JGK9zpmX5ss6kFrT9BNZ8X3GllKSABOm+f87ggQvGpVa0ggcr26+iHXMhIEn1IQrNZxOZb3zICw6l0YrDKGR1axuaJoEXyvj1FGKTed8/p5ArYWaploLXdZ63ddHA3FRWpfOUcwKnT4rEN1UIE1pzZQahVvUBh/sLTTDdH9fTNfTQM6g/naKNb3rAJ0UzibWmUXHaTdrxA8ud/WWlXKTLMKxzH/JnTpLU59/XPPoQf8eXzMDcObTOWDAh4SExjRRGOKFgZ6Ixg/Dj4yP40peRl26d54icmhSAgprxohFRRx8f8TV2YI8tFyeihj6EMxDIJmFQRM3J4fViF38KZ0UKfsBNFTHGByhjLVjOyivtELmPflQUuMki1CGvBU+4oEX7JPiFYAElwCeoeuibjo5yVhAm6D690lDRZAc/LkUCNeQsjAgGlqLK3PuvseewR+4qgbQVHIy0SURS72EmdXBE5GRN/yhNQUFy4llXP5yVZ7xIopwKduzqxyjgTf+KopaKl53XGeSVsI9pWRdMsiyYdV0HrDn4h5Y0P4H47bjzNoHcHAymShcgI+sON5MF/Cv1bDuu+b7PWgzjX+Wz5inSPtsQWhY8tpt1Rl2YoRcIAq4yIEBvPQkGL1wb/0GBkL2OYAjezwSty8QXBKw5wgA2jgs2cCE8Jpuzb6PXfjullxeNdJfsnF4E9zvfNU83fO7158gQmPmLFuHq0jrTHqPdbgQPa0l6Ekzwoxl/9qqnAuTiR5M8Zxftrp6jn8P6HjYKpuCy350efxDtVUQAaKpA8PNy4XSlQBOYxCt34kzAEEiEnz1k4kq05YwmQx+cBONnWDY3m4dvD7c3N8Ph0J2MnCuswRne3N7dPfqAfHj49inu7m5vhqPf3e4fmOi93AicnjYAAAAASUVORK5CYII=",
          traits: ["古"],
          baseStats: {
            hp: 1360000,
            ap: 9000,
            dps: 15882.35,
            speed: 32,
            range: 310,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 1360000,
            actualAp: 9000,
            actualDps: 15882.35,
            magnification: "100%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
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
            count: "0",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e36004Data;

