// Stage 2022 Data
import type { StageData } from '../../app/stage/types';

export const e2022Data: StageData = {
  eventId: 2022,
  eventName: "超メタルスラッグディフェンス",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 22,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "デビルリバース・モーデン 超激ムズ",
      baseHp: 400000,
      width: 5500,
      enemyLimit: 8,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1121",
          treasureName: "百太郎(214)",
          probability: "100",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2500",
          treasureName: "キャラクタードロップ(2500)",
          probability: "1",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1500",
          treasureName: "キャラクタードロップ(1500)",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "190",
          enemyName: "モーデン元帥",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 450000,
            ap: 11500,
            dps: 2574.63,
            speed: 4,
            range: 420,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1900,
            freq: 134,
            foreswing: 15,
            backswing: 29,
            tba: 60
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 11500,
            actualDps: 2574.63,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
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
            actualHp: 1250,
            actualAp: 500,
            actualDps: 156.3,
            magnification: "1000%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "4.0-10.0s",
            delayFrames: "120-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 1250,
            actualAp: 500,
            actualDps: 156.3,
            magnification: "1000%",
            count: "10",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.0-18.0s",
            delayFrames: "180-540f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 15000,
            actualAp: 1250,
            actualDps: 614.8,
            magnification: "1000%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 90000,
            actualAp: 9000,
            actualDps: 2547.15,
            magnification: "1500%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 75000,
            actualAp: 4000,
            actualDps: 1875.0,
            magnification: "1000%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 75000,
            actualAp: 4000,
            actualDps: 1875.0,
            magnification: "1000%",
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
            actualHp: 15000,
            actualAp: 1250,
            actualDps: 614.8,
            magnification: "1000%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-53.3s",
            delayFrames: "800-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 1250,
            actualAp: 500,
            actualDps: 156.3,
            magnification: "1000%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-33.3s",
            delayFrames: "500-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 360000,
            actualAp: 6666,
            actualDps: 4999.5,
            magnification: "600%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 75000,
            actualAp: 4000,
            actualDps: 1875.0,
            magnification: "1000%",
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
            actualHp: 90000,
            actualAp: 9000,
            actualDps: 2547.15,
            magnification: "1500%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 100
            }
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
            actualHp: 15000,
            actualAp: 1250,
            actualDps: 614.8,
            magnification: "1000%",
            count: "3",
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
            actualHp: 1250,
            actualAp: 500,
            actualDps: 156.3,
            magnification: "1000%",
            count: "3",
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
            actualHp: 15000,
            actualAp: 1250,
            actualDps: 614.8,
            magnification: "1000%",
            count: "3",
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
          enemyId: "196",
          enemyName: "ハイ・ドゥ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAtAAAXEgQdFgkhFQQhFQUiFgQcGQogGAciGgcsHQgwHQYlIREpIQkqIA4qIQ4qIg4xJxIyJxI4Kxg3LhkzMSA3MBs9LhQ8MRtCNBs/OSVDOSBEOSNKOSFKPSRJPiVNPSJLRiVIRjRXRSlQTjpiTSpWU0FXVUVVVVVeVT5nVzhkW0NwYENnZVJpZVZzZklualh7Zklsa1xtbF1+claAc11/f3+MgGeOhm6Zj3mZk36rqlutpI7Wz7G2aINtAAAAQHRSTlMAN44GDkUZ/p6xN4zq//8LJFhr/8aw4P99/zyf//OSWbfL/w7////+RDID/97+//9Kr4T/cDH/ygL/p/5+A///1yx7cAAAA4lJREFUWIXtVWtz4jYUpcXE4WEbEFgIZEIUPTZVJGfjVKmqXe///1e9crozu52JDTv9yIEvfpzj+zpXo9FHSFbHl/3Dh4+Hsasa/7S/kPT4+h3Pn8o8zavDn4DHd5wTzcOnDs+AY0U52xyfX186fHl5vSydWSm0saY6FH90+Pr1r8uS2SnrmiaE6ri8jPiOYl0Ka63ziqnTryjMSmIb2zhBMuI+/0Iv5xllBGJQJEtF+PtihZtNJpTzwVtCMuTC86UCyxIxpkxjNGMkM/5LvFkUF0RwT3IAZtpDGYV9GY/Gq9Pnu7MlVhXQ0zxHiITWEnYqxssNodubM/nFFNgYYcw1Fk1wtFwf760m23MbmmzzFGFKsQlGEB0M09pIbc39/rwkliVkwClmdXAaiFQw6XhGRPN0d5bAOgVkeUZ5rY3zFqLRklKElDslZ/Bn01jCqIGo1C54inNeNxoumqfhMiSrEiGUozwDvnC+bT3OU8yEklo4NRniF7tKayk5gEoT2tB6x1FOhIJsqG2GilDsTF3DH+BC8N477zTNpWGNEjU04zggsJZQfegg13Voja7Bk94x7g0Vgkpn7Fv/lkw2lEK9OwnjpJQGBBpFfa1VQ2jd1v7tsU9gtohcyiXFXNbvAs4K6IZRgjLJcdO+9QlMKgzgtTOYylpzaJw1VqUw2XlOCASnQxiKAHcJYA5lAAFYbI3OuZSYMgZ3uLG9NdhSTDsJeBPGT3NjIAtqvMa64QhlCJV9AqN9iWinIHkd3ShggKzGxsFUOE/SFC1WvQLJFGYwAswMA0kZhX0CDcSYUdCEcpYDw7yGJdKNMkKgkGWEMCFglhHElctg9KGfP4LNw4ALpYj0LBqCEYLSLjPYr3bQ0JNSdIPAGZDfRWJIBPrKkQzNwCwX+919ZwUpNQH8GwaIMG3BZIOGXpcSbFQbzbmLrtScZnEzxGIoazW3prcLDyewkTHRUTK49lsrqczzKIEgGiKMUXrdm8ER1gCjBHoGdvCtgX5C/bIUfgjFUJjoFRgtj6fdQSlFOHwWGxxHgsYDLq64dLHYbA4Dc1AUxQ743fvT+Xx+O51vvWeKLG7n68ksSYa36v6Jou6Dt/EgKpLR8i0456r5OQs54uHusFl853e4O5WVUlV/8j9ifDNb385/OAiT5WS33Q4u5J9Fxv+5kVxwul9xxRVXXPF/4beI3z/AJD78+f1/AFs8ixBWvVGbAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 750000,
            ap: 21000,
            dps: 1842.11,
            speed: 6,
            range: 480,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2100,
            freq: 342,
            foreswing: 33,
            backswing: 56,
            tba: 155
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 21000,
            actualDps: 1842.11,
            magnification: "100%",
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
    }
  ]
} as const;

export default e2022Data;

