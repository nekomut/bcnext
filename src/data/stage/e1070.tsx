// Stage 1070 Data
import type { StageData } from '../../app/stage/types';

export const e1070Data: StageData = {
  eventId: 1070,
  eventName: "月イベントオールスターズ ワンダフル記念！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 70,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "ワンダフル制覇！ 超激ムズ",
      baseHp: 882000,
      width: 4200,
      enemyLimit: 4,
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
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-4.0s",
            delayFrames: "100-120f",
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
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "102",
          enemyName: "ハシル君",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 600,
            dps: 947.37,
            speed: 25,
            range: 170,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 19,
            foreswing: 12,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 1800,
            actualDps: 2842.11,
            magnification: "300%",
            count: "5",
            spawnTime: "20.7s",
            spawnTimeFrames: "620f",
            delay: "2.0-3.3s",
            delayFrames: "60-100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "101",
          enemyName: "閻魔大王",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 112590,
            ap: 6000,
            dps: 734.69,
            speed: 3,
            range: 380,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4590,
            freq: 245,
            foreswing: 6,
            backswing: 11,
            tba: 120
          },
          stageStats: {
            actualHp: 450360,
            actualAp: 24000,
            actualDps: 2938.76,
            magnification: "400%",
            count: "1",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 100000,
            actualAp: 2000,
            actualDps: 1935.5,
            magnification: "1000%",
            count: "0",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "6.0-18.0s",
            delayFrames: "180-540f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 1050000,
            actualAp: 24000,
            actualDps: 24000.0,
            magnification: "500%",
            count: "1",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "99%",
            isBoss: true
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
            actualHp: 100000,
            actualAp: 2000,
            actualDps: 1935.5,
            magnification: "1000%",
            count: "4",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "0.1-0.3s",
            delayFrames: "2-10f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "102",
          enemyName: "ハシル君",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 600,
            dps: 947.37,
            speed: 25,
            range: 170,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 19,
            foreswing: 12,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 1800,
            actualDps: 2842.11,
            magnification: "300%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "40.0-53.3s",
            delayFrames: "1,200-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "101",
          enemyName: "閻魔大王",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 112590,
            ap: 6000,
            dps: 734.69,
            speed: 3,
            range: 380,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4590,
            freq: 245,
            foreswing: 6,
            backswing: 11,
            tba: 120
          },
          stageStats: {
            actualHp: 450360,
            actualAp: 24000,
            actualDps: 2938.76,
            magnification: "400%",
            count: "1",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "108",
          enemyName: "バトルクマッチョ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 83000,
            ap: 8300,
            dps: 3233.77,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 77,
            foreswing: 18,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 332000,
            actualAp: 33200,
            actualDps: 12935.08,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "99%",
            isBoss: true
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
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1070Data;

