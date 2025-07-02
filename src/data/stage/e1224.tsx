// Stage 1224 Data
import type { StageData } from '../../app/stage/types';

export const e1224Data: StageData = {
  eventId: 1224,
  eventName: "旧正月ステージ",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 224,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "224-00",
      baseHp: 1888,
      width: 4000,
      enemyLimit: 16,
      requiredCost: 8,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "13",
          treasureName: "ネコカン",
          probability: "100",
          amount: "30",
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
          enemyId: "494",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 40,
            actualDps: 25.53,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
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
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            delay: "9.3-17.3s",
            delayFrames: "280-520f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            count: "10",
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
            count: "10",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "494",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEQEBAfHx8pKSkuLi08PDxISEhWVlZkZGR0dHSDg4OUlJSenp6rq6uysrK8vLzIyMjOzs7W1tbl5eXx8fH///////+YVTd2AAAAIHRSTlMAOllrkBuy0e3///8A//////////////////////8A/yYQNN0AAAUBSURBVFiFrZeLkqsoEEDj24YLgihPXf7/L7fRGDGjU7dqt6dqUgb7pN/A65//KK//AfD6lqKq27Yufnz/epW40Nbl++kBUHZA+TAwaL8RRQdcCMFJX/4CqIEr61AUhfKyUsKgvXPeaQn1I6AF5Z1FgvWWQ25DASIkMK4GBdUDoAIVtLNKygl/i/fZUseQLBljypsgobkH9CJorwhhBLgJhtSZAXMwFIQcyIAW0voWUIK2TqGtcdWEmEXA6Rv3jtAlxhiAeT/2t4CaO6tBxbiuMQJbpjMKnVwHiHFZlrjA6GdcuQG0wnvG4rqk9yyaQ6uPc+NCxqSPK4IGTco7QCe9RQOW/T0mAssAgeo3QFH/BBDekOkAiCEDtHL5AEYanlxgzh2GLnFAnbooK5SiqNkq5LayRs5XeR/ECnM10HcMFj4LACAUhUCPZUwChjdGBdaR6hbQgFgsiLi9xwmBQc0myaww/0iblugETHFIJfZQiesEfMZCHgA41r41RiMhlfAkKQClg13llt6HXphWwwjjqD57qzMx1rsJv5+wSbbY3ndjC9Kty0ywWNxH16YmNMhwXqNl3V5eD/OgAvScwBTMoe7cLAc+2g1o1xna128AHAgYLe1PdZwMgAElk0emG8RM618AOBCCGaeP+X6mQJWPUTMYnA0jAFOkeATUaSAYd0TP+BGIjrtMQLGJphWoeJxIJciQBz4IkPEjAbAysCOBdQ+ABoYzdtponDwqZrICpA8JT4CO2Dz1Xl31UZbdlwdAiRM107cmGbyJsZkZ63vO/AT0LNM32lM4lMRpyoKl2N+nsYIze6kAFOjPz0rgm/XRAyw6zeQbQM9zB7QnNHNeA9k+UxjVPaD4xYCUw/0J/6/mHlBTa3IDKDmiNtA5iyGh4h7QD5cU6E/cJgA4ARKfbgEFqIsHI4S3isUxkgcDhltA2pVyD9ippNWSBcO6+xhcQ2D20XgvFu7qoOO5Bxbb7k4XmxrYAHV12Z3LZovhBaA+IXgLTiWc70ClTAMH8o2l3FzqxSWGklpCKMceWHeSnqZpBsB5HyksnkHzAXSwdbL0FwAJOAiZwbxljRS24QZYFg6qA9BsQxIBFwvEkXpNckcWhePVpXqC+gCU0P7588MCQVYjCdgoIN6JPy2oxTam+y8AxfphI+7l94ARigPQ0q29u+EaRFjcVj4rzvO9MtLhzb8lbQ4fwMzTgGn5VxrdYSyBL0lfdM0JkAKfmi6vRHMpJDuBNHqe52kT3NyqMqtEPBhR2lF+6QVj8nm+gM/cV3DdmUo5Bo2FDyKP4jkOUhVC3k3vZnxlhbSGEV8iTp9OeJnV8jUT+7aSAZqWDkDa+jLUMQjyAfDeW/NuLIoCreqoyxoaq/3vAcdMyjfG3ASz9dAh8tuFj9Sgs1oIw6cUNB6NKGOcD0LIke0nnLu9safuTKXBnWkPvsMWTEe9U7rmHlAQHk6CtWTPf7AfD9Z0hsQLR3sPSNeadDQz2x/ePOiP7fkdx+4B8KoIt94c4rwApn/qB/JkQbKBqrd68iJMFJsaG0ChTHgVklIMnDwfNDEO/X5AJkDJFvvvXkwxLB+ysHsB40hJTzFSZVXuUuEVasID9xxoVzTNUx0cyXSRlQ2b8jtbSaLtXu0c3430CGiKsuyYgLoG6NtM8CLXVS2QviieAXjr/Svp2wdAg7eTuq7bruv6O+nS1buuqzI7bP8Ldb0MGpsXhkMAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 40,
            actualDps: 25.53,
            magnification: "100%",
            count: "8",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "494",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 40,
            dps: 25.53,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 100,
            actualAp: 40,
            actualDps: 25.53,
            magnification: "100%",
            count: "1",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1224Data;

