// Stage 2021 Data
import type { StageData } from '../../app/stage/types';

export const e2021Data: StageData = {
  eventId: 2021,
  eventName: "メタルスラッグディフェンス",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 21,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "オニ軍曹 アレン・オニール",
      baseHp: 10000,
      width: 4500,
      enemyLimit: 5,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1121",
          treasureName: "百太郎(214)",
          probability: "1",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "50000",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "10000",
          amount: "0",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "189",
          enemyName: "マーズピープル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 125,
            ap: 50,
            dps: 15.63,
            speed: 7,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 60,
            freq: 96,
            foreswing: 77,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 125,
            actualAp: 50,
            actualDps: 15.63,
            magnification: "100%",
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "189",
          enemyName: "マーズピープル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 125,
            ap: 50,
            dps: 15.63,
            speed: 7,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 60,
            freq: 96,
            foreswing: 77,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 125,
            actualAp: 50,
            actualDps: 15.63,
            magnification: "100%",
            count: "1",
            spawnTime: "30.7s",
            spawnTimeFrames: "920f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "189",
          enemyName: "マーズピープル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAQAFAgEZBAEUBwIpAAAXCgEaCQEaCQEZCwIaCgIaCgIZDQYbDQQcDAQdDQQeDwUfEAUgEgkiEggiEwgjEgciFAokFQsrGQwvHxIwIBUxIBMxIRIzIhF/AAE7KhY7KxhBLgg+LhtALhtCMApFMw5DMh1GMw5HNiVINx5LPChTQy5XRy1eTztiUjNhUTtqWz5wYUh6a06Dc1SQf12cjGymlG6voX+4q4jAtZbHvZnXz7fp5Nf///+0MYw2AAAAQHRSTlMAPbLm/wx4BhYdKG4yO/ddSIP/lNW0o+vHU//zcr7n/wKY/yGu8xBh/0rbv//y/+LH/v/+//7///////////8AtJ6NKAAABZVJREFUWIXtVl13qjgUtR9U8QtEQIzV3OZKb6ohmoQEQdv5//9qTui1YxXbNWte5uGeB9cysHdOztlnh9Zf/zFafwj+EPw/CP59ON1+3/3yBdf9Wcdz88NBHIbj7nV4ZxBH8zXE8uX5gqLjRVGS0eBu3G1fwU/HUUq5yiG2T7/OGBxvm3Msch5MruTgTOcpFUoXu11Vmnx7xtAZZzmn3OyMCgdX8ExIbYqyrPaHfaWXP88ySDDiyuzfqlUjgRulMgf8zuIPr4di+3KWwmiIuS6q17KRwPETpgAPB9iV+8Pba2XOGNoPMybNrtoX834DfnBMwEZ5ePvN8PyJQEACkNrUuYA7fpRydcTvdvvXt7dDVWyXJ5Vs9xbCFPuDmV80wZmOAM9lbna/M9gfXl8Ph0OhT3sxiFNe7Hdb7zwBqP+MCimBoCjeGWwdoZKve3PCMIhnVOlLvK2/3V5rY4pjEWoGKMRer4/dhCNwjpNLvK0/CKAuQGGOKRxACzYHs3nvRbs7GKdKp73ORQP6kICsBbCvdh8ZgJSgINWh1OuXHzBH/Ti0NVxNL/CtQQj6BwHD6/vyeIaqKneaC1NVkMIPx4+TBSJSbx4bhtkSQAZGcF1VhdFFYYyxp9Gc69ISPPvLjDFMpAr9S/w7AZSQBGJXGq20VlLVNFrvytJspv5SKMEpYbyRoDteMKnznFFpTK6EFIxSnlsGGKwiX/2CORScCyHyzWPDJLf7CYUMrAsAnDFGUBAgGAzbGK2y9eMSXIAxZWW48RpScOOUCQuXnDNk0Rh+EVV2JVtP40xxRojQpiyzh8s2ttqDeAJSgqCAs1gc2F9YSCfRSzcSOYMOlLu8MDR8bGLoe+PFDGIYBAHBAaYI4yCYzRaxd+O4lgALVRhlNBXbBinZSvYeIOIhqgk4pjgIRw89O/iOtxYcwyElyzXTKmxmaEM43gROjxEWmJAg6jrv7tsZ89w2hlEupFIsHPUg/IuZgLAEkAKBdymOjqJzeivoDiUUKqmFzHE6SzMobgODN4EWwuaYU0o+CFqdx2QlbScQUaA5nlvF6PXlWHR6Czg7oQESlLF/CFqd/nS+mFl1MCG4JJPFarXJ1xdl8BKCMaIsQJJx/sm5nIEXQXdnWZaCoHu+7z+uwnMCZ5Ta8mNGEQXpbkafJq8zxjQcr+NoFvbsA9e7ECUQCMxJQAVCoEGV9D8TEJYMvIE/am6jFeSSgmBIwCRCWlKxOh1+Z7qmq5HbbrWdK1ervfw4QiBnliOkJIj/lMGNMx5du5Z/E8RcgoQ5FQZ0pBSyDN13Csf15yIbX8n9g0BIqCFnwhCK8xwRqjbzcbcDMY2STfbUcKN9JgCRnRBggsCGN8sYYi3lt3ggUBpAHwSEz+ItaF+BFQn+Pb7OAGEQPNeEYKWoXHjeeA02JeUmHn2Lr2sALkIwFxhT2FQsB07HjyOIkds0e6fgfr/rjjYChFzjMShRrezEdny/67pfl78etyTy+0+ZgCqKuplgomG/vnjnTXN7hn8IGc/m0xFTdnNQMkwuFeGgDfrTunHyz/CIUprN4SMHIyYoQiBoRLOnAbiZEGo9/VKB7uNKSBhhYY2EYclhpDl4KiKTOOEKBisbfZUC4OFaUczOIaI5VTDSCJwVMc5mYO1BwNeX3wQn4YeCQeug94TQd4La2XluDFw0GA0bvik+EUzAbzHTsC2jTIGVINAj4oIQpsDa+GL05fd5y19weB+DU4IXCUqZ4PZuE2DtICdIR3x9AiCA6sHmAu5Xkc5qHUA1wRfQcCjEcEi/q8GEo4DyxXwjxSq+XWDwU9AhCYLJbbyyKzy9ZgTuDUQvmQX3CA/vhvf3w7u7IQIjkQLfQ8A/u0Lx3cNNHec83q2N5O7+PILzhbB+8/amKYObm4e77yJszuBv0E63R1R78AwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 125,
            ap: 50,
            dps: 15.63,
            speed: 7,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 60,
            freq: 96,
            foreswing: 77,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 125,
            actualAp: 50,
            actualDps: 15.63,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "192",
          enemyName: "マルコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 125,
            dps: 61.48,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 180,
            freq: 61,
            foreswing: 2,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 125,
            actualDps: 61.48,
            magnification: "100%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "189",
          enemyName: "マーズピープル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 125,
            ap: 50,
            dps: 15.63,
            speed: 7,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 60,
            freq: 96,
            foreswing: 77,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 125,
            actualAp: 50,
            actualDps: 15.63,
            magnification: "100%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "189",
          enemyName: "マーズピープル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 125,
            ap: 50,
            dps: 15.63,
            speed: 7,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 60,
            freq: 96,
            foreswing: 77,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 125,
            actualAp: 50,
            actualDps: 15.63,
            magnification: "100%",
            count: "1",
            spawnTime: "84.0s",
            spawnTimeFrames: "2,520f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "189",
          enemyName: "マーズピープル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 125,
            ap: 50,
            dps: 15.63,
            speed: 7,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 60,
            freq: 96,
            foreswing: 77,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 125,
            actualAp: 50,
            actualDps: 15.63,
            magnification: "100%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "189",
          enemyName: "マーズピープル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 125,
            ap: 50,
            dps: 15.63,
            speed: 7,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 60,
            freq: 96,
            foreswing: 77,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 125,
            actualAp: 50,
            actualDps: 15.63,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "90%",
            isBoss: false
          }
        },
        {
          enemyId: "192",
          enemyName: "マルコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 125,
            dps: 61.48,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 180,
            freq: 61,
            foreswing: 2,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 125,
            actualDps: 61.48,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          }
        },
        {
          enemyId: "191",
          enemyName: "アレン・オニール",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAAJBQItAQAeDwIhEAIjDwIhEgIiEQIjEQIlEgQlFAMkFQUlFAQmFAQmFQQnFAQmFgQsGQYuHAUuHQYvHQgvHgs1Iws3IxA6JwxCKRBCKxBDLRREMRhGMRNIMRBKMxVROBZeNg5SQCBWPyNjRB1eSyNyRRVkTzFsUy1jVkduVil3VCeEVh6QYCN/bUWeZSWscCyaeDiTfEazfziejmLBhjvOlEOwoHPYp06/roLit3TRyK340Yv///8/Jjl3AAAAQHRSTlMAwQ/0BoAgFg7+Nmrj2LBHXCmUwP/1eM3sOf+xjKD2/+l72f/9y+P//7Xyz//c///9///o/v3+//////////8A2SGIngAAA11JREFUWIXtVWt3okgUnJ1BngoKDZgWbBNaQdM20KF5aTL//1/tZczubCaeRLNfLT3HI3LLqntvF99+/k98uxHcCG4EN4IbwY3gRvCW4B2Uuyi6n+nvf7gQyt22lHJ9r32VQI9LIdv26csMmsd43vTH+v5rLhRrlTAuMiG3X5KgOYssIfLAy42jXP3nuu5EG95kSdkKuTGvrVeDON6XUvScJEnGHmbX1kdPUgohwD9GWea717bAytuXl172TckTREiyn17Xg9lCtMeXY9v2x6PMEMrkWr2mXpmuRNO2sgGCl5cm443cBSBBV//Bx44UZ50LkfOsbJoedOSyl3ms62YQhuH68fFxvd7endNt/vKpmupC9MeGJwkXAnRAL+GLZwXhnBBSPT8/d0W1tX7DVBRFh7frDT61aO1umr4VWZJxXooSFrkXCUL+kqYI4+JwOBSU0CVdnkCp554wmcdAcPeQYVKW5TA++JBt3zRNmZSygiogYAMBwYgwggGEpRQbhgGjIqQohuOXszwrWAZXSZlDF0Tb5Hkpc4IwQQizruuGWgQkAwgmE9u2x75n24sFOFiAbM5FxZCBkhLc503Om7ZiQzUGI7vdbjmQpdj3EaZLf26PRiNvbGm6rsMA9zwXoF/2OTIwF3kGqyTbPOEYJ3geWtMB9nhOqGdZ3vwhmr7iNAIlEnK1Af2k7AuCCAWFCW8qCl3k5diane5STcuzofkz0/xjI2Zb+RQEY/CGC9nzouIsE33PEDKMbG/9ThVd084u93TXrjXNxv7YDbYQRX0Lr4pRmmJvNL0glaZ5v9UUx3MdTXMJTQcwVrCqqvbxue17TyAjaCXsuh6soJggylhVsKKo6/rs/r6z8PCaPeYkhaIipSCfpsBQdV30+Zmexaf41WcuLeruUBeeNcwsZSmr60fncwnqr3otCJes6g5dBWk6zCxckqKqi+jCcNeCDaOsPoKAeJizrpohHTp5YbZqozlLCa0OXRG/him0FEZC5xd4GJ4mY1hBDP3fxP+GsTby4ehdRqDaxnBsxp7t/GdPnQki6eoSAtX1cZr6tvV2WXXXQHR3r33eRgcMsGLlfH8LJ4TQYLvY/ewhBwYMTNPl5K+3mMBlMJHScPr9QwJtZA8B8+M8hvAZffCI+BtCm0ak7DWt6gAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6000,
            ap: 600,
            dps: 169.81,
            speed: 8,
            range: 400,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 106,
            foreswing: 1,
            backswing: 105,
            tba: 0
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 600,
            actualDps: 169.81,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "進撃のヒュージハーミット",
      baseHp: 90000,
      width: 5000,
      enemyLimit: 5,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1121",
          treasureName: "百太郎(214)",
          probability: "3",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "1",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "40000",
          amount: "3",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "193",
          enemyName: "SV-001",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 400,
            dps: 187.5,
            speed: 24,
            range: 400,
            rangeType: "単体",
            kbLevel: 3,
            money: 600,
            freq: 64,
            foreswing: 15,
            backswing: 13,
            tba: 25
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 400,
            actualDps: 187.5,
            magnification: "100%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "193",
          enemyName: "SV-001",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 400,
            dps: 187.5,
            speed: 24,
            range: 400,
            rangeType: "単体",
            kbLevel: 3,
            money: 600,
            freq: 64,
            foreswing: 15,
            backswing: 13,
            tba: 25
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 400,
            actualDps: 187.5,
            magnification: "100%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "193",
          enemyName: "SV-001",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEBAQEEAwIEAwIVFAUXFgYYFwIaGQIaGQYbGgMbGgccGgYcGwUfHgggHwIiIAojIgskIwsmJAwnJQ0nJQ0uKxIwLhUxLxY2Mxk4Nxs+OyFBQCVBQCVCQiREQSZFRCVHRiVMSx1MSS1MSi1MSi1TUDVTUTRUUjRXVTddWztkYENkY0VvbyFwblB5d1mAfmGIh2yJiGqUk3WgnoKurI+2tZm/vqPGxarOzbrY18bj4tTu7OX6+fj///8IYwPFAAAAQHRSTlMAHDTZ5v+Q9CwTrTlh/1B+CMNFcP/W4v+g8v8J/7rdW/5FHwv/d5rxjcD/0f/kBP/9/+P///////////////8Auo7f6gAABvZJREFUWIXdVmtXGzkM7RbIe0IekzgxTjDBaYhx1h5szyvQ/f//aq8mtF1aaNnut9U5JMBYd6SrK8kf/vqP9uF/APCW3W4220/X3Tef/8puN3f7h2w9+F0E+Mc8GjEb/CbA5u4hj17x5eXvAuyzzFqtfh9gZWBaL6f/yu3q6stvt9d77TVbLjr/yv9mu/n6+/V90O1e/+oWdjV6H0B//7D9EsNm++ANG39qbPHOag4PxZ5CuLoaXW3XRisXY/SZNXo27b4niM5doBA227vLycpYF/Iij8E7Lfms9Z4gRsND3G82dwd3WK219blvMJyGyfX0HQjDHUK4uUfUXEguldQuVkWmbWa1BsLVrwA6Cxf21/deSya0MlZoY6w1JguUyPruevMrCArh7tNBCZ3lPubaWKW0DfXxeCy9swdA/Bxgsg5xvVhLnR+PIQSljNIulI9Pnz8/Hes8mMP25wjIwTeZ13XhndOcc9SyqI4E8Vh6Yw/bP34GcDVcW2QdiqqIGbgHlyrzeVXV9dNTFSAJM7+8Hlxvbv98HWCz3dksuCxHL1swII2lclaw41ORhTLTarfbgYs3yLg5ZBleTbTHYEOuFeoHBLISScVSZzGWdXw43L2KcHMogkMXI+/jMQ8YSVqhlC4geo9HNjchIJvHOttNXyvpzaHOTyQc6zL3mRNcGe8RQgxFHqwJOvjqWFc5JsXrAEUJ9YO3sogB7SCFyWKZo6ng7w0AvM0rPFTL7XcA3X6/M7o5hKKAa+ahAm+0ITrgkDf+qEFQ1kQcQLG3LwvRvZzNF/3rtfUEERA2ulg1/iUVoQKqgSiVgbLwTHwfwXAs9W5xuUQHAAJ9CPpBBvQM/xJKqqiwwQktwaoSfDZ4CdCdjudqN0+ZaCA8EKz36OayKsuiqB9RFCOM5EoxLuaz8Q/d3e3g9Va2Z3OCsBmS8CEWZUkUEqVIinGpBYP3oNP5cTp0p0uQNhsMx3MpCQMGLmPET+4NWkQzYRxOfHzFGwEM1govcKtJBxApmkARCQgly1AQqdDZKbdmPXx1MhEF0qQpM27V7wKizThGEk0DVAOkc1dkMhVi/vps7E7XWkqZJgnTOyyDzWAGAMYEQDAPlUhTHcoAxFn/Nf/RAP4WXUQIYtkbftpD/s4YwYSQUgAqZTpWHgwOXw2gheKCJ2SZJClrz1w8PlXoZKtl2hiXQMg0Z8te/8cNMULA2kEfeFmDwMPj58+10WhCIxCU5CA1ZVL5Iu56k273uzUzaglpHFofMuEIgklXPkF6ASsB/DGXO57yNBG+rOvcrXq9xeQFwuhyybWRBiIRSiSpQj8WVZnZaJXDVsAAMSwlHmPMq9yi2qvhiyj6PamVEFwohhwU2HIu5kbHiGuGzsroMVk0x3zTPlho2ZjVYjEc/SOEnaGXM8E4AWD0oPGg5Agk7EinhbQZymkaYWiGMePMePitnforI9EjnKdUSOOQOcY5bVaIGUrCYMJ9RyhiCbpARdCRy8tvmhpNVooDgME/STjOCN0sVpqlAb5wTblGfngH6qQ0fY1bz1mMJhOMA6glaYwhQkVztX5srI7YByplxE8qsK1wecLRVFtw2SBM9qvxUgryT0nAXDsMohrb6An+T49EIgcAullSo2LjojmQhV62GoDh3siEcTgqbHWWcExhGkJ4ORbK47HKvTpFRkLDOQZ5KAXCxqcIui1teCIMjSoigQeM8aI62eMRU9ap5NloZIFsZlSSStWkMJpMxylUgCo3JEL4oSwxyHOQWBBOSRGkDb9MChjS5bhCmMztJ1SAJQFry4QE+6BBZAgaY6goaCTWFcAMpcjwUqiVBgVPlSQx3A/QSffEKTe0ipvWx4GgeDjW2EAg4ugY7pzgX3Iwr+GmUWeEgoBmNF66C6lYAhbAEGMa9eLCSxawf8jKKkMTaKqfOAFY04xmqmSLpDSazpQEIQyfBIA4BZZSzGm7eB+LTGUAQNkUQ+CN5LlABMi11z/Nsxm6lZQI2KbveXOtMnS9w3KHnJ1kTIJkwCgIFqmCb0A966DfQzoIAZcyRAFCUwbFa5QEU1Y0t0SakPAkESsCJkVjRusGoLNYokQcAIr82akjmrKlTV0xEekLjzlpET80JPE/fZiOThMVQkUSJEaEpwidjCbsfE4DsVE5wsG+QfSkdvzBkvmpH7uX43kTEsVrbNNUtAHOsBvmrdYcb2xDx4SCNCyWdBMjl8/+H/4YDnrzeZvipbdwAkM47fOLJGmfn7eT5KKN44poY01PoYQpCtL72Lh/bJ2dnePcBVNNbVFueCYXL62ZEwItcYG8oJsEH+etj7g0Dnpn/zhzQc4Xb9gz7OmLPs56w+cInu38LdcXdv71fBMBQXyxwdk7bDz4ep7c/wb7y57MZl02TAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 400,
            dps: 187.5,
            speed: 24,
            range: 400,
            rangeType: "単体",
            kbLevel: 3,
            money: 600,
            freq: 64,
            foreswing: 15,
            backswing: 13,
            tba: 25
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 400,
            actualDps: 187.5,
            magnification: "100%",
            count: "1",
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "192",
          enemyName: "マルコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 125,
            dps: 61.48,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 180,
            freq: 61,
            foreswing: 2,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 250,
            actualDps: 122.96,
            magnification: "200%",
            count: "1",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "192",
          enemyName: "マルコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 125,
            dps: 61.48,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 180,
            freq: 61,
            foreswing: 2,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 250,
            actualDps: 122.96,
            magnification: "200%",
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "192",
          enemyName: "マルコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 125,
            dps: 61.48,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 180,
            freq: 61,
            foreswing: 2,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 250,
            actualDps: 122.96,
            magnification: "200%",
            count: "0",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "33.3-50.0s",
            delayFrames: "1,000-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "193",
          enemyName: "SV-001",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 400,
            dps: 187.5,
            speed: 24,
            range: 400,
            rangeType: "単体",
            kbLevel: 3,
            money: 600,
            freq: 64,
            foreswing: 15,
            backswing: 13,
            tba: 25
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 400,
            actualDps: 187.5,
            magnification: "100%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "44.0-66.0s",
            delayFrames: "1,320-1,980f",
            baseHpRatio: "80%",
            isBoss: false
          }
        },
        {
          enemyId: "194",
          enemyName: "ヒュージハーミット",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 1111,
            dps: 833.25,
            speed: 7,
            range: 166,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 40,
            foreswing: 9,
            backswing: 2,
            tba: 16
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 1111,
            actualDps: 833.25,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "80%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "ジュピターキングの護衛",
      baseHp: 200000,
      width: 4800,
      enemyLimit: 7,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1121",
          treasureName: "百太郎(214)",
          probability: "10",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3000",
          treasureName: "キャラクタードロップ(3000)",
          probability: "150000",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "12",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "192",
          enemyName: "マルコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 125,
            dps: 61.48,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 180,
            freq: 61,
            foreswing: 2,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 500,
            actualDps: 245.92,
            magnification: "400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "189",
          enemyName: "マーズピープル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 125,
            ap: 50,
            dps: 15.63,
            speed: 7,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 60,
            freq: 96,
            foreswing: 77,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 200,
            actualDps: 62.52,
            magnification: "400%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "191",
          enemyName: "アレン・オニール",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAAJBQItAQAeDwIhEAIjDwIhEgIiEQIjEQIlEgQlFAMkFQUlFAQmFAQmFQQnFAQmFgQsGQYuHAUuHQYvHQgvHgs1Iws3IxA6JwxCKRBCKxBDLRREMRhGMRNIMRBKMxVROBZeNg5SQCBWPyNjRB1eSyNyRRVkTzFsUy1jVkduVil3VCeEVh6QYCN/bUWeZSWscCyaeDiTfEazfziejmLBhjvOlEOwoHPYp06/roLit3TRyK340Yv///8/Jjl3AAAAQHRSTlMAwQ/0BoAgFg7+Nmrj2LBHXCmUwP/1eM3sOf+xjKD2/+l72f/9y+P//7Xyz//c///9///o/v3+//////////8A2SGIngAAA11JREFUWIXtVWt3okgUnJ1BngoKDZgWbBNaQdM20KF5aTL//1/tZczubCaeRLNfLT3HI3LLqntvF99+/k98uxHcCG4EN4IbwY3gRvCW4B2Uuyi6n+nvf7gQyt22lHJ9r32VQI9LIdv26csMmsd43vTH+v5rLhRrlTAuMiG3X5KgOYssIfLAy42jXP3nuu5EG95kSdkKuTGvrVeDON6XUvScJEnGHmbX1kdPUgohwD9GWea717bAytuXl172TckTREiyn17Xg9lCtMeXY9v2x6PMEMrkWr2mXpmuRNO2sgGCl5cm443cBSBBV//Bx44UZ50LkfOsbJoedOSyl3ms62YQhuH68fFxvd7endNt/vKpmupC9MeGJwkXAnRAL+GLZwXhnBBSPT8/d0W1tX7DVBRFh7frDT61aO1umr4VWZJxXooSFrkXCUL+kqYI4+JwOBSU0CVdnkCp554wmcdAcPeQYVKW5TA++JBt3zRNmZSygiogYAMBwYgwggGEpRQbhgGjIqQohuOXszwrWAZXSZlDF0Tb5Hkpc4IwQQizruuGWgQkAwgmE9u2x75n24sFOFiAbM5FxZCBkhLc503Om7ZiQzUGI7vdbjmQpdj3EaZLf26PRiNvbGm6rsMA9zwXoF/2OTIwF3kGqyTbPOEYJ3geWtMB9nhOqGdZ3vwhmr7iNAIlEnK1Af2k7AuCCAWFCW8qCl3k5diane5STcuzofkz0/xjI2Zb+RQEY/CGC9nzouIsE33PEDKMbG/9ThVd084u93TXrjXNxv7YDbYQRX0Lr4pRmmJvNL0glaZ5v9UUx3MdTXMJTQcwVrCqqvbxue17TyAjaCXsuh6soJggylhVsKKo6/rs/r6z8PCaPeYkhaIipSCfpsBQdV30+Zmexaf41WcuLeruUBeeNcwsZSmr60fncwnqr3otCJes6g5dBWk6zCxckqKqi+jCcNeCDaOsPoKAeJizrpohHTp5YbZqozlLCa0OXRG/him0FEZC5xd4GJ4mY1hBDP3fxP+GsTby4ehdRqDaxnBsxp7t/GdPnQki6eoSAtX1cZr6tvV2WXXXQHR3r33eRgcMsGLlfH8LJ4TQYLvY/ewhBwYMTNPl5K+3mMBlMJHScPr9QwJtZA8B8+M8hvAZffCI+BtCm0ak7DWt6gAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6000,
            ap: 600,
            dps: 169.81,
            speed: 8,
            range: 400,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 106,
            foreswing: 1,
            backswing: 105,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 3600,
            actualDps: 1018.86,
            magnification: "600%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "195",
          enemyName: "ジュピターキング",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 250000,
            ap: 7500,
            dps: 566.75,
            speed: 5,
            range: 570,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1800,
            freq: 397,
            foreswing: 38,
            backswing: 28,
            tba: 180
          },
          stageStats: {
            actualHp: 250000,
            actualAp: 7500,
            actualDps: 566.75,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "189",
          enemyName: "マーズピープル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 125,
            ap: 50,
            dps: 15.63,
            speed: 7,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 60,
            freq: 96,
            foreswing: 77,
            backswing: 19,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 200,
            actualDps: 62.52,
            magnification: "400%",
            count: "5",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "8.0-12.0s",
            delayFrames: "240-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "192",
          enemyName: "マルコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 125,
            dps: 61.48,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 180,
            freq: 61,
            foreswing: 2,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 500,
            actualDps: 245.92,
            magnification: "400%",
            count: "5",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "193",
          enemyName: "SV-001",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 400,
            dps: 187.5,
            speed: 24,
            range: 400,
            rangeType: "単体",
            kbLevel: 3,
            money: 600,
            freq: 64,
            foreswing: 15,
            backswing: 13,
            tba: 25
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1600,
            actualDps: 750.0,
            magnification: "400%",
            count: "3",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "4.0-6.0s",
            delayFrames: "120-180f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "192",
          enemyName: "マルコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 125,
            dps: 61.48,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 180,
            freq: 61,
            foreswing: 2,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 500,
            actualDps: 245.92,
            magnification: "400%",
            count: "0",
            spawnTime: "190.0s",
            spawnTimeFrames: "5,700f",
            delay: "200.0-200.0s",
            delayFrames: "6,000-6,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "192",
          enemyName: "マルコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAAHBgUNDAgQDQgQDgoRDwURDwkREAsSEAoTEQsTEQoUEgsXFQwZFQwbGA1QAAAkHxAoHg1cEAJBHgI4Igo+IQQ4JAxBIQRCIQZ3CQA9KQ5EKAc2LhNJKgpOKwdSLgdaLw1AQAFIORtJOx5GPR9ZNw+PKgFUSyhtRhqmOwB5UCJlWzKEVhR6YTqKXyh0aj6BdUaccTKLgU+pfT6ckGG2iT/AlUWso2nQo1a2rXTdtljEuJPlyGnq1o/y68dT+aK4AAAAQHRSTlMACM9P/XoQQDRkvSCPrZzcBPD+/xKCKrZE/v/nWP9tk6X/BPDY/73//v7////kxv7//v////7//////v//////AILRPgAABc5JREFUWIWVlmt7okgQhQcVFFAZUGOIMgkDGHrphOYu3vb//6s91TrPzu6omPoSw0O9VJ+uU93fvt2O73PE8+sG8fZj/vPOmzdivl4sFm8fZVnm6ebH0/cvZj89rTdBEKT74/G4b9LN89cAKH25+aibpqX8/b4M118CIP+Dpc0e30aUdVt/vD7PvwB4ev3Ia8ovkyRhLK3rPFx8CbBk9b6t87ySUaTpx9v6ccDP+XqTNm2TMnH4m+LAVsvn+eMiIP+jaeu02B5OZ0D89iUF5osgb+o8Q/4BsTtUwUMCKJqJ0BQJyJOs2m63WZLyKBHB61M3QRmpY4Q6UuaLFUuzrBA8SfMy8dOy+lx0dqI2WoToPNtaDIdT22VZkUY+K9s2T8p2X33+6KrBHH/utkUhYsswLMd1WZ4zVlIr1U3bHnafXTKMDH7YVVUWewPHmc1mKDxJm+PpiH4o0Q+fPzoB8bbKBPeQ/vLyQoCUAKdjW6Ys2Ky7+gCAqhAidt3ZyzvixY9ZkrcoAR0VLNdP99NJgxDf5xF9XwJmjosqSIS2Rh909iF2YRXFkedQAS8UM8dL6rZtysP2oUZSdCvisUf5PkR8eT8D4OYqewSgmOpKFIJRPgX+ul5SYgtrbluq1gkw1Y3IROwjn6V5XSYSRIQ67qE9OwFyF7jnIy2t96djyfDTYWRrET4wUpUhAWICoP/g4mMGJZwohYxttenqIhSwCEXBI//9L5/VRwBOtT9zHZ/lZd2UD4ior7JKRO77XwTYnxBN4qITWJKkKQu7K9CDohIeAd59jOPTaV8nrutnVQIpw04rAmCLjBPgnaRv0X85UvnuwF3XXT51H2y6HaELXfIAAdomTxOfVYcDA2DzPJ9rHZ2g217kuT554AwoUQETBfbC9cPXxULt3yfodhw5PhQAgOUNlUCr911MhiQJVrY9GY7MO4x/AVRCjkOxTHEm+RAywWzynYFlTMZ3GrK/DEgCCXBxlrX7Fqd6wnw0NvYRY8aLonAxulmD1jdse0AiAkDNfJSjiHOeJFDX82JRVFk4NjXtRhWmro57jivH2Qwq7OUwy4TgjBBexEWWxeFY1c1bNWijqQ3CDABJOKKZMs4Zy+s8piXEGFi2bazNW0qYUzSD47ikI1kak4DzmNNMyFwQoEIUx8FS15SrCFNfRkjwaKjDBAynWowH2NP9sYSKIKCKOAKhP7wiptI3Aqyz4PLdyHXxQSTQju6PhS/zCRHFgWVNr2wHzUTBBaQSNJ09F2b00AQ0EJrUZ/GlCKqCh6/D6wCkFjiUtzji5PuwM+46ZYoxlXqWZXtyHbwQK/UqgJZQFNvdbkvTCfvvUCPlKU3HZPWq9uzBmcCvAYbjMOZZkeFisANCkD0RvmxoOOrt2VSnE0sSVpP+nyqiD9BviKwCYAc1JcAjS7nuCrccxTRHYyLAWdd62hzbWASiIMA2k/kDgsbR6nJPRJ3WwJ5e97aGNWJ5XEBHXI2qiFR3IkGHfvjrlqcMp73JjdmgmHqP9hlK4n51rKKBI12Ey5II17+mmjYa3vbk0PBiErKiCxoBwOOi2v0OuBfaukc7iS9KFSPnbEIAuNXvPty+afoEzVxURUEbiWPC8S68In4IcN4FzA2sAbcVWNiBpvid8XD6Z+v+EQrs7Mh9RBE8wIAaOPL/OFhNr+77//NVQ06+iEwdTscTSxJg3/G4Y6af83V4RTbfwCa/mn2DAI5j6WbXqSIFUA3Kh90ce6LrKHlkUCMT4IF0umCcjRZ5tnGeWZcn3urOMP9tBUNDjouYez1dTk35hDoBejxyw4HLHMwanNHhYqicXSPTuaAnnTXo9DbmdgbjrMaoWVPPzgegyPDEvDnMLwBbjm0YAddla6Lq6kUB8paIw+VEvXWgUP39/nTgnM2Lue0NLkGbSE/wDIer2u/3b0BUw+j9ljT4bziXRz3DMPTrgL6qjg1rcD+sqaqqNxyhaJqGQXM/oOyVk/kfwdsQsiZuAT8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 125,
            dps: 61.48,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 180,
            freq: 61,
            foreswing: 2,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 500,
            actualDps: 245.92,
            magnification: "400%",
            count: "0",
            spawnTime: "192.0s",
            spawnTimeFrames: "5,760f",
            delay: "200.0-200.0s",
            delayFrames: "6,000-6,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "192",
          enemyName: "マルコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 125,
            dps: 61.48,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 180,
            freq: 61,
            foreswing: 2,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 500,
            actualDps: 245.92,
            magnification: "400%",
            count: "0",
            spawnTime: "194.0s",
            spawnTimeFrames: "5,820f",
            delay: "200.0-200.0s",
            delayFrames: "6,000-6,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "192",
          enemyName: "マルコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 125,
            dps: 61.48,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 180,
            freq: 61,
            foreswing: 2,
            backswing: 36,
            tba: 30
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 500,
            actualDps: 245.92,
            magnification: "400%",
            count: "0",
            spawnTime: "196.7s",
            spawnTimeFrames: "5,900f",
            delay: "200.0-200.0s",
            delayFrames: "6,000-6,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "191",
          enemyName: "アレン・オニール",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAAJBQItAQAeDwIhEAIjDwIhEgIiEQIjEQIlEgQlFAMkFQUlFAQmFAQmFQQnFAQmFgQsGQYuHAUuHQYvHQgvHgs1Iws3IxA6JwxCKRBCKxBDLRREMRhGMRNIMRBKMxVROBZeNg5SQCBWPyNjRB1eSyNyRRVkTzFsUy1jVkduVil3VCeEVh6QYCN/bUWeZSWscCyaeDiTfEazfziejmLBhjvOlEOwoHPYp06/roLit3TRyK340Yv///8/Jjl3AAAAQHRSTlMAwQ/0BoAgFg7+Nmrj2LBHXCmUwP/1eM3sOf+xjKD2/+l72f/9y+P//7Xyz//c///9///o/v3+//////////8A2SGIngAAA11JREFUWIXtVWt3okgUnJ1BngoKDZgWbBNaQdM20KF5aTL//1/tZczubCaeRLNfLT3HI3LLqntvF99+/k98uxHcCG4EN4IbwY3gRvCW4B2Uuyi6n+nvf7gQyt22lHJ9r32VQI9LIdv26csMmsd43vTH+v5rLhRrlTAuMiG3X5KgOYssIfLAy42jXP3nuu5EG95kSdkKuTGvrVeDON6XUvScJEnGHmbX1kdPUgohwD9GWea717bAytuXl172TckTREiyn17Xg9lCtMeXY9v2x6PMEMrkWr2mXpmuRNO2sgGCl5cm443cBSBBV//Bx44UZ50LkfOsbJoedOSyl3ms62YQhuH68fFxvd7endNt/vKpmupC9MeGJwkXAnRAL+GLZwXhnBBSPT8/d0W1tX7DVBRFh7frDT61aO1umr4VWZJxXooSFrkXCUL+kqYI4+JwOBSU0CVdnkCp554wmcdAcPeQYVKW5TA++JBt3zRNmZSygiogYAMBwYgwggGEpRQbhgGjIqQohuOXszwrWAZXSZlDF0Tb5Hkpc4IwQQizruuGWgQkAwgmE9u2x75n24sFOFiAbM5FxZCBkhLc503Om7ZiQzUGI7vdbjmQpdj3EaZLf26PRiNvbGm6rsMA9zwXoF/2OTIwF3kGqyTbPOEYJ3geWtMB9nhOqGdZ3vwhmr7iNAIlEnK1Af2k7AuCCAWFCW8qCl3k5diane5STcuzofkz0/xjI2Zb+RQEY/CGC9nzouIsE33PEDKMbG/9ThVd084u93TXrjXNxv7YDbYQRX0Lr4pRmmJvNL0glaZ5v9UUx3MdTXMJTQcwVrCqqvbxue17TyAjaCXsuh6soJggylhVsKKo6/rs/r6z8PCaPeYkhaIipSCfpsBQdV30+Zmexaf41WcuLeruUBeeNcwsZSmr60fncwnqr3otCJes6g5dBWk6zCxckqKqi+jCcNeCDaOsPoKAeJizrpohHTp5YbZqozlLCa0OXRG/him0FEZC5xd4GJ4mY1hBDP3fxP+GsTby4ehdRqDaxnBsxp7t/GdPnQki6eoSAtX1cZr6tvV2WXXXQHR3r33eRgcMsGLlfH8LJ4TQYLvY/ewhBwYMTNPl5K+3mMBlMJHScPr9QwJtZA8B8+M8hvAZffCI+BtCm0ak7DWt6gAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6000,
            ap: 600,
            dps: 169.81,
            speed: 8,
            range: 400,
            rangeType: "単体",
            kbLevel: 2,
            money: 450,
            freq: 106,
            foreswing: 1,
            backswing: 105,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 3600,
            actualDps: 1018.86,
            magnification: "600%",
            count: "0",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "200.0-200.0s",
            delayFrames: "6,000-6,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "193",
          enemyName: "SV-001",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 400,
            dps: 187.5,
            speed: 24,
            range: 400,
            rangeType: "単体",
            kbLevel: 3,
            money: 600,
            freq: 64,
            foreswing: 15,
            backswing: 13,
            tba: 25
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1600,
            actualDps: 750.0,
            magnification: "400%",
            count: "0",
            spawnTime: "296.7s",
            spawnTimeFrames: "8,900f",
            delay: "200.0-200.0s",
            delayFrames: "6,000-6,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "193",
          enemyName: "SV-001",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 400,
            dps: 187.5,
            speed: 24,
            range: 400,
            rangeType: "単体",
            kbLevel: 3,
            money: 600,
            freq: 64,
            foreswing: 15,
            backswing: 13,
            tba: 25
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1600,
            actualDps: 750.0,
            magnification: "400%",
            count: "0",
            spawnTime: "298.0s",
            spawnTimeFrames: "8,940f",
            delay: "200.0-200.0s",
            delayFrames: "6,000-6,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "193",
          enemyName: "SV-001",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 7500,
            ap: 400,
            dps: 187.5,
            speed: 24,
            range: 400,
            rangeType: "単体",
            kbLevel: 3,
            money: 600,
            freq: 64,
            foreswing: 15,
            backswing: 13,
            tba: 25
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1600,
            actualDps: 750.0,
            magnification: "400%",
            count: "0",
            spawnTime: "300.0s",
            spawnTimeFrames: "9,000f",
            delay: "200.0-200.0s",
            delayFrames: "6,000-6,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e2021Data;

