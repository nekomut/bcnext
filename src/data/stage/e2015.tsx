// Stage 2015 Data
import type { StageData } from '../../app/stage/types';

export const e2015Data: StageData = {
  eventId: 2015,
  eventName: "消滅都市 ～第３章～(旧)",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 15,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 200, 300],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "ロスト 超激ムズ",
      baseHp: 360000,
      width: 6000,
      enemyLimit: 12,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1119",
          treasureName: "タクヤとユキ(179)",
          probability: "100",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "2000",
          treasureName: "キャラクタードロップ(2000)",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1000",
          treasureName: "10式戦車(54)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "500000",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
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
            actualHp: 900,
            actualAp: 80,
            actualDps: 51.1,
            magnification: "1000%",
            count: "30",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
            actualHp: 2000,
            actualAp: 200,
            actualDps: 200.0,
            magnification: "1000%",
            count: "30",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
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
            count: "20",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "26.7-53.3s",
            delayFrames: "800-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 1782.2,
            magnification: "500%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "106.7-106.7s",
            delayFrames: "3,200-3,200f",
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
            actualHp: 55000,
            actualAp: 1800,
            actualDps: 2000.0,
            magnification: "100%",
            count: "15",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "40.0-80.0s",
            delayFrames: "1,200-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 1782.2,
            magnification: "500%",
            count: "0",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "106.7-106.7s",
            delayFrames: "3,200-3,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 1782.2,
            magnification: "500%",
            count: "0",
            spawnTime: "95.3s",
            spawnTimeFrames: "2,860f",
            delay: "106.7-106.7s",
            delayFrames: "3,200-3,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "052",
          enemyName: "シャドウボクサー",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 80000,
            ap: 4997,
            dps: 9369.38,
            speed: 22,
            range: 158,
            rangeType: "範囲",
            kbLevel: 10,
            money: 600,
            freq: 16,
            foreswing: 2,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4997,
            actualDps: 9369.38,
            magnification: "100%",
            count: "10",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "66.7-133.3s",
            delayFrames: "2,000-4,000f",
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
            actualHp: 16600,
            actualAp: 2400,
            actualDps: 1636.36,
            magnification: "200%",
            count: "0",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
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
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 1782.2,
            magnification: "500%",
            count: "0",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "80.0-100.0s",
            delayFrames: "2,400-3,000f",
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
            actualHp: 16600,
            actualAp: 2400,
            actualDps: 1636.36,
            magnification: "200%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "22.0-29.3s",
            delayFrames: "660-880f",
            baseHpRatio: "90%",
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
          enemyId: "158",
          enemyName: "タクヤ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 20000,
            ap: 1200,
            dps: 356.44,
            speed: 22,
            range: 310,
            rangeType: "範囲",
            kbLevel: 2,
            money: 660,
            freq: 101,
            foreswing: 22,
            backswing: 39,
            tba: 40
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 1782.2,
            magnification: "500%",
            count: "10",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "90%",
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
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "159",
          enemyName: "ユキ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAgMDAwQDAwQHBgUJCAgNDQ8REBAQExkVEhETFRcXGh4+EwYmIB8jIiMgJSgmLztcIRFLKSI8MSZpIBMsN0MxOUk2QEQ+Pz85QUsyQ11fOCBGTlRHTlNPTk09UW2QNxq8MhBLXGdSXmFtV0ZHYH2XTSixRB9laWzYQRRXcY9xd3xhfpx4enfdVySSfWZtjKuGjZCgjHiimY2CpMGjo5/BoX/GuKmswci6yc3jx6TJ0dTT19fg3tjn5uVQTY0TAAAAQHRSTlMABg8XpyAtSjyPYXODjMSds9jl/3v/9P7H6I//r6Ty/P/6/+P7///k/f///9z//v7/////7v////7/////////+KcgqwAAAmZJREFUWIXtl1tzmzAQhRGEu2PAxiaEcHMwQQXLBFzul///ryKctjPtTBtLffV55nysjnZ3gGG+ksR++ci/xCnrR+F/EMLmEL698NTv5x+T5PDt/EJZAzDfwvP5nBzeJE5UKSDATA4HXEASrtd7DdxuFKRPv2gftzusreUElkxQgfokAQYI2muaxoGz3TpBEMeeeDtASTP32X09nU5pHDs7K4hhGlur2wG88X3R+/snIAhQXkJDuh3APjinH4A0cCwI66aHCkGIjGQ4cXo6LRU4jnNE/TwVMoGfYcQrYYkQy8r7qc+IKsA3KRt7C3v3hi6v/WOdb0jbGfCiKq9UkWfN8rjbhgnBLf4uLuvzMDmEj7QzKV4aVIa7jcbR+cFzU1ZNuBGpCmABw2cNmsYmo1oJkq5IZl1V8zxnNAfg9Ki6oL4Yp2mmqkDZV2NVNcWICReCSfgpXo+6sezLdsSEziT2C2uvHdq8qYYBE4ZncoBdVAUqy7bD9mF0yUaBWZYCPOZlnXfjFZARhwBUzz/mqBrGaei6oVJJAQy78mBRddO8ADqKFDHBjlA3z1PXtd1AHsKy1zWvGOehxRoyqmHAQRRXf9sisp32i6D5EKGiQNDXqQCsW0Pb8317rdLtA+nSX5Sszqg/M8y6d/msp7mCq1i3v4hS1lM0wVVgFTUup0GkUZ6AWyOkczqMnmgBBoxUoEWeSpcBbiOoc0CDT5QrXbJhpCxzTQtQ/QgDOCN6Faj8QN7vI51ndT8y6TLgRdn2dU7QbdozLAONvw9Zie4InwjaJr7rrrvu+lNgEbUZ/3M8LJLVv+60D33ITQPXhnLtAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 75000,
            ap: 3300,
            dps: 289.47,
            speed: 5,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2222,
            freq: 342,
            foreswing: 43,
            backswing: 58,
            tba: 150
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 13200,
            actualDps: 1157.88,
            magnification: "400%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2015Data;

