// Stage 1278 Data
import type { StageData } from '../../app/stage/types';

export const e1278Data: StageData = {
  eventId: 1278,
  eventName: "女王の発掘調査２",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 278,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "遺物調査Ⅱ計画",
      baseHp: 800000,
      width: 4600,
      enemyLimit: 10,
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
          treasureId: "56",
          treasureName: "ネコビタンB",
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
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 55000,
            actualAp: 16500,
            actualDps: 10531.91,
            magnification: "100%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
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
            actualHp: 165000,
            actualAp: 5400,
            actualDps: 6000.0,
            magnification: "300%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
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
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "30.0-36.7s",
            delayFrames: "900-1,100f",
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
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 55000,
            actualAp: 16500,
            actualDps: 10531.91,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "43.3-46.7s",
            delayFrames: "1,300-1,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
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
            actualHp: 165000,
            actualAp: 5400,
            actualDps: 6000.0,
            magnification: "300%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "613",
          enemyName: "超天獣ラジャコング",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQECAgIDAwMDAwMEBAQFBQUICAgMDAwQEBAbGxsxMTFUVFRvb2+NjY2urq7dvRHdvRDfvg3evhPgwRvjwyHlxifpyzvHx8fsz0bz2Wbb29vr6un4+Pj///+5+EjUAAAAIHRSTlMAPiQMbo5Sp/7rz7j5/P///zAaCExnhqCy/8vs/////0jcmkMAAARqSURBVFiF7VZrc+o6DCRv4tiSoZRi8OP//8uzchJOkkLa8/HOXM205KW1tFpLPhz+t/+QfXycz6fJzuePf/Q+X65fo12ni+vn6R9ALvfH/Xq5YOVsp9Pl8+vx+Dr/GuAawv1TAp/sfLpcH+Fx+X0G1/sDdr/fbl+32+2e726fP+dQNuUMgaiR/S2bMHD5FQWVoq5Y3M8p/OhXzVcFeRraau/jV1aoWkKv6oEMp0CqXrzr2p8BKuV4aOquNxxiSsmbYeKiHFhVyxDfhaB9Co6N5pCykcoIZW8DommHHwCKgWz2Czz+AqGRFw0Sag41m32AomefZseQJInk1KGoDgrPTasTlbsAtbZxBrA2SRYx9FWtaoXrAF7dMHJV18Urf3q6Y2XjrBMEM7QcOF+CWJa6VIMPXG/dy0HSDi757BgoWcdEpL3pkc6MbcrqUNvkh21RS5XdPDM7HgEQs/coibXWhWdqvVbGB71ls+hBU8R3zqVIEi/FuSIGqoIu/JRacsHbZuPfov4p2PAkELk7rUc5sHcILTHnd8cQXaINh7XGh272B5Ik66OmI15E6x3klbwWBItaeKeqb/4By45M+eQ5AyRjozVCPqgVTKmFPHFmzWBjkDrBL0fgPcLHlbHewIsJxfM21zFLK2jqV/5Vg/IHkGRHluRT+UP4huFB2jpjZmXD9HqXF8pm+hz848RglK0AJU2UEnH46w8lrNPHuo4tQ8TjV55dTIS1w9IrpzYWyi8YLDtRryOGUtwolhDzb4xpY6M+sVCkJwVtL6lZrGaDhbxS9NHFGLa+mT9j0Sa0wZ+ecxD2IVlOkZ2zcI7MhAuo2X5HgP/xCH7AyBRBpxEuaRettlYjRMe9UhpXNoRvGYw0kBNdqYm/Qamm6El1R2oG27Pui0PVNsavvFAfO1UYFGiHXM1SyCUSQndAh+jKnFtVm0VfCAyGEX1+hPL4ILtiu5XWVinzBIgzGwy+vFzLP6feuVZV2XbmBYOyicb6MtB9/6a3Fj0Ggn/lLp65zYB1tKPju95am5caGNkAuc6gyRm27yKQxsJvIQgtRrZsNLp7z2DZv5aA5KC1DZAi5LIzHeqXDI4Ast8gJKf3pqxaru/DGmB8uOtf0MplVREr7zyrVzPpTQZ2dRcNMRl6J6LRutWafhUPyo/unGj3nKHWRSRe3WaNerU34jcAMbfVpzktd3qPhCWAkylAehmEztNhby8qt1jeYlZAPgsANgI87JG4StpB/isiveTg9+pQL9cThBjM8oFGhGGPxap3KwRM+FWHkzqEXSW0elUHjCda5iByDnscTCeFReGw/8MawO13REyrvy1BWBypXwBsDxffeeim015g8bfdok+hsLscihXGBYy36BlnETSyupKT9yhIkTZ9O99tbJBvISL0H8uEWVM7NNR89BZ/u9PORmsHM2ZgTcC5ezg0mAg5IfK/8cdwKBpFGLCsDc6ZfTeQkyMMjmxMuinLH0/8TadUDzsuTMs/PFOqa+Z+8AdP2cnTRr9lyAAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 1855200,
            ap: 12500,
            dps: 23437.5,
            speed: 36,
            range: 200,
            rangeType: "範囲",
            kbLevel: 24,
            money: 4500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1855200,
            actualAp: 12500,
            actualDps: 23437.5,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 250,
                omni_range: [-50, 250]
            },
            "wave": {
                chance: 10,
                level: 2
            },
            "immune-waves": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "遺物調査Ⅱ方法",
      baseHp: 825000,
      width: 5800,
      enemyLimit: 10,
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
          treasureId: "54",
          treasureName: "キャッツアイ【伝説】",
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
          enemyId: "554",
          enemyName: "ケルベローズ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 2500,
            ap: 2500,
            dps: 1442.31,
            speed: 10,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 66,
            freq: 52,
            foreswing: 13,
            backswing: 16,
            tba: 20
          },
          stageStats: {
            actualHp: 12500,
            actualAp: 12500,
            actualDps: 7211.55,
            magnification: "500%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
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
            count: "5",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "613",
          enemyName: "超天獣ラジャコング",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQECAgIDAwMDAwMEBAQFBQUICAgMDAwQEBAbGxsxMTFUVFRvb2+NjY2urq7dvRHdvRDfvg3evhPgwRvjwyHlxifpyzvHx8fsz0bz2Wbb29vr6un4+Pj///+5+EjUAAAAIHRSTlMAPiQMbo5Sp/7rz7j5/P///zAaCExnhqCy/8vs/////0jcmkMAAARqSURBVFiF7VZrc+o6DCRv4tiSoZRi8OP//8uzchJOkkLa8/HOXM205KW1tFpLPhz+t/+QfXycz6fJzuePf/Q+X65fo12ni+vn6R9ALvfH/Xq5YOVsp9Pl8+vx+Dr/GuAawv1TAp/sfLpcH+Fx+X0G1/sDdr/fbl+32+2e726fP+dQNuUMgaiR/S2bMHD5FQWVoq5Y3M8p/OhXzVcFeRraau/jV1aoWkKv6oEMp0CqXrzr2p8BKuV4aOquNxxiSsmbYeKiHFhVyxDfhaB9Co6N5pCykcoIZW8DommHHwCKgWz2Czz+AqGRFw0Sag41m32AomefZseQJInk1KGoDgrPTasTlbsAtbZxBrA2SRYx9FWtaoXrAF7dMHJV18Urf3q6Y2XjrBMEM7QcOF+CWJa6VIMPXG/dy0HSDi757BgoWcdEpL3pkc6MbcrqUNvkh21RS5XdPDM7HgEQs/coibXWhWdqvVbGB71ls+hBU8R3zqVIEi/FuSIGqoIu/JRacsHbZuPfov4p2PAkELk7rUc5sHcILTHnd8cQXaINh7XGh272B5Ik66OmI15E6x3klbwWBItaeKeqb/4By45M+eQ5AyRjozVCPqgVTKmFPHFmzWBjkDrBL0fgPcLHlbHewIsJxfM21zFLK2jqV/5Vg/IHkGRHluRT+UP4huFB2jpjZmXD9HqXF8pm+hz848RglK0AJU2UEnH46w8lrNPHuo4tQ8TjV55dTIS1w9IrpzYWyi8YLDtRryOGUtwolhDzb4xpY6M+sVCkJwVtL6lZrGaDhbxS9NHFGLa+mT9j0Sa0wZ+ecxD2IVlOkZ2zcI7MhAuo2X5HgP/xCH7AyBRBpxEuaRettlYjRMe9UhpXNoRvGYw0kBNdqYm/Qamm6El1R2oG27Pui0PVNsavvFAfO1UYFGiHXM1SyCUSQndAh+jKnFtVm0VfCAyGEX1+hPL4ILtiu5XWVinzBIgzGwy+vFzLP6feuVZV2XbmBYOyicb6MtB9/6a3Fj0Ggn/lLp65zYB1tKPju95am5caGNkAuc6gyRm27yKQxsJvIQgtRrZsNLp7z2DZv5aA5KC1DZAi5LIzHeqXDI4Ast8gJKf3pqxaru/DGmB8uOtf0MplVREr7zyrVzPpTQZ2dRcNMRl6J6LRutWafhUPyo/unGj3nKHWRSRe3WaNerU34jcAMbfVpzktd3qPhCWAkylAehmEztNhby8qt1jeYlZAPgsANgI87JG4StpB/isiveTg9+pQL9cThBjM8oFGhGGPxap3KwRM+FWHkzqEXSW0elUHjCda5iByDnscTCeFReGw/8MawO13REyrvy1BWBypXwBsDxffeeim015g8bfdok+hsLscihXGBYy36BlnETSyupKT9yhIkTZ9O99tbJBvISL0H8uEWVM7NNR89BZ/u9PORmsHM2ZgTcC5ezg0mAg5IfK/8cdwKBpFGLCsDc6ZfTeQkyMMjmxMuinLH0/8TadUDzsuTMs/PFOqa+Z+8AdP2cnTRr9lyAAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 1855200,
            ap: 12500,
            dps: 23437.5,
            speed: 36,
            range: 200,
            rangeType: "範囲",
            kbLevel: 24,
            money: 4500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1855200,
            actualAp: 12500,
            actualDps: 23437.5,
            magnification: "100%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 250,
                omni_range: [-50, 250]
            },
            "wave": {
                chance: 10,
                level: 2
            },
            "immune-waves": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 22500,
            actualAp: 11000,
            actualDps: 8918.9,
            magnification: "500%",
            count: "4",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "43.3-46.7s",
            delayFrames: "1,300-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 321234,
            actualAp: 11234,
            actualDps: 21063.75,
            magnification: "100%",
            count: "2",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "113.3-120.0s",
            delayFrames: "3,400-3,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "604",
          enemyName: "超鳥獣アヒルジョー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQECAQECAQEDAgEEAwIFAwEGBAIVCwQXCwQYCwQiDQQgDwUkEAYzEgIzEgREGAJHFgI+HgtcHwBhIABJKhVMLRd1KAOKLQJnOx6WMgGHPhV6RySsOQKITynCQAPNRAGdWizXSALlSgCtZDJ7dnPyUQLGYiT+UQD/VAC/cDn/WgP+YAzQdjn/aBX+cCDbf0D/eirqh0P/hDX9jkP/lEn/m03////bciUPAAAAQHRSTlMABxUnOErveL3eW2mTyqqFl7b/pOnSu/7c/8T94tf1///+///7//////////////////////////////////8AacjdNwAABR9JREFUWIWdl2l7qjwQhlmPHhbRVkWlssmOLw0GAVly/v+/egdc2lOX2jMfeqVcyT0zTyaTSP3pjfreOJGiaPrj/z+nlc8C2KlCUQP2nwAMxUkTPRQoeir8E2AgKbuKhDzFh6uPHJ4GsMrIm5aEOBw1bnZj+scAXg/LfdkSnaHXhFgs8yOAMB7oDmk7W1PclrT6evwjAKvvyrYBa5sZpVSkKUvxZymIYee/OZBqTK3buiGOIvDPAwYrZ9c2ddtmdSky3qEg7X5vic8DBIsQcJ83ebZVBu/40NQklH6SgtgrmKdZbNuGZiS4rvQx8zyAGW1BgKZOEUoxTu0lbppyxj4N4BYlZFBghNM0SYMYu1rWniR4DrDadhnUBQBS/z8vMQ1jq3N9bOJTKfB609VQDwj+83wTx66xen19XTn6cyJOGsghTztAGsebnpSmuGjI+jkR9TKsoAzzBEQwNpBQfTjUEBXU1XMpjMRpQ8guQqCBdTwTvRGLuwFg6WsE45DK22adiGp5JMBfEso3dkGSbwAUy5rM6i7xyHKAQEi5I234wl0DJEe5kYQocpQYQxGlyCy9bbXde07o6eJ1HfBeyN9Rggv7EHyr2XmhU1VOX0tfAPSMOOwdAOMUICI2h6sdKNrs1r2nLwA+7JoeMxBvEVZdCumSpYXX1fpVOEr1BSCV0Ha5tXozjddDtw2Lvz9+Acwashutq+mNjaCocdlpsKAfAKDhto26b2c3AUrS1a/GPALosMXhniyYm4A9qIht/gGAk6DOK484p0k0mHBZoJSgAYqlB4DBVK9ast+WI1gsjOdvb2+Lqa6wx7twnKTXIvwNYNUG+kZblaHCL9wE+hdGUfG+eOm9zov+EPvCfQClQP/Poeu2Gxem1geU4RSl6H03oqGQ+kpM0/l9gEhP4ALIEUIJFF2aZShv6izDuA6H4uT91Edc/i5AHvFymGfgMz0ZKgqAHOAIbMri/HV194WihNbvX1oEEaQXg50DQI7zUyODEGzurog6qXa+j5LkEwFSgUDa/EJFsXIPQA28BjLGUXz2np5Q+ICTj7hWdwHUwAriyNXiY+xpHJ1jQellmGKDuQuAh5QsK1LUzQtcw4ySs9fIvqSETfY+oDfRx51WL/5ZNwhACz4AtvgNgLch+sBfLs9pI5xoySeA/M0ji9UwdlXX9dHJfZGnrnsJB5sG9xhAz8ClGh1XoEOBDrCJJjrFkCSbTHkMoEaaYajLk/+iO8VF7V5ECDZ49hDAyqodJd0Wdggo7bpA9SGwTxFh2JvJQwDDK7OlnRQwN8XwMkqhm+ZwrZ4UDQwcSQ8BXRC/DGOT5NDIMwzrEIrT7Aww3Obj9rkHoAQ1CoxtAecqw36MA7/dnSrJ3Hhk9sRbmZ/62Db2NW6qzaGxdsSKUV8DoWV9uv7uAyh2aKDI8NzQ2pLtS+m5kAtO3uSton7qqw8AkMbMjOIoMraObTs26BGbryw3osWnf/KIUA5uZJoB9pe+ayzG3NcZ3wAGsGqkjObz2XSpqcKt++oxQAnM5dHpPDBvX5iPAePYXx57xyJxJ1eLvwfMI/NY9PSbb0hXi78HLJB99MuaiTH4OYAxImPYj3jf1/4BwLmxMWVZXqCU2NeGDCtcv1weAgYBvKpVTVtKE4Qic6lp6tXj6XEEUH04hp1Q1aC/LVxVndPfAjhhII1Gw6Esyy9mAGYv1aVqdyMDRr/l4XA0khSBo28DaL5fL8u/T/brbOcPcoeQBvxnwP/PBr5ipVzr/gAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1200000,
            ap: 19500,
            dps: 8863.64,
            speed: 15,
            range: 250,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 66,
            foreswing: 10,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 19500,
            actualDps: 8863.64,
            magnification: "100%",
            count: "1",
            spawnTime: "110.0s",
            spawnTimeFrames: "3,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [6500, 6500, 6500],
                timings: [10, 21, 32]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 251]
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "savage-blow": {
                chance: 100,
                power: 1.05
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "遺物調査Ⅱ成果",
      baseHp: 850000,
      width: 5100,
      enemyLimit: 10,
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
          treasureId: "1",
          treasureName: "トレジャーレーダー",
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
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMKAAAEBAQFBQUHBwccAAALCwsMDAwPDw87AAASEhIXFxdUAAAbGxsfHx9nAAAiIiIlJSWAAAEoKChoEBArKyuTAAAuLi4xMTGmAAA0NDQ3NzdKNDM7OzvQAACZHR2sHBz4AADlDAz////fzfTUAAAAQHRSTlMACA4VHSQuOUNRXGZweIKOmaSq/7K6wMrR2N7w5///+f////H///////////////////////////////////8ALrmR+gAABSJJREFUWIWdl4t24ygMQPN+t3FC3kkJJRQKC2VZXDyZmZ3+/18tttPGxs5Mu5zTNMHWRRKSEI23t7fGn0Z/Me7Uzb+lwp8BdI54Px91mu3m/wQ0IpoYut/td+tp/8uA9jhaboE6G2etkRTMu18EjABVxuizoJQy5Zw8jL5owpSeORdKgXRAnmh49yVAd6MNAtcBtUOTLwDaW6NBeQh37H8a0F5rFcgDZNTq04CIGxwCAIpR7zMA/9KIu6o8AIbdfQLQ3o/a+5jWyAOuN58AjPBhzWoM8IPZfef3gO6801hqDWJSJw+oQ/3fA3pgd7ePna3swMWLDg//AKCWUIOTegW8F0V0E9BfjlqNLj4nZ4ECB8D808+yeN+7BegheoimKKYKBcteeFAwBBBYt24AmjtnNaUxrOhNpCd4KuMZaXjLBzMVG5fUABT38oQSrTjxSoxv+WCjLIAo1N+rHjNufvz6llhlf/7iYFAL6M2JSc610QOV1uefv7752IR//8D1GjSjHWKJqqp/GcxwzP1T7CnrWg1aEYn5LfFsmLPGAFuBjt0aQG9Dk4TfCp90YMwSB5n1q4xrAJMtIC4pZyAiBL+7FBMOICEApVrOagCDDXPy6gEMqPDFXGnrVc5gOnuYh9S6AmjfH7UrLk+9IElFIDaZXiKThFSk/3YhYLzjSSn/fUY9XDfgTHxRz42iKnXTvgzoLJhzrGw9AE9XgrDZjP+jXNIqYIWUq8Tvw8v1O0xyPLGJjh2pmNAdAyvDTXt8TSkXLbSAXgMVM6YYcxwsCoCOLzBRqmMI+P788vJ8AXjFCVA2jxIW40kBMAGDQbX+PICXf//95/HdDVRTo2IPipOYYFqKxEgd96ZiQCr/fP2FNXIJ9ttheOyPy6iYC8vESVfJ4KfXx+9/XX8SAyC8RBEE+3YRsLLyLMrSEOMnr8NrQYP4+pXCUakmzizGwRbC7FB+fL0GApAXIxnnx3GjABjMlppVDMiC8uH5qaCCI15WGonX2fn+AegxIapFQGQ2PRQAgBrCKYEIR40SoLlNkrhSxvwhHk5hTXPrTp0SoHHPNauWMWkqU8Tmmsj7IqA1XPPaOmp0SMU6MxWbQ6sAmCFzTkRNIUXG8WA6VwFLOigAOuPlSSS1pZzHYYdis5Rkclryge8FgjDC73I6aFF4FgvIrkqAHj8Hu4B0nvxY0PIDbDOj7KldBNwJboOVsM0FeaDaxQbNBkVAtFlJFrxI8+Si4V6mR6z3YtqnXQHtZp/FwYsgry/QBuHEVa5YVG4wWgcXNnTYZXuuQidkSUbFPOhQJtyFkeC1RwizoFXOs5TKWdjiLFWorPejsSLcSGhgBpiGgPZCBnGXXhGgj4hysUdZmnM+qTRZzelJ+5Ps402WZ6NEzBbVojKd1mRY06VF/sxRgqYLYiDS0EJQyu1OFZMqswgFgZT3Fgus83qZLq/9IY19HRWr1sinxEeukSwuGK9pNCOWBR/ChAgtKUL+DJWn+2b/wDTXl4qFs5AnBveqgG0epNCfGb7AYsYIPUX+jreSlkGeByTN2n8ck7r7wuJal0m2HYitu+m1IYZIm9S5SMYE+TM+pvNGDaA1WR4+diC7qFF9GvqCaZBIdSPCqZRtFZ426wDpTg7n+5yQrQiE3PZ6EVEEUW5j354wqflx9X79LQGao+l8tV5vylGXG4WFUSxvbtKP7Wo1nw6bIaA/mtxPo9l8sVyloM12u919DP9js1mvV6vlYhZF0/vJqH8B/AcN7X7oOyh/ZgAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 321234,
            actualAp: 11234,
            actualDps: 21063.75,
            magnification: "100%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "3",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 321234,
            actualAp: 11234,
            actualDps: 21063.75,
            magnification: "100%",
            count: "2",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "613",
          enemyName: "超天獣ラジャコング",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQECAgIDAwMDAwMEBAQFBQUICAgMDAwQEBAbGxsxMTFUVFRvb2+NjY2urq7dvRHdvRDfvg3evhPgwRvjwyHlxifpyzvHx8fsz0bz2Wbb29vr6un4+Pj///+5+EjUAAAAIHRSTlMAPiQMbo5Sp/7rz7j5/P///zAaCExnhqCy/8vs/////0jcmkMAAARqSURBVFiF7VZrc+o6DCRv4tiSoZRi8OP//8uzchJOkkLa8/HOXM205KW1tFpLPhz+t/+QfXycz6fJzuePf/Q+X65fo12ni+vn6R9ALvfH/Xq5YOVsp9Pl8+vx+Dr/GuAawv1TAp/sfLpcH+Fx+X0G1/sDdr/fbl+32+2e726fP+dQNuUMgaiR/S2bMHD5FQWVoq5Y3M8p/OhXzVcFeRraau/jV1aoWkKv6oEMp0CqXrzr2p8BKuV4aOquNxxiSsmbYeKiHFhVyxDfhaB9Co6N5pCykcoIZW8DommHHwCKgWz2Czz+AqGRFw0Sag41m32AomefZseQJInk1KGoDgrPTasTlbsAtbZxBrA2SRYx9FWtaoXrAF7dMHJV18Urf3q6Y2XjrBMEM7QcOF+CWJa6VIMPXG/dy0HSDi757BgoWcdEpL3pkc6MbcrqUNvkh21RS5XdPDM7HgEQs/coibXWhWdqvVbGB71ls+hBU8R3zqVIEi/FuSIGqoIu/JRacsHbZuPfov4p2PAkELk7rUc5sHcILTHnd8cQXaINh7XGh272B5Ik66OmI15E6x3klbwWBItaeKeqb/4By45M+eQ5AyRjozVCPqgVTKmFPHFmzWBjkDrBL0fgPcLHlbHewIsJxfM21zFLK2jqV/5Vg/IHkGRHluRT+UP4huFB2jpjZmXD9HqXF8pm+hz848RglK0AJU2UEnH46w8lrNPHuo4tQ8TjV55dTIS1w9IrpzYWyi8YLDtRryOGUtwolhDzb4xpY6M+sVCkJwVtL6lZrGaDhbxS9NHFGLa+mT9j0Sa0wZ+ecxD2IVlOkZ2zcI7MhAuo2X5HgP/xCH7AyBRBpxEuaRettlYjRMe9UhpXNoRvGYw0kBNdqYm/Qamm6El1R2oG27Pui0PVNsavvFAfO1UYFGiHXM1SyCUSQndAh+jKnFtVm0VfCAyGEX1+hPL4ILtiu5XWVinzBIgzGwy+vFzLP6feuVZV2XbmBYOyicb6MtB9/6a3Fj0Ggn/lLp65zYB1tKPju95am5caGNkAuc6gyRm27yKQxsJvIQgtRrZsNLp7z2DZv5aA5KC1DZAi5LIzHeqXDI4Ast8gJKf3pqxaru/DGmB8uOtf0MplVREr7zyrVzPpTQZ2dRcNMRl6J6LRutWafhUPyo/unGj3nKHWRSRe3WaNerU34jcAMbfVpzktd3qPhCWAkylAehmEztNhby8qt1jeYlZAPgsANgI87JG4StpB/isiveTg9+pQL9cThBjM8oFGhGGPxap3KwRM+FWHkzqEXSW0elUHjCda5iByDnscTCeFReGw/8MawO13REyrvy1BWBypXwBsDxffeeim015g8bfdok+hsLscihXGBYy36BlnETSyupKT9yhIkTZ9O99tbJBvISL0H8uEWVM7NNR89BZ/u9PORmsHM2ZgTcC5ezg0mAg5IfK/8cdwKBpFGLCsDc6ZfTeQkyMMjmxMuinLH0/8TadUDzsuTMs/PFOqa+Z+8AdP2cnTRr9lyAAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 1855200,
            ap: 12500,
            dps: 23437.5,
            speed: 36,
            range: 200,
            rangeType: "範囲",
            kbLevel: 24,
            money: 4500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1855200,
            actualAp: 12500,
            actualDps: 23437.5,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 250,
                omni_range: [-50, 250]
            },
            "wave": {
                chance: 10,
                level: 2
            },
            "immune-waves": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "610",
          enemyName: "超棘獣ナマケモルガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAwMBBAUDAwQDAwQEBgcFBwkBDBUGCw4JDBAIDRAJDhIIDxQKEhgMExgNFhwNFhwNFhwPGSAPGSAQGyMRHiYVHSIOIzEVIywWJC4ZKTQZKzgaKzgaKzcdMD0fNEIfNkUnND0iOkslQFI2PkYoRVgpRFg5QEUpRVksS2AuT2UwUWcwUmlAT1kxVGsxVGs0WXI3X3k5YHtNWmY6Y347ZYE/aodAa4lBb45EdJVfdYRKfqFMgqdQh61phppSjbVTjbRVkrxZl8FamsVcncldoM18mKtgpNJhp9ZjqdhlrNyLpLVnsOJptOeIr8htue2arLhuvPGWtMlxwfeltcB0xv2XvNV3y/+bx9vHubB81P/EwsCC3v+47fv//v2gK3VwAAAAgHRSTlMABAcNEhojMjc+Qkxvl6y/0Ojy+C06W32S3f9VZnWCibXF1aFfyuK7qf94toTQkWey3/ep/+7aZMiY/97/vM//sNa2/////9R78sb/z+i/3/////H//+3/+f//////////7v///////////////////////////////////////0AGKagAAALaSURBVFiF7ZPtX5NQHMVx6pzOp5nTydTpnBpq5gNl4QoLxIwshk6EAdIYyECuN1xzttJ/PZza0yfN6i3fV78Xv3M4954LggQEBAQEBAQEBAQE/C/DM9/nUPM/GETod3OZaEdHR3sbkkzFk38hDTUhkZmHy0rN1lVFVWRpe2trae7O8iakbQYJLcoVaFiOC3yg50Fn484G8ZHwo9XwqOwaltnAMiEwylrmzg7jjOLKhsI7V3oLSvj6gb7R9EdlqCWEIP3zz223pDskbZuXETwBRdHCqTBzuzry9M3u3u7rtW0LAFIsFUVGvYxgG9j6PkGcne3e1mXyhQIqHvQqoOjoHM6BsiOZhmlY0Ab8ztnZ6f5J4eDmJiOrWgVajfOWNFsjeN1Pz2plwy1Lpbp0fLxTIPdx9MYzJHjP8z/npzVLfnUMBx3LskjRBXCjf2SveHT46Xz/9BAd+L28aVKC5VLxoq6ipWumQYjQdC3TkGExm0CQlifq0efzw8Jp7IY7GGaKuqWJtmW6ednWNDUrwgorgLLrkOn+i42UcPjxw0khejHHfy2zbZZVZM3V865huiIPTJ3LV8s8ynqgylJiur0RcuXl21etjf3BdLz1m0dz++hjWhAFzdbXFhxQti1WgQrtAh7XPF1hqVpV3pwP+w8kOnF/5KqDBIqlp6eHE+nZ6QdLWSYv5hiOYpnRJGloGhR4yKq1fF4RJR4fWNkt1b/Y2882JBNC8LzjMkM0jWIYjhMURTEsn6MZlkU5x3m/yQkq1AlShTwpSLLssoNIdIGWvbpPtVKzSYpZvro1FMVwgiCyPgRBUgQB6tD1QKVa5VCyXtFLoFqtyThLLw3dw7I0J+ZzvJxD8Sw5e5mhpw/9GYYnMYykGdK3ZgTVVGXVzWEMQ2E/bvX1jly/hFA4Hs10Dqa6JrrHesYne9NDQ1OxWKzvGn+eWhxK906O94x1T3SlBjsz0XjY/9OQr4J51uSY9gm/AAAAAElFTkSuQmCC",
          traits: ["悪"],
          baseStats: {
            hp: 1000000,
            ap: 51000,
            dps: 5349.65,
            speed: 13,
            range: 500,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 286,
            foreswing: 35,
            backswing: 34,
            tba: 124
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 51000,
            actualDps: 5349.65,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [17000, 17000, 17000],
                timings: [35, 37, 39]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 501]
            },
            "freeze": {
                chance: 40,
                duration_f: 100,
                duration_s: 3.33
            },
            "immune-waves": {
                enabled: true
            },
            "shield": {
                hp: 50000
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "遺物調査Ⅱ分析",
      baseHp: 900000,
      width: 4400,
      enemyLimit: 10,
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
          treasureId: "1060",
          treasureName: "古びたタマゴ:N003(669)",
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
          enemyId: "388",
          enemyName: "ウルトラメェメェ",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 500,
            ap: 1000,
            dps: 697.67,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 75,
            freq: 43,
            foreswing: 14,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 12000,
            actualDps: 8372.04,
            magnification: "1200%",
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "469",
          enemyName: "スリラーズ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 10000,
            ap: 6500,
            dps: 5131.58,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 38,
            foreswing: 10,
            backswing: 28,
            tba: 10
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 13000,
            actualDps: 10263.16,
            magnification: "200%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 2,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 7826.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "613",
          enemyName: "超天獣ラジャコング",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQECAgIDAwMDAwMEBAQFBQUICAgMDAwQEBAbGxsxMTFUVFRvb2+NjY2urq7dvRHdvRDfvg3evhPgwRvjwyHlxifpyzvHx8fsz0bz2Wbb29vr6un4+Pj///+5+EjUAAAAIHRSTlMAPiQMbo5Sp/7rz7j5/P///zAaCExnhqCy/8vs/////0jcmkMAAARqSURBVFiF7VZrc+o6DCRv4tiSoZRi8OP//8uzchJOkkLa8/HOXM205KW1tFpLPhz+t/+QfXycz6fJzuePf/Q+X65fo12ni+vn6R9ALvfH/Xq5YOVsp9Pl8+vx+Dr/GuAawv1TAp/sfLpcH+Fx+X0G1/sDdr/fbl+32+2e726fP+dQNuUMgaiR/S2bMHD5FQWVoq5Y3M8p/OhXzVcFeRraau/jV1aoWkKv6oEMp0CqXrzr2p8BKuV4aOquNxxiSsmbYeKiHFhVyxDfhaB9Co6N5pCykcoIZW8DommHHwCKgWz2Czz+AqGRFw0Sag41m32AomefZseQJInk1KGoDgrPTasTlbsAtbZxBrA2SRYx9FWtaoXrAF7dMHJV18Urf3q6Y2XjrBMEM7QcOF+CWJa6VIMPXG/dy0HSDi757BgoWcdEpL3pkc6MbcrqUNvkh21RS5XdPDM7HgEQs/coibXWhWdqvVbGB71ls+hBU8R3zqVIEi/FuSIGqoIu/JRacsHbZuPfov4p2PAkELk7rUc5sHcILTHnd8cQXaINh7XGh272B5Ik66OmI15E6x3klbwWBItaeKeqb/4By45M+eQ5AyRjozVCPqgVTKmFPHFmzWBjkDrBL0fgPcLHlbHewIsJxfM21zFLK2jqV/5Vg/IHkGRHluRT+UP4huFB2jpjZmXD9HqXF8pm+hz848RglK0AJU2UEnH46w8lrNPHuo4tQ8TjV55dTIS1w9IrpzYWyi8YLDtRryOGUtwolhDzb4xpY6M+sVCkJwVtL6lZrGaDhbxS9NHFGLa+mT9j0Sa0wZ+ecxD2IVlOkZ2zcI7MhAuo2X5HgP/xCH7AyBRBpxEuaRettlYjRMe9UhpXNoRvGYw0kBNdqYm/Qamm6El1R2oG27Pui0PVNsavvFAfO1UYFGiHXM1SyCUSQndAh+jKnFtVm0VfCAyGEX1+hPL4ILtiu5XWVinzBIgzGwy+vFzLP6feuVZV2XbmBYOyicb6MtB9/6a3Fj0Ggn/lLp65zYB1tKPju95am5caGNkAuc6gyRm27yKQxsJvIQgtRrZsNLp7z2DZv5aA5KC1DZAi5LIzHeqXDI4Ast8gJKf3pqxaru/DGmB8uOtf0MplVREr7zyrVzPpTQZ2dRcNMRl6J6LRutWafhUPyo/unGj3nKHWRSRe3WaNerU34jcAMbfVpzktd3qPhCWAkylAehmEztNhby8qt1jeYlZAPgsANgI87JG4StpB/isiveTg9+pQL9cThBjM8oFGhGGPxap3KwRM+FWHkzqEXSW0elUHjCda5iByDnscTCeFReGw/8MawO13REyrvy1BWBypXwBsDxffeeim015g8bfdok+hsLscihXGBYy36BlnETSyupKT9yhIkTZ9O99tbJBvISL0H8uEWVM7NNR89BZ/u9PORmsHM2ZgTcC5ezg0mAg5IfK/8cdwKBpFGLCsDc6ZfTeQkyMMjmxMuinLH0/8TadUDzsuTMs/PFOqa+Z+8AdP2cnTRr9lyAAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 1855200,
            ap: 12500,
            dps: 23437.5,
            speed: 36,
            range: 200,
            rangeType: "範囲",
            kbLevel: 24,
            money: 4500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1855200,
            actualAp: 12500,
            actualDps: 23437.5,
            magnification: "100%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 250,
                omni_range: [-50, 250]
            },
            "wave": {
                chance: 10,
                level: 2
            },
            "immune-waves": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "0",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
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
            count: "3",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 35,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "613",
          enemyName: "超天獣ラジャコング",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAABAQECAgIDAwMDAwMEBAQFBQUICAgMDAwQEBAbGxsxMTFUVFRvb2+NjY2urq7dvRHdvRDfvg3evhPgwRvjwyHlxifpyzvHx8fsz0bz2Wbb29vr6un4+Pj///+5+EjUAAAAIHRSTlMAPiQMbo5Sp/7rz7j5/P///zAaCExnhqCy/8vs/////0jcmkMAAARqSURBVFiF7VZrc+o6DCRv4tiSoZRi8OP//8uzchJOkkLa8/HOXM205KW1tFpLPhz+t/+QfXycz6fJzuePf/Q+X65fo12ni+vn6R9ALvfH/Xq5YOVsp9Pl8+vx+Dr/GuAawv1TAp/sfLpcH+Fx+X0G1/sDdr/fbl+32+2e726fP+dQNuUMgaiR/S2bMHD5FQWVoq5Y3M8p/OhXzVcFeRraau/jV1aoWkKv6oEMp0CqXrzr2p8BKuV4aOquNxxiSsmbYeKiHFhVyxDfhaB9Co6N5pCykcoIZW8DommHHwCKgWz2Czz+AqGRFw0Sag41m32AomefZseQJInk1KGoDgrPTasTlbsAtbZxBrA2SRYx9FWtaoXrAF7dMHJV18Urf3q6Y2XjrBMEM7QcOF+CWJa6VIMPXG/dy0HSDi757BgoWcdEpL3pkc6MbcrqUNvkh21RS5XdPDM7HgEQs/coibXWhWdqvVbGB71ls+hBU8R3zqVIEi/FuSIGqoIu/JRacsHbZuPfov4p2PAkELk7rUc5sHcILTHnd8cQXaINh7XGh272B5Ik66OmI15E6x3klbwWBItaeKeqb/4By45M+eQ5AyRjozVCPqgVTKmFPHFmzWBjkDrBL0fgPcLHlbHewIsJxfM21zFLK2jqV/5Vg/IHkGRHluRT+UP4huFB2jpjZmXD9HqXF8pm+hz848RglK0AJU2UEnH46w8lrNPHuo4tQ8TjV55dTIS1w9IrpzYWyi8YLDtRryOGUtwolhDzb4xpY6M+sVCkJwVtL6lZrGaDhbxS9NHFGLa+mT9j0Sa0wZ+ecxD2IVlOkZ2zcI7MhAuo2X5HgP/xCH7AyBRBpxEuaRettlYjRMe9UhpXNoRvGYw0kBNdqYm/Qamm6El1R2oG27Pui0PVNsavvFAfO1UYFGiHXM1SyCUSQndAh+jKnFtVm0VfCAyGEX1+hPL4ILtiu5XWVinzBIgzGwy+vFzLP6feuVZV2XbmBYOyicb6MtB9/6a3Fj0Ggn/lLp65zYB1tKPju95am5caGNkAuc6gyRm27yKQxsJvIQgtRrZsNLp7z2DZv5aA5KC1DZAi5LIzHeqXDI4Ast8gJKf3pqxaru/DGmB8uOtf0MplVREr7zyrVzPpTQZ2dRcNMRl6J6LRutWafhUPyo/unGj3nKHWRSRe3WaNerU34jcAMbfVpzktd3qPhCWAkylAehmEztNhby8qt1jeYlZAPgsANgI87JG4StpB/isiveTg9+pQL9cThBjM8oFGhGGPxap3KwRM+FWHkzqEXSW0elUHjCda5iByDnscTCeFReGw/8MawO13REyrvy1BWBypXwBsDxffeeim015g8bfdok+hsLscihXGBYy36BlnETSyupKT9yhIkTZ9O99tbJBvISL0H8uEWVM7NNR89BZ/u9PORmsHM2ZgTcC5ezg0mAg5IfK/8cdwKBpFGLCsDc6ZfTeQkyMMjmxMuinLH0/8TadUDzsuTMs/PFOqa+Z+8AdP2cnTRr9lyAAAAABJRU5ErkJggg==",
          traits: ["天"],
          baseStats: {
            hp: 1855200,
            ap: 12500,
            dps: 23437.5,
            speed: 36,
            range: 200,
            rangeType: "範囲",
            kbLevel: 24,
            money: 4500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 1855200,
            actualAp: 12500,
            actualDps: 23437.5,
            magnification: "100%",
            count: "1",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 250,
                omni_range: [-50, 250]
            },
            "wave": {
                chance: 10,
                level: 2
            },
            "immune-waves": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
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
            count: "2",
            spawnTime: "126.7s",
            spawnTimeFrames: "3,800f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "5",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "021",
          enemyName: "カンバン娘",
          icon: "",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1,
            dps: 0.05,
            speed: 4,
            range: 800,
            rangeType: "単体",
            kbLevel: 10000,
            money: 1,
            freq: 607,
            foreswing: 8,
            backswing: 6,
            tba: 300
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 4,
            actualDps: 0.2,
            magnification: "400%",
            count: "1",
            spawnTime: "900.0s",
            spawnTimeFrames: "27,000f",
            delay: "900.0-900.0s",
            delayFrames: "27,000-27,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1278Data;

