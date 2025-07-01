// Stage 1154 Data
import type { StageData } from '../../app/stage/types';

export const e1154Data: StageData = {
  eventId: 1154,
  eventName: "秋色シルバーウィーク",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 154,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "二位だっていいじゃない",
      baseHp: 4000,
      width: 4000,
      enemyLimit: 8,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
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
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "28.7-28.7s",
            delayFrames: "860-860f",
            baseHpRatio: "90%",
            isBoss: false
          }
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
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "28.7-28.7s",
            delayFrames: "860-860f",
            baseHpRatio: "90%",
            isBoss: false
          }
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
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "90%",
            isBoss: false
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
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "2.7-2.7s",
            delayFrames: "80-80f",
            baseHpRatio: "90%",
            isBoss: false
          }
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "結婚25周年",
      baseHp: 80000,
      width: 4500,
      enemyLimit: 9,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "30",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAEAAAACAgIDAwMFBQUGBgYGBgYHBwcHBwcICAgICAgJCQkKCgoKCgoLCwsMDAwODg4ODg4PDw8QEBAQEBAQEBASEhITExMYGBgcHBweHh4fHx8gHyAgICAgICAhISEpKSksLCwsLCwtLS0uLy8vLi8vLy88PDw8PUBDQ0NJS0xbXV9dXV1kZ2ptcXV1eX59goeDipCMkZaUmp+boKelqrGssrmyt8C1u8S9wsnHy9HS1Njc3uDl5efx8fH5+fmpfApWAAAAQHRSTlMAAP+2RhbOI9aNooI8Ty9peMVZmOP2rrsNR4fXX8r/7BsI9uL/cCvy/gf8/hT/////////////////////////EXdUogAABUhJREFUWIWdlwt3sjwMgNnUeUMFdV6GyoZssPaFQmkpN93//1dfCrpN/UTPMuc5avOQJmmSKg93ymKott/+53vlXv1xr9H/+Pw7QJ1ZlqG1/gxQRqZH0Wz4Z0C76/Dcexr/GaA2cJYTU7tcfh/gbWX4eRpYk0sn3AdYaGaYJ5HbUP8IaE8cniUcd0YX6+8DNHWcZqkIrF77T4CWZgZ5liQMPY3PFe4BtAZzJIosEbFv9oZnGrcBSns0t2iRp0kiGDa66mkkbgJag27HDfMC9JMkZng7G50YcQOgDPu66fFil5UAsMF3jN7glxH1gMWgZyKa7/eVAZIQU2zpo59g1AJeV3PLT3ZfX19FZYGQ/zxAhta+B9BarR1a7EH/awcxSIQQpRVxhI1++zZAgegx+fivrz3EQLAwCFmF4N43oQYw7FnRbi8N2Bcyizx7Y+OoJKSxd6wu1wEtbeoXu7zYgwvBA4JsHh8fN6TaRhYjfaDUA5qQfrs8S/MizzI4Sd6jBHhxZUJOzW67FgD57xeH6KVpmsR+aYF/AGQp1ge1APAAO6bPwfXSBwcvShOmo1rAUkdp8aMv4x+SYxRAcu706wDKaorzPDkRkYifD5lA9YARuOAMcELIEnwLQGT0f2+BA4CzOCkjCYG8AYAsOPoQFAScQ58L5slUinksMmbVAh4GTzg/WCDguTTwNnbI4M2PeeBRkVFTqwWoMySyw/GJA+za9maDsG3biBJ3g3ni3ciDVteiuSjTRsQEtG3sAiLANnJd1yahM6nPRGVl4DTlPAaGYMT3fObbbsCAhYgPjEOBvn4WPiZWkMWMRRLCOWecej6NAoRIGKDNtDoKNYC35dyhqWCU0ohJiaKIhpRCVQgJMnuqcgPw0BrrFSH8LZLgo2mvedCsLWnj2dZnHB5NK0hQvvnY6UzUo2JtUV2o/bUD+waAtDwICDgTOcbv1lBf1pVW82W2RdgnAYiPkbNdzyej4d19QSKGk2cbeT4hxHM3ujZW24uTBTcAsI930y71gQDt/b7u/O/fv8/jL5/LOQBg+7ANNF/eAXj7WK7e31fN4cHU166Fpf8ICT1jtDhbfQl4XU3WW5BvX7+toL1CDkEciNM9H7MuAG1t7eAAIifbcLNcvtRxImsApNTlrHkOeNW2mEMryPOMe+Z8/CqZE8Rla+FRhPVzJ5x9/JRncCdLEfxxYhkvMGArmhNJQMw4uXDCGeBjhuJdWQtF1ci3Lx/Kw2obyOoGVTE0tVqAMjbIDtpJ2cpBYioJck5Nq7JKL7x4Cmj1HQ7TiCyCjMkiDP1o+6LKfR0B59PuKWDYQxnMAnCEIfVDWcFhrDLnc5OkcgtxfAugzr1inyc89D3I3iCSPYB5joV5dh9guZYuiKnnyvLrB2CDRLCk7BBQ2W75YGAE+x0kgGU+6R3T9atmmsr2XraHODT7dXmgrLZ0v0upO+02h+OZiQhlsRDfvY3FgXE+rx8q46LK+pHD9oXwn+VEvFjOLBT8EGRoYnIYbM4Bw1GzpSjKRw+l+5yh6lqwGMzhGNJIhlO+oMRzfOUsDHS9O1bVl20AQy11G9WqxXgNhDCCVgrqkBrggiuncak/b431eouTXS6IdVzVGj1ZXhBCX+BlZnF87b7w+mJ5PsaBgIYcoc73KknAsphDZYbMhFvXlRuLslwjcBcEDMY589cqSYB8kEbEMbFmzfOCdAS0tQ40TjA0xM/6aNj+FrXfkUWZBMRDZmN85dqnDJtaY2q5CLn243NHb/wSffr8uCnFBEdf7KACtJpad6Z3Knm6kOMPjYl2eW/8D6p1Jgm/HMbrAAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
            magnification: "100%",
            count: "3",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
            delay: "3.3-4.7s",
            delayFrames: "100-140f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
            magnification: "100%",
            count: "4",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "6.0-8.0s",
            delayFrames: "180-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 55,
            actualAp: 300,
            actualDps: 310.34,
            magnification: "100%",
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "359",
          enemyName: "はぐれケモルル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgIDAwMICAgLCwsNDQ0ODQ4ODg4SEhIdHR0fHiEkJCUkJCQmJiYnKSoqKyssLC00NTU3Njc2Nzo+Pz9CQ0RDREdHR0dLSk1UVFRTVllTVlpUVlpVVllaWlpeXl9hYmVjZmplaW1pbG9ucXZ5eXl1e4B6foN8fn99goeIiYuGjJGNk5iWm6Ccoaihp66qrK+prrWvtLu1u8O6wMfBxcvO0NXW19no6On8/Pz////tmh3YAAAAQHRSTlMACVBviKTYtMQ7FC32IENiTdV1pv+KYOL4ku/9dqWG8PzYw4+q7P/33f+///LZ/+f+///+//b///////7///8ARHetJQAAAfZJREFUWIXtkmtv2jAUhklbKBAugUEgS0NToC5ewNjHxnYutP//X+2YlWoXpBXt25QHoUgh73OOX9J4+0cataAW1IJaUAtqQS2oBbWgFtSC/1bwd7xOuFitVouH0Pc+8fif8WRfHo9VntvDfh1creiON8Wro7Q21+J52r1u/GAtTOnyx8KCNhrS6Jod/GivcXBRVWVuYT6fxMCfh5829MdP0n5g0pjEE2H0xr+8rB8EP5fs9cMlx/E2x/YcmloFYCQV44vTop087KbDYOBjS153EG2kCxonOBkUzxlNY9oj0YV8N5Fgj6/yhW83yyhKlnuTF5jDu2eBZpoaRmQaf7nwRwR7iW0fS6qt0UpqTJ/yAsz5CJYpynRGyeTxW9j/rUgvAuBCGSOVNlbQjFuXNwCg7FmgGGQkkylh6rBbL5CHc539aCM4ZxykxKsgohCn+pVSmmdcCPwB7SqjCDOacmNNXlblbnhaxUukyByMvyPkO0orTikhGaOECcEZnqkoSk5A46oWtrsEC+zMpALBAb+YxVVYxpzOfXAtpd3DhUoJxRHCVlVlSMrctO0yeWp0mq3eJM3AFWckuDG/wAW4KkxuOK6SxvMJ0uuNpmEYDPqej2/Qze1d8749Gs1mXx3zH8QnUuTF8Yg8z1qtdvu+2by7vfl46b4DXcdeT+OJbIkAAAAASUVORK5CYII=",
          traits: ["メ"],
          baseStats: {
            hp: 2400,
            ap: 2400,
            dps: 947.37,
            speed: 24,
            range: 300,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 2400,
            actualAp: 2400,
            actualDps: 947.37,
            magnification: "100%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "はるかな道",
      baseHp: 250000,
      width: 3200,
      enemyLimit: 7,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "40",
          amount: "3",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "155",
          treasureName: "にゃんこ福引 ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 80,
            actualAp: 200,
            actualDps: 333.33,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "26.7-53.3s",
            delayFrames: "800-1,600f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 80,
            actualAp: 200,
            actualDps: 333.33,
            magnification: "100%",
            count: "2",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 80,
            actualAp: 200,
            actualDps: 333.33,
            magnification: "100%",
            count: "3",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAEAAAACAgIDAwMFBQUGBgYGBgYHBwcHBwcICAgICAgJCQkKCgoKCgoLCwsMDAwODg4ODg4PDw8QEBAQEBAQEBASEhITExMYGBgcHBweHh4fHx8gHyAgICAgICAhISEpKSksLCwsLCwtLS0uLy8vLi8vLy88PDw8PUBDQ0NJS0xbXV9dXV1kZ2ptcXV1eX59goeDipCMkZaUmp+boKelqrGssrmyt8C1u8S9wsnHy9HS1Njc3uDl5efx8fH5+fmpfApWAAAAQHRSTlMAAP+2RhbOI9aNooI8Ty9peMVZmOP2rrsNR4fXX8r/7BsI9uL/cCvy/gf8/hT/////////////////////////EXdUogAABUhJREFUWIWdlwt3sjwMgNnUeUMFdV6GyoZssPaFQmkpN93//1dfCrpN/UTPMuc5avOQJmmSKg93ymKott/+53vlXv1xr9H/+Pw7QJ1ZlqG1/gxQRqZH0Wz4Z0C76/Dcexr/GaA2cJYTU7tcfh/gbWX4eRpYk0sn3AdYaGaYJ5HbUP8IaE8cniUcd0YX6+8DNHWcZqkIrF77T4CWZgZ5liQMPY3PFe4BtAZzJIosEbFv9oZnGrcBSns0t2iRp0kiGDa66mkkbgJag27HDfMC9JMkZng7G50YcQOgDPu66fFil5UAsMF3jN7glxH1gMWgZyKa7/eVAZIQU2zpo59g1AJeV3PLT3ZfX19FZYGQ/zxAhta+B9BarR1a7EH/awcxSIQQpRVxhI1++zZAgegx+fivrz3EQLAwCFmF4N43oQYw7FnRbi8N2Bcyizx7Y+OoJKSxd6wu1wEtbeoXu7zYgwvBA4JsHh8fN6TaRhYjfaDUA5qQfrs8S/MizzI4Sd6jBHhxZUJOzW67FgD57xeH6KVpmsR+aYF/AGQp1ge1APAAO6bPwfXSBwcvShOmo1rAUkdp8aMv4x+SYxRAcu706wDKaorzPDkRkYifD5lA9YARuOAMcELIEnwLQGT0f2+BA4CzOCkjCYG8AYAsOPoQFAScQ58L5slUinksMmbVAh4GTzg/WCDguTTwNnbI4M2PeeBRkVFTqwWoMySyw/GJA+za9maDsG3biBJ3g3ni3ciDVteiuSjTRsQEtG3sAiLANnJd1yahM6nPRGVl4DTlPAaGYMT3fObbbsCAhYgPjEOBvn4WPiZWkMWMRRLCOWecej6NAoRIGKDNtDoKNYC35dyhqWCU0ohJiaKIhpRCVQgJMnuqcgPw0BrrFSH8LZLgo2mvedCsLWnj2dZnHB5NK0hQvvnY6UzUo2JtUV2o/bUD+waAtDwICDgTOcbv1lBf1pVW82W2RdgnAYiPkbNdzyej4d19QSKGk2cbeT4hxHM3ujZW24uTBTcAsI930y71gQDt/b7u/O/fv8/jL5/LOQBg+7ANNF/eAXj7WK7e31fN4cHU166Fpf8ICT1jtDhbfQl4XU3WW5BvX7+toL1CDkEciNM9H7MuAG1t7eAAIifbcLNcvtRxImsApNTlrHkOeNW2mEMryPOMe+Z8/CqZE8Rla+FRhPVzJ5x9/JRncCdLEfxxYhkvMGArmhNJQMw4uXDCGeBjhuJdWQtF1ci3Lx/Kw2obyOoGVTE0tVqAMjbIDtpJ2cpBYioJck5Nq7JKL7x4Cmj1HQ7TiCyCjMkiDP1o+6LKfR0B59PuKWDYQxnMAnCEIfVDWcFhrDLnc5OkcgtxfAugzr1inyc89D3I3iCSPYB5joV5dh9guZYuiKnnyvLrB2CDRLCk7BBQ2W75YGAE+x0kgGU+6R3T9atmmsr2XraHODT7dXmgrLZ0v0upO+02h+OZiQhlsRDfvY3FgXE+rx8q46LK+pHD9oXwn+VEvFjOLBT8EGRoYnIYbM4Bw1GzpSjKRw+l+5yh6lqwGMzhGNJIhlO+oMRzfOUsDHS9O1bVl20AQy11G9WqxXgNhDCCVgrqkBrggiuncak/b431eouTXS6IdVzVGj1ZXhBCX+BlZnF87b7w+mJ5PsaBgIYcoc73KknAsphDZYbMhFvXlRuLslwjcBcEDMY589cqSYB8kEbEMbFmzfOCdAS0tQ40TjA0xM/6aNj+FrXfkUWZBMRDZmN85dqnDJtaY2q5CLn243NHb/wSffr8uCnFBEdf7KACtJpad6Z3Knm6kOMPjYl2eW/8D6p1Jgm/HMbrAAAAAElFTkSuQmCC",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "26.7-40.0s",
            delayFrames: "800-1,200f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 8000,
            actualAp: 3000,
            actualDps: 1914.89,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "359",
          enemyName: "はぐれケモルル",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQECAgIDAwMICAgLCwsNDQ0ODQ4ODg4SEhIdHR0fHiEkJCUkJCQmJiYnKSoqKyssLC00NTU3Njc2Nzo+Pz9CQ0RDREdHR0dLSk1UVFRTVllTVlpUVlpVVllaWlpeXl9hYmVjZmplaW1pbG9ucXZ5eXl1e4B6foN8fn99goeIiYuGjJGNk5iWm6Ccoaihp66qrK+prrWvtLu1u8O6wMfBxcvO0NXW19no6On8/Pz////tmh3YAAAAQHRSTlMACVBviKTYtMQ7FC32IENiTdV1pv+KYOL4ku/9dqWG8PzYw4+q7P/33f+///LZ/+f+///+//b///////7///8ARHetJQAAAfZJREFUWIXtkmtv2jAUhklbKBAugUEgS0NToC5ewNjHxnYutP//X+2YlWoXpBXt25QHoUgh73OOX9J4+0cataAW1IJaUAtqQS2oBbWgFtSC/1bwd7xOuFitVouH0Pc+8fif8WRfHo9VntvDfh1creiON8Wro7Q21+J52r1u/GAtTOnyx8KCNhrS6Jod/GivcXBRVWVuYT6fxMCfh5829MdP0n5g0pjEE2H0xr+8rB8EP5fs9cMlx/E2x/YcmloFYCQV44vTop087KbDYOBjS153EG2kCxonOBkUzxlNY9oj0YV8N5Fgj6/yhW83yyhKlnuTF5jDu2eBZpoaRmQaf7nwRwR7iW0fS6qt0UpqTJ/yAsz5CJYpynRGyeTxW9j/rUgvAuBCGSOVNlbQjFuXNwCg7FmgGGQkkylh6rBbL5CHc539aCM4ZxykxKsgohCn+pVSmmdcCPwB7SqjCDOacmNNXlblbnhaxUukyByMvyPkO0orTikhGaOECcEZnqkoSk5A46oWtrsEC+zMpALBAb+YxVVYxpzOfXAtpd3DhUoJxRHCVlVlSMrctO0yeWp0mq3eJM3AFWckuDG/wAW4KkxuOK6SxvMJ0uuNpmEYDPqej2/Qze1d8749Gs1mXx3zH8QnUuTF8Yg8z1qtdvu+2by7vfl46b4DXcdeT+OJbIkAAAAASUVORK5CYII=",
          traits: ["メ"],
          baseStats: {
            hp: 2400,
            ap: 2400,
            dps: 947.37,
            speed: 24,
            range: 300,
            rangeType: "範囲",
            kbLevel: 2,
            money: 900,
            freq: 76,
            foreswing: 27,
            backswing: 49,
            tba: 0
          },
          stageStats: {
            actualHp: 4800,
            actualAp: 4800,
            actualDps: 1894.74,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
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
            actualHp: 80,
            actualAp: 200,
            actualDps: 333.33,
            magnification: "100%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 110,
            actualAp: 600,
            actualDps: 620.68,
            magnification: "200%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "358",
          enemyName: "メタルにょろ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 55,
            ap: 300,
            dps: 310.34,
            speed: 16,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 200,
            freq: 29,
            foreswing: 10,
            backswing: 6,
            tba: 10
          },
          stageStats: {
            actualHp: 5,
            actualAp: 30,
            actualDps: 31.03,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        },
        {
          enemyId: "338",
          enemyName: "純金倶楽部",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQEBAQEDAwMDAwMEAwIEBAMIBwYJCQkLCgoMCgkPDQsaFxMnIQ8kIRsoJBQ3MRw6NzE9OzhFPiRDPzVJQy5SRRRUU1JcV0phX1pqYTx8ZgwUnhNuZkeFbAZwbWKNeSyDg2aDhW+pig+PiGu0kgakkEGhlmubmpfHoQi7oTeroHXVrQqtqaLKsUriuBDIt3K6uLfvwQjTxZDmyE7+ygTHx8b8zyDr0mv+1Tv+3mP/5YTi4uL/7rGCbRzUAAAAQHRSTlMACLCQ5xBbyUsweR32JkJzW6aG63Ssl8//rPHVv/3//t3n/03//t70/v/+/f/9/v/+/vz+////////////////1wbNwwAAA8lJREFUWIWlV22XmjoQlu7iIhRkUXBVKJgSeQ8EIiHAdv//v2rY3nt79vZUlzie4yfnybw8M8+4WMyxlTzr5x9NkxYLZXkHgLKUF8rqDgB5uZRVRZbEAbQH53h0LbEg5KWiqm7ZlV1zNL4LAEirpbLrfoTfwq5xv+tCiRjnHxNAkxT12bUEALYFjz9Mk5xi6NlCAEXXlWV5ib3A0QQAzCIvyuSSgJ2pCxFScysUxxQFpoj3ZIabERzZhjiVVgFhZ13YfUqCMveeedSDOwGMiLZ78QrwRkYUO3cASBai1XaWx8fX5D2h+adJIOlL1dk7W+N30fQzo+cb22B6ctp9kuHsDmHadc15/x9xzJwS9/oQyKqp6c/mQnfOaVp2kzWHjSr9k0FL0Y0a6sfUtVPbdMsy7ZoJoUn98GStTG3aB4xFV0sgy/p5bOv+cEqKMG2qqmhC3/fzvtidtpK2bxk7XiOytN7bp5ENOV8aKC8rTHERhk03MlbhYO3UbLzOAsm5tP049kXV1ATnEGQUI3B5fRszCMEhYcN4PYPFumaMjXVPckxRXLUtoxRyvzqsL5d+YK8suD6KxqmllMX8C0PQDuPb20hBzSioGKOMvo7IutoD3TldGCWgpRmI/ZhQNr7mCaPYI5Tb+MaC6yxa7eqRBw0wBhXI351QyMNB7wDD2xBdD4Cr5wbxX8IceTAcJn8ePCE0897fH5F9axUrxwv3QzGBfti/A0AAPDRFMIwDdm+KomS6UYaiQwZaWNS8FZQQAnMCCH8/2yi3/Llp5tpam4EHoJ9kPHOCp5rCpO/zl+dP7zLJ8l4g4A2hGEDo54gA3/d2n1d1XQ2g54V9XwHORk5CPoQZvjHHHwDsDIc4i2OIKeB9gRWLdsGMCLgCwXh45SlwWiLOZL8OjNVqzjLVn5NfAD2fgjL2DrcY9Ietq3Gc2Ff4AGaZvZx7FmluPwXQFhAREtmz1VCyCj4UjDeBMBxYs28JfXsehrYCALX1WUDMdfcytDz5DMdHxxCQUrMYibs+EhKYupAOGgHOLNnJsS0o5HqAo7XkYCIKoJ1Ztpa27R0AJDI5gPAlILv5wVhsKyRyzf4CSLiAbasbIvJ3k9yGz76ZR4YowL7h5TPzGyJwDaB0OJ3iGSvo/wDp+h1A9CD8F0CUBrwLqcknOhcGWJ14BPIOz9miH0wJm50u2wg+C1ZROzahvbKyzLO3pshtrx270D+dfODBCuxmLiRJV5bqpmn8MH158fjn69PDw4OqLpVP/m2X1S9Pj4+bzebrb3vk9vTl4a8l/Ql8w5PhZMcyLgAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 20,
            ap: 2400,
            dps: 4235.29,
            speed: 16,
            range: 260,
            rangeType: "範囲",
            kbLevel: 3,
            money: 540,
            freq: 17,
            foreswing: 4,
            backswing: 13,
            tba: 0
          },
          stageStats: {
            actualHp: 20,
            actualAp: 2400,
            actualDps: 4235.29,
            magnification: "100%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1154Data;

