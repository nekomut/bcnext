// Stage 1359 Data
import type { StageData } from '../../app/stage/types';

export const e1359Data: StageData = {
  eventId: 1359,
  eventName: "熱血！リレー大会",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 359,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "400mリレー 第1走者",
      baseHp: 25000,
      width: 5700,
      enemyLimit: 20,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "50000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "657",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQECAgICAgIDAwMFAgIIAQEEBAMKAgIEBQcFBQUHBwcfAAAgAAAoAAAqAAEOEhJIAABIAAAYFxNQAAABGUwVGxsZGhwcHBw5EA9nAAEiICAhISFDFxclJSWBAAAhKSsrKysIPD8tLSyXAQFoFhUvLy8wMDAyMjIyMjIBO4Q2Nja0AAGaERE7PD48PD1KQgU+Pj7YAABCQkJDQ0lWQS6DLC3xAACmISApUXdKS0n7AABXVVVXWFh1S0tTVHlrV0OzOTlgXV1JaWonarFkZmx2Yk84ca5paWrAREOiVlWAZmF/eQhRfX1wcG/VT1BIiMl+fn+YeniWkQOGhob9WluMjI6RkpOqohr/aWiyqySenp60rVmSsrKqqqrBuirAvGK2tra/v77Ex8jQ0NDX1tnd3d7l5eXu7u7y9vb5+fn///9Gd4VkAAAAgHRSTlMABAoOFRsiLDI5QlNla3+OzbpJWYf/da2gwuqXp/HY4P/jttRw7vf8//99irb///7H8u//45b/////0GpSuv/v///+3P/J/6by2P/////+///s///y//////79/7z//////////////////////////////////////////////7IppNwAAAVLSURBVFiFpVeLX9pWFEZQ8EHwAeEhKm71QdcaOtEG3VoxOnSyhlhL2kgrLm1sSlojqUmAQO6/3psHleD6W7J98CMhN+fLOeeee74bn88j0nsTXk2cOFUzkclgIBAY9f8nez8n5otYdm11bW31wUI85JkgKPCFSqVcLpfgt1TEFrwSTDbrxVIf5Upl0SsB0nxZukO5mPZK8EjeKQ94UIh6JXjWxCp3HlSwoFeC02Z+gKC86sk4POoLcEJ+IITSrBuzafsEQf2+kHBVtKbQ/BRjLgjm8Disn2AwxPLwj0gXynD2jFKAP/kpFwQBuZn+ebWQz57gIV9U2U0/WMtisBazWKHsLodbLwvlUrFwspPbnJ4VVny+0WAoFBwdC0VT827skbVKaacuNJtNWe1IhCPqMRf2E1hln/y7KQkcxzJMG+ABN08dwE8V7CknqhqA0EWKWBnxZj9ZyBNyF5ANaI63AMC9doHYBm88W1B6QOM68CzlkWChDSyIpAx68Mh77CEHlrki91CBEeFZJ+7J3s9YBC2SUkjS8KDnrQOMnNoRaGSX6erwpDv971aDeGITADknWcF4bCFhtc+gWQfSayFtAgcUbzmECFGD9m03HWQIE3tG8Eb+QJfzLAMGdnlahgnQ2zxPeVwIFt625sn4L49Wkvip5NF0JD4NkVlcyiEIEk7mZtC0cWHcNUFg493Jyftq9V31nQHr+P4k4p7g10/V6pdPTnypIq4J/P+bYKOK7VT/cqJ64kYMbKTXKYKgKIqm7kDMTLonCNBAUZ21DDr/EEG/PPzDEzTJAlFx2uvd5H2ChK1QiaWhgSgPu+GQB+DxfYKtdfMwRv8xNICIoGGG0GZJUpB65pLYvU/wVo8EQuPBFHh7d81UvZgMeNjLgYRCrHOc2ROO7y+IA4k4Zpizs8auL2KnOD1j/CZVnYe9vIOaoMWG4QJ9T9CQ9cOPnz9ff72+JBOLGfOSnzSjedzReNhJOYsAlYUu9IAdTnX68PLr7c3Nze31x8tDth32jY4FEjAauKXd7bY4IEm8TSAKRjz80KYgQirtszM4gHMd9fZcPfzz1fmrc3nXl4n6joEiAJTtEwhmRiVnIQRpGJYMpa8nwFEZffjiTe1NrfaCWDg+DZ5CRZFome4TmHOqOks53TMnl2MN4ePQh7UPtVrtw5vnzx8KeuZY4ihKEb8TNGSjFJ2VZGoXI6/jQID2XOu8bvTuRlutPWXo+st6nXn9mnAQ6M5KMrWrlRNFgu/g0AuRMzyBrh4uY/t5DCsU8tiyg2CokiztasgyCWhLewQeKrKKZi8urlRVqV9d7GNZB4Gzkizt6tFEVzfSCRgFzQFFy7FdQMHUAqIFevLFMpotLNtJBIxjb2Zpl97VQIs1NRBvCFSD40wZ6miabgnSRj7/nYB3vvRs9VcZJDDu5loqARhjblSA0/3BxvL3aQSCs5LG+zf1aKNQgUYRXc10huZxRmGtQQUrL8NKNN2Vws5SnDiQrZt40Wo5KpDMCPScJuXsdtBBYQiSaG542umh9YhwrAQfrktE32HVikZkWbl/BV1cXNzc3DuG2JsfWk6/SZtEbHv70WPC9hfolLUbYPsXADceuIPjjW9kKraEornZVGo2k0Oplp0zHjjxxPdDTESn5qLRSCwWi0enkixnBq0ZRTkA2u3m7nd5k9w+Otp+Ru+17U2BGYq7jdHIXBxGgydmU4kMXD8Ne1cEZMKtmE2GkXA8nkwmF9Jx5JlA8qKiSDzNKh606A5HDI5HksnpGYKUw2OjHvcmfiQ5s7Q0PwORmV/KpBKRH73cfAPJm0z1AC0nPgAAAABJRU5ErkJggg==",
          traits: [],
          baseStats: {
            hp: 10,
            ap: 1,
            dps: 0.03,
            speed: 0,
            range: 50,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 1000,
            foreswing: 1,
            backswing: 0,
            tba: 500
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 2500,
            actualDps: 75.0,
            magnification: "250000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            }
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
            actualHp: 200,
            actualAp: 30,
            actualDps: 24.32,
            magnification: "200%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "003",
          enemyName: "カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEEBAQEBAQFBQUGBgYHBwcJCQkLCwsMDAwMDAwNDQ0RERESEhISEhIUFBQVFRUXFxcfHx8fHx8iIiIjIyMnJycoKCgzMzM1NTU2NjY5OTlDQ0NEREROTk5QUFBQUFBbW1toaGhpaWlvb297e3t/f3+Dg4OLi4uLi4uSkpKampqioqKqqqq0tLS8vLzDw8PKysrR0dHZ2dni4uLo6Ojw8PD29vb7+/v///////9oT8HuAAAAQHRSTlMABQwVHdz/JS/nO+9KnWewWHKK/3u9zJTw5//ZqNC6/uX/ydbv/v//5v//8f/2//7//v7+/////////////wD/CarcowAABD9JREFUWIXtVmuTojoQXcBR11VU1HHWUdDhjTxCCBBIcvn//+oG1BHd8bG1X+eUVQa0T053ujv9479/xI9vgm+Cb4JvghPBbYjinR+fgCRP/olBkA1dvmSQhnJfeJqgo6JUH7b+L/SXuqE8L2rolCxRB2f7gRrgZC09ay9MA1rRaN2p1zU6a0AYXD6tQFQAY1XpTKXOYDKdTuW5UZDcVgb9JylEJWZVVWW6snD2QRDsDdNzbdtx9OXgZiAFUer1e5JYozPyacUqhjQTE8oYLbNwZ6dlWQQbeTj8SofQk5fqZrNR1+ulslxvzYRwDTTxy6oBo8g0c/4Fne12M+/3Or0Lf8SJ6sRplmUpSiBMUA5tL864ipJVR7DUz7iq3LUs0/hQF4v3zfTzVERZb3Y8g2IIEG2/4bvXmnwPY2AnsRmmSJdP+id6dmHeNquKtDg/Ei8pYArjJClxAUZHgp6KbtlzE3fl0c+faZLD1Q5gkns7Px4fHZjvyU0CRrxV2PKF0VSbaah0Z6tor5wEZDf35yjS8uKZprHlY8uK42OuC/IdAV+rKrkLZWHITVLxOkF/ZX4CcQ4EdZ083rP5XL6iQBEOEUSPCSqCYF6UhHKQAuMsTWFkzDmBMNSB/4iA54JvuZZpe77v86qyzJ3tertRXe3SGoLWMd/aP/RwCa2EA1pemkOTF9a+CcFQLyL/AQFjyMa8uO2sKArsgZIEb24cG1OhjkBAovCRAuLGjDHs2i6H5WWJKs+V5bTHBfQXXmA+UlDlu6iII1zinAP6uTMRBFFsznCgKPJof5+AMTjTwtXMbWJNAYRNrzy1IZEn4gMFxO2urG5Xy+sH7KaH6J3xkCDXuprd7c6ahEVupg8u7OsWft8FOOuaXMGsbrQsjq6vh4cE1OXGswMBYwAGc+GK4IELxa7bYJXWBRDGzvCqIU/29J59la1mDYFV8pwmfqz3rwiGzv1aSA72K9hUEgB674pgoBf37Bng7tcEYRSFYQSRPpQkSWzFofeR37OnISfQLN80fc6w84rgVVXVdWt6kNT0ngIa8TzMC2yHOca5tQPIjFHij85nKS6TuzHITRsC3zYtXkm2udMsjTcGa9xK53oYuOcEjvg9l+IDMpQAAGJgtPL5eAxf9L2TF+QyU3htM9TKx/4Hbt6T8i+6e7Y5n2bnGEXkple+sC9WhzWNWvMOb0uNIbZ2Yd6moKiRRlPcvnmaeSPYtEvymEoMe9ouSLKC1Cgx4nc4rW9HYLtBBPiNDOM4BlGwd1TlYtSR1gmrt2AkNcbvpt3A0n6/vhplrZhk7mKs8SHJ5W3dHMuTQedyyKmb0lG0Iy+jDHEkcDvvDz7yOuKMBvOBnpOSEEp4P/pzzup/xKhBYiiKkRyW2/lwsrDDGr4xkl/dw3Ird8Q/GMT56/v7b463Xy8vv94O4MuXn7+OOCx/cryMR/JnFv4PI13Ci9FVptcAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 44.78,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 67,
            foreswing: 8,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 89.56,
            magnification: "200%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "003",
          enemyName: "カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEEBAQEBAQFBQUGBgYHBwcJCQkLCwsMDAwMDAwNDQ0RERESEhISEhIUFBQVFRUXFxcfHx8fHx8iIiIjIyMnJycoKCgzMzM1NTU2NjY5OTlDQ0NEREROTk5QUFBQUFBbW1toaGhpaWlvb297e3t/f3+Dg4OLi4uLi4uSkpKampqioqKqqqq0tLS8vLzDw8PKysrR0dHZ2dni4uLo6Ojw8PD29vb7+/v///////9oT8HuAAAAQHRSTlMABQwVHdz/JS/nO+9KnWewWHKK/3u9zJTw5//ZqNC6/uX/ydbv/v//5v//8f/2//7//v7+/////////////wD/CarcowAABD9JREFUWIXtVmuTojoQXcBR11VU1HHWUdDhjTxCCBBIcvn//+oG1BHd8bG1X+eUVQa0T053ujv9479/xI9vgm+Cb4JvghPBbYjinR+fgCRP/olBkA1dvmSQhnJfeJqgo6JUH7b+L/SXuqE8L2rolCxRB2f7gRrgZC09ay9MA1rRaN2p1zU6a0AYXD6tQFQAY1XpTKXOYDKdTuW5UZDcVgb9JylEJWZVVWW6snD2QRDsDdNzbdtx9OXgZiAFUer1e5JYozPyacUqhjQTE8oYLbNwZ6dlWQQbeTj8SofQk5fqZrNR1+ulslxvzYRwDTTxy6oBo8g0c/4Fne12M+/3Or0Lf8SJ6sRplmUpSiBMUA5tL864ipJVR7DUz7iq3LUs0/hQF4v3zfTzVERZb3Y8g2IIEG2/4bvXmnwPY2AnsRmmSJdP+id6dmHeNquKtDg/Ei8pYArjJClxAUZHgp6KbtlzE3fl0c+faZLD1Q5gkns7Px4fHZjvyU0CRrxV2PKF0VSbaah0Z6tor5wEZDf35yjS8uKZprHlY8uK42OuC/IdAV+rKrkLZWHITVLxOkF/ZX4CcQ4EdZ083rP5XL6iQBEOEUSPCSqCYF6UhHKQAuMsTWFkzDmBMNSB/4iA54JvuZZpe77v86qyzJ3tertRXe3SGoLWMd/aP/RwCa2EA1pemkOTF9a+CcFQLyL/AQFjyMa8uO2sKArsgZIEb24cG1OhjkBAovCRAuLGjDHs2i6H5WWJKs+V5bTHBfQXXmA+UlDlu6iII1zinAP6uTMRBFFsznCgKPJof5+AMTjTwtXMbWJNAYRNrzy1IZEn4gMFxO2urG5Xy+sH7KaH6J3xkCDXuprd7c6ahEVupg8u7OsWft8FOOuaXMGsbrQsjq6vh4cE1OXGswMBYwAGc+GK4IELxa7bYJXWBRDGzvCqIU/29J59la1mDYFV8pwmfqz3rwiGzv1aSA72K9hUEgB674pgoBf37Bng7tcEYRSFYQSRPpQkSWzFofeR37OnISfQLN80fc6w84rgVVXVdWt6kNT0ngIa8TzMC2yHOca5tQPIjFHij85nKS6TuzHITRsC3zYtXkm2udMsjTcGa9xK53oYuOcEjvg9l+IDMpQAAGJgtPL5eAxf9L2TF+QyU3htM9TKx/4Hbt6T8i+6e7Y5n2bnGEXkple+sC9WhzWNWvMOb0uNIbZ2Yd6moKiRRlPcvnmaeSPYtEvymEoMe9ouSLKC1Cgx4nc4rW9HYLtBBPiNDOM4BlGwd1TlYtSR1gmrt2AkNcbvpt3A0n6/vhplrZhk7mKs8SHJ5W3dHMuTQedyyKmb0lG0Iy+jDHEkcDvvDz7yOuKMBvOBnpOSEEp4P/pzzup/xKhBYiiKkRyW2/lwsrDDGr4xkl/dw3Ird8Q/GMT56/v7b463Xy8vv94O4MuXn7+OOCx/cryMR/JnFv4PI13Ci9FVptcAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 44.78,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 67,
            foreswing: 8,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 89.56,
            magnification: "200%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 500,
            actualDps: 99.3,
            magnification: "1000%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
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
            actualHp: 1250,
            actualAp: 25,
            actualDps: 57.69,
            magnification: "25%",
            count: "0",
            spawnTime: "25.3s",
            spawnTimeFrames: "760f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "100%",
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
          enemyId: "012",
          enemyName: "クマ先生",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAgECAgIDAwMFBQMHBwUKCQgKCgkNDAYODw0REQ0TExEVFhMXGRMYGBUcHRgfIBwiJB0pKSctLSkwMC02NjU3ODU7PDc/QD1CQkBDQ0JKSkhTU1FVVVNXWFVgYF9lZWRra2lvbm50dHJ4eHh6eXmFhYSHh4aRkJCbm5qdnJynp6apqamvrq60tLS7u7vEw8PKysnR0dDY2Njg4N/l5eXq6uru7u709PT4+Pj8/Pz///9+qm8/AAAAQHRSTlMAAwmGwBA4qWkbJOAULJo5RoD/UmTOaXif84ngrp2Cx6z4u8X34NDr/9n/4v/v//70//z+/v/+/v//////////OKBV3AAABAFJREFUWIWVl+t6ojAQhoVd2sJqtepKZXXV0nqIAZRjAiG5/7vaBGjdynn+4cO8Zma+fAmDQWVIQ1X+ehjO/v6dydUv1oSqv5mGVjwohhWE55nUI182LJx4q2H+NPpIGENvwx6A0Ykwmp7HsqqqmjYRALLX2vNugHPKWAqe1+Z+fzqd3iMWXwylB0A1Mf9P6ESER5oSSu2V2iN/IC0OgkAZZSJIlCCzF2CgbRBLXSfJ8ilcgvTSawqDyZmyaDl1RTpvxvSYRus+QpB0n7HkuAt5Pk1p7KOeUxhusSgdhd7VBkfoRXyq1qQHYMzHSJEDoL2bTqfQBsAjnt69CdLCZcQF14jQECyPmJIQwqBHE+R1RK8wDMUQ0c6ljFyxDXtoWTNjDHAEUIJ9CIDjX4/86WPcuYK5RTEIiAMAgD5BV9v2A96Il641DLeI0QBcEcYJF3KCAkeA7N9dBylUxNJYDMG2Ia8BinYybznrli8bQa7gOPQ9PwxRQrMtEbx3nMNoT1hVhKCbGKXFhVYCELTmXbQkWlgZuKOWhIwrIwZo38EUJN3L3y/VEYO4y4YqKkiT0goSEPtGexO4IfP/pq5XBYjbjY3PIFsADKoA1GrVkpJXkABcBWCB0TaH0SkV3cOg3IOY/9ZqbMJKRISwPEsBoJcWLXEryV4O7LIaBYC1mbNqJvUAyFdA9qNGwPicJ3pOGYAh32RtNUysAnAt5fPNJHZp2FiDNM97WAmIoBhQ0qil7ESqAwRQrI6em7xVXof1AC9v7GXeAFC2uB7gOvlCmjbUsJgin0IZcM37g5sOGO3TDv2yDqiTbVBKTg1K4HejPLEsJH7LKcy6yVU+dSQ6fk8gICp6sagHTD4BCJSsnTtaATfqAbNCiLe3bxGBojy8rQfML1/rLXm7D4qqErMdQMuWRp33oiqy77AC6twpiVKwKzRCzx0AzLvvIvnYFCqlVheAvwu/A2JzhdoBX1Pgt8y7JqDtSuiANgPGn0pk6P1uDNE6t0sSpQ2AYi8I3zjeHQyeboR8jtTdWId6QOGpfBnFwXDT82Wm+67LTXWs/64HcD+IQkosl18wxRFJXD8K/ezGfB7rzp9NwC1ReaoHyGv/40DClYnz/RxtjPX6Nft8OY303cvYPPCt2OCqkn4w3tBlPj/bTjawuSTLWV3cS2fPmjR5afnweXgeLaz9SFn88bLZa4PitMJbReFOJLWdrdJQGuoLeaC8BryBXmZ/2XnZ53tD4lnyK+9ccsodXNyautxN/g8BoBc9/1fVjBttqBoQsOitOIP41bXD1eR78LsauX0tz6xGK67Kl+eW+6qpRTxsvM1IURS5Yx/kh6cfj7vlz1v8Wv76+fj4/OPpoYz4ByXseuoTKbpdAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1000,
            dps: 280.37,
            speed: 4,
            range: 350,
            rangeType: "範囲",
            kbLevel: 10,
            money: 2000,
            freq: 107,
            foreswing: 8,
            backswing: 8,
            tba: 50
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 2000,
            actualDps: 560.74,
            magnification: "200%",
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
          enemyId: "009",
          enemyName: "パオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIDAwMFBQUFBQUGBgYGBgYHBwcJCQkJCQkJCQkLCwsMDAwMDAwXFxcfHx8gICAgICAhISEiIiImJiYrKysvLy8wMDA4ODg4ODg5OTlERERERERLS0tOTk5QUFBbW1tiYmJpaWlxcXF1dXV8fHyBgYGKioqYmJigoKCsrKyxsbG3t7fDw8PKysrR0dHa2trh4eHn5+fu7u709PT4+Pj8/Pz+/v7////////NsdqHAAAAQHRSTlMABQsRGR8n5j41R1ByhVuV8GW89XSiz/OWieKruNfF947R/tz/7v7m///u/vL//v///////////////////wD/XBJAfAAABBBJREFUWIXtVtl26jgQDBAIxEBuFgdCCAyYRUZ4wbJkS7KG//+rkXcZ45A58zIPKV50Du5Sdau3u7//I+5+CX4Jfgn+LwTfo93T3j7+kvh47t+3bnxcR0fTjYODsASy94vpuPuvOFoD/YAoF+cEghHvuJr2f07R0lYuy6wz8OBkjHo/pGiNDRydL8FDe/F8/1N7UbOXiPBxrrW/t+10Ou3HBvtYhb8ffsfQfZsvFp/vNj/XPcjiSfbj5kAM5jYOAt8GDm2wlwzY6Deob3XnJ564SgDwmySchffZqRt3B9pw+HTkuU6wOfEGgogdxnXXF/sjhEuv+IphGzVq8OfdS9ePhEVRCIh6Dw6bCPjhuRLH3txN5GJQCZ3IFNSFCPdFzaf21E7d9U121eV6TpCvnkLwuM8uvkrAHVDPKrYfqAI88Q0BWb5C1YnkzA+PJUE/F3Am4ErY6G7iqAoiRill1nNh35m6+f/URHUCESCmKGDI8zzXsd4KB96OReiFC5szOAMPuRA8cD6yd2yND15pRKHbmDylDzSkEdKzkhysECwdF/haFKoIHcuyXLxIy6H14VQiF4Lghr0gPmUhwqs0mQcGQWr6EXAzCDIClHJqpJk0nO23O8UGwaYSVFR6juORfdoTuv3B2FBc8ODtINKQMxqWmXS/UgjQBYGgDYTiqBWtoEJwkcz0SnNPCexhkclbJQZB9RWYjfNjFIdPIXD0vKC1rXIpt9zyq0h4ZWZGlBKPKQTLTy0dlo+qgjMCQckga0OkbSUitgnh2g5KAss7LEaJC4ZKwG2zLI0TlGUUym4gELBxiHYbK39lKQ47xqjmQlwOThY3mdd+THnCIgReHANvsykkoOXio9++QnDOM1MQM60sApEH428iBidF2/b1fF3ob6v1Q00v8doHDs+VbKxUVbCDYd69pnlf7n1V60f4wA1o4IBisAi8WadzShC4c9L7UEFwv8AVAjnCIQDAImUKJXYIBwQ5cA38WIOSSJ0Xr0pwFjwkQbWouG+ZJgDmBpK0ybN9UQutJ6dpF6jo4rIRhWZ6WST8eTlZhlZ0uwQTsCJJ6L6oJbWtfw+OLZOkYiNXVwb8/SJ9hhuOyAllh6lUgVfKYLpr6yjxEYXXKAr3aLFyCN+oLDmtNzv+h8MdKnMyOosweQiWPwfLpw5zV1p1SRok5STIbgkQZZGIEbHAig0EsjyfBCGloSVrW74wOuiDiyWr85lwC+quZ1vTsh35g7vlJGlv1AWzrzWQWbBbQ3Q6rvRxfUF6PmbBsUe65ToS9u5JGxs0EeNNtS0hUgUBM13rXlsSe6tkJ8cYPo2AHx98MOpr7/YphqmPZ05yAqOr5vIdRu+z2UTi9eHhdTLJTg9/XlMkpz8SDy9PF6vyP8cX7jfgU+BbAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 1308,
            actualDps: 209.84,
            magnification: "200%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
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
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 500,
            actualDps: 99.3,
            magnification: "1000%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "800mリレー  第1走者",
      baseHp: 120000,
      width: 5500,
      enemyLimit: 15,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "100000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "657",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQECAgICAgIDAwMFAgIIAQEEBAMKAgIEBQcFBQUHBwcfAAAgAAAoAAAqAAEOEhJIAABIAAAYFxNQAAABGUwVGxsZGhwcHBw5EA9nAAEiICAhISFDFxclJSWBAAAhKSsrKysIPD8tLSyXAQFoFhUvLy8wMDAyMjIyMjIBO4Q2Nja0AAGaERE7PD48PD1KQgU+Pj7YAABCQkJDQ0lWQS6DLC3xAACmISApUXdKS0n7AABXVVVXWFh1S0tTVHlrV0OzOTlgXV1JaWonarFkZmx2Yk84ca5paWrAREOiVlWAZmF/eQhRfX1wcG/VT1BIiMl+fn+YeniWkQOGhob9WluMjI6RkpOqohr/aWiyqySenp60rVmSsrKqqqrBuirAvGK2tra/v77Ex8jQ0NDX1tnd3d7l5eXu7u7y9vb5+fn///9Gd4VkAAAAgHRSTlMABAoOFRsiLDI5QlNla3+OzbpJWYf/da2gwuqXp/HY4P/jttRw7vf8//99irb///7H8u//45b/////0GpSuv/v///+3P/J/6by2P/////+///s///y//////79/7z//////////////////////////////////////////////7IppNwAAAVLSURBVFiFpVeLX9pWFEZQ8EHwAeEhKm71QdcaOtEG3VoxOnSyhlhL2kgrLm1sSlojqUmAQO6/3psHleD6W7J98CMhN+fLOeeee74bn88j0nsTXk2cOFUzkclgIBAY9f8nez8n5otYdm11bW31wUI85JkgKPCFSqVcLpfgt1TEFrwSTDbrxVIf5Upl0SsB0nxZukO5mPZK8EjeKQ94UIh6JXjWxCp3HlSwoFeC02Z+gKC86sk4POoLcEJ+IITSrBuzafsEQf2+kHBVtKbQ/BRjLgjm8Disn2AwxPLwj0gXynD2jFKAP/kpFwQBuZn+ebWQz57gIV9U2U0/WMtisBazWKHsLodbLwvlUrFwspPbnJ4VVny+0WAoFBwdC0VT827skbVKaacuNJtNWe1IhCPqMRf2E1hln/y7KQkcxzJMG+ABN08dwE8V7CknqhqA0EWKWBnxZj9ZyBNyF5ANaI63AMC9doHYBm88W1B6QOM68CzlkWChDSyIpAx68Mh77CEHlrki91CBEeFZJ+7J3s9YBC2SUkjS8KDnrQOMnNoRaGSX6erwpDv971aDeGITADknWcF4bCFhtc+gWQfSayFtAgcUbzmECFGD9m03HWQIE3tG8Eb+QJfzLAMGdnlahgnQ2zxPeVwIFt625sn4L49Wkvip5NF0JD4NkVlcyiEIEk7mZtC0cWHcNUFg493Jyftq9V31nQHr+P4k4p7g10/V6pdPTnypIq4J/P+bYKOK7VT/cqJ64kYMbKTXKYKgKIqm7kDMTLonCNBAUZ21DDr/EEG/PPzDEzTJAlFx2uvd5H2ChK1QiaWhgSgPu+GQB+DxfYKtdfMwRv8xNICIoGGG0GZJUpB65pLYvU/wVo8EQuPBFHh7d81UvZgMeNjLgYRCrHOc2ROO7y+IA4k4Zpizs8auL2KnOD1j/CZVnYe9vIOaoMWG4QJ9T9CQ9cOPnz9ff72+JBOLGfOSnzSjedzReNhJOYsAlYUu9IAdTnX68PLr7c3Nze31x8tDth32jY4FEjAauKXd7bY4IEm8TSAKRjz80KYgQirtszM4gHMd9fZcPfzz1fmrc3nXl4n6joEiAJTtEwhmRiVnIQRpGJYMpa8nwFEZffjiTe1NrfaCWDg+DZ5CRZFome4TmHOqOks53TMnl2MN4ePQh7UPtVrtw5vnzx8KeuZY4ihKEb8TNGSjFJ2VZGoXI6/jQID2XOu8bvTuRlutPWXo+st6nXn9mnAQ6M5KMrWrlRNFgu/g0AuRMzyBrh4uY/t5DCsU8tiyg2CokiztasgyCWhLewQeKrKKZi8urlRVqV9d7GNZB4Gzkizt6tFEVzfSCRgFzQFFy7FdQMHUAqIFevLFMpotLNtJBIxjb2Zpl97VQIs1NRBvCFSD40wZ6miabgnSRj7/nYB3vvRs9VcZJDDu5loqARhjblSA0/3BxvL3aQSCs5LG+zf1aKNQgUYRXc10huZxRmGtQQUrL8NKNN2Vws5SnDiQrZt40Wo5KpDMCPScJuXsdtBBYQiSaG542umh9YhwrAQfrktE32HVikZkWbl/BV1cXNzc3DuG2JsfWk6/SZtEbHv70WPC9hfolLUbYPsXADceuIPjjW9kKraEornZVGo2k0Oplp0zHjjxxPdDTESn5qLRSCwWi0enkixnBq0ZRTkA2u3m7nd5k9w+Otp+Ru+17U2BGYq7jdHIXBxGgydmU4kMXD8Ne1cEZMKtmE2GkXA8nkwmF9Jx5JlA8qKiSDzNKh606A5HDI5HksnpGYKUw2OjHvcmfiQ5s7Q0PwORmV/KpBKRH73cfAPJm0z1AC0nPgAAAABJRU5ErkJggg==",
          traits: [],
          baseStats: {
            hp: 10,
            ap: 1,
            dps: 0.03,
            speed: 0,
            range: 50,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 1000,
            foreswing: 1,
            backswing: 0,
            tba: 500
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 12000,
            actualDps: 360.0,
            magnification: "1200000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            }
          }
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
            actualHp: 1600,
            actualAp: 160,
            actualDps: 160.0,
            magnification: "800%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "2.0-5.3s",
            delayFrames: "60-160f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160,
            actualAp: 400,
            actualDps: 666.66,
            magnification: "200%",
            count: "1",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 5000,
            actualDps: 993.0,
            magnification: "10000%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
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
            actualHp: 40000,
            actualAp: 2800,
            actualDps: 954.56,
            magnification: "800%",
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
            actualHp: 40000,
            actualAp: 2800,
            actualDps: 954.56,
            magnification: "800%",
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
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 5000,
            actualDps: 993.0,
            magnification: "10000%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
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
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "5",
            spawnTime: "32.0s",
            spawnTimeFrames: "960f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
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
            actualHp: 1600,
            actualAp: 160,
            actualDps: 160.0,
            magnification: "800%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 5000,
            actualDps: 993.0,
            magnification: "10000%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160,
            actualAp: 400,
            actualDps: 666.66,
            magnification: "200%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            actualHp: 40000,
            actualAp: 2800,
            actualDps: 954.56,
            magnification: "800%",
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
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 5000,
            actualDps: 993.0,
            magnification: "10000%",
            count: "3",
            spawnTime: "52.0s",
            spawnTimeFrames: "1,560f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
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
            actualHp: 40000,
            actualAp: 2800,
            actualDps: 954.56,
            magnification: "800%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160,
            actualAp: 400,
            actualDps: 666.66,
            magnification: "200%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            actualHp: 40000,
            actualAp: 2800,
            actualDps: 954.56,
            magnification: "800%",
            count: "0",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 25000,
            actualAp: 500,
            actualDps: 1153.85,
            magnification: "500%",
            count: "0",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "23.3-36.7s",
            delayFrames: "700-1,100f",
            baseHpRatio: "100%",
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
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 5000,
            actualDps: 993.0,
            magnification: "10000%",
            count: "3",
            spawnTime: "126.7s",
            spawnTimeFrames: "3,800f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "1600mリレー 第1走者",
      baseHp: 600000,
      width: 5200,
      enemyLimit: 15,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "150000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "657",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQECAgICAgIDAwMFAgIIAQEEBAMKAgIEBQcFBQUHBwcfAAAgAAAoAAAqAAEOEhJIAABIAAAYFxNQAAABGUwVGxsZGhwcHBw5EA9nAAEiICAhISFDFxclJSWBAAAhKSsrKysIPD8tLSyXAQFoFhUvLy8wMDAyMjIyMjIBO4Q2Nja0AAGaERE7PD48PD1KQgU+Pj7YAABCQkJDQ0lWQS6DLC3xAACmISApUXdKS0n7AABXVVVXWFh1S0tTVHlrV0OzOTlgXV1JaWonarFkZmx2Yk84ca5paWrAREOiVlWAZmF/eQhRfX1wcG/VT1BIiMl+fn+YeniWkQOGhob9WluMjI6RkpOqohr/aWiyqySenp60rVmSsrKqqqrBuirAvGK2tra/v77Ex8jQ0NDX1tnd3d7l5eXu7u7y9vb5+fn///9Gd4VkAAAAgHRSTlMABAoOFRsiLDI5QlNla3+OzbpJWYf/da2gwuqXp/HY4P/jttRw7vf8//99irb///7H8u//45b/////0GpSuv/v///+3P/J/6by2P/////+///s///y//////79/7z//////////////////////////////////////////////7IppNwAAAVLSURBVFiFpVeLX9pWFEZQ8EHwAeEhKm71QdcaOtEG3VoxOnSyhlhL2kgrLm1sSlojqUmAQO6/3psHleD6W7J98CMhN+fLOeeee74bn88j0nsTXk2cOFUzkclgIBAY9f8nez8n5otYdm11bW31wUI85JkgKPCFSqVcLpfgt1TEFrwSTDbrxVIf5Upl0SsB0nxZukO5mPZK8EjeKQ94UIh6JXjWxCp3HlSwoFeC02Z+gKC86sk4POoLcEJ+IITSrBuzafsEQf2+kHBVtKbQ/BRjLgjm8Disn2AwxPLwj0gXynD2jFKAP/kpFwQBuZn+ebWQz57gIV9U2U0/WMtisBazWKHsLodbLwvlUrFwspPbnJ4VVny+0WAoFBwdC0VT827skbVKaacuNJtNWe1IhCPqMRf2E1hln/y7KQkcxzJMG+ABN08dwE8V7CknqhqA0EWKWBnxZj9ZyBNyF5ANaI63AMC9doHYBm88W1B6QOM68CzlkWChDSyIpAx68Mh77CEHlrki91CBEeFZJ+7J3s9YBC2SUkjS8KDnrQOMnNoRaGSX6erwpDv971aDeGITADknWcF4bCFhtc+gWQfSayFtAgcUbzmECFGD9m03HWQIE3tG8Eb+QJfzLAMGdnlahgnQ2zxPeVwIFt625sn4L49Wkvip5NF0JD4NkVlcyiEIEk7mZtC0cWHcNUFg493Jyftq9V31nQHr+P4k4p7g10/V6pdPTnypIq4J/P+bYKOK7VT/cqJ64kYMbKTXKYKgKIqm7kDMTLonCNBAUZ21DDr/EEG/PPzDEzTJAlFx2uvd5H2ChK1QiaWhgSgPu+GQB+DxfYKtdfMwRv8xNICIoGGG0GZJUpB65pLYvU/wVo8EQuPBFHh7d81UvZgMeNjLgYRCrHOc2ROO7y+IA4k4Zpizs8auL2KnOD1j/CZVnYe9vIOaoMWG4QJ9T9CQ9cOPnz9ff72+JBOLGfOSnzSjedzReNhJOYsAlYUu9IAdTnX68PLr7c3Nze31x8tDth32jY4FEjAauKXd7bY4IEm8TSAKRjz80KYgQirtszM4gHMd9fZcPfzz1fmrc3nXl4n6joEiAJTtEwhmRiVnIQRpGJYMpa8nwFEZffjiTe1NrfaCWDg+DZ5CRZFome4TmHOqOks53TMnl2MN4ePQh7UPtVrtw5vnzx8KeuZY4ihKEb8TNGSjFJ2VZGoXI6/jQID2XOu8bvTuRlutPWXo+st6nXn9mnAQ6M5KMrWrlRNFgu/g0AuRMzyBrh4uY/t5DCsU8tiyg2CokiztasgyCWhLewQeKrKKZi8urlRVqV9d7GNZB4Gzkizt6tFEVzfSCRgFzQFFy7FdQMHUAqIFevLFMpotLNtJBIxjb2Zpl97VQIs1NRBvCFSD40wZ6miabgnSRj7/nYB3vvRs9VcZJDDu5loqARhjblSA0/3BxvL3aQSCs5LG+zf1aKNQgUYRXc10huZxRmGtQQUrL8NKNN2Vws5SnDiQrZt40Wo5KpDMCPScJuXsdtBBYQiSaG542umh9YhwrAQfrktE32HVikZkWbl/BV1cXNzc3DuG2JsfWk6/SZtEbHv70WPC9hfolLUbYPsXADceuIPjjW9kKraEornZVGo2k0Oplp0zHjjxxPdDTESn5qLRSCwWi0enkixnBq0ZRTkA2u3m7nd5k9w+Otp+Ru+17U2BGYq7jdHIXBxGgydmU4kMXD8Ne1cEZMKtmE2GkXA8nkwmF9Jx5JlA8qKiSDzNKh606A5HDI5HksnpGYKUw2OjHvcmfiQ5s7Q0PwORmV/KpBKRH73cfAPJm0z1AC0nPgAAAABJRU5ErkJggg==",
          traits: [],
          baseStats: {
            hp: 10,
            ap: 1,
            dps: 0.03,
            speed: 0,
            range: 50,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 1000,
            foreswing: 1,
            backswing: 0,
            tba: 500
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 60000,
            actualDps: 1800.0,
            magnification: "6000000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "4",
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
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 6000,
            actualDps: 1191.6,
            magnification: "12000%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "031",
          enemyName: "師匠",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMEBAQGBgYGBgYICAgICAgICAgMDAwNDQ0PDw8TExMUFBQWFhYYGBgYGBgbGxshISEiIiIjIyMpKSkqKiorKyssLCw2NjY4ODg6Ojo9PT1CQkJKSkpQUFBRUVFWVlZhYWFnZ2d1dXV3d3eAgICKioqLi4uVlZWdnZ2oqKi3t7fCwsLKysrV1dXc3Nzj4+Po6Oju7u719fX5+fn8/Pz////mL9pFAAAAQHRSTlMABAgM4x1+khMo1ThCyTBRWWKucYJ7p5fBiZ+8yqzbte/IvuDU+tH+797q/v/v//b///3//v//////////////LaXl6QAABG9JREFUWIWdVmtjojoQXeDiwsqtb63WR7WKhfAwJOGd8P//1Qa1KyCg7XyhWnOYOXPmTH79agmlr6kDte0X7SEO1svpx0L+MYC6Q+CAjd6PAXpmZMHEHgk/PC9M3Ahg5k01VRF/BDB34IFk/vvHdjHS5G9jCPLsAI6IxRbysWtsJl3lW+dFbWqiyLMiSlBKaURcfaZ9A0Lqb2FEs8BygiSiLGOMBp4+f3mWUKmv45RlGQ1JwJ85QMbSwN31nktC6u8xf+0tUkzY+WFMntGV2N+j0vksBlaaP6lvz9SHZQjdN5iUzmc0CC5fsNBdPSRCXVXPF6HihwjyzG0+f0aYtk6oNLKjwu8vDcifNwS7bUKFnhGU3k+JnzIeNA7iK1Bkz5u72d1hWjzPKAIOwshzzQ8Tc23lEKE5kpoIWMC0UnTqO+9vi1mn1x2sDBjkEMw3+vVEKnM7vqON+dsXSRQEPl/aXL9A4N1LLYEDM6whnmz+lSxxCJerO3VndQRqOqlrYKAXXid1x1vb572sI2CFaM35LLEHxYqll9HO3Go1CQzMOEBJhYC8Ed6i3DZR7Ws1DiVvcOKcKgBx/pmsn9kOQt+MfRBU0g8xR4iNmoTvQlmh9HRKyyyy1ENpRt1nvF0zogiQ+xYAnzE0a1LeLcSRmxLwT0ZnH8vODDpx5m8eG5G8IRQWKqDhVdP5egr1WuGVomtEcaECRrF/NSEfwMB8yKIwsNOw2ANGnGtHKQGO2TA8t5DmHvVBcZJyRr+M0Dn8frTa5BVhyCqMMqMQflkzjU9L7UEK8i5gnlMyc2LdVJl4mwc0qnrIYBnAB4XZTtwHVxXNjKlzYkWAkqy4lbYYYe6lZkItr6Tj1EFFwNDotdAgDFxKLVQE4CyeivbA8KZlJsWxyyoAXAlWySD5dam5l9ICsbyEEkJYHm5Gds0pKBucUQeWAFhilUhgidnMgrz1syqJGRdGcUkw6o4ba1D3Ac+46sklJXAEtGi0hZd9xJVcXSoxwFkRE68apaDuQxaGlQTyRpYWXQuAvCQJvt9KuZ89CfAKvTtH5pYKuZ99QXBrXDXMg6B0Xw+A0Pu9FgJ0K4Ke1oN6FuXO8hMGdWuREX7fvv7J0U56vRKkwQdJ8xzvAVJ0pYFlKTwiMK1nQRl/4pjWAPAJgMA/z1SK3t9Ws36DlOTh0YIeur9d5AhHFKZJCA9DVVGatCzNIYYQRjUAWXg8AgAOwFm1rCdxDIsVVIwFwsP7H+A2C5kDTNybBcflawZDAJzc4XTdtmHFsXcBYLFnmi72w5AgD19sOQBWFOj9XpurKgt8eVtgL3q9yWar69u36cbmDeD9CyJ+q5q0Lmh5559LD8yJLPwSZVVVZVlRR7oXXSvzd6223jXOk5S6Ze+Wugv7qtCkdT2KfLWeq71b4/LEuNx9qTtrWY/KzKVnvheKUAllsEcJ/ydFby2LhQsREd/Hx2Gn0/l9i04ew3fLw9j7bLvmKKPh63K9Xv/J479b5B//z2P5OhzVevpfN9iiR9TF8T8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 557,
            dps: 696.25,
            speed: 4,
            range: 451,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 2228,
            actualDps: 2785.0,
            magnification: "400%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEDAQICAgIEBAQFBQUHBAMJBgYPCwoQCgoRCwoRCwsRCwsTCwoUCwoaCQkVDAwWCwwWCwsYDA0aDg4dDg4lCwkfDw4kEBAlEBE5CgoyDg4+DAwyFRZLCwlVCgg7GBlsCglFHR5UFhpKGx6CCQaQCAVVISWbBwSvBAG7BAGaFBXFAwJwKy/JCA+0FRXQCiGDLzbOERHWDCzWFBjcDTPfDiTdDjfaFCviEiTgEzXdGh3UHSviFzacOkLjGi3hHybeIDfmHjCvOkPkJCvoJDTnJyzjKjbpKjLoLDS9QUroMDfsLjfsMDjpMjruMjvrNDzvNT3sOEHxN0DyOULbQ0/vPEbzOkPzO0X8OkDIUFz0P0nzQUzzRE/fTVz+Qkv0SFX6R1L2TFr+Slb2UF7hW2n+T1v4U2H/UV75VmP/U2P4WWz9WGf8XW38YXL6ZHn+Y3T8Z3//Z3j+aX3+bIL+bYb/cIn/cYoSERuIAAAAgHRSTlMAKlVvgbfH0vPhEf2jkwDrRjclU2BreP8XAIQFjwDvpsG1/97nxPj/z//Z9+L//+z///////f//////////////////////////////////////////////////////////////////////////////////////////////////5lGXx0AAAjbSURBVFiFhZeJX9roFoaZ6bROb5dRXAZEL3Wmtra10jqUK6KVcQVkiwmEkBjTBsraCJQdov/6fc8XVNramUN+iJD3+d6zfCHYFm8L56LTPj3nXn7pQbxcds9N2/HWrafablO7puZX3h1+/NzpDU1zOOh9/nj4bmV+ynUb4zuAc9Ext+L/2OmZQzzMi4uLS/y9HHQ++lfmHN8jvgM45j3HneEQagTk+Gua5GPQa5945h3/AnDNrJ4MLi8vWJiDoXlBHPNiAMBgYA4+rs66/glgf3LYZvJLPJs4LsweEXr9Trc/6Pdh4/CJ/ceAGc+nHlv7ko5hbwgQFsfLfr/b7nY7/X5/+Nkz+wOAc8HfMi3zF5esAswLPJioYx8mEHDR9y+4bgO43IeDMblpyemgZpoDZNAfIY7dru8B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",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3000,
            actualDps: 596.04,
            magnification: "1200%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 6000,
            actualDps: 1191.6,
            magnification: "12000%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 7500,
            actualDps: 1490.07,
            magnification: "300%",
            count: "2",
            spawnTime: "45.3s",
            spawnTimeFrames: "1,360f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
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
            actualHp: 270000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "1800%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEDAQICAgIEBAQFBQUHBAMJBgYPCwoQCgoRCwoRCwsRCwsTCwoUCwoaCQkVDAwWCwwWCwsYDA0aDg4dDg4lCwkfDw4kEBAlEBE5CgoyDg4+DAwyFRZLCwlVCgg7GBlsCglFHR5UFhpKGx6CCQaQCAVVISWbBwSvBAG7BAGaFBXFAwJwKy/JCA+0FRXQCiGDLzbOERHWDCzWFBjcDTPfDiTdDjfaFCviEiTgEzXdGh3UHSviFzacOkLjGi3hHybeIDfmHjCvOkPkJCvoJDTnJyzjKjbpKjLoLDS9QUroMDfsLjfsMDjpMjruMjvrNDzvNT3sOEHxN0DyOULbQ0/vPEbzOkPzO0X8OkDIUFz0P0nzQUzzRE/fTVz+Qkv0SFX6R1L2TFr+Slb2UF7hW2n+T1v4U2H/UV75VmP/U2P4WWz9WGf8XW38YXL6ZHn+Y3T8Z3//Z3j+aX3+bIL+bYb/cIn/cYoSERuIAAAAgHRSTlMAKlVvgbfH0vPhEf2jkwDrRjclU2BreP8XAIQFjwDvpsG1/97nxPj/z//Z9+L//+z///////f//////////////////////////////////////////////////////////////////////////////////////////////////5lGXx0AAAjbSURBVFiFhZeJX9roFoaZ6bROb5dRXAZEL3Wmtra10jqUK6KVcQVkiwmEkBjTBsraCJQdov/6fc8XVNramUN+iJD3+d6zfCHYFm8L56LTPj3nXn7pQbxcds9N2/HWrafablO7puZX3h1+/NzpDU1zOOh9/nj4bmV+ynUb4zuAc9Ext+L/2OmZQzzMi4uLS/y9HHQ++lfmHN8jvgM45j3HneEQagTk+Gua5GPQa5945h3/AnDNrJ4MLi8vWJiDoXlBHPNiAMBgYA4+rs66/glgf3LYZvJLPJs4LsweEXr9Trc/6Pdh4/CJ/ceAGc+nHlv7ko5hbwgQFsfLfr/b7nY7/X5/+Nkz+wOAc8HfMi3zF5esAswLPJioYx8mEHDR9y+4bgO43IeDMblpyemgZpoDZNAfIY7dru8B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",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3000,
            actualDps: 596.04,
            magnification: "1200%",
            count: "2",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
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
            actualHp: 20000,
            actualAp: 8000,
            actualDps: 5853.64,
            magnification: "400%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 60,
            actualAp: 7500,
            actualDps: 1490.07,
            magnification: "300%",
            count: "2",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "041",
          enemyName: "だっふんど",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgJCQkLCwsLCwsNDQ0UFBQYGBgaGhoaGhogICAiIiIiIiIjIyMnJycpKSkuLi42NjY3Nzc3Nzc+Pj5CQkJNTU1NTU1VVVVhYWFjY2Nubm53d3d7e3uAgICNjY2Ojo6bm5uenp6pqam2tra+vr7JycnR0dHd3d3p6env7+/09PT4+Pj9/f3///9Pw18YAAAAQHRSTlMABQwWH8zm+Nf/JzE6TsBDce+FVWOtmnXJfIiY4fyj8q/R58Pz/8vz/93+6v7+8f/2//j//v7+/v//////////zB4KQwAABC9JREFUWIWdV+dyszoUDGAnjhvE4BIcd8AgehdF8P5vdUWx48xNvpF8ZsIPT87q1NXq5YXA2IkofX5KPMeQ/Pf/bSxrThBFnnGUuKf89w4sq6pCRWysWXp/bu8VVd1aBQ1pTAvBSNes9c5hUaPYvMizMcdQFGNySZrzqypUE/wtYWBqR1mYkUbCbYOy8a+r1IVdHkWWBNfX4YwwATPHTmWS1xXqK4ExULQb8kQA4y6B3ErruzU/ZFeBKAVW9poE6tJN7u64n2UeHAdEAUyNPu8wbM4t0jgKAs9zzOOUrA+i0yee+FVVo+Cy38rrtSDyROczLCuZRRd25GMgqE1ZpjWi09nZar9U0rZquRUWZeHLNFM4WJwt29LdAvuXoQps11YWNAD8Bvhh6KoRwgOsY3fLss4LstrfMjidr8pOhyjRVTdszL3SxMCw49l6ruogBKGvW36D4J9nVJzCiGfX2qlRiVK7gwBLiiRwIZf6dbMJy2aDElvHRfEPAk0I0/lSmmyjqlvC1MUQ6mbywjDsYEBUDG6KqUMOq34NGwj1sOKl9WqzIW4I8xn0APhbRKqqfJ0VK4xMmRqgztMkArqKDSQIasQA3i2CxLJsP4pTCEMryw1SADm8MRHKiwJhWsS7YSeQFIDdxncqw2VAWezCqnBDmxSAOz6yWR7q57lbJJatnwgBxlpW31OIbcs+LpzMum6WAiHA1Mjbs8sCl86OUlPkNVc58SzpRIpOey8UoQ3cJC+DLcdM18KMeCubMWhvggxmmB8xq5F69sbuk+8a1qVDfT0/1LAZpcuY0v+F73i5n2VTotUojOSh7wCiPbVCYXs2aKcwM8gu1EcbXOA9AORR3Qud8d0YtQa1CbU/s/buqqBw1vQqjzvepqCq4iN1C39MQW6KT8hM8T4FCC8BvT8rBzc+faaFj01E3ucTGhXP8a2Jz7SwXeWuiVihbJ8JYHDp6bBCDvUWNQF896AwnynhbZHwJzMEnlqmYzrNWvcKIaiYpramHIR+DyoUu64NsiI1KTs57vYA83EUuXpc4dcGmUDvjONXSi9zm+swsmCNnAVpKxiO3xpAf6DT0nURClYkAFi+8OujEWQJeOTjCBTlvyLgJuPBYDCeTMXP/cXw4gzVEMCfAP/cp+l8uLlcNM0wvRjmqKldrD9cy8h3844S/1DaWJd+4Zszy4uWxVGeOKcvH7Wvk+YP6gAcVpIoSsLi96cCrpusmV6UQAjT2DNPC1EwYCduUA5t1fZd66pcLRX8+VhhJ9Jq83VQdrvd2+toOBx9gDDC21CGWFnhCABQVRsCcPrrDT1ZzEcfb2/vD7az8ZVcJgnE+swPY2Dp+u79bbQUfp1qftn4/wB43wHXx2llBbYcAhW7v328Dn9XmQw3mQmL1XI+HI1Gr419dHY4KNfGzqPRfLlaSD8W8z/DXwAg/pkKDQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 3000,
            dps: 1800.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 700,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 9000,
            actualDps: 5400.0,
            magnification: "300%",
            count: "3",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 9.93,
            speed: 15,
            range: 100,
            rangeType: "範囲",
            kbLevel: 5,
            money: 50,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 6000,
            actualDps: 1191.6,
            magnification: "12000%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "freeze": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "577",
          enemyName: "大玉（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEDAQICAgIEBAQFBQUHBAMJBgYPCwoQCgoRCwoRCwsRCwsTCwoUCwoaCQkVDAwWCwwWCwsYDA0aDg4dDg4lCwkfDw4kEBAlEBE5CgoyDg4+DAwyFRZLCwlVCgg7GBlsCglFHR5UFhpKGx6CCQaQCAVVISWbBwSvBAG7BAGaFBXFAwJwKy/JCA+0FRXQCiGDLzbOERHWDCzWFBjcDTPfDiTdDjfaFCviEiTgEzXdGh3UHSviFzacOkLjGi3hHybeIDfmHjCvOkPkJCvoJDTnJyzjKjbpKjLoLDS9QUroMDfsLjfsMDjpMjruMjvrNDzvNT3sOEHxN0DyOULbQ0/vPEbzOkPzO0X8OkDIUFz0P0nzQUzzRE/fTVz+Qkv0SFX6R1L2TFr+Slb2UF7hW2n+T1v4U2H/UV75VmP/U2P4WWz9WGf8XW38YXL6ZHn+Y3T8Z3//Z3j+aX3+bIL+bYb/cIn/cYoSERuIAAAAgHRSTlMAKlVvgbfH0vPhEf2jkwDrRjclU2BreP8XAIQFjwDvpsG1/97nxPj/z//Z9+L//+z///////f//////////////////////////////////////////////////////////////////////////////////////////////////5lGXx0AAAjbSURBVFiFhZeJX9roFoaZ6bROb5dRXAZEL3Wmtra10jqUK6KVcQVkiwmEkBjTBsraCJQdov/6fc8XVNramUN+iJD3+d6zfCHYFm8L56LTPj3nXn7pQbxcds9N2/HWrafablO7puZX3h1+/NzpDU1zOOh9/nj4bmV+ynUb4zuAc9Ext+L/2OmZQzzMi4uLS/y9HHQ++lfmHN8jvgM45j3HneEQagTk+Gua5GPQa5945h3/AnDNrJ4MLi8vWJiDoXlBHPNiAMBgYA4+rs66/glgf3LYZvJLPJs4LsweEXr9Trc/6Pdh4/CJ/ceAGc+nHlv7ko5hbwgQFsfLfr/b7nY7/X5/+Nkz+wOAc8HfMi3zF5esAswLPJioYx8mEHDR9y+4bgO43IeDMblpyemgZpoDZNAfIY7dru8B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",
          traits: ["赤"],
          baseStats: {
            hp: 4000,
            ap: 250,
            dps: 49.67,
            speed: 30,
            range: 100,
            rangeType: "範囲",
            kbLevel: 15,
            money: 100,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3000,
            actualDps: 596.04,
            magnification: "1200%",
            count: "0",
            spawnTime: "110.0s",
            spawnTimeFrames: "3,300f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "knockback": {
                chance: 100
            }
          }
        }]
    }
  ]
} as const;

export default e1359Data;

