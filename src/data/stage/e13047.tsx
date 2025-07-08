// Stage 13047 Data
import type { StageData } from '../../app/stage/types';

export const e13047Data: StageData = {
  eventId: 13047,
  eventName: "人類ネコ化計画",
  typeId: 13,
  typeName: "真レジェンドストーリー",
  prefix: "NA",
  mapId: 47,
  specialRule: null,
  crownData: {
    crownCount: 4,
    magnifications: [100, 110, 120, 100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "偶像に宿る魂",
      baseHp: 1200000,
      width: 5500,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 110, 120, 100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "3",
          treasureName: "ニャンピュータ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "608",
          enemyName: "ちびわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgICAgIdHR00NDRTU1NlZWV1dXWMjIyhoaGzs7PGxsbX19fi4uLt7e34+Pj///9Al7TBAAAAIHRSTlMABxEfR11vk6Sxvs7r9IIx3f///////////////////6VVouAAAAPOSURBVFiFlVeLkqsgDN2qba1YNYLyUvj/v7wJbrs+oPWemd0pjjmGcPLg5+cbLnd2/frSB+QVQLVeP6r8f+zbDgCeb5OsqQFu/2F/fQIMAM1rSXRQnre/AfTaC+gutMofaD3gKjtr36C99V4DFLgq0HtuaNWet+eT937u4R5WIJ33FuDkqZD9jBbeD8DIfdzNQtd8N0ZcAcTsAxQ86/fK8XMExRO/aLWSUmlFsRfGaK2NMZw29N2+hjS64pt5OLAFfR9heH45B5IPCPTd2GmepwUWF/TfaIE+fJTznfQy+TTkNj12uKB9bz6YI8ZPWijpwNxnAjxKdknYB/l8Nl+UkYjj9Ve+X5DUc4b5+mX/AajneFXAAMoT9s4lEqLAAJ6wT2fU49wGkgT5E8ZT9qkY4BHGTkAPar10cpgSBBXwiD0l85pBktKiBIkdCEqN1XogqUQJWgAdIcAvbp6bHlTcAyziNkLgpFDbB87HdXCH/pUFRozaxjLK6UEM0noOVdHu86kB/rIRoRjx445GfMpxS+EF1h4IXu9pHirZQZau55PzBkYdShvLUgTezVbJ8ShLGaokt362Vu5T8h6VgVd8zWPVMOp3h9gW+HLtAf0ZhW+a0B+jELtGvSbwkxJ9yG25UdEaS8+ME1gRgkjdUCc9UL+zRlbelwN9/BGgXIHjXl3YKZdKaa0CNCH8Gnuo8yX4v56sCIyQ789OPNnjghovNLaUdKDxZAyuRhrcs2NN8LzFNoySKDYebIDqm/DYrZ3sAkynMs9fIsI6qGnL7MYSBVHsn08bBV2pDKnFxSgBRnFXJswyNK0J/Kx4igCPe1fq9WpyDASLVG2fJNjWA4xqvcoiLGTi5WqKYJfWWwLqRvQF6jbfPXALwXoLPxlbBrg5QYAFdPTzAoeYnd4EMQxkONBIHg+i5WFSeoHTP5xxbut69h7JYgTyk4zfgWxY3VXPmBLdrLA0SRwXFf1A4G858sOEkV1oNkiVjuPGYlN/eba5E8bIlJR3x/HC+cS8NcTGLLrfcGmWlKPCSacWIXDzJCE6MYcb0mvG5YhwcFyI4Q+CnkJqWG2SxWePxN2NhqRhwA/gVwHqB6Esy0fJwqOQscMo0jc3rG8DaRfFazZVow0pRx1RUwDT9y7s0I7qE/3fvIWbM4Z8H6ggpe8sRbgnoijFrmvkNWBbZqgV7ImpOfeS5eEcaiyPWHbL+xtN04Q7SINXCWzcRxFesvZ6u5cPxj5ddZC6rgN1c23zTRiK+2fDI57lbtrO2uLaoA8VY11Xx9F1jFUVK5tb0b5k8A+gTf75RoLiBAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 100,
            dps: 63.83,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 47,
            foreswing: 8,
            backswing: 24,
            tba: 20
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 500,
            actualDps: 319.15,
            magnification: "500%",
            count: "50",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            count: "10",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
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
            actualHp: 160000,
            actualAp: 10000,
            actualDps: 8333.2,
            magnification: "4000%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 240,
            actualAp: 600,
            actualDps: 999.99,
            magnification: "300%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "608",
          enemyName: "ちびわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgICAgIdHR00NDRTU1NlZWV1dXWMjIyhoaGzs7PGxsbX19fi4uLt7e34+Pj///9Al7TBAAAAIHRSTlMABxEfR11vk6Sxvs7r9IIx3f///////////////////6VVouAAAAPOSURBVFiFlVeLkqsgDN2qba1YNYLyUvj/v7wJbrs+oPWemd0pjjmGcPLg5+cbLnd2/frSB+QVQLVeP6r8f+zbDgCeb5OsqQFu/2F/fQIMAM1rSXRQnre/AfTaC+gutMofaD3gKjtr36C99V4DFLgq0HtuaNWet+eT937u4R5WIJ33FuDkqZD9jBbeD8DIfdzNQtd8N0ZcAcTsAxQ86/fK8XMExRO/aLWSUmlFsRfGaK2NMZw29N2+hjS64pt5OLAFfR9heH45B5IPCPTd2GmepwUWF/TfaIE+fJTznfQy+TTkNj12uKB9bz6YI8ZPWijpwNxnAjxKdknYB/l8Nl+UkYjj9Ve+X5DUc4b5+mX/AajneFXAAMoT9s4lEqLAAJ6wT2fU49wGkgT5E8ZT9qkY4BHGTkAPar10cpgSBBXwiD0l85pBktKiBIkdCEqN1XogqUQJWgAdIcAvbp6bHlTcAyziNkLgpFDbB87HdXCH/pUFRozaxjLK6UEM0noOVdHu86kB/rIRoRjx445GfMpxS+EF1h4IXu9pHirZQZau55PzBkYdShvLUgTezVbJ8ShLGaokt362Vu5T8h6VgVd8zWPVMOp3h9gW+HLtAf0ZhW+a0B+jELtGvSbwkxJ9yG25UdEaS8+ME1gRgkjdUCc9UL+zRlbelwN9/BGgXIHjXl3YKZdKaa0CNCH8Gnuo8yX4v56sCIyQ789OPNnjghovNLaUdKDxZAyuRhrcs2NN8LzFNoySKDYebIDqm/DYrZ3sAkynMs9fIsI6qGnL7MYSBVHsn08bBV2pDKnFxSgBRnFXJswyNK0J/Kx4igCPe1fq9WpyDASLVG2fJNjWA4xqvcoiLGTi5WqKYJfWWwLqRvQF6jbfPXALwXoLPxlbBrg5QYAFdPTzAoeYnd4EMQxkONBIHg+i5WFSeoHTP5xxbut69h7JYgTyk4zfgWxY3VXPmBLdrLA0SRwXFf1A4G858sOEkV1oNkiVjuPGYlN/eba5E8bIlJR3x/HC+cS8NcTGLLrfcGmWlKPCSacWIXDzJCE6MYcb0mvG5YhwcFyI4Q+CnkJqWG2SxWePxN2NhqRhwA/gVwHqB6Esy0fJwqOQscMo0jc3rG8DaRfFazZVow0pRx1RUwDT9y7s0I7qE/3fvIWbM4Z8H6ggpe8sRbgnoijFrmvkNWBbZqgV7ImpOfeS5eEcaiyPWHbL+xtN04Q7SINXCWzcRxFesvZ6u5cPxj5ddZC6rgN1c23zTRiK+2fDI57lbtrO2uLaoA8VY11Xx9F1jFUVK5tb0b5k8A+gTf75RoLiBAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 100,
            dps: 63.83,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 47,
            foreswing: 8,
            backswing: 24,
            tba: 20
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 500,
            actualDps: 319.15,
            magnification: "500%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "dodge-attack": {
                enabled: true
            }
          }
        },
        {
          enemyId: "450",
          enemyName: "土偶戦士ドグ丸",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 1000000,
            ap: 9000,
            dps: 3139.53,
            speed: 15,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3000,
            freq: 86,
            foreswing: 52,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 9000,
            actualDps: 3139.53,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 700,
                omni_range: [-500, 700]
            },
            "curse": {
                chance: 100,
                duration_f: 600,
                duration_s: 20.0
            }
          }
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 255000,
            actualAp: 20604,
            actualDps: 38632.5,
            magnification: "300%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "savage-blow": {
                chance: 100,
                power: 1.1
            }
          }
        },
        {
          enemyId: "450",
          enemyName: "土偶戦士ドグ丸",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 1000000,
            ap: 9000,
            dps: 3139.53,
            speed: 15,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3000,
            freq: 86,
            foreswing: 52,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 9000,
            actualDps: 3139.53,
            magnification: "100%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 700,
                omni_range: [-500, 700]
            },
            "curse": {
                chance: 100,
                duration_f: 600,
                duration_s: 20.0
            }
          }
        },
        {
          enemyId: "047",
          enemyName: "メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 80,
            ap: 200,
            dps: 333.33,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 240,
            actualAp: 600,
            actualDps: 999.99,
            magnification: "300%",
            count: "4",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 255000,
            actualAp: 20604,
            actualDps: 38632.5,
            magnification: "300%",
            count: "2",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "50.0-53.3s",
            delayFrames: "1,500-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "savage-blow": {
                chance: 100,
                power: 1.1
            }
          }
        },
        {
          enemyId: "387",
          enemyName: "ヒウマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAADAAADAQEIAwEKBAIOBQEKBwUOBwIRBgERBgEWCAIWCQIoAAAYCQEdCwEbDQQfCwEhCwAuEAEzEAA5EwFBFgFFFwE9HgM3JAdNHgNaHgBdIAFmIQBENAl2KgB5KQF7KQGBKwCDMgGUMQB0TQGkNwCtOgDBQADKRACTZAXTRgGxXAOkbALjTADvUAD4UwD+VQC6fwH/YAHLiAb8cgL/eQL7iALdmAH5ogL/pwH8vgP9zQX+5gT//AP//wHBq71CAAAAQHRSTlMABw7KLSFLFT5XuWSECXafk63s2jC90vkORsju3v6O6vT+3Mb9B/X//fPd/v6P/////0v//v8D/xz/Df////8Bcd5yRwAABHhJREFUWIWdV393ojoQFcpPQZBaoBUoxGZN2vQl4anrurbu9/9WbxJ19+3ZlZrO6R+eU+7lZubOTBiNPgrb/vCR4XCcz+Gs8w/XsYaeuwR3Q/8PKhN8kGbuJ3Dn8KO8zc8KLN9AgmWrh92kpjQ/K/Cj4P5qAtvzrJGd1Eyy+d2ZNJ76g6DfCJJx6Ds5lT1vk8nIghhNkvnD9QRxWSTJnPe9JEUYeFEUesHjy+P9l6/XEUziji6K+hkIBK7rBURdt+uXx4ev1zHcx1iI56XoITgTsl+J19f127p7/Pb9xGC5dwM5tZIOwFL/qVhtNoA/vK+f/v1+ZFAO8S7X1Yo6eG0vlASp8Nvt7v1wOOxf/zlJcLK2ywa6I6oggT3BhPEjgcYf3nYvIOGHKlPLWZVcJvAKBgS0LBuEWb/abt8U/v1tvz5KcOaslzi9TOBkGOSzEhGMEFttd5oAGEDCty+TSdTCv2l+CW47YVZSKTlCQnBCfhIc3vavjw8PUZxjyBGdXcKH46LuQIIkDZxEgILt/kyw7p6eFm2rBVYXCdJiySF7ApeIciGgiqcj7PcbzIXkdJAATBLNieylxGUDhRCr1UZXAfC7jSoLnIsPEYCIqbYhawhnXCgjrXeA3u22q5XyhlQ2GSKwkoWQ6gyIUAq/gAHMtN1uTnjt0CECMAKFJgAJJWaUMrlSFBvAa7BQAi5XQYWbVgTOKRhqGkS0HXv1drFsl0z315AP1BmcdFYS9TJK2KmllPjnPEnndad8OuhEPdDTlv+vI3WwOrJtN8oVNe/iIQIlIuv4b3DJ2lTNWNVKKgXeMAH0/LhjeqgcdQhapcf1FMxpL7r0wyFreVmNKQfrAV7QrohP682fdowUAwPl1ymirKgaBI0lSDmbBvZZW17NkqumvOV6SXqrfM1IN8si9/hWO8ySq3ee5Wad1PZ9bos0ODE4128ZmJAVNIR24HM9NEovhlNAU0lNAQymFw3Lt920YUIwMAUnpem+t5w49mJIgiSEEYSQkQLLCcK4aOdjZUmq2wq2rcFty45ndbvktNIjFkMipKR5YKAgbsGHXCBFIHQWpWhjAwnenEugQA0cQeq+gHWdG2TBTZdCEZSqjKotKEGlSRqtcK7mOmowFbzRgerQxEpwUesYa+C6IGE2Eco4X0QGeKVh1lUV/TmapFxERma2gmmaVmqKHoe5McFo4jtpBQ4S9Dhc5SI0wisNBWOwoWDPKwa+MDCSDnvaKQ9xuCooK1ITG+hwxw0DPIMyAAXrTHrhTAA9hNVYg26uTFrhRJCDlzjCXC22PPaMP30CuPJKNQooW2bBJwZa2DLBYUeXt9Wn8KOoRBgjthxHSTR0vb1M0BEC2a8iN8nz67fBrwgXaibQwotqjOvYYB+c4i5nAi46VZwuMaFz4yqO/HRJwAmkyNqyYa1ZM6uAhi4xDKQun90iuGEYE4z8ZNzCbmPLDlFIhTnByA6yCsFk45y1Bp9uZ7Truk44vsWYQDlzzze0shXE2fjm5mZ2q+MmTf7+Ef4f3iDEz+RFBwMAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 248000,
            ap: 54000,
            dps: 5294.12,
            speed: 6,
            range: 800,
            rangeType: "範囲",
            kbLevel: 4,
            money: 900,
            freq: 306,
            foreswing: 39,
            backswing: 27,
            tba: 134
          },
          stageStats: {
            actualHp: 496000,
            actualAp: 108000,
            actualDps: 10588.24,
            magnification: "200%",
            count: "2",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 1200,
                ld_range: [1200, 1500]
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "名誉一つに賭す命",
      baseHp: 1200000,
      width: 4700,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 110, 120, 100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "0",
          treasureName: "スピードアップ",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMKAAAEBAQFBQUHBwccAAALCwsMDAwPDw87AAASEhIXFxdUAAAbGxsfHx9nAAAiIiIlJSWAAAEoKChoEBArKyuTAAAuLi4xMTGmAAA0NDQ3NzdKNDM7OzvQAACZHR2sHBz4AADlDAz////fzfTUAAAAQHRSTlMACA4VHSQuOUNRXGZweIKOmaSq/7K6wMrR2N7w5///+f////H///////////////////////////////////8ALrmR+gAABSJJREFUWIWdl4t24ygMQPN+t3FC3kkJJRQKC2VZXDyZmZ3+/18tttPGxs5Mu5zTNMHWRRKSEI23t7fGn0Z/Me7Uzb+lwp8BdI54Px91mu3m/wQ0IpoYut/td+tp/8uA9jhaboE6G2etkRTMu18EjABVxuizoJQy5Zw8jL5owpSeORdKgXRAnmh49yVAd6MNAtcBtUOTLwDaW6NBeQh37H8a0F5rFcgDZNTq04CIGxwCAIpR7zMA/9KIu6o8AIbdfQLQ3o/a+5jWyAOuN58AjPBhzWoM8IPZfef3gO6801hqDWJSJw+oQ/3fA3pgd7ePna3swMWLDg//AKCWUIOTegW8F0V0E9BfjlqNLj4nZ4ECB8D808+yeN+7BegheoimKKYKBcteeFAwBBBYt24AmjtnNaUxrOhNpCd4KuMZaXjLBzMVG5fUABT38oQSrTjxSoxv+WCjLIAo1N+rHjNufvz6llhlf/7iYFAL6M2JSc610QOV1uefv7752IR//8D1GjSjHWKJqqp/GcxwzP1T7CnrWg1aEYn5LfFsmLPGAFuBjt0aQG9Dk4TfCp90YMwSB5n1q4xrAJMtIC4pZyAiBL+7FBMOICEApVrOagCDDXPy6gEMqPDFXGnrVc5gOnuYh9S6AmjfH7UrLk+9IElFIDaZXiKThFSk/3YhYLzjSSn/fUY9XDfgTHxRz42iKnXTvgzoLJhzrGw9AE9XgrDZjP+jXNIqYIWUq8Tvw8v1O0xyPLGJjh2pmNAdAyvDTXt8TSkXLbSAXgMVM6YYcxwsCoCOLzBRqmMI+P788vJ8AXjFCVA2jxIW40kBMAGDQbX+PICXf//95/HdDVRTo2IPipOYYFqKxEgd96ZiQCr/fP2FNXIJ9ttheOyPy6iYC8vESVfJ4KfXx+9/XX8SAyC8RBEE+3YRsLLyLMrSEOMnr8NrQYP4+pXCUakmzizGwRbC7FB+fL0GApAXIxnnx3GjABjMlppVDMiC8uH5qaCCI15WGonX2fn+AegxIapFQGQ2PRQAgBrCKYEIR40SoLlNkrhSxvwhHk5hTXPrTp0SoHHPNauWMWkqU8Tmmsj7IqA1XPPaOmp0SMU6MxWbQ6sAmCFzTkRNIUXG8WA6VwFLOigAOuPlSSS1pZzHYYdis5Rkclryge8FgjDC73I6aFF4FgvIrkqAHj8Hu4B0nvxY0PIDbDOj7KldBNwJboOVsM0FeaDaxQbNBkVAtFlJFrxI8+Si4V6mR6z3YtqnXQHtZp/FwYsgry/QBuHEVa5YVG4wWgcXNnTYZXuuQidkSUbFPOhQJtyFkeC1RwizoFXOs5TKWdjiLFWorPejsSLcSGhgBpiGgPZCBnGXXhGgj4hysUdZmnM+qTRZzelJ+5Ps402WZ6NEzBbVojKd1mRY06VF/sxRgqYLYiDS0EJQyu1OFZMqswgFgZT3Fgus83qZLq/9IY19HRWr1sinxEeukSwuGK9pNCOWBR/ChAgtKUL+DJWn+2b/wDTXl4qFs5AnBveqgG0epNCfGb7AYsYIPUX+jreSlkGeByTN2n8ck7r7wuJal0m2HYitu+m1IYZIm9S5SMYE+TM+pvNGDaA1WR4+diC7qFF9GvqCaZBIdSPCqZRtFZ426wDpTg7n+5yQrQiE3PZ6EVEEUW5j354wqflx9X79LQGao+l8tV5vylGXG4WFUSxvbtKP7Wo1nw6bIaA/mtxPo9l8sVyloM12u919DP9js1mvV6vlYhZF0/vJqH8B/AcN7X7oOyh/ZgAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 321234,
            actualAp: 11234,
            actualDps: 21063.75,
            magnification: "100%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "496",
          enemyName: "フェンリルとウルス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQEDAwMDAwMDAwMHBwcJCQkKCgoPDw4PEQwSExAjJyAgKxMzNy4xPyY5OTlDQ0NAUjNTUlNMYjteb0t1dXV2dnaAgICHh4eXl5empqa5ubnPz8/k4+Ty8vL///////8RkX8fAAAAIHRSTlMAG8P+UXQ25QCcwf7e/nMA/57+/gD/y/77/f3+//8A/0ttxTcAAARuSURBVFiF7ZXrdtsqEIWFBEgIUBEUcVV5/7fsRo7r1MlJ056/IV7LjgQfw549w/Djf47hC/AF+AJ8Ab4AD8AHg/O3zxb8vR4fAha1v/PwE4Bfc3jIO7l+kb+K4NWUtWTaSfTvInj1xVJlw7Bt/xIB3zY+0DkVMRwPMT4fgXDBeXxM8cId/xLBwGcTMGI28Xi8/CyAbNsek3fe+2CjYox8GsDJNWcLydsQQ9DaOavuifwjYGFS01scZPYAWGOd0Xy42ZIL8gfAoLDjiG3YHnIK0UurJ2nWG5UoO34AuODMSWtpF2EX0mFzLbU2WlwzhPsQQCl25tZJp27AcZ4mcwHkLQDtzLr8N2AZ6bCQ2Wnp1oFQyonQsa/X7oqAKMQjlmF52OFJAyYh8qKcNk7O2E2lXLwDQY59BfPWSLK8jGcAIZxQ3bXuBJxDeqf2XEwx2oSdroKuzup+guVhtl8AMjDGuDDXUSk2ck6uYuC1Gq8YPXL0xuBj2Hs+QJIFlVopa65sL8Lh2JaRmM5iJtafrRaPzMuEJwAbR4kdrUWE5IoGakvt1Fiqdns38UIJn7W15j0ANz6VkiwA5so2FcNoLQxspI8x9dwO206gizGavAUcZymt1YgQVjIs27GnddQ9YhgCaYA2ZODJGgdXi+UZQERpuQKA9bKflqeSG9JgJFZo5YA+mBhjlbZrODwDqKv1bK1FvJ37AcUYSm1OBjP1mHt0reQaW5hwAvoGIFLro4yM9ZfLoNCEdGsGXpI9aJ2vCfUsFsjnRv9jYH2HWvM9tu2ED2VsdoIE2lspcyvn2WqqpzfZijcixnbWXMq9zsMpkS6bzAQnoJS18S2XWpGOlGs26qbiwtkdwHKf0HZxe0J7wWBziSpCJ5hAKBkrQ2mlZC1ffCDkLwBXrUHF4mN/R0Yt4Tfjar4agTfB+9JqTxTOofi3798Qg7gfpftgUeVSqdUdCGY7QCfktdcx1Olvz9xqqaXs/Pt3rF/dvUdeVibbTeieruQ5l8ZMEZtmKWXAd4NT/Omh5pnS3tu9M/d0XoDl28D3I8Z4tn6ZCizLZ4uiRWlllzCVM6YgdWjZrUIZh37zBLgCYRtFYHsOlzX24agajrZnvOLHubqTrMN4VMRrwK1J0NolhTMZ2vqlRvWhtVRCP5m5ddlHSf4GuMKAehA8Kz4IjwAMjOgj1ClJwqKA6G7nhdJ3AIT09S2Jw96q6sQCmc+QOhWdrVfY5Fu/63eHG+wZwNyOjLdGX/AG9RN6CpDnWpqHq+QkccRjFzmv7lUEL0WekO/u++Iumx3IXsGTnRztLGdxE3Jhu8JnRX0kNjy1dSIgN17WmvhdDvCyJscJQsu6i7HGXprd/t1MvwMU4seukBmdgdBWUg3BGDnTrXhE5tje+rFO2ASXtpTz88VCRS2ytwE4RfVsZqhocFVSipuymzCmiXKYO/X+5I24A3CP4V5gQqhZXlU8j6MJKTt4B50K/z2GECY7PSnUmhR3R3B0vXGecZd+elxURn8Cvr4EeOPQ3WoAAAAASUVORK5CYII=",
          traits: ["古"],
          baseStats: {
            hp: 750000,
            ap: 35000,
            dps: 6730.77,
            speed: 4,
            range: 300,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1400,
            freq: 156,
            foreswing: 69,
            backswing: 25,
            tba: 44
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 35000,
            actualDps: 6730.77,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 500,
                omni_range: [-500, 500]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 10,
                duration_s: 0.33
            },
            "curse": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "477",
          enemyName: "フグ太くん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgIDAwMDAwMEBQUNDgsYHxkaHxUiKRwpMh8VPSQxPSY6SypCQkEjWTRCUy9MTEtIWjMscD9YWFhQZThWazpZbz1jY2Nccj9ed0MtjlFvb3BahUl8fHxNnlqJiYlHuGmVlZVG0nihoKGvr7BK64e9vb7IyMjZ2dnl5eXt7e309PT6+vr///////9vm+hTAAAAQHRSTlMAChUfJi8/TFdha3eEkJqx/6S+5PDS/vP////+/////v///////////////////////////////////////wD/wwU9/wAABa9JREFUWIXtVml3qjoUbW2dhzpgBAwUo4BJkZkKCi///1+9E5RWsLe9d71vb93zodW1PDtn2HsnD//8x3j4C/AX4H8C8E20J8vFfPDYHQ9anV77u19+HT1piqZTvJA1eaFiNHv8w/ynlS8jebdRGMUmY0dn8ocAAz9P9rs9sphmMjPmxap1Rf69/Me5IiOkIJWZGrXYueC7+bj39NCZrzq/kd4aLmXVsChTDUZMaoac853u69JcP6eDn/P7C4XYjFKbKoQZAHAEgDjlPHMUJxn9lP70ggyRbdv0AmBZGa8ihX38kN9ZqDYTAQUwrB1ghvQTgBfuovttflfSGLM0VdUsQDBlLCuGcuQ3EaPed/lTjVFDnkLIBgMETdadMC9uEY7o1zW0JWif6CJ/utuY1Gbaht9FLA0Hve7zF/mtJWa2pSclwDGBL1RziuLz/CJP/Y3D3elmt1t9QamJDH2TPY91vEu4q1FKjd35pv5iv4lTzLm+43xzL7AugokTVc3LHyeKbQOR97fFF8mRxw4QAoXH5Z28Hpcas7BGND1M03iHCHAB63EN4HTOsFiqq+r3lO4imxqEUlgiklWiQQdEbw7wtA8LMQv5C3XONZggnEpsAxQMG7SoueFFAyG77NS9B2gjQR3o27IwER9BTWRzbgAU58uEMqnVBBgpzLJKBRhYoNglEzP+i9D7TYClQUwBYFMVBmFesFT9Vge3AH5TVE+SZphlvqnC/kswysgmK0sufCc81yq4W2MXEUuMEDowYBOQL/6q5RaLPIvTUK21c0YNJg4Uu2ygHJ4YJYXzkXo5tihynik1gEJpSGqkwuBEqi1WQWGhBiZpUm0hDfW0MUVpXKtholp2OQMRlq1hakwdnlcFJ2HOGwCOu7p1hhcFbEwUIUpgGjaoaeAmi+oARba4AZipQL5rvs2wGASVk+8A3OPm1mDHmBFNQEAdzFChG++AnW8A8GpW09NQZRopvZjZmvJ2sO3ocK+lz7jbQl+x1MsAVeXVCzwPlGXh2uTO53OWV3Q6NcXQRgSXAObUCwIA8OiW4hr70uTk+tVck+Ul77Ha5eMCa0JBponXwXsUeJG3PeDTbdH7FC7cCqDS82T8sUcZA/uoZkIJ7+9BEEXb6PUWgPsuT9zqi3rhQHu6qDTRR1goGLxEQ1vPgyq2Ub2FXE/TCiBdXEYw3r5WsmzBnQYswKbNiIyU9dsWySWTig8dZ/rVIgu+v1Y+9yL0ch3DWDZNMERTKNI2FWWfnIUSwMI+bClzc6Es2AG63ivLdRCtF8PWZQ9gZQBgXdzkOsDUPxXHug4Az6nqXgZvb9GbvBiKScyQIfywlATQwS8HEDsZD2uzBHN3pepie/Heo+g9MOVlR5gSMAHsRMjalP2yAR67PN7dOsEJKkpXFcBw7UWRFxyoIQFCH6ZgggwpuLISXn4fh7Fes+ZTlp0LZ3gFeF5t3wJ2iA6MLEtNW6ZhmaZlUBvHZVqqbGq7LI4uNJR+WOpkitavZhRYBPU64wVSTUIsQglh9sWCihsjKhGLjexm2Qd9elugbSCuAFVRsUEUhUAJws+wXzT9JBfb8KU+HLSopNRabYN37+BZTBgpUAArQGZMXGd/us0/n7jonefOAq711vOnFJfe2/bAGMbwnqNi/+ClSnpMGscDF7J9Bq+0efNdMVuuD+yA5zNVM4jYv2Vg2cnPaTX6y78sz4td7ErDh2YMXt+9yAZijGWoHc5XlSRLNvElNQNfLxFCn3NnOvvi2T96DaJt+e6Cd7CG/fQoWJOCbGBb+fGUlSUUqezy3Zevs9HaexVvx8fWU2csIdUNj6c8P2X7KcJ7N8x1P/QdXYFXl47Gw0G/23mue9l8LY1bD63JUpp+hKwoqPyA8GbaDGk+vL1W28tRSevWc7vT6w9H4/FkMpu9QMw/4mU2mYxHo2G/1+20n2rn/wt76VH5PhglNAAAAABJRU5ErkJggg==",
          traits: ["古"],
          baseStats: {
            hp: 400000,
            ap: 30000,
            dps: 2990.03,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 400,
            money: 900,
            freq: 301,
            foreswing: 4,
            backswing: 297,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 30000,
            actualDps: 2990.03,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        },
        {
          enemyId: "355",
          enemyName: "ケロ助",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 360000,
            ap: 3789,
            dps: 762.89,
            speed: 3,
            range: 900,
            rangeType: "範囲",
            kbLevel: 4,
            money: 800,
            freq: 149,
            foreswing: 20,
            backswing: 21,
            tba: 65
          },
          stageStats: {
            actualHp: 540000,
            actualAp: 5683,
            actualDps: 1144.34,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 1100,
                ld_range: [1100, 1400]
            },
            "slow": {
                chance: 100,
                duration_f: 1800,
                duration_s: 60.0
            }
          }
        },
        {
          enemyId: "420",
          enemyName: "ダテメガネル",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 360000,
            ap: 6000,
            dps: 1200.0,
            speed: 9,
            range: 449,
            rangeType: "範囲",
            kbLevel: 6,
            money: 750,
            freq: 150,
            foreswing: 11,
            backswing: 9,
            tba: 70
          },
          stageStats: {
            actualHp: 540000,
            actualAp: 9000,
            actualDps: 1800.0,
            magnification: "150%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "43.3-43.3s",
            delayFrames: "1,300-1,300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 500,
                ld_range: [500, 800]
            },
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQECAgIDAwMKAAAEBAQFBQUHBwccAAALCwsMDAwPDw87AAASEhIXFxdUAAAbGxsfHx9nAAAiIiIlJSWAAAEoKChoEBArKyuTAAAuLi4xMTGmAAA0NDQ3NzdKNDM7OzvQAACZHR2sHBz4AADlDAz////fzfTUAAAAQHRSTlMACA4VHSQuOUNRXGZweIKOmaSq/7K6wMrR2N7w5///+f////H///////////////////////////////////8ALrmR+gAABSJJREFUWIWdl4t24ygMQPN+t3FC3kkJJRQKC2VZXDyZmZ3+/18tttPGxs5Mu5zTNMHWRRKSEI23t7fGn0Z/Me7Uzb+lwp8BdI54Px91mu3m/wQ0IpoYut/td+tp/8uA9jhaboE6G2etkRTMu18EjABVxuizoJQy5Zw8jL5owpSeORdKgXRAnmh49yVAd6MNAtcBtUOTLwDaW6NBeQh37H8a0F5rFcgDZNTq04CIGxwCAIpR7zMA/9KIu6o8AIbdfQLQ3o/a+5jWyAOuN58AjPBhzWoM8IPZfef3gO6801hqDWJSJw+oQ/3fA3pgd7ePna3swMWLDg//AKCWUIOTegW8F0V0E9BfjlqNLj4nZ4ECB8D808+yeN+7BegheoimKKYKBcteeFAwBBBYt24AmjtnNaUxrOhNpCd4KuMZaXjLBzMVG5fUABT38oQSrTjxSoxv+WCjLIAo1N+rHjNufvz6llhlf/7iYFAL6M2JSc610QOV1uefv7752IR//8D1GjSjHWKJqqp/GcxwzP1T7CnrWg1aEYn5LfFsmLPGAFuBjt0aQG9Dk4TfCp90YMwSB5n1q4xrAJMtIC4pZyAiBL+7FBMOICEApVrOagCDDXPy6gEMqPDFXGnrVc5gOnuYh9S6AmjfH7UrLk+9IElFIDaZXiKThFSk/3YhYLzjSSn/fUY9XDfgTHxRz42iKnXTvgzoLJhzrGw9AE9XgrDZjP+jXNIqYIWUq8Tvw8v1O0xyPLGJjh2pmNAdAyvDTXt8TSkXLbSAXgMVM6YYcxwsCoCOLzBRqmMI+P788vJ8AXjFCVA2jxIW40kBMAGDQbX+PICXf//95/HdDVRTo2IPipOYYFqKxEgd96ZiQCr/fP2FNXIJ9ttheOyPy6iYC8vESVfJ4KfXx+9/XX8SAyC8RBEE+3YRsLLyLMrSEOMnr8NrQYP4+pXCUakmzizGwRbC7FB+fL0GApAXIxnnx3GjABjMlppVDMiC8uH5qaCCI15WGonX2fn+AegxIapFQGQ2PRQAgBrCKYEIR40SoLlNkrhSxvwhHk5hTXPrTp0SoHHPNauWMWkqU8Tmmsj7IqA1XPPaOmp0SMU6MxWbQ6sAmCFzTkRNIUXG8WA6VwFLOigAOuPlSSS1pZzHYYdis5Rkclryge8FgjDC73I6aFF4FgvIrkqAHj8Hu4B0nvxY0PIDbDOj7KldBNwJboOVsM0FeaDaxQbNBkVAtFlJFrxI8+Si4V6mR6z3YtqnXQHtZp/FwYsgry/QBuHEVa5YVG4wWgcXNnTYZXuuQidkSUbFPOhQJtyFkeC1RwizoFXOs5TKWdjiLFWorPejsSLcSGhgBpiGgPZCBnGXXhGgj4hysUdZmnM+qTRZzelJ+5Ps402WZ6NEzBbVojKd1mRY06VF/sxRgqYLYiDS0EJQyu1OFZMqswgFgZT3Fgus83qZLq/9IY19HRWr1sinxEeukSwuGK9pNCOWBR/ChAgtKUL+DJWn+2b/wDTXl4qFs5AnBveqgG0epNCfGb7AYsYIPUX+jreSlkGeByTN2n8ck7r7wuJal0m2HYitu+m1IYZIm9S5SMYE+TM+pvNGDaA1WR4+diC7qFF9GvqCaZBIdSPCqZRtFZ426wDpTg7n+5yQrQiE3PZ6EVEEUW5j354wqflx9X79LQGao+l8tV5vylGXG4WFUSxvbtKP7Wo1nw6bIaA/mtxPo9l8sVyloM12u919DP9js1mvV6vlYhZF0/vJqH8B/AcN7X7oOyh/ZgAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 321234,
            actualAp: 11234,
            actualDps: 21063.75,
            magnification: "100%",
            count: "4",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "477",
          enemyName: "フグ太くん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgIDAwMDAwMEBQUNDgsYHxkaHxUiKRwpMh8VPSQxPSY6SypCQkEjWTRCUy9MTEtIWjMscD9YWFhQZThWazpZbz1jY2Nccj9ed0MtjlFvb3BahUl8fHxNnlqJiYlHuGmVlZVG0nihoKGvr7BK64e9vb7IyMjZ2dnl5eXt7e309PT6+vr///////9vm+hTAAAAQHRSTlMAChUfJi8/TFdha3eEkJqx/6S+5PDS/vP////+/////v///////////////////////////////////////wD/wwU9/wAABa9JREFUWIXtVml3qjoUbW2dhzpgBAwUo4BJkZkKCi///1+9E5RWsLe9d71vb93zodW1PDtn2HsnD//8x3j4C/AX4H8C8E20J8vFfPDYHQ9anV77u19+HT1piqZTvJA1eaFiNHv8w/ynlS8jebdRGMUmY0dn8ocAAz9P9rs9sphmMjPmxap1Rf69/Me5IiOkIJWZGrXYueC7+bj39NCZrzq/kd4aLmXVsChTDUZMaoac853u69JcP6eDn/P7C4XYjFKbKoQZAHAEgDjlPHMUJxn9lP70ggyRbdv0AmBZGa8ihX38kN9ZqDYTAQUwrB1ghvQTgBfuovttflfSGLM0VdUsQDBlLCuGcuQ3EaPed/lTjVFDnkLIBgMETdadMC9uEY7o1zW0JWif6CJ/utuY1Gbaht9FLA0Hve7zF/mtJWa2pSclwDGBL1RziuLz/CJP/Y3D3elmt1t9QamJDH2TPY91vEu4q1FKjd35pv5iv4lTzLm+43xzL7AugokTVc3LHyeKbQOR97fFF8mRxw4QAoXH5Z28Hpcas7BGND1M03iHCHAB63EN4HTOsFiqq+r3lO4imxqEUlgiklWiQQdEbw7wtA8LMQv5C3XONZggnEpsAxQMG7SoueFFAyG77NS9B2gjQR3o27IwER9BTWRzbgAU58uEMqnVBBgpzLJKBRhYoNglEzP+i9D7TYClQUwBYFMVBmFesFT9Vge3AH5TVE+SZphlvqnC/kswysgmK0sufCc81yq4W2MXEUuMEDowYBOQL/6q5RaLPIvTUK21c0YNJg4Uu2ygHJ4YJYXzkXo5tihynik1gEJpSGqkwuBEqi1WQWGhBiZpUm0hDfW0MUVpXKtholp2OQMRlq1hakwdnlcFJ2HOGwCOu7p1hhcFbEwUIUpgGjaoaeAmi+oARba4AZipQL5rvs2wGASVk+8A3OPm1mDHmBFNQEAdzFChG++AnW8A8GpW09NQZRopvZjZmvJ2sO3ocK+lz7jbQl+x1MsAVeXVCzwPlGXh2uTO53OWV3Q6NcXQRgSXAObUCwIA8OiW4hr70uTk+tVck+Ul77Ha5eMCa0JBponXwXsUeJG3PeDTbdH7FC7cCqDS82T8sUcZA/uoZkIJ7+9BEEXb6PUWgPsuT9zqi3rhQHu6qDTRR1goGLxEQ1vPgyq2Ub2FXE/TCiBdXEYw3r5WsmzBnQYswKbNiIyU9dsWySWTig8dZ/rVIgu+v1Y+9yL0ch3DWDZNMERTKNI2FWWfnIUSwMI+bClzc6Es2AG63ivLdRCtF8PWZQ9gZQBgXdzkOsDUPxXHug4Az6nqXgZvb9GbvBiKScyQIfywlATQwS8HEDsZD2uzBHN3pepie/Heo+g9MOVlR5gSMAHsRMjalP2yAR67PN7dOsEJKkpXFcBw7UWRFxyoIQFCH6ZgggwpuLISXn4fh7Fes+ZTlp0LZ3gFeF5t3wJ2iA6MLEtNW6ZhmaZlUBvHZVqqbGq7LI4uNJR+WOpkitavZhRYBPU64wVSTUIsQglh9sWCihsjKhGLjexm2Qd9elugbSCuAFVRsUEUhUAJws+wXzT9JBfb8KU+HLSopNRabYN37+BZTBgpUAArQGZMXGd/us0/n7jonefOAq711vOnFJfe2/bAGMbwnqNi/+ClSnpMGscDF7J9Bq+0efNdMVuuD+yA5zNVM4jYv2Vg2cnPaTX6y78sz4td7ErDh2YMXt+9yAZijGWoHc5XlSRLNvElNQNfLxFCn3NnOvvi2T96DaJt+e6Cd7CG/fQoWJOCbGBb+fGUlSUUqezy3Zevs9HaexVvx8fWU2csIdUNj6c8P2X7KcJ7N8x1P/QdXYFXl47Gw0G/23mue9l8LY1bD63JUpp+hKwoqPyA8GbaDGk+vL1W28tRSevWc7vT6w9H4/FkMpu9QMw/4mU2mYxHo2G/1+20n2rn/wt76VH5PhglNAAAAABJRU5ErkJggg==",
          traits: ["古"],
          baseStats: {
            hp: 400000,
            ap: 30000,
            dps: 2990.03,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 400,
            money: 900,
            freq: 301,
            foreswing: 4,
            backswing: 297,
            tba: 0
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 30000,
            actualDps: 2990.03,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-350, 350]
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "虚栄の冠を賜りし者",
      baseHp: 1200000,
      width: 5200,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 110, 120, 100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "2",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "12.0-15.3s",
            delayFrames: "360-460f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "412",
          enemyName: "イングリッス",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 50000,
            ap: 12500,
            dps: 28846.15,
            speed: 40,
            range: 110,
            rangeType: "単体",
            kbLevel: 5,
            money: 50,
            freq: 13,
            foreswing: 6,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 18750,
            actualDps: 43269.22,
            magnification: "150%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
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
            actualHp: 90000,
            actualAp: 50000,
            actualDps: 36585.4,
            magnification: "1000%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "551",
          enemyName: "古神炎ドロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAADsAAABACAMAAACTHv+DAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgEEBAQFBQQXAgEICwQHDAcCDwgMCggPDAsBFgcODwsBFwwREREUEA4RFQ8VFAwSFg0EHhACIRAZFhQWGQ8SHA4VHQ0iGwwCKxEcHRYEKxQCLBYbIRMgHxoeIxQBNRQfJRcWKR8BNhkcKhQMMhsuJQ4COhsjKRgBPRMXMhInJignJiYwIC0JORwnLBslLhkBQh8CQiACQyAnMRwrLSYvLhgDRiAUPR8BRyMpNB4BSCECSSMESCIvMScCSiQCSiUESiQrNx4wMTIGSic6NBYDTigOSiQxOSACUSgFUCQyPB82ODICVSk3Nzc5OyAyPyMCWCsjSCoBWiwEWiwZUCw2QyUPVis+QSIIWy8OWTJBPkA4RyxAPz8BYzAkUi86SSlDRyQ+TCs0Ui9CTSgHaTZHR0clXTVIR0hBUC0TZzdJTyknXzw2WTREUy9SSENMUyxGVzIVbj05XDwUcD0wZDZAWj8dbTsab0BUTlFJWjE+YDMhbkFUWS5MXTRUU1QLfUFJYyYfdEJOXzZYVFY9Z0BXXTNPYjZaWlomekZSZjg7cEomfEgigElVaTpeXl4ahktXbDpgaDkzfkxYbz5lY2NTb15dcUBMekZlcTwqjVI6hVEpjlRfdkFra2JieUMykFpUgUppeUJlfUVGilkumVtxdGtogEg7l10woV1vhUtOkmZakVRCnWg5o2Jph3NyikyAe389pmV/jUs7q2qFgYBQoXMvtmh4llKGiohDsmyAnFdRs3kzxm+KlIxHu3WYk5hVvHpEx3aNp1xWwYBLyIA803agmKBbyYFpw5NE3Hyko6RU1IZjz4ld2YtE6oho2JCxr7Jt3pi1tLdg5ph82qVu5pu7uL945aBx65++vr567qTHxch/8qrMyc2L8bCC/bGO/LjU09WY/sGf/sje2t2q/tzj4eW9//Ht6u7///9mmyO1AAABAHRSTlMACQ4YM1jkICdFUIqZvMrY7/99O2CmcWmwjv9SAJbDiI8AhG+o/5jrAOLwtf//a8mWANecrP//8RPE1f8A/yX/0/l8re3/RXYA06z/Wf8X/zMoi+0ACLf//5r/e/7/AEL02193//8A/w67///g/3T///GrAP///////z3V/5z//f/R///////N/3X/6f+c5///7f//uS//////////zv///8Dl/+6b///////u////tv///////P///////v/+///////k///+/v/X/////////////////+n//////f//////////////////////////////////////////////N7PctAAACltJREFUSImdl31cFHUawIc35UWkBXkJ1wwFI11TfOEy2FNPt7QN15JaM2bNOwaKkZR0WLi4iWNiQjPHmDudhY2hpoYdbiFcV1lgCbJgO0iRBDoQFCFEA5cFZHmxsAFMWaqPfe75Z2dmf995XvZ5WwB4oDgvtr0XBsdETsqDUeGjoJ3tk5AYxR9knRF2/ky9f5RdoDeu/n/1LtJXJdgY/UB/59+z04k0Mi427IP0LhHbTx0EHGG9wcboB/krXGNYM/EZEAA4yHTGPTZfTtcrXLOEf7+tBOpJHyEgjDkQDKziWNL1d/Wu4xI8p4dDKARcyQuoI38qJsRLiSHGJcK7HszUC7ghRh3sdo8OCBYG2O24cGGrXbDir0865R2LLeaNDoncskV4V++0OLvICK5KD81xuMvGHDjw2mNgRZU3sOXd3c6pBQdTDroIYxSKmCnWNs7zZBSlr9LL58yegsNDgvfui61inIJPH7KLPpOS9Pmm4NciIxU8a+8MzIizi5gkKf05g9xv9l2H3zdFIRU7XOo+AzYXnlxf0vL0M88pJthlS4FwhW1uOO+gGZbTV1XI3R3528iQZzo0a4nCx00m76WJUevTzB898/a2mGBgPhs/766793/fRedPHdcycNrXRpm7F6AQLuzsiItIhc82YyQIFsqbO5+o+2hLMPBsnvrE8zNZYHVjGcKhaw+qvzaI3Vc+vbBtQCMj4ovMXCpMw2FpppX/PLs7xDH+cMunkYqZLPBo60VYTRzeF8ecU0s+2NtsMSUlr6/vOYaIIAiUJqPS8k+FDx++2jQ/IFyhmJmTC1pbkePZBZoIUpeoKW2ztMVF5dRz6TKtgZSLofTkts9cQ+usR5x/Cdb0bALcLraix7IzdRRva2eHpa2pzqwJ04oJmuRImSy+6CSiMZuj7IUx27fNYAMUf45q7E9B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",
          traits: ["古"],
          baseStats: {
            hp: 2222222,
            ap: 22222,
            dps: 5050.45,
            speed: 20,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2222,
            freq: 132,
            foreswing: 76,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 2222222,
            actualAp: 22222,
            actualDps: 5050.45,
            magnification: "100%",
            count: "1",
            spawnTime: "28.0s",
            spawnTimeFrames: "840f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-1000, 600]
            },
            "weaken": {
                chance: 100,
                power: 1200,
                duration_f: 1,
                duration_s: 0.03
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 500,
                distance_end: 1000,
                level: 8
            }
          }
        },
        {
          enemyId: "119",
          enemyName: "マンボーグ鈴木",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBgYICAgJCQkKCgoMDAwTExMeHh4iIiImJiYnJycoKCgzMzM0NDRGRkZISEhNTU1SUlJcW1t3d3d8fHyGhoabm5ucnJzIqguioqLWtx+xsbG2trblwxvlwyDixCbjxh7oxifjyDjxwi/BwcHrzTbbz2vez2fJycns1Erv2lnU1NTy3l/e3t716YH//wH364z07JXo6Ojv7+//+sb29vb7+/r///86574sAAAAQHRSTlMABwxIpbnI2OswPhMehCdCV2elGzx9X5jltYCz0ejL6wX/Ef7tQyMXUGF/Bv4f4cX9Onr+n//fAbj6////////5XCcigAAAmZJREFUWIXtltly2jAUhm2apV5IgADGi1giFydEbQWq2kaKpPd/q8imrKEzknzTi/5X4Jnz+Sw6v+x5lxSH0cXnxhpPBnetAMMSpa0Id4ChpE0VDwUVs14LQFRwRdMWKXRSKFQ5bANgSrHssVo2qh7nv2wBWMi3b6vnpy9aT8+rzXpuBfB1BvLtdbVeVlrL9ebn78oaoMTr9x87bdYvVgBdAlWK6yZ81aqql7lVuAbkXColc98ybq9oquMZzZ1PQlxwKSma5f3ALQm/B3QPdBcQSEInRJQz1UjQWeKwl35G1E6SFD3rJOJCqIP4bNSxTKAPsDwiyNLSHEKgh6COCdiOMMLqXDizqWIEqZBnhHJsHt9JIPkDkIoT2vwURWwMCMDh9RxBvG0o6hsD4oLte4jRZEGaQ8XS0BxA9i3ABJLtPw6AKeC+rKtnlFChS0C4WQspSGkDkGiBKeF14O5Qiql5CZQLsCBCHc+SC+MMOinS9wqEdQJ7CZBnpoCokEpKRhA7AqBBZLyTfnLy7kZsEpiGa91v/eikAKurthnDyTaWfStPuSsYP/WDkZ0naU89NhRR2jpSM4dD/6Zja0/0MyS326wEzl2+E8JJY8uSk+nY5XqKUgwFIxCk4weHcP2RVUohKUxD2+btAdN6Cixxvp39tG4BTVzjPT+vTQCbu+AHZfU2wRafmhmhSgKbBTxTHzDFU9cZaPWgbsHIPV4vtGxVgTecEex+CmoAYEWbBLwhhpYe8iGDgfllfElBt12857fK/7/+CfmdKI6DMPxUKwyDOI7sNjvsXl3f3H7e6fbm+qr7t814B6c1kYwVXmyVAAAAAElFTkSuQmCC",
          traits: ["天"],
          baseStats: {
            hp: 1200000,
            ap: 9260,
            dps: 1076.74,
            speed: 3,
            range: 840,
            rangeType: "範囲",
            kbLevel: 4,
            money: 3333,
            freq: 258,
            foreswing: 59,
            backswing: 62,
            tba: 100
          },
          stageStats: {
            actualHp: 1800000,
            actualAp: 13890,
            actualDps: 1615.11,
            magnification: "150%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "21.3-24.7s",
            delayFrames: "640-740f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 30,
                duration_f: 90,
                duration_s: 3.0
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "2",
            spawnTime: "40.7s",
            spawnTimeFrames: "1,220f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "412",
          enemyName: "イングリッス",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 50000,
            ap: 12500,
            dps: 28846.15,
            speed: 40,
            range: 110,
            rangeType: "単体",
            kbLevel: 5,
            money: 50,
            freq: 13,
            foreswing: 6,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 18750,
            actualDps: 43269.22,
            magnification: "150%",
            count: "1",
            spawnTime: "44.7s",
            spawnTimeFrames: "1,340f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "412",
          enemyName: "イングリッス",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 50000,
            ap: 12500,
            dps: 28846.15,
            speed: 40,
            range: 110,
            rangeType: "単体",
            kbLevel: 5,
            money: 50,
            freq: 13,
            foreswing: 6,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 18750,
            actualDps: 43269.22,
            magnification: "150%",
            count: "2",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 65000,
            actualAp: 7750,
            actualDps: 5670.75,
            magnification: "500%",
            count: "14",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "412",
          enemyName: "イングリッス",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 50000,
            ap: 12500,
            dps: 28846.15,
            speed: 40,
            range: 110,
            rangeType: "単体",
            kbLevel: 5,
            money: 50,
            freq: 13,
            foreswing: 6,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 75000,
            actualAp: 18750,
            actualDps: 43269.22,
            magnification: "150%",
            count: "10",
            spawnTime: "58.0s",
            spawnTimeFrames: "1,740f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "551",
          enemyName: "古神炎ドロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAADsAAABACAMAAACTHv+DAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgEEBAQFBQQXAgEICwQHDAcCDwgMCggPDAsBFgcODwsBFwwREREUEA4RFQ8VFAwSFg0EHhACIRAZFhQWGQ8SHA4VHQ0iGwwCKxEcHRYEKxQCLBYbIRMgHxoeIxQBNRQfJRcWKR8BNhkcKhQMMhsuJQ4COhsjKRgBPRMXMhInJignJiYwIC0JORwnLBslLhkBQh8CQiACQyAnMRwrLSYvLhgDRiAUPR8BRyMpNB4BSCECSSMESCIvMScCSiQCSiUESiQrNx4wMTIGSic6NBYDTigOSiQxOSACUSgFUCQyPB82ODICVSk3Nzc5OyAyPyMCWCsjSCoBWiwEWiwZUCw2QyUPVis+QSIIWy8OWTJBPkA4RyxAPz8BYzAkUi86SSlDRyQ+TCs0Ui9CTSgHaTZHR0clXTVIR0hBUC0TZzdJTyknXzw2WTREUy9SSENMUyxGVzIVbj05XDwUcD0wZDZAWj8dbTsab0BUTlFJWjE+YDMhbkFUWS5MXTRUU1QLfUFJYyYfdEJOXzZYVFY9Z0BXXTNPYjZaWlomekZSZjg7cEomfEgigElVaTpeXl4ahktXbDpgaDkzfkxYbz5lY2NTb15dcUBMekZlcTwqjVI6hVEpjlRfdkFra2JieUMykFpUgUppeUJlfUVGilkumVtxdGtogEg7l10woV1vhUtOkmZakVRCnWg5o2Jph3NyikyAe389pmV/jUs7q2qFgYBQoXMvtmh4llKGiohDsmyAnFdRs3kzxm+KlIxHu3WYk5hVvHpEx3aNp1xWwYBLyIA803agmKBbyYFpw5NE3Hyko6RU1IZjz4ld2YtE6oho2JCxr7Jt3pi1tLdg5ph82qVu5pu7uL945aBx65++vr567qTHxch/8qrMyc2L8bCC/bGO/LjU09WY/sGf/sje2t2q/tzj4eW9//Ht6u7///9mmyO1AAABAHRSTlMACQ4YM1jkICdFUIqZvMrY7/99O2CmcWmwjv9SAJbDiI8AhG+o/5jrAOLwtf//a8mWANecrP//8RPE1f8A/yX/0/l8re3/RXYA06z/Wf8X/zMoi+0ACLf//5r/e/7/AEL02193//8A/w67///g/3T///GrAP///////z3V/5z//f/R///////N/3X/6f+c5///7f//uS//////////zv///8Dl/+6b///////u////tv///////P///////v/+///////k///+/v/X/////////////////+n//////f//////////////////////////////////////////////N7PctAAACltJREFUSImdl31cFHUawIc35UWkBXkJ1wwFI11TfOEy2FNPt7QN15JaM2bNOwaKkZR0WLi4iWNiQjPHmDudhY2hpoYdbiFcV1lgCbJgO0iRBDoQFCFEA5cFZHmxsAFMWaqPfe75Z2dmf995XvZ5WwB4oDgvtr0XBsdETsqDUeGjoJ3tk5AYxR9knRF2/ky9f5RdoDeu/n/1LtJXJdgY/UB/59+z04k0Mi427IP0LhHbTx0EHGG9wcboB/krXGNYM/EZEAA4yHTGPTZfTtcrXLOEf7+tBOpJHyEgjDkQDKziWNL1d/Wu4xI8p4dDKARcyQuoI38qJsRLiSHGJcK7HszUC7ghRh3sdo8OCBYG2O24cGGrXbDir0865R2LLeaNDoncskV4V++0OLvICK5KD81xuMvGHDjw2mNgRZU3sOXd3c6pBQdTDroIYxSKmCnWNs7zZBSlr9LL58yegsNDgvfui61inIJPH7KLPpOS9Pmm4NciIxU8a+8MzIizi5gkKf05g9xv9l2H3zdFIRU7XOo+AzYXnlxf0vL0M88pJthlS4FwhW1uOO+gGZbTV1XI3R3528iQZzo0a4nCx00m76WJUevTzB898/a2mGBgPhs/766793/fRedPHdcycNrXRpm7F6AQLuzsiItIhc82YyQIFsqbO5+o+2hLMPBsnvrE8zNZYHVjGcKhaw+qvzaI3Vc+vbBtQCMj4ovMXCpMw2FpppX/PLs7xDH+cMunkYqZLPBo60VYTRzeF8ecU0s+2NtsMSUlr6/vOYaIIAiUJqPS8k+FDx++2jQ/IFyhmJmTC1pbkePZBZoIUpeoKW2ztMVF5dRz6TKtgZSLofTkts9cQ+usR5x/Cdb0bALcLraix7IzdRRva2eHpa2pzqwJ04oJmuRImSy+6CSiMZuj7IUx27fNYAMUf45q7E9B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",
          traits: ["古"],
          baseStats: {
            hp: 2222222,
            ap: 22222,
            dps: 5050.45,
            speed: 20,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2222,
            freq: 132,
            foreswing: 76,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 2222222,
            actualAp: 22222,
            actualDps: 5050.45,
            magnification: "100%",
            count: "1",
            spawnTime: "62.0s",
            spawnTimeFrames: "1,860f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-1000, 600]
            },
            "weaken": {
                chance: 100,
                power: 1200,
                duration_f: 1,
                duration_s: 0.03
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 500,
                distance_end: 1000,
                level: 8
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
            actualHp: 90000,
            actualAp: 50000,
            actualDps: 36585.4,
            magnification: "1000%",
            count: "3",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "414",
          enemyName: "超町長",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgIGBgYGBgUHBwcICAcJCQkJCwgMDQsMDQsMDQoODwsTFg8UGBAYHBUZHhQZHhUaHxUaHxUbIBYcIhceJhghKBojKxwjLBwlLh8sNyMsNyMuNisvOCgzPCs1Pyw0Qik3QDQ9Qzo6SC46SS47Si5AUTFIWThIWTlOYT1UaEJfYF1YbkJpb2huc2pNilqAhHyHioSRloyUlpObo5mrr6isrqq9v7vNz8vY2dbj4+Lx8fH8/Pyy8HiVAAAAQHRSTlMABx8OwjW0KYkaelb9a0ekxGA4/oS4l3Dv0Mb+q+j/drvK1/+Poufz//7/9v//sP/W/Pv+0P/q/+v//v7/////yPv5jgAABBVJREFUWIXtV113qjoQLXApIgj1gB+IpNVUSUJi5FBKAYX//6/O0J61eh/usuH07a4zby6dnZk9e3bi3d2t0HTj5vdfhGZOHmbaNwCMyZonnwia7unjCrCma84T5zeCPo0erBHplmU+pEwKEU3M4bO5wGQ5oh9jG039TAAAixdwsOETcfRGlG9u+NHf0DiIEaWhpusLITa2cr49fYioTKO168YIsci5n0ScqXdg+6kQlMVxgFCMCMFrjBFPHeUC9GUqpUCui3CMCSUMccbEfsQMvIRxGbsupRhjijCOAyye1FVpzKAFEbgBHoJAGUEcU18VwHD8RcLlAIAQzAA4oEAlTRQ5sPyEckqFgBZQgDBllDHogtOJ2hRMH46XgoOCoIQYcYIZVABTVdWR4WwopDP5jsAZIgOLRETqq2T5qeSYccEBiSDiEgE62I7wBnuZMuifQi8MNORiABghRAjdpwwHbkwBgAYu5hjBRowAuLM2ICLggDPKA5cOTEaKJNr2e69OMkwPumcAQBglIp2rpGveZredWdqdscw4wy6SgyBiSqlU2gXN2XMhsn1oalbEoAcA4Nh1QQpquwA2lkkhOd2H1iolsYsHTQ1sEnFQIdF2/E3KgDmWbmYRRS6VgMACAOChQv6dFqaCoyBwERfHiKAAlAAIAjjIlDi0IgFGEoMXQe0UI/yeLgc9Ka2CNltT4iIC2o8hkeOhAwlSkJwcTXu1cr4gUjN9ioFyAusHlsI5G07nOGaEbezHsgi/moSx4KB8MLIAgxVC8eK9BHBXvDROlxfLsG5CGLOEgHjw4MT4gz9YJiZKRsRMf2ke9efzwbwBYCZMcBBePBgJCIARzkmMm0tRXk7z1xfv1LSvt8bppYOKUOCu1+AEcDxBsJWs6fKya87506l5O81v3U9OJtlxt1w5jo9olg0AeSPr67W41jwvkuI8v82ik+xCzx4k6y2Wq1W4L5r2WnZ9VzR5XhR59pUnmFPr9y80WzO88Nxe+65su2vR5uVFlNX5CzVpnwdo1upIMav6vi6AxLZmOa2q9lnVljRvB1vB8mvfVm3ft7Ksyqauu7PiFW+He0zggi6u/aW6Xi9dWRYQ1/5FEWCVSkIFkS0QWFdl3V/KuqovfacIoM3zn3ChgwRrYLFrLt21reuyrF8fFTmwdz8p+ApYat0DA1U1zLLeh57q5aKFSQolEMEvXQcIZQ01vM3HvNLM+fbpmAKNTdV1XVXVtTyMeSYOGPYPBx5LMocJ1JUQvvoj7TN+vNbNJS+zLF9nI16J/wJ4A4Asf9ofn84jG/gI+1SKfLt7fD6sDn/28rcOu+2j43ie/kcFQJgz09QM7Rt/G77zj+Nv/I3/RWiaYesfYRvG+JWwnKl//89H3PuTmfnfEL8Ap46ibM0xMWsAAAAASUVORK5CYII=",
          traits: ["浮", "古"],
          baseStats: {
            hp: 800000,
            ap: 11111,
            dps: 3787.84,
            speed: 20,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 11111,
            actualDps: 3787.84,
            magnification: "100%",
            count: "2",
            spawnTime: "76.7s",
            spawnTimeFrames: "2,300f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 440,
                omni_range: [-440, 440]
            },
            "curse": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "551",
          enemyName: "古神炎ドロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAADsAAABACAMAAACTHv+DAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgEEBAQFBQQXAgEICwQHDAcCDwgMCggPDAsBFgcODwsBFwwREREUEA4RFQ8VFAwSFg0EHhACIRAZFhQWGQ8SHA4VHQ0iGwwCKxEcHRYEKxQCLBYbIRMgHxoeIxQBNRQfJRcWKR8BNhkcKhQMMhsuJQ4COhsjKRgBPRMXMhInJignJiYwIC0JORwnLBslLhkBQh8CQiACQyAnMRwrLSYvLhgDRiAUPR8BRyMpNB4BSCECSSMESCIvMScCSiQCSiUESiQrNx4wMTIGSic6NBYDTigOSiQxOSACUSgFUCQyPB82ODICVSk3Nzc5OyAyPyMCWCsjSCoBWiwEWiwZUCw2QyUPVis+QSIIWy8OWTJBPkA4RyxAPz8BYzAkUi86SSlDRyQ+TCs0Ui9CTSgHaTZHR0clXTVIR0hBUC0TZzdJTyknXzw2WTREUy9SSENMUyxGVzIVbj05XDwUcD0wZDZAWj8dbTsab0BUTlFJWjE+YDMhbkFUWS5MXTRUU1QLfUFJYyYfdEJOXzZYVFY9Z0BXXTNPYjZaWlomekZSZjg7cEomfEgigElVaTpeXl4ahktXbDpgaDkzfkxYbz5lY2NTb15dcUBMekZlcTwqjVI6hVEpjlRfdkFra2JieUMykFpUgUppeUJlfUVGilkumVtxdGtogEg7l10woV1vhUtOkmZakVRCnWg5o2Jph3NyikyAe389pmV/jUs7q2qFgYBQoXMvtmh4llKGiohDsmyAnFdRs3kzxm+KlIxHu3WYk5hVvHpEx3aNp1xWwYBLyIA803agmKBbyYFpw5NE3Hyko6RU1IZjz4ld2YtE6oho2JCxr7Jt3pi1tLdg5ph82qVu5pu7uL945aBx65++vr567qTHxch/8qrMyc2L8bCC/bGO/LjU09WY/sGf/sje2t2q/tzj4eW9//Ht6u7///9mmyO1AAABAHRSTlMACQ4YM1jkICdFUIqZvMrY7/99O2CmcWmwjv9SAJbDiI8AhG+o/5jrAOLwtf//a8mWANecrP//8RPE1f8A/yX/0/l8re3/RXYA06z/Wf8X/zMoi+0ACLf//5r/e/7/AEL02193//8A/w67///g/3T///GrAP///////z3V/5z//f/R///////N/3X/6f+c5///7f//uS//////////zv///8Dl/+6b///////u////tv///////P///////v/+///////k///+/v/X/////////////////+n//////f//////////////////////////////////////////////N7PctAAACltJREFUSImdl31cFHUawIc35UWkBXkJ1wwFI11TfOEy2FNPt7QN15JaM2bNOwaKkZR0WLi4iWNiQjPHmDudhY2hpoYdbiFcV1lgCbJgO0iRBDoQFCFEA5cFZHmxsAFMWaqPfe75Z2dmf995XvZ5WwB4oDgvtr0XBsdETsqDUeGjoJ3tk5AYxR9knRF2/ky9f5RdoDeu/n/1LtJXJdgY/UB/59+z04k0Mi427IP0LhHbTx0EHGG9wcboB/krXGNYM/EZEAA4yHTGPTZfTtcrXLOEf7+tBOpJHyEgjDkQDKziWNL1d/Wu4xI8p4dDKARcyQuoI38qJsRLiSHGJcK7HszUC7ghRh3sdo8OCBYG2O24cGGrXbDir0865R2LLeaNDoncskV4V++0OLvICK5KD81xuMvGHDjw2mNgRZU3sOXd3c6pBQdTDroIYxSKmCnWNs7zZBSlr9LL58yegsNDgvfui61inIJPH7KLPpOS9Pmm4NciIxU8a+8MzIizi5gkKf05g9xv9l2H3zdFIRU7XOo+AzYXnlxf0vL0M88pJthlS4FwhW1uOO+gGZbTV1XI3R3528iQZzo0a4nCx00m76WJUevTzB898/a2mGBgPhs/766793/fRedPHdcycNrXRpm7F6AQLuzsiItIhc82YyQIFsqbO5+o+2hLMPBsnvrE8zNZYHVjGcKhaw+qvzaI3Vc+vbBtQCMj4ovMXCpMw2FpppX/PLs7xDH+cMunkYqZLPBo60VYTRzeF8ecU0s+2NtsMSUlr6/vOYaIIAiUJqPS8k+FDx++2jQ/IFyhmJmTC1pbkePZBZoIUpeoKW2ztMVF5dRz6TKtgZSLofTkts9cQ+usR5x/Cdb0bALcLraix7IzdRRva2eHpa2pzqwJ04oJmuRImSy+6CSiMZuj7IUx27fNYAMUf45q7E9B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",
          traits: ["古"],
          baseStats: {
            hp: 2222222,
            ap: 22222,
            dps: 5050.45,
            speed: 20,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2222,
            freq: 132,
            foreswing: 76,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 2222222,
            actualAp: 22222,
            actualDps: 5050.45,
            magnification: "100%",
            count: "1",
            spawnTime: "92.0s",
            spawnTimeFrames: "2,760f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-1000, 600]
            },
            "weaken": {
                chance: 100,
                power: 1200,
                duration_f: 1,
                duration_s: 0.03
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 500,
                distance_end: 1000,
                level: 8
            }
          }
        },
        {
          enemyId: "551",
          enemyName: "古神炎ドロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAADsAAABACAMAAACTHv+DAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgEEBAQFBQQXAgEICwQHDAcCDwgMCggPDAsBFgcODwsBFwwREREUEA4RFQ8VFAwSFg0EHhACIRAZFhQWGQ8SHA4VHQ0iGwwCKxEcHRYEKxQCLBYbIRMgHxoeIxQBNRQfJRcWKR8BNhkcKhQMMhsuJQ4COhsjKRgBPRMXMhInJignJiYwIC0JORwnLBslLhkBQh8CQiACQyAnMRwrLSYvLhgDRiAUPR8BRyMpNB4BSCECSSMESCIvMScCSiQCSiUESiQrNx4wMTIGSic6NBYDTigOSiQxOSACUSgFUCQyPB82ODICVSk3Nzc5OyAyPyMCWCsjSCoBWiwEWiwZUCw2QyUPVis+QSIIWy8OWTJBPkA4RyxAPz8BYzAkUi86SSlDRyQ+TCs0Ui9CTSgHaTZHR0clXTVIR0hBUC0TZzdJTyknXzw2WTREUy9SSENMUyxGVzIVbj05XDwUcD0wZDZAWj8dbTsab0BUTlFJWjE+YDMhbkFUWS5MXTRUU1QLfUFJYyYfdEJOXzZYVFY9Z0BXXTNPYjZaWlomekZSZjg7cEomfEgigElVaTpeXl4ahktXbDpgaDkzfkxYbz5lY2NTb15dcUBMekZlcTwqjVI6hVEpjlRfdkFra2JieUMykFpUgUppeUJlfUVGilkumVtxdGtogEg7l10woV1vhUtOkmZakVRCnWg5o2Jph3NyikyAe389pmV/jUs7q2qFgYBQoXMvtmh4llKGiohDsmyAnFdRs3kzxm+KlIxHu3WYk5hVvHpEx3aNp1xWwYBLyIA803agmKBbyYFpw5NE3Hyko6RU1IZjz4ld2YtE6oho2JCxr7Jt3pi1tLdg5ph82qVu5pu7uL945aBx65++vr567qTHxch/8qrMyc2L8bCC/bGO/LjU09WY/sGf/sje2t2q/tzj4eW9//Ht6u7///9mmyO1AAABAHRSTlMACQ4YM1jkICdFUIqZvMrY7/99O2CmcWmwjv9SAJbDiI8AhG+o/5jrAOLwtf//a8mWANecrP//8RPE1f8A/yX/0/l8re3/RXYA06z/Wf8X/zMoi+0ACLf//5r/e/7/AEL02193//8A/w67///g/3T///GrAP///////z3V/5z//f/R///////N/3X/6f+c5///7f//uS//////////zv///8Dl/+6b///////u////tv///////P///////v/+///////k///+/v/X/////////////////+n//////f//////////////////////////////////////////////N7PctAAACltJREFUSImdl31cFHUawIc35UWkBXkJ1wwFI11TfOEy2FNPt7QN15JaM2bNOwaKkZR0WLi4iWNiQjPHmDudhY2hpoYdbiFcV1lgCbJgO0iRBDoQFCFEA5cFZHmxsAFMWaqPfe75Z2dmf995XvZ5WwB4oDgvtr0XBsdETsqDUeGjoJ3tk5AYxR9knRF2/ky9f5RdoDeu/n/1LtJXJdgY/UB/59+z04k0Mi427IP0LhHbTx0EHGG9wcboB/krXGNYM/EZEAA4yHTGPTZfTtcrXLOEf7+tBOpJHyEgjDkQDKziWNL1d/Wu4xI8p4dDKARcyQuoI38qJsRLiSHGJcK7HszUC7ghRh3sdo8OCBYG2O24cGGrXbDir0865R2LLeaNDoncskV4V++0OLvICK5KD81xuMvGHDjw2mNgRZU3sOXd3c6pBQdTDroIYxSKmCnWNs7zZBSlr9LL58yegsNDgvfui61inIJPH7KLPpOS9Pmm4NciIxU8a+8MzIizi5gkKf05g9xv9l2H3zdFIRU7XOo+AzYXnlxf0vL0M88pJthlS4FwhW1uOO+gGZbTV1XI3R3528iQZzo0a4nCx00m76WJUevTzB898/a2mGBgPhs/766793/fRedPHdcycNrXRpm7F6AQLuzsiItIhc82YyQIFsqbO5+o+2hLMPBsnvrE8zNZYHVjGcKhaw+qvzaI3Vc+vbBtQCMj4ovMXCpMw2FpppX/PLs7xDH+cMunkYqZLPBo60VYTRzeF8ecU0s+2NtsMSUlr6/vOYaIIAiUJqPS8k+FDx++2jQ/IFyhmJmTC1pbkePZBZoIUpeoKW2ztMVF5dRz6TKtgZSLofTkts9cQ+usR5x/Cdb0bALcLraix7IzdRRva2eHpa2pzqwJ04oJmuRImSy+6CSiMZuj7IUx27fNYAMUf45q7E9B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",
          traits: ["古"],
          baseStats: {
            hp: 2222222,
            ap: 22222,
            dps: 5050.45,
            speed: 20,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2222,
            freq: 132,
            foreswing: 76,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 2222222,
            actualAp: 22222,
            actualDps: 5050.45,
            magnification: "100%",
            count: "1",
            spawnTime: "118.7s",
            spawnTimeFrames: "3,560f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-1000, 600]
            },
            "weaken": {
                chance: 100,
                power: 1200,
                duration_f: 1,
                duration_s: 0.03
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 500,
                distance_end: 1000,
                level: 8
            }
          }
        },
        {
          enemyId: "551",
          enemyName: "古神炎ドロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAADsAAABACAMAAACTHv+DAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgEEBAQFBQQXAgEICwQHDAcCDwgMCggPDAsBFgcODwsBFwwREREUEA4RFQ8VFAwSFg0EHhACIRAZFhQWGQ8SHA4VHQ0iGwwCKxEcHRYEKxQCLBYbIRMgHxoeIxQBNRQfJRcWKR8BNhkcKhQMMhsuJQ4COhsjKRgBPRMXMhInJignJiYwIC0JORwnLBslLhkBQh8CQiACQyAnMRwrLSYvLhgDRiAUPR8BRyMpNB4BSCECSSMESCIvMScCSiQCSiUESiQrNx4wMTIGSic6NBYDTigOSiQxOSACUSgFUCQyPB82ODICVSk3Nzc5OyAyPyMCWCsjSCoBWiwEWiwZUCw2QyUPVis+QSIIWy8OWTJBPkA4RyxAPz8BYzAkUi86SSlDRyQ+TCs0Ui9CTSgHaTZHR0clXTVIR0hBUC0TZzdJTyknXzw2WTREUy9SSENMUyxGVzIVbj05XDwUcD0wZDZAWj8dbTsab0BUTlFJWjE+YDMhbkFUWS5MXTRUU1QLfUFJYyYfdEJOXzZYVFY9Z0BXXTNPYjZaWlomekZSZjg7cEomfEgigElVaTpeXl4ahktXbDpgaDkzfkxYbz5lY2NTb15dcUBMekZlcTwqjVI6hVEpjlRfdkFra2JieUMykFpUgUppeUJlfUVGilkumVtxdGtogEg7l10woV1vhUtOkmZakVRCnWg5o2Jph3NyikyAe389pmV/jUs7q2qFgYBQoXMvtmh4llKGiohDsmyAnFdRs3kzxm+KlIxHu3WYk5hVvHpEx3aNp1xWwYBLyIA803agmKBbyYFpw5NE3Hyko6RU1IZjz4ld2YtE6oho2JCxr7Jt3pi1tLdg5ph82qVu5pu7uL945aBx65++vr567qTHxch/8qrMyc2L8bCC/bGO/LjU09WY/sGf/sje2t2q/tzj4eW9//Ht6u7///9mmyO1AAABAHRSTlMACQ4YM1jkICdFUIqZvMrY7/99O2CmcWmwjv9SAJbDiI8AhG+o/5jrAOLwtf//a8mWANecrP//8RPE1f8A/yX/0/l8re3/RXYA06z/Wf8X/zMoi+0ACLf//5r/e/7/AEL02193//8A/w67///g/3T///GrAP///////z3V/5z//f/R///////N/3X/6f+c5///7f//uS//////////zv///8Dl/+6b///////u////tv///////P///////v/+///////k///+/v/X/////////////////+n//////f//////////////////////////////////////////////N7PctAAACltJREFUSImdl31cFHUawIc35UWkBXkJ1wwFI11TfOEy2FNPt7QN15JaM2bNOwaKkZR0WLi4iWNiQjPHmDudhY2hpoYdbiFcV1lgCbJgO0iRBDoQFCFEA5cFZHmxsAFMWaqPfe75Z2dmf995XvZ5WwB4oDgvtr0XBsdETsqDUeGjoJ3tk5AYxR9knRF2/ky9f5RdoDeu/n/1LtJXJdgY/UB/59+z04k0Mi427IP0LhHbTx0EHGG9wcboB/krXGNYM/EZEAA4yHTGPTZfTtcrXLOEf7+tBOpJHyEgjDkQDKziWNL1d/Wu4xI8p4dDKARcyQuoI38qJsRLiSHGJcK7HszUC7ghRh3sdo8OCBYG2O24cGGrXbDir0865R2LLeaNDoncskV4V++0OLvICK5KD81xuMvGHDjw2mNgRZU3sOXd3c6pBQdTDroIYxSKmCnWNs7zZBSlr9LL58yegsNDgvfui61inIJPH7KLPpOS9Pmm4NciIxU8a+8MzIizi5gkKf05g9xv9l2H3zdFIRU7XOo+AzYXnlxf0vL0M88pJthlS4FwhW1uOO+gGZbTV1XI3R3528iQZzo0a4nCx00m76WJUevTzB898/a2mGBgPhs/766793/fRedPHdcycNrXRpm7F6AQLuzsiItIhc82YyQIFsqbO5+o+2hLMPBsnvrE8zNZYHVjGcKhaw+qvzaI3Vc+vbBtQCMj4ovMXCpMw2FpppX/PLs7xDH+cMunkYqZLPBo60VYTRzeF8ecU0s+2NtsMSUlr6/vOYaIIAiUJqPS8k+FDx++2jQ/IFyhmJmTC1pbkePZBZoIUpeoKW2ztMVF5dRz6TKtgZSLofTkts9cQ+usR5x/Cdb0bALcLraix7IzdRRva2eHpa2pzqwJ04oJmuRImSy+6CSiMZuj7IUx27fNYAMUf45q7E9B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",
          traits: ["古"],
          baseStats: {
            hp: 2222222,
            ap: 22222,
            dps: 5050.45,
            speed: 20,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2222,
            freq: 132,
            foreswing: 76,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 2222222,
            actualAp: 22222,
            actualDps: 5050.45,
            magnification: "100%",
            count: "1",
            spawnTime: "142.0s",
            spawnTimeFrames: "4,260f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-1000, 600]
            },
            "weaken": {
                chance: 100,
                power: 1200,
                duration_f: 1,
                duration_s: 0.03
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 500,
                distance_end: 1000,
                level: 8
            }
          }
        },
        {
          enemyId: "551",
          enemyName: "古神炎ドロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAADsAAABACAMAAACTHv+DAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgEEBAQFBQQXAgEICwQHDAcCDwgMCggPDAsBFgcODwsBFwwREREUEA4RFQ8VFAwSFg0EHhACIRAZFhQWGQ8SHA4VHQ0iGwwCKxEcHRYEKxQCLBYbIRMgHxoeIxQBNRQfJRcWKR8BNhkcKhQMMhsuJQ4COhsjKRgBPRMXMhInJignJiYwIC0JORwnLBslLhkBQh8CQiACQyAnMRwrLSYvLhgDRiAUPR8BRyMpNB4BSCECSSMESCIvMScCSiQCSiUESiQrNx4wMTIGSic6NBYDTigOSiQxOSACUSgFUCQyPB82ODICVSk3Nzc5OyAyPyMCWCsjSCoBWiwEWiwZUCw2QyUPVis+QSIIWy8OWTJBPkA4RyxAPz8BYzAkUi86SSlDRyQ+TCs0Ui9CTSgHaTZHR0clXTVIR0hBUC0TZzdJTyknXzw2WTREUy9SSENMUyxGVzIVbj05XDwUcD0wZDZAWj8dbTsab0BUTlFJWjE+YDMhbkFUWS5MXTRUU1QLfUFJYyYfdEJOXzZYVFY9Z0BXXTNPYjZaWlomekZSZjg7cEomfEgigElVaTpeXl4ahktXbDpgaDkzfkxYbz5lY2NTb15dcUBMekZlcTwqjVI6hVEpjlRfdkFra2JieUMykFpUgUppeUJlfUVGilkumVtxdGtogEg7l10woV1vhUtOkmZakVRCnWg5o2Jph3NyikyAe389pmV/jUs7q2qFgYBQoXMvtmh4llKGiohDsmyAnFdRs3kzxm+KlIxHu3WYk5hVvHpEx3aNp1xWwYBLyIA803agmKBbyYFpw5NE3Hyko6RU1IZjz4ld2YtE6oho2JCxr7Jt3pi1tLdg5ph82qVu5pu7uL945aBx65++vr567qTHxch/8qrMyc2L8bCC/bGO/LjU09WY/sGf/sje2t2q/tzj4eW9//Ht6u7///9mmyO1AAABAHRSTlMACQ4YM1jkICdFUIqZvMrY7/99O2CmcWmwjv9SAJbDiI8AhG+o/5jrAOLwtf//a8mWANecrP//8RPE1f8A/yX/0/l8re3/RXYA06z/Wf8X/zMoi+0ACLf//5r/e/7/AEL02193//8A/w67///g/3T///GrAP///////z3V/5z//f/R///////N/3X/6f+c5///7f//uS//////////zv///8Dl/+6b///////u////tv///////P///////v/+///////k///+/v/X/////////////////+n//////f//////////////////////////////////////////////N7PctAAACltJREFUSImdl31cFHUawIc35UWkBXkJ1wwFI11TfOEy2FNPt7QN15JaM2bNOwaKkZR0WLi4iWNiQjPHmDudhY2hpoYdbiFcV1lgCbJgO0iRBDoQFCFEA5cFZHmxsAFMWaqPfe75Z2dmf995XvZ5WwB4oDgvtr0XBsdETsqDUeGjoJ3tk5AYxR9knRF2/ky9f5RdoDeu/n/1LtJXJdgY/UB/59+z04k0Mi427IP0LhHbTx0EHGG9wcboB/krXGNYM/EZEAA4yHTGPTZfTtcrXLOEf7+tBOpJHyEgjDkQDKziWNL1d/Wu4xI8p4dDKARcyQuoI38qJsRLiSHGJcK7HszUC7ghRh3sdo8OCBYG2O24cGGrXbDir0865R2LLeaNDoncskV4V++0OLvICK5KD81xuMvGHDjw2mNgRZU3sOXd3c6pBQdTDroIYxSKmCnWNs7zZBSlr9LL58yegsNDgvfui61inIJPH7KLPpOS9Pmm4NciIxU8a+8MzIizi5gkKf05g9xv9l2H3zdFIRU7XOo+AzYXnlxf0vL0M88pJthlS4FwhW1uOO+gGZbTV1XI3R3528iQZzo0a4nCx00m76WJUevTzB898/a2mGBgPhs/766793/fRedPHdcycNrXRpm7F6AQLuzsiItIhc82YyQIFsqbO5+o+2hLMPBsnvrE8zNZYHVjGcKhaw+qvzaI3Vc+vbBtQCMj4ovMXCpMw2FpppX/PLs7xDH+cMunkYqZLPBo60VYTRzeF8ecU0s+2NtsMSUlr6/vOYaIIAiUJqPS8k+FDx++2jQ/IFyhmJmTC1pbkePZBZoIUpeoKW2ztMVF5dRz6TKtgZSLofTkts9cQ+usR5x/Cdb0bALcLraix7IzdRRva2eHpa2pzqwJ04oJmuRImSy+6CSiMZuj7IUx27fNYAMUf45q7E9B0hPT89C4FutoW21H10glrJfjNKdm5Rh1UFQ00vYUf/DlVxS809P1hvzd9FjZ5SjwcCwYJyGbLmeJm6wjHRAjRtUMSjESZebyWmvTMiA8/IP3IxUxMdNYe2B+55duCXWmtqsNOceyYXgX2mW1xKYTEpTSa5VqpSgxo8fSHAiEv9B0KDJmOmu/NO/V8qHX5+YO3KwtSaLlMlAurrWaa3EGhihOT2E6Waqyeah50ws5XR3PhQv50r4vfvqvc3s6y3Oa6uHEbKWYhCTJcJb5p6xkWq5mSZKkUYgUl3SX1g2Nlk7npuA88rTZ3NPVcyZbEkoypFgWVvBTPaiFYJqhSZSgJHBYyZB54Iful3wemag5ex9X+6maDgYW5B2r67ppHq3cBasNGI7I5ZU/1MYTciWtpmlczUmWV3aXDHyFnECq3rPjoUAch7cGero6AyH/fjkp7Wxzk8WcFg+rKZbA5Fg0matMhkiEZDmO5iBpSVYYAcpj9Rf2AME8q9fpDQZODT3+lMbU0NTc1GZKyoQRloRpChWLkVREQpEwy2BKmpZjoBSRiORgVfxDhxQA35iqdAzNGquqdKlgStvQzaFaabqEolmM5HAcAxElpoYptSQznZPLMSUUKgNBbPljpkNCJwDwXYXpjdqIt4u+OFNw5O2OkQFrEwyhJM3ANCJHYIaDYZpOTuSOYaichiGSRILSwZ4W3xWrJuveW06mnDhZ2mIeaDN1jVoG2EQlRWMoBGIwyJCcEs8kSr7RZOsYlkRQQgZBl2+sfdWwaOrXsZu3Klq+PsVkGb3V0HO7FklWGpQohXAszhq0NLk8o+77b3PzaJpSEwgKSQta4rLPofcHjW9+Y7T/2oaRno76+HQRrCchnNUHwZy2gozP6LxyMiObxnUSiZZAJdEH47IrdKumpeSzNY01qpSGgZ7ytPhoGcZQpFEuILQcm5fRean089x0LaqVCWhKIgZFZJV2qfO0UTJ7Y++1xvyTFkvPjdOJIKzEjKRAQJJKAj17xdR15ZuMQoiSCEAtKE45WEg/Atjk84b2GmlUS/ct68CQJhpWogaZvwAx4FKk7kp5U+m3uaksFyQIxZZrLHURDwPbXlPcI11Xbyby4nO6u7tvjY52IYkyjg4SCCC9npJqrnyTU9eSUWykBYKgZPHNoc6VwBuv352DgMuaBLq4gobjmq1WPtl/uiypgBhcINIqcVqXCpVeunQ1l6IMMAIKIPmt2+Xvfnli+5ZJ9tEE3f/OnSgvKTrbPWJt0tQ31yKFKMQhAqZYimpxCoeLKtOSaUorTtf5h4o1ldKC/z6/+8VJdgWrZ7KTTrZYhga6OtPiM1GpEg9lDaCALsmCaLUBj09NTieZCkReWRAUqhQFaXcAL78yZbOjm7fH0jw6JSfnRNHVlMLiVBqHMQMLCZIuNQQhFMVSBM4xhHr54e9LBDKSJdDNH3wcfr9POixZvWjz+eqUzh8wFOFIFMFwxl/yxRk1QuEcQZB810GUXInEX4lyRHxS5/vhW2x6u8Nf3qsbua0J0zOYmuBLSCYQpbOiUCNNYgRjxAU4KRJAJEHowopuvGDbn529XPYOjXS2HN6VmioNZTgagQQTEoRzSpKTTV5DBE5kRsc25GyfznptxfISi6zmug5rSVpWSRoiZziWhWQSiQjhCFIZKpKIlQQMw0lZy95440mbubBKV6w9UmfaV2SxDJkttwt2gQQEGY4TnJ5EaL0WVGpRhkaRZLDe+llAuM08WkPSFfLYr86rTOYGc8dNq0YK4ztDRaAEY0VBCCKASZFYLcGQsKwbXQMfP73txftsIGowPr6xb6w1//O4P+0tt/ZERRtFvY2qO+0S/0lH/f3b+/35FJXVn970Zf2Rl7ZN2zeclix4ZLhvjf0TLwHAyqvffbwTNoqy2sfv3FFNooJT43daBVGvZq6/kuIUsv35F2fMwcWqxYDdynWLN53OmesRERGWm5Lyn9Y7+TtV+ar2/MHxnfurVy4Lqjm7zxNQ/Hp2A06YobhYx8DSd/K/urhfVfndQo+L4+3t19r7r5/aubPsKOC0f/xUhA+/Kk6uDTasc0KFWsVoT7X3D48P7l+42+mt9urqDz/815sbq6trVPtdgMC+62yy18T29us9drare35j79jY8PVTC/hXHR0cv+jGP3ZT9faHqt4E/K6P5x9fB/yy2gEzxCHhWuP5srf4vybOK2rGxq5vsBM6rGgdG6TnbPBc0D9YxkFek+f4JU8xkwXmr/Z1deC7wZ6a/vH+smVCwGd/33B/mYfQa+NgK8bivpOnhCEHfoOdlHmq9sHh4cbVswHXHRfHhnurl9oBe36sBo3MnF+OBAhnrtxTXu85P9h3bfATT9+/fdI4+GNrWYXYgUdVogp2xW/rui9OKt7n4Xxnu3f6+vt6q8nj652BDWNHPfRGscuDWMB+a/Vwuw/fUPa39pah+lBH3pS3HLxWSAIfiPIxLvvxzQl3XI/+w3XdinsLvZ3d7yMOfPk7zfPx9PTcke/n6e3tPcd9jo+fn9vElZubm6eTk6+ri+Ns+1+D7oI/LG4zWDsXXqPbHG8/97lzPTxmzXrIRmbN8vCYO9fdjzfA09fJcZL4GSmR9Oxn5PMkAAAAAElFTkSuQmCC",
          traits: ["古"],
          baseStats: {
            hp: 2222222,
            ap: 22222,
            dps: 5050.45,
            speed: 20,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2222,
            freq: 132,
            foreswing: 76,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 2222222,
            actualAp: 22222,
            actualDps: 5050.45,
            magnification: "100%",
            count: "1",
            spawnTime: "165.3s",
            spawnTimeFrames: "4,960f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-1000, 600]
            },
            "weaken": {
                chance: 100,
                power: 1200,
                duration_f: 1,
                duration_s: 0.03
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 500,
                distance_end: 1000,
                level: 8
            }
          }
        },
        {
          enemyId: "551",
          enemyName: "古神炎ドロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAADsAAABACAMAAACTHv+DAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgEEBAQFBQQXAgEICwQHDAcCDwgMCggPDAsBFgcODwsBFwwREREUEA4RFQ8VFAwSFg0EHhACIRAZFhQWGQ8SHA4VHQ0iGwwCKxEcHRYEKxQCLBYbIRMgHxoeIxQBNRQfJRcWKR8BNhkcKhQMMhsuJQ4COhsjKRgBPRMXMhInJignJiYwIC0JORwnLBslLhkBQh8CQiACQyAnMRwrLSYvLhgDRiAUPR8BRyMpNB4BSCECSSMESCIvMScCSiQCSiUESiQrNx4wMTIGSic6NBYDTigOSiQxOSACUSgFUCQyPB82ODICVSk3Nzc5OyAyPyMCWCsjSCoBWiwEWiwZUCw2QyUPVis+QSIIWy8OWTJBPkA4RyxAPz8BYzAkUi86SSlDRyQ+TCs0Ui9CTSgHaTZHR0clXTVIR0hBUC0TZzdJTyknXzw2WTREUy9SSENMUyxGVzIVbj05XDwUcD0wZDZAWj8dbTsab0BUTlFJWjE+YDMhbkFUWS5MXTRUU1QLfUFJYyYfdEJOXzZYVFY9Z0BXXTNPYjZaWlomekZSZjg7cEomfEgigElVaTpeXl4ahktXbDpgaDkzfkxYbz5lY2NTb15dcUBMekZlcTwqjVI6hVEpjlRfdkFra2JieUMykFpUgUppeUJlfUVGilkumVtxdGtogEg7l10woV1vhUtOkmZakVRCnWg5o2Jph3NyikyAe389pmV/jUs7q2qFgYBQoXMvtmh4llKGiohDsmyAnFdRs3kzxm+KlIxHu3WYk5hVvHpEx3aNp1xWwYBLyIA803agmKBbyYFpw5NE3Hyko6RU1IZjz4ld2YtE6oho2JCxr7Jt3pi1tLdg5ph82qVu5pu7uL945aBx65++vr567qTHxch/8qrMyc2L8bCC/bGO/LjU09WY/sGf/sje2t2q/tzj4eW9//Ht6u7///9mmyO1AAABAHRSTlMACQ4YM1jkICdFUIqZvMrY7/99O2CmcWmwjv9SAJbDiI8AhG+o/5jrAOLwtf//a8mWANecrP//8RPE1f8A/yX/0/l8re3/RXYA06z/Wf8X/zMoi+0ACLf//5r/e/7/AEL02193//8A/w67///g/3T///GrAP///////z3V/5z//f/R///////N/3X/6f+c5///7f//uS//////////zv///8Dl/+6b///////u////tv///////P///////v/+///////k///+/v/X/////////////////+n//////f//////////////////////////////////////////////N7PctAAACltJREFUSImdl31cFHUawIc35UWkBXkJ1wwFI11TfOEy2FNPt7QN15JaM2bNOwaKkZR0WLi4iWNiQjPHmDudhY2hpoYdbiFcV1lgCbJgO0iRBDoQFCFEA5cFZHmxsAFMWaqPfe75Z2dmf995XvZ5WwB4oDgvtr0XBsdETsqDUeGjoJ3tk5AYxR9knRF2/ky9f5RdoDeu/n/1LtJXJdgY/UB/59+z04k0Mi427IP0LhHbTx0EHGG9wcboB/krXGNYM/EZEAA4yHTGPTZfTtcrXLOEf7+tBOpJHyEgjDkQDKziWNL1d/Wu4xI8p4dDKARcyQuoI38qJsRLiSHGJcK7HszUC7ghRh3sdo8OCBYG2O24cGGrXbDir0865R2LLeaNDoncskV4V++0OLvICK5KD81xuMvGHDjw2mNgRZU3sOXd3c6pBQdTDroIYxSKmCnWNs7zZBSlr9LL58yegsNDgvfui61inIJPH7KLPpOS9Pmm4NciIxU8a+8MzIizi5gkKf05g9xv9l2H3zdFIRU7XOo+AzYXnlxf0vL0M88pJthlS4FwhW1uOO+gGZbTV1XI3R3528iQZzo0a4nCx00m76WJUevTzB898/a2mGBgPhs/766793/fRedPHdcycNrXRpm7F6AQLuzsiItIhc82YyQIFsqbO5+o+2hLMPBsnvrE8zNZYHVjGcKhaw+qvzaI3Vc+vbBtQCMj4ovMXCpMw2FpppX/PLs7xDH+cMunkYqZLPBo60VYTRzeF8ecU0s+2NtsMSUlr6/vOYaIIAiUJqPS8k+FDx++2jQ/IFyhmJmTC1pbkePZBZoIUpeoKW2ztMVF5dRz6TKtgZSLofTkts9cQ+usR5x/Cdb0bALcLraix7IzdRRva2eHpa2pzqwJ04oJmuRImSy+6CSiMZuj7IUx27fNYAMUf45q7E9B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",
          traits: ["古"],
          baseStats: {
            hp: 2222222,
            ap: 22222,
            dps: 5050.45,
            speed: 20,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2222,
            freq: 132,
            foreswing: 76,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 2222222,
            actualAp: 22222,
            actualDps: 5050.45,
            magnification: "100%",
            count: "1",
            spawnTime: "185.3s",
            spawnTimeFrames: "5,560f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-1000, 600]
            },
            "weaken": {
                chance: 100,
                power: 1200,
                duration_f: 1,
                duration_s: 0.03
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 500,
                distance_end: 1000,
                level: 8
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "永久を授ける頂",
      baseHp: 1200000,
      width: 4600,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 110, 120, 100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "2",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "60.0-60.0s",
            delayFrames: "1,800-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "554",
          enemyName: "ケルベローズ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 2500,
            ap: 2500,
            dps: 1442.31,
            speed: 10,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 66,
            freq: 52,
            foreswing: 13,
            backswing: 16,
            tba: 20
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 15000,
            actualDps: 8653.86,
            magnification: "600%",
            count: "9",
            spawnTime: "18.7s",
            spawnTimeFrames: "560f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 255000,
            actualAp: 20604,
            actualDps: 38632.5,
            magnification: "300%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "savage-blow": {
                chance: 100,
                power: 1.1
            }
          }
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
            actualHp: 160000,
            actualAp: 10000,
            actualDps: 8333.2,
            magnification: "4000%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "4",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIFCAkJDRAMEhcQGR8UICkYJzEcLjohN0YmP1ArR1ouTWM0WHA6YXw9Z4NAbIpDcpFGd5hKfqFOhKlRiK5TjLNVkLhZl8FcncleoMxfoc5gpNJiptRjqdhmrd1osOFqs+VstuhsuOxuu+9vvfJywvh0xv14yv9+1v+H5P+LJW47AAAAQHRSTlMACRQcJzJATFdhcXmGlqGqx9L43f+07P//////////////////////////////////////////////////////qxSIJwAAB1FJREFUWIWVV4dy6kgQxMYPbAMmDSjnjNAqrLTK8v//1a1kgwH5ru5tFaXYzeyEntFk8ndr+XE9fVn8JXYyXx62LLNazIar6ZF9+hv09H0v6QxvgKhx23fKdjT4P3+Bf9upjiHLqQRqlzj8YS1FGrz9b/jTgXU6V5BrDRipSJtUhLMLf0GwlXDj6ZomAgATpIgUCj2D2f/BTqeTyUbMi8Q76T2IAbMKUdoo9Oz5P2Av028Xv8PbUspIFMbZuYdzsl6GlKEWYfsv4Nn7eg8s+00/k3VwuyAKw6g4iSA6ZpCElKG2ft/By3JLA2WG6nq4fJ78UTsLnBpRBpTHfoqDlJ6GIcbsyxg+P4Bk+VnV5Bx9Ov84fkzmchbY4FWoR8VZHOHwa1Xf/3GzXresFuRVFoeFvZ287gVbmE32cm06LhOm4cOqnAcfzDacEVckHh7qm4PgtMGW+lDOC8U3ha8HN4t4u9tUflqBntTJhV0Dg1SN8jphWblIExlZ5+QOHoW5cxvG+V461xhdzZP5FscxN1loslzixtLa72c47F2IwiRMIv71il+AWRTDK1Ec0WOlCEVETptXiAW99ThND74MQOf+cRQFlKnRr05YC0GTDHiUnU/01VLl86hw9+AWYHWy5MhmMdBjzcVhHBJTDWhG88sv/EbO6iSNe9vSQO8jTiwG4U4Hs/PBbSS3VdQvAiLZWZSk9Um2zkXnwXzAG59NGJzDPKepotm9uxPMmJ826E0a9BbonS2Tnj/zeNSQKPAdWbSCwBzq8aDHpsQdj6zsFYWl5MNea0lxQK+SsODkzuA6Qyz7ZK4ELqUvM7SouP53pIFccvJmOXt+evqzoDkvOQNBTE7ABnWMaEZAUXESZxRxXw2aoA0l6fsh1QODo6W6X12FacbqcnEJpKK2/TEhIH0iRi6i7/DHJ4FVvaTFlW92EvXibTYdwO+KMu3jFKU+GiJeBCA3LfnCh3EUFTipeLCpe1TLesjmN8bQVDMowzRC8Xfyo+osSFZ0k4NJhSwFFKIyGtrda8oCNh+rw05rHSu9pj4ixNbO+EqBctvukKLkplQW4usdwUtf4dMdyCrCP3+JItKQ5EqQeXIQY1IjnEaV9jEZrb3hg1+gH3xW5ecTKsoYDV4sVKtAcRLqeh5W5ljWNlKFg5+yilDhyzwwjGBkee/W1NH6SOe2LIc484+P+DWfkvhWPDIPeM09UbfxqJcl7HkpQqSzVDUgOHgkmDPxjfX9Sg0rrwnOGyxAQJ+hLA3i2lJpcml5c3okOJrNPZ4WIOkrmAajloBkiEYnLTWayYwAbOo++OAgVo/KFV7cj3AFYh1HRtxKcOryrE0ZTnq/w78yEYkeCcILJcoD0Lsz2BoEHW10dpPAfXN67vX/EZ4U0eUeanXAOe2P7udQUlLH388YK6ke/T/29CS63I0rRm4Tx82IrgTEcAy4GzGm4JWPBsTEBY9crlBNTUhz6tWsxNmnD8s7AxZSNXYAJqxa/1wlYJQDVVwT4wE/2Zr1CE+1iSr8NRJUqfiOUCPqwhWYhyHrmUGj9kUX7R83OyupUPrBydSk3eGxt07ZIB0lQa+DCmTZN0OUIqpnHC8Iv/T2Obj5LxZEuAapvVRXlHMy9oK0EcYE78yvFoRx7oN8jW9pMDnBcaWtxgR8jO+R30dU+6ANEwZdSQQWFd7S2Y8IFmJ214BRUmZfKNQacHVwJfAVHTT83fSRYCngux1klnSq0HArIaxcXfZg9WRJJo6GxDchSW7FFwcSBPXAgBqFy7/NSzJGpRVTqyMnzPg7Alq+rXmpLtqtL2U6pDOmQ9BIzF7YByeGUatCkPcMdF4gFwclMVglbb/8KJBHt7gnCONGhLIH0oklv0lnjt6sldHnwloZyVmGQS37pipK5fUu8cDLqTNHij5nUf7AgOh4jpMoaXil+qGtWLFBNKlHg+ZerDC6r2jiMllL0jOj31Rq4YBPokIa7WEKWt+Gb7IBNSZIikAnCioKV2pqglTTrjSKw+TPTktI2RfO18uoSEHWJcWng35ws73ShADT6Wf8yfNnvRe1oCqHVoCSCrNM2dQdEV4XUv1jWRaAm9FheVxQk+kaBFFWjCBGcVVYwIdlVRhA3zzabYJuXItRM562J/Od7Fa+bp0JKYkrgVG3qSvu55Pp6ghWNthAFZVQl9CIMfNH/NPObouw8jTT8uxe/0lqidvF0+RlJ1M/SENS0R4nAomzRj6MDJgxQVuktSOy/SDH0rbOwqZ/sFa6UhTNdPjqyAQ4l3WmHsffnU9LRnUCv6EKdgosRots2+H6GWTvdpxc9dqatj5wcZu7wmYkCEMYllsa87gkdftJXd01XaNQDy4VZNRpVlEOm9W6JlZ377/Bh/Wy2LAePlm2DVpz9rAOHx8frJJlqWfqCgO8awrM5tev3ufZ+3K5Wm+3R7r3fh6l6n1dVMv7w263g91xvz2slsvF68Mupm/L1cdmu90fj/S1f1u745ESbDfr1fKdltM/RlLNpk7oMvoAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 255000,
            actualAp: 20604,
            actualDps: 38632.5,
            magnification: "300%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "savage-blow": {
                chance: 100,
                power: 1.1
            }
          }
        },
        {
          enemyId: "599",
          enemyName: "超古獣ナーラ",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 3000000,
            ap: 60000,
            dps: 13235.29,
            speed: 16,
            range: 400,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3000,
            freq: 136,
            foreswing: 40,
            backswing: 56,
            tba: 23
          },
          stageStats: {
            actualHp: 3000000,
            actualAp: 60000,
            actualDps: 13235.29,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "21.3-24.7s",
            delayFrames: "640-740f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [30000, 15000, 15000],
                timings: [40, 60, 80]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 201]
            },
            "freeze": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-surge": {
                enabled: true
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "2",
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "9.3-9.3s",
            delayFrames: "280-280f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 255000,
            actualAp: 20604,
            actualDps: 38632.5,
            magnification: "300%",
            count: "1",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "savage-blow": {
                chance: 100,
                power: 1.1
            }
          }
        },
        {
          enemyId: "587",
          enemyName: "デビルカツヤ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 53000,
            ap: 30000,
            dps: 5263.16,
            speed: 6,
            range: 450,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 171,
            foreswing: 32,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 53000,
            actualAp: 30000,
            actualDps: 5263.16,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [15000, 10000, 5000],
                timings: [32, 52, 72]
            },
            "long-distance": {
                standing_range: 650,
                ld_range: [650, 900]
            },
            "freeze": {
                chance: 30,
                duration_f: 60,
                duration_s: 2.0
            },
            "shield": {
                hp: 450000
            }
          }
        },
        {
          enemyId: "554",
          enemyName: "ケルベローズ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 2500,
            ap: 2500,
            dps: 1442.31,
            speed: 10,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 66,
            freq: 52,
            foreswing: 13,
            backswing: 16,
            tba: 20
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 15000,
            actualDps: 8653.86,
            magnification: "600%",
            count: "8",
            spawnTime: "21.3s",
            spawnTimeFrames: "640f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "1",
            spawnTime: "54.7s",
            spawnTimeFrames: "1,640f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "554",
          enemyName: "ケルベローズ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 2500,
            ap: 2500,
            dps: 1442.31,
            speed: 10,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 66,
            freq: 52,
            foreswing: 13,
            backswing: 16,
            tba: 20
          },
          stageStats: {
            actualHp: 15000,
            actualAp: 15000,
            actualDps: 8653.86,
            magnification: "600%",
            count: "8",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "5",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "587",
          enemyName: "デビルカツヤ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 53000,
            ap: 30000,
            dps: 5263.16,
            speed: 6,
            range: 450,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 171,
            foreswing: 32,
            backswing: 21,
            tba: 50
          },
          stageStats: {
            actualHp: 53000,
            actualAp: 30000,
            actualDps: 5263.16,
            magnification: "100%",
            count: "1",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [15000, 10000, 5000],
                timings: [32, 52, 72]
            },
            "long-distance": {
                standing_range: 650,
                ld_range: [650, 900]
            },
            "freeze": {
                chance: 30,
                duration_f: 60,
                duration_s: 2.0
            },
            "shield": {
                hp: 450000
            }
          }
        },
        {
          enemyId: "556",
          enemyName: "ヘルゴリラー",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 85000,
            ap: 6868,
            dps: 12877.5,
            speed: 18,
            range: 160,
            rangeType: "範囲",
            kbLevel: 4,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 255000,
            actualAp: 20604,
            actualDps: 38632.5,
            magnification: "300%",
            count: "2",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "28.0-31.3s",
            delayFrames: "840-940f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "savage-blow": {
                chance: 100,
                power: 1.1
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "原罪を贖いし時",
      baseHp: 1500000,
      width: 4600,
      enemyLimit: 20,
      requiredCost: 250,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 110, 120, 100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "1",
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1463.6,
            magnification: "4000%",
            count: "20",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "450",
          enemyName: "土偶戦士ドグ丸",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 1000000,
            ap: 9000,
            dps: 3139.53,
            speed: 15,
            range: 500,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3000,
            freq: 86,
            foreswing: 52,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 1000000,
            actualAp: 9000,
            actualDps: 3139.53,
            magnification: "100%",
            count: "1",
            spawnTime: "10.7s",
            spawnTimeFrames: "320f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 700,
                omni_range: [-500, 700]
            },
            "curse": {
                chance: 100,
                duration_f: 600,
                duration_s: 20.0
            }
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
            actualHp: 100000,
            actualAp: 6000,
            actualDps: 7826.0,
            magnification: "4000%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "3",
            spawnTime: "21.3s",
            spawnTimeFrames: "640f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "496",
          enemyName: "フェンリルとウルス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUBAQEDAwMDAwMDAwMHBwcJCQkKCgoPDw4PEQwSExAjJyAgKxMzNy4xPyY5OTlDQ0NAUjNTUlNMYjteb0t1dXV2dnaAgICHh4eXl5empqa5ubnPz8/k4+Ty8vL///////8RkX8fAAAAIHRSTlMAG8P+UXQ25QCcwf7e/nMA/57+/gD/y/77/f3+//8A/0ttxTcAAARuSURBVFiF7ZXrdtsqEIWFBEgIUBEUcVV5/7fsRo7r1MlJ056/IV7LjgQfw549w/Djf47hC/AF+AJ8Ab4AD8AHg/O3zxb8vR4fAha1v/PwE4Bfc3jIO7l+kb+K4NWUtWTaSfTvInj1xVJlw7Bt/xIB3zY+0DkVMRwPMT4fgXDBeXxM8cId/xLBwGcTMGI28Xi8/CyAbNsek3fe+2CjYox8GsDJNWcLydsQQ9DaOavuifwjYGFS01scZPYAWGOd0Xy42ZIL8gfAoLDjiG3YHnIK0UurJ2nWG5UoO34AuODMSWtpF2EX0mFzLbU2WlwzhPsQQCl25tZJp27AcZ4mcwHkLQDtzLr8N2AZ6bCQ2Wnp1oFQyonQsa/X7oqAKMQjlmF52OFJAyYh8qKcNk7O2E2lXLwDQY59BfPWSLK8jGcAIZxQ3bXuBJxDeqf2XEwx2oSdroKuzup+guVhtl8AMjDGuDDXUSk2ck6uYuC1Gq8YPXL0xuBj2Hs+QJIFlVopa65sL8Lh2JaRmM5iJtafrRaPzMuEJwAbR4kdrUWE5IoGakvt1Fiqdns38UIJn7W15j0ANz6VkiwA5so2FcNoLQxspI8x9dwO206gizGavAUcZymt1YgQVjIs27GnddQ9YhgCaYA2ZODJGgdXi+UZQERpuQKA9bKflqeSG9JgJFZo5YA+mBhjlbZrODwDqKv1bK1FvJ37AcUYSm1OBjP1mHt0reQaW5hwAvoGIFLro4yM9ZfLoNCEdGsGXpI9aJ2vCfUsFsjnRv9jYH2HWvM9tu2ED2VsdoIE2lspcyvn2WqqpzfZijcixnbWXMq9zsMpkS6bzAQnoJS18S2XWpGOlGs26qbiwtkdwHKf0HZxe0J7wWBziSpCJ5hAKBkrQ2mlZC1ffCDkLwBXrUHF4mN/R0Yt4Tfjar4agTfB+9JqTxTOofi3798Qg7gfpftgUeVSqdUdCGY7QCfktdcx1Olvz9xqqaXs/Pt3rF/dvUdeVibbTeieruQ5l8ZMEZtmKWXAd4NT/Omh5pnS3tu9M/d0XoDl28D3I8Z4tn6ZCizLZ4uiRWlllzCVM6YgdWjZrUIZh37zBLgCYRtFYHsOlzX24agajrZnvOLHubqTrMN4VMRrwK1J0NolhTMZ2vqlRvWhtVRCP5m5ddlHSf4GuMKAehA8Kz4IjwAMjOgj1ClJwqKA6G7nhdJ3AIT09S2Jw96q6sQCmc+QOhWdrVfY5Fu/63eHG+wZwNyOjLdGX/AG9RN6CpDnWpqHq+QkccRjFzmv7lUEL0WekO/u++Iumx3IXsGTnRztLGdxE3Jhu8JnRX0kNjy1dSIgN17WmvhdDvCyJscJQsu6i7HGXprd/t1MvwMU4seukBmdgdBWUg3BGDnTrXhE5tje+rFO2ASXtpTz88VCRS2ytwE4RfVsZqhocFVSipuymzCmiXKYO/X+5I24A3CP4V5gQqhZXlU8j6MJKTt4B50K/z2GECY7PSnUmhR3R3B0vXGecZd+elxURn8Cvr4EeOPQ3WoAAAAASUVORK5CYII=",
          traits: ["古"],
          baseStats: {
            hp: 750000,
            ap: 35000,
            dps: 6730.77,
            speed: 4,
            range: 300,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1400,
            freq: 156,
            foreswing: 69,
            backswing: 25,
            tba: 44
          },
          stageStats: {
            actualHp: 750000,
            actualAp: 35000,
            actualDps: 6730.77,
            magnification: "100%",
            count: "1",
            spawnTime: "48.0s",
            spawnTimeFrames: "1,440f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 500,
                omni_range: [-500, 500]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 10,
                duration_s: 0.33
            },
            "curse": {
                chance: 100,
                duration_f: 120,
                duration_s: 4.0
            }
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "1",
            spawnTime: "90.0s",
            spawnTimeFrames: "2,700f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "551",
          enemyName: "古神炎ドロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAADsAAABACAMAAACTHv+DAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgEEBAQFBQQXAgEICwQHDAcCDwgMCggPDAsBFgcODwsBFwwREREUEA4RFQ8VFAwSFg0EHhACIRAZFhQWGQ8SHA4VHQ0iGwwCKxEcHRYEKxQCLBYbIRMgHxoeIxQBNRQfJRcWKR8BNhkcKhQMMhsuJQ4COhsjKRgBPRMXMhInJignJiYwIC0JORwnLBslLhkBQh8CQiACQyAnMRwrLSYvLhgDRiAUPR8BRyMpNB4BSCECSSMESCIvMScCSiQCSiUESiQrNx4wMTIGSic6NBYDTigOSiQxOSACUSgFUCQyPB82ODICVSk3Nzc5OyAyPyMCWCsjSCoBWiwEWiwZUCw2QyUPVis+QSIIWy8OWTJBPkA4RyxAPz8BYzAkUi86SSlDRyQ+TCs0Ui9CTSgHaTZHR0clXTVIR0hBUC0TZzdJTyknXzw2WTREUy9SSENMUyxGVzIVbj05XDwUcD0wZDZAWj8dbTsab0BUTlFJWjE+YDMhbkFUWS5MXTRUU1QLfUFJYyYfdEJOXzZYVFY9Z0BXXTNPYjZaWlomekZSZjg7cEomfEgigElVaTpeXl4ahktXbDpgaDkzfkxYbz5lY2NTb15dcUBMekZlcTwqjVI6hVEpjlRfdkFra2JieUMykFpUgUppeUJlfUVGilkumVtxdGtogEg7l10woV1vhUtOkmZakVRCnWg5o2Jph3NyikyAe389pmV/jUs7q2qFgYBQoXMvtmh4llKGiohDsmyAnFdRs3kzxm+KlIxHu3WYk5hVvHpEx3aNp1xWwYBLyIA803agmKBbyYFpw5NE3Hyko6RU1IZjz4ld2YtE6oho2JCxr7Jt3pi1tLdg5ph82qVu5pu7uL945aBx65++vr567qTHxch/8qrMyc2L8bCC/bGO/LjU09WY/sGf/sje2t2q/tzj4eW9//Ht6u7///9mmyO1AAABAHRSTlMACQ4YM1jkICdFUIqZvMrY7/99O2CmcWmwjv9SAJbDiI8AhG+o/5jrAOLwtf//a8mWANecrP//8RPE1f8A/yX/0/l8re3/RXYA06z/Wf8X/zMoi+0ACLf//5r/e/7/AEL02193//8A/w67///g/3T///GrAP///////z3V/5z//f/R///////N/3X/6f+c5///7f//uS//////////zv///8Dl/+6b///////u////tv///////P///////v/+///////k///+/v/X/////////////////+n//////f//////////////////////////////////////////////N7PctAAACltJREFUSImdl31cFHUawIc35UWkBXkJ1wwFI11TfOEy2FNPt7QN15JaM2bNOwaKkZR0WLi4iWNiQjPHmDudhY2hpoYdbiFcV1lgCbJgO0iRBDoQFCFEA5cFZHmxsAFMWaqPfe75Z2dmf995XvZ5WwB4oDgvtr0XBsdETsqDUeGjoJ3tk5AYxR9knRF2/ky9f5RdoDeu/n/1LtJXJdgY/UB/59+z04k0Mi427IP0LhHbTx0EHGG9wcboB/krXGNYM/EZEAA4yHTGPTZfTtcrXLOEf7+tBOpJHyEgjDkQDKziWNL1d/Wu4xI8p4dDKARcyQuoI38qJsRLiSHGJcK7HszUC7ghRh3sdo8OCBYG2O24cGGrXbDir0865R2LLeaNDoncskV4V++0OLvICK5KD81xuMvGHDjw2mNgRZU3sOXd3c6pBQdTDroIYxSKmCnWNs7zZBSlr9LL58yegsNDgvfui61inIJPH7KLPpOS9Pmm4NciIxU8a+8MzIizi5gkKf05g9xv9l2H3zdFIRU7XOo+AzYXnlxf0vL0M88pJthlS4FwhW1uOO+gGZbTV1XI3R3528iQZzo0a4nCx00m76WJUevTzB898/a2mGBgPhs/766793/fRedPHdcycNrXRpm7F6AQLuzsiItIhc82YyQIFsqbO5+o+2hLMPBsnvrE8zNZYHVjGcKhaw+qvzaI3Vc+vbBtQCMj4ovMXCpMw2FpppX/PLs7xDH+cMunkYqZLPBo60VYTRzeF8ecU0s+2NtsMSUlr6/vOYaIIAiUJqPS8k+FDx++2jQ/IFyhmJmTC1pbkePZBZoIUpeoKW2ztMVF5dRz6TKtgZSLofTkts9cQ+usR5x/Cdb0bALcLraix7IzdRRva2eHpa2pzqwJ04oJmuRImSy+6CSiMZuj7IUx27fNYAMUf45q7E9B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",
          traits: ["古"],
          baseStats: {
            hp: 2222222,
            ap: 22222,
            dps: 5050.45,
            speed: 20,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2222,
            freq: 132,
            foreswing: 76,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 2222222,
            actualAp: 22222,
            actualDps: 5050.45,
            magnification: "100%",
            count: "1",
            spawnTime: "98.0s",
            spawnTimeFrames: "2,940f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-1000, 600]
            },
            "weaken": {
                chance: 100,
                power: 1200,
                duration_f: 1,
                duration_s: 0.03
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 500,
                distance_end: 1000,
                level: 8
            }
          }
        },
        {
          enemyId: "599",
          enemyName: "超古獣ナーラ",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 3000000,
            ap: 60000,
            dps: 13235.29,
            speed: 16,
            range: 400,
            rangeType: "範囲",
            kbLevel: 3,
            money: 3000,
            freq: 136,
            foreswing: 40,
            backswing: 56,
            tba: 23
          },
          stageStats: {
            actualHp: 3000000,
            actualAp: 60000,
            actualDps: 13235.29,
            magnification: "100%",
            count: "1",
            spawnTime: "103.3s",
            spawnTimeFrames: "3,100f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [30000, 15000, 15000],
                timings: [40, 60, 80]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 201]
            },
            "freeze": {
                chance: 100,
                duration_f: 90,
                duration_s: 3.0
            },
            "immune-surge": {
                enabled: true
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "5",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "21.3-28.0s",
            delayFrames: "640-840f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "551",
          enemyName: "古神炎ドロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAADsAAABACAMAAACTHv+DAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgEEBAQFBQQXAgEICwQHDAcCDwgMCggPDAsBFgcODwsBFwwREREUEA4RFQ8VFAwSFg0EHhACIRAZFhQWGQ8SHA4VHQ0iGwwCKxEcHRYEKxQCLBYbIRMgHxoeIxQBNRQfJRcWKR8BNhkcKhQMMhsuJQ4COhsjKRgBPRMXMhInJignJiYwIC0JORwnLBslLhkBQh8CQiACQyAnMRwrLSYvLhgDRiAUPR8BRyMpNB4BSCECSSMESCIvMScCSiQCSiUESiQrNx4wMTIGSic6NBYDTigOSiQxOSACUSgFUCQyPB82ODICVSk3Nzc5OyAyPyMCWCsjSCoBWiwEWiwZUCw2QyUPVis+QSIIWy8OWTJBPkA4RyxAPz8BYzAkUi86SSlDRyQ+TCs0Ui9CTSgHaTZHR0clXTVIR0hBUC0TZzdJTyknXzw2WTREUy9SSENMUyxGVzIVbj05XDwUcD0wZDZAWj8dbTsab0BUTlFJWjE+YDMhbkFUWS5MXTRUU1QLfUFJYyYfdEJOXzZYVFY9Z0BXXTNPYjZaWlomekZSZjg7cEomfEgigElVaTpeXl4ahktXbDpgaDkzfkxYbz5lY2NTb15dcUBMekZlcTwqjVI6hVEpjlRfdkFra2JieUMykFpUgUppeUJlfUVGilkumVtxdGtogEg7l10woV1vhUtOkmZakVRCnWg5o2Jph3NyikyAe389pmV/jUs7q2qFgYBQoXMvtmh4llKGiohDsmyAnFdRs3kzxm+KlIxHu3WYk5hVvHpEx3aNp1xWwYBLyIA803agmKBbyYFpw5NE3Hyko6RU1IZjz4ld2YtE6oho2JCxr7Jt3pi1tLdg5ph82qVu5pu7uL945aBx65++vr567qTHxch/8qrMyc2L8bCC/bGO/LjU09WY/sGf/sje2t2q/tzj4eW9//Ht6u7///9mmyO1AAABAHRSTlMACQ4YM1jkICdFUIqZvMrY7/99O2CmcWmwjv9SAJbDiI8AhG+o/5jrAOLwtf//a8mWANecrP//8RPE1f8A/yX/0/l8re3/RXYA06z/Wf8X/zMoi+0ACLf//5r/e/7/AEL02193//8A/w67///g/3T///GrAP///////z3V/5z//f/R///////N/3X/6f+c5///7f//uS//////////zv///8Dl/+6b///////u////tv///////P///////v/+///////k///+/v/X/////////////////+n//////f//////////////////////////////////////////////N7PctAAACltJREFUSImdl31cFHUawIc35UWkBXkJ1wwFI11TfOEy2FNPt7QN15JaM2bNOwaKkZR0WLi4iWNiQjPHmDudhY2hpoYdbiFcV1lgCbJgO0iRBDoQFCFEA5cFZHmxsAFMWaqPfe75Z2dmf995XvZ5WwB4oDgvtr0XBsdETsqDUeGjoJ3tk5AYxR9knRF2/ky9f5RdoDeu/n/1LtJXJdgY/UB/59+z04k0Mi427IP0LhHbTx0EHGG9wcboB/krXGNYM/EZEAA4yHTGPTZfTtcrXLOEf7+tBOpJHyEgjDkQDKziWNL1d/Wu4xI8p4dDKARcyQuoI38qJsRLiSHGJcK7HszUC7ghRh3sdo8OCBYG2O24cGGrXbDir0865R2LLeaNDoncskV4V++0OLvICK5KD81xuMvGHDjw2mNgRZU3sOXd3c6pBQdTDroIYxSKmCnWNs7zZBSlr9LL58yegsNDgvfui61inIJPH7KLPpOS9Pmm4NciIxU8a+8MzIizi5gkKf05g9xv9l2H3zdFIRU7XOo+AzYXnlxf0vL0M88pJthlS4FwhW1uOO+gGZbTV1XI3R3528iQZzo0a4nCx00m76WJUevTzB898/a2mGBgPhs/766793/fRedPHdcycNrXRpm7F6AQLuzsiItIhc82YyQIFsqbO5+o+2hLMPBsnvrE8zNZYHVjGcKhaw+qvzaI3Vc+vbBtQCMj4ovMXCpMw2FpppX/PLs7xDH+cMunkYqZLPBo60VYTRzeF8ecU0s+2NtsMSUlr6/vOYaIIAiUJqPS8k+FDx++2jQ/IFyhmJmTC1pbkePZBZoIUpeoKW2ztMVF5dRz6TKtgZSLofTkts9cQ+usR5x/Cdb0bALcLraix7IzdRRva2eHpa2pzqwJ04oJmuRImSy+6CSiMZuj7IUx27fNYAMUf45q7E9B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",
          traits: ["古"],
          baseStats: {
            hp: 2222222,
            ap: 22222,
            dps: 5050.45,
            speed: 20,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2222,
            freq: 132,
            foreswing: 76,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 2222222,
            actualAp: 22222,
            actualDps: 5050.45,
            magnification: "100%",
            count: "1",
            spawnTime: "126.7s",
            spawnTimeFrames: "3,800f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-1000, 600]
            },
            "weaken": {
                chance: 100,
                power: 1200,
                duration_f: 1,
                duration_s: 0.03
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 500,
                distance_end: 1000,
                level: 8
            }
          }
        },
        {
          enemyId: "551",
          enemyName: "古神炎ドロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAADsAAABACAMAAACTHv+DAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgEEBAQFBQQXAgEICwQHDAcCDwgMCggPDAsBFgcODwsBFwwREREUEA4RFQ8VFAwSFg0EHhACIRAZFhQWGQ8SHA4VHQ0iGwwCKxEcHRYEKxQCLBYbIRMgHxoeIxQBNRQfJRcWKR8BNhkcKhQMMhsuJQ4COhsjKRgBPRMXMhInJignJiYwIC0JORwnLBslLhkBQh8CQiACQyAnMRwrLSYvLhgDRiAUPR8BRyMpNB4BSCECSSMESCIvMScCSiQCSiUESiQrNx4wMTIGSic6NBYDTigOSiQxOSACUSgFUCQyPB82ODICVSk3Nzc5OyAyPyMCWCsjSCoBWiwEWiwZUCw2QyUPVis+QSIIWy8OWTJBPkA4RyxAPz8BYzAkUi86SSlDRyQ+TCs0Ui9CTSgHaTZHR0clXTVIR0hBUC0TZzdJTyknXzw2WTREUy9SSENMUyxGVzIVbj05XDwUcD0wZDZAWj8dbTsab0BUTlFJWjE+YDMhbkFUWS5MXTRUU1QLfUFJYyYfdEJOXzZYVFY9Z0BXXTNPYjZaWlomekZSZjg7cEomfEgigElVaTpeXl4ahktXbDpgaDkzfkxYbz5lY2NTb15dcUBMekZlcTwqjVI6hVEpjlRfdkFra2JieUMykFpUgUppeUJlfUVGilkumVtxdGtogEg7l10woV1vhUtOkmZakVRCnWg5o2Jph3NyikyAe389pmV/jUs7q2qFgYBQoXMvtmh4llKGiohDsmyAnFdRs3kzxm+KlIxHu3WYk5hVvHpEx3aNp1xWwYBLyIA803agmKBbyYFpw5NE3Hyko6RU1IZjz4ld2YtE6oho2JCxr7Jt3pi1tLdg5ph82qVu5pu7uL945aBx65++vr567qTHxch/8qrMyc2L8bCC/bGO/LjU09WY/sGf/sje2t2q/tzj4eW9//Ht6u7///9mmyO1AAABAHRSTlMACQ4YM1jkICdFUIqZvMrY7/99O2CmcWmwjv9SAJbDiI8AhG+o/5jrAOLwtf//a8mWANecrP//8RPE1f8A/yX/0/l8re3/RXYA06z/Wf8X/zMoi+0ACLf//5r/e/7/AEL02193//8A/w67///g/3T///GrAP///////z3V/5z//f/R///////N/3X/6f+c5///7f//uS//////////zv///8Dl/+6b///////u////tv///////P///////v/+///////k///+/v/X/////////////////+n//////f//////////////////////////////////////////////N7PctAAACltJREFUSImdl31cFHUawIc35UWkBXkJ1wwFI11TfOEy2FNPt7QN15JaM2bNOwaKkZR0WLi4iWNiQjPHmDudhY2hpoYdbiFcV1lgCbJgO0iRBDoQFCFEA5cFZHmxsAFMWaqPfe75Z2dmf995XvZ5WwB4oDgvtr0XBsdETsqDUeGjoJ3tk5AYxR9knRF2/ky9f5RdoDeu/n/1LtJXJdgY/UB/59+z04k0Mi427IP0LhHbTx0EHGG9wcboB/krXGNYM/EZEAA4yHTGPTZfTtcrXLOEf7+tBOpJHyEgjDkQDKziWNL1d/Wu4xI8p4dDKARcyQuoI38qJsRLiSHGJcK7HszUC7ghRh3sdo8OCBYG2O24cGGrXbDir0865R2LLeaNDoncskV4V++0OLvICK5KD81xuMvGHDjw2mNgRZU3sOXd3c6pBQdTDroIYxSKmCnWNs7zZBSlr9LL58yegsNDgvfui61inIJPH7KLPpOS9Pmm4NciIxU8a+8MzIizi5gkKf05g9xv9l2H3zdFIRU7XOo+AzYXnlxf0vL0M88pJthlS4FwhW1uOO+gGZbTV1XI3R3528iQZzo0a4nCx00m76WJUevTzB898/a2mGBgPhs/766793/fRedPHdcycNrXRpm7F6AQLuzsiItIhc82YyQIFsqbO5+o+2hLMPBsnvrE8zNZYHVjGcKhaw+qvzaI3Vc+vbBtQCMj4ovMXCpMw2FpppX/PLs7xDH+cMunkYqZLPBo60VYTRzeF8ecU0s+2NtsMSUlr6/vOYaIIAiUJqPS8k+FDx++2jQ/IFyhmJmTC1pbkePZBZoIUpeoKW2ztMVF5dRz6TKtgZSLofTkts9cQ+usR5x/Cdb0bALcLraix7IzdRRva2eHpa2pzqwJ04oJmuRImSy+6CSiMZuj7IUx27fNYAMUf45q7E9B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",
          traits: ["古"],
          baseStats: {
            hp: 2222222,
            ap: 22222,
            dps: 5050.45,
            speed: 20,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2222,
            freq: 132,
            foreswing: 76,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 2222222,
            actualAp: 22222,
            actualDps: 5050.45,
            magnification: "100%",
            count: "1",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-1000, 600]
            },
            "weaken": {
                chance: 100,
                power: 1200,
                duration_f: 1,
                duration_s: 0.03
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 500,
                distance_end: 1000,
                level: 8
            }
          }
        },
        {
          enemyId: "551",
          enemyName: "古神炎ドロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAADsAAABACAMAAACTHv+DAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgEEBAQFBQQXAgEICwQHDAcCDwgMCggPDAsBFgcODwsBFwwREREUEA4RFQ8VFAwSFg0EHhACIRAZFhQWGQ8SHA4VHQ0iGwwCKxEcHRYEKxQCLBYbIRMgHxoeIxQBNRQfJRcWKR8BNhkcKhQMMhsuJQ4COhsjKRgBPRMXMhInJignJiYwIC0JORwnLBslLhkBQh8CQiACQyAnMRwrLSYvLhgDRiAUPR8BRyMpNB4BSCECSSMESCIvMScCSiQCSiUESiQrNx4wMTIGSic6NBYDTigOSiQxOSACUSgFUCQyPB82ODICVSk3Nzc5OyAyPyMCWCsjSCoBWiwEWiwZUCw2QyUPVis+QSIIWy8OWTJBPkA4RyxAPz8BYzAkUi86SSlDRyQ+TCs0Ui9CTSgHaTZHR0clXTVIR0hBUC0TZzdJTyknXzw2WTREUy9SSENMUyxGVzIVbj05XDwUcD0wZDZAWj8dbTsab0BUTlFJWjE+YDMhbkFUWS5MXTRUU1QLfUFJYyYfdEJOXzZYVFY9Z0BXXTNPYjZaWlomekZSZjg7cEomfEgigElVaTpeXl4ahktXbDpgaDkzfkxYbz5lY2NTb15dcUBMekZlcTwqjVI6hVEpjlRfdkFra2JieUMykFpUgUppeUJlfUVGilkumVtxdGtogEg7l10woV1vhUtOkmZakVRCnWg5o2Jph3NyikyAe389pmV/jUs7q2qFgYBQoXMvtmh4llKGiohDsmyAnFdRs3kzxm+KlIxHu3WYk5hVvHpEx3aNp1xWwYBLyIA803agmKBbyYFpw5NE3Hyko6RU1IZjz4ld2YtE6oho2JCxr7Jt3pi1tLdg5ph82qVu5pu7uL945aBx65++vr567qTHxch/8qrMyc2L8bCC/bGO/LjU09WY/sGf/sje2t2q/tzj4eW9//Ht6u7///9mmyO1AAABAHRSTlMACQ4YM1jkICdFUIqZvMrY7/99O2CmcWmwjv9SAJbDiI8AhG+o/5jrAOLwtf//a8mWANecrP//8RPE1f8A/yX/0/l8re3/RXYA06z/Wf8X/zMoi+0ACLf//5r/e/7/AEL02193//8A/w67///g/3T///GrAP///////z3V/5z//f/R///////N/3X/6f+c5///7f//uS//////////zv///8Dl/+6b///////u////tv///////P///////v/+///////k///+/v/X/////////////////+n//////f//////////////////////////////////////////////N7PctAAACltJREFUSImdl31cFHUawIc35UWkBXkJ1wwFI11TfOEy2FNPt7QN15JaM2bNOwaKkZR0WLi4iWNiQjPHmDudhY2hpoYdbiFcV1lgCbJgO0iRBDoQFCFEA5cFZHmxsAFMWaqPfe75Z2dmf995XvZ5WwB4oDgvtr0XBsdETsqDUeGjoJ3tk5AYxR9knRF2/ky9f5RdoDeu/n/1LtJXJdgY/UB/59+z04k0Mi427IP0LhHbTx0EHGG9wcboB/krXGNYM/EZEAA4yHTGPTZfTtcrXLOEf7+tBOpJHyEgjDkQDKziWNL1d/Wu4xI8p4dDKARcyQuoI38qJsRLiSHGJcK7HszUC7ghRh3sdo8OCBYG2O24cGGrXbDir0865R2LLeaNDoncskV4V++0OLvICK5KD81xuMvGHDjw2mNgRZU3sOXd3c6pBQdTDroIYxSKmCnWNs7zZBSlr9LL58yegsNDgvfui61inIJPH7KLPpOS9Pmm4NciIxU8a+8MzIizi5gkKf05g9xv9l2H3zdFIRU7XOo+AzYXnlxf0vL0M88pJthlS4FwhW1uOO+gGZbTV1XI3R3528iQZzo0a4nCx00m76WJUevTzB898/a2mGBgPhs/766793/fRedPHdcycNrXRpm7F6AQLuzsiItIhc82YyQIFsqbO5+o+2hLMPBsnvrE8zNZYHVjGcKhaw+qvzaI3Vc+vbBtQCMj4ovMXCpMw2FpppX/PLs7xDH+cMunkYqZLPBo60VYTRzeF8ecU0s+2NtsMSUlr6/vOYaIIAiUJqPS8k+FDx++2jQ/IFyhmJmTC1pbkePZBZoIUpeoKW2ztMVF5dRz6TKtgZSLofTkts9cQ+usR5x/Cdb0bALcLraix7IzdRRva2eHpa2pzqwJ04oJmuRImSy+6CSiMZuj7IUx27fNYAMUf45q7E9B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",
          traits: ["古"],
          baseStats: {
            hp: 2222222,
            ap: 22222,
            dps: 5050.45,
            speed: 20,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2222,
            freq: 132,
            foreswing: 76,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 2222222,
            actualAp: 22222,
            actualDps: 5050.45,
            magnification: "100%",
            count: "1",
            spawnTime: "180.0s",
            spawnTimeFrames: "5,400f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-1000, 600]
            },
            "weaken": {
                chance: 100,
                power: 1200,
                duration_f: 1,
                duration_s: 0.03
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 500,
                distance_end: 1000,
                level: 8
            }
          }
        },
        {
          enemyId: "551",
          enemyName: "古神炎ドロン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAADsAAABACAMAAACTHv+DAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQECAgICAgICAgICAgEEBAQFBQQXAgEICwQHDAcCDwgMCggPDAsBFgcODwsBFwwREREUEA4RFQ8VFAwSFg0EHhACIRAZFhQWGQ8SHA4VHQ0iGwwCKxEcHRYEKxQCLBYbIRMgHxoeIxQBNRQfJRcWKR8BNhkcKhQMMhsuJQ4COhsjKRgBPRMXMhInJignJiYwIC0JORwnLBslLhkBQh8CQiACQyAnMRwrLSYvLhgDRiAUPR8BRyMpNB4BSCECSSMESCIvMScCSiQCSiUESiQrNx4wMTIGSic6NBYDTigOSiQxOSACUSgFUCQyPB82ODICVSk3Nzc5OyAyPyMCWCsjSCoBWiwEWiwZUCw2QyUPVis+QSIIWy8OWTJBPkA4RyxAPz8BYzAkUi86SSlDRyQ+TCs0Ui9CTSgHaTZHR0clXTVIR0hBUC0TZzdJTyknXzw2WTREUy9SSENMUyxGVzIVbj05XDwUcD0wZDZAWj8dbTsab0BUTlFJWjE+YDMhbkFUWS5MXTRUU1QLfUFJYyYfdEJOXzZYVFY9Z0BXXTNPYjZaWlomekZSZjg7cEomfEgigElVaTpeXl4ahktXbDpgaDkzfkxYbz5lY2NTb15dcUBMekZlcTwqjVI6hVEpjlRfdkFra2JieUMykFpUgUppeUJlfUVGilkumVtxdGtogEg7l10woV1vhUtOkmZakVRCnWg5o2Jph3NyikyAe389pmV/jUs7q2qFgYBQoXMvtmh4llKGiohDsmyAnFdRs3kzxm+KlIxHu3WYk5hVvHpEx3aNp1xWwYBLyIA803agmKBbyYFpw5NE3Hyko6RU1IZjz4ld2YtE6oho2JCxr7Jt3pi1tLdg5ph82qVu5pu7uL945aBx65++vr567qTHxch/8qrMyc2L8bCC/bGO/LjU09WY/sGf/sje2t2q/tzj4eW9//Ht6u7///9mmyO1AAABAHRSTlMACQ4YM1jkICdFUIqZvMrY7/99O2CmcWmwjv9SAJbDiI8AhG+o/5jrAOLwtf//a8mWANecrP//8RPE1f8A/yX/0/l8re3/RXYA06z/Wf8X/zMoi+0ACLf//5r/e/7/AEL02193//8A/w67///g/3T///GrAP///////z3V/5z//f/R///////N/3X/6f+c5///7f//uS//////////zv///8Dl/+6b///////u////tv///////P///////v/+///////k///+/v/X/////////////////+n//////f//////////////////////////////////////////////N7PctAAACltJREFUSImdl31cFHUawIc35UWkBXkJ1wwFI11TfOEy2FNPt7QN15JaM2bNOwaKkZR0WLi4iWNiQjPHmDudhY2hpoYdbiFcV1lgCbJgO0iRBDoQFCFEA5cFZHmxsAFMWaqPfe75Z2dmf995XvZ5WwB4oDgvtr0XBsdETsqDUeGjoJ3tk5AYxR9knRF2/ky9f5RdoDeu/n/1LtJXJdgY/UB/59+z04k0Mi427IP0LhHbTx0EHGG9wcboB/krXGNYM/EZEAA4yHTGPTZfTtcrXLOEf7+tBOpJHyEgjDkQDKziWNL1d/Wu4xI8p4dDKARcyQuoI38qJsRLiSHGJcK7HszUC7ghRh3sdo8OCBYG2O24cGGrXbDir0865R2LLeaNDoncskV4V++0OLvICK5KD81xuMvGHDjw2mNgRZU3sOXd3c6pBQdTDroIYxSKmCnWNs7zZBSlr9LL58yegsNDgvfui61inIJPH7KLPpOS9Pmm4NciIxU8a+8MzIizi5gkKf05g9xv9l2H3zdFIRU7XOo+AzYXnlxf0vL0M88pJthlS4FwhW1uOO+gGZbTV1XI3R3528iQZzo0a4nCx00m76WJUevTzB898/a2mGBgPhs/766793/fRedPHdcycNrXRpm7F6AQLuzsiItIhc82YyQIFsqbO5+o+2hLMPBsnvrE8zNZYHVjGcKhaw+qvzaI3Vc+vbBtQCMj4ovMXCpMw2FpppX/PLs7xDH+cMunkYqZLPBo60VYTRzeF8ecU0s+2NtsMSUlr6/vOYaIIAiUJqPS8k+FDx++2jQ/IFyhmJmTC1pbkePZBZoIUpeoKW2ztMVF5dRz6TKtgZSLofTkts9cQ+usR5x/Cdb0bALcLraix7IzdRRva2eHpa2pzqwJ04oJmuRImSy+6CSiMZuj7IUx27fNYAMUf45q7E9B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",
          traits: ["古"],
          baseStats: {
            hp: 2222222,
            ap: 22222,
            dps: 5050.45,
            speed: 20,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2222,
            freq: 132,
            foreswing: 76,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 2222222,
            actualAp: 22222,
            actualDps: 5050.45,
            magnification: "100%",
            count: "1",
            spawnTime: "226.7s",
            spawnTimeFrames: "6,800f",
            delay: "53.3-60.0s",
            delayFrames: "1,600-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 600,
                omni_range: [-1000, 600]
            },
            "weaken": {
                chance: 100,
                power: 1200,
                duration_f: 1,
                duration_s: 0.03
            },
            "immune-waves": {
                enabled: true
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 500,
                distance_end: 1000,
                level: 8
            }
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
            actualHp: 20000,
            actualAp: 2000,
            actualDps: 1463.6,
            magnification: "4000%",
            count: "8",
            spawnTime: "306.7s",
            spawnTimeFrames: "9,200f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 5,
      stageName: "古代を統べる猿人",
      baseHp: 1500000,
      width: 5000,
      enemyLimit: 30,
      requiredCost: 230,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 110, 120, 100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "157",
          treasureName: "プラチナチケットの欠片",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "612",
          enemyName: "ハニワンワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgIDAwMDAwMHBwUKCQkLDAcMCwsODwoSEwwVFBQVGA0aHREeIRUhJxUkJCMlKxcqKSYpLxotMxsvMSYxOBwzOh42PSA7Oi05QCM8QyY/Pjw9RiZARytDSylETitJTTRLTyZHUC1JUy5NVCxQTktMVy9OWTNRWzBQXTJSXTFTXjNUXT1UXzNUYTRbWFZUYzVVZTVYYj9XZzdYaDhcZ0Raazlfa0ZcbjtmY2Fib0podVFzcG57eXWHhICQjImWk4+empejn5ysp6Kzr6y9t7LBvLbHwbvKxsPSy8bV0c7d19Li3djr5eHy6+P17+n69vD++fH//vr///85iHy9AAAAgHRSTlMABBQfJS05RkpQWmRobXJ8g4aRlpqgo6ituL7F0NXjGTM/VWCzy9jd5uz6/wrxD/f/6f/7///7/////////////////////////////////////////////////////////////////////////////////////////////////xoZ4X4AAAe+SURBVFiFlVcNW5TaFrZPKyu/0tLyq5vWhCYRc/lwhAEEZxgDhQGC2II4Y6OWpmVqR8e/ftdm9Dl6LprndR7GPQ/rZe213rXWpq3tKtwZ7P97cbPj8Y0r7/4/3Oie5l5Pni5Get7QuZv/yn5kgDaCD3dai5fDTMWavvVv7Edfs1YtYh6miy5SRpF9xnYtjOUKSRInUh9e9FA6CjyHunt9+7s5oRbHcaKMw6KDrCDPC4L8vWvb3xoWkggQm7mRttu5chIAAWIeXJvgGRtFCMMh77b1F2oRJoi5R9e1f0kFtSAMwjBK8vfvkF4Sh17gJXz3Ne1vjHO6YblA4ZTpoQkyT+dpiqbz1Pj10tA+SPKq4eJdB5Zp6Gq5JEuKIgkFhhi4hhS6ScFKkggFgR8ilEAgYsgnII5Di30x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",
          traits: ["古"],
          baseStats: {
            hp: 300000,
            ap: 20000,
            dps: 8333.33,
            speed: 4,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 300,
            freq: 72,
            foreswing: 25,
            backswing: 14,
            tba: 24
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 20000,
            actualDps: 8333.33,
            magnification: "100%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "50.0-56.7s",
            delayFrames: "1,500-1,700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 20
            },
            "freeze": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
            },
            "slow": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
            },
            "mini-wave": {
                chance: 100,
                level: 4
            },
            "weaken": {
                chance: 20,
                power: 60,
                duration_f: 50,
                duration_s: 1.67
            },
            "curse": {
                chance: 20,
                duration_f: 60,
                duration_s: 2.0
            }
          }
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "3",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 321234,
            actualAp: 11234,
            actualDps: 21063.75,
            magnification: "100%",
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "4.0-6.0s",
            delayFrames: "120-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "5",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "549",
          enemyName: "怒りのブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 321234,
            ap: 11234,
            dps: 21063.75,
            speed: 30,
            range: 180,
            rangeType: "範囲",
            kbLevel: 8,
            money: 555,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 321234,
            actualAp: 11234,
            actualDps: 21063.75,
            magnification: "100%",
            count: "4",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "50.0-53.3s",
            delayFrames: "1,500-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "immune-freeze": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "420",
          enemyName: "ダテメガネル",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 360000,
            ap: 6000,
            dps: 1200.0,
            speed: 9,
            range: 449,
            rangeType: "範囲",
            kbLevel: 6,
            money: 750,
            freq: 150,
            foreswing: 11,
            backswing: 9,
            tba: 70
          },
          stageStats: {
            actualHp: 540000,
            actualAp: 9000,
            actualDps: 1800.0,
            magnification: "150%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "4.0-6.0s",
            delayFrames: "120-180f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 500,
                ld_range: [500, 800]
            },
            "curse": {
                chance: 100,
                duration_f: 150,
                duration_s: 5.0
            }
          }
        },
        {
          enemyId: "611",
          enemyName: "超闇獣ダックジョー",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 2000000,
            ap: 27900,
            dps: 12681.82,
            speed: 20,
            range: 250,
            rangeType: "範囲",
            kbLevel: 11,
            money: 1800,
            freq: 66,
            foreswing: 10,
            backswing: 34,
            tba: 0
          },
          stageStats: {
            actualHp: 2000000,
            actualAp: 27900,
            actualDps: 12681.82,
            magnification: "100%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [9300, 9300, 9300],
                timings: [10, 21, 32]
            },
            "long-distance": {
                standing_range: 1,
                ld_range: [1, 251]
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "immune-surge": {
                enabled: true
            },
            "toxic": {
                chance: 5,
                damage: 50
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "628",
          enemyName: "超猿獣ルーザ",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 2500000,
            ap: 90000,
            dps: 11065.57,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 5555,
            freq: 244,
            foreswing: 60,
            backswing: 35,
            tba: 89
          },
          stageStats: {
            actualHp: 2500000,
            actualAp: 90000,
            actualDps: 11065.57,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [45000, 45000],
                timings: [60, 67]
            },
            "omni-strike": {
                standing_range: 400,
                omni_range: [-400, 400]
            },
            "immune-waves": {
                enabled: true
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            },
            "behemoth": {
                enabled: true
            }
          }
        }]
    },
    {
      stageId: 6,
      stageName: "逆襲の大猿人",
      baseHp: 1750000,
      width: 4500,
      enemyLimit: 30,
      requiredCost: 240,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 110, 120, 100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "157",
          treasureName: "プラチナチケットの欠片",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
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
            actualHp: 8000,
            actualAp: 800,
            actualDps: 800.0,
            magnification: "4000%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "2.0-4.0s",
            delayFrames: "60-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "628",
          enemyName: "超猿獣ルーザ",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 2500000,
            ap: 90000,
            dps: 11065.57,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 5555,
            freq: 244,
            foreswing: 60,
            backswing: 35,
            tba: 89
          },
          stageStats: {
            actualHp: 2500000,
            actualAp: 90000,
            actualDps: 11065.57,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [45000, 45000],
                timings: [60, 67]
            },
            "omni-strike": {
                standing_range: 400,
                omni_range: [-400, 400]
            },
            "immune-waves": {
                enabled: true
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "614",
          enemyName: "超爆獣アリアント",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 75000,
            ap: 135000,
            dps: 9396.75,
            speed: 7,
            range: 100,
            rangeType: "範囲",
            kbLevel: 1,
            money: 280,
            freq: 431,
            foreswing: 160,
            backswing: 47,
            tba: 134
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 270000,
            actualDps: 18793.5,
            magnification: "200%",
            count: "5",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "40.0-43.3s",
            delayFrames: "1,200-1,300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [45000, 45000, 45000],
                timings: [160, 162, 164]
            },
            "omni-strike": {
                standing_range: 130,
                omni_range: [-130, 130]
            },
            "immune-knockback": {
                enabled: true
            },
            "immune-freeze": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 720,
                duration_s: 24.0,
                hp_ratio: 100
            },
            "behemoth": {
                enabled: true
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
            actualHp: 3200,
            actualAp: 1200,
            actualDps: 2250.0,
            magnification: "4000%",
            count: "100",
            spawnTime: "36.7s",
            spawnTimeFrames: "1,100f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "20",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "624",
          enemyName: "超翼獣ピヨルーツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1770000,
            ap: 20000,
            dps: 6741.57,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 6,
            money: 1500,
            freq: 89,
            foreswing: 22,
            backswing: 23,
            tba: 34
          },
          stageStats: {
            actualHp: 1770000,
            actualAp: 20000,
            actualDps: 6741.57,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 33,
                power: 150
            },
            "immune-slow": {
                enabled: true
            },
            "immune-weaken": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "5",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "23.3-30.0s",
            delayFrames: "700-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "146",
          enemyName: "はぐれたヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 200,
            dps: 400.0,
            speed: 20,
            range: 220,
            rangeType: "範囲",
            kbLevel: 1,
            money: 75,
            freq: 15,
            foreswing: 10,
            backswing: 5,
            tba: 0
          },
          stageStats: {
            actualHp: 1500,
            actualAp: 600,
            actualDps: 1200.0,
            magnification: "300%",
            count: "0",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        }]
    },
    {
      stageId: 7,
      stageName: "真人類創生",
      baseHp: 2000000,
      width: 5500,
      enemyLimit: 10,
      requiredCost: 250,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 110, 120, 100],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "157",
          treasureName: "プラチナチケットの欠片",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "608",
          enemyName: "ちびわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgICAgIdHR00NDRTU1NlZWV1dXWMjIyhoaGzs7PGxsbX19fi4uLt7e34+Pj///9Al7TBAAAAIHRSTlMABxEfR11vk6Sxvs7r9IIx3f///////////////////6VVouAAAAPOSURBVFiFlVeLkqsgDN2qba1YNYLyUvj/v7wJbrs+oPWemd0pjjmGcPLg5+cbLnd2/frSB+QVQLVeP6r8f+zbDgCeb5OsqQFu/2F/fQIMAM1rSXRQnre/AfTaC+gutMofaD3gKjtr36C99V4DFLgq0HtuaNWet+eT937u4R5WIJ33FuDkqZD9jBbeD8DIfdzNQtd8N0ZcAcTsAxQ86/fK8XMExRO/aLWSUmlFsRfGaK2NMZw29N2+hjS64pt5OLAFfR9heH45B5IPCPTd2GmepwUWF/TfaIE+fJTznfQy+TTkNj12uKB9bz6YI8ZPWijpwNxnAjxKdknYB/l8Nl+UkYjj9Ve+X5DUc4b5+mX/AajneFXAAMoT9s4lEqLAAJ6wT2fU49wGkgT5E8ZT9qkY4BHGTkAPar10cpgSBBXwiD0l85pBktKiBIkdCEqN1XogqUQJWgAdIcAvbp6bHlTcAyziNkLgpFDbB87HdXCH/pUFRozaxjLK6UEM0noOVdHu86kB/rIRoRjx445GfMpxS+EF1h4IXu9pHirZQZau55PzBkYdShvLUgTezVbJ8ShLGaokt362Vu5T8h6VgVd8zWPVMOp3h9gW+HLtAf0ZhW+a0B+jELtGvSbwkxJ9yG25UdEaS8+ME1gRgkjdUCc9UL+zRlbelwN9/BGgXIHjXl3YKZdKaa0CNCH8Gnuo8yX4v56sCIyQ789OPNnjghovNLaUdKDxZAyuRhrcs2NN8LzFNoySKDYebIDqm/DYrZ3sAkynMs9fIsI6qGnL7MYSBVHsn08bBV2pDKnFxSgBRnFXJswyNK0J/Kx4igCPe1fq9WpyDASLVG2fJNjWA4xqvcoiLGTi5WqKYJfWWwLqRvQF6jbfPXALwXoLPxlbBrg5QYAFdPTzAoeYnd4EMQxkONBIHg+i5WFSeoHTP5xxbut69h7JYgTyk4zfgWxY3VXPmBLdrLA0SRwXFf1A4G858sOEkV1oNkiVjuPGYlN/eba5E8bIlJR3x/HC+cS8NcTGLLrfcGmWlKPCSacWIXDzJCE6MYcb0mvG5YhwcFyI4Q+CnkJqWG2SxWePxN2NhqRhwA/gVwHqB6Esy0fJwqOQscMo0jc3rG8DaRfFazZVow0pRx1RUwDT9y7s0I7qE/3fvIWbM4Z8H6ggpe8sRbgnoijFrmvkNWBbZqgV7ImpOfeS5eEcaiyPWHbL+xtN04Q7SINXCWzcRxFesvZ6u5cPxj5ddZC6rgN1c23zTRiK+2fDI57lbtrO2uLaoA8VY11Xx9F1jFUVK5tb0b5k8A+gTf75RoLiBAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 2000,
            ap: 100,
            dps: 63.83,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 47,
            foreswing: 8,
            backswing: 24,
            tba: 20
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 500,
            actualDps: 319.15,
            magnification: "500%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
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
          enemyId: "037",
          enemyName: "まゆげどり",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 10000,
            ap: 3000,
            dps: 775.86,
            speed: 14,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 116,
            foreswing: 44,
            backswing: 72,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 36000,
            actualDps: 9310.32,
            magnification: "1200%",
            count: "8",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "407",
          enemyName: "古代わんこ",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 75000,
            ap: 12000,
            dps: 8571.43,
            speed: 20,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 42,
            foreswing: 4,
            backswing: 38,
            tba: 15
          },
          stageStats: {
            actualHp: 112500,
            actualAp: 18000,
            actualDps: 12857.15,
            magnification: "150%",
            count: "15",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 35,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "037",
          enemyName: "まゆげどり",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 10000,
            ap: 3000,
            dps: 775.86,
            speed: 14,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 116,
            foreswing: 44,
            backswing: 72,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 36000,
            actualDps: 9310.32,
            magnification: "1200%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "66.7-70.0s",
            delayFrames: "2,000-2,100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "3",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "4",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "603",
          enemyName: "野生のわんこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 55000,
            ap: 16500,
            dps: 10531.91,
            speed: 25,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 47,
            foreswing: 8,
            backswing: 3,
            tba: 20
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 33000,
            actualDps: 21063.82,
            magnification: "200%",
            count: "4",
            spawnTime: "150.0s",
            spawnTimeFrames: "4,500f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "survive": {
                chance: 30
            },
            "immune-surge": {
                enabled: true
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "407",
          enemyName: "古代わんこ",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 75000,
            ap: 12000,
            dps: 8571.43,
            speed: 20,
            range: 120,
            rangeType: "範囲",
            kbLevel: 3,
            money: 100,
            freq: 42,
            foreswing: 4,
            backswing: 38,
            tba: 15
          },
          stageStats: {
            actualHp: 112500,
            actualAp: 18000,
            actualDps: 12857.15,
            magnification: "150%",
            count: "3",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "curse": {
                chance: 35,
                duration_f: 100,
                duration_s: 3.33
            }
          }
        },
        {
          enemyId: "605",
          enemyName: "超竜獣オウルハズク",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 1850000,
            ap: 36600,
            dps: 6905.66,
            speed: 8,
            range: 480,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2500,
            freq: 159,
            foreswing: 50,
            backswing: 56,
            tba: 55
          },
          stageStats: {
            actualHp: 1850000,
            actualAp: 36600,
            actualDps: 6905.66,
            magnification: "100%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 330,
                ld_range: [330, 1060]
            },
            "immune-surge": {
                enabled: true
            },
            "surge": {
                chance: 20,
                distance_start: 400,
                distance_end: 1200,
                level: 1
            },
            "behemoth": {
                enabled: true
            }
          }
        },
        {
          enemyId: "628",
          enemyName: "超猿獣ルーザ",
          icon: "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",
          traits: ["古"],
          baseStats: {
            hp: 2500000,
            ap: 90000,
            dps: 11065.57,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 4,
            money: 5555,
            freq: 244,
            foreswing: 60,
            backswing: 35,
            tba: 89
          },
          stageStats: {
            actualHp: 2500000,
            actualAp: 90000,
            actualDps: 11065.57,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [45000, 45000],
                timings: [60, 67]
            },
            "omni-strike": {
                standing_range: 400,
                omni_range: [-400, 400]
            },
            "immune-waves": {
                enabled: true
            },
            "curse": {
                chance: 100,
                duration_f: 300,
                duration_s: 10.0
            },
            "behemoth": {
                enabled: true
            }
          }
        }]
    }
  ]
} as const;

export default e13047Data;

