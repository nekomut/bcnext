// Stage 2089 Data
import type { StageData } from '../../app/stage/types';

export const e2089Data: StageData = {
  eventId: 2089,
  eventName: "３億匹の仲間はみな死んだ",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 89,
  specialRule: null,
  stages: [
    {
      stageId: 0,
      stageName: "兄弟全滅",
      baseHp: 3000,
      width: 4500,
      enemyLimit: 3,
      requiredCost: 80,
      costLimits: {
        lower: 0,
        upper: 0
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
          treasureId: "8500",
          treasureName: "キャラクタードロップ(8500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "50000",
          amount: "3",
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
          enemyId: "152",
          enemyName: "ハマンボ崎あゆみ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAEFAwQEBAQICAcKCgoOCwoeGRMfHR0vJhwyKB4wLiw+MSc+Pj1MPClKRD1bQTBTRzxTTkRTTktkUztqVz54XENtYk2GaUd8blWHdlykal2cc02egViIhYKqiFyni2Cakoq7kWKzlmqimoyhnZS5nXWppKHXoGPNqnfOsIK4t7fnrm3KuZTfvIj1tXDGwr/zwIHTz83yzpnY1tT92p/h3tz44r7n5uXx8O/7+/v///+es6wrAAAAQHRSTlMApsHe7gokSBWDMRFuJjuIUrUl13+UGv9hqtN4/02s0v3o/v+W//7a67z//f7n///+1f3//P/9/v//////////YYroJwAAA3RJREFUWIXtV2tzqjoU5bQHpFLxBVXR8qzRGgopkICYwP//V3fj6Z05d85UEL7dOWt8xHHWys5+ZSNJ30AbKd/91Q2T5fJZHSKgvpfYHKRgZgJP5QECs1gIfzZAQD+KmlsDPKks46pmRn8B1RJ1Vb3396M8zwSY0N8L8rys60rY/QMxLaq6rj8n/QXiQtQ1W7+8LLT7zNBe3962E2nKqlpw9gk42Mb29aWzgP5xPueHtVlUWZTksIZXmOfvi84CzuEjyZMjxrsgAjal5yQ85/m6+xkmC8MLSZLkl8s5SSjNUQI/tp3Ik9n69VXf2t7phBC8TwlNUxKRMP/Qu/BfD0kSeUeaU+A1uFzyZk3yZNMlKV/eUoICoJMQQNKUUrAddGi0PxpaBwXdNCxKSbBDKHABsIgSOEOw51XWpcGoY/1IQ3cXnaMAESCuTo2enzVZycxWG2TTmjlouTzlITpFNEW76JJHuCmrBmzbpjDxQmM29YIwdAkhKQryS5Fda6K+frC2XFgc0uTgBSgIUEjQzs0vWQZtgRcF2AASldPSorQ3ktIkOkVpGrqBm9NTUUFF4NXKj0VjQtbWHxYbFyE3bOIQoIgiBqSGj/dZBlI1nz/fFtAdYBFKUBieAhruMyjpKl75eBXHHMS4697kTxzYOwI+IdE+Snf7jMXQmAqfMYabUJSuddsAz7MQJfZms8QJRX5cVtWVh32/OU1dIuemgDabOSlxJrJmQCrsM/zLdeB+zq/fWYuAJK1JetAlbfuZk6CsWFbWv4MvjZYwqHYarqWJnQMfWlr1lYJfqI6jlv2lsZc6imYnlOxwWf6H3RzAbO2umhNuVN1LQ2u+57z6XaGqyy4tQV8vpLFlmeMpBv5V4d9S4HbnO0JRZGnkMSjCJv/5tQxE2Z1/hfy8gzoSohQALkR2J7/xZykg/EVZ8FKUx9ZW8KcJJrSxogQLOMts/f5LVplDIxO8LIv4fX339lJzuUL9MOxb5qwPXZK2WcF4gU2l74Rg+KwoGO4/okxxAR44jnsLGKxgQjj9pyxwYsE6lM/3An4mhrhAetqXgrfdAzctgCPgAZNqM6Vxq/+Q1/ggPrbcIjchbzAeEAIQsOP5oMcmdT7vn4RXC0aDnpj+4v8CWVWV8Xj0hbGiqPJdma08/Xh4eHz8+QuPjw8PP55Gfyr8A9ycqlLsEzZHAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 240000,
            ap: 5555,
            dps: 465.5,
            speed: 4,
            range: 800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3333,
            freq: 358,
            foreswing: 59,
            backswing: 72,
            tba: 150
          },
          stageStats: {
            actualHp: 2400,
            actualAp: 55,
            actualDps: 4.66,
            magnification: "1%",
            count: "1",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 1,
      stageName: "魚生ハードモード",
      baseHp: 30000,
      width: 6000,
      enemyLimit: 50,
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
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
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
          enemyId: "155",
          enemyName: "イカ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/Pz9vTUh4Tk52WFZ4WVZ5W1h6XFd5Xlh8X1Z0ZFZxZmN+YVp+YVp+YlyCZV2EZl+lWluIaWGKa2OKbGKMb2eNb2aNcWmPcWeQcmiSdGqRd22Wdm1/f3+ghn6ih32jiHyliX+rjoOxlYiwlo2xl427oZW/o5a/pJbCqJzHrqLPuKvRuq/bxrnq08Pw3c/66Nn87uP98+z++fa8WBpcAAAAQHRSTlMAByI5WHWHlaS20+z7BB4JFx0qkjpZCv9HxGameASJ3fBYyav/09+V6ALezf/v//bJ/v7z4v////X/////////ewpBDwAAAVJJREFUWIXtk9lygjAUhqndFyShSkVRFFAsBhRsiNng/d+qcTpOb5zpJJedfNcn3/xnieNcxc/TNI2GiuB6wV/klDN6KopNHHlGgpT1UgrJ0DKExgIhJS2n/txUIETXC3YYfRoJFlRyIftOssMEmAj8gtZMyK6X7JgDV18w3KCMcHEOIU67lf4uYbwM0Y9BDeJrpT1JGCejtGHKoPqQyqCbAcymrr9p2VkgKG7WcK65DQidICoJ54JWqG2P6SzSzKAIFnvGOWqZ7DhpS32BA9eY4UodVC+qamcgmI+3GBF1DX3PiUkCx5uhDCEuJcF4byJwRtss+2CM1RUxaeG8zqyhpKJtbZgAHNqaNgRhXi+NBLAok6bGcUHa1EwQRuMwTybvcTIxErjA80AAXABN/rTFYrFYLBaL5Z9y84vJ88Hg4fnC0+1AX3D38PJ24fXx/nrRN7DhNUF3J6CdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 360,
            actualAp: 72,
            actualDps: 43.2,
            magnification: "400%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-20.0s",
            delayFrames: "200-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "1",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "1",
            spawnTime: "4.3s",
            spawnTimeFrames: "130f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "1",
            spawnTime: "5.7s",
            spawnTimeFrames: "170f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "1",
            spawnTime: "7.3s",
            spawnTimeFrames: "220f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "1",
            spawnTime: "9.3s",
            spawnTimeFrames: "280f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "50",
            spawnTime: "13.3s",
            spawnTimeFrames: "400f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "50",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "5.3-8.0s",
            delayFrames: "160-240f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "50",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "4.0-6.0s",
            delayFrames: "120-180f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "50",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "2.7-4.0s",
            delayFrames: "80-120f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "50",
            spawnTime: "40.0s",
            spawnTimeFrames: "1,200f",
            delay: "1.3-2.0s",
            delayFrames: "40-60f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 480,
            actualAp: 120,
            actualDps: 61.0,
            magnification: "400%",
            count: "0",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    },
    {
      stageId: 2,
      stageName: "いわしの骨",
      baseHp: 90000,
      width: 3000,
      enemyLimit: 30,
      requiredCost: 120,
      costLimits: {
        lower: 0,
        upper: 0
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
          enemyId: "150",
          enemyName: "工房マンボウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAcLDQAAP4BRW4kM2QYPm4ZQnMaQnIbRHEcRnceRXUeSW8iSXckSncoSnYlS3oqT3onUH4sU34qWYUrXI03W4M4X4c6XogBf382aJlEZYxAbZZrZXZNcZZCe602gcNRfKRhfpo9ishUjrZsh6BMoNx6k7B8k6tgncVZruhwrthetu2UqsCSrMFsvulwx/Cbv9l7z/SE1Patx9uO2Pi5zduo3vjG1+LT3ufp8fb7/P27CM7kAAAAQHRSTlMAHFqLzvz/AQQIPBJRLd0iCWubivS2/816+U/lrQL+hNf9wvz/qv7/////3f/+//3/8v////7///3/////////k2wsgQAAAo5JREFUWIXtlmtzmkAUhtNL2qAgoogx2DXpUkFYLmGBBRbi//9XPQs6bVoLJHzqjM84OyN6Ht69sMvNzQWkB/XS5eFMvB/jDDKm4wwySstRBnkT8nyMQdadrBpjkHU7ZGMyyDpywiQL322QdcNACGO80qbA/G3VkjK53yCESAo8fwd2yt3w8rly/4j9JCs4LwBe8LpOvXttaI7p8hGqOeeMsaKF87oSSXaKNEAg65gyqOEFY43jJIIrqffQ35O5trGjgmeMZQC0IcZOeE7iPfRmUNe2S7MsAYQhwcj3SycrWNEEERnmnWOhmrbLoihKWoVvoMThsc8KahgZhPAm0+WuUzBDLg2Ck4IiA4U+pQ5j4e2XBCKkO4089wgsyw2EQgg2BsK+Tx3ojOOLMWH4sewUwBq2LNsNIhEiohgWpE2FoAGGISS11yVYQH1jaASRaxgby03oaVBBQEnZOQatAAwwFwmNAtdFhhVQATigCxHxlC7BcmOdDEEiZhNCiDhtIEhRlz0CZYbOBjeiSUbdphwEEL9+OR5rkvdMI7ahWhjsc21Tz48NL/k+3XYKzDgN/VMIcNDipaWtP9aHJ9ItWJOyKtMzeX2ubO9fx6b+tOgS3Gkorqr6b0SKuspNWV50DuKNsj7EeVkKSVVX7adtoM3hYbrr2Vdk83AghMQpOF6Tx8/bARuCut0fGkgcx+UvYrLfytMhW5KyQo1CNOQEfFuvFgO3+K+KNjPR/ndMc62p3fvIKyR1MjMaNuuVQFbUN2zrAhUE4ljZwn3nc+nb26pbAfLz9x9ssB4NpxhzOEua7qTjXjB0PO4VZ7ocOuv/Qhqy5q5cuXLlyn/AB+Djp8vAT/0CUfz59jLC8ef/fwLAEZaISrGUMgAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 360,
            dps: 108.0,
            speed: 5,
            range: 350,
            rangeType: "単体",
            kbLevel: 1,
            money: 30,
            freq: 100,
            foreswing: 11,
            backswing: 80,
            tba: 45
          },
          stageStats: {
            actualHp: 6,
            actualAp: 2160,
            actualDps: 648.0,
            magnification: "600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "13.3-20.0s",
            delayFrames: "400-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 720,
            actualAp: 180,
            actualDps: 91.5,
            magnification: "600%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-30.0s",
            delayFrames: "300-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/Pz9vTUh4Tk52WFZ4WVZ5W1h6XFd5Xlh8X1Z0ZFZxZmN+YVp+YVp+YlyCZV2EZl+lWluIaWGKa2OKbGKMb2eNb2aNcWmPcWeQcmiSdGqRd22Wdm1/f3+ghn6ih32jiHyliX+rjoOxlYiwlo2xl427oZW/o5a/pJbCqJzHrqLPuKvRuq/bxrnq08Pw3c/66Nn87uP98+z++fa8WBpcAAAAQHRSTlMAByI5WHWHlaS20+z7BB4JFx0qkjpZCv9HxGameASJ3fBYyav/09+V6ALezf/v//bJ/v7z4v////X/////////ewpBDwAAAVJJREFUWIXtk9lygjAUhqndFyShSkVRFFAsBhRsiNng/d+qcTpOb5zpJJedfNcn3/xnieNcxc/TNI2GiuB6wV/klDN6KopNHHlGgpT1UgrJ0DKExgIhJS2n/txUIETXC3YYfRoJFlRyIftOssMEmAj8gtZMyK6X7JgDV18w3KCMcHEOIU67lf4uYbwM0Y9BDeJrpT1JGCejtGHKoPqQyqCbAcymrr9p2VkgKG7WcK65DQidICoJ54JWqG2P6SzSzKAIFnvGOWqZ7DhpS32BA9eY4UodVC+qamcgmI+3GBF1DX3PiUkCx5uhDCEuJcF4byJwRtss+2CM1RUxaeG8zqyhpKJtbZgAHNqaNgRhXi+NBLAok6bGcUHa1EwQRuMwTybvcTIxErjA80AAXABN/rTFYrFYLBaL5Z9y84vJ88Hg4fnC0+1AX3D38PJ24fXx/nrRN7DhNUF3J6CdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 540,
            actualAp: 108,
            actualDps: 64.8,
            magnification: "600%",
            count: "0",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "18.3-20.0s",
            delayFrames: "550-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/Pz9vTUh4Tk52WFZ4WVZ5W1h6XFd5Xlh8X1Z0ZFZxZmN+YVp+YVp+YlyCZV2EZl+lWluIaWGKa2OKbGKMb2eNb2aNcWmPcWeQcmiSdGqRd22Wdm1/f3+ghn6ih32jiHyliX+rjoOxlYiwlo2xl427oZW/o5a/pJbCqJzHrqLPuKvRuq/bxrnq08Pw3c/66Nn87uP98+z++fa8WBpcAAAAQHRSTlMAByI5WHWHlaS20+z7BB4JFx0qkjpZCv9HxGameASJ3fBYyav/09+V6ALezf/v//bJ/v7z4v////X/////////ewpBDwAAAVJJREFUWIXtk9lygjAUhqndFyShSkVRFFAsBhRsiNng/d+qcTpOb5zpJJedfNcn3/xnieNcxc/TNI2GiuB6wV/klDN6KopNHHlGgpT1UgrJ0DKExgIhJS2n/txUIETXC3YYfRoJFlRyIftOssMEmAj8gtZMyK6X7JgDV18w3KCMcHEOIU67lf4uYbwM0Y9BDeJrpT1JGCejtGHKoPqQyqCbAcymrr9p2VkgKG7WcK65DQidICoJ54JWqG2P6SzSzKAIFnvGOWqZ7DhpS32BA9eY4UodVC+qamcgmI+3GBF1DX3PiUkCx5uhDCEuJcF4byJwRtss+2CM1RUxaeG8zqyhpKJtbZgAHNqaNgRhXi+NBLAok6bGcUHa1EwQRuMwTybvcTIxErjA80AAXABN/rTFYrFYLBaL5Z9y84vJ88Hg4fnC0+1AX3D38PJ24fXx/nrRN7DhNUF3J6CdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 540,
            actualAp: 108,
            actualDps: 64.8,
            magnification: "600%",
            count: "0",
            spawnTime: "22.0s",
            spawnTimeFrames: "660f",
            delay: "18.3-20.0s",
            delayFrames: "550-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/Pz9vTUh4Tk52WFZ4WVZ5W1h6XFd5Xlh8X1Z0ZFZxZmN+YVp+YVp+YlyCZV2EZl+lWluIaWGKa2OKbGKMb2eNb2aNcWmPcWeQcmiSdGqRd22Wdm1/f3+ghn6ih32jiHyliX+rjoOxlYiwlo2xl427oZW/o5a/pJbCqJzHrqLPuKvRuq/bxrnq08Pw3c/66Nn87uP98+z++fa8WBpcAAAAQHRSTlMAByI5WHWHlaS20+z7BB4JFx0qkjpZCv9HxGameASJ3fBYyav/09+V6ALezf/v//bJ/v7z4v////X/////////ewpBDwAAAVJJREFUWIXtk9lygjAUhqndFyShSkVRFFAsBhRsiNng/d+qcTpOb5zpJJedfNcn3/xnieNcxc/TNI2GiuB6wV/klDN6KopNHHlGgpT1UgrJ0DKExgIhJS2n/txUIETXC3YYfRoJFlRyIftOssMEmAj8gtZMyK6X7JgDV18w3KCMcHEOIU67lf4uYbwM0Y9BDeJrpT1JGCejtGHKoPqQyqCbAcymrr9p2VkgKG7WcK65DQidICoJ54JWqG2P6SzSzKAIFnvGOWqZ7DhpS32BA9eY4UodVC+qamcgmI+3GBF1DX3PiUkCx5uhDCEuJcF4byJwRtss+2CM1RUxaeG8zqyhpKJtbZgAHNqaNgRhXi+NBLAok6bGcUHa1EwQRuMwTybvcTIxErjA80AAXABN/rTFYrFYLBaL5Z9y84vJ88Hg4fnC0+1AX3D38PJ24fXx/nrRN7DhNUF3J6CdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 540,
            actualAp: 108,
            actualDps: 64.8,
            magnification: "600%",
            count: "0",
            spawnTime: "25.0s",
            spawnTimeFrames: "750f",
            delay: "18.3-20.0s",
            delayFrames: "550-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "150",
          enemyName: "工房マンボウ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAcLDQAAP4BRW4kM2QYPm4ZQnMaQnIbRHEcRnceRXUeSW8iSXckSncoSnYlS3oqT3onUH4sU34qWYUrXI03W4M4X4c6XogBf382aJlEZYxAbZZrZXZNcZZCe602gcNRfKRhfpo9ishUjrZsh6BMoNx6k7B8k6tgncVZruhwrthetu2UqsCSrMFsvulwx/Cbv9l7z/SE1Patx9uO2Pi5zduo3vjG1+LT3ufp8fb7/P27CM7kAAAAQHRSTlMAHFqLzvz/AQQIPBJRLd0iCWubivS2/816+U/lrQL+hNf9wvz/qv7/////3f/+//3/8v////7///3/////////k2wsgQAAAo5JREFUWIXtlmtzmkAUhtNL2qAgoogx2DXpUkFYLmGBBRbi//9XPQs6bVoLJHzqjM84OyN6Ht69sMvNzQWkB/XS5eFMvB/jDDKm4wwySstRBnkT8nyMQdadrBpjkHU7ZGMyyDpywiQL322QdcNACGO80qbA/G3VkjK53yCESAo8fwd2yt3w8rly/4j9JCs4LwBe8LpOvXttaI7p8hGqOeeMsaKF87oSSXaKNEAg65gyqOEFY43jJIIrqffQ35O5trGjgmeMZQC0IcZOeE7iPfRmUNe2S7MsAYQhwcj3SycrWNEEERnmnWOhmrbLoihKWoVvoMThsc8KahgZhPAm0+WuUzBDLg2Ck4IiA4U+pQ5j4e2XBCKkO4089wgsyw2EQgg2BsK+Tx3ojOOLMWH4sewUwBq2LNsNIhEiohgWpE2FoAGGISS11yVYQH1jaASRaxgby03oaVBBQEnZOQatAAwwFwmNAtdFhhVQATigCxHxlC7BcmOdDEEiZhNCiDhtIEhRlz0CZYbOBjeiSUbdphwEEL9+OR5rkvdMI7ahWhjsc21Tz48NL/k+3XYKzDgN/VMIcNDipaWtP9aHJ9ItWJOyKtMzeX2ubO9fx6b+tOgS3Gkorqr6b0SKuspNWV50DuKNsj7EeVkKSVVX7adtoM3hYbrr2Vdk83AghMQpOF6Tx8/bARuCut0fGkgcx+UvYrLfytMhW5KyQo1CNOQEfFuvFgO3+K+KNjPR/ndMc62p3fvIKyR1MjMaNuuVQFbUN2zrAhUE4ljZwn3nc+nb26pbAfLz9x9ssB4NpxhzOEua7qTjXjB0PO4VZ7ocOuv/Qhqy5q5cuXLlyn/AB+Djp8vAT/0CUfz59jLC8ef/fwLAEZaISrGUMgAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 1,
            ap: 360,
            dps: 108.0,
            speed: 5,
            range: 350,
            rangeType: "単体",
            kbLevel: 1,
            money: 30,
            freq: 100,
            foreswing: 11,
            backswing: 80,
            tba: 45
          },
          stageStats: {
            actualHp: 6,
            actualAp: 2160,
            actualDps: 648.0,
            magnification: "600%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "30.0-30.0s",
            delayFrames: "900-900f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 720,
            actualAp: 180,
            actualDps: 91.5,
            magnification: "600%",
            count: "25",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "8.3-10.0s",
            delayFrames: "250-300f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 720,
            actualAp: 180,
            actualDps: 91.5,
            magnification: "600%",
            count: "25",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "6.7-8.3s",
            delayFrames: "200-250f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/Pz9vTUh4Tk52WFZ4WVZ5W1h6XFd5Xlh8X1Z0ZFZxZmN+YVp+YVp+YlyCZV2EZl+lWluIaWGKa2OKbGKMb2eNb2aNcWmPcWeQcmiSdGqRd22Wdm1/f3+ghn6ih32jiHyliX+rjoOxlYiwlo2xl427oZW/o5a/pJbCqJzHrqLPuKvRuq/bxrnq08Pw3c/66Nn87uP98+z++fa8WBpcAAAAQHRSTlMAByI5WHWHlaS20+z7BB4JFx0qkjpZCv9HxGameASJ3fBYyav/09+V6ALezf/v//bJ/v7z4v////X/////////ewpBDwAAAVJJREFUWIXtk9lygjAUhqndFyShSkVRFFAsBhRsiNng/d+qcTpOb5zpJJedfNcn3/xnieNcxc/TNI2GiuB6wV/klDN6KopNHHlGgpT1UgrJ0DKExgIhJS2n/txUIETXC3YYfRoJFlRyIftOssMEmAj8gtZMyK6X7JgDV18w3KCMcHEOIU67lf4uYbwM0Y9BDeJrpT1JGCejtGHKoPqQyqCbAcymrr9p2VkgKG7WcK65DQidICoJ54JWqG2P6SzSzKAIFnvGOWqZ7DhpS32BA9eY4UodVC+qamcgmI+3GBF1DX3PiUkCx5uhDCEuJcF4byJwRtss+2CM1RUxaeG8zqyhpKJtbZgAHNqaNgRhXi+NBLAok6bGcUHa1EwQRuMwTybvcTIxErjA80AAXABN/rTFYrFYLBaL5Z9y84vJ88Hg4fnC0+1AX3D38PJ24fXx/nrRN7DhNUF3J6CdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 540,
            actualAp: 108,
            actualDps: 64.8,
            magnification: "600%",
            count: "25",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-6.7s",
            delayFrames: "150-200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/Pz9vTUh4Tk52WFZ4WVZ5W1h6XFd5Xlh8X1Z0ZFZxZmN+YVp+YVp+YlyCZV2EZl+lWluIaWGKa2OKbGKMb2eNb2aNcWmPcWeQcmiSdGqRd22Wdm1/f3+ghn6ih32jiHyliX+rjoOxlYiwlo2xl427oZW/o5a/pJbCqJzHrqLPuKvRuq/bxrnq08Pw3c/66Nn87uP98+z++fa8WBpcAAAAQHRSTlMAByI5WHWHlaS20+z7BB4JFx0qkjpZCv9HxGameASJ3fBYyav/09+V6ALezf/v//bJ/v7z4v////X/////////ewpBDwAAAVJJREFUWIXtk9lygjAUhqndFyShSkVRFFAsBhRsiNng/d+qcTpOb5zpJJedfNcn3/xnieNcxc/TNI2GiuB6wV/klDN6KopNHHlGgpT1UgrJ0DKExgIhJS2n/txUIETXC3YYfRoJFlRyIftOssMEmAj8gtZMyK6X7JgDV18w3KCMcHEOIU67lf4uYbwM0Y9BDeJrpT1JGCejtGHKoPqQyqCbAcymrr9p2VkgKG7WcK65DQidICoJ54JWqG2P6SzSzKAIFnvGOWqZ7DhpS32BA9eY4UodVC+qamcgmI+3GBF1DX3PiUkCx5uhDCEuJcF4byJwRtss+2CM1RUxaeG8zqyhpKJtbZgAHNqaNgRhXi+NBLAok6bGcUHa1EwQRuMwTybvcTIxErjA80AAXABN/rTFYrFYLBaL5Z9y84vJ88Hg4fnC0+1AX3D38PJ24fXx/nrRN7DhNUF3J6CdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 540,
            actualAp: 108,
            actualDps: 64.8,
            magnification: "600%",
            count: "25",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-5.0s",
            delayFrames: "100-150f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "152",
          enemyName: "ハマンボ崎あゆみ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAEFAwQEBAQICAcKCgoOCwoeGRMfHR0vJhwyKB4wLiw+MSc+Pj1MPClKRD1bQTBTRzxTTkRTTktkUztqVz54XENtYk2GaUd8blWHdlykal2cc02egViIhYKqiFyni2Cakoq7kWKzlmqimoyhnZS5nXWppKHXoGPNqnfOsIK4t7fnrm3KuZTfvIj1tXDGwr/zwIHTz83yzpnY1tT92p/h3tz44r7n5uXx8O/7+/v///+es6wrAAAAQHRSTlMApsHe7gokSBWDMRFuJjuIUrUl13+UGv9hqtN4/02s0v3o/v+W//7a67z//f7n///+1f3//P/9/v//////////YYroJwAAA3RJREFUWIXtV2tzqjoU5bQHpFLxBVXR8qzRGgopkICYwP//V3fj6Z05d85UEL7dOWt8xHHWys5+ZSNJ30AbKd/91Q2T5fJZHSKgvpfYHKRgZgJP5QECs1gIfzZAQD+KmlsDPKks46pmRn8B1RJ1Vb3396M8zwSY0N8L8rys60rY/QMxLaq6rj8n/QXiQtQ1W7+8LLT7zNBe3962E2nKqlpw9gk42Mb29aWzgP5xPueHtVlUWZTksIZXmOfvi84CzuEjyZMjxrsgAjal5yQ85/m6+xkmC8MLSZLkl8s5SSjNUQI/tp3Ik9n69VXf2t7phBC8TwlNUxKRMP/Qu/BfD0kSeUeaU+A1uFzyZk3yZNMlKV/eUoICoJMQQNKUUrAddGi0PxpaBwXdNCxKSbBDKHABsIgSOEOw51XWpcGoY/1IQ3cXnaMAESCuTo2enzVZycxWG2TTmjlouTzlITpFNEW76JJHuCmrBmzbpjDxQmM29YIwdAkhKQryS5Fda6K+frC2XFgc0uTgBSgIUEjQzs0vWQZtgRcF2AASldPSorQ3ktIkOkVpGrqBm9NTUUFF4NXKj0VjQtbWHxYbFyE3bOIQoIgiBqSGj/dZBlI1nz/fFtAdYBFKUBieAhruMyjpKl75eBXHHMS4697kTxzYOwI+IdE+Snf7jMXQmAqfMYabUJSuddsAz7MQJfZms8QJRX5cVtWVh32/OU1dIuemgDabOSlxJrJmQCrsM/zLdeB+zq/fWYuAJK1JetAlbfuZk6CsWFbWv4MvjZYwqHYarqWJnQMfWlr1lYJfqI6jlv2lsZc6imYnlOxwWf6H3RzAbO2umhNuVN1LQ2u+57z6XaGqyy4tQV8vpLFlmeMpBv5V4d9S4HbnO0JRZGnkMSjCJv/5tQxE2Z1/hfy8gzoSohQALkR2J7/xZykg/EVZ8FKUx9ZW8KcJJrSxogQLOMts/f5LVplDIxO8LIv4fX339lJzuUL9MOxb5qwPXZK2WcF4gU2l74Rg+KwoGO4/okxxAR44jnsLGKxgQjj9pyxwYsE6lM/3An4mhrhAetqXgrfdAzctgCPgAZNqM6Vxq/+Q1/ggPrbcIjchbzAeEAIQsOP5oMcmdT7vn4RXC0aDnpj+4v8CWVWV8Xj0hbGiqPJdma08/Xh4eHz8+QuPjw8PP55Gfyr8A9ycqlLsEzZHAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 240000,
            ap: 5555,
            dps: 465.5,
            speed: 4,
            range: 800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3333,
            freq: 358,
            foreswing: 59,
            backswing: 72,
            tba: 150
          },
          stageStats: {
            actualHp: 108000,
            actualAp: 2499,
            actualDps: 209.47,
            magnification: "45%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 3,
      stageName: "突然の死",
      baseHp: 160000,
      width: 4000,
      enemyLimit: 30,
      requiredCost: 150,
      costLimits: {
        lower: 0,
        upper: 0
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
          treasureId: "7000",
          treasureName: "キャラクタードロップ(7000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "150000",
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
          enemyId: "153",
          enemyName: "カニ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQADAAAFAQEJAwAOBAIYCAMmCgJICAU6EwM+GgRFGgWUAAFZJAlvIwd/HwZjLQ59IQeAIQKBJwqMJgpqOBeQKgybKwySMBJ2QBueNhOpMw6tNRCtOBGESyK8OBCWWS7XRRXLShy5UiqaaDvkUh21ZTrtWh/FbUaxeUveaDnxZiq7hlfmdkP2cjT6fTzHkWDgiVn6iUfamWT5lFXbpnL2oXDnsoDtvYr2ypv916v/5MH///++CyS7AAAAQHRSTlMANbVxzRr/9lqi/Q3Hgv4C/7Ik/WkNlT3/sv5R/4S/3bD//v//7f//////z/////////////////////////8A/Bst6gAABGNJREFUWIXtlVl3m0gQhXESW8s4GAnJQrgtmcV0Q5odQbN5/v+/mlugk5NlTl5mHlW2hGj1/epWVWNrf//H0G6AG+AGuAFugBvgBrgB/nfAb7Hf7w8vz2+/xuthT/H7/p/iab/d7o7HsyuS6IcQIkqS97fj8bjbPv0RsD2ez+/CF3mRz9IcoCQv6O1SCCHib4c/EfY71xdJEuVFQUq6Xookh5YITQEfl28vKORfIE/bw+GwO/vYGOUwAAxdL5cGn4smJx8Tof12Oh1ffm0G5Kd313Z9iKKfDFyaHJymgQXcJLCQBUK8n54P279+0EMuIteeihcQ5hOACm9IBGl0tQBO7MOefz4dvtvYH85ocxTYblQkkUgKAkyEvG2bSXpJZguRiIoiiGEqE+fTy0x4ejljTlnseYG4Aq4WUHzTYglGpspwEaLKgiCoZRC47vtMOJz9rKpl6EkZxnkk8lmfzN4bjOFymRzkDWqIlXLsMAyQMQxOWyrg2Y5VEGRxIMsyjkV8KTICtH1BBwinqOkbukRV28ZV35WO7WbDOHZN5r5C/yqDKvDzpoW1VJWyrLIs6/q6Vqn0HOaFslS1GlQcV3XXd6oM3bj5QIzoz9teO6R14PpJO47tJQ5Kpbp+mKLHJ6VKeq+vS1gr0zCoR5KPQ98m76/aIZSYf9UNWOspW9f1PRINI377fuh67Bx7Wu0medxO6QcsNRiFtjNtAGAOhI9BSpnWCtHRbtxxLNBd181y0Yxz/nHoVB35trZxQtuGg5kw1pxPLjpAPE+mMuUen3kS2bN+/Ljq+7osK/+svaEHtluRZsCXQ+rxq4mSex6fosReGYZVNw6zmvQqDgLpHrW3GkbtoFZ1UqBXIwiESEspS+5wvHBFKUFF4jn5gH7UWSR8lx21oydhlghVRCmGQYUOp+rTlFk8dSyPqihn7x9XucqiGHobgA1TKuU4mVUUZRXaPvSSOfCOg8lM5limI7mXXjsHOdqB9sVZJnw7sDbaxqpTXqrUjqMsyTD1njOHgnFuGTp+YAMdHufk3dxfACLf9coJIL0QLXbcIEuaDu1zLIt5jqVbzNAJ4HXIDGt9P09TVaquYt93HS8E4Nm0LF5KzgzT8WNUFzqmCesgUBgWpojWdlcx5HWWkdz2uGWZz9p2Y5qWwx398evX53PWKu5ZhmFajJGceRzPAy9RNY22zurJPOmRwjA3eBy3G+x3mLn6/PnLwnBDZjnkXdfXcO+hFgSTqqTjVUV4XEmO/jumYZBeu1sZ5IGtF4sHhG6Qf6Y/rHXnKqeScLa6qXJBansaj2l8vdM0pF0bhmExc/0whw5HprG2MIlZTS3hdadil8K24c9iqNNYLz7da8tPyKwTwXj4MXTGpuxoBzlhjKcSYsiRyGDwry8WqyVKuL9brlaPumnqi58AlJl6YaIgZsIJkurrNeSLhW4am9Xq89399z/s98vdbrn89OV7LBZrisUaOiIZ5uPj9avVcondf13/LfwDjAMhzDMfbnUAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 2500,
            actualDps: 1630.4,
            magnification: "1000%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "50.0-60.0s",
            delayFrames: "1,500-1,800f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "153",
          enemyName: "カニ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQADAAAFAQEJAwAOBAIYCAMmCgJICAU6EwM+GgRFGgWUAAFZJAlvIwd/HwZjLQ59IQeAIQKBJwqMJgpqOBeQKgybKwySMBJ2QBueNhOpMw6tNRCtOBGESyK8OBCWWS7XRRXLShy5UiqaaDvkUh21ZTrtWh/FbUaxeUveaDnxZiq7hlfmdkP2cjT6fTzHkWDgiVn6iUfamWT5lFXbpnL2oXDnsoDtvYr2ypv916v/5MH///++CyS7AAAAQHRSTlMANbVxzRr/9lqi/Q3Hgv4C/7Ik/WkNlT3/sv5R/4S/3bD//v//7f//////z/////////////////////////8A/Bst6gAABGNJREFUWIXtlVl3m0gQhXESW8s4GAnJQrgtmcV0Q5odQbN5/v+/mlugk5NlTl5mHlW2hGj1/epWVWNrf//H0G6AG+AGuAFugBvgBrgB/nfAb7Hf7w8vz2+/xuthT/H7/p/iab/d7o7HsyuS6IcQIkqS97fj8bjbPv0RsD2ez+/CF3mRz9IcoCQv6O1SCCHib4c/EfY71xdJEuVFQUq6Xookh5YITQEfl28vKORfIE/bw+GwO/vYGOUwAAxdL5cGn4smJx8Tof12Oh1ffm0G5Kd313Z9iKKfDFyaHJymgQXcJLCQBUK8n54P279+0EMuIteeihcQ5hOACm9IBGl0tQBO7MOefz4dvtvYH85ocxTYblQkkUgKAkyEvG2bSXpJZguRiIoiiGEqE+fTy0x4ejljTlnseYG4Aq4WUHzTYglGpspwEaLKgiCoZRC47vtMOJz9rKpl6EkZxnkk8lmfzN4bjOFymRzkDWqIlXLsMAyQMQxOWyrg2Y5VEGRxIMsyjkV8KTICtH1BBwinqOkbukRV28ZV35WO7WbDOHZN5r5C/yqDKvDzpoW1VJWyrLIs6/q6Vqn0HOaFslS1GlQcV3XXd6oM3bj5QIzoz9teO6R14PpJO47tJQ5Kpbp+mKLHJ6VKeq+vS1gr0zCoR5KPQ98m76/aIZSYf9UNWOspW9f1PRINI377fuh67Bx7Wu0medxO6QcsNRiFtjNtAGAOhI9BSpnWCtHRbtxxLNBd181y0Yxz/nHoVB35trZxQtuGg5kw1pxPLjpAPE+mMuUen3kS2bN+/Ljq+7osK/+svaEHtluRZsCXQ+rxq4mSex6fosReGYZVNw6zmvQqDgLpHrW3GkbtoFZ1UqBXIwiESEspS+5wvHBFKUFF4jn5gH7UWSR8lx21oydhlghVRCmGQYUOp+rTlFk8dSyPqihn7x9XucqiGHobgA1TKuU4mVUUZRXaPvSSOfCOg8lM5limI7mXXjsHOdqB9sVZJnw7sDbaxqpTXqrUjqMsyTD1njOHgnFuGTp+YAMdHufk3dxfACLf9coJIL0QLXbcIEuaDu1zLIt5jqVbzNAJ4HXIDGt9P09TVaquYt93HS8E4Nm0LF5KzgzT8WNUFzqmCesgUBgWpojWdlcx5HWWkdz2uGWZz9p2Y5qWwx398evX53PWKu5ZhmFajJGceRzPAy9RNY22zurJPOmRwjA3eBy3G+x3mLn6/PnLwnBDZjnkXdfXcO+hFgSTqqTjVUV4XEmO/jumYZBeu1sZ5IGtF4sHhG6Qf6Y/rHXnKqeScLa6qXJBansaj2l8vdM0pF0bhmExc/0whw5HprG2MIlZTS3hdadil8K24c9iqNNYLz7da8tPyKwTwXj4MXTGpuxoBzlhjKcSYsiRyGDwry8WqyVKuL9brlaPumnqi58AlJl6YaIgZsIJkurrNeSLhW4am9Xq89399z/s98vdbrn89OV7LBZrisUaOiIZ5uPj9avVcondf13/LfwDjAMhzDMfbnUAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 2500,
            actualDps: 1630.4,
            magnification: "1000%",
            count: "0",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "25.0-30.0s",
            delayFrames: "750-900f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "153",
          enemyName: "カニ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQADAAAFAQEJAwAOBAIYCAMmCgJICAU6EwM+GgRFGgWUAAFZJAlvIwd/HwZjLQ59IQeAIQKBJwqMJgpqOBeQKgybKwySMBJ2QBueNhOpMw6tNRCtOBGESyK8OBCWWS7XRRXLShy5UiqaaDvkUh21ZTrtWh/FbUaxeUveaDnxZiq7hlfmdkP2cjT6fTzHkWDgiVn6iUfamWT5lFXbpnL2oXDnsoDtvYr2ypv916v/5MH///++CyS7AAAAQHRSTlMANbVxzRr/9lqi/Q3Hgv4C/7Ik/WkNlT3/sv5R/4S/3bD//v//7f//////z/////////////////////////8A/Bst6gAABGNJREFUWIXtlVl3m0gQhXESW8s4GAnJQrgtmcV0Q5odQbN5/v+/mlugk5NlTl5mHlW2hGj1/epWVWNrf//H0G6AG+AGuAFugBvgBrgB/nfAb7Hf7w8vz2+/xuthT/H7/p/iab/d7o7HsyuS6IcQIkqS97fj8bjbPv0RsD2ez+/CF3mRz9IcoCQv6O1SCCHib4c/EfY71xdJEuVFQUq6Xookh5YITQEfl28vKORfIE/bw+GwO/vYGOUwAAxdL5cGn4smJx8Tof12Oh1ffm0G5Kd313Z9iKKfDFyaHJymgQXcJLCQBUK8n54P279+0EMuIteeihcQ5hOACm9IBGl0tQBO7MOefz4dvtvYH85ocxTYblQkkUgKAkyEvG2bSXpJZguRiIoiiGEqE+fTy0x4ejljTlnseYG4Aq4WUHzTYglGpspwEaLKgiCoZRC47vtMOJz9rKpl6EkZxnkk8lmfzN4bjOFymRzkDWqIlXLsMAyQMQxOWyrg2Y5VEGRxIMsyjkV8KTICtH1BBwinqOkbukRV28ZV35WO7WbDOHZN5r5C/yqDKvDzpoW1VJWyrLIs6/q6Vqn0HOaFslS1GlQcV3XXd6oM3bj5QIzoz9teO6R14PpJO47tJQ5Kpbp+mKLHJ6VKeq+vS1gr0zCoR5KPQ98m76/aIZSYf9UNWOspW9f1PRINI377fuh67Bx7Wu0medxO6QcsNRiFtjNtAGAOhI9BSpnWCtHRbtxxLNBd181y0Yxz/nHoVB35trZxQtuGg5kw1pxPLjpAPE+mMuUen3kS2bN+/Ljq+7osK/+svaEHtluRZsCXQ+rxq4mSex6fosReGYZVNw6zmvQqDgLpHrW3GkbtoFZ1UqBXIwiESEspS+5wvHBFKUFF4jn5gH7UWSR8lx21oydhlghVRCmGQYUOp+rTlFk8dSyPqihn7x9XucqiGHobgA1TKuU4mVUUZRXaPvSSOfCOg8lM5limI7mXXjsHOdqB9sVZJnw7sDbaxqpTXqrUjqMsyTD1njOHgnFuGTp+YAMdHufk3dxfACLf9coJIL0QLXbcIEuaDu1zLIt5jqVbzNAJ4HXIDGt9P09TVaquYt93HS8E4Nm0LF5KzgzT8WNUFzqmCesgUBgWpojWdlcx5HWWkdz2uGWZz9p2Y5qWwx398evX53PWKu5ZhmFajJGceRzPAy9RNY22zurJPOmRwjA3eBy3G+x3mLn6/PnLwnBDZjnkXdfXcO+hFgSTqqTjVUV4XEmO/jumYZBeu1sZ5IGtF4sHhG6Qf6Y/rHXnKqeScLa6qXJBansaj2l8vdM0pF0bhmExc/0whw5HprG2MIlZTS3hdadil8K24c9iqNNYLz7da8tPyKwTwXj4MXTGpuxoBzlhjKcSYsiRyGDwry8WqyVKuL9brlaPumnqi58AlJl6YaIgZsIJkurrNeSLhW4am9Xq89399z/s98vdbrn89OV7LBZrisUaOiIZ5uPj9avVcondf13/LfwDjAMhzDMfbnUAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 2500,
            actualDps: 1630.4,
            magnification: "1000%",
            count: "6",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "8.3-11.7s",
            delayFrames: "250-350f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "153",
          enemyName: "カニ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQADAAAFAQEJAwAOBAIYCAMmCgJICAU6EwM+GgRFGgWUAAFZJAlvIwd/HwZjLQ59IQeAIQKBJwqMJgpqOBeQKgybKwySMBJ2QBueNhOpMw6tNRCtOBGESyK8OBCWWS7XRRXLShy5UiqaaDvkUh21ZTrtWh/FbUaxeUveaDnxZiq7hlfmdkP2cjT6fTzHkWDgiVn6iUfamWT5lFXbpnL2oXDnsoDtvYr2ypv916v/5MH///++CyS7AAAAQHRSTlMANbVxzRr/9lqi/Q3Hgv4C/7Ik/WkNlT3/sv5R/4S/3bD//v//7f//////z/////////////////////////8A/Bst6gAABGNJREFUWIXtlVl3m0gQhXESW8s4GAnJQrgtmcV0Q5odQbN5/v+/mlugk5NlTl5mHlW2hGj1/epWVWNrf//H0G6AG+AGuAFugBvgBrgB/nfAb7Hf7w8vz2+/xuthT/H7/p/iab/d7o7HsyuS6IcQIkqS97fj8bjbPv0RsD2ez+/CF3mRz9IcoCQv6O1SCCHib4c/EfY71xdJEuVFQUq6Xookh5YITQEfl28vKORfIE/bw+GwO/vYGOUwAAxdL5cGn4smJx8Tof12Oh1ffm0G5Kd313Z9iKKfDFyaHJymgQXcJLCQBUK8n54P279+0EMuIteeihcQ5hOACm9IBGl0tQBO7MOefz4dvtvYH85ocxTYblQkkUgKAkyEvG2bSXpJZguRiIoiiGEqE+fTy0x4ejljTlnseYG4Aq4WUHzTYglGpspwEaLKgiCoZRC47vtMOJz9rKpl6EkZxnkk8lmfzN4bjOFymRzkDWqIlXLsMAyQMQxOWyrg2Y5VEGRxIMsyjkV8KTICtH1BBwinqOkbukRV28ZV35WO7WbDOHZN5r5C/yqDKvDzpoW1VJWyrLIs6/q6Vqn0HOaFslS1GlQcV3XXd6oM3bj5QIzoz9teO6R14PpJO47tJQ5Kpbp+mKLHJ6VKeq+vS1gr0zCoR5KPQ98m76/aIZSYf9UNWOspW9f1PRINI377fuh67Bx7Wu0medxO6QcsNRiFtjNtAGAOhI9BSpnWCtHRbtxxLNBd181y0Yxz/nHoVB35trZxQtuGg5kw1pxPLjpAPE+mMuUen3kS2bN+/Ljq+7osK/+svaEHtluRZsCXQ+rxq4mSex6fosReGYZVNw6zmvQqDgLpHrW3GkbtoFZ1UqBXIwiESEspS+5wvHBFKUFF4jn5gH7UWSR8lx21oydhlghVRCmGQYUOp+rTlFk8dSyPqihn7x9XucqiGHobgA1TKuU4mVUUZRXaPvSSOfCOg8lM5limI7mXXjsHOdqB9sVZJnw7sDbaxqpTXqrUjqMsyTD1njOHgnFuGTp+YAMdHufk3dxfACLf9coJIL0QLXbcIEuaDu1zLIt5jqVbzNAJ4HXIDGt9P09TVaquYt93HS8E4Nm0LF5KzgzT8WNUFzqmCesgUBgWpojWdlcx5HWWkdz2uGWZz9p2Y5qWwx398evX53PWKu5ZhmFajJGceRzPAy9RNY22zurJPOmRwjA3eBy3G+x3mLn6/PnLwnBDZjnkXdfXcO+hFgSTqqTjVUV4XEmO/jumYZBeu1sZ5IGtF4sHhG6Qf6Y/rHXnKqeScLa6qXJBansaj2l8vdM0pF0bhmExc/0whw5HprG2MIlZTS3hdadil8K24c9iqNNYLz7da8tPyKwTwXj4MXTGpuxoBzlhjKcSYsiRyGDwry8WqyVKuL9brlaPumnqi58AlJl6YaIgZsIJkurrNeSLhW4am9Xq89399z/s98vdbrn89OV7LBZrisUaOiIZ5uPj9avVcondf13/LfwDjAMhzDMfbnUAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 2500,
            actualDps: 1630.4,
            magnification: "1000%",
            count: "9",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-8.3s",
            delayFrames: "150-250f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "153",
          enemyName: "カニ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQADAAAFAQEJAwAOBAIYCAMmCgJICAU6EwM+GgRFGgWUAAFZJAlvIwd/HwZjLQ59IQeAIQKBJwqMJgpqOBeQKgybKwySMBJ2QBueNhOpMw6tNRCtOBGESyK8OBCWWS7XRRXLShy5UiqaaDvkUh21ZTrtWh/FbUaxeUveaDnxZiq7hlfmdkP2cjT6fTzHkWDgiVn6iUfamWT5lFXbpnL2oXDnsoDtvYr2ypv916v/5MH///++CyS7AAAAQHRSTlMANbVxzRr/9lqi/Q3Hgv4C/7Ik/WkNlT3/sv5R/4S/3bD//v//7f//////z/////////////////////////8A/Bst6gAABGNJREFUWIXtlVl3m0gQhXESW8s4GAnJQrgtmcV0Q5odQbN5/v+/mlugk5NlTl5mHlW2hGj1/epWVWNrf//H0G6AG+AGuAFugBvgBrgB/nfAb7Hf7w8vz2+/xuthT/H7/p/iab/d7o7HsyuS6IcQIkqS97fj8bjbPv0RsD2ez+/CF3mRz9IcoCQv6O1SCCHib4c/EfY71xdJEuVFQUq6Xookh5YITQEfl28vKORfIE/bw+GwO/vYGOUwAAxdL5cGn4smJx8Tof12Oh1ffm0G5Kd313Z9iKKfDFyaHJymgQXcJLCQBUK8n54P279+0EMuIteeihcQ5hOACm9IBGl0tQBO7MOefz4dvtvYH85ocxTYblQkkUgKAkyEvG2bSXpJZguRiIoiiGEqE+fTy0x4ejljTlnseYG4Aq4WUHzTYglGpspwEaLKgiCoZRC47vtMOJz9rKpl6EkZxnkk8lmfzN4bjOFymRzkDWqIlXLsMAyQMQxOWyrg2Y5VEGRxIMsyjkV8KTICtH1BBwinqOkbukRV28ZV35WO7WbDOHZN5r5C/yqDKvDzpoW1VJWyrLIs6/q6Vqn0HOaFslS1GlQcV3XXd6oM3bj5QIzoz9teO6R14PpJO47tJQ5Kpbp+mKLHJ6VKeq+vS1gr0zCoR5KPQ98m76/aIZSYf9UNWOspW9f1PRINI377fuh67Bx7Wu0medxO6QcsNRiFtjNtAGAOhI9BSpnWCtHRbtxxLNBd181y0Yxz/nHoVB35trZxQtuGg5kw1pxPLjpAPE+mMuUen3kS2bN+/Ljq+7osK/+svaEHtluRZsCXQ+rxq4mSex6fosReGYZVNw6zmvQqDgLpHrW3GkbtoFZ1UqBXIwiESEspS+5wvHBFKUFF4jn5gH7UWSR8lx21oydhlghVRCmGQYUOp+rTlFk8dSyPqihn7x9XucqiGHobgA1TKuU4mVUUZRXaPvSSOfCOg8lM5limI7mXXjsHOdqB9sVZJnw7sDbaxqpTXqrUjqMsyTD1njOHgnFuGTp+YAMdHufk3dxfACLf9coJIL0QLXbcIEuaDu1zLIt5jqVbzNAJ4HXIDGt9P09TVaquYt93HS8E4Nm0LF5KzgzT8WNUFzqmCesgUBgWpojWdlcx5HWWkdz2uGWZz9p2Y5qWwx398evX53PWKu5ZhmFajJGceRzPAy9RNY22zurJPOmRwjA3eBy3G+x3mLn6/PnLwnBDZjnkXdfXcO+hFgSTqqTjVUV4XEmO/jumYZBeu1sZ5IGtF4sHhG6Qf6Y/rHXnKqeScLa6qXJBansaj2l8vdM0pF0bhmExc/0whw5HprG2MIlZTS3hdadil8K24c9iqNNYLz7da8tPyKwTwXj4MXTGpuxoBzlhjKcSYsiRyGDwry8WqyVKuL9brlaPumnqi58AlJl6YaIgZsIJkurrNeSLhW4am9Xq89399z/s98vdbrn89OV7LBZrisUaOiIZ5uPj9avVcondf13/LfwDjAMhzDMfbnUAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 25000,
            actualAp: 2500,
            actualDps: 1630.4,
            magnification: "1000%",
            count: "13",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "3.3-6.7s",
            delayFrames: "100-200f",
            baseHpRatio: "99%",
            isBoss: false
          }
        },
        {
          enemyId: "153",
          enemyName: "カニ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQADAAAFAQEJAwAOBAIYCAMmCgJICAU6EwM+GgRFGgWUAAFZJAlvIwd/HwZjLQ59IQeAIQKBJwqMJgpqOBeQKgybKwySMBJ2QBueNhOpMw6tNRCtOBGESyK8OBCWWS7XRRXLShy5UiqaaDvkUh21ZTrtWh/FbUaxeUveaDnxZiq7hlfmdkP2cjT6fTzHkWDgiVn6iUfamWT5lFXbpnL2oXDnsoDtvYr2ypv916v/5MH///++CyS7AAAAQHRSTlMANbVxzRr/9lqi/Q3Hgv4C/7Ik/WkNlT3/sv5R/4S/3bD//v//7f//////z/////////////////////////8A/Bst6gAABGNJREFUWIXtlVl3m0gQhXESW8s4GAnJQrgtmcV0Q5odQbN5/v+/mlugk5NlTl5mHlW2hGj1/epWVWNrf//H0G6AG+AGuAFugBvgBrgB/nfAb7Hf7w8vz2+/xuthT/H7/p/iab/d7o7HsyuS6IcQIkqS97fj8bjbPv0RsD2ez+/CF3mRz9IcoCQv6O1SCCHib4c/EfY71xdJEuVFQUq6Xookh5YITQEfl28vKORfIE/bw+GwO/vYGOUwAAxdL5cGn4smJx8Tof12Oh1ffm0G5Kd313Z9iKKfDFyaHJymgQXcJLCQBUK8n54P279+0EMuIteeihcQ5hOACm9IBGl0tQBO7MOefz4dvtvYH85ocxTYblQkkUgKAkyEvG2bSXpJZguRiIoiiGEqE+fTy0x4ejljTlnseYG4Aq4WUHzTYglGpspwEaLKgiCoZRC47vtMOJz9rKpl6EkZxnkk8lmfzN4bjOFymRzkDWqIlXLsMAyQMQxOWyrg2Y5VEGRxIMsyjkV8KTICtH1BBwinqOkbukRV28ZV35WO7WbDOHZN5r5C/yqDKvDzpoW1VJWyrLIs6/q6Vqn0HOaFslS1GlQcV3XXd6oM3bj5QIzoz9teO6R14PpJO47tJQ5Kpbp+mKLHJ6VKeq+vS1gr0zCoR5KPQ98m76/aIZSYf9UNWOspW9f1PRINI377fuh67Bx7Wu0medxO6QcsNRiFtjNtAGAOhI9BSpnWCtHRbtxxLNBd181y0Yxz/nHoVB35trZxQtuGg5kw1pxPLjpAPE+mMuUen3kS2bN+/Ljq+7osK/+svaEHtluRZsCXQ+rxq4mSex6fosReGYZVNw6zmvQqDgLpHrW3GkbtoFZ1UqBXIwiESEspS+5wvHBFKUFF4jn5gH7UWSR8lx21oydhlghVRCmGQYUOp+rTlFk8dSyPqihn7x9XucqiGHobgA1TKuU4mVUUZRXaPvSSOfCOg8lM5limI7mXXjsHOdqB9sVZJnw7sDbaxqpTXqrUjqMsyTD1njOHgnFuGTp+YAMdHufk3dxfACLf9coJIL0QLXbcIEuaDu1zLIt5jqVbzNAJ4HXIDGt9P09TVaquYt93HS8E4Nm0LF5KzgzT8WNUFzqmCesgUBgWpojWdlcx5HWWkdz2uGWZz9p2Y5qWwx398evX53PWKu5ZhmFajJGceRzPAy9RNY22zurJPOmRwjA3eBy3G+x3mLn6/PnLwnBDZjnkXdfXcO+hFgSTqqTjVUV4XEmO/jumYZBeu1sZ5IGtF4sHhG6Qf6Y/rHXnKqeScLa6qXJBansaj2l8vdM0pF0bhmExc/0whw5HprG2MIlZTS3hdadil8K24c9iqNNYLz7da8tPyKwTwXj4MXTGpuxoBzlhjKcSYsiRyGDwry8WqyVKuL9brlaPumnqi58AlJl6YaIgZsIJkurrNeSLhW4am9Xq89399z/s98vdbrn89OV7LBZrisUaOiIZ5uPj9avVcondf13/LfwDjAMhzDMfbnUAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 250,
            actualAp: 25,
            actualDps: 16.3,
            magnification: "10%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          }
        }]
    },
    {
      stageId: 4,
      stageName: "天国に一番近い生き物",
      baseHp: 250000,
      width: 5000,
      enemyLimit: 40,
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
          treasureId: "8000",
          treasureName: "キャラクタードロップ(8000)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "250000",
          amount: "11",
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
          enemyId: "152",
          enemyName: "ハマンボ崎あゆみ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAEFAwQEBAQICAcKCgoOCwoeGRMfHR0vJhwyKB4wLiw+MSc+Pj1MPClKRD1bQTBTRzxTTkRTTktkUztqVz54XENtYk2GaUd8blWHdlykal2cc02egViIhYKqiFyni2Cakoq7kWKzlmqimoyhnZS5nXWppKHXoGPNqnfOsIK4t7fnrm3KuZTfvIj1tXDGwr/zwIHTz83yzpnY1tT92p/h3tz44r7n5uXx8O/7+/v///+es6wrAAAAQHRSTlMApsHe7gokSBWDMRFuJjuIUrUl13+UGv9hqtN4/02s0v3o/v+W//7a67z//f7n///+1f3//P/9/v//////////YYroJwAAA3RJREFUWIXtV2tzqjoU5bQHpFLxBVXR8qzRGgopkICYwP//V3fj6Z05d85UEL7dOWt8xHHWys5+ZSNJ30AbKd/91Q2T5fJZHSKgvpfYHKRgZgJP5QECs1gIfzZAQD+KmlsDPKks46pmRn8B1RJ1Vb3396M8zwSY0N8L8rys60rY/QMxLaq6rj8n/QXiQtQ1W7+8LLT7zNBe3962E2nKqlpw9gk42Mb29aWzgP5xPueHtVlUWZTksIZXmOfvi84CzuEjyZMjxrsgAjal5yQ85/m6+xkmC8MLSZLkl8s5SSjNUQI/tp3Ik9n69VXf2t7phBC8TwlNUxKRMP/Qu/BfD0kSeUeaU+A1uFzyZk3yZNMlKV/eUoICoJMQQNKUUrAddGi0PxpaBwXdNCxKSbBDKHABsIgSOEOw51XWpcGoY/1IQ3cXnaMAESCuTo2enzVZycxWG2TTmjlouTzlITpFNEW76JJHuCmrBmzbpjDxQmM29YIwdAkhKQryS5Fda6K+frC2XFgc0uTgBSgIUEjQzs0vWQZtgRcF2AASldPSorQ3ktIkOkVpGrqBm9NTUUFF4NXKj0VjQtbWHxYbFyE3bOIQoIgiBqSGj/dZBlI1nz/fFtAdYBFKUBieAhruMyjpKl75eBXHHMS4697kTxzYOwI+IdE+Snf7jMXQmAqfMYabUJSuddsAz7MQJfZms8QJRX5cVtWVh32/OU1dIuemgDabOSlxJrJmQCrsM/zLdeB+zq/fWYuAJK1JetAlbfuZk6CsWFbWv4MvjZYwqHYarqWJnQMfWlr1lYJfqI6jlv2lsZc6imYnlOxwWf6H3RzAbO2umhNuVN1LQ2u+57z6XaGqyy4tQV8vpLFlmeMpBv5V4d9S4HbnO0JRZGnkMSjCJv/5tQxE2Z1/hfy8gzoSohQALkR2J7/xZykg/EVZ8FKUx9ZW8KcJJrSxogQLOMts/f5LVplDIxO8LIv4fX339lJzuUL9MOxb5qwPXZK2WcF4gU2l74Rg+KwoGO4/okxxAR44jnsLGKxgQjj9pyxwYsE6lM/3An4mhrhAetqXgrfdAzctgCPgAZNqM6Vxq/+Q1/ggPrbcIjchbzAeEAIQsOP5oMcmdT7vn4RXC0aDnpj+4v8CWVWV8Xj0hbGiqPJdma08/Xh4eHz8+QuPjw8PP55Gfyr8A9ycqlLsEzZHAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 240000,
            ap: 5555,
            dps: 465.5,
            speed: 4,
            range: 800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3333,
            freq: 358,
            foreswing: 59,
            backswing: 72,
            tba: 150
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 8332,
            actualDps: 698.25,
            magnification: "150%",
            count: "1",
            spawnTime: "5.0s",
            spawnTimeFrames: "150f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "152",
          enemyName: "ハマンボ崎あゆみ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAAEFAwQEBAQICAcKCgoOCwoeGRMfHR0vJhwyKB4wLiw+MSc+Pj1MPClKRD1bQTBTRzxTTkRTTktkUztqVz54XENtYk2GaUd8blWHdlykal2cc02egViIhYKqiFyni2Cakoq7kWKzlmqimoyhnZS5nXWppKHXoGPNqnfOsIK4t7fnrm3KuZTfvIj1tXDGwr/zwIHTz83yzpnY1tT92p/h3tz44r7n5uXx8O/7+/v///+es6wrAAAAQHRSTlMApsHe7gokSBWDMRFuJjuIUrUl13+UGv9hqtN4/02s0v3o/v+W//7a67z//f7n///+1f3//P/9/v//////////YYroJwAAA3RJREFUWIXtV2tzqjoU5bQHpFLxBVXR8qzRGgopkICYwP//V3fj6Z05d85UEL7dOWt8xHHWys5+ZSNJ30AbKd/91Q2T5fJZHSKgvpfYHKRgZgJP5QECs1gIfzZAQD+KmlsDPKks46pmRn8B1RJ1Vb3396M8zwSY0N8L8rys60rY/QMxLaq6rj8n/QXiQtQ1W7+8LLT7zNBe3962E2nKqlpw9gk42Mb29aWzgP5xPueHtVlUWZTksIZXmOfvi84CzuEjyZMjxrsgAjal5yQ85/m6+xkmC8MLSZLkl8s5SSjNUQI/tp3Ik9n69VXf2t7phBC8TwlNUxKRMP/Qu/BfD0kSeUeaU+A1uFzyZk3yZNMlKV/eUoICoJMQQNKUUrAddGi0PxpaBwXdNCxKSbBDKHABsIgSOEOw51XWpcGoY/1IQ3cXnaMAESCuTo2enzVZycxWG2TTmjlouTzlITpFNEW76JJHuCmrBmzbpjDxQmM29YIwdAkhKQryS5Fda6K+frC2XFgc0uTgBSgIUEjQzs0vWQZtgRcF2AASldPSorQ3ktIkOkVpGrqBm9NTUUFF4NXKj0VjQtbWHxYbFyE3bOIQoIgiBqSGj/dZBlI1nz/fFtAdYBFKUBieAhruMyjpKl75eBXHHMS4697kTxzYOwI+IdE+Snf7jMXQmAqfMYabUJSuddsAz7MQJfZms8QJRX5cVtWVh32/OU1dIuemgDabOSlxJrJmQCrsM/zLdeB+zq/fWYuAJK1JetAlbfuZk6CsWFbWv4MvjZYwqHYarqWJnQMfWlr1lYJfqI6jlv2lsZc6imYnlOxwWf6H3RzAbO2umhNuVN1LQ2u+57z6XaGqyy4tQV8vpLFlmeMpBv5V4d9S4HbnO0JRZGnkMSjCJv/5tQxE2Z1/hfy8gzoSohQALkR2J7/xZykg/EVZ8FKUx9ZW8KcJJrSxogQLOMts/f5LVplDIxO8LIv4fX339lJzuUL9MOxb5qwPXZK2WcF4gU2l74Rg+KwoGO4/okxxAR44jnsLGKxgQjj9pyxwYsE6lM/3An4mhrhAetqXgrfdAzctgCPgAZNqM6Vxq/+Q1/ggPrbcIjchbzAeEAIQsOP5oMcmdT7vn4RXC0aDnpj+4v8CWVWV8Xj0hbGiqPJdma08/Xh4eHz8+QuPjw8PP55Gfyr8A9ycqlLsEzZHAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 240000,
            ap: 5555,
            dps: 465.5,
            speed: 4,
            range: 800,
            rangeType: "範囲",
            kbLevel: 1,
            money: 3333,
            freq: 358,
            foreswing: 59,
            backswing: 72,
            tba: 150
          },
          stageStats: {
            actualHp: 360000,
            actualAp: 8332,
            actualDps: 698.25,
            magnification: "150%",
            count: "1",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "1.3s",
            spawnTimeFrames: "40f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "17.7s",
            spawnTimeFrames: "530f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "19.0s",
            spawnTimeFrames: "570f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "20.7s",
            spawnTimeFrames: "620f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "22.7s",
            spawnTimeFrames: "680f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "36.0s",
            spawnTimeFrames: "1,080f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "37.3s",
            spawnTimeFrames: "1,120f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "39.3s",
            spawnTimeFrames: "1,180f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "52.7s",
            spawnTimeFrames: "1,580f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "53.7s",
            spawnTimeFrames: "1,610f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "55.0s",
            spawnTimeFrames: "1,650f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "56.7s",
            spawnTimeFrames: "1,700f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "58.7s",
            spawnTimeFrames: "1,760f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "61.0s",
            spawnTimeFrames: "1,830f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "154",
          enemyName: "イワシ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAHwjPU8jPlAjPlAkPlAkPlAkPlA3N0IlP1AmP1IAU1YmQFIrQ1MsRVgmS1UvRlUvR1YwTWE0TFszTV4/V2lOWFQBf39LYXBJYnRQZnFeZl9BcZNUbX9rc21TepRrgI9viZ2Bh4COjXt/laZlnsSfnX5xqtCNorCXrbuwrI6Iu9qhuMahxNm6wbW3y9nGyrrD09zG3OnX5Ozm8fjx+P1/U4a+AAAAQHRSTlMADyVBY5Cyyd/2/wIkE8CVo68FOk8Dd4nPCvL/p7/j//4Cvv/M//7+/////+j/////////////////////////MN23PAAAAndJREFUWIXtlGF3mjAUht3Wbm1pRQGZlmqoUYFEkSZKgyH4///VbkB7WsG5bt92eHJyNCHvm8slN53O7zHsn7o9XFh2Hnu6nEEzLzsMmqcdP1mFq/Cyg+XajQGM0XwVzv25bz4MNOf0I3c5/ehQLrfHvuf5yAMe+z2gtHluMHAnmLxzMAxHL+91PRQtynb4WWgb896ov+rQw/TNwTHNrlcp6Msb62j98hItOEd98/7UYAAOQRkDiM0ZKNeVart9lSpXea4kR3wLwzjmZPFUczB0DGRaihe0VOrVEpT7YrfTPedUD7Ent2tad7D6noejCHZer7X6Nc8zLopcyL1KNkXZA1UURcqVJMFj7aNBCAi25izNUibyLJWFTDZqB12JHXShJJbgsN8rRqPgqZZHq48p5ZtE5CIRIBQqFyKX0NWBnMUSQlCMpDxGdYOehwLKEpbyJM3ERkiZVcgjGaUskxmOOatHoLOIMCY0ZoxxztP0NT3CKSGEwhQnEaEM0ZjUc6CTGEyHCEdUE8eMa5+S2PP9MAQLDltjgoMA1b6CziEa244JcSBYATtV6IBi7M+TJAxL7wAhr36S4CDhYKzD0mcYvI5UAREENZUQT89AUdQPYmfUP+h1Heh0VEx63aMTvMWhnu6NeilANU/G79LiDKGAw3DiWnb3pBTPVfTH+8BwZmS1WboW3Ahd8Bo+WMDZy6DKwofRszNLlm45Z09XePj5O3Hg9N1RFQ1ci+bo0wadwcg6/IOL+S/07zH+Ud/S0tLS0tLS8n/wpYlPSL9+/9HA1Z/4HKS3dw3cVDYXDG5uNU36u/LJ7fWFN/imuapsTrgun309UfwCgPx3AmLBIacAAAAASUVORK5CYII=",
          traits: ["浮"],
          baseStats: {
            hp: 120,
            ap: 30,
            dps: 15.25,
            speed: 7,
            range: 125,
            rangeType: "単体",
            kbLevel: 2,
            money: 50,
            freq: 59,
            foreswing: 2,
            backswing: 20,
            tba: 29
          },
          stageStats: {
            actualHp: 1800,
            actualAp: 450,
            actualDps: 228.75,
            magnification: "1500%",
            count: "0",
            spawnTime: "63.7s",
            spawnTimeFrames: "1,910f",
            delay: "76.0-77.0s",
            delayFrames: "2,280-2,310f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/Pz9vTUh4Tk52WFZ4WVZ5W1h6XFd5Xlh8X1Z0ZFZxZmN+YVp+YVp+YlyCZV2EZl+lWluIaWGKa2OKbGKMb2eNb2aNcWmPcWeQcmiSdGqRd22Wdm1/f3+ghn6ih32jiHyliX+rjoOxlYiwlo2xl427oZW/o5a/pJbCqJzHrqLPuKvRuq/bxrnq08Pw3c/66Nn87uP98+z++fa8WBpcAAAAQHRSTlMAByI5WHWHlaS20+z7BB4JFx0qkjpZCv9HxGameASJ3fBYyav/09+V6ALezf/v//bJ/v7z4v////X/////////ewpBDwAAAVJJREFUWIXtk9lygjAUhqndFyShSkVRFFAsBhRsiNng/d+qcTpOb5zpJJedfNcn3/xnieNcxc/TNI2GiuB6wV/klDN6KopNHHlGgpT1UgrJ0DKExgIhJS2n/txUIETXC3YYfRoJFlRyIftOssMEmAj8gtZMyK6X7JgDV18w3KCMcHEOIU67lf4uYbwM0Y9BDeJrpT1JGCejtGHKoPqQyqCbAcymrr9p2VkgKG7WcK65DQidICoJ54JWqG2P6SzSzKAIFnvGOWqZ7DhpS32BA9eY4UodVC+qamcgmI+3GBF1DX3PiUkCx5uhDCEuJcF4byJwRtss+2CM1RUxaeG8zqyhpKJtbZgAHNqaNgRhXi+NBLAok6bGcUHa1EwQRuMwTybvcTIxErjA80AAXABN/rTFYrFYLBaL5Z9y84vJ88Hg4fnC0+1AX3D38PJ24fXx/nrRN7DhNUF3J6CdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 1350,
            actualAp: 270,
            actualDps: 162.0,
            magnification: "1500%",
            count: "0",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/Pz9vTUh4Tk52WFZ4WVZ5W1h6XFd5Xlh8X1Z0ZFZxZmN+YVp+YVp+YlyCZV2EZl+lWluIaWGKa2OKbGKMb2eNb2aNcWmPcWeQcmiSdGqRd22Wdm1/f3+ghn6ih32jiHyliX+rjoOxlYiwlo2xl427oZW/o5a/pJbCqJzHrqLPuKvRuq/bxrnq08Pw3c/66Nn87uP98+z++fa8WBpcAAAAQHRSTlMAByI5WHWHlaS20+z7BB4JFx0qkjpZCv9HxGameASJ3fBYyav/09+V6ALezf/v//bJ/v7z4v////X/////////ewpBDwAAAVJJREFUWIXtk9lygjAUhqndFyShSkVRFFAsBhRsiNng/d+qcTpOb5zpJJedfNcn3/xnieNcxc/TNI2GiuB6wV/klDN6KopNHHlGgpT1UgrJ0DKExgIhJS2n/txUIETXC3YYfRoJFlRyIftOssMEmAj8gtZMyK6X7JgDV18w3KCMcHEOIU67lf4uYbwM0Y9BDeJrpT1JGCejtGHKoPqQyqCbAcymrr9p2VkgKG7WcK65DQidICoJ54JWqG2P6SzSzKAIFnvGOWqZ7DhpS32BA9eY4UodVC+qamcgmI+3GBF1DX3PiUkCx5uhDCEuJcF4byJwRtss+2CM1RUxaeG8zqyhpKJtbZgAHNqaNgRhXi+NBLAok6bGcUHa1EwQRuMwTybvcTIxErjA80AAXABN/rTFYrFYLBaL5Z9y84vJ88Hg4fnC0+1AX3D38PJ24fXx/nrRN7DhNUF3J6CdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 1350,
            actualAp: 270,
            actualDps: 162.0,
            magnification: "1500%",
            count: "0",
            spawnTime: "60.0s",
            spawnTimeFrames: "1,800f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "155",
          enemyName: "イカ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/Pz9vTUh4Tk52WFZ4WVZ5W1h6XFd5Xlh8X1Z0ZFZxZmN+YVp+YVp+YlyCZV2EZl+lWluIaWGKa2OKbGKMb2eNb2aNcWmPcWeQcmiSdGqRd22Wdm1/f3+ghn6ih32jiHyliX+rjoOxlYiwlo2xl427oZW/o5a/pJbCqJzHrqLPuKvRuq/bxrnq08Pw3c/66Nn87uP98+z++fa8WBpcAAAAQHRSTlMAByI5WHWHlaS20+z7BB4JFx0qkjpZCv9HxGameASJ3fBYyav/09+V6ALezf/v//bJ/v7z4v////X/////////ewpBDwAAAVJJREFUWIXtk9lygjAUhqndFyShSkVRFFAsBhRsiNng/d+qcTpOb5zpJJedfNcn3/xnieNcxc/TNI2GiuB6wV/klDN6KopNHHlGgpT1UgrJ0DKExgIhJS2n/txUIETXC3YYfRoJFlRyIftOssMEmAj8gtZMyK6X7JgDV18w3KCMcHEOIU67lf4uYbwM0Y9BDeJrpT1JGCejtGHKoPqQyqCbAcymrr9p2VkgKG7WcK65DQidICoJ54JWqG2P6SzSzKAIFnvGOWqZ7DhpS32BA9eY4UodVC+qamcgmI+3GBF1DX3PiUkCx5uhDCEuJcF4byJwRtss+2CM1RUxaeG8zqyhpKJtbZgAHNqaNgRhXi+NBLAok6bGcUHa1EwQRuMwTybvcTIxErjA80AAXABN/rTFYrFYLBaL5Z9y84vJ88Hg4fnC0+1AX3D38PJ24fXx/nrRN7DhNUF3J6CdAAAAAElFTkSuQmCC",
          traits: ["浮"],
          baseStats: {
            hp: 90,
            ap: 18,
            dps: 10.8,
            speed: 8,
            range: 110,
            rangeType: "単体",
            kbLevel: 3,
            money: 25,
            freq: 50,
            foreswing: 1,
            backswing: 20,
            tba: 25
          },
          stageStats: {
            actualHp: 1350,
            actualAp: 270,
            actualDps: 162.0,
            magnification: "1500%",
            count: "0",
            spawnTime: "120.0s",
            spawnTimeFrames: "3,600f",
            delay: "30.0-40.0s",
            delayFrames: "900-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          }
        },
        {
          enemyId: "153",
          enemyName: "カニ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAABAQECAQADAAAFAQEJAwAOBAIYCAMmCgJICAU6EwM+GgRFGgWUAAFZJAlvIwd/HwZjLQ59IQeAIQKBJwqMJgpqOBeQKgybKwySMBJ2QBueNhOpMw6tNRCtOBGESyK8OBCWWS7XRRXLShy5UiqaaDvkUh21ZTrtWh/FbUaxeUveaDnxZiq7hlfmdkP2cjT6fTzHkWDgiVn6iUfamWT5lFXbpnL2oXDnsoDtvYr2ypv916v/5MH///++CyS7AAAAQHRSTlMANbVxzRr/9lqi/Q3Hgv4C/7Ik/WkNlT3/sv5R/4S/3bD//v//7f//////z/////////////////////////8A/Bst6gAABGNJREFUWIXtlVl3m0gQhXESW8s4GAnJQrgtmcV0Q5odQbN5/v+/mlugk5NlTl5mHlW2hGj1/epWVWNrf//H0G6AG+AGuAFugBvgBrgB/nfAb7Hf7w8vz2+/xuthT/H7/p/iab/d7o7HsyuS6IcQIkqS97fj8bjbPv0RsD2ez+/CF3mRz9IcoCQv6O1SCCHib4c/EfY71xdJEuVFQUq6Xookh5YITQEfl28vKORfIE/bw+GwO/vYGOUwAAxdL5cGn4smJx8Tof12Oh1ffm0G5Kd313Z9iKKfDFyaHJymgQXcJLCQBUK8n54P279+0EMuIteeihcQ5hOACm9IBGl0tQBO7MOefz4dvtvYH85ocxTYblQkkUgKAkyEvG2bSXpJZguRiIoiiGEqE+fTy0x4ejljTlnseYG4Aq4WUHzTYglGpspwEaLKgiCoZRC47vtMOJz9rKpl6EkZxnkk8lmfzN4bjOFymRzkDWqIlXLsMAyQMQxOWyrg2Y5VEGRxIMsyjkV8KTICtH1BBwinqOkbukRV28ZV35WO7WbDOHZN5r5C/yqDKvDzpoW1VJWyrLIs6/q6Vqn0HOaFslS1GlQcV3XXd6oM3bj5QIzoz9teO6R14PpJO47tJQ5Kpbp+mKLHJ6VKeq+vS1gr0zCoR5KPQ98m76/aIZSYf9UNWOspW9f1PRINI377fuh67Bx7Wu0medxO6QcsNRiFtjNtAGAOhI9BSpnWCtHRbtxxLNBd181y0Yxz/nHoVB35trZxQtuGg5kw1pxPLjpAPE+mMuUen3kS2bN+/Ljq+7osK/+svaEHtluRZsCXQ+rxq4mSex6fosReGYZVNw6zmvQqDgLpHrW3GkbtoFZ1UqBXIwiESEspS+5wvHBFKUFF4jn5gH7UWSR8lx21oydhlghVRCmGQYUOp+rTlFk8dSyPqihn7x9XucqiGHobgA1TKuU4mVUUZRXaPvSSOfCOg8lM5limI7mXXjsHOdqB9sVZJnw7sDbaxqpTXqrUjqMsyTD1njOHgnFuGTp+YAMdHufk3dxfACLf9coJIL0QLXbcIEuaDu1zLIt5jqVbzNAJ4HXIDGt9P09TVaquYt93HS8E4Nm0LF5KzgzT8WNUFzqmCesgUBgWpojWdlcx5HWWkdz2uGWZz9p2Y5qWwx398evX53PWKu5ZhmFajJGceRzPAy9RNY22zurJPOmRwjA3eBy3G+x3mLn6/PnLwnBDZjnkXdfXcO+hFgSTqqTjVUV4XEmO/jumYZBeu1sZ5IGtF4sHhG6Qf6Y/rHXnKqeScLa6qXJBansaj2l8vdM0pF0bhmExc/0whw5HprG2MIlZTS3hdadil8K24c9iqNNYLz7da8tPyKwTwXj4MXTGpuxoBzlhjKcSYsiRyGDwry8WqyVKuL9brlaPumnqi58AlJl6YaIgZsIJkurrNeSLhW4am9Xq89399z/s98vdbrn89OV7LBZrisUaOiIZ5uPj9avVcondf13/LfwDjAMhzDMfbnUAAAAASUVORK5CYII=",
          traits: ["赤"],
          baseStats: {
            hp: 2500,
            ap: 250,
            dps: 163.04,
            speed: 5,
            range: 180,
            rangeType: "範囲",
            kbLevel: 2,
            money: 400,
            freq: 46,
            foreswing: 1,
            backswing: 7,
            tba: 23
          },
          stageStats: {
            actualHp: 37500,
            actualAp: 3750,
            actualDps: 2445.6,
            magnification: "1500%",
            count: "0",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "31.7-33.3s",
            delayFrames: "950-1,000f",
            baseHpRatio: "100%",
            isBoss: false
          }
        }]
    }
  ]
} as const;

export default e2089Data;

