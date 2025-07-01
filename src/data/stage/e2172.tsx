// Stage 2172 Data
import type { StageData } from '../../app/stage/types';

export const e2172Data: StageData = {
  eventId: 2172,
  eventName: "ゴジラ対にゃんこ",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 172,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "謎の巨大生物現る",
      baseHp: 1000,
      width: 6000,
      enemyLimit: 10,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1174",
          treasureName: "ネコゴジラ(611)",
          probability: "20",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "550",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 600,
            dps: 42.35,
            speed: 3,
            range: 3800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1954,
            freq: 425,
            foreswing: 130,
            backswing: 101,
            tba: 108
          },
          stageStats: {
            actualHp: 500,
            actualAp: 600,
            actualDps: 42.35,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200,
            ap: 20,
            dps: 20.0,
            speed: 10,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 75,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 10
          },
          stageStats: {
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
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
          enemyId: "000",
          enemyName: "わんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90,
            ap: 8,
            dps: 5.11,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 15,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 90,
            actualAp: 8,
            actualDps: 5.11,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "災害対策本部設置",
      baseHp: 100000,
      width: 5700,
      enemyLimit: 10,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1174",
          treasureName: "ネコゴジラ(611)",
          probability: "40",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "550",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 600,
            dps: 42.35,
            speed: 3,
            range: 3800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1954,
            freq: 425,
            foreswing: 130,
            backswing: 101,
            tba: 108
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 48000,
            actualDps: 3388.0,
            magnification: "8000%",
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
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 80,
            dps: 150.0,
            speed: 15,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 550,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 1
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 320,
            actualDps: 600.0,
            magnification: "400%",
            count: "5",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 280,
            actualAp: 120,
            actualDps: 200.0,
            magnification: "400%",
            count: "15",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "ネコによる最終決戦",
      baseHp: 300000,
      width: 4400,
      enemyLimit: 1,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1174",
          treasureName: "ネコゴジラ(611)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "550",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 600,
            dps: 42.35,
            speed: 3,
            range: 3800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1954,
            freq: 425,
            foreswing: 130,
            backswing: 101,
            tba: 108
          },
          stageStats: {
            actualHp: 93000,
            actualAp: 111600,
            actualDps: 7877.1,
            magnification: "18600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e2172Data;

