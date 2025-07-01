// Stage 1247 Data
import type { StageData } from '../../app/stage/types';

export const e1247Data: StageData = {
  eventId: 1247,
  eventName: "絶・台風零号",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 247,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "始祖の古渦 超極ムズ",
      baseHp: 1000000,
      width: 6000,
      enemyLimit: 10,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "1000000",
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
          enemyId: "438",
          enemyName: "エンシェントサイクロン",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 2333333,
            ap: 7777,
            dps: 38885.0,
            speed: 18,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3000,
            freq: 6,
            foreswing: 1,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 2333333,
            actualAp: 7777,
            actualDps: 38885.0,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
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
            actualHp: 3200,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "4000%",
            count: "6",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "3.0-5.0s",
            delayFrames: "90-150f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "412",
          enemyName: "イングリッス",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 50000,
            ap: 12500,
            dps: 28846.15,
            speed: 40,
            range: 110,
            rangeType: "単体",
            kbLevel: 5,
            money: 50,
            freq: 13,
            foreswing: 6,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 12500,
            actualDps: 28846.15,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "272",
          enemyName: "ちびぶんぶん",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 29997,
            ap: 1125,
            dps: 1088.71,
            speed: 38,
            range: 150,
            rangeType: "範囲",
            kbLevel: 5,
            money: 300,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 299970,
            actualAp: 11250,
            actualDps: 10887.1,
            magnification: "1000%",
            count: "0",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "66.7-66.7s",
            delayFrames: "2,000-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 120000,
            actualAp: 9369,
            actualDps: 17566.86,
            magnification: "300%",
            count: "0",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "66.7-66.7s",
            delayFrames: "2,000-2,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "絶滅の古渦 超極ムズ",
      baseHp: 1250000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10453",
          treasureName: "未来ネコへの進化権(古代ネコの第3形態)",
          probability: "100",
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
            actualHp: 3200,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "407",
          enemyName: "古代わんこ",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 75000,
            ap: 12000,
            dps: 8571.43,
            speed: 20,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 42,
            foreswing: 4,
            backswing: 38,
            tba: 15
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 12000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "5",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "361",
          enemyName: "スター・ペン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 14000,
            ap: 750,
            dps: 937.5,
            speed: 14,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 0
          },
          stageStats: {
            actualHp: 350000,
            actualAp: 18750,
            actualDps: 23437.5,
            magnification: "2500%",
            count: "3",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
            actualHp: 400000,
            actualAp: 32500,
            actualDps: 8783.77,
            magnification: "250%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "365",
          enemyName: "キャプテン・モグー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAEBAQJCQkMDAwODg0PDw8WFRUYGBgaGhsaGhoaGhoeHh4fHx8iIiIpKSguLi5NMwE3ODg4ODg9NzhDQEBCRUVERUdGSUn/AABNUlJQWVhYWFhgYGBoZ2hkbW2tVGSkWmx1dXWtUqp9fHxkioOpanyDhIaEhISjkCSKiorWaZRroJjdaZuSkpHga5fCiZScnJvIrQ59t67/f4e1tbaJz8PvzAiQ4dO90s+Y7+Gg/OzN5+Lo6erw9/b+/v7///+wjuAlAAAAQHRSTlMACiY9GE4xv2GL1artd0T/DrikYorI/tsB7P+5/OT/ncH9A//+/u7///8Q/DH/WP7///8C//7//v/+/v////8AApUKPwAABBNJREFUWIXtVWF3ojgULaAUrcqICmsM2aZRYmQyzbBhAIHu//9X+4K2a6ezU7Vf9kPv8RzQ5N7cd18Sb/7+IG4+BT4FPgX+LwLv4eGvd6f8hrx7eNjtPiBwszP4kMDXb193H6lh9w2w+/J+Ur+EZffn9wbzL9cJOLdxsnkExO5V/N6dzyQIbDYL949rBLyl7+PNZhP/ObmqBMub3g25fnyMZr1r+FCCd7cUkjIcT71rJOxBrJu2LbUQOgnsi/nuVDVPBg3fSsWCSz3YgW47fsm3P35sdeJdxrfG6sAHge8gUNeryyzYixrIrRGpt9+327JN+hcJ9BMTQGMEWsG00iUfWGfbdx3LU+UhwrYpOSEo9P2hc2M5/XNU3EXkzHRTN09trSlQjxhYzhBUzhFYjseiaRtNDmxEuMAERf3BaHjOfrCcwTBCstUdeU3WZd3WiqNwEY3ODKK3YAKX3A9FXtcV8JsMdLIiX5xTgRFYMUkE90nT1lm+b5osr6r9fp+Oz+yEFVBBCfeRLsu8rGud7fdVUeWrc0+ENcacMemHGVhPM1g/TwlJ4/P3kn0XYq18VO3zLKuqjCCEETqrBUc4Q6SQEajSvFr7YYgI8UcX7Ob+yPRwDcFVVYrWWV5U6ej2zB50Dm5DhNbFft9JdI8iuoB/05vnR94LqrMztHqu48VZsf8J6cDzPPf9a8EeT6N4DbmnP1lYj3CaJqt3LlirP13nhllk5LVC0SlWRRI4v5Gw+lH+TCvS7FQgR8dM02jl/deWtrwoP6Gkrx0cBTIsk9mvyO5sNhiFWVU8x1cQ6P+/XSDZwQDXVN+//bvtzWNBkdbEHNyqMMwUE/N+5BfLpXGXk/JJS/XmlrdmiZJYPzWEa0UIXZM8J0xSDBJZDiciZcslWadZisq2ITiYnXoA9+OFFAw3rcZwFYpQ1xpUhOBcSS4YEVIqwRmcKACrOaLJanKy+n2SCMkZqZXP2laHom2VjxkXR2DKBXzhjFL4wMESUqmX26HnRUpJKTgNMQau8n0BIphSwoAMtzqB08jADTWeMKEhAjWZjA/b0qQHbPAJ8wTicI8gXCKilGKIUs4ZZ4IhBuNIwkISFGlnLo67MqzJKoYfGBZmFMNiUoY4NGtICmUxeJrfcZeDAdjn4BgeatVF2XNg+4dESTMK0SvJQtLNFN16phBxqOcZSnazVRIcorTsgEp5GOkmdJkdlhOdXVgccy5eoQti/tyIVVfXgchfZhy/M0YxRiBw1Dg8oOxo7r5shfF0Cd2CzNhL+/gBNAqmw2EURUsTKaU0htc4jqfB2D09VXbfC1arxfRuuogxJibXyGAR9C3LdhzX6c+ni2Awnk1c25lM3J715lBaPYDVsx1vPAimwcxxXcexrdPxN6R/AAWtwIoGV1/TAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 16000,
            ap: 222,
            dps: 37.0,
            speed: 6,
            range: 300,
            rangeType: "範囲",
            kbLevel: 6,
            money: 750,
            freq: 180,
            foreswing: 61,
            backswing: 45,
            tba: 60
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 5550,
            actualDps: 925.0,
            magnification: "2500%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
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
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "438",
          enemyName: "エンシェントサイクロン",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 2333333,
            ap: 7777,
            dps: 38885.0,
            speed: 18,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3000,
            freq: 6,
            foreswing: 1,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 2333333,
            actualAp: 7777,
            actualDps: 38885.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e1247Data;

