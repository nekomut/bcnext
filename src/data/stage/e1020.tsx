// Stage 1020 Data
import type { StageData } from '../../app/stage/types';

export const e1020Data: StageData = {
  eventId: 1020,
  eventName: "狂乱のキモネコ降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 20,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "キモフェス 超激ムズ",
      baseHp: 400000,
      width: 5600,
      enemyLimit: 12,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1106",
          treasureName: "狂乱のキモネコ(94)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 3000,
            actualAp: 450,
            actualDps: 364.8,
            magnification: "3000%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "10.0-11.3s",
            delayFrames: "300-340f",
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
            actualHp: 3000,
            actualAp: 450,
            actualDps: 364.8,
            magnification: "3000%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "10.0-11.3s",
            delayFrames: "300-340f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 1600,
            actualAp: 600,
            actualDps: 1125.0,
            magnification: "2000%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "078",
          enemyName: "狂乱のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAACAQIFAAoEAwUEAwMHAwoGBgYHBggJBA0IBQkJBQsMBRIKCAoMCwwUBx8XBCskAEwoAFssAFsxAGkfHR83AHg4AHogICAoGTNCAIxIAJQoKCgpKSkqKSkqKSkuJjVRAKJQAKZYAKlaAKsxMDEAAP5hALU1MDhkALd/AH9qAcNsAMJvAMU4ODg5ODt0AMh4AMiEAMl/AP5HRkdTU1NVVVVcXFxdXV7/AP9xcHGOjY60tLTR0dHh4eHv7+/9/f1kNC0kAAAAQHRSTlMAq+T8vu+aN9kPJnpdTIrJunSvmexgpP8nkoMJUj+U2nIEY1SrAUbDOAIGLiVw7xoNBQLVlgO76AH9/f//////hWREdAAAA+JJREFUWIW1ltuSskgQhJUGBFRgwHGUUREdD+CJ1tlBQPH932qzGv/ZvVkVIrZCgxvz6+ysottG43+rxTk8UoXhopY8DCLOIxTnx3N1xDkIoijGJ44jHgXHRUXEguTxoSxwCFFxfZJvN6gtCHHMo+O5yvpBFB+22816vVyvBaKSB+H/IOTz9/cSgSiC8GX/d/2S9FR/CC+uf6T4tiSH/g31Pl+uBYG/4mFx5JzWX85nM1Kbpvc2nS3XG8rylV2cYeBw2Kzns+nUsx3VVV3UbL4st/GcsIhgQOi9oevvbQflr7xfwvEZIAxEAKTvO0nmW5blZ6ehN33VQ8DjX721z6jSbO8Mfz3wJwPFo8N2OS/1SV7cUMUl9fvD6Z3wpBVnRLiBAdKn19stx/eaX/NT3wMBvYg5fxwBFwDP7dsJtEWWA5Jdb9lKWKB5CB7uoXTwDoCfk/1rkecXcpEIC0tYeBzjgnMApp7r9LJC7D/f50AVqf2PhYd7CCjEfwHQgxSAa2qhlTMBeBxCcA/RUZAhEJfsmt+K6yWxXAJQH6KHABEi2tiX9nlRFLdrlmfF5ZIy2/XeSgcPAWd+H0TXYml+uRQIMS/y7ENxXJpGauRDwIKXrwLtgaVZDgL8px/M6rve/b1+CAiP4jChSbDYxz4tZxl6R8zi+mkG5/txAgs2Q31QMabYMPBGO3jWhfM5EOcBLDjQSwqKno4rXqcXZpmGudyEq2Bh23bIidQfen/m6NmREEYlYT6VoEPZTGGSO53eDcTRk/cZe+BlDBqzPG+ILDRFIv/lGPLHLxNZKK+17Vpmzgwno81sSZr9Xg/8+f0SBriWQWgyc4nD3Wamps032624Jl852hchIeJDk7VxN65lpWNprYO4Il84VO8M3I66zNqQDaCWNSMWch68fEGGgW6xNv4iGJpsNCUDnngVPUwYGjP1Y9CSmjoAxDxW+7PTUpiKR1cxdVVqVVHeq6uwpt5odJROox6gw5gMQFvpNkylDqCtKBYAJlZv1wKoiobsRIDkonJBKWNhHTOA3XRqAGRNxcK6hSAoyOoAS25DZ2jNmgBDU0nXkkxqZY0MWr12t9dudHtYvNOrAYASjFJbCwDRwJ802j2MwKgOwPRbhq/qE38A2H5UHTDxDX31pX+tMI2jfXUHpNRXKwMMAlR38AklIK3TpEGAcWXAgJSTUzfZESCpDhiTcnLaJaOagBEpd8lESOsAdqTZJV/JoDZgQMLTj14P8PlNynGS/HzWBPyQcpyk37UB33+hl0lKXawDGIj+AzCqCRgnI13XjR/xqAMYnVS12ZT3e7nZVE31NPjPX/4Nn/q/fvfMF0QAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 3990,
            dps: 2546.81,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 3990,
            actualDps: 2546.81,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "078",
          enemyName: "狂乱のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAACAQIFAAoEAwUEAwMHAwoGBgYHBggJBA0IBQkJBQsMBRIKCAoMCwwUBx8XBCskAEwoAFssAFsxAGkfHR83AHg4AHogICAoGTNCAIxIAJQoKCgpKSkqKSkqKSkuJjVRAKJQAKZYAKlaAKsxMDEAAP5hALU1MDhkALd/AH9qAcNsAMJvAMU4ODg5ODt0AMh4AMiEAMl/AP5HRkdTU1NVVVVcXFxdXV7/AP9xcHGOjY60tLTR0dHh4eHv7+/9/f1kNC0kAAAAQHRSTlMAq+T8vu+aN9kPJnpdTIrJunSvmexgpP8nkoMJUj+U2nIEY1SrAUbDOAIGLiVw7xoNBQLVlgO76AH9/f//////hWREdAAAA+JJREFUWIW1ltuSskgQhJUGBFRgwHGUUREdD+CJ1tlBQPH932qzGv/ZvVkVIrZCgxvz6+ysottG43+rxTk8UoXhopY8DCLOIxTnx3N1xDkIoijGJ44jHgXHRUXEguTxoSxwCFFxfZJvN6gtCHHMo+O5yvpBFB+22816vVyvBaKSB+H/IOTz9/cSgSiC8GX/d/2S9FR/CC+uf6T4tiSH/g31Pl+uBYG/4mFx5JzWX85nM1Kbpvc2nS3XG8rylV2cYeBw2Kzns+nUsx3VVV3UbL4st/GcsIhgQOi9oevvbQflr7xfwvEZIAxEAKTvO0nmW5blZ6ehN33VQ8DjX721z6jSbO8Mfz3wJwPFo8N2OS/1SV7cUMUl9fvD6Z3wpBVnRLiBAdKn19stx/eaX/NT3wMBvYg5fxwBFwDP7dsJtEWWA5Jdb9lKWKB5CB7uoXTwDoCfk/1rkecXcpEIC0tYeBzjgnMApp7r9LJC7D/f50AVqf2PhYd7CCjEfwHQgxSAa2qhlTMBeBxCcA/RUZAhEJfsmt+K6yWxXAJQH6KHABEi2tiX9nlRFLdrlmfF5ZIy2/XeSgcPAWd+H0TXYml+uRQIMS/y7ENxXJpGauRDwIKXrwLtgaVZDgL8px/M6rve/b1+CAiP4jChSbDYxz4tZxl6R8zi+mkG5/txAgs2Q31QMabYMPBGO3jWhfM5EOcBLDjQSwqKno4rXqcXZpmGudyEq2Bh23bIidQfen/m6NmREEYlYT6VoEPZTGGSO53eDcTRk/cZe+BlDBqzPG+ILDRFIv/lGPLHLxNZKK+17Vpmzgwno81sSZr9Xg/8+f0SBriWQWgyc4nD3Wamps032624Jl852hchIeJDk7VxN65lpWNprYO4Il84VO8M3I66zNqQDaCWNSMWch68fEGGgW6xNv4iGJpsNCUDnngVPUwYGjP1Y9CSmjoAxDxW+7PTUpiKR1cxdVVqVVHeq6uwpt5odJROox6gw5gMQFvpNkylDqCtKBYAJlZv1wKoiobsRIDkonJBKWNhHTOA3XRqAGRNxcK6hSAoyOoAS25DZ2jNmgBDU0nXkkxqZY0MWr12t9dudHtYvNOrAYASjFJbCwDRwJ802j2MwKgOwPRbhq/qE38A2H5UHTDxDX31pX+tMI2jfXUHpNRXKwMMAlR38AklIK3TpEGAcWXAgJSTUzfZESCpDhiTcnLaJaOagBEpd8lESOsAdqTZJV/JoDZgQMLTj14P8PlNynGS/HzWBPyQcpyk37UB33+hl0lKXawDGIj+AzCqCRgnI13XjR/xqAMYnVS12ZT3e7nZVE31NPjPX/4Nn/q/fvfMF0QAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 3990,
            dps: 2546.81,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 3990,
            actualDps: 2546.81,
            magnification: "100%",
            count: "4",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "078",
          enemyName: "狂乱のキモネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAACAQIFAAoEAwUEAwMHAwoGBgYHBggJBA0IBQkJBQsMBRIKCAoMCwwUBx8XBCskAEwoAFssAFsxAGkfHR83AHg4AHogICAoGTNCAIxIAJQoKCgpKSkqKSkqKSkuJjVRAKJQAKZYAKlaAKsxMDEAAP5hALU1MDhkALd/AH9qAcNsAMJvAMU4ODg5ODt0AMh4AMiEAMl/AP5HRkdTU1NVVVVcXFxdXV7/AP9xcHGOjY60tLTR0dHh4eHv7+/9/f1kNC0kAAAAQHRSTlMAq+T8vu+aN9kPJnpdTIrJunSvmexgpP8nkoMJUj+U2nIEY1SrAUbDOAIGLiVw7xoNBQLVlgO76AH9/f//////hWREdAAAA+JJREFUWIW1ltuSskgQhJUGBFRgwHGUUREdD+CJ1tlBQPH932qzGv/ZvVkVIrZCgxvz6+ysottG43+rxTk8UoXhopY8DCLOIxTnx3N1xDkIoijGJ44jHgXHRUXEguTxoSxwCFFxfZJvN6gtCHHMo+O5yvpBFB+22816vVyvBaKSB+H/IOTz9/cSgSiC8GX/d/2S9FR/CC+uf6T4tiSH/g31Pl+uBYG/4mFx5JzWX85nM1Kbpvc2nS3XG8rylV2cYeBw2Kzns+nUsx3VVV3UbL4st/GcsIhgQOi9oevvbQflr7xfwvEZIAxEAKTvO0nmW5blZ6ehN33VQ8DjX721z6jSbO8Mfz3wJwPFo8N2OS/1SV7cUMUl9fvD6Z3wpBVnRLiBAdKn19stx/eaX/NT3wMBvYg5fxwBFwDP7dsJtEWWA5Jdb9lKWKB5CB7uoXTwDoCfk/1rkecXcpEIC0tYeBzjgnMApp7r9LJC7D/f50AVqf2PhYd7CCjEfwHQgxSAa2qhlTMBeBxCcA/RUZAhEJfsmt+K6yWxXAJQH6KHABEi2tiX9nlRFLdrlmfF5ZIy2/XeSgcPAWd+H0TXYml+uRQIMS/y7ENxXJpGauRDwIKXrwLtgaVZDgL8px/M6rve/b1+CAiP4jChSbDYxz4tZxl6R8zi+mkG5/txAgs2Q31QMabYMPBGO3jWhfM5EOcBLDjQSwqKno4rXqcXZpmGudyEq2Bh23bIidQfen/m6NmREEYlYT6VoEPZTGGSO53eDcTRk/cZe+BlDBqzPG+ILDRFIv/lGPLHLxNZKK+17Vpmzgwno81sSZr9Xg/8+f0SBriWQWgyc4nD3Wamps032624Jl852hchIeJDk7VxN65lpWNprYO4Il84VO8M3I66zNqQDaCWNSMWch68fEGGgW6xNv4iGJpsNCUDnngVPUwYGjP1Y9CSmjoAxDxW+7PTUpiKR1cxdVVqVVHeq6uwpt5odJROox6gw5gMQFvpNkylDqCtKBYAJlZv1wKoiobsRIDkonJBKWNhHTOA3XRqAGRNxcK6hSAoyOoAS25DZ2jNmgBDU0nXkkxqZY0MWr12t9dudHtYvNOrAYASjFJbCwDRwJ802j2MwKgOwPRbhq/qE38A2H5UHTDxDX31pX+tMI2jfXUHpNRXKwMMAlR38AklIK3TpEGAcWXAgJSTUzfZESCpDhiTcnLaJaOagBEpd8lESOsAdqTZJV/JoDZgQMLTj14P8PlNynGS/HzWBPyQcpyk37UB33+hl0lKXawDGIj+AzCqCRgnI13XjR/xqAMYnVS12ZT3e7nZVE31NPjPX/4Nn/q/fvfMF0QAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 3990,
            dps: 2546.81,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 47,
            foreswing: 8,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 3990,
            actualDps: 2546.81,
            magnification: "100%",
            count: "0",
            spawnTime: "126.7s",
            spawnTimeFrames: "3,800f",
            delay: "21.3-21.3s",
            delayFrames: "640-640f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1020Data;

