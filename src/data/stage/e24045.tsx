// Stage 24045 Data
import type { StageData } from '../../app/stage/types';

export const e24045Data: StageData = {
  eventId: 24045,
  eventName: "強襲！義理チョコ軍団",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 45,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "義理 Lv.1",
      baseHp: 30000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 10700,
            actualAp: 71,
            actualDps: 31.79,
            magnification: "5%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 4000,
            actualAp: 250,
            actualDps: 208.33,
            magnification: "100%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 10700,
            actualAp: 71,
            actualDps: 31.79,
            magnification: "5%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 10500,
            actualAp: 240,
            actualDps: 240.0,
            magnification: "5%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "義理 Lv.2",
      baseHp: 60000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 40,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "55",
          treasureName: "ネコビタンA",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 53500,
            actualAp: 355,
            actualDps: 158.96,
            magnification: "25%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 6000,
            actualAp: 375,
            actualDps: 312.5,
            magnification: "150%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 105,
            actualAp: 45,
            actualDps: 75.0,
            magnification: "150%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 53500,
            actualAp: 355,
            actualDps: 158.96,
            magnification: "25%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 52500,
            actualAp: 1200,
            actualDps: 1200.0,
            magnification: "25%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "義理 Lv.3",
      baseHp: 100000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 107000,
            actualAp: 710,
            actualDps: 317.91,
            magnification: "50%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 10000,
            actualAp: 625,
            actualDps: 520.83,
            magnification: "250%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 107000,
            actualAp: 710,
            actualDps: 317.91,
            magnification: "50%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 105000,
            actualAp: 2400,
            actualDps: 2400.0,
            magnification: "50%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "義理 Lv.4",
      baseHp: 150000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "85",
          treasureName: "素材（赤）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 160500,
            actualAp: 1065,
            actualDps: 476.87,
            magnification: "75%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 16000,
            actualAp: 1000,
            actualDps: 833.32,
            magnification: "400%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 160500,
            actualAp: 1065,
            actualDps: 476.87,
            magnification: "75%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 157500,
            actualAp: 3600,
            actualDps: 3600.0,
            magnification: "75%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "義理 Lv.5",
      baseHp: 200000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "250000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 214000,
            actualAp: 1420,
            actualDps: 635.82,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 24000,
            actualAp: 1500,
            actualDps: 1249.98,
            magnification: "600%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 24000,
            actualAp: 3924,
            actualDps: 629.52,
            magnification: "600%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 214000,
            actualAp: 1420,
            actualDps: 635.82,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 210000,
            actualAp: 4800,
            actualDps: 4800.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "義理 Lv.6",
      baseHp: 250000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "56",
          treasureName: "ネコビタンB",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 299600,
            actualAp: 1988,
            actualDps: 890.15,
            magnification: "140%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 33600,
            actualAp: 2100,
            actualDps: 1749.97,
            magnification: "840%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 588,
            actualAp: 252,
            actualDps: 420.0,
            magnification: "840%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 33600,
            actualAp: 5493,
            actualDps: 881.33,
            magnification: "840%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 299600,
            actualAp: 1988,
            actualDps: 890.15,
            magnification: "140%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 273000,
            actualAp: 6240,
            actualDps: 6240.0,
            magnification: "130%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 6,
      stageName: "義理 Lv.7",
      baseHp: 300000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "86",
          treasureName: "素材（飛行）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 385200,
            actualAp: 2556,
            actualDps: 1144.48,
            magnification: "180%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 43200,
            actualAp: 2700,
            actualDps: 2249.96,
            magnification: "1080%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 756,
            actualAp: 324,
            actualDps: 540.0,
            magnification: "1080%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 43200,
            actualAp: 7063,
            actualDps: 1133.14,
            magnification: "1080%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 385200,
            actualAp: 2556,
            actualDps: 1144.48,
            magnification: "180%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 336000,
            actualAp: 7680,
            actualDps: 7680.0,
            magnification: "160%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "義理 Lv.8",
      baseHp: 350000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "87",
          treasureName: "素材（黒）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 470800,
            actualAp: 3124,
            actualDps: 1398.8,
            magnification: "220%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
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
            actualHp: 52800,
            actualAp: 3300,
            actualDps: 2749.96,
            magnification: "1320%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 924,
            actualAp: 396,
            actualDps: 660.0,
            magnification: "1320%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 52800,
            actualAp: 8632,
            actualDps: 1384.94,
            magnification: "1320%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 470800,
            actualAp: 3124,
            actualDps: 1398.8,
            magnification: "220%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 399000,
            actualAp: 9120,
            actualDps: 9120.0,
            magnification: "190%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "義理 Lv.9",
      baseHp: 400000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "2",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 556400,
            actualAp: 3692,
            actualDps: 1653.13,
            magnification: "260%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 62400,
            actualAp: 3900,
            actualDps: 3249.95,
            magnification: "1560%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 1092,
            actualAp: 468,
            actualDps: 780.0,
            magnification: "1560%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 62400,
            actualAp: 10202,
            actualDps: 1636.75,
            magnification: "1560%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 556400,
            actualAp: 3692,
            actualDps: 1653.13,
            magnification: "260%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 462000,
            actualAp: 10560,
            actualDps: 10560.0,
            magnification: "220%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "義理 Lv.10",
      baseHp: 450000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 642000,
            actualAp: 4260,
            actualDps: 1907.46,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 72000,
            actualAp: 4500,
            actualDps: 3749.94,
            magnification: "1800%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 1260,
            actualAp: 540,
            actualDps: 900.0,
            magnification: "1800%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 72000,
            actualAp: 11772,
            actualDps: 1888.56,
            magnification: "1800%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 642000,
            actualAp: 4260,
            actualDps: 1907.46,
            magnification: "300%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 525000,
            actualAp: 12000,
            actualDps: 12000.0,
            magnification: "250%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 10,
      stageName: "義理 Lv.11",
      baseHp: 525000,
      width: 4200,
      enemyLimit: 10,
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
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 834600,
            actualAp: 5538,
            actualDps: 2479.7,
            magnification: "390%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
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
            actualHp: 89600,
            actualAp: 5600,
            actualDps: 4666.59,
            magnification: "2240%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 1568,
            actualAp: 672,
            actualDps: 1120.0,
            magnification: "2240%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 89600,
            actualAp: 14649,
            actualDps: 2350.21,
            magnification: "2240%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 834600,
            actualAp: 5538,
            actualDps: 2479.7,
            magnification: "390%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 630000,
            actualAp: 14400,
            actualDps: 14400.0,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 11,
      stageName: "義理 Lv.12",
      baseHp: 600000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "88",
          treasureName: "素材（硬）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1027200,
            actualAp: 6816,
            actualDps: 3051.94,
            magnification: "480%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 107200,
            actualAp: 6700,
            actualDps: 5583.24,
            magnification: "2680%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 1876,
            actualAp: 804,
            actualDps: 1340.0,
            magnification: "2680%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 107200,
            actualAp: 17527,
            actualDps: 2811.86,
            magnification: "2680%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1027200,
            actualAp: 6816,
            actualDps: 3051.94,
            magnification: "480%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 735000,
            actualAp: 16800,
            actualDps: 16800.0,
            magnification: "350%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "義理 Lv.13",
      baseHp: 675000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "89",
          treasureName: "素材（天）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1219800,
            actualAp: 8094,
            actualDps: 3624.17,
            magnification: "570%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 124800,
            actualAp: 7800,
            actualDps: 6499.9,
            magnification: "3120%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 2184,
            actualAp: 936,
            actualDps: 1560.0,
            magnification: "3120%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 124800,
            actualAp: 20404,
            actualDps: 3273.5,
            magnification: "3120%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1219800,
            actualAp: 8094,
            actualDps: 3624.17,
            magnification: "570%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 840000,
            actualAp: 19200,
            actualDps: 19200.0,
            magnification: "400%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "義理 Lv.14",
      baseHp: 750000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1412400,
            actualAp: 9372,
            actualDps: 4196.41,
            magnification: "660%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 142400,
            actualAp: 8900,
            actualDps: 7416.55,
            magnification: "3560%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 2492,
            actualAp: 1068,
            actualDps: 1780.0,
            magnification: "3560%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 142400,
            actualAp: 23282,
            actualDps: 3735.15,
            magnification: "3560%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1412400,
            actualAp: 9372,
            actualDps: 4196.41,
            magnification: "660%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 945000,
            actualAp: 21600,
            actualDps: 21600.0,
            magnification: "450%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 14,
      stageName: "義理 Lv.15",
      baseHp: 825000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 110,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "750000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1605000,
            actualAp: 10650,
            actualDps: 4768.65,
            magnification: "750%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 160000,
            actualAp: 10000,
            actualDps: 8333.2,
            magnification: "4000%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 2800,
            actualAp: 1200,
            actualDps: 2000.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 160000,
            actualAp: 26160,
            actualDps: 4196.8,
            magnification: "4000%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1605000,
            actualAp: 10650,
            actualDps: 4768.65,
            magnification: "750%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1050000,
            actualAp: 24000,
            actualDps: 24000.0,
            magnification: "500%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "義理 Lv.16",
      baseHp: 900000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 110,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "90",
          treasureName: "素材（未来）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1712000,
            actualAp: 11360,
            actualDps: 5086.56,
            magnification: "800%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 176000,
            actualAp: 11000,
            actualDps: 9166.52,
            magnification: "4400%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 3080,
            actualAp: 1320,
            actualDps: 2200.0,
            magnification: "4400%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 176000,
            actualAp: 28776,
            actualDps: 4616.48,
            magnification: "4400%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1712000,
            actualAp: 11360,
            actualDps: 5086.56,
            magnification: "800%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1155000,
            actualAp: 26400,
            actualDps: 26400.0,
            magnification: "550%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "義理 Lv.17",
      baseHp: 975000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 130,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "105",
          treasureName: "統率力回復アイテム",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1819000,
            actualAp: 12070,
            actualDps: 5404.47,
            magnification: "850%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 192000,
            actualAp: 12000,
            actualDps: 9999.84,
            magnification: "4800%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 3360,
            actualAp: 1440,
            actualDps: 2400.0,
            magnification: "4800%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 192000,
            actualAp: 31392,
            actualDps: 5036.16,
            magnification: "4800%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1819000,
            actualAp: 12070,
            actualDps: 5404.47,
            magnification: "850%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1260000,
            actualAp: 28800,
            actualDps: 28800.0,
            magnification: "600%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 17,
      stageName: "義理 Lv.18",
      baseHp: 1050000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 130,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "91",
          treasureName: "素材（紫）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1926000,
            actualAp: 12780,
            actualDps: 5722.38,
            magnification: "900%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 208000,
            actualAp: 13000,
            actualDps: 10833.16,
            magnification: "5200%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 3640,
            actualAp: 1560,
            actualDps: 2600.0,
            magnification: "5200%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 208000,
            actualAp: 34008,
            actualDps: 5455.84,
            magnification: "5200%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 1926000,
            actualAp: 12780,
            actualDps: 5722.38,
            magnification: "900%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1365000,
            actualAp: 31200,
            actualDps: 31200.0,
            magnification: "650%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "義理 Lv.19",
      baseHp: 1125000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 130,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 2033000,
            actualAp: 13490,
            actualDps: 6040.29,
            magnification: "950%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 224000,
            actualAp: 14000,
            actualDps: 11666.48,
            magnification: "5600%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 3920,
            actualAp: 1680,
            actualDps: 2800.0,
            magnification: "5600%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 224000,
            actualAp: 36624,
            actualDps: 5875.52,
            magnification: "5600%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 2033000,
            actualAp: 13490,
            actualDps: 6040.29,
            magnification: "950%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1470000,
            actualAp: 33600,
            actualDps: 33600.0,
            magnification: "700%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 19,
      stageName: "義理 Lv.MAX",
      baseHp: 1200000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 150,
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
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 2140000,
            actualAp: 14200,
            actualDps: 6358.2,
            magnification: "1000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
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
            actualHp: 240000,
            actualAp: 15000,
            actualDps: 12499.8,
            magnification: "6000%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            actualHp: 4200,
            actualAp: 1800,
            actualDps: 3000.0,
            magnification: "6000%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
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
            actualHp: 240000,
            actualAp: 39240,
            actualDps: 6295.2,
            magnification: "6000%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "539",
          enemyName: "チョコわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQAKBAIICAgNCgwUCAUmAAAZDAYSEBEfDwlKAAAYFxclEwstEwwoFw8yFg0hISE3Gg92AAA8IRUqKSlEIRRoEQuYAgIxMDBNKBm7BgU+Pj5iNyRFRETjAgD8AAFNTU1XV1djZGVwcXJ8fHxdjZGFhYWOjo+VlZWfoKGtra27u7zLy8vb29vq6ur6+vr///////8OSTpQAAAAQHRSTlMADBwqSWZygpqw5sTX9f+7/////////////////////////////////////////////////////////////wD/XOEzUQAABMRJREFUWIWVl4t6ojoUheulXmEXkgYGAuQoFYcychuptdbx/d/q7IBS23GArlZK+MjP2pekePfnoru/NR5+nA/no4/Bnw/d/RswUDSlHkyomH8TMAS2NgfnwQMVa7X3LcAQbLF2z7an1F2saf87gAFwl/vraQXTXJevnW8BFNsXrv88KwczFwfPZtcc9O9H9yNgpqZRBpPxeDwByjRmwngkNWgB9McqpdRBuY5D8eA63DHxyOS569J5I2AwwdlMLIQjbsr2/WbAnDLGTLH2NeQwk2qslFZeZpSazuKhGVDeJdbPPuOcOza/yJG/tmm3AR4oo8x0189rgfHKRFxUZoDbbhuAXRxwjpMs90OWzGYXB4xWDrjjiKcq86508iQcx253QM8O1tL/r83KKgHcsVabXw5mobMDXzr4tflZAdwKwDs4YLUDTLv/dI6fYws8ucL9ngP5XPl8zoWp67qBvWWzLmU8V+HycNs2KV2tVj90bNFvVAFXM7d5hSB0s9n80DmusO4OhCts+2KDwSPVuW93AGDzU+ZWIWg1QLiGgwdT65ADtFBWAecCRRtXWjDWIQcos3IgTADQawEY0GExEapprEwi5tDa7+h/Zz1mKW6zrSFMiaaBhpuhDIHT/e/V5qxVkpiitZGGM8vzPAsqgGsD/KwBMiN2SxXuw7f97mW7z7X1c1kA8QH4Ab7sjEbAKD2+7d8ORXHcaVxuKLYZPp/n/8wC7rY5uI9jPUzyfLs/bgEQISD7/bgq5byGMoSWHPQHc1k5IznsXlOMWTDQPqrIBOetnTgFSYD85XB6tTScgZ1U9aJwweRtDrAP5HwLvN3b8XRcgjDLLdmVHxtsDMHuACCGAenxuH9HAsO+kp0hDyYmhZpdAN4SjDApdu/vEaWu6/ti4Vda48+0FWB4ESG6EWyz/fshD02NOuXsxWIh+KOm3PdbAaFlGJh2ssx22+KwTzUwiCbTq3lxvntRB7cBk/saYBiWQXRZDzDSw+kQAwTZS56+7I+n0+mg3AT0YX4FkAg89+IAID2d9m+n0/FweHvZBkGx824CRjD7BDCMMAyjMIrRCyLei+z1dZdY+nw4vB0C9tDgGkCM7a6IgUSBvBYGlm5ZmFvyzyooAKNPACvGv0GS5oncl4hlAZbXsv7ZByqAUrbyJQR8ZJgVRZ5FpBwvA4uQIGgCwGB85YAkxUuRJ3kIFY5YGMCyGTCdXucgL5KAkLRY6gRxVpgGutEAkCu5VJ2DwNOtKM93GS4PAlESp7reABh/BRArSrcyiGU59KII/TQA+l8ABsl2RZ6GHlQ5JHGGjhoA+Hr9JYQsizxymQ5xvMxIUwi4J352YHjkMh2le2EUNYYg31OnnwD15PIc4sxoDqF80bwGXItAmERJYxnrTfUmwNCDOIpbcnD3ZTV+8YBrqS0Hlz0xwia4KaNpLZQApdzWA0O/KQQsl82v+xNVhRZNGgF3vd6ovnXYrzSsr8xw1GsG4D/Iy93qX1fg8kW0EXA3O99df1MdlHbk5YdOgAnGKZdm/V25p8qBDGTcCdCT2/MU1H7vIrWcieBeK6A3mkyxFxQF6zmrk4EXZoqC4+lk3G8BjCdz5UFRVXVWz0fUDBnqbD6dT8eDL4D/AeikCwPLKsHBAAAAAElFTkSuQmCC",
          traits: ["黒"],
          baseStats: {
            hp: 214000,
            ap: 1420,
            dps: 635.82,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 314,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 2140000,
            actualAp: 14200,
            actualDps: 6358.2,
            magnification: "1000%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "immune-freeze": {
                enabled: true
            }
          }
        },
        {
          enemyId: "156",
          enemyName: "マーチン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgEGBAMHBAIPBAELCAUOCggQCwYUDQgiCQIaDwcYEQstDQMhFgogGAoiGhFIEgEqIRUuJRIzJhM3LBdfIgNCLhRBNSJENhpmLQZYMhNSNw1HPSlzNwhSQyNcRR9USC9bRx5rRRh1RAeFSRZlVjppVzWPViB1YT2GYi91alOKcDaVbjCQeFebejOifTOthzaXi3G2kkGum3DGnUPUp0O+rorgsUXsuknNvpzdzavo2LX0477558H////niphMAAAAQHRSTlMACRQfz5wpNUVd4Idx7bhTZv2efI79/8ygs//p/vv/vd7/yvb////S/+T+/ur//vP//f79/////v////////8AmKKAbwAABExJREFUWIXtVtuWojgUFbAAFS8oIFqIotwFIUBCFHD+/68mAa3qurTVvWYePU9ZIWdn73MLvX/+o/WeAE+AJ8AT4AnwBPhfAd6MFSVJ5JjeF2M5gf9m+5Nxs1WQJNF+8fksO1W2u70isg/dmek2QRhBhMB+QBAYluM4li6mqwiSL3mki59Z8NO3y9hFgFBelJcyg2g3E2b6du/tt7okSjsA86LIIYbB4iMJdhUt53y3VBIMi6q5Xps6S9XxDiCEzxgjEKiqlVVNU18KiBOd+9V/FgH7oLB3/7K+tlZahurC882goVol3W7qEmLwjsAIeuDHjv06JWspwvDStMeu1TEFoQWoL0VBwA2Plxa5uRAE5aaCl7yTb4f+WpZ6PdHDqGy6++sTgKqF27uNFsaI4bHqPhKEaNaGjd+GsW/bqWMaox6rQ1zUHYGmSM/IjSn52DAMRDngM8g6+KZE2BMowCKOHcc2bc3P9z0xOucdySsRgG7isW3bRnhb30XUBc4VhugnBFLf1mRNe1V6ixwXNwHXIr5HDxkU4RbMNLt9J4Hc89yA6Pdtx1xrmjxie7MgvRNoTul7+H+hkJ+aTmKdo91ouwtDxzFNzdHkoUhLdVXeAY7gA4BtdIrgkZZIe8NyEuS+6YcnZ63F/uugjangXaryQmOYpZ8AOg3g1BD/ummqvbjKHNt20tyX5cNO6UqZERV9npAzzSXE9yBaBMG8MYgpxToIou1Uik6OaftpbMrDkfBW2wzD6kV5LOp3DamqqhsXdQqqsqoLRRD4RRDClKg3NXksfWwubrYY6N5yd8sjDF3LPbqUEXaP2XbrKaSMhQA4vmPK2notv3zT3yzPTb0OIbUsdbNxY3xGwUKSeJZOGkbcxc7acWTf9w+D3wwGcQtoHHLraLmum59zb3CnyknL0DY109fMw1L57YDhFQ+gM05jANIwDXThbWjoIUmAqdH8vzyacYww35BSTdM4Pm5G74EWvNg2HZtoMGj9PDB+4pZFlmVFWWV94X6/tErI9esYmI4zfzggudUmuzdHZU1uCLODD2j7rNfjyYh/5M8qINyUXeVeL1a4bRHYue+QDJD2GUrswxnPzCJkqaf61t4qyFdcu0tSZ67l8cuX4fzJhD0KhqFVVFVdVYW7WSZgzjKznUPjvz5MuMfuJFd5MlpBQKrwSGoRJAMliRTplXS/LA+XykP11KZRrnMrdIZx6uYA4WRKZnaysf31ePwifPfwfTRuCz2BWbXl3DZmIpKsQGQZ/cHgJ/Y9GqsE6gyjvL0L54gCxMC4Z/MH45cwnDO9QXL3xx7P60W6mfyo/aZgvhsJVMh9OEOdlfIq1//QnzZ0G6Zp1E0mHIhk4CXKH6j/aMwCkLcVo5gOPVF6/GvwPUAOdvv9IdWp789/J1+MZM4TOYHm9O+dyd8JPyflxHP8KAUrkWX+kgEnvUzGh82w3+8P1YPafxk9bp9/AS8obe+4SvpGAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 210000,
            ap: 4800,
            dps: 4800.0,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 30,
            foreswing: 21,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 1575000,
            actualAp: 36000,
            actualDps: 36000.0,
            magnification: "750%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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

export default e24045Data;

