// Stage 1177 Data
import type { StageData } from '../../app/stage/types';

export const e1177Data: StageData = {
  eventId: 1177,
  eventName: "夜は短し夢みよ乙女",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 177,
  stages: [
    {
      stageId: 0,
      stageName: "バクダン娘 極ムズ",
      baseHp: 800000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1040",
          treasureName: "子連れにゃんこ(442)",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 1200000,
            actualAp: 14511,
            actualDps: 39575.46,
            magnification: "300%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 1200000,
            actualAp: 14511,
            actualDps: 39575.46,
            magnification: "300%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 120000,
            actualAp: 1840,
            actualDps: 823.88,
            magnification: "400%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "431",
          enemyName: "ユメミちゃん",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 500000,
            ap: 10000,
            dps: 3529.41,
            speed: 4,
            range: 180,
            rangeType: "範囲",
            kbLevel: 10,
            money: 1000,
            freq: 85,
            foreswing: 49,
            backswing: 36,
            tba: 10
          },
          stageStats: {
            actualHp: 500000,
            actualAp: 10000,
            actualDps: 3529.41,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
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
            actualHp: 120000,
            actualAp: 7500,
            actualDps: 6249.9,
            magnification: "3000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1177Data;

