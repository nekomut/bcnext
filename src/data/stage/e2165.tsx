// Stage 2165 Data
import type { StageData } from '../../app/stage/types';

export const e2165Data: StageData = {
  eventId: 2165,
  eventName: "伝説の呪泉郷",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 165,
  specialRule: null,
  crownData: {
    crownCount: 4,
    magnifications: [100, 150, 200, 300],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "人気の修行場",
      baseHp: 2500,
      width: 3800,
      enemyLimit: 7,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "10000",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "8000",
          treasureName: "キャラクタードロップ(8000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
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
            count: "4",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
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
            count: "3",
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
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "99%",
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
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.7-1.0s",
            delayFrames: "20-30f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "545",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 160000,
            ap: 3150,
            dps: 605.77,
            speed: 18,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 156,
            foreswing: 31,
            backswing: 24,
            tba: 57
          },
          stageStats: {
            actualHp: 3200,
            actualAp: 63,
            actualDps: 12.12,
            magnification: "2%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1050, 1050, 1050],
                timings: [31, 38, 43]
            },
            "omni-strike": {
                standing_range: 450,
                omni_range: [-450, 450]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "mini-wave": {
                chance: 100,
                level: 4
            }
          }
        },
        {
          enemyId: "546",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAACAAEBAQEDAgEDAgIDAwMDAwMDAwMDAwIEAwQEBAQGBQQHBwcLCwsODAkODg8IEBgPDw8NEBMUFBUUFBMVFhccGhcbGxsdHR4THy8hISIhIR8iIyAkJSQlJiccKD8rKCMqLCgwMTExMSsrOhowNzw2Nzs3OTs2Ozk3PD03QyI4Qkk8SFNJRz4+WQVHTVdNTUdOTFhbUT1PWE5gXGZWcwtcYl1WcS5ma1xwcG5hgT50dXt4eXtvlhl6i1l1lTqBhX6AkWl6nEyFpQ6LjoGHm22MojyMnHuVlZOQl52SqEiYsCiQo4ismHmcnZyUq2egqISioqGmqKyhsY+0qYytsLaxuqO4uryuv9C+wKbAwr3Qw6G9x9LHyq7HysHTz6XB0NzOzczT1cLI1uLU1dLc2a3P2+fp27Tc3tLn5qvh49fa5e7n5uXu7bDf6fXq6+3i7v3y8NDs7/Hw8vX89sH19ff69uH//8b5+fn5/f7//uz////////a1N70AAAAgHRSTlMACxQftyrvyEBb/5lNbdmCk/8z/wCivP/R5v9Y/zz+3v9t/4//6f+4/lp4i//////////+b8f/mf/////+/7/9/////v//////////6P/////////+//////////////////////////////////////////////////////8A/5aoKcwAAAPySURBVFiFndfrU9pKFABwwaIYH4hBUaQ0YJqLiohSX4ByMVpQaq8pDwWDIhIRU0CpxNSEe/71LtTeT86dOdlZhmEm85uz5+yeLAP/vjUGXodlcnZu1mZ6/fX2o/8DOCZZjnExzJzFIGBjuUCUT/Jh57ghwMQEGTYc3QyznGvKCGANhBjW6fQ4XRwzaQQYD4dctN1Oe+wMM2IEGA2x9pAgcNEsO20oBzOeMMfrunAOUUNVcMy5oqFk/fyyfBU0GwEsHpa1x57un7sxylAZJ8kmormz+7u0xzPrwANmUjyXPXB2KrgojjGjAccMR1F+zlkHLW6nhtAROGwe+2a2FaLS1azSSoatWIBksACguKhYqQaQB8GMBGapGKhQpMgXQGs33/HiAJufSgOUSjECZBKJz9vyHhL4YL8CuK52uSTIUvko0eZNyCrY+FQGitFIQ1UfIbVTLCwgAWuiUL7OxXPpdFHIivF0m0cCYzlo5RokgeLPLpmkFHs4YLBXhd6oNbqSBFKnI0+hAEsOQBUVAkg/ZQlkpVz4hAJGmhrIEUWH1vXTfaXbkqG8jALGmpnC8TVZQqf08FB+epLVQxsKMAnS2tpBpgYd8fmh/PCcjUTGUcDAAhTWopvFzq34/J3MdI0fxAGmeF6AH4+PV+LLvfhSedQXsB1pcDReuqrXc5WXSrl7l/Tiu/Jg7vyc30ncfc9kKjGLgba+dKNAtChVRUGoZk0GgD2h1NougA5KGxQjEXzZ2Tn8vH2Q6KgqKFN4wMy7cvJ+qtbQyHbS5vHA+xjVhEgJyBrIZ96BBhbXqZouqW2lfygNRLAcoMlZ0NVmPwQDEWys9wDQO+REphoGItjbpKvwOwO1SBUfgYkPumu91bcTx/tf98fQ78apNNMHdEUs5Y++4SNYzNG+fgRkNCK1RXQOPqUpf+MVaIstfBKXV+hgG/4M1YoG/mLpVe0/oI0HNlbcwQP5D9BCA+Y1zrceKRgHrCsMGzg6+uc1CDzgzXp8wZOTfL6fSL09NeBwoICtHy73zm7+dQU6vHcggS91pzsqNnpHgUxNx24kS/2Kpnv3I1A6RBBTS0jAq59TdLwHNJuaBvlDLLAFFxTF9wGltHv899cFJJDUlcBvoN7sSNK3k2UcYCmqerYH6Fr9luSgkNpCXvN0aOtcvNcN6rdkJ8gNJGDdu6jDTalXwWaz31WRALkjzS8tZ9saaDcXF+TNdu3Fd2Vyx7isxL0bl5enM2OG/nQNfjw7nRmYS5xFh6bHzPgITDNBt2/W5vS5faurQf+0AwOMDw9RFLO+uu6yewJ+vz8QWGUnMJeskdF3wxMTHz7ODfXHxMTwu9HRkTcf/QVPEGN1Z1g6rAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 135000,
            ap: 3000,
            dps: 439.02,
            speed: 14,
            range: 650,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 205,
            foreswing: 48,
            backswing: 56,
            tba: 79
          },
          stageStats: {
            actualHp: 2700,
            actualAp: 60,
            actualDps: 8.78,
            magnification: "2%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 900]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        }]
    },
    {
      stageId: 1,
      stageName: "百以上の泉",
      baseHp: 25000,
      width: 4800,
      enemyLimit: 7,
      requiredCost: 100,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "30000",
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
          treasureId: "5500",
          treasureName: "キャラクタードロップ(5500)",
          probability: "75000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "45000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "544",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQEBAQACAQECAgQDAgECAgcDAgICAwUEAwIDBAYBAR0FBQcGBQYGBgYGBwsHBwkKChMQCBYLDhkPEBEXDwYXEAQQEhUTDygPFRwPFCoTFRodFAcZGRUSFjUgGwgYHiYmHQkgHxUZG0AqHggpIQUXIUcoIxoZIUgYJD8jJiYeKTYsKRopLSs3LhE5MBQtMjM0MCsvNTQ6NhskMGkrOEU/OA80OzhMPQ8xQE5AQClPPhRLRgE7REpORhpHSSxNRkFaSxJGTFRRTyVcUTB6SwFmVBJwXBF0XA1jYCh9YxVmZWduaGOGaxaGbFWMdxuRdhqXgw2Sgz2PfmalhROciiWMhYWfiVuMjoexkRnQkwKlk3u2nCW+pyC0nnifnsDLrSW4po3PtSXJsXvUui6ussXYvyfdxCnJu57lySvhv5PHwsrl0TLvzyfp1TPt2DPdzpjz3TP74C7w1rDk3dP/8Djc4e724br15Nbt7v7+8Mr//ub///9oDAwjAAAAgHRSTlMA0efxEwhL/z3dIjOAWv/GaJV2qrv/htZ5XfL//s2pmP7/bP7J4P/4gM5e6f7+/////77/bv/////P//z//98A////n////57////d//+g////4f///////tX/////////////////////////////////////////////////ADVx0psAAARRSURBVFiFnddrW9pIFADg6CaAXEVBUSiCKNouuWCadDca1yBgQRAqCGyXFVhEBaOBCDZqTf96B6SWbT80k5MP8OTJvDkzJzOZIF9+CGQibAuvX8+Z0MlTP17+5aczExe/CnvD4WDwd4tOwB+0e72AeBex6ALmgnYKAJF3IAmzHsBlL1RACm5whG06AGwmK5J2bxAc3uCsDsDirsQTHEghENLXBWwtl7sm3W43Ewov6hpEU+L0MXdeSpS8Ll1VeFNNl9RH9UE9+p4/DIAdioees6Hwv/YQGZgt6NvbxtURhugDUPPR3w31rrG59AbTA6xWi+fqp9Or2+vHz4eb8ABaU/qdyuXn+/vL+9tB2woNrHZluX5y86lROssVlV4agwUOFHFQvbyvlz883ZXqndomLHCs9Nqtxsdu7eHp6fFEqh9jkMChJPXE92Ulf6qqlxWlWjDBAWi2J7eqqXrtn1P1ptCVaykLJCAo7Ww2nb5RHz9UZPmimoUEkK1+tSn3izfqf6luvyWW0wagegzagU1Rkjty+2TYXhTFYvHgL2SrcbavGTA0B1JHUvJRedBtXwyydeng7endw51B85NYVOR+t5CtFuKkO15Lvb9WS+d36pVZ81zY7XSq29FsPmA0BuIb+X+v1MaD2jBpn0ymlRXrRjVf7reanW5293B3f/9gFYWZzgjiKTdr5X6vJ7VbK/DTGQxDuVYQa7IkXjTlYz3AiiKQg6YkX7Tr7QoKD2D5rtvellq9i2ZNLuh4MxlaBbu9MGj2RLHVS1rhgdlqNIgHpE5TBPMq5IIHVtM+grPnBzWprRS9OOx6gCBLUR9FEz6x15JEEqcg1wMQZiPOMEyQVQZK3s7Rc/BlXKZpmuHs7KDtIxhmHhowBaghsO4k2RAHfuGrgI8y8Jt9QY6huRAKCzjpIUAvIMs4BaCQBRZ4xTCgHW5C5nEKjCZlgwTQAEicHnZ9zgcA+qUMWgELDgCGcQ5HE4zG6B8UYAPAqAegnpQOAANDQNHcaHPlD4H23DoGBaABKkTQoAbDeuAMRdEBC1wGJMlGycBoBngCBE6yGygUYIgnOTK69txmbTu6LWzDdcHBZQhO8Dy3WUklwzHeAANgvogQjzHjh8dBxQSBWIABzGSG3+Yi45suEnSKjflhABMbI+jMt8o5qSwXyWzBAFaWoCP8eAgQc5yPMNyfEAC6zCcJXhj3AEHWk3wkAwPYiEhMSLLfNsloiIul+PE3gyZgFs8kBf7lIwFdppNChrVoB5aEDEEkX9ZRZD4ZC8biEBl4ogGBX/++O12KkjwbNWkGsEU2F2Mn9sfIIkXy4zVJUwbTmauPyxMfvGafO3Z9vTWndYNhInYiidCoBxgIADiMeCaX2CH8WjZZmMW1A4KemZqZmX6OqcXQHztMAsSe89eA0+hm9vb2KONk4BSO42BZoR2/BlCTzer0uxxT4P6/Pcf09MyUwzXvtNos2E/AV5vQAkPpYS4rAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 4500,
            dps: 888.16,
            speed: 17,
            range: 380,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 152,
            foreswing: 57,
            backswing: 48,
            tba: 48
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 450,
            actualDps: 88.82,
            magnification: "10%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "knockback": {
                chance: 100
            }
          }
        },
        {
          enemyId: "008",
          enemyName: "ゴマさま",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAAABAAABAAACAAEBAQACAQAEAQAFAQAFAQAEAgAFAgAFAgAIAwAKAgELBAAMBAEMBQAQBQAQBQAQBgEYCAAaCQAdCQAdCQAhCwAkDAAmDAAmDAAqDgAsDwAvEAAwEAA6FAA/FQBKGQBMGQFTHABaHgBlIQBmIgBxJgB2KAB9KQCAKwCHLQCOMACQMQCdNQChNgCqOQCvOwC5PgDFQgDORgDcSgHqTgD0UgH7UwH/VAD///+8RyLaAAAAQHRSTlMABQyOFBzbJcuo5y088kL8WjNJclJiabqG/nvv15Kiv8n/S629/9bO/+Hr///u1//o//b/+f/n/v/+//////8ArhsITgAAA0tJREFUWIXtVduSqkgQFA6IjnccHXXH26IIA5yeBvr0nf3/v9oGcQYjRJnYl32wfJAgyOyq7KrK1j//MVpPgifBk+BJ8CT4PxE0Ds3oTWzbnpi61hxUgVsz5/T78/PD3a7H1s8pzNkhwlxIKThJP7av+g+P728iJrIyJPLe58bP8NuY5chMSPUngqXnr8wfEPTe4vPxLARc8WBIWLTpNy5DX3xwec59ucdSksCjGUvd9bAhhblFBT4TDCIueLA80iwjMH6fNmOw/S8BpWISFHmA8STk2O03wWuLWMjs6wrUjwd5qGLiaZOGMBycVUIIgULGKFOsaN2kBvPAKniJAAxImRHeNCHonbioMDAAaYmX6aIJwdCv4pWOX4LIeNZAA20WXRFU1OC+/Rhuzbbg+8zrYCfrAVyfrA6Rl9TgM+rcHSnNtNduTElAa/AZvnuLxqvjp1xKBGskuE+g9dafpBghXovPSH0Jmn1Imczq1DuHYP6wTrzxCQZAPCBQfVBTgz52cbBHgiXoPgM7TW7m/+oSkSCOvX3tDZZFRLNbBJMdzsunx2W+wO7XcGue9Xz+Zb4Akwf4LEtXNwiGLuMoz0HUX2CZQEmgGUbFrYxNKuARCwLZA3yuwVwBzanjbBav1vlG9LlawRgLetyThwTcV0vRWESU4vRjtxhbumZOfVoogI/1LfwV5KDsZeIWpsOpsrzFylFsAIm8zS6bNF+jtwuQcb6RrC1AhIqcg6SpMlBwTK47kJGajmTFWtfs9yBUO/ryVjImrr4XsKadOOgWw9RT18ZYXcvJjIasfMquVBGJtys62dpBAOtb5jsBQaunSOyh2OlrLW248xIqBGcYYapWwLX4uYvIEgFEFR8kgqPTvGUdYi4Yiny38+YcfLUGqucoCyxdRJLwW6iMIy/PWpKT8g1MYn8zH/YtwzCHi1MEMb98yQEo8pZqtEMkyu6WHAXLZZDgP39+r1v6zHFWfePSy7rdGS09gChjnHNlQ0hFksAQEq5sUb0iKAmWozzeV39PjGIUqiM16bYHg9Fov98fPS8AEITKiQGE6iEMA++4P4NHg0G7O7xlTJrZH09/dd86nXa7/fLy1yUGg8FLHuptp/PW/TUd980c/y9E/boEOtJjwQAAAABJRU5ErkJggg==",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 150,
            dps: 195.65,
            speed: 10,
            range: 170,
            rangeType: "範囲",
            kbLevel: 1,
            money: 650,
            freq: 23,
            foreswing: 8,
            backswing: 10,
            tba: 8
          },
          stageStats: {
            actualHp: 2500,
            actualAp: 150,
            actualDps: 195.65,
            magnification: "100%",
            count: "4",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "542",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEBAQEBAQEBAQEBAQEBAQEBAQABAgIBAgQCAgMCAgIBAwYBARECAwQCAwQDBAUDBgkBBwwDBwoBCREBChIbAAEUBAMFDA0CDRYGDREHDhUGDxUGERUODg8CEh0IEBctAgExAAAXDAoCEiQEEx0aDAQQEA8SERAhCgkDFiQkCwkGFiMJFR8OFBYKFSEDGSgSFRoUFRRGAAECHSItDAkSGSErEA8MHiAuEQ81DgwbGxMFIDYRHSkbGxseHBgzExENITEPIiY3ExEQIycdHyEfIR87FhIRJTVKEA0VJykMKkFKFBAcJy5DGRYBMz8ILksgKiIjJylPFhEVMDYzJR9XFhI1Jx0sLC1QHRp1Dwc/JiUGPVAYOD4TOkZhGxZiGxYcOUAjNUYuNDAyMzUdPURFLipYKBiEFQ5wHxgSRFggQUdoJB8dQ0k4OjA5PDhLOCApRUUgSVFyKCJ6JR5xKiUiSlJKPS9GPT6EJB5FQDeYHRMwSkUaUVw7REomTVZASDN8LiObIB4pUFiOKSEaWmUnVl+BNCOLLyhTSTqSLiWrJBqhKCApWmRRTEJ4QSOdLycuXWchZHBUU0iXNi5mUSWHQCowYmy5Kx6lNCueOTEyZnFMXF+ISCloVkCjOzMdcX8zaHKsOC80aXRtVj++MiY1a3ZcXFuYRy82bHmyPDQ3bnqlRDOwQDg4cXunSDUifIu2QTk5dIC/PzjlMiKVVEe7RTvOPzTaOi48e4fBRjy3TTrJRD1rbmLERz7HSD5xbmI/gY7JSj+9UELgQTTNSkCBb1PPTEJxeXLVT0TfUEWDenGpdybpUES2ZmDkVEmSfGLsU0eIgW6ydXD2WU6UinWLi4uai2iuhlzBg3ukm5qqnoCxnYPMmWS/nXW+o4mvsLK5sJ/UrYHHs5HHvaLjv5H3y5nW1NLa17r/15Pf3+D347js6OX06c7978r59NH/98n//dX//+7///////2alpQYAAABAHRSTlMABw0UQIm2w9Dh6fGsGyQpUf8vRjfZYpX/bn2ghD+MV2+jtZN+mui2oNyrwAWjAP/Kc2Xw/8+x8eB6/v//SP+kuf+Y9TP/7v//Mmuv/+bCwf+xAP//8//k/0////vy7/+v/+n/zP//////8P/z///y/2b9////5dn//wD///P//+z/sv//hP//////////////////vP/////9/////6v9///////+/9z/////////zf///v///////////////////////////7D///3///////7//////v///////9P//+T//////+r////+6f///////////////////////wD/+mpClgAABNtJREFUWIWd1n9YE2UcAPDXDUKXG3ODGb/UFJOnp4ZaWqJJaMoJS6cYEVaEWCkiLjMZYsyJWhFNCRDICbls1bytDs/BHhk1YtIdLo9zM5raVPwFoWb+KHG07tDnkad6eu7u+9w/d8+9n/f7/vi+zwv++meAoREzbfKjMuGQD//+/f+AcXMVkEKhSB7NEUhMU0BJUJJCAcVyAmIUEB3pyyBF+lguwEQoAUpIgmZSSPIkLsCkhPiHEpRU+yQoOZYLEKVUFhbmJMTnz4IUMVyA4LOd/jOFSsVXyuRkEStgmHQsnwY6egPn+26dOZ4TP4bdKoxblv7IU9MmzxRU+v13+v88HRzKch/EQOHSkKcToniiDv/t2/5t8sGmQhHzOYgQ0//KwcM7TlzvTbnXd+XFLWHsJlG8ueyjH8/Oflwi4dM5VF7zX03hMwZECytwn3Prx0XrCMJUJpMDUeeJHv+FbQwBuWTdSTeJkVhj2QHS7fWVBQFe543uy6eZAqHFPrepmcAIvJ1SnA53AfXt6+47P0iZAcLNPgJzNBEYhuMOAnc56ok5AAT13E5hOIkrfKTL2XzQTWDOwwcaHaRztaeez68buCpiBqR6MSdONmmcbhfW/Mlep7uq2N2V+sWVwClmyzjH7TnYTHqrsream11YC0Y46is8u87f7BmoZATISG+Txuxtyd5tNlOJOBw45ljvfP18oOdSwwImQIEPJ4sPti+MNHvdhMvV2Ih7TOt3bD8X+OP4sbceYwJ427/ftXQ8ALkeN0Ee/nKvy7difJW59WYgUAfkDIAVrdU//7KYKupXW5w4ZiqucJCp4EWy1XSuYcHGjQyAKW/3BQK/DgNgukajyZ735NL1855bIspt2T47iFk18msDv/f2TQW83NWaiqqq3eZ9xS8tAcJnpzMu57pAz40rMeC172btpvYy9XgL2B0oko6L/oG6Lf6+/OzWFsKF4d56HrsT6ZnoUwO/9fdfro2vJjEXhnk+F7IDAOBfCPSfvVSb+cbRFieBeepD2QJA2Huru+hNOFPTZXLgJ4tlrAEgmrJch9j2ZFZ3NbUfLUlkDwAwcqcdtu3P+uakZ9+ed3kcgOAaG2y07V/z2bclhwxiDsAYgxWGYftOZcke1J7IAZgwCFh17x9CjG0bOAATjTRg05XaqTxqgtgDcUaUBkpLbTCMoLEcgMEh3AXQtkUchqAfBLRaOw1sYA9MKKeGgNrVKju9GDo+ayC61GKB4ba8uXYKspeHsQYi1EYERo4sHq21IUarQcYaEKusFovRMCMM0hoR1BbLGpCq7Ki1fGXUIu1KPYrAEeyHoLPBiEE9V602WA3lWULWQGQ5vQEMK9V6G4pqg9kvYzRVjbAFzaISMbbl8TgAdAYwkqVHYcQ+AXAAdHQtwCojlUBpKAcgUotY7gKoPQ5wAGSqwXJUGeAjeayPdTokWXQ5WtTwEf39Q5nVRfP5GhQ1wllW/f2rNjsgTovUWMqVLwzpnx0gXfXOqppV83mAK8B/+cPC9zIiAWcguuinT/M3xXAHpuZnzEzbNIM7AGS1vde6U+XcgWHLbwWuK8OFck4APzRUPCrnWENaxitiiUTErhplglF3I2NN/gdJynsvISLGgDTqgZDh4SMEgifWrp3/oEAgGBE+PGRksPC/gL8BJL2ZbewbQ/8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 9000,
            dps: 1788.08,
            speed: 18,
            range: 300,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 151,
            foreswing: 24,
            backswing: 31,
            tba: 46
          },
          stageStats: {
            actualHp: 12000,
            actualAp: 900,
            actualDps: 178.81,
            magnification: "10%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [3000, 3000, 3000],
                timings: [24, 42, 60]
            },
            "omni-strike": {
                standing_range: 400,
                omni_range: [-600, 400]
            }
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.7-1.0s",
            delayFrames: "20-30f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "2",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "0.7-1.0s",
            delayFrames: "20-30f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 500,
            actualAp: 50,
            actualDps: 36.59,
            magnification: "100%",
            count: "2",
            spawnTime: "106.7s",
            spawnTimeFrames: "3,200f",
            delay: "0.7-1.0s",
            delayFrames: "20-30f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "溺れる者多数",
      baseHp: 45000,
      width: 5800,
      enemyLimit: 8,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "50000",
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
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "100000",
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
            actualHp: 3000,
            actualAp: 1000,
            actualDps: 1666.67,
            magnification: "20%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "33.3-36.7s",
            delayFrames: "1,000-1,100f",
            baseHpRatio: "100%",
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
          enemyId: "287",
          enemyName: "トンシー",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 48000,
            ap: 3600,
            dps: 2037.74,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 300,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 9600,
            actualAp: 720,
            actualDps: 407.55,
            magnification: "20%",
            count: "1",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "burrow": {
                times: 1,
                distance: 750
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "289",
          enemyName: "ゴリ・ンジュ",
          icon: "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",
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
            actualHp: 10000,
            actualAp: 757,
            actualDps: 1420.88,
            magnification: "20%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "60.0-66.7s",
            delayFrames: "1,800-2,000f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "burrow": {
                times: 1,
                distance: 625
            },
            "revive": {
                times: 1,
                duration_f: 360,
                duration_s: 12.0,
                hp_ratio: 100
            }
          }
        },
        {
          enemyId: "287",
          enemyName: "トンシー",
          icon: "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",
          traits: ["ゾ"],
          baseStats: {
            hp: 48000,
            ap: 3600,
            dps: 2037.74,
            speed: 8,
            range: 160,
            rangeType: "範囲",
            kbLevel: 2,
            money: 300,
            freq: 53,
            foreswing: 14,
            backswing: 8,
            tba: 20
          },
          stageStats: {
            actualHp: 9600,
            actualAp: 720,
            actualDps: 407.55,
            magnification: "20%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "73.3-80.0s",
            delayFrames: "2,200-2,400f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 30
            },
            "burrow": {
                times: 1,
                distance: 750
            },
            "revive": {
                times: 1,
                duration_f: 480,
                duration_s: 16.0,
                hp_ratio: 100
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
            actualHp: 3000,
            actualAp: 1000,
            actualDps: 1666.67,
            magnification: "20%",
            count: "2",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
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
          enemyId: "542",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEBAQEBAQEBAQEBAQEBAQEBAQABAgIBAgQCAgMCAgIBAwYBARECAwQCAwQDBAUDBgkBBwwDBwoBCREBChIbAAEUBAMFDA0CDRYGDREHDhUGDxUGERUODg8CEh0IEBctAgExAAAXDAoCEiQEEx0aDAQQEA8SERAhCgkDFiQkCwkGFiMJFR8OFBYKFSEDGSgSFRoUFRRGAAECHSItDAkSGSErEA8MHiAuEQ81DgwbGxMFIDYRHSkbGxseHBgzExENITEPIiY3ExEQIycdHyEfIR87FhIRJTVKEA0VJykMKkFKFBAcJy5DGRYBMz8ILksgKiIjJylPFhEVMDYzJR9XFhI1Jx0sLC1QHRp1Dwc/JiUGPVAYOD4TOkZhGxZiGxYcOUAjNUYuNDAyMzUdPURFLipYKBiEFQ5wHxgSRFggQUdoJB8dQ0k4OjA5PDhLOCApRUUgSVFyKCJ6JR5xKiUiSlJKPS9GPT6EJB5FQDeYHRMwSkUaUVw7REomTVZASDN8LiObIB4pUFiOKSEaWmUnVl+BNCOLLyhTSTqSLiWrJBqhKCApWmRRTEJ4QSOdLycuXWchZHBUU0iXNi5mUSWHQCowYmy5Kx6lNCueOTEyZnFMXF+ISCloVkCjOzMdcX8zaHKsOC80aXRtVj++MiY1a3ZcXFuYRy82bHmyPDQ3bnqlRDOwQDg4cXunSDUifIu2QTk5dIC/PzjlMiKVVEe7RTvOPzTaOi48e4fBRjy3TTrJRD1rbmLERz7HSD5xbmI/gY7JSj+9UELgQTTNSkCBb1PPTEJxeXLVT0TfUEWDenGpdybpUES2ZmDkVEmSfGLsU0eIgW6ydXD2WU6UinWLi4uai2iuhlzBg3ukm5qqnoCxnYPMmWS/nXW+o4mvsLK5sJ/UrYHHs5HHvaLjv5H3y5nW1NLa17r/15Pf3+D347js6OX06c7978r59NH/98n//dX//+7///////2alpQYAAABAHRSTlMABw0UQIm2w9Dh6fGsGyQpUf8vRjfZYpX/bn2ghD+MV2+jtZN+mui2oNyrwAWjAP/Kc2Xw/8+x8eB6/v//SP+kuf+Y9TP/7v//Mmuv/+bCwf+xAP//8//k/0////vy7/+v/+n/zP//////8P/z///y/2b9////5dn//wD///P//+z/sv//hP//////////////////vP/////9/////6v9///////+/9z/////////zf///v///////////////////////////7D///3///////7//////v///////9P//+T//////+r////+6f///////////////////////wD/+mpClgAABNtJREFUWIWd1n9YE2UcAPDXDUKXG3ODGb/UFJOnp4ZaWqJJaMoJS6cYEVaEWCkiLjMZYsyJWhFNCRDICbls1bytDs/BHhk1YtIdLo9zM5raVPwFoWb+KHG07tDnkad6eu7u+9w/d8+9n/f7/vi+zwv++meAoREzbfKjMuGQD//+/f+AcXMVkEKhSB7NEUhMU0BJUJJCAcVyAmIUEB3pyyBF+lguwEQoAUpIgmZSSPIkLsCkhPiHEpRU+yQoOZYLEKVUFhbmJMTnz4IUMVyA4LOd/jOFSsVXyuRkEStgmHQsnwY6egPn+26dOZ4TP4bdKoxblv7IU9MmzxRU+v13+v88HRzKch/EQOHSkKcToniiDv/t2/5t8sGmQhHzOYgQ0//KwcM7TlzvTbnXd+XFLWHsJlG8ueyjH8/Oflwi4dM5VF7zX03hMwZECytwn3Prx0XrCMJUJpMDUeeJHv+FbQwBuWTdSTeJkVhj2QHS7fWVBQFe543uy6eZAqHFPrepmcAIvJ1SnA53AfXt6+47P0iZAcLNPgJzNBEYhuMOAnc56ok5AAT13E5hOIkrfKTL2XzQTWDOwwcaHaRztaeez68buCpiBqR6MSdONmmcbhfW/Mlep7uq2N2V+sWVwClmyzjH7TnYTHqrsream11YC0Y46is8u87f7BmoZATISG+Txuxtyd5tNlOJOBw45ljvfP18oOdSwwImQIEPJ4sPti+MNHvdhMvV2Ih7TOt3bD8X+OP4sbceYwJ427/ftXQ8ALkeN0Ee/nKvy7difJW59WYgUAfkDIAVrdU//7KYKupXW5w4ZiqucJCp4EWy1XSuYcHGjQyAKW/3BQK/DgNgukajyZ735NL1855bIspt2T47iFk18msDv/f2TQW83NWaiqqq3eZ9xS8tAcJnpzMu57pAz40rMeC172btpvYy9XgL2B0oko6L/oG6Lf6+/OzWFsKF4d56HrsT6ZnoUwO/9fdfro2vJjEXhnk+F7IDAOBfCPSfvVSb+cbRFieBeepD2QJA2Huru+hNOFPTZXLgJ4tlrAEgmrJch9j2ZFZ3NbUfLUlkDwAwcqcdtu3P+uakZ9+ed3kcgOAaG2y07V/z2bclhwxiDsAYgxWGYftOZcke1J7IAZgwCFh17x9CjG0bOAATjTRg05XaqTxqgtgDcUaUBkpLbTCMoLEcgMEh3AXQtkUchqAfBLRaOw1sYA9MKKeGgNrVKju9GDo+ayC61GKB4ba8uXYKspeHsQYi1EYERo4sHq21IUarQcYaEKusFovRMCMM0hoR1BbLGpCq7Ki1fGXUIu1KPYrAEeyHoLPBiEE9V602WA3lWULWQGQ5vQEMK9V6G4pqg9kvYzRVjbAFzaISMbbl8TgAdAYwkqVHYcQ+AXAAdHQtwCojlUBpKAcgUotY7gKoPQ5wAGSqwXJUGeAjeayPdTokWXQ5WtTwEf39Q5nVRfP5GhQ1wllW/f2rNjsgTovUWMqVLwzpnx0gXfXOqppV83mAK8B/+cPC9zIiAWcguuinT/M3xXAHpuZnzEzbNIM7AGS1vde6U+XcgWHLbwWuK8OFck4APzRUPCrnWENaxitiiUTErhplglF3I2NN/gdJynsvISLGgDTqgZDh4SMEgifWrp3/oEAgGBE+PGRksPC/gL8BJL2ZbewbQ/8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 9000,
            dps: 1788.08,
            speed: 18,
            range: 300,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 151,
            foreswing: 24,
            backswing: 31,
            tba: 46
          },
          stageStats: {
            actualHp: 24000,
            actualAp: 1800,
            actualDps: 357.62,
            magnification: "20%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [3000, 3000, 3000],
                timings: [24, 42, 60]
            },
            "omni-strike": {
                standing_range: 400,
                omni_range: [-600, 400]
            }
          }
        },
        {
          enemyId: "545",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 160000,
            ap: 3150,
            dps: 605.77,
            speed: 18,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 156,
            foreswing: 31,
            backswing: 24,
            tba: 57
          },
          stageStats: {
            actualHp: 32000,
            actualAp: 630,
            actualDps: 121.15,
            magnification: "20%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [1050, 1050, 1050],
                timings: [31, 38, 43]
            },
            "omni-strike": {
                standing_range: 450,
                omni_range: [-450, 450]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "mini-wave": {
                chance: 100,
                level: 4
            }
          }
        }]
    },
    {
      stageId: 3,
      stageName: "泉の真の恐ろしさ",
      baseHp: 250000,
      width: 4700,
      enemyLimit: 10,
      requiredCost: 200,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "100000",
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
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "250000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "125000",
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
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "20.0-23.3s",
            delayFrames: "600-700f",
            baseHpRatio: "100%",
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
          enemyId: "545",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 160000,
            ap: 3150,
            dps: 605.77,
            speed: 18,
            range: 350,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 156,
            foreswing: 31,
            backswing: 24,
            tba: 57
          },
          stageStats: {
            actualHp: 128000,
            actualAp: 2520,
            actualDps: 484.62,
            magnification: "80%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {
            "multi-hit": {
                hits: [1050, 1050, 1050],
                timings: [31, 38, 43]
            },
            "omni-strike": {
                standing_range: 450,
                omni_range: [-450, 450]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "mini-wave": {
                chance: 100,
                level: 4
            }
          }
        },
        {
          enemyId: "544",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAABAQEBAQACAQECAgQDAgECAgcDAgICAwUEAwIDBAYBAR0FBQcGBQYGBgYGBwsHBwkKChMQCBYLDhkPEBEXDwYXEAQQEhUTDygPFRwPFCoTFRodFAcZGRUSFjUgGwgYHiYmHQkgHxUZG0AqHggpIQUXIUcoIxoZIUgYJD8jJiYeKTYsKRopLSs3LhE5MBQtMjM0MCsvNTQ6NhskMGkrOEU/OA80OzhMPQ8xQE5AQClPPhRLRgE7REpORhpHSSxNRkFaSxJGTFRRTyVcUTB6SwFmVBJwXBF0XA1jYCh9YxVmZWduaGOGaxaGbFWMdxuRdhqXgw2Sgz2PfmalhROciiWMhYWfiVuMjoexkRnQkwKlk3u2nCW+pyC0nnifnsDLrSW4po3PtSXJsXvUui6ussXYvyfdxCnJu57lySvhv5PHwsrl0TLvzyfp1TPt2DPdzpjz3TP74C7w1rDk3dP/8Djc4e724br15Nbt7v7+8Mr//ub///9oDAwjAAAAgHRSTlMA0efxEwhL/z3dIjOAWv/GaJV2qrv/htZ5XfL//s2pmP7/bP7J4P/4gM5e6f7+/////77/bv/////P//z//98A////n////57////d//+g////4f///////tX/////////////////////////////////////////////////ADVx0psAAARRSURBVFiFnddrW9pIFADg6CaAXEVBUSiCKNouuWCadDca1yBgQRAqCGyXFVhEBaOBCDZqTf96B6SWbT80k5MP8OTJvDkzJzOZIF9+CGQibAuvX8+Z0MlTP17+5aczExe/CnvD4WDwd4tOwB+0e72AeBex6ALmgnYKAJF3IAmzHsBlL1RACm5whG06AGwmK5J2bxAc3uCsDsDirsQTHEghENLXBWwtl7sm3W43Ewov6hpEU+L0MXdeSpS8Ll1VeFNNl9RH9UE9+p4/DIAdioees6Hwv/YQGZgt6NvbxtURhugDUPPR3w31rrG59AbTA6xWi+fqp9Or2+vHz4eb8ABaU/qdyuXn+/vL+9tB2woNrHZluX5y86lROssVlV4agwUOFHFQvbyvlz883ZXqndomLHCs9Nqtxsdu7eHp6fFEqh9jkMChJPXE92Ulf6qqlxWlWjDBAWi2J7eqqXrtn1P1ptCVaykLJCAo7Ww2nb5RHz9UZPmimoUEkK1+tSn3izfqf6luvyWW0wagegzagU1Rkjty+2TYXhTFYvHgL2SrcbavGTA0B1JHUvJRedBtXwyydeng7endw51B85NYVOR+t5CtFuKkO15Lvb9WS+d36pVZ81zY7XSq29FsPmA0BuIb+X+v1MaD2jBpn0ymlRXrRjVf7reanW5293B3f/9gFYWZzgjiKTdr5X6vJ7VbK/DTGQxDuVYQa7IkXjTlYz3AiiKQg6YkX7Tr7QoKD2D5rtvellq9i2ZNLuh4MxlaBbu9MGj2RLHVS1rhgdlqNIgHpE5TBPMq5IIHVtM+grPnBzWprRS9OOx6gCBLUR9FEz6x15JEEqcg1wMQZiPOMEyQVQZK3s7Rc/BlXKZpmuHs7KDtIxhmHhowBaghsO4k2RAHfuGrgI8y8Jt9QY6huRAKCzjpIUAvIMs4BaCQBRZ4xTCgHW5C5nEKjCZlgwTQAEicHnZ9zgcA+qUMWgELDgCGcQ5HE4zG6B8UYAPAqAegnpQOAANDQNHcaHPlD4H23DoGBaABKkTQoAbDeuAMRdEBC1wGJMlGycBoBngCBE6yGygUYIgnOTK69txmbTu6LWzDdcHBZQhO8Dy3WUklwzHeAANgvogQjzHjh8dBxQSBWIABzGSG3+Yi45suEnSKjflhABMbI+jMt8o5qSwXyWzBAFaWoCP8eAgQc5yPMNyfEAC6zCcJXhj3AEHWk3wkAwPYiEhMSLLfNsloiIul+PE3gyZgFs8kBf7lIwFdppNChrVoB5aEDEEkX9ZRZD4ZC8biEBl4ogGBX/++O12KkjwbNWkGsEU2F2Mn9sfIIkXy4zVJUwbTmauPyxMfvGafO3Z9vTWndYNhInYiidCoBxgIADiMeCaX2CH8WjZZmMW1A4KemZqZmX6OqcXQHztMAsSe89eA0+hm9vb2KONk4BSO42BZoR2/BlCTzer0uxxT4P6/Pcf09MyUwzXvtNos2E/AV5vQAkPpYS4rAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 180000,
            ap: 4500,
            dps: 888.16,
            speed: 17,
            range: 380,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2000,
            freq: 152,
            foreswing: 57,
            backswing: 48,
            tba: 48
          },
          stageStats: {
            actualHp: 144000,
            actualAp: 3600,
            actualDps: 710.53,
            magnification: "80%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 480,
                omni_range: [-480, 480]
            },
            "knockback": {
                chance: 100
            }
          }
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
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "36.7-36.7s",
            delayFrames: "1,100-1,100f",
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
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "36.7-36.7s",
            delayFrames: "1,100-1,100f",
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
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "36.7-36.7s",
            delayFrames: "1,100-1,100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "046",
          enemyName: "殺意のわんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQACAgICAgICAgICAgEDAwMEBAQFBQUUAQEICAgMDAsPDw8zAAE0AAATExMWFhZHAgJdAQEdHR1yAAAkJCSRAAAsLCwsLCyiAAAxMTG0AAE3NzfdAAD9AABSUFBmZmaAgIC5ubnfrlfyAAAAQHRSTlMABQoTFx8lLDM7QkpUXmhudn6IjpagrbS+w8/4/f/dqMfv9dbp4v//+///3ff/////////3P/////////+////dWjEkAAABUhJREFUWIWdVwl3qjoQLiAVBVSQTRYRCFB8gCl9iNjl/v9/9SZYN6DFd8dzWpKT+TL7TJ6eBoiiqeuCZuih821iuAlzYWeF2fT/IVAjXlEnJxEoZiobG4kZYLm/fiLpKBAbHoqdaaHlqyw1xHWlkaCuLRstn+Gb5qSNZzuW9jwIAKLy3HhEUyNBR7bj+AboQHEyYDmOrY+HAZ5lXV0u+LGow5XAsxZoil2syTcAcMMqMHPT80JDMbwTD5oxjLixnGZhTAbdQNFTN81wivyG33G85VRwCVgMABvhVzdQNMOOOV5BWVlm8YnfeQl0IyT8SRwn4XL6IwJFjzhhoejGZp0mRV0VCbkzybI0Te04djJc4iwNtR9koBhOlLVVgNKMUFHVFQgRO0lRViVwwldJ9gpP5/vMQHNzdYNSXMD5CjjgLPwrMFxbnhgzXNVAFUbycw//ZBkAd1k3VBGUGtirkvxwVjQYFSYYRWp0RQD+8MRNbq4LnGQYF0mCAQj4wHi4qMAoSQF6JUjpBAO7CF7AbABQEIkbD8TkF2NQAhN/AEQSn/7awbxtR3ZuoBTsBhoSX2XJ2YXfMN+fTuNLiG61LQLNThd6mJYgP0FwLvz9ZG3ErhVYHswIalRF9jt3kx6zHk/SkHDEEEU2cD8BmHcBKJZXQgCoy78CAHYJjADOKiGC/wKAnmqIRA/GyTB/rwSc6zXiP8Deb4PR3MQQ/UU8aIAfAKixioq66rNgFEXtdY8KFFStl7LPidHudXeLsH3d7/5pAVDsmBWU4AWUKNthFO0Ox8Pudn08HtoA7EwS5MBKsrIuccuM29fj+/FGhAjWbQCK11fzuQkpDDrglhkbCfK79eG1BcDM12uZ19JTMWp7Mspf8+hunbeNyCmep02kADeVCA8mU2SvF6Pbrs/rlm2KopFCJUqK35OpkcVGqsiPr0IIG8v2zVWYFlBufo+kKNrm+TaKUGCq/KUsiSb0LTtNoQLiIenz/WG/J04BKaZngNmp7zStIPk9lKP8bb9/a4wKhjgDLEgXh75R18PJcFKh+UTKBaBpwzGuSSt4JJlO5Kn3AESEB8rZDYByrwKIQHrHwwh2KF2MeJo+iBL9BbGzRzagtl/iYEXGD2gZ4Ic+JRIoc3clAY4mViCNL6Gs+uQYtHRopF0dss+vD0ys/03bqP6sPWNxDUVmFliNCZrW1hEAf/35xLv94Uz77cfXhyHezHsUp4AZ44R0tj4Nvr7q3eH9QsddVf8rje7ymdcIAmnmPV0hLsv8cLwBeN36bmtmZnjF9Gzo3VlvIEEZe7+VwN/M7gR4OjVGG0pSfyBF2/0V4bjPA6k78D7DaAcS9AoQx1n+drwK8GJ2u/vTs+uBCereXEqKj4/8LMPxbVuGi7YGUJjlEFobxEEfQPn5kZE8JvSW4zrVesYsYQNxUBW9yZCURRxtvymKcRzKHSNQYISCpPND3dVa9cw44iotHxlPCMErhG0DwDMhfCkfGE8aAE/pAMCwSUacxyqSFSx6Jm4YV9f2hd/2vQudXw7NvgUbwbL34UJDi2oeObYNQq5c9Zvc1WWbXK6pypzrf7fQIslrGyHLsczZhDuTqHkEcg0ZZ4cKz3Gjnx5OU92Hgy6c99wxdaGRaFjwepMgZ8mbh+plp+C5M5qqHtwhL0MbucL0SqLr254qSIHt6xPoq10EeK/w4mwuGyAB0g1k+4F+SyYAGIq2hr/STOS7OtDjhWpszGCNwMYIeb5/44TGEb6PwhB5aG1uDHfRMSI1mohzSV4qYHONXGms7sgge5rrqspSlubi5CrBfzndboB89/JYAAAAAElFTkSuQmCC",
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
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "36.7-36.7s",
            delayFrames: "1,100-1,100f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "呪いの体質",
      baseHp: 450000,
      width: 5500,
      enemyLimit: 12,
      requiredCost: 300,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "10",
          amount: "300000",
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
          treasureId: "4000",
          treasureName: "キャラクタードロップ(4000)",
          probability: "450000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "225000",
          amount: "12",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 270000,
            actualAp: 9000,
            actualDps: 16875.0,
            magnification: "1800%",
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
          enemyId: "542",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAADAFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEBAQEBAQEBAQEBAQEBAQEBAQABAgIBAgQCAgMCAgIBAwYBARECAwQCAwQDBAUDBgkBBwwDBwoBCREBChIbAAEUBAMFDA0CDRYGDREHDhUGDxUGERUODg8CEh0IEBctAgExAAAXDAoCEiQEEx0aDAQQEA8SERAhCgkDFiQkCwkGFiMJFR8OFBYKFSEDGSgSFRoUFRRGAAECHSItDAkSGSErEA8MHiAuEQ81DgwbGxMFIDYRHSkbGxseHBgzExENITEPIiY3ExEQIycdHyEfIR87FhIRJTVKEA0VJykMKkFKFBAcJy5DGRYBMz8ILksgKiIjJylPFhEVMDYzJR9XFhI1Jx0sLC1QHRp1Dwc/JiUGPVAYOD4TOkZhGxZiGxYcOUAjNUYuNDAyMzUdPURFLipYKBiEFQ5wHxgSRFggQUdoJB8dQ0k4OjA5PDhLOCApRUUgSVFyKCJ6JR5xKiUiSlJKPS9GPT6EJB5FQDeYHRMwSkUaUVw7REomTVZASDN8LiObIB4pUFiOKSEaWmUnVl+BNCOLLyhTSTqSLiWrJBqhKCApWmRRTEJ4QSOdLycuXWchZHBUU0iXNi5mUSWHQCowYmy5Kx6lNCueOTEyZnFMXF+ISCloVkCjOzMdcX8zaHKsOC80aXRtVj++MiY1a3ZcXFuYRy82bHmyPDQ3bnqlRDOwQDg4cXunSDUifIu2QTk5dIC/PzjlMiKVVEe7RTvOPzTaOi48e4fBRjy3TTrJRD1rbmLERz7HSD5xbmI/gY7JSj+9UELgQTTNSkCBb1PPTEJxeXLVT0TfUEWDenGpdybpUES2ZmDkVEmSfGLsU0eIgW6ydXD2WU6UinWLi4uai2iuhlzBg3ukm5qqnoCxnYPMmWS/nXW+o4mvsLK5sJ/UrYHHs5HHvaLjv5H3y5nW1NLa17r/15Pf3+D347js6OX06c7978r59NH/98n//dX//+7///////2alpQYAAABAHRSTlMABw0UQIm2w9Dh6fGsGyQpUf8vRjfZYpX/bn2ghD+MV2+jtZN+mui2oNyrwAWjAP/Kc2Xw/8+x8eB6/v//SP+kuf+Y9TP/7v//Mmuv/+bCwf+xAP//8//k/0////vy7/+v/+n/zP//////8P/z///y/2b9////5dn//wD///P//+z/sv//hP//////////////////vP/////9/////6v9///////+/9z/////////zf///v///////////////////////////7D///3///////7//////v///////9P//+T//////+r////+6f///////////////////////wD/+mpClgAABNtJREFUWIWd1n9YE2UcAPDXDUKXG3ODGb/UFJOnp4ZaWqJJaMoJS6cYEVaEWCkiLjMZYsyJWhFNCRDICbls1bytDs/BHhk1YtIdLo9zM5raVPwFoWb+KHG07tDnkad6eu7u+9w/d8+9n/f7/vi+zwv++meAoREzbfKjMuGQD//+/f+AcXMVkEKhSB7NEUhMU0BJUJJCAcVyAmIUEB3pyyBF+lguwEQoAUpIgmZSSPIkLsCkhPiHEpRU+yQoOZYLEKVUFhbmJMTnz4IUMVyA4LOd/jOFSsVXyuRkEStgmHQsnwY6egPn+26dOZ4TP4bdKoxblv7IU9MmzxRU+v13+v88HRzKch/EQOHSkKcToniiDv/t2/5t8sGmQhHzOYgQ0//KwcM7TlzvTbnXd+XFLWHsJlG8ueyjH8/Oflwi4dM5VF7zX03hMwZECytwn3Prx0XrCMJUJpMDUeeJHv+FbQwBuWTdSTeJkVhj2QHS7fWVBQFe543uy6eZAqHFPrepmcAIvJ1SnA53AfXt6+47P0iZAcLNPgJzNBEYhuMOAnc56ok5AAT13E5hOIkrfKTL2XzQTWDOwwcaHaRztaeez68buCpiBqR6MSdONmmcbhfW/Mlep7uq2N2V+sWVwClmyzjH7TnYTHqrsream11YC0Y46is8u87f7BmoZATISG+Txuxtyd5tNlOJOBw45ljvfP18oOdSwwImQIEPJ4sPti+MNHvdhMvV2Ih7TOt3bD8X+OP4sbceYwJ427/ftXQ8ALkeN0Ee/nKvy7difJW59WYgUAfkDIAVrdU//7KYKupXW5w4ZiqucJCp4EWy1XSuYcHGjQyAKW/3BQK/DgNgukajyZ735NL1855bIspt2T47iFk18msDv/f2TQW83NWaiqqq3eZ9xS8tAcJnpzMu57pAz40rMeC172btpvYy9XgL2B0oko6L/oG6Lf6+/OzWFsKF4d56HrsT6ZnoUwO/9fdfro2vJjEXhnk+F7IDAOBfCPSfvVSb+cbRFieBeepD2QJA2Huru+hNOFPTZXLgJ4tlrAEgmrJch9j2ZFZ3NbUfLUlkDwAwcqcdtu3P+uakZ9+ed3kcgOAaG2y07V/z2bclhwxiDsAYgxWGYftOZcke1J7IAZgwCFh17x9CjG0bOAATjTRg05XaqTxqgtgDcUaUBkpLbTCMoLEcgMEh3AXQtkUchqAfBLRaOw1sYA9MKKeGgNrVKju9GDo+ayC61GKB4ba8uXYKspeHsQYi1EYERo4sHq21IUarQcYaEKusFovRMCMM0hoR1BbLGpCq7Ki1fGXUIu1KPYrAEeyHoLPBiEE9V602WA3lWULWQGQ5vQEMK9V6G4pqg9kvYzRVjbAFzaISMbbl8TgAdAYwkqVHYcQ+AXAAdHQtwCojlUBpKAcgUotY7gKoPQ5wAGSqwXJUGeAjeayPdTokWXQ5WtTwEf39Q5nVRfP5GhQ1wllW/f2rNjsgTovUWMqVLwzpnx0gXfXOqppV83mAK8B/+cPC9zIiAWcguuinT/M3xXAHpuZnzEzbNIM7AGS1vde6U+XcgWHLbwWuK8OFck4APzRUPCrnWENaxitiiUTErhplglF3I2NN/gdJynsvISLGgDTqgZDh4SMEgifWrp3/oEAgGBE+PGRksPC/gL8BJL2ZbewbQ/8AAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 120000,
            ap: 9000,
            dps: 1788.08,
            speed: 18,
            range: 300,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 151,
            foreswing: 24,
            backswing: 31,
            tba: 46
          },
          stageStats: {
            actualHp: 144000,
            actualAp: 10800,
            actualDps: 2145.7,
            magnification: "120%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "multi-hit": {
                hits: [3000, 3000, 3000],
                timings: [24, 42, 60]
            },
            "omni-strike": {
                standing_range: 400,
                omni_range: [-600, 400]
            }
          }
        },
        {
          enemyId: "546",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAABgFBMVEUAAAAAAAAAAAAAAAACAAEBAQEDAgEDAgIDAwMDAwMDAwMDAwIEAwQEBAQGBQQHBwcLCwsODAkODg8IEBgPDw8NEBMUFBUUFBMVFhccGhcbGxsdHR4THy8hISIhIR8iIyAkJSQlJiccKD8rKCMqLCgwMTExMSsrOhowNzw2Nzs3OTs2Ozk3PD03QyI4Qkk8SFNJRz4+WQVHTVdNTUdOTFhbUT1PWE5gXGZWcwtcYl1WcS5ma1xwcG5hgT50dXt4eXtvlhl6i1l1lTqBhX6AkWl6nEyFpQ6LjoGHm22MojyMnHuVlZOQl52SqEiYsCiQo4ismHmcnZyUq2egqISioqGmqKyhsY+0qYytsLaxuqO4uryuv9C+wKbAwr3Qw6G9x9LHyq7HysHTz6XB0NzOzczT1cLI1uLU1dLc2a3P2+fp27Tc3tLn5qvh49fa5e7n5uXu7bDf6fXq6+3i7v3y8NDs7/Hw8vX89sH19ff69uH//8b5+fn5/f7//uz////////a1N70AAAAgHRSTlMACxQftyrvyEBb/5lNbdmCk/8z/wCivP/R5v9Y/zz+3v9t/4//6f+4/lp4i//////////+b8f/mf/////+/7/9/////v//////////6P/////////+//////////////////////////////////////////////////////8A/5aoKcwAAAPySURBVFiFndfrU9pKFABwwaIYH4hBUaQ0YJqLiohSX4ByMVpQaq8pDwWDIhIRU0CpxNSEe/71LtTeT86dOdlZhmEm85uz5+yeLAP/vjUGXodlcnZu1mZ6/fX2o/8DOCZZjnExzJzFIGBjuUCUT/Jh57ghwMQEGTYc3QyznGvKCGANhBjW6fQ4XRwzaQQYD4dctN1Oe+wMM2IEGA2x9pAgcNEsO20oBzOeMMfrunAOUUNVcMy5oqFk/fyyfBU0GwEsHpa1x57un7sxylAZJ8kmormz+7u0xzPrwANmUjyXPXB2KrgojjGjAccMR1F+zlkHLW6nhtAROGwe+2a2FaLS1azSSoatWIBksACguKhYqQaQB8GMBGapGKhQpMgXQGs33/HiAJufSgOUSjECZBKJz9vyHhL4YL8CuK52uSTIUvko0eZNyCrY+FQGitFIQ1UfIbVTLCwgAWuiUL7OxXPpdFHIivF0m0cCYzlo5RokgeLPLpmkFHs4YLBXhd6oNbqSBFKnI0+hAEsOQBUVAkg/ZQlkpVz4hAJGmhrIEUWH1vXTfaXbkqG8jALGmpnC8TVZQqf08FB+epLVQxsKMAnS2tpBpgYd8fmh/PCcjUTGUcDAAhTWopvFzq34/J3MdI0fxAGmeF6AH4+PV+LLvfhSedQXsB1pcDReuqrXc5WXSrl7l/Tiu/Jg7vyc30ncfc9kKjGLgba+dKNAtChVRUGoZk0GgD2h1NougA5KGxQjEXzZ2Tn8vH2Q6KgqKFN4wMy7cvJ+qtbQyHbS5vHA+xjVhEgJyBrIZ96BBhbXqZouqW2lfygNRLAcoMlZ0NVmPwQDEWys9wDQO+REphoGItjbpKvwOwO1SBUfgYkPumu91bcTx/tf98fQ78apNNMHdEUs5Y++4SNYzNG+fgRkNCK1RXQOPqUpf+MVaIstfBKXV+hgG/4M1YoG/mLpVe0/oI0HNlbcwQP5D9BCA+Y1zrceKRgHrCsMGzg6+uc1CDzgzXp8wZOTfL6fSL09NeBwoICtHy73zm7+dQU6vHcggS91pzsqNnpHgUxNx24kS/2Kpnv3I1A6RBBTS0jAq59TdLwHNJuaBvlDLLAFFxTF9wGltHv899cFJJDUlcBvoN7sSNK3k2UcYCmqerYH6Fr9luSgkNpCXvN0aOtcvNcN6rdkJ8gNJGDdu6jDTalXwWaz31WRALkjzS8tZ9saaDcXF+TNdu3Fd2Vyx7isxL0bl5enM2OG/nQNfjw7nRmYS5xFh6bHzPgITDNBt2/W5vS5faurQf+0AwOMDw9RFLO+uu6yewJ+vz8QWGUnMJeskdF3wxMTHz7ODfXHxMTwu9HRkTcf/QVPEGN1Z1g6rAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 135000,
            ap: 3000,
            dps: 439.02,
            speed: 14,
            range: 650,
            rangeType: "範囲",
            kbLevel: 3,
            money: 2000,
            freq: 205,
            foreswing: 48,
            backswing: 56,
            tba: 79
          },
          stageStats: {
            actualHp: 162000,
            actualAp: 3600,
            actualDps: 526.82,
            magnification: "120%",
            count: "1",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 450,
                ld_range: [450, 900]
            },
            "weaken": {
                chance: 100,
                power: 120,
                duration_f: 50,
                duration_s: 1.67
            }
          }
        },
        {
          enemyId: "114",
          enemyName: "天使ガブリエル",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 13000,
            ap: 1550,
            dps: 1134.15,
            speed: 50,
            range: 80,
            rangeType: "範囲",
            kbLevel: 10,
            money: 250,
            freq: 41,
            foreswing: 3,
            backswing: 38,
            tba: 0
          },
          stageStats: {
            actualHp: 32500,
            actualAp: 3875,
            actualDps: 2835.38,
            magnification: "250%",
            count: "0",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAACAgIFBQUHBwcHBwcJCQkKCgoMDAwPDw8QEBAREREYGBgZGRkbGxsmJiZ/AAExMTE3Nzc9PT09PT1AQECIOgL/AACRQgVXV1dbW1tbW1tmZmahYQOnYRNycnKuZhataw+uahZ2dnaubgy3cBx/f3+6exzCeiO5hBS9hQS9gxGMjIzCiCfJljKbm5vMlTjTpUepqanlsDy5ubnlu2HpyWTJycnc3Nz146Dp6en78cPz8/P6+fn///////+0jcskAAAAQHRSTlMACh0sOf9SaNnkd7SbxIr+ArPV6f3DDQEe/tPo/wo9/oUnU+oXofxovxwHQf94jf6euP/v/s3p///4//7//wD/SEHX2QAABVxJREFUWIXtV213sjgQFUHogwirQm0ES5U2fbabmppNTYyk/v9/tRPAqrULPWe/7m175MW5mZncmUl7H/8Rvf8JPnrtmN0a3NUwl4s/OixOWCwWy/vV6uHp6el3g6enh+fV/XJxezvrsv5YLJ/Xm/ftdvv3JeDJ++bt9f7utn315fp9t99V331eAe4Bq9Xz86th3e12283qri2Y5Wan9fZttXxcLF4WH7PZrDebfSwWHy+Lx+Vf6+3+sN8+tPlw/64Ph93mFQKuKF4gIYsX+HwB++fNtoS3v+/aQniGCPR+VwXxtl6/Vliv3zbvEMFe6/32931rFiCHbybYfY1dhc+b7Wa96shir/diNvEV1oRFT9hs3tYQ2N1tpxwsg1sT+uPj458NHiEhIKYfaMlywiAIfc/pW91f/g79EeGcMZImodvNYVl923EN7L5Vf9ueCH3QWitB07Hfbze3/WA8n6fpdDodDQPfMRxWmMtSMAUkihdhK4M7yqiQSikpJac4nQSebfXsICUIEXUAyMK3mrVc+5rAR1IfKsCHcZoVY9eyvF8RERktzQsxcarEeEkaXCfEnRChKhx5FJu4/TFGQouMmYcae8Y+KIQYX0djucPJfD5HCMtDA83GdjBFEi4yUd2HFqSlUJp/Q9Cz+o7tQsii1EcGlXp2gCCFJcFKCZ4HnutNRClx4Njf7arlF7LKwMmFvluY+GWOc4QBRRpjnKF0noTONYUVYikFJ/zIIOeOlyqTVoFirkARpRI4Rhw2iySuc+WHEyTzSQRpazwoi2ESU5NWLXLRsJYcIQHvWDqZJL7d7/ftEw9o0ZsKraU0cegS54JnIBDw4nN7gAwbH2WOEJom4+HwZuSdPLGDmHKCcGlSoSkHMkaYOpxDl0bgJBOCZIzEmLO5++lCUJAMoZiVirLy0CzbrK2EPCW4xEwxwShjSioSHNPowS4rKRAC/5g+XC5MouzkiuaCRzGVkM6Y0COBnYg6SoKJ+GJfE5we6lLEg4grPIgIDj8dKI8F8dXchMDlxb0WFISLEGWJ02RgLK7N2gBFBz8ybXYBlKi+WbgTqvCaepr/yIGr3GgaVh44CZPfWlwYQ4cydV8CTPcR0DRpWrUaK6CYd7tLEOgkyw2yLEMxXMdBVd1uKrLOEEqaCcUh74xRlIEUEJdNCqyQyW4CWEMfJFgBMFGKTHNKU6/RUDeBJriEholRZtyHSks8Pwx9u9LQlBSoi0ChHGoLdl4AGBaFV82+eg8D3590EYgoIvEAVRWhKb3ojUDUKURNBoMsggIwNzLjxL/sSJ0ECg2ifDAYUKMlyGfqXHa0ftJBIKJBnAEBNs2Gkavu3k9alQiSBeMI/ojpd4w2Cv65B8qsbjhYxUYL99K+Z3XkQMY1QSxNTRA6d74SBO21IKKagJYaSonS+dchbYW0tR3wmiDKiQHjqQtD4eLk4hHdxsCM+xnJoIlSKCVJJ0mSjM9mQs89tsR/IYgiLKCIciNkoIGqhNFwflZw5qqNQOYZpTBaG8QogmaAhmdisLv2kWHChGwgoBfRYzv62TZUQ+3iHvRwrkfLp1UWS9mai0uI5CyGJosqJ/JytDS7o0+Xx9mjyLmgj6ONxoidjwjNeTXvhVDQkapTjEFZSl6Mz/VopGTsoG/GiHJxzBZFVRPRcFjIMSGQOlASHHiK+di/lKOb1hupFRkO46wCin+NhtPaNUlGwTSHwxIQoGF1Kr5UM/SUJloeQJ+vgUO7H7CyAgvsMa8Gi8L+Nyc1y89YjXzk3+D6Mht63jCuZgnoxh+h+nIafvdvgBOMRqMbwC/4PaK6P103T26Ggfe5g/8Ak5xPzbXLdjMAAAAASUVORK5CYII=",
          traits: ["天"],
          baseStats: {
            hp: 55000,
            ap: 1800,
            dps: 2000.0,
            speed: 9,
            range: 170,
            rangeType: "範囲",
            kbLevel: 2,
            money: 450,
            freq: 27,
            foreswing: 8,
            backswing: 3,
            tba: 10
          },
          stageStats: {
            actualHp: 110000,
            actualAp: 3600,
            actualDps: 4000.0,
            magnification: "200%",
            count: "3",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "53.3-56.7s",
            delayFrames: "1,600-1,700f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2165Data;

