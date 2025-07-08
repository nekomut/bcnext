// Stage 1324 Data
import type { StageData } from '../../app/stage/types';

export const e1324Data: StageData = {
  eventId: 1324,
  eventName: "バースデープレゼント!",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 324,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "祝！10周年！！",
      baseHp: 1000,
      width: 4500,
      enemyLimit: 5,
      requiredCost: 10,
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
          },
          abilities: {}
        },
        {
          enemyId: "625",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAABAQIEAQEIAAADAwMEAwMEBQUFBAcTAQIHBwcLCAwOBwwkAgAQDhATDxYzDgYaHBcdGxskJSMyJC9JHxQ6Iys0JjB8DQJALitILyetBQF1KxJfPzxITUJYST3UFQFLTVOtKBVjQ2ZfVD96TSdtT02ZPy+jOyjOMQtiWldsWWHzJwCNVCl0WltBhB27QFSCYl+ZZyPvQwZoc4BweVVkfIGsY1gyjcJ0hUmJc2zYYAl+eIOveCWpYL/8WA2PgluRfnWMgnxvduewe2KBnjSrjip9jqafhYP+cAVrp5mYk5WhlHnRlxTTg33MdN6yk4z/iAGQt03Gnkumn6K5oZC2r1DqffHbriWHtuq5q63NqJ3Ntl+f0lvWvTT5thSG7F7IvbWnyur5ySPZuOnLysb/zTy04puJ8cD+1yfh0an/z2j111/a1M//0niy/YD/5zb/4Vm18t7/34v/7UHm3dv+36L/4pDj9Ibv5+L//lP27+ri/P7//qf8+fP///4gmfKrAAAAgHRSTlMA0hXv/+MkCjuhvIRm/y9N/nb/W4v/xp///3P+/v+DUv///9e5///Q//+XCP/////9//3//tbE///////r////Sf+L//////7////+1P//+////////+n//////v//lP////3////B/////Hb//1P/5Jf/L////xD+/////wH//4pWBZQAAAYMSURBVFiFnVf9V9pIFE1tRKwi8QMVJSoIEa2MgqA1Qm1alZSgTSFUSWxpjKmFknaLxhrDZv71fdDd3/ZAyuOcIUDuzbx5990ZCKJHLGdew+j197qnRzzfuHgsEpOZZjOzMDIAfqF4qj0uzGh3j/W75swABJla7e5uNVd71C60WnQAgle51Id67qL+YWE8p6UGyeHVRLZ+UtOWCWKjduEdgIAYKWsnzTJczGl3A1XCf6Hlms1lwpN6zAyCJ7yXWuryLhtN1S+HBiIYKtdOy/W6Vr8bHwhPEFlNY05qpxcbA6FH/N7J18uraME75PEPUkXvu/PoBLFrE8TMu3eDVNF/fn7+cqaoT2avrqqDVHHo/PrarBZu8la73YI0/hRO+CWMcTVtF0yM1dWG8UcMQ0VlluHbrdaPAid8/dqSClfm7yx+uSNYwlL+Ol/9+uNGOmmWPv/4aLaqnYb82yWemKlW2zjfeiix6LQe238o6dhxLv3E7Td3+OlCC+N2obSP0uFYgqZjyZKDGx/GiJ9fXE6gYNjtapjmHTu9tZ9WUbn00IB2eP7pp8sUPKjSypdTsqkKWyVDt2X28sMI4c3mX/XH/uqu0/jxzfEjkrFjMBYWsK7Ys6DNQmu2P8H37923MHvMJWVdSPOcaqhpscJtEAtmdro/wZffac4qimg5FidZUlB1dBkpeLV65cYWvnzqjBPRioqxZYMYscGCFq2K6bjriFfZVRBt0dFV1camrGIHO7YJFBVrzg2emL1+OUEQ8HiODCQl1sdgLJs2nWR528UCQMwkFbhxF6ukjySpYDComkGGDwZ8vOnSFLyWAmUU6ABN0wybRMEAYlAyySJ3GUCMGxvE2uJTOknvxSMR0kf5SFmnSGrNtS1FDf/amYBISj1LKDIbpDhV5uhYY9elJSwVX8pGG8u8oydh9W1JwnYFTMXGUlcHt7e98RNQeYAZJnYEuDBVCzumhQ0HOLpJfOvT0xOGjQ0kS7LIiI6uO6AIUFSFx3ol03X3L/16OspxvCKq9wrPJYMMZE9LAk8jieE7QvAsFb/3IRhBe9b9vSpWKuKRIu/L97WT07J+vCXJHYKx83fLfQiIVUXRLiWprGnaw+ePn2+a9WajVPpYmuz8OHd+3nennOTLF/LNj4faSePjvpjYF/egm8Ujfm7BQ3jNioudNvMovEHH+4IOi7G3ze1FOFlRZBEdrvmL173l9Des0rQ3Wn7zBlWSkswrDdnClmhYEmtbOnjL9UIv+K9bIIha4nY8ggzeMHUOdVzB6riCBFpyLNy7Ib533Khon50dxRPVfAMQqq4btimDOcIHA983lnoS/PwLhqggmY6hyvCSQFKWxbOI5LHJ22ygdl/sSXBbzCwRqzpMGB4IYLCUIM1RpM9HCTQZoHw5p89hpWhnPNADBmSt0kwQOpmiKJqBoBmaQmp4ro+tRgs30EBhakqSfb4AzTJMEtwE/AQhpAqxx4e+De2Ntm6Ued98gKERwyA60JlDKBCIk0FHalyu9cNDTGaT6/PqERWkKJ/PR3Ms7Tvbow55Vag0z7YnXZy2dtuVI0FlKdaQGAE2BosWbBEZWL7kBNPuf+Lz6FABHQwEFlLXwU2wwXcG21Rt08G9y9iJIQHEh4FF7+xLhtEZWNlSFJMFHqu3kLoxLbEGVtNtuF0AJamsKKMAEwilqZAsZ1yswZAVo2R2PsFxe4srcT6xvhMPpfS2pesx6ux1fzzhKYYW5xdX5hfnAbuzvnNwkki2QZcmbjOoZy/+F89Ckfj8Vmzl6CqwHY+9oLe2TGzq0FW4Ouzq2D8ZD79YjEU21yOb29sH6bcHLPSGFJYdXBlzgyeI0UhoZWVlc3NzZ2fn8PDt+1wbWiNv4NaBu39/I7OLi138Zhf/9v0B17UUfW/HHYFfEhORyL9T6BC8P0iJSuUovnOAXO2vI9Mbu2kUhvNlKBRLpBKJVC4Xi8USR3w2O+FqCoR3LKvm8+lwIZ9Oh/PdQZCk8OyYyz8u4yQ5FYTXFBsOh6cQDOQUfEOST9we+T3e8bHRZ8+eDA8/7cTw8JNno6Nj497/U8E/+FiyRzhnkD0AAAAASUVORK5CYII=",
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

export default e1324Data;

