// Stage 1080 Data
import type { StageData } from '../../app/stage/types';

export const e1080Data: StageData = {
  eventId: 1080,
  eventName: "バースデープレゼント！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 80,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "祝！３周年！！",
      baseHp: 2000,
      width: 6000,
      enemyLimit: 4,
      requiredCost: 100,
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
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "9000",
          treasureName: "キャラクタードロップ(9000)",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "8900",
          treasureName: "キャラクタードロップ(8900)",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "8800",
          treasureName: "キャラクタードロップ(8800)",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "8700",
          treasureName: "キャラクタードロップ(8700)",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "8600",
          treasureName: "キャラクタードロップ(8600)",
          probability: "1",
          amount: "12",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "8500",
          treasureName: "キャラクタードロップ(8500)",
          probability: "1",
          amount: "3",
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
          enemyId: "120",
          enemyName: "ダミー",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 50,
            ap: 1,
            dps: 0.97,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2,
            freq: 31,
            foreswing: 5,
            backswing: 26,
            tba: 0
          },
          stageStats: {
            actualHp: 250,
            actualAp: 5,
            actualDps: 4.85,
            magnification: "500%",
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
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQFBQUGBgYGBgYGBgYGBgYHBwcJCQkJCQkODg4TExMWFhYWFhYaGhobGxsiIiIrKystLS0xMTE4ODg4ODhAQEBDQ0NLS0tMTExUVFRcXFxlZWVycnKAgICOjo6bm5unp6ezs7O/v7/ExMTKysrS0tLc3Nzi4uLo6Oju7u709PT7+/v///9zib0wAAAAQHRSTlMABgwSGiQ4LEFK0VVf8W14gMPekbmIl6Cxqej71su+4fX+6dn/9uv/9P//9P/8///9////////////////////kGjFlQAABYtJREFUWIWVV4mWojoQbRAFGhrcQVBbBGVfAig7/v9fvcJxQcUZ39WjJFA3taVSfH39AzhBtAaDAfH+0U70aJ7Br+IkMxdo7P+Ig8hiPO9fuKiZuv/l8b+LPC5PTVa73ZpqFsUIVtwjZMx6/0OeEbdeFKgcLIr1+ZWB0siYfe4Egl3vw7SI7DnIEPzSivIyNib9j9dn10aYV3XiiiTWY0d2VNZVbMz7H3oRZxr5+nTK/DXVoxZGWJ7q6mgL5GcE2EDYhwXIn0q0YkleDbL6VNeJtRh8RkAM1aBZ/3SqI3VIL+xDM6gT50MCnJru0OHY4ID24mzpROfrUJ+yHzgB65H8WNGu2Ei/m+tIkUY8+a9cwklOWG506woX4FyvPVtd0H9PJpyer7ZeGB8uOCaA4+26MelvDFifFbcWSqqzBztQ5+FeeO9JjOBGOz8u3ok3yCC73yY0pNwOZW+X/6NDYr8NJkaJO5T/VRxQ+CummwAj59sgfZWvH6dKpLLdBLDnvKR6Fa8+JMAG013UYX8ZJ+V9tirydwQE9+unHTZnvhteHFOfqjgIg26CxoNxVwAKZFpX15Sxo6M3BD3u1+lSABhCx/STxpX10dX84xsCcrJFxYtw/Wddz0KNd+vI8ZO8mwAsMA6vITiVaVrW5TGMz/cy2A9H/5kAw2GMMSs3e1UfFvfi4lQX5R/CApTRl48EGElDlcAhBh0WJJ6iuC3XZL4iy08E5FCA84sYboPyleDgyLKZ3MfpKwFGj7554qs/24UvLjjVGTLNoGVaHrmu+UhA8JIEB2B/YnRlQZVFUXqdbwKZHw9PThwIcAAOMFLoJIDToDVbJnEUxx4UhN6dgl57vsr0aNGIryZ0KFLmWZankatpuqVLAsdRt7rGqCja8316etMA9l+eF0XV7OPLTHYIAxT6uqabuqbIP9vf6a0ysio6esJgINjH68pl7DpeEENQLvrX+SEKw9BSPCi2kaW4ob8V6QsBtw+zUGXJmZ1cK0cZmYqm+2ldJUn5xxFFlmVpoFsBQr5uRnni//IXAh5OwcSeU0MguLseIRRlVYLiVmjrNDA1XdMc2N1VvJ3fCcrCX/OTOwE4ocySrCqRE7YjU6VhAICqXdfHfZugivYL8W7CqTqEKIirwtMekwuYAc1joMGkRVBn7vK7pUHuW65/JkCv6X1Gjm4+4FR4qAw2P9aNAMIQZ0VVV0h3ozTN0keAP7PIXjH3RMpOdWzJ1t2EujybDltHN03LsUz4u30tB45bY8Vf2yVybkMGFYHS0qDlNU9XIKRtaMpytBK5W6PQY9Um4rHlvBJAAUlDUwviFiJvM2doirhvBiiGQVqlnnOsuzZT4urxOacvnyz4ZfGHgoJTi60fxQ1Bl7+Pln5ojzN/RX89Aoeedu/qXSYADvojQequnwm+8D4zX0mtKPyDgHomaCjYqf2xBh0EzdH+jsDU46qFxF11vjX0J3anCXWsKx5qIdDHXFeX1Z90agDJqD0n0mbKdjRJQNCVB/XB8/xHBL6x7uhxiKERdZwLdd7UhQdUOdoPX43AWeivO3z43OAAqs43F6wpy9lHSP3ze9CLDdwS9irsVuv8Y99xnoGp8w0YG+qs670DI2eSYlq6IivwsxSFxQXiWNYsR5dlxXT0zXKxELjujh2jRkYYe5vxDgXbCTW4gh4urTDypPEmiH11RlED4k2jSgp2fHSnExXaKAbHrsDJ2R6F9mK2BoI1BTc6pTH8/CCszY4MY80N7qC4lW4uOWqyd/eTPt4lj/cHNMOwgmRq0mKylOXx3QVg82IMM3NekGRJYBh60H92AUYOp9+A8Q9Akn5kWf55BExIYwlujr+/R9PhcxAwguFnk7kgLERxOmrw/Yjz3FQUF4Iwn8x45pZG/wHoT/cGi/0BoAAAAABJRU5ErkJggg==",
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

export default e1080Data;

