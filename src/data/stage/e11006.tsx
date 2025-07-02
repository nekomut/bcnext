// Stage 11006 Data
import type { StageData } from '../../app/stage/types';

export const e11006Data: StageData = {
  eventId: 11006,
  eventName: "ランキングの間（乱闘！サーヴァント大襲来！）",
  typeId: 11,
  typeName: "ランキング道場",
  prefix: "R",
  mapId: 6,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "乱闘！サーヴァント大襲来！",
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
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1500000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 1350000,
            actualAp: 13500,
            actualDps: 3648.64,
            magnification: "90%",
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
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 24000,
            actualDps: 10285.71,
            magnification: "300%",
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
                standing_range: 350,
                omni_range: [-350, 350]
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
            actualHp: 80000,
            actualAp: 32000,
            actualDps: 23414.56,
            magnification: "1600%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "1425000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIDAgIDAwMLAQQHBwcPDQ4SDAwgEBIfEhMhFBYhFBUbGRooFxknGhssHiA9FxonISIzISQwJCUrJykrKSpNGx8vKiw1JylVHiNXHiM0MC80MTI2MTNMKSxkHyZfJSs+OTdpJiw/Ozs9PT5zJi0/Pz9jLzRGQUF+LTROS0lMTExRS0uULTZaSj9OTk5WVlZnW1dlX1p1YFKDb2F7cmyNb1imjHecmJXDooa2trbLvbPZ19Xq6ukxEmnfAAAAQHRSTlMAsfPJOd4InHwUJ100Hg1NQGt8jaD9scaT6tXErjH+Uv7P3nXr/tj6Bf///+wc///BMAn+Y+3/lNj+uf/a////U4XR1AAABRxJREFUWIWNV4l2mkAUtY2hAoIgm6COqIxkhgRsSWhIavr/f9U7uAQjS+85Hjky78579y0zDgb/iV/ak/6/axugr97e/rw9PzS/lHvtpe2fj79///752fjW2Pb6pr0dPgR+N75d7lb9BB8f70Azge66Tz0E0u/De1m+l8/Nr0e71c8eimdh/v6qNL9VPOPpZzfF8rUUEUgtDlrWYACKX+0Eqxe48NqcBGDsaqiUDgojYHmRb1v5JdsUX80Ukiwb85CFee5OJloLg+oeSwEUT18oJHM+j5IkY0URxvF80kygucbpSVBcFewkSrIky5I8zXPGks2kWUjVvlTjwxWFZGewTrI8BUGeJlm0aMyl7NZ8e6gFIq9hz+BCSlOAgW5tNikxceu/fgaiighC2IU85ZSGLIE78/EtgW6bV8Gd5NTWIn6YMWzPCXXdCGRxk5Rjz7j+odLCjOFzhCQShEApUbezDXRo8ABq2V+7+uFpOYf9RrUdQrjwYDd+fUnTeNaYibFn3gwcFQ4sDEmzfCI0JDtjXxS52zKBzODrXFDgQLSCnNLIISlPyeP+9aXIzWb7gW7trsWRZlBwrUELXXXgQU75TFvt98sWAtTj9WwaR1BgJrSwfIdyUHBbHuht/SAsvN2qpqRIwUbkRgkcJwwdSoijtlsLGIH/OWGlxbn0R8I+TIuyCO2WmXLGJKDuOUS0UVSJotsVQV6UJfX6zgAjoLutpmuSvtzn8bTaT40Y7B3RTayXYGB4lO7cwHZfDuWx4owNA0JCKKE0WnUMviMUFysdxykPhS/6Q1+EaMckpAAP2eJm5NwyeKhcx0HEuY8cGGIeJQlDJwjmtXI7tb5AVz2C2gfBC7WksR1nggC2iIA6SORDL4U2Qu3znDrEMzfVBMgYBwHnNAzn2qCfQpp8AwUCIT4T4yhjYm/KOUSIp2IFKJarVcehKg/RgQCEEyMFzYxuwFAMGVuLWtaX5s7ft58UcEJBAxwZGPaH7yKElLIwNpWV5XquNemoCcmYYZpmcRgyQkIqwgnFVOEEJeV7rmlonZcKbSYasRroQEhECoU3UAUE8bTvRjKeZ9mFAALCc4xFMVPwDVUXPR2lnO0TsVrMc07xRE7fLG4cqrX4Z+IsO9mjjXhaic8IP3kQZ9PuAETtitzDGh+kP2cVlUhj9ZStO6bSYDCNk9P2wh6DCKgIaHoMIczirsEk2exoHzqVAyIFRw9ARSrOLFl0lIA8Z8I+mKrqNGCigKvAKwIuqEKMyshoJ6iOw9gWh/iDEXw6gJGCeRDOLRUL4razoSLABtOji7qHErg4AC7HViR9kXR6oM9xGp4qZeyn+TGCwLJ8+PJDFguSrKuU9EV0OelHIvdBsNm4QwlkaSr6V16zpLMQppdSlz2UfzDWNA0bKz6nXIx5ZcM2naWoXFI0FF6f5dICSn1haESs+Xy/gWQRToNz0cneicCM5y135q+QA0RtnTdDRqg/FK2y6UjBFcY+TR8vi3U3TzlKWF70HLCfwKWA1O49VppSiKi0XDVvAQmoX7tyTFBILTfdZmgB+ZQQMDDTOir4Fia6z625a6CW2+5XTdBd9IFV+wGS8Mf/TcCg+pPyXtQFV520bP3X0wDD5+m+PrpAUOR+4027EduizOsSQBOcjXn59tz3JxGQJFl5PRze98MaUAecl4dDue0JY6iOfny7uysOh0P6vQ5x7cBlkdx/+zFSO9phWNnf+48vj99vcX9/f3cHhuFp9T+TkM5RIIqFOQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 16665,
            actualDps: 2746.98,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1425000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 720000,
            actualAp: 15000,
            actualDps: 2307.69,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1425000%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 4800,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "6000%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1350000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 15000,
            actualDps: 12499.8,
            magnification: "6000%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "1350000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 30000,
            actualDps: 5325.45,
            magnification: "500%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1350000%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
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
            actualHp: 200000,
            actualAp: 15615,
            actualDps: 29278.1,
            magnification: "500%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1200000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 1125000,
            actualAp: 11250,
            actualDps: 3040.54,
            magnification: "75%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1200000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 20000,
            actualDps: 8571.42,
            magnification: "250%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1200000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            }
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
            actualHp: 70000,
            actualAp: 28000,
            actualDps: 20487.74,
            magnification: "1400%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "1125000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 13887,
            actualDps: 2289.15,
            magnification: "250%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1125000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 12500,
            actualDps: 1923.08,
            magnification: "250%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1125000%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 1500,
            actualDps: 2812.5,
            magnification: "5000%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "1050000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 12500,
            actualDps: 10416.5,
            magnification: "5000%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "1050000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 24000,
            actualDps: 4260.36,
            magnification: "400%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1050000%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
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
            actualHp: 160000,
            actualAp: 12492,
            actualDps: 23422.48,
            magnification: "400%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "900000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 9000,
            actualDps: 2432.43,
            magnification: "60%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "900000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 16000,
            actualDps: 6857.14,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "900000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "825000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 11110,
            actualDps: 1831.32,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "825000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 10000,
            actualDps: 1538.46,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "825000%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 3200,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "4000%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "750000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAADAwMDAwMDAwMEBAQGBgYGBgYICAgICAgJCQkJCQkNDQ0ODg4ODg4PDw8PDw8aGhobGxscHBwdHR0eHh4kJCQnJycoKCgpKSkyMjI0NDQ6Ojo7Ozs+Pj5CQkJMTExMTExPT09aWlpdXV1jY2NnZ2dsbGxwcHB5eXl6enp9fX2GhoaKioqOjo6Xl5eZmZmhoaGqqqqysrK5ubnGxsbPz8/X19ff39/n5+fu7u739/f8/Pz////YqtfaAAAAQHRSTlMABg0UHCmkITOSPL9GfmtQtF7/4KZze4bDjZryqf7N47b7yuf/6tv/5v/x/+n1//b///b+//7+/v7/////////bqephgAABNNJREFUWIWlV2l3okAQDCheUZT1NmoADYggDOcw9///VzsQ9627q4m68/IheaFruovq6ubl5e7TaN//7LXTHHQb/xW/3E3U/4hvzINopijas2Wo0wAFw958MVCeileMA8a7lZN8GM8loJklL6wI5+vneFRnCWMgZsTpPxdvOEjQFPF00nwmXhk6JReccQ6d1VBTH6axaUIuGCqZYKQI7JXe1x5jonegQkBrU3AhBMNFsltMho+k0Q+Y4NmPH6ACEIJTL/Raj4iyAhDY95D4BGCx+/aQnjqOLIFzVgXXEOQ0eUjRbRN/Xl3dTgkpg3XnkfgXdZXzKliwMgkcxzH1B9WgDCJWv4DEng07nU77YSEYUZWBQNvec634okc1eXD9pKEos7QGyJdPJqCuivolpLMnAdpmLSGeTJ8E6Af0vwAaUga/AJ4xVWV4IHU8T3SlN9K1/oN5aCY891BkaObHZNR6zAway0TKsBbiyVgmsXVcqYrauFsRihFQDusaWNR1SBZGk+G0O+lqdwL0bCR4nLKSCA7GCcMQHIPE3bzp9zGhrWUj8jykPhQsdCtvrcwV5x/GXQDNVUWAgD4Jc577MEO84oOXh/ldHd2YR7WEkIvilPh5+gNUhJLUNu4iUQ5k8mlhHsoA8nAZIi5o7iw7d+XfXgbk7IF+mYUSQNoiR8G6f9f1am8dfd4vhKQwC7FXzQXkTO/zs/bMyRmXDkplFAuLLCRxSKUaZ4170m8MzROWo9CXBxSEgTT3SuCGMXg3dP37CrRlAKtRQEqEYOr7GfBRGGOYp+Btcdh+K8LOOjmz9znJYOjuC1RRwIkLcPCdhprrlIo/Dk33Lip8LBjcl8gdfe0J6jzC+E8AKQQXEBBjYFmpB46DZvN2S0v/wBD9BcBj3yuQ6/n7jVtg/31krm6OiLYJWfo3gIAecDM3JuEG4jCEfp7bt9Y1I2DUL/8GwF68sTKKPCv1AUaE8dK+Ht9YQ/n0PxkQN9vHtPBisPFhDqp3nFwH6DlEYPcKQCgbypP17/fu3pcap9F1CqcJl5z/U4K8W0JU9aPQL/yQoHBxqwJOcje+0FH1Q/1M8heXPiBCeotcd/bW5CqA3GZYtBi75Hc4Y7UlQXdjubXCcEHzfQyvkyj3KWz3jHFeO1cVXoYZl1tu7oHtKGY1KiPAp+X2FoDcAlR9B6V1yoWoBHur4OXe9YtotizOaRV7kDjTWwCZHOKqsY2yLA09L/aB1MUmJdDUKoLrg6zFrHe9qaWMkkpiSmfwOh5bx+jkIp5tQkZlD/YP5yajh5uLqh7JCVj/pjR7Q306XcQMWRZiybIhX1G97Mq12bm55k0TFlx8EigdG5HjGLDCrFxk6EBKURHZ01umpCwL6vQu/p4lJJrYqHTqma4MTcfZrvXOTVNrrEtkX9iFZpfJap6UztmElGano33lqh0Hp/Pf/5cJwO3QLk9zVZHndtyvo84TaF/wIxlIugMrtCaGPptPv10z5adRcbhwTIlHvcUujNPk45ik0fqrkaI2mr2Zkx4u+e07hGVyKlSjqZBT4stPvqlpO6fI1j+fkTtMs60NTiUmlDFGMg9RdOxKBrV2U7361bU8ngJ7ea5S7euDbqv1On5/3x3k2Y3fDx/v49fRqNVqdQf6H8P5Jy7SEZMKG/SwAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 10000,
            actualDps: 8333.2,
            magnification: "4000%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "750000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 18000,
            actualDps: 3195.27,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "750000%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
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
            actualHp: 120000,
            actualAp: 9369,
            actualDps: 17566.86,
            magnification: "300%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "600000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 675000,
            actualAp: 6750,
            actualDps: 1824.32,
            magnification: "45%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "600000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 12000,
            actualDps: 5142.85,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "600000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
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
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "525000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIDAgIDAwMLAQQHBwcPDQ4SDAwgEBIfEhMhFBYhFBUbGRooFxknGhssHiA9FxonISIzISQwJCUrJykrKSpNGx8vKiw1JylVHiNXHiM0MC80MTI2MTNMKSxkHyZfJSs+OTdpJiw/Ozs9PT5zJi0/Pz9jLzRGQUF+LTROS0lMTExRS0uULTZaSj9OTk5WVlZnW1dlX1p1YFKDb2F7cmyNb1imjHecmJXDooa2trbLvbPZ19Xq6ukxEmnfAAAAQHRSTlMAsfPJOd4InHwUJ100Hg1NQGt8jaD9scaT6tXErjH+Uv7P3nXr/tj6Bf///+wc///BMAn+Y+3/lNj+uf/a////U4XR1AAABRxJREFUWIWNV4l2mkAUtY2hAoIgm6COqIxkhgRsSWhIavr/f9U7uAQjS+85Hjky78579y0zDgb/iV/ak/6/axugr97e/rw9PzS/lHvtpe2fj79///752fjW2Pb6pr0dPgR+N75d7lb9BB8f70Azge66Tz0E0u/De1m+l8/Nr0e71c8eimdh/v6qNL9VPOPpZzfF8rUUEUgtDlrWYACKX+0Eqxe48NqcBGDsaqiUDgojYHmRb1v5JdsUX80Ukiwb85CFee5OJloLg+oeSwEUT18oJHM+j5IkY0URxvF80kygucbpSVBcFewkSrIky5I8zXPGks2kWUjVvlTjwxWFZGewTrI8BUGeJlm0aMyl7NZ8e6gFIq9hz+BCSlOAgW5tNikxceu/fgaiighC2IU85ZSGLIE78/EtgW6bV8Gd5NTWIn6YMWzPCXXdCGRxk5Rjz7j+odLCjOFzhCQShEApUbezDXRo8ABq2V+7+uFpOYf9RrUdQrjwYDd+fUnTeNaYibFn3gwcFQ4sDEmzfCI0JDtjXxS52zKBzODrXFDgQLSCnNLIISlPyeP+9aXIzWb7gW7trsWRZlBwrUELXXXgQU75TFvt98sWAtTj9WwaR1BgJrSwfIdyUHBbHuht/SAsvN2qpqRIwUbkRgkcJwwdSoijtlsLGIH/OWGlxbn0R8I+TIuyCO2WmXLGJKDuOUS0UVSJotsVQV6UJfX6zgAjoLutpmuSvtzn8bTaT40Y7B3RTayXYGB4lO7cwHZfDuWx4owNA0JCKKE0WnUMviMUFysdxykPhS/6Q1+EaMckpAAP2eJm5NwyeKhcx0HEuY8cGGIeJQlDJwjmtXI7tb5AVz2C2gfBC7WksR1nggC2iIA6SORDL4U2Qu3znDrEMzfVBMgYBwHnNAzn2qCfQpp8AwUCIT4T4yhjYm/KOUSIp2IFKJarVcehKg/RgQCEEyMFzYxuwFAMGVuLWtaX5s7ft58UcEJBAxwZGPaH7yKElLIwNpWV5XquNemoCcmYYZpmcRgyQkIqwgnFVOEEJeV7rmlonZcKbSYasRroQEhECoU3UAUE8bTvRjKeZ9mFAALCc4xFMVPwDVUXPR2lnO0TsVrMc07xRE7fLG4cqrX4Z+IsO9mjjXhaic8IP3kQZ9PuAETtitzDGh+kP2cVlUhj9ZStO6bSYDCNk9P2wh6DCKgIaHoMIczirsEk2exoHzqVAyIFRw9ARSrOLFl0lIA8Z8I+mKrqNGCigKvAKwIuqEKMyshoJ6iOw9gWh/iDEXw6gJGCeRDOLRUL4razoSLABtOji7qHErg4AC7HViR9kXR6oM9xGp4qZeyn+TGCwLJ8+PJDFguSrKuU9EV0OelHIvdBsNm4QwlkaSr6V16zpLMQppdSlz2UfzDWNA0bKz6nXIx5ZcM2naWoXFI0FF6f5dICSn1haESs+Xy/gWQRToNz0cneicCM5y135q+QA0RtnTdDRqg/FK2y6UjBFcY+TR8vi3U3TzlKWF70HLCfwKWA1O49VppSiKi0XDVvAQmoX7tyTFBILTfdZmgB+ZQQMDDTOir4Fia6z625a6CW2+5XTdBd9IFV+wGS8Mf/TcCg+pPyXtQFV520bP3X0wDD5+m+PrpAUOR+4027EduizOsSQBOcjXn59tz3JxGQJFl5PRze98MaUAecl4dDue0JY6iOfny7uysOh0P6vQ5x7cBlkdx/+zFSO9phWNnf+48vj99vcX9/f3cHhuFp9T+TkM5RIIqFOQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 8332,
            actualDps: 1373.49,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "525000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 7500,
            actualDps: 1153.85,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "525000%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 2400,
            actualAp: 900,
            actualDps: 1687.5,
            magnification: "3000%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "450000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 7500,
            actualDps: 6249.9,
            magnification: "3000%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "450000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 12000,
            actualDps: 2130.18,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "450000%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
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
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "300000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 4500,
            actualDps: 1216.21,
            magnification: "30%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "300000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 8000,
            actualDps: 3428.57,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "300000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "225000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 5555,
            actualDps: 915.66,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "225000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 5000,
            actualDps: 769.23,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "225000%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 960,
            actualAp: 360,
            actualDps: 675.0,
            magnification: "1200%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "150000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3000,
            actualDps: 2499.96,
            magnification: "1200%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "150000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "371",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAFAQEHBAYHBwcHBwcJCAkKCQoNDQwYExgZEhgZFBcjHiElISMqHilVAFUwJC0tKCwuLC04LDVALzk4NTc8MzdVLkk+PT5NPE1MP0tTO1NKRUdWPlBaRlpcSFxYT1NbTVl0QV5eTlxkS2NnSWpiUmBpUmpvUmtuU3BvWGpzW295WXeAYHyBX4SCX4OIZYmIaIiHa4OMZo6QaZSSaZSYbZ2YbZ6Vc4+ic6mggJqlfpiugKm0iqi/pJjTuKjp0r8V3vsEAAAAQHRSTlMACrHI2Zsd/046iGjoJwOi0v0Rwf7p/v9EHzH/2IBrrJL+/jtTvaHmzf9li//0rsCaef/o2P72tv/L/+b+//7/bEHkCgAABS5JREFUWIWdV2t3ojoUlXbqWB9TiQhiKk+VRqPYQDAg2v//r+4OnZl77wep9axVi5Gz2dnnkUOn85W5y01Mvrzrui3zuj4dZ3f7u3l9rqu6XN4L4NV1XcmqOhp3Amzhfz6f6/JOGYx9XYch56J07wMgZQWAMGSnOwHmp6rWO+D3AsSnqjp/fJzVvQCbuuJM1KrK7xORbBHBigsp89FdAO+Xc1VfLlCh2N5DwS0/LvXlAwYcf/59gPgCz/MFEGcR2pPRr+8CeJePmoeMSc5D2zZfn7/pb0x4HTFHm+W8jG1z8k0lR1M7jCJqwUxz0JsC5XslNTDtCACRYwJgMnac6eBbAMaLbUUsopRVZ05Da9x/vtW/+/k5tkPBKHWc6lILu9/9Bvcm8fuWwySjpuVQznh13NxeDsEGH6OxQ6UGQAgsK9olWfl+K4R3JFpCEBAMCloIIy1W60WaerepMCvjTnfiOEKKiDZ54FCx38fd2eC2XBrlm84ACijOnd9Go3x7uLmejP2hUUAISv8i7Bbp5laAzqJ8MR2uuIAjNNSpTNneS+NbAWaZHWoCzKLUMuEPIWk2OxxvDcPo1bIRAgk3asIsxIKyzbw83Igw2yEEQjJTA6AQLE0jWnU3p/ebhCSrSsAq5PEngE4EGu2W5HC6SQZvJ9CLZcXOZ3QTFCTH8XapxJrMT8cbKMQ5nJioRHT5QE8VSlS6MVYim3feT1/Hkuyl4hEXNbNRhueLVJLjcKpCLrfELb+kQLYCAAwSRJYd4r+U0obhjFWgsPlShVkmlRJwFMw00dNsfNU1jXJQcg0K7+3+bioUODPGRaRbwTQolOI6GylXMovJoX3WwGGmQAB1zGXz3NUSAIJ+Aii5J5v2UWGZ4S4JsmDgIP7Un2VYYICKmNIU4rLtiCLHTwJgzYXuJDSYQxOJ0wHNFT/JrVu2qbgppCbQAPBGOX+ea00iXDKJH/P5vgXALf8QUBGHhniq7+Z6CZ2FJjtcFcugZQubCr4NAcF0O3XYznfTBpNqBL2Hw+I6gHtUfwgITRqh/wvQyIgIq3JwPRXjk36EzgOcxxRJEKnEd/fNotBNJQL26fr59utQfxKQSqAdmxae+NYAaF2Rl44ORH29mjAUagBEAMWEZki5VP7aXevFHVJLpwWX9fVUdn/voNjJSDcztAS1XrkHrO6SIpHNptoA4pNodvCWZ1OLRhEui4XfMMhWhS91ZuGobgNAoHdKBvnbEILxHQCCVSNivs4WhXrVm6iuaxCf3qRMVLbMcGfEpJ+BwZpogP0iR5VscVrQ4vqrQ3xaF8VKpfMcO6A8m6Vg8BnG7QKrxbIHgOR6Hs1P2zxbo1wSHTCRki0AApLq/F1sSZ7Nl5HpTK7nESm369zLlu4rFGBi24mLAmEEQD4KliRNySYZ268to9phv0xn+ZxgtoGEyw5JpR/oYlobC5fgbPW8vh0OrgPE6WgxCtznYThJeILG4xVvuh9ks27vl7t2Oz3im9y/3tLIet41nrtPYdIL2Irod7YkiLPdgRhGp6tni9niJUxahoyZptebikl3nvhaLC/xvbfVX92NHhnYon8dQA94xkPI+zgeNYMOCd587z9vnUbnechf2we+5yGdgqT36mmErr/4f9i6Y8dqkbHTTGcAMEaL1awLC4LuHzMMLQUAXtr8jSdME09PDw+Pw+l4/OPHcPrjtz0+Pj48PD0NHWfSuoNHTCQ/YXq4wKSOv5//N9N8bGXw3Bv0nybD4XD6r+HbsOEACv1B778i/gNFmPBhF0c0pgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 6000,
            actualDps: 1065.09,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "150000%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
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
            actualHp: 40000,
            actualAp: 3123,
            actualDps: 5855.62,
            magnification: "100%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "60000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "372",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIHBgYHBwcJCAgLCwsLCwoRERESEhETExMVFBQWFRUWFhUaGhobGhoeGxsgIB8gIB8jIiIlJCQmJSQmJiUtKyouLSwvLi0xMC81MCg2NTQ3NTM3NjU6OThAPz5EQ0JFRUROSEJNTEtPTk1eVURcW1pnYlVmY2BpZWNoZ2Z1aWKCeVyMhHiOg3eikoKonoWroZK0po+6sJbBsaPLwLDVxqfgzqXU09Lp2bfh4OH04rTv7ev4+PiPtpYVAAAAQHRSTlMABQ3iHRU1yig/V0uLaO57lwyjs7/44Mwn1//mE/RluP7//+6dyv9A/mWJw//sftr+/+2J/+D+//L9//7/////znyY+gAAA1RJREFUWIWdl2tzojAUhsEVV7kUL4AKojmxTWO1Cl0URcX//6/2JNbtftjpkhxndMYxj2/ec1PD+CYmq+32dfDdJ76P1/3pfD5uZ7rnZ7vTFeO01dUgBCDivH/VBMzzoijKU3mc6yrYZXmW5/nHHwWmqQSYrYvzqczenx8uDlYrNQnz7FrXx5X1OP+226kBJrvyev71J4uzXfahdL63KA6Hd8+yPm/++nHYKxwf2AFk53KznI6d+zur8rhtfNx0gpSxrEQCZQvpwmx9WjcvSmtMGaeb8nzOKV3aLUNYWqyt/x58RCfhjCKgOpccYOmbxmzM+HPjOmj1gVOgm6quqgwIe+kYdkqjTnMBEWMgALf6UlAC/KW3oMRXEEA5ECoAt0vJY0JZQiDqNhbgpJxNkwdgk44J4MNtLKAdMJ44Q3mFW1XlfD4iAM0daA2Bp57pM76pLnV1OfC3dkAUBPRS4NO24XIur1CXfG113VFzB9oB8GXP7G8YprFGDZtl1zBbjc+jhCnli/aQYSFdLtWlyl6aV6AM004o9+2AZaIOLnW9n6gBBIEt/flHfbvdauFD8y78IvDNe1EhoT7g0155spveMj9dT+LbRSqO6pO99bw7Xgs0oYQCVWishsHkLWOMF3nMM5466gDD8IFiR1JCsA88HYCLDUBIGsaAnaxx3hzFFEjcHwuODqAVCEDqIYBqXcEaowc06uEL1TKxPRUWBt0xpTRp3op/ASIEgGsJAHa3enQTAEgdCQhUmvkRnUR8dVcAYKj2w+AevRQBQxMBADpZxNEMogKFAr1CxFVEkw4mg0La0wF4uFnGFiZDcjTCxxJG87oIUNhJX9Ea4TZC8yYJaJcBSW25JWCsOJVleCkhWMGDPtC4+VL6CnMIQKQFAKGtIUBkDzD9Tkj0koDmg2hiL9b0EL0TFhhuLKtBPZxP83Ew0pHOHwb7XkYSoNWLHrn3oE9wqGicRwCRLfQAqYbZv3uIV6FaAAuHucyegwWpA2hHBOQgxLmkBehGJJbm42QkC406sFH5SCjwYq2tYPYJoYH1CUjVm8kcxjGRHvhiN4+U14IVxHEof5z7YRjHkddVQpgtLxSADoYrAHEYuVbzem7Z7s+nMHz6IeNJRvTTtf8t4jdi9XJ/iChyqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1500000,
            ap: 15000,
            dps: 4054.05,
            speed: 6,
            range: 600,
            rangeType: "範囲",
            kbLevel: 8,
            money: 4000,
            freq: 111,
            foreswing: 64,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 3000,
            actualDps: 810.81,
            magnification: "20%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "60000%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [64, 68, 74]
            },
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 1100]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 320,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "400%",
            count: "8",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "36000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 16000,
            actualAp: 1000,
            actualDps: 833.32,
            magnification: "400%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "36000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "368",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 8000,
            dps: 3428.57,
            speed: 36,
            range: 300,
            rangeType: "範囲",
            kbLevel: 8,
            money: 1500,
            freq: 70,
            foreswing: 15,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 2400,
            actualDps: 1028.57,
            magnification: "30%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "36000%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "18000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "369",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEJAAEkAQIhBAQJDhw0BQUPEyAvCAgTFBg6Bwg/BgYSGSsUGysVGytICAhJCQhKCQhOCwpHERI1GCUcIjQcIjQcIzZNEhUaJEAbJT1mCwseKkkeKkgoKTZwEhIlLk0jME8rMUM2MichNWIuNkwtO1wmPXGCICAxPl46QFIyQ2tZPztWSEVATm+COjprS0tYYHF4YVxsaWtuamh0dHRzdXmEh4qrkX+VnqS2l4CjrLLQr5n///8a77oVAAAAQHRSTlMABcG0DRQmHkcqMRBqVH1YQMyqmb2C/JCjaey62PrH9SXa/+SLC/6u1//58MT/QmT/re78yo2o7P/+/vzh//4AH84EGgAAAxpJREFUWIXtltt2okAQRekRL4gXFBEQBAXt2MEWBrzQGp3//6upjknUiKadebUeXEuFzani1AHpz3+W9AQ8AU/AE/AEnAC3ClUVRb35789Vbblu6LTlfzsbIantY0Kw96AGpE0mthav1quRFiVZns1GjwFUjxISZbv9fql52ZYdlgIAuV75anQ0oyA8Y/s9SyN2OBxWAi3IjU6vUUcfABI6YcR2O8ZyDoiRgG5U0wdj4x0xnWFTVew0z7OMse2WLdfxVAAh1/TxWK/LUnUWaXAH3QAnvHLoZbcQAICKSqM37jYrHKC2/ACTLElownaiAKhyszvuRMl6avsBADABQs7YZiQK4PdDTw/biUsCIEARHGU5i8UB0MnqLR/0fR9zQIDdNvji5SEzqovY6g/6XEEQuBpqhyRqPwIAES3X6vc5IrSRhOyIzrTHCLZnBRQQfZNrV1uYeNWHAHLLDWhCg0FH5+ZSQoIfbELzCU2yzKvpPb1WRi0fmyKG/irVwpQCItK4u8Bcph8+NAUlpJSCCaijgLsa3Z7hBPOFyEYcC7UwTcBK8DkHglSu6Z0+exM2NGwSl2/5ASHJ0UNyvZvmIslyrLYPS+BULd4EbX3ExHqT9hoVsVGafBFtqepgaOJzetNF3Ox2jLpARqsOnDcD5ygO7CM9WwQIjU639iMCfJPQCRcLXRB6sQiobkD6le+ej0zIIm90FAPd0PnFLnJn9Iz6nWG0XUyiT9twR0TfPQS509Gbt6aheOAh8/OisMy4YJlhGINBzyhKW9Uip8nz7w6lk4LrwJNgOHz9vbiKGu6ByD51OAoJNQulVoxhAaLqgXess+7glhCreGJyUx8PX9PV6PxHG9bQOQ8PDni5NXJUBka6PFsS1SEJ38ALSWR+J1NRpWkYp6/wQJ8plwdAnok/4JF1HcCKS66McLPANtZ3uWBMYguer1rXrnvPx4lgICouDUdFsu5N8aymkywrOBQAoTaVBEQsNowViF1kFG9Wq0u/FApYwWtNjJD8reIdvOrsdj8/41UzzaKSVYL6dapSyc2gNql5J4j+AthMrTayBzljAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 5000,
            dps: 769.23,
            speed: 10,
            range: 550,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1600,
            freq: 195,
            foreswing: 44,
            backswing: 32,
            tba: 76
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 1500,
            actualDps: 230.77,
            magnification: "30%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "18000%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 500,
            actualDps: 416.66,
            magnification: "200%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "6000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "370",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIDAgIDAwMLAQQHBwcPDQ4SDAwgEBIfEhMhFBYhFBUbGRooFxknGhssHiA9FxonISIzISQwJCUrJykrKSpNGx8vKiw1JylVHiNXHiM0MC80MTI2MTNMKSxkHyZfJSs+OTdpJiw/Ozs9PT5zJi0/Pz9jLzRGQUF+LTROS0lMTExRS0uULTZaSj9OTk5WVlZnW1dlX1p1YFKDb2F7cmyNb1imjHecmJXDooa2trbLvbPZ19Xq6ukxEmnfAAAAQHRSTlMAsfPJOd4InHwUJ100Hg1NQGt8jaD9scaT6tXErjH+Uv7P3nXr/tj6Bf///+wc///BMAn+Y+3/lNj+uf/a////U4XR1AAABRxJREFUWIWNV4l2mkAUtY2hAoIgm6COqIxkhgRsSWhIavr/f9U7uAQjS+85Hjky78579y0zDgb/iV/ak/6/axugr97e/rw9PzS/lHvtpe2fj79///752fjW2Pb6pr0dPgR+N75d7lb9BB8f70Azge66Tz0E0u/De1m+l8/Nr0e71c8eimdh/v6qNL9VPOPpZzfF8rUUEUgtDlrWYACKX+0Eqxe48NqcBGDsaqiUDgojYHmRb1v5JdsUX80Ukiwb85CFee5OJloLg+oeSwEUT18oJHM+j5IkY0URxvF80kygucbpSVBcFewkSrIky5I8zXPGks2kWUjVvlTjwxWFZGewTrI8BUGeJlm0aMyl7NZ8e6gFIq9hz+BCSlOAgW5tNikxceu/fgaiighC2IU85ZSGLIE78/EtgW6bV8Gd5NTWIn6YMWzPCXXdCGRxk5Rjz7j+odLCjOFzhCQShEApUbezDXRo8ABq2V+7+uFpOYf9RrUdQrjwYDd+fUnTeNaYibFn3gwcFQ4sDEmzfCI0JDtjXxS52zKBzODrXFDgQLSCnNLIISlPyeP+9aXIzWb7gW7trsWRZlBwrUELXXXgQU75TFvt98sWAtTj9WwaR1BgJrSwfIdyUHBbHuht/SAsvN2qpqRIwUbkRgkcJwwdSoijtlsLGIH/OWGlxbn0R8I+TIuyCO2WmXLGJKDuOUS0UVSJotsVQV6UJfX6zgAjoLutpmuSvtzn8bTaT40Y7B3RTayXYGB4lO7cwHZfDuWx4owNA0JCKKE0WnUMviMUFysdxykPhS/6Q1+EaMckpAAP2eJm5NwyeKhcx0HEuY8cGGIeJQlDJwjmtXI7tb5AVz2C2gfBC7WksR1nggC2iIA6SORDL4U2Qu3znDrEMzfVBMgYBwHnNAzn2qCfQpp8AwUCIT4T4yhjYm/KOUSIp2IFKJarVcehKg/RgQCEEyMFzYxuwFAMGVuLWtaX5s7ft58UcEJBAxwZGPaH7yKElLIwNpWV5XquNemoCcmYYZpmcRgyQkIqwgnFVOEEJeV7rmlonZcKbSYasRroQEhECoU3UAUE8bTvRjKeZ9mFAALCc4xFMVPwDVUXPR2lnO0TsVrMc07xRE7fLG4cqrX4Z+IsO9mjjXhaic8IP3kQZ9PuAETtitzDGh+kP2cVlUhj9ZStO6bSYDCNk9P2wh6DCKgIaHoMIczirsEk2exoHzqVAyIFRw9ARSrOLFl0lIA8Z8I+mKrqNGCigKvAKwIuqEKMyshoJ6iOw9gWh/iDEXw6gJGCeRDOLRUL4razoSLABtOji7qHErg4AC7HViR9kXR6oM9xGp4qZeyn+TGCwLJ8+PJDFguSrKuU9EV0OelHIvdBsNm4QwlkaSr6V16zpLMQppdSlz2UfzDWNA0bKz6nXIx5ZcM2naWoXFI0FF6f5dICSn1haESs+Xy/gWQRToNz0cneicCM5y135q+QA0RtnTdDRqg/FK2y6UjBFcY+TR8vi3U3TzlKWF70HLCfwKWA1O49VppSiKi0XDVvAQmoX7tyTFBILTfdZmgB+ZQQMDDTOir4Fia6z625a6CW2+5XTdBd9IFV+wGS8Mf/TcCg+pPyXtQFV520bP3X0wDD5+m+PrpAUOR+4027EduizOsSQBOcjXn59tz3JxGQJFl5PRze98MaUAecl4dDue0JY6iOfny7uysOh0P6vQ5x7cBlkdx/+zFSO9phWNnf+48vj99vcX9/f3cHhuFp9T+TkM5RIIqFOQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 5555,
            dps: 915.66,
            speed: 9,
            range: 550,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1800,
            freq: 182,
            foreswing: 65,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 277,
            actualDps: 45.78,
            magnification: "5%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "6000%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            }
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "5",
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
          enemyId: "371",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1065.09,
            speed: 10,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1500,
            freq: 169,
            foreswing: 40,
            backswing: 49,
            tba: 65
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 180,
            actualDps: 31.95,
            magnification: "3%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "1000%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "0",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e11006Data;

