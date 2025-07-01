// Stage 1350 Data
import type { StageData } from '../../app/stage/types';

export const e1350Data: StageData = {
  eventId: 1350,
  eventName: "極悪のネコ降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 350,
  stages: [
    {
      stageId: 0,
      stageName: "世紀末 超極ムズ",
      baseHp: 2500000,
      width: 5000,
      enemyLimit: 7,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10630",
          treasureName: "洗脳されしネコモヒカンへの進化権(洗脳されしネコの第3形態)",
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
            count: "7",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            actualHp: 27000,
            actualAp: 13200,
            actualDps: 10702.68,
            magnification: "600%",
            count: "0",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "33.3-40.0s",
            delayFrames: "1,000-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "553",
          enemyName: "インフェルにょろ",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 8200,
            ap: 2800,
            dps: 2270.27,
            speed: 12,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 120,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 49200,
            actualAp: 16800,
            actualDps: 13621.62,
            magnification: "600%",
            count: "6",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
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
            actualHp: 15000,
            actualAp: 15000,
            actualDps: 8653.86,
            magnification: "600%",
            count: "8",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 15000,
            actualAp: 15000,
            actualDps: 8653.86,
            magnification: "600%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "26.7-33.3s",
            delayFrames: "800-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "557",
          enemyName: "悪魔ベヒモッス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgIICw4JDxILERUPGR8RHCMTICgWIy0XJjAcLToeM0EiOkk0OSImP1AoQ1YsSFxRThMwUWgyVW01WnM5YXw+aYZBbYxDcpFFdphIe55MgaVOhKlPh61RirJTjbVXk71ZmcNbm8ZeoMxfoc5go9FhptVjqNdkq9vGqwFnsOFrt+v///+uSDszAAAAQHRSTlMABw8XJS07TltkcHyN7Zuvz974vf/G/dv/5Ov/8f/+//////////////////////////////////////////8A6ssX6gAABNdJREFUWIXtVmtzokoQTUzURFk10SiKwCKLzMDwHJjnZu///1d3EEE0mtTW/XI/pKu0dKDPnD7d0z13//xHu/sG+Ab4Bvi/AHxqvaH2tt4oW02eHj5/9Zo9aGsP5SUlhODE386fe3/n/7SCRHKq/CnDCif319rjX/iPbSyrzZU/QSgOi4LmYDv5DOJ+MOi3kY53rHYnhKEo23tpGuY4hZvxJwBT3dq8acMq1JHN2NGfYlCEKM1JGsUJwf78NomHNWE4dNdaf2i1/oSlUKmQxTQG/h5iEq8HNxFGvmRCsth+DeQJIAMkR3GCKcZZiLMsXd3k8LCp3CgTqbUreBMCAXHhex6kEIYFTbMimt+kMEnqjSkDZizaGPZ5AfZ+GXmgREFOpPd8xffxaTydz4A4IsjEgk0eWLRPCdpn2MfY3/thWa4+1NS9tvVQlDi+aJLHKQzbRMbKC2OSE7j3FUTpjy78e3NAJWPSQW32CeV50ajAMPRDTEURAAUAi+jtAmAKD1VXWrj171hZfVLoA5QVigguI2Sdn61nt67aqwCswJUujOQR9H0AwxD4hX8m4/2qqKVTAOUlAkt//kwPjxmjRR4jhBIikdYFeNrXBOgVBlR4v397rbSMMi4EF9m0CzDDx7JjVswuETj69Stqy5KUFCdJnOKuiprfFJ3wXflRgyxjnX9xECcpAOv71n/oneLGRvflxudiiQspym2bht4mALxBEIHJyg8I56IwHCP8bvfbAJAHefuUX1HhAgB4ALjxftgSkLuwBSDCRl8AkJTKd9VkmmIe+n86ALQw8efuVUVlKBNB09pmzk5HLQDLTfIFAUJRAII0bCpp9DyYoFbEjwDX4KjgLO5U0vgc4ILvjTjyTlfSUFeDorsnTzpFeEamqEvx0Fi06JQF7oT89CIt7ZOm6ix1+JTLp4defzy9CIHw0JKnSpKeJ+uNqSjTPM7bQ0UKw9pu9MWhGsZQdDY1YdNMVR8yMS3JYToCw7R022sDLAzb1BfapQaVOnrSMJWup/pcknLCd4uFsXN1O1Doh3lLjeVicayFSdwBUMfB4rVkMjDUhrT0sIwXlbm27rwLwSoa3HydNhOqK2Ilj6HaA2OlDI28esBjq3QPAEvHMj3PMarK5dv2NN2Nu8JXTcFRu3ABjEQcORn6ojZdV8St6m2+PY2Gp2aaNDo6FoxD28obYjJcLhpbLupSo+sTwMAVZzVCWbCznYCfUEVutQhurXW3KT5aZxocpis7i0pJgmwVxlJfRnX/lbBz0eit6VcnUGFSkmclsg9k1fvb7ohf4Vtn5szEe6LXGacSnM2FSVQT/qKXYc84Jpzh8/H8XKeB8s/6KcWmj4/+1Bp2/e/6u2oa8BCKswNX9+fDkvpiiXW89onSuriq9VaFkoWjhZ3LJnlqhMXVKlUXEjXLOOPELNSEUHeoaPPhgqIFlbgc6ct9gktWGcGxUa1yaHkwCFEShYYnpcChM+9f+t8NdlXRqtz7s5lh2cosY/kyq1YZy5z51HBs23FNB9hv2tVL3luheArxnmt9T83CLMPVPWrNq9U/cPjg/pHvyozxx81rG+0CqCzwZiMdBsqQPRmNVvZOmWtMxsvdwZaDxxs39v5kPpu9vLz8+PH642ivr52f6ks9nc3mk+GF57/Mu503Pbat1AAAAABJRU5ErkJggg==",
          traits: ["悪"],
          baseStats: {
            hp: 380000,
            ap: 13600,
            dps: 2205.41,
            speed: 5,
            range: 380,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 185,
            foreswing: 6,
            backswing: 10,
            tba: 90
          },
          stageStats: {
            actualHp: 760000,
            actualAp: 27200,
            actualDps: 4410.82,
            magnification: "200%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "113.3-120.0s",
            delayFrames: "3,400-3,600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "558",
          enemyName: "アックマ閣下",
          icon: "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",
          traits: ["悪"],
          baseStats: {
            hp: 75000,
            ap: 15000,
            dps: 6521.74,
            speed: 8,
            range: 345,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1200,
            freq: 69,
            foreswing: 6,
            backswing: 10,
            tba: 32
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 30000,
            actualDps: 13043.48,
            magnification: "200%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "73.3-80.0s",
            delayFrames: "2,200-2,400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "660",
          enemyName: "極悪なネコモヒカン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgIJCw0SEhIVEQ4NFh0RHCQSICkhISEhISEdLzstLCwiPU87OTcpSmEpU29NSklRUVE4X3lcXFw9aIZFdJRwb25JfqJOhqtTjLKHfXdXlb6MjItcnMdeoMxhpNJjqNdmrd1qs+Wnp6Ztue1zw/iysbG8vLzLysrV1dTd3d3k4+Hs7Oz09PT7+/v///8igFDtAAAAQHRSTlMAJzxRXmp1lKHNCRWH4/j/tO7/yv//bf+q///9//7///61////////////////////////////////////////9umcZwAABYdJREFUWIWdV9miokgMdVdUCNSVoUW2QVYFCpB2V/7/r7oKcJuLcnvygAjk1ElykoJW66NN6KE3HH9+6oMN+VZ70Fuw7f8LMEFMH9hgx45b097fuba7ff5r1HUcWBqrfNFuAfqrQEbIWMzUYG5cYbN38mW/vwr6fwPQF7b5OThdt/kqP2wuCNR8M/q5+6Q3YCDIqV3z/JwfVvs8X0x/7N8VkOosjUv+bA5MfuwP6qFa/GH7OQx/CtBh0fJcuh135zvEccn/EGCw2OwL+ntjqc5vWAdnwbRaTaXsd8ih96WWPluS+4PhFGDXw2bW6fCdBgAOpt1ul1ndaBtLQr2isFcXS9SkaWa+AKRuHrkz9tUJpXF2mObw88s9f8XxUAGcDGM555qbindIuHS1QDWc/YNJfgmWM2jop86UNBCozoZw2IOTH54BCi01iLk7U+dqcCxKeDkGwYsSr5tgn88/i3Eye1nvdHr6c5gzPGMsGtQ8XT48tscXtBVHFND/WIR+t9USnJv+rzB/cj8fD1t20pDCLzTljcMN4AKwegCcdsa/vxj4XMRfR9V4uByRCE852C1abYDPOuafc0bK6IuL+78l224LitT9CNBfPJdtBzgSgxudWa/FSKnUkARmttrcWWwgjDy4lEPlZPS7EEVa01RlIbiPjwCSKEVqvi964SSAF0V2w1BsC09ZWCFPkQCMs0MuXncAZhTrDQC0jx5pAxA1L1ZUQ82P6sLSEShyw1DkHr2znYPux1GE8VqB1VJZpzG2JWA+KrmPbiLaqWCGMY5KszUvpb9x4orc+0IORrC96RaksHKOcUhYVKeEkA7Td1N1ON/m+2IGnUCKK/9ojZMKC4f0BLtIeKfnqbqAIgkg3vxT/Y6V+AAWRYjFN5tDpzdgi2FuoCwuV03c2dGQyvUj8XCC4rIN7LAulwO0DEoBKeG6yp8726pKCYCVYIXKUx1Q3QvLBAXH7YmUHyGw0yoGS9RJIJRM6svaugpMkhShhkOXBdgYoMehHz0sjhLTjCLTztJbWSOXNGpdV4w73AzWKclT9GypAr4PepYk90uSotRrkgc3eXEOMeGPFQANx7p2v2eDVD/fR3L24k+KJ5PAMwByVOBGLfWRWAsw4ewyzpItUWCyBiUmY2EGtomkFJeiJFfrh9u0qFNIMm5T/4RWUwPdBOds0CgScg8Xoq4n0GI1yjG2ZTATIh3ZogXUgOxxZEJS6NQu8oBjaVAbAVgUAJuFDmxERlIU0owVAy4u9UwQ4ixCtQBtKFNgg+e5JPOVHPTZlQIUGcxkkE0rXNfv0h1wqyIVZpX+WDOKDnULCmFxS6oHGIilh0yfQTc5Y6UYdHO9YJd6BUL9FjmQY1rB4hGdzAG/LKYCM2Ig03PfTX16m60dbSOFLGKZqKS/Fq2Sgy1ruq5rNKI4RG5mUX7ctGa2MSaOQjI5AeQsfIySOElSYriiY2USiU9E8K0QY84i1ceY5pCwkKI6C+lwB0/zMg3+C9BDUVJVQdaIlmoBIpPAr31IiCS+AYg4K0eZn5mkEvUANIc2URy22G8hsHKahkULY9c16xAKXZoKaFSp3wCIEqW44pCkv7EofwPAkS0qqSnThJo1WugIYlghROFvjPxX7zh2EctKqBwaqG6oTRgU/66eTy3w4nLZCpJUmLRxlzMJQKoJtTvUmBW9LMOUBRkaSHELPjj0bZPoA8XeF/2c00NPefe6NGFIu2UZyYEC9lrhkCKJkkjFqVkgJ5E0bo0HAmmG9y87XR60MPRl+kbhD9vTfq/X67Y7kLkcuGuRNsGk9/lt7R+Obi7CCJnyaDiiNhxOWVmcDkgfdxo+eTq8wBUdL8I744RPnz2TXn/I8wwjEOO4ZzdOEFiWYXh+OOi97Ix/AIhKaJB1HvlqAAAAAElFTkSuQmCC",
          traits: ["悪"],
          baseStats: {
            hp: 3600000,
            ap: 18000,
            dps: 33750.0,
            speed: 25,
            range: 240,
            rangeType: "範囲",
            kbLevel: 30,
            money: 2000,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 3600000,
            actualAp: 18000,
            actualDps: 33750.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e1350Data;

