// Stage 25019 Data
import type { StageData } from '../../app/stage/types';

export const e25019Data: StageData = {
  eventId: 25019,
  eventName: "聖なる本能の頂",
  typeId: 25,
  typeName: "発掘ステージ",
  prefix: "H",
  mapId: 19,
  stages: [
    {
      stageId: 0,
      stageName: "頂の祠 超極ムズ",
      baseHp: 720000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "30035",
          treasureName: "ユニット20035への進化権",
          probability: "3775",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "30040",
          treasureName: "ユニット20040への進化権",
          probability: "3775",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30036",
          treasureName: "ユニット20036への進化権",
          probability: "850",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30041",
          treasureName: "ユニット20041への進化権",
          probability: "850",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30037",
          treasureName: "ユニット20037への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30042",
          treasureName: "ユニット20042への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30110",
          treasureName: "ユニット20110への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30115",
          treasureName: "ユニット20115への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30120",
          treasureName: "ユニット20120への進化権",
          probability: "150",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "119",
          enemyName: "マンボーグ鈴木",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYICAgJCQkKCgoMDAwTExMeHh4iIiImJiYnJycoKCgzMzM0NDRGRkZISEhNTU1SUlJcW1t3d3d8fHyGhoabm5ucnJzIqguioqLWtx+xsbG2trblwxvlwyDixCbjxh7oxifjyDjxwi/BwcHrzTbbz2vez2fJycns1Erv2lnU1NTy3l/e3t716YH//wH364z07JXo6Ojv7+//+sb29vb7+/r///86574sAAAAQHRSTlMABwxIpbnI2OswPhMehCdCV2elGzx9X5jltYCz0ejL6wX/Ef7tQyMXUGF/Bv4f4cX9Onr+n//fAbj6////////5XCcigAAAmZJREFUWIXtltly2jAUhm2apV5IgADGi1giFydEbQWq2kaKpPd/q8imrKEzknzTi/5X4Jnz+Sw6v+x5lxSH0cXnxhpPBnetAMMSpa0Id4ChpE0VDwUVs14LQFRwRdMWKXRSKFQ5bANgSrHssVo2qh7nv2wBWMi3b6vnpy9aT8+rzXpuBfB1BvLtdbVeVlrL9ebn78oaoMTr9x87bdYvVgBdAlWK6yZ81aqql7lVuAbkXColc98ybq9oquMZzZ1PQlxwKSma5f3ALQm/B3QPdBcQSEInRJQz1UjQWeKwl35G1E6SFD3rJOJCqIP4bNSxTKAPsDwiyNLSHEKgh6COCdiOMMLqXDizqWIEqZBnhHJsHt9JIPkDkIoT2vwURWwMCMDh9RxBvG0o6hsD4oLte4jRZEGaQ8XS0BxA9i3ABJLtPw6AKeC+rKtnlFChS0C4WQspSGkDkGiBKeF14O5Qiql5CZQLsCBCHc+SC+MMOinS9wqEdQJ7CZBnpoCokEpKRhA7AqBBZLyTfnLy7kZsEpiGa91v/eikAKurthnDyTaWfStPuSsYP/WDkZ0naU89NhRR2jpSM4dD/6Zja0/0MyS326wEzl2+E8JJY8uSk+nY5XqKUgwFIxCk4weHcP2RVUohKUxD2+btAdN6Cixxvp39tG4BTVzjPT+vTQCbu+AHZfU2wRafmhmhSgKbBTxTHzDFU9cZaPWgbsHIPV4vtGxVgTecEex+CmoAYEWbBLwhhpYe8iGDgfllfElBt12857fK/7/+CfmdKI6DMPxUKwyDOI7sNjvsXl3f3H7e6fbm+qr7t814B6c1kYwVXmyVAAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 1200000,
            ap: 9260,
            dps: 1076.74,
            speed: 3,
            range: 840,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3333,
            freq: 258,
            foreswing: 59,
            backswing: 62,
            tba: 100
          },
          stageStats: {
            actualHp: 1800000,
            actualAp: 13890,
            actualDps: 1615.11,
            magnification: "150%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "160",
          enemyName: "天使ヒオコエル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAwMFBQUIBwgICAgMDAwNDQ0PDw8TEhMWFhYXFxcXFxceHh4gICEpKCgqKiouLi42NjY5OTk+Pj5KSkpMS0z/AABOTk6MVQheXl6fVAqeVwJlZWWfYQGsYRSpagiwZRdzc3Osag91dXWzcBS3dxq3fwG8fg+Ghoa+giPDhCeRkZHGjy3Snz+qqqrfrTzZr1DnrDi4uLjevF/qx2nHx8fT09Px23/f39/356vq6ur89Mn09PT7+vr///8K47FLAAAAQHRSTlMACdW5IhM7LkeKU2Wc63iozIfsvZbJ7wGyI/5ME9gHbR2J6i/+QFYHHO12lP6ptv3eyff/1Of+/vb/+v//////PEmN4wAABG1JREFUWIXNV2uXojgQbbZBEFh8oIwvbBfTutjRjBsNxpjw///VFCitjuBjPu09p8/paN+bqluVSvrt7Q7G8/GoPxx+fPyT4+NjOOyPxvP5Pc4lfTJbLFfrn/9d4Od69bX4HD0jMZ4s1tvdbrf9uVouvzIsM7X8o9Vs9Figv9wd9pvl4nM6GRWYTKazxWp7OGwXjxVmu1Rtv6bz+fgqrvF8usy+GT4UGG5VetiuFjMIYfIdwGceQSo3jwVGi83+oA773XazXoEN4MBqvdnusg9362dMGE8Xq81uvz9cY7/brBbT8WP+29uP+Qg8+wLv15sc6/Vq+bWYTUfzH8/wj2GMx6PJv0dM+v3+aDR+avMSGDXHazk17c/Ymm53wpiQuOsZf8K2PD+iXColWei8GoNW8/wwpkKlUqpU0caLIeheN842TwWjlIk06Zov8U03YsBOU4ExY5iqJHguB80wLdu27EbMM3qaMsRTSaiig6Z9V0Ez9JplO16jG8Vx2EYip0PuiCvBBEeE+HeS0Eyn0wtjAEJECAzbnsAhBc4ZxkLE9SofjVoLHEuEAgiGCB2wgp9CBSmAyRR8rFXs3goJl6qgMDTA51Uuoo5SsVfmgmb3gH7x5xINkrQU1NfL+OGxXuosgGW5AA+tWwGzxzKqTEjhG0dHB9SNQGkOVgjeiQQP8sJlJFKUUDB+qcIZJ+5tHfROTHDUa0LhlMiYEh8tVBK30TmXfFlqgu54jlWDRCRDFPwWiBy3VSS4rIaEZcWB0LQ3M4SGDxAXVCSoqIHk4sIABUselncCtJLX63kNwhDi9NyFNxCRXSEAw0M3nG7PDckAyVv/iyDKW+k7DFPX7VYTV/GzCpWU4TsGA74zHD8g6neFc5+xOyfS6vVMvR7CwVE3CiI52Vnaiyc4MevVo0RJIQi9skFxjDA/9kbkVGbgxCICfjbEELviJwhTmApZUylcr+Jbbpxg4KuUDpJLvqQDRDBG+YxQxK0ScAeI5cTvTjyBowBhFAxIbgNrVAm0MBM5kV1PA6U4xI+LkZH4VR5Y4XEMc4R/bySZUF4UplrA8OIsgwShinH0SAAUIgEGYH6nEe94kCl0mCSInUZAqYyqrkLmoxPRAU6ETLNiypt2zO2IvWqBN9OHgU5ZPuEFLR2sVVdDEUKAEHQdBCEIKRNQ+M5pzFyoRzCYECbQeSVTRUEA1WfpmEQjFiJhjCXilg95Vd+Olwrl9cscxPfu57MCr6ihJP6DBHLorYDeBqGyoeBbT71RDNuPmLwiw4+gUePpt6Lu+DGBWp4SURIuzsh3Si6lKmi612xDNVkCYHDzdRuO+dozUfOCttvwu92u77fbbs14+aVrB75p6Lpp6jU/qLyO7qDWLF6mhtu81/9VMJtF12v15mtv1P+LQObB0XkNPHj9vw3DCbqeXTMNTTP9oONY5iuF1AyrE2IcBU2/47V6MY6DdrPhPXcS4N1qO/X3do6/M3z/9v7MWcwuybrrvmf4q0C+ct36dQi/AGJ7ZOThh8XMAAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 13000,
            dps: 3513.51,
            speed: 8,
            range: 370,
            rangeType: "範囲",
            kbLevel: 3,
            money: 770,
            freq: 111,
            foreswing: 32,
            backswing: 29,
            tba: 40
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 26000,
            actualDps: 7027.02,
            magnification: "200%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 196000,
            actualAp: 11134,
            actualDps: 20876.24,
            magnification: "200%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "160",
          enemyName: "天使ヒオコエル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAwMFBQUIBwgICAgMDAwNDQ0PDw8TEhMWFhYXFxcXFxceHh4gICEpKCgqKiouLi42NjY5OTk+Pj5KSkpMS0z/AABOTk6MVQheXl6fVAqeVwJlZWWfYQGsYRSpagiwZRdzc3Osag91dXWzcBS3dxq3fwG8fg+Ghoa+giPDhCeRkZHGjy3Snz+qqqrfrTzZr1DnrDi4uLjevF/qx2nHx8fT09Px23/f39/356vq6ur89Mn09PT7+vr///8K47FLAAAAQHRSTlMACdW5IhM7LkeKU2Wc63iozIfsvZbJ7wGyI/5ME9gHbR2J6i/+QFYHHO12lP6ptv3eyff/1Of+/vb/+v//////PEmN4wAABG1JREFUWIXNV2uXojgQbbZBEFh8oIwvbBfTutjRjBsNxpjw///VFCitjuBjPu09p8/paN+bqluVSvrt7Q7G8/GoPxx+fPyT4+NjOOyPxvP5Pc4lfTJbLFfrn/9d4Od69bX4HD0jMZ4s1tvdbrf9uVouvzIsM7X8o9Vs9Figv9wd9pvl4nM6GRWYTKazxWp7OGwXjxVmu1Rtv6bz+fgqrvF8usy+GT4UGG5VetiuFjMIYfIdwGceQSo3jwVGi83+oA773XazXoEN4MBqvdnusg9362dMGE8Xq81uvz9cY7/brBbT8WP+29uP+Qg8+wLv15sc6/Vq+bWYTUfzH8/wj2GMx6PJv0dM+v3+aDR+avMSGDXHazk17c/Ymm53wpiQuOsZf8K2PD+iXColWei8GoNW8/wwpkKlUqpU0caLIeheN842TwWjlIk06Zov8U03YsBOU4ExY5iqJHguB80wLdu27EbMM3qaMsRTSaiig6Z9V0Ez9JplO16jG8Vx2EYip0PuiCvBBEeE+HeS0Eyn0wtjAEJECAzbnsAhBc4ZxkLE9SofjVoLHEuEAgiGCB2wgp9CBSmAyRR8rFXs3goJl6qgMDTA51Uuoo5SsVfmgmb3gH7x5xINkrQU1NfL+OGxXuosgGW5AA+tWwGzxzKqTEjhG0dHB9SNQGkOVgjeiQQP8sJlJFKUUDB+qcIZJ+5tHfROTHDUa0LhlMiYEh8tVBK30TmXfFlqgu54jlWDRCRDFPwWiBy3VSS4rIaEZcWB0LQ3M4SGDxAXVCSoqIHk4sIABUselncCtJLX63kNwhDi9NyFNxCRXSEAw0M3nG7PDckAyVv/iyDKW+k7DFPX7VYTV/GzCpWU4TsGA74zHD8g6neFc5+xOyfS6vVMvR7CwVE3CiI52Vnaiyc4MevVo0RJIQi9skFxjDA/9kbkVGbgxCICfjbEELviJwhTmApZUylcr+Jbbpxg4KuUDpJLvqQDRDBG+YxQxK0ScAeI5cTvTjyBowBhFAxIbgNrVAm0MBM5kV1PA6U4xI+LkZH4VR5Y4XEMc4R/bySZUF4UplrA8OIsgwShinH0SAAUIgEGYH6nEe94kCl0mCSInUZAqYyqrkLmoxPRAU6ETLNiypt2zO2IvWqBN9OHgU5ZPuEFLR2sVVdDEUKAEHQdBCEIKRNQ+M5pzFyoRzCYECbQeSVTRUEA1WfpmEQjFiJhjCXilg95Vd+Olwrl9cscxPfu57MCr6ihJP6DBHLorYDeBqGyoeBbT71RDNuPmLwiw4+gUePpt6Lu+DGBWp4SURIuzsh3Si6lKmi612xDNVkCYHDzdRuO+dozUfOCttvwu92u77fbbs14+aVrB75p6Lpp6jU/qLyO7qDWLF6mhtu81/9VMJtF12v15mtv1P+LQObB0XkNPHj9vw3DCbqeXTMNTTP9oONY5iuF1AyrE2IcBU2/47V6MY6DdrPhPXcS4N1qO/X3do6/M3z/9v7MWcwuybrrvmf4q0C+ct36dQi/AGJ7ZOThh8XMAAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 13000,
            dps: 3513.51,
            speed: 8,
            range: 370,
            rangeType: "範囲",
            kbLevel: 3,
            money: 770,
            freq: 111,
            foreswing: 32,
            backswing: 29,
            tba: 40
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 26000,
            actualDps: 7027.02,
            magnification: "200%",
            count: "2",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 196000,
            actualAp: 11134,
            actualDps: 20876.24,
            magnification: "200%",
            count: "3",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "160",
          enemyName: "天使ヒオコエル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAwMFBQUIBwgICAgMDAwNDQ0PDw8TEhMWFhYXFxcXFxceHh4gICEpKCgqKiouLi42NjY5OTk+Pj5KSkpMS0z/AABOTk6MVQheXl6fVAqeVwJlZWWfYQGsYRSpagiwZRdzc3Osag91dXWzcBS3dxq3fwG8fg+Ghoa+giPDhCeRkZHGjy3Snz+qqqrfrTzZr1DnrDi4uLjevF/qx2nHx8fT09Px23/f39/356vq6ur89Mn09PT7+vr///8K47FLAAAAQHRSTlMACdW5IhM7LkeKU2Wc63iozIfsvZbJ7wGyI/5ME9gHbR2J6i/+QFYHHO12lP6ptv3eyff/1Of+/vb/+v//////PEmN4wAABG1JREFUWIXNV2uXojgQbbZBEFh8oIwvbBfTutjRjBsNxpjw///VFCitjuBjPu09p8/paN+bqluVSvrt7Q7G8/GoPxx+fPyT4+NjOOyPxvP5Pc4lfTJbLFfrn/9d4Od69bX4HD0jMZ4s1tvdbrf9uVouvzIsM7X8o9Vs9Figv9wd9pvl4nM6GRWYTKazxWp7OGwXjxVmu1Rtv6bz+fgqrvF8usy+GT4UGG5VetiuFjMIYfIdwGceQSo3jwVGi83+oA773XazXoEN4MBqvdnusg9362dMGE8Xq81uvz9cY7/brBbT8WP+29uP+Qg8+wLv15sc6/Vq+bWYTUfzH8/wj2GMx6PJv0dM+v3+aDR+avMSGDXHazk17c/Ymm53wpiQuOsZf8K2PD+iXColWei8GoNW8/wwpkKlUqpU0caLIeheN842TwWjlIk06Zov8U03YsBOU4ExY5iqJHguB80wLdu27EbMM3qaMsRTSaiig6Z9V0Ez9JplO16jG8Vx2EYip0PuiCvBBEeE+HeS0Eyn0wtjAEJECAzbnsAhBc4ZxkLE9SofjVoLHEuEAgiGCB2wgp9CBSmAyRR8rFXs3goJl6qgMDTA51Uuoo5SsVfmgmb3gH7x5xINkrQU1NfL+OGxXuosgGW5AA+tWwGzxzKqTEjhG0dHB9SNQGkOVgjeiQQP8sJlJFKUUDB+qcIZJ+5tHfROTHDUa0LhlMiYEh8tVBK30TmXfFlqgu54jlWDRCRDFPwWiBy3VSS4rIaEZcWB0LQ3M4SGDxAXVCSoqIHk4sIABUselncCtJLX63kNwhDi9NyFNxCRXSEAw0M3nG7PDckAyVv/iyDKW+k7DFPX7VYTV/GzCpWU4TsGA74zHD8g6neFc5+xOyfS6vVMvR7CwVE3CiI52Vnaiyc4MevVo0RJIQi9skFxjDA/9kbkVGbgxCICfjbEELviJwhTmApZUylcr+Jbbpxg4KuUDpJLvqQDRDBG+YxQxK0ScAeI5cTvTjyBowBhFAxIbgNrVAm0MBM5kV1PA6U4xI+LkZH4VR5Y4XEMc4R/bySZUF4UplrA8OIsgwShinH0SAAUIgEGYH6nEe94kCl0mCSInUZAqYyqrkLmoxPRAU6ETLNiypt2zO2IvWqBN9OHgU5ZPuEFLR2sVVdDEUKAEHQdBCEIKRNQ+M5pzFyoRzCYECbQeSVTRUEA1WfpmEQjFiJhjCXilg95Vd+Olwrl9cscxPfu57MCr6ihJP6DBHLorYDeBqGyoeBbT71RDNuPmLwiw4+gUePpt6Lu+DGBWp4SURIuzsh3Si6lKmi612xDNVkCYHDzdRuO+dozUfOCttvwu92u77fbbs14+aVrB75p6Lpp6jU/qLyO7qDWLF6mhtu81/9VMJtF12v15mtv1P+LQObB0XkNPHj9vw3DCbqeXTMNTTP9oONY5iuF1AyrE2IcBU2/47V6MY6DdrPhPXcS4N1qO/X3do6/M3z/9v7MWcwuybrrvmf4q0C+ct36dQi/AGJ7ZOThh8XMAAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 160000,
            ap: 13000,
            dps: 3513.51,
            speed: 8,
            range: 370,
            rangeType: "範囲",
            kbLevel: 3,
            money: 770,
            freq: 111,
            foreswing: 32,
            backswing: 29,
            tba: 40
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 26000,
            actualDps: 7027.02,
            magnification: "200%",
            count: "3",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 196000,
            actualAp: 11134,
            actualDps: 20876.24,
            magnification: "200%",
            count: "4",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 196000,
            actualAp: 11134,
            actualDps: 20876.24,
            magnification: "200%",
            count: "0",
            spawnTime: "180.0s",
            spawnTimeFrames: "5,400f",
            delay: "50.0-100.0s",
            delayFrames: "1,500-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e25019Data;

