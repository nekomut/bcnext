// Stage 1165 Data
import type { StageData } from '../../app/stage/types';

export const e1165Data: StageData = {
  eventId: 1165,
  eventName: "続・禁断の花嫁",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 165,
  stages: [
    {
      stageId: 0,
      stageName: "現れた元カレ",
      baseHp: 240000,
      width: 4500,
      enemyLimit: 10,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 2700,
            actualAp: 450,
            actualDps: 329.28,
            magnification: "300%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "169",
          enemyName: "カーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgICAgICAgIDAwMFBQUGBgcGBgYHCAgHCAkJCwwKDA0KDg4MDw8OEBAOFBMPFBQTExMQFhURGBcXHRwcKCceLConLS0mNjUlOTYtR0M0REJBQUE1T00+UE1BY19EaGNXX19RdXJpa2tgcnJWf3xYhIFdjId+fn5jl5Jmm5WVlZVuqKFzr6mkpKR8v7exsbGEycKJ0srCwsKO29KU5NvR0dGa7uSg9+yh/u7q6ur9/f3///+VQLrfAAAAQHRSTlMACA4YJ8r/MEfVPHKzlVLgZIagff/NwJCv5f/MwO7+rtn+3/7//v/n//f//vb//v3+/v7+//////////////8AAbVDUQAABD1JREFUWIXtltt2okoQhgPiIaIGBQHBEKEB5YzNURpm3v+tdgNG1Ew8TG72xfwrF8kK9fXfVd1V/fL7h3r5B/gH+H8AHhdJ9Z74+qsIhmfJnwCGsrcZ/wTAvOcuS/x9PDG3EBR/kAVyEZTZZvj3gJ4Iy2I7eyKCGI/Pkz7aZCWy6CeSMJZlpiOQUwuVJVw8XkhScOFm9rkgwWzisiyzNfUwgJJjBOXRkcZsIDbwVBJmWlGiQKxXJIfsNisbhcLDhWS2qETFlu31ZouNm6MWkGvMo1lgLISDMm0qal52DMdKNGH8fSUIsodFkvgLggZFHRArRt6F1x5ceTYcU3/yQY5oQeR5URBYhmFlJawJCNpZeSEUaKuVzFJ4MeqCMxQ2VgixQs913QAGYBfGOJF5cQkoc1tVlfe1OJksl2yX0/Hayi68oswzvJP9s395Kkw84AUKCEKNPq0vetcr4SIcw4o46wjItgsYBx708qII+c/9C1aBrgGnEE8CefcnDGNJspMi91QjlI+A+qp8K2Rz4KwUqMgUTgqQx3GGK34aCL5dHysPk0sitAHIgGKHm+PRHt8y8EdTeYwTU1hCW8fewr1l4HuMNW9OJclu8/tfH2PwAUen1cKmSRIzLXwAgBKYFAVqVOR5EscwNBY1gFoHxv0UFJ5u6sDY1TIMAyi6aeqTuskSrBWCuw5QYKZVqvt7LFOP0kiNqmrfpIBaxxB8OYXXSvT016/KxFFV5Ts4dmXuo7YIuPWE9wAI2U6FAQ72jZ2b6WFDs4Iwr1sDtQAWUO85yFWzivxDdUixIid1WJIgyKaGw/mUnb7fywE+/b7C6dgFVuSn625EEbgBjTe3AXgHHKdzAy6q4ysn8oXLtnYPgHcwkEwM8GvAQU+3zGUzG2l3chBLDWDg1IDUSWXqOQC+uYMB/mkBkbMXyOcABRg04vY1YO849GX83RxkUgtQDjXA978MOEq+fRcSiWsM+E0Z9/52dAXoreObAMi1O3B8B2sfbZlmAHUAEr8+binAFZR0x1Qd3/d1/RDJHx8fIt0RCMG9A5CctKoc54BlKg6+lYfUX3dDhaAtdKunZUCPfGxA1bFURVElFTcH/uww3KkjyoOd7cGsVYKHXy0w7/bQleEbI+gPYyeRuxvVO2axwPPj4f6ca93Ll5i7TRIyEFztpctNh277Mn7/nD13ZlpzFoudBOA5AkHYfBzHTT9uiG1fji35/DxSa9hmy1MkEMRJlmPhdHlq0+1QCIBh2V4QBp7t2Za11dbzi6cObs2tQZSBCa+AVsqqP1klteUi85bTlbEzdrZtA56ZjXtXL6XTfUKWwBoJHhtYYDoaiUHrORRH67Bo5F7f5pceNRzxVtBKfe1L3vHXt37/TW1myU59m7ypVqP36XhInTsgRwxNTyc8zy+Xy9fXfr//+tbq9aR+K56fLBZTlqaZ0dHFf5saXk3KBZWoAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 200,
            dps: 181.82,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 2,
            money: 350,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 13
          },
          stageStats: {
            actualHp: 21000,
            actualAp: 600,
            actualDps: 545.46,
            magnification: "300%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
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
            actualHp: 53331,
            actualAp: 2331,
            actualDps: 794.67,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "411",
          enemyName: "ゴリ男氏",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 200000,
            ap: 2025,
            dps: 3796.88,
            speed: 15,
            range: 225,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1800,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 2025,
            actualDps: 3796.88,
            magnification: "100%",
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
      stageName: "今カレの焦り",
      baseHp: 300000,
      width: 4800,
      enemyLimit: 10,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "45",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "039",
          enemyName: "ナマルケモルル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkKCgoLCwsYGBgcHBwdHR0eHh4fHx8hISEiIiIpKSkqKiovLy8xMTEzMzM3Nzc4ODhBQUFHR0dPT09PT09ZWVlbW1tiYmJlZWVycnJ0dHR3d3d/f3+JiYmRkZGhoaGlpaWqqqq2trbExMTOzs7Y2Njg4ODl5eXr6+vw8PD29vb6+vr///////9GLDfdAAAAQHRSTlMABArdEX8cpf5WvNLn9TlJIy6RcGQ89HSbh0q37GH/0Hj0h/6V0P67qP7P/9Hk/9///+////7+/////////wD/E2hCfAAAAvRJREFUWIXtVFlz2jAYxA736UAghMMETA3CxJawTkuq//+/qmTSBtN22kxf+uB98Hg82v12V5JrX/8RtUqgEqgEKoFKoBKoBCqBSuB/FPgMnLo3HI6GXv1TrO+oT9f7w/nN4HR8ndadT9LdxTEhXCqttVKCXg6vj+5n+N7+InT+AS1Jsnv8OxeOt1g8HcgtvYCi5/WfTThOfX26XC6sTNY61yLLkvVvPDiu6zoGzfXL/pAIztn9eKk4jDE/T39Fd6evx+N+v3vdHS6IMiwQond8ijgXPEV0//OOOtN9QoQUjBKCuc4JYxDLcgM8DEMfEIlZsrjnN58Tdl2tFU6zXFPFuborAPoh8NtAKRK93PEfl/DHNElNdG007urLZUylpDHW5rm8i/8cy/I0Rm/45lUZNxzpDDGUMgDYqSwwTT4GalOAprG4pQv0dr5wnmqK0ziM/TZ6Kws8p8byu1Nlzg6D9J1qn1IkL0NvcUyRSDNNIUGz6Et5B3aUk+sxk0ZASRzbRrS+lkrg3O5acw9IapZRLMJgXhLwzhJft5xjE0GkEbSx6TWGRkuvWFZ/AQRibiyA3rBU4S7OYFoszpAkkkUhs5VFVwEK5ourgtv5AiHEAq86pbPcHG9gim1iLSFDDIbGAI0LG1rIOCaXpVcwHG+yOSXn5ejmNjneaDLurkBUtKghhiQCIhcxE9Ly4wjJXIatybAgOU3PK/2Z6s+bbWAAASoqw1GUQmJyp1pyjCAI7YZmYRCs5l7tJ7heY+X7IIoARBG2Z5cFAUAq5xFCJi2hBAHCMwFWq+225Tm30R232Zmb8X5Alc5YajITmbMQ2AYzjIkoroIMfT8I/UG/Pxh0x43JU8f8XG0ar9Hqraz5ILymV8pmSNttH9GbW2Td++0PDAb9h27rqV57HPcGs4H95GMz3/pljJHQfplFEBJ7r6l17xuUFXrdhunRHXVGnUlj3OpuTpveQ7+/MpgNvmNWYLsNt8a9wUOv1+22WiaEzeDUvgHfiBulYfASJAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 563.38,
            speed: 2,
            range: 450,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 426,
            foreswing: 27,
            backswing: 49,
            tba: 200
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 16000,
            actualDps: 1126.76,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 800,
            actualAp: 300,
            actualDps: 562.5,
            magnification: "1000%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "040",
          enemyName: "ナカイくん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 4547,
            dps: 3327.07,
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
            actualHp: 180000,
            actualAp: 9094,
            actualDps: 6654.14,
            magnification: "200%",
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 800,
            actualDps: 1500.0,
            magnification: "1000%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "10.0-23.3s",
            delayFrames: "300-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "411",
          enemyName: "ゴリ男氏",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 200000,
            ap: 2025,
            dps: 3796.88,
            speed: 15,
            range: 225,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1800,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 260000,
            actualAp: 2632,
            actualDps: 4935.94,
            magnification: "130%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
      stageId: 2,
      stageName: "親族の場外乱闘",
      baseHp: 380000,
      width: 5800,
      enemyLimit: 7,
      requiredCost: 210,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "5",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "60",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 175000,
            actualAp: 6497,
            actualDps: 8474.35,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "411",
          enemyName: "ゴリ男氏",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 200000,
            ap: 2025,
            dps: 3796.88,
            speed: 15,
            range: 225,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1800,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 5062,
            actualDps: 9492.2,
            magnification: "250%",
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
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "1500%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
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
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "99%",
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "99%",
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.3s",
            delayFrames: "2-10f",
            baseHpRatio: "99%",
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "1500%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "087",
          enemyName: "ゴリ婿",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 170000,
            ap: 2525,
            dps: 4734.38,
            speed: 10,
            range: 175,
            rangeType: "範囲",
            kbLevel: 7,
            money: 1789,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 850000,
            actualAp: 12625,
            actualDps: 23671.9,
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
      stageId: 3,
      stageName: "ダブルプロポーズ",
      baseHp: 420000,
      width: 6000,
      enemyLimit: 10,
      requiredCost: 250,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "10",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "75",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "183",
          enemyName: "サイバーX",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 120000,
            ap: 2200,
            dps: 4125.0,
            speed: 4,
            range: 60,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 5500,
            actualDps: 10312.5,
            magnification: "250%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "26.7-36.7s",
            delayFrames: "800-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "167",
          enemyName: "エイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 900,
            ap: 150,
            dps: 109.76,
            speed: 8,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 90,
            freq: 41,
            foreswing: 8,
            backswing: 10,
            tba: 17
          },
          stageStats: {
            actualHp: 5400,
            actualAp: 900,
            actualDps: 658.56,
            magnification: "600%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "184",
          enemyName: "プドール夫人",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 4500,
            ap: 3750,
            dps: 2743.9,
            speed: 15,
            range: 160,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 11250,
            actualAp: 9375,
            actualDps: 6859.75,
            magnification: "250%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 1800,
            actualDps: 1102.02,
            magnification: "600%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "411",
          enemyName: "ゴリ男氏",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgICAgIDAwMEBAQFBQUFBgYGBgcGBwcHBwcLDA0NDg8UGBoZGhsZJS0kJSckLS8iMTYlNDwnOT8oPUM6NzgXTXc7U1pGUlRJV1hbWFUWa6pQZGRIbXZpaGZWdHYZidtWfX1eenpciI19f32HhYNklpeLiYl3m5twoqOTl5SipKB7tbXahranpZ6Dw8KxsrCKz8y/vrmQ2Naz09fOy8WW49+d7ufb2NCh9u6i/PDl4dnr59/v6+H28/DEaIGgAAAAQHRSTlMAowuC4dGQt2vyHFg5JUhoWX3pmf6xMP7/wev/+pb//8f+//D//6///+z//////+7+/v7+////////////////c8w7VQAABUVJREFUWIWlV4t2ojAQbekbrS+0RayACIJAagJpeOP//9VOoFZB7bJn5/TQWpjLvXcmk3hz0z1E8R8evhR3T/+HIMyMsfB/AHTd+4fn+/1zgGDWXYQwm7cRxjhD4+4Ac9xG6LlZrLdRrwNIFM+aT/fXUfwPIkYoO0EQB+OlvjZNdz3sWolXPc3QtwpxrG+DKE3TGJuTQUcA0JBltQ/9OYrTrI4UzbsijLZZWiEMdJqdBO1qpDiP4PFg/qxHWSPovKORQwQUskBxs1Z07QZRj/nj2MAtgFjvSmGbcg5YDbK0SWHYDUAYr2mFYNAmhWjWsRmEnlKlYrfJINVfuwHc9CdmCrlp3ATorkFCaot9zSA+W6pXCKxj2/55ecrJQDLlxZ13ESFIQRaZLiyCugpRVdbYDeIsNTsMJ2G0howY2aZd9yIGOXFEDdM1DeXvAMJw67sRZ06DuFJg08iWp1PZNKZT+6/dKEqKRUIPxcfqq6788vJigCSMor8tCFHSLEuziO8G3w5kKcZInZoYpeAD2v5eSeFR0XgsNM9xawfSuoCRIZsRdTH5lYIwVLTFYgH5cLGsWkf89ZXyUgRGkOL4a/vbYBms85x5HGNRAZkI06/Pz884o7huCWiFX2x81ZMSIg+dRYXh+CQkjkO+wD7oarhiELO8buCMlXUUSehoXv0pcdw4i6vOjrAJMPpVA8a78hBFzpLi8KeHspgvqxiqEaTXAXrr/AhQlCdgXvX+QJUhDHoNoD9n5ZUI+VwIVIQRpaoqXREgkYvJnEpuB1Fs4JS6LqXXdpjeumgmFnU6/114tmrYKZrKU/VaL4ttAXlRoRR5BYANI8qQG0UUXT6uCGPSJFAyxtnnOadQ+NFhvNArM2nQEgCd4EFuyMo8AQgv5ksCeuDs8PAjIKkJnyD4pOQgwAQkRNWMpbZ0ZaINSdkGKJmT+2FZEu4NMVTThTX9Ll12sL8t91zvaT7wDoFE7vN/JupqtXqfvq9WF6eBsAQBedLIh/4LPeKVrOZmcoCPj4/Vxb1ptLuUX5aO59QKytL/AIB3YHAJgDuYJ0Uzv8j3+1CzagVgiLp6t7zJx8elYQAEmvIrgP2+SHyrVgB8DNnJc2U4vGAiOFCc5cP7izIJLXLoT8+DRy5Ps8GuPH8/vyaOY3mHW6HPL6NrJWimwmXPdcN89w83Eh+6JLk0zQbb03dXS+fbz4IxLfzR5ENZis15Dd70I4ECXgqu/ziSk8XPzcLnf+7OOvltc9QPrjnYJXU+85Iy0bQjN8LJkLYJTQMSJ4DNy68mo2eR0let482QF5S122AUnuQzfq5LY1T1DnMYU1XtWB7G/UyWTRNe9cPohh+iTGBo81MxcOCzxFJl7difjDdCG2DM6mQYH8SazBTbRjB6UgT6YQbIJrYOgz5nlgfLy5KEcwKwhxBHs9ZKEMOx3kUBjTEgkIUaRYYfsiRJmO85sM95ntf0YAS+JDtd0SzH383W9VEqohS2UhfyMTgq80TYIZPSd1i+b5oIJch3y4EoOZ5Plq9StZlHOOCj15zKLsaurSUe2/NIfLYv2KaxGEQ92QxA09ji+TfiEL5fwCaIbFW1EVKksYSoQfwwJMS3ZCDiKs2J+rrdvFVKLLKpOgy+4fAzMszOAHaypdDfYhxA0CgwXRpF29b3pv78rbZiu/nuUKGv89NkRk34tR2Iy+orD1hrY7joo9ZK6NdHPmE8f+49P9/d3T0+Pt5ODBdhLE8N13i4fZrIhm0b8Mk2lNlzX2wiCPVH4fnx9unp4eH+/v7lcsCdh4enp9u73hHgD0BKpTs6Mdr1AAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 200000,
            ap: 2025,
            dps: 3796.88,
            speed: 15,
            range: 225,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1800,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 9112,
            actualDps: 17085.96,
            magnification: "450%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "177",
          enemyName: "イノヴァルカン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 160000,
            ap: 1799,
            dps: 3174.71,
            speed: 9,
            range: 125,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1800,
            freq: 17,
            foreswing: 8,
            backswing: 3,
            tba: 5
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 4497,
            actualDps: 7936.77,
            magnification: "250%",
            count: "1",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
      stageId: 4,
      stageName: "私を異星に連れてって",
      baseHp: 470000,
      width: 5800,
      enemyLimit: 10,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "30",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 1440,
            actualDps: 2700.0,
            magnification: "1800%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
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
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 1440,
            actualDps: 2700.0,
            magnification: "1800%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-16.7s",
            delayFrames: "100-500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "172",
          enemyName: "デカメガネル",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 20000,
            ap: 800,
            dps: 750.0,
            speed: 18,
            range: 249,
            rangeType: "単体",
            kbLevel: 7,
            money: 250,
            freq: 32,
            foreswing: 9,
            backswing: 6,
            tba: 12
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 8000,
            actualDps: 7500.0,
            magnification: "1000%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "182",
          enemyName: "ハサミーマン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 24000,
            ap: 2800,
            dps: 1647.06,
            speed: 24,
            range: 199,
            rangeType: "範囲",
            kbLevel: 3,
            money: 700,
            freq: 51,
            foreswing: 12,
            backswing: 39,
            tba: 1
          },
          stageStats: {
            actualHp: 144000,
            actualAp: 16800,
            actualDps: 9882.36,
            magnification: "600%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "087",
          enemyName: "ゴリ婿",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 170000,
            ap: 2525,
            dps: 4734.38,
            speed: 10,
            range: 175,
            rangeType: "範囲",
            kbLevel: 7,
            money: 1789,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1020000,
            actualAp: 15150,
            actualDps: 28406.28,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "411",
          enemyName: "ゴリ男氏",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 200000,
            ap: 2025,
            dps: 3796.88,
            speed: 15,
            range: 225,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1800,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1900000,
            actualAp: 19237,
            actualDps: 36070.36,
            magnification: "950%",
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

export default e1165Data;

