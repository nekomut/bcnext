// Stage 24019 Data
import type { StageData } from '../../app/stage/types';

export const e24019Data: StageData = {
  eventId: 24019,
  eventName: "ねこのなつやすみ",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 19,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "夏休みのはじまり",
      baseHp: 2000,
      width: 3600,
      enemyLimit: 12,
      requiredCost: 30,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "30",
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
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
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
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "90%",
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
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "ひぐらしの合唱",
      baseHp: 6000,
      width: 4000,
      enemyLimit: 9,
      requiredCost: 35,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "36",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "52.7-53.3s",
            delayFrames: "1,580-1,600f",
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
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "52.7-53.3s",
            delayFrames: "1,580-1,600f",
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
            count: "2",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "52.7-53.3s",
            delayFrames: "1,580-1,600f",
            baseHpRatio: "100%",
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
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 2500,
            actualAp: 150,
            actualDps: 195.65,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "夜にあふれる光",
      baseHp: 12000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 40,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "42",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "103",
          enemyName: "ゴーストわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAwMEBAQEBAQEBAQFBQUGBgYGBgYHBwcHBwcHBwcJCgoMDxANDxATFhgUHSEWHSAeHyAcISMdJCYlLTErMDIqPkQ7Ozs1QUUxUloyUltQUFBRUVFRUVE8YW1fX19kZGRFcX5qampxcXFPg5B2dnaBgYFZlaSNjY1fn7BqssSfn59ywNOwsLB7zeK4uLjDw8PPz8/c3Nzk5OTq6urx8fH39/f////aM97rAAAAQHRSTlMAAwoQ0+UZIZ0tN4CqiUK+THKTWGFre6O/jJqxqsW4pMzBzMCxzMnKuMvMvcvKzMzMzMzLzMzMzMzMzMzMzMzMtX5w5wAABFtJREFUWIXtVtmWqkgQFOiBhlYEWRQUBBdoEJB9k+X//2oKXFsY8Z6exxvHBz2aYWRGRlGj0Z8CJeA/rnkEzE3QXxHg8yUB/aIeYlSN/U0PEKNZwm96gCjVkzmsXwP8jjR8fvRUkcV65gCRFDI8HoSTvPCo8j1tQMyYH/AYQglmtjjGsb8ier4lxtKKezkgfLJUNSuM42MvAcosDfWlRwyQH8dNPYt0yylelC2NfkVALi2/IdC+ukIxXtY28orGX80RYRdKw2CMqeefgQ3zNZHBe32A0IssmFkYTQ+hNseffgOzgEAge/VDOH8ZGTa3Yt8yLD80uL4W1NXzgkANI/q1oM89k2robzbGZuP7QudvEIKWLfWnCJhgELC9ciAzLTFjxNbG87yNFa67QjFW9kNrRd40QCi7AtnFxKBw+NY2Rgs1y1OMjeV3CBBKUD0wn3vWIIw/JAcW4Q5Fna3boRGyrx19RdF8S3yuZ2Wr3RF/dZ0vytt5FfDkOq3r0uGa1hBOVYzQ9/zjgn0iIFZeHB4Nww9V8tI/e8jrOl2JQVXXjYSmNZQbLwzLUOfs8yaxRuxrYL5GrFHnBnDRiaIokMwTqK9Lu5UwgnGGZVkG7/jNGaGmeb6lhUZLgJCCtNf3iqSkdYt0fTkKoQYdC4ACa3PcGJrWtgBh9FJ3HVNXJCc/E+Qm9zLqlAysURTF80SsXR1FN2030PWoaDs4pc76eXt/ABOlY+xZnt/kGeG2bpRmeRboUVYUp9MpDVzn0AnQI2B2ajQpMcAaQNTOTSLXNveKYl6hm1vm5YGHTSTjeNQE4BY6kZQ96MBxXTeITDtK0yRxFOk1AYRxs7nIgTBBpBxl+akoq6quqirRXWBkbpv6awLQBYq1uYdpp6xvKMvMAU5mbnoYIjgLgUeoGN3rMzuqSrCKVWoOtHBRQVEwvkpv9VWw0M9yImn6DgE6m6C4nD0ocCIwiWaR3AEXziBWa5zc5TcB7auuyiIJgi2Hdc7yzgSo7wNFbdv4FFlWXLY4iZy9bUrLNTfEADFOJFC74jw+3S1P4G1V5Lm7D9y9m+ywIQLWyb+5lqAqsyQtgss4ToHjBEXlvkFQBvPtOT+Bm+Tm1ZCqBGYWh0EC6lCm0v5MkOVlYdtRckewHiIY4busMPfFg4v7a550SfyPB88jEP6QR/qdoC4jHQS6QSTi6BuLgPHf9iNBnZiXT5EwuAUtUFLYPhJEdnklePN2BxG7HwRmdmoRvKkArPMjQeEo+hn7JfWmBPyeBUAQ3Xx0X5+qd6DgYdqHdNdzseoDTMnAdd3Uv1uAd2bz+t4NRukKhDfdhWSKJNGAllxlqpszEn+3HmTyYPPCloPbpxgqbAVmvX35UHgmwAUBp2bXZyFBEwhDD6bgBwOKQvD1ZgbOWWgEv3GL/ou/+J8BAgA/o/9u11uNkQz9NZl9fo6v+PycTb5olureLnsJCHo2nk4/Pj7+ueHjYzodf34xfXn+F0VuzkA1nN3jAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 180,
            ap: 16,
            dps: 10.67,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 45,
            foreswing: 6,
            backswing: 13,
            tba: 20
          },
          stageStats: {
            actualHp: 180,
            actualAp: 16,
            actualDps: 10.67,
            magnification: "100%",
            count: "7",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "104",
          enemyName: "ゴーストにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMEBAQFBQUFBQUGBgYHBwgHBwcICAgJCQkLCwsNDxAOEBISExUcHBwZHiEaJSofJyskJykuLi4pMjQqNTowQkg1RUouSlMuS1RERERGRkZUVFRVVVU9ZG8/Y2xnZ2dId4NtbW1xdHV4eHhSiJaEhIRgoLCVlZWXl5dstMakpKRzwdSxsbG2trZ7zeK3t7fBwcHOzs7T09Pc3Nzo6Oju7u7x8fH39/f+/v47lvleAAAAQHRSTlMABAkRGcYhKDkwlbVMpUNiWHxwhDeTtKPKjfGruNnCzMuvssrK4r3Ky/DMzMrMuM3MzMzM5czMzMzizMzXzMzMWEoGMQAABDxJREFUWIXtl1t7okgQhqUhAkpshEEwEFGbAOEwnMaGgYD//19tocZNNujqzs1epG5AH/rt6qqvv4bR6J5AInfX8/8MRpiP/wjAqgsJ/QlAMD1T5pj/DphZeWyp4v0E5jRE1MNd6ml31wFJ+Fh8hBfxLjaFuwHKFPe1Q8LcimNLubuVSFlvoPpI0r00tfD9UmDVIDNnDKeFu128mF1pJMOPhyrMaVGVaCKreuku93Q8+NAxV6wKA/yxnjVNpHKCZgEiXqn8JQIjT3VF/ILgF+V+X7syyyvQBUhC4y+lMFYXK134yGcQy80s2nX7coMV08t3QHCUCwlwAl6EjvJ3CoiXlOVSX9N2v+8yw47zNAVEag6OZyXNXNmOKb8DkKjoFvH9NaENpPD75SX1bNuJd7k1OL9khp6lKQL7no/8aKxJEEVrkmRFWf96fXp2wtCxQQxDAKR46WrOn/Pn1S0MjoLAN4w1BHl+enqOHduz01gfBMhW6CyU9xYx2CCE+EEQJb6xjpIkS16fXlLbsL3cGy4iK6nmaqVJxyX08qNV03ZdTR6MpO32b79fX/I4jPNQFwcB/aoXcXjaLGOz2h+DGg8PpIGbt18vYZ6nnnnBlhhO0px8l64OW09wmxOgJoaRdHDTvb0alqXPh9TajxdUK+x1EveOwczcdv9OKIoTrNAlgWcvCJnX+r2SpiAT8TMA5j5dyyU7PLgPGdKHLoHaVjP4KW7r99FNu2/qrqcU8ysAJdyFdhg7Tu5Io74LWXfMP/OjOiBVnVRthK+YgRLGdhjG3gnAzLZ9G9rIAD34hCTROqo21+wQe44TG6C01Do8xip9H7oqCai/LqK1nxFybQVg+rB8x3ZSTz263ngZ9cXv2q4q2yooazK56AN9cBMD9lmag20f+8Twilt1py50TZN8doovAXYEfdjF1nk7j1h5k9UHCbVN6S7/7Uhi8XTlOCb+sE527tOqa4skcpfyZS89Py5gBX/SKcipbrsmMtTZ+KZjGSF0vLAsOszHb+p9W1Fyrf9fguGxqql41p/j3JLC+CLS7jiOGEF3wUaibX9GICWqaVEk5gUHGApeC4qCVm3l6xICPZYAyFbSzS8FCJMMAM2+KwN4HeE3BQAKIt8MgIOQ0hK635ZFZM0lk5aAuKOKwqaqG4gWikepb5KqKSl1bwdIYCRd6W5dCpSuKUHMTV0FNwMY2W0busGCbGYgoboGXEVL96YijkFtrAp9Iwo7QjOz6BdRNg0tsqtGcJ4cT7AgQQmOXUfSJoH6Q0Ghmje9mTHSgmy3GUj/qDuEragn1A3dyjeVgFNJVoF9bE8HB4tNN0qyqgrU25TMiKrp/vy5PW9oJGLN3Gw386tO9JHAicKPH+IHQ0AcL4r8NSf8ju/4jv9j9B8XHDfugz/E4XYM/7G3eTI7w/PJ5HE6fTjHdDp9nKiKfPErafQXkwiiZQZdznEAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 200,
            ap: 30,
            dps: 23.08,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 60,
            freq: 39,
            foreswing: 10,
            backswing: 6,
            tba: 15
          },
          stageStats: {
            actualHp: 200,
            actualAp: 30,
            actualDps: 23.08,
            magnification: "100%",
            count: "5",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "105",
          enemyName: "ゴーストメェメェ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 58.82,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 300,
            freq: 51,
            foreswing: 12,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 100,
            actualDps: 58.82,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "105",
          enemyName: "ゴーストメェメェ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 58.82,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 300,
            freq: 51,
            foreswing: 12,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 100,
            actualDps: 58.82,
            magnification: "100%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "105",
          enemyName: "ゴーストメェメェ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 58.82,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 300,
            freq: 51,
            foreswing: 12,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 100,
            actualDps: 58.82,
            magnification: "100%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "103",
          enemyName: "ゴーストわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAwMEBAQEBAQEBAQFBQUGBgYGBgYHBwcHBwcHBwcJCgoMDxANDxATFhgUHSEWHSAeHyAcISMdJCYlLTErMDIqPkQ7Ozs1QUUxUloyUltQUFBRUVFRUVE8YW1fX19kZGRFcX5qampxcXFPg5B2dnaBgYFZlaSNjY1fn7BqssSfn59ywNOwsLB7zeK4uLjDw8PPz8/c3Nzk5OTq6urx8fH39/f////aM97rAAAAQHRSTlMAAwoQ0+UZIZ0tN4CqiUK+THKTWGFre6O/jJqxqsW4pMzBzMCxzMnKuMvMvcvKzMzMzMzLzMzMzMzMzMzMzMzMtX5w5wAABFtJREFUWIXtVtmWqkgQFOiBhlYEWRQUBBdoEJB9k+X//2oKXFsY8Z6exxvHBz2aYWRGRlGj0Z8CJeA/rnkEzE3QXxHg8yUB/aIeYlSN/U0PEKNZwm96gCjVkzmsXwP8jjR8fvRUkcV65gCRFDI8HoSTvPCo8j1tQMyYH/AYQglmtjjGsb8ier4lxtKKezkgfLJUNSuM42MvAcosDfWlRwyQH8dNPYt0yylelC2NfkVALi2/IdC+ukIxXtY28orGX80RYRdKw2CMqeefgQ3zNZHBe32A0IssmFkYTQ+hNseffgOzgEAge/VDOH8ZGTa3Yt8yLD80uL4W1NXzgkANI/q1oM89k2robzbGZuP7QudvEIKWLfWnCJhgELC9ciAzLTFjxNbG87yNFa67QjFW9kNrRd40QCi7AtnFxKBw+NY2Rgs1y1OMjeV3CBBKUD0wn3vWIIw/JAcW4Q5Fna3boRGyrx19RdF8S3yuZ2Wr3RF/dZ0vytt5FfDkOq3r0uGa1hBOVYzQ9/zjgn0iIFZeHB4Nww9V8tI/e8jrOl2JQVXXjYSmNZQbLwzLUOfs8yaxRuxrYL5GrFHnBnDRiaIokMwTqK9Lu5UwgnGGZVkG7/jNGaGmeb6lhUZLgJCCtNf3iqSkdYt0fTkKoQYdC4ACa3PcGJrWtgBh9FJ3HVNXJCc/E+Qm9zLqlAysURTF80SsXR1FN2030PWoaDs4pc76eXt/ABOlY+xZnt/kGeG2bpRmeRboUVYUp9MpDVzn0AnQI2B2ajQpMcAaQNTOTSLXNveKYl6hm1vm5YGHTSTjeNQE4BY6kZQ96MBxXTeITDtK0yRxFOk1AYRxs7nIgTBBpBxl+akoq6quqirRXWBkbpv6awLQBYq1uYdpp6xvKMvMAU5mbnoYIjgLgUeoGN3rMzuqSrCKVWoOtHBRQVEwvkpv9VWw0M9yImn6DgE6m6C4nD0ocCIwiWaR3AEXziBWa5zc5TcB7auuyiIJgi2Hdc7yzgSo7wNFbdv4FFlWXLY4iZy9bUrLNTfEADFOJFC74jw+3S1P4G1V5Lm7D9y9m+ywIQLWyb+5lqAqsyQtgss4ToHjBEXlvkFQBvPtOT+Bm+Tm1ZCqBGYWh0EC6lCm0v5MkOVlYdtRckewHiIY4busMPfFg4v7a550SfyPB88jEP6QR/qdoC4jHQS6QSTi6BuLgPHf9iNBnZiXT5EwuAUtUFLYPhJEdnklePN2BxG7HwRmdmoRvKkArPMjQeEo+hn7JfWmBPyeBUAQ3Xx0X5+qd6DgYdqHdNdzseoDTMnAdd3Uv1uAd2bz+t4NRukKhDfdhWSKJNGAllxlqpszEn+3HmTyYPPCloPbpxgqbAVmvX35UHgmwAUBp2bXZyFBEwhDD6bgBwOKQvD1ZgbOWWgEv3GL/ou/+J8BAgA/o/9u11uNkQz9NZl9fo6v+PycTb5olureLnsJCHo2nk4/Pj7+ueHjYzodf34xfXn+F0VuzkA1nN3jAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 180,
            ap: 16,
            dps: 10.67,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 45,
            foreswing: 6,
            backswing: 13,
            tba: 20
          },
          stageStats: {
            actualHp: 180,
            actualAp: 16,
            actualDps: 10.67,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "104",
          enemyName: "ゴーストにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMEBAQFBQUFBQUGBgYHBwgHBwcICAgJCQkLCwsNDxAOEBISExUcHBwZHiEaJSofJyskJykuLi4pMjQqNTowQkg1RUouSlMuS1RERERGRkZUVFRVVVU9ZG8/Y2xnZ2dId4NtbW1xdHV4eHhSiJaEhIRgoLCVlZWXl5dstMakpKRzwdSxsbG2trZ7zeK3t7fBwcHOzs7T09Pc3Nzo6Oju7u7x8fH39/f+/v47lvleAAAAQHRSTlMABAkRGcYhKDkwlbVMpUNiWHxwhDeTtKPKjfGruNnCzMuvssrK4r3Ky/DMzMrMuM3MzMzM5czMzMzizMzXzMzMWEoGMQAABDxJREFUWIXtl1t7okgQhqUhAkpshEEwEFGbAOEwnMaGgYD//19tocZNNujqzs1epG5AH/rt6qqvv4bR6J5AInfX8/8MRpiP/wjAqgsJ/QlAMD1T5pj/DphZeWyp4v0E5jRE1MNd6ml31wFJ+Fh8hBfxLjaFuwHKFPe1Q8LcimNLubuVSFlvoPpI0r00tfD9UmDVIDNnDKeFu128mF1pJMOPhyrMaVGVaCKreuku93Q8+NAxV6wKA/yxnjVNpHKCZgEiXqn8JQIjT3VF/ILgF+V+X7syyyvQBUhC4y+lMFYXK134yGcQy80s2nX7coMV08t3QHCUCwlwAl6EjvJ3CoiXlOVSX9N2v+8yw47zNAVEag6OZyXNXNmOKb8DkKjoFvH9NaENpPD75SX1bNuJd7k1OL9khp6lKQL7no/8aKxJEEVrkmRFWf96fXp2wtCxQQxDAKR46WrOn/Pn1S0MjoLAN4w1BHl+enqOHduz01gfBMhW6CyU9xYx2CCE+EEQJb6xjpIkS16fXlLbsL3cGy4iK6nmaqVJxyX08qNV03ZdTR6MpO32b79fX/I4jPNQFwcB/aoXcXjaLGOz2h+DGg8PpIGbt18vYZ6nnnnBlhhO0px8l64OW09wmxOgJoaRdHDTvb0alqXPh9TajxdUK+x1EveOwczcdv9OKIoTrNAlgWcvCJnX+r2SpiAT8TMA5j5dyyU7PLgPGdKHLoHaVjP4KW7r99FNu2/qrqcU8ysAJdyFdhg7Tu5Io74LWXfMP/OjOiBVnVRthK+YgRLGdhjG3gnAzLZ9G9rIAD34hCTROqo21+wQe44TG6C01Do8xip9H7oqCai/LqK1nxFybQVg+rB8x3ZSTz263ngZ9cXv2q4q2yooazK56AN9cBMD9lmag20f+8Twilt1py50TZN8doovAXYEfdjF1nk7j1h5k9UHCbVN6S7/7Uhi8XTlOCb+sE527tOqa4skcpfyZS89Py5gBX/SKcipbrsmMtTZ+KZjGSF0vLAsOszHb+p9W1Fyrf9fguGxqql41p/j3JLC+CLS7jiOGEF3wUaibX9GICWqaVEk5gUHGApeC4qCVm3l6xICPZYAyFbSzS8FCJMMAM2+KwN4HeE3BQAKIt8MgIOQ0hK635ZFZM0lk5aAuKOKwqaqG4gWikepb5KqKSl1bwdIYCRd6W5dCpSuKUHMTV0FNwMY2W0busGCbGYgoboGXEVL96YijkFtrAp9Iwo7QjOz6BdRNg0tsqtGcJ4cT7AgQQmOXUfSJoH6Q0Ghmje9mTHSgmy3GUj/qDuEragn1A3dyjeVgFNJVoF9bE8HB4tNN0qyqgrU25TMiKrp/vy5PW9oJGLN3Gw386tO9JHAicKPH+IHQ0AcL4r8NSf8ju/4jv9j9B8XHDfugz/E4XYM/7G3eTI7w/PJ5HE6fTjHdDp9nKiKfPErafQXkwiiZQZdznEAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 200,
            ap: 30,
            dps: 23.08,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 60,
            freq: 39,
            foreswing: 10,
            backswing: 6,
            tba: 15
          },
          stageStats: {
            actualHp: 200,
            actualAp: 30,
            actualDps: 23.08,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "105",
          enemyName: "ゴーストメェメェ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 58.82,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 300,
            freq: 51,
            foreswing: 12,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 100,
            actualDps: 58.82,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUGBgYHBwcICAgJCQkMDAwPDw8PDw8VFRUZGRkdHR0eHh4oKCgpKSkqKiosLCw0NDQ6Ojo9PT1BQUFFRUVMTExUVFRdXV1paWlycnJ8fHyFhYWMjIySkpKZmZmgoKCnp6etra2ysrK5ubnBwcHLy8vT09Pd3d3k5OTr6+vy8vL39/f8/Pz///+gTjTCAAAAQHRSTlMAAgcMFR0nMKFAOFRdSrXPhKvBb3pmmI3Y8aKx6rriyP/21/He/un//v/+/v///v//////////////////////VZxXkgAABRJJREFUWIWdl2djqkoQhqUIiiXGgho12ICt1KWIiP//X91FYzTnCp6c+WDDfXbmncLSaNSZoGpi7R9emTRuKeWb/A8YQZaFhjSYdcWG0B40fw8QJwNFkMbLhdKQ9aHyD4DRTFekkWWNpN7sXwCC9rbU1THAq/bHZqU0hF8TZN22pjr0rf4nXChK+5cyiKo6+cS7JWJkg/BwMOyrv/NBGvU/ZoCaMHSgjze75Vj6nQeCNtyZpkdpGPjMJXil/m45d2Gyd5yAlcYZ1pcDgvhXgUia3BCUhY1IWAIotIdXBQStI7/cvKk11fdRUxsN1zYNLw4Q861XeiAorVbzlQtiZ9gazGa6YSH3GgFHeNDo8q3lwXLYab/yQe1vNhu4gbfVFwvwdqBwWcBy1npVEPLY8mhIgM9+EBzrY2L4ngP6vXqC2O3vojw/oJ8uMObtPp3jMQbzYacWII3nID6diwSg8KcPNjoUxxAY4/rOErtLEwZZcWKAPBJCBJJTSrdTTarNg6AukIdtHOe5Z7v35YyC8ODbi578Io3S2PJZ6ELbSQ+PQrq2E2F7p7+sI2WBLwETGwYx/BbSh5AC4DpG+4UDYmfvXX32kY0dG19lCOHatEnAQutVU0pTeFOujMNcUx5+yMh6DS9gvHhRRs0V+U6b5xNzbZZCeqZJnUtfeNv6GIT21rsBsOkxH5mlJD71Q2SWVwJrUnuLEDr7b+EJ8Mo28n1KCP/RQX5YVsO0VgRxDL6LJwwuHz1gQ9t2SiWuItQmUv7AP8o3ZD6AcZaQMgUXBFnVApS7hl8dBEFcFKfMswEuQ2COUdsJmuH+cIDaKD4VxbnIIgfamEvhbuum66OGpfjYpocijw/nY5jlqQsADerzKI6s4C6iA2B4LIpjkORZdMiPWcTrm+x7NQCJJ+EGCLBN4kPCAt91XYenkhBMeEV/duoBlH5VPzJJ4CAAIEIYE+o4rlsWJnwB2JiP7YPcKD1k2THPT8XpGGMTe96+HjC/NXDIGwEwLsHFTseUj1nIy8mvBww2D2l0StXDMIpYQBGvR1qyvdoQZB0+jEF+RwL21QAi3vWKtxnXdJOyog9lEF1qOYqiOIrjOPoqzfV7dS0Lvb33CEgOXL6LBMUpz5LoCnjTKgG8jsL79vHhVJzvxhsi5r+76xoRpCm6+R6xJH9cXtop4xeouaseKfJ1IrOIbxUfz/+z4hAxntxppQi3gZhEQZT9uX9pecywjT4q56piOOX6OEZ+cnoGKFKGEFlUNvQXgPdtmD1ZzgEZg9RZtasA6mWcxAkkcf4UwOcC8DyjVwXQDI/XTUqBn54qAIHNgm3l+aAEsCS2KUufKVCq6Nox23ZrQgijlICgGkDXrB4Qpczk/VAFOOI5CqoBPAtJijYXwHNCBt8NVA1ormjqrN75zel5GZzPqTWZfM4qRZQ/iGP0eluHpc8BRWRozWm/Mo3SeGd0JFlHYcKPaef/M07Ooimoo8pKFLvvXYlPha1TtlKeHO+IIj/ybxkciQ1Rrr4/y0p5TZ5awaE4HzBhSZqmScLHEZ+KXl5EL44XX8ZPepjHkLtLY29Z+/12a6xWSxwXOa1uxD9C2XtZkeGp1u6125qmqYr6gdIitbp/+QTbnII4Z4YmfD/sCZwQu4u/fXwUtBWK4EAW7yaprd1nt/6U+7282e725+Z8qOt662a63p/P9FG3p75+euOZnraGb2/DIX+5Gf8y7L+39EH3j4n4H2iBW0BUMHPwAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 1300,
            actualAp: 80,
            actualDps: 100.0,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "022",
          enemyName: "ガガガガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgIDAwMFBQUFBQUHBwcICAgJCQkKCgoKCgoODg4PDw8VFRUWFhYcHBweHh4eHh4jIyMjIyMoKCgsLCwuLi4vLy8yMjIyMjIzMzM1NTU6OjpCQkJISEhLS0tMTExXV1dYWFhcXFxiYmJlZWVtbW1tbW1ycnJzc3N7e3uBgYGHh4eLi4uNjY2VlZWampqjo6Oqqqqrq6u1tbW/v7/Dw8PQ0NDX19fg4ODq6urz8/P7+/v///8F0x8XAAAAQHRSTlMACBCL/z5KVh0nZS53/xQ3Qf+GqUph/1R3aZe9pv7jj//xo9ux//L/xObT/uD/8P/h/u7/8v//9f7/////////YcASAgAAA+pJREFUWIXtl29vqkoQxoWDrYqotJVqLbpFKB6XdV2BdWH/8P2/1R28Nyc5SdNCc192YuKLZn4+s/PM7HYw+Cjs4WIxtj/8U7ewH7PzMV4tRtZ3Ceur0UpcjtF6/i0hthvLxjSNltdztOgvw1q9TjPdEprG1Of17Aadr9ejroD4mm0JELTWptHF2hpYi+gsTovOAKUFk5olKMlVo7O5tT7XRh06K4gUaDe55ziOl6qmjpZn3TTXdcf8gbWroXoZOijHvpcbc9nnpNbHcVfAYFkAgHuQq4mT6KZOAo/IqHs7JhgUC88hGgBINxqHCFerzvn2BkMNCjk+TnwHGyNynLLrc3dALKF9TYXgEJ1ANIrwEPEeAGtX3TwkSRggbhqRcFTmPQCDp8KYxvBcSqmMMSQsmaB9AKNDawTioRK+G50EJSNYdD/EwWB1hUThO34qW0P4JUNpL0ArwegUzjDVAPJzEqTdjQhhvbZeZADwuQFHMQyAHmfwn5lzz0+IAIBDsIeKpx6AwdMF2pD7eesHAGDmhZdegBmsJI2QklWtYCoT4QeXHiXY7vNLbmQY1okfhIHjoCrwOwOs8TrOCiFl4vn85mbHCSvks44Ae7q/gv20JB7kYVgpbS8E9k/dzsBencACMk9CmGBhSkhHyPFKEnTbiNbqots59DxcKZiEKvAcJAIAhNkcNrP71VJZwPLTIDxgqsIgAoGCoCIASI7j2e58/ELGrXuwB0OhGfy2c/t4XAR5SiJ7Vcjz/dOniOfCNDIISGW4365kTEJgMIkIwsun8yVexUX2Sb4dwfBpymEH0CQJfWiDpLDUKMbJ+zTO1uPdtT5+AnAzrWoJ6XAfabhdSQhrFVycaybk6X1nP19O0WcljKNjvKHa3AIQuialhn0oFVUqZ/vJ4bj8/La2R/b4Zf/7BJEdD78vSmKS50RLpgn4InhbdbgbrPHw7v7+zh2Nho+4pFhLqkFBQjnCOJp9DfgT82hPVc2MItrkNUlLRMuiz2aNa86bKgeAbATlKcI573O/LQvDRQMKNG3dRWkpaKUPnWtwN3UDAEWhkcIYzjijpe4OmMUYhPOm/fmawoCUhLJKic4lPBesbvWbksPdKGBDKsnT/YvbMd/ayTaTqkZSZWrCajBn9jLufIRWXAt4lLCyrV4ZSZOyLnY93ozWMo4fdofD5sTLJC1LglK26frG+pdgW5Zlz9w9IzlTjAnC+tyNf2J+5rnC5ds73b51fSX+FW7GMd9uHzf7133XBvwV1nIbbjePDw+vk4fvPd2t5ebX43DoutZ3n/62Oxp++9+Gn/iJn/g/YnQ3mUynv24xnU7uP57JfwBG47Z/ChBmWwAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 5000,
            ap: 350,
            dps: 119.32,
            speed: 20,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1800,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 350,
            actualDps: 119.32,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "樹上のひみつ基地",
      baseHp: 20000,
      width: 5000,
      enemyLimit: 10,
      requiredCost: 45,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "48",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "100%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "100%",
            count: "8",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "100%",
            count: "8",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 250,
            actualDps: 208.33,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkRERERERETExMWFhYXFxcZGRkZGRkaGhoiIiIlJSUnJycpKSkuLi41NTU2NjZGRkZLS0tQUFBZWVllZWV0dHSAgICNjY2goKCwsLC9vb3GxsbOzs7W1tbf39/l5eXr6+vy8vL29vb7+/v///////+owrlPAAAAQHRSTlMABQkPFx4kLDw0RllgjlFsdobIf6Swls+duNr0/6zjws7Wjf7n9tzA7v70/eX+/f3+//7//////////////wD/w/k4QwAABRJJREFUWIXtVtmWqkoMbUAGERXbEVHUdjgCQlFVIGNd//+vbnBqRPquddZ97bw4kGx2UjtJffzzP+3jF+AX4BfgF+AB8HfGSYrMl5+CwP1l6C1e1pdfvRYvqv2O2IDA8YLA/xdyq792TsuepBlzoyPUo1uy0tP6HbUt8j/E88rSp+Q06xuOexi0XsMFWZsYU8varEa62kSvJDA8kCxCh9UOYWckvzi1erOpuXf9IEDObqVLjQjS0glZRn3Hdl3bUKpEeXVsmR6J4iSJQ+ysu+16hiXL9grFjGVxRLFvz4fVtwjqaG56tLiAFSn1rIn6jtDSIAPGLqzIkgg7n/1KFfj2YGraJL9cLQOE0TuCPDnSgl2KODxnLMF749uFk/rGzg1CePxEmLRf68CJ/bUfgUOCPRSxgm6tmfJwgWdOEKaP+Mslp95GF6vxQltfOTSFZ7G/tWlRhJ5tdRXhntzKIWlxqVhGHUN9UoBD7nU3Lk3LN6TYR2eoZYjd3aR9je8Y9fgLS4KDfk+RF9vaZH1EYXZlyLKk5MqKFCTRL8n1xkecvMbDY+rMrucEwteXm51Hzvkzw+uXIkvDk17qc7QL4lo8+ESeofJAXhkam6OHw6zuklKQtVbqc+6fWT0eckCrjsDL/bHlIHpO6+EMyuQfv2SQ13iP87d4OAi87ku9yfSIaFzUX1CWICHHGXAUtKkXvhMoAQ4D3YDcG8PzmAanr1JJrYEVJA0AkIL1OX2W/tWKM0HOatgu20kcmThrIFBE3sLcB3HeGI+Oq0nn1kzSeB+cG96SEXuxRee30wFuoJHjqCfdp6I0Nm0/ZKzuFPuLhRs2vR907izV5+iTDHPhRW9+RegubNKUP3RTcKh0stidm3785phDBg1/X9mdPUP57lRemVn4/U0Ztm3yfn7sCnBatqtzZnDAb56XLLC/9XnrIQgvewj62asB7PB3rdnN+5Ii+6HPUjZZVpYzD6MMfsb+K8DwUJEyy29gie9SdqedRQRjEsZ5ihHNLm8A+gY9lFSO3Nv3BPkPgefUd2GMu9AT1PPDog4g9KfoqeX8TJNbCkFwLwFLCMKUYs92A+JuYbDXAbTP7/NKKYnvp0DSRz3jOC1g/GBgsTcdUtQAeNXwnoqL4cW3KBI+CnNXaZFRdzsfr1EW+yu1MrFhINjo0bNJ4Ee3XMJz/WxZRo5Gf+YnSbAbyBUAaWZu3ejmnhH3tp5Y+i4uFnurjn6KstBba5XFKGjj+R2AFZHbOB3u1cAHrfcHJ1Gw0yt7ixN7I+ehugR51/3XaDk5aPLXCaPTSqsuPk4cHkl6i8qJ69GSPWtAKRm01NmfZbfzsrU+eM1y6a3o0GrbEoGl8fucStG6xwuy2m7VLkIcrAYvKso2YFmwNV2SpATRGgcYMs4S+phruEa11AFs3rzspILYc1hjBLnkFYCBpg+vC7dCQZD1tU+zoihXmqHDJtzbuLYti8hfqgLHNd+fOHm4caHlcgAYKXJPH1lByqr8sxDtl321Lf9wiePl4XQP4zXBx4HI8WLPcEpJPeYDSNO37cOf5XLW7bQaScAtZfRpedhddfjy1gj3EVgqpeVpEidpiMGQ79nmWGnmwAlwDZjv5wOZhxurqHQtj4SlERyggNAwCkmAA3c77bR+uNBCLYfjrtKS1Y6mD2afpn217QJsa7u+t11s4cd8onVUqeEeWFZCVCRB0rqj8dgwPqevtr5/fhrj0eC+2D7+Ba82oiuDymP5AAAAAElFTkSuQmCC",
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
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.3-16.7s",
            delayFrames: "250-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 7200,
            actualAp: 300,
            actualDps: 562.5,
            magnification: "20%",
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
        }]
    },
    {
      stageId: 4,
      stageName: "夕飯を告げる声",
      baseHp: 30000,
      width: 3600,
      enemyLimit: 10,
      requiredCost: 50,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "54",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            count: "1",
            spawnTime: "11.7s",
            spawnTimeFrames: "350f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            count: "1",
            spawnTime: "21.7s",
            spawnTimeFrames: "650f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            count: "1",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 2500,
            actualAp: 150,
            actualDps: 195.65,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "15.0-30.0s",
            delayFrames: "450-900f",
            baseHpRatio: "99%",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 2500,
            actualAp: 150,
            actualDps: 195.65,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "048",
          enemyName: "エリザベス2世",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 40000,
            ap: 400,
            dps: 545.45,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 600,
            freq: 22,
            foreswing: 14,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 400,
            actualDps: 545.45,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 5,
      stageName: "防虫剤の匂いの浴衣",
      baseHp: 40000,
      width: 3800,
      enemyLimit: 10,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "65",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "262",
          enemyName: "やぐらわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAHBgURDAkRDAkUDAYSDgcbDQscFxQnFxIkGhMpHRg7GhMmIx8vIBkrIhwsJiMzJBpFKh48MipBMyQ/PDRROCdDQkFGQjxTSjdYSDtxQyxUTkupLydiXVWVSjJpYlN3X0q4RCzLRjLlPC5wbWyvWkN4cWaFb07oRzqLclKIdViAfXybfV7baE2ni1+Qj4+akYLtd223mGeenZysqanoonO0srHGxMH5xWf2v7nY19P+34Tp5uX58uv///9vMCoTAAAAQHRSTlMAsEck/NcRZDNz7VOGG7+vn/9q3PI4/4NMZO/+2P53/6L97v3//v/n0//5wv7+//391P/4//v///////7/////+3nS8gAAA95JREFUWIXVl2t3sjgQxy0qIl4RxQtYyIpFESQsiYlGwvf/VjvYnmdfbFujvtpRTkIO8+M/kyuNxq+mL5eD35/43X0WZEWw0J91XwRFVsD/8JSKwfJQFMjJChdlRf5uPOhuvOdFhhx7hOKR7bhpkQcz9Ugg9LxI3el02jFWSNPs6dSNC+Vk1KEXseNMu51usxllM73X7dmOg9SSoUPooH06Ho2bcNuMilnd2h/2p7dI3u8BBofYndruStNver8AgGjaCNrj6K4Eo9PvdbMYALUZUdb7rDW9Ymz0u0q9Mdml8e5ws138by2NJireYPPsB5srAjTTarUsuNpm68vqO8vsKAJ0D1n+sXBbb20rO/rg6x6LuIV2qkNJ36Xu+Xw9W2/tQp7PqGWdztermz4CQNervDpv7ZO8XrOWc75KiV4BXB8GOCD6BCGk1/PJbVkFBOQ8BGhZrmtBElur1bTuBBc5rfgRQL9Tm2YYWnc8NB3HdSwT7ZrqAK2hNwbwQn2eUxZ/3Ayt5ooS9F3cWwSLA0yjHhWcEf/LtopDUfe2nhd5eL4IPC4E57Wza7k+OiguKTuEyTZJEpQkogbEvu9YFhDwTFFBkjCMGfEOtFYg0hrgAICqAYwIM4qZZF5+A9QKIATH9xM1wHiFhaClwAnFdQgC3ZLg+yhX68j3hArKhGD0PQAAYzAOgOA4iWISZxETZUkEfx8soBt5YlmOCyPTiZZK/pBEXlWSchY0GssIg/+nmR3lgUQozXOM6zVcM6em1R6ZpmnZqnOh6SHb64/gmkwmfbM9soZ9czi0bNW50FtvNuE3v79Ud9jOOvzW/leA0+Vy2YfhEYpTGO5Pn0WhNpBrwAXGwTEM/66q6gKeJRT7/Z4ungPsbwDgKAO63ymAgr0EgBCeBXyGsH9ZAQAUJ+OPIXBVQP+HEJ4FvKzgTw743TPeryHsnwa8rCB8VcGfXri8quABgJDf5UARoDfGPmPyBiiFZJvNpgbAokoDFYIRLPI4JbwEwAfGhPlZKipJ4jXBWGFvHASRtwVLWA1Ikm2y3SIqRbJF0IoOd1c1AMCbYFvmADgSRkiCMS4lxQTaSXR/WZxxWQouCShYf8AeWTLBiJSsrCTnZXT3m8eYQ8CiPhtsQv9DVGWdRwK7fSXr5ujumrLYCcnhSco2YZqUUJeiPu2QSvCyZCS/G0EOCjjhnB7DDQbdjDIGOz2pZEkZv//RpS9vZwPBsb9e+7KqX0whpxjGFOciv7/DD/ISDkgEr+ojMmEcFGCoruC0ReHUoLA5zVer0Wg46mqa1h3Zo6HtBT1N69j2eGzbk/8o+AcF7vxDHx8aNQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 100,
            dps: 11.95,
            speed: 0,
            range: 1800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1600,
            freq: 251,
            foreswing: 52,
            backswing: 27,
            tba: 100
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 10,
            actualDps: 1.2,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
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
            actualHp: 1500,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "150%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgIDAwMDAwMEBAQEBAQFBQUGBgYGBgYHBwcICAgICAgJCQkMDAwQEBASEhIVFRUaGhodHR0hISEiIiIqKioqKioxMTE1NTU7OztCQkJDQ0NHR0dOTk5RUVFWVlZbW1teXl5iYmJtbW1ubm51dXV+fn6JiYmVlZWenp6np6evr6+4uLjFxcXNzc3V1dXc3Nzj4+Pq6uru7u7y8vL39/f7+/v+/v7///9XpAzyAAAAQHRSTlMABgsRGiQsmKc0Sj1VuF7GiGbsb3v+kp2s37jPwf7Vyv/e0//n3P/x5f//9f///v7/////////////////////6GkQNgAABV5JREFUWIWVV2lD4jAQXe5DRFgUFAGrZYM9krRN0iZNk/7/f7UpCNpDl80HbMF5ncy8vHn99euK1eqMpov7+/lk1G1d8//V8N5kuXk9eN7+9WU17/03RGfy+OpFMRciiQnar27a//n4+x2iUuncLK0k89aT/0Fo9Vf7SKj8slQCn+ed6wF6qwPNdP5laYF3k6vr0J3tqcrLSwv02LsyvjN/jbK8ujR7vTKF9uQZy2oCZqVw2b0KYLRGXNfjc0VeRtfE95Ze0hSf62Q/vWIP7Xm9gB9LHO6v4EJ/3ViAYgvSG/ybCu3FIS4TQJ//qgxv+v8EGG2CcgfViVA6U0rH+8W/9tCdHcoV1JwWgFoxxpVEm/HPZezcv5JKAeJTT1WISaYSZ/gjGzvzXSjLCSjiJyqTggcuihl17n6iQme6q3VAIshZAB3b2lrAsqwfMmh1529YVCkkHBdZDw8PWx9hd2u562/70J2u3kmNATqLcAAeHiycyIwHmHx7oIwCeax+BE37sywJQwIhUxmBxFs2c6m3LCtQJY2MubZDOLIxXjcWob/ck6zxBB2X4pyHDuYYJfR10lC+/vJAG9K/ZJCEiUpjLpNECW/WkL9RwFL62typz4SyKDLs0JKap0i8rsV37ssHWBv+m3VB0Dw09NYqxojnKnquxrenu7ICakkQhCjiKj+dI14otOEk9GMjS7tqAcYblJY2oBh0IXSBS+QRQSmzAZVQ6ICQZ6SaQe/RryigElxImVIfhPJUEZVn1LG2W8v2aVABaC/2rNq/k4YojgDJigSYea7jhhhHgQ0OqzLAjRGQbwigOXQLcZAoIg6ME0oYj6ynaSm+u/SqEq4v95qBwKSfurbtxMw1ZxGxw6A0G9rzmoDo5JNTKfRFQQPXpVkE/MBHYeUwNUiwCnx+uSaA6qKqQmnBhBIE3PbLCezj6gYUdi4AeeLgLL8QyriEiib2HlG1giUAo6Lg02Uk2L4dl1S5NX6jtQ6owEk+b8KtDSOWSini6PA8uCmrSef+nVfjc00A+TwGZLt1AIAIufvNbFI1a70VlDWAXPjo8q2mls0YhhDay36nJmYjU4K6CpkixJd5xiyb60xK7i0atHD83MRCQ59LCgYAHHcpGgEmT6EqAxRP1hIDdsnAdtPiIvWaJvvkKSoBmAFs7lXB4DNADPBxlxI1qXEtA0kDZrSBO+faaO4ExaUhxKrBHxU1KGmZJNA1/lS48EzwtKBiIez4sQGg/4jKbdRKUAgwBfiMK91Tp1XYZBK7My+t9iATAQB29LEzlfmuOF6QTcNYbk/3dT+mZWSBM5l1hhxxasfbTR3g1+iF6DpCAi4lMKmD0zPifdNU7a5QfSCp4jBcbugHJ/hh3gBgLFlSjS8LguHEaeiIRiYZTxZWUzDb9r+UlhtZ1MdvG42ymWqsKmkKnwp/WuKDVCpcNzrt3qOX1FyR/UXnpO+fpgvZNdqr1njtmcl37IX5NNlmkb2N1BnUUPBUEfO20GwRWzerfRDzYpjxONVahmaE+emluyo6teF7q97qLTb7A3AggmZ0isDaAtsOvmgSIMcJS79/X2mPpsMtDMOIsghurSgObZvlnxlQk47m/g9vTMYhIC7TwMgnsBweOcA/00PFrhneOovhTy7ZjAdjMDMWEpYgh+IoORoG81wT6NBMMnxYj5t9eqvd6XbHu1CkKU9EZnyljdmHXdZpjIEdxBRZT4Npv9ftdjvtShqt/nw2GN7+tn3oA9sPGXGMKaWMxklSBBqLa0zyw8Pvu7vb29vhYLYYteoAg+HQ/Hp7d3f3/PZSfO7eXv68v/95e747r+L34XBQAHzs5C9jMBFYIuE5XwAAAABJRU5ErkJggg==",
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
            actualHp: 1500,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "150%",
            count: "3",
            spawnTime: "45.0s",
            spawnTimeFrames: "1,350f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 1500,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "150%",
            count: "0",
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 24000,
            actualAp: 499,
            actualDps: 651.39,
            magnification: "20%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 24000,
            actualAp: 499,
            actualDps: 651.39,
            magnification: "20%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 24000,
            actualAp: 499,
            actualDps: 651.39,
            magnification: "20%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "今日だけは夜ふかし",
      baseHp: 60000,
      width: 4000,
      enemyLimit: 10,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "76",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "103",
          enemyName: "ゴーストわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAwMEBAQEBAQEBAQFBQUGBgYGBgYHBwcHBwcHBwcJCgoMDxANDxATFhgUHSEWHSAeHyAcISMdJCYlLTErMDIqPkQ7Ozs1QUUxUloyUltQUFBRUVFRUVE8YW1fX19kZGRFcX5qampxcXFPg5B2dnaBgYFZlaSNjY1fn7BqssSfn59ywNOwsLB7zeK4uLjDw8PPz8/c3Nzk5OTq6urx8fH39/f////aM97rAAAAQHRSTlMAAwoQ0+UZIZ0tN4CqiUK+THKTWGFre6O/jJqxqsW4pMzBzMCxzMnKuMvMvcvKzMzMzMzLzMzMzMzMzMzMzMzMtX5w5wAABFtJREFUWIXtVtmWqkgQFOiBhlYEWRQUBBdoEJB9k+X//2oKXFsY8Z6exxvHBz2aYWRGRlGj0Z8CJeA/rnkEzE3QXxHg8yUB/aIeYlSN/U0PEKNZwm96gCjVkzmsXwP8jjR8fvRUkcV65gCRFDI8HoSTvPCo8j1tQMyYH/AYQglmtjjGsb8ier4lxtKKezkgfLJUNSuM42MvAcosDfWlRwyQH8dNPYt0yylelC2NfkVALi2/IdC+ukIxXtY28orGX80RYRdKw2CMqeefgQ3zNZHBe32A0IssmFkYTQ+hNseffgOzgEAge/VDOH8ZGTa3Yt8yLD80uL4W1NXzgkANI/q1oM89k2robzbGZuP7QudvEIKWLfWnCJhgELC9ciAzLTFjxNbG87yNFa67QjFW9kNrRd40QCi7AtnFxKBw+NY2Rgs1y1OMjeV3CBBKUD0wn3vWIIw/JAcW4Q5Fna3boRGyrx19RdF8S3yuZ2Wr3RF/dZ0vytt5FfDkOq3r0uGa1hBOVYzQ9/zjgn0iIFZeHB4Nww9V8tI/e8jrOl2JQVXXjYSmNZQbLwzLUOfs8yaxRuxrYL5GrFHnBnDRiaIokMwTqK9Lu5UwgnGGZVkG7/jNGaGmeb6lhUZLgJCCtNf3iqSkdYt0fTkKoQYdC4ACa3PcGJrWtgBh9FJ3HVNXJCc/E+Qm9zLqlAysURTF80SsXR1FN2030PWoaDs4pc76eXt/ABOlY+xZnt/kGeG2bpRmeRboUVYUp9MpDVzn0AnQI2B2ajQpMcAaQNTOTSLXNveKYl6hm1vm5YGHTSTjeNQE4BY6kZQ96MBxXTeITDtK0yRxFOk1AYRxs7nIgTBBpBxl+akoq6quqirRXWBkbpv6awLQBYq1uYdpp6xvKMvMAU5mbnoYIjgLgUeoGN3rMzuqSrCKVWoOtHBRQVEwvkpv9VWw0M9yImn6DgE6m6C4nD0ocCIwiWaR3AEXziBWa5zc5TcB7auuyiIJgi2Hdc7yzgSo7wNFbdv4FFlWXLY4iZy9bUrLNTfEADFOJFC74jw+3S1P4G1V5Lm7D9y9m+ywIQLWyb+5lqAqsyQtgss4ToHjBEXlvkFQBvPtOT+Bm+Tm1ZCqBGYWh0EC6lCm0v5MkOVlYdtRckewHiIY4busMPfFg4v7a550SfyPB88jEP6QR/qdoC4jHQS6QSTi6BuLgPHf9iNBnZiXT5EwuAUtUFLYPhJEdnklePN2BxG7HwRmdmoRvKkArPMjQeEo+hn7JfWmBPyeBUAQ3Xx0X5+qd6DgYdqHdNdzseoDTMnAdd3Uv1uAd2bz+t4NRukKhDfdhWSKJNGAllxlqpszEn+3HmTyYPPCloPbpxgqbAVmvX35UHgmwAUBp2bXZyFBEwhDD6bgBwOKQvD1ZgbOWWgEv3GL/ou/+J8BAgA/o/9u11uNkQz9NZl9fo6v+PycTb5olureLnsJCHo2nk4/Pj7+ueHjYzodf34xfXn+F0VuzkA1nN3jAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 180,
            ap: 16,
            dps: 10.67,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 45,
            foreswing: 6,
            backswing: 13,
            tba: 20
          },
          stageStats: {
            actualHp: 360,
            actualAp: 32,
            actualDps: 21.34,
            magnification: "200%",
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
          enemyId: "104",
          enemyName: "ゴーストにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMEBAQFBQUFBQUGBgYHBwgHBwcICAgJCQkLCwsNDxAOEBISExUcHBwZHiEaJSofJyskJykuLi4pMjQqNTowQkg1RUouSlMuS1RERERGRkZUVFRVVVU9ZG8/Y2xnZ2dId4NtbW1xdHV4eHhSiJaEhIRgoLCVlZWXl5dstMakpKRzwdSxsbG2trZ7zeK3t7fBwcHOzs7T09Pc3Nzo6Oju7u7x8fH39/f+/v47lvleAAAAQHRSTlMABAkRGcYhKDkwlbVMpUNiWHxwhDeTtKPKjfGruNnCzMuvssrK4r3Ky/DMzMrMuM3MzMzM5czMzMzizMzXzMzMWEoGMQAABDxJREFUWIXtl1t7okgQhqUhAkpshEEwEFGbAOEwnMaGgYD//19tocZNNujqzs1epG5AH/rt6qqvv4bR6J5AInfX8/8MRpiP/wjAqgsJ/QlAMD1T5pj/DphZeWyp4v0E5jRE1MNd6ml31wFJ+Fh8hBfxLjaFuwHKFPe1Q8LcimNLubuVSFlvoPpI0r00tfD9UmDVIDNnDKeFu128mF1pJMOPhyrMaVGVaCKreuku93Q8+NAxV6wKA/yxnjVNpHKCZgEiXqn8JQIjT3VF/ILgF+V+X7syyyvQBUhC4y+lMFYXK134yGcQy80s2nX7coMV08t3QHCUCwlwAl6EjvJ3CoiXlOVSX9N2v+8yw47zNAVEag6OZyXNXNmOKb8DkKjoFvH9NaENpPD75SX1bNuJd7k1OL9khp6lKQL7no/8aKxJEEVrkmRFWf96fXp2wtCxQQxDAKR46WrOn/Pn1S0MjoLAN4w1BHl+enqOHduz01gfBMhW6CyU9xYx2CCE+EEQJb6xjpIkS16fXlLbsL3cGy4iK6nmaqVJxyX08qNV03ZdTR6MpO32b79fX/I4jPNQFwcB/aoXcXjaLGOz2h+DGg8PpIGbt18vYZ6nnnnBlhhO0px8l64OW09wmxOgJoaRdHDTvb0alqXPh9TajxdUK+x1EveOwczcdv9OKIoTrNAlgWcvCJnX+r2SpiAT8TMA5j5dyyU7PLgPGdKHLoHaVjP4KW7r99FNu2/qrqcU8ysAJdyFdhg7Tu5Io74LWXfMP/OjOiBVnVRthK+YgRLGdhjG3gnAzLZ9G9rIAD34hCTROqo21+wQe44TG6C01Do8xip9H7oqCai/LqK1nxFybQVg+rB8x3ZSTz263ngZ9cXv2q4q2yooazK56AN9cBMD9lmag20f+8Twilt1py50TZN8doovAXYEfdjF1nk7j1h5k9UHCbVN6S7/7Uhi8XTlOCb+sE527tOqa4skcpfyZS89Py5gBX/SKcipbrsmMtTZ+KZjGSF0vLAsOszHb+p9W1Fyrf9fguGxqql41p/j3JLC+CLS7jiOGEF3wUaibX9GICWqaVEk5gUHGApeC4qCVm3l6xICPZYAyFbSzS8FCJMMAM2+KwN4HeE3BQAKIt8MgIOQ0hK635ZFZM0lk5aAuKOKwqaqG4gWikepb5KqKSl1bwdIYCRd6W5dCpSuKUHMTV0FNwMY2W0busGCbGYgoboGXEVL96YijkFtrAp9Iwo7QjOz6BdRNg0tsqtGcJ4cT7AgQQmOXUfSJoH6Q0Ghmje9mTHSgmy3GUj/qDuEragn1A3dyjeVgFNJVoF9bE8HB4tNN0qyqgrU25TMiKrp/vy5PW9oJGLN3Gw386tO9JHAicKPH+IHQ0AcL4r8NSf8ju/4jv9j9B8XHDfugz/E4XYM/7G3eTI7w/PJ5HE6fTjHdDp9nKiKfPErafQXkwiiZQZdznEAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 200,
            ap: 30,
            dps: 23.08,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 60,
            freq: 39,
            foreswing: 10,
            backswing: 6,
            tba: 15
          },
          stageStats: {
            actualHp: 400,
            actualAp: 60,
            actualDps: 46.16,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "105",
          enemyName: "ゴーストメェメェ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 58.82,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 300,
            freq: 51,
            foreswing: 12,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 117.64,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "105",
          enemyName: "ゴーストメェメェ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 58.82,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 300,
            freq: 51,
            foreswing: 12,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 117.64,
            magnification: "200%",
            count: "3",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "103",
          enemyName: "ゴーストわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAwMEBAQEBAQEBAQFBQUGBgYGBgYHBwcHBwcHBwcJCgoMDxANDxATFhgUHSEWHSAeHyAcISMdJCYlLTErMDIqPkQ7Ozs1QUUxUloyUltQUFBRUVFRUVE8YW1fX19kZGRFcX5qampxcXFPg5B2dnaBgYFZlaSNjY1fn7BqssSfn59ywNOwsLB7zeK4uLjDw8PPz8/c3Nzk5OTq6urx8fH39/f////aM97rAAAAQHRSTlMAAwoQ0+UZIZ0tN4CqiUK+THKTWGFre6O/jJqxqsW4pMzBzMCxzMnKuMvMvcvKzMzMzMzLzMzMzMzMzMzMzMzMtX5w5wAABFtJREFUWIXtVtmWqkgQFOiBhlYEWRQUBBdoEJB9k+X//2oKXFsY8Z6exxvHBz2aYWRGRlGj0Z8CJeA/rnkEzE3QXxHg8yUB/aIeYlSN/U0PEKNZwm96gCjVkzmsXwP8jjR8fvRUkcV65gCRFDI8HoSTvPCo8j1tQMyYH/AYQglmtjjGsb8ier4lxtKKezkgfLJUNSuM42MvAcosDfWlRwyQH8dNPYt0yylelC2NfkVALi2/IdC+ukIxXtY28orGX80RYRdKw2CMqeefgQ3zNZHBe32A0IssmFkYTQ+hNseffgOzgEAge/VDOH8ZGTa3Yt8yLD80uL4W1NXzgkANI/q1oM89k2robzbGZuP7QudvEIKWLfWnCJhgELC9ciAzLTFjxNbG87yNFa67QjFW9kNrRd40QCi7AtnFxKBw+NY2Rgs1y1OMjeV3CBBKUD0wn3vWIIw/JAcW4Q5Fna3boRGyrx19RdF8S3yuZ2Wr3RF/dZ0vytt5FfDkOq3r0uGa1hBOVYzQ9/zjgn0iIFZeHB4Nww9V8tI/e8jrOl2JQVXXjYSmNZQbLwzLUOfs8yaxRuxrYL5GrFHnBnDRiaIokMwTqK9Lu5UwgnGGZVkG7/jNGaGmeb6lhUZLgJCCtNf3iqSkdYt0fTkKoQYdC4ACa3PcGJrWtgBh9FJ3HVNXJCc/E+Qm9zLqlAysURTF80SsXR1FN2030PWoaDs4pc76eXt/ABOlY+xZnt/kGeG2bpRmeRboUVYUp9MpDVzn0AnQI2B2ajQpMcAaQNTOTSLXNveKYl6hm1vm5YGHTSTjeNQE4BY6kZQ96MBxXTeITDtK0yRxFOk1AYRxs7nIgTBBpBxl+akoq6quqirRXWBkbpv6awLQBYq1uYdpp6xvKMvMAU5mbnoYIjgLgUeoGN3rMzuqSrCKVWoOtHBRQVEwvkpv9VWw0M9yImn6DgE6m6C4nD0ocCIwiWaR3AEXziBWa5zc5TcB7auuyiIJgi2Hdc7yzgSo7wNFbdv4FFlWXLY4iZy9bUrLNTfEADFOJFC74jw+3S1P4G1V5Lm7D9y9m+ywIQLWyb+5lqAqsyQtgss4ToHjBEXlvkFQBvPtOT+Bm+Tm1ZCqBGYWh0EC6lCm0v5MkOVlYdtRckewHiIY4busMPfFg4v7a550SfyPB88jEP6QR/qdoC4jHQS6QSTi6BuLgPHf9iNBnZiXT5EwuAUtUFLYPhJEdnklePN2BxG7HwRmdmoRvKkArPMjQeEo+hn7JfWmBPyeBUAQ3Xx0X5+qd6DgYdqHdNdzseoDTMnAdd3Uv1uAd2bz+t4NRukKhDfdhWSKJNGAllxlqpszEn+3HmTyYPPCloPbpxgqbAVmvX35UHgmwAUBp2bXZyFBEwhDD6bgBwOKQvD1ZgbOWWgEv3GL/ou/+J8BAgA/o/9u11uNkQz9NZl9fo6v+PycTb5olureLnsJCHo2nk4/Pj7+ueHjYzodf34xfXn+F0VuzkA1nN3jAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 180,
            ap: 16,
            dps: 10.67,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 45,
            foreswing: 6,
            backswing: 13,
            tba: 20
          },
          stageStats: {
            actualHp: 360,
            actualAp: 32,
            actualDps: 21.34,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "104",
          enemyName: "ゴーストにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMEBAQFBQUFBQUGBgYHBwgHBwcICAgJCQkLCwsNDxAOEBISExUcHBwZHiEaJSofJyskJykuLi4pMjQqNTowQkg1RUouSlMuS1RERERGRkZUVFRVVVU9ZG8/Y2xnZ2dId4NtbW1xdHV4eHhSiJaEhIRgoLCVlZWXl5dstMakpKRzwdSxsbG2trZ7zeK3t7fBwcHOzs7T09Pc3Nzo6Oju7u7x8fH39/f+/v47lvleAAAAQHRSTlMABAkRGcYhKDkwlbVMpUNiWHxwhDeTtKPKjfGruNnCzMuvssrK4r3Ky/DMzMrMuM3MzMzM5czMzMzizMzXzMzMWEoGMQAABDxJREFUWIXtl1t7okgQhqUhAkpshEEwEFGbAOEwnMaGgYD//19tocZNNujqzs1epG5AH/rt6qqvv4bR6J5AInfX8/8MRpiP/wjAqgsJ/QlAMD1T5pj/DphZeWyp4v0E5jRE1MNd6ml31wFJ+Fh8hBfxLjaFuwHKFPe1Q8LcimNLubuVSFlvoPpI0r00tfD9UmDVIDNnDKeFu128mF1pJMOPhyrMaVGVaCKreuku93Q8+NAxV6wKA/yxnjVNpHKCZgEiXqn8JQIjT3VF/ILgF+V+X7syyyvQBUhC4y+lMFYXK134yGcQy80s2nX7coMV08t3QHCUCwlwAl6EjvJ3CoiXlOVSX9N2v+8yw47zNAVEag6OZyXNXNmOKb8DkKjoFvH9NaENpPD75SX1bNuJd7k1OL9khp6lKQL7no/8aKxJEEVrkmRFWf96fXp2wtCxQQxDAKR46WrOn/Pn1S0MjoLAN4w1BHl+enqOHduz01gfBMhW6CyU9xYx2CCE+EEQJb6xjpIkS16fXlLbsL3cGy4iK6nmaqVJxyX08qNV03ZdTR6MpO32b79fX/I4jPNQFwcB/aoXcXjaLGOz2h+DGg8PpIGbt18vYZ6nnnnBlhhO0px8l64OW09wmxOgJoaRdHDTvb0alqXPh9TajxdUK+x1EveOwczcdv9OKIoTrNAlgWcvCJnX+r2SpiAT8TMA5j5dyyU7PLgPGdKHLoHaVjP4KW7r99FNu2/qrqcU8ysAJdyFdhg7Tu5Io74LWXfMP/OjOiBVnVRthK+YgRLGdhjG3gnAzLZ9G9rIAD34hCTROqo21+wQe44TG6C01Do8xip9H7oqCai/LqK1nxFybQVg+rB8x3ZSTz263ngZ9cXv2q4q2yooazK56AN9cBMD9lmag20f+8Twilt1py50TZN8doovAXYEfdjF1nk7j1h5k9UHCbVN6S7/7Uhi8XTlOCb+sE527tOqa4skcpfyZS89Py5gBX/SKcipbrsmMtTZ+KZjGSF0vLAsOszHb+p9W1Fyrf9fguGxqql41p/j3JLC+CLS7jiOGEF3wUaibX9GICWqaVEk5gUHGApeC4qCVm3l6xICPZYAyFbSzS8FCJMMAM2+KwN4HeE3BQAKIt8MgIOQ0hK635ZFZM0lk5aAuKOKwqaqG4gWikepb5KqKSl1bwdIYCRd6W5dCpSuKUHMTV0FNwMY2W0busGCbGYgoboGXEVL96YijkFtrAp9Iwo7QjOz6BdRNg0tsqtGcJ4cT7AgQQmOXUfSJoH6Q0Ghmje9mTHSgmy3GUj/qDuEragn1A3dyjeVgFNJVoF9bE8HB4tNN0qyqgrU25TMiKrp/vy5PW9oJGLN3Gw386tO9JHAicKPH+IHQ0AcL4r8NSf8ju/4jv9j9B8XHDfugz/E4XYM/7G3eTI7w/PJ5HE6fTjHdDp9nKiKfPErafQXkwiiZQZdznEAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 200,
            ap: 30,
            dps: 23.08,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 60,
            freq: 39,
            foreswing: 10,
            backswing: 6,
            tba: 15
          },
          stageStats: {
            actualHp: 400,
            actualAp: 60,
            actualDps: 46.16,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "102",
          enemyName: "ハシル君",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAgIEBAQFBQUHBwcICAgICAgICAgICAgLCwsLCwsQEBAREREXFxcXFxccHBweHh4gICAiIiIiIiInJycoKCgzMzMzMzM1NTU8PDxBQUFCQkJGRkZSUlJVVVVWVlZhYWFiYmJqampwcHB4eHh5eXmAgICIiIiKioqSkpKWlpacnJyfn5+oqKi0tLS9vb3FxcXOzs7X19fd3d3i4uLm5ubq6urv7+/09PT4+Pj8/Pz////x+JXEAAAAQHRSTlMABxBxkqCIOEgaJS7nVH5gNEfZtFX/aXWX8nqL/pn/qLf+3Lfz/8///tz/6P7/8f/4//7+/v//////////////A+xGyQAABLdJREFUWIWdV2l7qkwMFW5vXXpbtbW2tipubMois7HNxP//r94BUang0jdf9FFycpKcZIZG46KpndZzt9ttqpcfuWiK2ul/aMbG2249e9JTfund7n8tbQ+HHHa7HXBiDNu/cFf7E8MjUe68N0i2y8G9ebQHS4+WnPcmmKfdlYfSX26Z2NWYoPbX000IdWiH58GPxrH91bnh/+Wll9wzS9HyajWVoVdJ/iyPeKtdIdFcxFfdMwOkPV0k8Blcj78ngWaXODQXybXQB3DA3/WSUF62VwiAyP+ETJibbi1AexZeI5BEYZhAzoNqtRSeLXG1BMBDjAjlUhB2ry6DR/+ae24ixohJpdBJDQXlk9wEyGjwFEB4gyqAqkXVx+umIitDZFRb2TYqKgaoEVbWDgD0UQF4sqs1FJXJgoQ4WPKKqo1obir+wOkPVgApo8TSAyaS5T0AO6D4x4+cYRpT33SiUKushiNA2SVyflSB4VDmSYnPyJUUIE1FAQPcKasT9sMeoDR1Z5W9cAAQwXrt4CJ3CErzdQgQmJybbxUGrQKAmiyhvoMzTxC01BpI4zikKDDnqTD/VmrwvAcAF8U05tQymVQMlLoAFKFEltBHRNTNU3edA6RrZk11nyWOe1hvhRxFnJzg0qoUZQqZQ+iQuY71qUsP9Ye0ZkhhOzwHeLJ5XgIXueskct5NfqRetyei5XkbVC3M6swcggIkwrF5XNCxXx2zjMJ5GQebLKbwA5oSFsxpuXo/D6scOTGaZwDK1zZ7LLZ8TpGpW8ExLsQuLfnHJEegs/MqtCc4+4NMfeb71nSsn0SE/eNS3nFnv/3BOwco6ijQ3CTIkcZOQX1+/J7oRE5VBIldAVCXeUxg+hTFsRCyjAcp4JMEROBHyHKQUWlkQ/mmRc7m2CVhSt1jEgmUJc3TNFy0as76weFoSZz39/F8/O7WXhXyxbD+rDmnO0YhP3ktcq353NLrTlvBSOD761V1Lebn+4kpD90prrhDhIJgrev66LkK0FC/t7wUKkGVHEBGt0wHEbyqA2i0v734tNWAl1QMwLjskGXJXZE9wLQ6AHlLMkiJRHQSE4ggAWwGmNBIbpYkMWoBGkrv2y5DnPoHON4xgn1Hn06n4+lqUg+QQ2xOJwpjx4zkV4kHIg50c/rv8cplSR0stwfusX8UIccxFNs6XXWv3xk7n26RBvjkSCGNDrlF1bV+Zu23gwSoU96sxXjENwEaz6uig8JHpTmgew5icyMFWYcXu9Bx7JATQlj8yBY3br0S4cNA+3DMOi4k4FFxgNnnG61qytP3hmUnEyCzpKeCye0iZBB9zQ4k59RcI0zD5DQY3Pu47y1I7X0sJH8yenudyvHGRRsT78JttcZ6C6k/9tZakBDPRxtEw4ghe3i3vzqRLYjt7oTKFhrd1vBzNtM+mve/xfU9kTn2NwLwrC/9FEX9zTtge8aAGa3OkgHR6i64N0z5QsCWveyDTH7z6niwjs1joycvoZwb/yO+JIClYpqq/BCbSf9XyefWk2edwLa2kAdTSjbLSf/u0HsbbFgkIMWObpEoJNvVMPv1tvtT98/L4+PDw8Pf19HYdMzVfPRvNBq9vr7+fXx8+XM+hv8B2sv4BrhZV30AAAAASUVORK5CYII=",
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
            actualHp: 50000,
            actualAp: 600,
            actualDps: 947.37,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 7,
      stageName: "虫取り網を握って",
      baseHp: 75000,
      width: 4200,
      enemyLimit: 10,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "88",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 140,
            actualAp: 60,
            actualDps: 100.0,
            magnification: "200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 140,
            actualAp: 60,
            actualDps: 100.0,
            magnification: "200%",
            count: "5",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 140,
            actualAp: 60,
            actualDps: 100.0,
            magnification: "200%",
            count: "5",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 500,
            actualDps: 416.66,
            magnification: "200%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 500,
            actualDps: 416.66,
            magnification: "200%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 140,
            actualAp: 60,
            actualDps: 100.0,
            magnification: "200%",
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
            actualHp: 18000,
            actualAp: 750,
            actualDps: 1406.25,
            magnification: "50%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-23.3s",
            delayFrames: "700-700f",
            baseHpRatio: "99%",
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
          enemyId: "036",
          enemyName: "アヒルンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 909.09,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 33,
            foreswing: 12,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 1000,
            actualDps: 909.09,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 8,
      stageName: "海底に光るお宝",
      baseHp: 90000,
      width: 4500,
      enemyLimit: 15,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
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
          enemyId: "155",
          enemyName: "イカ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/Pz9vTUh4Tk52WFZ4WVZ5W1h6XFd5Xlh8X1Z0ZFZxZmN+YVp+YVp+YlyCZV2EZl+lWluIaWGKa2OKbGKMb2eNb2aNcWmPcWeQcmiSdGqRd22Wdm1/f3+ghn6ih32jiHyliX+rjoOxlYiwlo2xl427oZW/o5a/pJbCqJzHrqLPuKvRuq/bxrnq08Pw3c/66Nn87uP98+z++fa8WBpcAAAAQHRSTlMAByI5WHWHlaS20+z7BB4JFx0qkjpZCv9HxGameASJ3fBYyav/09+V6ALezf/v//bJ/v7z4v////X/////////ewpBDwAAAVJJREFUWIXtk9lygjAUhqndFyShSkVRFFAsBhRsiNng/d+qcTpOb5zpJJedfNcn3/xnieNcxc/TNI2GiuB6wV/klDN6KopNHHlGgpT1UgrJ0DKExgIhJS2n/txUIETXC3YYfRoJFlRyIftOssMEmAj8gtZMyK6X7JgDV18w3KCMcHEOIU67lf4uYbwM0Y9BDeJrpT1JGCejtGHKoPqQyqCbAcymrr9p2VkgKG7WcK65DQidICoJ54JWqG2P6SzSzKAIFnvGOWqZ7DhpS32BA9eY4UodVC+qamcgmI+3GBF1DX3PiUkCx5uhDCEuJcF4byJwRtss+2CM1RUxaeG8zqyhpKJtbZgAHNqaNgRhXi+NBLAok6bGcUHa1EwQRuMwTybvcTIxErjA80AAXABN/rTFYrFYLBaL5Z9y84vJ88Hg4fnC0+1AX3D38PJ24fXx/nrRN7DhNUF3J6CdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 360,
            actualAp: 72,
            actualDps: 43.2,
            magnification: "400%",
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
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQADAAAFAQEJAwAOBAIYCAMmCgJICAU6EwM+GgRFGgWUAAFZJAlvIwd/HwZjLQ59IQeAIQKBJwqMJgpqOBeQKgybKwySMBJ2QBueNhOpMw6tNRCtOBGESyK8OBCWWS7XRRXLShy5UiqaaDvkUh21ZTrtWh/FbUaxeUveaDnxZiq7hlfmdkP2cjT6fTzHkWDgiVn6iUfamWT5lFXbpnL2oXDnsoDtvYr2ypv916v/5MH///++CyS7AAAAQHRSTlMANbVxzRr/9lqi/Q3Hgv4C/7Ik/WkNlT3/sv5R/4S/3bD//v//7f//////z/////////////////////////8A/Bst6gAABGNJREFUWIXtlVl3m0gQhXESW8s4GAnJQrgtmcV0Q5odQbN5/v+/mlugk5NlTl5mHlW2hGj1/epWVWNrf//H0G6AG+AGuAFugBvgBrgB/nfAb7Hf7w8vz2+/xuthT/H7/p/iab/d7o7HsyuS6IcQIkqS97fj8bjbPv0RsD2ez+/CF3mRz9IcoCQv6O1SCCHib4c/EfY71xdJEuVFQUq6Xookh5YITQEfl28vKORfIE/bw+GwO/vYGOUwAAxdL5cGn4smJx8Tof12Oh1ffm0G5Kd313Z9iKKfDFyaHJymgQXcJLCQBUK8n54P279+0EMuIteeihcQ5hOACm9IBGl0tQBO7MOefz4dvtvYH85ocxTYblQkkUgKAkyEvG2bSXpJZguRiIoiiGEqE+fTy0x4ejljTlnseYG4Aq4WUHzTYglGpspwEaLKgiCoZRC47vtMOJz9rKpl6EkZxnkk8lmfzN4bjOFymRzkDWqIlXLsMAyQMQxOWyrg2Y5VEGRxIMsyjkV8KTICtH1BBwinqOkbukRV28ZV35WO7WbDOHZN5r5C/yqDKvDzpoW1VJWyrLIs6/q6Vqn0HOaFslS1GlQcV3XXd6oM3bj5QIzoz9teO6R14PpJO47tJQ5Kpbp+mKLHJ6VKeq+vS1gr0zCoR5KPQ98m76/aIZSYf9UNWOspW9f1PRINI377fuh67Bx7Wu0medxO6QcsNRiFtjNtAGAOhI9BSpnWCtHRbtxxLNBd181y0Yxz/nHoVB35trZxQtuGg5kw1pxPLjpAPE+mMuUen3kS2bN+/Ljq+7osK/+svaEHtluRZsCXQ+rxq4mSex6fosReGYZVNw6zmvQqDgLpHrW3GkbtoFZ1UqBXIwiESEspS+5wvHBFKUFF4jn5gH7UWSR8lx21oydhlghVRCmGQYUOp+rTlFk8dSyPqihn7x9XucqiGHobgA1TKuU4mVUUZRXaPvSSOfCOg8lM5limI7mXXjsHOdqB9sVZJnw7sDbaxqpTXqrUjqMsyTD1njOHgnFuGTp+YAMdHufk3dxfACLf9coJIL0QLXbcIEuaDu1zLIt5jqVbzNAJ4HXIDGt9P09TVaquYt93HS8E4Nm0LF5KzgzT8WNUFzqmCesgUBgWpojWdlcx5HWWkdz2uGWZz9p2Y5qWwx398evX53PWKu5ZhmFajJGceRzPAy9RNY22zurJPOmRwjA3eBy3G+x3mLn6/PnLwnBDZjnkXdfXcO+hFgSTqqTjVUV4XEmO/jumYZBeu1sZ5IGtF4sHhG6Qf6Y/rHXnKqeScLa6qXJBansaj2l8vdM0pF0bhmExc/0whw5HprG2MIlZTS3hdadil8K24c9iqNNYLz7da8tPyKwTwXj4MXTGpuxoBzlhjKcSYsiRyGDwry8WqyVKuL9brlaPumnqi58AlJl6YaIgZsIJkurrNeSLhW4am9Xq89399z/s98vdbrn89OV7LBZrisUaOiIZ5uPj9avVcondf13/LfwDjAMhzDMfbnUAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1000,
            actualDps: 652.16,
            magnification: "400%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQADAAAFAQEJAwAOBAIYCAMmCgJICAU6EwM+GgRFGgWUAAFZJAlvIwd/HwZjLQ59IQeAIQKBJwqMJgpqOBeQKgybKwySMBJ2QBueNhOpMw6tNRCtOBGESyK8OBCWWS7XRRXLShy5UiqaaDvkUh21ZTrtWh/FbUaxeUveaDnxZiq7hlfmdkP2cjT6fTzHkWDgiVn6iUfamWT5lFXbpnL2oXDnsoDtvYr2ypv916v/5MH///++CyS7AAAAQHRSTlMANbVxzRr/9lqi/Q3Hgv4C/7Ik/WkNlT3/sv5R/4S/3bD//v//7f//////z/////////////////////////8A/Bst6gAABGNJREFUWIXtlVl3m0gQhXESW8s4GAnJQrgtmcV0Q5odQbN5/v+/mlugk5NlTl5mHlW2hGj1/epWVWNrf//H0G6AG+AGuAFugBvgBrgB/nfAb7Hf7w8vz2+/xuthT/H7/p/iab/d7o7HsyuS6IcQIkqS97fj8bjbPv0RsD2ez+/CF3mRz9IcoCQv6O1SCCHib4c/EfY71xdJEuVFQUq6Xookh5YITQEfl28vKORfIE/bw+GwO/vYGOUwAAxdL5cGn4smJx8Tof12Oh1ffm0G5Kd313Z9iKKfDFyaHJymgQXcJLCQBUK8n54P279+0EMuIteeihcQ5hOACm9IBGl0tQBO7MOefz4dvtvYH85ocxTYblQkkUgKAkyEvG2bSXpJZguRiIoiiGEqE+fTy0x4ejljTlnseYG4Aq4WUHzTYglGpspwEaLKgiCoZRC47vtMOJz9rKpl6EkZxnkk8lmfzN4bjOFymRzkDWqIlXLsMAyQMQxOWyrg2Y5VEGRxIMsyjkV8KTICtH1BBwinqOkbukRV28ZV35WO7WbDOHZN5r5C/yqDKvDzpoW1VJWyrLIs6/q6Vqn0HOaFslS1GlQcV3XXd6oM3bj5QIzoz9teO6R14PpJO47tJQ5Kpbp+mKLHJ6VKeq+vS1gr0zCoR5KPQ98m76/aIZSYf9UNWOspW9f1PRINI377fuh67Bx7Wu0medxO6QcsNRiFtjNtAGAOhI9BSpnWCtHRbtxxLNBd181y0Yxz/nHoVB35trZxQtuGg5kw1pxPLjpAPE+mMuUen3kS2bN+/Ljq+7osK/+svaEHtluRZsCXQ+rxq4mSex6fosReGYZVNw6zmvQqDgLpHrW3GkbtoFZ1UqBXIwiESEspS+5wvHBFKUFF4jn5gH7UWSR8lx21oydhlghVRCmGQYUOp+rTlFk8dSyPqihn7x9XucqiGHobgA1TKuU4mVUUZRXaPvSSOfCOg8lM5limI7mXXjsHOdqB9sVZJnw7sDbaxqpTXqrUjqMsyTD1njOHgnFuGTp+YAMdHufk3dxfACLf9coJIL0QLXbcIEuaDu1zLIt5jqVbzNAJ4HXIDGt9P09TVaquYt93HS8E4Nm0LF5KzgzT8WNUFzqmCesgUBgWpojWdlcx5HWWkdz2uGWZz9p2Y5qWwx398evX53PWKu5ZhmFajJGceRzPAy9RNY22zurJPOmRwjA3eBy3G+x3mLn6/PnLwnBDZjnkXdfXcO+hFgSTqqTjVUV4XEmO/jumYZBeu1sZ5IGtF4sHhG6Qf6Y/rHXnKqeScLa6qXJBansaj2l8vdM0pF0bhmExc/0whw5HprG2MIlZTS3hdadil8K24c9iqNNYLz7da8tPyKwTwXj4MXTGpuxoBzlhjKcSYsiRyGDwry8WqyVKuL9brlaPumnqi58AlJl6YaIgZsIJkurrNeSLhW4am9Xq89399z/s98vdbrn89OV7LBZrisUaOiIZ5uPj9avVcondf13/LfwDjAMhzDMfbnUAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1000,
            actualDps: 652.16,
            magnification: "400%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQADAAAFAQEJAwAOBAIYCAMmCgJICAU6EwM+GgRFGgWUAAFZJAlvIwd/HwZjLQ59IQeAIQKBJwqMJgpqOBeQKgybKwySMBJ2QBueNhOpMw6tNRCtOBGESyK8OBCWWS7XRRXLShy5UiqaaDvkUh21ZTrtWh/FbUaxeUveaDnxZiq7hlfmdkP2cjT6fTzHkWDgiVn6iUfamWT5lFXbpnL2oXDnsoDtvYr2ypv916v/5MH///++CyS7AAAAQHRSTlMANbVxzRr/9lqi/Q3Hgv4C/7Ik/WkNlT3/sv5R/4S/3bD//v//7f//////z/////////////////////////8A/Bst6gAABGNJREFUWIXtlVl3m0gQhXESW8s4GAnJQrgtmcV0Q5odQbN5/v+/mlugk5NlTl5mHlW2hGj1/epWVWNrf//H0G6AG+AGuAFugBvgBrgB/nfAb7Hf7w8vz2+/xuthT/H7/p/iab/d7o7HsyuS6IcQIkqS97fj8bjbPv0RsD2ez+/CF3mRz9IcoCQv6O1SCCHib4c/EfY71xdJEuVFQUq6Xookh5YITQEfl28vKORfIE/bw+GwO/vYGOUwAAxdL5cGn4smJx8Tof12Oh1ffm0G5Kd313Z9iKKfDFyaHJymgQXcJLCQBUK8n54P279+0EMuIteeihcQ5hOACm9IBGl0tQBO7MOefz4dvtvYH85ocxTYblQkkUgKAkyEvG2bSXpJZguRiIoiiGEqE+fTy0x4ejljTlnseYG4Aq4WUHzTYglGpspwEaLKgiCoZRC47vtMOJz9rKpl6EkZxnkk8lmfzN4bjOFymRzkDWqIlXLsMAyQMQxOWyrg2Y5VEGRxIMsyjkV8KTICtH1BBwinqOkbukRV28ZV35WO7WbDOHZN5r5C/yqDKvDzpoW1VJWyrLIs6/q6Vqn0HOaFslS1GlQcV3XXd6oM3bj5QIzoz9teO6R14PpJO47tJQ5Kpbp+mKLHJ6VKeq+vS1gr0zCoR5KPQ98m76/aIZSYf9UNWOspW9f1PRINI377fuh67Bx7Wu0medxO6QcsNRiFtjNtAGAOhI9BSpnWCtHRbtxxLNBd181y0Yxz/nHoVB35trZxQtuGg5kw1pxPLjpAPE+mMuUen3kS2bN+/Ljq+7osK/+svaEHtluRZsCXQ+rxq4mSex6fosReGYZVNw6zmvQqDgLpHrW3GkbtoFZ1UqBXIwiESEspS+5wvHBFKUFF4jn5gH7UWSR8lx21oydhlghVRCmGQYUOp+rTlFk8dSyPqihn7x9XucqiGHobgA1TKuU4mVUUZRXaPvSSOfCOg8lM5limI7mXXjsHOdqB9sVZJnw7sDbaxqpTXqrUjqMsyTD1njOHgnFuGTp+YAMdHufk3dxfACLf9coJIL0QLXbcIEuaDu1zLIt5jqVbzNAJ4HXIDGt9P09TVaquYt93HS8E4Nm0LF5KzgzT8WNUFzqmCesgUBgWpojWdlcx5HWWkdz2uGWZz9p2Y5qWwx398evX53PWKu5ZhmFajJGceRzPAy9RNY22zurJPOmRwjA3eBy3G+x3mLn6/PnLwnBDZjnkXdfXcO+hFgSTqqTjVUV4XEmO/jumYZBeu1sZ5IGtF4sHhG6Qf6Y/rHXnKqeScLa6qXJBansaj2l8vdM0pF0bhmExc/0whw5HprG2MIlZTS3hdadil8K24c9iqNNYLz7da8tPyKwTwXj4MXTGpuxoBzlhjKcSYsiRyGDwry8WqyVKuL9brlaPumnqi58AlJl6YaIgZsIJkurrNeSLhW4am9Xq89399z/s98vdbrn89OV7LBZrisUaOiIZ5uPj9avVcondf13/LfwDjAMhzDMfbnUAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1000,
            actualDps: 652.16,
            magnification: "400%",
            count: "1",
            spawnTime: "45.0s",
            spawnTimeFrames: "1,350f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQADAAAFAQEJAwAOBAIYCAMmCgJICAU6EwM+GgRFGgWUAAFZJAlvIwd/HwZjLQ59IQeAIQKBJwqMJgpqOBeQKgybKwySMBJ2QBueNhOpMw6tNRCtOBGESyK8OBCWWS7XRRXLShy5UiqaaDvkUh21ZTrtWh/FbUaxeUveaDnxZiq7hlfmdkP2cjT6fTzHkWDgiVn6iUfamWT5lFXbpnL2oXDnsoDtvYr2ypv916v/5MH///++CyS7AAAAQHRSTlMANbVxzRr/9lqi/Q3Hgv4C/7Ik/WkNlT3/sv5R/4S/3bD//v//7f//////z/////////////////////////8A/Bst6gAABGNJREFUWIXtlVl3m0gQhXESW8s4GAnJQrgtmcV0Q5odQbN5/v+/mlugk5NlTl5mHlW2hGj1/epWVWNrf//H0G6AG+AGuAFugBvgBrgB/nfAb7Hf7w8vz2+/xuthT/H7/p/iab/d7o7HsyuS6IcQIkqS97fj8bjbPv0RsD2ez+/CF3mRz9IcoCQv6O1SCCHib4c/EfY71xdJEuVFQUq6Xookh5YITQEfl28vKORfIE/bw+GwO/vYGOUwAAxdL5cGn4smJx8Tof12Oh1ffm0G5Kd313Z9iKKfDFyaHJymgQXcJLCQBUK8n54P279+0EMuIteeihcQ5hOACm9IBGl0tQBO7MOefz4dvtvYH85ocxTYblQkkUgKAkyEvG2bSXpJZguRiIoiiGEqE+fTy0x4ejljTlnseYG4Aq4WUHzTYglGpspwEaLKgiCoZRC47vtMOJz9rKpl6EkZxnkk8lmfzN4bjOFymRzkDWqIlXLsMAyQMQxOWyrg2Y5VEGRxIMsyjkV8KTICtH1BBwinqOkbukRV28ZV35WO7WbDOHZN5r5C/yqDKvDzpoW1VJWyrLIs6/q6Vqn0HOaFslS1GlQcV3XXd6oM3bj5QIzoz9teO6R14PpJO47tJQ5Kpbp+mKLHJ6VKeq+vS1gr0zCoR5KPQ98m76/aIZSYf9UNWOspW9f1PRINI377fuh67Bx7Wu0medxO6QcsNRiFtjNtAGAOhI9BSpnWCtHRbtxxLNBd181y0Yxz/nHoVB35trZxQtuGg5kw1pxPLjpAPE+mMuUen3kS2bN+/Ljq+7osK/+svaEHtluRZsCXQ+rxq4mSex6fosReGYZVNw6zmvQqDgLpHrW3GkbtoFZ1UqBXIwiESEspS+5wvHBFKUFF4jn5gH7UWSR8lx21oydhlghVRCmGQYUOp+rTlFk8dSyPqihn7x9XucqiGHobgA1TKuU4mVUUZRXaPvSSOfCOg8lM5limI7mXXjsHOdqB9sVZJnw7sDbaxqpTXqrUjqMsyTD1njOHgnFuGTp+YAMdHufk3dxfACLf9coJIL0QLXbcIEuaDu1zLIt5jqVbzNAJ4HXIDGt9P09TVaquYt93HS8E4Nm0LF5KzgzT8WNUFzqmCesgUBgWpojWdlcx5HWWkdz2uGWZz9p2Y5qWwx398evX53PWKu5ZhmFajJGceRzPAy9RNY22zurJPOmRwjA3eBy3G+x3mLn6/PnLwnBDZjnkXdfXcO+hFgSTqqTjVUV4XEmO/jumYZBeu1sZ5IGtF4sHhG6Qf6Y/rHXnKqeScLa6qXJBansaj2l8vdM0pF0bhmExc/0whw5HprG2MIlZTS3hdadil8K24c9iqNNYLz7da8tPyKwTwXj4MXTGpuxoBzlhjKcSYsiRyGDwry8WqyVKuL9brlaPumnqi58AlJl6YaIgZsIJkurrNeSLhW4am9Xq89399z/s98vdbrn89OV7LBZrisUaOiIZ5uPj9avVcondf13/LfwDjAMhzDMfbnUAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1000,
            actualDps: 652.16,
            magnification: "400%",
            count: "1",
            spawnTime: "55.7s",
            spawnTimeFrames: "1,670f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQADAAAFAQEJAwAOBAIYCAMmCgJICAU6EwM+GgRFGgWUAAFZJAlvIwd/HwZjLQ59IQeAIQKBJwqMJgpqOBeQKgybKwySMBJ2QBueNhOpMw6tNRCtOBGESyK8OBCWWS7XRRXLShy5UiqaaDvkUh21ZTrtWh/FbUaxeUveaDnxZiq7hlfmdkP2cjT6fTzHkWDgiVn6iUfamWT5lFXbpnL2oXDnsoDtvYr2ypv916v/5MH///++CyS7AAAAQHRSTlMANbVxzRr/9lqi/Q3Hgv4C/7Ik/WkNlT3/sv5R/4S/3bD//v//7f//////z/////////////////////////8A/Bst6gAABGNJREFUWIXtlVl3m0gQhXESW8s4GAnJQrgtmcV0Q5odQbN5/v+/mlugk5NlTl5mHlW2hGj1/epWVWNrf//H0G6AG+AGuAFugBvgBrgB/nfAb7Hf7w8vz2+/xuthT/H7/p/iab/d7o7HsyuS6IcQIkqS97fj8bjbPv0RsD2ez+/CF3mRz9IcoCQv6O1SCCHib4c/EfY71xdJEuVFQUq6Xookh5YITQEfl28vKORfIE/bw+GwO/vYGOUwAAxdL5cGn4smJx8Tof12Oh1ffm0G5Kd313Z9iKKfDFyaHJymgQXcJLCQBUK8n54P279+0EMuIteeihcQ5hOACm9IBGl0tQBO7MOefz4dvtvYH85ocxTYblQkkUgKAkyEvG2bSXpJZguRiIoiiGEqE+fTy0x4ejljTlnseYG4Aq4WUHzTYglGpspwEaLKgiCoZRC47vtMOJz9rKpl6EkZxnkk8lmfzN4bjOFymRzkDWqIlXLsMAyQMQxOWyrg2Y5VEGRxIMsyjkV8KTICtH1BBwinqOkbukRV28ZV35WO7WbDOHZN5r5C/yqDKvDzpoW1VJWyrLIs6/q6Vqn0HOaFslS1GlQcV3XXd6oM3bj5QIzoz9teO6R14PpJO47tJQ5Kpbp+mKLHJ6VKeq+vS1gr0zCoR5KPQ98m76/aIZSYf9UNWOspW9f1PRINI377fuh67Bx7Wu0medxO6QcsNRiFtjNtAGAOhI9BSpnWCtHRbtxxLNBd181y0Yxz/nHoVB35trZxQtuGg5kw1pxPLjpAPE+mMuUen3kS2bN+/Ljq+7osK/+svaEHtluRZsCXQ+rxq4mSex6fosReGYZVNw6zmvQqDgLpHrW3GkbtoFZ1UqBXIwiESEspS+5wvHBFKUFF4jn5gH7UWSR8lx21oydhlghVRCmGQYUOp+rTlFk8dSyPqihn7x9XucqiGHobgA1TKuU4mVUUZRXaPvSSOfCOg8lM5limI7mXXjsHOdqB9sVZJnw7sDbaxqpTXqrUjqMsyTD1njOHgnFuGTp+YAMdHufk3dxfACLf9coJIL0QLXbcIEuaDu1zLIt5jqVbzNAJ4HXIDGt9P09TVaquYt93HS8E4Nm0LF5KzgzT8WNUFzqmCesgUBgWpojWdlcx5HWWkdz2uGWZz9p2Y5qWwx398evX53PWKu5ZhmFajJGceRzPAy9RNY22zurJPOmRwjA3eBy3G+x3mLn6/PnLwnBDZjnkXdfXcO+hFgSTqqTjVUV4XEmO/jumYZBeu1sZ5IGtF4sHhG6Qf6Y/rHXnKqeScLa6qXJBansaj2l8vdM0pF0bhmExc/0whw5HprG2MIlZTS3hdadil8K24c9iqNNYLz7da8tPyKwTwXj4MXTGpuxoBzlhjKcSYsiRyGDwry8WqyVKuL9brlaPumnqi58AlJl6YaIgZsIJkurrNeSLhW4am9Xq89399z/s98vdbrn89OV7LBZrisUaOiIZ5uPj9avVcondf13/LfwDjAMhzDMfbnUAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1000,
            actualDps: 652.16,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 5200,
            actualAp: 320,
            actualDps: 400.0,
            magnification: "400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/Pz9vTUh4Tk52WFZ4WVZ5W1h6XFd5Xlh8X1Z0ZFZxZmN+YVp+YVp+YlyCZV2EZl+lWluIaWGKa2OKbGKMb2eNb2aNcWmPcWeQcmiSdGqRd22Wdm1/f3+ghn6ih32jiHyliX+rjoOxlYiwlo2xl427oZW/o5a/pJbCqJzHrqLPuKvRuq/bxrnq08Pw3c/66Nn87uP98+z++fa8WBpcAAAAQHRSTlMAByI5WHWHlaS20+z7BB4JFx0qkjpZCv9HxGameASJ3fBYyav/09+V6ALezf/v//bJ/v7z4v////X/////////ewpBDwAAAVJJREFUWIXtk9lygjAUhqndFyShSkVRFFAsBhRsiNng/d+qcTpOb5zpJJedfNcn3/xnieNcxc/TNI2GiuB6wV/klDN6KopNHHlGgpT1UgrJ0DKExgIhJS2n/txUIETXC3YYfRoJFlRyIftOssMEmAj8gtZMyK6X7JgDV18w3KCMcHEOIU67lf4uYbwM0Y9BDeJrpT1JGCejtGHKoPqQyqCbAcymrr9p2VkgKG7WcK65DQidICoJ54JWqG2P6SzSzKAIFnvGOWqZ7DhpS32BA9eY4UodVC+qamcgmI+3GBF1DX3PiUkCx5uhDCEuJcF4byJwRtss+2CM1RUxaeG8zqyhpKJtbZgAHNqaNgRhXi+NBLAok6bGcUHa1EwQRuMwTybvcTIxErjA80AAXABN/rTFYrFYLBaL5Z9y84vJ88Hg4fnC0+1AX3D38PJ24fXx/nrRN7DhNUF3J6CdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 90,
            actualAp: 18,
            actualDps: 10.8,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 9,
      stageName: "蚊取り線香のけむり",
      baseHp: 105000,
      width: 5000,
      enemyLimit: 15,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "88",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "12",
          amount: "2",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 112590,
            actualAp: 6000,
            actualDps: 734.69,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
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
            actualHp: 2000,
            actualAp: 200,
            actualDps: 146.36,
            magnification: "400%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 600,
            actualDps: 782.6,
            magnification: "400%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 600,
            actualDps: 782.6,
            magnification: "400%",
            count: "0",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 3750.0,
            magnification: "400%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 10,
      stageName: "校庭で盆踊り",
      baseHp: 120000,
      width: 3800,
      enemyLimit: 10,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "75",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "25",
          amount: "2",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "262",
          enemyName: "やぐらわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAHBgURDAkRDAkUDAYSDgcbDQscFxQnFxIkGhMpHRg7GhMmIx8vIBkrIhwsJiMzJBpFKh48MipBMyQ/PDRROCdDQkFGQjxTSjdYSDtxQyxUTkupLydiXVWVSjJpYlN3X0q4RCzLRjLlPC5wbWyvWkN4cWaFb07oRzqLclKIdViAfXybfV7baE2ni1+Qj4+akYLtd223mGeenZysqanoonO0srHGxMH5xWf2v7nY19P+34Tp5uX58uv///9vMCoTAAAAQHRSTlMAsEck/NcRZDNz7VOGG7+vn/9q3PI4/4NMZO/+2P53/6L97v3//v/n0//5wv7+//391P/4//v///////7/////+3nS8gAAA95JREFUWIXVl2t3sjgQxy0qIl4RxQtYyIpFESQsiYlGwvf/VjvYnmdfbFujvtpRTkIO8+M/kyuNxq+mL5eD35/43X0WZEWw0J91XwRFVsD/8JSKwfJQFMjJChdlRf5uPOhuvOdFhhx7hOKR7bhpkQcz9Ugg9LxI3el02jFWSNPs6dSNC+Vk1KEXseNMu51usxllM73X7dmOg9SSoUPooH06Ho2bcNuMilnd2h/2p7dI3u8BBofYndruStNver8AgGjaCNrj6K4Eo9PvdbMYALUZUdb7rDW9Ymz0u0q9Mdml8e5ws138by2NJireYPPsB5srAjTTarUsuNpm68vqO8vsKAJ0D1n+sXBbb20rO/rg6x6LuIV2qkNJ36Xu+Xw9W2/tQp7PqGWdztermz4CQNervDpv7ZO8XrOWc75KiV4BXB8GOCD6BCGk1/PJbVkFBOQ8BGhZrmtBElur1bTuBBc5rfgRQL9Tm2YYWnc8NB3HdSwT7ZrqAK2hNwbwQn2eUxZ/3Ayt5ooS9F3cWwSLA0yjHhWcEf/LtopDUfe2nhd5eL4IPC4E57Wza7k+OiguKTuEyTZJEpQkogbEvu9YFhDwTFFBkjCMGfEOtFYg0hrgAICqAYwIM4qZZF5+A9QKIATH9xM1wHiFhaClwAnFdQgC3ZLg+yhX68j3hArKhGD0PQAAYzAOgOA4iWISZxETZUkEfx8soBt5YlmOCyPTiZZK/pBEXlWSchY0GssIg/+nmR3lgUQozXOM6zVcM6em1R6ZpmnZqnOh6SHb64/gmkwmfbM9soZ9czi0bNW50FtvNuE3v79Ud9jOOvzW/leA0+Vy2YfhEYpTGO5Pn0WhNpBrwAXGwTEM/66q6gKeJRT7/Z4ungPsbwDgKAO63ymAgr0EgBCeBXyGsH9ZAQAUJ+OPIXBVQP+HEJ4FvKzgTw743TPeryHsnwa8rCB8VcGfXri8quABgJDf5UARoDfGPmPyBiiFZJvNpgbAokoDFYIRLPI4JbwEwAfGhPlZKipJ4jXBWGFvHASRtwVLWA1Ikm2y3SIqRbJF0IoOd1c1AMCbYFvmADgSRkiCMS4lxQTaSXR/WZxxWQouCShYf8AeWTLBiJSsrCTnZXT3m8eYQ8CiPhtsQv9DVGWdRwK7fSXr5ujumrLYCcnhSco2YZqUUJeiPu2QSvCyZCS/G0EOCjjhnB7DDQbdjDIGOz2pZEkZv//RpS9vZwPBsb9e+7KqX0whpxjGFOciv7/DD/ISDkgEr+ojMmEcFGCoruC0ReHUoLA5zVer0Wg46mqa1h3Zo6HtBT1N69j2eGzbk/8o+AcF7vxDHx8aNQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 100,
            dps: 11.95,
            speed: 0,
            range: 1800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1600,
            freq: 251,
            foreswing: 52,
            backswing: 27,
            tba: 100
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 25,
            actualDps: 2.99,
            magnification: "25%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
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
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            spawnTime: "45.0s",
            spawnTimeFrames: "1,350f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            count: "0",
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "16.7-33.3s",
            delayFrames: "500-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 60000,
            actualAp: 1248,
            actualDps: 1628.48,
            magnification: "50%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "263",
          enemyName: "ぼったくラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEBAQEDAwMEBAQHBwcHBwcHBwcICAgKCgoKCgoNDQ0NDQ0ODg4PDw8TExMUFBQVFRUaGhodHR0iIiIiIiIlJSUnJycsLCwzMzM0NDQ2NjY/Pz8/Pz9AQEBERERISEhNTU1QUFBQUFBRUVFTU1NZWVldXV1hYWFlZWVnZ2dycnJ3d3d7e3t+fn6BgYGJiYmSkpKUlJSfn5+pqamwsLC7u7vDw8PMzMzS0tLY2Njh4eHo6Ojv7+/4+Pj///8xM4CvAAAAQHRSTlMAC+rAFR4oXJgzdEpm+D/Jf6ZSld/+tdBv68L8BNX+qv+W3f/vev7A0/7j/9at/+3+3v///v/+////////////RSkFQQAABdBJREFUWIWdV4t24jgMbWZ4NEB50wJZQgrU1LhjvH4msZ3+/1+tAmR2dwYybXV6OPTk6Ea6kq7E3V2NBc1+q+75DeuPw2ajEdw1+i/7t/nn/YPh4e8fP577d+NX7fTLFyIYH52zcn4XvrlCfSGCu+bavL+nL0HwnPpj9wsAEHv+bvft8USm68ZXAILem87o7rjAh04YNr+C0H1EGKXbhB7e3tbz8ecxgt5BYYZlmuW5kn+vw+CzCHPp+XK5I5hnqbFiD1X9XATrrGCT+8EiipMYiTTX++6n6CwB+IJIbYxRHCOixdv6M0E0JtxmRBfFO1jhNMUs1euPcxn0VohaIdz7xXxKiTx8uKmCzsZomhvKfyIUjmGx/uBoBu2NKThmygjliwpBcXucNz9SzqC7guQpEwRoYMoBRlG4lArLVuuPZBEuJbxWY0ml05oSJoTghDJjCXn9QCUaE+ZL2jgRRBufQSRYcpo6K/BiWJ9CEDSb0MT2lHTGM80INzp3qfM2zwzTm9oMmt3OZNDpr0xFG1CfcYKpMlIoDjn4Y6cmgqA3jeJ4NOEV75fyWaO0UkpbSEyO6vq5NYpQMt3l79esSMvE0mVtJ/QHcTL7fwBgzp8+RQoP7Ka2Cs37hyjKfvG35FSUIncQhakFCIbT2QNyvwCkMa66MUtQbRnCQRTNSG6t8/9Jw5u8+i8ntA6gMXyYzWYR2m4REZm/RqTL6lJoTKIYEJLtFv4Q1f7SDKfPIs8txGWWdZLQncazaBYn4F9inEa5gDHKc5BFFMU0c7y2lZuj2SyeIUIwKkFi7mymJWeUK2Uo8Kv4oo7DZucpmiWx8d5bIxlOEiqkUpzAPFifo60W6HvvZiMF3dEi2c7iWFyytizGubcwikSo3HBgNpl22u1bJITfoy2KH6IEu4pyEmdGK8mFZjgC9+Tbfdhs3hqGoA19PP0228Y/h1FEWhIBaaRWRJRuo/tWHYVBfzToDIAEVvWN2Qon8RZj4AJBfRftGvcTi2FriaJkW02DRawoLKyEJI6gPmL3Zz1sLiVKYnLpwoLCN6cFF0pJwWlcpyYVgJFJEvMLgkGwHUBL4eCxeZrK1+GfVlPj0XgOAetzB3uKiLLeZsZozbjJj89/2CyNiQQ1TmZVKVPoZ5cbLeFOkFQ4L/+AEHSgBF5uK1kqBDYpvJ6L3LvcFgUg1C/59gHSLzKayDOCI7AaDFwpzp80ovDHcS2T/c0peC/RBSFFzJTe3l9EJq1fsFCGc+wKC39OAumzvz3zAiHUkjARlx7Q+FzMHMmzf3pWtkLWb7f2oZolg0+K4gkyzjsHXJ6eFOXpGZSn+HVrLX/OkkwovNTBMGjvc7iVsrO8r5vBeL2e3+ipYHj8OUsgTUKSGGj0PjsBAJOF3bf6r5Ien28ghKtqlgzPaBxHmNhzBiY/1cLuw4ngCTveOOMbE1GtEQGTiDClealxFYATq9ECFAbz9Q0Wuht7mWZuUzgQGIMlcQKwJYBOItj3HGPyegOgCqHw1GRGUQKiav8F4HECSq0QwYcbABBCfhkEnhtJSjP/Aogokpposr0GELRKCyfHsx5kxKSnCIh2VRUcf5wmsCoURsvf/XvLDdjqaXFJQsB5ywGBphcWc6vXvcNuuV6+HTfD3wBaj1QqnWcwvecQciJSyRiDaQBVMFow/trtv+H7VrM//v14b0x2XMFdV/IHHatS2Kggh1Kekoc1Zxg7zAMAmF5f0a2NgVsuPRfR7p5KWXKCCm2yyzyKw7ABvwnJ7noPtZ6YkFJlRdnwx1H3kQGWV1BF2Cygqvq47DXKXsfs+TrASpfbGM5rpzaTEBbNQbvCwqGICcWv+3UnbITd9lIg/uOvqwBLJrg0aSrQ9B62aLszmmIJp4FgDD/2WzDB8/1hRzmSVyPoDwexSss9+vDwrbKHhxhzncpocN9rwu8gqQRbrPa9qwF0O4+bzdPg+682eNpsHjvtPuQ/fnl5mXfD/+/YfwDIRHxQEvYXjgAAAABJRU5ErkJggg==",
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
            actualHp: 60000,
            actualAp: 1248,
            actualDps: 1628.48,
            magnification: "50%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 60000,
            actualAp: 1248,
            actualDps: 1628.48,
            magnification: "50%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 60000,
            actualAp: 1248,
            actualDps: 1628.48,
            magnification: "50%",
            count: "1",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        }]
    },
    {
      stageId: 11,
      stageName: "ふしぎなお姉さん",
      baseHp: 140000,
      width: 4400,
      enemyLimit: 10,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "65",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "30",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "5",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 280,
            actualAp: 120,
            actualDps: 200.0,
            magnification: "400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 280,
            actualAp: 120,
            actualDps: 200.0,
            magnification: "400%",
            count: "5",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 280,
            actualAp: 120,
            actualDps: 200.0,
            magnification: "400%",
            count: "5",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 16000,
            actualAp: 1000,
            actualDps: 833.32,
            magnification: "400%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAADAwMDAwMDAwMEBAQGBgYGBgYICAgICAgJCQkJCQkNDQ0ODg4ODg4PDw8PDw8aGhobGxscHBwdHR0eHh4kJCQnJycoKCgpKSkyMjI0NDQ6Ojo7Ozs+Pj5CQkJMTExMTExPT09aWlpdXV1jY2NnZ2dsbGxwcHB5eXl6enp9fX2GhoaKioqOjo6Xl5eZmZmhoaGqqqqysrK5ubnGxsbPz8/X19ff39/n5+fu7u739/f8/Pz////YqtfaAAAAQHRSTlMABg0UHCmkITOSPL9GfmtQtF7/4KZze4bDjZryqf7N47b7yuf/6tv/5v/x/+n1//b///b+//7+/v7/////////bqephgAABNNJREFUWIWlV2l3okAQDCheUZT1NmoADYggDOcw9///VzsQ9627q4m68/IheaFruovq6ubl5e7TaN//7LXTHHQb/xW/3E3U/4hvzINopijas2Wo0wAFw958MVCeileMA8a7lZN8GM8loJklL6wI5+vneFRnCWMgZsTpPxdvOEjQFPF00nwmXhk6JReccQ6d1VBTH6axaUIuGCqZYKQI7JXe1x5jonegQkBrU3AhBMNFsltMho+k0Q+Y4NmPH6ACEIJTL/Raj4iyAhDY95D4BGCx+/aQnjqOLIFzVgXXEOQ0eUjRbRN/Xl3dTgkpg3XnkfgXdZXzKliwMgkcxzH1B9WgDCJWv4DEng07nU77YSEYUZWBQNvec634okc1eXD9pKEos7QGyJdPJqCuivolpLMnAdpmLSGeTJ8E6Af0vwAaUga/AJ4xVWV4IHU8T3SlN9K1/oN5aCY891BkaObHZNR6zAway0TKsBbiyVgmsXVcqYrauFsRihFQDusaWNR1SBZGk+G0O+lqdwL0bCR4nLKSCA7GCcMQHIPE3bzp9zGhrWUj8jykPhQsdCtvrcwV5x/GXQDNVUWAgD4Jc577MEO84oOXh/ldHd2YR7WEkIvilPh5+gNUhJLUNu4iUQ5k8mlhHsoA8nAZIi5o7iw7d+XfXgbk7IF+mYUSQNoiR8G6f9f1am8dfd4vhKQwC7FXzQXkTO/zs/bMyRmXDkplFAuLLCRxSKUaZ4170m8MzROWo9CXBxSEgTT3SuCGMXg3dP37CrRlAKtRQEqEYOr7GfBRGGOYp+Btcdh+K8LOOjmz9znJYOjuC1RRwIkLcPCdhprrlIo/Dk33Lip8LBjcl8gdfe0J6jzC+E8AKQQXEBBjYFmpB46DZvN2S0v/wBD9BcBj3yuQ6/n7jVtg/31krm6OiLYJWfo3gIAecDM3JuEG4jCEfp7bt9Y1I2DUL/8GwF68sTKKPCv1AUaE8dK+Ht9YQ/n0PxkQN9vHtPBisPFhDqp3nFwH6DlEYPcKQCgbypP17/fu3pcap9F1CqcJl5z/U4K8W0JU9aPQL/yQoHBxqwJOcje+0FH1Q/1M8heXPiBCeotcd/bW5CqA3GZYtBi75Hc4Y7UlQXdjubXCcEHzfQyvkyj3KWz3jHFeO1cVXoYZl1tu7oHtKGY1KiPAp+X2FoDcAlR9B6V1yoWoBHur4OXe9YtotizOaRV7kDjTWwCZHOKqsY2yLA09L/aB1MUmJdDUKoLrg6zFrHe9qaWMkkpiSmfwOh5bx+jkIp5tQkZlD/YP5yajh5uLqh7JCVj/pjR7Q306XcQMWRZiybIhX1G97Mq12bm55k0TFlx8EigdG5HjGLDCrFxk6EBKURHZ01umpCwL6vQu/p4lJJrYqHTqma4MTcfZrvXOTVNrrEtkX9iFZpfJap6UztmElGano33lqh0Hp/Pf/5cJwO3QLk9zVZHndtyvo84TaF/wIxlIugMrtCaGPptPv10z5adRcbhwTIlHvcUujNPk45ik0fqrkaI2mr2Zkx4u+e07hGVyKlSjqZBT4stPvqlpO6fI1j+fkTtMs60NTiUmlDFGMg9RdOxKBrV2U7361bU8ngJ7ea5S7euDbqv1On5/3x3k2Y3fDx/v49fRqNVqdQf6H8P5Jy7SEZMKG/SwAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 16000,
            actualAp: 1000,
            actualDps: 833.32,
            magnification: "400%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 280,
            actualAp: 120,
            actualDps: 200.0,
            magnification: "400%",
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
            actualHp: 36000,
            actualAp: 1500,
            actualDps: 2812.5,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
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
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 12,
      stageName: "日焼けしたタケシ君",
      baseHp: 160000,
      width: 4000,
      enemyLimit: 7,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "50",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "45",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "5",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 2000,
            actualAp: 200,
            actualDps: 146.36,
            magnification: "400%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 600,
            actualDps: 782.6,
            magnification: "400%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 600,
            actualDps: 782.6,
            magnification: "400%",
            count: "1",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 600,
            actualDps: 782.6,
            magnification: "400%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 600,
            actualDps: 782.6,
            magnification: "400%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            actualHp: 70000,
            actualAp: 1000,
            actualDps: 1363.64,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 3750.0,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 225180,
            actualAp: 12000,
            actualDps: 1469.38,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 13,
      stageName: "遠くに聞こえる祭囃子",
      baseHp: 180000,
      width: 3800,
      enemyLimit: 10,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "40",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "50",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "10",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "262",
          enemyName: "やぐらわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAHBgURDAkRDAkUDAYSDgcbDQscFxQnFxIkGhMpHRg7GhMmIx8vIBkrIhwsJiMzJBpFKh48MipBMyQ/PDRROCdDQkFGQjxTSjdYSDtxQyxUTkupLydiXVWVSjJpYlN3X0q4RCzLRjLlPC5wbWyvWkN4cWaFb07oRzqLclKIdViAfXybfV7baE2ni1+Qj4+akYLtd223mGeenZysqanoonO0srHGxMH5xWf2v7nY19P+34Tp5uX58uv///9vMCoTAAAAQHRSTlMAsEck/NcRZDNz7VOGG7+vn/9q3PI4/4NMZO/+2P53/6L97v3//v/n0//5wv7+//391P/4//v///////7/////+3nS8gAAA95JREFUWIXVl2t3sjgQxy0qIl4RxQtYyIpFESQsiYlGwvf/VjvYnmdfbFujvtpRTkIO8+M/kyuNxq+mL5eD35/43X0WZEWw0J91XwRFVsD/8JSKwfJQFMjJChdlRf5uPOhuvOdFhhx7hOKR7bhpkQcz9Ugg9LxI3el02jFWSNPs6dSNC+Vk1KEXseNMu51usxllM73X7dmOg9SSoUPooH06Ho2bcNuMilnd2h/2p7dI3u8BBofYndruStNver8AgGjaCNrj6K4Eo9PvdbMYALUZUdb7rDW9Ymz0u0q9Mdml8e5ws138by2NJireYPPsB5srAjTTarUsuNpm68vqO8vsKAJ0D1n+sXBbb20rO/rg6x6LuIV2qkNJ36Xu+Xw9W2/tQp7PqGWdztermz4CQNervDpv7ZO8XrOWc75KiV4BXB8GOCD6BCGk1/PJbVkFBOQ8BGhZrmtBElur1bTuBBc5rfgRQL9Tm2YYWnc8NB3HdSwT7ZrqAK2hNwbwQn2eUxZ/3Ayt5ooS9F3cWwSLA0yjHhWcEf/LtopDUfe2nhd5eL4IPC4E57Wza7k+OiguKTuEyTZJEpQkogbEvu9YFhDwTFFBkjCMGfEOtFYg0hrgAICqAYwIM4qZZF5+A9QKIATH9xM1wHiFhaClwAnFdQgC3ZLg+yhX68j3hArKhGD0PQAAYzAOgOA4iWISZxETZUkEfx8soBt5YlmOCyPTiZZK/pBEXlWSchY0GssIg/+nmR3lgUQozXOM6zVcM6em1R6ZpmnZqnOh6SHb64/gmkwmfbM9soZ9czi0bNW50FtvNuE3v79Ud9jOOvzW/leA0+Vy2YfhEYpTGO5Pn0WhNpBrwAXGwTEM/66q6gKeJRT7/Z4ungPsbwDgKAO63ymAgr0EgBCeBXyGsH9ZAQAUJ+OPIXBVQP+HEJ4FvKzgTw743TPeryHsnwa8rCB8VcGfXri8quABgJDf5UARoDfGPmPyBiiFZJvNpgbAokoDFYIRLPI4JbwEwAfGhPlZKipJ4jXBWGFvHASRtwVLWA1Ikm2y3SIqRbJF0IoOd1c1AMCbYFvmADgSRkiCMS4lxQTaSXR/WZxxWQouCShYf8AeWTLBiJSsrCTnZXT3m8eYQ8CiPhtsQv9DVGWdRwK7fSXr5ujumrLYCcnhSco2YZqUUJeiPu2QSvCyZCS/G0EOCjjhnB7DDQbdjDIGOz2pZEkZv//RpS9vZwPBsb9e+7KqX0whpxjGFOciv7/DD/ISDkgEr+ojMmEcFGCoruC0ReHUoLA5zVer0Wg46mqa1h3Zo6HtBT1N69j2eGzbk/8o+AcF7vxDHx8aNQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 100,
            dps: 11.95,
            speed: 0,
            range: 1800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1600,
            freq: 251,
            foreswing: 52,
            backswing: 27,
            tba: 100
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 50,
            actualDps: 5.97,
            magnification: "50%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
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
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            spawnTime: "45.0s",
            spawnTimeFrames: "1,350f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            count: "0",
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 40000,
            actualAp: 3123,
            actualDps: 5855.62,
            magnification: "100%",
            count: "3",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 14,
      stageName: "肝試しで消えた友達",
      baseHp: 210000,
      width: 5000,
      enemyLimit: 15,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "25",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "65",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "10",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "103",
          enemyName: "ゴーストわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAwMEBAQEBAQEBAQFBQUGBgYGBgYHBwcHBwcHBwcJCgoMDxANDxATFhgUHSEWHSAeHyAcISMdJCYlLTErMDIqPkQ7Ozs1QUUxUloyUltQUFBRUVFRUVE8YW1fX19kZGRFcX5qampxcXFPg5B2dnaBgYFZlaSNjY1fn7BqssSfn59ywNOwsLB7zeK4uLjDw8PPz8/c3Nzk5OTq6urx8fH39/f////aM97rAAAAQHRSTlMAAwoQ0+UZIZ0tN4CqiUK+THKTWGFre6O/jJqxqsW4pMzBzMCxzMnKuMvMvcvKzMzMzMzLzMzMzMzMzMzMzMzMtX5w5wAABFtJREFUWIXtVtmWqkgQFOiBhlYEWRQUBBdoEJB9k+X//2oKXFsY8Z6exxvHBz2aYWRGRlGj0Z8CJeA/rnkEzE3QXxHg8yUB/aIeYlSN/U0PEKNZwm96gCjVkzmsXwP8jjR8fvRUkcV65gCRFDI8HoSTvPCo8j1tQMyYH/AYQglmtjjGsb8ier4lxtKKezkgfLJUNSuM42MvAcosDfWlRwyQH8dNPYt0yylelC2NfkVALi2/IdC+ukIxXtY28orGX80RYRdKw2CMqeefgQ3zNZHBe32A0IssmFkYTQ+hNseffgOzgEAge/VDOH8ZGTa3Yt8yLD80uL4W1NXzgkANI/q1oM89k2robzbGZuP7QudvEIKWLfWnCJhgELC9ciAzLTFjxNbG87yNFa67QjFW9kNrRd40QCi7AtnFxKBw+NY2Rgs1y1OMjeV3CBBKUD0wn3vWIIw/JAcW4Q5Fna3boRGyrx19RdF8S3yuZ2Wr3RF/dZ0vytt5FfDkOq3r0uGa1hBOVYzQ9/zjgn0iIFZeHB4Nww9V8tI/e8jrOl2JQVXXjYSmNZQbLwzLUOfs8yaxRuxrYL5GrFHnBnDRiaIokMwTqK9Lu5UwgnGGZVkG7/jNGaGmeb6lhUZLgJCCtNf3iqSkdYt0fTkKoQYdC4ACa3PcGJrWtgBh9FJ3HVNXJCc/E+Qm9zLqlAysURTF80SsXR1FN2030PWoaDs4pc76eXt/ABOlY+xZnt/kGeG2bpRmeRboUVYUp9MpDVzn0AnQI2B2ajQpMcAaQNTOTSLXNveKYl6hm1vm5YGHTSTjeNQE4BY6kZQ96MBxXTeITDtK0yRxFOk1AYRxs7nIgTBBpBxl+akoq6quqirRXWBkbpv6awLQBYq1uYdpp6xvKMvMAU5mbnoYIjgLgUeoGN3rMzuqSrCKVWoOtHBRQVEwvkpv9VWw0M9yImn6DgE6m6C4nD0ocCIwiWaR3AEXziBWa5zc5TcB7auuyiIJgi2Hdc7yzgSo7wNFbdv4FFlWXLY4iZy9bUrLNTfEADFOJFC74jw+3S1P4G1V5Lm7D9y9m+ywIQLWyb+5lqAqsyQtgss4ToHjBEXlvkFQBvPtOT+Bm+Tm1ZCqBGYWh0EC6lCm0v5MkOVlYdtRckewHiIY4busMPfFg4v7a550SfyPB88jEP6QR/qdoC4jHQS6QSTi6BuLgPHf9iNBnZiXT5EwuAUtUFLYPhJEdnklePN2BxG7HwRmdmoRvKkArPMjQeEo+hn7JfWmBPyeBUAQ3Xx0X5+qd6DgYdqHdNdzseoDTMnAdd3Uv1uAd2bz+t4NRukKhDfdhWSKJNGAllxlqpszEn+3HmTyYPPCloPbpxgqbAVmvX35UHgmwAUBp2bXZyFBEwhDD6bgBwOKQvD1ZgbOWWgEv3GL/ou/+J8BAgA/o/9u11uNkQz9NZl9fo6v+PycTb5olureLnsJCHo2nk4/Pj7+ueHjYzodf34xfXn+F0VuzkA1nN3jAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 180,
            ap: 16,
            dps: 10.67,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 45,
            foreswing: 6,
            backswing: 13,
            tba: 20
          },
          stageStats: {
            actualHp: 720,
            actualAp: 64,
            actualDps: 42.68,
            magnification: "400%",
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
          enemyId: "104",
          enemyName: "ゴーストにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMEBAQFBQUFBQUGBgYHBwgHBwcICAgJCQkLCwsNDxAOEBISExUcHBwZHiEaJSofJyskJykuLi4pMjQqNTowQkg1RUouSlMuS1RERERGRkZUVFRVVVU9ZG8/Y2xnZ2dId4NtbW1xdHV4eHhSiJaEhIRgoLCVlZWXl5dstMakpKRzwdSxsbG2trZ7zeK3t7fBwcHOzs7T09Pc3Nzo6Oju7u7x8fH39/f+/v47lvleAAAAQHRSTlMABAkRGcYhKDkwlbVMpUNiWHxwhDeTtKPKjfGruNnCzMuvssrK4r3Ky/DMzMrMuM3MzMzM5czMzMzizMzXzMzMWEoGMQAABDxJREFUWIXtl1t7okgQhqUhAkpshEEwEFGbAOEwnMaGgYD//19tocZNNujqzs1epG5AH/rt6qqvv4bR6J5AInfX8/8MRpiP/wjAqgsJ/QlAMD1T5pj/DphZeWyp4v0E5jRE1MNd6ml31wFJ+Fh8hBfxLjaFuwHKFPe1Q8LcimNLubuVSFlvoPpI0r00tfD9UmDVIDNnDKeFu128mF1pJMOPhyrMaVGVaCKreuku93Q8+NAxV6wKA/yxnjVNpHKCZgEiXqn8JQIjT3VF/ILgF+V+X7syyyvQBUhC4y+lMFYXK134yGcQy80s2nX7coMV08t3QHCUCwlwAl6EjvJ3CoiXlOVSX9N2v+8yw47zNAVEag6OZyXNXNmOKb8DkKjoFvH9NaENpPD75SX1bNuJd7k1OL9khp6lKQL7no/8aKxJEEVrkmRFWf96fXp2wtCxQQxDAKR46WrOn/Pn1S0MjoLAN4w1BHl+enqOHduz01gfBMhW6CyU9xYx2CCE+EEQJb6xjpIkS16fXlLbsL3cGy4iK6nmaqVJxyX08qNV03ZdTR6MpO32b79fX/I4jPNQFwcB/aoXcXjaLGOz2h+DGg8PpIGbt18vYZ6nnnnBlhhO0px8l64OW09wmxOgJoaRdHDTvb0alqXPh9TajxdUK+x1EveOwczcdv9OKIoTrNAlgWcvCJnX+r2SpiAT8TMA5j5dyyU7PLgPGdKHLoHaVjP4KW7r99FNu2/qrqcU8ysAJdyFdhg7Tu5Io74LWXfMP/OjOiBVnVRthK+YgRLGdhjG3gnAzLZ9G9rIAD34hCTROqo21+wQe44TG6C01Do8xip9H7oqCai/LqK1nxFybQVg+rB8x3ZSTz263ngZ9cXv2q4q2yooazK56AN9cBMD9lmag20f+8Twilt1py50TZN8doovAXYEfdjF1nk7j1h5k9UHCbVN6S7/7Uhi8XTlOCb+sE527tOqa4skcpfyZS89Py5gBX/SKcipbrsmMtTZ+KZjGSF0vLAsOszHb+p9W1Fyrf9fguGxqql41p/j3JLC+CLS7jiOGEF3wUaibX9GICWqaVEk5gUHGApeC4qCVm3l6xICPZYAyFbSzS8FCJMMAM2+KwN4HeE3BQAKIt8MgIOQ0hK635ZFZM0lk5aAuKOKwqaqG4gWikepb5KqKSl1bwdIYCRd6W5dCpSuKUHMTV0FNwMY2W0busGCbGYgoboGXEVL96YijkFtrAp9Iwo7QjOz6BdRNg0tsqtGcJ4cT7AgQQmOXUfSJoH6Q0Ghmje9mTHSgmy3GUj/qDuEragn1A3dyjeVgFNJVoF9bE8HB4tNN0qyqgrU25TMiKrp/vy5PW9oJGLN3Gw386tO9JHAicKPH+IHQ0AcL4r8NSf8ju/4jv9j9B8XHDfugz/E4XYM/7G3eTI7w/PJ5HE6fTjHdDp9nKiKfPErafQXkwiiZQZdznEAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 200,
            ap: 30,
            dps: 23.08,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 60,
            freq: 39,
            foreswing: 10,
            backswing: 6,
            tba: 15
          },
          stageStats: {
            actualHp: 800,
            actualAp: 120,
            actualDps: 92.32,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "105",
          enemyName: "ゴーストメェメェ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 58.82,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 300,
            freq: 51,
            foreswing: 12,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 400,
            actualDps: 235.28,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "284",
          enemyName: "ゾンビワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAQICAQICAgMDAQQDAgMDAwQEAgUEAwUEAwQFAwYFBAcFBAUGBAgJBgsKBgwMCBAYERwbECQdEiYfEyokFi8sHTk0IkE2IUg3Kz00LzY/LklJMFtLL2JUOWdjPX5dVWB0RpaASaqGULFxanSRWL6XXcmfX8+IgouoZtqybem3cPO5cf69dPrBdvqnl63HevmzqbfGss7cw+Pryvvi4OP29vallb8EAAAAQHRSTlMABA0WHjVCKE9iWXOG32t/85Gc5reupcDTyv7y3Of//vP//9v/9v///v3/////////////////////////////BF3g1QAABtZJREFUWIWVV+liqswS/NjEXVFZVRCCgAPCOIMs0Zu8/1vdHjDRRHJyTpEfQOyil+qm+e+/P4Pv9UXu41weTiX+F4Nv5vJQ0/otAScOFdOYif9k3xub68moeSgnjfRdtFvI/2AvDNXtntmAC7ykbPYZ3ml/T8AJQ3OHKA1XPR6ev9iGpCb/QiBMzV1S1EVkDnhOVph9TfYr6a/tB2BPy7KMNyNBmBohhnOy13vc77ZNAP0VPL84n+t0p4jSapeWxbmkofk3BBwAfEZ5ked5ifeaNNwgChcF2Zv93wl4UZL6Y8NBSQxIkGso6jpK2vPJTP5NSrw0W2irydxyHLc57Pny48Kx5sb4NzEKI2O9dtyf4GyU3p8ZxPHSDlCGsyekaZbhNNpqf2Tg5NnScqKMFkVZFo8HxTgvc0rQdiH9IZPiyPAOnu1CDYrz43GmWUryLMUk2kx/doEfGH51PXk2YiL4ipzmJI0TnO01+ScXeNDP6e39Ega4fCIAPyiOUYojvf+DC9AzzP791QeC7/YNaJakNDZ/ikGcvZyu72/VwXbi85MHbRyEFslPSeB6q+MVnh+6QZTm3QTnoijinwj40Uv1/v528iL8YA4WxReCMzK6CThZO1wagqQsHgnK8tG+LH4kgAje3t/eKj++2+dMQOTzusjLgkSdBJwg9vXT2+vxdPTi/JZCmAE4ct0gzW8UeYFRYHcSCENFMY+vB8dzbERvKihKHFoAN71f25bVRQAjZDJZhgc/QlEQ08+okW0dTkc7IowShkpkh6fjSwcB31fXge84EYweQvJP4YSWV71dPDdrfCqIa0GYXQQwBvY49Zy0Lsv6XoKW4NVzW2kXmBFcnggEWZDHy5CWqHX1oWqxAyEcwLEmqIJ2hiCMtKEMHpD6SX0liRzbcUPcVKEoahxYT0nkeqoxE3oaG93FOc+/yK+kcRgiAsrMoYY5ySIHCEai8EDBj4z5QhBnbJBD1JRRgPpaNRcfyOEfNAkcqKK11KaDnnCPQFlbK0kYGpCEgqYpYckj0HUlE05DAU9OEEKR6wRh6MOc3hir4SeDpPqBORQkE15/MDFizPwOgqYjoaTMkRzmWZKmoR1gStLA8pNorfY/CHp6lLzMBFnf4/pM4oTkJUW+a9sRrXHa1g/eUfmZJq4bIRS6blLTaKt8EPRNROD9Ja8YAc0wBcURnMHwyosY3WYb0+GZxr5j206Q5HWdrtUPgoGB2IyQGAH8rqlCWVKckhIHEWnqcZvNeQqZiGG8F2XqfBKMNqiG3aPfErQFJzFztExdCKP8rASIlKFkiNfaIwGNjJHeetA4nEBbBLhOXUhs+cjQoCjBYDN7ICiLZLswHwhwnGSQTBLYAWT/GRl6qAIjgOXDNO4EsAvkLPYi9W32Vv6O3W6r33UwNKNznUfbyY2gaIREWyYM6rEsJr8P2NbcXGjj/l2JvVUImUp3c1ZG1gxFSUE2tCEDbSKYSL7XHM2fPVEk6XHPEJVdWtfQ+ZC1HEQLwZMEJbgNp64Ty/IfYcPe9qWb+QETcZ3YjADDLpNgkqKYNJpg73PL9jzH87zW3rP0b4sS26hgkBA3ICDdZjHCOEmbuUZAkDABoAdt90bh2avvqxrfW2z2SeYFIL24QUooYeLPUASCcHxoQZ85wQhcS33a9XhpbGx9JyBQ/zhpCJggaRIGhwBm2OvlcqmOvtN60EEAu3xPmVjgQdZ6AC3N7INDVR0Or9f/MVyrQ8PActDxXgEnJpADktwIQEmpf6gux+NrY36pTqewlYE1GXdtKJykw1TNWxdgJpxx6FXX6lg19tXBh0qAOcCxjE4GUWVKhBWEVQEqkPrH67Vq/L9WoR9GAJQwxIExEJ4JBGWb1DWbJZiwRoh9ePi1ib8Kw5R+9iJIZqt0fPrAghYS1rl53gxh5LfRQ/wHP6Hnh55OXsYdHnCSuouST6DAuxFcT06AkgfE++41jR/ocxAdm/w2az/vdG3tPbgB76fmPiRyvdWnHQ4wMUxXE2g82MlBfWvD2J0u1+vl5E+MuQ1j3p5bbhhYhqoMxe5FkxP7qoPi/cbcBq45Gi5e9ofDfq3D2SaELVuHr6BoO5bkzue3DMoOoc1sajq2JsNn51hT2ejgJW0Xulpvuon231vxWxpG22Cn9yR1voQ8c7wgiqLAPhunxhqmgKSv58qPH34czwvyQF8vtcFAXRqL6eCO6dhcqtP+QJtMZj0ZXs1cVzsNRrPxwpwv9ZVuLJfG5Avghg6YTFYLZTaa9p+0zMmDhbrSTeP28+Vy/hXsFvuXYer6Sps9dzR8rPWGgyl4MVYWDJr6CI3dUsbj8Wg0Hfbvhfg/az2a5ItmTl4AAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 900,
            actualDps: 574.47,
            magnification: "50%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "287",
          enemyName: "トンシー",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 48000,
            ap: 3600,
            dps: 2037.74,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 300,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 1800,
            actualDps: 1018.87,
            magnification: "50%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "burrow": {
                times: 1,
                distance: 750
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "285",
          enemyName: "にょろろん",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 16000,
            ap: 2000,
            dps: 1621.62,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 60,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 1000,
            actualDps: 810.81,
            magnification: "50%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1500
            },
            "revive": {
                times: 1,
                duration_f: 180,
                duration_s: 6.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "284",
          enemyName: "ゾンビワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAQICAQICAgMDAQQDAgMDAwQEAgUEAwUEAwQFAwYFBAcFBAUGBAgJBgsKBgwMCBAYERwbECQdEiYfEyokFi8sHTk0IkE2IUg3Kz00LzY/LklJMFtLL2JUOWdjPX5dVWB0RpaASaqGULFxanSRWL6XXcmfX8+IgouoZtqybem3cPO5cf69dPrBdvqnl63HevmzqbfGss7cw+Pryvvi4OP29vallb8EAAAAQHRSTlMABA0WHjVCKE9iWXOG32t/85Gc5reupcDTyv7y3Of//vP//9v/9v///v3/////////////////////////////BF3g1QAABtZJREFUWIWVV+liqswS/NjEXVFZVRCCgAPCOIMs0Zu8/1vdHjDRRHJyTpEfQOyil+qm+e+/P4Pv9UXu41weTiX+F4Nv5vJQ0/otAScOFdOYif9k3xub68moeSgnjfRdtFvI/2AvDNXtntmAC7ykbPYZ3ml/T8AJQ3OHKA1XPR6ev9iGpCb/QiBMzV1S1EVkDnhOVph9TfYr6a/tB2BPy7KMNyNBmBohhnOy13vc77ZNAP0VPL84n+t0p4jSapeWxbmkofk3BBwAfEZ5ked5ifeaNNwgChcF2Zv93wl4UZL6Y8NBSQxIkGso6jpK2vPJTP5NSrw0W2irydxyHLc57Pny48Kx5sb4NzEKI2O9dtyf4GyU3p8ZxPHSDlCGsyekaZbhNNpqf2Tg5NnScqKMFkVZFo8HxTgvc0rQdiH9IZPiyPAOnu1CDYrz43GmWUryLMUk2kx/doEfGH51PXk2YiL4ipzmJI0TnO01+ScXeNDP6e39Ega4fCIAPyiOUYojvf+DC9AzzP791QeC7/YNaJakNDZ/ikGcvZyu72/VwXbi85MHbRyEFslPSeB6q+MVnh+6QZTm3QTnoijinwj40Uv1/v528iL8YA4WxReCMzK6CThZO1wagqQsHgnK8tG+LH4kgAje3t/eKj++2+dMQOTzusjLgkSdBJwg9vXT2+vxdPTi/JZCmAE4ct0gzW8UeYFRYHcSCENFMY+vB8dzbERvKihKHFoAN71f25bVRQAjZDJZhgc/QlEQ08+okW0dTkc7IowShkpkh6fjSwcB31fXge84EYweQvJP4YSWV71dPDdrfCqIa0GYXQQwBvY49Zy0Lsv6XoKW4NVzW2kXmBFcnggEWZDHy5CWqHX1oWqxAyEcwLEmqIJ2hiCMtKEMHpD6SX0liRzbcUPcVKEoahxYT0nkeqoxE3oaG93FOc+/yK+kcRgiAsrMoYY5ySIHCEai8EDBj4z5QhBnbJBD1JRRgPpaNRcfyOEfNAkcqKK11KaDnnCPQFlbK0kYGpCEgqYpYckj0HUlE05DAU9OEEKR6wRh6MOc3hir4SeDpPqBORQkE15/MDFizPwOgqYjoaTMkRzmWZKmoR1gStLA8pNorfY/CHp6lLzMBFnf4/pM4oTkJUW+a9sRrXHa1g/eUfmZJq4bIRS6blLTaKt8EPRNROD9Ja8YAc0wBcURnMHwyosY3WYb0+GZxr5j206Q5HWdrtUPgoGB2IyQGAH8rqlCWVKckhIHEWnqcZvNeQqZiGG8F2XqfBKMNqiG3aPfErQFJzFztExdCKP8rASIlKFkiNfaIwGNjJHeetA4nEBbBLhOXUhs+cjQoCjBYDN7ICiLZLswHwhwnGSQTBLYAWT/GRl6qAIjgOXDNO4EsAvkLPYi9W32Vv6O3W6r33UwNKNznUfbyY2gaIREWyYM6rEsJr8P2NbcXGjj/l2JvVUImUp3c1ZG1gxFSUE2tCEDbSKYSL7XHM2fPVEk6XHPEJVdWtfQ+ZC1HEQLwZMEJbgNp64Ty/IfYcPe9qWb+QETcZ3YjADDLpNgkqKYNJpg73PL9jzH87zW3rP0b4sS26hgkBA3ICDdZjHCOEmbuUZAkDABoAdt90bh2avvqxrfW2z2SeYFIL24QUooYeLPUASCcHxoQZ85wQhcS33a9XhpbGx9JyBQ/zhpCJggaRIGhwBm2OvlcqmOvtN60EEAu3xPmVjgQdZ6AC3N7INDVR0Or9f/MVyrQ8PActDxXgEnJpADktwIQEmpf6gux+NrY36pTqewlYE1GXdtKJykw1TNWxdgJpxx6FXX6lg19tXBh0qAOcCxjE4GUWVKhBWEVQEqkPrH67Vq/L9WoR9GAJQwxIExEJ4JBGWb1DWbJZiwRoh9ePi1ib8Kw5R+9iJIZqt0fPrAghYS1rl53gxh5LfRQ/wHP6Hnh55OXsYdHnCSuouST6DAuxFcT06AkgfE++41jR/ocxAdm/w2az/vdG3tPbgB76fmPiRyvdWnHQ4wMUxXE2g82MlBfWvD2J0u1+vl5E+MuQ1j3p5bbhhYhqoMxe5FkxP7qoPi/cbcBq45Gi5e9ofDfq3D2SaELVuHr6BoO5bkzue3DMoOoc1sajq2JsNn51hT2ejgJW0Xulpvuon231vxWxpG22Cn9yR1voQ8c7wgiqLAPhunxhqmgKSv58qPH34czwvyQF8vtcFAXRqL6eCO6dhcqtP+QJtMZj0ZXs1cVzsNRrPxwpwv9ZVuLJfG5Avghg6YTFYLZTaa9p+0zMmDhbrSTeP28+Vy/hXsFvuXYer6Sps9dzR8rPWGgyl4MVYWDJr6CI3dUsbj8Wg0Hfbvhfg/az2a5ItmTl4AAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 900,
            actualDps: 574.47,
            magnification: "50%",
            count: "7",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
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
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "103",
          enemyName: "ゴーストわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAwMEBAQEBAQEBAQFBQUGBgYGBgYHBwcHBwcHBwcJCgoMDxANDxATFhgUHSEWHSAeHyAcISMdJCYlLTErMDIqPkQ7Ozs1QUUxUloyUltQUFBRUVFRUVE8YW1fX19kZGRFcX5qampxcXFPg5B2dnaBgYFZlaSNjY1fn7BqssSfn59ywNOwsLB7zeK4uLjDw8PPz8/c3Nzk5OTq6urx8fH39/f////aM97rAAAAQHRSTlMAAwoQ0+UZIZ0tN4CqiUK+THKTWGFre6O/jJqxqsW4pMzBzMCxzMnKuMvMvcvKzMzMzMzLzMzMzMzMzMzMzMzMtX5w5wAABFtJREFUWIXtVtmWqkgQFOiBhlYEWRQUBBdoEJB9k+X//2oKXFsY8Z6exxvHBz2aYWRGRlGj0Z8CJeA/rnkEzE3QXxHg8yUB/aIeYlSN/U0PEKNZwm96gCjVkzmsXwP8jjR8fvRUkcV65gCRFDI8HoSTvPCo8j1tQMyYH/AYQglmtjjGsb8ier4lxtKKezkgfLJUNSuM42MvAcosDfWlRwyQH8dNPYt0yylelC2NfkVALi2/IdC+ukIxXtY28orGX80RYRdKw2CMqeefgQ3zNZHBe32A0IssmFkYTQ+hNseffgOzgEAge/VDOH8ZGTa3Yt8yLD80uL4W1NXzgkANI/q1oM89k2robzbGZuP7QudvEIKWLfWnCJhgELC9ciAzLTFjxNbG87yNFa67QjFW9kNrRd40QCi7AtnFxKBw+NY2Rgs1y1OMjeV3CBBKUD0wn3vWIIw/JAcW4Q5Fna3boRGyrx19RdF8S3yuZ2Wr3RF/dZ0vytt5FfDkOq3r0uGa1hBOVYzQ9/zjgn0iIFZeHB4Nww9V8tI/e8jrOl2JQVXXjYSmNZQbLwzLUOfs8yaxRuxrYL5GrFHnBnDRiaIokMwTqK9Lu5UwgnGGZVkG7/jNGaGmeb6lhUZLgJCCtNf3iqSkdYt0fTkKoQYdC4ACa3PcGJrWtgBh9FJ3HVNXJCc/E+Qm9zLqlAysURTF80SsXR1FN2030PWoaDs4pc76eXt/ABOlY+xZnt/kGeG2bpRmeRboUVYUp9MpDVzn0AnQI2B2ajQpMcAaQNTOTSLXNveKYl6hm1vm5YGHTSTjeNQE4BY6kZQ96MBxXTeITDtK0yRxFOk1AYRxs7nIgTBBpBxl+akoq6quqirRXWBkbpv6awLQBYq1uYdpp6xvKMvMAU5mbnoYIjgLgUeoGN3rMzuqSrCKVWoOtHBRQVEwvkpv9VWw0M9yImn6DgE6m6C4nD0ocCIwiWaR3AEXziBWa5zc5TcB7auuyiIJgi2Hdc7yzgSo7wNFbdv4FFlWXLY4iZy9bUrLNTfEADFOJFC74jw+3S1P4G1V5Lm7D9y9m+ywIQLWyb+5lqAqsyQtgss4ToHjBEXlvkFQBvPtOT+Bm+Tm1ZCqBGYWh0EC6lCm0v5MkOVlYdtRckewHiIY4busMPfFg4v7a550SfyPB88jEP6QR/qdoC4jHQS6QSTi6BuLgPHf9iNBnZiXT5EwuAUtUFLYPhJEdnklePN2BxG7HwRmdmoRvKkArPMjQeEo+hn7JfWmBPyeBUAQ3Xx0X5+qd6DgYdqHdNdzseoDTMnAdd3Uv1uAd2bz+t4NRukKhDfdhWSKJNGAllxlqpszEn+3HmTyYPPCloPbpxgqbAVmvX35UHgmwAUBp2bXZyFBEwhDD6bgBwOKQvD1ZgbOWWgEv3GL/ou/+J8BAgA/o/9u11uNkQz9NZl9fo6v+PycTb5olureLnsJCHo2nk4/Pj7+ueHjYzodf34xfXn+F0VuzkA1nN3jAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 180,
            ap: 16,
            dps: 10.67,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 45,
            foreswing: 6,
            backswing: 13,
            tba: 20
          },
          stageStats: {
            actualHp: 180,
            actualAp: 16,
            actualDps: 10.67,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 15,
      stageName: "起きたら昼だった",
      baseHp: 240000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 160,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "15",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "70",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "15",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 420,
            actualAp: 180,
            actualDps: 300.0,
            magnification: "600%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 420,
            actualAp: 180,
            actualDps: 300.0,
            magnification: "600%",
            count: "5",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 420,
            actualAp: 180,
            actualDps: 300.0,
            magnification: "600%",
            count: "5",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 1500,
            actualDps: 1249.98,
            magnification: "600%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 208.33,
            speed: 20,
            range: 160,
            rangeType: "単体",
            kbLevel: 1,
            money: 1400,
            freq: 36,
            foreswing: 2,
            backswing: 20,
            tba: 1
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 1500,
            actualDps: 1249.98,
            magnification: "600%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 420,
            actualAp: 180,
            actualDps: 300.0,
            magnification: "600%",
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
            actualHp: 72000,
            actualAp: 3000,
            actualDps: 5625.0,
            magnification: "200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
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
            actualHp: 70000,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "099",
          enemyName: "夏セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80000,
            ap: 3000,
            dps: 937.5,
            speed: 10,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 96,
            foreswing: 17,
            backswing: 24,
            tba: 40
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 6000,
            actualDps: 1875.0,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 16,
      stageName: "発見！ヒミツの入り江",
      baseHp: 270000,
      width: 4800,
      enemyLimit: 15,
      requiredCost: 170,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "85",
          amount: "2",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "15",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "039",
          enemyName: "ナマルケモルル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkKCgoLCwsYGBgcHBwdHR0eHh4fHx8hISEiIiIpKSkqKiovLy8xMTEzMzM3Nzc4ODhBQUFHR0dPT09PT09ZWVlbW1tiYmJlZWVycnJ0dHR3d3d/f3+JiYmRkZGhoaGlpaWqqqq2trbExMTOzs7Y2Njg4ODl5eXr6+vw8PD29vb6+vr///////9GLDfdAAAAQHRSTlMABArdEX8cpf5WvNLn9TlJIy6RcGQ89HSbh0q37GH/0Hj0h/6V0P67qP7P/9Hk/9///+////7+/////////wD/E2hCfAAAAvRJREFUWIXtVFlz2jAYxA736UAghMMETA3CxJawTkuq//+/qmTSBtN22kxf+uB98Hg82v12V5JrX/8RtUqgEqgEKoFKoBKoBCqBSuB/FPgMnLo3HI6GXv1TrO+oT9f7w/nN4HR8ndadT9LdxTEhXCqttVKCXg6vj+5n+N7+InT+AS1Jsnv8OxeOt1g8HcgtvYCi5/WfTThOfX26XC6sTNY61yLLkvVvPDiu6zoGzfXL/pAIztn9eKk4jDE/T39Fd6evx+N+v3vdHS6IMiwQond8ijgXPEV0//OOOtN9QoQUjBKCuc4JYxDLcgM8DEMfEIlZsrjnN58Tdl2tFU6zXFPFuborAPoh8NtAKRK93PEfl/DHNElNdG007urLZUylpDHW5rm8i/8cy/I0Rm/45lUZNxzpDDGUMgDYqSwwTT4GalOAprG4pQv0dr5wnmqK0ziM/TZ6Kws8p8byu1Nlzg6D9J1qn1IkL0NvcUyRSDNNIUGz6Et5B3aUk+sxk0ZASRzbRrS+lkrg3O5acw9IapZRLMJgXhLwzhJft5xjE0GkEbSx6TWGRkuvWFZ/AQRibiyA3rBU4S7OYFoszpAkkkUhs5VFVwEK5ourgtv5AiHEAq86pbPcHG9gim1iLSFDDIbGAI0LG1rIOCaXpVcwHG+yOSXn5ejmNjneaDLurkBUtKghhiQCIhcxE9Ly4wjJXIatybAgOU3PK/2Z6s+bbWAAASoqw1GUQmJyp1pyjCAI7YZmYRCs5l7tJ7heY+X7IIoARBG2Z5cFAUAq5xFCJi2hBAHCMwFWq+225Tm30R232Zmb8X5Alc5YajITmbMQ2AYzjIkoroIMfT8I/UG/Pxh0x43JU8f8XG0ar9Hqraz5ILymV8pmSNttH9GbW2Td++0PDAb9h27rqV57HPcGs4H95GMz3/pljJHQfplFEBJ7r6l17xuUFXrdhunRHXVGnUlj3OpuTpveQ7+/MpgNvmNWYLsNt8a9wUOv1+22WiaEzeDUvgHfiBulYfASJAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 563.38,
            speed: 2,
            range: 450,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 426,
            foreswing: 27,
            backswing: 49,
            tba: 200
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 12000,
            actualDps: 845.07,
            magnification: "150%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/Pz9vTUh4Tk52WFZ4WVZ5W1h6XFd5Xlh8X1Z0ZFZxZmN+YVp+YVp+YlyCZV2EZl+lWluIaWGKa2OKbGKMb2eNb2aNcWmPcWeQcmiSdGqRd22Wdm1/f3+ghn6ih32jiHyliX+rjoOxlYiwlo2xl427oZW/o5a/pJbCqJzHrqLPuKvRuq/bxrnq08Pw3c/66Nn87uP98+z++fa8WBpcAAAAQHRSTlMAByI5WHWHlaS20+z7BB4JFx0qkjpZCv9HxGameASJ3fBYyav/09+V6ALezf/v//bJ/v7z4v////X/////////ewpBDwAAAVJJREFUWIXtk9lygjAUhqndFyShSkVRFFAsBhRsiNng/d+qcTpOb5zpJJedfNcn3/xnieNcxc/TNI2GiuB6wV/klDN6KopNHHlGgpT1UgrJ0DKExgIhJS2n/txUIETXC3YYfRoJFlRyIftOssMEmAj8gtZMyK6X7JgDV18w3KCMcHEOIU67lf4uYbwM0Y9BDeJrpT1JGCejtGHKoPqQyqCbAcymrr9p2VkgKG7WcK65DQidICoJ54JWqG2P6SzSzKAIFnvGOWqZ7DhpS32BA9eY4UodVC+qamcgmI+3GBF1DX3PiUkCx5uhDCEuJcF4byJwRtss+2CM1RUxaeG8zqyhpKJtbZgAHNqaNgRhXi+NBLAok6bGcUHa1EwQRuMwTybvcTIxErjA80AAXABN/rTFYrFYLBaL5Z9y84vJ88Hg4fnC0+1AX3D38PJ24fXx/nrRN7DhNUF3J6CdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 720,
            actualAp: 144,
            actualDps: 86.4,
            magnification: "800%",
            count: "0",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 960,
            actualAp: 240,
            actualDps: 122.0,
            magnification: "800%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQADAAAFAQEJAwAOBAIYCAMmCgJICAU6EwM+GgRFGgWUAAFZJAlvIwd/HwZjLQ59IQeAIQKBJwqMJgpqOBeQKgybKwySMBJ2QBueNhOpMw6tNRCtOBGESyK8OBCWWS7XRRXLShy5UiqaaDvkUh21ZTrtWh/FbUaxeUveaDnxZiq7hlfmdkP2cjT6fTzHkWDgiVn6iUfamWT5lFXbpnL2oXDnsoDtvYr2ypv916v/5MH///++CyS7AAAAQHRSTlMANbVxzRr/9lqi/Q3Hgv4C/7Ik/WkNlT3/sv5R/4S/3bD//v//7f//////z/////////////////////////8A/Bst6gAABGNJREFUWIXtlVl3m0gQhXESW8s4GAnJQrgtmcV0Q5odQbN5/v+/mlugk5NlTl5mHlW2hGj1/epWVWNrf//H0G6AG+AGuAFugBvgBrgB/nfAb7Hf7w8vz2+/xuthT/H7/p/iab/d7o7HsyuS6IcQIkqS97fj8bjbPv0RsD2ez+/CF3mRz9IcoCQv6O1SCCHib4c/EfY71xdJEuVFQUq6Xookh5YITQEfl28vKORfIE/bw+GwO/vYGOUwAAxdL5cGn4smJx8Tof12Oh1ffm0G5Kd313Z9iKKfDFyaHJymgQXcJLCQBUK8n54P279+0EMuIteeihcQ5hOACm9IBGl0tQBO7MOefz4dvtvYH85ocxTYblQkkUgKAkyEvG2bSXpJZguRiIoiiGEqE+fTy0x4ejljTlnseYG4Aq4WUHzTYglGpspwEaLKgiCoZRC47vtMOJz9rKpl6EkZxnkk8lmfzN4bjOFymRzkDWqIlXLsMAyQMQxOWyrg2Y5VEGRxIMsyjkV8KTICtH1BBwinqOkbukRV28ZV35WO7WbDOHZN5r5C/yqDKvDzpoW1VJWyrLIs6/q6Vqn0HOaFslS1GlQcV3XXd6oM3bj5QIzoz9teO6R14PpJO47tJQ5Kpbp+mKLHJ6VKeq+vS1gr0zCoR5KPQ98m76/aIZSYf9UNWOspW9f1PRINI377fuh67Bx7Wu0medxO6QcsNRiFtjNtAGAOhI9BSpnWCtHRbtxxLNBd181y0Yxz/nHoVB35trZxQtuGg5kw1pxPLjpAPE+mMuUen3kS2bN+/Ljq+7osK/+svaEHtluRZsCXQ+rxq4mSex6fosReGYZVNw6zmvQqDgLpHrW3GkbtoFZ1UqBXIwiESEspS+5wvHBFKUFF4jn5gH7UWSR8lx21oydhlghVRCmGQYUOp+rTlFk8dSyPqihn7x9XucqiGHobgA1TKuU4mVUUZRXaPvSSOfCOg8lM5limI7mXXjsHOdqB9sVZJnw7sDbaxqpTXqrUjqMsyTD1njOHgnFuGTp+YAMdHufk3dxfACLf9coJIL0QLXbcIEuaDu1zLIt5jqVbzNAJ4HXIDGt9P09TVaquYt93HS8E4Nm0LF5KzgzT8WNUFzqmCesgUBgWpojWdlcx5HWWkdz2uGWZz9p2Y5qWwx398evX53PWKu5ZhmFajJGceRzPAy9RNY22zurJPOmRwjA3eBy3G+x3mLn6/PnLwnBDZjnkXdfXcO+hFgSTqqTjVUV4XEmO/jumYZBeu1sZ5IGtF4sHhG6Qf6Y/rHXnKqeScLa6qXJBansaj2l8vdM0pF0bhmExc/0whw5HprG2MIlZTS3hdadil8K24c9iqNNYLz7da8tPyKwTwXj4MXTGpuxoBzlhjKcSYsiRyGDwry8WqyVKuL9brlaPumnqi58AlJl6YaIgZsIJkurrNeSLhW4am9Xq89399z/s98vdbrn89OV7LBZrisUaOiIZ5uPj9avVcondf13/LfwDjAMhzDMfbnUAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1304.32,
            magnification: "800%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUGBgYHBwcICAgJCQkMDAwPDw8PDw8VFRUZGRkdHR0eHh4oKCgpKSkqKiosLCw0NDQ6Ojo9PT1BQUFFRUVMTExUVFRdXV1paWlycnJ8fHyFhYWMjIySkpKZmZmgoKCnp6etra2ysrK5ubnBwcHLy8vT09Pd3d3k5OTr6+vy8vL39/f8/Pz///+gTjTCAAAAQHRSTlMAAgcMFR0nMKFAOFRdSrXPhKvBb3pmmI3Y8aKx6rriyP/21/He/un//v/+/v///v//////////////////////VZxXkgAABRJJREFUWIWdl2djqkoQhqUIiiXGgho12ICt1KWIiP//X91FYzTnCp6c+WDDfXbmncLSaNSZoGpi7R9emTRuKeWb/A8YQZaFhjSYdcWG0B40fw8QJwNFkMbLhdKQ9aHyD4DRTFekkWWNpN7sXwCC9rbU1THAq/bHZqU0hF8TZN22pjr0rf4nXChK+5cyiKo6+cS7JWJkg/BwMOyrv/NBGvU/ZoCaMHSgjze75Vj6nQeCNtyZpkdpGPjMJXil/m45d2Gyd5yAlcYZ1pcDgvhXgUia3BCUhY1IWAIotIdXBQStI7/cvKk11fdRUxsN1zYNLw4Q861XeiAorVbzlQtiZ9gazGa6YSH3GgFHeNDo8q3lwXLYab/yQe1vNhu4gbfVFwvwdqBwWcBy1npVEPLY8mhIgM9+EBzrY2L4ngP6vXqC2O3vojw/oJ8uMObtPp3jMQbzYacWII3nID6diwSg8KcPNjoUxxAY4/rOErtLEwZZcWKAPBJCBJJTSrdTTarNg6AukIdtHOe5Z7v35YyC8ODbi578Io3S2PJZ6ELbSQ+PQrq2E2F7p7+sI2WBLwETGwYx/BbSh5AC4DpG+4UDYmfvXX32kY0dG19lCOHatEnAQutVU0pTeFOujMNcUx5+yMh6DS9gvHhRRs0V+U6b5xNzbZZCeqZJnUtfeNv6GIT21rsBsOkxH5mlJD71Q2SWVwJrUnuLEDr7b+EJ8Mo28n1KCP/RQX5YVsO0VgRxDL6LJwwuHz1gQ9t2SiWuItQmUv7AP8o3ZD6AcZaQMgUXBFnVApS7hl8dBEFcFKfMswEuQ2COUdsJmuH+cIDaKD4VxbnIIgfamEvhbuum66OGpfjYpocijw/nY5jlqQsADerzKI6s4C6iA2B4LIpjkORZdMiPWcTrm+x7NQCJJ+EGCLBN4kPCAt91XYenkhBMeEV/duoBlH5VPzJJ4CAAIEIYE+o4rlsWJnwB2JiP7YPcKD1k2THPT8XpGGMTe96+HjC/NXDIGwEwLsHFTseUj1nIy8mvBww2D2l0StXDMIpYQBGvR1qyvdoQZB0+jEF+RwL21QAi3vWKtxnXdJOyog9lEF1qOYqiOIrjOPoqzfV7dS0Lvb33CEgOXL6LBMUpz5LoCnjTKgG8jsL79vHhVJzvxhsi5r+76xoRpCm6+R6xJH9cXtop4xeouaseKfJ1IrOIbxUfz/+z4hAxntxppQi3gZhEQZT9uX9pecywjT4q56piOOX6OEZ+cnoGKFKGEFlUNvQXgPdtmD1ZzgEZg9RZtasA6mWcxAkkcf4UwOcC8DyjVwXQDI/XTUqBn54qAIHNgm3l+aAEsCS2KUufKVCq6Nox23ZrQgijlICgGkDXrB4Qpczk/VAFOOI5CqoBPAtJijYXwHNCBt8NVA1ormjqrN75zel5GZzPqTWZfM4qRZQ/iGP0eluHpc8BRWRozWm/Mo3SeGd0JFlHYcKPaef/M07Ooimoo8pKFLvvXYlPha1TtlKeHO+IIj/ybxkciQ1Rrr4/y0p5TZ5awaE4HzBhSZqmScLHEZ+KXl5EL44XX8ZPepjHkLtLY29Z+/12a6xWSxwXOa1uxD9C2XtZkeGp1u6125qmqYr6gdIitbp/+QTbnII4Z4YmfD/sCZwQu4u/fXwUtBWK4EAW7yaprd1nt/6U+7282e725+Z8qOt662a63p/P9FG3p75+euOZnraGb2/DIX+5Gf8y7L+39EH3j4n4H2iBW0BUMHPwAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 10400,
            actualAp: 640,
            actualDps: 800.0,
            magnification: "800%",
            count: "0",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 82500,
            actualAp: 2700,
            actualDps: 3000.0,
            magnification: "150%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 98000,
            actualAp: 5567,
            actualDps: 10438.12,
            magnification: "100%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 82500,
            actualAp: 2700,
            actualDps: 3000.0,
            magnification: "150%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 82500,
            actualAp: 2700,
            actualDps: 3000.0,
            magnification: "150%",
            count: "1",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 98000,
            actualAp: 5567,
            actualDps: 10438.12,
            magnification: "100%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 98000,
            actualAp: 5567,
            actualDps: 10438.12,
            magnification: "100%",
            count: "1",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 17,
      stageName: "かすかな秋の気配",
      baseHp: 300000,
      width: 4000,
      enemyLimit: 15,
      requiredCost: 180,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "70",
          amount: "2",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "30",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "100%",
            count: "10",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "100%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1800,
            actualDps: 2347.8,
            magnification: "1200%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1800,
            actualDps: 2347.8,
            magnification: "1200%",
            count: "1",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1800,
            actualDps: 2347.8,
            magnification: "1200%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1800,
            actualDps: 2347.8,
            magnification: "1200%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "038",
          enemyName: "イノシャシ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 400000,
            ap: 4837,
            dps: 13191.82,
            speed: 14,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2100,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 7255,
            actualDps: 19787.73,
            magnification: "150%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 180000,
            actualAp: 6000,
            actualDps: 11250.0,
            magnification: "1200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 18,
      stageName: "この夏最後の花火",
      baseHp: 360000,
      width: 3800,
      enemyLimit: 10,
      requiredCost: 190,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "55",
          amount: "2",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "45",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "262",
          enemyName: "やぐらわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAHBgURDAkRDAkUDAYSDgcbDQscFxQnFxIkGhMpHRg7GhMmIx8vIBkrIhwsJiMzJBpFKh48MipBMyQ/PDRROCdDQkFGQjxTSjdYSDtxQyxUTkupLydiXVWVSjJpYlN3X0q4RCzLRjLlPC5wbWyvWkN4cWaFb07oRzqLclKIdViAfXybfV7baE2ni1+Qj4+akYLtd223mGeenZysqanoonO0srHGxMH5xWf2v7nY19P+34Tp5uX58uv///9vMCoTAAAAQHRSTlMAsEck/NcRZDNz7VOGG7+vn/9q3PI4/4NMZO/+2P53/6L97v3//v/n0//5wv7+//391P/4//v///////7/////+3nS8gAAA95JREFUWIXVl2t3sjgQxy0qIl4RxQtYyIpFESQsiYlGwvf/VjvYnmdfbFujvtpRTkIO8+M/kyuNxq+mL5eD35/43X0WZEWw0J91XwRFVsD/8JSKwfJQFMjJChdlRf5uPOhuvOdFhhx7hOKR7bhpkQcz9Ugg9LxI3el02jFWSNPs6dSNC+Vk1KEXseNMu51usxllM73X7dmOg9SSoUPooH06Ho2bcNuMilnd2h/2p7dI3u8BBofYndruStNver8AgGjaCNrj6K4Eo9PvdbMYALUZUdb7rDW9Ymz0u0q9Mdml8e5ws138by2NJireYPPsB5srAjTTarUsuNpm68vqO8vsKAJ0D1n+sXBbb20rO/rg6x6LuIV2qkNJ36Xu+Xw9W2/tQp7PqGWdztermz4CQNervDpv7ZO8XrOWc75KiV4BXB8GOCD6BCGk1/PJbVkFBOQ8BGhZrmtBElur1bTuBBc5rfgRQL9Tm2YYWnc8NB3HdSwT7ZrqAK2hNwbwQn2eUxZ/3Ayt5ooS9F3cWwSLA0yjHhWcEf/LtopDUfe2nhd5eL4IPC4E57Wza7k+OiguKTuEyTZJEpQkogbEvu9YFhDwTFFBkjCMGfEOtFYg0hrgAICqAYwIM4qZZF5+A9QKIATH9xM1wHiFhaClwAnFdQgC3ZLg+yhX68j3hArKhGD0PQAAYzAOgOA4iWISZxETZUkEfx8soBt5YlmOCyPTiZZK/pBEXlWSchY0GssIg/+nmR3lgUQozXOM6zVcM6em1R6ZpmnZqnOh6SHb64/gmkwmfbM9soZ9czi0bNW50FtvNuE3v79Ud9jOOvzW/leA0+Vy2YfhEYpTGO5Pn0WhNpBrwAXGwTEM/66q6gKeJRT7/Z4ungPsbwDgKAO63ymAgr0EgBCeBXyGsH9ZAQAUJ+OPIXBVQP+HEJ4FvKzgTw743TPeryHsnwa8rCB8VcGfXri8quABgJDf5UARoDfGPmPyBiiFZJvNpgbAokoDFYIRLPI4JbwEwAfGhPlZKipJ4jXBWGFvHASRtwVLWA1Ikm2y3SIqRbJF0IoOd1c1AMCbYFvmADgSRkiCMS4lxQTaSXR/WZxxWQouCShYf8AeWTLBiJSsrCTnZXT3m8eYQ8CiPhtsQv9DVGWdRwK7fSXr5ujumrLYCcnhSco2YZqUUJeiPu2QSvCyZCS/G0EOCjjhnB7DDQbdjDIGOz2pZEkZv//RpS9vZwPBsb9e+7KqX0whpxjGFOciv7/DD/ISDkgEr+ojMmEcFGCoruC0ReHUoLA5zVer0Wg46mqa1h3Zo6HtBT1N69j2eGzbk/8o+AcF7vxDHx8aNQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 100,
            dps: 11.95,
            speed: 0,
            range: 1800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1600,
            freq: 251,
            foreswing: 52,
            backswing: 27,
            tba: 100
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 150,
            actualDps: 17.93,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
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
            delay: "8.3-10.0s",
            delayFrames: "250-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            spawnTime: "8.3s",
            spawnTimeFrames: "250f",
            delay: "8.3-10.0s",
            delayFrames: "250-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "3",
            spawnTime: "45.0s",
            spawnTimeFrames: "1,350f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "0",
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 180000,
            actualAp: 3745,
            actualDps: 4885.44,
            magnification: "150%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 180000,
            actualAp: 3745,
            actualDps: 4885.44,
            magnification: "150%",
            count: "1",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 180000,
            actualAp: 3745,
            actualDps: 4885.44,
            magnification: "150%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 180000,
            actualAp: 3745,
            actualDps: 4885.44,
            magnification: "150%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 180000,
            actualAp: 3745,
            actualDps: 4885.44,
            magnification: "150%",
            count: "1",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "263",
          enemyName: "ぼったくラッコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEBAQEDAwMEBAQHBwcHBwcHBwcICAgKCgoKCgoNDQ0NDQ0ODg4PDw8TExMUFBQVFRUaGhodHR0iIiIiIiIlJSUnJycsLCwzMzM0NDQ2NjY/Pz8/Pz9AQEBERERISEhNTU1QUFBQUFBRUVFTU1NZWVldXV1hYWFlZWVnZ2dycnJ3d3d7e3t+fn6BgYGJiYmSkpKUlJSfn5+pqamwsLC7u7vDw8PMzMzS0tLY2Njh4eHo6Ojv7+/4+Pj///8xM4CvAAAAQHRSTlMAC+rAFR4oXJgzdEpm+D/Jf6ZSld/+tdBv68L8BNX+qv+W3f/vev7A0/7j/9at/+3+3v///v/+////////////RSkFQQAABdBJREFUWIWdV4t24jgMbWZ4NEB50wJZQgrU1LhjvH4msZ3+/1+tAmR2dwYybXV6OPTk6Ea6kq7E3V2NBc1+q+75DeuPw2ajEdw1+i/7t/nn/YPh4e8fP577d+NX7fTLFyIYH52zcn4XvrlCfSGCu+bavL+nL0HwnPpj9wsAEHv+bvft8USm68ZXAILem87o7rjAh04YNr+C0H1EGKXbhB7e3tbz8ecxgt5BYYZlmuW5kn+vw+CzCHPp+XK5I5hnqbFiD1X9XATrrGCT+8EiipMYiTTX++6n6CwB+IJIbYxRHCOixdv6M0E0JtxmRBfFO1jhNMUs1euPcxn0VohaIdz7xXxKiTx8uKmCzsZomhvKfyIUjmGx/uBoBu2NKThmygjliwpBcXucNz9SzqC7guQpEwRoYMoBRlG4lArLVuuPZBEuJbxWY0ml05oSJoTghDJjCXn9QCUaE+ZL2jgRRBufQSRYcpo6K/BiWJ9CEDSb0MT2lHTGM80INzp3qfM2zwzTm9oMmt3OZNDpr0xFG1CfcYKpMlIoDjn4Y6cmgqA3jeJ4NOEV75fyWaO0UkpbSEyO6vq5NYpQMt3l79esSMvE0mVtJ/QHcTL7fwBgzp8+RQoP7Ka2Cs37hyjKfvG35FSUIncQhakFCIbT2QNyvwCkMa66MUtQbRnCQRTNSG6t8/9Jw5u8+i8ntA6gMXyYzWYR2m4REZm/RqTL6lJoTKIYEJLtFv4Q1f7SDKfPIs8txGWWdZLQncazaBYn4F9inEa5gDHKc5BFFMU0c7y2lZuj2SyeIUIwKkFi7mymJWeUK2Uo8Kv4oo7DZucpmiWx8d5bIxlOEiqkUpzAPFifo60W6HvvZiMF3dEi2c7iWFyytizGubcwikSo3HBgNpl22u1bJITfoy2KH6IEu4pyEmdGK8mFZjgC9+Tbfdhs3hqGoA19PP0228Y/h1FEWhIBaaRWRJRuo/tWHYVBfzToDIAEVvWN2Qon8RZj4AJBfRftGvcTi2FriaJkW02DRawoLKyEJI6gPmL3Zz1sLiVKYnLpwoLCN6cFF0pJwWlcpyYVgJFJEvMLgkGwHUBL4eCxeZrK1+GfVlPj0XgOAetzB3uKiLLeZsZozbjJj89/2CyNiQQ1TmZVKVPoZ5cbLeFOkFQ4L/+AEHSgBF5uK1kqBDYpvJ6L3LvcFgUg1C/59gHSLzKayDOCI7AaDFwpzp80ovDHcS2T/c0peC/RBSFFzJTe3l9EJq1fsFCGc+wKC39OAumzvz3zAiHUkjARlx7Q+FzMHMmzf3pWtkLWb7f2oZolg0+K4gkyzjsHXJ6eFOXpGZSn+HVrLX/OkkwovNTBMGjvc7iVsrO8r5vBeL2e3+ipYHj8OUsgTUKSGGj0PjsBAJOF3bf6r5Ien28ghKtqlgzPaBxHmNhzBiY/1cLuw4ngCTveOOMbE1GtEQGTiDClealxFYATq9ECFAbz9Q0Wuht7mWZuUzgQGIMlcQKwJYBOItj3HGPyegOgCqHw1GRGUQKiav8F4HECSq0QwYcbABBCfhkEnhtJSjP/Aogokpposr0GELRKCyfHsx5kxKSnCIh2VRUcf5wmsCoURsvf/XvLDdjqaXFJQsB5ywGBphcWc6vXvcNuuV6+HTfD3wBaj1QqnWcwvecQciJSyRiDaQBVMFow/trtv+H7VrM//v14b0x2XMFdV/IHHatS2Kggh1Kekoc1Zxg7zAMAmF5f0a2NgVsuPRfR7p5KWXKCCm2yyzyKw7ABvwnJ7noPtZ6YkFJlRdnwx1H3kQGWV1BF2Cygqvq47DXKXsfs+TrASpfbGM5rpzaTEBbNQbvCwqGICcWv+3UnbITd9lIg/uOvqwBLJrg0aSrQ9B62aLszmmIJp4FgDD/2WzDB8/1hRzmSVyPoDwexSss9+vDwrbKHhxhzncpocN9rwu8gqQRbrPa9qwF0O4+bzdPg+682eNpsHjvtPuQ/fnl5mXfD/+/YfwDIRHxQEvYXjgAAAABJRU5ErkJggg==",
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
            actualHp: 180000,
            actualAp: 3745,
            actualDps: 4885.44,
            magnification: "150%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "53.3-66.7s",
            delayFrames: "1,600-2,000f",
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
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 160000,
            actualAp: 9994,
            actualDps: 18738.76,
            magnification: "200%",
            count: "3",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 19,
      stageName: "終わらない宿題",
      baseHp: 450000,
      width: 5000,
      enemyLimit: 20,
      requiredCost: 200,
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
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "40",
          amount: "2",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "203",
          treasureName: "伝説の虫取り網",
          probability: "60",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "103",
          enemyName: "ゴーストわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAwMEBAQEBAQEBAQFBQUGBgYGBgYHBwcHBwcHBwcJCgoMDxANDxATFhgUHSEWHSAeHyAcISMdJCYlLTErMDIqPkQ7Ozs1QUUxUloyUltQUFBRUVFRUVE8YW1fX19kZGRFcX5qampxcXFPg5B2dnaBgYFZlaSNjY1fn7BqssSfn59ywNOwsLB7zeK4uLjDw8PPz8/c3Nzk5OTq6urx8fH39/f////aM97rAAAAQHRSTlMAAwoQ0+UZIZ0tN4CqiUK+THKTWGFre6O/jJqxqsW4pMzBzMCxzMnKuMvMvcvKzMzMzMzLzMzMzMzMzMzMzMzMtX5w5wAABFtJREFUWIXtVtmWqkgQFOiBhlYEWRQUBBdoEJB9k+X//2oKXFsY8Z6exxvHBz2aYWRGRlGj0Z8CJeA/rnkEzE3QXxHg8yUB/aIeYlSN/U0PEKNZwm96gCjVkzmsXwP8jjR8fvRUkcV65gCRFDI8HoSTvPCo8j1tQMyYH/AYQglmtjjGsb8ier4lxtKKezkgfLJUNSuM42MvAcosDfWlRwyQH8dNPYt0yylelC2NfkVALi2/IdC+ukIxXtY28orGX80RYRdKw2CMqeefgQ3zNZHBe32A0IssmFkYTQ+hNseffgOzgEAge/VDOH8ZGTa3Yt8yLD80uL4W1NXzgkANI/q1oM89k2robzbGZuP7QudvEIKWLfWnCJhgELC9ciAzLTFjxNbG87yNFa67QjFW9kNrRd40QCi7AtnFxKBw+NY2Rgs1y1OMjeV3CBBKUD0wn3vWIIw/JAcW4Q5Fna3boRGyrx19RdF8S3yuZ2Wr3RF/dZ0vytt5FfDkOq3r0uGa1hBOVYzQ9/zjgn0iIFZeHB4Nww9V8tI/e8jrOl2JQVXXjYSmNZQbLwzLUOfs8yaxRuxrYL5GrFHnBnDRiaIokMwTqK9Lu5UwgnGGZVkG7/jNGaGmeb6lhUZLgJCCtNf3iqSkdYt0fTkKoQYdC4ACa3PcGJrWtgBh9FJ3HVNXJCc/E+Qm9zLqlAysURTF80SsXR1FN2030PWoaDs4pc76eXt/ABOlY+xZnt/kGeG2bpRmeRboUVYUp9MpDVzn0AnQI2B2ajQpMcAaQNTOTSLXNveKYl6hm1vm5YGHTSTjeNQE4BY6kZQ96MBxXTeITDtK0yRxFOk1AYRxs7nIgTBBpBxl+akoq6quqirRXWBkbpv6awLQBYq1uYdpp6xvKMvMAU5mbnoYIjgLgUeoGN3rMzuqSrCKVWoOtHBRQVEwvkpv9VWw0M9yImn6DgE6m6C4nD0ocCIwiWaR3AEXziBWa5zc5TcB7auuyiIJgi2Hdc7yzgSo7wNFbdv4FFlWXLY4iZy9bUrLNTfEADFOJFC74jw+3S1P4G1V5Lm7D9y9m+ywIQLWyb+5lqAqsyQtgss4ToHjBEXlvkFQBvPtOT+Bm+Tm1ZCqBGYWh0EC6lCm0v5MkOVlYdtRckewHiIY4busMPfFg4v7a550SfyPB88jEP6QR/qdoC4jHQS6QSTi6BuLgPHf9iNBnZiXT5EwuAUtUFLYPhJEdnklePN2BxG7HwRmdmoRvKkArPMjQeEo+hn7JfWmBPyeBUAQ3Xx0X5+qd6DgYdqHdNdzseoDTMnAdd3Uv1uAd2bz+t4NRukKhDfdhWSKJNGAllxlqpszEn+3HmTyYPPCloPbpxgqbAVmvX35UHgmwAUBp2bXZyFBEwhDD6bgBwOKQvD1ZgbOWWgEv3GL/ou/+J8BAgA/o/9u11uNkQz9NZl9fo6v+PycTb5olureLnsJCHo2nk4/Pj7+ueHjYzodf34xfXn+F0VuzkA1nN3jAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 180,
            ap: 16,
            dps: 10.67,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 45,
            foreswing: 6,
            backswing: 13,
            tba: 20
          },
          stageStats: {
            actualHp: 3600,
            actualAp: 320,
            actualDps: 213.4,
            magnification: "2000%",
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
          enemyId: "104",
          enemyName: "ゴーストにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMEBAQFBQUFBQUGBgYHBwgHBwcICAgJCQkLCwsNDxAOEBISExUcHBwZHiEaJSofJyskJykuLi4pMjQqNTowQkg1RUouSlMuS1RERERGRkZUVFRVVVU9ZG8/Y2xnZ2dId4NtbW1xdHV4eHhSiJaEhIRgoLCVlZWXl5dstMakpKRzwdSxsbG2trZ7zeK3t7fBwcHOzs7T09Pc3Nzo6Oju7u7x8fH39/f+/v47lvleAAAAQHRSTlMABAkRGcYhKDkwlbVMpUNiWHxwhDeTtKPKjfGruNnCzMuvssrK4r3Ky/DMzMrMuM3MzMzM5czMzMzizMzXzMzMWEoGMQAABDxJREFUWIXtl1t7okgQhqUhAkpshEEwEFGbAOEwnMaGgYD//19tocZNNujqzs1epG5AH/rt6qqvv4bR6J5AInfX8/8MRpiP/wjAqgsJ/QlAMD1T5pj/DphZeWyp4v0E5jRE1MNd6ml31wFJ+Fh8hBfxLjaFuwHKFPe1Q8LcimNLubuVSFlvoPpI0r00tfD9UmDVIDNnDKeFu128mF1pJMOPhyrMaVGVaCKreuku93Q8+NAxV6wKA/yxnjVNpHKCZgEiXqn8JQIjT3VF/ILgF+V+X7syyyvQBUhC4y+lMFYXK134yGcQy80s2nX7coMV08t3QHCUCwlwAl6EjvJ3CoiXlOVSX9N2v+8yw47zNAVEag6OZyXNXNmOKb8DkKjoFvH9NaENpPD75SX1bNuJd7k1OL9khp6lKQL7no/8aKxJEEVrkmRFWf96fXp2wtCxQQxDAKR46WrOn/Pn1S0MjoLAN4w1BHl+enqOHduz01gfBMhW6CyU9xYx2CCE+EEQJb6xjpIkS16fXlLbsL3cGy4iK6nmaqVJxyX08qNV03ZdTR6MpO32b79fX/I4jPNQFwcB/aoXcXjaLGOz2h+DGg8PpIGbt18vYZ6nnnnBlhhO0px8l64OW09wmxOgJoaRdHDTvb0alqXPh9TajxdUK+x1EveOwczcdv9OKIoTrNAlgWcvCJnX+r2SpiAT8TMA5j5dyyU7PLgPGdKHLoHaVjP4KW7r99FNu2/qrqcU8ysAJdyFdhg7Tu5Io74LWXfMP/OjOiBVnVRthK+YgRLGdhjG3gnAzLZ9G9rIAD34hCTROqo21+wQe44TG6C01Do8xip9H7oqCai/LqK1nxFybQVg+rB8x3ZSTz263ngZ9cXv2q4q2yooazK56AN9cBMD9lmag20f+8Twilt1py50TZN8doovAXYEfdjF1nk7j1h5k9UHCbVN6S7/7Uhi8XTlOCb+sE527tOqa4skcpfyZS89Py5gBX/SKcipbrsmMtTZ+KZjGSF0vLAsOszHb+p9W1Fyrf9fguGxqql41p/j3JLC+CLS7jiOGEF3wUaibX9GICWqaVEk5gUHGApeC4qCVm3l6xICPZYAyFbSzS8FCJMMAM2+KwN4HeE3BQAKIt8MgIOQ0hK635ZFZM0lk5aAuKOKwqaqG4gWikepb5KqKSl1bwdIYCRd6W5dCpSuKUHMTV0FNwMY2W0busGCbGYgoboGXEVL96YijkFtrAp9Iwo7QjOz6BdRNg0tsqtGcJ4cT7AgQQmOXUfSJoH6Q0Ghmje9mTHSgmy3GUj/qDuEragn1A3dyjeVgFNJVoF9bE8HB4tNN0qyqgrU25TMiKrp/vy5PW9oJGLN3Gw386tO9JHAicKPH+IHQ0AcL4r8NSf8ju/4jv9j9B8XHDfugz/E4XYM/7G3eTI7w/PJ5HE6fTjHdDp9nKiKfPErafQXkwiiZQZdznEAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 200,
            ap: 30,
            dps: 23.08,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 60,
            freq: 39,
            foreswing: 10,
            backswing: 6,
            tba: 15
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 600,
            actualDps: 461.6,
            magnification: "2000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "105",
          enemyName: "ゴーストメェメェ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 58.82,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 300,
            freq: 51,
            foreswing: 12,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1176.4,
            magnification: "2000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "284",
          enemyName: "ゾンビワン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3600,
            actualDps: 2297.88,
            magnification: "200%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "287",
          enemyName: "トンシー",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 48000,
            ap: 3600,
            dps: 2037.74,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 300,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 96000,
            actualAp: 7200,
            actualDps: 4075.48,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "burrow": {
                times: 1,
                distance: 750
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "285",
          enemyName: "にょろろん",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 16000,
            ap: 2000,
            dps: 1621.62,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 60,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 32000,
            actualAp: 4000,
            actualDps: 3243.24,
            magnification: "200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1500
            },
            "revive": {
                times: 1,
                duration_f: 180,
                duration_s: 6.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "284",
          enemyName: "ゾンビワン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3600,
            actualDps: 2297.88,
            magnification: "200%",
            count: "7",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
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
            actualHp: 400000,
            actualAp: 4800,
            actualDps: 7578.96,
            magnification: "800%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "103",
          enemyName: "ゴーストわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAwMEBAQEBAQEBAQFBQUGBgYGBgYHBwcHBwcHBwcJCgoMDxANDxATFhgUHSEWHSAeHyAcISMdJCYlLTErMDIqPkQ7Ozs1QUUxUloyUltQUFBRUVFRUVE8YW1fX19kZGRFcX5qampxcXFPg5B2dnaBgYFZlaSNjY1fn7BqssSfn59ywNOwsLB7zeK4uLjDw8PPz8/c3Nzk5OTq6urx8fH39/f////aM97rAAAAQHRSTlMAAwoQ0+UZIZ0tN4CqiUK+THKTWGFre6O/jJqxqsW4pMzBzMCxzMnKuMvMvcvKzMzMzMzLzMzMzMzMzMzMzMzMtX5w5wAABFtJREFUWIXtVtmWqkgQFOiBhlYEWRQUBBdoEJB9k+X//2oKXFsY8Z6exxvHBz2aYWRGRlGj0Z8CJeA/rnkEzE3QXxHg8yUB/aIeYlSN/U0PEKNZwm96gCjVkzmsXwP8jjR8fvRUkcV65gCRFDI8HoSTvPCo8j1tQMyYH/AYQglmtjjGsb8ier4lxtKKezkgfLJUNSuM42MvAcosDfWlRwyQH8dNPYt0yylelC2NfkVALi2/IdC+ukIxXtY28orGX80RYRdKw2CMqeefgQ3zNZHBe32A0IssmFkYTQ+hNseffgOzgEAge/VDOH8ZGTa3Yt8yLD80uL4W1NXzgkANI/q1oM89k2robzbGZuP7QudvEIKWLfWnCJhgELC9ciAzLTFjxNbG87yNFa67QjFW9kNrRd40QCi7AtnFxKBw+NY2Rgs1y1OMjeV3CBBKUD0wn3vWIIw/JAcW4Q5Fna3boRGyrx19RdF8S3yuZ2Wr3RF/dZ0vytt5FfDkOq3r0uGa1hBOVYzQ9/zjgn0iIFZeHB4Nww9V8tI/e8jrOl2JQVXXjYSmNZQbLwzLUOfs8yaxRuxrYL5GrFHnBnDRiaIokMwTqK9Lu5UwgnGGZVkG7/jNGaGmeb6lhUZLgJCCtNf3iqSkdYt0fTkKoQYdC4ACa3PcGJrWtgBh9FJ3HVNXJCc/E+Qm9zLqlAysURTF80SsXR1FN2030PWoaDs4pc76eXt/ABOlY+xZnt/kGeG2bpRmeRboUVYUp9MpDVzn0AnQI2B2ajQpMcAaQNTOTSLXNveKYl6hm1vm5YGHTSTjeNQE4BY6kZQ96MBxXTeITDtK0yRxFOk1AYRxs7nIgTBBpBxl+akoq6quqirRXWBkbpv6awLQBYq1uYdpp6xvKMvMAU5mbnoYIjgLgUeoGN3rMzuqSrCKVWoOtHBRQVEwvkpv9VWw0M9yImn6DgE6m6C4nD0ocCIwiWaR3AEXziBWa5zc5TcB7auuyiIJgi2Hdc7yzgSo7wNFbdv4FFlWXLY4iZy9bUrLNTfEADFOJFC74jw+3S1P4G1V5Lm7D9y9m+ywIQLWyb+5lqAqsyQtgss4ToHjBEXlvkFQBvPtOT+Bm+Tm1ZCqBGYWh0EC6lCm0v5MkOVlYdtRckewHiIY4busMPfFg4v7a550SfyPB88jEP6QR/qdoC4jHQS6QSTi6BuLgPHf9iNBnZiXT5EwuAUtUFLYPhJEdnklePN2BxG7HwRmdmoRvKkArPMjQeEo+hn7JfWmBPyeBUAQ3Xx0X5+qd6DgYdqHdNdzseoDTMnAdd3Uv1uAd2bz+t4NRukKhDfdhWSKJNGAllxlqpszEn+3HmTyYPPCloPbpxgqbAVmvX35UHgmwAUBp2bXZyFBEwhDD6bgBwOKQvD1ZgbOWWgEv3GL/ou/+J8BAgA/o/9u11uNkQz9NZl9fo6v+PycTb5olureLnsJCHo2nk4/Pj7+ueHjYzodf34xfXn+F0VuzkA1nN3jAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 180,
            ap: 16,
            dps: 10.67,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 45,
            foreswing: 6,
            backswing: 13,
            tba: 20
          },
          stageStats: {
            actualHp: 180,
            actualAp: 16,
            actualDps: 10.67,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e24019Data;

