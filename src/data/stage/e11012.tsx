// Stage 11012 Data
import type { StageData } from '../../app/stage/types';

export const e11012Data: StageData = {
  eventId: 11012,
  eventName: "ランキングの間（天空武闘大会）",
  typeId: 11,
  typeName: "ランキング道場",
  prefix: "R",
  mapId: 12,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "天空武闘大会",
      baseHp: 9999999,
      width: 4200,
      enemyLimit: 12,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
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
          enemyId: "283",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgEDAwIHBAIGBQQGBgUJBgULCAcNCQcNCggOCwkRCQgQDAoWDggZFA4fFxEfFxEnGwcvGw00GREmHxkzJhs+KBU1LSE7LCJWJg1TKw9BMSZkLBBHOCxZNRNKPTJZRTV9PxdhSjJnTTlPVViGSB5sVkJwXEqOVyxKaoKUXjN+Zk1Vd5N1dXWKcVWReVqDg4OagWKgh2anjW2Wk5GslXOjn524nnDCpHKrqqm4uLfQ0NDf3t6OV77VAAAAQHRSTlMABwwU/xwr8D5KYm1Yd8SzpJN/06rx/m3H5LH+/+XY/+7/////7v/////9////////////////////////////6AFxRAAAA1JJREFUWIXFlg1v4jgQhoGQlPLVAksKNdeCDSY2xRs7DgkJof//X+04sHfS7l5KjHT3CgkRMY/eGc940mj8u5pupzsY9Lodt+JPFXLHkyXlgrPlrG8F6CIqpD7oWIlR0wbQI1QoAGgAWDnoEXZxoC0Bg6uDuwDgINbSsgZXgFb2AMalKgHPdgBMmTAOhPhmd4wIctCmBJaALiJEaBVLZgnogwOupR2g6TpOd4oJU0JLxoadmgT35fV5OPF9hBlljCB/2PduDG31x+Pxy3iOMcKUUrT9+Pj+/QNP5yPPBTmtrwC9JRwe55wSwWWaCQgHbTHx52+g2etjdTLOWyqZ1jDChAuV5Yfj57n4PMuYYibhPIXcVN8NHZmnHABKQf1klqfHItxGZ5ULwWMdx7HWs0rAi84MQCnFpQTAIYm22xAAWlEZl9p8AUhTpgxA0NJBkmDMAZBqGG1jIeaVgK7M0kuymIg4hxoUUZlCJoh5zBhfVgK8t0xRzuAACWFpnsfHc5GcPwHAsHkKqq5Bc7yBUEKgDYjIDOAYlTXIML7EL7uVgEar9wQaTh4QgRLk+hSFUZnCdDKbGA2+bKWW0eNwatoAAEceJgA4TDzHtKJ741A0O3MZZ3mmT+ciKs4yV4Oa4+TMhM6yLD4Wx21YqHxz6zD9bWEkjIM4OYUIapDNnJqARp/LCyAxfaDHdeMb3kam+UEnRRIlRbjp1Aa0XuEYUpF8Rh9JwV+/PLzf9QLzDIATJtsCD+rHN/pThDCOTgglhV/3EEHexEeEkejEeXjyLXab84y4ojg5n8LkRCZ12wCKOIJ5QCgsQOENE/AHC+6IUNivcK0PPavN1AAAg8tJcLvtDgC42w9KSm633a8A2O53ACgApN0LStPxHp8wQnC5Yfz06Dn1GG7veTZfkWC32+33ux3dvM1G/RoD3RwtFu/v6wCiIRwg8Ak2o9t7oflt9W4Awf4aDV9B8Nft3WgAi/f1ugzeX22s6wEWVwcrhFbUeAhqAoyDYEf9drvtLxbr/b42wDhYm/iSENQGlClc4ktC/RQAsG7/A1jbOFj9BLShLe4FrO4ErOoBWr8CVjUBxsHiN8D8jhRsAFD3ex3834BfUlj8twDn6WFq9PBT5a8/78cfbX6rhYGXt9IAAAAASUVORK5CYII=",
          traits: [],
          baseStats: {
            hp: 100,
            ap: 999999,
            dps: 49261.03,
            speed: 0,
            range: 300,
            rangeType: "範囲",
            kbLevel: 0,
            money: 0,
            freq: 609,
            foreswing: 10,
            backswing: 27,
            tba: 300
          },
          stageStats: {
            actualHp: 100,
            actualAp: 999999,
            actualDps: 49261.03,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "0%",
            isBoss: true
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
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1899981,
            actualAp: 42750,
            actualDps: 41370.98,
            magnification: "1900%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "3920000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 420000,
            actualAp: 6440,
            actualDps: 2883.58,
            magnification: "1400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "3920000%",
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
            actualHp: 1040000,
            actualAp: 84500,
            actualDps: 22837.81,
            magnification: "650%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "3820000%",
            isBoss: true
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
            actualHp: 2359500,
            actualAp: 14605,
            actualDps: 29211.0,
            magnification: "650%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "3820000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 160000,
            actualAp: 48000,
            actualDps: 12413.76,
            magnification: "1600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.7-13.3s",
            delayFrames: "320-400f",
            baseHpRatio: "3720000%",
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
            actualHp: 160000,
            actualAp: 48000,
            actualDps: 12413.76,
            magnification: "1600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "14.7-17.3s",
            delayFrames: "440-520f",
            baseHpRatio: "3720000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 116200,
            actualAp: 16800,
            actualDps: 11454.52,
            magnification: "1400%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "9.3-12.0s",
            delayFrames: "280-360f",
            baseHpRatio: "3720000%",
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
            actualHp: 1176000,
            actualAp: 66804,
            actualDps: 125257.44,
            magnification: "1200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "3620000%",
            isBoss: true
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
            actualHp: 169000,
            actualAp: 20150,
            actualDps: 14743.95,
            magnification: "1300%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "3620000%",
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
            actualHp: 169000,
            actualAp: 20150,
            actualDps: 14743.95,
            magnification: "1300%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-4.0s",
            delayFrames: "120-120f",
            baseHpRatio: "3620000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1799982,
            actualAp: 40500,
            actualDps: 39193.56,
            magnification: "1800%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "3520000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 390000,
            actualAp: 5980,
            actualDps: 2677.61,
            magnification: "1300%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "3520000%",
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
            actualHp: 960000,
            actualAp: 78000,
            actualDps: 21081.06,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "3420000%",
            isBoss: true
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
            actualHp: 2178000,
            actualAp: 13482,
            actualDps: 26964.0,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "3420000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 150000,
            actualAp: 45000,
            actualDps: 11637.9,
            magnification: "1500%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.7-13.3s",
            delayFrames: "320-400f",
            baseHpRatio: "3320000%",
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
            actualHp: 150000,
            actualAp: 45000,
            actualDps: 11637.9,
            magnification: "1500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "14.7-17.3s",
            delayFrames: "440-520f",
            baseHpRatio: "3320000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 107900,
            actualAp: 15600,
            actualDps: 10636.34,
            magnification: "1300%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "9.3-12.0s",
            delayFrames: "280-360f",
            baseHpRatio: "3320000%",
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
            actualHp: 1078000,
            actualAp: 61237,
            actualDps: 114819.32,
            magnification: "1100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "3220000%",
            isBoss: true
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
            actualHp: 156000,
            actualAp: 18600,
            actualDps: 13609.8,
            magnification: "1200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "3220000%",
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
            actualHp: 156000,
            actualAp: 18600,
            actualDps: 13609.8,
            magnification: "1200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-4.0s",
            delayFrames: "120-120f",
            baseHpRatio: "3220000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1699983,
            actualAp: 38250,
            actualDps: 37016.14,
            magnification: "1700%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "3120000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 360000,
            actualAp: 5520,
            actualDps: 2471.64,
            magnification: "1200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "3120000%",
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
            actualHp: 880000,
            actualAp: 71500,
            actualDps: 19324.31,
            magnification: "550%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "3020000%",
            isBoss: true
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
            actualHp: 1996500,
            actualAp: 12358,
            actualDps: 24717.0,
            magnification: "550%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "3020000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 140000,
            actualAp: 42000,
            actualDps: 10862.04,
            magnification: "1400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.7-13.3s",
            delayFrames: "320-400f",
            baseHpRatio: "2920000%",
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
            actualHp: 140000,
            actualAp: 42000,
            actualDps: 10862.04,
            magnification: "1400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "14.7-17.3s",
            delayFrames: "440-520f",
            baseHpRatio: "2920000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 99600,
            actualAp: 14400,
            actualDps: 9818.16,
            magnification: "1200%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "9.3-12.0s",
            delayFrames: "280-360f",
            baseHpRatio: "2920000%",
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
            actualHp: 980000,
            actualAp: 55670,
            actualDps: 104381.2,
            magnification: "1000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "2820000%",
            isBoss: true
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
            actualHp: 143000,
            actualAp: 17050,
            actualDps: 12475.65,
            magnification: "1100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "2820000%",
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
            actualHp: 143000,
            actualAp: 17050,
            actualDps: 12475.65,
            magnification: "1100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-4.0s",
            delayFrames: "120-120f",
            baseHpRatio: "2820000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1599984,
            actualAp: 36000,
            actualDps: 34838.72,
            magnification: "1600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "2720000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 330000,
            actualAp: 5060,
            actualDps: 2265.67,
            magnification: "1100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "2720000%",
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
            actualHp: 800000,
            actualAp: 65000,
            actualDps: 17567.55,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "2620000%",
            isBoss: true
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
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEFBQUGBgYICAgJCQkKCgoKCgoLCwsODg4QEBAUFBQYGBgnJycpKSkxMTEyMjI3Nzc5OTlISEhKSkqLOwZXV1daWlpoaGilXhinagV3d3eycSh+fn66cSeCgoK+eSiNjY2/iDmYmJjMnhLMmkjYmivWmy+hoaHRqA/ToT3XqzOtra3ZrmDjvEO/v7/lxVHjwm3qz27Pz8/t1YPw2oTc3Nzy35Pz5Jr//wHn5+f08ez6+vr////////j/zl2AAAAQHRSTlMABxEcJsj/MqTcRFWHZb56j9ye/K7GDf7Z/yAI/z3of/+W/1n+KGLMsP8RkEf+w2T+gNum/urD//TeAf/+/wD/DWsFhwAABU1JREFUWIXtV1tb3DgMJRcSmjBXT0gMnqwxZouhpoaauq3t5v//q5UzF2aGaUl3X1cP+TIhOj6SjqRw8vM/2sn/AD9PhtqPq3uw27WF+6vBvmBX97efPj/cfdzY3cPT50/398P9P335/vL8eHd9/Vew6+u7j88vL1+fbn8MBFg+e/d4s7y8urq4Wtnl8uHFu4eLgQCXj9+c+/71y9PT596enr58/e7cy/VQgIvLm4fH55dvOwYRPSyH+geIi4vL5fLm5u/ebm6Wy8uLP3B/tR/B/pXnSVJErz/Wt0mZDAfIx8X2Pi7TgFIsxukfADRVuT44nVY5HD9pxTT6vdOuxQvVTpIoiuJ8oWQZ5Qtp23y4/0k0UU4spvPJoiJazyet8epPCERx0VoviVbGSEJrYTvbDM9AnE8WDRLeMdWBqVr5zovRUAJRMW8ZqTFRnaLed51kcDWLeKB7Pm21oYwYTa3lFhho5jvXFu/7BksnjXJecCY7r23ngIBRVCs5H0YgVAvoEk2NCYeDeU6pIuh8SAaiooJ0QdBUYcs1OBtrDMWAh84GMIjKxvRnMiZrXQsnFWWUSw71aAfUIB61ptsAII64rjEmNXUOMqEn7wIkU5DOKmxJZV0TQplQiq9IufY9GUH63Op8UA6WhEge9NOtMTv9eyHH5Sp9wawmmNZMOQP62Tx8RwhA32ze7ASjApGa6EDHbxH0ESVAtwZecT4Vbl10qBxnQiKMMAf9cczWzLw7bKYoKaeL+bRMR+MZd37t7jQmAEAQqiXwplmG1tz8/jiI0knFtdGqqVrcJytAWCkoqoVyimAm4JGleJMbM9tlkIwqqWUQa5B98FcGrnA8qWsDzaCoIK5nvsmB2tEizEdhDe0Dl5jaXjwK8BSqqVQhdis51d2uqa2UgH2rvQ8qgaAZ6ZvGEhgbVmBiAqrh3lAYA0cBYmAPLzmGEYcwCORIay9qiQSDJ72TlpA/Rc0uwEbM6bw1RsNrTtVQKxhcxmJuCOaE4FqvDgWATkIXvVLwGymmC6E5lhbe9NZqjbUl0DkQMZcwhdYeWvgQFNlSAEHZKuyl9GzWQJ14LXyPIZlViGIGM8c4a7dqZg6mqIA+Ds5WS84Ya4pedMUZaqsZzGsCatdEM4Jq0JvbS5gP08TAIIJprsBZSKg2WcUQFaMiHzcNwnUNRDRCiOhadfumAwVJKZSCK4iPUMpZtd2tUZqXZ5Pz8XSmZdCst/4AwGJYRY4hROForox1kIU9LUdxlKRpIyjw0AfekHI1H1Vcwh+x0Jvo/NvdWCIMyXeH/kCgyaHXzmdo2wk9wOFEiKaA/4Z9sNUejYqx2v2rPJyLcWWOnN4XoVxTbHcB3my3vD12elDNJtp4vlueN0ko+VF/SMG2YDlsik0OQwz7KTiXvwDQ823njtrNhgtbcrHnX84O5bPN1ug1T5O2nyuKQGO4Zs+/wW8EsIl1p17xVEC3K5RlzL8CxEU5alhtBgBAGmBmyCzLCCR382zRUjSbN/ZXALvZTirLuSVZ/RpCsuCaj4u0cb8o494GSCpjiLEi9Ge1elSMx+NJegIAq+r0Tb9dQeFzaPeTFgphaJhNTrfr5MZpkkQrHYXN3Tt75/s70ObhtwAM0WrMjWoXo30lAgDMUuYto9Kb1TJ0WAHRg2/qKEmS82peHO7GwMAgDCgZdl6GOsFv0dljH3RR8vZhALAA0Kmsv2Q0XIFRNfCLMF0zAK/adToAeAa3b9bwcYvzUaNgosEmlBkSimdZrXWdIanq87J4/18LGDhnUM7T01kz+7Cx2YfT09Px2dn5KD/+QfMPL2DDNr7DIBAAAAAASUVORK5CYII=",
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
            actualHp: 1815000,
            actualAp: 11235,
            actualDps: 22470.0,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "2620000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "037",
          enemyName: "まゆげどり",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIDAwMDAwMDAwMDAwMEBAQFBQUGBgYGBgYGBgYHBwcICAgJCQkJCQkKCgoNDQ0SEhIVFRUZGRkeHh4gICAkJCQkJCQlJSUxMTE0NDQ2NjY5OTlBQUFJSUlLS0tOTk5QUFBYWFhgYGBoaGhxcXF1dXV6enqEhISOjo6Wlpafn5+qqqqysrK4uLi/v7/CwsLFxcXQ0NDa2trg4ODo6Ojy8vL4+Pj+/v7OT5paAAAAQHRSTlMAAwcbJdMPLkc7VGDC/nWBoudpj5m4ytmosf/p177M/tf/9uX//8Hy///9///n////////////////////////kvDnLAAABvdJREFUWIWNV4ly4joQDMdyJ9wQDMER2A8dXsvW5QvD///VGxlybSC7U5VKIXlaM62ekfTw8GHNXrP28FertXuN2zP13mLY+CtCrT0adL9/VWvVa/X+ej3tNls/YNQa7c7zetmp1VqtrzPd4aTTnuyC/WI+7HyEUavsPcRGbzpfHIJNv9sbTr4C9Jf77fN8F4a+v9tOe436Q63eanZ7/cmk34Oo6rWHerM/2uw8zIP1/OV1Pf8K0NlwGTHsW/N2m1Gv2X2arbave7DX7Wo66bYnq/XOg2mMSSjFYfQVoDE7qLzIEyWigPjIXc63e8pjIcFEFB7228HY9TDjsdRZUWThS+dPbqevgcqPZVke80Qw5JJYp0l6sUSFnou5yqr5IokOq94fJAK/vdn2wLhMi/J0KlSIKSBczMgAU5GVp/KY6Tig+9VTu/59i+qN7nCJPGBJ5eX5qAM/UBf/iBBRnE7HJGZAgTvoN/9c/j2K4RohjBGOYbk8viCYCAcpIKoAE+wSupnccbcI3YUvVYCQT+L8VEoMCCbyw/wEAXmuJ7MQrYd3hFxl0X+VikLyOiJMHkvhh1rgIC8zTgIRU6pSvGj/oNTmM9c0zIDownASpkXkR4xlhaBMALlZSFS06dwHgABUyLKjZCTUucS+SIA1aQLCRWhDyoNA7oY3NuBqjelvhWUp0OPjo6dL6aKQOV5EqFae8/iI4hKm2eo+B+1VHJM89x+tsSLDsCGO63rmGFZDXpazWGy69wFeJKdH416/LkC4LhgprpiuPoZc73t3SbAApEgvAH5eMMaQhxDJC3IBMMeAmx8AmishcFZQ+7HDj5nvYplyx0vL2LFjEAoVZte/C9B4jhIclwlxHRc2X7iuPJ1z7MRlEbqOQwxIy0h3epfF1oyknKZlroQuTinxvPR8PoYOTkCJQmZlBiIJnGX/3kY2526cMmagHE+lYUyxGGoAKpHqox1KGE2lT9HgjhihqaKLbKQCNhmkTotzgkUa4OuQSUHO0W56u5yaKz9m8LkICAbp56dzSuSR0+JUSDvERJbCfGLC23KuT9ZRIpnPkyxLs6I8Q/4BE0SczudTAUNZKiiOTZqqw+wWj80VhRakOcZRCimD/7mUCNG0sJbDjO8xYWybi197N3jsbCLb/owIMDTPKAaLAuT4zBolBGMa6UuX1IcbLNQnO3npoEZyBj0UfAgNo8oYghYtzXuTDW5UVGtK3ppomujIC0Sa58Wx2tI88uM358qibfs7wIxVKyTVlzr0PFnxYLnkfnAFv8LcKsnWc5BcMrggxF50PJ0tRpn6TF09E1P9k6+dbwCNVXiZ45dmrpkfSIAoDYhDXv1NHFURyn3vLgCsfFlLBr4fq1QRn8Zv9GlyyfMnAAlKuuYiGRwz0OH1O4HKv350A+CNA4UDA0wmwFeipYiF+sS/uIZ3i4PWiJlqXUYUEAleWkp7wCqpAKOKKgk9ed2FGwBvOuC+kFyAK5wG0JEMZyw0iRBGKc3wJZ3oxjbWnw7qjcXY93wBbLgeHG0hdHcDccVQoZjpixLnzW8Atd5eVOkRh0rmIFG5qjSBpghxBAh7PHJRxYGhoxsdobutJgVyiBKeD8kqarMSmAOr3EVcc+SwpCqm4Q2A5qraBulB59Wx3TvgD1yNsnlLAmpWHPFqkf2tcm4ND7raxrDawz8s0bpC57Ye+I1asiS8xjY80ME39w8dVJ/Q2c2m2HymxhJE1NuqaaWoDzPcEzB6uyHZrrwHfMMQN1eAJL1IyhipLZ70rZA0Gd05Wpqzg4QUHu0OJImEnmYE9DajOSeRxQkdODhMuL0dgL0ivVBtmIMtAITrMx0hxIz0EOjKDrlIJNH+6e4tq97bhEZ4QVUUMXLgB3K4UZ4LYoag7JTYTX94E7Se9pGmXiVJzVAMhEPWmhEbE8jRE/Kw+umWBbecfRRDwJZ7JUBGEk6CRFUlDUIMJH3p3L8jWRqa0z0PXS/+LgXF4P5MX+4R+IEw24fosar792PA/qnAcRi9uwGfENqzPRovD1y+d7LEaMnxcunuBn/3tzEMl4un57VPA3gwgEUhhSfEeDgaz3/O/x2h0e83uwsaeutXa9vFmMZ01e5Muv/k/1C9tRqzMAvnnba1ziDO2bD16fn1DwbFnYXXa0BzFSX7yb+uXkXQ6k5eDiYY9OARCRktuN6t+t2fXpRfrN4e/vc7VoU4bJ+a8GODZaHi3/89/cPLuAbPxVZ3tCb6WKQRccez/miMaJwdjxKvZ+1Wq17/6WXbaveehrP5+NGD5wWy19PxcmzvrYgJuMSP57PpU7/buEtHvTOd/xpXHpcL82dzq+vu+NdgNLl7VbURTIbT2Wg+GAwWi8Wvd4Mfg8F8NJoNbQSfk/gfgmmYBiwmlAwAAAAASUVORK5CYII=",
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
            actualHp: 130000,
            actualAp: 39000,
            actualDps: 10086.18,
            magnification: "1300%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.7-13.3s",
            delayFrames: "320-400f",
            baseHpRatio: "2520000%",
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
            actualHp: 130000,
            actualAp: 39000,
            actualDps: 10086.18,
            magnification: "1300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "14.7-17.3s",
            delayFrames: "440-520f",
            baseHpRatio: "2520000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 91300,
            actualAp: 13200,
            actualDps: 8999.98,
            magnification: "1100%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "9.3-12.0s",
            delayFrames: "280-360f",
            baseHpRatio: "2520000%",
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
            actualHp: 882000,
            actualAp: 50103,
            actualDps: 93943.08,
            magnification: "900%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "2420000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 130000,
            actualAp: 15500,
            actualDps: 11341.5,
            magnification: "1000%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "2420000%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 130000,
            actualAp: 15500,
            actualDps: 11341.5,
            magnification: "1000%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-4.0s",
            delayFrames: "120-120f",
            baseHpRatio: "2420000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1499985,
            actualAp: 33750,
            actualDps: 32661.3,
            magnification: "1500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "2320000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 300000,
            actualAp: 4600,
            actualDps: 2059.7,
            magnification: "1000%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "2320000%",
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
            actualHp: 720000,
            actualAp: 58500,
            actualDps: 15810.8,
            magnification: "450%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "2220000%",
            isBoss: true
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
            actualHp: 1633500,
            actualAp: 10111,
            actualDps: 20223.0,
            magnification: "450%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "2220000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "037",
          enemyName: "まゆげどり",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIDAwMDAwMDAwMDAwMEBAQFBQUGBgYGBgYGBgYHBwcICAgJCQkJCQkKCgoNDQ0SEhIVFRUZGRkeHh4gICAkJCQkJCQlJSUxMTE0NDQ2NjY5OTlBQUFJSUlLS0tOTk5QUFBYWFhgYGBoaGhxcXF1dXV6enqEhISOjo6Wlpafn5+qqqqysrK4uLi/v7/CwsLFxcXQ0NDa2trg4ODo6Ojy8vL4+Pj+/v7OT5paAAAAQHRSTlMAAwcbJdMPLkc7VGDC/nWBoudpj5m4ytmosf/p177M/tf/9uX//8Hy///9///n////////////////////////kvDnLAAABvdJREFUWIWNV4ly4joQDMdyJ9wQDMER2A8dXsvW5QvD///VGxlybSC7U5VKIXlaM62ekfTw8GHNXrP28FertXuN2zP13mLY+CtCrT0adL9/VWvVa/X+ej3tNls/YNQa7c7zetmp1VqtrzPd4aTTnuyC/WI+7HyEUavsPcRGbzpfHIJNv9sbTr4C9Jf77fN8F4a+v9tOe436Q63eanZ7/cmk34Oo6rWHerM/2uw8zIP1/OV1Pf8K0NlwGTHsW/N2m1Gv2X2arbave7DX7Wo66bYnq/XOg2mMSSjFYfQVoDE7qLzIEyWigPjIXc63e8pjIcFEFB7228HY9TDjsdRZUWThS+dPbqevgcqPZVke80Qw5JJYp0l6sUSFnou5yqr5IokOq94fJAK/vdn2wLhMi/J0KlSIKSBczMgAU5GVp/KY6Tig+9VTu/59i+qN7nCJPGBJ5eX5qAM/UBf/iBBRnE7HJGZAgTvoN/9c/j2K4RohjBGOYbk8viCYCAcpIKoAE+wSupnccbcI3YUvVYCQT+L8VEoMCCbyw/wEAXmuJ7MQrYd3hFxl0X+VikLyOiJMHkvhh1rgIC8zTgIRU6pSvGj/oNTmM9c0zIDownASpkXkR4xlhaBMALlZSFS06dwHgABUyLKjZCTUucS+SIA1aQLCRWhDyoNA7oY3NuBqjelvhWUp0OPjo6dL6aKQOV5EqFae8/iI4hKm2eo+B+1VHJM89x+tsSLDsCGO63rmGFZDXpazWGy69wFeJKdH416/LkC4LhgprpiuPoZc73t3SbAApEgvAH5eMMaQhxDJC3IBMMeAmx8AmishcFZQ+7HDj5nvYplyx0vL2LFjEAoVZte/C9B4jhIclwlxHRc2X7iuPJ1z7MRlEbqOQwxIy0h3epfF1oyknKZlroQuTinxvPR8PoYOTkCJQmZlBiIJnGX/3kY2526cMmagHE+lYUyxGGoAKpHqox1KGE2lT9HgjhihqaKLbKQCNhmkTotzgkUa4OuQSUHO0W56u5yaKz9m8LkICAbp56dzSuSR0+JUSDvERJbCfGLC23KuT9ZRIpnPkyxLs6I8Q/4BE0SczudTAUNZKiiOTZqqw+wWj80VhRakOcZRCimD/7mUCNG0sJbDjO8xYWybi197N3jsbCLb/owIMDTPKAaLAuT4zBolBGMa6UuX1IcbLNQnO3npoEZyBj0UfAgNo8oYghYtzXuTDW5UVGtK3ppomujIC0Sa58Wx2tI88uM358qibfs7wIxVKyTVlzr0PFnxYLnkfnAFv8LcKsnWc5BcMrggxF50PJ0tRpn6TF09E1P9k6+dbwCNVXiZ45dmrpkfSIAoDYhDXv1NHFURyn3vLgCsfFlLBr4fq1QRn8Zv9GlyyfMnAAlKuuYiGRwz0OH1O4HKv350A+CNA4UDA0wmwFeipYiF+sS/uIZ3i4PWiJlqXUYUEAleWkp7wCqpAKOKKgk9ed2FGwBvOuC+kFyAK5wG0JEMZyw0iRBGKc3wJZ3oxjbWnw7qjcXY93wBbLgeHG0hdHcDccVQoZjpixLnzW8Atd5eVOkRh0rmIFG5qjSBpghxBAh7PHJRxYGhoxsdobutJgVyiBKeD8kqarMSmAOr3EVcc+SwpCqm4Q2A5qraBulB59Wx3TvgD1yNsnlLAmpWHPFqkf2tcm4ND7raxrDawz8s0bpC57Ye+I1asiS8xjY80ME39w8dVJ/Q2c2m2HymxhJE1NuqaaWoDzPcEzB6uyHZrrwHfMMQN1eAJL1IyhipLZ70rZA0Gd05Wpqzg4QUHu0OJImEnmYE9DajOSeRxQkdODhMuL0dgL0ivVBtmIMtAITrMx0hxIz0EOjKDrlIJNH+6e4tq97bhEZ4QVUUMXLgB3K4UZ4LYoag7JTYTX94E7Se9pGmXiVJzVAMhEPWmhEbE8jRE/Kw+umWBbecfRRDwJZ7JUBGEk6CRFUlDUIMJH3p3L8jWRqa0z0PXS/+LgXF4P5MX+4R+IEw24fosar792PA/qnAcRi9uwGfENqzPRovD1y+d7LEaMnxcunuBn/3tzEMl4un57VPA3gwgEUhhSfEeDgaz3/O/x2h0e83uwsaeutXa9vFmMZ01e5Muv/k/1C9tRqzMAvnnba1ziDO2bD16fn1DwbFnYXXa0BzFSX7yb+uXkXQ6k5eDiYY9OARCRktuN6t+t2fXpRfrN4e/vc7VoU4bJ+a8GODZaHi3/89/cPLuAbPxVZ3tCb6WKQRccez/miMaJwdjxKvZ+1Wq17/6WXbaveehrP5+NGD5wWy19PxcmzvrYgJuMSP57PpU7/buEtHvTOd/xpXHpcL82dzq+vu+NdgNLl7VbURTIbT2Wg+GAwWi8Wvd4Mfg8F8NJoNbQSfk/gfgmmYBiwmlAwAAAAASUVORK5CYII=",
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
            actualHp: 120000,
            actualAp: 36000,
            actualDps: 9310.32,
            magnification: "1200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.7-13.3s",
            delayFrames: "320-400f",
            baseHpRatio: "2120000%",
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
            actualHp: 120000,
            actualAp: 36000,
            actualDps: 9310.32,
            magnification: "1200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "14.7-17.3s",
            delayFrames: "440-520f",
            baseHpRatio: "2120000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 83000,
            actualAp: 12000,
            actualDps: 8181.8,
            magnification: "1000%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "9.3-12.0s",
            delayFrames: "280-360f",
            baseHpRatio: "2120000%",
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
            actualHp: 784000,
            actualAp: 44536,
            actualDps: 83504.96,
            magnification: "800%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "2020000%",
            isBoss: true
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
            actualHp: 117000,
            actualAp: 13950,
            actualDps: 10207.35,
            magnification: "900%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "2020000%",
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
            actualHp: 117000,
            actualAp: 13950,
            actualDps: 10207.35,
            magnification: "900%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-4.0s",
            delayFrames: "120-120f",
            baseHpRatio: "2020000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1399986,
            actualAp: 31500,
            actualDps: 30483.88,
            magnification: "1400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "1920000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 270000,
            actualAp: 4140,
            actualDps: 1853.73,
            magnification: "900%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "1920000%",
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
            actualHp: 640000,
            actualAp: 52000,
            actualDps: 14054.04,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "1820000%",
            isBoss: true
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
            actualHp: 1452000,
            actualAp: 8988,
            actualDps: 17976.0,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "1820000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 8534.46,
            magnification: "1100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.7-13.3s",
            delayFrames: "320-400f",
            baseHpRatio: "1720000%",
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
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 8534.46,
            magnification: "1100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "14.7-17.3s",
            delayFrames: "440-520f",
            baseHpRatio: "1720000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 74700,
            actualAp: 10800,
            actualDps: 7363.62,
            magnification: "900%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "9.3-12.0s",
            delayFrames: "280-360f",
            baseHpRatio: "1720000%",
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
            actualHp: 686000,
            actualAp: 38969,
            actualDps: 73066.84,
            magnification: "700%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "1620000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 104000,
            actualAp: 12400,
            actualDps: 9073.2,
            magnification: "800%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "1620000%",
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
            actualHp: 104000,
            actualAp: 12400,
            actualDps: 9073.2,
            magnification: "800%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-4.0s",
            delayFrames: "120-120f",
            baseHpRatio: "1620000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1299987,
            actualAp: 29250,
            actualDps: 28306.46,
            magnification: "1300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "1520000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 240000,
            actualAp: 3680,
            actualDps: 1647.76,
            magnification: "800%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "1520000%",
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
            actualHp: 560000,
            actualAp: 45500,
            actualDps: 12297.28,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "1420000%",
            isBoss: true
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
            actualHp: 1270500,
            actualAp: 7864,
            actualDps: 15729.0,
            magnification: "350%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "1420000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 100000,
            actualAp: 30000,
            actualDps: 7758.6,
            magnification: "1000%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.7-13.3s",
            delayFrames: "320-400f",
            baseHpRatio: "1320000%",
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
            actualHp: 100000,
            actualAp: 30000,
            actualDps: 7758.6,
            magnification: "1000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "14.7-17.3s",
            delayFrames: "440-520f",
            baseHpRatio: "1320000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 66400,
            actualAp: 9600,
            actualDps: 6545.44,
            magnification: "800%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "9.3-12.0s",
            delayFrames: "280-360f",
            baseHpRatio: "1320000%",
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
            actualHp: 588000,
            actualAp: 33402,
            actualDps: 62628.72,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "1220000%",
            isBoss: true
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
            actualHp: 91000,
            actualAp: 10850,
            actualDps: 7939.05,
            magnification: "700%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "1220000%",
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
            actualHp: 91000,
            actualAp: 10850,
            actualDps: 7939.05,
            magnification: "700%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-4.0s",
            delayFrames: "120-120f",
            baseHpRatio: "1220000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1199988,
            actualAp: 27000,
            actualDps: 26129.04,
            magnification: "1200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "1120000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 210000,
            actualAp: 3220,
            actualDps: 1441.79,
            magnification: "700%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "1120000%",
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
            actualHp: 480000,
            actualAp: 39000,
            actualDps: 10540.53,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "1020000%",
            isBoss: true
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
            actualHp: 1089000,
            actualAp: 6741,
            actualDps: 13482.0,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "1020000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 90000,
            actualAp: 27000,
            actualDps: 6982.74,
            magnification: "900%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.7-13.3s",
            delayFrames: "320-400f",
            baseHpRatio: "920000%",
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
            actualHp: 90000,
            actualAp: 27000,
            actualDps: 6982.74,
            magnification: "900%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "14.7-17.3s",
            delayFrames: "440-520f",
            baseHpRatio: "920000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 58100,
            actualAp: 8400,
            actualDps: 5727.26,
            magnification: "700%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "9.3-12.0s",
            delayFrames: "280-360f",
            baseHpRatio: "920000%",
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
            actualHp: 490000,
            actualAp: 27835,
            actualDps: 52190.6,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "820000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 78000,
            actualAp: 9300,
            actualDps: 6804.9,
            magnification: "600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "820000%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 78000,
            actualAp: 9300,
            actualDps: 6804.9,
            magnification: "600%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-4.0s",
            delayFrames: "120-120f",
            baseHpRatio: "820000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 1099989,
            actualAp: 24750,
            actualDps: 23951.62,
            magnification: "1100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "720000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 180000,
            actualAp: 2760,
            actualDps: 1235.82,
            magnification: "600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "720000%",
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
            actualHp: 400000,
            actualAp: 32500,
            actualDps: 8783.77,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "670000%",
            isBoss: true
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
            actualHp: 907500,
            actualAp: 5617,
            actualDps: 11235.0,
            magnification: "250%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "670000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.7-13.3s",
            delayFrames: "320-400f",
            baseHpRatio: "620000%",
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
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "14.7-17.3s",
            delayFrames: "440-520f",
            baseHpRatio: "620000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 49800,
            actualAp: 7200,
            actualDps: 4909.08,
            magnification: "600%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "9.3-12.0s",
            delayFrames: "280-360f",
            baseHpRatio: "620000%",
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
            actualHp: 392000,
            actualAp: 22268,
            actualDps: 41752.48,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "570000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "570000%",
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
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-4.0s",
            delayFrames: "120-120f",
            baseHpRatio: "570000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 999990,
            actualAp: 22500,
            actualDps: 21774.2,
            magnification: "1000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "520000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 150000,
            actualAp: 2300,
            actualDps: 1029.85,
            magnification: "500%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "520000%",
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
            actualHp: 320000,
            actualAp: 26000,
            actualDps: 7027.02,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "470000%",
            isBoss: true
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
            actualHp: 726000,
            actualAp: 4494,
            actualDps: 8988.0,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "470000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 70000,
            actualAp: 21000,
            actualDps: 5431.02,
            magnification: "700%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.7-13.3s",
            delayFrames: "320-400f",
            baseHpRatio: "420000%",
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
            actualHp: 70000,
            actualAp: 21000,
            actualDps: 5431.02,
            magnification: "700%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "14.7-17.3s",
            delayFrames: "440-520f",
            baseHpRatio: "420000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 41500,
            actualAp: 6000,
            actualDps: 4090.9,
            magnification: "500%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "9.3-12.0s",
            delayFrames: "280-360f",
            baseHpRatio: "420000%",
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
            actualHp: 294000,
            actualAp: 16701,
            actualDps: 31314.36,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "370000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 52000,
            actualAp: 6200,
            actualDps: 4536.6,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "370000%",
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
            actualHp: 52000,
            actualAp: 6200,
            actualDps: 4536.6,
            magnification: "400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-4.0s",
            delayFrames: "120-120f",
            baseHpRatio: "370000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 899991,
            actualAp: 20250,
            actualDps: 19596.78,
            magnification: "900%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "320000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 120000,
            actualAp: 1840,
            actualDps: 823.88,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "320000%",
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
            actualHp: 240000,
            actualAp: 19500,
            actualDps: 5270.27,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "270000%",
            isBoss: true
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "270000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 60000,
            actualAp: 18000,
            actualDps: 4655.16,
            magnification: "600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.7-13.3s",
            delayFrames: "320-400f",
            baseHpRatio: "220000%",
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
            actualHp: 60000,
            actualAp: 18000,
            actualDps: 4655.16,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "14.7-17.3s",
            delayFrames: "440-520f",
            baseHpRatio: "220000%",
            isBoss: true
          },
          abilities: {}
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
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "9.3-12.0s",
            delayFrames: "280-360f",
            baseHpRatio: "220000%",
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
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "170000%",
            isBoss: true
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
            actualHp: 39000,
            actualAp: 4650,
            actualDps: 3402.45,
            magnification: "300%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "170000%",
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
            actualHp: 39000,
            actualAp: 4650,
            actualDps: 3402.45,
            magnification: "300%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-4.0s",
            delayFrames: "120-120f",
            baseHpRatio: "170000%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "024",
          enemyName: "ぶんぶん先生",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2250,
            dps: 2177.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 10,
            money: 8000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 799992,
            actualAp: 18000,
            actualDps: 17419.36,
            magnification: "800%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "125000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 90000,
            actualAp: 1380,
            actualDps: 617.91,
            magnification: "300%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "125000%",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "79000%",
            isBoss: true
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
            actualHp: 363000,
            actualAp: 2247,
            actualDps: 4494.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "79000%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 50000,
            actualAp: 15000,
            actualDps: 3879.3,
            magnification: "500%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.7-13.3s",
            delayFrames: "320-400f",
            baseHpRatio: "48000%",
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
            actualHp: 50000,
            actualAp: 15000,
            actualDps: 3879.3,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "14.7-17.3s",
            delayFrames: "440-520f",
            baseHpRatio: "48000%",
            isBoss: true
          },
          abilities: {}
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
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "9.3-12.0s",
            delayFrames: "280-360f",
            baseHpRatio: "48000%",
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
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "25000%",
            isBoss: true
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
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "25000%",
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
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-4.0s",
            delayFrames: "120-120f",
            baseHpRatio: "25000%",
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
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-12.0s",
            delayFrames: "300-360f",
            baseHpRatio: "13000%",
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
            actualHp: 30000,
            actualAp: 9000,
            actualDps: 2327.58,
            magnification: "300%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.0s",
            delayFrames: "400-480f",
            baseHpRatio: "13000%",
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
            actualHp: 30000,
            actualAp: 9000,
            actualDps: 2327.58,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "13000%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 19500,
            actualAp: 2325,
            actualDps: 1701.22,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "15.3-18.0s",
            delayFrames: "460-540f",
            baseHpRatio: "5000%",
            isBoss: true
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
            actualHp: 19500,
            actualAp: 2325,
            actualDps: 1701.22,
            magnification: "150%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-12.0s",
            delayFrames: "300-360f",
            baseHpRatio: "5000%",
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
            actualHp: 30000,
            actualAp: 2100,
            actualDps: 715.92,
            magnification: "600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "52.0-53.3s",
            delayFrames: "1,560-1,600f",
            baseHpRatio: "0%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e11012Data;

