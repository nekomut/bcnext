// Stage 2174 Data
import type { StageData } from '../../app/stage/types';

export const e2174Data: StageData = {
  eventId: 2174,
  eventName: "続・魔法少女になってよ",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 174,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "願い事を決めるんだ、早く",
      baseHp: 25000,
      width: 5000,
      enemyLimit: 15,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1135",
          treasureName: "ネコキュゥべえ(301)",
          probability: "5",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 70,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "100%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 70,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 200,
            actualDps: 92.31,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
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
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
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
      stageName: "訳が分からないよ",
      baseHp: 75000,
      width: 4500,
      enemyLimit: 15,
      requiredCost: 75,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1135",
          treasureName: "ネコキュゥべえ(301)",
          probability: "10",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "004",
          enemyName: "ブタヤロウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAAADAAADAQEDAQIDAgADAgADAgAFBAMHAwIHBAIIAwEJAwALBAAOBQAUBwAUCQQeCgAeCgElDAAiDwYoDgAcHBw3EwI5EwA8FAA/FgBNGQBXHABUHgNfHwFmIwA2NTVuJQB3KAFHOzaELACOMAFNTU2kOAFmWVO5PwDIRABmZmbUSADgTADrTwB+d3T2UgD/VACampq6urrMzMzY2Njm5ubz8/P+/v7///8V1LKCAAAAQHRSTlMABg0U2R6UoSUsOUOszYVYTb5ljHP1ev7roJKvFuLLvf3Z8//l/8Pu/v/1/t79///+rf////7///v+/v////8AQsbFqgAABAtJREFUWIXtVm13qjgQFlxUBEUBXwoXKlCEkqbJDTFQFe///1ebgLa1K2p392PneDwoM08mz7x2/vxH6fwA/AD8APwA/G8A/04kReteey9LV81l1dT7yhUFxbIH7RDdieMnyfzaGaofupM2FwdOAAnNrgIoLoSBM1Eu6ShORlhRwKsA0jxjBD65k5OSJEuKWhPTdRJSFKyAjnwFoGMmrGAU+lqD0DWtuT61zEFHtp/ygkueXQXoPkDuZcGgq/LTVWPshWEKwlDXzAALe5aOjGtX0IL6mIJmVlfWXC8jNGeM5VngAe4adyB9aONYkhVFmSe0BijIk2UFMGfNr4ITgynlEGA6uewAzxDn0fe9FaCNEVqFpHlqvilMY0gpmKqfzzzRIWuWn0FMMIrA8VAGYnwEEE5Rbg6jFHgj44Mw0xo3ZCvzIMNMqOOYHJ3mR0LhDKMg5f+hmOA0Ws2cT5Uga0ZP5wjS8CE5elvACLGTC80Do9ECcU4wiQFBq6mtDX79OtIgTfqjqTkwfPBOFklj2tyb5idPkPCEMZBSEscg89a/f8/VGkLtG2O9pweIntzmbMd1uIscwOKzMJoimgJK4Wa735fr+u5aT+sZhofYZ724jh2JV5CwMwSUc4IoeN0dDoeqXItgqL3+eOjCcz0YxynCaQrSj4sdBaYUPL8dhFSbsSyai6qYCT1XYzkGccSzgdLii2CEorKqttVhu9uum3wYPKKvahwDoy+o7zy87qvydVdtNruNWQMYySXNNsH8Am/Pz7tD+fxWPtSBnMPbZh8CX6tD+VpWh/2mfFs31Yu/Yc+AsN1XnMT9frtuKMhv230AwE1Vh0BgvLlHgO9wgEQSVNvNS8m5dL7tAePVtNntyvVcc17KF6MBILcN3y8QAxS9vDhDmQ+IsSEfW+D99hFE6bJv11UgHSeYZCb/yLfL5gyuVnEchd7IPmtpIhPvoZHlECKSE+hZ55NRMp/upFE0J5y4xtee3HWyOwPJSObPL0xe9RHeh4CjqXZpJkmT4L50xkuzZSLY2V2RwL560V7sBKInsBvRYJnVNlRlK+UtnN7ISRRoLfadzoSHkic6KYo2L1iOQqt9t1JcJPp+zOfn+1Q5ffhcwIiPxcibtNp3JDurt4p4lWQAIkxyKiRv4PBquQIY+YN2gM4wqAkgnm0tecLH8SoMn4IgrOOLXbGbIPfadiiKUkyTYKj6mBKSTk3T0IaiVMVOpPKiv74ZHYsyfxx0XWGU1RUn8ZbNBc67Dr6xm/GihAhC6CqynSCIQkMWogWIz6fE5KkGU7sdQFKGE33GZTGyxvpssVjM9J6Q/nIxW85m+li81W1zog0vLpB8GbOtvq5Pp9ORkL/OpP6Lv9L7vbFtqJ8A/gZPl31DJ4v5JwAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 1500,
            ap: 120,
            dps: 49.32,
            speed: 5,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 73,
            foreswing: 14,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 240,
            actualDps: 98.64,
            magnification: "200%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-16.7s",
            delayFrames: "200-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 5000,
            actualAp: 300,
            actualDps: 391.3,
            magnification: "200%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 5000,
            actualAp: 300,
            actualDps: 391.3,
            magnification: "200%",
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
            actualHp: 1000,
            actualAp: 100,
            actualDps: 73.18,
            magnification: "200%",
            count: "0",
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
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 400,
            actualDps: 184.62,
            magnification: "200%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "12.0-16.0s",
            delayFrames: "360-480f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 400,
            actualDps: 184.62,
            magnification: "200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "8.0-8.0s",
            delayFrames: "240-240f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
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
            actualHp: 30000,
            actualAp: 1000,
            actualDps: 1875.0,
            magnification: "200%",
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
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
      stageName: "戦いを甘く考えすぎだよ",
      baseHp: 150000,
      width: 5000,
      enemyLimit: 30,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1135",
          treasureName: "ネコキュゥべえ(301)",
          probability: "25",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 800,
            actualDps: 369.24,
            magnification: "400%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQFBQUGBgYGBgYGBgYGBgYHBwcJCQkJCQkODg4TExMWFhYWFhYaGhobGxsiIiIrKystLS0xMTE4ODg4ODhAQEBDQ0NLS0tMTExUVFRcXFxlZWVycnKAgICOjo6bm5unp6ezs7O/v7/ExMTKysrS0tLc3Nzi4uLo6Oju7u709PT7+/v///9zib0wAAAAQHRSTlMABgwSGiQ4LEFK0VVf8W14gMPekbmIl6Cxqej71su+4fX+6dn/9uv/9P//9P/8///9////////////////////kGjFlQAABYtJREFUWIWVV4mWojoQbRAFGhrcQVBbBGVfAig7/v9fvcJxQcUZ39WjJFA3taVSfH39AzhBtAaDAfH+0U70aJ7Br+IkMxdo7P+Ig8hiPO9fuKiZuv/l8b+LPC5PTVa73ZpqFsUIVtwjZMx6/0OeEbdeFKgcLIr1+ZWB0siYfe4Egl3vw7SI7DnIEPzSivIyNib9j9dn10aYV3XiiiTWY0d2VNZVbMz7H3oRZxr5+nTK/DXVoxZGWJ7q6mgL5GcE2EDYhwXIn0q0YkleDbL6VNeJtRh8RkAM1aBZ/3SqI3VIL+xDM6gT50MCnJru0OHY4ID24mzpROfrUJ+yHzgB65H8WNGu2Ei/m+tIkUY8+a9cwklOWG506woX4FyvPVtd0H9PJpyer7ZeGB8uOCaA4+26MelvDFifFbcWSqqzBztQ5+FeeO9JjOBGOz8u3ok3yCC73yY0pNwOZW+X/6NDYr8NJkaJO5T/VRxQ+CummwAj59sgfZWvH6dKpLLdBLDnvKR6Fa8+JMAG013UYX8ZJ+V9tirydwQE9+unHTZnvhteHFOfqjgIg26CxoNxVwAKZFpX15Sxo6M3BD3u1+lSABhCx/STxpX10dX84xsCcrJFxYtw/Wddz0KNd+vI8ZO8mwAsMA6vITiVaVrW5TGMz/cy2A9H/5kAw2GMMSs3e1UfFvfi4lQX5R/CApTRl48EGElDlcAhBh0WJJ6iuC3XZL4iy08E5FCA84sYboPyleDgyLKZ3MfpKwFGj7554qs/24UvLjjVGTLNoGVaHrmu+UhA8JIEB2B/YnRlQZVFUXqdbwKZHw9PThwIcAAOMFLoJIDToDVbJnEUxx4UhN6dgl57vsr0aNGIryZ0KFLmWZankatpuqVLAsdRt7rGqCja8316etMA9l+eF0XV7OPLTHYIAxT6uqabuqbIP9vf6a0ysio6esJgINjH68pl7DpeEENQLvrX+SEKw9BSPCi2kaW4ob8V6QsBtw+zUGXJmZ1cK0cZmYqm+2ldJUn5xxFFlmVpoFsBQr5uRnni//IXAh5OwcSeU0MguLseIRRlVYLiVmjrNDA1XdMc2N1VvJ3fCcrCX/OTOwE4ocySrCqRE7YjU6VhAICqXdfHfZugivYL8W7CqTqEKIirwtMekwuYAc1joMGkRVBn7vK7pUHuW65/JkCv6X1Gjm4+4FR4qAw2P9aNAMIQZ0VVV0h3ozTN0keAP7PIXjH3RMpOdWzJ1t2EujybDltHN03LsUz4u30tB45bY8Vf2yVybkMGFYHS0qDlNU9XIKRtaMpytBK5W6PQY9Um4rHlvBJAAUlDUwviFiJvM2doirhvBiiGQVqlnnOsuzZT4urxOacvnyz4ZfGHgoJTi60fxQ1Bl7+Pln5ojzN/RX89Aoeedu/qXSYADvojQequnwm+8D4zX0mtKPyDgHomaCjYqf2xBh0EzdH+jsDU46qFxF11vjX0J3anCXWsKx5qIdDHXFeX1Z90agDJqD0n0mbKdjRJQNCVB/XB8/xHBL6x7uhxiKERdZwLdd7UhQdUOdoPX43AWeivO3z43OAAqs43F6wpy9lHSP3ze9CLDdwS9irsVuv8Y99xnoGp8w0YG+qs670DI2eSYlq6IivwsxSFxQXiWNYsR5dlxXT0zXKxELjujh2jRkYYe5vxDgXbCTW4gh4urTDypPEmiH11RlED4k2jSgp2fHSnExXaKAbHrsDJ2R6F9mK2BoI1BTc6pTH8/CCszY4MY80N7qC4lW4uOWqyd/eTPt4lj/cHNMOwgmRq0mKylOXx3QVg82IMM3NekGRJYBh60H92AUYOp9+A8Q9Akn5kWf55BExIYwlujr+/R9PhcxAwguFnk7kgLERxOmrw/Yjz3FQUF4Iwn8x45pZG/wHoT/cGi/0BoAAAAABJRU5ErkJggg==",
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
            actualHp: 360,
            actualAp: 32,
            actualDps: 20.44,
            magnification: "400%",
            count: "10",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
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
            actualHp: 400,
            actualAp: 60,
            actualDps: 48.64,
            magnification: "400%",
            count: "10",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "10",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "284",
          enemyName: "ゾンビワン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 7500,
            actualAp: 900,
            actualDps: 574.47,
            magnification: "50%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "285",
          enemyName: "にょろろん",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 16000,
            ap: 2000,
            dps: 1621.62,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 60,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 8000,
            actualAp: 1000,
            actualDps: 810.81,
            magnification: "50%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1500
            },
            "revive": {
                times: 1,
                duration_f: 180,
                duration_s: 6.0,
                hp_ratio: 50
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
            actualHp: 7500,
            actualAp: 2500,
            actualDps: 4166.66,
            magnification: "50%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
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
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 800,
            actualDps: 369.24,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 800,
            actualDps: 369.24,
            magnification: "400%",
            count: "6",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 800,
            actualDps: 369.24,
            magnification: "400%",
            count: "9",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
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
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
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
      stageName: "さあ、君は何を願う？",
      baseHp: 300000,
      width: 3600,
      enemyLimit: 10,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1135",
          treasureName: "ネコキュゥべえ(301)",
          probability: "50",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "039",
          enemyName: "ナマルケモルル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkKCgoLCwsYGBgcHBwdHR0eHh4fHx8hISEiIiIpKSkqKiovLy8xMTEzMzM3Nzc4ODhBQUFHR0dPT09PT09ZWVlbW1tiYmJlZWVycnJ0dHR3d3d/f3+JiYmRkZGhoaGlpaWqqqq2trbExMTOzs7Y2Njg4ODl5eXr6+vw8PD29vb6+vr///////9GLDfdAAAAQHRSTlMABArdEX8cpf5WvNLn9TlJIy6RcGQ89HSbh0q37GH/0Hj0h/6V0P67qP7P/9Hk/9///+////7+/////////wD/E2hCfAAAAvRJREFUWIXtVFlz2jAYxA736UAghMMETA3CxJawTkuq//+/qmTSBtN22kxf+uB98Hg82v12V5JrX/8RtUqgEqgEKoFKoBKoBCqBSuB/FPgMnLo3HI6GXv1TrO+oT9f7w/nN4HR8ndadT9LdxTEhXCqttVKCXg6vj+5n+N7+InT+AS1Jsnv8OxeOt1g8HcgtvYCi5/WfTThOfX26XC6sTNY61yLLkvVvPDiu6zoGzfXL/pAIztn9eKk4jDE/T39Fd6evx+N+v3vdHS6IMiwQond8ijgXPEV0//OOOtN9QoQUjBKCuc4JYxDLcgM8DEMfEIlZsrjnN58Tdl2tFU6zXFPFuborAPoh8NtAKRK93PEfl/DHNElNdG007urLZUylpDHW5rm8i/8cy/I0Rm/45lUZNxzpDDGUMgDYqSwwTT4GalOAprG4pQv0dr5wnmqK0ziM/TZ6Kws8p8byu1Nlzg6D9J1qn1IkL0NvcUyRSDNNIUGz6Et5B3aUk+sxk0ZASRzbRrS+lkrg3O5acw9IapZRLMJgXhLwzhJft5xjE0GkEbSx6TWGRkuvWFZ/AQRibiyA3rBU4S7OYFoszpAkkkUhs5VFVwEK5ourgtv5AiHEAq86pbPcHG9gim1iLSFDDIbGAI0LG1rIOCaXpVcwHG+yOSXn5ejmNjneaDLurkBUtKghhiQCIhcxE9Ly4wjJXIatybAgOU3PK/2Z6s+bbWAAASoqw1GUQmJyp1pyjCAI7YZmYRCs5l7tJ7heY+X7IIoARBG2Z5cFAUAq5xFCJi2hBAHCMwFWq+225Tm30R232Zmb8X5Alc5YajITmbMQ2AYzjIkoroIMfT8I/UG/Pxh0x43JU8f8XG0ar9Hqraz5ILymV8pmSNttH9GbW2Td++0PDAb9h27rqV57HPcGs4H95GMz3/pljJHQfplFEBJ7r6l17xuUFXrdhunRHXVGnUlj3OpuTpveQ7+/MpgNvmNWYLsNt8a9wUOv1+22WiaEzeDUvgHfiBulYfASJAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 563.38,
            speed: 2,
            range: 450,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 426,
            foreswing: 27,
            backswing: 49,
            tba: 200
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 12000,
            actualDps: 845.07,
            magnification: "150%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
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
            count: "0",
            spawnTime: "19.3s",
            spawnTimeFrames: "580f",
            delay: "19.3-20.0s",
            delayFrames: "580-600f",
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
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "19.3-20.0s",
            delayFrames: "580-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQECAgIEBAQREREcHBwkKSQqNicwNS43MycuPSs4QTRAPDk1STU6SDY+RzaTH0ZBSzxLSDpBUD5ZSCdFUDo/VjxDVD1MT0lMVkZZUzNIW0NXUVJKXEZHX0NMXEN8QFdJYUVaV1JVW1RYWVlKZkhWXlRLaEdaXlJPZ0uXQV1Wak9UblBmY19iZl5TcVJmZ15Uc1FYdFNibV9adFacUWt8az1aeVV4amZee1pycW9ff1txc3BggFxjgF5nhGKJcnJnimNpiWR9fX18f3tsjGZtjmmMg1FukGlvkGpwkmtylG2SgoJ0l3B2mnB4nHKMjomXiYt7nnV8oXa6gXt+pHiVk5OBp3ugoGmEq32mnmWqlZjFjoifn5+1np2opqS0q2+urK3anpnEqqq2trbqqaK8vLzQtbfGwMPkur3IyMnowsXPzc/V09Trycrd2trz0dDi4uP32tfo6On+4eDt7e7y8fL19fX4+Pj6+vr8/Pz///////87vo6+AAAAgHRSTlMVKEp7rtUA4PDPoML2e7D5KZJy/6PxgvyVUm/QneMA/mg/f/9U4Mn0KrcN1UX/W0L7xSTaEi+uAP//H/8B7hXcJwAA/hIA+9kAAPwOAAAA/wAAAOz+AAD/AP8A2wD+///9/////////P/+//////////////////////////8A/3HcTp0AAAWgSURBVFiF7ZXpW9pYFMbptNa1OrbWBeyADG6VFlzbihsoNNHkkkQTAxOcFFMQAYkxTck291+fE8RRmM4zH2Y++n7gA7n395zlPef6/viP8j0CHgGPgEfAI+AR8Aj4nwEinfrwgSEIkiBJVhR5nmVZjuVulQ8NbLKIRjRFEGmSokmSP2Lz4kN1AwSGZRnUFsPFgvPjO/AH6QFomqLXB/dY9FB/A/AcxzIM3RJiosoXZXaKZchWAEzqZWZ+h2MeqhsgegAIuQ2YUr6e2dlxEqUIkkEzcxUzuJDceqgfAygKtfLg/MrFqYLLw+PT0+NTAzkLlxM//9KhHwNIkhJAfH68dHGR1XCjYRiqcmK4xuk+RJBMJv8lAjKdZhAkyPlLF6eJInZd27axY2D59+21dMoTHG/pHwAEQSGoJR872c9VNNtqy84mAjTn9YnhW90UBJ9IEh+2WABQnQASCaIorb9WLc217lUZFliBZ1OIa7lA4CEC4u3bVJJC6YdduAXkjwI6btoP7jc1OSoJIkoiXrgDRPpHtnfnJmdSLNEGMBSTghT4PD+mYl11LPc2BtPFbtlYPciL5AOAsLMeWtWwlgtMkZzgGYnnD1a2SETzkl/Bbl1zzMvL1n1brTpqQ58WxXSSvgcQFLm25Li4mRk4kryyCPzwpzeTK7QUy2DLKTZx9eOrKsTgaPuvSoaCc9F8KsUKLYAIgDTBCGE4YOPy4FFehCCE4drhyMTkyrJpO1rCdRvv3mkOAPR3r6pNBZsBes0fbs8U5xNInpfGK9huEXi4zkt7ry+nJyeGdNfCcgAcoBuOZZqWramuWnGxMvDm9HDBcxtJwSyIghTbvq0STsywMEe8FH1T2+hXsWU3NyJFbDs23G+aFiSaVcFTwdHjVQJmnibTNACkvVnztlW44ufBAyQtzAydF+pw/nhdDMtNx7HVel3HGMv9ZWzh4lIhIvEw3SQBAGi24UKnHDhfDwnwH9qamlMSh+fnenUQ9suLYEUzLd3QG0rcv7mNbbt8PrTAea2mPIAw3MBWs64Ui0o9+5IktxbGZ7M3ti3HC+fxidGXL7YN0zDNRq7fP7UmcIMGLhcS1fiLAxgEikA+KZTDlmmoumEYeiXYP716Uru5qtW+mXpiovDp148yJAAZ4kyMRUT+/dBJtRBXv9fOBqeSiKE431HA+2x5PzZWR+InpS/Zs+ub69qVljk7yV25uFUf2wwgRAtHryeXCsFq7frq29X+7Jg/uueLyPje6o5WloMjX759r119LyUaULW7QXKaizTDCe8//VYY+XpTu/l2c3l5eZYYGvCNeR75S64bD+ay+8H9WmJExXdjZJuu0QiDyfPhw0N/dLZUOytdl4ZG38c2aV/A6pAp53JyvC84GD8xbu+DgQxLLxejAsuJR5EVUtgc3d7vnV4ODDAojXxLbgfAhrCx1qiUrUwT6mLbbt1w1XrW+LwDi0Tw1jXUYi00upPaokSUQr5F07Y7g/BugWXmYTxc+FTRsBJvNqe9d0JgKHgdYGenGJ5MUbDNkC9UwVa3YPCL/s/YMeM53BypYjmH1TADLxQ8GABAFJGkOCJFtgDEnOl2A3A9HtuUsbu9sIzVgSJWsrgegT1FI5byXowOgLS3anSXQR1byUcU3Aixi1ieOcbVDC7HGC97RFDdEYjS5qLeQXCbcwQnRGVcjibnsLy24WhxLG/CLmaYFqAzAlgqB8sG1KFdSijc7p7EC8ycrU2+XcTqxrBqBq3jTYEHwQSTqCsCkc3vLNaxt1Fa5dN31yUxn5fAouXjoTI2Mhmc0arh9qsOS5fqBggsEdqtGA44wFKPwzuwL+nnvieDdUud792O9/Xp1Vyx/4nv7jXrTgHswaCtyPTy7ufdRf8KQTN57vmTn54+6+nt7Wmpr6+n59nTn563lUTkPeBPaTZ+s0u3dNsAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 1600,
            actualDps: 738.48,
            magnification: "800%",
            count: "7",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 1600,
            actualDps: 738.48,
            magnification: "800%",
            count: "7",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 1600,
            actualDps: 738.48,
            magnification: "800%",
            count: "7",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
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
      stageId: 4,
      stageName: "君は神にでもなるつもりかい？",
      baseHp: 450000,
      width: 4500,
      enemyLimit: 25,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1135",
          treasureName: "ネコキュゥべえ(301)",
          probability: "75",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "1",
            spawnTime: "45.0s",
            spawnTimeFrames: "1,350f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQECAgIEBAQREREcHBwkKSQqNicwNS43MycuPSs4QTRAPDk1STU6SDY+RzaTH0ZBSzxLSDpBUD5ZSCdFUDo/VjxDVD1MT0lMVkZZUzNIW0NXUVJKXEZHX0NMXEN8QFdJYUVaV1JVW1RYWVlKZkhWXlRLaEdaXlJPZ0uXQV1Wak9UblBmY19iZl5TcVJmZ15Uc1FYdFNibV9adFacUWt8az1aeVV4amZee1pycW9ff1txc3BggFxjgF5nhGKJcnJnimNpiWR9fX18f3tsjGZtjmmMg1FukGlvkGpwkmtylG2SgoJ0l3B2mnB4nHKMjomXiYt7nnV8oXa6gXt+pHiVk5OBp3ugoGmEq32mnmWqlZjFjoifn5+1np2opqS0q2+urK3anpnEqqq2trbqqaK8vLzQtbfGwMPkur3IyMnowsXPzc/V09Trycrd2trz0dDi4uP32tfo6On+4eDt7e7y8fL19fX4+Pj6+vr8/Pz///////87vo6+AAAAgHRSTlMVKEp7rtUA4PDPoML2e7D5KZJy/6PxgvyVUm/QneMA/mg/f/9U4Mn0KrcN1UX/W0L7xSTaEi+uAP//H/8B7hXcJwAA/hIA+9kAAPwOAAAA/wAAAOz+AAD/AP8A2wD+///9/////////P/+//////////////////////////8A/3HcTp0AAAWgSURBVFiF7ZXpW9pYFMbptNa1OrbWBeyADG6VFlzbihsoNNHkkkQTAxOcFFMQAYkxTck291+fE8RRmM4zH2Y++n7gA7n395zlPef6/viP8j0CHgGPgEfAI+AR8Aj4nwEinfrwgSEIkiBJVhR5nmVZjuVulQ8NbLKIRjRFEGmSokmSP2Lz4kN1AwSGZRnUFsPFgvPjO/AH6QFomqLXB/dY9FB/A/AcxzIM3RJiosoXZXaKZchWAEzqZWZ+h2MeqhsgegAIuQ2YUr6e2dlxEqUIkkEzcxUzuJDceqgfAygKtfLg/MrFqYLLw+PT0+NTAzkLlxM//9KhHwNIkhJAfH68dHGR1XCjYRiqcmK4xuk+RJBMJv8lAjKdZhAkyPlLF6eJInZd27axY2D59+21dMoTHG/pHwAEQSGoJR872c9VNNtqy84mAjTn9YnhW90UBJ9IEh+2WABQnQASCaIorb9WLc217lUZFliBZ1OIa7lA4CEC4u3bVJJC6YdduAXkjwI6btoP7jc1OSoJIkoiXrgDRPpHtnfnJmdSLNEGMBSTghT4PD+mYl11LPc2BtPFbtlYPciL5AOAsLMeWtWwlgtMkZzgGYnnD1a2SETzkl/Bbl1zzMvL1n1brTpqQ58WxXSSvgcQFLm25Li4mRk4kryyCPzwpzeTK7QUy2DLKTZx9eOrKsTgaPuvSoaCc9F8KsUKLYAIgDTBCGE4YOPy4FFehCCE4drhyMTkyrJpO1rCdRvv3mkOAPR3r6pNBZsBes0fbs8U5xNInpfGK9huEXi4zkt7ry+nJyeGdNfCcgAcoBuOZZqWramuWnGxMvDm9HDBcxtJwSyIghTbvq0STsywMEe8FH1T2+hXsWU3NyJFbDs23G+aFiSaVcFTwdHjVQJmnibTNACkvVnztlW44ufBAyQtzAydF+pw/nhdDMtNx7HVel3HGMv9ZWzh4lIhIvEw3SQBAGi24UKnHDhfDwnwH9qamlMSh+fnenUQ9suLYEUzLd3QG0rcv7mNbbt8PrTAea2mPIAw3MBWs64Ui0o9+5IktxbGZ7M3ti3HC+fxidGXL7YN0zDNRq7fP7UmcIMGLhcS1fiLAxgEikA+KZTDlmmoumEYeiXYP716Uru5qtW+mXpiovDp148yJAAZ4kyMRUT+/dBJtRBXv9fOBqeSiKE431HA+2x5PzZWR+InpS/Zs+ub69qVljk7yV25uFUf2wwgRAtHryeXCsFq7frq29X+7Jg/uueLyPje6o5WloMjX759r119LyUaULW7QXKaizTDCe8//VYY+XpTu/l2c3l5eZYYGvCNeR75S64bD+ay+8H9WmJExXdjZJuu0QiDyfPhw0N/dLZUOytdl4ZG38c2aV/A6pAp53JyvC84GD8xbu+DgQxLLxejAsuJR5EVUtgc3d7vnV4ODDAojXxLbgfAhrCx1qiUrUwT6mLbbt1w1XrW+LwDi0Tw1jXUYi00upPaokSUQr5F07Y7g/BugWXmYTxc+FTRsBJvNqe9d0JgKHgdYGenGJ5MUbDNkC9UwVa3YPCL/s/YMeM53BypYjmH1TADLxQ8GABAFJGkOCJFtgDEnOl2A3A9HtuUsbu9sIzVgSJWsrgegT1FI5byXowOgLS3anSXQR1byUcU3Aixi1ieOcbVDC7HGC97RFDdEYjS5qLeQXCbcwQnRGVcjibnsLy24WhxLG/CLmaYFqAzAlgqB8sG1KFdSijc7p7EC8ycrU2+XcTqxrBqBq3jTYEHwQSTqCsCkc3vLNaxt1Fa5dN31yUxn5fAouXjoTI2Mhmc0arh9qsOS5fqBggsEdqtGA44wFKPwzuwL+nnvieDdUud792O9/Xp1Vyx/4nv7jXrTgHswaCtyPTy7ufdRf8KQTN57vmTn54+6+nt7Wmpr6+n59nTn563lUTkPeBPaTZ+s0u3dNsAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-33.3s",
            delayFrames: "500-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 3200,
            actualDps: 1476.96,
            magnification: "1600%",
            count: "16",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
            }
          }
        },
        {
          enemyId: "579",
          enemyName: "インキュベーター",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 200,
            dps: 92.31,
            speed: 9,
            range: 145,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 65,
            foreswing: 26,
            backswing: 25,
            tba: 20
          },
          stageStats: {
            actualHp: 300,
            actualAp: 20,
            actualDps: 9.23,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 2
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
            actualHp: 10000,
            actualAp: 1,
            actualDps: 0.05,
            magnification: "100%",
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

export default e2174Data;

