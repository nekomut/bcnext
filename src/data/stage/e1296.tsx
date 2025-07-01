// Stage 1296 Data
import type { StageData } from '../../app/stage/types';

export const e1296Data: StageData = {
  eventId: 1296,
  eventName: "絶・奈落門",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 296,
  stages: [
    {
      stageId: 0,
      stageName: "獄楽穢土 超極ムズ",
      baseHp: 1200000,
      width: 5800,
      enemyLimit: 8,
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
          enemyId: "491",
          enemyName: "阿亀我王",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 2600000,
            ap: 24000,
            dps: 11428.57,
            speed: 3,
            range: 320,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 63,
            foreswing: 24,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 2600000,
            actualAp: 24000,
            actualDps: 11428.57,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
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
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "29.3-32.0s",
            delayFrames: "880-960f",
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
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "58.7-60.0s",
            delayFrames: "1,760-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "500%",
            count: "3",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "5.3-8.0s",
            delayFrames: "160-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            count: "3",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "500%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "1.0-3.3s",
            delayFrames: "30-100f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            count: "3",
            spawnTime: "193.3s",
            spawnTimeFrames: "5,800f",
            delay: "3.3-6.0s",
            delayFrames: "100-180f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "118",
          enemyName: "赤毛のにょろ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 12000,
            ap: 1800,
            dps: 3375.0,
            speed: 22,
            range: 120,
            rangeType: "単体",
            kbLevel: 5,
            money: 130,
            freq: 16,
            foreswing: 10,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "500%",
            count: "5",
            spawnTime: "253.3s",
            spawnTimeFrames: "7,600f",
            delay: "6.7-9.3s",
            delayFrames: "200-280f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "冥土喫茶OKAME 超極ムズ",
      baseHp: 1500000,
      width: 6200,
      enemyLimit: 30,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10522",
          treasureName: "ネコナーガへの進化権(ネコメデューサの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "491",
          enemyName: "阿亀我王",
          icon: "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",
          traits: ["赤", "黒"],
          baseStats: {
            hp: 2600000,
            ap: 24000,
            dps: 11428.57,
            speed: 3,
            range: 320,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4500,
            freq: 63,
            foreswing: 24,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 2600000,
            actualAp: 24000,
            actualDps: 11428.57,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
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
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "53.7s",
            spawnTimeFrames: "1,610f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "80.3s",
            spawnTimeFrames: "2,410f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "3",
            spawnTime: "80.7s",
            spawnTimeFrames: "2,420f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "4",
            spawnTime: "110.0s",
            spawnTimeFrames: "3,300f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "4",
            spawnTime: "110.3s",
            spawnTimeFrames: "3,310f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "4",
            spawnTime: "110.7s",
            spawnTimeFrames: "3,320f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "5",
            spawnTime: "143.3s",
            spawnTimeFrames: "4,300f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "5",
            spawnTime: "143.7s",
            spawnTimeFrames: "4,310f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "5",
            spawnTime: "144.0s",
            spawnTimeFrames: "4,320f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "584",
          enemyName: "シスターデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEHCQsKDhEPFx0THiYXJS8bKzceMj8jO0ooQlUsSV0wUGU4X3lBbYtFdZVLf6JOhapSirBYl8FcncleoMxfoc5gpNJip9ZlrN1psuNrtuhsuOxuu/Bwv/R0xfx4zf+A2f+H5v////8t4L7ZAAAAQHRSTlMABA4WHCMrMThFU1piaXB9iZOcp7G6xtDZ4+nw+v////////////////////////////////////////////8ArF8e9wAAA8RJREFUWIXtltmaojAQRgFxbVsENxQrIIuCCwKiQFDn/d9qwtaLPXaHue7/ii9aJ5VKLWH+vIn5JE5sMg8aDqqvPx+sngC4BXCPAAEEeoAMo0d7hgPo0wIkQMJXwBKgSQdog6pOvgB4pMKUDjABZC4rs26vW+w7XBkAHRoADwCb1Zh8NYczyCSLLaYHFgFINIAeAFo5aNoTADRzY2+sFcAEdAcBzGgAr2RPdb3TAVa7c5zgJD7vyeaOSdaXHCWAHGJvaBccBr7vByGOHFCNbJkG0MsBYOkG9iuF1x1oGsCcpQxidgqw3wG+f3UAUQaRXGMh7xy8A0JMQgktKkDuAoIt9j544CUHAJEukZh+Rljjk/9RYbRSGEoAqTzVicLgE8DH9pKnBfDg3EL/QckWXmgBPdgmj/Z+vCvrmQLQBQd/AdTxgFtuvgKwU9wiDYCRtfNDDIMgNhfUt0B60jH2PjsQHYs8pAE0Oy20Tj95cPLT9YKjAfCDkaz0iQu71HvPpMBLXZhRALoSaZ1561PQMSWGhTmJoK+SbjBkvwc0RghlWawMOIadITe9lA5c0qOaF8i88x2gp2gaKgpxMR6MAGwP4+gSYRzYZYnr0HsOGKC1VdqXQmA4+8PesdRqRVur7WcAAbTyjwhVHFOtSKAWi4aOGv8GDEnspNFknjta2mnXi7vb7kIn+yYtcSkJ4gTkJ4CXvFbZzgSZZunAztVCHEfXLAKqpcr5P1r9764x0xQtF0ru+FXP2xomAEWpJuPPmdh8abBcU0DgxmAmWQ7YgKZMu8tQAgoJYN9NOMRZHdugF1OxBmAM1n0LZl7UiQN7XWnUAXRksG5HQOElKADHC8gsNYCVyCS8uwDHxCt7mXHbF4OVBsDOQD/dyN275WC4HMgl3vdVO/gR0FEt7OkInGthH5yPoKjr9O3R8ROgsdR0pCzIuct+cDrrwz5J5xElgGmPJwI/N5KqJQWJNWPaosDSAjL1yWg8VV2R9GP+w280AHa5Sk5uUPhwitxyItADRDjctk5UNnQvXI3qAZpg3kLjcM5cCPxwH9sKWwfAzs3rWdNisvclDvxo4x5r1QI/gw3JIyMKvGTvJCdsrVJTqAHI3hezVxF5ZxySh8o1tcG053WO0Gjx2YTe3j1NmZKMNMfi21Od8hayQCCLvIq6zJS01j7T7LfrArIH5zzrQuPycVYbwIzE4u4GEvN/gGf6BfwCKACNVvdFGIqSNMolSeJQ6HfbPEsHaMnwTBIVgOsK0ngyncnzhVJoMZfl6XQsCf8a738BQuz8D8JGxJMAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 300,
            ap: 1250,
            dps: 1339.29,
            speed: 40,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 28,
            foreswing: 9,
            backswing: 10,
            tba: 10
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 5000,
            actualDps: 5357.16,
            magnification: "400%",
            count: "0",
            spawnTime: "180.0s",
            spawnTimeFrames: "5,400f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1296Data;

