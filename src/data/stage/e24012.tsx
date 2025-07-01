// Stage 24012 Data
import type { StageData } from '../../app/stage/types';

export const e24012Data: StageData = {
  eventId: 24012,
  eventName: "ことよろにゃ強襲！(ΦωΦ)",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 12,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "丑年 Lv.1",
      baseHp: 2021,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 30,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90,
            actualAp: 18,
            actualDps: 30.0,
            magnification: "3%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90,
            actualAp: 18,
            actualDps: 30.0,
            magnification: "3%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90,
            actualAp: 18,
            actualDps: 30.0,
            magnification: "3%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90,
            actualAp: 18,
            actualDps: 30.0,
            magnification: "3%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAD/AAD/UgD+ZgH/awL/bAL/bAH+cQP/cQP/cgL/dAH/dgL/dgP/dwP/dwP/eAP/eQL/egP/fwL/fwH/gQP/gwP+hQD/igL+iwL/jgL/jgL/kwH+lQH/mAL/mgL/mgH/ngL/oAH/mjP/pAL/pQL+pwL/qQD/qgL/rAH/rgL/rgL/rgL/rgH/rgH/rwL/tAH/uAL/vgT/wAL/yAT/uVP/1gv/0Gr/5Sv+5kH/3Xr+7D///wL/8V3/7In/+ZT///9qiRoKAAAAQHRSTlMAAQQHHTgRZYFIWSV1rr+hkc4DOdiFFWdGcd4jX+VWCTpN/ikS6wZFDiozPB0iFQrwiQX1//j+/KH+tQH9/v4A5GHOOgAABJJJREFUWIXtltt2skgQhQU8G6NpFfDYGEgLysGg4jBI5v3fanY14iF/MslauZuVuojEsL+urtrVnco/P4zKL+AX8Av4BfyPAN8O5fuvfihX2I8Iiqox9QcEhWkI9o0XER99L3jk8kh8Q6+q6gd7zYTrulEUf6lXmaYyzv5AiMh1QjfmXxQBhVI1EQkuxP2bioA+DB3xJUDVuBu52G2c3f6BidD3/dD5MgPGI8cNndBxxR2BOX4QgBB9AWActaJcwzCK+JWgCCdAlICP+0SRcan3KV1XXAkZ9wPP84ICgEJ9uoVYuCQ/LxeXKwnH9wggiygE+xwgYgIEcjnfEaVv4tBbIwCghkb/4ScWRSHp7YLAz9blBcBzeCWL0IvsU4DCXUdul163kQO9qijcX282GwCYEod+eJfAu4oKNDyQeoTt6BqcqWq6ba1WK8vmgmOH7gWgMCbY/YAxVDEgPVa01vZUr1NMLXO5XAKgoZ1+aYYMjoVn7+dDEZEEbDZY0rQGnU61Wu3UzNlstljaum7bdsjKxck0juveVwFj59vrDVJeLhYLc1BDtNqN8XhsLAadqYU0KAEWwzLScc47AFUhWG9Wy+ViZhhGo91uNxoPzX5/NDJaA9O0phhVFsdR4TcakD8b4dsWycej0agpo9/rdnv9h0bDmJkdnEvclc325HyElRjeuukF4w6KNoO83yui231EdPvN/mjc6lTruuPDKGvvTKhgLzgqLgxF06fWwoBc6iiehsPh02MXaTTbtVpnattFn8ltBPDpw4nOvlPUemfQfiA9CYeTyZxiMnwCo99ot0zTXK3IWGuZAgDS+x6ND0yKU6neaTWaPZJP5i/b7Y5i+wLE8LHXbz4Y6CgRKIWAiugEpfc82FTT6tUaEug+Qr7dHY7HE8XxAMYEOfRQCKMkAODyCif7S++R36d6tVYkMHmBPH8r43TcgUCI0ZhyoJehhxMz6opdmI8sb5K+S/obuUQctvPhmQAA9KFbFD9jODKAWJH/ZuPxCAUclvp8X2CS/ELoA4BJoWOrPKeVjDshIZYzKX8aXtdP9ynpk0sOSMEwLZr2u5M3o7PbsxYAQD+/6PO3nJ5y+fN0oEr2moY5ddz720NRQBB8OmgDMJxvD6dCv39OywciHHdzNLPZHlQZy27WjmNO0+k6OjxEgN3x7UMAUpCAWlW7LI+77HyaB4FtmcYIFbwkQFs4fxYPx+2kAFz/WRBnMbnJWs6oBNcEzto82e+TJEEyp938CY5udeo8womEScShTXppxs0KNexSC5BAniRlHfP0Oc2T5wT9yOUeqA2XcRYXwGazXIz7BDgggzwFoNwAMoA6RS8PW+rDaFa62bvLoABMXmQJ0hSpX/dB3ySyCAQYF/MABNXACcsaLAyMUQHIKYF9elsL+o0AZKXF6gKg2yosCjk1ZRdfLk1I97eRyDZQHxuwoicjKH3AcaNzHUcB9nDbhSTNCz/uZU1RRHThodXR6SqHddyrE7OMaXQW9B4n2xtAfvdwkgBqo1po7i9Kta5bJgby9fUvir/fBX33+jrG4WxNy5u38i/J/U4nC5oZSwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "丑年 Lv.2",
      baseHp: 22021,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 40,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 900,
            actualAp: 180,
            actualDps: 300.0,
            magnification: "30%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 900,
            actualAp: 180,
            actualDps: 300.0,
            magnification: "30%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 900,
            actualAp: 180,
            actualDps: 300.0,
            magnification: "30%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBwYLCwsQDw8XFxcbGxshISEiIiIpKSkvLy82NjY8PDw/Pz9ISEdPTk5RUVFWVlZbW1tgYGBoaGhzc3OAgICOjo6WlpaXl5eenp6rq6usrKy1tbW+vr7GxsbMzMzR0dHY2Njf39/m5ubu7u7z8/P39/f6+vr///////8LtNfEAAAAQHRSTlMACBEeJjJCTFpldYKOna25xtXg6PD4//8A/wD/dv////+6////AP8A//////8A////AP///////////////wD/o9eFXwAABWJJREFUWIWlV4mSokgQbS9UPACFrGVYhAWH4XCFUVvFlq3//6vNAoTi6JmOmNcdoRSVr/Ku9O2/P8TbHxP8EuOVNCy//vX9x3fEj7/Xk1/L8BABYFx+//bj57+In/8AzL8qvwQvqAhQh2/f8H9leDD7mvwcXBpzBG9/sT9ZpyGMviI/BIPSCISeVV36CsEKzpSeYNlcFcCjqMLg9/IDzaKUpqA0l5cQUfre1qsPE7aTUpN3AkKFG6UPsuyVGQozUZxPCwkRLowgBmUh5VguxNlkCQGlWaavJ9PppGXHbK1BAVnE7FmwoxB2uUhI8emdnvQJ+dbtkrNkusE9erkZVBGDeMwJbi8C/XY6hjldFL72wfoV0Bl7Mgy9fqNgFjC8Nut6wZf4jK3atykJBIBD+sye9/PBrl5ecx+84NASWWJVi3WQpPJAdkhQHmFeL7WyRVBKxJUKlReGGvhIXry/utBFyhHQu12csaq9KIDu3KsNUUc+pk04jEHmwyhoQPykfH0mDWlCDvR5iaMwDKP4UuhpArRKYiQxu/dBFHq71vHECA3u0fAxyS7tMmFKrGS1x/ocuhudb4jrOfbwcD2hzqpDgNj0StvHe8MBz8SE6KANu/LLPnGz7cDCzSZ0CSZt21kFBFmPPHOi2lVAboqjuzBD+6QzFseuDwRCCCcNu2TPJeAtqTINOw11Nl0LZODiZwVnDJVXn3qCXZWNIaR+V4ERWPR6jMIgjA5J7nYCvP0JQPKS9zJ33RMCvmByTzcX7jt4Z59Htm53CVTyaDj8CaTtvCQ34p0psu/09kld8i+Vw9rrscWHMzaCLsGyXXFeoXChPXAFmT1Z++sQSM2SRwv0+iFFglP1lBlg2HKbQNEb8hjDkH8KeP3SQxq0CQaq1SQ4dppI08DKhOErC1o+DDgXNBE75i5yFKG4giZq+Qn75jYLssrvWZHEtzjybAf7dnkB5KkgE7kk8JoEBuAt6O7DA1Ok8O859D3PZtcbXrBOErKmNIFj4Y6OBuwqSVlx4P6YT0kT9qFvsGtjrw0w+gk1mD/GbR+wUYJpzv7NpF7PHh6rNZweMNUmWIEhZskCnUh2LQKTyd6P+wT1bba07KPwzhGHnW0Uplg1Qwyj/mzsIkaRPxjN9/KqbsPFq3Fzut3oBxExkVrHGAS13UfMhRlYfQwX1pTWPvvKWrQESeO1xzWDE+utJtEN3dztLAZ3v3dBHbGLnXHbYj4Wxr7nR6/0ORQzSoF3dhmYhq5XTY+AssozSNbjlBqLuiUT65i7/tzqp7pbf8/QQPFVAxKQ9KzNmBNet5DzYJ4Gm3ItIGvUVlqNFojp2sA4SHOpbugGs8uBBydybyh0YZHnWoFNrx4aV484esbSJOJUuDaK8wzTZi9gWfjhcbcKy2uDV6FJcGrNmkOZhPdnwt9L76xgbN6EY+WODF81NcC5cMsPX6UKAe84EqS3e5o+Hh/PjKZk0SJ4Gwg4pnIEeYNz8tLN0VAPoS37hn6eIU9eC/xC/mm6AU44ge97e9exLdcCtWc+wCG/Qt6EMxes97wjNSuNsvut97dPzXB+7YPw0RZm4X1Axw05RI03geXMDvTo2ib4uPuf/WoYLbcsGUleeLbj+nY+KwRh4O1sx/MtXd/tWFf9/IfPYKrgcE3KokOoqrrdFgMcLuO1pimK3P+jo4rGlUZbxb6b0ng8Hg0HwwEmG7Ysf7vx8lb4Gwy1E9XFsREQbusQ4g8QJnDzlc8lcdtoIszmiuWCJGmgbVB3NTdho2x1Q1st0ZSlMBn1JQGD+Oms2sJW7CcYCXNxsVqtNxtZUTZqeX6pg6Ypsiwp8mohzoUik/8H6InoAEs0xPAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 900,
            actualAp: 180,
            actualDps: 300.0,
            magnification: "30%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 2,
      stageName: "丑年 Lv.3",
      baseHp: 52021,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBwYLCwsQDw8XFxcbGxshISEiIiIpKSkvLy82NjY8PDw/Pz9ISEdPTk5RUVFWVlZbW1tgYGBoaGhzc3OAgICOjo6WlpaXl5eenp6rq6usrKy1tbW+vr7GxsbMzMzR0dHY2Njf39/m5ubu7u7z8/P39/f6+vr///////8LtNfEAAAAQHRSTlMACBEeJjJCTFpldYKOna25xtXg6PD4//8A/wD/dv////+6////AP8A//////8A////AP///////////////wD/o9eFXwAABWJJREFUWIWlV4mSokgQbS9UPACFrGVYhAWH4XCFUVvFlq3//6vNAoTi6JmOmNcdoRSVr/Ku9O2/P8TbHxP8EuOVNCy//vX9x3fEj7/Xk1/L8BABYFx+//bj57+In/8AzL8qvwQvqAhQh2/f8H9leDD7mvwcXBpzBG9/sT9ZpyGMviI/BIPSCISeVV36CsEKzpSeYNlcFcCjqMLg9/IDzaKUpqA0l5cQUfre1qsPE7aTUpN3AkKFG6UPsuyVGQozUZxPCwkRLowgBmUh5VguxNlkCQGlWaavJ9PppGXHbK1BAVnE7FmwoxB2uUhI8emdnvQJ+dbtkrNkusE9erkZVBGDeMwJbi8C/XY6hjldFL72wfoV0Bl7Mgy9fqNgFjC8Nut6wZf4jK3atykJBIBD+sye9/PBrl5ecx+84NASWWJVi3WQpPJAdkhQHmFeL7WyRVBKxJUKlReGGvhIXry/utBFyhHQu12csaq9KIDu3KsNUUc+pk04jEHmwyhoQPykfH0mDWlCDvR5iaMwDKP4UuhpArRKYiQxu/dBFHq71vHECA3u0fAxyS7tMmFKrGS1x/ocuhudb4jrOfbwcD2hzqpDgNj0StvHe8MBz8SE6KANu/LLPnGz7cDCzSZ0CSZt21kFBFmPPHOi2lVAboqjuzBD+6QzFseuDwRCCCcNu2TPJeAtqTINOw11Nl0LZODiZwVnDJVXn3qCXZWNIaR+V4ERWPR6jMIgjA5J7nYCvP0JQPKS9zJ33RMCvmByTzcX7jt4Z59Htm53CVTyaDj8CaTtvCQ34p0psu/09kld8i+Vw9rrscWHMzaCLsGyXXFeoXChPXAFmT1Z++sQSM2SRwv0+iFFglP1lBlg2HKbQNEb8hjDkH8KeP3SQxq0CQaq1SQ4dppI08DKhOErC1o+DDgXNBE75i5yFKG4giZq+Qn75jYLssrvWZHEtzjybAf7dnkB5KkgE7kk8JoEBuAt6O7DA1Ok8O859D3PZtcbXrBOErKmNIFj4Y6OBuwqSVlx4P6YT0kT9qFvsGtjrw0w+gk1mD/GbR+wUYJpzv7NpF7PHh6rNZweMNUmWIEhZskCnUh2LQKTyd6P+wT1bba07KPwzhGHnW0Uplg1Qwyj/mzsIkaRPxjN9/KqbsPFq3Fzut3oBxExkVrHGAS13UfMhRlYfQwX1pTWPvvKWrQESeO1xzWDE+utJtEN3dztLAZ3v3dBHbGLnXHbYj4Wxr7nR6/0ORQzSoF3dhmYhq5XTY+AssozSNbjlBqLuiUT65i7/tzqp7pbf8/QQPFVAxKQ9KzNmBNet5DzYJ4Gm3ItIGvUVlqNFojp2sA4SHOpbugGs8uBBydybyh0YZHnWoFNrx4aV484esbSJOJUuDaK8wzTZi9gWfjhcbcKy2uDV6FJcGrNmkOZhPdnwt9L76xgbN6EY+WODF81NcC5cMsPX6UKAe84EqS3e5o+Hh/PjKZk0SJ4Gwg4pnIEeYNz8tLN0VAPoS37hn6eIU9eC/xC/mm6AU44ge97e9exLdcCtWc+wCG/Qt6EMxes97wjNSuNsvut97dPzXB+7YPw0RZm4X1Axw05RI03geXMDvTo2ib4uPuf/WoYLbcsGUleeLbj+nY+KwRh4O1sx/MtXd/tWFf9/IfPYKrgcE3KokOoqrrdFgMcLuO1pimK3P+jo4rGlUZbxb6b0ng8Hg0HwwEmG7Ysf7vx8lb4Gwy1E9XFsREQbusQ4g8QJnDzlc8lcdtoIszmiuWCJGmgbVB3NTdho2x1Q1st0ZSlMBn1JQGD+Oms2sJW7CcYCXNxsVqtNxtZUTZqeX6pg6Ypsiwp8mohzoUik/8H6InoAEs0xPAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2700,
            actualAp: 540,
            actualDps: 900.0,
            magnification: "90%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2700,
            actualAp: 540,
            actualDps: 900.0,
            magnification: "90%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2700,
            actualAp: 540,
            actualDps: 900.0,
            magnification: "90%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 2700,
            actualAp: 540,
            actualDps: 900.0,
            magnification: "90%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 3,
      stageName: "丑年 Lv.4",
      baseHp: 92021,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 60,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 6300,
            actualAp: 1260,
            actualDps: 2100.0,
            magnification: "210%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 6300,
            actualAp: 1260,
            actualDps: 2100.0,
            magnification: "210%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 6300,
            actualAp: 1260,
            actualDps: 2100.0,
            magnification: "210%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 6300,
            actualAp: 1260,
            actualDps: 2100.0,
            magnification: "210%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAD/AAD/UgD+ZgH/awL/bAL/bAH+cQP/cQP/cgL/dAH/dgL/dgP/dwP/dwP/eAP/eQL/egP/fwL/fwH/gQP/gwP+hQD/igL+iwL/jgL/jgL/kwH+lQH/mAL/mgL/mgH/ngL/oAH/mjP/pAL/pQL+pwL/qQD/qgL/rAH/rgL/rgL/rgL/rgH/rgH/rwL/tAH/uAL/vgT/wAL/yAT/uVP/1gv/0Gr/5Sv+5kH/3Xr+7D///wL/8V3/7In/+ZT///9qiRoKAAAAQHRSTlMAAQQHHTgRZYFIWSV1rr+hkc4DOdiFFWdGcd4jX+VWCTpN/ikS6wZFDiozPB0iFQrwiQX1//j+/KH+tQH9/v4A5GHOOgAABJJJREFUWIXtltt2skgQhQU8G6NpFfDYGEgLysGg4jBI5v3fanY14iF/MslauZuVuojEsL+urtrVnco/P4zKL+AX8Av4BfyPAN8O5fuvfihX2I8Iiqox9QcEhWkI9o0XER99L3jk8kh8Q6+q6gd7zYTrulEUf6lXmaYyzv5AiMh1QjfmXxQBhVI1EQkuxP2bioA+DB3xJUDVuBu52G2c3f6BidD3/dD5MgPGI8cNndBxxR2BOX4QgBB9AWActaJcwzCK+JWgCCdAlICP+0SRcan3KV1XXAkZ9wPP84ICgEJ9uoVYuCQ/LxeXKwnH9wggiygE+xwgYgIEcjnfEaVv4tBbIwCghkb/4ScWRSHp7YLAz9blBcBzeCWL0IvsU4DCXUdul163kQO9qijcX282GwCYEod+eJfAu4oKNDyQeoTt6BqcqWq6ba1WK8vmgmOH7gWgMCbY/YAxVDEgPVa01vZUr1NMLXO5XAKgoZ1+aYYMjoVn7+dDEZEEbDZY0rQGnU61Wu3UzNlstljaum7bdsjKxck0juveVwFj59vrDVJeLhYLc1BDtNqN8XhsLAadqYU0KAEWwzLScc47AFUhWG9Wy+ViZhhGo91uNxoPzX5/NDJaA9O0phhVFsdR4TcakD8b4dsWycej0agpo9/rdnv9h0bDmJkdnEvclc325HyElRjeuukF4w6KNoO83yui231EdPvN/mjc6lTruuPDKGvvTKhgLzgqLgxF06fWwoBc6iiehsPh02MXaTTbtVpnattFn8ltBPDpw4nOvlPUemfQfiA9CYeTyZxiMnwCo99ot0zTXK3IWGuZAgDS+x6ND0yKU6neaTWaPZJP5i/b7Y5i+wLE8LHXbz4Y6CgRKIWAiugEpfc82FTT6tUaEug+Qr7dHY7HE8XxAMYEOfRQCKMkAODyCif7S++R36d6tVYkMHmBPH8r43TcgUCI0ZhyoJehhxMz6opdmI8sb5K+S/obuUQctvPhmQAA9KFbFD9jODKAWJH/ZuPxCAUclvp8X2CS/ELoA4BJoWOrPKeVjDshIZYzKX8aXtdP9ynpk0sOSMEwLZr2u5M3o7PbsxYAQD+/6PO3nJ5y+fN0oEr2moY5ddz720NRQBB8OmgDMJxvD6dCv39OywciHHdzNLPZHlQZy27WjmNO0+k6OjxEgN3x7UMAUpCAWlW7LI+77HyaB4FtmcYIFbwkQFs4fxYPx+2kAFz/WRBnMbnJWs6oBNcEzto82e+TJEEyp938CY5udeo8womEScShTXppxs0KNexSC5BAniRlHfP0Oc2T5wT9yOUeqA2XcRYXwGazXIz7BDgggzwFoNwAMoA6RS8PW+rDaFa62bvLoABMXmQJ0hSpX/dB3ySyCAQYF/MABNXACcsaLAyMUQHIKYF9elsL+o0AZKXF6gKg2yosCjk1ZRdfLk1I97eRyDZQHxuwoicjKH3AcaNzHUcB9nDbhSTNCz/uZU1RRHThodXR6SqHddyrE7OMaXQW9B4n2xtAfvdwkgBqo1po7i9Kta5bJgby9fUvir/fBX33+jrG4WxNy5u38i/J/U4nC5oZSwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 4,
      stageName: "丑年 Lv.5",
      baseHp: 162021,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 70,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 10800,
            actualAp: 2160,
            actualDps: 3600.0,
            magnification: "360%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 10800,
            actualAp: 2160,
            actualDps: 3600.0,
            magnification: "360%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 10800,
            actualAp: 2160,
            actualDps: 3600.0,
            magnification: "360%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 10800,
            actualAp: 2160,
            actualDps: 3600.0,
            magnification: "360%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 5,
      stageName: "丑年 Lv.6",
      baseHp: 272021,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 21600,
            actualAp: 4320,
            actualDps: 7200.0,
            magnification: "720%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 21600,
            actualAp: 4320,
            actualDps: 7200.0,
            magnification: "720%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 21600,
            actualAp: 4320,
            actualDps: 7200.0,
            magnification: "720%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 21600,
            actualAp: 4320,
            actualDps: 7200.0,
            magnification: "720%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAD/AAD/UgD+ZgH/awL/bAL/bAH+cQP/cQP/cgL/dAH/dgL/dgP/dwP/dwP/eAP/eQL/egP/fwL/fwH/gQP/gwP+hQD/igL+iwL/jgL/jgL/kwH+lQH/mAL/mgL/mgH/ngL/oAH/mjP/pAL/pQL+pwL/qQD/qgL/rAH/rgL/rgL/rgL/rgH/rgH/rwL/tAH/uAL/vgT/wAL/yAT/uVP/1gv/0Gr/5Sv+5kH/3Xr+7D///wL/8V3/7In/+ZT///9qiRoKAAAAQHRSTlMAAQQHHTgRZYFIWSV1rr+hkc4DOdiFFWdGcd4jX+VWCTpN/ikS6wZFDiozPB0iFQrwiQX1//j+/KH+tQH9/v4A5GHOOgAABJJJREFUWIXtltt2skgQhQU8G6NpFfDYGEgLysGg4jBI5v3fanY14iF/MslauZuVuojEsL+urtrVnco/P4zKL+AX8Av4BfyPAN8O5fuvfihX2I8Iiqox9QcEhWkI9o0XER99L3jk8kh8Q6+q6gd7zYTrulEUf6lXmaYyzv5AiMh1QjfmXxQBhVI1EQkuxP2bioA+DB3xJUDVuBu52G2c3f6BidD3/dD5MgPGI8cNndBxxR2BOX4QgBB9AWActaJcwzCK+JWgCCdAlICP+0SRcan3KV1XXAkZ9wPP84ICgEJ9uoVYuCQ/LxeXKwnH9wggiygE+xwgYgIEcjnfEaVv4tBbIwCghkb/4ScWRSHp7YLAz9blBcBzeCWL0IvsU4DCXUdul163kQO9qijcX282GwCYEod+eJfAu4oKNDyQeoTt6BqcqWq6ba1WK8vmgmOH7gWgMCbY/YAxVDEgPVa01vZUr1NMLXO5XAKgoZ1+aYYMjoVn7+dDEZEEbDZY0rQGnU61Wu3UzNlstljaum7bdsjKxck0juveVwFj59vrDVJeLhYLc1BDtNqN8XhsLAadqYU0KAEWwzLScc47AFUhWG9Wy+ViZhhGo91uNxoPzX5/NDJaA9O0phhVFsdR4TcakD8b4dsWycej0agpo9/rdnv9h0bDmJkdnEvclc325HyElRjeuukF4w6KNoO83yui231EdPvN/mjc6lTruuPDKGvvTKhgLzgqLgxF06fWwoBc6iiehsPh02MXaTTbtVpnattFn8ltBPDpw4nOvlPUemfQfiA9CYeTyZxiMnwCo99ot0zTXK3IWGuZAgDS+x6ND0yKU6neaTWaPZJP5i/b7Y5i+wLE8LHXbz4Y6CgRKIWAiugEpfc82FTT6tUaEug+Qr7dHY7HE8XxAMYEOfRQCKMkAODyCif7S++R36d6tVYkMHmBPH8r43TcgUCI0ZhyoJehhxMz6opdmI8sb5K+S/obuUQctvPhmQAA9KFbFD9jODKAWJH/ZuPxCAUclvp8X2CS/ELoA4BJoWOrPKeVjDshIZYzKX8aXtdP9ynpk0sOSMEwLZr2u5M3o7PbsxYAQD+/6PO3nJ5y+fN0oEr2moY5ddz720NRQBB8OmgDMJxvD6dCv39OywciHHdzNLPZHlQZy27WjmNO0+k6OjxEgN3x7UMAUpCAWlW7LI+77HyaB4FtmcYIFbwkQFs4fxYPx+2kAFz/WRBnMbnJWs6oBNcEzto82e+TJEEyp938CY5udeo8womEScShTXppxs0KNexSC5BAniRlHfP0Oc2T5wT9yOUeqA2XcRYXwGazXIz7BDgggzwFoNwAMoA6RS8PW+rDaFa62bvLoABMXmQJ0hSpX/dB3ySyCAQYF/MABNXACcsaLAyMUQHIKYF9elsL+o0AZKXF6gKg2yosCjk1ZRdfLk1I97eRyDZQHxuwoicjKH3AcaNzHUcB9nDbhSTNCz/uZU1RRHThodXR6SqHddyrE7OMaXQW9B4n2xtAfvdwkgBqo1po7i9Kta5bJgby9fUvir/fBX33+jrG4WxNy5u38i/J/U4nC5oZSwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 6,
      stageName: "丑年 Lv.7",
      baseHp: 402021,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 90,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 37800,
            actualAp: 7560,
            actualDps: 12600.0,
            magnification: "1260%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 37800,
            actualAp: 7560,
            actualDps: 12600.0,
            magnification: "1260%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 37800,
            actualAp: 7560,
            actualDps: 12600.0,
            magnification: "1260%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 37800,
            actualAp: 7560,
            actualDps: 12600.0,
            magnification: "1260%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 7,
      stageName: "丑年 Lv.8",
      baseHp: 552021,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 10800,
            actualDps: 18000.0,
            magnification: "1800%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBwYLCwsQDw8XFxcbGxshISEiIiIpKSkvLy82NjY8PDw/Pz9ISEdPTk5RUVFWVlZbW1tgYGBoaGhzc3OAgICOjo6WlpaXl5eenp6rq6usrKy1tbW+vr7GxsbMzMzR0dHY2Njf39/m5ubu7u7z8/P39/f6+vr///////8LtNfEAAAAQHRSTlMACBEeJjJCTFpldYKOna25xtXg6PD4//8A/wD/dv////+6////AP8A//////8A////AP///////////////wD/o9eFXwAABWJJREFUWIWlV4mSokgQbS9UPACFrGVYhAWH4XCFUVvFlq3//6vNAoTi6JmOmNcdoRSVr/Ku9O2/P8TbHxP8EuOVNCy//vX9x3fEj7/Xk1/L8BABYFx+//bj57+In/8AzL8qvwQvqAhQh2/f8H9leDD7mvwcXBpzBG9/sT9ZpyGMviI/BIPSCISeVV36CsEKzpSeYNlcFcCjqMLg9/IDzaKUpqA0l5cQUfre1qsPE7aTUpN3AkKFG6UPsuyVGQozUZxPCwkRLowgBmUh5VguxNlkCQGlWaavJ9PppGXHbK1BAVnE7FmwoxB2uUhI8emdnvQJ+dbtkrNkusE9erkZVBGDeMwJbi8C/XY6hjldFL72wfoV0Bl7Mgy9fqNgFjC8Nut6wZf4jK3atykJBIBD+sye9/PBrl5ecx+84NASWWJVi3WQpPJAdkhQHmFeL7WyRVBKxJUKlReGGvhIXry/utBFyhHQu12csaq9KIDu3KsNUUc+pk04jEHmwyhoQPykfH0mDWlCDvR5iaMwDKP4UuhpArRKYiQxu/dBFHq71vHECA3u0fAxyS7tMmFKrGS1x/ocuhudb4jrOfbwcD2hzqpDgNj0StvHe8MBz8SE6KANu/LLPnGz7cDCzSZ0CSZt21kFBFmPPHOi2lVAboqjuzBD+6QzFseuDwRCCCcNu2TPJeAtqTINOw11Nl0LZODiZwVnDJVXn3qCXZWNIaR+V4ERWPR6jMIgjA5J7nYCvP0JQPKS9zJ33RMCvmByTzcX7jt4Z59Htm53CVTyaDj8CaTtvCQ34p0psu/09kld8i+Vw9rrscWHMzaCLsGyXXFeoXChPXAFmT1Z++sQSM2SRwv0+iFFglP1lBlg2HKbQNEb8hjDkH8KeP3SQxq0CQaq1SQ4dppI08DKhOErC1o+DDgXNBE75i5yFKG4giZq+Qn75jYLssrvWZHEtzjybAf7dnkB5KkgE7kk8JoEBuAt6O7DA1Ok8O859D3PZtcbXrBOErKmNIFj4Y6OBuwqSVlx4P6YT0kT9qFvsGtjrw0w+gk1mD/GbR+wUYJpzv7NpF7PHh6rNZweMNUmWIEhZskCnUh2LQKTyd6P+wT1bba07KPwzhGHnW0Uplg1Qwyj/mzsIkaRPxjN9/KqbsPFq3Fzut3oBxExkVrHGAS13UfMhRlYfQwX1pTWPvvKWrQESeO1xzWDE+utJtEN3dztLAZ3v3dBHbGLnXHbYj4Wxr7nR6/0ORQzSoF3dhmYhq5XTY+AssozSNbjlBqLuiUT65i7/tzqp7pbf8/QQPFVAxKQ9KzNmBNet5DzYJ4Gm3ItIGvUVlqNFojp2sA4SHOpbugGs8uBBydybyh0YZHnWoFNrx4aV484esbSJOJUuDaK8wzTZi9gWfjhcbcKy2uDV6FJcGrNmkOZhPdnwt9L76xgbN6EY+WODF81NcC5cMsPX6UKAe84EqS3e5o+Hh/PjKZk0SJ4Gwg4pnIEeYNz8tLN0VAPoS37hn6eIU9eC/xC/mm6AU44ge97e9exLdcCtWc+wCG/Qt6EMxes97wjNSuNsvut97dPzXB+7YPw0RZm4X1Axw05RI03geXMDvTo2ib4uPuf/WoYLbcsGUleeLbj+nY+KwRh4O1sx/MtXd/tWFf9/IfPYKrgcE3KokOoqrrdFgMcLuO1pimK3P+jo4rGlUZbxb6b0ng8Hg0HwwEmG7Ysf7vx8lb4Gwy1E9XFsREQbusQ4g8QJnDzlc8lcdtoIszmiuWCJGmgbVB3NTdho2x1Q1st0ZSlMBn1JQGD+Oms2sJW7CcYCXNxsVqtNxtZUTZqeX6pg6Ypsiwp8mohzoUik/8H6InoAEs0xPAAAAAASUVORK5CYII=",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 10800,
            actualDps: 18000.0,
            magnification: "1800%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 10800,
            actualDps: 18000.0,
            magnification: "1800%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 54000,
            actualAp: 10800,
            actualDps: 18000.0,
            magnification: "1800%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 8,
      stageName: "丑年 Lv.9",
      baseHp: 752021,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 110,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 14400,
            actualDps: 24000.0,
            magnification: "2400%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 14400,
            actualDps: 24000.0,
            magnification: "2400%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 14400,
            actualDps: 24000.0,
            magnification: "2400%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 14400,
            actualDps: 24000.0,
            magnification: "2400%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 9,
      stageName: "丑年 Lv.10",
      baseHp: 1002021,
      width: 4000,
      enemyLimit: 20,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 18000,
            actualDps: 30000.0,
            magnification: "3000%",
            count: "10",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "12.0-18.0s",
            delayFrames: "360-540f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 18000,
            actualDps: 30000.0,
            magnification: "3000%",
            count: "12",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "6.0-12.0s",
            delayFrames: "180-360f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 18000,
            actualDps: 30000.0,
            magnification: "3000%",
            count: "14",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "537",
          enemyName: "ダミー",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 3000,
            ap: 600,
            dps: 1000.0,
            speed: 30,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 150,
            freq: 18,
            foreswing: 4,
            backswing: 14,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 18000,
            actualDps: 30000.0,
            magnification: "3000%",
            count: "16",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "4.0-8.0s",
            delayFrames: "120-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "126",
          enemyName: "日の出わんこ",
          icon: "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",
          traits: ["メ"],
          baseStats: {
            hp: 215,
            ap: 1,
            dps: 0.07,
            speed: 0,
            range: 2000,
            rangeType: "範囲",
            kbLevel: 1,
            money: 2015,
            freq: 421,
            foreswing: 42,
            backswing: 19,
            tba: 190
          },
          stageStats: {
            actualHp: 215,
            actualAp: 1,
            actualDps: 0.07,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e24012Data;

