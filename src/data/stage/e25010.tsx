// Stage 25010 Data
import type { StageData } from '../../app/stage/types';

export const e25010Data: StageData = {
  eventId: 25010,
  eventName: "紅き本能の頂",
  typeId: 25,
  typeName: "発掘ステージ",
  prefix: "H",
  mapId: 10,
  stages: [
    {
      stageId: 0,
      stageName: "頂の祠 超極ムズ",
      baseHp: 600000,
      width: 5200,
      enemyLimit: 25,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "30000",
          treasureName: "ユニット20000への進化権",
          probability: "3775",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "30005",
          treasureName: "ユニット20005への進化権",
          probability: "3775",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30001",
          treasureName: "ユニット20001への進化権",
          probability: "850",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30006",
          treasureName: "ユニット20006への進化権",
          probability: "850",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30002",
          treasureName: "ユニット20002への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30007",
          treasureName: "ユニット20007への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30065",
          treasureName: "ユニット20065への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30070",
          treasureName: "ユニット20070への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30075",
          treasureName: "ユニット20075への進化権",
          probability: "150",
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
            actualHp: 36000,
            actualAp: 5400,
            actualDps: 10125.0,
            magnification: "300%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "048",
          enemyName: "エリザベス2世",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEBAQEDAQECAgICAgIEAQEEAwEGAwEGBAMJBAIJBQIMBgELCAYQBgEPBwIXCQAVCgQnEwUzEwIvB1ErGgghHhU9HQZSGwAvLiM9KRteHwBeIAFQEIM6NyU5NzJ4KAB6LABPQhhGQUZ/DN9WP1OYNQFoTRCrOgFjXEi8QAB3YyDRRgCfOOmJbw1sbGvnTgCPgCh7e3t/fHr/VACzlDmak4aopqXesTjAvKzpx1DW0rr03mfv7+/9/f3///9D3ieOAAAAQHRSTlMAG9w2CRMneL1CzF2KT26d96rmuf/9LM3fgf/s/v+nG/T//dn//v3///7//////8X//wTy///7+v/+//////8ACXpGHwAABLBJREFUWIXtV9t6ojoYreUkchJohEboANYEAuPE8YiUzvu/1U7ATq0DTO3el3vdyAf5V1b+Y7z79S9x9z/Bf0Dwd4iSNPv28xML++w1+2nx9O3rBDNvvS8Xqvh1Ahfv1o6pqaMvmYsjWZ8mGXCce9uYfUGGanv3IMmyBIBk8+Nxdqv9zJomACZJst9nMDscnoQb7Z/YzvkKTBxcVvvlstzb0g3movqUwSk+rcFiCfHxZRNmB++WQ8juZhnCwwmH379/D1cv5RKu/RsIRBOvw+dleUzC5+fnEJ8qpsO7IaNEa7UKn+HuiB84QXKqIEgebyCQbEYQwt1p9RCG4QPcrbOlY5zJhcFwiDL3tahH+UMI16cdeGAAq9WpWhg/eXIZ+kQfSqqRbfHcVz0MHyDerSCzZ9E4vVTJ48872XTnKFKGCGQv8syRKJoe2xvgdQaWGUiOx5edJ9wJbkToFg0SSBYikasII20CsmR3Oq53uwRg5s7JTLAR3W63aPAIohltKeEqDC9P8tUqTzDm1ZBM9dZ+i6zBwtIitoYWviapYwBxnmMMkxzAXe5EjX0R/cWJKV+1JZ4g6pgRwGSdJGuYH3FQNF/isTokwPCbbbhQWWHKMYA5S6J8jQHangX0FRVrIIKgR2cCGtkTiDHOMu4IHCNSFAUdECCpuuv5vgPiMwMBAYoxc0KOUcpMizgIYkpj9yIRJUk6+0MybB8VlNIiaJUypEFKz+CK4pikjMIZG+/2pmVpDYOs+2m7MTm7ipuQ9h2N+TsSUxIEwVQX3l0gyqo+Zgyi4UbF+7bbK9AAEB7ZgikiYKJrwmx0Fi5q1mSiCJp33p47OQ7evPhbSkHaBOIa4hTNFz9+PLbDQrAMxdLHfkEv9yNnpispNCY0RpSifVXXh4XBGVTLsDTNIR8FI85HAhCTjwSECWBRyOpXhtLjwRjpliK4VzulMdNJAoRiRLfXn2i8rLj9a71p8kkaSWZ0vYwWLFxo24GCEHh4rcv6tayqRZsPslt0rrxmfTtfVtf7rKo3WbUx29yPOlf2gCTlawnZKQ7wcLAaArNTax8Q8+AhO9Sv9f5Quk0yWuTvZhcEe+a+Jgp1XXlN+Xe6oJ9g01pX7Ke0+33YC8KDWJebxaaq9/rtBCSAWVXtPVNQFpuFcesRKAoQCRYLXWD1pypNLrMh+OkoNPaxYyltHb01Vm3enTJ/IgWA9YPAuTc/NOXRdSn0CkhTwhoW8vWPVzZR8z/rBcoKcm4b1z1Z0v+opj4U0cTsuDHKnz0ECcbdl1bV+9whCkfrnmniny2hm8CTO+3ZISafOkT/UGUXmu1lF+4G8fuHqsomKi3iIQaagt6hymc6aVP1Q3///VAQxOaiMzDV+bWEbxKDeYQQIcXFTORTlk1cQnpdyCG0kSwcRXd4wgdgPp/7/rxpV4WtsIIh7tBdW2qLsvAF2SvYFIzHJvuforZvU513jXTwYnMuSurJks2NzlfBtmUjZWQxgsHLHc9nkqapO2LuICmZayKH6hMUochk0yeNzAGCkaBaU46JrlhTwB5sncO6589TW+FfbU0zVKHz75coa4pu2+PxeMJxf4XmJftoW7qiCRc6/gGWzcvNASAiLAAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 40000,
            ap: 400,
            dps: 545.45,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 600,
            freq: 22,
            foreswing: 14,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 4000,
            actualDps: 5454.5,
            magnification: "1000%",
            count: "6",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 36000,
            actualAp: 5400,
            actualDps: 10125.0,
            magnification: "300%",
            count: "5",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 36000,
            actualAp: 5400,
            actualDps: 10125.0,
            magnification: "300%",
            count: "10",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "206",
          enemyName: "バトルコアラッキョ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 920000,
            ap: 7444,
            dps: 3722.0,
            speed: 5,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 900,
            freq: 60,
            foreswing: 21,
            backswing: 9,
            tba: 20
          },
          stageStats: {
            actualHp: 920000,
            actualAp: 7444,
            actualDps: 3722.0,
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
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 530000,
            actualAp: 52000,
            actualDps: 29433.96,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e25010Data;

