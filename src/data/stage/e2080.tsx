// Stage 2080 Data
import type { StageData } from '../../app/stage/types';

export const e2080Data: StageData = {
  eventId: 2080,
  eventName: "ケットバス王国の教え",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 80,
  stages: [
    {
      stageId: 0,
      stageName: "急がばケリ",
      baseHp: 15000,
      width: 4200,
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
          probability: "10",
          amount: "30000",
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
          treasureId: "4500",
          treasureName: "キャラクタードロップ(4500)",
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
            actualHp: 180,
            actualAp: 16,
            actualDps: 10.22,
            magnification: "200%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
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
            actualHp: 400,
            actualAp: 40,
            actualDps: 40.0,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            actualHp: 200,
            actualAp: 2000,
            actualDps: 1071.42,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "011",
          enemyName: "一角くん",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 15000,
            ap: 500,
            dps: 937.5,
            speed: 3,
            range: 40,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 1000,
            actualDps: 1875.0,
            magnification: "200%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "99%",
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
            actualHp: 200,
            actualAp: 2000,
            actualDps: 1071.42,
            magnification: "200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
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
            actualHp: 1800,
            actualAp: 1260,
            actualDps: 268.09,
            magnification: "30%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "花よりケリ",
      baseHp: 50000,
      width: 4500,
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
          probability: "15",
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
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
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
            actualHp: 400,
            actualAp: 4000,
            actualDps: 2142.84,
            magnification: "400%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 50000,
            actualAp: 2400,
            actualDps: 2482.76,
            magnification: "100%",
            count: "1",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "泣きっ面にケリ",
      baseHp: 150000,
      width: 4800,
      enemyLimit: 20,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "20",
          amount: "100000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "3500",
          treasureName: "キャラクタードロップ(3500)",
          probability: "200000",
          amount: "5",
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
            actualHp: 800,
            actualAp: 120,
            actualDps: 97.28,
            magnification: "800%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
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
            actualHp: 1600,
            actualAp: 160,
            actualDps: 160.0,
            magnification: "800%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 640,
            actualAp: 240,
            actualDps: 450.0,
            magnification: "800%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "014",
          enemyName: "ウサ銀",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 500,
            ap: 50,
            dps: 36.59,
            speed: 22,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 180,
            freq: 41,
            foreswing: 12,
            backswing: 4,
            tba: 15
          },
          stageStats: {
            actualHp: 4000,
            actualAp: 400,
            actualDps: 292.72,
            magnification: "800%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
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
            actualHp: 800,
            actualAp: 120,
            actualDps: 97.28,
            magnification: "800%",
            count: "10",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            count: "3",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 560000,
            actualAp: 21000,
            actualDps: 5624.99,
            magnification: "700%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            count: "2",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          }
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
            actualHp: 8,
            actualAp: 3,
            actualDps: 5.62,
            magnification: "10%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 3,
      stageName: "二階からケリ",
      baseHp: 250000,
      width: 5200,
      enemyLimit: 10,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "30",
          amount: "150000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2500",
          treasureName: "キャラクタードロップ(2500)",
          probability: "400000",
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
            actualHp: 15000,
            actualAp: 1800,
            actualDps: 1148.94,
            magnification: "100%",
            count: "2",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "288",
          enemyName: "ジャッキー・ペンZ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 42000,
            ap: 8000,
            dps: 8888.89,
            speed: 9,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 27,
            foreswing: 16,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 42000,
            actualAp: 8000,
            actualDps: 8888.89,
            magnification: "100%",
            count: "1",
            spawnTime: "8.0s",
            spawnTimeFrames: "240f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
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
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 15000,
            actualAp: 1800,
            actualDps: 1148.94,
            magnification: "100%",
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "288",
          enemyName: "ジャッキー・ペンZ",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 42000,
            ap: 8000,
            dps: 8888.89,
            speed: 9,
            range: 150,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 27,
            foreswing: 16,
            backswing: 11,
            tba: 0
          },
          stageStats: {
            actualHp: 42000,
            actualAp: 8000,
            actualDps: 8888.89,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "289",
          enemyName: "ゴリ・ンジュ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQECAAMCAQICAgIDAgQDAgMEAwYFAwYFAwcFAwYFAwYGBQgHBAoIBAoIBQsJBQwPCRQPCxMUCxsXEhwaECMcESYeEycgEyslFTMtHzowHUE0Kzs6Jks+JVNEKVxNMWVPMGlEQEZNP1hYNXVcOHxlPYduQ5RcV2B4SaCETLBwb3GNVL6VWMicXtGmZN2qZ+Wwa+2SkpO2b/a5cf7AwMDU1NPj4+Pz8/P9/f20ZTCQAAAAQHRSTlMAAwcQGSEqqzVFuU7HYT1Wb5PXe4ie5O7/saO7yP/h0/7d0f/s/v/u/eX/8f////////////////7/////////ZITXvQAABadJREFUWIWdV2lD6joQtbQgqCwCVbZKsbRgSEhMsxBQ3///V2/SskipXu7NBwRkTs7MnFl6c/MXx2t4f/Pz81Op3Lg9v+b8g6lbc8G+0Xbbt/eVf7m7+th0Hbffr/s991/sb9zmbbPefLi77fbq3t9ScGs1r1Lzu69vy2WwfHsdtT3nxqlcHYlKc/zQuR+9LTcfH7v33edu8+a3Kl6zdi2A5ydh93Xzsfv477+vzy942b2Pm71J+0oKTn1CcbDegSWcz90HvPl8f3mZXQvgduZCoGS5+/r4+Pp8R+vNF3BYxm9XAjiNMTZbLeL3zXq92yCOlrvPzToiq951yaiNVtJsjYojRFGUcMPR+j1BSPDhVVH0+nOxhaM511pRZrEYTpUw8rV1hX3lfsbNtnCMBhij3hpXBKE6whf2GaFUsOkVDJz2TJxfvv8rGGdX5NGpjsgZAQMn+wMAcuVX/wTg9ebnBLYi/ywpl4bPOn8oTLczY4UIcGosAYmoNIp0G7/aV9pTWrDXmBgtGMYgCoqj7v2v97cnRBeCL2IKSlwHgyAIwnX4UP/l+mrzlapiCkWcRINoHSCKabIMu/c/5sFrDt9E8X5QUJqyOIwSpiARmMb9n6JY7c2wOFyfJ267fzVKCBIiaVKEybi8HJxqf86O19tSlNpY9QphRQx1gUMkWEz4rDyKYP+9AFTKGE/BIcW5jYrkUFVUCir1ovfD/ak5inZrwN4eAfUDhb3VlFs2WgIpMiqLn7VX0phj4CiYU8Z1/g3cDACaEwm6Gl/au00oYJ0efg53cQyHsjRPquFpJmaCGIBNLuwrjQm23qbHIEocwomQ2Gci46ZThKDOxOtFAGrDmFpvzTGJkvM05SBeuU8oOMCTKAgjKtMLBm5vjlmqL5uI5jFSWUiAAYsGg0GwjuJ4WCTQmCJWCgDJiKmlJahi8fo9DAIoied+UQF+DCGXJw2bUz4NjW0z4BEOl7tNCBwG4bxTcKDzgtkxXzn1Yz63MqaAJhKoxWUUJnEQoNXjuQOtCTjAz2qQZZ7nWDhRWTdDCSZcS0b54twFFyScivMAsFge36cRt1nlQlAmIRhkNT5rzHaKXoTvG4CRCaRekThBGKKh0Uu/dTbdnOZcXoT/OwODY6hxnUJHtllZ9L3zfuI+ri7Tx2N2+kCCiIqssiXHr71qoR9Vh8UeanWD0CmpNAgRgj5C0Hzq3190o9qYXxAAo/g0GliAJKcoDrudlnfZDluTtARAJlifADA0Ak6T8lbWmJ7uss1vr0EWHXFpCAGxQpj8AQBCrZTJe2gmwAMDi2UUx9PSgfANQHKrSE4Y5FWj44QXsSVjFJ3VywZC/RADaEi2CaYpRYiqM4A8zGJWultUh+wbgayoFI0Qt/rLIWQuCqPm7bIFy/XxvvIsA85sV9NpEoZ832KNSnIAveiUAVR6C330AfpYXhcijkSaV6jRSe6NWT2WzTSncdpn9qvIXgdS5mAGZJm9IaPSoVgdU3MhZg6RB0ZZlRuS5BzZuHS7AR9U0R5spN2pWFaoh9rkk9I8Oq0pK1IAAGWnWz4n+L4wxKx8M3DtUlVAoBF8Jfd9SkR8n8dm+WpRGy2Oa0GOpFDwrSHsZW30T5u2U/ePm4GxnUPhMMCnKaUTlCsCl+bRIlR70xWlMIsZTLitRLBNRSe3DMnyaAzxf3z6dBv94UsIfZNKlaIgpiRKDm3RGAohtRU6/+VhAUi8EDCm2E7QVJLo0JNMpiq7o6yGvzy9wny03V1gRBiOU4JZvq5ZQ2RVpdhi2PqBgFNxvVo/tjS1lX8aUa63h/UMhjoMJBK9+PdVz/Nc9wLFqTX7/sNzSCgjiKRK0jBiUtkdTUuaDAYRgkVz8NR9uLu79R87jWIqAKDXf7zrPj09PcOZz/PXxWK1Wsyfn7rwj+4DPP7e3vr+Y793AvgfAazHMsT4lUMAAAAASUVORK5CYII=",
          traits: ["ゾ"],
          baseStats: {
            hp: 50000,
            ap: 3789,
            dps: 7104.38,
            speed: 15,
            range: 165,
            rangeType: "範囲",
            kbLevel: 2,
            money: 500,
            freq: 16,
            foreswing: 8,
            backswing: 8,
            tba: 0
          },
          stageStats: {
            actualHp: 50000,
            actualAp: 3789,
            actualDps: 7104.38,
            magnification: "100%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-36.7s",
            delayFrames: "900-1,100f",
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
            actualHp: 480000,
            actualAp: 18000,
            actualDps: 4821.42,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "33.3-33.3s",
            delayFrames: "1,000-1,000f",
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
            actualHp: 18000,
            actualAp: 12600,
            actualDps: 2680.86,
            magnification: "300%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 4,
      stageName: "笑う門にはケリきたる",
      baseHp: 380000,
      width: 4000,
      enemyLimit: 30,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "30",
          amount: "300000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "4500",
          treasureName: "キャラクタードロップ(4500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "2000",
          treasureName: "キャラクタードロップ(2000)",
          probability: "1500000",
          amount: "11",
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
            actualHp: 1000,
            actualAp: 10000,
            actualDps: 5357.1,
            magnification: "1000%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 250000,
            actualAp: 12000,
            actualDps: 12413.8,
            magnification: "500%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "93.3-93.3s",
            delayFrames: "2,800-2,800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 400000,
            actualAp: 15000,
            actualDps: 4017.85,
            magnification: "500%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "60.0-60.0s",
            delayFrames: "1,800-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 160000,
            actualAp: 14400,
            actualDps: 6352.8,
            magnification: "8000%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
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
            actualHp: 36000,
            actualAp: 25200,
            actualDps: 5361.72,
            magnification: "600%",
            count: "1",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e2080Data;

