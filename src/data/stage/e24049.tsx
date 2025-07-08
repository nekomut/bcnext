// Stage 24049 Data
import type { StageData } from '../../app/stage/types';

export const e24049Data: StageData = {
  eventId: 24049,
  eventName: "月イベントオールスターズ スター大集合大感謝祭！",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 49,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "大感謝XP祭 Lv.1",
      baseHp: 40000,
      width: 4400,
      enemyLimit: 30,
      requiredCost: 60,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "12.0-16.7s",
            delayFrames: "360-500f",
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 17.65,
            magnification: "100%",
            count: "0",
            spawnTime: "16.0s",
            spawnTimeFrames: "480f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
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
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAQECAQEDAgIDAwIFBAMGBQQGBQQIBQQKCAULCAUMCQUOCwUODAgZFQwnHQMnIQ4yLRw1NCRCMgw+NRhDNw86OShYQAVMRCxSTi5PTElnUgNlWzp1XwOoXAJybF2OcAd/flahgAeEgGvbeAK4kQOtlT6alojNowO4qWHdsga3s6O+voTuwgHZwFr/ywPMx6nuzDT+0Bb61kXY15rX08ft3p7+4Gz567Hy8av8+7L+/LT//qv99+D//rV2elb3AAAAQHRSTlMAGQsuTz7rY3b4nYHTjqu93vvPE//f8WH//57p+/////z+Hv/+/////f////7N/////v///3H/////0SmKCf5V3eR0qwAABRRJREFUWIWdl2uXokgMhoebIFehCxZGoGFhkaLcUoSxYWaH/f//agNqaytg977HD3gOeSqVpJLi27dpsQwn8KIocjPvzBgLoqIb1nq9tiX2f1hLurWO8m15PB5T7eWL5pwoW+u02NUNqO223//8/RV7RtTtaLM7VNUeVDVdqjFfWV6Q7bg4DMaDmi7/CoARjRDT/Y0AIH8e8KLYCdnv7wD6pwGsaCd0fw/YGp8HSA6+s9/X3db6fCVxenzvQd0dbf7TAJa3sjvAoW3X4lCKUNnPS5JRnA9BpDjO21Rje3NRlj+xF86I6bUISOwir8wNgRNEeeWtNOFpPCER+B2AQzfZeFG0sCx15WeF51jKUwKjJ5c6xL6P92WAojSPUEiqXZCmq6cBffkj3Q0AmvkhodVbGhS7jReSfVV68eZJRn6Dfvy9g3NEshDB+vu6zd0sc30IbX0MwmC2rMH6169///n5Vh82YYBQdqoj5Lru8HgMHEOYX3+w79qySPMiCAlod9yi5dLF8HgoPYOfrYTfgws/fpZgvglM5HuDzOXSBCdceFKlp7XECt+LXbEJkRelj4rWhjifR5Y34t0uQSjGh/qjmre2646pJc75wIhWQkiC3Oz+TIGqGhpkm1ozcYQyzAhOIGlVVT0S+qR2x7Uy7YIA64N9SJq2HrMfCOl0KbCig3HmurjpumYc8KTDCYYf+yipu+6DB5TQ6+NxDsDymr7wCUS7vg0B9i+dkiZ+PttjWYZfJVXTNh9CCF0hJid70ww8Y66tQFsldVPfpYD2ge1dQSZ0h/VcY2L08NDeRZDSvrOdAMH2rS3nEgkdrb5LQRb2xkMQsFdAgrp8fBNs3+8ENWk+hpC4SzO+sLwCCqEtxotR0KHKhVUGb9yGYACckwAeVHAqNqOThtEWMIX51eYuBH1nu4wrGgbF4VCMx4CzAtjaI2AI4jsMTWeBd/I1zw6AsXNAKSEYytQ0l6omjrUVyd9FGnMFUHpdeV+RJA4Cz0u329wz17Yx0pu1sM4tYQBUp+yFcYJP/lfNWwmKPOgyZRCUx1QfAcR1uZYAcE4CjsMQopcNx6AaehJ2/TgOvKyf+GMAmCG6+A4Ydk1peDPvKU5i8IpWbWmPbYE2pS2/AyjJ4hATPxmJaDMGkPx+jC3MCyDzwWFC/YcbRw8Y2wLvkKopPXPTngAkw/0RiFGYZPgsclYRyY8AAe4m4AK6AM6CCY9A7lXIsW195DAwckj3deFdAadQ4CxG7utV/koSBGakkOB6lNBq42bNpZKr+hxM9PrXVf5kQ2JFK8YJyi5nuWrOnQm7twB3uqszvG476P2WBoPohPoIcLTpdgQtVTdvrnlnVzIAvL7eAthJBpzG+3viAHiFPLxeAByvTF8TRgAUZi1CeeqdkmkasuXIXwFg3+0vi29bz3Q9AJjRNp2eLcKIB1B6sQvTovCQB7/02ObT93fOGjs8+8QlFG8CD25OQVHsZqYbI/uYPipBmPb3PnqIkJ/s0ukYwBXHcf0HIcguhY1k0FMwPaRztcCrbuibph+ahgLS4G9oqmpMSQLRdFZORg7R3KcoDDcSr1ZJZossiIFPkGwlSjZQw8zRRcXyY1ucdoDldHhP1h3fEAfpIfFVSVEXxioGEsMIijF5nhheVGTVRIvFYrlcLgYtUWjCY/8PIVXXFFHkhakdcJImGyq8vBzXQlUNWZMm7YfPIo4XJUWTQfqN+v+aIok8x901k/8AwpNE+yajjWkAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 300,
            actualDps: 243.24,
            magnification: "100%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAQECAQEDAgIDAwIFBAMGBQQGBQQIBQQKCAULCAUMCQUOCwUODAgZFQwnHQMnIQ4yLRw1NCRCMgw+NRhDNw86OShYQAVMRCxSTi5PTElnUgNlWzp1XwOoXAJybF2OcAd/flahgAeEgGvbeAK4kQOtlT6alojNowO4qWHdsga3s6O+voTuwgHZwFr/ywPMx6nuzDT+0Bb61kXY15rX08ft3p7+4Gz567Hy8av8+7L+/LT//qv99+D//rV2elb3AAAAQHRSTlMAGQsuTz7rY3b4nYHTjqu93vvPE//f8WH//57p+/////z+Hv/+/////f////7N/////v///3H/////0SmKCf5V3eR0qwAABRRJREFUWIWdl2uXokgMhoebIFehCxZGoGFhkaLcUoSxYWaH/f//agNqaytg977HD3gOeSqVpJLi27dpsQwn8KIocjPvzBgLoqIb1nq9tiX2f1hLurWO8m15PB5T7eWL5pwoW+u02NUNqO223//8/RV7RtTtaLM7VNUeVDVdqjFfWV6Q7bg4DMaDmi7/CoARjRDT/Y0AIH8e8KLYCdnv7wD6pwGsaCd0fw/YGp8HSA6+s9/X3db6fCVxenzvQd0dbf7TAJa3sjvAoW3X4lCKUNnPS5JRnA9BpDjO21Rje3NRlj+xF86I6bUISOwir8wNgRNEeeWtNOFpPCER+B2AQzfZeFG0sCx15WeF51jKUwKjJ5c6xL6P92WAojSPUEiqXZCmq6cBffkj3Q0AmvkhodVbGhS7jReSfVV68eZJRn6Dfvy9g3NEshDB+vu6zd0sc30IbX0MwmC2rMH6169///n5Vh82YYBQdqoj5Lru8HgMHEOYX3+w79qySPMiCAlod9yi5dLF8HgoPYOfrYTfgws/fpZgvglM5HuDzOXSBCdceFKlp7XECt+LXbEJkRelj4rWhjifR5Y34t0uQSjGh/qjmre2646pJc75wIhWQkiC3Oz+TIGqGhpkm1ozcYQyzAhOIGlVVT0S+qR2x7Uy7YIA64N9SJq2HrMfCOl0KbCig3HmurjpumYc8KTDCYYf+yipu+6DB5TQ6+NxDsDymr7wCUS7vg0B9i+dkiZ+PttjWYZfJVXTNh9CCF0hJid70ww8Y66tQFsldVPfpYD2ge1dQSZ0h/VcY2L08NDeRZDSvrOdAMH2rS3nEgkdrb5LQRb2xkMQsFdAgrp8fBNs3+8ENWk+hpC4SzO+sLwCCqEtxotR0KHKhVUGb9yGYACckwAeVHAqNqOThtEWMIX51eYuBH1nu4wrGgbF4VCMx4CzAtjaI2AI4jsMTWeBd/I1zw6AsXNAKSEYytQ0l6omjrUVyd9FGnMFUHpdeV+RJA4Cz0u329wz17Yx0pu1sM4tYQBUp+yFcYJP/lfNWwmKPOgyZRCUx1QfAcR1uZYAcE4CjsMQopcNx6AaehJ2/TgOvKyf+GMAmCG6+A4Ydk1peDPvKU5i8IpWbWmPbYE2pS2/AyjJ4hATPxmJaDMGkPx+jC3MCyDzwWFC/YcbRw8Y2wLvkKopPXPTngAkw/0RiFGYZPgsclYRyY8AAe4m4AK6AM6CCY9A7lXIsW195DAwckj3deFdAadQ4CxG7utV/koSBGakkOB6lNBq42bNpZKr+hxM9PrXVf5kQ2JFK8YJyi5nuWrOnQm7twB3uqszvG476P2WBoPohPoIcLTpdgQtVTdvrnlnVzIAvL7eAthJBpzG+3viAHiFPLxeAByvTF8TRgAUZi1CeeqdkmkasuXIXwFg3+0vi29bz3Q9AJjRNp2eLcKIB1B6sQvTovCQB7/02ObT93fOGjs8+8QlFG8CD25OQVHsZqYbI/uYPipBmPb3PnqIkJ/s0ukYwBXHcf0HIcguhY1k0FMwPaRztcCrbuibph+ahgLS4G9oqmpMSQLRdFZORg7R3KcoDDcSr1ZJZossiIFPkGwlSjZQw8zRRcXyY1ucdoDldHhP1h3fEAfpIfFVSVEXxioGEsMIijF5nhheVGTVRIvFYrlcLgYtUWjCY/8PIVXXFFHkhakdcJImGyq8vBzXQlUNWZMm7YfPIo4XJUWTQfqN+v+aIok8x901k/8AwpNE+yajjWkAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 300,
            actualDps: 243.24,
            magnification: "100%",
            count: "2",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "197",
          enemyName: "わんぷきん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 540,
            ap: 24,
            dps: 13.33,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 90,
            freq: 54,
            foreswing: 15,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 540,
            actualAp: 24,
            actualDps: 13.33,
            magnification: "100%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "5.0-15.0s",
            delayFrames: "150-450f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEJGSYOJzsIM1cJNFgLNloLNloNOFwQOVwWP2EXP2EcQ2UiSWoiSWomTGonTW0sUXA5W3Y5XHg6XXlAYn1ObYdPb4lQb4hYcYVdepFogphrhJpyip9/lKaCmKqHnK2NoLGUp7adrruhsb+isb+oucevvcizxta5xM7BzNW+ztzI1+PS2N3T3ujc4ebe5u7l6/Hp7O7t8vb29/f5+vv9/f3+/v7////////////t8zxSAAAAQHRSTlNCY3+c0fQAAAABJRI/WwAAaUl2wACTNQCLs2K1lNIBtc9H6wLImfMy980C/XD8AC3/+gL/hf//AP8A/5k7ABf/YSCGvAAABNhJREFUWIXtlm13sjgQhum+tIZAFIoKypuAFEUsSEGkYP7/v9oJ0Cq1rfV5vuzZs3NabUNyZTK5Zwau/k3j/gf8OwDHql4jMjyzbfPoMO0NfmHcwZ0uqt8B1DtlsNj0p94EONb7KdI9fD75JsBTVR/Mgb6aoF8EDCYv9cFFs0g/EW4CrNeblyNcgxSteDQkvwJYL5Oq3g4FP56hXwAQgiZ2/HqcIqxHTSTIbQD4JdhO6AIRInixN0E3AgiBacQq6AoOgGQvtCbo1iPAF5oltFxJgJCsYPl8C2C7dQkC4z1KC0/GCOHZsqoYQPmZlOt6bbru2kVqQmnuqwJCZAf6XE+7Kd9jTukMF+kVlJaRNeKHU1NpYiOM5JHwLaEBuMpUWVR7E8lhSSnNgrksYLgVrEVZngaGcA1gwmQ0ezlup7zaIGge+bauajl4BD+OeB0AFyGtoLIovBoUtCwYpozY6iyjxePXp2gqUgMYEt56qQ6uwsteUhRZlhdplOZ5ElNq4G89qDZdLkMMXo+HtYIk1YvzIs/SOEnhGKF85QhVordpRHg7fz3u4Q8iyHMvjFNgBMboWhC3k7gtKAqIOaCvLCtB4gTzkihK/DfL3wAIrzIdwxJ3u11YCeQFRtcU1APAZlYewcbT3W7xNPNKGusSc+PnAPA9LDwJKSaaLFTVBzmtdAmzo1wu6saarw4A/yDeyjJLgLJGZpZhBKCB1NdGPLqAEAwKB4nzJ8BQUUD9aOSXiQ7DBKuO4wRwgcAwxmIDGZKOI2gO00ca+8YIt4DDfn+o652JMMgwnjMvABGEUcqkmMPMMeyHWoLol6DvIofEo4kh9JrrWiH8uEVAWGUnyprEAANR+vZclUei+MhEXrQKpeXjGQCqiAl787KfxrbM4idqftIhyrJdl8Zh0o7kEYyVxrkH1euiiRiS9CAO5hILrKg5YdYuzlh6gEVhFCdJzNCFI/aO8LxatnWdYEn3fUeX3LWCBVmz/SgtWhcAk6YZZCuLjSYMe4C96aXLrj/B7pPFS3XcT5moeWE01izbD4IQLPAdx9Dgdsh5SasPa/fZ1UELoMHmwpDZFos39SBIDl5gxvPv3fwEOIIc8OZ55tPMbiUIwt4fdqfiTs4+T1J23+0ZjoBnmydIpqY4M/Eo09NUwovj8UWJZZ2pNTSBLu0iydvorDrH9ljAjQC7mfzYiSGAgdZPb+5sBymBijbE6sqzmYzzyNFGACFN2vBG1gnC6L3NcOc0KXx9UmCveRAGEcuEMg1ZuEeiIDzmcIlpwnzrFageAN4RiqXC+sk8aO693TJLojD0GZBmIQN86QHEaZ6lOlQjIsCJ31TcfjYZGIGOnV6f4Qb9oEJNZCnN8hFUHDVuQAakaRKDgll2BuN+EO8/EAivxTSxpKa1iWOjE3HnTHpRorn7jwRIwnlY5qygsY6HBVFW55YNZs1BBh9bDAAuCG0EijzyZhNssveHVijos/rIAJcElo7QWOA2vc2x3n3zqoIawIlwPpMlD8buW/P91Ab3LeD+obUB+ZAsBLlnCfm+bTf9AVZ2gJMNSM+RFtCDDnrzLwDMncFpAQHATnkYdNZsehXQHapdorjmxaIfAX5q/z0Ax93d3f3B7M9LY8PwmOO4LwEcrPuL2d+fG3sEoLuzJf8A+oG/j4JK714AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 100,
            actualDps: 230.77,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-4.7s",
            delayFrames: "100-140f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 100,
            actualDps: 230.77,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.7-10.0s",
            delayFrames: "260-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
            },
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 100,
            actualDps: 230.77,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.7-20.7s",
            delayFrames: "620-620f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
            },
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 150,
            actualDps: 346.15,
            magnification: "100%",
            count: "5",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "5.3-8.0s",
            delayFrames: "160-240f",
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
            },
            "immune-surge": {
                enabled: true
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
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
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
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
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
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 200,
            actualDps: 193.55,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "大感謝XP祭 Lv.2",
      baseHp: 100000,
      width: 4400,
      enemyLimit: 30,
      requiredCost: 70,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "750000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 1000,
            actualAp: 100,
            actualDps: 35.3,
            magnification: "200%",
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "12.0-16.7s",
            delayFrames: "360-500f",
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
            actualHp: 1000,
            actualAp: 100,
            actualDps: 35.3,
            magnification: "200%",
            count: "0",
            spawnTime: "16.0s",
            spawnTimeFrames: "480f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
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
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 600,
            actualDps: 486.48,
            magnification: "200%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAQECAQEDAgIDAwIFBAMGBQQGBQQIBQQKCAULCAUMCQUOCwUODAgZFQwnHQMnIQ4yLRw1NCRCMgw+NRhDNw86OShYQAVMRCxSTi5PTElnUgNlWzp1XwOoXAJybF2OcAd/flahgAeEgGvbeAK4kQOtlT6alojNowO4qWHdsga3s6O+voTuwgHZwFr/ywPMx6nuzDT+0Bb61kXY15rX08ft3p7+4Gz567Hy8av8+7L+/LT//qv99+D//rV2elb3AAAAQHRSTlMAGQsuTz7rY3b4nYHTjqu93vvPE//f8WH//57p+/////z+Hv/+/////f////7N/////v///3H/////0SmKCf5V3eR0qwAABRRJREFUWIWdl2uXokgMhoebIFehCxZGoGFhkaLcUoSxYWaH/f//agNqaytg977HD3gOeSqVpJLi27dpsQwn8KIocjPvzBgLoqIb1nq9tiX2f1hLurWO8m15PB5T7eWL5pwoW+u02NUNqO223//8/RV7RtTtaLM7VNUeVDVdqjFfWV6Q7bg4DMaDmi7/CoARjRDT/Y0AIH8e8KLYCdnv7wD6pwGsaCd0fw/YGp8HSA6+s9/X3db6fCVxenzvQd0dbf7TAJa3sjvAoW3X4lCKUNnPS5JRnA9BpDjO21Rje3NRlj+xF86I6bUISOwir8wNgRNEeeWtNOFpPCER+B2AQzfZeFG0sCx15WeF51jKUwKjJ5c6xL6P92WAojSPUEiqXZCmq6cBffkj3Q0AmvkhodVbGhS7jReSfVV68eZJRn6Dfvy9g3NEshDB+vu6zd0sc30IbX0MwmC2rMH6169///n5Vh82YYBQdqoj5Lru8HgMHEOYX3+w79qySPMiCAlod9yi5dLF8HgoPYOfrYTfgws/fpZgvglM5HuDzOXSBCdceFKlp7XECt+LXbEJkRelj4rWhjifR5Y34t0uQSjGh/qjmre2646pJc75wIhWQkiC3Oz+TIGqGhpkm1ozcYQyzAhOIGlVVT0S+qR2x7Uy7YIA64N9SJq2HrMfCOl0KbCig3HmurjpumYc8KTDCYYf+yipu+6DB5TQ6+NxDsDymr7wCUS7vg0B9i+dkiZ+PttjWYZfJVXTNh9CCF0hJid70ww8Y66tQFsldVPfpYD2ge1dQSZ0h/VcY2L08NDeRZDSvrOdAMH2rS3nEgkdrb5LQRb2xkMQsFdAgrp8fBNs3+8ENWk+hpC4SzO+sLwCCqEtxotR0KHKhVUGb9yGYACckwAeVHAqNqOThtEWMIX51eYuBH1nu4wrGgbF4VCMx4CzAtjaI2AI4jsMTWeBd/I1zw6AsXNAKSEYytQ0l6omjrUVyd9FGnMFUHpdeV+RJA4Cz0u329wz17Yx0pu1sM4tYQBUp+yFcYJP/lfNWwmKPOgyZRCUx1QfAcR1uZYAcE4CjsMQopcNx6AaehJ2/TgOvKyf+GMAmCG6+A4Ydk1peDPvKU5i8IpWbWmPbYE2pS2/AyjJ4hATPxmJaDMGkPx+jC3MCyDzwWFC/YcbRw8Y2wLvkKopPXPTngAkw/0RiFGYZPgsclYRyY8AAe4m4AK6AM6CCY9A7lXIsW195DAwckj3deFdAadQ4CxG7utV/koSBGakkOB6lNBq42bNpZKr+hxM9PrXVf5kQ2JFK8YJyi5nuWrOnQm7twB3uqszvG476P2WBoPohPoIcLTpdgQtVTdvrnlnVzIAvL7eAthJBpzG+3viAHiFPLxeAByvTF8TRgAUZi1CeeqdkmkasuXIXwFg3+0vi29bz3Q9AJjRNp2eLcKIB1B6sQvTovCQB7/02ObT93fOGjs8+8QlFG8CD25OQVHsZqYbI/uYPipBmPb3PnqIkJ/s0ukYwBXHcf0HIcguhY1k0FMwPaRztcCrbuibph+ahgLS4G9oqmpMSQLRdFZORg7R3KcoDDcSr1ZJZossiIFPkGwlSjZQw8zRRcXyY1ucdoDldHhP1h3fEAfpIfFVSVEXxioGEsMIijF5nhheVGTVRIvFYrlcLgYtUWjCY/8PIVXXFFHkhakdcJImGyq8vBzXQlUNWZMm7YfPIo4XJUWTQfqN+v+aIok8x901k/8AwpNE+yajjWkAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 600,
            actualDps: 486.48,
            magnification: "200%",
            count: "2",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "197",
          enemyName: "わんぷきん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 540,
            ap: 24,
            dps: 13.33,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 90,
            freq: 54,
            foreswing: 15,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 1080,
            actualAp: 48,
            actualDps: 26.66,
            magnification: "200%",
            count: "5",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "5.0-15.0s",
            delayFrames: "150-450f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "580",
          enemyName: "風（白）",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 1,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 300,
            actualDps: 692.31,
            magnification: "300%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-4.7s",
            delayFrames: "100-140f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 300,
            actualDps: 692.31,
            magnification: "300%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.7-10.0s",
            delayFrames: "260-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
            },
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "581",
          enemyName: "風（赤）",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 5000,
            ap: 100,
            dps: 230.77,
            speed: 8,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 300,
            actualDps: 692.31,
            magnification: "300%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.7-20.7s",
            delayFrames: "620-620f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 30,
                duration_f: 50,
                duration_s: 1.67
            },
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
            },
            "immune-surge": {
                enabled: true
            }
          }
        },
        {
          enemyId: "582",
          enemyName: "風（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJiYnJycnJycrKyssLCwtLS0wMDAxMTExMTEyMjI5OTk5OTk6OjpAQEBAQEBAQEBAQEBAQEBBQUFCQkJFRUVFRUVHR0dKSkpKSkpKSkpNTU1OTk5QUFBSUlJSUlJVVVVVVVVWVlZWVlZWVlZZWVleXl5eXl5fX19iYmJjY2NjY2NjY2NmZmZmZmZnZ2dnZ2dnZ2dubm54eHiAgICLi4ubm5u0tLTNzc0Arak3AAAAQHRSTlMxXnmYtdTu//8GI6H+SnjX/vXn/rsUiJzR3jjvaP6qU77dzno/kaW3/xdZeYk1m8h8SGP/JTQADBb//wD/////AIEPGwAAA/pJREFUWIXtl4tyqkgQhj0n2d2JQR0YVFCBAeWiCALCgK7G93+r0w2JuRiTaLZqt7ZOpyoZjXz05f+bpPX3N6P1G/BfAAjR7ohvBABE5zsEBIhut389oH0H3wfq1YRWu1MTNOtagBh1kTBVBuWVANG5b8NhoWuzKwF3AxXHEHFlUF0FEH1TxyQqd6xbF9dRj7FvKr0O3D3lY/XSOmqAmA9l0ptUoswuRrQef05kQtUFIBamrtaTvRAgZppEZDXMIZ1Jt9P+MuIIECWUQSTNTaGPd3cXA/CKhUaJJCn+sniaRZktl0n64WSOGYxGd6Kc6hKBL527WQ6X5b4iUVnxsy+VYA1AC7kHCGBQReOmu5KJRCkhqw8IrSZ7jJmJrohcKIQFBnDI3iCErrdEXp2vAgFPU6vMHmo6D7nOjM12E2weduv1bg8pnNc4ltC+Hz2+miq1scrU5fo4CDbb/W4bEGInn/Sg3XuyUcRpjRBltHBNrimKojtfaGK713sUcOmOpftRU3JZ5VGapvkHlx+nMFfpMGqOM86I2p1/eNUpABrIlCnW0R/NpjYlvcHia8vhWQehTrUF5j6bTLmNxgA1XQIQhc/AkHCYW57vAILI3EvSdxIpsmS5DLOieg0QInEo5ZhFCTnYY3AGkTU/bj55jCzmPVkCjet+nL8GiGppU8ZDQFShbxuMoR4lxeHeEijNbDIH3qTBeg2/kVfZC8AcBZkjwgnhllXm6xR9gSExMAf33GWSrPClYRjbB3TN6gUgsmpJV6HDmO5FKMjY12T8vMQMRvEgy8p2R2vm+gQgLLV5yuJaYwbHqeZZ7HMFs2DBGuyxXgfBw+HwsN/vkfO6BNgJuvroisoaarbtWeDUqshiD+xFqUSZAbVDBJCQrEATizdNREHOnqw7H3WOuxEoS487dhOO4/t+3Ez4FaDfL00mm2c1COYo6sir44J4BlRws741mo4l2QyLM4jTeAbMp/g3wmQwcRihmveOjIskjuPsTXovSrA4dnDGhyZokCgcFPhyk6UrG/QH8kvPAYRl41IsXUerZQwKfCHjdNVICvZbcQ4gZnq9FCPfHjfCIXRsO9jwJIMNTYztHhacnpwFiMih9X5MfZtJjyqGVChTlF1Qy+/wMUBUPpOGuN2K2Bk3kiW0ToYd9uvN/rAhxDlfAkZoU3mIlgYzAQOzMGA973Z7EPAG0lq9XtEnANgrY4lqLm7IKl36jq4wwEgSWkfWnbdPqVMAdgDurPBphFMsi0Xoej7npum5SXaisPcAgPAgeyqrw8noswf9+wB8sIQe13Rd7bY/Afz7/y/8Bvz/AK0fP29ubm//gPizjr/qaM747u3tzc3PH61/EvAL71MG9Je6R3wAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 150,
            dps: 346.15,
            speed: 12,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 13,
            foreswing: 2,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 450,
            actualDps: 1038.45,
            magnification: "300%",
            count: "5",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "5.3-8.0s",
            delayFrames: "160-240f",
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
            },
            "immune-surge": {
                enabled: true
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
            actualHp: 1000,
            actualAp: 100,
            actualDps: 35.3,
            magnification: "200%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
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
            actualHp: 1000,
            actualAp: 100,
            actualDps: 35.3,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
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
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 800,
            actualDps: 774.2,
            magnification: "400%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "大感謝XP祭 Lv.3",
      baseHp: 160000,
      width: 4500,
      enemyLimit: 50,
      requiredCost: 80,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "281",
          enemyName: "文化祭のカンバン娘",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3600,
            ap: 80,
            dps: 45.28,
            speed: 6,
            range: 330,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 53,
            foreswing: 6,
            backswing: 8,
            tba: 24
          },
          stageStats: {
            actualHp: 14400,
            actualAp: 320,
            actualDps: 181.12,
            magnification: "400%",
            count: "3",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 56000,
            actualAp: 3996,
            actualDps: 6660.0,
            magnification: "400%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
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
            count: "18",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "4.0-5.3s",
            delayFrames: "120-160f",
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
          enemyId: "356",
          enemyName: "ガリゴリくん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUHBwcHBwcICAgICAgLCwsODg4ODg4ODg4ODg4YGBgZGRkaGhodHR0gICApKSkrKysyMjI6Ojo6Ojo7OztCQkJDQ0NISEhPT09RUVH+CQlVVVVYWFhiX19nZ2doaGjrMDFvb292dnZ+fn67Z2eGhoaOjo6ZlpahoaGqqqmysrK7u7vFxcXOzs7Y2Njh4eHq6urw8PD29vb8/Pz///8au9JGAAAAQHRSTlMABCW0Dhv1NOVBZJFUoHuqvXGFz/2W7N2x/sb//+j/0Rf//v/f//b//+/////////9//7/////////////////LmjTSwAABsdJREFUWIWNV+di4jgQPlg7BDAhQCjGRjlLHBJay3EvcuH93+pGhk0MJNnMD0ybT/NN1z///Ex6Wn9ojIzhQNd6P1Q5q2nnpz582rzu9/vX7WY21H5+5mg+Uudpw+XrMcyklHkSHrcz/Uf6w/lmfzws4Th9tHXjom6a0+nU1GW0m/d/QEObrcNchgDQn+/cMMmL+tRKU6eH5eAHCP2lV9YAoM93QZDKPJKni9TZcdn/AYfBNirFXJ/t4yAqqywoyndJ96MfmNAz9tnxabQIMsF8n1PhgQjqekIIPP2bCT0QfePi5wXinvDCOEmzLM+zgIgkfHsjj8b3JujGDGTr4hee5LKsIQRNAy+557K33//9Zi/jb7OhN9wco/CIGHFSKc+8q6qua+m7NFAA1vP3HDRjn5bp4cF0OHe9VvwgBOEEB2+/32J3MfjeB9r8GO43azcCiVuJojAMfOEyziljZG38JaMHz+un8bFoOlLXZSLcIM3TyCeryV9qQhvNjG3cZu+7yBBbNvLyus6YuXr+3oaebmyEbPMuUBJGYcQtGsa+Q6Oc2yI4LIxvAQZTIADHZ/hFiWm+mC8kr5sqth3PcmWdocl3AP2l0gcDAkSoEuKYL56EryQxsRmWTcmfvz5eG0xWYd3WXpKc80DmwvSLqjlJ9vJiRbIp3S8BtMFss7NYfm4AdXOp49jkeVHVBTVNMyxKSb8C0IznFXKQxfPm1JWC2kEmiwB5MaJpkezmX+iPFhZyHEBgWd0FaFJsUZfB8TKwMUOL4af6+mxtK32FQCLZNaLJPOJgSnGYuyain2ez/rS2nT9i227ShWgqmUFzEiKPeZrvR5/pz1cf+soImydlB6JKUqhJWcm8rsQnPtBG665+C4HcTF4iAQ0hKlVy5Gl1qqPpnX7PWNzoOwhZJmJ+ejajjjP1LCKvAJ9u7/SHzxf/dQBsh1CCHdHGtMqq1g6fp80puwPoT81bfUyg/l3huVRlhWprp6ZIAkaCsrkD0J5Wt/qOQ+B0jJnwGIfaqGuoTo4RQlhk8eZvDuziuB6DQ/O8TpmXJFEaU3q4joJy4L0BHwhc0LgKvYR5RZEmmUzQ+rofDLZ3DrgSKlyehwjxImc2Qn6OJ1dTWl+aXxNo3UmBRBGFeZO5QeL74euwO1u02cr61gDlBsEKNeNrWTVVcm1Ab7j9zgF/TKBR22QAIjlMr0a8vjx8bgDqfEsEZ6rNwYbAdpPrFcHYM+vzc62OZ5iLvULCWKDm5HpJ0ZYe+QrA/HhPhWPDUILcxvOrmdDTlzvLtNFnJOxOcDGn7Z+Yx5ddD2rD+esx8Jw7BKR80Ikupi70SqgPz912upE2evWzqq5SgW0IhUJBZ10En7HT4UYFVmdg4e06C4Y2P6hCOzVlFjDoH2exLQsR2M6ysBMe7DIVbcy9w+zDCT1j7WZVc4kvtsBHjAsviGGlybOIdzOUu8pAyIjD9MMJMMRgi8pK1baalIZZIWWRZ0kc+ZxAU7xygiBnDl0nzI5FmbhMDf4iZShI4sDjFDtAovVJNw6QS+jMoeOEJeRnDfw5gebBfdUFQRVRegnK2YTWr8BBOBcOH1sW+FBleF3mSQxNH5+LAhPXvSCYllJHZ/aCqt/Bks37ljXcHJJKhUHtInX8XlTEbf975mDT6MzeFZfHRzX3Bsudn1fnwVHy96hB2jgtguJg05i2mswjdpuMh6d3Dj19tNn5aQ5xqGN0HfWzE4AD+KUFgCxsOXhs08nmXn803mIWhAHutgXGrVYeoVvbpPU/sPdgVEAgxfpq2+3pgzH0JLuTNNhhRIWD7MYb4BAkbRkw8IyyhXvO+ObmAnPZQhhjpar0MW3zlrHt0Fgjm6hPEOlLdMBBd+NdH8FmQqDgiQLBhIKtmB62hgYjy7ZM6C2UB2kRKrscYt8BaMZ0pboCIa0BqhlhvNuA/tPCNGHtj9Ic+mnhCrX9J4fJDQVorEeBrPf1RDFF2/mgp493vmeTvFItuZFBKGHxqsLt8ObKAPu1rFKIPZSABYuYZVurpVqIh6+p9GlQtvWa+wHsr00Zvo5uN10ASGUNtyvfhb5HOWdkp66IcPUpYq8t+FOdur6asZn45PbYG4yhs4UpXC1KmXkebILpfv6vGnpRnKs0L7OQBxKKJtwtP9vV4YI7myx2flHXVZnSBICSV0PT9KddCJUeCIbMg+97xx0cf39l6un9wWBozCYrFioSFvc5w6tf4/F4+mhCjT88PD4uQJ6n45G6hN/q90eT58Xi8fHx4eHlQx5u5VHJYvFrfssBctkYzebjyWQy/fW1TOH38fhpZAwvo+l/BrugaRydgpoAAAAASUVORK5CYII=",
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
            actualHp: 36000,
            actualAp: 1500,
            actualDps: 2812.5,
            magnification: "100%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
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
            count: "16",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-7.3s",
            delayFrames: "200-220f",
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
            count: "5",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "2.7-4.0s",
            delayFrames: "80-120f",
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
            actualHp: 192000,
            actualAp: 7200,
            actualDps: 3540.98,
            magnification: "200%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "99%",
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
            actualHp: 120000,
            actualAp: 2497,
            actualDps: 3256.96,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
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
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 315000,
            actualAp: 7200,
            actualDps: 7200.0,
            magnification: "150%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
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
    },
    {
      stageId: 3,
      stageName: "大感謝XP祭 Lv.4",
      baseHp: 240000,
      width: 4500,
      enemyLimit: 50,
      requiredCost: 90,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "281",
          enemyName: "文化祭のカンバン娘",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3600,
            ap: 80,
            dps: 45.28,
            speed: 6,
            range: 330,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 53,
            foreswing: 6,
            backswing: 8,
            tba: 24
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 400,
            actualDps: 226.4,
            magnification: "500%",
            count: "3",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 4995,
            actualDps: 8325.0,
            magnification: "500%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
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
            count: "18",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "4.0-5.3s",
            delayFrames: "120-160f",
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
            actualHp: 108000,
            actualAp: 4500,
            actualDps: 8437.5,
            magnification: "300%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
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
            count: "16",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-7.3s",
            delayFrames: "200-220f",
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
            actualHp: 4000,
            actualAp: 400,
            actualDps: 141.2,
            magnification: "800%",
            count: "5",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "2.7-4.0s",
            delayFrames: "80-120f",
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
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "99%",
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
            actualHp: 240000,
            actualAp: 4994,
            actualDps: 6513.92,
            magnification: "200%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
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
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9600,
            actualDps: 9600.0,
            magnification: "200%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.4-0.4s",
            delayFrames: "12-12f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
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
    },
    {
      stageId: 4,
      stageName: "大感謝XP祭 Lv.5",
      baseHp: 270000,
      width: 5000,
      enemyLimit: 30,
      requiredCost: 100,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "2000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 16000,
            actualDps: 6315.78,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
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
            spawnTime: "0.7s",
            spawnTimeFrames: "20f",
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
            count: "10",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "1.3-3.3s",
            delayFrames: "40-100f",
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
          enemyId: "109",
          enemyName: "ぺ仙人",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 650,
            dps: 541.67,
            speed: 11,
            range: 280,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 36,
            foreswing: 6,
            backswing: 30,
            tba: 0
          },
          stageStats: {
            actualHp: 125000,
            actualAp: 3250,
            actualDps: 2708.35,
            magnification: "500%",
            count: "3",
            spawnTime: "24.0s",
            spawnTimeFrames: "720f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "110",
          enemyName: "マスターダッフン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgIDAwMEBAQFBQUGBgYGBgYGBgYHBwcICAgJCQkMDAwODg4QEBATExMVFRUYGBgdHR0mJiYnJycoKCgpKSktLS0tLS0vLy8wMDA/Pz9AQEBAQEBDQ0NDQ0NMTExOTk5SUlJcXFxgYGBmZmZqampubm52dnaBgYGDg4OOjo6YmJiZmZmenp6enp6mpqawsLC6urrExMTNzc3T09Pd3d3n5+fv7+/09PT6+vr///8Ps9WbAAAAQHRSTlMAAwrk9pe3Ev4ZLk1YI81qpH42Qw2LYOKbcr5S/IGpodfpcY20/cn6ue7/1f/+4v7/1/D////+/v7/////////qrKnsAAABERJREFUWIWlV4ly4jgQxc6AB4jDlRCOEHMZg7Esx7IO6/L//9XIQLI1VbuLgMdVRaFH6/VTd6vRuAKn3XHNu+M61375H/Ams/VwOF2/+fcxePMjZV9fIIL7+esd653RsVRaU5IBkk9vj+F1/cWrSleCEpywzc0ETm+ZE6aU4eAsim4ncHvNT5AhxClBGYbbse86r7ewOIP3Ay2yOCOIGCl4vvvcBBv/BoK3sFSyBEaHE1SGGYBr+xjcCdaVVpm4EIhCSUytpXBH3aM0yzQyBIpSVhJMD8tibfv/Xn8VyVPgXEs4WywWQZ72gnRot9xpz4MwZIaARQlIwuWg7bT3ae+4ce3in++xyT1QFY9jCLMMHiaesz7MZnZJ8BYpN+5BEeUJiOPaDOgw8IbLl2crCb1FLitNYJElCYQAJHFsPlcDf/ZiFYAzTpWuOJZac64kg6AsURKH78+tZseGoL2tjxAu63NkXhRnuNLGUB/9QccqglFa+wcSXSklaAESCpTGVJFlx0oBZ0rq9BOEMS5xDGmRxKIqE67x1LNhcDa1+SXlRSEE5wVg6INIlZFKHLbj9nUCdy9PxqdUSEKkpkkWAVAUmdaIgs9R+1qB9Y51CVGgiEvNsTByUql4FgKhEJX4MOt3rxCcIqhwHBszSWW4mDlKkiSR+Uab813MrmwhqDXQCoXU5LF+cEKE1sYQIefUcBz/n8CZ4pMBOILSGMo8TSBaEF6JmAuUEnGFoDE0dUDXTjLKFRgSzjLEJYElB/TwNsjh9gqB+1aYUl4AQSMAIS6zhEqRhSEGq6DrDneryRWChr/FHBYUC1wkCGYAYgRhAqLVm2d26A+v+tnpBBGU3GRPZaUqGSVM4GjXG1m46ILOLi5RaeRjoH6vqjLsD29pCW4AEM2wEZMCVEpJI8tS9LOJMUgKXNYFXeDMAAU3NjZ/mxjTSM5qF9QNenrb+obzvCpVRoVxQO0kebSs5v+gPSOqEHVHIeZUf83v6O1Qi1MCJIx2c7tu8Bc6O3luiRq0bsrgN7ztpSuLZfeuAcvdXroyXdwRf+Onrmidj+5a3/CP6qShOt7mwR8M09P6igf37aAxys8SkDvmwxPG+DEJnAWtHpLAvdjgbgm+k3C3BKNTEh6Q4NSiH5DAe1SCYaoecoGzPiexspfA+Wv4aO/NhFVLcOjZXpb85mDke65Tw233ah9LxliS70Z2DE53djhug8ViOl0Eu1U9opl6HgNdbj3LPfibnJk2ZlCWiThXc5YInVon8nW+z5kZCcxIAr7rIWL66wYneKPNPk3T4+6gLpcMzMTecgtnuO3OcOj7+0s9VJDmC881sCUwKTDwFvhcjiiA4LgPPicTi32Ye3a3N2j2+61W6+Ujo8bLLAGoKBAoQDS+GoPz3Hr69ev3Dz6QUIxQc++DUfTx2+Km4PearZenJ8NyxkcYJbDAhID3l1az9++D/h9CNOrVnaAcqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 2700,
            dps: 826.53,
            speed: 16,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 98,
            foreswing: 19,
            backswing: 55,
            tba: 40
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 13500,
            actualDps: 4132.65,
            magnification: "500%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
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
            count: "10",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
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
          enemyId: "087",
          enemyName: "ゴリ婿",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 170000,
            ap: 2525,
            dps: 4734.38,
            speed: 10,
            range: 175,
            rangeType: "範囲",
            kbLevel: 7,
            money: 1789,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 850000,
            actualAp: 12625,
            actualDps: 23671.9,
            magnification: "500%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "4.0-6.7s",
            delayFrames: "120-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 7500,
            actualAp: 750,
            actualDps: 264.75,
            magnification: "1500%",
            count: "7",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "1.3-8.0s",
            delayFrames: "40-240f",
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
            actualHp: 125000,
            actualAp: 7500,
            actualDps: 6428.55,
            magnification: "500%",
            count: "1",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 10800,
            actualDps: 7902.45,
            magnification: "300%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "大感謝XP祭 Lv.6",
      baseHp: 340000,
      width: 5000,
      enemyLimit: 30,
      requiredCost: 110,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "2500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 24000,
            actualDps: 9473.67,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 15000,
            actualAp: 1500,
            actualDps: 529.5,
            magnification: "3000%",
            count: "0",
            spawnTime: "0.7s",
            spawnTimeFrames: "20f",
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
            actualHp: 15000,
            actualAp: 1500,
            actualDps: 529.5,
            magnification: "3000%",
            count: "10",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "1.3-3.3s",
            delayFrames: "40-100f",
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
          enemyId: "109",
          enemyName: "ぺ仙人",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 650,
            dps: 541.67,
            speed: 11,
            range: 280,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 36,
            foreswing: 6,
            backswing: 30,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 3900,
            actualDps: 3250.02,
            magnification: "600%",
            count: "3",
            spawnTime: "24.0s",
            spawnTimeFrames: "720f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "110",
          enemyName: "マスターダッフン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgIDAwMEBAQFBQUGBgYGBgYGBgYHBwcICAgJCQkMDAwODg4QEBATExMVFRUYGBgdHR0mJiYnJycoKCgpKSktLS0tLS0vLy8wMDA/Pz9AQEBAQEBDQ0NDQ0NMTExOTk5SUlJcXFxgYGBmZmZqampubm52dnaBgYGDg4OOjo6YmJiZmZmenp6enp6mpqawsLC6urrExMTNzc3T09Pd3d3n5+fv7+/09PT6+vr///8Ps9WbAAAAQHRSTlMAAwrk9pe3Ev4ZLk1YI81qpH42Qw2LYOKbcr5S/IGpodfpcY20/cn6ue7/1f/+4v7/1/D////+/v7/////////qrKnsAAABERJREFUWIWlV4ly4jgQxc6AB4jDlRCOEHMZg7Esx7IO6/L//9XIQLI1VbuLgMdVRaFH6/VTd6vRuAKn3XHNu+M61375H/Ams/VwOF2/+fcxePMjZV9fIIL7+esd653RsVRaU5IBkk9vj+F1/cWrSleCEpywzc0ETm+ZE6aU4eAsim4ncHvNT5AhxClBGYbbse86r7ewOIP3Ay2yOCOIGCl4vvvcBBv/BoK3sFSyBEaHE1SGGYBr+xjcCdaVVpm4EIhCSUytpXBH3aM0yzQyBIpSVhJMD8tibfv/Xn8VyVPgXEs4WywWQZ72gnRot9xpz4MwZIaARQlIwuWg7bT3ae+4ce3in++xyT1QFY9jCLMMHiaesz7MZnZJ8BYpN+5BEeUJiOPaDOgw8IbLl2crCb1FLitNYJElCYQAJHFsPlcDf/ZiFYAzTpWuOJZac64kg6AsURKH78+tZseGoL2tjxAu63NkXhRnuNLGUB/9QccqglFa+wcSXSklaAESCpTGVJFlx0oBZ0rq9BOEMS5xDGmRxKIqE67x1LNhcDa1+SXlRSEE5wVg6INIlZFKHLbj9nUCdy9PxqdUSEKkpkkWAVAUmdaIgs9R+1qB9Y51CVGgiEvNsTByUql4FgKhEJX4MOt3rxCcIqhwHBszSWW4mDlKkiSR+Uab813MrmwhqDXQCoXU5LF+cEKE1sYQIefUcBz/n8CZ4pMBOILSGMo8TSBaEF6JmAuUEnGFoDE0dUDXTjLKFRgSzjLEJYElB/TwNsjh9gqB+1aYUl4AQSMAIS6zhEqRhSEGq6DrDneryRWChr/FHBYUC1wkCGYAYgRhAqLVm2d26A+v+tnpBBGU3GRPZaUqGSVM4GjXG1m46ILOLi5RaeRjoH6vqjLsD29pCW4AEM2wEZMCVEpJI8tS9LOJMUgKXNYFXeDMAAU3NjZ/mxjTSM5qF9QNenrb+obzvCpVRoVxQO0kebSs5v+gPSOqEHVHIeZUf83v6O1Qi1MCJIx2c7tu8Bc6O3luiRq0bsrgN7ztpSuLZfeuAcvdXroyXdwRf+Onrmidj+5a3/CP6qShOt7mwR8M09P6igf37aAxys8SkDvmwxPG+DEJnAWtHpLAvdjgbgm+k3C3BKNTEh6Q4NSiH5DAe1SCYaoecoGzPiexspfA+Wv4aO/NhFVLcOjZXpb85mDke65Tw233ah9LxliS70Z2DE53djhug8ViOl0Eu1U9opl6HgNdbj3LPfibnJk2ZlCWiThXc5YInVon8nW+z5kZCcxIAr7rIWL66wYneKPNPk3T4+6gLpcMzMTecgtnuO3OcOj7+0s9VJDmC881sCUwKTDwFvhcjiiA4LgPPicTi32Ye3a3N2j2+61W6+Ujo8bLLAGoKBAoQDS+GoPz3Hr69ev3Dz6QUIxQc++DUfTx2+Km4PearZenJ8NyxkcYJbDAhID3l1az9++D/h9CNOrVnaAcqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 2700,
            dps: 826.53,
            speed: 16,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 98,
            foreswing: 19,
            backswing: 55,
            tba: 40
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 16200,
            actualDps: 4959.18,
            magnification: "600%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
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
            actualHp: 15000,
            actualAp: 1500,
            actualDps: 529.5,
            magnification: "3000%",
            count: "10",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
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
          enemyId: "087",
          enemyName: "ゴリ婿",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 170000,
            ap: 2525,
            dps: 4734.38,
            speed: 10,
            range: 175,
            rangeType: "範囲",
            kbLevel: 7,
            money: 1789,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1020000,
            actualAp: 15150,
            actualDps: 28406.28,
            magnification: "600%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "4.0-6.7s",
            delayFrames: "120-200f",
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
            actualHp: 15000,
            actualAp: 1500,
            actualDps: 529.5,
            magnification: "3000%",
            count: "7",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "1.3-8.0s",
            delayFrames: "40-240f",
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
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 5142.84,
            magnification: "400%",
            count: "1",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 21600,
            actualDps: 15804.9,
            magnification: "600%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "大感謝XP祭 Lv.7",
      baseHp: 420000,
      width: 4100,
      enemyLimit: 6,
      requiredCost: 120,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "3000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 22500,
            actualAp: 2250,
            actualDps: 794.25,
            magnification: "4500%",
            count: "4",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "9.3-12.7s",
            delayFrames: "280-380f",
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
            actualHp: 22500,
            actualAp: 2250,
            actualDps: 794.25,
            magnification: "4500%",
            count: "8",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.7-14.0s",
            delayFrames: "320-420f",
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
          enemyId: "100",
          enemyName: "ビキニグマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMFBQQICAYKDAULCwoMCwsNDQ0ODQ0ODgoODg0QDw4QEQ8QEQ4YGRYbGxofHxwiIiEoKCYqKSktLCsuLyw0NDI7Ojg7OztAQD5DQ0FOT0xRUVBXV1ZbW1lfX11sa2tubm1wcXB9fHx9fXuCgoGFhYSKioiOjo6WlZWZmJidnZyoqKeurq6zs7O/vr7KysrR0dHb29vk5OTr6+vx8fH29vb7+/v////KOTvJAAAAQHRSTlMAAwkQQk/F8XPo2RYfspqK/zApN19ETub/WmzHp4jhf5X/y7D95cH/yO7/1eP/8v//6v//9f/+/v//////////DP6o/AAABHhJREFUWIWVVwt3ojwQFe32a6tdX9Wttj6oKBZNA4Q8yeP//6tNEPfrdi3CHM8RkbkkM3fmTlqty9budrw/1+P5atb95sHL5o3Xu820Xf6Y7glLFu0mAMMdzflxWi5gzYyWh3GTBcwzqTlad7rdXm80fKXG6GTaBGCVhijwXxab/f5wOGyRkWQ3agIwe39+HgwCKqTUSktl6HLiXff733qvgwCGWJvCNBfyOGni3/KeAqpZTHUBQf1A0HWjLLTX1Gg4CKR7vyHPPpf7JjFo9fbWlQRQWX+tFWW6WRZak8QuXgtOUAojgKiwy1g1iKK3spmXBIIYuGQgGKWCbzr1Abq73HAIUUpzFNhwWlJFdN+rDzA8KAEIASlUCoa50ZgRcKzPZe/pQyGk4iAFNI0gwCQiEnzMawehuwEYQ8FBGEIkJE1TTGOIHmtX9CQRECNAuMiVkrmgCACcWzbX9Hcs4oAzGME4BlEEIGJSG+Yvau5hdLCPk1gpwShlTNhackb8t3p5sM3A8k8CYspaKg35H/XI2NmIooKi/C9/nQa4XkFNjsWbFcSf3BUjUU0ueSty8qERIey0fSPjMApCltTJQ3cnSgDf+sSyuMZhRCKf1yqo8dHVsBG5rcIUBanbj7bdiUGfic11LhU5MCaHNMCMMRs5SgkOU6Gwz1SNeuhsuANgURrEtqHSIEax/WAlU5/VaQrDYxE3EmAUMSlSIB0dBIwjAJgRu2t7KHdgkC1kW0shLCOKARaxFaireSh3oGObS44xFmceKHvP/kWvSeTooE5hp+arFQD5NS5Nk+LZCwBaQX5dIr35iYYS8n9WUAAYWp0Hb8FKAPEPgATuXl6dh/aafwuQR+6ePg6rAMpSvgggQFEX2awKwEqa/g6AwyJB1UEYHfS3KygBRKVCjZMCQF/KAosLhqhDlUyfaHCZSDQ+gVeyeZZ9D4BR+T2vAijbWVELXyw9t7pFBcD87IfwV38FThyzUawAWJ1XTlL9tyqUPLIm91UA7ByxUH7RFRqcdMKmoQ4AD1BuPkNw25TL+CR1AGQQxER+8ofp8ry9WgD6fcvshFPqimGAZC/nAGd1gqiPS64ZhCyXSnJkh9bstQ7AnzSadGtHI9vK/SAM/OdYmaQWwJmJlgihKx0VDZy5OevYd6pvJBZVAJPkDEDgaUy2c+Ig4C77d5ly4+vr/r0CYHx0/NF2MEWp81fUHwyeScG/pwRHuRW3m8cKgNEhT5mhW6phsWO6fLh/+OUiy9fTj20/YZuOV6WPvX32kqnk7phHrODMbDQeFmJFVpNlv7vYzqrFsf36Nj3w3Wj1ETrenaSwkMts1rvrtbpPV7TRu3nqrI6Ldmf2JmzIs2I4dZOzyaaeE7Wr4ux5re6kV7ZneShaeHHsS5qc+pyTBdDZqlBSz7KjuhN+AyB2pZDaIMh9s6OvkyiVnCNu99PouOHMW1CyPvvYqaPRgafTG978+Am3/buz9ZdB/8fNuNetheLd9B9vbx9+3d/f/1eavXy4vX38+XRhPPkNKj9rZfPfg7gAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 600,
            dps: 1125.0,
            speed: 30,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 175000,
            actualAp: 3000,
            actualDps: 5625.0,
            magnification: "500%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            actualHp: 22500,
            actualAp: 2250,
            actualDps: 794.25,
            magnification: "4500%",
            count: "0",
            spawnTime: "2.7s",
            spawnTimeFrames: "80f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
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
          enemyId: "442",
          enemyName: "マドンナ先生",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 2400,
            dps: 605.04,
            speed: 10,
            range: 200,
            rangeType: "範囲",
            kbLevel: 6,
            money: 2000,
            freq: 119,
            foreswing: 16,
            backswing: 20,
            tba: 52
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 4800,
            actualDps: 1210.08,
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
                chance: 100
            },
            "wave": {
                chance: 100,
                level: 3
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
            actualHp: 22500,
            actualAp: 2250,
            actualDps: 794.25,
            magnification: "4500%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "199",
          enemyName: "ドバット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgKCgoLCwsMDAwMDAwMDAwODg4PDw8QEBAYGBgdHR0eHh4eHh4fHx8fHx8fHx8iIiIkJCQkJCQoKCgpKSkqKiosLCwvLy82NjY6Ojo7OztCQkJFRUVJSUlKSkpNTU1OTk5SUlJVVVVZWVlmZmaFhYWenp67u7vc3Nzk5OT19fX+/v7cZ/scAAAAQHRSTlMAAwgOExoiyugoRU6dMTtVaVxy4K7UgHmGvKeUtN//zfTD7frVl//e9//t///4///6/+HS/////////f/+////waye+QAAAolJREFUWIXtl2tzojAUhkWFrihYab2j4t2QkEO2uWjV9v//qx6s09nZ2c6E3f3I+y3D5DnvuSRArfadgnbT+fahjdr9id/4m43OPW5zcpiNWuVNuI+++7mrl7Jk3K6XBXjPszgKCu/hXgsyGzZLAhx/Q5P+NGzUgr02kq4GZQn1YcbpejYNfQQUhFFZAlpXQNaL54NBgmJIcDysS922HO5SaqM4We+EUkojIfImceAOupYtaU7AmML8br4jhDJO9sN9NhimU0sLjRsATQCZUwGMEjZL5WIBW0uAOxZGKymE4HTHtBYUDgeVHLKBZQrhXnBCCNonhBPOGIUkwYSSyA7gRAfgoKRUAijnO8YpWRdrvgzsAME0lUUVjeaMA5EI4IoDV9nQsgjNaIUDgJ1E95wKwqkECQJk7Nk2cpvjfmCCFi0gQDVoUCBWz11LD+G+iC8wOKdzdKFUsZ/N17FrB/AWCrg0QLCVO3I8glRSGZj3bU93sMGaacOJwkLOj5fXoxC4ZmPfspO9FONrTanWilN6vFzPpyO2NVuGVoBGJ+EKTwPBmcZJBH48Xd+u59fT+XVr5yCM4pUwgojbPBiMfX5Hvb1fX6wANddrRTPBqDJ3gbm8FQhLQH0QjwbjNWcSuLhBFJjT+XK9nOxSqA+TPM/xNtjhiWK3udaSQ/7zZduyS6EVZ8bwOQWltbznoeWqF7iWs+yE40yqrwp8Kp9YjuGN0Botiln4Et7wG8spuqve6sXpLx7y/WPZl5TjRpvs04TK07j8Sw5dBINlmmVZuuh0bcv3O6LVjYZRL2j826dCpUqVKlWqVOn/qOEFod9ud7vtth8GXuk/ccfvjB/6Tz9QT/2HcefPXxgfvV5yqtoeb+cAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 6300,
            ap: 800,
            dps: 545.45,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 31500,
            actualAp: 4000,
            actualDps: 2727.25,
            magnification: "500%",
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
            actualHp: 22500,
            actualAp: 2250,
            actualDps: 794.25,
            magnification: "4500%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 22500,
            actualAp: 2250,
            actualDps: 794.25,
            magnification: "4500%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "199",
          enemyName: "ドバット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgKCgoLCwsMDAwMDAwMDAwODg4PDw8QEBAYGBgdHR0eHh4eHh4fHx8fHx8fHx8iIiIkJCQkJCQoKCgpKSkqKiosLCwvLy82NjY6Ojo7OztCQkJFRUVJSUlKSkpNTU1OTk5SUlJVVVVZWVlmZmaFhYWenp67u7vc3Nzk5OT19fX+/v7cZ/scAAAAQHRSTlMAAwgOExoiyugoRU6dMTtVaVxy4K7UgHmGvKeUtN//zfTD7frVl//e9//t///4///6/+HS/////////f/+////waye+QAAAolJREFUWIXtl2tzojAUhkWFrihYab2j4t2QkEO2uWjV9v//qx6s09nZ2c6E3f3I+y3D5DnvuSRArfadgnbT+fahjdr9id/4m43OPW5zcpiNWuVNuI+++7mrl7Jk3K6XBXjPszgKCu/hXgsyGzZLAhx/Q5P+NGzUgr02kq4GZQn1YcbpejYNfQQUhFFZAlpXQNaL54NBgmJIcDysS922HO5SaqM4We+EUkojIfImceAOupYtaU7AmML8br4jhDJO9sN9NhimU0sLjRsATQCZUwGMEjZL5WIBW0uAOxZGKymE4HTHtBYUDgeVHLKBZQrhXnBCCNonhBPOGIUkwYSSyA7gRAfgoKRUAijnO8YpWRdrvgzsAME0lUUVjeaMA5EI4IoDV9nQsgjNaIUDgJ1E95wKwqkECQJk7Nk2cpvjfmCCFi0gQDVoUCBWz11LD+G+iC8wOKdzdKFUsZ/N17FrB/AWCrg0QLCVO3I8glRSGZj3bU93sMGaacOJwkLOj5fXoxC4ZmPfspO9FONrTanWilN6vFzPpyO2NVuGVoBGJ+EKTwPBmcZJBH48Xd+u59fT+XVr5yCM4pUwgojbPBiMfX5Hvb1fX6wANddrRTPBqDJ3gbm8FQhLQH0QjwbjNWcSuLhBFJjT+XK9nOxSqA+TPM/xNtjhiWK3udaSQ/7zZduyS6EVZ8bwOQWltbznoeWqF7iWs+yE40yqrwp8Kp9YjuGN0Botiln4Et7wG8spuqve6sXpLx7y/WPZl5TjRpvs04TK07j8Sw5dBINlmmVZuuh0bcv3O6LVjYZRL2j826dCpUqVKlWqVOn/qOEFod9ud7vtth8GXuk/ccfvjB/6Tz9QT/2HcefPXxgfvV5yqtoeb+cAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 6300,
            ap: 800,
            dps: 545.45,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 31500,
            actualAp: 4000,
            actualDps: 2727.25,
            magnification: "500%",
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
            actualHp: 22500,
            actualAp: 2250,
            actualDps: 794.25,
            magnification: "4500%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 22500,
            actualAp: 2250,
            actualDps: 794.25,
            magnification: "4500%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "199",
          enemyName: "ドバット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgKCgoLCwsMDAwMDAwMDAwODg4PDw8QEBAYGBgdHR0eHh4eHh4fHx8fHx8fHx8iIiIkJCQkJCQoKCgpKSkqKiosLCwvLy82NjY6Ojo7OztCQkJFRUVJSUlKSkpNTU1OTk5SUlJVVVVZWVlmZmaFhYWenp67u7vc3Nzk5OT19fX+/v7cZ/scAAAAQHRSTlMAAwgOExoiyugoRU6dMTtVaVxy4K7UgHmGvKeUtN//zfTD7frVl//e9//t///4///6/+HS/////////f/+////waye+QAAAolJREFUWIXtl2tzojAUhkWFrihYab2j4t2QkEO2uWjV9v//qx6s09nZ2c6E3f3I+y3D5DnvuSRArfadgnbT+fahjdr9id/4m43OPW5zcpiNWuVNuI+++7mrl7Jk3K6XBXjPszgKCu/hXgsyGzZLAhx/Q5P+NGzUgr02kq4GZQn1YcbpejYNfQQUhFFZAlpXQNaL54NBgmJIcDysS922HO5SaqM4We+EUkojIfImceAOupYtaU7AmML8br4jhDJO9sN9NhimU0sLjRsATQCZUwGMEjZL5WIBW0uAOxZGKymE4HTHtBYUDgeVHLKBZQrhXnBCCNonhBPOGIUkwYSSyA7gRAfgoKRUAijnO8YpWRdrvgzsAME0lUUVjeaMA5EI4IoDV9nQsgjNaIUDgJ1E95wKwqkECQJk7Nk2cpvjfmCCFi0gQDVoUCBWz11LD+G+iC8wOKdzdKFUsZ/N17FrB/AWCrg0QLCVO3I8glRSGZj3bU93sMGaacOJwkLOj5fXoxC4ZmPfspO9FONrTanWilN6vFzPpyO2NVuGVoBGJ+EKTwPBmcZJBH48Xd+u59fT+XVr5yCM4pUwgojbPBiMfX5Hvb1fX6wANddrRTPBqDJ3gbm8FQhLQH0QjwbjNWcSuLhBFJjT+XK9nOxSqA+TPM/xNtjhiWK3udaSQ/7zZduyS6EVZ8bwOQWltbznoeWqF7iWs+yE40yqrwp8Kp9YjuGN0Botiln4Et7wG8spuqve6sXpLx7y/WPZl5TjRpvs04TK07j8Sw5dBINlmmVZuuh0bcv3O6LVjYZRL2j826dCpUqVKlWqVOn/qOEFod9ud7vtth8GXuk/ccfvjB/6Tz9QT/2HcefPXxgfvV5yqtoeb+cAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 6300,
            ap: 800,
            dps: 545.45,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 31500,
            actualAp: 4000,
            actualDps: 2727.25,
            magnification: "500%",
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
          enemyId: "198",
          enemyName: "まゆげ伯爵",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 166000,
            ap: 6600,
            dps: 1706.9,
            speed: 12,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 116,
            foreswing: 44,
            backswing: 72,
            tba: 0
          },
          stageStats: {
            actualHp: 249000,
            actualAp: 9900,
            actualDps: 2560.35,
            magnification: "150%",
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
                chance: 50
            },
            "slow": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
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
    },
    {
      stageId: 7,
      stageName: "大感謝XP祭 Lv.8",
      baseHp: 540000,
      width: 4100,
      enemyLimit: 6,
      requiredCost: 130,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "3750000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "9.3-12.7s",
            delayFrames: "280-380f",
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
            count: "8",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.7-14.0s",
            delayFrames: "320-420f",
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
          enemyId: "100",
          enemyName: "ビキニグマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMFBQQICAYKDAULCwoMCwsNDQ0ODQ0ODgoODg0QDw4QEQ8QEQ4YGRYbGxofHxwiIiEoKCYqKSktLCsuLyw0NDI7Ojg7OztAQD5DQ0FOT0xRUVBXV1ZbW1lfX11sa2tubm1wcXB9fHx9fXuCgoGFhYSKioiOjo6WlZWZmJidnZyoqKeurq6zs7O/vr7KysrR0dHb29vk5OTr6+vx8fH29vb7+/v////KOTvJAAAAQHRSTlMAAwkQQk/F8XPo2RYfspqK/zApN19ETub/WmzHp4jhf5X/y7D95cH/yO7/1eP/8v//6v//9f/+/v//////////DP6o/AAABHhJREFUWIWVVwt3ojwQFe32a6tdX9Wttj6oKBZNA4Q8yeP//6tNEPfrdi3CHM8RkbkkM3fmTlqty9budrw/1+P5atb95sHL5o3Xu820Xf6Y7glLFu0mAMMdzflxWi5gzYyWh3GTBcwzqTlad7rdXm80fKXG6GTaBGCVhijwXxab/f5wOGyRkWQ3agIwe39+HgwCKqTUSktl6HLiXff733qvgwCGWJvCNBfyOGni3/KeAqpZTHUBQf1A0HWjLLTX1Gg4CKR7vyHPPpf7JjFo9fbWlQRQWX+tFWW6WRZak8QuXgtOUAojgKiwy1g1iKK3spmXBIIYuGQgGKWCbzr1Abq73HAIUUpzFNhwWlJFdN+rDzA8KAEIASlUCoa50ZgRcKzPZe/pQyGk4iAFNI0gwCQiEnzMawehuwEYQ8FBGEIkJE1TTGOIHmtX9CQRECNAuMiVkrmgCACcWzbX9Hcs4oAzGME4BlEEIGJSG+Yvau5hdLCPk1gpwShlTNhackb8t3p5sM3A8k8CYspaKg35H/XI2NmIooKi/C9/nQa4XkFNjsWbFcSf3BUjUU0ueSty8qERIey0fSPjMApCltTJQ3cnSgDf+sSyuMZhRCKf1yqo8dHVsBG5rcIUBanbj7bdiUGfic11LhU5MCaHNMCMMRs5SgkOU6Gwz1SNeuhsuANgURrEtqHSIEax/WAlU5/VaQrDYxE3EmAUMSlSIB0dBIwjAJgRu2t7KHdgkC1kW0shLCOKARaxFaireSh3oGObS44xFmceKHvP/kWvSeTooE5hp+arFQD5NS5Nk+LZCwBaQX5dIr35iYYS8n9WUAAYWp0Hb8FKAPEPgATuXl6dh/aafwuQR+6ePg6rAMpSvgggQFEX2awKwEqa/g6AwyJB1UEYHfS3KygBRKVCjZMCQF/KAosLhqhDlUyfaHCZSDQ+gVeyeZZ9D4BR+T2vAijbWVELXyw9t7pFBcD87IfwV38FThyzUawAWJ1XTlL9tyqUPLIm91UA7ByxUH7RFRqcdMKmoQ4AD1BuPkNw25TL+CR1AGQQxER+8ofp8ry9WgD6fcvshFPqimGAZC/nAGd1gqiPS64ZhCyXSnJkh9bstQ7AnzSadGtHI9vK/SAM/OdYmaQWwJmJlgihKx0VDZy5OevYd6pvJBZVAJPkDEDgaUy2c+Ig4C77d5ly4+vr/r0CYHx0/NF2MEWp81fUHwyeScG/pwRHuRW3m8cKgNEhT5mhW6phsWO6fLh/+OUiy9fTj20/YZuOV6WPvX32kqnk7phHrODMbDQeFmJFVpNlv7vYzqrFsf36Nj3w3Wj1ETrenaSwkMts1rvrtbpPV7TRu3nqrI6Ldmf2JmzIs2I4dZOzyaaeE7Wr4ux5re6kV7ZneShaeHHsS5qc+pyTBdDZqlBSz7KjuhN+AyB2pZDaIMh9s6OvkyiVnCNu99PouOHMW1CyPvvYqaPRgafTG978+Am3/buz9ZdB/8fNuNetheLd9B9vbx9+3d/f/1eavXy4vX38+XRhPPkNKj9rZfPfg7gAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 600,
            dps: 1125.0,
            speed: 30,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 210000,
            actualAp: 3600,
            actualDps: 6750.0,
            magnification: "600%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 180000,
            actualAp: 6000,
            actualDps: 5625.0,
            magnification: "600%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
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
            count: "0",
            spawnTime: "2.7s",
            spawnTimeFrames: "80f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
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
          enemyId: "442",
          enemyName: "マドンナ先生",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 2400,
            dps: 605.04,
            speed: 10,
            range: 200,
            rangeType: "範囲",
            kbLevel: 6,
            money: 2000,
            freq: 119,
            foreswing: 16,
            backswing: 20,
            tba: 52
          },
          stageStats: {
            actualHp: 720000,
            actualAp: 7200,
            actualDps: 1815.12,
            magnification: "300%",
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
                chance: 100
            },
            "wave": {
                chance: 100,
                level: 3
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "199",
          enemyName: "ドバット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgKCgoLCwsMDAwMDAwMDAwODg4PDw8QEBAYGBgdHR0eHh4eHh4fHx8fHx8fHx8iIiIkJCQkJCQoKCgpKSkqKiosLCwvLy82NjY6Ojo7OztCQkJFRUVJSUlKSkpNTU1OTk5SUlJVVVVZWVlmZmaFhYWenp67u7vc3Nzk5OT19fX+/v7cZ/scAAAAQHRSTlMAAwgOExoiyugoRU6dMTtVaVxy4K7UgHmGvKeUtN//zfTD7frVl//e9//t///4///6/+HS/////////f/+////waye+QAAAolJREFUWIXtl2tzojAUhkWFrihYab2j4t2QkEO2uWjV9v//qx6s09nZ2c6E3f3I+y3D5DnvuSRArfadgnbT+fahjdr9id/4m43OPW5zcpiNWuVNuI+++7mrl7Jk3K6XBXjPszgKCu/hXgsyGzZLAhx/Q5P+NGzUgr02kq4GZQn1YcbpejYNfQQUhFFZAlpXQNaL54NBgmJIcDysS922HO5SaqM4We+EUkojIfImceAOupYtaU7AmML8br4jhDJO9sN9NhimU0sLjRsATQCZUwGMEjZL5WIBW0uAOxZGKymE4HTHtBYUDgeVHLKBZQrhXnBCCNonhBPOGIUkwYSSyA7gRAfgoKRUAijnO8YpWRdrvgzsAME0lUUVjeaMA5EI4IoDV9nQsgjNaIUDgJ1E95wKwqkECQJk7Nk2cpvjfmCCFi0gQDVoUCBWz11LD+G+iC8wOKdzdKFUsZ/N17FrB/AWCrg0QLCVO3I8glRSGZj3bU93sMGaacOJwkLOj5fXoxC4ZmPfspO9FONrTanWilN6vFzPpyO2NVuGVoBGJ+EKTwPBmcZJBH48Xd+u59fT+XVr5yCM4pUwgojbPBiMfX5Hvb1fX6wANddrRTPBqDJ3gbm8FQhLQH0QjwbjNWcSuLhBFJjT+XK9nOxSqA+TPM/xNtjhiWK3udaSQ/7zZduyS6EVZ8bwOQWltbznoeWqF7iWs+yE40yqrwp8Kp9YjuGN0Botiln4Et7wG8spuqve6sXpLx7y/WPZl5TjRpvs04TK07j8Sw5dBINlmmVZuuh0bcv3O6LVjYZRL2j826dCpUqVKlWqVOn/qOEFod9ud7vtth8GXuk/ccfvjB/6Tz9QT/2HcefPXxgfvV5yqtoeb+cAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 6300,
            ap: 800,
            dps: 545.45,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 37800,
            actualAp: 4800,
            actualDps: 3272.7,
            magnification: "600%",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "199",
          enemyName: "ドバット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgKCgoLCwsMDAwMDAwMDAwODg4PDw8QEBAYGBgdHR0eHh4eHh4fHx8fHx8fHx8iIiIkJCQkJCQoKCgpKSkqKiosLCwvLy82NjY6Ojo7OztCQkJFRUVJSUlKSkpNTU1OTk5SUlJVVVVZWVlmZmaFhYWenp67u7vc3Nzk5OT19fX+/v7cZ/scAAAAQHRSTlMAAwgOExoiyugoRU6dMTtVaVxy4K7UgHmGvKeUtN//zfTD7frVl//e9//t///4///6/+HS/////////f/+////waye+QAAAolJREFUWIXtl2tzojAUhkWFrihYab2j4t2QkEO2uWjV9v//qx6s09nZ2c6E3f3I+y3D5DnvuSRArfadgnbT+fahjdr9id/4m43OPW5zcpiNWuVNuI+++7mrl7Jk3K6XBXjPszgKCu/hXgsyGzZLAhx/Q5P+NGzUgr02kq4GZQn1YcbpejYNfQQUhFFZAlpXQNaL54NBgmJIcDysS922HO5SaqM4We+EUkojIfImceAOupYtaU7AmML8br4jhDJO9sN9NhimU0sLjRsATQCZUwGMEjZL5WIBW0uAOxZGKymE4HTHtBYUDgeVHLKBZQrhXnBCCNonhBPOGIUkwYSSyA7gRAfgoKRUAijnO8YpWRdrvgzsAME0lUUVjeaMA5EI4IoDV9nQsgjNaIUDgJ1E95wKwqkECQJk7Nk2cpvjfmCCFi0gQDVoUCBWz11LD+G+iC8wOKdzdKFUsZ/N17FrB/AWCrg0QLCVO3I8glRSGZj3bU93sMGaacOJwkLOj5fXoxC4ZmPfspO9FONrTanWilN6vFzPpyO2NVuGVoBGJ+EKTwPBmcZJBH48Xd+u59fT+XVr5yCM4pUwgojbPBiMfX5Hvb1fX6wANddrRTPBqDJ3gbm8FQhLQH0QjwbjNWcSuLhBFJjT+XK9nOxSqA+TPM/xNtjhiWK3udaSQ/7zZduyS6EVZ8bwOQWltbznoeWqF7iWs+yE40yqrwp8Kp9YjuGN0Botiln4Et7wG8spuqve6sXpLx7y/WPZl5TjRpvs04TK07j8Sw5dBINlmmVZuuh0bcv3O6LVjYZRL2j826dCpUqVKlWqVOn/qOEFod9ud7vtth8GXuk/ccfvjB/6Tz9QT/2HcefPXxgfvV5yqtoeb+cAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 6300,
            ap: 800,
            dps: 545.45,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 37800,
            actualAp: 4800,
            actualDps: 3272.7,
            magnification: "600%",
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
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "199",
          enemyName: "ドバット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgKCgoLCwsMDAwMDAwMDAwODg4PDw8QEBAYGBgdHR0eHh4eHh4fHx8fHx8fHx8iIiIkJCQkJCQoKCgpKSkqKiosLCwvLy82NjY6Ojo7OztCQkJFRUVJSUlKSkpNTU1OTk5SUlJVVVVZWVlmZmaFhYWenp67u7vc3Nzk5OT19fX+/v7cZ/scAAAAQHRSTlMAAwgOExoiyugoRU6dMTtVaVxy4K7UgHmGvKeUtN//zfTD7frVl//e9//t///4///6/+HS/////////f/+////waye+QAAAolJREFUWIXtl2tzojAUhkWFrihYab2j4t2QkEO2uWjV9v//qx6s09nZ2c6E3f3I+y3D5DnvuSRArfadgnbT+fahjdr9id/4m43OPW5zcpiNWuVNuI+++7mrl7Jk3K6XBXjPszgKCu/hXgsyGzZLAhx/Q5P+NGzUgr02kq4GZQn1YcbpejYNfQQUhFFZAlpXQNaL54NBgmJIcDysS922HO5SaqM4We+EUkojIfImceAOupYtaU7AmML8br4jhDJO9sN9NhimU0sLjRsATQCZUwGMEjZL5WIBW0uAOxZGKymE4HTHtBYUDgeVHLKBZQrhXnBCCNonhBPOGIUkwYSSyA7gRAfgoKRUAijnO8YpWRdrvgzsAME0lUUVjeaMA5EI4IoDV9nQsgjNaIUDgJ1E95wKwqkECQJk7Nk2cpvjfmCCFi0gQDVoUCBWz11LD+G+iC8wOKdzdKFUsZ/N17FrB/AWCrg0QLCVO3I8glRSGZj3bU93sMGaacOJwkLOj5fXoxC4ZmPfspO9FONrTanWilN6vFzPpyO2NVuGVoBGJ+EKTwPBmcZJBH48Xd+u59fT+XVr5yCM4pUwgojbPBiMfX5Hvb1fX6wANddrRTPBqDJ3gbm8FQhLQH0QjwbjNWcSuLhBFJjT+XK9nOxSqA+TPM/xNtjhiWK3udaSQ/7zZduyS6EVZ8bwOQWltbznoeWqF7iWs+yE40yqrwp8Kp9YjuGN0Botiln4Et7wG8spuqve6sXpLx7y/WPZl5TjRpvs04TK07j8Sw5dBINlmmVZuuh0bcv3O6LVjYZRL2j826dCpUqVKlWqVOn/qOEFod9ud7vtth8GXuk/ccfvjB/6Tz9QT/2HcefPXxgfvV5yqtoeb+cAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 6300,
            ap: 800,
            dps: 545.45,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 150,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 37800,
            actualAp: 4800,
            actualDps: 3272.7,
            magnification: "600%",
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
          enemyId: "198",
          enemyName: "まゆげ伯爵",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 166000,
            ap: 6600,
            dps: 1706.9,
            speed: 12,
            range: 370,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 116,
            foreswing: 44,
            backswing: 72,
            tba: 0
          },
          stageStats: {
            actualHp: 498000,
            actualAp: 19800,
            actualDps: 5120.7,
            magnification: "300%",
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
                chance: 50
            },
            "slow": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
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
            actualHp: 600000,
            actualAp: 16000,
            actualDps: 2909.1,
            magnification: "500%",
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
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
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
    },
    {
      stageId: 8,
      stageName: "大感謝XP祭 Lv.9",
      baseHp: 660000,
      width: 4500,
      enemyLimit: 5,
      requiredCost: 140,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "5000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 9000,
            actualDps: 4821.48,
            magnification: "1200%",
            count: "1",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 7500,
            actualDps: 4891.32,
            magnification: "600%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
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
            actualHp: 37500,
            actualAp: 3750,
            actualDps: 1323.75,
            magnification: "7500%",
            count: "9",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
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
          enemyId: "343",
          enemyName: "なめ（天使）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEEBAQHBwcJCQkLCwsPDw8REREUFBQhISEqKiowMDA5OTk8PDw+Pj5mTA9SUlJVVVVVVVVYWFheXl55YBppaWlubm5zc3N7e3u5dRODg4O5hA6IiIi+gx3GkA+WlpbKngHPlzLOoRakpKSpqanWp0bZqDitra3brlOysrLdrli5ubnftmTlwXTHx8frzILOzs7rz4Pz0YfU1NTe3t7//wH147nk5OTr6+vz8/P7+/v///////+xV9idAAAAQHRSTlMACOCwyRBWHZB09ipB4Kxa+TV6kunK9k2Q9qXYG7kM/icYzQU3Iv/eT67/j+th/nKY/8L+1ez//wHt/////wD/FQSmuAAAAjZJREFUWIXtk2uTmjAUhqWKaHFLC6uuKK6yihYxbkw30VzK//9XexK8dWs7A51+43F0FPI+nHMSGz//kUYtqAW1oBbUglpQC2pBLfgPgpIcXqbz+VIzn09fDmXj08V28/3KZruYlsvvjm+b9WI2m0wms9livXk7bsoJNsfj/nW3XWu2u9f9saQAWoDUjxN7cJVsAThMp/PZcLhczobfKgyxoDcOrOKjIl4KWR+H1QWJ17DCzKuab/ggcOPYqZq3AuTbvSyyK6Vt1wvGdBz1UfhXgWU7rsGxbcvS07L0Jc+PVoQLJZWUmf+HHiyn5/lhFK8McRxF4ZNGXyJcqRxQ+kVD917ae4ozyqVUDBNCAakRAq6YrEEJ/Z196AIe7YcxFsU6hhkFAU7kNXeOK0qMDd3spK3DGbusVkgKlLKcso9xfZMV5YhzCZbrRzdhjcAKpYgrLO8Ickw5JSJX42KOrh9Tmf9aKaU5S5BUSP3Wge4BmhCwFUbgQBz2RaNnW5BjnguEpER38mCQBDJS9EHghFiYQZugPAkUZgqniRCo8Bp1fnorRZKUKCmI/kM6EeGcC4O8gglPUII5UjfI8yM4SqkQfNU2EwiiVYYwoYxxA9PgBApIMU5vrReEWZf51unYunD2gjDWHjg9BpymiQaxC/yK/klXQbEHcMhtB3B77W7nS/9xNHp+hmSaIgCfOGnpGYySftcxBTgQ6zSbzVar9cnw+cJXw2AwGN0wGDwCDw+tZqfbhhLeAd+D8QOO9jL/AAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 1500.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 66,
            foreswing: 27,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 13200,
            actualDps: 6000.0,
            magnification: "400%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
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
            actualHp: 37500,
            actualAp: 3750,
            actualDps: 1323.75,
            magnification: "7500%",
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
          enemyId: "422",
          enemyName: "レッドヘルクマッチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQABAQAIAQEJAwENBAAOBAAQBQEWBwAYCAAfCgAgCgAqDgEuDwEwDwAzEAE4EgA6EwE8FABAFgFBFQA7GAdNGQBRGwBYHQBnIgBqIwBqJAJvJAB9KgBFPTp+LQSJLQCNLgCPMAKhNgGjNgBgUkq1PAGPSSm+PwDAPwCqTSDTRwGEYVLJURajXT3gTAO9XS/sTwH3UQD/VAC1bUqje2fLflumjYKvnpbenH61sK3Cvr7Y1dTq6ej39/a81v1XAAAAQHRSTlMAB2XFEyySQh2ygzhUbMBEzaDp3Vp8+f+Tr73/6svVrv/r4P/+7en//vX////9///////////////+///+////QLxAQQAABdtJREFUWIWll4t2qjoQhosbCypWsfXCzYMSz2iIGBKkskX7/m91BgTr7ra0XSdduqgmH/9cnBkeHj5biqJ++t03ltobv3SV/wHQ7cXC0/+PApvS5U8AmqH/IViZwY8AijGfj2/26z0EzH8AaNuEEquH0gc9pfSAC9T+QRg0DyiA11P6i0Vf65uEOgCzH0ShPbZXiPAGFoC72K3xHchL8Y1qtL/HUQfWCgnmgkKY7QISBMte+YXx1FLVbzHUF3sDnkv9YO1v1+AXLlB6Wtscdbua/i1/6OMlCSA4HLf5cR90FV0zHkfDzmQyMls9zO2vCcrAA9gfj6f8EILZHY4mk+l0iq/RkzG2xt8Iq2o6EO7T/S6OqdsZTpzAmZZrZDPOvg5Le+Y6NH59ff39O6KLzsiXCb8QnucykV9llmJ4jBCA3e/frxGlwXQaJEJcACNXJMxq9qTSX+J2x/F9QotFJlOHAw2AIIpwKVzti/MrmTAHd5IrYOqEO4h3wp+yRDDXaAQYS4FmyiRJAjSjAKDygKRZtmbgANlOwW7ygWrzkOHpRBZmOBQKH/iSp+esSEsfTROblyYBqygVxf0TQZmPhlP/AjjsCA0cwih60fw8jqrFXvelAbiY61nPgACaRHEUp+lkss2zvWDDfu8zhLGK8x0vj0u5NNr9UeD4AU94nJ7e3k7b09s5zyJ/s5zd94NqRYdzfohLI7hp/HM4OIFARfx4zE55dsS//BwDk+E/dwmDlYgPcRyVNqzMZbQ/bmkRE56d82N+fjufzudjxAmPt/eqvWIGIt5VHpAuJoSItmEimZRRdjq/vSHguI8EYxCF8/bfgPYwkGFYnRe+4AI9STCvWIHav77u44jLhIIAJjZ38qnX2SRAK4D0Ged4M8qE5AzPJbU0xkLKE9b/u+mpJks4v+yT8ZaWHFF4FA8Vci7n+X7HceO83/pIUG1S5YDkYbqutNQm0RItabjPIgb4werZ+OAH3XNqmSLiFOqzFRRAFlL2p4zTUh1YH0Khd9w6C4tErAFJLZ6jWwXP8kMEZaZI3/oToLYsfj0vSG2ChEoCCktEmsWCkssn7GPXUvqbdwFTVh/DzCsvOQCHmHMaVF9J62M26Z6oAeBfnJZwJoBgZYDAJ5flk1rl3/X1ZVWFWwSX20ruBPhGsUqystSglxi5SEvuVAZldikn6PISA1iQ/Op2ogxPmZ2X/8XddLZpkTiCCbbZLN2io1QAVnpeoDBKSi2M3O0QbdNdLdylN3sZDIxRUcvL5MD94pKIIqFBdTlT7zU6pa1pvXbZiVujSQWQ5a1LECqoA7x50e4Y8b7Ux+5zAcB7Yu7LqyuA1VHwzH4TQdX1YUEQIhDXDMULuKbbxjW7TRLw99lFN7BwndwsCTVOcvI8bAQoLe1pOlmnUfL+G5GS3PxgnHmjAFVXW5NJlkX8RoGoAUWxhGXD+Z5tDx70p0l2StkNgF8zmWNMGhQoJoA9nj1Ntuc8vrGB1QAZYwPwGgBjHDvX6c6fbtGIdwJcCwVPX5nVZMICAdgUp3S9v/FjUCmQItzmqdmswPHX/hrnChGvWUWQrls7MTqc8v7nANWjsDse0/yAQxKGnNUAs3apjE95Q69HCyDNchz2HCqS977g9lfXiKZZw7zyQiAMw91uvXZ8uInC0pgXha68jv7tfQ5AF8BuHQQ465DgJpNWhi3KSo1NUzQ9EI0ByimprIc3gE3f5NzF8suGG/FXWf1DAfH9oBgZ8QKwSLHNqjCFjU02N2wul5pFGoLw0Mc5D8rJCiiKdbt9Q7MwAHxmLg1lsICuog2bysFgQS+TYlAIJ2Ub03DWFdajoTwo3af2g6I1zc26V5iPw26hm1qlt4rWI7zy6UVvrGbl5iIMCPCxBLKnajvOcV9O29fVcyksPPu5GAau4e7NxbefJLUFXRqqOmPcH17P4BPd8kvx1dKtxbDX1kyYThePrev6NWq19e8+w/VbrW5n+OvXEF/V6nQ6jy3tQ1//D9/WVE+K0jwBAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 400000,
            ap: 4400,
            dps: 3666.67,
            speed: 20,
            range: 300,
            rangeType: "範囲",
            kbLevel: 10,
            money: 2000,
            freq: 36,
            foreswing: 7,
            backswing: 6,
            tba: 15
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 11000,
            actualDps: 9166.67,
            magnification: "250%",
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
                chance: 100
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
            actualHp: 37500,
            actualAp: 3750,
            actualDps: 1323.75,
            magnification: "7500%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "411",
          enemyName: "ゴリ男氏",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 200000,
            ap: 2025,
            dps: 3796.88,
            speed: 15,
            range: 225,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1800,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1800000,
            actualAp: 18225,
            actualDps: 34171.92,
            magnification: "900%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 50,
                distance: 500,
                duration_f: 10,
                duration_s: 0.33
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
            actualHp: 37500,
            actualAp: 3750,
            actualDps: 1323.75,
            magnification: "7500%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 37500,
            actualAp: 3750,
            actualDps: 1323.75,
            magnification: "7500%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 37500,
            actualAp: 3750,
            actualDps: 1323.75,
            magnification: "7500%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "416",
          enemyName: "ナミエちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAADAwMDAwMDAwMEAwMGBgYHBwcHBwcIBwcJCQkKCgoKCgoKCwwPDg0QEBAREA8RExMTEhIeHyAvGhMfISAgJCYjJCQfJykoJycsLSk0Ny42NjcvOjs/Pj1CQUFgNytDQ0NGTUFSTkxUUjc0XWYwZnJ1YT1taUVybkhNfINgeHV5c0yHcUtOiZGfgRqHi3SelVydlmK0nySooGZbtsWcoaS4rW/HtibMv3i+vr3e0j/ezoHq2Yf24oz+6I/q6upT2GY/AAAAQHRSTlMACM//FO2IxClhNnGhH9lPQP2xCVrqzf6agmb9xenY//+x/5H71/9zsOj+3/////7/uP/p//////3///7/////FJ6hHwAABSZJREFUWIWdV2tjqjgQLQUVecijKmpEMSJV5JHqNcYG7P//VztB726tV+Hu2A9qOSczZ17x5aXOFGsy7pu1jz0yqb/eM04X6v/Em8t9cQZjY9v6aw5JtbUFO1dWbPf7hfKXh4+3W/+KB4ZzMVsul5PmbphrVnJ6/s9KxgvO1k0ZpCUHzPmnldumBOb2AviBpwt70iyl6rZSvyxLVlzB5bkg+WaTLxoxmJX+JclJlJBCnJ3nnKZxfDht7AZ4ZSnwNCO7hGYZoyRPD3kcp1F04Gm/Hi8tL+cfj5/wlyQYTv46hL9SPJ8nG62eoL8X1Ueiz+Mu2x2PxzmOktMhzGNgiBsUlLQQwtHdMUuSJMqOxwzN51GclzxP002DCJQFL88svxAk0fEzCvEcx+xcMJb7DSJ4sXx+ZtnnMakIdrsoSNM0LiAXJRcRSLUuTOG0JNsllxA+dxGlhBW8JCUZSy+KUesBlBGFHGQRGGgQiaQUtGAJBw/MdqsGr85ARJ6Rz12WQRYyElHoJcJoEOX5zHh1OnUOkHOVBZHB3bHYRYSSCEcRRg5Cniz36mrRXOxFGkgEVURASVCAMYJznMQyWKtdL6ItWqFMoiSDVqCVAjg6zOcY8D29wWgy16KBOCeEQ+iiqZmHTzF2ZMe1a88H0xOYYdc+JtVc4xR7AI/oewM45GEKlXQhoAG9DOZAlp2k2DeoZLAJdFPlOeA8B0FWCILwo4JNngSgqOb1v+YWwHAwpCJwAJicOWRPduh5r749xGuuP9Qv48qu2hlc4FjgEQgSeXJrCHF9vD9ikEY4CJBbMahbyosC0peLg2WUkLJM5M66KMry49FI1GZAEPhVkUlqf5EUnBaVA47jIE49WX9fL/d8/EgEPRA20LXqAXvNRQyJIPAQJALLLU2S3mG1vD8YCF0EeGRoVleChoVCKgtSCA0hCRGDSdJTX94+CsbZ6M8+KO0hQkNYPFbb0DUxk85QiCRAKEryU8LYQFekyfuC7iePVFS7uiYmMghnWMstLEbiUc4Yjr9OlOaBP1JflI+PulLupyE0XFeyYSjwBDYkj/HpkBdfhwN2TWm5rFlMkhuGUPQdRdvyohRVXB5CjPPTCTZDPpLezJpeVDqOg7HT6prtWUA4ZUXB8zDGAT59HU7b+r2ovMpygD351erPEGJ5gEV5pGmIYvBiVT8KlFdIvRdC4fqQ1Si4Goz1MAzTVQMPOqJ4vdBBOLixXym8NvX3C9BAMDjyT4IAhUEwbbAXDUfAZecnvrJFg3HWvjgAT99T4AdVfGPdiwcA/wNBk3mmtSoXWq5/R4AHjW43oKLjyMOuf+cAajUhkIxKQ2N0j3c6jW673cv6mv30H0aD3gR/EaGn30WA5F6za2pVi67liyZA/x6PIK7XZpdUEEGW2+aoYhBgPDTcnqjPRhpeCXT4qaPrHYjDn45VSamUbaSBpGgihG71wbT6li3WFYTVgj43agtRstpDH8kt4yZa09JbLV01Wj1LrRuIPjQhRu5Nvq0ZCsS8VgzHnz1bruJ6d5F99t0B6VJSY6l64/efMUiuVz08vSUQrHiq9P078jvrVgSoe+OWe/VgdO/dnelwj0PBTdNJWk/gYOtWBOjpFc1ehb2BN2h/01CarLzB0J2NFbhADILAe1oL/XCgr0L9+xnKKphaimKKa4ViDQfe01qwN8P+6nZq2JtvnyVzHA6fdZSy8MEDQ9f19m8zwoHx+z18b4SBaz+ZClrbcKfD14fW6XRWK+P7DeMfm5HwhQGR9CMAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 400000,
            ap: 9000,
            dps: 6585.37,
            speed: 15,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 27000,
            actualDps: 19756.11,
            magnification: "300%",
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
                chance: 100
            },
            "slow": {
                chance: 40,
                duration_f: 200,
                duration_s: 6.67
            }
          }
        },
        {
          enemyId: "421",
          enemyName: "大天使エルファント",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 12000,
            dps: 7200.0,
            speed: 6,
            range: 320,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4590,
            freq: 50,
            foreswing: 29,
            backswing: 11,
            tba: 11
          },
          stageStats: {
            actualHp: 1800000,
            actualAp: 36000,
            actualDps: 21600.0,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "strengthen": {
                trigger_hp: 50,
                power: 100
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
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
    },
    {
      stageId: 9,
      stageName: "大感謝XP祭 Lv.MAX",
      baseHp: 780000,
      width: 4500,
      enemyLimit: 5,
      requiredCost: 150,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "10000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 13500,
            actualDps: 7232.22,
            magnification: "1800%",
            count: "1",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "342",
          enemyName: "なめ（黒）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUFBQUFBQUFBQUGBgYHBwcICAgKCgoMDAwMDAwqAAERERESEhIUExMVFRUWFhYYGBgaGhobGxsbGxscHBwcHBwdHR1iAAAfHx8iICAjIyMkJCQlJSVFFxcmJiYmJiYpKSkpKSkzMzM1NTU8PDycHyBGRkZOTk5ZV1pzc3OHh4eYmJiurq6+vr/Kysrd3d319fX///9zPNvuAAAAQHRSTlMAAwkRnu/n/1p43pH2Kx9sxNOGtjn/Q07/+Ob/WmV5qPH/lMOF/9z/ufeh/67T6v//2/////////////////8ALvR9dAAAAmNJREFUWIXtk113mkAQhldQUQOI4mLIirrWhhqjuyGAqED+/7/qzCL5aHt6QU/veM9RFph59p3Zgbz9o0gLaAEtoAW0gBbQAlpAC2gB/wXQSLpnE6J5VqdZOiGL47RDvAdXb5jfGfoACPzmgKk5IFrXHzctQeuu58Q+jKyG+URzzYXmHZ1mFWj2fPlIndVq93dAR9NRmtbpfHpmz4Knwy5k1KCMPYz/TMCwxXLz/AP1/LTZLoNgsZgvAnh2OO44ZFei6439e7buLTFMiDAUMoqTJInjaFcpDDnjIauy8c/f6L9s7W2/HYWQMopknJ3P5yw7ScYoiHHOARnHElPhvvIQfOxszZerwxENUojl7FRk2bUs8wh56AS8RLLeH6Dq6tw6awWrx7XPcKOQq1fsUpzS9Fqe0Y2Eijg4YQa9NeD+3qDwM/oqfbY5YG8oExFEh9RgQiZFWV6Sc5nWHcO+8/DmAACUfQdAD8xb2xfwFkVQHuwOYSICtydwf0rzMqoBAuqAOFrzqiJ6RF++xGmK9QnlQfUdlqfynCSXohDvrgFdHyCseQXok8E6xNNhahMoFm8wJC2zJEmzPAZnEfQAxD8B9q+vId65ZOaYxrvo+4wYcVHk18u1SJCghkFKGX5E7veqggG0YNx1Jj3TrL1VhijLLtc8zy8Cu4KT8Jlfy7zTq6m3Z4PxFDgPazhyZRnTuCpJSMFxkGAyYfkF0buzq4/Gti3LmnnzwfDOBYivrHA1kBH0FklwSLD8km5OhpauERuyuq7rOJPJaDTq9/s9KOcmH6Uu8CHgCtUDQdhoNHG70+H8JwQA8/hMhiHiAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 30000,
            ap: 1250,
            dps: 815.22,
            speed: 15,
            range: 170,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 46,
            foreswing: 27,
            backswing: 11,
            tba: 10
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 11250,
            actualDps: 7336.98,
            magnification: "900%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
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
            actualHp: 45000,
            actualAp: 4500,
            actualDps: 1588.5,
            magnification: "9000%",
            count: "9",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
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
          enemyId: "343",
          enemyName: "なめ（天使）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEEBAQHBwcJCQkLCwsPDw8REREUFBQhISEqKiowMDA5OTk8PDw+Pj5mTA9SUlJVVVVVVVVYWFheXl55YBppaWlubm5zc3N7e3u5dRODg4O5hA6IiIi+gx3GkA+WlpbKngHPlzLOoRakpKSpqanWp0bZqDitra3brlOysrLdrli5ubnftmTlwXTHx8frzILOzs7rz4Pz0YfU1NTe3t7//wH147nk5OTr6+vz8/P7+/v///////+xV9idAAAAQHRSTlMACOCwyRBWHZB09ipB4Kxa+TV6kunK9k2Q9qXYG7kM/icYzQU3Iv/eT67/j+th/nKY/8L+1ez//wHt/////wD/FQSmuAAAAjZJREFUWIXtk2uTmjAUhqWKaHFLC6uuKK6yihYxbkw30VzK//9XexK8dWs7A51+43F0FPI+nHMSGz//kUYtqAW1oBbUglpQC2pBLfgPgpIcXqbz+VIzn09fDmXj08V28/3KZruYlsvvjm+b9WI2m0wms9livXk7bsoJNsfj/nW3XWu2u9f9saQAWoDUjxN7cJVsAThMp/PZcLhczobfKgyxoDcOrOKjIl4KWR+H1QWJ17DCzKuab/ggcOPYqZq3AuTbvSyyK6Vt1wvGdBz1UfhXgWU7rsGxbcvS07L0Jc+PVoQLJZWUmf+HHiyn5/lhFK8McRxF4ZNGXyJcqRxQ+kVD917ae4ozyqVUDBNCAakRAq6YrEEJ/Z196AIe7YcxFsU6hhkFAU7kNXeOK0qMDd3spK3DGbusVkgKlLKcso9xfZMV5YhzCZbrRzdhjcAKpYgrLO8Ickw5JSJX42KOrh9Tmf9aKaU5S5BUSP3Wge4BmhCwFUbgQBz2RaNnW5BjnguEpER38mCQBDJS9EHghFiYQZugPAkUZgqniRCo8Bp1fnorRZKUKCmI/kM6EeGcC4O8gglPUII5UjfI8yM4SqkQfNU2EwiiVYYwoYxxA9PgBApIMU5vrReEWZf51unYunD2gjDWHjg9BpymiQaxC/yK/klXQbEHcMhtB3B77W7nS/9xNHp+hmSaIgCfOGnpGYySftcxBTgQ6zSbzVar9cnw+cJXw2AwGN0wGDwCDw+tZqfbhhLeAd+D8QOO9jL/AAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 1500.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 800,
            freq: 66,
            foreswing: 27,
            backswing: 11,
            tba: 20
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 19800,
            actualDps: 9000.0,
            magnification: "600%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
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
            actualHp: 45000,
            actualAp: 4500,
            actualDps: 1588.5,
            magnification: "9000%",
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
          enemyId: "422",
          enemyName: "レッドヘルクマッチョ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 400000,
            ap: 4400,
            dps: 3666.67,
            speed: 20,
            range: 300,
            rangeType: "範囲",
            kbLevel: 10,
            money: 2000,
            freq: 36,
            foreswing: 7,
            backswing: 6,
            tba: 15
          },
          stageStats: {
            actualHp: 1400000,
            actualAp: 15400,
            actualDps: 12833.34,
            magnification: "350%",
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
                chance: 100
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
            actualHp: 45000,
            actualAp: 4500,
            actualDps: 1588.5,
            magnification: "9000%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "411",
          enemyName: "ゴリ男氏",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgICAgIDAwMEBAQFBQUFBgYGBgcGBwcHBwcLDA0NDg8UGBoZGhsZJS0kJSckLS8iMTYlNDwnOT8oPUM6NzgXTXc7U1pGUlRJV1hbWFUWa6pQZGRIbXZpaGZWdHYZidtWfX1eenpciI19f32HhYNklpeLiYl3m5twoqOTl5SipKB7tbXahranpZ6Dw8KxsrCKz8y/vrmQ2Naz09fOy8WW49+d7ufb2NCh9u6i/PDl4dnr59/v6+H28/DEaIGgAAAAQHRSTlMAowuC4dGQt2vyHFg5JUhoWX3pmf6xMP7/wev/+pb//8f+//D//6///+z//////+7+/v7+////////////////c8w7VQAABUVJREFUWIWlV4t2ojAQbekbrS+0RayACIJAagJpeOP//9VOoFZB7bJn5/TQWpjLvXcmk3hz0z1E8R8evhR3T/+HIMyMsfB/AHTd+4fn+/1zgGDWXYQwm7cRxjhD4+4Ac9xG6LlZrLdRrwNIFM+aT/fXUfwPIkYoO0EQB+OlvjZNdz3sWolXPc3QtwpxrG+DKE3TGJuTQUcA0JBltQ/9OYrTrI4UzbsijLZZWiEMdJqdBO1qpDiP4PFg/qxHWSPovKORQwQUskBxs1Z07QZRj/nj2MAtgFjvSmGbcg5YDbK0SWHYDUAYr2mFYNAmhWjWsRmEnlKlYrfJINVfuwHc9CdmCrlp3ATorkFCaot9zSA+W6pXCKxj2/55ecrJQDLlxZ13ESFIQRaZLiyCugpRVdbYDeIsNTsMJ2G0howY2aZd9yIGOXFEDdM1DeXvAMJw67sRZ06DuFJg08iWp1PZNKZT+6/dKEqKRUIPxcfqq6788vJigCSMor8tCFHSLEuziO8G3w5kKcZInZoYpeAD2v5eSeFR0XgsNM9xawfSuoCRIZsRdTH5lYIwVLTFYgH5cLGsWkf89ZXyUgRGkOL4a/vbYBms85x5HGNRAZkI06/Pz884o7huCWiFX2x81ZMSIg+dRYXh+CQkjkO+wD7oarhiELO8buCMlXUUSehoXv0pcdw4i6vOjrAJMPpVA8a78hBFzpLi8KeHspgvqxiqEaTXAXrr/AhQlCdgXvX+QJUhDHoNoD9n5ZUI+VwIVIQRpaoqXREgkYvJnEpuB1Fs4JS6LqXXdpjeumgmFnU6/114tmrYKZrKU/VaL4ttAXlRoRR5BYANI8qQG0UUXT6uCGPSJFAyxtnnOadQ+NFhvNArM2nQEgCd4EFuyMo8AQgv5ksCeuDs8PAjIKkJnyD4pOQgwAQkRNWMpbZ0ZaINSdkGKJmT+2FZEu4NMVTThTX9Ll12sL8t91zvaT7wDoFE7vN/JupqtXqfvq9WF6eBsAQBedLIh/4LPeKVrOZmcoCPj4/Vxb1ptLuUX5aO59QKytL/AIB3YHAJgDuYJ0Uzv8j3+1CzagVgiLp6t7zJx8elYQAEmvIrgP2+SHyrVgB8DNnJc2U4vGAiOFCc5cP7izIJLXLoT8+DRy5Ps8GuPH8/vyaOY3mHW6HPL6NrJWimwmXPdcN89w83Eh+6JLk0zQbb03dXS+fbz4IxLfzR5ENZis15Dd70I4ECXgqu/ziSk8XPzcLnf+7OOvltc9QPrjnYJXU+85Iy0bQjN8LJkLYJTQMSJ4DNy68mo2eR0let482QF5S122AUnuQzfq5LY1T1DnMYU1XtWB7G/UyWTRNe9cPohh+iTGBo81MxcOCzxFJl7difjDdCG2DM6mQYH8SazBTbRjB6UgT6YQbIJrYOgz5nlgfLy5KEcwKwhxBHs9ZKEMOx3kUBjTEgkIUaRYYfsiRJmO85sM95ntf0YAS+JDtd0SzH383W9VEqohS2UhfyMTgq80TYIZPSd1i+b5oIJch3y4EoOZ5Plq9StZlHOOCj15zKLsaurSUe2/NIfLYv2KaxGEQ92QxA09ji+TfiEL5fwCaIbFW1EVKksYSoQfwwJMS3ZCDiKs2J+rrdvFVKLLKpOgy+4fAzMszOAHaypdDfYhxA0CgwXRpF29b3pv78rbZiu/nuUKGv89NkRk34tR2Iy+orD1hrY7joo9ZK6NdHPmE8f+49P9/d3T0+Pt5ODBdhLE8N13i4fZrIhm0b8Mk2lNlzX2wiCPVH4fnx9unp4eH+/v7lcsCdh4enp9u73hHgD0BKpTs6Mdr1AAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 200000,
            ap: 2025,
            dps: 3796.88,
            speed: 15,
            range: 225,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1800,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 2200000,
            actualAp: 22275,
            actualDps: 41765.68,
            magnification: "1100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 50,
                distance: 500,
                duration_f: 10,
                duration_s: 0.33
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
            actualHp: 45000,
            actualAp: 4500,
            actualDps: 1588.5,
            magnification: "9000%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 45000,
            actualAp: 4500,
            actualDps: 1588.5,
            magnification: "9000%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 45000,
            actualAp: 4500,
            actualDps: 1588.5,
            magnification: "9000%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "416",
          enemyName: "ナミエちゃん",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 400000,
            ap: 9000,
            dps: 6585.37,
            speed: 15,
            range: 270,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 1600000,
            actualAp: 36000,
            actualDps: 26341.48,
            magnification: "400%",
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
                chance: 100
            },
            "slow": {
                chance: 40,
                duration_f: 200,
                duration_s: 6.67
            }
          }
        },
        {
          enemyId: "421",
          enemyName: "大天使エルファント",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 600000,
            ap: 12000,
            dps: 7200.0,
            speed: 6,
            range: 320,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4590,
            freq: 50,
            foreswing: 29,
            backswing: 11,
            tba: 11
          },
          stageStats: {
            actualHp: 2400000,
            actualAp: 48000,
            actualDps: 28800.0,
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
            "strengthen": {
                trigger_hp: 50,
                power: 100
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
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

export default e24049Data;

