// Stage 1184 Data
import type { StageData } from '../../app/stage/types';

export const e1184Data: StageData = {
  eventId: 1184,
  eventName: "新年、あけてました。おめっ...",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 184,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "終わらない大掃除",
      baseHp: 150000,
      width: 4500,
      enemyLimit: 10,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "30",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 4995,
            actualDps: 8325.0,
            magnification: "500%",
            count: "6",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          }
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
            actualHp: 6000,
            actualAp: 600,
            actualDps: 268.68,
            magnification: "600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-30.0s",
            delayFrames: "500-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMEBAQEBAQFBQUFBQUHBwcJCQkJCQkKCgoLCwsODg4TExMVFRUbGxsdHR0eHh4iIiImJiYoKCgpKSkwMDAyMjI1NTU8PDxAQEBKSkpQUFBUVFReXl5mZmZra2t3d3d3d3eBgYGJiYmQkJCYmJienp6jo6Opqamurq6ysrK2tra8vLzAwMDGxsbOzs7X19fe3t7m5ubs7Ozx8fH39/f+/v7////9Ed5oAAAAQHRSTlMABw8aJso0/3/AUNRCnFvg8rNui/+kf5n8y7vX//LD/tz//uL///D/8v///v////////////////////////8ALy2ibQAABphJREFUWIXtVmtzosoWjeKoSYxvozEogrTYDf2AfgGC9///q7vBZJLMmTmVqvN1dipVaLlX78daq7n733+Mu78AfwH+AvwFeAf4czj97t1dx+k7nbu7bq/zL7/8XXQ6zuJx4XRGq8fZvNtfPDnNl70G81vpo+HiaTKYDh9ecLCZLPa7RRfShz/uR98DGO0jfzMYDCaPbuhj7ySO815nNJsOpuNv5XcXAdktB00sN0jHRY4PT6N7+PhNAGcW7FaPLYCHVWmtkdHkfgpwk7HznSk4s3A3nN0qwBxHEca3lja7/XYx+jNEp+v0ek6366xd9PJjcENwsS3LS5lnxPMSY01ymDuO87utOuPFavv6sl2tF7NN4E5vAIMNq69t1CYKeG60Ou232+d+pwPnfSqmM1ofojjhJE4ihDCJkHsrgIiE26quL2XBPZQyfjGRH/j75+fhYrXofeS/RCw1gjMlKWXcaM1cd+nGOo+WSy+KMQr8zTJJY1pgLCnCMdqh5Lx+B+hviW5CGcO41oJlWez6Lq6quN3nbamDKOXGorzMNdTIy7o4vve/PlupDeepkTQzUkMVOPBdeTW+64WDDaGx56IgvtR1EeexHyubFwyr8xvAwyExqW6KN5axLDWMGUKwn9cUZpJswqLWQXIpq2aYxYUsl+RSRssNO93yu6uIKs0hP9NKpwKgmIkgqjqzecJoWkgcF9f3sFCd0q5H2P4GMHolXAPfpFbwY2NTRpkKXTeur/BXFbnN86K+fkRVCmOptccbtXuzkBnJRCYFY5xyA7WozPc3/PrHuOjM1ua13zYwnGIlWaZSSoUxKdUpdEC90NMfCXWulC2hirq+Xi5VZWDX1hwfGgqMJy61nBtlGNUS+teaMs09z7NwUnFpD+QxS+KYCSHy2mojOReURLumhd4e+crC5rnJgEaCC2sFFTzwAaAgiJTQM6eGAkExSajIBGAREFi4WwETO89x4jOpOUut0RIoaFJhAB6RIK8INhKmbxJLgERhCFk+qDMIExpQdRy1BVjuJ4BggH8CklPWbEJRxMLcICNVfa2o5lF+rWlSXtKoqEoSlxpp2wKMT2USZsCANJMpTJICGxjlkvkoyDnWfpBf88RGKUyCh1TgELoP/dPx9XBYwRJ6qzMNAi3SxndMyjUDKsOMUg4ctiyyJLBXwwVUw2whaAKjRCTajkf9fuv4/afV+jGUGeUWhCKYhjYyYIliIAWQIkZxdVUpdlm4hFpgi7UhsL6fjtJxur37CJYP1AESgQqACiIzLPFd8BKbcFhCroMl+MNStIxIEr13PltR74XmaeMBUkigMU1hmxmXwPeoeqNRtllG7nJAGjpfoow+f/HF/mtigUNMKK04NMC5NFybDGHf3vJLNHAxWAJqAHNsTw9fzHB0iCUcDCEyRoW2FkgBg4AeSFtCRcGSG4drASyW+94XADCDZncZkL2REZNQDqhbBEvPo2V1sbH3ZrBtCxqz9VdnHx8hjSolGjsDVYEWGiIo5EENYRRBK28GLdt5kPj5q6vPT40NaJUJzZQCT1O5hYXSEGPP3yBgyBsAanWlyHn+KwAHCQoNagI9KQEVGKiBhsTC8bS+WvdmrPjmF/g07Ha7nQ+Q+VkKC+NjUlGpBQdhpRmnSUAqG/ngShpmuPRCBDLyQJGh97peLBZz5wNAgze0jt5MEEQFmjQcAOorULG+qs0yYLYEPVmUlSUhRvgkOfQ/tSCBwZlphMRTAZ6WahA0IuA+HMhUhEGmRYwCuGPh0goikXg4Pvx82RgfM5Ol4DGQBELSXOhmGTyG6q86BDLlMawike3VoyVLCIYLO/y5TABIgYRGSMkaOqvGVROqEwy8KaMEYKqi/GzKjVlXxfGNTp35ScKlIHiMMWacJ4LEOAwjgqJmbSK0v/fl6jx6B9iRhKAwRHAje2ETCFPYZGqbU8sIiS93wnsUx/cp9uaL2S6W+aUqkEektfAE46ubrKK4FjE4oL38ei/Y8wehO93+4VanjbyQ5yXkN1GVeYwv18omKIiY0nCf5hakpsB/TvvhZ0V112+X0EUGr4cQ3jQgSBTsJrsGuS4V2b0GCIXt/267fh71fhHU6a3GOl4MTyCEJsLZ+GElbt/b/fAYoZBBBXzb7/zjHam3l8Utzk/zo2mf8vOi31+cVLv9ZPuwmno4g3sjXv3mHav3tNvtvCY2k8ep670/Pk6mm1tM4HHZPk3vh2PnV4Bufzx8ms3u73/8e9zfz2ZPw4ePl+7/A2A9jCy+mdoxAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 4995,
            actualDps: 8325.0,
            magnification: "500%",
            count: "2",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 70000,
            actualAp: 4995,
            actualDps: 8325.0,
            magnification: "500%",
            count: "1",
            spawnTime: "23.3s",
            spawnTimeFrames: "700f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "434",
          enemyName: "獅子姉妹",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 140000,
            ap: 8000,
            dps: 2727.27,
            speed: 10,
            range: 375,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 140000,
            actualAp: 8000,
            actualDps: 2727.27,
            magnification: "100%",
            count: "1",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "知らない親戚",
      baseHp: 250000,
      width: 5500,
      enemyLimit: 10,
      requiredCost: 180,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "45",
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
            actualHp: 60000,
            actualAp: 4200,
            actualDps: 1431.84,
            magnification: "1200%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "171",
          enemyName: "レディ・ガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIFBgYHCAkLDg8MGxAVIB4WHx8VISAXISEYJSQcKCkcKycfKywfLy0fLy0hLiwgMS8BQDsiNDMjNjQlOTUmOzgnPTopPTsqQT4tQj4vRj4vR0QvS0YxSkYwTEczT0s1Uk42Uk45WlRLWVk/YVxAYl5BY18Bf39DfkNLdG5MdnBPfHVSgHpSgnlVhX1Zi4Njl49imI9oo5lqp51vraN2uK1+xbqF0cWK2c2Q4tSX7N6c9Oag/OxUEvQ8AAAAQHRSTlMASYT/cWD/CVL/rSWHLzwXR1z/CwSheiTLajKv/guRguzen8z+sQTo/8ECBP/U8P/N4///7P7z//3/////////BlNmiwAAA/ZJREFUWIXtVmtT6joUxVuMVgFpqyBYHkrQcE5KDgmhO0nb/P9/dXfRGWfueA/Bz67hA9POXt2PlbXT6XyBq+skGY6zX1+9C0LW2x72xXr0fZLBrvGNg33xMunPvhF/15+Db5QylYNiMf54+jp7DYz/PVmNVrZhUUyhaWAzaB9m/cnL5CqM4HUO+yW1PIqiWNTebW47ndtFAWZ1F0Ywm1tfadMSRITX3rxkgw24Bkb3gQQL6xFIQPCnvN8na6O5K8anY9+RQEsgolipNMor754lI9wsslCCwa4lkBFrvIkJsqmcRPIwDI3vDJcVEgDJqwYJSu9NytJyPw2Nzx54W0PNCGVpRAAlxRR1xW0wwYtt2hps3nYxtqUsWcrdn8AhIibHJtaVoThIFATVnKnyDIL+rs0AjK84Nk/nseSMQ3gJWINrp4B51DIuGSGCkdTs+sEEneu99w2D2rlGmzyKOMde7oKncGyjr/PSSu19lUYROxIECxHFPAIkEJaLytqYRLkkBM5o4nEODaM2z41AKZFUE6L+nGMt/aLxMkUh4AixhBjw31kEV3PjXV5i6YRiEwnwiBXhJWS3w9G28aUoSXQEKWU4wewueSn2qCLflEcptpCa0ECCWbLavx8FRAPxOwEzcSDBLHlz/hONjqOYETwQKduMQwwl2bVWUIOSnHNZ2kqjIbAoh5Rveten4/tF3X7XlqVuyycklzKVJuU8lS9PTydtPcPpeacY5U6lpHWDiFApa15Cvp2sd4NTBO1Kgxy/C+I4QMrRDFNoFHhYDtawOJFC1i4EpUuwKo1TPANEVyhEBhS9/TBfn3S1WxRw5XxtcS26ygJP0dMhThkVuGwPSwOTvxP0V/vdSjS1/Zhk44S0UkilJG440MJs/p7C/Xg67T9tlUYc9rutNiXlUEswzLk8ZYptJ6e3290wGfV6o2TYv76hVFY1trASrkwNF4w/Bhnj6+9XvApkkxVVVnGjS68EpEYxbpYBYvpANjpYipbcCtKDrmWeC+F0L3BDdzrjojacacZZqdCdhVbKosPdhCewLRnNmVYVKJwuU1oK0diHwPj7yRujlCotSqMpCtzgNKFqYBF4URoXQjrLK2+wD1yjQVQGBN8+ha6nhHKUr7K+keiOWD7qym0fhqG++DqXVjjfVo+d87Viuq4Oi3Bb/TUpdqvN/rCUxkqmDR4LwR7O2SzZdDq+mw4GD5wJBsBKDrvwK84nZmsjagVAgeeP5yTwSWCFVcvlDX18W3/n1nyfvNF8+fA8eps/nvCC/0GWPD89j3qDXn8afEv8D0N32BtcdQKv2V/hqpMFH8Af/OAHX+Dq4uKy2+3+06Lbvby8+NrQ/wUXS7r9c8boxAAAAABJRU5ErkJggg==",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 17777,
            ap: 777,
            dps: 264.89,
            speed: 15,
            range: 370,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1555,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 44442,
            actualAp: 1942,
            actualDps: 662.23,
            magnification: "250%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "16.7-30.0s",
            delayFrames: "500-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
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
            actualHp: 60000,
            actualAp: 4200,
            actualDps: 1431.84,
            magnification: "1200%",
            count: "1",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "171",
          enemyName: "レディ・ガ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAACAgIFBgYHCAkLDg8MGxAVIB4WHx8VISAXISEYJSQcKCkcKycfKywfLy0fLy0hLiwgMS8BQDsiNDMjNjQlOTUmOzgnPTopPTsqQT4tQj4vRj4vR0QvS0YxSkYwTEczT0s1Uk42Uk45WlRLWVk/YVxAYl5BY18Bf39DfkNLdG5MdnBPfHVSgHpSgnlVhX1Zi4Njl49imI9oo5lqp51vraN2uK1+xbqF0cWK2c2Q4tSX7N6c9Oag/OxUEvQ8AAAAQHRSTlMASYT/cWD/CVL/rSWHLzwXR1z/CwSheiTLajKv/guRguzen8z+sQTo/8ECBP/U8P/N4///7P7z//3/////////BlNmiwAAA/ZJREFUWIXtVmtT6joUxVuMVgFpqyBYHkrQcE5KDgmhO0nb/P9/dXfRGWfueA/Bz67hA9POXt2PlbXT6XyBq+skGY6zX1+9C0LW2x72xXr0fZLBrvGNg33xMunPvhF/15+Db5QylYNiMf54+jp7DYz/PVmNVrZhUUyhaWAzaB9m/cnL5CqM4HUO+yW1PIqiWNTebW47ndtFAWZ1F0Ywm1tfadMSRITX3rxkgw24Bkb3gQQL6xFIQPCnvN8na6O5K8anY9+RQEsgolipNMor754lI9wsslCCwa4lkBFrvIkJsqmcRPIwDI3vDJcVEgDJqwYJSu9NytJyPw2Nzx54W0PNCGVpRAAlxRR1xW0wwYtt2hps3nYxtqUsWcrdn8AhIibHJtaVoThIFATVnKnyDIL+rs0AjK84Nk/nseSMQ3gJWINrp4B51DIuGSGCkdTs+sEEneu99w2D2rlGmzyKOMde7oKncGyjr/PSSu19lUYROxIECxHFPAIkEJaLytqYRLkkBM5o4nEODaM2z41AKZFUE6L+nGMt/aLxMkUh4AixhBjw31kEV3PjXV5i6YRiEwnwiBXhJWS3w9G28aUoSXQEKWU4wewueSn2qCLflEcptpCa0ECCWbLavx8FRAPxOwEzcSDBLHlz/hONjqOYETwQKduMQwwl2bVWUIOSnHNZ2kqjIbAoh5Rveten4/tF3X7XlqVuyycklzKVJuU8lS9PTydtPcPpeacY5U6lpHWDiFApa15Cvp2sd4NTBO1Kgxy/C+I4QMrRDFNoFHhYDtawOJFC1i4EpUuwKo1TPANEVyhEBhS9/TBfn3S1WxRw5XxtcS26ygJP0dMhThkVuGwPSwOTvxP0V/vdSjS1/Zhk44S0UkilJG440MJs/p7C/Xg67T9tlUYc9rutNiXlUEswzLk8ZYptJ6e3290wGfV6o2TYv76hVFY1trASrkwNF4w/Bhnj6+9XvApkkxVVVnGjS68EpEYxbpYBYvpANjpYipbcCtKDrmWeC+F0L3BDdzrjojacacZZqdCdhVbKosPdhCewLRnNmVYVKJwuU1oK0diHwPj7yRujlCotSqMpCtzgNKFqYBF4URoXQjrLK2+wD1yjQVQGBN8+ha6nhHKUr7K+keiOWD7qym0fhqG++DqXVjjfVo+d87Viuq4Oi3Bb/TUpdqvN/rCUxkqmDR4LwR7O2SzZdDq+mw4GD5wJBsBKDrvwK84nZmsjagVAgeeP5yTwSWCFVcvlDX18W3/n1nyfvNF8+fA8eps/nvCC/0GWPD89j3qDXn8afEv8D0N32BtcdQKv2V/hqpMFH8Af/OAHX+Dq4uKy2+3+06Lbvby8+NrQ/wUXS7r9c8boxAAAAABJRU5ErkJggg==",
          traits: ["浮", "エ"],
          baseStats: {
            hp: 17777,
            ap: 777,
            dps: 264.89,
            speed: 15,
            range: 370,
            rangeType: "範囲",
            kbLevel: 1,
            money: 1555,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 44442,
            actualAp: 1942,
            actualDps: 662.23,
            magnification: "250%",
            count: "2",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "434",
          enemyName: "獅子姉妹",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 140000,
            ap: 8000,
            dps: 2727.27,
            speed: 10,
            range: 375,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 210000,
            actualAp: 12000,
            actualDps: 4090.91,
            magnification: "150%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: true
          }
        },
        {
          enemyId: "038",
          enemyName: "イノシャシ",
          icon: "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",
          traits: ["赤"],
          baseStats: {
            hp: 400000,
            ap: 4837,
            dps: 13191.82,
            speed: 14,
            range: 130,
            rangeType: "範囲",
            kbLevel: 2,
            money: 2100,
            freq: 11,
            foreswing: 8,
            backswing: 3,
            tba: 0
          },
          stageStats: {
            actualHp: 800000,
            actualAp: 9674,
            actualDps: 26383.64,
            magnification: "200%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "20.0-20.0s",
            delayFrames: "600-600f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "お年玉でレアガチャ",
      baseHp: 350000,
      width: 3800,
      enemyLimit: 10,
      requiredCost: 210,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "5",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "60",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "018",
          enemyName: "カオル君",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEDAwMDAwMFBQUGBgYGBgYGBgYHBwcICAgJCQkNDQ0ODg4YGBgZGRkcHBwhISEiIiIpKSkpKSkqKiovLy8wMDA2NjY2NjY8PDxAQEBISEhKSkpNTU1YWFhcXFxeXl5gYGBjY2NpaWlxcXF4eHh+fn6GhoaIiIiSkpKUlJSXl5eioqKqqqqurq6xsbG5ubnDw8PLy8vV1dXb29vg4ODl5eXp6enw8PD29vb8/Pz///8HFoUmAAAAQHRSTlMAAwkRq1pwkk8ZQIKjIys3Z7NO/lyRbdz/xqkZgpXr/6zLvv/y48v+1f7f7P700////dP//v7//v//////////NISuswAABAhJREFUWIXtV2t7ojwQ9fK2W2qVbtde1kKx0orYuMDmBiEZ//+/2iBFUYLa/bCf3mm/wJM5njk5MwmdTmt0Lfvq9vbW7rUvac/tWfbYmS0/VqvVwrW7X8zuj8bufJmwHADWIOniwfoCRG/0MF0mXMK6CsiT6V3/3HTbWRCh1vuh0tX0PCmGzpLKtSGALZzRyTq69pQoMOXrkGThDI9DdO05a0vfQODZ+KgUwxk/kl5IIVau1Z7fu0+O/X4pBZ4MWwGu3/NT+ZoEnrZx6N3jdgI1UxCnZT9Hr0cIgNrujlzeGfO7t6sjCkCepVwoKJYw10ihP2FHiweVEkyo9qhajIwVvJyUEHKCuVwDdU1usN8NHjx8A6A0gPq4MzjyziBBm62zmcEMY9JcmDf6CgRN9YhIxk0KjkHD7KCtleAkDKgA7p4FADzdUwEEY6lGiAQ37KSRQbJXQ05opiDFiFHnvBJkRPce84IPIZnA9+0MIE+3Ew3iurKf1ZBQSjRpOqEEgDUNURjxTwhSHxC6H6R2dOSJ3GtnIEMic4IiVkAAq2mQUZylFIUokjIYtGpAkSA0l4kfFwi12a7SNNXNpDYNRQ274JZsYxw/+UEiaCj2S98LMWtOlZKBQjT0SeJ5cVYlHrqpVLdpxQfyCYAirLj3lFaLOTVwyKaNbbCXG9kinLAoVaG/rUDFGmEPQz/A6uGQQs/ZjMQMESlYEsS7TswxrhsSNg/54vqQgjUtuALxqYijwAuSrZ1UjGv5rJy9fNaQcTQXxWrkERqhwPN2LuRoJ2Qe0E0RatkA6Dob58vYC1kSYbI75mS8q0H4FHjMFJ02AKqhBNTzuZYA8gqh7kjQhsRR9OEaJutoUTIF7nthzIhfnTRQn2361gIqm9vN/E5/Wm1+Gjz90H9+1nTAZsAnUTAxMOiOV6paw2mMIq8xJ3VhGcZxFKG3CxMFl9QOQUVCpPaS9b+kSYwCP/AfjafLUN9QdhlKoLQOAMV+oFDLI2T2YT4hh+4qrzUgrY00IHKdx2FEy83hrhGg039YkN0UUDUPQyIgCYv6E5zExOSDUsmRvucZOlgbINNjlTGCvB86Hs0lFNEbuR+ZqYU/rQk8IW83R6+NvTvTdU0xXhkq/dl+Uyrr0BdGw1ktq9LY5OS1dWhC2LZHZpiJTQTclLLqKlgNTt+ch5OQN0iIz+7IXk9T6Ay/vcRiCwF7NZjmejP6F99fEOZZLlVxntRbOjGcbYboWleD7z9fX+fvb28hitl2SrKZsZWMGH3Lsob21dXl4OYxYHLzDUSmX/2KKpC6vevBZP7r9+9fc+eEjY7SeX5+tv7mO/D/+Oeh97yMfi3KN90zHGRdXA4Gg286bv7bxU3xQr+/vDhooz/jnNeLeV9L2QAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 99999,
            ap: 2000,
            dps: 219.78,
            speed: 1,
            range: 340,
            rangeType: "範囲",
            kbLevel: 2,
            money: 4000,
            freq: 273,
            foreswing: 34,
            backswing: 10,
            tba: 120
          },
          stageStats: {
            actualHp: 599994,
            actualAp: 12000,
            actualDps: 1318.68,
            magnification: "600%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "3.3-3.3s",
            delayFrames: "100-100f",
            baseHpRatio: "100%",
            isBoss: true
          }
        },
        {
          enemyId: "434",
          enemyName: "獅子姉妹",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 140000,
            ap: 8000,
            dps: 2727.27,
            speed: 10,
            range: 375,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 280000,
            actualAp: 16000,
            actualDps: 5454.54,
            magnification: "200%",
            count: "2",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "40.0-40.0s",
            delayFrames: "1,200-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          icon: "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",
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
            actualHp: 82500,
            actualAp: 2700,
            actualDps: 3000.0,
            magnification: "150%",
            count: "3",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "113",
          enemyName: "天使カバちゃん",
          icon: "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",
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
            actualHp: 82500,
            actualAp: 2700,
            actualDps: 3000.0,
            magnification: "150%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "115",
          enemyName: "天使ゴンザレス",
          icon: "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",
          traits: ["天"],
          baseStats: {
            hp: 98000,
            ap: 5567,
            dps: 10438.12,
            speed: 32,
            range: 165,
            rangeType: "範囲",
            kbLevel: 6,
            money: 500,
            freq: 16,
            foreswing: 6,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 147000,
            actualAp: 8350,
            actualDps: 15657.18,
            magnification: "150%",
            count: "1",
            spawnTime: "86.7s",
            spawnTimeFrames: "2,600f",
            delay: "23.3-23.3s",
            delayFrames: "700-700f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 3,
      stageName: "カタログと違うおせち",
      baseHp: 400000,
      width: 3600,
      enemyLimit: 20,
      requiredCost: 250,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "2",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "10",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "75",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "037",
          enemyName: "まゆげどり",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 10000,
            ap: 3000,
            dps: 775.86,
            speed: 14,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 116,
            foreswing: 44,
            backswing: 72,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 9000,
            actualDps: 2327.58,
            magnification: "300%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
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
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "434",
          enemyName: "獅子姉妹",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQECAgICAgIDAwMDAwMDAwMEBAQEBAQFBQUFBQUHBwcHBwcLCwsLCwsMDAwMDAwZGRkbGxseHh4gICAlJSUmJiYpKSksLCwtLS00NDQ0NDQ6Ojo9PT0+Pj5LS0tLS0tQUFBSUlJaWlpiYmJjY2NnZ2doaGhra2twcHB6enp+fn6Li4uQkJCXl5ebm5uhoaGlpaWpqamxsbG4uLjExMTNzc3T09Pa2trh4eHn5+ft7e309PT8/Pz///9702Q6AAAAQHRSTlMACOeFtRLW/mHGO3Mfky9RR6Fv/1U747mA/pZmq//P6pir/dvA/6nP9OD/2P//7v////H//v////7/////////4EsvLQAABmZJREFUWIWdV4t2okgQ1SREY4gaceIjYkYioyLQ3dLdPPrB///VVmF2NzNxVnbKA+Lx1O163aqi0/ksbv+xPx663W7nD2W4jtP0uN3Mx+6fYTibwhpd5TzdfZ/+EcY0VYXIMi6r4rSbD/8vRNd1lqzIRUaJMFaL3cT59GeLyAxXr+NtYa3OM1bV1lbp0v3QHk6Wqyf3qgOn049VKCtrFZe2rmtNVm6jvjycZPLsXAN4za2MgphKbasGwJp06XS6053QVr0PrrrwKg0n7BwBZS04Uev9pDveldZavrweg8lJMVronNKqxvNB6mLd3xbwwxzGV/U747RiNLdGEHTAFILnxrIXjt5U26shhCy8K0GYVA2AzSkh8KBCCEBt+bxFUbizXHNCGKVgtM7gKcsqS6NMGpuOrut3Jy/UaskzsLyuCwrZMErXeUiYModhC4ClKMFYYwxeEnOBsaxCQkv93iIE3bmsz9GvBOMZ+oFiYikr1SaGUIm2ORPdhwCoM5wmQNFqe7UMQYY7XSNCAfGnNNPN+QVPwLCyFYCzklg7VhIqyqpCc4ykLMkBYN0GoDM6SJErKKSP+AEWJTyBYJSzVgDOilPKBGPnUjY6Z0QoUgLAphVAZ3po4sehDoCQGYPztaX/A8CdUdYUcK0lPhAK/YUBXrFqBzBcy0oyOBLiQGjGmlxmkVBtLXBmeW0qoZBJWa4lycAZqOVMtkoj0iHFYrZQSkAjyCdGQ4UJyVoCAKNLTEBJSd4URBPOBFjZFqAxAXoBOm+BUFmptRG0Em0Auu5w1J+/lVg/AKBgQEAkWSZEbNTWcdz/nlXd4Xx7SE9c6PpczAy1GaNJHAW83E02u+3cdYe/G1fOZIcNqOnm6AJmUZZKVXkcc0HiYF8afVptj8fvF1uLu0wrBRaLZhwgHxlMB3wWBL4NDQLorUYq6DSbC60B9GF0AHM+OAy9tTQQxbLIkYvQU33fp/pMsHT61f55amwJE+U8EWxBGTa3kpMoDKva5Hnse94iEhIlmX8b/JKT6VHXMJQwaoVtzBaoz5IwlqU1FI73eiAe9FcgWJoe5j8hDLeQOs0IRs2cWxr2dTg/0Thhg3jhLXpnBMpJzI1K+5+S0Z3j7FEMmIs9CALfeFLQJELgJEz8nhctep7Xaz5eUP7MTmyFaEGO1pcC5gqhCv2giYFx7cd4OmELz/cWHqD0/LKuPrGzO88wX4ZXGD6G1UPAAhzUiZGBjyo9jxvmgzr64lH7E4CzhW1ElzpXjfe8VDCUSgSIYy38xvmFL6xMvEUSAkaosUP9WwzDNefpISiNQRZiO6wYkUaxMCqtTgLfDxkNI5lnXmhU6GFkNHn/Pv07jM54Mhn1X3iljSm5KKF48PAo8AVOKQWZsTwKs4p7gbbEI7HgSZSXx+nnVLqPs/X74Xg8vK/X67cgjGKWROfKQxFxxHUZeKSIPCiuBIaolen852oEoqEM5uuYAJE5je0ngCROJMc0+FmclAUzOsl3XznR6X7bpExyBOCRquuP+ZLRSgnACPyAJFJBs1RVdgkAFjLGOdAar4iojwFVEqAGlCbEJQgSksSNRKuvAO6aSVhUqRCwZmRxFDcd0lBsE5YtFiFIFH1cQf8rwHgvMuQErClCZlkcNiO+QkrUOZQQh0W4KCRcQubHC51lDq4DRJYJ/JZxU6PgAfZmCgUVwNFRc+33+wuLY3dJwHTeDCUGW3t0XlkURYAMeERzWP1yLnKZiUuLozNLOJjO8MOFoBFtLDDN3ghFuCAQnyyD5slIemnvc2ZAoCQMkDVBlES+L3DlqosY5wPwm/wj+9Wlpcl5Xr81refcPZBFYRQKIDlNKPaiRpL9jx8/Xi8uXd3h8Ln3RQjmEAZUI7qsxHfX+f2Iebz5AhBA4WvWvMMoI3e7zX/unO6oj0bcP93D/eYe4e7foYZfVsd0t9rBWHGvTcnuLSjduneg2R/D/aY/Bpg7d/jNvTYeP2xA1cEYLHjqDu5RdQAAt23f4NxX9OBpco9Hjx7wPkAzWrxuNOJsTlHv5m6b+r2Hx9XB6908zdegf9tyv+h8O5nkoT896ePt8PWk9nej11Px9tBvq9+Z7tlm4Ez2BFaBJc83A3cuIO+tX2Gdydvi7un5wV/cPzy8hEFzf3t+HP06TX8LMOg/9h8fb59uQZ5mz3B/nj31+6PB714X/gKiQ36rrcf3rAAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 140000,
            ap: 8000,
            dps: 2727.27,
            speed: 10,
            range: 375,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 280000,
            actualAp: 16000,
            actualDps: 5454.54,
            magnification: "200%",
            count: "7",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
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
            count: "20",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "3.3-10.0s",
            delayFrames: "100-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "037",
          enemyName: "まゆげどり",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 10000,
            ap: 3000,
            dps: 775.86,
            speed: 14,
            range: 340,
            rangeType: "範囲",
            kbLevel: 1,
            money: 800,
            freq: 116,
            foreswing: 44,
            backswing: 72,
            tba: 0
          },
          stageStats: {
            actualHp: 30000,
            actualAp: 9000,
            actualDps: 2327.58,
            magnification: "300%",
            count: "3",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "10.0-10.0s",
            delayFrames: "300-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 4,
      stageName: "全員アウト～",
      baseHp: 450000,
      width: 5000,
      enemyLimit: 10,
      requiredCost: 300,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "3",
          times: "1",
          limitText: "1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "30",
          amount: "2",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "156",
          treasureName: "にゃんこ福引Ｇ ID統一用",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "125",
          enemyName: "天使スレイプニール",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAABAQEFBQUGBgYICAgJCQkKCgoKCgoLCwsODg4QEBAUFBQYGBgnJycpKSkxMTEyMjI3Nzc5OTlISEhKSkqLOwZXV1daWlpoaGilXhinagV3d3eycSh+fn66cSeCgoK+eSiNjY2/iDmYmJjMnhLMmkjYmivWmy+hoaHRqA/ToT3XqzOtra3ZrmDjvEO/v7/lxVHjwm3qz27Pz8/t1YPw2oTc3Nzy35Pz5Jr//wHn5+f08ez6+vr////////j/zl2AAAAQHRSTlMABxEcJsj/MqTcRFWHZb56j9ye/K7GDf7Z/yAI/z3of/+W/1n+KGLMsP8RkEf+w2T+gNum/urD//TeAf/+/wD/DWsFhwAABU1JREFUWIXtV1tb3DgMJRcSmjBXT0gMnqwxZouhpoaauq3t5v//q5UzF2aGaUl3X1cP+TIhOj6SjqRw8vM/2sn/AD9PhtqPq3uw27WF+6vBvmBX97efPj/cfdzY3cPT50/398P9P335/vL8eHd9/Vew6+u7j88vL1+fbn8MBFg+e/d4s7y8urq4Wtnl8uHFu4eLgQCXj9+c+/71y9PT596enr58/e7cy/VQgIvLm4fH55dvOwYRPSyH+geIi4vL5fLm5u/ebm6Wy8uLP3B/tR/B/pXnSVJErz/Wt0mZDAfIx8X2Pi7TgFIsxukfADRVuT44nVY5HD9pxTT6vdOuxQvVTpIoiuJ8oWQZ5Qtp23y4/0k0UU4spvPJoiJazyet8epPCERx0VoviVbGSEJrYTvbDM9AnE8WDRLeMdWBqVr5zovRUAJRMW8ZqTFRnaLed51kcDWLeKB7Pm21oYwYTa3lFhho5jvXFu/7BksnjXJecCY7r23ngIBRVCs5H0YgVAvoEk2NCYeDeU6pIuh8SAaiooJ0QdBUYcs1OBtrDMWAh84GMIjKxvRnMiZrXQsnFWWUSw71aAfUIB61ptsAII64rjEmNXUOMqEn7wIkU5DOKmxJZV0TQplQiq9IufY9GUH63Op8UA6WhEge9NOtMTv9eyHH5Sp9wawmmNZMOQP62Tx8RwhA32ze7ASjApGa6EDHbxH0ESVAtwZecT4Vbl10qBxnQiKMMAf9cczWzLw7bKYoKaeL+bRMR+MZd37t7jQmAEAQqiXwplmG1tz8/jiI0knFtdGqqVrcJytAWCkoqoVyimAm4JGleJMbM9tlkIwqqWUQa5B98FcGrnA8qWsDzaCoIK5nvsmB2tEizEdhDe0Dl5jaXjwK8BSqqVQhdis51d2uqa2UgH2rvQ8qgaAZ6ZvGEhgbVmBiAqrh3lAYA0cBYmAPLzmGEYcwCORIay9qiQSDJ72TlpA/Rc0uwEbM6bw1RsNrTtVQKxhcxmJuCOaE4FqvDgWATkIXvVLwGymmC6E5lhbe9NZqjbUl0DkQMZcwhdYeWvgQFNlSAEHZKuyl9GzWQJ14LXyPIZlViGIGM8c4a7dqZg6mqIA+Ds5WS84Ya4pedMUZaqsZzGsCatdEM4Jq0JvbS5gP08TAIIJprsBZSKg2WcUQFaMiHzcNwnUNRDRCiOhadfumAwVJKZSCK4iPUMpZtd2tUZqXZ5Pz8XSmZdCst/4AwGJYRY4hROForox1kIU9LUdxlKRpIyjw0AfekHI1H1Vcwh+x0Jvo/NvdWCIMyXeH/kCgyaHXzmdo2wk9wOFEiKaA/4Z9sNUejYqx2v2rPJyLcWWOnN4XoVxTbHcB3my3vD12elDNJtp4vlueN0ko+VF/SMG2YDlsik0OQwz7KTiXvwDQ823njtrNhgtbcrHnX84O5bPN1ug1T5O2nyuKQGO4Zs+/wW8EsIl1p17xVEC3K5RlzL8CxEU5alhtBgBAGmBmyCzLCCR382zRUjSbN/ZXALvZTirLuSVZ/RpCsuCaj4u0cb8o494GSCpjiLEi9Ge1elSMx+NJegIAq+r0Tb9dQeFzaPeTFgphaJhNTrfr5MZpkkQrHYXN3Tt75/s70ObhtwAM0WrMjWoXo30lAgDMUuYto9Kb1TJ0WAHRg2/qKEmS82peHO7GwMAgDCgZdl6GOsFv0dljH3RR8vZhALAA0Kmsv2Q0XIFRNfCLMF0zAK/adToAeAa3b9bwcYvzUaNgosEmlBkSimdZrXWdIanq87J4/18LGDhnUM7T01kz+7Cx2YfT09Px2dn5KD/+QfMPL2DDNr7DIBAAAAAASUVORK5CYII=",
          traits: ["天"],
          baseStats: {
            hp: 363000,
            ap: 2247,
            dps: 4494.0,
            speed: 5,
            range: 372,
            rangeType: "範囲",
            kbLevel: 2,
            money: 905,
            freq: 15,
            foreswing: 9,
            backswing: 6,
            tba: 0
          },
          stageStats: {
            actualHp: 544500,
            actualAp: 3370,
            actualDps: 6741.0,
            magnification: "150%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "6.7-6.7s",
            delayFrames: "200-200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "434",
          enemyName: "獅子姉妹",
          icon: "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",
          traits: ["浮"],
          baseStats: {
            hp: 140000,
            ap: 8000,
            dps: 2727.27,
            speed: 10,
            range: 375,
            rangeType: "範囲",
            kbLevel: 5,
            money: 1500,
            freq: 88,
            foreswing: 34,
            backswing: 54,
            tba: 0
          },
          stageStats: {
            actualHp: 280000,
            actualAp: 16000,
            actualDps: 5454.54,
            magnification: "200%",
            count: "2",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "53.3-53.3s",
            delayFrames: "1,600-1,600f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 39000,
            actualAp: 4650,
            actualDps: 3402.45,
            magnification: "300%",
            count: "4",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
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
            actualHp: 39000,
            actualAp: 4650,
            actualDps: 3402.45,
            magnification: "300%",
            count: "6",
            spawnTime: "96.7s",
            spawnTimeFrames: "2,900f",
            delay: "10.0-16.7s",
            delayFrames: "300-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 98000,
            actualAp: 6993,
            actualDps: 11655.0,
            magnification: "700%",
            count: "1",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "065",
          enemyName: "獅子カバブー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 14000,
            ap: 999,
            dps: 1665.0,
            speed: 10,
            range: 180,
            rangeType: "範囲",
            kbLevel: 1,
            money: 400,
            freq: 18,
            foreswing: 8,
            backswing: 10,
            tba: 0
          },
          stageStats: {
            actualHp: 98000,
            actualAp: 6993,
            actualDps: 11655.0,
            magnification: "700%",
            count: "3",
            spawnTime: "73.3s",
            spawnTimeFrames: "2,200f",
            delay: "16.7-16.7s",
            delayFrames: "500-500f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e1184Data;

