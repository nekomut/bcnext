// Stage 1354 Data
import type { StageData } from '../../app/stage/types';

export const e1354Data: StageData = {
  eventId: 1354,
  eventName: "極悪のウシ降臨",
  typeId: 1,
  typeName: "イベントステージ",
  prefix: "S",
  mapId: 354,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "来怨キング 超極ムズ",
      baseHp: 2500000,
      width: 4700,
      enemyLimit: 20,
      requiredCost: 200,
      costLimits: {
        lower: 0,
        upper: 0
      },
      treasures: [
        {
          treasureId: "10663",
          treasureName: "洗脳されしネコライオンへの進化権(洗脳されしウシネコの第3形態)",
          probability: "100",
          amount: "1",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "664",
          enemyName: "極悪なネコライオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIHCgwOFBoQGyMRHCMUHSYZKTMbLjogNUMoP04qRVcwTmNMSEU0Vm0nYIc6X3pTXmZAa4lGc5F/Z1dIeZtMf6JPh61RjLRWkbqYhHdbmsVXns9eoMxfotBhptRkqdhlrNxpseJ2yfLk2ND///83DT7iAAAAQHRSTlMADBMbIyk2P0lQWmlxfISNmJ/Ez9/n9/+q17fv///tzv+t/v///P//////////////////////////////////jRr4hwAABHBJREFUWIWdV+tiqjgQBq2o4BUtUQs9rCBLKRSF0iTAnr7/W+0k8YJdBM7OD03Tzpe5fHOpJD2Wp91uLEm92XqtTxv+7IH0d30FLad9qTfWEUJb+Y8RJr3r0QAE/Q/Vh9oA3hzAh/KkMACkdlMcj8T36BkZc7D9ZYvOsp5tlmq7IwhdTEB18twaTV1X+pIkb43nWgCEVr02iN1WXW8faDPZtgGMfyh47vV4dNjnog1hdg8Q/WOdT27p8++nVhtW9wABMm0bUJI85DfztiCMpWoMvCg8ZnlOkiBIo/YoqLqso2U1BV5SEIwxoUUW7fnNuglgiMa9+xCUFJ+FFInJrnbNHsjSqOJBWGJMg5BimgYpzjOGoA+aESDI+kXfKUD/7ePjjebu53uCqQjjpEl/sDamiwvAiZmevL+f8jJ+j+BMbX4/akS4OWDnDCD/KlLXD0oKwSSCCg+LW2E5nl8BXB5AkqZAoa9jzM4ik88PX19AwV4dQAcefZra6eFvz+IAMf+F0eSCfHPBEfmD0H1+f+yZPyRsp0KFh+aZAdT5/v584/EQpTVuBHi6ETESDPpyf//+2LMYYrM1jUxGxhnAKoQFnntwfQAomAHr2nK8sUtZatKkyiRuA/8S5WjUdka0uZwma2hcPzIpUHKRw3oPhqoyUDRhx6haTVaUcwbRPHHOV7N6x1kvM0T3n6A7iEMQxaEnanm+Qai2mOShiP6K/6TBWNgYqEYAXal9X1b62uqWYlnpyXX6jf1sd0cyuWYyGMZq2ADQe0Gmhy6zp6eNlflcvwMYtUyV3hRFzo87yKkdnuI9Y+DDGryJcjj+yNELVERZ5FDP23m/HUDSM+cuSTMzSi0vp6eu8105lNVSHbB5VBwJOfh2Syu9yDJKtvp2vVqqPUnWGBUcAo2gzF676UMyHfQFNWf6h9dXN01DD7E6jtqmQcUJhArw2C5zkpeUUnKyMU4R6ryoAZ0S4rBmREQhUpyR5HSoJ/B/Rd5jx8qwjUJyKWMoRpK/dt3zFK8gcUQyG6W4ItmqqwcjHxoPjEIcOFkVofOeOPSF52B2dnGAya9u6rLUC4rqwzBVMr4eWF14DH1kOnQvwRMGFMcjIJJy3yULCjJD+wqQusICCAotqN26H0qs8twCc4txbKWlfWDNtLBjmK7Y7QAAFNqL52liRZZHLLYeFHuv8FOatFNZYz2HbxRFZiV0r/71ihJISWhafomLoG3BFNv1Cw+fGZcJDBp5jDAhmaH9yijJnWYE+YXpK8qekJO+dOI9L/+JA3yALreLKT4hrQlgw/SnMFIOIXj7pJ677wqSeYSn527um41TnTugshZ4x3o1gESwZjoJ2WBsaOoLMVSgBRnVhGlOkaU+I9EmMFFjY5zqS5i6ygqtqwBj5AS2w5yXEd8t9FZK/9geeGz4ej0UQ2ZTp9QkfMKJ+E//F4DC6XE+7/RJl5q4l0XbUG4V7sSu41ypE+4E6tgU+0NV02az2WJ5lvlsNtnc4tgqav2/jMb2EYv/BZHr2MwJNYssAAAAAElFTkSuQmCC",
          traits: ["悪"],
          baseStats: {
            hp: 420000,
            ap: 9900,
            dps: 29700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9900,
            actualDps: 29700.0,
            magnification: "100%",
            count: "2",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "26.7-30.0s",
            delayFrames: "800-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 38000,
            actualAp: 30000,
            actualDps: 6569.34,
            magnification: "200%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "13.3-15.3s",
            delayFrames: "400-460f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "664",
          enemyName: "極悪なネコライオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIHCgwOFBoQGyMRHCMUHSYZKTMbLjogNUMoP04qRVcwTmNMSEU0Vm0nYIc6X3pTXmZAa4lGc5F/Z1dIeZtMf6JPh61RjLRWkbqYhHdbmsVXns9eoMxfotBhptRkqdhlrNxpseJ2yfLk2ND///83DT7iAAAAQHRSTlMADBMbIyk2P0lQWmlxfISNmJ/Ez9/n9/+q17fv///tzv+t/v///P//////////////////////////////////jRr4hwAABHBJREFUWIWdV+tiqjgQBq2o4BUtUQs9rCBLKRSF0iTAnr7/W+0k8YJdBM7OD03Tzpe5fHOpJD2Wp91uLEm92XqtTxv+7IH0d30FLad9qTfWEUJb+Y8RJr3r0QAE/Q/Vh9oA3hzAh/KkMACkdlMcj8T36BkZc7D9ZYvOsp5tlmq7IwhdTEB18twaTV1X+pIkb43nWgCEVr02iN1WXW8faDPZtgGMfyh47vV4dNjnog1hdg8Q/WOdT27p8++nVhtW9wABMm0bUJI85DfztiCMpWoMvCg8ZnlOkiBIo/YoqLqso2U1BV5SEIwxoUUW7fnNuglgiMa9+xCUFJ+FFInJrnbNHsjSqOJBWGJMg5BimgYpzjOGoA+aESDI+kXfKUD/7ePjjebu53uCqQjjpEl/sDamiwvAiZmevL+f8jJ+j+BMbX4/akS4OWDnDCD/KlLXD0oKwSSCCg+LW2E5nl8BXB5AkqZAoa9jzM4ik88PX19AwV4dQAcefZra6eFvz+IAMf+F0eSCfHPBEfmD0H1+f+yZPyRsp0KFh+aZAdT5/v584/EQpTVuBHi6ETESDPpyf//+2LMYYrM1jUxGxhnAKoQFnntwfQAomAHr2nK8sUtZatKkyiRuA/8S5WjUdka0uZwma2hcPzIpUHKRw3oPhqoyUDRhx6haTVaUcwbRPHHOV7N6x1kvM0T3n6A7iEMQxaEnanm+Qai2mOShiP6K/6TBWNgYqEYAXal9X1b62uqWYlnpyXX6jf1sd0cyuWYyGMZq2ADQe0Gmhy6zp6eNlflcvwMYtUyV3hRFzo87yKkdnuI9Y+DDGryJcjj+yNELVERZ5FDP23m/HUDSM+cuSTMzSi0vp6eu8105lNVSHbB5VBwJOfh2Syu9yDJKtvp2vVqqPUnWGBUcAo2gzF676UMyHfQFNWf6h9dXN01DD7E6jtqmQcUJhArw2C5zkpeUUnKyMU4R6ryoAZ0S4rBmREQhUpyR5HSoJ/B/Rd5jx8qwjUJyKWMoRpK/dt3zFK8gcUQyG6W4ItmqqwcjHxoPjEIcOFkVofOeOPSF52B2dnGAya9u6rLUC4rqwzBVMr4eWF14DH1kOnQvwRMGFMcjIJJy3yULCjJD+wqQusICCAotqN26H0qs8twCc4txbKWlfWDNtLBjmK7Y7QAAFNqL52liRZZHLLYeFHuv8FOatFNZYz2HbxRFZiV0r/71ihJISWhafomLoG3BFNv1Cw+fGZcJDBp5jDAhmaH9yijJnWYE+YXpK8qekJO+dOI9L/+JA3yALreLKT4hrQlgw/SnMFIOIXj7pJ677wqSeYSn527um41TnTugshZ4x3o1gESwZjoJ2WBsaOoLMVSgBRnVhGlOkaU+I9EmMFFjY5zqS5i6ygqtqwBj5AS2w5yXEd8t9FZK/9geeGz4ej0UQ2ZTp9QkfMKJ+E//F4DC6XE+7/RJl5q4l0XbUG4V7sSu41ypE+4E6tgU+0NV02az2WJ5lvlsNtnc4tgqav2/jMb2EYv/BZHr2MwJNYssAAAAAElFTkSuQmCC",
          traits: ["悪"],
          baseStats: {
            hp: 420000,
            ap: 9900,
            dps: 29700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9900,
            actualDps: 29700.0,
            magnification: "100%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-13.3s",
            delayFrames: "200-400f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "664",
          enemyName: "極悪なネコライオン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQECAgICAgIHCgwOFBoQGyMRHCMUHSYZKTMbLjogNUMoP04qRVcwTmNMSEU0Vm0nYIc6X3pTXmZAa4lGc5F/Z1dIeZtMf6JPh61RjLRWkbqYhHdbmsVXns9eoMxfotBhptRkqdhlrNxpseJ2yfLk2ND///83DT7iAAAAQHRSTlMADBMbIyk2P0lQWmlxfISNmJ/Ez9/n9/+q17fv///tzv+t/v///P//////////////////////////////////jRr4hwAABHBJREFUWIWdV+tiqjgQBq2o4BUtUQs9rCBLKRSF0iTAnr7/W+0k8YJdBM7OD03Tzpe5fHOpJD2Wp91uLEm92XqtTxv+7IH0d30FLad9qTfWEUJb+Y8RJr3r0QAE/Q/Vh9oA3hzAh/KkMACkdlMcj8T36BkZc7D9ZYvOsp5tlmq7IwhdTEB18twaTV1X+pIkb43nWgCEVr02iN1WXW8faDPZtgGMfyh47vV4dNjnog1hdg8Q/WOdT27p8++nVhtW9wABMm0bUJI85DfztiCMpWoMvCg8ZnlOkiBIo/YoqLqso2U1BV5SEIwxoUUW7fnNuglgiMa9+xCUFJ+FFInJrnbNHsjSqOJBWGJMg5BimgYpzjOGoA+aESDI+kXfKUD/7ePjjebu53uCqQjjpEl/sDamiwvAiZmevL+f8jJ+j+BMbX4/akS4OWDnDCD/KlLXD0oKwSSCCg+LW2E5nl8BXB5AkqZAoa9jzM4ik88PX19AwV4dQAcefZra6eFvz+IAMf+F0eSCfHPBEfmD0H1+f+yZPyRsp0KFh+aZAdT5/v584/EQpTVuBHi6ETESDPpyf//+2LMYYrM1jUxGxhnAKoQFnntwfQAomAHr2nK8sUtZatKkyiRuA/8S5WjUdka0uZwma2hcPzIpUHKRw3oPhqoyUDRhx6haTVaUcwbRPHHOV7N6x1kvM0T3n6A7iEMQxaEnanm+Qai2mOShiP6K/6TBWNgYqEYAXal9X1b62uqWYlnpyXX6jf1sd0cyuWYyGMZq2ADQe0Gmhy6zp6eNlflcvwMYtUyV3hRFzo87yKkdnuI9Y+DDGryJcjj+yNELVERZ5FDP23m/HUDSM+cuSTMzSi0vp6eu8105lNVSHbB5VBwJOfh2Syu9yDJKtvp2vVqqPUnWGBUcAo2gzF676UMyHfQFNWf6h9dXN01DD7E6jtqmQcUJhArw2C5zkpeUUnKyMU4R6ryoAZ0S4rBmREQhUpyR5HSoJ/B/Rd5jx8qwjUJyKWMoRpK/dt3zFK8gcUQyG6W4ItmqqwcjHxoPjEIcOFkVofOeOPSF52B2dnGAya9u6rLUC4rqwzBVMr4eWF14DH1kOnQvwRMGFMcjIJJy3yULCjJD+wqQusICCAotqN26H0qs8twCc4txbKWlfWDNtLBjmK7Y7QAAFNqL52liRZZHLLYeFHuv8FOatFNZYz2HbxRFZiV0r/71ihJISWhafomLoG3BFNv1Cw+fGZcJDBp5jDAhmaH9yijJnWYE+YXpK8qekJO+dOI9L/+JA3yALreLKT4hrQlgw/SnMFIOIXj7pJ677wqSeYSn527um41TnTugshZ4x3o1gESwZjoJ2WBsaOoLMVSgBRnVhGlOkaU+I9EmMFFjY5zqS5i6ygqtqwBj5AS2w5yXEd8t9FZK/9geeGz4ej0UQ2ZTp9QkfMKJ+E//F4DC6XE+7/RJl5q4l0XbUG4V7sSu41ypE+4E6tgU+0NV02az2WJ5lvlsNtnc4tgqav2/jMb2EYv/BZHr2MwJNYssAAAAAElFTkSuQmCC",
          traits: ["悪"],
          baseStats: {
            hp: 420000,
            ap: 9900,
            dps: 29700.0,
            speed: 28,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 420000,
            actualAp: 9900,
            actualDps: 29700.0,
            magnification: "100%",
            count: "40",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "4.0-6.0s",
            delayFrames: "120-180f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "079",
          enemyName: "狂乱のウシネコ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 130000,
            ap: 2600,
            dps: 7800.0,
            speed: 20,
            range: 100,
            rangeType: "単体",
            kbLevel: 2,
            money: 500,
            freq: 10,
            foreswing: 6,
            backswing: 4,
            tba: 0
          },
          stageStats: {
            actualHp: 130000,
            actualAp: 2600,
            actualDps: 7800.0,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 38000,
            actualAp: 30000,
            actualDps: 6569.34,
            magnification: "200%",
            count: "7",
            spawnTime: "7.3s",
            spawnTimeFrames: "220f",
            delay: "13.3-16.7s",
            delayFrames: "400-500f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "207",
          enemyName: "ツバメンズ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgIDAwMDAwMEBAQEBAQEBAQEBAQFBQUFBQUGBgYHBwcHBwcHBwcICAgLCwsMDAwMDAwPDw8UFBQVFRUbGxshISEjIyMjIyMoKCgtLS0tLS03Nzc6OjpCQkJCQkJGRkZKSkpQUFBbW1tcXFxnZ2dxcXF5eXmEhISPj4+Xl5eioqKpqam5ubnLy8ve3t7r6+v39/f///////93HAPgAAAAQHRSTlMAAwgOHhUnPFr5RlLAzDGJTWFqdp/dmYKRp/HHsbnS4PvsyvX83Pn+7P7Y//X///X//v3//v7+//79/v///wD/p+38vwAAA+NJREFUWIXtV9t2oloQDHcHELkIgtxEQGAQ5A6SOPn/v5oGTTTOPMA6Z95Sa/midtG7d3V18/LrP+Llm+B/ILgBwTmeAdAUR+IEiiLIyzzgG1aWbdu2LF03NVUSaA54ZrBgtLrcelEUxXEUHFzHsS1DFXkSm5wKQlCi4RyiJImTAXFyPIa+qYgUgU7NAiUFTT5EVwJAmuX5KfQ14JiaBooziuU+UhRVeTruVQaffhJ6BRTJJ0Va1k118tf85CwQjFbsQ3ynyKq2rU++QmMTGUATgunck0jSvG7b6rSXyMnXinIr6yGJJCvbrilDjZ98IQjBGNsouVezaLq2Dg1yKgEkweu74OEYZdu2uc7NIGCWO++hlGXXtUcNn07wQgiWd69kVndd5S/+VgMEOm/E8w+YsPxgADVAFY8mT/6pBowWxQVDQxtzHAmdDMAwDB0aGuMt75ZA3rR1upOX5oZ7ToIQNHYpAyyAbhprRV1tJEkUGIaXZO+jAlUeeQHA1UXi+QQ4JawMebsd/3A4HNwrHMdxd+N3QRDFaRJAo0dRENjSE8NAgg0kpuW4wdhI8VXB3bkpc0BR1W3f53GUtV0VA8PoWtiTa6EDiWoACTR0nBb1+fXyfrm8Dbhc3t8v5yRq6+qcxkH48+feUDaSMPjNl0SumejgTGXbv0HUI16zqGubcxrFTd+fu6YqTj7U9Es8SpDUYmNud0HV9U/x729FnLVtAfquz2egAoLQZsXPUhI4xK7N6xESaOH+7YmgyvMsy8si8vemtlY3w01RxLWEHC8prGW7XjC46gjo4XPfv14eCMAX2rY5mfy1huhVfCgnrrQl3OJ257r3G3TA433/AH7U9a9jJfuibJq6OBr0VzFiC2UN4lFBPhsQkCSKg4YYngZxMutBHBEoOU2zBEQS+vsN9yRmBCOIm35HBQ8i/rxaRgZhRKOWkiyLHZXhsDnDhjF3nw4N3dAc1cnOOuZGsT/uDZ1WXVfuqRnxA8HuYUSAJRUhPyMepbQHa07zpslDZbonIriou3dHy8qmOu6F6cOFoNd2cItPwZMrGE4qNdnUMQrG28fjQQJlCbONmfp4ZAy/nT4ejOF09JXJ0xXFefU2n8dPFIW+IU2d7wjGiZp9G+/gYLCp6GuJxqetOghGLlTd8YZ2BO9zHXupSQw3eVFCSImVtzvP81xHXrKaKtIkMUf4QKBohmkMViFQJIHOWdFuRyDwAcTgtzNjv/GNb/xDfMzM2+Sc0d0IwdH8YiFs1g9QJUlYMDxFTnhnwCVNl2Ff+PGE7Va2WOWvy+5XoLCvCOBOLMsuP6CzrLlWxAX956r7G0HHC95CRNnSAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 19000,
            ap: 15000,
            dps: 3284.67,
            speed: 99,
            range: 150,
            rangeType: "範囲",
            kbLevel: 10,
            money: 150,
            freq: 137,
            foreswing: 1,
            backswing: 136,
            tba: 0
          },
          stageStats: {
            actualHp: 19000,
            actualAp: 15000,
            actualDps: 3284.67,
            magnification: "100%",
            count: "1",
            spawnTime: "7.3s",
            spawnTimeFrames: "220f",
            delay: "3.3-8.0s",
            delayFrames: "100-240f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    }
  ]
} as const;

export default e1354Data;

