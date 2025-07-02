// Stage 1057 Data
import type { StageData } from '../../app/stage/types';

export const e1057Data: StageData = {
  eventId: 1057,
  eventName: "開眼のフィーバー襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 57,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "フィーバー進化への道 激ムズ",
      baseHp: 440000,
      width: 4800,
      enemyLimit: 13,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10023",
          treasureName: "ネコアミーゴへの進化権(ネコフィーバーの第3形態)",
          probability: "5",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "3",
            spawnTime: "0.3s",
            spawnTimeFrames: "10f",
            delay: "0.7-4.0s",
            delayFrames: "20-120f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEBAQACAQADAQECAgIDAgEEAgEEAwEFAwEFBAIGBgMHBQMNBwQRBgQOCQgOCgUUDgklDQgwDQYgHxZYCAAiIxMnIgwwJBxQHg0yLRltGgw3NhuVEwYUXwJHPyNSQRjFEwKGMRdXRzk6XxsDgwJoUiBvUSftGQdcWVdYeSptamiBbiWdc0+Eg4KijQWojkydlY/AnFrPsgKqqqnOpmXYtWTnxwLAwMD71gLW1tXq6ur39/f///////8PqlvxAAAAQHRSTlMACRU6IzD7Q2NNWHLAkdywzICg7f7+z9q0xf7y/////tj////+///u//////7+/v/+/v7//////////////wD/M3tbBgAABVtJREFUWIXdl3t7qjgQh4tAuYPcqoYEDdJCOQQFxS2Lrt//W+1E7cXWWs/Z/3YenidBmJffJDNJvPvnP9rd/wVwd9kk3fU8y5AvP/0ZIHtZBUYd8c8AkpetNpvNapV50h8B9Fm92RwIkSH8AWDgsc0JUE0uDcNPAGVUvwJWmTv4bYBgHEbgJGF4QcIPAMk5RQCAuo7Ur6PwA+AYwYpfAMitrzFcBwhqtOLRn6wef53JHwAurdivk7FqNfuaTNcBAyt6fHykhBt0fs203wV4EU1TjBFYUdDHSP09wEBxEF6wmE6nU5wvcux/TcZrAEEf+nFVzekjndMphh7yxM+Ea4CBV6Zpk5MpjmNMyLxqCt/5PA9XAII46xqCECFpnucpwfMcFZEu3AIQBpKs6FZUliQkhJIUjJIgIE3pyQPhOkAQJM2wxpNZ5FNW1XVdkZBBU7M8DFPqm56hi5LwDUCQFMOb2BGroXYCuvoLrMaYbXinQgiAVR76o7GlikclZwBBMsazrK4JqqACGMY5r4I0TjC/rzBvVyuGSFWxbOSpXMdHgCA6PltB8tMYQ5uDIxAq/PwcQ1vTBFrgoBiEQGGwyFQHZwBxnBGUc0CSYMYdDk38/PyMq0Ob0BW0Cap5ZeUkn7nSR4AR1TnIrlc5d01RAh6YYmieY5pyDoDy+BkAIIQiAiuEewbwGY+TVvzlOAhiMBQizC0McJyAMAIBcQUMxxDfX9kZQPLCHIRyp/kccoeGRdMerVmUZQE/oXvgxIjlOElovakn4tksiGYQBPA8X67XLy/rvOx3u67b7vf73X633W77vk0JRSgIQQeMM/Nd4XwaFccPArp8+Zvbsuj3+y4l7f7VtqAlXa6XOcL8M9S3pE+JJEiqZ7Oj/zpvdwAIw+aggFsbhu0CHoM4FATIdqWvqSwM9HG2hABeliVo322bhjdt33E5hHR9sQb6Cwt8Rx9crgVJcyEfGW12J+W77a4pyn7LB2S3LZdAXy9nlvw1ld+KkZfT6C32vulbsuia/kBraJbNxq42uFLOguZNxqPuDQBTuCiKRX8cCFNV5G+r8eQ/mVdV2r6F0INzefLft97ZgnAJIHkwzfO06F8l7JpFW/avfdM1FOE6wEG8gsv3BOjL4lXPtgxwNtGvhgC7QY7yl9Vi+zYNx3zk1vFqqMbyNYCgZuvlcsnKNydeEtuTAApVWr1vURdnQRovYTlCxQmw66CU2u0hhi5d85VqplwFCPoIitgfvabSrm+7o/92QUHasp5cDQFGQR2S1DFm7zN57GwbP0BQbM37QeEyADTMmKcYs6Z/RRyELCaujc8i+HZnksZsZKjWpDjFzt2bzNG0UYp8U7+eB4cgLJbatj20w2LRdn3ftYs0cgzRzTJPlz+k4nchDNwsDWNcRjgI+c5WhPdh4dvejH06LX4L0Jyhn8zbHNbRoizLhgRFA2sr+3xY/BYgK+pDMu9YgsMSKrGI40UTxwGdaMKNAFnngAoUNClcB0ASmJp0G0CSZe0hQWUZ46KAE0KK4rKdJw+6dDtA8R6coef4sB8wxmhAyih+0CTptjGQZFHUdEUXFTNn00cgRJw2VOVbAeLBFFG2IvL0BMe0kapriqbI8m0AEKAoCmiQDTt84jZSFY68ETAAd11VNU3XVTOE7z9NTQ2YGkCkmwDwKjhrugEF4RNyPzJd8NUNVVNuAcDGAJ9WDRVMV+0itV3D0DUNftG12xTormuBGSpIcKLQhjtggL9qiD8c8w4muZ5jmo7jWeDp+cS24L+nBZfhWsrdDQDRGdrchkPThJJOfcccDk/36i0KlKF//8HC965t6hcU/AuUJdNZ/diiFgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.7-4.0s",
            delayFrames: "20-120f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "3",
            spawnTime: "32.0s",
            spawnTimeFrames: "960f",
            delay: "0.7-4.0s",
            delayFrames: "20-120f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEBAQACAQADAQECAgIDAgEEAgEEAwEFAwEFBAIGBgMHBQMNBwQRBgQOCQgOCgUUDgklDQgwDQYgHxZYCAAiIxMnIgwwJBxQHg0yLRltGgw3NhuVEwYUXwJHPyNSQRjFEwKGMRdXRzk6XxsDgwJoUiBvUSftGQdcWVdYeSptamiBbiWdc0+Eg4KijQWojkydlY/AnFrPsgKqqqnOpmXYtWTnxwLAwMD71gLW1tXq6ur39/f///////8PqlvxAAAAQHRSTlMACRU6IzD7Q2NNWHLAkdywzICg7f7+z9q0xf7y/////tj////+///u//////7+/v/+/v7//////////////wD/M3tbBgAABVtJREFUWIXdl3t7qjgQh4tAuYPcqoYEDdJCOQQFxS2Lrt//W+1E7cXWWs/Z/3YenidBmJffJDNJvPvnP9rd/wVwd9kk3fU8y5AvP/0ZIHtZBUYd8c8AkpetNpvNapV50h8B9Fm92RwIkSH8AWDgsc0JUE0uDcNPAGVUvwJWmTv4bYBgHEbgJGF4QcIPAMk5RQCAuo7Ur6PwA+AYwYpfAMitrzFcBwhqtOLRn6wef53JHwAurdivk7FqNfuaTNcBAyt6fHykhBt0fs203wV4EU1TjBFYUdDHSP09wEBxEF6wmE6nU5wvcux/TcZrAEEf+nFVzekjndMphh7yxM+Ea4CBV6Zpk5MpjmNMyLxqCt/5PA9XAII46xqCECFpnucpwfMcFZEu3AIQBpKs6FZUliQkhJIUjJIgIE3pyQPhOkAQJM2wxpNZ5FNW1XVdkZBBU7M8DFPqm56hi5LwDUCQFMOb2BGroXYCuvoLrMaYbXinQgiAVR76o7GlikclZwBBMsazrK4JqqACGMY5r4I0TjC/rzBvVyuGSFWxbOSpXMdHgCA6PltB8tMYQ5uDIxAq/PwcQ1vTBFrgoBiEQGGwyFQHZwBxnBGUc0CSYMYdDk38/PyMq0Ob0BW0Cap5ZeUkn7nSR4AR1TnIrlc5d01RAh6YYmieY5pyDoDy+BkAIIQiAiuEewbwGY+TVvzlOAhiMBQizC0McJyAMAIBcQUMxxDfX9kZQPLCHIRyp/kccoeGRdMerVmUZQE/oXvgxIjlOElovakn4tksiGYQBPA8X67XLy/rvOx3u67b7vf73X633W77vk0JRSgIQQeMM/Nd4XwaFccPArp8+Zvbsuj3+y4l7f7VtqAlXa6XOcL8M9S3pE+JJEiqZ7Oj/zpvdwAIw+aggFsbhu0CHoM4FATIdqWvqSwM9HG2hABeliVo322bhjdt33E5hHR9sQb6Cwt8Rx9crgVJcyEfGW12J+W77a4pyn7LB2S3LZdAXy9nlvw1ld+KkZfT6C32vulbsuia/kBraJbNxq42uFLOguZNxqPuDQBTuCiKRX8cCFNV5G+r8eQ/mVdV2r6F0INzefLft97ZgnAJIHkwzfO06F8l7JpFW/avfdM1FOE6wEG8gsv3BOjL4lXPtgxwNtGvhgC7QY7yl9Vi+zYNx3zk1vFqqMbyNYCgZuvlcsnKNydeEtuTAApVWr1vURdnQRovYTlCxQmw66CU2u0hhi5d85VqplwFCPoIitgfvabSrm+7o/92QUHasp5cDQFGQR2S1DFm7zN57GwbP0BQbM37QeEyADTMmKcYs6Z/RRyELCaujc8i+HZnksZsZKjWpDjFzt2bzNG0UYp8U7+eB4cgLJbatj20w2LRdn3ftYs0cgzRzTJPlz+k4nchDNwsDWNcRjgI+c5WhPdh4dvejH06LX4L0Jyhn8zbHNbRoizLhgRFA2sr+3xY/BYgK+pDMu9YgsMSKrGI40UTxwGdaMKNAFnngAoUNClcB0ASmJp0G0CSZe0hQWUZ46KAE0KK4rKdJw+6dDtA8R6coef4sB8wxmhAyih+0CTptjGQZFHUdEUXFTNn00cgRJw2VOVbAeLBFFG2IvL0BMe0kapriqbI8m0AEKAoCmiQDTt84jZSFY68ETAAd11VNU3XVTOE7z9NTQ2YGkCkmwDwKjhrugEF4RNyPzJd8NUNVVNuAcDGAJ9WDRVMV+0itV3D0DUNftG12xTormuBGSpIcKLQhjtggL9qiD8c8w4muZ5jmo7jWeDp+cS24L+nBZfhWsrdDQDRGdrchkPThJJOfcccDk/36i0KlKF//8HC965t6hcU/AuUJdNZ/diiFgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "12.0-16.0s",
            delayFrames: "360-480f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "3",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "3",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "3.0-6.0s",
            delayFrames: "90-180f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEBAQACAQADAQECAgIDAgEEAgEEAwEFAwEFBAIGBgMHBQMNBwQRBgQOCQgOCgUUDgklDQgwDQYgHxZYCAAiIxMnIgwwJBxQHg0yLRltGgw3NhuVEwYUXwJHPyNSQRjFEwKGMRdXRzk6XxsDgwJoUiBvUSftGQdcWVdYeSptamiBbiWdc0+Eg4KijQWojkydlY/AnFrPsgKqqqnOpmXYtWTnxwLAwMD71gLW1tXq6ur39/f///////8PqlvxAAAAQHRSTlMACRU6IzD7Q2NNWHLAkdywzICg7f7+z9q0xf7y/////tj////+///u//////7+/v/+/v7//////////////wD/M3tbBgAABVtJREFUWIXdl3t7qjgQh4tAuYPcqoYEDdJCOQQFxS2Lrt//W+1E7cXWWs/Z/3YenidBmJffJDNJvPvnP9rd/wVwd9kk3fU8y5AvP/0ZIHtZBUYd8c8AkpetNpvNapV50h8B9Fm92RwIkSH8AWDgsc0JUE0uDcNPAGVUvwJWmTv4bYBgHEbgJGF4QcIPAMk5RQCAuo7Ur6PwA+AYwYpfAMitrzFcBwhqtOLRn6wef53JHwAurdivk7FqNfuaTNcBAyt6fHykhBt0fs203wV4EU1TjBFYUdDHSP09wEBxEF6wmE6nU5wvcux/TcZrAEEf+nFVzekjndMphh7yxM+Ea4CBV6Zpk5MpjmNMyLxqCt/5PA9XAII46xqCECFpnucpwfMcFZEu3AIQBpKs6FZUliQkhJIUjJIgIE3pyQPhOkAQJM2wxpNZ5FNW1XVdkZBBU7M8DFPqm56hi5LwDUCQFMOb2BGroXYCuvoLrMaYbXinQgiAVR76o7GlikclZwBBMsazrK4JqqACGMY5r4I0TjC/rzBvVyuGSFWxbOSpXMdHgCA6PltB8tMYQ5uDIxAq/PwcQ1vTBFrgoBiEQGGwyFQHZwBxnBGUc0CSYMYdDk38/PyMq0Ob0BW0Cap5ZeUkn7nSR4AR1TnIrlc5d01RAh6YYmieY5pyDoDy+BkAIIQiAiuEewbwGY+TVvzlOAhiMBQizC0McJyAMAIBcQUMxxDfX9kZQPLCHIRyp/kccoeGRdMerVmUZQE/oXvgxIjlOElovakn4tksiGYQBPA8X67XLy/rvOx3u67b7vf73X633W77vk0JRSgIQQeMM/Nd4XwaFccPArp8+Zvbsuj3+y4l7f7VtqAlXa6XOcL8M9S3pE+JJEiqZ7Oj/zpvdwAIw+aggFsbhu0CHoM4FATIdqWvqSwM9HG2hABeliVo322bhjdt33E5hHR9sQb6Cwt8Rx9crgVJcyEfGW12J+W77a4pyn7LB2S3LZdAXy9nlvw1ld+KkZfT6C32vulbsuia/kBraJbNxq42uFLOguZNxqPuDQBTuCiKRX8cCFNV5G+r8eQ/mVdV2r6F0INzefLft97ZgnAJIHkwzfO06F8l7JpFW/avfdM1FOE6wEG8gsv3BOjL4lXPtgxwNtGvhgC7QY7yl9Vi+zYNx3zk1vFqqMbyNYCgZuvlcsnKNydeEtuTAApVWr1vURdnQRovYTlCxQmw66CU2u0hhi5d85VqplwFCPoIitgfvabSrm+7o/92QUHasp5cDQFGQR2S1DFm7zN57GwbP0BQbM37QeEyADTMmKcYs6Z/RRyELCaujc8i+HZnksZsZKjWpDjFzt2bzNG0UYp8U7+eB4cgLJbatj20w2LRdn3ftYs0cgzRzTJPlz+k4nchDNwsDWNcRjgI+c5WhPdh4dvejH06LX4L0Jyhn8zbHNbRoizLhgRFA2sr+3xY/BYgK+pDMu9YgsMSKrGI40UTxwGdaMKNAFnngAoUNClcB0ASmJp0G0CSZe0hQWUZ46KAE0KK4rKdJw+6dDtA8R6coef4sB8wxmhAyih+0CTptjGQZFHUdEUXFTNn00cgRJw2VOVbAeLBFFG2IvL0BMe0kapriqbI8m0AEKAoCmiQDTt84jZSFY68ETAAd11VNU3XVTOE7z9NTQ2YGkCkmwDwKjhrugEF4RNyPzJd8NUNVVNuAcDGAJ9WDRVMV+0itV3D0DUNftG12xTormuBGSpIcKLQhjtggL9qiD8c8w4muZ5jmo7jWeDp+cS24L+nBZfhWsrdDQDRGdrchkPThJJOfcccDk/36i0KlKF//8HC965t6hcU/AuUJdNZ/diiFgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "20",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "14.0-18.0s",
            delayFrames: "420-540f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "3",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "3",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "2.7-8.0s",
            delayFrames: "80-240f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAEBAQACAQADAQECAgIDAgEEAgEEAwEFAwEFBAIGBgMHBQMNBwQRBgQOCQgOCgUUDgklDQgwDQYgHxZYCAAiIxMnIgwwJBxQHg0yLRltGgw3NhuVEwYUXwJHPyNSQRjFEwKGMRdXRzk6XxsDgwJoUiBvUSftGQdcWVdYeSptamiBbiWdc0+Eg4KijQWojkydlY/AnFrPsgKqqqnOpmXYtWTnxwLAwMD71gLW1tXq6ur39/f///////8PqlvxAAAAQHRSTlMACRU6IzD7Q2NNWHLAkdywzICg7f7+z9q0xf7y/////tj////+///u//////7+/v/+/v7//////////////wD/M3tbBgAABVtJREFUWIXdl3t7qjgQh4tAuYPcqoYEDdJCOQQFxS2Lrt//W+1E7cXWWs/Z/3YenidBmJffJDNJvPvnP9rd/wVwd9kk3fU8y5AvP/0ZIHtZBUYd8c8AkpetNpvNapV50h8B9Fm92RwIkSH8AWDgsc0JUE0uDcNPAGVUvwJWmTv4bYBgHEbgJGF4QcIPAMk5RQCAuo7Ur6PwA+AYwYpfAMitrzFcBwhqtOLRn6wef53JHwAurdivk7FqNfuaTNcBAyt6fHykhBt0fs203wV4EU1TjBFYUdDHSP09wEBxEF6wmE6nU5wvcux/TcZrAEEf+nFVzekjndMphh7yxM+Ea4CBV6Zpk5MpjmNMyLxqCt/5PA9XAII46xqCECFpnucpwfMcFZEu3AIQBpKs6FZUliQkhJIUjJIgIE3pyQPhOkAQJM2wxpNZ5FNW1XVdkZBBU7M8DFPqm56hi5LwDUCQFMOb2BGroXYCuvoLrMaYbXinQgiAVR76o7GlikclZwBBMsazrK4JqqACGMY5r4I0TjC/rzBvVyuGSFWxbOSpXMdHgCA6PltB8tMYQ5uDIxAq/PwcQ1vTBFrgoBiEQGGwyFQHZwBxnBGUc0CSYMYdDk38/PyMq0Ob0BW0Cap5ZeUkn7nSR4AR1TnIrlc5d01RAh6YYmieY5pyDoDy+BkAIIQiAiuEewbwGY+TVvzlOAhiMBQizC0McJyAMAIBcQUMxxDfX9kZQPLCHIRyp/kccoeGRdMerVmUZQE/oXvgxIjlOElovakn4tksiGYQBPA8X67XLy/rvOx3u67b7vf73X633W77vk0JRSgIQQeMM/Nd4XwaFccPArp8+Zvbsuj3+y4l7f7VtqAlXa6XOcL8M9S3pE+JJEiqZ7Oj/zpvdwAIw+aggFsbhu0CHoM4FATIdqWvqSwM9HG2hABeliVo322bhjdt33E5hHR9sQb6Cwt8Rx9crgVJcyEfGW12J+W77a4pyn7LB2S3LZdAXy9nlvw1ld+KkZfT6C32vulbsuia/kBraJbNxq42uFLOguZNxqPuDQBTuCiKRX8cCFNV5G+r8eQ/mVdV2r6F0INzefLft97ZgnAJIHkwzfO06F8l7JpFW/avfdM1FOE6wEG8gsv3BOjL4lXPtgxwNtGvhgC7QY7yl9Vi+zYNx3zk1vFqqMbyNYCgZuvlcsnKNydeEtuTAApVWr1vURdnQRovYTlCxQmw66CU2u0hhi5d85VqplwFCPoIitgfvabSrm+7o/92QUHasp5cDQFGQR2S1DFm7zN57GwbP0BQbM37QeEyADTMmKcYs6Z/RRyELCaujc8i+HZnksZsZKjWpDjFzt2bzNG0UYp8U7+eB4cgLJbatj20w2LRdn3ftYs0cgzRzTJPlz+k4nchDNwsDWNcRjgI+c5WhPdh4dvejH06LX4L0Jyhn8zbHNbRoizLhgRFA2sr+3xY/BYgK+pDMu9YgsMSKrGI40UTxwGdaMKNAFnngAoUNClcB0ASmJp0G0CSZe0hQWUZ46KAE0KK4rKdJw+6dDtA8R6coef4sB8wxmhAyih+0CTptjGQZFHUdEUXFTNn00cgRJw2VOVbAeLBFFG2IvL0BMe0kapriqbI8m0AEKAoCmiQDTt84jZSFY68ETAAd11VNU3XVTOE7z9NTQ2YGkCkmwDwKjhrugEF4RNyPzJd8NUNVVNuAcDGAJ9WDRVMV+0itV3D0DUNftG12xTormuBGSpIcKLQhjtggL9qiD8c8w4muZ5jmo7jWeDp+cS24L+nBZfhWsrdDQDRGdrchkPThJJOfcccDk/36i0KlKF//8HC965t6hcU/AuUJdNZ/diiFgAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "3",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "1.3-2.7s",
            delayFrames: "40-80f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "3",
            spawnTime: "133.3s",
            spawnTimeFrames: "4,000f",
            delay: "2.7-8.0s",
            delayFrames: "80-240f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "0",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "12.0-24.0s",
            delayFrames: "360-720f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "4.0-6.0s",
            delayFrames: "120-180f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-8.0s",
            delayFrames: "150-240f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "2.0-5.0s",
            delayFrames: "60-150f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "12.0-16.0s",
            delayFrames: "360-480f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 17500,
            actualAp: 5700,
            actualDps: 5343.75,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "8.0-13.3s",
            delayFrames: "240-400f",
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
            actualHp: 1399986,
            actualAp: 25200,
            actualDps: 1632.82,
            magnification: "1400%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "フィーバー進化への道 超激ムズ",
      baseHp: 400000,
      width: 4200,
      enemyLimit: 13,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10023",
          treasureName: "ネコアミーゴへの進化権(ネコフィーバーの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 11400,
            actualDps: 10687.5,
            magnification: "200%",
            count: "1",
            spawnTime: "0.7s",
            spawnTimeFrames: "20f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 11400,
            actualDps: 10687.5,
            magnification: "200%",
            count: "7",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "18.0-22.0s",
            delayFrames: "540-660f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 11400,
            actualDps: 10687.5,
            magnification: "200%",
            count: "7",
            spawnTime: "24.0s",
            spawnTimeFrames: "720f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 11400,
            actualDps: 10687.5,
            magnification: "200%",
            count: "5",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "23.3-33.3s",
            delayFrames: "700-1,000f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 52500,
            actualAp: 17100,
            actualDps: 16031.25,
            magnification: "300%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 52500,
            actualAp: 17100,
            actualDps: 16031.25,
            magnification: "300%",
            count: "10",
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "4.0-12.0s",
            delayFrames: "120-360f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 52500,
            actualAp: 17100,
            actualDps: 16031.25,
            magnification: "300%",
            count: "10",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "18.0-28.0s",
            delayFrames: "540-840f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 52500,
            actualAp: 17100,
            actualDps: 16031.25,
            magnification: "300%",
            count: "10",
            spawnTime: "2.7s",
            spawnTimeFrames: "80f",
            delay: "21.3-30.0s",
            delayFrames: "640-900f",
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
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 52500,
            actualAp: 17100,
            actualDps: 16031.25,
            magnification: "300%",
            count: "0",
            spawnTime: "300.0s",
            spawnTimeFrames: "9,000f",
            delay: "8.0-16.0s",
            delayFrames: "240-480f",
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
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEFBQUGBgYICAgJCQkKCgoKCgoLCwsODg4QEBAUFBQYGBgnJycpKSkxMTEyMjI3Nzc5OTlISEhKSkqLOwZXV1daWlpoaGilXhinagV3d3eycSh+fn66cSeCgoK+eSiNjY2/iDmYmJjMnhLMmkjYmivWmy+hoaHRqA/ToT3XqzOtra3ZrmDjvEO/v7/lxVHjwm3qz27Pz8/t1YPw2oTc3Nzy35Pz5Jr//wHn5+f08ez6+vr////////j/zl2AAAAQHRSTlMABxEcJsj/MqTcRFWHZb56j9ye/K7GDf7Z/yAI/z3of/+W/1n+KGLMsP8RkEf+w2T+gNum/urD//TeAf/+/wD/DWsFhwAABU1JREFUWIXtV1tb3DgMJRcSmjBXT0gMnqwxZouhpoaauq3t5v//q5UzF2aGaUl3X1cP+TIhOj6SjqRw8vM/2sn/AD9PhtqPq3uw27WF+6vBvmBX97efPj/cfdzY3cPT50/398P9P335/vL8eHd9/Vew6+u7j88vL1+fbn8MBFg+e/d4s7y8urq4Wtnl8uHFu4eLgQCXj9+c+/71y9PT596enr58/e7cy/VQgIvLm4fH55dvOwYRPSyH+geIi4vL5fLm5u/ebm6Wy8uLP3B/tR/B/pXnSVJErz/Wt0mZDAfIx8X2Pi7TgFIsxukfADRVuT44nVY5HD9pxTT6vdOuxQvVTpIoiuJ8oWQZ5Qtp23y4/0k0UU4spvPJoiJazyet8epPCERx0VoviVbGSEJrYTvbDM9AnE8WDRLeMdWBqVr5zovRUAJRMW8ZqTFRnaLed51kcDWLeKB7Pm21oYwYTa3lFhho5jvXFu/7BksnjXJecCY7r23ngIBRVCs5H0YgVAvoEk2NCYeDeU6pIuh8SAaiooJ0QdBUYcs1OBtrDMWAh84GMIjKxvRnMiZrXQsnFWWUSw71aAfUIB61ptsAII64rjEmNXUOMqEn7wIkU5DOKmxJZV0TQplQiq9IufY9GUH63Op8UA6WhEge9NOtMTv9eyHH5Sp9wawmmNZMOQP62Tx8RwhA32ze7ASjApGa6EDHbxH0ESVAtwZecT4Vbl10qBxnQiKMMAf9cczWzLw7bKYoKaeL+bRMR+MZd37t7jQmAEAQqiXwplmG1tz8/jiI0knFtdGqqVrcJytAWCkoqoVyimAm4JGleJMbM9tlkIwqqWUQa5B98FcGrnA8qWsDzaCoIK5nvsmB2tEizEdhDe0Dl5jaXjwK8BSqqVQhdis51d2uqa2UgH2rvQ8qgaAZ6ZvGEhgbVmBiAqrh3lAYA0cBYmAPLzmGEYcwCORIay9qiQSDJ72TlpA/Rc0uwEbM6bw1RsNrTtVQKxhcxmJuCOaE4FqvDgWATkIXvVLwGymmC6E5lhbe9NZqjbUl0DkQMZcwhdYeWvgQFNlSAEHZKuyl9GzWQJ14LXyPIZlViGIGM8c4a7dqZg6mqIA+Ds5WS84Ya4pedMUZaqsZzGsCatdEM4Jq0JvbS5gP08TAIIJprsBZSKg2WcUQFaMiHzcNwnUNRDRCiOhadfumAwVJKZSCK4iPUMpZtd2tUZqXZ5Pz8XSmZdCst/4AwGJYRY4hROForox1kIU9LUdxlKRpIyjw0AfekHI1H1Vcwh+x0Jvo/NvdWCIMyXeH/kCgyaHXzmdo2wk9wOFEiKaA/4Z9sNUejYqx2v2rPJyLcWWOnN4XoVxTbHcB3my3vD12elDNJtp4vlueN0ko+VF/SMG2YDlsik0OQwz7KTiXvwDQ823njtrNhgtbcrHnX84O5bPN1ug1T5O2nyuKQGO4Zs+/wW8EsIl1p17xVEC3K5RlzL8CxEU5alhtBgBAGmBmyCzLCCR382zRUjSbN/ZXALvZTirLuSVZ/RpCsuCaj4u0cb8o494GSCpjiLEi9Ge1elSMx+NJegIAq+r0Tb9dQeFzaPeTFgphaJhNTrfr5MZpkkQrHYXN3Tt75/s70ObhtwAM0WrMjWoXo30lAgDMUuYto9Kb1TJ0WAHRg2/qKEmS82peHO7GwMAgDCgZdl6GOsFv0dljH3RR8vZhALAA0Kmsv2Q0XIFRNfCLMF0zAK/adToAeAa3b9bwcYvzUaNgosEmlBkSimdZrXWdIanq87J4/18LGDhnUM7T01kz+7Cx2YfT09Px2dn5KD/+QfMPL2DDNr7DIBAAAAAASUVORK5CYII=",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 363000,
            actualAp: 2247,
            actualDps: 4494.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.7s",
            spawnTimeFrames: "20f",
            delay: "120.0-123.3s",
            delayFrames: "3,600-3,700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "038",
          enemyName: "イノシャシ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 400000,
            ap: 4837,
            dps: 13191.82,
            speed: 14,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2100,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 880000,
            actualAp: 10641,
            actualDps: 29022.0,
            magnification: "220%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "139",
          enemyName: "ネコアミーゴ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17500,
            ap: 5700,
            dps: 5343.75,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 3,
            money: 200,
            freq: 32,
            foreswing: 14,
            backswing: 18,
            tba: 0
          },
          stageStats: {
            actualHp: 1750,
            actualAp: 570,
            actualDps: 534.38,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.7s",
            delayFrames: "2-20f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "knockback": {
                chance: 50
            }
          }
        }]
    }
  ]
} as const;

export default e1057Data;

