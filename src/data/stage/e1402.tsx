// Stage 1402 Data
import type { StageData } from '../../app/stage/types';

export const e1402Data: StageData = {
  eventId: 1402,
  eventName: "【限定】ご来店プレゼント！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 402,
  stages: [
    {
      stageId: 0,
      stageName: "無くなり次第終了",
      baseHp: 7777,
      width: 4500,
      enemyLimit: 7,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
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
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 150,
            actualAp: 30,
            actualDps: 24.32,
            magnification: "10%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 150,
            actualAp: 30,
            actualDps: 24.32,
            magnification: "10%",
            count: "6",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "336",
          enemyName: "ゴールデンわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1500,
            ap: 300,
            dps: 243.24,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 750,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 150,
            actualAp: 30,
            actualDps: 24.32,
            magnification: "10%",
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "337",
          enemyName: "金カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEDAgEGBgYHBgcIBwYKBwMICAcKCAUNCgQODQsODg0UEg8dFQMpIQYkIhssJhMsJhNDLwJEQjpWQBNKSTZySQNpTgZWUUB/WwNpW0RgX0poZVunXARzclGSdgR6dFaBdVS+aAN8fFmkhgiWil3eegK5lgbFogS7ozqlpHCnoImrqlbTrAarq3jkuAPSu1H2xgL/ywL60Cvk1Y/611P96Jjz86z5+bL/9Mr//pj9/LP//rP//ff///+gHidEAAAAQHRSTlMADRb/kzQh70PbtFdre//vlqvb/rX+MO3/0P//huL9G/7x//9O/v3/////sP0D/2f//f////7//8s//wdwHv8A5qEsqgAABEBJREFUWIXtVmtzokgU9YVBBASx16YZtMWFNAzLdCOPjc4k//9fzeWRUTSyVuXbVk5Vkq4k5/Q9h8u9Dt4+icGXwJfAl8D/RuAO3k73/vIgTqe72g/h7devz5VwenmZfoL9dvr187shb6+K2P7zGB/oLz//zWP379OFwlDSvm0fy6URKEux+ussMFLtQPx4NJfTafs9P+aBMfpzv+aKzJ9vHxQYDKZ2fixyd15xRwDZzgtuyw/zG4FCrGRZM0yA4oiQLg1NHv039yxwKOLlkkZCiIgShLw4jl1DGg6Hd0gjSVY1dS7LkiSpS1YWh0MWIF4eAWXKsBNlWRGsDKijkriWGcqmvdt53s51bdvdedhPeHpIQ54BiiJLE0zgFyCJ0FJTVXWiXbbaaarZcV60yIvsEFJC+aFG2nznCRwSJ4g9J9gtULAzLgLZfnOBXlblllnWEnjLTNOzju/lQgQB8/I8d89P5fRD5EV5fH19rQQOHaQ+8tNGEX6EgUCYhYlghO3m59BXDf9YFld04GGdpLUQpmllxBpbYUp1na7lqdTmMHezAq6vgr9FSJOabyEcVgdGLJpYFvFNaaJMmgdoRBncf118BxzpBAR4wliSMO6H4Xo+nWhKW0AKBRw/vP/dCAhgynxs6TpK6oKeJrI8mVV8yY6y8vW1j18x9AaNk5Qi/Wk2m03qBIMEHBx7DEB4jFFkWdgPOU94Ai7oQlEUFUIcqjuPgUDZd39CMEIYE0IpxQCECZpMh6PGgCCs6HfACXneeBHz4Yv5EZQgUqa1PaAGgoRFr4ODj5+fN0Ge8folz/MsiuOd2r6DZsRJUvQ+Q042z8977DjY8TzHcVzbNAy17SF5SdZWWBz7IgitzZ6QfYXNBm/W2nR0HgoSjAAlhBe2z4Fu4bEOVQA2ZG9er4yRGRZ9DlI8ttB4jGoBstlo17MEYij62jDUxwgErFoA79fzwbXAStwRaMqicLsFAnvg78l+dbP0QCDrEQAHNVqBjXEzVEemONzOgT+AAVCjzmBP1uo1fzA0ovsB1BFUaJ4CCNxEAHsr7mtD1ghAL1R9gNfqdDS6cqEGfQK0vt8JPGhD6EPPtVcro7vl5ru+NgIBCyORZQImphDHElZV0E1SdvsEmI72e+T51AsC3/ejGN5IanYEYBP2CMA4Rg7skwZBbcNZdjzAc+wLAUa5KC4BS6XrAR5D7QFWUNojdInE7Cz6NsWk3gAXV98rCV7QboqSnVceOEY+v2Rznh3andb15HczgF5sPITYwgzWegMeEq9KN4VF7TNYiEnIAL5PbXN+1UrvncCZpSxg+FbA1nK2qCpLOUPKDFXTmBBnOdHm0s0nnWnjAf55rZpx5FfAiiyZbbpEVdcckGax+eHHpKERRGEFhrTJrjkSBVaXE9AKC01d1gfqTD4SGMKSWy5qwL56ak/V6npq8X6azRS1M1B+A1hMRR0m2KxFAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 638.3,
            speed: 6,
            range: 210,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 100,
            actualDps: 63.83,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e1402Data;

