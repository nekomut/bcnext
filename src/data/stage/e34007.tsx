// Stage 34007 Data
import type { StageData } from '../../app/stage/types';

export const e34007Data: StageData = {
  eventId: 34007,
  eventName: "デシリットル湾の魔物",
  typeId: 34,
  typeName: "レジェンドストーリー0",
  prefix: "ND",
  mapId: 7,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "解を求めて三千里",
      baseHp: 1150000,
      width: 5200,
      enemyLimit: 20,
      requiredCost: 200,
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
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "636",
          enemyName: "デヴィル夫人",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 9500,
            ap: 8000,
            dps: 5853.66,
            speed: 18,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 850,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 57000,
            actualAp: 48000,
            actualDps: 35121.96,
            magnification: "600%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "30.0-36.7s",
            delayFrames: "900-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 100,
                distance_start: 200,
                distance_end: 800,
                level: 1
            }
          }
        },
        {
          enemyId: "553",
          enemyName: "インフェルにょろ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 8200,
            ap: 2800,
            dps: 2270.27,
            speed: 12,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 120,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 49200,
            actualAp: 16800,
            actualDps: 13621.62,
            magnification: "600%",
            count: "4",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 50,
                distance_start: 350,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "555",
          enemyName: "ギルティ・ペン",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 32250,
            ap: 4200,
            dps: 3230.77,
            speed: 10,
            range: 280,
            rangeType: "範囲",
            kbLevel: 3,
            money: 420,
            freq: 39,
            foreswing: 16,
            backswing: 10,
            tba: 12
          },
          stageStats: {
            actualHp: 161250,
            actualAp: 21000,
            actualDps: 16153.85,
            magnification: "500%",
            count: "10",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "death-surge": {
                chance: 100,
                distance_start: 450,
                distance_end: 950,
                level: 3
            }
          }
        },
        {
          enemyId: "583",
          enemyName: "マデューさん",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 788000,
            ap: 8800,
            dps: 2838.71,
            speed: 6,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 93,
            foreswing: 6,
            backswing: 11,
            tba: 44
          },
          stageStats: {
            actualHp: 1182000,
            actualAp: 13200,
            actualDps: 4258.06,
            magnification: "150%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "553",
          enemyName: "インフェルにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgICAgIDAwMPFx0THiUeMT0kO00iP1QrS2IvUWk2WXI9ZYE+aIVEcI5Ke5xOhapPhqxRirBXkLZYlr9VmMVZmMJdnspen8xeoMxeotBhptVhptRiptRmptFkq9tmrd5prdtoseJqtOZ9rtB2s9ttuu54uOJwvO+FveFzw/qKvuGOwuWRxeeNyfCAzvuWy+2WzO+YzvKY0POb0vae1vqf1vqi3P249f/////7wLuwAAAAQHRSTlMAJIed5LZxzf5HAP//A///////AP///gBM/t4B/7H/AEJgHP/fh/8ANf/74f8AZr3/7gAAUvoCxZh7HlGraDoAhdGiUAAABWZJREFUWIWdlwtX4jwQhkFBou3mZhI3GoMaaClbpIAUuX37///VN2m5uWsLZwePaA95fGfmzSQ2fvuY/hUf4/Hy76dfolj5u/EtYLYxlJrl7N8Bnz2KySSvJdQBgCAwH898/JuC2YKHejud5iCiClGrYDWkRCy2y/Gv8bpKRA1gNttIzIgwkjFmNxUa6hSsh4QyRjChlGKzBcA3jGqArwBhu6CEQjc+Fn8TahSsCgG7INCN6dh+rld/FKMGsDZ7ARQUyM9p/smYGW7ySwFbjcvlQgCBDlfTtcWYysUXZ9UBDC7TlwZThgX86fWEU6yWlwFmRQ0ofIlIKkWxXGzXcw4dmeTTYyHqfLCQGBPooYgiF3FCmNYc6oHterpYXgCY5gst3BAa4ACggQQ8bwy+2Opf+QWA6Wz5ud4aWKSci6TvCeeUgDnnUmxmFwC89fKJd5EBgqIEi8QIIHCO1WZ1CSBf5WNvAx05GxnBpIsiBe72XZmsvbXPpDC0mx5mHBRYa6EU8N1GVglGKKbD9dkarBy1AgvBi5X7ABVWcZAxWZ1NYSlDMNKX5TuGU5DFIj8DmC0l9MBEJwSXpEmRT2II1sszKeRjcB53x/XOJoLItCSogAzzegXezVScZpByhJBIy58Z0ut6wNpvSKqOKUQa+bDFE5cGweeZNkIJYK4eARkrALIog00leqwHfAqoIVHRIYPIBrA+SHbEFJFTwH6LHvZqCShsuI/E4CDUyV4Q7lQomB1SgBrokyqaKIGX2ZdUtE4B3WPsRBRT7YuCopWHX1OBvgc8xblHlEOJyFNAklrj0sQ6CGhkp0LB06gYGLOFAAkHI4ALU8ET54hILIwpm5J2BcATCgkThinksAMIrBDSc4JQkrHAJFFwVQXYZTFbTyTBvPRNVLQwCCUKkbMI4blCzUqAJxRu3jiY5L7xLmFBiIyElSnCKBRI406jGgCE8lawdQSrwv0wB0SqwUfzEJJIQU+zDuAj9leLBcehyIosHGxEaZOEByadM3TTqAC8vuxVdGf59GMiMCJJum+kK0gpD64alQD3eiBMc6iDhcLLLPIWKudilhDk11cBtO69nhDy7cSykKkE+hmlaZrBMPH6KwEvFvzXh/d+Schn+X/vlHGmnVMwY2mArpuNGkC37+Do6Hdf9PMACKNRPBo1WnIulUshmVb7are8EtAdOErsoPvMFaQSAyT+cY1TbyhnduLrAd0e3DHtYCRDNYgfum/Pz+83KPEVjLKwfQmgD5lS+awx7d03foz6SimYZLtZ2rwIIBSGU40THd427kc9JqQu5nlkT3OoAMSjd8mcP7+04hI6/vChsFCqOCIy0j4HiB/ufxoKnjNcJNox1L4bpQyuK8xXAcZIPeDldfDQaBsOTY+c8bblQBikWmkpgQCTsB7wZszHHVJK7Me5y2zQun37yaLEwEEPx8GZFPpCPYJYoVw5REG1C9Bto1XMBQ9ofgvoH1wksYBLjdXe+OUhkiQYtVB5rCaqAvDY67++FTlouJRI2HupZkyW+zhKwVnldK0E9KVUxm/C+L3nrCrGfquDwnIc+ZG8A1Sl8KbhfwM96MZPTz84fDhVfss320jvZ8nuOGFVXXg1SvHH+KHRuEH+dhqU/e6gKDkF1BjpdfzLOe/TVhA5UHpbfqgTJMcDGswRXFcB4u4tzuRV8wbqDXeBvdImwtnxdMt45WaKpz8aKIRpi1gGRQsOjr1FNDvM1AhVbec4vvfZs7n2x+mc7zNo+KdYwyyEwqQZbjUrAHd3/kkbhW6epZlCnetjtFsIM6GNNfiE+wegSPfmuoUQ3C4xqggYiLd1gKur606rajEs77SvvgH8D8/DRxHuBq0pAAAAAElFTkSuQmCC",
          traits: ["悪"],
          baseStats: {
            hp: 8200,
            ap: 2800,
            dps: 2270.27,
            speed: 12,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 120,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 49200,
            actualAp: 16800,
            actualDps: 13621.62,
            magnification: "600%",
            count: "4",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 50,
                distance_start: 350,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "553",
          enemyName: "インフェルにょろ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 8200,
            ap: 2800,
            dps: 2270.27,
            speed: 12,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 120,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 49200,
            actualAp: 16800,
            actualDps: 13621.62,
            magnification: "600%",
            count: "4",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 50,
                distance_start: 350,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "583",
          enemyName: "マデューさん",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 788000,
            ap: 8800,
            dps: 2838.71,
            speed: 6,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 93,
            foreswing: 6,
            backswing: 11,
            tba: 44
          },
          stageStats: {
            actualHp: 1182000,
            actualAp: 13200,
            actualDps: 4258.06,
            magnification: "150%",
            count: "2",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "66.7-66.7s",
            delayFrames: "2,000-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "658",
          enemyName: "ミニエンジェルサイクロン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 288888,
            ap: 4444,
            dps: 26664.0,
            speed: 44,
            range: 100,
            rangeType: "範囲",
            kbLevel: 44,
            money: 888,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 577776,
            actualAp: 8888,
            actualDps: 53328.0,
            magnification: "200%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "66.7-66.7s",
            delayFrames: "2,000-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "surge": {
                chance: 25,
                distance_start: 150,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "553",
          enemyName: "インフェルにょろ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 8200,
            ap: 2800,
            dps: 2270.27,
            speed: 12,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 120,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 49200,
            actualAp: 16800,
            actualDps: 13621.62,
            magnification: "600%",
            count: "4",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 50,
                distance_start: 350,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "553",
          enemyName: "インフェルにょろ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 8200,
            ap: 2800,
            dps: 2270.27,
            speed: 12,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 120,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 49200,
            actualAp: 16800,
            actualDps: 13621.62,
            magnification: "600%",
            count: "4",
            spawnTime: "110.0s",
            spawnTimeFrames: "3,300f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 50,
                distance_start: 350,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "553",
          enemyName: "インフェルにょろ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 8200,
            ap: 2800,
            dps: 2270.27,
            speed: 12,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 120,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 49200,
            actualAp: 16800,
            actualDps: 13621.62,
            magnification: "600%",
            count: "4",
            spawnTime: "136.7s",
            spawnTimeFrames: "4,100f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 50,
                distance_start: 350,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "553",
          enemyName: "インフェルにょろ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 8200,
            ap: 2800,
            dps: 2270.27,
            speed: 12,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 120,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 49200,
            actualAp: 16800,
            actualDps: 13621.62,
            magnification: "600%",
            count: "4",
            spawnTime: "163.3s",
            spawnTimeFrames: "4,900f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 50,
                distance_start: 350,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "553",
          enemyName: "インフェルにょろ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 8200,
            ap: 2800,
            dps: 2270.27,
            speed: 12,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 120,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 49200,
            actualAp: 16800,
            actualDps: 13621.62,
            magnification: "600%",
            count: "4",
            spawnTime: "190.0s",
            spawnTimeFrames: "5,700f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 50,
                distance_start: 350,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "553",
          enemyName: "インフェルにょろ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 8200,
            ap: 2800,
            dps: 2270.27,
            speed: 12,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 120,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 49200,
            actualAp: 16800,
            actualDps: 13621.62,
            magnification: "600%",
            count: "4",
            spawnTime: "216.7s",
            spawnTimeFrames: "6,500f",
            delay: "1.0-1.0s",
            delayFrames: "30-30f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 50,
                distance_start: 350,
                distance_end: 750,
                level: 1
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "ピタゴラ水源",
      baseHp: 1250000,
      width: 4300,
      enemyLimit: 10,
      requiredCost: 210,
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
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 255000,
            actualAp: 20604,
            actualDps: 38632.5,
            magnification: "300%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "savage-blow": {
                chance: 100,
                power: 1.1
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIFCAkJDRAMEhcQGR8UICkYJzEcLjohN0YmP1ArR1ouTWM0WHA6YXw9Z4NAbIpDcpFGd5hKfqFOhKlRiK5TjLNVkLhZl8FcncleoMxfoc5gpNJiptRjqdhmrd1osOFqs+VstuhsuOxuu+9vvfJywvh0xv14yv9+1v+H5P+LJW47AAAAQHRSTlMACRQcJzJATFdhcXmGlqGqx9L43f+07P//////////////////////////////////////////////////////qxSIJwAAB1FJREFUWIWVV4dy6kgQxMYPbAMmDSjnjNAqrLTK8v//1a1kgwH5ru5tFaXYzeyEntFk8ndr+XE9fVn8JXYyXx62LLNazIar6ZF9+hv09H0v6QxvgKhx23fKdjT4P3+Bf9upjiHLqQRqlzj8YS1FGrz9b/jTgXU6V5BrDRipSJtUhLMLf0GwlXDj6ZomAgATpIgUCj2D2f/BTqeTyUbMi8Q76T2IAbMKUdoo9Oz5P2Av028Xv8PbUspIFMbZuYdzsl6GlKEWYfsv4Nn7eg8s+00/k3VwuyAKw6g4iSA6ZpCElKG2ft/By3JLA2WG6nq4fJ78UTsLnBpRBpTHfoqDlJ6GIcbsyxg+P4Bk+VnV5Bx9Ov84fkzmchbY4FWoR8VZHOHwa1Xf/3GzXresFuRVFoeFvZ287gVbmE32cm06LhOm4cOqnAcfzDacEVckHh7qm4PgtMGW+lDOC8U3ha8HN4t4u9tUflqBntTJhV0Dg1SN8jphWblIExlZ5+QOHoW5cxvG+V461xhdzZP5FscxN1loslzixtLa72c47F2IwiRMIv71il+AWRTDK1Ec0WOlCEVETptXiAW99ThND74MQOf+cRQFlKnRr05YC0GTDHiUnU/01VLl86hw9+AWYHWy5MhmMdBjzcVhHBJTDWhG88sv/EbO6iSNe9vSQO8jTiwG4U4Hs/PBbSS3VdQvAiLZWZSk9Um2zkXnwXzAG59NGJzDPKepotm9uxPMmJ826E0a9BbonS2Tnj/zeNSQKPAdWbSCwBzq8aDHpsQdj6zsFYWl5MNea0lxQK+SsODkzuA6Qyz7ZK4ELqUvM7SouP53pIFccvJmOXt+evqzoDkvOQNBTE7ABnWMaEZAUXESZxRxXw2aoA0l6fsh1QODo6W6X12FacbqcnEJpKK2/TEhIH0iRi6i7/DHJ4FVvaTFlW92EvXibTYdwO+KMu3jFKU+GiJeBCA3LfnCh3EUFTipeLCpe1TLesjmN8bQVDMowzRC8Xfyo+osSFZ0k4NJhSwFFKIyGtrda8oCNh+rw05rHSu9pj4ixNbO+EqBctvukKLkplQW4usdwUtf4dMdyCrCP3+JItKQ5EqQeXIQY1IjnEaV9jEZrb3hg1+gH3xW5ecTKsoYDV4sVKtAcRLqeh5W5ljWNlKFg5+yilDhyzwwjGBkee/W1NH6SOe2LIc484+P+DWfkvhWPDIPeM09UbfxqJcl7HkpQqSzVDUgOHgkmDPxjfX9Sg0rrwnOGyxAQJ+hLA3i2lJpcml5c3okOJrNPZ4WIOkrmAajloBkiEYnLTWayYwAbOo++OAgVo/KFV7cj3AFYh1HRtxKcOryrE0ZTnq/w78yEYkeCcILJcoD0Lsz2BoEHW10dpPAfXN67vX/EZ4U0eUeanXAOe2P7udQUlLH388YK6ke/T/29CS63I0rRm4Tx82IrgTEcAy4GzGm4JWPBsTEBY9crlBNTUhz6tWsxNmnD8s7AxZSNXYAJqxa/1wlYJQDVVwT4wE/2Zr1CE+1iSr8NRJUqfiOUCPqwhWYhyHrmUGj9kUX7R83OyupUPrBydSk3eGxt07ZIB0lQa+DCmTZN0OUIqpnHC8Iv/T2Obj5LxZEuAapvVRXlHMy9oK0EcYE78yvFoRx7oN8jW9pMDnBcaWtxgR8jO+R30dU+6ANEwZdSQQWFd7S2Y8IFmJ214BRUmZfKNQacHVwJfAVHTT83fSRYCngux1klnSq0HArIaxcXfZg9WRJJo6GxDchSW7FFwcSBPXAgBqFy7/NSzJGpRVTqyMnzPg7Alq+rXmpLtqtL2U6pDOmQ9BIzF7YByeGUatCkPcMdF4gFwclMVglbb/8KJBHt7gnCONGhLIH0oklv0lnjt6sldHnwloZyVmGQS37pipK5fUu8cDLqTNHij5nUf7AgOh4jpMoaXil+qGtWLFBNKlHg+ZerDC6r2jiMllL0jOj31Rq4YBPokIa7WEKWt+Gb7IBNSZIikAnCioKV2pqglTTrjSKw+TPTktI2RfO18uoSEHWJcWng35ws73ShADT6Wf8yfNnvRe1oCqHVoCSCrNM2dQdEV4XUv1jWRaAm9FheVxQk+kaBFFWjCBGcVVYwIdlVRhA3zzabYJuXItRM562J/Od7Fa+bp0JKYkrgVG3qSvu55Pp6ghWNthAFZVQl9CIMfNH/NPObouw8jTT8uxe/0lqidvF0+RlJ1M/SENS0R4nAomzRj6MDJgxQVuktSOy/SDH0rbOwqZ/sFa6UhTNdPjqyAQ4l3WmHsffnU9LRnUCv6EKdgosRots2+H6GWTvdpxc9dqatj5wcZu7wmYkCEMYllsa87gkdftJXd01XaNQDy4VZNRpVlEOm9W6JlZ377/Bh/Wy2LAePlm2DVpz9rAOHx8frJJlqWfqCgO8awrM5tev3ufZ+3K5Wm+3R7r3fh6l6n1dVMv7w263g91xvz2slsvF68Mupm/L1cdmu90fj/S1f1u745ESbDfr1fKdltM/RlLNpk7oMvoAAAAASUVORK5CYII=",
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
            actualHp: 255000,
            actualAp: 20604,
            actualDps: 38632.5,
            magnification: "300%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "savage-blow": {
                chance: 100,
                power: 1.1
            }
          }
        },
        {
          enemyId: "070",
          enemyName: "ブラックサイクロン",
          icon: "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",
          traits: ["浮", "黒"],
          baseStats: {
            hp: 1200000,
            ap: 4000,
            dps: 24000.0,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 10,
            money: 3000,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 3000000,
            actualAp: 10000,
            actualDps: 60000.0,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "255",
          enemyName: "キョセーヌ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgICAgEDAwMDAwIEBAQEBAQEBAQGBQMGBQQGBgYGBgUHBgYKBgQICAgLBwcJCQkJCQgOCAYKCgoLCwsfCwATEA8SEhIhDgUnDQAnDQEbEw8kEQgYFhUaGBYgHx5EFwBQHQFSHQJYHwEuLi5hIgA3NzdsKgU+Pj5JSUmYNgB1RS2cOwewPgFiX17ARABpaWnVSwDpUgD9VAB+fn7sg0qin57IwLzhz8Xr6Ob59/b///////+8Ns7vAAAAQHRSTlMACf8RGSJR+ajl8DowfopIWf9mx9mZdbj80v99iMGwpPfr/rL5wtH135/75v30///7/PzY/f//+v/+/f7//wD/piZJ2AAAA3NJREFUWIXtlttyokoUhqGbg5xpAgjo9kBIVKKBVgyjxu37v9V0N6gzGty9a27mIr+xTFm1vnVeKPz7hxK+Ad+Ab8A34O8BdAuabmiFrglFCKFEBaEoPjC4kRn4WZ5Ppn5gB+PRP1SjcTBwHUOGPBh5NMnLoiwipKpRsW5VlqvV/PV56BnSf0DEcJKV7xgXhADyj9+0rdar+fPAfIgwY1QUOF2+ryMQrT9utC3zPH8dmg8CsCaoKPESU0C2vQUUEUBRlr24nUHITyjd/Sje36uiyWDLXucASFpEKJt3EpwpwsfPw4+PkmawvagBVBFgQlFsdJVQRfXpdDruMwCyVVmWTQtK9l9V5Qg1CNX+GgADlOxOlIARibT6pXxb0oNylUVqQ3jqKEHcAk77FIAov6vidt0ytC/9K70JQvXxSEPYJZRQ0QJU1SUPmlKZR18D5EBDCULLTxbCZ42Aqk7n89eX53EwHA4HVMNhMH6Z55Hqf2HfY+mRNh4bAu5bnmKYMtuldpvIJ5RMN/DvayAFbXmS5YEBTrth57iISnj3VaiDtskJbpPYyF0AQYS33zg+uACSmiVxrN1OwH0CPfUKOJdhP+QHuPrFHiWEUdMsDgvuOwR7F3MCIOOa1of/BTC0q3nC5h3hw3E34LUXLfXqvgGQbu7eHF6A1G/tiXuGaYoZd7fxRqYGmG/yB64A1LtrdpcUnXb/nH3S7Hwy5R8DT00a720bGWZicwdAapik51vTRIESPeCugCAG6cUeNPapH0rc9qQJyXkOWQWI/7j7cN/7N+zLHANaSJSofYd/iI3FZnn1zpqRxA8ePbfeF5v9565tHHWekm6oFq9/eUDMyeVYNoUnHApIeQMQnT7bWga4jDFAE84AoOej5njRZwBpPN1ICvH5AhA9sgAzFsKOWCWaZ6uATuHE5gyAHjFyvA7HY03jDqCrI6QjwF0BT2vXfv9GAFOFXBWk9VXeCpDnaDs+6oI8EZKRJMg+6nlTQuKUaWm6pgG9ZygamHqiAMfLkfmCOUtAY3AUw/JtU4C22qer42zeHA/z3yEq2aFLr/jsdsAFDswNDkkIUOI+BlSSAkXJ8ZwxfrNGy9gOrX48Ch//nPs1CsWz7OBpOpnNlpi80zSlG6X6QegaHFdBdIN+rBHpM4xrjPFMZ9I0/6lndfyYEoSfYUqpvJtp5sAAAAAASUVORK5CYII=",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 250000,
            ap: 12000,
            dps: 2748.09,
            speed: 10,
            range: 240,
            rangeType: "単体",
            kbLevel: 4,
            money: 950,
            freq: 131,
            foreswing: 32,
            backswing: 44,
            tba: 50
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 36000,
            actualDps: 8244.27,
            magnification: "300%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 2
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "イチタスニハ山",
      baseHp: 1400000,
      width: 3900,
      enemyLimit: 10,
      requiredCost: 200,
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
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "022",
          enemyName: "ガガガガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgIDAwMFBQUFBQUHBwcICAgJCQkKCgoKCgoODg4PDw8VFRUWFhYcHBweHh4eHh4jIyMjIyMoKCgsLCwuLi4vLy8yMjIyMjIzMzM1NTU6OjpCQkJISEhLS0tMTExXV1dYWFhcXFxiYmJlZWVtbW1tbW1ycnJzc3N7e3uBgYGHh4eLi4uNjY2VlZWampqjo6Oqqqqrq6u1tbW/v7/Dw8PQ0NDX19fg4ODq6urz8/P7+/v///8F0x8XAAAAQHRSTlMACBCL/z5KVh0nZS53/xQ3Qf+GqUph/1R3aZe9pv7jj//xo9ux//L/xObT/uD/8P/h/u7/8v//9f7/////////YcASAgAAA+pJREFUWIXtl29vqkoQxoWDrYqotJVqLbpFKB6XdV2BdWH/8P2/1R28Nyc5SdNCc192YuKLZn4+s/PM7HYw+Cjs4WIxtj/8U7ewH7PzMV4tRtZ3Ceur0UpcjtF6/i0hthvLxjSNltdztOgvw1q9TjPdEprG1Of17Aadr9ejroD4mm0JELTWptHF2hpYi+gsTovOAKUFk5olKMlVo7O5tT7XRh06K4gUaDe55ziOl6qmjpZn3TTXdcf8gbWroXoZOijHvpcbc9nnpNbHcVfAYFkAgHuQq4mT6KZOAo/IqHs7JhgUC88hGgBINxqHCFerzvn2BkMNCjk+TnwHGyNynLLrc3dALKF9TYXgEJ1ANIrwEPEeAGtX3TwkSRggbhqRcFTmPQCDp8KYxvBcSqmMMSQsmaB9AKNDawTioRK+G50EJSNYdD/EwWB1hUThO34qW0P4JUNpL0ArwegUzjDVAPJzEqTdjQhhvbZeZADwuQFHMQyAHmfwn5lzz0+IAIBDsIeKpx6AwdMF2pD7eesHAGDmhZdegBmsJI2QklWtYCoT4QeXHiXY7vNLbmQY1okfhIHjoCrwOwOs8TrOCiFl4vn85mbHCSvks44Ae7q/gv20JB7kYVgpbS8E9k/dzsBencACMk9CmGBhSkhHyPFKEnTbiNbqots59DxcKZiEKvAcJAIAhNkcNrP71VJZwPLTIDxgqsIgAoGCoCIASI7j2e58/ELGrXuwB0OhGfy2c/t4XAR5SiJ7Vcjz/dOniOfCNDIISGW4365kTEJgMIkIwsun8yVexUX2Sb4dwfBpymEH0CQJfWiDpLDUKMbJ+zTO1uPdtT5+AnAzrWoJ6XAfabhdSQhrFVycaybk6X1nP19O0WcljKNjvKHa3AIQuialhn0oFVUqZ/vJ4bj8/La2R/b4Zf/7BJEdD78vSmKS50RLpgn4InhbdbgbrPHw7v7+zh2Nho+4pFhLqkFBQjnCOJp9DfgT82hPVc2MItrkNUlLRMuiz2aNa86bKgeAbATlKcI573O/LQvDRQMKNG3dRWkpaKUPnWtwN3UDAEWhkcIYzjijpe4OmMUYhPOm/fmawoCUhLJKic4lPBesbvWbksPdKGBDKsnT/YvbMd/ayTaTqkZSZWrCajBn9jLufIRWXAt4lLCyrV4ZSZOyLnY93ozWMo4fdofD5sTLJC1LglK26frG+pdgW5Zlz9w9IzlTjAnC+tyNf2J+5rnC5ds73b51fSX+FW7GMd9uHzf7133XBvwV1nIbbjePDw+vk4fvPd2t5ebX43DoutZ3n/62Oxp++9+Gn/iJn/g/YnQ3mUynv24xnU7uP57JfwBG47Z/ChBmWwAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 5000,
            ap: 350,
            dps: 119.32,
            speed: 20,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1800,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 14000,
            actualDps: 4772.8,
            magnification: "4000%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "638",
          enemyName: "ミニホワイトサイクロン",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 444444,
            ap: 20000,
            dps: 120000.0,
            speed: 5,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1111,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 888888,
            actualAp: 40000,
            actualDps: 240000.0,
            magnification: "200%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "414",
          enemyName: "超町長",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgIGBgYGBgUHBwcICAcJCQkJCwgMDQsMDQsMDQoODwsTFg8UGBAYHBUZHhQZHhUaHxUaHxUbIBYcIhceJhghKBojKxwjLBwlLh8sNyMsNyMuNisvOCgzPCs1Pyw0Qik3QDQ9Qzo6SC46SS47Si5AUTFIWThIWTlOYT1UaEJfYF1YbkJpb2huc2pNilqAhHyHioSRloyUlpObo5mrr6isrqq9v7vNz8vY2dbj4+Lx8fH8/Pyy8HiVAAAAQHRSTlMABx8OwjW0KYkaelb9a0ekxGA4/oS4l3Dv0Mb+q+j/drvK1/+Poufz//7/9v//sP/W/Pv+0P/q/+v//v7/////yPv5jgAABBVJREFUWIXtV113qjoQLXApIgj1gB+IpNVUSUJi5FBKAYX//6/O0J61eh/usuH07a4zby6dnZk9e3bi3d2t0HTj5vdfhGZOHmbaNwCMyZonnwia7unjCrCma84T5zeCPo0erBHplmU+pEwKEU3M4bO5wGQ5oh9jG039TAAAixdwsOETcfRGlG9u+NHf0DiIEaWhpusLITa2cr49fYioTKO168YIsci5n0ScqXdg+6kQlMVxgFCMCMFrjBFPHeUC9GUqpUCui3CMCSUMccbEfsQMvIRxGbsupRhjijCOAyye1FVpzKAFEbgBHoJAGUEcU18VwHD8RcLlAIAQzAA4oEAlTRQ5sPyEckqFgBZQgDBllDHogtOJ2hRMH46XgoOCoIQYcYIZVABTVdWR4WwopDP5jsAZIgOLRETqq2T5qeSYccEBiSDiEgE62I7wBnuZMuifQi8MNORiABghRAjdpwwHbkwBgAYu5hjBRowAuLM2ICLggDPKA5cOTEaKJNr2e69OMkwPumcAQBglIp2rpGveZredWdqdscw4wy6SgyBiSqlU2gXN2XMhsn1oalbEoAcA4Nh1QQpquwA2lkkhOd2H1iolsYsHTQ1sEnFQIdF2/E3KgDmWbmYRRS6VgMACAOChQv6dFqaCoyBwERfHiKAAlAAIAjjIlDi0IgFGEoMXQe0UI/yeLgc9Ka2CNltT4iIC2o8hkeOhAwlSkJwcTXu1cr4gUjN9ioFyAusHlsI5G07nOGaEbezHsgi/moSx4KB8MLIAgxVC8eK9BHBXvDROlxfLsG5CGLOEgHjw4MT4gz9YJiZKRsRMf2ke9efzwbwBYCZMcBBePBgJCIARzkmMm0tRXk7z1xfv1LSvt8bppYOKUOCu1+AEcDxBsJWs6fKya87506l5O81v3U9OJtlxt1w5jo9olg0AeSPr67W41jwvkuI8v82ik+xCzx4k6y2Wq1W4L5r2WnZ9VzR5XhR59pUnmFPr9y80WzO88Nxe+65su2vR5uVFlNX5CzVpnwdo1upIMav6vi6AxLZmOa2q9lnVljRvB1vB8mvfVm3ft7Ksyqauu7PiFW+He0zggi6u/aW6Xi9dWRYQ1/5FEWCVSkIFkS0QWFdl3V/KuqovfacIoM3zn3ChgwRrYLFrLt21reuyrF8fFTmwdz8p+ApYat0DA1U1zLLeh57q5aKFSQolEMEvXQcIZQ01vM3HvNLM+fbpmAKNTdV1XVXVtTyMeSYOGPYPBx5LMocJ1JUQvvoj7TN+vNbNJS+zLF9nI16J/wJ4A4Asf9ofn84jG/gI+1SKfLt7fD6sDn/28rcOu+2j43ie/kcFQJgz09QM7Rt/G77zj+Nv/I3/RWiaYesfYRvG+JWwnKl//89H3PuTmfnfEL8Ap46ibM0xMWsAAAAASUVORK5CYII=",
          traits: ["浮", "古"],
          baseStats: {
            hp: 800000,
            ap: 11111,
            dps: 3787.84,
            speed: 20,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 11111,
            actualDps: 3787.84,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-440, 440]
            },
            "curse": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "638",
          enemyName: "ミニホワイトサイクロン",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 444444,
            ap: 20000,
            dps: 120000.0,
            speed: 5,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1111,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 888888,
            actualAp: 40000,
            actualDps: 240000.0,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1999980,
            actualAp: 45000,
            actualDps: 43548.4,
            magnification: "2000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1999980,
            actualAp: 45000,
            actualDps: 43548.4,
            magnification: "2000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "638",
          enemyName: "ミニホワイトサイクロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEDAwMGBgYICAkICAgNDQ0REREWAnEhICI5OTo6OjpuD99OTk9hYWF0dHSiV/aDg4OUk5WgoKCwsLC9vb3Nzc3Z2dno6Oj09PT////wMbrhAAAAIHRSTlMAEzRGWiVvjKr96sTb////6f/+/////////////////6W4LlMAAAWKSURBVFiF7VfrcvI4DIUEEjsXO7Vd3y/v/5Z7FNLdwgdttz93VjMMSYhk6Ug6EqfTCzmPy2a2eRyur974VgbhW0tOsf63FvrJlNZaNnP3Wwvc5goTSQ4fj34a0Pl6PeNrFD6TE02Phyq7/ORgNimtAGB3mlVKtcELM/SMTDL5EwvXYQN+NWrGhEvZGtxsg5hhgfnta0DO3TAyNgyLxMmtKK5TUDoCBy48O53mkOcv1Ds2SeuDd0bh/QITVkRloyEYeHbDaYrNDa/Ur0z6HTKS6nUgJ6KXIdtALkSKI7W2nZ/rX7bQPkstKcGe1TElTS6E5rjMrfnnLgy6tgeplALlYmwaeiHUwumiLs9cuJhdpZZSP1uIUYYQm3W1FfgjfSZfnqSyM4d2ySnlDyMO9QADoSYhlUNV+kgGKB0Pcl6s3rZNSmVDgolUgjbOmpxjjCGUYkNQln4jA08yObD+eob0M+fS4D0nYob3UN4NtIhvaY2ytdZnIBwPLvNmnPek6xF+stCWOoZcInmCj6LwnqMIHGabD/S8poOj1VoIoV2QUmuLJ9lbKtDlaVf2G7JeSACW2Q90QkgpheAyRqtgIEWqiMSG8XR+5JnrloPVShECUSnyOSrShwUJ1ypciFELnOInMZ6GRyTnjQFBlE1pQTmrnXfQFzcBtC4bbWzwcEELO/RyeXCgvzJhb62gfEyB75pSW6DqrUYY1sGvolKRWc8ib48QLnpXj8ZJOOtxOlcWGUFtFdSkgXtSOymNyYmr1B4MdJPbT0+oPK+cVzjeBhRftXIVCn0W4ITgSKpxxsLmvYHr4nf9LL1BtBb6aq/7LNddDF2ioG3U0C+ZcvlZ2O38pp1TymsfuNq5oULf4Nm64gV0hKfjg461xbuG6OXRfSoaFJD06uCWsK72/e3N61WggrxAgoILBhxn71iBRXobDKLQREZrJ9ytKPUq/du6vvl1pVekNijKaPDj9rkYr7sD1Mg4AFnzRsQjpFW9HwaIrxy3VOHqsaUHt+tT7yptKAHioDezykAG3LomyjHnwmgQYxHdYwRgEqOQcKel9NEcBAcMtH9/D3LHoBnuPZdAR433ZQzF7IVAaDkn6BOONxeAv8SZ60r3WaDSbWxVzfcNvVTM4GkKhGP21HZF8xsK5VYH3NKNxE8JNAX9/s7Chl6bL9ueh1KIBYvHZNmjqA4dpXZrmhPDaC/nYb7nlLnZ+TR4xIFebEanmD3nGGsHOd98wbQSPkhqTaPvZwNziGlEee5DrEhlMN3QgEJ/UFQrTnAXghGWKC89kNrAURWs1iQpnzCDnokFdMYFGhLDktpZuAKsZcw5V/UwnLphjwPIUf2inqTHNEn8IBMIUYPHgGg0qZv9YzDsu0MNXLZbIkDoaOTdZUCorRHC5OhCagbpNH8OFpIxq0XfKlLrSBziMRUd1wHjKICMKoIpziQ5PtXHdGSDvUWgbKkGdB5DyTQb4TvyV2AXVLe8WvvOU3+x+0jOKniJdAPJZIjgwefJosOAreevl77LuacRi9kK5kEJFC2VEpomTIhGYLrSgJFGLoy9MEJtXVLIMe35L9Fjt1A0HrXa+aV6YUrOL1CELAVdqRw2tHzLR/bBwg9pPrYGmq3mBYqUCQ8tgekTd46kZUH6uq8Mfy8dfvtiVewk/J5mBQbeKRXu2r0RawoW8USvp/HFjnW4EFqYT0xXeVt50J6SihiXQfKJjf2X6rSqlACEBqV5uFnIbhrnSWFvcGL+wa7dbTvhX9k8HYySNc3yYRgu3Tenf1g45nY/+WNY/GjB/keu7DjozFS+WRC//cfRzWY3kb9Z0b9yZ5gBX7DTyw37ezlfu67rv0vf//Lfk+4yDOOIv3+H4Bqt9C8qYWDzskzTxA/B5bKw8Wk5/wW5creCybzsDgAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 444444,
            ap: 20000,
            dps: 120000.0,
            speed: 5,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1111,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 888888,
            actualAp: 40000,
            actualDps: 240000.0,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1999980,
            actualAp: 45000,
            actualDps: 43548.4,
            magnification: "2000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [19600, 9800, 2450],
                timings: [59, 64, 69]
            },
            "long-distance": {
                standing_range: 150,
                ld_range: [150, 650]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "curse": {
                chance: 100,
                duration_f: 240,
                duration_s: 8.0
            }
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
            count: "3",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "サインコサイン炭鉱",
      baseHp: 1350000,
      width: 6000,
      enemyLimit: 99,
      requiredCost: 220,
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
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
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
            actualHp: 750000,
            actualAp: 150000,
            actualDps: 29801.33,
            magnification: "250%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "43.3-43.3s",
            delayFrames: "1,300-1,300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "base-destroyer": {
                enabled: true
            },
            "burrow": {
                times: -1,
                distance: 250
            },
            "revive": {
                times: 1,
                duration_f: 120,
                duration_s: 4.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwMEBAQEBAQFBQUFBQUGBgYGBgYGBgYHBwcICAgICAgICAgICAgTExMVFRUWFhYZGRkcHBwiIiImJiYuLi4vLy8wMDAxMTE/Pz9BQUFJSUlNTU1VVVVgYGBqamp4eHiDg4ONjY2WlpadnZ2mpqaxsbG8vLzGxsbQ0NDf39/p6enx8fH4+Pj///////95SC4fAAAAQHRSTlMABQoOFRoiKS41PUZQW2RqeHF+iJCarMnW9qS0vOXF++zU4P7o3PP+6P/x//b+/f7+/v///v///////////wD/21g2+QAABspJREFUWIXtVtmWosoSPSCijA6MAqIgMpPJlExat///r05gVVlWd9/Va9372vmkZMbOHZERO+Kf//yf65+/AH8B/gL8BfgE+MOimBUviKLAs4s/Hf3topfCTtNtW1dljqH+B/v1TveuaZ6nV1cVl39GoGiGYRbPcwtu68RF1RLSlLmnPRAo6r/CUPRyzYuSKKw/yNLrrRvi7naHNbaFb4mr1WrNrZb07+0ZTlZt13VtRWTnIxQr23HZ395+wLpPbe5biqJqliqtHgg/UaGWouqAu0WeevqOg5gzghWg4f6wB4QenY7e9RoHpr5hwZZmlosXCIoVLT/FDelIjWJ3z9HUaufl5PZh/za1RZSgsqpwGtgSSzO8JIvrJwTFiLqftyP4e5uGKjS2LCNoPh4/7H/M9kU7TrdpJGhG4FXDtPfcZ3bQvOIVZHqbz7/dhzLUZVExzni4fzjQoQR102N7IshXpb0bZoGzYT8d2Llp86R77wtPt9zTJaun9y9jGRWf7rxNXe5a9hU3halw7wAQr7gcPukC4To9HkMErMcHqVudJPXTHYCLzWNaD/gJsNy4eXf7Arh1xemESJlkDx/eJhyh/v613WaHA0QMANbvAOzeQ+OX/Y/7gE+XcqgBYGbwNhZR9bJ/n/ELMiBzv3oHWCkenr7s3+4jPkX1UEXZfC/8LaL6ZX/OiUvZd7nxGUQWAMYfLydGfMnIgC9ROfvwC4MeXZK2r0JbZD4Adm4x3L9dccF9X5zPYdmN09QXF/wS4xvJorInmaesP8oC0ihtXzhOTRY1Q5sathFANTZVAoRuTw/HKslIhwPrkwDUneKjr2e49zhBfYeuc76coiRJossFd888IFmCGxw78pdCMJIeIDK9fd3QdGWsy8LeOEUFwiVOEvzYf7tPHY4SjGJnt/4qJmolO0HRDhOssa+zpOyq1N3LeyfIKtL1Y1dcLkXdj+PQNSi6JHlg71YvukAtuJ1zAmLgbwllVzZ16mlbzYsxGXpCpj47HSC1McqS5HI5nXxL/m6/ElXjAO5mcCCDuFW5Z2u6l9fd0JaoHrvocDhcIthNsuh0MFSRfRGDBSvsLDd4mGcFKknX5L6jg1PNODTFJan75gLwCKMCVVUWGHv+ReUpht/aXpyXbd/33TC7WaWeAy8I9LsyPB+SlkBOoabvalz3dW7svpRkZi+pbozqDsxJQ6aJVCj1bN2ISzIQFBvuManhEcquJ2VRNEMZW/yL+/P1fl52EKoaF0U19ij0bEV1AgzuI19XNDMqkqTqe3DmlDQ99hT2RUx51QtQOwwEtM4/h9VIQleVRNVHZIBIWJKgmqdLUoEzqX+EGuxzd7N8Adi4aQXPXOaBo+7tuBpbyNC1aIXtSApfE1neOp4iuB8HruWcoARS/ZnB89pec9K34Kq2EQQtrgFA4VjZSbsenBUZVoLnLTrw3N7v9LAZmlDj6O8MSpz6zpZjGAFKaqyD/ZrduGFdzslO8yoQwF2bujtOtlMylNf9tyYJMYihc0rwMEvZyeFe/yHpxzA0oTswABVBQ8g9hVtt3RxUxNt86/RLYavsZR5AqVmXhg75G4ZmJc3WFZ5ZcFqAS5RE0BiZlXrFA0ld6VtvpBZLdrmggdRCsFPIWeTvWIpactBkFw+5h2zAkblfL3g9bcY2dOSfZ413j6j11oPeMZRnFfJ0bvQ0RfN6jIdxpqXxK9nI+4nk/lOHvq+FpMfNOE5zuD4KhWI3Zk6Gth0b+ChpfjneoO/Z8vI39hQ7i9IAxYshVd9J0oJ2LiGdEYQ20DU3b6YRMjWw+N8MTCCLIRQdiAao9QcFeIK0HXAE2tzl/vEM5VDVAynM7fqXMYVa7b2i60DN27EMLGG+gl6rAah/dj6DxFfRKSGgVdBPqtiWfpm44AkgjZsEGgZMM95jhFhKkDh9HbrueRbxCxpA2CLcd9hXOPpnAvMTDGVgHvNuqANNoB+kEDyrp+xdUKYigTqJjsd01ntnx36nsBCtuQxyVwUiA4GCW8DMYKX11MS6KKhXVGezH2ddn0ONY11gvhFYzgRGfFVFuI1AzBWWXkpu0Y2lt1+vZDcqorlTmFtZn28ovO3qOd1QNM1wGnzugBknWmd4jFAXWW7vgb+FIa9Y0T5AZ+mb3JD4rQny/4jz+5hGL1ccJ2zsEFc4NJTNVj8XVRmZ2lZxzqjB86+tAiV9yioUmspGNUNUw5i0gYFxVkZIenm31ZxjnMZH09Z14xim6eFoGsbxEObh4xf8PBzCNDiajm6bxyCNTVuRRW6u6yUv7bZ7mB8t/XPZzm+X/bFtWZZtacp2I/HwFP8Cz8xZkCdF/WsAAAAASUVORK5CYII=",
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
            actualHp: 8000,
            actualAp: 800,
            actualDps: 800.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "554",
          enemyName: "ケルベローズ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 2500,
            ap: 2500,
            dps: 1442.31,
            speed: 10,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 66,
            freq: 52,
            foreswing: 13,
            backswing: 16,
            tba: 20
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 15000,
            actualDps: 8653.86,
            magnification: "600%",
            count: "0",
            spawnTime: "2.7s",
            spawnTimeFrames: "80f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 13000,
            actualDps: 10263.16,
            magnification: "200%",
            count: "0",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 2,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwMDAwMEBAQEBAQFBQUFBQUFBQUGBgYICAgJCQkPDw8VFRUbGxscHBweHh4hISEqKiovLy8wMDA2NjY6OjpHR0dOTk5ZWVlkZGRubm55eXmFhYWQkJCZmZmjo6Otra21tbW9vb3Hx8fR0dHa2trh4eHp6enw8PD6+vr///////8/ZZojAAAAQHRSTlMAAwgQFh4lMTtBSlNbYmhygZF6ieWc+a67xNHZp+60/uD9yvDl/d7p9//z/f/+/f7//////////////////wD/7nKhtQAABLdJREFUWIXtl1l7olgQhgPIpiyyCigKKhE47AgHXCb//191mUy6dWYSsOdunqlLpF7Pqe0rXv74l/byP+A/B3h5MIKiGRaMoUji4YeRAIJi+Jkky+KMpX4HQE54SVmtLWttyFOafBZAkAyvLhxvB+at51Pm/hZjABQjrZx9jLIsS+K9s5AZ6hkAQbLiyguTojo2TV0k4X4hsiRBkGCjACQt2V5YtP35crmcT20RepYIuZjQNDUKQM8MN87b8/XtZtdzm8e6wrOcKMszZkIOAzjF8Yvu8uEPhAvOfWuuao6rLwSWGgKQtGgfkuP50/92hhrtbcs+hOHWENkhAMVrLqq6t3vDeWSafpKlB1ubDgEmwmqXdecHQFch0wzKYxE7ymwIQMvrsLxeHwD9MdlsorYrxwAYdRtWj/5vfZNsfIS7PB5xBWYOgLe/A4K0w9nrWuUHAe9XeAScABDlPU5eV9JgFmhxtSvOf4lBjTZJ3Tdoq8zowSxMFTd9yML1rSuiTY77OrBlbrCQKFZdxgW+vv2sxOulRlFUd3W2W0FnDwEIambto+p0+ZnKS1f4UdZ2eehp0E6DAJJVLR8V+DMO165Am7RpqsgzBBhvQwCIAqc5u6houtP51PcdruACRVclO0tkx80DildtM0B5dayKPEWRj8q6Bn+VGTMPCJJipgAw/QilCfx5EKG8KaGP5jw1ZqQRFCtq1tI0Nzfzb+4tbtONrXAf8/17AElzorbYvsYozbI0SfOirI9tnR0cbTohhocqQfFzW99EaQkhPHUtzKXr9XRMfcfgP0f7NwBQE9mw93FetbjDTVXV3QXXZYZuc4T+lIavAXD8ue0GqIT89bjOk7TElzoJd7qtTH9Jy9cAVlo4+wTy3zdFhsJwh8r2nAfeWhNY+pc0fQ0QVm6YVLjvjnm8X9q2HpbtKXWtOU/fy+vXAG0bFPh0aopop6/nomwfyrZPdejgkeJqbKFiIWWxZxkSzwpWDMdJdI2nXsYBlG2UVVnk62uZmVCM6MRH3CX6nBsLgFEUooNnKSA/JPTkEkEJoqXMkiMBrOrorrOSuZsDNVX0pMM1ciRmLGAC8qmKU/ZWsgQtW7v8jEEJRHosAPqY/lypKNbw4vKCy/CJE7y8rxAfKWcEOEB77eroiSzcvURMtSWM0XPXJruF9DtLFlRRinvcn8rYMx7zOAYwYRUPeqotjv0xD22JHVfKv96BCPgFiHGQ4a5BS2NGPgcgeMWBCBzTDSpxlx1s9T4KwwCCFO19gnvQMz9pTiVyDW7yDIBiNT0uO5wGrhuUMByCD0EYDWCExQaU7Bh59tLN2v4YbRX+CQDBKdugOjX5zpIN5/0or2uBGDHS/vQHcT2kzRkKQOGk1WtyW42W8oQcCyAZeYnqrk8Pa2nCyXZQ4yYzFZZ6AgDDsK5jZ86TNG/ss7JMTIOdDAMm7FSQZFWx3BBEyXcd27KspRtESWQ6hjJXZUmAZv8a8PGNYttLfRcGgenq7+aafuC7umPbtrVeKRL3NUDQLAccXNf8B4PHQHQs7ZtFk53JmmGsFosFnMO5N/hveLoyDE2dfbPmUQw3nQmiKMHH2lxT7mwuy5IkCcJsyjGPW9oPptaT3VzATtMAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 8000.0,
            magnification: "2000%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "440",
          enemyName: "レインボークマトーク",
          icon: "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",
          traits: ["赤", "浮", "黒", "天", "エ", "ゾ"],
          baseStats: {
            hp: 50000,
            ap: 1200,
            dps: 356.44,
            speed: 30,
            range: 420,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 101,
            foreswing: 15,
            backswing: 41,
            tba: 0
          },
          stageStats: {
            actualHp: 2000000,
            actualAp: 48000,
            actualDps: 14257.6,
            magnification: "4000%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [400, 400, 400],
                timings: [15, 30, 60]
            },
            "knockback": {
                chance: 21
            },
            "freeze": {
                chance: 33,
                duration_f: 90,
                duration_s: 3.0
            },
            "slow": {
                chance: 33,
                duration_f: 90,
                duration_s: 3.0
            },
            "weaken": {
                chance: 33,
                power: 90,
                duration_f: 50,
                duration_s: 1.67
            },
            "warp": {
                chance: 21,
                distance: 500,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "二等辺三角渓",
      baseHp: 1440000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 200,
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
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "388",
          enemyName: "ウルトラメェメェ",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 500,
            ap: 1000,
            dps: 697.67,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 75,
            freq: 43,
            foreswing: 14,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 12500,
            actualAp: 25000,
            actualDps: 17441.75,
            magnification: "2500%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 266000
            }
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
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 225000,
            actualAp: 7500,
            actualDps: 4591.75,
            magnification: "2500%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "119",
          enemyName: "マンボーグ鈴木",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYICAgJCQkKCgoMDAwTExMeHh4iIiImJiYnJycoKCgzMzM0NDRGRkZISEhNTU1SUlJcW1t3d3d8fHyGhoabm5ucnJzIqguioqLWtx+xsbG2trblwxvlwyDixCbjxh7oxifjyDjxwi/BwcHrzTbbz2vez2fJycns1Erv2lnU1NTy3l/e3t716YH//wH364z07JXo6Ojv7+//+sb29vb7+/r///86574sAAAAQHRSTlMABwxIpbnI2OswPhMehCdCV2elGzx9X5jltYCz0ejL6wX/Ef7tQyMXUGF/Bv4f4cX9Onr+n//fAbj6////////5XCcigAAAmZJREFUWIXtltly2jAUhm2apV5IgADGi1giFydEbQWq2kaKpPd/q8imrKEzknzTi/5X4Jnz+Sw6v+x5lxSH0cXnxhpPBnetAMMSpa0Id4ChpE0VDwUVs14LQFRwRdMWKXRSKFQ5bANgSrHssVo2qh7nv2wBWMi3b6vnpy9aT8+rzXpuBfB1BvLtdbVeVlrL9ebn78oaoMTr9x87bdYvVgBdAlWK6yZ81aqql7lVuAbkXColc98ybq9oquMZzZ1PQlxwKSma5f3ALQm/B3QPdBcQSEInRJQz1UjQWeKwl35G1E6SFD3rJOJCqIP4bNSxTKAPsDwiyNLSHEKgh6COCdiOMMLqXDizqWIEqZBnhHJsHt9JIPkDkIoT2vwURWwMCMDh9RxBvG0o6hsD4oLte4jRZEGaQ8XS0BxA9i3ABJLtPw6AKeC+rKtnlFChS0C4WQspSGkDkGiBKeF14O5Qiql5CZQLsCBCHc+SC+MMOinS9wqEdQJ7CZBnpoCokEpKRhA7AqBBZLyTfnLy7kZsEpiGa91v/eikAKurthnDyTaWfStPuSsYP/WDkZ0naU89NhRR2jpSM4dD/6Zja0/0MyS326wEzl2+E8JJY8uSk+nY5XqKUgwFIxCk4weHcP2RVUohKUxD2+btAdN6Cixxvp39tG4BTVzjPT+vTQCbu+AHZfU2wRafmhmhSgKbBTxTHzDFU9cZaPWgbsHIPV4vtGxVgTecEex+CmoAYEWbBLwhhpYe8iGDgfllfElBt12857fK/7/+CfmdKI6DMPxUKwyDOI7sNjvsXl3f3H7e6fbm+qr7t814B6c1kYwVXmyVAAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 1200000,
            ap: 9260,
            dps: 1076.74,
            speed: 3,
            range: 840,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3333,
            freq: 258,
            foreswing: 59,
            backswing: 62,
            tba: 100
          },
          stageStats: {
            actualHp: 1800000,
            actualAp: 13890,
            actualDps: 1615.11,
            magnification: "150%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 294000,
            actualAp: 16701,
            actualDps: 31314.36,
            magnification: "300%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "388",
          enemyName: "ウルトラメェメェ",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 500,
            ap: 1000,
            dps: 697.67,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 75,
            freq: 43,
            foreswing: 14,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 12500,
            actualAp: 25000,
            actualDps: 17441.75,
            magnification: "2500%",
            count: "3",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "379",
          enemyName: "天使ブッタ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAEBAQFBQUHBwcICAgJCQkMDAwODg4PDw8PDw8QEBAREREdHR0iIiIlJSUmJiYoKCgoKCgyMjI5OTmHIgFAQEBERET/AABQUFCRQwtXV1efUxmfVBmeVRZtbW2pYCFxcXG3ei2Kioq8iRLHjhfHk0qbm5vXlDHNqQGoqKjZqx7RplnarTnYtBrssQfbrVXkwi2/v7/oxlTr0H7s02/Q0NDt1Yvc3Nz//wL355jo6Ojy8fD6+vr////////VHyq2AAAAQHRSTlMAC9/LGTFjdlNBhqokmGiCzgnyq7oG+ssB4gr8WCJA/XHxWPsXOJX/4Qb+SKp8MQzOXv6e2MP/7P4C7v7//wD/FRcZIAAABEhJREFUWIXtVn9XozgULUopUCgVsEyKnYhxzZpWrVFjbJLl+3+reUnHnbZq4ZzdP70ePZbm3bx33y8G//xHDL4Jvgm+Cf4nguM4P58vFj8vLi4tLi5+Lhbz8x8dNrvmi6ub1Xr99x+s16ubq8W8r/3lerN5frp7XP61xXJ59/Tyunm+u+7nxWKtzStcuJgDIJi5DedyrdvX5UMvgvnVy0ZvXp/Xq9XqBrBarZ9fN1pvnu5v+8Vwe219ft7s4Pnl6fH+oZ8DFg+3D/f3y8d/sbwH6/7mDj/e3q5v3/H25uTzEr/LzD88smvjT6ax10GQoXI09HdO+eNx6G2ZwqKhaScB5QSVaTB8PxghikbwIcmqhisad4UQIWWUYARlQ3dtWFItm8AbFkToVqGoi8BPmWnhR9LKeh4iJpQSVVRQDU/pSdBJECCmW4DhKBx4KeWcUY7GjbUXGHdqEExnNZGWoeXV0EuZYAA05ZZTSdqZhQhxwZUjMCT2Rw0nhJM85+CAaeVHDbwDRi+uhQFjyyCqrKopty5gzIBVNQcO+GFWFGkc/imVs3kSI9DbEhiNa66N01RzTKRm9XivzKKi4QzXNSq2jp0l4STL0mk+w9xYCoadng6KYi7InoZRxbRhVECUJST9LIJSIQBQkSsXg8ROTve/gftxOdyxT0oQphWMEkGBOcmc68awmsl3xwmzUlBHo9ks35NgYlPbasG55gxNSiLfb8IAquzFnAIjyZmVlWE4loZR4g3OzmzAKYWnwqkkKYbyMb+jNVqQGVH2s7F/th5ILCSu8xxVWZilEx8IGFQbYRJcgArjpt0Brwllst17RBQhkAolCaKsSW3fGUEYh1Iltcv9DowC7D+S4ADFCkLS8I1C0CcNJJcKBe07Y/uHP4cghFqfIWQua5cFLZWmRZA2ugeBlYbpOp8JhXOKBr4/ImAmy2FSih73WwoggLagLJ+xahCkBbWJGntRLwcsoDIhbMagctJB1tj2MGzsTUhP+1ZhqlutleZlNJgQay9Q4GU9CdxEseVmeAnTyk8b8KWCeZnRng5oQXFeM0WLyHO9PJmEdvj2JDAcY0Ly0ylKd1vKNgUxPWKAFmG8gaUxDA63E0zyHvezGSZ1Pj283c2lgredLkC7ENAsTz9bjmG3C9AA2kjQ/NPl6sVEdzKACKDeF0M9Kbu7SZNp8PVOiKrOdtCHI30/iJEL4pgbGjbdEQyn4IKbpF9pwIujLyewRWHMuPb6KF+7bZpj9m4+gU6/d9KuMcivJCcHO+kj/BL2ryS2XLiAQbWFcerNZpgeldDBNbXm03haw7arcdM0CNvcqCpG0jSdbxa2IwwMKD8jMOnrcRCEkRXGDr1SmOZoDlwMBSxUw1MvtG9J25yBMFqJIsm4bjpejjw/GdWkwc04DHLYH/koBIwQrIx6HMZ1Mw2GiX9EBj8cxaeAkxP7ewD7xek4HoXJjsUvL6NIwJVJ/jsAAAAASUVORK5CYII=",
          traits: ["天"],
          baseStats: {
            hp: 800000,
            ap: 6000,
            dps: 8181.82,
            speed: 12,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1200,
            freq: 22,
            foreswing: 14,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 9000,
            actualDps: 12272.73,
            magnification: "150%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 340,
                omni_range: [-340, 340]
            },
            "weaken": {
                chance: 100,
                power: 150,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "388",
          enemyName: "ウルトラメェメェ",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 500,
            ap: 1000,
            dps: 697.67,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 75,
            freq: 43,
            foreswing: 14,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 12500,
            actualAp: 25000,
            actualDps: 17441.75,
            magnification: "2500%",
            count: "3",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "6.7-8.0s",
            delayFrames: "200-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "658",
          enemyName: "ミニエンジェルサイクロン",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 288888,
            ap: 4444,
            dps: 26664.0,
            speed: 44,
            range: 100,
            rangeType: "範囲",
            kbLevel: 44,
            money: 888,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 577776,
            actualAp: 8888,
            actualDps: 53328.0,
            magnification: "200%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "surge": {
                chance: 25,
                distance_start: 150,
                distance_end: 750,
                level: 1
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "遥かなる点P",
      baseHp: 1600000,
      width: 4500,
      enemyLimit: 10,
      requiredCost: 230,
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
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 2800,
            actualAp: 1200,
            actualDps: 2000.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "235",
          enemyName: "ドリュウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAGBgYICAgICAgKCgoKCgoODg4ODg4SEhIVFRUXFxcYGBgYGBgfHx8gICAgICAnJycpKSksLCwtLS0vLy8wMDAzMzM3Nzc4ODg5OTk6Ojo8PDxFRUVGRkZGRkZKSkpOTk5QUFBRUVFYWFhZWVlbW1tcXFxdXV1kZGRnZ2dtbW1ubm5xcXF5eXmCgoKJiYmMjIyPj4+ZmZmampqlpaW0tLS2trbDw8PW1tbf39/n5+fw8PD4+Pj///////8FZrShAAAAQHRSTlMACBckdDSXQmIQtPgtUnnI4D8i/qWNXXK4C//0zP+Y5Kr/y4Mj/9fm8f9j//ba////b//+rv/Q/v7//v/+/wD/9d0IEwAAA/FJREFUWIXtVWt34jYQjXmENyQ4JI7BAbERoApGqhStJT/q//+vOoJssmS7qTn91pOBAwbrXt+5I81c/fUf4+qL4Ivgi+CL4Ivgf0XwWfSmz889//X4+Om638T0j5fv37+vut27w8ufzxfDg9uXrKiqnA0GCdjs5WKG9toVRZYKEsYhZdq+TC/E90MOwGmSJHFIKGXb24vwzX4YJoQkcUyTMIxRxvzhEnwwJgmJw8HAsxBKUMZ8fAnBcILPxnecMKG0MVrDvBVcBe1mPfzjeB6HHs4RjKGV0vQ6uBpNrhu1CKaTmHLgHq4lp5SQOA6jYaM/6Nck6CcAlEqD6CRU1mWGJ7vZ7GaAedSIYNiaJCxhnBBlU5lXVWWBcm3lpJ4H3cVmmfCEMGLyNMXtWFWFy8uqlN1a+OAajGIyAS2y3JwIjmFX9Rxo9JVBC6mGtMxT56Flbo1xm04t/FUjEoICkVIXldUOpTvNKWd8VstBJLgehIxyqdC9MjVlrhI8DISHk3Y9gqvODRoI4MUXNnc8JiDTFM91zW0UtOZKcWbLV+uM9RUo7M11qx5BewJyt3fVeZTFtlPPAxQAi4WtPkapWwFGHYKbm8kSlC0+MKT967vV08PwXzia48XeWGuA+iqcEcyxN7r0MPt0P7cj6Y7ulU7pMw2lhOLohYm6v1fRXqflD0Rh0jMCoV8vzPww+6d6BEFvNDHlOyQ7k1AKcbrnDFP64RcNvdtv32Y3hLvcZa8Qx0zqjrLLPMtSzo6mZMI4SA8fz0Xv4aAV1ZlmXEjrrM2wboxzUFlhfU8TIJnEHVWlkFdWmg89NhghnquyMtQ6zZgQ4Cw2VIZ8ioNUWkkh/A/DiS1yRhfDn9C3D7NISUnT0lHjxxl3heEMpESAUgqYkBjAGQ4aRgk4YPun3hv+/uDbridISegwydhWOcQMjjAfeDaF4ByvOAUBBCXqzah9KsX0fqORQOL/lNLEORqGaakSnGzHBwvOGCFoBzZZjSvRF+7HhdweVj6NxmwvES2BcRoLSFIa0kRabGjGYBtBFccXAe19wMBBoxAutTba97jgdrXdo2eeH7PFiSY0JJT4lQrlogq8wJYEP/LB3ycypfczP3IbnXGEXRjdQinAkVqx5Ji/Xwe+rkcHufwp1OlTPJ1sbEeg1Cu3kvJ8JfgU8c7Jkfc7Quw3T9O3bfRmuZC/hMAU2W6OEgQA7Hfb7W6/3y6icfu9lJ3ZYreH0+KPRLCMortxt/W03qzv7mYPo05ndH9/22ycnYeg3R2v1pvNIlost3usFTLtlsvtdrmMuo2Gb0W9ZrvZ+KwnBb3pcNhsNIej8XgWrder47Nwv3zWg/4GvOFiKMNljRIAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 420000,
            ap: 4500,
            dps: 1125.0,
            speed: 4,
            range: 450,
            rangeType: "範囲",
            kbLevel: 8,
            money: 900,
            freq: 120,
            foreswing: 61,
            backswing: 45,
            tba: 30
          },
          stageStats: {
            actualHp: 630000,
            actualAp: 6750,
            actualDps: 1687.5,
            magnification: "150%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 350,
                ld_range: [350, 900]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 78000,
            actualDps: 29620.26,
            magnification: "200%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "654",
          enemyName: "メガメェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 48000,
            ap: 39000,
            dps: 14810.13,
            speed: 8,
            range: 200,
            rangeType: "単体",
            kbLevel: 1,
            money: 200,
            freq: 79,
            foreswing: 12,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 78000,
            actualDps: 29620.26,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [13000, 13000, 13000],
                timings: [12, 16, 20]
            },
            "omni-strike": {
                standing_range: 230,
                omni_range: [-70, 230]
            },
            "counter-surge": {
                enabled: true
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "607",
          enemyName: "オオウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgEFAgEFAgEHAwEIAwEIAwELBAEQBwMTCgUZCAAUCgYbCQAfCgAgCwAiCwEkDAAlDAErDwAuDwAyEAAzEQA2EgAbGxs3EgE3EgA/FQBFFgBFFwBJGAFLGQBPGgBQGwApKSlUHABgIAFjIQE1NTVyJQCELACQMACdNQBPT0+vOgC8PwDQRQHiSwBwcHDuTwD/VAD/WQCPj4+ysrLh4eH///9ZrAVxAAAAQHRSTlMACBYoPVhp/3XFkOLrSIDY9Ln/o67K4JiG/2V4VCj1btg6/13/SgvUMCHp/v8M////////////////////////n5rMEAAABDpJREFUWIWll+1W6yoQhqu1Yr9MQz9srHZrRE8VFEJJKLDd+/7v6gCJSXt+JHSd+aGSlXkyzLwzYK/Xboto1/FGu+0AWL3/H8ADBHBxxvvvy7u3kwf3ACTgVzjgBYDo8RSQEjAJ38QrAGD2cPTgAUAG0nkw4H1mCWDdPHgGAGMKXoMJSwABAvM6Ee8zCLlEy89QwMa6IwriH8JbBHBhFLoPBexmWABGQfSTtxgQow0dB4cQA1kkBQXjSoB3ACqtFd2EAl5AIrEwAk6e/foXSAttCavQED7HEHOmTF6V8zmxOK0NC1bTHSp4UWiTY/Bil28rklmAlk+hIewAV1I7E8Dlfs6EWxgSrIUFIN7fhu264IWVi/wuFPDq817GgDa9HTb+b7V66/YtLQa5qQgar3vLckMGPYeHQGuAJpsN9ytDH7pdK5snsgZovCAlgAXLubfbHgF0WqbkHEBvQ44AEnohGPoSDvgcZk0WDEv8r+yMCGxTyoagEi/mfN3t19jrtiGYDBmjcjpZPwRLwRJmXBtTQRBjKclyQVfhpew93q0QFdIzFGFS27miJQqeC9beHqfrJWpUWcrijEPCQ55jegJQ27PPyjU7jsHk55x03u5LTVQZNWZ75mE7mHiAYinzAaRJeCUu+leXV5i6LRhsTyzXlunJwdVq0/kqRduJFK4bDbUAN1oSkISdlFdLmrsulEYin33kAYbisCze4KLOO/ETRRV52dZFSAS3VFJZFy49FkLQdL0mmuWqdqFHI84CRu3Olzfx0yzDVKnGCTcEk7P2Klx/7L8gSFhRHAE0QaqUUZZi1rqF0X5v60VPG8g7lgSNuV61fX//Za8oSU5d+zpTDaFwcjAZM9uW/X/8/v6G9lbEtdI5xTTXP7EYkfgJw3CxbAng8OfvHwhB6pKFMpEh+90qCCMJoozAybKlnxeH3982B7QSkXHfFU0BCm7HWtyWwqeDrUAD8E5JcSwCI6N2wN4BiH3vZygbjk5KIlsyUANSjiGsP4xOQhCtnbA4HA7uqmpLCaCQZfPQ7BhABm2AwWH//efL+dtmSrLShR3NRFMsL9oAF08HaKWUpIDV5/NJBAa3BmDHyJetIkxN3nSCIcLoap7qrHOYTD/2VkiFqT+qXBKlv2tyko4vuwC9/sLmIOF1BFaR7s5oXDfwYtsNsNMs4Vxw/qNgzN2RWCbT4H4A4DLitmmkj8E1j9sNdldXqy86DQD0YkxUJdwiTexoMzq1YSg7VNh1gH9/WzWgFAwjghGi/9y4fxrsdBYd89DbiFcl8LuwM0XS4eVKuemsdJcOrF1E9eXGFdPq2UU+yl0diMyH3YChKKeZ0YWySaSGcTm8ZUIIjlDWXcj+dbRFGBNCEISIklQQlIEZTBFKE5jMBu2E6RB02k3HFvrTwe1oEQ+HUTQejyeTif05jqJhHM9HN4Or/0rpX1/xIFyDOfulAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 65000,
            ap: 9000,
            dps: 6279.07,
            speed: 22,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 43,
            foreswing: 12,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 18000,
            actualDps: 12558.14,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [4500, 4500],
                timings: [12, 14]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 151]
            },
            "knockback": {
                chance: 30
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "607",
          enemyName: "オオウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgEFAgEFAgEHAwEIAwEIAwELBAEQBwMTCgUZCAAUCgYbCQAfCgAgCwAiCwEkDAAlDAErDwAuDwAyEAAzEQA2EgAbGxs3EgE3EgA/FQBFFgBFFwBJGAFLGQBPGgBQGwApKSlUHABgIAFjIQE1NTVyJQCELACQMACdNQBPT0+vOgC8PwDQRQHiSwBwcHDuTwD/VAD/WQCPj4+ysrLh4eH///9ZrAVxAAAAQHRSTlMACBYoPVhp/3XFkOLrSIDY9Ln/o67K4JiG/2V4VCj1btg6/13/SgvUMCHp/v8M////////////////////////n5rMEAAABDpJREFUWIWll+1W6yoQhqu1Yr9MQz9srHZrRE8VFEJJKLDd+/7v6gCJSXt+JHSd+aGSlXkyzLwzYK/Xboto1/FGu+0AWL3/H8ADBHBxxvvvy7u3kwf3ACTgVzjgBYDo8RSQEjAJ38QrAGD2cPTgAUAG0nkw4H1mCWDdPHgGAGMKXoMJSwABAvM6Ee8zCLlEy89QwMa6IwriH8JbBHBhFLoPBexmWABGQfSTtxgQow0dB4cQA1kkBQXjSoB3ACqtFd2EAl5AIrEwAk6e/foXSAttCavQED7HEHOmTF6V8zmxOK0NC1bTHSp4UWiTY/Bil28rklmAlk+hIewAV1I7E8Dlfs6EWxgSrIUFIN7fhu264IWVi/wuFPDq817GgDa9HTb+b7V66/YtLQa5qQgar3vLckMGPYeHQGuAJpsN9ytDH7pdK5snsgZovCAlgAXLubfbHgF0WqbkHEBvQ44AEnohGPoSDvgcZk0WDEv8r+yMCGxTyoagEi/mfN3t19jrtiGYDBmjcjpZPwRLwRJmXBtTQRBjKclyQVfhpew93q0QFdIzFGFS27miJQqeC9beHqfrJWpUWcrijEPCQ55jegJQ27PPyjU7jsHk55x03u5LTVQZNWZ75mE7mHiAYinzAaRJeCUu+leXV5i6LRhsTyzXlunJwdVq0/kqRduJFK4bDbUAN1oSkISdlFdLmrsulEYin33kAYbisCze4KLOO/ETRRV52dZFSAS3VFJZFy49FkLQdL0mmuWqdqFHI84CRu3Olzfx0yzDVKnGCTcEk7P2Klx/7L8gSFhRHAE0QaqUUZZi1rqF0X5v60VPG8g7lgSNuV61fX//Za8oSU5d+zpTDaFwcjAZM9uW/X/8/v6G9lbEtdI5xTTXP7EYkfgJw3CxbAng8OfvHwhB6pKFMpEh+90qCCMJoozAybKlnxeH3982B7QSkXHfFU0BCm7HWtyWwqeDrUAD8E5JcSwCI6N2wN4BiH3vZygbjk5KIlsyUANSjiGsP4xOQhCtnbA4HA7uqmpLCaCQZfPQ7BhABm2AwWH//efL+dtmSrLShR3NRFMsL9oAF08HaKWUpIDV5/NJBAa3BmDHyJetIkxN3nSCIcLoap7qrHOYTD/2VkiFqT+qXBKlv2tyko4vuwC9/sLmIOF1BFaR7s5oXDfwYtsNsNMs4Vxw/qNgzN2RWCbT4H4A4DLitmmkj8E1j9sNdldXqy86DQD0YkxUJdwiTexoMzq1YSg7VNh1gH9/WzWgFAwjghGi/9y4fxrsdBYd89DbiFcl8LuwM0XS4eVKuemsdJcOrF1E9eXGFdPq2UU+yl0diMyH3YChKKeZ0YWySaSGcTm8ZUIIjlDWXcj+dbRFGBNCEISIklQQlIEZTBFKE5jMBu2E6RB02k3HFvrTwe1oEQ+HUTQejyeTif05jqJhHM9HN4Or/0rpX1/xIFyDOfulAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 65000,
            ap: 9000,
            dps: 6279.07,
            speed: 22,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 43,
            foreswing: 12,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 18000,
            actualDps: 12558.14,
            magnification: "200%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [4500, 4500],
                timings: [12, 14]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 151]
            },
            "knockback": {
                chance: 30
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "235",
          enemyName: "ドリュウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAGBgYICAgICAgKCgoKCgoODg4ODg4SEhIVFRUXFxcYGBgYGBgfHx8gICAgICAnJycpKSksLCwtLS0vLy8wMDAzMzM3Nzc4ODg5OTk6Ojo8PDxFRUVGRkZGRkZKSkpOTk5QUFBRUVFYWFhZWVlbW1tcXFxdXV1kZGRnZ2dtbW1ubm5xcXF5eXmCgoKJiYmMjIyPj4+ZmZmampqlpaW0tLS2trbDw8PW1tbf39/n5+fw8PD4+Pj///////8FZrShAAAAQHRSTlMACBckdDSXQmIQtPgtUnnI4D8i/qWNXXK4C//0zP+Y5Kr/y4Mj/9fm8f9j//ba////b//+rv/Q/v7//v/+/wD/9d0IEwAAA/FJREFUWIXtVWt34jYQjXmENyQ4JI7BAbERoApGqhStJT/q//+vOoJssmS7qTn91pOBAwbrXt+5I81c/fUf4+qL4Ivgi+CL4Ivgf0XwWfSmz889//X4+Om638T0j5fv37+vut27w8ufzxfDg9uXrKiqnA0GCdjs5WKG9toVRZYKEsYhZdq+TC/E90MOwGmSJHFIKGXb24vwzX4YJoQkcUyTMIxRxvzhEnwwJgmJw8HAsxBKUMZ8fAnBcILPxnecMKG0MVrDvBVcBe1mPfzjeB6HHs4RjKGV0vQ6uBpNrhu1CKaTmHLgHq4lp5SQOA6jYaM/6Nck6CcAlEqD6CRU1mWGJ7vZ7GaAedSIYNiaJCxhnBBlU5lXVWWBcm3lpJ4H3cVmmfCEMGLyNMXtWFWFy8uqlN1a+OAajGIyAS2y3JwIjmFX9Rxo9JVBC6mGtMxT56Flbo1xm04t/FUjEoICkVIXldUOpTvNKWd8VstBJLgehIxyqdC9MjVlrhI8DISHk3Y9gqvODRoI4MUXNnc8JiDTFM91zW0UtOZKcWbLV+uM9RUo7M11qx5BewJyt3fVeZTFtlPPAxQAi4WtPkapWwFGHYKbm8kSlC0+MKT967vV08PwXzia48XeWGuA+iqcEcyxN7r0MPt0P7cj6Y7ulU7pMw2lhOLohYm6v1fRXqflD0Rh0jMCoV8vzPww+6d6BEFvNDHlOyQ7k1AKcbrnDFP64RcNvdtv32Y3hLvcZa8Qx0zqjrLLPMtSzo6mZMI4SA8fz0Xv4aAV1ZlmXEjrrM2wboxzUFlhfU8TIJnEHVWlkFdWmg89NhghnquyMtQ6zZgQ4Cw2VIZ8ioNUWkkh/A/DiS1yRhfDn9C3D7NISUnT0lHjxxl3heEMpESAUgqYkBjAGQ4aRgk4YPun3hv+/uDbridISegwydhWOcQMjjAfeDaF4ByvOAUBBCXqzah9KsX0fqORQOL/lNLEORqGaakSnGzHBwvOGCFoBzZZjSvRF+7HhdweVj6NxmwvES2BcRoLSFIa0kRabGjGYBtBFccXAe19wMBBoxAutTba97jgdrXdo2eeH7PFiSY0JJT4lQrlogq8wJYEP/LB3ycypfczP3IbnXGEXRjdQinAkVqx5Ji/Xwe+rkcHufwp1OlTPJ1sbEeg1Cu3kvJ8JfgU8c7Jkfc7Quw3T9O3bfRmuZC/hMAU2W6OEgQA7Hfb7W6/3y6icfu9lJ3ZYreH0+KPRLCMortxt/W03qzv7mYPo05ndH9/22ycnYeg3R2v1pvNIlost3usFTLtlsvtdrmMuo2Gb0W9ZrvZ+KwnBb3pcNhsNIej8XgWrder47Nwv3zWg/4GvOFiKMNljRIAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 420000,
            ap: 4500,
            dps: 1125.0,
            speed: 4,
            range: 450,
            rangeType: "範囲",
            kbLevel: 8,
            money: 900,
            freq: 120,
            foreswing: 61,
            backswing: 45,
            tba: 30
          },
          stageStats: {
            actualHp: 630000,
            actualAp: 6750,
            actualDps: 1687.5,
            magnification: "150%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 350,
                ld_range: [350, 900]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "431",
          enemyName: "ユメミちゃん",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 500000,
            ap: 10000,
            dps: 3529.41,
            speed: 4,
            range: 180,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1000,
            freq: 85,
            foreswing: 49,
            backswing: 36,
            tba: 10
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 10000,
            actualDps: 3529.41,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 50,
                ld_range: [50, 1850]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "431",
          enemyName: "ユメミちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUFBQUHBwcHBwcJCQkJCQkKCgoMDAwNDQ0NDQ0ODg4RERESEhIUFBQUFBQZGRkbGxscHBwgICAhISEjIyMqKiotLS0vLy81NTU+Pj4/Pz9DQ0NQUFBUVFRcXFxra2tsa2x4eHh/f3+JiYmUlJSdnZ2kpKS1tbXCwsLKysrT09Pf39/m5ubu7u729vb7+/v///////+ArTD/AAAAQHRSTlMABtkOGP8wO20lUUh7rO75WruZy/9kiJBz/9jC4/H/t/h4/t3/ntC25f/z3v/+5/7w//7x//7+/v///////wD/9vdcoAAABKlJREFUWIXtVtmWqjoQFVEcaBUFh7SaxhwcaFGayChw+f+/uhXAARwOZ92X+3CqV68lgdrZVbuqkto//9FqfwH+Avw/AN4bx/MNnud+89VL7440WW+32/VKbPyxL8fVOqvN98EOAt+zj2vpTyB4oTWezLrbk03tcwIWh+5x3aocCL/a73+cn50ThcE5TuIUwj9sulURxKN/jpKzSU8nBwCSMIiAg2NVReBmpxjcYtfoSaujH8cu9eERIDatagykY5SydrcNbnw8x76TJiKJ6LpaJqWfKE4B1nytsfWiKMrSEDjf4ypBcDPKHCJnD58DgOun/klgW+a8U4WBuHf9MPY2Il+rCftzEKb+iUepVY0CP95ujpTtz/EZm9R8Sqn5VSkLXKMjtWH/zmr9y2IJPHsgZOQ5jrtj5dSpUpbsu+3JcywriGKq20zY0LO+t2Oemy1mlZK5OkH6Q+tgOYZmBJFvW9AZ/s9K+NLeRsJ3hJYotgRh67HQQ982sKYZlkmpA4jBvtfXPoWX3sJ4+rXZgW3mOz+VPwn0JtEONFczMgaILF7UZKM7gvy7fgDmO4aTuoQmUrBG41yOUG8qLwC41mhneeFFtxgQoKlCiptNrNnZchzauImI/Kyg+PHG9KOr7ElsE6KbZ0drMgCX9VNytgyiKIj0niSx8bGzwzv3xNdha2QYqAmc9SCElxHFiP31P/hH/8m3e3NPQ9fAFZzhHxHTPRjUNrHC0PDyEYBv77x7f5gCGm5eDCGNKBkWg8Rk0S4hcN1fTmF/IEDQFUBpFg10nBURWrIZFQE8HZfd7gyELPSl0CNuwT2JqYbeAACHT/GG0BoODmERIDQ09MafIXxda6HTU7FdDCDxtXcRpEEsJ3ka+KmKNa/onzh3GryisOhmANKiOdDP5RSQ5wDKjRcmWVPzU7k3PBQ1iCMQsRAC0vW0og76fRBSWgKdTmNaFjE6lAGgFDWiU9+4D6J3zYJVymFokIIICrZcHwa8Z5s33FtXM4BSHT4w0HXbNA40LenrojrJaoGbmHEpB2UABoFgz8KiQvKDhvswo6IIkUne11Ee2PKi5LFUiC9lLLFSp1kMwsZ/LKQqFMg8G02Nr8dS/k0vZHbRgWt/l0qR6fi+GVIGeDnO+/mTltL4myTkJY3UWd6QslaciDBSyWsGMJgzfoo6uQBg3SlwiCh5qaSC8FJNXyIyzWfynCgaPd+TOB9SgCc02FCdzNlbRSGjvJh78IwNhx0MFxSPBYEu/asot5msyhI/7mMWiZoz4KYqCwobdpDfqMBcmKuIXP2AeRMOFYLrE4GrCTLBGKuymAO0l9kpgnXThmsmXMzAHB2+zxOB2JEEPgj1JdbE/Ez+rA8/rvdfcZFthch8runGwbSo7ThUV3IA2BgpaU5IfjeAa4TQuA3mjpylDIT9WOJsSzRfT4dqrhcZoDzv86e3E36UVh7MCLHbz0oIL0Se7y5wJpwqp1DwY/R4sGajFacbDVvwS0nTUZdEcVwnWW4WowwXZ4OwbFyrLfcH8H6wqNcHud6DPlj+gAb1Plsa9GXpGQOuI0ofo15vOJTB6o8Gq8NhrzeatLtC8Yr3L0tQwYXOYCOIAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 500000,
            ap: 10000,
            dps: 3529.41,
            speed: 4,
            range: 180,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1000,
            freq: 85,
            foreswing: 49,
            backswing: 36,
            tba: 10
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 10000,
            actualDps: 3529.41,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 50,
                ld_range: [50, 1850]
            },
            "freeze": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        }]
    }
  ]
} as const;

export default e34007Data;

