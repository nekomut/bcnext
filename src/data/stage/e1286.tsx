// Stage 1286 Data
import type { StageData } from '../../app/stage/types';

export const e1286Data: StageData = {
  eventId: 1286,
  eventName: "お年玉襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 286,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "待ちに待ったお年玉",
      baseHp: 1500,
      width: 3600,
      enemyLimit: 20,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "10000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "5000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 9.93,
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 9.93,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "90%",
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
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA06982B4cY/dWb+AgAXHQJd3b7TY+Wx3H9+qWgbrF+50uwu3u4KpFQhiQBOxuCxhIiu221bI6VqvvX7phuFEAePTYs8HyFenuXF27i2C34KDLYLVMKL3vf/UVwfKUj+AHA7tlDofQu7q2h9XuuQTQvWnWG4bZ900t3yF4sYP6cX6WCaJ7173rQXsER2Yiod2xmqbZqNcNo78zOUZAz69rfdKh22y5fu1+jwQyLOvKJg6shmEAXK+pwsYCPSKg6aUjx5VoNtowcIx7YI9Xp2ljhG1T1zVdrxuqah6ukCCJghe7IzxUowVv7fR6Y/pROzwAXtNURdE0XVXU5u7kUAG9+FHsI6hZR7zZhIF3Bl1yBmBfiM6C8UF8DR0IAKtpmqyo+Y+LtKtg2u/glrRMA/FmA0Zt97EzHARsEwoOW3VwTgoZFEUxfNOugsX1Rh+7NBv4PrNutqxmDxnbBNyAg4ZRq5n1GqBUVVNkGUhktcyugwTKQ0/6HBxwq9HAN8Pb5Jo57Ax/GwRdU2q1hkoIACsriiiIJcH3HBTQ9CrbR7zpNqvXJLF225mgoSS51tChLTAowCAKpRKXD63SNOWZ2XZwReumK8BQJUkBvfVbsFpTZUlSDUOG3iphkColrpTnt2dAwfSeAwGA9UbDdSBKikqABmIhcU3VZFFUjaaM7gmDWOE5Ls/7p4Bgleu3W80aEjRNwEhIoCGBVsMnJAAFQGAprgJIQRR4sJCPrNHU4pYDFwuj1oAJ1puyIAiirCKmho9kcBppqiqWjvG5FgSe5y4v+K15avYLOGgpolav64ZWKQuCBJ3dgauamzvGDwQYgvtKqgplni+mhS8vqN/2nbalixW5VpOBtiKISl0jHXFbQPINg4IhKJiDJAsVIGATpb1p6k0YFGiViiTVhBLiJcXUlOHIZaKZ7B086+BBgjjFqoACgIA5fEfBFrTrYhmqWi5XBEGWdd3dFYDII9PkLwMJqtWqAAbKfKmUj+fDq5RX67fqoB2qDOSSrBj1EYEMDYnnYbUMCBkIiAGOzSYSaS/1qdltKGXYq1KpIhIcKnBLll2ioQKlWReFilCplCs8DiEdTV9+ojZtuymVWI7j+aqIe6LpwxkQgpETfCUZusCDV1RbYkFANM1uUpt9uyZwHEcCxD3RTM2d/bAt+JAk+BVFwXUK7jFBJh2NRrlN6lOrLWMifFmoIoGm1xHvEpAwEEvKNVriQC7HFUFANFHcpLyGBZwY4YjAIP21mxgkt6qwvSyAWZYtslwxn45Ho/Gsl1qtWJw7A0KgaQZmeBMBIYDhSJJQQeMIZ5giyyQS8Wg8HVml3sXbbAk1AAEwEALVjQ/xCmwOzF6URNgdUM8Wi0WmcMnk04l4JJI9ek9NH3SRAIoQKLqhK8P8YQtcOJRIzr8hPp+HFQB8OL//lnrh60OESFHBRqprwR0gpod7AwSSNBJwCXhoH41GQsGib5Ka3+7LPMsNCcCDro1WSMa+Ai6uwFehC4cETD6byybiiUg4FAyyOzMU7ZVqZYYdzlFUNLM2tEAmj1WGqw9g4acE+rNQQBAOhoKBqHeZ8rw+sLhCkeXdFBXFJANQZDK5SgX3nkPrMDoQUID+2exFIhEOAH7vDVxUX+52hTxT5Hg4F2FeogG54TkF08OzDqqEeFIlMEAqnQ4FgsHc7iwQLHurUj5fZIceqjrkVkUFonvd4V0BDGFgoHv6Ip2Kh4PBcCT6cRk/mab3rXz2ki2VQa8gIgcQDB3AfrhoBqvAM9mLVAJHCATBLFyU8ZNpfqtVTGeLHEqAyKsijpOcAFW0D1NjCEMhl+MLICBxFj+FEYRCua0F99P5zUEtnS2ABB41SEiAaNw9UJ/L5Ri3f44pF0A+7MBJOByOpPfeDT+d5zckyAYlwCgqeM3AzYH2JYwdCApMoYACimUml0mlzmIn4WMg2FgY3aFM+5VEOstyuJAVkSdWKrh4uLeFi1wBC4iKPHORSZ2dxU7Dx6G0b+rmDsWzFi0m0gyeqTBNHvNE9YiHxplM5iJ3AU85oMulzs9iQBAMH66N3WS9/CykE2ACGQQeNo6ox/YF1JzKZFLn50nIIpc8hwKCUPTv2ZubLGCY8onxdJ6c7qUKrh1LBkfw52fnKex7nmMLySTBnwTiX17Td+5Ul/b5KMySRSzLuHNz8WAZ6vQ0dpZhM6R/LBaM+le+utVd/LDPJtL5LGBLLFNAMNGfRMekYudJggcBx5G9tcW7d6qe5fm1g2IUZpG/LHJFmFoOw0tmkklXQQyQGVfAaRDwC99+X5j/sM9F4wlcKTaXSiEWDJOHYWXOCMFxxL+2sPwtgWdxxZeLhyOJLMNexOC9t0hSyWQMxJyfBEO+lbFvb+NfeehX24HIUTCaZVIxwpAcQd1XEMNJ4Phw+9X41667X7om1/2hQCAahW0FBoKChzM3u5OTWPA47F9/fgcCt3njtfDu834YLjYn4ZPT2NlIPcZ4eh4OHIf2t5cW4Obcc4ug5sb/zXno2Q/b+0GQcRwGxUMXsHnh45NwcH/nA6zf3Bw1hvmm5uZml7Z8ByHgOAoEj7ECAXgROvRtLc1+B/BV/fD06dNf7z378/OXvYMjuGhgBY8O9r58/vPZ81/hP3/4N/D9hxNPfvnPsH7/46+/t3d2d3e2//7rj99HR395MvHwwT+S/Hjv/oOfnv388NGjRxMTjx8/uanHjycm4ODDn5/99OD+vR/HMf8FeglGKt2anncAAAAASUVORK5CYII=",
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
            actualHp: 50,
            actualAp: 5,
            actualDps: 0.99,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
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
      stageName: "今日だけは愛想よく",
      baseHp: 30000,
      width: 4500,
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
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "25000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 4000,
            actualAp: 250,
            actualDps: 49.67,
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
            actualHp: 4000,
            actualAp: 250,
            actualDps: 49.67,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
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
            actualHp: 4000,
            actualAp: 250,
            actualDps: 49.67,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-11.7s",
            delayFrames: "300-350f",
            baseHpRatio: "99%",
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
          enemyId: "577",
          enemyName: "大玉（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEDAQICAgIEBAQFBQUHBAMJBgYPCwoQCgoRCwoRCwsRCwsTCwoUCwoaCQkVDAwWCwwWCwsYDA0aDg4dDg4lCwkfDw4kEBAlEBE5CgoyDg4+DAwyFRZLCwlVCgg7GBlsCglFHR5UFhpKGx6CCQaQCAVVISWbBwSvBAG7BAGaFBXFAwJwKy/JCA+0FRXQCiGDLzbOERHWDCzWFBjcDTPfDiTdDjfaFCviEiTgEzXdGh3UHSviFzacOkLjGi3hHybeIDfmHjCvOkPkJCvoJDTnJyzjKjbpKjLoLDS9QUroMDfsLjfsMDjpMjruMjvrNDzvNT3sOEHxN0DyOULbQ0/vPEbzOkPzO0X8OkDIUFz0P0nzQUzzRE/fTVz+Qkv0SFX6R1L2TFr+Slb2UF7hW2n+T1v4U2H/UV75VmP/U2P4WWz9WGf8XW38YXL6ZHn+Y3T8Z3//Z3j+aX3+bIL+bYb/cIn/cYoSERuIAAAAgHRSTlMAKlVvgbfH0vPhEf2jkwDrRjclU2BreP8XAIQFjwDvpsG1/97nxPj/z//Z9+L//+z///////f//////////////////////////////////////////////////////////////////////////////////////////////////5lGXx0AAAjbSURBVFiFhZeJX9roFoaZ6bROb5dRXAZEL3Wmtra10jqUK6KVcQVkiwmEkBjTBsraCJQdov/6fc8XVNramUN+iJD3+d6zfCHYFm8L56LTPj3nXn7pQbxcds9N2/HWrafablO7puZX3h1+/NzpDU1zOOh9/nj4bmV+ynUb4zuAc9Ext+L/2OmZQzzMi4uLS/y9HHQ++lfmHN8jvgM45j3HneEQagTk+Gua5GPQa5945h3/AnDNrJ4MLi8vWJiDoXlBHPNiAMBgYA4+rs66/glgf3LYZvJLPJs4LsweEXr9Trc/6Pdh4/CJ/ceAGc+nHlv7ko5hbwgQFsfLfr/b7nY7/X5/+Nkz+wOAc8HfMi3zF5esAswLPJioYx8mEHDR9y+4bgO43IeDMblpyemgZpoDZNAfIY7dru8BLvfx4IK1zTSvVreeUQe8ZAArk37/ZMn1LQD67qjtw+HAWn04SggJWGqKdqvd7o4RrgALh80+sw29eXkxrsfLQc9aHnKKdrt/vPA1YMbfaPZh4JL0lupGz/o4Wr7JotXu+mfHAXZPtdHF2JiXvbFCWvNksvQ7rIStVrNex1FvtlqeqRuAc+kUBpC72ekML8zRqlfziA62uxgkEEhfPz/H0ex+euK8BiCBWq3Z7vc6HeqESaqhVVJikXGqfrfdqter5XL5vFyut7qHsyOA07FardVqjeag3e4MML1D2sID07SaetFp1avnEHTb7Sb0xWKumFdz9VZ91eG0HMwfwwAIVN++ycag1xlSScjOoF2HqApCi5bP67qczUpZvd48nmcOYIDpjeo5StM1KX+z10E6w15v2Bt0WucAwPN5s1nO5VWo0zzHZ/IVwwMLcDB7CEClUik30J9We9DHtu20vrS+dDptJNX5Ui0W88Vqq5wvq9kMQuSSiTjHyxWqAhwsl41apVQo1+rUYUS3h1Wr5fqXL+fAsAzIQjWbzWbSkixLIp+Mx7m0WlyBA+fUuwbpC0ajQRYIMux9Qa65HGTV83PUnBGqaoZPZ+SzM0WWkkSQDf+U07Y4fwJA4UPlvMEI9NSHHrkqOkNUUbpiPqfnsjyXkhTtjBAAJMTCyTxSQAZG4UMJBtBJgjTq7Wpez4oiSq3n8+VimQCqmslyvCgpZxSKFI/GOaW84rQ5kAEBatBTUEPqxZyaSaVSkqqqyCRfzudUNc0jA1G2ACBwSeHMeGe3TaIHJWRAg2DpDaynZ9MClxLFTFZVceTVTCbN8+mUZAEUBQQhqVb807bZk4ZR0AslCwC5UUMB1ayQTCaFVCqTzqB1aZJTBeVrwJksCmrhZM62cArAB71yZcAwjAoMZLhkPJnk+FSKZ8FBzmVVC6CgFdqZLGuFU7dtqVhFBlqhZjAHBoWuqimUmRFGelo8o2kK0zMAuqHp+WXbStUofTiT9UrJgImRAUyccAVIU/KSQlJdswoIgAaAImvFFdtLo1LQ8Q7KUDFYBqUcFpJFyAFIZySETHpF0XTlBnB2JopK6aVttVYrnGkyPsyXKhUAKqUcO10SBRig0bXUiiyrqjYCEEgWOKnkIUBOJje6noOHEYDOQp84Do3H8MMDPSvaKAeZkHIymiqt2laMmpKVyZSeoyyMQm5kVBI4jpdw8gggS6pVBLyBhyzEo0L+pQ2TjI+ps2QBWWDqrVpLV9WT2fiAoGk6658kYs6lZDQkoAvuT0Y6ncX5qIuey5fyel6zUpBFjrMACnUNqWhwgBdSKiWkcFEI7fGnS7b50xrPS6yrRMjhkqVbacpSOiUSgPwQAIVW8UkmhdwQodCedrpgmzluJBIZaotGBJyja4pVJykjZq42zwiA8pAxXA6QwN5e6XjWNuVvpBMiO4UxlKxKDmQqM5sAYrNGEgAYdJemlPQhwz9pc63W9ESKjRYrsazktFGnZKo100vEQjZ5FQXkSE76rUTN47Atuk8rCV65BmQzo0sGGx0LgKqnsLclGZcZTAfTh/a2ttRPS06bc+awxseZUwaQslltHEBOJOgZQRVF4cbAnnE4i2uiw1PLRmHvGiCrVg5sdmSaIaYnhMoJ2ObROBnY3OQbHjt9L7hPcyFutD8AyJAD5QoA97KUEhDYWnyWS0BPCWxt+nzqqZt9L0z6jSgHqxorg5SWVHbJsgCYuWScbcxkMpbMJOKxeAjLBzd93s2Kf9L6cl3+xEfh1BomOCDn2Iwi+Yc8GonFSB+PJfgYrR462tva8Hm57PLo633aXwjhdDYvSlZMiylBVGgzo2XJWDQSiRIghkgcRWLho6O9YGDTu5l6PX11f7B0GkvSjmIO0lwiluAkIRaLxDioKWIkh5FwLBI5OgoGtwIbvvj+0vUNht2jhYSM9Z0h8Qk6lQQUR5FI6Ch09TIWjhwcBLe3od9Pvpq6uUeaOxS4DM29ooh8NIKF2FI3Qf/sHoTD4YOD3W0CbCX/mh+7yXI9ScRTbOthqyRQpUj4Wv/3dYAA/Q70Ad/m/564xm/z7KuJpEAA1I3KxOIAj10mff/3e8RuGPKdHdJ715/av77RnHyVEECQCLA/0iOgf38du2HoKYGAd/3Z5Lf3ytOv4gKHZopcNHwUPAge7O7igOFr/TYA21f6me9utkFICHExJeJKsR8MQkp22Yrv8UDs7IYp/23fuH7898Lkq/1oVJCSYehx+nVsj2I3HKT1fd63z6YXbwMsTv3519ZWlDsKhoOBccIIAsDO9sa6982fU4u3AxYd7hfrPmzU/WAgsP2NfmcnuL8R8HrXX7i/+uX2za+2madrvi2fjywExvSUezC84fV6157O0O/am7CNvXY+djodC8/eeL2+xIYPHgIwgqIHAuj9RjDo9b55tuDAaY9tNw/E4/HD+di+8PT1263N9XWvz7dB6g2fD0t7N9dfP12w4wTbv8bUo9+er71d947F+tu15/99OPkfxD9K79yduP/rgwc4Hvz+x/MXr9feINZev3j+x+8PrLcf/Hp/4u6dHwJ++vnOL48e3r13b2LiPuK368A/ExMT9+7dffjolzs//zQm+T+f1Ma2ayNQNQAAAABJRU5ErkJggg==",
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
            actualHp: 40,
            actualAp: 2,
            actualDps: 0.5,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
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
    },
    {
      stageId: 2,
      stageName: "親に預けて消えたお金",
      baseHp: 60000,
      width: 3200,
      enemyLimit: 20,
      requiredCost: 120,
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
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "50000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 20,
            actualAp: 2500,
            actualDps: 496.69,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
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
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
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
            actualHp: 20,
            actualAp: 2500,
            actualDps: 496.69,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
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
            actualHp: 20,
            actualAp: 2500,
            actualDps: 496.69,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
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
            actualHp: 2,
            actualAp: 250,
            actualDps: 49.67,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
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
        }]
    },
    {
      stageId: 3,
      stageName: "金額の差で兄弟喧嘩",
      baseHp: 90000,
      width: 5000,
      enemyLimit: 10,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "200000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "100000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 397.2,
            magnification: "4000%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
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
          enemyId: "577",
          enemyName: "大玉（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEDAQICAgIEBAQFBQUHBAMJBgYPCwoQCgoRCwoRCwsRCwsTCwoUCwoaCQkVDAwWCwwWCwsYDA0aDg4dDg4lCwkfDw4kEBAlEBE5CgoyDg4+DAwyFRZLCwlVCgg7GBlsCglFHR5UFhpKGx6CCQaQCAVVISWbBwSvBAG7BAGaFBXFAwJwKy/JCA+0FRXQCiGDLzbOERHWDCzWFBjcDTPfDiTdDjfaFCviEiTgEzXdGh3UHSviFzacOkLjGi3hHybeIDfmHjCvOkPkJCvoJDTnJyzjKjbpKjLoLDS9QUroMDfsLjfsMDjpMjruMjvrNDzvNT3sOEHxN0DyOULbQ0/vPEbzOkPzO0X8OkDIUFz0P0nzQUzzRE/fTVz+Qkv0SFX6R1L2TFr+Slb2UF7hW2n+T1v4U2H/UV75VmP/U2P4WWz9WGf8XW38YXL6ZHn+Y3T8Z3//Z3j+aX3+bIL+bYb/cIn/cYoSERuIAAAAgHRSTlMAKlVvgbfH0vPhEf2jkwDrRjclU2BreP8XAIQFjwDvpsG1/97nxPj/z//Z9+L//+z///////f//////////////////////////////////////////////////////////////////////////////////////////////////5lGXx0AAAjbSURBVFiFhZeJX9roFoaZ6bROb5dRXAZEL3Wmtra10jqUK6KVcQVkiwmEkBjTBsraCJQdov/6fc8XVNramUN+iJD3+d6zfCHYFm8L56LTPj3nXn7pQbxcds9N2/HWrafablO7puZX3h1+/NzpDU1zOOh9/nj4bmV+ynUb4zuAc9Ext+L/2OmZQzzMi4uLS/y9HHQ++lfmHN8jvgM45j3HneEQagTk+Gua5GPQa5945h3/AnDNrJ4MLi8vWJiDoXlBHPNiAMBgYA4+rs66/glgf3LYZvJLPJs4LsweEXr9Trc/6Pdh4/CJ/ceAGc+nHlv7ko5hbwgQFsfLfr/b7nY7/X5/+Nkz+wOAc8HfMi3zF5esAswLPJioYx8mEHDR9y+4bgO43IeDMblpyemgZpoDZNAfIY7dru8BLvfx4IK1zTSvVreeUQe8ZAArk37/ZMn1LQD67qjtw+HAWn04SggJWGqKdqvd7o4RrgALh80+sw29eXkxrsfLQc9aHnKKdrt/vPA1YMbfaPZh4JL0lupGz/o4Wr7JotXu+mfHAXZPtdHF2JiXvbFCWvNksvQ7rIStVrNex1FvtlqeqRuAc+kUBpC72ekML8zRqlfziA62uxgkEEhfPz/H0ex+euK8BiCBWq3Z7vc6HeqESaqhVVJikXGqfrfdqter5XL5vFyut7qHsyOA07FardVqjeag3e4MML1D2sID07SaetFp1avnEHTb7Sb0xWKumFdz9VZ91eG0HMwfwwAIVN++ycag1xlSScjOoF2HqApCi5bP67qczUpZvd48nmcOYIDpjeo5StM1KX+z10E6w15v2Bt0WucAwPN5s1nO5VWo0zzHZ/IVwwMLcDB7CEClUik30J9We9DHtu20vrS+dDptJNX5Ui0W88Vqq5wvq9kMQuSSiTjHyxWqAhwsl41apVQo1+rUYUS3h1Wr5fqXL+fAsAzIQjWbzWbSkixLIp+Mx7m0WlyBA+fUuwbpC0ajQRYIMux9Qa65HGTV83PUnBGqaoZPZ+SzM0WWkkSQDf+U07Y4fwJA4UPlvMEI9NSHHrkqOkNUUbpiPqfnsjyXkhTtjBAAJMTCyTxSQAZG4UMJBtBJgjTq7Wpez4oiSq3n8+VimQCqmslyvCgpZxSKFI/GOaW84rQ5kAEBatBTUEPqxZyaSaVSkqqqyCRfzudUNc0jA1G2ACBwSeHMeGe3TaIHJWRAg2DpDaynZ9MClxLFTFZVceTVTCbN8+mUZAEUBQQhqVb807bZk4ZR0AslCwC5UUMB1ayQTCaFVCqTzqB1aZJTBeVrwJksCmrhZM62cArAB71yZcAwjAoMZLhkPJnk+FSKZ8FBzmVVC6CgFdqZLGuFU7dtqVhFBlqhZjAHBoWuqimUmRFGelo8o2kK0zMAuqHp+WXbStUofTiT9UrJgImRAUyccAVIU/KSQlJdswoIgAaAImvFFdtLo1LQ8Q7KUDFYBqUcFpJFyAFIZySETHpF0XTlBnB2JopK6aVttVYrnGkyPsyXKhUAKqUcO10SBRig0bXUiiyrqjYCEEgWOKnkIUBOJje6noOHEYDOQp84Do3H8MMDPSvaKAeZkHIymiqt2laMmpKVyZSeoyyMQm5kVBI4jpdw8gggS6pVBLyBhyzEo0L+pQ2TjI+ps2QBWWDqrVpLV9WT2fiAoGk6658kYs6lZDQkoAvuT0Y6ncX5qIuey5fyel6zUpBFjrMACnUNqWhwgBdSKiWkcFEI7fGnS7b50xrPS6yrRMjhkqVbacpSOiUSgPwQAIVW8UkmhdwQodCedrpgmzluJBIZaotGBJyja4pVJykjZq42zwiA8pAxXA6QwN5e6XjWNuVvpBMiO4UxlKxKDmQqM5sAYrNGEgAYdJemlPQhwz9pc63W9ESKjRYrsazktFGnZKo100vEQjZ5FQXkSE76rUTN47Atuk8rCV65BmQzo0sGGx0LgKqnsLclGZcZTAfTh/a2ttRPS06bc+awxseZUwaQslltHEBOJOgZQRVF4cbAnnE4i2uiw1PLRmHvGiCrVg5sdmSaIaYnhMoJ2ObROBnY3OQbHjt9L7hPcyFutD8AyJAD5QoA97KUEhDYWnyWS0BPCWxt+nzqqZt9L0z6jSgHqxorg5SWVHbJsgCYuWScbcxkMpbMJOKxeAjLBzd93s2Kf9L6cl3+xEfh1BomOCDn2Iwi+Yc8GonFSB+PJfgYrR462tva8Hm57PLo633aXwjhdDYvSlZMiylBVGgzo2XJWDQSiRIghkgcRWLho6O9YGDTu5l6PX11f7B0GkvSjmIO0lwiluAkIRaLxDioKWIkh5FwLBI5OgoGtwIbvvj+0vUNht2jhYSM9Z0h8Qk6lQQUR5FI6Ch09TIWjhwcBLe3od9Pvpq6uUeaOxS4DM29ooh8NIKF2FI3Qf/sHoTD4YOD3W0CbCX/mh+7yXI9ScRTbOthqyRQpUj4Wv/3dYAA/Q70Ad/m/564xm/z7KuJpEAA1I3KxOIAj10mff/3e8RuGPKdHdJ715/av77RnHyVEECQCLA/0iOgf38du2HoKYGAd/3Z5Lf3ytOv4gKHZopcNHwUPAge7O7igOFr/TYA21f6me9utkFICHExJeJKsR8MQkp22Yrv8UDs7IYp/23fuH7898Lkq/1oVJCSYehx+nVsj2I3HKT1fd63z6YXbwMsTv3519ZWlDsKhoOBccIIAsDO9sa6982fU4u3AxYd7hfrPmzU/WAgsP2NfmcnuL8R8HrXX7i/+uX2za+2madrvi2fjywExvSUezC84fV6157O0O/am7CNvXY+djodC8/eeL2+xIYPHgIwgqIHAuj9RjDo9b55tuDAaY9tNw/E4/HD+di+8PT1263N9XWvz7dB6g2fD0t7N9dfP12w4wTbv8bUo9+er71d947F+tu15/99OPkfxD9K79yduP/rgwc4Hvz+x/MXr9feINZev3j+x+8PrLcf/Hp/4u6dHwJ++vnOL48e3r13b2LiPuK368A/ExMT9+7dffjolzs//zQm+T+f1Ma2ayNQNQAAAABJRU5ErkJggg==",
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
            actualHp: 16000,
            actualAp: 1000,
            actualDps: 198.68,
            magnification: "400%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 397.2,
            magnification: "4000%",
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
            actualHp: 16000,
            actualAp: 1000,
            actualDps: 198.68,
            magnification: "400%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
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
            "knockback": {
                chance: 100
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
            actualHp: 16000,
            actualAp: 1000,
            actualDps: 198.68,
            magnification: "400%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 397.2,
            magnification: "4000%",
            count: "9",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
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
            actualHp: 40,
            actualAp: 2,
            actualDps: 0.5,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
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
    },
    {
      stageId: 4,
      stageName: "年々上がる金額",
      baseHp: 120000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "275000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "137500",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 30,
            actualAp: 3750,
            actualDps: 745.03,
            magnification: "150%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
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
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
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
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 595.8,
            magnification: "6000%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
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
            actualHp: 24000,
            actualAp: 1500,
            actualDps: 298.02,
            magnification: "600%",
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
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 595.8,
            magnification: "6000%",
            count: "7",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
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
            actualHp: 24000,
            actualAp: 1500,
            actualDps: 298.02,
            magnification: "600%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
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
            actualHp: 30,
            actualAp: 3750,
            actualDps: 745.03,
            magnification: "150%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
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
            actualHp: 40,
            actualAp: 2,
            actualDps: 0.5,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
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
    },
    {
      stageId: 5,
      stageName: "あげる負担、子知らず",
      baseHp: 180000,
      width: 6000,
      enemyLimit: 12,
      requiredCost: 210,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "350000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "175000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 40,
            actualAp: 5000,
            actualDps: 993.38,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
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
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAADAQIOBwgXCwwaDQwdDg4dDg4dDg4dDg4dDg4dDg4fEREvIyQ2Mzc8OkBAP0dHRk1MS1JQT1dVVFxbWV9cWV1hXmNjYmlsZGRlZm9uZmdqbHV0a2twcXp6cnB1dHWBcm53d36Fd3V9fH58fIOFenh/f4aEhIiNgoCLhIaIiI2Sh4aLi5CNjZKQkJWTk5iXl5ydnaCioqWnp6qsrK+ztLa8vL7ExMbLy8zS0tPZ2drf39/m5ufv7/APT0CGAAAAQHRSTlN3ncTi9UYkAGZ+lLfi/////////////wD//wD///////8AAP8AAP//////AP//////////////////////////g6wJ+QAAB4xJREFUWIWFmIlC4swShZk7wyrZFxNDCBohCYQAYVXUef+3+s+pDsJ4ZykGB5D6+tTSlY6t7u+t0+4P7obK7ga9zh++1u22Hi/2cP/w+Dh9nE6nj53enaYbluN6nheOAs82dG3Q7t7DHv4KUIT2QDOcIIriOEn5TNMkGUe2rvU7/wLAf9q+092EXrO8KPJ8Nksbi30TiH8BOgPdT1O4rtbr1WpVFYAUDSgZBUD8HdDX3DTPy3Vdr+ttvSakqkoaILNkHPrGXfvPgM7AiPOyWm9hO1i9WYsQagEiT5M4CrwvIm4Abc1K8mqz3W33h+PxuN/vtnW9gSklZTEjIQr0we8BPc2d5Pm63u0Ox5fXl9PxsANB3CUflDBJ4lEUGlrnN4Ce5qVFUcH/eHo9n88vFLETwEqsKnNIGMdx5BuDzv8BelowycvNbrvD8m/v72/n08vpsNtuN42/ioGEKA7MaxStqVhHC9IZ1kfwp/MbAW8SxR4EOvOBGNgUcRj40PAJWMCmXc3NWXzIf3k5v79/gPD6AgIzCQ1VVbGeqh1Cz3NdvX8LWAxMuJfV9sD1P2Dvb6KBadiymqVqhjzPocD3HMfR2hfAdLFo63lZVmW9Px5fz+8fPyng4+PtLKXYgsA2KKSbAAh813FsU7vmoKsFBTRudvvD6fXt4+fPd5Fwfn09HVUzrIVAy2cRFdiO07QDq9A3imq1RgcdTpIAMD6QxzNCYBZZSqbwQggIsB1XdQMA3WFaoV9rNCAATME7nxRwUOuvVRLEv8gZgw1TlQCgb0I//CUChED/n+9nEbCr100TNDsKlZQsAuCIhBYygAZYbbCB9sfTiUlkGd/ofzxgS4pvVV73ZIwsUIIjElrTtlEVFTYwUoAuQgxn9uHr+cRe3taMvvxkEBCFaCXHtmxbE8DAKwlgBAf0AfYRNsIr+vCgOvmSvpKkIqd/CAkWY2gzB8MUM6Cu693hAMSRKtCDJ/FnAT8rKP+nsQBCARh3AHR0jiCkYL8/7Pk8COWALqb/uskg81eUKgMCYB3YTK2Bi+m5qmUEwbYo/I4cDoO6boZBJW2ML8pIkRDQS7aBGFrDGNuwXKshhlJwCNWcafSXcSIymD4Y5jwAgepm2zJ63ZaWJumspIIt214WFYRMs81lpFWFbGYlIAg87CfLstDOLT3BtaOJgQBpnPVl8SuAezmVFGJ9n61kmaZ+120ZSRTJLBWrVdawMxRoozqZCghIkqjx91woMI0hAHEYxml5AdCxkublECFAErlS4yhJYgXwAbBB0LotMwqCCDHgq5e0K/8SBAGozSTjjDlAG3p4qCwSAGCIGPDdTb35nOLVRUEjqlD+CWugImAdBeC5XhAX5Uq5StUkafQXAPOqBOBaHXMr0Z+7ycFuaBmO7foxeqksZXZeCl9JDlUIK7kq0RkX/QZgwd91CMArL0Ir5JzL2HSrlSio5MVGylBJD8eqCUOVQc4kAegmCGEyo8YZtgU3biXtXzUi4M+rIpdXRcS5RWaa61lDAkzLcqM45aFCThXUIXJwpSurDXtI6Q/DJoEUwAOQa6KRNMMwTduPkJ8EJ5MZVOS59L1YsVrlTF4SsQMQvuuKPxIAw0xqDU2a5fohDkU8ETX1EsM7qInxK6j3sQVcKb/SDyncTAMIMA0mwpVzlRgDjgWY5HmCtPFy5qnqi9EfwejYzh0Nu4JhWLbHNKlsM16+IzBSvnCGoX9hKBwAOK1goNwP2dMCcDxEGUNwFPiBH/ohznohR7DErda2FAAf+EFoc6TdDwzuTMNkXC6wUAsXz0W+2POiGymzOYa5hWEMARkZ6Ryq923dU7/lOhR2yZMA+SFeQyT+mQyWReNKYTAacqw/dLUmPlGKZWWbWRYvoPyUziYdG2PbeG4QhmOjL4CHvhGo8no3kZrMlK1yJrKVt27wCE3549FYXdoeHh6GHvrLv4yJa66ajBFhfWqAfvEfTxw5pBDQ0318RvskiL8tP5hipYPuBloO7pNJljWXdwC6mg0mTBEc+7o0SuPciEKuXX8E/yybm+qURADOqCOKIoJhuAphyvqqDMSwUJ4sn2XZcqTdHLKmA2MyGdPUfmsQ0t+ezGB0hkzCIKT/PFsu9fYNYIFjXpFNxnhAhbpugGFaDl3Y1CNOklE4UtHP1/X1mPc8fV48Lzp3o7LI0kk6mTAWCoFqrB6O4nHM6MYSI5bPy+V6dXPQfFbW1gJEls2y2SRNx+NYGNga0Yj+k4TyuHq5LJfLpX1z1H3+JPgT8jPOExyJWRWopheQcJ2lRbmsVnPYjf8VAIKL72ZkyHkCwwQTBTMqy1OZbwUWp/v8csb8Anhqa6YiZFkxx4linucURNd5iUdj2ZcbjivgqTvQR9nF5lku4cwLPhC3rL5cBvqXW54bwNNTT7PFGesoCpznF2faxBh8vel6/oWA2z6P/ssG0fg1gImt9brdPwHo//T8DISbLW9XFT34MbZww7b4J2Cx6PQ1IxAG3JZNSkaO/qPXZdP+DdBuffv2P9j37z803fJGmQQy4s33jx/fv/NX3761fk1C6/ZNp926ImiaGF99urfav/4p4D9cNuJx3ahWdgAAAABJRU5ErkJggg==",
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
            actualHp: 40,
            actualAp: 5000,
            actualDps: 993.38,
            magnification: "200%",
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
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
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
            actualHp: 40,
            actualAp: 5000,
            actualDps: 993.38,
            magnification: "200%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
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
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
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
            actualHp: 40,
            actualAp: 5000,
            actualDps: 993.38,
            magnification: "200%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
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
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
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
            actualHp: 32000,
            actualAp: 2000,
            actualDps: 397.36,
            magnification: "800%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "21.7-23.3s",
            delayFrames: "650-700f",
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
            actualHp: 32000,
            actualAp: 2000,
            actualDps: 397.36,
            magnification: "800%",
            count: "3",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "21.7-23.3s",
            delayFrames: "650-700f",
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
            actualHp: 32000,
            actualAp: 2000,
            actualDps: 397.36,
            magnification: "800%",
            count: "2",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "21.7-23.3s",
            delayFrames: "650-700f",
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
            actualHp: 32000,
            actualAp: 2000,
            actualDps: 397.36,
            magnification: "800%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "21.7-23.3s",
            delayFrames: "650-700f",
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
            actualHp: 32000,
            actualAp: 2000,
            actualDps: 397.36,
            magnification: "800%",
            count: "0",
            spawnTime: "103.3s",
            spawnTimeFrames: "3,100f",
            delay: "21.7-23.3s",
            delayFrames: "650-700f",
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
    },
    {
      stageId: 6,
      stageName: "やたらと達筆な祖父母",
      baseHp: 240000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 250,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "425000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "212500",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA06982B4cY/dWb+AgAXHQJd3b7TY+Wx3H9+qWgbrF+50uwu3u4KpFQhiQBOxuCxhIiu221bI6VqvvX7phuFEAePTYs8HyFenuXF27i2C34KDLYLVMKL3vf/UVwfKUj+AHA7tlDofQu7q2h9XuuQTQvWnWG4bZ900t3yF4sYP6cX6WCaJ7173rQXsER2Yiod2xmqbZqNcNo78zOUZAz69rfdKh22y5fu1+jwQyLOvKJg6shmEAXK+pwsYCPSKg6aUjx5VoNtowcIx7YI9Xp2ljhG1T1zVdrxuqah6ukCCJghe7IzxUowVv7fR6Y/pROzwAXtNURdE0XVXU5u7kUAG9+FHsI6hZR7zZhIF3Bl1yBmBfiM6C8UF8DR0IAKtpmqyo+Y+LtKtg2u/glrRMA/FmA0Zt97EzHARsEwoOW3VwTgoZFEUxfNOugsX1Rh+7NBv4PrNutqxmDxnbBNyAg4ZRq5n1GqBUVVNkGUhktcyugwTKQ0/6HBxwq9HAN8Pb5Jo57Ax/GwRdU2q1hkoIACsriiiIJcH3HBTQ9CrbR7zpNqvXJLF225mgoSS51tChLTAowCAKpRKXD63SNOWZ2XZwReumK8BQJUkBvfVbsFpTZUlSDUOG3iphkColrpTnt2dAwfSeAwGA9UbDdSBKikqABmIhcU3VZFFUjaaM7gmDWOE5Ls/7p4Bgleu3W80aEjRNwEhIoCGBVsMnJAAFQGAprgJIQRR4sJCPrNHU4pYDFwuj1oAJ1puyIAiirCKmho9kcBppqiqWjvG5FgSe5y4v+K15avYLOGgpolav64ZWKQuCBJ3dgauamzvGDwQYgvtKqgplni+mhS8vqN/2nbalixW5VpOBtiKISl0jHXFbQPINg4IhKJiDJAsVIGATpb1p6k0YFGiViiTVhBLiJcXUlOHIZaKZ7B086+BBgjjFqoACgIA5fEfBFrTrYhmqWi5XBEGWdd3dFYDII9PkLwMJqtWqAAbKfKmUj+fDq5RX67fqoB2qDOSSrBj1EYEMDYnnYbUMCBkIiAGOzSYSaS/1qdltKGXYq1KpIhIcKnBLll2ioQKlWReFilCplCs8DiEdTV9+ojZtuymVWI7j+aqIe6LpwxkQgpETfCUZusCDV1RbYkFANM1uUpt9uyZwHEcCxD3RTM2d/bAt+JAk+BVFwXUK7jFBJh2NRrlN6lOrLWMifFmoIoGm1xHvEpAwEEvKNVriQC7HFUFANFHcpLyGBZwY4YjAIP21mxgkt6qwvSyAWZYtslwxn45Ho/Gsl1qtWJw7A0KgaQZmeBMBIYDhSJJQQeMIZ5giyyQS8Wg8HVml3sXbbAk1AAEwEALVjQ/xCmwOzF6URNgdUM8Wi0WmcMnk04l4JJI9ek9NH3SRAIoQKLqhK8P8YQtcOJRIzr8hPp+HFQB8OL//lnrh60OESFHBRqprwR0gpod7AwSSNBJwCXhoH41GQsGib5Ka3+7LPMsNCcCDro1WSMa+Ai6uwFehC4cETD6byybiiUg4FAyyOzMU7ZVqZYYdzlFUNLM2tEAmj1WGqw9g4acE+rNQQBAOhoKBqHeZ8rw+sLhCkeXdFBXFJANQZDK5SgX3nkPrMDoQUID+2exFIhEOAH7vDVxUX+52hTxT5Hg4F2FeogG54TkF08OzDqqEeFIlMEAqnQ4FgsHc7iwQLHurUj5fZIceqjrkVkUFonvd4V0BDGFgoHv6Ip2Kh4PBcCT6cRk/mab3rXz2ki2VQa8gIgcQDB3AfrhoBqvAM9mLVAJHCATBLFyU8ZNpfqtVTGeLHEqAyKsijpOcAFW0D1NjCEMhl+MLICBxFj+FEYRCua0F99P5zUEtnS2ABB41SEiAaNw9UJ/L5Ri3f44pF0A+7MBJOByOpPfeDT+d5zckyAYlwCgqeM3AzYH2JYwdCApMoYACimUml0mlzmIn4WMg2FgY3aFM+5VEOstyuJAVkSdWKrh4uLeFi1wBC4iKPHORSZ2dxU7Dx6G0b+rmDsWzFi0m0gyeqTBNHvNE9YiHxplM5iJ3AU85oMulzs9iQBAMH66N3WS9/CykE2ACGQQeNo6ox/YF1JzKZFLn50nIIpc8hwKCUPTv2ZubLGCY8onxdJ6c7qUKrh1LBkfw52fnKex7nmMLySTBnwTiX17Td+5Ul/b5KMySRSzLuHNz8WAZ6vQ0dpZhM6R/LBaM+le+utVd/LDPJtL5LGBLLFNAMNGfRMekYudJggcBx5G9tcW7d6qe5fm1g2IUZpG/LHJFmFoOw0tmkklXQQyQGVfAaRDwC99+X5j/sM9F4wlcKTaXSiEWDJOHYWXOCMFxxL+2sPwtgWdxxZeLhyOJLMNexOC9t0hSyWQMxJyfBEO+lbFvb+NfeehX24HIUTCaZVIxwpAcQd1XEMNJ4Phw+9X41667X7om1/2hQCAahW0FBoKChzM3u5OTWPA47F9/fgcCt3njtfDu834YLjYn4ZPT2NlIPcZ4eh4OHIf2t5cW4Obcc4ug5sb/zXno2Q/b+0GQcRwGxUMXsHnh45NwcH/nA6zf3Bw1hvmm5uZml7Z8ByHgOAoEj7ECAXgROvRtLc1+B/BV/fD06dNf7z378/OXvYMjuGhgBY8O9r58/vPZ81/hP3/4N/D9hxNPfvnPsH7/46+/t3d2d3e2//7rj99HR395MvHwwT+S/Hjv/oOfnv388NGjRxMTjx8/uanHjycm4ODDn5/99OD+vR/HMf8FeglGKt2anncAAAAASUVORK5CYII=",
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
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
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
            spawnTime: "12.0s",
            spawnTimeFrames: "360f",
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
            actualHp: 40000,
            actualAp: 2500,
            actualDps: 496.7,
            magnification: "1000%",
            count: "1",
            spawnTime: "45.3s",
            spawnTimeFrames: "1,360f",
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
            "knockback": {
                chance: 100
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
            actualHp: 40000,
            actualAp: 2500,
            actualDps: 496.7,
            magnification: "1000%",
            count: "1",
            spawnTime: "46.3s",
            spawnTimeFrames: "1,390f",
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
            "knockback": {
                chance: 100
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
            actualHp: 40000,
            actualAp: 2500,
            actualDps: 496.7,
            magnification: "1000%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "50%",
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
            actualHp: 50000,
            actualAp: 5000,
            actualDps: 993.0,
            magnification: "10000%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "50%",
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
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEDAQICAgIEBAQFBQUHBAMJBgYPCwoQCgoRCwoRCwsRCwsTCwoUCwoaCQkVDAwWCwwWCwsYDA0aDg4dDg4lCwkfDw4kEBAlEBE5CgoyDg4+DAwyFRZLCwlVCgg7GBlsCglFHR5UFhpKGx6CCQaQCAVVISWbBwSvBAG7BAGaFBXFAwJwKy/JCA+0FRXQCiGDLzbOERHWDCzWFBjcDTPfDiTdDjfaFCviEiTgEzXdGh3UHSviFzacOkLjGi3hHybeIDfmHjCvOkPkJCvoJDTnJyzjKjbpKjLoLDS9QUroMDfsLjfsMDjpMjruMjvrNDzvNT3sOEHxN0DyOULbQ0/vPEbzOkPzO0X8OkDIUFz0P0nzQUzzRE/fTVz+Qkv0SFX6R1L2TFr+Slb2UF7hW2n+T1v4U2H/UV75VmP/U2P4WWz9WGf8XW38YXL6ZHn+Y3T8Z3//Z3j+aX3+bIL+bYb/cIn/cYoSERuIAAAAgHRSTlMAKlVvgbfH0vPhEf2jkwDrRjclU2BreP8XAIQFjwDvpsG1/97nxPj/z//Z9+L//+z///////f//////////////////////////////////////////////////////////////////////////////////////////////////5lGXx0AAAjbSURBVFiFhZeJX9roFoaZ6bROb5dRXAZEL3Wmtra10jqUK6KVcQVkiwmEkBjTBsraCJQdov/6fc8XVNramUN+iJD3+d6zfCHYFm8L56LTPj3nXn7pQbxcds9N2/HWrafablO7puZX3h1+/NzpDU1zOOh9/nj4bmV+ynUb4zuAc9Ext+L/2OmZQzzMi4uLS/y9HHQ++lfmHN8jvgM45j3HneEQagTk+Gua5GPQa5945h3/AnDNrJ4MLi8vWJiDoXlBHPNiAMBgYA4+rs66/glgf3LYZvJLPJs4LsweEXr9Trc/6Pdh4/CJ/ceAGc+nHlv7ko5hbwgQFsfLfr/b7nY7/X5/+Nkz+wOAc8HfMi3zF5esAswLPJioYx8mEHDR9y+4bgO43IeDMblpyemgZpoDZNAfIY7dru8BLvfx4IK1zTSvVreeUQe8ZAArk37/ZMn1LQD67qjtw+HAWn04SggJWGqKdqvd7o4RrgALh80+sw29eXkxrsfLQc9aHnKKdrt/vPA1YMbfaPZh4JL0lupGz/o4Wr7JotXu+mfHAXZPtdHF2JiXvbFCWvNksvQ7rIStVrNex1FvtlqeqRuAc+kUBpC72ekML8zRqlfziA62uxgkEEhfPz/H0ex+euK8BiCBWq3Z7vc6HeqESaqhVVJikXGqfrfdqter5XL5vFyut7qHsyOA07FardVqjeag3e4MML1D2sID07SaetFp1avnEHTb7Sb0xWKumFdz9VZ91eG0HMwfwwAIVN++ycag1xlSScjOoF2HqApCi5bP67qczUpZvd48nmcOYIDpjeo5StM1KX+z10E6w15v2Bt0WucAwPN5s1nO5VWo0zzHZ/IVwwMLcDB7CEClUik30J9We9DHtu20vrS+dDptJNX5Ui0W88Vqq5wvq9kMQuSSiTjHyxWqAhwsl41apVQo1+rUYUS3h1Wr5fqXL+fAsAzIQjWbzWbSkixLIp+Mx7m0WlyBA+fUuwbpC0ajQRYIMux9Qa65HGTV83PUnBGqaoZPZ+SzM0WWkkSQDf+U07Y4fwJA4UPlvMEI9NSHHrkqOkNUUbpiPqfnsjyXkhTtjBAAJMTCyTxSQAZG4UMJBtBJgjTq7Wpez4oiSq3n8+VimQCqmslyvCgpZxSKFI/GOaW84rQ5kAEBatBTUEPqxZyaSaVSkqqqyCRfzudUNc0jA1G2ACBwSeHMeGe3TaIHJWRAg2DpDaynZ9MClxLFTFZVceTVTCbN8+mUZAEUBQQhqVb807bZk4ZR0AslCwC5UUMB1ayQTCaFVCqTzqB1aZJTBeVrwJksCmrhZM62cArAB71yZcAwjAoMZLhkPJnk+FSKZ8FBzmVVC6CgFdqZLGuFU7dtqVhFBlqhZjAHBoWuqimUmRFGelo8o2kK0zMAuqHp+WXbStUofTiT9UrJgImRAUyccAVIU/KSQlJdswoIgAaAImvFFdtLo1LQ8Q7KUDFYBqUcFpJFyAFIZySETHpF0XTlBnB2JopK6aVttVYrnGkyPsyXKhUAKqUcO10SBRig0bXUiiyrqjYCEEgWOKnkIUBOJje6noOHEYDOQp84Do3H8MMDPSvaKAeZkHIymiqt2laMmpKVyZSeoyyMQm5kVBI4jpdw8gggS6pVBLyBhyzEo0L+pQ2TjI+ps2QBWWDqrVpLV9WT2fiAoGk6658kYs6lZDQkoAvuT0Y6ncX5qIuey5fyel6zUpBFjrMACnUNqWhwgBdSKiWkcFEI7fGnS7b50xrPS6yrRMjhkqVbacpSOiUSgPwQAIVW8UkmhdwQodCedrpgmzluJBIZaotGBJyja4pVJykjZq42zwiA8pAxXA6QwN5e6XjWNuVvpBMiO4UxlKxKDmQqM5sAYrNGEgAYdJemlPQhwz9pc63W9ESKjRYrsazktFGnZKo100vEQjZ5FQXkSE76rUTN47Atuk8rCV65BmQzo0sGGx0LgKqnsLclGZcZTAfTh/a2ttRPS06bc+awxseZUwaQslltHEBOJOgZQRVF4cbAnnE4i2uiw1PLRmHvGiCrVg5sdmSaIaYnhMoJ2ObROBnY3OQbHjt9L7hPcyFutD8AyJAD5QoA97KUEhDYWnyWS0BPCWxt+nzqqZt9L0z6jSgHqxorg5SWVHbJsgCYuWScbcxkMpbMJOKxeAjLBzd93s2Kf9L6cl3+xEfh1BomOCDn2Iwi+Yc8GonFSB+PJfgYrR462tva8Hm57PLo633aXwjhdDYvSlZMiylBVGgzo2XJWDQSiRIghkgcRWLho6O9YGDTu5l6PX11f7B0GkvSjmIO0lwiluAkIRaLxDioKWIkh5FwLBI5OgoGtwIbvvj+0vUNht2jhYSM9Z0h8Qk6lQQUR5FI6Ch09TIWjhwcBLe3od9Pvpq6uUeaOxS4DM29ooh8NIKF2FI3Qf/sHoTD4YOD3W0CbCX/mh+7yXI9ScRTbOthqyRQpUj4Wv/3dYAA/Q70Ad/m/564xm/z7KuJpEAA1I3KxOIAj10mff/3e8RuGPKdHdJ715/av77RnHyVEECQCLA/0iOgf38du2HoKYGAd/3Z5Lf3ytOv4gKHZopcNHwUPAge7O7igOFr/TYA21f6me9utkFICHExJeJKsR8MQkp22Yrv8UDs7IYp/23fuH7898Lkq/1oVJCSYehx+nVsj2I3HKT1fd63z6YXbwMsTv3519ZWlDsKhoOBccIIAsDO9sa6982fU4u3AxYd7hfrPmzU/WAgsP2NfmcnuL8R8HrXX7i/+uX2za+2madrvi2fjywExvSUezC84fV6157O0O/am7CNvXY+djodC8/eeL2+xIYPHgIwgqIHAuj9RjDo9b55tuDAaY9tNw/E4/HD+di+8PT1263N9XWvz7dB6g2fD0t7N9dfP12w4wTbv8bUo9+er71d947F+tu15/99OPkfxD9K79yduP/rgwc4Hvz+x/MXr9feINZev3j+x+8PrLcf/Hp/4u6dHwJ++vnOL48e3r13b2LiPuK368A/ExMT9+7dffjolzs//zQm+T+f1Ma2ayNQNQAAAABJRU5ErkJggg==",
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
            actualHp: 40000,
            actualAp: 2500,
            actualDps: 496.7,
            magnification: "1000%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "50%",
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
            actualHp: 50000,
            actualAp: 5000,
            actualDps: 993.0,
            magnification: "10000%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "50%",
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
            actualHp: 40,
            actualAp: 2,
            actualDps: 0.5,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "50%",
            isBoss: true
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
          enemyId: "577",
          enemyName: "大玉（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEDAQICAgIEBAQFBQUHBAMJBgYPCwoQCgoRCwoRCwsRCwsTCwoUCwoaCQkVDAwWCwwWCwsYDA0aDg4dDg4lCwkfDw4kEBAlEBE5CgoyDg4+DAwyFRZLCwlVCgg7GBlsCglFHR5UFhpKGx6CCQaQCAVVISWbBwSvBAG7BAGaFBXFAwJwKy/JCA+0FRXQCiGDLzbOERHWDCzWFBjcDTPfDiTdDjfaFCviEiTgEzXdGh3UHSviFzacOkLjGi3hHybeIDfmHjCvOkPkJCvoJDTnJyzjKjbpKjLoLDS9QUroMDfsLjfsMDjpMjruMjvrNDzvNT3sOEHxN0DyOULbQ0/vPEbzOkPzO0X8OkDIUFz0P0nzQUzzRE/fTVz+Qkv0SFX6R1L2TFr+Slb2UF7hW2n+T1v4U2H/UV75VmP/U2P4WWz9WGf8XW38YXL6ZHn+Y3T8Z3//Z3j+aX3+bIL+bYb/cIn/cYoSERuIAAAAgHRSTlMAKlVvgbfH0vPhEf2jkwDrRjclU2BreP8XAIQFjwDvpsG1/97nxPj/z//Z9+L//+z///////f//////////////////////////////////////////////////////////////////////////////////////////////////5lGXx0AAAjbSURBVFiFhZeJX9roFoaZ6bROb5dRXAZEL3Wmtra10jqUK6KVcQVkiwmEkBjTBsraCJQdov/6fc8XVNramUN+iJD3+d6zfCHYFm8L56LTPj3nXn7pQbxcds9N2/HWrafablO7puZX3h1+/NzpDU1zOOh9/nj4bmV+ynUb4zuAc9Ext+L/2OmZQzzMi4uLS/y9HHQ++lfmHN8jvgM45j3HneEQagTk+Gua5GPQa5945h3/AnDNrJ4MLi8vWJiDoXlBHPNiAMBgYA4+rs66/glgf3LYZvJLPJs4LsweEXr9Trc/6Pdh4/CJ/ceAGc+nHlv7ko5hbwgQFsfLfr/b7nY7/X5/+Nkz+wOAc8HfMi3zF5esAswLPJioYx8mEHDR9y+4bgO43IeDMblpyemgZpoDZNAfIY7dru8BLvfx4IK1zTSvVreeUQe8ZAArk37/ZMn1LQD67qjtw+HAWn04SggJWGqKdqvd7o4RrgALh80+sw29eXkxrsfLQc9aHnKKdrt/vPA1YMbfaPZh4JL0lupGz/o4Wr7JotXu+mfHAXZPtdHF2JiXvbFCWvNksvQ7rIStVrNex1FvtlqeqRuAc+kUBpC72ekML8zRqlfziA62uxgkEEhfPz/H0ex+euK8BiCBWq3Z7vc6HeqESaqhVVJikXGqfrfdqter5XL5vFyut7qHsyOA07FardVqjeag3e4MML1D2sID07SaetFp1avnEHTb7Sb0xWKumFdz9VZ91eG0HMwfwwAIVN++ycag1xlSScjOoF2HqApCi5bP67qczUpZvd48nmcOYIDpjeo5StM1KX+z10E6w15v2Bt0WucAwPN5s1nO5VWo0zzHZ/IVwwMLcDB7CEClUik30J9We9DHtu20vrS+dDptJNX5Ui0W88Vqq5wvq9kMQuSSiTjHyxWqAhwsl41apVQo1+rUYUS3h1Wr5fqXL+fAsAzIQjWbzWbSkixLIp+Mx7m0WlyBA+fUuwbpC0ajQRYIMux9Qa65HGTV83PUnBGqaoZPZ+SzM0WWkkSQDf+U07Y4fwJA4UPlvMEI9NSHHrkqOkNUUbpiPqfnsjyXkhTtjBAAJMTCyTxSQAZG4UMJBtBJgjTq7Wpez4oiSq3n8+VimQCqmslyvCgpZxSKFI/GOaW84rQ5kAEBatBTUEPqxZyaSaVSkqqqyCRfzudUNc0jA1G2ACBwSeHMeGe3TaIHJWRAg2DpDaynZ9MClxLFTFZVceTVTCbN8+mUZAEUBQQhqVb807bZk4ZR0AslCwC5UUMB1ayQTCaFVCqTzqB1aZJTBeVrwJksCmrhZM62cArAB71yZcAwjAoMZLhkPJnk+FSKZ8FBzmVVC6CgFdqZLGuFU7dtqVhFBlqhZjAHBoWuqimUmRFGelo8o2kK0zMAuqHp+WXbStUofTiT9UrJgImRAUyccAVIU/KSQlJdswoIgAaAImvFFdtLo1LQ8Q7KUDFYBqUcFpJFyAFIZySETHpF0XTlBnB2JopK6aVttVYrnGkyPsyXKhUAKqUcO10SBRig0bXUiiyrqjYCEEgWOKnkIUBOJje6noOHEYDOQp84Do3H8MMDPSvaKAeZkHIymiqt2laMmpKVyZSeoyyMQm5kVBI4jpdw8gggS6pVBLyBhyzEo0L+pQ2TjI+ps2QBWWDqrVpLV9WT2fiAoGk6658kYs6lZDQkoAvuT0Y6ncX5qIuey5fyel6zUpBFjrMACnUNqWhwgBdSKiWkcFEI7fGnS7b50xrPS6yrRMjhkqVbacpSOiUSgPwQAIVW8UkmhdwQodCedrpgmzluJBIZaotGBJyja4pVJykjZq42zwiA8pAxXA6QwN5e6XjWNuVvpBMiO4UxlKxKDmQqM5sAYrNGEgAYdJemlPQhwz9pc63W9ESKjRYrsazktFGnZKo100vEQjZ5FQXkSE76rUTN47Atuk8rCV65BmQzo0sGGx0LgKqnsLclGZcZTAfTh/a2ttRPS06bc+awxseZUwaQslltHEBOJOgZQRVF4cbAnnE4i2uiw1PLRmHvGiCrVg5sdmSaIaYnhMoJ2ObROBnY3OQbHjt9L7hPcyFutD8AyJAD5QoA97KUEhDYWnyWS0BPCWxt+nzqqZt9L0z6jSgHqxorg5SWVHbJsgCYuWScbcxkMpbMJOKxeAjLBzd93s2Kf9L6cl3+xEfh1BomOCDn2Iwi+Yc8GonFSB+PJfgYrR462tva8Hm57PLo633aXwjhdDYvSlZMiylBVGgzo2XJWDQSiRIghkgcRWLho6O9YGDTu5l6PX11f7B0GkvSjmIO0lwiluAkIRaLxDioKWIkh5FwLBI5OgoGtwIbvvj+0vUNht2jhYSM9Z0h8Qk6lQQUR5FI6Ch09TIWjhwcBLe3od9Pvpq6uUeaOxS4DM29ooh8NIKF2FI3Qf/sHoTD4YOD3W0CbCX/mh+7yXI9ScRTbOthqyRQpUj4Wv/3dYAA/Q70Ad/m/564xm/z7KuJpEAA1I3KxOIAj10mff/3e8RuGPKdHdJ715/av77RnHyVEECQCLA/0iOgf38du2HoKYGAd/3Z5Lf3ytOv4gKHZopcNHwUPAge7O7igOFr/TYA21f6me9utkFICHExJeJKsR8MQkp22Yrv8UDs7IYp/23fuH7898Lkq/1oVJCSYehx+nVsj2I3HKT1fd63z6YXbwMsTv3519ZWlDsKhoOBccIIAsDO9sa6982fU4u3AxYd7hfrPmzU/WAgsP2NfmcnuL8R8HrXX7i/+uX2za+2madrvi2fjywExvSUezC84fV6157O0O/am7CNvXY+djodC8/eeL2+xIYPHgIwgqIHAuj9RjDo9b55tuDAaY9tNw/E4/HD+di+8PT1263N9XWvz7dB6g2fD0t7N9dfP12w4wTbv8bUo9+er71d947F+tu15/99OPkfxD9K79yduP/rgwc4Hvz+x/MXr9feINZev3j+x+8PrLcf/Hp/4u6dHwJ++vnOL48e3r13b2LiPuK368A/ExMT9+7dffjolzs//zQm+T+f1Ma2ayNQNQAAAABJRU5ErkJggg==",
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
            actualHp: 40000,
            actualAp: 2500,
            actualDps: 496.7,
            magnification: "1000%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "75%",
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
            actualHp: 40000,
            actualAp: 2500,
            actualDps: 496.7,
            magnification: "1000%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "75%",
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
            actualHp: 40,
            actualAp: 2,
            actualDps: 0.5,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "75%",
            isBoss: true
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
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA06982B4cY/dWb+AgAXHQJd3b7TY+Wx3H9+qWgbrF+50uwu3u4KpFQhiQBOxuCxhIiu221bI6VqvvX7phuFEAePTYs8HyFenuXF27i2C34KDLYLVMKL3vf/UVwfKUj+AHA7tlDofQu7q2h9XuuQTQvWnWG4bZ900t3yF4sYP6cX6WCaJ7173rQXsER2Yiod2xmqbZqNcNo78zOUZAz69rfdKh22y5fu1+jwQyLOvKJg6shmEAXK+pwsYCPSKg6aUjx5VoNtowcIx7YI9Xp2ljhG1T1zVdrxuqah6ukCCJghe7IzxUowVv7fR6Y/pROzwAXtNURdE0XVXU5u7kUAG9+FHsI6hZR7zZhIF3Bl1yBmBfiM6C8UF8DR0IAKtpmqyo+Y+LtKtg2u/glrRMA/FmA0Zt97EzHARsEwoOW3VwTgoZFEUxfNOugsX1Rh+7NBv4PrNutqxmDxnbBNyAg4ZRq5n1GqBUVVNkGUhktcyugwTKQ0/6HBxwq9HAN8Pb5Jo57Ax/GwRdU2q1hkoIACsriiiIJcH3HBTQ9CrbR7zpNqvXJLF225mgoSS51tChLTAowCAKpRKXD63SNOWZ2XZwReumK8BQJUkBvfVbsFpTZUlSDUOG3iphkColrpTnt2dAwfSeAwGA9UbDdSBKikqABmIhcU3VZFFUjaaM7gmDWOE5Ls/7p4Bgleu3W80aEjRNwEhIoCGBVsMnJAAFQGAprgJIQRR4sJCPrNHU4pYDFwuj1oAJ1puyIAiirCKmho9kcBppqiqWjvG5FgSe5y4v+K15avYLOGgpolav64ZWKQuCBJ3dgauamzvGDwQYgvtKqgplni+mhS8vqN/2nbalixW5VpOBtiKISl0jHXFbQPINg4IhKJiDJAsVIGATpb1p6k0YFGiViiTVhBLiJcXUlOHIZaKZ7B086+BBgjjFqoACgIA5fEfBFrTrYhmqWi5XBEGWdd3dFYDII9PkLwMJqtWqAAbKfKmUj+fDq5RX67fqoB2qDOSSrBj1EYEMDYnnYbUMCBkIiAGOzSYSaS/1qdltKGXYq1KpIhIcKnBLll2ioQKlWReFilCplCs8DiEdTV9+ojZtuymVWI7j+aqIe6LpwxkQgpETfCUZusCDV1RbYkFANM1uUpt9uyZwHEcCxD3RTM2d/bAt+JAk+BVFwXUK7jFBJh2NRrlN6lOrLWMifFmoIoGm1xHvEpAwEEvKNVriQC7HFUFANFHcpLyGBZwY4YjAIP21mxgkt6qwvSyAWZYtslwxn45Ho/Gsl1qtWJw7A0KgaQZmeBMBIYDhSJJQQeMIZ5giyyQS8Wg8HVml3sXbbAk1AAEwEALVjQ/xCmwOzF6URNgdUM8Wi0WmcMnk04l4JJI9ek9NH3SRAIoQKLqhK8P8YQtcOJRIzr8hPp+HFQB8OL//lnrh60OESFHBRqprwR0gpod7AwSSNBJwCXhoH41GQsGib5Ka3+7LPMsNCcCDro1WSMa+Ai6uwFehC4cETD6byybiiUg4FAyyOzMU7ZVqZYYdzlFUNLM2tEAmj1WGqw9g4acE+rNQQBAOhoKBqHeZ8rw+sLhCkeXdFBXFJANQZDK5SgX3nkPrMDoQUID+2exFIhEOAH7vDVxUX+52hTxT5Hg4F2FeogG54TkF08OzDqqEeFIlMEAqnQ4FgsHc7iwQLHurUj5fZIceqjrkVkUFonvd4V0BDGFgoHv6Ip2Kh4PBcCT6cRk/mab3rXz2ki2VQa8gIgcQDB3AfrhoBqvAM9mLVAJHCATBLFyU8ZNpfqtVTGeLHEqAyKsijpOcAFW0D1NjCEMhl+MLICBxFj+FEYRCua0F99P5zUEtnS2ABB41SEiAaNw9UJ/L5Ri3f44pF0A+7MBJOByOpPfeDT+d5zckyAYlwCgqeM3AzYH2JYwdCApMoYACimUml0mlzmIn4WMg2FgY3aFM+5VEOstyuJAVkSdWKrh4uLeFi1wBC4iKPHORSZ2dxU7Dx6G0b+rmDsWzFi0m0gyeqTBNHvNE9YiHxplM5iJ3AU85oMulzs9iQBAMH66N3WS9/CykE2ACGQQeNo6ox/YF1JzKZFLn50nIIpc8hwKCUPTv2ZubLGCY8onxdJ6c7qUKrh1LBkfw52fnKex7nmMLySTBnwTiX17Td+5Ul/b5KMySRSzLuHNz8WAZ6vQ0dpZhM6R/LBaM+le+utVd/LDPJtL5LGBLLFNAMNGfRMekYudJggcBx5G9tcW7d6qe5fm1g2IUZpG/LHJFmFoOw0tmkklXQQyQGVfAaRDwC99+X5j/sM9F4wlcKTaXSiEWDJOHYWXOCMFxxL+2sPwtgWdxxZeLhyOJLMNexOC9t0hSyWQMxJyfBEO+lbFvb+NfeehX24HIUTCaZVIxwpAcQd1XEMNJ4Phw+9X41667X7om1/2hQCAahW0FBoKChzM3u5OTWPA47F9/fgcCt3njtfDu834YLjYn4ZPT2NlIPcZ4eh4OHIf2t5cW4Obcc4ug5sb/zXno2Q/b+0GQcRwGxUMXsHnh45NwcH/nA6zf3Bw1hvmm5uZml7Z8ByHgOAoEj7ECAXgROvRtLc1+B/BV/fD06dNf7z378/OXvYMjuGhgBY8O9r58/vPZ81/hP3/4N/D9hxNPfvnPsH7/46+/t3d2d3e2//7rj99HR395MvHwwT+S/Hjv/oOfnv388NGjRxMTjx8/uanHjycm4ODDn5/99OD+vR/HMf8FeglGKt2anncAAAAASUVORK5CYII=",
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
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
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
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
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
            actualHp: 5,
            actualAp: 0,
            actualDps: 0.1,
            magnification: "1%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
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
      stageId: 7,
      stageName: "来年はもらえません",
      baseHp: 360000,
      width: 4800,
      enemyLimit: 20,
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
          amount: "500000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "250000",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
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
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
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
            "knockback": {
                chance: 100
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
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
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
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
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
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
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
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.3-11.7s",
            delayFrames: "250-350f",
            baseHpRatio: "99%",
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
            count: "12",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
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
          enemyId: "576",
          enemyName: "大玉（白）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAMAAABW61JJAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAGAQEGAgIMAQEQAAAQAQARAQESAgESAgISAgITAwMUAwMUBAQPBwcVBQUWBgUSCAgVBwYXBwcYCAgZCQkZCgocDAwcDQ4dDg4fDw8fEBIjFRQjFRUoGhomHR0nHh4qHR0xJSQ0Jyg5Li45MDFCNzhEOTpKP0BLREVSSEhUTU9eWFloZGdyb3B+fX+KiIuXl5ifoqWnq6+ytru4vcC9wcS9xcu/x82+y83Byc/DzNHB0dDHztPD09PK0dbD1tTL09jF19bE2dbN1NnF2tfJ2NnP1tvJ2tnO2NvR2N3O3N3T2t/R3d7V2+DU3eDX3uPZ3+Tb4ebc4ubd4+je5Ong5eng5uvh5+zj6Ozk6e3l6u3m6+7n7O/o7fDm7vTq7vHq8PTt8fTt8vXu8/bv9Pfy9ffz9vn09/r1+Pv3+Pn2+fv3+vz6+vv5/P/8+/z+/P3////euzAYAAAAgHRSTlMACCtSbn6StsHQ2+Tr9v4RqCBYR1E1eGFsJD6TABcd/4INi3oBppcAALGkwrT/88vUyOD/1+nh/+v+/P///////////////////////////////////////////////////////////////////////////////////////////9u+XI4AAAkzSURBVFiFjVeNQ9r2Fs3Wdmtt99q11qlVV9tYtHWzuOqsWvALBBFQvuTDkBAI+SQhQMAAkn/93fsLKLbd3rtVwJRz7jnn3oRAeb5TNPzMTL597/20BfXJ+/7t5AxNDn9b1HcJXr72bvuPLhWr6zhdS7088m97X7/8/whoz/y0d/dQd66dfq9rQ/X78OPoh7ve6fn/SUB7Fqc2/FWnf921r2y7a3dsu9Vqdzqdfs/R9zan5r82cpeApp+v77WcfqfTvb4e9K563R68tu0Oqb5j76//RtP/QjCz8kUHuN0bQDnOoNcb9GzbstrtDiGxHdO3MvOPBMuTGyHsbl8jvGf37MHgutvrdtqW1bRsFGL3nejG82X6ewS0Z2qn7mCfa4RftWyUcQ0pdDGMttW2u5BJ22nsvh6zcUNA06982B4cY/dWb+AgAXHQJd3b7TY+Wx3H9+qWgbrF+50uwu3u4KpFQhiQBOxuCxhIiu221bI6VqvvX7phuFEAePTYs8HyFenuXF27i2C34KDLYLVMKL3vf/UVwfKUj+AHA7tlDofQu7q2h9XuuQTQvWnWG4bZ900t3yF4sYP6cX6WCaJ7173rQXsER2Yiod2xmqbZqNcNo78zOUZAz69rfdKh22y5fu1+jwQyLOvKJg6shmEAXK+pwsYCPSKg6aUjx5VoNtowcIx7YI9Xp2ljhG1T1zVdrxuqah6ukCCJghe7IzxUowVv7fR6Y/pROzwAXtNURdE0XVXU5u7kUAG9+FHsI6hZR7zZhIF3Bl1yBmBfiM6C8UF8DR0IAKtpmqyo+Y+LtKtg2u/glrRMA/FmA0Zt97EzHARsEwoOW3VwTgoZFEUxfNOugsX1Rh+7NBv4PrNutqxmDxnbBNyAg4ZRq5n1GqBUVVNkGUhktcyugwTKQ0/6HBxwq9HAN8Pb5Jo57Ax/GwRdU2q1hkoIACsriiiIJcH3HBTQ9CrbR7zpNqvXJLF225mgoSS51tChLTAowCAKpRKXD63SNOWZ2XZwReumK8BQJUkBvfVbsFpTZUlSDUOG3iphkColrpTnt2dAwfSeAwGA9UbDdSBKikqABmIhcU3VZFFUjaaM7gmDWOE5Ls/7p4Bgleu3W80aEjRNwEhIoCGBVsMnJAAFQGAprgJIQRR4sJCPrNHU4pYDFwuj1oAJ1puyIAiirCKmho9kcBppqiqWjvG5FgSe5y4v+K15avYLOGgpolav64ZWKQuCBJ3dgauamzvGDwQYgvtKqgplni+mhS8vqN/2nbalixW5VpOBtiKISl0jHXFbQPINg4IhKJiDJAsVIGATpb1p6k0YFGiViiTVhBLiJcXUlOHIZaKZ7B086+BBgjjFqoACgIA5fEfBFrTrYhmqWi5XBEGWdd3dFYDII9PkLwMJqtWqAAbKfKmUj+fDq5RX67fqoB2qDOSSrBj1EYEMDYnnYbUMCBkIiAGOzSYSaS/1qdltKGXYq1KpIhIcKnBLll2ioQKlWReFilCplCs8DiEdTV9+ojZtuymVWI7j+aqIe6LpwxkQgpETfCUZusCDV1RbYkFANM1uUpt9uyZwHEcCxD3RTM2d/bAt+JAk+BVFwXUK7jFBJh2NRrlN6lOrLWMifFmoIoGm1xHvEpAwEEvKNVriQC7HFUFANFHcpLyGBZwY4YjAIP21mxgkt6qwvSyAWZYtslwxn45Ho/Gsl1qtWJw7A0KgaQZmeBMBIYDhSJJQQeMIZ5giyyQS8Wg8HVml3sXbbAk1AAEwEALVjQ/xCmwOzF6URNgdUM8Wi0WmcMnk04l4JJI9ek9NH3SRAIoQKLqhK8P8YQtcOJRIzr8hPp+HFQB8OL//lnrh60OESFHBRqprwR0gpod7AwSSNBJwCXhoH41GQsGib5Ka3+7LPMsNCcCDro1WSMa+Ai6uwFehC4cETD6byybiiUg4FAyyOzMU7ZVqZYYdzlFUNLM2tEAmj1WGqw9g4acE+rNQQBAOhoKBqHeZ8rw+sLhCkeXdFBXFJANQZDK5SgX3nkPrMDoQUID+2exFIhEOAH7vDVxUX+52hTxT5Hg4F2FeogG54TkF08OzDqqEeFIlMEAqnQ4FgsHc7iwQLHurUj5fZIceqjrkVkUFonvd4V0BDGFgoHv6Ip2Kh4PBcCT6cRk/mab3rXz2ki2VQa8gIgcQDB3AfrhoBqvAM9mLVAJHCATBLFyU8ZNpfqtVTGeLHEqAyKsijpOcAFW0D1NjCEMhl+MLICBxFj+FEYRCua0F99P5zUEtnS2ABB41SEiAaNw9UJ/L5Ri3f44pF0A+7MBJOByOpPfeDT+d5zckyAYlwCgqeM3AzYH2JYwdCApMoYACimUml0mlzmIn4WMg2FgY3aFM+5VEOstyuJAVkSdWKrh4uLeFi1wBC4iKPHORSZ2dxU7Dx6G0b+rmDsWzFi0m0gyeqTBNHvNE9YiHxplM5iJ3AU85oMulzs9iQBAMH66N3WS9/CykE2ACGQQeNo6ox/YF1JzKZFLn50nIIpc8hwKCUPTv2ZubLGCY8onxdJ6c7qUKrh1LBkfw52fnKex7nmMLySTBnwTiX17Td+5Ul/b5KMySRSzLuHNz8WAZ6vQ0dpZhM6R/LBaM+le+utVd/LDPJtL5LGBLLFNAMNGfRMekYudJggcBx5G9tcW7d6qe5fm1g2IUZpG/LHJFmFoOw0tmkklXQQyQGVfAaRDwC99+X5j/sM9F4wlcKTaXSiEWDJOHYWXOCMFxxL+2sPwtgWdxxZeLhyOJLMNexOC9t0hSyWQMxJyfBEO+lbFvb+NfeehX24HIUTCaZVIxwpAcQd1XEMNJ4Phw+9X41667X7om1/2hQCAahW0FBoKChzM3u5OTWPA47F9/fgcCt3njtfDu834YLjYn4ZPT2NlIPcZ4eh4OHIf2t5cW4Obcc4ug5sb/zXno2Q/b+0GQcRwGxUMXsHnh45NwcH/nA6zf3Bw1hvmm5uZml7Z8ByHgOAoEj7ECAXgROvRtLc1+B/BV/fD06dNf7z378/OXvYMjuGhgBY8O9r58/vPZ81/hP3/4N/D9hxNPfvnPsH7/46+/t3d2d3e2//7rj99HR395MvHwwT+S/Hjv/oOfnv388NGjRxMTjx8/uanHjycm4ODDn5/99OD+vR/HMf8FeglGKt2anncAAAAASUVORK5CYII=",
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 9.93,
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
    }
  ]
} as const;

export default e1286Data;

