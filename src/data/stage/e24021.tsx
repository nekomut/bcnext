// Stage 24021 Data
import type { StageData } from '../../app/stage/types';

export const e24021Data: StageData = {
  eventId: 24021,
  eventName: "8月強襲！",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 21,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "帰省 Lv.1",
      baseHp: 112500,
      width: 4500,
      enemyLimit: 8,
      requiredCost: 60,
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
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "292",
          enemyName: "ワニボン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAAMCAQMDAgMEAwUFAwcIBQoIBQoIBgkKBg0KBwwKBw0MBw4LCQ0RDhQTDhcVDhwXDh8YER0cECQaEx8cFSIsGzsuHzsvHzszH0I1IEc7J0k9JU9COUlNLmREO0pPNWNeN3xQTVJjPIBuQZB3SJhiYGRkYGV7SaCFTqyNU7dxb3KWW72gYsmMfJOpZ9iwa+GRkZG4cfC8c/zCd/ikoKW+rcPKv87U1NTv0PXp6en///9aWJdBAAAAQHRSTlMABg0VHSo8MlFFYttbhGyxeNCOpOn7mtjCsu/O/92E/ur+/9fw///0//j/7P/+//r//vn///3////9//////8A4AyyoAAAA7xJREFUWIXtlF+XojgQxeWftKiIaCMCbjASDUpCIhHQtnu//7faQqfPbDuzZ2bPnn3zPuSJ/LhVdSu9P/+jek/AE/AEPAFPwBPwBDwBT8D/APiF9L7rjgZmr6fp2q++/Yk024+z3W4V9Aee79r/HmEvd7Ju2yqbrnZ5trTuVP23zWheVjcMU1UhVAiZOt1F/cX3HdOw+8ZvGAhZW6zLLVEEU0rQbGCZhrPK83QyW60C66eX/mYPDKgalx/ntVR1U1ci38TLIOZKSEKEyMb6j54tZ/yifQfs6oasTyVWzV215DmvSSJaiQlfmo/3DTfMdsH32uywqCuCsOzu1jWcLagmSLYyITJ+rEH3Us75ZvRpQXtZECbrCm5WNMsyQim0UtVKtU0tqh8B/VgUmPF48I1gzjBj7Gafho7jTeZrEMpyzjtOPnkoQXMyhmjBcyhC0wxr4C4oAGRnHxqmadbyeL2eFr4XLJL1Gq+8hyYa451ICGEsHtij8SzcZElRFLxzoFIXXGmjzdv14Bma4aXnYzx6MGC4K1kkmDIahfHhWJbXtzXhouqap+4ZMvzDYdbthRmUh8f/685K1BhhitH+dHr/uJw+rttE3nrfVJEDAe71rNnM1rT+QLd93/qaZ320YG3DE0zQ+eP9DIDyVEa79j5/ANhjF+ZrGpreX4ae5/ve6B5mzehkOnGhVCMSjNHl41qWh83Sd/2UfzrwgsMGNsC0nCDc79dH0GETDMBVf9ZpmbICI8ETgvG2XL9ORrZpjsIIMtQhqmR6uJ5j+G5zKNeXy/btHXQpV2OzN1jQIs9ZRWGCUoIDCozX6dgyvVVRVapRXRPRzRc6ni9vx/31bbs/Xy4AuWTjnhnspBC1QALqrTlKCGc0oZk/TkVTQV5oASZwst3vt/cDbdcJ/Aivj2/vlw10NkgpUwXp8t60BNpYwLaIKJVtxRiHTYZNlAUFke4ounDISkk0zc6XrEusF6aUFF3gGoUTimESQsDCNIKxgmDxuYpte1um+0q1MnXdeDO7jdB2J3Pa1oILQsFAQXHFkaql4AyjqgXwbRZSKiXZbrfLmZB57Jm6PfiWRs300qrmvMBSJAien1YkVHGhlMBFl0V4TRhZgeLlGEKwnP3h2F+TaM7yVimFo/T19RVXbR6GvIY1aFkSpYQQjNB8PHgZWIamaboBq/VlDyEgXsqEEHTiTRDhnKW+B9GGVsls4g+hLsHQzPqn1xgesmAynIOi+XTYnfP5cDiMsiiNomg4HUZpmi6GofPjI9j7C+S59LoPFFNEAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 2500,
            actualDps: 4166.66,
            magnification: "50%",
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1052.63,
            magnification: "50%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 720,
            actualAp: 64,
            actualDps: 42.68,
            magnification: "400%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "12.0-20.0s",
            delayFrames: "360-600f",
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
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-42.0s",
            delayFrames: "1,200-1,260f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "101",
          enemyName: "閻魔大王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQADAgIFAgEEAwMJAwELAwEOBgINCAQPCQQVCQMRDAUTCwUYDQQjFQcqEgMvFwRIGgBKGgEuJhVPHQCOBgE8MA9FMARtJwBJOg0/PTd5NQNiQwSIMQBgTg9jThBiUBFbUCqkOgJZWFd3VwrDQgB7ZheGaBJvZlqBbRzbSACddgzwTwGMfSiFfF7/VACYhCGXhS6ugQjEjwWVkInTmgW2ojThpgr5tAe4uLjywybNzcz53kr9/f2ordgNAAAAQHRSTlMA9MT/FCUJnuCGVDaud/9n//OU2f//wv+c//25/+v//VXSgP/+////4///pP/+/0T//334///9//7/////////FE1EPgAABWFJREFUWIWdl4t6ojoQgKtcqqAxCriCQNYak4YFVo+gBW37/m91JoBb2yJnPdOv2o+aP3Of8eGhU3Tzt2qYD7re/bGbYo6s/SKY/Xx6+l8E3Zx7LqOx9fTTvBug/v79z69VHLsh4Zah3n/7ZPXraUE4tW2P0mB2P0E1VXNEKI/THQg17lfhQZvz6vAOXvns/vP6jFfHY8BwMro/CmawqwGUw+/8fidMaKV+SuM03RFLuxswi2sFPHiPyXRm3GmE3gCkEtxDiATmXec1QwJSLvUHAqEpvQ8w6Q955UAeAyDmNJjf54VxMJJO5DEn5IeUR+0+H0xoQGoPxDVgMHocm3fE0gy41ziR/vBEaCMFKb3+5G8R6nDKSVplcUrConjZ+za1FaX3l5Zoox7CNkQghRQQhcBo/bIlnqIgvFzMjP90pzqSH4VO4JHYE8cQKYqC11vX2b9I2a/G3Zbo4x4KszxLEuER9uIgx99IidYFwxKcJLNOQ7QBYjlzkFSDAcDfOAggfiQSoUhBYdDZH4yem8nj8qNJkjEHbkeb7XbDWI7r59akCzBWRKjUgtyc5Q4QEPL9TSgyVz7tjoVujjBzlYsIUMHfwL3gAycRTD577PKhuXgWjIXOBeDkIvOjzUbZRJEvhHTCoKuszFUSYuSyEF8ITGRbOAsOxZu1WMOTrvamLQWuTA9DdHGDEC+R769lIB3hw5MuB47Xjffd0G3+UtxQuOtKfEea1mWBPpyNx8N+70KQqeCA7/NjUZ7P57IscuF0NmhV/lM1+jUBXkRewLFjDoxjLuW47xumqWmqepOj69qjvNp1sMuKIofYhWFICKFSiMv2++fn1Wr5fdZohjEZzxaL5YoJCD+IgHC4nhxw9YSr2oM4v0k5P3+7eTZdJy/FuZHyCAG1Cf842jRpEmRg1rn4DljChWfAg7PKHJqQ7XlUno7jTwQ+mixWyTH59R0Ad2ZFIV0NJsurU9mSCcb0WovU0nRtMl9+j+Y4SUKWiHX4Se/Ug3Da10pUs15tqQcoY8eFTPF2nySlSMHk2oYbs15/bJL3C2DnKTblF5r0yY1UMi0XNIAq8NLPjqf2h0VpDNI+69VRCNkGknl891muHAIJEXOrDaCPp5D3DqiAFe9L6D/T0jRo6+tmAHPDwYoDBYu+qnClAWQzb5v0sBG5vuM72N/AD715vxw2cdvOplmxBykg8i007/CmBnJX4DFtaSmGNQ+Kgolkuz2WLL4J2Mko8HFLDDRtWRSRj6KvALjyq0/j1kzSl8UxcpTocCyFNKE5Fdt/8jj9ALRlUgVYh9EhLzO6k4UkD6Q2tOO4Mf9PKFq37wqwZ9EhKwsCVehheTNHdVRTTikUd82Io8Py+4CWgG3ENqekLDOS8vAFLAEFAEB3MTu8vm4wb1SJTtvv00mVAF/xTwL6ieBx8vYmUlL1dpLS0/v7+6vT1GQaLFps0FalBDgV4Eji5PyWkGY2eOt3KQfI8coxrdVkJADY4BpQCsLKs7hMJ8DWBCJDmrYCoBizPDqdTq+RBBQhAJI/AMU/nF5fT4e13Jzbw6gO+yhk6wgaegUQOajxAZDbCkZNY2hLZbkXDOAzbiaYOEJXZkCBgYKvEUqze97Y/XX4ikRtDBfhRGDnWB4dV4TXSlQpmd5QAKRar2Wx2QgTyuRkwM4HAJP6/I2OJuMg2wB8Q5FLuqx66F4eMC6AJgn4/OZ41yyZqsT+GCNQiCm/EOwqBejo9npQf0lJqW151SQm3lTeSmylV/mQxDyYd67bRt3K6NCqJvl0bFhpVXzDHkwnhHCve8fVDYtI8foDT75P+/2BnLD2AHYWhKa9wbDl/L8yviZpzBc1VgAAAABJRU5ErkJggg==",
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
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "帰省 Lv.2",
      baseHp: 150000,
      width: 4500,
      enemyLimit: 8,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "55",
          treasureName: "ネコビタンA",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "292",
          enemyName: "ワニボン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAAMCAQMDAgMEAwUFAwcIBQoIBQoIBgkKBg0KBwwKBw0MBw4LCQ0RDhQTDhcVDhwXDh8YER0cECQaEx8cFSIsGzsuHzsvHzszH0I1IEc7J0k9JU9COUlNLmREO0pPNWNeN3xQTVJjPIBuQZB3SJhiYGRkYGV7SaCFTqyNU7dxb3KWW72gYsmMfJOpZ9iwa+GRkZG4cfC8c/zCd/ikoKW+rcPKv87U1NTv0PXp6en///9aWJdBAAAAQHRSTlMABg0VHSo8MlFFYttbhGyxeNCOpOn7mtjCsu/O/92E/ur+/9fw///0//j/7P/+//r//vn///3////9//////8A4AyyoAAAA7xJREFUWIXtlF+XojgQxeWftKiIaCMCbjASDUpCIhHQtnu//7faQqfPbDuzZ2bPnn3zPuSJ/LhVdSu9P/+jek/AE/AEPAFPwBPwBDwBT8D/APiF9L7rjgZmr6fp2q++/Yk024+z3W4V9Aee79r/HmEvd7Ju2yqbrnZ5trTuVP23zWheVjcMU1UhVAiZOt1F/cX3HdOw+8ZvGAhZW6zLLVEEU0rQbGCZhrPK83QyW60C66eX/mYPDKgalx/ntVR1U1ci38TLIOZKSEKEyMb6j54tZ/yifQfs6oasTyVWzV215DmvSSJaiQlfmo/3DTfMdsH32uywqCuCsOzu1jWcLagmSLYyITJ+rEH3Us75ZvRpQXtZECbrCm5WNMsyQim0UtVKtU0tqh8B/VgUmPF48I1gzjBj7Gafho7jTeZrEMpyzjtOPnkoQXMyhmjBcyhC0wxr4C4oAGRnHxqmadbyeL2eFr4XLJL1Gq+8hyYa451ICGEsHtij8SzcZElRFLxzoFIXXGmjzdv14Bma4aXnYzx6MGC4K1kkmDIahfHhWJbXtzXhouqap+4ZMvzDYdbthRmUh8f/685K1BhhitH+dHr/uJw+rttE3nrfVJEDAe71rNnM1rT+QLd93/qaZ320YG3DE0zQ+eP9DIDyVEa79j5/ANhjF+ZrGpreX4ae5/ve6B5mzehkOnGhVCMSjNHl41qWh83Sd/2UfzrwgsMGNsC0nCDc79dH0GETDMBVf9ZpmbICI8ETgvG2XL9ORrZpjsIIMtQhqmR6uJ5j+G5zKNeXy/btHXQpV2OzN1jQIs9ZRWGCUoIDCozX6dgyvVVRVapRXRPRzRc6ni9vx/31bbs/Xy4AuWTjnhnspBC1QALqrTlKCGc0oZk/TkVTQV5oASZwst3vt/cDbdcJ/Aivj2/vlw10NkgpUwXp8t60BNpYwLaIKJVtxRiHTYZNlAUFke4ounDISkk0zc6XrEusF6aUFF3gGoUTimESQsDCNIKxgmDxuYpte1um+0q1MnXdeDO7jdB2J3Pa1oILQsFAQXHFkaql4AyjqgXwbRZSKiXZbrfLmZB57Jm6PfiWRs300qrmvMBSJAien1YkVHGhlMBFl0V4TRhZgeLlGEKwnP3h2F+TaM7yVimFo/T19RVXbR6GvIY1aFkSpYQQjNB8PHgZWIamaboBq/VlDyEgXsqEEHTiTRDhnKW+B9GGVsls4g+hLsHQzPqn1xgesmAynIOi+XTYnfP5cDiMsiiNomg4HUZpmi6GofPjI9j7C+S59LoPFFNEAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 9150,
            actualAp: 3050,
            actualDps: 5083.33,
            magnification: "61%",
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            actualHp: 24400,
            actualAp: 2440,
            actualDps: 1284.21,
            magnification: "61%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 1040,
            actualAp: 92,
            actualDps: 61.67,
            magnification: "578%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 1156,
            actualAp: 173,
            actualDps: 133.4,
            magnification: "578%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 5780,
            actualAp: 578,
            actualDps: 339.98,
            magnification: "578%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "12.0-20.0s",
            delayFrames: "360-600f",
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
            actualHp: 169500,
            actualAp: 2034,
            actualDps: 3211.58,
            magnification: "339%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-42.0s",
            delayFrames: "1,200-1,260f",
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
            actualHp: 156500,
            actualAp: 8340,
            actualDps: 1021.22,
            magnification: "139%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "帰省 Lv.3",
      baseHp: 187500,
      width: 4500,
      enemyLimit: 8,
      requiredCost: 70,
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
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "292",
          enemyName: "ワニボン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAAMCAQMDAgMEAwUFAwcIBQoIBQoIBgkKBg0KBwwKBw0MBw4LCQ0RDhQTDhcVDhwXDh8YER0cECQaEx8cFSIsGzsuHzsvHzszH0I1IEc7J0k9JU9COUlNLmREO0pPNWNeN3xQTVJjPIBuQZB3SJhiYGRkYGV7SaCFTqyNU7dxb3KWW72gYsmMfJOpZ9iwa+GRkZG4cfC8c/zCd/ikoKW+rcPKv87U1NTv0PXp6en///9aWJdBAAAAQHRSTlMABg0VHSo8MlFFYttbhGyxeNCOpOn7mtjCsu/O/92E/ur+/9fw///0//j/7P/+//r//vn///3////9//////8A4AyyoAAAA7xJREFUWIXtlF+XojgQxeWftKiIaCMCbjASDUpCIhHQtnu//7faQqfPbDuzZ2bPnn3zPuSJ/LhVdSu9P/+jek/AE/AEPAFPwBPwBDwBT8D/APiF9L7rjgZmr6fp2q++/Yk024+z3W4V9Aee79r/HmEvd7Ju2yqbrnZ5trTuVP23zWheVjcMU1UhVAiZOt1F/cX3HdOw+8ZvGAhZW6zLLVEEU0rQbGCZhrPK83QyW60C66eX/mYPDKgalx/ntVR1U1ci38TLIOZKSEKEyMb6j54tZ/yifQfs6oasTyVWzV215DmvSSJaiQlfmo/3DTfMdsH32uywqCuCsOzu1jWcLagmSLYyITJ+rEH3Us75ZvRpQXtZECbrCm5WNMsyQim0UtVKtU0tqh8B/VgUmPF48I1gzjBj7Gafho7jTeZrEMpyzjtOPnkoQXMyhmjBcyhC0wxr4C4oAGRnHxqmadbyeL2eFr4XLJL1Gq+8hyYa451ICGEsHtij8SzcZElRFLxzoFIXXGmjzdv14Bma4aXnYzx6MGC4K1kkmDIahfHhWJbXtzXhouqap+4ZMvzDYdbthRmUh8f/685K1BhhitH+dHr/uJw+rttE3nrfVJEDAe71rNnM1rT+QLd93/qaZ320YG3DE0zQ+eP9DIDyVEa79j5/ANhjF+ZrGpreX4ae5/ve6B5mzehkOnGhVCMSjNHl41qWh83Sd/2UfzrwgsMGNsC0nCDc79dH0GETDMBVf9ZpmbICI8ETgvG2XL9ORrZpjsIIMtQhqmR6uJ5j+G5zKNeXy/btHXQpV2OzN1jQIs9ZRWGCUoIDCozX6dgyvVVRVapRXRPRzRc6ni9vx/31bbs/Xy4AuWTjnhnspBC1QALqrTlKCGc0oZk/TkVTQV5oASZwst3vt/cDbdcJ/Aivj2/vlw10NkgpUwXp8t60BNpYwLaIKJVtxRiHTYZNlAUFke4ounDISkk0zc6XrEusF6aUFF3gGoUTimESQsDCNIKxgmDxuYpte1um+0q1MnXdeDO7jdB2J3Pa1oILQsFAQXHFkaql4AyjqgXwbRZSKiXZbrfLmZB57Jm6PfiWRs300qrmvMBSJAien1YkVHGhlMBFl0V4TRhZgeLlGEKwnP3h2F+TaM7yVimFo/T19RVXbR6GvIY1aFkSpYQQjNB8PHgZWIamaboBq/VlDyEgXsqEEHTiTRDhnKW+B9GGVsls4g+hLsHQzPqn1xgesmAynIOi+XTYnfP5cDiMsiiNomg4HUZpmi6GofPjI9j7C+S59LoPFFNEAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 10800,
            actualAp: 3600,
            actualDps: 6000.0,
            magnification: "72%",
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            actualHp: 28800,
            actualAp: 2880,
            actualDps: 1515.79,
            magnification: "72%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 1360,
            actualAp: 120,
            actualDps: 80.67,
            magnification: "756%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 1512,
            actualAp: 226,
            actualDps: 174.48,
            magnification: "756%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 7560,
            actualAp: 756,
            actualDps: 444.68,
            magnification: "756%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "12.0-20.0s",
            delayFrames: "360-600f",
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
            actualHp: 189000,
            actualAp: 2268,
            actualDps: 3581.06,
            magnification: "378%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-42.0s",
            delayFrames: "1,200-1,260f",
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
            actualHp: 200410,
            actualAp: 10680,
            actualDps: 1307.75,
            magnification: "178%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 3,
      stageName: "帰省 Lv.4",
      baseHp: 225000,
      width: 4500,
      enemyLimit: 8,
      requiredCost: 70,
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
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "292",
          enemyName: "ワニボン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAAMCAQMDAgMEAwUFAwcIBQoIBQoIBgkKBg0KBwwKBw0MBw4LCQ0RDhQTDhcVDhwXDh8YER0cECQaEx8cFSIsGzsuHzsvHzszH0I1IEc7J0k9JU9COUlNLmREO0pPNWNeN3xQTVJjPIBuQZB3SJhiYGRkYGV7SaCFTqyNU7dxb3KWW72gYsmMfJOpZ9iwa+GRkZG4cfC8c/zCd/ikoKW+rcPKv87U1NTv0PXp6en///9aWJdBAAAAQHRSTlMABg0VHSo8MlFFYttbhGyxeNCOpOn7mtjCsu/O/92E/ur+/9fw///0//j/7P/+//r//vn///3////9//////8A4AyyoAAAA7xJREFUWIXtlF+XojgQxeWftKiIaCMCbjASDUpCIhHQtnu//7faQqfPbDuzZ2bPnn3zPuSJ/LhVdSu9P/+jek/AE/AEPAFPwBPwBDwBT8D/APiF9L7rjgZmr6fp2q++/Yk024+z3W4V9Aee79r/HmEvd7Ju2yqbrnZ5trTuVP23zWheVjcMU1UhVAiZOt1F/cX3HdOw+8ZvGAhZW6zLLVEEU0rQbGCZhrPK83QyW60C66eX/mYPDKgalx/ntVR1U1ci38TLIOZKSEKEyMb6j54tZ/yifQfs6oasTyVWzV215DmvSSJaiQlfmo/3DTfMdsH32uywqCuCsOzu1jWcLagmSLYyITJ+rEH3Us75ZvRpQXtZECbrCm5WNMsyQim0UtVKtU0tqh8B/VgUmPF48I1gzjBj7Gafho7jTeZrEMpyzjtOPnkoQXMyhmjBcyhC0wxr4C4oAGRnHxqmadbyeL2eFr4XLJL1Gq+8hyYa451ICGEsHtij8SzcZElRFLxzoFIXXGmjzdv14Bma4aXnYzx6MGC4K1kkmDIahfHhWJbXtzXhouqap+4ZMvzDYdbthRmUh8f/685K1BhhitH+dHr/uJw+rttE3nrfVJEDAe71rNnM1rT+QLd93/qaZ320YG3DE0zQ+eP9DIDyVEa79j5/ANhjF+ZrGpreX4ae5/ve6B5mzehkOnGhVCMSjNHl41qWh83Sd/2UfzrwgsMGNsC0nCDc79dH0GETDMBVf9ZpmbICI8ETgvG2XL9ORrZpjsIIMtQhqmR6uJ5j+G5zKNeXy/btHXQpV2OzN1jQIs9ZRWGCUoIDCozX6dgyvVVRVapRXRPRzRc6ni9vx/31bbs/Xy4AuWTjnhnspBC1QALqrTlKCGc0oZk/TkVTQV5oASZwst3vt/cDbdcJ/Aivj2/vlw10NkgpUwXp8t60BNpYwLaIKJVtxRiHTYZNlAUFke4ounDISkk0zc6XrEusF6aUFF3gGoUTimESQsDCNIKxgmDxuYpte1um+0q1MnXdeDO7jdB2J3Pa1oILQsFAQXHFkaql4AyjqgXwbRZSKiXZbrfLmZB57Jm6PfiWRs300qrmvMBSJAien1YkVHGhlMBFl0V4TRhZgeLlGEKwnP3h2F+TaM7yVimFo/T19RVXbR6GvIY1aFkSpYQQjNB8PHgZWIamaboBq/VlDyEgXsqEEHTiTRDhnKW+B9GGVsls4g+hLsHQzPqn1xgesmAynIOi+XTYnfP5cDiMsiiNomg4HUZpmi6GofPjI9j7C+S59LoPFFNEAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 12450,
            actualAp: 4150,
            actualDps: 6916.66,
            magnification: "83%",
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            actualHp: 33200,
            actualAp: 3320,
            actualDps: 1747.37,
            magnification: "83%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 1681,
            actualAp: 149,
            actualDps: 99.66,
            magnification: "934%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 1868,
            actualAp: 280,
            actualDps: 215.57,
            magnification: "934%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 9340,
            actualAp: 934,
            actualDps: 549.38,
            magnification: "934%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "12.0-20.0s",
            delayFrames: "360-600f",
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
            actualHp: 208500,
            actualAp: 2502,
            actualDps: 3950.53,
            magnification: "417%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-42.0s",
            delayFrames: "1,200-1,260f",
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
            actualHp: 244320,
            actualAp: 13020,
            actualDps: 1594.28,
            magnification: "217%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 4,
      stageName: "帰省 Lv.5",
      baseHp: 262500,
      width: 4500,
      enemyLimit: 8,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "157",
          treasureName: "プラチナチケットの欠片",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "292",
          enemyName: "ワニボン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAAMCAQMDAgMEAwUFAwcIBQoIBQoIBgkKBg0KBwwKBw0MBw4LCQ0RDhQTDhcVDhwXDh8YER0cECQaEx8cFSIsGzsuHzsvHzszH0I1IEc7J0k9JU9COUlNLmREO0pPNWNeN3xQTVJjPIBuQZB3SJhiYGRkYGV7SaCFTqyNU7dxb3KWW72gYsmMfJOpZ9iwa+GRkZG4cfC8c/zCd/ikoKW+rcPKv87U1NTv0PXp6en///9aWJdBAAAAQHRSTlMABg0VHSo8MlFFYttbhGyxeNCOpOn7mtjCsu/O/92E/ur+/9fw///0//j/7P/+//r//vn///3////9//////8A4AyyoAAAA7xJREFUWIXtlF+XojgQxeWftKiIaCMCbjASDUpCIhHQtnu//7faQqfPbDuzZ2bPnn3zPuSJ/LhVdSu9P/+jek/AE/AEPAFPwBPwBDwBT8D/APiF9L7rjgZmr6fp2q++/Yk024+z3W4V9Aee79r/HmEvd7Ju2yqbrnZ5trTuVP23zWheVjcMU1UhVAiZOt1F/cX3HdOw+8ZvGAhZW6zLLVEEU0rQbGCZhrPK83QyW60C66eX/mYPDKgalx/ntVR1U1ci38TLIOZKSEKEyMb6j54tZ/yifQfs6oasTyVWzV215DmvSSJaiQlfmo/3DTfMdsH32uywqCuCsOzu1jWcLagmSLYyITJ+rEH3Us75ZvRpQXtZECbrCm5WNMsyQim0UtVKtU0tqh8B/VgUmPF48I1gzjBj7Gafho7jTeZrEMpyzjtOPnkoQXMyhmjBcyhC0wxr4C4oAGRnHxqmadbyeL2eFr4XLJL1Gq+8hyYa451ICGEsHtij8SzcZElRFLxzoFIXXGmjzdv14Bma4aXnYzx6MGC4K1kkmDIahfHhWJbXtzXhouqap+4ZMvzDYdbthRmUh8f/685K1BhhitH+dHr/uJw+rttE3nrfVJEDAe71rNnM1rT+QLd93/qaZ320YG3DE0zQ+eP9DIDyVEa79j5/ANhjF+ZrGpreX4ae5/ve6B5mzehkOnGhVCMSjNHl41qWh83Sd/2UfzrwgsMGNsC0nCDc79dH0GETDMBVf9ZpmbICI8ETgvG2XL9ORrZpjsIIMtQhqmR6uJ5j+G5zKNeXy/btHXQpV2OzN1jQIs9ZRWGCUoIDCozX6dgyvVVRVapRXRPRzRc6ni9vx/31bbs/Xy4AuWTjnhnspBC1QALqrTlKCGc0oZk/TkVTQV5oASZwst3vt/cDbdcJ/Aivj2/vlw10NkgpUwXp8t60BNpYwLaIKJVtxRiHTYZNlAUFke4ounDISkk0zc6XrEusF6aUFF3gGoUTimESQsDCNIKxgmDxuYpte1um+0q1MnXdeDO7jdB2J3Pa1oILQsFAQXHFkaql4AyjqgXwbRZSKiXZbrfLmZB57Jm6PfiWRs300qrmvMBSJAien1YkVHGhlMBFl0V4TRhZgeLlGEKwnP3h2F+TaM7yVimFo/T19RVXbR6GvIY1aFkSpYQQjNB8PHgZWIamaboBq/VlDyEgXsqEEHTiTRDhnKW+B9GGVsls4g+hLsHQzPqn1xgesmAynIOi+XTYnfP5cDiMsiiNomg4HUZpmi6GofPjI9j7C+S59LoPFFNEAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 14100,
            actualAp: 4700,
            actualDps: 7833.33,
            magnification: "94%",
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            actualHp: 37600,
            actualAp: 3760,
            actualDps: 1978.94,
            magnification: "94%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 2001,
            actualAp: 177,
            actualDps: 118.65,
            magnification: "1112%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 2224,
            actualAp: 333,
            actualDps: 256.65,
            magnification: "1112%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 11120,
            actualAp: 1112,
            actualDps: 654.08,
            magnification: "1112%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "12.0-20.0s",
            delayFrames: "360-600f",
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
            actualHp: 228000,
            actualAp: 2736,
            actualDps: 4320.01,
            magnification: "456%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-42.0s",
            delayFrames: "1,200-1,260f",
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
            actualHp: 288230,
            actualAp: 15360,
            actualDps: 1880.81,
            magnification: "256%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 5,
      stageName: "帰省 Lv.6",
      baseHp: 300000,
      width: 4500,
      enemyLimit: 8,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "56",
          treasureName: "ネコビタンB",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "292",
          enemyName: "ワニボン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAAMCAQMDAgMEAwUFAwcIBQoIBQoIBgkKBg0KBwwKBw0MBw4LCQ0RDhQTDhcVDhwXDh8YER0cECQaEx8cFSIsGzsuHzsvHzszH0I1IEc7J0k9JU9COUlNLmREO0pPNWNeN3xQTVJjPIBuQZB3SJhiYGRkYGV7SaCFTqyNU7dxb3KWW72gYsmMfJOpZ9iwa+GRkZG4cfC8c/zCd/ikoKW+rcPKv87U1NTv0PXp6en///9aWJdBAAAAQHRSTlMABg0VHSo8MlFFYttbhGyxeNCOpOn7mtjCsu/O/92E/ur+/9fw///0//j/7P/+//r//vn///3////9//////8A4AyyoAAAA7xJREFUWIXtlF+XojgQxeWftKiIaCMCbjASDUpCIhHQtnu//7faQqfPbDuzZ2bPnn3zPuSJ/LhVdSu9P/+jek/AE/AEPAFPwBPwBDwBT8D/APiF9L7rjgZmr6fp2q++/Yk024+z3W4V9Aee79r/HmEvd7Ju2yqbrnZ5trTuVP23zWheVjcMU1UhVAiZOt1F/cX3HdOw+8ZvGAhZW6zLLVEEU0rQbGCZhrPK83QyW60C66eX/mYPDKgalx/ntVR1U1ci38TLIOZKSEKEyMb6j54tZ/yifQfs6oasTyVWzV215DmvSSJaiQlfmo/3DTfMdsH32uywqCuCsOzu1jWcLagmSLYyITJ+rEH3Us75ZvRpQXtZECbrCm5WNMsyQim0UtVKtU0tqh8B/VgUmPF48I1gzjBj7Gafho7jTeZrEMpyzjtOPnkoQXMyhmjBcyhC0wxr4C4oAGRnHxqmadbyeL2eFr4XLJL1Gq+8hyYa451ICGEsHtij8SzcZElRFLxzoFIXXGmjzdv14Bma4aXnYzx6MGC4K1kkmDIahfHhWJbXtzXhouqap+4ZMvzDYdbthRmUh8f/685K1BhhitH+dHr/uJw+rttE3nrfVJEDAe71rNnM1rT+QLd93/qaZ320YG3DE0zQ+eP9DIDyVEa79j5/ANhjF+ZrGpreX4ae5/ve6B5mzehkOnGhVCMSjNHl41qWh83Sd/2UfzrwgsMGNsC0nCDc79dH0GETDMBVf9ZpmbICI8ETgvG2XL9ORrZpjsIIMtQhqmR6uJ5j+G5zKNeXy/btHXQpV2OzN1jQIs9ZRWGCUoIDCozX6dgyvVVRVapRXRPRzRc6ni9vx/31bbs/Xy4AuWTjnhnspBC1QALqrTlKCGc0oZk/TkVTQV5oASZwst3vt/cDbdcJ/Aivj2/vlw10NkgpUwXp8t60BNpYwLaIKJVtxRiHTYZNlAUFke4ounDISkk0zc6XrEusF6aUFF3gGoUTimESQsDCNIKxgmDxuYpte1um+0q1MnXdeDO7jdB2J3Pa1oILQsFAQXHFkaql4AyjqgXwbRZSKiXZbrfLmZB57Jm6PfiWRs300qrmvMBSJAien1YkVHGhlMBFl0V4TRhZgeLlGEKwnP3h2F+TaM7yVimFo/T19RVXbR6GvIY1aFkSpYQQjNB8PHgZWIamaboBq/VlDyEgXsqEEHTiTRDhnKW+B9GGVsls4g+hLsHQzPqn1xgesmAynIOi+XTYnfP5cDiMsiiNomg4HUZpmi6GofPjI9j7C+S59LoPFFNEAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 15750,
            actualAp: 5250,
            actualDps: 8750.0,
            magnification: "105%",
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "286",
          enemyName: "カバタリアン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAEDAQQDAwQFBAcIBAkHBgkIBQoIBQsLBw8MBxEMCBANCBIOCRMPChQQChYRChcRChcXDh8cESUhGCYlFjElFjIlGi0mHywqHzAuGz00JEEvLy8+JVM/J1M+LUZHKl5MMWRTM29ZNndQRVheOX1lPYZxRZdiVmt7SqSESrBxYXyJULePVsCYW8yDco2gYdanZOCvau2ciae1b/a5cf6onq/HqtrSvd/nwv7j4+P///9OYQPHAAAAQHRSTlMABQ8aIys2QFdK/2XX4HKD6JmPw6Sv7bn/xtL3nP/q/6/h1f/2/+T+//P+/f/+/////////////////v/+//8AUeTCTAAABJBJREFUWIXtlm93ojoQxgsottpKVVCka7OKLJAITdIkBnW73/9b3YQ/itpue8+9L/uco0bI/JjMTCbc/PmPuvkGfAO+Ad+A/w3woQy7Z35893MZvXkwuCCYdtf4MsAcQRzctuebvR8r1/oyoBtQmQe9E8EcrjBbdb8MuF0KKZHXaf4bgyUt+NcBxiCVhRSpY5od+05rhguJZ73OFyNrDBWgKOhy6MxXv5SWTzCLwudgPv5LcgzTsizTMAw1ctYaUJDnp4xLJUYgABmj+ToYdLvv+mH2hmNvNnMdZzgYjANAFEFKHLGikiARwBRn8DlQftimaVptjmGPlykmVM9I0zSjWYQoE4XkQrtSflgESZ5lMQDgKfA8dzYZHYNq3M0RL52WUgiVADUdwYyXz+aElbdUVDnOIdB0mIcA4XTU2PfmsHZVcsxKiEJVZiQMI1zUCE4hFJQSSCAVgq1qgOXGeQMQlDOMc0xF/T9K9ttYFE0oaMaBDynnJI7wssn6MsPVCrQFwbkWqVYvos3bLuENQF0QUb8PJV30QRbUDnioWaYSq+zz2ieZgU2Cjnf1FYoiQJEf4XRcOXD7i8tmhpS0ts9pdU1giEUbUHrJKRF4XmbB6Koybd1rHGii8rHwrNydHTdtPaAF4O3J8vilvax++crWFeissWwD6hjWQTxKVYOQx1LhjFGMAg24WyHYnirqGOBzB3DogyiOoVYchSDZbDYPumdZI4TisxgLUj6/bS8Louo3BGBRSv3627e3w1y3i96SnwOUh4xSfh52Hi7CtsB0sz/sdBL0xkfwL5GulPmhcqCxXoDpePzz5w+9gs4MZuvPAKoafW1WA9QivI7azqbumF3XdbxUfkJgi/6i3/crwsIHj6d+bVimOfgUkPdLVXHwF2By1t6NzwBSqt3jK4BfA57G5r8C6BWcAECt4O6yAxdllX6Iwf1adQgmnWuAlJzL9wlSxrW9X+dgdN6UjdtUmXJyXrtF0bgkBTj34Mm5OGPv1DFWsHe2r/JKtzKukphskjBKEl3N/nR4AbCXXPfSq64hKcZEEchis92+bvf77etGOXDtQWfOyqddhKDqDKzg8ct+uz38/r1LXne77Yvvz86DeGPNcr17rkKot6XqtWhz2O+U/f41Oby9ve3CxdSx9AF4lDmK1Ux2RVAdXnF5vPuttUt8oHrAJgGh/+iNRuOh3TCM4fqqgZxENgdtv09idfCVwhlSXQWlc/uUhixTJ4l8txAqwOElvopROmgA3QDpHqRa3bW9ZHB3OOxfo+senTnHIHhQLYFIGpOLTOpkEvjyksRUXN4Rv25vzoJAJY8WkNWNt1oOpbrDoQixqxyT9PQGdWMHCKuESRb7ABLGRSl1yEaRfrB6zYghKuOke36GEEqXM6f11mi5sOrCgqwnQVQrnN5PnmkVCPTgPoBa04k3GvasdjmqliCa0A6dlBItvB7bXTevrtOZ7SJWKpvYlnlRzEYvyEiltTt6xs1wMPDWqFQ8GbrN0LOv3rGMO+/h8XE6nT5OHx/u9UBLDe/V5UpqrL4e1M+955zeYP8B5fii7LIX0E4AAAAASUVORK5CYII=",
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
            actualHp: 42000,
            actualAp: 4200,
            actualDps: 2210.52,
            magnification: "105%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 2322,
            actualAp: 206,
            actualDps: 137.64,
            magnification: "1290%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 2580,
            actualAp: 387,
            actualDps: 297.73,
            magnification: "1290%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "105",
          enemyName: "ゴーストメェメェ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgICAgIDAwMDAwMFBQUGBgYHBwcHBwcICAgKCgoLDA0MDAwNDQ0MEBIaGxsVICQcHyIjJSYpKSktLS0pNDgzNDU1ODouQEU2RkwtS1JOTk4/VFo3W2VAZnFeXl5KaXBcY2ZsbGxPgpB5eXlqgIeHh4dplKCJiYlena5wn6uUlJRpr8Cenp6goaN4tcRwvM6srKx6zOG5ubnCwsLLy8vX19fa4OLf39/m5ubv7+/5+fn///8Vj6Y9AAAAQHRSTlMACt8TG7Buzy8nOKKOXr5HUH9toIjJc1ipy5e568XMtsrTzO+zy8zM8MLizMzyzMzL3vXOy8zLzMzM8MzMzMzMSMznwAAABOlJREFUWIXtV393ojoQlQftAhVBFAVUUEpMbRCza8qPJQnf/1u9Qetbt8Wz3e05768dz/GgZC53bmYmw2Dw26Yav+9zbYp1r3wKwJhMtE8B2OvY/iTAdqx+BkBfZPHY/ASEOl4ftrH7pwiKZo69w8vxT3VQrMlivT2+HBc9AOoHtledgPcLEHB7ttKx+vZX0XTb1DVFNXQDvsfrDBAOvtmz1Lmb2m+lUXQ3THexH7rDOE1D1zQfggMwWI17HqaNF7F7CUNRuivD9aNScEQrEuFGVNQfepvDET4r6x1VwxmvtucsVUxrNptZphPuKBJthZpWVigXdZ4sl4+b9Xp9OIRv/S1/tVr4ltJFbfk7VrCdn5bgx9sil62scVDWlD3t91GWbdbH+A2A7mfrqW2Av+r6KZWyFSQoZFtj3grRSpYQQoTIn77vt9vV9gaA2cVt+oWQbSuLBKNSikq0YIKVosE1RV8BIFutssx/G4ITLla+pammuyg6lwYVgsHjX01KyQlJCvH9aXM8ZNninYgDzVpk68k0zasTgRwDcS5qxoCC7DiQKKCy5ckoThcT610tqM5k+3J8XFby9MQ6SmgtBUUoKWRnDcuDpG5bntq6Don11t8YxxkkyP6xPBOmmGHSEFRyTAqaE4JxFFEgU816M15xIcez7fO3p68nAgIxKThDVZFHQZQzVhQkwJWUgs37/Aeqfzxu1pvlfn8GqBMIRWCao5zlCOdAIUKUlRWN+6oAFIyPm032/PjtFaAIEK1rRBPGIXwcoCSJEgSCBMP+jqr623W2eny8hMAQI6wDSHAtK0hCITgXvClvEBgo09X2uFzuvz1VJxEZgXA5KnidE16QhMkSd3dEequlO6Ptyx78v553kWEhIXFxAzXQNJxQSTwGwCLVbwBow1W23z89v6ZelTCKaY0RwQQyEFNZs3N+TW9R0MfecvncvGauSCLQQPKSFbWsScAuKc137q3Op5jDoP4v9SkG+cumi6OEUrwAQ42kN2QcKHbM5I91qJAFqhvSwIagqxuSTW8cCWZc/VgG6xAFP44qgQMsru7wGxTU6dVjOhVohGrYyZxFQXF9Q9J+FcyUt9cIkPUIdRWECeJXuKWowj4AZZxQ3v5kkldFUdaiwOIqAKiIsE8EdfglYKLtswpfIcsSJZM+AMUaeV3D6bEGVT/zSvsAtClBXtHn30rSActX77JkfRqoLuYsKHsB2hL6KzQ1wOAESjp430+hltK6wR7rDaHLCUxIp5BoOK/8vnqy4AQdeVWvPyDULM8j6I/AQ+x6m6JmO/YwafoZnDCa+B7OaUrRzXJU7BC67lmri9dVavFYV3XHdd9NAFcI9wsKYtVNJ9gZQFzwZNvEv55w9XFUlGUSIcJKuOASalGeTjWAIreK8NqMEAWBd3c/9ALPC9BuF2EmoC3WDUv8j4xlyoxEORmquo+DLw+W445HHqU0iCLvwfzQhG3voHYmmhqWZUdZ0YYRShYPHsnDjw3YegoDDSTKHJroycXZwVHghNWtLvLWtLCG/bKhOYiz6kbK5c62csFmH5ptldmuYAtzoIa7nW+c/6BoboQ09z/2nmLM53Mb5DIc56ya4cxhcrJd1/nUiP/X/tr/bZpu2rbjWGD3F+t+OI7dvTr90l9xhg93d6PRF7B/Ltb9GI3u7h6Gzvuu8i8pdTIVUawkxwAAAABJRU5ErkJggg==",
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
            actualHp: 12900,
            actualAp: 1290,
            actualDps: 758.78,
            magnification: "1290%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "12.0-20.0s",
            delayFrames: "360-600f",
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
            actualHp: 247500,
            actualAp: 2970,
            actualDps: 4689.48,
            magnification: "495%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-42.0s",
            delayFrames: "1,200-1,260f",
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
            actualHp: 332140,
            actualAp: 17700,
            actualDps: 2167.34,
            magnification: "295%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 6,
      stageName: "帰省 Lv.7",
      baseHp: 337500,
      width: 4500,
      enemyLimit: 8,
      requiredCost: 90,
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
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "292",
          enemyName: "ワニボン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAAMCAQMDAgMEAwUFAwcIBQoIBQoIBgkKBg0KBwwKBw0MBw4LCQ0RDhQTDhcVDhwXDh8YER0cECQaEx8cFSIsGzsuHzsvHzszH0I1IEc7J0k9JU9COUlNLmREO0pPNWNeN3xQTVJjPIBuQZB3SJhiYGRkYGV7SaCFTqyNU7dxb3KWW72gYsmMfJOpZ9iwa+GRkZG4cfC8c/zCd/ikoKW+rcPKv87U1NTv0PXp6en///9aWJdBAAAAQHRSTlMABg0VHSo8MlFFYttbhGyxeNCOpOn7mtjCsu/O/92E/ur+/9fw///0//j/7P/+//r//vn///3////9//////8A4AyyoAAAA7xJREFUWIXtlF+XojgQxeWftKiIaCMCbjASDUpCIhHQtnu//7faQqfPbDuzZ2bPnn3zPuSJ/LhVdSu9P/+jek/AE/AEPAFPwBPwBDwBT8D/APiF9L7rjgZmr6fp2q++/Yk024+z3W4V9Aee79r/HmEvd7Ju2yqbrnZ5trTuVP23zWheVjcMU1UhVAiZOt1F/cX3HdOw+8ZvGAhZW6zLLVEEU0rQbGCZhrPK83QyW60C66eX/mYPDKgalx/ntVR1U1ci38TLIOZKSEKEyMb6j54tZ/yifQfs6oasTyVWzV215DmvSSJaiQlfmo/3DTfMdsH32uywqCuCsOzu1jWcLagmSLYyITJ+rEH3Us75ZvRpQXtZECbrCm5WNMsyQim0UtVKtU0tqh8B/VgUmPF48I1gzjBj7Gafho7jTeZrEMpyzjtOPnkoQXMyhmjBcyhC0wxr4C4oAGRnHxqmadbyeL2eFr4XLJL1Gq+8hyYa451ICGEsHtij8SzcZElRFLxzoFIXXGmjzdv14Bma4aXnYzx6MGC4K1kkmDIahfHhWJbXtzXhouqap+4ZMvzDYdbthRmUh8f/685K1BhhitH+dHr/uJw+rttE3nrfVJEDAe71rNnM1rT+QLd93/qaZ320YG3DE0zQ+eP9DIDyVEa79j5/ANhjF+ZrGpreX4ae5/ve6B5mzehkOnGhVCMSjNHl41qWh83Sd/2UfzrwgsMGNsC0nCDc79dH0GETDMBVf9ZpmbICI8ETgvG2XL9ORrZpjsIIMtQhqmR6uJ5j+G5zKNeXy/btHXQpV2OzN1jQIs9ZRWGCUoIDCozX6dgyvVVRVapRXRPRzRc6ni9vx/31bbs/Xy4AuWTjnhnspBC1QALqrTlKCGc0oZk/TkVTQV5oASZwst3vt/cDbdcJ/Aivj2/vlw10NkgpUwXp8t60BNpYwLaIKJVtxRiHTYZNlAUFke4ounDISkk0zc6XrEusF6aUFF3gGoUTimESQsDCNIKxgmDxuYpte1um+0q1MnXdeDO7jdB2J3Pa1oILQsFAQXHFkaql4AyjqgXwbRZSKiXZbrfLmZB57Jm6PfiWRs300qrmvMBSJAien1YkVHGhlMBFl0V4TRhZgeLlGEKwnP3h2F+TaM7yVimFo/T19RVXbR6GvIY1aFkSpYQQjNB8PHgZWIamaboBq/VlDyEgXsqEEHTiTRDhnKW+B9GGVsls4g+hLsHQzPqn1xgesmAynIOi+XTYnfP5cDiMsiiNomg4HUZpmi6GofPjI9j7C+S59LoPFFNEAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 17400,
            actualAp: 5800,
            actualDps: 9666.66,
            magnification: "116%",
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            actualHp: 46400,
            actualAp: 4640,
            actualDps: 2442.1,
            magnification: "116%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 2642,
            actualAp: 234,
            actualDps: 156.64,
            magnification: "1468%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 2936,
            actualAp: 440,
            actualDps: 338.81,
            magnification: "1468%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 14680,
            actualAp: 1468,
            actualDps: 863.48,
            magnification: "1468%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "12.0-20.0s",
            delayFrames: "360-600f",
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
            actualHp: 267000,
            actualAp: 3204,
            actualDps: 5058.96,
            magnification: "534%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-42.0s",
            delayFrames: "1,200-1,260f",
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
            actualHp: 376050,
            actualAp: 20040,
            actualDps: 2453.86,
            magnification: "334%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 7,
      stageName: "帰省 Lv.8",
      baseHp: 375000,
      width: 4500,
      enemyLimit: 8,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "57",
          treasureName: "ネコビタンC",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "292",
          enemyName: "ワニボン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAAMCAQMDAgMEAwUFAwcIBQoIBQoIBgkKBg0KBwwKBw0MBw4LCQ0RDhQTDhcVDhwXDh8YER0cECQaEx8cFSIsGzsuHzsvHzszH0I1IEc7J0k9JU9COUlNLmREO0pPNWNeN3xQTVJjPIBuQZB3SJhiYGRkYGV7SaCFTqyNU7dxb3KWW72gYsmMfJOpZ9iwa+GRkZG4cfC8c/zCd/ikoKW+rcPKv87U1NTv0PXp6en///9aWJdBAAAAQHRSTlMABg0VHSo8MlFFYttbhGyxeNCOpOn7mtjCsu/O/92E/ur+/9fw///0//j/7P/+//r//vn///3////9//////8A4AyyoAAAA7xJREFUWIXtlF+XojgQxeWftKiIaCMCbjASDUpCIhHQtnu//7faQqfPbDuzZ2bPnn3zPuSJ/LhVdSu9P/+jek/AE/AEPAFPwBPwBDwBT8D/APiF9L7rjgZmr6fp2q++/Yk024+z3W4V9Aee79r/HmEvd7Ju2yqbrnZ5trTuVP23zWheVjcMU1UhVAiZOt1F/cX3HdOw+8ZvGAhZW6zLLVEEU0rQbGCZhrPK83QyW60C66eX/mYPDKgalx/ntVR1U1ci38TLIOZKSEKEyMb6j54tZ/yifQfs6oasTyVWzV215DmvSSJaiQlfmo/3DTfMdsH32uywqCuCsOzu1jWcLagmSLYyITJ+rEH3Us75ZvRpQXtZECbrCm5WNMsyQim0UtVKtU0tqh8B/VgUmPF48I1gzjBj7Gafho7jTeZrEMpyzjtOPnkoQXMyhmjBcyhC0wxr4C4oAGRnHxqmadbyeL2eFr4XLJL1Gq+8hyYa451ICGEsHtij8SzcZElRFLxzoFIXXGmjzdv14Bma4aXnYzx6MGC4K1kkmDIahfHhWJbXtzXhouqap+4ZMvzDYdbthRmUh8f/685K1BhhitH+dHr/uJw+rttE3nrfVJEDAe71rNnM1rT+QLd93/qaZ320YG3DE0zQ+eP9DIDyVEa79j5/ANhjF+ZrGpreX4ae5/ve6B5mzehkOnGhVCMSjNHl41qWh83Sd/2UfzrwgsMGNsC0nCDc79dH0GETDMBVf9ZpmbICI8ETgvG2XL9ORrZpjsIIMtQhqmR6uJ5j+G5zKNeXy/btHXQpV2OzN1jQIs9ZRWGCUoIDCozX6dgyvVVRVapRXRPRzRc6ni9vx/31bbs/Xy4AuWTjnhnspBC1QALqrTlKCGc0oZk/TkVTQV5oASZwst3vt/cDbdcJ/Aivj2/vlw10NkgpUwXp8t60BNpYwLaIKJVtxRiHTYZNlAUFke4ounDISkk0zc6XrEusF6aUFF3gGoUTimESQsDCNIKxgmDxuYpte1um+0q1MnXdeDO7jdB2J3Pa1oILQsFAQXHFkaql4AyjqgXwbRZSKiXZbrfLmZB57Jm6PfiWRs300qrmvMBSJAien1YkVHGhlMBFl0V4TRhZgeLlGEKwnP3h2F+TaM7yVimFo/T19RVXbR6GvIY1aFkSpYQQjNB8PHgZWIamaboBq/VlDyEgXsqEEHTiTRDhnKW+B9GGVsls4g+hLsHQzPqn1xgesmAynIOi+XTYnfP5cDiMsiiNomg4HUZpmi6GofPjI9j7C+S59LoPFFNEAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 19050,
            actualAp: 6350,
            actualDps: 10583.33,
            magnification: "127%",
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            actualHp: 50800,
            actualAp: 5080,
            actualDps: 2673.68,
            magnification: "127%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 2962,
            actualAp: 263,
            actualDps: 175.63,
            magnification: "1646%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 3292,
            actualAp: 493,
            actualDps: 379.9,
            magnification: "1646%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 16460,
            actualAp: 1646,
            actualDps: 968.18,
            magnification: "1646%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "12.0-20.0s",
            delayFrames: "360-600f",
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
            actualHp: 286500,
            actualAp: 3438,
            actualDps: 5428.43,
            magnification: "573%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-42.0s",
            delayFrames: "1,200-1,260f",
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
            actualHp: 419960,
            actualAp: 22380,
            actualDps: 2740.39,
            magnification: "373%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 8,
      stageName: "帰省 Lv.9",
      baseHp: 412500,
      width: 4500,
      enemyLimit: 8,
      requiredCost: 100,
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
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "292",
          enemyName: "ワニボン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAAMCAQMDAgMEAwUFAwcIBQoIBQoIBgkKBg0KBwwKBw0MBw4LCQ0RDhQTDhcVDhwXDh8YER0cECQaEx8cFSIsGzsuHzsvHzszH0I1IEc7J0k9JU9COUlNLmREO0pPNWNeN3xQTVJjPIBuQZB3SJhiYGRkYGV7SaCFTqyNU7dxb3KWW72gYsmMfJOpZ9iwa+GRkZG4cfC8c/zCd/ikoKW+rcPKv87U1NTv0PXp6en///9aWJdBAAAAQHRSTlMABg0VHSo8MlFFYttbhGyxeNCOpOn7mtjCsu/O/92E/ur+/9fw///0//j/7P/+//r//vn///3////9//////8A4AyyoAAAA7xJREFUWIXtlF+XojgQxeWftKiIaCMCbjASDUpCIhHQtnu//7faQqfPbDuzZ2bPnn3zPuSJ/LhVdSu9P/+jek/AE/AEPAFPwBPwBDwBT8D/APiF9L7rjgZmr6fp2q++/Yk024+z3W4V9Aee79r/HmEvd7Ju2yqbrnZ5trTuVP23zWheVjcMU1UhVAiZOt1F/cX3HdOw+8ZvGAhZW6zLLVEEU0rQbGCZhrPK83QyW60C66eX/mYPDKgalx/ntVR1U1ci38TLIOZKSEKEyMb6j54tZ/yifQfs6oasTyVWzV215DmvSSJaiQlfmo/3DTfMdsH32uywqCuCsOzu1jWcLagmSLYyITJ+rEH3Us75ZvRpQXtZECbrCm5WNMsyQim0UtVKtU0tqh8B/VgUmPF48I1gzjBj7Gafho7jTeZrEMpyzjtOPnkoQXMyhmjBcyhC0wxr4C4oAGRnHxqmadbyeL2eFr4XLJL1Gq+8hyYa451ICGEsHtij8SzcZElRFLxzoFIXXGmjzdv14Bma4aXnYzx6MGC4K1kkmDIahfHhWJbXtzXhouqap+4ZMvzDYdbthRmUh8f/685K1BhhitH+dHr/uJw+rttE3nrfVJEDAe71rNnM1rT+QLd93/qaZ320YG3DE0zQ+eP9DIDyVEa79j5/ANhjF+ZrGpreX4ae5/ve6B5mzehkOnGhVCMSjNHl41qWh83Sd/2UfzrwgsMGNsC0nCDc79dH0GETDMBVf9ZpmbICI8ETgvG2XL9ORrZpjsIIMtQhqmR6uJ5j+G5zKNeXy/btHXQpV2OzN1jQIs9ZRWGCUoIDCozX6dgyvVVRVapRXRPRzRc6ni9vx/31bbs/Xy4AuWTjnhnspBC1QALqrTlKCGc0oZk/TkVTQV5oASZwst3vt/cDbdcJ/Aivj2/vlw10NkgpUwXp8t60BNpYwLaIKJVtxRiHTYZNlAUFke4ounDISkk0zc6XrEusF6aUFF3gGoUTimESQsDCNIKxgmDxuYpte1um+0q1MnXdeDO7jdB2J3Pa1oILQsFAQXHFkaql4AyjqgXwbRZSKiXZbrfLmZB57Jm6PfiWRs300qrmvMBSJAien1YkVHGhlMBFl0V4TRhZgeLlGEKwnP3h2F+TaM7yVimFo/T19RVXbR6GvIY1aFkSpYQQjNB8PHgZWIamaboBq/VlDyEgXsqEEHTiTRDhnKW+B9GGVsls4g+hLsHQzPqn1xgesmAynIOi+XTYnfP5cDiMsiiNomg4HUZpmi6GofPjI9j7C+S59LoPFFNEAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 20700,
            actualAp: 6900,
            actualDps: 11500.0,
            magnification: "138%",
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            actualHp: 55200,
            actualAp: 5520,
            actualDps: 2905.26,
            magnification: "138%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 3283,
            actualAp: 291,
            actualDps: 194.62,
            magnification: "1824%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 3648,
            actualAp: 547,
            actualDps: 420.98,
            magnification: "1824%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 18240,
            actualAp: 1824,
            actualDps: 1072.88,
            magnification: "1824%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "12.0-20.0s",
            delayFrames: "360-600f",
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
            actualHp: 306000,
            actualAp: 3672,
            actualDps: 5797.9,
            magnification: "612%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-42.0s",
            delayFrames: "1,200-1,260f",
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
            actualHp: 463870,
            actualAp: 24720,
            actualDps: 3026.92,
            magnification: "412%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 9,
      stageName: "帰省 Lv.10",
      baseHp: 450000,
      width: 4500,
      enemyLimit: 8,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "292",
          enemyName: "ワニボン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAAMCAQMDAgMEAwUFAwcIBQoIBQoIBgkKBg0KBwwKBw0MBw4LCQ0RDhQTDhcVDhwXDh8YER0cECQaEx8cFSIsGzsuHzsvHzszH0I1IEc7J0k9JU9COUlNLmREO0pPNWNeN3xQTVJjPIBuQZB3SJhiYGRkYGV7SaCFTqyNU7dxb3KWW72gYsmMfJOpZ9iwa+GRkZG4cfC8c/zCd/ikoKW+rcPKv87U1NTv0PXp6en///9aWJdBAAAAQHRSTlMABg0VHSo8MlFFYttbhGyxeNCOpOn7mtjCsu/O/92E/ur+/9fw///0//j/7P/+//r//vn///3////9//////8A4AyyoAAAA7xJREFUWIXtlF+XojgQxeWftKiIaCMCbjASDUpCIhHQtnu//7faQqfPbDuzZ2bPnn3zPuSJ/LhVdSu9P/+jek/AE/AEPAFPwBPwBDwBT8D/APiF9L7rjgZmr6fp2q++/Yk024+z3W4V9Aee79r/HmEvd7Ju2yqbrnZ5trTuVP23zWheVjcMU1UhVAiZOt1F/cX3HdOw+8ZvGAhZW6zLLVEEU0rQbGCZhrPK83QyW60C66eX/mYPDKgalx/ntVR1U1ci38TLIOZKSEKEyMb6j54tZ/yifQfs6oasTyVWzV215DmvSSJaiQlfmo/3DTfMdsH32uywqCuCsOzu1jWcLagmSLYyITJ+rEH3Us75ZvRpQXtZECbrCm5WNMsyQim0UtVKtU0tqh8B/VgUmPF48I1gzjBj7Gafho7jTeZrEMpyzjtOPnkoQXMyhmjBcyhC0wxr4C4oAGRnHxqmadbyeL2eFr4XLJL1Gq+8hyYa451ICGEsHtij8SzcZElRFLxzoFIXXGmjzdv14Bma4aXnYzx6MGC4K1kkmDIahfHhWJbXtzXhouqap+4ZMvzDYdbthRmUh8f/685K1BhhitH+dHr/uJw+rttE3nrfVJEDAe71rNnM1rT+QLd93/qaZ320YG3DE0zQ+eP9DIDyVEa79j5/ANhjF+ZrGpreX4ae5/ve6B5mzehkOnGhVCMSjNHl41qWh83Sd/2UfzrwgsMGNsC0nCDc79dH0GETDMBVf9ZpmbICI8ETgvG2XL9ORrZpjsIIMtQhqmR6uJ5j+G5zKNeXy/btHXQpV2OzN1jQIs9ZRWGCUoIDCozX6dgyvVVRVapRXRPRzRc6ni9vx/31bbs/Xy4AuWTjnhnspBC1QALqrTlKCGc0oZk/TkVTQV5oASZwst3vt/cDbdcJ/Aivj2/vlw10NkgpUwXp8t60BNpYwLaIKJVtxRiHTYZNlAUFke4ounDISkk0zc6XrEusF6aUFF3gGoUTimESQsDCNIKxgmDxuYpte1um+0q1MnXdeDO7jdB2J3Pa1oILQsFAQXHFkaql4AyjqgXwbRZSKiXZbrfLmZB57Jm6PfiWRs300qrmvMBSJAien1YkVHGhlMBFl0V4TRhZgeLlGEKwnP3h2F+TaM7yVimFo/T19RVXbR6GvIY1aFkSpYQQjNB8PHgZWIamaboBq/VlDyEgXsqEEHTiTRDhnKW+B9GGVsls4g+hLsHQzPqn1xgesmAynIOi+XTYnfP5cDiMsiiNomg4HUZpmi6GofPjI9j7C+S59LoPFFNEAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 22500,
            actualAp: 7500,
            actualDps: 12500.0,
            magnification: "150%",
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            actualHp: 60000,
            actualAp: 6000,
            actualDps: 3157.89,
            magnification: "150%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 3600,
            actualAp: 320,
            actualDps: 213.4,
            magnification: "2000%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "12.0-20.0s",
            delayFrames: "360-600f",
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
            actualHp: 325000,
            actualAp: 3900,
            actualDps: 6157.9,
            magnification: "650%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-42.0s",
            delayFrames: "1,200-1,260f",
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
            actualHp: 506655,
            actualAp: 27000,
            actualDps: 3306.11,
            magnification: "450%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e24021Data;

