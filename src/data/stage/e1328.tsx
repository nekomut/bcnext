// Stage 1328 Data
import type { StageData } from '../../app/stage/types';

export const e1328Data: StageData = {
  eventId: 1328,
  eventName: "8000万ダウンロード記念 ハッピープレゼント！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 328,
  stages: [
    {
      stageId: 0,
      stageName: "祝！8000万人達成！",
      baseHp: 2000,
      width: 4200,
      enemyLimit: 4,
      requiredCost: 10,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "13",
          treasureName: "ネコカン",
          probability: "100",
          amount: "20",
          times: "1",
          limitText: "1"
        },
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
            delay: "13.3-23.3s",
            delayFrames: "400-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "13.3-23.3s",
            delayFrames: "400-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "186",
          enemyName: "1億DL記念ケーキわんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 100,
            ap: 1,
            dps: 0.6,
            speed: 4,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 2000,
            freq: 50,
            foreswing: 5,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 100,
            actualAp: 1,
            actualDps: 0.6,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90,
            ap: 8,
            dps: 5.11,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 15,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-33.3s",
            delayFrames: "60-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1328Data;

