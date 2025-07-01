// Stage 1033 Data
import type { StageData } from '../../app/stage/types';

export const e1033Data: StageData = {
  eventId: 1033,
  eventName: "月イベントオールスターズ スペシャル記念！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 33,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "スペシャル感謝！超激ムズ",
      baseHp: 881000,
      width: 5600,
      enemyLimit: 12,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "1000000",
          times: "0",
          limitText: "0"
        }],
      enemies: [
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
            actualHp: 2160,
            actualAp: 192,
            actualDps: 122.64,
            magnification: "2400%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 1440,
            actualDps: 2700.0,
            magnification: "1800%",
            count: "0",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
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
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
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
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.0-10.0s",
            delayFrames: "180-300f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 35000,
            actualAp: 600,
            actualDps: 1125.0,
            magnification: "100%",
            count: "3",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "084",
          enemyName: "高校教師",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMEBAQFBQUHBwcICAgJCQkJCQkJCQkMDAwMDAwPDw8RERESEhIUFBQYGBgaGhomJiYnJycnJycsLCwtLS0tLS0xMTE7Ozs8PDw/Pz9DQ0NFRUVHR0dJSUlNTU1SUlJXV1ddXV1hYWFkZGRpaWlsbGxwcHBzc3N7e3uCgoKHh4eJiYmUlJSZmZmcnJygoKCpqam2trbBwcHMzMzZ2dnm5ubw8PD5+fn///+zH5CrAAAAQHRSTlMABwyq5P+6HPXOJRQ4V41wfJwsZEf/V2uQt0Hj/36Mnslu/K/W5b3+yf7f/9Lq////4v//8f///f7//v7/////4OoCXQAABDZJREFUWIWlVotyqjAQFaqigtX6tmq1+MAYSDAxhPDy///qBlHbTm8Rhx1HGIY9bM452U2l8jsUo/Wfp0+E0XxTSwH0a3W9FEC3Vi9XwWjWUUoBjLeDUvmVD6dXKl9ZHsrJqOz25UTQ97tyIuj2upwIPeejVH7l3VmUBRiXA/h0Svro0zF+PXuK1cns7iPVGA16vZ4x6j/hDGW90S5XRTcmzul0lLEZPVGCejGi1p9MdlsTQcT80/6Z/NRHaqU1daDn+9AkDJrTgdYatAu7s2UvFXVCqSeEoCbwA+7sd/ZhUbiI1Ii9g8DCF8KljIggDAO+L77DUx+1He4GVAgkfxLHp6tBcRbenZEEoEi4gYBBZAEIzKnxBIupEY0DhwL4ArOY+6Fg9scTCGlDU5ee5WHkcyi5TM7nWNgLrSjApaEZGxMQ0wQIWF4Sheck4uvfBv9fKL3dXn5LfSMBtQAlNEzOgsgikmBfhMj3xc7afqrKyInOSShimSlzs0toPzaksgCU08NgYEfnH3FFeFhDz5YVJ8GmyYIgjC5Z2X+SIewf8KB+BPJdQSF0MXKJVCCMOfWFf3JOYQoR7vIN2bPl9wWAEEEAEJIYhPp8uxiPeu3lMZAQYpnbGEanJGQWIpSlQQmGELt4eslRjY9jECencR4NHUygBbx7MEYsi22uZUsI2+eTnG2tTSFhGHqU3RAoxEjw+0eV3mKSNzb1JfEYcJl7A2CUyhXR1VeSkt9WRsAjFqWYfVsFgFa1nZv1LVoriqBHsPctCOKNwmcu5RUA10PkRuGFBoTnL4X7oTEzKQM3AJpdXLM4gPJqMmplKrA7F3hWbCen0bY8Aq55DNMrD3hauJu0Hc9FN/6we5ficu5TjccDrg+/0jzpqZuhNnJg691Nng2z6ECGyV1B624IstS1iQOrD0+gHXhV78KidcfynO4UWfN5tf0AoQs8Rm4QDNzpYNSE5pCJeTNfEP0NeVLGOwlfa/DQfFhDER/W83aT0t9SOQ4kQJZIzZunPIaGtdqQxHT4kiOpsUKEEN+99JM0z0JZutzX85qMIY9w4/VvKfTBlJAgSnsRdtMA1gWIIsStFKA2F5FV7eRwIAHiJInjKIsQyjVQDHkUZwA10we1lz/ztfYMhT/mAccyPZ1OoTXMEIaN+t9CGCseX4fINUK5iLShJ8y9ltB4y5FB6Tsiir8DJAGlckgl/nyYVVDt5u4HfZ2O0x+LiF3ocRdeF1Dt5O8GdR3GPyqQ4bvQnOEMoPnIyRIgK9wPIylFNs6gy6fNS3794TlF38XpPD0tx8u9vV+tj+mslbTYHYnQeHl8UmvZKePHsV5RNU3T9cFayiIf8XG72ngt0JYGJ/l6sPwiSlsc05NCuNQ7nQLnbaXLkyQ59bWvaHWcME7Cla4UOaYp3Y3jOLN6vd7MQt69NGfbw+pv9f4BbCHvZEVG2J8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 657,
            dps: 821.25,
            speed: 11,
            range: 351,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 1314,
            actualDps: 1642.5,
            magnification: "200%",
            count: "3",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "60.0-60.0s",
            delayFrames: "1,800-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "084",
          enemyName: "高校教師",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMEBAQFBQUHBwcICAgJCQkJCQkJCQkMDAwMDAwPDw8RERESEhIUFBQYGBgaGhomJiYnJycnJycsLCwtLS0tLS0xMTE7Ozs8PDw/Pz9DQ0NFRUVHR0dJSUlNTU1SUlJXV1ddXV1hYWFkZGRpaWlsbGxwcHBzc3N7e3uCgoKHh4eJiYmUlJSZmZmcnJygoKCpqam2trbBwcHMzMzZ2dnm5ubw8PD5+fn///+zH5CrAAAAQHRSTlMABwyq5P+6HPXOJRQ4V41wfJwsZEf/V2uQt0Hj/36Mnslu/K/W5b3+yf7f/9Lq////4v//8f///f7//v7/////4OoCXQAABDZJREFUWIWlVotyqjAQFaqigtX6tmq1+MAYSDAxhPDy///qBlHbTm8Rhx1HGIY9bM452U2l8jsUo/Wfp0+E0XxTSwH0a3W9FEC3Vi9XwWjWUUoBjLeDUvmVD6dXKl9ZHsrJqOz25UTQ97tyIuj2upwIPeejVH7l3VmUBRiXA/h0Svro0zF+PXuK1cns7iPVGA16vZ4x6j/hDGW90S5XRTcmzul0lLEZPVGCejGi1p9MdlsTQcT80/6Z/NRHaqU1daDn+9AkDJrTgdYatAu7s2UvFXVCqSeEoCbwA+7sd/ZhUbiI1Ii9g8DCF8KljIggDAO+L77DUx+1He4GVAgkfxLHp6tBcRbenZEEoEi4gYBBZAEIzKnxBIupEY0DhwL4ArOY+6Fg9scTCGlDU5ee5WHkcyi5TM7nWNgLrSjApaEZGxMQ0wQIWF4Sheck4uvfBv9fKL3dXn5LfSMBtQAlNEzOgsgikmBfhMj3xc7afqrKyInOSShimSlzs0toPzaksgCU08NgYEfnH3FFeFhDz5YVJ8GmyYIgjC5Z2X+SIewf8KB+BPJdQSF0MXKJVCCMOfWFf3JOYQoR7vIN2bPl9wWAEEEAEJIYhPp8uxiPeu3lMZAQYpnbGEanJGQWIpSlQQmGELt4eslRjY9jECencR4NHUygBbx7MEYsi22uZUsI2+eTnG2tTSFhGHqU3RAoxEjw+0eV3mKSNzb1JfEYcJl7A2CUyhXR1VeSkt9WRsAjFqWYfVsFgFa1nZv1LVoriqBHsPctCOKNwmcu5RUA10PkRuGFBoTnL4X7oTEzKQM3AJpdXLM4gPJqMmplKrA7F3hWbCen0bY8Aq55DNMrD3hauJu0Hc9FN/6we5ficu5TjccDrg+/0jzpqZuhNnJg691Nng2z6ECGyV1B624IstS1iQOrD0+gHXhV78KidcfynO4UWfN5tf0AoQs8Rm4QDNzpYNSE5pCJeTNfEP0NeVLGOwlfa/DQfFhDER/W83aT0t9SOQ4kQJZIzZunPIaGtdqQxHT4kiOpsUKEEN+99JM0z0JZutzX85qMIY9w4/VvKfTBlJAgSnsRdtMA1gWIIsStFKA2F5FV7eRwIAHiJInjKIsQyjVQDHkUZwA10we1lz/ztfYMhT/mAccyPZ1OoTXMEIaN+t9CGCseX4fINUK5iLShJ8y9ltB4y5FB6Tsiir8DJAGlckgl/nyYVVDt5u4HfZ2O0x+LiF3ocRdeF1Dt5O8GdR3GPyqQ4bvQnOEMoPnIyRIgK9wPIylFNs6gy6fNS3794TlF38XpPD0tx8u9vV+tj+mslbTYHYnQeHl8UmvZKePHsV5RNU3T9cFayiIf8XG72ngt0JYGJ/l6sPwiSlsc05NCuNQ7nQLnbaXLkyQ59bWvaHWcME7Cla4UOaYp3Y3jOLN6vd7MQt69NGfbw+pv9f4BbCHvZEVG2J8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 657,
            dps: 821.25,
            speed: 11,
            range: 351,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 1314,
            actualDps: 1642.5,
            magnification: "200%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 35000,
            actualAp: 600,
            actualDps: 1125.0,
            magnification: "100%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 35000,
            actualAp: 600,
            actualDps: 1125.0,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "085",
          enemyName: "武者わんこ",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 135400,
            ap: 2555,
            dps: 8516.67,
            speed: 8,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 9,
            foreswing: 6,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 270800,
            actualAp: 5110,
            actualDps: 17033.34,
            magnification: "200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "085",
          enemyName: "武者わんこ",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 135400,
            ap: 2555,
            dps: 8516.67,
            speed: 8,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 9,
            foreswing: 6,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 270800,
            actualAp: 5110,
            actualDps: 17033.34,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-6.0s",
            delayFrames: "120-180f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "50%",
            isBoss: false
          }
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "50%",
            isBoss: false
          }
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "50%",
            isBoss: false
          }
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "50%",
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
            actualHp: 2160,
            actualAp: 192,
            actualDps: 122.64,
            magnification: "2400%",
            count: "8",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "50%",
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
            actualHp: 2160,
            actualAp: 192,
            actualDps: 122.64,
            magnification: "2400%",
            count: "8",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "50%",
            isBoss: false
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "100.0-100.0s",
            delayFrames: "3,000-3,000f",
            baseHpRatio: "50%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e1033Data;

