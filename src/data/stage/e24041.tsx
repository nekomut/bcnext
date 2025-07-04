// Stage 24041 Data
import type { StageData } from '../../app/stage/types';

export const e24041Data: StageData = {
  eventId: 24041,
  eventName: "お祭りにゃんこ ～春節編～",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 41,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "太陰暦のお正月らしい",
      baseHp: 1500,
      width: 4800,
      enemyLimit: 30,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "208",
          treasureName: "伝説の縁起物",
          probability: "50",
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
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 300,
            actualAp: 30,
            actualDps: 10.59,
            magnification: "60%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 300,
            actualAp: 30,
            actualDps: 10.59,
            magnification: "60%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-1.7s",
            delayFrames: "50-50f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "大玉花火でド派手にお祝い",
      baseHp: 4500,
      width: 4400,
      enemyLimit: 30,
      requiredCost: 55,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "208",
          treasureName: "伝説の縁起物",
          probability: "55",
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
          enemyId: "004",
          enemyName: "ブタヤロウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAAADAAADAQEDAQIDAgADAgADAgAFBAMHAwIHBAIIAwEJAwALBAAOBQAUBwAUCQQeCgAeCgElDAAiDwYoDgAcHBw3EwI5EwA8FAA/FgBNGQBXHABUHgNfHwFmIwA2NTVuJQB3KAFHOzaELACOMAFNTU2kOAFmWVO5PwDIRABmZmbUSADgTADrTwB+d3T2UgD/VACampq6urrMzMzY2Njm5ubz8/P+/v7///8V1LKCAAAAQHRSTlMABg0U2R6UoSUsOUOszYVYTb5ljHP1ev7roJKvFuLLvf3Z8//l/8Pu/v/1/t79///+rf////7///v+/v////8AQsbFqgAABAtJREFUWIXtVm13qjgQFlxUBEUBXwoXKlCEkqbJDTFQFe///1ebgLa1K2p392PneDwoM08mz7x2/vxH6fwA/AD8APwA/G8A/04kReteey9LV81l1dT7yhUFxbIH7RDdieMnyfzaGaofupM2FwdOAAnNrgIoLoSBM1Eu6ShORlhRwKsA0jxjBD65k5OSJEuKWhPTdRJSFKyAjnwFoGMmrGAU+lqD0DWtuT61zEFHtp/ygkueXQXoPkDuZcGgq/LTVWPshWEKwlDXzAALe5aOjGtX0IL6mIJmVlfWXC8jNGeM5VngAe4adyB9aONYkhVFmSe0BijIk2UFMGfNr4ITgynlEGA6uewAzxDn0fe9FaCNEVqFpHlqvilMY0gpmKqfzzzRIWuWn0FMMIrA8VAGYnwEEE5Rbg6jFHgj44Mw0xo3ZCvzIMNMqOOYHJ3mR0LhDKMg5f+hmOA0Ws2cT5Uga0ZP5wjS8CE5elvACLGTC80Do9ECcU4wiQFBq6mtDX79OtIgTfqjqTkwfPBOFklj2tyb5idPkPCEMZBSEscg89a/f8/VGkLtG2O9pweIntzmbMd1uIscwOKzMJoimgJK4Wa735fr+u5aT+sZhofYZ724jh2JV5CwMwSUc4IoeN0dDoeqXItgqL3+eOjCcz0YxynCaQrSj4sdBaYUPL8dhFSbsSyai6qYCT1XYzkGccSzgdLii2CEorKqttVhu9uum3wYPKKvahwDoy+o7zy87qvydVdtNruNWQMYySXNNsH8Am/Pz7tD+fxWPtSBnMPbZh8CX6tD+VpWh/2mfFs31Yu/Yc+AsN1XnMT9frtuKMhv230AwE1Vh0BgvLlHgO9wgEQSVNvNS8m5dL7tAePVtNntyvVcc17KF6MBILcN3y8QAxS9vDhDmQ+IsSEfW+D99hFE6bJv11UgHSeYZCb/yLfL5gyuVnEchd7IPmtpIhPvoZHlECKSE+hZ55NRMp/upFE0J5y4xtee3HWyOwPJSObPL0xe9RHeh4CjqXZpJkmT4L50xkuzZSLY2V2RwL560V7sBKInsBvRYJnVNlRlK+UtnN7ISRRoLfadzoSHkic6KYo2L1iOQqt9t1JcJPp+zOfn+1Q5ffhcwIiPxcibtNp3JDurt4p4lWQAIkxyKiRv4PBquQIY+YN2gM4wqAkgnm0tecLH8SoMn4IgrOOLXbGbIPfadiiKUkyTYKj6mBKSTk3T0IaiVMVOpPKiv74ZHYsyfxx0XWGU1RUn8ZbNBc67Dr6xm/GihAhC6CqynSCIQkMWogWIz6fE5KkGU7sdQFKGE33GZTGyxvpssVjM9J6Q/nIxW85m+li81W1zog0vLpB8GbOtvq5Pp9ORkL/OpP6Lv9L7vbFtqJ8A/gZPl31DJ4v5JwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 120,
            actualDps: 49.32,
            magnification: "100%",
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
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 300,
            actualAp: 30,
            actualDps: 10.59,
            magnification: "60%",
            count: "5",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 300,
            actualAp: 30,
            actualDps: 10.59,
            magnification: "60%",
            count: "5",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 2500,
            actualAp: 150,
            actualDps: 195.65,
            magnification: "100%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "大音量の爆竹で魔除け",
      baseHp: 15000,
      width: 5000,
      enemyLimit: 30,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "208",
          treasureName: "伝説の縁起物",
          probability: "60",
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
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 17.65,
            magnification: "100%",
            count: "10",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 17.65,
            magnification: "100%",
            count: "3",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "10",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 17.65,
            magnification: "100%",
            count: "5",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 500,
            actualDps: 937.5,
            magnification: "100%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 17.65,
            magnification: "100%",
            count: "0",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "赤い袋でお年玉ねだり",
      baseHp: 30000,
      width: 4200,
      enemyLimit: 30,
      requiredCost: 65,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "208",
          treasureName: "伝説の縁起物",
          probability: "65",
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
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 17.65,
            magnification: "100%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "004",
          enemyName: "ブタヤロウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAAADAAADAQEDAQIDAgADAgADAgAFBAMHAwIHBAIIAwEJAwALBAAOBQAUBwAUCQQeCgAeCgElDAAiDwYoDgAcHBw3EwI5EwA8FAA/FgBNGQBXHABUHgNfHwFmIwA2NTVuJQB3KAFHOzaELACOMAFNTU2kOAFmWVO5PwDIRABmZmbUSADgTADrTwB+d3T2UgD/VACampq6urrMzMzY2Njm5ubz8/P+/v7///8V1LKCAAAAQHRSTlMABg0U2R6UoSUsOUOszYVYTb5ljHP1ev7roJKvFuLLvf3Z8//l/8Pu/v/1/t79///+rf////7///v+/v////8AQsbFqgAABAtJREFUWIXtVm13qjgQFlxUBEUBXwoXKlCEkqbJDTFQFe///1ebgLa1K2p392PneDwoM08mz7x2/vxH6fwA/AD8APwA/G8A/04kReteey9LV81l1dT7yhUFxbIH7RDdieMnyfzaGaofupM2FwdOAAnNrgIoLoSBM1Eu6ShORlhRwKsA0jxjBD65k5OSJEuKWhPTdRJSFKyAjnwFoGMmrGAU+lqD0DWtuT61zEFHtp/ygkueXQXoPkDuZcGgq/LTVWPshWEKwlDXzAALe5aOjGtX0IL6mIJmVlfWXC8jNGeM5VngAe4adyB9aONYkhVFmSe0BijIk2UFMGfNr4ITgynlEGA6uewAzxDn0fe9FaCNEVqFpHlqvilMY0gpmKqfzzzRIWuWn0FMMIrA8VAGYnwEEE5Rbg6jFHgj44Mw0xo3ZCvzIMNMqOOYHJ3mR0LhDKMg5f+hmOA0Ws2cT5Uga0ZP5wjS8CE5elvACLGTC80Do9ECcU4wiQFBq6mtDX79OtIgTfqjqTkwfPBOFklj2tyb5idPkPCEMZBSEscg89a/f8/VGkLtG2O9pweIntzmbMd1uIscwOKzMJoimgJK4Wa735fr+u5aT+sZhofYZ724jh2JV5CwMwSUc4IoeN0dDoeqXItgqL3+eOjCcz0YxynCaQrSj4sdBaYUPL8dhFSbsSyai6qYCT1XYzkGccSzgdLii2CEorKqttVhu9uum3wYPKKvahwDoy+o7zy87qvydVdtNruNWQMYySXNNsH8Am/Pz7tD+fxWPtSBnMPbZh8CX6tD+VpWh/2mfFs31Yu/Yc+AsN1XnMT9frtuKMhv230AwE1Vh0BgvLlHgO9wgEQSVNvNS8m5dL7tAePVtNntyvVcc17KF6MBILcN3y8QAxS9vDhDmQ+IsSEfW+D99hFE6bJv11UgHSeYZCb/yLfL5gyuVnEchd7IPmtpIhPvoZHlECKSE+hZ55NRMp/upFE0J5y4xtee3HWyOwPJSObPL0xe9RHeh4CjqXZpJkmT4L50xkuzZSLY2V2RwL560V7sBKInsBvRYJnVNlRlK+UtnN7ISRRoLfadzoSHkic6KYo2L1iOQqt9t1JcJPp+zOfn+1Q5ffhcwIiPxcibtNp3JDurt4p4lWQAIkxyKiRv4PBquQIY+YN2gM4wqAkgnm0tecLH8SoMn4IgrOOLXbGbIPfadiiKUkyTYKj6mBKSTk3T0IaiVMVOpPKiv74ZHYsyfxx0XWGU1RUn8ZbNBc67Dr6xm/GihAhC6CqynSCIQkMWogWIz6fE5KkGU7sdQFKGE33GZTGyxvpssVjM9J6Q/nIxW85m+li81W1zog0vLpB8GbOtvq5Pp9ORkL/OpP6Lv9L7vbFtqJ8A/gZPl31DJ4v5JwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 120,
            actualDps: 49.32,
            magnification: "100%",
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 17.65,
            magnification: "100%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "048",
          enemyName: "エリザベス2世",
          icon: "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",
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
            actualHp: 40000,
            actualAp: 400,
            actualDps: 545.45,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "挨拶回りは長寿祈願",
      baseHp: 60000,
      width: 4500,
      enemyLimit: 40,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "208",
          treasureName: "伝説の縁起物",
          probability: "70",
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
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 70.6,
            magnification: "400%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 70.6,
            magnification: "400%",
            count: "0",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQABAQACAQECAQECAQECAQEZEAo0HxFAIBFSKxpOMBtrNiFuQSeUQx+EWDKfTiisTyilWzC5WDGtYjO+XDSZcEixaTjCYTfGZTq2c0PIazzKcEC6fE3PdEHQe0XDhU3Vf0XXhUrZjVDek1HemVfwmFLjnlrmo1vpp17srG37p176tmH0tnv8vWz+xYT/3o+DuX2FAAAAQHRSTlMADRwnMUdhh5HE0uHq9ztWcbZ9nKb///9/Fv87////////////////////////////////////////////////UOo15wAABpBJREFUWIWlV4ly4jgQzc0VkpDQ9q4HI2yDTywsybex8/9/tS0ZNpBhkq1sp0JR4Pf69SlxdXW0l4er/2XXAOPhz+HPbyNYANz8mGAA2jJbwOsP4TcPI+C15+uTHxLcg76sKfFNePkhw+OiS0yy8gwY/SgNv6YGW6E5jatNflLNEWi6bpjGss1MHca3x89vnh5eh8PXh6fvZN0NRlNA00uxYFSbXkvww9sYP9TQ8JvJ/OX2a47ru+eXN9AMPctMmNw/zaegLzZbnuZ5xa2FYQDMnr8N5X4OWp2tljqAsUmbtm2bps3jOBF1m28MGH+fnxcwIpLVGlTvTVmUZVO6zjav8H3dNjss0tN3DK+PmiFqAnpdF2XRCCtAkiLPhBB50+50GHzHMAZospUFOuIaZom2LIq8yFMhKdpmCaPrr+DXI1iC7pr1FgLUbFVNgYGUZYFwLjmaHUy+KOr1GHYd08FoGOjvnOy7pko5Z2iiyFIuGGtS7fHPDGPgXdG+61oTmZrBu3LrHsxxHDdgyMGaUpv8KYoZBFkQBBwzsMg4LJkT7FIVQZGL2HUsJ+AiaQoYX8a/gsncYLfbiQ3orQBt33X7psenaZ5lzHcslzLMw9sl/C0sGpFW2Dvt+xZzqW12vG2rSuJzoTLBObUth7ZLuL+UAK0smMiLquz2ASayagPLYu2+lP4F4pMkiSlLbBI2+uPv+GdwaooEZdkJs+DBe7fv9jvLEk0uu6DHS2MRCdmF7TfRaxaxNC/arVl07n6/r/ZVu98StyzRf5LQOIrCKIriJLGTxfRzJZ6xAqFU0Likeg+2XaWsbHKL8JxJ51GoTFGQ37bfWK+pTzkvLWvfVg56V1akaRmYgaAK7/t+z8D45yzcwrL2I8oKx2qqZhd0ZS8AG0AUiemwUMI9NF/JyIJPhXgFlngRTV1S5mnr7vaFHIKqQAWCpciQeL4kWCMDUvis1M57YWSUqI0FJBVpUbqycWRBVQvJDJo29ZSCdS8irhdnh8j1dJl5fhyRHQ5duXMrLpCiKCpZQkkQmw5VGtbrXkRtwemWfAKHeT4lrkgYL5wAOwrHPy9z7EHBZAV9M4iVhp7AT3dwuiMfIKBe5FiMYomEsxWybXEBSPccP8S0rc047JOgCBJx1ksDjUZeRFzsFSyFRROaSAYu46cxlSWIViaVOVAxhCHNtPkJwVxPIs+20AfmJ7ISKg05GE/6BkKfkWnFa2WYxZiWxuiEYKazKCSOfM6P1hai0K/UIfGR/NjDP9P1vQNBRGtj/InAIY7nyhrZViJ1IDJWzd/DUfeKhPaRIC7O6igJVlbYt9pKhdIL79tHGeLMVa8A8TQ7UzDXWbxyUKB8bGVFCnhEHgnW3sr0jilgmTE77WSNxsTGbx1F0EtRJVsfX5VrJUEJYOKsl3GYE2K7vcCVHf7rdH1k6AmI6fUppIzBXycEv2DDiEyxjRJQgXeKPKDRbNu011gnrA6O468Tgr8fF5xEgefYUgEJD4AP6AHvkZWvMsDqJfx9Ok1YhhUNFcC2iH+BwEa8bSM5BoAtdt4G8lx3Axp4GAE+R+Tja/voFu34bm0TX240HBPt/F57AwtKo7WtfBJLgQ7/HwT45xNPCmA4zXdnBHisRTzyQs/GvMli/Yv9IJAcoeUklHFR65+Ptydciti2IXaQTSz/4Hz9wSDT661D25WT3mzht+sOruUkirY4OZ5NvNUx5g8FahHFnos7Mm2N34+mJ9g0OD5q+Ihzkj189WRIcpfi1y4umi6AC1e2GZRFRLdypxDZSn3gnocEGJYtj4MYJxwJqk67dMBfg9EJKk+QyCNyffr+Ws4UCkDf2D1UNjBzefG+gIvXzmdYdlQyxBQn2pdHEMYTyuGJaL9eJEH6vvnTrX4Amw63GUrwiQSrwxi3Shz3eHlX2rndDuaX8bgWYNupJZbgVpK4WO02DF0a1o+JreAw+hNeMmw6Lv1SEsl13C9XJT1Re7qqll/hr67eMA8lRpH4hNFTvLrgpPtuCbOv8PKUNdIux3Z1HB738AOe8bLLDfj2t+H9BJb5Pk+Y5fBEpf7AULQo//H7Oz8WY6oteV1nFp6UPUHC86ZJlxoM/9tPqtvhVFts0oryOsuysq6bSgQLbTq/+x57tIfRVDMWxmaLtlkuDG06evnymn6067v7h5fBcDiYqV9RHzYdDYZv+APs+elrnpsZfGPjS5fUMwqp4XX4NhuNxpODjcej2Xw4eEH/t58E/ANUn4CQSxfx2QAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 70.6,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 70.6,
            magnification: "400%",
            count: "40",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-3.3s",
            delayFrames: "20-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQABAQACAQECAQECAQECAQEZEAo0HxFAIBFSKxpOMBtrNiFuQSeUQx+EWDKfTiisTyilWzC5WDGtYjO+XDSZcEixaTjCYTfGZTq2c0PIazzKcEC6fE3PdEHQe0XDhU3Vf0XXhUrZjVDek1HemVfwmFLjnlrmo1vpp17srG37p176tmH0tnv8vWz+xYT/3o+DuX2FAAAAQHRSTlMADRwnMUdhh5HE0uHq9ztWcbZ9nKb///9/Fv87////////////////////////////////////////////////UOo15wAABpBJREFUWIWlV4ly4jgQzc0VkpDQ9q4HI2yDTywsybex8/9/tS0ZNpBhkq1sp0JR4Pf69SlxdXW0l4er/2XXAOPhz+HPbyNYANz8mGAA2jJbwOsP4TcPI+C15+uTHxLcg76sKfFNePkhw+OiS0yy8gwY/SgNv6YGW6E5jatNflLNEWi6bpjGss1MHca3x89vnh5eh8PXh6fvZN0NRlNA00uxYFSbXkvww9sYP9TQ8JvJ/OX2a47ru+eXN9AMPctMmNw/zaegLzZbnuZ5xa2FYQDMnr8N5X4OWp2tljqAsUmbtm2bps3jOBF1m28MGH+fnxcwIpLVGlTvTVmUZVO6zjav8H3dNjss0tN3DK+PmiFqAnpdF2XRCCtAkiLPhBB50+50GHzHMAZospUFOuIaZom2LIq8yFMhKdpmCaPrr+DXI1iC7pr1FgLUbFVNgYGUZYFwLjmaHUy+KOr1GHYd08FoGOjvnOy7pko5Z2iiyFIuGGtS7fHPDGPgXdG+61oTmZrBu3LrHsxxHDdgyMGaUpv8KYoZBFkQBBwzsMg4LJkT7FIVQZGL2HUsJ+AiaQoYX8a/gsncYLfbiQ3orQBt33X7psenaZ5lzHcslzLMw9sl/C0sGpFW2Dvt+xZzqW12vG2rSuJzoTLBObUth7ZLuL+UAK0smMiLquz2ASayagPLYu2+lP4F4pMkiSlLbBI2+uPv+GdwaooEZdkJs+DBe7fv9jvLEk0uu6DHS2MRCdmF7TfRaxaxNC/arVl07n6/r/ZVu98StyzRf5LQOIrCKIriJLGTxfRzJZ6xAqFU0Likeg+2XaWsbHKL8JxJ51GoTFGQ37bfWK+pTzkvLWvfVg56V1akaRmYgaAK7/t+z8D45yzcwrL2I8oKx2qqZhd0ZS8AG0AUiemwUMI9NF/JyIJPhXgFlngRTV1S5mnr7vaFHIKqQAWCpciQeL4kWCMDUvis1M57YWSUqI0FJBVpUbqycWRBVQvJDJo29ZSCdS8irhdnh8j1dJl5fhyRHQ5duXMrLpCiKCpZQkkQmw5VGtbrXkRtwemWfAKHeT4lrkgYL5wAOwrHPy9z7EHBZAV9M4iVhp7AT3dwuiMfIKBe5FiMYomEsxWybXEBSPccP8S0rc047JOgCBJx1ksDjUZeRFzsFSyFRROaSAYu46cxlSWIViaVOVAxhCHNtPkJwVxPIs+20AfmJ7ISKg05GE/6BkKfkWnFa2WYxZiWxuiEYKazKCSOfM6P1hai0K/UIfGR/NjDP9P1vQNBRGtj/InAIY7nyhrZViJ1IDJWzd/DUfeKhPaRIC7O6igJVlbYt9pKhdIL79tHGeLMVa8A8TQ7UzDXWbxyUKB8bGVFCnhEHgnW3sr0jilgmTE77WSNxsTGbx1F0EtRJVsfX5VrJUEJYOKsl3GYE2K7vcCVHf7rdH1k6AmI6fUppIzBXycEv2DDiEyxjRJQgXeKPKDRbNu011gnrA6O468Tgr8fF5xEgefYUgEJD4AP6AHvkZWvMsDqJfx9Ok1YhhUNFcC2iH+BwEa8bSM5BoAtdt4G8lx3Axp4GAE+R+Tja/voFu34bm0TX240HBPt/F57AwtKo7WtfBJLgQ7/HwT45xNPCmA4zXdnBHisRTzyQs/GvMli/Yv9IJAcoeUklHFR65+Ptydciti2IXaQTSz/4Hz9wSDT661D25WT3mzht+sOruUkirY4OZ5NvNUx5g8FahHFnos7Mm2N34+mJ9g0OD5q+Ihzkj189WRIcpfi1y4umi6AC1e2GZRFRLdypxDZSn3gnocEGJYtj4MYJxwJqk67dMBfg9EJKk+QyCNyffr+Ws4UCkDf2D1UNjBzefG+gIvXzmdYdlQyxBQn2pdHEMYTyuGJaL9eJEH6vvnTrX4Amw63GUrwiQSrwxi3Shz3eHlX2rndDuaX8bgWYNupJZbgVpK4WO02DF0a1o+JreAw+hNeMmw6Lv1SEsl13C9XJT1Re7qqll/hr67eMA8lRpH4hNFTvLrgpPtuCbOv8PKUNdIux3Z1HB738AOe8bLLDfj2t+H9BJb5Pk+Y5fBEpf7AULQo//H7Oz8WY6oteV1nFp6UPUHC86ZJlxoM/9tPqtvhVFts0oryOsuysq6bSgQLbTq/+x57tIfRVDMWxmaLtlkuDG06evnymn6067v7h5fBcDiYqV9RHzYdDYZv+APs+elrnpsZfGPjS5fUMwqp4XX4NhuNxpODjcej2Xw4eEH/t58E/ANUn4CQSxfx2QAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 70.6,
            magnification: "400%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-3.3s",
            delayFrames: "20-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 17.65,
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
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "アクロバティック獅子舞",
      baseHp: 90000,
      width: 4500,
      enemyLimit: 30,
      requiredCost: 75,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "208",
          treasureName: "伝説の縁起物",
          probability: "75",
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
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 146.36,
            magnification: "400%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 70.6,
            magnification: "400%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 70.6,
            magnification: "400%",
            count: "10",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQABAQACAQECAQECAQECAQEZEAo0HxFAIBFSKxpOMBtrNiFuQSeUQx+EWDKfTiisTyilWzC5WDGtYjO+XDSZcEixaTjCYTfGZTq2c0PIazzKcEC6fE3PdEHQe0XDhU3Vf0XXhUrZjVDek1HemVfwmFLjnlrmo1vpp17srG37p176tmH0tnv8vWz+xYT/3o+DuX2FAAAAQHRSTlMADRwnMUdhh5HE0uHq9ztWcbZ9nKb///9/Fv87////////////////////////////////////////////////UOo15wAABpBJREFUWIWlV4ly4jgQzc0VkpDQ9q4HI2yDTywsybex8/9/tS0ZNpBhkq1sp0JR4Pf69SlxdXW0l4er/2XXAOPhz+HPbyNYANz8mGAA2jJbwOsP4TcPI+C15+uTHxLcg76sKfFNePkhw+OiS0yy8gwY/SgNv6YGW6E5jatNflLNEWi6bpjGss1MHca3x89vnh5eh8PXh6fvZN0NRlNA00uxYFSbXkvww9sYP9TQ8JvJ/OX2a47ru+eXN9AMPctMmNw/zaegLzZbnuZ5xa2FYQDMnr8N5X4OWp2tljqAsUmbtm2bps3jOBF1m28MGH+fnxcwIpLVGlTvTVmUZVO6zjav8H3dNjss0tN3DK+PmiFqAnpdF2XRCCtAkiLPhBB50+50GHzHMAZospUFOuIaZom2LIq8yFMhKdpmCaPrr+DXI1iC7pr1FgLUbFVNgYGUZYFwLjmaHUy+KOr1GHYd08FoGOjvnOy7pko5Z2iiyFIuGGtS7fHPDGPgXdG+61oTmZrBu3LrHsxxHDdgyMGaUpv8KYoZBFkQBBwzsMg4LJkT7FIVQZGL2HUsJ+AiaQoYX8a/gsncYLfbiQ3orQBt33X7psenaZ5lzHcslzLMw9sl/C0sGpFW2Dvt+xZzqW12vG2rSuJzoTLBObUth7ZLuL+UAK0smMiLquz2ASayagPLYu2+lP4F4pMkiSlLbBI2+uPv+GdwaooEZdkJs+DBe7fv9jvLEk0uu6DHS2MRCdmF7TfRaxaxNC/arVl07n6/r/ZVu98StyzRf5LQOIrCKIriJLGTxfRzJZ6xAqFU0Likeg+2XaWsbHKL8JxJ51GoTFGQ37bfWK+pTzkvLWvfVg56V1akaRmYgaAK7/t+z8D45yzcwrL2I8oKx2qqZhd0ZS8AG0AUiemwUMI9NF/JyIJPhXgFlngRTV1S5mnr7vaFHIKqQAWCpciQeL4kWCMDUvis1M57YWSUqI0FJBVpUbqycWRBVQvJDJo29ZSCdS8irhdnh8j1dJl5fhyRHQ5duXMrLpCiKCpZQkkQmw5VGtbrXkRtwemWfAKHeT4lrkgYL5wAOwrHPy9z7EHBZAV9M4iVhp7AT3dwuiMfIKBe5FiMYomEsxWybXEBSPccP8S0rc047JOgCBJx1ksDjUZeRFzsFSyFRROaSAYu46cxlSWIViaVOVAxhCHNtPkJwVxPIs+20AfmJ7ISKg05GE/6BkKfkWnFa2WYxZiWxuiEYKazKCSOfM6P1hai0K/UIfGR/NjDP9P1vQNBRGtj/InAIY7nyhrZViJ1IDJWzd/DUfeKhPaRIC7O6igJVlbYt9pKhdIL79tHGeLMVa8A8TQ7UzDXWbxyUKB8bGVFCnhEHgnW3sr0jilgmTE77WSNxsTGbx1F0EtRJVsfX5VrJUEJYOKsl3GYE2K7vcCVHf7rdH1k6AmI6fUppIzBXycEv2DDiEyxjRJQgXeKPKDRbNu011gnrA6O468Tgr8fF5xEgefYUgEJD4AP6AHvkZWvMsDqJfx9Ok1YhhUNFcC2iH+BwEa8bSM5BoAtdt4G8lx3Axp4GAE+R+Tja/voFu34bm0TX240HBPt/F57AwtKo7WtfBJLgQ7/HwT45xNPCmA4zXdnBHisRTzyQs/GvMli/Yv9IJAcoeUklHFR65+Ptydciti2IXaQTSz/4Hz9wSDT661D25WT3mzht+sOruUkirY4OZ5NvNUx5g8FahHFnos7Mm2N34+mJ9g0OD5q+Ihzkj189WRIcpfi1y4umi6AC1e2GZRFRLdypxDZSn3gnocEGJYtj4MYJxwJqk67dMBfg9EJKk+QyCNyffr+Ws4UCkDf2D1UNjBzefG+gIvXzmdYdlQyxBQn2pdHEMYTyuGJaL9eJEH6vvnTrX4Amw63GUrwiQSrwxi3Shz3eHlX2rndDuaX8bgWYNupJZbgVpK4WO02DF0a1o+JreAw+hNeMmw6Lv1SEsl13C9XJT1Re7qqll/hr67eMA8lRpH4hNFTvLrgpPtuCbOv8PKUNdIux3Z1HB738AOe8bLLDfj2t+H9BJb5Pk+Y5fBEpf7AULQo//H7Oz8WY6oteV1nFp6UPUHC86ZJlxoM/9tPqtvhVFts0oryOsuysq6bSgQLbTq/+x57tIfRVDMWxmaLtlkuDG06evnymn6067v7h5fBcDiYqV9RHzYdDYZv+APs+elrnpsZfGPjS5fUMwqp4XX4NhuNxpODjcej2Xw4eEH/t58E/ANUn4CQSxfx2QAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 70.6,
            magnification: "400%",
            count: "10",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 3750.0,
            magnification: "400%",
            count: "5",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "023",
          enemyName: "悪の帝王 ニャンダム",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 99999,
            ap: 1800,
            dps: 116.63,
            speed: 2,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 6000,
            freq: 463,
            foreswing: 104,
            backswing: 29,
            tba: 180
          },
          stageStats: {
            actualHp: 199998,
            actualAp: 3600,
            actualDps: 233.26,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 6,
      stageName: "逆さ福字の飾りで福を招く",
      baseHp: 120000,
      width: 4400,
      enemyLimit: 30,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "208",
          treasureName: "伝説の縁起物",
          probability: "80",
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
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 600,
            actualDps: 782.6,
            magnification: "400%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 70.6,
            magnification: "400%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 70.6,
            magnification: "400%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "13.3-23.3s",
            delayFrames: "400-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQABAQACAQECAQECAQECAQEZEAo0HxFAIBFSKxpOMBtrNiFuQSeUQx+EWDKfTiisTyilWzC5WDGtYjO+XDSZcEixaTjCYTfGZTq2c0PIazzKcEC6fE3PdEHQe0XDhU3Vf0XXhUrZjVDek1HemVfwmFLjnlrmo1vpp17srG37p176tmH0tnv8vWz+xYT/3o+DuX2FAAAAQHRSTlMADRwnMUdhh5HE0uHq9ztWcbZ9nKb///9/Fv87////////////////////////////////////////////////UOo15wAABpBJREFUWIWlV4ly4jgQzc0VkpDQ9q4HI2yDTywsybex8/9/tS0ZNpBhkq1sp0JR4Pf69SlxdXW0l4er/2XXAOPhz+HPbyNYANz8mGAA2jJbwOsP4TcPI+C15+uTHxLcg76sKfFNePkhw+OiS0yy8gwY/SgNv6YGW6E5jatNflLNEWi6bpjGss1MHca3x89vnh5eh8PXh6fvZN0NRlNA00uxYFSbXkvww9sYP9TQ8JvJ/OX2a47ru+eXN9AMPctMmNw/zaegLzZbnuZ5xa2FYQDMnr8N5X4OWp2tljqAsUmbtm2bps3jOBF1m28MGH+fnxcwIpLVGlTvTVmUZVO6zjav8H3dNjss0tN3DK+PmiFqAnpdF2XRCCtAkiLPhBB50+50GHzHMAZospUFOuIaZom2LIq8yFMhKdpmCaPrr+DXI1iC7pr1FgLUbFVNgYGUZYFwLjmaHUy+KOr1GHYd08FoGOjvnOy7pko5Z2iiyFIuGGtS7fHPDGPgXdG+61oTmZrBu3LrHsxxHDdgyMGaUpv8KYoZBFkQBBwzsMg4LJkT7FIVQZGL2HUsJ+AiaQoYX8a/gsncYLfbiQ3orQBt33X7psenaZ5lzHcslzLMw9sl/C0sGpFW2Dvt+xZzqW12vG2rSuJzoTLBObUth7ZLuL+UAK0smMiLquz2ASayagPLYu2+lP4F4pMkiSlLbBI2+uPv+GdwaooEZdkJs+DBe7fv9jvLEk0uu6DHS2MRCdmF7TfRaxaxNC/arVl07n6/r/ZVu98StyzRf5LQOIrCKIriJLGTxfRzJZ6xAqFU0Likeg+2XaWsbHKL8JxJ51GoTFGQ37bfWK+pTzkvLWvfVg56V1akaRmYgaAK7/t+z8D45yzcwrL2I8oKx2qqZhd0ZS8AG0AUiemwUMI9NF/JyIJPhXgFlngRTV1S5mnr7vaFHIKqQAWCpciQeL4kWCMDUvis1M57YWSUqI0FJBVpUbqycWRBVQvJDJo29ZSCdS8irhdnh8j1dJl5fhyRHQ5duXMrLpCiKCpZQkkQmw5VGtbrXkRtwemWfAKHeT4lrkgYL5wAOwrHPy9z7EHBZAV9M4iVhp7AT3dwuiMfIKBe5FiMYomEsxWybXEBSPccP8S0rc047JOgCBJx1ksDjUZeRFzsFSyFRROaSAYu46cxlSWIViaVOVAxhCHNtPkJwVxPIs+20AfmJ7ISKg05GE/6BkKfkWnFa2WYxZiWxuiEYKazKCSOfM6P1hai0K/UIfGR/NjDP9P1vQNBRGtj/InAIY7nyhrZViJ1IDJWzd/DUfeKhPaRIC7O6igJVlbYt9pKhdIL79tHGeLMVa8A8TQ7UzDXWbxyUKB8bGVFCnhEHgnW3sr0jilgmTE77WSNxsTGbx1F0EtRJVsfX5VrJUEJYOKsl3GYE2K7vcCVHf7rdH1k6AmI6fUppIzBXycEv2DDiEyxjRJQgXeKPKDRbNu011gnrA6O468Tgr8fF5xEgefYUgEJD4AP6AHvkZWvMsDqJfx9Ok1YhhUNFcC2iH+BwEa8bSM5BoAtdt4G8lx3Axp4GAE+R+Tja/voFu34bm0TX240HBPt/F57AwtKo7WtfBJLgQ7/HwT45xNPCmA4zXdnBHisRTzyQs/GvMli/Yv9IJAcoeUklHFR65+Ptydciti2IXaQTSz/4Hz9wSDT661D25WT3mzht+sOruUkirY4OZ5NvNUx5g8FahHFnos7Mm2N34+mJ9g0OD5q+Ihzkj189WRIcpfi1y4umi6AC1e2GZRFRLdypxDZSn3gnocEGJYtj4MYJxwJqk67dMBfg9EJKk+QyCNyffr+Ws4UCkDf2D1UNjBzefG+gIvXzmdYdlQyxBQn2pdHEMYTyuGJaL9eJEH6vvnTrX4Amw63GUrwiQSrwxi3Shz3eHlX2rndDuaX8bgWYNupJZbgVpK4WO02DF0a1o+JreAw+hNeMmw6Lv1SEsl13C9XJT1Re7qqll/hr67eMA8lRpH4hNFTvLrgpPtuCbOv8PKUNdIux3Z1HB738AOe8bLLDfj2t+H9BJb5Pk+Y5fBEpf7AULQo//H7Oz8WY6oteV1nFp6UPUHC86ZJlxoM/9tPqtvhVFts0oryOsuysq6bSgQLbTq/+x57tIfRVDMWxmaLtlkuDG06evnymn6067v7h5fBcDiYqV9RHzYdDYZv+APs+elrnpsZfGPjS5fUMwqp4XX4NhuNxpODjcej2Xw4eEH/t58E/ANUn4CQSxfx2QAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 70.6,
            magnification: "400%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 70.6,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 600,
            actualDps: 782.6,
            magnification: "400%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 2000,
            actualDps: 2727.28,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 7,
      stageName: "赤提灯は超めでたい色",
      baseHp: 150000,
      width: 6000,
      enemyLimit: 30,
      requiredCost: 85,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "208",
          treasureName: "伝説の縁起物",
          probability: "85",
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
          enemyId: "004",
          enemyName: "ブタヤロウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAAADAAADAQEDAQIDAgADAgADAgAFBAMHAwIHBAIIAwEJAwALBAAOBQAUBwAUCQQeCgAeCgElDAAiDwYoDgAcHBw3EwI5EwA8FAA/FgBNGQBXHABUHgNfHwFmIwA2NTVuJQB3KAFHOzaELACOMAFNTU2kOAFmWVO5PwDIRABmZmbUSADgTADrTwB+d3T2UgD/VACampq6urrMzMzY2Njm5ubz8/P+/v7///8V1LKCAAAAQHRSTlMABg0U2R6UoSUsOUOszYVYTb5ljHP1ev7roJKvFuLLvf3Z8//l/8Pu/v/1/t79///+rf////7///v+/v////8AQsbFqgAABAtJREFUWIXtVm13qjgQFlxUBEUBXwoXKlCEkqbJDTFQFe///1ebgLa1K2p392PneDwoM08mz7x2/vxH6fwA/AD8APwA/G8A/04kReteey9LV81l1dT7yhUFxbIH7RDdieMnyfzaGaofupM2FwdOAAnNrgIoLoSBM1Eu6ShORlhRwKsA0jxjBD65k5OSJEuKWhPTdRJSFKyAjnwFoGMmrGAU+lqD0DWtuT61zEFHtp/ygkueXQXoPkDuZcGgq/LTVWPshWEKwlDXzAALe5aOjGtX0IL6mIJmVlfWXC8jNGeM5VngAe4adyB9aONYkhVFmSe0BijIk2UFMGfNr4ITgynlEGA6uewAzxDn0fe9FaCNEVqFpHlqvilMY0gpmKqfzzzRIWuWn0FMMIrA8VAGYnwEEE5Rbg6jFHgj44Mw0xo3ZCvzIMNMqOOYHJ3mR0LhDKMg5f+hmOA0Ws2cT5Uga0ZP5wjS8CE5elvACLGTC80Do9ECcU4wiQFBq6mtDX79OtIgTfqjqTkwfPBOFklj2tyb5idPkPCEMZBSEscg89a/f8/VGkLtG2O9pweIntzmbMd1uIscwOKzMJoimgJK4Wa735fr+u5aT+sZhofYZ724jh2JV5CwMwSUc4IoeN0dDoeqXItgqL3+eOjCcz0YxynCaQrSj4sdBaYUPL8dhFSbsSyai6qYCT1XYzkGccSzgdLii2CEorKqttVhu9uum3wYPKKvahwDoy+o7zy87qvydVdtNruNWQMYySXNNsH8Am/Pz7tD+fxWPtSBnMPbZh8CX6tD+VpWh/2mfFs31Yu/Yc+AsN1XnMT9frtuKMhv230AwE1Vh0BgvLlHgO9wgEQSVNvNS8m5dL7tAePVtNntyvVcc17KF6MBILcN3y8QAxS9vDhDmQ+IsSEfW+D99hFE6bJv11UgHSeYZCb/yLfL5gyuVnEchd7IPmtpIhPvoZHlECKSE+hZ55NRMp/upFE0J5y4xtee3HWyOwPJSObPL0xe9RHeh4CjqXZpJkmT4L50xkuzZSLY2V2RwL560V7sBKInsBvRYJnVNlRlK+UtnN7ISRRoLfadzoSHkic6KYo2L1iOQqt9t1JcJPp+zOfn+1Q5ffhcwIiPxcibtNp3JDurt4p4lWQAIkxyKiRv4PBquQIY+YN2gM4wqAkgnm0tecLH8SoMn4IgrOOLXbGbIPfadiiKUkyTYKj6mBKSTk3T0IaiVMVOpPKiv74ZHYsyfxx0XWGU1RUn8ZbNBc67Dr6xm/GihAhC6CqynSCIQkMWogWIz6fE5KkGU7sdQFKGE33GZTGyxvpssVjM9J6Q/nIxW85m+li81W1zog0vLpB8GbOtvq5Pp9ORkL/OpP6Lv9L7vbFtqJ8A/gZPl31DJ4v5JwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 720,
            actualDps: 295.92,
            magnification: "600%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 400,
            actualDps: 141.2,
            magnification: "800%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "048",
          enemyName: "エリザベス2世",
          icon: "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",
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
            actualHp: 240000,
            actualAp: 2400,
            actualDps: 3272.7,
            magnification: "600%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 5625.0,
            magnification: "600%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 400,
            actualDps: 141.2,
            magnification: "800%",
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 400,
            actualDps: 141.2,
            magnification: "800%",
            count: "10",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "049",
          enemyName: "赤井ブン太郎",
          icon: "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",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 400000,
            ap: 9287,
            dps: 8987.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 13930,
            actualDps: 13481.13,
            magnification: "150%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 8,
      stageName: "まんぷく年越し水餃子",
      baseHp: 180000,
      width: 4000,
      enemyLimit: 40,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "208",
          treasureName: "伝説の縁起物",
          probability: "70",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "208",
          treasureName: "伝説の縁起物",
          probability: "30",
          amount: "2",
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
            actualHp: 12000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "100%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 12000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "100%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 750,
            actualDps: 264.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
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
            actualHp: 12000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "100%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 750,
            actualDps: 264.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
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
            actualHp: 12000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 750,
            actualDps: 264.75,
            magnification: "1500%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "038",
          enemyName: "イノシャシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAAEBAQAEAQAEAQEFAgIJBAMNBAAIBgQLBQMLBwYNBwUVBwEMCwkRCQYWCgUVDQotEAExEAEwEQMgHh8vHRNGFgBNGQBRGwAsKys0MzJpIgFzJgFUMiM9PDxFQ0GJLQCRLwB4Ox2dNQFRT05qTT6wOgHCQQFkZGN4XlHWRwGCb2bsTgF2dXT/VAD7Zh2Mi4n9dzX/iU6sp6T9oHLFv7z/uJbY09L+zbb15Nz68ez9+ff//v7///9Ee4NSAAAAQHRSTlMABgwV9R/nLDn+sZ1HU9FdcILB/piuiefD1/yezur+/7fn//P//s///v/g/////+r///j///v//v////////8AxgVyUgAABXhJREFUWIXtV2l7sjoQLVAvUhdAigvWqNFoogERyybL+///1Z2gttq6vc/9eqdPU6ycw8zJZGZ4+fMf7eV/gj8v902q1x7c8cDUTlf+L3ipG6zq1ZVc/zui2sFzdZGGXQkuFLNT/xu8bNp1gdODIl2oQDTcrP6OYBgsdAX+xGURGEpzEmab1t8RxOlm2FQXWVmmi/dVXBSBDpIoNfU5KcSj83jxtilKcCHI8rIMDLVpDD/e1KcJyiJ1YS0LAS/KeLrYhHHw5K4qwyMUPMj2sBZZlsKnStEHJilqXe9+gHplFglwlMCyTzLgyjeG9JCg3vjYBGEoHp5sk899touiLNlFSV7k8UdLecigGNM4B5eTfRb5u+0u2u62n1sfGKIk3qwmxsPDIbcWcVHmySfAOKL+0bbbHcSShx9PqFCfhCDADlDEQZ7/RfGZFelKf6wC6DAJ0zja+h5CDv0mSLJ09YSKwpq9Odv6PsPnLmyjaNt7Lo8kfcQFjhCGEPkOwvdGze+7FOW2A4MKzxHzEL1gmB1CUEQ+Nm+GU7NZdTdzuI8pP2dgtnisZIijqXduxCOZs8PdHAgY8jzMv2MY1Ks7GsCj9264oA6OAA+zw+93CD4RIKnbAy30zeSqCpLpcH6gYMS/QAuv+jVB4EKh04PrVUptY3ra/R/ok4xQayc1IBBF5rcDxohazhXkkVK4IHXDVV0ywkPB/elAnzgWpZcM/GwjZrqoN4Eud+N4+JtAMmZIQ9xhFwTk7Ehwu6ZM0tCAJZ38rk/ggGUxal0SUAufuwDFNjRhSX9vg2zOHA17yOIXBFizvn1gtr4pwm5rU/wmkFoDR3M41Sx+IQLRNM350mXWCcuw2w3LXyHIAm8xDiQ/RLQEw4mUj9MybEDPiIeXBDVD4ImHNI1e4H2PIQd/OUXdvAzbAZT6i22Um/aowmNNQzfzQLDNRcMbp0URnh+GmjkgyELcwxasd/A+W2dl7gYFtLuqX0pyS1dV1Z5xjzDP51isdx0IodusofCnU6MJaWmYw2nnrU/vos6MuNAy0vF46S6d0cgGgukmXlr0MfJgdJ1C1wsxp5R7Hh+A9Ks0XT+N53PRNXOX4ipXef9FfXOzgDyPh5YBM8OcIMZBL/r+8tKCCJ6K34M6Mw/yamTAUGwRtI0R7IPcnd4NwKPHrzFC4/AwK8wRphZiFu6Lw1DrsDtwMnfDCNqkcIAu07KArrfGiCGNYmdmikyS7Tt5w5xlmObQ5io27MLQlLmYYO44UO/7VWFX+vcSz2PjIN8nu6M/bpy6kO3Ec7DHRodO+0VwXUou/E62J0HmYyRS1ockmJmHciC/s6OD17QAt+N0v9t97k4UGGFRIvnoiIdcPKYBvXYIOZrPl+k+yyN/6wstIf2Ag4z6+lcxaI4OQA9d3U+PL0G6ItpFn5HvreeEgxuOUfs+yopNT5JflZOv4eSlSbLfZ59JGi971OPnfR4mkiPDyYUfkbB16M7hDOYFTI7hZmrYg77xo5j1D/ohZ0bEIfMqz08EMCIwqCIF/GT5ytBrilr70VFgJKkwI0M3G/bAwZgQfKxLjDJKCR6n8Tp21/GNsV9+p6AvhvFBkuV6HzDYah9IUef93TTMXrAcB3NnemvMqw88yLNq/hDtTWxfwyZCDfIuwlUa0DDHZNZo3Zi2q2ziPaN6H6j1Acja5kAoU00E4vWLcMyZfeuFQRIEFI3aIr0qAoJ6PdFjvZFZvXDV28zziNU31auDjWITzjHjaGTqutlj8IFTKPMgjOMMGoau62/Yo4Qgp3FlWpZbjfarBQ0BO9ormGZVHyzRJzEnh3++OsghFL12zN8bIbfMxlu7/Y+w13MDJoBZ1bX4st1uvzWMc4J/AYD5z+WvnL/UAAAAAElFTkSuQmCC",
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
            actualHp: 800000,
            actualAp: 9674,
            actualDps: 26383.64,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 9,
      stageName: "帰省で全国大移動",
      baseHp: 240000,
      width: 5000,
      enemyLimit: 50,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "208",
          treasureName: "伝説の縁起物",
          probability: "50",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "208",
          treasureName: "伝説の縁起物",
          probability: "50",
          amount: "2",
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
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 1059.0,
            magnification: "6000%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 1059.0,
            magnification: "6000%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 1059.0,
            magnification: "6000%",
            count: "3",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 1059.0,
            magnification: "6000%",
            count: "4",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 1059.0,
            magnification: "6000%",
            count: "5",
            spawnTime: "63.3s",
            spawnTimeFrames: "1,900f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 1059.0,
            magnification: "6000%",
            count: "45",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.0-2.0s",
            delayFrames: "30-60f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQABAQACAQECAQECAQECAQEZEAo0HxFAIBFSKxpOMBtrNiFuQSeUQx+EWDKfTiisTyilWzC5WDGtYjO+XDSZcEixaTjCYTfGZTq2c0PIazzKcEC6fE3PdEHQe0XDhU3Vf0XXhUrZjVDek1HemVfwmFLjnlrmo1vpp17srG37p176tmH0tnv8vWz+xYT/3o+DuX2FAAAAQHRSTlMADRwnMUdhh5HE0uHq9ztWcbZ9nKb///9/Fv87////////////////////////////////////////////////UOo15wAABpBJREFUWIWlV4ly4jgQzc0VkpDQ9q4HI2yDTywsybex8/9/tS0ZNpBhkq1sp0JR4Pf69SlxdXW0l4er/2XXAOPhz+HPbyNYANz8mGAA2jJbwOsP4TcPI+C15+uTHxLcg76sKfFNePkhw+OiS0yy8gwY/SgNv6YGW6E5jatNflLNEWi6bpjGss1MHca3x89vnh5eh8PXh6fvZN0NRlNA00uxYFSbXkvww9sYP9TQ8JvJ/OX2a47ru+eXN9AMPctMmNw/zaegLzZbnuZ5xa2FYQDMnr8N5X4OWp2tljqAsUmbtm2bps3jOBF1m28MGH+fnxcwIpLVGlTvTVmUZVO6zjav8H3dNjss0tN3DK+PmiFqAnpdF2XRCCtAkiLPhBB50+50GHzHMAZospUFOuIaZom2LIq8yFMhKdpmCaPrr+DXI1iC7pr1FgLUbFVNgYGUZYFwLjmaHUy+KOr1GHYd08FoGOjvnOy7pko5Z2iiyFIuGGtS7fHPDGPgXdG+61oTmZrBu3LrHsxxHDdgyMGaUpv8KYoZBFkQBBwzsMg4LJkT7FIVQZGL2HUsJ+AiaQoYX8a/gsncYLfbiQ3orQBt33X7psenaZ5lzHcslzLMw9sl/C0sGpFW2Dvt+xZzqW12vG2rSuJzoTLBObUth7ZLuL+UAK0smMiLquz2ASayagPLYu2+lP4F4pMkiSlLbBI2+uPv+GdwaooEZdkJs+DBe7fv9jvLEk0uu6DHS2MRCdmF7TfRaxaxNC/arVl07n6/r/ZVu98StyzRf5LQOIrCKIriJLGTxfRzJZ6xAqFU0Likeg+2XaWsbHKL8JxJ51GoTFGQ37bfWK+pTzkvLWvfVg56V1akaRmYgaAK7/t+z8D45yzcwrL2I8oKx2qqZhd0ZS8AG0AUiemwUMI9NF/JyIJPhXgFlngRTV1S5mnr7vaFHIKqQAWCpciQeL4kWCMDUvis1M57YWSUqI0FJBVpUbqycWRBVQvJDJo29ZSCdS8irhdnh8j1dJl5fhyRHQ5duXMrLpCiKCpZQkkQmw5VGtbrXkRtwemWfAKHeT4lrkgYL5wAOwrHPy9z7EHBZAV9M4iVhp7AT3dwuiMfIKBe5FiMYomEsxWybXEBSPccP8S0rc047JOgCBJx1ksDjUZeRFzsFSyFRROaSAYu46cxlSWIViaVOVAxhCHNtPkJwVxPIs+20AfmJ7ISKg05GE/6BkKfkWnFa2WYxZiWxuiEYKazKCSOfM6P1hai0K/UIfGR/NjDP9P1vQNBRGtj/InAIY7nyhrZViJ1IDJWzd/DUfeKhPaRIC7O6igJVlbYt9pKhdIL79tHGeLMVa8A8TQ7UzDXWbxyUKB8bGVFCnhEHgnW3sr0jilgmTE77WSNxsTGbx1F0EtRJVsfX5VrJUEJYOKsl3GYE2K7vcCVHf7rdH1k6AmI6fUppIzBXycEv2DDiEyxjRJQgXeKPKDRbNu011gnrA6O468Tgr8fF5xEgefYUgEJD4AP6AHvkZWvMsDqJfx9Ok1YhhUNFcC2iH+BwEa8bSM5BoAtdt4G8lx3Axp4GAE+R+Tja/voFu34bm0TX240HBPt/F57AwtKo7WtfBJLgQ7/HwT45xNPCmA4zXdnBHisRTzyQs/GvMli/Yv9IJAcoeUklHFR65+Ptydciti2IXaQTSz/4Hz9wSDT661D25WT3mzht+sOruUkirY4OZ5NvNUx5g8FahHFnos7Mm2N34+mJ9g0OD5q+Ihzkj189WRIcpfi1y4umi6AC1e2GZRFRLdypxDZSn3gnocEGJYtj4MYJxwJqk67dMBfg9EJKk+QyCNyffr+Ws4UCkDf2D1UNjBzefG+gIvXzmdYdlQyxBQn2pdHEMYTyuGJaL9eJEH6vvnTrX4Amw63GUrwiQSrwxi3Shz3eHlX2rndDuaX8bgWYNupJZbgVpK4WO02DF0a1o+JreAw+hNeMmw6Lv1SEsl13C9XJT1Re7qqll/hr67eMA8lRpH4hNFTvLrgpPtuCbOv8PKUNdIux3Z1HB738AOe8bLLDfj2t+H9BJb5Pk+Y5fBEpf7AULQo//H7Oz8WY6oteV1nFp6UPUHC86ZJlxoM/9tPqtvhVFts0oryOsuysq6bSgQLbTq/+x57tIfRVDMWxmaLtlkuDG06evnymn6067v7h5fBcDiYqV9RHzYdDYZv+APs+elrnpsZfGPjS5fUMwqp4XX4NhuNxpODjcej2Xw4eEH/t58E/ANUn4CQSxfx2QAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 1059.0,
            magnification: "6000%",
            count: "30",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-3.0s",
            delayFrames: "60-90f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 1059.0,
            magnification: "6000%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.0-4.0s",
            delayFrames: "90-120f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "598",
          enemyName: "花火玉",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQABAQACAQECAQECAQECAQEZEAo0HxFAIBFSKxpOMBtrNiFuQSeUQx+EWDKfTiisTyilWzC5WDGtYjO+XDSZcEixaTjCYTfGZTq2c0PIazzKcEC6fE3PdEHQe0XDhU3Vf0XXhUrZjVDek1HemVfwmFLjnlrmo1vpp17srG37p176tmH0tnv8vWz+xYT/3o+DuX2FAAAAQHRSTlMADRwnMUdhh5HE0uHq9ztWcbZ9nKb///9/Fv87////////////////////////////////////////////////UOo15wAABpBJREFUWIWlV4ly4jgQzc0VkpDQ9q4HI2yDTywsybex8/9/tS0ZNpBhkq1sp0JR4Pf69SlxdXW0l4er/2XXAOPhz+HPbyNYANz8mGAA2jJbwOsP4TcPI+C15+uTHxLcg76sKfFNePkhw+OiS0yy8gwY/SgNv6YGW6E5jatNflLNEWi6bpjGss1MHca3x89vnh5eh8PXh6fvZN0NRlNA00uxYFSbXkvww9sYP9TQ8JvJ/OX2a47ru+eXN9AMPctMmNw/zaegLzZbnuZ5xa2FYQDMnr8N5X4OWp2tljqAsUmbtm2bps3jOBF1m28MGH+fnxcwIpLVGlTvTVmUZVO6zjav8H3dNjss0tN3DK+PmiFqAnpdF2XRCCtAkiLPhBB50+50GHzHMAZospUFOuIaZom2LIq8yFMhKdpmCaPrr+DXI1iC7pr1FgLUbFVNgYGUZYFwLjmaHUy+KOr1GHYd08FoGOjvnOy7pko5Z2iiyFIuGGtS7fHPDGPgXdG+61oTmZrBu3LrHsxxHDdgyMGaUpv8KYoZBFkQBBwzsMg4LJkT7FIVQZGL2HUsJ+AiaQoYX8a/gsncYLfbiQ3orQBt33X7psenaZ5lzHcslzLMw9sl/C0sGpFW2Dvt+xZzqW12vG2rSuJzoTLBObUth7ZLuL+UAK0smMiLquz2ASayagPLYu2+lP4F4pMkiSlLbBI2+uPv+GdwaooEZdkJs+DBe7fv9jvLEk0uu6DHS2MRCdmF7TfRaxaxNC/arVl07n6/r/ZVu98StyzRf5LQOIrCKIriJLGTxfRzJZ6xAqFU0Likeg+2XaWsbHKL8JxJ51GoTFGQ37bfWK+pTzkvLWvfVg56V1akaRmYgaAK7/t+z8D45yzcwrL2I8oKx2qqZhd0ZS8AG0AUiemwUMI9NF/JyIJPhXgFlngRTV1S5mnr7vaFHIKqQAWCpciQeL4kWCMDUvis1M57YWSUqI0FJBVpUbqycWRBVQvJDJo29ZSCdS8irhdnh8j1dJl5fhyRHQ5duXMrLpCiKCpZQkkQmw5VGtbrXkRtwemWfAKHeT4lrkgYL5wAOwrHPy9z7EHBZAV9M4iVhp7AT3dwuiMfIKBe5FiMYomEsxWybXEBSPccP8S0rc047JOgCBJx1ksDjUZeRFzsFSyFRROaSAYu46cxlSWIViaVOVAxhCHNtPkJwVxPIs+20AfmJ7ISKg05GE/6BkKfkWnFa2WYxZiWxuiEYKazKCSOfM6P1hai0K/UIfGR/NjDP9P1vQNBRGtj/InAIY7nyhrZViJ1IDJWzd/DUfeKhPaRIC7O6igJVlbYt9pKhdIL79tHGeLMVa8A8TQ7UzDXWbxyUKB8bGVFCnhEHgnW3sr0jilgmTE77WSNxsTGbx1F0EtRJVsfX5VrJUEJYOKsl3GYE2K7vcCVHf7rdH1k6AmI6fUppIzBXycEv2DDiEyxjRJQgXeKPKDRbNu011gnrA6O468Tgr8fF5xEgefYUgEJD4AP6AHvkZWvMsDqJfx9Ok1YhhUNFcC2iH+BwEa8bSM5BoAtdt4G8lx3Axp4GAE+R+Tja/voFu34bm0TX240HBPt/F57AwtKo7WtfBJLgQ7/HwT45xNPCmA4zXdnBHisRTzyQs/GvMli/Yv9IJAcoeUklHFR65+Ptydciti2IXaQTSz/4Hz9wSDT661D25WT3mzht+sOruUkirY4OZ5NvNUx5g8FahHFnos7Mm2N34+mJ9g0OD5q+Ihzkj189WRIcpfi1y4umi6AC1e2GZRFRLdypxDZSn3gnocEGJYtj4MYJxwJqk67dMBfg9EJKk+QyCNyffr+Ws4UCkDf2D1UNjBzefG+gIvXzmdYdlQyxBQn2pdHEMYTyuGJaL9eJEH6vvnTrX4Amw63GUrwiQSrwxi3Shz3eHlX2rndDuaX8bgWYNupJZbgVpK4WO02DF0a1o+JreAw+hNeMmw6Lv1SEsl13C9XJT1Re7qqll/hr67eMA8lRpH4hNFTvLrgpPtuCbOv8PKUNdIux3Z1HB738AOe8bLLDfj2t+H9BJb5Pk+Y5fBEpf7AULQo//H7Oz8WY6oteV1nFp6UPUHC86ZJlxoM/9tPqtvhVFts0oryOsuysq6bSgQLbTq/+x57tIfRVDMWxmaLtlkuDG06evnymn6067v7h5fBcDiYqV9RHzYdDYZv+APs+elrnpsZfGPjS5fUMwqp4XX4NhuNxpODjcej2Xw4eEH/t58E/ANUn4CQSxfx2QAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 17.65,
            speed: 20,
            range: 75,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 85,
            foreswing: 8,
            backswing: 77,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 17.65,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 150,
                omni_range: [-450, 150]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        }]
    }
  ]
} as const;

export default e24041Data;

