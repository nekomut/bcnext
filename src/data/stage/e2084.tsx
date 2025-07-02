// Stage 2084 Data
import type { StageData } from '../../app/stage/types';

export const e2084Data: StageData = {
  eventId: 2084,
  eventName: "開眼のヒカキン襲来！",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 84,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "不死鳥の舞い 初級",
      baseHp: 10000,
      width: 3200,
      enemyLimit: 12,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10134",
          treasureName: "ムキャキンへの進化権(ヒカキンの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "433",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 10000,
            ap: 250,
            dps: 77.32,
            speed: 6,
            range: 350,
            rangeType: "範囲",
            kbLevel: 10,
            money: 3000,
            freq: 97,
            foreswing: 8,
            backswing: 8,
            tba: 45
          },
          stageStats: {
            actualHp: 10000,
            actualAp: 250,
            actualDps: 77.32,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {
            "freeze": {
                chance: 100,
                duration_f: 45,
                duration_s: 1.5
            }
          }
        },
        {
          enemyId: "432",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAGBgYHBwcJCQkKCgoLCwsMDAwNDQ0NDQ0ODg4QEBAQEBARERERERERERESEhIVFRUaGhocHBwkJCQoKCgqKiosLCwwMDAwMDA1NTU/Pz9BQUFFRUVHR0dJSUlSUlJSUlJUVFRXV1dbW1teXl5fX19hYWFnZ2dnZ2dwcHBwcHBwcHBycnJ5eXl7e3t7e3uJiYmMjIyVlZWgoKCjo6OysrK0tLS9vb3GxsbNzc3Y2Njk5OTt7e3z8/P8/PyxmW2jAAAAQHRSTlMACWo8/4TKXdj1ShMuHp3/6bU2/yQZP/8HWmd//7/pkwSdfK3/vuSUo/2xydr/5MH//NP/3/7t/v//////////2iNc3AAAAw9JREFUWIWd1lt3ojAQAGBQ1Cog1HoDFYpiLVWQOwkE+P//aie67T5tz5nEI4cH5yOTTAYl6beh6sPhQpV//c0vQx+8vpimOZ5PVLH4+fTNMAz4TucafhbbyXjKoxX+UV4GWGE1NyFYMd74FYY5QD5/NN08IwEx+N1YRwH6i6IYP/H8zhyigMlU+R7GM4npDJXBXPk3jCcwQWUwfkT+AyCNVwywMB+Rm/1+s/f9/YbvpokBZlP+0KBpW8YaWmXBBnLAAEM+g01RVU3Xt1USx76BA/guKvsw8IMMHu/Hof+GA1RYRGMfB34IixD6Ybw3cGsgzxVYvCTzi8D3s7CIQUDtAhRSSKu6piwhSdswVhQbVB1Imhkw0nZtVXUZ7TpGGgdXyuoh6FjDSNH2NCRN0zaOhgLkz4T1fV83bceqpu87esCdRsmOeFhdFVVc1H3XlTtkR5FtCjNo26auaN313R05AUlalxyglBakhtX8QjfFJQdoXNE4gO1geEDPYQ06fprqmjH2iQbkr7br+p41TVPDcLHxkmSVHRCMR5MmQTW051BPtIVdoAQWsnJFXm+zD8LbCSGkcBYC8dI6CRIoAlKE/sdSCCizwnO9Q+hkqRiQZ6Uly3ZxyAWBrCgh9yMBYCUEJEUOT75QTxioUh0ONt2JAlF1V6EiS1sU+CBwAtR7aeWp0H8cAC5wqNJ8lt/FAIccob3mqSiwcIgN1/y+SEWB0uL1+KWJAh/lmp/qiy4KRDm8C+zqKA5coY7cwhIFrOS0ldRrpAEg0k9kN5lvoRxPsp7iezIM/RoCsEtsSRCAhuRt5VO0EAXcJPS2C8hAEFDPQeBubchAWqVfAruwjg6Rp3qQAQe2eGCX7KKLdjurgoB8us3SixXtJEFAu3la5Lo8AwA+8YAd2cvUu/IMpNUVD8jeTVumh0cGQoB+O8nLyInWf4F3LGBFtrS8BY8MALhgZyC7N40DjwxEAPUMFby8OWtRQD9YfB0Oqiggayo/z0fpG3hHAs9p/ADnIx7QZoOR8zoajQaDydBa//+HfwCreXU9dP3fPAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 640,
            ap: 320,
            dps: 110.34,
            speed: 8,
            range: 300,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 87,
            foreswing: 8,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 640,
            actualAp: 320,
            actualDps: 110.34,
            magnification: "100%",
            count: "6",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "99%",
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
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
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
            actualHp: 70,
            actualAp: 30,
            actualDps: 50.0,
            magnification: "100%",
            count: "8",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-20.0s",
            delayFrames: "500-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "432",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAGBgYHBwcJCQkKCgoLCwsMDAwNDQ0NDQ0ODg4QEBAQEBARERERERERERESEhIVFRUaGhocHBwkJCQoKCgqKiosLCwwMDAwMDA1NTU/Pz9BQUFFRUVHR0dJSUlSUlJSUlJUVFRXV1dbW1teXl5fX19hYWFnZ2dnZ2dwcHBwcHBwcHBycnJ5eXl7e3t7e3uJiYmMjIyVlZWgoKCjo6OysrK0tLS9vb3GxsbNzc3Y2Njk5OTt7e3z8/P8/PyxmW2jAAAAQHRSTlMACWo8/4TKXdj1ShMuHp3/6bU2/yQZP/8HWmd//7/pkwSdfK3/vuSUo/2xydr/5MH//NP/3/7t/v//////////2iNc3AAAAw9JREFUWIWd1lt3ojAQAGBQ1Cog1HoDFYpiLVWQOwkE+P//aie67T5tz5nEI4cH5yOTTAYl6beh6sPhQpV//c0vQx+8vpimOZ5PVLH4+fTNMAz4TucafhbbyXjKoxX+UV4GWGE1NyFYMd74FYY5QD5/NN08IwEx+N1YRwH6i6IYP/H8zhyigMlU+R7GM4npDJXBXPk3jCcwQWUwfkT+AyCNVwywMB+Rm/1+s/f9/YbvpokBZlP+0KBpW8YaWmXBBnLAAEM+g01RVU3Xt1USx76BA/guKvsw8IMMHu/Hof+GA1RYRGMfB34IixD6Ybw3cGsgzxVYvCTzi8D3s7CIQUDtAhRSSKu6piwhSdswVhQbVB1Imhkw0nZtVXUZ7TpGGgdXyuoh6FjDSNH2NCRN0zaOhgLkz4T1fV83bceqpu87esCdRsmOeFhdFVVc1H3XlTtkR5FtCjNo26auaN313R05AUlalxyglBakhtX8QjfFJQdoXNE4gO1geEDPYQ06fprqmjH2iQbkr7br+p41TVPDcLHxkmSVHRCMR5MmQTW051BPtIVdoAQWsnJFXm+zD8LbCSGkcBYC8dI6CRIoAlKE/sdSCCizwnO9Q+hkqRiQZ6Uly3ZxyAWBrCgh9yMBYCUEJEUOT75QTxioUh0ONt2JAlF1V6EiS1sU+CBwAtR7aeWp0H8cAC5wqNJ8lt/FAIccob3mqSiwcIgN1/y+SEWB0uL1+KWJAh/lmp/qiy4KRDm8C+zqKA5coY7cwhIFrOS0ldRrpAEg0k9kN5lvoRxPsp7iezIM/RoCsEtsSRCAhuRt5VO0EAXcJPS2C8hAEFDPQeBubchAWqVfAruwjg6Rp3qQAQe2eGCX7KKLdjurgoB8us3SixXtJEFAu3la5Lo8AwA+8YAd2cvUu/IMpNUVD8jeTVumh0cGQoB+O8nLyInWf4F3LGBFtrS8BY8MALhgZyC7N40DjwxEAPUMFby8OWtRQD9YfB0Oqiggayo/z0fpG3hHAs9p/ADnIx7QZoOR8zoajQaDydBa//+HfwCreXU9dP3fPAAAAABJRU5ErkJggg==",
          traits: ["無"],
          baseStats: {
            hp: 640,
            ap: 320,
            dps: 110.34,
            speed: 8,
            range: 300,
            rangeType: "範囲",
            kbLevel: 4,
            money: 2000,
            freq: 87,
            foreswing: 8,
            backswing: 8,
            tba: 40
          },
          stageStats: {
            actualHp: 640,
            actualAp: 320,
            actualDps: 110.34,
            magnification: "100%",
            count: "5",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2084Data;

