// Stage 1292 Data
import type { StageData } from '../../app/stage/types';

export const e1292Data: StageData = {
  eventId: 1292,
  eventName: "幼なじみからの本命チョコ",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 292,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "チョコもらえなかったの？",
      baseHp: 300000,
      width: 4200,
      enemyLimit: 6,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 1,
        magnifications: [100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "457",
          enemyName: "グミネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 1,
            dps: 0.04,
            speed: 12,
            range: 140,
            rangeType: "単体",
            kbLevel: 100000,
            money: 100,
            freq: 707,
            foreswing: 8,
            backswing: 10,
            tba: 350
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 3,
            actualDps: 0.12,
            magnification: "300%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
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
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
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
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
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
          enemyId: "457",
          enemyName: "グミネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 1,
            dps: 0.04,
            speed: 12,
            range: 140,
            rangeType: "単体",
            kbLevel: 100000,
            money: 100,
            freq: 707,
            foreswing: 8,
            backswing: 10,
            tba: 350
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 3,
            actualDps: 0.12,
            magnification: "300%",
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
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "じゃあこれ、あげてもいいよ",
      baseHp: 350000,
      width: 4200,
      enemyLimit: 4,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 1,
        magnifications: [100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "8.3s",
            spawnTimeFrames: "250f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            actualHp: 240000,
            actualAp: 19500,
            actualDps: 5270.27,
            magnification: "150%",
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
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
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
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "34.7s",
            spawnTimeFrames: "1,040f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            actualHp: 240000,
            actualAp: 19500,
            actualDps: 5270.27,
            magnification: "150%",
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
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
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "45.0s",
            spawnTimeFrames: "1,350f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "57.3s",
            spawnTimeFrames: "1,720f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            actualHp: 240000,
            actualAp: 19500,
            actualDps: 5270.27,
            magnification: "150%",
            count: "1",
            spawnTime: "65.0s",
            spawnTimeFrames: "1,950f",
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
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "77.3s",
            spawnTimeFrames: "2,320f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "85.0s",
            spawnTimeFrames: "2,550f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "548",
          enemyName: "ネコウエハースBIG",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUAAAAEAwMFAwRcOjthPD1yVEiLakmPbk2Pb06Ud2KskHDCqYjYwZzy3q3867/////9E7+5AAAAEHRSTlOPDeUFjfE2AJf9/v////8AQ3PICwAAAqNJREFUSImFlL9vEzEUx/MncOofQBSpf0B114EJIaaiSFSVMpQmYksoDGyhG2MFCDEVdLkWFgZyTjsgBSm+kKkDuSaZmoEq9l5S+18A/8gP+51Dfco9R/7ce1+/9+zcXzVeqVE/1PaZer9WKzkTOPio7ZtVwPNf2hE6XAG8n9aUo9EnN1DvMbXygv9wAPVadX9AvlVr1eq7n+2qGC9tYD9GKEYY4STGOJGTDxZwEI64PaY28BaPGCecMioNEebGAgKE5RolEqKUM4FZwCbCxHZAp8BDQug8BuVyAoAovkVDA+u18Rnjv8WPMFtDkCgNhH2vCKgi4wAP3UQ6oGwwJGQy5DSjoYVlAPnldXiipAAPx535JqaFz9IB1IDS2fYH7eZeT4aDmUxUojjdKbNShWcTFWOqs9A/4ZEK4aiF2ufVKW+qYBMAxFSncbwblkYODV1EdIw/jRANHRoQ5ky7EEOWHWqIOtSotyNRqG/2gpxAkbc2DGZ80TBqks3D/zVEqbGmDChWtNBAZxoyIYhMxMJBRkOUmlt0NUyf2puAGk77ZB5AR+Lsi63hQnW1sU8QIk7EcRSnks1MRmQjpuBkkUzbq1XtgHN4uoPjZFEld6KimGrt0oUOBoCEAhcQSI0MuE5WlMKGyRSLmcUiGaAVLhXISyijoRUvN+hMlGoYZnUVBGZ9sqpYDWy37KpEGQgI0b0wcsTVY1/FrZQY+3RoaHWI+TmFHsRFulwXtyyjE/LUAnZD1IzDZhiGR+IJj0ql0mMLCIKt7pNB+6Hv+8WbMrkS9r4JiP/3xO029iXA9/i1A9ikfXrub6z5xekWHUPA87yg1+6db3jeWvEyOLsUk7sA8CoPKtvSPtr2yl89ANzJFQrr4pFDvNd38vkcAPIFe+RmwD+c/ovDIonf+AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 999999,
            ap: 1,
            dps: 0.45,
            speed: 20,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1,
            freq: 67,
            foreswing: 12,
            backswing: 55,
            tba: 0
          },
          stageStats: {
            actualHp: 999999,
            actualAp: 1,
            actualDps: 0.45,
            magnification: "100%",
            count: "1",
            spawnTime: "94.0s",
            spawnTimeFrames: "2,820f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 125,
                omni_range: [-375, 125]
            },
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
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
            }
          }
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
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
      stageName: "作りすぎただけだから",
      baseHp: 400000,
      width: 4500,
      enemyLimit: 6,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 1,
        magnifications: [100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-1",
          limitText: "-1"
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
            spawnTime: "14.7s",
            spawnTimeFrames: "440f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 240000,
            actualAp: 19500,
            actualDps: 5270.27,
            magnification: "150%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
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
            actualHp: 240000,
            actualAp: 19500,
            actualDps: 5270.27,
            magnification: "150%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
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
            actualHp: 240000,
            actualAp: 19500,
            actualDps: 5270.27,
            magnification: "150%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
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
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1292Data;

