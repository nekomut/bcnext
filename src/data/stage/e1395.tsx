// Stage 1395 Data
import type { StageData } from '../../app/stage/types';

export const e1395Data: StageData = {
  eventId: 1395,
  eventName: "ネコムート大試練",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 395,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "本能解放への道",
      baseHp: 2222222,
      width: 5500,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "1",
          treasureName: "トレジャーレーダー",
          probability: "0",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "022",
          enemyName: "ガガガガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAACAgIDAwMFBQUFBQUHBwcICAgJCQkKCgoKCgoODg4PDw8VFRUWFhYcHBweHh4eHh4jIyMjIyMoKCgsLCwuLi4vLy8yMjIyMjIzMzM1NTU6OjpCQkJISEhLS0tMTExXV1dYWFhcXFxiYmJlZWVtbW1tbW1ycnJzc3N7e3uBgYGHh4eLi4uNjY2VlZWampqjo6Oqqqqrq6u1tbW/v7/Dw8PQ0NDX19fg4ODq6urz8/P7+/v///8F0x8XAAAAQHRSTlMACBCL/z5KVh0nZS53/xQ3Qf+GqUph/1R3aZe9pv7jj//xo9ux//L/xObT/uD/8P/h/u7/8v//9f7/////////YcASAgAAA+pJREFUWIXtl29vqkoQxoWDrYqotJVqLbpFKB6XdV2BdWH/8P2/1R28Nyc5SdNCc192YuKLZn4+s/PM7HYw+Cjs4WIxtj/8U7ewH7PzMV4tRtZ3Ceur0UpcjtF6/i0hthvLxjSNltdztOgvw1q9TjPdEprG1Of17Aadr9ejroD4mm0JELTWptHF2hpYi+gsTovOAKUFk5olKMlVo7O5tT7XRh06K4gUaDe55ziOl6qmjpZn3TTXdcf8gbWroXoZOijHvpcbc9nnpNbHcVfAYFkAgHuQq4mT6KZOAo/IqHs7JhgUC88hGgBINxqHCFerzvn2BkMNCjk+TnwHGyNynLLrc3dALKF9TYXgEJ1ANIrwEPEeAGtX3TwkSRggbhqRcFTmPQCDp8KYxvBcSqmMMSQsmaB9AKNDawTioRK+G50EJSNYdD/EwWB1hUThO34qW0P4JUNpL0ArwegUzjDVAPJzEqTdjQhhvbZeZADwuQFHMQyAHmfwn5lzz0+IAIBDsIeKpx6AwdMF2pD7eesHAGDmhZdegBmsJI2QklWtYCoT4QeXHiXY7vNLbmQY1okfhIHjoCrwOwOs8TrOCiFl4vn85mbHCSvks44Ae7q/gv20JB7kYVgpbS8E9k/dzsBencACMk9CmGBhSkhHyPFKEnTbiNbqots59DxcKZiEKvAcJAIAhNkcNrP71VJZwPLTIDxgqsIgAoGCoCIASI7j2e58/ELGrXuwB0OhGfy2c/t4XAR5SiJ7Vcjz/dOniOfCNDIISGW4365kTEJgMIkIwsun8yVexUX2Sb4dwfBpymEH0CQJfWiDpLDUKMbJ+zTO1uPdtT5+AnAzrWoJ6XAfabhdSQhrFVycaybk6X1nP19O0WcljKNjvKHa3AIQuialhn0oFVUqZ/vJ4bj8/La2R/b4Zf/7BJEdD78vSmKS50RLpgn4InhbdbgbrPHw7v7+zh2Nho+4pFhLqkFBQjnCOJp9DfgT82hPVc2MItrkNUlLRMuiz2aNa86bKgeAbATlKcI573O/LQvDRQMKNG3dRWkpaKUPnWtwN3UDAEWhkcIYzjijpe4OmMUYhPOm/fmawoCUhLJKic4lPBesbvWbksPdKGBDKsnT/YvbMd/ayTaTqkZSZWrCajBn9jLufIRWXAt4lLCyrV4ZSZOyLnY93ozWMo4fdofD5sTLJC1LglK26frG+pdgW5Zlz9w9IzlTjAnC+tyNf2J+5rnC5ds73b51fSX+FW7GMd9uHzf7133XBvwV1nIbbjePDw+vk4fvPd2t5ebX43DoutZ3n/62Oxp++9+Gn/iJn/g/YnQ3mUynv24xnU7uP57JfwBG47Z/ChBmWwAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 5000,
            ap: 350,
            dps: 119.32,
            speed: 20,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1800,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 120000,
            actualAp: 8400,
            actualDps: 2863.68,
            magnification: "2400%",
            count: "3",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.7-0.7s",
            delayFrames: "20-20f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "360",
          enemyName: "エリートエイリワン",
          icon: "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",
          traits: ["エ"],
          baseStats: {
            hp: 7000,
            ap: 500,
            dps: 405.41,
            speed: 12,
            range: 120,
            rangeType: "単体",
            kbLevel: 3,
            money: 100,
            freq: 37,
            foreswing: 8,
            backswing: 8,
            tba: 15
          },
          stageStats: {
            actualHp: 161000,
            actualAp: 11500,
            actualDps: 9324.43,
            magnification: "2300%",
            count: "0",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "46.7-46.7s",
            delayFrames: "1,400-1,400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "warp": {
                chance: 35,
                distance: 750,
                duration_f: 10,
                duration_s: 0.33
            }
          }
        },
        {
          enemyId: "717",
          enemyName: "覚醒のネコムート",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 2000000,
            ap: 60444,
            dps: 19498.06,
            speed: 60,
            range: 300,
            rangeType: "範囲",
            kbLevel: 12,
            money: 4444,
            freq: 93,
            foreswing: 5,
            backswing: 73,
            tba: 0
          },
          stageStats: {
            actualHp: 2000000,
            actualAp: 60444,
            actualDps: 19498.06,
            magnification: "100%",
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
                hits: [60000, 222, 222],
                timings: [5, 10, 20]
            },
            "explosion": {
                chance: 100,
                range: 300
            }
          }
        }]
    }
  ]
} as const;

export default e1395Data;

