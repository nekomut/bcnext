// Stage 1182 Data
import type { StageData } from '../../app/stage/types';

export const e1182Data: StageData = {
  eventId: 1182,
  eventName: "イベントオールスターズ スーパープレゼントDX",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 182,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "プレゼント贈呈！ 超激ムズ",
      baseHp: 540000,
      width: 3200,
      enemyLimit: 12,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "4",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "333",
          enemyName: "ダミー",
          icon: "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",
          traits: [],
          baseStats: {
            hp: 1200,
            ap: 15,
            dps: 3.44,
            speed: 0,
            range: 600,
            rangeType: "範囲",
            kbLevel: 1,
            money: 0,
            freq: 131,
            foreswing: 12,
            backswing: 22,
            tba: 60
          },
          stageStats: {
            actualHp: 540000,
            actualAp: 6750,
            actualDps: 1548.0,
            magnification: "45000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            }
          }
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
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 9000,
            actualDps: 7714.26,
            magnification: "600%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "337",
          enemyName: "金カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEDAgEGBgYHBgcIBwYKBwMICAcKCAUNCgQODQsODg0UEg8dFQMpIQYkIhssJhMsJhNDLwJEQjpWQBNKSTZySQNpTgZWUUB/WwNpW0RgX0poZVunXARzclGSdgR6dFaBdVS+aAN8fFmkhgiWil3eegK5lgbFogS7ozqlpHCnoImrqlbTrAarq3jkuAPSu1H2xgL/ywL60Cvk1Y/611P96Jjz86z5+bL/9Mr//pj9/LP//rP//ff///+gHidEAAAAQHRSTlMADRb/kzQh70PbtFdre//vlqvb/rX+MO3/0P//huL9G/7x//9O/v3/////sP0D/2f//f////7//8s//wdwHv8A5qEsqgAABEBJREFUWIXtVmtzokgU9YVBBASx16YZtMWFNAzLdCOPjc4k//9fzeWRUTSyVuXbVk5Vkq4k5/Q9h8u9Dt4+icGXwJfAl8D/RuAO3k73/vIgTqe72g/h7devz5VwenmZfoL9dvr187shb6+K2P7zGB/oLz//zWP379OFwlDSvm0fy6URKEux+ussMFLtQPx4NJfTafs9P+aBMfpzv+aKzJ9vHxQYDKZ2fixyd15xRwDZzgtuyw/zG4FCrGRZM0yA4oiQLg1NHv039yxwKOLlkkZCiIgShLw4jl1DGg6Hd0gjSVY1dS7LkiSpS1YWh0MWIF4eAWXKsBNlWRGsDKijkriWGcqmvdt53s51bdvdedhPeHpIQ54BiiJLE0zgFyCJ0FJTVXWiXbbaaarZcV60yIvsEFJC+aFG2nznCRwSJ4g9J9gtULAzLgLZfnOBXlblllnWEnjLTNOzju/lQgQB8/I8d89P5fRD5EV5fH19rQQOHaQ+8tNGEX6EgUCYhYlghO3m59BXDf9YFld04GGdpLUQpmllxBpbYUp1na7lqdTmMHezAq6vgr9FSJOabyEcVgdGLJpYFvFNaaJMmgdoRBncf118BxzpBAR4wliSMO6H4Xo+nWhKW0AKBRw/vP/dCAhgynxs6TpK6oKeJrI8mVV8yY6y8vW1j18x9AaNk5Qi/Wk2m03qBIMEHBx7DEB4jFFkWdgPOU94Ai7oQlEUFUIcqjuPgUDZd39CMEIYE0IpxQCECZpMh6PGgCCs6HfACXneeBHz4Yv5EZQgUqa1PaAGgoRFr4ODj5+fN0Ge8folz/MsiuOd2r6DZsRJUvQ+Q042z8977DjY8TzHcVzbNAy17SF5SdZWWBz7IgitzZ6QfYXNBm/W2nR0HgoSjAAlhBe2z4Fu4bEOVQA2ZG9er4yRGRZ9DlI8ttB4jGoBstlo17MEYij62jDUxwgErFoA79fzwbXAStwRaMqicLsFAnvg78l+dbP0QCDrEQAHNVqBjXEzVEemONzOgT+AAVCjzmBP1uo1fzA0ovsB1BFUaJ4CCNxEAHsr7mtD1ghAL1R9gNfqdDS6cqEGfQK0vt8JPGhD6EPPtVcro7vl5ru+NgIBCyORZQImphDHElZV0E1SdvsEmI72e+T51AsC3/ejGN5IanYEYBP2CMA4Rg7skwZBbcNZdjzAc+wLAUa5KC4BS6XrAR5D7QFWUNojdInE7Cz6NsWk3gAXV98rCV7QboqSnVceOEY+v2Rznh3andb15HczgF5sPITYwgzWegMeEq9KN4VF7TNYiEnIAL5PbXN+1UrvncCZpSxg+FbA1nK2qCpLOUPKDFXTmBBnOdHm0s0nnWnjAf55rZpx5FfAiiyZbbpEVdcckGax+eHHpKERRGEFhrTJrjkSBVaXE9AKC01d1gfqTD4SGMKSWy5qwL56ak/V6npq8X6azRS1M1B+A1hMRR0m2KxFAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 638.3,
            speed: 6,
            range: 210,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 6000,
            actualDps: 3829.8,
            magnification: "600%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "389",
          enemyName: "合格野郎",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 30000,
            ap: 1000,
            dps: 937.5,
            speed: 10,
            range: 330,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 32,
            foreswing: 24,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 5000,
            actualDps: 4687.5,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 9000,
            actualDps: 7714.26,
            magnification: "600%",
            count: "2",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
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
          enemyId: "337",
          enemyName: "金カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEDAgEGBgYHBgcIBwYKBwMICAcKCAUNCgQODQsODg0UEg8dFQMpIQYkIhssJhMsJhNDLwJEQjpWQBNKSTZySQNpTgZWUUB/WwNpW0RgX0poZVunXARzclGSdgR6dFaBdVS+aAN8fFmkhgiWil3eegK5lgbFogS7ozqlpHCnoImrqlbTrAarq3jkuAPSu1H2xgL/ywL60Cvk1Y/611P96Jjz86z5+bL/9Mr//pj9/LP//rP//ff///+gHidEAAAAQHRSTlMADRb/kzQh70PbtFdre//vlqvb/rX+MO3/0P//huL9G/7x//9O/v3/////sP0D/2f//f////7//8s//wdwHv8A5qEsqgAABEBJREFUWIXtVmtzokgU9YVBBASx16YZtMWFNAzLdCOPjc4k//9fzeWRUTSyVuXbVk5Vkq4k5/Q9h8u9Dt4+icGXwJfAl8D/RuAO3k73/vIgTqe72g/h7devz5VwenmZfoL9dvr187shb6+K2P7zGB/oLz//zWP379OFwlDSvm0fy6URKEux+ussMFLtQPx4NJfTafs9P+aBMfpzv+aKzJ9vHxQYDKZ2fixyd15xRwDZzgtuyw/zG4FCrGRZM0yA4oiQLg1NHv039yxwKOLlkkZCiIgShLw4jl1DGg6Hd0gjSVY1dS7LkiSpS1YWh0MWIF4eAWXKsBNlWRGsDKijkriWGcqmvdt53s51bdvdedhPeHpIQ54BiiJLE0zgFyCJ0FJTVXWiXbbaaarZcV60yIvsEFJC+aFG2nznCRwSJ4g9J9gtULAzLgLZfnOBXlblllnWEnjLTNOzju/lQgQB8/I8d89P5fRD5EV5fH19rQQOHaQ+8tNGEX6EgUCYhYlghO3m59BXDf9YFld04GGdpLUQpmllxBpbYUp1na7lqdTmMHezAq6vgr9FSJOabyEcVgdGLJpYFvFNaaJMmgdoRBncf118BxzpBAR4wliSMO6H4Xo+nWhKW0AKBRw/vP/dCAhgynxs6TpK6oKeJrI8mVV8yY6y8vW1j18x9AaNk5Qi/Wk2m03qBIMEHBx7DEB4jFFkWdgPOU94Ai7oQlEUFUIcqjuPgUDZd39CMEIYE0IpxQCECZpMh6PGgCCs6HfACXneeBHz4Yv5EZQgUqa1PaAGgoRFr4ODj5+fN0Ge8folz/MsiuOd2r6DZsRJUvQ+Q042z8977DjY8TzHcVzbNAy17SF5SdZWWBz7IgitzZ6QfYXNBm/W2nR0HgoSjAAlhBe2z4Fu4bEOVQA2ZG9er4yRGRZ9DlI8ttB4jGoBstlo17MEYij62jDUxwgErFoA79fzwbXAStwRaMqicLsFAnvg78l+dbP0QCDrEQAHNVqBjXEzVEemONzOgT+AAVCjzmBP1uo1fzA0ovsB1BFUaJ4CCNxEAHsr7mtD1ghAL1R9gNfqdDS6cqEGfQK0vt8JPGhD6EPPtVcro7vl5ru+NgIBCyORZQImphDHElZV0E1SdvsEmI72e+T51AsC3/ejGN5IanYEYBP2CMA4Rg7skwZBbcNZdjzAc+wLAUa5KC4BS6XrAR5D7QFWUNojdInE7Cz6NsWk3gAXV98rCV7QboqSnVceOEY+v2Rznh3andb15HczgF5sPITYwgzWegMeEq9KN4VF7TNYiEnIAL5PbXN+1UrvncCZpSxg+FbA1nK2qCpLOUPKDFXTmBBnOdHm0s0nnWnjAf55rZpx5FfAiiyZbbpEVdcckGax+eHHpKERRGEFhrTJrjkSBVaXE9AKC01d1gfqTD4SGMKSWy5qwL56ak/V6npq8X6azRS1M1B+A1hMRR0m2KxFAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 638.3,
            speed: 6,
            range: 210,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 6000,
            actualDps: 3829.8,
            magnification: "600%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "356",
          enemyName: "ガリゴリくん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 36000,
            ap: 1500,
            dps: 2812.5,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 216000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "50%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "389",
          enemyName: "合格野郎",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 30000,
            ap: 1000,
            dps: 937.5,
            speed: 10,
            range: 330,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 32,
            foreswing: 24,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 5000,
            actualDps: 4687.5,
            magnification: "500%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "50%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 9000,
            actualDps: 7714.26,
            magnification: "600%",
            count: "3",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "50%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        }]
    }
  ]
} as const;

export default e1182Data;

