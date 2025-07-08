// Stage 1133 Data
import type { StageData } from '../../app/stage/types';

export const e1133Data: StageData = {
  eventId: 1133,
  eventName: "開眼のちびキモネコ襲来！",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 133,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "ちびキモネコ進化への道 極ムズ",
      baseHp: 400000,
      width: 5600,
      enemyLimit: 12,
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
          treasureId: "10246",
          treasureName: "ちびムキあしネコへの進化権(ちびキモネコの第3形態)",
          probability: "100",
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
            actualHp: 6000,
            actualAp: 600,
            actualDps: 600.0,
            magnification: "3000%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "73.3-80.0s",
            delayFrames: "2,200-2,400f",
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
            actualHp: 6000,
            actualAp: 600,
            actualDps: 600.0,
            magnification: "3000%",
            count: "0",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "93.3-100.0s",
            delayFrames: "2,800-3,000f",
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
            actualHp: 1400,
            actualAp: 600,
            actualDps: 1000.0,
            magnification: "2000%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "10.0-166.7s",
            delayFrames: "300-5,000f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "325",
          enemyName: "ちびムキあしネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 5990,
            dps: 3993.33,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 5990,
            actualDps: 3993.33,
            magnification: "100%",
            count: "5",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 3
            }
          }
        },
        {
          enemyId: "325",
          enemyName: "ちびムキあしネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQFBQUGBgYKCgoWFhYYGBgdHR0iIiIkJCQkJCQqKiorKystLS0yMjI6OjpFRUVOTk5cXFxoaGhubm53d3eBgYGEhISUlJSbm5ulpaWtra2zs7O5ubnCwsLIyMjPz8/X19fe3t7n5+ft7e309PT6+vr+/v6RRDXlAAAAQHRSTlMAAwYLDxUaITRMWMfQPZay2SlieKP1RGy744yD/a1V//OJzmea/+a7/9r8/tv+4////v//////////////////0twWeQAABi1JREFUWIWdlmtbozwQhuVMUaxAl9Zire3aA1DkFAgkIfz/f/VOqO6177VUq/OhtcLceWYyM8nNzRVm2NL5D0W55vV/zV85Z39v8jPAc7IRS0vP4Vz6ib/0G725punYp2LzI4CyQeTt9HYKE/QjgLE5kb7jnDPShL78XXfJPJSM933Xg3X49PxNguyHlfAnKQFAlbUn/1tRyM9hg5KC9aygvOlIzZuD9h39/qmlSZFkrEdVHaGq5PztO7XgHJqeozjLCt7GAIoxhLG5PgvaawWBcxRlkIEc8RzBT3JQrw7gd8FF7nmZprhvQAGFXyw0rgXYJzYA+q5AXc9x1ghadzKvDeDQ9Gfj/V/WRfZ1/rIbk8G1Y3/7QwjOlQGEOdQO5T0r2R8NnMI++lf5O4e0oj0UD2SgBIxgcNK0vG9erxkryiapasJJCyHUCLes412bJYLZna6JwQ4rjHHbQvY72mJclVkSR2kjYil/XyHgNW9ZWzfn2Bmu4yjJK1RS0ZXt69e16ITgSyomsiYA1TGrMW4a3onEft1P0vMbBIvh5U6IIDg/FjUmDAYL6aCYvwQoG+hgIuqI1gBoIYKyxhQqgne8x9uvilnSDojxWlR+W3HeNcVOABgbCoKX0fMlx49vHQAUiQw2qOtAwHRf1DUjXQeRtWXuXfD/AMjGtqQYWpnzGtG2Tlf2Nq1q2sKO9ryq8OvnAAkAWVMIAPQhjLStrSxjVLdN18BEaRE5XAJIw6es6KsIwfTgnGZVGm99SfIhBtywEiqTFRcAkgCAu6woxgFCgGnSVVn5shJHq7aKq7ppcyqmQxteBIjlFVXxQyi5ErdFWkaBPkT1vE8RLnNobV40nwCEv6p6CeMdLousTFbGEJWsLl/yOs+hN3j5OUDVNO0+bhipoYGilSmJ9cGcRVZnQkGHmss5kAeAuY1yVFVluJobiiwNAEl2kzpLCOcEVePb+AegB0laFjmKF46q/AFIkNkiRqyrygtnizQohRQYhwIRVJTx1lE+AGKDnk9lEiPanK8bIwBZPhNgmBBal1Wxt98VDDt8o66SIk4IS93x83UAiCDcBPoGowaHtvA/F4ckO94+LrOSMjR+uJ0jEPuwSUnHMKY4NAftN0NqrG2CiiLLKcuDcYB8BkjqawGd3xBabY3B/0YUx2SbtV1bFGlTh/ZoCB8AWT/UrKOE0XSpSO8A1VjFMJsYqvJ0P1c+UQBinbBljFJWw4UIiAKgapN9QcVwJBj2Rr4AgIwJsf4JVqe0iZeacibIihZEMGF7RiiOPfWSAkWYqnkpCIAptHKUd4Ck6LO4houa4IbmpwBVM1aIsbaMV6Yogvdd0GcpADog5xvtE4AKjWCHDSXCX7z4PmNkbQmnGgxV1oY+tPtoJb43oj5PCani7UQXAPlcxIoexCVsLKXFqyb6fRyg6mDGa9HidO+ZBhCEIpAhq4YXZSUmFK6JykWAoumGYdgHVBfHAPyBAILETqi64+6zApM222giT6MnEwAMwzGtEKptaxuOYzoCocLW6o4JgKolWWiDLNA5DtDByZ5HeQYZ8C3Lmvim4xjgYZg+AGpSHwMH/gM2ClBhfdOcR6AgWs3BXMu3TQBohmlb+7wh+cKfWBNQNgqQNVjfNr0EZlmerCwhQfhDzI4NCvK2jea25Vo2iBgDQAS27fvLuCzzogjnkwmsDxEosur4VrDPmurg+9Yga/SOo0CkoHAFN+O8yPauDwav6gok0Zws4YaRbSaW61oCPK7AhOfzbZSkaRIGEzD/rACeWLNjkkeBC/6wymT0oifrvut59y9RHEfbwAUWLGY7OmybaQUPuyjZ33sisbCMNR7CxFve3+6Ox+NusQw8L4APd2Iaju0upy8AiPezwJtbAj0KcNzlbPq4A8LLdHY/EJaCAEUQ3O2OcZJE++kSRHjefAyg2t5scftrB/a4GAjB8l4QQLP3eDzby8P0HiwYA+iT5eLucb3e7daPd7e3wJhNF4vpfQA2eznu1gK9W7/Aw8VsFGDNHn49CcDT48PDw92H3YLd/Vqv1+KZ+Pr1cLcYAxjz6ePT0/mVf+zpbOvh6ePddDQH/nwJqqcLsSLYw//sXctiCtlZen9t439gzxW3lT560AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 5990,
            dps: 3993.33,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 5990,
            actualDps: 3993.33,
            magnification: "100%",
            count: "4",
            spawnTime: "100.0s",
            spawnTimeFrames: "3,000f",
            delay: "13.3-13.3s",
            delayFrames: "400-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 3
            }
          }
        },
        {
          enemyId: "325",
          enemyName: "ちびムキあしネコ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQFBQUGBgYKCgoWFhYYGBgdHR0iIiIkJCQkJCQqKiorKystLS0yMjI6OjpFRUVOTk5cXFxoaGhubm53d3eBgYGEhISUlJSbm5ulpaWtra2zs7O5ubnCwsLIyMjPz8/X19fe3t7n5+ft7e309PT6+vr+/v6RRDXlAAAAQHRSTlMAAwYLDxUaITRMWMfQPZay2SlieKP1RGy744yD/a1V//OJzmea/+a7/9r8/tv+4////v//////////////////0twWeQAABi1JREFUWIWdlmtbozwQhuVMUaxAl9Zire3aA1DkFAgkIfz/f/VOqO6177VUq/OhtcLceWYyM8nNzRVm2NL5D0W55vV/zV85Z39v8jPAc7IRS0vP4Vz6ib/0G725punYp2LzI4CyQeTt9HYKE/QjgLE5kb7jnDPShL78XXfJPJSM933Xg3X49PxNguyHlfAnKQFAlbUn/1tRyM9hg5KC9aygvOlIzZuD9h39/qmlSZFkrEdVHaGq5PztO7XgHJqeozjLCt7GAIoxhLG5PgvaawWBcxRlkIEc8RzBT3JQrw7gd8FF7nmZprhvQAGFXyw0rgXYJzYA+q5AXc9x1ghadzKvDeDQ9Gfj/V/WRfZ1/rIbk8G1Y3/7QwjOlQGEOdQO5T0r2R8NnMI++lf5O4e0oj0UD2SgBIxgcNK0vG9erxkryiapasJJCyHUCLes412bJYLZna6JwQ4rjHHbQvY72mJclVkSR2kjYil/XyHgNW9ZWzfn2Bmu4yjJK1RS0ZXt69e16ITgSyomsiYA1TGrMW4a3onEft1P0vMbBIvh5U6IIDg/FjUmDAYL6aCYvwQoG+hgIuqI1gBoIYKyxhQqgne8x9uvilnSDojxWlR+W3HeNcVOABgbCoKX0fMlx49vHQAUiQw2qOtAwHRf1DUjXQeRtWXuXfD/AMjGtqQYWpnzGtG2Tlf2Nq1q2sKO9ryq8OvnAAkAWVMIAPQhjLStrSxjVLdN18BEaRE5XAJIw6es6KsIwfTgnGZVGm99SfIhBtywEiqTFRcAkgCAu6woxgFCgGnSVVn5shJHq7aKq7ppcyqmQxteBIjlFVXxQyi5ErdFWkaBPkT1vE8RLnNobV40nwCEv6p6CeMdLousTFbGEJWsLl/yOs+hN3j5OUDVNO0+bhipoYGilSmJ9cGcRVZnQkGHmss5kAeAuY1yVFVluJobiiwNAEl2kzpLCOcEVePb+AegB0laFjmKF46q/AFIkNkiRqyrygtnizQohRQYhwIRVJTx1lE+AGKDnk9lEiPanK8bIwBZPhNgmBBal1Wxt98VDDt8o66SIk4IS93x83UAiCDcBPoGowaHtvA/F4ckO94+LrOSMjR+uJ0jEPuwSUnHMKY4NAftN0NqrG2CiiLLKcuDcYB8BkjqawGd3xBabY3B/0YUx2SbtV1bFGlTh/ZoCB8AWT/UrKOE0XSpSO8A1VjFMJsYqvJ0P1c+UQBinbBljFJWw4UIiAKgapN9QcVwJBj2Rr4AgIwJsf4JVqe0iZeacibIihZEMGF7RiiOPfWSAkWYqnkpCIAptHKUd4Ck6LO4houa4IbmpwBVM1aIsbaMV6Yogvdd0GcpADog5xvtE4AKjWCHDSXCX7z4PmNkbQmnGgxV1oY+tPtoJb43oj5PCani7UQXAPlcxIoexCVsLKXFqyb6fRyg6mDGa9HidO+ZBhCEIpAhq4YXZSUmFK6JykWAoumGYdgHVBfHAPyBAILETqi64+6zApM222giT6MnEwAMwzGtEKptaxuOYzoCocLW6o4JgKolWWiDLNA5DtDByZ5HeQYZ8C3Lmvim4xjgYZg+AGpSHwMH/gM2ClBhfdOcR6AgWs3BXMu3TQBohmlb+7wh+cKfWBNQNgqQNVjfNr0EZlmerCwhQfhDzI4NCvK2jea25Vo2iBgDQAS27fvLuCzzogjnkwmsDxEosur4VrDPmurg+9Yga/SOo0CkoHAFN+O8yPauDwav6gok0Zws4YaRbSaW61oCPK7AhOfzbZSkaRIGEzD/rACeWLNjkkeBC/6wymT0oifrvut59y9RHEfbwAUWLGY7OmybaQUPuyjZ33sisbCMNR7CxFve3+6Ox+NusQw8L4APd2Iaju0upy8AiPezwJtbAj0KcNzlbPq4A8LLdHY/EJaCAEUQ3O2OcZJE++kSRHjefAyg2t5scftrB/a4GAjB8l4QQLP3eDzby8P0HiwYA+iT5eLucb3e7daPd7e3wJhNF4vpfQA2eznu1gK9W7/Aw8VsFGDNHn49CcDT48PDw92H3YLd/Vqv1+KZ+Pr1cLcYAxjz6ePT0/mVf+zpbOvh6ePddDQH/nwJqqcLsSLYw//sXctiCtlZen9t439gzxW3lT560AAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 200000,
            ap: 5990,
            dps: 3993.33,
            speed: 6,
            range: 100,
            rangeType: "範囲",
            kbLevel: 2,
            money: 810,
            freq: 45,
            foreswing: 6,
            backswing: 6,
            tba: 20
          },
          stageStats: {
            actualHp: 200000,
            actualAp: 5990,
            actualDps: 3993.33,
            magnification: "100%",
            count: "0",
            spawnTime: "160.0s",
            spawnTimeFrames: "4,800f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "wave": {
                chance: 100,
                level: 3
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
            count: "0",
            spawnTime: "240.0s",
            spawnTimeFrames: "7,200f",
            delay: "40.0-60.0s",
            delayFrames: "1,200-1,800f",
            baseHpRatio: "100%",
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

export default e1133Data;

