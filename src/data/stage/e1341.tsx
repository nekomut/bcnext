// Stage 1341 Data
import type { StageData } from '../../app/stage/types';

export const e1341Data: StageData = {
  eventId: 1341,
  eventName: "バースデープレゼント",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 341,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "祝！１０と１/２周年！！",
      baseHp: 1000,
      width: 4500,
      enemyLimit: 5,
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
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
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
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "645",
          enemyName: "ダミー",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 100,
            ap: 1,
            dps: 0.6,
            speed: 3,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 7,
            freq: 50,
            foreswing: 30,
            backswing: 20,
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
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1341Data;

