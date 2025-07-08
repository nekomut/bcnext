// Stage 24011 Data
import type { StageData } from '../../app/stage/types';

export const e24011Data: StageData = {
  eventId: 24011,
  eventName: "デッカーバチャン強襲 !!!(旧)",
  typeId: 24,
  typeName: "強襲ステージ",
  prefix: "A",
  mapId: 11,
  specialRule: null,
  crownData: {
    crownCount: 1,
    magnifications: [100],
    baseDifficulty: 1
  },
  stages: [
    {
      stageId: 0,
      stageName: "侵略 Lv.41",
      baseHp: 800000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 100,
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
          treasureId: "39",
          treasureName: "黄マタタビの実",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 50000,
            actualAp: 20000,
            actualDps: 14634.1,
            magnification: "1000%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1350000,
            actualAp: 37500,
            actualDps: 34087.5,
            magnification: "75000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 128000,
            actualAp: 9000,
            actualDps: 2231.4,
            magnification: "100%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 72000,
            actualAp: 40000,
            actualDps: 29268.32,
            magnification: "800%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 128000,
            actualAp: 9000,
            actualDps: 2231.4,
            magnification: "100%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 800,
            actualDps: 510.64,
            magnification: "100%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 1,
      stageName: "侵略 Lv.42",
      baseHp: 840000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 100,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 1150,
            actualAp: 460,
            actualDps: 920.0,
            magnification: "230%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 52500,
            actualAp: 21000,
            actualDps: 15365.81,
            magnification: "1050%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1350000,
            actualAp: 37500,
            actualDps: 34087.5,
            magnification: "75000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 166400,
            actualAp: 11700,
            actualDps: 2900.82,
            magnification: "130%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 76500,
            actualAp: 42500,
            actualDps: 31097.59,
            magnification: "850%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 880,
            actualDps: 561.7,
            magnification: "110%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 166400,
            actualAp: 11700,
            actualDps: 2900.82,
            magnification: "130%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 880,
            actualDps: 561.7,
            magnification: "110%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 5,
            actualAp: 880,
            actualDps: 561.7,
            magnification: "110%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 2,
      stageName: "侵略 Lv.43",
      baseHp: 880000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 100,
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
          treasureId: "86",
          treasureName: "素材（飛行）",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 1300,
            actualAp: 520,
            actualDps: 1040.0,
            magnification: "260%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 55000,
            actualAp: 22000,
            actualDps: 16097.51,
            magnification: "1100%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1440000,
            actualAp: 40000,
            actualDps: 36360.0,
            magnification: "80000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 204800,
            actualAp: 14400,
            actualDps: 3570.24,
            magnification: "160%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 81000,
            actualAp: 45000,
            actualDps: 32926.86,
            magnification: "900%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 960,
            actualDps: 612.77,
            magnification: "120%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 204800,
            actualAp: 14400,
            actualDps: 3570.24,
            magnification: "160%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 960,
            actualDps: 612.77,
            magnification: "120%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 960,
            actualDps: 612.77,
            magnification: "120%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 3,
      stageName: "侵略 Lv.44",
      baseHp: 920000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 100,
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
          treasureId: "105",
          treasureName: "統率力回復アイテム",
          probability: "1",
          amount: "4",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 1450,
            actualAp: 580,
            actualDps: 1160.0,
            magnification: "290%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 57500,
            actualAp: 23000,
            actualDps: 16829.22,
            magnification: "1150%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1530000,
            actualAp: 42500,
            actualDps: 38632.5,
            magnification: "85000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 243200,
            actualAp: 17100,
            actualDps: 4239.66,
            magnification: "190%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 85500,
            actualAp: 47500,
            actualDps: 34756.13,
            magnification: "950%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1040,
            actualDps: 663.83,
            magnification: "130%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 243200,
            actualAp: 17100,
            actualDps: 4239.66,
            magnification: "190%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1040,
            actualDps: 663.83,
            magnification: "130%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1040,
            actualDps: 663.83,
            magnification: "130%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 4,
      stageName: "侵略 Lv.45",
      baseHp: 960000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 120,
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
          treasureId: "38",
          treasureName: "緑マタタビの実",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 1500,
            actualAp: 600,
            actualDps: 1200.0,
            magnification: "300%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 60000,
            actualAp: 24000,
            actualDps: 17560.92,
            magnification: "1200%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1620000,
            actualAp: 45000,
            actualDps: 40905.0,
            magnification: "90000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 256000,
            actualAp: 18000,
            actualDps: 4462.8,
            magnification: "200%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 90000,
            actualAp: 50000,
            actualDps: 36585.4,
            magnification: "1000%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1040,
            actualDps: 663.83,
            magnification: "130%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 256000,
            actualAp: 18000,
            actualDps: 4462.8,
            magnification: "200%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1040,
            actualDps: 663.83,
            magnification: "130%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1040,
            actualDps: 663.83,
            magnification: "130%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 5,
      stageName: "侵略 Lv.46",
      baseHp: 1000000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 120,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 1600,
            actualAp: 640,
            actualDps: 1280.0,
            magnification: "320%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 62000,
            actualAp: 24800,
            actualDps: 18146.28,
            magnification: "1240%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1692000,
            actualAp: 47000,
            actualDps: 42723.0,
            magnification: "94000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 281600,
            actualAp: 19800,
            actualDps: 4909.08,
            magnification: "220%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 93600,
            actualAp: 52000,
            actualDps: 38048.82,
            magnification: "1040%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1040,
            actualDps: 663.83,
            magnification: "130%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 281600,
            actualAp: 19800,
            actualDps: 4909.08,
            magnification: "220%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1040,
            actualDps: 663.83,
            magnification: "130%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1040,
            actualDps: 663.83,
            magnification: "130%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 6,
      stageName: "侵略 Lv.47",
      baseHp: 1040000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 120,
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
          treasureId: "89",
          treasureName: "素材（天）",
          probability: "1",
          amount: "10",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 1700,
            actualAp: 680,
            actualDps: 1360.0,
            magnification: "340%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 64000,
            actualAp: 25600,
            actualDps: 18731.65,
            magnification: "1280%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1764000,
            actualAp: 49000,
            actualDps: 44541.0,
            magnification: "98000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 307200,
            actualAp: 21600,
            actualDps: 5355.36,
            magnification: "240%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 97200,
            actualAp: 54000,
            actualDps: 39512.23,
            magnification: "1080%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1040,
            actualDps: 663.83,
            magnification: "130%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 307200,
            actualAp: 21600,
            actualDps: 5355.36,
            magnification: "240%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1040,
            actualDps: 663.83,
            magnification: "130%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 6,
            actualAp: 1040,
            actualDps: 663.83,
            magnification: "130%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 7,
      stageName: "侵略 Lv.48",
      baseHp: 1080000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 120,
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
          treasureId: "11",
          treasureName: "にゃんこチケット",
          probability: "1",
          amount: "4",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 1800,
            actualAp: 720,
            actualDps: 1440.0,
            magnification: "360%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 66000,
            actualAp: 26400,
            actualDps: 19317.01,
            magnification: "1320%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1836000,
            actualAp: 51000,
            actualDps: 46359.0,
            magnification: "102000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 332800,
            actualAp: 23400,
            actualDps: 5801.64,
            magnification: "260%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMDAwMEBAQEBAQEBAQFBQUGBgYGBgYGBgYGBgYICAgJCQkKCgoNDQ0PDw8YGBgaGhodHR0dHR0eHh4hISElJSUpKSksLCwvLy8wMDAzMzM1NTU7Ozs9PT1ERERFRUVJSUlOTk5PT09YWFhZWVlbW1toaGhwcHB3d3eCgoKFhYWRkZGWlpabm5unp6e0tLTFxcXU1NTd3d3n5+fy8vL6+vr////hNFWuAAAAQHRSTlMABgwS8qXX+yOXshkqwOcxO0VqjHZcT4Kp3nr3a4yX7P61wabU8f3dzP/0rv3o0v7q/vL///T+/f7/////////tVrXHAAABXJJREFUWIWdV4t2qjoQLXDaYwteRBQf+EQUsWB4SRIg8f//6k6wPedqkdo7y7VQZHbmsbMzPD09aJI2nM4sTZUedbj1N9bR6RQdN0Ptf7l3LAczzquSRGPt50FI1jo8VfwMxstw3PsxQs/JS177A0KRLJQf+sujhF2WB3dSUqfzQ4DOmHwsX1GMUOYa9W3p0UzUkVd8hI9RjIM0GYrbSn/0mL80dD8D4IwGGYprAKX/8vIgwCiq6vzFh6WBH3j9nmHNPfvtMQAZACpSY/BzGaxW/tZ1vfCU743HAJRxzvJdTAilhKZBhmlZFGVVRDP5QYC3vPBXq9UuyHyU5nFWiXaWyfRRNkh9L7bBH2KPiwIhCu6MRFP1QX9o43C8hAjswCdnRgvOSxy5/Z+wUeqMtnmKMiQqeWYkdAa9B/P/k0XEWJmmgtAMuwOtwV1qI6ayyPm5QFS0krjDJnd9Nh/c3+e6SwWNRQbUGzRFr68THG2MO4kpo4gBBzNBpHDeVH1pllS8yvdWUwyyPoAAzhUiUIBs3Kho2lqkx/LFV3S5N3KWonrUh2cKr3GNp6HYLvxMnKF+k4U03J/SQOxmssoYz7vNkgoA9U7rmq+DztUS+p4UCDzPPF/5pEKTYWME2joijOWOofSen/v632ckK6yICIDzNEAp9VfdpiZCF0fuKXEBXTGXy791UqzNgWYX/qCVH2RLG90RRNmam5YClAsJjcwPnkuzIykqABBqiFaxv1tO/EljCPCwLEPkmkM4p96HUqgboWUkIEwA+D5sx60duL1GgIsNo7pem0s71UVccuhugKsKBxgFCCEAaBEiaYqFfJZhXevObB/D4pxh8AxyuOx2O9ueWPcB5DmpxTd3dCjsIiqYqB/IR5riCvZxgCANe3AfQN3Qy/mRjA3jHVfnT7uca5ygnY8mLSmoNaWBk2XieqJ0N8ZKGu+eW7SoBuBivQrF1Rf/+mjB6zaAOgWGSVmitOJNCOfq2DJhXIpYBiiOUdHoDvBRCw+kqRCNAhUYtt4dgCr8hkigWjGjNgDwc1MS7dOB4UHpaMqIs8eUNJWRJWabomsOqCfJGJ5aCy9jXyPgdN+WgThIOc9zlliSdfxaRmhv1G89UqRRzFiMy2OvPgq+AFRZg2xeAQzDskKUrjXjWH5x50XaxuPadLcooYtzdXr6HGs+r+JUjL8d0NQFiGiZDJUF+fRiH/6sJPG28Vi6ymF2oqiIDHlRKwNMVbmoJYPhJI/juE1MPsyKQMKOOjSBFAXFMcphIClPWz/GtKqS2bezob4/HfC+8yQbi/d3Z5vSsqSn49xc1pMJ2Xw7l/SOWXDaiB2rqKq+8MLQW097su7GCAQC+vuNvzJNEDr+Ub2OYVmGGCe0YxFv84qdZq3usmG6qe/ekk3tqFaIvcE6KVtzkDoz117t7Bt/yRg778fdzlS0eYSX5vAuFeClJkhJvr0B6IxjqD85jKQndbr1Ubi4g6C8ohTDJJLvrxF6Hkx20IC1CiwBpS+jebOoqeOgFlKGr/nacephXQiJ/i4O6iJq3lHywE6FDMEYc/W/uhak5KeFLJv1mwvH6+YkOm9xBQjYMa7opmwovK1V2VyWx0IpOT3c2RFSfxljxpL+DV2tMEO7EKYHaRCSgrN42TymiCd3O5y7+g2u5aKg2xczYGfkRAVFaN4cgTzHSfdwGN38qzk5/hwAZX1x9A73aqCuyamb4I0mgyl/zPBIOFPhi7gtq5p1pMfmYU9ZJHgSFNHYNF9fn8HeusJeDqndFT9fX01z0B/2J2l+U+cPM95s37bTfPX72uy/N36B/fPLDpavTSes1jdhzcnyH2G//mO/Lxdx++Wl2317Nvt/X5//BUlcOtC5guMJAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 100800,
            actualAp: 56000,
            actualDps: 40975.65,
            magnification: "1120%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 7,
            actualAp: 1120,
            actualDps: 714.9,
            magnification: "140%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 332800,
            actualAp: 23400,
            actualDps: 5801.64,
            magnification: "260%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 7,
            actualAp: 1120,
            actualDps: 714.9,
            magnification: "140%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 7,
            actualAp: 1120,
            actualDps: 714.9,
            magnification: "140%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 8,
      stageName: "侵略 Lv.49",
      baseHp: 1120000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 120,
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
          treasureId: "37",
          treasureName: "青マタタビの実",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 1900,
            actualAp: 760,
            actualDps: 1520.0,
            magnification: "380%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 68000,
            actualAp: 27200,
            actualDps: 19902.38,
            magnification: "1360%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1908000,
            actualAp: 53000,
            actualDps: 48177.0,
            magnification: "106000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 358400,
            actualAp: 25200,
            actualDps: 6247.92,
            magnification: "280%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgIDAwMDAwMEBAQEBAQEBAQFBQUGBgYGBgYGBgYGBgYICAgJCQkKCgoNDQ0PDw8YGBgaGhodHR0dHR0eHh4hISElJSUpKSksLCwvLy8wMDAzMzM1NTU7Ozs9PT1ERERFRUVJSUlOTk5PT09YWFhZWVlbW1toaGhwcHB3d3eCgoKFhYWRkZGWlpabm5unp6e0tLTFxcXU1NTd3d3n5+fy8vL6+vr////hNFWuAAAAQHRSTlMABgwS8qXX+yOXshkqwOcxO0VqjHZcT4Kp3nr3a4yX7P61wabU8f3dzP/0rv3o0v7q/vL///T+/f7/////////tVrXHAAABXJJREFUWIWdV4t2qjoQLXDaYwteRBQf+EQUsWB4SRIg8f//6k6wPedqkdo7y7VQZHbmsbMzPD09aJI2nM4sTZUedbj1N9bR6RQdN0Ptf7l3LAczzquSRGPt50FI1jo8VfwMxstw3PsxQs/JS177A0KRLJQf+sujhF2WB3dSUqfzQ4DOmHwsX1GMUOYa9W3p0UzUkVd8hI9RjIM0GYrbSn/0mL80dD8D4IwGGYprAKX/8vIgwCiq6vzFh6WBH3j9nmHNPfvtMQAZACpSY/BzGaxW/tZ1vfCU743HAJRxzvJdTAilhKZBhmlZFGVVRDP5QYC3vPBXq9UuyHyU5nFWiXaWyfRRNkh9L7bBH2KPiwIhCu6MRFP1QX9o43C8hAjswCdnRgvOSxy5/Z+wUeqMtnmKMiQqeWYkdAa9B/P/k0XEWJmmgtAMuwOtwV1qI6ayyPm5QFS0krjDJnd9Nh/c3+e6SwWNRQbUGzRFr68THG2MO4kpo4gBBzNBpHDeVH1pllS8yvdWUwyyPoAAzhUiUIBs3Kho2lqkx/LFV3S5N3KWonrUh2cKr3GNp6HYLvxMnKF+k4U03J/SQOxmssoYz7vNkgoA9U7rmq+DztUS+p4UCDzPPF/5pEKTYWME2joijOWOofSen/v632ckK6yICIDzNEAp9VfdpiZCF0fuKXEBXTGXy791UqzNgWYX/qCVH2RLG90RRNmam5YClAsJjcwPnkuzIykqABBqiFaxv1tO/EljCPCwLEPkmkM4p96HUqgboWUkIEwA+D5sx60duL1GgIsNo7pem0s71UVccuhugKsKBxgFCCEAaBEiaYqFfJZhXevObB/D4pxh8AxyuOx2O9ueWPcB5DmpxTd3dCjsIiqYqB/IR5riCvZxgCANe3AfQN3Qy/mRjA3jHVfnT7uca5ygnY8mLSmoNaWBk2XieqJ0N8ZKGu+eW7SoBuBivQrF1Rf/+mjB6zaAOgWGSVmitOJNCOfq2DJhXIpYBiiOUdHoDvBRCw+kqRCNAhUYtt4dgCr8hkigWjGjNgDwc1MS7dOB4UHpaMqIs8eUNJWRJWabomsOqCfJGJ5aCy9jXyPgdN+WgThIOc9zlliSdfxaRmhv1G89UqRRzFiMy2OvPgq+AFRZg2xeAQzDskKUrjXjWH5x50XaxuPadLcooYtzdXr6HGs+r+JUjL8d0NQFiGiZDJUF+fRiH/6sJPG28Vi6ymF2oqiIDHlRKwNMVbmoJYPhJI/juE1MPsyKQMKOOjSBFAXFMcphIClPWz/GtKqS2bezob4/HfC+8yQbi/d3Z5vSsqSn49xc1pMJ2Xw7l/SOWXDaiB2rqKq+8MLQW097su7GCAQC+vuNvzJNEDr+Ub2OYVmGGCe0YxFv84qdZq3usmG6qe/ekk3tqFaIvcE6KVtzkDoz117t7Bt/yRg778fdzlS0eYSX5vAuFeClJkhJvr0B6IxjqD85jKQndbr1Ubi4g6C8ohTDJJLvrxF6Hkx20IC1CiwBpS+jebOoqeOgFlKGr/nacephXQiJ/i4O6iJq3lHywE6FDMEYc/W/uhak5KeFLJv1mwvH6+YkOm9xBQjYMa7opmwovK1V2VyWx0IpOT3c2RFSfxljxpL+DV2tMEO7EKYHaRCSgrN42TymiCd3O5y7+g2u5aKg2xczYGfkRAVFaN4cgTzHSfdwGN38qzk5/hwAZX1x9A73aqCuyamb4I0mgyl/zPBIOFPhi7gtq5p1pMfmYU9ZJHgSFNHYNF9fn8HeusJeDqndFT9fX01z0B/2J2l+U+cPM95s37bTfPX72uy/N36B/fPLDpavTSes1jdhzcnyH2G//mO/Lxdx++Wl2317Nvt/X5//BUlcOtC5guMJAAAAAElFTkSuQmCC",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 104400,
            actualAp: 58000,
            actualDps: 42439.06,
            magnification: "1160%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 7,
            actualAp: 1120,
            actualDps: 714.9,
            magnification: "140%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 358400,
            actualAp: 25200,
            actualDps: 6247.92,
            magnification: "280%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 7,
            actualAp: 1120,
            actualDps: 714.9,
            magnification: "140%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 7,
            actualAp: 1120,
            actualDps: 714.9,
            magnification: "140%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 9,
      stageName: "侵略 Lv.50",
      baseHp: 1160000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 130,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 2000,
            actualAp: 800,
            actualDps: 1600.0,
            magnification: "400%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 70000,
            actualAp: 28000,
            actualDps: 20487.74,
            magnification: "1400%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 1980000,
            actualAp: 55000,
            actualDps: 49995.0,
            magnification: "110000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 384000,
            actualAp: 27000,
            actualDps: 6694.2,
            magnification: "300%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 108000,
            actualAp: 60000,
            actualDps: 43902.48,
            magnification: "1200%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 7,
            actualAp: 1200,
            actualDps: 765.96,
            magnification: "150%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 384000,
            actualAp: 27000,
            actualDps: 6694.2,
            magnification: "300%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 7,
            actualAp: 1200,
            actualDps: 765.96,
            magnification: "150%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 7,
            actualAp: 1200,
            actualDps: 765.96,
            magnification: "150%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 10,
      stageName: "侵略 Lv.51",
      baseHp: 1200000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 130,
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
          treasureId: "91",
          treasureName: "素材（紫）",
          probability: "1",
          amount: "10",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 2100,
            actualAp: 840,
            actualDps: 1680.0,
            magnification: "420%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 72000,
            actualAp: 28800,
            actualDps: 21073.1,
            magnification: "1440%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 2034000,
            actualAp: 56500,
            actualDps: 51358.5,
            magnification: "113000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 396800,
            actualAp: 27900,
            actualDps: 6917.34,
            magnification: "310%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 111600,
            actualAp: 62000,
            actualDps: 45365.9,
            magnification: "1240%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8,
            actualAp: 1280,
            actualDps: 817.02,
            magnification: "160%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 396800,
            actualAp: 27900,
            actualDps: 6917.34,
            magnification: "310%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8,
            actualAp: 1280,
            actualDps: 817.02,
            magnification: "160%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8,
            actualAp: 1280,
            actualDps: 817.02,
            magnification: "160%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 11,
      stageName: "侵略 Lv.52",
      baseHp: 1240000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 130,
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
          treasureId: "36",
          treasureName: "赤マタタビの実",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 2200,
            actualAp: 880,
            actualDps: 1760.0,
            magnification: "440%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 74000,
            actualAp: 29600,
            actualDps: 21658.47,
            magnification: "1480%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 2088000,
            actualAp: 58000,
            actualDps: 52722.0,
            magnification: "116000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 409600,
            actualAp: 28800,
            actualDps: 7140.48,
            magnification: "320%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 115200,
            actualAp: 64000,
            actualDps: 46829.31,
            magnification: "1280%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8,
            actualAp: 1360,
            actualDps: 868.09,
            magnification: "170%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 409600,
            actualAp: 28800,
            actualDps: 7140.48,
            magnification: "320%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8,
            actualAp: 1360,
            actualDps: 868.09,
            magnification: "170%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8,
            actualAp: 1360,
            actualDps: 868.09,
            magnification: "170%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 12,
      stageName: "侵略 Lv.53",
      baseHp: 1280000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 130,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 2300,
            actualAp: 920,
            actualDps: 1840.0,
            magnification: "460%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 76000,
            actualAp: 30400,
            actualDps: 22243.83,
            magnification: "1520%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 2142000,
            actualAp: 59500,
            actualDps: 54085.5,
            magnification: "119000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 422400,
            actualAp: 29700,
            actualDps: 7363.62,
            magnification: "330%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 118800,
            actualAp: 66000,
            actualDps: 48292.73,
            magnification: "1320%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8,
            actualAp: 1360,
            actualDps: 868.09,
            magnification: "170%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 422400,
            actualAp: 29700,
            actualDps: 7363.62,
            magnification: "330%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8,
            actualAp: 1360,
            actualDps: 868.09,
            magnification: "170%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 8,
            actualAp: 1360,
            actualDps: 868.09,
            magnification: "170%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 13,
      stageName: "侵略 Lv.54",
      baseHp: 1320000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 130,
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
          treasureId: "90",
          treasureName: "素材（未来）",
          probability: "1",
          amount: "15",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 2400,
            actualAp: 960,
            actualDps: 1920.0,
            magnification: "480%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 78000,
            actualAp: 31200,
            actualDps: 22829.2,
            magnification: "1560%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 2196000,
            actualAp: 61000,
            actualDps: 55449.0,
            magnification: "122000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 435200,
            actualAp: 30600,
            actualDps: 7586.76,
            magnification: "340%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 122400,
            actualAp: 68000,
            actualDps: 49756.14,
            magnification: "1360%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1440,
            actualDps: 919.15,
            magnification: "180%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 435200,
            actualAp: 30600,
            actualDps: 7586.76,
            magnification: "340%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1440,
            actualDps: 919.15,
            magnification: "180%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1440,
            actualDps: 919.15,
            magnification: "180%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 14,
      stageName: "侵略 Lv.55",
      baseHp: 1360000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 140,
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
          treasureId: "35",
          treasureName: "紫マタタビの実",
          probability: "1",
          amount: "5",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 2500,
            actualAp: 1000,
            actualDps: 2000.0,
            magnification: "500%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 80000,
            actualAp: 32000,
            actualDps: 23414.56,
            magnification: "1600%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 2250000,
            actualAp: 62500,
            actualDps: 56812.5,
            magnification: "125000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 448000,
            actualAp: 31500,
            actualDps: 7809.9,
            magnification: "350%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 126000,
            actualAp: 70000,
            actualDps: 51219.56,
            magnification: "1400%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1440,
            actualDps: 919.15,
            magnification: "180%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 448000,
            actualAp: 31500,
            actualDps: 7809.9,
            magnification: "350%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1440,
            actualDps: 919.15,
            magnification: "180%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1440,
            actualDps: 919.15,
            magnification: "180%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 15,
      stageName: "侵略 Lv.56",
      baseHp: 1400000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 140,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "1500000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 2600,
            actualAp: 1040,
            actualDps: 2080.0,
            magnification: "520%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 82000,
            actualAp: 32800,
            actualDps: 23999.92,
            magnification: "1640%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 2304000,
            actualAp: 64000,
            actualDps: 58176.0,
            magnification: "128000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 460800,
            actualAp: 32400,
            actualDps: 8033.04,
            magnification: "360%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 129600,
            actualAp: 72000,
            actualDps: 52682.98,
            magnification: "1440%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1440,
            actualDps: 919.15,
            magnification: "180%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 460800,
            actualAp: 32400,
            actualDps: 8033.04,
            magnification: "360%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1440,
            actualDps: 919.15,
            magnification: "180%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1440,
            actualDps: 919.15,
            magnification: "180%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 16,
      stageName: "侵略 Lv.57",
      baseHp: 1440000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 140,
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
          treasureId: "88",
          treasureName: "素材（硬）",
          probability: "1",
          amount: "20",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 2700,
            actualAp: 1080,
            actualDps: 2160.0,
            magnification: "540%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 84000,
            actualAp: 33600,
            actualDps: 24585.29,
            magnification: "1680%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 2358000,
            actualAp: 65500,
            actualDps: 59539.5,
            magnification: "131000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 473600,
            actualAp: 33300,
            actualDps: 8256.18,
            magnification: "370%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 133200,
            actualAp: 74000,
            actualDps: 54146.39,
            magnification: "1480%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1440,
            actualDps: 919.15,
            magnification: "180%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 473600,
            actualAp: 33300,
            actualDps: 8256.18,
            magnification: "370%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1440,
            actualDps: 919.15,
            magnification: "180%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1440,
            actualDps: 919.15,
            magnification: "180%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 17,
      stageName: "侵略 Lv.58",
      baseHp: 1480000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 140,
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
          treasureId: "43",
          treasureName: "虹マタタビの種",
          probability: "1",
          amount: "1",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 2800,
            actualAp: 1120,
            actualDps: 2240.0,
            magnification: "560%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 86000,
            actualAp: 34400,
            actualDps: 25170.65,
            magnification: "1720%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 2412000,
            actualAp: 67000,
            actualDps: 60903.0,
            magnification: "134000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 486400,
            actualAp: 34200,
            actualDps: 8479.32,
            magnification: "380%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 136800,
            actualAp: 76000,
            actualDps: 55609.81,
            magnification: "1520%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1520,
            actualDps: 970.22,
            magnification: "190%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 486400,
            actualAp: 34200,
            actualDps: 8479.32,
            magnification: "380%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1520,
            actualDps: 970.22,
            magnification: "190%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1520,
            actualDps: 970.22,
            magnification: "190%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 18,
      stageName: "侵略 Lv.59",
      baseHp: 1520000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 140,
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
          treasureId: "6",
          treasureName: "ＸＰ",
          probability: "1",
          amount: "3000000",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 2900,
            actualAp: 1160,
            actualDps: 2320.0,
            magnification: "580%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 88000,
            actualAp: 35200,
            actualDps: 25756.02,
            magnification: "1760%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 2466000,
            actualAp: 68500,
            actualDps: 62266.5,
            magnification: "137000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 499200,
            actualAp: 35100,
            actualDps: 8702.46,
            magnification: "390%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 140400,
            actualAp: 78000,
            actualDps: 57073.22,
            magnification: "1560%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1520,
            actualDps: 970.22,
            magnification: "190%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 499200,
            actualAp: 35100,
            actualDps: 8702.46,
            magnification: "390%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1520,
            actualDps: 970.22,
            magnification: "190%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 9,
            actualAp: 1520,
            actualDps: 970.22,
            magnification: "190%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    },
    {
      stageId: 19,
      stageName: "侵略 Lv.60",
      baseHp: 1600000,
      width: 6200,
      enemyLimit: 12,
      requiredCost: 150,
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
          treasureId: "12",
          treasureName: "レアチケット",
          probability: "1",
          amount: "3",
          times: "-3",
          limitText: "-3"
        }],
      enemies: [
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
            actualHp: 3000,
            actualAp: 1200,
            actualDps: 2400.0,
            magnification: "600%",
            count: "0",
            spawnTime: "6.7s",
            spawnTimeFrames: "200f",
            delay: "6.7-10.0s",
            delayFrames: "200-300f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "knockback": {
                chance: 15
            }
          }
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
            actualHp: 90000,
            actualAp: 36000,
            actualDps: 26341.38,
            magnification: "1800%",
            count: "10",
            spawnTime: "10.0s",
            spawnTimeFrames: "300f",
            delay: "20.0-26.7s",
            delayFrames: "600-800f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "525",
          enemyName: "デッカーバチャン",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAABAQEBAQEBAQECAgIGBwcHBwgaIyMeJiYzQkA8S0lDUlFDZ2JqZWVNfHaDentbkYqOiIlhp5ubl5h0urCurq6Dx7+N3NCa6uHc2Nih/u6u/vy9///W+vz///////8WXyLXAAAAIHRSTlMfAD5m/pbBwff7w/36/v/////////////+//////8A/8LS6F8AAAO1SURBVFiF7ZbZlqMgEIaNIEIQXABRlvH933IKNItJxySnb+Zi6oKTpLs+/ypqsfjzSyv+A/4D/hHA6b2VtH71p88AlbfolwBHfwtg5a8AzvIXWfgMQJzX9GcJnwFq57sXF3EIKKsLwPuxYcXXADqQ9QMPbhoY+RaAhkXn6y+74F2HKXx5UnEEIJMPMqWumrz3ocO4plyc94wjAPXOByigognT0DBLMZ1Nz/nuOo4AzHsXJlLAHbhxHDCY4pzhXVG+U+DCgG1wDrRMDaYYU445+hBAbATPIDuXbHITTyIw47hGxSeAgujk6W0G6E5SmhCUMi2bM3oPAA3NmAhuM+sDb/ToRtZJqWuE6ho9AoqyvKgrUC2nzdX7yxmCD42MQQ4TkyE0O0BRMdl1ktc1qeuz1C5c/Ad9lQHfGms7N9opOj/dAxAbQzafnxbC1WNo2zuCH12DsQ8eLsTdAZC8ueztAQBxjFANUWJs9Q0A9eZ/9geCzv73YVg+dZ2byA1A/Ev/LYkg+sbwqc6Dra4A6LjX/qvH0Fm4gp1FdgVA673xb4TgvGlkuqh0NMnwBVDwNwJCI5bFUNO3LcVt20NjKdWT4gIg7o2AkS3LMnM4lr6Fg5zhiOhSypU+9gcBfXLgEU6hlkWVCaDKDVBpOxwTJpGeHZOMBY5Yn5IYnpupKGsd5XCYAz/SJaq4tI1SvF9mg06VUi3KgIqH6NlxDDBWeoEpiFbKLMa00HFlWa7tXFRyDPwQAG2MOcwCtWRT5jbhcw6gcak9BLg0DjHOiVhmZdAe8LaOgsW4pxdAr/riW0CXp+EGEOZ8+g6QUpCtzYDWVN8CHF0BZktB+QyojpLo7epPY9/3M2ynIs3OzwE+DCugN8IYoYw4lcKoag8YX88jaIQtgtQPSsznUw0f6h0AHZSy92yNILdha5bz6fwEyK8ALy3lkDJB5wQQi0H9E+BwpEIdCvCdcxm0wkSWSPscwC5/LQBCmGfVMirAqOAgpm3FA+BwJHnYpl2nxwFMp6ODmbi+el4Bl3v8GQPxwcJabdte0ZEdYLsG636+jWeu93vAOpZhduaCuKnZ9nLYrx3QETu0A2xJCJrKm1qQK1NosFPcbqF4b5uHJJ6QzuLDxKnUerRg46glTj/7kTMuZdokPC0XzurqoReuMcCT6hKv/8twhaouJilxrEqcNhKkn5TF80DJMWz6WEFC8gqRl0VJkz8Iq040xLQO/e6VdwWUqCKE0KQOHpzexPLia/IYoKvdPpEK3Sn4C4UJEUGdKZWVAAAAAElFTkSuQmCC",
          traits: ["エ"],
          baseStats: {
            hp: 1800,
            ap: 50,
            dps: 45.45,
            speed: 12,
            range: 222,
            rangeType: "範囲",
            kbLevel: 20,
            money: 1000,
            freq: 33,
            foreswing: 8,
            backswing: 25,
            tba: 0
          },
          stageStats: {
            actualHp: 2520000,
            actualAp: 70000,
            actualDps: 63630.0,
            magnification: "140000%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: true
          },
          abilities: {
            "omni-strike": {
                standing_range: 350,
                omni_range: [-300, 350]
            },
            "slow": {
                chance: 100,
                duration_f: 60,
                duration_s: 2.0
            },
            "colossus": {
                enabled: true
            }
          }
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 512000,
            actualAp: 36000,
            actualDps: 8925.6,
            magnification: "400%",
            count: "1",
            spawnTime: "33.3s",
            spawnTimeFrames: "1,000f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "042",
          enemyName: "セレブ",
          icon: "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",
          traits: ["無"],
          baseStats: {
            hp: 9000,
            ap: 5000,
            dps: 3658.54,
            speed: 20,
            range: 140,
            rangeType: "単体",
            kbLevel: 2,
            money: 700,
            freq: 41,
            foreswing: 17,
            backswing: 24,
            tba: 0
          },
          stageStats: {
            actualHp: 144000,
            actualAp: 80000,
            actualDps: 58536.64,
            magnification: "1600%",
            count: "3",
            spawnTime: "46.7s",
            spawnTimeFrames: "1,400f",
            delay: "36.7-40.0s",
            delayFrames: "1,100-1,200f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 10,
            actualAp: 1600,
            actualDps: 1021.28,
            magnification: "200%",
            count: "2",
            spawnTime: "66.7s",
            spawnTimeFrames: "2,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "256",
          enemyName: "タッちゃん",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAwFBMVEUAAAAAAAAAAAAAAAABAQEBAQECAgICAgIDAwMDAwMDAwMDAwMDAwMDAwMEBAQEBAQEBAQEBAQEBAQFBQUFBQUFBQUFBQUFBQQGBgYGBgYGBgYGBgYGBgYHBwcICAgICAgICAgJCQkMDAwqAAQQEBASEhIUFBQWFhYXFxcYGBgZGRkZGRkZGRkbGxsbGxsdHR0fHx9tAAkiIiIjIyMlJSUlJSUnJycoKCgoKCgtLS0wMDAxMTGkAQ03NzdCQkLpARSFG5znAAAAQHRSTlMAAwoPef+1+iIplbzv9R0wOEJRFajR3v9iaHDG6UtZhY2e//93//SC5f+Us8qh1Lz+//vzxd7q0P/6/+///v7/k4+qoQAABD9JREFUWIWll2l7sjoQhkVEQDYpSkBwi8Y24pLi0ojF/v9/dSYu3d6jNe1cfvBqzc3MZOaZoVL5ZlW3+v1PcmbE3t8AzVZH/RPAT5KHPwXhzyZW9y+E5ppOrL/4YGYcO0kUKL85XHUDRR3smKaHfa+qgEkC1IeOWe1tSqwhu97xfb/pBVUZiOInLd/LDgVFmm63Z7NkOR83VQmEYU2SuL89MKyBYYQx264fzfsJwXRCwsQGBy6GSLGfNz8RlJsOVeMtQzocx/gdgfl+br7/Qn0YezcIir8oKUYaYUT7RNiOL9Wtxounx1ul7g7LA9VwUVJyCgNpCOHd8txgSnfG+PJ6t1WDIN6WRKMlw1gAEBqNRhpksncqTXe+wnTTuwowa3EvgYcyBnEcPRi9vr0CYTU1Tg4sMCar8fUA+u16G4IuGToH8Pz29vaMEE26AZjRdyA/+fx6CL1wogsAP2dgJAAQBEqz6XQ+z57gcnCeXQUo3kyUAGaQAnwmvD6PhCs4z3NGRIEhtrwKgELaMyDQkiByQqDRORhhmBwBs+sA6KQDxeIaOSMf5fhRliKEWwBQgwOHXxJO/z0ORslPALWzL/H/HT0XJfyP5LcAFS8r2b8HHdvW9fN3cuMWRBaiTUG++2AP41orCdMjA+fDW4CKO9hy/JXg1JtV1TX9qC4IZNK/CVDM4Yp98cG5yLzSDcEBkkY3AUAYbHLyflxPh/5F5D1L16Cs/duAiuJGWXpuJtDnwYeABH1HQ3oj+AEAmTQ7i0sUthW5FwKIro7C3j0SGTxuyUkSwIdG8xKDGiXh0L3jPLTVekepqHz42Nn7sFT93i1J/OLCSjSF6EpEJkPjA33X8wPP7W4oPJwyTHmR3+f2p8ePl9NonYOgsrIEddEtua0Fmnq3ms0gCZTyozilsdS8N7MdI2QCmkAvN1GXGG8VpfcEUwFix2cJAUtrP1fPRwSPK6HKtBBnKRVSRtmseT9A7a84PJiVHCqBFZwXRbnLzJ8PvnvQmUDsIM0EAIRzIY9pRyKLit/mLH+C8QZqjk9pTGOZRUXtLBatdQlDFmbSqbHDSGpdMmqd6KVglGBS0OM1Jl0pgBIYj3soBUpIyWHR0ZyGZC0r5vpARAoIKcSgTHuSm2c13pSiCiEI0Q55IrvBB40Vh+HECnEFaPUylqjDo7nzHTwbFwcOCUgbXckMgH6/HAccZmVB7KFMI50BnT0X2xUgdqvWnRr22dRpSaEICQiqVfd/sbe7y53oZ6S3I6/5mxcgYw1VBG0sKUSfAaVY9HTLVL1u8xcQN4NbxNgZGJEVJj35INTpDhoB27WHdhg6ifw7mCKWdgyATmo1Qqdl/Hzkm3kWBw/0etwa1EJNuhOEqj1xUGbHajQs5zceVIz+Ioda0mG5Qm3ZXoa3GsP0+4sJFRMe2S3flHyjr/qDlpW0wzS1wcKkPoyv98N/ClqG9m7EDjgAAAAASUVORK5CYII=",
          traits: ["黒"],
          baseStats: {
            hp: 128000,
            ap: 9000,
            dps: 2231.4,
            speed: 6,
            range: 400,
            rangeType: "範囲",
            kbLevel: 2,
            money: 600,
            freq: 121,
            foreswing: 32,
            backswing: 19,
            tba: 45
          },
          stageStats: {
            actualHp: 512000,
            actualAp: 36000,
            actualDps: 8925.6,
            magnification: "400%",
            count: "1",
            spawnTime: "113.3s",
            spawnTimeFrames: "3,400f",
            delay: "0.1-0.1s",
            delayFrames: "2-2f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {
            "long-distance": {
                standing_range: 600,
                ld_range: [600, 850]
            }
          }
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 10,
            actualAp: 1600,
            actualDps: 1021.28,
            magnification: "200%",
            count: "3",
            spawnTime: "146.7s",
            spawnTimeFrames: "4,400f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        },
        {
          enemyId: "497",
          enemyName: "ワーニネーター",
          icon: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEEBAQLCwsbGxsqKio6OjpKSkoPfgdbXVptbW18fHyMjI2dnpyrq6u6urrIyMjOzs7U1NTe3t7u7u75+fn///////85vqbGAAAAIHRSTlMADSY8VXGEm7LO5/v7/v////////////////////8A/yxpw3gAAAM1SURBVFiF7VXZltsqELR2AQ0M+6rw/395G1kzseMsJ+e+5MF9bK1UdUFXo9u3/xm3N8Gb4E3wJngTvAneBG+Cf4/gjzGuhJJtxKth+PPo15ioMM4qtgwLofv41/iB6JxzOSJQ6YMmfyNi6JJnnlIKMR6OaaUdX+6v5m1FMcNvBa2Ukfm265z0h4q5KqWVYGTsqwJ4TWccsf4CPG3rykNxQJgt7sN92FSO1tqRDOw7VbEUlCRy4vNP8QvKZQYBQYE6CVyKZ+SSrAolRqVyrCl78gom28JCa9Y3jycpczLKXHiMhBwxecZCSQCJ/rButxm87MmPo1nmWhMm4ypmzB2fQmrk5KI8EQwbI0S3CrZF8C2m1ir39+TBXvnPI2o4H6b0NIWJV88komoLtp0R4cI5hpNOyVvEpuDTnbba7ZFgRrAz7ZC6fYbl95HZ7sTmlAVzOWaBtFnifeXTkwIo7XC1qvxFoLFUnaDoZYJQ7T4DVpfsulrK0w8CRgIRV660hzCQTrVFrLdVFphuq0h8GiHAuJlCH604EIVeyeER3wqTEXuhuu45At14Wz+ueD/Cs412cbTXMAyksQokih2m4awVzntYMPe8POI3jtpfKYzwinMVHBLMtCNm1ltyw8NMzl1ixK4bxl2UVuqrAsszOilnt+MaW5hvE7NiuS2cLxOXfUqEUQymqwEAca3/EY9LjL8bAQlG6qqnM9XVkQVCoDSEbiOiaymYW3JsMX+VQMGnmAjhdJKj1OZYLJPoA4luyNqUQHEyE4t9oOMP+hV8OaHA5WWpu4uTvxs7dXemk6C3T3eMuRAo3bKvmbSD27uVrn58OKGl7zvcRIQ/1GV+7IPELi9UhZ5WMn/v5RPZf2cUv18WmgmAOzFOZqzcPX0FhacAIffmOx3Z64FViaFHLOr7jjZt6kRxFFJ4upbibCopQq9kx6borZKCAzAMDk9OJtdaupANv9ewCldiMIxJ47x3VgvAT8wyTWOPaZqe9vjllHDwnTDB1FVDRvd9B4dIzEn2dfr1Z2EYqZRaGD4vwnlQBza7r4pgNuKcsbiN//YjMK/bTjDoZwBQ6A7Ff3/Y323rz/bw/wCWyG8IjXvhRwAAAABJRU5ErkJggg==",
          traits: ["メ"],
          baseStats: {
            hp: 5,
            ap: 800,
            dps: 510.64,
            speed: 12,
            range: 110,
            rangeType: "単体",
            kbLevel: 1,
            money: 150,
            freq: 47,
            foreswing: 8,
            backswing: 10,
            tba: 20
          },
          stageStats: {
            actualHp: 10,
            actualAp: 1600,
            actualDps: 1021.28,
            magnification: "200%",
            count: "2",
            spawnTime: "233.3s",
            spawnTimeFrames: "7,000f",
            delay: "10.0-13.3s",
            delayFrames: "300-400f",
            baseHpRatio: "100%",
            isBoss: false
          },
          abilities: {}
        }]
    }
  ]
} as const;

export default e24011Data;

