// Stage 1146 Data
import type { StageData } from '../../app/stage/types';

export const e1146Data: StageData = {
  eventId: 1146,
  eventName: "イベントオールスターズ グレイト記念！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 146,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 150, 200],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "グレイト爆進！ 超激ムズ",
      baseHp: 882000,
      width: 4500,
      enemyLimit: 24,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "1000000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "106",
          enemyName: "花火職人（高空）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgIDAwMDAwMEBAQFBQUNDQ0VFRUdHR0dHR0jIyMoKCgpKSkuLi42NjY/Pz9KSkpRUVFYWFhfX19mZmZvb29zc3N5eXmAgICIiIiMjIyUlJSmpqaysrLFxcXPz8/V1dXc3Nzi4uLq6ur4+Pj///////925DRDAAAAQHRSTlMABQwfJTU+Q0lebHeGj5mrxdrg5ra9ztT/GKVUfvrw//+U///q/////////////////////////////////wD/rZj7kAAAAyBJREFUWIXt1tt6qjoUBlC0aq1tLSjobCmEFTYmgIAQIAh1+/5vtbCesF+LsLztf+FhCoMJIRLh/xsj/AK/wC/wFRAq6agvGiDTKmNiBPrLa/VX4TrwBqbPjgnt1UJqCYj+ef8otBnTWgKyF7FzBw5jettT8FglS8amLYE/yyoQsGjSFnDZRaK2F/GP4zvU+Aw2TMvxWgJ3MgANzWS9pnlOeWojbdQKEC1u84J5ReGnRWrnaxLgVgAsc0biyLA9G9zQ8rKFT1sBzxZZGoAwOWQBSGkFdN6x60fnUWTLebfdKKi0Moar0hDbjcIlEPwDMCQVwL8VKOeFr7QE7heXc+k2wP0HYGBVACdkvnwTwG4DolV0YwesVQdDWR6/fgPs61eBOwV2ebv/Cuj7eucKMNBxnH+kLkhfAUg+67NuLdCZ4WK7SwrGF4Ae6k+1gAp8u48HzndAWR/VAaJ92H+7wehbYIP1OgCSI7C14QII6KleC6xPAP0BoPXAqYMNuhiGyDXzQ12pA2RyBBIw8DkGAiCH+rAOGIKz2R+ImK6bcpzyxM/4IuAkJfu6WH8jjTQr3R0Hg7+mfu6TrHDiIsZZHONd3dL7V27lvoKQiZA4B88B0wLDNoC45RNC29VB6V+fTEAtOu89ERb6rrOPF4bBBAjCd01m44xbMdfF8k+1skZhK3G6iONBE+DJS6dhEWC6uhhHRUtTNGwC9MyN8fhfskk9u7I/sXh5ZbtNAGGWRkpfRG54nA1hsMTxh0+S8zqpFlDpxgFA9mmVFDgQx8jYhEozQHiLt1ueOIAsa1HGQsgA0JIteWwI9Cg3LJ9nhnqsdMY0K+eR3GsGdNGH3n2YJKeW+zO2TWK+TbSHRoAgJt69MCD5YXWq4iy3Z/LEzAoyagQ8enwsCNMP/HnjvDtFopdn0x2jtNB714HOu57F5aQbx9549x1lmbR/IAz1fPlWC7wO1Mcn3eFUk+YSIsnnswDcDYbJvMzLLEym6v3dT8BoutscLRw4xDi8R/z4yeG7V/39hw66fXX0/Pwiy3NJkiZwDkV6WZFkWSfS6GHwWu3gLykgoJ8lA03dAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 0.05,
            speed: 5,
            range: 50,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 569,
            foreswing: 190,
            backswing: -189,
            tba: 190
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "107",
          enemyName: "花火職人（低空）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgIDAwMDAwMDAwMGBgYGBgYJCQkSEhIaGhodHR0gICAoKCgpKSkuLi42NjY9PT1ISEhRUVFZWVllZWVvb29zc3N5eXmAgICIiIiMjIySkpKZmZmmpqaysrLFxcXPz8/V1dXc3Nzi4uLq6ur4+Pj///////+ASVRsAAAAQHRSTlMABQoSHyU1QElWXmx2hpCswcja4/+ZtrvSphl+91Hv////lP/q/////////////////////////////////wD/aOp7IgAAAzdJREFUWIXt1mtzqjgYB3C09VZtKxARTylJThbCVSECoVCX7/+tFooX7JyDsM7s7Ivzf6Ezj+ZHIAmJ8PedEf4Af4D/GyA0Mnh/BQARowzBEGibh+avwm1gA4nPTgnsnSn1BJb+pX0Y2IxpPQHFC9mlBw5jet9b8FgjLmNyT+DnFbBlYW/AZVcJ+z7En47v2BiVwbgcTcfrCTwqEFgBiT4+7CyzeGJDbd4LEA1u85x5ee4neWJnH3RLegHAzRiNQmR7NnQDw0tN3+4FvBjUQwBieowJ0LoXMHjDrh9eRpF56rDfKMzsxhjuSkPsNwrCu3U1j9h22ROY0gbg3wuU09rvDZjfgHVPYNIE3H8DGA3ACZiv3AWw+4BwF97ZA3ZnD/5rYKooqx+/AOr6TeBxDapsriZSBeh1fXADmGg4yj4TF0rfAVjXxWErMBBxXlRJAP4GWMf6cyswA7yo4wHnCthap/q8DRDtY/viQOAvgQPR2wAQn4DCBs32oUuyU70V+DgDFiAEkzoYQQDoqd6tBweI3ITjhMd+ys0tpwk91pdtgEJPQAwiy898mubOPo9wuo/IsT5tA6bAOdQXosBzADEAshGgLoAE8boutk+kuWYk1XUMzWSB7zp1vCDYwrquj29M5fGyPFpBuN5YV6PIdlpZR3A9vr2YADUsdfTyDQiXgELy2GU1qtzYc10sX+uXU1L1RpLNaD/pAjx7iRzkW2ydj2nBrtoXtCSB0y7AiBzQ4q/4kHin7XHrsNA0eEzAsAsgqEm4Hq/KYwEwDLOMgSBG0adP48tRrxWYWQcHgvWicbjVoj1Ch2DdDRA2+6LgsaOtzv9/0mQtLuiiIzCyODJ8nqL3U2WwstJyISqjbsAQfmoPT3J87vJYZUW850WMnjoBghh7E2FCs+NDe8dpZouKTNKczjsBC4+X9y9/4q+J8+bksV7ezXCFklwf3QYGb3q6L1f9KvK+HiNMU6neEKZ65m5agR+T2eJZd7ilSaoEafy1F0D3gIGslnlVg1ieTR5/B8zlrwamA45B9RcMefVOq+Lw6lN/+00PHsaz+cvLq6KokiTJ4BxoIb2sSIqiU2n+NHlo9uAfqC2LBIzjjCgAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 0.05,
            speed: 5,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 569,
            foreswing: 190,
            backswing: -189,
            tba: 190
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "0",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "308",
          enemyName: "雪玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNkg7Ozs1P0U1P0UwQ0M1QEY1QEU2QEQ2QUk2QUY3QUc3QUg3QUg4QUc3QkM5Q0o8RUs+SE1ASE5CTFJCTFFDTVJETlRIUlhVVVVRW2FWXmReZmxhaW5tdHl/f3+MkpWlqay1ubymw9eqx9ywy+DGycu31+7R1di/3PHK3eve3+DO5PTV5/Xg6vLo7vPu8/f1+Pn7/Pz////uEPMIAAAAQHRSTlMAEBsiUH+RobvG0N3lDgk7Xwx+JxxJMZFsuKsUmtaJyeDqtfqeBPnc+ez2Av7+////////////////////////htl0QQAAAUlJREFUWIXt1NlygjAUgOHiilpxQUBAwKXWaAkikQgJCe//Vo3LbZ0JV73Id53zz8lk4OPjjZlpLZ35ZPzuzBt72ws2u933YdUs8WN7IIbJ9XaL187EaDSfMV4LNAHBdC8bsF2QVax+4FfgLiTnjRXIKGE1fybgeiIZ8N2Y5jl5rVDfjlPJwCKCFCFcvQJVHEoG7CAhKEWU3XfgnEFPMmBtshJdUlwxzmvOGIzkA4UIpHlRkqqiVexKBswoKfLL+XxOL5gQSsBcMmCEJ5yjZwFhmkk/o7gDLDFKxbzYgcbOTDbgO8eszNFdTrKD9AKisDxAXJZlUVwhCKUXEAxre4JJksRg7ZgN5sUPwVyGX9so8Cy/0fx9CWPsL0xf+lNWFEVRFEVRlH9N01rth5amNZjudPv6YPgw0Pvdjmyg3dOHo8+X0VDv/XHuFyGcM6WK9zSTAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 24,
            actualAp: 9600,
            actualDps: 36.0,
            magnification: "2400%",
            count: "0",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "3.3-5.3s",
            delayFrames: "100-160f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "307",
          enemyName: "アイスわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEDAwMDAwMDAwMEBAQEBAQEBAQEBAQFBQUGBgYJCQkODg4PDw8TExMVFRUaHSElJSUrKystLjEuLi4uMTI4OTk8PT5BQUNGRkZOTk5SUlJSUlJaWlpaWlpmZ2dtbm5qcHN3d3d5eXl3hpKRkpOYnqOjrbOurq6zs7O3vcGNyf+d0f3IyMjKy8yp1/6z2/3R1djA4f7I5P7R6f7c7v3m8v7z8/Pw9/73+v3+/v7+/v7+/v7///////////+nT5MFAAAAQHRSTlMAQCQ0TQgVw+ej14ZuYZP41q5G2ct77fzZZ1OF/Sblw2T6G438+P7/DUf+////Df//////////F///ERwzAgf/9i3YcgAABC9JREFUWIWtl3t7ojgUxkepWi/QIlSpo+6GCroKDQYSE13w+3+rOeGmdoTi7L79o4GH8+Ncg/nxo1YdpX21furWP/272mpP7eTrrmq+th4z7yiaNdfyt7a1pbt8esy+pSN/ayq5PfL3DwIUfbU/50bd4dIXFJXxNFFXQ/vzmaGRNGqZW1GsGxkriqIajg9C/ZaitIbzre9v50NYK0r7O0y3NeyZpjGdS00nJmiSXkwNuTa19jfmmjl3/Wq59dVsDw209kJxrpRv1AJar6sgCP4TwCXk/wRckcSfAPgVgPPHAQxjXtpjzBoDohxAdztaBFCsvwcEAS484ITwIn4eRkI0AuDgtg/kWjBKKePNACTtAwGvSzGCgzHBGHsYB4zTbbMkchIQlhVBAjCOIuyFGJOgKYCGhAmal5FH4AGORORFvGkZ4b2CBUURZQ4YbAk4ahrCOSKRoFnlL4pwFK7rp7EEyCTyAJMbYSJEwxBSccj+ziu08zDhTQABpJtFsvAQd+QFQf52r2kjyU5kLPNBUC8o3PeYaD4LvBjDyMvtg8B7ZBp5kf4SQAKP/QFAhDto4PQP75rmQAJYDmBgWgjjhuMsh4nlUyy4KMUD0nQacUhpYclKUTmMvMEsgLOyYc5ZGQFXiMB8NQGQ4rsguxmGqhTM12Obqig31FwPAgRnXwGyF2sAXaUTX3vA6VcArwV01L7yWW7rED94LIS42h7T4lYC4m5/oG7G+TDBMHAYSVlMWElBHUMKqazakeJYMSdv9thIAWkbcJb1EQNe2g+0BhDH8Xjp6IuZsQ7lNF5/GPjNZUUIKcBfvs+sdRiSbGwKCXZdz0pAMkaRo78DgBB68/tAMNEQQH3r5x0PeAMPYglYUor0DHCbA/oFEFfkwNpz15pIQHjzTk6/hBDfIQCgqzs0QFNZBSDA6PD0k8xYROSVLKK851vj5A4BAPbYcrCbAmThZQOxvKNkPzDZHHI/sGZJBWGhGmg1l1XIf6GI6w4oarG3ZscKQLJQ9ck0q0JudJU+wS8AINwtZLJZvE2uAKL8vqe5LAGnY5LcBxwPWSfS0oOLfRnC8u8TuHC/FZJj2crpBKchZCMtYel/CThVApKxsU4/LPmWTNhlV4+ym5WAjDA20QrkOK6UA4tM8moNgnv1gMX47U2fr9B05bor62cuC7kOWoE5+uvj4+Of0+FwDyAJcfKZbNTlfjt3KXV1+3CAhw+27tI9Qnu2Rx//gu5XISfE8adi+f4UUe5o9jGVra+Za1lrDvHn9vfmqUS0ddd5Ndw9GtmbTylbc9bW+/sSjpGzwym1rwKAOt22Nl9q2mRlDEe59OlEV1UdIX28sDe15nBeHvZ7k4nZe355HjwXgnWvN3h5GfS1UduusweABo++Di7GhQagXq8/qj/1yQjgpAl6+k1wE46d3Ztz5y+cFK9OWeaYGwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 36000,
            ap: 600,
            dps: 206.9,
            speed: 3,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 360,
            freq: 87,
            foreswing: 8,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 108000,
            actualAp: 1800,
            actualDps: 620.7,
            magnification: "300%",
            count: "0",
            spawnTime: "16.0s",
            spawnTimeFrames: "480f",
            delay: "20.0-22.0s",
            delayFrames: "600-660f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "282",
          enemyName: "売り子エル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 96000,
            ap: 3600,
            dps: 1770.49,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 2,
            money: 480,
            freq: 61,
            foreswing: 32,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 288000,
            actualAp: 10800,
            actualDps: 5311.47,
            magnification: "300%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 50,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "308",
          enemyName: "雪玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNkg7Ozs1P0U1P0UwQ0M1QEY1QEU2QEQ2QUk2QUY3QUc3QUg3QUg4QUc3QkM5Q0o8RUs+SE1ASE5CTFJCTFFDTVJETlRIUlhVVVVRW2FWXmReZmxhaW5tdHl/f3+MkpWlqay1ubymw9eqx9ywy+DGycu31+7R1di/3PHK3eve3+DO5PTV5/Xg6vLo7vPu8/f1+Pn7/Pz////uEPMIAAAAQHRSTlMAEBsiUH+RobvG0N3lDgk7Xwx+JxxJMZFsuKsUmtaJyeDqtfqeBPnc+ez2Av7+////////////////////////htl0QQAAAUlJREFUWIXt1NlygjAUgOHiilpxQUBAwKXWaAkikQgJCe//Vo3LbZ0JV73Id53zz8lk4OPjjZlpLZ35ZPzuzBt72ws2u933YdUs8WN7IIbJ9XaL187EaDSfMV4LNAHBdC8bsF2QVax+4FfgLiTnjRXIKGE1fybgeiIZ8N2Y5jl5rVDfjlPJwCKCFCFcvQJVHEoG7CAhKEWU3XfgnEFPMmBtshJdUlwxzmvOGIzkA4UIpHlRkqqiVexKBswoKfLL+XxOL5gQSsBcMmCEJ5yjZwFhmkk/o7gDLDFKxbzYgcbOTDbgO8eszNFdTrKD9AKisDxAXJZlUVwhCKUXEAxre4JJksRg7ZgN5sUPwVyGX9so8Cy/0fx9CWPsL0xf+lNWFEVRFEVRlH9N01rth5amNZjudPv6YPgw0Pvdjmyg3dOHo8+X0VDv/XHuFyGcM6WK9zSTAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 24,
            actualAp: 9600,
            actualDps: 36.0,
            magnification: "2400%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "308",
          enemyName: "雪玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNkg7Ozs1P0U1P0UwQ0M1QEY1QEU2QEQ2QUk2QUY3QUc3QUg3QUg4QUc3QkM5Q0o8RUs+SE1ASE5CTFJCTFFDTVJETlRIUlhVVVVRW2FWXmReZmxhaW5tdHl/f3+MkpWlqay1ubymw9eqx9ywy+DGycu31+7R1di/3PHK3eve3+DO5PTV5/Xg6vLo7vPu8/f1+Pn7/Pz////uEPMIAAAAQHRSTlMAEBsiUH+RobvG0N3lDgk7Xwx+JxxJMZFsuKsUmtaJyeDqtfqeBPnc+ez2Av7+////////////////////////htl0QQAAAUlJREFUWIXt1NlygjAUgOHiilpxQUBAwKXWaAkikQgJCe//Vo3LbZ0JV73Id53zz8lk4OPjjZlpLZ35ZPzuzBt72ws2u933YdUs8WN7IIbJ9XaL187EaDSfMV4LNAHBdC8bsF2QVax+4FfgLiTnjRXIKGE1fybgeiIZ8N2Y5jl5rVDfjlPJwCKCFCFcvQJVHEoG7CAhKEWU3XfgnEFPMmBtshJdUlwxzmvOGIzkA4UIpHlRkqqiVexKBswoKfLL+XxOL5gQSsBcMmCEJ5yjZwFhmkk/o7gDLDFKxbzYgcbOTDbgO8eszNFdTrKD9AKisDxAXJZlUVwhCKUXEAxre4JJksRg7ZgN5sUPwVyGX9so8Cy/0fx9CWPsL0xf+lNWFEVRFEVRlH9N01rth5amNZjudPv6YPgw0Pvdjmyg3dOHo8+X0VDv/XHuFyGcM6WK9zSTAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 400,
            dps: 1.5,
            speed: 75,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 8002,
            foreswing: 1,
            backswing: 8001,
            tba: 0
          },
          stageStats: {
            actualHp: 24,
            actualAp: 9600,
            actualDps: 36.0,
            magnification: "2400%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.0-8.0s",
            delayFrames: "180-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "306",
          enemyName: "パオンモス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAgIDAwMEBAQEBAQGBgYHBwcICAgJCQkKCgoODg4ODg4ODg4ODg4SEhISEhIaGhobGxscHBweHh4fHx8jIyMjIyMnJycpKSkuLi4uLi4xMTE2NjY4ODg7OztAQEBFRUVJSUlQUFBRUVFSUlJZWVlgYGBjY2NpaWlubm50dHR2dnZ5eXmCgoKJiYmNjY2Tk5OXl5ebm5ufn5+ioqK1tbXHx8fZ2dnp6en6+vr////////W1D8eAAAAQHRSTlMABw4YwR7MKH42jelBSl6ftddV+Wh0fvnriJixoo/c/MXo//j/2rnm////8f/+/uD////////////5/////wD/UrmRywAABGJJREFUWIXtVmtT6joUbUUEFBAURIRDkRablibmnSL09P//q5u05VFe4tzz0Qwz0JK1sh9r72zr7/9c1i/BL8EvwT8i+GbdNNr94fDPn2GvVbW/23wC/jTyIaGMc4oX87fmzQ/x1eGCq3izJPXHjR9Z0ZjiHTynmPd+YERtSsr4OFZy0bvaBnuI46Ol5LxxLUHLl8cEcYzHVzphP7okj6DaOJI/LYbXMVRHiAGATBi5NkVKLDIGFb3Wr2GojLEiXuQBpGIUyhgDEOQxRd167QoHXqBSUuoP099MxZIIwTIC6V+TytqEnIpgkcrvomA3+qNBQGR8KIMNxeKxf0mSlZc5ZhQHwVkjhAf9Y0HZtVa71+/3eyMkzNGSRCeFYBaE0m8ewJvj+QIRQvAMbk09GwYKCB2VAlEd+iw/j3iIl3efoNMM0N/XtFZNYa5inkPL+A1SsO07zCLHbe/ZX3fk9oAAlM7CBGCifUMs2hUXnA0A7O0RPIZbQxVw9qOvPC9yngdgFlC6O4QGs8jr7whuOluMkqG3X8YKUeE8O6JAFxQEzkCntSNo+jvyWAWlGBgOD20feKYvQcFd065VNxmclowGQXx+4Vmok4RDt27b99Mnoya7PWclxRBwVkDaglCGuq4lGdvWE/00brR8weF+4GVAz0tIhisJFQHg9sZqfK4+qlZlxBSEpV3IC03pK4zZkRpVuFpH+p5g04pV+0yWL1ZrIRZOWXsSOk7IJfE8IA8IlIpWaYxkBCY1Q7D+sF7gvD4R5W2SQC+MZkiKI1+0C+lXqITUSm58JsmndT9pNR6iE7569FQsGUrSVaD77KJl9ZZpyqxGy6526dFGJcXxO10XkQatAu0Zalc+1mnKsw4ylUXJKHW+hg2pImid5ARk+KK5UpHV4tygBKIhvJBBjY9CHUJtgakcOuFJmUCFHvAw5EeJ2/xAASAGn36ZkLEoSVITxC1BzKkUpzwg1LBIHqovc2aSClNtDJsHncac4ILnMQmUSR+KDcKAIl4QJOmy/z2BkgHW2grXBT6RmW4pSYwB1TwLFy1QDDAeLAu8llGWYCI1F32yijRewMemeiPwVZz/FeaiQct0zYf55WCP+UW8Et7Aidcm6CscFrUfLZcf7U1n78GLBNoEBKKICKZrhBSBcT961W1Lq83lxSgYhL6jGeUC5Fd0zEqDiv2mW/6Rgk4srcV8l/L3WqpeQxorSA6L/whOgjArcBXT8qRkjzUBJay8/7CXoKCYUXRXnpevVj1QmdAqjo0fWyBX+XH5Gw7yBqELls7bB5d77Y1kG7WNe20EZoqRLO9LPMgDrehi3DwaDpp+tlkJ7L4HkY6GFJx6yEAEAiCEEEYzYoxEp2fum8fiPlNux505np7JwKTjyGxI5O+vAUJaCwi5o17t9HDTeidc6MUm7Q5EUYCJe1/To56Z1XC38647OcfB62PlJNqYUO++Dsx6uO0+Z+vh7rY7cF3XcfTPB/PX8/PdffuQ4T9TF6IkaWlqagAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 3200,
            dps: 581.82,
            speed: 5,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1600,
            freq: 165,
            foreswing: 6,
            backswing: 10,
            tba: 80
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 12800,
            actualDps: 2327.28,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 3
            }
          }
        },
        {
          enemyId: "263",
          enemyName: "ぼったくラッコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 2497,
            dps: 3256.96,
            speed: 9,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 7491,
            actualDps: 9770.88,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "213",
          enemyName: "ナカイサンタ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIGAwMNBQUPBAQLCAgMCAcNDQwODg4PDw8QEBAZDw8TEhITExNBAAAYGBhPAQBRAwJbAABJDAw7ExQhISEhISEhISFxAAAmJiaDAAEqKiosLCySAQGMCwusAgI3Nzc6NzcNVxzQAAFAPzxERESBLi9SUlJUUlFZWleHSUhhYWF7cxPdREV6dXR3d3eAgICelAeSjIuVlJSqpqapqam9vLvw3gLOzs3b29vm5ubv7+/4+Pj///////+9zVGBAAAAQHRSTlMAB+4QQjJmH42wwdlZdqB774ygtO3+Orv/xNzh/fHv/v5Qq////239hs38/5v+/v/auf//3/7n/v/+/v7//wD/sg6vHQAABJpJREFUWIXtlmt/qjgQh8sCgtyqtUXEqFjEC9JGjTEnENbv/612Amq99Kzu7+zLziuRzJP/TGaGPP39h/b0A/gB/AD+J8AfmK4rjywzXP03L6zQfwTgoqb6PcD+3ZsLUzxkG8p3C1UrGDj3AWoXtTS3eROG0fDNAHn3syABThg0rv93WlajhULjIYAbBqZ2pUFrIdMOBtpdAOQg8MLA69oXmxmajbpWgMy7gCcTBVYYNLsXUaie1wxCAHTvA1wEK5HVvDgzww7NYACA8D7AGQQtC9keap1lAWrAbCE7CB4A6CEKWkHLHATuWQg28sD9IQWQRQRLYb1lqGA1wJIpDB7KgZQAhBaosDq9XqetqVUVWhXgpj6+MyeUEsDeJmDRsKMpAAAiCLhfSDIIrTuoCaNJZcNnQ24PGbhfR7Wp5lsl4i2qCdGLzGAwaDw0EMCMTjSqECfCm/R3H/VX2uBXI94OUYz+i/+T3pcuYIBIZqNoNotGCfIemCb1/v5LJeD1dTZKcFEwmueY8JX7wDSpbLydRcN+51nLGKai3Esr9yXdZo9J8Lc5wQtZPVMuGCGccQ7+OS2yx3LgsLIsd7KRjHUuckoZJZRCDLvxXd+q8NWM57t5pdaYp6SQAXDGyHp8R4DiO+/vcmN/Pq/XqtNunIqS55KxvftN8FcpxRdTKGNJjMsiwTKRxd0Uuhin6XEEKIpqNEgex2RfK9jvd/8qQTEUjTC80nTnuQ320un1h4RJwNGK+XUOzp9Vb6ovCOl2+ofil/VPeBzj8kTYGhc7arDTs3bK7HS7SNNk9OUOgCRP4yQ/Afj0y11v94bRKIrSlXYgGGsM/pMLWwoSx7Q8aCjLkwSjLZtliaMRxqFzIDgJvvKfLEspgVJREwRp1xcEaHYpkJIlLQTdVjWj+AucRDeAPY3jlNBKQ4E/P/tVPz1XC5cEyKIsxcpVVD9bUXItYDLLoYXiOEBcAij5nEx6EIXaq19CxQuCCTROtt5Bsc+uBUxGWAAhSYJU1jOhAOhDqRoyARG8ywkBeVwUouDfAiCL+32++bXBFAhMKuhAvPpQHnEht8e8yk9ZFKQo6E0Ik5n02/z6taErLgSGISF7RR9Gr6+sJAQGzeGEASb2/JsYGKR+s9l8LPxxts4crcq3M+y7C0JJIb6KrORUcDK6IkQzkvN087H5gJuNoh7O21/hd33F+Zm7JFBaCgxjNJpEtcHvGWOYM/KRdM9vK/4uz6aMi/2lbReMFZRyPMIUL5ezGeOUlRxOiaTzi++ZMp77Wc7LS3+R+eM5K4q94AUcL6S1LPLdbrEV0KI330Njm+dXAhjMO3WcZVxwmIAi32232dT3p3zP6E0bS8CVArFW6x5dYJyk4WLuG4Z0c2n+NWTOmh9CKC5SeBy4ahd6OvWOCVc8+XgLgE8Hh1Dl5+LgPz16mEmaJN1jjz+58tG7vRMo4zXjeV0IZVnspvW8hEHoJglKkoGrSdP1xiBBaNC9vebrpp2kuLI0RbbpqHCrcL2mZYN7EgR/HU0+ImSZjct7q+J4lm0fF9lW0zUkwGxa8Pfp//qlHVqWdwb4B4vCyFG3WYjyAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 122500,
            ap: 5963,
            dps: 3650.82,
            speed: 20,
            range: 300,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1225,
            freq: 49,
            foreswing: 20,
            backswing: 21,
            tba: 15
          },
          stageStats: {
            actualHp: 245000,
            actualAp: 11926,
            actualDps: 7301.64,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
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
            actualHp: 20000,
            actualAp: 2,
            actualDps: 0.1,
            magnification: "200%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1146Data;

