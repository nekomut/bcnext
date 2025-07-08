// Stage 1309 Data
import type { StageData } from '../../app/stage/types';

export const e1309Data: StageData = {
  eventId: 1309,
  eventName: "#04「ネコ鳴村」",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 309,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 150, 180],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "ハネムーンは秘境の村",
      baseHp: 20000,
      width: 3600,
      enemyLimit: 15,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 180],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6800",
          treasureName: "キャラクタードロップ(6800)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6100",
          treasureName: "キャラクタードロップ(6100)",
          probability: "7500",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
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
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            count: "15",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
            actualHp: 3000,
            actualAp: 360,
            actualDps: 229.79,
            magnification: "20%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "99%",
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
            actualHp: 3000,
            actualAp: 360,
            actualDps: 229.79,
            magnification: "20%",
            count: "2",
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
            actualHp: 3000,
            actualAp: 360,
            actualDps: 229.79,
            magnification: "20%",
            count: "3",
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
      stageId: 1,
      stageName: "コノ先、電波通用セズ",
      baseHp: 30000,
      width: 5000,
      enemyLimit: 15,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 180],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6800",
          treasureName: "キャラクタードロップ(6800)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "37500",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
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
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 3000,
            actualAp: 360,
            actualDps: 229.79,
            magnification: "20%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
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
            count: "5",
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
            actualHp: 3000,
            actualAp: 1000,
            actualDps: 1666.67,
            magnification: "20%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "burrow": {
                times: 1,
                distance: 375
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "289",
          enemyName: "ゴリ・ンジュ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 50000,
            ap: 3789,
            dps: 7104.38,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 757,
            actualDps: 1420.88,
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
            "burrow": {
                times: 1,
                distance: 625
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 100
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "死霊と記念撮影",
      baseHp: 60000,
      width: 6000,
      enemyLimit: 25,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 180],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5400",
          treasureName: "キャラクタードロップ(5400)",
          probability: "55000",
          amount: "0",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 2000,
            actualAp: 200,
            actualDps: 117.64,
            magnification: "200%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
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
            actualHp: 4500,
            actualAp: 540,
            actualDps: 344.68,
            magnification: "30%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-53.3s",
            delayFrames: "1,200-1,600f",
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
            actualHp: 4800,
            actualAp: 600,
            actualDps: 486.49,
            magnification: "30%",
            count: "6",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
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
            actualHp: 4800,
            actualAp: 600,
            actualDps: 486.49,
            magnification: "30%",
            count: "4",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
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
            actualHp: 4800,
            actualAp: 600,
            actualDps: 486.49,
            magnification: "30%",
            count: "2",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "軋む畳と四十肩",
      baseHp: 90000,
      width: 5000,
      enemyLimit: 15,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 180],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6800",
          treasureName: "キャラクタードロップ(6800)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4400",
          treasureName: "キャラクタードロップ(4400)",
          probability: "100000",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "11",
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
            count: "20",
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
            actualHp: 4500,
            actualAp: 1500,
            actualDps: 2500.0,
            magnification: "30%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "burrow": {
                times: 1,
                distance: 375
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
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
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "99%",
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
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 4500,
            actualAp: 1500,
            actualDps: 2500.0,
            magnification: "30%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "burrow": {
                times: 1,
                distance: 375
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
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
            actualHp: 14400,
            actualAp: 1080,
            actualDps: 611.32,
            magnification: "30%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
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
          enemyId: "289",
          enemyName: "ゴリ・ンジュ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 50000,
            ap: 3789,
            dps: 7104.38,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 1136,
            actualDps: 2131.31,
            magnification: "30%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 625
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 100
            }
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
      stageId: 4,
      stageName: "霊と無邪気に鬼ごっこ",
      baseHp: 120000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 180],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "4600",
          treasureName: "キャラクタードロップ(4600)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1000",
          treasureName: "10式戦車(54)",
          probability: "120000",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "293",
          enemyName: "墓手太郎",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 750000,
            ap: 15000,
            dps: 7500.0,
            speed: 4,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2500,
            freq: 60,
            foreswing: 22,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 4500,
            actualDps: 2250.0,
            magnification: "30%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "revive": {
                times: 1,
                duration_f: 120,
                duration_s: 4.0,
                hp_ratio: 100
            }
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
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
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
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
            actualHp: 4500,
            actualAp: 540,
            actualDps: 344.68,
            magnification: "30%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            actualHp: 4500,
            actualAp: 1500,
            actualDps: 2500.0,
            magnification: "30%",
            count: "10",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "burrow": {
                times: 1,
                distance: 375
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
          }
        },
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
            actualHp: 4500,
            actualAp: 1500,
            actualDps: 2500.0,
            magnification: "30%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "10.0-30.0s",
            delayFrames: "300-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "burrow": {
                times: 1,
                distance: 375
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
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
            actualHp: 12000,
            actualAp: 1200,
            actualDps: 631.58,
            magnification: "30%",
            count: "3",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            },
            "burrow": {
                times: 1,
                distance: 625
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 50
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "ツーブロック市松人形",
      baseHp: 180000,
      width: 5000,
      enemyLimit: 15,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 180],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3400",
          treasureName: "キャラクタードロップ(3400)",
          probability: "125000",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 4500,
            actualAp: 2200,
            actualDps: 1783.78,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 4500,
            actualAp: 2200,
            actualDps: 1783.78,
            magnification: "100%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "554",
          enemyName: "ケルベローズ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 2500,
            ap: 2500,
            dps: 1442.31,
            speed: 10,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 66,
            freq: 52,
            foreswing: 13,
            backswing: 16,
            tba: 20
          },
          stageStats: {
            actualHp: 2500,
            actualAp: 2500,
            actualDps: 1442.31,
            magnification: "100%",
            count: "0",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
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
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 4500,
            actualAp: 2200,
            actualDps: 1783.78,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
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
          enemyId: "288",
          enemyName: "ジャッキー・ペンZ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 42000,
            ap: 8000,
            dps: 8888.89,
            speed: 9,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 27,
            foreswing: 16,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 21000,
            actualAp: 4000,
            actualDps: 4444.44,
            magnification: "50%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
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
          enemyId: "291",
          enemyName: "スカルボクサー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQIDAgQEAgUEBAUFAwcFBAcGAwgGBQcHBQkIBQsIBgoJBg0KCgoMCA8NBxINCRERChYRChYWDR0YDyAiFC0iFysmFzImFzMmGDEtHjkuHD42IEg5I0xCLFVELlc/Pz9SMm5YNXVJSUlUSF9kPYZlPYhuQpNcXFx0Rpp3SZ9nYG2ETLGQV8F1dXWZXMyiYtmFhYWpZuOvau21b/aVlZW5cf6srKzIyMjV1dXn5+f09PT9/f20YrA2AAAAQHRSTlMABxoQJIEuNeDB0T5RR65Z/5TqaHKgfIip3rTTm/3D0PP/2rjr/u3/8P7+2/f///7+6v/////////////+////8Vi7vAAABLtJREFUWIWlV2uXojgQFXBgbbVtGx/4AAxNWqGJySQmAXz9/3+1BdPTM84ZXXTrg0fPsS5VdatuFa1WYzN7ZvM//8Xa46f+//G3PbywW4bx8PO9jHmm7U4eTMOabhQdjoJVp/0YQC+SOplt+GbyWA7mnBUSU82DxwKwRrEueKpVPHgoAGMU86JQshCrkW09ANCNBPgLVWi+CccD27qTTGNCC6gAwgCjBY3D+dB17oEwlpAA8/Mt4ACEFql/H5s1APe3a1b8MILQ030ATEpFMVWfADJZfbsrhWlGqSx+mdws72vowYZRqStXxRmjWTS5s53sSNT+isaB540nd1FQmRmIOvRs3jMty7q/Ga25qPmLe3e7/rB2HYFWkf0ggBMqXehCBo9qYg9mEQIQjwIYkwy4B/6CRyax9aMEklGSzq2W8QCG4W605rQGMPqj+2l0QlFoRikFgO6i0xveyYW5hArUAInnzLPZYnEfgDHaKK0KWUXgTTOBSGi37X6/MSF9kDORKs05p0EoVJrOvGDx+tpU3m3Qc5AzwQnIso9BFgXjkiVo2YwOKEDVQ5gxrHWaMChnLWssaqbv1UKrABIqsOKYrrf1WKosGDQKwJrEEoYQRDAVWJCU1QCaxctmimBOYiggBwCaQBlSohj8EJt5s8e32lPw17LSIlYDpFUBOOhZs/T78+xThXXBMADABxDSsHqGPY2Y1owQyiAEjgXmFBEu0mGj8M1RkIGfJmmaYgzsYZ6mnGCM/UYLwRzGQv9cAloQnCAiE6q1lslz2+z+Vx+bw5r9L9MSdhmHNIDSZDUevr9Pb+YB4yMuAKpOQokkiSoUIug9L8PRrUaA8eHyEqBgCKcyJYz4eL0/HncvT+7VIOAcUvTPCBQmKE0Q2q59VJ7Ph/XL7NqOqAQMGv8yAMiBMH9d5ocS+bvj+Xws87drAXgcaP8jgmoaGMpPx9NxX25rhMP3qxVQnwAXGDTB2xwcy/U23+Wn8353BaDeAbwSjnoMv1JI8fpwOp9Pu5eX7X67Px+279dKyOEWqyiHS4B/lUJgst4d9/lhj/zytCvPp8PHlQxipbOVTwoBKkq5rsPQ0NOKoP36ZX0oIf48h1y8vwO4WSGCQQepSoZpdRVJBpqMOUOoRC9ofwbL82P5duXdAQDo1OrNiJaQg9CSIiQKihJMUZ7n+0NFwPr9Y9m90ooAkLktoxdkQgrBYAARKSTyU5F1Pg6nPVBYbucD52ofjjIdQ3CGM1ysfB9hkgKlqU+1CLvT7+Vuuz98926sJrhqddStvlmOO3wOgmBF4UhFSm1cwxy9fUTR2+jWiWZM6dchYxiW2R7ESsavTGfVZWiYjmObNxXF8tjFIWMtmdp0YsWChhsVDjo+/61A/Uhuxh7jYdMXPidS2W9r01pSMncj3vhFBSZBhM6v391Ixu44JU/dtt11bmdf+3dDHo8uAhCL4QyhVdgJo2juXHet3c1+kG1+00sDKOAoY0ophgSwcasQVs+deFEWTy8p0KpWR52msBTDW0z0ZjFO4sD99IcWMNvOM8IJgZEi2E9ouhp3Hafdbpvm3+40e7xYzN2fa9Nw3G/D8XPnH7DXn/bPU6fTeX4eD79dvHL9C8L78HONZ623AAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 100000,
            ap: 7997,
            dps: 8272.76,
            speed: 18,
            range: 175,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 29,
            foreswing: 1,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 3998,
            actualDps: 4136.38,
            magnification: "50%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [6800, 400, 797],
                timings: [1, 8, 16]
            },
            "burrow": {
                times: 1,
                distance: 1125
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
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
            actualHp: 60000,
            actualAp: 3000,
            actualDps: 1800.0,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "554",
          enemyName: "ケルベローズ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 2500,
            ap: 2500,
            dps: 1442.31,
            speed: 10,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 66,
            freq: 52,
            foreswing: 13,
            backswing: 16,
            tba: 20
          },
          stageStats: {
            actualHp: 2500,
            actualAp: 2500,
            actualDps: 1442.31,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "命がけのかくれんぼ",
      baseHp: 270000,
      width: 5500,
      enemyLimit: 15,
      requiredCost: 160,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 180],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3200",
          treasureName: "キャラクタードロップ(3200)",
          probability: "135000",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "554",
          enemyName: "ケルベローズ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 2500,
            ap: 2500,
            dps: 1442.31,
            speed: 10,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 66,
            freq: 52,
            foreswing: 13,
            backswing: 16,
            tba: 20
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 5000,
            actualDps: 2884.62,
            magnification: "200%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
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
            actualHp: 16000,
            actualAp: 2000,
            actualDps: 1621.62,
            magnification: "100%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
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
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
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
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 16000,
            actualAp: 2000,
            actualDps: 1621.62,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
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
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 85000,
            actualAp: 6868,
            actualDps: 12877.5,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "savage-blow": {
                chance: 100,
                power: 1.1
            }
          }
        },
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
            actualHp: 15000,
            actualAp: 5000,
            actualDps: 8333.33,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "burrow": {
                times: 1,
                distance: 375
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
          }
        },
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
            actualHp: 15000,
            actualAp: 5000,
            actualDps: 8333.33,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "burrow": {
                times: 1,
                distance: 375
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "290",
          enemyName: "ブチゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQICAQICAQICAQICAQICAgIDAQQDAgQDAgMEBAUFAwcFBAUHBgkIBgoIBgoKBgwKCAwLCA0NCBAcESUdFiMeFSUaGhokFTAmFzMnHy0qHTUtHDwvHz0yMjJBKlRCKlY5OTlGK11MLmZFOU9PMGlZN3VdPnhUS1tkPIVhQX1lPoZtQ5J2SZ2ESrBvanKNU752dnaUWMecXdGmZeCvau2SkpK1bvW5cf6vr6/Ozs7o6Oj9/f3///8iAIRqAAAAQHRSTlMABg3vHCaz2RP3MOXD/jtmRaFPeFiO/5ysYta6fcv/7KHZ/8b0567//8z/9ef///7//f/n//////n///3+//8AABll4gAABAlJREFUWIXtVtl2qkoQFQUlmIADKokHDSgBURpoe7BxOP//V7caxxhyTnLvy33IXrpWK9TuGnZVd+33f0Tth+CH4Ifgh+CH4P9E8HXUNaPT65laXfmG0RV6b+B6q1XguSPLqP8LcyfImAAwms1bffWb9togILwQBUAUIorzkfYte8NZUmnMUsSKkmDumN/IhNpdsnJ3FOcIFjRKaOpa6lcpFGtKMJPeJ3Ee8YJFEyQECcbWF+PQuwnJSgKWJFQU6XCYFgVP0LxpfInAeCGEliGUEIxEPmYUvsvBV+qpWHN+NS8ErFM/DEPEC+pWl7OulelRNFWHhTJIi1t7LmhIGIW0Cu5VxqDYA72Mvf/o9A1Fd/ANQUHCJExPHvHArCJQZ7NjejUn38yejTG9JeApAk0dwbzKOnTW695xZS52u/XIY6KoBhnrVQTPm+3r8UF9tNntYv8mh++psuoqPG/2a/uYRmuKcj+8WEEGGeMXFrG0Kotgbw67RUcp0zin2EdXAoqzDFNx+kMEnUoCc304bBe2qtmjABfMJxeXpT0wsJP9J1WsqYvd4bBbjx+nIRYFQfziQGmfYSL+TKD82h4Oh/02HvroXQFOBBnQChmGCOxKgpohXTjs84jx4haCHgnAA0EJBJKOPpZRqeu6bq12h/1+E75TkBQRPeVAgDNAw7x7JSpGf/T29upM802egwf3CoJOJKTsAiwDKdC9EBS764F2Nn6SIEx4UYEjJydYdjgZ37ejovZmm/0uTrn4TL/nGsrn1L1thrrMiKKYbr7dJkz8haEEuyXQ+32lplmGNQ3DOKX4kxAqCHTDgMmhPK9e6zXTnb3AuKJEpvu+CB+BHbWmdBzPc52+PdvO1Jo2ixPoFl7Wm/41CDRQasY4Y4zh5TTfr3pqx03KKp0F82fwAAaHHZT5hJm/y92xl5adwqVoMT+fZZ9GIKtoOPMEwbmJJnFM6Fk6gsLytKbpJ9nkgSWHbm+aooTKc082Pscf1JegahdE2i7nQS+AMVNGIaPH/n3qSMjOFsU7bWB/PpBCNF/805yGF7I4jpLbcwSOsPMQF3C+8WuDUj9ly5EJ+pkiyjkjWRQtk3i7g/PzOsNgil9aCocM3sL8uBWMOg5PXYiACpYFrtMd9PvuZhPLB5fE0ySixx8cw3xiGFNJLxiahFTeV1agveXS69qartcV1fFG3Zd5hM+bcrgJQFuBgziK5BzhXCYCzNvNsbdaLN5+1RSzb5n6uR169Xqn2XiahAlKM0IpSpIIPlESpRT0RmGsoiicPD09tFutx+7xknFz0ZA3OKPZfnh4khgOhxM/9AFhFPoTwHD4dMVDozWoOpkUrWMNus3HVqvdbjQe7tFoNNpy92Z3YJtQxX8AFX+uSPLpjFEAAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 75000,
            ap: 4500,
            dps: 6428.57,
            speed: 12,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 21,
            foreswing: 6,
            backswing: 12,
            tba: 8
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 4500,
            actualDps: 6428.57,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            },
            "burrow": {
                times: 1,
                distance: 1500
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "303",
          enemyName: "墓手花子",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 720000,
            ap: 25000,
            dps: 12500.0,
            speed: 4,
            range: 150,
            rangeType: "範囲",
            kbLevel: 24,
            money: 2500,
            freq: 60,
            foreswing: 22,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 720000,
            actualAp: 25000,
            actualDps: 12500.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "burrow": {
                times: -1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
          }
        }]
    },
    {
      stageId: 7,
      stageName: "盛り塩をつまみ食い",
      baseHp: 360000,
      width: 5000,
      enemyLimit: 6,
      requiredCost: 160,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 180],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "4400",
          treasureName: "キャラクタードロップ(4400)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1000",
          treasureName: "10式戦車(54)",
          probability: "150000",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
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
            actualHp: 2160,
            actualAp: 192,
            actualDps: 128.04,
            magnification: "1200%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 12000,
            actualAp: 1200,
            actualDps: 705.84,
            magnification: "1200%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 4400,
            actualDps: 3567.56,
            magnification: "200%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
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
            actualHp: 22500,
            actualAp: 2700,
            actualDps: 1723.41,
            magnification: "150%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
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
          enemyId: "425",
          enemyName: "ダッシュ死太郎",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAHAwcGBQYIBAoKBgsJCAkKCQwMBw4TDBcYDyAaGholFzAnGDMgICArGToqJS03JUY5I0w8IU8yMjI1MDpMMWJRM2lDQ0RDQ0NfOX1NTU1hPIFbWltwR5NhWWhsXXmETLFra2t0aX2NVb2KYq2ZXM6Gcpd+fn5/f39/f3+BgYGjYturaOePh5WybPO5cf6fmKWcnJyopKqsrKy0r7jCucrCwsLLyczS0tPe3t7n5+fz8/P8/Pz///8959rgAAAAQHRSTlMABQxWFDqHHStwRWQRqYcxylagtew/dL3/jFryeNqb/9Ds/7f+/v///9YCvI3///7////h/un///P//P7+////VFpS4wAABLZJREFUWIXtVmljojoUFcfWrYrUDUFNZTH4lCQqgizB//+v5gZwbenU+frmfLBKOeeuuTeVyj/8w/8IUjWD9HfkWqPdfe+Px/1Ot92qV5+k11rd8czGhAGIay9m7+3GExq1dl/HbHsDRuzZe+tLic8BSi8d3b2ju9gFDTzr1j+9XB1OtbeHR+3Zo3XDMAg8Yva49WivbkbHzZ1CrauT7fazQO7KTHlQkLRDGmniiyQVfMS2D2AYQ0jZY/ZJ4W3N+fqt0hjNRyLA6hf8s4xLMoWHKKQNTw/DoRkmx3m9IrX1Uj4xsPhLxo07/nCfnqLVPj6d0uNUepmREr7wQGizLe7UbjI+3SdAjfyIxxBKo4PL+WdHlnr3nPX/KtV5BPzTiYfr+So6dPV7Drv9ToiLl0uH+uFCztKtbDYbTd5EPD2l8YcsyaY/wHd04BDXFTRBpDsviBJ4++SPRPYnh4QnR1OZrveHvanUh9pkoS4vcATobuf5QRBGcZKkwCyQjCELw1WUwKNkLddlWa4r5iE6Wn4oEEUxEBLOUyBdaVekixdoQUWbH7hQGNZqw/kBchlZyfn1B9rNzzTlcWA18xJoR/id7NfrlQf8k686Oz+MC9M3FADnPImjMPB21DFU1L10oXiBHzfaOuHRAjGCs/BFwvwc3m63o5Q6TpYZ0dPMQKRfnBuTZzkx3ypDczWHJoDhwUT6XWxfgKEQjFwrSlSbjXOBxkp4mh4UIVavvbvMNgyblTVzAWNwEVCOwoHYzFuz2icYzq3hfs931YsH0vx4jJNoPaw8IcCQqmK3kzO6U20yn8rnSdIrBL4LgdkgQOxmYVOCyX853SAgRo9ddh6ZmCk2DVXEZmejd6hCFQjGJfYZw6CAnYRbBu5+uWqkV1u8uC1RwPBfbMHcCIz7kXJFG4EdG19t3vIJcoEPh//EF+2v+ZWXGdu60AfndN1GwxBithWl4rREk5IdVeu7YgAXNGJn6WS5I4aKDSc+xR4IpPsvcwhJaBp3TmftSzIBW0WWB30f7HgQxuvPCypHo0cuJs/IZrmtqk4kbPMoCX1TLtv3UlPPLF+yyKCuTDQPDXl+wEHC/2iV8GHKdKBWRBSc5SN8C0VxEY3P4yEJfEqtr9sgL0QPmskWq5i4wn2GXBv5hXUY/x5MCp+OygWkVg8zLCpJDOg7FyPkFOaTOA3pDkJJ+bpWKgB3g56Bs14wEAPr6o4X3sch93yPOpZFzW8EoBQdHYkTZQwQRirlp3zSpjwUkzHxHLXz8h0f+qnZUxFycaejq0gM67BwIU6zSn6UdcE1jEazN1DhyPQt0XjcK6JIs2Ry8weXLan+q9PrtVorLlZCEBRVSJLLCP2BRq1Rr472wjj3wmxDwUrJQpn//OJZVcxIbC8KGzg9L6hw9GM+4E1bw9YLVcuhXtYQaWz+MYkPEso+5Ys+Dam+P0bRYf4kH+4BNDlO3v30OJGHmia//Zlyj+GeLqbKitL509QMshnutYYZ0tG3/VsK5YM6Y2VMnVnpFPkW0sT3l9YCLZfWx6j1Fz5I8yBg7hIhAz70pxqgkl2f62O4HcDKRIi4BnqvSs/E0fjVfH3tDQYDXdfzj85r89c5jN+FllYU/o0t5gAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 200000,
            ap: 6000,
            dps: 1224.49,
            speed: 25,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 147,
            foreswing: 44,
            backswing: 27,
            tba: 52
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 6000,
            actualDps: 1224.49,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 700]
            },
            "burrow": {
                times: 1,
                distance: 750
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
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
            actualHp: 22500,
            actualAp: 2700,
            actualDps: 1723.41,
            magnification: "150%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "554",
          enemyName: "ケルベローズ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 2500,
            ap: 2500,
            dps: 1442.31,
            speed: 10,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 66,
            freq: 52,
            foreswing: 13,
            backswing: 16,
            tba: 20
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 5000,
            actualDps: 2884.62,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 85000,
            actualAp: 6868,
            actualDps: 12877.5,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "savage-blow": {
                chance: 100,
                power: 1.1
            }
          }
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 9000,
            actualAp: 4400,
            actualDps: 3567.56,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "428",
          enemyName: "シノシシ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 400000,
            ap: 4500,
            dps: 12272.73,
            speed: 22,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1800,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 4500,
            actualDps: 12272.73,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
            },
            "revive": {
                times: 1,
                duration_f: 150,
                duration_s: 5.0,
                hp_ratio: 50
            }
          }
        }]
    },
    {
      stageId: 8,
      stageName: "井戸の底はぬか床",
      baseHp: 480000,
      width: 5000,
      enemyLimit: 30,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 180],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "2000",
          treasureName: "キャラクタードロップ(2000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1000",
          treasureName: "10式戦車(54)",
          probability: "250000",
          amount: "0",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 6600,
            actualDps: 5351.34,
            magnification: "300%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
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
            actualHp: 30000,
            actualAp: 10000,
            actualDps: 16666.66,
            magnification: "200%",
            count: "4",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "burrow": {
                times: 1,
                distance: 375
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
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
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
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
            actualHp: 30000,
            actualAp: 10000,
            actualDps: 16666.66,
            magnification: "200%",
            count: "12",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "burrow": {
                times: 1,
                distance: 375
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "468",
          enemyName: "チキランラン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 17500,
            ap: 17000,
            dps: 19615.38,
            speed: 30,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 26,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 26250,
            actualAp: 25500,
            actualDps: 29423.07,
            magnification: "150%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.3-11.7s",
            delayFrames: "250-350f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8500, 8500],
                timings: [4, 13]
            },
            "burrow": {
                times: 1,
                distance: 875
            },
            "revive": {
                times: 1,
                duration_f: 600,
                duration_s: 20.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "468",
          enemyName: "チキランラン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 17500,
            ap: 17000,
            dps: 19615.38,
            speed: 30,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 26,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 26250,
            actualAp: 25500,
            actualDps: 29423.07,
            magnification: "150%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8500, 8500],
                timings: [4, 13]
            },
            "burrow": {
                times: 1,
                distance: 875
            },
            "revive": {
                times: 1,
                duration_f: 600,
                duration_s: 20.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "468",
          enemyName: "チキランラン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 17500,
            ap: 17000,
            dps: 19615.38,
            speed: 30,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 26,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 26250,
            actualAp: 25500,
            actualDps: 29423.07,
            magnification: "150%",
            count: "18",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-8.3s",
            delayFrames: "150-250f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [8500, 8500],
                timings: [4, 13]
            },
            "burrow": {
                times: 1,
                distance: 875
            },
            "revive": {
                times: 1,
                duration_f: 600,
                duration_s: 20.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 9750,
            actualDps: 7697.37,
            magnification: "150%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 2,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "554",
          enemyName: "ケルベローズ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 2500,
            ap: 2500,
            dps: 1442.31,
            speed: 10,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 66,
            freq: 52,
            foreswing: 13,
            backswing: 16,
            tba: 20
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 7500,
            actualDps: 4326.93,
            magnification: "300%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-8.3s",
            delayFrames: "150-250f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 9750,
            actualDps: 7697.37,
            magnification: "150%",
            count: "24",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 2,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
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
            actualHp: 2400,
            actualAp: 360,
            actualDps: 276.96,
            magnification: "1200%",
            count: "12",
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
            actualHp: 2160,
            actualAp: 192,
            actualDps: 128.04,
            magnification: "1200%",
            count: "12",
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
            actualHp: 1050000,
            actualAp: 28000,
            actualDps: 1971.83,
            magnification: "350%",
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
      stageName: "お土産抱えて無事帰宅",
      baseHp: 720000,
      width: 6000,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 180],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "3000",
          treasureName: "キャラクタードロップ(3000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2600",
          treasureName: "キャラクタードロップ(2600)",
          probability: "300000",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 8800,
            actualDps: 7135.12,
            magnification: "400%",
            count: "8",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
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
            actualHp: 40000,
            actualAp: 5000,
            actualDps: 4054.05,
            magnification: "250%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
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
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 9750,
            actualDps: 7697.37,
            magnification: "150%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 2,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 9750,
            actualDps: 7697.37,
            magnification: "150%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 2,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "554",
          enemyName: "ケルベローズ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 2500,
            ap: 2500,
            dps: 1442.31,
            speed: 10,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 66,
            freq: 52,
            foreswing: 13,
            backswing: 16,
            tba: 20
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 10000,
            actualDps: 5769.24,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "512",
          enemyName: "ミニアンデッドサイクロン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 333333,
            ap: 333,
            dps: 1998.0,
            speed: 14,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 300,
            freq: 5,
            foreswing: 1,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 333333,
            actualAp: 333,
            actualDps: 1998.0,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-33.3s",
            delayFrames: "900-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1250
            },
            "revive": {
                times: 1,
                duration_f: 120,
                duration_s: 4.0,
                hp_ratio: 100
            }
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
            actualHp: 240000,
            actualAp: 10000,
            actualDps: 15789.48,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 170000,
            actualAp: 13736,
            actualDps: 25755.0,
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
            "savage-blow": {
                chance: 100,
                power: 1.1
            }
          }
        },
        {
          enemyId: "428",
          enemyName: "シノシシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAQECAgMDAgQDAwQDAwQEAwUFAwYFAwcFBAYHBAkHBAgHBQkHBQgJBwsKBw0LCA4MCA4MCRAMCQ4RDBQSDRQUDxgcEiUeFiIgFyUhGCYoGTUoGTVVAFUqHzEzHkUzJjo5Ik09JVM8LEVKLWNNNGZDQ0RYOXJiO4RoQIx3SaB8S6iDS7BwZnlubm+LU7uTWMeYXNCiYd2pZ+evavCSkpO1bvm5cf6wr7DBwcHb29vt7e38/Pz///9qSYkrAAAAQHRSTlMABAoVIzBE74hN+TpYX5iwzXehwrlo5Nv9iO3/9qO6A//k/8/w///irP/1///2///h/////////v////////8AHcW2MAAABX9JREFUWIXtVmt3qjgULQ8pig9QARV0EAWLibEBgrFa5///qzkBfNxe+pg132bdrHZpafbOPvs8yNPf/3E9/SH4Q/A/IfjhklTN6Omtn27/AFaUnj6eOTN/oPw7nCQ+ZMMajGdhEEZRYKo/hKqtdlezB3pPkeWu64ceoKPAN3VVln5CYIxA7swPfGfcH7ohoMPAm7iu6YyGbVX+nqDt+IGQDLhJIM72vCD04GEYBo6pG986ofSGpjObeB4AytPLjzASnFHou8P21xRyu+/O/AmICO+48otXfomCWfcbOEC9SSjwgfCvisbzfIhiIp761hcEWgWfQPxgQBiA+lpLMHHM8WDs+rPxVxXVGs2ePYgfHBCmxWBEWLooZMxc3TB6mvpVMqWe+RwEgVf+hnESVNYBRWmF3/8mB3Jv5Idl6GUSEI7DEioyKvwMHevK0ChDth3Y7kH0giPw0jTGXmU++CLUhNcUyI3JNBwRsXDPK3OQsTilwFU64Ak/o0CvCfr2X78TqAN3POyDCuF+NPEyjlFB4zgQSQ1CQgLfbdcEw0WTBNVQVL10AQg8jxxzlHOWoygQFZRwMtLqZpBfXtvNNk59OE4ELjzknB9hcQYU8PeRra41IL+8TZt8lC1HiI1FwKgo0ceKgiYoPx53lnQjeGmKoeWK+sMJ2BBmxzsefnjJc5WgvJxfmwZMzwe7kxyaJyACdaxE8KKoqa4S1Nf3V6OBoO14XsJyEXABZ/IqigJHMS4peL6qzjWAQGtKgxlDqCwOYgFllGaCAXv7Q4QrP3d2KcE+XJoIJHtLwSqeIQEsUkKogCXR+R1FpRqeL4QEaXq6HBoIjFV+d/6YE0JS4UTiHd6iuLKBb+3KgiYFrUV6fFgZEDBBmIr2JDV1NldA6eFyqU2Ub9mU2wv6cD6oJbQSxDOMs2se+MZ4Ul/Ol/c6jW29GhCSOt3cNh2vyePH31c6Vy0QcK4LyXZGPWCQu4st47ey+Wrx3WJzvlxOcwX6QlG1wTO89BRrk980fkkAxcFJcnh725vz6ZOs97XuAMbMdMuuOyD5+VcEEBdPUYIwzTZPysBxR7Y5nG5v0XOR/OIzdE4wxiRnWOjlmyepZVnmyDG3d7cY5I58QiC0n06nPcZJDjKyFXgvK7rZidh9k6ge2mRDwQqCDm+nt0OSJCSmWYTm4J3VG7kdIpzL0uKqgH3AQ1hZlsTJ/vwO6wQGoAlJom33qeu4bt9eCgCcXDYOELFHASC1oAgnMU6T0wXW+x7FaRTQEEFjagNNU3obsb+gZd1XmOwhDzkqcl7ktOB0D+l/PyCMMg+C2MJokOHCIFnb8mSe3w7mNL1rSJOi/gcn+9P5gHIE8dOcLOqJVBM8FuB9AAkFMUI1XwH5j1OGM86KdHUbSBBCKQFnjUVcpJhes8wZUCSYcbZbaLeh3FqxOsmsAf9LNjhjheDYrqYPE1WeV1OgQLi5C25POcMoobygS+PxsiX1dtWWNM4/IK64nNcPebZcbLPd4teJri4IK61LCGdZmrIPHHAwySob2NZSrfm09eGlZIyQ6A2OEoyQaBbYnFWW1vaTKMGE0t3Khnn2+31Tai0obGWbvj4c+3EMm3fbylIKRZzutus4TQleW59eb7RNASYOFElW5zijyWzYH5flQWarxdzq6eKP6zuhaclTkFDVliG4INSWGLHwJjIURZbAJi6m4edXpDYcwdZ9uLioKyBIlmO7u0rF0OiWGTNWFIpyaX2077a6QEARWs7b9jqH9svitT5c58csdud2W9M0fV0wFK9XduN1W2oNQ0wSksXB83MH3vAxjiedzoQy0ciTZ7E8Cl2IfNNqeqtLhjUcm667nJV7O9cFFx2M/E6nfOo4y81q1H8k+ActQC7/HZsxDQAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 400000,
            ap: 4500,
            dps: 12272.73,
            speed: 22,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1800,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 9000,
            actualDps: 24545.46,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
            },
            "revive": {
                times: 1,
                duration_f: 150,
                duration_s: 5.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "293",
          enemyName: "墓手太郎",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 750000,
            ap: 15000,
            dps: 7500.0,
            speed: 4,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2500,
            freq: 60,
            foreswing: 22,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 1500000,
            actualAp: 30000,
            actualDps: 15000.0,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "revive": {
                times: 1,
                duration_f: 120,
                duration_s: 4.0,
                hp_ratio: 100
            }
          }
        }]
    }
  ]
} as const;

export default e1309Data;

