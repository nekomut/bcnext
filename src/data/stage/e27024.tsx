// Stage 27024 Data
import type { StageData } from '../../app/stage/types';

export const e27024Data: StageData = {
  eventId: 27024,
  eventName: "エヴァ量産機強襲",
  typeId: 27,
  typeName: "コラボ強襲ステージ",
  prefix: "CA",
  mapId: 24,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "殲滅 Lv.1",
      baseHp: 450000,
      width: 4900,
      enemyLimit: 20,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "38",
          treasureName: "緑マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
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
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 36000,
            actualAp: 20000,
            actualDps: 14634.16,
            magnification: "400%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
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
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
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
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "殲滅 Lv.2",
      baseHp: 540000,
      width: 4900,
      enemyLimit: 20,
      requiredCost: 110,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "35",
          treasureName: "紫マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 42750,
            actualAp: 23750,
            actualDps: 17378.06,
            magnification: "475%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 6,
            actualAp: 1000,
            actualDps: 638.3,
            magnification: "125%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 6,
            actualAp: 1000,
            actualDps: 638.3,
            magnification: "125%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
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
            actualHp: 37,
            actualAp: 2500,
            actualDps: 4166.66,
            magnification: "125%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
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
            actualHp: 37,
            actualAp: 2500,
            actualDps: 4166.66,
            magnification: "125%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "殲滅 Lv.3",
      baseHp: 630000,
      width: 4900,
      enemyLimit: 20,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "36",
          treasureName: "赤マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 49500,
            actualAp: 27500,
            actualDps: 20121.97,
            magnification: "550%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 7,
            actualAp: 1200,
            actualDps: 765.96,
            magnification: "150%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 7,
            actualAp: 1200,
            actualDps: 765.96,
            magnification: "150%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
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
            actualHp: 45,
            actualAp: 3000,
            actualDps: 4999.99,
            magnification: "150%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
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
            actualHp: 45,
            actualAp: 3000,
            actualDps: 4999.99,
            magnification: "150%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "殲滅 Lv.4",
      baseHp: 730000,
      width: 4900,
      enemyLimit: 20,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "37",
          treasureName: "青マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 56250,
            actualAp: 31250,
            actualDps: 22865.88,
            magnification: "625%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 8,
            actualAp: 1400,
            actualDps: 893.62,
            magnification: "175%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 8,
            actualAp: 1400,
            actualDps: 893.62,
            magnification: "175%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
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
            actualHp: 52,
            actualAp: 3500,
            actualDps: 5833.33,
            magnification: "175%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
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
            actualHp: 52,
            actualAp: 3500,
            actualDps: 5833.33,
            magnification: "175%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "殲滅 Lv.5",
      baseHp: 820000,
      width: 4900,
      enemyLimit: 20,
      requiredCost: 130,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "39",
          treasureName: "黄マタタビの実",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMDAwMEBAQEBAQEBAQFBQUGBgYGBgYGBgYGBgYICAgJCQkKCgoNDQ0PDw8YGBgaGhodHR0dHR0eHh4hISElJSUpKSksLCwvLy8wMDAzMzM1NTU7Ozs9PT1ERERFRUVJSUlOTk5PT09YWFhZWVlbW1toaGhwcHB3d3eCgoKFhYWRkZGWlpabm5unp6e0tLTFxcXU1NTd3d3n5+fy8vL6+vr////hNFWuAAAAQHRSTlMABgwS8qXX+yOXshkqwOcxO0VqjHZcT4Kp3nr3a4yX7P61wabU8f3dzP/0rv3o0v7q/vL///T+/f7/////////tVrXHAAABXJJREFUWIWdV4t2qjoQLXDaYwteRBQf+EQUsWB4SRIg8f//6k6wPedqkdo7y7VQZHbmsbMzPD09aJI2nM4sTZUedbj1N9bR6RQdN0Ptf7l3LAczzquSRGPt50FI1jo8VfwMxstw3PsxQs/JS177A0KRLJQf+sujhF2WB3dSUqfzQ4DOmHwsX1GMUOYa9W3p0UzUkVd8hI9RjIM0GYrbSn/0mL80dD8D4IwGGYprAKX/8vIgwCiq6vzFh6WBH3j9nmHNPfvtMQAZACpSY/BzGaxW/tZ1vfCU743HAJRxzvJdTAilhKZBhmlZFGVVRDP5QYC3vPBXq9UuyHyU5nFWiXaWyfRRNkh9L7bBH2KPiwIhCu6MRFP1QX9o43C8hAjswCdnRgvOSxy5/Z+wUeqMtnmKMiQqeWYkdAa9B/P/k0XEWJmmgtAMuwOtwV1qI6ayyPm5QFS0krjDJnd9Nh/c3+e6SwWNRQbUGzRFr68THG2MO4kpo4gBBzNBpHDeVH1pllS8yvdWUwyyPoAAzhUiUIBs3Kho2lqkx/LFV3S5N3KWonrUh2cKr3GNp6HYLvxMnKF+k4U03J/SQOxmssoYz7vNkgoA9U7rmq+DztUS+p4UCDzPPF/5pEKTYWME2joijOWOofSen/v632ckK6yICIDzNEAp9VfdpiZCF0fuKXEBXTGXy791UqzNgWYX/qCVH2RLG90RRNmam5YClAsJjcwPnkuzIykqABBqiFaxv1tO/EljCPCwLEPkmkM4p96HUqgboWUkIEwA+D5sx60duL1GgIsNo7pem0s71UVccuhugKsKBxgFCCEAaBEiaYqFfJZhXevObB/D4pxh8AxyuOx2O9ueWPcB5DmpxTd3dCjsIiqYqB/IR5riCvZxgCANe3AfQN3Qy/mRjA3jHVfnT7uca5ygnY8mLSmoNaWBk2XieqJ0N8ZKGu+eW7SoBuBivQrF1Rf/+mjB6zaAOgWGSVmitOJNCOfq2DJhXIpYBiiOUdHoDvBRCw+kqRCNAhUYtt4dgCr8hkigWjGjNgDwc1MS7dOB4UHpaMqIs8eUNJWRJWabomsOqCfJGJ5aCy9jXyPgdN+WgThIOc9zlliSdfxaRmhv1G89UqRRzFiMy2OvPgq+AFRZg2xeAQzDskKUrjXjWH5x50XaxuPadLcooYtzdXr6HGs+r+JUjL8d0NQFiGiZDJUF+fRiH/6sJPG28Vi6ymF2oqiIDHlRKwNMVbmoJYPhJI/juE1MPsyKQMKOOjSBFAXFMcphIClPWz/GtKqS2bezob4/HfC+8yQbi/d3Z5vSsqSn49xc1pMJ2Xw7l/SOWXDaiB2rqKq+8MLQW097su7GCAQC+vuNvzJNEDr+Ub2OYVmGGCe0YxFv84qdZq3usmG6qe/ekk3tqFaIvcE6KVtzkDoz117t7Bt/yRg778fdzlS0eYSX5vAuFeClJkhJvr0B6IxjqD85jKQndbr1Ubi4g6C8ohTDJJLvrxF6Hkx20IC1CiwBpS+jebOoqeOgFlKGr/nacephXQiJ/i4O6iJq3lHywE6FDMEYc/W/uhak5KeFLJv1mwvH6+YkOm9xBQjYMa7opmwovK1V2VyWx0IpOT3c2RFSfxljxpL+DV2tMEO7EKYHaRCSgrN42TymiCd3O5y7+g2u5aKg2xczYGfkRAVFaN4cgTzHSfdwGN38qzk5/hwAZX1x9A73aqCuyamb4I0mgyl/zPBIOFPhi7gtq5p1pMfmYU9ZJHgSFNHYNF9fn8HeusJeDqndFT9fX01z0B/2J2l+U+cPM95s37bTfPX72uy/N36B/fPLDpavTSes1jdhzcnyH2G//mO/Lxdx++Wl2317Nvt/X5//BUlcOtC5guMJAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 63000,
            actualAp: 35000,
            actualDps: 25609.78,
            magnification: "700%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 10,
            actualAp: 1600,
            actualDps: 1021.28,
            magnification: "200%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 10,
            actualAp: 1600,
            actualDps: 1021.28,
            magnification: "200%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
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
            actualHp: 60,
            actualAp: 4000,
            actualDps: 6666.66,
            magnification: "200%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
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
            actualHp: 60,
            actualAp: 4000,
            actualDps: 6666.66,
            magnification: "200%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 5,
      stageName: "殲滅 Lv.6",
      baseHp: 910000,
      width: 4900,
      enemyLimit: 20,
      requiredCost: 130,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "51",
          treasureName: "キャッツアイ【レア】",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 69750,
            actualAp: 38750,
            actualDps: 28353.69,
            magnification: "775%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 11,
            actualAp: 1800,
            actualDps: 1148.94,
            magnification: "225%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 11,
            actualAp: 1800,
            actualDps: 1148.94,
            magnification: "225%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
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
            actualHp: 67,
            actualAp: 4500,
            actualDps: 7499.99,
            magnification: "225%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
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
            actualHp: 67,
            actualAp: 4500,
            actualDps: 7499.99,
            magnification: "225%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 6,
      stageName: "殲滅 Lv.7",
      baseHp: 1000000,
      width: 4900,
      enemyLimit: 20,
      requiredCost: 140,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "52",
          treasureName: "キャッツアイ【激レア】",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "173.3s",
            spawnTimeFrames: "5,200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 76500,
            actualAp: 42500,
            actualDps: 31097.59,
            magnification: "850%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 12,
            actualAp: 2000,
            actualDps: 1276.6,
            magnification: "250%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 12,
            actualAp: 2000,
            actualDps: 1276.6,
            magnification: "250%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
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
            actualHp: 75,
            actualAp: 5000,
            actualDps: 8333.33,
            magnification: "250%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
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
            actualHp: 75,
            actualAp: 5000,
            actualDps: 8333.33,
            magnification: "250%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 7,
      stageName: "殲滅 Lv.8",
      baseHp: 1100000,
      width: 4900,
      enemyLimit: 20,
      requiredCost: 140,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "53",
          treasureName: "キャッツアイ【超激レア】",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "173.3s",
            spawnTimeFrames: "5,200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 83250,
            actualAp: 46250,
            actualDps: 33841.5,
            magnification: "925%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 13,
            actualAp: 2200,
            actualDps: 1404.26,
            magnification: "275%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 13,
            actualAp: 2200,
            actualDps: 1404.26,
            magnification: "275%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
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
            actualHp: 82,
            actualAp: 5500,
            actualDps: 9166.66,
            magnification: "275%",
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
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
            actualHp: 82,
            actualAp: 5500,
            actualDps: 9166.66,
            magnification: "275%",
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 8,
      stageName: "これでラストー!!",
      baseHp: 1200000,
      width: 4900,
      enemyLimit: 20,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "58",
          treasureName: "キャッツアイ【闇】",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "2",
            spawnTime: "116.7s",
            spawnTimeFrames: "3,500f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "740",
          enemyName: "エヴァ量産機",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMGBQYGBgYJCQoLCAoQDhIMFBoVERcQGyIbGxwgGyMfHh4XJS5RFx0mLDYvKTUwLjA3NTk3N0FAN0hrLEBIQFBRRltTTlVYTmF2RlRgXl9iXWZlXmqjTl9xZXJ2bnx0dHWDd4WBeoOEhISIgo6SiZaSkZSdkZyhnKavpq+2sbm2tra9u7/HwsrNyNDSztTzwMXZ1d3h3OHk4ubs6uz18/T7+vv///8HcgS6AAAAQHRSTlMAbs3vEf8g4bKRLkFWY/99/02dCP97/8Bzk/7q//7/vf//l8/////8rv7lvP/96f/+///m//////////7/////YhrvegAABF9JREFUWIXtVmlDozoUrUqpgtJleEBTgWgRGiQQIsskLPn//+qF1nHt2Nb56v1CKdzDudu5GY1+7Md+7GtTfPXf/Dfd5h+857pf8vrmu/7OEy855V2pfdO/4kzwrhfiUfmOv0bLoheNkNY/3X+DhE4q6csHgKYXPHVOBVjzuhR9Wbad6NumFf2Jgcw7IYqOkSSveN/97nkvTuNgt0LkeXR7e5eXrH1ARSueTmkp1bCaHt0+PNzeFhWtOQpxFp+SSacsOEb47lZSuAtJ1f3Oszv9eH8lFqIMPVxJiLuElLW/uXf+uz4e4MyVGeAUdV15h1JSiuUJ7AcCEyNpXCJII7o61de1eDwNwAmMGao83kaPG0cd+Y14OtgEqq5rLy/FrWVSUQRkl/erpG0OVWCZZCSL/fkWQ6MCJwER1N89PBuD7BCAHSZJFCVZvJRvOoxlVS0R4h0n3TSMQwDXLrRmpmkFGPvzm6QuCeMhIbvkK2kBDvbAArrGbIDwEhIB2mdUdBHPNtsvL5vmsCwtIDB2ECC0kChyJro2aJ/m8tn8qEaYuq4pEQYIF4qiTbjogkbkkvx9c1Qn6bYHZgMJEIGu6AmpGyIFLVVHKRf3RwDIVG4hDKsCVdWxjJVEqkm3UXN+bC8r05VMhSsi3DKcsTqTStS3DmnboydRXXhuIHIo8pDwIq+lpPZpfEQrv5puR20BWQMgjpJcynLTEnHaelqXjGSCGiCMgqzpm75qT9PDTUE5FYLOLBhCyhjr6XykHY+hpCTLZQF7YnjQDSpG20ofbWpHPVKStBzTDHUiyjzPs2BEGfGmKm3WdrI8KpdLiLAt3aAbooVys4IEjM/nNbERwusjyulUQWCqPiH3Uw+tNSkVEKKVX3lRNIMYHSShU55E8Uj1cTyXCNH81zJkokwChKFhgAiv518DrHkVFbLsiq6poxs3Snw9bkWNAYyQaximlyTLr1aURhkl9Yv+aDZEoaxIiVwPeFFoyUkJcPRFSZ2akfrt6F3bbi4EDqCcMtMNXDnwAGX+X5MpI+Af+laXa4pAKXmD4ABgSsWAGP8lmarUwk+Ds5SiYK8gdAeMrWqZVkjivcm8KWv26YE+bCZVxgJ3irOFAIjsi2PJms9bTElFOlw1qRYQmMZO+Ex3Xxwx43uY3YtyVzlloOFafyBgFn+oh543e6Tj16btXmRdW6ygZ82e5TfI3jW34ufF+jMBJWXNm08pN7b3nAyZCozfkJgmjMX7AKqckbftpy/crfwOJBLyiuBQXqZ76muTvGge361Hdbrytvk0AXlFWBBa7wlh5IMIVZX9gZeMxLXM2SzM8TO2Tpo290fKSJGm/jH5O6UWyEnx6Mzf05M18SCEQSbPAYqmn63lmVZY5+eTycU7m1iZ1Mbh1Nst3xxDBtOm9moFVvZIvbwYj72MFmi8xwwAxkaAkgRZ44vLD8MsuSrbi359dnV1eXl+PlCYXLywkDeT4c/Ly6urs2td3TtE/wPBXLArtodKDwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 1200000,
            ap: 34000,
            dps: 5257.73,
            speed: 8,
            range: 410,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1800,
            freq: 194,
            foreswing: 51,
            backswing: 72,
            tba: 72
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 34000,
            actualDps: 5257.73,
            magnification: "100%",
            count: "3",
            spawnTime: "173.3s",
            spawnTimeFrames: "5,200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-waves": {
                enabled: true
            },
            "immune-curse": {
                enabled: true
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMDAwMEBAQEBAQEBAQFBQUGBgYGBgYGBgYGBgYICAgJCQkKCgoNDQ0PDw8YGBgaGhodHR0dHR0eHh4hISElJSUpKSksLCwvLy8wMDAzMzM1NTU7Ozs9PT1ERERFRUVJSUlOTk5PT09YWFhZWVlbW1toaGhwcHB3d3eCgoKFhYWRkZGWlpabm5unp6e0tLTFxcXU1NTd3d3n5+fy8vL6+vr////hNFWuAAAAQHRSTlMABgwS8qXX+yOXshkqwOcxO0VqjHZcT4Kp3nr3a4yX7P61wabU8f3dzP/0rv3o0v7q/vL///T+/f7/////////tVrXHAAABXJJREFUWIWdV4t2qjoQLXDaYwteRBQf+EQUsWB4SRIg8f//6k6wPedqkdo7y7VQZHbmsbMzPD09aJI2nM4sTZUedbj1N9bR6RQdN0Ptf7l3LAczzquSRGPt50FI1jo8VfwMxstw3PsxQs/JS177A0KRLJQf+sujhF2WB3dSUqfzQ4DOmHwsX1GMUOYa9W3p0UzUkVd8hI9RjIM0GYrbSn/0mL80dD8D4IwGGYprAKX/8vIgwCiq6vzFh6WBH3j9nmHNPfvtMQAZACpSY/BzGaxW/tZ1vfCU743HAJRxzvJdTAilhKZBhmlZFGVVRDP5QYC3vPBXq9UuyHyU5nFWiXaWyfRRNkh9L7bBH2KPiwIhCu6MRFP1QX9o43C8hAjswCdnRgvOSxy5/Z+wUeqMtnmKMiQqeWYkdAa9B/P/k0XEWJmmgtAMuwOtwV1qI6ayyPm5QFS0krjDJnd9Nh/c3+e6SwWNRQbUGzRFr68THG2MO4kpo4gBBzNBpHDeVH1pllS8yvdWUwyyPoAAzhUiUIBs3Kho2lqkx/LFV3S5N3KWonrUh2cKr3GNp6HYLvxMnKF+k4U03J/SQOxmssoYz7vNkgoA9U7rmq+DztUS+p4UCDzPPF/5pEKTYWME2joijOWOofSen/v632ckK6yICIDzNEAp9VfdpiZCF0fuKXEBXTGXy791UqzNgWYX/qCVH2RLG90RRNmam5YClAsJjcwPnkuzIykqABBqiFaxv1tO/EljCPCwLEPkmkM4p96HUqgboWUkIEwA+D5sx60duL1GgIsNo7pem0s71UVccuhugKsKBxgFCCEAaBEiaYqFfJZhXevObB/D4pxh8AxyuOx2O9ueWPcB5DmpxTd3dCjsIiqYqB/IR5riCvZxgCANe3AfQN3Qy/mRjA3jHVfnT7uca5ygnY8mLSmoNaWBk2XieqJ0N8ZKGu+eW7SoBuBivQrF1Rf/+mjB6zaAOgWGSVmitOJNCOfq2DJhXIpYBiiOUdHoDvBRCw+kqRCNAhUYtt4dgCr8hkigWjGjNgDwc1MS7dOB4UHpaMqIs8eUNJWRJWabomsOqCfJGJ5aCy9jXyPgdN+WgThIOc9zlliSdfxaRmhv1G89UqRRzFiMy2OvPgq+AFRZg2xeAQzDskKUrjXjWH5x50XaxuPadLcooYtzdXr6HGs+r+JUjL8d0NQFiGiZDJUF+fRiH/6sJPG28Vi6ymF2oqiIDHlRKwNMVbmoJYPhJI/juE1MPsyKQMKOOjSBFAXFMcphIClPWz/GtKqS2bezob4/HfC+8yQbi/d3Z5vSsqSn49xc1pMJ2Xw7l/SOWXDaiB2rqKq+8MLQW097su7GCAQC+vuNvzJNEDr+Ub2OYVmGGCe0YxFv84qdZq3usmG6qe/ekk3tqFaIvcE6KVtzkDoz117t7Bt/yRg778fdzlS0eYSX5vAuFeClJkhJvr0B6IxjqD85jKQndbr1Ubi4g6C8ohTDJJLvrxF6Hkx20IC1CiwBpS+jebOoqeOgFlKGr/nacephXQiJ/i4O6iJq3lHywE6FDMEYc/W/uhak5KeFLJv1mwvH6+YkOm9xBQjYMa7opmwovK1V2VyWx0IpOT3c2RFSfxljxpL+DV2tMEO7EKYHaRCSgrN42TymiCd3O5y7+g2u5aKg2xczYGfkRAVFaN4cgTzHSfdwGN38qzk5/hwAZX1x9A73aqCuyamb4I0mgyl/zPBIOFPhi7gtq5p1pMfmYU9ZJHgSFNHYNF9fn8HeusJeDqndFT9fX01z0B/2J2l+U+cPM95s37bTfPX72uy/N36B/fPLDpavTSes1jdhzcnyH2G//mO/Lxdx++Wl2317Nvt/X5//BUlcOtC5guMJAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 50000,
            actualDps: 36585.4,
            magnification: "1000%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 15,
            actualAp: 2400,
            actualDps: 1531.92,
            magnification: "300%",
            count: "6",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
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
            actualHp: 15,
            actualAp: 2400,
            actualDps: 1531.92,
            magnification: "300%",
            count: "2",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "66.7-73.3s",
            delayFrames: "2,000-2,200f",
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
            count: "0",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
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
            count: "2",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "93.3-96.7s",
            delayFrames: "2,800-2,900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e27024Data;

