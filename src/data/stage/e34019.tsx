// Stage 34019 Data
import type { StageData } from '../../app/stage/types';

export const e34019Data: StageData = {
  eventId: 34019,
  eventName: "万物誘う真理の大渦",
  typeId: 34,
  typeName: "レジェンドストーリー0",
  prefix: "ND",
  mapId: 19,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "終生の知的探求",
      baseHp: 1000000,
      width: 3500,
      enemyLimit: 10,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "679",
          enemyName: "名賢わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 10000,
            dps: 8571.43,
            speed: 18,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 250,
            freq: 35,
            foreswing: 6,
            backswing: 12,
            tba: 15
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 10000,
            actualDps: 8571.43,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 35,
                duration_f: 90,
                duration_s: 3.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "713",
          enemyName: "ふくろう博士",
          icon: "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",
          traits: ["浮", "黒"],
          baseStats: {
            hp: 200000,
            ap: 42000,
            dps: 8811.19,
            speed: 20,
            range: 360,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 143,
            foreswing: 44,
            backswing: 72,
            tba: 50
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 42000,
            actualDps: 8811.19,
            magnification: "100%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-300, 440]
            },
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "547",
          enemyName: "マーさん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMFBQUWFhYdHR0jIyMyMjJAQEBFRUVUVFRiYmJtbW13d3eDg4OTk5Oqqqq8vLzHx8fY2Njm5uby8vL////////lxocaAAAAIHRSTlMAEixFVHxm6s7/mbb72f/81f////////////////8A/yQJDgsAAASwSURBVFiFlZeLcusqDEX9tsE2KmDe5vD/f3kFdtL03MbxYTqZtB2WhbS1has/j1X9XO3QUzqvAGtf/W/9+V7V74B+lcp6HxIuM/8zoJ5Melkb/UdAPbq8D5jFxwsu5EL75l8Ax34vLBOSGx9j9EbM7W0AtSVwJ1JcyPMcQdCbgEacOwA/BPO/peISMO3nBs7yLv6dTEXrG4BOPTcIMDbEFNWjJoZ/revwATC+1M8SgvlwhITHXzChyzWg1UF/E0TeuQOPj/0bHqq5BEyJf58hiph+LM9MMt0VoFURXjaI8BMQCCQ/XAHGXP4XgPsJiB4T2V4AUENavgLsudE9QxnbiyR2uFk+c4h6EOcvMC1nKQO90sHy8tCSALkd5Ww7B7wE4a4Ac5ateGqX+6SOhEDVGhh5DkIObwE1zfHGZ80zyhQhx6kaSPslJ27V/F7KYzlv4OERApbAFUCYq6avxqlqhu6iF2jZaMVehGBMBuwlHltc8dVSfs9BTmHSIoncjoss6SyZM0P11/od0OZ4N3nIj9skzFkTewDqYbgGVH2WgToBroigqCJHUA8zU/DJD3rYmDsBPgnsqqJL3eJ/TChfPhhK06IfZUDEw0vcbPOx/LQeOnT9JwCKKZUkBkw/5hO9IJfBH9rYxfAZsKL95tKLdKho+R4xZu1umCr2ewbkjxK+eBh7gJcZ+R5Qc5TSCfAZYMlhMHY8hdT2fX0BwKFgcuKzrRQZBilYcEadM6GdhNH0ytL0UbniS7x0526YYLTNEmimLZcY6veAziS1lZZ4WAOqYU9mVKypBjh8ydH3AOrSll3Z5jAOGeZMYFfutENoCGiLCd4DppjFnI5ElMNEQFlozOSCk85tu8EefQ/AIhw+WPaWOiaxuXUJZVjszOIhzNS9BfS5g80jgjyfo8QBSelu7G7DtmWN9hc6YEcjnwB0A8s4nkCOMmyK6w0H7dRcCGlyRyM/AILxY7IwEi3XPrlTze8AVGLbQK6+Ln4uHpcDBsmCw/ta/UHKLV3XfIykStLsOaU4lc7ZZJ9XlPdlxEIU7R8RRFLCUUNDCGNhvdFMRyURkCMIizJMejNWnTVyY8MtQCMfEeh8T9wVn2oculiL8U475xtCMY9FiEWlXAOBdZsZF+qWH5R2KhF47/kCftdT0QdX0NwD9GU6m2yMnHMCBB/cCrysifoe4JhwjqiUSQ4EWjllYF9qcA2Yyz0zEI0XKhV3iZHXJBjC5puAtUgnglgWsgAxsqoGjCYaehNQRuwO2x6cBrxnfmUmyD3cBMx4cq/h1DDKAbAuRrDl1dWvbJ1sAjhap7WbC1Eya+mElw5lyXAvgrppidfWEayg4MRxaZNh6tDTrRxUFRGEiQ3kQoQThGzYFwsEWd0F1MAUhq+TVRgDEKaVlUZ+3QZUXxh10ESCtJZvFji4YH9U8dM7kxSScM2MjdvCuTJCGIDuPqDhAHpPLjAikmNRg42e1PcBFUUzQBETtueZxGHBW8vrS9/nN9c1pA34EjyeH+cB3/Vf766fANUsZbajxHHaK8bk3+++l4CmadtuJmDUYjUEI4CMQ1ld2zb1Z0BH5wnXiIs8f/Iap2k+36FfAP8Bs7k8dFUnp4MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1250000,
            ap: 16000,
            dps: 6233.77,
            speed: 4,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 77,
            foreswing: 6,
            backswing: 11,
            tba: 36
          },
          stageStats: {
            actualHp: 1250000,
            actualAp: 16000,
            actualDps: 6233.77,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 3
            }
          }
        },
        {
          enemyId: "713",
          enemyName: "ふくろう博士",
          icon: "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",
          traits: ["浮", "黒"],
          baseStats: {
            hp: 200000,
            ap: 42000,
            dps: 8811.19,
            speed: 20,
            range: 360,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 143,
            foreswing: 44,
            backswing: 72,
            tba: 50
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 42000,
            actualDps: 8811.19,
            magnification: "100%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "73.3-73.3s",
            delayFrames: "2,200-2,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-300, 440]
            },
            "freeze": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "680",
          enemyName: "天使メガミエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 650000,
            ap: 5500,
            dps: 1269.23,
            speed: 8,
            range: 320,
            rangeType: "範囲",
            kbLevel: 6,
            money: 750,
            freq: 130,
            foreswing: 11,
            backswing: 9,
            tba: 60
          },
          stageStats: {
            actualHp: 650000,
            actualAp: 5500,
            actualDps: 1269.23,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 420,
                ld_range: [420, 770]
            },
            "slow": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            },
            "sage": {
                enabled: true
            }
          }
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
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "547",
          enemyName: "マーさん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMFBQUWFhYdHR0jIyMyMjJAQEBFRUVUVFRiYmJtbW13d3eDg4OTk5Oqqqq8vLzHx8fY2Njm5uby8vL////////lxocaAAAAIHRSTlMAEixFVHxm6s7/mbb72f/81f////////////////8A/yQJDgsAAASwSURBVFiFlZeLcusqDEX9tsE2KmDe5vD/f3kFdtL03MbxYTqZtB2WhbS1has/j1X9XO3QUzqvAGtf/W/9+V7V74B+lcp6HxIuM/8zoJ5Melkb/UdAPbq8D5jFxwsu5EL75l8Ax34vLBOSGx9j9EbM7W0AtSVwJ1JcyPMcQdCbgEacOwA/BPO/peISMO3nBs7yLv6dTEXrG4BOPTcIMDbEFNWjJoZ/revwATC+1M8SgvlwhITHXzChyzWg1UF/E0TeuQOPj/0bHqq5BEyJf58hiph+LM9MMt0VoFURXjaI8BMQCCQ/XAHGXP4XgPsJiB4T2V4AUENavgLsudE9QxnbiyR2uFk+c4h6EOcvMC1nKQO90sHy8tCSALkd5Ww7B7wE4a4Ac5ateGqX+6SOhEDVGhh5DkIObwE1zfHGZ80zyhQhx6kaSPslJ27V/F7KYzlv4OERApbAFUCYq6avxqlqhu6iF2jZaMVehGBMBuwlHltc8dVSfs9BTmHSIoncjoss6SyZM0P11/od0OZ4N3nIj9skzFkTewDqYbgGVH2WgToBroigqCJHUA8zU/DJD3rYmDsBPgnsqqJL3eJ/TChfPhhK06IfZUDEw0vcbPOx/LQeOnT9JwCKKZUkBkw/5hO9IJfBH9rYxfAZsKL95tKLdKho+R4xZu1umCr2ewbkjxK+eBh7gJcZ+R5Qc5TSCfAZYMlhMHY8hdT2fX0BwKFgcuKzrRQZBilYcEadM6GdhNH0ytL0UbniS7x0526YYLTNEmimLZcY6veAziS1lZZ4WAOqYU9mVKypBjh8ydH3AOrSll3Z5jAOGeZMYFfutENoCGiLCd4DppjFnI5ElMNEQFlozOSCk85tu8EefQ/AIhw+WPaWOiaxuXUJZVjszOIhzNS9BfS5g80jgjyfo8QBSelu7G7DtmWN9hc6YEcjnwB0A8s4nkCOMmyK6w0H7dRcCGlyRyM/AILxY7IwEi3XPrlTze8AVGLbQK6+Ln4uHpcDBsmCw/ta/UHKLV3XfIykStLsOaU4lc7ZZJ9XlPdlxEIU7R8RRFLCUUNDCGNhvdFMRyURkCMIizJMejNWnTVyY8MtQCMfEeh8T9wVn2oculiL8U475xtCMY9FiEWlXAOBdZsZF+qWH5R2KhF47/kCftdT0QdX0NwD9GU6m2yMnHMCBB/cCrysifoe4JhwjqiUSQ4EWjllYF9qcA2Yyz0zEI0XKhV3iZHXJBjC5puAtUgnglgWsgAxsqoGjCYaehNQRuwO2x6cBrxnfmUmyD3cBMx4cq/h1DDKAbAuRrDl1dWvbJ1sAjhap7WbC1Eya+mElw5lyXAvgrppidfWEayg4MRxaZNh6tDTrRxUFRGEiQ3kQoQThGzYFwsEWd0F1MAUhq+TVRgDEKaVlUZ+3QZUXxh10ESCtJZvFji4YH9U8dM7kxSScM2MjdvCuTJCGIDuPqDhAHpPLjAikmNRg42e1PcBFUUzQBETtueZxGHBW8vrS9/nN9c1pA34EjyeH+cB3/Vf766fANUsZbajxHHaK8bk3+++l4CmadtuJmDUYjUEI4CMQ1ld2zb1Z0BH5wnXiIs8f/Iap2k+36FfAP8Bs7k8dFUnp4MAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1250000,
            ap: 16000,
            dps: 6233.77,
            speed: 4,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 77,
            foreswing: 6,
            backswing: 11,
            tba: 36
          },
          stageStats: {
            actualHp: 1250000,
            actualAp: 16000,
            actualDps: 6233.77,
            magnification: "100%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 3
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "ロンリー論理",
      baseHp: 1200000,
      width: 5500,
      enemyLimit: 20,
      requiredCost: 210,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "612",
          enemyName: "ハニワンワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgIDAwMDAwMHBwUKCQkLDAcMCwsODwoSEwwVFBQVGA0aHREeIRUhJxUkJCMlKxcqKSYpLxotMxsvMSYxOBwzOh42PSA7Oi05QCM8QyY/Pjw9RiZARytDSylETitJTTRLTyZHUC1JUy5NVCxQTktMVy9OWTNRWzBQXTJSXTFTXjNUXT1UXzNUYTRbWFZUYzVVZTVYYj9XZzdYaDhcZ0Raazlfa0ZcbjtmY2Fib0podVFzcG57eXWHhICQjImWk4+empejn5ysp6Kzr6y9t7LBvLbHwbvKxsPSy8bV0c7d19Li3djr5eHy6+P17+n69vD++fH//vr///85iHy9AAAAgHRSTlMABBQfJS05RkpQWmRobXJ8g4aRlpqgo6ituL7F0NXjGTM/VWCzy9jd5uz6/wrxD/f/6f/7///7/////////////////////////////////////////////////////////////////////////////////////////////////xoZ4X4AAAe+SURBVFiFlVcNW5TaFrZPKyu/0tLyq5vWhCYRc/lwhAEEZxgDhQGC2II4Y6OWpmVqR8e/ftdm9Dl6LprndR7GPQ/rZe213rXWpq3tKtwZ7P97cbPj8Y0r7/4/3Oie5l5Pni5Get7QuZv/yn5kgDaCD3dai5fDTMWavvVv7Edfs1YtYh6miy5SRpF9xnYtjOUKSRInUh9e9FA6CjyHunt9+7s5oRbHcaKMw6KDrCDPC4L8vWvb3xoWkggQm7mRttu5chIAAWIeXJvgGRtFCMMh77b1F2oRJoi5R9e1f0kFtSAMwjBK8vfvkF4Sh17gJXz3Ne1vjHO6YblA4ZTpoQkyT+dpiqbz1Pj10tA+SPKq4eJdB5Zp6Gq5JEuKIgkFhhi4hhS6ScFKkggFgR8ilEAgYsgnII5Di30x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",
          traits: ["古"],
          baseStats: {
            hp: 300000,
            ap: 20000,
            dps: 8333.33,
            speed: 4,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 72,
            foreswing: 25,
            backswing: 14,
            tba: 24
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 20000,
            actualDps: 8333.33,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 20
            },
            "freeze": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
            },
            "slow": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
            },
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "weaken": {
                chance: 20,
                power: 60,
                duration_f: 50,
                duration_s: 1.67
            },
            "curse": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
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
            actualHp: 27000,
            actualAp: 13200,
            actualDps: 10702.68,
            magnification: "600%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
            }
          }
        },
        {
          enemyId: "636",
          enemyName: "デヴィル夫人",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBQgGDBEMERQFEyIJEx0LFBsNExgOExYRGR4KGy0BIEYVIioNJT4WJS8aKjQOLUwSM1UdNEUrMTcVOV4XQWooP1A6QkgbSXYoSGJIUlk4W3dCaohjc35Jf6NSirBZl8Jen8uAm65kqdiKpbdpsOGWrb2btsjJxDSjvtCrx9q10ub/8hPU/P/qH81dAAAAQHRSTlMAIDdVj9H/DCxjnLjFR3CA3avs/v///+3H3Jb//////+//////////////////////////////////////////6vM/OQAABPJJREFUWIWlV+maojgUZQ0KyBqwqglEFsEFsBTLKludfv+3mgRqUUCZrrk//NjOzbnnLokM899Nn7B/8XXXDIMV/w/+qeAYb/JzvL4tmFHx68d4tngzGW339FO8lL7uTO7pbfZDvG4tqgJgtLCkH+HVKE7LEK9ShKbKD3TU8CqL3ShL0yzLUqcmMf6bjBpxRqCERRrF2QpTBxwAvZ9KfSHyc+z7EOE0i6IU+6LE8mYSqN0PJ8rzbKbynefy+zlf7JfuKgZ4EYazqZe8VCHXXSjYvr697UK9/UI//Tlc/sxR5hTb7a6qbS10CcCqerODqutb3CR+sk8ivK7WyWuNT8wu3lxU1euiqKqyRWHkun4W2XAVvCxATeDF6VlfBElDripaDsaY5G7lAuLgleLLROwpBQGw6rYqF0VZOqPbV5pbFlEaQYzL6rXaBmZXZmJAZljrpQ5v3I6t3EdxnGyRTeLbWr1w4oDwZuVZMlPb9Lj5pfCjGFVV4FQ7695MMurKlNhuIamng1+sfbwl/F/suzNtAu5Q4/LzBhXva3dLwgu61fNlAugUUG3y/lL6/v4MiQBFT/a/TQNWJ/zRRJifzxvfP53ydVV5j4cBqwKltToAIL8QDeL38ztxYD3E0xWBcXMvEQeby/txvz8dDvlLCR6G0CCuOUwUC9iH835/Ph3fA68s7J4WbBkPuK9ECWR9EJyOm8OReJiH6wBA8U6uvs0KQrGRyqR4ML9slufj5njM50E4L8p8gINGOqqgYUgi+HDgzC97sLzM3Xy++f17wIEEaTeEJJ2sqTYONsRHDkDpuQnO//lnYGPhF9TBzvoOwXGAd1mQCxvYKP+d90zCaxOKZl7JpAXAl+2XHxfe2gaPN3i5bGZKwOvfeJAvr24ebytm7YCMnZBwtj8xtvN5BeGdjvlyUI8U0rYk5aENOubY4PHmKNOhRQh4AIReD54+0x450GoRSS2UjtPFw4CQkh+qyK1Lb/fmebUIbbM9SH7lhxpIEPs4CQvD865EbIT8uB9oSCPNYrKP6prjOTfwenVqymMHQpRlGMWy6dzEYDdwymFgqPAoyxDC3KhHQ1KJQJ08FpFhXepgysiwB+8EgPTiwCGJiOAiU+oUEXXowIFOoCZHhAHPklhvyTu1BINTlZQSypBLRjzHGF+6EbzXXA4ONCpCiiAzJl9SCtCptQgC6qQEA8OgMSNGkOokUNFo9m0vpHhnt0ueh+GSaccuXUizoRf8Il6gN/tFowno0WNwqrPPCEUyIcCKhqKPGEXUxrwkKVY5051tVfScbG7Xn2Yunn7fj5rCl5hpSc4fRrkeysJT6sL4qt0+a4ZzIZlkkhpFD+YRaz4b7hM/wz1DT46mtS8jdkfdt590PbgIeAajbqmyRtQEz8LY6Lz9MgUclpaMOzvH5IlsCR8HrzGK9LF+h4UOHVptRvu95tll/nk2kxEEXn85cCR/ogPL3HFaKphgk0PvgwLYbPqHkmRliJE88i1o/7XTEOmi5t+a5IDlsv+kJ8EVUZgjG5rS6hgdrdzJh7Ls1AYQ9fe0GSMaPMbtjiPUrh6NxnHc35OSAmmlo5XdyuM0vilgFmf3mpIbsRwPV6koyLJJTKlNdbFI72RZEHRtPOGtOO5XUWg2dBj1jcMbw3bv9jbiNZ2uraiqKBqGdWOGYYiiqiimLOjjCXct47+dwI6Y4LhTSAAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 9500,
            ap: 8000,
            dps: 5853.66,
            speed: 18,
            range: 150,
            rangeType: "単体",
            kbLevel: 2,
            money: 850,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 57000,
            actualAp: 48000,
            actualDps: 35121.96,
            magnification: "600%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "death-surge": {
                chance: 100,
                distance_start: 200,
                distance_end: 800,
                level: 1
            }
          }
        },
        {
          enemyId: "697",
          enemyName: "ツバサターン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgIDAwMDAwMEBQUHCw8CBzYNExgOGB4QGiARGiEEBnwbHAIBFV8VIy0WJTEBBrQEMVUcLTggNUQDOIIJFdknP1BNSAEtS181V24EQuo4X3s8ZoI/aohCb48EcvVHd5ouc/BOhKkBnv9Si7KWjQFNl9teoM0kvv9jqdjVwAFf9/+k5P7//gH/+f7B5wpeAAAAQHRSTlMACRUkMzxKWWNuma//fYqk0Ny8xvLl/v/P/t20//7//+v/////////////////////////////////////////rW5rhAAAA4RJREFUWIXtV2lzozgQBYRB4jSXbOWwkgjCiDOMN14mmWT+/78ayeDYzmQzULUf86psXC73Ux/qfm1F+cL/B8P1wyhaX1zc3NxcrEPfQwttjr1qJ0mMMSGEsjTnRVXkjCY20ue5AQxv6UhgyrumqQVLYpvqPBINDhx5VxVF29U8JfZiHoUCQkFAUiw8YbVwhLMEzXNDTZwDaF0UdVPl2JtDAZwj8kbYV02dY3c6ge651sEJ3uYprwtJERuz4lhEe4KUSBYRSNG2xJzFoNhvcZCqEj7k/jx7BR0zwUUaKJppr/gnqawbBhVVm1VN97QWXW4p5mIBZjkQHa9D0SSq4kI4907C0R63uSiAZVlDIYE12ZPFQJC2a+lSGEpDYK/uvHk+4JZD8TlMQvFu4av7H3dAUYG+MHRFN4D6WWq1WBaxIx4y3NgRhQR35e1VtoouKcVODIdSxcEyCm3fsjwXQWOh6wComm4gKwxiLEuQDpEsBSPabDBlOU/pehg3AFqB8ydiLH5UPHJaU8ro+GVgoIgy3ohBg91TvzXDi87tWdcPKPpiu90WzvXz627fm12d09VmE/wRrGq+kWBW9Qds++2TeKx2u2+v1+I+VJSsru7L7D/aQjND2Tndm33/9LR/ZLvn3et1xRy8Ksvb++8Z/NAeGFAQsPaEYMS/bPf8re45pbdlef9dlvFdAAD6UXxo3rw9nn1g2Dh13zvXwv3y6eVhfXYu9MLYeZfE+rE/I+g34kVMmAn7Xy9ZfIlG3XHPTOM4ToIkWAoECWF50W4f99huH7ccI8XIHsqXXz8zXPH0wpP3ANkeMk3TELcSAKCpJ9dSMyAcC4OJw7En4w7Lf8qHnwy5l0zcxOBv3QnGO4ZrNg7Uxd2PLNvPpn0vfNqVlr88zoN6OX7rczJVIrzziTR2sG5NV237hKBp6MyZrryfyvV8huNU3utCnU6fQxJgiIBJZcr3ytRNVibdRd6hAkIbmVS2psnxxx300eGn+W/EhlA1DSfWDFVJzqMXykz8GTuXKrNHmLSn4uymSGNvurlqDslLu4LzuhPWNJxcP1VH4dg8YktrW9FyJESTDlftYClG+OmemFISesbkxEE/XCbJxX5THVZVE8xcEA++fCpUX/jCF6ZCk4pnmBBCJAGhEF6xt4FpQ8F6vyacSf/fVUHsWb4dRnI3SOIDErkuyC3S+/APz29lV3xadac1jgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 60000,
            ap: 12000,
            dps: 2627.74,
            speed: 77,
            range: 150,
            rangeType: "範囲",
            kbLevel: 15,
            money: 200,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 12000,
            actualDps: 2627.74,
            magnification: "100%",
            count: "5",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "mini-wave": {
                chance: 100,
                level: 3
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "211",
          enemyName: "パラサイトブンブン",
          icon: "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",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 750000,
            ap: 8888,
            dps: 8601.29,
            speed: 18,
            range: 200,
            rangeType: "範囲",
            kbLevel: 5,
            money: 4000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 3000000,
            actualAp: 35552,
            actualDps: 34405.16,
            magnification: "400%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "wave-attack": {
                chance: 5,
                level: 1
            }
          }
        },
        {
          enemyId: "715",
          enemyName: "シャチコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEEBAQGBgYLDggSFA4BAXMYHBIZIBMLHU8BBqwCHoUjKxssNR8FF84xQSgON7A9Sys6UxpLSUwBYKBAVi4SQdpKXjJRZDhDcEBUaDsIWPVabj9edEJieUVubHBof0laj1EnlMduh059fH1zjVF4llZIj/yBnViRko6JqF+kp6C1tqzExcKQ1f/O0Mna29On/v/k5eLu7uz39/b///+mGTheAAAAQHRSTlMADyEwQVRo64CYxP6u1/7Y/+3//////v7/////////////////////////////////////////////////////AhvdxgAABKtJREFUWIXtVmt3ojoUrVofiOAYWygTvWlimqTpRKgPemEQ/v+/mhPfUp2Z+/n2dC3Mouzz3NnJ3d2XfdmXfdn/y1odZ9D3hl7f6d03/iu4ce94IeFSm9howaLR4P6vcO19bGeEhVksEqOVVDqGlYz67T/jm24HnveDUCSLRAkudsa5kPHC4P4fs3AoajUGgYaA7IA+OGFmFQfO7/GNkdZBF6+SGviQR7IiXuu3FQRGGC6NvIYHY2ql/d5VaKt314SfHjZcqRvwXRIJ7vaanx200QA5rUbbDelt+DYJvdLYrWfRuOtoQWUURJjeSv+UhVklqHPpwOvdBwulkyQGP39yAPNIjHfpYISHXZ9yTqmd+L5aIW8mw82olsHsjYYRoYTu4YIxJvVNB+rMQcN2dMhmbzPMDyElnTClKGb7F+eO7Fol0YlQLeQ07nohlUow+KdNnE9Umpfl3EVmh1FnYKm1FqF32pz3IQ2cTt9FIaaWvVxSsi4rsM0rljsUg8c2stZyEvj+4HyKbbKKJQkDhKAH8LmkLK/2tpjYuDr09RYsMPL9YMr8Cza3EBU6iU3y9qYgWcg/rfJy52C5daB81xg52YLnaVmVm+EliT0imR0fp0JxMVlV2WafgaHQEmJS33VdNF1+HDILLuWph7VWGoIQQiinH5t9/KoAvGC0qIr5a3p4CZb1azzueUBhHIUjBAOM8+Ona1sBVFS38LOstNod+BvgBSdZtXUAj5JBXYyWdfxr5xN+Z52QK07X2wqKoqo0kZJNzKaOv64HkEXXGApbqbBfwSRjKICus7yGn9/Cd8II7UuGFPIM8JxP8qr8u/iNAY6xz5WkZlMURZowAqScsGVh/eXHAa4HN8KPZEwCpRiVFI4SPoEBQgfTTbFOy01ZzJdlVVxhwAE+ZLEmOBDc6hGjdKfJQCkIn5VQxHxaVrC/pim94qAzpIuYcqYYJuJcT7k4Zv7BoDUZGqPgEwUsfIEDqJ7xuphN1sfeFcsq9x9/PNbV9H7IFwlGEVAGaCwvNYzT1bbuqixgliV6fHl//3EpZQ5JjMThTGIhSERlPYeJTrc0KNJ1no+fnt6rn+MzeHMIzGEgXDTkVhGVqjsg6/wjy62PbJ6FD88vP/89U+PWaMERTWgIxeMQCwXdvziTJAuXsPmLLZfLfPzw8vT8fpKCpr9iLjUzjGckINqAFIKqnguoZOjUxapwv31/eHo57eSBFj6RBFPCaBQRwk0YAYsoP3qQKpjvxDHLsjJ3vz0/PT2e1DhYYURmHGTSqjkcAQTxWFgBPTrQSGyD5/N5Wsz95+/jh++nrTwURjOgn+f1+30vwIrgRe0okQSVFQTfUikdPzw8Pj+ebjlNxxv2j5evluPjINTUHq1HOvDEn1aF1Yd8mQIRv738UzsSz60JLmAf2NL3FwQpVOzObfj09RVmuYnG6JYY7Nq6gp0kDGxJ2xlogWIxdzNAfiyXlgxlOv3tPa1NFkZzjKyGw1w1Qb4buT5McO66/tQqQwBF30A3nG7Xj0hojwBrKEK7hR9Nd+98HG0Xgyv3G9hVXffvzbuSRbPdg2tx3/O8LtgVkH3t2ZEPnF7Hju4X4somlzfJNrAAAAAASUVORK5CYII=",
          traits: ["古"],
          baseStats: {
            hp: 1100000,
            ap: 12000,
            dps: 3495.15,
            speed: 40,
            range: 190,
            rangeType: "範囲",
            kbLevel: 30,
            money: 900,
            freq: 103,
            foreswing: 44,
            backswing: 30,
            tba: 30
          },
          stageStats: {
            actualHp: 1100000,
            actualAp: 12000,
            actualDps: 3495.15,
            magnification: "100%",
            count: "1",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 250,
                ld_range: [250, 550]
            },
            "curse": {
                chance: 100,
                duration_f: 180,
                duration_s: 6.0
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "413",
          enemyName: "コライノくん",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 2400000,
            ap: 12000,
            dps: 30000.0,
            speed: 4,
            range: 80,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 12,
            foreswing: 6,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 2400000,
            actualAp: 12000,
            actualDps: 30000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "落ちる果実の法則",
      baseHp: 1800000,
      width: 3200,
      enemyLimit: 20,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "315",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEDAgIEBAQFBAQGBgUJCAcPDAgODQwVEhAUExMcFxQbGRciHRogHxosIwcoIxc0Kh44Lw0wLy08NxRVOCNSPhIMT31VPSg/REdBR01iSjZPU1hXVU1zXQh2UzhZYWplaGxxZ16HZjpscniPewx6d3SYdUyBg4a0gE+fiHexlweMk5qrnETPjlipm47ekVzGrR+Sq8Tdmm2rqafLrILevxS7trPAwMDlu57Hys3a087i4uLx6+b19PP+/v6wPrTxAAAAQHRSTlMA/wkXIj0wWUmvbP+T23tmwvGl/o3pz////eL//cnv//7o/////v7//////v7//////////////////v//////rIxqjQAABElJREFUWIWdl2tzskwMhhXxBOIJtSAoyCIsh4LWpSAr8P//1RvQzrTv86G7zTjjOEOuTXJnQ+z1fjHh9bXYLITfnv3XBuPNej2fgOfi/HmWeN2FxSG6Xq/RcT0UZtFnNOP130Sf14zSNDpv18fjcj3iBIyOn1ndNE2lv+nnoyRwl2ARRRT8G/r2htBqzOve680j9GjqklKI4M3aiX8A+HWTGufzWX17M/g16I3P17p2URSdcUqKaM1dA3F7LevUiCK1aJr6czfgBYCM75Ri6+zQvwF64jJ6f9A8zR8gxfUPgJGina93SstHTd+5+xBSmLmucozeW7tGO94+7PUm+/gwGi+PZ9DhyN3HcBOX+DQejMdDaTaTRoI45JVxbseb0dR4pi6MdwpnDCNIYLJEaNkeLCyOwZYPABX0pBlC6rJVb3IMNE4AVHA9PgaqqgBA3CWWygcYLHVdWvqGrCpDUZxCJMZ2yBWAquvTlaXKmrbdnkxNk+XVhAcwUkx7hfwgAbtV9T3xNZkL0JN02790ltzqps6SRJtzAQZT6+l/CRy4S5mVBFOuThKmwfN8FHSXEaFkyXUdxe3rfMPrJrNtQCfxhDB8AZK0PR+7pqHJylRiD2JiXC635HK5w/nExHlJTBdjc8o8m4foBuanMM2o+VGWhY11WXVt5rEyjCswWpBHg928KGJb7/eBoDAD0val9KC0qc344+PDtuV+v6+aJnsE4F/npGiqF6DfAnSXFTA60Va+VsEfAJvNXZhI+7x8tGWoHjYGgOvKbQ3sPRtA0lXTjYunYT2OY2xCEWTVm7IFMNU9XGCcd4Dc7FrAduGzZxwKM1tfnrDrPgnE0U0TusA0l6xDZQZHDWd7Hb+yIClWFcW2mbeMubsXYZSvdAd35tmqOpPwiXksSu5OnKxPnmlZmBDiaVbsrqbeifkmSK6yPhGSmgYmkEHqWCS3QUMOgG6FuWOohuN15nihozsm85oztzHJiaVpfvY0x0vTEN1PrCrMbVLQPHQMlCQBCuD9oCVZhmjJuCgJa8j80TzSFoDk1tQgyfyqPrCNJOGQF2X9AgSy5gdBkNyysGkYdQBACpvZgxgGQkizEPLBwpDmjDoIB4JCiKDMwzTWZVnXoSZFXviWwgoILXRv1+RLqMIYkE3PbdfmjAEgDDqAb6EEXCqq9zuzsVfBz/T3FIYzoQUgK6Tg0aRP/74cu+ROawYVpP2oS4GU3TyzX4C+g73bjQWwIfOnjN1fhVr/Atixk8HyzwCg8MwLUFXfAS4MWSZAOf8C5H6qfgM0TIBF2ZxGXwDLkrkBk7x5HMQnoPDzHync7/R3gHhqmnJ9ICn08s8aOPR2SRh2/g3ol5qeZpD/qaCFt4QFIB6KqvBSy4LX6g+AUbABeoP54WQXJKyrjFbfa1BlLDXoEMNDAUWsYD/5UcSKRYXWhtOV5+EYw0z/6gO40iqGV6Tyz7b5H9j6xCH/36b3AAAAAElFTkSuQmCC",
          traits: [],
          baseStats: {
            hp: 1500,
            ap: 50,
            dps: 2.0,
            speed: 0,
            range: 1000,
            rangeType: "単体",
            kbLevel: 1,
            money: 0,
            freq: 751,
            foreswing: 2,
            backswing: 10,
            tba: 375
          },
          stageStats: {
            actualHp: 1800000,
            actualAp: 60000,
            actualDps: 2400.0,
            magnification: "120000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 20
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            }
          }
        },
        {
          enemyId: "694",
          enemyName: "テク・ノロ爺",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgECAwMCAwMDAwQDAwMDAwMDAwMDAwMCBAQDBgYECQkECQkFCgoFCwoFCwsGCg8KCgoJDAwIDg0GEA4HEA8IDw8NDQ0ODQoPDw8IExEHFBISEBAIFRIMExIVEgEWEgAMFRQNFxYCCl8KGhYLGhcVFRUUFxcMHhsXGRkNIB0OIBwRHSAOIR4YHB0bGxsjHgENJB8OJSElHwEeHh4PKCMYJCIYJCMLCJoZJiYQLCcvJwESMCsdKykmKioeLy0VNC4qKisqKysrKywUODAtLS4hMzEJIZoTPDQrMTEjNjMYQDclOzYQRjo1NTU1NTUPMJEZRTsMKKxGOwEnQD0bSkA8PDwsREAvQ0EtRkMcT0QeJMUYPpAZUWAdMbhEQkMfVEkwTUpEREQeWU1YSgEhXFE1S203UVAaSalMSkojYFMlZFc6WlVQUFA7XFgmaFtVVVUobV5vXAIdUdNAZWFcXl41cmZgYGBFbWhWbGghWvNdYY5Lc25nZmpnZ2c7gHNra2uGcwJPenRAi3xVhX97d3dYiYN8e3tJeOlXkoqFgIGjiQFel49SnpCJhYaIi5FloJZfnNCElZiTk5NqqJ+VlZW6oQJrraNjtqhysaienZ3JqQF1ubGOsKOlpaV6v7WrqapxxLh7w7iurK19xryAyr+ku7jjvwK1tbWCzcKG0ca8vLuK1czuyQKI2c7CwsKQ2tGO4NTHxsaQ5Nf+1wLMy8v/2gOW6N3Pz8//4QKY7OLW09OY8Ob/6AKb8ufZ2dme9+2f/fDg4OCh/u+j/vSl/vio/vur//2z/v7o6OjD/vru7e3x8fH09PT5+fn8/P3///8riTyRAAABAHRSTlMAAwUICw8TFhkdICQnKy4xNDg9Q0VITVBUV19sd4Dc4e16mL/z/2VpdH6FiKOvs7a7jenKcJHN1qmtxdK6mP+SUfXA2r6phKF+6f/e982u7NLg/+3//8b4tP/KlPPk/qXs+8GQ/9iz////0Pvn/+7/98/Y/8fn///////4/8T1////zP7//9r/8///////////1v/f//////////f////k//v/////1v////////T///r///////r////////+/////+r///////////////////////////////7/////////////////////////////////////////////////eO5Y3wAABwJJREFUWIXtVntcU+cZPuEmCIolAhKk1mi4lFhAQlPF2pUq2rTdRAOazrq5hTbM0tiqQ1K3ZgVGs4tJaUYNQhYNNt281DTQQSPNtliamAUboJPAgiGEUK65nAssXE7PQXQkTf/o/ub545zvvN/3PL/3fb/3e78DAMtYxjKWsYxl/D8IXRkUSY69/xVC+L782DeuvvvzpKf34uOYp37155PR34McAgD5p+9Mz3p7G/X5QMShNjc6N3k1xndR8HfSw5MKXshKJxd9MovOoOjthNdH0TnUbTcWh9+bX/3D+GAgOjP5O+ihSa/WKmpbjf/8oPjX/bMDM/ONo7MD6MBNfdPxpNCFFVHXP397z4VPEwPz44o1fdaKNu8sis7daez16geG0dHO/l73zMx05wfJBMzx0PfGB/89fosUiL5it6IDrOCcHXa73XMoOj/gnjc2/vXKHfvk5DSKot6qfdnYql8MDg19fWt9AP5DdJXO5JA3cM+1GW/fsXun7cNo6/6Lhn/YvaOdN42tHLk8CwBI14eGBocGLyT408No72h0DhDRKr9glw5jIcyj7t6B07+5+Le/fzZqn9FTGDfaCyOA5OvjXw8ODo2P+ymEry9QmXVdI9CIstzZcoaj7++fnJsd9X64//3fvfKnfrv+SJnW+sxzCQD5veufDw7958LbP1mahcisU3KNqbvH0DemaW3SOi8JmMbZ4dn5r7761/6Lf/zl77125pkbcENRRBRWAFEbPx2/wHhqCT2G+o7JgyBQT62yz6lum2xwWWU1rJuTd6f+63Hw33rlL+8bOWc+htqvfLJYCj+7Rf6xes9iKUWmFl3uQ2DP2N0ORbl5AtE0uU9rpsx1YoYOdDkhxNnMeesPhWUym0tk1xPvcaJ/tDr4t90vh2FDInUzy9Ei0sCgxex0mLQml6nqw+pqJ/ylRMAdAWFLS4tzQmM2sL+Y0tR7m9Ys+ryKAMQoHScj1+UpSikqG4Wihs0ircXmcnlAm7z77GkDBBtqLjkhdWlbq8gFw12cDuQ8+ea7QUsC39jR9bTShthMoEOlc3RUM5rNEy4PBsTcrlEiINQi9ZgoRiP6UTsEyXdqkdeBHNrSfSMcKtchoAf0eEAEdo2oVE7Q6cEUYLVpyiSHQKjnGqik6FHUqIJhzRFFV45/4ax6E8LYHhcIg5jnEKKygB4sBlhuQKwi0AXavuwupRTqb1d1wxNKJpOZ6d9TiM0I7jFo1VgxHzABFezCk9Bwd8wq6oFdIGhVyjlMuQWCatllDAplnZ8ASYsLgLCBW9ug1Hb09VQ7cQ+cx18tr+WUYzQsPqilQW5CmpmiUgqFsukHQT4CNAOMh4Ao2yGLrvmy4nCuFsYCsm4Lfw0cU5fXipqRkYpzncP11SxW22jblY8GGtN9BTpwAXCC0wWDIDJlyIk4D7s8kDkHoGIBjJmKMwxdhWdL60ebWKzOGTs619+W7JOGRB0uAJ3PxD2B+/aFAnk2EIRMacDayzC2OyfDdmjkOzuNn/V21tfrX9Jfee54io8H8WosB0gzjahGQHDiNeyYpKhhEDLQgKBipwccKwKCtikqWqdFisbGbGpcatzq6JU+Ag8pERfSTgUScAFRHGYJO+X0wDqsWyZqYcixC6uV2KymyX0vv1QVCwRAkg5GenLXEoocEKK41yLTTRDSjh1zYoVzbGwXbllx1Z4CpB8J8+MS1qRtjz/lQu6yDjxPvowgqnvpJeZKeiyGFIB0mNVyw/Iiboq4aqcB8WT/GgrPFZRt1kzZijOFlQwLoiIvWFc/X8O9dE2dSNh2rKZSdu0kbgt+w0gDAuBJroQ30lOc8CJXcskhX9ze0EcPCoV1Ahqw5lmeRCLevmDMb1wHRH+rf25kV0o+VudF7C4Riq+9+WB6V1llnZRPA1KP8SUSSe6C33vricCewlA/gTRWjVSQGQIkHxRLWQ/4hLQDfKlUkA6E5zBr6uoKQu4LHKqK8BNYmcUX0zHVEBKPl7/EnribLxVixzY8ertYuihwjgikPBbkJwDEnzi6cNnm8F/wSTDhWamQig8eFUgPLOwdrYoYKIl5vIXErThwjOh7Te+QiDPw97oy2dEofJBaGvMtNtZLjv6UlIZVF4n7zBMFZJ/sCOrw6w8IPywrWeigsfTIAAJ7TzxyUMhMDtldQuHKSjat+d9MNFtWsIIYRwC2iHk5G7eTogP/SFCZDFYdn5mfweYxhXz20mO+Q8DcymbS10YdZLHYfEZeIDoAPCGQlXF5rIxsoYxXwmZsWZ90H2mPMQRllSe4T8ZsFYrZ/JJAAsGJGZtZJ9hYkwsIhqCExcQnmcyd2JOekRriJ0CIiiWlppOpWzI3ZT9Opz+8YcOGrY88wFbs82E6/fHsTZlbqOT09cmxq3w2+hvwIIDlQm3ITwAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 850000,
            ap: 12022,
            dps: 6011.0,
            speed: 9,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1505,
            freq: 60,
            foreswing: 30,
            backswing: 30,
            tba: 15
          },
          stageStats: {
            actualHp: 850000,
            actualAp: 12022,
            actualDps: 6011.0,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 390,
                omni_range: [-300, 390]
            },
            "immune-curse": {
                enabled: true
            },
            "counter-surge": {
                enabled: true
            },
            "warp": {
                chance: 100,
                distance: 1200,
                duration_f: 500,
                duration_s: 16.67
            },
            "sage": {
                enabled: true
            }
          }
        },
        {
          enemyId: "185",
          enemyName: "教授",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 320000,
            ap: 6800,
            dps: 8500.0,
            speed: 4,
            range: 501,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 640000,
            actualAp: 13600,
            actualDps: 17000.0,
            magnification: "200%",
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
        },
        {
          enemyId: "694",
          enemyName: "テク・ノロ爺",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgICAgICAgICAgICAgICAgICAgECAwMCAwMDAwQDAwMDAwMDAwMDAwMCBAQDBgYECQkECQkFCgoFCwoFCwsGCg8KCgoJDAwIDg0GEA4HEA8IDw8NDQ0ODQoPDw8IExEHFBISEBAIFRIMExIVEgEWEgAMFRQNFxYCCl8KGhYLGhcVFRUUFxcMHhsXGRkNIB0OIBwRHSAOIR4YHB0bGxsjHgENJB8OJSElHwEeHh4PKCMYJCIYJCMLCJoZJiYQLCcvJwESMCsdKykmKioeLy0VNC4qKisqKysrKywUODAtLS4hMzEJIZoTPDQrMTEjNjMYQDclOzYQRjo1NTU1NTUPMJEZRTsMKKxGOwEnQD0bSkA8PDwsREAvQ0EtRkMcT0QeJMUYPpAZUWAdMbhEQkMfVEkwTUpEREQeWU1YSgEhXFE1S203UVAaSalMSkojYFMlZFc6WlVQUFA7XFgmaFtVVVUobV5vXAIdUdNAZWFcXl41cmZgYGBFbWhWbGghWvNdYY5Lc25nZmpnZ2c7gHNra2uGcwJPenRAi3xVhX97d3dYiYN8e3tJeOlXkoqFgIGjiQFel49SnpCJhYaIi5FloJZfnNCElZiTk5NqqJ+VlZW6oQJrraNjtqhysaienZ3JqQF1ubGOsKOlpaV6v7WrqapxxLh7w7iurK19xryAyr+ku7jjvwK1tbWCzcKG0ca8vLuK1czuyQKI2c7CwsKQ2tGO4NTHxsaQ5Nf+1wLMy8v/2gOW6N3Pz8//4QKY7OLW09OY8Ob/6AKb8ufZ2dme9+2f/fDg4OCh/u+j/vSl/vio/vur//2z/v7o6OjD/vru7e3x8fH09PT5+fn8/P3///8riTyRAAABAHRSTlMAAwUICw8TFhkdICQnKy4xNDg9Q0VITVBUV19sd4Dc4e16mL/z/2VpdH6FiKOvs7a7jenKcJHN1qmtxdK6mP+SUfXA2r6phKF+6f/e982u7NLg/+3//8b4tP/KlPPk/qXs+8GQ/9iz////0Pvn/+7/98/Y/8fn///////4/8T1////zP7//9r/8///////////1v/f//////////f////k//v/////1v////////T///r///////r////////+/////+r///////////////////////////////7/////////////////////////////////////////////////eO5Y3wAABwJJREFUWIXtVntcU+cZPuEmCIolAhKk1mi4lFhAQlPF2pUq2rTdRAOazrq5hTbM0tiqQ1K3ZgVGs4tJaUYNQhYNNt281DTQQSPNtliamAUboJPAgiGEUK65nAssXE7PQXQkTf/o/ub545zvvN/3PL/3fb/3e78DAMtYxjKWsYxl/D8IXRkUSY69/xVC+L782DeuvvvzpKf34uOYp37155PR34McAgD5p+9Mz3p7G/X5QMShNjc6N3k1xndR8HfSw5MKXshKJxd9MovOoOjthNdH0TnUbTcWh9+bX/3D+GAgOjP5O+ihSa/WKmpbjf/8oPjX/bMDM/ONo7MD6MBNfdPxpNCFFVHXP397z4VPEwPz44o1fdaKNu8sis7daez16geG0dHO/l73zMx05wfJBMzx0PfGB/89fosUiL5it6IDrOCcHXa73XMoOj/gnjc2/vXKHfvk5DSKot6qfdnYql8MDg19fWt9AP5DdJXO5JA3cM+1GW/fsXun7cNo6/6Lhn/YvaOdN42tHLk8CwBI14eGBocGLyT408No72h0DhDRKr9glw5jIcyj7t6B07+5+Le/fzZqn9FTGDfaCyOA5OvjXw8ODo2P+ymEry9QmXVdI9CIstzZcoaj7++fnJsd9X64//3fvfKnfrv+SJnW+sxzCQD5veufDw7958LbP1mahcisU3KNqbvH0DemaW3SOi8JmMbZ4dn5r7761/6Lf/zl77125pkbcENRRBRWAFEbPx2/wHhqCT2G+o7JgyBQT62yz6lum2xwWWU1rJuTd6f+63Hw33rlL+8bOWc+htqvfLJYCj+7Rf6xes9iKUWmFl3uQ2DP2N0ORbl5AtE0uU9rpsx1YoYOdDkhxNnMeesPhWUym0tk1xPvcaJ/tDr4t90vh2FDInUzy9Ei0sCgxex0mLQml6nqw+pqJ/ylRMAdAWFLS4tzQmM2sL+Y0tR7m9Ys+ryKAMQoHScj1+UpSikqG4Wihs0ircXmcnlAm7z77GkDBBtqLjkhdWlbq8gFw12cDuQ8+ea7QUsC39jR9bTShthMoEOlc3RUM5rNEy4PBsTcrlEiINQi9ZgoRiP6UTsEyXdqkdeBHNrSfSMcKtchoAf0eEAEdo2oVE7Q6cEUYLVpyiSHQKjnGqik6FHUqIJhzRFFV45/4ax6E8LYHhcIg5jnEKKygB4sBlhuQKwi0AXavuwupRTqb1d1wxNKJpOZ6d9TiM0I7jFo1VgxHzABFezCk9Bwd8wq6oFdIGhVyjlMuQWCatllDAplnZ8ASYsLgLCBW9ug1Hb09VQ7cQ+cx18tr+WUYzQsPqilQW5CmpmiUgqFsukHQT4CNAOMh4Ao2yGLrvmy4nCuFsYCsm4Lfw0cU5fXipqRkYpzncP11SxW22jblY8GGtN9BTpwAXCC0wWDIDJlyIk4D7s8kDkHoGIBjJmKMwxdhWdL60ebWKzOGTs619+W7JOGRB0uAJ3PxD2B+/aFAnk2EIRMacDayzC2OyfDdmjkOzuNn/V21tfrX9Jfee54io8H8WosB0gzjahGQHDiNeyYpKhhEDLQgKBipwccKwKCtikqWqdFisbGbGpcatzq6JU+Ag8pERfSTgUScAFRHGYJO+X0wDqsWyZqYcixC6uV2KymyX0vv1QVCwRAkg5GenLXEoocEKK41yLTTRDSjh1zYoVzbGwXbllx1Z4CpB8J8+MS1qRtjz/lQu6yDjxPvowgqnvpJeZKeiyGFIB0mNVyw/Iiboq4aqcB8WT/GgrPFZRt1kzZijOFlQwLoiIvWFc/X8O9dE2dSNh2rKZSdu0kbgt+w0gDAuBJroQ30lOc8CJXcskhX9ze0EcPCoV1Ahqw5lmeRCLevmDMb1wHRH+rf25kV0o+VudF7C4Riq+9+WB6V1llnZRPA1KP8SUSSe6C33vricCewlA/gTRWjVSQGQIkHxRLWQ/4hLQDfKlUkA6E5zBr6uoKQu4LHKqK8BNYmcUX0zHVEBKPl7/EnribLxVixzY8ertYuihwjgikPBbkJwDEnzi6cNnm8F/wSTDhWamQig8eFUgPLOwdrYoYKIl5vIXErThwjOh7Te+QiDPw97oy2dEofJBaGvMtNtZLjv6UlIZVF4n7zBMFZJ/sCOrw6w8IPywrWeigsfTIAAJ7TzxyUMhMDtldQuHKSjat+d9MNFtWsIIYRwC2iHk5G7eTogP/SFCZDFYdn5mfweYxhXz20mO+Q8DcymbS10YdZLHYfEZeIDoAPCGQlXF5rIxsoYxXwmZsWZ90H2mPMQRllSe4T8ZsFYrZ/JJAAsGJGZtZJ9hYkwsIhqCExcQnmcyd2JOekRriJ0CIiiWlppOpWzI3ZT9Opz+8YcOGrY88wFbs82E6/fHsTZlbqOT09cmxq3w2+hvwIIDlQm3ITwAAAABJRU5ErkJggg==",
          traits: ["エ"],
          baseStats: {
            hp: 850000,
            ap: 12022,
            dps: 6011.0,
            speed: 9,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1505,
            freq: 60,
            foreswing: 30,
            backswing: 30,
            tba: 15
          },
          stageStats: {
            actualHp: 850000,
            actualAp: 12022,
            actualDps: 6011.0,
            magnification: "100%",
            count: "1",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 390,
                omni_range: [-300, 390]
            },
            "immune-curse": {
                enabled: true
            },
            "counter-surge": {
                enabled: true
            },
            "warp": {
                chance: 100,
                distance: 1200,
                duration_f: 500,
                duration_s: 16.67
            },
            "sage": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "七色に分かたれる光",
      baseHp: 1300000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
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
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "608",
          enemyName: "ちびわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgICAgIdHR00NDRTU1NlZWV1dXWMjIyhoaGzs7PGxsbX19fi4uLt7e34+Pj///9Al7TBAAAAIHRSTlMABxEfR11vk6Sxvs7r9IIx3f///////////////////6VVouAAAAPOSURBVFiFlVeLkqsgDN2qba1YNYLyUvj/v7wJbrs+oPWemd0pjjmGcPLg5+cbLnd2/frSB+QVQLVeP6r8f+zbDgCeb5OsqQFu/2F/fQIMAM1rSXRQnre/AfTaC+gutMofaD3gKjtr36C99V4DFLgq0HtuaNWet+eT937u4R5WIJ33FuDkqZD9jBbeD8DIfdzNQtd8N0ZcAcTsAxQ86/fK8XMExRO/aLWSUmlFsRfGaK2NMZw29N2+hjS64pt5OLAFfR9heH45B5IPCPTd2GmepwUWF/TfaIE+fJTznfQy+TTkNj12uKB9bz6YI8ZPWijpwNxnAjxKdknYB/l8Nl+UkYjj9Ve+X5DUc4b5+mX/AajneFXAAMoT9s4lEqLAAJ6wT2fU49wGkgT5E8ZT9qkY4BHGTkAPar10cpgSBBXwiD0l85pBktKiBIkdCEqN1XogqUQJWgAdIcAvbp6bHlTcAyziNkLgpFDbB87HdXCH/pUFRozaxjLK6UEM0noOVdHu86kB/rIRoRjx445GfMpxS+EF1h4IXu9pHirZQZau55PzBkYdShvLUgTezVbJ8ShLGaokt362Vu5T8h6VgVd8zWPVMOp3h9gW+HLtAf0ZhW+a0B+jELtGvSbwkxJ9yG25UdEaS8+ME1gRgkjdUCc9UL+zRlbelwN9/BGgXIHjXl3YKZdKaa0CNCH8Gnuo8yX4v56sCIyQ789OPNnjghovNLaUdKDxZAyuRhrcs2NN8LzFNoySKDYebIDqm/DYrZ3sAkynMs9fIsI6qGnL7MYSBVHsn08bBV2pDKnFxSgBRnFXJswyNK0J/Kx4igCPe1fq9WpyDASLVG2fJNjWA4xqvcoiLGTi5WqKYJfWWwLqRvQF6jbfPXALwXoLPxlbBrg5QYAFdPTzAoeYnd4EMQxkONBIHg+i5WFSeoHTP5xxbut69h7JYgTyk4zfgWxY3VXPmBLdrLA0SRwXFf1A4G858sOEkV1oNkiVjuPGYlN/eba5E8bIlJR3x/HC+cS8NcTGLLrfcGmWlKPCSacWIXDzJCE6MYcb0mvG5YhwcFyI4Q+CnkJqWG2SxWePxN2NhqRhwA/gVwHqB6Esy0fJwqOQscMo0jc3rG8DaRfFazZVow0pRx1RUwDT9y7s0I7qE/3fvIWbM4Z8H6ggpe8sRbgnoijFrmvkNWBbZqgV7ImpOfeS5eEcaiyPWHbL+xtN04Q7SINXCWzcRxFesvZ6u5cPxj5ddZC6rgN1c23zTRiK+2fDI57lbtrO2uLaoA8VY11Xx9F1jFUVK5tb0b5k8A+gTf75RoLiBAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 100,
            dps: 63.83,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 47,
            foreswing: 8,
            backswing: 24,
            tba: 20
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 500,
            actualDps: 319.15,
            magnification: "500%",
            count: "0",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-attacks": {
                enabled: true
            }
          }
        },
        {
          enemyId: "040",
          enemyName: "ナカイくん",
          icon: "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",
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
            actualHp: 540000,
            actualAp: 27282,
            actualDps: 19962.42,
            magnification: "600%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 525000,
            actualAp: 19491,
            actualDps: 25423.05,
            magnification: "300%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "538",
          enemyName: "ウリボーイ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUBAQEBAQEDAwMFBQUNDQ0PDw9AQEBoaGh+fn6RkZGrq6vExMTd3d309PT////////cNKEMAAAAEHRSTlMAQB5m753h+P7//v///wD/2tUh8gAAArRJREFUSInt009M01AYAPDXLruSIQNjTAxC0HgxCE7v2gWiJC6aLRGI/xCJuGRRjKir7gJMJ7oLMByYxctwG2QHUHCKO80pZumJjEBMNUaPHvena/3sK9u6bgWPXviSNmm+X773va/vod//CLQDdsB/AN9QPgy7UElUVYKD/pbtgZbxN6PGbQDpEIZ1dbqtAeqCXM/eS1sAsrqm1QKQ7JjfAuhdoWCABZhNNTarV+iEzeDa1QHSWjeB8EWnCgjLXL5ERrUH4joj5tYxSKtWOB7FOT9+C1dUK1gYWAGnA7OYag9dwI3y3vtSE+IaZH0ZOMDAIpt7NxkWAW9COsJUBs7PfqUht+x24RK3yLPEiTLQcDTwFHK+EI/BPDpJDCgBYaCTIRDCgjSJVXSHGFcCjRW8o5uDFJ8U6SRmypbQJ2irNIog3sb+YOPnwwrQRGc8VmkIE+JE+SOR2qwCNNEQp6ZsGIzhf9a7fkwJNP384KkRqcICJY7Cz3VmSkFDLb045qXcGGTviacmkD2Tlpv8Ua+f4+ztqTYGCkFnfCkZ/PJfWx6Mh4eixTznyzAxeYmfAHFfgp8u5iHJJp3OZ0Xw3SfYQRF2iLyHP3KT3emwIi9+PprmPshgd6A0LXhdwN+d+PhQBtqOYnYlCvyMGzL2PucFGZC2Qn7tCS5hB9fo6Vf7SoCjuL8pcUoQ98y98M1XKYBQ2KA0zUUvwymOnA24/D5m8DQFZsN5WXGqu0F4kG/SI86T97vT9QqwB+Btfo1P+BWrG1DeC00Y1hKsBJaCLORMFRfnIqwaLI+fTwJERjbc45U365BwE5HTb1rDMGAY9AxXAi37GiFHtqcbXhIN9nRLBdCwS73mG8G4hVkwm22REV050LvoCYqirlKz3ttUW/+QUVcGiBqzkZKij6KMxnPVhQp/AbO+wCa7TIrAAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 55500,
            ap: 23500,
            dps: 26111.11,
            speed: 20,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 350,
            freq: 27,
            foreswing: 8,
            backswing: 13,
            tba: 10
          },
          stageStats: {
            actualHp: 83250,
            actualAp: 35250,
            actualDps: 39166.67,
            magnification: "150%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "46.7-53.3s",
            delayFrames: "1,400-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 5
            }
          }
        },
        {
          enemyId: "040",
          enemyName: "ナカイくん",
          icon: "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",
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
            actualHp: 540000,
            actualAp: 27282,
            actualDps: 19962.42,
            magnification: "600%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "86.7-93.3s",
            delayFrames: "2,600-2,800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 22500,
            actualDps: 5578.5,
            magnification: "250%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
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
            actualHp: 525000,
            actualAp: 19491,
            actualDps: 25423.05,
            magnification: "300%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "仮説不要説",
      baseHp: 1600000,
      width: 4700,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
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
            actualHp: 12500,
            actualAp: 25000,
            actualDps: 17441.75,
            magnification: "2500%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
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
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "362",
          enemyName: "グレゴリー将軍",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 15000,
            ap: 567,
            dps: 1063.12,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 5,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 375000,
            actualAp: 14175,
            actualDps: 26578.0,
            magnification: "2500%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 6000
            }
          }
        },
        {
          enemyId: "291",
          enemyName: "スカルボクサー",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 100000,
            ap: 7997,
            dps: 8272.76,
            speed: 18,
            range: 175,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 29,
            foreswing: 1,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 23991,
            actualDps: 24818.28,
            magnification: "300%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [6800, 400, 797],
                timings: [1, 8, 16]
            },
            "burrow": {
                times: 1,
                distance: 1125
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
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 3
            },
            "barrier": {
                hp: 266000
            }
          }
        },
        {
          enemyId: "293",
          enemyName: "墓手太郎",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgIEBAQFBQUFBQUHBwcJCQkJCQkNDQ0ODg4SEhIUFBQfHx8kJCQlJSUmJiYwMDBAQEBDQ0NERERQUFBRUVFbW1tlZWVubm50dHR2dnZ9fX2EhISLi4uLi4uTk5OZmZmfn5+jo6Onp6esrKyysrK4uLjAwMDFxcXJycnNzc3R0dHZ2dng4ODl5eXr6+vx8fH39/f7+/v///9hrSwKAAAAQHRSTlMAAwkWlaa1wtXq9+P/DyArNUJNWoF0Zv+U/+ihrr/s/9T/////6v///+//////////////////////////////fHF+DAAABnVJREFUWIWNl4lS4zgQhgnHwnCGQDgW2MRHJCNL1mVbtmVL7/9W28oBOzs40EWRqiT9Rerj7/bBwdc2OTw8PLq+md7e3s7AbqfXhyPf/MoOp3fzp5fXt+Xy77//Wb0HWy1f7o5+6n81X64I41JrjHQ3uLX19fvTDwmTh1VZm9oYw9POf9rw/jD5EeD6TRlT12WpEPOuq2RRcFm2gzevPzrCZBarUuuyLAnqnEyihHKWJAvcDvT+6gf+0zdahvMbhhrwLwUd3EDqPEJt/z7/Nhfgz83airRxOs6dSZnssrbJImTt6uEbws6/NjKtXYVK0rbxIlEoT0kakb5bzfYG8vP3Vapdk2inRJGSKI5Iihq2YEOznO4hrP3X9y9T7ixO+GBQWrdJRC1JTB3H2pVvN+OAmzcGp69KzVE+DDRrCM0WCWPRIqNxlBJIRuP4yxhhcvtKKiV4wfOIWK9i0jZphDhktKrrWqaqjBeo74vX66/9Z8tcwxehCJF0vkUVxyyV1nu3LkQnEFL5QntXzL8Mw9Gr2MTPaKhgxwpnUSRs8O0klDTkUXmzIN6bly9zOV3W9Q5g/YC1MzGUUgA0CHddlkTSqgg7X30NuFlWIf/wVyaVH1JEs0ism6kXgrYdRREmSZw59373ZQyuXqjWFURAa0Jcj3LG0nJ9gzrFvXd8kUB1Jpnrll8H8eD2H7FpAsMzAOCkQDU4Om9FBXqgcCKTOAXA20hTXi/LbRQFGuAEWZrUg5PMDINvNclCQUY/B2CJ8RqQEt16N+g8LwucpWQccPSmtwCJhiGDfgCAl1hlqu26tjFNLhkA2rcRVbj6ACg0uIxjGQC9dSqNEYbzxIiTlPhxwKv6PIHDSUKTql/XILR1XdV5pqEhct+8jmjC4Qv/LyDi6RbgDQ7ZyXGBFindA3jKgpTU2ytEJo3LdSc4GcMNsiTBNErZWCVDN80joaTUtVF4cHDbJNZNmAq2kNCQlUZpmiSFY1/3UpgHsarWlaRw73JRgAoRsAxDCOFfGrMKNGasksMJ6K4dUQBIgmPCsjiG7GcIUZHhDCXSvT+MAR7IRz9bz4RCUkI9CgUnQYwRmnOaJdKz+zFVvMM7QNL5QvgqtyUrQ00jRLAQLZUBoEYBsx2gBIAofE+J0DlIHEq5ElmR0zYPgPmI/8HtauNfB4Ck0ACGsxKKEafGu0bX/UABIMdicDDdAaq09SoHMYIchkJqK7cd0OEExVgWDm5WW02rUeM1iIp1fui63ratBZHrwUgI4mwUsFPFACiJlbz3tSwkF5TLXkvOW5xoL0YB18tqBzDeZJ3gXau5MFLKglZKFbxFSenF7Rjg6K3cXaH2DQaALERuelHkXJB6gESipPbFKOBTEHAFAKtUrZvKugraQ1fWQyhgUvr36Rjg8EMQiAJA6KO+d3adgb4LLwAwbg/gZTebchkA3mlOTWH8YK0g7RqAmmE1Op4nTztFyRlMo94PCm7BhAZB5UUDaxYA2n2A+2IHoGuAr4vGFjmrVSWZZg0AcNcvxwHzfAfIYTqDGjW86ZVWA6iaaEDdLQ6AkcEE9pDtAGQDGHqoxX67qw4wozLc2T2A2eoD4DpkBy1V73qtQeiMq6XobQab2h7Arh0NJbAcdFZwUmtBcpEXvKkCAAfA+L760U1FGM+dZbRRRQHbDeWcioL1UAd2dLId/KcZeAA0fQ5bStf7jivJlRZy6BD6BrBtBgbDERvf2c12NIQIBm0IgNHJdvDZTWUcw3QtvQMlcK5tmq6x0BSgLAjvBWymY1mQPOkdKX0rFbMtl1QWSlEQtxZjOzrZDkIzyEozwivQdZdrWE0ElRx2HVh4KYMYNNl+wOSJMSaqsOlaT7X3mlbwBgCYzErJAZD15mV8WZ7cI11vVLXzVEH3NX3bQSR6O3SgiTCmSW+e9mzb29lUV0nrmfR/WI3IUO4D3L1/AorfAWtZqWAJV09XY4TJdL6qqw2g8QUPc2G3KUNKob3LNFXk4mTkoePw7uxigSISFtbEWAJPFxir0JMGtizYLZThi8fH58vLs/n0z0xMrmYXl8EeCaRygeLHBXp+vHyMuILXRfQIHz0/X27s/OzP55ajk4vtp8+L58fLb+z85H/KejQ7/vWd0++E498J05Ozi/Pz8x86n5//uji9/18Erqezu/n98clfp6dnZxdgv343eOfs7PT0r5Pj4/v53e3N0TaM/wKpmLzJJy6chwAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 750000,
            ap: 15000,
            dps: 7500.0,
            speed: 4,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2500,
            freq: 60,
            foreswing: 22,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 2250000,
            actualAp: 45000,
            actualDps: 22500.0,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "revive": {
                times: 1,
                duration_f: 120,
                duration_s: 4.0,
                hp_ratio: 100
            }
          }
        },
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
            actualHp: 12500,
            actualAp: 25000,
            actualDps: 17441.75,
            magnification: "2500%",
            count: "7",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "36.7-43.3s",
            delayFrames: "1,100-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 266000
            }
          }
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
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
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
          enemyId: "362",
          enemyName: "グレゴリー将軍",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 15000,
            ap: 567,
            dps: 1063.12,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 5,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 375000,
            actualAp: 14175,
            actualDps: 26578.0,
            magnification: "2500%",
            count: "4",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "73.3-80.0s",
            delayFrames: "2,200-2,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "barrier": {
                hp: 6000
            }
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
            actualHp: 700000,
            actualAp: 10000,
            actualDps: 13636.4,
            magnification: "2000%",
            count: "2",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "60.0-66.7s",
            delayFrames: "1,800-2,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "291",
          enemyName: "スカルボクサー",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 100000,
            ap: 7997,
            dps: 8272.76,
            speed: 18,
            range: 175,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 29,
            foreswing: 1,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 23991,
            actualDps: 24818.28,
            magnification: "300%",
            count: "3",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "73.3-80.0s",
            delayFrames: "2,200-2,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [6800, 400, 797],
                timings: [1, 8, 16]
            },
            "burrow": {
                times: 1,
                distance: 1125
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 100
            }
          }
        }]
    },
    {
      stageId: 5,
      stageName: "力を計り得ぬ者",
      baseHp: 1000000,
      width: 6200,
      enemyLimit: 10,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1071",
          treasureName: "理の賢者ニュトーン(801)",
          probability: "3",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "729",
          enemyName: "理の賢者ニュトーン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmI3YzY0Y2NmOSwgMjAyNC8wNy8xNi0xMjozOTowNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphMDU0ZWExNC1lYWZjLTRlNGQtODVhOC04NGQwODRiODNmMzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkFBNUQyOUVGRjE5MTFFRjhBN0JBN0VBOUU3M0VBMDQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkFBNUQyOURGRjE5MTFFRjhBN0JBN0VBOUU3M0VBMDQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjEgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NWYzYjE2YTYtZThjYi1iOTQ0LTg3ZGEtZGM0MTE5OTlhYjA4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Y2I0NDBmZWMtMWIzNy04MTQ2LWE4Y2It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",
          traits: ["赤"],
          baseStats: {
            hp: 2000000,
            ap: 190000,
            dps: 19191.92,
            speed: 4,
            range: 700,
            rangeType: "範囲",
            kbLevel: 8,
            money: 8888,
            freq: 297,
            foreswing: 58,
            backswing: 43,
            tba: 120
          },
          stageStats: {
            actualHp: 2000000,
            actualAp: 190000,
            actualDps: 19191.92,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 1500,
                omni_range: [-300, 1500]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            },
            "mini-wave": {
                chance: 100,
                level: 9
            },
            "strengthen": {
                trigger_hp: 50,
                power: 50
            },
            "sage": {
                enabled: true
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
            actualHp: 27000,
            actualAp: 3200,
            actualDps: 3428.58,
            magnification: "200%",
            count: "2",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
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
          enemyId: "272",
          enemyName: "ちびぶんぶん",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 29997,
            ap: 1125,
            dps: 1088.71,
            speed: 38,
            range: 150,
            rangeType: "範囲",
            kbLevel: 5,
            money: 300,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 449955,
            actualAp: 16875,
            actualDps: 16330.65,
            magnification: "1500%",
            count: "4",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "80.0-86.7s",
            delayFrames: "2,400-2,600f",
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
            actualHp: 27000,
            actualAp: 3200,
            actualDps: 3428.58,
            magnification: "200%",
            count: "2",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
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
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 294000,
            actualAp: 16701,
            actualDps: 31314.36,
            magnification: "300%",
            count: "4",
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "80.0-86.7s",
            delayFrames: "2,400-2,600f",
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
            actualHp: 27000,
            actualAp: 3200,
            actualDps: 3428.58,
            magnification: "200%",
            count: "2",
            spawnTime: "150.0s",
            spawnTimeFrames: "4,500f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
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
            actualHp: 27000,
            actualAp: 3200,
            actualDps: 3428.58,
            magnification: "200%",
            count: "2",
            spawnTime: "216.7s",
            spawnTimeFrames: "6,500f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
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
            actualHp: 27000,
            actualAp: 3200,
            actualDps: 3428.58,
            magnification: "200%",
            count: "2",
            spawnTime: "283.3s",
            spawnTimeFrames: "8,500f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
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
            actualHp: 27000,
            actualAp: 3200,
            actualDps: 3428.58,
            magnification: "200%",
            count: "2",
            spawnTime: "350.0s",
            spawnTimeFrames: "10,500f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
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
        }]
    }
  ]
} as const;

export default e34019Data;

