// Stage 1230 Data
import type { StageData } from '../../app/stage/types';

export const e1230Data: StageData = {
  eventId: 1230,
  eventName: "バースデープレゼント!",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 230,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "7周年GWスペシャル!!",
      baseHp: 1000,
      width: 4500,
      enemyLimit: 6,
      requiredCost: 7,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "100",
          amount: "1",
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
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "055",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAwMGBgYHBwcICAgKCgoLCwsNDQ0SEhIlJSUlJSUpKSkrKyssLCwuLi4uLi4zMzM1NTU3Nzc4ODg8PDw8PDw+Pj5BQUFCQkJCQkJDQ0NJSUlJSUlOTk5RUVFVVVVXV1dZWVlaWlpbW1tdXV1iYmJmZmZra2tra2tsbGxvb29ycnJ3d3d8fHx+fn5/f3+CgoKFhYWPj4+RkZGSkpKTk5Onp6enp6eqqqq3t7e5ubm7u7vDw8PHx8fY2Nj///8I7FqGAAAAQHRSTlMAuHFQiBWg2P0j/rvmz0r+gzwJ/yadcs/h9v9Xqv9AB3HD/+qV/90MKjz+gRlU/wY06f8eC3RH/Sn73yD/SMEAqoP1NAAAAw5JREFUWIXtlGt3ojAQhrH1CsjFFIVIUIMRTS0qatXV3f7/f7UzwbbYurZn99se3sMhCTBP5ha0l3+UVgJKQAkoASWgBJSAEvAfArSNBjq+aH+txWIBlM3i2qsO6ktCMk/g2/nm04uWE4bbcDyMZrOH24TpQNMG8w2EkSSF51bFDFLd9PpRdBugdaZgN1ivF9psBsuH4eNMPa+1vMBsu1/GABsv5xjF+qgAQy5GHW2AQRimM4q+AdA2yylkcb5EwGDI2aTrOLWO6xlVqx8t95/zc8WHGYSRDPvT6TDmXI6NIAz9wPSMdhyvpt/wYTB7WiRJt+dEIyEA4OkoOzBGkpnD7Ta5ab3YJJuk/zgeTeRkFEsphZRccPAk22VZmq6y1c/jLUB/jOoFfHd612GXpZJxKtNUZqfTr+f9fr9+/gk6HvdKx+NxfQaEoeeNwwA2VoIxzbLd4YCQDHzITruUr0D47PCjoBww9P1er+czJcoopWrGuUAQSKaS6vCCMA4+xfHkVaMzoIeAXm7+LkgCz3YpI4SywKw7jnMH5XW67gOopdTB4j8/jX3fBNmQdvZOAQcEB/+pTSip39eu58/FrEPC4XvGiA7foggIR0QRvdmEq1Gp3luuG0HuLgBWgI7CVlg1nOEC5xjv+TElNojQIAhiuVptB0VAFIizXX5ThUBDtBU4xbkQEtoBryzjk+klgOUeXOpsJnJvijNpB9vi2XB9mm9OqShiRMEecYzgBArCmb5aFwAdq60I7C0QtRC5V8qenR1Eik1Z5kQXSag1mjrUmfE3zNv4unoFqwIF8dNlHS2zUddt3YbSUQBh/aDjbBwYLnkqwRRCJByPp2G5H36zbrdVM8CMMZUkrLyQzIbdsT0ohfTDyczgfAioZvv637HV1nXsPsgGZQJiZhy6X2IlcZQihSMJDhDfut6Omtu2Va8QSAfFC7wQ6gyA75xRATcIwHAHfwDUXMMmcBSa0LW2jb1LIA35ihA12Lbpta6Z3t9V6/VKpdGET9RfTA3KITUCSa10OA31evXuw6H6DULPwhYbiKAtAAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 100,
            ap: 8,
            dps: 3.69,
            speed: 4,
            range: 240,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 65,
            foreswing: 6,
            backswing: 25,
            tba: 30
          },
          stageStats: {
            actualHp: 100,
            actualAp: 8,
            actualDps: 3.69,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-33.3s",
            delayFrames: "200-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "489",
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
          }
        }]
    }
  ]
} as const;

export default e1230Data;

