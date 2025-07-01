// Stage 2009 Data
import type { StageData } from '../../app/stage/types';

export const e2009Data: StageData = {
  eventId: 2009,
  eventName: "ドラゴンリーグ",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 9,
  stages: [
    {
      stageId: 0,
      stageName: "20対20",
      baseHp: 10000,
      width: 4200,
      enemyLimit: 6,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1115",
          treasureName: "ドラリー剣士(156)",
          probability: "1",
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
            count: "10",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            count: "10",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
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
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "20.0-22.0s",
            delayFrames: "600-660f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            count: "0",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "122",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAANAgEfBAErBQNCCANcCwVyDQeEDweVEQirEwq7FQreGAz0Gw3Lvw2UAAAAQHRSTlMAAQMHDBATFxwgJCktMzc7P0hQV11haHF2e3+DiI6Um6SqsLi9wsjO09fb3+Tp7O/4/P/0////////////////cn1owwAAA9tJREFUWIWdV9l2okAUpLtZVVBAQFEQlU32BtwSM/P/fzWtJEZz5hzp9INP3rLuVrdkmO/HSSLPcyzLIgQBAAz1m3grZ7mYz2emaeiqCKkBZL+6vaYs8yx2R9QInF3W369wRNos4Dh6AKgzi6OlILjVAwCOdZaWgpY8UqgCFVEiSF71hLCRKQuJzOwRoG5WA7pCgtEWPyHkNk+HwM6KJwCcmHStAOPomQKOKFshOE9lJIX0J1StgNruGaBuvNtM914u0S2fk6hLVwIMHAx7EoGyvUmaJ4xsLgDRWas9iwHYoWZv0wceeGfw06RZD3smwQDIDbWFnzR3hNDcVOWS7wvQYQw0J8iqjkeVlThQKLebYMiGE+SfGKXN00sUgLxsuITHrZLahHKsOwwkyGaIr1mkkUVThe8HlQDjknQWhxP0Cw4MNy/xbrkheRSeTq1yV6UMyU6KRoqbqgnGtJUEvKTHpSuAkZ9t0rpcUJYBiMZENJwxJHvuq26TUGo94C13QBqBGDTNVrK7Mwd0Mov0wELXeYD8Infmyab3OnwSGK5jFQI00q1lVPpxaVMeCqinkQwFg+xmhXGD0yllD7hFEw75WfK12aUr0gGIqyrRtAeZTad0NRRWVbPe3GWBLIRHR4G1m7p5iK/r3QRS6CsD1fiHROc6yYHr30zBaX4AGIgcn3lvADJ/XWDbfgo0YcDOvFdxoPNoALBW3oWfjh1CPIZwsnVfxQuyIiKIJNUMuhYeLm/7PYGoViI7Xkf6CwBpGQSupk69OOsOZXv+OB7fj22bmYrlF6sXvYRaSi7ibpfdz+zpct6/fRzP5zKM8ipUXww0cUoYJ+vt3fPtT2+H08f5eDm3GFfR9OVGiTN/a4qT8GuE2/ZwuFyO58uxrfKtzr2cI8ANhywgi/BFoT0c30+EwL7wjFHvbUBaVH3+/vltTz5P+zpWaXSd0720us7A5c97NwXYH/UPv915ixjPw8ffv++3ScTEs1GEA0E1FukN4M/7vsZVHtr9XSPgh/JiV1xdBmnA6dA24cpSXtf//jhz42f4cwoOuAiXE56mfpAMwYNNSm2FzhyAHzqQUUrhVYnIMc8zck3zNMd1OaO8B8gijrl09NlyPlXNGJcWLcCU3PLtGLEciwA/ywqTMgUgLdbOl0UGkpt7lH8bGMhL3L3sUNmmJAeAWJpGPn4V6XGoSYphqr8zWQzDz1N/HRdlrP/GY13pDLzm6jd7X2fECeJgOJIVZXx7ytguatykbs9aQnXhehs/jJM0y4siz9JdQmYq2TpSPwJwbHUI0Y5ApGkSR4G/8Vzb/I+e/wOc0LbXscp/EAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 150,
            ap: 75,
            dps: 173.08,
            speed: 9,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 350,
            freq: 13,
            foreswing: 4,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 150,
            actualAp: 75,
            actualDps: 173.08,
            magnification: "100%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "26.7-27.3s",
            delayFrames: "800-820f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "122",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAANAgEfBAErBQNCCANcCwVyDQeEDweVEQirEwq7FQreGAz0Gw3Lvw2UAAAAQHRSTlMAAQMHDBATFxwgJCktMzc7P0hQV11haHF2e3+DiI6Um6SqsLi9wsjO09fb3+Tp7O/4/P/0////////////////cn1owwAAA9tJREFUWIWdV9l2okAUpLtZVVBAQFEQlU32BtwSM/P/fzWtJEZz5hzp9INP3rLuVrdkmO/HSSLPcyzLIgQBAAz1m3grZ7mYz2emaeiqCKkBZL+6vaYs8yx2R9QInF3W369wRNos4Dh6AKgzi6OlILjVAwCOdZaWgpY8UqgCFVEiSF71hLCRKQuJzOwRoG5WA7pCgtEWPyHkNk+HwM6KJwCcmHStAOPomQKOKFshOE9lJIX0J1StgNruGaBuvNtM914u0S2fk6hLVwIMHAx7EoGyvUmaJ4xsLgDRWas9iwHYoWZv0wceeGfw06RZD3smwQDIDbWFnzR3hNDcVOWS7wvQYQw0J8iqjkeVlThQKLebYMiGE+SfGKXN00sUgLxsuITHrZLahHKsOwwkyGaIr1mkkUVThe8HlQDjknQWhxP0Cw4MNy/xbrkheRSeTq1yV6UMyU6KRoqbqgnGtJUEvKTHpSuAkZ9t0rpcUJYBiMZENJwxJHvuq26TUGo94C13QBqBGDTNVrK7Mwd0Mov0wELXeYD8Infmyab3OnwSGK5jFQI00q1lVPpxaVMeCqinkQwFg+xmhXGD0yllD7hFEw75WfK12aUr0gGIqyrRtAeZTad0NRRWVbPe3GWBLIRHR4G1m7p5iK/r3QRS6CsD1fiHROc6yYHr30zBaX4AGIgcn3lvADJ/XWDbfgo0YcDOvFdxoPNoALBW3oWfjh1CPIZwsnVfxQuyIiKIJNUMuhYeLm/7PYGoViI7Xkf6CwBpGQSupk69OOsOZXv+OB7fj22bmYrlF6sXvYRaSi7ibpfdz+zpct6/fRzP5zKM8ipUXww0cUoYJ+vt3fPtT2+H08f5eDm3GFfR9OVGiTN/a4qT8GuE2/ZwuFyO58uxrfKtzr2cI8ANhywgi/BFoT0c30+EwL7wjFHvbUBaVH3+/vltTz5P+zpWaXSd0720us7A5c97NwXYH/UPv915ixjPw8ffv++3ScTEs1GEA0E1FukN4M/7vsZVHtr9XSPgh/JiV1xdBmnA6dA24cpSXtf//jhz42f4cwoOuAiXE56mfpAMwYNNSm2FzhyAHzqQUUrhVYnIMc8zck3zNMd1OaO8B8gijrl09NlyPlXNGJcWLcCU3PLtGLEciwA/ywqTMgUgLdbOl0UGkpt7lH8bGMhL3L3sUNmmJAeAWJpGPn4V6XGoSYphqr8zWQzDz1N/HRdlrP/GY13pDLzm6jd7X2fECeJgOJIVZXx7ytguatykbs9aQnXhehs/jJM0y4siz9JdQmYq2TpSPwJwbHUI0Y5ApGkSR4G/8Vzb/I+e/wOc0LbXscp/EAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 150,
            ap: 75,
            dps: 173.08,
            speed: 9,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 350,
            freq: 13,
            foreswing: 4,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 150,
            actualAp: 75,
            actualDps: 173.08,
            magnification: "100%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "90%",
            isBoss: false
          }
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
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "90%",
            isBoss: true
          }
        },
        {
          enemyId: "122",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAANAgEfBAErBQNCCANcCwVyDQeEDweVEQirEwq7FQreGAz0Gw3Lvw2UAAAAQHRSTlMAAQMHDBATFxwgJCktMzc7P0hQV11haHF2e3+DiI6Um6SqsLi9wsjO09fb3+Tp7O/4/P/0////////////////cn1owwAAA9tJREFUWIWdV9l2okAUpLtZVVBAQFEQlU32BtwSM/P/fzWtJEZz5hzp9INP3rLuVrdkmO/HSSLPcyzLIgQBAAz1m3grZ7mYz2emaeiqCKkBZL+6vaYs8yx2R9QInF3W369wRNos4Dh6AKgzi6OlILjVAwCOdZaWgpY8UqgCFVEiSF71hLCRKQuJzOwRoG5WA7pCgtEWPyHkNk+HwM6KJwCcmHStAOPomQKOKFshOE9lJIX0J1StgNruGaBuvNtM914u0S2fk6hLVwIMHAx7EoGyvUmaJ4xsLgDRWas9iwHYoWZv0wceeGfw06RZD3smwQDIDbWFnzR3hNDcVOWS7wvQYQw0J8iqjkeVlThQKLebYMiGE+SfGKXN00sUgLxsuITHrZLahHKsOwwkyGaIr1mkkUVThe8HlQDjknQWhxP0Cw4MNy/xbrkheRSeTq1yV6UMyU6KRoqbqgnGtJUEvKTHpSuAkZ9t0rpcUJYBiMZENJwxJHvuq26TUGo94C13QBqBGDTNVrK7Mwd0Mov0wELXeYD8Infmyab3OnwSGK5jFQI00q1lVPpxaVMeCqinkQwFg+xmhXGD0yllD7hFEw75WfK12aUr0gGIqyrRtAeZTad0NRRWVbPe3GWBLIRHR4G1m7p5iK/r3QRS6CsD1fiHROc6yYHr30zBaX4AGIgcn3lvADJ/XWDbfgo0YcDOvFdxoPNoALBW3oWfjh1CPIZwsnVfxQuyIiKIJNUMuhYeLm/7PYGoViI7Xkf6CwBpGQSupk69OOsOZXv+OB7fj22bmYrlF6sXvYRaSi7ibpfdz+zpct6/fRzP5zKM8ipUXww0cUoYJ+vt3fPtT2+H08f5eDm3GFfR9OVGiTN/a4qT8GuE2/ZwuFyO58uxrfKtzr2cI8ANhywgi/BFoT0c30+EwL7wjFHvbUBaVH3+/vltTz5P+zpWaXSd0720us7A5c97NwXYH/UPv915ixjPw8ffv++3ScTEs1GEA0E1FukN4M/7vsZVHtr9XSPgh/JiV1xdBmnA6dA24cpSXtf//jhz42f4cwoOuAiXE56mfpAMwYNNSm2FzhyAHzqQUUrhVYnIMc8zck3zNMd1OaO8B8gijrl09NlyPlXNGJcWLcCU3PLtGLEciwA/ywqTMgUgLdbOl0UGkpt7lH8bGMhL3L3sUNmmJAeAWJpGPn4V6XGoSYphqr8zWQzDz1N/HRdlrP/GY13pDLzm6jd7X2fECeJgOJIVZXx7ytguatykbs9aQnXhehs/jJM0y4siz9JdQmYq2TpSPwJwbHUI0Y5ApGkSR4G/8Vzb/I+e/wOc0LbXscp/EAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 150,
            ap: 75,
            dps: 173.08,
            speed: 9,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 350,
            freq: 13,
            foreswing: 4,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 150,
            actualAp: 75,
            actualDps: 173.08,
            magnification: "100%",
            count: "1",
            spawnTime: "0.7s",
            spawnTimeFrames: "20f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "90%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "キャットバトル",
      baseHp: 30000,
      width: 3600,
      enemyLimit: 10,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1115",
          treasureName: "ドラリー剣士(156)",
          probability: "3",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQFBQUGBgYGBgYGBgYGBgYHBwcJCQkJCQkODg4TExMWFhYWFhYaGhobGxsiIiIrKystLS0xMTE4ODg4ODhAQEBDQ0NLS0tMTExUVFRcXFxlZWVycnKAgICOjo6bm5unp6ezs7O/v7/ExMTKysrS0tLc3Nzi4uLo6Oju7u709PT7+/v///9zib0wAAAAQHRSTlMABgwSGiQ4LEFK0VVf8W14gMPekbmIl6Cxqej71su+4fX+6dn/9uv/9P//9P/8///9////////////////////kGjFlQAABYtJREFUWIWVV4mWojoQbRAFGhrcQVBbBGVfAig7/v9fvcJxQcUZ39WjJFA3taVSfH39AzhBtAaDAfH+0U70aJ7Br+IkMxdo7P+Ig8hiPO9fuKiZuv/l8b+LPC5PTVa73ZpqFsUIVtwjZMx6/0OeEbdeFKgcLIr1+ZWB0siYfe4Egl3vw7SI7DnIEPzSivIyNib9j9dn10aYV3XiiiTWY0d2VNZVbMz7H3oRZxr5+nTK/DXVoxZGWJ7q6mgL5GcE2EDYhwXIn0q0YkleDbL6VNeJtRh8RkAM1aBZ/3SqI3VIL+xDM6gT50MCnJru0OHY4ID24mzpROfrUJ+yHzgB65H8WNGu2Ei/m+tIkUY8+a9cwklOWG506woX4FyvPVtd0H9PJpyer7ZeGB8uOCaA4+26MelvDFifFbcWSqqzBztQ5+FeeO9JjOBGOz8u3ok3yCC73yY0pNwOZW+X/6NDYr8NJkaJO5T/VRxQ+CummwAj59sgfZWvH6dKpLLdBLDnvKR6Fa8+JMAG013UYX8ZJ+V9tirydwQE9+unHTZnvhteHFOfqjgIg26CxoNxVwAKZFpX15Sxo6M3BD3u1+lSABhCx/STxpX10dX84xsCcrJFxYtw/Wddz0KNd+vI8ZO8mwAsMA6vITiVaVrW5TGMz/cy2A9H/5kAw2GMMSs3e1UfFvfi4lQX5R/CApTRl48EGElDlcAhBh0WJJ6iuC3XZL4iy08E5FCA84sYboPyleDgyLKZ3MfpKwFGj7554qs/24UvLjjVGTLNoGVaHrmu+UhA8JIEB2B/YnRlQZVFUXqdbwKZHw9PThwIcAAOMFLoJIDToDVbJnEUxx4UhN6dgl57vsr0aNGIryZ0KFLmWZankatpuqVLAsdRt7rGqCja8316etMA9l+eF0XV7OPLTHYIAxT6uqabuqbIP9vf6a0ysio6esJgINjH68pl7DpeEENQLvrX+SEKw9BSPCi2kaW4ob8V6QsBtw+zUGXJmZ1cK0cZmYqm+2ldJUn5xxFFlmVpoFsBQr5uRnni//IXAh5OwcSeU0MguLseIRRlVYLiVmjrNDA1XdMc2N1VvJ3fCcrCX/OTOwE4ocySrCqRE7YjU6VhAICqXdfHfZugivYL8W7CqTqEKIirwtMekwuYAc1joMGkRVBn7vK7pUHuW65/JkCv6X1Gjm4+4FR4qAw2P9aNAMIQZ0VVV0h3ozTN0keAP7PIXjH3RMpOdWzJ1t2EujybDltHN03LsUz4u30tB45bY8Vf2yVybkMGFYHS0qDlNU9XIKRtaMpytBK5W6PQY9Um4rHlvBJAAUlDUwviFiJvM2doirhvBiiGQVqlnnOsuzZT4urxOacvnyz4ZfGHgoJTi60fxQ1Bl7+Pln5ojzN/RX89Aoeedu/qXSYADvojQequnwm+8D4zX0mtKPyDgHomaCjYqf2xBh0EzdH+jsDU46qFxF11vjX0J3anCXWsKx5qIdDHXFeX1Z90agDJqD0n0mbKdjRJQNCVB/XB8/xHBL6x7uhxiKERdZwLdd7UhQdUOdoPX43AWeivO3z43OAAqs43F6wpy9lHSP3ze9CLDdwS9irsVuv8Y99xnoGp8w0YG+qs670DI2eSYlq6IivwsxSFxQXiWNYsR5dlxXT0zXKxELjujh2jRkYYe5vxDgXbCTW4gh4urTDypPEmiH11RlED4k2jSgp2fHSnExXaKAbHrsDJ2R6F9mK2BoI1BTc6pTH8/CCszY4MY80N7qC4lW4uOWqyd/eTPt4lj/cHNMOwgmRq0mKylOXx3QVg82IMM3NekGRJYBh60H92AUYOp9+A8Q9Akn5kWf55BExIYwlujr+/R9PhcxAwguFnk7kgLERxOmrw/Yjz3FQUF4Iwn8x45pZG/wHoT/cGi/0BoAAAAABJRU5ErkJggg==",
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
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "122",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAANAgEfBAErBQNCCANcCwVyDQeEDweVEQirEwq7FQreGAz0Gw3Lvw2UAAAAQHRSTlMAAQMHDBATFxwgJCktMzc7P0hQV11haHF2e3+DiI6Um6SqsLi9wsjO09fb3+Tp7O/4/P/0////////////////cn1owwAAA9tJREFUWIWdV9l2okAUpLtZVVBAQFEQlU32BtwSM/P/fzWtJEZz5hzp9INP3rLuVrdkmO/HSSLPcyzLIgQBAAz1m3grZ7mYz2emaeiqCKkBZL+6vaYs8yx2R9QInF3W369wRNos4Dh6AKgzi6OlILjVAwCOdZaWgpY8UqgCFVEiSF71hLCRKQuJzOwRoG5WA7pCgtEWPyHkNk+HwM6KJwCcmHStAOPomQKOKFshOE9lJIX0J1StgNruGaBuvNtM914u0S2fk6hLVwIMHAx7EoGyvUmaJ4xsLgDRWas9iwHYoWZv0wceeGfw06RZD3smwQDIDbWFnzR3hNDcVOWS7wvQYQw0J8iqjkeVlThQKLebYMiGE+SfGKXN00sUgLxsuITHrZLahHKsOwwkyGaIr1mkkUVThe8HlQDjknQWhxP0Cw4MNy/xbrkheRSeTq1yV6UMyU6KRoqbqgnGtJUEvKTHpSuAkZ9t0rpcUJYBiMZENJwxJHvuq26TUGo94C13QBqBGDTNVrK7Mwd0Mov0wELXeYD8Infmyab3OnwSGK5jFQI00q1lVPpxaVMeCqinkQwFg+xmhXGD0yllD7hFEw75WfK12aUr0gGIqyrRtAeZTad0NRRWVbPe3GWBLIRHR4G1m7p5iK/r3QRS6CsD1fiHROc6yYHr30zBaX4AGIgcn3lvADJ/XWDbfgo0YcDOvFdxoPNoALBW3oWfjh1CPIZwsnVfxQuyIiKIJNUMuhYeLm/7PYGoViI7Xkf6CwBpGQSupk69OOsOZXv+OB7fj22bmYrlF6sXvYRaSi7ibpfdz+zpct6/fRzP5zKM8ipUXww0cUoYJ+vt3fPtT2+H08f5eDm3GFfR9OVGiTN/a4qT8GuE2/ZwuFyO58uxrfKtzr2cI8ANhywgi/BFoT0c30+EwL7wjFHvbUBaVH3+/vltTz5P+zpWaXSd0720us7A5c97NwXYH/UPv915ixjPw8ffv++3ScTEs1GEA0E1FukN4M/7vsZVHtr9XSPgh/JiV1xdBmnA6dA24cpSXtf//jhz42f4cwoOuAiXE56mfpAMwYNNSm2FzhyAHzqQUUrhVYnIMc8zck3zNMd1OaO8B8gijrl09NlyPlXNGJcWLcCU3PLtGLEciwA/ywqTMgUgLdbOl0UGkpt7lH8bGMhL3L3sUNmmJAeAWJpGPn4V6XGoSYphqr8zWQzDz1N/HRdlrP/GY13pDLzm6jd7X2fECeJgOJIVZXx7ytguatykbs9aQnXhehs/jJM0y4siz9JdQmYq2TpSPwJwbHUI0Y5ApGkSR4G/8Vzb/I+e/wOc0LbXscp/EAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 150,
            ap: 75,
            dps: 173.08,
            speed: 9,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 350,
            freq: 13,
            foreswing: 4,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 600,
            actualAp: 300,
            actualDps: 692.32,
            magnification: "400%",
            count: "0",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "9.3-13.3s",
            delayFrames: "280-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "122",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAANAgEfBAErBQNCCANcCwVyDQeEDweVEQirEwq7FQreGAz0Gw3Lvw2UAAAAQHRSTlMAAQMHDBATFxwgJCktMzc7P0hQV11haHF2e3+DiI6Um6SqsLi9wsjO09fb3+Tp7O/4/P/0////////////////cn1owwAAA9tJREFUWIWdV9l2okAUpLtZVVBAQFEQlU32BtwSM/P/fzWtJEZz5hzp9INP3rLuVrdkmO/HSSLPcyzLIgQBAAz1m3grZ7mYz2emaeiqCKkBZL+6vaYs8yx2R9QInF3W369wRNos4Dh6AKgzi6OlILjVAwCOdZaWgpY8UqgCFVEiSF71hLCRKQuJzOwRoG5WA7pCgtEWPyHkNk+HwM6KJwCcmHStAOPomQKOKFshOE9lJIX0J1StgNruGaBuvNtM914u0S2fk6hLVwIMHAx7EoGyvUmaJ4xsLgDRWas9iwHYoWZv0wceeGfw06RZD3smwQDIDbWFnzR3hNDcVOWS7wvQYQw0J8iqjkeVlThQKLebYMiGE+SfGKXN00sUgLxsuITHrZLahHKsOwwkyGaIr1mkkUVThe8HlQDjknQWhxP0Cw4MNy/xbrkheRSeTq1yV6UMyU6KRoqbqgnGtJUEvKTHpSuAkZ9t0rpcUJYBiMZENJwxJHvuq26TUGo94C13QBqBGDTNVrK7Mwd0Mov0wELXeYD8Infmyab3OnwSGK5jFQI00q1lVPpxaVMeCqinkQwFg+xmhXGD0yllD7hFEw75WfK12aUr0gGIqyrRtAeZTad0NRRWVbPe3GWBLIRHR4G1m7p5iK/r3QRS6CsD1fiHROc6yYHr30zBaX4AGIgcn3lvADJ/XWDbfgo0YcDOvFdxoPNoALBW3oWfjh1CPIZwsnVfxQuyIiKIJNUMuhYeLm/7PYGoViI7Xkf6CwBpGQSupk69OOsOZXv+OB7fj22bmYrlF6sXvYRaSi7ibpfdz+zpct6/fRzP5zKM8ipUXww0cUoYJ+vt3fPtT2+H08f5eDm3GFfR9OVGiTN/a4qT8GuE2/ZwuFyO58uxrfKtzr2cI8ANhywgi/BFoT0c30+EwL7wjFHvbUBaVH3+/vltTz5P+zpWaXSd0720us7A5c97NwXYH/UPv915ixjPw8ffv++3ScTEs1GEA0E1FukN4M/7vsZVHtr9XSPgh/JiV1xdBmnA6dA24cpSXtf//jhz42f4cwoOuAiXE56mfpAMwYNNSm2FzhyAHzqQUUrhVYnIMc8zck3zNMd1OaO8B8gijrl09NlyPlXNGJcWLcCU3PLtGLEciwA/ywqTMgUgLdbOl0UGkpt7lH8bGMhL3L3sUNmmJAeAWJpGPn4V6XGoSYphqr8zWQzDz1N/HRdlrP/GY13pDLzm6jd7X2fECeJgOJIVZXx7ytguatykbs9aQnXhehs/jJM0y4siz9JdQmYq2TpSPwJwbHUI0Y5ApGkSR4G/8Vzb/I+e/wOc0LbXscp/EAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 150,
            ap: 75,
            dps: 173.08,
            speed: 9,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 350,
            freq: 13,
            foreswing: 4,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 600,
            actualAp: 300,
            actualDps: 692.32,
            magnification: "400%",
            count: "0",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "10.0-14.0s",
            delayFrames: "300-420f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "122",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAANAgEfBAErBQNCCANcCwVyDQeEDweVEQirEwq7FQreGAz0Gw3Lvw2UAAAAQHRSTlMAAQMHDBATFxwgJCktMzc7P0hQV11haHF2e3+DiI6Um6SqsLi9wsjO09fb3+Tp7O/4/P/0////////////////cn1owwAAA9tJREFUWIWdV9l2okAUpLtZVVBAQFEQlU32BtwSM/P/fzWtJEZz5hzp9INP3rLuVrdkmO/HSSLPcyzLIgQBAAz1m3grZ7mYz2emaeiqCKkBZL+6vaYs8yx2R9QInF3W369wRNos4Dh6AKgzi6OlILjVAwCOdZaWgpY8UqgCFVEiSF71hLCRKQuJzOwRoG5WA7pCgtEWPyHkNk+HwM6KJwCcmHStAOPomQKOKFshOE9lJIX0J1StgNruGaBuvNtM914u0S2fk6hLVwIMHAx7EoGyvUmaJ4xsLgDRWas9iwHYoWZv0wceeGfw06RZD3smwQDIDbWFnzR3hNDcVOWS7wvQYQw0J8iqjkeVlThQKLebYMiGE+SfGKXN00sUgLxsuITHrZLahHKsOwwkyGaIr1mkkUVThe8HlQDjknQWhxP0Cw4MNy/xbrkheRSeTq1yV6UMyU6KRoqbqgnGtJUEvKTHpSuAkZ9t0rpcUJYBiMZENJwxJHvuq26TUGo94C13QBqBGDTNVrK7Mwd0Mov0wELXeYD8Infmyab3OnwSGK5jFQI00q1lVPpxaVMeCqinkQwFg+xmhXGD0yllD7hFEw75WfK12aUr0gGIqyrRtAeZTad0NRRWVbPe3GWBLIRHR4G1m7p5iK/r3QRS6CsD1fiHROc6yYHr30zBaX4AGIgcn3lvADJ/XWDbfgo0YcDOvFdxoPNoALBW3oWfjh1CPIZwsnVfxQuyIiKIJNUMuhYeLm/7PYGoViI7Xkf6CwBpGQSupk69OOsOZXv+OB7fj22bmYrlF6sXvYRaSi7ibpfdz+zpct6/fRzP5zKM8ipUXww0cUoYJ+vt3fPtT2+H08f5eDm3GFfR9OVGiTN/a4qT8GuE2/ZwuFyO58uxrfKtzr2cI8ANhywgi/BFoT0c30+EwL7wjFHvbUBaVH3+/vltTz5P+zpWaXSd0720us7A5c97NwXYH/UPv915ixjPw8ffv++3ScTEs1GEA0E1FukN4M/7vsZVHtr9XSPgh/JiV1xdBmnA6dA24cpSXtf//jhz42f4cwoOuAiXE56mfpAMwYNNSm2FzhyAHzqQUUrhVYnIMc8zck3zNMd1OaO8B8gijrl09NlyPlXNGJcWLcCU3PLtGLEciwA/ywqTMgUgLdbOl0UGkpt7lH8bGMhL3L3sUNmmJAeAWJpGPn4V6XGoSYphqr8zWQzDz1N/HRdlrP/GY13pDLzm6jd7X2fECeJgOJIVZXx7ytguatykbs9aQnXhehs/jJM0y4siz9JdQmYq2TpSPwJwbHUI0Y5ApGkSR4G/8Vzb/I+e/wOc0LbXscp/EAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 150,
            ap: 75,
            dps: 173.08,
            speed: 9,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 350,
            freq: 13,
            foreswing: 4,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 600,
            actualAp: 300,
            actualDps: 692.32,
            magnification: "400%",
            count: "0",
            spawnTime: "28.7s",
            spawnTimeFrames: "860f",
            delay: "10.7-14.7s",
            delayFrames: "320-440f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "122",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAANAgEfBAErBQNCCANcCwVyDQeEDweVEQirEwq7FQreGAz0Gw3Lvw2UAAAAQHRSTlMAAQMHDBATFxwgJCktMzc7P0hQV11haHF2e3+DiI6Um6SqsLi9wsjO09fb3+Tp7O/4/P/0////////////////cn1owwAAA9tJREFUWIWdV9l2okAUpLtZVVBAQFEQlU32BtwSM/P/fzWtJEZz5hzp9INP3rLuVrdkmO/HSSLPcyzLIgQBAAz1m3grZ7mYz2emaeiqCKkBZL+6vaYs8yx2R9QInF3W369wRNos4Dh6AKgzi6OlILjVAwCOdZaWgpY8UqgCFVEiSF71hLCRKQuJzOwRoG5WA7pCgtEWPyHkNk+HwM6KJwCcmHStAOPomQKOKFshOE9lJIX0J1StgNruGaBuvNtM914u0S2fk6hLVwIMHAx7EoGyvUmaJ4xsLgDRWas9iwHYoWZv0wceeGfw06RZD3smwQDIDbWFnzR3hNDcVOWS7wvQYQw0J8iqjkeVlThQKLebYMiGE+SfGKXN00sUgLxsuITHrZLahHKsOwwkyGaIr1mkkUVThe8HlQDjknQWhxP0Cw4MNy/xbrkheRSeTq1yV6UMyU6KRoqbqgnGtJUEvKTHpSuAkZ9t0rpcUJYBiMZENJwxJHvuq26TUGo94C13QBqBGDTNVrK7Mwd0Mov0wELXeYD8Infmyab3OnwSGK5jFQI00q1lVPpxaVMeCqinkQwFg+xmhXGD0yllD7hFEw75WfK12aUr0gGIqyrRtAeZTad0NRRWVbPe3GWBLIRHR4G1m7p5iK/r3QRS6CsD1fiHROc6yYHr30zBaX4AGIgcn3lvADJ/XWDbfgo0YcDOvFdxoPNoALBW3oWfjh1CPIZwsnVfxQuyIiKIJNUMuhYeLm/7PYGoViI7Xkf6CwBpGQSupk69OOsOZXv+OB7fj22bmYrlF6sXvYRaSi7ibpfdz+zpct6/fRzP5zKM8ipUXww0cUoYJ+vt3fPtT2+H08f5eDm3GFfR9OVGiTN/a4qT8GuE2/ZwuFyO58uxrfKtzr2cI8ANhywgi/BFoT0c30+EwL7wjFHvbUBaVH3+/vltTz5P+zpWaXSd0720us7A5c97NwXYH/UPv915ixjPw8ffv++3ScTEs1GEA0E1FukN4M/7vsZVHtr9XSPgh/JiV1xdBmnA6dA24cpSXtf//jhz42f4cwoOuAiXE56mfpAMwYNNSm2FzhyAHzqQUUrhVYnIMc8zck3zNMd1OaO8B8gijrl09NlyPlXNGJcWLcCU3PLtGLEciwA/ywqTMgUgLdbOl0UGkpt7lH8bGMhL3L3sUNmmJAeAWJpGPn4V6XGoSYphqr8zWQzDz1N/HRdlrP/GY13pDLzm6jd7X2fECeJgOJIVZXx7ytguatykbs9aQnXhehs/jJM0y4siz9JdQmYq2TpSPwJwbHUI0Y5ApGkSR4G/8Vzb/I+e/wOc0LbXscp/EAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 150,
            ap: 75,
            dps: 173.08,
            speed: 9,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 350,
            freq: 13,
            foreswing: 4,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 600,
            actualAp: 300,
            actualDps: 692.32,
            magnification: "400%",
            count: "15",
            spawnTime: "110.0s",
            spawnTimeFrames: "3,300f",
            delay: "0.7-2.0s",
            delayFrames: "20-60f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "122",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAANAgEfBAErBQNCCANcCwVyDQeEDweVEQirEwq7FQreGAz0Gw3Lvw2UAAAAQHRSTlMAAQMHDBATFxwgJCktMzc7P0hQV11haHF2e3+DiI6Um6SqsLi9wsjO09fb3+Tp7O/4/P/0////////////////cn1owwAAA9tJREFUWIWdV9l2okAUpLtZVVBAQFEQlU32BtwSM/P/fzWtJEZz5hzp9INP3rLuVrdkmO/HSSLPcyzLIgQBAAz1m3grZ7mYz2emaeiqCKkBZL+6vaYs8yx2R9QInF3W369wRNos4Dh6AKgzi6OlILjVAwCOdZaWgpY8UqgCFVEiSF71hLCRKQuJzOwRoG5WA7pCgtEWPyHkNk+HwM6KJwCcmHStAOPomQKOKFshOE9lJIX0J1StgNruGaBuvNtM914u0S2fk6hLVwIMHAx7EoGyvUmaJ4xsLgDRWas9iwHYoWZv0wceeGfw06RZD3smwQDIDbWFnzR3hNDcVOWS7wvQYQw0J8iqjkeVlThQKLebYMiGE+SfGKXN00sUgLxsuITHrZLahHKsOwwkyGaIr1mkkUVThe8HlQDjknQWhxP0Cw4MNy/xbrkheRSeTq1yV6UMyU6KRoqbqgnGtJUEvKTHpSuAkZ9t0rpcUJYBiMZENJwxJHvuq26TUGo94C13QBqBGDTNVrK7Mwd0Mov0wELXeYD8Infmyab3OnwSGK5jFQI00q1lVPpxaVMeCqinkQwFg+xmhXGD0yllD7hFEw75WfK12aUr0gGIqyrRtAeZTad0NRRWVbPe3GWBLIRHR4G1m7p5iK/r3QRS6CsD1fiHROc6yYHr30zBaX4AGIgcn3lvADJ/XWDbfgo0YcDOvFdxoPNoALBW3oWfjh1CPIZwsnVfxQuyIiKIJNUMuhYeLm/7PYGoViI7Xkf6CwBpGQSupk69OOsOZXv+OB7fj22bmYrlF6sXvYRaSi7ibpfdz+zpct6/fRzP5zKM8ipUXww0cUoYJ+vt3fPtT2+H08f5eDm3GFfR9OVGiTN/a4qT8GuE2/ZwuFyO58uxrfKtzr2cI8ANhywgi/BFoT0c30+EwL7wjFHvbUBaVH3+/vltTz5P+zpWaXSd0720us7A5c97NwXYH/UPv915ixjPw8ffv++3ScTEs1GEA0E1FukN4M/7vsZVHtr9XSPgh/JiV1xdBmnA6dA24cpSXtf//jhz42f4cwoOuAiXE56mfpAMwYNNSm2FzhyAHzqQUUrhVYnIMc8zck3zNMd1OaO8B8gijrl09NlyPlXNGJcWLcCU3PLtGLEciwA/ywqTMgUgLdbOl0UGkpt7lH8bGMhL3L3sUNmmJAeAWJpGPn4V6XGoSYphqr8zWQzDz1N/HRdlrP/GY13pDLzm6jd7X2fECeJgOJIVZXx7ytguatykbs9aQnXhehs/jJM0y4siz9JdQmYq2TpSPwJwbHUI0Y5ApGkSR4G/8Vzb/I+e/wOc0LbXscp/EAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 150,
            ap: 75,
            dps: 173.08,
            speed: 9,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 350,
            freq: 13,
            foreswing: 4,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 600,
            actualAp: 300,
            actualDps: 692.32,
            magnification: "400%",
            count: "10",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.3-1.7s",
            delayFrames: "10-50f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "121",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAATAAAtAAA4AABBAABGAAFWAABZAQBaAAB1AACEAACPAACiAAC+AAC+AADeAAD2AAAouQ0WAAAAQHRSTlMAAQUJDRIWGiAlKzI5P0VKUVpgZ25zeoGJkZacpKqwtMLIzdTZ3uLn6/D0+fz+/7r//wn/xu3/jv+g///z////Bl24JgAABFFJREFUWIWlV9mWqkgQ7GJfRURBFEQEZKkFHGfuOO10+/9/dQuX2wJqK10vnoNmkJEZlZG+vd08nCaA2988dxh1pjM/AeDGoc3/IB5Ifu7LP+DAGBFaGT/gwE8zkjpc73iglJDAhdSbA2vGhJD+HIAwyylAfw6MukQUAPp9ObBWQuMJCntyAMK8qAFwOmF7ATDakQHlMBN7caAM8BEAlVovgFMPag6J2acI5x7Up3D6XCh2FOMzAPSVHhz46ZkBLcLKeB0AyIsLA4Iz6/VGMsPVhQEtwlR8GYCz0y8AuHi9CGcZXoqgvwpARwH6AiBr85UiAIZheTPCVwCZIzFP5gAYTlCH4+kyv4oncOWYA1X8Ng3A8vLQ8crVukDXCdAqFOnKn450mXuQCCMopltGKUS4GX0SA4JFGs4tXWLvYciTIM5QN7QBkoWuqd6ZcaobFTde3cYokrl6OwdWGnlR/jAFWgyYlvY9WQFWGs5CWsAHr4+8ic7fHw+AFbSxt0py2OFCa5jHC8dUOPBQEVQHoma5ZUZIdQ6tSFVVMC5nk6HKP6OnWktKgEi13W43Gxq+/bXb/W2o0lPR58O6ebX5+Pz8/PhFjp///QW6qbO8wHVAOUVTFUkcJ3jz/nk4fGxJtT8c/v9X1dTWtgNk21vMJnpLFYLlB57ruDEim93+fVtTeN//Uy4Cp9k9ZrjMEYJ5ZAstXCcuivzUh+qrB6mnN+4Sa55tA6d2s60MRegoAWeteKCG9EcYUtHg9bDJjZHsqIWA0rnWvMuMRe87iqZOWRDkt3wDiOMVbLw/ddWW+jgXEhwZLFs7aKy/tRGsBgIq9fYs4T1EHYuqskbKzLc2gjBJrzNIxnIrA4EqLRkIA1mYI5KPOgC8lV2EXHcCRY7SVIwSYrzU3MSbUAdcG20AVg/QJX5zREjmGn+FwJgpQfNhjCG9/2gptxNQ3EsCZLvbHMuQB5b0hwaj0gUwswbx8Se53aoQEJzkTwLv9DYcTxHPjNOqArhhUFC7kkWvdp+Ob9EefClp+3HYb869yMPpgKUzQ3VjiOFywADNz4psoTULTAsYXuKrzfvh8Lm7KBqlrvjGj0KIcVEO2Vq1I3sktd8/+tJARRM4HPbbMwLOPVWkrksn2+ykDMCwrf4CcXKtoXMGF6OgpXRTlJVT/e7ixtnxtQbrFPZbAutnuHYrmMOVpTzwJ24SNa5BtfugBGgYglFYfwNL7eFkoxep4cvVUQe4SBN/YNDmPvEHRCgbI706NrEIbZmVfYji0bcWLYc3/A2Gumh4OYwn36+MgkepdjDS2SyCa9/kv5/sjOYnXYdEeZEHpvTUzgtEJ+mSwKkjP2ksQPGKGwCJ9cxfH0A3LMle31oTYGlQG3qYAytIijYw3e5UP56iHA80RRLurjhAHs+8RblKC0h1hxqHPoAwj5cLz7WUu5XkVGM0tqdzzw+CoFxenZI+8L351B6bhnK7k78BL2zz+r9pfUUAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 500,
            ap: 2200,
            dps: 445.95,
            speed: 5,
            range: 350,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 148,
            foreswing: 29,
            backswing: 12,
            tba: 60
          },
          stageStats: {
            actualHp: 500,
            actualAp: 2200,
            actualDps: 445.95,
            magnification: "100%",
            count: "0",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "13.3-23.3s",
            delayFrames: "400-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "121",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAATAAAtAAA4AABBAABGAAFWAABZAQBaAAB1AACEAACPAACiAAC+AAC+AADeAAD2AAAouQ0WAAAAQHRSTlMAAQUJDRIWGiAlKzI5P0VKUVpgZ25zeoGJkZacpKqwtMLIzdTZ3uLn6/D0+fz+/7r//wn/xu3/jv+g///z////Bl24JgAABFFJREFUWIWlV9mWqkgQ7GJfRURBFEQEZKkFHGfuOO10+/9/dQuX2wJqK10vnoNmkJEZlZG+vd08nCaA2988dxh1pjM/AeDGoc3/IB5Ifu7LP+DAGBFaGT/gwE8zkjpc73iglJDAhdSbA2vGhJD+HIAwyylAfw6MukQUAPp9ObBWQuMJCntyAMK8qAFwOmF7ATDakQHlMBN7caAM8BEAlVovgFMPag6J2acI5x7Up3D6XCh2FOMzAPSVHhz46ZkBLcLKeB0AyIsLA4Iz6/VGMsPVhQEtwlR8GYCz0y8AuHi9CGcZXoqgvwpARwH6AiBr85UiAIZheTPCVwCZIzFP5gAYTlCH4+kyv4oncOWYA1X8Ng3A8vLQ8crVukDXCdAqFOnKn450mXuQCCMopltGKUS4GX0SA4JFGs4tXWLvYciTIM5QN7QBkoWuqd6ZcaobFTde3cYokrl6OwdWGnlR/jAFWgyYlvY9WQFWGs5CWsAHr4+8ic7fHw+AFbSxt0py2OFCa5jHC8dUOPBQEVQHoma5ZUZIdQ6tSFVVMC5nk6HKP6OnWktKgEi13W43Gxq+/bXb/W2o0lPR58O6ebX5+Pz8/PhFjp///QW6qbO8wHVAOUVTFUkcJ3jz/nk4fGxJtT8c/v9X1dTWtgNk21vMJnpLFYLlB57ruDEim93+fVtTeN//Uy4Cp9k9ZrjMEYJ5ZAstXCcuivzUh+qrB6mnN+4Sa55tA6d2s60MRegoAWeteKCG9EcYUtHg9bDJjZHsqIWA0rnWvMuMRe87iqZOWRDkt3wDiOMVbLw/ddWW+jgXEhwZLFs7aKy/tRGsBgIq9fYs4T1EHYuqskbKzLc2gjBJrzNIxnIrA4EqLRkIA1mYI5KPOgC8lV2EXHcCRY7SVIwSYrzU3MSbUAdcG20AVg/QJX5zREjmGn+FwJgpQfNhjCG9/2gptxNQ3EsCZLvbHMuQB5b0hwaj0gUwswbx8Se53aoQEJzkTwLv9DYcTxHPjNOqArhhUFC7kkWvdp+Ob9EefClp+3HYb869yMPpgKUzQ3VjiOFywADNz4psoTULTAsYXuKrzfvh8Lm7KBqlrvjGj0KIcVEO2Vq1I3sktd8/+tJARRM4HPbbMwLOPVWkrksn2+ykDMCwrf4CcXKtoXMGF6OgpXRTlJVT/e7ixtnxtQbrFPZbAutnuHYrmMOVpTzwJ24SNa5BtfugBGgYglFYfwNL7eFkoxep4cvVUQe4SBN/YNDmPvEHRCgbI706NrEIbZmVfYji0bcWLYc3/A2Gumh4OYwn36+MgkepdjDS2SyCa9/kv5/sjOYnXYdEeZEHpvTUzgtEJ+mSwKkjP2ksQPGKGwCJ9cxfH0A3LMle31oTYGlQG3qYAytIijYw3e5UP56iHA80RRLurjhAHs+8RblKC0h1hxqHPoAwj5cLz7WUu5XkVGM0tqdzzw+CoFxenZI+8L351B6bhnK7k78BL2zz+r9pfUUAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 500,
            ap: 2200,
            dps: 445.95,
            speed: 5,
            range: 350,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 148,
            foreswing: 29,
            backswing: 12,
            tba: 60
          },
          stageStats: {
            actualHp: 500,
            actualAp: 2200,
            actualDps: 445.95,
            magnification: "100%",
            count: "15",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "121",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAATAAAtAAA4AABBAABGAAFWAABZAQBaAAB1AACEAACPAACiAAC+AAC+AADeAAD2AAAouQ0WAAAAQHRSTlMAAQUJDRIWGiAlKzI5P0VKUVpgZ25zeoGJkZacpKqwtMLIzdTZ3uLn6/D0+fz+/7r//wn/xu3/jv+g///z////Bl24JgAABFFJREFUWIWlV9mWqkgQ7GJfRURBFEQEZKkFHGfuOO10+/9/dQuX2wJqK10vnoNmkJEZlZG+vd08nCaA2988dxh1pjM/AeDGoc3/IB5Ifu7LP+DAGBFaGT/gwE8zkjpc73iglJDAhdSbA2vGhJD+HIAwyylAfw6MukQUAPp9ObBWQuMJCntyAMK8qAFwOmF7ATDakQHlMBN7caAM8BEAlVovgFMPag6J2acI5x7Up3D6XCh2FOMzAPSVHhz46ZkBLcLKeB0AyIsLA4Iz6/VGMsPVhQEtwlR8GYCz0y8AuHi9CGcZXoqgvwpARwH6AiBr85UiAIZheTPCVwCZIzFP5gAYTlCH4+kyv4oncOWYA1X8Ng3A8vLQ8crVukDXCdAqFOnKn450mXuQCCMopltGKUS4GX0SA4JFGs4tXWLvYciTIM5QN7QBkoWuqd6ZcaobFTde3cYokrl6OwdWGnlR/jAFWgyYlvY9WQFWGs5CWsAHr4+8ic7fHw+AFbSxt0py2OFCa5jHC8dUOPBQEVQHoma5ZUZIdQ6tSFVVMC5nk6HKP6OnWktKgEi13W43Gxq+/bXb/W2o0lPR58O6ebX5+Pz8/PhFjp///QW6qbO8wHVAOUVTFUkcJ3jz/nk4fGxJtT8c/v9X1dTWtgNk21vMJnpLFYLlB57ruDEim93+fVtTeN//Uy4Cp9k9ZrjMEYJ5ZAstXCcuivzUh+qrB6mnN+4Sa55tA6d2s60MRegoAWeteKCG9EcYUtHg9bDJjZHsqIWA0rnWvMuMRe87iqZOWRDkt3wDiOMVbLw/ddWW+jgXEhwZLFs7aKy/tRGsBgIq9fYs4T1EHYuqskbKzLc2gjBJrzNIxnIrA4EqLRkIA1mYI5KPOgC8lV2EXHcCRY7SVIwSYrzU3MSbUAdcG20AVg/QJX5zREjmGn+FwJgpQfNhjCG9/2gptxNQ3EsCZLvbHMuQB5b0hwaj0gUwswbx8Se53aoQEJzkTwLv9DYcTxHPjNOqArhhUFC7kkWvdp+Ob9EefClp+3HYb869yMPpgKUzQ3VjiOFywADNz4psoTULTAsYXuKrzfvh8Lm7KBqlrvjGj0KIcVEO2Vq1I3sktd8/+tJARRM4HPbbMwLOPVWkrksn2+ykDMCwrf4CcXKtoXMGF6OgpXRTlJVT/e7ixtnxtQbrFPZbAutnuHYrmMOVpTzwJ24SNa5BtfugBGgYglFYfwNL7eFkoxep4cvVUQe4SBN/YNDmPvEHRCgbI706NrEIbZmVfYji0bcWLYc3/A2Gumh4OYwn36+MgkepdjDS2SyCa9/kv5/sjOYnXYdEeZEHpvTUzgtEJ+mSwKkjP2ksQPGKGwCJ9cxfH0A3LMle31oTYGlQG3qYAytIijYw3e5UP56iHA80RRLurjhAHs+8RblKC0h1hxqHPoAwj5cLz7WUu5XkVGM0tqdzzw+CoFxenZI+8L351B6bhnK7k78BL2zz+r9pfUUAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 500,
            ap: 2200,
            dps: 445.95,
            speed: 5,
            range: 350,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 148,
            foreswing: 29,
            backswing: 12,
            tba: 60
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 8800,
            actualDps: 1783.8,
            magnification: "400%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "90%",
            isBoss: false
          }
        },
        {
          enemyId: "121",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAATAAAtAAA4AABBAABGAAFWAABZAQBaAAB1AACEAACPAACiAAC+AAC+AADeAAD2AAAouQ0WAAAAQHRSTlMAAQUJDRIWGiAlKzI5P0VKUVpgZ25zeoGJkZacpKqwtMLIzdTZ3uLn6/D0+fz+/7r//wn/xu3/jv+g///z////Bl24JgAABFFJREFUWIWlV9mWqkgQ7GJfRURBFEQEZKkFHGfuOO10+/9/dQuX2wJqK10vnoNmkJEZlZG+vd08nCaA2988dxh1pjM/AeDGoc3/IB5Ifu7LP+DAGBFaGT/gwE8zkjpc73iglJDAhdSbA2vGhJD+HIAwyylAfw6MukQUAPp9ObBWQuMJCntyAMK8qAFwOmF7ATDakQHlMBN7caAM8BEAlVovgFMPag6J2acI5x7Up3D6XCh2FOMzAPSVHhz46ZkBLcLKeB0AyIsLA4Iz6/VGMsPVhQEtwlR8GYCz0y8AuHi9CGcZXoqgvwpARwH6AiBr85UiAIZheTPCVwCZIzFP5gAYTlCH4+kyv4oncOWYA1X8Ng3A8vLQ8crVukDXCdAqFOnKn450mXuQCCMopltGKUS4GX0SA4JFGs4tXWLvYciTIM5QN7QBkoWuqd6ZcaobFTde3cYokrl6OwdWGnlR/jAFWgyYlvY9WQFWGs5CWsAHr4+8ic7fHw+AFbSxt0py2OFCa5jHC8dUOPBQEVQHoma5ZUZIdQ6tSFVVMC5nk6HKP6OnWktKgEi13W43Gxq+/bXb/W2o0lPR58O6ebX5+Pz8/PhFjp///QW6qbO8wHVAOUVTFUkcJ3jz/nk4fGxJtT8c/v9X1dTWtgNk21vMJnpLFYLlB57ruDEim93+fVtTeN//Uy4Cp9k9ZrjMEYJ5ZAstXCcuivzUh+qrB6mnN+4Sa55tA6d2s60MRegoAWeteKCG9EcYUtHg9bDJjZHsqIWA0rnWvMuMRe87iqZOWRDkt3wDiOMVbLw/ddWW+jgXEhwZLFs7aKy/tRGsBgIq9fYs4T1EHYuqskbKzLc2gjBJrzNIxnIrA4EqLRkIA1mYI5KPOgC8lV2EXHcCRY7SVIwSYrzU3MSbUAdcG20AVg/QJX5zREjmGn+FwJgpQfNhjCG9/2gptxNQ3EsCZLvbHMuQB5b0hwaj0gUwswbx8Se53aoQEJzkTwLv9DYcTxHPjNOqArhhUFC7kkWvdp+Ob9EefClp+3HYb869yMPpgKUzQ3VjiOFywADNz4psoTULTAsYXuKrzfvh8Lm7KBqlrvjGj0KIcVEO2Vq1I3sktd8/+tJARRM4HPbbMwLOPVWkrksn2+ykDMCwrf4CcXKtoXMGF6OgpXRTlJVT/e7ixtnxtQbrFPZbAutnuHYrmMOVpTzwJ24SNa5BtfugBGgYglFYfwNL7eFkoxep4cvVUQe4SBN/YNDmPvEHRCgbI706NrEIbZmVfYji0bcWLYc3/A2Gumh4OYwn36+MgkepdjDS2SyCa9/kv5/sjOYnXYdEeZEHpvTUzgtEJ+mSwKkjP2ksQPGKGwCJ9cxfH0A3LMle31oTYGlQG3qYAytIijYw3e5UP56iHA80RRLurjhAHs+8RblKC0h1hxqHPoAwj5cLz7WUu5XkVGM0tqdzzw+CoFxenZI+8L351B6bhnK7k78BL2zz+r9pfUUAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 500,
            ap: 2200,
            dps: 445.95,
            speed: 5,
            range: 350,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 148,
            foreswing: 29,
            backswing: 12,
            tba: 60
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 8800,
            actualDps: 1783.8,
            magnification: "400%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "90%",
            isBoss: false
          }
        },
        {
          enemyId: "121",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAATAAAtAAA4AABBAABGAAFWAABZAQBaAAB1AACEAACPAACiAAC+AAC+AADeAAD2AAAouQ0WAAAAQHRSTlMAAQUJDRIWGiAlKzI5P0VKUVpgZ25zeoGJkZacpKqwtMLIzdTZ3uLn6/D0+fz+/7r//wn/xu3/jv+g///z////Bl24JgAABFFJREFUWIWlV9mWqkgQ7GJfRURBFEQEZKkFHGfuOO10+/9/dQuX2wJqK10vnoNmkJEZlZG+vd08nCaA2988dxh1pjM/AeDGoc3/IB5Ifu7LP+DAGBFaGT/gwE8zkjpc73iglJDAhdSbA2vGhJD+HIAwyylAfw6MukQUAPp9ObBWQuMJCntyAMK8qAFwOmF7ATDakQHlMBN7caAM8BEAlVovgFMPag6J2acI5x7Up3D6XCh2FOMzAPSVHhz46ZkBLcLKeB0AyIsLA4Iz6/VGMsPVhQEtwlR8GYCz0y8AuHi9CGcZXoqgvwpARwH6AiBr85UiAIZheTPCVwCZIzFP5gAYTlCH4+kyv4oncOWYA1X8Ng3A8vLQ8crVukDXCdAqFOnKn450mXuQCCMopltGKUS4GX0SA4JFGs4tXWLvYciTIM5QN7QBkoWuqd6ZcaobFTde3cYokrl6OwdWGnlR/jAFWgyYlvY9WQFWGs5CWsAHr4+8ic7fHw+AFbSxt0py2OFCa5jHC8dUOPBQEVQHoma5ZUZIdQ6tSFVVMC5nk6HKP6OnWktKgEi13W43Gxq+/bXb/W2o0lPR58O6ebX5+Pz8/PhFjp///QW6qbO8wHVAOUVTFUkcJ3jz/nk4fGxJtT8c/v9X1dTWtgNk21vMJnpLFYLlB57ruDEim93+fVtTeN//Uy4Cp9k9ZrjMEYJ5ZAstXCcuivzUh+qrB6mnN+4Sa55tA6d2s60MRegoAWeteKCG9EcYUtHg9bDJjZHsqIWA0rnWvMuMRe87iqZOWRDkt3wDiOMVbLw/ddWW+jgXEhwZLFs7aKy/tRGsBgIq9fYs4T1EHYuqskbKzLc2gjBJrzNIxnIrA4EqLRkIA1mYI5KPOgC8lV2EXHcCRY7SVIwSYrzU3MSbUAdcG20AVg/QJX5zREjmGn+FwJgpQfNhjCG9/2gptxNQ3EsCZLvbHMuQB5b0hwaj0gUwswbx8Se53aoQEJzkTwLv9DYcTxHPjNOqArhhUFC7kkWvdp+Ob9EefClp+3HYb869yMPpgKUzQ3VjiOFywADNz4psoTULTAsYXuKrzfvh8Lm7KBqlrvjGj0KIcVEO2Vq1I3sktd8/+tJARRM4HPbbMwLOPVWkrksn2+ykDMCwrf4CcXKtoXMGF6OgpXRTlJVT/e7ixtnxtQbrFPZbAutnuHYrmMOVpTzwJ24SNa5BtfugBGgYglFYfwNL7eFkoxep4cvVUQe4SBN/YNDmPvEHRCgbI706NrEIbZmVfYji0bcWLYc3/A2Gumh4OYwn36+MgkepdjDS2SyCa9/kv5/sjOYnXYdEeZEHpvTUzgtEJ+mSwKkjP2ksQPGKGwCJ9cxfH0A3LMle31oTYGlQG3qYAytIijYw3e5UP56iHA80RRLurjhAHs+8RblKC0h1hxqHPoAwj5cLz7WUu5XkVGM0tqdzzw+CoFxenZI+8L351B6bhnK7k78BL2zz+r9pfUUAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 500,
            ap: 2200,
            dps: 445.95,
            speed: 5,
            range: 350,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 148,
            foreswing: 29,
            backswing: 12,
            tba: 60
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 8800,
            actualDps: 1783.8,
            magnification: "400%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "90%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "にゃんこコロシアム",
      baseHp: 60000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1115",
          treasureName: "ドラリー剣士(156)",
          probability: "10",
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "3.0-6.7s",
            delayFrames: "90-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "122",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAANAgEfBAErBQNCCANcCwVyDQeEDweVEQirEwq7FQreGAz0Gw3Lvw2UAAAAQHRSTlMAAQMHDBATFxwgJCktMzc7P0hQV11haHF2e3+DiI6Um6SqsLi9wsjO09fb3+Tp7O/4/P/0////////////////cn1owwAAA9tJREFUWIWdV9l2okAUpLtZVVBAQFEQlU32BtwSM/P/fzWtJEZz5hzp9INP3rLuVrdkmO/HSSLPcyzLIgQBAAz1m3grZ7mYz2emaeiqCKkBZL+6vaYs8yx2R9QInF3W369wRNos4Dh6AKgzi6OlILjVAwCOdZaWgpY8UqgCFVEiSF71hLCRKQuJzOwRoG5WA7pCgtEWPyHkNk+HwM6KJwCcmHStAOPomQKOKFshOE9lJIX0J1StgNruGaBuvNtM914u0S2fk6hLVwIMHAx7EoGyvUmaJ4xsLgDRWas9iwHYoWZv0wceeGfw06RZD3smwQDIDbWFnzR3hNDcVOWS7wvQYQw0J8iqjkeVlThQKLebYMiGE+SfGKXN00sUgLxsuITHrZLahHKsOwwkyGaIr1mkkUVThe8HlQDjknQWhxP0Cw4MNy/xbrkheRSeTq1yV6UMyU6KRoqbqgnGtJUEvKTHpSuAkZ9t0rpcUJYBiMZENJwxJHvuq26TUGo94C13QBqBGDTNVrK7Mwd0Mov0wELXeYD8Infmyab3OnwSGK5jFQI00q1lVPpxaVMeCqinkQwFg+xmhXGD0yllD7hFEw75WfK12aUr0gGIqyrRtAeZTad0NRRWVbPe3GWBLIRHR4G1m7p5iK/r3QRS6CsD1fiHROc6yYHr30zBaX4AGIgcn3lvADJ/XWDbfgo0YcDOvFdxoPNoALBW3oWfjh1CPIZwsnVfxQuyIiKIJNUMuhYeLm/7PYGoViI7Xkf6CwBpGQSupk69OOsOZXv+OB7fj22bmYrlF6sXvYRaSi7ibpfdz+zpct6/fRzP5zKM8ipUXww0cUoYJ+vt3fPtT2+H08f5eDm3GFfR9OVGiTN/a4qT8GuE2/ZwuFyO58uxrfKtzr2cI8ANhywgi/BFoT0c30+EwL7wjFHvbUBaVH3+/vltTz5P+zpWaXSd0720us7A5c97NwXYH/UPv915ixjPw8ffv++3ScTEs1GEA0E1FukN4M/7vsZVHtr9XSPgh/JiV1xdBmnA6dA24cpSXtf//jhz42f4cwoOuAiXE56mfpAMwYNNSm2FzhyAHzqQUUrhVYnIMc8zck3zNMd1OaO8B8gijrl09NlyPlXNGJcWLcCU3PLtGLEciwA/ywqTMgUgLdbOl0UGkpt7lH8bGMhL3L3sUNmmJAeAWJpGPn4V6XGoSYphqr8zWQzDz1N/HRdlrP/GY13pDLzm6jd7X2fECeJgOJIVZXx7ytguatykbs9aQnXhehs/jJM0y4siz9JdQmYq2TpSPwJwbHUI0Y5ApGkSR4G/8Vzb/I+e/wOc0LbXscp/EAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 150,
            ap: 75,
            dps: 173.08,
            speed: 9,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 350,
            freq: 13,
            foreswing: 4,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 2550,
            actualAp: 1275,
            actualDps: 2942.36,
            magnification: "1700%",
            count: "5",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "122",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAANAgEfBAErBQNCCANcCwVyDQeEDweVEQirEwq7FQreGAz0Gw3Lvw2UAAAAQHRSTlMAAQMHDBATFxwgJCktMzc7P0hQV11haHF2e3+DiI6Um6SqsLi9wsjO09fb3+Tp7O/4/P/0////////////////cn1owwAAA9tJREFUWIWdV9l2okAUpLtZVVBAQFEQlU32BtwSM/P/fzWtJEZz5hzp9INP3rLuVrdkmO/HSSLPcyzLIgQBAAz1m3grZ7mYz2emaeiqCKkBZL+6vaYs8yx2R9QInF3W369wRNos4Dh6AKgzi6OlILjVAwCOdZaWgpY8UqgCFVEiSF71hLCRKQuJzOwRoG5WA7pCgtEWPyHkNk+HwM6KJwCcmHStAOPomQKOKFshOE9lJIX0J1StgNruGaBuvNtM914u0S2fk6hLVwIMHAx7EoGyvUmaJ4xsLgDRWas9iwHYoWZv0wceeGfw06RZD3smwQDIDbWFnzR3hNDcVOWS7wvQYQw0J8iqjkeVlThQKLebYMiGE+SfGKXN00sUgLxsuITHrZLahHKsOwwkyGaIr1mkkUVThe8HlQDjknQWhxP0Cw4MNy/xbrkheRSeTq1yV6UMyU6KRoqbqgnGtJUEvKTHpSuAkZ9t0rpcUJYBiMZENJwxJHvuq26TUGo94C13QBqBGDTNVrK7Mwd0Mov0wELXeYD8Infmyab3OnwSGK5jFQI00q1lVPpxaVMeCqinkQwFg+xmhXGD0yllD7hFEw75WfK12aUr0gGIqyrRtAeZTad0NRRWVbPe3GWBLIRHR4G1m7p5iK/r3QRS6CsD1fiHROc6yYHr30zBaX4AGIgcn3lvADJ/XWDbfgo0YcDOvFdxoPNoALBW3oWfjh1CPIZwsnVfxQuyIiKIJNUMuhYeLm/7PYGoViI7Xkf6CwBpGQSupk69OOsOZXv+OB7fj22bmYrlF6sXvYRaSi7ibpfdz+zpct6/fRzP5zKM8ipUXww0cUoYJ+vt3fPtT2+H08f5eDm3GFfR9OVGiTN/a4qT8GuE2/ZwuFyO58uxrfKtzr2cI8ANhywgi/BFoT0c30+EwL7wjFHvbUBaVH3+/vltTz5P+zpWaXSd0720us7A5c97NwXYH/UPv915ixjPw8ffv++3ScTEs1GEA0E1FukN4M/7vsZVHtr9XSPgh/JiV1xdBmnA6dA24cpSXtf//jhz42f4cwoOuAiXE56mfpAMwYNNSm2FzhyAHzqQUUrhVYnIMc8zck3zNMd1OaO8B8gijrl09NlyPlXNGJcWLcCU3PLtGLEciwA/ywqTMgUgLdbOl0UGkpt7lH8bGMhL3L3sUNmmJAeAWJpGPn4V6XGoSYphqr8zWQzDz1N/HRdlrP/GY13pDLzm6jd7X2fECeJgOJIVZXx7ytguatykbs9aQnXhehs/jJM0y4siz9JdQmYq2TpSPwJwbHUI0Y5ApGkSR4G/8Vzb/I+e/wOc0LbXscp/EAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 150,
            ap: 75,
            dps: 173.08,
            speed: 9,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 350,
            freq: 13,
            foreswing: 4,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 2550,
            actualAp: 1275,
            actualDps: 2942.36,
            magnification: "1700%",
            count: "0",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "121",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAATAAAtAAA4AABBAABGAAFWAABZAQBaAAB1AACEAACPAACiAAC+AAC+AADeAAD2AAAouQ0WAAAAQHRSTlMAAQUJDRIWGiAlKzI5P0VKUVpgZ25zeoGJkZacpKqwtMLIzdTZ3uLn6/D0+fz+/7r//wn/xu3/jv+g///z////Bl24JgAABFFJREFUWIWlV9mWqkgQ7GJfRURBFEQEZKkFHGfuOO10+/9/dQuX2wJqK10vnoNmkJEZlZG+vd08nCaA2988dxh1pjM/AeDGoc3/IB5Ifu7LP+DAGBFaGT/gwE8zkjpc73iglJDAhdSbA2vGhJD+HIAwyylAfw6MukQUAPp9ObBWQuMJCntyAMK8qAFwOmF7ATDakQHlMBN7caAM8BEAlVovgFMPag6J2acI5x7Up3D6XCh2FOMzAPSVHhz46ZkBLcLKeB0AyIsLA4Iz6/VGMsPVhQEtwlR8GYCz0y8AuHi9CGcZXoqgvwpARwH6AiBr85UiAIZheTPCVwCZIzFP5gAYTlCH4+kyv4oncOWYA1X8Ng3A8vLQ8crVukDXCdAqFOnKn450mXuQCCMopltGKUS4GX0SA4JFGs4tXWLvYciTIM5QN7QBkoWuqd6ZcaobFTde3cYokrl6OwdWGnlR/jAFWgyYlvY9WQFWGs5CWsAHr4+8ic7fHw+AFbSxt0py2OFCa5jHC8dUOPBQEVQHoma5ZUZIdQ6tSFVVMC5nk6HKP6OnWktKgEi13W43Gxq+/bXb/W2o0lPR58O6ebX5+Pz8/PhFjp///QW6qbO8wHVAOUVTFUkcJ3jz/nk4fGxJtT8c/v9X1dTWtgNk21vMJnpLFYLlB57ruDEim93+fVtTeN//Uy4Cp9k9ZrjMEYJ5ZAstXCcuivzUh+qrB6mnN+4Sa55tA6d2s60MRegoAWeteKCG9EcYUtHg9bDJjZHsqIWA0rnWvMuMRe87iqZOWRDkt3wDiOMVbLw/ddWW+jgXEhwZLFs7aKy/tRGsBgIq9fYs4T1EHYuqskbKzLc2gjBJrzNIxnIrA4EqLRkIA1mYI5KPOgC8lV2EXHcCRY7SVIwSYrzU3MSbUAdcG20AVg/QJX5zREjmGn+FwJgpQfNhjCG9/2gptxNQ3EsCZLvbHMuQB5b0hwaj0gUwswbx8Se53aoQEJzkTwLv9DYcTxHPjNOqArhhUFC7kkWvdp+Ob9EefClp+3HYb869yMPpgKUzQ3VjiOFywADNz4psoTULTAsYXuKrzfvh8Lm7KBqlrvjGj0KIcVEO2Vq1I3sktd8/+tJARRM4HPbbMwLOPVWkrksn2+ykDMCwrf4CcXKtoXMGF6OgpXRTlJVT/e7ixtnxtQbrFPZbAutnuHYrmMOVpTzwJ24SNa5BtfugBGgYglFYfwNL7eFkoxep4cvVUQe4SBN/YNDmPvEHRCgbI706NrEIbZmVfYji0bcWLYc3/A2Gumh4OYwn36+MgkepdjDS2SyCa9/kv5/sjOYnXYdEeZEHpvTUzgtEJ+mSwKkjP2ksQPGKGwCJ9cxfH0A3LMle31oTYGlQG3qYAytIijYw3e5UP56iHA80RRLurjhAHs+8RblKC0h1hxqHPoAwj5cLz7WUu5XkVGM0tqdzzw+CoFxenZI+8L351B6bhnK7k78BL2zz+r9pfUUAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 500,
            ap: 2200,
            dps: 445.95,
            speed: 5,
            range: 350,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 148,
            foreswing: 29,
            backswing: 12,
            tba: 60
          },
          stageStats: {
            actualHp: 2500,
            actualAp: 11000,
            actualDps: 2229.75,
            magnification: "500%",
            count: "0",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "121",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAATAAAtAAA4AABBAABGAAFWAABZAQBaAAB1AACEAACPAACiAAC+AAC+AADeAAD2AAAouQ0WAAAAQHRSTlMAAQUJDRIWGiAlKzI5P0VKUVpgZ25zeoGJkZacpKqwtMLIzdTZ3uLn6/D0+fz+/7r//wn/xu3/jv+g///z////Bl24JgAABFFJREFUWIWlV9mWqkgQ7GJfRURBFEQEZKkFHGfuOO10+/9/dQuX2wJqK10vnoNmkJEZlZG+vd08nCaA2988dxh1pjM/AeDGoc3/IB5Ifu7LP+DAGBFaGT/gwE8zkjpc73iglJDAhdSbA2vGhJD+HIAwyylAfw6MukQUAPp9ObBWQuMJCntyAMK8qAFwOmF7ATDakQHlMBN7caAM8BEAlVovgFMPag6J2acI5x7Up3D6XCh2FOMzAPSVHhz46ZkBLcLKeB0AyIsLA4Iz6/VGMsPVhQEtwlR8GYCz0y8AuHi9CGcZXoqgvwpARwH6AiBr85UiAIZheTPCVwCZIzFP5gAYTlCH4+kyv4oncOWYA1X8Ng3A8vLQ8crVukDXCdAqFOnKn450mXuQCCMopltGKUS4GX0SA4JFGs4tXWLvYciTIM5QN7QBkoWuqd6ZcaobFTde3cYokrl6OwdWGnlR/jAFWgyYlvY9WQFWGs5CWsAHr4+8ic7fHw+AFbSxt0py2OFCa5jHC8dUOPBQEVQHoma5ZUZIdQ6tSFVVMC5nk6HKP6OnWktKgEi13W43Gxq+/bXb/W2o0lPR58O6ebX5+Pz8/PhFjp///QW6qbO8wHVAOUVTFUkcJ3jz/nk4fGxJtT8c/v9X1dTWtgNk21vMJnpLFYLlB57ruDEim93+fVtTeN//Uy4Cp9k9ZrjMEYJ5ZAstXCcuivzUh+qrB6mnN+4Sa55tA6d2s60MRegoAWeteKCG9EcYUtHg9bDJjZHsqIWA0rnWvMuMRe87iqZOWRDkt3wDiOMVbLw/ddWW+jgXEhwZLFs7aKy/tRGsBgIq9fYs4T1EHYuqskbKzLc2gjBJrzNIxnIrA4EqLRkIA1mYI5KPOgC8lV2EXHcCRY7SVIwSYrzU3MSbUAdcG20AVg/QJX5zREjmGn+FwJgpQfNhjCG9/2gptxNQ3EsCZLvbHMuQB5b0hwaj0gUwswbx8Se53aoQEJzkTwLv9DYcTxHPjNOqArhhUFC7kkWvdp+Ob9EefClp+3HYb869yMPpgKUzQ3VjiOFywADNz4psoTULTAsYXuKrzfvh8Lm7KBqlrvjGj0KIcVEO2Vq1I3sktd8/+tJARRM4HPbbMwLOPVWkrksn2+ykDMCwrf4CcXKtoXMGF6OgpXRTlJVT/e7ixtnxtQbrFPZbAutnuHYrmMOVpTzwJ24SNa5BtfugBGgYglFYfwNL7eFkoxep4cvVUQe4SBN/YNDmPvEHRCgbI706NrEIbZmVfYji0bcWLYc3/A2Gumh4OYwn36+MgkepdjDS2SyCa9/kv5/sjOYnXYdEeZEHpvTUzgtEJ+mSwKkjP2ksQPGKGwCJ9cxfH0A3LMle31oTYGlQG3qYAytIijYw3e5UP56iHA80RRLurjhAHs+8RblKC0h1hxqHPoAwj5cLz7WUu5XkVGM0tqdzzw+CoFxenZI+8L351B6bhnK7k78BL2zz+r9pfUUAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 500,
            ap: 2200,
            dps: 445.95,
            speed: 5,
            range: 350,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 148,
            foreswing: 29,
            backswing: 12,
            tba: 60
          },
          stageStats: {
            actualHp: 2500,
            actualAp: 11000,
            actualDps: 2229.75,
            magnification: "500%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "122",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAANAgEfBAErBQNCCANcCwVyDQeEDweVEQirEwq7FQreGAz0Gw3Lvw2UAAAAQHRSTlMAAQMHDBATFxwgJCktMzc7P0hQV11haHF2e3+DiI6Um6SqsLi9wsjO09fb3+Tp7O/4/P/0////////////////cn1owwAAA9tJREFUWIWdV9l2okAUpLtZVVBAQFEQlU32BtwSM/P/fzWtJEZz5hzp9INP3rLuVrdkmO/HSSLPcyzLIgQBAAz1m3grZ7mYz2emaeiqCKkBZL+6vaYs8yx2R9QInF3W369wRNos4Dh6AKgzi6OlILjVAwCOdZaWgpY8UqgCFVEiSF71hLCRKQuJzOwRoG5WA7pCgtEWPyHkNk+HwM6KJwCcmHStAOPomQKOKFshOE9lJIX0J1StgNruGaBuvNtM914u0S2fk6hLVwIMHAx7EoGyvUmaJ4xsLgDRWas9iwHYoWZv0wceeGfw06RZD3smwQDIDbWFnzR3hNDcVOWS7wvQYQw0J8iqjkeVlThQKLebYMiGE+SfGKXN00sUgLxsuITHrZLahHKsOwwkyGaIr1mkkUVThe8HlQDjknQWhxP0Cw4MNy/xbrkheRSeTq1yV6UMyU6KRoqbqgnGtJUEvKTHpSuAkZ9t0rpcUJYBiMZENJwxJHvuq26TUGo94C13QBqBGDTNVrK7Mwd0Mov0wELXeYD8Infmyab3OnwSGK5jFQI00q1lVPpxaVMeCqinkQwFg+xmhXGD0yllD7hFEw75WfK12aUr0gGIqyrRtAeZTad0NRRWVbPe3GWBLIRHR4G1m7p5iK/r3QRS6CsD1fiHROc6yYHr30zBaX4AGIgcn3lvADJ/XWDbfgo0YcDOvFdxoPNoALBW3oWfjh1CPIZwsnVfxQuyIiKIJNUMuhYeLm/7PYGoViI7Xkf6CwBpGQSupk69OOsOZXv+OB7fj22bmYrlF6sXvYRaSi7ibpfdz+zpct6/fRzP5zKM8ipUXww0cUoYJ+vt3fPtT2+H08f5eDm3GFfR9OVGiTN/a4qT8GuE2/ZwuFyO58uxrfKtzr2cI8ANhywgi/BFoT0c30+EwL7wjFHvbUBaVH3+/vltTz5P+zpWaXSd0720us7A5c97NwXYH/UPv915ixjPw8ffv++3ScTEs1GEA0E1FukN4M/7vsZVHtr9XSPgh/JiV1xdBmnA6dA24cpSXtf//jhz42f4cwoOuAiXE56mfpAMwYNNSm2FzhyAHzqQUUrhVYnIMc8zck3zNMd1OaO8B8gijrl09NlyPlXNGJcWLcCU3PLtGLEciwA/ywqTMgUgLdbOl0UGkpt7lH8bGMhL3L3sUNmmJAeAWJpGPn4V6XGoSYphqr8zWQzDz1N/HRdlrP/GY13pDLzm6jd7X2fECeJgOJIVZXx7ytguatykbs9aQnXhehs/jJM0y4siz9JdQmYq2TpSPwJwbHUI0Y5ApGkSR4G/8Vzb/I+e/wOc0LbXscp/EAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 150,
            ap: 75,
            dps: 173.08,
            speed: 9,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 350,
            freq: 13,
            foreswing: 4,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 2550,
            actualAp: 1275,
            actualDps: 2942.36,
            magnification: "1700%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "121",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAATAAAtAAA4AABBAABGAAFWAABZAQBaAAB1AACEAACPAACiAAC+AAC+AADeAAD2AAAouQ0WAAAAQHRSTlMAAQUJDRIWGiAlKzI5P0VKUVpgZ25zeoGJkZacpKqwtMLIzdTZ3uLn6/D0+fz+/7r//wn/xu3/jv+g///z////Bl24JgAABFFJREFUWIWlV9mWqkgQ7GJfRURBFEQEZKkFHGfuOO10+/9/dQuX2wJqK10vnoNmkJEZlZG+vd08nCaA2988dxh1pjM/AeDGoc3/IB5Ifu7LP+DAGBFaGT/gwE8zkjpc73iglJDAhdSbA2vGhJD+HIAwyylAfw6MukQUAPp9ObBWQuMJCntyAMK8qAFwOmF7ATDakQHlMBN7caAM8BEAlVovgFMPag6J2acI5x7Up3D6XCh2FOMzAPSVHhz46ZkBLcLKeB0AyIsLA4Iz6/VGMsPVhQEtwlR8GYCz0y8AuHi9CGcZXoqgvwpARwH6AiBr85UiAIZheTPCVwCZIzFP5gAYTlCH4+kyv4oncOWYA1X8Ng3A8vLQ8crVukDXCdAqFOnKn450mXuQCCMopltGKUS4GX0SA4JFGs4tXWLvYciTIM5QN7QBkoWuqd6ZcaobFTde3cYokrl6OwdWGnlR/jAFWgyYlvY9WQFWGs5CWsAHr4+8ic7fHw+AFbSxt0py2OFCa5jHC8dUOPBQEVQHoma5ZUZIdQ6tSFVVMC5nk6HKP6OnWktKgEi13W43Gxq+/bXb/W2o0lPR58O6ebX5+Pz8/PhFjp///QW6qbO8wHVAOUVTFUkcJ3jz/nk4fGxJtT8c/v9X1dTWtgNk21vMJnpLFYLlB57ruDEim93+fVtTeN//Uy4Cp9k9ZrjMEYJ5ZAstXCcuivzUh+qrB6mnN+4Sa55tA6d2s60MRegoAWeteKCG9EcYUtHg9bDJjZHsqIWA0rnWvMuMRe87iqZOWRDkt3wDiOMVbLw/ddWW+jgXEhwZLFs7aKy/tRGsBgIq9fYs4T1EHYuqskbKzLc2gjBJrzNIxnIrA4EqLRkIA1mYI5KPOgC8lV2EXHcCRY7SVIwSYrzU3MSbUAdcG20AVg/QJX5zREjmGn+FwJgpQfNhjCG9/2gptxNQ3EsCZLvbHMuQB5b0hwaj0gUwswbx8Se53aoQEJzkTwLv9DYcTxHPjNOqArhhUFC7kkWvdp+Ob9EefClp+3HYb869yMPpgKUzQ3VjiOFywADNz4psoTULTAsYXuKrzfvh8Lm7KBqlrvjGj0KIcVEO2Vq1I3sktd8/+tJARRM4HPbbMwLOPVWkrksn2+ykDMCwrf4CcXKtoXMGF6OgpXRTlJVT/e7ixtnxtQbrFPZbAutnuHYrmMOVpTzwJ24SNa5BtfugBGgYglFYfwNL7eFkoxep4cvVUQe4SBN/YNDmPvEHRCgbI706NrEIbZmVfYji0bcWLYc3/A2Gumh4OYwn36+MgkepdjDS2SyCa9/kv5/sjOYnXYdEeZEHpvTUzgtEJ+mSwKkjP2ksQPGKGwCJ9cxfH0A3LMle31oTYGlQG3qYAytIijYw3e5UP56iHA80RRLurjhAHs+8RblKC0h1hxqHPoAwj5cLz7WUu5XkVGM0tqdzzw+CoFxenZI+8L351B6bhnK7k78BL2zz+r9pfUUAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 500,
            ap: 2200,
            dps: 445.95,
            speed: 5,
            range: 350,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 148,
            foreswing: 29,
            backswing: 12,
            tba: 60
          },
          stageStats: {
            actualHp: 2500,
            actualAp: 11000,
            actualDps: 2229.75,
            magnification: "500%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "7",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "122",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAANAgEfBAErBQNCCANcCwVyDQeEDweVEQirEwq7FQreGAz0Gw3Lvw2UAAAAQHRSTlMAAQMHDBATFxwgJCktMzc7P0hQV11haHF2e3+DiI6Um6SqsLi9wsjO09fb3+Tp7O/4/P/0////////////////cn1owwAAA9tJREFUWIWdV9l2okAUpLtZVVBAQFEQlU32BtwSM/P/fzWtJEZz5hzp9INP3rLuVrdkmO/HSSLPcyzLIgQBAAz1m3grZ7mYz2emaeiqCKkBZL+6vaYs8yx2R9QInF3W369wRNos4Dh6AKgzi6OlILjVAwCOdZaWgpY8UqgCFVEiSF71hLCRKQuJzOwRoG5WA7pCgtEWPyHkNk+HwM6KJwCcmHStAOPomQKOKFshOE9lJIX0J1StgNruGaBuvNtM914u0S2fk6hLVwIMHAx7EoGyvUmaJ4xsLgDRWas9iwHYoWZv0wceeGfw06RZD3smwQDIDbWFnzR3hNDcVOWS7wvQYQw0J8iqjkeVlThQKLebYMiGE+SfGKXN00sUgLxsuITHrZLahHKsOwwkyGaIr1mkkUVThe8HlQDjknQWhxP0Cw4MNy/xbrkheRSeTq1yV6UMyU6KRoqbqgnGtJUEvKTHpSuAkZ9t0rpcUJYBiMZENJwxJHvuq26TUGo94C13QBqBGDTNVrK7Mwd0Mov0wELXeYD8Infmyab3OnwSGK5jFQI00q1lVPpxaVMeCqinkQwFg+xmhXGD0yllD7hFEw75WfK12aUr0gGIqyrRtAeZTad0NRRWVbPe3GWBLIRHR4G1m7p5iK/r3QRS6CsD1fiHROc6yYHr30zBaX4AGIgcn3lvADJ/XWDbfgo0YcDOvFdxoPNoALBW3oWfjh1CPIZwsnVfxQuyIiKIJNUMuhYeLm/7PYGoViI7Xkf6CwBpGQSupk69OOsOZXv+OB7fj22bmYrlF6sXvYRaSi7ibpfdz+zpct6/fRzP5zKM8ipUXww0cUoYJ+vt3fPtT2+H08f5eDm3GFfR9OVGiTN/a4qT8GuE2/ZwuFyO58uxrfKtzr2cI8ANhywgi/BFoT0c30+EwL7wjFHvbUBaVH3+/vltTz5P+zpWaXSd0720us7A5c97NwXYH/UPv915ixjPw8ffv++3ScTEs1GEA0E1FukN4M/7vsZVHtr9XSPgh/JiV1xdBmnA6dA24cpSXtf//jhz42f4cwoOuAiXE56mfpAMwYNNSm2FzhyAHzqQUUrhVYnIMc8zck3zNMd1OaO8B8gijrl09NlyPlXNGJcWLcCU3PLtGLEciwA/ywqTMgUgLdbOl0UGkpt7lH8bGMhL3L3sUNmmJAeAWJpGPn4V6XGoSYphqr8zWQzDz1N/HRdlrP/GY13pDLzm6jd7X2fECeJgOJIVZXx7ytguatykbs9aQnXhehs/jJM0y4siz9JdQmYq2TpSPwJwbHUI0Y5ApGkSR4G/8Vzb/I+e/wOc0LbXscp/EAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 150,
            ap: 75,
            dps: 173.08,
            speed: 9,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 350,
            freq: 13,
            foreswing: 4,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 2550,
            actualAp: 1275,
            actualDps: 2942.36,
            magnification: "1700%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "037",
          enemyName: "まゆげどり",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 10000,
            ap: 3000,
            dps: 775.86,
            speed: 14,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 116,
            foreswing: 44,
            backswing: 72,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 9000,
            actualDps: 2327.58,
            magnification: "300%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-20.7s",
            delayFrames: "600-620f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 20000,
            actualAp: 1400,
            actualDps: 477.28,
            magnification: "400%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "20.0-20.7s",
            delayFrames: "600-620f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "023",
          enemyName: "悪の帝王 ニャンダム",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 99999,
            ap: 1800,
            dps: 116.63,
            speed: 2,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 6000,
            freq: 463,
            foreswing: 104,
            backswing: 29,
            tba: 180
          },
          stageStats: {
            actualHp: 199998,
            actualAp: 3600,
            actualDps: 233.26,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e2009Data;

