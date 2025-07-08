// Stage 1160 Data
import type { StageData } from '../../app/stage/types';

export const e1160Data: StageData = {
  eventId: 1160,
  eventName: "がんばれ！受験大戦争",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 160,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "ロケラン鉛筆",
      baseHp: 8000,
      width: 3800,
      enemyLimit: 10,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 1,
        magnifications: [100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
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
            count: "0",
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
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
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
            actualHp: 1500,
            actualAp: 120,
            actualDps: 49.32,
            magnification: "100%",
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
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 3000,
            actualAp: 100,
            actualDps: 93.75,
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
            "knockback": {
                chance: 30
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "予備校鬼軍曹",
      baseHp: 25000,
      width: 5000,
      enemyLimit: 10,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 1,
        magnifications: [100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "60",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            count: "7",
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "4.0-5.3s",
            delayFrames: "120-160f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 6000,
            actualAp: 200,
            actualDps: 187.5,
            magnification: "20%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
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
            actualHp: 1000,
            actualAp: 80,
            actualDps: 150.0,
            magnification: "100%",
            count: "3",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "356",
          enemyName: "ガリゴリくん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 36000,
            ap: 1500,
            dps: 2812.5,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 3600,
            actualAp: 150,
            actualDps: 281.25,
            magnification: "10%",
            count: "1",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "一問一答マシンガン",
      baseHp: 70000,
      width: 3300,
      enemyLimit: 5,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 1,
        magnifications: [100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "30",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 10000,
            actualAp: 625,
            actualDps: 520.83,
            magnification: "250%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "23.3-23.3s",
            delayFrames: "700-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "015",
          enemyName: "リッスントゥミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkRERERERETExMWFhYXFxcZGRkZGRkaGhoiIiIlJSUnJycpKSkuLi41NTU2NjZGRkZLS0tQUFBZWVllZWV0dHSAgICNjY2goKCwsLC9vb3GxsbOzs7W1tbf39/l5eXr6+vy8vL29vb7+/v///////+owrlPAAAAQHRSTlMABQkPFx4kLDw0RllgjlFsdobIf6Swls+duNr0/6zjws7Wjf7n9tzA7v70/eX+/f3+//7//////////////wD/w/k4QwAABRJJREFUWIXtVtmWqkoMbUAGERXbEVHUdjgCQlFVIGNd//+vbnBqRPquddZ97bw4kGx2UjtJffzzP+3jF+AX4BfgF+AB8HfGSYrMl5+CwP1l6C1e1pdfvRYvqv2O2IDA8YLA/xdyq792TsuepBlzoyPUo1uy0tP6HbUt8j/E88rSp+Q06xuOexi0XsMFWZsYU8varEa62kSvJDA8kCxCh9UOYWckvzi1erOpuXf9IEDObqVLjQjS0glZRn3Hdl3bUKpEeXVsmR6J4iSJQ+ysu+16hiXL9grFjGVxRLFvz4fVtwjqaG56tLiAFSn1rIn6jtDSIAPGLqzIkgg7n/1KFfj2YGraJL9cLQOE0TuCPDnSgl2KODxnLMF749uFk/rGzg1CePxEmLRf68CJ/bUfgUOCPRSxgm6tmfJwgWdOEKaP+Mslp95GF6vxQltfOTSFZ7G/tWlRhJ5tdRXhntzKIWlxqVhGHUN9UoBD7nU3Lk3LN6TYR2eoZYjd3aR9je8Y9fgLS4KDfk+RF9vaZH1EYXZlyLKk5MqKFCTRL8n1xkecvMbDY+rMrucEwteXm51Hzvkzw+uXIkvDk17qc7QL4lo8+ESeofJAXhkam6OHw6zuklKQtVbqc+6fWT0eckCrjsDL/bHlIHpO6+EMyuQfv2SQ13iP87d4OAi87ku9yfSIaFzUX1CWICHHGXAUtKkXvhMoAQ4D3YDcG8PzmAanr1JJrYEVJA0AkIL1OX2W/tWKM0HOatgu20kcmThrIFBE3sLcB3HeGI+Oq0nn1kzSeB+cG96SEXuxRee30wFuoJHjqCfdp6I0Nm0/ZKzuFPuLhRs2vR907izV5+iTDHPhRW9+RegubNKUP3RTcKh0stidm3785phDBg1/X9mdPUP57lRemVn4/U0Ztm3yfn7sCnBatqtzZnDAb56XLLC/9XnrIQgvewj62asB7PB3rdnN+5Ii+6HPUjZZVpYzD6MMfsb+K8DwUJEyy29gie9SdqedRQRjEsZ5ihHNLm8A+gY9lFSO3Nv3BPkPgefUd2GMu9AT1PPDog4g9KfoqeX8TJNbCkFwLwFLCMKUYs92A+JuYbDXAbTP7/NKKYnvp0DSRz3jOC1g/GBgsTcdUtQAeNXwnoqL4cW3KBI+CnNXaZFRdzsfr1EW+yu1MrFhINjo0bNJ4Ee3XMJz/WxZRo5Gf+YnSbAbyBUAaWZu3ejmnhH3tp5Y+i4uFnurjn6KstBba5XFKGjj+R2AFZHbOB3u1cAHrfcHJ1Gw0yt7ixN7I+ehugR51/3XaDk5aPLXCaPTSqsuPk4cHkl6i8qJ69GSPWtAKRm01NmfZbfzsrU+eM1y6a3o0GrbEoGl8fucStG6xwuy2m7VLkIcrAYvKso2YFmwNV2SpATRGgcYMs4S+phruEa11AFs3rzspILYc1hjBLnkFYCBpg+vC7dCQZD1tU+zoihXmqHDJtzbuLYti8hfqgLHNd+fOHm4caHlcgAYKXJPH1lByqr8sxDtl321Lf9wiePl4XQP4zXBx4HI8WLPcEpJPeYDSNO37cOf5XLW7bQaScAtZfRpedhddfjy1gj3EVgqpeVpEidpiMGQ79nmWGnmwAlwDZjv5wOZhxurqHQtj4SlERyggNAwCkmAA3c77bR+uNBCLYfjrtKS1Y6mD2afpn217QJsa7u+t11s4cd8onVUqeEeWFZCVCRB0rqj8dgwPqevtr5/fhrj0eC+2D7+Ba82oiuDymP5AAAAAElFTkSuQmCC",
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
            actualHp: 200,
            actualAp: 75,
            actualDps: 140.62,
            magnification: "250%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
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
            actualHp: 3250,
            actualAp: 200,
            actualDps: 250.0,
            magnification: "250%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
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
            actualHp: 200,
            actualAp: 75,
            actualDps: 140.62,
            magnification: "250%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "5.3-6.7s",
            delayFrames: "160-200f",
            baseHpRatio: "99%",
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
            actualHp: 3250,
            actualAp: 200,
            actualDps: 250.0,
            magnification: "250%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.0s",
            delayFrames: "400-480f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "390",
          enemyName: "だっふんと機関銃",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 7500,
            dps: 3515.62,
            speed: 8,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 64,
            foreswing: 2,
            backswing: 62,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 3750,
            actualDps: 1757.81,
            magnification: "50%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "母ちゃん衛生兵の奮闘",
      baseHp: 150000,
      width: 3800,
      enemyLimit: 10,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 1,
        magnifications: [100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "40",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
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
            actualHp: 6000,
            actualAp: 480,
            actualDps: 197.28,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
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
            actualHp: 80000,
            actualAp: 800,
            actualDps: 1090.9,
            magnification: "200%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 30000,
            actualAp: 1000,
            actualDps: 937.5,
            magnification: "100%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
        },
        {
          enemyId: "390",
          enemyName: "だっふんと機関銃",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 7500,
            dps: 3515.62,
            speed: 8,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 64,
            foreswing: 2,
            backswing: 62,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 7500,
            actualDps: 3515.62,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "389",
          enemyName: "合格野郎",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgIDAgIEBAQFBQUGBQMIBgQHBwcHBwcICAgICAgICAgJCAcJCQkJCQgKCQoNCQkMCwoNCwoNDAsPDw8fHh8hISEtHxcjIyQwIRhAIRIrKCpbIQAxMTIzMzNlKQc7OjxAQEBDQUSCMgdISEhQUFBzSDKiOgNeXVvAQwFpaWlra2vUTAB2dnbwUgD+VAB+fn6JiYmVlZWhoaGrq6u2tra/v7/KysrZ2dnk5OTt7e309PT7+/v///////92yb08AAAAQHRSTlMABxAXNCV/Ykr/V8v4ve1vraKM39OX/+e+89X+/+r/rv//xv//2Pz/////6v////////7//v///////////wD/6M0sRAAABaNJREFUWIXtV9mWqjgULVGBUhFHnKgoRhE0ohCGEKD9/7/qE5zKkrov/dIP96xyKSF7Z58R6uOf/2gffwn+Evwl+L8QVFpNqjcbT2vWa7XqjQ9AU3rukJqtQU9rj242n4/a2lhXm3/iULW+rKiNpiRJdXXc7hqmhSwwY+GsELYs05gNgURsqUtVAvSVs5hNJu1ev68NDYRvZi2c43F1vbSQ2el2h/PpoPmGl5T5fmNeN30+4eIagQTDwhb8tpBhGIu9M30jqOlDZ7MwBRCBdvzdQLxYga/SPhfH/bT+RtCQ+1rXEPvQK/w7C9xxKQTl60t5j2ZNUodVyDscleSm5ZpGW1EaVelQZr/hS68AvVhtHMdZjdSqLHzUe6gSbQEe4IDen07n8/l0cuZyVUG0Jr+eDxyLzVGgAQ+f42aqvIVRGpuV0QM8xiacfr7inY2zPx6dr8FPhsboV7wFx59vdjquFqvV4mvaa716UfslhKAfavF0Pn9jcI7OZKyXiZAeOmpyNQEU5cK5ev5g2Kw22D8sVUlSl0u1dicwKwWY2NwI9H7/IIE0oCjP4sN4fEjCZf1PCizDQqsSeDwKkpOAQy242aUoeBjyC9/e2qKmVxFA5RnOVffpfNq4O6A4Ynfh50BQ/mWHxr0MqggME1ngwWm/WzmQ/TjeOac9SSM3yqKIXy484gf1nsb5D/VYDBMcxjvweRd5ztlZxQXbOU5QFAmJfMPPM89m27sCqY9e8QhhZCcZ3+0dl+WBAy5A6MLVJmAs9tzYJlmKKbuNhpr02owwwUwToSj2GHF2rCgC0L5yPeJa2HVdQuDjBZQkgVymsdbqy43+t0RaJgmhhmyMbbzAQRi5G2dHwyhmLOU8y3MeERsBzc0DaaDLstJ9OIEMN+W2F7t+YvshDXxxNM0LsDzPOE/Bi9A2qG/1rmUgybKuDYYd9BBgUeZ7LuGZ7zJeWkLolYqUPhDPJ7Y1m9xmUxPQltWBoSgGD0hArptwL0oC2y43+wF1EXgNXiQJE5YkkWUEdF7WcrMla5PARdg0RQBFBfqYcYItP4KdSRyFcLpN44jSoFThgfnebL3syWI8NfptWWnPQhb7YnLDYKUh7HDL44WAgMLZtutfJVwjmeXc1utgkshCW64rB6jwnHkmMqFI8iyK+TVeQoA4F0dlGC8PK+igBvHTQYK63aoDWt7jno/N+PJiZfgzQosfyzH0ojrvCx/W4XJ6RRVhEOHk8mMvWO6FxZXtsQR12Fx6Y5HHZRLMkutq4nEaZG/4S+6zi+At8sdSum6Mw0Avx0HI3FTQg9eEcT/K3wgyPxW+JDTM7xr4dny49aN6YB4X7JRAvLLUC98YuJ9dOMsoZQ8fMnubpuuynepjIghAQRIz7CUxfXNCEKQkjWnyJCBhLjJR1mKfZEJBFCTMsomXvEUx9VMe2ylPHgqK3Kd0eX/Uqwchusiygtthlr5HkdnQBE//xebCmw/uA+VD9W/3gDd6TyIQ+NROXyNTBPrzOdsKigfBu36wmDI7fV0qqP58PimPOgOCCvwloqnNfhCE8pNAD+8Emcfe0GWFJjh+aYVLET0JanJU3KqUe2kFvggwcYP8eQ2WBU8Xarqf3ZotI+wFeXcshLkEXZrxNC07lFJ//cgBFMKU3No9ISSKY5amoucfHZzaAQwVzyP2dr1eLqcYz3z3WwhAguvPsD2fTucTeE21xTsZZF6w0ihhCemOJh7ueERTWmqj0dpu+4dD64aVmg1VGbtkaFmj9mjY7XasECFifJaGXGTa6LPT7diog8zucNhua1p32BtOBi0V3sI/GgMNUJ3P72YZn+btp0EMwzM/q6zTHbb7ipipfa09hJPh7E6naqfxigMTm4ejdm+gN65OwD8HakvR5cG43+tpWlvY6NXKNU2D1/HxQNZFKJrw5l77+BeyAow2wn1nYwAAAABJRU5ErkJggg==",
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
            actualHp: 30000,
            actualAp: 1000,
            actualDps: 937.5,
            magnification: "100%",
            count: "4",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
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
            actualHp: 6000,
            actualAp: 480,
            actualDps: 197.28,
            magnification: "400%",
            count: "5",
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
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
            actualHp: 80000,
            actualAp: 800,
            actualDps: 1090.9,
            magnification: "200%",
            count: "2",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "390",
          enemyName: "だっふんと機関銃",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 7500,
            dps: 3515.62,
            speed: 8,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 64,
            foreswing: 2,
            backswing: 62,
            tba: 0
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 7500,
            actualDps: 3515.62,
            magnification: "100%",
            count: "1",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "にゃんこ大戦争は息抜き",
      baseHp: 250000,
      width: 4200,
      enemyLimit: 10,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 1,
        magnifications: [100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "40",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1875.0,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
        },
        {
          enemyId: "356",
          enemyName: "ガリゴリくん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 36000,
            ap: 1500,
            dps: 2812.5,
            speed: 24,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 450,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 108000,
            actualAp: 4500,
            actualDps: 8437.5,
            magnification: "300%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "36.7-36.7s",
            delayFrames: "1,100-1,100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 50,
                power: 100
            }
          }
        },
        {
          enemyId: "389",
          enemyName: "合格野郎",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgIDAgIEBAQFBQUGBQMIBgQHBwcHBwcICAgICAgICAgJCAcJCQkJCQgKCQoNCQkMCwoNCwoNDAsPDw8fHh8hISEtHxcjIyQwIRhAIRIrKCpbIQAxMTIzMzNlKQc7OjxAQEBDQUSCMgdISEhQUFBzSDKiOgNeXVvAQwFpaWlra2vUTAB2dnbwUgD+VAB+fn6JiYmVlZWhoaGrq6u2tra/v7/KysrZ2dnk5OTt7e309PT7+/v///////92yb08AAAAQHRSTlMABxAXNCV/Ykr/V8v4ve1vraKM39OX/+e+89X+/+r/rv//xv//2Pz/////6v////////7//v///////////wD/6M0sRAAABaNJREFUWIXtV9mWqjgULVGBUhFHnKgoRhE0ohCGEKD9/7/qE5zKkrov/dIP96xyKSF7Z58R6uOf/2gffwn+Evwl+L8QVFpNqjcbT2vWa7XqjQ9AU3rukJqtQU9rj242n4/a2lhXm3/iULW+rKiNpiRJdXXc7hqmhSwwY+GsELYs05gNgURsqUtVAvSVs5hNJu1ev68NDYRvZi2c43F1vbSQ2el2h/PpoPmGl5T5fmNeN30+4eIagQTDwhb8tpBhGIu9M30jqOlDZ7MwBRCBdvzdQLxYga/SPhfH/bT+RtCQ+1rXEPvQK/w7C9xxKQTl60t5j2ZNUodVyDscleSm5ZpGW1EaVelQZr/hS68AvVhtHMdZjdSqLHzUe6gSbQEe4IDen07n8/l0cuZyVUG0Jr+eDxyLzVGgAQ+f42aqvIVRGpuV0QM8xiacfr7inY2zPx6dr8FPhsboV7wFx59vdjquFqvV4mvaa716UfslhKAfavF0Pn9jcI7OZKyXiZAeOmpyNQEU5cK5ev5g2Kw22D8sVUlSl0u1dicwKwWY2NwI9H7/IIE0oCjP4sN4fEjCZf1PCizDQqsSeDwKkpOAQy242aUoeBjyC9/e2qKmVxFA5RnOVffpfNq4O6A4Ynfh50BQ/mWHxr0MqggME1ngwWm/WzmQ/TjeOac9SSM3yqKIXy484gf1nsb5D/VYDBMcxjvweRd5ztlZxQXbOU5QFAmJfMPPM89m27sCqY9e8QhhZCcZ3+0dl+WBAy5A6MLVJmAs9tzYJlmKKbuNhpr02owwwUwToSj2GHF2rCgC0L5yPeJa2HVdQuDjBZQkgVymsdbqy43+t0RaJgmhhmyMbbzAQRi5G2dHwyhmLOU8y3MeERsBzc0DaaDLstJ9OIEMN+W2F7t+YvshDXxxNM0LsDzPOE/Bi9A2qG/1rmUgybKuDYYd9BBgUeZ7LuGZ7zJeWkLolYqUPhDPJ7Y1m9xmUxPQltWBoSgGD0hArptwL0oC2y43+wF1EXgNXiQJE5YkkWUEdF7WcrMla5PARdg0RQBFBfqYcYItP4KdSRyFcLpN44jSoFThgfnebL3syWI8NfptWWnPQhb7YnLDYKUh7HDL44WAgMLZtutfJVwjmeXc1utgkshCW64rB6jwnHkmMqFI8iyK+TVeQoA4F0dlGC8PK+igBvHTQYK63aoDWt7jno/N+PJiZfgzQosfyzH0ojrvCx/W4XJ6RRVhEOHk8mMvWO6FxZXtsQR12Fx6Y5HHZRLMkutq4nEaZG/4S+6zi+At8sdSum6Mw0Avx0HI3FTQg9eEcT/K3wgyPxW+JDTM7xr4dny49aN6YB4X7JRAvLLUC98YuJ9dOMsoZQ8fMnubpuuynepjIghAQRIz7CUxfXNCEKQkjWnyJCBhLjJR1mKfZEJBFCTMsomXvEUx9VMe2ylPHgqK3Kd0eX/Uqwchusiygtthlr5HkdnQBE//xebCmw/uA+VD9W/3gDd6TyIQ+NROXyNTBPrzOdsKigfBu36wmDI7fV0qqP58PimPOgOCCvwloqnNfhCE8pNAD+8Emcfe0GWFJjh+aYVLET0JanJU3KqUe2kFvggwcYP8eQ2WBU8Xarqf3ZotI+wFeXcshLkEXZrxNC07lFJ//cgBFMKU3No9ISSKY5amoucfHZzaAQwVzyP2dr1eLqcYz3z3WwhAguvPsD2fTucTeE21xTsZZF6w0ihhCemOJh7ueERTWmqj0dpu+4dD64aVmg1VGbtkaFmj9mjY7XasECFifJaGXGTa6LPT7diog8zucNhua1p32BtOBi0V3sI/GgMNUJ3P72YZn+btp0EMwzM/q6zTHbb7ipipfa09hJPh7E6naqfxigMTm4ejdm+gN65OwD8HakvR5cG43+tpWlvY6NXKNU2D1/HxQNZFKJrw5l77+BeyAow2wn1nYwAAAABJRU5ErkJggg==",
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
            actualHp: 60000,
            actualAp: 2000,
            actualDps: 1875.0,
            magnification: "200%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            }
          }
        },
        {
          enemyId: "390",
          enemyName: "だっふんと機関銃",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgIDAwMEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUGBgYHBwcJCQkJCQkJCQkKCgoKCgoMDAwNDQ0PDw8QEBAUFBQcHBwgICAiISIiIiIjIyMjIyMmJiYpKSktLS0vLy80NDQ3Nzc+Pj4/Pz9BQUFHRkdPT09SUFJXVldaWlpbW1teXV1fX19nZWdubm5vb29xcXF+fX6LioucnJyvr6+8vLzGxsbOzs7Z2dnl5eXv7+/5+fn////DhFf4AAAAQHRSTlMABxHrHxdS8/8xQ7HeOqMmXXGEzGd7lrv/7hDO34j/oXqz7P+b//PI/tv///XB/+b/1O7+//78/f//////////g5lv8gAABJxJREFUWIWdV4l2okoUDMquRhBFjAZGGJQlwY5Is8P//9XcBkfNexnTpo7G5MRbXXenn57ug+EkmZelwTdf+yc4ZesfjgffUtgf2bOvh6ysm7pMD5b0A/uBfqzatm3gXSU6yzxMoOzKlqAqmrZ826oT7jEOdpmQw9smccu2qbLE384UeTqgZWHUzgEgSONOCXDgo6+NVMqcTPYFMSvytumEdBxNFYkjjsp+oOPOLk0u5h3SlUrlA8MfegcyVN3aN+mWriTYbdpblFHR+V9VZVkWWbKXqeyfJn6fwraKcrDHB9/f7/dbazGhTIK0zs8KQlBQ7HlpyrIsR53Dp8HsXAQ4rtvmNHu8DEkWgSKPSQhoI3eLlzmpoyJEaQES8G+WeVTE4BXXZeS4rofSusbWgrYCL2CtBAWn5BQHbpxhZ2fzDxI8KTYC81OCk9B1EEaUNXwBZ6HQQygKPJQkXhijTV9D1LFQbAcVdVOV2HGiBLnRTmUA0vyFzn66NIy0G0hVZLpu5DnO+hfA2vyicoVRBMPIumLGoROGYQR4AwSBrUuDlw73CAbP4nCT9u1kioZoXOCYq6X1m+D1rgfaWNU7guYk3sIwTFNYDVfwWt8jUJY81xE0Zer0AkAHkWIagq4oCs/z9zqbkSfMYEs6uU5OKDThWHI0/BBFZ7egSCV8hd13M6FKE6gnFJ9ixzBWIAGlH5PvCQCSX/VrpYFp2jQ1jgwzcQ0jLtM5FYF8qNv6OlLrNEFZ6RlGkGOFimCeQABwXpJ5mGcF1AP0pwdRjN+nNPbMK4aBkMQEyDGd6M3/+Hhfi6LwTDcYOZIEyAIIqFJTFDVlIk05ZSyOKQez9Hcwk+1gGqLeHTvQxSHlYOCP1wjmpjjsNxIzE4Q53W5a4GsGqnjJ93OVUQWBpo5Aq5VeN1rlX2QrwtmZ7zDdX0PQYP0yUfmhOKIar1BGFxcK/1q78nhINRxvQ9AkN15zylymcYHbZhcP8j1V5X1G10nnJjjS5e0zlOPFg59sRpLEvwTV4eGVBJAvHtym8AEBs1PTD5M29+nGzycw6iqGpUTGUBk/Py6AmawDWIYJxkkcrH6QAmnpBWEYBF4AWCkPK5BGHoo82GaEw/M2uvwQBTNZkqUeEY4gQAF8buj692wvd/YBEATdK4S/lvSVxPDrAKHerCNA5M8NfSYljRigMCIkEfkkXDu6RULAzeyo9wCFYcdBVNxfhpf/MXDJU3Tb7U89q4C36yzvtTOr8BNJkiaysrC2/hHnGNJP3Ag6KfCLs7rbTdJobPuAwxHD+oLbSZPCQx3qo9dl0dQUaQoX0Ln6pRCGVbdHXFT1+WZTF8lm47hh4IErkeeaYRwfP97hgN3b69ehYFjFAu1ZXhZFjpG9XMzGLjwjeq7ruIGXw24t8rQoUWz9I5YMN5k/ayvTdExTFIbj8VhwUrBKIAuBG6I4jDwvROZm8fV9YaqOtLEgfHqUCjIIR1mQw7MsSwmXKA615y87a7pYjof/IRAd0s5p93BAWGJ4NANto/mXfcWwEq/O9NFS0zTQPxwCXYfVyrbt3W5nb7TR80zlpf9dfv8Ae/v0lf3hI/8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 7500,
            dps: 3515.62,
            speed: 8,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 64,
            foreswing: 2,
            backswing: 62,
            tba: 0
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 15000,
            actualDps: 7031.24,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 50,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        }]
    }
  ]
} as const;

export default e1160Data;

