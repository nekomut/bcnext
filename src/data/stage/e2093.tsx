// Stage 2093 Data
import type { StageData } from '../../app/stage/types';

export const e2093Data: StageData = {
  eventId: 2093,
  eventName: "ビックリマンチョコ",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 93,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "チョコ裏に潜むシール",
      baseHp: 4500,
      width: 3600,
      enemyLimit: 9,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            count: "6",
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
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            actualHp: 1300,
            actualAp: 80,
            actualDps: 100.0,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "24.0-24.0s",
            delayFrames: "720-720f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 150,
            actualDps: 46.88,
            magnification: "3%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
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
      stageName: "悪魔VS天使",
      baseHp: 30000,
      width: 5000,
      enemyLimit: 12,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "80",
          amount: "1",
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
            actualHp: 140,
            actualAp: 60,
            actualDps: 100.0,
            magnification: "200%",
            count: "24",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
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
            actualHp: 160,
            actualAp: 60,
            actualDps: 112.5,
            magnification: "200%",
            count: "16",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            actualHp: 160,
            actualAp: 60,
            actualDps: 112.5,
            magnification: "200%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "8.3-16.7s",
            delayFrames: "250-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 450,
            actualDps: 56.48,
            magnification: "30%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 1500,
            actualDps: 468.75,
            magnification: "30%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "はられたらはりかえせ！",
      baseHp: 75000,
      width: 3200,
      enemyLimit: 6,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "30",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 16000,
            actualAp: 1000,
            actualDps: 833.32,
            magnification: "400%",
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
          enemyId: "012",
          enemyName: "クマ先生",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAgECAgIDAwMFBQMHBwUKCQgKCgkNDAYODw0REQ0TExEVFhMXGRMYGBUcHRgfIBwiJB0pKSctLSkwMC02NjU3ODU7PDc/QD1CQkBDQ0JKSkhTU1FVVVNXWFVgYF9lZWRra2lvbm50dHJ4eHh6eXmFhYSHh4aRkJCbm5qdnJynp6apqamvrq60tLS7u7vEw8PKysnR0dDY2Njg4N/l5eXq6uru7u709PT4+Pj8/Pz///9+qm8/AAAAQHRSTlMAAwmGwBA4qWkbJOAULJo5RoD/UmTOaXif84ngrp2Cx6z4u8X34NDr/9n/4v/v//70//z+/v/+/v//////////OKBV3AAABAFJREFUWIWVl+t6ojAQhoVd2sJqtepKZXXV0nqIAZRjAiG5/7vaBGjdynn+4cO8Zma+fAmDQWVIQ1X+ehjO/v6dydUv1oSqv5mGVjwohhWE55nUI182LJx4q2H+NPpIGENvwx6A0Ykwmp7HsqqqmjYRALLX2vNugHPKWAqe1+Z+fzqd3iMWXwylB0A1Mf9P6ESER5oSSu2V2iN/IC0OgkAZZSJIlCCzF2CgbRBLXSfJ8ilcgvTSawqDyZmyaDl1RTpvxvSYRus+QpB0n7HkuAt5Pk1p7KOeUxhusSgdhd7VBkfoRXyq1qQHYMzHSJEDoL2bTqfQBsAjnt69CdLCZcQF14jQECyPmJIQwqBHE+R1RK8wDMUQ0c6ljFyxDXtoWTNjDHAEUIJ9CIDjX4/86WPcuYK5RTEIiAMAgD5BV9v2A96Il641DLeI0QBcEcYJF3KCAkeA7N9dBylUxNJYDMG2Ia8BinYybznrli8bQa7gOPQ9PwxRQrMtEbx3nMNoT1hVhKCbGKXFhVYCELTmXbQkWlgZuKOWhIwrIwZo38EUJN3L3y/VEYO4y4YqKkiT0goSEPtGexO4IfP/pq5XBYjbjY3PIFsADKoA1GrVkpJXkABcBWCB0TaH0SkV3cOg3IOY/9ZqbMJKRISwPEsBoJcWLXEryV4O7LIaBYC1mbNqJvUAyFdA9qNGwPicJ3pOGYAh32RtNUysAnAt5fPNJHZp2FiDNM97WAmIoBhQ0qil7ESqAwRQrI6em7xVXof1AC9v7GXeAFC2uB7gOvlCmjbUsJgin0IZcM37g5sOGO3TDv2yDqiTbVBKTg1K4HejPLEsJH7LKcy6yVU+dSQ6fk8gICp6sagHTD4BCJSsnTtaATfqAbNCiLe3bxGBojy8rQfML1/rLXm7D4qqErMdQMuWRp33oiqy77AC6twpiVKwKzRCzx0AzLvvIvnYFCqlVheAvwu/A2JzhdoBX1Pgt8y7JqDtSuiANgPGn0pk6P1uDNE6t0sSpQ2AYi8I3zjeHQyeboR8jtTdWId6QOGpfBnFwXDT82Wm+67LTXWs/64HcD+IQkosl18wxRFJXD8K/ezGfB7rzp9NwC1ReaoHyGv/40DClYnz/RxtjPX6Nft8OY303cvYPPCt2OCqkn4w3tBlPj/bTjawuSTLWV3cS2fPmjR5afnweXgeLaz9SFn88bLZa4PitMJbReFOJLWdrdJQGuoLeaC8BryBXmZ/2XnZ53tD4lnyK+9ccsodXNyautxN/g8BoBc9/1fVjBttqBoQsOitOIP41bXD1eR78LsauX0tz6xGK67Kl+eW+6qpRTxsvM1IURS5Yx/kh6cfj7vlz1v8Wv76+fj4/OPpoYz4ByXseuoTKbpdAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1000,
            dps: 280.37,
            speed: 4,
            range: 350,
            rangeType: "範囲",
            kbLevel: 10,
            money: 2000,
            freq: 107,
            foreswing: 8,
            backswing: 8,
            tba: 50
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 4000,
            actualDps: 1121.48,
            magnification: "400%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
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
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 3750.0,
            magnification: "400%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 5000,
            actualDps: 1562.5,
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
      stageId: 3,
      stageName: "夢を箱買い",
      baseHp: 160000,
      width: 4000,
      enemyLimit: 7,
      requiredCost: 130,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "70",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 7500,
            actualDps: 2343.75,
            magnification: "150%",
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
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 7500,
            actualDps: 2343.75,
            magnification: "150%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 7500,
            actualDps: 2343.75,
            magnification: "150%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 7500,
            actualDps: 2343.75,
            magnification: "150%",
            count: "1",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 7500,
            actualDps: 2343.75,
            magnification: "150%",
            count: "1",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 2250,
            actualDps: 282.42,
            magnification: "150%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "驚き！キラシール",
      baseHp: 250000,
      width: 4800,
      enemyLimit: 15,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "30",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "205",
          treasureName: "ビックリマンチョコ",
          probability: "100",
          amount: "2",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
            baseHpRatio: "100%",
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
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
            actualHp: 21000,
            actualAp: 4000,
            actualDps: 4444.44,
            magnification: "50%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
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
            actualHp: 21000,
            actualAp: 4000,
            actualDps: 4444.44,
            magnification: "50%",
            count: "1",
            spawnTime: "36.0s",
            spawnTimeFrames: "1,080f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
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
            actualHp: 21000,
            actualAp: 4000,
            actualDps: 4444.44,
            magnification: "50%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1125
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
          enemyId: "290",
          enemyName: "ブチゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQICAQICAQICAQICAQICAgIDAQQDAgQDAgMEBAUFAwcFBAUHBgkIBgoIBgoKBgwKCAwLCA0NCBAcESUdFiMeFSUaGhokFTAmFzMnHy0qHTUtHDwvHz0yMjJBKlRCKlY5OTlGK11MLmZFOU9PMGlZN3VdPnhUS1tkPIVhQX1lPoZtQ5J2SZ2ESrBvanKNU752dnaUWMecXdGmZeCvau2SkpK1bvW5cf6vr6/Ozs7o6Oj9/f3///8iAIRqAAAAQHRSTlMABg3vHCaz2RP3MOXD/jtmRaFPeFiO/5ysYta6fcv/7KHZ/8b0567//8z/9ef///7//f/n//////n///3+//8AABll4gAABAlJREFUWIXtVtl2qkoQFQUlmIADKokHDSgBURpoe7BxOP//V7caxxhyTnLvy33IXrpWK9TuGnZVd+33f0Tth+CH4Ifgh+CH4P9E8HXUNaPT65laXfmG0RV6b+B6q1XguSPLqP8LcyfImAAwms1bffWb9togILwQBUAUIorzkfYte8NZUmnMUsSKkmDumN/IhNpdsnJ3FOcIFjRKaOpa6lcpFGtKMJPeJ3Ee8YJFEyQECcbWF+PQuwnJSgKWJFQU6XCYFgVP0LxpfInAeCGEliGUEIxEPmYUvsvBV+qpWHN+NS8ErFM/DEPEC+pWl7OulelRNFWHhTJIi1t7LmhIGIW0Cu5VxqDYA72Mvf/o9A1Fd/ANQUHCJExPHvHArCJQZ7NjejUn38yejTG9JeApAk0dwbzKOnTW695xZS52u/XIY6KoBhnrVQTPm+3r8UF9tNntYv8mh++psuoqPG/2a/uYRmuKcj+8WEEGGeMXFrG0Kotgbw67RUcp0zin2EdXAoqzDFNx+kMEnUoCc304bBe2qtmjABfMJxeXpT0wsJP9J1WsqYvd4bBbjx+nIRYFQfziQGmfYSL+TKD82h4Oh/02HvroXQFOBBnQChmGCOxKgpohXTjs84jx4haCHgnAA0EJBJKOPpZRqeu6bq12h/1+E75TkBQRPeVAgDNAw7x7JSpGf/T29upM802egwf3CoJOJKTsAiwDKdC9EBS764F2Nn6SIEx4UYEjJydYdjgZ37ejovZmm/0uTrn4TL/nGsrn1L1thrrMiKKYbr7dJkz8haEEuyXQ+32lplmGNQ3DOKX4kxAqCHTDgMmhPK9e6zXTnb3AuKJEpvu+CB+BHbWmdBzPc52+PdvO1Jo2ixPoFl7Wm/41CDRQasY4Y4zh5TTfr3pqx03KKp0F82fwAAaHHZT5hJm/y92xl5adwqVoMT+fZZ9GIKtoOPMEwbmJJnFM6Fk6gsLytKbpJ9nkgSWHbm+aooTKc082Pscf1JegahdE2i7nQS+AMVNGIaPH/n3qSMjOFsU7bWB/PpBCNF/805yGF7I4jpLbcwSOsPMQF3C+8WuDUj9ly5EJ+pkiyjkjWRQtk3i7g/PzOsNgil9aCocM3sL8uBWMOg5PXYiACpYFrtMd9PvuZhPLB5fE0ySixx8cw3xiGFNJLxiahFTeV1agveXS69qartcV1fFG3Zd5hM+bcrgJQFuBgziK5BzhXCYCzNvNsbdaLN5+1RSzb5n6uR169Xqn2XiahAlKM0IpSpIIPlESpRT0RmGsoiicPD09tFutx+7xknFz0ZA3OKPZfnh4khgOhxM/9AFhFPoTwHD4dMVDozWoOpkUrWMNus3HVqvdbjQe7tFoNNpy92Z3YJtQxX8AFX+uSPLpjFEAAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 75000,
            ap: 4500,
            dps: 6428.57,
            speed: 12,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 21,
            foreswing: 6,
            backswing: 12,
            tba: 8
          },
          stageStats: {
            actualHp: 37500,
            actualAp: 2250,
            actualDps: 3214.28,
            magnification: "50%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            },
            "burrow": {
                times: 1,
                distance: 1500
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
          enemyId: "289",
          enemyName: "ゴリ・ンジュ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 50000,
            ap: 3789,
            dps: 7104.38,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 1894,
            actualDps: 3552.19,
            magnification: "50%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 625
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "452",
          enemyName: "スーパーデビル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUBAQEBAQEBAQEDAwMEAwIEBAQHAwIFBQUFBQQGBgUIBgQIBwYNBwQTCgcVCgYQDw42AwQjIB9NEw0+HA5oCQ05KBtHJhKZBg5BMSc3OD0dTTAtQFu9BhNpNx1dRjceaD1WS0Q4UHjmCxt+RyEchEpGYJBaYWCaVSZPbKJlcGwgm1ZYebV4eHi8aCkjrF98fHyMgmyCiIhiic0pvmrZeC+XnJ30hzWlrq6vu7y6x8fC1dTM4+Lw7GXe7Oz+/v7///+adIO0AAAAQHRSTlMADScXOv/YWEds6oa4yKiY/v8D4v64///M//3////p/////////////////////+wD//////////////8A//8AJPqfEAAABohJREFUWIXtVm2bojoSFRWVRoU0CEZEwEgADXanNYaXC/f//6stcGa6de7uzux+nWrk0Tw5J1WnXtKDv/9PG/wh+EPwh+BO8J9tuNZH/2XLvzNlOByOBvp6BQyz2Uz5fQKdrYcr8QamTXfr3ycYvE7HRrGaTbW1MIb/A37wblhUrvWF9SKZPvxtuGIQwuDhnRFnN/0dLPg7Xl9vSZ5crwkhJL/luTP7dYKZtVwlt97yxMcMAcPt5nf5/DUpFOt6h98SL4qi7oNhJd+tlr/kxniRfCfAkWpvXddGUedR7i9+pahm/i3/4QBS7f12a6teH9I1t8bfT9FXK2P6TxGNXtbOnSAPU8/7RhD1a9fr1bpjdF63bSPX458JlJnWnQbixx8fJ8+zbdu1PS/F5Hq7OnOrLwhNtnejPzEM9VUOO33PO50+Pj5SD4MEXpR+fESI3K4LrVNB2bWtDMMSGHbPqoysLvk4iiNw4OMELmA4H8PXOAYhrr4BMQxFy1RV5SUua/0r+vUd2Of5LYzi1IPTEYpOsQd59JB3gjWczPuuHMsG8GoVqqhdfyV4//u9KwKC4ziNcHLNExJGKZQB9RMUpWmUL+867VqkqmHHUr89Evz1OrYMry8fiBhK+EawRyuR5MQDrxLr3paaqHlW1R3B+plAUUZR7COM/ITAX56wsi6xTxLQ1bMsffTaM7x1OeBYCO1BQtBgrCgLcgs9j2UhUhEOcd2UIkNIhKpvTV//eu+1fmsrYGjeHvDT5WKuLXe7/JZACCplGVZRyOsi8zAKKUYJ0UavStcP45AWsi7Kr02uGA503ZWQJHHtOI5Q2NSOHbK6kqFtC44wlON1t7K6Q3UICXMmHgiGo/HEz3MClQNpiKSUlRRNUQs4ipWipBFyQZg+ETAtbok+fW6GZZKYrusExy5lRVNXdVPXdVbCC77S2NvYrrmAU4cERoz1U2tq4PzeDs6XAxRNLDpwZ1x276b00uhwxlvb1wZj53rN58/44e7mu3vneLkEcZrGWHwjEEX3LqEh4uDou5a/HuggVqI/4yc5SWiydYMzRJDGvAeWRVP1ITDvlKbQWUSfTQY61MdzBLPFy+JFlBmMICc6wWbeALARVJa9CDLqCEznZgxmA+iX6/rJgdFI0UXW9YhpxydgYHcN5N2ThnceRAUmkMWxkxD085zXOFbvlnYeZEAgpaAhZaWEHHRxRawJ9YG2g5AK4xk/xugbHgP+dIrgXMZDd7t3Kasa3BOoWIb6jvGsaHZPNaBMoEEhYQVVoxNMktOG1U0hS+4TzotGmHFPoIoCKrAQhdSeHFiqJm6kEEUrYIABgRfQsmKQhKqmlbSdtCPAVVuwLJNlUzxpMFVttyqpkIyxTsPTB3YCVMqyrwFuJrInyNqGUyyLrHp7vG5HE3ubdUOyZgj3BKfYdzb0WzU6diNjGFNxBINYcg4lvnx0wDD3vuwIIAaqnnoRGmIiyCBwcBsCS4HAoxB+yApelc7yqwtjc7/3qQB8IWiZIS+NT2nTJGYoeca4ydqGpVGMGHNtmSFWNtl2b31elMpku9/bsK2UgtcQYQlCUOhnHzEK5shCMg9jKRLTJiVMWOrv93vzRyIMF37aNm8LzquiovRAM8pkARMjE63kMuNZFgQBFwz6uSC5ivneXWrfXZh2eNdUq0ayshCcBufD+RgcN7ypITFUNDI4HC+H84YJuOfCPOFI2J/NOLX3vQO4LbmohfCy4/FwgWcDN6BAx6BqWr45XmAVN45rq7lfi2z12QI9fmuqZVsyITmmcFh33mXDoGr48Zy1xeZ4OJ+BsilME+VZWfHPZlzsewdAwroOBdtsDpdz/xwPQUFFTc8B29w5LwcBh5BEtqLiP7I4tCAFWwTu1nDjBuB6t/nYQc6bjYBxEBx6um45qNqKkKatZPVZyiPdss0EbglIHuy6XM7BpYugfw4wDmi3evfqjFiWZFBwsvgy0V5fRzO48aF7bYTQ5nDo472DLgFlgh+6n5CYYGPadoJC0bRi9ZVgoGBgzUw7c3ziOz7edHbslAuOAQ4hs8FmAxckQYgQYzY2uFw8EExl2+xmI6OBOuQwMQWZK+OZBjadwqPv/LCC9TypedLrPzQeJpJGizdjNFDWsizLIiQk9C39q1m+n4U+IT4L8+dx3vWCrk9HQ2PygnzYRHzfcRz10ZzvpqKX+T//36yMp5qmG/P5YjGZTF6eDJYWi/l8aejadPZwI/wL7WwBoNVk5nkAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 1500,
            dps: 188.28,
            speed: 4,
            range: 666,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 239,
            foreswing: 60,
            backswing: 61,
            tba: 90
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 4500,
            actualDps: 564.84,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 400,
                ld_range: [400, 800]
            },
            "slow": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "453",
          enemyName: "サタンマリア",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 5000,
            dps: 1562.5,
            speed: 14,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 96,
            foreswing: 51,
            backswing: 45,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 12500,
            actualDps: 3906.25,
            magnification: "250%",
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
    }
  ]
} as const;

export default e2093Data;

