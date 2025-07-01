// Stage 13009 Data
import type { StageData } from '../../app/stage/types';

export const e13009Data: StageData = {
  eventId: 13009,
  eventName: "キャットクーデター",
  typeId: 13,
  typeName: "真レジェンドストーリー",
  prefix: "NA",
  mapId: 9,
  stages: [
    {
      stageId: 0,
      stageName: "コオロギイデオロギー",
      baseHp: 999999,
      width: 5000,
      enemyLimit: 7,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 600,
            actualDps: 1200.0,
            magnification: "300%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.0-2.0s",
            delayFrames: "30-60f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "286",
          enemyName: "カバタリアン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 40000,
            ap: 4000,
            dps: 2105.26,
            speed: 3,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 57,
            foreswing: 28,
            backswing: 5,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 12000,
            actualDps: 6315.78,
            magnification: "300%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 56000,
            actualAp: 3000,
            actualDps: 3750.0,
            magnification: "400%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 294000,
            actualAp: 16701,
            actualDps: 31314.36,
            magnification: "300%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "26.7-43.3s",
            delayFrames: "800-1,300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "052",
          enemyName: "シャドウボクサー",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 80000,
            ap: 4997,
            dps: 9369.38,
            speed: 22,
            range: 158,
            rangeType: "範囲",
            kbLevel: 10,
            money: 600,
            freq: 16,
            foreswing: 2,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 14991,
            actualDps: 28108.14,
            magnification: "300%",
            count: "2",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "40.0-66.7s",
            delayFrames: "1,200-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "423",
          enemyName: "古我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgIFBAQFBAQGBwYGBwYHBgYHBwcHBwcMDAwODg4PEA8REw0SFA4WGg8cHRkeHh4fIxofJxghJhkiKBwqNCAvLy8qNR8xMTEzPSY+Pj44Ryk/QjpCQkI/UC9OTk5FWDJNYTZXWFRZWVlVaTpZbz5oaGhoaGhwcHB5e3aIiIiLi4uTk5OgoKChoaGhoaGurq6zs7O7u7vExMTKysrS0tLb29vh4eHp6enw8PD29vb9/f3////Tc8klAAAAQHRSTlMABxO/zTqPY6IaJC1MgHP/seKTYdX0wv//et+y/0X/5Zn/yf///uf//8r/4/7+7f/h9P//9v/+//7/////////3QTS3AAABWdJREFUWIXtV21b4joQteyiQtG6vtCi2UhIMAVSuzS0TZsm/P9/tZN6fdlr0PXrfe48fIA+nZOZc84k4ejIE8Fo+PNnOAoG43A49r3wcQTh2WrzuP21ml8uHjaLryNMLu5z1aq2a7aZKKv54CicjIOvVDCeXC4eq87ubVcX1W4+utqsZl9BAA4ml/d5a/cOQtWr2a77Ff5NWjiZXEGcnN1ttpVSjYUirLHN5tGq+aclBJMFULfb7bZ5lhWVhkyXD2XstdRmOxt8AjBc5LW2T2F0o1wHz2G7vdneDT8sYnyXyVJp85xmzRuAvaulvD37SIzh2fz+YbkWsnUv798HIGSrq8N9BOHdtq5ktl4X2noQekna7Xz0UQuVNkarolDaA9CBMdpqOz+kJ/gvq/u+badbH0BValOV5SFvB4NLIfLGmE5rbXwkGFUoU9a7Q6YcLWoJBJSllMp40o0BW+quaFbeEoLx7KHoZbQ+Cp9aUHVrm2575aNwttq1Twx4kp8QTFPmEuhtFx4lhg9Sd42qq6ruzeSHMW3bmL3dXb1nYTAXYi3W8JFNZ6wBFrx9OI/ZbuWRMjw/viGikEWm4B0jpb8Kq10J9dxnyPA6ITSvysK5yBTVeyVgxqp8CV43XiHCW5KiWNRt7aahzeW7LkwLDGVrUZvNAQCekHjdGAWObEpZ/MvQtpFVa7oyL7w6OACWsASvtSmBh1a3Tecm6AUFHsGPLm+b5gAAo5ghmoiqLtU/29Hb0X76YkRl5YNvosJbTiglDCeUJfEaSHSbmm2VK8SVAlPSNnVJCltM/RWkhDHGUSpShqI401arutFNWTg2rJKybcosL5Qtpz4Zh/ccU0AALRDiJI6XNdAupRBFnsEG3TgK+qLAST4VegDOKSNREkMbOEaQKghChJKlemMsax8nvhbuGaGcYY4SSuIIUYISDLoiRGmKltVbTRufFUdTSimnSYoRTlkUc84IBzhCoCvGlvWbKTe+EoJzDAAkQqAm5QnmKacpPHC80JSztX5uAIAa38Y2uoDFWBQhIAInQGhKOJQByRyzNKVFX4GttQPZXvpYmGJGURQlnGAUQxME8kBbh+BK6Pr2RV9Jt/EAHJ3cOA6jKAY3IScFSVPHBDTDUkaUK6DILOwrtnv0ATg3A4+wOPQCqa4N7oThzmG4dEsroSohqseZD2AwBd5pypIogmUFaAAsACLiDhjLnoNOd10rzr17e3CJnxCgiChOYqATFCTAaYrBTY7FfiiUzKb+42Vy71oA6jiYISYYLEBTjIFIsBXKnYKQXeR5Jnx7O/RwSbFb0EFA2YwhAgRABwwexlCB1bIoxHK5vvGZGWJ8gQlUjaFiyh1KAmBOAhAjBg4aWFtI1bbeaXAxOr7BTjdOCWacpzRxLKT9N2WbXBSqH8h2fgDgaHByjd3iEDDa0A/qHUlTsuxMludwAktZyGpxCMBdVK+jBEMXbpwc/6nbZjjOrNU5dSaN4+jaT+ILxC0DM4ICMAVgR7BDgknlDgYN+1pVZ6fhx7e+YDJ1TkQOAWTlsFcmy+b1gNkMP0x3EV5QZ2KSwjhjBFMt6u7lAtetDt6UXmN8AWKkYEsYiCSKRWNet3jz6DmfPTVANhQALcD+COKb7uW4bH3n8/saTm+Q48CNZSyKAm4XLywc9NEfMTr7AbszdbOB0do56PmI6v6CRRfB8Pj7jxsIjFD15pQz8vO7+zPEaDg5OTk/Pr0udQ069Kdt98F99RBOMFmtpgv4N1BXu+1m9tV8BzEejcbDydVsdn71iQv/j/9MBMFgMBqPw3D4JsJwPBoMBn9jgsHk/Oz49OLbt2/fXwN+XZweH5+d/Pn38Td+AnaNNvvUDAAAAABJRU5ErkJggg==",
          traits: ["浮", "古"],
          baseStats: {
            hp: 1111111,
            ap: 6000,
            dps: 4390.24,
            speed: 2,
            range: 500,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3000,
            freq: 41,
            foreswing: 24,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 1111111,
            actualAp: 6000,
            actualDps: 4390.24,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "穴ぐらの最高権力者",
      baseHp: 300000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 170,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "413",
          enemyName: "コライノくん",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 2400000,
            ap: 12000,
            dps: 30000.0,
            speed: 4,
            range: 80,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 12,
            foreswing: 6,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 2400000,
            actualAp: 12000,
            actualDps: 30000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
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
            actualHp: 600000,
            actualAp: 20000,
            actualDps: 37500.0,
            magnification: "4000%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "056",
          enemyName: "メタルサイボーグ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 800,
            ap: 3200,
            dps: 16000.0,
            speed: 4,
            range: 80,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 6,
            foreswing: 3,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 2400,
            actualAp: 9600,
            actualDps: 48000.0,
            magnification: "300%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "60.0-60.0s",
            delayFrames: "1,800-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "183",
          enemyName: "サイバーX",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIEBAQFBQUFBgYHBwgHBwcHCAgHCAkICAkJCgsLDw4MDg4MEBESFBQSGBkTGRgTGhkYISAcJCQjLSwjLi0nMTAkMzInNzUpOzk2RkQ3Sko4UE5BW1lBXFpDX11FYmFNZGNNbmtOb2xjc3Neg4BjiYZljotumZZ2pKGXl5Z9r6yDu7eLxcKQzciW1dHHxsaY3def5N+f6+Oi8Oil9u2j/u7l5eX09PT+/v7///9oQFuDAAAAQHRSTlMAAwcOFtgiK0s5pH8/WZNR7HBmznuM3q2Ysf/tv93N/tnt/trk8P/o////9P////7///////7///////////8ATc4NkwAABURJREFUWIXtVtl24jgQxYZmCzRhC2tYBLGFbAktxpbkJPP/fzWSjYlNMt2dM69dJw+ROHVddetWlWr//E+r/QX4C/AXIAf4jjmt0aD+LY87ay2CQ9/9ppNT+ncUKLZofMfbbfWHndsn63OWxofWd9wn6+PLZtKyEG6jM9rEqTx0/tTdaYzWgZBSBOthu9eerA/77XcAnOb0yFRqTLHgeDgGPKGe/HMApzMLEp3mpqVUOtUh1n8M4PTWWKZlk5wjYaCOFsBxfgfQXBB1/Xr2l2qFgQlAK79nCO10foNQnwRXf36iSY5CYWyBgpFTH21mv1FDbxddIydbD5JYaxFCkV3QeXN4pLtfq6E+xwV/DAgKIaMe4jrn0+8eInno/crf6e3igrsIRKkkYEtVcSMA0pGJ4BdE1qe3AFIFic0f8I96MI8G07rT/M/GLAdgSIDm2xrD5Hajw9W85bZ+dv+DSKdRCiBNY4+aU2IDuaW169UHi9XD141db/88lgJINQEhVykv5aCD6eRwznj8RITTmuwArUhQcQTCWJWCiuAqeL1kg6F5J2yntwiESHQFwSS9xKU7iU6Xt7dg6FrBdav+nTVR6WeLMS9hCnB5f3/NpNQZj6vxz7D+wt+kUYZl8PX9/Tw1RWzM8e7D3W0OZif5lbtpJJ7q4n/OweX1su85NXfoX/Yf/oPFAefF/hRFskWGg/xaYoG9k7caOEYvl9cbgNvfUZmrPVW6CqElWHo4vl6yUDBM/ZHbWpzfCwAz/3bsRhlJ0nuA7RmCnF8tQw+RJJi25sGb4TJzb/anz4W/1vgTkxouL5ftkuQMSYp5THazwHB52WTFm/kBELeEPX7vn9Ll1lsCDxdTSjHmnYz/+2Vm1bQwMkGoSJyD+A5AKUUgRFTwopo6wZm/qaahb+RL26NF4hjeZZBQkUY4hFiW1AiZ9X8LRiaAtQ05vnV8eLoDiAnTCQlpSSMyU6PRo+2ovm+QtYQ3AFQC0BmASKumMckBbEddx4+K8vy0RrjyeaFjQu+7C6HT+c0E4PedWmtdxTfZlY8sVPGJ6Tt1Uo94piPPc9PS7V1VNrJaRQZk4nmxqjZJAjH2zufntpkno5cPci0XtwjMQVuAJA1BRCth2aJhgtCzHUrDl1urahYrElsSjVBkqohZShaAA4RgNVHNYBiHT+2aTSHTjbQxEqIwZoDLEJo9oAU2GwWYHwjgyIuqCDGXeN3MdJhFR20tIpQIwLEHgcjSUqZx7X0MqIT4jkipiB0qNXcS2B+4F9v6UoVQQgG4ppUAYD+ssYWtKlxTYfas7cXORtgZgJBxisMoMntAgIJII0u7mSX2zGiuRCBx5A8yAHf4EhuECJBEEIgSs7lM6LJgOyuyjvB2CSvzVlC+ua7oxtS3TwC8BQAiACOOCCtCSDyWuXvQA9uyQDSlL8NiNTXn9jlBHw39mjwdSCQEujaEPiFOg92KJDJGXjHc7a4Lj5PbbnRaC8M1nq2JGUfTweIYhN72Wne2Xc+H7ZnNX4YAMREnyj6YgnW/tJwdq2c67x9lakrTHEwm06frflPBtOHWH4BdbZIhuN0d/CDw1/nr82atTZSyWc+8ROm8XnNct9EtelIYtTiDfU6qTvxJpz0atZt3m7mx4ClfdMxoYfnzyRkGVxLk0ayQ1qYQgYnQcT4/TupzmvJZc0ZTNs8B+r5tJiMCbbeonVrZKRVfv9brD1CE40H3JNC437b2sI9VZjLoDtr9MclPim86jc8PC6fTHT8//Rj/eFw9Pv7I7XH/ktn+8cmeVvnp+Dzu/myXEf4FfYt8pQHrHmkAAAAASUVORK5CYII=",
          traits: ["エ"],
          baseStats: {
            hp: 120000,
            ap: 2200,
            dps: 4125.0,
            speed: 4,
            range: 60,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 1440000,
            actualAp: 26400,
            actualDps: 49500.0,
            magnification: "1200%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "人民とにんじん",
      baseHp: 177777,
      width: 4500,
      enemyLimit: 7,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "309",
          enemyName: "ヒツギイヌ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 40000,
            ap: 650,
            dps: 291.04,
            speed: 4,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 300,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 650,
            actualDps: 291.04,
            magnification: "100%",
            count: "7",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "427",
          enemyName: "クマンケン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgIFBQQHBQcIBgoHBwYIBwoKCAsLCQ0NCg4OChEODBAQDBIRDBMSDRcVDhkSEhAbFCIfFCc/AD8hFiomGDEmGDAnGjErHDYrHTgzH0IzIkE4Ikk3JEQ8Jk5AJ1JBJ1NJLV9LLGJVNHBYM3ZWN3BjPIJuQJJvRZV4RKBxVoiCSa6HU7eKUbp0aH2WWct/eoKfYNinZuSuau61bvmUlJO5cf6rq6vExMPV1dXl5eTx8fH+/v5Yk42TAAAAQHRSTlMABw7TxRUlSB2ZNuItaUGAX7NU/4t3BGufwtLplbqnyf6y8NX94f/z0f7/7P////X/////////////////////pAOhpgAABGhJREFUWIWVl+ta4jAQhi1rEREQEVZADgVK2qQhhJADBcH7v6udtKALuDQ7+sP6MC+Z0zfp3d2/zK+UTn+WqvWG988P/mxecxIPakdUex7NWu6u5Wan6rUSacTEz/7Tihij44qrf2scRb3aSKWpSapeCawOABY1HAEPcwqfrluAjtrd0WQ47IeMkXHZzb8yxJgy3H5bmlTgMMSUMvghfdcstqYhYgw/VrvEaC0wZpk5p6DURSGEgN57LyQFU4TkhOjBDeAP7QFYGAQIGwAYanlwAtJ2C8EfIgDQIAiDHCBtEixh6DsBvAGBHKL+UxBwG4JJuc0CMKaPTSdE0zZNv/HwTnRqBNRS2aIgzFAw7bgAoIx0WvcaCQQgVgudqhBRtEYACNzSUO326qW7zjI9AjTFjCI4RfDuOA4l34NUSIjfSCk4eCIMtST9ZqnY+Qsy0QZSsFis16+vr+vNChPXMuRWjk2q2Xq3/9xv0Wr/edit8MxxGDJ7W6Zmsf3Yf35+HlabA2D263fXcQTzJyqV68Nu8/Gx24BtN5vDNmi6Ax4SqP9it9+u15vd4bDbbncbHD46q1peA7nYfOz3h/0eTrHGISE9V026q8V2DFLNF4vVaoEXCy55iLBrH2QpzM2AJGhjAKcUc+3EPIVXZjQPXUUlm4MfENhVVzsiH+RLo7TjFEMpj0BfIdhpTxRYXgNNrwhMJlUXQF4DQY0U6gKwfHOPgDPFmDDnAOUSw7GLGJeMyQuASRzqkEdgqJRM6IsQUlHcS143V2Mijb5MIlc6LuylSg9r28NEXvcBETopXFC1OaLQ/JpctzPlUuLCGBoRRsoC9KU/pMWIYmVsRRRj8SMADiXYvKiX3mALBMycAYz9NRageFQgbF6bMIoRl2cAbUUemCZVrCAJXtfuYhIw8l1EIziHnlQkU5bJ7fVSmmTLPAzRdxVgO0FTWoClxbfXgz/ObwM4+OoDbf25SGUGSAu6uTLLbzQMfQPsI+dQwuyxYCK/ASI9qpLKnoXhWY+ncnATUJ6fAPbjNmtGcYiBKxCkDKAmNwG1EwATm30rCEZa/9N0GBM7ASjBIOSMZ4nX4P7VWo4ARkOlOf9LURRWIntMHAFwS9PmL0UQSNhucAawaWTOBS0EgM3j8ibgq4xsOj9XJIhJcHum24BjJ9pujs4VDU+ziLS5DTjOgr1v0+MkH6d5PrNVUPPkdg7yaWRwrQuzxrMV1Nqu9/FQMQWN3OnfBgwIXNdxH0PO7Bcn4zieYa1Q+DJZ9hId10oFivIWvszovDkmoS2ZGpYr5VoMEoMGo1m1kwzgEnob0Og1unjot8ZTkNZ89LxBiBnuPDc9/7l4u3o1r9rr/PZqQwCYOHtzrEeURS24ARd9+4lRrRx3rBhkHo35f7z1ncwCdH6Auwo0R6GcXwFGtmb5kaE0zPnF9WTeQMjRyQm2zeg/7vrg7VfKbRY9Pxyt2Ufdaq1c8V0vu5X648v9+9OvL3t6+nV///JY/0HS/wBkFjcluHFpbgAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 120000,
            ap: 5000,
            dps: 7894.74,
            speed: 10,
            range: 360,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 19,
            foreswing: 6,
            backswing: 3,
            tba: 7
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 15000,
            actualDps: 23684.22,
            magnification: "300%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "016",
          enemyName: "ブラックマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgICAgICAgECAgEDAgIDAgICBAEDAwMDAwMEAwMEBAQEBAQEBAMEBAMEBAMEBAMFBAQFBAQOAAEFBQUFBQMGBgYGBgYGBgUGBgUHBgYHBwcHCAUICAgICAcHCwEmAABLAQEfHh57AAAuLS0AAP6nAQE8PDzZAAFVVVVsbGt7enqIiIeRkJCfn56wr6/GxsbR0dHa2tnj4uLx8fH8/Px35odEAAAAQHRSTlMAAwcLEcD/LUHL1vP9Gls53SBs7o6r+ElSeeiGxf+hJ7PjYJm8f2b/0BX//////wL/////////////////////x4QrTgAAA0BJREFUWIWVl32fqUAUx0vtUE0bInpQEgZr3WuRx/L+39WdmuR+rJmmn39MnK/zNGeGIPynP+U7calL5WI5nLlDSagj3Z56blAs5J4JYfgp1rCXXA0Aq6+TVdAGWFO9BqCZmziGpOudTjDIV2pQbVfKcDITzfc/lIXablvZIqqThI6SAQAEhUYjMO7UsBcacxNbPc1XI+DVAuQujL6+Csb3zzcwa1VBaDlgtPr5+SoBI+jXyYFo47ytvv+uchfQKHNlUacK8pgYIoQAfqFsZQ5qAIwQZIab/XGH0Do+7jYIWDZ/EsQujgBtT7f0fo23h+SeXvdrMJa5AY0IIrS/Xu9Yt935fk/PSYxqtGKAi7hNbnGSJpc4Ppwu50Ny3ZhD7gjmGo7/kp7jOD5e0uR8Ol0uewR7DU4AqcHmeEuSNMX+J5fTbo0rwd2MrXwrIbTdx8f4sN9t13kdAW8MjV65iXAtASoXkHNDNlXwXpx1yJvgvbQJTy+RFL4V34ZqhVQA11jLNyJNPHVgRIBj4OglMpBpqu6lrI0Zqh5scp9lz1EHo4gAUQhqsyICehcRVfWS9IiA5kFVDMWRRLWv7CWD0YZFDOw6DLQqD9h7WpywckioHuueIM4sugfFs9BgAPA8B3RCkYQJAyCx+rBgMjfU8uPl2+/EOqGCRbUHoM3o5udeZnjAmirVfYRl2XQAOVIqQoA9OmBocngA+nQAaxw9s+IxANbvr5dP0OOZygP4LUsr68gFeHUBhYvHo5AOmGjU+qPFtPgMOXTA4FmF12DgePyAMwD/NRJ8BUTRA2DSAYy9YNluzrRUjQHQPWoOtE87B6gtd0EHFCerVfoP4SMYp2XDtgfxWJfndIDko9DE+VIKAvRcP/LzzKpNW5sZijMUBcZAEW3TneKhNXFIKNqkITX0fMp4+mfUEQduxX3X8IO5qTalLilHfppL2aCEfUle4l+oOlvFpSjbXUmQ/SwIa5Z5S87LiPeaig3ELBkZQCUTPJsS0K31j4cANJv8qu5hZxipf6f8gJgW95ns6lrr/4pA7mrh8OE1HlSsUfzOXupqVhTohQwFKE1ZliXOPDSMrts3TeWjVFtzpn0/crvGb8Q/a31jQfSg9tAAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 550,
            ap: 3000,
            dps: 11250.0,
            speed: 150,
            range: 800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 8,
            foreswing: 6,
            backswing: 2,
            tba: 0
          },
          stageStats: {
            actualHp: 27500,
            actualAp: 150000,
            actualDps: 562500.0,
            magnification: "5000%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 3,
      stageName: "密告者軍団",
      baseHp: 100000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 170,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "387",
          enemyName: "ヒウマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAAADAQEIAwEKBAIOBQEKBwUOBwIRBgERBgEWCAIWCQIoAAAYCQEdCwEbDQQfCwEhCwAuEAEzEAA5EwFBFgFFFwE9HgM3JAdNHgNaHgBdIAFmIQBENAl2KgB5KQF7KQGBKwCDMgGUMQB0TQGkNwCtOgDBQADKRACTZAXTRgGxXAOkbALjTADvUAD4UwD+VQC6fwH/YAHLiAb8cgL/eQL7iALdmAH5ogL/pwH8vgP9zQX+5gT//AP//wHBq71CAAAAQHRSTlMABw7KLSFLFT5XuWSECXafk63s2jC90vkORsju3v6O6vT+3Mb9B/X//fPd/v6P/////0v//v8D/xz/Df////8Bcd5yRwAABHhJREFUWIWdV393ojoQFcpPQZBaoBUoxGZN2vQl4anrurbu9/9WbxJ19+3ZlZrO6R+eU+7lZubOTBiNPgrb/vCR4XCcz+Gs8w/XsYaeuwR3Q/8PKhN8kGbuJ3Dn8KO8zc8KLN9AgmWrh92kpjQ/K/Cj4P5qAtvzrJGd1Eyy+d2ZNJ76g6DfCJJx6Ds5lT1vk8nIghhNkvnD9QRxWSTJnPe9JEUYeFEUesHjy+P9l6/XEUziji6K+hkIBK7rBURdt+uXx4ev1zHcx1iI56XoITgTsl+J19f127p7/Pb9xGC5dwM5tZIOwFL/qVhtNoA/vK+f/v1+ZFAO8S7X1Yo6eG0vlASp8Nvt7v1wOOxf/zlJcLK2ywa6I6oggT3BhPEjgcYf3nYvIOGHKlPLWZVcJvAKBgS0LBuEWb/abt8U/v1tvz5KcOaslzi9TOBkGOSzEhGMEFttd5oAGEDCty+TSdTCv2l+CW47YVZSKTlCQnBCfhIc3vavjw8PUZxjyBGdXcKH46LuQIIkDZxEgILt/kyw7p6eFm2rBVYXCdJiySF7ApeIciGgiqcj7PcbzIXkdJAATBLNieylxGUDhRCr1UZXAfC7jSoLnIsPEYCIqbYhawhnXCgjrXeA3u22q5XyhlQ2GSKwkoWQ6gyIUAq/gAHMtN1uTnjt0CECMAKFJgAJJWaUMrlSFBvAa7BQAi5XQYWbVgTOKRhqGkS0HXv1drFsl0z315AP1BmcdFYS9TJK2KmllPjnPEnndad8OuhEPdDTlv+vI3WwOrJtN8oVNe/iIQIlIuv4b3DJ2lTNWNVKKgXeMAH0/LhjeqgcdQhapcf1FMxpL7r0wyFreVmNKQfrAV7QrohP682fdowUAwPl1ymirKgaBI0lSDmbBvZZW17NkqumvOV6SXqrfM1IN8si9/hWO8ySq3ee5Wad1PZ9bos0ODE4128ZmJAVNIR24HM9NEovhlNAU0lNAQymFw3Lt920YUIwMAUnpem+t5w49mJIgiSEEYSQkQLLCcK4aOdjZUmq2wq2rcFty45ndbvktNIjFkMipKR5YKAgbsGHXCBFIHQWpWhjAwnenEugQA0cQeq+gHWdG2TBTZdCEZSqjKotKEGlSRqtcK7mOmowFbzRgerQxEpwUesYa+C6IGE2Eco4X0QGeKVh1lUV/TmapFxERma2gmmaVmqKHoe5McFo4jtpBQ4S9Dhc5SI0wisNBWOwoWDPKwa+MDCSDnvaKQ9xuCooK1ITG+hwxw0DPIMyAAXrTHrhTAA9hNVYg26uTFrhRJCDlzjCXC22PPaMP30CuPJKNQooW2bBJwZa2DLBYUeXt9Wn8KOoRBgjthxHSTR0vb1M0BEC2a8iN8nz67fBrwgXaibQwotqjOvYYB+c4i5nAi46VZwuMaFz4yqO/HRJwAmkyNqyYa1ZM6uAhi4xDKQun90iuGEYE4z8ZNzCbmPLDlFIhTnByA6yCsFk45y1Bp9uZ7Truk44vsWYQDlzzze0shXE2fjm5mZ2q+MmTf7+Ef4f3iDEz+RFBwMAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 248000,
            ap: 54000,
            dps: 5294.12,
            speed: 6,
            range: 800,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 306,
            foreswing: 39,
            backswing: 27,
            tba: 134
          },
          stageStats: {
            actualHp: 496000,
            actualAp: 108000,
            actualDps: 10588.24,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "266",
          enemyName: "ヒカル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000000,
            ap: 2500,
            dps: 375.0,
            speed: 4,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1800,
            freq: 200,
            foreswing: 27,
            backswing: 66,
            tba: 87
          },
          stageStats: {
            actualHp: 1500000,
            actualAp: 3750,
            actualDps: 562.5,
            magnification: "150%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "355",
          enemyName: "ケロ助",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 3789,
            dps: 762.89,
            speed: 3,
            range: 900,
            rangeType: "範囲",
            kbLevel: 4,
            money: 800,
            freq: 149,
            foreswing: 20,
            backswing: 21,
            tba: 65
          },
          stageStats: {
            actualHp: 540000,
            actualAp: 5683,
            actualDps: 1144.34,
            magnification: "150%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "417",
          enemyName: "マナブくん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAADAwMFBQUGBgcHBwgHBwcMCwwPEBIQEBAQEBATExMmJygnKSssNDQBAP0XPYU1Q0E6RkQVS6kfTp9OTk4eVLVPZl5QZmUAXv0vcNAqbuMjaP44dcgqdPwqdf0rdP2JezUrdP4sdP0tdvwvd/00geYvevs0hPlpjYd7j4wBt/9Vmd22ng+cnJh2t7p8xbnhvwe2t7mG0MaR3Nf80wjCzc2Y6eGb9eWd9efT4eCh/u65+vT5+fn////8cBQ8AAAAQHRSTlMACRInSN/9Nl2vcZKBl7bVAWv6xxas3Tr95wSidgvILhU//yBOXAuPaHT+7QPx//7+4//7///////T//////8AUvTNhgAAA0dJREFUWIXtlmtT2kAYhUmI5grBRHETBU2KETfCbkli0tz6//9V312qQIdlxX7r9HgZZ+Q8nPeyGwY//1KD/4D/gH8EINLkNQzD14nw/xKFyQy+ktksCb/ECMPZ4zemx2QWnm+fMPvDw0MEP4A4vw7uj6LFYhFFQDg/Q8L8iyemBSecGSFMuH+5fHlZckKSnEWYQAHM//L8vCWcWwR0AAIsX+ar1fwZCNEDAM6IMOGAp+Udbdti/vx1wLzoum51xwHnbVOY8BLuaNdVq98JrhV1qDMNVUUKeE14E+/nlK7m92wM17phj113CvJHlq5KI8z4GO9v5nc3N0/RrWH7AcnKsmyapszSqa1LUkzeF2kJkKsrc5qWTde+qyuxr0kIsy2B6WrspuXOvUVkviaJsD1MURTdjoLsDzsjkPFQSuDH+dYJ/nx7riYwZMOYzEDXxvSov+1SRzoKuFPC4fhIfi5iywGDgWKlAn+bfgow9I8X0LZVYMNOSgFGcNxf1xgFgT/SJX51JOpAnRdVXWBTkgEqEHRgq9yVLIM2bY4XwH5BH6QJBC3IcQWAiqKxZJ8VB38AcsrflwujPKcYeReyZVRt8gGgqNolQCBMc3RqGRVVVVST7Oqu6r2/i6Jqu+5ECxTdGY9tbZyJJ9B1heeISlAMn5QZMt1c7IdCTNEQFTiCfd83nlcIAQWe2sIl0H2CGQF5lchfIdMQNkAdEYLirGlOAHL3xKWoT0u8Xscx8sQAemIH4Q4g8ebtbRN7aG92B6pTQ+gfqKbH/G8b2BaRvw5OLLHuknjNALEQ0J4EwBFs4s1mvUYeErWgTi0xwAj6nsQxIdjDogQtHYmHYKR9n6Gyz7CHcC5A5CeeK0bQ9A18k7IpCabHAYUrvA4VC2cgqKCBZcT4OKASdxHuQXYOmhKzBOgjQX1QTY1Fi6CwFnBlsIl7PagPq8GWoIuqM01JxpUebiJF+2cT26IxqLphOSOQY9nBfuoK4+ozAFbGb2kMUBc5pTSHLEDYAaU3OpMWVHB3e5dMHsrrHOX8eSAEKEMN4juWoW0fm7qL0eVOiOL0B+g7U2APD2qAD4GaZV68v/bCdAzDsi8uD+W5vu+6H6+xDU1nHxp/ATGJ5eit4UeRAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 40000,
            ap: 50,
            dps: 3.33,
            speed: 50,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 450,
            foreswing: 44,
            backswing: 406,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 100,
            actualDps: 6.66,
            magnification: "200%",
            count: "5",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "418",
          enemyName: "ゲコック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgIDAwMEBAQEBAQFBQUGBgcICAkJCQoJCgsKDAwLDA4MDxANEhIZJCMbJyYdKikgKSghMS8vRkM3RkQxSkczSkg1Uk1AWVc+XlljXUFJaWZra2tTd3OEdB1SfXh5dm1biIRklpGHh4Onjw5to5+ZmZjGqgl2tK5/wrmwsLDmxAeJ0cmR3tbIyMj80wmW596d8uah/e3n5+fC/PTW/vfx8fH3+vv///94XgLAAAAAQHRSTlMACQ8XIDPh6v8oRNK8VHyOboVhm6m1nsL709v/suyS7tz/8fX8//H/+/3///7///7////+////////////////76R/uAAABNBJREFUWIWNVwl7qjoQLdvzgkVBUQrIQykCwdBggbJY8P//qxsWld4CctrPBZyTmcmZyfDyMgCK4xli6OZzENxaUWSB7l6iGZacbM8rFkJAXz8YqNVGkRf0iFEX7MYNgAuQLtyioMQ9hNBcUtMcEIwAnGMPQJltr6z2AbBcpPOTCCgJIL8oYguprQG5hdCLz8AVJyWWVRBwfM/RoLFqrtC7wDrnsWNtJ+WRUQPL8f2z1SXQDo6jWbtpBApOQVnmHlK5hwd+HFsTCVgZBX6cnyHYtPtGbRH0J4dA8GqQIsvqbCOnoMi1LGgupiSR3YA0RBACY0nfrsAkCoPA3TBTIuCNKNRlRdncpSzYSaCre3XLTXGAEN3UXTMMQ5NEA3KLEnPB8dw0HZJrEBk8SbGcsBAXi4XA83IY3jQ5kUAXRUlWdcPEMFRFD5HMTi5uUnQjW7dRGEZJDZy+COmywEyrZpKT7DBM0uwH0hCaijihxRCsqLrhP9YNEmT+bDG9y/MbO+g1bymebCS5UmAyZF5TQFUY2UtSUFHP8mla/befg704GAa2D/qWDXBlhPdvkb0dYCBWKur3O8m6mxLZA52Rk+FA+tI07d6J7EWfIui17gL3Dvs3XBdAiFAQQLWvtzLLNYZUAb/jIhAqrO4QBBHf3mxkWVbmy74U0DVYlsWvFEV2QOA/DIqimh8wTF9lMXiB9bKC+BOLLhq3eK6P4FWzGvwbu1nDMAy9hTpf9IUgGGGV7Uo1aZP4tIOkrUyM0JR6mwO9dUdlfJeFux3ojIwMJjCE9naoORGcbPdXckdTaKQWXghG0iH+0cjyrjJWjfUBgkt2MJDUnfPjTYnfJ1lgRcEPisvlu8Llgj3Q16MOkEs3zQAIrahjXpbXCmVRlt8ZPu3GWiu9wRFYAQTpL/Pr2c+vZXlxlbEgGDXMIit00cP+2iJ3Dn6BiWJN7tPxLQUGToEbWrf+8323L+PjxzHGXwtHG+pIlZrNNEOPFHTsc+f09eHEeVGeNUMYCoIQ7TSDIGgJGv/La5HHvnf8/Po6HR3PPx+s3ZAUybWb1QRNCN/N6oV3OB5PH18Ynx+ng++49tCwR0qgIoisuqq+b9vnH2rrGicn9i04NKfgcxk3cTdBGnw4gOP3K/9rfBzi0tfg0KRUjRb1NoKou4MPhs+jX5T+TF8OEQhmkqXAqnNwc6ARwaklOF9LX1oNTkocFlIWWrUQuwSl3xB8YYLCG1r/pZIyTkJ7DHUIysLDKjgePz5PfpkPy6CKQb+XUdeDwjkeD56PX70iVkakXD0o3Oro0vXg/eDHRZmfHS/3pLGCrobUX3VUVUJcNEz5ufdYe4AU9m0lXboxtDyYyeg9WDuglmb0sxU8zK/5WRefDZv4fAHR7zTWeorfn7TUCvQORSEGPoXSvHgAV6SjvY1I4AZuH2WRuft/t9/vzfcbTEN/0ywE5efTOrsLssRcVaPyaiEu64kBn9oLQcK5Se3nD10Evw9TUIsNj+nVTEDVwwLBbrFEoPQ0BoLaghRtGTxFMAzXAn9kWV4JEnM9TkAx2O9XXM+z+Xz+X43ZrH7D3+d6CN4kgWfowTBI/nU+m/15097+9MFC2h/MN18OPjoQNCcspdfXdvnZA403yvxVWi/4H2P/Xw7FWO45wAdUAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 700,
            ap: 100,
            dps: 7.92,
            speed: 6,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 150,
            freq: 379,
            foreswing: 20,
            backswing: 21,
            tba: 180
          },
          stageStats: {
            actualHp: 1400,
            actualAp: 200,
            actualDps: 15.84,
            magnification: "200%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "363",
          enemyName: "ハハパオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgIEBAQEBAQFBQUFBQUFBQUGBgcGBwcICgsJDAwNERETHBsVHBsXICEZISAYIyIcJiUfMC4iMzEiNTMoPDotQ0AuRkMxRkQ1REMxSEdcTwM8W1ZEWVdZYzRFZmJJb2xPb2hQeHR3dCNagXxcjIaahgxhlo5nn5iRkpO+ogdwrqZ6vLOByL64uLjpxgeI0smM2M2Q39P70gmT5dmX7N/V1dWc9Oef+uyh/u7x8fH+/v7///9pxp3BAAAAQHRSTlMABQwXJy84QEqE28VZZXKIp+yZs//D16fvvOj+3czf/ub//+P//f////7+///9/v///f////////////////8Ab/kakwAABFdJREFUWIXtV2t3ojoUVfBVq2ixWr3qgEBKStqEFlJoknb+/7+6CSDiA53hfr17LRcuydk573Ns/f6PaP1P8Lt1Ex3D6Nw+VY/eFgXzrtZYXpsSwdG90Zihu0mFiHe/+k0JRj5LE/TyNu129HYD+fYEB7vn54/Pl1+/pnoDAn1F8e7tU+Lj2WiiQc9lnOw+JMGb2ciP40AI5rx9ShuMJvLaUyhEunt73r00I+hsUs4TyyMxfLxr4oIR5EJwmnJBl4MG8ioNC3C/iQYDW95dIFr0/lq+MysVkCqg2V8WZbs/Q/xAIBic9//Yiram6eMNqcpLBmIbf5TNWs8wV6v5A6RcHFHwJFgNNEmuXdNEHz25OKRJTAIfJeIYPHKn09XqyajtMNJwELH9hRjzU4YUWiSJsWv2LmrRHiwQE1fBiRMKzshmfEmJ/oKc3nmBASjLInt8rkNnflteMgSBOkXtk+TWuqNK4HnxuYTEi9UjWlUzq92b2kvnkLkijdJaHRDKyPHk4Ib2YEtiKyyPMOSAqJYg9BQ5T+1DefS2kcB+GQAGnZDVuoOnVk5OJns/6rJsGNgrwAV2aHmah2ee5QDlRNvCC+0xYCJySqNTp1KGdP0YnhAI5POMNBgVCqykWzE81L5X8WayfjzzRujlBkZmZoNmBJxzH5fvcVBR+oIJgubaShv0zABXXsi88h4O8anECVInzk+6XUnQ3YbSosQpS495Z0YfgzOnOIFGavwhVbaxx5T/ecZPr8qrMCgvy2uJoQZ4rKqDAKmFtDalgnr1SVgQZEZKR0Zmq20ECZA+wFCSQOVAGYT6JCoQwJAJEolk1dLnCDksy+/sE6AySFeAPT8WBIl02+rdT02bycEBaQJwZh3xbhY18QIiIp8zt6XpWlfOcIEsy1kDTCxMsX+TIHQQ4rGDg4VKpK4r/clT2Ucx9CzLWqM6uUOuWsAC9r1pDAqCwxGWxFF6QQP5Ah+CEz8O70bd/daUaVCL7BUj0AfrQ4nRtW32yymT+aDe3FD1B+/968s/ZDu1vt7tcuvq2NdaOQUyYP73z8/PlwX2B+laEpSNvbO9mnkERPD9R+F1HRZ+pOtNZbTo29MRduwE4qxzgu9XUFQJXQwqc0VbXS8eHgHv/TtnKLohnVfntPZU34D3Snj+q4TnBEneimZVArnP3iCQJR4GPsTOftpi82iuyTjeZFDlXzZuDsZHU+2GFw+GgLwVinh7vC9p5o0elonFaD+sUnC6eBv78rmSkdhDST5yGTRPd6V+Vg2cJMcUvPLk/r4SUjg527X0Lc1tJJVC5FR9ZzRhGTskGREL3Qt/oIpA8hhakMQ0SRIah1g1ep4gzwI+DAJHDRMWgdnFbbFfBDLdmEvgSTjr2WSWs4aLu6UPYQAAwe5sfHlV1FdhqhBvRwsSxXEUuUbPsKn6DU8Hi1g+qb+Y9Os2Tf1u8Y/Ecjm8Hz4sFR6Gw/Lb/XApX24W0/H5uvwv+8U5kstTgwAAAAAASUVORK5CYII=",
          traits: ["エ"],
          baseStats: {
            hp: 10000,
            ap: 1147,
            dps: 184.01,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 4588,
            actualDps: 736.04,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 4,
      stageName: "亡命前夜の奇襲",
      baseHp: 100000,
      width: 5200,
      enemyLimit: 10,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "058",
          enemyName: "メタルカオル君",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 299,
            ap: 99999,
            dps: 12986.88,
            speed: 32,
            range: 140,
            rangeType: "範囲",
            kbLevel: 1,
            money: 550,
            freq: 231,
            foreswing: 32,
            backswing: 12,
            tba: 100
          },
          stageStats: {
            actualHp: 299,
            actualAp: 99999,
            actualDps: 12986.88,
            magnification: "100%",
            count: "20",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "018",
          enemyName: "カオル君",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEDAwMDAwMFBQUGBgYGBgYGBgYHBwcICAgJCQkNDQ0ODg4YGBgZGRkcHBwhISEiIiIpKSkpKSkqKiovLy8wMDA2NjY2NjY8PDxAQEBISEhKSkpNTU1YWFhcXFxeXl5gYGBjY2NpaWlxcXF4eHh+fn6GhoaIiIiSkpKUlJSXl5eioqKqqqqurq6xsbG5ubnDw8PLy8vV1dXb29vg4ODl5eXp6enw8PD29vb8/Pz///8HFoUmAAAAQHRSTlMAAwkRq1pwkk8ZQIKjIys3Z7NO/lyRbdz/xqkZgpXr/6zLvv/y48v+1f7f7P700////dP//v7//v//////////NISuswAABAhJREFUWIXtV2t7ojwQ9fK2W2qVbtde1kKx0orYuMDmBiEZ//+/2iBFUYLa/bCf3mm/wJM5njk5MwmdTmt0Lfvq9vbW7rUvac/tWfbYmS0/VqvVwrW7X8zuj8bufJmwHADWIOniwfoCRG/0MF0mXMK6CsiT6V3/3HTbWRCh1vuh0tX0PCmGzpLKtSGALZzRyTq69pQoMOXrkGThDI9DdO05a0vfQODZ+KgUwxk/kl5IIVau1Z7fu0+O/X4pBZ4MWwGu3/NT+ZoEnrZx6N3jdgI1UxCnZT9Hr0cIgNrujlzeGfO7t6sjCkCepVwoKJYw10ihP2FHiweVEkyo9qhajIwVvJyUEHKCuVwDdU1usN8NHjx8A6A0gPq4MzjyziBBm62zmcEMY9JcmDf6CgRN9YhIxk0KjkHD7KCtleAkDKgA7p4FADzdUwEEY6lGiAQ37KSRQbJXQ05opiDFiFHnvBJkRPce84IPIZnA9+0MIE+3Ew3iurKf1ZBQSjRpOqEEgDUNURjxTwhSHxC6H6R2dOSJ3GtnIEMic4IiVkAAq2mQUZylFIUokjIYtGpAkSA0l4kfFwi12a7SNNXNpDYNRQ274JZsYxw/+UEiaCj2S98LMWtOlZKBQjT0SeJ5cVYlHrqpVLdpxQfyCYAirLj3lFaLOTVwyKaNbbCXG9kinLAoVaG/rUDFGmEPQz/A6uGQQs/ZjMQMESlYEsS7TswxrhsSNg/54vqQgjUtuALxqYijwAuSrZ1UjGv5rJy9fNaQcTQXxWrkERqhwPN2LuRoJ2Qe0E0RatkA6Dob58vYC1kSYbI75mS8q0H4FHjMFJ02AKqhBNTzuZYA8gqh7kjQhsRR9OEaJutoUTIF7nthzIhfnTRQn2361gIqm9vN/E5/Wm1+Gjz90H9+1nTAZsAnUTAxMOiOV6paw2mMIq8xJ3VhGcZxFKG3CxMFl9QOQUVCpPaS9b+kSYwCP/AfjafLUN9QdhlKoLQOAMV+oFDLI2T2YT4hh+4qrzUgrY00IHKdx2FEy83hrhGg039YkN0UUDUPQyIgCYv6E5zExOSDUsmRvucZOlgbINNjlTGCvB86Hs0lFNEbuR+ZqYU/rQk8IW83R6+NvTvTdU0xXhkq/dl+Uyrr0BdGw1ktq9LY5OS1dWhC2LZHZpiJTQTclLLqKlgNTt+ch5OQN0iIz+7IXk9T6Ay/vcRiCwF7NZjmejP6F99fEOZZLlVxntRbOjGcbYboWleD7z9fX+fvb28hitl2SrKZsZWMGH3Lsob21dXl4OYxYHLzDUSmX/2KKpC6vevBZP7r9+9fc+eEjY7SeX5+tv7mO/D/+Oeh97yMfi3KN90zHGRdXA4Gg286bv7bxU3xQr+/vDhooz/jnNeLeV9L2QAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2000,
            dps: 219.78,
            speed: 1,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 4000,
            freq: 273,
            foreswing: 34,
            backswing: 10,
            tba: 120
          },
          stageStats: {
            actualHp: 499995,
            actualAp: 10000,
            actualDps: 1098.9,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 5,
      stageName: "レッドキャット作戦",
      baseHp: 1500000,
      width: 3600,
      enemyLimit: 1,
      requiredCost: 210,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "406",
          enemyName: "真レジェンドブンブン",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 3000000,
            ap: 11111,
            dps: 20833.12,
            speed: 13,
            range: 200,
            rangeType: "範囲",
            kbLevel: 5,
            money: 6000,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 3000000,
            actualAp: 11111,
            actualDps: 20833.12,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "424",
          enemyName: "オールドリー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAEBAQHCAcKCgoMCwsIDgoNDQwQEQ0QEg0SFg0YGBcYGxIdHR0dIRgWKBkkJCQpKSknLR8pKyopMiAyPSQ4ODgyPyUyRSk0RSg9PT0/Pz9CQkIxTy9EUjRCVjFOTk5JXDhTU1NWVlZPYjxVaT9ab0ZlbGhqbmVubm5qd2pzc3N5gHiAgICPj4+Pj4+bnJmioqKjo6NN3IekrqixsbG3t7fDw8POzs6Y8bzb29vl5eXv7+/5+fn///98lDUNAAAAQHRSTlMAB7f5nhEf1j1c504tcxiC+kFiklKuz3C//vE0BITc/u9o/saT////1f+175n/0N77/tfo/vzy/vv+//7/////zgtcqQAABGNJREFUWIWlV2t3okgQtTNCMFGJijomazAtzStRIETo3n79/3811Ti7m50zGGHKc+QL93q7qrpuORhcH7aDBqjD+78EcoJ4vt6uZ1Y/vOXFeZ5TSst03Ov3X7JaSMVwoXg6Rt1PMjsyoZQuvvmSF1n69tKVwNnGhdSabQ4ClLDTviPemhwrBgQKwJTlcdA5D+O3mktg0LouDovxtCt+MJgG2bE2BJJns+5wCMsJGBNai3Lds5vQ+CUWmqde/260Uimp1xveEPDq6Q8IpkfOyj8hGGeCZe0dgJ6e4KJZVnuOZqUSR7tV38t7GUzRKAj+u7D2/f/u7vykRNp2m6dBRRl7s+2UltufL42XO9dC/yLQgmoRtAi0Ako54yy1t1SVptWQNV5u8M6dDP8RbR+lZusWAeNFXAnFOQ3mVFVPyB4tvq8efUIe/d39z3e8Sp+5fxvInqdMSVUtK1l67mrnY0xCCOwvvZndiBSXcmgkbkshZX7ir7cPG0xISMIoDAk+5a+TQVMDydpS8FOFd2Sc57nvAxzQECHxCWeVZ9oQLkI1v4ifTr24pslmswH95ptEeVGEXNItQmvIwMU2sufB8f09SwBPjHA4vr+JGK9zpmX5ss6kFrT9BNZ8X3GllKSABOm+f87ggQvGpVa0ggcr26+iHXMhIEn1IQrNZxOZb3zICw6l0YrDKGR1axuaJoEXyvj1FGKTed8/p5ArYWaploLXdZ63ddHA3FRWpfOUcwKnT4rEN1UIE1pzZQahVvUBh/sLTTDdH9fTNfTQM6g/naKNb3rAJ0UzibWmUXHaTdrxA8ud/WWlXKTLMKxzH/JnTpLU59/XPPoQf8eXzMDcObTOWDAh4SExjRRGOKFgZ6Ixg/Dj4yP40peRl26d54icmhSAgprxohFRRx8f8TV2YI8tFyeihj6EMxDIJmFQRM3J4fViF38KZ0UKfsBNFTHGByhjLVjOyivtELmPflQUuMki1CGvBU+4oEX7JPiFYAElwCeoeuibjo5yVhAm6D690lDRZAc/LkUCNeQsjAgGlqLK3PuvseewR+4qgbQVHIy0SURS72EmdXBE5GRN/yhNQUFy4llXP5yVZ7xIopwKduzqxyjgTf+KopaKl53XGeSVsI9pWRdMsiyYdV0HrDn4h5Y0P4H47bjzNoHcHAymShcgI+sON5MF/Cv1bDuu+b7PWgzjX+Wz5inSPtsQWhY8tpt1Rl2YoRcIAq4yIEBvPQkGL1wb/0GBkL2OYAjezwSty8QXBKw5wgA2jgs2cCE8Jpuzb6PXfjullxeNdJfsnF4E9zvfNU83fO7158gQmPmLFuHq0jrTHqPdbgQPa0l6Ekzwoxl/9qqnAuTiR5M8Zxftrp6jn8P6HjYKpuCy350efxDtVUQAaKpA8PNy4XSlQBOYxCt34kzAEEiEnz1k4kq05YwmQx+cBONnWDY3m4dvD7c3N8Ph0J2MnCuswRne3N7dPfqAfHj49inu7m5vhqPf3e4fmOi93AicnjYAAAAASUVORK5CYII=",
          traits: ["古"],
          baseStats: {
            hp: 1360000,
            ap: 9000,
            dps: 15882.35,
            speed: 32,
            range: 310,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 1360000,
            actualAp: 9000,
            actualDps: 15882.35,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "414",
          enemyName: "超町長",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgIGBgYGBgUHBwcICAcJCQkJCwgMDQsMDQsMDQoODwsTFg8UGBAYHBUZHhQZHhUaHxUaHxUbIBYcIhceJhghKBojKxwjLBwlLh8sNyMsNyMuNisvOCgzPCs1Pyw0Qik3QDQ9Qzo6SC46SS47Si5AUTFIWThIWTlOYT1UaEJfYF1YbkJpb2huc2pNilqAhHyHioSRloyUlpObo5mrr6isrqq9v7vNz8vY2dbj4+Lx8fH8/Pyy8HiVAAAAQHRSTlMABx8OwjW0KYkaelb9a0ekxGA4/oS4l3Dv0Mb+q+j/drvK1/+Poufz//7/9v//sP/W/Pv+0P/q/+v//v7/////yPv5jgAABBVJREFUWIXtV113qjoQLXApIgj1gB+IpNVUSUJi5FBKAYX//6/O0J61eh/usuH07a4zby6dnZk9e3bi3d2t0HTj5vdfhGZOHmbaNwCMyZonnwia7unjCrCma84T5zeCPo0erBHplmU+pEwKEU3M4bO5wGQ5oh9jG039TAAAixdwsOETcfRGlG9u+NHf0DiIEaWhpusLITa2cr49fYioTKO168YIsci5n0ScqXdg+6kQlMVxgFCMCMFrjBFPHeUC9GUqpUCui3CMCSUMccbEfsQMvIRxGbsupRhjijCOAyye1FVpzKAFEbgBHoJAGUEcU18VwHD8RcLlAIAQzAA4oEAlTRQ5sPyEckqFgBZQgDBllDHogtOJ2hRMH46XgoOCoIQYcYIZVABTVdWR4WwopDP5jsAZIgOLRETqq2T5qeSYccEBiSDiEgE62I7wBnuZMuifQi8MNORiABghRAjdpwwHbkwBgAYu5hjBRowAuLM2ICLggDPKA5cOTEaKJNr2e69OMkwPumcAQBglIp2rpGveZredWdqdscw4wy6SgyBiSqlU2gXN2XMhsn1oalbEoAcA4Nh1QQpquwA2lkkhOd2H1iolsYsHTQ1sEnFQIdF2/E3KgDmWbmYRRS6VgMACAOChQv6dFqaCoyBwERfHiKAAlAAIAjjIlDi0IgFGEoMXQe0UI/yeLgc9Ka2CNltT4iIC2o8hkeOhAwlSkJwcTXu1cr4gUjN9ioFyAusHlsI5G07nOGaEbezHsgi/moSx4KB8MLIAgxVC8eK9BHBXvDROlxfLsG5CGLOEgHjw4MT4gz9YJiZKRsRMf2ke9efzwbwBYCZMcBBePBgJCIARzkmMm0tRXk7z1xfv1LSvt8bppYOKUOCu1+AEcDxBsJWs6fKya87506l5O81v3U9OJtlxt1w5jo9olg0AeSPr67W41jwvkuI8v82ik+xCzx4k6y2Wq1W4L5r2WnZ9VzR5XhR59pUnmFPr9y80WzO88Nxe+65su2vR5uVFlNX5CzVpnwdo1upIMav6vi6AxLZmOa2q9lnVljRvB1vB8mvfVm3ft7Ksyqauu7PiFW+He0zggi6u/aW6Xi9dWRYQ1/5FEWCVSkIFkS0QWFdl3V/KuqovfacIoM3zn3ChgwRrYLFrLt21reuyrF8fFTmwdz8p+ApYat0DA1U1zLLeh57q5aKFSQolEMEvXQcIZQ01vM3HvNLM+fbpmAKNTdV1XVXVtTyMeSYOGPYPBx5LMocJ1JUQvvoj7TN+vNbNJS+zLF9nI16J/wJ4A4Asf9ofn84jG/gI+1SKfLt7fD6sDn/28rcOu+2j43ie/kcFQJgz09QM7Rt/G77zj+Nv/I3/RWiaYesfYRvG+JWwnKl//89H3PuTmfnfEL8Ap46ibM0xMWsAAAAASUVORK5CYII=",
          traits: ["浮", "古"],
          baseStats: {
            hp: 800000,
            ap: 11111,
            dps: 3787.84,
            speed: 20,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 11111,
            actualDps: 3787.84,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e13009Data;

