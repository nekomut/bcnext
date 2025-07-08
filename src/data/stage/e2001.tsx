// Stage 2001 Data
import type { StageData } from '../../app/stage/types';

export const e2001Data: StageData = {
  eventId: 2001,
  eventName: "魅惑のプリンセス",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 1,
  specialRule: null,
  crownData: {
    crownCount: 4,
    magnifications: [100, 150, 200, 300],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "油淋鶏の読み方",
      baseHp: 10000,
      width: 3800,
      enemyLimit: 6,
      requiredCost: 18,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1122",
          treasureName: "眠れるケリの美女(69)",
          probability: "5",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7600",
          treasureName: "キャラクタードロップ(7600)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2900",
          treasureName: "キャラクタードロップ(2900)",
          probability: "25000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "15000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "025",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 10,
            dps: 2.83,
            speed: 4,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 800,
            freq: 106,
            foreswing: 27,
            backswing: 29,
            tba: 40
          },
          stageStats: {
            actualHp: 100,
            actualAp: 10,
            actualDps: 2.83,
            magnification: "100%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "2.0-14.0s",
            delayFrames: "60-420f",
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
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "2.7-13.3s",
            delayFrames: "80-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "3.3-20.0s",
            delayFrames: "100-600f",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-20.0s",
            delayFrames: "20-600f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "025",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 10,
            dps: 2.83,
            speed: 4,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 800,
            freq: 106,
            foreswing: 27,
            backswing: 29,
            tba: 40
          },
          stageStats: {
            actualHp: 100,
            actualAp: 10,
            actualDps: 2.83,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "025",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 10,
            dps: 2.83,
            speed: 4,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 800,
            freq: 106,
            foreswing: 27,
            backswing: 29,
            tba: 40
          },
          stageStats: {
            actualHp: 100,
            actualAp: 10,
            actualDps: 2.83,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-4f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "060",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 180,
            dps: 79.41,
            speed: 6,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 68,
            foreswing: 33,
            backswing: 35,
            tba: 1
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 180,
            actualDps: 79.41,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.0-20.0s",
            delayFrames: "90-600f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "Youリンチ！",
      baseHp: 30000,
      width: 4400,
      enemyLimit: 6,
      requiredCost: 65,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1122",
          treasureName: "眠れるケリの美女(69)",
          probability: "10",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7800",
          treasureName: "キャラクタードロップ(7800)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5400",
          treasureName: "キャラクタードロップ(5400)",
          probability: "35000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "25000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQFBQUGBgYGBgYGBgYGBgYHBwcJCQkJCQkODg4TExMWFhYWFhYaGhobGxsiIiIrKystLS0xMTE4ODg4ODhAQEBDQ0NLS0tMTExUVFRcXFxlZWVycnKAgICOjo6bm5unp6ezs7O/v7/ExMTKysrS0tLc3Nzi4uLo6Oju7u709PT7+/v///9zib0wAAAAQHRSTlMABgwSGiQ4LEFK0VVf8W14gMPekbmIl6Cxqej71su+4fX+6dn/9uv/9P//9P/8///9////////////////////kGjFlQAABYtJREFUWIWVV4mWojoQbRAFGhrcQVBbBGVfAig7/v9fvcJxQcUZ39WjJFA3taVSfH39AzhBtAaDAfH+0U70aJ7Br+IkMxdo7P+Ig8hiPO9fuKiZuv/l8b+LPC5PTVa73ZpqFsUIVtwjZMx6/0OeEbdeFKgcLIr1+ZWB0siYfe4Egl3vw7SI7DnIEPzSivIyNib9j9dn10aYV3XiiiTWY0d2VNZVbMz7H3oRZxr5+nTK/DXVoxZGWJ7q6mgL5GcE2EDYhwXIn0q0YkleDbL6VNeJtRh8RkAM1aBZ/3SqI3VIL+xDM6gT50MCnJru0OHY4ID24mzpROfrUJ+yHzgB65H8WNGu2Ei/m+tIkUY8+a9cwklOWG506woX4FyvPVtd0H9PJpyer7ZeGB8uOCaA4+26MelvDFifFbcWSqqzBztQ5+FeeO9JjOBGOz8u3ok3yCC73yY0pNwOZW+X/6NDYr8NJkaJO5T/VRxQ+CummwAj59sgfZWvH6dKpLLdBLDnvKR6Fa8+JMAG013UYX8ZJ+V9tirydwQE9+unHTZnvhteHFOfqjgIg26CxoNxVwAKZFpX15Sxo6M3BD3u1+lSABhCx/STxpX10dX84xsCcrJFxYtw/Wddz0KNd+vI8ZO8mwAsMA6vITiVaVrW5TGMz/cy2A9H/5kAw2GMMSs3e1UfFvfi4lQX5R/CApTRl48EGElDlcAhBh0WJJ6iuC3XZL4iy08E5FCA84sYboPyleDgyLKZ3MfpKwFGj7554qs/24UvLjjVGTLNoGVaHrmu+UhA8JIEB2B/YnRlQZVFUXqdbwKZHw9PThwIcAAOMFLoJIDToDVbJnEUxx4UhN6dgl57vsr0aNGIryZ0KFLmWZankatpuqVLAsdRt7rGqCja8316etMA9l+eF0XV7OPLTHYIAxT6uqabuqbIP9vf6a0ysio6esJgINjH68pl7DpeEENQLvrX+SEKw9BSPCi2kaW4ob8V6QsBtw+zUGXJmZ1cK0cZmYqm+2ldJUn5xxFFlmVpoFsBQr5uRnni//IXAh5OwcSeU0MguLseIRRlVYLiVmjrNDA1XdMc2N1VvJ3fCcrCX/OTOwE4ocySrCqRE7YjU6VhAICqXdfHfZugivYL8W7CqTqEKIirwtMekwuYAc1joMGkRVBn7vK7pUHuW65/JkCv6X1Gjm4+4FR4qAw2P9aNAMIQZ0VVV0h3ozTN0keAP7PIXjH3RMpOdWzJ1t2EujybDltHN03LsUz4u30tB45bY8Vf2yVybkMGFYHS0qDlNU9XIKRtaMpytBK5W6PQY9Um4rHlvBJAAUlDUwviFiJvM2doirhvBiiGQVqlnnOsuzZT4urxOacvnyz4ZfGHgoJTi60fxQ1Bl7+Pln5ojzN/RX89Aoeedu/qXSYADvojQequnwm+8D4zX0mtKPyDgHomaCjYqf2xBh0EzdH+jsDU46qFxF11vjX0J3anCXWsKx5qIdDHXFeX1Z90agDJqD0n0mbKdjRJQNCVB/XB8/xHBL6x7uhxiKERdZwLdd7UhQdUOdoPX43AWeivO3z43OAAqs43F6wpy9lHSP3ze9CLDdwS9irsVuv8Y99xnoGp8w0YG+qs670DI2eSYlq6IivwsxSFxQXiWNYsR5dlxXT0zXKxELjujh2jRkYYe5vxDgXbCTW4gh4urTDypPEmiH11RlED4k2jSgp2fHSnExXaKAbHrsDJ2R6F9mK2BoI1BTc6pTH8/CCszY4MY80N7qC4lW4uOWqyd/eTPt4lj/cHNMOwgmRq0mKylOXx3QVg82IMM3NekGRJYBh60H92AUYOp9+A8Q9Akn5kWf55BExIYwlujr+/R9PhcxAwguFnk7kgLERxOmrw/Yjz3FQUF4Iwn8x45pZG/wHoT/cGi/0BoAAAAABJRU5ErkJggg==",
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
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "2.0-6.7s",
            delayFrames: "60-200f",
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
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "2.7-13.3s",
            delayFrames: "80-400f",
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
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "3.3-20.0s",
            delayFrames: "100-600f",
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
            actualHp: 1000,
            actualAp: 100,
            actualDps: 44.78,
            magnification: "100%",
            count: "1",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "3.3-20.0s",
            delayFrames: "100-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
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
            count: "20",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-4.0s",
            delayFrames: "20-120f",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-20.0s",
            delayFrames: "20-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-20.0s",
            delayFrames: "20-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-4f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "060",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 180,
            dps: 79.41,
            speed: 6,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 68,
            foreswing: 33,
            backswing: 35,
            tba: 1
          },
          stageStats: {
            actualHp: 2000,
            actualAp: 180,
            actualDps: 79.41,
            magnification: "100%",
            count: "3",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.7-4.0s",
            delayFrames: "20-120f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "ハイヒールとカモミール",
      baseHp: 80000,
      width: 4200,
      enemyLimit: 6,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1122",
          treasureName: "眠れるケリの美女(69)",
          probability: "15",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "7200",
          treasureName: "キャラクタードロップ(7200)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3900",
          treasureName: "キャラクタードロップ(3900)",
          probability: "45000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "30000",
          amount: "6",
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
            actualHp: 360,
            actualAp: 32,
            actualDps: 20.44,
            magnification: "400%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "2.0-6.7s",
            delayFrames: "60-200f",
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
            actualHp: 400,
            actualAp: 60,
            actualDps: 48.64,
            magnification: "400%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "2.7-13.3s",
            delayFrames: "80-400f",
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
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "3.3-20.0s",
            delayFrames: "100-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 400,
            actualAp: 4000,
            actualDps: 2142.84,
            magnification: "400%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "3.3-20.0s",
            delayFrames: "100-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 400,
            actualAp: 4000,
            actualDps: 2142.84,
            magnification: "400%",
            count: "5",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "0.7-4.0s",
            delayFrames: "20-120f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "4",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-4f",
            baseHpRatio: "99%",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "4.0-20.0s",
            delayFrames: "120-600f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "029",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 80000,
            ap: 3000,
            dps: 803.57,
            speed: 6,
            range: 130,
            rangeType: "範囲",
            kbLevel: 4,
            money: 1200,
            freq: 112,
            foreswing: 56,
            backswing: 56,
            tba: 0
          },
          stageStats: {
            actualHp: 320000,
            actualAp: 12000,
            actualDps: 3214.28,
            magnification: "400%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "まごにもいしょう",
      baseHp: 160000,
      width: 5500,
      enemyLimit: 10,
      requiredCost: 95,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1122",
          treasureName: "眠れるケリの美女(69)",
          probability: "20",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6700",
          treasureName: "キャラクタードロップ(6700)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3700",
          treasureName: "キャラクタードロップ(3700)",
          probability: "50000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "30000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "000",
          enemyName: "わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQFBQUGBgYGBgYGBgYGBgYHBwcJCQkJCQkODg4TExMWFhYWFhYaGhobGxsiIiIrKystLS0xMTE4ODg4ODhAQEBDQ0NLS0tMTExUVFRcXFxlZWVycnKAgICOjo6bm5unp6ezs7O/v7/ExMTKysrS0tLc3Nzi4uLo6Oju7u709PT7+/v///9zib0wAAAAQHRSTlMABgwSGiQ4LEFK0VVf8W14gMPekbmIl6Cxqej71su+4fX+6dn/9uv/9P//9P/8///9////////////////////kGjFlQAABYtJREFUWIWVV4mWojoQbRAFGhrcQVBbBGVfAig7/v9fvcJxQcUZ39WjJFA3taVSfH39AzhBtAaDAfH+0U70aJ7Br+IkMxdo7P+Ig8hiPO9fuKiZuv/l8b+LPC5PTVa73ZpqFsUIVtwjZMx6/0OeEbdeFKgcLIr1+ZWB0siYfe4Egl3vw7SI7DnIEPzSivIyNib9j9dn10aYV3XiiiTWY0d2VNZVbMz7H3oRZxr5+nTK/DXVoxZGWJ7q6mgL5GcE2EDYhwXIn0q0YkleDbL6VNeJtRh8RkAM1aBZ/3SqI3VIL+xDM6gT50MCnJru0OHY4ID24mzpROfrUJ+yHzgB65H8WNGu2Ei/m+tIkUY8+a9cwklOWG506woX4FyvPVtd0H9PJpyer7ZeGB8uOCaA4+26MelvDFifFbcWSqqzBztQ5+FeeO9JjOBGOz8u3ok3yCC73yY0pNwOZW+X/6NDYr8NJkaJO5T/VRxQ+CummwAj59sgfZWvH6dKpLLdBLDnvKR6Fa8+JMAG013UYX8ZJ+V9tirydwQE9+unHTZnvhteHFOfqjgIg26CxoNxVwAKZFpX15Sxo6M3BD3u1+lSABhCx/STxpX10dX84xsCcrJFxYtw/Wddz0KNd+vI8ZO8mwAsMA6vITiVaVrW5TGMz/cy2A9H/5kAw2GMMSs3e1UfFvfi4lQX5R/CApTRl48EGElDlcAhBh0WJJ6iuC3XZL4iy08E5FCA84sYboPyleDgyLKZ3MfpKwFGj7554qs/24UvLjjVGTLNoGVaHrmu+UhA8JIEB2B/YnRlQZVFUXqdbwKZHw9PThwIcAAOMFLoJIDToDVbJnEUxx4UhN6dgl57vsr0aNGIryZ0KFLmWZankatpuqVLAsdRt7rGqCja8316etMA9l+eF0XV7OPLTHYIAxT6uqabuqbIP9vf6a0ysio6esJgINjH68pl7DpeEENQLvrX+SEKw9BSPCi2kaW4ob8V6QsBtw+zUGXJmZ1cK0cZmYqm+2ldJUn5xxFFlmVpoFsBQr5uRnni//IXAh5OwcSeU0MguLseIRRlVYLiVmjrNDA1XdMc2N1VvJ3fCcrCX/OTOwE4ocySrCqRE7YjU6VhAICqXdfHfZugivYL8W7CqTqEKIirwtMekwuYAc1joMGkRVBn7vK7pUHuW65/JkCv6X1Gjm4+4FR4qAw2P9aNAMIQZ0VVV0h3ozTN0keAP7PIXjH3RMpOdWzJ1t2EujybDltHN03LsUz4u30tB45bY8Vf2yVybkMGFYHS0qDlNU9XIKRtaMpytBK5W6PQY9Um4rHlvBJAAUlDUwviFiJvM2doirhvBiiGQVqlnnOsuzZT4urxOacvnyz4ZfGHgoJTi60fxQ1Bl7+Pln5ojzN/RX89Aoeedu/qXSYADvojQequnwm+8D4zX0mtKPyDgHomaCjYqf2xBh0EzdH+jsDU46qFxF11vjX0J3anCXWsKx5qIdDHXFeX1Z90agDJqD0n0mbKdjRJQNCVB/XB8/xHBL6x7uhxiKERdZwLdd7UhQdUOdoPX43AWeivO3z43OAAqs43F6wpy9lHSP3ze9CLDdwS9irsVuv8Y99xnoGp8w0YG+qs670DI2eSYlq6IivwsxSFxQXiWNYsR5dlxXT0zXKxELjujh2jRkYYe5vxDgXbCTW4gh4urTDypPEmiH11RlED4k2jSgp2fHSnExXaKAbHrsDJ2R6F9mK2BoI1BTc6pTH8/CCszY4MY80N7qC4lW4uOWqyd/eTPt4lj/cHNMOwgmRq0mKylOXx3QVg82IMM3NekGRJYBh60H92AUYOp9+A8Q9Akn5kWf55BExIYwlujr+/R9PhcxAwguFnk7kgLERxOmrw/Yjz3FQUF4Iwn8x45pZG/wHoT/cGi/0BoAAAAABJRU5ErkJggg==",
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
            actualHp: 360,
            actualAp: 32,
            actualDps: 20.44,
            magnification: "400%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "2.0-6.7s",
            delayFrames: "60-200f",
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
            actualHp: 400,
            actualAp: 60,
            actualDps: 48.64,
            magnification: "400%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "2.7-13.3s",
            delayFrames: "80-400f",
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
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "3.3-20.0s",
            delayFrames: "100-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 400,
            actualAp: 4000,
            actualDps: 2142.84,
            magnification: "400%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "3.3-20.0s",
            delayFrames: "100-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 1000,
            dps: 535.71,
            speed: 4,
            range: 110,
            rangeType: "範囲",
            kbLevel: 2,
            money: 800,
            freq: 56,
            foreswing: 27,
            backswing: 29,
            tba: 0
          },
          stageStats: {
            actualHp: 400,
            actualAp: 4000,
            actualDps: 2142.84,
            magnification: "400%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "2.0-10.0s",
            delayFrames: "60-300f",
            baseHpRatio: "99%",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-4f",
            baseHpRatio: "99%",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-6.7s",
            delayFrames: "2-200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "061",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 50000,
            ap: 2400,
            dps: 2482.76,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 29,
            foreswing: 17,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 2400,
            actualDps: 2482.76,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "姫様の秘め事",
      baseHp: 180000,
      width: 5800,
      enemyLimit: 5,
      requiredCost: 105,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1122",
          treasureName: "眠れるケリの美女(69)",
          probability: "25",
          amount: "1",
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
          treasureId: "5200",
          treasureName: "キャラクタードロップ(5200)",
          probability: "75000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "50000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "025",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcICAgICAgICAgJCQkJCQkNDQ0ODg4TExMWFhYZGRkfHx8hISElJSUlJSUmJiYnJyc1NTU3Nzc3NzdDQ0NLS0tLS0tNTU1VVVVeXl5lZWVnZ2dvb293d3eAgICJiYmTk5OdnZ2kpKSsrKy1tbW9vb3GxsbQ0NDZ2dnh4eHo6Oju7u709PT6+vr////////wM4yQAAAAQHRSTlMABw4dFSXhc5hK+S4+fVTY6V2GvW3KqWZ3ipWf/bDM6rzI2P//4f/u///s///+/////v///////////////wD/L3PmKQAABiBJREFUWIXtV9l24jgQjVk6YQwEAoFAIAG8YFm7Zcmrxv//V1OmO93Z4Zx5mYepF7zdK9V2VVz9/S/t6n+C/wLByZzp4Oq9OZ2u67rOh+efWmcx67+57w+Xq+0+CA7jSwnC1e+1nO50cYhpovMyF4+XbcFZi+CXE477sI+lSpVKlM3Y+kIfHkS667YX/bsDMzpJ0qwwaZ2g5Vlo/xSncVzRkXPVmT7R1GhTVk3TmDznB/cswfXtCijcoMyDYX99ZDIt6sZWZVmoUtILPBgc2WHe62zTRu12hMnc1nkKLqQmVyIYnve+8yhM/OguSV2TiKdVpZPUGIihVgLddS+IobtTldyPnrImD0VpYG2OEaYUed5kt5t3zjMMD5k18YRam6BESYy4LoqURiFNjIlH3zI47VtneiyakvuqrjBGJC1tmaBIZmWVV00Rz7/2ojMcXZ9+R6RqrEa8zDxeN5UClgISqQitmjwYf87gdMePwfPodN17FLZpCoa1IKXBWNfWZoVVKcqgHA6fpaLjznexMi9p6u8UMNQK8RBFSQXXTZGUpRJl09h01/8AH672TFc2fXyJ0PBgAGSFF3qobK8MI/xEBFT+zbtAdleBzGtYMZ7+duguzMpCR4xzzG1ja8F9lDYnBo2fp2/w/XWstYQ9Z/s/exv5oe97lJuEo6KxVjEiZGPLAj4T4az3Cu8+xhQzTGor/2jA1ZISz/eErFMRgXNNlZWpsBmNFORHvO4p95EQnleS2TJ+Fd5hzLwQCSGFIV7EVF5ZI2xbzuBQdfzzpbulGGJrObzdvtpYdy82vkRaZ1USydBHiEluc05OEYlfJNMZAl5CjRikK/q6xpyVIKHmiHGCTIal0jLyRJZp+BgIxi/4HcEJxB++KMX2TXrnsmayNoJDKWfIsNLm/sbDCqLYWPozDc5gT5A64UUpd2/EprtNayoz2yYOlCzjKRCECJGIQkzZ8g0+J6JUu+GbEh8cCwllnJ8yXzCkqNRMFWWJgEbRlsAZHwhK7QlfqP1bPLQD8qVkhOqWopJRkjABdHU0OTxvnsdt0x4wat8WlBfpezzI6mSDQRCZJ8vMFCUnhmJVNaW/cAej6x7oLeANuFgyXuj94EOLugsQVGUwgoL0IpCVECtCtPYWp2R3lgHG0JsgHKwwn+DBicH8bv208UPOw43PfCJ5rhDy49b/zjzAJG+dEzQ3X0kEkCx8pAVThnHIqTJW+thsnavewxHTFl8LkmfB9EuRGh+xkapMKYpCVpRF6vkmebjq/MbLFr/8Et9ZEGpElfAsF6Hnhf7zLJCHoTt8ilhxKpAT/muZ7T5hJrSmICm1DkPJD8vRYvqwf5r42QmPsyx++EameztGmSa6LaaM5LU2xx+zu8Akm7DVNoVN/i0edIlBr4UEGsCCnGS6MNSbPKe1ilRZJGfxoApH7aOI+YgqpJs0U5XV3sRTtUbQFjqPV2cOKvdZ+B7ikm02G21VllorEdRWUpko4vIs/qo3n002HmFCUIh7CmpQQP2UzEuqDP24mffO4NuGOYY+E2mepSikDGFQlbqAg1ZW6dP5s96ZBqmBtcIwoiTyNhvOQoIEI8F6y87Fr7VhYGA8gV6ORFnqdAPHDBU4RMGq564uOOg7j9KAhGoe0bSyVRaGG2hMhA9TwDoXjBrdJ5HBoSZRAgQN1ADd+Jjgw/iCIeMXAYPZUiGVY5VVBg43gSNy+Lp33ltvxrVOCautICYV2IfzHW8Wl67fzqvgM4wZIBscJYIxipRB33T/BxttIo+e+s6QEOcFzIxMyu3FW+jvmIDEV0Ua7w6xyGpbS5/xC+dtyOJKJEZTnwbrYcedrnaxFGFIjufH5V8G426mlDdZDE57drqDu3ucZ/EF0+pPWwpbMO9++adjnGFcWfr9pPjKgzVV8ezuzZ+czpoX6pKB+aodnGIh9v13AetvqWbr3gVhdK6PRvN99/1zGOaj4/bB7X948wrr9Pru4F4ogZ9H8+vr69GLtdfPnPpIxvsbt9f5fCOd8c3s/vbHXz4W/l+fWNjOGWgzuZ/dTD8Np+OO56Obxez+/vb29sfJJr/sdANP7+9ni5vRfPzZv8h/AFe9mOihrLs0AAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 10,
            dps: 2.83,
            speed: 4,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 800,
            freq: 106,
            foreswing: 27,
            backswing: 29,
            tba: 40
          },
          stageStats: {
            actualHp: 400,
            actualAp: 40,
            actualDps: 11.32,
            magnification: "400%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "2.0-6.7s",
            delayFrames: "60-200f",
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
            actualHp: 400,
            actualAp: 60,
            actualDps: 48.64,
            magnification: "400%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "2.7-13.3s",
            delayFrames: "80-400f",
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
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "3.3-20.0s",
            delayFrames: "100-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "025",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 100,
            ap: 10,
            dps: 2.83,
            speed: 4,
            range: 110,
            rangeType: "単体",
            kbLevel: 2,
            money: 800,
            freq: 106,
            foreswing: 27,
            backswing: 29,
            tba: 40
          },
          stageStats: {
            actualHp: 400,
            actualAp: 40,
            actualDps: 11.32,
            magnification: "400%",
            count: "0",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "6.0-6.0s",
            delayFrames: "180-180f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "060",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 180,
            dps: 79.41,
            speed: 6,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 68,
            foreswing: 33,
            backswing: 35,
            tba: 1
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 9000,
            actualDps: 3970.5,
            magnification: "5000%",
            count: "3",
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
          enemyId: "030",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgICAgIEBAQJCQkMDAwPDw8SEhISEhITExMgICAgICAiIiIjIyMoKCgsLCwwMDAwMDAxMTEyMjI1NTU3Nzc4ODg+Pj5BQUFHR0dHR0dJSUlNTU1NTU1PT09RUVFYWFhZWVldXV1iYmJiYmJkZGRpaWlqamptbW1ycnJ3d3d3d3d+fn6GhoaHh4ePj4+QkJCYmJienp6np6eysrK8vLzFxcXQ0NDY2Njg4ODo6Ojy8vL7+/s8la7SAAAAQHRSTlMAB4nGDTvkGlwnMKxIeu8+Zt+VVoew89Khbf7LgZj/vvXl/7T/8uL/1uv/9v/f////2/7v/v/+/////v//////W5yotAAABFBJREFUWIWdV2tz2joQxbduDQ4EwsvEYAULgUAISSi2JBsD//9f3SVJO3emza3IzsAHhnN0drUvtVp/syj661/+Dxy2h+Og82WO3nY43R8HL92vEsRbjpRab7+sIBhizDiaf5EgaLXGVHMlJmEQBPeC48E4izvjZcG5HPcmD7P+XRRRL8eEJseqKpW2TiJC8sEdDOEsRTjFxDYfZqggT7E/QZwjRCjHvwiaklCc+UtoT1PCJaf1L4KaST7zJ+ilhEjJ2TvB6QQfweAyvAm+55JIQWRdV82psaWraobF2BvfCnoYU0ylElQwkEIZBOSl40/Qaq/TlFeVcAXcYnO2IOJwxyW0ogc41TRNYUgqm+uFc14d7xEwWiMEJzfgwqO8XC+YEPd6h4JwZVVKlKtkqVF5vV6E4nh6R033X53iCGGM66Y6A8GpKQvz7C9gqKy02laVMW/o5nrWdb3wJhgtMRPuFgPHdHXLJMvK2mbeAlZGYWwU0QXjFHNOefqICZr4ZnLn4BxDGDGwFFGG4Es66w6+UeyurRUFVe50qnEhCWFGCHBEvfjVQjhhjAtdFuXpVGEDapjlqTYl8ySID2r5kHOjIXsYiBeECI5RipFnMXVzVeyWWEkuhWbgR+VOjTKmxBOv5hwM6XKec5pKLLTAzRUy4XLWoAD7uRBMlNzksqAYXMCprqwrywK84Unfy4NOMp1vl2T5lMNMSR+fMMPQX6ePCCV+4yXeiO0kkfttjiRD6x3kASTCOuF86JdI4ShbzR7Q5rBRekp226UkLCXr+R21EIThhCaTeVMlKJkvBRHQYp/M9dj1HpHB83aZquuxt9lBADBPEVmuz8XU04kbQzQjxmVh3FtLwTAUg0iZLvwLutV6ZgpPwuhFSik4QUyQ8mL87vHdFq7eDcKFADz01xRqGp3qZ38X4uPldQQjmlAGWJoSybGCnzwZouz1fFq0+jsOAmC2UAyTUurr1be19+31YvvB4qb/VlOMMxiV1NYrz+nY2VbFNu7mnAEBICUHHZKmedsPD/k8G8bRCyw3N4MYlFoxKvcD//EMO9Xo7XQpGbXCOaWgt2b+BBDIl5/HM1U4axRndOnXUt4lzAi0AwrtzEjrwIyigm/8B2yQcaoQLYlQb3jnbKmpfzG0opVWnEB3/oC/c6z8CRbGuv9i381/R+gcfwO/BWLkiQ8W5o8E1regPxHgrO+u+fxnAc55RjH6RABE0S+TPhXgeQ39w2d49+rR1aAl8/L3FPAn6My5ZEJIVZTmZvZnKhslOPUY8WF3sjsYqW+rCeyHUMVSKgVljUtt1eTvBHAJ3+NsmB3yveWunK9PVleVdo7YQ5b51nMQhHFnVrwunju9VTbWhZKrwWJ039styM63a4cXX2eji2YV3fvyixL28eIMxlQanYz9h2sYRVFnsJd59/ubtdcJLFv7maeIsP3Pw8O3bz/W++mPD3v88ZhvNsk/7d/a6r91G+vCPx1ewQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6000,
            ap: 4200,
            dps: 893.62,
            speed: 35,
            range: 1300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 141,
            foreswing: 4,
            backswing: 137,
            tba: 0
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 8400,
            actualDps: 1787.24,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 5,
      stageName: "プリンセス争奪戦",
      baseHp: 200000,
      width: 4800,
      enemyLimit: 6,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 150, 200, 300],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1122",
          treasureName: "眠れるケリの美女(69)",
          probability: "30",
          amount: "1",
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
          treasureId: "5100",
          treasureName: "キャラクタードロップ(5100)",
          probability: "100000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "70000",
          amount: "6",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "15",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.0-12.7s",
            delayFrames: "90-380f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 3123,
            actualDps: 5855.62,
            magnification: "100%",
            count: "5",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "22.0-33.3s",
            delayFrames: "660-1,000f",
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
            actualHp: 5000,
            actualAp: 2000,
            actualDps: 1463.41,
            magnification: "100%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "2.0-30.0s",
            delayFrames: "60-900f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "051",
          enemyName: "ブラッゴリ",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 40000,
            ap: 3123,
            dps: 5855.62,
            speed: 30,
            range: 155,
            rangeType: "範囲",
            kbLevel: 8,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 40000,
            actualAp: 3123,
            actualDps: 5855.62,
            magnification: "100%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-10.0s",
            delayFrames: "2-300f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "052",
          enemyName: "シャドウボクサー",
          icon: "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",
          traits: ["黒"],
          baseStats: {
            hp: 80000,
            ap: 4997,
            dps: 9369.38,
            speed: 22,
            range: 158,
            rangeType: "範囲",
            kbLevel: 10,
            money: 600,
            freq: 16,
            foreswing: 2,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 80000,
            actualAp: 4997,
            actualDps: 9369.38,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "060",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 2000,
            ap: 180,
            dps: 79.41,
            speed: 6,
            range: 150,
            rangeType: "範囲",
            kbLevel: 2,
            money: 550,
            freq: 68,
            foreswing: 33,
            backswing: 35,
            tba: 1
          },
          stageStats: {
            actualHp: 100000,
            actualAp: 9000,
            actualDps: 3970.5,
            magnification: "5000%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.0-20.0s",
            delayFrames: "90-600f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "061",
          enemyName: "ダミー",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 50000,
            ap: 2400,
            dps: 2482.76,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 3,
            money: 4000,
            freq: 29,
            foreswing: 17,
            backswing: 12,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 2400,
            actualDps: 2482.76,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.0-20.0s",
            delayFrames: "90-600f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "030",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgICAgIEBAQJCQkMDAwPDw8SEhISEhITExMgICAgICAiIiIjIyMoKCgsLCwwMDAwMDAxMTEyMjI1NTU3Nzc4ODg+Pj5BQUFHR0dHR0dJSUlNTU1NTU1PT09RUVFYWFhZWVldXV1iYmJiYmJkZGRpaWlqamptbW1ycnJ3d3d3d3d+fn6GhoaHh4ePj4+QkJCYmJienp6np6eysrK8vLzFxcXQ0NDY2Njg4ODo6Ojy8vL7+/s8la7SAAAAQHRSTlMAB4nGDTvkGlwnMKxIeu8+Zt+VVoew89Khbf7LgZj/vvXl/7T/8uL/1uv/9v/f////2/7v/v/+/////v//////W5yotAAABFBJREFUWIWdV2tz2joQxbduDQ4EwsvEYAULgUAISSi2JBsD//9f3SVJO3emza3IzsAHhnN0drUvtVp/syj661/+Dxy2h+Og82WO3nY43R8HL92vEsRbjpRab7+sIBhizDiaf5EgaLXGVHMlJmEQBPeC48E4izvjZcG5HPcmD7P+XRRRL8eEJseqKpW2TiJC8sEdDOEsRTjFxDYfZqggT7E/QZwjRCjHvwiaklCc+UtoT1PCJaf1L4KaST7zJ+ilhEjJ2TvB6QQfweAyvAm+55JIQWRdV82psaWraobF2BvfCnoYU0ylElQwkEIZBOSl40/Qaq/TlFeVcAXcYnO2IOJwxyW0ogc41TRNYUgqm+uFc14d7xEwWiMEJzfgwqO8XC+YEPd6h4JwZVVKlKtkqVF5vV6E4nh6R033X53iCGGM66Y6A8GpKQvz7C9gqKy02laVMW/o5nrWdb3wJhgtMRPuFgPHdHXLJMvK2mbeAlZGYWwU0QXjFHNOefqICZr4ZnLn4BxDGDGwFFGG4Es66w6+UeyurRUFVe50qnEhCWFGCHBEvfjVQjhhjAtdFuXpVGEDapjlqTYl8ySID2r5kHOjIXsYiBeECI5RipFnMXVzVeyWWEkuhWbgR+VOjTKmxBOv5hwM6XKec5pKLLTAzRUy4XLWoAD7uRBMlNzksqAYXMCprqwrywK84Unfy4NOMp1vl2T5lMNMSR+fMMPQX6ePCCV+4yXeiO0kkfttjiRD6x3kASTCOuF86JdI4ShbzR7Q5rBRekp226UkLCXr+R21EIThhCaTeVMlKJkvBRHQYp/M9dj1HpHB83aZquuxt9lBADBPEVmuz8XU04kbQzQjxmVh3FtLwTAUg0iZLvwLutV6ZgpPwuhFSik4QUyQ8mL87vHdFq7eDcKFADz01xRqGp3qZ38X4uPldQQjmlAGWJoSybGCnzwZouz1fFq0+jsOAmC2UAyTUurr1be19+31YvvB4qb/VlOMMxiV1NYrz+nY2VbFNu7mnAEBICUHHZKmedsPD/k8G8bRCyw3N4MYlFoxKvcD//EMO9Xo7XQpGbXCOaWgt2b+BBDIl5/HM1U4axRndOnXUt4lzAi0AwrtzEjrwIyigm/8B2yQcaoQLYlQb3jnbKmpfzG0opVWnEB3/oC/c6z8CRbGuv9i381/R+gcfwO/BWLkiQ8W5o8E1regPxHgrO+u+fxnAc55RjH6RABE0S+TPhXgeQ39w2d49+rR1aAl8/L3FPAn6My5ZEJIVZTmZvZnKhslOPUY8WF3sjsYqW+rCeyHUMVSKgVljUtt1eTvBHAJ3+NsmB3yveWunK9PVleVdo7YQ5b51nMQhHFnVrwunju9VTbWhZKrwWJ039styM63a4cXX2eji2YV3fvyixL28eIMxlQanYz9h2sYRVFnsJd59/ubtdcJLFv7maeIsP3Pw8O3bz/W++mPD3v88ZhvNsk/7d/a6r91G+vCPx1ewQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 6000,
            ap: 4200,
            dps: 893.62,
            speed: 35,
            range: 1300,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1500,
            freq: 141,
            foreswing: 4,
            backswing: 137,
            tba: 0
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 8400,
            actualDps: 1787.24,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.0-20.0s",
            delayFrames: "90-600f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2001Data;

