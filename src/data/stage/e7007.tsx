// Stage 7007 Data
import type { StageData } from '../../app/stage/types';

export const e7007Data: StageData = {
  eventId: 7007,
  eventName: "にゃんこ別塔【無】",
  typeId: 7,
  typeName: "にゃんこ塔",
  prefix: "V",
  mapId: 7,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "1階",
      baseHp: 15000,
      width: 4000,
      enemyLimit: 12,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "2",
          treasureName: "ネコボン",
          probability: "100",
          amount: "1",
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
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
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
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 28.3,
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 28.3,
            magnification: "100%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 28.3,
            magnification: "100%",
            count: "1",
            spawnTime: "43.3s",
            spawnTimeFrames: "1,300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 28.3,
            magnification: "100%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "010",
          enemyName: "カ・ンガリュ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAADAwMDAwMDAwMEBAQGBgYGBgYICAgICAgJCQkJCQkNDQ0ODg4ODg4PDw8PDw8aGhobGxscHBwdHR0eHh4kJCQnJycoKCgpKSkyMjI0NDQ6Ojo7Ozs+Pj5CQkJMTExMTExPT09aWlpdXV1jY2NnZ2dsbGxwcHB5eXl6enp9fX2GhoaKioqOjo6Xl5eZmZmhoaGqqqqysrK5ubnGxsbPz8/X19ff39/n5+fu7u739/f8/Pz////YqtfaAAAAQHRSTlMABg0UHCmkITOSPL9GfmtQtF7/4KZze4bDjZryqf7N47b7yuf/6tv/5v/x/+n1//b///b+//7+/v7/////////bqephgAABNNJREFUWIWlV2l3okAQDCheUZT1NmoADYggDOcw9///VzsQ9627q4m68/IheaFruovq6ubl5e7TaN//7LXTHHQb/xW/3E3U/4hvzINopijas2Wo0wAFw958MVCeileMA8a7lZN8GM8loJklL6wI5+vneFRnCWMgZsTpPxdvOEjQFPF00nwmXhk6JReccQ6d1VBTH6axaUIuGCqZYKQI7JXe1x5jonegQkBrU3AhBMNFsltMho+k0Q+Y4NmPH6ACEIJTL/Raj4iyAhDY95D4BGCx+/aQnjqOLIFzVgXXEOQ0eUjRbRN/Xl3dTgkpg3XnkfgXdZXzKliwMgkcxzH1B9WgDCJWv4DEng07nU77YSEYUZWBQNvec634okc1eXD9pKEos7QGyJdPJqCuivolpLMnAdpmLSGeTJ8E6Af0vwAaUga/AJ4xVWV4IHU8T3SlN9K1/oN5aCY891BkaObHZNR6zAway0TKsBbiyVgmsXVcqYrauFsRihFQDusaWNR1SBZGk+G0O+lqdwL0bCR4nLKSCA7GCcMQHIPE3bzp9zGhrWUj8jykPhQsdCtvrcwV5x/GXQDNVUWAgD4Jc577MEO84oOXh/ldHd2YR7WEkIvilPh5+gNUhJLUNu4iUQ5k8mlhHsoA8nAZIi5o7iw7d+XfXgbk7IF+mYUSQNoiR8G6f9f1am8dfd4vhKQwC7FXzQXkTO/zs/bMyRmXDkplFAuLLCRxSKUaZ4170m8MzROWo9CXBxSEgTT3SuCGMXg3dP37CrRlAKtRQEqEYOr7GfBRGGOYp+Btcdh+K8LOOjmz9znJYOjuC1RRwIkLcPCdhprrlIo/Dk33Lip8LBjcl8gdfe0J6jzC+E8AKQQXEBBjYFmpB46DZvN2S0v/wBD9BcBj3yuQ6/n7jVtg/31krm6OiLYJWfo3gIAecDM3JuEG4jCEfp7bt9Y1I2DUL/8GwF68sTKKPCv1AUaE8dK+Ht9YQ/n0PxkQN9vHtPBisPFhDqp3nFwH6DlEYPcKQCgbypP17/fu3pcap9F1CqcJl5z/U4K8W0JU9aPQL/yQoHBxqwJOcje+0FH1Q/1M8heXPiBCeotcd/bW5CqA3GZYtBi75Hc4Y7UlQXdjubXCcEHzfQyvkyj3KWz3jHFeO1cVXoYZl1tu7oHtKGY1KiPAp+X2FoDcAlR9B6V1yoWoBHur4OXe9YtotizOaRV7kDjTWwCZHOKqsY2yLA09L/aB1MUmJdDUKoLrg6zFrHe9qaWMkkpiSmfwOh5bx+jkIp5tQkZlD/YP5yajh5uLqh7JCVj/pjR7Q306XcQMWRZiybIhX1G97Mq12bm55k0TFlx8EigdG5HjGLDCrFxk6EBKURHZ01umpCwL6vQu/p4lJJrYqHTqma4MTcfZrvXOTVNrrEtkX9iFZpfJap6UztmElGano33lqh0Hp/Pf/5cJwO3QLk9zVZHndtyvo84TaF/wIxlIugMrtCaGPptPv10z5adRcbhwTIlHvcUujNPk45ik0fqrkaI2mr2Zkx4u+e07hGVyKlSjqZBT4stPvqlpO6fI1j+fkTtMs60NTiUmlDFGMg9RdOxKBrV2U7361bU8ngJ7ea5S7euDbqv1On5/3x3k2Y3fDx/v49fRqNVqdQf6H8P5Jy7SEZMKG/SwAAAAAElFTkSuQmCC",
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
            actualHp: 4000,
            actualAp: 250,
            actualDps: 208.33,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "012",
          enemyName: "クマ先生",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAgECAgIDAwMFBQMHBwUKCQgKCgkNDAYODw0REQ0TExEVFhMXGRMYGBUcHRgfIBwiJB0pKSctLSkwMC02NjU3ODU7PDc/QD1CQkBDQ0JKSkhTU1FVVVNXWFVgYF9lZWRra2lvbm50dHJ4eHh6eXmFhYSHh4aRkJCbm5qdnJynp6apqamvrq60tLS7u7vEw8PKysnR0dDY2Njg4N/l5eXq6uru7u709PT4+Pj8/Pz///9+qm8/AAAAQHRSTlMAAwmGwBA4qWkbJOAULJo5RoD/UmTOaXif84ngrp2Cx6z4u8X34NDr/9n/4v/v//70//z+/v/+/v//////////OKBV3AAABAFJREFUWIWVl+t6ojAQhoVd2sJqtepKZXXV0nqIAZRjAiG5/7vaBGjdynn+4cO8Zma+fAmDQWVIQ1X+ehjO/v6dydUv1oSqv5mGVjwohhWE55nUI182LJx4q2H+NPpIGENvwx6A0Ykwmp7HsqqqmjYRALLX2vNugHPKWAqe1+Z+fzqd3iMWXwylB0A1Mf9P6ESER5oSSu2V2iN/IC0OgkAZZSJIlCCzF2CgbRBLXSfJ8ilcgvTSawqDyZmyaDl1RTpvxvSYRus+QpB0n7HkuAt5Pk1p7KOeUxhusSgdhd7VBkfoRXyq1qQHYMzHSJEDoL2bTqfQBsAjnt69CdLCZcQF14jQECyPmJIQwqBHE+R1RK8wDMUQ0c6ljFyxDXtoWTNjDHAEUIJ9CIDjX4/86WPcuYK5RTEIiAMAgD5BV9v2A96Il641DLeI0QBcEcYJF3KCAkeA7N9dBylUxNJYDMG2Ia8BinYybznrli8bQa7gOPQ9PwxRQrMtEbx3nMNoT1hVhKCbGKXFhVYCELTmXbQkWlgZuKOWhIwrIwZo38EUJN3L3y/VEYO4y4YqKkiT0goSEPtGexO4IfP/pq5XBYjbjY3PIFsADKoA1GrVkpJXkABcBWCB0TaH0SkV3cOg3IOY/9ZqbMJKRISwPEsBoJcWLXEryV4O7LIaBYC1mbNqJvUAyFdA9qNGwPicJ3pOGYAh32RtNUysAnAt5fPNJHZp2FiDNM97WAmIoBhQ0qil7ESqAwRQrI6em7xVXof1AC9v7GXeAFC2uB7gOvlCmjbUsJgin0IZcM37g5sOGO3TDv2yDqiTbVBKTg1K4HejPLEsJH7LKcy6yVU+dSQ6fk8gICp6sagHTD4BCJSsnTtaATfqAbNCiLe3bxGBojy8rQfML1/rLXm7D4qqErMdQMuWRp33oiqy77AC6twpiVKwKzRCzx0AzLvvIvnYFCqlVheAvwu/A2JzhdoBX1Pgt8y7JqDtSuiANgPGn0pk6P1uDNE6t0sSpQ2AYi8I3zjeHQyeboR8jtTdWId6QOGpfBnFwXDT82Wm+67LTXWs/64HcD+IQkosl18wxRFJXD8K/ezGfB7rzp9NwC1ReaoHyGv/40DClYnz/RxtjPX6Nft8OY303cvYPPCt2OCqkn4w3tBlPj/bTjawuSTLWV3cS2fPmjR5afnweXgeLaz9SFn88bLZa4PitMJbReFOJLWdrdJQGuoLeaC8BryBXmZ/2XnZ53tD4lnyK+9ccsodXNyautxN/g8BoBc9/1fVjBttqBoQsOitOIP41bXD1eR78LsauX0tz6xGK67Kl+eW+6qpRTxsvM1IURS5Yx/kh6cfj7vlz1v8Wv76+fj4/OPpoYz4ByXseuoTKbpdAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 1000,
            dps: 280.37,
            speed: 4,
            range: 350,
            rangeType: "範囲",
            kbLevel: 10,
            money: 2000,
            freq: 107,
            foreswing: 8,
            backswing: 8,
            tba: 50
          },
          stageStats: {
            actualHp: 3000,
            actualAp: 1000,
            actualDps: 280.37,
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
      stageName: "2階",
      baseHp: 30000,
      width: 4400,
      enemyLimit: 9,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "100000",
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
          enemyId: "005",
          enemyName: "ジャッキー・ペン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUGBgYHBwcICAgJCQkMDAwPDw8PDw8VFRUZGRkdHR0eHh4oKCgpKSkqKiosLCw0NDQ6Ojo9PT1BQUFFRUVMTExUVFRdXV1paWlycnJ8fHyFhYWMjIySkpKZmZmgoKCnp6etra2ysrK5ubnBwcHLy8vT09Pd3d3k5OTr6+vy8vL39/f8/Pz///+gTjTCAAAAQHRSTlMAAgcMFR0nMKFAOFRdSrXPhKvBb3pmmI3Y8aKx6rriyP/21/He/un//v/+/v///v//////////////////////VZxXkgAABRJJREFUWIWdl2djqkoQhqUIiiXGgho12ICt1KWIiP//X91FYzTnCp6c+WDDfXbmncLSaNSZoGpi7R9emTRuKeWb/A8YQZaFhjSYdcWG0B40fw8QJwNFkMbLhdKQ9aHyD4DRTFekkWWNpN7sXwCC9rbU1THAq/bHZqU0hF8TZN22pjr0rf4nXChK+5cyiKo6+cS7JWJkg/BwMOyrv/NBGvU/ZoCaMHSgjze75Vj6nQeCNtyZpkdpGPjMJXil/m45d2Gyd5yAlcYZ1pcDgvhXgUia3BCUhY1IWAIotIdXBQStI7/cvKk11fdRUxsN1zYNLw4Q861XeiAorVbzlQtiZ9gazGa6YSH3GgFHeNDo8q3lwXLYab/yQe1vNhu4gbfVFwvwdqBwWcBy1npVEPLY8mhIgM9+EBzrY2L4ngP6vXqC2O3vojw/oJ8uMObtPp3jMQbzYacWII3nID6diwSg8KcPNjoUxxAY4/rOErtLEwZZcWKAPBJCBJJTSrdTTarNg6AukIdtHOe5Z7v35YyC8ODbi578Io3S2PJZ6ELbSQ+PQrq2E2F7p7+sI2WBLwETGwYx/BbSh5AC4DpG+4UDYmfvXX32kY0dG19lCOHatEnAQutVU0pTeFOujMNcUx5+yMh6DS9gvHhRRs0V+U6b5xNzbZZCeqZJnUtfeNv6GIT21rsBsOkxH5mlJD71Q2SWVwJrUnuLEDr7b+EJ8Mo28n1KCP/RQX5YVsO0VgRxDL6LJwwuHz1gQ9t2SiWuItQmUv7AP8o3ZD6AcZaQMgUXBFnVApS7hl8dBEFcFKfMswEuQ2COUdsJmuH+cIDaKD4VxbnIIgfamEvhbuum66OGpfjYpocijw/nY5jlqQsADerzKI6s4C6iA2B4LIpjkORZdMiPWcTrm+x7NQCJJ+EGCLBN4kPCAt91XYenkhBMeEV/duoBlH5VPzJJ4CAAIEIYE+o4rlsWJnwB2JiP7YPcKD1k2THPT8XpGGMTe96+HjC/NXDIGwEwLsHFTseUj1nIy8mvBww2D2l0StXDMIpYQBGvR1qyvdoQZB0+jEF+RwL21QAi3vWKtxnXdJOyog9lEF1qOYqiOIrjOPoqzfV7dS0Lvb33CEgOXL6LBMUpz5LoCnjTKgG8jsL79vHhVJzvxhsi5r+76xoRpCm6+R6xJH9cXtop4xeouaseKfJ1IrOIbxUfz/+z4hAxntxppQi3gZhEQZT9uX9pecywjT4q56piOOX6OEZ+cnoGKFKGEFlUNvQXgPdtmD1ZzgEZg9RZtasA6mWcxAkkcf4UwOcC8DyjVwXQDI/XTUqBn54qAIHNgm3l+aAEsCS2KUufKVCq6Nox23ZrQgijlICgGkDXrB4Qpczk/VAFOOI5CqoBPAtJijYXwHNCBt8NVA1ormjqrN75zel5GZzPqTWZfM4qRZQ/iGP0eluHpc8BRWRozWm/Mo3SeGd0JFlHYcKPaef/M07Ooimoo8pKFLvvXYlPha1TtlKeHO+IIj/ybxkciQ1Rrr4/y0p5TZ5awaE4HzBhSZqmScLHEZ+KXl5EL44XX8ZPepjHkLtLY29Z+/12a6xWSxwXOa1uxD9C2XtZkeGp1u6125qmqYr6gdIitbp/+QTbnII4Z4YmfD/sCZwQu4u/fXwUtBWK4EAW7yaprd1nt/6U+7282e725+Z8qOt662a63p/P9FG3p75+euOZnraGb2/DIX+5Gf8y7L+39EH3j4n4H2iBW0BUMHPwAAAAAElFTkSuQmCC",
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
            actualHp: 1950,
            actualAp: 120,
            actualDps: 150.0,
            magnification: "150%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 1500,
            actualAp: 150,
            actualDps: 67.17,
            magnification: "150%",
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
            actualHp: 1500,
            actualAp: 150,
            actualDps: 67.17,
            magnification: "150%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 1500,
            actualAp: 150,
            actualDps: 67.17,
            magnification: "150%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 1950,
            actualAp: 120,
            actualDps: 150.0,
            magnification: "150%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 6000,
            actualAp: 981,
            actualDps: 157.38,
            magnification: "150%",
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
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 14000,
            actualAp: 999,
            actualDps: 1665.0,
            magnification: "100%",
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
          enemyId: "062",
          enemyName: "ペ課長",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 1200,
            dps: 1894.74,
            speed: 11,
            range: 200,
            rangeType: "範囲",
            kbLevel: 3,
            money: 450,
            freq: 19,
            foreswing: 6,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 1200,
            actualDps: 1894.74,
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
      stageId: 2,
      stageName: "3階",
      baseHp: 60000,
      width: 3800,
      enemyLimit: 10,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "5",
          treasureName: "スニャイパー",
          probability: "100",
          amount: "1",
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
          enemyId: "262",
          enemyName: "やぐらわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAHBgURDAkRDAkUDAYSDgcbDQscFxQnFxIkGhMpHRg7GhMmIx8vIBkrIhwsJiMzJBpFKh48MipBMyQ/PDRROCdDQkFGQjxTSjdYSDtxQyxUTkupLydiXVWVSjJpYlN3X0q4RCzLRjLlPC5wbWyvWkN4cWaFb07oRzqLclKIdViAfXybfV7baE2ni1+Qj4+akYLtd223mGeenZysqanoonO0srHGxMH5xWf2v7nY19P+34Tp5uX58uv///9vMCoTAAAAQHRSTlMAsEck/NcRZDNz7VOGG7+vn/9q3PI4/4NMZO/+2P53/6L97v3//v/n0//5wv7+//391P/4//v///////7/////+3nS8gAAA95JREFUWIXVl2t3sjgQxy0qIl4RxQtYyIpFESQsiYlGwvf/VjvYnmdfbFujvtpRTkIO8+M/kyuNxq+mL5eD35/43X0WZEWw0J91XwRFVsD/8JSKwfJQFMjJChdlRf5uPOhuvOdFhhx7hOKR7bhpkQcz9Ugg9LxI3el02jFWSNPs6dSNC+Vk1KEXseNMu51usxllM73X7dmOg9SSoUPooH06Ho2bcNuMilnd2h/2p7dI3u8BBofYndruStNver8AgGjaCNrj6K4Eo9PvdbMYALUZUdb7rDW9Ymz0u0q9Mdml8e5ws138by2NJireYPPsB5srAjTTarUsuNpm68vqO8vsKAJ0D1n+sXBbb20rO/rg6x6LuIV2qkNJ36Xu+Xw9W2/tQp7PqGWdztermz4CQNervDpv7ZO8XrOWc75KiV4BXB8GOCD6BCGk1/PJbVkFBOQ8BGhZrmtBElur1bTuBBc5rfgRQL9Tm2YYWnc8NB3HdSwT7ZrqAK2hNwbwQn2eUxZ/3Ayt5ooS9F3cWwSLA0yjHhWcEf/LtopDUfe2nhd5eL4IPC4E57Wza7k+OiguKTuEyTZJEpQkogbEvu9YFhDwTFFBkjCMGfEOtFYg0hrgAICqAYwIM4qZZF5+A9QKIATH9xM1wHiFhaClwAnFdQgC3ZLg+yhX68j3hArKhGD0PQAAYzAOgOA4iWISZxETZUkEfx8soBt5YlmOCyPTiZZK/pBEXlWSchY0GssIg/+nmR3lgUQozXOM6zVcM6em1R6ZpmnZqnOh6SHb64/gmkwmfbM9soZ9czi0bNW50FtvNuE3v79Ud9jOOvzW/leA0+Vy2YfhEYpTGO5Pn0WhNpBrwAXGwTEM/66q6gKeJRT7/Z4ungPsbwDgKAO63ymAgr0EgBCeBXyGsH9ZAQAUJ+OPIXBVQP+HEJ4FvKzgTw743TPeryHsnwa8rCB8VcGfXri8quABgJDf5UARoDfGPmPyBiiFZJvNpgbAokoDFYIRLPI4JbwEwAfGhPlZKipJ4jXBWGFvHASRtwVLWA1Ikm2y3SIqRbJF0IoOd1c1AMCbYFvmADgSRkiCMS4lxQTaSXR/WZxxWQouCShYf8AeWTLBiJSsrCTnZXT3m8eYQ8CiPhtsQv9DVGWdRwK7fSXr5ujumrLYCcnhSco2YZqUUJeiPu2QSvCyZCS/G0EOCjjhnB7DDQbdjDIGOz2pZEkZv//RpS9vZwPBsb9e+7KqX0whpxjGFOciv7/DD/ISDkgEr+ojMmEcFGCoruC0ReHUoLA5zVer0Wg46mqa1h3Zo6HtBT1N69j2eGzbk/8o+AcF7vxDHx8aNQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 100,
            dps: 11.95,
            speed: 0,
            range: 1800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1600,
            freq: 251,
            foreswing: 52,
            backswing: 27,
            tba: 100
          },
          stageStats: {
            actualHp: 60000,
            actualAp: 20,
            actualDps: 2.39,
            magnification: "20%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 30,
                duration_s: 1.0
            }
          }
        },
        {
          enemyId: "281",
          enemyName: "文化祭のカンバン娘",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3600,
            ap: 80,
            dps: 45.28,
            speed: 6,
            range: 330,
            rangeType: "範囲",
            kbLevel: 3,
            money: 300,
            freq: 53,
            foreswing: 6,
            backswing: 8,
            tba: 24
          },
          stageStats: {
            actualHp: 7200,
            actualAp: 160,
            actualDps: 90.56,
            magnification: "200%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            count: "9",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            actualHp: 320,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "400%",
            count: "9",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            count: "0",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
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
            actualHp: 320,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "400%",
            count: "0",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "263",
          enemyName: "ぼったくラッコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 2497,
            dps: 3256.96,
            speed: 9,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 42000,
            actualAp: 873,
            actualDps: 1139.94,
            magnification: "35%",
            count: "1",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
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
          enemyId: "282",
          enemyName: "売り子エル",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 96000,
            ap: 3600,
            dps: 1770.49,
            speed: 10,
            range: 320,
            rangeType: "範囲",
            kbLevel: 2,
            money: 480,
            freq: 61,
            foreswing: 32,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 48000,
            actualAp: 1800,
            actualDps: 885.25,
            magnification: "50%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 50,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            }
          }
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
      stageId: 3,
      stageName: "4階",
      baseHp: 90000,
      width: 4500,
      enemyLimit: 20,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "250000",
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
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 4,
            actualAp: 4,
            actualDps: 4.0,
            magnification: "400%",
            count: "10",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            count: "10",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 4,
            actualAp: 4,
            actualDps: 4.0,
            magnification: "400%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
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
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "398",
          enemyName: "ペンライトなヤツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAaHR4aHx8bHiIcIiIYJiQdJicwKjYhODcAAP4RSj0tRD8tSUeRAb5lNWcTZVITbjQLbWd3OXl7N35RXF0YflrYA93gBOQTh4SQRZP5APkKm5zBPsR7eIIspnkDtbfVW/zmVuoB/gGWiM+RmoySmJrtWu9cvXID2dfuXPMu6h4Z2dAP3N36Yf4C5ub5ZP75Zf77Zf1T8TFG9zufsrYC/foC/f0C//7/f/+7xcj4s/hy/f6p/ofX6ez9/f3///8fh31xAAAAQHRSTlMATCgPoXOK/ckB++MzAo6IrxCx+vz8cDViSQO7//7/DQV8AQUu/ekNcmBc+MgJTxxCL874/xQpBAP///////8An0H/zgAABJRJREFUWIXtllt32jgUhfEVY5mLsWiBREDGIxJCTDtBDVYamv//r2Yf2dxsSDJt36b7gbXQ8v60dXRsqfH6i2r8AfwuQONEm52OB1vjUq390AXA5ljH/tc0zdNXQrTeAGw2ZwBw57MszUmzLM/H40uATVVmFJPmmH02y7IM/j2hDtj7vhmVgNd0XGIKvVGDE7tB/AWlBjBuj/NsRin2jBqgajch4hjpGw2zAlpDRpQLNTj4n4wIML29vU3TBhUR+gJRHbKzNTgEeHraEaYb8qdjBMiN/R9C5DkRWmcBx34CpCkAMxMAbiMT4i3A00ElIM2zwv+VZAiIMK4ANhcBtAoASv9XZEAh260PATbo3ltSegCYCPnHAXDfPz7eYwXwLhYl4N0Eq9Xdage4f1y/PP5NgMXNzeKDgLuH5cMKgA0B1i8FYHEzn998DLB6+P59eYcingLmz8/zxS8Abv4A/peA4XAYRfFPAe6WAFwxyPWj/wL4Np1O94AJNBiEbne9Xn8A4MSbaWz5rj9cPa2uCLBcrwkRBoPBgI3eAziWHdt+EHLOesPh1WS5nBBgMJmEzSbnzf4IgOv5/BLA9gLf8tnAxGY052Cgti8iFBx+IUTSHwFwfd03gNonzbH8kAXkX2LqQYilhwP9Q8PdbCbXpKS/6CdJ0r/wPbA91myGE6mg5SQ0Ultx8BMhMQD6qNYAjuWyJld6a6RFATABEqH0M0mQP+mc/6w7XhCGYvujlEItQ64NQD6XwzJJwPhU+lsVADageQDIUGrO9VaCoPaDiXwW/ZHxz9qN6sGCRXC9f5ZmD7lS2ANZjm0FBpPSn7dqABACWUbQXG5l0KWmCJs7LAaV6Hw253tubgwVAOrACgKSa8W6QwDQAKgtRlFY/OlEM3PLKa4sVQAakaHiGrml4r1uj0utqZBcSEn9lHRG5n6QmfN9XE9g+9S0HM8rHvQCwJTQilqBRpusMzKHe8HI0irA9lxGkSX50JVCox24Qi8JKQSGzPxfSgDd1E63EZ1EU0q91ZIHrvEHjEuO9UgshvsHP121UIdjgOUWiTm6UQSeFyA7dy0X6RWFkIpZh+lnuG+2TwBUPgruugyPerFHfeBGkUt+7rtMySDKDsJlE614DHC5ksy1bCugR2NfaOFGsYXu1NyzLU5/zT11Z6c792kCFni241iYqx/FHuOBFdOuCOHaDY8wTnFPnM3OXnUtz7Mc7KRv5pranm85CIDdDyyMUgmccnpcWc/dVB0zRN2MKWMHih3f7ITdsPsKhXFql+VqIxUBtpJZe5pWNDVKoGklVdUA9DopvDFITY3topKobeAChE31a4QagPZC0JbTs/RqoY0FvQuKQFjEOwAKgMcxL0UwtCBgQAozir56BwCLRmBG646nkUult31hZqdWqkWoAkwAz6Ym8uOpB0vPnloM30ZRjLp2u92+tAuOjWaSgnmRTzN2hz04elHksVDoSW/YDSW2Z7eR7Voj2ZaHryo+Gqh5yCd0LpkTKmA4YOgvozOv89mIAO0qAATP930Pv91e78qoC3n4Z9TtdDqfSAWCCMb6L0hfZEu9JtWNAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 1,
            ap: 1,
            dps: 1.0,
            speed: 8,
            range: 100,
            rangeType: "単体",
            kbLevel: 1,
            money: 1,
            freq: 30,
            foreswing: 10,
            backswing: 20,
            tba: 0
          },
          stageStats: {
            actualHp: 4,
            actualAp: 4,
            actualDps: 4.0,
            magnification: "400%",
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "102",
          enemyName: "ハシル君",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAgIEBAQFBQUHBwcICAgICAgICAgICAgLCwsLCwsQEBAREREXFxcXFxccHBweHh4gICAiIiIiIiInJycoKCgzMzMzMzM1NTU8PDxBQUFCQkJGRkZSUlJVVVVWVlZhYWFiYmJqampwcHB4eHh5eXmAgICIiIiKioqSkpKWlpacnJyfn5+oqKi0tLS9vb3FxcXOzs7X19fd3d3i4uLm5ubq6urv7+/09PT4+Pj8/Pz////x+JXEAAAAQHRSTlMABxBxkqCIOEgaJS7nVH5gNEfZtFX/aXWX8nqL/pn/qLf+3Lfz/8///tz/6P7/8f/4//7+/v//////////////A+xGyQAABLdJREFUWIWdV2l7qkwMFW5vXXpbtbW2tipubMois7HNxP//r94BUang0jdf9FFycpKcZIZG46KpndZzt9ttqpcfuWiK2ul/aMbG2249e9JTfund7n8tbQ+HHHa7HXBiDNu/cFf7E8MjUe68N0i2y8G9ebQHS4+WnPcmmKfdlYfSX26Z2NWYoPbX000IdWiH58GPxrH91bnh/+Wll9wzS9HyajWVoVdJ/iyPeKtdIdFcxFfdMwOkPV0k8Blcj78ngWaXODQXybXQB3DA3/WSUF62VwiAyP+ETJibbi1AexZeI5BEYZhAzoNqtRSeLXG1BMBDjAjlUhB2ry6DR/+ae24ixohJpdBJDQXlk9wEyGjwFEB4gyqAqkXVx+umIitDZFRb2TYqKgaoEVbWDgD0UQF4sqs1FJXJgoQ4WPKKqo1obir+wOkPVgApo8TSAyaS5T0AO6D4x4+cYRpT33SiUKushiNA2SVyflSB4VDmSYnPyJUUIE1FAQPcKasT9sMeoDR1Z5W9cAAQwXrt4CJ3CErzdQgQmJybbxUGrQKAmiyhvoMzTxC01BpI4zikKDDnqTD/VmrwvAcAF8U05tQymVQMlLoAFKFEltBHRNTNU3edA6RrZk11nyWOe1hvhRxFnJzg0qoUZQqZQ+iQuY71qUsP9Ye0ZkhhOzwHeLJ5XgIXueskct5NfqRetyei5XkbVC3M6swcggIkwrF5XNCxXx2zjMJ5GQebLKbwA5oSFsxpuXo/D6scOTGaZwDK1zZ7LLZ8TpGpW8ExLsQuLfnHJEegs/MqtCc4+4NMfeb71nSsn0SE/eNS3nFnv/3BOwco6ijQ3CTIkcZOQX1+/J7oRE5VBIldAVCXeUxg+hTFsRCyjAcp4JMEROBHyHKQUWlkQ/mmRc7m2CVhSt1jEgmUJc3TNFy0as76weFoSZz39/F8/O7WXhXyxbD+rDmnO0YhP3ktcq353NLrTlvBSOD761V1Lebn+4kpD90prrhDhIJgrev66LkK0FC/t7wUKkGVHEBGt0wHEbyqA2i0v734tNWAl1QMwLjskGXJXZE9wLQ6AHlLMkiJRHQSE4ggAWwGmNBIbpYkMWoBGkrv2y5DnPoHON4xgn1Hn06n4+lqUg+QQ2xOJwpjx4zkV4kHIg50c/rv8cplSR0stwfusX8UIccxFNs6XXWv3xk7n26RBvjkSCGNDrlF1bV+Zu23gwSoU96sxXjENwEaz6uig8JHpTmgew5icyMFWYcXu9Bx7JATQlj8yBY3br0S4cNA+3DMOi4k4FFxgNnnG61qytP3hmUnEyCzpKeCye0iZBB9zQ4k59RcI0zD5DQY3Pu47y1I7X0sJH8yenudyvHGRRsT78JttcZ6C6k/9tZakBDPRxtEw4ghe3i3vzqRLYjt7oTKFhrd1vBzNtM+mve/xfU9kTn2NwLwrC/9FEX9zTtge8aAGa3OkgHR6i64N0z5QsCWveyDTH7z6niwjs1joycvoZwb/yO+JIClYpqq/BCbSf9XyefWk2edwLa2kAdTSjbLSf/u0HsbbFgkIMWObpEoJNvVMPv1tvtT98/L4+PDw8Pf19HYdMzVfPRvNBq9vr7+fXx8+XM+hv8B2sv4BrhZV30AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 600,
            dps: 947.37,
            speed: 25,
            range: 170,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 19,
            foreswing: 12,
            backswing: 7,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 600,
            actualDps: 947.37,
            magnification: "100%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "031",
          enemyName: "師匠",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMEBAQGBgYGBgYICAgICAgICAgMDAwNDQ0PDw8TExMUFBQWFhYYGBgYGBgbGxshISEiIiIjIyMpKSkqKiorKyssLCw2NjY4ODg6Ojo9PT1CQkJKSkpQUFBRUVFWVlZhYWFnZ2d1dXV3d3eAgICKioqLi4uVlZWdnZ2oqKi3t7fCwsLKysrV1dXc3Nzj4+Po6Oju7u719fX5+fn8/Pz////mL9pFAAAAQHRSTlMABAgM4x1+khMo1ThCyTBRWWKucYJ7p5fBiZ+8yqzbte/IvuDU+tH+797q/v/v//b///3//v//////////////LaXl6QAABG9JREFUWIWdVmtjojoQXeDiwsqtb63WR7WKhfAwJOGd8P//1Qa1KyCg7XyhWnOYOXPmTH79agmlr6kDte0X7SEO1svpx0L+MYC6Q+CAjd6PAXpmZMHEHgk/PC9M3Ahg5k01VRF/BDB34IFk/vvHdjHS5G9jCPLsAI6IxRbysWtsJl3lW+dFbWqiyLMiSlBKaURcfaZ9A0Lqb2FEs8BygiSiLGOMBp4+f3mWUKmv45RlGQ1JwJ85QMbSwN31nktC6u8xf+0tUkzY+WFMntGV2N+j0vksBlaaP6lvz9SHZQjdN5iUzmc0CC5fsNBdPSRCXVXPF6HihwjyzG0+f0aYtk6oNLKjwu8vDcifNwS7bUKFnhGU3k+JnzIeNA7iK1Bkz5u72d1hWjzPKAIOwshzzQ8Tc23lEKE5kpoIWMC0UnTqO+9vi1mn1x2sDBjkEMw3+vVEKnM7vqON+dsXSRQEPl/aXL9A4N1LLYEDM6whnmz+lSxxCJerO3VndQRqOqlrYKAXXid1x1vb572sI2CFaM35LLEHxYqll9HO3Go1CQzMOEBJhYC8Ed6i3DZR7Ws1DiVvcOKcKgBx/pmsn9kOQt+MfRBU0g8xR4iNmoTvQlmh9HRKyyyy1ENpRt1nvF0zogiQ+xYAnzE0a1LeLcSRmxLwT0ZnH8vODDpx5m8eG5G8IRQWKqDhVdP5egr1WuGVomtEcaECRrF/NSEfwMB8yKIwsNOw2ANGnGtHKQGO2TA8t5DmHvVBcZJyRr+M0Dn8frTa5BVhyCqMMqMQflkzjU9L7UEK8i5gnlMyc2LdVJl4mwc0qnrIYBnAB4XZTtwHVxXNjKlzYkWAkqy4lbYYYe6lZkItr6Tj1EFFwNDotdAgDFxKLVQE4CyeivbA8KZlJsWxyyoAXAlWySD5dam5l9ICsbyEEkJYHm5Gds0pKBucUQeWAFhilUhgidnMgrz1syqJGRdGcUkw6o4ba1D3Ac+46sklJXAEtGi0hZd9xJVcXSoxwFkRE68apaDuQxaGlQTyRpYWXQuAvCQJvt9KuZ89CfAKvTtH5pYKuZ99QXBrXDXMg6B0Xw+A0Pu9FgJ0K4Ke1oN6FuXO8hMGdWuREX7fvv7J0U56vRKkwQdJ8xzvAVJ0pYFlKTwiMK1nQRl/4pjWAPAJgMA/z1SK3t9Ws36DlOTh0YIeur9d5AhHFKZJCA9DVVGatCzNIYYQRjUAWXg8AgAOwFm1rCdxDIsVVIwFwsP7H+A2C5kDTNybBcflawZDAJzc4XTdtmHFsXcBYLFnmi72w5AgD19sOQBWFOj9XpurKgt8eVtgL3q9yWar69u36cbmDeD9CyJ+q5q0Lmh5559LD8yJLPwSZVVVZVlRR7oXXSvzd6223jXOk5S6Ze+Wugv7qtCkdT2KfLWeq71b4/LEuNx9qTtrWY/KzKVnvheKUAllsEcJ/ydFby2LhQsREd/Hx2Gn0/l9i04ew3fLw9j7bLvmKKPh63K9Xv/J479b5B//z2P5OhzVevpfN9iiR9TF8T8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 557,
            dps: 696.25,
            speed: 4,
            range: 451,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 557,
            actualDps: 696.25,
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
      stageId: 4,
      stageName: "5階",
      baseHp: 120000,
      width: 5000,
      enemyLimit: 10,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "100",
          amount: "2",
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
          enemyId: "108",
          enemyName: "バトルクマッチョ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 83000,
            ap: 8300,
            dps: 3233.77,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 77,
            foreswing: 18,
            backswing: 10,
            tba: 30
          },
          stageStats: {
            actualHp: 83000,
            actualAp: 8300,
            actualDps: 3233.77,
            magnification: "100%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {}
        },
        {
          enemyId: "006",
          enemyName: "ゴリさん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAgIDAwMDAwMEBAQEBAQFBQUGBgYGBgYHBwcICAgICAgJCQkMDAwQEBASEhIVFRUaGhodHR0hISEiIiIqKioqKioxMTE1NTU7OztCQkJDQ0NHR0dOTk5RUVFWVlZbW1teXl5iYmJtbW1ubm51dXV+fn6JiYmVlZWenp6np6evr6+4uLjFxcXNzc3V1dXc3Nzj4+Pq6uru7u7y8vL39/f7+/v+/v7///9XpAzyAAAAQHRSTlMABgsRGiQsmKc0Sj1VuF7GiGbsb3v+kp2s37jPwf7Vyv/e0//n3P/x5f//9f///v7/////////////////////6GkQNgAABV5JREFUWIWVV2lD4jAQXe5DRFgUFAGrZYM9krRN0iZNk/7/f7UpCNpDl80HbMF5ncy8vHn99euK1eqMpov7+/lk1G1d8//V8N5kuXk9eN7+9WU17/03RGfy+OpFMRciiQnar27a//n4+x2iUuncLK0k89aT/0Fo9Vf7SKj8slQCn+ed6wF6qwPNdP5laYF3k6vr0J3tqcrLSwv02LsyvjN/jbK8ujR7vTKF9uQZy2oCZqVw2b0KYLRGXNfjc0VeRtfE95Ze0hSf62Q/vWIP7Xm9gB9LHO6v4EJ/3ViAYgvSG/ybCu3FIS4TQJ//qgxv+v8EGG2CcgfViVA6U0rH+8W/9tCdHcoV1JwWgFoxxpVEm/HPZezcv5JKAeJTT1WISaYSZ/gjGzvzXSjLCSjiJyqTggcuihl17n6iQme6q3VAIshZAB3b2lrAsqwfMmh1529YVCkkHBdZDw8PWx9hd2u562/70J2u3kmNATqLcAAeHiycyIwHmHx7oIwCeax+BE37sywJQwIhUxmBxFs2c6m3LCtQJY2MubZDOLIxXjcWob/ck6zxBB2X4pyHDuYYJfR10lC+/vJAG9K/ZJCEiUpjLpNECW/WkL9RwFL62typz4SyKDLs0JKap0i8rsV37ssHWBv+m3VB0Dw09NYqxojnKnquxrenu7ICakkQhCjiKj+dI14otOEk9GMjS7tqAcYblJY2oBh0IXSBS+QRQSmzAZVQ6ICQZ6SaQe/RryigElxImVIfhPJUEZVn1LG2W8v2aVABaC/2rNq/k4YojgDJigSYea7jhhhHgQ0OqzLAjRGQbwigOXQLcZAoIg6ME0oYj6ynaSm+u/SqEq4v95qBwKSfurbtxMw1ZxGxw6A0G9rzmoDo5JNTKfRFQQPXpVkE/MBHYeUwNUiwCnx+uSaA6qKqQmnBhBIE3PbLCezj6gYUdi4AeeLgLL8QyriEiib2HlG1giUAo6Lg02Uk2L4dl1S5NX6jtQ6owEk+b8KtDSOWSini6PA8uCmrSef+nVfjc00A+TwGZLt1AIAIufvNbFI1a70VlDWAXPjo8q2mls0YhhDay36nJmYjU4K6CpkixJd5xiyb60xK7i0atHD83MRCQ59LCgYAHHcpGgEmT6EqAxRP1hIDdsnAdtPiIvWaJvvkKSoBmAFs7lXB4DNADPBxlxI1qXEtA0kDZrSBO+faaO4ExaUhxKrBHxU1KGmZJNA1/lS48EzwtKBiIez4sQGg/4jKbdRKUAgwBfiMK91Tp1XYZBK7My+t9iATAQB29LEzlfmuOF6QTcNYbk/3dT+mZWSBM5l1hhxxasfbTR3g1+iF6DpCAi4lMKmD0zPifdNU7a5QfSCp4jBcbugHJ/hh3gBgLFlSjS8LguHEaeiIRiYZTxZWUzDb9r+UlhtZ1MdvG42ymWqsKmkKnwp/WuKDVCpcNzrt3qOX1FyR/UXnpO+fpgvZNdqr1njtmcl37IX5NNlmkb2N1BnUUPBUEfO20GwRWzerfRDzYpjxONVahmaE+emluyo6teF7q97qLTb7A3AggmZ0isDaAtsOvmgSIMcJS79/X2mPpsMtDMOIsghurSgObZvlnxlQk47m/g9vTMYhIC7TwMgnsBweOcA/00PFrhneOovhTy7ZjAdjMDMWEpYgh+IoORoG81wT6NBMMnxYj5t9eqvd6XbHu1CkKU9EZnyljdmHXdZpjIEdxBRZT4Npv9ftdjvtShqt/nw2GN7+tn3oA9sPGXGMKaWMxklSBBqLa0zyw8Pvu7vb29vhYLYYteoAg+HQ/Hp7d3f3/PZSfO7eXv68v/95e747r+L34XBQAHzs5C9jMBFYIuE5XwAAAABJRU5ErkJggg==",
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
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "100",
          enemyName: "ビキニグマ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMFBQQICAYKDAULCwoMCwsNDQ0ODQ0ODgoODg0QDw4QEQ8QEQ4YGRYbGxofHxwiIiEoKCYqKSktLCsuLyw0NDI7Ojg7OztAQD5DQ0FOT0xRUVBXV1ZbW1lfX11sa2tubm1wcXB9fHx9fXuCgoGFhYSKioiOjo6WlZWZmJidnZyoqKeurq6zs7O/vr7KysrR0dHb29vk5OTr6+vx8fH29vb7+/v////KOTvJAAAAQHRSTlMAAwkQQk/F8XPo2RYfspqK/zApN19ETub/WmzHp4jhf5X/y7D95cH/yO7/1eP/8v//6v//9f/+/v//////////DP6o/AAABHhJREFUWIWVVwt3ojwQFe32a6tdX9Wttj6oKBZNA4Q8yeP//6tNEPfrdi3CHM8RkbkkM3fmTlqty9budrw/1+P5atb95sHL5o3Xu820Xf6Y7glLFu0mAMMdzflxWi5gzYyWh3GTBcwzqTlad7rdXm80fKXG6GTaBGCVhijwXxab/f5wOGyRkWQ3agIwe39+HgwCKqTUSktl6HLiXff733qvgwCGWJvCNBfyOGni3/KeAqpZTHUBQf1A0HWjLLTX1Gg4CKR7vyHPPpf7JjFo9fbWlQRQWX+tFWW6WRZak8QuXgtOUAojgKiwy1g1iKK3spmXBIIYuGQgGKWCbzr1Abq73HAIUUpzFNhwWlJFdN+rDzA8KAEIASlUCoa50ZgRcKzPZe/pQyGk4iAFNI0gwCQiEnzMawehuwEYQ8FBGEIkJE1TTGOIHmtX9CQRECNAuMiVkrmgCACcWzbX9Hcs4oAzGME4BlEEIGJSG+Yvau5hdLCPk1gpwShlTNhackb8t3p5sM3A8k8CYspaKg35H/XI2NmIooKi/C9/nQa4XkFNjsWbFcSf3BUjUU0ueSty8qERIey0fSPjMApCltTJQ3cnSgDf+sSyuMZhRCKf1yqo8dHVsBG5rcIUBanbj7bdiUGfic11LhU5MCaHNMCMMRs5SgkOU6Gwz1SNeuhsuANgURrEtqHSIEax/WAlU5/VaQrDYxE3EmAUMSlSIB0dBIwjAJgRu2t7KHdgkC1kW0shLCOKARaxFaireSh3oGObS44xFmceKHvP/kWvSeTooE5hp+arFQD5NS5Nk+LZCwBaQX5dIr35iYYS8n9WUAAYWp0Hb8FKAPEPgATuXl6dh/aafwuQR+6ePg6rAMpSvgggQFEX2awKwEqa/g6AwyJB1UEYHfS3KygBRKVCjZMCQF/KAosLhqhDlUyfaHCZSDQ+gVeyeZZ9D4BR+T2vAijbWVELXyw9t7pFBcD87IfwV38FThyzUawAWJ1XTlL9tyqUPLIm91UA7ByxUH7RFRqcdMKmoQ4AD1BuPkNw25TL+CR1AGQQxER+8ofp8ry9WgD6fcvshFPqimGAZC/nAGd1gqiPS64ZhCyXSnJkh9bstQ7AnzSadGtHI9vK/SAM/OdYmaQWwJmJlgihKx0VDZy5OevYd6pvJBZVAJPkDEDgaUy2c+Ig4C77d5ly4+vr/r0CYHx0/NF2MEWp81fUHwyeScG/pwRHuRW3m8cKgNEhT5mhW6phsWO6fLh/+OUiy9fTj20/YZuOV6WPvX32kqnk7phHrODMbDQeFmJFVpNlv7vYzqrFsf36Nj3w3Wj1ETrenaSwkMts1rvrtbpPV7TRu3nqrI6Ldmf2JmzIs2I4dZOzyaaeE7Wr4ux5re6kV7ZneShaeHHsS5qc+pyTBdDZqlBSz7KjuhN+AyB2pZDaIMh9s6OvkyiVnCNu99PouOHMW1CyPvvYqaPRgafTG978+Am3/buz9ZdB/8fNuNetheLd9B9vbx9+3d/f/1eavXy4vX38+XRhPPkNKj9rZfPfg7gAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 600,
            dps: 1125.0,
            speed: 30,
            range: 300,
            rangeType: "範囲",
            kbLevel: 3,
            money: 600,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 600,
            actualDps: 1125.0,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "067",
          enemyName: "クマトーク",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 50000,
            ap: 2800,
            dps: 831.68,
            speed: 35,
            range: 400,
            rangeType: "範囲",
            kbLevel: 10,
            money: 3000,
            freq: 101,
            foreswing: 15,
            backswing: 86,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 2800,
            actualDps: 831.68,
            magnification: "100%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "033",
          enemyName: "フルぼっこ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 1497,
            dps: 1952.61,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 23,
            foreswing: 14,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1497,
            actualDps: 1952.61,
            magnification: "100%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
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
      stageId: 5,
      stageName: "6階",
      baseHp: 160000,
      width: 4400,
      enemyLimit: 10,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "400000",
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
            actualHp: 60000,
            actualAp: 3000,
            actualDps: 1800.0,
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
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
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
            actualHp: 60000,
            actualAp: 3000,
            actualDps: 1800.0,
            magnification: "100%",
            count: "1",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "110",
          enemyName: "マスターダッフン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQECAgICAgIDAwMEBAQFBQUGBgYGBgYGBgYHBwcICAgJCQkMDAwODg4QEBATExMVFRUYGBgdHR0mJiYnJycoKCgpKSktLS0tLS0vLy8wMDA/Pz9AQEBAQEBDQ0NDQ0NMTExOTk5SUlJcXFxgYGBmZmZqampubm52dnaBgYGDg4OOjo6YmJiZmZmenp6enp6mpqawsLC6urrExMTNzc3T09Pd3d3n5+fv7+/09PT6+vr///8Ps9WbAAAAQHRSTlMAAwrk9pe3Ev4ZLk1YI81qpH42Qw2LYOKbcr5S/IGpodfpcY20/cn6ue7/1f/+4v7/1/D////+/v7/////////qrKnsAAABERJREFUWIWlV4ly4jgQxc6AB4jDlRCOEHMZg7Esx7IO6/L//9XIQLI1VbuLgMdVRaFH6/VTd6vRuAKn3XHNu+M61375H/Ams/VwOF2/+fcxePMjZV9fIIL7+esd653RsVRaU5IBkk9vj+F1/cWrSleCEpywzc0ETm+ZE6aU4eAsim4ncHvNT5AhxClBGYbbse86r7ewOIP3Ay2yOCOIGCl4vvvcBBv/BoK3sFSyBEaHE1SGGYBr+xjcCdaVVpm4EIhCSUytpXBH3aM0yzQyBIpSVhJMD8tibfv/Xn8VyVPgXEs4WywWQZ72gnRot9xpz4MwZIaARQlIwuWg7bT3ae+4ce3in++xyT1QFY9jCLMMHiaesz7MZnZJ8BYpN+5BEeUJiOPaDOgw8IbLl2crCb1FLitNYJElCYQAJHFsPlcDf/ZiFYAzTpWuOJZac64kg6AsURKH78+tZseGoL2tjxAu63NkXhRnuNLGUB/9QccqglFa+wcSXSklaAESCpTGVJFlx0oBZ0rq9BOEMS5xDGmRxKIqE67x1LNhcDa1+SXlRSEE5wVg6INIlZFKHLbj9nUCdy9PxqdUSEKkpkkWAVAUmdaIgs9R+1qB9Y51CVGgiEvNsTByUql4FgKhEJX4MOt3rxCcIqhwHBszSWW4mDlKkiSR+Uab813MrmwhqDXQCoXU5LF+cEKE1sYQIefUcBz/n8CZ4pMBOILSGMo8TSBaEF6JmAuUEnGFoDE0dUDXTjLKFRgSzjLEJYElB/TwNsjh9gqB+1aYUl4AQSMAIS6zhEqRhSEGq6DrDneryRWChr/FHBYUC1wkCGYAYgRhAqLVm2d26A+v+tnpBBGU3GRPZaUqGSVM4GjXG1m46ILOLi5RaeRjoH6vqjLsD29pCW4AEM2wEZMCVEpJI8tS9LOJMUgKXNYFXeDMAAU3NjZ/mxjTSM5qF9QNenrb+obzvCpVRoVxQO0kebSs5v+gPSOqEHVHIeZUf83v6O1Qi1MCJIx2c7tu8Bc6O3luiRq0bsrgN7ztpSuLZfeuAcvdXroyXdwRf+Onrmidj+5a3/CP6qShOt7mwR8M09P6igf37aAxys8SkDvmwxPG+DEJnAWtHpLAvdjgbgm+k3C3BKNTEh6Q4NSiH5DAe1SCYaoecoGzPiexspfA+Wv4aO/NhFVLcOjZXpb85mDke65Tw233ah9LxliS70Z2DE53djhug8ViOl0Eu1U9opl6HgNdbj3LPfibnJk2ZlCWiThXc5YInVon8nW+z5kZCcxIAr7rIWL66wYneKPNPk3T4+6gLpcMzMTecgtnuO3OcOj7+0s9VJDmC881sCUwKTDwFvhcjiiA4LgPPicTi32Ye3a3N2j2+61W6+Ujo8bLLAGoKBAoQDS+GoPz3Hr69ev3Dz6QUIxQc++DUfTx2+Km4PearZenJ8NyxkcYJbDAhID3l1az9++D/h9CNOrVnaAcqQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 2700,
            dps: 826.53,
            speed: 16,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1500,
            freq: 98,
            foreswing: 19,
            backswing: 55,
            tba: 40
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 5400,
            actualDps: 1653.06,
            magnification: "200%",
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
          enemyId: "040",
          enemyName: "ナカイくん",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 90000,
            ap: 4547,
            dps: 3327.07,
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
            actualHp: 90000,
            actualAp: 4547,
            actualDps: 3327.07,
            magnification: "100%",
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
          enemyId: "099",
          enemyName: "夏セレブ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAEAgMGAQEGAwMGBAQIBwYPCwskBQcRDg4WDg0bDxAWFhZOAwZFCg5YBg4qJSYnJycwJycuKCkvKysuLSc0MSU5NDF8Fhw5NjaTEho8OjNAOTpEQT9HRUVISEjAEC9lQEFMTExQUFBVVFPNHEZdVVRkX0lfX192XU90Yk7zI1ptbW1wcHCOblmDf3qBgYGLgH+jkQ2QkJCWj4ekn5egoKCtqqi1tbW4trXJyMjX1tbk5OTx8fH///8fjPlVAAAAQHRSTlMADJM73U6lFciEHi9mD5jsv0h5/ly2KJbG3Nz+Ov/x/3n//1b/mv+52nTw/v+asf//iNH84v3/8P7f/f3+////RhAZfAAABadJREFUWIWNV21jqjwMhXmVycvuUCYOFVBkvjCB8dCCbcH//6+eFFG5zg3yZQPNaXqSnERBuJp0/U+be7uvr6/dzpvLmtDVZHNeu3vhkRVlWRYFo8fQ7UmaJP3uW5k4muoiPz1k5elqJYut6dvzm6nK7SFM04Prb1LKGARwdqdoPR47zmI8fu63x7BjJSvOwTNKIQ4WL8YLZ81t2utwCY/eQj8VeZ4Hi9p9bekd/AWXNdyjgAde+9sjsYO/5hc399UCTq/dIYB2BsGMtGafRCvnHLuzPmOYXaphnpCa+eh69fUZyFG7XCBkFQUFWq2uoXNneLCUDgA7VnAKaLziiW8iLNZvDyiczO+ejycOwCJnDOSvm7awzW8Amre17gM4wRVYDOE7gNEEsEf3OdDmh9Qe/vNKDMtTwUocVMEvbgjO9xqQvcORbtV/38op0MdIUNO/qCsI3C1VEzRdl+vvi5NdQssivK9s5Qj5IyiqAZy6Bp2poYjQ3lmWHDwAmsDhDL54mNyTovM2wNGVfqci0jYVQey/7XMKlvlumFKoNZaMvteVwQHy6JY+jmCbsigP/85mK4wJJQGGBi1p6j9qzBHlKWxUP9AwnqrD19fZx8fHbDxbxWvEGIm3b/2HfTVivATHzQKyn4fvsxn3/1jC39U6jvfTkSI97iuIgATjRQPAGql/luC5BIDPz9k4iIPAtoZif/BQH0eUrrj7pf3WtiqIL0t+9nL5+fm5jDEvMGs62j4/BDBI7Fx7h59vwE3VGQ9hxgFmAB84McI0e9yZerxoADgWT5Q4rAE4CeNxhAJoV3Z4LA2KdSlejjDtcabld84fnP+x5PqEUFCU1P9Bm2TLuQHUCqpUAJ+cgSBer1CAaeL+NGEU69b+FwVW3mfLGWQAIghyEsd54v4sjT27oh5YNs1Ln0nmavUXaFjOghgagIXfGuAuAvvNUBoRSm6W+br6Ysc4x1DD6a+6Jr6tp/+662GWQAMKekZpDnJL3d/8BcG0dGOzOWuPKOsudHDIVU/0CWW4OJVhy4BWR0pCSbaRRcMNk4wAYzzhmpHCsMwhAON3f0GTXN71mS75aU6yxOWMifpmDwpQAEDSOpukKVeNdNSTdQ8Wk+qdkWLwBakty0PrcBRNRGjuS0r/In9w/xxXsyIgxabDfjHaJBtIlTr1z5WkuSlGfFyCVuL999nw3TQZmJZfY7KtUu5BAhEfd4RihO0u85Gbvowo8cXqArDs5LRkeVlgjKwuOwqYEUSEJgpcIMm5iBKcM663//03gLjk/mNJbJhHSEyIr/gZK64LC8NxbA2fJEEdDIYtCB6h6yjPtqSx7BWYgaS5w6EoScqg5SoAsALWo9u+dCqBiBhFifIEjSo+tex7ABDhGJGmPzmViLDjRB70AaAlgnlGMQniRvw5r0Z4Pk6E3qCvPrV0lZxQRhGCdfPCXx1MGUJ39QdPbeuOCKsyzdNDtbIVOUYXMojJP5baC3JXQOkd9CN3j4P8chcaj1pdz+axEyauTwmOYZyVFyKD9DdJbNrkWOJU3UZBhANyBUBrv8u2y00LSxwqKUOIBnlQVAkoCNp3Wrcrcyny5U2BYsgm1BNLCWCVrZp2sx1BO0H39/Y+iCJYSHR9g2F98Lv6SwneQrjSZrrdTk1XEeENg+Uo6fK7CerIMFGlJ5PENOfcR5sYWWq46dHowCLIMKGoqhjFnFRHzpNjikDPjP029FoBvD3UbZFUkl6fd4Ak8LE2z8ry2JYJLcQ876x5UvUzhhpSyIGSlmISfcwbIGwsIXyJ5o04P/JyOrZVo2KDANJmAMoGlLU4iFCfoIxmi79gRPsAhY0Zomyjrbv7gjHrhbTAYVsiXtBmg5pFr6LkQpzk+vvWCdl7f3/92A97V3uJzMu/itLf5z/tWFeAp+fnP3//NKzxAB+9vz/dI/wP+qouuOAWZMoAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 80000,
            ap: 3000,
            dps: 937.5,
            speed: 10,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 96,
            foreswing: 17,
            backswing: 24,
            tba: 40
          },
          stageStats: {
            actualHp: 160000,
            actualAp: 6000,
            actualDps: 1875.0,
            magnification: "200%",
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
      stageId: 6,
      stageName: "7階",
      baseHp: 240000,
      width: 4800,
      enemyLimit: 5,
      requiredCost: 160,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "4",
          treasureName: "おかめはちもく",
          probability: "100",
          amount: "1",
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
            actualHp: 36000,
            actualAp: 1500,
            actualDps: 2812.5,
            magnification: "100%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "39.3-40.0s",
            delayFrames: "1,180-1,200f",
            baseHpRatio: "100%",
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
            actualHp: 36000,
            actualAp: 1500,
            actualDps: 2812.5,
            magnification: "100%",
            count: "2",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "39.3-40.0s",
            delayFrames: "1,180-1,200f",
            baseHpRatio: "100%",
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
            actualHp: 36000,
            actualAp: 1500,
            actualDps: 2812.5,
            magnification: "100%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "39.3-40.0s",
            delayFrames: "1,180-1,200f",
            baseHpRatio: "100%",
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
            actualHp: 36000,
            actualAp: 1500,
            actualDps: 2812.5,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-60.0s",
            delayFrames: "900-1,800f",
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
          enemyId: "442",
          enemyName: "マドンナ先生",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgICAgIDAwMFBQUFBQUHBwcICAgICAgJCQkJCQkMDAwMDAwPDw8SEhIWFhYbGxsdHR0eHh4fHx8gICAkJCQlJSUpKSkvLy8yMjIyMjIzMzM0NDQ9PT0+Pj5FRUVKSkpLS0tMTExQUFBTU1NUVFRbW1tdXV1eXl5kZGRnZ2dqamptbW1ycnJ3d3d7e3t8fHyDg4OKioqUlJSUlJSgoKCrq6u4uLjAwMDKysrU1NTg4ODt7e329vb///80saq4AAAAQHRSTlMACUDYGxGrjDDEYOYlUTpzQoO4816bUHXbDKb/uIb/8ab/yDj04v9Z/9CB/96n/+/J/+r/8f7+/v7/////////zpxmmAAABSZJREFUWIWdV2t7ojoQNq1a6gqK96qg4RQOLiyecElCIOH//6szgF1720p3Hv0gj/PmnZl3ZkKv92dDxmgyMgZf/ONr65vOmZxd828RBmbAcrBQ76G/ArjbNP6CmdqDbvS/ff5i718AZrO5626NweA7RPrWmXFeA+TRIYp4nm1OzqQ7wsCKG2dOaWTTLAMiUXYyuhOYhq0/8ewdLSPKuCAbvTsBZNHGnye2R1XhRRkXkfmNFPQdfmFASlUVjCZMuN8IoKe1EeQ8EhWYKpKA7MffYGC0KcwpkZVSqpQyT9ztRNe6itIIaaMBmqiSRFBFVakyTw+b7bgbwNghWQ3AiCwzkkAeapMBPU+7AaD1oSlDTpgsVesOqWDBpiOD3tRty8AIr65WhKObiUQDBP8Zb7P8UoesOV8WIIr0tLjljwzreLRWq2Ny8c8FleDOA2dprhc3+aPFKeOcxmfKXwDymgGPQh2hDjIYOyx/ZwmDAECIVicVrS764Ywx3gqJAQGVZSJedQFYpK1/EkVBQBIS4aROoSJU5McuI2katiFwMBgClPpNEWWU5UXcpZfQwkleJ4Bh0QLQXKSdmhFp+5SxLHlp5h00U6UagLCjBjVzu13uWxll2MOkrHMQJeG6azMjGL7aPqacM8/zMK450OVi+r3tMl5vndPBDnzbx4msRDcVvOGBBncbPwgwDrxEyrBjF7+BmByCACjgAGdKOHUNkKaPtc4bqj8DAgH2bN/HeY0wXmxP7r77ctFrAoEd4B2QkFXuOGkuy1w4ncoJpVh6LYDv2TamSmW0GQwqXdx07qPe9GG0CRoAHyKwPTtJItKONrG/lYXRzNSXh83uAgBi2HlYFIxcJutZ/9ofuD8f5uDXAnh1IW1cVpfZVlVseU1j/6O80HTjef4OA/UGAGPbhzyUBSkuk7V0tZezRo+TD+evQ1BfFBESwNl+YO8giT5IgfDfwz1tK/lkDH/cj977W6kshIRtpmQpKMhgZ9dqxKR48a8Un9VpfPq5+TG8eycKtI7lqzWgygw3UrRxXv+UACLz2DH7vad//zs7ow8ZmIalql6byjzfhpTsYLBI2HGChdvRGD398ysOrY+K6h+FLN4AVIUHNfC9HTAQSZk46/ra+fQzPh+nn0h6kapCvAWQUAwMaSClIJli9VQB9rGz+Gw89I9FJd4BqMirxRBg92ieOHQ1sD9/xr7JQKyq/D0AAQAPOmKmId1aoZr99jP2dQksmOE5f88AVFBTOEDx0Z/ZNxE4ZVVmydsySKgAyBk+G+NPuX8xLYTRNXsuXx0PVQBN2/P53ON0a8Xxp7l/lQKxHS9feqaSLJNVZkMKHkcPsVLUc1ZfjmYAgDIZ+0b0quSJBzcsvPN8/IDGjoALzvLraTZNVQqtbhxjSmGvJjQqQYhJZD/qvZX7nPH4xm4BgGaB9nVz+Lhx3QNTOXwLBzpmdZxMzK8DgMsBU/+1nY4GY00bhbJ03VLGK1Q/6d1+a1kzebrWCFQh41kq0+47cZkXxytJ7VSmy2PBrc47EXTErqchi+XHRSo63UtaW8TlSfv9ywhlav4q+bqrO5qexKtw72ZECjdV4tglAtQfa+sTT6/h9mcYJ2VOhExv3k3B9L0TpixcXw+rF6sXCZFQEVu3s7B2z/HJMl4dhUzsP2MvY8Qnz0O9f4PFwJga715n9MOzOYMbkrfb7ebz2aR7LbW7xibzw8Sc48ZgvW8m7eObtwukPwyHj2D39z/gc7X7+uFw+PDZm+P/5DIk59P2anQAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 240000,
            ap: 2400,
            dps: 605.04,
            speed: 10,
            range: 200,
            rangeType: "範囲",
            kbLevel: 6,
            money: 2000,
            freq: 119,
            foreswing: 16,
            backswing: 20,
            tba: 52
          },
          stageStats: {
            actualHp: 240000,
            actualAp: 2400,
            actualDps: 605.04,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            },
            "wave-attack": {
                chance: 100,
                level: 3
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
            actualHp: 36000,
            actualAp: 1500,
            actualDps: 2812.5,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 36000,
            actualAp: 1500,
            actualDps: 2812.5,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            actualHp: 36000,
            actualAp: 1500,
            actualDps: 2812.5,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
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
          enemyId: "084",
          enemyName: "高校教師",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMEBAQFBQUHBwcICAgJCQkJCQkJCQkMDAwMDAwPDw8RERESEhIUFBQYGBgaGhomJiYnJycnJycsLCwtLS0tLS0xMTE7Ozs8PDw/Pz9DQ0NFRUVHR0dJSUlNTU1SUlJXV1ddXV1hYWFkZGRpaWlsbGxwcHBzc3N7e3uCgoKHh4eJiYmUlJSZmZmcnJygoKCpqam2trbBwcHMzMzZ2dnm5ubw8PD5+fn///+zH5CrAAAAQHRSTlMABwyq5P+6HPXOJRQ4V41wfJwsZEf/V2uQt0Hj/36Mnslu/K/W5b3+yf7f/9Lq////4v//8f///f7//v7/////4OoCXQAABDZJREFUWIWlVotyqjAQFaqigtX6tmq1+MAYSDAxhPDy///qBlHbTm8Rhx1HGIY9bM452U2l8jsUo/Wfp0+E0XxTSwH0a3W9FEC3Vi9XwWjWUUoBjLeDUvmVD6dXKl9ZHsrJqOz25UTQ97tyIuj2upwIPeejVH7l3VmUBRiXA/h0Svro0zF+PXuK1cns7iPVGA16vZ4x6j/hDGW90S5XRTcmzul0lLEZPVGCejGi1p9MdlsTQcT80/6Z/NRHaqU1daDn+9AkDJrTgdYatAu7s2UvFXVCqSeEoCbwA+7sd/ZhUbiI1Ii9g8DCF8KljIggDAO+L77DUx+1He4GVAgkfxLHp6tBcRbenZEEoEi4gYBBZAEIzKnxBIupEY0DhwL4ArOY+6Fg9scTCGlDU5ee5WHkcyi5TM7nWNgLrSjApaEZGxMQ0wQIWF4Sheck4uvfBv9fKL3dXn5LfSMBtQAlNEzOgsgikmBfhMj3xc7afqrKyInOSShimSlzs0toPzaksgCU08NgYEfnH3FFeFhDz5YVJ8GmyYIgjC5Z2X+SIewf8KB+BPJdQSF0MXKJVCCMOfWFf3JOYQoR7vIN2bPl9wWAEEEAEJIYhPp8uxiPeu3lMZAQYpnbGEanJGQWIpSlQQmGELt4eslRjY9jECencR4NHUygBbx7MEYsi22uZUsI2+eTnG2tTSFhGHqU3RAoxEjw+0eV3mKSNzb1JfEYcJl7A2CUyhXR1VeSkt9WRsAjFqWYfVsFgFa1nZv1LVoriqBHsPctCOKNwmcu5RUA10PkRuGFBoTnL4X7oTEzKQM3AJpdXLM4gPJqMmplKrA7F3hWbCen0bY8Aq55DNMrD3hauJu0Hc9FN/6we5ficu5TjccDrg+/0jzpqZuhNnJg691Nng2z6ECGyV1B624IstS1iQOrD0+gHXhV78KidcfynO4UWfN5tf0AoQs8Rm4QDNzpYNSE5pCJeTNfEP0NeVLGOwlfa/DQfFhDER/W83aT0t9SOQ4kQJZIzZunPIaGtdqQxHT4kiOpsUKEEN+99JM0z0JZutzX85qMIY9w4/VvKfTBlJAgSnsRdtMA1gWIIsStFKA2F5FV7eRwIAHiJInjKIsQyjVQDHkUZwA10we1lz/ztfYMhT/mAccyPZ1OoTXMEIaN+t9CGCseX4fINUK5iLShJ8y9ltB4y5FB6Tsiir8DJAGlckgl/nyYVVDt5u4HfZ2O0x+LiF3ocRdeF1Dt5O8GdR3GPyqQ4bvQnOEMoPnIyRIgK9wPIylFNs6gy6fNS3794TlF38XpPD0tx8u9vV+tj+mslbTYHYnQeHl8UmvZKePHsV5RNU3T9cFayiIf8XG72ngt0JYGJ/l6sPwiSlsc05NCuNQ7nQLnbaXLkyQ59bWvaHWcME7Cla4UOaYp3Y3jOLN6vd7MQt69NGfbw+pv9f4BbCHvZEVG2J8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 657,
            dps: 821.25,
            speed: 11,
            range: 351,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 24,
            foreswing: 1,
            backswing: 23,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 1971,
            actualDps: 2463.75,
            magnification: "300%",
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
      stageId: 7,
      stageName: "8階",
      baseHp: 320000,
      width: 4400,
      enemyLimit: 9,
      requiredCost: 160,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "100",
          amount: "750000",
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
          enemyId: "036",
          enemyName: "アヒルンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 909.09,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 33,
            foreswing: 12,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 2000,
            actualDps: 1818.18,
            magnification: "200%",
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
          enemyId: "036",
          enemyName: "アヒルンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 909.09,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 33,
            foreswing: 12,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 2000,
            actualDps: 1818.18,
            magnification: "200%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "036",
          enemyName: "アヒルンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 40000,
            ap: 1000,
            dps: 909.09,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 33,
            foreswing: 12,
            backswing: 9,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 2000,
            actualDps: 1818.18,
            magnification: "200%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "109",
          enemyName: "ぺ仙人",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 650,
            dps: 541.67,
            speed: 11,
            range: 280,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 36,
            foreswing: 6,
            backswing: 30,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 3900,
            actualDps: 3250.02,
            magnification: "600%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "109",
          enemyName: "ぺ仙人",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 650,
            dps: 541.67,
            speed: 11,
            range: 280,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1000,
            freq: 36,
            foreswing: 6,
            backswing: 30,
            tba: 0
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 3900,
            actualDps: 3250.02,
            magnification: "600%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "331",
          enemyName: "イースタールンルン",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 150000,
            ap: 3600,
            dps: 2634.15,
            speed: 8,
            range: 250,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 41,
            foreswing: 12,
            backswing: 17,
            tba: 0
          },
          stageStats: {
            actualHp: 450000,
            actualAp: 10800,
            actualDps: 7902.45,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1800, 1800],
                timings: [12, 24]
            }
          }
        },
        {
          enemyId: "032",
          enemyName: "ダチョウ同好会",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEBAQECAgICAgIGBgYGBgYJCQkKCgoLCwsNDQ0WFhYdHR0dHR0gICAhISEkJCQkJCQlJSUlJSUmJiYmJiYyMjI2NjY4ODg5OTk7Ozs/Pz8/Pz9FRUVSUlJUVFRaWlpgYGBjY2NnZ2dsbGxtbW13d3d7e3t+fn5/f3+CgoKJiYmKioqMjIyXl5ednZ2jo6Onp6evr6++vr7CwsLLy8vT09Pc3Nzj4+Ps7Oz19fX5+fn///+Xho0TAAAAQHRSTlMAB3YVvtqMoB/zXyk2Qw9RZHOOMMna9aCyvYVX7nWdy/+0/5b/88rg///Z//D//+LE//L/3fn98fz+////////oApklgAAA8RJREFUWIWlV22TmjwUNcu+UIGKu1t17cpLRAgi2MAmhRCS//+vnov26XSmUxX2zugnz8m5Lzk3TiYDAtnGkJ//FZazWptoPN64S0oWe645Eo+mPu8Eb1hojSOw3riSeFFrHn5/+fp1OIHpSy2DL0zV/OfHj+0Igr3SitO2aTrBDt5wAuuoIZSqanrYb8eksO96go7mPtRgOH6C1hzwWtXJbAT6JCHkSksWz0bPkhlKzZYjp6APtAUCdzx+YoCCcvoJAuiDOjqfILCPWu0/UYKJy7QMP+EIaN1o4d3eQ4QM2/nzPCOWut7cADx9mdPn1du397e59ftI+6h0eXkKTTAse4oAPvd3JMvSNNv5U+P/DLjuLtcQPftz2/Mtw/V3aX4Oslg8midVFmRwpQTIq1lSlnfL3/Asy3Bx8GzXOd+li3No2rYnZNuxd5L12P4T4AhXqvaT0JwduytT4Cb7Q9tyQcgJnfUMOOccjIzxwyputW7DSxm4XHW6q1I4P8tTHOAUqhgJrUVe0IIC/spNco5Ktori/ngSRNCBXkKlFeWd6t3sWg8svwGteZTnaRRE2bmIuNaykGe8rteXMrBWB+gzi6KcQOUCcqpjRJVu6C98t7cvCTCXJZimJDjFOcYn/TkhkHlTnfGKbS7fA+u1UrKhmAQ0Ss9DgDm4aP2LgHtXrNjyoQ1tQ1LI4JRABlpoIRp6LkB4bakiJyx5Xe8wZgVO+2nI4RtXbSFBP9/dYOaG42427luQU5iCEwEUhKuqEqIqbiE4x3QRQBbnacARaTtJCWH58lYrQvYqiEiQ5hkhNMI4yqRqW1XebKbG47cIUxpFpBItzGPaz1JVl/NbCSaOT6Kma0WrlEyhEiSVbLle327nyFlhoTrZwdUgKcz1gib2ZNA+dBKppAIC2o/Ebrl6HrZO0ZypPgSNCsYOa8McuAtsMD+luzqvWsljd+gyh4Gs4ebVRVELFq+twfjNse5ElRWcHcL5YDhcKdjAZfjKusZzjDFPEWsvZWy4Zcu/j0BP+kcEE1v0chQ/RxKgsJVA8KHHE8hPEmxlu0XWUX28jCUQ8AaA19DYtwxaCzabmDG0YixBDd5hxOLiGrwUmxrEG/HlLXSRgIN4I2a3O9BfBOGJYPSTdsOAwBxPgDwO5bOPownMuAEFc8aXI4toJfLgolnZJoOt6BzIa3jiOomgibeZjfiTijzBs8MxTYuU14eVhdAAIchypnevlUjzmsJajNJgcf/09PT4eDd1btKCpk/3Dw+L9/fF4suf8fBw/+T8S8h/jtWr7rL2CkwAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 340000,
            ap: 7200,
            dps: 12705.88,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1080,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 340000,
            actualAp: 7200,
            actualDps: 12705.88,
            magnification: "100%",
            count: "2",
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
          enemyId: "035",
          enemyName: "こぶへい",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEFBQULCwsMDAwNDQ0PDw8PDw8UFBQVFRUdHR0iIiImJiYpKSkpKSksLCw0NDQ4ODg4ODg9PT0+Pj4+Pj5FRUVISEhPT09WVlZXV1dgYGBkZGRra2txcXFxcXF0dHR+fn6CgoKDg4OFhYWGhoaNjY2VlZWfn5+goKCnp6eoqKi2tra3t7fBwcHCwsLKysrR0dHX19fd3d3m5ubv7+/39/f9/f3///9p6OITAAAAQHRSTlMAAwgPOHabp8RbFWojLrGERiY5WHWNSFfl/6hwz4W+l7XoxqPOvP7b8v7PwOfX/f/l8f7v/v/0/v79/v//////a8UyngAABFtJREFUWIWdVwtzsjoQLdJ+vaW09U1btagIikp4EyAP/v+/uklAq70zde+3zjjKJCdnT052w90dLIbj56Fh9ICj/xs9J/OOh4NjGX8JoC1ihGpG0qX5lwjGq49ZU4fZ4n9wMI3vweaG8jpBHyh2BtD52tPb2xnBKhpS+x8fYV27UIThvojtE8KsajJMECK8qRaw+T2HNDwefQOQLMlq3jTsAAMwA0I5sbUzQMPqHOWcl0cYgJXmGaNO551Z2YigOz8jeAWar9mEM8ZcvYMrmpo19Gub+OgTBGAcmMq3U3GY8rDmeDmL4vkLLINCUOZ83wGYAc/9cPWkT60XDUTAoVwiBMaZEEuSTx20uIxp2qiIOtforsjonNDtkCZQkU67By4TfCLYUdIGg2HEW4Bqpp1SEE9SkIv1/n7/VbfzG+oahj7q914U4onP7+u/fNXEz3hHIf1cTqJoNpWb0mALANB7i7k4ee18cXQQQZi6tqJUzyAAJ/0UAEvKpkzI7iglEAcR4AFhmW+AhmJBx0MJUQ+zMYDAOG2ug7OcnQQBiNhf1c1PBMLaHyy47YOe7bejecX4T6QKYGVzi1oAhsRhkJ+OhfwqRjfn31nIbx1AFVCrXVOqjeGQDJzdrp1DErE8D6n6k5UqKft2a9Pd7bZlUCVyTth6IsdiP/GqfzsD3V1vO9aZ/E7aLcmTevdu9wHVoOes162IZa4AyhbA8+b3oGKi2ZvPdlGcyF3I8hYgrPfAWjLbTrpF/TApojVSiuCE74Ft2dpOihYgp+vpwDyohMqEH4EAw+0k7gBkTxDdQQGEEA+oMDZfR8VaAMgSqqq7YMCgGhjL1U4dAtHXZFdqSxnOzi3qVlg7D3feUX1Rl9VYCuIAL1j9d18RYCHOZPnRFrWy8rlN3wqzrcc08SNbySarKU9IBamGcr4jE6A5Wi2nLWdZ4VhIC0hBv9OGrrhHNDVCm9FJdH1JGxqyaAgBmAZi13mJMnd4zrj3SYQNIMVMhBRM0EeXNzlzy5oqZJBipC5CFCXx+NIzSgNEMQhgGFDi0+Kqf+mizxBEDqC2qlkRQ5nop1eoe3LcFjOYDXp2VfvkerQ2Sl07A9rgbrCnCaLBFV8zCMYxoJ62y1kp8XC1uByuu/E4gh5GmUTmkSvbaHZuB6CrhYpBQHcJcS4XnOHNplxAX3e0GS49kloXOlpFvKIByMsyzANFIb3c92lBvKqGyigoFMSvL3U09yxDLAKrIMbnITt+UxaQ1MfXuvxKYVFRRC4pGw7BPk0hVzQV4paJkyvK05j5+Q+L/xKikLKwIo6pXTwRrSEdAXXsiUth6WfInZ3LkoD0M3x0pqAzpU2weD9CXu59nt4WRFWpMy9L3kcABE2oKK+onp97C70nQns5cnnp8fJw9bufjPv+0/PDwxxT0U5KLwnfXx9F/HlFTHQL6vt4NTF/42A+Pbz9eXx8/Vpv4zR6n8//6WK+2UdFsZsvJ8/31wD/AhUI/F5yx1mgAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 100000,
            ap: 2637,
            dps: 1683.19,
            speed: 8,
            range: 550,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 47,
            foreswing: 11,
            backswing: 36,
            tba: 0
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 5274,
            actualDps: 3366.38,
            magnification: "200%",
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
      stageId: 8,
      stageName: "9階",
      baseHp: 480000,
      width: 4000,
      enemyLimit: 40,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "100",
          amount: "1",
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
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 24000,
            actualDps: 9473.67,
            magnification: "300%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 24000,
            actualDps: 9473.67,
            magnification: "300%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "066",
          enemyName: "福の神",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIDAwMDAwMDAwMDAwMEBAQEBAQFBQUFBQUFBQUFBQUHBwcJCQkKCgoODg4ODg4ZGRkfGx0gICAhISEkJCQmJiYpKSktLS0vLy8xMTE5OTk8PDxGRkZIRUVURUyYNjVUVFRWVlZYWFhbW1tfX19lZWV0bHB2dXV3d3eKhIeIhoaLi4uRkZGdnZ2pqaivr6/Sore0tLS9u7zFxMXMzMzT09Pa2trh4ODs6uv08/P5+fn///////9nyG5NAAAAQHRSTlMABj2jDom09hv/TFvT5yR0LpTD9EAfUp3/7nfUhP70lf5e/+98yf+s/XX/ytX/4/3+/+/8//7//////////wD/7h4yuQAAAxhJREFUWIXtlF1zokoQhpf4gSiCGteAirKbFVniOEMyXzAzh///r04DJtE92apN7c25oC8si5p++n17uufLP38ZXzpAB+gAHaADdIAO0AE6wP8R8Imw+iNvNvNGfeszWW/Z3mp7fDqdz6en4341638231s/PUtljCllQQnaPIxHnyq/OjBtKoiSoTwjJE13w8kfqrBmq+X2XFZNGJmlWRzHAYTdm/1BtjVan56fL+WrSuUsw2nktDH8nQ2r37csC/q2nu8PRBXFpX5VaYLf8x178KGL/nJ7PO732/X2QEnBWUHIK8AwkmUJpEZZUmOm4w+qL49noXRZCM4ZtJ2VnHDzqkBA+wLHCXKeU4qydPGfNnjrc/nql1JdaWkK9ZZfcYzjWnwUOAEGc8Hgl/y7BdGvcpUA5VpV7+lVVVBUO0hIngaZknnk/mJ/i/X7acjUoqyuQ+cZKIhfVKGoNDRPp7eA1fktH2YOfijW5orH8MG9d5z0pYRxylgUofvbBm6ZUZf0Sona8pUArflh4nm+6ySyLNH3GMUOerwF7AvJL4cBoFWOTUtrmsoel/Whu0VUEKXQdyYifLoBzE6ayuYwcOAmSUprGG9t6HTd7vFsmNMc9GCZpD9uWviAFWJtt3MQINIE7kAi1AAM3ayX7eR5+2eCc8Fe4t7Xmxl42BDSWlBY5hzFFGYPtTJUmWJ29ltC/8cpJ+zlvL1aBssb+/NFmGTNPWhEMUvhv0RlPVhGQNNNJcL5xKt9WF+//fz5bXm1Cv31ZhfHUYwT2hiGmadIAogbJeEFSRIC33kU7zb+BxtkeYMwipIsTTDJeAE14WgKKJ7mBBEmBMOZKJXcheEu9G8fRXgqJw+bXRTF0kA1GBDCdcXjBDpYlZSKdhVEEETwkEynU3vaG/j+ZDzzGpDnD90QxIOAxr3Rdc8NgoWBYX0fIxHFsEFvYdv21B0O7uBS5659b9v1hjFV5LXeoihoczbIMBaFYFyCenjGrglOTejV74E1nown/mDeG24OGxckhhCAvMR9E7vdYzhtwnUXi2FvPqg9jKCd/wL+vgvRtxUf2AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 300000,
            ap: 8000,
            dps: 3157.89,
            speed: 2,
            range: 350,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 900000,
            actualAp: 24000,
            actualDps: 9473.67,
            magnification: "300%",
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
            actualHp: 1000,
            actualAp: 400,
            actualDps: 800.0,
            magnification: "200%",
            count: "50",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "1.0-3.0s",
            delayFrames: "30-90f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
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
            actualHp: 1000,
            actualAp: 400,
            actualDps: 800.0,
            magnification: "200%",
            count: "50",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "1.0-3.0s",
            delayFrames: "30-90f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
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
            actualHp: 1000,
            actualAp: 400,
            actualDps: 800.0,
            magnification: "200%",
            count: "50",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "1.0-3.0s",
            delayFrames: "30-90f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
        },
        {
          enemyId: "332",
          enemyName: "イースターウサ銀",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 25000,
            ap: 1500,
            dps: 1285.71,
            speed: 17,
            range: 200,
            rangeType: "単体",
            kbLevel: 3,
            money: 360,
            freq: 35,
            foreswing: 12,
            backswing: 4,
            tba: 12
          },
          stageStats: {
            actualHp: 150000,
            actualAp: 9000,
            actualDps: 7714.26,
            magnification: "600%",
            count: "5",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
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
          enemyId: "043",
          enemyName: "ハイ・エナジー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 6101,
            dps: 3050.5,
            speed: 14,
            range: 344,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1101,
            freq: 60,
            foreswing: 30,
            backswing: 30,
            tba: 15
          },
          stageStats: {
            actualHp: 400000,
            actualAp: 12202,
            actualDps: 6101.0,
            magnification: "200%",
            count: "5",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
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
      stageId: 9,
      stageName: "最上階",
      baseHp: 720000,
      width: 3600,
      enemyLimit: 12,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "100",
          amount: "1",
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
          enemyId: "117",
          enemyName: "カベわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgICAgIDAwMDAwMDAwMDAwMDAwMFBQUFBQUGBgYGBgYHBwcHBwcICAgJCQkKCgoREREREREYGBgbGxsdHR0lJSUnJycpKSktLS0vLy80NDRERERERERFRUVSUlJUVFRVVVVZWVlbW1tgYGBqampzc3N9fX2GhoaJiYmQkJCfn5+pqam1tbW6urrBwcHIyMjQ0NDZ2dni4uLp6enw8PD29vb7+/v///9EYrlRAAAAQHRSTlMABg0YJMLa7oOOLDp8tNFqpERNWffhYJc6xKOCvOe2mNLA/PH/3f/v+P/f//7////z///+////////////////F9WOBQAAA2VJREFUWIWtlwtzqjoQxwtUa1Hr+9nqRQQUCWDCIwGS+P2/1Q2g7Tlz71GQ81dmFob9ze5ms0NeXu5K6co/9mgs33n1/ySpvf7y2/7U+q/1/OXx9rAfSKX/aH2AO7We/2R3JnCtFP7drZfEWreOvzTRUMbDXRH269pNOTFHdQDdLaSXS+kkzU3CL8mpMkBRVbWzDwkh0aEn7O4QYEJCc6DmUh7Frozfv3a7jW7l0rWd0Mb4sb96j9wX5t6PhMJcUalfbO/rLmC5Ns8xjDi/lBJGafLy4jy4C5B6+4gyFPGbe5LeUCxlxaNHgEN6+QXAkBuz0j90SX3AhSeeHeQEHlpe+kQElKUQ0dyKIKFFEWoAOI8BojQrblgMIK0ZAWf+1Ei+qzG1krop8ND2s+sa8tjNc3m8jFdArnzpyvgvLBF9nWasegQloLgygjG0bdtxAcoyDCsBGIEwzDgTGEbCABoggLoBLAiBWxHgAS/JcJ41ozQBtudYQepbAUbVUmApxjQoFi7PhCAII8oDK6qYAs+gH2a+K2rISzGRDoM28qxVJQCNE8pCC4blTi53c2D7aeJXXIU89AzZRjlXhAzdMLykZiOJWlr5ZBPC0Ahwxis30m0IQJDdWtlJntjO1HPp76jaAK8pwI5wodi1nkiBx5ZhO6UsvdiZNQEkiPFNgRXmM7oeQMy0bxEb8erz4FaD0Pc8zy/+AJCaMzGvPUH+TZDw+qsgGuhH/Ill/K/uASS5GUCeT+RGALU1VBoBJpuV2gjweTTHciPA+fypNAH8g+LdqBEgSEGv0wjA0HbRqAaMmP0GgPkhpXBzbNBIO0QTy3oeID6vofimarCZ5IEG7CaAF3m0mDVIIc9CWTQoYkFoNFD+DmCP0wSi9M968IkzX51OR8NyHNd1ncPpqiNwHRu4LjgeTubwHkCcdpbjLzd0rBDHznrUXea/uYYw1H2M0aa37D48/MmfZ4qMmGegdz2qqjvMA91JeaRVOXdJ81MKdY8mp7F0A8TksBCdjraVzp5LDR2GZhBpS7mUuoVgrQ5MfF48OrKJBBR11NJXnf7eWb1ftfjQ24tBb+Xs37uvinQ//m5n2JpNZ+322/Rt9nbVdPrWbrdn0+lHfzi4H4SkDt6H/Var9ZGrfVN+Ix62+sPO5DfAvzaVq9QtYqTsAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 30000,
            ap: 460,
            dps: 205.97,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 1,
            money: 200,
            freq: 67,
            foreswing: 8,
            backswing: 8,
            tba: 30
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 1840,
            actualDps: 823.88,
            magnification: "400%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "034",
          enemyName: "コアラッキョ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 1400,
            dps: 700.0,
            speed: 7,
            range: 200,
            rangeType: "範囲",
            kbLevel: 5,
            money: 900,
            freq: 60,
            foreswing: 21,
            backswing: 9,
            tba: 20
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 5600,
            actualDps: 2800.0,
            magnification: "400%",
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
          enemyId: "307",
          enemyName: "アイスわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAABAQEDAwMDAwMDAwMEBAQEBAQEBAQEBAQFBQUGBgYJCQkODg4PDw8TExMVFRUaHSElJSUrKystLjEuLi4uMTI4OTk8PT5BQUNGRkZOTk5SUlJSUlJaWlpaWlpmZ2dtbm5qcHN3d3d5eXl3hpKRkpOYnqOjrbOurq6zs7O3vcGNyf+d0f3IyMjKy8yp1/6z2/3R1djA4f7I5P7R6f7c7v3m8v7z8/Pw9/73+v3+/v7+/v7+/v7///////////+nT5MFAAAAQHRSTlMAQCQ0TQgVw+ej14ZuYZP41q5G2ct77fzZZ1OF/Sblw2T6G438+P7/DUf+////Df//////////F///ERwzAgf/9i3YcgAABC9JREFUWIWtl3t7ojgUxkepWi/QIlSpo+6GCroKDQYSE13w+3+rOeGmdoTi7L79o4GH8+Ncg/nxo1YdpX21furWP/272mpP7eTrrmq+th4z7yiaNdfyt7a1pbt8esy+pSN/ayq5PfL3DwIUfbU/50bd4dIXFJXxNFFXQ/vzmaGRNGqZW1GsGxkriqIajg9C/ZaitIbzre9v50NYK0r7O0y3NeyZpjGdS00nJmiSXkwNuTa19jfmmjl3/Wq59dVsDw209kJxrpRv1AJar6sgCP4TwCXk/wRckcSfAPgVgPPHAQxjXtpjzBoDohxAdztaBFCsvwcEAS484ITwIn4eRkI0AuDgtg/kWjBKKePNACTtAwGvSzGCgzHBGHsYB4zTbbMkchIQlhVBAjCOIuyFGJOgKYCGhAmal5FH4AGORORFvGkZ4b2CBUURZQ4YbAk4ahrCOSKRoFnlL4pwFK7rp7EEyCTyAJMbYSJEwxBSccj+ziu08zDhTQABpJtFsvAQd+QFQf52r2kjyU5kLPNBUC8o3PeYaD4LvBjDyMvtg8B7ZBp5kf4SQAKP/QFAhDto4PQP75rmQAJYDmBgWgjjhuMsh4nlUyy4KMUD0nQacUhpYclKUTmMvMEsgLOyYc5ZGQFXiMB8NQGQ4rsguxmGqhTM12Obqig31FwPAgRnXwGyF2sAXaUTX3vA6VcArwV01L7yWW7rED94LIS42h7T4lYC4m5/oG7G+TDBMHAYSVlMWElBHUMKqazakeJYMSdv9thIAWkbcJb1EQNe2g+0BhDH8Xjp6IuZsQ7lNF5/GPjNZUUIKcBfvs+sdRiSbGwKCXZdz0pAMkaRo78DgBB68/tAMNEQQH3r5x0PeAMPYglYUor0DHCbA/oFEFfkwNpz15pIQHjzTk6/hBDfIQCgqzs0QFNZBSDA6PD0k8xYROSVLKK851vj5A4BAPbYcrCbAmThZQOxvKNkPzDZHHI/sGZJBWGhGmg1l1XIf6GI6w4oarG3ZscKQLJQ9ck0q0JudJU+wS8AINwtZLJZvE2uAKL8vqe5LAGnY5LcBxwPWSfS0oOLfRnC8u8TuHC/FZJj2crpBKchZCMtYel/CThVApKxsU4/LPmWTNhlV4+ym5WAjDA20QrkOK6UA4tM8moNgnv1gMX47U2fr9B05bor62cuC7kOWoE5+uvj4+Of0+FwDyAJcfKZbNTlfjt3KXV1+3CAhw+27tI9Qnu2Rx//gu5XISfE8adi+f4UUe5o9jGVra+Za1lrDvHn9vfmqUS0ddd5Ndw9GtmbTylbc9bW+/sSjpGzwym1rwKAOt22Nl9q2mRlDEe59OlEV1UdIX28sDe15nBeHvZ7k4nZe355HjwXgnWvN3h5GfS1UduusweABo++Di7GhQagXq8/qj/1yQjgpAl6+k1wE46d3Ztz5y+cFK9OWeaYGwAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 36000,
            ap: 600,
            dps: 206.9,
            speed: 3,
            range: 120,
            rangeType: "範囲",
            kbLevel: 1,
            money: 360,
            freq: 87,
            foreswing: 8,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 144000,
            actualAp: 2400,
            actualDps: 827.6,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-50.0s",
            delayFrames: "900-1,500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "538",
          enemyName: "ウリボーイ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAAMFBMVEUBAQEBAQEDAwMFBQUNDQ0PDw9AQEBoaGh+fn6RkZGrq6vExMTd3d309PT////////cNKEMAAAAEHRSTlMAQB5m753h+P7//v///wD/2tUh8gAAArRJREFUSInt009M01AYAPDXLruSIQNjTAxC0HgxCE7v2gWiJC6aLRGI/xCJuGRRjKir7gJMJ7oLMByYxctwG2QHUHCKO80pZumJjEBMNUaPHvena/3sK9u6bgWPXviSNmm+X773va/vod//CLQDdsB/AN9QPgy7UElUVYKD/pbtgZbxN6PGbQDpEIZ1dbqtAeqCXM/eS1sAsrqm1QKQ7JjfAuhdoWCABZhNNTarV+iEzeDa1QHSWjeB8EWnCgjLXL5ERrUH4joj5tYxSKtWOB7FOT9+C1dUK1gYWAGnA7OYag9dwI3y3vtSE+IaZH0ZOMDAIpt7NxkWAW9COsJUBs7PfqUht+x24RK3yLPEiTLQcDTwFHK+EI/BPDpJDCgBYaCTIRDCgjSJVXSHGFcCjRW8o5uDFJ8U6SRmypbQJ2irNIog3sb+YOPnwwrQRGc8VmkIE+JE+SOR2qwCNNEQp6ZsGIzhf9a7fkwJNP384KkRqcICJY7Cz3VmSkFDLb045qXcGGTviacmkD2Tlpv8Ua+f4+ztqTYGCkFnfCkZ/PJfWx6Mh4eixTznyzAxeYmfAHFfgp8u5iHJJp3OZ0Xw3SfYQRF2iLyHP3KT3emwIi9+PprmPshgd6A0LXhdwN+d+PhQBtqOYnYlCvyMGzL2PucFGZC2Qn7tCS5hB9fo6Vf7SoCjuL8pcUoQ98y98M1XKYBQ2KA0zUUvwymOnA24/D5m8DQFZsN5WXGqu0F4kG/SI86T97vT9QqwB+Btfo1P+BWrG1DeC00Y1hKsBJaCLORMFRfnIqwaLI+fTwJERjbc45U365BwE5HTb1rDMGAY9AxXAi37GiFHtqcbXhIN9nRLBdCwS73mG8G4hVkwm22REV050LvoCYqirlKz3ttUW/+QUVcGiBqzkZKij6KMxnPVhQp/AbO+wCa7TIrAAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 55500,
            ap: 23500,
            dps: 26111.11,
            speed: 20,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 350,
            freq: 27,
            foreswing: 8,
            backswing: 13,
            tba: 10
          },
          stageStats: {
            actualHp: 55500,
            actualAp: 23500,
            actualDps: 26111.11,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "mini-wave": {
                chance: 100,
                level: 5
            }
          }
        },
        {
          enemyId: "034",
          enemyName: "コアラッキョ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 1400,
            dps: 700.0,
            speed: 7,
            range: 200,
            rangeType: "範囲",
            kbLevel: 5,
            money: 900,
            freq: 60,
            foreswing: 21,
            backswing: 9,
            tba: 20
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 5600,
            actualDps: 2800.0,
            magnification: "400%",
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
          enemyId: "044",
          enemyName: "ダディ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgICAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQUGBgYHBwcICAgICAgJCQkKCgoLCwsLCwsREREWFhYXFxcaGhoaGhobGxscHBweHh4kJCQlJSUmJiYnJycrKyssLCwuLi4yMjI1NTU4ODg8PDxBQUFBQUFHR0dISEhKSkpRUVFWVlZXV1djY2NkZGRtbW1xcXF8fHyHh4eSkpKfn5+vr6+9vb3MzMzR0dHd3d0GQiOiAAAAQHRSTlMABw4W5v8f2i8+VyVIbIPwyzdReJBhp7acxP907s+F3fjo/rip7//40f7pwP7/g//Rq//c/+7//v7+////////DzxqswAABGpJREFUWIWdVml3okgUZTEGBVwQAbcgKGCZYspGZKkq4v//V1MFSWY67WmQ98EYjvdy3/4EobsNDYl9ik8gfphhDwVBGkt98eLkdS4II87Sz6TDVhPEN87Sz9TTXheHK0/rSzC6RqZoeIHRl2CTA0s2QW8C6ViClbaDQV8XlCsGnh3FO7UfXtwUONzvY+D0rAP5QHDoAxSM++E5QRn6MHaVngSSgwt/Hfp9QyDITp6tQxBuJ/0YxMU2zUAcxyBaGX0aUtlBxC0Gvu/qzydCMqOY4yEALBDe85nQ3BqPGByEoW8+64TkANR44PsQxaH17EwwvEYAQkmS5pjkB+OpMAztTwFpSSitPj4qcjuO5M5+iHrQ4HP68WVVebZNraMMZdcISCkh1TdF4e9dsw0qLxVRkD9TiHCF04ywt9cEBIT+to1AWrz/oznbpoYS8lHRPCloQ1GlfthKIMi/inORhjFiGrKKFiUlWVrSWgP2t1YrXt2c2YtzABhBiS+bzfsN45xlEhfZxdHb+kpaHG6E5h93jEKYlmdDFIfj47XERZrA2ahDDobGKSvK+/1eFXGSDHSZqxq9vV+vl8O4UxmoM+bB/YPQOy1ifzupXyrKqjrsVkasCcOE3nGRV0wFTp+dZ6LusQmCcFEVFcMTenpyL2ouZAmEYZ6T+x2XRZ78Up5oZHG+4iUcxyEAOb0TXAaX62HUFS4p+qppARhCCGCG89xR52PtbxLE/9BLy43g1xBgMmCSoWDTol8zR/wXkjp2dsH/0LVlNJvpfycQzf3OeIzmrYQTu61ytV3kWg/R9TSIW68j0XDBQ3TSBLN9q4lm+BDPjAeyQx0u94/wmJKSy+iwVxfRQwI2PBAqbi1JqF0AtQvx744UVZWjJDvKrQIku4kh/FykzOpZRkmCki6NpOyaV4efewQCXoMoxTmCnfbh+HODsQVYe8GJgB+z+AF/2+W605skxP7aZ8a2cMi+81Zi/1ntEWBJ2DcxXK9BDGG4HuwRHKxW9syH3Y6z5bR2Hqx9PkiilblHYCHL8iRCXpdhJpv7GrhlNwCCgaMYAYr4ZaxHyO1wWrEJyIHebMtYwG4pCyMP1ZfxOIhPHU6KEbuj4mi3YIMIBtacZW3uxQEfYUYQ79oJZIsBPWc0idjr6xUiKG7s8fLRGEFrEqRFwHUrb2cY2KOmaFS36UCmwG7bY0MOtObsHs2DyZfcuZu47Lv4lpeHFgLxLSuDiSyoF1rY32qXN3KqCTBpI5COhPA4sb/Y+S5640YvPH3Lgr63KdgUtH7JMidHdfhJMb9WF+6OdqPvcguDcqUnbSSz3+Jgt1o0XjCHrvOhxIjI2Tnqf82kciHIO1vG8kZxkngTjdv4RNDqZI2NM86TdLt83NCirBj6xDlTmqXhdgDynLXRtLF1idnD6WCdkgy+2BN9PB/+waKas8H05WWdpOySfvlhoMjC+uG6/pwOZtYfXSWq2nJiWvZs9vo64Db93epnr6+zmW2ZE91QfgTzXxNJ1K0TOnryAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 800000,
            ap: 5500,
            dps: 3928.57,
            speed: 3,
            range: 172,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1600,
            freq: 42,
            foreswing: 30,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 1200000,
            actualAp: 8250,
            actualDps: 5892.85,
            magnification: "150%",
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
          enemyId: "306",
          enemyName: "パオンモス",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAgIDAwMEBAQEBAQGBgYHBwcICAgJCQkKCgoODg4ODg4ODg4ODg4SEhISEhIaGhobGxscHBweHh4fHx8jIyMjIyMnJycpKSkuLi4uLi4xMTE2NjY4ODg7OztAQEBFRUVJSUlQUFBRUVFSUlJZWVlgYGBjY2NpaWlubm50dHR2dnZ5eXmCgoKJiYmNjY2Tk5OXl5ebm5ufn5+ioqK1tbXHx8fZ2dnp6en6+vr////////W1D8eAAAAQHRSTlMABw4YwR7MKH42jelBSl6ftddV+Wh0fvnriJixoo/c/MXo//j/2rnm////8f/+/uD////////////5/////wD/UrmRywAABGJJREFUWIXtVmtT6joUbUUEFBAURIRDkRablibmnSL09P//q5u05VFe4tzz0Qwz0JK1sh9r72zr7/9c1i/BL8EvwT8i+GbdNNr94fDPn2GvVbW/23wC/jTyIaGMc4oX87fmzQ/x1eGCq3izJPXHjR9Z0ZjiHTynmPd+YERtSsr4OFZy0bvaBnuI46Ol5LxxLUHLl8cEcYzHVzphP7okj6DaOJI/LYbXMVRHiAGATBi5NkVKLDIGFb3Wr2GojLEiXuQBpGIUyhgDEOQxRd167QoHXqBSUuoP099MxZIIwTIC6V+TytqEnIpgkcrvomA3+qNBQGR8KIMNxeKxf0mSlZc5ZhQHwVkjhAf9Y0HZtVa71+/3eyMkzNGSRCeFYBaE0m8ewJvj+QIRQvAMbk09GwYKCB2VAlEd+iw/j3iIl3efoNMM0N/XtFZNYa5inkPL+A1SsO07zCLHbe/ZX3fk9oAAlM7CBGCifUMs2hUXnA0A7O0RPIZbQxVw9qOvPC9yngdgFlC6O4QGs8jr7whuOluMkqG3X8YKUeE8O6JAFxQEzkCntSNo+jvyWAWlGBgOD20feKYvQcFd065VNxmclowGQXx+4Vmok4RDt27b99Mnoya7PWclxRBwVkDaglCGuq4lGdvWE/00brR8weF+4GVAz0tIhisJFQHg9sZqfK4+qlZlxBSEpV3IC03pK4zZkRpVuFpH+p5g04pV+0yWL1ZrIRZOWXsSOk7IJfE8IA8IlIpWaYxkBCY1Q7D+sF7gvD4R5W2SQC+MZkiKI1+0C+lXqITUSm58JsmndT9pNR6iE7569FQsGUrSVaD77KJl9ZZpyqxGy6526dFGJcXxO10XkQatAu0Zalc+1mnKsw4ylUXJKHW+hg2pImid5ARk+KK5UpHV4tygBKIhvJBBjY9CHUJtgakcOuFJmUCFHvAw5EeJ2/xAASAGn36ZkLEoSVITxC1BzKkUpzwg1LBIHqovc2aSClNtDJsHncac4ILnMQmUSR+KDcKAIl4QJOmy/z2BkgHW2grXBT6RmW4pSYwB1TwLFy1QDDAeLAu8llGWYCI1F32yijRewMemeiPwVZz/FeaiQct0zYf55WCP+UW8Et7Aidcm6CscFrUfLZcf7U1n78GLBNoEBKKICKZrhBSBcT961W1Lq83lxSgYhL6jGeUC5Fd0zEqDiv2mW/6Rgk4srcV8l/L3WqpeQxorSA6L/whOgjArcBXT8qRkjzUBJay8/7CXoKCYUXRXnpevVj1QmdAqjo0fWyBX+XH5Gw7yBqELls7bB5d77Y1kG7WNe20EZoqRLO9LPMgDrehi3DwaDpp+tlkJ7L4HkY6GFJx6yEAEAiCEEEYzYoxEp2fum8fiPlNux505np7JwKTjyGxI5O+vAUJaCwi5o17t9HDTeidc6MUm7Q5EUYCJe1/To56Z1XC38647OcfB62PlJNqYUO++Dsx6uO0+Z+vh7rY7cF3XcfTPB/PX8/PdffuQ4T9TF6IkaWlqagAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 3200,
            dps: 581.82,
            speed: 5,
            range: 400,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1600,
            freq: 165,
            foreswing: 6,
            backswing: 10,
            tba: 80
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 16000,
            actualDps: 2909.1,
            magnification: "500%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "wave-attack": {
                chance: 100,
                level: 3
            }
          }
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

export default e7007Data;

