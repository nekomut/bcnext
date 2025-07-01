// Stage 1171 Data
import type { StageData } from '../../app/stage/types';

export const e1171Data: StageData = {
  eventId: 1171,
  eventName: "働き方レボリューション",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 171,
  stages: [
    {
      stageId: 0,
      stageName: "プレミアムフライデー",
      baseHp: 150000,
      width: 3600,
      enemyLimit: 15,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 30000,
            actualAp: 1497,
            actualDps: 1952.61,
            magnification: "100%",
            count: "2",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 480,
            actualAp: 180,
            actualDps: 337.5,
            magnification: "600%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 480,
            actualAp: 180,
            actualDps: 337.5,
            magnification: "600%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "040",
          enemyName: "ナカイくん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgICAgIDAwMDAwMEBAQEBAQEBAQGBgYJCQkLCwsLCwsPDw8REREcHBwfHx8hISEiIiIjIyMlJSUnJycsLCwvLy8wMDAwMDA5OTk/Pz8/Pz9ERERERERFRUVGRkZPT09PT09bW1tcXFxcXFxcXFxra2twcHB2dnZ2dnaBgYGEhISQkJCQkJCdnZ2fn5+np6ezs7O9vb3GxsbOzs7Z2dnh4eHq6ury8vL5+fn////Hu02KAAAAQHRSTlMAB5CfEFzH3xbufLn/Hys2a0tBWZSFxmd2p+n+gI6ZteOl/9Lut/zH1fD//9fs///i6//+7//6/f3+/v7/////x3IX4QAABSRJREFUWIWVV+l6ojAULTN0tLWiiGvdF8QCsgUCgSzv/1Zzo3bqArRzfvT7apKTu517w9NTCdSmUvbzF5rN2uX22uzUbuiY9RtGOFvUmjDCZK1WLytzwqz2Uw3FOOWhUUOwLnigdWa9yh1GLPIaE1ST8qC3xmBF6XJP01zGg+oonAieXRaWm2C4lrHOBR5VEoALIn4NOB71eiWBGKe5OcbgQ2WQlAXw9wOeDixXL7EA83AQclbhoSSYZYJMXJ723cdsKe1ewDNY5RUeno0UdHugZGLRQLtb65kDi8IqE+mskmCEBQ+GebE06X2olDm2+hk7bKko1pUEeiwEHmJqLfP7dEN8wn7Mj9tCUKuSQHO5KD4SHkxS7t76AAQQXxauCsGqCVRIs6BMxP2Q3/kABPnSYhligpqVBE9GyAWATA6sMG+UCzqh5rI4rS6qCdRFKhlYeGQ8vCkFZQZCm4CBnMc1cnrSTMIFF4xxuOgmjLOMuUsggBjWNhXNjKk4gQXXBQMW8BjsEjyu1sIJ7bGbnQIhiHmVCIiB4PI8XtR0lPPW3iIgDAhu9kqdPLBWQZUUYAWPZ/8YpFIBuVUthDuKMIdYxvPP+5oWheDmhzKdl1MYJlBwbOrnEyBFqFJX/+l5aYRhxowT15BnlFkq82J8F8Ar6ENDmwUF3CoZ2iZoIB5rrz8I4QWjOJhpxoEwctCbyiiGCpzr5kddFd7CiBk2R92V79mr5WCb82QycAn+OYHs4Hm42uG8KHLsI7zaxrSund1DmckskITJsuQMbXz4N1vXD9cbNPt7D12qGjIQoSIN1/Wz9waqPvRtj3wSCOps573/yGJ78bFHDoGrk/RMki7+w3zoLDhxkAMCyqabs7558PMAwktiVSAPOQWEL8EXN0j92+EKSltf7ovIlwRf4MytK0O1rXU6nZ6uG6PZwgpTjyEgyMQ1kpJepGnnK421FQDCOMY4yynPbYK9xEM3BIX5mIXn1qjX6YysOGecy3b6uXeT5A6KPHZNUPa80bZx6K7Cgotb8AgzH3xIoY1//ZqbD5mEic6ihIkHoFQQMMHJC1R8Gsbp8fnBiY6FopLzkoAjB/kexOKSC479TePX/etC0Vek5LwkENT3EJTzHp0tyLzp29vb73sbZLcsAZZ+AUNkT+09kU6wyIfzb437YtCC+wCe42Un8DtF9vRt6vjyDup5kuDlXpDyUfEIzpxITgae7B07O4UJQlJmgdLFZQQgPkkAThCWRmQVgg35RhrweicIZVxBkJ8I5F/q4/nITQuKp41W9+H1NkhLz3PmFyc7ckL8D0PRxmvLHGuP3xNKv5xA8ATaYW47tuP477ITqE21TM5Kv8IFUfhRRmyMnCTdVr5Nn04v+NI8QuHYfu57vndc1k5U7VBaSDKHReTtvc17t74XKvO0xATQNqGp4202VV8PX9BDdr7xcjNM8YwhhLcHB2dJVPeFckZzfqSc/ruZIRIu3cV43hlADSRJ2P3mPORnfATVpnmeFBShdGstNE1VFKVPROGljz2khKF7TJyNs5scrMF40Wmql+BkoEk8/v68nMQ03GUHTWsrypfHMOD9NC75dHmEss6PW7x6vrUWaD/w8aH4SwkWePeysVeTjqqqzTNUtW1l0/3+vf/dRFaamj607c3GQ16j1fpzQavVerc3U9v3hnqnXSqDM5qvrcbL1EfIn+6l4K+w91Fk7523l8af39WDVdGeX3+1hqvdrtF4ucPuw9k3/rR+/+rqj8n8C2PlTvzkx8PfAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 4547,
            dps: 3327.07,
            speed: 25,
            range: 300,
            rangeType: "範囲",
            kbLevel: 20,
            money: 800,
            freq: 41,
            foreswing: 20,
            backswing: 21,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 4547,
            actualDps: 3327.07,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "037",
          enemyName: "まゆげどり",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAgICAgICAgIDAwMDAwMDAwMDAwMEBAQFBQUGBgYGBgYGBgYHBwcICAgJCQkJCQkKCgoNDQ0SEhIVFRUZGRkeHh4gICAkJCQkJCQlJSUxMTE0NDQ2NjY5OTlBQUFJSUlLS0tOTk5QUFBYWFhgYGBoaGhxcXF1dXV6enqEhISOjo6Wlpafn5+qqqqysrK4uLi/v7/CwsLFxcXQ0NDa2trg4ODo6Ojy8vL4+Pj+/v7OT5paAAAAQHRSTlMAAwcbJdMPLkc7VGDC/nWBoudpj5m4ytmosf/p177M/tf/9uX//8Hy///9///n////////////////////////kvDnLAAABvdJREFUWIWNV4ly4joQDMdyJ9wQDMER2A8dXsvW5QvD///VGxlybSC7U5VKIXlaM62ekfTw8GHNXrP28FertXuN2zP13mLY+CtCrT0adL9/VWvVa/X+ej3tNls/YNQa7c7zetmp1VqtrzPd4aTTnuyC/WI+7HyEUavsPcRGbzpfHIJNv9sbTr4C9Jf77fN8F4a+v9tOe436Q63eanZ7/cmk34Oo6rWHerM/2uw8zIP1/OV1Pf8K0NlwGTHsW/N2m1Gv2X2arbave7DX7Wo66bYnq/XOg2mMSSjFYfQVoDE7qLzIEyWigPjIXc63e8pjIcFEFB7228HY9TDjsdRZUWThS+dPbqevgcqPZVke80Qw5JJYp0l6sUSFnou5yqr5IokOq94fJAK/vdn2wLhMi/J0KlSIKSBczMgAU5GVp/KY6Tig+9VTu/59i+qN7nCJPGBJ5eX5qAM/UBf/iBBRnE7HJGZAgTvoN/9c/j2K4RohjBGOYbk8viCYCAcpIKoAE+wSupnccbcI3YUvVYCQT+L8VEoMCCbyw/wEAXmuJ7MQrYd3hFxl0X+VikLyOiJMHkvhh1rgIC8zTgIRU6pSvGj/oNTmM9c0zIDownASpkXkR4xlhaBMALlZSFS06dwHgABUyLKjZCTUucS+SIA1aQLCRWhDyoNA7oY3NuBqjelvhWUp0OPjo6dL6aKQOV5EqFae8/iI4hKm2eo+B+1VHJM89x+tsSLDsCGO63rmGFZDXpazWGy69wFeJKdH416/LkC4LhgprpiuPoZc73t3SbAApEgvAH5eMMaQhxDJC3IBMMeAmx8AmishcFZQ+7HDj5nvYplyx0vL2LFjEAoVZte/C9B4jhIclwlxHRc2X7iuPJ1z7MRlEbqOQwxIy0h3epfF1oyknKZlroQuTinxvPR8PoYOTkCJQmZlBiIJnGX/3kY2526cMmagHE+lYUyxGGoAKpHqox1KGE2lT9HgjhihqaKLbKQCNhmkTotzgkUa4OuQSUHO0W56u5yaKz9m8LkICAbp56dzSuSR0+JUSDvERJbCfGLC23KuT9ZRIpnPkyxLs6I8Q/4BE0SczudTAUNZKiiOTZqqw+wWj80VhRakOcZRCimD/7mUCNG0sJbDjO8xYWybi197N3jsbCLb/owIMDTPKAaLAuT4zBolBGMa6UuX1IcbLNQnO3npoEZyBj0UfAgNo8oYghYtzXuTDW5UVGtK3ppomujIC0Sa58Wx2tI88uM358qibfs7wIxVKyTVlzr0PFnxYLnkfnAFv8LcKsnWc5BcMrggxF50PJ0tRpn6TF09E1P9k6+dbwCNVXiZ45dmrpkfSIAoDYhDXv1NHFURyn3vLgCsfFlLBr4fq1QRn8Zv9GlyyfMnAAlKuuYiGRwz0OH1O4HKv350A+CNA4UDA0wmwFeipYiF+sS/uIZ3i4PWiJlqXUYUEAleWkp7wCqpAKOKKgk9ed2FGwBvOuC+kFyAK5wG0JEMZyw0iRBGKc3wJZ3oxjbWnw7qjcXY93wBbLgeHG0hdHcDccVQoZjpixLnzW8Atd5eVOkRh0rmIFG5qjSBpghxBAh7PHJRxYGhoxsdobutJgVyiBKeD8kqarMSmAOr3EVcc+SwpCqm4Q2A5qraBulB59Wx3TvgD1yNsnlLAmpWHPFqkf2tcm4ND7raxrDawz8s0bpC57Ye+I1asiS8xjY80ME39w8dVJ/Q2c2m2HymxhJE1NuqaaWoDzPcEzB6uyHZrrwHfMMQN1eAJL1IyhipLZ70rZA0Gd05Wpqzg4QUHu0OJImEnmYE9DajOSeRxQkdODhMuL0dgL0ivVBtmIMtAITrMx0hxIz0EOjKDrlIJNH+6e4tq97bhEZ4QVUUMXLgB3K4UZ4LYoag7JTYTX94E7Se9pGmXiVJzVAMhEPWmhEbE8jRE/Kw+umWBbecfRRDwJZ7JUBGEk6CRFUlDUIMJH3p3L8jWRqa0z0PXS/+LgXF4P5MX+4R+IEw24fosar792PA/qnAcRi9uwGfENqzPRovD1y+d7LEaMnxcunuBn/3tzEMl4un57VPA3gwgEUhhSfEeDgaz3/O/x2h0e83uwsaeutXa9vFmMZ01e5Muv/k/1C9tRqzMAvnnba1ziDO2bD16fn1DwbFnYXXa0BzFSX7yb+uXkXQ6k5eDiYY9OARCRktuN6t+t2fXpRfrN4e/vc7VoU4bJ+a8GODZaHi3/89/cPLuAbPxVZ3tCb6WKQRccez/miMaJwdjxKvZ+1Wq17/6WXbaveehrP5+NGD5wWy19PxcmzvrYgJuMSP57PpU7/buEtHvTOd/xpXHpcL82dzq+vu+NdgNLl7VbURTIbT2Wg+GAwWi8Wvd4Mfg8F8NJoNbQSfk/gfgmmYBiwmlAwAAAAASUVORK5CYII=",
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
            actualHp: 30000,
            actualAp: 9000,
            actualDps: 2327.58,
            magnification: "300%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "426",
          enemyName: "パワハラッコ部長",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 160000,
            ap: 2300,
            dps: 2555.56,
            speed: 10,
            range: 380,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 27,
            foreswing: 14,
            backswing: 9,
            tba: 7
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 2300,
            actualDps: 2555.56,
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
    },
    {
      stageId: 1,
      stageName: "超高度プロフェッショナル",
      baseHp: 250000,
      width: 5000,
      enemyLimit: 15,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "45",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "062",
          enemyName: "ペ課長",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1200,
            dps: 1894.74,
            speed: 11,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 19,
            foreswing: 6,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3600,
            actualDps: 5684.22,
            magnification: "300%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
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
            actualHp: 800000,
            actualAp: 9674,
            actualDps: 26383.64,
            magnification: "200%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "426",
          enemyName: "パワハラッコ部長",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 160000,
            ap: 2300,
            dps: 2555.56,
            speed: 10,
            range: 380,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 27,
            foreswing: 14,
            backswing: 9,
            tba: 7
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 3450,
            actualDps: 3833.34,
            magnification: "150%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "ハイパーコアタイム",
      baseHp: 350000,
      width: 5000,
      enemyLimit: 15,
      requiredCost: 210,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "5",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "60",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "022",
          enemyName: "ガガガガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgIDAwMFBQUFBQUHBwcICAgJCQkKCgoKCgoODg4PDw8VFRUWFhYcHBweHh4eHh4jIyMjIyMoKCgsLCwuLi4vLy8yMjIyMjIzMzM1NTU6OjpCQkJISEhLS0tMTExXV1dYWFhcXFxiYmJlZWVtbW1tbW1ycnJzc3N7e3uBgYGHh4eLi4uNjY2VlZWampqjo6Oqqqqrq6u1tbW/v7/Dw8PQ0NDX19fg4ODq6urz8/P7+/v///8F0x8XAAAAQHRSTlMACBCL/z5KVh0nZS53/xQ3Qf+GqUph/1R3aZe9pv7jj//xo9ux//L/xObT/uD/8P/h/u7/8v//9f7/////////YcASAgAAA+pJREFUWIXtl29vqkoQxoWDrYqotJVqLbpFKB6XdV2BdWH/8P2/1R28Nyc5SdNCc192YuKLZn4+s/PM7HYw+Cjs4WIxtj/8U7ewH7PzMV4tRtZ3Ceur0UpcjtF6/i0hthvLxjSNltdztOgvw1q9TjPdEprG1Of17Aadr9ejroD4mm0JELTWptHF2hpYi+gsTovOAKUFk5olKMlVo7O5tT7XRh06K4gUaDe55ziOl6qmjpZn3TTXdcf8gbWroXoZOijHvpcbc9nnpNbHcVfAYFkAgHuQq4mT6KZOAo/IqHs7JhgUC88hGgBINxqHCFerzvn2BkMNCjk+TnwHGyNynLLrc3dALKF9TYXgEJ1ANIrwEPEeAGtX3TwkSRggbhqRcFTmPQCDp8KYxvBcSqmMMSQsmaB9AKNDawTioRK+G50EJSNYdD/EwWB1hUThO34qW0P4JUNpL0ArwegUzjDVAPJzEqTdjQhhvbZeZADwuQFHMQyAHmfwn5lzz0+IAIBDsIeKpx6AwdMF2pD7eesHAGDmhZdegBmsJI2QklWtYCoT4QeXHiXY7vNLbmQY1okfhIHjoCrwOwOs8TrOCiFl4vn85mbHCSvks44Ae7q/gv20JB7kYVgpbS8E9k/dzsBencACMk9CmGBhSkhHyPFKEnTbiNbqots59DxcKZiEKvAcJAIAhNkcNrP71VJZwPLTIDxgqsIgAoGCoCIASI7j2e58/ELGrXuwB0OhGfy2c/t4XAR5SiJ7Vcjz/dOniOfCNDIISGW4365kTEJgMIkIwsun8yVexUX2Sb4dwfBpymEH0CQJfWiDpLDUKMbJ+zTO1uPdtT5+AnAzrWoJ6XAfabhdSQhrFVycaybk6X1nP19O0WcljKNjvKHa3AIQuialhn0oFVUqZ/vJ4bj8/La2R/b4Zf/7BJEdD78vSmKS50RLpgn4InhbdbgbrPHw7v7+zh2Nho+4pFhLqkFBQjnCOJp9DfgT82hPVc2MItrkNUlLRMuiz2aNa86bKgeAbATlKcI573O/LQvDRQMKNG3dRWkpaKUPnWtwN3UDAEWhkcIYzjijpe4OmMUYhPOm/fmawoCUhLJKic4lPBesbvWbksPdKGBDKsnT/YvbMd/ayTaTqkZSZWrCajBn9jLufIRWXAt4lLCyrV4ZSZOyLnY93ozWMo4fdofD5sTLJC1LglK26frG+pdgW5Zlz9w9IzlTjAnC+tyNf2J+5rnC5ds73b51fSX+FW7GMd9uHzf7133XBvwV1nIbbjePDw+vk4fvPd2t5ebX43DoutZ3n/62Oxp++9+Gn/iJn/g/YnQ3mUynv24xnU7uP57JfwBG47Z/ChBmWwAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 5000,
            ap: 350,
            dps: 119.32,
            speed: 20,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1800,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 3500,
            actualDps: 1193.2,
            magnification: "1000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "124",
          enemyName: "ブラッコ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 175000,
            ap: 6497,
            dps: 8474.35,
            speed: 9,
            range: 190,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 262500,
            actualAp: 9745,
            actualDps: 12711.52,
            magnification: "150%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "288",
          enemyName: "ジャッキー・ペンZ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 42000,
            ap: 8000,
            dps: 8888.89,
            speed: 9,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 27,
            foreswing: 16,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 42000,
            actualAp: 8000,
            actualDps: 8888.89,
            magnification: "100%",
            count: "3",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "062",
          enemyName: "ペ課長",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1200,
            dps: 1894.74,
            speed: 11,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 19,
            foreswing: 6,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 6000,
            actualDps: 9473.7,
            magnification: "500%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "426",
          enemyName: "パワハラッコ部長",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 160000,
            ap: 2300,
            dps: 2555.56,
            speed: 10,
            range: 380,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 27,
            foreswing: 14,
            backswing: 9,
            tba: 7
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 4600,
            actualDps: 5111.12,
            magnification: "200%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 3,
      stageName: "アンリミテッド育児休暇",
      baseHp: 400000,
      width: 5500,
      enemyLimit: 15,
      requiredCost: 250,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "10",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "75",
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
            actualHp: 40000,
            actualAp: 12000,
            actualDps: 3103.44,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 500,
            actualDps: 365.9,
            magnification: "1000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
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
            actualHp: 40000,
            actualAp: 12000,
            actualDps: 3103.44,
            magnification: "400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 899991,
            actualAp: 20250,
            actualDps: 19596.78,
            magnification: "900%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "426",
          enemyName: "パワハラッコ部長",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 160000,
            ap: 2300,
            dps: 2555.56,
            speed: 10,
            range: 380,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 27,
            foreswing: 14,
            backswing: 9,
            tba: 7
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 5750,
            actualDps: 6388.9,
            magnification: "250%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 50,
            actualAp: 5,
            actualDps: 3.66,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 4,
      stageName: "徹夜で働き方改革",
      baseHp: 450000,
      width: 3600,
      enemyLimit: 15,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "30",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "018",
          enemyName: "カオル君",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEDAwMDAwMFBQUGBgYGBgYGBgYHBwcICAgJCQkNDQ0ODg4YGBgZGRkcHBwhISEiIiIpKSkpKSkqKiovLy8wMDA2NjY2NjY8PDxAQEBISEhKSkpNTU1YWFhcXFxeXl5gYGBjY2NpaWlxcXF4eHh+fn6GhoaIiIiSkpKUlJSXl5eioqKqqqqurq6xsbG5ubnDw8PLy8vV1dXb29vg4ODl5eXp6enw8PD29vb8/Pz///8HFoUmAAAAQHRSTlMAAwkRq1pwkk8ZQIKjIys3Z7NO/lyRbdz/xqkZgpXr/6zLvv/y48v+1f7f7P700////dP//v7//v//////////NISuswAABAhJREFUWIXtV2t7ojwQ9fK2W2qVbtde1kKx0orYuMDmBiEZ//+/2iBFUYLa/bCf3mm/wJM5njk5MwmdTmt0Lfvq9vbW7rUvac/tWfbYmS0/VqvVwrW7X8zuj8bufJmwHADWIOniwfoCRG/0MF0mXMK6CsiT6V3/3HTbWRCh1vuh0tX0PCmGzpLKtSGALZzRyTq69pQoMOXrkGThDI9DdO05a0vfQODZ+KgUwxk/kl5IIVau1Z7fu0+O/X4pBZ4MWwGu3/NT+ZoEnrZx6N3jdgI1UxCnZT9Hr0cIgNrujlzeGfO7t6sjCkCepVwoKJYw10ihP2FHiweVEkyo9qhajIwVvJyUEHKCuVwDdU1usN8NHjx8A6A0gPq4MzjyziBBm62zmcEMY9JcmDf6CgRN9YhIxk0KjkHD7KCtleAkDKgA7p4FADzdUwEEY6lGiAQ37KSRQbJXQ05opiDFiFHnvBJkRPce84IPIZnA9+0MIE+3Ew3iurKf1ZBQSjRpOqEEgDUNURjxTwhSHxC6H6R2dOSJ3GtnIEMic4IiVkAAq2mQUZylFIUokjIYtGpAkSA0l4kfFwi12a7SNNXNpDYNRQ274JZsYxw/+UEiaCj2S98LMWtOlZKBQjT0SeJ5cVYlHrqpVLdpxQfyCYAirLj3lFaLOTVwyKaNbbCXG9kinLAoVaG/rUDFGmEPQz/A6uGQQs/ZjMQMESlYEsS7TswxrhsSNg/54vqQgjUtuALxqYijwAuSrZ1UjGv5rJy9fNaQcTQXxWrkERqhwPN2LuRoJ2Qe0E0RatkA6Dob58vYC1kSYbI75mS8q0H4FHjMFJ02AKqhBNTzuZYA8gqh7kjQhsRR9OEaJutoUTIF7nthzIhfnTRQn2361gIqm9vN/E5/Wm1+Gjz90H9+1nTAZsAnUTAxMOiOV6paw2mMIq8xJ3VhGcZxFKG3CxMFl9QOQUVCpPaS9b+kSYwCP/AfjafLUN9QdhlKoLQOAMV+oFDLI2T2YT4hh+4qrzUgrY00IHKdx2FEy83hrhGg039YkN0UUDUPQyIgCYv6E5zExOSDUsmRvucZOlgbINNjlTGCvB86Hs0lFNEbuR+ZqYU/rQk8IW83R6+NvTvTdU0xXhkq/dl+Uyrr0BdGw1ktq9LY5OS1dWhC2LZHZpiJTQTclLLqKlgNTt+ch5OQN0iIz+7IXk9T6Ay/vcRiCwF7NZjmejP6F99fEOZZLlVxntRbOjGcbYboWleD7z9fX+fvb28hitl2SrKZsZWMGH3Lsob21dXl4OYxYHLzDUSmX/2KKpC6vevBZP7r9+9fc+eEjY7SeX5+tv7mO/D/+Oeh97yMfi3KN90zHGRdXA4Gg286bv7bxU3xQr+/vDhooz/jnNeLeV9L2QAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2000,
            dps: 219.78,
            speed: 1,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 4000,
            freq: 273,
            foreswing: 34,
            backswing: 10,
            tba: 120
          },
          stageStats: {
            actualHp: 1199988,
            actualAp: 24000,
            actualDps: 2637.36,
            magnification: "1200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "062",
          enemyName: "ペ課長",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgIDAwMDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUHBwcHBwcPDw8ZGRkbGxsdHR0dHR0hISEpKSkpKSkrKyswMDA1NTVAQEBFRUVKSkpRUVFZWVljY2NqampycnJ6enqEhISOjo6ZmZmjo6Opqamurq6ysrK5ubnDw8POzs7b29vm5ubt7e309PT7+/v///////82N9agAAAAQHRSTlMABw0lNxkvQU/O+WFpiNn/cX6XucLkWaDup6//vdjH9v8G4//w///y/////////////////////////////wD/mjFtRgAABwZJREFUWIWll2t7ojoQgFcQxQvWuyi2ckqJSYBAuCOw/v9/dSYobbfing9n1j7PBpg3k7kl+fX7f8qv37/+W6SBut1uVXUoSz9f/R3Qg58kyaq2mm02m9lovV+ocq+lKr3/APT6Q0WeLPermf7Sij7aT5Tb2+1C+QugJw8UZbGaL2djUDNevmQ802TxwXC1kv8CkKar3XSvb3RQNpCLviHGGw2mHuz0kdqXn1ugjsa63sxuUR5y124RhmnMppKi6S/6ajXpPfWB+EKISfwwTpKIe8Q2jQZon1bD6axZzUR5asFgsbkBnDBpJA4D36PIMi2M3g+jcePS9eIZQLl5TxBYlLQShzwQQsb3l/rhKUBrQ2dYfpzEyRckiTk27jFdDp8CFidk3gAGYmH8TT30aeOM8WypKs+c2FPfHM4geAaIaVLG43YRjApnGmD9VqTiE4C8O/M4DhzTMC3LMCxEfUGIY+5SxxZU4zRv6uIJQH1lcZxEro1YxMwXk2IcCELoulHqmS+GbZ/28nOAtDhzmM/HLM0DG+y1PULgScScOAYPWG7g2zP1eTENDg7EjlM3LTJOwZkG9pAbJZywABkmCSKw7qQ9L6btq8OjmGGeZcLrEDWDEBREjPjIsL0QlpcE9nrwDCBBDDH1qJNmKQBC7tmGiWzXp+BBCokkUivEG+HGToC8J8yl2HKFfoC9KAqoZVk2sinzw5CiAAAROe2UJ4DB0Y0h9bFwRMxsJ4rjKHAs5GAK+RB5mAsLiHl4BhhCEEHVpaKOQl8kURwzC2GEHBiETVYFGL3J3YDe5ENMEfskiD9zOHJMxAIfYz9KxNPYw85bvxugaOeoyRrqhm0Zxb6NwrIqEwd5ECBwDXHZK2RCJ2BH4psSYWHSIKIA27y8Xq91wTB2gjCgDg/eJ90AGXzYTAt1d5sO6go3+tdrVQAXEwzO4O/TbkC/8WGz8MChLmPQzZy0vFZ5ea2zrCpzH9suAD4WnYCe+h58tSDfsUwT+UV9vV6CvK7TtKrrMvUwZPVZ6wRIi4/gs4tBAWOTxpeqLMsiy4siz9KsyS+CyMdS6gIo+xP2uGhCYiGcIpZBSTHXdagQ0gi2bdM01/0uwGBtYxsRL2gYruWBLzFxmB8EnIcRGAAmuNBqTOu06Gppw1dEKUY2dCEeRS4UAfHj4lKWVVWLf3VVZh50dxujk9YFkFemjTChgBDzMmr5BajV4MZaaOcRQyZ8gixjpHYBJE1H2Ibaw5D7kDUuRm6Y5Tl4sMijQOxQQt3GVJRjJ+Aj4GIXwsIQLBZjCxpuBqAJbISgUQf2oXNzVQ5UlEIEu5DvEqEoLKEeY8z3fRewSCRznHBrpHYB+m9tIiaiKzBHQBBxgyTPQxdMdxhvio1b+rzDB73JVyLeIJCOYAlY7YH3EEtFMiUNwFh27M497Rx+qadJBiGoijQgoqnZFrtAKMo8BQS3rcPgEaDs2w1dTJPml7qpwtK3MCGURCKcVyCIvozeOjZXeeU0K0xSMUtW3vSvdQqOJMTJm3FdZqLH0PftI2DY+jCDWdL7/CAXHyJos/LOK9LYQ+xj+ghQX/3b/HkYxHnZ6l/rCBICtYDrJYtczM/zR8D2BkiyjHrfDKhrLrLhvoRrXeWRQyOiPQWkBcdBXn0CriVDopiT1idFRN2ELh8AbRrkOUxQfOlfL9DHHQeH9f1ZEWE/o7tHwLQBZAVH/rcVgILbAHjVjjnmufN4yLoB0jzFTph+uRAUnB+AAKeFu3qyhCxnsIP+CXCJAATts4Kh54C0SGFP/gHwBID4l0+LTJZ7jwCIApRd4dmwPXYBvKId080H99adiQQe/DjBsSy9PAJofh/n5+X+jDssgFTOo/NyBTXZAcAkv+dV9L4dHk8dURiusXdeDibvfvxHGC8MokAxu0Or4NiXJqOHRFLU5eZFdNvBioQN4PYDjRTsxzS7My8OdFRp/q0W/vmn15P62kHbw+Vq3pPAhKQQ3bysbpQqoYhEYlDDLzvP4Zgoyy1AGmy3k8l0NdtPFrv5bjlQxGk3g88rzvOmKcCWyqLLpcjTvIKnb8NG8Q5QJquNDjIe6zMwYDbaaUM4b8ewhopjcWmJIjju+U23J3BUKJyl8gXoyVp7vWhuVfD/sa4p83cox2udn0f749vb2/F4OOx3y+NHACtLxeGiBUjD3eblp8ApEo6L0aUGY7dyfzjs9wcDWZaV4dHN65IdB79agDJd6+Je8Ye+vh+IS4ObVcV5ofwRZ/UIB9DzXPoEqOvx7WYi/oz2ctmX4M6rwSKCN1VWvos8WZ/xsd/7BMif1yO4E8LtAtR3k+F2ri33a91y7c3oS9br9eqwGun6ajr49EFveLi/hhv26+tmtlMVqT/Vlrv9YT2DK/dPwGG/3y/n/dsafv8L4sTYpWGVkigAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1200,
            dps: 1894.74,
            speed: 11,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 19,
            foreswing: 6,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 7200,
            actualDps: 11368.44,
            magnification: "600%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "062",
          enemyName: "ペ課長",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1200,
            dps: 1894.74,
            speed: 11,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 19,
            foreswing: 6,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 7200,
            actualDps: 11368.44,
            magnification: "600%",
            count: "8",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "10.0-12.0s",
            delayFrames: "300-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 6000,
            actualDps: 8181.84,
            magnification: "1200%",
            count: "2",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "426",
          enemyName: "パワハラッコ部長",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 160000,
            ap: 2300,
            dps: 2555.56,
            speed: 10,
            range: 380,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 27,
            foreswing: 14,
            backswing: 9,
            tba: 7
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 6900,
            actualDps: 7666.68,
            magnification: "300%",
            count: "3",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1171Data;

