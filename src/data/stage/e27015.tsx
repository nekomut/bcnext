// Stage 27015 Data
import type { StageData } from '../../app/stage/types';

export const e27015Data: StageData = {
  eventId: 27015,
  eventName: "強襲！メタルスラッグ",
  typeId: 27,
  typeName: "コラボ強襲ステージ",
  prefix: "CA",
  mapId: 15,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "MISSION 1",
      baseHp: 60000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 70,
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
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
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
            actualHp: 375,
            actualAp: 150,
            actualDps: 46.89,
            magnification: "300%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 375,
            actualAp: 150,
            actualDps: 46.89,
            magnification: "300%",
            count: "3",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 4500,
            actualAp: 375,
            actualDps: 184.44,
            magnification: "300%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
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
            actualHp: 15000,
            actualAp: 800,
            actualDps: 375.0,
            magnification: "200%",
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
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "190",
          enemyName: "モーデン元帥",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAQEBARERATEQ8XEwsYFAwYFRAbFwweFwQlGAcjHQ4lHg0oIAwoIhNzAAEpIxYwJA4sJRU7KgQxMAc4KxY5MBQ4Mhk7MiA+MR08NRtFNx9EOhxKPSVMQSZNQCdvNA6JKgFPQiJSQh5LRCxTQypSSS9bTDBdUjZcWECJTBZnWDlqXz5zZEebWxB1aEl+b0+UcD2KelmIgGCWiWeeknCkmniuo362rIa8tI/Fu5XNxJ7Z0azk3bbw7Mz9+93///9pgXSoAAAAQHRSTlMAqdz0WzIlRw7/oK/pgwLO/24UB/45I5n/Xf9H/4/o//+jd7v/zP/ssP7/z///8P///9f+//////////////8Az1p95wAABcJJREFUWIXtVmt32joQpE14OMBFJAoRjjCQCBELgXH8toH+/391Zw3pSdsEetpv99xtzgklmtHs7Eqrxre/jMb/BP8JgovRGU8mj3eX132KH3o2Wj3+Bb7HdRT2/wIvhKu9+z/Ge8aGgfHGf2jC0FNCSBWa5e8y3N3dj8f3t6fVd33PnU4VlyZ8HjUao8vFuB2/rILN6nnyOKrXtrrCdY2ROopeRqOX10vFaM03gTUGP8vF5PG21X8YuGobbreuiaLnZ/tyex4/mhsKretfy3lXGdeRRhntCJsmZnGhFp0J/DbaaMGFwgfXBZOQUoeGOTIsksXoPEHzNQ5oa45gQorpWmurlFCB6T0MdGiX4/ME7TC2lIHUWivBpJoyYbRFFvLrdVcoG87PS2hv4tpBTaG4JuHaSMYld3pauiZOXs4yNFdxYPXRRq0FNFMyjqPBIVBLYZL8PEN/EwbWnhhcZSXngkMC4y5XXne4MGlxluF2snkjwD/JdaCk5kpBR6973en0g7A6r6E1XAQBdpcovRQqSrdaabhig838/q5xvbGR3pzvxvbc05pzVXOoQJsgDLYU0Wpy315ZV11qhk77ZsAc5ioTwNEwyyJ/fQx/MX62enD5WHZa/R5qHiVJmuRF7K/9IM6KdLtd+55xH1qX8HDiBfA4SbI8L3Pf9+NAF4fDvkq2vjWD9m/gwxAEMQjKKpz521Q4Mt4fijCJtTfsXMxgHoYBKUizoiztbJoWljOZ7MrYFvH6QjfTFNgQPqkFlNl0ZqtqlynXxkVsimrrX2IYLwlPDuZ5UdUEu90+V7DV2t1+u948nS1D6zkMiAAewsLqpGC/txx9kRwO6Xr7eu5m7EyCWsCRoDilUO1ixpjg0eGQrbf565mLqb0iB8nCOM1AkE9nKq+qXDoOjqWoDqm/LtPJp5WAgKOCN4ICVcAB0sAnynGifej7Zfm5hPvlUQCKgCoQQzibTaPcOE64T5mjS58I4k+vNpzXOqKY+iClHHww2NhE5W6n3TiazaKqzD673lECQoenTkxrG8Ewm2ob4VgEdjrzi6rIV5/0QnN5EkBZnJIo0mA6Iw4Kyqcqi/z1E4IxEQQnG6iSEJHlWUL/i3AYfRtmJfB5/PTPhzV4CI4RY3ccBQiAgrKkVkTs0BBlmePrLJl8TDAH+NgEwKeERzeW1Ei7/eEY+31VZGk0Gf3K0Bo+bE4FIANTghe1gPcExLGrsujl6fH27kf4YnNyP64rkCZR+FbT2o2sqhPZHyny+HX1NLr7GY4Dh/GuXIkQDoIJl+MYcCE4rkmaNzahxHY7ZBKBos6kAziyN0pifgjGlHBYjceQxoABA1dScGKiI4UxI20QoktSPP9u6QBsrHYZtsOGGINEUhMxzHcZKHzNNSaMAh/2cEmKAo3QuDo3E+CXWENyoZdCSqUwTjBa6AOeGJQJTTtej23JMTIMP0JcvWkMl4I2J8WMfpNO7AkyITCV4IuBGgGoS2NKCa5sYEgxrebLRnsBw2qCWoWDQXr8GxN1zhr2KIx42GECyrWe1C7tgmSW/boBPK+WRBY5kjyEBIbxBt+QLsAYryiANXjBKAfvBViFhD3v4XjLd5rN/k23d4XvMJINaoaAR3jdYDfyE2OeMq+TADmc6XVv+s3Wu6up02n3UW6JZ4EQgLhMGXSDViayhjG4TyWFrxoExniY9r80c7snGXYP8BZh0Citi8IJqgfDMwGmInHO3bomXvODw9TuYZXDIkNtxx0R4YmnXMrbxVeirhE8Brv+mKA5gIsO0y5aEJ8UHicSbVU/HJ3vwTSDqO6HF/MNPYYYNS1aFy0HTx0hKQXnXWCFFv0Ph8t1jwophYAEDv0oF6P24+/x5IMY/JhB6xTtAXUSO7aVCw7kyxzh/IBHbwh20zwi6syvr798PcUV/l6HoB9Bp9hxft6ezLw6rh8Mr9uNFrroy1sMrn4jvn5fftNutv4FXB+h7GFUTzUAAAAASUVORK5CYII=",
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
            actualHp: 67500,
            actualAp: 1725,
            actualDps: 386.19,
            magnification: "15%",
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
            actualHp: 15000,
            actualAp: 800,
            actualDps: 375.0,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "675",
          enemyName: "ソル・デ・ロカ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 200000,
            ap: 15000,
            dps: 2195.12,
            speed: 16,
            range: 300,
            rangeType: "範囲",
            kbLevel: 6,
            money: 3000,
            freq: 205,
            foreswing: 88,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 7500,
            actualDps: 1097.56,
            magnification: "50%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [88, 106, 124]
            },
            "omni-strike": {
                standing_range: 450,
                omni_range: [-450, 450]
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "MISSION 2",
      baseHp: 120000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 80,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
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
            actualHp: 750,
            actualAp: 300,
            actualDps: 93.78,
            magnification: "600%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
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
            actualHp: 750,
            actualAp: 300,
            actualDps: 93.78,
            magnification: "600%",
            count: "3",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 9000,
            actualAp: 750,
            actualDps: 368.88,
            magnification: "600%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
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
            actualHp: 38325,
            actualAp: 2044,
            actualDps: 958.12,
            magnification: "511%",
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
            actualHp: 173400,
            actualAp: 3210,
            actualDps: 2408.09,
            magnification: "289%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 211500,
            actualAp: 5405,
            actualDps: 1210.08,
            magnification: "47%",
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
            actualHp: 38325,
            actualAp: 2044,
            actualDps: 958.12,
            magnification: "511%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "675",
          enemyName: "ソル・デ・ロカ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 200000,
            ap: 15000,
            dps: 2195.12,
            speed: 16,
            range: 300,
            rangeType: "範囲",
            kbLevel: 6,
            money: 3000,
            freq: 205,
            foreswing: 88,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 356000,
            actualAp: 26700,
            actualDps: 3907.31,
            magnification: "178%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [88, 106, 124]
            },
            "omni-strike": {
                standing_range: 450,
                omni_range: [-450, 450]
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "MISSION 3",
      baseHp: 210000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 90,
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
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
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
            actualHp: 1125,
            actualAp: 450,
            actualDps: 140.67,
            magnification: "900%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
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
            actualHp: 1125,
            actualAp: 450,
            actualDps: 140.67,
            magnification: "900%",
            count: "3",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 13500,
            actualAp: 1125,
            actualDps: 553.32,
            magnification: "900%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
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
            actualHp: 61650,
            actualAp: 3288,
            actualDps: 1541.25,
            magnification: "822%",
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
          enemyId: "194",
          enemyName: "ヒュージハーミット",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAjDgQlFgUlGAksGQgpGwg4IQo4Iwk0Khg+LBRFKQ9DLxFBLxtHLhNHMxlZLQ5INR9NOhhVOxtRPyRWQiBmQh1hUDJnTitrTSdoVDRjWEluVTl1VC1vWz54XTRrYVCOWiuaWjCDZzyeYjmTaEiTaUGMb0KdbESgbEORcVSnbj2mbkWobkOSeEy0eUeehFWxflSvgFSxglinkGHNiVO2mGizoH3ZlFy5pXnioWjLuI/yuHv2vX73zI7v0J3////wgmVSAAAAQHRSTlMADv8kRYXi/w1rvf4s0JD/T/7qrf//oNj/xClg/4L/RP8S/jJU1P/ko3H8jb7//v+t48r+/v/c//7//v+H0f4ATbjUOAAABvRJREFUWIXtVut64jgS5ZLEgMBGIAURRMWtgAAHYYjjxKFnMu//VnvKJDvT05D5end/rj6Cie06qsupU2r88V+uxv8B/gcAP65Of7O56/CvZrPxH6zObOXcywYIw9vb+1813iwawxWJSL3cNdoTReNf9OH+uG/GJFqtVrFpXGnlpp1fc2Cfv3RiAwB5nDdiIdQvenB/mL70e9JTOFZxexC1xO0JeHFXX2aPiy896uyn8Wo4iIQNIZ9OZSsa1B7c7Y+PbL6t/GrzFcLiMIx9PIoiaaj0RopBFzno9Neu2rRn26I8quhwd9n+7um2eW2UAID1BWnh4vZ0ONtPJ+Pqdlrk3lcu8pvLALPVVXOsZRQJbT05I2jeHE9HeTFeHvPcWaVdIf3jZYD5sj0cCTggDFlLJrK3zVhFLg9F6bxlz0JZfeXBod9j+1YklAlkIzmNIwG0UASj8QDIYf1FDoarW3YALBLKBVKgAf5RUpFzKmIAOZl9VYSuJykkA6AM0orRwLVABSONArfYftz/wrzRuBpJ5I95DGeVllL6FhwCGBbiGsX/wOs+AsBe2Coy3ioB1xUcUqSkCUoMhs1O//7uMggyLskbwQkoKkSjbGFNq2U8HHM06c7WTy/Hl/3FLLYH8NSQ1r4iyuGJMp5sS6CghvK8qI7v7++FoKcLCJ3hiFSkYRMKAFipDLJvjM2rI0zLEgjVkVotd4EJ/QNZE6lgKS98XjkqvAw573o8HqsyCwV7EVDX/fkWjwOZII33lB+rvMixu8DuVZEHMDEPPs/J5SXqczhfzDGYI1VwzoUyJ59ba7QEnHchD9pokzqtTCW1vdCQ15Lrp53zVeEcYjAGFCLpvA7YW+skkUhI7oqn85W8ugEBQQCoUe7hM2klpdASm4dc1OyQSC0yeUkSrpmBNhiHdKN7EJAUAh/jyDPBwUmFbtjOb88A9ONu/xptGLnSEoJ2Tot6VyGttVqpFhP8phcP+83GuSJ0hZ6MWAngP9LoUsvbo7PBSzAKD9Al4/5liW5f99jbCCzmBTYpybaCW6vefWToa0Ftdm/Qyhqb6RAM+4+c1uIAa0Vhaqw/DL8AaDQh54JOzczNr2oVONkjrc46bRjgYhidgUgEIdWwrSkBzvF3S2htjAOcumn3Z/P1pXnLaiCgG544eaxr2JuCkWSIlM/xNRpPjFLLC7J0JU6BK0WnMDgdaGWyRFaXVe5d3eORWs7OhtHlKkDChAyBhVlwIJiyIC8ZV1boCKuISCq3GrfPAXC8LWUQeqhMJKHGUDUPMSHuwhL8YmWhEEjK5ZlEdMVJjzl5oWBz6YqyIMmjwfngPapLGHDWKWOnP0fR/agZYyhErU2ACpUOMzJKNDc31NkjjjwoNzpzbmCAOgrQ11jrrIaUlOhsRyJJuKCJJJnuSN2MlteDn0sRcwaodgL9B3t3rAoIEzyvWaHSwjudaI0x6yeDn2fMsNe7EYS2k0RFcBa6UKICUFVtUNEk9Ts4A2HKLEhl7eT+753RbLavhZeqzBE/mrqockiRldD5DHKEe6kmuyu9xdyjtHg5MyevUAFpg0UpJEaBg7dG8/tpjSAii1mhhYY8ppZs9+/2ne5IYYqi7pqnukMHwGegJRCVJEkU0CCqo/FNohWq0Zv/SId2rCCosoVqQ4Ad5FEhl5guHmIKBIsZD6Vw2g16AiOoLKsfptRw4pE+nj2SmHQgv7XojNQHrTVpVgdwo3KJmbavBr7c7criL53Vn1iX21ABACeR3GnYQ6VkIth7QHBrWJRFCA2zYVZVWbbzfx5luxbxKlMEbiIRUA4nmBE1vwBhEz4kpUG0EmGHOEykRckI809OXo1wMOTkEzc1Si+4r7T3dXMn2mubAiNFlhN92+ymLi12Web+HURzDEvpLA4kTOeau+iCtLA1APijeQdGT8ykH9vUmixL03T+WcOphfjwEcVAC/Fm3Z2Jqc9nCViUJhiWtWAqa4fdhMNigPGnB7HABAoKGgYG8FDiaYQ+1OwLZ1X4lAnCLkwe2j2+DXvb+0xCewDdhDFPpqqsz0oC2bcSxyyNbEYiTXclcimo+v77b8Ne7Zk2gz8BQHWcAkIO/cJcYTobl+lIZ2mSpOB49vr9/f3t7e07Lu+/PfTYl0QzwDesh8XIhF2+K8sdGhiTVafZ8+vbq7M7b9CK+P1hyhdcf3+pK5LUAA/z9XaV7T6WR2hZbfG9XrXl2+sz33mtf348KQk5GM2+sQsPi/Uy+1wAwdv1Or3JJgB4fj6h8r81Bu7u0tXp1AWIzeN6u1wu4UrGCPX7/CoDPX+af6zn0wu7bLWcLz6yyIl42GweAbNabbfbNT777dPh8MR/h8Nhu9/v8fRxzWu7fnzcLBaLh4dv3/4FD9lmaTPfmOsAAAAASUVORK5CYII=",
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
            actualHp: 286800,
            actualAp: 5310,
            actualDps: 3982.93,
            magnification: "478%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 355500,
            actualAp: 9085,
            actualDps: 2033.96,
            magnification: "79%",
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
            actualHp: 61650,
            actualAp: 3288,
            actualDps: 1541.25,
            magnification: "822%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "675",
          enemyName: "ソル・デ・ロカ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 200000,
            ap: 15000,
            dps: 2195.12,
            speed: 16,
            range: 300,
            rangeType: "範囲",
            kbLevel: 6,
            money: 3000,
            freq: 205,
            foreswing: 88,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 612000,
            actualAp: 45900,
            actualDps: 6717.07,
            magnification: "306%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [88, 106, 124]
            },
            "omni-strike": {
                standing_range: 450,
                omni_range: [-450, 450]
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "MISSION 4",
      baseHp: 300000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 100,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "250000",
          times: "-3",
          limitText: "-3"
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
            actualHp: 1500,
            actualAp: 600,
            actualDps: 187.56,
            magnification: "1200%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
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
            actualHp: 1500,
            actualAp: 600,
            actualDps: 187.56,
            magnification: "1200%",
            count: "3",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 18000,
            actualAp: 1500,
            actualDps: 737.76,
            magnification: "1200%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
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
            actualHp: 84975,
            actualAp: 4532,
            actualDps: 2124.38,
            magnification: "1133%",
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
            actualHp: 400200,
            actualAp: 7410,
            actualDps: 5557.78,
            magnification: "667%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 499500,
            actualAp: 12765,
            actualDps: 2857.84,
            magnification: "111%",
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
            actualHp: 84975,
            actualAp: 4532,
            actualDps: 2124.38,
            magnification: "1133%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "675",
          enemyName: "ソル・デ・ロカ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 200000,
            ap: 15000,
            dps: 2195.12,
            speed: 16,
            range: 300,
            rangeType: "範囲",
            kbLevel: 6,
            money: 3000,
            freq: 205,
            foreswing: 88,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 868000,
            actualAp: 65100,
            actualDps: 9526.82,
            magnification: "434%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [88, 106, 124]
            },
            "omni-strike": {
                standing_range: 450,
                omni_range: [-450, 450]
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "MISSION 5",
      baseHp: 420000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 110,
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
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
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
            actualHp: 1875,
            actualAp: 750,
            actualDps: 234.45,
            magnification: "1500%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
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
            actualHp: 1875,
            actualAp: 750,
            actualDps: 234.45,
            magnification: "1500%",
            count: "3",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 22500,
            actualAp: 1875,
            actualDps: 922.2,
            magnification: "1500%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
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
            actualHp: 108300,
            actualAp: 5776,
            actualDps: 2707.5,
            magnification: "1444%",
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
            actualHp: 513600,
            actualAp: 9510,
            actualDps: 7132.62,
            magnification: "856%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 643500,
            actualAp: 16445,
            actualDps: 3681.72,
            magnification: "143%",
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
            actualHp: 108300,
            actualAp: 5776,
            actualDps: 2707.5,
            magnification: "1444%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "675",
          enemyName: "ソル・デ・ロカ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 200000,
            ap: 15000,
            dps: 2195.12,
            speed: 16,
            range: 300,
            rangeType: "範囲",
            kbLevel: 6,
            money: 3000,
            freq: 205,
            foreswing: 88,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 1124000,
            actualAp: 84300,
            actualDps: 12336.57,
            magnification: "562%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [88, 106, 124]
            },
            "omni-strike": {
                standing_range: 450,
                omni_range: [-450, 450]
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "MISSION 6",
      baseHp: 540000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 120,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "500000",
          times: "-3",
          limitText: "-3"
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
            actualHp: 2250,
            actualAp: 900,
            actualDps: 281.34,
            magnification: "1800%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
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
            actualHp: 2250,
            actualAp: 900,
            actualDps: 281.34,
            magnification: "1800%",
            count: "3",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 27000,
            actualAp: 2250,
            actualDps: 1106.64,
            magnification: "1800%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
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
            actualHp: 131625,
            actualAp: 7020,
            actualDps: 3290.62,
            magnification: "1755%",
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
            actualHp: 627000,
            actualAp: 11609,
            actualDps: 8707.46,
            magnification: "1045%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 787500,
            actualAp: 20125,
            actualDps: 4505.6,
            magnification: "175%",
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
            actualHp: 131625,
            actualAp: 7020,
            actualDps: 3290.62,
            magnification: "1755%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "675",
          enemyName: "ソル・デ・ロカ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 200000,
            ap: 15000,
            dps: 2195.12,
            speed: 16,
            range: 300,
            rangeType: "範囲",
            kbLevel: 6,
            money: 3000,
            freq: 205,
            foreswing: 88,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 1380000,
            actualAp: 103500,
            actualDps: 15146.33,
            magnification: "690%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [88, 106, 124]
            },
            "omni-strike": {
                standing_range: 450,
                omni_range: [-450, 450]
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "MISSION 7",
      baseHp: 690000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 130,
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
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 2625,
            actualAp: 1050,
            actualDps: 328.23,
            magnification: "2100%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
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
            actualHp: 2625,
            actualAp: 1050,
            actualDps: 328.23,
            magnification: "2100%",
            count: "3",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 31500,
            actualAp: 2625,
            actualDps: 1291.08,
            magnification: "2100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
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
            actualHp: 154950,
            actualAp: 8264,
            actualDps: 3873.75,
            magnification: "2066%",
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
            actualHp: 740400,
            actualAp: 13709,
            actualDps: 10282.31,
            magnification: "1234%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "190",
          enemyName: "モーデン元帥",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAQEBARERATEQ8XEwsYFAwYFRAbFwweFwQlGAcjHQ4lHg0oIAwoIhNzAAEpIxYwJA4sJRU7KgQxMAc4KxY5MBQ4Mhk7MiA+MR08NRtFNx9EOhxKPSVMQSZNQCdvNA6JKgFPQiJSQh5LRCxTQypSSS9bTDBdUjZcWECJTBZnWDlqXz5zZEebWxB1aEl+b0+UcD2KelmIgGCWiWeeknCkmniuo362rIa8tI/Fu5XNxJ7Z0azk3bbw7Mz9+93///9pgXSoAAAAQHRSTlMAqdz0WzIlRw7/oK/pgwLO/24UB/45I5n/Xf9H/4/o//+jd7v/zP/ssP7/z///8P///9f+//////////////8Az1p95wAABcJJREFUWIXtVmt32joQpE14OMBFJAoRjjCQCBELgXH8toH+/391Zw3pSdsEetpv99xtzgklmtHs7Eqrxre/jMb/BP8JgovRGU8mj3eX132KH3o2Wj3+Bb7HdRT2/wIvhKu9+z/Ge8aGgfHGf2jC0FNCSBWa5e8y3N3dj8f3t6fVd33PnU4VlyZ8HjUao8vFuB2/rILN6nnyOKrXtrrCdY2ROopeRqOX10vFaM03gTUGP8vF5PG21X8YuGobbreuiaLnZ/tyex4/mhsKretfy3lXGdeRRhntCJsmZnGhFp0J/DbaaMGFwgfXBZOQUoeGOTIsksXoPEHzNQ5oa45gQorpWmurlFCB6T0MdGiX4/ME7TC2lIHUWivBpJoyYbRFFvLrdVcoG87PS2hv4tpBTaG4JuHaSMYld3pauiZOXs4yNFdxYPXRRq0FNFMyjqPBIVBLYZL8PEN/EwbWnhhcZSXngkMC4y5XXne4MGlxluF2snkjwD/JdaCk5kpBR6973en0g7A6r6E1XAQBdpcovRQqSrdaabhig838/q5xvbGR3pzvxvbc05pzVXOoQJsgDLYU0Wpy315ZV11qhk77ZsAc5ioTwNEwyyJ/fQx/MX62enD5WHZa/R5qHiVJmuRF7K/9IM6KdLtd+55xH1qX8HDiBfA4SbI8L3Pf9+NAF4fDvkq2vjWD9m/gwxAEMQjKKpz521Q4Mt4fijCJtTfsXMxgHoYBKUizoiztbJoWljOZ7MrYFvH6QjfTFNgQPqkFlNl0ZqtqlynXxkVsimrrX2IYLwlPDuZ5UdUEu90+V7DV2t1+u948nS1D6zkMiAAewsLqpGC/txx9kRwO6Xr7eu5m7EyCWsCRoDilUO1ixpjg0eGQrbf565mLqb0iB8nCOM1AkE9nKq+qXDoOjqWoDqm/LtPJp5WAgKOCN4ICVcAB0sAnynGifej7Zfm5hPvlUQCKgCoQQzibTaPcOE64T5mjS58I4k+vNpzXOqKY+iClHHww2NhE5W6n3TiazaKqzD673lECQoenTkxrG8Ewm2ob4VgEdjrzi6rIV5/0QnN5EkBZnJIo0mA6Iw4Kyqcqi/z1E4IxEQQnG6iSEJHlWUL/i3AYfRtmJfB5/PTPhzV4CI4RY3ccBQiAgrKkVkTs0BBlmePrLJl8TDAH+NgEwKeERzeW1Ei7/eEY+31VZGk0Gf3K0Bo+bE4FIANTghe1gPcExLGrsujl6fH27kf4YnNyP64rkCZR+FbT2o2sqhPZHyny+HX1NLr7GY4Dh/GuXIkQDoIJl+MYcCE4rkmaNzahxHY7ZBKBos6kAziyN0pifgjGlHBYjceQxoABA1dScGKiI4UxI20QoktSPP9u6QBsrHYZtsOGGINEUhMxzHcZKHzNNSaMAh/2cEmKAo3QuDo3E+CXWENyoZdCSqUwTjBa6AOeGJQJTTtej23JMTIMP0JcvWkMl4I2J8WMfpNO7AkyITCV4IuBGgGoS2NKCa5sYEgxrebLRnsBw2qCWoWDQXr8GxN1zhr2KIx42GECyrWe1C7tgmSW/boBPK+WRBY5kjyEBIbxBt+QLsAYryiANXjBKAfvBViFhD3v4XjLd5rN/k23d4XvMJINaoaAR3jdYDfyE2OeMq+TADmc6XVv+s3Wu6up02n3UW6JZ4EQgLhMGXSDViayhjG4TyWFrxoExniY9r80c7snGXYP8BZh0Citi8IJqgfDMwGmInHO3bomXvODw9TuYZXDIkNtxx0R4YmnXMrbxVeirhE8Brv+mKA5gIsO0y5aEJ8UHicSbVU/HJ3vwTSDqO6HF/MNPYYYNS1aFy0HTx0hKQXnXWCFFv0Ph8t1jwophYAEDv0oF6P24+/x5IMY/JhB6xTtAXUSO7aVCw7kyxzh/IBHbwh20zwi6syvr798PcUV/l6HoB9Bp9hxft6ezLw6rh8Mr9uNFrroy1sMrn4jvn5fftNutv4FXB+h7GFUTzUAAAAASUVORK5CYII=",
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
            actualHp: 931500,
            actualAp: 23805,
            actualDps: 5329.48,
            magnification: "207%",
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
            actualHp: 154950,
            actualAp: 8264,
            actualDps: 3873.75,
            magnification: "2066%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "675",
          enemyName: "ソル・デ・ロカ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 200000,
            ap: 15000,
            dps: 2195.12,
            speed: 16,
            range: 300,
            rangeType: "範囲",
            kbLevel: 6,
            money: 3000,
            freq: 205,
            foreswing: 88,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 1636000,
            actualAp: 122700,
            actualDps: 17956.08,
            magnification: "818%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [88, 106, 124]
            },
            "omni-strike": {
                standing_range: 450,
                omni_range: [-450, 450]
            }
          }
        }]
    },
    {
      stageId: 7,
      stageName: "MISSION 8",
      baseHp: 840000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 140,
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
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
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
            actualHp: 3000,
            actualAp: 1200,
            actualDps: 375.12,
            magnification: "2400%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
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
            actualHp: 3000,
            actualAp: 1200,
            actualDps: 375.12,
            magnification: "2400%",
            count: "3",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 36000,
            actualAp: 3000,
            actualDps: 1475.52,
            magnification: "2400%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
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
            actualHp: 178275,
            actualAp: 9508,
            actualDps: 4456.88,
            magnification: "2377%",
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
            actualHp: 853800,
            actualAp: 15809,
            actualDps: 11857.15,
            magnification: "1423%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 1075500,
            actualAp: 27485,
            actualDps: 6153.37,
            magnification: "239%",
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
            actualHp: 178275,
            actualAp: 9508,
            actualDps: 4456.88,
            magnification: "2377%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "675",
          enemyName: "ソル・デ・ロカ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 200000,
            ap: 15000,
            dps: 2195.12,
            speed: 16,
            range: 300,
            rangeType: "範囲",
            kbLevel: 6,
            money: 3000,
            freq: 205,
            foreswing: 88,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 1892000,
            actualAp: 141900,
            actualDps: 20765.84,
            magnification: "946%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [88, 106, 124]
            },
            "omni-strike": {
                standing_range: 450,
                omni_range: [-450, 450]
            }
          }
        }]
    },
    {
      stageId: 8,
      stageName: "MISSION 9",
      baseHp: 1020000,
      width: 4500,
      enemyLimit: 15,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 3375,
            actualAp: 1350,
            actualDps: 422.01,
            magnification: "2700%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
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
            actualHp: 3375,
            actualAp: 1350,
            actualDps: 422.01,
            magnification: "2700%",
            count: "3",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 40500,
            actualAp: 3375,
            actualDps: 1659.96,
            magnification: "2700%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
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
            actualHp: 201600,
            actualAp: 10752,
            actualDps: 5040.0,
            magnification: "2688%",
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
            actualHp: 967200,
            actualAp: 17909,
            actualDps: 13431.99,
            magnification: "1612%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 1219500,
            actualAp: 31165,
            actualDps: 6977.25,
            magnification: "271%",
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
            actualHp: 201600,
            actualAp: 10752,
            actualDps: 5040.0,
            magnification: "2688%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "675",
          enemyName: "ソル・デ・ロカ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 200000,
            ap: 15000,
            dps: 2195.12,
            speed: 16,
            range: 300,
            rangeType: "範囲",
            kbLevel: 6,
            money: 3000,
            freq: 205,
            foreswing: 88,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 2148000,
            actualAp: 161100,
            actualDps: 23575.59,
            magnification: "1074%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [88, 106, 124]
            },
            "omni-strike": {
                standing_range: 450,
                omni_range: [-450, 450]
            }
          }
        }]
    },
    {
      stageId: 9,
      stageName: "MISSION COMPLETE！",
      baseHp: 1200000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 160,
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
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
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
            actualHp: 3750,
            actualAp: 1500,
            actualDps: 468.9,
            magnification: "3000%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
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
            actualHp: 3750,
            actualAp: 1500,
            actualDps: 468.9,
            magnification: "3000%",
            count: "3",
            spawnTime: "4.7s",
            spawnTimeFrames: "140f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 45000,
            actualAp: 3750,
            actualDps: 1844.4,
            magnification: "3000%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
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
            actualHp: 225000,
            actualAp: 12000,
            actualDps: 5625.0,
            magnification: "3000%",
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
            actualHp: 1080000,
            actualAp: 19998,
            actualDps: 14998.5,
            magnification: "1800%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            actualHp: 1350000,
            actualAp: 34500,
            actualDps: 7723.89,
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
            actualHp: 225000,
            actualAp: 12000,
            actualDps: 5625.0,
            magnification: "3000%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "675",
          enemyName: "ソル・デ・ロカ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 200000,
            ap: 15000,
            dps: 2195.12,
            speed: 16,
            range: 300,
            rangeType: "範囲",
            kbLevel: 6,
            money: 3000,
            freq: 205,
            foreswing: 88,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 2400000,
            actualAp: 180000,
            actualDps: 26341.44,
            magnification: "1200%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [5000, 5000, 5000],
                timings: [88, 106, 124]
            },
            "omni-strike": {
                standing_range: 450,
                omni_range: [-450, 450]
            }
          }
        }]
    }
  ]
} as const;

export default e27015Data;

