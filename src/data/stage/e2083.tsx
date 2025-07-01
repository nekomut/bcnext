// Stage 2083 Data
import type { StageData } from '../../app/stage/types';

export const e2083Data: StageData = {
  eventId: 2083,
  eventName: "ヒカキン降臨",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 83,
  stages: [
    {
      stageId: 0,
      stageName: "ブンブン Hello にゃんこ",
      baseHp: 3000,
      width: 3800,
      enemyLimit: 6,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1159",
          treasureName: "ヒカキン(133)",
          probability: "20",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
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
            actualHp: 320,
            actualAp: 160,
            actualDps: 55.17,
            magnification: "50%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
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
            count: "6",
            spawnTime: "5.3s",
            spawnTimeFrames: "160f",
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
            actualHp: 100,
            actualAp: 15,
            actualDps: 12.16,
            magnification: "100%",
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "10.0-26.7s",
            delayFrames: "300-800f",
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
            count: "0",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "40.0-46.7s",
            delayFrames: "1,200-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 1,
      stageName: "どうもヒカキンです",
      baseHp: 5000,
      width: 4500,
      enemyLimit: 7,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1159",
          treasureName: "ヒカキン(133)",
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
            actualHp: 200,
            actualAp: 20,
            actualDps: 20.0,
            magnification: "100%",
            count: "6",
            spawnTime: "2.0s",
            spawnTimeFrames: "60f",
            delay: "2.7-3.3s",
            delayFrames: "80-100f",
            baseHpRatio: "100%",
            isBoss: false
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
            count: "2",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "26.7-26.7s",
            delayFrames: "800-800f",
            baseHpRatio: "100%",
            isBoss: false
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
            spawnTime: "93.3s",
            spawnTimeFrames: "2,800f",
            delay: "8.0-10.0s",
            delayFrames: "240-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e2083Data;

