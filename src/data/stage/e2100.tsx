// Stage 2100 Data
import type { StageData } from '../../app/stage/types';

export const e2100Data: StageData = {
  eventId: 2100,
  eventName: "激闘！スイーツ大戦争",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 100,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "甘いものは別腹",
      baseHp: 150000,
      width: 4200,
      enemyLimit: 15,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
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
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "250000",
          amount: "5",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            spawnTime: "1.7s",
            spawnTimeFrames: "50f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 600,
            actualAp: 6000,
            actualDps: 3214.26,
            magnification: "600%",
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 50000,
            actualAp: 2000,
            actualDps: 1875.0,
            magnification: "250%",
            count: "4",
            spawnTime: "1.7s",
            spawnTimeFrames: "50f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "028",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgIDAwMDAwMEBAQEBAQEBAQFBQUGBgYHBwcICAgICAgICAgJCQkJCQkNDQ0ODg4TExMWFhYZGRkfHx8hISElJSUlJSUmJiYnJyc1NTU3Nzc3NzdDQ0NLS0tLS0tNTU1VVVVeXl5lZWVnZ2dvb293d3eAgICJiYmTk5OdnZ2kpKSsrKy1tbW9vb3GxsbQ0NDZ2dnh4eHo6Oju7u709PT6+vr////////wM4yQAAAAQHRSTlMABw4dFSXhc5hK+S4+fVTY6V2GvW3KqWZ3ipWf/bDM6rzI2P//4f/u///s///+/////v///////////////wD/L3PmKQAABiBJREFUWIXtV9l24jgQjVk6YQwEAoFAIAG8YFm7Zcmrxv//V1OmO93Z4Zx5mYepF7zdK9V2VVz9/S/t6n+C/wLByZzp4Oq9OZ2u67rOh+efWmcx67+57w+Xq+0+CA7jSwnC1e+1nO50cYhpovMyF4+XbcFZi+CXE477sI+lSpVKlM3Y+kIfHkS667YX/bsDMzpJ0qwwaZ2g5Vlo/xSncVzRkXPVmT7R1GhTVk3TmDznB/cswfXtCijcoMyDYX99ZDIt6sZWZVmoUtILPBgc2WHe62zTRu12hMnc1nkKLqQmVyIYnve+8yhM/OguSV2TiKdVpZPUGIihVgLddS+IobtTldyPnrImD0VpYG2OEaYUed5kt5t3zjMMD5k18YRam6BESYy4LoqURiFNjIlH3zI47VtneiyakvuqrjBGJC1tmaBIZmWVV00Rz7/2ojMcXZ9+R6RqrEa8zDxeN5UClgISqQitmjwYf87gdMePwfPodN17FLZpCoa1IKXBWNfWZoVVKcqgHA6fpaLjznexMi9p6u8UMNQK8RBFSQXXTZGUpRJl09h01/8AH672TFc2fXyJ0PBgAGSFF3qobK8MI/xEBFT+zbtAdleBzGtYMZ7+duguzMpCR4xzzG1ja8F9lDYnBo2fp2/w/XWstYQ9Z/s/exv5oe97lJuEo6KxVjEiZGPLAj4T4az3Cu8+xhQzTGor/2jA1ZISz/eErFMRgXNNlZWpsBmNFORHvO4p95EQnleS2TJ+Fd5hzLwQCSGFIV7EVF5ZI2xbzuBQdfzzpbulGGJrObzdvtpYdy82vkRaZ1USydBHiEluc05OEYlfJNMZAl5CjRikK/q6xpyVIKHmiHGCTIal0jLyRJZp+BgIxi/4HcEJxB++KMX2TXrnsmayNoJDKWfIsNLm/sbDCqLYWPozDc5gT5A64UUpd2/EprtNayoz2yYOlCzjKRCECJGIQkzZ8g0+J6JUu+GbEh8cCwllnJ8yXzCkqNRMFWWJgEbRlsAZHwhK7QlfqP1bPLQD8qVkhOqWopJRkjABdHU0OTxvnsdt0x4wat8WlBfpezzI6mSDQRCZJ8vMFCUnhmJVNaW/cAej6x7oLeANuFgyXuj94EOLugsQVGUwgoL0IpCVECtCtPYWp2R3lgHG0JsgHKwwn+DBicH8bv208UPOw43PfCJ5rhDy49b/zjzAJG+dEzQ3X0kEkCx8pAVThnHIqTJW+thsnavewxHTFl8LkmfB9EuRGh+xkapMKYpCVpRF6vkmebjq/MbLFr/8Et9ZEGpElfAsF6Hnhf7zLJCHoTt8ilhxKpAT/muZ7T5hJrSmICm1DkPJD8vRYvqwf5r42QmPsyx++EameztGmSa6LaaM5LU2xx+zu8Akm7DVNoVN/i0edIlBr4UEGsCCnGS6MNSbPKe1ilRZJGfxoApH7aOI+YgqpJs0U5XV3sRTtUbQFjqPV2cOKvdZ+B7ikm02G21VllorEdRWUpko4vIs/qo3n002HmFCUIh7CmpQQP2UzEuqDP24mffO4NuGOYY+E2mepSikDGFQlbqAg1ZW6dP5s96ZBqmBtcIwoiTyNhvOQoIEI8F6y87Fr7VhYGA8gV6ORFnqdAPHDBU4RMGq564uOOg7j9KAhGoe0bSyVRaGG2hMhA9TwDoXjBrdJ5HBoSZRAgQN1ADd+Jjgw/iCIeMXAYPZUiGVY5VVBg43gSNy+Lp33ltvxrVOCautICYV2IfzHW8Wl67fzqvgM4wZIBscJYIxipRB33T/BxttIo+e+s6QEOcFzIxMyu3FW+jvmIDEV0Ua7w6xyGpbS5/xC+dtyOJKJEZTnwbrYcedrnaxFGFIjufH5V8G426mlDdZDE57drqDu3ucZ/EF0+pPWwpbMO9++adjnGFcWfr9pPjKgzVV8ezuzZ+czpoX6pKB+aodnGIh9v13AetvqWbr3gVhdK6PRvN99/1zGOaj4/bB7X948wrr9Pru4F4ogZ9H8+vr69GLtdfPnPpIxvsbt9f5fCOd8c3s/vbHXz4W/l+fWNjOGWgzuZ/dTD8Np+OO56Obxez+/vb29sfJJr/sdANP7+9ni5vRfPzZv8h/AFe9mOihrLs0AAAAAElFTkSuQmCC",
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
            actualHp: 600,
            actualAp: 6000,
            actualDps: 3214.26,
            magnification: "600%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "462",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEULVQsCAgENAQ4HBhcCAz0EEAMMCwwOByoEGgUZDRkSExYTDjcCJAACJgIYGBgNHxcaClUfFicRHiYBLwEcHBwCLwECMAEZGDwEMQMtHBAjGjkqGishISEdGkwPLhMXKR0COgEFOgUjIjEhFmUlHkMEPQMJOggnJScgKioCRAEoIU4WNxYrKSwDRgMHRQUCSgEfNR4KRQgqJVgXPRgoMycwLy8vLT8EUgILTgoePS0XRRkzKFsSSwslODozMzM6I3AJVQYyLWY4NTlSMgU0Kn0sQitFOR04MGg5Nk87OzsUWBE1QEw6NXFCPkQSYg8jViVBNYFERERCPHA1VTVLSUtIP4JKWBRXNpdkTBhkQmdRUVFIRZdSRolWVVZHQ7ZZWVhXSp1dXV1ZU6BcY1piX2FqSLh0ZiZlZWVjWqZpaWi2WQFtbW2PbxtxcXFvZ7d1dXV7e3t6cMWCgoKGhoaKioq+hR+KfduRkZGWlpabm5uhoaGrqqrlqC26urrm1GL//odZtnhfAAAAgHRSTlMA/////vL//8b//v9qn/7L///iD/9hRf+F//////+nxzpf////S3j/5ir/t/8aQAjLWP+Z7P//CTKdd/9awP7/HP/////M///+/0bf//8Vc////qP+/7H////////////////j///5/////////////////////////////////3NxlO4AAAdlSURBVFiF3Vf7V9paGiVYg4aSik0LlYCVohE8Wg0NPrBR0vqIkpbQQ9uJpDG9uY2ZNCRNuA1g7fzrc9TeuXdminQ6a80PsxdrhXDY+3ueky+RyP8Ua9v/pcBs7meZ6YWrSzn14icFErGVy8va1OxPKaxHivGp9OW36anF7cc/YX8lkph6NJ2ej6Rjj7KpO8tIc2P9x/lzsWJkfWLqUTabWkzFss+fF25H1u78vro0P1JgJT6NFMZj8Wy2ccLG6+9Pd3J3ppEXV07kdp4uj1JIx+LTuek4Qrb1rs6enJ21p+KRXeoqsZGnb1qbxREK98amHrGP2FqNZWunp2z70yc2vnDpxCWW841fT58+HCGRGEMB1E5OWrXqWefg9HOz1Y7lInM55MT64ky+9evp8dxN/PklAhtLVWvN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",
          traits: ["浮"],
          baseStats: {
            hp: 220000,
            ap: 17000,
            dps: 7083.33,
            speed: 18,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 750,
            freq: 72,
            foreswing: 33,
            backswing: 35,
            tba: 20
          },
          stageStats: {
            actualHp: 220000,
            actualAp: 17000,
            actualDps: 7083.33,
            magnification: "100%",
            count: "1",
            spawnTime: "1.7s",
            spawnTimeFrames: "50f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "良薬は口に甘し",
      baseHp: 250000,
      width: 4800,
      enemyLimit: 30,
      requiredCost: 250,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "200000",
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
          treasureId: "3000",
          treasureName: "キャラクタードロップ(3000)",
          probability: "300000",
          amount: "4",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "1",
          amount: "11",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 560000,
            actualAp: 21000,
            actualDps: 5624.99,
            magnification: "700%",
            count: "1",
            spawnTime: "1.7s",
            spawnTimeFrames: "50f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "463",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEVtl20CAgMEAx8FCQMBDAASBQMEEQECFQEKDg4BFgEGHAMkDAYBIAECIAEYFAoCKAEVHgQBLAEBLAEBLgElGg4FLQQPKQYPLQceIioBOQA5HBAINw0CPwEeKiUsKA0LPwEvKyM7KBMDSQEpKzsCTQExNgsSQxwlQggqOilKLxQaSwUPUwNDOggwOzhVMwM6OTg3NmNDQwtUORcrUQs+PkA+Tg9LQyc1TjBIRj5QThVmQxw7XRBLVBVNRnNoSxheUCZDXTpVVVF6UB9jYRNbYyJnXTlZYGV+WiZ2Zx+PXB5paHl1cEGTZia9TlWgbCuIfD14doh8fGCUfyCqdi2xfC+FgJOYikuWlii5gjKrjzHDhjSSiK6clVPJizOvnDKjnG7OkTifmKuzpEjVljnJpTiko7qxsW7lpDvGsk/doWfLvUzXwB+2sMzmt0zJv3XAvMXdyVDSy3HLzJ7b1XXSydfx3yrp22f650zm1uf173f//hX/9k7866z//nj//8H//PYr8/CoAAAAgHRSTlMA///faP/KmP4xt/8aZP6S2iU/D/5qqdX9Lv+CDNroSv7/Kv8O24Wxwf9fN//f////4v+F/7//wf/8/5Pc/v/+zv7//tn/6/////76///////////////////////////////////////////////9//////b//////////////4ZUJ3cAAAZESURBVFiFpVb5U+JaFs4FQiBAEAyI4EKE7hYbpU2jLKOJhGYNE2gIGMIiIijdIuq4tMuj+dfnolVvXle9wdsz3w+pSlLnu+d8Z7kHw/4Ga8uOv/uMjg9XR57/x96YHYxEo3H+fybQZdV/Jl3dHfPrqyVxsPhb9p7ibkEOiuPvouWV7vEb+Tv2xuK4xpw7d1J0t3vw3hPp9lbI1d8h+NLlvxCpCKazOWJSvVbmrIiG86+ivb/Y1mGWato4/WRx6j/tI4q5tJ6wms32g17cDuP25dMHlqmItk/7NjSC9aurelEs9lgdhpH92+PG7UMCerHhdH5AI/gQJPeSXEwPjyUfbpdxwlGalIzY9sbHbT9aCDDU9X14PKYbXhp1bidm3pxE7Ht+LLaB5gJEZH9aMZFbjzn7s09gxupwZQfDdvZQ7T+uzH2EddA4NnouxpOEGVu/5OHpG8k1RIKdzxsfpgRV487d07hmxKy3CZiCJf4zmr0/9tEfW8OM+YZu5+LuuWvBnLebL8Rf0Ag+w1j34GGbfcJZrpd5B5a/femG1SBaHvh/QJIY7L7+MWGzw24mJ3li473H46EdGEI/rkL3MX8Sqrb8cOkxm42Rhyp19u3ix+Rn0rhEvyPeKunXbO3B5/z6ZSOd7w+rh0Hu5O75j5oTW1pRcgyxNMt+LbjxGi/0wxg7Tezve3tXHqNzYYGcVpe+cNYSKPsMAgf9/gUhODyW9q7ukpraM2P+8zfBttQT2WT57wTzK71vF8+TySExfdHelfcTwb+0EeGWFbmjzmJwsK2LH38cLby8rL4j8rCVMJuFIPV6PUlo6Yoqyx0Zn5EOO7lAkro/hTqozi9SrJArSJKUizNUoKLI8klOP0OGX7FeXZ03SScdFaLV6chcBhLIncAsIX+BtRrBHKac/AJFVlrK1IWWpLej1eV0LsLZwhQUaCxLsqJMPVE7LcaHeEvYSiUbtggyqqxUWD7Dc1ycyxSErWEVcUhi6SoMV1tQ5Q4bfex2R6e1dpb2Vh+iOkSCSMODLVEwcJU5fRTH1//6+SNWeuj3Re/Mkv4PrI0IZmMqsiLt3qfAWPw6aQ4n6WH16xGiC5YGVHEFeiDxN7v4wEU3v/Y/NSYGuoZ4VdpLeRs2J6lyix3d1MaJYi8K7RPJVIpAI5ifqkhDD1pCqDt4rn8f841JNDm+985oiF8QaTgwQw6mscUBr4sujNulPN9u8zjq+uI8/myj5Wn5VSiXy4sLP2LeqEZDqduIabAcp+EYmLYQZwj1ntqAE/nzts/VERBjsDfyIKMolY5E+UJ3T3chjeb86SmlESRUFfNVUyYDu4hxhX3Z86wv7Cs/nYc1uLyC2E8HfcBAhgCIhkI+ly8EnyFfmAIcagzrw2UtE+cCwBCOhkOviIYBoOKIY8XaT9u0NBNncYPBFQqFw2HoCAC0G0fcm+z96jzpjgeF+BbnBpTBQNEUwGk3hboJL37at/j1gAmKR1xOYDmB4xicYWYN1l9B8Cnv6mKqd340KoMtrqJILKhdd5tORHtr6uq6uakdPF7LsRhTE90Blt/tfq8PIogE5Kg5+Ao1TxVjePD+8eaUpm6OcJZ2o3rgkU+7TUMopDEAUH+8GY0H3XFaCzQuF6IIi1u9etKXCLk03l13plwbPPfqos7bHBW1iJVodbNRKhwGePeaTw3atWyhntIke1IWdXv3W5YvvUAD2jf3R/hus5ktendHsBLQrzdMf5nYCrD3V4/iVrRWPhyJ+Kh5LeoR5wEcKaZ+NZfJjEejbCZQvGpe8/S9ePgzgdjOGCkESn23O3t/dMipAl4oMqbko2jaRUyjX29itxJDnBbb2aAkM+1s4DDDtb/zqONEi7MVNdz3umOcWzpRAsXz82JOjpVppM3XRoCA1DmTqH4C0KzUUVmBzZYFuGFo37b3rzm0VLzS6ZxINOiXQCZTUQO0orBCRVBlKMBbSVgDONxM4FYSBwZQ7bs5SsjE1ValclJg5bMtvetNER2UIHc6BYYgVm3pIcMCmsnIJwXpTKAFLipKb88Tv26OZcnpbru0ees1lVMhNxWMSxUa0InaWRKpjuxwyVtbgH0YpUBFbYpgCkaoi7mcwYDaz2seKzldE+e23y3rp5h7t6Kd01utf7kc/w0XP1ku6+uzuQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 13000,
            dps: 2119.57,
            speed: 10,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 500,
            freq: 184,
            foreswing: 57,
            backswing: 46,
            tba: 51
          },
          stageStats: {
            actualHp: 180000,
            actualAp: 13000,
            actualDps: 2119.57,
            magnification: "100%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "100%",
            isBoss: true
          }
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
            actualHp: 300000,
            actualAp: 14400,
            actualDps: 14896.56,
            magnification: "600%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "100%",
            isBoss: false
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
            count: "0",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "1.7-5.0s",
            delayFrames: "50-150f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "禁断のスイーツは甘い",
      baseHp: 350000,
      width: 5500,
      enemyLimit: 5,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
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
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "1500",
          treasureName: "キャラクタードロップ(1500)",
          probability: "450000",
          amount: "1",
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
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "4",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "463",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEVtl20CAgMEAx8FCQMBDAASBQMEEQECFQEKDg4BFgEGHAMkDAYBIAECIAEYFAoCKAEVHgQBLAEBLAEBLgElGg4FLQQPKQYPLQceIioBOQA5HBAINw0CPwEeKiUsKA0LPwEvKyM7KBMDSQEpKzsCTQExNgsSQxwlQggqOilKLxQaSwUPUwNDOggwOzhVMwM6OTg3NmNDQwtUORcrUQs+PkA+Tg9LQyc1TjBIRj5QThVmQxw7XRBLVBVNRnNoSxheUCZDXTpVVVF6UB9jYRNbYyJnXTlZYGV+WiZ2Zx+PXB5paHl1cEGTZia9TlWgbCuIfD14doh8fGCUfyCqdi2xfC+FgJOYikuWlii5gjKrjzHDhjSSiK6clVPJizOvnDKjnG7OkTifmKuzpEjVljnJpTiko7qxsW7lpDvGsk/doWfLvUzXwB+2sMzmt0zJv3XAvMXdyVDSy3HLzJ7b1XXSydfx3yrp22f650zm1uf173f//hX/9k7866z//nj//8H//PYr8/CoAAAAgHRSTlMA///faP/KmP4xt/8aZP6S2iU/D/5qqdX9Lv+CDNroSv7/Kv8O24Wxwf9fN//f////4v+F/7//wf/8/5Pc/v/+zv7//tn/6/////76///////////////////////////////////////////////9//////b//////////////4ZUJ3cAAAZESURBVFiFpVb5U+JaFs4FQiBAEAyI4EKE7hYbpU2jLKOJhGYNE2gIGMIiIijdIuq4tMuj+dfnolVvXle9wdsz3w+pSlLnu+d8Z7kHw/4Ga8uOv/uMjg9XR57/x96YHYxEo3H+fybQZdV/Jl3dHfPrqyVxsPhb9p7ibkEOiuPvouWV7vEb+Tv2xuK4xpw7d1J0t3vw3hPp9lbI1d8h+NLlvxCpCKazOWJSvVbmrIiG86+ivb/Y1mGWato4/WRx6j/tI4q5tJ6wms32g17cDuP25dMHlqmItk/7NjSC9aurelEs9lgdhpH92+PG7UMCerHhdH5AI/gQJPeSXEwPjyUfbpdxwlGalIzY9sbHbT9aCDDU9X14PKYbXhp1bidm3pxE7Ht+LLaB5gJEZH9aMZFbjzn7s09gxupwZQfDdvZQ7T+uzH2EddA4NnouxpOEGVu/5OHpG8k1RIKdzxsfpgRV487d07hmxKy3CZiCJf4zmr0/9tEfW8OM+YZu5+LuuWvBnLebL8Rf0Ag+w1j34GGbfcJZrpd5B5a/femG1SBaHvh/QJIY7L7+MWGzw24mJ3li473H46EdGEI/rkL3MX8Sqrb8cOkxm42Rhyp19u3ix+Rn0rhEvyPeKunXbO3B5/z6ZSOd7w+rh0Hu5O75j5oTW1pRcgyxNMt+LbjxGi/0wxg7Tezve3tXHqNzYYGcVpe+cNYSKPsMAgf9/gUhODyW9q7ukpraM2P+8zfBttQT2WT57wTzK71vF8+TySExfdHelfcTwb+0EeGWFbmjzmJwsK2LH38cLby8rL4j8rCVMJuFIPV6PUlo6Yoqyx0Zn5EOO7lAkro/hTqozi9SrJArSJKUizNUoKLI8klOP0OGX7FeXZ03SScdFaLV6chcBhLIncAsIX+BtRrBHKac/AJFVlrK1IWWpLej1eV0LsLZwhQUaCxLsqJMPVE7LcaHeEvYSiUbtggyqqxUWD7Dc1ycyxSErWEVcUhi6SoMV1tQ5Q4bfex2R6e1dpb2Vh+iOkSCSMODLVEwcJU5fRTH1//6+SNWeuj3Re/Mkv4PrI0IZmMqsiLt3qfAWPw6aQ4n6WH16xGiC5YGVHEFeiDxN7v4wEU3v/Y/NSYGuoZ4VdpLeRs2J6lyix3d1MaJYi8K7RPJVIpAI5ifqkhDD1pCqDt4rn8f841JNDm+985oiF8QaTgwQw6mscUBr4sujNulPN9u8zjq+uI8/myj5Wn5VSiXy4sLP2LeqEZDqduIabAcp+EYmLYQZwj1ntqAE/nzts/VERBjsDfyIKMolY5E+UJ3T3chjeb86SmlESRUFfNVUyYDu4hxhX3Z86wv7Cs/nYc1uLyC2E8HfcBAhgCIhkI+ly8EnyFfmAIcagzrw2UtE+cCwBCOhkOviIYBoOKIY8XaT9u0NBNncYPBFQqFw2HoCAC0G0fcm+z96jzpjgeF+BbnBpTBQNEUwGk3hboJL37at/j1gAmKR1xOYDmB4xicYWYN1l9B8Cnv6mKqd340KoMtrqJILKhdd5tORHtr6uq6uakdPF7LsRhTE90Blt/tfq8PIogE5Kg5+Ao1TxVjePD+8eaUpm6OcJZ2o3rgkU+7TUMopDEAUH+8GY0H3XFaCzQuF6IIi1u9etKXCLk03l13plwbPPfqos7bHBW1iJVodbNRKhwGePeaTw3atWyhntIke1IWdXv3W5YvvUAD2jf3R/hus5ktendHsBLQrzdMf5nYCrD3V4/iVrRWPhyJ+Kh5LeoR5wEcKaZ+NZfJjEejbCZQvGpe8/S9ePgzgdjOGCkESn23O3t/dMipAl4oMqbko2jaRUyjX29itxJDnBbb2aAkM+1s4DDDtb/zqONEi7MVNdz3umOcWzpRAsXz82JOjpVppM3XRoCA1DmTqH4C0KzUUVmBzZYFuGFo37b3rzm0VLzS6ZxINOiXQCZTUQO0orBCRVBlKMBbSVgDONxM4FYSBwZQ7bs5SsjE1ValclJg5bMtvetNER2UIHc6BYYgVm3pIcMCmsnIJwXpTKAFLipKb88Tv26OZcnpbru0ees1lVMhNxWMSxUa0InaWRKpjuxwyVtbgH0YpUBFbYpgCkaoi7mcwYDaz2seKzldE+e23y3rp5h7t6Kd01utf7kc/w0XP1ku6+uzuQAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 13000,
            dps: 2119.57,
            speed: 10,
            range: 360,
            rangeType: "範囲",
            kbLevel: 3,
            money: 500,
            freq: 184,
            foreswing: 57,
            backswing: 46,
            tba: 51
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 26000,
            actualDps: 4239.14,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 80000,
            actualAp: 6246,
            actualDps: 11711.24,
            magnification: "200%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "1.7-3.3s",
            delayFrames: "50-100f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "462",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEULVQsCAgENAQ4HBhcCAz0EEAMMCwwOByoEGgUZDRkSExYTDjcCJAACJgIYGBgNHxcaClUfFicRHiYBLwEcHBwCLwECMAEZGDwEMQMtHBAjGjkqGishISEdGkwPLhMXKR0COgEFOgUjIjEhFmUlHkMEPQMJOggnJScgKioCRAEoIU4WNxYrKSwDRgMHRQUCSgEfNR4KRQgqJVgXPRgoMycwLy8vLT8EUgILTgoePS0XRRkzKFsSSwslODozMzM6I3AJVQYyLWY4NTlSMgU0Kn0sQitFOR04MGg5Nk87OzsUWBE1QEw6NXFCPkQSYg8jViVBNYFERERCPHA1VTVLSUtIP4JKWBRXNpdkTBhkQmdRUVFIRZdSRolWVVZHQ7ZZWVhXSp1dXV1ZU6BcY1piX2FqSLh0ZiZlZWVjWqZpaWi2WQFtbW2PbxtxcXFvZ7d1dXV7e3t6cMWCgoKGhoaKioq+hR+KfduRkZGWlpabm5uhoaGrqqrlqC26urrm1GL//odZtnhfAAAAgHRSTlMA/////vL//8b//v9qn/7L///iD/9hRf+F//////+nxzpf////S3j/5ir/t/8aQAjLWP+Z7P//CTKdd/9awP7/HP/////M///+/0bf//8Vc////qP+/7H////////////////j///5/////////////////////////////////3NxlO4AAAdlSURBVFiF3Vf7V9paGiVYg4aSik0LlYCVohE8Wg0NPrBR0vqIkpbQQ9uJpDG9uY2ZNCRNuA1g7fzrc9TeuXdminQ6a80PsxdrhXDY+3ueky+RyP8Ua9v/pcBs7meZ6YWrSzn14icFErGVy8va1OxPKaxHivGp9OW36anF7cc/YX8lkph6NJ2ej6Rjj7KpO8tIc2P9x/lzsWJkfWLqUTabWkzFss+fF25H1u78vro0P1JgJT6NFMZj8Wy2ccLG6+9Pd3J3ppEXV07kdp4uj1JIx+LTuek4Qrb1rs6enJ21p+KRXeoqsZGnb1qbxREK98amHrGP2FqNZWunp2z70yc2vnDpxCWW841fT58+HCGRGEMB1E5OWrXqWefg9HOz1Y7lInM55MT64ky+9evp8dxN/PklAhtLVWvN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",
          traits: ["浮"],
          baseStats: {
            hp: 220000,
            ap: 17000,
            dps: 7083.33,
            speed: 18,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 750,
            freq: 72,
            foreswing: 33,
            backswing: 35,
            tba: 20
          },
          stageStats: {
            actualHp: 660000,
            actualAp: 51000,
            actualDps: 21249.99,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "053",
          enemyName: "クロサワ監督",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAAABAAEBAQEBAQEBAQEEAgIDAwMEBAQFBAQFBAQFBQUFBQUHBAQGBgYIBQUIBgYHBwcJCQkJCQkJCQkNCAgKCgoKCgonAQEsAQEPDw8eFhYaGhlMBgdZAQEcHBwdHR0hHR0fHx4gICAhICAiIiIjIyMjIyMkJCQkJCQkJCQlJSUlJSUmJiYnJyeUAAAwMDAxMTE2NjY2NjY6OjpJSUlhYWFtbW18fHx3iniDj4OZspq/v7/39/f////eEQSUAAAAQHRSTlMABtCZt9j/N/EeUPoWfFoPwv/nKkFn34qs/u3/Tv4o/x3NvvQN2Z4xWrHr/2d0Q4r//cXV5KYaRLiZ47L+6/8Avt53EQAAA/BJREFUWIXtVmtz4joMzYOEJE5InHcwvkDD2zxqoGW7d9v9///qyg4Q2AHCzP22U33opIl0LB0fSSi//6cp3wDfAN8A3wB/EUBlaqQqNy1aj25/uLbRannjrT+brXvbzRMIo80+VlR/MB24F4kMNmVZLspy1hivgudaXW53+/1241evovVgQ3G/jwsyuVNdbes9JvPemBKCcbcn3kTZuBwvsIkLjJHXmEHCTUwXDPdf+2bx4ivuakzgcIpNMJxGjQA9juEwsH5h4nA6feMEF6+vBREIOHAbAfwJNeVpwsJsRwVeUVAiXyyaSVTsyUIEVYbo8amKR0daG3Jw9OERAtNzMqbIJG0/EQ+m2tmiqgPXAJAEJslzAJBFTirWLhEAYPMsgOrNhxa+BMAiJTJ/hoMjRDsVxBFCjgwIKDIePA2gqBmCWMJIJYsKoIxrh/fD4f0hghsI4pnQNMZE1oJZzeL75+fnx+PmnJWiBtAVOcUTWrN4+Pr6+nwM4G5BBoSZMlzWQGndjYfPX7/+bRgPKy6yPlYAfxijw1k0iJMezKzR4efPg/34VqI9JE8Fi6RiAgylhoVQmmdZvt/l3uPm8ucgaXrBYt0jCMEX6t1PwJfzbMOEG5Y5VMJEYZC3tJbnJK38JXTuH25nk+V6umFCCbSWJBm3XdV3xcG+//Fj8Kj+FxiiCwYdRAXCsTtJ4J6rHnx8TB8REM0piACKp5RIDkQaZDHPRG2QxUhVHw9YNR5yTjlcvtBSxSMhtOwo6nT1tt29TJa9+whqNHvbcXEHDK5BSAFi4ToIG67Xmz0TT5TtV/cQ3GzHoXxInXAogIlKoK0Eo7Bd5JgUiHx1P4HlZAie4kwuqRBiIIyDMX4EgP0xeESBG/WWeSkRgASQMcSKNCQAIFBiNE9IdwJbAlwppZyTaswyLpVpYi3Pm+dTe0+rPmbkNFoZNWV/Ii+z4kYAf87NaxNrpl/04Sm1rF5jCWrC8VW87KwCF7Ix8sZFF7mio6/iKTn/gxq3hNqOnW5RXCLwI56gMZCr+p6gfdtvt9uZbl5tFspP8TBiMlU62bcB7ETvprGjXe5GE7PTssRWgDRbibNuKoeC+weO72hdhC1H7YSneFEKyOlEidXJkafGqWTCj1rd4J+69MgLUuFk2LDjri6B8lMKKIvDMOlYZth2O7mBTNQ5AyR5boFHYASgtGsAws+XYkQ5tkKEDCfXDXCvhe3rTmAi3dM1zfanxrWOyPkXA/I8uArLMLJER2aQZEKWfhQ7iRe0kGm1cg1ZQfBHvHlxKZYo07IsI7BMlCeeHkeK2/H0vBUEmmGkIZglDN02+Q180tQwtCBo5brn/AfXnaqT0JicDAAAAABJRU5ErkJggg==",
          traits: ["黒"],
          baseStats: {
            hp: 200000,
            ap: 18763,
            dps: 1432.29,
            speed: 2,
            range: 700,
            rangeType: "範囲",
            kbLevel: 3,
            money: 1000,
            freq: 393,
            foreswing: 104,
            backswing: 29,
            tba: 145
          },
          stageStats: {
            actualHp: 600000,
            actualAp: 56289,
            actualDps: 4296.87,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            delay: "13.3-26.7s",
            delayFrames: "400-800f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e2100Data;

