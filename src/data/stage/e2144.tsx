// Stage 2144 Data
import type { StageData } from '../../app/stage/types';

export const e2144Data: StageData = {
  eventId: 2144,
  eventName: "New Challenger",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 144,
  stages: [
    {
      stageId: 0,
      stageName: "VSサガット 中級",
      baseHp: 66000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "150000",
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
          enemyId: "013",
          enemyName: "ワニック",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgICAgIFBQUFBQUGBgYGBgYGBgYICAgKCgoLCwsMDAwNDQ0REREUFBQXFxcYGBgaGhobGxsgICAkJCQqKiosLCwwMDAxMTEyMjI1NTU4ODg6OjpBQUFCQkJISEhLS0tRUVFYWFhkZGRmZmZra2ttbW1zc3N6enqEhISPj4+QkJCcnJynp6enp6exsbG6urrExMTMzMzU1NTe3t7m5ubr6+vx8fH4+Pj///////8Am0WmAAAAQHRSTlMABw8WHCY0PVRhSHvAp5Vx1IuCnLrgzaj7U77m127N/u/e/uXN/+n+/u3W//T+/+3+/e/////+/////////wD/aoqRJwAAA7pJREFUWIXtlV2XojgQhuVLUVQEP2DVQZEWsCGZZAgESLL+/381QdttPd19dmb2Zi98LzjA4X2qUlUJvb//o3pPwBPwBDwBT8AT8AQ8Af8/wL9L0QxDU37hwy+kjqYLzx2pPUVV1T/gGG5wQvj7i9s3HW9qqr/r15yYtFxwelqFOcy3w2sOyi8koxiDga6MwlIIzoWoDgkuKfD0C9Z0nKGhGn39K4yqacNFEHjD6ak91yCj5xakCKF0ZRqaqtlhDiJvug680efB+9Z8uoKUgs0eCw59X17rhvOmhK/ruesEpKFVlmACvI9m3dBHixNKDlTwBhN25sg/lOJ8lWhKlOe4RWnVUAzIywe/6a3ni7wRNWkIannnaUvKz+/ijPE22ZXn5rgjr48rH5gjLy/kexmI1Rli4t0nkYRUdcNkRQUnRZcarF8fo6+j1YbwEtQMwpbVD35y7HQ4JBlABW1kbwVn7QNAnQKKDlim3HLa3Jk7scxHdQX8XZYlO/+YAoiKsvrx7R6gzSFnpOJEdu2DmsQHrDmNQ7m2xM8KuPPT9BA8tNGYJC3HiNUV/wio48m2QOvRPG/wdhJXaLnBJLTvR1t3IsQYQJ+4O0BkO/vtUB0FWWj3vTi03Ti9zuXNb0WlLEzDxOeA/bA/tbWeOhy7ujKYuLoxHZt3k6xZYfGZVYh/AIZlyYjGdN7vKSOrrwzcQQdQLtLtEDMhPiB4SW8A291sbFW1N3tXM+ZLy3CWU00CbbeTF+MCAljyx7jnJsU3wDgq8NYcBbgITDfOFlYIgn6vN1jFuRQqYZJmKWw797ktCL917wY4+JgzuF7krM1X26LcL0EZyiLosi9ciiTy4GDXCrYwIeKWAbreycGHRYF2PiQE+jsAumny50ZPGayRnLr79jF083POAGCXNTF0GeXd7ph0StNMziKKXVnEgXcq6jor31Z/FsWbX9S4kg/1Wzmbuq4ppfLatFIya8FRdx4ohr2O0rS6fFUR3qbwkowoM9ic6RHft6a7F7zzd3uyjJ3rLjKGk80lapkUMmt4zRofK3HmsLu+uduKVLTEeRzHJ/j9hzyrjdtONpxT1wCaoIri43WkmgzU8tjZJbhqGGspwXm4CoK15w7Noez+t7+Mu63QXxcyqxbsw/1xdw0qquQYRxv/IGsmN3G0nltmfzCQv6mb3o8STTOcGGGM4cqZpSjLaFs3NYX+xLJmCUEwyzZOX//qt6IY5tCajmez2XI5G8/CON7Ep+gURZF8HM+WL9tt8LJyRvon3p+SwAYl3XvW+wAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 70,
            ap: 30,
            dps: 50.0,
            speed: 14,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 50,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 280,
            actualAp: 120,
            actualDps: 200.0,
            magnification: "400%",
            count: "10",
            spawnTime: "1.7s",
            spawnTimeFrames: "50f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "007",
          enemyName: "メェメェ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 28.3,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 113.2,
            magnification: "400%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "003",
          enemyName: "カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQEEBAQEBAQFBQUGBgYHBwcJCQkLCwsMDAwMDAwNDQ0RERESEhISEhIUFBQVFRUXFxcfHx8fHx8iIiIjIyMnJycoKCgzMzM1NTU2NjY5OTlDQ0NEREROTk5QUFBQUFBbW1toaGhpaWlvb297e3t/f3+Dg4OLi4uLi4uSkpKampqioqKqqqq0tLS8vLzDw8PKysrR0dHZ2dni4uLo6Ojw8PD29vb7+/v///////9oT8HuAAAAQHRSTlMABQwVHdz/JS/nO+9KnWewWHKK/3u9zJTw5//ZqNC6/uX/ydbv/v//5v//8f/2//7//v7+/////////////wD/CarcowAABD9JREFUWIXtVmuTojoQXcBR11VU1HHWUdDhjTxCCBBIcvn//+oG1BHd8bG1X+eUVQa0T053ujv9479/xI9vgm+Cb4JvghPBbYjinR+fgCRP/olBkA1dvmSQhnJfeJqgo6JUH7b+L/SXuqE8L2rolCxRB2f7gRrgZC09ay9MA1rRaN2p1zU6a0AYXD6tQFQAY1XpTKXOYDKdTuW5UZDcVgb9JylEJWZVVWW6snD2QRDsDdNzbdtx9OXgZiAFUer1e5JYozPyacUqhjQTE8oYLbNwZ6dlWQQbeTj8SofQk5fqZrNR1+ulslxvzYRwDTTxy6oBo8g0c/4Fne12M+/3Or0Lf8SJ6sRplmUpSiBMUA5tL864ipJVR7DUz7iq3LUs0/hQF4v3zfTzVERZb3Y8g2IIEG2/4bvXmnwPY2AnsRmmSJdP+id6dmHeNquKtDg/Ei8pYArjJClxAUZHgp6KbtlzE3fl0c+faZLD1Q5gkns7Px4fHZjvyU0CRrxV2PKF0VSbaah0Z6tor5wEZDf35yjS8uKZprHlY8uK42OuC/IdAV+rKrkLZWHITVLxOkF/ZX4CcQ4EdZ083rP5XL6iQBEOEUSPCSqCYF6UhHKQAuMsTWFkzDmBMNSB/4iA54JvuZZpe77v86qyzJ3tertRXe3SGoLWMd/aP/RwCa2EA1pemkOTF9a+CcFQLyL/AQFjyMa8uO2sKArsgZIEb24cG1OhjkBAovCRAuLGjDHs2i6H5WWJKs+V5bTHBfQXXmA+UlDlu6iII1zinAP6uTMRBFFsznCgKPJof5+AMTjTwtXMbWJNAYRNrzy1IZEn4gMFxO2urG5Xy+sH7KaH6J3xkCDXuprd7c6ahEVupg8u7OsWft8FOOuaXMGsbrQsjq6vh4cE1OXGswMBYwAGc+GK4IELxa7bYJXWBRDGzvCqIU/29J59la1mDYFV8pwmfqz3rwiGzv1aSA72K9hUEgB674pgoBf37Bng7tcEYRSFYQSRPpQkSWzFofeR37OnISfQLN80fc6w84rgVVXVdWt6kNT0ngIa8TzMC2yHOca5tQPIjFHij85nKS6TuzHITRsC3zYtXkm2udMsjTcGa9xK53oYuOcEjvg9l+IDMpQAAGJgtPL5eAxf9L2TF+QyU3htM9TKx/4Hbt6T8i+6e7Y5n2bnGEXkple+sC9WhzWNWvMOb0uNIbZ2Yd6moKiRRlPcvnmaeSPYtEvymEoMe9ouSLKC1Cgx4nc4rW9HYLtBBPiNDOM4BlGwd1TlYtSR1gmrt2AkNcbvpt3A0n6/vhplrZhk7mKs8SHJ5W3dHMuTQedyyKmb0lG0Iy+jDHEkcDvvDz7yOuKMBvOBnpOSEEp4P/pzzup/xKhBYiiKkRyW2/lwsrDDGr4xkl/dw3Ird8Q/GMT56/v7b463Xy8vv94O4MuXn7+OOCx/cryMR/JnFv4PI13Ci9FVptcAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 44.78,
            speed: 4,
            range: 160,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 67,
            foreswing: 8,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 400,
            actualDps: 179.12,
            magnification: "400%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 4000,
            actualAp: 320,
            actualDps: 600.0,
            magnification: "400%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "009",
          enemyName: "パオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIDAwMFBQUFBQUGBgYGBgYHBwcJCQkJCQkJCQkLCwsMDAwMDAwXFxcfHx8gICAgICAhISEiIiImJiYrKysvLy8wMDA4ODg4ODg5OTlERERERERLS0tOTk5QUFBbW1tiYmJpaWlxcXF1dXV8fHyBgYGKioqYmJigoKCsrKyxsbG3t7fDw8PKysrR0dHa2trh4eHn5+fu7u709PT4+Pj8/Pz+/v7////////NsdqHAAAAQHRSTlMABQsRGR8n5j41R1ByhVuV8GW89XSiz/OWieKruNfF947R/tz/7v7m///u/vL//v///////////////////wD/XBJAfAAABBBJREFUWIXtVtl26jgQDBAIxEBuFgdCCAyYRUZ4wbJkS7KG//+rkXcZ45A58zIPKV50Du5Sdau3u7//I+5+CX4Jfgn+LwTfo93T3j7+kvh47t+3bnxcR0fTjYODsASy94vpuPuvOFoD/YAoF+cEghHvuJr2f07R0lYuy6wz8OBkjHo/pGiNDRydL8FDe/F8/1N7UbOXiPBxrrW/t+10Ou3HBvtYhb8ffsfQfZsvFp/vNj/XPcjiSfbj5kAM5jYOAt8GDm2wlwzY6Deob3XnJ564SgDwmySchffZqRt3B9pw+HTkuU6wOfEGgogdxnXXF/sjhEuv+IphGzVq8OfdS9ePhEVRCIh6Dw6bCPjhuRLH3txN5GJQCZ3IFNSFCPdFzaf21E7d9U121eV6TpCvnkLwuM8uvkrAHVDPKrYfqAI88Q0BWb5C1YnkzA+PJUE/F3Am4ErY6G7iqAoiRill1nNh35m6+f/URHUCESCmKGDI8zzXsd4KB96OReiFC5szOAMPuRA8cD6yd2yND15pRKHbmDylDzSkEdKzkhysECwdF/haFKoIHcuyXLxIy6H14VQiF4Lghr0gPmUhwqs0mQcGQWr6EXAzCDIClHJqpJk0nO23O8UGwaYSVFR6juORfdoTuv3B2FBc8ODtINKQMxqWmXS/UgjQBYGgDYTiqBWtoEJwkcz0SnNPCexhkclbJQZB9RWYjfNjFIdPIXD0vKC1rXIpt9zyq0h4ZWZGlBKPKQTLTy0dlo+qgjMCQckga0OkbSUitgnh2g5KAss7LEaJC4ZKwG2zLI0TlGUUym4gELBxiHYbK39lKQ47xqjmQlwOThY3mdd+THnCIgReHANvsykkoOXio9++QnDOM1MQM60sApEH428iBidF2/b1fF3ob6v1Q00v8doHDs+VbKxUVbCDYd69pnlf7n1V60f4wA1o4IBisAi8WadzShC4c9L7UEFwv8AVAjnCIQDAImUKJXYIBwQ5cA38WIOSSJ0Xr0pwFjwkQbWouG+ZJgDmBpK0ybN9UQutJ6dpF6jo4rIRhWZ6WST8eTlZhlZ0uwQTsCJJ6L6oJbWtfw+OLZOkYiNXVwb8/SJ9hhuOyAllh6lUgVfKYLpr6yjxEYXXKAr3aLFyCN+oLDmtNzv+h8MdKnMyOosweQiWPwfLpw5zV1p1SRok5STIbgkQZZGIEbHAig0EsjyfBCGloSVrW74wOuiDiyWr85lwC+quZ1vTsh35g7vlJGlv1AWzrzWQWbBbQ3Q6rvRxfUF6PmbBsUe65ToS9u5JGxs0EeNNtS0hUgUBM13rXlsSe6tkJ8cYPo2AHx98MOpr7/YphqmPZ05yAqOr5vIdRu+z2UTi9eHhdTLJTg9/XlMkpz8SDy9PF6vyP8cX7jfgU+BbAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 4000,
            ap: 654,
            dps: 104.92,
            speed: 4,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1300,
            freq: 187,
            foreswing: 8,
            backswing: 8,
            tba: 90
          },
          stageStats: {
            actualHp: 16000,
            actualAp: 2616,
            actualDps: 419.68,
            magnification: "400%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "531",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAABAAABAAABAQEBAQEBAQECAgICAgICAwUDAwMDAwMDAwMDAwMDAwIDBAQEAwMEAwMBBRYGBgYKDA0MDAwMDAsHEBcNDg8KEBYTDw0YDg8NExYYEg0aEQkVFhUVFhQdFQkjEwkFGy8PGSIRGSMYGRYcGBMZGhcrFgsSHiohHx0qHBQ4FwoHJ0EjIRcVJDIkJiIYKTkxJB0wKB0pKyUpKyQqKiU1JhwdLj9OIQw9KR4ZM04xMCkjNEZILhwlOEs7Myk9MyczNy5LMSMpPVE6OzJwKQdWMx9KOi0sQlc8QDdCPTpAQzlaPSuEMQNGRztlPylITD9MT0NkRzGmLwBqRS9cSz1QVUdxSjBYUk2cPgpVWUt0TzZyUzlYXU97UjerRQZlW1dcYVKWUB1fZVaEWDyAWz2kVxNlaluMYURqcF+bYS+3XQ+WZkZwdmSvah+jbUnMZRd5gGusdU/OdxS2f1TnfiHFiV3MkWLXmGbjpnX///9n9eH2AAAAgHRSTlMABizd8RohEOf/WYfQaJKkwzezR3j/mt+2le3B/Hv/0opf/5hGrv//7OPP/ur//v///1b/////oP/w1ob////////u//+6////////////mP////////+p//////+N////1v///6b/////6///////////////////////////AJ/uZzwAAAWcSURBVFiFndfhW9pGGADwSAdUFEFBBRHsYtegMaE2CY02xWBoQgTT0JhsGGZocBhmoLWiDJ3tv75D1+lkmrD3E9zzvL+7e+9yuUDfbgMaijcff//4Zrj5292kh4Fn71Z7Xy//vPro/x9AYAzy05JUaPV7vavXIwP+MByAYqqm8nDr6vKqMnbd+iriGpin0Q0ortm2zpbK9VbuJrNSTboD/Anjiyy+C26Ypp7J4Xj13U37TL29GXEBJDcMq/NFVHhUNFS01j/p/ezxREHnM5VWtZx0BMKkafKk3pRNWDbJSr9/0l5dYuUNyLstCNV2wgkIwHChYiqyTNNSU03tdfvVXMHunG9CyQpKs+yyI4DDWQFhdTmFmzZN5/ZOuoJ83rTNyHOeZ2neEViGUXp/r4yjoqlLuKzmXlbKumVqdhJapmmajDgA0zC8uHd1KaCsaDRJ2ZC0Aik2m01DWvJ7SJFfcVqFGE6ONy4r2QIviiKp2LpqGKZlNk2Jj0RFWd90AKIoisKFWqPbzaI8Tat6x9I0W9dNk6Yjq7woxxyAOA6jeLbVb7e7tXGeFXVT63QUBYwgu5agWVpZdgAiOBByrUa9+7WXgmletHmalyzLtNgay4uSFnAAkjgKw6lqvdtvtXJCjietJquC/A5f2SM1mVecgARJjrOS0Ou3cyWhV5JktmPZltHswC9LZUkRxZXHt7JvZgWNbX6t1xpCLpOtV5QOKnWalmXLQq7SLtCstPL4RvJD3mnI/35fyOZy1VZNoDsGKVv2Fw2ttiv1T+XGtrvz4HVb2Gu0uu1ahj+3DbujhjzB7WqjUa8H3QFeoSrUWu1qq5GFVasj2r+BQ+JZqVEKuT2RApVKtVZrNC7/rAoFZen9r4PGyPaq6yMNSgrZMsuC06x3IqwE/m4cg9wD0PyL2ZtAM7Mz0P1wBoKpndP+2eFBt/H2tFaaHh2I7vxycPTp6ODwaOf484fk6IBvDUFmZ4l1ajbz9mVq8v6ryRnwLGAURxFFjnmR2nn7Ysk/KpDYAgBDMcU8Ufqws86lg6MCDEUwDJMHcXx4vL5VZIIjAf40BvI5gilu8WfHn7by3C4TGAUIIBSWB/1jzLp48flU3uK4XWp6BGCJANkMRhDIbOHi9I/9dQaMIe1+J/owKp/n8sx3oLUOJsEVE66BIAJ6HBSQWZgDwOcjAOS5Yj7qFohjDDeIPBODXl8cHx6sX//bpTwugQRxPQKOwyLQq4uzDzsEQVBgVXaXXALzxBYH0vPFNLjXnJ7VUtl1AgNlLeYDbgEwhUENJiDoeelt/WmKwMC2BnVccgekicEicLuYF4J+XJv4yTe1sIgRg5a0K2AaLAIAiszgCIxEwFkNeRcRhMpTXMwVEEcIMAOuuHC7c7yLg61BIK5qMJYmBjXYZSb+yYcmEALsbQxzBYRAxajdPHVnAD4EA8tIMfkFrzMQXUQIBGOQxTsPcAAhcI7BifS808sVxByMYhggYrf5kG9qbS+7mMniPhdTCGZwhKDyzDJ0NxKiqCmm7gZIkqkslaGIp967QJRVTctSPG5GQPMkXcZjvn8BXlSWdYN2A8QlleWlxP2TPCZqekdxM4W4rPAK6buXD3lwUXEJaLqhTdzPh6AVUATJDTCvmiY5NgzMSbpOuqhBgNdUZW44H5oDt0Yj7gj4UcO0pcBw/hjM69a55AiEJIU3RM8wMCfyYGyszwEI0IquqhvDJfDwHRnnWTP+OOAHdypbUzeHB+DJahIrNW3p8e+FkFjdV1Rp5T9q6JtboUVJN/HAI8CY0AKXs7p4+yCPDeL7n+lVXq1ctqIPA1FwO62edFOhmXB4cvLJkydPbwL8mpwMhybCKAo+wtqrnoeAGTQjCHVh/NFIVdC5B6fgiwSjU9f9X3f/w/e4GUQ4PBOaigYjPv9d4C9ruzCH8lGnzAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 480000,
            ap: 2200,
            dps: 795.18,
            speed: 17,
            range: 175,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 83,
            foreswing: 4,
            backswing: 47,
            tba: 40
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 220,
            actualDps: 79.52,
            magnification: "10%",
            count: "1",
            spawnTime: "1.7s",
            spawnTimeFrames: "50f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e2144Data;

