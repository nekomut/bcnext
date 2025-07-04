// Stage 2050 Data
import type { StageData } from '../../app/stage/types';

export const e2050Data: StageData = {
  eventId: 2050,
  eventName: "どうせ食べられるだけだし",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 50,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "しがらみが多い",
      baseHp: 90000,
      width: 4500,
      enemyLimit: 9,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "150000",
          amount: "4",
          times: "-1",
          limitText: "-1"
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
            delay: "10.0-30.0s",
            delayFrames: "300-900f",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 9000,
            actualAp: 5000,
            actualDps: 3658.54,
            magnification: "100%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "56.7-56.7s",
            delayFrames: "1,700-1,700f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
            baseHpRatio: "99%",
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
            count: "4",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
            baseHpRatio: "99%",
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
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
            baseHpRatio: "99%",
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
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
            baseHpRatio: "99%",
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
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 9000,
            actualAp: 5000,
            actualDps: 3658.54,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "56.7-56.7s",
            delayFrames: "1,700-1,700f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
            baseHpRatio: "99%",
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
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
            baseHpRatio: "99%",
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
            actualHp: 80,
            actualAp: 30,
            actualDps: 56.25,
            magnification: "100%",
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "23.3-25.3s",
            delayFrames: "700-760f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 9000,
            actualAp: 5000,
            actualDps: 3658.54,
            magnification: "100%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "56.7-56.7s",
            delayFrames: "1,700-1,700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "353",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 4999,
            dps: 1785.36,
            speed: 24,
            range: 330,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 84,
            foreswing: 53,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 4999,
            actualDps: 1785.36,
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
      stageName: "安定志向",
      baseHp: 180000,
      width: 5000,
      enemyLimit: 10,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7500",
          treasureName: "キャラクタードロップ(7500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4500",
          treasureName: "キャラクタードロップ(4500)",
          probability: "250000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "100000",
          amount: "0",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "353",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 4999,
            dps: 1785.36,
            speed: 24,
            range: 330,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 84,
            foreswing: 53,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 4999,
            actualDps: 1785.36,
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
          enemyId: "352",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQEFBQUGBQUGBgYICAgKCgoLCwsNDAsODg4QDQ0UFBQYFRQXFxYnIiEvLy83Liw2Lyw0NDQ4ODhLSklOTEtNTUx9OyxSUlJdXFtwWkFeXl1jYmFpaGZsaWhvb2/LTT+Waj54cm2BfXfqVkSLgXSNjY2VjYWXkYWtkXemnoqmn5i3rJ7LvJjBvr3FxMLdzKDPz8/W0Mvr2Kfc3N3c3Nz14rDl5eb+567s7Oz+7sf4+Pj+/v7///9M3lsQAAAAQHRSTlMAFAjE0h53LYo8Z0pWtp32fJG31mb87P6U/6zC/9T7h6ji////zP//cJ3/5/7T//9r/v//rP/k//+I////U/8A+pC1SgAABBJJREFUWIXtltt2okgUhqUiIAeRgyJRQEmg6ZSVQiA0NCTO+7/V7CqgPcxas8bkblb+CyiV/dU+1cbJX1/U5BvwDfgGfAP+R4BBgoImXxLSVPlrhIkofZ0gfJGgaPymaZ9Nh6jCBclzR/k0AIlLL4qx86lsiKY9NZIsw3mdbsX77QX76fHxMca0O3U49+5Pg/7048cTfaanEwC6w/1BmABgiB5A9bsBKgc85gAocYdnd2dBdlgM6/J0qlOS+s/OnT4g3YEcPvp+mq7XPi6z5+l9aRCd50EpJpRi34+tuyohuyPAZ4pJ0UR3NSQy/MGcZEXVtG3TZvc1g7bwuX3BbEFN1UR3ZAGJuuv7vX3bFrRqszUhkiIL/8ELJOsSyKX+Oub2TbguqiIrCltXJUlV/n1MIAUeEdFEDN6rgjvftllG0pi0TSBOkAB49RYhCMzp3jld6ntOjN7f21FFjEnWtqk67DETrvfc2IJgBn2rzfoxNJEPI4C50XBfMkfl24jzq3RqSR1pFs2X/JM013midDo6kJGiGTBhmlgKkmfzy5MhB92JzPEpN3uct7NMVZOtvDevsopCM7JsVgXxMXEsbze7qIVshBjHqxSnts6+Fqzj7+PPneekKcaYEAxdSCiJCcZpnDqb7e74sdPO8ZtRXne9amz2Lrz9+v3xkdRtVRVFxkWhHQv4WL1+gH6a6GxPutMfdVuWXKTufgEhKd8HEVLwO2tGBjha5xRqh9OlEl4dILz9ejukVW/fguc4a8C8aooX2N+xtbGKyK7Hzfk16H9ALAqaN2DdZFlTkDCOYwohZIfjcWdaQbQ1+3aUo3HvkrDhG4xkWdqSnEAGYXdQHPthHIZh8rKzNAQviw0wLE1AOh0d6PLy1NE/ADgP0iZ5fT2clQRhGDgzGfU/LzdRFHhGPgBwzK/Tyw4VFNXy9vsXrv3OswwTjLae1ve8IJn7yB0BNV/kwc0hgZMjhRTawJUUEfpz2HizVASE5qYgcg86nsCupCmJrH+MXmHfjfUdYlt6W+bI0o5MZPKpT+uSPQTTG+fRLWDiQaFq69ovZekFURi71hyX0IC0xryaXd2dDtchIEHsARDA1ShCorJ0WGWgwHGY9ne2tM+PgK/7fZJEzDs3SZK9t5SvIHpAwpTCGYFTsgKtQee/Ekhy4ZDA5jE7UHHNclVG0pWDsukMVYAu4CLG+ZRITpiSvKzLMs/hVucUx655M1LNsYwDJ7ooAlJX65XjhoNcd71aqbcjWUvrS+WXLy9kh+HacCA204bgDANWs9sSITMMV6FtWZbNF5eTjgNm89VqoRtsZTLArQdIiVzH1WVZ1txg7o5zRtBUaWZMF6vFdLpYLB746gFWc2MGM/9MUSRjCnpgmj7MH2ZQg78B44r37B/0lLYAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1250,
            dps: 412.09,
            speed: 6,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 91,
            foreswing: 10,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 1250,
            actualDps: 412.09,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 799,
            actualDps: 406.27,
            magnification: "100%",
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
          enemyId: "352",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQEFBQUGBQUGBgYICAgKCgoLCwsNDAsODg4QDQ0UFBQYFRQXFxYnIiEvLy83Liw2Lyw0NDQ4ODhLSklOTEtNTUx9OyxSUlJdXFtwWkFeXl1jYmFpaGZsaWhvb2/LTT+Waj54cm2BfXfqVkSLgXSNjY2VjYWXkYWtkXemnoqmn5i3rJ7LvJjBvr3FxMLdzKDPz8/W0Mvr2Kfc3N3c3Nz14rDl5eb+567s7Oz+7sf4+Pj+/v7///9M3lsQAAAAQHRSTlMAFAjE0h53LYo8Z0pWtp32fJG31mb87P6U/6zC/9T7h6ji////zP//cJ3/5/7T//9r/v//rP/k//+I////U/8A+pC1SgAABBJJREFUWIXtltt2okgUhqUiIAeRgyJRQEmg6ZSVQiA0NCTO+7/V7CqgPcxas8bkblb+CyiV/dU+1cbJX1/U5BvwDfgGfAP+R4BBgoImXxLSVPlrhIkofZ0gfJGgaPymaZ9Nh6jCBclzR/k0AIlLL4qx86lsiKY9NZIsw3mdbsX77QX76fHxMca0O3U49+5Pg/7048cTfaanEwC6w/1BmABgiB5A9bsBKgc85gAocYdnd2dBdlgM6/J0qlOS+s/OnT4g3YEcPvp+mq7XPi6z5+l9aRCd50EpJpRi34+tuyohuyPAZ4pJ0UR3NSQy/MGcZEXVtG3TZvc1g7bwuX3BbEFN1UR3ZAGJuuv7vX3bFrRqszUhkiIL/8ELJOsSyKX+Oub2TbguqiIrCltXJUlV/n1MIAUeEdFEDN6rgjvftllG0pi0TSBOkAB49RYhCMzp3jld6ntOjN7f21FFjEnWtqk67DETrvfc2IJgBn2rzfoxNJEPI4C50XBfMkfl24jzq3RqSR1pFs2X/JM013midDo6kJGiGTBhmlgKkmfzy5MhB92JzPEpN3uct7NMVZOtvDevsopCM7JsVgXxMXEsbze7qIVshBjHqxSnts6+Fqzj7+PPneekKcaYEAxdSCiJCcZpnDqb7e74sdPO8ZtRXne9amz2Lrz9+v3xkdRtVRVFxkWhHQv4WL1+gH6a6GxPutMfdVuWXKTufgEhKd8HEVLwO2tGBjha5xRqh9OlEl4dILz9ejukVW/fguc4a8C8aooX2N+xtbGKyK7Hzfk16H9ALAqaN2DdZFlTkDCOYwohZIfjcWdaQbQ1+3aUo3HvkrDhG4xkWdqSnEAGYXdQHPthHIZh8rKzNAQviw0wLE1AOh0d6PLy1NE/ADgP0iZ5fT2clQRhGDgzGfU/LzdRFHhGPgBwzK/Tyw4VFNXy9vsXrv3OswwTjLae1ve8IJn7yB0BNV/kwc0hgZMjhRTawJUUEfpz2HizVASE5qYgcg86nsCupCmJrH+MXmHfjfUdYlt6W+bI0o5MZPKpT+uSPQTTG+fRLWDiQaFq69ovZekFURi71hyX0IC0xryaXd2dDtchIEHsARDA1ShCorJ0WGWgwHGY9ne2tM+PgK/7fZJEzDs3SZK9t5SvIHpAwpTCGYFTsgKtQee/Ekhy4ZDA5jE7UHHNclVG0pWDsukMVYAu4CLG+ZRITpiSvKzLMs/hVucUx655M1LNsYwDJ7ooAlJX65XjhoNcd71aqbcjWUvrS+WXLy9kh+HacCA204bgDANWs9sSITMMV6FtWZbNF5eTjgNm89VqoRtsZTLArQdIiVzH1WVZ1txg7o5zRtBUaWZMF6vFdLpYLB746gFWc2MGM/9MUSRjCnpgmj7MH2ZQg78B44r37B/0lLYAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1250,
            dps: 412.09,
            speed: 6,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 91,
            foreswing: 10,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 1250,
            actualDps: 412.09,
            magnification: "100%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        },
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 5000,
            actualAp: 799,
            actualDps: 406.27,
            magnification: "100%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "353",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 4999,
            dps: 1785.36,
            speed: 24,
            range: 330,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 84,
            foreswing: 53,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 4999,
            actualDps: 1785.36,
            magnification: "100%",
            count: "2",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "1.3-1.3s",
            delayFrames: "40-40f",
            baseHpRatio: "100%",
            isBoss: false
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
      stageName: "おはようございません",
      baseHp: 270000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3000",
          treasureName: "キャラクタードロップ(3000)",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "12",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 3196,
            actualDps: 1625.08,
            magnification: "400%",
            count: "5",
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
          enemyId: "352",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQEFBQUGBQUGBgYICAgKCgoLCwsNDAsODg4QDQ0UFBQYFRQXFxYnIiEvLy83Liw2Lyw0NDQ4ODhLSklOTEtNTUx9OyxSUlJdXFtwWkFeXl1jYmFpaGZsaWhvb2/LTT+Waj54cm2BfXfqVkSLgXSNjY2VjYWXkYWtkXemnoqmn5i3rJ7LvJjBvr3FxMLdzKDPz8/W0Mvr2Kfc3N3c3Nz14rDl5eb+567s7Oz+7sf4+Pj+/v7///9M3lsQAAAAQHRSTlMAFAjE0h53LYo8Z0pWtp32fJG31mb87P6U/6zC/9T7h6ji////zP//cJ3/5/7T//9r/v//rP/k//+I////U/8A+pC1SgAABBJJREFUWIXtltt2okgUhqUiIAeRgyJRQEmg6ZSVQiA0NCTO+7/V7CqgPcxas8bkblb+CyiV/dU+1cbJX1/U5BvwDfgGfAP+R4BBgoImXxLSVPlrhIkofZ0gfJGgaPymaZ9Nh6jCBclzR/k0AIlLL4qx86lsiKY9NZIsw3mdbsX77QX76fHxMca0O3U49+5Pg/7048cTfaanEwC6w/1BmABgiB5A9bsBKgc85gAocYdnd2dBdlgM6/J0qlOS+s/OnT4g3YEcPvp+mq7XPi6z5+l9aRCd50EpJpRi34+tuyohuyPAZ4pJ0UR3NSQy/MGcZEXVtG3TZvc1g7bwuX3BbEFN1UR3ZAGJuuv7vX3bFrRqszUhkiIL/8ELJOsSyKX+Oub2TbguqiIrCltXJUlV/n1MIAUeEdFEDN6rgjvftllG0pi0TSBOkAB49RYhCMzp3jld6ntOjN7f21FFjEnWtqk67DETrvfc2IJgBn2rzfoxNJEPI4C50XBfMkfl24jzq3RqSR1pFs2X/JM013midDo6kJGiGTBhmlgKkmfzy5MhB92JzPEpN3uct7NMVZOtvDevsopCM7JsVgXxMXEsbze7qIVshBjHqxSnts6+Fqzj7+PPneekKcaYEAxdSCiJCcZpnDqb7e74sdPO8ZtRXne9amz2Lrz9+v3xkdRtVRVFxkWhHQv4WL1+gH6a6GxPutMfdVuWXKTufgEhKd8HEVLwO2tGBjha5xRqh9OlEl4dILz9ejukVW/fguc4a8C8aooX2N+xtbGKyK7Hzfk16H9ALAqaN2DdZFlTkDCOYwohZIfjcWdaQbQ1+3aUo3HvkrDhG4xkWdqSnEAGYXdQHPthHIZh8rKzNAQviw0wLE1AOh0d6PLy1NE/ADgP0iZ5fT2clQRhGDgzGfU/LzdRFHhGPgBwzK/Tyw4VFNXy9vsXrv3OswwTjLae1ve8IJn7yB0BNV/kwc0hgZMjhRTawJUUEfpz2HizVASE5qYgcg86nsCupCmJrH+MXmHfjfUdYlt6W+bI0o5MZPKpT+uSPQTTG+fRLWDiQaFq69ovZekFURi71hyX0IC0xryaXd2dDtchIEHsARDA1ShCorJ0WGWgwHGY9ne2tM+PgK/7fZJEzDs3SZK9t5SvIHpAwpTCGYFTsgKtQee/Ekhy4ZDA5jE7UHHNclVG0pWDsukMVYAu4CLG+ZRITpiSvKzLMs/hVucUx655M1LNsYwDJ7ooAlJX65XjhoNcd71aqbcjWUvrS+WXLy9kh+HacCA204bgDANWs9sSITMMV6FtWZbNF5eTjgNm89VqoRtsZTLArQdIiVzH1WVZ1txg7o5zRtBUaWZMF6vFdLpYLB746gFWc2MGM/9MUSRjCnpgmj7MH2ZQg78B44r37B/0lLYAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1250,
            dps: 412.09,
            speed: 6,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 91,
            foreswing: 10,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 5000,
            actualDps: 1648.36,
            magnification: "400%",
            count: "1",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 50
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
            actualHp: 120000,
            actualAp: 4000,
            actualDps: 7500.0,
            magnification: "800%",
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
            actualHp: 120000,
            actualAp: 4000,
            actualDps: 7500.0,
            magnification: "800%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 12000,
            actualAp: 1800,
            actualDps: 3375.0,
            magnification: "100%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAQEDAgIDAwMDAwMDAwMDAwIGBgYHBwcHBwYIBwcJCAcJCQkODQsREA4ZGRghISEmIh4lIyEzLSY3My85NzRAPTtJPSZERERZSi5UU1JVVFJtWTVcXFxlZWV0dHSNc0GcfUSDgoKLi4qsikqSkpG2klGdnZzHn1HPp1isqqnUq1zVtnq7ubbHxcTNzcznzZ7W1dTe3dzn5uDv7er08+D19PP9+/T///86eksYAAAAQHRSTlMACBAaIis0P01WeOH4ZKvQw5eBi6K43PrpwNH+3/T/////7v/+///+///////////////+////////////////mNod5wAABbVJREFUWIWVV4l2qkoQDIobCoIbKrIpi+A4iHfgsQT8/796PYi5rtFbxyRCrJrumu4e/Pp6B6bRZFm22Xj7wedstjeaLJbL5XTCt5h/p7fHy7W7//PnGOxcdcj/YxTNnrR0//z3H/ApDtv5uPkP9EZXmG8CoAMVXofgcNyro49jYDqTubE7rwzs7WZDr3bz7qd8frnZH2vsN+5uu3VdUNhMPguB4Ve74w8CQwOxg7sFrVnnI4HubHvcbyHrY5X9fneAPIIALlT+E35T2Bxdwz3UGRgGTed8tRl/UAwMPw+22rbmH7eGoRjBYVvdcKUPBNqistMu60MK+2Cj7A4bZf+pAKdp2iY4XiHYBcfApZ64o/cCzam7393wr2B8YCKvvmJDKPK43fw9hkZHdF/yj662Xk25duOVBtPihb72KoBgv9fCPA3t5WTMt59oNDrQvAYYHgQ7Wjq3gF4yNCcvy/I7wt56yd13JtBXDkGKtjGqXTjUpXOgS29pIxw0Mylr5GQ9ujGDaY2WXpwTTXa3u90+qAogCAL4OexAcUN7w8DlX5D5dPQ3D6a7sKPvsnA0zdju9nugwlYCmXaCsan+QnWSH3qR+iZ2lpfuZnpLnNHbSFEU0zJ0SEJRNGMDMBRZg98A08++KfIsIci2o7LAk1qgtcD5NxXOCEngA2mSxBEJAQQQhRiHJEnTLPvOI+w7tmU5YVqeSrI489nxGv5XvkQBL7pw/p15pu2gMEqL8nQq4zV35k9UM/k+40KpcLkAMtAp37FjSj1ReoZX9ZDl17FjYxLF8TlyjDyA7/kIbqbAK2r1DJlJRT6VeeSr014938Z+mSHIi8I0LdtxgA7wIFlTh5g9hMEO7NsWoUsXGUHr5aT3U0n8GuoDrI0BSZrRyE918GAnCZHnOLbj+yhM8jQOfVtdSHz7aro2xysU58XpFcqi2pcoRNR/y1Ek9m42N3qT5drDJIaNyosa+c9u4ioZy7J1WfFIWuAF+9hHbZ6eoav1em3ZYALEDIC31BQH0TqI0zzFimx6JFo/HUv0FG93upLsYVyZBkWUZFmWIFJnV4ShOeWkxWoutp8I1H4IVl7eGoBMnNO9K7COLanRgGWeDYManVlY3ltILD+HN5GJMufdUGY4NbnfAyhZnNHKi7PEfifQEOziNgPix7QuKg98RX4nwIr+bQaZPrDyy3tzMHgn0BqGtwlkpmzXrlI79XfHe3tG7hxIwqS2AnLI/BcCDMu8ELjajAj5yBLYp2cCK/R+EyhSGEqO7iDf7E+F0WMhf3X6YutWoEziJLv4mYcIIdNOizzUka8+KeTuvL7bmoU/hplWdMrianzQziam4zkmKkosPj7sdVW86l4LQNkkUZSVCF+iOHtAYEfIrPWYwjxCC9og7I8AWJ6WhUWqUqzvnQsqHD6a0J6FmSOAMDvElwLwbb8oLHwZsTkgo0isJ8XUFJ0ytSUWBFC9Wk5iMBHrMBq9ajzQeanrcPA862VmrKSnZC01m0N0Xcpl7uuKrNBJS6eM5yki9/yhvUu7OFK59n0vwPzWMQ2/OiZSlXvRC42JnkLnqdO+dzcOTon+t7aS1csH1bZog0Liy155pxArfwXi1etZ1hHNMC1S/SGC6EOBr7Y0Uy1b9oryXiC8VGP5Swpf1WgfS8MnAg4caxgh2E97zv0+D5im4NwJFJ6sKPoFyluFiXN3xGXwNACndlohy8I3XxiYMZ2AtPovk/R0G1CyevOlh5+Tm2cMekRmsDacknEURcSePhkn12AFHWF0boDqZNR1tbIAjFDk5XT82Mp3aIuyrssDxZT7E2k8HnEcJyoIq30FO8POy4fkK/TUKJQHJlG4RoOp0JkhvOBnzrNZ9gD68dAeTmVnzvV6/BlTWZ50hUG/xzaZNxqdsSAOlAFAHjyiPxQF6fcv0GyPk4ShKA6Hw/4t4I44FaQR37mL4X/MMKprUO4JJQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 20000,
            actualAp: 3196,
            actualDps: 1625.08,
            magnification: "400%",
            count: "8",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "352",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAAABAQEBAQEFBQUGBQUGBgYICAgKCgoLCwsNDAsODg4QDQ0UFBQYFRQXFxYnIiEvLy83Liw2Lyw0NDQ4ODhLSklOTEtNTUx9OyxSUlJdXFtwWkFeXl1jYmFpaGZsaWhvb2/LTT+Waj54cm2BfXfqVkSLgXSNjY2VjYWXkYWtkXemnoqmn5i3rJ7LvJjBvr3FxMLdzKDPz8/W0Mvr2Kfc3N3c3Nz14rDl5eb+567s7Oz+7sf4+Pj+/v7///9M3lsQAAAAQHRSTlMAFAjE0h53LYo8Z0pWtp32fJG31mb87P6U/6zC/9T7h6ji////zP//cJ3/5/7T//9r/v//rP/k//+I////U/8A+pC1SgAABBJJREFUWIXtltt2okgUhqUiIAeRgyJRQEmg6ZSVQiA0NCTO+7/V7CqgPcxas8bkblb+CyiV/dU+1cbJX1/U5BvwDfgGfAP+R4BBgoImXxLSVPlrhIkofZ0gfJGgaPymaZ9Nh6jCBclzR/k0AIlLL4qx86lsiKY9NZIsw3mdbsX77QX76fHxMca0O3U49+5Pg/7048cTfaanEwC6w/1BmABgiB5A9bsBKgc85gAocYdnd2dBdlgM6/J0qlOS+s/OnT4g3YEcPvp+mq7XPi6z5+l9aRCd50EpJpRi34+tuyohuyPAZ4pJ0UR3NSQy/MGcZEXVtG3TZvc1g7bwuX3BbEFN1UR3ZAGJuuv7vX3bFrRqszUhkiIL/8ELJOsSyKX+Oub2TbguqiIrCltXJUlV/n1MIAUeEdFEDN6rgjvftllG0pi0TSBOkAB49RYhCMzp3jld6ntOjN7f21FFjEnWtqk67DETrvfc2IJgBn2rzfoxNJEPI4C50XBfMkfl24jzq3RqSR1pFs2X/JM013midDo6kJGiGTBhmlgKkmfzy5MhB92JzPEpN3uct7NMVZOtvDevsopCM7JsVgXxMXEsbze7qIVshBjHqxSnts6+Fqzj7+PPneekKcaYEAxdSCiJCcZpnDqb7e74sdPO8ZtRXne9amz2Lrz9+v3xkdRtVRVFxkWhHQv4WL1+gH6a6GxPutMfdVuWXKTufgEhKd8HEVLwO2tGBjha5xRqh9OlEl4dILz9ejukVW/fguc4a8C8aooX2N+xtbGKyK7Hzfk16H9ALAqaN2DdZFlTkDCOYwohZIfjcWdaQbQ1+3aUo3HvkrDhG4xkWdqSnEAGYXdQHPthHIZh8rKzNAQviw0wLE1AOh0d6PLy1NE/ADgP0iZ5fT2clQRhGDgzGfU/LzdRFHhGPgBwzK/Tyw4VFNXy9vsXrv3OswwTjLae1ve8IJn7yB0BNV/kwc0hgZMjhRTawJUUEfpz2HizVASE5qYgcg86nsCupCmJrH+MXmHfjfUdYlt6W+bI0o5MZPKpT+uSPQTTG+fRLWDiQaFq69ovZekFURi71hyX0IC0xryaXd2dDtchIEHsARDA1ShCorJ0WGWgwHGY9ne2tM+PgK/7fZJEzDs3SZK9t5SvIHpAwpTCGYFTsgKtQee/Ekhy4ZDA5jE7UHHNclVG0pWDsukMVYAu4CLG+ZRITpiSvKzLMs/hVucUx655M1LNsYwDJ7ooAlJX65XjhoNcd71aqbcjWUvrS+WXLy9kh+HacCA204bgDANWs9sSITMMV6FtWZbNF5eTjgNm89VqoRtsZTLArQdIiVzH1WVZ1txg7o5zRtBUaWZMF6vFdLpYLB746gFWc2MGM/9MUSRjCnpgmj7MH2ZQg78B44r37B/0lLYAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1250,
            dps: 412.09,
            speed: 6,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 91,
            foreswing: 10,
            backswing: 81,
            tba: 0
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 5000,
            actualDps: 1648.36,
            magnification: "400%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
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
          enemyId: "353",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 4999,
            dps: 1785.36,
            speed: 24,
            range: 330,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 84,
            foreswing: 53,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 9998,
            actualDps: 3570.72,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "353",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 4999,
            dps: 1785.36,
            speed: 24,
            range: 330,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 84,
            foreswing: 53,
            backswing: 31,
            tba: 0
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 9998,
            actualDps: 3570.72,
            magnification: "200%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "351",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 5000,
            ap: 799,
            dps: 406.27,
            speed: 10,
            range: 125,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 59,
            foreswing: 21,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 500,
            actualAp: 79,
            actualDps: 40.63,
            magnification: "10%",
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
    }
  ]
} as const;

export default e2050Data;

