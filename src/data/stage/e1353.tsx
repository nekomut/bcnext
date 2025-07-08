// Stage 1353 Data
import type { StageData } from '../../app/stage/types';

export const e1353Data: StageData = {
  eventId: 1353,
  eventName: "極悪のキモネコ降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 353,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "デビストリングス 超極ムズ",
      baseHp: 2500000,
      width: 5000,
      enemyLimit: 15,
      requiredCost: 200,
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
          treasureId: "10655",
          treasureName: "洗脳されしムキあしネコへの進化権(洗脳されしキモネコの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "663",
          enemyName: "極悪なムキあしネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAwMDAwQDAwMDBAQEBAUEBAUEBAUFCAkGCAoGCQoKDxIKERYLERYNFRoNFRsNFRsQGiERHCQRHCMSHCMUISkUISoVIisYJjAZKDQbLDgeMj8fM0IgNkUkPU5CPDkrR1ozU2lPUFI4X3k+aIVEcpFhanA1eadHeJpLfqBneodNhKpQi7RWkbpZl8FcnMheoMxgpNJlq9rEubL///8tv7k7AAAAQHRSTlMACBUiNUBJK8rn/3rZoly+bZT1soj//8ah6dr/q8/+vv/p2P/0///x////////////////////////////////BJX7TgAABMxJREFUWIWdVot2qjoQ9Yk1+Nak2tQ0bRoaDhY4hQIauef//+pOwHuuz6ars5bFIrPZM3seaTS+YVP38MXpfOfxS7un9bWFRj8DeMyH1fUldH4GMNfhdDp1p9HuZwycVVkmWZ5FSeLaHx6Oh2c8p+Fuv9e1bYZfu0/6CKx/fKs5DrXe6l1u/HNdfIXQq9wRGnSP7g0Q9eH98a8U/N/fdb646d+9m7ZbvcVs0P4/iO7MILK9Tt8zAPj9ufdnNwFGreoCf0fzw602Ql6UFPG23EH8QaL3ZUTtiWx0xocvA4RUlbxCxzpD8QbysZt/6VuZe1dfF1VKwiwUhQ7l5vNd6izS91b/FnIOAUhepzUAEur3n0+Q4kykq9Y/kBxA3lKFMQtNFOE/fz4/Sh2iWcviP0SHQMAPBNwWdQ1F75+/4hKA+k0LAKoJdCgQ3m334KN35vPxkVWIz7YIUB84Np2ZAoACWOTBVv+1LNfWlhxBLQ76hPnAvYigCEmy1VUz7OM0LnRxZ6PQHUPiOYuz3TYv92UCbgChsw310qzUOe3ZEEDJZyJ1HEPpQR+VWZKFvmSSB/l2ryP2jVocSRTp0CQgB/J5XEgWRIW5EegAP9kB1gzlOkh1mRcGIIt4lKVpBAH4SYAe7BFwgrJIQt4So2BW+DJOsyJJQFOB6doeAUNImj6KTRHvspQE0JRlEYoMSlG+2WqxsYAeIMjTmptmzIu3YRAn2S4vEMq2yAsmNoAlNwy4TlFQ7osiHrX8MCi2xRaYbQhRUyuAgEGAaE4QjLM8XTWansezVG8hN0hR8WgNATLlmz4mQRJGDBbammI/1CmlQI0zq46O5NgzANLzFTF14wKnSAcEGFDGXmwArkRImGcVkatqG7UFh7HCzIDBTNgasvkM7yMUESnk/CDZXDHzr6FFpQ2gx1k1yTwp/ua7RTcYKVUD2EJwDH1oSO/p6DzQW3lIGgDChK0U7wOMMMb+6RJyPUxMZqErLRvSYZBthbl/WrFNBtWNKwDLQFgKigmGnXjW991XArJgwWynhBdRbwNxXi9DZbJApIVAm9OrAL3lm0RGSGWZSA5juAY4KfmJVByDMoh5lrE84eIKQEfCu6GXOJa2gTT16zJC8ljGB6OggF/wqm0BmG9qAuSY6kia2jLLlt0+ohzsJaj8qWJHS/ChUgZQiLKdVnuyisDzj+XuiuomyONZV6NbnQmUWByHOpR1WEDAOg/vDYAUp0THEh0Sy2z+bUOWiTOp3YOy2LMSGAFZevlYnUTkvdr8G0uJ8JWx7fo+ZJD4VgKNtbia6FE1Y3z7Vmw8w/B8u7ztGBmY17385cyarxyxaH1xjuqaSpTjay6n1jLVqvyHc4QOhMC5damCilCHBOOLchmBjnJp9weqRnCuzqfWBMSR9gyYrWi6Vl103JQjbl1oYM0V1CF9u3zVA0Wy3gbtL8eBY5ItLmN1YDUS9WRS2xE3h7JThQqD5AoBBaFh/wXe3g7kDTFa4rG1hMElLmMFEaUZ1fJ14azprb3QVVIqcjYKa3O9QzczCVTEjYaAEiBmdapFrzuauIvpcDgfj++MDYTHmaimEgGQW4tl6QkuhEf7sxk6N9h1hAopGD9a+Rc2ml9x/c9ms36/P7gbT7snZf4vqZKvQVdFrhAAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 600000,
            ap: 13200,
            dps: 8425.53,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 47,
            foreswing: 8,
            backswing: 4,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 13200,
            actualDps: 8425.53,
            magnification: "100%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 600,
                level: 4
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
            count: "3",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
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
            count: "6",
            spawnTime: "70.0s",
            spawnTimeFrames: "2,100f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
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
            count: "5",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
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
          enemyId: "663",
          enemyName: "極悪なムキあしネコ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 600000,
            ap: 13200,
            dps: 8425.53,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 47,
            foreswing: 8,
            backswing: 4,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 13200,
            actualDps: 8425.53,
            magnification: "100%",
            count: "6",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 600,
                level: 4
            }
          }
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
            count: "1",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
          enemyId: "663",
          enemyName: "極悪なムキあしネコ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 600000,
            ap: 13200,
            dps: 8425.53,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 47,
            foreswing: 8,
            backswing: 4,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 13200,
            actualDps: 8425.53,
            magnification: "100%",
            count: "0",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "23.3-26.7s",
            delayFrames: "700-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 600,
                level: 4
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
            spawnTime: "156.7s",
            spawnTimeFrames: "4,700f",
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
            count: "0",
            spawnTime: "176.7s",
            spawnTimeFrames: "5,300f",
            delay: "53.3-63.3s",
            delayFrames: "1,600-1,900f",
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
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "99%",
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
          enemyId: "663",
          enemyName: "極悪なムキあしネコ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 600000,
            ap: 13200,
            dps: 8425.53,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 47,
            foreswing: 8,
            backswing: 4,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 13200,
            actualDps: 8425.53,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 600,
                level: 4
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
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "50%",
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
          enemyId: "663",
          enemyName: "極悪なムキあしネコ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 600000,
            ap: 13200,
            dps: 8425.53,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 47,
            foreswing: 8,
            backswing: 4,
            tba: 20
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 13200,
            actualDps: 8425.53,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "50%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 600,
                level: 4
            }
          }
        }]
    }
  ]
} as const;

export default e1353Data;

