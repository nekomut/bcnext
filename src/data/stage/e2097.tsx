// Stage 2097 Data
import type { StageData } from '../../app/stage/types';

export const e2097Data: StageData = {
  eventId: 2097,
  eventName: "ゆる～いゲゲゲの鬼太郎",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 97,
  specialRule: null,
  crownData: {
    crownCount: 3,
    magnifications: [100, 200, 300],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "ゆる～い妖怪たちとバトル！",
      baseHp: 7500,
      width: 4500,
      enemyLimit: 10,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "10000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "8500",
          treasureName: "キャラクタードロップ(8500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "50000",
          amount: "3",
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
          enemyId: "458",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17000,
            ap: 2500,
            dps: 376.88,
            speed: 9,
            range: 380,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 199,
            foreswing: 4,
            backswing: 47,
            tba: 98
          },
          stageStats: {
            actualHp: 1700,
            actualAp: 250,
            actualDps: 37.69,
            magnification: "10%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "002",
          enemyName: "例のヤツ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgIDAwMEBAQEBAQFBQUFBQUGBgYGBgYGBgYHBwcICAgICAgICAgICAgTExMVFRUWFhYZGRkcHBwiIiImJiYuLi4vLy8wMDAxMTE/Pz9BQUFJSUlNTU1VVVVgYGBqamp4eHiDg4ONjY2WlpadnZ2mpqaxsbG8vLzGxsbQ0NDf39/p6enx8fH4+Pj///////95SC4fAAAAQHRSTlMABQoOFRoiKS41PUZQW2RqeHF+iJCarMnW9qS0vOXF++zU4P7o3PP+6P/x//b+/f7+/v///v///////////wD/21g2+QAABspJREFUWIXtVtmWosoSPSCijA6MAqIgMpPJlExat///r05gVVlWd9/Va9372vmkZMbOHZERO+Kf//yf65+/AH8B/gL8BfgE+MOimBUviKLAs4s/Hf3topfCTtNtW1dljqH+B/v1TveuaZ6nV1cVl39GoGiGYRbPcwtu68RF1RLSlLmnPRAo6r/CUPRyzYuSKKw/yNLrrRvi7naHNbaFb4mr1WrNrZb07+0ZTlZt13VtRWTnIxQr23HZ395+wLpPbe5biqJqliqtHgg/UaGWouqAu0WeevqOg5gzghWg4f6wB4QenY7e9RoHpr5hwZZmlosXCIoVLT/FDelIjWJ3z9HUaufl5PZh/za1RZSgsqpwGtgSSzO8JIvrJwTFiLqftyP4e5uGKjS2LCNoPh4/7H/M9kU7TrdpJGhG4FXDtPfcZ3bQvOIVZHqbz7/dhzLUZVExzni4fzjQoQR102N7IshXpb0bZoGzYT8d2Llp86R77wtPt9zTJaun9y9jGRWf7rxNXe5a9hU3halw7wAQr7gcPukC4To9HkMErMcHqVudJPXTHYCLzWNaD/gJsNy4eXf7Arh1xemESJlkDx/eJhyh/v613WaHA0QMANbvAOzeQ+OX/Y/7gE+XcqgBYGbwNhZR9bJ/n/ELMiBzv3oHWCkenr7s3+4jPkX1UEXZfC/8LaL6ZX/OiUvZd7nxGUQWAMYfLydGfMnIgC9ROfvwC4MeXZK2r0JbZD4Adm4x3L9dccF9X5zPYdmN09QXF/wS4xvJorInmaesP8oC0ihtXzhOTRY1Q5sathFANTZVAoRuTw/HKslIhwPrkwDUneKjr2e49zhBfYeuc76coiRJossFd888IFmCGxw78pdCMJIeIDK9fd3QdGWsy8LeOEUFwiVOEvzYf7tPHY4SjGJnt/4qJmolO0HRDhOssa+zpOyq1N3LeyfIKtL1Y1dcLkXdj+PQNSi6JHlg71YvukAtuJ1zAmLgbwllVzZ16mlbzYsxGXpCpj47HSC1McqS5HI5nXxL/m6/ElXjAO5mcCCDuFW5Z2u6l9fd0JaoHrvocDhcIthNsuh0MFSRfRGDBSvsLDd4mGcFKknX5L6jg1PNODTFJan75gLwCKMCVVUWGHv+ReUpht/aXpyXbd/33TC7WaWeAy8I9LsyPB+SlkBOoabvalz3dW7svpRkZi+pbozqDsxJQ6aJVCj1bN2ISzIQFBvuManhEcquJ2VRNEMZW/yL+/P1fl52EKoaF0U19ij0bEV1AgzuI19XNDMqkqTqe3DmlDQ99hT2RUx51QtQOwwEtM4/h9VIQleVRNVHZIBIWJKgmqdLUoEzqX+EGuxzd7N8Adi4aQXPXOaBo+7tuBpbyNC1aIXtSApfE1neOp4iuB8HruWcoARS/ZnB89pec9K34Kq2EQQtrgFA4VjZSbsenBUZVoLnLTrw3N7v9LAZmlDj6O8MSpz6zpZjGAFKaqyD/ZrduGFdzslO8yoQwF2bujtOtlMylNf9tyYJMYihc0rwMEvZyeFe/yHpxzA0oTswABVBQ8g9hVtt3RxUxNt86/RLYavsZR5AqVmXhg75G4ZmJc3WFZ5ZcFqAS5RE0BiZlXrFA0ld6VtvpBZLdrmggdRCsFPIWeTvWIpactBkFw+5h2zAkblfL3g9bcY2dOSfZ413j6j11oPeMZRnFfJ0bvQ0RfN6jIdxpqXxK9nI+4nk/lOHvq+FpMfNOE5zuD4KhWI3Zk6Gth0b+ChpfjneoO/Z8vI39hQ7i9IAxYshVd9J0oJ2LiGdEYQ20DU3b6YRMjWw+N8MTCCLIRQdiAao9QcFeIK0HXAE2tzl/vEM5VDVAynM7fqXMYVa7b2i60DN27EMLGG+gl6rAah/dj6DxFfRKSGgVdBPqtiWfpm44AkgjZsEGgZMM95jhFhKkDh9HbrueRbxCxpA2CLcd9hXOPpnAvMTDGVgHvNuqANNoB+kEDyrp+xdUKYigTqJjsd01ntnx36nsBCtuQxyVwUiA4GCW8DMYKX11MS6KKhXVGezH2ddn0ONY11gvhFYzgRGfFVFuI1AzBWWXkpu0Y2lt1+vZDcqorlTmFtZn28ovO3qOd1QNM1wGnzugBknWmd4jFAXWW7vgb+FIa9Y0T5AZ+mb3JD4rQny/4jz+5hGL1ccJ2zsEFc4NJTNVj8XVRmZ2lZxzqjB86+tAiV9yioUmspGNUNUw5i0gYFxVkZIenm31ZxjnMZH09Z14xim6eFoGsbxEObh4xf8PBzCNDiajm6bxyCNTVuRRW6u6yUv7bZ7mB8t/XPZzm+X/bFtWZZtacp2I/HwFP8Cz8xZkCdF/WsAAAAASUVORK5CYII=",
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
            count: "6",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "百鬼夜行で大逆転！",
      baseHp: 15000,
      width: 3600,
      enemyLimit: 10,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "30000",
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
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "75000",
          amount: "2",
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
            actualHp: 120,
            actualAp: 45,
            actualDps: 84.38,
            magnification: "150%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
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
            actualHp: 1500,
            actualAp: 120,
            actualDps: 225.0,
            magnification: "150%",
            count: "5",
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
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "459",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 800,
            dps: 289.16,
            speed: 8,
            range: 210,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 83,
            foreswing: 24,
            backswing: 27,
            tba: 30
          },
          stageStats: {
            actualHp: 35000,
            actualAp: 800,
            actualDps: 289.16,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 60,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        }]
    },
    {
      stageId: 2,
      stageName: "空前絶後の妖怪変化？！",
      baseHp: 50000,
      width: 4000,
      enemyLimit: 10,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "50000",
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
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "100000",
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
          enemyId: "103",
          enemyName: "ゴーストわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAwMEBAQEBAQEBAQFBQUGBgYGBgYHBwcHBwcHBwcJCgoMDxANDxATFhgUHSEWHSAeHyAcISMdJCYlLTErMDIqPkQ7Ozs1QUUxUloyUltQUFBRUVFRUVE8YW1fX19kZGRFcX5qampxcXFPg5B2dnaBgYFZlaSNjY1fn7BqssSfn59ywNOwsLB7zeK4uLjDw8PPz8/c3Nzk5OTq6urx8fH39/f////aM97rAAAAQHRSTlMAAwoQ0+UZIZ0tN4CqiUK+THKTWGFre6O/jJqxqsW4pMzBzMCxzMnKuMvMvcvKzMzMzMzLzMzMzMzMzMzMzMzMtX5w5wAABFtJREFUWIXtVtmWqkgQFOiBhlYEWRQUBBdoEJB9k+X//2oKXFsY8Z6exxvHBz2aYWRGRlGj0Z8CJeA/rnkEzE3QXxHg8yUB/aIeYlSN/U0PEKNZwm96gCjVkzmsXwP8jjR8fvRUkcV65gCRFDI8HoSTvPCo8j1tQMyYH/AYQglmtjjGsb8ier4lxtKKezkgfLJUNSuM42MvAcosDfWlRwyQH8dNPYt0yylelC2NfkVALi2/IdC+ukIxXtY28orGX80RYRdKw2CMqeefgQ3zNZHBe32A0IssmFkYTQ+hNseffgOzgEAge/VDOH8ZGTa3Yt8yLD80uL4W1NXzgkANI/q1oM89k2robzbGZuP7QudvEIKWLfWnCJhgELC9ciAzLTFjxNbG87yNFa67QjFW9kNrRd40QCi7AtnFxKBw+NY2Rgs1y1OMjeV3CBBKUD0wn3vWIIw/JAcW4Q5Fna3boRGyrx19RdF8S3yuZ2Wr3RF/dZ0vytt5FfDkOq3r0uGa1hBOVYzQ9/zjgn0iIFZeHB4Nww9V8tI/e8jrOl2JQVXXjYSmNZQbLwzLUOfs8yaxRuxrYL5GrFHnBnDRiaIokMwTqK9Lu5UwgnGGZVkG7/jNGaGmeb6lhUZLgJCCtNf3iqSkdYt0fTkKoQYdC4ACa3PcGJrWtgBh9FJ3HVNXJCc/E+Qm9zLqlAysURTF80SsXR1FN2030PWoaDs4pc76eXt/ABOlY+xZnt/kGeG2bpRmeRboUVYUp9MpDVzn0AnQI2B2ajQpMcAaQNTOTSLXNveKYl6hm1vm5YGHTSTjeNQE4BY6kZQ96MBxXTeITDtK0yRxFOk1AYRxs7nIgTBBpBxl+akoq6quqirRXWBkbpv6awLQBYq1uYdpp6xvKMvMAU5mbnoYIjgLgUeoGN3rMzuqSrCKVWoOtHBRQVEwvkpv9VWw0M9yImn6DgE6m6C4nD0ocCIwiWaR3AEXziBWa5zc5TcB7auuyiIJgi2Hdc7yzgSo7wNFbdv4FFlWXLY4iZy9bUrLNTfEADFOJFC74jw+3S1P4G1V5Lm7D9y9m+ywIQLWyb+5lqAqsyQtgss4ToHjBEXlvkFQBvPtOT+Bm+Tm1ZCqBGYWh0EC6lCm0v5MkOVlYdtRckewHiIY4busMPfFg4v7a550SfyPB88jEP6QR/qdoC4jHQS6QSTi6BuLgPHf9iNBnZiXT5EwuAUtUFLYPhJEdnklePN2BxG7HwRmdmoRvKkArPMjQeEo+hn7JfWmBPyeBUAQ3Xx0X5+qd6DgYdqHdNdzseoDTMnAdd3Uv1uAd2bz+t4NRukKhDfdhWSKJNGAllxlqpszEn+3HmTyYPPCloPbpxgqbAVmvX35UHgmwAUBp2bXZyFBEwhDD6bgBwOKQvD1ZgbOWWgEv3GL/ou/+J8BAgA/o/9u11uNkQz9NZl9fo6v+PycTb5olureLnsJCHo2nk4/Pj7+ueHjYzodf34xfXn+F0VuzkA1nN3jAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 180,
            ap: 16,
            dps: 10.67,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 45,
            foreswing: 6,
            backswing: 13,
            tba: 20
          },
          stageStats: {
            actualHp: 360,
            actualAp: 32,
            actualDps: 21.34,
            magnification: "200%",
            count: "2",
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
          enemyId: "104",
          enemyName: "ゴーストにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMEBAQFBQUFBQUGBgYHBwgHBwcICAgJCQkLCwsNDxAOEBISExUcHBwZHiEaJSofJyskJykuLi4pMjQqNTowQkg1RUouSlMuS1RERERGRkZUVFRVVVU9ZG8/Y2xnZ2dId4NtbW1xdHV4eHhSiJaEhIRgoLCVlZWXl5dstMakpKRzwdSxsbG2trZ7zeK3t7fBwcHOzs7T09Pc3Nzo6Oju7u7x8fH39/f+/v47lvleAAAAQHRSTlMABAkRGcYhKDkwlbVMpUNiWHxwhDeTtKPKjfGruNnCzMuvssrK4r3Ky/DMzMrMuM3MzMzM5czMzMzizMzXzMzMWEoGMQAABDxJREFUWIXtl1t7okgQhqUhAkpshEEwEFGbAOEwnMaGgYD//19tocZNNujqzs1epG5AH/rt6qqvv4bR6J5AInfX8/8MRpiP/wjAqgsJ/QlAMD1T5pj/DphZeWyp4v0E5jRE1MNd6ml31wFJ+Fh8hBfxLjaFuwHKFPe1Q8LcimNLubuVSFlvoPpI0r00tfD9UmDVIDNnDKeFu128mF1pJMOPhyrMaVGVaCKreuku93Q8+NAxV6wKA/yxnjVNpHKCZgEiXqn8JQIjT3VF/ILgF+V+X7syyyvQBUhC4y+lMFYXK134yGcQy80s2nX7coMV08t3QHCUCwlwAl6EjvJ3CoiXlOVSX9N2v+8yw47zNAVEag6OZyXNXNmOKb8DkKjoFvH9NaENpPD75SX1bNuJd7k1OL9khp6lKQL7no/8aKxJEEVrkmRFWf96fXp2wtCxQQxDAKR46WrOn/Pn1S0MjoLAN4w1BHl+enqOHduz01gfBMhW6CyU9xYx2CCE+EEQJb6xjpIkS16fXlLbsL3cGy4iK6nmaqVJxyX08qNV03ZdTR6MpO32b79fX/I4jPNQFwcB/aoXcXjaLGOz2h+DGg8PpIGbt18vYZ6nnnnBlhhO0px8l64OW09wmxOgJoaRdHDTvb0alqXPh9TajxdUK+x1EveOwczcdv9OKIoTrNAlgWcvCJnX+r2SpiAT8TMA5j5dyyU7PLgPGdKHLoHaVjP4KW7r99FNu2/qrqcU8ysAJdyFdhg7Tu5Io74LWXfMP/OjOiBVnVRthK+YgRLGdhjG3gnAzLZ9G9rIAD34hCTROqo21+wQe44TG6C01Do8xip9H7oqCai/LqK1nxFybQVg+rB8x3ZSTz263ngZ9cXv2q4q2yooazK56AN9cBMD9lmag20f+8Twilt1py50TZN8doovAXYEfdjF1nk7j1h5k9UHCbVN6S7/7Uhi8XTlOCb+sE527tOqa4skcpfyZS89Py5gBX/SKcipbrsmMtTZ+KZjGSF0vLAsOszHb+p9W1Fyrf9fguGxqql41p/j3JLC+CLS7jiOGEF3wUaibX9GICWqaVEk5gUHGApeC4qCVm3l6xICPZYAyFbSzS8FCJMMAM2+KwN4HeE3BQAKIt8MgIOQ0hK635ZFZM0lk5aAuKOKwqaqG4gWikepb5KqKSl1bwdIYCRd6W5dCpSuKUHMTV0FNwMY2W0busGCbGYgoboGXEVL96YijkFtrAp9Iwo7QjOz6BdRNg0tsqtGcJ4cT7AgQQmOXUfSJoH6Q0Ghmje9mTHSgmy3GUj/qDuEragn1A3dyjeVgFNJVoF9bE8HB4tNN0qyqgrU25TMiKrp/vy5PW9oJGLN3Gw386tO9JHAicKPH+IHQ0AcL4r8NSf8ju/4jv9j9B8XHDfugz/E4XYM/7G3eTI7w/PJ5HE6fTjHdDp9nKiKfPErafQXkwiiZQZdznEAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 200,
            ap: 30,
            dps: 23.08,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 60,
            freq: 39,
            foreswing: 10,
            backswing: 6,
            tba: 15
          },
          stageStats: {
            actualHp: 400,
            actualAp: 60,
            actualDps: 46.16,
            magnification: "200%",
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "103",
          enemyName: "ゴーストわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAwMEBAQEBAQEBAQFBQUGBgYGBgYHBwcHBwcHBwcJCgoMDxANDxATFhgUHSEWHSAeHyAcISMdJCYlLTErMDIqPkQ7Ozs1QUUxUloyUltQUFBRUVFRUVE8YW1fX19kZGRFcX5qampxcXFPg5B2dnaBgYFZlaSNjY1fn7BqssSfn59ywNOwsLB7zeK4uLjDw8PPz8/c3Nzk5OTq6urx8fH39/f////aM97rAAAAQHRSTlMAAwoQ0+UZIZ0tN4CqiUK+THKTWGFre6O/jJqxqsW4pMzBzMCxzMnKuMvMvcvKzMzMzMzLzMzMzMzMzMzMzMzMtX5w5wAABFtJREFUWIXtVtmWqkgQFOiBhlYEWRQUBBdoEJB9k+X//2oKXFsY8Z6exxvHBz2aYWRGRlGj0Z8CJeA/rnkEzE3QXxHg8yUB/aIeYlSN/U0PEKNZwm96gCjVkzmsXwP8jjR8fvRUkcV65gCRFDI8HoSTvPCo8j1tQMyYH/AYQglmtjjGsb8ier4lxtKKezkgfLJUNSuM42MvAcosDfWlRwyQH8dNPYt0yylelC2NfkVALi2/IdC+ukIxXtY28orGX80RYRdKw2CMqeefgQ3zNZHBe32A0IssmFkYTQ+hNseffgOzgEAge/VDOH8ZGTa3Yt8yLD80uL4W1NXzgkANI/q1oM89k2robzbGZuP7QudvEIKWLfWnCJhgELC9ciAzLTFjxNbG87yNFa67QjFW9kNrRd40QCi7AtnFxKBw+NY2Rgs1y1OMjeV3CBBKUD0wn3vWIIw/JAcW4Q5Fna3boRGyrx19RdF8S3yuZ2Wr3RF/dZ0vytt5FfDkOq3r0uGa1hBOVYzQ9/zjgn0iIFZeHB4Nww9V8tI/e8jrOl2JQVXXjYSmNZQbLwzLUOfs8yaxRuxrYL5GrFHnBnDRiaIokMwTqK9Lu5UwgnGGZVkG7/jNGaGmeb6lhUZLgJCCtNf3iqSkdYt0fTkKoQYdC4ACa3PcGJrWtgBh9FJ3HVNXJCc/E+Qm9zLqlAysURTF80SsXR1FN2030PWoaDs4pc76eXt/ABOlY+xZnt/kGeG2bpRmeRboUVYUp9MpDVzn0AnQI2B2ajQpMcAaQNTOTSLXNveKYl6hm1vm5YGHTSTjeNQE4BY6kZQ96MBxXTeITDtK0yRxFOk1AYRxs7nIgTBBpBxl+akoq6quqirRXWBkbpv6awLQBYq1uYdpp6xvKMvMAU5mbnoYIjgLgUeoGN3rMzuqSrCKVWoOtHBRQVEwvkpv9VWw0M9yImn6DgE6m6C4nD0ocCIwiWaR3AEXziBWa5zc5TcB7auuyiIJgi2Hdc7yzgSo7wNFbdv4FFlWXLY4iZy9bUrLNTfEADFOJFC74jw+3S1P4G1V5Lm7D9y9m+ywIQLWyb+5lqAqsyQtgss4ToHjBEXlvkFQBvPtOT+Bm+Tm1ZCqBGYWh0EC6lCm0v5MkOVlYdtRckewHiIY4busMPfFg4v7a550SfyPB88jEP6QR/qdoC4jHQS6QSTi6BuLgPHf9iNBnZiXT5EwuAUtUFLYPhJEdnklePN2BxG7HwRmdmoRvKkArPMjQeEo+hn7JfWmBPyeBUAQ3Xx0X5+qd6DgYdqHdNdzseoDTMnAdd3Uv1uAd2bz+t4NRukKhDfdhWSKJNGAllxlqpszEn+3HmTyYPPCloPbpxgqbAVmvX35UHgmwAUBp2bXZyFBEwhDD6bgBwOKQvD1ZgbOWWgEv3GL/ou/+J8BAgA/o/9u11uNkQz9NZl9fo6v+PycTb5olureLnsJCHo2nk4/Pj7+ueHjYzodf34xfXn+F0VuzkA1nN3jAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 180,
            ap: 16,
            dps: 10.67,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 45,
            foreswing: 6,
            backswing: 13,
            tba: 20
          },
          stageStats: {
            actualHp: 360,
            actualAp: 32,
            actualDps: 21.34,
            magnification: "200%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "104",
          enemyName: "ゴーストにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMEBAQFBQUFBQUGBgYHBwgHBwcICAgJCQkLCwsNDxAOEBISExUcHBwZHiEaJSofJyskJykuLi4pMjQqNTowQkg1RUouSlMuS1RERERGRkZUVFRVVVU9ZG8/Y2xnZ2dId4NtbW1xdHV4eHhSiJaEhIRgoLCVlZWXl5dstMakpKRzwdSxsbG2trZ7zeK3t7fBwcHOzs7T09Pc3Nzo6Oju7u7x8fH39/f+/v47lvleAAAAQHRSTlMABAkRGcYhKDkwlbVMpUNiWHxwhDeTtKPKjfGruNnCzMuvssrK4r3Ky/DMzMrMuM3MzMzM5czMzMzizMzXzMzMWEoGMQAABDxJREFUWIXtl1t7okgQhqUhAkpshEEwEFGbAOEwnMaGgYD//19tocZNNujqzs1epG5AH/rt6qqvv4bR6J5AInfX8/8MRpiP/wjAqgsJ/QlAMD1T5pj/DphZeWyp4v0E5jRE1MNd6ml31wFJ+Fh8hBfxLjaFuwHKFPe1Q8LcimNLubuVSFlvoPpI0r00tfD9UmDVIDNnDKeFu128mF1pJMOPhyrMaVGVaCKreuku93Q8+NAxV6wKA/yxnjVNpHKCZgEiXqn8JQIjT3VF/ILgF+V+X7syyyvQBUhC4y+lMFYXK134yGcQy80s2nX7coMV08t3QHCUCwlwAl6EjvJ3CoiXlOVSX9N2v+8yw47zNAVEag6OZyXNXNmOKb8DkKjoFvH9NaENpPD75SX1bNuJd7k1OL9khp6lKQL7no/8aKxJEEVrkmRFWf96fXp2wtCxQQxDAKR46WrOn/Pn1S0MjoLAN4w1BHl+enqOHduz01gfBMhW6CyU9xYx2CCE+EEQJb6xjpIkS16fXlLbsL3cGy4iK6nmaqVJxyX08qNV03ZdTR6MpO32b79fX/I4jPNQFwcB/aoXcXjaLGOz2h+DGg8PpIGbt18vYZ6nnnnBlhhO0px8l64OW09wmxOgJoaRdHDTvb0alqXPh9TajxdUK+x1EveOwczcdv9OKIoTrNAlgWcvCJnX+r2SpiAT8TMA5j5dyyU7PLgPGdKHLoHaVjP4KW7r99FNu2/qrqcU8ysAJdyFdhg7Tu5Io74LWXfMP/OjOiBVnVRthK+YgRLGdhjG3gnAzLZ9G9rIAD34hCTROqo21+wQe44TG6C01Do8xip9H7oqCai/LqK1nxFybQVg+rB8x3ZSTz263ngZ9cXv2q4q2yooazK56AN9cBMD9lmag20f+8Twilt1py50TZN8doovAXYEfdjF1nk7j1h5k9UHCbVN6S7/7Uhi8XTlOCb+sE527tOqa4skcpfyZS89Py5gBX/SKcipbrsmMtTZ+KZjGSF0vLAsOszHb+p9W1Fyrf9fguGxqql41p/j3JLC+CLS7jiOGEF3wUaibX9GICWqaVEk5gUHGApeC4qCVm3l6xICPZYAyFbSzS8FCJMMAM2+KwN4HeE3BQAKIt8MgIOQ0hK635ZFZM0lk5aAuKOKwqaqG4gWikepb5KqKSl1bwdIYCRd6W5dCpSuKUHMTV0FNwMY2W0busGCbGYgoboGXEVL96YijkFtrAp9Iwo7QjOz6BdRNg0tsqtGcJ4cT7AgQQmOXUfSJoH6Q0Ghmje9mTHSgmy3GUj/qDuEragn1A3dyjeVgFNJVoF9bE8HB4tNN0qyqgrU25TMiKrp/vy5PW9oJGLN3Gw386tO9JHAicKPH+IHQ0AcL4r8NSf8ju/4jv9j9B8XHDfugz/E4XYM/7G3eTI7w/PJ5HE6fTjHdDp9nKiKfPErafQXkwiiZQZdznEAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 200,
            ap: 30,
            dps: 23.08,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 60,
            freq: 39,
            foreswing: 10,
            backswing: 6,
            tba: 15
          },
          stageStats: {
            actualHp: 400,
            actualAp: 60,
            actualDps: 46.16,
            magnification: "200%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "105",
          enemyName: "ゴーストメェメェ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 58.82,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 300,
            freq: 51,
            foreswing: 12,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 200,
            actualDps: 117.64,
            magnification: "200%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "458",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17000,
            ap: 2500,
            dps: 376.88,
            speed: 9,
            range: 380,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 199,
            foreswing: 4,
            backswing: 47,
            tba: 98
          },
          stageStats: {
            actualHp: 34000,
            actualAp: 5000,
            actualDps: 753.76,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "460",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 15000,
            ap: 1500,
            dps: 1071.43,
            speed: 15,
            range: 280,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 42,
            foreswing: 13,
            backswing: 15,
            tba: 15
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3000,
            actualDps: 2142.86,
            magnification: "200%",
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
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "キモかわ？ゆるかわ？",
      baseHp: 200000,
      width: 4400,
      enemyLimit: 10,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "150000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "250000",
          amount: "1",
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
            count: "3",
            spawnTime: "1.0s",
            spawnTimeFrames: "30f",
            delay: "46.7-50.0s",
            delayFrames: "1,400-1,500f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "174",
          enemyName: "カヲルさん",
          icon: "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",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 44444,
            ap: 1333,
            dps: 605.91,
            speed: 11,
            range: 366,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1111,
            freq: 66,
            foreswing: 37,
            backswing: 21,
            tba: 15
          },
          stageStats: {
            actualHp: 44444,
            actualAp: 1333,
            actualDps: 605.91,
            magnification: "100%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "freeze": {
                chance: 30,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "017",
          enemyName: "赤羅我王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAACAQACAQAFAQAHAAAGAgEIAwAIAwEJAwAKAwANBAENBQERBgAcCQEgCgAhCwAiDAAmDQEoDQAtDgAyEAA2EQA3EgA5EwE6EwA7EwBAFABCFQFGFwBHGABOGgBXHQBXHQBdHgBhIQBiIQBuJAB2KAB+KQCHLQCILgCQMQCSMACWMgCfNgCjNgCoOQCtOQC0PAC3PQC8PwDDQgDLRQDXSADiSwHrTwDyUAD6UwD/VAD8o0zPAAAAQHRSTlMAAwgPh6tZkhggon9uKUM2ZVGxXZL/222hfBmxg5SK68mn/7G83vL/xtP+3ur+9dP///H/0//3///+////////lRKOmgAABBtJREFUWIXtV117ojoQLuLpai1Sa79stavULRLFBdmQ7/D//9UmgEgl0PZcnKszT59eaObNOzPvTMaLi1brDdzJzc2N22s/0mqWcp6+rre7/X4fLFzrm962M11stgfCpTaBg8fBNyB6zuPb9kC5zCrjh7eJ/VV3dxak6ubsg0m2W30tFcP5NhWZwSQJZs6nEJb7lnJp8tdxpMFs2J0Ky90Q4/WliXQ9HXQBOOtOf52Kw2LY7t+7S9vonyDSJ6cVYPyLf+avEVZtUfTukg6//K9AmLcUw+kkIHR2pNaH2E6M/tb1visDgjHKcoCMLIwU7BfSHbygCCKsiIjAmMfuCAoMjiBRp9KFqTHc3XkDmCBUb6p/u4lBkeND018aMaVka4OcpmnjpBANYUqGqMzkYdqkMDPkkIkPDNTVBAEfM0kWTYC5AYDSrI6g/AmFwI8YfWpW0gAgWVKvjCqCulxSFBI872AgsipyEeE6IM9nBUKMwbtWBkJyps4VzGWM6gyyvCgICBG+NJVQAMgMgxBEtIRAtA4gBOeMRh7jnoHBa8kAIMFRGBENIOsDhmHIVPwgjLjwR80clAA45BBxnvix0HeeiiAopVqIQseBDVV4LdgmMLn3QcIwoMcBYFAjXzenSpmDEAMfQc+L2ZE9M8xJkxQfU51mEeIwgpJ698f0CYalQdFvDQruNp85EUxIxATw2TECEWOZfZS0pvB4ngV7nupWZSHijOgcVj4cwpogRcGHB+NzCoNVLjvsYx5HvucnR+KKA6zdj6DMi7JupNHZMH069CCOFIJXqVDQqKIjOSjkLbYNAGuWf8UTD5AkgpBUXiKu0iiZjyWNiUhXDYCLySEr9Of5VKVAVu+sJKckSJxQGMW7hWGyOkGROUE8D8QY+bCqxIexoMTIArfpf2GvyuJLCu61+excAAUATUJwa2BgTXfVlRTHYeShhrNKAoRxFIXvUxOFRf195giEZ40gM4ETVWRlD8bXZbiqIyhVfZgHeT0iAGLCBNuZX8jh4sCzk3BxbaRJxDMegwgXxaFPRoAL+zGobVn1NpIJkwnQ8auWjxE26KDIpDMLzIsaZkoahKDQ0xV6MIegrecsdixrjBGp+rqQCU3g+1Xn2mhPNqQ5hySmx6LQZceulcehFkbTW3tUJDHMxDNzVqaVrWwP8/PcRBCNRMiyhnI/+nxzHj5Vg/lkohixgi07V9YS4cfPOJ+MeeTlY1f2NTPM9abZl7c/Q0gZF/o50RveMZIsNbxtBrMGk/7tcrkMfr2/g1CNoRJCknX7wnuOYQ8Gw6E7nlyPrh4A0dFInr5991eURrLs8ehl8/vPn9+b2edFbKfz/Pw8+De/A/+3/9wsq5ebXbfiI+sLChpcXo/6/R/Krv452ZX+oN8fXV+etdFfy6XbIQjvpqwAAAAASUVORK5CYII=",
          traits: ["赤", "浮"],
          baseStats: {
            hp: 35000,
            ap: 500,
            dps: 681.82,
            speed: 40,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 1500,
            freq: 22,
            foreswing: 12,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 210000,
            actualAp: 3000,
            actualDps: 4090.92,
            magnification: "600%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "460",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 15000,
            ap: 1500,
            dps: 1071.43,
            speed: 15,
            range: 280,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 42,
            foreswing: 13,
            backswing: 15,
            tba: 15
          },
          stageStats: {
            actualHp: 105000,
            actualAp: 10500,
            actualDps: 7500.01,
            magnification: "700%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "459",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 800,
            dps: 289.16,
            speed: 8,
            range: 210,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 83,
            foreswing: 24,
            backswing: 27,
            tba: 30
          },
          stageStats: {
            actualHp: 245000,
            actualAp: 5600,
            actualDps: 2024.12,
            magnification: "700%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 60,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        }]
    },
    {
      stageId: 4,
      stageName: "やば～い妖怪から日本を救え！",
      baseHp: 350000,
      width: 5000,
      enemyLimit: 30,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 3,
        magnifications: [100, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "300000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "450000",
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
          enemyId: "103",
          enemyName: "ゴーストわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAwMEBAQEBAQEBAQFBQUGBgYGBgYHBwcHBwcHBwcJCgoMDxANDxATFhgUHSEWHSAeHyAcISMdJCYlLTErMDIqPkQ7Ozs1QUUxUloyUltQUFBRUVFRUVE8YW1fX19kZGRFcX5qampxcXFPg5B2dnaBgYFZlaSNjY1fn7BqssSfn59ywNOwsLB7zeK4uLjDw8PPz8/c3Nzk5OTq6urx8fH39/f////aM97rAAAAQHRSTlMAAwoQ0+UZIZ0tN4CqiUK+THKTWGFre6O/jJqxqsW4pMzBzMCxzMnKuMvMvcvKzMzMzMzLzMzMzMzMzMzMzMzMtX5w5wAABFtJREFUWIXtVtmWqkgQFOiBhlYEWRQUBBdoEJB9k+X//2oKXFsY8Z6exxvHBz2aYWRGRlGj0Z8CJeA/rnkEzE3QXxHg8yUB/aIeYlSN/U0PEKNZwm96gCjVkzmsXwP8jjR8fvRUkcV65gCRFDI8HoSTvPCo8j1tQMyYH/AYQglmtjjGsb8ier4lxtKKezkgfLJUNSuM42MvAcosDfWlRwyQH8dNPYt0yylelC2NfkVALi2/IdC+ukIxXtY28orGX80RYRdKw2CMqeefgQ3zNZHBe32A0IssmFkYTQ+hNseffgOzgEAge/VDOH8ZGTa3Yt8yLD80uL4W1NXzgkANI/q1oM89k2robzbGZuP7QudvEIKWLfWnCJhgELC9ciAzLTFjxNbG87yNFa67QjFW9kNrRd40QCi7AtnFxKBw+NY2Rgs1y1OMjeV3CBBKUD0wn3vWIIw/JAcW4Q5Fna3boRGyrx19RdF8S3yuZ2Wr3RF/dZ0vytt5FfDkOq3r0uGa1hBOVYzQ9/zjgn0iIFZeHB4Nww9V8tI/e8jrOl2JQVXXjYSmNZQbLwzLUOfs8yaxRuxrYL5GrFHnBnDRiaIokMwTqK9Lu5UwgnGGZVkG7/jNGaGmeb6lhUZLgJCCtNf3iqSkdYt0fTkKoQYdC4ACa3PcGJrWtgBh9FJ3HVNXJCc/E+Qm9zLqlAysURTF80SsXR1FN2030PWoaDs4pc76eXt/ABOlY+xZnt/kGeG2bpRmeRboUVYUp9MpDVzn0AnQI2B2ajQpMcAaQNTOTSLXNveKYl6hm1vm5YGHTSTjeNQE4BY6kZQ96MBxXTeITDtK0yRxFOk1AYRxs7nIgTBBpBxl+akoq6quqirRXWBkbpv6awLQBYq1uYdpp6xvKMvMAU5mbnoYIjgLgUeoGN3rMzuqSrCKVWoOtHBRQVEwvkpv9VWw0M9yImn6DgE6m6C4nD0ocCIwiWaR3AEXziBWa5zc5TcB7auuyiIJgi2Hdc7yzgSo7wNFbdv4FFlWXLY4iZy9bUrLNTfEADFOJFC74jw+3S1P4G1V5Lm7D9y9m+ywIQLWyb+5lqAqsyQtgss4ToHjBEXlvkFQBvPtOT+Bm+Tm1ZCqBGYWh0EC6lCm0v5MkOVlYdtRckewHiIY4busMPfFg4v7a550SfyPB88jEP6QR/qdoC4jHQS6QSTi6BuLgPHf9iNBnZiXT5EwuAUtUFLYPhJEdnklePN2BxG7HwRmdmoRvKkArPMjQeEo+hn7JfWmBPyeBUAQ3Xx0X5+qd6DgYdqHdNdzseoDTMnAdd3Uv1uAd2bz+t4NRukKhDfdhWSKJNGAllxlqpszEn+3HmTyYPPCloPbpxgqbAVmvX35UHgmwAUBp2bXZyFBEwhDD6bgBwOKQvD1ZgbOWWgEv3GL/ou/+J8BAgA/o/9u11uNkQz9NZl9fo6v+PycTb5olureLnsJCHo2nk4/Pj7+ueHjYzodf34xfXn+F0VuzkA1nN3jAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 180,
            ap: 16,
            dps: 10.67,
            speed: 5,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 30,
            freq: 45,
            foreswing: 6,
            backswing: 13,
            tba: 20
          },
          stageStats: {
            actualHp: 1080,
            actualAp: 96,
            actualDps: 64.02,
            magnification: "600%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "104",
          enemyName: "ゴーストにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgIDAwMEBAQFBQUFBQUGBgYHBwgHBwcICAgJCQkLCwsNDxAOEBISExUcHBwZHiEaJSofJyskJykuLi4pMjQqNTowQkg1RUouSlMuS1RERERGRkZUVFRVVVU9ZG8/Y2xnZ2dId4NtbW1xdHV4eHhSiJaEhIRgoLCVlZWXl5dstMakpKRzwdSxsbG2trZ7zeK3t7fBwcHOzs7T09Pc3Nzo6Oju7u7x8fH39/f+/v47lvleAAAAQHRSTlMABAkRGcYhKDkwlbVMpUNiWHxwhDeTtKPKjfGruNnCzMuvssrK4r3Ky/DMzMrMuM3MzMzM5czMzMzizMzXzMzMWEoGMQAABDxJREFUWIXtl1t7okgQhqUhAkpshEEwEFGbAOEwnMaGgYD//19tocZNNujqzs1epG5AH/rt6qqvv4bR6J5AInfX8/8MRpiP/wjAqgsJ/QlAMD1T5pj/DphZeWyp4v0E5jRE1MNd6ml31wFJ+Fh8hBfxLjaFuwHKFPe1Q8LcimNLubuVSFlvoPpI0r00tfD9UmDVIDNnDKeFu128mF1pJMOPhyrMaVGVaCKreuku93Q8+NAxV6wKA/yxnjVNpHKCZgEiXqn8JQIjT3VF/ILgF+V+X7syyyvQBUhC4y+lMFYXK134yGcQy80s2nX7coMV08t3QHCUCwlwAl6EjvJ3CoiXlOVSX9N2v+8yw47zNAVEag6OZyXNXNmOKb8DkKjoFvH9NaENpPD75SX1bNuJd7k1OL9khp6lKQL7no/8aKxJEEVrkmRFWf96fXp2wtCxQQxDAKR46WrOn/Pn1S0MjoLAN4w1BHl+enqOHduz01gfBMhW6CyU9xYx2CCE+EEQJb6xjpIkS16fXlLbsL3cGy4iK6nmaqVJxyX08qNV03ZdTR6MpO32b79fX/I4jPNQFwcB/aoXcXjaLGOz2h+DGg8PpIGbt18vYZ6nnnnBlhhO0px8l64OW09wmxOgJoaRdHDTvb0alqXPh9TajxdUK+x1EveOwczcdv9OKIoTrNAlgWcvCJnX+r2SpiAT8TMA5j5dyyU7PLgPGdKHLoHaVjP4KW7r99FNu2/qrqcU8ysAJdyFdhg7Tu5Io74LWXfMP/OjOiBVnVRthK+YgRLGdhjG3gnAzLZ9G9rIAD34hCTROqo21+wQe44TG6C01Do8xip9H7oqCai/LqK1nxFybQVg+rB8x3ZSTz263ngZ9cXv2q4q2yooazK56AN9cBMD9lmag20f+8Twilt1py50TZN8doovAXYEfdjF1nk7j1h5k9UHCbVN6S7/7Uhi8XTlOCb+sE527tOqa4skcpfyZS89Py5gBX/SKcipbrsmMtTZ+KZjGSF0vLAsOszHb+p9W1Fyrf9fguGxqql41p/j3JLC+CLS7jiOGEF3wUaibX9GICWqaVEk5gUHGApeC4qCVm3l6xICPZYAyFbSzS8FCJMMAM2+KwN4HeE3BQAKIt8MgIOQ0hK635ZFZM0lk5aAuKOKwqaqG4gWikepb5KqKSl1bwdIYCRd6W5dCpSuKUHMTV0FNwMY2W0busGCbGYgoboGXEVL96YijkFtrAp9Iwo7QjOz6BdRNg0tsqtGcJ4cT7AgQQmOXUfSJoH6Q0Ghmje9mTHSgmy3GUj/qDuEragn1A3dyjeVgFNJVoF9bE8HB4tNN0qyqgrU25TMiKrp/vy5PW9oJGLN3Gw386tO9JHAicKPH+IHQ0AcL4r8NSf8ju/4jv9j9B8XHDfugz/E4XYM/7G3eTI7w/PJ5HE6fTjHdDp9nKiKfPErafQXkwiiZQZdznEAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 200,
            ap: 30,
            dps: 23.08,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 60,
            freq: 39,
            foreswing: 10,
            backswing: 6,
            tba: 15
          },
          stageStats: {
            actualHp: 1200,
            actualAp: 180,
            actualDps: 138.48,
            magnification: "600%",
            count: "0",
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
          enemyId: "105",
          enemyName: "ゴーストメェメェ",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 1000,
            ap: 100,
            dps: 58.82,
            speed: 7,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 300,
            freq: 51,
            foreswing: 12,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 600,
            actualDps: 352.92,
            magnification: "600%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "284",
          enemyName: "ゾンビワン",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 1800,
            dps: 1148.94,
            speed: 8,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 45,
            freq: 47,
            foreswing: 8,
            backswing: 7,
            tba: 20
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 3600,
            actualDps: 2297.88,
            magnification: "200%",
            count: "10",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 500
            },
            "revive": {
                times: 1,
                duration_f: 240,
                duration_s: 8.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "285",
          enemyName: "にょろろん",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 16000,
            ap: 2000,
            dps: 1621.62,
            speed: 10,
            range: 120,
            rangeType: "範囲",
            kbLevel: 2,
            money: 60,
            freq: 37,
            foreswing: 10,
            backswing: 7,
            tba: 14
          },
          stageStats: {
            actualHp: 32000,
            actualAp: 4000,
            actualDps: 3243.24,
            magnification: "200%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "16.7-33.3s",
            delayFrames: "500-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 1500
            },
            "revive": {
                times: 1,
                duration_f: 180,
                duration_s: 6.0,
                hp_ratio: 50
            }
          }
        },
        {
          enemyId: "292",
          enemyName: "ワニボン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAACAAMCAQMDAgMEAwUFAwcIBQoIBQoIBgkKBg0KBwwKBw0MBw4LCQ0RDhQTDhcVDhwXDh8YER0cECQaEx8cFSIsGzsuHzsvHzszH0I1IEc7J0k9JU9COUlNLmREO0pPNWNeN3xQTVJjPIBuQZB3SJhiYGRkYGV7SaCFTqyNU7dxb3KWW72gYsmMfJOpZ9iwa+GRkZG4cfC8c/zCd/ikoKW+rcPKv87U1NTv0PXp6en///9aWJdBAAAAQHRSTlMABg0VHSo8MlFFYttbhGyxeNCOpOn7mtjCsu/O/92E/ur+/9fw///0//j/7P/+//r//vn///3////9//////8A4AyyoAAAA7xJREFUWIXtlF+XojgQxeWftKiIaCMCbjASDUpCIhHQtnu//7faQqfPbDuzZ2bPnn3zPuSJ/LhVdSu9P/+jek/AE/AEPAFPwBPwBDwBT8D/APiF9L7rjgZmr6fp2q++/Yk024+z3W4V9Aee79r/HmEvd7Ju2yqbrnZ5trTuVP23zWheVjcMU1UhVAiZOt1F/cX3HdOw+8ZvGAhZW6zLLVEEU0rQbGCZhrPK83QyW60C66eX/mYPDKgalx/ntVR1U1ci38TLIOZKSEKEyMb6j54tZ/yifQfs6oasTyVWzV215DmvSSJaiQlfmo/3DTfMdsH32uywqCuCsOzu1jWcLagmSLYyITJ+rEH3Us75ZvRpQXtZECbrCm5WNMsyQim0UtVKtU0tqh8B/VgUmPF48I1gzjBj7Gafho7jTeZrEMpyzjtOPnkoQXMyhmjBcyhC0wxr4C4oAGRnHxqmadbyeL2eFr4XLJL1Gq+8hyYa451ICGEsHtij8SzcZElRFLxzoFIXXGmjzdv14Bma4aXnYzx6MGC4K1kkmDIahfHhWJbXtzXhouqap+4ZMvzDYdbthRmUh8f/685K1BhhitH+dHr/uJw+rttE3nrfVJEDAe71rNnM1rT+QLd93/qaZ320YG3DE0zQ+eP9DIDyVEa79j5/ANhjF+ZrGpreX4ae5/ve6B5mzehkOnGhVCMSjNHl41qWh83Sd/2UfzrwgsMGNsC0nCDc79dH0GETDMBVf9ZpmbICI8ETgvG2XL9ORrZpjsIIMtQhqmR6uJ5j+G5zKNeXy/btHXQpV2OzN1jQIs9ZRWGCUoIDCozX6dgyvVVRVapRXRPRzRc6ni9vx/31bbs/Xy4AuWTjnhnspBC1QALqrTlKCGc0oZk/TkVTQV5oASZwst3vt/cDbdcJ/Aivj2/vlw10NkgpUwXp8t60BNpYwLaIKJVtxRiHTYZNlAUFke4ounDISkk0zc6XrEusF6aUFF3gGoUTimESQsDCNIKxgmDxuYpte1um+0q1MnXdeDO7jdB2J3Pa1oILQsFAQXHFkaql4AyjqgXwbRZSKiXZbrfLmZB57Jm6PfiWRs300qrmvMBSJAien1YkVHGhlMBFl0V4TRhZgeLlGEKwnP3h2F+TaM7yVimFo/T19RVXbR6GvIY1aFkSpYQQjNB8PHgZWIamaboBq/VlDyEgXsqEEHTiTRDhnKW+B9GGVsls4g+hLsHQzPqn1xgesmAynIOi+XTYnfP5cDiMsiiNomg4HUZpmi6GofPjI9j7C+S59LoPFFNEAAAAAElFTkSuQmCC",
          traits: ["ゾ"],
          baseStats: {
            hp: 15000,
            ap: 5000,
            dps: 8333.33,
            speed: 15,
            range: 120,
            rangeType: "単体",
            kbLevel: 1,
            money: 90,
            freq: 18,
            foreswing: 6,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 10000,
            actualDps: 16666.66,
            magnification: "200%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "16.7-33.3s",
            delayFrames: "500-1,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 30,
                power: 150,
                duration_f: 50,
                duration_s: 1.67
            },
            "burrow": {
                times: 1,
                distance: 375
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
          enemyId: "458",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 17000,
            ap: 2500,
            dps: 376.88,
            speed: 9,
            range: 380,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 199,
            foreswing: 4,
            backswing: 47,
            tba: 98
          },
          stageStats: {
            actualHp: 153000,
            actualAp: 22500,
            actualDps: 3391.92,
            magnification: "900%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            }
          }
        },
        {
          enemyId: "460",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 15000,
            ap: 1500,
            dps: 1071.43,
            speed: 15,
            range: 280,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1000,
            freq: 42,
            foreswing: 13,
            backswing: 15,
            tba: 15
          },
          stageStats: {
            actualHp: 135000,
            actualAp: 13500,
            actualDps: 9642.87,
            magnification: "900%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "459",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 35000,
            ap: 800,
            dps: 289.16,
            speed: 8,
            range: 210,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 83,
            foreswing: 24,
            backswing: 27,
            tba: 30
          },
          stageStats: {
            actualHp: 315000,
            actualAp: 7200,
            actualDps: 2602.44,
            magnification: "900%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "weaken": {
                chance: 100,
                power: 60,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        }]
    }
  ]
} as const;

export default e2097Data;

