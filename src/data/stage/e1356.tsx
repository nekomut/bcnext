// Stage 1356 Data
import type { StageData } from '../../app/stage/types';

export const e1356Data: StageData = {
  eventId: 1356,
  eventName: "極悪のフィッシュ降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 356,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "漂流恐失 超極ムズ",
      baseHp: 2500000,
      width: 5200,
      enemyLimit: 10,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10685",
          treasureName: "洗脳されしネコ島への進化権(洗脳されしネコフィッシュの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 27000,
            actualAp: 13200,
            actualDps: 10702.68,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
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
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "666",
          enemyName: "極悪なネコ島",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 327000,
            ap: 17750,
            dps: 29583.33,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 327000,
            actualAp: 17750,
            actualDps: 29583.33,
            magnification: "100%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "death-surge": {
                chance: 100,
                distance_start: 250,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "666",
          enemyName: "極悪なネコ島",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 327000,
            ap: 17750,
            dps: 29583.33,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 327000,
            actualAp: 17750,
            actualDps: 29583.33,
            magnification: "100%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "death-surge": {
                chance: 100,
                distance_start: 250,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "666",
          enemyName: "極悪なネコ島",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 327000,
            ap: 17750,
            dps: 29583.33,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 327000,
            actualAp: 17750,
            actualDps: 29583.33,
            magnification: "100%",
            count: "0",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "death-surge": {
                chance: 100,
                distance_start: 250,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "666",
          enemyName: "極悪なネコ島",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 327000,
            ap: 17750,
            dps: 29583.33,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 327000,
            actualAp: 17750,
            actualDps: 29583.33,
            magnification: "100%",
            count: "0",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "death-surge": {
                chance: 100,
                distance_start: 250,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "666",
          enemyName: "極悪なネコ島",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 327000,
            ap: 17750,
            dps: 29583.33,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 327000,
            actualAp: 17750,
            actualDps: 29583.33,
            magnification: "100%",
            count: "0",
            spawnTime: "135.0s",
            spawnTimeFrames: "4,050f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "death-surge": {
                chance: 100,
                distance_start: 250,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "666",
          enemyName: "極悪なネコ島",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 327000,
            ap: 17750,
            dps: 29583.33,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 327000,
            actualAp: 17750,
            actualDps: 29583.33,
            magnification: "100%",
            count: "0",
            spawnTime: "135.7s",
            spawnTimeFrames: "4,070f",
            delay: "80.0-80.0s",
            delayFrames: "2,400-2,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "death-surge": {
                chance: 100,
                distance_start: 250,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "666",
          enemyName: "極悪なネコ島",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 327000,
            ap: 17750,
            dps: 29583.33,
            speed: 6,
            range: 260,
            rangeType: "範囲",
            kbLevel: 1,
            money: 520,
            freq: 18,
            foreswing: 10,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 327000,
            actualAp: 17750,
            actualDps: 29583.33,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-1.3s",
            delayFrames: "20-40f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "death-surge": {
                chance: 100,
                distance_start: 250,
                distance_end: 750,
                level: 1
            }
          }
        },
        {
          enemyId: "054",
          enemyName: "超メタルカバちゃん",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 8000,
            ap: 3000,
            dps: 1914.89,
            speed: 18,
            range: 170,
            rangeType: "範囲",
            kbLevel: 16,
            money: 999,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 9000,
            actualDps: 5744.67,
            magnification: "300%",
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
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 13500,
            actualAp: 6600,
            actualDps: 5351.34,
            magnification: "300%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "aku-shield": {
                hp: 4500
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
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "552",
          enemyName: "デビルワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAABAAECAAACAAACAAACAAACAAACAAACAAABAQEBAQEBAQEDAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAAEAAAEAQAEAgIDAwMFAwQDBAUEBQYEBgcJBQIFBwkFBwkFCAkHBwgFCAsICQoMCAYHCg0JDRAMDAwLEBMKEhcLEhcOExgNFRoTExMOFhwPGCAWFhYQGiARHCMTHiYcHBwVISoWJC4hISEZJzMlJSUZKjYcLDkdLzweMT0fNEIhNkUjOUgkPEs3NjYlPU4mP1AoQFE9PT0oRFcqRlkrSFwsSl4vTWQuT2UxUmowVW5NTU00Vm4zV3E1WXI2WnU4W3g4Xnc5XnxYWFg6YX06ZIA8ZYI9aIU/Zog+aYdgYGA/aohBao1AbIpBbo1DbpJCcI9mZmZDcpFFcpVFdJVFdphHdZxHeJlKeKFJe51IfJ9Le6RJf6NNfaZMgKVMgqZ3dnRNg6dPgatOhKlOhapOhqtQh69RirFTjLNUj7dVkLlWkrtXk71YlsBZl8JamcRbmsVam8dbnMhdncldoM1doM1eoc5eotBfo9FfpNJgpdNhpNNhptRip9ZjqNdiqdlkqtlkq9tlrNxmrd1nq+Cfn59nsOFps+Vqtumrq6u2trbAwMDHx8fLy8vX19fa2tne3t7h4eHo6Oju7u719fX7+/v///8u6qLhAAABAHRSTlMABQoMDxEWGh4gIiUoKy8yNj9GTlBYZGdpbHBzd32IjZidoqissbTBxMnO0Nba5+rr7e/y+Pz/ACw4PkpUXmKDipGVmqStub3Hy+P2/6YABhM9W5//At/5AAkPGx4mNDdBbXK12N7m6/H8Vv/////k/8//9f/i/+z/////////9v/////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD///////////////////////////////////////////8ArzMWeAAABu1JREFUWIXtlmlYE0cYx4O3qAh4XyiIF5dYYIIoIoIosIJHBOpdz9oFRaGKSUmhaIJQpJwigqAWRJRDHqpS0CJURAWkIIcQVpKQ3Q3YYmtbW+21ByG7JPilX/0/T/bZzc7/N+87O/POcP79n+K8B7wHvAfQgEHl5Udqy+6P/Ght3W1G3HoNblBrrIGOCrBxH3zgQ8q/cT8Mb/Lz43L0Jg5/p9thtrnv4SEcDpfsdA/Mgw7ak35n4o63mgRMCjzsrDuYe+TUhcKUkkQnOoAde2EIAHg34XeCeQDw1pAAnSPFGcdnDdNmXz9zcURua7f85FgqgK0ehImw7SFQB8lbnjs1Bk65L+tizPQ0/VN9BLntuFRR60NkQPTqBgMKsM/bby2N2utNAibEKVBZts2EAXb9NQHpT3EEQbAiC50OQrvI+AlBB7f13UL7t5AvDCOR553KiqApLP80G3G5Uk74Efya1VCynTHVKyF4uQsdC/TxevLFxOjO5wjSU8GfpLYPMQFpEgyhpKixG08023kY4lEjB8MHPGEeJbtFm7Z3dBilkYEiPWW++ir/iAWBhagUUUk8t2Onm10oH4DAr6IDAEOBguOO46zvomSr59hl875vMco8vKK7345gBWCeTUxpc3NpRlR43KUMoRoQkyg86JEie06165TGGtEf31xc1/JMDUDQIn6mHJfKMCVSmSBMa7zEVwFyEm+lBDYqVO3qgkaR+S+KKixpohNorSWvsqc3UVUbvCEjurEphfYLm9IlDf55yjYJHUP3ZRMOR2d1aFJOXWMbhkoQeUG9jHzRzAhHrryf06nMo4LIltQqkIjU7tYyohccR3skn+tyZoBg/smgIFFquay7+oqS9EgkCFMKRIL0PAgHQNwuJQIVncPRouqexrz0xHPFabM4M1wmG44brevgZB3flFbZqSA+Zls7m0CN7FMReEIlJk5WvqjPvimYP2WZo4uHe/9U6BjpIhSIhAk3ZfK7zzT8BKHuFuWXiVNeFKcJfQwp17DxakBHh/PCacuNbNOaC+RaAIiMHlhZZNJFq9XzHDSWEgHYTPzsfQMulKMMn6QLx9QPMrQnJthdaznooGUSnxjB6lhel5zXP0m7niRdjPl0hDZ/H8DbMrsylxkAIosB4I7qHywBgGOuXC53UICubWnPgBGIAqBElQSWCILDTPzIwjRQXBqwFH6gYPvl1Qk5/Q/S5iuV8a5+Xl5cjSi8aIAD/GgAAJGj/SmhGN77c7wJZR+I6IvAwL9G2zeUyDByuZclR8VkRK51XMrVgqABu/xr+wFSFCOt1Kysy0mMjhT7i9KSQ6GAQGC8WZMwAICWh4tjU1sQ5An1WF1SUlIWEdbc21sBLrRcBMuZMSx31QKQ/pCZHBffhD3IoicwiqIvygUhkeJDkQ3dXdFuTIAJcFQDDtX1pSB/2Stp6sSSc/H+kUAbs5JSCtrlCJ5szgDoWAJPPU1A06XY4LA2NKpAyfggOIZjnURRjzJlAMb4ArBwyEAAeocfnVmOYHFJeLdSiVPCMIz8Yb2VASsYAEey1sxhACQoUUEQSWuXEkXQUhCbc/lydm5efn5+QWFxcVEhIdHiEQzAHABsrcBk1SDW97beYZQ0RbEQnDhxgtxWYB6xv/AgiAfM1BOBALjZTTWfYODQBzhWfik8ijmH8DbRw79+DQHgzOs/rwNw9vUf5029uUzA/OmcaW7qQQwlireSScDun3lznUzzlzeniLX49rdj9lwWgNiKOe5GKgAE+Pyn7GncLjhNFfXTX5LXr884a1nL42ym9C0mYhvOZAVArEABc3cDc4dqKyfLfI2GqSJoQDQBX5yn3Wc/gzZ4saQiTLCxmq4/bqI7BFLyK9grupXYHH/65xSVxd/fgk/8vNhj0KfRc6kjABSYEcuOAJFHglOvfqfG8eHbVwGrtNUzai2MmTRzuhOIiChgj4Hsqjr/o0dPANs1BoMASO2AAgQtUnYEGVfLqqrufVd2+5sbeTnZOZmCJVrLMg3YAINkdgCaygOau0o/YIRNcHXPQMeP7McCoK8NwKEPtzNDCutramprax7V1DwiVV1dXfPk8b2q7x9X3S66ceNa1oVQS62nTBVhHcSDYH9/GA4gL4R4EGseATsLLWdMBmK7XWZtFgiKKQ1Z6eCwgdIyH9H9ijDfQyXlfJedO/WGvMNPHnFNE1/Eua4IS7dSrzkD3/t3PZeZZ93x3Ob1zvP+5uG64w2cQ1IhVyM7yMPZxZiUy5xVs49HiQ5Pnncs/Ij9KK0rgZbOSgtP6kgMqPMlM3UIIp945PWDRSsGJYwxnDxztrGp24JF5haWPh5Wi62XLFlibb3YysPH0sJs7YL56+YYzdhoMJJl+g+te/f/LMSjVgAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 4500,
            ap: 2200,
            dps: 1783.78,
            speed: 25,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 37,
            foreswing: 8,
            backswing: 10,
            tba: 15
          },
          stageStats: {
            actualHp: 4500,
            actualAp: 2200,
            actualDps: 1783.78,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "aku-shield": {
                hp: 4500
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
            count: "1",
            spawnTime: "250.0s",
            spawnTimeFrames: "7,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "2",
            spawnTime: "316.7s",
            spawnTimeFrames: "9,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            spawnTime: "400.0s",
            spawnTimeFrames: "12,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "059",
          enemyName: "メタルゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgICAgIDAwMEBAQEBAQHBwcHBwcICAgJCQkKCgkLCwsNDQ0PDw8REhEVFRUaGhoaGhofHx8gICAnJycoKCguLi4vLy8BWwA4ODg5OTk8PDxIS0dLS0sscisKlwldXV1gYGBpaWlzc3N0dHQEzgN7e3t9fX2FhYWJiYmRkZGdnZ2mpqawsLCzs7O6urrDw8PIyMjOzs7W1tbg4ODr6+vz8/P4+Pj9/f3///////9x5rvBAAAAQHRSTlMABg0c2hMly4s+5/P9MapXb0livX2L0e/+oMOtS9v+4L3+1P/+/+n///H//tf/6f7////q/////////////wD/KAcdYAAAA4ZJREFUWIXtVlt7qjgULeKl1OLdDuqMCjYEy4kJOQmXkAz//19NwOqxPVLpzMs8uJ78wLWy985KFg9//0c83AXuAneBu8Bd4P8k0BhGp2uPx2PbbBnNSRf07mTl/TgcfG85H3a/L2FOtnuWCSEyTsLNdNj65vLWwqeZyNIkSSiju9e/Rp1vCVjLgMUaFCFKENy97TYz8xt8expyTec8eH11QUDQDsX7hdW4DePRLdfnUbR7e9txwYHLlSDevKmEOcUxp5yGAOx2kRTQWSeFihHejJopjDdRzHAIEM+SJFcyoS5KBQky5lmNOpi5YQgh1tziCAFLMCnxqIkhOgMXhDST7/Q8z2mgNzSThaKLJj2YWy5O7EKTQgS5ev/dSMD2suICKcKpPPJVNG8iYPnn5iuaPJWj5GHSgG9M9rK4DuGPb9O7kymqE8i87g16y55t926kagSS1ddHyhzPPZJwkNTwC/blDDvDlR9lSlGc/xsBw14cuNC1KyHqOiji+haM8ZaktcRfQ6w7C62hh0CYF7Ju/hWUxDU9GEOPQSeSGWFfV5F6dg2f51EkmOvU7uAR+f6qFe0lldqw6dpB9QM8NoFn1wYwR7nSxDQgN/iFIrMrF8LYSwWNlZK5vMVXUSVgdDoXaWUuohyvqeQ4+5quIQ+jkjFarRY6ro470hr5QnKWJ+t1fFNA+NoInbnPYkb8KvIMc+QnunSlmPvZwr/1o4p4q+PF3tAkzbIkCv3lbLbaJwmKtH/y9GwilTHKsyueknimy+4uISaRTh7OMFhHIkcuuZyeKlIIIAD4d2unlZWN8QvQr8voY2Ggr/0s/Vh7jgHhBEPAPhShChEOqsNkezpwWRl+EcRXCo0h45xxgsBHY0viLisnd5cBDKvwZQH5LKCKHJE0KaOxrO/yDQMUryxDZ/+LGxK9BsUBgJ9mpfk0qPjvDf5anwOiI8ab6AJCpufnbzYv08HUJ2k1wdM/MwLZUYCTcwtKXzORi4V2K/f00SFk7y0mltXtdExr7u0xO9chQkjTiq6zOTo9VYICx4GE/fz5Y/HQmqxWM+t8N7XGvednF1Xe0F9EQYgQRggFEMVCx2L5kUQJeK7wMvvT7lRH4fJI2YN2v//sOM567QIQllwIQ4xxGAQBAO7acSp2v98eWNfC2TCt4ehxMO312u3209MfJ/T7/acS+mmvNx08joaWWfL/AY7epcqagI8LAAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 22000,
            ap: 6699,
            dps: 11165.0,
            speed: 10,
            range: 150,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1155,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 5
          },
          stageStats: {
            actualHp: 66000,
            actualAp: 20097,
            actualDps: 33495.0,
            magnification: "300%",
            count: "5",
            spawnTime: "500.0s",
            spawnTimeFrames: "15,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e1356Data;

