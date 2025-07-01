// Stage 1058 Data
import type { StageData } from '../../app/stage/types';

export const e1058Data: StageData = {
  eventId: 1058,
  eventName: "開眼のスカート襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 58,
  stages: [
    {
      stageId: 0,
      stageName: "スカート進化への道 超上級",
      baseHp: 770000,
      width: 4800,
      enemyLimit: 12,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10024",
          treasureName: "ねこななふんへの進化権(ネコスカートの第3形態)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
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
            actualHp: 13000,
            actualAp: 1550,
            actualDps: 1134.15,
            magnification: "100%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 13000,
            actualAp: 1550,
            actualDps: 1134.15,
            magnification: "100%",
            count: "0",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "8.0-13.3s",
            delayFrames: "240-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMEBAQFBQUFBQUGBgYVFRUWFhYWFhYWFhYgICAhISEhISEqKioqKiotLS0uLi41NTVFRUVISEhMTExOTk5QUFBcXFxjY2Nubm5xcXF7e3uGhoaGhoaTk5Obm5ufn5+pqam1tbW/v7/Nzc3Pz8/b29vk5OTt7e329vb7+/v///////+Zqh1dAAAAQHRSTlMAAgUJDREiTFZtvBU1XoeuQXqRyysb2+xlRg85e5Na8gbJdISk4UePrdP7wd3//eL//f/r/v3+/+3//////wD/pHXpBAAAA+9JREFUWIWtlm13sjgQhiWBoAUVFbqi1m5tXV9BiJBsSLL8/3/1TNA9+2U/EHfntFU5zsU99wyTDv76jzH4/wGDf8IJk8cb7D6vWALwfIPNK1qOnZcA7vG6Nq/r0zd6CRBc+DFN1+tjfXgJ4MQnye73+y1nR/wCAKWXWmkTsrlusTUAbW+NalsltW6VuO+wLSC9yRaC57LVlMr71rEDeEdh8lvJZdNwrptLYgdIbyDdhBJ5LoTW960VIPihqgWCVhXPzmWpW25moT8g3ReV8UDrOitoJlrNflYWAPRNi7xkUulWV5TWWvP8lFgA8LERVZ6XOeWNyAtW0+y8sykBH2WrOGRVDATQitfnU2xjIijoDDxzrRopdSvKA7YC/HDjoKKPYWhbkW2tJhF9s0cLGvkE7FO7Ud7eTZquxRPAP2M7QNQNIgDEYx7ZF7EDxFfVKWi46gDV1LUDBBf5BHQ1aLpBdgB8EMbEqhFdH3SZWi4UZ9e1oWokN17o+x+2G8kvzTKrhOIPM6wBnYsA0MYE3f5pDfC6Ya5EK2GlvQIwJphJ7AZSaXuA2WmmjWaOlJT2HgwSmARYJhUTgtHrAbaJY3kumOep4UVW16z8WDnWgEF6B/M0Ne0st7+/ADA1gAsFbOdbipFjAXj8M4C6YQSAltcQA6E3wHGcZx+UVgWVih+TlQUA8pF59JxlLgXPKs6v25VrBwDBUMJHrQQvKKNfCbIBAAG7yGxmOI9kRUX5vUIYgy4LgIf/Xu2slNADKMr89AWgB+Bg9qEoxIVAtjOwB+zgSGybgh1WCFkCXANAMIpgQlHuoIfItAbZAOCOsXmcZH5auy6GvhgZ/QAIAwDKDr45nG7Z3MMuBoYNoPs+dtdwuuibD7d3Pc9o6DlICCMXCK5HTk2r76lrJHlQRk8TzRyCBC8J4q8azqQtpHpeAMi+ALe7JQnJeg/Pcr2DbAjP6w3wPOQGSRyS9JpxXe8gO0mSIHD7AgLPTeKYkHhT5JWqNiQJCPwmXl8TQS4JQxL7X5QWsgMkBIgB7tdGBPdKYpKE4xMrs6baQH5CoihOegJwQjzQTOLllZdnAQqggNj3Q4J7leBg8/0wCqMf1tBzU3+EYUxCAMRuPw8wGBD5fhQdhapKyY9+ZC7AH68fAIHc4Xg8BAWqoo24zpZjv4MkPU0Mx+PRbDYaftCmzrjI56PxcAiKfNKzhGg0m0xGo+XmJti5EnQ6Hi6NiGFPgDuE/PlkMpvtOdvngn3N4MJsNBqFPQHLydzEZHKq2X7P+H7+/Bz18yCYTadvXbyfi8/3nGcL82E6nfv9AGQ2fVss3t/ff+vi8/wJ7xeLt+kk/BfAL/Wt1YeAQKGLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 1600,
            actualDps: 1066.67,
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
          enemyId: "140",
          enemyName: "ねこななふん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMEBAQFBQUFBQUGBgYVFRUWFhYWFhYWFhYgICAhISEhISEqKioqKiotLS0uLi41NTVFRUVISEhMTExOTk5QUFBcXFxjY2Nubm5xcXF7e3uGhoaGhoaTk5Obm5ufn5+pqam1tbW/v7/Nzc3Pz8/b29vk5OTt7e329vb7+/v///////+Zqh1dAAAAQHRSTlMAAgUJDREiTFZtvBU1XoeuQXqRyysb2+xlRg85e5Na8gbJdISk4UePrdP7wd3//eL//f/r/v3+/+3//////wD/pHXpBAAAA+9JREFUWIWtlm13sjgQhiWBoAUVFbqi1m5tXV9BiJBsSLL8/3/1TNA9+2U/EHfntFU5zsU99wyTDv76jzH4/wGDf8IJk8cb7D6vWALwfIPNK1qOnZcA7vG6Nq/r0zd6CRBc+DFN1+tjfXgJ4MQnye73+y1nR/wCAKWXWmkTsrlusTUAbW+NalsltW6VuO+wLSC9yRaC57LVlMr71rEDeEdh8lvJZdNwrptLYgdIbyDdhBJ5LoTW960VIPihqgWCVhXPzmWpW25moT8g3ReV8UDrOitoJlrNflYWAPRNi7xkUulWV5TWWvP8lFgA8LERVZ6XOeWNyAtW0+y8sykBH2WrOGRVDATQitfnU2xjIijoDDxzrRopdSvKA7YC/HDjoKKPYWhbkW2tJhF9s0cLGvkE7FO7Ud7eTZquxRPAP2M7QNQNIgDEYx7ZF7EDxFfVKWi46gDV1LUDBBf5BHQ1aLpBdgB8EMbEqhFdH3SZWi4UZ9e1oWokN17o+x+2G8kvzTKrhOIPM6wBnYsA0MYE3f5pDfC6Ya5EK2GlvQIwJphJ7AZSaXuA2WmmjWaOlJT2HgwSmARYJhUTgtHrAbaJY3kumOep4UVW16z8WDnWgEF6B/M0Ne0st7+/ADA1gAsFbOdbipFjAXj8M4C6YQSAltcQA6E3wHGcZx+UVgWVih+TlQUA8pF59JxlLgXPKs6v25VrBwDBUMJHrQQvKKNfCbIBAAG7yGxmOI9kRUX5vUIYgy4LgIf/Xu2slNADKMr89AWgB+Bg9qEoxIVAtjOwB+zgSGybgh1WCFkCXANAMIpgQlHuoIfItAbZAOCOsXmcZH5auy6GvhgZ/QAIAwDKDr45nG7Z3MMuBoYNoPs+dtdwuuibD7d3Pc9o6DlICCMXCK5HTk2r76lrJHlQRk8TzRyCBC8J4q8azqQtpHpeAMi+ALe7JQnJeg/Pcr2DbAjP6w3wPOQGSRyS9JpxXe8gO0mSIHD7AgLPTeKYkHhT5JWqNiQJCPwmXl8TQS4JQxL7X5QWsgMkBIgB7tdGBPdKYpKE4xMrs6baQH5CoihOegJwQjzQTOLllZdnAQqggNj3Q4J7leBg8/0wCqMf1tBzU3+EYUxCAMRuPw8wGBD5fhQdhapKyY9+ZC7AH68fAIHc4Xg8BAWqoo24zpZjv4MkPU0Mx+PRbDYaftCmzrjI56PxcAiKfNKzhGg0m0xGo+XmJti5EnQ6Hi6NiGFPgDuE/PlkMpvtOdvngn3N4MJsNBqFPQHLydzEZHKq2X7P+H7+/Bz18yCYTadvXbyfi8/3nGcL82E6nfv9AGQ2fVss3t/ff+vi8/wJ7xeLt+kk/BfAL/Wt1YeAQKGLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 1600,
            actualDps: 1066.67,
            magnification: "100%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMEBAQFBQUFBQUGBgYVFRUWFhYWFhYWFhYgICAhISEhISEqKioqKiotLS0uLi41NTVFRUVISEhMTExOTk5QUFBcXFxjY2Nubm5xcXF7e3uGhoaGhoaTk5Obm5ufn5+pqam1tbW/v7/Nzc3Pz8/b29vk5OTt7e329vb7+/v///////+Zqh1dAAAAQHRSTlMAAgUJDREiTFZtvBU1XoeuQXqRyysb2+xlRg85e5Na8gbJdISk4UePrdP7wd3//eL//f/r/v3+/+3//////wD/pHXpBAAAA+9JREFUWIWtlm13sjgQhiWBoAUVFbqi1m5tXV9BiJBsSLL8/3/1TNA9+2U/EHfntFU5zsU99wyTDv76jzH4/wGDf8IJk8cb7D6vWALwfIPNK1qOnZcA7vG6Nq/r0zd6CRBc+DFN1+tjfXgJ4MQnye73+y1nR/wCAKWXWmkTsrlusTUAbW+NalsltW6VuO+wLSC9yRaC57LVlMr71rEDeEdh8lvJZdNwrptLYgdIbyDdhBJ5LoTW960VIPihqgWCVhXPzmWpW25moT8g3ReV8UDrOitoJlrNflYWAPRNi7xkUulWV5TWWvP8lFgA8LERVZ6XOeWNyAtW0+y8sykBH2WrOGRVDATQitfnU2xjIijoDDxzrRopdSvKA7YC/HDjoKKPYWhbkW2tJhF9s0cLGvkE7FO7Ud7eTZquxRPAP2M7QNQNIgDEYx7ZF7EDxFfVKWi46gDV1LUDBBf5BHQ1aLpBdgB8EMbEqhFdH3SZWi4UZ9e1oWokN17o+x+2G8kvzTKrhOIPM6wBnYsA0MYE3f5pDfC6Ya5EK2GlvQIwJphJ7AZSaXuA2WmmjWaOlJT2HgwSmARYJhUTgtHrAbaJY3kumOep4UVW16z8WDnWgEF6B/M0Ne0st7+/ADA1gAsFbOdbipFjAXj8M4C6YQSAltcQA6E3wHGcZx+UVgWVih+TlQUA8pF59JxlLgXPKs6v25VrBwDBUMJHrQQvKKNfCbIBAAG7yGxmOI9kRUX5vUIYgy4LgIf/Xu2slNADKMr89AWgB+Bg9qEoxIVAtjOwB+zgSGybgh1WCFkCXANAMIpgQlHuoIfItAbZAOCOsXmcZH5auy6GvhgZ/QAIAwDKDr45nG7Z3MMuBoYNoPs+dtdwuuibD7d3Pc9o6DlICCMXCK5HTk2r76lrJHlQRk8TzRyCBC8J4q8azqQtpHpeAMi+ALe7JQnJeg/Pcr2DbAjP6w3wPOQGSRyS9JpxXe8gO0mSIHD7AgLPTeKYkHhT5JWqNiQJCPwmXl8TQS4JQxL7X5QWsgMkBIgB7tdGBPdKYpKE4xMrs6baQH5CoihOegJwQjzQTOLllZdnAQqggNj3Q4J7leBg8/0wCqMf1tBzU3+EYUxCAMRuPw8wGBD5fhQdhapKyY9+ZC7AH68fAIHc4Xg8BAWqoo24zpZjv4MkPU0Mx+PRbDYaftCmzrjI56PxcAiKfNKzhGg0m0xGo+XmJti5EnQ6Hi6NiGFPgDuE/PlkMpvtOdvngn3N4MJsNBqFPQHLydzEZHKq2X7P+H7+/Bz18yCYTadvXbyfi8/3nGcL82E6nfv9AGQ2fVss3t/ff+vi8/wJ7xeLt+kk/BfAL/Wt1YeAQKGLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 1600,
            actualDps: 1066.67,
            magnification: "100%",
            count: "1",
            spawnTime: "186.7s",
            spawnTimeFrames: "5,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMEBAQFBQUFBQUGBgYVFRUWFhYWFhYWFhYgICAhISEhISEqKioqKiotLS0uLi41NTVFRUVISEhMTExOTk5QUFBcXFxjY2Nubm5xcXF7e3uGhoaGhoaTk5Obm5ufn5+pqam1tbW/v7/Nzc3Pz8/b29vk5OTt7e329vb7+/v///////+Zqh1dAAAAQHRSTlMAAgUJDREiTFZtvBU1XoeuQXqRyysb2+xlRg85e5Na8gbJdISk4UePrdP7wd3//eL//f/r/v3+/+3//////wD/pHXpBAAAA+9JREFUWIWtlm13sjgQhiWBoAUVFbqi1m5tXV9BiJBsSLL8/3/1TNA9+2U/EHfntFU5zsU99wyTDv76jzH4/wGDf8IJk8cb7D6vWALwfIPNK1qOnZcA7vG6Nq/r0zd6CRBc+DFN1+tjfXgJ4MQnye73+y1nR/wCAKWXWmkTsrlusTUAbW+NalsltW6VuO+wLSC9yRaC57LVlMr71rEDeEdh8lvJZdNwrptLYgdIbyDdhBJ5LoTW960VIPihqgWCVhXPzmWpW25moT8g3ReV8UDrOitoJlrNflYWAPRNi7xkUulWV5TWWvP8lFgA8LERVZ6XOeWNyAtW0+y8sykBH2WrOGRVDATQitfnU2xjIijoDDxzrRopdSvKA7YC/HDjoKKPYWhbkW2tJhF9s0cLGvkE7FO7Ud7eTZquxRPAP2M7QNQNIgDEYx7ZF7EDxFfVKWi46gDV1LUDBBf5BHQ1aLpBdgB8EMbEqhFdH3SZWi4UZ9e1oWokN17o+x+2G8kvzTKrhOIPM6wBnYsA0MYE3f5pDfC6Ya5EK2GlvQIwJphJ7AZSaXuA2WmmjWaOlJT2HgwSmARYJhUTgtHrAbaJY3kumOep4UVW16z8WDnWgEF6B/M0Ne0st7+/ADA1gAsFbOdbipFjAXj8M4C6YQSAltcQA6E3wHGcZx+UVgWVih+TlQUA8pF59JxlLgXPKs6v25VrBwDBUMJHrQQvKKNfCbIBAAG7yGxmOI9kRUX5vUIYgy4LgIf/Xu2slNADKMr89AWgB+Bg9qEoxIVAtjOwB+zgSGybgh1WCFkCXANAMIpgQlHuoIfItAbZAOCOsXmcZH5auy6GvhgZ/QAIAwDKDr45nG7Z3MMuBoYNoPs+dtdwuuibD7d3Pc9o6DlICCMXCK5HTk2r76lrJHlQRk8TzRyCBC8J4q8azqQtpHpeAMi+ALe7JQnJeg/Pcr2DbAjP6w3wPOQGSRyS9JpxXe8gO0mSIHD7AgLPTeKYkHhT5JWqNiQJCPwmXl8TQS4JQxL7X5QWsgMkBIgB7tdGBPdKYpKE4xMrs6baQH5CoihOegJwQjzQTOLllZdnAQqggNj3Q4J7leBg8/0wCqMf1tBzU3+EYUxCAMRuPw8wGBD5fhQdhapKyY9+ZC7AH68fAIHc4Xg8BAWqoo24zpZjv4MkPU0Mx+PRbDYaftCmzrjI56PxcAiKfNKzhGg0m0xGo+XmJti5EnQ6Hi6NiGFPgDuE/PlkMpvtOdvngn3N4MJsNBqFPQHLydzEZHKq2X7P+H7+/Bz18yCYTadvXbyfi8/3nGcL82E6nfv9AGQ2fVss3t/ff+vi8/wJ7xeLt+kk/BfAL/Wt1YeAQKGLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 1600,
            actualDps: 1066.67,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "90%",
            isBoss: false
          }
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMEBAQFBQUFBQUGBgYVFRUWFhYWFhYWFhYgICAhISEhISEqKioqKiotLS0uLi41NTVFRUVISEhMTExOTk5QUFBcXFxjY2Nubm5xcXF7e3uGhoaGhoaTk5Obm5ufn5+pqam1tbW/v7/Nzc3Pz8/b29vk5OTt7e329vb7+/v///////+Zqh1dAAAAQHRSTlMAAgUJDREiTFZtvBU1XoeuQXqRyysb2+xlRg85e5Na8gbJdISk4UePrdP7wd3//eL//f/r/v3+/+3//////wD/pHXpBAAAA+9JREFUWIWtlm13sjgQhiWBoAUVFbqi1m5tXV9BiJBsSLL8/3/1TNA9+2U/EHfntFU5zsU99wyTDv76jzH4/wGDf8IJk8cb7D6vWALwfIPNK1qOnZcA7vG6Nq/r0zd6CRBc+DFN1+tjfXgJ4MQnye73+y1nR/wCAKWXWmkTsrlusTUAbW+NalsltW6VuO+wLSC9yRaC57LVlMr71rEDeEdh8lvJZdNwrptLYgdIbyDdhBJ5LoTW960VIPihqgWCVhXPzmWpW25moT8g3ReV8UDrOitoJlrNflYWAPRNi7xkUulWV5TWWvP8lFgA8LERVZ6XOeWNyAtW0+y8sykBH2WrOGRVDATQitfnU2xjIijoDDxzrRopdSvKA7YC/HDjoKKPYWhbkW2tJhF9s0cLGvkE7FO7Ud7eTZquxRPAP2M7QNQNIgDEYx7ZF7EDxFfVKWi46gDV1LUDBBf5BHQ1aLpBdgB8EMbEqhFdH3SZWi4UZ9e1oWokN17o+x+2G8kvzTKrhOIPM6wBnYsA0MYE3f5pDfC6Ya5EK2GlvQIwJphJ7AZSaXuA2WmmjWaOlJT2HgwSmARYJhUTgtHrAbaJY3kumOep4UVW16z8WDnWgEF6B/M0Ne0st7+/ADA1gAsFbOdbipFjAXj8M4C6YQSAltcQA6E3wHGcZx+UVgWVih+TlQUA8pF59JxlLgXPKs6v25VrBwDBUMJHrQQvKKNfCbIBAAG7yGxmOI9kRUX5vUIYgy4LgIf/Xu2slNADKMr89AWgB+Bg9qEoxIVAtjOwB+zgSGybgh1WCFkCXANAMIpgQlHuoIfItAbZAOCOsXmcZH5auy6GvhgZ/QAIAwDKDr45nG7Z3MMuBoYNoPs+dtdwuuibD7d3Pc9o6DlICCMXCK5HTk2r76lrJHlQRk8TzRyCBC8J4q8azqQtpHpeAMi+ALe7JQnJeg/Pcr2DbAjP6w3wPOQGSRyS9JpxXe8gO0mSIHD7AgLPTeKYkHhT5JWqNiQJCPwmXl8TQS4JQxL7X5QWsgMkBIgB7tdGBPdKYpKE4xMrs6baQH5CoihOegJwQjzQTOLllZdnAQqggNj3Q4J7leBg8/0wCqMf1tBzU3+EYUxCAMRuPw8wGBD5fhQdhapKyY9+ZC7AH68fAIHc4Xg8BAWqoo24zpZjv4MkPU0Mx+PRbDYaftCmzrjI56PxcAiKfNKzhGg0m0xGo+XmJti5EnQ6Hi6NiGFPgDuE/PlkMpvtOdvngn3N4MJsNBqFPQHLydzEZHKq2X7P+H7+/Bz18yCYTadvXbyfi8/3nGcL82E6nfv9AGQ2fVss3t/ff+vi8/wJ7xeLt+kk/BfAL/Wt1YeAQKGLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 1600,
            actualDps: 1066.67,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "80%",
            isBoss: false
          }
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMEBAQFBQUFBQUGBgYVFRUWFhYWFhYWFhYgICAhISEhISEqKioqKiotLS0uLi41NTVFRUVISEhMTExOTk5QUFBcXFxjY2Nubm5xcXF7e3uGhoaGhoaTk5Obm5ufn5+pqam1tbW/v7/Nzc3Pz8/b29vk5OTt7e329vb7+/v///////+Zqh1dAAAAQHRSTlMAAgUJDREiTFZtvBU1XoeuQXqRyysb2+xlRg85e5Na8gbJdISk4UePrdP7wd3//eL//f/r/v3+/+3//////wD/pHXpBAAAA+9JREFUWIWtlm13sjgQhiWBoAUVFbqi1m5tXV9BiJBsSLL8/3/1TNA9+2U/EHfntFU5zsU99wyTDv76jzH4/wGDf8IJk8cb7D6vWALwfIPNK1qOnZcA7vG6Nq/r0zd6CRBc+DFN1+tjfXgJ4MQnye73+y1nR/wCAKWXWmkTsrlusTUAbW+NalsltW6VuO+wLSC9yRaC57LVlMr71rEDeEdh8lvJZdNwrptLYgdIbyDdhBJ5LoTW960VIPihqgWCVhXPzmWpW25moT8g3ReV8UDrOitoJlrNflYWAPRNi7xkUulWV5TWWvP8lFgA8LERVZ6XOeWNyAtW0+y8sykBH2WrOGRVDATQitfnU2xjIijoDDxzrRopdSvKA7YC/HDjoKKPYWhbkW2tJhF9s0cLGvkE7FO7Ud7eTZquxRPAP2M7QNQNIgDEYx7ZF7EDxFfVKWi46gDV1LUDBBf5BHQ1aLpBdgB8EMbEqhFdH3SZWi4UZ9e1oWokN17o+x+2G8kvzTKrhOIPM6wBnYsA0MYE3f5pDfC6Ya5EK2GlvQIwJphJ7AZSaXuA2WmmjWaOlJT2HgwSmARYJhUTgtHrAbaJY3kumOep4UVW16z8WDnWgEF6B/M0Ne0st7+/ADA1gAsFbOdbipFjAXj8M4C6YQSAltcQA6E3wHGcZx+UVgWVih+TlQUA8pF59JxlLgXPKs6v25VrBwDBUMJHrQQvKKNfCbIBAAG7yGxmOI9kRUX5vUIYgy4LgIf/Xu2slNADKMr89AWgB+Bg9qEoxIVAtjOwB+zgSGybgh1WCFkCXANAMIpgQlHuoIfItAbZAOCOsXmcZH5auy6GvhgZ/QAIAwDKDr45nG7Z3MMuBoYNoPs+dtdwuuibD7d3Pc9o6DlICCMXCK5HTk2r76lrJHlQRk8TzRyCBC8J4q8azqQtpHpeAMi+ALe7JQnJeg/Pcr2DbAjP6w3wPOQGSRyS9JpxXe8gO0mSIHD7AgLPTeKYkHhT5JWqNiQJCPwmXl8TQS4JQxL7X5QWsgMkBIgB7tdGBPdKYpKE4xMrs6baQH5CoihOegJwQjzQTOLllZdnAQqggNj3Q4J7leBg8/0wCqMf1tBzU3+EYUxCAMRuPw8wGBD5fhQdhapKyY9+ZC7AH68fAIHc4Xg8BAWqoo24zpZjv4MkPU0Mx+PRbDYaftCmzrjI56PxcAiKfNKzhGg0m0xGo+XmJti5EnQ6Hi6NiGFPgDuE/PlkMpvtOdvngn3N4MJsNBqFPQHLydzEZHKq2X7P+H7+/Bz18yCYTadvXbyfi8/3nGcL82E6nfv9AGQ2fVss3t/ff+vi8/wJ7xeLt+kk/BfAL/Wt1YeAQKGLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 1600,
            actualDps: 1066.67,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "70%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "スカート進化への道 超激ムズ",
      baseHp: 1770000,
      width: 4600,
      enemyLimit: 12,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10024",
          treasureName: "ねこななふんへの進化権(ネコスカートの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 15000,
            actualAp: 6000,
            actualDps: 4390.23,
            magnification: "300%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
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
            actualHp: 19500,
            actualAp: 2325,
            actualDps: 1701.22,
            magnification: "150%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "8.0-13.3s",
            delayFrames: "240-400f",
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
            actualHp: 15000,
            actualAp: 6000,
            actualDps: 4390.23,
            magnification: "300%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 19500,
            actualAp: 2325,
            actualDps: 1701.22,
            magnification: "150%",
            count: "0",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "8.0-13.3s",
            delayFrames: "240-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMEBAQFBQUFBQUGBgYVFRUWFhYWFhYWFhYgICAhISEhISEqKioqKiotLS0uLi41NTVFRUVISEhMTExOTk5QUFBcXFxjY2Nubm5xcXF7e3uGhoaGhoaTk5Obm5ufn5+pqam1tbW/v7/Nzc3Pz8/b29vk5OTt7e329vb7+/v///////+Zqh1dAAAAQHRSTlMAAgUJDREiTFZtvBU1XoeuQXqRyysb2+xlRg85e5Na8gbJdISk4UePrdP7wd3//eL//f/r/v3+/+3//////wD/pHXpBAAAA+9JREFUWIWtlm13sjgQhiWBoAUVFbqi1m5tXV9BiJBsSLL8/3/1TNA9+2U/EHfntFU5zsU99wyTDv76jzH4/wGDf8IJk8cb7D6vWALwfIPNK1qOnZcA7vG6Nq/r0zd6CRBc+DFN1+tjfXgJ4MQnye73+y1nR/wCAKWXWmkTsrlusTUAbW+NalsltW6VuO+wLSC9yRaC57LVlMr71rEDeEdh8lvJZdNwrptLYgdIbyDdhBJ5LoTW960VIPihqgWCVhXPzmWpW25moT8g3ReV8UDrOitoJlrNflYWAPRNi7xkUulWV5TWWvP8lFgA8LERVZ6XOeWNyAtW0+y8sykBH2WrOGRVDATQitfnU2xjIijoDDxzrRopdSvKA7YC/HDjoKKPYWhbkW2tJhF9s0cLGvkE7FO7Ud7eTZquxRPAP2M7QNQNIgDEYx7ZF7EDxFfVKWi46gDV1LUDBBf5BHQ1aLpBdgB8EMbEqhFdH3SZWi4UZ9e1oWokN17o+x+2G8kvzTKrhOIPM6wBnYsA0MYE3f5pDfC6Ya5EK2GlvQIwJphJ7AZSaXuA2WmmjWaOlJT2HgwSmARYJhUTgtHrAbaJY3kumOep4UVW16z8WDnWgEF6B/M0Ne0st7+/ADA1gAsFbOdbipFjAXj8M4C6YQSAltcQA6E3wHGcZx+UVgWVih+TlQUA8pF59JxlLgXPKs6v25VrBwDBUMJHrQQvKKNfCbIBAAG7yGxmOI9kRUX5vUIYgy4LgIf/Xu2slNADKMr89AWgB+Bg9qEoxIVAtjOwB+zgSGybgh1WCFkCXANAMIpgQlHuoIfItAbZAOCOsXmcZH5auy6GvhgZ/QAIAwDKDr45nG7Z3MMuBoYNoPs+dtdwuuibD7d3Pc9o6DlICCMXCK5HTk2r76lrJHlQRk8TzRyCBC8J4q8azqQtpHpeAMi+ALe7JQnJeg/Pcr2DbAjP6w3wPOQGSRyS9JpxXe8gO0mSIHD7AgLPTeKYkHhT5JWqNiQJCPwmXl8TQS4JQxL7X5QWsgMkBIgB7tdGBPdKYpKE4xMrs6baQH5CoihOegJwQjzQTOLllZdnAQqggNj3Q4J7leBg8/0wCqMf1tBzU3+EYUxCAMRuPw8wGBD5fhQdhapKyY9+ZC7AH68fAIHc4Xg8BAWqoo24zpZjv4MkPU0Mx+PRbDYaftCmzrjI56PxcAiKfNKzhGg0m0xGo+XmJti5EnQ6Hi6NiGFPgDuE/PlkMpvtOdvngn3N4MJsNBqFPQHLydzEZHKq2X7P+H7+/Bz18yCYTadvXbyfi8/3nGcL82E6nfv9AGQ2fVss3t/ff+vi8/wJ7xeLt+kk/BfAL/Wt1YeAQKGLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 2400,
            actualDps: 1600.01,
            magnification: "150%",
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
          enemyId: "140",
          enemyName: "ねこななふん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMEBAQFBQUFBQUGBgYVFRUWFhYWFhYWFhYgICAhISEhISEqKioqKiotLS0uLi41NTVFRUVISEhMTExOTk5QUFBcXFxjY2Nubm5xcXF7e3uGhoaGhoaTk5Obm5ufn5+pqam1tbW/v7/Nzc3Pz8/b29vk5OTt7e329vb7+/v///////+Zqh1dAAAAQHRSTlMAAgUJDREiTFZtvBU1XoeuQXqRyysb2+xlRg85e5Na8gbJdISk4UePrdP7wd3//eL//f/r/v3+/+3//////wD/pHXpBAAAA+9JREFUWIWtlm13sjgQhiWBoAUVFbqi1m5tXV9BiJBsSLL8/3/1TNA9+2U/EHfntFU5zsU99wyTDv76jzH4/wGDf8IJk8cb7D6vWALwfIPNK1qOnZcA7vG6Nq/r0zd6CRBc+DFN1+tjfXgJ4MQnye73+y1nR/wCAKWXWmkTsrlusTUAbW+NalsltW6VuO+wLSC9yRaC57LVlMr71rEDeEdh8lvJZdNwrptLYgdIbyDdhBJ5LoTW960VIPihqgWCVhXPzmWpW25moT8g3ReV8UDrOitoJlrNflYWAPRNi7xkUulWV5TWWvP8lFgA8LERVZ6XOeWNyAtW0+y8sykBH2WrOGRVDATQitfnU2xjIijoDDxzrRopdSvKA7YC/HDjoKKPYWhbkW2tJhF9s0cLGvkE7FO7Ud7eTZquxRPAP2M7QNQNIgDEYx7ZF7EDxFfVKWi46gDV1LUDBBf5BHQ1aLpBdgB8EMbEqhFdH3SZWi4UZ9e1oWokN17o+x+2G8kvzTKrhOIPM6wBnYsA0MYE3f5pDfC6Ya5EK2GlvQIwJphJ7AZSaXuA2WmmjWaOlJT2HgwSmARYJhUTgtHrAbaJY3kumOep4UVW16z8WDnWgEF6B/M0Ne0st7+/ADA1gAsFbOdbipFjAXj8M4C6YQSAltcQA6E3wHGcZx+UVgWVih+TlQUA8pF59JxlLgXPKs6v25VrBwDBUMJHrQQvKKNfCbIBAAG7yGxmOI9kRUX5vUIYgy4LgIf/Xu2slNADKMr89AWgB+Bg9qEoxIVAtjOwB+zgSGybgh1WCFkCXANAMIpgQlHuoIfItAbZAOCOsXmcZH5auy6GvhgZ/QAIAwDKDr45nG7Z3MMuBoYNoPs+dtdwuuibD7d3Pc9o6DlICCMXCK5HTk2r76lrJHlQRk8TzRyCBC8J4q8azqQtpHpeAMi+ALe7JQnJeg/Pcr2DbAjP6w3wPOQGSRyS9JpxXe8gO0mSIHD7AgLPTeKYkHhT5JWqNiQJCPwmXl8TQS4JQxL7X5QWsgMkBIgB7tdGBPdKYpKE4xMrs6baQH5CoihOegJwQjzQTOLllZdnAQqggNj3Q4J7leBg8/0wCqMf1tBzU3+EYUxCAMRuPw8wGBD5fhQdhapKyY9+ZC7AH68fAIHc4Xg8BAWqoo24zpZjv4MkPU0Mx+PRbDYaftCmzrjI56PxcAiKfNKzhGg0m0xGo+XmJti5EnQ6Hi6NiGFPgDuE/PlkMpvtOdvngn3N4MJsNBqFPQHLydzEZHKq2X7P+H7+/Bz18yCYTadvXbyfi8/3nGcL82E6nfv9AGQ2fVss3t/ff+vi8/wJ7xeLt+kk/BfAL/Wt1YeAQKGLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 2400,
            actualDps: 1600.01,
            magnification: "150%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMEBAQFBQUFBQUGBgYVFRUWFhYWFhYWFhYgICAhISEhISEqKioqKiotLS0uLi41NTVFRUVISEhMTExOTk5QUFBcXFxjY2Nubm5xcXF7e3uGhoaGhoaTk5Obm5ufn5+pqam1tbW/v7/Nzc3Pz8/b29vk5OTt7e329vb7+/v///////+Zqh1dAAAAQHRSTlMAAgUJDREiTFZtvBU1XoeuQXqRyysb2+xlRg85e5Na8gbJdISk4UePrdP7wd3//eL//f/r/v3+/+3//////wD/pHXpBAAAA+9JREFUWIWtlm13sjgQhiWBoAUVFbqi1m5tXV9BiJBsSLL8/3/1TNA9+2U/EHfntFU5zsU99wyTDv76jzH4/wGDf8IJk8cb7D6vWALwfIPNK1qOnZcA7vG6Nq/r0zd6CRBc+DFN1+tjfXgJ4MQnye73+y1nR/wCAKWXWmkTsrlusTUAbW+NalsltW6VuO+wLSC9yRaC57LVlMr71rEDeEdh8lvJZdNwrptLYgdIbyDdhBJ5LoTW960VIPihqgWCVhXPzmWpW25moT8g3ReV8UDrOitoJlrNflYWAPRNi7xkUulWV5TWWvP8lFgA8LERVZ6XOeWNyAtW0+y8sykBH2WrOGRVDATQitfnU2xjIijoDDxzrRopdSvKA7YC/HDjoKKPYWhbkW2tJhF9s0cLGvkE7FO7Ud7eTZquxRPAP2M7QNQNIgDEYx7ZF7EDxFfVKWi46gDV1LUDBBf5BHQ1aLpBdgB8EMbEqhFdH3SZWi4UZ9e1oWokN17o+x+2G8kvzTKrhOIPM6wBnYsA0MYE3f5pDfC6Ya5EK2GlvQIwJphJ7AZSaXuA2WmmjWaOlJT2HgwSmARYJhUTgtHrAbaJY3kumOep4UVW16z8WDnWgEF6B/M0Ne0st7+/ADA1gAsFbOdbipFjAXj8M4C6YQSAltcQA6E3wHGcZx+UVgWVih+TlQUA8pF59JxlLgXPKs6v25VrBwDBUMJHrQQvKKNfCbIBAAG7yGxmOI9kRUX5vUIYgy4LgIf/Xu2slNADKMr89AWgB+Bg9qEoxIVAtjOwB+zgSGybgh1WCFkCXANAMIpgQlHuoIfItAbZAOCOsXmcZH5auy6GvhgZ/QAIAwDKDr45nG7Z3MMuBoYNoPs+dtdwuuibD7d3Pc9o6DlICCMXCK5HTk2r76lrJHlQRk8TzRyCBC8J4q8azqQtpHpeAMi+ALe7JQnJeg/Pcr2DbAjP6w3wPOQGSRyS9JpxXe8gO0mSIHD7AgLPTeKYkHhT5JWqNiQJCPwmXl8TQS4JQxL7X5QWsgMkBIgB7tdGBPdKYpKE4xMrs6baQH5CoihOegJwQjzQTOLllZdnAQqggNj3Q4J7leBg8/0wCqMf1tBzU3+EYUxCAMRuPw8wGBD5fhQdhapKyY9+ZC7AH68fAIHc4Xg8BAWqoo24zpZjv4MkPU0Mx+PRbDYaftCmzrjI56PxcAiKfNKzhGg0m0xGo+XmJti5EnQ6Hi6NiGFPgDuE/PlkMpvtOdvngn3N4MJsNBqFPQHLydzEZHKq2X7P+H7+/Bz18yCYTadvXbyfi8/3nGcL82E6nfv9AGQ2fVss3t/ff+vi8/wJ7xeLt+kk/BfAL/Wt1YeAQKGLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 2400,
            actualDps: 1600.01,
            magnification: "150%",
            count: "1",
            spawnTime: "186.7s",
            spawnTimeFrames: "5,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMEBAQFBQUFBQUGBgYVFRUWFhYWFhYWFhYgICAhISEhISEqKioqKiotLS0uLi41NTVFRUVISEhMTExOTk5QUFBcXFxjY2Nubm5xcXF7e3uGhoaGhoaTk5Obm5ufn5+pqam1tbW/v7/Nzc3Pz8/b29vk5OTt7e329vb7+/v///////+Zqh1dAAAAQHRSTlMAAgUJDREiTFZtvBU1XoeuQXqRyysb2+xlRg85e5Na8gbJdISk4UePrdP7wd3//eL//f/r/v3+/+3//////wD/pHXpBAAAA+9JREFUWIWtlm13sjgQhiWBoAUVFbqi1m5tXV9BiJBsSLL8/3/1TNA9+2U/EHfntFU5zsU99wyTDv76jzH4/wGDf8IJk8cb7D6vWALwfIPNK1qOnZcA7vG6Nq/r0zd6CRBc+DFN1+tjfXgJ4MQnye73+y1nR/wCAKWXWmkTsrlusTUAbW+NalsltW6VuO+wLSC9yRaC57LVlMr71rEDeEdh8lvJZdNwrptLYgdIbyDdhBJ5LoTW960VIPihqgWCVhXPzmWpW25moT8g3ReV8UDrOitoJlrNflYWAPRNi7xkUulWV5TWWvP8lFgA8LERVZ6XOeWNyAtW0+y8sykBH2WrOGRVDATQitfnU2xjIijoDDxzrRopdSvKA7YC/HDjoKKPYWhbkW2tJhF9s0cLGvkE7FO7Ud7eTZquxRPAP2M7QNQNIgDEYx7ZF7EDxFfVKWi46gDV1LUDBBf5BHQ1aLpBdgB8EMbEqhFdH3SZWi4UZ9e1oWokN17o+x+2G8kvzTKrhOIPM6wBnYsA0MYE3f5pDfC6Ya5EK2GlvQIwJphJ7AZSaXuA2WmmjWaOlJT2HgwSmARYJhUTgtHrAbaJY3kumOep4UVW16z8WDnWgEF6B/M0Ne0st7+/ADA1gAsFbOdbipFjAXj8M4C6YQSAltcQA6E3wHGcZx+UVgWVih+TlQUA8pF59JxlLgXPKs6v25VrBwDBUMJHrQQvKKNfCbIBAAG7yGxmOI9kRUX5vUIYgy4LgIf/Xu2slNADKMr89AWgB+Bg9qEoxIVAtjOwB+zgSGybgh1WCFkCXANAMIpgQlHuoIfItAbZAOCOsXmcZH5auy6GvhgZ/QAIAwDKDr45nG7Z3MMuBoYNoPs+dtdwuuibD7d3Pc9o6DlICCMXCK5HTk2r76lrJHlQRk8TzRyCBC8J4q8azqQtpHpeAMi+ALe7JQnJeg/Pcr2DbAjP6w3wPOQGSRyS9JpxXe8gO0mSIHD7AgLPTeKYkHhT5JWqNiQJCPwmXl8TQS4JQxL7X5QWsgMkBIgB7tdGBPdKYpKE4xMrs6baQH5CoihOegJwQjzQTOLllZdnAQqggNj3Q4J7leBg8/0wCqMf1tBzU3+EYUxCAMRuPw8wGBD5fhQdhapKyY9+ZC7AH68fAIHc4Xg8BAWqoo24zpZjv4MkPU0Mx+PRbDYaftCmzrjI56PxcAiKfNKzhGg0m0xGo+XmJti5EnQ6Hi6NiGFPgDuE/PlkMpvtOdvngn3N4MJsNBqFPQHLydzEZHKq2X7P+H7+/Bz18yCYTadvXbyfi8/3nGcL82E6nfv9AGQ2fVss3t/ff+vi8/wJ7xeLt+kk/BfAL/Wt1YeAQKGLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 2400,
            actualDps: 1600.01,
            magnification: "150%",
            count: "1",
            spawnTime: "266.7s",
            spawnTimeFrames: "8,000f",
            delay: "66.7-66.7s",
            delayFrames: "2,000-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMEBAQFBQUFBQUGBgYVFRUWFhYWFhYWFhYgICAhISEhISEqKioqKiotLS0uLi41NTVFRUVISEhMTExOTk5QUFBcXFxjY2Nubm5xcXF7e3uGhoaGhoaTk5Obm5ufn5+pqam1tbW/v7/Nzc3Pz8/b29vk5OTt7e329vb7+/v///////+Zqh1dAAAAQHRSTlMAAgUJDREiTFZtvBU1XoeuQXqRyysb2+xlRg85e5Na8gbJdISk4UePrdP7wd3//eL//f/r/v3+/+3//////wD/pHXpBAAAA+9JREFUWIWtlm13sjgQhiWBoAUVFbqi1m5tXV9BiJBsSLL8/3/1TNA9+2U/EHfntFU5zsU99wyTDv76jzH4/wGDf8IJk8cb7D6vWALwfIPNK1qOnZcA7vG6Nq/r0zd6CRBc+DFN1+tjfXgJ4MQnye73+y1nR/wCAKWXWmkTsrlusTUAbW+NalsltW6VuO+wLSC9yRaC57LVlMr71rEDeEdh8lvJZdNwrptLYgdIbyDdhBJ5LoTW960VIPihqgWCVhXPzmWpW25moT8g3ReV8UDrOitoJlrNflYWAPRNi7xkUulWV5TWWvP8lFgA8LERVZ6XOeWNyAtW0+y8sykBH2WrOGRVDATQitfnU2xjIijoDDxzrRopdSvKA7YC/HDjoKKPYWhbkW2tJhF9s0cLGvkE7FO7Ud7eTZquxRPAP2M7QNQNIgDEYx7ZF7EDxFfVKWi46gDV1LUDBBf5BHQ1aLpBdgB8EMbEqhFdH3SZWi4UZ9e1oWokN17o+x+2G8kvzTKrhOIPM6wBnYsA0MYE3f5pDfC6Ya5EK2GlvQIwJphJ7AZSaXuA2WmmjWaOlJT2HgwSmARYJhUTgtHrAbaJY3kumOep4UVW16z8WDnWgEF6B/M0Ne0st7+/ADA1gAsFbOdbipFjAXj8M4C6YQSAltcQA6E3wHGcZx+UVgWVih+TlQUA8pF59JxlLgXPKs6v25VrBwDBUMJHrQQvKKNfCbIBAAG7yGxmOI9kRUX5vUIYgy4LgIf/Xu2slNADKMr89AWgB+Bg9qEoxIVAtjOwB+zgSGybgh1WCFkCXANAMIpgQlHuoIfItAbZAOCOsXmcZH5auy6GvhgZ/QAIAwDKDr45nG7Z3MMuBoYNoPs+dtdwuuibD7d3Pc9o6DlICCMXCK5HTk2r76lrJHlQRk8TzRyCBC8J4q8azqQtpHpeAMi+ALe7JQnJeg/Pcr2DbAjP6w3wPOQGSRyS9JpxXe8gO0mSIHD7AgLPTeKYkHhT5JWqNiQJCPwmXl8TQS4JQxL7X5QWsgMkBIgB7tdGBPdKYpKE4xMrs6baQH5CoihOegJwQjzQTOLllZdnAQqggNj3Q4J7leBg8/0wCqMf1tBzU3+EYUxCAMRuPw8wGBD5fhQdhapKyY9+ZC7AH68fAIHc4Xg8BAWqoo24zpZjv4MkPU0Mx+PRbDYaftCmzrjI56PxcAiKfNKzhGg0m0xGo+XmJti5EnQ6Hi6NiGFPgDuE/PlkMpvtOdvngn3N4MJsNBqFPQHLydzEZHKq2X7P+H7+/Bz18yCYTadvXbyfi8/3nGcL82E6nfv9AGQ2fVss3t/ff+vi8/wJ7xeLt+kk/BfAL/Wt1YeAQKGLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 2400,
            actualDps: 1600.01,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "90%",
            isBoss: false
          }
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMEBAQFBQUFBQUGBgYVFRUWFhYWFhYWFhYgICAhISEhISEqKioqKiotLS0uLi41NTVFRUVISEhMTExOTk5QUFBcXFxjY2Nubm5xcXF7e3uGhoaGhoaTk5Obm5ufn5+pqam1tbW/v7/Nzc3Pz8/b29vk5OTt7e329vb7+/v///////+Zqh1dAAAAQHRSTlMAAgUJDREiTFZtvBU1XoeuQXqRyysb2+xlRg85e5Na8gbJdISk4UePrdP7wd3//eL//f/r/v3+/+3//////wD/pHXpBAAAA+9JREFUWIWtlm13sjgQhiWBoAUVFbqi1m5tXV9BiJBsSLL8/3/1TNA9+2U/EHfntFU5zsU99wyTDv76jzH4/wGDf8IJk8cb7D6vWALwfIPNK1qOnZcA7vG6Nq/r0zd6CRBc+DFN1+tjfXgJ4MQnye73+y1nR/wCAKWXWmkTsrlusTUAbW+NalsltW6VuO+wLSC9yRaC57LVlMr71rEDeEdh8lvJZdNwrptLYgdIbyDdhBJ5LoTW960VIPihqgWCVhXPzmWpW25moT8g3ReV8UDrOitoJlrNflYWAPRNi7xkUulWV5TWWvP8lFgA8LERVZ6XOeWNyAtW0+y8sykBH2WrOGRVDATQitfnU2xjIijoDDxzrRopdSvKA7YC/HDjoKKPYWhbkW2tJhF9s0cLGvkE7FO7Ud7eTZquxRPAP2M7QNQNIgDEYx7ZF7EDxFfVKWi46gDV1LUDBBf5BHQ1aLpBdgB8EMbEqhFdH3SZWi4UZ9e1oWokN17o+x+2G8kvzTKrhOIPM6wBnYsA0MYE3f5pDfC6Ya5EK2GlvQIwJphJ7AZSaXuA2WmmjWaOlJT2HgwSmARYJhUTgtHrAbaJY3kumOep4UVW16z8WDnWgEF6B/M0Ne0st7+/ADA1gAsFbOdbipFjAXj8M4C6YQSAltcQA6E3wHGcZx+UVgWVih+TlQUA8pF59JxlLgXPKs6v25VrBwDBUMJHrQQvKKNfCbIBAAG7yGxmOI9kRUX5vUIYgy4LgIf/Xu2slNADKMr89AWgB+Bg9qEoxIVAtjOwB+zgSGybgh1WCFkCXANAMIpgQlHuoIfItAbZAOCOsXmcZH5auy6GvhgZ/QAIAwDKDr45nG7Z3MMuBoYNoPs+dtdwuuibD7d3Pc9o6DlICCMXCK5HTk2r76lrJHlQRk8TzRyCBC8J4q8azqQtpHpeAMi+ALe7JQnJeg/Pcr2DbAjP6w3wPOQGSRyS9JpxXe8gO0mSIHD7AgLPTeKYkHhT5JWqNiQJCPwmXl8TQS4JQxL7X5QWsgMkBIgB7tdGBPdKYpKE4xMrs6baQH5CoihOegJwQjzQTOLllZdnAQqggNj3Q4J7leBg8/0wCqMf1tBzU3+EYUxCAMRuPw8wGBD5fhQdhapKyY9+ZC7AH68fAIHc4Xg8BAWqoo24zpZjv4MkPU0Mx+PRbDYaftCmzrjI56PxcAiKfNKzhGg0m0xGo+XmJti5EnQ6Hi6NiGFPgDuE/PlkMpvtOdvngn3N4MJsNBqFPQHLydzEZHKq2X7P+H7+/Bz18yCYTadvXbyfi8/3nGcL82E6nfv9AGQ2fVss3t/ff+vi8/wJ7xeLt+kk/BfAL/Wt1YeAQKGLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 2400,
            actualDps: 1600.01,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "80%",
            isBoss: false
          }
        },
        {
          enemyId: "140",
          enemyName: "ねこななふん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMEBAQFBQUFBQUGBgYVFRUWFhYWFhYWFhYgICAhISEhISEqKioqKiotLS0uLi41NTVFRUVISEhMTExOTk5QUFBcXFxjY2Nubm5xcXF7e3uGhoaGhoaTk5Obm5ufn5+pqam1tbW/v7/Nzc3Pz8/b29vk5OTt7e329vb7+/v///////+Zqh1dAAAAQHRSTlMAAgUJDREiTFZtvBU1XoeuQXqRyysb2+xlRg85e5Na8gbJdISk4UePrdP7wd3//eL//f/r/v3+/+3//////wD/pHXpBAAAA+9JREFUWIWtlm13sjgQhiWBoAUVFbqi1m5tXV9BiJBsSLL8/3/1TNA9+2U/EHfntFU5zsU99wyTDv76jzH4/wGDf8IJk8cb7D6vWALwfIPNK1qOnZcA7vG6Nq/r0zd6CRBc+DFN1+tjfXgJ4MQnye73+y1nR/wCAKWXWmkTsrlusTUAbW+NalsltW6VuO+wLSC9yRaC57LVlMr71rEDeEdh8lvJZdNwrptLYgdIbyDdhBJ5LoTW960VIPihqgWCVhXPzmWpW25moT8g3ReV8UDrOitoJlrNflYWAPRNi7xkUulWV5TWWvP8lFgA8LERVZ6XOeWNyAtW0+y8sykBH2WrOGRVDATQitfnU2xjIijoDDxzrRopdSvKA7YC/HDjoKKPYWhbkW2tJhF9s0cLGvkE7FO7Ud7eTZquxRPAP2M7QNQNIgDEYx7ZF7EDxFfVKWi46gDV1LUDBBf5BHQ1aLpBdgB8EMbEqhFdH3SZWi4UZ9e1oWokN17o+x+2G8kvzTKrhOIPM6wBnYsA0MYE3f5pDfC6Ya5EK2GlvQIwJphJ7AZSaXuA2WmmjWaOlJT2HgwSmARYJhUTgtHrAbaJY3kumOep4UVW16z8WDnWgEF6B/M0Ne0st7+/ADA1gAsFbOdbipFjAXj8M4C6YQSAltcQA6E3wHGcZx+UVgWVih+TlQUA8pF59JxlLgXPKs6v25VrBwDBUMJHrQQvKKNfCbIBAAG7yGxmOI9kRUX5vUIYgy4LgIf/Xu2slNADKMr89AWgB+Bg9qEoxIVAtjOwB+zgSGybgh1WCFkCXANAMIpgQlHuoIfItAbZAOCOsXmcZH5auy6GvhgZ/QAIAwDKDr45nG7Z3MMuBoYNoPs+dtdwuuibD7d3Pc9o6DlICCMXCK5HTk2r76lrJHlQRk8TzRyCBC8J4q8azqQtpHpeAMi+ALe7JQnJeg/Pcr2DbAjP6w3wPOQGSRyS9JpxXe8gO0mSIHD7AgLPTeKYkHhT5JWqNiQJCPwmXl8TQS4JQxL7X5QWsgMkBIgB7tdGBPdKYpKE4xMrs6baQH5CoihOegJwQjzQTOLllZdnAQqggNj3Q4J7leBg8/0wCqMf1tBzU3+EYUxCAMRuPw8wGBD5fhQdhapKyY9+ZC7AH68fAIHc4Xg8BAWqoo24zpZjv4MkPU0Mx+PRbDYaftCmzrjI56PxcAiKfNKzhGg0m0xGo+XmJti5EnQ6Hi6NiGFPgDuE/PlkMpvtOdvngn3N4MJsNBqFPQHLydzEZHKq2X7P+H7+/Bz18yCYTadvXbyfi8/3nGcL82E6nfv9AGQ2fVss3t/ff+vi8/wJ7xeLt+kk/BfAL/Wt1YeAQKGLAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 1600,
            dps: 1066.67,
            speed: 7,
            range: 655,
            rangeType: "範囲",
            kbLevel: 5,
            money: 950,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 2400,
            actualDps: 1600.01,
            magnification: "150%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "106.7-106.7s",
            delayFrames: "3,200-3,200f",
            baseHpRatio: "70%",
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
            actualHp: 1600,
            actualAp: 600,
            actualDps: 1125.0,
            magnification: "2000%",
            count: "30",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "50%",
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
            actualHp: 1600,
            actualAp: 600,
            actualDps: 1125.0,
            magnification: "2000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.7s",
            delayFrames: "60-200f",
            baseHpRatio: "50%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1058Data;

