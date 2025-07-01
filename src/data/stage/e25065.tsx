// Stage 25065 Data
import type { StageData } from '../../app/stage/types';

export const e25065Data: StageData = {
  eventId: 25065,
  eventName: "悪しき本能の秘境",
  typeId: 25,
  typeName: "発掘ステージ",
  prefix: "H",
  mapId: 65,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "秘境の祠 超極ムズ",
      baseHp: 800000,
      width: 5000,
      enemyLimit: 7,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "30167",
          treasureName: "ユニット20167への進化権",
          probability: "8",
          amount: "1",
          times: "-4",
          limitText: "-4"
        },
        {
          treasureId: "30168",
          treasureName: "ユニット20168への進化権",
          probability: "2",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30172",
          treasureName: "ユニット20172への進化権",
          probability: "8",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30173",
          treasureName: "ユニット20173への進化権",
          probability: "2",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30177",
          treasureName: "ユニット20177への進化権",
          probability: "8",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30178",
          treasureName: "ユニット20178への進化権",
          probability: "2",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30157",
          treasureName: "ユニット20157への進化権",
          probability: "4",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30158",
          treasureName: "ユニット20158への進化権",
          probability: "1",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30162",
          treasureName: "ユニット20162への進化権",
          probability: "4",
          amount: "1",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "30163",
          treasureName: "ユニット20163への進化権",
          probability: "1",
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
            actualHp: 18000,
            actualAp: 8800,
            actualDps: 7135.12,
            magnification: "400%",
            count: "8",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 12500,
            actualAp: 12500,
            actualDps: 7211.55,
            magnification: "500%",
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
          enemyId: "555",
          enemyName: "ギルティ・ペン",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 32250,
            ap: 4200,
            dps: 3230.77,
            speed: 10,
            range: 280,
            rangeType: "範囲",
            kbLevel: 3,
            money: 420,
            freq: 39,
            foreswing: 16,
            backswing: 10,
            tba: 12
          },
          stageStats: {
            actualHp: 129000,
            actualAp: 16800,
            actualDps: 12923.08,
            magnification: "400%",
            count: "2",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 18000,
            actualAp: 8800,
            actualDps: 7135.12,
            magnification: "400%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-23.3s",
            delayFrames: "500-700f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "555",
          enemyName: "ギルティ・ペン",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 32250,
            ap: 4200,
            dps: 3230.77,
            speed: 10,
            range: 280,
            rangeType: "範囲",
            kbLevel: 3,
            money: 420,
            freq: 39,
            foreswing: 16,
            backswing: 10,
            tba: 12
          },
          stageStats: {
            actualHp: 129000,
            actualAp: 16800,
            actualDps: 12923.08,
            magnification: "400%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "586",
          enemyName: "ミッドナイトナカイ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 300000,
            ap: 23000,
            dps: 16829.27,
            speed: 25,
            range: 300,
            rangeType: "範囲",
            kbLevel: 20,
            money: 800,
            freq: 41,
            foreswing: 20,
            backswing: 21,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 23000,
            actualDps: 16829.27,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "586",
          enemyName: "ミッドナイトナカイ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 300000,
            ap: 23000,
            dps: 16829.27,
            speed: 25,
            range: 300,
            rangeType: "範囲",
            kbLevel: 20,
            money: 800,
            freq: 41,
            foreswing: 20,
            backswing: 21,
            tba: 0
          },
          stageStats: {
            actualHp: 300000,
            actualAp: 23000,
            actualDps: 16829.27,
            magnification: "100%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "2.0-2.0s",
            delayFrames: "60-60f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "583",
          enemyName: "マデューさん",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 788000,
            ap: 8800,
            dps: 2838.71,
            speed: 6,
            range: 240,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1000,
            freq: 93,
            foreswing: 6,
            backswing: 11,
            tba: 44
          },
          stageStats: {
            actualHp: 1182000,
            actualAp: 13200,
            actualDps: 4258.06,
            magnification: "150%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: true
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
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e25065Data;

