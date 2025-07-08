// Stage 2126 Data
import type { StageData } from '../../app/stage/types';

export const e2126Data: StageData = {
  eventId: 2126,
  eventName: "初音ミク",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 126,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 150, 200],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "電子の歌姫",
      baseHp: 5000,
      width: 4000,
      enemyLimit: 5,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1170",
          treasureName: "ネコミク(538)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 15,
            actualDps: 25.0,
            magnification: "1%",
            count: "6",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "503",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1500,
            dps: 2500.0,
            speed: 18,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 45,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 30,
            actualAp: 15,
            actualDps: 25.0,
            magnification: "1%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 1000,
            actualAp: 65,
            actualDps: 15.23,
            magnification: "1%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "笑顔で歌ってみた",
      baseHp: 20000,
      width: 4000,
      enemyLimit: 5,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1170",
          treasureName: "ネコミク(538)",
          probability: "10",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 22500,
            actualAp: 750,
            actualDps: 1406.25,
            magnification: "150%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "504",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 72000,
            ap: 3200,
            dps: 6000.0,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 10800,
            actualAp: 480,
            actualDps: 900.0,
            magnification: "15%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 1625,
            actualDps: 380.86,
            magnification: "25%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "未来から来た音",
      baseHp: 40000,
      width: 6000,
      enemyLimit: 5,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 150, 200],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1170",
          treasureName: "ネコミク(538)",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 1,
            actualAp: 1,
            actualDps: 1.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "500",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 100000,
            ap: 6500,
            dps: 1523.44,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 4,
            money: 4000,
            freq: 128,
            foreswing: 49,
            backswing: 52,
            tba: 40
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 3250,
            actualDps: 761.72,
            magnification: "50%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 90,
                duration_f: 25,
                duration_s: 0.83
            }
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
            actualHp: 320,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1300,
            ap: 80,
            dps: 100.0,
            speed: 11,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 450,
            freq: 24,
            foreswing: 8,
            backswing: 16,
            tba: 5
          },
          stageStats: {
            actualHp: 5200,
            actualAp: 320,
            actualDps: 400.0,
            magnification: "400%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "505",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIEBAUEBAQREREXGxUbGhshISMjIyQuKCo1MTU5ODs+NzAbTFI/P0NJQThISU1ZWVpCbHJhYWIbg4toaWptcnWYcCc9ipJ5gIKFg4NckqR2j5M9qbOKj5G4iT1aqL5StcN2qK6bmppkuMWop6LIrWZL1+KNvrawsLBl0t+7uLa5zaFq6/fpyHPKyclt9//U1NTj4uLs7Ozz8/P6+vr///////9/rSohAAAAQHRSTlMAeMcAC1/oKD78o43btP/QAP///7H//+b//v///////////////////////////////////////////////wD/TaT8wwAABCpJREFUWIWd12t7ojoQAGCucpNYyDYGWahhlaop26W0paKe/P9/dRKotiuisPOpPDavmZkkROm/r1C/hWFKXw/yNHC1759+GyRdBpyIBvLpIWescgcBcsYYI+bn04Q/sNQYAtRDdrpqmqau60ohuOFAMpqmNMuLIi3YNpTVIYAuUshLdopSUQcBqp1+DWYHWjBqDAPkLU/BzxuAWhZj9jBgysd5Fqq/n5U+ZizQhgAm5SO3tElg10zDHAI4lRizp3HgewDFCa/pVh4CiAyyIEyK1LKsdEtjXDB3AGAkfOHApos44lVghVfGAwA9ZxSzrK6A5/N0gvJAYqk/oOwY3DIcZJTgPMdxHO73MZF7A0bMi84FmiR0L9pRlCkqtqPegL0/CCERrajKnNIkIhXbArMvgJv2J5GIMCa0LmcVuT0BvThtgt3ucNoRFQ2lfsCEXYrDLs3lXoBYBBcjria9gGYZX4iIEakPMO0Yz6JdJfcAzLQTKNmkByDXGRyK/eEciAuWGTcBrelBjlvjBVAq2i3A8bA4R8iFVpBt4VnGLWAMrHtCK5K1gRgtl5Z5CwCWtXqez/hWakX48yUA9g3ABADA2dPzfXlhBve+j0c3AAdhhDwPg9c2EFgIYWDe8egGxnw8D2gVFwDAAehcmcHdnQEaAFt5G8BAfDK+moLuH4ELXUA1AKRrM3A86DcAbQPQQ7yKSL8GTKIAN0B7R+w9H+GIUPdKChouFmkEBUBaQAV8RNL4PbgCmI/vcRpDyIG4BWwBhPHiV/FgdAP64+tqE/piBmELKAHyg83Tn0e5G3B+/3naBD7PAeAWkFvYx5un1W+3G3DfN0cAtoDUwhCRzep12g38EAAWgOcdzg8EYmEEo836lRehC5i+rwTA++iD3fkM+EqGxyJ0ANJDA/AZQNDaz74H0bEIHYDx8L7cLHimPFq7qQLC5UVY8yJ0AKboIgfgpbVcWML1o41YCR1AvQzI51o+PxR5E5AowoLQWO8A5N8ZIeRzO0bnNRQAgnhBYt/pABxCFylBTQrnKwmJLgraB3jSAdgwDKMAQuh7/FQ7b8KIA/UH64/7LgBB/g8+hJgfq95fC+HAXIVPAM9+vXysZ10pgI+PFxFvH8/Le7z/awI7x317eXt7fl4vUrurjfZsPl+u5z/ns0Xqn53rpW4vV/P5gljTXO8+UPQ48Wih2Dm/TYhhNMiypD5bMsNIAmdSRYZqalfeC/gHvyHpqgybZTAxTN1UxF+JaiBTlca3Xm38tLGBdrwllPWFQvx2YKEqffvJ0Q2IEOe2UQPNb4T67j9Vv8d14HRP2TdvUi0QyfwLEHxO2uXrwP0HoDxeqXgRKmcgYPDeeaeHhL3qAwE1/LoUirtrrg0BNEkywkoxzGPIaWAaPCStH2A4tjIeja1TjOpQFEdvA/8D/HaSvkb4TT0AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 15000,
            dps: 6923.08,
            speed: 8,
            range: 360,
            rangeType: "単体",
            kbLevel: 4,
            money: 600,
            freq: 65,
            foreswing: 6,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 3750,
            actualDps: 1730.77,
            magnification: "25%",
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2126Data;

