// Stage 1034 Data
import type { StageData } from '../../app/stage/types';

export const e1034Data: StageData = {
  eventId: 1034,
  eventName: "月イベントオールスターズ ウルトラ記念！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 34,
  stages: [
    {
      stageId: 0,
      stageName: "ウルトラ重圧！超激ムズ",
      baseHp: 881000,
      width: 4600,
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
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "062",
          enemyName: "ペ課長",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1200,
            dps: 1894.74,
            speed: 11,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 19,
            foreswing: 6,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1200,
            actualDps: 1894.74,
            magnification: "100%",
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "062",
          enemyName: "ペ課長",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgIDAwMDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUHBwcHBwcPDw8ZGRkbGxsdHR0dHR0hISEpKSkpKSkrKyswMDA1NTVAQEBFRUVKSkpRUVFZWVljY2NqampycnJ6enqEhISOjo6ZmZmjo6Opqamurq6ysrK5ubnDw8POzs7b29vm5ubt7e309PT7+/v///////82N9agAAAAQHRSTlMABw0lNxkvQU/O+WFpiNn/cX6XucLkWaDup6//vdjH9v8G4//w///y/////////////////////////////wD/mjFtRgAABwZJREFUWIWll2t7ojoQgFcQxQvWuyi2ckqJSYBAuCOw/v9/dSYobbfing9n1j7PBpg3k7kl+fX7f8qv37/+W6SBut1uVXUoSz9f/R3Qg58kyaq2mm02m9lovV+ocq+lKr3/APT6Q0WeLPermf7Sij7aT5Tb2+1C+QugJw8UZbGaL2djUDNevmQ802TxwXC1kv8CkKar3XSvb3RQNpCLviHGGw2mHuz0kdqXn1ugjsa63sxuUR5y124RhmnMppKi6S/6ajXpPfWB+EKISfwwTpKIe8Q2jQZon1bD6axZzUR5asFgsbkBnDBpJA4D36PIMi2M3g+jcePS9eIZQLl5TxBYlLQShzwQQsb3l/rhKUBrQ2dYfpzEyRckiTk27jFdDp8CFidk3gAGYmH8TT30aeOM8WypKs+c2FPfHM4geAaIaVLG43YRjApnGmD9VqTiE4C8O/M4DhzTMC3LMCxEfUGIY+5SxxZU4zRv6uIJQH1lcZxEro1YxMwXk2IcCELoulHqmS+GbZ/28nOAtDhzmM/HLM0DG+y1PULgScScOAYPWG7g2zP1eTENDg7EjlM3LTJOwZkG9pAbJZywABkmCSKw7qQ9L6btq8OjmGGeZcLrEDWDEBREjPjIsL0QlpcE9nrwDCBBDDH1qJNmKQBC7tmGiWzXp+BBCokkUivEG+HGToC8J8yl2HKFfoC9KAqoZVk2sinzw5CiAAAROe2UJ4DB0Y0h9bFwRMxsJ4rjKHAs5GAK+RB5mAsLiHl4BhhCEEHVpaKOQl8kURwzC2GEHBiETVYFGL3J3YDe5ENMEfskiD9zOHJMxAIfYz9KxNPYw85bvxugaOeoyRrqhm0Zxb6NwrIqEwd5ECBwDXHZK2RCJ2BH4psSYWHSIKIA27y8Xq91wTB2gjCgDg/eJ90AGXzYTAt1d5sO6go3+tdrVQAXEwzO4O/TbkC/8WGz8MChLmPQzZy0vFZ5ea2zrCpzH9suAD4WnYCe+h58tSDfsUwT+UV9vV6CvK7TtKrrMvUwZPVZ6wRIi4/gs4tBAWOTxpeqLMsiy4siz9KsyS+CyMdS6gIo+xP2uGhCYiGcIpZBSTHXdagQ0gi2bdM01/0uwGBtYxsRL2gYruWBLzFxmB8EnIcRGAAmuNBqTOu06Gppw1dEKUY2dCEeRS4UAfHj4lKWVVWLf3VVZh50dxujk9YFkFemjTChgBDzMmr5BajV4MZaaOcRQyZ8gixjpHYBJE1H2Ibaw5D7kDUuRm6Y5Tl4sMijQOxQQt3GVJRjJ+Aj4GIXwsIQLBZjCxpuBqAJbISgUQf2oXNzVQ5UlEIEu5DvEqEoLKEeY8z3fRewSCRznHBrpHYB+m9tIiaiKzBHQBBxgyTPQxdMdxhvio1b+rzDB73JVyLeIJCOYAlY7YH3EEtFMiUNwFh27M497Rx+qadJBiGoijQgoqnZFrtAKMo8BQS3rcPgEaDs2w1dTJPml7qpwtK3MCGURCKcVyCIvozeOjZXeeU0K0xSMUtW3vSvdQqOJMTJm3FdZqLH0PftI2DY+jCDWdL7/CAXHyJos/LOK9LYQ+xj+ghQX/3b/HkYxHnZ6l/rCBICtYDrJYtczM/zR8D2BkiyjHrfDKhrLrLhvoRrXeWRQyOiPQWkBcdBXn0CriVDopiT1idFRN2ELh8AbRrkOUxQfOlfL9DHHQeH9f1ZEWE/o7tHwLQBZAVH/rcVgILbAHjVjjnmufN4yLoB0jzFTph+uRAUnB+AAKeFu3qyhCxnsIP+CXCJAATts4Kh54C0SGFP/gHwBID4l0+LTJZ7jwCIApRd4dmwPXYBvKId080H99adiQQe/DjBsSy9PAJofh/n5+X+jDssgFTOo/NyBTXZAcAkv+dV9L4dHk8dURiusXdeDibvfvxHGC8MokAxu0Or4NiXJqOHRFLU5eZFdNvBioQN4PYDjRTsxzS7My8OdFRp/q0W/vmn15P62kHbw+Vq3pPAhKQQ3bysbpQqoYhEYlDDLzvP4Zgoyy1AGmy3k8l0NdtPFrv5bjlQxGk3g88rzvOmKcCWyqLLpcjTvIKnb8NG8Q5QJquNDjIe6zMwYDbaaUM4b8ewhopjcWmJIjju+U23J3BUKJyl8gXoyVp7vWhuVfD/sa4p83cox2udn0f749vb2/F4OOx3y+NHACtLxeGiBUjD3eblp8ApEo6L0aUGY7dyfzjs9wcDWZaV4dHN65IdB79agDJd6+Je8Ye+vh+IS4ObVcV5ofwRZ/UIB9DzXPoEqOvx7WYi/oz2ctmX4M6rwSKCN1VWvos8WZ/xsd/7BMif1yO4E8LtAtR3k+F2ri33a91y7c3oS9br9eqwGun6ajr49EFveLi/hhv26+tmtlMVqT/Vlrv9YT2DK/dPwGG/3y/n/dsafv8L4sTYpWGVkigAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1200,
            dps: 1894.74,
            speed: 11,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 19,
            foreswing: 6,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1200,
            actualDps: 1894.74,
            magnification: "100%",
            count: "4",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "062",
          enemyName: "ペ課長",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgIDAwMDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUHBwcHBwcPDw8ZGRkbGxsdHR0dHR0hISEpKSkpKSkrKyswMDA1NTVAQEBFRUVKSkpRUVFZWVljY2NqampycnJ6enqEhISOjo6ZmZmjo6Opqamurq6ysrK5ubnDw8POzs7b29vm5ubt7e309PT7+/v///////82N9agAAAAQHRSTlMABw0lNxkvQU/O+WFpiNn/cX6XucLkWaDup6//vdjH9v8G4//w///y/////////////////////////////wD/mjFtRgAABwZJREFUWIWll2t7ojoQgFcQxQvWuyi2ckqJSYBAuCOw/v9/dSYobbfing9n1j7PBpg3k7kl+fX7f8qv37/+W6SBut1uVXUoSz9f/R3Qg58kyaq2mm02m9lovV+ocq+lKr3/APT6Q0WeLPermf7Sij7aT5Tb2+1C+QugJw8UZbGaL2djUDNevmQ802TxwXC1kv8CkKar3XSvb3RQNpCLviHGGw2mHuz0kdqXn1ugjsa63sxuUR5y124RhmnMppKi6S/6ajXpPfWB+EKISfwwTpKIe8Q2jQZon1bD6axZzUR5asFgsbkBnDBpJA4D36PIMi2M3g+jcePS9eIZQLl5TxBYlLQShzwQQsb3l/rhKUBrQ2dYfpzEyRckiTk27jFdDp8CFidk3gAGYmH8TT30aeOM8WypKs+c2FPfHM4geAaIaVLG43YRjApnGmD9VqTiE4C8O/M4DhzTMC3LMCxEfUGIY+5SxxZU4zRv6uIJQH1lcZxEro1YxMwXk2IcCELoulHqmS+GbZ/28nOAtDhzmM/HLM0DG+y1PULgScScOAYPWG7g2zP1eTENDg7EjlM3LTJOwZkG9pAbJZywABkmCSKw7qQ9L6btq8OjmGGeZcLrEDWDEBREjPjIsL0QlpcE9nrwDCBBDDH1qJNmKQBC7tmGiWzXp+BBCokkUivEG+HGToC8J8yl2HKFfoC9KAqoZVk2sinzw5CiAAAROe2UJ4DB0Y0h9bFwRMxsJ4rjKHAs5GAK+RB5mAsLiHl4BhhCEEHVpaKOQl8kURwzC2GEHBiETVYFGL3J3YDe5ENMEfskiD9zOHJMxAIfYz9KxNPYw85bvxugaOeoyRrqhm0Zxb6NwrIqEwd5ECBwDXHZK2RCJ2BH4psSYWHSIKIA27y8Xq91wTB2gjCgDg/eJ90AGXzYTAt1d5sO6go3+tdrVQAXEwzO4O/TbkC/8WGz8MChLmPQzZy0vFZ5ea2zrCpzH9suAD4WnYCe+h58tSDfsUwT+UV9vV6CvK7TtKrrMvUwZPVZ6wRIi4/gs4tBAWOTxpeqLMsiy4siz9KsyS+CyMdS6gIo+xP2uGhCYiGcIpZBSTHXdagQ0gi2bdM01/0uwGBtYxsRL2gYruWBLzFxmB8EnIcRGAAmuNBqTOu06Gppw1dEKUY2dCEeRS4UAfHj4lKWVVWLf3VVZh50dxujk9YFkFemjTChgBDzMmr5BajV4MZaaOcRQyZ8gixjpHYBJE1H2Ibaw5D7kDUuRm6Y5Tl4sMijQOxQQt3GVJRjJ+Aj4GIXwsIQLBZjCxpuBqAJbISgUQf2oXNzVQ5UlEIEu5DvEqEoLKEeY8z3fRewSCRznHBrpHYB+m9tIiaiKzBHQBBxgyTPQxdMdxhvio1b+rzDB73JVyLeIJCOYAlY7YH3EEtFMiUNwFh27M497Rx+qadJBiGoijQgoqnZFrtAKMo8BQS3rcPgEaDs2w1dTJPml7qpwtK3MCGURCKcVyCIvozeOjZXeeU0K0xSMUtW3vSvdQqOJMTJm3FdZqLH0PftI2DY+jCDWdL7/CAXHyJos/LOK9LYQ+xj+ghQX/3b/HkYxHnZ6l/rCBICtYDrJYtczM/zR8D2BkiyjHrfDKhrLrLhvoRrXeWRQyOiPQWkBcdBXn0CriVDopiT1idFRN2ELh8AbRrkOUxQfOlfL9DHHQeH9f1ZEWE/o7tHwLQBZAVH/rcVgILbAHjVjjnmufN4yLoB0jzFTph+uRAUnB+AAKeFu3qyhCxnsIP+CXCJAATts4Kh54C0SGFP/gHwBID4l0+LTJZ7jwCIApRd4dmwPXYBvKId080H99adiQQe/DjBsSy9PAJofh/n5+X+jDssgFTOo/NyBTXZAcAkv+dV9L4dHk8dURiusXdeDibvfvxHGC8MokAxu0Or4NiXJqOHRFLU5eZFdNvBioQN4PYDjRTsxzS7My8OdFRp/q0W/vmn15P62kHbw+Vq3pPAhKQQ3bysbpQqoYhEYlDDLzvP4Zgoyy1AGmy3k8l0NdtPFrv5bjlQxGk3g88rzvOmKcCWyqLLpcjTvIKnb8NG8Q5QJquNDjIe6zMwYDbaaUM4b8ewhopjcWmJIjju+U23J3BUKJyl8gXoyVp7vWhuVfD/sa4p83cox2udn0f749vb2/F4OOx3y+NHACtLxeGiBUjD3eblp8ApEo6L0aUGY7dyfzjs9wcDWZaV4dHN65IdB79agDJd6+Je8Ye+vh+IS4ObVcV5ofwRZ/UIB9DzXPoEqOvx7WYi/oz2ctmX4M6rwSKCN1VWvos8WZ/xsd/7BMif1yO4E8LtAtR3k+F2ri33a91y7c3oS9br9eqwGun6ajr49EFveLi/hhv26+tmtlMVqT/Vlrv9YT2DK/dPwGG/3y/n/dsafv8L4sTYpWGVkigAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1200,
            dps: 1894.74,
            speed: 11,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 19,
            foreswing: 6,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1200,
            actualDps: 1894.74,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80,
            ap: 30,
            dps: 56.25,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 2560,
            actualAp: 960,
            actualDps: 1800.0,
            magnification: "3200%",
            count: "5",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "063",
          enemyName: "悪魔王サンタ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAEAwIFAwQFBwQLBQQKBwUHCQQHCgQICwUPCgYaCgMbDwcmEhA6DgcWLw0XMAJ1AwEnKCFuDgJoEgp1DQUrLShCJhKIBQdVIAphHAeCCwV+FAaRCwSGGQoLWgVFNyw+OzvDAw92Kxq+DgxHQj5GQ0HjAhajLAmZNAQjbEylOQaVQSxyT0VfV1S6PwloaGjbSgYcjaezXiFxcXGLbmf5VACEf3+Hh4eIiIiXhoXPkRGuoJ24tbXRz9D6+vr////fWCuuAAAAQHRSTlMAyvxC5SudWna2E4n9Itr+EaSv/Vn9/zU9cujV/5b+CsfQ///7Xvv/vf/n//6R/xn7//9Y///PMJT+//7+/f8AjRhIRgAABHhJREFUWIXtlm13ojoQxwUBEVGqMakPsbYhmipppDR1xYD3+3+rO8Hdbvec6mn3vrkvOi88Hsj8MvOfmYTWP//RWt+Ab8A34BvwDfg/AT60m/H45uM3V+3m9vb2JrJ/FuuH278AjB/W64fFbf92sV6vx38DWDc2n6UpkPpfB9zYndcppRawHnT8rwL8IbIAtiFUpClJBsHXEL6TJNQCOJalLkmSJIOvEKIeeJA0RUrQzXOlMWFELaLPA6w/EAgCBaQutWIMUTT6tJb+IGEkOQeRpqCBYlkmaLr4LGCKWJ4mCZaFSM9GWaZEOv9DhmgyueDfn1uXhBfHomgKCYaYZhT13skQLbbzC4RJsyc5Ho+iEAidYygNocxr/141ZmJ7oUX9WeNSHI+FZIxQCEKUtWZMkPBdnkI9XlC1kxBmxTsWSpuSxIhKYwohtSRBP1pGvm8zmcy2k+XyQ0Dws4YqV7LScQxdkDElytLo7fZx8Qg/08lkOp9PFx+HEJy7QL2+KkHA30ghAFaazGSvZ8vBFBtdEDE8A3JYBx3EiGZCqSwzldA6z7fbHMJYbLdbeakvIsf6M/aqsuORwd5KZrkxJktTPp30J5MJaNCfrJ4u9UE0QoSINRXMAmwqRaGE0ADw3if9sYLWRk3zUL7hLCMxAy0KlWa1San3qZH0u3dN9/DNhvDnOxBD5CplEAF1bAGj8fjqYHYGd3d3BCGGN2DPG6yUeoWhEJBCD5KfPub59BqgbQF3SWLKBvCMlYAk0jQzIh1F020ORbzUg2cbWsAdrk91yTF+xgxktGMJysxGUFyIaHupAI2FAxsDLuvTqdYYY6iDoj+nWhUAeM3Zwu9dDsIPA0uQpamqykgUi5whkKA0pZZaK5VrJp/mV4640KYwmCFi+0la06WpwSqjyxL6umRFpeeXQ7CADSzmGAgwzQz2hVEkuq7gD4kJDIcxVwA9EKGq7p/2e4kTRH8ZIsZoGWMewzFR6SsXXhT5+5q3J4fVvcTdNwAlZS1hOlnKCMmuBNBq7VZVPfSn+3uP897sDcCqk3Qxjin0t3h3ONlz5Y/BWB6eIIP2vsSY4+78N8BU2D2bUk+7ZWu5a+12dv1u97L8A3DYVzIcaM5oDBtSmmWUCYokj+PGP3iEqrz4/cPuZdVqvex//Djs3oewuh806dq13KqYaZoxSmP37N/1D3VRHaa9p+E9pLI7rFaHdxH4nS7mWV1Lx3FdZxAjhGYcwe0WO2E7aADRoUzFcDTrYhTYqxzz6dt3kN9z3Bjj2Rb6eAhrA4xdbxBzguIBXAs+567rtTucpojOupBNO3AwZ28fIVEQwlPP6bX39Qk088q6dIHIQQE9GPaGlYQQHC7tkTHyHdcJHBvUNHoLILQ7+KEf4BIA5clI6xLH5gS9KasaInAxH/Zm6WwahW4Qeq4Xhk1VI7/dCbseAILAceA5SMbBCWrHjbbTUNWGNzJ68N7znC5EAOudMOx22n4r6oRB0HWc5mVj7ptBAUAZjH8/cX8tgvXdbhCE7X8Bi8MVpbB/JfUAAAAASUVORK5CYII=",
          traits: ["赤", "悪"],
          baseStats: {
            hp: 45000,
            ap: 3600,
            dps: 812.03,
            speed: 4,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 6000,
            freq: 133,
            foreswing: 104,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 14400,
            actualDps: 3248.12,
            magnification: "400%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
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
            actualHp: 300000,
            actualAp: 8000,
            actualDps: 3157.89,
            magnification: "100%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: true
          }
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
            actualHp: 350000,
            actualAp: 5000,
            actualDps: 6818.2,
            magnification: "1000%",
            count: "3",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "034",
          enemyName: "コアラッキョ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 1400,
            dps: 700.0,
            speed: 7,
            range: 200,
            rangeType: "範囲",
            kbLevel: 5,
            money: 900,
            freq: 60,
            foreswing: 21,
            backswing: 9,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 1400,
            actualDps: 700.0,
            magnification: "100%",
            count: "1",
            spawnTime: "213.3s",
            spawnTimeFrames: "6,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e1034Data;

