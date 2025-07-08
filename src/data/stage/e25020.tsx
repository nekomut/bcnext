// Stage 25020 Data
import type { StageData } from '../../app/stage/types';

export const e25020Data: StageData = {
  eventId: 25020,
  eventName: "聖なる本能の秘境",
  typeId: 25,
  typeName: "発掘ステージ",
  prefix: "H",
  mapId: 20,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "秘境の祠 超極ムズ",
      baseHp: 900000,
      width: 4500,
      enemyLimit: 12,
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
          treasureId: "30035",
          treasureName: "ユニット20035への進化権",
          probability: "325",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "30040",
          treasureName: "ユニット20040への進化権",
          probability: "325",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30036",
          treasureName: "ユニット20036への進化権",
          probability: "110",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30041",
          treasureName: "ユニット20041への進化権",
          probability: "110",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30037",
          treasureName: "ユニット20037への進化権",
          probability: "35",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30042",
          treasureName: "ユニット20042への進化権",
          probability: "35",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30110",
          treasureName: "ユニット20110への進化権",
          probability: "20",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30115",
          treasureName: "ユニット20115への進化権",
          probability: "20",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30120",
          treasureName: "ユニット20120への進化権",
          probability: "20",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 220000,
            actualAp: 7200,
            actualDps: 8000.0,
            magnification: "400%",
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
            actualHp: 220000,
            actualAp: 7200,
            actualDps: 8000.0,
            magnification: "400%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 220000,
            actualAp: 7200,
            actualDps: 8000.0,
            magnification: "400%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 220000,
            actualAp: 7200,
            actualDps: 8000.0,
            magnification: "400%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 20250,
            actualAp: 2400,
            actualDps: 2571.43,
            magnification: "150%",
            count: "6",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
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
            actualHp: 52000,
            actualAp: 6200,
            actualDps: 4536.6,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 20250,
            actualAp: 2400,
            actualDps: 2571.43,
            magnification: "150%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "254",
          enemyName: "ミスターエンジェル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQECAgIEBAQEBAQFBQUFBQUGBgYGBgYJCQkPDw8YGBgiIiJ/AAErKyssLCwuLi4yMjIyMjI4ODhCQkJISEhKSkqJOwT/AACOPQtRUVFXV1eXSheWSxFcXFxvbgGeVgmoZRhxcXGsah15eXm3cR2lgwGzdiOzdiS2dyS9dSOMjIzRiyjHkjjMlzvQmjvboAGnp6farUPktE3auFjdvWa/v7/gw1bs0oLU1NTx3Ir//wL68ZXw7eT4+Pf///+A2dlHAAAAQHRSTlMA3QoYy1RsJzuJnbxZAnrashE28caOqgcBKeH+Rhu9DAkn/U7mpQdBY3y//etrlLcF/Hvgr8b+jeT/8wH7////+59llAAAAvRJREFUWIXtVl1zmzAQdMEGBI5xgg0p1K5RcMBVY0dxUCxiif//r3rCH/G0zQTRh75kH2Bg2OXudLdSr/cerqIoms2+NpjNFovo6t1P/4LFYpbeFavl8keD5XJV3OXpYtGWH+WrzXa7/XkBeNys8zRqxy/Kar/bblZFcdegKFbrzRberVspLL6VUlZrFTLUoblEKqXNvt4/tclCCdT7cv2Q52k6U0jTPH9Yb0UtXtoI9GaQghD7arcty2eFstzuqr0U1XPeSuA2SlfP5a6q9m+oql25LtJW/J5qArWMD08vJzw9FKomty35x0AeHx/vvwPu4f76qsU9wjCdAcAxjS7sXs90kOcDPDQwO/EtL8aUMUpi37I78JGPmZCylpITH2nHYFg+4bJuIAXxLV0Fx8OiPoNjz9ENIGDyTUCyYKC3FKZ7GUBdi0SzCuaYXgQAhSSupsCEXQZQSzLWW8k/BKi2wO8p6AqMyaVALbBmDQyU8MsIeKDZScbAf8tB1tCKGn1g2MPRNPQTflYQJEBtS2ACe55RxmmiZqmhcxL47qCVK5jDKbC5IkqGE0w554zghDCahaMWzuJM4N+cMdH0Pw4SjHESJBCKEKAxH32UiDkK5/PGRoBCgU0BGMZCMnjHaGx9FIJh2jZSGhyKQAgRagUwxMRIMAnDDyM4iNj2MJxPAsyw6iZYAnC1+RxK0N5dwY/dmJGEHQSCsWWbWo3U8FmiMqgFTWJk69mJbXkZ8LFqJSlpQmNXy9GMUUyhhsnB1CQNCMumOhmYIYXmC47DAAIBZXOdab6eZtmkj0/jyAIvzsJrHYGb4dA6mSLsKzEaDG90BBScydHWpeAZ0t9dDSvmal9TXtJJwHYJb0aqFoyTDgJqLOlBgHYT8DEmTQ4ClFx9AdNyvZhQcAeGcWx1OKKYtoPG43ASx3007HC86B2swXb+4Yj0iU984j8DjABm2DoD5tnWGWhlRf1+/8sZ/b7ntT5h9dThAP6OkHsCQsgCT3nv8182ap4fI31gZwAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 13500,
            ap: 1600,
            dps: 1714.29,
            speed: 45,
            range: 160,
            rangeType: "範囲",
            kbLevel: 8,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 20250,
            actualAp: 2400,
            actualDps: 2571.43,
            magnification: "150%",
            count: "12",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
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
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "36.7-36.7s",
            delayFrames: "1,100-1,100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [36000, 36000, 36000],
                timings: [15, 28, 41]
            }
          }
        },
        {
          enemyId: "261",
          enemyName: "イノエンジェル",
          icon: "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",
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
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
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
            actualHp: 13000,
            actualAp: 1550,
            actualDps: 1134.15,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
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

export default e25020Data;

