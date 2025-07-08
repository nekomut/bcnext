// Stage 2088 Data
import type { StageData } from '../../app/stage/types';

export const e2088Data: StageData = {
  eventId: 2088,
  eventName: "生きろ！マンボウ！",
  typeId: 2,
  typeName: "コラボステージ",
  prefix: "C",
  mapId: 88,
  specialRule: null,
  crownData: {
    crownCount: 4,
    magnifications: [100, 200, 300, 400],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "イカ食べ過ぎ",
      baseHp: 3000,
      width: 3600,
      enemyLimit: 9,
      requiredCost: 50,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 200, 300, 400],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1160",
          treasureName: "にゃんぼう(175)",
          probability: "5",
          amount: "1",
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
          treasureId: "6000",
          treasureName: "キャラクタードロップ(6000)",
          probability: "15000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "10000",
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
            actualHp: 90,
            actualAp: 18,
            actualDps: 10.8,
            magnification: "100%",
            count: "1",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 90,
            actualAp: 18,
            actualDps: 10.8,
            magnification: "100%",
            count: "3",
            spawnTime: "20.0s",
            spawnTimeFrames: "600f",
            delay: "2.0-6.0s",
            delayFrames: "60-180f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 90,
            actualAp: 18,
            actualDps: 10.8,
            magnification: "100%",
            count: "0",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "20.0-40.0s",
            delayFrames: "600-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 90,
            actualAp: 18,
            actualDps: 10.8,
            magnification: "100%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "8.3-8.3s",
            delayFrames: "250-250f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 120,
            actualAp: 30,
            actualDps: 15.25,
            magnification: "100%",
            count: "5",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "5.0-5.0s",
            delayFrames: "150-150f",
            baseHpRatio: "90%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 1,
            actualAp: 360,
            actualDps: 108.0,
            magnification: "100%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "90%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "朝日が強すぎて",
      baseHp: 30000,
      width: 4000,
      enemyLimit: 12,
      requiredCost: 75,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 200, 300, 400],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1160",
          treasureName: "にゃんぼう(175)",
          probability: "10",
          amount: "1",
          times: "-2",
          limitText: "-2"
        },
        {
          treasureId: "6500",
          treasureName: "キャラクタードロップ(6500)",
          probability: "1",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "20000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "15000",
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
            actualHp: 2,
            actualAp: 720,
            actualDps: 216.0,
            magnification: "200%",
            count: "3",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "6.7-26.7s",
            delayFrames: "200-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            actualHp: 2,
            actualAp: 720,
            actualDps: 216.0,
            magnification: "200%",
            count: "0",
            spawnTime: "80.0s",
            spawnTimeFrames: "2,400f",
            delay: "26.7-53.3s",
            delayFrames: "800-1,600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
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
            actualHp: 5000,
            actualAp: 500,
            actualDps: 326.08,
            magnification: "200%",
            count: "5",
            spawnTime: "26.7s",
            spawnTimeFrames: "800f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
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
            actualHp: 5000,
            actualAp: 500,
            actualDps: 326.08,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
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
            actualHp: 5000,
            actualAp: 500,
            actualDps: 326.08,
            magnification: "200%",
            count: "3",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "20.0-30.0s",
            delayFrames: "600-900f",
            baseHpRatio: "99%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
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
            actualHp: 5000,
            actualAp: 500,
            actualDps: 326.08,
            magnification: "200%",
            count: "6",
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
          enemyId: "151",
          enemyName: "マンボ王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEAAP6kAwupCQ6uDQ8cRnKiGRciR3chR3slSXq4HBYtT3swUH0sVYUtVIQzWYe5Ly0Bf38zZZpTY4JHaJNMaIznMCa+TSpGdaPFTDLOUj5jeZs+iMWPc2NkgqR+f5HLalHdY0ZSksR1ka5NpeF+l7ZloM7Sh0yHoLxetOt2r9aVrcegssZ3xe3ms0aC0PSpw9nbvLKR2fnC1OKp4vz9zbXP4O3b6fLq8/r6+/2Cojd9AAAAQHRSTlMAFFKVsNz9AQsyTgmMHnBa/6k6/unJZAL/7HNS//7+ruqb////4s//////xv/+////5v/////+/f//////////2fwNIQAAA8NJREFUWIXtlt12ojAUhW1tO46IKIiDqKkilv8AwWBAxPd/qzmBWmun4Mxcu9fSC+r+2OckOWmncy1B0uei0PlOvX7vZ+/bv3yWNMOxt55fIXo/p9N+r9MbDAa3AeJY82kae58QvcEqCFav/f7AGvT/hqAYEWWx/lFI720XWJa1Wlmr/q0aREkWgID8hKXeGTHdWdZisRgtA2vQuwHQcbwWRVVBdnRBAID7R7vRYvU6bSUIasQybz5UFA3ZfkRTbwiEabCsAgDAClatBFGF6tl2rHBpmmHbs7EsD6zlCLSzRotFYL21AiYQPfHBC7IjLhI7M2sH5uVuCQDrBkCF5L5hJywvimNZHnMQS5zNJtjtAkgBhFaAMJxoCBlJXhy5ipxxAcI3a8RyGby2AIR5bCqKETKw1t6zaBJVCGv52rYTxC1NkOaG0EhKKaNXCBo5m6D1/Z3OEPm+hsCfJLQSu1CSCJ6RrdQKkCbI1uwwz88ASq+qoDnzZEH4/qy+91ABAPyWi36kqFtZZPCV6XNvLTcC1gRawFgY1oRLDspyoigEFtXc7vfbxibGzNBsSkOuL4ycvLwQWJposz+QJoAcJ7B/3fAC+FQJJEh5M83DYd8E0FOfA9x3BIeECCGbQ3xEMr641NzvvUZAZCtwgtwLwtDgUBk8TWjbdRhnv21sou7bsBF5BLeGIG53w+TSE8Zws7+jI3ghuhAQHEsE/gTVedywOJ3IVm7cCPKEjwGjLsJ1IQ7SgBdRmycIXYyPxxPZx/MmgDCuAWeEBgAYKpQBID8SQrKUZM7+EDfWIG8xQia2bbvqoq/xniaMkbIs05QUGXwhcjg0+cV1miDTSTMQjJOyJLCqPs0xlF5iXJ4yTDIUtO0DlmiQICtA5QmUOigpCDlxAEnLDGNH2wSNW1lPKcxD08SQoeAzDXwEE3LkLGhBmmFTVWHONgJ82AgQwTQdkhVVjuII1XD/6ZhiTNBWFmWxsYcwU2EjKJwAdVQp4FNNRxAhjqm27CIuWYVlBALia0GqZn4ImyY8XDdPEy4YCMRXakEOByBnSupAE+Dea/XzqQrnSZ3UCK1K4kDpBDvObGKumzfxRxN8W1OH7zcb10SdcQxSx7J+6/V1EzRV4ncrv1z9JIIZKktccE23DNOLfsmSLE3gRMIdCf+nrOVff2G6kiCNJ8jgN3vs6TdL/rYG04+Syi3+89u5xKEXV+7/MVcSRNCP/7bfddddd931RQ8Pj1zdpyt1q4cPD7f9j0/PL416fnq8Deh2n7n+8HJ1u18BvwH+z9P4Nki72gAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 3000,
            ap: 3000,
            dps: 428.57,
            speed: 4,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 600,
            freq: 210,
            foreswing: 11,
            backswing: 80,
            tba: 100
          },
          stageStats: {
            actualHp: 6000,
            actualAp: 6000,
            actualDps: 857.14,
            magnification: "200%",
            count: "1",
            spawnTime: "0.1s",
            spawnTimeFrames: "2f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "99%",
            isBoss: true
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "寿命を迎える",
      baseHp: 90000,
      width: 4500,
      enemyLimit: 50,
      requiredCost: 100,
      costLimits: {
        lower: 0,
        upper: 0
      },
      crownData: {
        crownCount: 4,
        magnifications: [100, 200, 300, 400],
        baseDifficulty: 1
      },
      treasures: [
        {
          treasureId: "1160",
          treasureName: "にゃんぼう(175)",
          probability: "30",
          amount: "1",
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
          treasureId: "5000",
          treasureName: "キャラクタードロップ(5000)",
          probability: "30000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        },
        {
          treasureId: "500",
          treasureName: "アイテム500",
          probability: "20000",
          amount: "6",
          times: "-1",
          limitText: "-1"
        }],
      enemies: [
        {
          enemyId: "151",
          enemyName: "マンボ王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEAAP6kAwupCQ6uDQ8cRnKiGRciR3chR3slSXq4HBYtT3swUH0sVYUtVIQzWYe5Ly0Bf38zZZpTY4JHaJNMaIznMCa+TSpGdaPFTDLOUj5jeZs+iMWPc2NkgqR+f5HLalHdY0ZSksR1ka5NpeF+l7ZloM7Sh0yHoLxetOt2r9aVrcegssZ3xe3ms0aC0PSpw9nbvLKR2fnC1OKp4vz9zbXP4O3b6fLq8/r6+/2Cojd9AAAAQHRSTlMAFFKVsNz9AQsyTgmMHnBa/6k6/unJZAL/7HNS//7+ruqb////4s//////xv/+////5v/////+/f//////////2fwNIQAAA8NJREFUWIXtlt12ojAUhW1tO46IKIiDqKkilv8AwWBAxPd/qzmBWmun4Mxcu9fSC+r+2OckOWmncy1B0uei0PlOvX7vZ+/bv3yWNMOxt55fIXo/p9N+r9MbDAa3AeJY82kae58QvcEqCFav/f7AGvT/hqAYEWWx/lFI720XWJa1Wlmr/q0aREkWgID8hKXeGTHdWdZisRgtA2vQuwHQcbwWRVVBdnRBAID7R7vRYvU6bSUIasQybz5UFA3ZfkRTbwiEabCsAgDAClatBFGF6tl2rHBpmmHbs7EsD6zlCLSzRotFYL21AiYQPfHBC7IjLhI7M2sH5uVuCQDrBkCF5L5hJywvimNZHnMQS5zNJtjtAkgBhFaAMJxoCBlJXhy5ipxxAcI3a8RyGby2AIR5bCqKETKw1t6zaBJVCGv52rYTxC1NkOaG0EhKKaNXCBo5m6D1/Z3OEPm+hsCfJLQSu1CSCJ6RrdQKkCbI1uwwz88ASq+qoDnzZEH4/qy+91ABAPyWi36kqFtZZPCV6XNvLTcC1gRawFgY1oRLDspyoigEFtXc7vfbxibGzNBsSkOuL4ycvLwQWJposz+QJoAcJ7B/3fAC+FQJJEh5M83DYd8E0FOfA9x3BIeECCGbQ3xEMr641NzvvUZAZCtwgtwLwtDgUBk8TWjbdRhnv21sou7bsBF5BLeGIG53w+TSE8Zws7+jI3ghuhAQHEsE/gTVedywOJ3IVm7cCPKEjwGjLsJ1IQ7SgBdRmycIXYyPxxPZx/MmgDCuAWeEBgAYKpQBID8SQrKUZM7+EDfWIG8xQia2bbvqoq/xniaMkbIs05QUGXwhcjg0+cV1miDTSTMQjJOyJLCqPs0xlF5iXJ4yTDIUtO0DlmiQICtA5QmUOigpCDlxAEnLDGNH2wSNW1lPKcxD08SQoeAzDXwEE3LkLGhBmmFTVWHONgJ82AgQwTQdkhVVjuII1XD/6ZhiTNBWFmWxsYcwU2EjKJwAdVQp4FNNRxAhjqm27CIuWYVlBALia0GqZn4ImyY8XDdPEy4YCMRXakEOByBnSupAE+Dea/XzqQrnSZ3UCK1K4kDpBDvObGKumzfxRxN8W1OH7zcb10SdcQxSx7J+6/V1EzRV4ncrv1z9JIIZKktccE23DNOLfsmSLE3gRMIdCf+nrOVff2G6kiCNJ8jgN3vs6TdL/rYG04+Syi3+89u5xKEXV+7/MVcSRNCP/7bfddddd931RQ8Pj1zdpyt1q4cPD7f9j0/PL416fnq8Deh2n7n+8HJ1u18BvwH+z9P4Nki72gAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 3000,
            ap: 3000,
            dps: 428.57,
            speed: 4,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 600,
            freq: 210,
            foreswing: 11,
            backswing: 80,
            tba: 100
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 18000,
            actualDps: 2571.42,
            magnification: "600%",
            count: "1",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "151",
          enemyName: "マンボ王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEAAP6kAwupCQ6uDQ8cRnKiGRciR3chR3slSXq4HBYtT3swUH0sVYUtVIQzWYe5Ly0Bf38zZZpTY4JHaJNMaIznMCa+TSpGdaPFTDLOUj5jeZs+iMWPc2NkgqR+f5HLalHdY0ZSksR1ka5NpeF+l7ZloM7Sh0yHoLxetOt2r9aVrcegssZ3xe3ms0aC0PSpw9nbvLKR2fnC1OKp4vz9zbXP4O3b6fLq8/r6+/2Cojd9AAAAQHRSTlMAFFKVsNz9AQsyTgmMHnBa/6k6/unJZAL/7HNS//7+ruqb////4s//////xv/+////5v/////+/f//////////2fwNIQAAA8NJREFUWIXtlt12ojAUhW1tO46IKIiDqKkilv8AwWBAxPd/qzmBWmun4Mxcu9fSC+r+2OckOWmncy1B0uei0PlOvX7vZ+/bv3yWNMOxt55fIXo/p9N+r9MbDAa3AeJY82kae58QvcEqCFav/f7AGvT/hqAYEWWx/lFI720XWJa1Wlmr/q0aREkWgID8hKXeGTHdWdZisRgtA2vQuwHQcbwWRVVBdnRBAID7R7vRYvU6bSUIasQybz5UFA3ZfkRTbwiEabCsAgDAClatBFGF6tl2rHBpmmHbs7EsD6zlCLSzRotFYL21AiYQPfHBC7IjLhI7M2sH5uVuCQDrBkCF5L5hJywvimNZHnMQS5zNJtjtAkgBhFaAMJxoCBlJXhy5ipxxAcI3a8RyGby2AIR5bCqKETKw1t6zaBJVCGv52rYTxC1NkOaG0EhKKaNXCBo5m6D1/Z3OEPm+hsCfJLQSu1CSCJ6RrdQKkCbI1uwwz88ASq+qoDnzZEH4/qy+91ABAPyWi36kqFtZZPCV6XNvLTcC1gRawFgY1oRLDspyoigEFtXc7vfbxibGzNBsSkOuL4ycvLwQWJposz+QJoAcJ7B/3fAC+FQJJEh5M83DYd8E0FOfA9x3BIeECCGbQ3xEMr641NzvvUZAZCtwgtwLwtDgUBk8TWjbdRhnv21sou7bsBF5BLeGIG53w+TSE8Zws7+jI3ghuhAQHEsE/gTVedywOJ3IVm7cCPKEjwGjLsJ1IQ7SgBdRmycIXYyPxxPZx/MmgDCuAWeEBgAYKpQBID8SQrKUZM7+EDfWIG8xQia2bbvqoq/xniaMkbIs05QUGXwhcjg0+cV1miDTSTMQjJOyJLCqPs0xlF5iXJ4yTDIUtO0DlmiQICtA5QmUOigpCDlxAEnLDGNH2wSNW1lPKcxD08SQoeAzDXwEE3LkLGhBmmFTVWHONgJ82AgQwTQdkhVVjuII1XD/6ZhiTNBWFmWxsYcwU2EjKJwAdVQp4FNNRxAhjqm27CIuWYVlBALia0GqZn4ImyY8XDdPEy4YCMRXakEOByBnSupAE+Dea/XzqQrnSZ3UCK1K4kDpBDvObGKumzfxRxN8W1OH7zcb10SdcQxSx7J+6/V1EzRV4ncrv1z9JIIZKktccE23DNOLfsmSLE3gRMIdCf+nrOVff2G6kiCNJ8jgN3vs6TdL/rYG04+Syi3+89u5xKEXV+7/MVcSRNCP/7bfddddd931RQ8Pj1zdpyt1q4cPD7f9j0/PL416fnq8Deh2n7n+8HJ1u18BvwH+z9P4Nki72gAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 3000,
            ap: 3000,
            dps: 428.57,
            speed: 4,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 600,
            freq: 210,
            foreswing: 11,
            backswing: 80,
            tba: 100
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 18000,
            actualDps: 2571.42,
            magnification: "600%",
            count: "1",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "151",
          enemyName: "マンボ王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEAAP6kAwupCQ6uDQ8cRnKiGRciR3chR3slSXq4HBYtT3swUH0sVYUtVIQzWYe5Ly0Bf38zZZpTY4JHaJNMaIznMCa+TSpGdaPFTDLOUj5jeZs+iMWPc2NkgqR+f5HLalHdY0ZSksR1ka5NpeF+l7ZloM7Sh0yHoLxetOt2r9aVrcegssZ3xe3ms0aC0PSpw9nbvLKR2fnC1OKp4vz9zbXP4O3b6fLq8/r6+/2Cojd9AAAAQHRSTlMAFFKVsNz9AQsyTgmMHnBa/6k6/unJZAL/7HNS//7+ruqb////4s//////xv/+////5v/////+/f//////////2fwNIQAAA8NJREFUWIXtlt12ojAUhW1tO46IKIiDqKkilv8AwWBAxPd/qzmBWmun4Mxcu9fSC+r+2OckOWmncy1B0uei0PlOvX7vZ+/bv3yWNMOxt55fIXo/p9N+r9MbDAa3AeJY82kae58QvcEqCFav/f7AGvT/hqAYEWWx/lFI720XWJa1Wlmr/q0aREkWgID8hKXeGTHdWdZisRgtA2vQuwHQcbwWRVVBdnRBAID7R7vRYvU6bSUIasQybz5UFA3ZfkRTbwiEabCsAgDAClatBFGF6tl2rHBpmmHbs7EsD6zlCLSzRotFYL21AiYQPfHBC7IjLhI7M2sH5uVuCQDrBkCF5L5hJywvimNZHnMQS5zNJtjtAkgBhFaAMJxoCBlJXhy5ipxxAcI3a8RyGby2AIR5bCqKETKw1t6zaBJVCGv52rYTxC1NkOaG0EhKKaNXCBo5m6D1/Z3OEPm+hsCfJLQSu1CSCJ6RrdQKkCbI1uwwz88ASq+qoDnzZEH4/qy+91ABAPyWi36kqFtZZPCV6XNvLTcC1gRawFgY1oRLDspyoigEFtXc7vfbxibGzNBsSkOuL4ycvLwQWJposz+QJoAcJ7B/3fAC+FQJJEh5M83DYd8E0FOfA9x3BIeECCGbQ3xEMr641NzvvUZAZCtwgtwLwtDgUBk8TWjbdRhnv21sou7bsBF5BLeGIG53w+TSE8Zws7+jI3ghuhAQHEsE/gTVedywOJ3IVm7cCPKEjwGjLsJ1IQ7SgBdRmycIXYyPxxPZx/MmgDCuAWeEBgAYKpQBID8SQrKUZM7+EDfWIG8xQia2bbvqoq/xniaMkbIs05QUGXwhcjg0+cV1miDTSTMQjJOyJLCqPs0xlF5iXJ4yTDIUtO0DlmiQICtA5QmUOigpCDlxAEnLDGNH2wSNW1lPKcxD08SQoeAzDXwEE3LkLGhBmmFTVWHONgJ82AgQwTQdkhVVjuII1XD/6ZhiTNBWFmWxsYcwU2EjKJwAdVQp4FNNRxAhjqm27CIuWYVlBALia0GqZn4ImyY8XDdPEy4YCMRXakEOByBnSupAE+Dea/XzqQrnSZ3UCK1K4kDpBDvObGKumzfxRxN8W1OH7zcb10SdcQxSx7J+6/V1EzRV4ncrv1z9JIIZKktccE23DNOLfsmSLE3gRMIdCf+nrOVff2G6kiCNJ8jgN3vs6TdL/rYG04+Syi3+89u5xKEXV+7/MVcSRNCP/7bfddddd931RQ8Pj1zdpyt1q4cPD7f9j0/PL416fnq8Deh2n7n+8HJ1u18BvwH+z9P4Nki72gAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 3000,
            ap: 3000,
            dps: 428.57,
            speed: 4,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 600,
            freq: 210,
            foreswing: 11,
            backswing: 80,
            tba: 100
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 18000,
            actualDps: 2571.42,
            magnification: "600%",
            count: "1",
            spawnTime: "53.3s",
            spawnTimeFrames: "1,600f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "151",
          enemyName: "マンボ王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEAAP6kAwupCQ6uDQ8cRnKiGRciR3chR3slSXq4HBYtT3swUH0sVYUtVIQzWYe5Ly0Bf38zZZpTY4JHaJNMaIznMCa+TSpGdaPFTDLOUj5jeZs+iMWPc2NkgqR+f5HLalHdY0ZSksR1ka5NpeF+l7ZloM7Sh0yHoLxetOt2r9aVrcegssZ3xe3ms0aC0PSpw9nbvLKR2fnC1OKp4vz9zbXP4O3b6fLq8/r6+/2Cojd9AAAAQHRSTlMAFFKVsNz9AQsyTgmMHnBa/6k6/unJZAL/7HNS//7+ruqb////4s//////xv/+////5v/////+/f//////////2fwNIQAAA8NJREFUWIXtlt12ojAUhW1tO46IKIiDqKkilv8AwWBAxPd/qzmBWmun4Mxcu9fSC+r+2OckOWmncy1B0uei0PlOvX7vZ+/bv3yWNMOxt55fIXo/p9N+r9MbDAa3AeJY82kae58QvcEqCFav/f7AGvT/hqAYEWWx/lFI720XWJa1Wlmr/q0aREkWgID8hKXeGTHdWdZisRgtA2vQuwHQcbwWRVVBdnRBAID7R7vRYvU6bSUIasQybz5UFA3ZfkRTbwiEabCsAgDAClatBFGF6tl2rHBpmmHbs7EsD6zlCLSzRotFYL21AiYQPfHBC7IjLhI7M2sH5uVuCQDrBkCF5L5hJywvimNZHnMQS5zNJtjtAkgBhFaAMJxoCBlJXhy5ipxxAcI3a8RyGby2AIR5bCqKETKw1t6zaBJVCGv52rYTxC1NkOaG0EhKKaNXCBo5m6D1/Z3OEPm+hsCfJLQSu1CSCJ6RrdQKkCbI1uwwz88ASq+qoDnzZEH4/qy+91ABAPyWi36kqFtZZPCV6XNvLTcC1gRawFgY1oRLDspyoigEFtXc7vfbxibGzNBsSkOuL4ycvLwQWJposz+QJoAcJ7B/3fAC+FQJJEh5M83DYd8E0FOfA9x3BIeECCGbQ3xEMr641NzvvUZAZCtwgtwLwtDgUBk8TWjbdRhnv21sou7bsBF5BLeGIG53w+TSE8Zws7+jI3ghuhAQHEsE/gTVedywOJ3IVm7cCPKEjwGjLsJ1IQ7SgBdRmycIXYyPxxPZx/MmgDCuAWeEBgAYKpQBID8SQrKUZM7+EDfWIG8xQia2bbvqoq/xniaMkbIs05QUGXwhcjg0+cV1miDTSTMQjJOyJLCqPs0xlF5iXJ4yTDIUtO0DlmiQICtA5QmUOigpCDlxAEnLDGNH2wSNW1lPKcxD08SQoeAzDXwEE3LkLGhBmmFTVWHONgJ82AgQwTQdkhVVjuII1XD/6ZhiTNBWFmWxsYcwU2EjKJwAdVQp4FNNRxAhjqm27CIuWYVlBALia0GqZn4ImyY8XDdPEy4YCMRXakEOByBnSupAE+Dea/XzqQrnSZ3UCK1K4kDpBDvObGKumzfxRxN8W1OH7zcb10SdcQxSx7J+6/V1EzRV4ncrv1z9JIIZKktccE23DNOLfsmSLE3gRMIdCf+nrOVff2G6kiCNJ8jgN3vs6TdL/rYG04+Syi3+89u5xKEXV+7/MVcSRNCP/7bfddddd931RQ8Pj1zdpyt1q4cPD7f9j0/PL416fnq8Deh2n7n+8HJ1u18BvwH+z9P4Nki72gAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 3000,
            ap: 3000,
            dps: 428.57,
            speed: 4,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 600,
            freq: 210,
            foreswing: 11,
            backswing: 80,
            tba: 100
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 18000,
            actualDps: 2571.42,
            magnification: "600%",
            count: "1",
            spawnTime: "61.7s",
            spawnTimeFrames: "1,850f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "151",
          enemyName: "マンボ王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEAAP6kAwupCQ6uDQ8cRnKiGRciR3chR3slSXq4HBYtT3swUH0sVYUtVIQzWYe5Ly0Bf38zZZpTY4JHaJNMaIznMCa+TSpGdaPFTDLOUj5jeZs+iMWPc2NkgqR+f5HLalHdY0ZSksR1ka5NpeF+l7ZloM7Sh0yHoLxetOt2r9aVrcegssZ3xe3ms0aC0PSpw9nbvLKR2fnC1OKp4vz9zbXP4O3b6fLq8/r6+/2Cojd9AAAAQHRSTlMAFFKVsNz9AQsyTgmMHnBa/6k6/unJZAL/7HNS//7+ruqb////4s//////xv/+////5v/////+/f//////////2fwNIQAAA8NJREFUWIXtlt12ojAUhW1tO46IKIiDqKkilv8AwWBAxPd/qzmBWmun4Mxcu9fSC+r+2OckOWmncy1B0uei0PlOvX7vZ+/bv3yWNMOxt55fIXo/p9N+r9MbDAa3AeJY82kae58QvcEqCFav/f7AGvT/hqAYEWWx/lFI720XWJa1Wlmr/q0aREkWgID8hKXeGTHdWdZisRgtA2vQuwHQcbwWRVVBdnRBAID7R7vRYvU6bSUIasQybz5UFA3ZfkRTbwiEabCsAgDAClatBFGF6tl2rHBpmmHbs7EsD6zlCLSzRotFYL21AiYQPfHBC7IjLhI7M2sH5uVuCQDrBkCF5L5hJywvimNZHnMQS5zNJtjtAkgBhFaAMJxoCBlJXhy5ipxxAcI3a8RyGby2AIR5bCqKETKw1t6zaBJVCGv52rYTxC1NkOaG0EhKKaNXCBo5m6D1/Z3OEPm+hsCfJLQSu1CSCJ6RrdQKkCbI1uwwz88ASq+qoDnzZEH4/qy+91ABAPyWi36kqFtZZPCV6XNvLTcC1gRawFgY1oRLDspyoigEFtXc7vfbxibGzNBsSkOuL4ycvLwQWJposz+QJoAcJ7B/3fAC+FQJJEh5M83DYd8E0FOfA9x3BIeECCGbQ3xEMr641NzvvUZAZCtwgtwLwtDgUBk8TWjbdRhnv21sou7bsBF5BLeGIG53w+TSE8Zws7+jI3ghuhAQHEsE/gTVedywOJ3IVm7cCPKEjwGjLsJ1IQ7SgBdRmycIXYyPxxPZx/MmgDCuAWeEBgAYKpQBID8SQrKUZM7+EDfWIG8xQia2bbvqoq/xniaMkbIs05QUGXwhcjg0+cV1miDTSTMQjJOyJLCqPs0xlF5iXJ4yTDIUtO0DlmiQICtA5QmUOigpCDlxAEnLDGNH2wSNW1lPKcxD08SQoeAzDXwEE3LkLGhBmmFTVWHONgJ82AgQwTQdkhVVjuII1XD/6ZhiTNBWFmWxsYcwU2EjKJwAdVQp4FNNRxAhjqm27CIuWYVlBALia0GqZn4ImyY8XDdPEy4YCMRXakEOByBnSupAE+Dea/XzqQrnSZ3UCK1K4kDpBDvObGKumzfxRxN8W1OH7zcb10SdcQxSx7J+6/V1EzRV4ncrv1z9JIIZKktccE23DNOLfsmSLE3gRMIdCf+nrOVff2G6kiCNJ8jgN3vs6TdL/rYG04+Syi3+89u5xKEXV+7/MVcSRNCP/7bfddddd931RQ8Pj1zdpyt1q4cPD7f9j0/PL416fnq8Deh2n7n+8HJ1u18BvwH+z9P4Nki72gAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 3000,
            ap: 3000,
            dps: 428.57,
            speed: 4,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 600,
            freq: 210,
            foreswing: 11,
            backswing: 80,
            tba: 100
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 18000,
            actualDps: 2571.42,
            magnification: "600%",
            count: "1",
            spawnTime: "71.7s",
            spawnTimeFrames: "2,150f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "151",
          enemyName: "マンボ王",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQEAAP6kAwupCQ6uDQ8cRnKiGRciR3chR3slSXq4HBYtT3swUH0sVYUtVIQzWYe5Ly0Bf38zZZpTY4JHaJNMaIznMCa+TSpGdaPFTDLOUj5jeZs+iMWPc2NkgqR+f5HLalHdY0ZSksR1ka5NpeF+l7ZloM7Sh0yHoLxetOt2r9aVrcegssZ3xe3ms0aC0PSpw9nbvLKR2fnC1OKp4vz9zbXP4O3b6fLq8/r6+/2Cojd9AAAAQHRSTlMAFFKVsNz9AQsyTgmMHnBa/6k6/unJZAL/7HNS//7+ruqb////4s//////xv/+////5v/////+/f//////////2fwNIQAAA8NJREFUWIXtlt12ojAUhW1tO46IKIiDqKkilv8AwWBAxPd/qzmBWmun4Mxcu9fSC+r+2OckOWmncy1B0uei0PlOvX7vZ+/bv3yWNMOxt55fIXo/p9N+r9MbDAa3AeJY82kae58QvcEqCFav/f7AGvT/hqAYEWWx/lFI720XWJa1Wlmr/q0aREkWgID8hKXeGTHdWdZisRgtA2vQuwHQcbwWRVVBdnRBAID7R7vRYvU6bSUIasQybz5UFA3ZfkRTbwiEabCsAgDAClatBFGF6tl2rHBpmmHbs7EsD6zlCLSzRotFYL21AiYQPfHBC7IjLhI7M2sH5uVuCQDrBkCF5L5hJywvimNZHnMQS5zNJtjtAkgBhFaAMJxoCBlJXhy5ipxxAcI3a8RyGby2AIR5bCqKETKw1t6zaBJVCGv52rYTxC1NkOaG0EhKKaNXCBo5m6D1/Z3OEPm+hsCfJLQSu1CSCJ6RrdQKkCbI1uwwz88ASq+qoDnzZEH4/qy+91ABAPyWi36kqFtZZPCV6XNvLTcC1gRawFgY1oRLDspyoigEFtXc7vfbxibGzNBsSkOuL4ycvLwQWJposz+QJoAcJ7B/3fAC+FQJJEh5M83DYd8E0FOfA9x3BIeECCGbQ3xEMr641NzvvUZAZCtwgtwLwtDgUBk8TWjbdRhnv21sou7bsBF5BLeGIG53w+TSE8Zws7+jI3ghuhAQHEsE/gTVedywOJ3IVm7cCPKEjwGjLsJ1IQ7SgBdRmycIXYyPxxPZx/MmgDCuAWeEBgAYKpQBID8SQrKUZM7+EDfWIG8xQia2bbvqoq/xniaMkbIs05QUGXwhcjg0+cV1miDTSTMQjJOyJLCqPs0xlF5iXJ4yTDIUtO0DlmiQICtA5QmUOigpCDlxAEnLDGNH2wSNW1lPKcxD08SQoeAzDXwEE3LkLGhBmmFTVWHONgJ82AgQwTQdkhVVjuII1XD/6ZhiTNBWFmWxsYcwU2EjKJwAdVQp4FNNRxAhjqm27CIuWYVlBALia0GqZn4ImyY8XDdPEy4YCMRXakEOByBnSupAE+Dea/XzqQrnSZ3UCK1K4kDpBDvObGKumzfxRxN8W1OH7zcb10SdcQxSx7J+6/V1EzRV4ncrv1z9JIIZKktccE23DNOLfsmSLE3gRMIdCf+nrOVff2G6kiCNJ8jgN3vs6TdL/rYG04+Syi3+89u5xKEXV+7/MVcSRNCP/7bfddddd931RQ8Pj1zdpyt1q4cPD7f9j0/PL416fnq8Deh2n7n+8HJ1u18BvwH+z9P4Nki72gAAAABJRU5ErkJggg==",
          traits: ["浮"],
          baseStats: {
            hp: 3000,
            ap: 3000,
            dps: 428.57,
            speed: 4,
            range: 500,
            rangeType: "単体",
            kbLevel: 1,
            money: 600,
            freq: 210,
            foreswing: 11,
            backswing: 80,
            tba: 100
          },
          stageStats: {
            actualHp: 18000,
            actualAp: 18000,
            actualDps: 2571.42,
            magnification: "600%",
            count: "1",
            spawnTime: "83.3s",
            spawnTimeFrames: "2,500f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "0",
            spawnTime: "30.0s",
            spawnTimeFrames: "900f",
            delay: "10.0-20.0s",
            delayFrames: "300-600f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            spawnTime: "16.7s",
            spawnTimeFrames: "500f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "16",
            spawnTime: "0.0s",
            spawnTimeFrames: "0f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "16",
            spawnTime: "3.3s",
            spawnTimeFrames: "100f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
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
            count: "16",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
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
            actualHp: 15000,
            actualAp: 1500,
            actualDps: 978.24,
            magnification: "600%",
            count: "8",
            spawnTime: "50.0s",
            spawnTimeFrames: "1,500f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "153",
          enemyName: "タスマニアオオガニ",
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
            actualHp: 15000,
            actualAp: 1500,
            actualDps: 978.24,
            magnification: "600%",
            count: "4",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "5.0-10.0s",
            delayFrames: "150-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e2088Data;

