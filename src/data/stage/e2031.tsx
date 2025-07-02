// Stage 2031 Data
import type { StageData } from '../../app/stage/types';

export const e2031Data: StageData = {
  eventId: 2031,
  eventName: "魔法少女まどか☆マギカ",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 31,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "僕と契約して･･･",
      baseHp: 3000,
      width: 4200,
      enemyLimit: 6,
      requiredCost: 20,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1134",
          treasureName: "ちびまどか(299)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
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
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "3",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            count: "5",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "12",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
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
            count: "12",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "278",
          enemyName: "キュゥべえ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 276.92,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 900,
            actualAp: 180,
            actualDps: 83.08,
            magnification: "30%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "魔法少女になって欲しいんだ",
      baseHp: 10000,
      width: 4600,
      enemyLimit: 8,
      requiredCost: 35,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1134",
          treasureName: "ちびまどか(299)",
          probability: "10",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "4",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "1.3-2.0s",
            delayFrames: "40-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "3",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "007",
          enemyName: "メェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 28.3,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 500,
            actualAp: 50,
            actualDps: 28.3,
            magnification: "100%",
            count: "8",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "40",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "5.3-6.7s",
            delayFrames: "160-200f",
            baseHpRatio: "99%",
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
            count: "3",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMEBAQFBQUGBgYGBgYHBwcICAgICAgJCQkLCwsUFBQXFxcYGBgaGhodHR0nJycoKCgpKSkuLi4yMjI+Pj4/Pz8/Pz9MTExOTk5bW1tubm59fX2Ojo6cnJypqamvr6+zs7O5ubm/v7/GxsbNzc3X19fd3d3i4uLn5+fu7u7z8/P5+fn8/Pz///////+/QMgwAAAAQHRSTlMABw8XHycuNTtHUVjmacrUYXb/goy9nLD0puC3/8Tu1f/N3+3+5PL/8v/7/f3+/////////////////////wD/Fa4qEgAABctJREFUWIXtV9l2qkgUDThrSDQMikYwoCBFFUMV89D+/1/1gWjiTS7GrH7trS+6PJsz7DP48M9/xMP/BP883AGuN5zMFyJAmE3HfY67x+jKejwXlc3bwQIYb1tVEiYD/hfmk4X6Zh5d4vkAj2BkGRtpPrqTgh8vNibCXpQVZYsij33iHnVlNrgnEH6iGkcS52Vdn86oq7LIKLZ06Q4n+OnSxEnxYXyq2zeQ5CFaq5OfGOD5Fkmr0yfqqqpbilMZYXP5AwM3VEySXj++yuMoq96dKBNiKqObeegtdHxlfzpVMXYcHJ9dqhJsiINbDoyWR3ZtX6d49/Kyu5DWVezq8xtB8DOdZFf2p8Lfv768vOyD8vxFGVq3guiLRlBee5Dhxv5lR4qLSznWhW4XhooVXTtwysmuIdj7Fw9OZWAp3VkYbVDyB0GVuPvX1537mdg6QctJJ8F4i9M/CE5l4rkIR9UHQVXg7fwXBGCQJll1lZeSGIsbBO5Xgm+ovIN4fw6aoE91+758vOnBQLHY1W+bV5FDAco0Li40kINZJ0FP0L38KtwszzzCqjohLiuBJilBm2jTXQVuvEHR2YO6SCghnv3qJpm3e8UJtIUbVxVz1GEnQSNFkrcMdR0TZ7ez9zub+Gi/c2hGdnuSl5DDXjcBuGCB6ur3vtmBhjBxbOQQd088Z287LHG301sNzc+3iLUM0DfYdRwaoVebxGS/t5Hv2a5rSrf6+YHrL3SItGUACUVRkeO9GxfMfrW9PEY7bTm5PVm5oWR8DJBTG0oQV3WGHS+D6aDJsxsZOKdBMdzoqqnrZiZWMcuq3D9uhZ/sm7EkbpHfDNarDqgBmQf2/R/tAf35xsI0qy6CfJdFRCz5jue34Cey5nhxVrRqrpq9EvvIUH+M/wM94dnGfhBDQfOYUt/DyNgs7l2OD00tVBTEIStOFXXtvWnoG3HS+82K70kHvyyKqlkMtiYLk1H/dxcCL+gwiZvFlMbEUoc/WXMcD+A+7xB+2g6nKoto7Dub8Q/qg4NkIUqiMB1d4oQdheK6SlkQUB/dWgUP7UWx1A1T0/SNIk7PsfakY1gVURCEIcWmcks/sNE1y8XYBRw1WRy3T+MXBimzsLFnvrO9sc7A3kReyFjI0ozh/VqdNnLhprKbpQ1ByEJXn3bGwI0UzaURDcOA5VWVefZKngMDN1BQlLQEFAjmnRrkhWfHZzQMglZ30DEOlB0SwS8Ofhq2oNhYdCahr5iYwY8CnzULqEqYj62tOOJ5wSApDVoXiCF2EXAT2fEa/wOawl1Wl1FIKbEgEf35G26qGNwm4OGmgfyFNHrv3hIKxyhxtKUg6m6ehn5L0D0Iodx+niZpVrx3f5WEvh8yKP3Tk0mKMqaBHwTk0HkT9FUEEw8AogtpnFdFwmiUlqmHmtuqhqXGWOx3HhXccOMm7Qxn+Hg4IBIVZQ7e1HURM5hqMEyKLC/YsSsEbizDBQanLEO6KkobA9Gi9QeGUAk00I1JnObhoSuJ0HQ4g4dEriGOev2xqCMKaiizJEmatMAkDAPKiPF1GEL3cu85XJMchhZ+v0C5ITCwEr5oqgeFKSGnAQ3QVylzo8V8AM3PDWXLL+Dn6LzwuIEESyEOGmE00ihiYGqa6ctA4GfykzIHn4W1m0DPepYyvGQVGAJKGwWDIhohNDL42s789GllvqmStD2GZZGEWPtIEjdWNReEEDbyDJNmJgfo7etAgaNcc7BrmUcvg0QHzvqz2/jpxnR9xii4EUQFbIS/nej87Mn2It8L4Zqoc09Tr2LszZYGIhAGkERFXdKj/H0acH1pbROWNkXPIYWzQf8Tg6n6uEfNX66AJkmI/rZQuf5Mfnl1PJbEkeesZEFYfEKYS88ruLBtB7nYtVfK+NtK4QaC8vT4+KiZR8vUVqvH9frxE/BhdYamaY/PS/FbCFx/Cn9KJUlRVHW5XMryE+D5guaDLMP3qqookiguhPEXgn8Bp56rfE5s2DUAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 10,
            actualAp: 1,
            actualDps: 1.22,
            magnification: "10%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "278",
          enemyName: "キュゥべえ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 276.92,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 300,
            actualDps: 138.46,
            magnification: "50%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "君なら運命を変えられる",
      baseHp: 30000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1134",
          treasureName: "ちびまどか(299)",
          probability: "25",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "278",
          enemyName: "キュゥべえ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 276.92,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 600,
            actualDps: 276.92,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "278",
          enemyName: "キュゥべえ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 276.92,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 600,
            actualDps: 276.92,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "278",
          enemyName: "キュゥべえ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 276.92,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 600,
            actualDps: 276.92,
            magnification: "100%",
            count: "15",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.3-6.7s",
            delayFrames: "160-200f",
            baseHpRatio: "80%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "訳が分からないよ",
      baseHp: 90000,
      width: 3600,
      enemyLimit: 9,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1134",
          treasureName: "ちびまどか(299)",
          probability: "50",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 5000,
            ap: 2000,
            dps: 1463.41,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 8,
            money: 400,
            freq: 41,
            foreswing: 4,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "2.7-4.0s",
            delayFrames: "80-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "278",
          enemyName: "キュゥべえ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 276.92,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 10500,
            actualAp: 2100,
            actualDps: 969.22,
            magnification: "350%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "278",
          enemyName: "キュゥべえ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 276.92,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 10500,
            actualAp: 2100,
            actualDps: 969.22,
            magnification: "350%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-6.7s",
            delayFrames: "120-200f",
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
            actualHp: 35000,
            actualAp: 500,
            actualDps: 681.82,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "43.3-43.3s",
            delayFrames: "1,300-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 99999,
            actualAp: 2000,
            actualDps: 219.78,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "君は神にでもなるつもりかい？",
      baseHp: 180000,
      width: 3600,
      enemyLimit: 30,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1134",
          treasureName: "ちびまどか(299)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "278",
          enemyName: "キュゥべえ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 276.92,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 3323.04,
            magnification: "1200%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "278",
          enemyName: "キュゥべえ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 276.92,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 3323.04,
            magnification: "1200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "278",
          enemyName: "キュゥべえ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 276.92,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 3323.04,
            magnification: "1200%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.7s",
            delayFrames: "60-80f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "278",
          enemyName: "キュゥべえ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 276.92,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 7200,
            actualDps: 3323.04,
            magnification: "1200%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "278",
          enemyName: "キュゥべえ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 276.92,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 60000,
            actualDps: 27692.0,
            magnification: "10000%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "278",
          enemyName: "キュゥべえ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 276.92,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 300,
            actualAp: 60,
            actualDps: 27.69,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2031Data;

