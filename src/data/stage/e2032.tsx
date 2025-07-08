// Stage 2032 Data
import type { StageData } from '../../app/stage/types';

export const e2032Data: StageData = {
  eventId: 2032,
  eventName: "魔女の結界",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 32,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 200, 300],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "薔薇園の魔女 初級",
      baseHp: 30000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1135",
          treasureName: "ネコキュゥべえ(301)",
          probability: "5",
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
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
            actualHp: 2500,
            actualAp: 150,
            actualDps: 195.65,
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
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
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
            actualHp: 1500,
            actualAp: 120,
            actualDps: 49.32,
            magnification: "100%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
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
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "273",
          enemyName: "薔薇園の魔女",
          icon: "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",
          traits: ["魔"],
          baseStats: {
            hp: 150000,
            ap: 7500,
            dps: 1859.5,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1200,
            freq: 121,
            foreswing: 49,
            backswing: 72,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1500,
            actualDps: 371.9,
            magnification: "20%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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
      stageName: "薔薇園の魔女 超上級",
      baseHp: 150000,
      width: 5000,
      enemyLimit: 7,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1135",
          treasureName: "ネコキュゥべえ(301)",
          probability: "25",
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
            actualHp: 20000,
            actualAp: 1400,
            actualDps: 477.28,
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
            actualHp: 800,
            actualAp: 80,
            actualDps: 80.0,
            magnification: "400%",
            count: "3",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "041",
          enemyName: "だっふんど",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMEBAQEBAQFBQUGBgYHBwcHBwcICAgJCQkLCwsLCwsNDQ0UFBQYGBgaGhoaGhogICAiIiIiIiIjIyMnJycpKSkuLi42NjY3Nzc3Nzc+Pj5CQkJNTU1NTU1VVVVhYWFjY2Nubm53d3d7e3uAgICNjY2Ojo6bm5uenp6pqam2tra+vr7JycnR0dHd3d3p6env7+/09PT4+Pj9/f3///9Pw18YAAAAQHRSTlMABQwWH8zm+Nf/JzE6TsBDce+FVWOtmnXJfIiY4fyj8q/R58Pz/8vz/93+6v7+8f/2//j//v7+/v//////////zB4KQwAABC9JREFUWIWdV+dyszoUDGAnjhvE4BIcd8AgehdF8P5vdUWx48xNvpF8ZsIPT87q1NXq5YXA2IkofX5KPMeQ/Pf/bSxrThBFnnGUuKf89w4sq6pCRWysWXp/bu8VVd1aBQ1pTAvBSNes9c5hUaPYvMizMcdQFGNySZrzqypUE/wtYWBqR1mYkUbCbYOy8a+r1IVdHkWWBNfX4YwwATPHTmWS1xXqK4ExULQb8kQA4y6B3ErruzU/ZFeBKAVW9poE6tJN7u64n2UeHAdEAUyNPu8wbM4t0jgKAs9zzOOUrA+i0yee+FVVo+Cy38rrtSDyROczLCuZRRd25GMgqE1ZpjWi09nZar9U0rZquRUWZeHLNFM4WJwt29LdAvuXoQps11YWNAD8Bvhh6KoRwgOsY3fLss4LstrfMjidr8pOhyjRVTdszL3SxMCw49l6ruogBKGvW36D4J9nVJzCiGfX2qlRiVK7gwBLiiRwIZf6dbMJy2aDElvHRfEPAk0I0/lSmmyjqlvC1MUQ6mbywjDsYEBUDG6KqUMOq34NGwj1sOKl9WqzIW4I8xn0APhbRKqqfJ0VK4xMmRqgztMkArqKDSQIasQA3i2CxLJsP4pTCEMryw1SADm8MRHKiwJhWsS7YSeQFIDdxncqw2VAWezCqnBDmxSAOz6yWR7q57lbJJatnwgBxlpW31OIbcs+LpzMum6WAiHA1Mjbs8sCl86OUlPkNVc58SzpRIpOey8UoQ3cJC+DLcdM18KMeCubMWhvggxmmB8xq5F69sbuk+8a1qVDfT0/1LAZpcuY0v+F73i5n2VTotUojOSh7wCiPbVCYXs2aKcwM8gu1EcbXOA9AORR3Qud8d0YtQa1CbU/s/buqqBw1vQqjzvepqCq4iN1C39MQW6KT8hM8T4FCC8BvT8rBzc+faaFj01E3ucTGhXP8a2Jz7SwXeWuiVihbJ8JYHDp6bBCDvUWNQF896AwnynhbZHwJzMEnlqmYzrNWvcKIaiYpramHIR+DyoUu64NsiI1KTs57vYA83EUuXpc4dcGmUDvjONXSi9zm+swsmCNnAVpKxiO3xpAf6DT0nURClYkAFi+8OujEWQJeOTjCBTlvyLgJuPBYDCeTMXP/cXw4gzVEMCfAP/cp+l8uLlcNM0wvRjmqKldrD9cy8h3844S/1DaWJd+4Zszy4uWxVGeOKcvH7Wvk+YP6gAcVpIoSsLi96cCrpusmV6UQAjT2DNPC1EwYCduUA5t1fZd66pcLRX8+VhhJ9Jq83VQdrvd2+toOBx9gDDC21CGWFnhCABQVRsCcPrrDT1ZzEcfb2/vD7az8ZVcJgnE+swPY2Dp+u79bbQUfp1qftn4/wB43wHXx2llBbYcAhW7v328Dn9XmQw3mQmL1XI+HI1Gr419dHY4KNfGzqPRfLlaSD8W8z/DXwAg/pkKDQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 60000,
            ap: 3000,
            dps: 1800.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 700,
            freq: 50,
            foreswing: 13,
            backswing: 37,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 6000,
            actualDps: 3600.0,
            magnification: "200%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwMEBAQEBAQFBQUFBQUGBgYGBgYGBgYHBwcICAgICAgICAgICAgTExMVFRUWFhYZGRkcHBwiIiImJiYuLi4vLy8wMDAxMTE/Pz9BQUFJSUlNTU1VVVVgYGBqamp4eHiDg4ONjY2WlpadnZ2mpqaxsbG8vLzGxsbQ0NDf39/p6enx8fH4+Pj///////95SC4fAAAAQHRSTlMABQoOFRoiKS41PUZQW2RqeHF+iJCarMnW9qS0vOXF++zU4P7o3PP+6P/x//b+/f7+/v///v///////////wD/21g2+QAABspJREFUWIXtVtmWosoSPSCijA6MAqIgMpPJlExat///r05gVVlWd9/Va9372vmkZMbOHZERO+Kf//yf65+/AH8B/gL8BfgE+MOimBUviKLAs4s/Hf3topfCTtNtW1dljqH+B/v1TveuaZ6nV1cVl39GoGiGYRbPcwtu68RF1RLSlLmnPRAo6r/CUPRyzYuSKKw/yNLrrRvi7naHNbaFb4mr1WrNrZb07+0ZTlZt13VtRWTnIxQr23HZ395+wLpPbe5biqJqliqtHgg/UaGWouqAu0WeevqOg5gzghWg4f6wB4QenY7e9RoHpr5hwZZmlosXCIoVLT/FDelIjWJ3z9HUaufl5PZh/za1RZSgsqpwGtgSSzO8JIvrJwTFiLqftyP4e5uGKjS2LCNoPh4/7H/M9kU7TrdpJGhG4FXDtPfcZ3bQvOIVZHqbz7/dhzLUZVExzni4fzjQoQR102N7IshXpb0bZoGzYT8d2Llp86R77wtPt9zTJaun9y9jGRWf7rxNXe5a9hU3halw7wAQr7gcPukC4To9HkMErMcHqVudJPXTHYCLzWNaD/gJsNy4eXf7Arh1xemESJlkDx/eJhyh/v613WaHA0QMANbvAOzeQ+OX/Y/7gE+XcqgBYGbwNhZR9bJ/n/ELMiBzv3oHWCkenr7s3+4jPkX1UEXZfC/8LaL6ZX/OiUvZd7nxGUQWAMYfLydGfMnIgC9ROfvwC4MeXZK2r0JbZD4Adm4x3L9dccF9X5zPYdmN09QXF/wS4xvJorInmaesP8oC0ihtXzhOTRY1Q5sathFANTZVAoRuTw/HKslIhwPrkwDUneKjr2e49zhBfYeuc76coiRJossFd888IFmCGxw78pdCMJIeIDK9fd3QdGWsy8LeOEUFwiVOEvzYf7tPHY4SjGJnt/4qJmolO0HRDhOssa+zpOyq1N3LeyfIKtL1Y1dcLkXdj+PQNSi6JHlg71YvukAtuJ1zAmLgbwllVzZ16mlbzYsxGXpCpj47HSC1McqS5HI5nXxL/m6/ElXjAO5mcCCDuFW5Z2u6l9fd0JaoHrvocDhcIthNsuh0MFSRfRGDBSvsLDd4mGcFKknX5L6jg1PNODTFJan75gLwCKMCVVUWGHv+ReUpht/aXpyXbd/33TC7WaWeAy8I9LsyPB+SlkBOoabvalz3dW7svpRkZi+pbozqDsxJQ6aJVCj1bN2ISzIQFBvuManhEcquJ2VRNEMZW/yL+/P1fl52EKoaF0U19ij0bEV1AgzuI19XNDMqkqTqe3DmlDQ99hT2RUx51QtQOwwEtM4/h9VIQleVRNVHZIBIWJKgmqdLUoEzqX+EGuxzd7N8Adi4aQXPXOaBo+7tuBpbyNC1aIXtSApfE1neOp4iuB8HruWcoARS/ZnB89pec9K34Kq2EQQtrgFA4VjZSbsenBUZVoLnLTrw3N7v9LAZmlDj6O8MSpz6zpZjGAFKaqyD/ZrduGFdzslO8yoQwF2bujtOtlMylNf9tyYJMYihc0rwMEvZyeFe/yHpxzA0oTswABVBQ8g9hVtt3RxUxNt86/RLYavsZR5AqVmXhg75G4ZmJc3WFZ5ZcFqAS5RE0BiZlXrFA0ld6VtvpBZLdrmggdRCsFPIWeTvWIpactBkFw+5h2zAkblfL3g9bcY2dOSfZ413j6j11oPeMZRnFfJ0bvQ0RfN6jIdxpqXxK9nI+4nk/lOHvq+FpMfNOE5zuD4KhWI3Zk6Gth0b+ChpfjneoO/Z8vI39hQ7i9IAxYshVd9J0oJ2LiGdEYQ20DU3b6YRMjWw+N8MTCCLIRQdiAao9QcFeIK0HXAE2tzl/vEM5VDVAynM7fqXMYVa7b2i60DN27EMLGG+gl6rAah/dj6DxFfRKSGgVdBPqtiWfpm44AkgjZsEGgZMM95jhFhKkDh9HbrueRbxCxpA2CLcd9hXOPpnAvMTDGVgHvNuqANNoB+kEDyrp+xdUKYigTqJjsd01ntnx36nsBCtuQxyVwUiA4GCW8DMYKX11MS6KKhXVGezH2ddn0ONY11gvhFYzgRGfFVFuI1AzBWWXkpu0Y2lt1+vZDcqorlTmFtZn28ovO3qOd1QNM1wGnzugBknWmd4jFAXWW7vgb+FIa9Y0T5AZ+mb3JD4rQny/4jz+5hGL1ccJ2zsEFc4NJTNVj8XVRmZ2lZxzqjB86+tAiV9yioUmspGNUNUw5i0gYFxVkZIenm31ZxjnMZH09Z14xim6eFoGsbxEObh4xf8PBzCNDiajm6bxyCNTVuRRW6u6yUv7bZ7mB8t/XPZzm+X/bFtWZZtacp2I/HwFP8Cz8xZkCdF/WsAAAAASUVORK5CYII=",
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
            actualHp: 800,
            actualAp: 80,
            actualDps: 80.0,
            magnification: "400%",
            count: "12",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "33.3-50.0s",
            delayFrames: "1,000-1,500f",
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
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "273",
          enemyName: "薔薇園の魔女",
          icon: "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",
          traits: ["魔"],
          baseStats: {
            hp: 150000,
            ap: 7500,
            dps: 1859.5,
            speed: 7,
            range: 320,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1200,
            freq: 121,
            foreswing: 49,
            backswing: 72,
            tba: 0
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 30000,
            actualDps: 7438.0,
            magnification: "400%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
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

export default e2032Data;

