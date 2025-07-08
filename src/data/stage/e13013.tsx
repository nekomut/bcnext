// Stage 13013 Data
import type { StageData } from '../../app/stage/types';

export const e13013Data: StageData = {
  eventId: 13013,
  eventName: "島流しリゾート",
  typeId: 13,
  typeName: "真レジェンドストーリー",
  prefix: "NA",
  mapId: 13,
  specialRule: null,
  crownData: {
    crownCount: 4,
    magnifications: [100, 140, 180, 100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "贖罪バカンス",
      baseHp: 900000,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 140, 180, 100],
        baseDifficulty: 1
      },
      treasures: [
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
            actualHp: 8000,
            actualAp: 800,
            actualDps: 800.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-6.0s",
            delayFrames: "2-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "360",
          enemyName: "エリートエイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 500,
            dps: 405.41,
            speed: 12,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 175000,
            actualAp: 12500,
            actualDps: 10135.25,
            magnification: "2500%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 35,
                distance: 750,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "360",
          enemyName: "エリートエイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 500,
            dps: 405.41,
            speed: 12,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 175000,
            actualAp: 12500,
            actualDps: 10135.25,
            magnification: "2500%",
            count: "15",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 35,
                distance: 750,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "048",
          enemyName: "エリザベス2世",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 40000,
            ap: 400,
            dps: 545.45,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 600,
            freq: 22,
            foreswing: 14,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 8000,
            actualDps: 10909.0,
            magnification: "2000%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "048",
          enemyName: "エリザベス2世",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 40000,
            ap: 400,
            dps: 545.45,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 600,
            freq: 22,
            foreswing: 14,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 8000,
            actualDps: 10909.0,
            magnification: "2000%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 300,
                ld_range: [300, 600]
            },
            "barrier": {
                hp: 2500
            },
            "warp": {
                chance: 30,
                distance: 250,
                duration_f: 40,
                duration_s: 1.33
            }
          }
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
            actualHp: 1200000,
            actualAp: 32000,
            actualDps: 2253.52,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.0-20.0s",
            delayFrames: "90-600f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "プライベート熱帯雨林",
      baseHp: 850000,
      width: 6000,
      enemyLimit: 15,
      requiredCost: 190,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 140, 180, 100],
        baseDifficulty: 1
      },
      treasures: [
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
            actualHp: 48000,
            actualAp: 6000,
            actualDps: 4864.86,
            magnification: "300%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-30.0s",
            delayFrames: "500-900f",
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
            actualHp: 8000,
            actualAp: 800,
            actualDps: 800.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "3.0-20.0s",
            delayFrames: "90-600f",
            baseHpRatio: "100%",
            isBoss: false
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
            count: "0",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 38000,
            actualAp: 30000,
            actualDps: 6569.34,
            magnification: "200%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 360000,
            actualAp: 15000,
            actualDps: 23684.22,
            magnification: "300%",
            count: "2",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "60.0-60.0s",
            delayFrames: "1,800-1,800f",
            baseHpRatio: "100%",
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
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 38000,
            actualAp: 30000,
            actualDps: 6569.34,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 38000,
            actualAp: 30000,
            actualDps: 6569.34,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "80%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 38000,
            actualAp: 30000,
            actualDps: 6569.34,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "70%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "無礼講ナイトビーチ",
      baseHp: 900000,
      width: 5600,
      enemyLimit: 20,
      requiredCost: 170,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 140, 180, 100],
        baseDifficulty: 1
      },
      treasures: [
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
          enemyId: "355",
          enemyName: "ケロ助",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 3789,
            dps: 762.89,
            speed: 3,
            range: 900,
            rangeType: "範囲",
            kbLevel: 4,
            money: 800,
            freq: 149,
            foreswing: 20,
            backswing: 21,
            tba: 65
          },
          stageStats: {
            actualHp: 540000,
            actualAp: 5683,
            actualDps: 1144.34,
            magnification: "150%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-30.0s",
            delayFrames: "500-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 1100,
                ld_range: [1100, 1400]
            },
            "slow": {
                chance: 100,
                duration_f: 1800,
                duration_s: 60.0
            }
          }
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
            actualHp: 8000,
            actualAp: 800,
            actualDps: 800.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "043",
          enemyName: "ハイ・エナジー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6101,
            dps: 3050.5,
            speed: 14,
            range: 344,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1101,
            freq: 60,
            foreswing: 30,
            backswing: 30,
            tba: 15
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 18303,
            actualDps: 9151.5,
            magnification: "300%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "033",
          enemyName: "フルぼっこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 1497,
            dps: 1952.61,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 11976,
            actualDps: 15620.88,
            magnification: "800%",
            count: "2",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "１３番ホールの住人",
      baseHp: 800000,
      width: 4800,
      enemyLimit: 16,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 140, 180, 100],
        baseDifficulty: 1
      },
      treasures: [
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
            actualHp: 2800,
            actualAp: 1200,
            actualDps: 2000.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-10.0s",
            delayFrames: "60-300f",
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
            actualHp: 45000,
            actualAp: 15000,
            actualDps: 24999.99,
            magnification: "300%",
            count: "30",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "2.0-10.0s",
            delayFrames: "60-300f",
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
          enemyId: "168",
          enemyName: "ワーニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAUEBAQGBgYHBwcHBwcICQkICQoJCgoLDA0LDg8PExMUGxoVGxwUHRwaHR0aIiEZIyMcIyIcJCMhMzApMzInODYsPTwuQ0AsRkEzSEY6Tkw8WFVGX1xDY19ObGlNdnFSdnNUfnp0dHRcjYdilpCGhoZjmJNro5xzr6menp56u7OCxb+5ubmI0MiO2NHIyMiT4tmY6uGc7+Wg9uuh/u7o6Oj////1eMx6AAAAQHRSTlMABQwWHyszO1bFR5upt2R1gpDXoJnRq/7gtu/HnP/X6+Jp/uz/8P7/4Pb//f7//vT+/f/+//7///7///////8ArLlOEQAABG1JREFUWIXtVmlvqzgULWsIaVlClgbKMqwNsVMILq6Nyfz/fzV2mlTpe61mMvNt1BMJRYJ7fO5yLtz9+R9x90PwQ/BD8EPwQ/C/Ivh7yKqmKdI/ePBrSKrlbTZPlirdSTLHrUzSxEtAh9rnp4liOp7nTOTbCFSv6NnIGAErZ5ltt9nSUm4SYCRoHBFoaR/7AA+0r5fmLVnITkFHWq3DlpQVYV3d9IVzSxKyC9iI0/Ua4hIwWnKm2rslB9neDuMAwhyh9F8RSGbUsZH2mNTremBtBbvMvqkPipO1bOQigvu4Y4zi7Uq7JZ730Un6ccSZpXsZGkm9uakJAlrQCQJD1gM4NIFx4yCJKiBBYMvKCg714qYxEpDtjIy8/p6ibuAA3BsEyIrwoLbhkzAyuJyYS4jrB/UkS9V1Vebu+r4ekqRZrmsoqpPxGo5jXzyt/DQP5xZn5Q6LopVlWo6hfnO4bphust1GMy8RXeQScNs2DazzaGFourftOhBxcyXOV2dLih0kS78dhjYt0Sn+AkZQnQRB0aOmb7jNm+C3eNWwTDuBPSgxxbQnV/FM/NiAuxaRMuwYrtL2+be62VG2fIQDIz0GFfkUPQwDY++EtMr7keRh95lAtT0ngH2VItZBgkF3LZ80dV0D2HTcGJRhsWZQRz4RSHayjf2G9Q2hAFI2XGc/gHW1q7ix0zTPK9iintCB4adrAmVR067kBBAz8ilaCCjXh+Nx56eHwyFd51WZ5lUNnv/4ROBtB4bQ0FZ4/A04mxfHt2wWHPjV370dwvVuH36ypjR5yAmta0oI+4IgdoP91tOc4m23caLDbhrsD9G1NSV9VXSMwvaLaDGKsWU/biaStsoCU3XiwLCi2L22lva+wOkv8ee+CQLNsfj8m/e2cqc5Nu/4/eRKgOpmnej2rxiGDwJ9NtMkSb9/MCXZmJmy6YoMJOUE3c1aQn49nsc33YXA8bLMVfiOKxbqZOO7uueL/aq53oIjKBpQ5VVDT7LHgX50r7kQzLPX18S2InGdFfvAzfYRz2GyLF84WlTlNajB+/Bi0JyV4xye/6Th6/F4WC73x+N+Hr++pf7uNTEkPj0F5hPOGu477hSxPEZclacpZkIBeC8jJ9jt93ve/cNhtw53VbhOc/9eF93b8urTGp7zZ3z1XkxM6VBX9FyMkiNP07ISEL5o2qZwRf8XGUR91V26xpr8PZ4hgFib92diykEwd9JAuS+5EXip4Oru9AmxitIcnc5pm+GimscCOvY5vLbF6QbnEU5itI3fN5KkGrPHRtzr0oYNfJpPz8IUCRemH65mpGvargVFkiTZ9uXleWNfdqKkOgXf3vw8gBBMT2QjqSqEeximsMOEENSAIpoGwWZhW4ZhO7ZlqldLXt80QlTtR3Eang9FeRgnEV/GAmm0mdmmPpnwL64LrlaZqrlxDSEEgbMsYVX1PM0e1f69bU/zFtZl6Tu6+t1bRdIMy55N5xyP8+k8yTI/K+IsjpP59OFh+hgJBK751UvgL+9zfSoD5UDcAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 3000,
            ap: 900,
            dps: 870.97,
            speed: 8,
            range: 130,
            rangeType: "単体",
            kbLevel: 4,
            money: 130,
            freq: 31,
            foreswing: 6,
            backswing: 12,
            tba: 13
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 21600,
            actualDps: 20903.28,
            magnification: "2400%",
            count: "15",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "4.0-10.0s",
            delayFrames: "120-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "266",
          enemyName: "ヒカル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000000,
            ap: 2500,
            dps: 375.0,
            speed: 4,
            range: 450,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1800,
            freq: 200,
            foreswing: 27,
            backswing: 66,
            tba: 87
          },
          stageStats: {
            actualHp: 1500000,
            actualAp: 3750,
            actualDps: 562.5,
            magnification: "150%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 650,
                ld_range: [650, 1300]
            },
            "freeze": {
                chance: 100,
                duration_f: 200,
                duration_s: 6.67
            }
          }
        },
        {
          enemyId: "170",
          enemyName: "ゴマサーマン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIEBAQEBAQFBQYFBQUGBgYGBwcGBwgHBwgHCAkICwsJDAwKCwwNExIOFRQRGBkTHhsUIB4WIB4YIyMaJyYbKCcgMTAhMzIiNDEjNTUlNjUlOTcnPTotQ0ExTUk0Tks3U1A/YF0/YV5DZ2NNc3JOd3NVfIVZh4ZhlI5jlpJlm5ZnnJtvp6d0sa16urV/wb+GzMaM1tGR39WV5d6Z6+Gc8uef+Oyh/u7///+Aubl2AAAAQHRSTlMAAwkOhNoYlShBIF8wTHFW8KK4OmjDf1jRk2z7pbfT55LF+6nOd/7A3Or//+7//P7p9//9/v///f////////8A7QPXDAAAA71JREFUWIXtVml3qjoUFbCIVksLDsWhFuWiTEEIJAES3v//Vy9UtHrrxLpfe5YfxOXe2WefgbT++8do/RL8EvwS7AkeD2ky7QsN/v93iFMfbvR/IJAXiEbTxhIE8QARh5tdspab4vXP6QEjKp9wN2koobdJd9+y9S3e9JoR6D7F37KlNW4qobeJQmcq1k/CZIcbuiDo0zXYTg4Myibzm1ZSUDbQ6ta6pU+cGOJtwE+GiQ8XVQsKktQzImQqDQla8jyO5j1RGRrrzdJ2l22loQZBdQgwxpafkDzDMHDMsdKsFPI8zUFEaPkVrEhsTW/EIEwjxspDMBrMVuagSRryG9jjiyTlMlhsh4k1lB8WIb4s8f7wZDZLyzKPA8KwM1cfpZC1sE4A2S4uqTdbobLEgaMNHmPQP8gh/bxgjMaeDSlLPAzM/mMZ+LQ8DZa7dhC6gFJ/+IgEaZ6ewbl6N4FxUrASGtIDBD2TnOJRknpx7Uk6f4Sgb2WnClLXhYeUkocUdLcFO5WQ5cfHaPyIB6p/ij+lYr56Fy1I/UMb/ox8e2+5CPLAsFbxFXxJNrfXm9ibrB2Y2ugaAV7f8lDsj00fFQx6xbUU0I0iCPJ0E2HKoSS7Aq8UXE1B6M932bWDj5FZ10wU9AWAqCK4SULB+PJaEbpmBAPEGMlvS8CXN7Sgm7CACc1hkN4moP7zpVZUFhFllOahF+d3fACXelkc+8WXRQDew5excYFAtzDLimr73i0DXwgVgSCKwjeRbEQ0BaTMCb0HZyysUpAG4/FwoNRXGfHZyVmKuAPB9Q46ROHwtSqNnSgCjmmofUkQJNVC+7UVJHcVlMTqV/uCVK8rDH3LUFVji3L09cMxg6tO1DtxsE1IxueFURL6fpRRXv1zTE6uMOSOWlnwsnQ9D9eu8A/5yz0Wx5dFsFD7GiZ9Swi+UXHi4m/Rp/jUHil7ggSmrH79/uRh4eHFxs7nk7ixb/CLgtB9twHPmhYEk2p3nK1gfo5H6q8InLYWcYMijxZqq78AhBYo8p3lh7UFqDg7v0jcpB7rLIAnlwTkenxUaWq2Bg4h0Fm0n9WuoujDhROntYs8qwJ4+5KwPPHCoz6KwWoGEMZ4t+ata/EG6NXdLKmj19nKgzjLKWUsc8MUIZSmoedVdwtOyjNFweqVx3Lx58+E2ygpinQcBbHb1p6eXjmJbbteAMLQc3kEIE5iHiBw7dVsxtFPT1pncDpDx20iyr3+4Pml3e503jRt9P5Rx/toNNK0t7dOp91+eR7oirw/9n+sqydRIdA1ogAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 365.85,
            speed: 5,
            range: 220,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 41,
            foreswing: 6,
            backswing: 12,
            tba: 18
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 12000,
            actualDps: 8780.4,
            magnification: "2400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "昇天スパマッサージ",
      baseHp: 1000000,
      width: 4900,
      enemyLimit: 8,
      requiredCost: 190,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 140, 180, 100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 800000,
            actualAp: 75052,
            actualDps: 5729.16,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.0-20.0s",
            delayFrames: "90-600f",
            baseHpRatio: "100%",
            isBoss: true
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
            actualHp: 3200,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "16.0-24.0s",
            delayFrames: "480-720f",
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
            actualHp: 50000,
            actualAp: 20000,
            actualDps: 14634.1,
            magnification: "1000%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.0-24.0s",
            delayFrames: "480-720f",
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
            actualHp: 50000,
            actualAp: 20000,
            actualDps: 14634.1,
            magnification: "1000%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.0-24.0s",
            delayFrames: "480-720f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "261",
          enemyName: "イノエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgIFBQUHBwcICAgJCQkJCQkLCwsODg4PDw8QEBAVFRUXFxcZGRkeHh4vLy80NDQ1NTU4ODg/Pz9LS0tMTEz/AABQUFBZWVlbW1tnZ2ehXwOoXw9/fwF0dHR1dXWzcBh/f3+8fyK8ghmIiIiVlZXMjimXl5fRmAHKlTPNnEHOnkimpqbRplGxsbHivQHcs2DluEO6urrfulrHx8fnyoHT09Pu153z4K3h4eHq6un08/L6+vn///////9NoM3wAAAAQHRSTlMACxvWaSio+kI17ljBlYRz34+v+1D+uwHr/9D/CyAC/+Q5/0Qn//9J8QVgc4T+l/4Hr9j+wv/W/+r1/////wD/ZqwpmgAABVtJREFUWIXtVmlX2zgUxQYnTp3dtRtboTICqW6IUBlVqNUy+f//ap5slqRDQzgzH3sPJ2TRu7q6b5HP/v6POPtD8IcgEBzDt/V6fXNzc90B3tys15+PBvwSfbXZ3n//aw/f7+9ury/Xp8Wvr+9//Hz4fre93XzpsNnc3t0/wHfby0+nEFw+eP/X5hIO8blf/+nzen15dfdz93N7kobLux/O/XgA0ZvNF7AAFGxBwU/nHjYnEXxaX2+D4kMA4+3ViSaADSD5y+Z2e9dhG9y4ulx/PTW81/H16zf46wD/35HE/wvJKErSbDadZekojuBz9L74aDKe1A2XUrSrpl6k6WD0PoJRTZG21hqANaKZr7J3xSdjpAjTPYzRmleT95whXlZEUcxUiO9etHyPhGhGGbWMEiyUVpwJeFGiTk8/QK0FdgaDCAkQhGtOJS2TUwlmrVVYe46IYBhjyrFSWHJ0qg1RCbYxohgSXCglKaowKTDD8xNTmTQu+I6QCOYxgqnSkvMK4xN9HHUEWgX7lZSYuh3AE4KnQV/Y4pgbUZKttBRCSAkMipFC7zpwVA1GUZwBQ/aLG1H08nlUNg2mlDFaVYhJxjl2viMwqMrrUTyAbGbzg5Qm0+Ukjfv3calsD8gBqSCBVPYCdp7mFf4Yj2H3rFnsS1hwJdty1vVb0pjHAsaEEkKkIuaRYGdxhT7GdZ2cZW0Z7xHMYA9vZT2LQxHzPl5hQiimUEHuiWCn8nma1G0GBM1+RpNShkVWlFmcLguMEYLyAQsqJDXj3jxROFzUWS2mZzPRHmQ0WWIRVplm2UDhCM45oyivikpoqizRzxKKZtroZbTQ/OIgCwuICCokMt710IRhECKwsRW1uy4R3uHVpDVlUloxOySQEBdSjbsJEiDAAAKuMW/zIbaPEuR8Im2ZNi4QHCS/hap3O4XNUxKgghnCOTI7WwyHlex9cM3c2HLGd4EgvXhhiCeYA4GDrlU9BPiIiwqO79lwOMxlX00S2rwszY6Diekg7io3HYXibELdKisphfxDHlBRoKq3z0I9sl6CZ3Kn5633LZRiPJik6WxZN81idJFdTFaYaaeNg0naNZGQ+qUE+v13mlhIhYajhHbKPjRNy7nQ7fjDfJCNqVJcvMS8AkcFOE2cN9AUoH46h0lBGddFXuQrmD5EHY33AgR4GmbLql6G86dTOAGTGuc52NWn8gg01qEjBGfK2PaxkZN0uhI0xL8JQ0Jjwn0h/M659rmOL8Z5nqu3oj3Ecx/yQLGQjrP6qQoHORjA/BvhisFwD5NFY8wrpAq2eCKY5EVRmDfiHczUbhMLdSJzSqvmeSal8yJHR9x71OYlhl0cYwQck4gtnydKNM1z4vfXHsA9dgHkECvDqCaGIiP377lkcE77ta/psPSpE70iFdKGOejVZrY/E+Os8WFzyV5h8PQlwU5BrQlrVZ0djvW4Drt4C3n+9ykkf3LBG20sXLj14tcrLlr0ZaCeB8eeAkuV73mdIIhbx165Y9Mm5NE7Il5x0lBhewLVTBZN+9pzQpTVXSVwap3vGeyLH5ZDw0kloO2jKM1evxezxgXDxnXdtDAIYCZ2R3faQYsZUSHO6/TY40Gwwct5EsPD4QQxgvJ56ByLVk1TlysGbdwev9zhTve67uxNauP0ahpO5dtZksTxtAV9anH0AQUeS+DmGV8kQQ3MBjYew0SGqFCycOF5mIW/OX6PuNQe7rHVchQnS+UNE1VOnGPz5QwkpDDNKVqVv39QSy7OK1xhUQ3Pz88/FDCWJcpzA/MY5efhK0aZIvPJ74yMsskYVgUM9wB9SovuHfwwn5+PB3t3yT+KsgBExYvxFQAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 1440000,
            ap: 17700,
            dps: 48272.73,
            speed: 24,
            range: 155,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2000,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 1440000,
            actualAp: 17700,
            actualDps: 48272.73,
            magnification: "100%",
            count: "1",
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 907500,
            actualAp: 5617,
            actualDps: 11235.0,
            magnification: "250%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "340",
          enemyName: "イカ天",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAFBQUGBgYGBgYMDAwPDw8QEBAfHx8hISEhISErKyswMDAxMTEyMjI6Ojo9PT1MTEyaNg9TU1NXV1dgYGCdWCJpaWmfZQZzc3OrZSt/f3+CgoK7dym2fhSFhYW5fjm8gDrAhR69oQHHlCuYmJidnZ3ImFrQqDPcojWpqamvr6/Xr0TJyAH/sQDcuVTcuHHivE3Dw8Pkx3jpz5fW1tbx3qLh397//wLo5+fw7+729fX////N1xDkAAAAQHRSTlMAB5m63FwRSy0dOGUtRohcc6oN3o0KpMj2GrgE0SvG/mkT30FYIwQ5/N55S8H/8GQFA4Ko0/rC0/zq/gH+/v//N8UThQAAA9tJREFUWIXtV217ojgUNdMtEuR1imBpilO0U+gssa1Nm2YI+f//ai8oKlodsPtpnz0ffISHe7iv54bB4ADj8fXtbDb/UWE+n91ej28OHzqO8fV8+fb6+vr3Gq+vb8vH23F3gutlIZaLh/u7Fe4ffr18yPdZd4a7pZTvy8cf81mF+fzx5e2j/Jh3J7i5XyzfP3bx/vby0CsLN5Xfi8VLjcXi1/1dL/Ma45ufz89PT08/n55//+5t/W8BDS+1r9hrbpL5+Cv2mSxZoJ9tb9NSKcUj4zx77Nf2wEAsdK59WSglOSdOfwY9YPB+zpQqplOWuX2LYURgquRUSKlEmkpaF+OUH9rIdSxcPaFpA2RFvIpeTLjIBZ8yBcWw9NEpPzBhjMYQK/a8kZ2IOn1lPs2nEEFdjITQxDpBEMNTRYjRKGUpk2oFyXIuy/VFqZhzygPIOfWw5oG/jckeStr2AGk7SdHCoqBpoIMHgolP7Xl+1WpKNArs7Q3kEuJGNMDYW8X8iQMi2fakhvUhESw2t3cMHVkZdZCdfx4AMJDmhcj0CUmg0iJoFea7zwLNrQhEsW8tGMvsdczIiRnL8yrVtJ1Xi8ZYDxnPU7n3ciVTz9Ia+4zFrp1C2gW1WwRmlpkDw/Ym1QzsEsAFc5unnIz6JjIIpbHv6IcEA6SHhSryXQYhik0X4ZgF0NjIGK1at01QlxqNSEbCnTQUYhKOmgDc3dwfEKyaDemW7gslc77qgElO9OZlOKbu0anCMfebTPschildOZDyrGkB5EKij9lDPwpibAkUr8OoWntTLuiV4w4MtIDzYM3v86YCaV6qxjMtYMEpnTahPQNLQwjp3pqgzNNUqCJYETh1nY4DOYngWeT7AZmsCSSbpkzJqJYki1D/tD6CGFEhOAcd2oQwmeaqnHqWYbiERn9cNNgJ4iRJwqtmqGWew3ikaZoklHZaEgjrhq4HoskBiJpS+RQ0L3G7Lzot2uhaLWrUs21X77EfcNKWFeZCabqbw2bI2gPN7Z7byaFfI0CbRjyTAJM9TRLB914EDmvbK5mdWEuHARjxngOVCx17AMTE8ZPtRtsWMnLNLnkwwoxyWIr7BGUpWXJCCjbAfsZYNcGr0JvfMoVJiDvlQbPsq2ovSF6ZVdUUBLYddS2rYxbgeCSlABmA6gekqPIHd8SfB7mBGWZJFLg2UyLSnUyCHGFYZvTE6aANhE1d05AveGRWe0yCHCHTjXqe1bSIRpX8VSpXreXWcaITgb1WD1C58Kzj7nb8cR8h+R//HSA4RxrD4fCyBvwxdNzri0G7/HZx8dcOLi6+nfgA/Aehh+jQkRgroAAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 360000,
            ap: 108000,
            dps: 36000.0,
            speed: 8,
            range: 500,
            rangeType: "単体",
            kbLevel: 2,
            money: 900,
            freq: 90,
            foreswing: 15,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 108000,
            actualDps: 36000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [36000, 36000, 36000],
                timings: [15, 28, 41]
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "ホテル花鳥風月",
      baseHp: 1200000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 220,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 140, 180, 100],
        baseDifficulty: 1
      },
      treasures: [
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
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
            count: "8",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 1
            }
          }
        },
        {
          enemyId: "424",
          enemyName: "オールドリー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAEBAQHCAcKCgoMCwsIDgoNDQwQEQ0QEg0SFg0YGBcYGxIdHR0dIRgWKBkkJCQpKSknLR8pKyopMiAyPSQ4ODgyPyUyRSk0RSg9PT0/Pz9CQkIxTy9EUjRCVjFOTk5JXDhTU1NWVlZPYjxVaT9ab0ZlbGhqbmVubm5qd2pzc3N5gHiAgICPj4+Pj4+bnJmioqKjo6NN3IekrqixsbG3t7fDw8POzs6Y8bzb29vl5eXv7+/5+fn///98lDUNAAAAQHRSTlMAB7f5nhEf1j1c504tcxiC+kFiklKuz3C//vE0BITc/u9o/saT////1f+175n/0N77/tfo/vzy/vv+//7/////zgtcqQAABGNJREFUWIWlV2t3okgQtTNCMFGJijomazAtzStRIETo3n79/3811Ti7m50zGGHKc+QL93q7qrpuORhcH7aDBqjD+78EcoJ4vt6uZ1Y/vOXFeZ5TSst03Ov3X7JaSMVwoXg6Rt1PMjsyoZQuvvmSF1n69tKVwNnGhdSabQ4ClLDTviPemhwrBgQKwJTlcdA5D+O3mktg0LouDovxtCt+MJgG2bE2BJJns+5wCMsJGBNai3Lds5vQ+CUWmqde/260Uimp1xveEPDq6Q8IpkfOyj8hGGeCZe0dgJ6e4KJZVnuOZqUSR7tV38t7GUzRKAj+u7D2/f/u7vykRNp2m6dBRRl7s+2UltufL42XO9dC/yLQgmoRtAi0Ako54yy1t1SVptWQNV5u8M6dDP8RbR+lZusWAeNFXAnFOQ3mVFVPyB4tvq8efUIe/d39z3e8Sp+5fxvInqdMSVUtK1l67mrnY0xCCOwvvZndiBSXcmgkbkshZX7ir7cPG0xISMIoDAk+5a+TQVMDydpS8FOFd2Sc57nvAxzQECHxCWeVZ9oQLkI1v4ifTr24pslmswH95ptEeVGEXNItQmvIwMU2sufB8f09SwBPjHA4vr+JGK9zpmX5ss6kFrT9BNZ8X3GllKSABOm+f87ggQvGpVa0ggcr26+iHXMhIEn1IQrNZxOZb3zICw6l0YrDKGR1axuaJoEXyvj1FGKTed8/p5ArYWaploLXdZ63ddHA3FRWpfOUcwKnT4rEN1UIE1pzZQahVvUBh/sLTTDdH9fTNfTQM6g/naKNb3rAJ0UzibWmUXHaTdrxA8ud/WWlXKTLMKxzH/JnTpLU59/XPPoQf8eXzMDcObTOWDAh4SExjRRGOKFgZ6Ixg/Dj4yP40peRl26d54icmhSAgprxohFRRx8f8TV2YI8tFyeihj6EMxDIJmFQRM3J4fViF38KZ0UKfsBNFTHGByhjLVjOyivtELmPflQUuMki1CGvBU+4oEX7JPiFYAElwCeoeuibjo5yVhAm6D690lDRZAc/LkUCNeQsjAgGlqLK3PuvseewR+4qgbQVHIy0SURS72EmdXBE5GRN/yhNQUFy4llXP5yVZ7xIopwKduzqxyjgTf+KopaKl53XGeSVsI9pWRdMsiyYdV0HrDn4h5Y0P4H47bjzNoHcHAymShcgI+sON5MF/Cv1bDuu+b7PWgzjX+Wz5inSPtsQWhY8tpt1Rl2YoRcIAq4yIEBvPQkGL1wb/0GBkL2OYAjezwSty8QXBKw5wgA2jgs2cCE8Jpuzb6PXfjullxeNdJfsnF4E9zvfNU83fO7158gQmPmLFuHq0jrTHqPdbgQPa0l6Ekzwoxl/9qqnAuTiR5M8Zxftrp6jn8P6HjYKpuCy350efxDtVUQAaKpA8PNy4XSlQBOYxCt34kzAEEiEnz1k4kq05YwmQx+cBONnWDY3m4dvD7c3N8Ph0J2MnCuswRne3N7dPfqAfHj49inu7m5vhqPf3e4fmOi93AicnjYAAAAASUVORK5CYII=",
          traits: ["古"],
          baseStats: {
            hp: 1360000,
            ap: 9000,
            dps: 15882.35,
            speed: 32,
            range: 310,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 1360000,
            actualAp: 9000,
            actualDps: 15882.35,
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
            "knockback": {
                chance: 100
            },
            "slow": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            },
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "375",
          enemyName: "大夢くん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIDAwMDAwMEAwMGBQQHBwgHBwcHBwcHCAkHCQkHDQwJDQsJDg4NDQ0NDw4fIR8lJhgYLyspLCUdNTA8PD0+QDsjTUX/AAAkYFNOUFFHWVY3cWVnbm6nZA9aenZYjoasewy1dR2eiAK3eB+Dg4RwmZPIlTeamppyrqfRmS7Roziur6+ExsHbtF7gtU/dtmK9wMD00AKX3tnuz4T2z3DN1NTt15mh8eug/PH//wHn5ePu8fL///////+vBgOqAAAAQHRSTlMAEwgipjFBk1BdhenNuNx0+pqv787+t+n/Af/V///oFf//Bzn7IPH+R/r/qB7+/kqqiv3//7Fc/9L//wH9/wD/ETCBVgAABGVJREFUWIXdV+t2skgQDCAIRiUI6HzDJTOuSpiNY0LYJRBm8/5v9fUAxvUSL9l/W788nqmiqulu4O6f/4i7/4HACTzOl8s/JJbL+fzUgfN4fHp9efmzxcvL6+b5Rv6vp7p+fVouHwHLp9d38XqrieXr+/v7Xy3kr83NKR6Xz5vN3xKbzeZ5/utWfouPj/n84+NnXAlV0XRd1zT1h3TdngZxHAdTx9R00+pgGrqiqldoanaQFkKIIivWsTcc37uzFp43cfoDy9CUcyqqMU1r8fkpMhJlQqQY46zuUGTrdBUHnmMb36ZTrSBr6Eno+zgpigiT+vPfEKCzCia2flrCDIrmFEUoDEPEQYB9HkHU2cqztRN8fZq1RxgKkR8icBAVh2yRJ5QmaTwxjkyog5X4EpAOMob58fUpliDEM44MeJ0BwSLIgCKKaS2+sBVIcAs0Okih2u7WrygYjtgaI7reIQMUdS2gMC18e19A6aFsZ7Qo5El5LzvU8gZkWZqudxb2BbQhYmIvLcOQoa2caDoBkK3XKQkRkgLDgxKMEcn3FGqoVyIZq3gWBNMveJ7r+iAxPhTAOOJ7fZMhfzxxbMuESdA1ZQtNN6z+0D0U0Lwk2nrehkhdSzk9Qao2cA8iKA7LGXSOqHc5RGyeYrfn+72Df6y4rBhOCCHpl4314PvZ0w87SZvyiiHCc07JtiOK6ame/waqFbOIlVVVlcl2CM9lOIYyCRs+KJB1ZyE9k+FYwElaflWxRGwzKLdEyDt+xUknUAfXF0HzWLUTqG8WgGnkXwJ51A1Wcb2ANkI7BxXrMqwnVxfRdDGVNcybQuYha9YzGVydoI9wlFcli5ogZeSThIt6dbUArAOMGYcJbnyUBMM+KURqX6Z2CWYwi5FcV9JCyXGSM0ixss771jVV0ZUmQUS7VQVUMIJkEiHio927B8Ob2pNmPysjzLbbEsxjRGQQkU3ON6IeLBaLmdn8oglYiBhr9mVjoKzyS7Oke29vb4s+9IoR84hFCaNMJkF+YyCP7fNdoDgLKTCDY2acw22jlBGZxMcwFSUL7AuTpE1mi7eFP4bFZ9GKRYTlZUIZmJABkhOPvwOoujEJXQLPa2dEq5zJJswJpQhaIafOVVNgjAZBkXNGaDcEJY2Qz0seDK6bIlVTbLkGOOl2CY8IQox45vWLRLEDuCIpS1m3PEIk9EPXuuUdTbFnvHXAQ0o4D1niXH99gOmlZStAfZJXCb3YPwfQnBiqCALcjaD8EecXGvgIiuV4QC3jXgy7CAycH8FTUE14rvGJFZTSwC2Poy2MuCxXth7kLMzJhQk4CR2u7Wmax8OQe/rt/DstyKmtKtPEndHb7mEHZcoguergoYf7P3nRVyYz2XyW6w794U8iqIO+NK4B3XV/UsQ7XW91fHfsH76DXmNAhZcv+NIxBq7/8HDf6w/g3Ux+91z5mWINer3RcAgfKA8+8n3QANzfj4ejUa9vX55s3e4DfTwe3x8CJHoD67tEvwG1pijNnjT0NwAAAABJRU5ErkJggg==",
          traits: ["天", "エ"],
          baseStats: {
            hp: 50000,
            ap: 3333,
            dps: 552.43,
            speed: 12,
            range: 240,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1250,
            freq: 181,
            foreswing: 32,
            backswing: 44,
            tba: 75
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 39996,
            actualDps: 6629.16,
            magnification: "1200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 3
            },
            "barrier": {
                hp: 266000
            }
          }
        }]
    }
  ]
} as const;

export default e13013Data;

