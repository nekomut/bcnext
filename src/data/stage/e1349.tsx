// Stage 1349 Data
import type { StageData } from '../../app/stage/types';

export const e1349Data: StageData = {
  eventId: 1349,
  eventName: "機械の反乱軍",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 349,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "再起動 Lv.1",
      baseHp: 2500,
      width: 5000,
      enemyLimit: 10,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
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
    },
    {
      stageId: 1,
      stageName: "再起動 Lv.2",
      baseHp: 25000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
            magnification: "100%",
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
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "0",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
            magnification: "100%",
            count: "3",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80,
            actualAp: 200,
            actualDps: 333.33,
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
    },
    {
      stageId: 2,
      stageName: "再起動 Lv.3",
      baseHp: 50000,
      width: 5000,
      enemyLimit: 25,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "578",
          enemyName: "大玉（鉄）",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2500,
            actualDps: 496.69,
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
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2500,
            actualDps: 496.69,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2500,
            actualDps: 496.69,
            magnification: "100%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "578",
          enemyName: "大玉（鉄）",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2500,
            dps: 496.69,
            speed: 5,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 150,
            freq: 151,
            foreswing: 8,
            backswing: 143,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2500,
            actualDps: 496.69,
            magnification: "100%",
            count: "1",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 200,
                omni_range: [-600, 200]
            },
            "slow": {
                chance: 100,
                duration_f: 75,
                duration_s: 2.5
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "2",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "3",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "4",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "5",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "1.0-2.0s",
            delayFrames: "30-60f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "009",
          enemyName: "パオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIDAwMFBQUFBQUGBgYGBgYHBwcJCQkJCQkJCQkLCwsMDAwMDAwXFxcfHx8gICAgICAhISEiIiImJiYrKysvLy8wMDA4ODg4ODg5OTlERERERERLS0tOTk5QUFBbW1tiYmJpaWlxcXF1dXV8fHyBgYGKioqYmJigoKCsrKyxsbG3t7fDw8PKysrR0dHa2trh4eHn5+fu7u709PT4+Pj8/Pz+/v7////////NsdqHAAAAQHRSTlMABQsRGR8n5j41R1ByhVuV8GW89XSiz/OWieKruNfF947R/tz/7v7m///u/vL//v///////////////////wD/XBJAfAAABBBJREFUWIXtVtl26jgQDBAIxEBuFgdCCAyYRUZ4wbJkS7KG//+rkXcZ45A58zIPKV50Du5Sdau3u7//I+5+CX4Jfgn+LwTfo93T3j7+kvh47t+3bnxcR0fTjYODsASy94vpuPuvOFoD/YAoF+cEghHvuJr2f07R0lYuy6wz8OBkjHo/pGiNDRydL8FDe/F8/1N7UbOXiPBxrrW/t+10Ou3HBvtYhb8ffsfQfZsvFp/vNj/XPcjiSfbj5kAM5jYOAt8GDm2wlwzY6Deob3XnJ564SgDwmySchffZqRt3B9pw+HTkuU6wOfEGgogdxnXXF/sjhEuv+IphGzVq8OfdS9ePhEVRCIh6Dw6bCPjhuRLH3txN5GJQCZ3IFNSFCPdFzaf21E7d9U121eV6TpCvnkLwuM8uvkrAHVDPKrYfqAI88Q0BWb5C1YnkzA+PJUE/F3Am4ErY6G7iqAoiRill1nNh35m6+f/URHUCESCmKGDI8zzXsd4KB96OReiFC5szOAMPuRA8cD6yd2yND15pRKHbmDylDzSkEdKzkhysECwdF/haFKoIHcuyXLxIy6H14VQiF4Lghr0gPmUhwqs0mQcGQWr6EXAzCDIClHJqpJk0nO23O8UGwaYSVFR6juORfdoTuv3B2FBc8ODtINKQMxqWmXS/UgjQBYGgDYTiqBWtoEJwkcz0SnNPCexhkclbJQZB9RWYjfNjFIdPIXD0vKC1rXIpt9zyq0h4ZWZGlBKPKQTLTy0dlo+qgjMCQckga0OkbSUitgnh2g5KAss7LEaJC4ZKwG2zLI0TlGUUym4gELBxiHYbK39lKQ47xqjmQlwOThY3mdd+THnCIgReHANvsykkoOXio9++QnDOM1MQM60sApEH428iBidF2/b1fF3ob6v1Q00v8doHDs+VbKxUVbCDYd69pnlf7n1V60f4wA1o4IBisAi8WadzShC4c9L7UEFwv8AVAjnCIQDAImUKJXYIBwQ5cA38WIOSSJ0Xr0pwFjwkQbWouG+ZJgDmBpK0ybN9UQutJ6dpF6jo4rIRhWZ6WST8eTlZhlZ0uwQTsCJJ6L6oJbWtfw+OLZOkYiNXVwb8/SJ9hhuOyAllh6lUgVfKYLpr6yjxEYXXKAr3aLFyCN+oLDmtNzv+h8MdKnMyOosweQiWPwfLpw5zV1p1SRok5STIbgkQZZGIEbHAig0EsjyfBCGloSVrW74wOuiDiyWr85lwC+quZ1vTsh35g7vlJGlv1AWzrzWQWbBbQ3Q6rvRxfUF6PmbBsUe65ToS9u5JGxs0EeNNtS0hUgUBM13rXlsSe6tkJ8cYPo2AHx98MOpr7/YphqmPZ05yAqOr5vIdRu+z2UTi9eHhdTLJTg9/XlMkpz8SDy9PF6vyP8cX7jfgU+BbAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 16000,
            actualAp: 2616,
            actualDps: 419.68,
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
          enemyId: "009",
          enemyName: "パオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIDAwMFBQUFBQUGBgYGBgYHBwcJCQkJCQkJCQkLCwsMDAwMDAwXFxcfHx8gICAgICAhISEiIiImJiYrKysvLy8wMDA4ODg4ODg5OTlERERERERLS0tOTk5QUFBbW1tiYmJpaWlxcXF1dXV8fHyBgYGKioqYmJigoKCsrKyxsbG3t7fDw8PKysrR0dHa2trh4eHn5+fu7u709PT4+Pj8/Pz+/v7////////NsdqHAAAAQHRSTlMABQsRGR8n5j41R1ByhVuV8GW89XSiz/OWieKruNfF947R/tz/7v7m///u/vL//v///////////////////wD/XBJAfAAABBBJREFUWIXtVtl26jgQDBAIxEBuFgdCCAyYRUZ4wbJkS7KG//+rkXcZ45A58zIPKV50Du5Sdau3u7//I+5+CX4Jfgn+LwTfo93T3j7+kvh47t+3bnxcR0fTjYODsASy94vpuPuvOFoD/YAoF+cEghHvuJr2f07R0lYuy6wz8OBkjHo/pGiNDRydL8FDe/F8/1N7UbOXiPBxrrW/t+10Ou3HBvtYhb8ffsfQfZsvFp/vNj/XPcjiSfbj5kAM5jYOAt8GDm2wlwzY6Deob3XnJ564SgDwmySchffZqRt3B9pw+HTkuU6wOfEGgogdxnXXF/sjhEuv+IphGzVq8OfdS9ePhEVRCIh6Dw6bCPjhuRLH3txN5GJQCZ3IFNSFCPdFzaf21E7d9U121eV6TpCvnkLwuM8uvkrAHVDPKrYfqAI88Q0BWb5C1YnkzA+PJUE/F3Am4ErY6G7iqAoiRill1nNh35m6+f/URHUCESCmKGDI8zzXsd4KB96OReiFC5szOAMPuRA8cD6yd2yND15pRKHbmDylDzSkEdKzkhysECwdF/haFKoIHcuyXLxIy6H14VQiF4Lghr0gPmUhwqs0mQcGQWr6EXAzCDIClHJqpJk0nO23O8UGwaYSVFR6juORfdoTuv3B2FBc8ODtINKQMxqWmXS/UgjQBYGgDYTiqBWtoEJwkcz0SnNPCexhkclbJQZB9RWYjfNjFIdPIXD0vKC1rXIpt9zyq0h4ZWZGlBKPKQTLTy0dlo+qgjMCQckga0OkbSUitgnh2g5KAss7LEaJC4ZKwG2zLI0TlGUUym4gELBxiHYbK39lKQ47xqjmQlwOThY3mdd+THnCIgReHANvsykkoOXio9++QnDOM1MQM60sApEH428iBidF2/b1fF3ob6v1Q00v8doHDs+VbKxUVbCDYd69pnlf7n1V60f4wA1o4IBisAi8WadzShC4c9L7UEFwv8AVAjnCIQDAImUKJXYIBwQ5cA38WIOSSJ0Xr0pwFjwkQbWouG+ZJgDmBpK0ybN9UQutJ6dpF6jo4rIRhWZ6WST8eTlZhlZ0uwQTsCJJ6L6oJbWtfw+OLZOkYiNXVwb8/SJ9hhuOyAllh6lUgVfKYLpr6yjxEYXXKAr3aLFyCN+oLDmtNzv+h8MdKnMyOosweQiWPwfLpw5zV1p1SRok5STIbgkQZZGIEbHAig0EsjyfBCGloSVrW74wOuiDiyWr85lwC+quZ1vTsh35g7vlJGlv1AWzrzWQWbBbQ3Q6rvRxfUF6PmbBsUe65ToS9u5JGxs0EeNNtS0hUgUBM13rXlsSe6tkJ8cYPo2AHx98MOpr7/YphqmPZ05yAqOr5vIdRu+z2UTi9eHhdTLJTg9/XlMkpz8SDy9PF6vyP8cX7jfgU+BbAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 16000,
            actualAp: 2616,
            actualDps: 419.68,
            magnification: "400%",
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "009",
          enemyName: "パオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIDAwMFBQUFBQUGBgYGBgYHBwcJCQkJCQkJCQkLCwsMDAwMDAwXFxcfHx8gICAgICAhISEiIiImJiYrKysvLy8wMDA4ODg4ODg5OTlERERERERLS0tOTk5QUFBbW1tiYmJpaWlxcXF1dXV8fHyBgYGKioqYmJigoKCsrKyxsbG3t7fDw8PKysrR0dHa2trh4eHn5+fu7u709PT4+Pj8/Pz+/v7////////NsdqHAAAAQHRSTlMABQsRGR8n5j41R1ByhVuV8GW89XSiz/OWieKruNfF947R/tz/7v7m///u/vL//v///////////////////wD/XBJAfAAABBBJREFUWIXtVtl26jgQDBAIxEBuFgdCCAyYRUZ4wbJkS7KG//+rkXcZ45A58zIPKV50Du5Sdau3u7//I+5+CX4Jfgn+LwTfo93T3j7+kvh47t+3bnxcR0fTjYODsASy94vpuPuvOFoD/YAoF+cEghHvuJr2f07R0lYuy6wz8OBkjHo/pGiNDRydL8FDe/F8/1N7UbOXiPBxrrW/t+10Ou3HBvtYhb8ffsfQfZsvFp/vNj/XPcjiSfbj5kAM5jYOAt8GDm2wlwzY6Deob3XnJ564SgDwmySchffZqRt3B9pw+HTkuU6wOfEGgogdxnXXF/sjhEuv+IphGzVq8OfdS9ePhEVRCIh6Dw6bCPjhuRLH3txN5GJQCZ3IFNSFCPdFzaf21E7d9U121eV6TpCvnkLwuM8uvkrAHVDPKrYfqAI88Q0BWb5C1YnkzA+PJUE/F3Am4ErY6G7iqAoiRill1nNh35m6+f/URHUCESCmKGDI8zzXsd4KB96OReiFC5szOAMPuRA8cD6yd2yND15pRKHbmDylDzSkEdKzkhysECwdF/haFKoIHcuyXLxIy6H14VQiF4Lghr0gPmUhwqs0mQcGQWr6EXAzCDIClHJqpJk0nO23O8UGwaYSVFR6juORfdoTuv3B2FBc8ODtINKQMxqWmXS/UgjQBYGgDYTiqBWtoEJwkcz0SnNPCexhkclbJQZB9RWYjfNjFIdPIXD0vKC1rXIpt9zyq0h4ZWZGlBKPKQTLTy0dlo+qgjMCQckga0OkbSUitgnh2g5KAss7LEaJC4ZKwG2zLI0TlGUUym4gELBxiHYbK39lKQ47xqjmQlwOThY3mdd+THnCIgReHANvsykkoOXio9++QnDOM1MQM60sApEH428iBidF2/b1fF3ob6v1Q00v8doHDs+VbKxUVbCDYd69pnlf7n1V60f4wA1o4IBisAi8WadzShC4c9L7UEFwv8AVAjnCIQDAImUKJXYIBwQ5cA38WIOSSJ0Xr0pwFjwkQbWouG+ZJgDmBpK0ybN9UQutJ6dpF6jo4rIRhWZ6WST8eTlZhlZ0uwQTsCJJ6L6oJbWtfw+OLZOkYiNXVwb8/SJ9hhuOyAllh6lUgVfKYLpr6yjxEYXXKAr3aLFyCN+oLDmtNzv+h8MdKnMyOosweQiWPwfLpw5zV1p1SRok5STIbgkQZZGIEbHAig0EsjyfBCGloSVrW74wOuiDiyWr85lwC+quZ1vTsh35g7vlJGlv1AWzrzWQWbBbQ3Q6rvRxfUF6PmbBsUe65ToS9u5JGxs0EeNNtS0hUgUBM13rXlsSe6tkJ8cYPo2AHx98MOpr7/YphqmPZ05yAqOr5vIdRu+z2UTi9eHhdTLJTg9/XlMkpz8SDy9PF6vyP8cX7jfgU+BbAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 16000,
            actualAp: 2616,
            actualDps: 419.68,
            magnification: "400%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "再起動 Lv.4",
      baseHp: 75000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80,
            actualAp: 200,
            actualDps: 333.33,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80,
            actualAp: 200,
            actualDps: 333.33,
            magnification: "100%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 80,
            actualAp: 200,
            actualDps: 333.33,
            magnification: "100%",
            count: "2",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 5625.0,
            magnification: "600%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 5625.0,
            magnification: "600%",
            count: "1",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 5625.0,
            magnification: "600%",
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
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3000,
            actualDps: 5625.0,
            magnification: "600%",
            count: "1",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAEAAAACAgIDAwMFBQUGBgYGBgYHBwcHBwcICAgICAgJCQkKCgoKCgoLCwsMDAwODg4ODg4PDw8QEBAQEBAQEBASEhITExMYGBgcHBweHh4fHx8gHyAgICAgICAhISEpKSksLCwsLCwtLS0uLy8vLi8vLy88PDw8PUBDQ0NJS0xbXV9dXV1kZ2ptcXV1eX59goeDipCMkZaUmp+boKelqrGssrmyt8C1u8S9wsnHy9HS1Njc3uDl5efx8fH5+fmpfApWAAAAQHRSTlMAAP+2RhbOI9aNooI8Ty9peMVZmOP2rrsNR4fXX8r/7BsI9uL/cCvy/gf8/hT/////////////////////////EXdUogAABUhJREFUWIWdlwt3sjwMgNnUeUMFdV6GyoZssPaFQmkpN93//1dfCrpN/UTPMuc5avOQJmmSKg93ymKott/+53vlXv1xr9H/+Pw7QJ1ZlqG1/gxQRqZH0Wz4Z0C76/Dcexr/GaA2cJYTU7tcfh/gbWX4eRpYk0sn3AdYaGaYJ5HbUP8IaE8cniUcd0YX6+8DNHWcZqkIrF77T4CWZgZ5liQMPY3PFe4BtAZzJIosEbFv9oZnGrcBSns0t2iRp0kiGDa66mkkbgJag27HDfMC9JMkZng7G50YcQOgDPu66fFil5UAsMF3jN7glxH1gMWgZyKa7/eVAZIQU2zpo59g1AJeV3PLT3ZfX19FZYGQ/zxAhta+B9BarR1a7EH/awcxSIQQpRVxhI1++zZAgegx+fivrz3EQLAwCFmF4N43oQYw7FnRbi8N2Bcyizx7Y+OoJKSxd6wu1wEtbeoXu7zYgwvBA4JsHh8fN6TaRhYjfaDUA5qQfrs8S/MizzI4Sd6jBHhxZUJOzW67FgD57xeH6KVpmsR+aYF/AGQp1ge1APAAO6bPwfXSBwcvShOmo1rAUkdp8aMv4x+SYxRAcu706wDKaorzPDkRkYifD5lA9YARuOAMcELIEnwLQGT0f2+BA4CzOCkjCYG8AYAsOPoQFAScQ58L5slUinksMmbVAh4GTzg/WCDguTTwNnbI4M2PeeBRkVFTqwWoMySyw/GJA+za9maDsG3biBJ3g3ni3ciDVteiuSjTRsQEtG3sAiLANnJd1yahM6nPRGVl4DTlPAaGYMT3fObbbsCAhYgPjEOBvn4WPiZWkMWMRRLCOWecej6NAoRIGKDNtDoKNYC35dyhqWCU0ohJiaKIhpRCVQgJMnuqcgPw0BrrFSH8LZLgo2mvedCsLWnj2dZnHB5NK0hQvvnY6UzUo2JtUV2o/bUD+waAtDwICDgTOcbv1lBf1pVW82W2RdgnAYiPkbNdzyej4d19QSKGk2cbeT4hxHM3ujZW24uTBTcAsI930y71gQDt/b7u/O/fv8/jL5/LOQBg+7ANNF/eAXj7WK7e31fN4cHU166Fpf8ICT1jtDhbfQl4XU3WW5BvX7+toL1CDkEciNM9H7MuAG1t7eAAIifbcLNcvtRxImsApNTlrHkOeNW2mEMryPOMe+Z8/CqZE8Rla+FRhPVzJ5x9/JRncCdLEfxxYhkvMGArmhNJQMw4uXDCGeBjhuJdWQtF1ci3Lx/Kw2obyOoGVTE0tVqAMjbIDtpJ2cpBYioJck5Nq7JKL7x4Cmj1HQ7TiCyCjMkiDP1o+6LKfR0B59PuKWDYQxnMAnCEIfVDWcFhrDLnc5OkcgtxfAugzr1inyc89D3I3iCSPYB5joV5dh9guZYuiKnnyvLrB2CDRLCk7BBQ2W75YGAE+x0kgGU+6R3T9atmmsr2XraHODT7dXmgrLZ0v0upO+02h+OZiQhlsRDfvY3FgXE+rx8q46LK+pHD9oXwn+VEvFjOLBT8EGRoYnIYbM4Bw1GzpSjKRw+l+5yh6lqwGMzhGNJIhlO+oMRzfOUsDHS9O1bVl20AQy11G9WqxXgNhDCCVgrqkBrggiuncak/b431eouTXS6IdVzVGj1ZXhBCX+BlZnF87b7w+mJ5PsaBgIYcoc73KknAsphDZYbMhFvXlRuLslwjcBcEDMY589cqSYB8kEbEMbFmzfOCdAS0tQ40TjA0xM/6aNj+FrXfkUWZBMRDZmN85dqnDJtaY2q5CLn243NHb/wSffr8uCnFBEdf7KACtJpad6Z3Knm6kOMPjYl2eW/8D6p1Jgm/HMbrAAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-60.0s",
            delayFrames: "600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAEAAAACAgIDAwMFBQUGBgYGBgYHBwcHBwcICAgICAgJCQkKCgoKCgoLCwsMDAwODg4ODg4PDw8QEBAQEBAQEBASEhITExMYGBgcHBweHh4fHx8gHyAgICAgICAhISEpKSksLCwsLCwtLS0uLy8vLi8vLy88PDw8PUBDQ0NJS0xbXV9dXV1kZ2ptcXV1eX59goeDipCMkZaUmp+boKelqrGssrmyt8C1u8S9wsnHy9HS1Njc3uDl5efx8fH5+fmpfApWAAAAQHRSTlMAAP+2RhbOI9aNooI8Ty9peMVZmOP2rrsNR4fXX8r/7BsI9uL/cCvy/gf8/hT/////////////////////////EXdUogAABUhJREFUWIWdlwt3sjwMgNnUeUMFdV6GyoZssPaFQmkpN93//1dfCrpN/UTPMuc5avOQJmmSKg93ymKott/+53vlXv1xr9H/+Pw7QJ1ZlqG1/gxQRqZH0Wz4Z0C76/Dcexr/GaA2cJYTU7tcfh/gbWX4eRpYk0sn3AdYaGaYJ5HbUP8IaE8cniUcd0YX6+8DNHWcZqkIrF77T4CWZgZ5liQMPY3PFe4BtAZzJIosEbFv9oZnGrcBSns0t2iRp0kiGDa66mkkbgJag27HDfMC9JMkZng7G50YcQOgDPu66fFil5UAsMF3jN7glxH1gMWgZyKa7/eVAZIQU2zpo59g1AJeV3PLT3ZfX19FZYGQ/zxAhta+B9BarR1a7EH/awcxSIQQpRVxhI1++zZAgegx+fivrz3EQLAwCFmF4N43oQYw7FnRbi8N2Bcyizx7Y+OoJKSxd6wu1wEtbeoXu7zYgwvBA4JsHh8fN6TaRhYjfaDUA5qQfrs8S/MizzI4Sd6jBHhxZUJOzW67FgD57xeH6KVpmsR+aYF/AGQp1ge1APAAO6bPwfXSBwcvShOmo1rAUkdp8aMv4x+SYxRAcu706wDKaorzPDkRkYifD5lA9YARuOAMcELIEnwLQGT0f2+BA4CzOCkjCYG8AYAsOPoQFAScQ58L5slUinksMmbVAh4GTzg/WCDguTTwNnbI4M2PeeBRkVFTqwWoMySyw/GJA+za9maDsG3biBJ3g3ni3ciDVteiuSjTRsQEtG3sAiLANnJd1yahM6nPRGVl4DTlPAaGYMT3fObbbsCAhYgPjEOBvn4WPiZWkMWMRRLCOWecej6NAoRIGKDNtDoKNYC35dyhqWCU0ohJiaKIhpRCVQgJMnuqcgPw0BrrFSH8LZLgo2mvedCsLWnj2dZnHB5NK0hQvvnY6UzUo2JtUV2o/bUD+waAtDwICDgTOcbv1lBf1pVW82W2RdgnAYiPkbNdzyej4d19QSKGk2cbeT4hxHM3ujZW24uTBTcAsI930y71gQDt/b7u/O/fv8/jL5/LOQBg+7ANNF/eAXj7WK7e31fN4cHU166Fpf8ICT1jtDhbfQl4XU3WW5BvX7+toL1CDkEciNM9H7MuAG1t7eAAIifbcLNcvtRxImsApNTlrHkOeNW2mEMryPOMe+Z8/CqZE8Rla+FRhPVzJ5x9/JRncCdLEfxxYhkvMGArmhNJQMw4uXDCGeBjhuJdWQtF1ci3Lx/Kw2obyOoGVTE0tVqAMjbIDtpJ2cpBYioJck5Nq7JKL7x4Cmj1HQ7TiCyCjMkiDP1o+6LKfR0B59PuKWDYQxnMAnCEIfVDWcFhrDLnc5OkcgtxfAugzr1inyc89D3I3iCSPYB5joV5dh9guZYuiKnnyvLrB2CDRLCk7BBQ2W75YGAE+x0kgGU+6R3T9atmmsr2XraHODT7dXmgrLZ0v0upO+02h+OZiQhlsRDfvY3FgXE+rx8q46LK+pHD9oXwn+VEvFjOLBT8EGRoYnIYbM4Bw1GzpSjKRw+l+5yh6lqwGMzhGNJIhlO+oMRzfOUsDHS9O1bVl20AQy11G9WqxXgNhDCCVgrqkBrggiuncak/b431eouTXS6IdVzVGj1ZXhBCX+BlZnF87b7w+mJ5PsaBgIYcoc73KknAsphDZYbMhFvXlRuLslwjcBcEDMY589cqSYB8kEbEMbFmzfOCdAS0tQ40TjA0xM/6aNj+FrXfkUWZBMRDZmN85dqnDJtaY2q5CLn243NHb/wSffr8uCnFBEdf7KACtJpad6Z3Knm6kOMPjYl2eW/8D6p1Jgm/HMbrAAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
            magnification: "100%",
            count: "5",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "6.7-20.0s",
            delayFrames: "200-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "再起動 Lv.5",
      baseHp: 150000,
      width: 4000,
      enemyLimit: 40,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "26.0-26.7s",
            delayFrames: "780-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.0-26.7s",
            delayFrames: "780-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "2",
            spawnTime: "14.0s",
            spawnTimeFrames: "420f",
            delay: "26.0-26.7s",
            delayFrames: "780-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "2",
            spawnTime: "15.0s",
            spawnTimeFrames: "450f",
            delay: "26.0-26.7s",
            delayFrames: "780-800f",
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "4",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "8.0-12.0s",
            delayFrames: "240-360f",
            baseHpRatio: "99%",
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "8",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
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
            actualHp: 10000,
            actualAp: 4000,
            actualDps: 2926.82,
            magnification: "200%",
            count: "16",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "16",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-6.0s",
            delayFrames: "150-180f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "16",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "4.0-5.0s",
            delayFrames: "120-150f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "16",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.0-4.0s",
            delayFrames: "90-120f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "16",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "2.0-3.0s",
            delayFrames: "60-90f",
            baseHpRatio: "99%",
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
            actualHp: 175000,
            actualAp: 6497,
            actualDps: 8474.35,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
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
            actualHp: 175000,
            actualAp: 6497,
            actualDps: 8474.35,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
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
            actualHp: 175000,
            actualAp: 6497,
            actualDps: 8474.35,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
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
    },
    {
      stageId: 5,
      stageName: "再起動 Lv.6",
      baseHp: 250000,
      width: 3600,
      enemyLimit: 15,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "056",
          enemyName: "メタルサイボーグ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 800,
            ap: 3200,
            dps: 16000.0,
            speed: 4,
            range: 80,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 6,
            foreswing: 3,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 800,
            actualAp: 3200,
            actualDps: 16000.0,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
            count: "4",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
            count: "9",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
            count: "9",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "056",
          enemyName: "メタルサイボーグ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 800,
            ap: 3200,
            dps: 16000.0,
            speed: 4,
            range: 80,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 6,
            foreswing: 3,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 800,
            actualAp: 3200,
            actualDps: 16000.0,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "054",
          enemyName: "超メタルカバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMEBAQEBAQGBgYICAgICAgJCQkJCQkJCQkLCwsNDQ0ODg4TExMVFRUVFRUWFhYZGRkbGxsgICAtLS0vLy8vLy8xMTEzMzMzMzM9PT1GRkZGRkZHR0cUdRNMTkxTU1NWVlZaWloJlgljY2NmZmZpaWlycnJ6enp7e3sD0wSAgICMjIyTk5Oampqenp6oqKiwsLC4uLi+vr7ExMTIyMjU1NTe3t7m5ub09PT///8aBZK7AAAAQHRSTlMABRAdKDT/1+g9VZlKXmvffLvpdYvN/rCf/7fbl8Tx/9b+7v///+n////t////7v////7//////v////////8AzrdoIgAABPJJREFUWIXtlmtX6joQhne5KQgIGygUpSGakB2SsHNp0xt4/v+/OmlBrSjqWeer73ItA+k8ncxMZvj1z//Urx/AD+AH8AN4BlxWs/nJ5jfUnE5bZ195De/79t5ku1u88cFrTRa97xOay3S/HTVq9v3lTi0aly3O1N8WRb4ZvLzR669tYZffBnjDXZEUyapdrhtOraUt8v/ggTdRRWydRas7nC6cbh7SRKP5ZND6PAzeadsbydxGsd3MZ9soSZNYYAyQ1Hq3GjQ872NIo9nu93rdVqvZbLZukI1NFCkAbbHf7w+HTAGg3TLZTEejwQc14nWnq/XGab1eLZezEBBlSgLVsfMkSdNYwUDneZGyMAznvW63O6hzGsO1zvaH/b5w0bcREhIDzLVDuL+TFBR5nkeEUQg369vbh4fFS601Jpv86elQmpeElHCtJZemslZCViCDZZ5njBe5IVpBlRbb6bP/g03xdCjyk7KUEP7yYokeH0VkjJQwKgHKMmWUiRITq/EJ4LL8al4SCNMvrtM/f/9QYwwnJMnyPI6171ObRdDHcvyc9W1et89zRl7Pzh//PnL3UUF93LTQ92WKOoHcjJ4diPK3Ush5cEQYTRHVLhKIp6ddGzFuMTNyfgyiN9ymZwCLpFDPLhhd2dPyAM9ndMWVpg9D71gBK3Nmn2ccSxcnc0oDVxyQ5PyZjI284wFklp0TLOKlra4ImkHAz+0dQd6Ul6sx3an3m7mBLhGa68gojiGLrWTKlWSaJomN3ZdSShZOSg/6G/3Ou4pAIKaMEQSxiDOLQYAphggTAkBAyG8U61UZw8YijnD67ghlNWlOCWUycrsphRzrQ4YwiDSgyO6m631yX56guy40OU9CLVDH/wpwSdk+xoI4pzgmq/Z9tCtbpDfZFZK8D+JbpQRLwbGiVHKECMWzvsvdfXkZ2+PNNvzwCHXZAHAIXEsRUgoK2Z17t9euLnNrOOyPHr4CKN+HnU7AhJBCuDjWe6PrT/3NF4CMdPyg0/Gpy53kATtV4Iu+BNig44NOp4NLAAXsrvu2m/U2X56g8qADKwAi8+Y7wGeELKOdo1AJwAiOvHPA50dIgqP9MQYQhb2zhtxfXyykSrF/AjCXRAlxGYJmfcC01x/dhVeZIwAwIstyQnd9rzGd14Z/a2U/BcgK4OuCUI4AoeG81V3vXgfvr8a7jvZWojQPQPEkAsAkZng3mejkvgZYqOrBS7kQHR+5llwUKghUDIFMVqskr416bySOgAuxjBHAKADUtQOICQgQ8n2CZ7UguDy60ccJvhCLRFKu4qTqRVoyx3GNJaz9fmnfMQIhwUBfCoPzLY21IK6KIECEEASC8Ws9NseACao44pcKKo2FewUgQinNheuzgvHaGRoLYSM3zTlQZ2E4AlNDAeTKSB3HsbVuPlijyLQWxcF2n5QDBAbY1BGZqhJsIaLMxGn5U8P91jgc9ol8GNevZGuVF7EjKBIERJoyXmXEtAC09CGTLmyYChMbpVwxbrfr+ahdv1GNqTkk1RRT4XwGcCmEgtvxOCwTk2WWjW9C5po0FwLOe/128+xC9rf7PK4G4cNwtLXPy2ZraZy5k5i2V3Gapm65Pb/NVR6WQvJK4c00lKpSOO0NxpBWAvPhDB2X4ah1/v5yQI9ns6tbp+vbq+vfR7nl1e31SbfV0j1wdTW+Gb6UwL/y1JabMPDtoAAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 8000,
            ap: 3000,
            dps: 1914.89,
            speed: 18,
            range: 170,
            rangeType: "範囲",
            kbLevel: 16,
            money: 999,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 3000,
            actualDps: 1914.89,
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
    },
    {
      stageId: 6,
      stageName: "再起動 Lv.7",
      baseHp: 400000,
      width: 3500,
      enemyLimit: 50,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "057",
          enemyName: "メタックマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMEBAQHBwQICQYJCgcJCwgHDQEJDAgODwkODwwPDw0TExAZGRYcHBklJiIoKSUqKycsLCsvMC0xMi4yMzAzMzFAPz5DQ0BJSkdOTktUVFJUVlNYWFZhYWBkZGMnlSdoaGdxcW90c3F4enZ6enl7e3oGzgWCgoCDgoIC6gKLioqSlJCamZmgoJ+mpqasrKu0tLS5ubm/v7/ExMTJycnV1dXe3t7l5eXs7Ozz8/P7+/v////3kGlkAAAAQHRSTlMAAwmWqL8YaILfDx//KzZATGOc/Hhur8mHoZjustz+nMLezf///+j/iPP/4f7////+8f/+/v//////////////jUsktAAABFtJREFUWIWVl4tyojAUhoXt2q6uiq3WG2WtoqxrNkBIyAVI3v+tNqB2p5VrOtMZZpLPc/5zyUmvV7oGo3HfuH2M5r9/zwflGyvWaH0+25MroW/jJAnnRv2Rz7+/woJH9vBKO2ZKpdt+FwPeGWP0aA3H44llTd8SDdgNOwEoo9Rd7M7HzTEMgVD8PDc7APp2pC2AiHMCIqWyNEOrLh70DOstYhShmLEgkFmwD8Ru1AXQG24J8/d7j8Y+lGz/d0+jTlHoWSfGvD9/94QhT/L9nz0XdpdEMJZIG19YEBySNPZxlp27+NC3iRYx8n3gOi+OFxAhZWh1AEyOOozI0yfdnz9fIhIAlMSz9iIYM0gJACyVKomcIFNSIBDb7RPBfD74XsBjqZTiDspUGiQR7JDLozd4cFPhMcEigCBEAUg5OE5aezCPZAKwFh/6kZAZw4RhgMG3toHsb3XxJL7PkjTL0lSbAQESEi3alpMVaudlFkMA9QLAj3I5FdlM28XBXHNVLJkKzpNUyssnc1bt4jA+Z6psce+9VTIaM1J6Xgnv1MqHQsKylTjOcxsfJmdZDki9YNsiDsYszvUrBcSnFgU1sAsP0ns/Ug/DZbMP1xhE90qmrus055Ixx/nmDPJ7wCGIjo0+DGxRbAZlLhAerZt8GF9ikMDsTkctIo3fGnLp6oHi/n0c0oPnek31YF48UCwoAbgg4sGqvqaHu4vpZYDEIzThDfVwlUARdHdeAyjjvKEerPCymUT3AOFh/3CorwdjiqsB3HEPPke19WDMaDUgdlAcC1HbW41bMyoDEK0B44lfJ4JpJ9UADBnFPnTrROhv06u5JVGIIPJcgOFrzQVzS4OyPJCB46EoFrWZMLp1o3uAlBBGhQh1XWX8AfDlV0LmYXZVsRrw0Q8FvGvtiacnJoJ8332qBhR3Ur5K+gH3YgR0KmG4qgZMr5ksMyi+AoijqznS9cS2zQAlffoVELxAQihlCd+1AKgIfW7tUp42OJ9/MUZvbQDx4YuK2W6BWaxTyYOtAGzDPhmgku0r8vVpzPmxGvARBSU2uQiCEoxJTHVIhP3qeL5uqzw5VwN0Jl4JiSu038D1DvrP1S2Wr58BjanOBFFjga4F9T8RdDARJTGJ84k9ni2RjgE7vR431YBrNWaZSkCaB1NPvEwPWNqF0JoFAFCyHU2/VwN0V6dEZqdQcpDbwnT+MwKo9uY8mXmL1yBYGoOaYjLX5P09Yyubx0Eh5WL569c6fzLpWXu2eRzZb2Pdt6oBxvR9ZvPQso4wypMnnBqm2d+lxZvLeuob48eGWXH0NLTOu5FpLfIx4/LQKqa2xDZN3cqMpiHJMHvmdKr/rZhOnniZ7y/uS954LX8RQwO03+PiI+8SdNnpxXOxAM8uv5qLgGvaUCngmSlxu4PMNev2XukV02Z2tm5WW2G3F1Ou5TTEq2H/usZbnYD9wcBsqYM5fnx62Gy+/18/Xn58f3j49vQ4vkf8Ayotbiv3wISsAAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 50,
            ap: 999999,
            dps: 1578945.79,
            speed: 3,
            range: 600,
            rangeType: "単体",
            kbLevel: 1,
            money: 550,
            freq: 19,
            foreswing: 8,
            backswing: 8,
            tba: 6
          },
          stageStats: {
            actualHp: 50,
            actualAp: 999999,
            actualDps: 1578945.79,
            magnification: "100%",
            count: "1",
            spawnTime: "1.7s",
            spawnTimeFrames: "50f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160,
            actualAp: 400,
            actualDps: 666.66,
            magnification: "200%",
            count: "1",
            spawnTime: "1.7s",
            spawnTimeFrames: "50f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160,
            actualAp: 400,
            actualDps: 666.66,
            magnification: "200%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160,
            actualAp: 400,
            actualDps: 666.66,
            magnification: "200%",
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
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160,
            actualAp: 400,
            actualDps: 666.66,
            magnification: "200%",
            count: "1",
            spawnTime: "63.3s",
            spawnTimeFrames: "1,900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 160,
            actualAp: 400,
            actualDps: 666.66,
            magnification: "200%",
            count: "1",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "5",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "5.3-13.3s",
            delayFrames: "160-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "5",
            spawnTime: "15.0s",
            spawnTimeFrames: "450f",
            delay: "5.3-13.3s",
            delayFrames: "160-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "5",
            spawnTime: "31.7s",
            spawnTimeFrames: "950f",
            delay: "5.3-13.3s",
            delayFrames: "160-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "5",
            spawnTime: "48.3s",
            spawnTimeFrames: "1,450f",
            delay: "5.3-13.3s",
            delayFrames: "160-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "5",
            spawnTime: "65.0s",
            spawnTimeFrames: "1,950f",
            delay: "5.3-13.3s",
            delayFrames: "160-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "0",
            spawnTime: "81.7s",
            spawnTimeFrames: "2,450f",
            delay: "10.7-26.7s",
            delayFrames: "320-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 2000,
            actualDps: 3333.33,
            magnification: "100%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgICAgICAgIDAwMDAwMDAwIEBAQEBAQFBQUGBgYGBgYHBwcICAgKCgoMDAsSEhIXFhYaGhogHR0jISIjIyMsLCw5NDQ+Pj0rTioVZRRERERQUFB8Pz4IjAdYWFhkZGQCvQFxcXF7e3u2Y2KCgoIC5QKOjo7OfX2ZmZmfn5+pqam1s7O+vr7ExMTIyMjNzc3S0tLc3Nzn5+fz8/P7+/v///////8mrWquAAAAQHRSTlMABhAZISs1PktWXoCs7MBq3Z+K0XeVtebIvf7T9N7//u3////+/f///v////7//////////////////////wD/0beseQAABgFJREFUWIXtV2l3okoQDVtEJbJEQJQtoTN0mmEY9n38///qVRsX4ph5znlf3w1yhGPfvlV9u7ry8Os/4uF/gl8Pd4BhH2WRPX7n55o2Y+4ZdgYryIaiCofhnKg7/k5m/2q8qO58byMydHrZ8rPUX/8NATc3fJJGzpp7eODXO1z0hb/k/mL8wvKTPEt8nX/g5B2uhrHwtfsJ2IWFsrou8lASGNHC5TCOJSW7E4xooLypqzzD1ozX/XwY92OFPjJ6D3jNz9qmqZKYOIu5Fff7/X6s7ycA0aRpyrKkSVBVEEBRIunxTiPwmh3G5ADsmk8eSSiIqyyFexgYbrHZuidsAa7rAeDr8z0M7Gy5sgMcxREAJMCFkeuROI4j7Oj/ZmeGm0smSor2A01V1lVZZDiI277vG/DFn/PACGvLj4qu604MDVxlnuIwH2AlutT5sx259Q5lbdfWn1AVZY5JM4IZusj6UxDsYoOKvmvqazRNEqZUwlA4i6+3FCNKftbdGA8MeUgOdmr89ZcxMIL6hIuyqm4QFEmImxEY2gkBw/H8VA4rP29xXpY3xtdZFIYlJGFCwPALXVIXPDMR4Ich7IEb46syJyinBJcQIOG+Z6/m7EXAjkCya7oE5yia5sjXJCgbpjlgZhb++f3N1s87jFftrE9Q2rbVJYwScnIiSIax74ozwXz3vfj53bMeTxHMrLAZawxBlGl+HJ9HGMfFgSBFcV8nBDtHAnaxe6MKjBMBvIi6/VDiMCny4mPaAr+8vr5EZfNBUBN4NI9WZMSN/fbmmWdn8ksHrAJOwUFUHCPPXr79eH+lxamukiDOEX08FTZhuTLNJ+lszEfVL0bqtRIHOK/opHX68v7jxzeUQXUroiDK6OOryp+WUVwvjQvBzPAr6pRxqKMAJSC7LEHB+/trSBWUCaIK3t9t7VxaGZZfrNanR6ijzf6AocvCgORlmhXkmIOmbrMwaeOX1xdzamVG0CWROa7KJmw/CPZjX5IAJ0kODiZQSbIKjJGGcZlijP2lwF38y86N5YcEZm2eCSCMNgmCKKc+yBJM0jSJsRegAGAb2lrkmLMEzfg4gBlZORGMY1dVFVShMI6hntELPqG7RXESoa3t+xv5nAdWNLRDoYQQcHcUMORhEMK0OEAkLWlNgsJUE4+UVUFcXOTIks9B8MvjdoCz4EQwNuA4XHRVnNT9ONJKBLLKMAAdQVgMferolzzOJP0gYUKwH3rYUf3QRrQQnvNS0oDiatgPhS9dVoJbrxbcNUGTp1nX58Ghkh7/gBaKLSiCEH31YSpBpaV6StAlJMm7PvPSQwTX6BNn+TCRIK9k7jNBX1VdT0/DMKuaK0CtL5AxnxAwjyo19JRgT2sP8KRBgD4jpDd/s/jUKbDU0MwngpMjiwS7bkgugMNWUrU59+lsOBgaehp8TXAwNUJ5dwHkfybw1ycDO1+pmmHeINiPLcLNJLLyZqfFzAzTR+5Nggbh9vI05M6tXo8RdySLPNKN06EfUzbBNDVAcKvb5NZ+lgQuri+x9sN4VEAJLl7Kbx6NvI4ztN0GhyYipoiipKB6Dgrai4W+UCCoOA+3Ww/2CqFNCawbRihuD1N6QZydkRJbv9HlQFeXJCHs0zQuoDdL47wsYC+nPURAXC+Ywt1pvzMwc8sn2MNwEIBzoT+Fe5sjWJWxTuL0ExLi3Djfublq7UxUQGty8HtNu9SQVqihH67Q3Ow3WX620J0IiucRZRYhVF0Ppqi+aJkZdib5ODoBsuh5UfobII2br3oc2FPm1qUNpQsf21EU5wDbpnmkbwPPtR1L/qpnh3+LVDMg2H6yUWBKa/kIbWXjmHhP0P4iRZVF/usujRU3OCc7aYeQJbLMEVC4cUZ2uoUzDLXrT30mIxgo8vW5atvqRCe0Lp6zFGQH3dxJ59Ewl6A59kaeaaaiPQoXzI0nY07vK6gkX0hghdl8IS8l5elZklaK+bya4llZSaq6UlaavBAfb/WJjAAtG/zwWTEVRTGfrmCa9LWiPD+vDHV5s9elCuT1eqnpukohfQJ9o+uatlyfFfwD1VLLUg0TH44AAAAASUVORK5CYII=",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 2000,
            actualDps: 3333.33,
            magnification: "100%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 2000,
            actualDps: 3333.33,
            magnification: "100%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 2000,
            actualDps: 3333.33,
            magnification: "100%",
            count: "0",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "23.3-40.0s",
            delayFrames: "700-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 7,
      stageName: "再起動 Lv.8",
      baseHp: 550000,
      width: 4500,
      enemyLimit: 16,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "001",
          enemyName: "にょろ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 450,
            actualDps: 364.8,
            magnification: "3000%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-10.0s",
            delayFrames: "120-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-10.0s",
            delayFrames: "120-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 450,
            actualDps: 364.8,
            magnification: "3000%",
            count: "6",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "2.0-5.0s",
            delayFrames: "60-150f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
            count: "6",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "2.0-5.0s",
            delayFrames: "60-150f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "001",
          enemyName: "にょろ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 15,
            dps: 12.16,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 450,
            actualDps: 364.8,
            magnification: "3000%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "6.0-18.0s",
            delayFrames: "180-540f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "18.0-54.0s",
            delayFrames: "540-1,620f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "338",
          enemyName: "純金倶楽部",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEDAwMDAwMEAwIEBAMIBwYJCQkLCgoMCgkPDQsaFxMnIQ8kIRsoJBQ3MRw6NzE9OzhFPiRDPzVJQy5SRRRUU1JcV0phX1pqYTx8ZgwUnhNuZkeFbAZwbWKNeSyDg2aDhW+pig+PiGu0kgakkEGhlmubmpfHoQi7oTeroHXVrQqtqaLKsUriuBDIt3K6uLfvwQjTxZDmyE7+ygTHx8b8zyDr0mv+1Tv+3mP/5YTi4uL/7rGCbRzUAAAAQHRSTlMACLCQ5xBbyUsweR32JkJzW6aG63Ssl8//rPHVv/3//t3n/03//t70/v/+/f/9/v/+/vz+////////////////1wbNwwAAA8lJREFUWIWlV22XmjoQlu7iIhRkUXBVKJgSeQ8EIiHAdv//v2rY3nt79vZUlzie4yfnybw8M8+4WMyxlTzr5x9NkxYLZXkHgLKUF8rqDgB5uZRVRZbEAbQH53h0LbEg5KWiqm7ZlV1zNL4LAEirpbLrfoTfwq5xv+tCiRjnHxNAkxT12bUEALYFjz9Mk5xi6NlCAEXXlWV5ib3A0QQAzCIvyuSSgJ2pCxFScysUxxQFpoj3ZIabERzZhjiVVgFhZ13YfUqCMveeedSDOwGMiLZ78QrwRkYUO3cASBai1XaWx8fX5D2h+adJIOlL1dk7W+N30fQzo+cb22B6ctp9kuHsDmHadc15/x9xzJwS9/oQyKqp6c/mQnfOaVp2kzWHjSr9k0FL0Y0a6sfUtVPbdMsy7ZoJoUn98GStTG3aB4xFV0sgy/p5bOv+cEqKMG2qqmhC3/fzvtidtpK2bxk7XiOytN7bp5ENOV8aKC8rTHERhk03MlbhYO3UbLzOAsm5tP049kXV1ATnEGQUI3B5fRszCMEhYcN4PYPFumaMjXVPckxRXLUtoxRyvzqsL5d+YK8suD6KxqmllMX8C0PQDuPb20hBzSioGKOMvo7IutoD3TldGCWgpRmI/ZhQNr7mCaPYI5Tb+MaC6yxa7eqRBw0wBhXI351QyMNB7wDD2xBdD4Cr5wbxX8IceTAcJn8ePCE0897fH5F9axUrxwv3QzGBfti/A0AAPDRFMIwDdm+KomS6UYaiQwZaWNS8FZQQAnMCCH8/2yi3/Llp5tpam4EHoJ9kPHOCp5rCpO/zl+dP7zLJ8l4g4A2hGEDo54gA3/d2n1d1XQ2g54V9XwHORk5CPoQZvjHHHwDsDIc4i2OIKeB9gRWLdsGMCLgCwXh45SlwWiLOZL8OjNVqzjLVn5NfAD2fgjL2DrcY9Ietq3Gc2Ff4AGaZvZx7FmluPwXQFhAREtmz1VCyCj4UjDeBMBxYs28JfXsehrYCALX1WUDMdfcytDz5DMdHxxCQUrMYibs+EhKYupAOGgHOLNnJsS0o5HqAo7XkYCIKoJ1Ztpa27R0AJDI5gPAlILv5wVhsKyRyzf4CSLiAbasbIvJ3k9yGz76ZR4YowL7h5TPzGyJwDaB0OJ3iGSvo/wDp+h1A9CD8F0CUBrwLqcknOhcGWJ14BPIOz9miH0wJm50u2wg+C1ZROzahvbKyzLO3pshtrx270D+dfODBCuxmLiRJV5bqpmn8MH158fjn69PDw4OqLpVP/m2X1S9Pj4+bzebrb3vk9vTl4a8l/Ql8w5PhZMcyLgAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2400,
            dps: 4235.29,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 3,
            money: 540,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 3600,
            actualDps: 6352.94,
            magnification: "150%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "032",
          enemyName: "ダチョウ同好会",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQECAgICAgIGBgYGBgYJCQkKCgoLCwsNDQ0WFhYdHR0dHR0gICAhISEkJCQkJCQlJSUlJSUmJiYmJiYyMjI2NjY4ODg5OTk7Ozs/Pz8/Pz9FRUVSUlJUVFRaWlpgYGBjY2NnZ2dsbGxtbW13d3d7e3t+fn5/f3+CgoKJiYmKioqMjIyXl5ednZ2jo6Onp6evr6++vr7CwsLLy8vT09Pc3Nzj4+Ps7Oz19fX5+fn///+Xho0TAAAAQHRSTlMAB3YVvtqMoB/zXyk2Qw9RZHOOMMna9aCyvYVX7nWdy/+0/5b/88rg///Z//D//+LE//L/3fn98fz+////////oApklgAAA8RJREFUWIWlV22TmjwUNcu+UIGKu1t17cpLRAgi2MAmhRCS//+vnov26XSmUxX2zugnz8m5Lzk3TiYDAtnGkJ//FZazWptoPN64S0oWe645Eo+mPu8Eb1hojSOw3riSeFFrHn5/+fp1OIHpSy2DL0zV/OfHj+0Igr3SitO2aTrBDt5wAuuoIZSqanrYb8eksO96go7mPtRgOH6C1hzwWtXJbAT6JCHkSksWz0bPkhlKzZYjp6APtAUCdzx+YoCCcvoJAuiDOjqfILCPWu0/UYKJy7QMP+EIaN1o4d3eQ4QM2/nzPCOWut7cADx9mdPn1du397e59ftI+6h0eXkKTTAse4oAPvd3JMvSNNv5U+P/DLjuLtcQPftz2/Mtw/V3aX4Oslg8midVFmRwpQTIq1lSlnfL3/Asy3Bx8GzXOd+li3No2rYnZNuxd5L12P4T4AhXqvaT0JwduytT4Cb7Q9tyQcgJnfUMOOccjIzxwyputW7DSxm4XHW6q1I4P8tTHOAUqhgJrUVe0IIC/spNco5Ktori/ngSRNCBXkKlFeWd6t3sWg8svwGteZTnaRRE2bmIuNaykGe8rteXMrBWB+gzi6KcQOUCcqpjRJVu6C98t7cvCTCXJZimJDjFOcYn/TkhkHlTnfGKbS7fA+u1UrKhmAQ0Ss9DgDm4aP2LgHtXrNjyoQ1tQ1LI4JRABlpoIRp6LkB4bakiJyx5Xe8wZgVO+2nI4RtXbSFBP9/dYOaG42427luQU5iCEwEUhKuqEqIqbiE4x3QRQBbnacARaTtJCWH58lYrQvYqiEiQ5hkhNMI4yqRqW1XebKbG47cIUxpFpBItzGPaz1JVl/NbCSaOT6Kma0WrlEyhEiSVbLle327nyFlhoTrZwdUgKcz1gib2ZNA+dBKppAIC2o/Ebrl6HrZO0ZypPgSNCsYOa8McuAtsMD+luzqvWsljd+gyh4Gs4ebVRVELFq+twfjNse5ElRWcHcL5YDhcKdjAZfjKusZzjDFPEWsvZWy4Zcu/j0BP+kcEE1v0chQ/RxKgsJVA8KHHE8hPEmxlu0XWUX28jCUQ8AaA19DYtwxaCzabmDG0YixBDd5hxOLiGrwUmxrEG/HlLXSRgIN4I2a3O9BfBOGJYPSTdsOAwBxPgDwO5bOPownMuAEFc8aXI4toJfLgolnZJoOt6BzIa3jiOomgibeZjfiTijzBs8MxTYuU14eVhdAAIchypnevlUjzmsJajNJgcf/09PT4eDd1btKCpk/3Dw+L9/fF4suf8fBw/+T8S8h/jtWr7rL2CkwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 340000,
            ap: 7200,
            dps: 12705.88,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 680000,
            actualAp: 14400,
            actualDps: 25411.76,
            magnification: "200%",
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
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
    },
    {
      stageId: 8,
      stageName: "再起動 Lv.9",
      baseHp: 700000,
      width: 6000,
      enemyLimit: 20,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "293",
          enemyName: "墓手太郎",
          icon: "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",
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
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
          enemyId: "309",
          enemyName: "ヒツギイヌ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 40000,
            ap: 650,
            dps: 291.04,
            speed: 4,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 300,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 1950,
            actualDps: 873.12,
            magnification: "300%",
            count: "0",
            spawnTime: "15.0s",
            spawnTimeFrames: "450f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "revive": {
                times: -1,
                duration_f: 60,
                duration_s: 2.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "600",
          enemyName: "トロリンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQMCAgMCAgMDAgQDAgQFAwcFBAcHBQkIBAoJBgwVDBsWDB0YDiEjFC8lFTMmFzMmFzMpGTcvGkA/I1M9JVNGKV9JLGNSMG5cNn1tPZF4RKCARqqESbCHSrSJTbeNUL6RU8OWVsqaWtGgXtemYuGrZumwavG2bvm5cf66cv68dP/Adv7EeP8iGKcaAAAAQHRSTlMACg8YICsyOEJOWWZseIGMlfD23Z//w+qo5L2x0/T+3fn/ze/i///i//P/////////////////////////////i0f0MgAAA9hJREFUWIXtVmtX4jAQLaIiKAiKgMCCyBZrSvPoO2ke//9f7aRFkZUF9Nue4/0gHMy9ydyZzMRxfvCDH/zgB/8LJvMW/L0ajy++x7/0BOo49V8pm9a+JXDlGxN0mm6eut2rq/rZl1UavpGavXoI+T5Cry+/B7et+hf49ZFnikK/wWiRUbQcd5pnp/FrAz+URQlZfUqljUgDb969PEWg7xtd8rQupN5IwTdjOF0Nro8ZUmu5qiKpwF0sPC6Kdygj82De2XuM2vnVzW13NH5+8TNVLdfUnS18XuxAmdx/GjR3yWeNzmT+tEL+GuPUGPW2WCsBe+4KFDKhOHBHWz9rzcnvdRJjyihjlIQ7BPk3vSgEI4SFi/bb5u25nxdGZ6QCztQnyi6fwyqGVqOK35oHEtIsBS3ZmKXiML+QglEaeLgSuEXc5FEq4VcM/CgXR/YHqBTjdZBMLL+NjM4xDu3BIkojrj6HvOcMeZzk6hn4F080sXqJqtza49j+MwD0CwhM1pSInMSiJJ5Kr2AFGm5oTefFl5gbmFdwcM0Ijk8Ke69AbQ6pswZ+T+DFaaxCEEiO520v9LNzgyCCSHyKQChpbT4cmpDPTp9QqLvPy1QWJWkcpUIdKEqVdZ1nwcWebVQOFQ2xEZodUDBBy1lKoMMJ/tJQMT7hXhnv0llaqsxY+lEBQo/eBf6dIZ0PHGdqL46KMNv6IGSabk9ACP+HkcJ411BHxBRKUEy3kaoMM5mRrcB+E4TBY7gJN9AueUjJhxOoHEeKkyMhSMOGdmQ2FwwKAUqh/LHyS+YcWhbd8N/aqVCb/5auGelPy5F79hhQW8ypvcx8UxFgIsRBrA1QCFWWhco4rBFacjsp/GV301DbbtmGcutlElQ5E3HEZYihEjKl8rR0UbP7JcjrZDldsHTVOX9vx1MU4irbKoEPKaU1gHIeJ1leCMGCMjz1VO/GMKqeGk5zcH/7YRw0hqAAF7oUiJSIchDAJIKLUAjrKLEZUpDzFox71i933RkojUd7oTIN5UtIaJsDpNWaLzkHPVxmSMddp/64Xs/3zffz+4ASN842voMAD1kOXZ6RiBHGUKTLsnfOb9r73wddxNhi4QcMhhK2CbEpsZ2bYEZhBiKjDDr0Tmq5LPQmj7OVB3ORZpv2rDLKAuTOBs4k5GxygO9czEjoNUcIzebTO9fX0K/Bb71euTPX9/tOvT/uH3zbnA1x7HbGfuINYLQ/rnmO4Hlklv2+G8erziEqvIQur29Hw4U36909uA9bxIY83PVmaPUw6Lab50cEBvfDXg8UPmC2eACBXm84nRwS+APRJZVyP9ZC2gAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 390000,
            ap: 38000,
            dps: 34545.45,
            speed: 15,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 550,
            freq: 33,
            foreswing: 14,
            backswing: 17,
            tba: 10
          },
          stageStats: {
            actualHp: 390000,
            actualAp: 38000,
            actualDps: 34545.45,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-waves": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "revive": {
                times: 1,
                duration_f: 200,
                duration_s: 6.67,
                hp_ratio: 50
            },
            "warp": {
                chance: 15,
                distance: 1000,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "600",
          enemyName: "トロリンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQMCAgMCAgMDAgQDAgQFAwcFBAcHBQkIBAoJBgwVDBsWDB0YDiEjFC8lFTMmFzMmFzMpGTcvGkA/I1M9JVNGKV9JLGNSMG5cNn1tPZF4RKCARqqESbCHSrSJTbeNUL6RU8OWVsqaWtGgXtemYuGrZumwavG2bvm5cf66cv68dP/Adv7EeP8iGKcaAAAAQHRSTlMACg8YICsyOEJOWWZseIGMlfD23Z//w+qo5L2x0/T+3fn/ze/i///i//P/////////////////////////////i0f0MgAAA9hJREFUWIXtVmtX4jAQLaIiKAiKgMCCyBZrSvPoO2ke//9f7aRFkZUF9Nue4/0gHMy9ydyZzMRxfvCDH/zgB/8LJvMW/L0ajy++x7/0BOo49V8pm9a+JXDlGxN0mm6eut2rq/rZl1UavpGavXoI+T5Cry+/B7et+hf49ZFnikK/wWiRUbQcd5pnp/FrAz+URQlZfUqljUgDb969PEWg7xtd8rQupN5IwTdjOF0Nro8ZUmu5qiKpwF0sPC6Kdygj82De2XuM2vnVzW13NH5+8TNVLdfUnS18XuxAmdx/GjR3yWeNzmT+tEL+GuPUGPW2WCsBe+4KFDKhOHBHWz9rzcnvdRJjyihjlIQ7BPk3vSgEI4SFi/bb5u25nxdGZ6QCztQnyi6fwyqGVqOK35oHEtIsBS3ZmKXiML+QglEaeLgSuEXc5FEq4VcM/CgXR/YHqBTjdZBMLL+NjM4xDu3BIkojrj6HvOcMeZzk6hn4F080sXqJqtza49j+MwD0CwhM1pSInMSiJJ5Kr2AFGm5oTefFl5gbmFdwcM0Ijk8Ke69AbQ6pswZ+T+DFaaxCEEiO520v9LNzgyCCSHyKQChpbT4cmpDPTp9QqLvPy1QWJWkcpUIdKEqVdZ1nwcWebVQOFQ2xEZodUDBBy1lKoMMJ/tJQMT7hXhnv0llaqsxY+lEBQo/eBf6dIZ0PHGdqL46KMNv6IGSabk9ACP+HkcJ411BHxBRKUEy3kaoMM5mRrcB+E4TBY7gJN9AueUjJhxOoHEeKkyMhSMOGdmQ2FwwKAUqh/LHyS+YcWhbd8N/aqVCb/5auGelPy5F79hhQW8ypvcx8UxFgIsRBrA1QCFWWhco4rBFacjsp/GV301DbbtmGcutlElQ5E3HEZYihEjKl8rR0UbP7JcjrZDldsHTVOX9vx1MU4irbKoEPKaU1gHIeJ1leCMGCMjz1VO/GMKqeGk5zcH/7YRw0hqAAF7oUiJSIchDAJIKLUAjrKLEZUpDzFox71i933RkojUd7oTIN5UtIaJsDpNWaLzkHPVxmSMddp/64Xs/3zffz+4ASN842voMAD1kOXZ6RiBHGUKTLsnfOb9r73wddxNhi4QcMhhK2CbEpsZ2bYEZhBiKjDDr0Tmq5LPQmj7OVB3ORZpv2rDLKAuTOBs4k5GxygO9czEjoNUcIzebTO9fX0K/Bb71euTPX9/tOvT/uH3zbnA1x7HbGfuINYLQ/rnmO4Hlklv2+G8erziEqvIQur29Hw4U36909uA9bxIY83PVmaPUw6Lab50cEBvfDXg8UPmC2eACBXm84nRwS+APRJZVyP9ZC2gAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 390000,
            ap: 38000,
            dps: 34545.45,
            speed: 15,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 550,
            freq: 33,
            foreswing: 14,
            backswing: 17,
            tba: 10
          },
          stageStats: {
            actualHp: 390000,
            actualAp: 38000,
            actualDps: 34545.45,
            magnification: "100%",
            count: "1",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-waves": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "revive": {
                times: 1,
                duration_f: 200,
                duration_s: 6.67,
                hp_ratio: 50
            },
            "warp": {
                chance: 15,
                distance: 1000,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "600",
          enemyName: "トロリンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQMCAgMCAgMDAgQDAgQFAwcFBAcHBQkIBAoJBgwVDBsWDB0YDiEjFC8lFTMmFzMmFzMpGTcvGkA/I1M9JVNGKV9JLGNSMG5cNn1tPZF4RKCARqqESbCHSrSJTbeNUL6RU8OWVsqaWtGgXtemYuGrZumwavG2bvm5cf66cv68dP/Adv7EeP8iGKcaAAAAQHRSTlMACg8YICsyOEJOWWZseIGMlfD23Z//w+qo5L2x0/T+3fn/ze/i///i//P/////////////////////////////i0f0MgAAA9hJREFUWIXtVmtX4jAQLaIiKAiKgMCCyBZrSvPoO2ke//9f7aRFkZUF9Nue4/0gHMy9ydyZzMRxfvCDH/zgB/8LJvMW/L0ajy++x7/0BOo49V8pm9a+JXDlGxN0mm6eut2rq/rZl1UavpGavXoI+T5Cry+/B7et+hf49ZFnikK/wWiRUbQcd5pnp/FrAz+URQlZfUqljUgDb969PEWg7xtd8rQupN5IwTdjOF0Nro8ZUmu5qiKpwF0sPC6Kdygj82De2XuM2vnVzW13NH5+8TNVLdfUnS18XuxAmdx/GjR3yWeNzmT+tEL+GuPUGPW2WCsBe+4KFDKhOHBHWz9rzcnvdRJjyihjlIQ7BPk3vSgEI4SFi/bb5u25nxdGZ6QCztQnyi6fwyqGVqOK35oHEtIsBS3ZmKXiML+QglEaeLgSuEXc5FEq4VcM/CgXR/YHqBTjdZBMLL+NjM4xDu3BIkojrj6HvOcMeZzk6hn4F080sXqJqtza49j+MwD0CwhM1pSInMSiJJ5Kr2AFGm5oTefFl5gbmFdwcM0Ijk8Ke69AbQ6pswZ+T+DFaaxCEEiO520v9LNzgyCCSHyKQChpbT4cmpDPTp9QqLvPy1QWJWkcpUIdKEqVdZ1nwcWebVQOFQ2xEZodUDBBy1lKoMMJ/tJQMT7hXhnv0llaqsxY+lEBQo/eBf6dIZ0PHGdqL46KMNv6IGSabk9ACP+HkcJ411BHxBRKUEy3kaoMM5mRrcB+E4TBY7gJN9AueUjJhxOoHEeKkyMhSMOGdmQ2FwwKAUqh/LHyS+YcWhbd8N/aqVCb/5auGelPy5F79hhQW8ypvcx8UxFgIsRBrA1QCFWWhco4rBFacjsp/GV301DbbtmGcutlElQ5E3HEZYihEjKl8rR0UbP7JcjrZDldsHTVOX9vx1MU4irbKoEPKaU1gHIeJ1leCMGCMjz1VO/GMKqeGk5zcH/7YRw0hqAAF7oUiJSIchDAJIKLUAjrKLEZUpDzFox71i933RkojUd7oTIN5UtIaJsDpNWaLzkHPVxmSMddp/64Xs/3zffz+4ASN842voMAD1kOXZ6RiBHGUKTLsnfOb9r73wddxNhi4QcMhhK2CbEpsZ2bYEZhBiKjDDr0Tmq5LPQmj7OVB3ORZpv2rDLKAuTOBs4k5GxygO9czEjoNUcIzebTO9fX0K/Bb71euTPX9/tOvT/uH3zbnA1x7HbGfuINYLQ/rnmO4Hlklv2+G8erziEqvIQur29Hw4U36909uA9bxIY83PVmaPUw6Lab50cEBvfDXg8UPmC2eACBXm84nRwS+APRJZVyP9ZC2gAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 390000,
            ap: 38000,
            dps: 34545.45,
            speed: 15,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 550,
            freq: 33,
            foreswing: 14,
            backswing: 17,
            tba: 10
          },
          stageStats: {
            actualHp: 390000,
            actualAp: 38000,
            actualDps: 34545.45,
            magnification: "100%",
            count: "1",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-waves": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "revive": {
                times: 1,
                duration_f: 200,
                duration_s: 6.67,
                hp_ratio: 50
            },
            "warp": {
                chance: 15,
                distance: 1000,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "600",
          enemyName: "トロリンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQMCAgMCAgMDAgQDAgQFAwcFBAcHBQkIBAoJBgwVDBsWDB0YDiEjFC8lFTMmFzMmFzMpGTcvGkA/I1M9JVNGKV9JLGNSMG5cNn1tPZF4RKCARqqESbCHSrSJTbeNUL6RU8OWVsqaWtGgXtemYuGrZumwavG2bvm5cf66cv68dP/Adv7EeP8iGKcaAAAAQHRSTlMACg8YICsyOEJOWWZseIGMlfD23Z//w+qo5L2x0/T+3fn/ze/i///i//P/////////////////////////////i0f0MgAAA9hJREFUWIXtVmtX4jAQLaIiKAiKgMCCyBZrSvPoO2ke//9f7aRFkZUF9Nue4/0gHMy9ydyZzMRxfvCDH/zgB/8LJvMW/L0ajy++x7/0BOo49V8pm9a+JXDlGxN0mm6eut2rq/rZl1UavpGavXoI+T5Cry+/B7et+hf49ZFnikK/wWiRUbQcd5pnp/FrAz+URQlZfUqljUgDb969PEWg7xtd8rQupN5IwTdjOF0Nro8ZUmu5qiKpwF0sPC6Kdygj82De2XuM2vnVzW13NH5+8TNVLdfUnS18XuxAmdx/GjR3yWeNzmT+tEL+GuPUGPW2WCsBe+4KFDKhOHBHWz9rzcnvdRJjyihjlIQ7BPk3vSgEI4SFi/bb5u25nxdGZ6QCztQnyi6fwyqGVqOK35oHEtIsBS3ZmKXiML+QglEaeLgSuEXc5FEq4VcM/CgXR/YHqBTjdZBMLL+NjM4xDu3BIkojrj6HvOcMeZzk6hn4F080sXqJqtza49j+MwD0CwhM1pSInMSiJJ5Kr2AFGm5oTefFl5gbmFdwcM0Ijk8Ke69AbQ6pswZ+T+DFaaxCEEiO520v9LNzgyCCSHyKQChpbT4cmpDPTp9QqLvPy1QWJWkcpUIdKEqVdZ1nwcWebVQOFQ2xEZodUDBBy1lKoMMJ/tJQMT7hXhnv0llaqsxY+lEBQo/eBf6dIZ0PHGdqL46KMNv6IGSabk9ACP+HkcJ411BHxBRKUEy3kaoMM5mRrcB+E4TBY7gJN9AueUjJhxOoHEeKkyMhSMOGdmQ2FwwKAUqh/LHyS+YcWhbd8N/aqVCb/5auGelPy5F79hhQW8ypvcx8UxFgIsRBrA1QCFWWhco4rBFacjsp/GV301DbbtmGcutlElQ5E3HEZYihEjKl8rR0UbP7JcjrZDldsHTVOX9vx1MU4irbKoEPKaU1gHIeJ1leCMGCMjz1VO/GMKqeGk5zcH/7YRw0hqAAF7oUiJSIchDAJIKLUAjrKLEZUpDzFox71i933RkojUd7oTIN5UtIaJsDpNWaLzkHPVxmSMddp/64Xs/3zffz+4ASN842voMAD1kOXZ6RiBHGUKTLsnfOb9r73wddxNhi4QcMhhK2CbEpsZ2bYEZhBiKjDDr0Tmq5LPQmj7OVB3ORZpv2rDLKAuTOBs4k5GxygO9czEjoNUcIzebTO9fX0K/Bb71euTPX9/tOvT/uH3zbnA1x7HbGfuINYLQ/rnmO4Hlklv2+G8erziEqvIQur29Hw4U36909uA9bxIY83PVmaPUw6Lab50cEBvfDXg8UPmC2eACBXm84nRwS+APRJZVyP9ZC2gAAAABJRU5ErkJggg==",
          traits: ["ゾ"],
          baseStats: {
            hp: 390000,
            ap: 38000,
            dps: 34545.45,
            speed: 15,
            range: 300,
            rangeType: "単体",
            kbLevel: 2,
            money: 550,
            freq: 33,
            foreswing: 14,
            backswing: 17,
            tba: 10
          },
          stageStats: {
            actualHp: 390000,
            actualAp: 38000,
            actualDps: 34545.45,
            magnification: "100%",
            count: "1",
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-waves": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "revive": {
                times: 1,
                duration_f: 200,
                duration_s: 6.67,
                hp_ratio: 50
            },
            "warp": {
                chance: 15,
                distance: 1000,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "056",
          enemyName: "メタルサイボーグ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 800,
            ap: 3200,
            dps: 16000.0,
            speed: 4,
            range: 80,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 6,
            foreswing: 3,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 2400,
            actualAp: 9600,
            actualDps: 48000.0,
            magnification: "300%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 240,
            actualAp: 600,
            actualDps: 999.99,
            magnification: "300%",
            count: "7",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 90,
            actualAp: 6000,
            actualDps: 9999.99,
            magnification: "300%",
            count: "9",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "147",
          enemyName: "メタルわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgICAgICAgIDAwMDAwMDAwIEBAQEBAQFBQUGBgYGBgYHBwcICAgKCgoMDAsSEhIXFhYaGhogHR0jISIjIyMsLCw5NDQ+Pj0rTioVZRRERERQUFB8Pz4IjAdYWFhkZGQCvQFxcXF7e3u2Y2KCgoIC5QKOjo7OfX2ZmZmfn5+pqam1s7O+vr7ExMTIyMjNzc3S0tLc3Nzn5+fz8/P7+/v///////8mrWquAAAAQHRSTlMABhAZISs1PktWXoCs7MBq3Z+K0XeVtebIvf7T9N7//u3////+/f///v////7//////////////////////wD/0beseQAABgFJREFUWIXtV2l3okoQDVtEJbJEQJQtoTN0mmEY9n38///qVRsX4ph5znlf3w1yhGPfvlV9u7ry8Os/4uF/gl8Pd4BhH2WRPX7n55o2Y+4ZdgYryIaiCofhnKg7/k5m/2q8qO58byMydHrZ8rPUX/8NATc3fJJGzpp7eODXO1z0hb/k/mL8wvKTPEt8nX/g5B2uhrHwtfsJ2IWFsrou8lASGNHC5TCOJSW7E4xooLypqzzD1ozX/XwY92OFPjJ6D3jNz9qmqZKYOIu5Fff7/X6s7ycA0aRpyrKkSVBVEEBRIunxTiPwmh3G5ADsmk8eSSiIqyyFexgYbrHZuidsAa7rAeDr8z0M7Gy5sgMcxREAJMCFkeuROI4j7Oj/ZmeGm0smSor2A01V1lVZZDiI277vG/DFn/PACGvLj4qu604MDVxlnuIwH2AlutT5sx259Q5lbdfWn1AVZY5JM4IZusj6UxDsYoOKvmvqazRNEqZUwlA4i6+3FCNKftbdGA8MeUgOdmr89ZcxMIL6hIuyqm4QFEmImxEY2gkBw/H8VA4rP29xXpY3xtdZFIYlJGFCwPALXVIXPDMR4Ich7IEb46syJyinBJcQIOG+Z6/m7EXAjkCya7oE5yia5sjXJCgbpjlgZhb++f3N1s87jFftrE9Q2rbVJYwScnIiSIax74ozwXz3vfj53bMeTxHMrLAZawxBlGl+HJ9HGMfFgSBFcV8nBDtHAnaxe6MKjBMBvIi6/VDiMCny4mPaAr+8vr5EZfNBUBN4NI9WZMSN/fbmmWdn8ksHrAJOwUFUHCPPXr79eH+lxamukiDOEX08FTZhuTLNJ+lszEfVL0bqtRIHOK/opHX68v7jxzeUQXUroiDK6OOryp+WUVwvjQvBzPAr6pRxqKMAJSC7LEHB+/trSBWUCaIK3t9t7VxaGZZfrNanR6ijzf6AocvCgORlmhXkmIOmbrMwaeOX1xdzamVG0CWROa7KJmw/CPZjX5IAJ0kODiZQSbIKjJGGcZlijP2lwF38y86N5YcEZm2eCSCMNgmCKKc+yBJM0jSJsRegAGAb2lrkmLMEzfg4gBlZORGMY1dVFVShMI6hntELPqG7RXESoa3t+xv5nAdWNLRDoYQQcHcUMORhEMK0OEAkLWlNgsJUE4+UVUFcXOTIks9B8MvjdoCz4EQwNuA4XHRVnNT9ONJKBLLKMAAdQVgMferolzzOJP0gYUKwH3rYUf3QRrQQnvNS0oDiatgPhS9dVoJbrxbcNUGTp1nX58Ghkh7/gBaKLSiCEH31YSpBpaV6StAlJMm7PvPSQwTX6BNn+TCRIK9k7jNBX1VdT0/DMKuaK0CtL5AxnxAwjyo19JRgT2sP8KRBgD4jpDd/s/jUKbDU0MwngpMjiwS7bkgugMNWUrU59+lsOBgaehp8TXAwNUJ5dwHkfybw1ycDO1+pmmHeINiPLcLNJLLyZqfFzAzTR+5Nggbh9vI05M6tXo8RdySLPNKN06EfUzbBNDVAcKvb5NZ+lgQuri+x9sN4VEAJLl7Kbx6NvI4ztN0GhyYipoiipKB6Dgrai4W+UCCoOA+3Ww/2CqFNCawbRihuD1N6QZydkRJbv9HlQFeXJCHs0zQuoDdL47wsYC+nPURAXC+Ywt1pvzMwc8sn2MNwEIBzoT+Fe5sjWJWxTuL0ExLi3Djfublq7UxUQGty8HtNu9SQVqihH67Q3Ow3WX620J0IiucRZRYhVF0Ppqi+aJkZdib5ODoBsuh5UfobII2br3oc2FPm1qUNpQsf21EU5wDbpnmkbwPPtR1L/qpnh3+LVDMg2H6yUWBKa/kIbWXjmHhP0P4iRZVF/usujRU3OCc7aYeQJbLMEVC4cUZ2uoUzDLXrT30mIxgo8vW5atvqRCe0Lp6zFGQH3dxJ59Ewl6A59kaeaaaiPQoXzI0nY07vK6gkX0hghdl8IS8l5elZklaK+bya4llZSaq6UlaavBAfb/WJjAAtG/zwWTEVRTGfrmCa9LWiPD+vDHV5s9elCuT1eqnpukohfQJ9o+uatlyfFfwD1VLLUg0TH44AAAAASUVORK5CYII=",
          traits: ["メ"],
          baseStats: {
            hp: 30,
            ap: 2000,
            dps: 3333.33,
            speed: 16,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 90,
            actualAp: 6000,
            actualDps: 9999.99,
            magnification: "300%",
            count: "0",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "10.0-30.0s",
            delayFrames: "300-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 9,
      stageName: "再起動 Lv.MAX",
      baseHp: 900000,
      width: 5000,
      enemyLimit: 15,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
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
          enemyId: "517",
          enemyName: "メタルコアラッキョ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 150,
            ap: 15000,
            dps: 7500.0,
            speed: 5,
            range: 240,
            rangeType: "範囲",
            kbLevel: 5,
            money: 900,
            freq: 60,
            foreswing: 21,
            backswing: 9,
            tba: 20
          },
          stageStats: {
            actualHp: 150,
            actualAp: 15000,
            actualDps: 7500.0,
            magnification: "100%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 4
            }
          }
        },
        {
          enemyId: "449",
          enemyName: "柏餅2.0",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 15,
            ap: 13500,
            dps: 14464.29,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 160,
            freq: 28,
            foreswing: 14,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 45,
            actualAp: 40500,
            actualDps: 43392.87,
            magnification: "300%",
            count: "20",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAEAAAACAgIDAwMFBQUGBgYGBgYHBwcHBwcICAgICAgJCQkKCgoKCgoLCwsMDAwODg4ODg4PDw8QEBAQEBAQEBASEhITExMYGBgcHBweHh4fHx8gHyAgICAgICAhISEpKSksLCwsLCwtLS0uLy8vLi8vLy88PDw8PUBDQ0NJS0xbXV9dXV1kZ2ptcXV1eX59goeDipCMkZaUmp+boKelqrGssrmyt8C1u8S9wsnHy9HS1Njc3uDl5efx8fH5+fmpfApWAAAAQHRSTlMAAP+2RhbOI9aNooI8Ty9peMVZmOP2rrsNR4fXX8r/7BsI9uL/cCvy/gf8/hT/////////////////////////EXdUogAABUhJREFUWIWdlwt3sjwMgNnUeUMFdV6GyoZssPaFQmkpN93//1dfCrpN/UTPMuc5avOQJmmSKg93ymKott/+53vlXv1xr9H/+Pw7QJ1ZlqG1/gxQRqZH0Wz4Z0C76/Dcexr/GaA2cJYTU7tcfh/gbWX4eRpYk0sn3AdYaGaYJ5HbUP8IaE8cniUcd0YX6+8DNHWcZqkIrF77T4CWZgZ5liQMPY3PFe4BtAZzJIosEbFv9oZnGrcBSns0t2iRp0kiGDa66mkkbgJag27HDfMC9JMkZng7G50YcQOgDPu66fFil5UAsMF3jN7glxH1gMWgZyKa7/eVAZIQU2zpo59g1AJeV3PLT3ZfX19FZYGQ/zxAhta+B9BarR1a7EH/awcxSIQQpRVxhI1++zZAgegx+fivrz3EQLAwCFmF4N43oQYw7FnRbi8N2Bcyizx7Y+OoJKSxd6wu1wEtbeoXu7zYgwvBA4JsHh8fN6TaRhYjfaDUA5qQfrs8S/MizzI4Sd6jBHhxZUJOzW67FgD57xeH6KVpmsR+aYF/AGQp1ge1APAAO6bPwfXSBwcvShOmo1rAUkdp8aMv4x+SYxRAcu706wDKaorzPDkRkYifD5lA9YARuOAMcELIEnwLQGT0f2+BA4CzOCkjCYG8AYAsOPoQFAScQ58L5slUinksMmbVAh4GTzg/WCDguTTwNnbI4M2PeeBRkVFTqwWoMySyw/GJA+za9maDsG3biBJ3g3ni3ciDVteiuSjTRsQEtG3sAiLANnJd1yahM6nPRGVl4DTlPAaGYMT3fObbbsCAhYgPjEOBvn4WPiZWkMWMRRLCOWecej6NAoRIGKDNtDoKNYC35dyhqWCU0ohJiaKIhpRCVQgJMnuqcgPw0BrrFSH8LZLgo2mvedCsLWnj2dZnHB5NK0hQvvnY6UzUo2JtUV2o/bUD+waAtDwICDgTOcbv1lBf1pVW82W2RdgnAYiPkbNdzyej4d19QSKGk2cbeT4hxHM3ujZW24uTBTcAsI930y71gQDt/b7u/O/fv8/jL5/LOQBg+7ANNF/eAXj7WK7e31fN4cHU166Fpf8ICT1jtDhbfQl4XU3WW5BvX7+toL1CDkEciNM9H7MuAG1t7eAAIifbcLNcvtRxImsApNTlrHkOeNW2mEMryPOMe+Z8/CqZE8Rla+FRhPVzJ5x9/JRncCdLEfxxYhkvMGArmhNJQMw4uXDCGeBjhuJdWQtF1ci3Lx/Kw2obyOoGVTE0tVqAMjbIDtpJ2cpBYioJck5Nq7JKL7x4Cmj1HQ7TiCyCjMkiDP1o+6LKfR0B59PuKWDYQxnMAnCEIfVDWcFhrDLnc5OkcgtxfAugzr1inyc89D3I3iCSPYB5joV5dh9guZYuiKnnyvLrB2CDRLCk7BBQ2W75YGAE+x0kgGU+6R3T9atmmsr2XraHODT7dXmgrLZ0v0upO+02h+OZiQhlsRDfvY3FgXE+rx8q46LK+pHD9oXwn+VEvFjOLBT8EGRoYnIYbM4Bw1GzpSjKRw+l+5yh6lqwGMzhGNJIhlO+oMRzfOUsDHS9O1bVl20AQy11G9WqxXgNhDCCVgrqkBrggiuncak/b431eouTXS6IdVzVGj1ZXhBCX+BlZnF87b7w+mJ5PsaBgIYcoc73KknAsphDZYbMhFvXlRuLslwjcBcEDMY589cqSYB8kEbEMbFmzfOCdAS0tQ40TjA0xM/6aNj+FrXfkUWZBMRDZmN85dqnDJtaY2q5CLn243NHb/wSffr8uCnFBEdf7KACtJpad6Z3Knm6kOMPjYl2eW/8D6p1Jgm/HMbrAAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 165,
            actualAp: 900,
            actualDps: 931.02,
            magnification: "300%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAEAAAACAgIDAwMFBQUGBgYGBgYHBwcHBwcICAgICAgJCQkKCgoKCgoLCwsMDAwODg4ODg4PDw8QEBAQEBAQEBASEhITExMYGBgcHBweHh4fHx8gHyAgICAgICAhISEpKSksLCwsLCwtLS0uLy8vLi8vLy88PDw8PUBDQ0NJS0xbXV9dXV1kZ2ptcXV1eX59goeDipCMkZaUmp+boKelqrGssrmyt8C1u8S9wsnHy9HS1Njc3uDl5efx8fH5+fmpfApWAAAAQHRSTlMAAP+2RhbOI9aNooI8Ty9peMVZmOP2rrsNR4fXX8r/7BsI9uL/cCvy/gf8/hT/////////////////////////EXdUogAABUhJREFUWIWdlwt3sjwMgNnUeUMFdV6GyoZssPaFQmkpN93//1dfCrpN/UTPMuc5avOQJmmSKg93ymKott/+53vlXv1xr9H/+Pw7QJ1ZlqG1/gxQRqZH0Wz4Z0C76/Dcexr/GaA2cJYTU7tcfh/gbWX4eRpYk0sn3AdYaGaYJ5HbUP8IaE8cniUcd0YX6+8DNHWcZqkIrF77T4CWZgZ5liQMPY3PFe4BtAZzJIosEbFv9oZnGrcBSns0t2iRp0kiGDa66mkkbgJag27HDfMC9JMkZng7G50YcQOgDPu66fFil5UAsMF3jN7glxH1gMWgZyKa7/eVAZIQU2zpo59g1AJeV3PLT3ZfX19FZYGQ/zxAhta+B9BarR1a7EH/awcxSIQQpRVxhI1++zZAgegx+fivrz3EQLAwCFmF4N43oQYw7FnRbi8N2Bcyizx7Y+OoJKSxd6wu1wEtbeoXu7zYgwvBA4JsHh8fN6TaRhYjfaDUA5qQfrs8S/MizzI4Sd6jBHhxZUJOzW67FgD57xeH6KVpmsR+aYF/AGQp1ge1APAAO6bPwfXSBwcvShOmo1rAUkdp8aMv4x+SYxRAcu706wDKaorzPDkRkYifD5lA9YARuOAMcELIEnwLQGT0f2+BA4CzOCkjCYG8AYAsOPoQFAScQ58L5slUinksMmbVAh4GTzg/WCDguTTwNnbI4M2PeeBRkVFTqwWoMySyw/GJA+za9maDsG3biBJ3g3ni3ciDVteiuSjTRsQEtG3sAiLANnJd1yahM6nPRGVl4DTlPAaGYMT3fObbbsCAhYgPjEOBvn4WPiZWkMWMRRLCOWecej6NAoRIGKDNtDoKNYC35dyhqWCU0ohJiaKIhpRCVQgJMnuqcgPw0BrrFSH8LZLgo2mvedCsLWnj2dZnHB5NK0hQvvnY6UzUo2JtUV2o/bUD+waAtDwICDgTOcbv1lBf1pVW82W2RdgnAYiPkbNdzyej4d19QSKGk2cbeT4hxHM3ujZW24uTBTcAsI930y71gQDt/b7u/O/fv8/jL5/LOQBg+7ANNF/eAXj7WK7e31fN4cHU166Fpf8ICT1jtDhbfQl4XU3WW5BvX7+toL1CDkEciNM9H7MuAG1t7eAAIifbcLNcvtRxImsApNTlrHkOeNW2mEMryPOMe+Z8/CqZE8Rla+FRhPVzJ5x9/JRncCdLEfxxYhkvMGArmhNJQMw4uXDCGeBjhuJdWQtF1ci3Lx/Kw2obyOoGVTE0tVqAMjbIDtpJ2cpBYioJck5Nq7JKL7x4Cmj1HQ7TiCyCjMkiDP1o+6LKfR0B59PuKWDYQxnMAnCEIfVDWcFhrDLnc5OkcgtxfAugzr1inyc89D3I3iCSPYB5joV5dh9guZYuiKnnyvLrB2CDRLCk7BBQ2W75YGAE+x0kgGU+6R3T9atmmsr2XraHODT7dXmgrLZ0v0upO+02h+OZiQhlsRDfvY3FgXE+rx8q46LK+pHD9oXwn+VEvFjOLBT8EGRoYnIYbM4Bw1GzpSjKRw+l+5yh6lqwGMzhGNJIhlO+oMRzfOUsDHS9O1bVl20AQy11G9WqxXgNhDCCVgrqkBrggiuncak/b431eouTXS6IdVzVGj1ZXhBCX+BlZnF87b7w+mJ5PsaBgIYcoc73KknAsphDZYbMhFvXlRuLslwjcBcEDMY589cqSYB8kEbEMbFmzfOCdAS0tQ40TjA0xM/6aNj+FrXfkUWZBMRDZmN85dqnDJtaY2q5CLn243NHb/wSffr8uCnFBEdf7KACtJpad6Z3Knm6kOMPjYl2eW/8D6p1Jgm/HMbrAAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 165,
            actualAp: 900,
            actualDps: 931.02,
            magnification: "300%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-30.0s",
            delayFrames: "300-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "359",
          enemyName: "はぐれケモルル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgIDAwMICAgLCwsNDQ0ODQ4ODg4SEhIdHR0fHiEkJCUkJCQmJiYnKSoqKyssLC00NTU3Njc2Nzo+Pz9CQ0RDREdHR0dLSk1UVFRTVllTVlpUVlpVVllaWlpeXl9hYmVjZmplaW1pbG9ucXZ5eXl1e4B6foN8fn99goeIiYuGjJGNk5iWm6Ccoaihp66qrK+prrWvtLu1u8O6wMfBxcvO0NXW19no6On8/Pz////tmh3YAAAAQHRSTlMACVBviKTYtMQ7FC32IENiTdV1pv+KYOL4ku/9dqWG8PzYw4+q7P/33f+///LZ/+f+///+//b///////7///8ARHetJQAAAfZJREFUWIXtkmtv2jAUhklbKBAugUEgS0NToC5ewNjHxnYutP//X+2YlWoXpBXt25QHoUgh73OOX9J4+0cataAW1IJaUAtqQS2oBbWgFtSC/1bwd7xOuFitVouH0Pc+8fif8WRfHo9VntvDfh1creiON8Wro7Q21+J52r1u/GAtTOnyx8KCNhrS6Jod/GivcXBRVWVuYT6fxMCfh5829MdP0n5g0pjEE2H0xr+8rB8EP5fs9cMlx/E2x/YcmloFYCQV44vTop087KbDYOBjS153EG2kCxonOBkUzxlNY9oj0YV8N5Fgj6/yhW83yyhKlnuTF5jDu2eBZpoaRmQaf7nwRwR7iW0fS6qt0UpqTJ/yAsz5CJYpynRGyeTxW9j/rUgvAuBCGSOVNlbQjFuXNwCg7FmgGGQkkylh6rBbL5CHc539aCM4ZxykxKsgohCn+pVSmmdcCPwB7SqjCDOacmNNXlblbnhaxUukyByMvyPkO0orTikhGaOECcEZnqkoSk5A46oWtrsEC+zMpALBAb+YxVVYxpzOfXAtpd3DhUoJxRHCVlVlSMrctO0yeWp0mq3eJM3AFWckuDG/wAW4KkxuOK6SxvMJ0uuNpmEYDPqej2/Qze1d8749Gs1mXx3zH8QnUuTF8Yg8z1qtdvu+2by7vfl46b4DXcdeT+OJbIkAAAAASUVORK5CYII=",
          traits: ["メ"],
          baseStats: {
            hp: 2400,
            ap: 2400,
            dps: 947.37,
            speed: 24,
            range: 300,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 7200,
            actualAp: 7200,
            actualDps: 2842.11,
            magnification: "300%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "059",
          enemyName: "メタルゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgICAgIDAwMEBAQEBAQHBwcHBwcICAgJCQkKCgkLCwsNDQ0PDw8REhEVFRUaGhoaGhofHx8gICAnJycoKCguLi4vLy8BWwA4ODg5OTk8PDxIS0dLS0sscisKlwldXV1gYGBpaWlzc3N0dHQEzgN7e3t9fX2FhYWJiYmRkZGdnZ2mpqawsLCzs7O6urrDw8PIyMjOzs7W1tbg4ODr6+vz8/P4+Pj9/f3///////9x5rvBAAAAQHRSTlMABg0c2hMly4s+5/P9MapXb0livX2L0e/+oMOtS9v+4L3+1P/+/+n///H//tf/6f7////q/////////////wD/KAcdYAAAA4ZJREFUWIXtVlt7qjgULeKl1OLdDuqMCjYEy4kJOQmXkAz//19NwOqxPVLpzMs8uJ78wLWy985KFg9//0c83AXuAneBu8Bd4P8k0BhGp2uPx2PbbBnNSRf07mTl/TgcfG85H3a/L2FOtnuWCSEyTsLNdNj65vLWwqeZyNIkSSiju9e/Rp1vCVjLgMUaFCFKENy97TYz8xt8expyTec8eH11QUDQDsX7hdW4DePRLdfnUbR7e9txwYHLlSDevKmEOcUxp5yGAOx2kRTQWSeFihHejJopjDdRzHAIEM+SJFcyoS5KBQky5lmNOpi5YQgh1tziCAFLMCnxqIkhOgMXhDST7/Q8z2mgNzSThaKLJj2YWy5O7EKTQgS5ev/dSMD2suICKcKpPPJVNG8iYPnn5iuaPJWj5GHSgG9M9rK4DuGPb9O7kymqE8i87g16y55t926kagSS1ddHyhzPPZJwkNTwC/blDDvDlR9lSlGc/xsBw14cuNC1KyHqOiji+haM8ZaktcRfQ6w7C62hh0CYF7Ju/hWUxDU9GEOPQSeSGWFfV5F6dg2f51EkmOvU7uAR+f6qFe0lldqw6dpB9QM8NoFn1wYwR7nSxDQgN/iFIrMrF8LYSwWNlZK5vMVXUSVgdDoXaWUuohyvqeQ4+5quIQ+jkjFarRY6ro470hr5QnKWJ+t1fFNA+NoInbnPYkb8KvIMc+QnunSlmPvZwr/1o4p4q+PF3tAkzbIkCv3lbLbaJwmKtH/y9GwilTHKsyueknimy+4uISaRTh7OMFhHIkcuuZyeKlIIIAD4d2unlZWN8QvQr8voY2Ggr/0s/Vh7jgHhBEPAPhShChEOqsNkezpwWRl+EcRXCo0h45xxgsBHY0viLisnd5cBDKvwZQH5LKCKHJE0KaOxrO/yDQMUryxDZ/+LGxK9BsUBgJ9mpfk0qPjvDf5anwOiI8ab6AJCpufnbzYv08HUJ2k1wdM/MwLZUYCTcwtKXzORi4V2K/f00SFk7y0mltXtdExr7u0xO9chQkjTiq6zOTo9VYICx4GE/fz5Y/HQmqxWM+t8N7XGvednF1Xe0F9EQYgQRggFEMVCx2L5kUQJeK7wMvvT7lRH4fJI2YN2v//sOM567QIQllwIQ4xxGAQBAO7acSp2v98eWNfC2TCt4ehxMO312u3209MfJ/T7/acS+mmvNx08joaWWfL/AY7epcqagI8LAAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 22000,
            ap: 6699,
            dps: 11165.0,
            speed: 10,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1155,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 5
          },
          stageStats: {
            actualHp: 66000,
            actualAp: 20097,
            actualDps: 33495.0,
            magnification: "300%",
            count: "2",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "054",
          enemyName: "超メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 8000,
            ap: 3000,
            dps: 1914.89,
            speed: 18,
            range: 170,
            rangeType: "範囲",
            kbLevel: 16,
            money: 999,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 9000,
            actualDps: 5744.67,
            magnification: "300%",
            count: "3",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1349Data;

