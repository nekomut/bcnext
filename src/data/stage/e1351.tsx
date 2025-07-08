// Stage 1351 Data
import type { StageData } from '../../app/stage/types';

export const e1351Data: StageData = {
  eventId: 1351,
  eventName: "極悪のタンク降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 351,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "デーモンイレイザー 超極ムズ",
      baseHp: 2500000,
      width: 4200,
      enemyLimit: 4,
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
          treasureId: "10637",
          treasureName: "洗脳されしゴムネコへの進化権(洗脳されしタンクネコの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "184",
          enemyName: "プドール夫人",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMFBQUFBQUFBQUGBgYICAgJCQkKCgoLCwsMDA0MDAwODg4OEBAbHBwbHBwcIiMdIyMiIyQgKSkpLS4vLy82NjcwOzs7PD0+Pz9HSkpMTExMUVFOVVVaWlpRaWZWamlSenVqc3JxcXF2e3tgh4OKiopqmZWVlpdxrKOjo6N9v7Wvr6+I1Mm9vb3FxcWU4tbPz8/Y2Nid9eai/e7h4eHo6Ojv7+/29vb///8HrKvuAAAAQHRSTlMAAwkP0frjjV92pihqORUfRC9SuWN31Y+q9Z1Hhbj4zJZu2Pyw5fv917n/6vz9/fv//v39/v/+////////////6KvOzQAABOpJREFUWIWVV+l6okoQtcFJUBQEcUMBA7KEnZZVaHz/t7oNxowxcxHqh59o1/F0baccjboNMHPhcDwehDn54uS/jdgfrTDOsti3xAUx3J/5sLL62liNYms1mATxAdH1bihzVgM5gD2sv92hbYTWAgwCYD6ru3/t2w3CcdAlMIFv/rHm57EBrfkQAOKQfROwbTdO3NCdDLnD7QZtFHID2m4DMB1yB/YTO9fl7QZJ6Ma270rMEACrrmrU1gHU4gQmXuSv2UEMUJ5XScMAGnGZFkWR6sKAIDCnMkswA0whttNLa5E0gAJxiDOI8hrHMb8DpArXHwDwbu6XJbqWCNnRF4A6AGDEnrIwRuW1ShD0ihag0G+l1C8SQPATP69QnSWlfb4BODz2BRzVjwJ9SmCIL1AneXKjkAYbYgTo6bgfAOCtJISoQlVc+jgKRWQEKsVPpN2yH8CIEKzEx6lEWZ5hCpFmppGuO4Gy6AkwIg8w9lGSV1nlpZf0nBYXXE6W0HuyAMGJ7SRO8gz5X5kszpbQu6WI/Ql3kG+HIR4HXuseORLVvyU5C2cQByCHvg8D7H92pMl8wGTcx1VSX1EJkxg2V0j1Df2/7oDhfn25hziBeB6HWZZ450tqbjrmAbe11BX7s0bZUwxhGcduGLrRpfC2Hb1IHHDnueLPE4D7OJ4+P0+KFuBSjpR5Rw9wKp6AyKGejgCCIEhajNpGmnX1kOA3E9CdUvTjKYLbc/R80zbCWaE7/Ee8jqdfolDUO/83EMTMclVV1yJcgZdg05l/ZqL4UBUIYrJe3hUM0GtY52Xl2naQFuZ61lkBxHwj4hqjJc+TblzBfCuHjTSUVW6bkaytuxUekCTAxW8WhXeTYVIMyy91rWzNkHey8lraiCbgqdoeZKT4rs7IlzVNluXnJP0jFFIzf72m4hhBscu7OpYG9n/bbV/2EXvCAFhAJgx7cHL0vR/UmW1gBsuX0kar7ew761vpYTtpBdbVtPXrK9wAiktqhPX1p9Wl30OXWAVfIfWiSIuvv6x2XmeBkZquMUzNRr8Brv7+JUCbxsiLdvAf/rXLvwQAKzz6giDahTV6DsK17KGMgNeLixcFG8lxy2cCUOwxTjk1LezIWbDirzTkap8ljZWi1IxUmlOfCVROr/WE2AQYQGRWz1HM7W2vDQvwztkMVuzpiUAdGz1XZdqKTIdnb2tunef4FZVV4hrrnmsqIwWmsyCPsKzK2MWpqDNHs73o3O4WPYwUPdPiRuzhhKd5mOWxc5qttQCLe58kNlKgmsYRh4tgmLmoqorIM6waaF6aqp1T+cudnU0NeUvfnziOZml2oXqS6Jx7pJFcnGQ8Ox8FiJgpn5a2WzCCZa5XXdLU/OJM9+0k01cPCeeUuEKZzo+Ileb6neKGCWybqF+zRw2b601BhCtAHpO6hkrnvx5iI7utwK3+nmKVrJkkFKCc5it/01lN9NKu6iuUHrqWOeWoLPUFeG/EM1O7iwFMZCNBPyoGCIYtq1sa8CqWGXfdveARB3Ot2z9GJ7MxzO2cASOSFx1omKtOBqwSSZIpkgC0e0FjCxWvlfgBf8QKKzXoLkdWCpR1pL/PJpN3bFNsS8MYT/H7yWQ2o6i1p8+6ELilvPujebs/D7Z7eHp722ljqiMPJEfNJtPlcjkevz3ZeLzERCYUv/i5iP0HMfoInzlXyzMAAAAASUVORK5CYII=",
          traits: ["エ"],
          baseStats: {
            hp: 4500,
            ap: 3750,
            dps: 2743.9,
            speed: 15,
            range: 160,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 67500,
            actualAp: 56250,
            actualDps: 41158.5,
            magnification: "1500%",
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 75,
                power: 100
            }
          }
        },
        {
          enemyId: "172",
          enemyName: "デカメガネル",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 20000,
            ap: 800,
            dps: 750.0,
            speed: 18,
            range: 249,
            rangeType: "単体",
            kbLevel: 7,
            money: 250,
            freq: 32,
            foreswing: 9,
            backswing: 6,
            tba: 12
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 19200,
            actualDps: 18000.0,
            magnification: "2400%",
            count: "2",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 25,
                power: 300,
                duration_f: 20,
                duration_s: 0.67
            }
          }
        },
        {
          enemyId: "184",
          enemyName: "プドール夫人",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 4500,
            ap: 3750,
            dps: 2743.9,
            speed: 15,
            range: 160,
            rangeType: "単体",
            kbLevel: 4,
            money: 1000,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 67500,
            actualAp: 56250,
            actualDps: 41158.5,
            magnification: "1500%",
            count: "0",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "strengthen": {
                trigger_hp: 75,
                power: 100
            }
          }
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 294000,
            actualAp: 16701,
            actualDps: 31314.36,
            magnification: "300%",
            count: "2",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "290",
          enemyName: "ブチゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQICAQICAQICAQICAQICAgIDAQQDAgQDAgMEBAUFAwcFBAUHBgkIBgoIBgoKBgwKCAwLCA0NCBAcESUdFiMeFSUaGhokFTAmFzMnHy0qHTUtHDwvHz0yMjJBKlRCKlY5OTlGK11MLmZFOU9PMGlZN3VdPnhUS1tkPIVhQX1lPoZtQ5J2SZ2ESrBvanKNU752dnaUWMecXdGmZeCvau2SkpK1bvW5cf6vr6/Ozs7o6Oj9/f3///8iAIRqAAAAQHRSTlMABg3vHCaz2RP3MOXD/jtmRaFPeFiO/5ysYta6fcv/7KHZ/8b0567//8z/9ef///7//f/n//////n///3+//8AABll4gAABAlJREFUWIXtVtl2qkoQFQUlmIADKokHDSgBURpoe7BxOP//V7caxxhyTnLvy33IXrpWK9TuGnZVd+33f0Tth+CH4Ifgh+CH4P9E8HXUNaPT65laXfmG0RV6b+B6q1XguSPLqP8LcyfImAAwms1bffWb9togILwQBUAUIorzkfYte8NZUmnMUsSKkmDumN/IhNpdsnJ3FOcIFjRKaOpa6lcpFGtKMJPeJ3Ee8YJFEyQECcbWF+PQuwnJSgKWJFQU6XCYFgVP0LxpfInAeCGEliGUEIxEPmYUvsvBV+qpWHN+NS8ErFM/DEPEC+pWl7OulelRNFWHhTJIi1t7LmhIGIW0Cu5VxqDYA72Mvf/o9A1Fd/ANQUHCJExPHvHArCJQZ7NjejUn38yejTG9JeApAk0dwbzKOnTW695xZS52u/XIY6KoBhnrVQTPm+3r8UF9tNntYv8mh++psuoqPG/2a/uYRmuKcj+8WEEGGeMXFrG0Kotgbw67RUcp0zin2EdXAoqzDFNx+kMEnUoCc304bBe2qtmjABfMJxeXpT0wsJP9J1WsqYvd4bBbjx+nIRYFQfziQGmfYSL+TKD82h4Oh/02HvroXQFOBBnQChmGCOxKgpohXTjs84jx4haCHgnAA0EJBJKOPpZRqeu6bq12h/1+E75TkBQRPeVAgDNAw7x7JSpGf/T29upM802egwf3CoJOJKTsAiwDKdC9EBS764F2Nn6SIEx4UYEjJydYdjgZ37ejovZmm/0uTrn4TL/nGsrn1L1thrrMiKKYbr7dJkz8haEEuyXQ+32lplmGNQ3DOKX4kxAqCHTDgMmhPK9e6zXTnb3AuKJEpvu+CB+BHbWmdBzPc52+PdvO1Jo2ixPoFl7Wm/41CDRQasY4Y4zh5TTfr3pqx03KKp0F82fwAAaHHZT5hJm/y92xl5adwqVoMT+fZZ9GIKtoOPMEwbmJJnFM6Fk6gsLytKbpJ9nkgSWHbm+aooTKc082Pscf1JegahdE2i7nQS+AMVNGIaPH/n3qSMjOFsU7bWB/PpBCNF/805yGF7I4jpLbcwSOsPMQF3C+8WuDUj9ly5EJ+pkiyjkjWRQtk3i7g/PzOsNgil9aCocM3sL8uBWMOg5PXYiACpYFrtMd9PvuZhPLB5fE0ySixx8cw3xiGFNJLxiahFTeV1agveXS69qartcV1fFG3Zd5hM+bcrgJQFuBgziK5BzhXCYCzNvNsbdaLN5+1RSzb5n6uR169Xqn2XiahAlKM0IpSpIIPlESpRT0RmGsoiicPD09tFutx+7xknFz0ZA3OKPZfnh4khgOhxM/9AFhFPoTwHD4dMVDozWoOpkUrWMNus3HVqvdbjQe7tFoNNpy92Z3YJtQxX8AFX+uSPLpjFEAAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 75000,
            ap: 4500,
            dps: 6428.57,
            speed: 12,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 21,
            foreswing: 6,
            backswing: 12,
            tba: 8
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 13500,
            actualDps: 19285.71,
            magnification: "300%",
            count: "1",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            },
            "burrow": {
                times: 1,
                distance: 1500
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
          }
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
            count: "2",
            spawnTime: "200.0s",
            spawnTimeFrames: "6,000f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
          enemyId: "172",
          enemyName: "デカメガネル",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 20000,
            ap: 800,
            dps: 750.0,
            speed: 18,
            range: 249,
            rangeType: "単体",
            kbLevel: 7,
            money: 250,
            freq: 32,
            foreswing: 9,
            backswing: 6,
            tba: 12
          },
          stageStats: {
            actualHp: 480000,
            actualAp: 19200,
            actualDps: 18000.0,
            magnification: "2400%",
            count: "0",
            spawnTime: "333.3s",
            spawnTimeFrames: "10,000f",
            delay: "400.0-400.0s",
            delayFrames: "12,000-12,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 25,
                power: 300,
                duration_f: 20,
                duration_s: 0.67
            }
          }
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 294000,
            actualAp: 16701,
            actualDps: 31314.36,
            magnification: "300%",
            count: "0",
            spawnTime: "433.3s",
            spawnTimeFrames: "13,000f",
            delay: "400.0-400.0s",
            delayFrames: "12,000-12,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "290",
          enemyName: "ブチゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQICAQICAQICAQICAQICAgIDAQQDAgQDAgMEBAUFAwcFBAUHBgkIBgoIBgoKBgwKCAwLCA0NCBAcESUdFiMeFSUaGhokFTAmFzMnHy0qHTUtHDwvHz0yMjJBKlRCKlY5OTlGK11MLmZFOU9PMGlZN3VdPnhUS1tkPIVhQX1lPoZtQ5J2SZ2ESrBvanKNU752dnaUWMecXdGmZeCvau2SkpK1bvW5cf6vr6/Ozs7o6Oj9/f3///8iAIRqAAAAQHRSTlMABg3vHCaz2RP3MOXD/jtmRaFPeFiO/5ysYta6fcv/7KHZ/8b0567//8z/9ef///7//f/n//////n///3+//8AABll4gAABAlJREFUWIXtVtl2qkoQFQUlmIADKokHDSgBURpoe7BxOP//V7caxxhyTnLvy33IXrpWK9TuGnZVd+33f0Tth+CH4Ifgh+CH4P9E8HXUNaPT65laXfmG0RV6b+B6q1XguSPLqP8LcyfImAAwms1bffWb9togILwQBUAUIorzkfYte8NZUmnMUsSKkmDumN/IhNpdsnJ3FOcIFjRKaOpa6lcpFGtKMJPeJ3Ee8YJFEyQECcbWF+PQuwnJSgKWJFQU6XCYFgVP0LxpfInAeCGEliGUEIxEPmYUvsvBV+qpWHN+NS8ErFM/DEPEC+pWl7OulelRNFWHhTJIi1t7LmhIGIW0Cu5VxqDYA72Mvf/o9A1Fd/ANQUHCJExPHvHArCJQZ7NjejUn38yejTG9JeApAk0dwbzKOnTW695xZS52u/XIY6KoBhnrVQTPm+3r8UF9tNntYv8mh++psuoqPG/2a/uYRmuKcj+8WEEGGeMXFrG0Kotgbw67RUcp0zin2EdXAoqzDFNx+kMEnUoCc304bBe2qtmjABfMJxeXpT0wsJP9J1WsqYvd4bBbjx+nIRYFQfziQGmfYSL+TKD82h4Oh/02HvroXQFOBBnQChmGCOxKgpohXTjs84jx4haCHgnAA0EJBJKOPpZRqeu6bq12h/1+E75TkBQRPeVAgDNAw7x7JSpGf/T29upM802egwf3CoJOJKTsAiwDKdC9EBS764F2Nn6SIEx4UYEjJydYdjgZ37ejovZmm/0uTrn4TL/nGsrn1L1thrrMiKKYbr7dJkz8haEEuyXQ+32lplmGNQ3DOKX4kxAqCHTDgMmhPK9e6zXTnb3AuKJEpvu+CB+BHbWmdBzPc52+PdvO1Jo2ixPoFl7Wm/41CDRQasY4Y4zh5TTfr3pqx03KKp0F82fwAAaHHZT5hJm/y92xl5adwqVoMT+fZZ9GIKtoOPMEwbmJJnFM6Fk6gsLytKbpJ9nkgSWHbm+aooTKc082Pscf1JegahdE2i7nQS+AMVNGIaPH/n3qSMjOFsU7bWB/PpBCNF/805yGF7I4jpLbcwSOsPMQF3C+8WuDUj9ly5EJ+pkiyjkjWRQtk3i7g/PzOsNgil9aCocM3sL8uBWMOg5PXYiACpYFrtMd9PvuZhPLB5fE0ySixx8cw3xiGFNJLxiahFTeV1agveXS69qartcV1fFG3Zd5hM+bcrgJQFuBgziK5BzhXCYCzNvNsbdaLN5+1RSzb5n6uR169Xqn2XiahAlKM0IpSpIIPlESpRT0RmGsoiicPD09tFutx+7xknFz0ZA3OKPZfnh4khgOhxM/9AFhFPoTwHD4dMVDozWoOpkUrWMNus3HVqvdbjQe7tFoNNpy92Z3YJtQxX8AFX+uSPLpjFEAAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 75000,
            ap: 4500,
            dps: 6428.57,
            speed: 12,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 21,
            foreswing: 6,
            backswing: 12,
            tba: 8
          },
          stageStats: {
            actualHp: 225000,
            actualAp: 13500,
            actualDps: 19285.71,
            magnification: "300%",
            count: "0",
            spawnTime: "533.3s",
            spawnTimeFrames: "16,000f",
            delay: "400.0-400.0s",
            delayFrames: "12,000-12,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 20,
                duration_f: 90,
                duration_s: 3.0
            },
            "burrow": {
                times: 1,
                distance: 1500
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "612",
          enemyName: "ハニワンワン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgIDAwMDAwMHBwUKCQkLDAcMCwsODwoSEwwVFBQVGA0aHREeIRUhJxUkJCMlKxcqKSYpLxotMxsvMSYxOBwzOh42PSA7Oi05QCM8QyY/Pjw9RiZARytDSylETitJTTRLTyZHUC1JUy5NVCxQTktMVy9OWTNRWzBQXTJSXTFTXjNUXT1UXzNUYTRbWFZUYzVVZTVYYj9XZzdYaDhcZ0Raazlfa0ZcbjtmY2Fib0podVFzcG57eXWHhICQjImWk4+empejn5ysp6Kzr6y9t7LBvLbHwbvKxsPSy8bV0c7d19Li3djr5eHy6+P17+n69vD++fH//vr///85iHy9AAAAgHRSTlMABBQfJS05RkpQWmRobXJ8g4aRlpqgo6ituL7F0NXjGTM/VWCzy9jd5uz6/wrxD/f/6f/7///7/////////////////////////////////////////////////////////////////////////////////////////////////xoZ4X4AAAe+SURBVFiFlVcNW5TaFrZPKyu/0tLyq5vWhCYRc/lwhAEEZxgDhQGC2II4Y6OWpmVqR8e/ftdm9Dl6LprndR7GPQ/rZe213rXWpq3tKtwZ7P97cbPj8Y0r7/4/3Oie5l5Pni5Get7QuZv/yn5kgDaCD3dai5fDTMWavvVv7Edfs1YtYh6miy5SRpF9xnYtjOUKSRInUh9e9FA6CjyHunt9+7s5oRbHcaKMw6KDrCDPC4L8vWvb3xoWkggQm7mRttu5chIAAWIeXJvgGRtFCMMh77b1F2oRJoi5R9e1f0kFtSAMwjBK8vfvkF4Sh17gJXz3Ne1vjHO6YblA4ZTpoQkyT+dpiqbz1Pj10tA+SPKq4eJdB5Zp6Gq5JEuKIgkFhhi4hhS6ScFKkggFgR8ilEAgYsgnII5Di30x8if7B4QGtigEex+igFCIcDoA8F2LmWd/sH/3WkCui70PPN8DCgTpiFoUcKmVpv7gwn3SCaq2B8+GzIF4QpzMKE5dgNSGDjl2NUEXg7yqmxIAgx+kasDPTz8IBXT71QSvCsgDez8IglR96JQB7NOAonymHEc6Xz1px+3ixpCEqlUvtQ88FDgoDlsEYeKYAbhwWp//sJ+gBY7owv/lSoFlVVsOII0VhEqq6QglCsMLZhyxWXruZ7ykpk6DzkYJw7NsFxOEUYkgaKHgeGAexTaJF2HCdWYQDIkJ1CsNu7tP2eaihfMYBJFAEAQr6riu4kSHBS842QUxJMbIqjLA/Yiu6h+tquuDimJMUBAqQYRjAB4QhUKQCE8yCSLwmO3GWfSsahXyCBnwjTzJCmKqhCCplRieN6BHPc0ikNApQS8buG6LAfRsl5SyB1qGICg8xysVK6yJg5kegHJjrqetrY9H2L5F4PtYg05JFQt52azoHJWnVfV5BsGEGPlhzI+PjQ4yqQOYwQ88C0IJ1RR4NlMo6xpTiioMN55JEJvVWCEwmBaB5/uhVoFkpoUZ2CLPcVoc12RiImM+DUmR7gShbZimUai0oghp4C2E9RCmfkCLhmDWVGJq8PnzgacXS+q1lDi4cHEbcRexPd5BwKgtEZ4VBDDZDENBd5J54vHFLSQxStMF+3WxPfYAiSQrSgBZkkRBKPAcw5KMDj0WGpX29rwPg3zt7CFg72KkpaxxxDmQFM+LoUla0BZQwvWdI+gk7SRtO7ADS2wRgBb9xD5PQEgwrBKTNKFdeZF0Xg8jbxg7idOmE5dYDzLp4n7mI+MCQTkKUWwRZi0I3IpyIZ3twyTLpWBJ2T/LQoAqFwhMBDm1SRZ0iyzpoh5uPuzt7X3S2/eWFVpKxDvwkX4hBhZkKnbIwZyWJDX5RYag2kamFtF5gn94ADGuBtS9JyJMidJQNoFpV88RGAQJwE9Pgxgj76Obf9nDw6QpTWQR3Jo27NQDy8J1EMokBYCxyDAcz9Ey8hYR09FTCNAlBKOkWU2ruaovQhR9y3Ic13FdH4+oyMubUZRwj3vEapRomTEYI+1FC9eC9RGXU0sbUeusEMUWbYHcC92dfC2pKVll3XaPci3dBh1ZOJFVTVXhAxdNlSWBp0QYTjWpr4NxahHbm0mQR67leakWXd9gGQAL4Di+UID2iutRHpwcp1hqOHPQP2AsD1V9oPDSgvTT8QgBCE/LMghqsPnJh31d2QeFbk4p6WYVGqqPYwD2uKzD1qB0IBaeZQhv3mXaYkxOCGZJUhVVKxmLi1arL/gpkePYllHWVKVcIv9zKcEjSjE1zahoCv6TgUlJo6goqqwpEEy9pFomm719wOi0oOqyWjFU1YCLXKnomqoDZK2sGyXNNE1N0k2FzersGK9oRilJCjgg6YYmK5quq1IZjlmSYhhACAzgUkVliexN3OG2ixQnyhVNBAtVlsEPWQZbVZJUU4fepldkOK3Rc0uvsncwc3SwXmQZluMFSZXAVi8psqIaiizJFQV6qaqKPE0t/apfctIa2Dg5Ptzb3vg8N8sx+TxFFcANGYcTnxMLDPxCzTZ2mz/Il9kEt9983mtiHB3u7/3Y2a6TjCLKLSgCtbSxtbt/1GzuslnzNcWt7vcLje1ffzVbOP7OUbLSsheJr82T4/3db415+unkZQRwTBwnSXp2/nNj4+v2zu/mXpEQFLx7gag3DxqzuK+8v8T/Fm6+n9PnRC5P4T40v9/8XSfogligyPXmT5Zgi3Pl4sQVz4dyZJfthYVyGQp4TqHpzePmXn0mz9X3TnbyVHlhYcH+lL/yoNgpfFldWfm0/GnRNBYWeGL++xFk5ujksE5wzsrK6ural+LjK+wnx5l5B24DkmXAJ40mZurftjY+02R5DX5dW1tb5geuILg/05ifLUpKybCXVwCryzpPQU9m1NW1tdWVZbtcnJm/6s2nq364t7O12ViaKxaLMpRfuQJVYNqflpdXVr+sLNXXv+0cbGV2wxb6N09Ojv/6fXh48Gv3+/a3zY1Gvd5YX9/4uvV99+ev/cOj5snJyf777Ffg2x29A7mZ+ubO/u9jfB/gVFAnZzg+/LnVWGJz/Z3tGW8NHUNvT2fg7FIDP/PHr4NDwMH+3s+d79tfNxpLs9TpkMs9zXxreHd77MHj7ifPBscnhnNTU9PTH/4L+PDh7dvp6anc8MSLwVf9PZ0d90ZH/j5n/Q8ATtBR/K7SnQAAAABJRU5ErkJggg==",
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
            spawnTime: "633.3s",
            spawnTimeFrames: "19,000f",
            delay: "400.0-400.0s",
            delayFrames: "12,000-12,000f",
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
          enemyId: "661",
          enemyName: "極悪なゴムネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAgIFBgcLERYQGiAKIDUWIywnIBsaKjUgM0AgOEgmPU4pRVhIPTUtTWNbRjk0Vm85YHo8Z4RmW1NBbItGdJVJeZxLfqFPg6hRh61UjbZXkrtZl8Fbm8VdnspeoMxfoc5go9FiptShlo9kqdhmrd5rt+p0xPy7tbF6z/+D3//Wz8rz6uT////AWu13AAAAQHRSTlMACxspN0NQWmJrc4iYq7/P4//58P//////////////////////////////////////////////////////////2QIHPgAABSNJREFUWIWVl4lW2zoQhqGBBMhClEiu6w3XDvEmW5Ll2uFCy/u/VUeyCeG2lcOcwImM9Gk088/IXFz8w1b3H8fXy8t/Tf2r3VjO6nR8uSH3/5r7N7vcpE/47tQh70BuPgGY24enFE2O4ynmL7vNJw6B2cvhJXp3epO/PD3bs/MWT+/uligMgshHi7veliiAMVmr7zcjfszuMbYcm2CMiO14b+bAAxvMcfC1cfcV9hMSMkpTVlesa+vBZEN5x4q8KCwTYIr9fVlhnyY050IUtBZvJiX84jRLiQlwa1MqAFAkDObLqnoHiLoWXMrSDLixadUI7JbN+67iA2MMYJWwJ3hQSlmxWshGcLWSD57UkiUjAAqziEdTWnIuGrpr+6VNmNUaQPcjR6hgMnHqlhZSyNJ9iPQp6vDxW6JB9VgMYFKGd7xVx5fh95+2doBbv757+lvLjIAZqWFzHJay9zxwc9gePqkb9FHozIAbi9GW4WAA1FJAOnzOovYtH400Cmkdy+KQo1g2b1GHg3gIkaMeOm704H7XlnWLnaYH6BS2HkZBKxo9UAc0HsF9KllH/MOwI2OSkW+/fqKMxvpRAzq4MgXR7WTLsd/1R645dtHD6+vrfwiF2inZZHhq8sDrREeRV7dDDChBrwqAq6aPCS08U2+88VoBHnj14AIo8EED0OAS49S+GwHIlvgNL3sFNuSHArw+fm30MCsonhgAMw3AQVfmAwA9/ngEe+hdkFVuLqZl1IHcsVfxeiii+Cv5CubtmyEtZsAihIRnyM/LN+XUUjbK+rHkhRkwdSGIFAUVZccWcNKUhGR0pBodWcscBYf6w7r3liSqzAwADxrwQHI4smzZh9V9gZUjHoDiO+zlede2WR+4Rg5VkaseXbcj5Vx1fOfbluW4BFO9Mc1E2sfUciPX8saOEGMUOQjM46oYRBfawkpVWQuO1XNkbmkWzIhshCM4f8OhQ2Yo3CEL9k/hxx8F6C1Cx6Gqpe98WJMg10MYvElUUyt9fA4g9KMoDCyig7BDsas7suVVTDDvDEAfA4TLPnuxyPs8wiP1ORtQqH4s0qQMqkSzkjOCeARgO+uzH7sB2rmF1iH5BAC5vO+pkbpabHUIWe7s8wFhpVUIMcT7NNLhhBJv4/MANsq19CVQUh3PSrStFnZ6FoBAypsy8XAILSQHo40I3XCvghqdAQicoilc2DdW+iEW2kfgCmhcXf7mm2kABFEAGXN4DV5TZEWZrbLAIQk7uKjP1YE1VHGI926vKVVM2DVebdMTANPrExHC97hRCRFM/9l0tS3eARFcq52MHZGELYD8QEUwGAMsjwCLs7qGSAqxr5nSBHHzskmVmFcGwLsHnk8sCFoC5RyHgVuqUgJ9KzGb7sblSQyUJXWn69Cmx1JCaGsAzD4CoJ4K1Zn3juroQ0dDCwPgQzmDnlnItZTBgZDJvCeYLtdTAE7EHvldEcWxejtJcBC5nylnRKD9kaq/peGtg0e6IY0AbodaGGJA0nJfsDSpiny3z8MhBqZXnGv0wbDtnAzesmAS0sWXyWQdSdB+Xu62k8nd4moymUzRnhbIq/KM3E4mX0zrlS2ilwplz8/JUTCXiL9QRJ6eW+PrzZvNyHOGcPfsH/P9BbUtul2FLwUa3V5Pz53bZfBkHYN1uc2sxcUVOtCz/vu9vMfr6xly0Xy+6G2O0f1ser3yw+Xo6qv56n692W7Qn7bZIrRezY3/NV5cTG7nS0Bs/0Bsttv1er2c3/0/ib8BKckm/gmx7WQAAAAASUVORK5CYII=",
          traits: ["悪"],
          baseStats: {
            hp: 5500000,
            ap: 20000,
            dps: 5607.48,
            speed: 2,
            range: 380,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2000,
            freq: 107,
            foreswing: 8,
            backswing: 8,
            tba: 50
          },
          stageStats: {
            actualHp: 5500000,
            actualAp: 20000,
            actualDps: 5607.48,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "counter-surge": {
                enabled: true
            },
            "surge": {
                chance: 100,
                distance_start: 150,
                distance_end: 550,
                level: 2
            }
          }
        }]
    }
  ]
} as const;

export default e1351Data;

