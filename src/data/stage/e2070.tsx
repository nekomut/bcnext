// Stage 2070 Data
import type { StageData } from '../../app/stage/types';

export const e2070Data: StageData = {
  eventId: 2070,
  eventName: "仲良し３人組",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 70,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 150, 200],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "パズルで攻撃！",
      baseHp: 15000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "30000",
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
          treasureId: "1500",
          treasureName: "キャラクタードロップ(1500)",
          probability: "75000",
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
          enemyId: "400",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 3000,
            dps: 1111.11,
            speed: 6,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 750,
            freq: 81,
            foreswing: 27,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 750,
            actualDps: 277.78,
            magnification: "25%",
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
          enemyId: "399",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQADAgIFAwM1IiJSOTiAMC3/AACVR0OXT02gTUenVE2uUE2qWkutWFKtWVGuWFG2WVW0XFa2YFvBXVi9Y12/ZF9/f3/BZV/Nb2reaGjXcm7YcmzZc3DYdXCUkpLZdnHZdnHIfnzaeHTTfnvce3fdfHrdfnrfgXzggX7hhIHfiYfkiYb/gYDkkpDokY7rmpjvn57qs7P0xMPb2dn13t727u7//4D++/prko7KAAAAQHRSTlMAEixOboag7Lr+1f/8/wH/EtIu/wdIX3n/o5L/veoC1/4HIxE0//9CVgVn/3yLnr2tz//gAv/0/////////wH/lJKTLAAABBVJREFUWIW1lu1W6jwQhT2CfAlUKWi0KqEQvgIFWpO0pZX7v6t3Ji1HOUIbfryzFq4W3E9ndiaT3tycj6+xO3FHF340CdfbBdvZ4i9uNp9chRuvZRiq3aSr77quF8jd8hrCLAghhDfOcJ5USgWzrrH+cylDwUQYzPBuBHdKhWplnsJorRR1qJBa426UoEwozxywWCvhOA5XG6ihP5eK4c12fE0GCGAqmKADOe2aDFZa4wi5/Lxxd4prwHpRrszjaynBA8fx1Xr0kVXg+HJlDoBl1ACs+zubufkyQtoh1ybsXLDAh0sKbWWuvxlvjyp3vMktuGIR0EVtAoVlyD305RV9BN0PvcwRIL1VfnVNJ2c1COrwUEmpEOCrjXuN/nOyFaHwFW6pEFBcyfU1FSxmG5mJj6GE536ZP3++U6d6IMit+2Go/5rs/pVjAMHQxrEnzgFC6Zl1AizhOX0URdJsqo3W2sAoTpIorx8+cJfExyFZUsFGoD5J9/s0RjHMQ7hV1nQfGxXhagvjdHp/P00i6GPbsmm0bzeb08SoHSd6Iif7+2aznUTE6nQ6ts8jBKShSQpHACisVHR0EFtM2+0oiUz2dAaI06htxQnt5EFEjJbIZd8QEMVpmiaC2JneIoRH0fdZUw5ARCwcm9hoQse2LeL4eNyVb0oYZ3kIh1iWAwjLJsQmMBRUKOefBoC8EynIQAcfAiUQh/iwp8pns7vLt4Iexo6jxcghhOG2LjOh//ROOfZiyOGhoIcnIwfaiVAwoWwy9QdDyijD09gHoW0jI0PAQgC2xMVu740yxiimoChxwD8tJfoPzriguJX6r6hn1McaIAVdABER+AkJoDfZO8PF6A1/AATPnizSQxIJnnkr54UJPGt9DghhKxKHR+khPRySvDn480MR4OUEgNNYxAdQHw5x/gV/KQI8vLFTALY07Alo6yORvxUBesPfgDCKvq+V4sNeAWDwngPEubGsV4aZAfz/C6B8WgjI24BRfgEgeHEGRxMZO3s2YQWscBWOy8jor9P1mAB7KZqK+VZglJ47HmEN4afnIkAXXaQXXFRYAHsfFJ4t0MsQ9rkMUA+jorCT9TwglmPZ7LcH+OJnOcNBoR5S6L08vj++4ivOPy85wRBm6+NT6cHy8TAY9PruKhD6YA4zkPI3897T81Ov/GCCMvCfRkvuCyGUDiH83WQBbNO3JIyZzISbwPeBc9WLro7shJNzd41+wjQ3f8s7AXgZwPgNK4s/EAMNUPL1NVuNoGz9cultpVq9q9UajRbNFsFqZ03JG7W7auX29k+RunLXaNXrzSwsHxfAbzctyiEs/K5eb9WqtxcBlVbzZ7QtiDZe3UP8/breuJxBFRJoFgamUCmx4A4NaEEpPwO+aDVq2oVTE/4DspMqndzO5CAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 32000,
            ap: 5000,
            dps: 2000.0,
            speed: 12,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 550,
            freq: 75,
            foreswing: 52,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 1250,
            actualDps: 500.0,
            magnification: "25%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [2500, 2500],
                timings: [52, 57]
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "チェリーを集めろ！",
      baseHp: 80000,
      width: 5200,
      enemyLimit: 15,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "50000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2000",
          treasureName: "キャラクタードロップ(2000)",
          probability: "100000",
          amount: "2",
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
            actualHp: 225,
            actualAp: 20,
            actualDps: 12.78,
            magnification: "250%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
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
            actualHp: 250,
            actualAp: 37,
            actualDps: 30.4,
            magnification: "250%",
            count: "20",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
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
            actualHp: 175,
            actualAp: 75,
            actualDps: 125.0,
            magnification: "250%",
            count: "20",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            actualHp: 200,
            actualAp: 75,
            actualDps: 140.62,
            magnification: "250%",
            count: "20",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            actualHp: 4000,
            actualAp: 320,
            actualDps: 600.0,
            magnification: "400%",
            count: "6",
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
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "401",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAABAQAEAQEFAgI1AAAcDQliAAE8FQ06Fg47Fg47Fg44GQs8Fg09Fw4+Fw8+Fw8+GA47GhFBGQ9CGQ5FGhBIGxBRHxBZJRZqLx97LhF9Lxp/Lhp/MBiBLxuFMRxqPS2KMx2LMx2ONx+TOiJ8RTWeOyKCU0F9YFOXVzq4TieLYE6QYEyJZ1eQbV2ba1bXYCx/f3+ieGbcZjDfZSziZy/sYjqvpKHukYrCurgSvP2ZAAAAQHRSTlMAOVR0k7HMHv/05wX/AzAfRVwPgI+gtG//zuDt9////wkphkJhnf/l/8zy////UyD+/3i94v7HAv/+hjYQ////xxyfFgAABC5JREFUWIWNl4la4jAQgD0QueRGSttM1NVSSQOE3axh18L7v9VOkrZQl9qMfoT2c/7Obefq6pKMh/P5cFy+1R8Ouhf/+IIMZgGEwXTQHQ/6w2F/gKjB1PcX83G9rnnYLCQAJJxNHxd+gIqzUX8GhJBg7mbDMCCRlBE5SeCHJOKULAZOgHlIuFKclASkEsTvuwIiyeELgOEtRwC6QL6oawIFMnOLog7iBQIhCzcDrh7QB0IipaITBrgS4AoYP2r9ND0edSa8Xq/nEXlMjyqcuLlgYqBUzzsqQnqtVsvz4Bj1+DFyS2N34iEgla1eqoiH+i0WeSm04MiCkbMHhKdCHTmABqATKhVpSsnEpRT7vg4a8DQVlHPtAiKoSlUE5NElCDoEmHUKgPoiMvoRw0vsD6cgjHQVyIOiOnUS688DwQUH7A/qVIq6CtjhcOBUYv1LhYJfJFWHgwyG9fq6jIAigDHJpGYIqQ1hCFChQxoeJqYOBQOm9OMFxS9KCoafzB2ghWnrFUN7pDmxm1wA4xkpAWJCDMAMmHBeDxgsiv6V1gIDENQAJvUAUwbZDNEAnCyx5pjG9Ka1ldSdnvqfcp1CzIbBGKkfKf0FnKYA5cYLhEB2r7aWn15oTOE0RyjDIsQ6zm/UleLT6zJJkrg0z04X+p/F/OlbwPN7ooVemohYXbqdnr93YPUNAASmFN6+MyEzIKFfVa0fXOCx/FGt//C6KgBFIPUJkbmk2jJ4qTbh6S3JAcAjmwVz0LP/lPS9OgrPywJAbeliV+pnU34CwOr1oc6DRI8zsImzJQj5L0pcGcbCg/+CaI3JrIgrfchzkMQXASYHOgir1wrAj2UZAABnB2FZQ9HkpQJQhMCWMuSRizLNLLE0ea+I4UtcBohMkYmiJkxKqgBFDOMMkEeNRkVla2NosqxLQnyhFeytSGKJJCsXAJQ1KTeh1OXhBACSN2SUKcqiQ+MqwCYvg/NSBmEDAUUcIKkCrFdlgNGgIvoSEJpUBXEnToC8F8oDzXyP46o0riW36tvLvUAYsx4kbxWAXyLZblF/vwUo2Z1dcZ55UDGTNj+V3O+3+zNA0QXmgupBhc+oGkkf61/KALYJ2DlCOLOPLmqZxNv978qJtFn/xBeKPZYRZEmwmlDUcrBcvf/+81kFuPrYrHe73SzE98QsiaUcev5892fzt1rfMD5wuwm8S0nwFqPx52eF/yUZjxbhfwgvmA2dl65uf+KXEV64mLutO7kR/UfiZT/6I5i473wZYaot8Ii1xHPcdc6kOzGmh1PfnI7r2rmYrQUB9pXLHznunLnc309tEIPspdF3eMfNVK9vbht3d81OHv/sbDZub67va9WvG81O224INojEswTcXNrtTrNRh7hpWvWW2ZS09PS+0rNrR7tzd13rgXag2ex02iXpdJrNu8btBR/+AWfJCtYctFRDAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 3092.78,
            speed: 10,
            range: 330,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 97,
            foreswing: 50,
            backswing: 47,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 3000,
            actualDps: 927.83,
            magnification: "30%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 100,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "399",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQADAgIFAwM1IiJSOTiAMC3/AACVR0OXT02gTUenVE2uUE2qWkutWFKtWVGuWFG2WVW0XFa2YFvBXVi9Y12/ZF9/f3/BZV/Nb2reaGjXcm7YcmzZc3DYdXCUkpLZdnHZdnHIfnzaeHTTfnvce3fdfHrdfnrfgXzggX7hhIHfiYfkiYb/gYDkkpDokY7rmpjvn57qs7P0xMPb2dn13t727u7//4D++/prko7KAAAAQHRSTlMAEixOboag7Lr+1f/8/wH/EtIu/wdIX3n/o5L/veoC1/4HIxE0//9CVgVn/3yLnr2tz//gAv/0/////////wH/lJKTLAAABBVJREFUWIW1lu1W6jwQhT2CfAlUKWi0KqEQvgIFWpO0pZX7v6t3Ji1HOUIbfryzFq4W3E9ndiaT3tycj6+xO3FHF340CdfbBdvZ4i9uNp9chRuvZRiq3aSr77quF8jd8hrCLAghhDfOcJ5USgWzrrH+cylDwUQYzPBuBHdKhWplnsJorRR1qJBa426UoEwozxywWCvhOA5XG6ihP5eK4c12fE0GCGAqmKADOe2aDFZa4wi5/Lxxd4prwHpRrszjaynBA8fx1Xr0kVXg+HJlDoBl1ACs+zubufkyQtoh1ybsXLDAh0sKbWWuvxlvjyp3vMktuGIR0EVtAoVlyD305RV9BN0PvcwRIL1VfnVNJ2c1COrwUEmpEOCrjXuN/nOyFaHwFW6pEFBcyfU1FSxmG5mJj6GE536ZP3++U6d6IMit+2Go/5rs/pVjAMHQxrEnzgFC6Zl1AizhOX0URdJsqo3W2sAoTpIorx8+cJfExyFZUsFGoD5J9/s0RjHMQ7hV1nQfGxXhagvjdHp/P00i6GPbsmm0bzeb08SoHSd6Iif7+2aznUTE6nQ6ts8jBKShSQpHACisVHR0EFtM2+0oiUz2dAaI06htxQnt5EFEjJbIZd8QEMVpmiaC2JneIoRH0fdZUw5ARCwcm9hoQse2LeL4eNyVb0oYZ3kIh1iWAwjLJsQmMBRUKOefBoC8EynIQAcfAiUQh/iwp8pns7vLt4Iexo6jxcghhOG2LjOh//ROOfZiyOGhoIcnIwfaiVAwoWwy9QdDyijD09gHoW0jI0PAQgC2xMVu740yxiimoChxwD8tJfoPzriguJX6r6hn1McaIAVdABER+AkJoDfZO8PF6A1/AATPnizSQxIJnnkr54UJPGt9DghhKxKHR+khPRySvDn480MR4OUEgNNYxAdQHw5x/gV/KQI8vLFTALY07Alo6yORvxUBesPfgDCKvq+V4sNeAWDwngPEubGsV4aZAfz/C6B8WgjI24BRfgEgeHEGRxMZO3s2YQWscBWOy8jor9P1mAB7KZqK+VZglJ47HmEN4afnIkAXXaQXXFRYAHsfFJ4t0MsQ9rkMUA+jorCT9TwglmPZ7LcH+OJnOcNBoR5S6L08vj++4ivOPy85wRBm6+NT6cHy8TAY9PruKhD6YA4zkPI3897T81Ov/GCCMvCfRkvuCyGUDiH83WQBbNO3JIyZzISbwPeBc9WLro7shJNzd41+wjQ3f8s7AXgZwPgNK4s/EAMNUPL1NVuNoGz9cultpVq9q9UajRbNFsFqZ03JG7W7auX29k+RunLXaNXrzSwsHxfAbzctyiEs/K5eb9WqtxcBlVbzZ7QtiDZe3UP8/breuJxBFRJoFgamUCmx4A4NaEEpPwO+aDVq2oVTE/4DspMqndzO5CAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 32000,
            ap: 5000,
            dps: 2000.0,
            speed: 12,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 550,
            freq: 75,
            foreswing: 52,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 12800,
            actualAp: 2000,
            actualDps: 800.0,
            magnification: "40%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [2500, 2500],
                timings: [52, 57]
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "必殺！レインボー爆弾！",
      baseHp: 200000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "150000",
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
          treasureId: "3000",
          treasureName: "キャラクタードロップ(3000)",
          probability: "250000",
          amount: "11",
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
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQEBAQFBQUFBQUGBgYGBgYGBgYGBgYICAgLCwsODg4ODg4PDw8RERERERESEhITEhITExMXFxcYGBgaGhoaGhocHBwvFRUeHh4gICAhISElJSUmJiYpKSktLS1cGxsxMTFsJiayEhKkRxZDAAAAQHRSTlMAAgQJDxQYHyYsNOc8/0ZOW2TV4VNscniAjpSZoMz6vv+nrbXz/8XW/87m+OD/2v/p7v/0///6///8////////8keQagAABOBJREFUWIWVV4tW4jAQXSnIQ4qwAoLyiGBkZBkCqSElkfX//2qntDzaBmXjOYjAXCZ37twZf/264hSKlfp9s9muV4o313w+c7xKuz99Xy4Wy+G0Vy/+b/hNuTVZBMbs6Jjt+q1b/r8kvFp/sbE7o6WUKrS77fyp8j8IXmOyDq0Gxnw6DKS160GtcHV8oT4NrMF9tB9DhDYYVK/OoTIIbMj988O1XfWuZfK2t7I6He/7YMxb/boUiq2lCbPxvi9268erUig03jYGcvE+N5tp5RqAyktgHfE+02Z5zR2K3dU5/2cHzbz9cyUL9bdt6EqA7hCuu96PALf9wEVAXMng+UcWvfbMKOcF6MjtW+0HEm6qL9kEeFxQDvQjX5/K3wOU+ysr0gkAxjUQAnzm33W+ZaH0ODc6cwFUQF/PmNCSMTYafJdCqTVTWQmClIzDh1KhCT8+P0bPtxfDvUp3lpcgD5U0f7/+7kKpPr8+L2dQIAdabQ1mmWcqDHd/vz4lMYCfH3xYvxBffSYHcrSQzziH8IOMifkckd21nCwWaoO1sdIRH4MwYa3iXBocDVwkFOoTchC4JKBIBRhaAaHi/rDm+v5JzoHS8cipFJwhfeauk4u/qQ6C3XfxIPftyXj0+PqUA7jtr/MOlgbYvwuI9DiaZuOLnUU2ngPle1QEQ4jvIfdtNszGt96zBsBASKXFEXTPLgNSI0AOoNB4z8uPRE/FT8FyZayxWrDROEPAc2CF++ZUtKSVfQAVCqWEMuK1n4r3msuLBgJJZ4LgYBSwiBilZvcpgOrUaeHxEWafG1qlVZSDIQ5GL6luKvXWNmvB/EReKGCfyc4AVzYMDbCH5nkvEIPGZBXAT5LG/ZuMRwqkBxLj63MqAbLgXW4G8FP90OAZPOd8NK4X0gnYPANMHl/iRnKEWFLAEP+M26lm9h7XO8xzJ4+vca1BakV+CigE3k0aaTMoDbY5BqLE5eFWDKnHgQSgFAYP48dqZrLV3ozLQ0Dj4RIiUuNel+uXZjW37FENZD6eSAgPl8BEzkzPXVbWmLlVzMPDcDkChKuWYzDfL61w+sAhjqSEB4COA6C9tOiKP8bRE0h+r10AzcWFPuAaD6nET0A7V4P2MgsA8Sg9AoA5AAQ9B0D9PTuJQO/98+wKsZZBb1xDsTLdqmwKypD3iwOJPEHiajtxbGjFpyCnRIa0IquDx3CdKE1ux46B4nVWFvII6lhFSj1ZF9C8O6ZqobG0Ml8HkEcAdtgXwCwbjvWoPNk4uolFIzA5IqkTmJVrRyRLtSJvCGcAmADQjuic67dEY54FLVgOgITg2hFvyJOyeyngqRtPdcTNc8kBQLa8MlR5dsqCKxAnfTGV1BE2U+d2dFPpLzfWSESBGNkxrTHI9WnWYCI10DP3ql4oN19mqwBpCaItghGOIDR9vJZInopw0biwqnvlRmf8h1ZJml0oUUQeevQ0TJLhejOuuuMjIjrLKFEeXYKRAwuVfC1ncVfQlqxn7vVsz0P9fbM34ngNoEUCePL/olCUCwNUwe+uswjEgeeVmvOzUtIkoe2EUok2EohuJRTcTVvVUrHoeVkevWq71e1NXs+tEXhUEIwmMiFJJQUfPUwHT/3eY6fZKKeZLN73BpPpePibzsP5Wczn87M/fw+Hw/F4+vLUrSVM/ANKmgjaouIsOAAAAABJRU5ErkJggg==",
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
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
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
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "400",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 3000,
            dps: 1111.11,
            speed: 6,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 750,
            freq: 81,
            foreswing: 27,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 3000,
            actualDps: 1111.11,
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
          enemyId: "399",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQADAgIFAwM1IiJSOTiAMC3/AACVR0OXT02gTUenVE2uUE2qWkutWFKtWVGuWFG2WVW0XFa2YFvBXVi9Y12/ZF9/f3/BZV/Nb2reaGjXcm7YcmzZc3DYdXCUkpLZdnHZdnHIfnzaeHTTfnvce3fdfHrdfnrfgXzggX7hhIHfiYfkiYb/gYDkkpDokY7rmpjvn57qs7P0xMPb2dn13t727u7//4D++/prko7KAAAAQHRSTlMAEixOboag7Lr+1f/8/wH/EtIu/wdIX3n/o5L/veoC1/4HIxE0//9CVgVn/3yLnr2tz//gAv/0/////////wH/lJKTLAAABBVJREFUWIW1lu1W6jwQhT2CfAlUKWi0KqEQvgIFWpO0pZX7v6t3Ji1HOUIbfryzFq4W3E9ndiaT3tycj6+xO3FHF340CdfbBdvZ4i9uNp9chRuvZRiq3aSr77quF8jd8hrCLAghhDfOcJ5USgWzrrH+cylDwUQYzPBuBHdKhWplnsJorRR1qJBa426UoEwozxywWCvhOA5XG6ihP5eK4c12fE0GCGAqmKADOe2aDFZa4wi5/Lxxd4prwHpRrszjaynBA8fx1Xr0kVXg+HJlDoBl1ACs+zubufkyQtoh1ybsXLDAh0sKbWWuvxlvjyp3vMktuGIR0EVtAoVlyD305RV9BN0PvcwRIL1VfnVNJ2c1COrwUEmpEOCrjXuN/nOyFaHwFW6pEFBcyfU1FSxmG5mJj6GE536ZP3++U6d6IMit+2Go/5rs/pVjAMHQxrEnzgFC6Zl1AizhOX0URdJsqo3W2sAoTpIorx8+cJfExyFZUsFGoD5J9/s0RjHMQ7hV1nQfGxXhagvjdHp/P00i6GPbsmm0bzeb08SoHSd6Iif7+2aznUTE6nQ6ts8jBKShSQpHACisVHR0EFtM2+0oiUz2dAaI06htxQnt5EFEjJbIZd8QEMVpmiaC2JneIoRH0fdZUw5ARCwcm9hoQse2LeL4eNyVb0oYZ3kIh1iWAwjLJsQmMBRUKOefBoC8EynIQAcfAiUQh/iwp8pns7vLt4Iexo6jxcghhOG2LjOh//ROOfZiyOGhoIcnIwfaiVAwoWwy9QdDyijD09gHoW0jI0PAQgC2xMVu740yxiimoChxwD8tJfoPzriguJX6r6hn1McaIAVdABER+AkJoDfZO8PF6A1/AATPnizSQxIJnnkr54UJPGt9DghhKxKHR+khPRySvDn480MR4OUEgNNYxAdQHw5x/gV/KQI8vLFTALY07Alo6yORvxUBesPfgDCKvq+V4sNeAWDwngPEubGsV4aZAfz/C6B8WgjI24BRfgEgeHEGRxMZO3s2YQWscBWOy8jor9P1mAB7KZqK+VZglJ47HmEN4afnIkAXXaQXXFRYAHsfFJ4t0MsQ9rkMUA+jorCT9TwglmPZ7LcH+OJnOcNBoR5S6L08vj++4ivOPy85wRBm6+NT6cHy8TAY9PruKhD6YA4zkPI3897T81Ov/GCCMvCfRkvuCyGUDiH83WQBbNO3JIyZzISbwPeBc9WLro7shJNzd41+wjQ3f8s7AXgZwPgNK4s/EAMNUPL1NVuNoGz9cultpVq9q9UajRbNFsFqZ03JG7W7auX29k+RunLXaNXrzSwsHxfAbzctyiEs/K5eb9WqtxcBlVbzZ7QtiDZe3UP8/breuJxBFRJoFgamUCmx4A4NaEEpPwO+aDVq2oVTE/4DspMqndzO5CAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 32000,
            ap: 5000,
            dps: 2000.0,
            speed: 12,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 550,
            freq: 75,
            foreswing: 52,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 64000,
            actualAp: 10000,
            actualDps: 4000.0,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [2500, 2500],
                timings: [52, 57]
            }
          }
        },
        {
          enemyId: "401",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAABAQAEAQEFAgI1AAAcDQliAAE8FQ06Fg47Fg47Fg44GQs8Fg09Fw4+Fw8+Fw8+GA47GhFBGQ9CGQ5FGhBIGxBRHxBZJRZqLx97LhF9Lxp/Lhp/MBiBLxuFMRxqPS2KMx2LMx2ONx+TOiJ8RTWeOyKCU0F9YFOXVzq4TieLYE6QYEyJZ1eQbV2ba1bXYCx/f3+ieGbcZjDfZSziZy/sYjqvpKHukYrCurgSvP2ZAAAAQHRSTlMAOVR0k7HMHv/05wX/AzAfRVwPgI+gtG//zuDt9////wkphkJhnf/l/8zy////UyD+/3i94v7HAv/+hjYQ////xxyfFgAABC5JREFUWIWNl4la4jAQgD0QueRGSttM1NVSSQOE3axh18L7v9VOkrZQl9qMfoT2c/7Obefq6pKMh/P5cFy+1R8Ouhf/+IIMZgGEwXTQHQ/6w2F/gKjB1PcX83G9rnnYLCQAJJxNHxd+gIqzUX8GhJBg7mbDMCCRlBE5SeCHJOKULAZOgHlIuFKclASkEsTvuwIiyeELgOEtRwC6QL6oawIFMnOLog7iBQIhCzcDrh7QB0IipaITBrgS4AoYP2r9ND0edSa8Xq/nEXlMjyqcuLlgYqBUzzsqQnqtVsvz4Bj1+DFyS2N34iEgla1eqoiH+i0WeSm04MiCkbMHhKdCHTmABqATKhVpSsnEpRT7vg4a8DQVlHPtAiKoSlUE5NElCDoEmHUKgPoiMvoRw0vsD6cgjHQVyIOiOnUS688DwQUH7A/qVIq6CtjhcOBUYv1LhYJfJFWHgwyG9fq6jIAigDHJpGYIqQ1hCFChQxoeJqYOBQOm9OMFxS9KCoafzB2ghWnrFUN7pDmxm1wA4xkpAWJCDMAMmHBeDxgsiv6V1gIDENQAJvUAUwbZDNEAnCyx5pjG9Ka1ldSdnvqfcp1CzIbBGKkfKf0FnKYA5cYLhEB2r7aWn15oTOE0RyjDIsQ6zm/UleLT6zJJkrg0z04X+p/F/OlbwPN7ooVemohYXbqdnr93YPUNAASmFN6+MyEzIKFfVa0fXOCx/FGt//C6KgBFIPUJkbmk2jJ4qTbh6S3JAcAjmwVz0LP/lPS9OgrPywJAbeliV+pnU34CwOr1oc6DRI8zsImzJQj5L0pcGcbCg/+CaI3JrIgrfchzkMQXASYHOgir1wrAj2UZAABnB2FZQ9HkpQJQhMCWMuSRizLNLLE0ea+I4UtcBohMkYmiJkxKqgBFDOMMkEeNRkVla2NosqxLQnyhFeytSGKJJCsXAJQ1KTeh1OXhBACSN2SUKcqiQ+MqwCYvg/NSBmEDAUUcIKkCrFdlgNGgIvoSEJpUBXEnToC8F8oDzXyP46o0riW36tvLvUAYsx4kbxWAXyLZblF/vwUo2Z1dcZ55UDGTNj+V3O+3+zNA0QXmgupBhc+oGkkf61/KALYJ2DlCOLOPLmqZxNv978qJtFn/xBeKPZYRZEmwmlDUcrBcvf/+81kFuPrYrHe73SzE98QsiaUcev5892fzt1rfMD5wuwm8S0nwFqPx52eF/yUZjxbhfwgvmA2dl65uf+KXEV64mLutO7kR/UfiZT/6I5i473wZYaot8Ii1xHPcdc6kOzGmh1PfnI7r2rmYrQUB9pXLHznunLnc309tEIPspdF3eMfNVK9vbht3d81OHv/sbDZub67va9WvG81O224INojEswTcXNrtTrNRh7hpWvWW2ZS09PS+0rNrR7tzd13rgXag2ex02iXpdJrNu8btBR/+AWfJCtYctFRDAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 3092.78,
            speed: 10,
            range: 330,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 97,
            foreswing: 50,
            backswing: 47,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 3092.78,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 100,
                duration_f: 50,
                duration_s: 1.67
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
            actualHp: 500,
            actualAp: 200,
            actualDps: 146.34,
            magnification: "10%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2070Data;

