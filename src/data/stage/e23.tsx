// Stage 23 Data
import type { StageData } from '../../app/stage/types';

export const e23Data: StageData = {
  eventId: 23,
  eventName: "バトルロワイアル",
  typeId: 0,
  typeName: "レジェンドストーリー",
  prefix: "N",
  mapId: 23,
  specialRule: null,
  crownData: {
    crownCount: 4,
    magnifications: [100, 120, 140, 120],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "ロイヤル・ミル・クティ",
      baseHp: 520000,
      width: 5500,
      enemyLimit: 12,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 120, 140, 120],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "152000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 160000,
            actualAp: 13000,
            actualDps: 3513.51,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 25,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
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
            actualHp: 2250,
            actualAp: 200,
            actualDps: 127.75,
            magnification: "2500%",
            count: "8",
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
            actualHp: 2500,
            actualAp: 375,
            actualDps: 304.0,
            magnification: "2500%",
            count: "8",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 5000,
            actualAp: 500,
            actualDps: 500.0,
            magnification: "2500%",
            count: "8",
            spawnTime: "35.0s",
            spawnTimeFrames: "1,050f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
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
            actualHp: 10000,
            actualAp: 1000,
            actualDps: 731.8,
            magnification: "2000%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 160000,
            actualAp: 13000,
            actualDps: 3513.51,
            magnification: "100%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 25,
                duration_f: 60,
                duration_s: 2.0
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
            count: "5",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "73.3-73.3s",
            delayFrames: "2,200-2,200f",
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
            spawnTime: "60.7s",
            spawnTimeFrames: "1,820f",
            delay: "73.3-73.3s",
            delayFrames: "2,200-2,200f",
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
            spawnTime: "61.3s",
            spawnTimeFrames: "1,840f",
            delay: "73.3-73.3s",
            delayFrames: "2,200-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 160000,
            actualAp: 13000,
            actualDps: 3513.51,
            magnification: "100%",
            count: "2",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 25,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgICAgICAgICAgIFBQUFBQUFBQUGBgYHBwcICAgLCwsMDAwODg4cHBwiIiIjIyMoKCg3Nzc7OztFRUX/AABTU1NXV1dcXFxnZ2d/fgN1dXWBgYGRkZG0pQD/fwGgoKDMsgXXthHZtxKvr6/YuBPcuhjZvgjbuxnevx//tALixCS/v7/ozSzp0Dfp0TfJycns1Tv22zDX19f25zn36V3h4eH//wL89nru7u7++536+vn///+63Ak7AAAAQHRSTlMADBQhMkFR7maevtOOdYKw/evE/dn+7P4B/u3//wL///8EAv8JJhn/NUkLXXMEjf+fxLL/0uD/9ev/Afz//v//QCpS6AAABixJREFUWIWtVm13orwWHRQUFEXFkCcmQ+JEi7Uv2KaTMTbF//+v7olga2fUzqx19wdXQLJzzj5v+fbtLHa73ffdbjFfP6zX6/l88fADHnfnv/1j73yxWN8sl6vV7QlWq+Xy5maxmH+/vvu/h/XN6vb+cfP89PLy8wQvL0/Pm8f729VysbhiyW6xvH9+2W5/OdTbAAeqw6vt9uX5frW+bMXi9nn79vb66+X58f7O2Q2GO2fAm7v7R6B+fXvbPt1dtuFm81pVb7+e71bLm8UaFFzsHh4eFvPFGmS5Wd1tfrn/n5bziwSPr28VWPC0uQcL6vNrG2oTfsLf1esVgvVqA98AXl+324NwNZ5efm63r/U/2+crLnxb39zeb55+wsfn4DR8vFuuf1zcD3GcLyCOYO5mAwdDAA54AlM2EEWnzZUYHDm+PzjJbmr9ayxdGq3Xi4e/zMaaaPdjN68BifzfP+z8/8LzjqtW27v24Xm0gkHHa1bDKPjn0/1Bbxy13bIdTrJx+I8meEE0ZmwSuFU85TIbtP5hMyBIMmGKLPS8TpJJo7L4bwlafjiM42EyK2ylSdQJe0jCCie+9zdOgFy9aYazMZbGGkW7/X4qbGU17ibDztehaA8mGS+UylEuOKMUpwQhqUsp0CjNplFw3Q/PjzOhbFUpkiKMKRey0CXDBGOMcC7FbBJeZfAj5/i+0hxTUShjD1AM8VIppY3VfHotmof9+6oyUhRloWBpykLKQpBcgRNCFNrwiX9xf2uQSbvf763WWklZWlPkhOY5zzGilHGeE65VNrhkghdMuNsPJlRGKWvLnORSuVgISoW21ggITV4n5zkD4pmq9jWqam8LSqSp6ietD9SaciOSSwT+BOK9P6IqCC1tzfUOmzMtJxcIvM60PNlfElI2x3+8tJyqixZ44cx8nGUYKurzy8I0FCAuJ2V+kWBwQlBJxE2zAukPDCCKAIJZdCGVvOEJgWb46I+RhIG41UEUQYrZ8GsC+BjVEXVrWzAJBFbmpXUEnTN54AWd1sGFo7ccFbWCCvIJfK+cgrqQjBbZudbWjnqdVpipqpFcM6Jr+/O0WbnAoDSlcnoulf1eN/IDyANrDxQK57UHmoyQes+MdDSi4mwtBBM0HvjxzBh10EFhXueUFZS/K6M4w4yfzSOoAtILOllppGoIamfAcciCZmlUCaV1Ng38iZRZHE6lFfLgAhFOto8MtK4yoSIxIclZDRJh+DQZAwE3oKSmDKqwOgbSlFJyhBk0uBSN4zMmtONZIVB3xCQjsihKaImECrO3B5LKaKUEYkUpEJFne1JrOEYQoxQ5QPfjHNEcMliVjRRgFEOEYSytJknwe3OG0YFpLmQDAX0IC6Wt4fJdB6slzzkUmKXjSRJ+dsNPWFm77HLeGi0JovBxreWplPBoMMrZZzdacVa6HKya4slFwRAWGuZSru3vKFBKRX4aCy+YQuUYVecepI7ggmMCxWAFePY78CiFCZGFJyEYOgOKun+4tqdlziEIrqtLhlNMaAOCUpAaYbBxNjxJwwRrOKxw/gMRlpCynDKIoksBAYPNNNA5lgxBReZ8Fn8QdHrE7LVwHdkaaEUCMj5nuTB1Q8LlR5+DngocvMjzPwiUKN1IK8ECkVPJGOV1SxRYvRNomhuOSlMylp244EfQCBwBzFQXOl6WEkNG1kPmMwG3EkkjCJ2eiNgKpwKGjtNASWtzIgSBoin3RwuqI8ACqxmFOYU/lVQ7zmTJealhhpWmAK1hmItjVJEoj5CYKi1h7NPx5wHpR9Msg3ARAvlO4SYBdwHdtDFyeN8AqGezbJxNh59T2fM7wziKoqSfEgrfUdYMRSDgoviAZGkyGAzCzh8V7bVa7XbbH2aFdjD2vYZcl/yAwnHbu3zX+t6ZCn0VxRe3xXY8rp0FR2YN4IE2EoD/0eX7SS1nArWajhBNe/GwRjImUEAjzFA/Hob+F/c8GE+lHPcxB1O9GkGPFLTXmxUz5/4X2z0Pkor2ozHuD/wGAbg1HYRTOoXxd5WgHYSDYdJFo26vO+r2e0f04SlJ4CeC+F1zwR9EvX6/exH9fi+JgysEXjvodMLBAG7asUurd7jnIaRP2An834L4P3Yyew77MYJbAAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 26000,
            actualAp: 3100,
            actualDps: 2268.3,
            magnification: "200%",
            count: "5",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "73.3-73.3s",
            delayFrames: "2,200-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 26000,
            actualAp: 3100,
            actualDps: 2268.3,
            magnification: "200%",
            count: "0",
            spawnTime: "97.3s",
            spawnTimeFrames: "2,920f",
            delay: "73.3-73.3s",
            delayFrames: "2,200-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 26000,
            actualAp: 3100,
            actualDps: 2268.3,
            magnification: "200%",
            count: "0",
            spawnTime: "98.0s",
            spawnTimeFrames: "2,940f",
            delay: "73.3-73.3s",
            delayFrames: "2,200-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 26000,
            actualAp: 3100,
            actualDps: 2268.3,
            magnification: "200%",
            count: "0",
            spawnTime: "98.7s",
            spawnTimeFrames: "2,960f",
            delay: "73.3-73.3s",
            delayFrames: "2,200-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "034",
          enemyName: "コアラッキョ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 1400,
            dps: 700.0,
            speed: 7,
            range: 200,
            rangeType: "範囲",
            kbLevel: 5,
            money: 900,
            freq: 60,
            foreswing: 21,
            backswing: 9,
            tba: 20
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 2800,
            actualDps: 1400.0,
            magnification: "200%",
            count: "1",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 160000,
            actualAp: 13000,
            actualDps: 3513.51,
            magnification: "100%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "100.0-100.0s",
            delayFrames: "3,000-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 25,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "怒りと闘争心",
      baseHp: 680000,
      width: 4500,
      enemyLimit: 6,
      requiredCost: 85,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 120, 140, 120],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "161500",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 80000,
            actualAp: 24000,
            actualDps: 6206.88,
            magnification: "800%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 80000,
            actualAp: 24000,
            actualDps: 6206.88,
            magnification: "800%",
            count: "0",
            spawnTime: "40.7s",
            spawnTimeFrames: "1,220f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 80000,
            actualAp: 24000,
            actualDps: 6206.88,
            magnification: "800%",
            count: "0",
            spawnTime: "41.3s",
            spawnTimeFrames: "1,240f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "149",
          enemyName: "松 黒蔵",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgIDAwMDAwMDAwMEBAQEBAQFBQUFBQUGBgYGBgYICAgKCgoLCwsLCwsMDAwqAAENDQ0ODg4PDw8REREVFRUWFhYWFhYWFhYaGhocHBxdAAAgICAgICAjIyMlJSUnJycrKyuSAAAwMDA8PDw/Pz9DQ0PpAABQUFBdXV1ubm6Dg4ONjY2ZmZmfn5/////Ui4yiAAAAQHRSTlMABgsSGB8mMjj/Pkdr4e/0WWFPcXub54X/j6GVuKv/0f/E2f/g/+fv+v/z//n///z//v///wTu//7///////8AcYjN6wAAA/ZJREFUWIXtVmt3qjoQ9VmrfSlajaihGIPCISFpek6ttj3//1/dgQAGhNa17pfzobNalwszmz2TPY/G3/9pjR+AH4AfgH8F4GtrXVnj+QJsfjvoNH//1ue/88qtbdnrIJSxRaHnLkbd5qWusTV7tieV5D6lhDIhVRQ4i8HlEE3LCRUjqK8NYcqVijazq0v9hxspSL9giEoVuqPOhf7CR/2yISxksLRaX/u22+3Wzbr8+hML6Y2/QuiOl667cnxa6Q+GhfJG9bm8XgYKksVJNQGNINeD2vcvI8l8n0np1wIAQrRqn4fevbZux4uAYx1qVQ4zIyoYnr164njBbrfjGXXM6iEQk8tu0b+3CiRwp4TlTohwhuuCKFO4WkYCx66EmS+idVeBRPRoXkRrEaZ0SfGlKP8oGVWuKcgbj6enqKg4/uv5qfyIqE3PIPAYZVypPAd4en19PotBbm8M8WxkRpzIcwGh59dfhQcYISR2o9y/PQ/zyJEgFRSeCs8QxoTKaJwHMPbUKduU1esnA4iZ8mieXkNz5HEDADP/O4A+hhiYXKUl2XOkL427q8pCiQHxfWhPri6H5ixkvjAA8LcAMQHElKPF3FszQnmRwfdZiAFSIYyn03sTAJWVUIEGMVCmPN0TuoPr4YafTpUBEK7ojGC+CnIldZ16AExqatpsCQWAkpgJN1KKjVRRFeZKulrzwi0YNYwMVUDiGMrnDFHM7lQCIH7ygWmE4jTo2CiX2KcpBFIyWFl6WBYB+pjnVBGP2eBY3T5nQgkE/PSPRIr94Y87SXNQ6CJE0CyApDtgRvu+FG/H96MCoOyQeDnsvUnKoCA+cNCAmcQBkfPDx+fn54FkQoXhsHVng5YGKGmHJNKGzk7yB1y9g//nxx6nDzGXdrYudB1ZbJ5IQIPm3KgQTNUxZvDxrrKZx2VWz42OW64fDKuAKrZXf384fgDGca/PInkCaC8lLckNYVIeCeRl/3Y4vO1f0hAMITVXwq+bIAVQRON/XaxUGV11FtXO8nOYRBpxmpanwTAKqqZBpRE9ODBRnmW0dU9dEEJiVEsG8cg2BnzHVUkWceUUOxnUti5u5EvHGEyNlq3XCcLIlxAoVSz4b4aFJWcc6iQQ7kOOcTI74r+EV3yl0EYxGKfQn0ChkVP0b/Q2aRIw1AgsCYRQ2E+p7pWIciGFgH0XVh+MfS629nVpyWqv0pUI4/UWnOEkFNTD/Y5ohOkaMONmThjbOvbwfEHKLpKEE1uLCuNHC7otSQKzrWly+5g6c6tbtSReObpy0G4+22ml7GYDy0mSjnb2cJ2kD+8mneodszVz7qb3YA/T6UNq07u7+/xr/A1+nrqPt8VV+T8z6abQHBPCGgAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 460000,
            ap: 16000,
            dps: 2566.84,
            speed: 3,
            range: 410,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1200,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 460000,
            actualAp: 16000,
            actualDps: 2566.84,
            magnification: "100%",
            count: "2",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "60.0-60.0s",
            delayFrames: "1,800-1,800f",
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
            actualHp: 6000,
            actualAp: 900,
            actualDps: 1687.5,
            magnification: "50%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
            actualHp: 6000,
            actualAp: 900,
            actualDps: 1687.5,
            magnification: "50%",
            count: "30",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "2.0-5.0s",
            delayFrames: "60-150f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "149",
          enemyName: "松 黒蔵",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgIDAwMDAwMDAwMEBAQEBAQFBQUFBQUGBgYGBgYICAgKCgoLCwsLCwsMDAwqAAENDQ0ODg4PDw8REREVFRUWFhYWFhYWFhYaGhocHBxdAAAgICAgICAjIyMlJSUnJycrKyuSAAAwMDA8PDw/Pz9DQ0PpAABQUFBdXV1ubm6Dg4ONjY2ZmZmfn5/////Ui4yiAAAAQHRSTlMABgsSGB8mMjj/Pkdr4e/0WWFPcXub54X/j6GVuKv/0f/E2f/g/+fv+v/z//n///z//v///wTu//7///////8AcYjN6wAAA/ZJREFUWIXtVmt3qjoQ9VmrfSlajaihGIPCISFpek6ttj3//1/dgQAGhNa17pfzobNalwszmz2TPY/G3/9pjR+AH4AfgH8F4GtrXVnj+QJsfjvoNH//1ue/88qtbdnrIJSxRaHnLkbd5qWusTV7tieV5D6lhDIhVRQ4i8HlEE3LCRUjqK8NYcqVijazq0v9hxspSL9giEoVuqPOhf7CR/2yISxksLRaX/u22+3Wzbr8+hML6Y2/QuiOl667cnxa6Q+GhfJG9bm8XgYKksVJNQGNINeD2vcvI8l8n0np1wIAQrRqn4fevbZux4uAYx1qVQ4zIyoYnr164njBbrfjGXXM6iEQk8tu0b+3CiRwp4TlTohwhuuCKFO4WkYCx66EmS+idVeBRPRoXkRrEaZ0SfGlKP8oGVWuKcgbj6enqKg4/uv5qfyIqE3PIPAYZVypPAd4en19PotBbm8M8WxkRpzIcwGh59dfhQcYISR2o9y/PQ/zyJEgFRSeCs8QxoTKaJwHMPbUKduU1esnA4iZ8mieXkNz5HEDADP/O4A+hhiYXKUl2XOkL427q8pCiQHxfWhPri6H5ixkvjAA8LcAMQHElKPF3FszQnmRwfdZiAFSIYyn03sTAJWVUIEGMVCmPN0TuoPr4YafTpUBEK7ojGC+CnIldZ16AExqatpsCQWAkpgJN1KKjVRRFeZKulrzwi0YNYwMVUDiGMrnDFHM7lQCIH7ygWmE4jTo2CiX2KcpBFIyWFl6WBYB+pjnVBGP2eBY3T5nQgkE/PSPRIr94Y87SXNQ6CJE0CyApDtgRvu+FG/H96MCoOyQeDnsvUnKoCA+cNCAmcQBkfPDx+fn54FkQoXhsHVng5YGKGmHJNKGzk7yB1y9g//nxx6nDzGXdrYudB1ZbJ5IQIPm3KgQTNUxZvDxrrKZx2VWz42OW64fDKuAKrZXf384fgDGca/PInkCaC8lLckNYVIeCeRl/3Y4vO1f0hAMITVXwq+bIAVQRON/XaxUGV11FtXO8nOYRBpxmpanwTAKqqZBpRE9ODBRnmW0dU9dEEJiVEsG8cg2BnzHVUkWceUUOxnUti5u5EvHGEyNlq3XCcLIlxAoVSz4b4aFJWcc6iQQ7kOOcTI74r+EV3yl0EYxGKfQn0ChkVP0b/Q2aRIw1AgsCYRQ2E+p7pWIciGFgH0XVh+MfS629nVpyWqv0pUI4/UWnOEkFNTD/Y5ohOkaMONmThjbOvbwfEHKLpKEE1uLCuNHC7otSQKzrWly+5g6c6tbtSReObpy0G4+22ml7GYDy0mSjnb2cJ2kD+8mneodszVz7qb3YA/T6UNq07u7+/xr/A1+nrqPt8VV+T8z6abQHBPCGgAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 460000,
            ap: 16000,
            dps: 2566.84,
            speed: 3,
            range: 410,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1200,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 460000,
            actualAp: 16000,
            actualDps: 2566.84,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "149",
          enemyName: "松 黒蔵",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgIDAwMDAwMDAwMEBAQEBAQFBQUFBQUGBgYGBgYICAgKCgoLCwsLCwsMDAwqAAENDQ0ODg4PDw8REREVFRUWFhYWFhYWFhYaGhocHBxdAAAgICAgICAjIyMlJSUnJycrKyuSAAAwMDA8PDw/Pz9DQ0PpAABQUFBdXV1ubm6Dg4ONjY2ZmZmfn5/////Ui4yiAAAAQHRSTlMABgsSGB8mMjj/Pkdr4e/0WWFPcXub54X/j6GVuKv/0f/E2f/g/+fv+v/z//n///z//v///wTu//7///////8AcYjN6wAAA/ZJREFUWIXtVmt3qjoQ9VmrfSlajaihGIPCISFpek6ttj3//1/dgQAGhNa17pfzobNalwszmz2TPY/G3/9pjR+AH4AfgH8F4GtrXVnj+QJsfjvoNH//1ue/88qtbdnrIJSxRaHnLkbd5qWusTV7tieV5D6lhDIhVRQ4i8HlEE3LCRUjqK8NYcqVijazq0v9hxspSL9giEoVuqPOhf7CR/2yISxksLRaX/u22+3Wzbr8+hML6Y2/QuiOl667cnxa6Q+GhfJG9bm8XgYKksVJNQGNINeD2vcvI8l8n0np1wIAQrRqn4fevbZux4uAYx1qVQ4zIyoYnr164njBbrfjGXXM6iEQk8tu0b+3CiRwp4TlTohwhuuCKFO4WkYCx66EmS+idVeBRPRoXkRrEaZ0SfGlKP8oGVWuKcgbj6enqKg4/uv5qfyIqE3PIPAYZVypPAd4en19PotBbm8M8WxkRpzIcwGh59dfhQcYISR2o9y/PQ/zyJEgFRSeCs8QxoTKaJwHMPbUKduU1esnA4iZ8mieXkNz5HEDADP/O4A+hhiYXKUl2XOkL427q8pCiQHxfWhPri6H5ixkvjAA8LcAMQHElKPF3FszQnmRwfdZiAFSIYyn03sTAJWVUIEGMVCmPN0TuoPr4YafTpUBEK7ojGC+CnIldZ16AExqatpsCQWAkpgJN1KKjVRRFeZKulrzwi0YNYwMVUDiGMrnDFHM7lQCIH7ygWmE4jTo2CiX2KcpBFIyWFl6WBYB+pjnVBGP2eBY3T5nQgkE/PSPRIr94Y87SXNQ6CJE0CyApDtgRvu+FG/H96MCoOyQeDnsvUnKoCA+cNCAmcQBkfPDx+fn54FkQoXhsHVng5YGKGmHJNKGzk7yB1y9g//nxx6nDzGXdrYudB1ZbJ5IQIPm3KgQTNUxZvDxrrKZx2VWz42OW64fDKuAKrZXf384fgDGca/PInkCaC8lLckNYVIeCeRl/3Y4vO1f0hAMITVXwq+bIAVQRON/XaxUGV11FtXO8nOYRBpxmpanwTAKqqZBpRE9ODBRnmW0dU9dEEJiVEsG8cg2BnzHVUkWceUUOxnUti5u5EvHGEyNlq3XCcLIlxAoVSz4b4aFJWcc6iQQ7kOOcTI74r+EV3yl0EYxGKfQn0ChkVP0b/Q2aRIw1AgsCYRQ2E+p7pWIciGFgH0XVh+MfS629nVpyWqv0pUI4/UWnOEkFNTD/Y5ohOkaMONmThjbOvbwfEHKLpKEE1uLCuNHC7otSQKzrWly+5g6c6tbtSReObpy0G4+22ml7GYDy0mSjnb2cJ2kD+8mneodszVz7qb3YA/T6UNq07u7+/xr/A1+nrqPt8VV+T8z6abQHBPCGgAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 460000,
            ap: 16000,
            dps: 2566.84,
            speed: 3,
            range: 410,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1200,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 460000,
            actualAp: 16000,
            actualDps: 2566.84,
            magnification: "100%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "149",
          enemyName: "松 黒蔵",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgIDAwMDAwMDAwMEBAQEBAQFBQUFBQUGBgYGBgYICAgKCgoLCwsLCwsMDAwqAAENDQ0ODg4PDw8REREVFRUWFhYWFhYWFhYaGhocHBxdAAAgICAgICAjIyMlJSUnJycrKyuSAAAwMDA8PDw/Pz9DQ0PpAABQUFBdXV1ubm6Dg4ONjY2ZmZmfn5/////Ui4yiAAAAQHRSTlMABgsSGB8mMjj/Pkdr4e/0WWFPcXub54X/j6GVuKv/0f/E2f/g/+fv+v/z//n///z//v///wTu//7///////8AcYjN6wAAA/ZJREFUWIXtVmt3qjoQ9VmrfSlajaihGIPCISFpek6ttj3//1/dgQAGhNa17pfzobNalwszmz2TPY/G3/9pjR+AH4AfgH8F4GtrXVnj+QJsfjvoNH//1ue/88qtbdnrIJSxRaHnLkbd5qWusTV7tieV5D6lhDIhVRQ4i8HlEE3LCRUjqK8NYcqVijazq0v9hxspSL9giEoVuqPOhf7CR/2yISxksLRaX/u22+3Wzbr8+hML6Y2/QuiOl667cnxa6Q+GhfJG9bm8XgYKksVJNQGNINeD2vcvI8l8n0np1wIAQrRqn4fevbZux4uAYx1qVQ4zIyoYnr164njBbrfjGXXM6iEQk8tu0b+3CiRwp4TlTohwhuuCKFO4WkYCx66EmS+idVeBRPRoXkRrEaZ0SfGlKP8oGVWuKcgbj6enqKg4/uv5qfyIqE3PIPAYZVypPAd4en19PotBbm8M8WxkRpzIcwGh59dfhQcYISR2o9y/PQ/zyJEgFRSeCs8QxoTKaJwHMPbUKduU1esnA4iZ8mieXkNz5HEDADP/O4A+hhiYXKUl2XOkL427q8pCiQHxfWhPri6H5ixkvjAA8LcAMQHElKPF3FszQnmRwfdZiAFSIYyn03sTAJWVUIEGMVCmPN0TuoPr4YafTpUBEK7ojGC+CnIldZ16AExqatpsCQWAkpgJN1KKjVRRFeZKulrzwi0YNYwMVUDiGMrnDFHM7lQCIH7ygWmE4jTo2CiX2KcpBFIyWFl6WBYB+pjnVBGP2eBY3T5nQgkE/PSPRIr94Y87SXNQ6CJE0CyApDtgRvu+FG/H96MCoOyQeDnsvUnKoCA+cNCAmcQBkfPDx+fn54FkQoXhsHVng5YGKGmHJNKGzk7yB1y9g//nxx6nDzGXdrYudB1ZbJ5IQIPm3KgQTNUxZvDxrrKZx2VWz42OW64fDKuAKrZXf384fgDGca/PInkCaC8lLckNYVIeCeRl/3Y4vO1f0hAMITVXwq+bIAVQRON/XaxUGV11FtXO8nOYRBpxmpanwTAKqqZBpRE9ODBRnmW0dU9dEEJiVEsG8cg2BnzHVUkWceUUOxnUti5u5EvHGEyNlq3XCcLIlxAoVSz4b4aFJWcc6iQQ7kOOcTI74r+EV3yl0EYxGKfQn0ChkVP0b/Q2aRIw1AgsCYRQ2E+p7pWIciGFgH0XVh+MfS629nVpyWqv0pUI4/UWnOEkFNTD/Y5ohOkaMONmThjbOvbwfEHKLpKEE1uLCuNHC7otSQKzrWly+5g6c6tbtSReObpy0G4+22ml7GYDy0mSjnb2cJ2kD+8mneodszVz7qb3YA/T6UNq07u7+/xr/A1+nrqPt8VV+T8z6abQHBPCGgAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 460000,
            ap: 16000,
            dps: 2566.84,
            speed: 3,
            range: 410,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1200,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 460000,
            actualAp: 16000,
            actualDps: 2566.84,
            magnification: "100%",
            count: "1",
            spawnTime: "4.0s",
            spawnTimeFrames: "120f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
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
            actualHp: 6000,
            actualAp: 900,
            actualDps: 1687.5,
            magnification: "50%",
            count: "3",
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
            actualHp: 150000,
            actualAp: 9000,
            actualDps: 11739.0,
            magnification: "6000%",
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
            actualHp: 150000,
            actualAp: 9000,
            actualDps: 11739.0,
            magnification: "6000%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
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
            actualHp: 150000,
            actualAp: 9000,
            actualDps: 11739.0,
            magnification: "6000%",
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
      stageId: 2,
      stageName: "忍び寄る戦慄の詩",
      baseHp: 770000,
      width: 4400,
      enemyLimit: 12,
      requiredCost: 85,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 120, 140, 120],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "161500",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "007",
          enemyName: "メェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 28.3,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 500,
            actualDps: 283.0,
            magnification: "1000%",
            count: "5",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
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
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "007",
          enemyName: "メェメェ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgIDAwMDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUHBwcHBwcJCQkLCwsLCwsLCwsLCwsMDAwNDQ0bGxscHBwgICAhISEmJiYqKiorKys4ODg4ODg7OztGRkZHR0dQUFBXV1dZWVlgYGBoaGhra2t0dHR9fX2KioqTk5Obm5uioqKqqqq0tLS+vr7GxsbOzs7W1tbc3Nzi4uLo6Ojv7+/29vb7+/v+/v7////////5H8A1AAAAQHRSTlMABgwUGyUvN0PkqcvXUW21Yn52h5Se7MP8q7b+xOrP/tf+7//j///v//L///7///7//////////////////wD/cVkJCgAABqpJREFUWIXtV9l2qzoSDZ6dxEMcO54DBIOxkJiEBBpo/v+vurCT4ylJn7Xuy33oerC9sGqrVLVrq3j4zz+0h/8D/BsA/sqMRrvT7bSbxsNDo9Vutxp/5/ZljfbgZWnt3kfTcW8wmS2Xs8mgbfy1u9EejqxDRKlvB/v35w8cReRgLcet3yGMo8GP1ni5NcNCldwnRZ54Nim0FBneTrs/IxjN7mAMNui2ulMLp16oqjJ1aVmpInRCWQpK7O2s/XPQr5vdAWy3mW0OVAqfqEoSVFRVpYvASRX1URjtJs1v3RudwXRLWCFEkaE1zlV1AkiorirFiWsHQrBCqeS9+51/c7jZ7XFewm4qse0MvGSAlS6VqrRKPS9OENVaSsX3w+/K2ZkjJhS4VSXzXRdlqlK03ryOX4aEKUmIEhEO4/3r/RmMRm/u58fVpcB+RpEH25VldTItJCQyDgoZB75nTu8Amr3J6gPx42KVuKnSHMdQAUA4YcC3Eili8FkwvGzdpm/yvg+ZOMYLdccC1kuhBU2o/Iyh5FHgO1mly0rHq2sAYzD6iIExp71UZCMqNSCkgeO4qT491jTAyEk1ZOkOoDF584uv01a57/leQLWIvCBJ60KeIlBCMj/mYSoknl3noP1oJ+orUg3Ey5MgEpEbFapARAKH4DRCa828iGM3SG7KaIz7Dv8TgCQQDVQ784jgMXEQLbIgiIIgjUNkhlKkvr25JlJrtvDyixMA/3UlMWIJHAVjhFwvcD2ghuuaTixE+nFDg/bIyfSXf5nZJIcUci+MXcyELDIMTxjPKeMUgBKC3ns3NbD+ZACSnaxtH6cycyPfT7g68spjQKmy1KrIKSfrGxp1VnXZv/xV7EYhwnnmxshx/USWihG7LgXwEogFmfwYX+lBY7Jn5TkAFflCiVwxN2Y0xV6ieOA5XlEplp72KXaDK4DuHPPzCUoAAEroSgSBKEtBUC4Zi72s5J4ZHVtN7K8BBn07yC9CSFwGh4WmdxOpVOozmasMNInZ60jV6+RhcskCY/y2Ds40hCo4cU5DnBXEw1EIbZEBHwFAxuFxn1KRVe8ihNbUDvM/Rax54DnAZUyViBF8M10Q13GyEnRFf3bVYXkhq63pNmCXACq0Cc1htYZcFgUHIU1sX1ys0Hw/PTeT0RuZ8SVAmUHmy1qMlJaKoURp6kaqukRIrXMeWxOLXOSwzjJGeampH4GOMiBRyhC6XgHU+qMozYkVi6t/Kw1tVGR+wKFyscoD13eprq6X0K8QjMF7LG/+rSUN+4jVXCBSJeaaqPJmiTh80rk1w+L2z1qCbTsGgZYgrom/hhLcLUlODQV9dBvd6YyR64F6x77puIEbyGvnWqHhajjVcJ+r8h6ilFmEfbAgpLzWh+v4w0TBGWqA3rMD2lXdRVgrmyw4L6QuBYr01QItiRslzuORxv3Fwgeq3ANc7IfITQRljkGbjgDd0WJho1h973oy0DZx80jLjOLZqQi2s1jgu0JerU68C72ARgdNgSuWvNZaMrYS6pjfFeIiYFBHeU5TKTkFS/bjug02RBbIgUv0twhk6KaylkTYvZY8D+yo7I3B6pBr7q7Jr0eoc+aRjDN2TLbK0gzMBSZ2R/sM1GK9Tn5NYo0Qea7ngsjXlNYljBzHXujMPvDBel7Y7Ncy1ggqpykl5kfEJUwsoNNHQTA6k+nr+PUNFXe9cg8B+6bb6WqHozSj8f5TkoxGozGeg/z9T4AaA/qnM56u3i1r89I5S1pzYCGm6jKd0nx2uAVIrS7MkTA6d9tXN1N7tMVZPTVwBjqoT0j1h7w+mf5huIPpbraNslwW2CFxQgspYFCEaUXGaX1Ll594mvurHwbUZnceED/wzMXbdmvDDOZhFOc59xEHgsCFyiGDcEdvJz/N+o3hDthgm2+vg5f+er1YrNfb3e7gmH6QKZZFAeMpMp9ffpyQH3pW7Hg07g+M9qNLoL2eX8bj1+l8sUAsjJEJzbt4HrZ+9H9oLaOUqWw7NozJoUiRM+8YRqM57pt24DrbPrS8v+n87P/QeD3AiMg/4JADi8FgvzlG216hOA6205dtIrLd+JfXDGO8h4G+8GYtcEq1Tk9DVGN4yJUg094mUjDZ/XIESEJWj1WjDgSDZcms3tdjYPCy/bIvzlfJtxF0N1EhcjzvtdvDHWWJNezU1lsRnqdWD26fAvrn+7eM+jVlMHlyEPLt/mg0enpbm+ai/3y0t7XjOG+jx77teebTsPf9KRq9l9njaD5/Ojn1r61+9PT0NJ+PHqfDKyb8F2E4dqTZA80gAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 28.3,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 500,
            actualDps: 283.0,
            magnification: "1000%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "33.3-50.0s",
            delayFrames: "1,000-1,500f",
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
            actualHp: 110000,
            actualAp: 3600,
            actualDps: 4000.0,
            magnification: "200%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "53.3-80.0s",
            delayFrames: "1,600-2,400f",
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
            actualHp: 80,
            actualAp: 200,
            actualDps: 333.33,
            magnification: "100%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "60.0-100.0s",
            delayFrames: "1,800-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 544500,
            actualAp: 3370,
            actualDps: 6741.0,
            magnification: "150%",
            count: "0",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "120.0-120.0s",
            delayFrames: "3,600-3,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 544500,
            actualAp: 3370,
            actualDps: 6741.0,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
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
            actualHp: 900000,
            actualAp: 30000,
            actualDps: 56250.0,
            magnification: "6000%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "056",
          enemyName: "メタルサイボーグ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 800,
            ap: 3200,
            dps: 16000.0,
            speed: 4,
            range: 80,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 6,
            foreswing: 3,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 2400,
            actualAp: 9600,
            actualDps: 48000.0,
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
      stageId: 3,
      stageName: "卑怯者の罠",
      baseHp: 666000,
      width: 5000,
      enemyLimit: 30,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 120, 140, 120],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "171000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
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
            actualHp: 7000,
            actualAp: 3000,
            actualDps: 5000.0,
            magnification: "10000%",
            count: "20",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.7-3.3s",
            delayFrames: "20-100f",
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
            actualHp: 7000,
            actualAp: 3000,
            actualDps: 5000.0,
            magnification: "10000%",
            count: "20",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.7-3.3s",
            delayFrames: "20-100f",
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
            actualHp: 7000,
            actualAp: 3000,
            actualDps: 5000.0,
            magnification: "10000%",
            count: "20",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.7-3.3s",
            delayFrames: "20-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 120000,
            actualAp: 3000,
            actualDps: 2727.27,
            magnification: "300%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "46.7-66.7s",
            delayFrames: "1,400-2,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 120000,
            actualAp: 3000,
            actualDps: 2727.27,
            magnification: "300%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "66.7-100.0s",
            delayFrames: "2,000-3,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 120000,
            actualAp: 3000,
            actualDps: 2727.27,
            magnification: "300%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "80.0-120.0s",
            delayFrames: "2,400-3,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "035",
          enemyName: "こぶへい",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEFBQULCwsMDAwNDQ0PDw8PDw8UFBQVFRUdHR0iIiImJiYpKSkpKSksLCw0NDQ4ODg4ODg9PT0+Pj4+Pj5FRUVISEhPT09WVlZXV1dgYGBkZGRra2txcXFxcXF0dHR+fn6CgoKDg4OFhYWGhoaNjY2VlZWfn5+goKCnp6eoqKi2tra3t7fBwcHCwsLKysrR0dHX19fd3d3m5ubv7+/39/f9/f3///9p6OITAAAAQHRSTlMAAwgPOHabp8RbFWojLrGERiY5WHWNSFfl/6hwz4W+l7XoxqPOvP7b8v7PwOfX/f/l8f7v/v/0/v79/v//////a8UyngAABFtJREFUWIWdVwtzsjoQLdJ+vaW09U1btagIikp4EyAP/v+/uklAq70zde+3zjjKJCdnT052w90dLIbj56Fh9ICj/xs9J/OOh4NjGX8JoC1ihGpG0qX5lwjGq49ZU4fZ4n9wMI3vweaG8jpBHyh2BtD52tPb2xnBKhpS+x8fYV27UIThvojtE8KsajJMECK8qRaw+T2HNDwefQOQLMlq3jTsAAMwA0I5sbUzQMPqHOWcl0cYgJXmGaNO551Z2YigOz8jeAWar9mEM8ZcvYMrmpo19Gub+OgTBGAcmMq3U3GY8rDmeDmL4vkLLINCUOZ83wGYAc/9cPWkT60XDUTAoVwiBMaZEEuSTx20uIxp2qiIOtforsjonNDtkCZQkU67By4TfCLYUdIGg2HEW4Bqpp1SEE9SkIv1/n7/VbfzG+oahj7q914U4onP7+u/fNXEz3hHIf1cTqJoNpWb0mALANB7i7k4ee18cXQQQZi6tqJUzyAAJ/0UAEvKpkzI7iglEAcR4AFhmW+AhmJBx0MJUQ+zMYDAOG2ug7OcnQQBiNhf1c1PBMLaHyy47YOe7bejecX4T6QKYGVzi1oAhsRhkJ+OhfwqRjfn31nIbx1AFVCrXVOqjeGQDJzdrp1DErE8D6n6k5UqKft2a9Pd7bZlUCVyTth6IsdiP/GqfzsD3V1vO9aZ/E7aLcmTevdu9wHVoOes162IZa4AyhbA8+b3oGKi2ZvPdlGcyF3I8hYgrPfAWjLbTrpF/TApojVSiuCE74Ft2dpOihYgp+vpwDyohMqEH4EAw+0k7gBkTxDdQQGEEA+oMDZfR8VaAMgSqqq7YMCgGhjL1U4dAtHXZFdqSxnOzi3qVlg7D3feUX1Rl9VYCuIAL1j9d18RYCHOZPnRFrWy8rlN3wqzrcc08SNbySarKU9IBamGcr4jE6A5Wi2nLWdZ4VhIC0hBv9OGrrhHNDVCm9FJdH1JGxqyaAgBmAZi13mJMnd4zrj3SYQNIMVMhBRM0EeXNzlzy5oqZJBipC5CFCXx+NIzSgNEMQhgGFDi0+Kqf+mizxBEDqC2qlkRQ5nop1eoe3LcFjOYDXp2VfvkerQ2Sl07A9rgbrCnCaLBFV8zCMYxoJ62y1kp8XC1uByuu/E4gh5GmUTmkSvbaHZuB6CrhYpBQHcJcS4XnOHNplxAX3e0GS49kloXOlpFvKIByMsyzANFIb3c92lBvKqGyigoFMSvL3U09yxDLAKrIMbnITt+UxaQ1MfXuvxKYVFRRC4pGw7BPk0hVzQV4paJkyvK05j5+Q+L/xKikLKwIo6pXTwRrSEdAXXsiUth6WfInZ3LkoD0M3x0pqAzpU2weD9CXu59nt4WRFWpMy9L3kcABE2oKK+onp97C70nQns5cnnp8fJw9bufjPv+0/PDwxxT0U5KLwnfXx9F/HlFTHQL6vt4NTF/42A+Pbz9eXx8/Vpv4zR6n8//6WK+2UdFsZsvJ8/31wD/AhUI/F5yx1mgAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 2637,
            dps: 1683.19,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 47,
            foreswing: 11,
            backswing: 36,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 5274,
            actualDps: 3366.38,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "040",
          enemyName: "ナカイくん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 4547,
            dps: 3327.07,
            speed: 25,
            range: 300,
            rangeType: "範囲",
            kbLevel: 20,
            money: 800,
            freq: 41,
            foreswing: 20,
            backswing: 21,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 9094,
            actualDps: 6654.14,
            magnification: "200%",
            count: "7",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "闇より生まれし宿敵",
      baseHp: 900000,
      width: 4200,
      enemyLimit: 4,
      requiredCost: 95,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 120, 140, 120],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "180500",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 200,
            actualDps: 400.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-80.0s",
            delayFrames: "1,200-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "117",
          enemyName: "カベわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgIDAwMDAwMDAwMDAwMDAwMFBQUFBQUGBgYGBgYHBwcHBwcICAgJCQkKCgoREREREREYGBgbGxsdHR0lJSUnJycpKSktLS0vLy80NDRERERERERFRUVSUlJUVFRVVVVZWVlbW1tgYGBqampzc3N9fX2GhoaJiYmQkJCfn5+pqam1tbW6urrBwcHIyMjQ0NDZ2dni4uLp6enw8PD29vb7+/v///9EYrlRAAAAQHRSTlMABg0YJMLa7oOOLDp8tNFqpERNWffhYJc6xKOCvOe2mNLA/PH/3f/v+P/f//7////z///+////////////////F9WOBQAAA2VJREFUWIWtlwtzqjoQxwtUa1Hr+9nqRQQUCWDCIwGS+P2/1Q2g7Tlz71GQ81dmFob9ze5ms0NeXu5K6co/9mgs33n1/ySpvf7y2/7U+q/1/OXx9rAfSKX/aH2AO7We/2R3JnCtFP7drZfEWreOvzTRUMbDXRH269pNOTFHdQDdLaSXS+kkzU3CL8mpMkBRVbWzDwkh0aEn7O4QYEJCc6DmUh7Frozfv3a7jW7l0rWd0Mb4sb96j9wX5t6PhMJcUalfbO/rLmC5Ns8xjDi/lBJGafLy4jy4C5B6+4gyFPGbe5LeUCxlxaNHgEN6+QXAkBuz0j90SX3AhSeeHeQEHlpe+kQElKUQ0dyKIKFFEWoAOI8BojQrblgMIK0ZAWf+1Ei+qzG1krop8ND2s+sa8tjNc3m8jFdArnzpyvgvLBF9nWasegQloLgygjG0bdtxAcoyDCsBGIEwzDgTGEbCABoggLoBLAiBWxHgAS/JcJ41ozQBtudYQepbAUbVUmApxjQoFi7PhCAII8oDK6qYAs+gH2a+K2rISzGRDoM28qxVJQCNE8pCC4blTi53c2D7aeJXXIU89AzZRjlXhAzdMLykZiOJWlr5ZBPC0Ahwxis30m0IQJDdWtlJntjO1HPp76jaAK8pwI5wodi1nkiBx5ZhO6UsvdiZNQEkiPFNgRXmM7oeQMy0bxEb8erz4FaD0Pc8zy/+AJCaMzGvPUH+TZDw+qsgGuhH/Ill/K/uASS5GUCeT+RGALU1VBoBJpuV2gjweTTHciPA+fypNAH8g+LdqBEgSEGv0wjA0HbRqAaMmP0GgPkhpXBzbNBIO0QTy3oeID6vofimarCZ5IEG7CaAF3m0mDVIIc9CWTQoYkFoNFD+DmCP0wSi9M968IkzX51OR8NyHNd1ncPpqiNwHRu4LjgeTubwHkCcdpbjLzd0rBDHznrUXea/uYYw1H2M0aa37D48/MmfZ4qMmGegdz2qqjvMA91JeaRVOXdJ81MKdY8mp7F0A8TksBCdjraVzp5LDR2GZhBpS7mUuoVgrQ5MfF48OrKJBBR11NJXnf7eWb1ftfjQ24tBb+Xs37uvinQ//m5n2JpNZ+322/Rt9nbVdPrWbrdn0+lHfzi4H4SkDt6H/Var9ZGrfVN+Ix62+sPO5DfAvzaVq9QtYqTsAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 460,
            dps: 205.97,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 460,
            actualDps: 205.97,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "46.7-66.7s",
            delayFrames: "1,400-2,000f",
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
            actualHp: 240000,
            actualAp: 8000,
            actualDps: 15000.0,
            magnification: "1600%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "049",
          enemyName: "赤井ブン太郎",
          icon: "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",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 400000,
            ap: 9287,
            dps: 8987.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 27861,
            actualDps: 26962.26,
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
        },
        {
          enemyId: "053",
          enemyName: "クロサワ監督",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAABAAEBAQEBAQEBAQEEAgIDAwMEBAQFBAQFBAQFBQUFBQUHBAQGBgYIBQUIBgYHBwcJCQkJCQkJCQkNCAgKCgoKCgonAQEsAQEPDw8eFhYaGhlMBgdZAQEcHBwdHR0hHR0fHx4gICAhICAiIiIjIyMjIyMkJCQkJCQkJCQlJSUlJSUmJiYnJyeUAAAwMDAxMTE2NjY2NjY6OjpJSUlhYWFtbW18fHx3iniDj4OZspq/v7/39/f////eEQSUAAAAQHRSTlMABtCZt9j/N/EeUPoWfFoPwv/nKkFn34qs/u3/Tv4o/x3NvvQN2Z4xWrHr/2d0Q4r//cXV5KYaRLiZ47L+6/8Avt53EQAAA/BJREFUWIXtVmtz4joMzYOEJE5InHcwvkDD2zxqoGW7d9v9///qyg4Q2AHCzP22U33opIl0LB0fSSi//6cp3wDfAN8A3wB/EUBlaqQqNy1aj25/uLbRannjrT+brXvbzRMIo80+VlR/MB24F4kMNmVZLspy1hivgudaXW53+/1241evovVgQ3G/jwsyuVNdbes9JvPemBKCcbcn3kTZuBwvsIkLjJHXmEHCTUwXDPdf+2bx4ivuakzgcIpNMJxGjQA9juEwsH5h4nA6feMEF6+vBREIOHAbAfwJNeVpwsJsRwVeUVAiXyyaSVTsyUIEVYbo8amKR0daG3Jw9OERAtNzMqbIJG0/EQ+m2tmiqgPXAJAEJslzAJBFTirWLhEAYPMsgOrNhxa+BMAiJTJ/hoMjRDsVxBFCjgwIKDIePA2gqBmCWMJIJYsKoIxrh/fD4f0hghsI4pnQNMZE1oJZzeL75+fnx+PmnJWiBtAVOcUTWrN4+Pr6+nwM4G5BBoSZMlzWQGndjYfPX7/+bRgPKy6yPlYAfxijw1k0iJMezKzR4efPg/34VqI9JE8Fi6RiAgylhoVQmmdZvt/l3uPm8ucgaXrBYt0jCMEX6t1PwJfzbMOEG5Y5VMJEYZC3tJbnJK38JXTuH25nk+V6umFCCbSWJBm3XdV3xcG+//Fj8Kj+FxiiCwYdRAXCsTtJ4J6rHnx8TB8REM0piACKp5RIDkQaZDHPRG2QxUhVHw9YNR5yTjlcvtBSxSMhtOwo6nT1tt29TJa9+whqNHvbcXEHDK5BSAFi4ToIG67Xmz0TT5TtV/cQ3GzHoXxInXAogIlKoK0Eo7Bd5JgUiHx1P4HlZAie4kwuqRBiIIyDMX4EgP0xeESBG/WWeSkRgASQMcSKNCQAIFBiNE9IdwJbAlwppZyTaswyLpVpYi3Pm+dTe0+rPmbkNFoZNWV/Ii+z4kYAf87NaxNrpl/04Sm1rF5jCWrC8VW87KwCF7Ix8sZFF7mio6/iKTn/gxq3hNqOnW5RXCLwI56gMZCr+p6gfdtvt9uZbl5tFspP8TBiMlU62bcB7ETvprGjXe5GE7PTssRWgDRbibNuKoeC+weO72hdhC1H7YSneFEKyOlEidXJkafGqWTCj1rd4J+69MgLUuFk2LDjri6B8lMKKIvDMOlYZth2O7mBTNQ5AyR5boFHYASgtGsAws+XYkQ5tkKEDCfXDXCvhe3rTmAi3dM1zfanxrWOyPkXA/I8uArLMLJER2aQZEKWfhQ7iRe0kGm1cg1ZQfBHvHlxKZYo07IsI7BMlCeeHkeK2/H0vBUEmmGkIZglDN02+Q180tQwtCBo5brn/AfXnaqT0JicDAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 200000,
            ap: 18763,
            dps: 1432.29,
            speed: 2,
            range: 700,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 393,
            foreswing: 104,
            backswing: 29,
            tba: 145
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 56289,
            actualDps: 4296.87,
            magnification: "300%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 5,
      stageName: "魚介類と血のにおい",
      baseHp: 750000,
      width: 6000,
      enemyLimit: 10,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 120, 140, 120],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "228000",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "1",
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
            actualHp: 600000,
            actualAp: 16000,
            actualDps: 1126.76,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
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
            actualHp: 26000,
            actualAp: 1600,
            actualDps: 2000.0,
            magnification: "2000%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
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
            actualHp: 40000,
            actualAp: 2500,
            actualDps: 2083.3,
            magnification: "1000%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "80.0-100.0s",
            delayFrames: "2,400-3,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 160000,
            actualAp: 13000,
            actualDps: 3513.51,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 25,
                duration_f: 60,
                duration_s: 2.0
            }
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
            actualHp: 160000,
            actualAp: 13000,
            actualDps: 3513.51,
            magnification: "100%",
            count: "1",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 25,
                duration_f: 60,
                duration_s: 2.0
            }
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
            actualHp: 160000,
            actualAp: 13000,
            actualDps: 3513.51,
            magnification: "100%",
            count: "1",
            spawnTime: "110.0s",
            spawnTimeFrames: "3,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 25,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "050",
          enemyName: "ブラックブンブン",
          icon: "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",
          traits: ["浮", "黒"],
          baseStats: {
            hp: 777777,
            ap: 5997,
            dps: 5803.55,
            speed: 16,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 3000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 777777,
            actualAp: 5997,
            actualDps: 5803.55,
            magnification: "100%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
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
            actualHp: 400000,
            actualAp: 4837,
            actualDps: 13191.82,
            magnification: "100%",
            count: "3",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
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
            count: "2",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "66.7-66.7s",
            delayFrames: "2,000-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 160000,
            actualAp: 13000,
            actualDps: 3513.51,
            magnification: "100%",
            count: "0",
            spawnTime: "166.7s",
            spawnTimeFrames: "5,000f",
            delay: "120.0-120.0s",
            delayFrames: "3,600-3,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 25,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        }]
    }
  ]
} as const;

export default e23Data;

