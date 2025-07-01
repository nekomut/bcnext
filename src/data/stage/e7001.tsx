// Stage 7001 Data
import type { StageData } from '../../app/stage/types';

export const e7001Data: StageData = {
  eventId: 7001,
  eventName: "にゃんこ別塔【赤】",
  typeId: 7,
  typeName: "にゃんこ塔",
  prefix: "V",
  mapId: 1,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "1階",
      baseHp: 2400,
      width: 4800,
      enemyLimit: 30,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "2",
          treasureName: "ネコボン",
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
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 1500,
            actualAp: 120,
            actualDps: 49.32,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "1.0-2.0s",
            delayFrames: "30-60f",
            baseHpRatio: "90%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "2階",
      baseHp: 20000,
      width: 3600,
      enemyLimit: 30,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "100000",
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
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "7",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 2500,
            actualAp: 150,
            actualDps: 195.65,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.0-2.0s",
            delayFrames: "30-60f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "3階",
      baseHp: 30000,
      width: 6000,
      enemyLimit: 30,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "5",
          treasureName: "スニャイパー",
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
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-18.7s",
            delayFrames: "300-560f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 750,
            actualDps: 401.79,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 3,
      stageName: "4階",
      baseHp: 60000,
      width: 4200,
      enemyLimit: 30,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "250000",
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
            actualHp: 750,
            actualAp: 75,
            actualDps: 54.89,
            magnification: "150%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 2250,
            actualAp: 180,
            actualDps: 73.98,
            magnification: "150%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 200,
            actualDps: 193.55,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "389",
          enemyName: "合格野郎",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 30000,
            ap: 1000,
            dps: 937.5,
            speed: 10,
            range: 330,
            rangeType: "範囲",
            kbLevel: 2,
            money: 250,
            freq: 32,
            foreswing: 24,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 10500,
            actualAp: 350,
            actualDps: 328.12,
            magnification: "35%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "99%",
            isBoss: true
          }
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 200,
            actualDps: 193.55,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 200,
            actualDps: 193.55,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "111",
          enemyName: "豚戦わんこ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 200,
            dps: 193.55,
            speed: 10,
            range: 300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 500,
            freq: 31,
            foreswing: 21,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 200,
            actualDps: 193.55,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 4,
      stageName: "5階",
      baseHp: 100000,
      width: 4800,
      enemyLimit: 30,
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
          amount: "2",
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
            actualHp: 750,
            actualAp: 75,
            actualDps: 54.89,
            magnification: "150%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 3750,
            actualAp: 225,
            actualDps: 293.48,
            magnification: "150%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
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
            actualHp: 35000,
            actualAp: 500,
            actualDps: 681.82,
            magnification: "100%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "023",
          enemyName: "悪の帝王 ニャンダム",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 99999,
            ap: 1800,
            dps: 116.63,
            speed: 2,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 6000,
            freq: 463,
            foreswing: 104,
            backswing: 29,
            tba: 180
          },
          stageStats: {
            actualHp: 149998,
            actualAp: 2700,
            actualDps: 174.94,
            magnification: "150%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 5,
      stageName: "6階",
      baseHp: 200000,
      width: 4000,
      enemyLimit: 30,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "400000",
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
            actualHp: 2000,
            actualAp: 200,
            actualDps: 146.36,
            magnification: "400%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 10000,
            actualAp: 600,
            actualDps: 782.6,
            magnification: "400%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 3000,
            actualDps: 1607.16,
            magnification: "400%",
            count: "7",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "101",
          enemyName: "閻魔大王",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 112590,
            ap: 6000,
            dps: 734.69,
            speed: 3,
            range: 380,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4590,
            freq: 245,
            foreswing: 6,
            backswing: 11,
            tba: 120
          },
          stageStats: {
            actualHp: 112590,
            actualAp: 6000,
            actualDps: 734.69,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 6,
      stageName: "7階",
      baseHp: 300000,
      width: 4800,
      enemyLimit: 30,
      requiredCost: 160,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "4",
          treasureName: "おかめはちもく",
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
            actualHp: 3000,
            actualAp: 300,
            actualDps: 219.54,
            magnification: "600%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 9000,
            actualAp: 720,
            actualDps: 295.92,
            magnification: "600%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "048",
          enemyName: "エリザベス2世",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 40000,
            ap: 400,
            dps: 545.45,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 600,
            freq: 22,
            foreswing: 14,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 1600,
            actualDps: 2181.8,
            magnification: "400%",
            count: "3",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "063",
          enemyName: "悪魔王サンタ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAEAwIFAwQFBwQLBQQKBwUHCQQHCgQICwUPCgYaCgMbDwcmEhA6DgcWLw0XMAJ1AwEnKCFuDgJoEgp1DQUrLShCJhKIBQdVIAphHAeCCwV+FAaRCwSGGQoLWgVFNyw+OzvDAw92Kxq+DgxHQj5GQ0HjAhajLAmZNAQjbEylOQaVQSxyT0VfV1S6PwloaGjbSgYcjaezXiFxcXGLbmf5VACEf3+Hh4eIiIiXhoXPkRGuoJ24tbXRz9D6+vr////fWCuuAAAAQHRSTlMAyvxC5SudWna2E4n9Itr+EaSv/Vn9/zU9cujV/5b+CsfQ///7Xvv/vf/n//6R/xn7//9Y///PMJT+//7+/f8AjRhIRgAABHhJREFUWIXtlm13ojoQxwUBEVGqMakPsbYhmipppDR1xYD3+3+rO8Hdbvec6mn3vrkvOi88Hsj8MvOfmYTWP//RWt+Ab8A34BvwDfg/AT60m/H45uM3V+3m9vb2JrJ/FuuH278AjB/W64fFbf92sV6vx38DWDc2n6UpkPpfB9zYndcppRawHnT8rwL8IbIAtiFUpClJBsHXEL6TJNQCOJalLkmSJIOvEKIeeJA0RUrQzXOlMWFELaLPA6w/EAgCBaQutWIMUTT6tJb+IGEkOQeRpqCBYlkmaLr4LGCKWJ4mCZaFSM9GWaZEOv9DhmgyueDfn1uXhBfHomgKCYaYZhT13skQLbbzC4RJsyc5Ho+iEAidYygNocxr/141ZmJ7oUX9WeNSHI+FZIxQCEKUtWZMkPBdnkI9XlC1kxBmxTsWSpuSxIhKYwohtSRBP1pGvm8zmcy2k+XyQ0Dws4YqV7LScQxdkDElytLo7fZx8Qg/08lkOp9PFx+HEJy7QL2+KkHA30ghAFaazGSvZ8vBFBtdEDE8A3JYBx3EiGZCqSwzldA6z7fbHMJYbLdbeakvIsf6M/aqsuORwd5KZrkxJktTPp30J5MJaNCfrJ4u9UE0QoSINRXMAmwqRaGE0ADw3if9sYLWRk3zUL7hLCMxAy0KlWa1San3qZH0u3dN9/DNhvDnOxBD5CplEAF1bAGj8fjqYHYGd3d3BCGGN2DPG6yUeoWhEJBCD5KfPub59BqgbQF3SWLKBvCMlYAk0jQzIh1F020ORbzUg2cbWsAdrk91yTF+xgxktGMJysxGUFyIaHupAI2FAxsDLuvTqdYYY6iDoj+nWhUAeM3Zwu9dDsIPA0uQpamqykgUi5whkKA0pZZaK5VrJp/mV4640KYwmCFi+0la06WpwSqjyxL6umRFpeeXQ7CADSzmGAgwzQz2hVEkuq7gD4kJDIcxVwA9EKGq7p/2e4kTRH8ZIsZoGWMewzFR6SsXXhT5+5q3J4fVvcTdNwAlZS1hOlnKCMmuBNBq7VZVPfSn+3uP897sDcCqk3Qxjin0t3h3ONlz5Y/BWB6eIIP2vsSY4+78N8BU2D2bUk+7ZWu5a+12dv1u97L8A3DYVzIcaM5oDBtSmmWUCYokj+PGP3iEqrz4/cPuZdVqvex//Djs3oewuh806dq13KqYaZoxSmP37N/1D3VRHaa9p+E9pLI7rFaHdxH4nS7mWV1Lx3FdZxAjhGYcwe0WO2E7aADRoUzFcDTrYhTYqxzz6dt3kN9z3Bjj2Rb6eAhrA4xdbxBzguIBXAs+567rtTucpojOupBNO3AwZ28fIVEQwlPP6bX39Qk088q6dIHIQQE9GPaGlYQQHC7tkTHyHdcJHBvUNHoLILQ7+KEf4BIA5clI6xLH5gS9KasaInAxH/Zm6WwahW4Qeq4Xhk1VI7/dCbseAILAceA5SMbBCWrHjbbTUNWGNzJ68N7znC5EAOudMOx22n4r6oRB0HWc5mVj7ptBAUAZjH8/cX8tgvXdbhCE7X8Bi8MVpbB/JfUAAAAASUVORK5CYII=",
          traits: ["赤", "悪"],
          baseStats: {
            hp: 45000,
            ap: 3600,
            dps: 812.03,
            speed: 4,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 6000,
            freq: 133,
            foreswing: 104,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 7200,
            actualDps: 1624.06,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 7,
      stageName: "8階",
      baseHp: 450000,
      width: 3800,
      enemyLimit: 30,
      requiredCost: 160,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "750000",
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
            actualHp: 12000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "100%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 25000,
            actualAp: 1500,
            actualDps: 1956.5,
            magnification: "1000%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "101",
          enemyName: "閻魔大王",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 112590,
            ap: 6000,
            dps: 734.69,
            speed: 3,
            range: 380,
            rangeType: "範囲",
            kbLevel: 1,
            money: 4590,
            freq: 245,
            foreswing: 6,
            backswing: 11,
            tba: 120
          },
          stageStats: {
            actualHp: 450360,
            actualAp: 24000,
            actualDps: 2938.76,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "049",
          enemyName: "赤井ブン太郎",
          icon: "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",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 400000,
            ap: 9287,
            dps: 8987.42,
            speed: 23,
            range: 200,
            rangeType: "範囲",
            kbLevel: 5,
            money: 2000,
            freq: 31,
            foreswing: 20,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 9287,
            actualDps: 8987.42,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 8,
      stageName: "9階",
      baseHp: 700000,
      width: 4400,
      enemyLimit: 30,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
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
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEDAAADAAADAQAEAQEEAQAEAQAEAQAFAQEFAQEHAgEHAwAJAwAKAwAKAwEKAwEMBAEPBQAPBgERBQAVBgAXBwAhCwAnDQApDAApDQArDgEsDwAuDwA6EwA9FAA/FQBHGABJGABKGAFPGgBSHQBXHQBhIABhIQBiIQBuJQBvJQB4KQCDLACOMACRMQGZMwCiNwCzPAG+QADMRQDZSQDkTQDuUAD3UwH/VADUXjutAAAAQHRSTlMABQocKxcRJDlAzzFPVuNFX2hx2IF5pP6StIjDqrrSZczw/tyr1fvo/8Hhlf/w0f//+P/+/ub+/v7/////////IzJmTQAABOZJREFUWIWdl+l6okoQhoOKS9Qoifs2BCZCciA0y0Dv3P9dTTUaI44oJ/0jT0T7pbrqq6UfHu6tRqvb0e7+6sb+wWa9GDV+DujM/NRfD9s/BvS3mWShaeg/tmCTSsHi3bRZe0ujMxqMWl+nbi9Ckec8sSd1CY3B7O3jbWN024XvG5OQy1yK1H6ueYr+NsQMx852NdABoU19nue55MluWCsW2tAh6o009c3VSNe08QfL1eLhrFMLMPqk6vdS8sw3J/324K34nOeZ2a11hOZ/5LAhlyx1tuMRxLH4SD9GtRSp/fojjoRc0NBerENxBAzqSXr0yb4A4LvUefJ48T+rC+j8xlKeECK1rIMTmDOulxKNszOADSKy0oLH/WnNjOi/k/zbhJy4SEhFClc1Afoi5CUTPAZAKeNZs54TtJGZnh0iJ14igMNjc9zTayHaz3bK5bcJsYtZhpC3t9eLXq1jNKc7PyX0CJE0cD0XZYSSxF8btYzQh4ut+REmmMlCT0lMeOFIGr9N66VEuzUyFkswpEB8C4Pjj0nNvNYaemsw2frkTFaKldXM66Mh3dUHy0sAHm5atQGA6L4flPxtBnGM/1HmdaOoByAkzkRBEWRfr7Q8aLCa05d9YQHPAi/hKhCZO3/s1dgNxXk47Bl24BUWYGs+tzLwJ93P50/ju9v13nRj2vZ6FxIPKwVkAJirrCLW3Ho17uxv9xamE2OM05iwIBZKjR4AXAgIc63gHkA3TD/japsUkIyBiqMkgevGXNVajO8AmlM7YWdRK86gosAPOSqJc9MHbeMtO68HPI5YXhIjtoe39o/N7LwaQCqhhOe1AY2hmYjS+yCEQXKSsxSCp/agGtDahOXXFQQP0SOUxihwX0bVBhgOlpeAXCjC0YHICmK72omdTXg8gDzPH0ECIByKC5zHn1Tt1wZvx84IEhBnDEGj6HAKESW8GtBe+QcPcBxFUUK+S2vOEpQxNaxEiHxWRqGzPHQhmXlBhDwvIqeIQpsMggSTdP/6/quyqPVMfPQVZkIwSOEzTQgSBwFC++WourSfponjW1nknndakDNjybKqomlt/dkpF8CcIY+Wn+R4WzGp6IMVDBOXKiJeelGV8bZ/ff/zzvetSJT3S4EiXn4Qb65WxPZ4l3BVPC50KGPES4+YM7nqw9YsZDlHdwEyXfeuNsfuOlLV5/IIBaBkgF8xZvSX4D8A8H8sCE4A+EokZvd6d9YnDvnndbmSfvHooE/OYGSuUJHWXYaEIvcy6jxIZM6oGnFgyAis6yFQC+42tmO/kgsAcUHcGWIqi1wU7xfVvb3RH44NMyv7QMQB2ITVHwgRF8ns1rVB0/SFX9KyxK5KT4awUlAqZLq83Ve1sY3Ief6hmBWeBIzMYg4j+3UdnwAD24vYV8hovHcTTLnAe6VnCjBiX5fR14KKRFkhRsFxCs3Mg4WQs4YxBa49RN4bmPtflwMAZCkmlFGcRdbL828QiSQJE/H2lglwvznpAPqqLKYzaKfOavVHqrtbzEiVlIvVmJwFodhMqeSYxRvjk1HOMi+Ko+2NEUuDvkahajFVujCMptCHKAlw9j5+z4IsQZ5loV3lvUNrdoez18JvQeC5MNLsPddCyPK8l9nL3nL3czXnPE16reunaHSfV7Pl+vHx8UWtp/IqnsF36+ViOvzW81+i5pL/7tImxQAAAABJRU5ErkJggg==",
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
            actualHp: 6000,
            actualAp: 600,
            actualDps: 439.08,
            magnification: "1200%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 24000,
            actualAp: 3600,
            actualDps: 6750.0,
            magnification: "200%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "205",
          enemyName: "カルピンチョ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAQACAQAEAgAGAgEHAgAJAgAGBAQIAwEKAwAKBAELBAEMBQEOBAANBQEPBQEPBgIRBQAVBwAaCQAbCAAdCgAfCgArDwArDwAsEAEtDwAtDwAxEQA+FgBBFwBFFwBIGAApKSpWHgBXHgBVIAVbHwAuLi4xMTJsJgFtJgBuJwBxKABDQ0OELwCKMQCUNACiOwC0PwDDRADLSQDZSwBtb3HhUADuUwD2UwD/VAD///9NxfZkAAAAQHRSTlMABQsUHNjO4jAmQldMaF+OfTq868ascp7UhLKSv+T+oK3wyf/ZvdXe6v/Ou/j+9Nzt1v/3//z+/v7///////8AJ3K5hAAAAvBJREFUWIXtln13mjAUxnmr5UUUq+JrFRGHuIaxYBIYCfv+32pBbYtbjZXuT59z0KMnzy83yc29SL+/KOkOuAPugDvgDviPALEUhX+oqnxl2EUZk4kuGyPPbEiQ7STdmG6MNkZDgJNSsplCEs96Pd0wNOW2SGR9mLIyA1xxkvzY+fORaxqfhyjWfAUZKyllB9GcoDicz2zzc5sqdwJMMCsPOn2VjHJIMLV15brf9PGbmb0CDr8LFPuzi2HIsqwoqmb0qvUflSMAMa0hSpqjcPlRGLJqtG1ntvT83Y+0OAFoFi0WIK8HUa0FJ35Xl8/MujXx/G2cIkxyWhvPckKKc/8RnM7fM0wxOstdgrK8oP+MvKgiGqmn2Q3XT/AHswjFEDilqGJNk+yGmU/KINnpB38nxLfbOSArdr0q/naQNbCX1VGEbQ7QPNzMzwmJVaVsQm/cvRrA5vWmeQBlieaSZIa3Hl9N2VyS3bR5ACXxJHVJvgBAM0nf5Y3trEw6krVtfAb8MoS6ZMdfAGBPkzpbYRYL4TR2ZaktBpRF/Zqc4RjPAuOQBkJABvb0ZKR/jSSBxeuJ4QtvEqMw2p9iwIjW4qAocKtyok3FmczyPTgYC7SOwJ5Xu4LSIs9wPLcO5UhxUibcKVZgSHDGCITrxTqK+AOi6HnqvlZUM7iSijQHEALI6yXBGMX9h5dfL99s7b2cOrF4G/kqKENjbxMEge85Vvv7z2G73hI0L632mYnOvNjaqtEzdUNVZFnvaeddSZ8iPmQviKNIJqqwDfJcKAC5FALLkpkm8FdFiZQ0gqd2VGvIhydPfVc0fxXCJC3pdrCKIOLHfAQwkpUMZzTbg7F5rZnzdyFeoe0pgNEq2Ca8OWZ5DiGjII7Bfj+9Mn/VGcKChlY3pXhgO6On8ePz82oVURqPhoAST5WFrySq2en2AVwNHhYQ9B+4Hrn6/QXJ160x/2/s2G3RJmq20x0+DVqto/NN/dW2/9BqDZ6GXcfWL7n/AEA09LCShP9aAAAAAElFTkSuQmCC",
          traits: ["赤"],
          baseStats: {
            hp: 530000,
            ap: 52000,
            dps: 29433.96,
            speed: 7,
            range: 335,
            rangeType: "単体",
            kbLevel: 3,
            money: 350,
            freq: 53,
            foreswing: 14,
            backswing: 17,
            tba: 20
          },
          stageStats: {
            actualHp: 530000,
            actualAp: 52000,
            actualDps: 29433.96,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: true
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
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 9,
      stageName: "最上階",
      baseHp: 950000,
      width: 4600,
      enemyLimit: 30,
      requiredCost: 200,
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
            actualHp: 1500,
            actualAp: 150,
            actualDps: 109.77,
            magnification: "300%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
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
            actualHp: 36000,
            actualAp: 5400,
            actualDps: 10125.0,
            magnification: "300%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "048",
          enemyName: "エリザベス2世",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 40000,
            ap: 400,
            dps: 545.45,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 600,
            freq: 22,
            foreswing: 14,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 4000,
            actualDps: 5454.5,
            magnification: "1000%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 15000,
            actualDps: 8035.8,
            magnification: "2000%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "20.0-33.3s",
            delayFrames: "600-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "048",
          enemyName: "エリザベス2世",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 40000,
            ap: 400,
            dps: 545.45,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 600,
            freq: 22,
            foreswing: 14,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 4000,
            actualDps: 5454.5,
            magnification: "1000%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "341",
          enemyName: "なめ（赤）",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQAFAQEMAAAIAwEMBAEQBAEYBwAhCgEnDAAtCQAuDwAzDgA3EgA5EQBDEQFEFQBGFQBcGwBcGwBnHABhIABqHQFpIgB7JgB9JgGKJwCQKQGRLgCuIACcLQCbMgC6IgCpNAjSJACzNQCuOQDZLQDCPACmRSjMQgDkNQDMQwDWRgG4VSqYXFzsQwDiSgCnZET1TwD+VACyclemkI++r6zMw8Le2trv7u36+vr///9D6OudAAAAQHRSTlMABXCGn7jOSw/mGfolNUNP/GmkWoHC5pj9p/K0ysH72/7I9OfY/v//9uv//v////b///////////////////8AtVEN3gAAAlxJREFUWIXtkmt3ojAQhqFqtSyXVdi6XhC5CQaDEWKCAvb//6udgLQ9e7of6n7l5RySQzLPvDOM9PafknpAD+gBPaAH9IAe0AN6QA/oAV8Dvi9Z1RT5gbj3eNP1bVMQFPUh0GQRrxxHlWTDdtbGIwRtOrZjS9fX8Tq2le9Gy4purZyYxnsfOwN//Q+APFE13TBBhq5pqqJMQIqqGdO5u6eMN2LEmelflDBRDWvhBvvY8+LjMfZ8xwlc17ZdN/C9MLpHc7HSwJT/zqxNF4EXIjimJ6HDYRehnOdpCp8YitIO0Phggfa5Os2E8jzKWZrDaVFdL9eqKg+ClgKAccbyLj8mzUIXXbRqzm3/mCJ47hmut0uWlbdrkyoXTIHgnw2AnLZsfR4c4ZjnUYSQuMX4qbqVWQaULikcdnBQQgkRLvZN+GJPueDzFEGVcDVnrKjr4nCp6zPqXAMAvTvgnGAKIbEka3MfWsPSKMqhegRb6BVKi9utLLKqPoi2QQWQAH0A4BLkh7cv6Q4B4znEN4Smt2Jf3KrykpXVqe0+/D6Wph8GTsWZQDxdS6ZPhQhkBSMIgXvhBhX1NcuKqjqJdPCBNX+B8baVjBYFAGhsSRNzBUOTYIIRojQME4HDhJ7KqiyrGhxQqJXmUJ1gi/ZQRu/CttqMnm5a85UYvgQAhCRJgnGyO5yFktYgoTjClCZhRNpYWEiyFnMkyzLMOQz6eGrNfr0uN9vNdrvb7bbbBgSosFmwcBmGISatcOLPNFmWlPHTYDgcjUbPoBfQj0Y/hX53AmSrTafl8vXleTh4Gv8Bg5lSl+XDJvwAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 10000,
            ap: 750,
            dps: 401.79,
            speed: 8,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 200,
            freq: 56,
            foreswing: 27,
            backswing: 11,
            tba: 15
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 15000,
            actualDps: 8035.8,
            magnification: "2000%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "422",
          enemyName: "レッドヘルクマッチョ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 400000,
            ap: 4400,
            dps: 3666.67,
            speed: 20,
            range: 300,
            rangeType: "範囲",
            kbLevel: 10,
            money: 2000,
            freq: 36,
            foreswing: 7,
            backswing: 6,
            tba: 15
          },
          stageStats: {
            actualHp: 1600000,
            actualAp: 17600,
            actualDps: 14666.68,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e7001Data;

