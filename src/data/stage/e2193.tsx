// Stage 2193 Data
import type { StageData } from '../../app/stage/types';

export const e2193Data: StageData = {
  eventId: 2193,
  eventName: "ストリートファイター VERY HARD",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 193,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "心の師匠 Lv.1",
      baseHp: 750000,
      width: 6000,
      enemyLimit: 6,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "54",
          treasureName: "キャッツアイ【伝説】",
          probability: "100",
          amount: "3",
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
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
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
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 108000,
            actualAp: 3600,
            actualDps: 2204.04,
            magnification: "1200%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMEBAQEBAQHBwcICAgPDw8QEBAQEBAREREUFBQYGBgjIyMkJCQlJSUpKSkqKioqKiotLS0wMDAwMDA1NTU5OTk7Ozs+Pj5ISEhRUVFRUVFaWlpjY2NkZGRtbW1vb29xcXF4eHh7e3uCgoKLi4uSkpKTk5OampqhoaGnp6esrKyysrK6urrLy8vS0tLZ2dng4ODn5+fv7+/19fX7+/v///9cRR0hAAAAQHRSTlMAAgYNFD+ousTNHyxIgjReR1FrkleOYph/n//GtO/ijrz+xdr//93///Pe/+///+////3///3+/v/+////////7j384wAAAgtJREFUWIXtmMmWmzAQRQ3C3R0PeO62Y7s9YIwCFpNAYhCl//+rgJOtcxCrLLgLDgveo6oo1REaDF6i6/UFDdHrJ/6NsZzoA229n2vd9PrSOo8HxiE6dQxhdGbBBplu4Q476bXZoyqsyWcA7IQ07VkPJdAmlZAedlwKd73enrZzxUyMcyZBeMdcQvz9YDx1l2oOo2shpcydBCoSl4xmhTvvYFB5dp7hIrVvOE+3SnVoUqgjIMSnviD2T5vx88RQMEBfaW3AIn6zU4gdx+Hh5XuqEsEuBilpwuwLkyX1mfAuRxWDhVtKCWGSxMSvJFQgM3ulkIK2DABkSTJCc5xCfS8hmKmsirkrpCz8jBTAcJZSkfFgraBvalDJ0ueklJWPMSYY//pUWpfjg19Wfuyz+mPaEcMJvbROQUd1y6CpnTdFTEBW2A6ZFz5mrV++2q7N8YEBhCmt26Gwo9CLvGN7gz0J3Os3BYhiGoIIPSHKqngs2hroM4uLnDpMcI95PMRNV0txbz9Z0NJKCsEcL3KwfSM5NAb5ddTaYIAmO+tBWRJ6DmHiqYd4ozIQNMOcbSxeVQKe8joAS3k2osU1Lv/KIVedSA26+WWFvKzDyGOrg77GmKz21t29n7em8lj+g4ZGY9McjzrKe3p6enp6enr+N57bm+GkYVjvcpDyTzgaTt/eP340fLy/TV+cA/wGYnBVeWpbJ8MAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 16600,
            actualAp: 2400,
            actualDps: 1636.36,
            magnification: "200%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMEBAQEBAQHBwcICAgPDw8QEBAQEBAREREUFBQYGBgjIyMkJCQlJSUpKSkqKioqKiotLS0wMDAwMDA1NTU5OTk7Ozs+Pj5ISEhRUVFRUVFaWlpjY2NkZGRtbW1vb29xcXF4eHh7e3uCgoKLi4uSkpKTk5OampqhoaGnp6esrKyysrK6urrLy8vS0tLZ2dng4ODn5+fv7+/19fX7+/v///9cRR0hAAAAQHRSTlMAAgYNFD+ousTNHyxIgjReR1FrkleOYph/n//GtO/ijrz+xdr//93///Pe/+///+////3///3+/v/+////////7j384wAAAgtJREFUWIXtmMmWmzAQRQ3C3R0PeO62Y7s9YIwCFpNAYhCl//+rgJOtcxCrLLgLDgveo6oo1REaDF6i6/UFDdHrJ/6NsZzoA229n2vd9PrSOo8HxiE6dQxhdGbBBplu4Q476bXZoyqsyWcA7IQ07VkPJdAmlZAedlwKd73enrZzxUyMcyZBeMdcQvz9YDx1l2oOo2shpcydBCoSl4xmhTvvYFB5dp7hIrVvOE+3SnVoUqgjIMSnviD2T5vx88RQMEBfaW3AIn6zU4gdx+Hh5XuqEsEuBilpwuwLkyX1mfAuRxWDhVtKCWGSxMSvJFQgM3ulkIK2DABkSTJCc5xCfS8hmKmsirkrpCz8jBTAcJZSkfFgraBvalDJ0ueklJWPMSYY//pUWpfjg19Wfuyz+mPaEcMJvbROQUd1y6CpnTdFTEBW2A6ZFz5mrV++2q7N8YEBhCmt26Gwo9CLvGN7gz0J3Os3BYhiGoIIPSHKqngs2hroM4uLnDpMcI95PMRNV0txbz9Z0NJKCsEcL3KwfSM5NAb5ddTaYIAmO+tBWRJ6DmHiqYd4ozIQNMOcbSxeVQKe8joAS3k2osU1Lv/KIVedSA26+WWFvKzDyGOrg77GmKz21t29n7em8lj+g4ZGY9McjzrKe3p6enp6enr+N57bm+GkYVjvcpDyTzgaTt/eP340fLy/TV+cA/wGYnBVeWpbJ8MAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 16600,
            actualAp: 2400,
            actualDps: 1636.36,
            magnification: "200%",
            count: "5",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-8.3s",
            delayFrames: "150-250f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "622",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 18000,
            dps: 4000.0,
            speed: 20,
            range: 200,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 135,
            foreswing: 6,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 27000,
            actualDps: 6000.0,
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
            "multi-hit": {
                hits: [6000, 6000, 6000],
                timings: [6, 14, 18]
            },
            "omni-strike": {
                standing_range: 350,
                omni_range: [-150, 350]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "480",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEBAQEBAQEBAQEBAQAEAwMGAwMGBQUKBgYJBwcOCggPDAwZDwwTEhAZDw0WEhESFho6CwsqGRUnIh87HBclJSZZFBQsKSU/KSJLKiJAOTSDHx5GQDdPRDlUSUCiJyZtSDdkUkNmXVN8WUDPODeOYkh4bmSdcVOIf3WnfV/3WVSbj3+9jWmqnYzNm3a3qpnYp4HDtqXls43Pw7Xwv5fb0MP7yaHj2c//06vr4tn17OP/9e///vv///9wbFOrAAAAQHRSTlMAZgAZJP80W05DcLZ+8c4ApY///96y7f//AMT//v8A3P////D+//////////////////////////////////8AlePLgAAABVFJREFUWIWll4l2okoQhokaATXuCiPNFVm0aaZpGmwWWe77v9UtzGQ7cyLM3EpyEkzzUfXXYin9+z9N+vhz8I1JT9OpPP7y0h8B1LmmaeuXqfqXAOVFe7UX9a8Ao5e19kYY/w1Afgb/XwFoKv0JYLwA+SaH/Vo/mfodsN72B0jqZDsZjg+mvoHHmyfzzviIoQsgyXtE2XGvv2xe1h6yA+N0Pm3W894eSFPLxhUnrmV5nufHeaAZ59Oz3FfEheqkqcVEQnkQ+pcozlNi+9v+aZSc2+0W00pQFgbhJYrSPI0DZdAboHg5AHAjEuwHkR3GaX6NnGE/AOg/3YfR9erRWhTE9y62HeRRdLGOu91q0gVQdntdN9Jr5Htu2RQ1vZjn88kIUx8zVmTuWzl/A5CWpj7f6igIWWBhhl1smz/BTlqAs6pKLr41HT0CKOZWUfZmBAqkoW1jrJ9P5zMALM7KuiHBLT089EDZj6StbkT5Nb7mV5sS4wSA81nHgmUN94AcPPRg9DRY6bP5JYzS9BqbmBi6eQLTKeNC+Gma366TxyKO9PnYifNbnqepbV90MGgDg3PO7BBeza+zx4ClrshRexA88HR9s4HvjU64oPgShEF8C+XHgPlGUv0oCKMo8KyNYRm2bSCXiJJiL06DMPR3jwHyFGphNnU826aF4I0fBllBeF0mRItvtzyOHOlxJb6KPBzPk6pukgrjoiBJ0zSCWvHtGsdBF+DNlokoGu6yJnFFyQImiGF7vucF+34A6SgEFZiVLGkSBFK2CbXzPM4vai+AQlhWuJS5rOLGxoR5dD79PPugwnXXz4O5hizLRQg6YqNDNf88mx6xoT79VS/AYvm8XsM4Xa8RMu6Ak2ljO73lx2EvwAyefr9/DW8KetsPpg4eXa/BqmugvEaAuLDW2EUEaUgDDU7mZmPst8fDTOoFmNFErBGlokCaS+4FjabK8H2qd85EktUcWYyXlaWhoqTQ2dbx4/ZOwNJhJQBw0TRY00hTZhW2rFl/gLTFGEMaYQwAQGOigfG23fUGSDuacIwQIoTAL/ABCsqd9F8wljSra4EsjSScgQuIZWXBD4O+ABUXVQ0jFMEg4EniYlHAZUXkvoBd1tR1XQkOMwBxnjXtJfT2tCdghKv2/qzMGHVUR4isbAG12ErdAFhKFjIDQFVVJWdkNVjyuirhqq4La9jLg8UKyqd9YlUwaBwVl/eAyrp0+gEGh3sE8MOP7UZzSF6vy6wnYMyaNoK65Mf7fFSIuDtUF04PDdoctMczAavBr7Qd2iy2hkd9AEMHHCi44O5b6aukvKehIeM+gJFbNzUXDM/fDy9/uYC3sx6AwYEXIskYXr0fHjpZGxa8v9DlY8CP1laEJlWSJe9nQUfoa9CF1A2fPQQs2n9NXMhbVjefJZtAMTSCtToMO0NQSNFA2TT8c/cuSVHCilA1YtIJGJF7FTXs1YPFPS4VViyWJTwTj1ec1qRj1aat+bIWLnY8yZqqEMxSuwDQPlWRJcnHDF3A18hJROtXnVF50QFQoXYzTt7rYHE3xU0yaKlGODupAzByWVJXHK+Gv0T4524zzMsaBn3HhgL2hBlUAmfu7rMKg5FFeUKRu+3cDw4soZRzao0+3z8YY0qx5fn2UwdgvMeWfSHE2n4FjJAzd+12y+oQURrOvTBA++VI+gIYTCYqLN1pOO3wQD1c4lsUfCmDtyg8WCBfF4TvAJKyvMCnC1iFotnvgEMKG3Aar34svgPIWytK4dNOmt6uc1l++jBZlhXZj8IoDMPdtx7IcxQEsI16mmZrz7+bbXvexTNe5sunT4D/AESQQ2+9B4m1AAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4000,
            dps: 1558.44,
            speed: 14,
            range: 380,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 77,
            foreswing: 16,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 6000,
            actualDps: 2337.66,
            magnification: "150%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-400, 600]
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "陸と空 Lv.1",
      baseHp: 800000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 160,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "50",
          treasureName: "キャッツアイ【EX】",
          probability: "100",
          amount: "5",
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
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "10",
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
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 530000,
            actualAp: 52000,
            actualDps: 29433.96,
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
            "critical": {
                chance: 15
            }
          }
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 12994,
            actualDps: 16948.7,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 530000,
            actualAp: 52000,
            actualDps: 29433.96,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 15
            }
          }
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 12994,
            actualDps: 16948.7,
            magnification: "200%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
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
          enemyId: "623",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5000,
            dps: 2027.03,
            speed: 22,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 74,
            foreswing: 15,
            backswing: 44,
            tba: 30
          },
          stageStats: {
            actualHp: 540000,
            actualAp: 7500,
            actualDps: 3040.55,
            magnification: "150%",
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
                standing_range: 400,
                omni_range: [-400, 400]
            },
            "savage-blow": {
                chance: 100,
                power: 1.2
            }
          }
        },
        {
          enemyId: "482",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 10500,
            dps: 2625.0,
            speed: 18,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 120,
            foreswing: 25,
            backswing: 33,
            tba: 44
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 15750,
            actualDps: 3937.5,
            magnification: "150%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [5250, 5250],
                timings: [25, 33]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "心の師匠 Lv.2",
      baseHp: 850000,
      width: 6000,
      enemyLimit: 6,
      requiredCost: 170,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "54",
          treasureName: "キャッツアイ【伝説】",
          probability: "100",
          amount: "3",
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
            actualHp: 300800,
            actualAp: 24440,
            actualDps: 6605.4,
            magnification: "188%",
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
            actualHp: 192100,
            actualAp: 15521,
            actualDps: 29103.15,
            magnification: "226%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
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
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 148500,
            actualAp: 4950,
            actualDps: 3030.55,
            magnification: "1650%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMEBAQEBAQHBwcICAgPDw8QEBAQEBAREREUFBQYGBgjIyMkJCQlJSUpKSkqKioqKiotLS0wMDAwMDA1NTU5OTk7Ozs+Pj5ISEhRUVFRUVFaWlpjY2NkZGRtbW1vb29xcXF4eHh7e3uCgoKLi4uSkpKTk5OampqhoaGnp6esrKyysrK6urrLy8vS0tLZ2dng4ODn5+fv7+/19fX7+/v///9cRR0hAAAAQHRSTlMAAgYNFD+ousTNHyxIgjReR1FrkleOYph/n//GtO/ijrz+xdr//93///Pe/+///+////3///3+/v/+////////7j384wAAAgtJREFUWIXtmMmWmzAQRQ3C3R0PeO62Y7s9YIwCFpNAYhCl//+rgJOtcxCrLLgLDgveo6oo1REaDF6i6/UFDdHrJ/6NsZzoA229n2vd9PrSOo8HxiE6dQxhdGbBBplu4Q476bXZoyqsyWcA7IQ07VkPJdAmlZAedlwKd73enrZzxUyMcyZBeMdcQvz9YDx1l2oOo2shpcydBCoSl4xmhTvvYFB5dp7hIrVvOE+3SnVoUqgjIMSnviD2T5vx88RQMEBfaW3AIn6zU4gdx+Hh5XuqEsEuBilpwuwLkyX1mfAuRxWDhVtKCWGSxMSvJFQgM3ulkIK2DABkSTJCc5xCfS8hmKmsirkrpCz8jBTAcJZSkfFgraBvalDJ0ueklJWPMSYY//pUWpfjg19Wfuyz+mPaEcMJvbROQUd1y6CpnTdFTEBW2A6ZFz5mrV++2q7N8YEBhCmt26Gwo9CLvGN7gz0J3Os3BYhiGoIIPSHKqngs2hroM4uLnDpMcI95PMRNV0txbz9Z0NJKCsEcL3KwfSM5NAb5ddTaYIAmO+tBWRJ6DmHiqYd4ozIQNMOcbSxeVQKe8joAS3k2osU1Lv/KIVedSA26+WWFvKzDyGOrg77GmKz21t29n7em8lj+g4ZGY9McjzrKe3p6enp6enr+N57bm+GkYVjvcpDyTzgaTt/eP340fLy/TV+cA/wGYnBVeWpbJ8MAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 20750,
            actualAp: 3000,
            actualDps: 2045.45,
            magnification: "250%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMEBAQEBAQHBwcICAgPDw8QEBAQEBAREREUFBQYGBgjIyMkJCQlJSUpKSkqKioqKiotLS0wMDAwMDA1NTU5OTk7Ozs+Pj5ISEhRUVFRUVFaWlpjY2NkZGRtbW1vb29xcXF4eHh7e3uCgoKLi4uSkpKTk5OampqhoaGnp6esrKyysrK6urrLy8vS0tLZ2dng4ODn5+fv7+/19fX7+/v///9cRR0hAAAAQHRSTlMAAgYNFD+ousTNHyxIgjReR1FrkleOYph/n//GtO/ijrz+xdr//93///Pe/+///+////3///3+/v/+////////7j384wAAAgtJREFUWIXtmMmWmzAQRQ3C3R0PeO62Y7s9YIwCFpNAYhCl//+rgJOtcxCrLLgLDgveo6oo1REaDF6i6/UFDdHrJ/6NsZzoA229n2vd9PrSOo8HxiE6dQxhdGbBBplu4Q476bXZoyqsyWcA7IQ07VkPJdAmlZAedlwKd73enrZzxUyMcyZBeMdcQvz9YDx1l2oOo2shpcydBCoSl4xmhTvvYFB5dp7hIrVvOE+3SnVoUqgjIMSnviD2T5vx88RQMEBfaW3AIn6zU4gdx+Hh5XuqEsEuBilpwuwLkyX1mfAuRxWDhVtKCWGSxMSvJFQgM3ulkIK2DABkSTJCc5xCfS8hmKmsirkrpCz8jBTAcJZSkfFgraBvalDJ0ueklJWPMSYY//pUWpfjg19Wfuyz+mPaEcMJvbROQUd1y6CpnTdFTEBW2A6ZFz5mrV++2q7N8YEBhCmt26Gwo9CLvGN7gz0J3Os3BYhiGoIIPSHKqngs2hroM4uLnDpMcI95PMRNV0txbz9Z0NJKCsEcL3KwfSM5NAb5ddTaYIAmO+tBWRJ6DmHiqYd4ozIQNMOcbSxeVQKe8joAS3k2osU1Lv/KIVedSA26+WWFvKzDyGOrg77GmKz21t29n7em8lj+g4ZGY9McjzrKe3p6enp6enr+N57bm+GkYVjvcpDyTzgaTt/eP340fLy/TV+cA/wGYnBVeWpbJ8MAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 20750,
            actualAp: 3000,
            actualDps: 2045.45,
            magnification: "250%",
            count: "5",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-8.3s",
            delayFrames: "150-250f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "622",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 18000,
            dps: 4000.0,
            speed: 20,
            range: 200,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 135,
            foreswing: 6,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 752000,
            actualAp: 33840,
            actualDps: 7520.0,
            magnification: "188%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [6000, 6000, 6000],
                timings: [6, 14, 18]
            },
            "omni-strike": {
                standing_range: 350,
                omni_range: [-150, 350]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "480",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4000,
            dps: 1558.44,
            speed: 14,
            range: 380,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 77,
            foreswing: 16,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 376000,
            actualAp: 7520,
            actualDps: 2929.87,
            magnification: "188%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-400, 600]
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "陸と空 Lv.2",
      baseHp: 900000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "51",
          treasureName: "キャッツアイ【レア】",
          probability: "100",
          amount: "5",
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
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1008,
            actualDps: 643.41,
            magnification: "126%",
            count: "10",
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
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 667800,
            actualAp: 65520,
            actualDps: 37086.79,
            magnification: "126%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 15
            }
          }
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 395500,
            actualAp: 14683,
            actualDps: 19152.03,
            magnification: "226%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 667800,
            actualAp: 65520,
            actualDps: 37086.79,
            magnification: "126%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 15
            }
          }
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 395500,
            actualAp: 14683,
            actualDps: 19152.03,
            magnification: "226%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1008,
            actualDps: 643.41,
            magnification: "126%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 120000,
            actualAp: 9000,
            actualDps: 5094.35,
            magnification: "250%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
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
          enemyId: "623",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5000,
            dps: 2027.03,
            speed: 22,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 74,
            foreswing: 15,
            backswing: 44,
            tba: 30
          },
          stageStats: {
            actualHp: 673200,
            actualAp: 9350,
            actualDps: 3790.55,
            magnification: "187%",
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
                standing_range: 400,
                omni_range: [-400, 400]
            },
            "savage-blow": {
                chance: 100,
                power: 1.2
            }
          }
        },
        {
          enemyId: "482",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 10500,
            dps: 2625.0,
            speed: 18,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 120,
            foreswing: 25,
            backswing: 33,
            tba: 44
          },
          stageStats: {
            actualHp: 748000,
            actualAp: 19635,
            actualDps: 4908.75,
            magnification: "187%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [5250, 5250],
                timings: [25, 33]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "心の師匠 Lv.3",
      baseHp: 950000,
      width: 6000,
      enemyLimit: 6,
      requiredCost: 190,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "54",
          treasureName: "キャッツアイ【伝説】",
          probability: "100",
          amount: "3",
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
            actualHp: 361600,
            actualAp: 29380,
            actualDps: 7940.53,
            magnification: "226%",
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
            actualHp: 214200,
            actualAp: 17307,
            actualDps: 32451.3,
            magnification: "252%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
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
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 189000,
            actualAp: 6300,
            actualDps: 3857.07,
            magnification: "2100%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMEBAQEBAQHBwcICAgPDw8QEBAQEBAREREUFBQYGBgjIyMkJCQlJSUpKSkqKioqKiotLS0wMDAwMDA1NTU5OTk7Ozs+Pj5ISEhRUVFRUVFaWlpjY2NkZGRtbW1vb29xcXF4eHh7e3uCgoKLi4uSkpKTk5OampqhoaGnp6esrKyysrK6urrLy8vS0tLZ2dng4ODn5+fv7+/19fX7+/v///9cRR0hAAAAQHRSTlMAAgYNFD+ousTNHyxIgjReR1FrkleOYph/n//GtO/ijrz+xdr//93///Pe/+///+////3///3+/v/+////////7j384wAAAgtJREFUWIXtmMmWmzAQRQ3C3R0PeO62Y7s9YIwCFpNAYhCl//+rgJOtcxCrLLgLDgveo6oo1REaDF6i6/UFDdHrJ/6NsZzoA229n2vd9PrSOo8HxiE6dQxhdGbBBplu4Q476bXZoyqsyWcA7IQ07VkPJdAmlZAedlwKd73enrZzxUyMcyZBeMdcQvz9YDx1l2oOo2shpcydBCoSl4xmhTvvYFB5dp7hIrVvOE+3SnVoUqgjIMSnviD2T5vx88RQMEBfaW3AIn6zU4gdx+Hh5XuqEsEuBilpwuwLkyX1mfAuRxWDhVtKCWGSxMSvJFQgM3ulkIK2DABkSTJCc5xCfS8hmKmsirkrpCz8jBTAcJZSkfFgraBvalDJ0ueklJWPMSYY//pUWpfjg19Wfuyz+mPaEcMJvbROQUd1y6CpnTdFTEBW2A6ZFz5mrV++2q7N8YEBhCmt26Gwo9CLvGN7gz0J3Os3BYhiGoIIPSHKqngs2hroM4uLnDpMcI95PMRNV0txbz9Z0NJKCsEcL3KwfSM5NAb5ddTaYIAmO+tBWRJ6DmHiqYd4ozIQNMOcbSxeVQKe8joAS3k2osU1Lv/KIVedSA26+WWFvKzDyGOrg77GmKz21t29n7em8lj+g4ZGY9McjzrKe3p6enp6enr+N57bm+GkYVjvcpDyTzgaTt/eP340fLy/TV+cA/wGYnBVeWpbJ8MAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 24900,
            actualAp: 3600,
            actualDps: 2454.54,
            magnification: "300%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMEBAQEBAQHBwcICAgPDw8QEBAQEBAREREUFBQYGBgjIyMkJCQlJSUpKSkqKioqKiotLS0wMDAwMDA1NTU5OTk7Ozs+Pj5ISEhRUVFRUVFaWlpjY2NkZGRtbW1vb29xcXF4eHh7e3uCgoKLi4uSkpKTk5OampqhoaGnp6esrKyysrK6urrLy8vS0tLZ2dng4ODn5+fv7+/19fX7+/v///9cRR0hAAAAQHRSTlMAAgYNFD+ousTNHyxIgjReR1FrkleOYph/n//GtO/ijrz+xdr//93///Pe/+///+////3///3+/v/+////////7j384wAAAgtJREFUWIXtmMmWmzAQRQ3C3R0PeO62Y7s9YIwCFpNAYhCl//+rgJOtcxCrLLgLDgveo6oo1REaDF6i6/UFDdHrJ/6NsZzoA229n2vd9PrSOo8HxiE6dQxhdGbBBplu4Q476bXZoyqsyWcA7IQ07VkPJdAmlZAedlwKd73enrZzxUyMcyZBeMdcQvz9YDx1l2oOo2shpcydBCoSl4xmhTvvYFB5dp7hIrVvOE+3SnVoUqgjIMSnviD2T5vx88RQMEBfaW3AIn6zU4gdx+Hh5XuqEsEuBilpwuwLkyX1mfAuRxWDhVtKCWGSxMSvJFQgM3ulkIK2DABkSTJCc5xCfS8hmKmsirkrpCz8jBTAcJZSkfFgraBvalDJ0ueklJWPMSYY//pUWpfjg19Wfuyz+mPaEcMJvbROQUd1y6CpnTdFTEBW2A6ZFz5mrV++2q7N8YEBhCmt26Gwo9CLvGN7gz0J3Os3BYhiGoIIPSHKqngs2hroM4uLnDpMcI95PMRNV0txbz9Z0NJKCsEcL3KwfSM5NAb5ddTaYIAmO+tBWRJ6DmHiqYd4ozIQNMOcbSxeVQKe8joAS3k2osU1Lv/KIVedSA26+WWFvKzDyGOrg77GmKz21t29n7em8lj+g4ZGY9McjzrKe3p6enp6enr+N57bm+GkYVjvcpDyTzgaTt/eP340fLy/TV+cA/wGYnBVeWpbJ8MAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 24900,
            actualAp: 3600,
            actualDps: 2454.54,
            magnification: "300%",
            count: "5",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-8.3s",
            delayFrames: "150-250f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "622",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 18000,
            dps: 4000.0,
            speed: 20,
            range: 200,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 135,
            foreswing: 6,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 904000,
            actualAp: 40680,
            actualDps: 9040.0,
            magnification: "226%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [6000, 6000, 6000],
                timings: [6, 14, 18]
            },
            "omni-strike": {
                standing_range: 350,
                omni_range: [-150, 350]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "480",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4000,
            dps: 1558.44,
            speed: 14,
            range: 380,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 77,
            foreswing: 16,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 452000,
            actualAp: 9040,
            actualDps: 3522.07,
            magnification: "226%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-400, 600]
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "陸と空 Lv.3",
      baseHp: 1000000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "52",
          treasureName: "キャッツアイ【激レア】",
          probability: "100",
          amount: "5",
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
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 7,
            actualAp: 1216,
            actualDps: 776.17,
            magnification: "152%",
            count: "10",
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
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 805600,
            actualAp: 79040,
            actualDps: 44739.62,
            magnification: "152%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 15
            }
          }
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 441000,
            actualAp: 16372,
            actualDps: 21355.36,
            magnification: "252%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 805600,
            actualAp: 79040,
            actualDps: 44739.62,
            magnification: "152%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 15
            }
          }
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 441000,
            actualAp: 16372,
            actualDps: 21355.36,
            magnification: "252%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 7,
            actualAp: 1216,
            actualDps: 776.17,
            magnification: "152%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 144000,
            actualAp: 10800,
            actualDps: 6113.22,
            magnification: "300%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
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
          enemyId: "623",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5000,
            dps: 2027.03,
            speed: 22,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 74,
            foreswing: 15,
            backswing: 44,
            tba: 30
          },
          stageStats: {
            actualHp: 810000,
            actualAp: 11250,
            actualDps: 4560.82,
            magnification: "225%",
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
                standing_range: 400,
                omni_range: [-400, 400]
            },
            "savage-blow": {
                chance: 100,
                power: 1.2
            }
          }
        },
        {
          enemyId: "482",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 10500,
            dps: 2625.0,
            speed: 18,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 120,
            foreswing: 25,
            backswing: 33,
            tba: 44
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 23625,
            actualDps: 5906.25,
            magnification: "225%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [5250, 5250],
                timings: [25, 33]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "心の師匠 Lv.4",
      baseHp: 1050000,
      width: 6000,
      enemyLimit: 6,
      requiredCost: 210,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "54",
          treasureName: "キャッツアイ【伝説】",
          probability: "100",
          amount: "3",
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
            actualHp: 422400,
            actualAp: 34320,
            actualDps: 9275.67,
            magnification: "264%",
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
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIFCAkJDRAMEhcQGR8UICkYJzEcLjohN0YmP1ArR1ouTWM0WHA6YXw9Z4NAbIpDcpFGd5hKfqFOhKlRiK5TjLNVkLhZl8FcncleoMxfoc5gpNJiptRjqdhmrd1osOFqs+VstuhsuOxuu+9vvfJywvh0xv14yv9+1v+H5P+LJW47AAAAQHRSTlMACRQcJzJATFdhcXmGlqGqx9L43f+07P//////////////////////////////////////////////////////qxSIJwAAB1FJREFUWIWVV4dy6kgQxMYPbAMmDSjnjNAqrLTK8v//1a1kgwH5ru5tFaXYzeyEntFk8ndr+XE9fVn8JXYyXx62LLNazIar6ZF9+hv09H0v6QxvgKhx23fKdjT4P3+Bf9upjiHLqQRqlzj8YS1FGrz9b/jTgXU6V5BrDRipSJtUhLMLf0GwlXDj6ZomAgATpIgUCj2D2f/BTqeTyUbMi8Q76T2IAbMKUdoo9Oz5P2Av028Xv8PbUspIFMbZuYdzsl6GlKEWYfsv4Nn7eg8s+00/k3VwuyAKw6g4iSA6ZpCElKG2ft/By3JLA2WG6nq4fJ78UTsLnBpRBpTHfoqDlJ6GIcbsyxg+P4Bk+VnV5Bx9Ov84fkzmchbY4FWoR8VZHOHwa1Xf/3GzXresFuRVFoeFvZ287gVbmE32cm06LhOm4cOqnAcfzDacEVckHh7qm4PgtMGW+lDOC8U3ha8HN4t4u9tUflqBntTJhV0Dg1SN8jphWblIExlZ5+QOHoW5cxvG+V461xhdzZP5FscxN1loslzixtLa72c47F2IwiRMIv71il+AWRTDK1Ec0WOlCEVETptXiAW99ThND74MQOf+cRQFlKnRr05YC0GTDHiUnU/01VLl86hw9+AWYHWy5MhmMdBjzcVhHBJTDWhG88sv/EbO6iSNe9vSQO8jTiwG4U4Hs/PBbSS3VdQvAiLZWZSk9Um2zkXnwXzAG59NGJzDPKepotm9uxPMmJ826E0a9BbonS2Tnj/zeNSQKPAdWbSCwBzq8aDHpsQdj6zsFYWl5MNea0lxQK+SsODkzuA6Qyz7ZK4ELqUvM7SouP53pIFccvJmOXt+evqzoDkvOQNBTE7ABnWMaEZAUXESZxRxXw2aoA0l6fsh1QODo6W6X12FacbqcnEJpKK2/TEhIH0iRi6i7/DHJ4FVvaTFlW92EvXibTYdwO+KMu3jFKU+GiJeBCA3LfnCh3EUFTipeLCpe1TLesjmN8bQVDMowzRC8Xfyo+osSFZ0k4NJhSwFFKIyGtrda8oCNh+rw05rHSu9pj4ixNbO+EqBctvukKLkplQW4usdwUtf4dMdyCrCP3+JItKQ5EqQeXIQY1IjnEaV9jEZrb3hg1+gH3xW5ecTKsoYDV4sVKtAcRLqeh5W5ljWNlKFg5+yilDhyzwwjGBkee/W1NH6SOe2LIc484+P+DWfkvhWPDIPeM09UbfxqJcl7HkpQqSzVDUgOHgkmDPxjfX9Sg0rrwnOGyxAQJ+hLA3i2lJpcml5c3okOJrNPZ4WIOkrmAajloBkiEYnLTWayYwAbOo++OAgVo/KFV7cj3AFYh1HRtxKcOryrE0ZTnq/w78yEYkeCcILJcoD0Lsz2BoEHW10dpPAfXN67vX/EZ4U0eUeanXAOe2P7udQUlLH388YK6ke/T/29CS63I0rRm4Tx82IrgTEcAy4GzGm4JWPBsTEBY9crlBNTUhz6tWsxNmnD8s7AxZSNXYAJqxa/1wlYJQDVVwT4wE/2Zr1CE+1iSr8NRJUqfiOUCPqwhWYhyHrmUGj9kUX7R83OyupUPrBydSk3eGxt07ZIB0lQa+DCmTZN0OUIqpnHC8Iv/T2Obj5LxZEuAapvVRXlHMy9oK0EcYE78yvFoRx7oN8jW9pMDnBcaWtxgR8jO+R30dU+6ANEwZdSQQWFd7S2Y8IFmJ214BRUmZfKNQacHVwJfAVHTT83fSRYCngux1klnSq0HArIaxcXfZg9WRJJo6GxDchSW7FFwcSBPXAgBqFy7/NSzJGpRVTqyMnzPg7Alq+rXmpLtqtL2U6pDOmQ9BIzF7YByeGUatCkPcMdF4gFwclMVglbb/8KJBHt7gnCONGhLIH0oklv0lnjt6sldHnwloZyVmGQS37pipK5fUu8cDLqTNHij5nUf7AgOh4jpMoaXil+qGtWLFBNKlHg+ZerDC6r2jiMllL0jOj31Rq4YBPokIa7WEKWt+Gb7IBNSZIikAnCioKV2pqglTTrjSKw+TPTktI2RfO18uoSEHWJcWng35ws73ShADT6Wf8yfNnvRe1oCqHVoCSCrNM2dQdEV4XUv1jWRaAm9FheVxQk+kaBFFWjCBGcVVYwIdlVRhA3zzabYJuXItRM562J/Od7Fa+bp0JKYkrgVG3qSvu55Pp6ghWNthAFZVQl9CIMfNH/NPObouw8jTT8uxe/0lqidvF0+RlJ1M/SENS0R4nAomzRj6MDJgxQVuktSOy/SDH0rbOwqZ/sFa6UhTNdPjqyAQ4l3WmHsffnU9LRnUCv6EKdgosRots2+H6GWTvdpxc9dqatj5wcZu7wmYkCEMYllsa87gkdftJXd01XaNQDy4VZNRpVlEOm9W6JlZ377/Bh/Wy2LAePlm2DVpz9rAOHx8frJJlqWfqCgO8awrM5tev3ufZ+3K5Wm+3R7r3fh6l6n1dVMv7w263g91xvz2slsvF68Mupm/L1cdmu90fj/S1f1u745ESbDfr1fKdltM/RlLNpk7oMvoAAAAASUVORK5CYII=",
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
            actualHp: 236300,
            actualAp: 19093,
            actualDps: 35799.45,
            magnification: "278%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
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
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAgICAgICAgIDAwMEBAQFBQUGBgYGBwcGBwcHBwcHBwcJCQkJCgoKCgoQEBAbHR0cHR0bIiEhKyooKSomMzMzNzg1QD8uSEY8UlBGXVpVVlhBZWJjY2NMdnJxcXFUg35bkIqBgYFmnJiSkpJorKWfn59xv7epqal6zsS0tLR3182+vr6L1s7Hx8eR4NfNzc2Z6+HU1NSe9erb29uh/e7i4uLo6Oju7u729vb7+/v///////8noTPvAAAAQHRSTlMABhfaJDD1PsdUY+r+obJ8iG2V0qr98MH/0ub//+r+/////v///v7///7//////////////////////////wD/q/8UPgAABpNJREFUWIXtV2t7okwSDUTjJUYNkYjS0DTXhga5Q7it//9fbTXGxNnJZGZn9+NbH3xEu06dqjpVrXf/+h/t7h+AfwD+LwCfJojTxUy4+1sTJgtpfjxsJn/pLy73mmn6TFsIf0ViIh39Biw39tLzQhQm04n43wBNJC3O+/N5yB3mO8ft8/5w2C3+HEHcHKMm787nvmn70tcfNZbn3n76x9lM507ZcoDz0EaOoehpBKatpWfxDxnsvbrNW84gjZhulEPps9g0PW0j3gnCZPY7HHHntTUw6Ms8zX2nHoDK0BisTrXNbCntD9L0e4DZi9Pk9TDUKVjegT9YaUR5V2r3mp/m5u5bDsLG9OOy79o6zUueyWipmaZ1n+peM5zz4+xbgKXGoq720hIA0u7iP0Rmw9nETgQv++8FOl0f9MjxO2BQQ9QxhcFz2jxthiH1y87Zft9QqPNa9bqh5ABp2bRdxwk1aQr5QGXYcfGtP5i4NdszByjrMudW1k1bpmU/DOc+Ml5+04U7YXFIoXPAGTgAgRY4wEMJoP3Qt8DgN5oUJa/lo9BDVGDRtA0QqTtQdhv7HmP60/dSEiZr3avH0g1dU+dcDVDLvm8BI/YdE71spr/mIEyWu6PB3tvHQdq6BjX16UUSnBfT58tfkpjuNL9s8mY43xj4l2X/8dg3zqv0Ky0861EHzbo5zq1Lf/ygi46br7MQNh4Drk3a3Rwfmnhs4fDOpoaSRC+bxWzyMwgAAINzyW4A+tTPwbcfRTmcO98w/K4xde2wf/4JQdgcgUHP/P587UPqmSmEjR3T46PdeQ7zDK9NPcfzvpiKyWZvxnVUQ7wOVhFvm8P9I9NjjlnyuaxzFdZUw9Ku0b7QlDDdHhloOGWmbrI4r1vI/pybcc905PVn5vXRaqUz3pfe230l6+mLn+cQ2mExLIFLMZjT9/pKdrpz5PSloZsRFLrp/C8BYCWlZV2DfvlOuvSPAzgyAoDSZG3NIJkuz9n+y9tvsjbAH4Tbt3ytde8bqW9jB1KAcTQMFEFby1/dXJACM5wI5mfoYZyasZUMbjrHSIdh6H1s6VDNc66vl8+bxU+iFhZH04S7ZNyodRzDbivboY91jPWI+Z6nW1T10q6PlFdN0w7b/5wsUZLNEgJ1OUv7JnJ0hHTTL0vTDRRZUVRVsW1ZVgwHkaCoitDa/zhZsE68cfCG1nOa2FCtIElcpCiyFaqEhkmAKCEuWilu8catcF82NwjC8uDH9Vh5EB8zEOXHqoTIKzvECbwPrNBK3jKMs9G/CrF63H4iiE8eNImB7och93UUVJdjhSW7IeE+RVYkRfWW4GD8gmI7oNongriLhh7UNjIw0XhotAy5WVgBF9eyMCZB5ZKK+xN6Op0C7SMLcceGcxnz4a0dRKure+CqnDMEVBSs2C6g4eKtCqzgxI0el++9EJ7Nps9L8I9NxbqUCc4hhLHqVm+ZTTEKkFVUVQYJJfbF/3Ry91dRT/YwQiDlSCfXBAqKoPyhDc9QABuhERkACpe++59CIonXNq5fdUPXVRLi8OJvgzs/Y41dqKiCFLt6C3EWuuEV4BR8XLnCdM/q3EFhqL7XmQSXcyG2ed0sKAKtKgtnNDh9mi191tGva8OubNnibUvIxzHKOVWBupJt6qpuQm/8T8HhSkGUjMhBSaIqiCRAwP44ExLsUhvJ8kpWVMWlPwCcyMeinu5URDOiqjZyq8K+4UlhGmQZ29DIkCKQUBDefPmxIYXFo53ZOCCWi7PEvQkSgqeNwirhDbGAhooteq3QZxmnTzLGCoEYFNOQhjdhbFxk2K0q4sJQqC61sKqo2B5BQm15iT/baRbkj7GNiIVBuCpxr2lQlFUENOySAuYphBlJAluVZT6nUIQL/70VEBwURYCJatmAQ/nLu2RRMgIEoOuC8DZnrvZ6v35av2BqSZd14AbYGhVjEfXVzTKYoIxiPIqGojBD9O2NYs4gKBJX2z0vpqIozrZHVRr9aYBtGBMAIPLLdm8l40BlLrYAIUABVaCAxIZZeD1qB2lx/SEvLudbvg5IgklWVbCrXPlxvV0/wkrKiqIIiYzpKVApkukbVSHMi7R5XsAfAeF9NYvLGRRw/arKCrEsgpTV6uHhYQUmqwjzxxW4qepqRUIkq/Lq8f5+Pl+v19JmcbmmAUhcSvP7+8fHx4eHd+cfTUHyCLgawR8e4OTj/fxp83m/COJkOp3NFrDwt0/r9XwOeD8bfLx+ggSWi8Vsevt35t+foBXkiUM38gAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 229500,
            actualAp: 7650,
            actualDps: 4683.58,
            magnification: "2550%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMEBAQEBAQHBwcICAgPDw8QEBAQEBAREREUFBQYGBgjIyMkJCQlJSUpKSkqKioqKiotLS0wMDAwMDA1NTU5OTk7Ozs+Pj5ISEhRUVFRUVFaWlpjY2NkZGRtbW1vb29xcXF4eHh7e3uCgoKLi4uSkpKTk5OampqhoaGnp6esrKyysrK6urrLy8vS0tLZ2dng4ODn5+fv7+/19fX7+/v///9cRR0hAAAAQHRSTlMAAgYNFD+ousTNHyxIgjReR1FrkleOYph/n//GtO/ijrz+xdr//93///Pe/+///+////3///3+/v/+////////7j384wAAAgtJREFUWIXtmMmWmzAQRQ3C3R0PeO62Y7s9YIwCFpNAYhCl//+rgJOtcxCrLLgLDgveo6oo1REaDF6i6/UFDdHrJ/6NsZzoA229n2vd9PrSOo8HxiE6dQxhdGbBBplu4Q476bXZoyqsyWcA7IQ07VkPJdAmlZAedlwKd73enrZzxUyMcyZBeMdcQvz9YDx1l2oOo2shpcydBCoSl4xmhTvvYFB5dp7hIrVvOE+3SnVoUqgjIMSnviD2T5vx88RQMEBfaW3AIn6zU4gdx+Hh5XuqEsEuBilpwuwLkyX1mfAuRxWDhVtKCWGSxMSvJFQgM3ulkIK2DABkSTJCc5xCfS8hmKmsirkrpCz8jBTAcJZSkfFgraBvalDJ0ueklJWPMSYY//pUWpfjg19Wfuyz+mPaEcMJvbROQUd1y6CpnTdFTEBW2A6ZFz5mrV++2q7N8YEBhCmt26Gwo9CLvGN7gz0J3Os3BYhiGoIIPSHKqngs2hroM4uLnDpMcI95PMRNV0txbz9Z0NJKCsEcL3KwfSM5NAb5ddTaYIAmO+tBWRJ6DmHiqYd4ozIQNMOcbSxeVQKe8joAS3k2osU1Lv/KIVedSA26+WWFvKzDyGOrg77GmKz21t29n7em8lj+g4ZGY9McjzrKe3p6enp6enr+N57bm+GkYVjvcpDyTzgaTt/eP340fLy/TV+cA/wGYnBVeWpbJ8MAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 29050,
            actualAp: 4200,
            actualDps: 2863.63,
            magnification: "350%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMEBAQEBAQHBwcICAgPDw8QEBAQEBAREREUFBQYGBgjIyMkJCQlJSUpKSkqKioqKiotLS0wMDAwMDA1NTU5OTk7Ozs+Pj5ISEhRUVFRUVFaWlpjY2NkZGRtbW1vb29xcXF4eHh7e3uCgoKLi4uSkpKTk5OampqhoaGnp6esrKyysrK6urrLy8vS0tLZ2dng4ODn5+fv7+/19fX7+/v///9cRR0hAAAAQHRSTlMAAgYNFD+ousTNHyxIgjReR1FrkleOYph/n//GtO/ijrz+xdr//93///Pe/+///+////3///3+/v/+////////7j384wAAAgtJREFUWIXtmMmWmzAQRQ3C3R0PeO62Y7s9YIwCFpNAYhCl//+rgJOtcxCrLLgLDgveo6oo1REaDF6i6/UFDdHrJ/6NsZzoA229n2vd9PrSOo8HxiE6dQxhdGbBBplu4Q476bXZoyqsyWcA7IQ07VkPJdAmlZAedlwKd73enrZzxUyMcyZBeMdcQvz9YDx1l2oOo2shpcydBCoSl4xmhTvvYFB5dp7hIrVvOE+3SnVoUqgjIMSnviD2T5vx88RQMEBfaW3AIn6zU4gdx+Hh5XuqEsEuBilpwuwLkyX1mfAuRxWDhVtKCWGSxMSvJFQgM3ulkIK2DABkSTJCc5xCfS8hmKmsirkrpCz8jBTAcJZSkfFgraBvalDJ0ueklJWPMSYY//pUWpfjg19Wfuyz+mPaEcMJvbROQUd1y6CpnTdFTEBW2A6ZFz5mrV++2q7N8YEBhCmt26Gwo9CLvGN7gz0J3Os3BYhiGoIIPSHKqngs2hroM4uLnDpMcI95PMRNV0txbz9Z0NJKCsEcL3KwfSM5NAb5ddTaYIAmO+tBWRJ6DmHiqYd4ozIQNMOcbSxeVQKe8joAS3k2osU1Lv/KIVedSA26+WWFvKzDyGOrg77GmKz21t29n7em8lj+g4ZGY9McjzrKe3p6enp6enr+N57bm+GkYVjvcpDyTzgaTt/eP340fLy/TV+cA/wGYnBVeWpbJ8MAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 29050,
            actualAp: 4200,
            actualDps: 2863.63,
            magnification: "350%",
            count: "5",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-8.3s",
            delayFrames: "150-250f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "622",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 18000,
            dps: 4000.0,
            speed: 20,
            range: 200,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 135,
            foreswing: 6,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 1056000,
            actualAp: 47520,
            actualDps: 10560.0,
            magnification: "264%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [6000, 6000, 6000],
                timings: [6, 14, 18]
            },
            "omni-strike": {
                standing_range: 350,
                omni_range: [-150, 350]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "480",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4000,
            dps: 1558.44,
            speed: 14,
            range: 380,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 77,
            foreswing: 16,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 528000,
            actualAp: 10560,
            actualDps: 4114.28,
            magnification: "264%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-400, 600]
            }
          }
        }]
    },
    {
      stageId: 7,
      stageName: "陸と空 Lv.4",
      baseHp: 1100000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 220,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "53",
          treasureName: "キャッツアイ【超激レア】",
          probability: "100",
          amount: "5",
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
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8,
            actualAp: 1424,
            actualDps: 908.94,
            magnification: "178%",
            count: "10",
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
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 943400,
            actualAp: 92560,
            actualDps: 52392.45,
            magnification: "178%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 15
            }
          }
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 486500,
            actualAp: 18061,
            actualDps: 23558.69,
            magnification: "278%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 943400,
            actualAp: 92560,
            actualDps: 52392.45,
            magnification: "178%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 15
            }
          }
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 486500,
            actualAp: 18061,
            actualDps: 23558.69,
            magnification: "278%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8,
            actualAp: 1424,
            actualDps: 908.94,
            magnification: "178%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 168000,
            actualAp: 12600,
            actualDps: 7132.09,
            magnification: "350%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
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
          enemyId: "623",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5000,
            dps: 2027.03,
            speed: 22,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 74,
            foreswing: 15,
            backswing: 44,
            tba: 30
          },
          stageStats: {
            actualHp: 943200,
            actualAp: 13100,
            actualDps: 5310.82,
            magnification: "262%",
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
                standing_range: 400,
                omni_range: [-400, 400]
            },
            "savage-blow": {
                chance: 100,
                power: 1.2
            }
          }
        },
        {
          enemyId: "482",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 10500,
            dps: 2625.0,
            speed: 18,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 120,
            foreswing: 25,
            backswing: 33,
            tba: 44
          },
          stageStats: {
            actualHp: 1048000,
            actualAp: 27510,
            actualDps: 6877.5,
            magnification: "262%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [5250, 5250],
                timings: [25, 33]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 8,
      stageName: "心の師匠 Lv.MAX",
      baseHp: 1150000,
      width: 6000,
      enemyLimit: 6,
      requiredCost: 230,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "54",
          treasureName: "キャッツアイ【伝説】",
          probability: "100",
          amount: "3",
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
            actualHp: 480000,
            actualAp: 39000,
            actualDps: 10540.53,
            magnification: "300%",
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
            actualHp: 255000,
            actualAp: 20604,
            actualDps: 38632.5,
            magnification: "300%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
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
          enemyId: "173",
          enemyName: "ヤドカリー",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 9000,
            ap: 300,
            dps: 183.67,
            speed: 6,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 170,
            freq: 49,
            foreswing: 6,
            backswing: 6,
            tba: 22
          },
          stageStats: {
            actualHp: 270000,
            actualAp: 9000,
            actualDps: 5510.1,
            magnification: "3000%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
          }
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMEBAQEBAQHBwcICAgPDw8QEBAQEBAREREUFBQYGBgjIyMkJCQlJSUpKSkqKioqKiotLS0wMDAwMDA1NTU5OTk7Ozs+Pj5ISEhRUVFRUVFaWlpjY2NkZGRtbW1vb29xcXF4eHh7e3uCgoKLi4uSkpKTk5OampqhoaGnp6esrKyysrK6urrLy8vS0tLZ2dng4ODn5+fv7+/19fX7+/v///9cRR0hAAAAQHRSTlMAAgYNFD+ousTNHyxIgjReR1FrkleOYph/n//GtO/ijrz+xdr//93///Pe/+///+////3///3+/v/+////////7j384wAAAgtJREFUWIXtmMmWmzAQRQ3C3R0PeO62Y7s9YIwCFpNAYhCl//+rgJOtcxCrLLgLDgveo6oo1REaDF6i6/UFDdHrJ/6NsZzoA229n2vd9PrSOo8HxiE6dQxhdGbBBplu4Q476bXZoyqsyWcA7IQ07VkPJdAmlZAedlwKd73enrZzxUyMcyZBeMdcQvz9YDx1l2oOo2shpcydBCoSl4xmhTvvYFB5dp7hIrVvOE+3SnVoUqgjIMSnviD2T5vx88RQMEBfaW3AIn6zU4gdx+Hh5XuqEsEuBilpwuwLkyX1mfAuRxWDhVtKCWGSxMSvJFQgM3ulkIK2DABkSTJCc5xCfS8hmKmsirkrpCz8jBTAcJZSkfFgraBvalDJ0ueklJWPMSYY//pUWpfjg19Wfuyz+mPaEcMJvbROQUd1y6CpnTdFTEBW2A6ZFz5mrV++2q7N8YEBhCmt26Gwo9CLvGN7gz0J3Os3BYhiGoIIPSHKqngs2hroM4uLnDpMcI95PMRNV0txbz9Z0NJKCsEcL3KwfSM5NAb5ddTaYIAmO+tBWRJ6DmHiqYd4ozIQNMOcbSxeVQKe8joAS3k2osU1Lv/KIVedSA26+WWFvKzDyGOrg77GmKz21t29n7em8lj+g4ZGY9McjzrKe3p6enp6enr+N57bm+GkYVjvcpDyTzgaTt/eP340fLy/TV+cA/wGYnBVeWpbJ8MAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 33200,
            actualAp: 4800,
            actualDps: 3272.72,
            magnification: "400%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "123",
          enemyName: "ド鳩・サブ・レー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMEBAQEBAQHBwcICAgPDw8QEBAQEBAREREUFBQYGBgjIyMkJCQlJSUpKSkqKioqKiotLS0wMDAwMDA1NTU5OTk7Ozs+Pj5ISEhRUVFRUVFaWlpjY2NkZGRtbW1vb29xcXF4eHh7e3uCgoKLi4uSkpKTk5OampqhoaGnp6esrKyysrK6urrLy8vS0tLZ2dng4ODn5+fv7+/19fX7+/v///9cRR0hAAAAQHRSTlMAAgYNFD+ousTNHyxIgjReR1FrkleOYph/n//GtO/ijrz+xdr//93///Pe/+///+////3///3+/v/+////////7j384wAAAgtJREFUWIXtmMmWmzAQRQ3C3R0PeO62Y7s9YIwCFpNAYhCl//+rgJOtcxCrLLgLDgveo6oo1REaDF6i6/UFDdHrJ/6NsZzoA229n2vd9PrSOo8HxiE6dQxhdGbBBplu4Q476bXZoyqsyWcA7IQ07VkPJdAmlZAedlwKd73enrZzxUyMcyZBeMdcQvz9YDx1l2oOo2shpcydBCoSl4xmhTvvYFB5dp7hIrVvOE+3SnVoUqgjIMSnviD2T5vx88RQMEBfaW3AIn6zU4gdx+Hh5XuqEsEuBilpwuwLkyX1mfAuRxWDhVtKCWGSxMSvJFQgM3ulkIK2DABkSTJCc5xCfS8hmKmsirkrpCz8jBTAcJZSkfFgraBvalDJ0ueklJWPMSYY//pUWpfjg19Wfuyz+mPaEcMJvbROQUd1y6CpnTdFTEBW2A6ZFz5mrV++2q7N8YEBhCmt26Gwo9CLvGN7gz0J3Os3BYhiGoIIPSHKqngs2hroM4uLnDpMcI95PMRNV0txbz9Z0NJKCsEcL3KwfSM5NAb5ddTaYIAmO+tBWRJ6DmHiqYd4ozIQNMOcbSxeVQKe8joAS3k2osU1Lv/KIVedSA26+WWFvKzDyGOrg77GmKz21t29n7em8lj+g4ZGY9McjzrKe3p6enp6enr+N57bm+GkYVjvcpDyTzgaTt/eP340fLy/TV+cA/wGYnBVeWpbJ8MAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 8300,
            ap: 1200,
            dps: 818.18,
            speed: 18,
            range: 205,
            rangeType: "単体",
            kbLevel: 2,
            money: 300,
            freq: 44,
            foreswing: 5,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 33200,
            actualAp: 4800,
            actualDps: 3272.72,
            magnification: "400%",
            count: "5",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-8.3s",
            delayFrames: "150-250f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "622",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 18000,
            dps: 4000.0,
            speed: 20,
            range: 200,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 135,
            foreswing: 6,
            backswing: 58,
            tba: 59
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 54000,
            actualDps: 12000.0,
            magnification: "300%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [6000, 6000, 6000],
                timings: [6, 14, 18]
            },
            "omni-strike": {
                standing_range: 350,
                omni_range: [-150, 350]
            },
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "480",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 4000,
            dps: 1558.44,
            speed: 14,
            range: 380,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1000,
            freq: 77,
            foreswing: 16,
            backswing: 39,
            tba: 31
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 12000,
            actualDps: 4675.32,
            magnification: "300%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-400, 600]
            }
          }
        }]
    },
    {
      stageId: 9,
      stageName: "陸と空 Lv.MAX",
      baseHp: 1200000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 240,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "44",
          treasureName: "金マタタビ",
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
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 10,
            actualAp: 1600,
            actualDps: 1021.28,
            magnification: "200%",
            count: "10",
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
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 1060000,
            actualAp: 104000,
            actualDps: 58867.92,
            magnification: "200%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 15
            }
          }
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 525000,
            actualAp: 19491,
            actualDps: 25423.05,
            magnification: "300%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 1060000,
            actualAp: 104000,
            actualDps: 58867.92,
            magnification: "200%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "critical": {
                chance: 15
            }
          }
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 525000,
            actualAp: 19491,
            actualDps: 25423.05,
            magnification: "300%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 10,
            actualAp: 1600,
            actualDps: 1021.28,
            magnification: "200%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 192000,
            actualAp: 14400,
            actualDps: 8150.96,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
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
          enemyId: "623",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUBAQECAgIEAwQEBAMFBAUGAwcIBgoPESAaFREfHiYmIBctIhUyIxgQGIk/Kh04LSc5MBovMDtPNhskLJ0QINJfQidURTtHQ3IrOdhpWSh3WUFbYZp9ZlqIZ1NVaNi3aQuAdnSickibfmrcfBGtkjW1hW1zhfWWkpLIk3jLrSvDoI7ioX7/qDHiuzLbtJrnzSzwtpjqwKnyw6fz3Sb14lH7zbL96iH+07v92Lz+6mD/+TP/4sz//Gz/9Nv/9uH////zXcboAAAAQHRSTlMAGqkwVXfR/gH+c8Cb//4BSv/L///9Af//AP7/Bv/////8/////////////wD/////AP//////AP8A////AP8AdPsnAAAABRRJREFUWIWdlw13ojoQhkGIiHxY0BQbjZVUaoQ1sGjcXPDS//+v7mB397pbK+y+np7TI2eevDMZJlF7+yntlvSHR8P88O3bVdR9wNhxHBya+t8CTEzizWbHQuMvAU58BOXHjaM9XasvQCf5BuM4zze++/WfK/UFuDHEUx/ywHg8ulJPgOlgiI+JSLAfjv+8BvrA931CcKZS6j64f1FEwySUctFQmpq6o/15CpqbcSalEltias7DHwFGbQoOLzNWFlI1ADCcq17oAOgDZ4xCViRclVQoqdLxqE2oL0D3KZepakqxLgsWi4Y9TKAAfYs4MnCiSslZITLGsiyhPGwzWj723YUwS1QjREpT+EsYoz6JETK/LHsDeMJLKB9Zs3SdJkzyrRKKuZP+DuqyhOYTSqTbNUvS7ZZtRclQT4BbNCpNU0FlnaUswM8Er1PCUsWMyU/dAzhKJpA5wzhaRc/Pz/n+hTQJK4o0nDz+0F0HCZdQQ5Gy6HX1nL+87A9xwihP4rBnCkzVZZIKoeh0RWD5l5dnm2ayKfDy29fvugcIOWfwSZKEeDOfRNPp1ANAUTfS7VUDLCEHKGIpqDW1vJnnTSMH3ipVN1TvkwKWBc/gFSwLanlWFFHfJg8a5Vldc4LuApYXPZCi4DzLeIwtO5FZLeLE0FyeZClv6nasjD5L4d9Wb0vDIVCAmOA0E7LIyiJrrYdxHGfQ4g9P2uOXL7cB31r9Cy2vm6bh8qyRRV1yaON2/wxc8kQ2DX3SnjoBl93kcZolRZqA90sDhKVkZZn4A/O+g7d3gGGBgiCIQJ4HtRshqGxsWXYUu58dLNcOkOd5s9ls9QqazYY6VA6XZQCbuqDPxie78D4vL/EmjmEgL6YLUEQ2e2JoyyWhjNlF5sXj7rEe7vJTVZ3yXav2vw3SnibDtYrL1CNhJwDxfX46n4Gw3+33+aE6Vwc4FyYupgX3cCdAJ0KAg+Ph1HrYV9URYFWoPX01hjyLLNQFQGt+PB1O1SHPKzjbj/nhcDxXOdKWEx0nvjnqAoQLAomD8WOe7za7XX7ID+eziAxt8rZExqQLYETb9WKbV+cz5AAAKMLpVKntYqBpX2GXOwHIWwBhLSDxfLOJN5DB6XQSrws44CaTHoCBN5tvtottWVUxCtuN3OfVbvu6os7leTdgOp/PGVulAiqvkbYZ8t06mr+uAr0XwJq3Wqxetzt4/Q0CPQHxs/nrfHB5Puo4WExveiGs5ot1O4FQtNu08XPPGvYZadrAhnfO9mDBWdSe6LoVLSDeg7fTNvoADAhvGeDDu+Q8DKazme3bdhAM+gDAwkWWP3+37AaeZ9k+9oPA7gPQYaWgjcfW+xA2h0hHtmVj+FrvBuhDWCkIYHShq0sRuhB7ORi2BgLs/3JB14dtUn4w7AaYlu+38eYvdyLdugDsHkUcWG0G2Pr1fq9b7db6Vg+A827gN4DmEABg5nYDCIxu3/6/577LhJOtLNS4G4ALGvgUf/iZ5ML5roTZAyBVJgv393hNx7Ku0x6tTGSpUvQhHjoBbo89AEYsZTG+Ea8ZVP4A3LutO3A3p7fiNR0A32twB2DyulYfC/DuoFYq7AKEdV3LWxUANpWqVti4C0Blo2rx8ZduKzfJalk36eAOwGSNFKq8DQgLWStZ1jUxPgPouOCC1+ltgFMUhWpghYQ4+m3A2CeUMOkPB/D5IKudCIRRYvs++sSBYSCEXIQGtwSPkIlMkGFcO/gPJRD9w3DIG/4AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 5000,
            dps: 2027.03,
            speed: 22,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 74,
            foreswing: 15,
            backswing: 44,
            tba: 30
          },
          stageStats: {
            actualHp: 1080000,
            actualAp: 15000,
            actualDps: 6081.09,
            magnification: "300%",
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
                standing_range: 400,
                omni_range: [-400, 400]
            },
            "savage-blow": {
                chance: 100,
                power: 1.2
            }
          }
        },
        {
          enemyId: "482",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 400000,
            ap: 10500,
            dps: 2625.0,
            speed: 18,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 120,
            foreswing: 25,
            backswing: 33,
            tba: 44
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 31500,
            actualDps: 7875.0,
            magnification: "300%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [5250, 5250],
                timings: [25, 33]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    }
  ]
} as const;

export default e2193Data;

